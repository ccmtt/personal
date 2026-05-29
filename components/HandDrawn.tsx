"use client";

import { CSSProperties } from "react";

interface HandDrawnProps {
  className?: string;
  style?: CSSProperties;
}

// Animated dashed line - hand-drawn style
export function DashedLine({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none">
      <path
        d="M0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="8 6"
        strokeLinecap="round"
        className="text-purple-400/50 dark:text-purple-400/40 animate-dash"
      />
    </svg>
  );
}

// Hand-drawn squiggly underline
export function SquigglyUnderline({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 100 10" className={className} fill="none">
      <path
        d="M0 5 Q 5 2, 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-blue-400/60 dark:text-cyan-400/50"
      />
    </svg>
  );
}

// Hand-drawn arrow
export function HandDrawnArrow({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 60 40" className={className} fill="none">
      <path
        d="M5 20 Q 15 18, 25 20 T 45 20 L 52 15 M 52 15 L 55 20 L 48 22 M 52 15 L 52 25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-purple-400/60 dark:text-purple-400/50"
      />
    </svg>
  );
}

// Squircle (Superellipse) - Excalidraw style
export function Squircle({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <path
        d="M50 5 C 75 5, 95 25, 95 50 C 95 75, 75 95, 50 95 C 25 95, 5 75, 5 50 C 5 25, 25 5, 50 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 4"
        className="text-blue-400/40 dark:text-cyan-400/30"
      />
    </svg>
  );
}

// Hand-drawn cloud shape
export function Cloud({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 120 80" className={className} fill="none">
      <path
        d="M30 60 Q 10 60, 10 45 Q 10 30, 25 25 Q 25 10, 45 10 Q 55 5, 65 15 Q 80 10, 90 25 Q 110 25, 110 45 Q 115 60, 100 60 Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        className="text-purple-400/40 dark:text-purple-400/30"
      />
    </svg>
  );
}

// Decorative dots with varying sizes - Excalidraw style
export function DotsScatter({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 150 100" className={className}>
      <circle cx="10" cy="20" r="3" fill="currentColor" className="text-blue-400/50" />
      <circle cx="30" cy="10" r="2" fill="currentColor" className="text-purple-400/50" />
      <circle cx="50" cy="30" r="4" fill="currentColor" className="text-cyan-400/50" />
      <circle cx="70" cy="15" r="2.5" fill="currentColor" className="text-blue-400/40" />
      <circle cx="90" cy="35" r="3.5" fill="currentColor" className="text-purple-400/50" />
      <circle cx="110" cy="20" r="2" fill="currentColor" className="text-cyan-400/50" />
      <circle cx="130" cy="40" r="3" fill="currentColor" className="text-blue-400/50" />
      <circle cx="20" cy="50" r="2.5" fill="currentColor" className="text-purple-400/50" />
      <circle cx="40" cy="60" r="3" fill="currentColor" className="text-cyan-400/50" />
      <circle cx="60" cy="45" r="2" fill="currentColor" className="text-blue-400/50" />
      <circle cx="80" cy="55" r="3.5" fill="currentColor" className="text-purple-400/50" />
      <circle cx="100" cy="65" r="2.5" fill="currentColor" className="text-cyan-400/50" />
      <circle cx="120" cy="50" r="3" fill="currentColor" className="text-blue-400/50" />
      <circle cx="140" cy="70" r="2" fill="currentColor" className="text-purple-400/50" />
      <circle cx="25" cy="80" r="4" fill="currentColor" className="text-cyan-400/50" />
      <circle cx="55" cy="75" r="2.5" fill="currentColor" className="text-blue-400/50" />
      <circle cx="85" cy="85" r="3" fill="currentColor" className="text-purple-400/50" />
      <circle cx="115" cy="80" r="2" fill="currentColor" className="text-cyan-400/50" />
    </svg>
  );
}

// Hand-drawn bracket
export function BracketLeft({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 30 80" className={className} fill="none">
      <path
        d="M25 5 Q 5 5, 5 20 T 5 40 T 5 60 Q 5 75, 25 75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className="text-purple-400/50 dark:text-purple-400/40"
      />
    </svg>
  );
}

export function BracketRight({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 30 80" className={className} fill="none">
      <path
        d="M5 5 Q 25 5, 25 20 T 25 40 T 25 60 Q 25 75, 5 75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className="text-purple-400/50 dark:text-purple-400/40"
      />
    </svg>
  );
}

// Cross/X mark decoration
export function CrossMark({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 30 30" className={className} fill="none">
      <path
        d="M5 5 Q 15 12, 25 5 M 5 25 Q 12 15, 25 25"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="text-red-400/50 dark:text-red-400/40"
      />
    </svg>
  );
}

// Checkmark decoration
export function CheckMark({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 30 30" className={className} fill="none">
      <path
        d="M5 15 L 12 22 L 25 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-400/60 dark:text-green-400/50"
      />
    </svg>
  );
}

// Large decorative blob for background
export function LargeBlob({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none">
      <path
        d="M72.4,-97.6C93.3,-80.1,106.3,-56.7,110.2,-31.8C114.1,-7,109,19.3,96.6,41.5C84.1,63.7,64.3,81.8,40.8,93.6C17.3,105.4,-9.8,110.9,-35.3,103.6C-60.8,96.3,-84.7,76.2,-100.5,50.4C-116.3,24.6,-124.1,-7,-118.4,-36.6C-112.7,-66.2,-93.4,-93.8,-68.3,-107.5C-43.2,-121.2,-12.3,-121,15.3,-110.5C42.9,-100,51.5,-115.1,72.4,-97.6Z"
        transform="translate(200 200)"
        fill="currentColor"
        className="text-purple-400/20 dark:text-purple-500/15"
      />
    </svg>
  );
}

// Decorative dots cluster - larger and more visible
export function DotsCluster({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <circle cx="20" cy="20" r="6" fill="currentColor" className="text-blue-500/60" />
      <circle cx="50" cy="15" r="8" fill="currentColor" className="text-purple-500/50" />
      <circle cx="80" cy="25" r="5" fill="currentColor" className="text-cyan-500/60" />
      <circle cx="100" cy="15" r="4" fill="currentColor" className="text-blue-500/40" />
      <circle cx="30" cy="55" r="7" fill="currentColor" className="text-purple-500/50" />
      <circle cx="60" cy="60" r="5" fill="currentColor" className="text-cyan-500/50" />
      <circle cx="90" cy="55" r="6" fill="currentColor" className="text-blue-500/50" />
      <circle cx="15" cy="90" r="5" fill="currentColor" className="text-purple-500/40" />
      <circle cx="45" cy="95" r="8" fill="currentColor" className="text-cyan-500/40" />
      <circle cx="75" cy="85" r="5" fill="currentColor" className="text-blue-500/50" />
      <circle cx="100" cy="95" r="6" fill="currentColor" className="text-purple-500/50" />
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

// Plus sign decorations - larger
export function PlusSigns({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="currentColor">
      <rect x="27" y="8" width="6" height="44" rx="2" className="text-blue-500/50" />
      <rect x="8" y="27" width="44" height="6" rx="2" className="text-blue-500/50" />
    </svg>
  );
}

// Circle outline decoration
export function CircleDecor({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor">
      <circle cx="50" cy="50" r="45" strokeWidth="1" strokeDasharray="8 4" className="text-purple-400/40" />
      <circle cx="50" cy="50" r="30" strokeWidth="1" className="text-blue-400/30" />
      <circle cx="50" cy="50" r="15" strokeWidth="1" className="text-cyan-400/40" />
    </svg>
  );
}

// Zigzag line decoration
export function Zigzag({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 100 30" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M0 15 L 20 5 L 40 15 L 60 5 L 80 15 L 100 5" className="text-blue-400/40" />
    </svg>
  );
}

// Star decoration
export function StarDecor({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2L14 9L21 10L14 11L12 18L10 11L3 10L10 9L12 2Z" className="text-yellow-500/60" />
    </svg>
  );
}

// Hash mark decoration
export function HashMarks({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 80 20" className={className} fill="currentColor">
      <rect x="0" y="0" width="3" height="20" rx="1.5" className="text-purple-400/40" />
      <rect x="15" y="0" width="3" height="20" rx="1.5" className="text-blue-400/40" />
      <rect x="30" y="0" width="3" height="20" rx="1.5" className="text-cyan-400/40" />
      <rect x="45" y="0" width="3" height="20" rx="1.5" className="text-purple-400/40" />
      <rect x="60" y="0" width="3" height="20" rx="1.5" className="text-blue-400/40" />
    </svg>
  );
}

// Decorative blob shape - large and visible
export function BlobShape({ className = "" }: HandDrawnProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <path
        d="M45.2,-52.3C56.9,-43.1,64.3,-28.9,68.6,-13.8C72.9,1.3,74.1,17.2,68.2,30.5C62.3,43.8,49.3,54.5,34.8,60.1C20.3,65.7,4.3,66.2,-11.5,-58.7C-27.3,-51.2,-43,-39.4,-52.1,-24.8C-61.2,-10.2,-63.7,7.1,-61.6,23.3C-59.5,39.5,-52.8,54.6,-40.9,63C-29,71.4,-12.4,73.1,3.4,70.5C19.2,67.9,33.5,61.5,45.2,52.3Z"
        transform="translate(100 100)"
        fill="currentColor"
        className="text-blue-400/30 dark:text-cyan-400/20"
      />
    </svg>
  );
}