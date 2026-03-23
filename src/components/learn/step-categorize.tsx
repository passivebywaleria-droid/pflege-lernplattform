"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

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

  const correctCount = items.filter((item) => {
    return sorted[item.correctCategory]?.includes(item.text);
  }).length;

  const allCorrect = correctCount === items.length;
  const allPlaced = remaining.length === 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 dark:text-white/70 leading-relaxed whitespace-pre-line">
          {body}
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
          className="rounded-2xl bg-[#1d1d1f] dark:bg-white/90 px-5 py-4 text-center"
        >
          <p className="text-xs text-white/60 dark:text-[#1d1d1f]/60 mb-1">
            Element ({remaining.length} uebrig)
          </p>
          <p className="text-sm font-semibold text-white dark:text-[#1d1d1f]">
            {remaining[0].text}
          </p>
        </motion.div>
      )}

      {/* Category buckets */}
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${Math.min(categories.length, 3)}, 1fr)`,
        }}
      >
        {categories.map((cat, catIdx) => {
          const colors = CATEGORY_COLORS[catIdx % CATEGORY_COLORS.length];
          return (
            <motion.button
              key={catIdx}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleDrop(catIdx)}
              disabled={remaining.length === 0 || checked}
              className={`rounded-2xl border-2 ${colors.border} ${colors.bg} p-3 min-h-[120px] flex flex-col transition-all ${
                remaining.length > 0 && !checked
                  ? "hover:shadow-md cursor-pointer"
                  : ""
              }`}
            >
              <span className={`text-xs font-bold mb-2 ${colors.text}`}>
                {cat.name}
              </span>
              <div className="flex flex-col gap-1">
                {sorted[catIdx].map((text, i) => {
                  const item = items.find((ci) => ci.text === text)!;
                  const ok = checked && item.correctCategory === catIdx;
                  const wrong = checked && item.correctCategory !== catIdx;
                  return (
                    <span
                      key={i}
                      className={`text-[10px] px-2 py-1 rounded-lg text-[#1d1d1f] dark:text-white ${
                        ok
                          ? "bg-[#30D158]/20"
                          : wrong
                            ? "bg-[#FF3B30]/20 line-through"
                            : colors.itemBg
                      }`}
                    >
                      {text}
                    </span>
                  );
                })}
              </div>
            </motion.button>
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
            <p className="font-semibold text-[#1d1d1f] dark:text-white">
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
