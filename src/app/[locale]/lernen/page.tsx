"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getAllLektionen, BLOCK_LABELS } from "@/lib/content-loader";
import type { LektionManifest } from "../../../../content/ce-05/_manifest";

// Re-export BLOCK_LABELS brauchen wir auch im content-loader
// Farben pro Block
const BLOCK_COLORS: Record<string, string> = {
  A: "#0071e3",
  B: "#FF9500",
  C: "#30D158",
  D: "#AF52DE",
  E: "#FF3B30",
  F: "#5AC8FA",
  G: "#FF2D55",
};

const STATUS_CONFIG: Record<string, { label: string; opacity: string; badge: string }> = {
  fertig: { label: "Verfuegbar", opacity: "opacity-100", badge: "bg-[#30D158] text-white" },
  entwurf: { label: "Entwurf", opacity: "opacity-70", badge: "bg-[#FF9500] text-white" },
  geplant: { label: "In Planung", opacity: "opacity-50", badge: "bg-[#86868b] text-white" },
};

function LektionCard({ lektion, locale }: { lektion: LektionManifest; locale: string }) {
  const status = STATUS_CONFIG[lektion.status];
  const isClickable = lektion.status === "fertig";
  const blockColor = BLOCK_COLORS[lektion.block];

  const card = (
    <motion.div
      whileHover={isClickable ? { scale: 1.02 } : undefined}
      whileTap={isClickable ? { scale: 0.98 } : undefined}
      className={`rounded-2xl bg-white dark:bg-white/5 border border-[#d2d2d7] dark:border-white/10 p-4 transition-shadow ${
        isClickable ? "cursor-pointer hover:shadow-lg" : "cursor-default"
      } ${status.opacity}`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white"
            style={{ backgroundColor: blockColor }}
          >
            {lektion.order}
          </span>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${status.badge}`}>
            {status.label}
          </span>
        </div>
        <span className="text-xs text-[#86868b]">{lektion.ueCount} UE</span>
      </div>

      <h3 className="text-sm font-semibold text-[#1d1d1f] dark:text-white mb-1 line-clamp-2">
        {lektion.title}
      </h3>

      <div className="flex items-center gap-2 text-[10px] text-[#86868b]">
        <span>~{lektion.estimatedSteps} Steps</span>
        <span>·</span>
        <span>{lektion.estimatedMinC1} Min</span>
        <span>·</span>
        <span>Bloom {lektion.bloomRange[0]}-{lektion.bloomRange[1]}</span>
      </div>

      {lektion.kompetenzbereiche.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {lektion.kompetenzbereiche.slice(0, 3).map((kb) => (
            <span
              key={kb}
              className="rounded-md bg-[#f5f5f7] dark:bg-white/10 px-1.5 py-0.5 text-[9px] text-[#6e6e73]"
            >
              {kb}
            </span>
          ))}
          {lektion.kompetenzbereiche.length > 3 && (
            <span className="text-[9px] text-[#86868b]">
              +{lektion.kompetenzbereiche.length - 3}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );

  if (isClickable) {
    return <Link href={`/${locale}/lernen/${lektion.leId}`}>{card}</Link>;
  }
  return card;
}

export default function LernenUebersichtPage() {
  const lektionen = getAllLektionen();

  // Gruppiere nach Block
  const blocks = lektionen.reduce<Record<string, LektionManifest[]>>((acc, l) => {
    if (!acc[l.block]) acc[l.block] = [];
    acc[l.block].push(l);
    return acc;
  }, {});

  const totalUE = lektionen.reduce((sum, l) => sum + l.ueCount, 0);
  const fertigCount = lektionen.filter((l) => l.status === "fertig").length;
  const fertigUE = lektionen.filter((l) => l.status === "fertig").reduce((sum, l) => sum + l.ueCount, 0);

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#1d1d1f]">
      {/* Header */}
      <div className="bg-white dark:bg-[#1d1d1f] border-b border-[#d2d2d7]/50 dark:border-white/10">
        <div className="mx-auto max-w-3xl px-4 py-8">
          <p className="text-xs font-semibold text-[#0071e3] uppercase tracking-wider mb-1">
            CE 05 — Kurative Prozesse
          </p>
          <h1 className="text-2xl font-bold text-[#1d1d1f] dark:text-white mb-2">
            Rheumatische Erkrankungen
          </h1>
          <p className="text-sm text-[#6e6e73] mb-4">
            {totalUE} UE — {lektionen.length} Lektionen — Komplettes Curriculum
          </p>

          {/* Progress Overview */}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-2 rounded-full bg-[#f5f5f7] dark:bg-white/10">
                <div
                  className="h-full rounded-full bg-[#30D158] transition-all"
                  style={{ width: `${(fertigUE / totalUE) * 100}%` }}
                />
              </div>
            </div>
            <span className="text-xs font-semibold text-[#6e6e73]">
              {fertigCount}/{lektionen.length} Lektionen · {fertigUE}/{totalUE} UE
            </span>
          </div>
        </div>
      </div>

      {/* Blocks */}
      <div className="mx-auto max-w-3xl px-4 py-6 space-y-8">
        {Object.entries(blocks).map(([block, items]) => (
          <section key={block}>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold text-white"
                style={{ backgroundColor: BLOCK_COLORS[block] }}
              >
                {block}
              </span>
              <h2 className="text-sm font-semibold text-[#1d1d1f] dark:text-white">
                {BLOCK_LABELS[block]}
              </h2>
              <span className="text-xs text-[#86868b]">
                {items.reduce((s, l) => s + l.ueCount, 0)} UE
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((lektion) => (
                <LektionCard key={lektion.leId} lektion={lektion} locale="de" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
