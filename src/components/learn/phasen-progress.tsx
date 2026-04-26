"use client";

import type { PflegeProzessPhase } from "../../../content/_types";

const PHASEN_ORDER: PflegeProzessPhase[] = [
  "informieren",
  "beobachten",
  "planen",
  "durchfuehren",
  "evaluieren",
  "dokumentieren",
];

interface PhasenProgressProps {
  currentPhase: PflegeProzessPhase;
  completedPhases: PflegeProzessPhase[];
  onPhaseClick?: (phase: PflegeProzessPhase) => void;
}

/**
 * Phasen-Progress im Bundle-Stil (claude-design-bundle/v1-situation-flow.jsx).
 * 6 dünne 4px-Balken, keine Labels, keine Icons.
 */
export function PhasenProgress({
  currentPhase,
  completedPhases,
  onPhaseClick,
}: PhasenProgressProps) {
  const currentIdx = PHASEN_ORDER.indexOf(currentPhase);

  return (
    <div className="flex w-full gap-1">
      {PHASEN_ORDER.map((phase, i) => {
        const done = i < currentIdx || completedPhases.includes(phase);
        const active = phase === currentPhase;
        const clickable = !!onPhaseClick && (done || active);

        const handleClick = clickable
          ? () => onPhaseClick(phase)
          : undefined;

        return (
          <button
            key={phase}
            type="button"
            onClick={handleClick}
            disabled={!clickable}
            aria-label={`Phase ${i + 1} von ${PHASEN_ORDER.length}: ${phase}`}
            aria-current={active ? "step" : undefined}
            className={`flex-1 h-1 rounded-full transition-all ${
              clickable ? "cursor-pointer" : "cursor-default"
            } ${
              active
                ? "bg-[var(--lern-accent)] ring-2 ring-[var(--lern-accent-bg)]"
                : done
                  ? "bg-[var(--lern-accent)]/45"
                  : "bg-[var(--lern-border)]"
            }`}
          />
        );
      })}
    </div>
  );
}

export { PHASEN_ORDER };
