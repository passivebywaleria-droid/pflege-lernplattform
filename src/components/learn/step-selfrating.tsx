"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { HandDrawnIcon, type IconName } from "@/components/ui/hand-drawn-icon";
import { StepShell } from "./step-shell";
import { StepActionBar } from "./step-action-bar";

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
  { value: 4, icon: "grin", color: "#3E5A6A", label: "Kann es erklären" },
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

  const safeTitle = title ?? "";
  const safeFragetext = fragetext ?? "";
  const titleEqualsFrage =
    safeTitle.trim().toLowerCase() === safeFragetext.trim().toLowerCase();
  const question = titleEqualsFrage
    ? safeFragetext
    : safeTitle || safeFragetext;

  return (
    <div style={{ color: "var(--lern-text-primary)" }}>
      <StepShell
        kindLabel="Selbsteinschätzung"
        question={question}
        body={body}
        glossar={glossar}
      >
        {!titleEqualsFrage && safeTitle && (
          <p className="-mt-2 mb-3 text-sm font-medium text-[var(--lern-text-primary)]">
            {safeFragetext}
          </p>
        )}

        <div className="grid grid-cols-5 gap-1.5">
          {RATINGS.map((r) => (
            <motion.button
              key={r.value}
              onClick={() => setRating(r.value)}
              whileTap={{ scale: 0.9 }}
              className={`flex flex-col items-center gap-1 rounded-xl border p-2.5 transition-all ${
                rating === r.value
                  ? "border-[var(--lern-accent)] bg-[var(--lern-accent)]/8"
                  : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)]"
              }`}
            >
              <HandDrawnIcon
                name={r.icon}
                size={26}
                color={
                  rating === r.value ? r.color : "var(--lern-text-tertiary)"
                }
              />
              <span className="text-[10px] leading-tight text-center text-[var(--lern-text-secondary)] font-medium">
                {r.label}
              </span>
            </motion.button>
          ))}
        </div>
      </StepShell>

      <StepActionBar>
        <button
          onClick={() => rating !== null && onNext(rating)}
          disabled={rating === null}
          className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#4C6A52] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Weiter
        </button>
      </StepActionBar>
    </div>
  );
}
