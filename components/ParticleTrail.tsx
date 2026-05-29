"use client";

import { useEffect, useState, useRef } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  life: number;
}

const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#ec4899", "#10b981", "#f59e0b", "#ef4444"];

export default function ParticleTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleIdRef = useRef(0);

  useEffect(() => {
    setIsDark(!document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(!document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let lastX = 0;
    let lastY = 0;
    let throttleTimer: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      if (throttleTimer) return;

      throttleTimer = setTimeout(() => {
        const x = e.clientX;
        const y = e.clientY;

        // Only create particle if mouse moved enough
        const dx = x - lastX;
        const dy = y - lastY;
        if (Math.abs(dx) < 5 && Math.abs(dy) < 5) return;

        lastX = x;
        lastY = y;

        const newParticle: Particle = {
          id: particleIdRef.current++,
          x,
          y,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 3,
          life: 1,
        };

        setParticles((prev) => [...prev, newParticle]);
      }, 30);
    };

    const handleClick = (e: MouseEvent) => {
      // Create burst of particles on click
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const speed = 2 + Math.random() * 3;
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
          life: 1,
        };
        setParticles((prev) => [...prev, newParticle]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, [isMobile]);

  // Animate particles
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, life: p.life - 0.02, size: p.size * 0.98 }))
          .filter((p) => p.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles.length]);

  if (isMobile) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9999]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: p.color,
            opacity: p.life * 0.8,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.1s, width 0.1s, height 0.1s",
          }}
        />
      ))}
    </div>
  );
}