"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

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

  // Shuffle the right side
  const [shuffledRight] = useState(() => {
    const indices = pairs.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    return indices;
  });

  const handleLeftClick = useCallback(
    (idx: number) => {
      if (submitted) return;
      // If already matched, unlink
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
      // Check if this right is already taken
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

  const handleSubmit = () => setSubmitted(true);

  const allCorrect =
    matches.size === pairs.length &&
    Array.from(matches.entries()).every(([l, r]) => l === r);

  const correctCount = Array.from(matches.entries()).filter(
    ([l, r]) => l === r,
  ).length;

  const colors = [
    "#0071e3",
    "#30D158",
    "#FF9500",
    "#AF52DE",
    "#FF3B30",
    "#5AC8FA",
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed whitespace-pre-line">
          {body}
        </p>
      )}

      <p className="text-lg font-medium text-[#1d1d1f] dark:text-white">
        {fragetext}
      </p>

      <p className="text-sm text-[#6e6e73]">
        Tippe links auf einen Begriff, dann rechts auf die passende Erklaerung.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {/* Left column */}
        <div className="space-y-2">
          {pairs.map((pair, idx) => {
            const isSelected = selectedLeft === idx;
            const isMatched = matches.has(idx);
            const matchColor = isMatched
              ? colors[Array.from(matches.keys()).indexOf(idx) % colors.length]
              : undefined;
            const isCorrectMatch = submitted && matches.get(idx) === idx;
            const isWrongMatch =
              submitted && isMatched && matches.get(idx) !== idx;

            return (
              <motion.button
                key={`l-${idx}`}
                onClick={() => handleLeftClick(idx)}
                whileTap={!submitted ? { scale: 0.97 } : undefined}
                className={`w-full rounded-xl border-2 p-3 text-left text-sm font-medium transition-all ${
                  isCorrectMatch
                    ? "border-[#30D158] bg-[#30D158]/10"
                    : isWrongMatch
                      ? "border-[#FF3B30] bg-[#FF3B30]/10"
                      : isSelected
                        ? "border-[#0071e3] bg-[#0071e3]/10"
                        : isMatched
                          ? `bg-white dark:bg-white/5`
                          : "border-[#d2d2d7] dark:border-white/15 bg-white dark:bg-white/5"
                }`}
                style={
                  isMatched && !submitted
                    ? { borderColor: matchColor }
                    : undefined
                }
              >
                {pair.left}
              </motion.button>
            );
          })}
        </div>

        {/* Right column (shuffled) */}
        <div className="space-y-2">
          {shuffledRight.map((origIdx) => {
            const isUsed = Array.from(matches.values()).includes(origIdx);
            const matchedLeftIdx = Array.from(matches.entries()).find(
              ([, r]) => r === origIdx,
            )?.[0];
            const matchColor =
              isUsed && matchedLeftIdx !== undefined
                ? colors[
                    Array.from(matches.keys()).indexOf(matchedLeftIdx) %
                      colors.length
                  ]
                : undefined;
            const isCorrectMatch =
              submitted && matchedLeftIdx === origIdx;
            const isWrongMatch =
              submitted && isUsed && matchedLeftIdx !== origIdx;

            return (
              <motion.button
                key={`r-${origIdx}`}
                onClick={() => handleRightClick(origIdx)}
                whileTap={!submitted ? { scale: 0.97 } : undefined}
                className={`w-full rounded-xl border-2 p-3 text-left text-sm transition-all ${
                  isCorrectMatch
                    ? "border-[#30D158] bg-[#30D158]/10"
                    : isWrongMatch
                      ? "border-[#FF3B30] bg-[#FF3B30]/10"
                      : isUsed
                        ? "bg-white dark:bg-white/5"
                        : "border-[#d2d2d7] dark:border-white/15 bg-white dark:bg-white/5"
                }`}
                style={
                  isUsed && !submitted
                    ? { borderColor: matchColor }
                    : undefined
                }
              >
                {pairs[origIdx].right}
              </motion.button>
            );
          })}
        </div>
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={matches.size < pairs.length}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Pruefen
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
                ? "✅ Perfekt! Alle richtig zugeordnet!"
                : `⚠️ ${correctCount} von ${pairs.length} richtig`}
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
