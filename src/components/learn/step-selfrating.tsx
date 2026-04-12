"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";
import { HandDrawnIcon, type IconName } from "@/components/ui/hand-drawn-icon";

interface StepSelfratingProps {
  title: string;
  body: string;
  fragetext: string;
  glossar?: GlossarEntry[];
  onNext: (rating: number) => void;
}

const RATINGS: { value: number; icon: IconName; color: string; label: string }[] = [
  { value: 1, icon: "neutral", color: "var(--lern-text-tertiary)", label: "Noch nie gehört" },
  { value: 2, icon: "thinking", color: "#D4956A", label: "Vage Idee" },
  { value: 3, icon: "smile", color: "#8AABB5", label: "Grundlagen bekannt" },
  { value: 4, icon: "grin", color: "#6B8F71", label: "Kann es erklären" },
  { value: 5, icon: "starry-eyes", color: "#9B7EA6", label: "Sicher im Thema" },
];

export function StepSelfrating({
  title,
  body,
  fragetext,
  glossar,
  onNext,
}: StepSelfratingProps) {
  const [rating, setRating] = useState<number | null>(null);

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
        {title}
      </h2>

      <div className="space-y-4 text-[var(--lern-text-primary)]/80 leading-relaxed">
        {body.split("\n\n").map((p, i) => (
          <p key={i} className="whitespace-pre-line">
            <FachbegriffText glossar={glossar ?? []}>{p}</FachbegriffText>
          </p>
        ))}
      </div>

      <p className="text-lg font-medium text-[var(--lern-text-primary)]">
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
                ? "border-[var(--lern-accent)] bg-[var(--lern-accent)]/5"
                : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)]"
            }`}
          >
            <HandDrawnIcon name={r.icon} size={28} color={rating === r.value ? r.color : "var(--lern-text-tertiary)"} />
            <span className="text-[10px] leading-tight text-center text-[var(--lern-text-secondary)] font-medium">
              {r.label}
            </span>
          </motion.button>
        ))}
      </div>

      <button
        onClick={() => rating !== null && onNext(rating)}
        disabled={rating === null}
        className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Weiter
      </button>
    </div>
  );
}
