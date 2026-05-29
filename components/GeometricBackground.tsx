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
  const [isDark, setIsDark] = useState(true);

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.2,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = !document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);

    const handleScroll = () => setScrollY(window.scrollY);
    const observer = new MutationObserver(() => {
      setIsDark(!document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  if (!isDark) {
    // Light mode - soft warm gradient
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-100/20 to-purple-100/20 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-50 to-blue-50/30 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }} />
      </div>
    );
  }

  // Dark mode - cosmic aurora
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d24] to-[#151530]" />

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

      <div className="absolute top-1/4 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
      <div className="absolute top-1/3 right-1/3 w-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-30" />

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