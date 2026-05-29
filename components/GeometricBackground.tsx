"use client";

import { useEffect, useState } from "react";

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
  type: "circle" | "square" | "triangle";
}

export default function GeometricBackground() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const generatedShapes: Shape[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 60,
      rotation: Math.random() * 360,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      type: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as Shape["type"],
    }));
    setShapes(generatedShapes);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

      {/* Floating shapes */}
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            animation: `float-${shape.id} ${shape.duration}s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.type === "circle" && (
            <div
              className="rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-500/5 dark:to-purple-500/5 backdrop-blur-sm"
              style={{
                width: shape.size,
                height: shape.size,
                animation: `rotate ${shape.duration * 0.5}s linear infinite`,
              }}
            />
          )}
          {shape.type === "square" && (
            <div
              className="bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-500/5 dark:to-blue-500/5 backdrop-blur-sm"
              style={{
                width: shape.size,
                height: shape.size,
                transform: `rotate(${shape.rotation}deg)`,
                animation: `rotate ${shape.duration * 0.3}s linear infinite`,
              }}
            />
          )}
          {shape.type === "triangle" && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size}px solid rgba(139, 92, 246, 0.1)`,
                animation: `rotate ${shape.duration * 0.4}s linear infinite`,
              }}
            />
          )}
        </div>
      ))}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* CSS animations */}
      <style jsx>{`
        ${shapes
          .map(
            (shape) => `
          @keyframes float-${shape.id} {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
            }
            25% {
              transform: translate(${Math.sin(shape.id) * 30}px, ${Math.cos(shape.id) * 20}px) rotate(90deg);
            }
            50% {
              transform: translate(${Math.cos(shape.id) * 20}px, ${Math.sin(shape.id) * 30}px) rotate(180deg);
            }
            75% {
              transform: translate(${Math.sin(shape.id) * -20}px, ${Math.cos(shape.id) * -20}px) rotate(270deg);
            }
          }
        `
          )
          .join("")}
      `}</style>
    </div>
  );
}