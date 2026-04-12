"use client";

import { motion } from "framer-motion";

interface SprachlevelToggleProps {
  level: "c1" | "b1";
  onChange: (level: "c1" | "b1") => void;
}

/**
 * Toggle zwischen Fachsprache (C1) und Einfacher Sprache (B1).
 * Fachbegriffe bleiben immer — bei B1 nur einfachere Satzstruktur.
 */
export function SprachlevelToggle({ level, onChange }: SprachlevelToggleProps) {
  return (
    <button
      onClick={() => onChange(level === "c1" ? "b1" : "c1")}
      className="relative flex h-7 w-[120px] items-center rounded-full bg-[var(--lern-bg)] p-0.5 transition-colors"
    >
      <motion.div
        className="absolute h-6 w-[58px] rounded-full bg-[var(--lern-bg-primary)] shadow-sm"
        animate={{ x: level === "c1" ? 1 : 59 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <span
        className={`relative z-10 flex-1 text-center text-[10px] font-semibold transition-colors ${
          level === "c1"
            ? "text-[var(--lern-text-primary)]"
            : "text-[var(--lern-text-tertiary)]"
        }`}
      >
        Fachsprache
      </span>
      <span
        className={`relative z-10 flex-1 text-center text-[10px] font-semibold transition-colors ${
          level === "b1"
            ? "text-[var(--lern-text-primary)]"
            : "text-[var(--lern-text-tertiary)]"
        }`}
      >
        Einfach
      </span>
    </button>
  );
}
