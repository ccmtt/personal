"use client";

import { useEffect, useState, CSSProperties } from "react";

interface GlowCursorProps {
  colors?: string[];
  size?: number;
  blur?: number;
  trailCount?: number;
}

interface TrailDot {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

export default function GlowCursor({
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#ec4899"],
  size = 40,
  blur = 30,
  trailCount = 6,
}: GlowCursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<TrailDot[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    let lastX = -100;
    let lastY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX;
      const newY = e.clientY;

      // Change color based on movement direction
      const dx = newX - lastX;
      const dy = newY - lastY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        setCurrentColorIndex((prev) => (prev + 1) % colors.length);
      }

      lastX = newX;
      lastY = newY;

      setPosition({ x: newX, y: newY });
      setIsVisible(true);

      // Add trail dot
      const newTrail: TrailDot = {
        id: Date.now(),
        x: newX,
        y: newY,
        color: colors[currentColorIndex],
        size: size * 0.6,
      };

      setTrails((prev) => {
        const updated = [...prev, newTrail];
        return updated.slice(-trailCount);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [colors, currentColorIndex, size, trailCount]);

  // Fade out trails
  useEffect(() => {
    if (trails.length === 0) return;

    const interval = setInterval(() => {
      setTrails((prev) =>
        prev
          .map((t) => ({ ...t, size: t.size * 0.92 }))
          .filter((t) => t.size > 5)
      );
    }, 30);

    return () => clearInterval(interval);
  }, [trails.length]);

  const mainStyle: CSSProperties = {
    position: "fixed",
    left: position.x,
    top: position.y,
    width: size,
    height: size,
    borderRadius: "50%",
    background: `radial-gradient(circle at center, ${colors[currentColorIndex]}50 0%, ${colors[currentColorIndex]}25 40%, transparent 70%)`,
    boxShadow: `0 0 ${blur}px ${blur / 2}px ${colors[currentColorIndex]}40`,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9998,
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.3s ease-out",
  };

  return (
    <>
      {/* Trail dots */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          style={{
            position: "fixed",
            left: trail.x,
            top: trail.y,
            width: trail.size,
            height: trail.size,
            borderRadius: "50%",
            background: `radial-gradient(circle at center, ${trail.color}40 0%, transparent 70%)`,
            boxShadow: `0 0 ${trail.size}px ${trail.size / 2}px ${trail.color}30`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9997,
            opacity: isVisible ? 0.6 : 0,
            transition: "opacity 0.3s ease-out",
          }}
        />
      ))}

      {/* Main cursor glow */}
      <div style={mainStyle} />
    </>
  );
}