"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface CrosswordWord {
  word: string;
  clue: string;
}

interface StepCrosswordProps {
  title: string;
  body?: string;
  words: CrosswordWord[];
  onNext: (correct: boolean) => void;
}

export function StepCrossword({
  title,
  body,
  words,
  onNext,
}: StepCrosswordProps) {
  const [answers, setAnswers] = useState<Record<number, string>>(
    Object.fromEntries(words.map((_, i) => [i, ""]))
  );
  const [checked, setChecked] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const correctCount = words.filter(
    (w, i) => answers[i]?.toUpperCase().trim() === w.word.toUpperCase()
  ).length;
  const allCorrect = correctCount === words.length;

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

      <p className="text-sm text-[#6e6e73]">
        Trage die Fachbegriffe ein.
      </p>

      <div className="space-y-3">
        {words.map((w, i) => {
          const userAnswer = answers[i]?.toUpperCase().trim() || "";
          const isCorrect = checked && userAnswer === w.word.toUpperCase();
          const isWrong = checked && userAnswer !== w.word.toUpperCase();

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border-2 p-4 transition-all ${
                isCorrect
                  ? "border-[#30D158] bg-[#30D158]/5"
                  : isWrong
                    ? "border-[#FF3B30] bg-[#FF3B30]/5"
                    : "border-[#d2d2d7] dark:border-white/15 bg-white dark:bg-white/5"
              }`}
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="w-7 h-7 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-[#1d1d1f] dark:text-white">
                  {w.clue}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  type="text"
                  value={answers[i]}
                  onChange={(e) =>
                    !checked &&
                    setAnswers((a) => ({ ...a, [i]: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && inputRefs.current[i + 1]) {
                      inputRefs.current[i + 1]?.focus();
                    }
                  }}
                  placeholder={`${w.word.length} Buchstaben`}
                  maxLength={w.word.length + 2}
                  className="flex-1 px-3 py-2.5 border-2 border-[#d2d2d7] dark:border-white/15 rounded-xl text-sm font-mono uppercase tracking-widest bg-transparent text-[#1d1d1f] dark:text-white focus:outline-none focus:border-[#0071e3] focus:ring-2 focus:ring-[#0071e3]/20"
                />
                <span className="text-xs text-[#6e6e73] font-mono">
                  {w.word.length}
                </span>
                {isCorrect && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-[#30D158] text-lg"
                  >
                    &#10003;
                  </motion.span>
                )}
                {isWrong && (
                  <span className="text-xs text-[#FF3B30] font-medium">
                    {w.word}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {!checked ? (
        <button
          onClick={() => setChecked(true)}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
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
            <p className="font-semibold text-[#1d1d1f] dark:text-white">
              {allCorrect
                ? "Alle Fachbegriffe korrekt!"
                : `${correctCount}/${words.length} richtig. Die Loesungen sind angezeigt.`}
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
