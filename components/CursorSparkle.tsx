"use client";

import { useEffect, useState, CSSProperties } from "react";

interface Sparkle {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  size: number;
  color: string;
}

interface CursorSparkleProps {
  colors?: string[];
  sparklesPerClick?: number;
}

export default function CursorSparkle({
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#ec4899", "#f59e0b", "#10b981"],
  sparklesPerClick = 12,
}: CursorSparkleProps) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSparkles: Sparkle[] = [];
      const baseAngle = Math.random() * Math.PI * 2;

      for (let i = 0; i < sparklesPerClick; i++) {
        const angle = baseAngle + (i / sparklesPerClick) * Math.PI * 2;
        newSparkles.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          angle,
          distance: 30 + Math.random() * 50,
          size: 4 + Math.random() * 6,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      setSparkles((prev) => [...prev, ...newSparkles]);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [colors, sparklesPerClick]);

  // Animate sparkles
  useEffect(() => {
    if (sparkles.length === 0) return;

    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((s) => ({
            ...s,
            distance: s.distance * 0.92,
            size: s.size * 0.9,
          }))
          .filter((s) => s.size > 1)
      );
    }, 20);

    return () => clearInterval(interval);
  }, [sparkles.length]);

  return (
    <>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          style={{
            position: "fixed",
            left: sparkle.x + Math.cos(sparkle.angle) * sparkle.distance,
            top: sparkle.y + Math.sin(sparkle.angle) * sparkle.distance,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: "50%",
            background: sparkle.color,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
            pointerEvents: "none",
            zIndex: 9999,
            opacity: sparkle.size / 10,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </>
  );
}