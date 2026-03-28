"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

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
    bg: "bg-[#FF3B30]/10",
    border: "border-[#FF3B30]/30",
    text: "text-[#FF3B30]",
    itemBg: "bg-[#FF3B30]/5",
  },
  {
    bg: "bg-[#0071e3]/10",
    border: "border-[#0071e3]/30",
    text: "text-[#0071e3]",
    itemBg: "bg-[#0071e3]/5",
  },
  {
    bg: "bg-[#FF9500]/10",
    border: "border-[#FF9500]/30",
    text: "text-[#FF9500]",
    itemBg: "bg-[#FF9500]/5",
  },
  {
    bg: "bg-[#30D158]/10",
    border: "border-[#30D158]/30",
    text: "text-[#30D158]",
    itemBg: "bg-[#30D158]/5",
  },
  {
    bg: "bg-[#AF52DE]/10",
    border: "border-[#AF52DE]/30",
    text: "text-[#AF52DE]",
    itemBg: "bg-[#AF52DE]/5",
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
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold text-[#1d1d1f]">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-sm text-[#6e6e73]">
        Ordne jedes Element der richtigen Kategorie zu.
      </p>

      {/* Current item */}
      {remaining.length > 0 && !checked && (
        <motion.div
          key={remaining[0].text}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="rounded-2xl border-2 border-[#0071e3] bg-[#0071e3]/5 px-5 py-4 text-center"
        >
          <p className="text-xs text-[#86868b] mb-1">
            Wohin gehört das? ({remaining.length} übrig)
          </p>
          <p className="text-sm font-semibold text-[#1d1d1f]">
            {remaining[0].text}
          </p>
        </motion.div>
      )}

      {/* Kategorie-Buttons als Zuordnungs-Ziele */}
      {remaining.length > 0 && !checked && (
        <div
          className="grid gap-3"
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
                className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-4 min-h-[80px] flex flex-col items-center justify-center gap-1 transition-all hover:shadow-md cursor-pointer`}
              >
                <span className={`text-sm font-bold ${colors.text}`}>
                  {cat.name}
                </span>
                <span className="text-[10px] text-[#86868b]">
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
                      className={`text-xs px-3 py-2 rounded-xl text-[#1d1d1f] transition-all flex items-center gap-1.5 ${
                        ok
                          ? "bg-[#30D158]/20 border border-[#30D158]/30"
                          : wrong
                            ? "bg-[#FF3B30]/20 border border-[#FF3B30]/30 line-through"
                            : "bg-white border border-[#d2d2d7] active:scale-95 shadow-sm"
                      }`}
                    >
                      {text}
                      {!checked && (
                        <span className="text-[#86868b] text-[10px]">✕</span>
                      )}
                      {ok && <span className="text-[#30D158]">✓</span>}
                      {wrong && <span className="text-[#FF3B30]">✗</span>}
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
          className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
        >
          Pruefen
        </button>
      )}

      {checked && (
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
            <p className="font-semibold text-[#1d1d1f]">
              {allCorrect
                ? "Perfekt! Alle Elemente korrekt zugeordnet."
                : `${correctCount}/${items.length} richtig.`}
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
