"use client";

import { useEffect, useState, useMemo, CSSProperties } from "react";

interface Blob {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  blur: string;
}

interface AuroraOrb {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  colors: string[];
  blur: string;
  speed: number;
}

export default function GeometricBackground() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const blobs = useMemo<Blob[]>(() => [
    { id: 0, x: -10, y: -10, size: 500, color: "#3b82f6", blur: "150px" },
    { id: 1, x: 60, y: 20, size: 400, color: "#8b5cf6", blur: "120px" },
    { id: 2, x: 20, y: 60, size: 350, color: "#06b6d4", blur: "100px" },
    { id: 3, x: 70, y: 70, size: 300, color: "#ec4899", blur: "100px" },
  ], []);

  // Supabase-style aurora orbs for dark mode
  const auroraOrbs = useMemo<AuroraOrb[]>(() => [
    { id: 0, x: -20, y: -30, width: 600, height: 500, colors: ["#00d4aa", "#3b82f6", "#8b5cf6"], blur: "150px", speed: 0.15 },
    { id: 1, x: 50, y: 20, width: 500, height: 400, colors: ["#3b82f6", "#8b5cf6", "#ec4899"], blur: "120px", speed: 0.1 },
    { id: 2, x: 30, y: 50, width: 400, height: 350, colors: ["#06b6d4", "#22d3ee", "#3b82f6"], blur: "100px", speed: 0.08 },
    { id: 3, x: 70, y: 60, width: 300, height: 280, colors: ["#8b5cf6", "#a855f7", "#ec4899"], blur: "80px", speed: 0.12 },
  ], []);

  const dots = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      opacity: Math.random() * 0.2 + 0.05,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
    setIsDark(!document.documentElement.classList.contains("dark"));

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
    // Light mode - colorful gradient blobs
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Colorful gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/60" />

        {/* Large colored blobs */}
        {blobs.map((blob) => (
          <div
            key={blob.id}
            className="absolute rounded-full"
            style={{
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: blob.size,
              height: blob.size,
              background: `radial-gradient(circle at center, ${blob.color}30 0%, ${blob.color}10 40%, transparent 70%)`,
              filter: `blur(${blob.blur})`,
              transform: `translateY(${scrollY * (0.02 + blob.id * 0.01)}px)`,
            }}
          />
        ))}

        {/* Decorative dots */}
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
              background: `linear-gradient(135deg, #3b82f6, #8b5cf6)`,
              opacity: dot.opacity,
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          />
        ))}

        {/* Soft grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(#3b82f6 1px, transparent 1px),
            linear-gradient(90deg, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }} />
      </div>
    );
  }

  // Dark mode - Supabase-style cosmic aurora with gradient orbs
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0d0d24] to-[#151530]" />

      {/* Gradient orbs with multiple colors */}
      {auroraOrbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.width,
            height: orb.height,
            background: `linear-gradient(180deg, ${orb.colors[0]} 0%, ${orb.colors[1]} 50%, ${orb.colors[2]} 100%)`,
            filter: `blur(${orb.blur})`,
            opacity: 0.25 + orb.id * 0.05,
            transform: `translateX(-50%) translateY(${scrollY * orb.speed}px)`,
          }}
        />
      ))}

      {/* Radial glow overlay - Supabase style */}
      <div
        className="absolute top-1/4 left-1/2 w-[600px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, #3b82f620 0%, transparent 70%)",
          transform: "translateX(-50%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute top-1/2 right-1/4 w-[400px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, #8b5cf615 0%, transparent 70%)",
          transform: "translateX(50%)",
          filter: "blur(40px)",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 80 }, (_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            opacity: Math.random() * 0.6 + 0.2,
            animation: `twinkle-${i} ${2 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Subtle grid lines */}
      <div className="absolute top-1/4 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />

      <style jsx>{`
        ${Array.from({ length: 80 }, (_, i) => `
          @keyframes twinkle-${i} {
            0%, 100% { opacity: ${Math.random() * 0.5 + 0.2}; transform: scale(1); }
            50% { opacity: ${(Math.random() * 0.4 + 0.1)}; transform: scale(${Math.random() * 0.3 + 0.7}); }
          }
        `).join("")}
      `}</style>
    </div>
  );
}