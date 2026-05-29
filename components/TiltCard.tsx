"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
}

export default function TiltCard({ children, className = "", tiltIntensity = 15 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -tiltIntensity;
      const rotateY = ((x - centerX) / centerX) * tiltIntensity;
      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isHovering, tiltIntensity]);

  const style: CSSProperties = {
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovering ? "scale(1.02)" : "scale(1)"}`,
    transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
  };

  return (
    <div ref={cardRef} style={style} className={className}>
      {children}
    </div>
  );
}