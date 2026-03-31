"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/ce-05/_types";
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
  { value: 1, icon: "neutral", color: "#86868b", label: "Noch nie gehört" },
  { value: 2, icon: "thinking", color: "#FF9500", label: "Vage Idee" },
  { value: 3, icon: "smile", color: "#5AC8FA", label: "Grundlagen bekannt" },
  { value: 4, icon: "grin", color: "#30D158", label: "Kann es erklären" },
  { value: 5, icon: "starry-eyes", color: "#AF52DE", label: "Sicher im Thema" },
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
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold text-[#1d1d1f]">
        {title}
      </h2>

      <div className="space-y-4 text-[#1d1d1f]/80 leading-relaxed">
        {body.split("\n\n").map((p, i) => (
          <p key={i} className="whitespace-pre-line">
            <FachbegriffText glossar={glossar ?? []}>{p}</FachbegriffText>
          </p>
        ))}
      </div>

      <p className="text-lg font-medium text-[#1d1d1f]">
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
                : "border-[#d2d2d7] bg-white"
            }`}
          >
            <HandDrawnIcon name={r.icon} size={28} color={rating === r.value ? r.color : "#86868b"} />
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
