"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";

interface StepEstimationProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  instruction: string;
  unit: string;
  correctValue: number;
  tolerance: number; // Prozent
  funFact: string;
  explanation: string;
  explanationB1?: string;
  onNext: (correct: boolean) => void;
}

export function StepEstimation({
  title,
  body,
  glossar,
  sprachLevel = "c1",
  instruction,
  unit,
  correctValue,
  tolerance,
  funFact,
  explanation,
  explanationB1,
  onNext,
}: StepEstimationProps) {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const numericValue = parseFloat(input.replace(",", "."));
  const absTolerance = correctValue * (tolerance / 100);
  const isCorrect = !isNaN(numericValue) && Math.abs(numericValue - correctValue) <= absTolerance;
  const isClose = !isCorrect && !isNaN(numericValue) && Math.abs(numericValue - correctValue) <= absTolerance * 2;

  // Prozentuale Abweichung
  const deviation = !isNaN(numericValue) && correctValue !== 0
    ? Math.round(Math.abs((numericValue - correctValue) / correctValue) * 100)
    : null;

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <div className="rounded-2xl bg-[#D4956A]/10 border border-[#D4956A]/30 p-4">
        <p className="text-xs font-bold text-[#D4956A] mb-1 uppercase tracking-wide">Schätzfrage</p>
        <p className="text-lg font-medium text-[var(--lern-text-primary)]">{instruction}</p>
      </div>

      {/* Eingabe */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          inputMode="decimal"
          value={input}
          onChange={(e) => !submitted && setInput(e.target.value)}
          disabled={submitted}
          placeholder="Deine Schätzung"
          className="flex-1 rounded-2xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] px-4 py-4 text-xl font-bold text-center text-[var(--lern-text-primary)] placeholder:text-[var(--lern-text-tertiary)] focus:outline-2 focus:outline-[var(--lern-accent)] disabled:opacity-60"
        />
        <span className="text-lg font-medium text-[var(--lern-text-secondary)] shrink-0">{unit}</span>
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={input.trim() === ""}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] disabled:opacity-40"
        >
          Schätzung abgeben
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${
              isCorrect
                ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
                : isClose
                  ? "bg-[#D4956A]/10 border border-[#D4956A]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
            }`}
          >
            <p className="font-semibold">
              {isCorrect
                ? `Sehr gut geschätzt! Der Wert ist ${correctValue} ${unit}.`
                : isClose
                  ? `Fast! Du lagst ${deviation}% daneben. Richtig: ${correctValue} ${unit}.`
                  : `Der richtige Wert ist ${correctValue} ${unit}${deviation ? ` (Abweichung: ${deviation}%)` : ""}.`}
            </p>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-[#BFA48E]/10 border border-[#BFA48E]/30 p-4"
          >
            <p className="text-xs font-bold text-[#B8A100] mb-1 uppercase tracking-wide">Wusstest du?</p>
            <p className="text-sm text-[var(--lern-text-primary)]/80">{funFact}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-4"
          >
            <p className="text-sm font-medium text-[var(--lern-accent)] mb-1">Erklärung</p>
            <p className="text-sm text-[var(--lern-text-primary)]/70">
              {renderBold((sprachLevel === "b1" && explanationB1) || explanation)}
            </p>
          </motion.div>

          <button
            onClick={() => onNext(isCorrect)}
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
