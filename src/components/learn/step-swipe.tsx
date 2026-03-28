"use client";

/**
 * StepSwipe — Stimmt/Stimmt-nicht Karten (Anticipation Guide)
 *
 * Design-Standards:
 * - STIMMT NICHT Button links, STIMMT Button rechts — neben dem Statement
 * - Kein Drag — nur Buttons (zuverlässiger auf Mobile)
 * - Nach Antwort: Erklärung bleibt bis manuell "Nächste Aussage" geklickt wird
 * - Inline-style color auf Container (shadcn-glass-ui Fix)
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SwipeCardProps {
  statement: string;
  statementB1?: string;
  isCorrect: boolean;
  explanation: string;
  explanationB1?: string;
}

interface StepSwipeProps {
  title: string;
  body?: string;
  instruction: string;
  cards: SwipeCardProps[];
  sprachLevel?: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

export function StepSwipe({
  title,
  body,
  instruction,
  cards,
  sprachLevel = "c1",
  onNext,
}: StepSwipeProps) {
  const [cardIdx, setCardIdx] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [lastAnswer, setLastAnswer] = useState<{
    correct: boolean;
    explanation: string;
    userAgreed: boolean;
  } | null>(null);

  const card = cards[cardIdx];
  const done = cardIdx >= cards.length;

  const handleAnswer = (agreed: boolean) => {
    if (showResult) return;
    const correct = agreed === card.isCorrect;
    const explanation =
      sprachLevel === "b1" && card.explanationB1
        ? card.explanationB1
        : card.explanation;
    setResults((r) => [...r, correct]);
    setLastAnswer({ correct, explanation, userAgreed: agreed });
    setShowResult(true);
  };

  const nextCard = () => {
    setShowResult(false);
    setLastAnswer(null);
    setCardIdx((i) => i + 1);
  };

  if (done) {
    const correctCount = results.filter(Boolean).length;
    const allCorrect = correctCount === cards.length;
    return (
      <div className="space-y-6" style={{ color: "#1d1d1f" }}>
        <h2 className="text-2xl font-bold">
          Einschätzung abgeschlossen!
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 ${
            allCorrect
              ? "bg-[#30D158]/10 border border-[#30D158]/30"
              : "bg-[#FF9500]/10 border border-[#FF9500]/30"
          }`}
        >
          <p className="font-semibold text-lg">
            {allCorrect
              ? `Alle ${cards.length} richtig eingeschätzt!`
              : `${correctCount} von ${cards.length} richtig.`}
          </p>
          <p className="text-sm mt-1" style={{ color: "#6e6e73" }}>
            {allCorrect
              ? "Du hattest ein gutes Vorwissen!"
              : "Kein Problem — jetzt weißt du es besser."}
          </p>
        </motion.div>
        <button
          onClick={() => onNext(allCorrect)}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Weiter
        </button>
      </div>
    );
  }

  const statement =
    sprachLevel === "b1" && card.statementB1
      ? card.statementB1
      : card.statement;

  return (
    <div className="space-y-5 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {body && (
        <p className="leading-relaxed whitespace-pre-line">{body}</p>
      )}

      <p className="text-sm" style={{ color: "#6e6e73" }}>
        {instruction}
      </p>

      {/* Progress */}
      <div className="flex items-center gap-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < results.length
                ? results[i]
                  ? "bg-[#30D158]"
                  : "bg-[#FF3B30]"
                : i === cardIdx
                  ? "bg-[#0071e3] animate-pulse"
                  : "bg-[#e8e8ed]"
            }`}
          />
        ))}
        <span className="text-xs ml-1" style={{ color: "#6e6e73" }}>
          {cardIdx + 1}/{cards.length}
        </span>
      </div>

      {/* Statement — bleibt immer sichtbar */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`card-${cardIdx}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="space-y-3"
        >
          {/* Aussage + Buttons */}
          <div className="flex items-stretch gap-2">
            {/* STIMMT NICHT Button — links */}
            <button
              onClick={() => !showResult && handleAnswer(false)}
              disabled={showResult}
              className={`flex-shrink-0 w-16 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${
                showResult && lastAnswer?.userAgreed === false
                  ? "border-[#FF3B30] bg-[#FF3B30]/20"
                  : showResult
                    ? "border-[#e8e8ed] bg-[#f5f5f7] opacity-40"
                    : "border-[#FF3B30]/30 bg-[#FF3B30]/5 active:scale-95 active:bg-[#FF3B30]/20"
              }`}
            >
              <span className="text-lg">✗</span>
              <span className="text-[9px] font-bold leading-tight text-center" style={{ color: showResult && lastAnswer?.userAgreed !== false ? "#6e6e73" : "#FF3B30" }}>
                STIMMT NICHT
              </span>
            </button>

            {/* Statement — Mitte */}
            <div className={`flex-1 rounded-2xl border-2 p-5 min-h-[120px] flex items-center justify-center shadow-sm ${
              showResult
                ? lastAnswer?.correct
                  ? "border-[#30D158] bg-[#30D158]/5"
                  : "border-[#FF3B30] bg-[#FF3B30]/5"
                : "border-[#d2d2d7] bg-white"
            }`}>
              <p className="text-center text-base font-medium leading-snug">
                {statement}
              </p>
            </div>

            {/* STIMMT Button — rechts */}
            <button
              onClick={() => !showResult && handleAnswer(true)}
              disabled={showResult}
              className={`flex-shrink-0 w-16 rounded-2xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${
                showResult && lastAnswer?.userAgreed === true
                  ? "border-[#30D158] bg-[#30D158]/20"
                  : showResult
                    ? "border-[#e8e8ed] bg-[#f5f5f7] opacity-40"
                    : "border-[#30D158]/30 bg-[#30D158]/5 active:scale-95 active:bg-[#30D158]/20"
              }`}
            >
              <span className="text-lg">✓</span>
              <span className="text-[9px] font-bold" style={{ color: showResult && lastAnswer?.userAgreed !== true ? "#6e6e73" : "#30D158" }}>
                STIMMT
              </span>
            </button>
          </div>

          {/* Erklärung — erscheint unter dem Statement */}
          {showResult && lastAnswer && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-3"
            >
              <div className={`rounded-2xl p-4 ${
                lastAnswer.correct
                  ? "bg-[#30D158]/10 border border-[#30D158]/30"
                  : "bg-[#FF3B30]/10 border border-[#FF3B30]/30"
              }`}>
                <p className="font-bold text-sm mb-1">
                  {lastAnswer.correct ? "✓ Richtig eingeschätzt!" : "✗ Nicht ganz!"}
                </p>
                <p className="text-xs mb-2" style={{ color: "#6e6e73" }}>
                  Die Aussage ist{" "}
                  <span className="font-semibold">
                    {card.isCorrect ? "richtig" : "falsch"}
                  </span>.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#3a3a3c" }}>
                  {lastAnswer.explanation}
                </p>
              </div>

              <button
                onClick={nextCard}
                className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
              >
                {cardIdx + 1 < cards.length ? "Nächste Aussage" : "Weiter"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
