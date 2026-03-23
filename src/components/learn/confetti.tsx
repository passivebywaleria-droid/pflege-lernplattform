"use client";

import { useEffect, useState } from "react";

interface ConfettiProps {
  active: boolean;
}

interface Particle {
  id: number;
  x: number;
  delay: number;
  color: string;
  size: number;
  duration: number;
}

const COLORS = ["#0071e3", "#30D158", "#FF9500", "#AF52DE", "#FF3B30", "#5AC8FA", "#FFD60A"];

/**
 * Dezentes Confetti — professionell, nicht kindlich.
 * Fällt von oben herunter, 20-30 Partikel.
 */
export function Confetti({ active }: ConfettiProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    const newParticles: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: 4 + Math.random() * 6,
      duration: 1.5 + Math.random() * 1.5,
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => setParticles([]), 3500);
    return () => clearTimeout(timer);
  }, [active]);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${p.x}%`,
            top: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
