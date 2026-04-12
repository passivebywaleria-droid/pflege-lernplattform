"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { ClozeBlank, GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface StepClozeProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  textWithBlanks: string;
  blanks: ClozeBlank[];
  onNext: (correct: boolean) => void;
}

export function StepCloze({
  title,
  body,
  glossar,
  textWithBlanks,
  blanks,
  onNext,
}: StepClozeProps) {
  const [filledBlanks, setFilledBlanks] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Wörter-Pool: alle korrekten + Distraktoren, gemischt
  const wordPool = useMemo(() => {
    const words: string[] = [];
    for (const blank of blanks) {
      words.push(blank.correct);
      words.push(...blank.distractors);
    }
    // Fisher-Yates Shuffle
    for (let i = words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
    return words;
  }, [blanks]);

  // Welche Wörter sind noch im Pool (nicht verwendet)?
  const usedWords = Object.values(filledBlanks);
  const availableWords = wordPool.filter((w) => {
    const usedCount = usedWords.filter((u) => u === w).length;
    const poolCount = wordPool.filter((p) => p === w).length;
    return usedCount < poolCount;
  });

  const handleSelectWord = (word: string) => {
    // Finde die erste leere Lücke
    const emptyBlank = blanks.find((b) => filledBlanks[b.id] === undefined);
    if (emptyBlank) {
      setFilledBlanks((prev) => ({ ...prev, [emptyBlank.id]: word }));
    }
  };

  const handleRemoveWord = (blankId: number) => {
    if (submitted) return;
    setFilledBlanks((prev) => {
      const next = { ...prev };
      delete next[blankId];
      return next;
    });
  };

  const allFilled = blanks.every((b) => filledBlanks[b.id] !== undefined);

  // Prüfung
  const blankResults = blanks.map((b) => ({
    ...b,
    given: filledBlanks[b.id] ?? "",
    isCorrect: filledBlanks[b.id] === b.correct,
  }));
  const allCorrect = blankResults.every((r) => r.isCorrect);
  const correctCount = blankResults.filter((r) => r.isCorrect).length;

  // Text in Segmente aufteilen: normaler Text + Lücken
  const segments = useMemo(() => {
    const parts: { type: "text" | "blank"; content: string; blankId?: number }[] = [];
    const regex = /\{\{(\d+)\}\}/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(textWithBlanks)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          content: textWithBlanks.slice(lastIndex, match.index),
        });
      }
      parts.push({
        type: "blank",
        content: "",
        blankId: parseInt(match[1]),
      });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < textWithBlanks.length) {
      parts.push({
        type: "text",
        content: textWithBlanks.slice(lastIndex),
      });
    }
    return parts;
  }, [textWithBlanks]);

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
        {title}
      </h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium text-[var(--lern-text-primary)]">
        Fülle die Lücken mit den passenden Begriffen.
      </p>

      {/* Text mit Lücken */}
      <div className="rounded-2xl bg-[var(--lern-bg-primary)] border-2 border-[var(--lern-border)] p-5 leading-relaxed text-[var(--lern-text-primary)]">
        {segments.map((seg, i) => {
          if (seg.type === "text") {
            return <span key={i}><FachbegriffText glossar={glossar ?? []}>{seg.content}</FachbegriffText></span>;
          }
          const blankId = seg.blankId!;
          const filled = filledBlanks[blankId];
          const result = submitted ? blankResults.find((r) => r.id === blankId) : null;

          return (
            <button
              key={i}
              onClick={() => handleRemoveWord(blankId)}
              disabled={submitted}
              className={`inline-flex items-center min-w-[80px] mx-1 px-3 py-1 rounded-lg border-2 border-dashed text-sm font-medium transition-colors ${
                submitted && result?.isCorrect
                  ? "border-[#6B8F71] bg-[#6B8F71]/10 text-[#6B8F71]"
                  : submitted && !result?.isCorrect
                    ? "border-[#C96B5C] bg-[#C96B5C]/10 text-[#C96B5C]"
                    : filled
                      ? "border-[var(--lern-accent)] bg-[var(--lern-accent)]/10 text-[var(--lern-accent)]"
                      : "border-[var(--lern-text-tertiary)] bg-[var(--lern-bg)] text-[var(--lern-text-tertiary)]"
              }`}
            >
              {filled || "___"}
            </button>
          );
        })}
      </div>

      {/* Wörter-Pool */}
      {!submitted && (
        <div className="space-y-2">
          <p className="text-xs font-medium text-[var(--lern-text-secondary)]">Verfügbare Begriffe:</p>
          <div className="flex flex-wrap gap-2">
            {availableWords.map((word, i) => (
              <button
                key={`${word}-${i}`}
                onClick={() => handleSelectWord(word)}
                disabled={!blanks.some((b) => filledBlanks[b.id] === undefined)}
                className="rounded-full bg-[var(--lern-accent)]/10 px-4 py-2 text-sm font-medium text-[var(--lern-accent)] transition-all active:scale-95 disabled:opacity-40"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      )}

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allFilled}
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] disabled:opacity-40 disabled:cursor-not-allowed"
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
                ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
                : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
            }`}
          >
            <p className="font-semibold">
              {allCorrect
                ? "Perfekt — alle Lücken richtig!"
                : `${correctCount} von ${blanks.length} richtig`}
            </p>
            {!allCorrect && (
              <div className="mt-2 space-y-1">
                {blankResults
                  .filter((r) => !r.isCorrect)
                  .map((r) => (
                    <p key={r.id} className="text-sm text-[#C96B5C]">
                      <FachbegriffText glossar={glossar ?? []}>{`Lücke ${r.id}: „${r.given}" → richtig wäre „${r.correct}"`}</FachbegriffText>
                    </p>
                  ))}
              </div>
            )}
          </motion.div>

          <button
            onClick={() => onNext(allCorrect)}
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
