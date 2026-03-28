"use client";

import { motion } from "framer-motion";

interface StepSummaryProps {
  title: string;
  reflexionText?: string;  // Was der Schüler am Anfang geschrieben hat
  rueckbezug: string;      // "Jetzt weißt du: ..."
  kernaussagen: string[];
  xp: number;
  score: number;
  totalQuestions: number;
  onNext: () => void;
}

export function StepSummary({
  title,
  reflexionText,
  rueckbezug,
  kernaussagen,
  xp,
  score,
  totalQuestions,
  onNext,
}: StepSummaryProps) {
  const percentage =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 100;

  return (
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="text-5xl mb-3">
          {percentage >= 80 ? "🎉" : percentage >= 60 ? "👏" : "💪"}
        </div>
        <h2 className="text-2xl font-bold text-[#1d1d1f]">
          {title}
        </h2>
      </motion.div>

      {/* Rückbezug auf Reflexion */}
      {reflexionText && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-[#AF52DE]/5 border border-[#AF52DE]/15 p-5 space-y-3"
        >
          <div>
            <p className="text-xs font-medium text-[#AF52DE] mb-1">
              Am Anfang hast du geschrieben:
            </p>
            <p className="text-sm text-[#1d1d1f]/60 italic">
              &ldquo;{reflexionText}&rdquo;
            </p>
          </div>
          <div className="h-px bg-[#AF52DE]/15" />
          <div>
            <p className="text-xs font-medium text-[#AF52DE] mb-1">
              Jetzt weißt du:
            </p>
            <p className="text-sm text-[#1d1d1f]/80 leading-relaxed">
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
        className="grid grid-cols-3 gap-3"
      >
        <div className="rounded-2xl bg-[#0071e3]/5 p-4 text-center">
          <p className="text-2xl font-bold text-[#0071e3]">{xp}</p>
          <p className="text-xs text-[#6e6e73]">XP</p>
        </div>
        <div className="rounded-2xl bg-[#30D158]/5 p-4 text-center">
          <p className="text-2xl font-bold text-[#30D158]">
            {score}/{totalQuestions}
          </p>
          <p className="text-xs text-[#6e6e73]">Richtig</p>
        </div>
        <div className="rounded-2xl bg-[#AF52DE]/5 p-4 text-center">
          <p className="text-2xl font-bold text-[#AF52DE]">{percentage}%</p>
          <p className="text-xs text-[#6e6e73]">Score</p>
        </div>
      </motion.div>

      {/* Kernaussagen */}
      {kernaussagen.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-2xl bg-[#30D158]/5 border border-[#30D158]/15 p-4"
        >
          <p className="text-sm font-medium text-[#30D158] mb-2">
            Das hast du gelernt:
          </p>
          <ul className="space-y-1.5">
            {kernaussagen.map((k, i) => (
              <li
                key={i}
                className="text-sm text-[#1d1d1f]/70 flex items-start gap-2"
              >
                <span className="text-[#30D158] shrink-0">✓</span>
                {k}
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
        className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
      >
        Weiter
      </motion.button>
    </div>
  );
}
