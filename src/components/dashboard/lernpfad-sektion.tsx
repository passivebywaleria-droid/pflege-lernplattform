"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface LernpfadEintrag {
  leId: string;
  titleShort: string;
  title: string;
  status: "locked" | "available" | "in_progress" | "done";
  prozent: number;
  xp: number;
}

interface LernpfadSektionProps {
  lernpfad: LernpfadEintrag[];
  locale: string;
}

export function LernpfadSektion({ lernpfad, locale }: LernpfadSektionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
    >
      <h2 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-4">
        Lernpfad
      </h2>
      <div className="space-y-2">
        {lernpfad.map((le) => {
          const statusIcon =
            le.status === "done"
              ? "\u2705"
              : le.status === "in_progress"
                ? "\u25B6\uFE0F"
                : le.status === "available"
                  ? "\u26AA"
                  : "\uD83D\uDD12";

          return (
            <div key={le.leId}>
              {le.status === "available" || le.status === "in_progress" || le.status === "done" ? (
                <Link href={`/${locale}/lernen/${le.leId}`}>
                  <div className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--lern-bg)] active:scale-[0.99]">
                    <span className="text-lg shrink-0">{statusIcon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[var(--lern-text-primary)] truncate">
                        {le.titleShort}
                      </p>
                      {le.prozent > 0 && (
                        <div className="mt-1 h-1 rounded-full bg-[var(--lern-bg)]">
                          <div
                            className="h-full rounded-full bg-[#6B8F71]"
                            style={{ width: `${le.prozent}%` }}
                          />
                        </div>
                      )}
                    </div>
                    {le.xp > 0 && (
                      <span className="text-xs font-semibold text-[var(--lern-accent)]">
                        {le.xp} XP
                      </span>
                    )}
                  </div>
                </Link>
              ) : (
                <div className="flex items-center gap-3 rounded-xl p-3 opacity-50">
                  <span className="text-lg shrink-0">{statusIcon}</span>
                  <p className="text-sm font-medium text-[var(--lern-text-primary)] truncate">
                    {le.titleShort}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
