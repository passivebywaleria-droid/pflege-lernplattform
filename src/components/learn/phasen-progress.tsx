"use client";

import type { AnyPhase, PflegeProzessPhase } from "../../../content/_types";

/** Standard-Pflegeprozess-Phasen (Fallback, wenn keine `phasen` übergeben werden) */
const PHASEN_ORDER: PflegeProzessPhase[] = [
  "informieren",
  "beobachten",
  "planen",
  "durchfuehren",
  "evaluieren",
  "dokumentieren",
];

interface PhasenProgressProps {
  currentPhase: AnyPhase;
  completedPhases: AnyPhase[];
  /** Phasen-Reihenfolge dieser Situation (situationsTyp-abhängig). Default: Pflegeprozess. */
  phasen?: AnyPhase[];
  onPhaseClick?: (phase: AnyPhase) => void;
}

/**
 * Phasen-Progress im Bundle-Stil (claude-design-bundle/v1-situation-flow.jsx).
 * Dünne 4px-Balken, keine Labels, keine Icons. Phasenmodell-agnostisch
 * (Pflegeprozess, Beratung, Akut … — Reihenfolge kommt aus `phasen`).
 */
export function PhasenProgress({
  currentPhase,
  completedPhases,
  phasen,
  onPhaseClick,
}: PhasenProgressProps) {
  const order: AnyPhase[] = phasen && phasen.length > 0 ? phasen : PHASEN_ORDER;
  const currentIdx = order.indexOf(currentPhase);

  return (
    <div className="flex w-full gap-1">
      {order.map((phase, i) => {
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
            aria-label={`Phase ${i + 1} von ${order.length}: ${phase}`}
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
