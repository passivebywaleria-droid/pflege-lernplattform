"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface TagesplanTask {
  text: string;
  geschafft: boolean;
  link?: string;
  dauer?: string;
}

interface TagesplanKarteProps {
  tagesplan: TagesplanTask[];
}

export function TagesplanKarte({ tagesplan }: TagesplanKarteProps) {
  if (tagesplan.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
    >
      <h2 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-3">
        Dein Plan f{"\u00FC"}r heute
      </h2>
      <div className="space-y-2">
        {tagesplan.filter((t) => !t.geschafft).map((task, i) => (
          <div key={`todo-${i}`} className="flex items-start gap-3">
            <span className="text-sm mt-0.5 shrink-0">{"\u2610"}</span>
            <div className="flex-1 min-w-0">
              {task.link ? (
                <Link href={task.link} className="text-sm text-[var(--lern-text-primary)] hover:text-[var(--lern-accent)] transition-colors">
                  {task.text}
                </Link>
              ) : (
                <span className="text-sm text-[var(--lern-text-primary)]">{task.text}</span>
              )}
              {task.dauer && (
                <span className="text-xs text-[var(--lern-text-tertiary)] ml-2">({task.dauer})</span>
              )}
            </div>
          </div>
        ))}
        {tagesplan.some((t) => t.geschafft) && (
          <>
            <div className="border-t border-[var(--lern-border)]/50 my-2 pt-2">
              <p className="text-xs text-[var(--lern-text-tertiary)] mb-2">Geschafft!</p>
            </div>
            {tagesplan.filter((t) => t.geschafft).map((task, i) => (
              <div key={`done-${i}`} className="flex items-start gap-3 opacity-60">
                <span className="text-sm mt-0.5 shrink-0">{"\u2611"}</span>
                <span className="text-sm text-[var(--lern-text-primary)] line-through">
                  {task.text}
                </span>
              </div>
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
}
