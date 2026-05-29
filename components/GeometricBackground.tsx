"use client";

import { useEffect, useState } from "react";

export default function GeometricBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Dark gradient base with cyberpunk colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-purple-600/15 blur-[100px]" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-cyan-600/15 blur-[100px]" />

      {/* Grid lines */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: "180px 180px",
          }}
        />
      </div>

      {/* Scan lines effect */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`,
        }}
      />

      {/* Floating neon dots */}
      <div className="absolute top-20 left-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
      <div className="absolute top-40 right-[20%] w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
      <div className="absolute top-60 left-[25%] w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
      <div className="absolute bottom-40 right-[15%] w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] animate-pulse" />
      <div className="absolute bottom-60 left-[40%] w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
      <div className="absolute top-[70%] right-[30%] w-1 h-1 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-blue-500/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-purple-500/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-cyan-500/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-500/20" />

      {/* Animated glow line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </div>
  );
}