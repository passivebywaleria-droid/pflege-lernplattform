"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { LabelImageLabel, GlossarEntry } from "../../../content/_types";
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
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[var(--lern-text-primary)]">{instruction}</p>

      {/* Fortschritt */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-[var(--lern-text-secondary)]">
          {Object.keys(answers).length} von {labels.length} beschriftet
        </span>
        <div className="flex gap-1">
          {labels.map((l) => (
            <div
              key={l.id}
              className={`h-2 w-2 rounded-full transition-colors ${
                checked
                  ? answers[l.id] === l.correct
                    ? "bg-[var(--lern-success)]"
                    : "bg-[var(--lern-error)]"
                  : answers[l.id]
                  ? "bg-[var(--lern-accent)]"
                  : "bg-[var(--lern-border)]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bild mit Labels */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--lern-border)]">
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
                    ? "bg-[#6B8F71]/30 border-[#6B8F71] text-[#6B8F71]"
                    : "bg-[#C96B5C]/30 border-[#C96B5C] text-[#C96B5C]"
                  : answers[label.id]
                  ? "bg-[var(--lern-accent)]/30 border-[var(--lern-accent)] text-[var(--lern-accent)]"
                  : activeLabel === label.id
                  ? "bg-[#D4956A]/30 border-[#D4956A] text-[#D4956A] scale-125"
                  : "bg-[var(--lern-bg-primary)]/80 border-[var(--lern-border)] text-[var(--lern-text-secondary)]"
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
                      ? "bg-[#6B8F71]/20 text-[#6B8F71]"
                      : "bg-[#C96B5C]/20 text-[#C96B5C]"
                    : "bg-[var(--lern-accent)]/20 text-[var(--lern-accent)]"
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
          className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-3 shadow-lg"
        >
          <p className="text-sm text-[var(--lern-text-secondary)] mb-2">Wähle den Begriff:</p>
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
                      ? "bg-[var(--lern-accent)] text-white"
                      : used
                      ? "bg-[var(--lern-bg)] text-[var(--lern-border)] cursor-not-allowed"
                      : "bg-[var(--lern-bg)] text-[var(--lern-text-primary)] hover:bg-[var(--lern-divider)] active:scale-95"
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
        <div className="rounded-2xl bg-[var(--lern-bg)] p-3">
          <p className="text-sm text-[var(--lern-text-secondary)] mb-2">
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
                      ? "bg-[var(--lern-border)]/50 text-[var(--lern-border)] line-through"
                      : "bg-[var(--lern-bg-primary)] text-[var(--lern-text-primary)] border border-[var(--lern-border)]"
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
          className="rounded-2xl bg-[#D4956A]/10 border border-[#D4956A]/30 p-3"
        >
          <p className="text-sm font-medium text-[#D4956A] mb-2">
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
                      ? "bg-[var(--lern-border)]/50 text-[var(--lern-border)] cursor-not-allowed"
                      : "bg-[var(--lern-bg-primary)] text-[var(--lern-text-primary)] border border-[#D4956A] hover:bg-[#D4956A]/10 active:scale-95"
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
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
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
                  ? "bg-[#6B8F71]/10 border-[#6B8F71]/30"
                  : "bg-[#D4956A]/10 border-[#D4956A]/30"
              }`}
            >
              <p
                className={`font-semibold ${
                  allCorrect ? "text-[#6B8F71]" : "text-[#D4956A]"
                }`}
              >
                {allCorrect
                  ? `Alle ${labels.length} richtig beschriftet!`
                  : `${correctCount} von ${labels.length} richtig`}
              </p>
              {!allCorrect && (
                <p className="text-sm text-[var(--lern-text-secondary)] mt-1">
                  Die richtigen Begriffe sind jetzt am Bild angezeigt.
                </p>
              )}
            </div>

            <button
              onClick={() => onNext(allCorrect)}
              className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
            >
              Weiter
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
