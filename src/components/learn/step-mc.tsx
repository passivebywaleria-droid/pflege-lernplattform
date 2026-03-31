"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";
import { HandDrawnIcon } from "@/components/ui/hand-drawn-icon";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface MCOption {
  text: string;
  isCorrect: boolean;
  explanation: string;
  explanationB1?: string;
}

interface StepMCProps {
  title: string;
  body?: string;
  fragetext: string;
  optionen: MCOption[];
  multiSelect?: boolean;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

export function StepMC({
  title,
  body,
  fragetext,
  optionen,
  multiSelect,
  glossar,
  sprachLevel = "c1",
  onNext,
}: StepMCProps) {
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (idx: number) => {
    if (submitted) return;
    if (multiSelect) {
      setSelected((prev) =>
        prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx],
      );
    } else {
      setSelected([idx]);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const isCorrect = multiSelect
    ? optionen.every(
        (o, i) => o.isCorrect === selected.includes(i),
      )
    : selected.length === 1 && optionen[selected[0]].isCorrect;

  const labels = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold text-[#1d1d1f]">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[#1d1d1f]">
        <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
      </p>

      {multiSelect && !submitted && (
        <p className="text-sm text-[#6e6e73]">
          Mehrere Antworten moeglich
        </p>
      )}

      <div className="space-y-3">
        {optionen.map((option, idx) => {
          const isSelected = selected.includes(idx);
          const showResult = submitted;
          const optionCorrect = option.isCorrect;

          let borderColor = "border-[#d2d2d7]";
          let bgColor = "bg-white";

          if (showResult && isSelected && optionCorrect) {
            borderColor = "border-[#30D158]";
            bgColor = "bg-[#30D158]/5";
          } else if (showResult && isSelected && !optionCorrect) {
            borderColor = "border-[#FF3B30]";
            bgColor = "bg-[#FF3B30]/5";
          } else if (showResult && !isSelected && optionCorrect) {
            borderColor = "border-[#30D158]/50";
            bgColor = "bg-[#30D158]/5";
          } else if (isSelected) {
            borderColor = "border-[#0071e3]";
            bgColor = "bg-[#0071e3]/5";
          }

          return (
            <motion.button
              key={idx}
              onClick={() => handleSelect(idx)}
              whileTap={!submitted ? { scale: 0.98 } : undefined}
              className={`w-full rounded-2xl border-2 ${borderColor} ${bgColor} p-4 text-left transition-colors`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    showResult && optionCorrect
                      ? "bg-[#30D158] text-white"
                      : showResult && isSelected && !optionCorrect
                        ? "bg-[#FF3B30] text-white"
                        : isSelected
                          ? "bg-[#0071e3] text-white"
                          : "bg-[#f5f5f7] text-[#6e6e73]"
                  }`}
                >
                  {showResult && isSelected
                    ? optionCorrect
                      ? "✓"
                      : "✗"
                    : labels[idx]}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-[#1d1d1f]">
                    <FachbegriffText glossar={glossar ?? []}>{option.text}</FachbegriffText>
                  </p>
                  <AnimatePresence>
                    {showResult && (isSelected || optionCorrect) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2 text-sm text-[#6e6e73]"
                      >
                        <FachbegriffText glossar={glossar ?? []}>{(sprachLevel === "b1" && option.explanationB1) || option.explanation}</FachbegriffText>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected.length === 0}
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
            <p className="font-semibold">
              <span className="inline-flex items-center gap-1.5">{isCorrect ? <><HandDrawnIcon name="check" size={18} color="#30D158" /> Richtig!</> : <><HandDrawnIcon name="cross" size={18} color="#FF3B30" /> Nicht ganz richtig</>}</span>
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
