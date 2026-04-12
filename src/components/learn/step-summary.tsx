"use client";

import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";
import { HandDrawnIcon } from "@/components/ui/hand-drawn-icon";

interface StepSummaryProps {
  title: string;
  glossar?: GlossarEntry[];
  reflexionText?: string;  // Was der Schüler am Anfang geschrieben hat
  rueckbezug: string;      // "Jetzt weißt du: ..."
  kernaussagen: string[];
  score: number;
  totalQuestions: number;
  onNext: () => void;
}

export function StepSummary({
  title,
  glossar,
  reflexionText,
  rueckbezug,
  kernaussagen,
  score,
  totalQuestions,
  onNext,
}: StepSummaryProps) {
  const percentage =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 100;

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="text-5xl mb-3">
          <HandDrawnIcon name={percentage >= 80 ? "celebration" : percentage >= 60 ? "clap" : "muscle"} size={48} color={percentage >= 80 ? "var(--lern-success)" : percentage >= 60 ? "var(--lern-warning)" : "var(--lern-accent)"} />
        </div>
        <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
          {title}
        </h2>
      </motion.div>

      {/* Rückbezug auf Reflexion */}
      {reflexionText && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-[var(--lern-info)]/5 border border-[var(--lern-info)]/15 p-5 space-y-3"
        >
          <div>
            <p className="text-xs font-medium text-[var(--lern-info)] mb-1">
              Am Anfang hast du geschrieben:
            </p>
            <p className="text-sm text-[var(--lern-text-primary)]/60 italic">
              &ldquo;{reflexionText}&rdquo;
            </p>
          </div>
          <div className="h-px bg-[var(--lern-info)]/15" />
          <div>
            <p className="text-xs font-medium text-[var(--lern-info)] mb-1">
              Jetzt weißt du:
            </p>
            <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed">
              {rueckbezug}
            </p>
          </div>
        </motion.div>
      )}

      {/* Ergebnis-Zahlen */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="grid grid-cols-2 gap-3"
      >
        <div className="rounded-2xl bg-[var(--lern-success)]/5 p-4 text-center">
          <p className="text-2xl font-bold text-[var(--lern-success)]">
            {score}/{totalQuestions}
          </p>
          <p className="text-xs text-[var(--lern-text-secondary)]">Richtig</p>
        </div>
        <div className="rounded-2xl bg-[var(--lern-info)]/5 p-4 text-center">
          <p className="text-2xl font-bold text-[var(--lern-info)]">{percentage}%</p>
          <p className="text-xs text-[var(--lern-text-secondary)]">Score</p>
        </div>
      </motion.div>

      {/* Kernaussagen */}
      {kernaussagen.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl bg-[var(--lern-success)]/5 border border-[var(--lern-success)]/15 p-4"
        >
          <p className="text-sm font-medium text-[var(--lern-success)] mb-2">
            Das hast du gelernt:
          </p>
          <ul className="space-y-1.5">
            {kernaussagen.map((k, i) => (
              <li
                key={i}
                className="text-sm text-[var(--lern-text-primary)]/70 flex items-start gap-2"
              >
                <span className="text-[var(--lern-success)] shrink-0">✓</span>
                <span>{renderBold(k)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        onClick={onNext}
        className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
      >
        Weiter
      </motion.button>
    </div>
  );
}
