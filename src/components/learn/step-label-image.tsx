"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LabelImageLabel, GlossarEntry } from "../../../content/ce-05/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface StepLabelImageProps {
  title: string;
  body?: string;
  imageUrl: string;
  imageAlt: string;
  instruction: string;
  labels: LabelImageLabel[];
  mode: "drag" | "select";
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
}

export function StepLabelImage({
  title,
  body,
  imageUrl,
  imageAlt,
  instruction,
  labels,
  mode,
  glossar,
  onNext,
}: StepLabelImageProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  // All options = correct answers + distractors (shuffled once)
  const [allOptions] = useState(() => {
    const opts = new Set<string>();
    labels.forEach((l) => {
      opts.add(l.correct);
      l.distractors?.forEach((d) => opts.add(d));
    });
    return [...opts].sort(() => Math.random() - 0.5);
  });

  const handleSelect = useCallback(
    (labelId: string, value: string) => {
      if (checked) return;
      setAnswers((prev) => ({ ...prev, [labelId]: value }));
      setActiveLabel(null);
    },
    [checked]
  );

  const handleCheck = useCallback(() => {
    setChecked(true);
  }, []);

  const allAnswered = Object.keys(answers).length === labels.length;
  const correctCount = checked
    ? labels.filter((l) => answers[l.id] === l.correct).length
    : 0;
  const allCorrect = correctCount === labels.length;

  return (
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold text-[#1d1d1f]">{title}</h2>

      {body && (
        <p className="text-[#1d1d1f]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[#1d1d1f]">{instruction}</p>

      {/* Fortschritt */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#6e6e73]">
          {Object.keys(answers).length} von {labels.length} beschriftet
        </span>
        <div className="flex gap-1">
          {labels.map((l) => (
            <div
              key={l.id}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                checked
                  ? answers[l.id] === l.correct
                    ? "bg-[#30D158]"
                    : "bg-[#FF3B30]"
                  : answers[l.id]
                  ? "bg-[#0071e3]"
                  : "bg-[#d2d2d7]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bild mit Labels */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-[#d2d2d7]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-auto"
          draggable={false}
        />

        {/* Label-Punkte auf dem Bild */}
        {labels.map((label) => (
          <div
            key={label.id}
            className="absolute"
            style={{
              left: `${label.position.x}%`,
              top: `${label.position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Punkt */}
            <button
              onClick={() =>
                !checked && setActiveLabel(activeLabel === label.id ? null : label.id)
              }
              className={`h-8 w-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all ${
                checked
                  ? answers[label.id] === label.correct
                    ? "bg-[#30D158]/30 border-[#30D158] text-[#30D158]"
                    : "bg-[#FF3B30]/30 border-[#FF3B30] text-[#FF3B30]"
                  : answers[label.id]
                  ? "bg-[#0071e3]/30 border-[#0071e3] text-[#0071e3]"
                  : activeLabel === label.id
                  ? "bg-[#FF9500]/30 border-[#FF9500] text-[#FF9500] scale-125"
                  : "bg-white/80 border-[#d2d2d7] text-[#6e6e73]"
              }`}
            >
              {checked
                ? answers[label.id] === label.correct
                  ? "✓"
                  : "✗"
                : answers[label.id]
                ? "•"
                : "?"}
            </button>

            {/* Gewählter/Richtiger Begriff */}
            {(answers[label.id] || checked) && (
              <span
                className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  checked
                    ? answers[label.id] === label.correct
                      ? "bg-[#30D158]/20 text-[#30D158]"
                      : "bg-[#FF3B30]/20 text-[#FF3B30]"
                    : "bg-[#0071e3]/20 text-[#0071e3]"
                }`}
              >
                {checked && answers[label.id] !== label.correct
                  ? label.correct
                  : answers[label.id] || ""}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Auswahl-Optionen (Select-Modus) */}
      {activeLabel && mode === "select" && !checked && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-white border border-[#d2d2d7] p-3 shadow-lg"
        >
          <p className="text-sm text-[#6e6e73] mb-2">Wähle den Begriff:</p>
          <div className="flex flex-wrap gap-2">
            {allOptions.map((opt) => {
              const used = Object.values(answers).includes(opt) && answers[activeLabel] !== opt;
              return (
                <button
                  key={opt}
                  onClick={() => handleSelect(activeLabel, opt)}
                  disabled={used}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                    answers[activeLabel] === opt
                      ? "bg-[#0071e3] text-white"
                      : used
                      ? "bg-[#f5f5f7] text-[#d2d2d7] cursor-not-allowed"
                      : "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] active:scale-95"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Drag-Modus: Begriffe zum Antippen */}
      {mode === "drag" && !checked && !activeLabel && (
        <div className="rounded-2xl bg-[#f5f5f7] p-3">
          <p className="text-sm text-[#6e6e73] mb-2">
            Tippe zuerst auf einen Punkt im Bild, dann auf den passenden Begriff:
          </p>
          <div className="flex flex-wrap gap-2">
            {allOptions.map((opt) => {
              const used = Object.values(answers).includes(opt);
              return (
                <span
                  key={opt}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                    used
                      ? "bg-[#d2d2d7]/50 text-[#d2d2d7] line-through"
                      : "bg-white text-[#1d1d1f] border border-[#d2d2d7]"
                  }`}
                >
                  {opt}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {mode === "drag" && activeLabel && !checked && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-[#FF9500]/10 border border-[#FF9500]/30 p-3"
        >
          <p className="text-sm font-medium text-[#FF9500] mb-2">
            Punkt ausgewählt — tippe auf den passenden Begriff:
          </p>
          <div className="flex flex-wrap gap-2">
            {allOptions.map((opt) => {
              const used = Object.values(answers).includes(opt) && answers[activeLabel] !== opt;
              return (
                <button
                  key={opt}
                  onClick={() => handleSelect(activeLabel, opt)}
                  disabled={used}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                    used
                      ? "bg-[#d2d2d7]/50 text-[#d2d2d7] cursor-not-allowed"
                      : "bg-white text-[#1d1d1f] border border-[#FF9500] hover:bg-[#FF9500]/10 active:scale-95"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Prüfen-Button */}
      {allAnswered && !checked && (
        <motion.button
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleCheck}
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Überprüfen
        </motion.button>
      )}

      {/* Ergebnis */}
      <AnimatePresence>
        {checked && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div
              className={`rounded-2xl p-4 border ${
                allCorrect
                  ? "bg-[#30D158]/10 border-[#30D158]/30"
                  : "bg-[#FF9500]/10 border-[#FF9500]/30"
              }`}
            >
              <p
                className={`font-semibold ${
                  allCorrect ? "text-[#30D158]" : "text-[#FF9500]"
                }`}
              >
                {allCorrect
                  ? `Alle ${labels.length} richtig beschriftet!`
                  : `${correctCount} von ${labels.length} richtig`}
              </p>
              {!allCorrect && (
                <p className="text-sm text-[#6e6e73] mt-1">
                  Die richtigen Begriffe sind jetzt am Bild angezeigt.
                </p>
              )}
            </div>

            <button
              onClick={() => onNext(allCorrect)}
              className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
            >
              Weiter
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
