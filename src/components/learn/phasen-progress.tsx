"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { PflegeProzessPhase } from "../../../content/_types";

const PHASEN_ORDER: PflegeProzessPhase[] = [
  "informieren",
  "beobachten",
  "planen",
  "durchfuehren",
  "evaluieren",
  "dokumentieren",
];

const PHASEN_ICONS: Record<PflegeProzessPhase, string> = {
  informieren: "📋",
  beobachten: "👁",
  planen: "📝",
  durchfuehren: "🩺",
  evaluieren: "📊",
  dokumentieren: "📄",
};

interface PhasenProgressProps {
  currentPhase: PflegeProzessPhase;
  completedPhases: PflegeProzessPhase[];
  onPhaseClick?: (phase: PflegeProzessPhase) => void;
}

export function PhasenProgress({
  currentPhase,
  completedPhases,
  onPhaseClick,
}: PhasenProgressProps) {
  const t = useTranslations("situation");

  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-2">
      {PHASEN_ORDER.map((phase, idx) => {
        const isCompleted = completedPhases.includes(phase);
        const isCurrent = phase === currentPhase;
        const isLocked = !isCompleted && !isCurrent;

        return (
          <div key={phase} className="flex items-center">
            {idx > 0 && (
              <div
                className={`h-0.5 w-4 sm:w-6 ${
                  isCompleted
                    ? "bg-[#3E5A6A]"
                    : "bg-[var(--lern-border)]"
                }`}
              />
            )}
            <motion.button
              whileTap={!isLocked ? { scale: 0.95 } : undefined}
              onClick={() => !isLocked && onPhaseClick?.(phase)}
              disabled={isLocked}
              className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-center transition-all ${
                isCurrent
                  ? "bg-[var(--lern-accent-bg)] border-2 border-[var(--lern-accent)] shadow-sm"
                  : isCompleted
                    ? "bg-[#3E5A6A]/10 border border-[#3E5A6A]/30"
                    : "bg-[var(--lern-bg)] border border-[var(--lern-border)] opacity-50"
              }`}
              aria-current={isCurrent ? "step" : undefined}
            >
              <span className="text-base sm:text-lg">
                {isCompleted ? "✓" : PHASEN_ICONS[phase]}
              </span>
              <span
                className={`text-[10px] sm:text-xs font-medium leading-tight ${
                  isCurrent
                    ? "text-[var(--lern-accent)]"
                    : isCompleted
                      ? "text-[#3E5A6A]"
                      : "text-[var(--lern-text-tertiary)]"
                }`}
              >
                {t(`phasen.${phase}`)}
              </span>
            </motion.button>
          </div>
        );
      })}
    </div>
  );
}

export { PHASEN_ORDER };
