"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

interface PoolItem {
  id: string;
  text: string;
}

export function StepCloze({
  title,
  body,
  glossar,
  textWithBlanks,
  blanks,
  onNext,
}: StepClozeProps) {
  // Stabiler Pool mit eindeutigen IDs pro Wort-Instanz
  const wordPool = useMemo<PoolItem[]>(() => {
    const items: PoolItem[] = [];
    blanks.forEach((blank, bi) => {
      items.push({ id: `b${bi}-correct`, text: blank.correct });
      blank.distractors.forEach((d, di) => {
        items.push({ id: `b${bi}-d${di}`, text: d });
      });
    });
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }, [blanks]);

  // blankId → PoolItem (nicht nur Text, sondern das konkrete Item für layoutId)
  const [filledBlanks, setFilledBlanks] = useState<Record<number, PoolItem>>({});
  // Welche Lücke ist aktiv (wartet auf Wort)?
  const [activeBlank, setActiveBlank] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const usedIds = new Set(Object.values(filledBlanks).map((item) => item.id));
  const availableItems = wordPool.filter((item) => !usedIds.has(item.id));

  function handleBlankClick(blankId: number) {
    if (submitted) return;
    const filled = filledBlanks[blankId];
    if (filled) {
      // Wort aus Lücke entfernen → zurück in Pool
      setFilledBlanks((prev) => {
        const next = { ...prev };
        delete next[blankId];
        return next;
      });
      setActiveBlank(null);
    } else {
      // Lücke aktivieren / deaktivieren
      setActiveBlank((prev) => (prev === blankId ? null : blankId));
    }
  }

  function handleWordClick(item: PoolItem) {
    if (submitted) return;
    // Aktive Lücke verwenden — sonst erste leere Lücke
    const targetId =
      activeBlank !== null && filledBlanks[activeBlank] === undefined
        ? activeBlank
        : blanks.find((b) => filledBlanks[b.id] === undefined)?.id ?? null;

    if (targetId === null) return;
    setFilledBlanks((prev) => ({ ...prev, [targetId]: item }));
    setActiveBlank(null);
  }

  const allFilled = blanks.every((b) => filledBlanks[b.id] !== undefined);

  const blankResults = blanks.map((b) => ({
    ...b,
    given: filledBlanks[b.id]?.text ?? "",
    isCorrect: filledBlanks[b.id]?.text === b.correct,
  }));
  const allCorrect = blankResults.every((r) => r.isCorrect);
  const correctCount = blankResults.filter((r) => r.isCorrect).length;

  // Text in Segmente aufteilen
  const segments = useMemo(() => {
    const parts: { type: "text" | "blank"; content: string; blankId?: number }[] = [];
    const regex = /\[(\d+)\]/g;
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(textWithBlanks)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: "text", content: textWithBlanks.slice(lastIndex, match.index) });
      }
      parts.push({ type: "blank", content: "", blankId: parseInt(match[1]) });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < textWithBlanks.length) {
      parts.push({ type: "text", content: textWithBlanks.slice(lastIndex) });
    }
    return parts;
  }, [textWithBlanks]);

  return (
    <div className="flex flex-col h-full" style={{ color: "var(--lern-text-primary)" }}>
      <div className="flex-1 min-h-0 overflow-y-auto space-y-4 pb-2">
        <h2 className="text-base font-bold">{title}</h2>

        {body && (
          <p className="text-sm text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
            <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
          </p>
        )}

        <p className="text-sm font-medium">
          {activeBlank !== null
            ? "Wähle jetzt ein Wort unten ↓"
            : "Tippe auf eine Lücke, dann auf ein Wort."}
        </p>

        {/* Text mit Lücken */}
        <div className="rounded-2xl bg-[var(--lern-bg-primary)] border-[1.5px] border-[var(--lern-border)] p-4 leading-relaxed text-sm">
          {segments.map((seg, i) => {
            if (seg.type === "text") {
              return (
                <span key={i}>
                  <FachbegriffText glossar={glossar ?? []}>{seg.content}</FachbegriffText>
                </span>
              );
            }

            const blankId = seg.blankId!;
            const filled = filledBlanks[blankId];
            const isActive = !submitted && activeBlank === blankId;
            const result = submitted ? blankResults.find((r) => r.id === blankId) : null;

            const borderClass = submitted
              ? result?.isCorrect
                ? "border-[#3E5A6A] bg-[#3E5A6A]/10 text-[#3E5A6A]"
                : "border-[#C96B5C] bg-[#C96B5C]/10 text-[#C96B5C]"
              : isActive
                ? "border-[#218C71] bg-[#218C71]/15 border-solid ring-2 ring-[#218C71]/30"
                : filled
                  ? "border-[#218C71]/60 bg-[#218C71]/8 border-solid"
                  : "border-dashed border-[var(--lern-text-tertiary)]/50 bg-[var(--lern-bg)]";

            return (
              <button
                key={i}
                onClick={() => handleBlankClick(blankId)}
                disabled={submitted}
                className={`inline-flex items-center justify-center min-w-[90px] mx-1 my-0.5 px-3 py-1.5 rounded-lg border-[1.5px] transition-all align-middle ${borderClass} ${
                  !submitted ? "cursor-pointer active:scale-95" : ""
                }`}
              >
                {filled ? (
                  <motion.span
                    layoutId={filled.id}
                    className="text-sm font-semibold text-[var(--lern-text-primary)] whitespace-nowrap"
                    transition={{ type: "spring", damping: 22, stiffness: 300 }}
                  >
                    {filled.text}
                  </motion.span>
                ) : (
                  <span
                    className={`text-sm font-medium ${
                      isActive ? "text-[#218C71]" : "text-[var(--lern-text-tertiary)]/60"
                    }`}
                  >
                    {isActive ? "?" : "___"}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Wörter-Pool */}
        {!submitted && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-[var(--lern-text-secondary)]">
              {activeBlank !== null ? "Wähle ein Wort:" : "Begriffe:"}
            </p>
            <div className="flex flex-wrap gap-2">
              <AnimatePresence>
                {availableItems.map((item) => (
                  <motion.button
                    key={item.id}
                    layoutId={item.id}
                    onClick={() => handleWordClick(item)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
                    transition={{ type: "spring", damping: 22, stiffness: 300 }}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors active:scale-95 ${
                      activeBlank !== null
                        ? "bg-[#218C71] text-white shadow-md"
                        : "bg-[#218C71]/12 text-[#218C71]"
                    }`}
                  >
                    {item.text}
                  </motion.button>
                ))}
              </AnimatePresence>
              {availableItems.length === 0 && (
                <p className="text-xs text-[var(--lern-text-secondary)] py-1">
                  Alle Wörter platziert ✓
                </p>
              )}
            </div>
          </div>
        )}

        {/* Feedback nach Prüfen */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-2xl p-4 ${
                allCorrect
                  ? "bg-[#3E5A6A]/10 border border-[#3E5A6A]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
              }`}
            >
              <p className="font-semibold text-sm">
                {allCorrect ? "Perfekt — alle Lücken richtig! ✓" : `${correctCount} von ${blanks.length} richtig`}
              </p>
              {!allCorrect && (
                <div className="mt-2 space-y-1">
                  {blankResults
                    .filter((r) => !r.isCorrect)
                    .map((r) => (
                      <p key={r.id} className="text-xs text-[#C96B5C]">
                        <FachbegriffText glossar={glossar ?? []}>
                          {`Lücke ${r.id}: „${r.given}" → richtig: „${r.correct}"`}
                        </FachbegriffText>
                      </p>
                    ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="shrink-0 pt-3">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={!allFilled}
            className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#218C71" }}
            onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = "#1A7359")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#218C71")}
          >
            Prüfen
          </button>
        ) : (
          <button
            onClick={() => onNext(allCorrect)}
            className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
            style={{ backgroundColor: allCorrect ? "#3E5A6A" : "#C96B5C" }}
          >
            Weiter
          </button>
        )}
      </div>
    </div>
  );
}
