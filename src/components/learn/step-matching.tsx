"use client";

/**
 * StepMatching — Zuordnungsaufgabe
 *
 * Design-Standards (für alle LEs):
 * - Gematchte Paare rutschen animiert nach oben und werden nebeneinander angezeigt
 * - Alle ungematchten Karten haben gleiche Höhe (bestimmt durch längsten Text)
 * - Inline-style `color: var(--lern-text-primary)` auf Container
 * - Karten: bg-[var(--lern-card-bg)] mit border-[var(--lern-border)] für Kontrast
 * - Farbcodierte Borders für Matches (6 Farben rotierend)
 * - Nach Submit: Grün = richtig, Rot = falsch
 * - Antippen auf gematchtes Paar löst die Verbindung wieder
 */

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";
import { generiereSandwichFeedback, SandwichFeedbackDisplay } from "./bloom-feedback";

interface MatchingPair {
  left: string;
  right: string;
}

interface StepMatchingProps {
  title: string;
  body?: string;
  fragetext: string;
  pairs: MatchingPair[];
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
}

const MATCH_COLORS = [
  "#C4877F",
  "#6B8F71",
  "#D4956A",
  "#9B7EA6",
  "#C96B5C",
  "#8AABB5",
];

export function StepMatching({
  title,
  body,
  fragetext,
  pairs,
  glossar,
  onNext,
}: StepMatchingProps) {
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [matches, setMatches] = useState<Map<number, number>>(new Map());
  const [submitted, setSubmitted] = useState(false);
  const [cardHeight, setCardHeight] = useState<number>(0);
  const measureRef = useRef<HTMLDivElement>(null);

  // Shuffle right side once
  const [shuffledRight] = useState(() => {
    const indices = pairs.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });

  // Messe die maximale Kartenhöhe
  useEffect(() => {
    if (!measureRef.current) return;
    const cards = measureRef.current.querySelectorAll("[data-measure-card]");
    let max = 0;
    cards.forEach((card) => {
      const h = (card as HTMLElement).scrollHeight;
      if (h > max) max = h;
    });
    if (max > 0) setCardHeight(max);
  }, [pairs]);

  const handleLeftClick = useCallback(
    (idx: number) => {
      if (submitted) return;
      if (matches.has(idx)) {
        setMatches((prev) => {
          const next = new Map(prev);
          next.delete(idx);
          return next;
        });
        return;
      }
      setSelectedLeft(idx);
    },
    [submitted, matches],
  );

  const handleRightClick = useCallback(
    (rightOrigIdx: number) => {
      if (submitted || selectedLeft === null) return;
      const alreadyUsed = Array.from(matches.values()).includes(rightOrigIdx);
      if (alreadyUsed) return;

      setMatches((prev) => {
        const next = new Map(prev);
        next.set(selectedLeft, rightOrigIdx);
        return next;
      });
      setSelectedLeft(null);
    },
    [submitted, selectedLeft, matches],
  );

  const handleUnmatch = (leftIdx: number) => {
    if (submitted) return;
    setMatches((prev) => {
      const next = new Map(prev);
      next.delete(leftIdx);
      return next;
    });
  };

  const handleSubmit = () => setSubmitted(true);

  const allCorrect =
    matches.size === pairs.length &&
    Array.from(matches.entries()).every(([l, r]) => l === r);

  const correctCount = Array.from(matches.entries()).filter(
    ([l, r]) => l === r,
  ).length;

  // Welche Left-Indices sind gematcht?
  const matchedLeftIndices = Array.from(matches.keys());
  const unmatchedLeftIndices = pairs
    .map((_, i) => i)
    .filter((i) => !matches.has(i));
  const unmatchedRightOrigIndices = shuffledRight.filter(
    (origIdx) => !Array.from(matches.values()).includes(origIdx),
  );

  const getMatchColor = (leftIdx: number) =>
    MATCH_COLORS[matchedLeftIndices.indexOf(leftIdx) % MATCH_COLORS.length];

  return (
    <div className="space-y-5" style={{ color: "var(--lern-text-primary)" }} role="group" aria-label="Zuordnungsaufgabe">
      <h2 className="text-2xl font-bold">{title}</h2>

      {body && (
        <p className="leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-semibold"><FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText></p>

      <p className="text-sm" style={{ color: "var(--lern-text-secondary)" }}>
        Tippe links auf einen Begriff, dann rechts auf die passende Erklärung.
      </p>

      {/* Unsichtbare Messung für gleiche Kartenhöhe */}
      <div
        ref={measureRef}
        className="absolute opacity-0 pointer-events-none -z-10"
        style={{ width: "calc(50% - 6px)" }}
        aria-hidden
      >
        {pairs.map((pair, i) => (
          <div key={`ml-${i}`} data-measure-card className="p-3 text-sm font-medium">
            {pair.left}
          </div>
        ))}
        {pairs.map((pair, i) => (
          <div key={`mr-${i}`} data-measure-card className="p-3 text-sm">
            {pair.right}
          </div>
        ))}
      </div>

      {/* Gematchte Paare — oben, nebeneinander */}
      <AnimatePresence>
        {matchedLeftIndices.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2"
          >
            <span className="text-xs font-semibold" style={{ color: "var(--lern-text-secondary)" }}>
              {matchedLeftIndices.length} von {pairs.length} zugeordnet
            </span>
            {matchedLeftIndices.map((leftIdx) => {
              const rightIdx = matches.get(leftIdx)!;
              const color = getMatchColor(leftIdx);
              const isCorrect = submitted && leftIdx === rightIdx;
              const isWrong = submitted && leftIdx !== rightIdx;
              const borderColor = submitted
                ? isCorrect
                  ? "#6B8F71"
                  : "#C96B5C"
                : color;

              return (
                <motion.div
                  key={`match-${leftIdx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  layout
                  onClick={() => handleUnmatch(leftIdx)}
                  className={submitted ? "" : "cursor-pointer"}
                >
                  {/* Deine Zuordnung */}
                  <div className="grid grid-cols-2 gap-1">
                    <div
                      className="rounded-xl p-3 text-sm font-medium border-2"
                      style={{
                        borderColor,
                        backgroundColor: submitted
                          ? isCorrect
                            ? "rgba(48,209,88,0.1)"
                            : "rgba(255,59,48,0.1)"
                          : `${color}10`,
                        color: "var(--lern-text-primary)",
                      }}
                    >
                      {isCorrect && submitted && <span className="mr-1">✓</span>}
                      {isWrong && <span className="mr-1">✗</span>}
                      {renderBold(pairs[leftIdx].left)}
                    </div>
                    <div
                      className="rounded-xl p-3 text-sm border-2"
                      style={{
                        borderColor,
                        backgroundColor: submitted
                          ? isCorrect
                            ? "rgba(48,209,88,0.1)"
                            : "rgba(255,59,48,0.1)"
                          : `${color}10`,
                        color: "var(--lern-text-primary)",
                      }}
                    >
                      {renderBold(pairs[rightIdx].right)}
                    </div>
                  </div>

                  {/* Richtige Lösung anzeigen wenn falsch */}
                  {isWrong && (
                    <div
                      className="grid grid-cols-2 gap-1 mt-1 rounded-xl border-2 p-2"
                      style={{
                        borderColor: "#6B8F71",
                        backgroundColor: "rgba(48,209,88,0.05)",
                      }}
                    >
                      <div className="text-xs font-medium" style={{ color: "#6B8F71" }}>
                        Richtig wäre:
                      </div>
                      <div className="text-xs font-medium" style={{ color: "var(--lern-text-primary)" }}>
                        {renderBold(pairs[leftIdx].right)}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ungematchte Karten — zwei Spalten */}
      {unmatchedLeftIndices.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {/* Left column */}
          <div className="space-y-2" role="listbox" aria-label="Begriffe">
            {unmatchedLeftIndices.map((idx) => {
              const isSelected = selectedLeft === idx;
              return (
                <motion.button
                  key={`l-${idx}`}
                  layout
                  onClick={() => handleLeftClick(idx)}
                  whileTap={{ scale: 0.97 }}
                  role="option"
                  aria-selected={isSelected}
                  aria-label={`Begriff: ${pairs[idx].left}`}
                  className={`w-full rounded-xl border-2 p-3 text-left text-sm font-medium transition-all focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2 ${
                    isSelected
                      ? "border-[#C4877F] bg-[#C4877F]/10"
                      : "border-[var(--lern-border)] bg-[var(--lern-card-bg)]"
                  }`}
                  style={{
                    minHeight: cardHeight > 0 ? cardHeight : undefined,
                    color: "var(--lern-text-primary)",
                  }}
                >
                  {renderBold(pairs[idx].left)}
                </motion.button>
              );
            })}
          </div>

          {/* Right column (shuffled, unmatched only) */}
          <div className="space-y-2" role="listbox" aria-label="Zuordnungen">
            {unmatchedRightOrigIndices.map((origIdx) => (
              <motion.button
                key={`r-${origIdx}`}
                layout
                onClick={() => handleRightClick(origIdx)}
                whileTap={selectedLeft !== null ? { scale: 0.97 } : undefined}
                role="option"
                aria-selected={false}
                aria-label={`Zuordnung: ${pairs[origIdx].right}`}
                className={`w-full rounded-xl border-2 p-3 text-left text-sm transition-all focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2 ${
                  selectedLeft !== null
                    ? "border-[#C4877F]/40 bg-[#C4877F]/5 hover:bg-[#C4877F]/10"
                    : "border-[var(--lern-border)] bg-[var(--lern-card-bg)]"
                }`}
                style={{
                  minHeight: cardHeight > 0 ? cardHeight : undefined,
                  color: "var(--lern-text-primary)",
                }}
              >
                {renderBold(pairs[origIdx].right)}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Submit / Result */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={matches.size < pairs.length}
          aria-label="Zuordnung prüfen"
          className="w-full rounded-2xl bg-[#C4877F] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] disabled:opacity-40 disabled:cursor-not-allowed focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2"
        >
          Prüfen
        </button>
      ) : (
        <div className="space-y-4">
          <SandwichFeedbackDisplay
            feedback={generiereSandwichFeedback(
              allCorrect,
              allCorrect ? "" : `${correctCount} von ${pairs.length} richtig zugeordnet`,
              allCorrect ? "Perfekt! Alle richtig zugeordnet!" : undefined,
            )}
            correct={allCorrect}
          />

          <button
            onClick={() => onNext(allCorrect)}
            aria-label="Weiter zum nächsten Schritt"
            className="w-full rounded-2xl bg-[#C4877F] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] focus:outline-2 focus:outline-[#C4877F] focus:outline-offset-2"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
