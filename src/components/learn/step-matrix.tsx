"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";

interface MatrixItem {
  id: string;
  text: string;
  correctQuadrant: 1 | 2 | 3 | 4;
}

interface StepMatrixProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  instruction: string;
  axisX: { label: string; low: string; high: string };
  axisY: { label: string; low: string; high: string };
  items: MatrixItem[];
  onNext: (correct: boolean) => void;
}

export function StepMatrix({
  title,
  body,
  glossar: _glossar,
  instruction,
  axisX,
  axisY,
  items,
  onNext,
}: StepMatrixProps) {
  // Zuordnung: itemId → quadrant (1-4), null = noch nicht platziert
  const [placements, setPlacements] = useState<Record<string, number | null>>(
    Object.fromEntries(items.map((it) => [it.id, null]))
  );
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleQuadrantClick = useCallback(
    (quadrant: number) => {
      if (submitted || !selectedItem) return;
      setPlacements((prev) => ({ ...prev, [selectedItem]: quadrant }));
      setSelectedItem(null);
    },
    [submitted, selectedItem],
  );

  const handleItemClick = useCallback(
    (itemId: string) => {
      if (submitted) return;
      if (selectedItem === itemId) {
        setSelectedItem(null);
      } else {
        setSelectedItem(itemId);
      }
    },
    [submitted, selectedItem],
  );

  const unplaced = items.filter((it) => placements[it.id] === null);
  const allPlaced = unplaced.length === 0;

  const correctCount = items.filter((it) => placements[it.id] === it.correctQuadrant).length;
  const allCorrect = correctCount === items.length;

  // Quadrant-Label: Q1=oben-links, Q2=oben-rechts, Q3=unten-links, Q4=unten-rechts
  const quadrantColors = [
    "", // index 0 unused
    "bg-[#6B8F71]/8 border-[#6B8F71]/20",   // Q1
    "bg-[#D4956A]/8 border-[#D4956A]/20",   // Q2
    "bg-[#C4877F]/8 border-[#C4877F]/20",   // Q3
    "bg-[#C96B5C]/8 border-[#C96B5C]/20",   // Q4
  ];

  const quadrantLabels = [
    "",
    `${axisY.high} + ${axisX.low}`,
    `${axisY.high} + ${axisX.high}`,
    `${axisY.low} + ${axisX.low}`,
    `${axisY.low} + ${axisX.high}`,
  ];

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">{body}</p>
      )}

      <div className="rounded-2xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-4">
        <p className="text-lg font-medium text-[var(--lern-text-primary)]">{instruction}</p>
        {selectedItem && (
          <p className="text-sm text-[var(--lern-accent)] mt-1">
            Tippe jetzt auf ein Feld in der Matrix.
          </p>
        )}
      </div>

      {/* Achsen-Labels */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs font-medium text-[var(--lern-text-tertiary)]">
          <span>{axisX.low}</span>
          <span className="font-semibold text-[var(--lern-text-secondary)]">{axisX.label} →</span>
          <span>{axisX.high}</span>
        </div>

        {/* Matrix 2×2 */}
        <div className="grid grid-cols-2 gap-2">
          <div className="text-xs font-semibold text-[var(--lern-text-secondary)] -rotate-0 flex items-center col-span-2 justify-center">
            ↑ {axisY.label}
          </div>
          {[1, 2, 3, 4].map((q) => (
            <button
              key={q}
              onClick={() => handleQuadrantClick(q)}
              disabled={submitted || !selectedItem}
              className={`min-h-[80px] rounded-xl border-2 p-2 transition-all ${quadrantColors[q]} ${
                selectedItem ? "cursor-pointer hover:scale-[1.02]" : "cursor-default"
              } ${!selectedItem && !submitted ? "opacity-60" : ""}`}
            >
              <p className="text-[10px] text-[var(--lern-text-tertiary)] mb-1">{quadrantLabels[q]}</p>
              <div className="flex flex-wrap gap-1">
                {items
                  .filter((it) => placements[it.id] === q)
                  .map((it) => (
                    <span
                      key={it.id}
                      className={`text-xs rounded-lg px-2 py-1 font-medium ${
                        submitted
                          ? it.correctQuadrant === q
                            ? "bg-[#6B8F71]/20 text-[#6B8F71]"
                            : "bg-[#C96B5C]/20 text-[#C96B5C]"
                          : "bg-[var(--lern-accent)]/15 text-[var(--lern-accent)]"
                      }`}
                    >
                      {it.text}
                    </span>
                  ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Unplatzierte Items */}
      {unplaced.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-[var(--lern-text-tertiary)]">Noch einzuordnen:</p>
          <div className="flex flex-wrap gap-2">
            {unplaced.map((it) => (
              <button
                key={it.id}
                onClick={() => handleItemClick(it.id)}
                disabled={submitted}
                className={`rounded-xl px-3 py-2 text-sm font-medium border transition-all active:scale-95 ${
                  selectedItem === it.id
                    ? "bg-[var(--lern-accent)]/15 border-[var(--lern-accent)] text-[var(--lern-accent)]"
                    : "bg-[var(--lern-card-bg)] border-[var(--lern-border)] text-[var(--lern-text-primary)]"
                }`}
              >
                {it.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allPlaced}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] disabled:opacity-40"
        >
          Antwort prüfen
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${
              allCorrect
                ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
                : correctCount >= items.length / 2
                  ? "bg-[#D4956A]/10 border border-[#D4956A]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
            }`}
          >
            <p className="font-semibold">
              {allCorrect
                ? "Alles richtig eingeordnet!"
                : `${correctCount} von ${items.length} richtig eingeordnet.`}
            </p>
          </motion.div>

          <button
            onClick={() => onNext(allCorrect)}
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
