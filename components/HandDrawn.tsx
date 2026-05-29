"use client";

interface HandDrawnProps {
  className?: string;
}

// Decorative blob shape
export function BlobShape({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <path
        d="M45.2,-52.3C56.9,-43.1,64.3,-28.9,68.6,-13.8C72.9,1.3,74.1,17.2,68.2,30.5C62.3,43.8,49.3,54.5,34.8,60.1C20.3,65.7,4.3,66.2,-11.5,-58.7C-27.3,-51.2,-43,-39.4,-52.1,-24.8C-61.2,-10.2,-63.7,7.1,-61.6,23.3C-59.5,39.5,-52.8,54.6,-40.9,63C-29,71.4,-12.4,73.1,3.4,70.5C19.2,67.9,33.5,61.5,45.2,52.3Z"
        transform="translate(100 100)"
        fill="currentColor"
        className="text-blue-500/10 dark:text-cyan-400/10"
      />
    </svg>
  );
}

// Hand-drawn style wave divider
export function WaveDivider({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 1440 120" className={className} preserveAspectRatio="none">
      <path
        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
        fill="currentColor"
        className="text-gray-100 dark:text-[#0a0a1a]"
      />
    </svg>
  );
}

// Decorative dots cluster
export function DotsCluster({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <circle cx="20" cy="20" r="3" fill="currentColor" className="text-blue-400/40" />
      <circle cx="40" cy="15" r="2" fill="currentColor" className="text-purple-400/40" />
      <circle cx="60" cy="25" r="4" fill="currentColor" className="text-cyan-400/40" />
      <circle cx="80" cy="18" r="2" fill="currentColor" className="text-blue-400/30" />
      <circle cx="30" cy="45" r="3" fill="currentColor" className="text-purple-400/30" />
      <circle cx="50" cy="50" r="2" fill="currentColor" className="text-cyan-400/40" />
      <circle cx="70" cy="42" r="3" fill="currentColor" className="text-blue-400/40" />
      <circle cx="25" cy="70" r="2" fill="currentColor" className="text-purple-400/30" />
      <circle cx="45" cy="75" r="4" fill="currentColor" className="text-cyan-400/30" />
      <circle cx="65" cy="68" r="2" fill="currentColor" className="text-blue-400/40" />
      <circle cx="85" cy="72" r="3" fill="currentColor" className="text-purple-400/40" />
    </svg>
  );
}

// Hand-drawn style arrow
export function HandDrawnArrow({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 40 Q 15 35, 10 30 Q 20 25, 30 15" className="text-gray-400 dark:text-white/20" />
      <path d="M25 12 L 30 15 L 27 22" className="text-gray-400 dark:text-white/20" />
    </svg>
  );
}

// Code brackets decoration
export function CodeBrackets({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8 12 L 2 20 L 8 28" className="text-blue-400/30 dark:text-cyan-400/20" />
      <path d="M32 12 L 38 20 L 32 28" className="text-blue-400/30 dark:text-cyan-400/20" />
      <path d="M20 8 L 20 32" className="text-purple-400/30 dark:text-purple-400/20" />
    </svg>
  );
}

// Floating stars for dark mode
export function FloatingStar({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path
        d="M12 2L13.5 9L21 10L13.5 11L12 18L10.5 11L3 10L10.5 9L12 2Z"
        className="text-white/10"
      />
    </svg>
  );
}

// Abstract face illustration (simplified)
export function AbstractFace({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 200 200" className={className}>
      {/* Head outline - hand drawn style */}
      <ellipse
        cx="100"
        cy="100"
        rx="70"
        ry="85"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
        className="text-blue-400/20 dark:text-cyan-400/15"
      />
      {/* Eyes */}
      <circle cx="70" cy="85" r="8" fill="currentColor" className="text-blue-400/40 dark:text-cyan-400/30" />
      <circle cx="130" cy="85" r="8" fill="currentColor" className="text-blue-400/40 dark:text-cyan-400/30" />
      {/* Smile */}
      <path
        d="M70 130 Q 100 160, 130 130"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-purple-400/40 dark:text-purple-400/30"
      />
      {/* Decorative lines */}
      <path d="M30 100 L 45 100" stroke="currentColor" strokeWidth="2" className="text-blue-400/20" />
      <path d="M155 100 L 170 100" stroke="currentColor" strokeWidth="2" className="text-blue-400/20" />
    </svg>
  );
}

// Geometric mountains
export function Mountains({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 400 150" className={className} preserveAspectRatio="none">
      <path
        d="M0 150 L 80 50 L 120 90 L 180 30 L 250 80 L 300 40 L 350 70 L 400 50 L 400 150 Z"
        fill="currentColor"
        className="text-blue-500/10 dark:text-cyan-500/10"
      />
      <path
        d="M0 150 L 60 80 L 140 120 L 200 60 L 280 100 L 340 70 L 400 90 L 400 150 Z"
        fill="currentColor"
        className="text-purple-500/10 dark:text-purple-500/10"
      />
    </svg>
  );
}

// Plus sign decorations
export function PlusSigns({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M48 20 L 52 20 L 52 48 L 80 48 L 80 52 L 52 52 L 52 80 L 48 80 L 48 52 L 20 52 L 20 48 L 48 48 Z" className="text-blue-400/20 dark:text-cyan-400/15" />
    </svg>
  );
}