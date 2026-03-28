"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface StepFillInProps {
  title: string;
  body?: string;
  sentence: string;
  options: string[];
  correctIndex: number;
  onNext: (correct: boolean) => void;
}

export function StepFillIn({
  title,
  body,
  sentence,
  options,
  correctIndex,
  onNext,
}: StepFillInProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const parts = sentence.split("___");
  const isCorrect = selected === correctIndex;

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold text-[#1d1d1f]">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 leading-relaxed whitespace-pre-line">
          {body}
        </p>
      )}

      {/* Sentence with blanks */}
      <div className="rounded-2xl bg-white border border-[#d2d2d7] p-5">
        <p className="text-lg text-[#1d1d1f] leading-relaxed">
          {parts.map((part, i) => (
            <React.Fragment key={i}>
              {part}
              {i < parts.length - 1 && (
                <span
                  className={`inline-block px-3 py-0.5 mx-1 rounded-lg font-semibold transition-colors ${
                    submitted && isCorrect
                      ? "bg-[#30D158]/20 text-[#1d1d1f]"
                      : submitted && !isCorrect
                        ? "bg-[#FF3B30]/20 text-[#1d1d1f]"
                        : selected !== null
                          ? "bg-[#0071e3]/10 text-[#0071e3]"
                          : "bg-[#e8e8ed] text-[#86868b]"
                  }`}
                >
                  {selected !== null ? options[selected] : "___"}
                </span>
              )}
            </React.Fragment>
          ))}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-2">
        {options.map((opt, i) => {
          let borderColor = "border-[#d2d2d7]";
          let bgColor = "bg-white";

          if (submitted && correctIndex === i) {
            borderColor = "border-[#30D158]";
            bgColor = "bg-[#30D158]/5";
          } else if (submitted && selected === i && correctIndex !== i) {
            borderColor = "border-[#FF3B30]";
            bgColor = "bg-[#FF3B30]/5";
          } else if (selected === i) {
            borderColor = "border-[#0071e3]";
            bgColor = "bg-[#0071e3]/5";
          }

          return (
            <motion.button
              key={i}
              onClick={() => !submitted && setSelected(i)}
              whileTap={!submitted ? { scale: 0.98 } : undefined}
              className={`w-full rounded-xl border-2 ${borderColor} ${bgColor} p-3 text-left text-sm font-medium text-[#1d1d1f] transition-colors`}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
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
              isCorrect
                ? "bg-[#30D158]/10 border border-[#30D158]/30"
                : "bg-[#FF3B30]/10 border border-[#FF3B30]/30"
            }`}
          >
            <p className="font-semibold text-[#1d1d1f]">
              {isCorrect
                ? "Richtig!"
                : `Nicht ganz. Die richtige Antwort ist: ${options[correctIndex]}`}
            </p>
          </motion.div>

          <button
            onClick={() => onNext(isCorrect)}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
