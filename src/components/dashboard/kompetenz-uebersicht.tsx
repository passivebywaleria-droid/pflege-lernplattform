"use client";

import { motion } from "framer-motion";
import type { KompetenzStufe } from "@/lib/adaptive/kompetenz-register";

interface KompetenzRegisterStats {
  counts: Record<KompetenzStufe, number>;
  gesamt: number;
  gemeistertProzent: number;
}

interface KompetenzUebersichtProps {
  kompetenzRegisterStats: KompetenzRegisterStats;
}

export function KompetenzUebersicht({ kompetenzRegisterStats }: KompetenzUebersichtProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.22 }}
      className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
    >
      <h2 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-3">
        Deine Kompetenzen
      </h2>
      <div className="flex items-center gap-4 mb-3">
        <div className="text-center">
          <p className="text-2xl font-bold text-[#6B8F71]">
            {kompetenzRegisterStats.counts.gemeistert}
          </p>
          <p className="text-[10px] text-[var(--lern-text-secondary)]">gemeistert</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[var(--lern-accent)]">
            {kompetenzRegisterStats.counts.sicher}
          </p>
          <p className="text-[10px] text-[var(--lern-text-secondary)]">sicher</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#D4956A]">
            {kompetenzRegisterStats.counts.vertraut}
          </p>
          <p className="text-[10px] text-[var(--lern-text-secondary)]">vertraut</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#C96B5C]">
            {kompetenzRegisterStats.counts.versucht}
          </p>
          <p className="text-[10px] text-[var(--lern-text-secondary)]">unsicher</p>
        </div>
      </div>
      <div className="h-2 rounded-full bg-[var(--lern-bg)] flex overflow-hidden">
        {kompetenzRegisterStats.counts.gemeistert > 0 && (
          <div
            className="h-full bg-[#6B8F71]"
            style={{ width: `${(kompetenzRegisterStats.counts.gemeistert / kompetenzRegisterStats.gesamt) * 100}%` }}
          />
        )}
        {kompetenzRegisterStats.counts.sicher > 0 && (
          <div
            className="h-full bg-[var(--lern-accent)]"
            style={{ width: `${(kompetenzRegisterStats.counts.sicher / kompetenzRegisterStats.gesamt) * 100}%` }}
          />
        )}
        {kompetenzRegisterStats.counts.vertraut > 0 && (
          <div
            className="h-full bg-[#D4956A]"
            style={{ width: `${(kompetenzRegisterStats.counts.vertraut / kompetenzRegisterStats.gesamt) * 100}%` }}
          />
        )}
        {kompetenzRegisterStats.counts.versucht > 0 && (
          <div
            className="h-full bg-[#C96B5C]"
            style={{ width: `${(kompetenzRegisterStats.counts.versucht / kompetenzRegisterStats.gesamt) * 100}%` }}
          />
        )}
      </div>
      <p className="text-xs text-[var(--lern-text-tertiary)] mt-2">
        {kompetenzRegisterStats.gesamt} Lernziele erfasst &middot; {kompetenzRegisterStats.gemeistertProzent}% gemeistert
      </p>
    </motion.div>
  );
}
