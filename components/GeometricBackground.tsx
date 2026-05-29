"use client";

import { useEffect, useState, useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function GeometricBackground() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep space gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d24] to-[#151530]" />

      {/* Aurora gradient layers */}
      <div
        className="absolute top-0 left-1/4 w-[800px] h-[600px] rounded-full opacity-30 blur-[120px]"
        style={{
          background: "linear-gradient(180deg, #00d4aa 0%, #1e40af 50%, #7c3aed 100%)",
          transform: `translateX(-50%) translateY(${scrollY * 0.15}px)`,
        }}
      />
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[500px] rounded-full opacity-25 blur-[100px]"
        style={{
          background: "linear-gradient(180deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
          transform: `translateX(50%) translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        className="absolute top-20 left-1/2 w-[400px] h-[300px] rounded-full opacity-20 blur-[80px]"
        style={{
          background: "linear-gradient(180deg, #06b6d4 0%, #22d3ee 100%)",
          transform: `translateX(-50%) translateY(${scrollY * 0.08}px)`,
        }}
      />

      {/* Twinkling stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animation: `twinkle-${star.id} ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}

      {/* Subtle star streaks */}
      <div className="absolute top-1/4 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
      <div className="absolute top-1/3 right-1/3 w-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-30" />
      <div className="absolute bottom-1/3 left-1/2 w-20 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-15" />

      {/* Constellation dots */}
      <div className="absolute top-[15%] right-[20%] flex gap-2">
        <div className="w-1 h-1 rounded-full bg-white/60" />
        <div className="w-1 h-1 rounded-full bg-white/40 mt-2" />
        <div className="w-1 h-1 rounded-full bg-white/60 mt-4" />
      </div>
      <div className="absolute top-[30%] left-[15%] flex gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        <div className="w-1 h-1 rounded-full bg-white/30 mt-3 ml-1" />
        <div className="w-1 h-1 rounded-full bg-white/40 mt-1 ml-2" />
      </div>

      <style jsx>{`
        ${stars
          .map(
            (star) => `
          @keyframes twinkle-${star.id} {
            0%, 100% { opacity: ${star.opacity}; transform: scale(1); }
            50% { opacity: ${star.opacity * 0.3}; transform: scale(0.8); }
          }
        `
          )
          .join("")}
      `}</style>
    </div>
  );
}