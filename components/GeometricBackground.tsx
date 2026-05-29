"use client";

import { useEffect, useState, useMemo } from "react";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "circle" | "square";
  color: string;
}

export default function GeometricBackground() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const shapes = useMemo<Shape[]>(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: 60 + Math.random() * 120,
      duration: 20 + Math.random() * 15,
      delay: Math.random() * 10,
      type: i % 2 === 0 ? "circle" : "square",
      color: ["#3b82f6", "#8b5cf6", "#06b6d4", "#ec4899", "#10b981", "#f59e0b"][i],
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
    // Light mode - creative textured
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/20" />

        {/* Floating geometric shapes - subtle and elegant */}
        {shapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute opacity-[0.06]"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              transform: `translateY(${scrollY * 0.05 * (shape.id % 3 + 1)}px)`,
              animation: `float-${shape.id} ${shape.duration}s ease-in-out infinite`,
              animationDelay: `${shape.delay}s`,
            }}
          >
            {shape.type === "circle" ? (
              <div
                className="rounded-full"
                style={{
                  width: shape.size,
                  height: shape.size,
                  background: `linear-gradient(135deg, ${shape.color}20, ${shape.color}05)`,
                  border: `1px solid ${shape.color}15`,
                }}
              />
            ) : (
              <div
                style={{
                  width: shape.size * 0.8,
                  height: shape.size * 0.8,
                  background: `linear-gradient(135deg, ${shape.color}10, ${shape.color}05)`,
                  border: `1px solid ${shape.color}15`,
                  transform: "rotate(15deg)",
                }}
              />
            )}
          </div>
        ))}

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />

        {/* Soft gradient orbs */}
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/30 blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-cyan-100/40 to-blue-100/30 blur-[60px]" />

        <style jsx>{`
          ${shapes.map((shape) => `
            @keyframes float-${shape.id} {
              0%, 100% { transform: translateY(${scrollY * 0.05 * (shape.id % 3 + 1)}px) rotate(0deg); }
              50% { transform: translateY(${scrollY * 0.05 * (shape.id % 3 + 1) - 15}px) rotate(5deg); }
            }
          `).join("")}
        `}</style>
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

      {/* Stars */}
      {Array.from({ length: 50 }, (_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 2 + 1,
            height: Math.random() * 2 + 1,
            opacity: Math.random() * 0.4 + 0.2,
            animation: `twinkle-${i} ${2 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="absolute top-1/4 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
      <div className="absolute top-1/3 right-1/3 w-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-30" />

      <style jsx>{`
        ${Array.from({ length: 50 }, (_, i) => `
          @keyframes twinkle-${i} {
            0%, 100% { opacity: ${Math.random() * 0.4 + 0.2}; transform: scale(1); }
            50% { opacity: ${(Math.random() * 0.4 + 0.2) * 0.3}; transform: scale(0.8); }
          }
        `).join("")}
      `}</style>
    </div>
  );
}