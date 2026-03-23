"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface StepSelfratingProps {
  title: string;
  body: string;
  fragetext: string;
  onNext: (rating: number) => void;
}

const RATINGS = [
  { value: 1, emoji: "😶", label: "Noch nie gehoert" },
  { value: 2, emoji: "🤔", label: "Vage Idee" },
  { value: 3, emoji: "🙂", label: "Grundlagen bekannt" },
  { value: 4, emoji: "😊", label: "Kann es erklaeren" },
  { value: 5, emoji: "🤩", label: "Sicher im Thema" },
];

export function StepSelfrating({
  title,
  body,
  fragetext,
  onNext,
}: StepSelfratingProps) {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
        {title}
      </h2>

      <div className="space-y-4 text-[#1d1d1f]/80 dark:text-white/80 leading-relaxed">
        {body.split("\n\n").map((p, i) => (
          <p key={i} className="whitespace-pre-line">
            {p}
          </p>
        ))}
      </div>

      <p className="text-lg font-medium text-[#1d1d1f] dark:text-white">
        {fragetext}
      </p>

      <div className="grid grid-cols-5 gap-2">
        {RATINGS.map((r) => (
          <motion.button
            key={r.value}
            onClick={() => setRating(r.value)}
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center gap-1 rounded-2xl border-2 p-3 transition-all ${
              rating === r.value
                ? "border-[#0071e3] bg-[#0071e3]/5"
                : "border-[#d2d2d7] dark:border-white/15 bg-white dark:bg-white/5"
            }`}
          >
            <span className="text-2xl">{r.emoji}</span>
            <span className="text-[10px] leading-tight text-center text-[#6e6e73] font-medium">
              {r.label}
            </span>
          </motion.button>
        ))}
      </div>

      <button
        onClick={() => rating !== null && onNext(rating)}
        disabled={rating === null}
        className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Weiter
      </button>
    </div>
  );
}
