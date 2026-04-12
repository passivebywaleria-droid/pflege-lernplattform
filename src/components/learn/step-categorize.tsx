"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";
import { generiereSandwichFeedback, SandwichFeedbackDisplay } from "./bloom-feedback";

interface Category {
  name: string;
}

interface CategoryItem {
  text: string;
  correctCategory: number;
}

interface StepCategorizeProps {
  title: string;
  body?: string;
  categories: Category[];
  items: CategoryItem[];
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
}

const CATEGORY_COLORS = [
  {
    bg: "bg-[#C96B5C]/10",
    border: "border-[#C96B5C]/30",
    text: "text-[#C96B5C]",
    itemBg: "bg-[#C96B5C]/5",
  },
  {
    bg: "bg-[var(--lern-accent)]/10",
    border: "border-[var(--lern-accent)]/30",
    text: "text-[var(--lern-accent)]",
    itemBg: "bg-[var(--lern-accent-bg)]",
  },
  {
    bg: "bg-[#D4956A]/10",
    border: "border-[#D4956A]/30",
    text: "text-[#D4956A]",
    itemBg: "bg-[#D4956A]/5",
  },
  {
    bg: "bg-[#6B8F71]/10",
    border: "border-[#6B8F71]/30",
    text: "text-[#6B8F71]",
    itemBg: "bg-[#6B8F71]/5",
  },
  {
    bg: "bg-[#9B7EA6]/10",
    border: "border-[#9B7EA6]/30",
    text: "text-[#9B7EA6]",
    itemBg: "bg-[#9B7EA6]/5",
  },
];

export function StepCategorize({
  title,
  body,
  categories,
  items,
  glossar,
  onNext,
}: StepCategorizeProps) {
  const shuffled = useRef([...items].sort(() => Math.random() - 0.5));
  const [remaining, setRemaining] = useState(shuffled.current);
  const [sorted, setSorted] = useState<Record<number, string[]>>(
    Object.fromEntries(categories.map((_, i) => [i, []]))
  );
  const [checked, setChecked] = useState(false);

  const handleDrop = (catIdx: number) => {
    if (checked || remaining.length === 0) return;
    const item = remaining[0];
    setRemaining((r) => r.slice(1));
    setSorted((s) => ({ ...s, [catIdx]: [...s[catIdx], item.text] }));
  };

  // Undo: Antippen eines sortierten Elements → zurück in den Pool
  const handleUnsort = (catIdx: number, text: string) => {
    if (checked) return;
    const item = items.find((i) => i.text === text);
    if (!item) return;
    setSorted((s) => ({
      ...s,
      [catIdx]: s[catIdx].filter((t) => t !== text),
    }));
    setRemaining((r) => [item, ...r]);
  };

  const correctCount = items.filter((item) => {
    return sorted[item.correctCategory]?.includes(item.text);
  }).length;

  const allCorrect = correctCount === items.length;
  const allPlaced = remaining.length === 0;

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

      <p className="text-sm text-[var(--lern-text-secondary)]">
        Ordne jedes Element der richtigen Kategorie zu.
      </p>

      {/* Current item */}
      {remaining.length > 0 && !checked && (
        <motion.div
          key={remaining[0].text}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="rounded-2xl border-2 border-[var(--lern-accent)] bg-[var(--lern-accent-bg)] px-5 py-4 text-center"
        >
          <p className="text-xs text-[var(--lern-text-tertiary)] mb-1">
            Wohin gehört das? ({remaining.length} übrig)
          </p>
          <p className="text-sm font-semibold text-[var(--lern-text-primary)]">
            <FachbegriffText glossar={glossar ?? []}>{remaining[0].text}</FachbegriffText>
          </p>
        </motion.div>
      )}

      {/* Kategorie-Buttons als Zuordnungs-Ziele */}
      {remaining.length > 0 && !checked && (
        <div
          className="grid gap-3"
          role="group"
          aria-label="Kategorien zum Zuordnen"
          style={{
            gridTemplateColumns: `repeat(${Math.min(categories.length, 3)}, 1fr)`,
          }}
        >
          {categories.map((cat, catIdx) => {
            const colors = CATEGORY_COLORS[catIdx % CATEGORY_COLORS.length];
            return (
              <motion.button
                key={catIdx}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDrop(catIdx)}
                aria-label={`Zuordnen zu: ${cat.name}`}
                aria-dropeffect="move"
                className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-4 min-h-[80px] flex flex-col items-center justify-center gap-1 transition-all hover:shadow-md cursor-pointer focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2`}
              >
                <span className={`text-sm font-bold ${colors.text}`}>
                  {cat.name}
                </span>
                <span className="text-[10px] text-[var(--lern-text-tertiary)]">
                  Hier zuordnen
                </span>
              </motion.button>
            );
          })}
        </div>
      )}

      {/* Sortierte Elemente pro Kategorie */}
      <div className="space-y-3">
        {categories.map((cat, catIdx) => {
          const colors = CATEGORY_COLORS[catIdx % CATEGORY_COLORS.length];
          const catItems = sorted[catIdx];
          if (catItems.length === 0) return null;

          return (
            <div key={catIdx} className={`rounded-2xl border ${colors.border} ${colors.bg} p-3`}>
              <span className={`text-xs font-bold ${colors.text} block mb-2`}>
                {cat.name} ({catItems.length})
              </span>
              <div className="flex flex-wrap gap-2">
                {catItems.map((text, i) => {
                  const item = items.find((ci) => ci.text === text)!;
                  const ok = checked && item.correctCategory === catIdx;
                  const wrong = checked && item.correctCategory !== catIdx;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleUnsort(catIdx, text)}
                      disabled={checked}
                      className={`text-xs px-3 py-2 rounded-xl text-[var(--lern-text-primary)] transition-all flex items-center gap-1.5 ${
                        ok
                          ? "bg-[#6B8F71]/20 border border-[#6B8F71]/30"
                          : wrong
                            ? "bg-[#C96B5C]/20 border border-[#C96B5C]/30 line-through"
                            : "bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] active:scale-95 shadow-sm"
                      }`}
                    >
                      {renderBold(text)}
                      {!checked && (
                        <span className="text-[var(--lern-text-tertiary)] text-[10px]">✕</span>
                      )}
                      {ok && <span className="text-[#6B8F71]">✓</span>}
                      {wrong && <span className="text-[#C96B5C]">✗</span>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {allPlaced && !checked && (
        <button
          onClick={() => setChecked(true)}
          aria-label="Zuordnung prüfen"
          className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
        >
          Prüfen
        </button>
      )}

      {checked && (
        <div className="space-y-4">
          <SandwichFeedbackDisplay
            feedback={generiereSandwichFeedback(
              allCorrect,
              allCorrect ? "" : `${correctCount} von ${items.length} richtig zugeordnet`,
              allCorrect ? "Perfekt! Alle Elemente korrekt zugeordnet." : undefined,
            )}
            correct={allCorrect}
          />

          <button
            onClick={() => onNext(allCorrect)}
            aria-label="Weiter zum nächsten Schritt"
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
