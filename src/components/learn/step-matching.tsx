"use client";

/**
 * StepMatching — Zuordnungsaufgabe
 *
 * Design-Standards (für alle LEs):
 * - Gematchte Paare rutschen animiert nach oben und werden nebeneinander angezeigt
 * - Alle ungematchten Karten haben gleiche Höhe (bestimmt durch längsten Text)
 * - Inline-style `color: #1d1d1f` auf Container wegen shadcn-glass-ui `button { color: inherit }`
 * - Karten: bg-[#f5f5f7] mit border-[#d2d2d7] für Kontrast auf weißem Seitenhintergrund
 * - Farbcodierte Borders für Matches (6 Farben rotierend)
 * - Nach Submit: Grün = richtig, Rot = falsch
 * - Antippen auf gematchtes Paar löst die Verbindung wieder
 */

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MatchingPair {
  left: string;
  right: string;
}

interface StepMatchingProps {
  title: string;
  body?: string;
  fragetext: string;
  pairs: MatchingPair[];
  onNext: (correct: boolean) => void;
}

const MATCH_COLORS = [
  "#0071e3",
  "#30D158",
  "#FF9500",
  "#AF52DE",
  "#FF3B30",
  "#5AC8FA",
];

export function StepMatching({
  title,
  body,
  fragetext,
  pairs,
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
    <div className="space-y-5" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {body && (
        <p className="leading-relaxed whitespace-pre-line">{body}</p>
      )}

      <p className="text-lg font-semibold">{fragetext}</p>

      <p className="text-sm" style={{ color: "#3a3a3c" }}>
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
            <span className="text-xs font-semibold" style={{ color: "#6e6e73" }}>
              {matchedLeftIndices.length} von {pairs.length} zugeordnet
            </span>
            {matchedLeftIndices.map((leftIdx) => {
              const rightIdx = matches.get(leftIdx)!;
              const color = getMatchColor(leftIdx);
              const isCorrect = submitted && leftIdx === rightIdx;
              const isWrong = submitted && leftIdx !== rightIdx;
              const borderColor = submitted
                ? isCorrect
                  ? "#30D158"
                  : "#FF3B30"
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
                        color: "#1d1d1f",
                      }}
                    >
                      {isCorrect && submitted && <span className="mr-1">✓</span>}
                      {isWrong && <span className="mr-1">✗</span>}
                      {pairs[leftIdx].left}
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
                        color: "#1d1d1f",
                      }}
                    >
                      {pairs[rightIdx].right}
                    </div>
                  </div>

                  {/* Richtige Lösung anzeigen wenn falsch */}
                  {isWrong && (
                    <div
                      className="grid grid-cols-2 gap-1 mt-1 rounded-xl border-2 p-2"
                      style={{
                        borderColor: "#30D158",
                        backgroundColor: "rgba(48,209,88,0.05)",
                      }}
                    >
                      <div className="text-xs font-medium" style={{ color: "#30D158" }}>
                        Richtig wäre:
                      </div>
                      <div className="text-xs font-medium" style={{ color: "#1d1d1f" }}>
                        {pairs[leftIdx].right}
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
          <div className="space-y-2">
            {unmatchedLeftIndices.map((idx) => {
              const isSelected = selectedLeft === idx;
              return (
                <motion.button
                  key={`l-${idx}`}
                  layout
                  onClick={() => handleLeftClick(idx)}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full rounded-xl border-2 p-3 text-left text-sm font-medium transition-all ${
                    isSelected
                      ? "border-[#0071e3] bg-[#0071e3]/10"
                      : "border-[#d2d2d7] bg-[#f5f5f7]"
                  }`}
                  style={{
                    minHeight: cardHeight > 0 ? cardHeight : undefined,
                    color: "#1d1d1f",
                  }}
                >
                  {pairs[idx].left}
                </motion.button>
              );
            })}
          </div>

          {/* Right column (shuffled, unmatched only) */}
          <div className="space-y-2">
            {unmatchedRightOrigIndices.map((origIdx) => (
              <motion.button
                key={`r-${origIdx}`}
                layout
                onClick={() => handleRightClick(origIdx)}
                whileTap={selectedLeft !== null ? { scale: 0.97 } : undefined}
                className={`w-full rounded-xl border-2 p-3 text-left text-sm transition-all ${
                  selectedLeft !== null
                    ? "border-[#0071e3]/40 bg-[#0071e3]/5 hover:bg-[#0071e3]/10"
                    : "border-[#d2d2d7] bg-[#f5f5f7]"
                }`}
                style={{
                  minHeight: cardHeight > 0 ? cardHeight : undefined,
                  color: "#1d1d1f",
                }}
              >
                {pairs[origIdx].right}
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
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Prüfen
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${
              allCorrect
                ? "bg-[#30D158]/10 border border-[#30D158]/30"
                : "bg-[#FF9500]/10 border border-[#FF9500]/30"
            }`}
          >
            <p className="font-semibold">
              {allCorrect
                ? "Perfekt! Alle richtig zugeordnet!"
                : `${correctCount} von ${pairs.length} richtig`}
            </p>
          </motion.div>

          <button
            onClick={() => onNext(allCorrect)}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
