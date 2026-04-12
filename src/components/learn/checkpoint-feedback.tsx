"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CheckpointScore } from "@/lib/adaptive/sequencer";
import { useTranslations } from "next-intl";

interface CheckpointFeedbackProps {
  score: CheckpointScore | null;
  skippedCount: number;
  onDone: () => void;
}

const SCORE_CONFIG: Record<CheckpointScore, {
  icon: string;
  gradient: string;
  confettiCount: number;
}> = {
  A: {
    icon: "🌟",
    gradient: "from-emerald-500/20 to-cyan-500/20",
    confettiCount: 12,
  },
  B: {
    icon: "👍",
    gradient: "from-blue-500/20 to-indigo-500/20",
    confettiCount: 0,
  },
  C: {
    icon: "💪",
    gradient: "from-amber-500/20 to-orange-500/20",
    confettiCount: 0,
  },
};

export function CheckpointFeedback({ score, skippedCount, onDone }: CheckpointFeedbackProps) {
  const [visible, setVisible] = useState(false);
  const t = useTranslations("checkpoint");

  useEffect(() => {
    if (score) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onDone, 300);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [score, onDone]);

  if (!score) return null;

  const config = SCORE_CONFIG[score];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed inset-x-4 bottom-24 z-50 mx-auto max-w-md"
        >
          <div
            className={`rounded-2xl bg-gradient-to-br ${config.gradient} backdrop-blur-xl p-5 shadow-lg border`}
            style={{
              borderColor: "var(--lern-border)",
              backgroundColor: "var(--lern-overlay-bg)",
            }}
          >
            {/* Mini confetti for Score A */}
            {config.confettiCount > 0 && (
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                {Array.from({ length: config.confettiCount }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: ["#6B8F71", "#C4877F", "#D4956A", "#9B7EA6", "#C96B5C"][i % 5],
                      left: `${10 + (i * 7) % 80}%`,
                      top: "50%",
                    }}
                    initial={{ y: 0, opacity: 1 }}
                    animate={{
                      y: [0, -60 - Math.random() * 40],
                      x: [0, (Math.random() - 0.5) * 40],
                      opacity: [1, 0],
                      scale: [1, 0.5],
                    }}
                    transition={{ duration: 1.5, delay: i * 0.05 }}
                  />
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 relative z-10">
              <motion.span
                className="text-4xl"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
              >
                {config.icon}
              </motion.span>
              <div className="flex-1">
                <p
                  className="text-base font-semibold"
                  style={{ color: "var(--lern-text-primary)" }}
                >
                  {t(`score_${score}_title`)}
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--lern-text-secondary)" }}
                >
                  {score === "A" && skippedCount > 0
                    ? t("score_A_skip", { count: skippedCount })
                    : t(`score_${score}_body`)}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
