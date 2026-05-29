"use client";

import { useEffect, useState, CSSProperties } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface RippleEffectProps {
  colors?: string[];
  rippleSize?: number;
}

export default function RippleEffect({
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4"],
  rippleSize = 200,
}: RippleEffectProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [colors]);

  return (
    <>
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          style={{
            position: "fixed",
            left: ripple.x,
            top: ripple.y,
            width: rippleSize,
            height: rippleSize,
            borderRadius: "50%",
            border: `2px solid ${ripple.color}`,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 9996,
            animation: "ripple-expand 0.6s ease-out forwards",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple-expand {
          0% {
            width: 0;
            height: 0;
            opacity: 0.8;
          }
          100% {
            width: ${rippleSize}px;
            height: ${rippleSize}px;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}