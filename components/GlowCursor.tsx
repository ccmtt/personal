"use client";

import { useEffect, useState, CSSProperties } from "react";

interface GlowCursorProps {
  color?: string;
  size?: number;
  blur?: number;
}

export default function GlowCursor({ color = "#3b82f6", size = 30, blur = 20 }: GlowCursorProps) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      }, 5);
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
      clearTimeout(timeoutId);
    };
  }, []);

  const style: CSSProperties = {
    position: "fixed",
    left: position.x,
    top: position.y,
    width: size,
    height: size,
    borderRadius: "50%",
    background: `radial-gradient(circle at center, ${color}40 0%, ${color}20 40%, transparent 70%)`,
    boxShadow: `0 0 ${blur}px ${blur / 2}px ${color}30`,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 9998,
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.3s ease-out",
  };

  return <div style={style} />;
}