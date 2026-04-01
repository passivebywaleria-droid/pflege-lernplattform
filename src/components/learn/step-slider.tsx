"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";

interface StepSliderProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  instruction: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  correctValue: number;
  tolerance: number;
  explanation: string;
  explanationB1?: string;
  onNext: (correct: boolean) => void;
}

export function StepSlider({
  title,
  body,
  glossar,
  sprachLevel = "c1",
  instruction,
  unit,
  min,
  max,
  step,
  correctValue,
  tolerance,
  explanation,
  explanationB1,
  onNext,
}: StepSliderProps) {
  const middle = Math.round((min + max) / 2 / step) * step;
  const [value, setValue] = useState(middle);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = Math.abs(value - correctValue) <= tolerance;
  const isClose = !isCorrect && Math.abs(value - correctValue) <= tolerance * 2;

  // Slider-Position als Prozent
  const pct = ((value - min) / (max - min)) * 100;

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

      <div className="rounded-2xl bg-[#0071e3]/5 border border-[#0071e3]/15 p-4">
        <p className="text-lg font-medium text-[#1d1d1f]">
          {instruction}
        </p>
      </div>

      {/* Gewählter Wert */}
      <div className="text-center">
        <p className="text-4xl font-bold text-[#0071e3]">
          {value} {unit}
        </p>
      </div>

      {/* Slider */}
      <div className="space-y-2 px-2">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => !submitted && setValue(Number(e.target.value))}
          disabled={submitted}
          className="w-full h-2 rounded-full appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0071e3] [&::-webkit-slider-thumb]:shadow-md
            [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#0071e3] [&::-moz-range-thumb]:border-0
            disabled:opacity-60"
          style={{
            background: `linear-gradient(to right, #0071e3 ${pct}%, #d2d2d7 ${pct}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-[#86868b]">
          <span>{min} {unit}</span>
          <span>{max} {unit}</span>
        </div>
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Antwort abgeben
        </button>
      ) : (
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl p-4 ${
              isCorrect
                ? "bg-[#30D158]/10 border border-[#30D158]/30"
                : isClose
                  ? "bg-[#FF9500]/10 border border-[#FF9500]/30"
                  : "bg-[#FF3B30]/10 border border-[#FF3B30]/30"
            }`}
          >
            <p className="font-semibold">
              {isCorrect
                ? `Richtig! ${correctValue} ${unit} ist korrekt.`
                : isClose
                  ? `Fast! Du hast ${value} ${unit} geschätzt, richtig wäre ${correctValue} ${unit}.`
                  : `Leider nicht. Du hast ${value} ${unit} geschätzt, richtig wäre ${correctValue} ${unit}.`}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl bg-[#0071e3]/5 border border-[#0071e3]/15 p-4"
          >
            <p className="text-sm font-medium text-[#0071e3] mb-1">
              Erklärung
            </p>
            <p className="text-sm text-[#1d1d1f]/70">
              {renderBold((sprachLevel === "b1" && explanationB1) || explanation)}
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
