"use client";

import { motion } from "framer-motion";

const BLOOM_DATA: Record<
  number,
  { name: string; farbe: string; erklaerung: string }
> = {
  1: {
    name: "Erinnern",
    farbe: "#30D158",
    erklaerung: "Du musstest Fakten oder Begriffe abrufen.",
  },
  2: {
    name: "Verstehen",
    farbe: "#0071e3",
    erklaerung: "Du musstest etwas in eigenen Worten erklaeren koennen.",
  },
  3: {
    name: "Anwenden",
    farbe: "#FFD60A",
    erklaerung: "Du musstest Wissen auf eine neue Situation uebertragen.",
  },
  4: {
    name: "Analysieren",
    farbe: "#FF9500",
    erklaerung: "Du musstest Zusammenhaenge erkennen und zergliedern.",
  },
  5: {
    name: "Bewerten",
    farbe: "#FF3B30",
    erklaerung: "Du musstest eine Situation beurteilen und begruenden.",
  },
  6: {
    name: "Erschaffen",
    farbe: "#AF52DE",
    erklaerung: "Du musstest etwas Neues erstellen oder planen.",
  },
};

interface BloomFeedbackProps {
  bloomLevel: number;
  correct: boolean;
}

export function BloomFeedback({ bloomLevel, correct }: BloomFeedbackProps) {
  const bloom = BLOOM_DATA[bloomLevel];
  if (!bloom) return null;

  const nextBloom = BLOOM_DATA[bloomLevel + 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-3 rounded-2xl border border-[#d2d2d7]/50 bg-white/50 px-4 py-3"
    >
      <div className="flex items-center gap-2 mb-1">
        <span
          className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
          style={{ backgroundColor: bloom.farbe }}
        >
          Bloom {bloomLevel}
        </span>
        <span className="text-xs font-semibold text-[#1d1d1f]">
          {bloom.name}
        </span>
      </div>
      <p className="text-xs text-[#6e6e73]">{bloom.erklaerung}</p>
      {correct && nextBloom && (
        <p className="text-xs text-[#6e6e73] mt-1">
          Naechste Stufe:{" "}
          <span className="font-semibold" style={{ color: nextBloom.farbe }}>
            Bloom {bloomLevel + 1}: {nextBloom.name}
          </span>
        </p>
      )}
    </motion.div>
  );
}
