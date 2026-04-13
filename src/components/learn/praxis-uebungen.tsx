"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, FileText, Users, Mic, ListOrdered, ChevronRight, ChevronLeft, BookOpen } from "lucide-react";
import type { PraxisUebung, PraxisUebungType } from "../../../content/_types";

const TYPE_CONFIG: Record<PraxisUebungType, { icon: typeof MessageSquare; color: string; label: string }> = {
  "dialog-sim": { icon: MessageSquare, color: "#C4877F", label: "Dialog-Simulation" },
  "pflegeplan": { icon: FileText, color: "#6B8F71", label: "Pflegeplanung" },
  "beratung": { icon: Users, color: "#8B7DB6", label: "Beratungsgespräch" },
  "sprechuebung": { icon: Mic, color: "#D4A76A", label: "Sprechübung" },
  "prozedur": { icon: ListOrdered, color: "#5B8FA8", label: "Prozedur" },
};

interface PraxisUebungenProps {
  uebungen: PraxisUebung[];
  sprachLevel: "b1" | "c1";
  onStartUebung?: (uebungId: string) => void;
}

export function PraxisUebungen({ uebungen, sprachLevel, onStartUebung }: PraxisUebungenProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-4 px-4 py-6" style={{ color: "#1d1d1f" }}>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[var(--lern-text-primary)]">
          Praxis-Simulationen
        </h2>
        <p className="mt-1 text-sm text-[var(--lern-text-secondary)]">
          {sprachLevel === "b1"
            ? "Üben Sie Pflege-Situationen. Klicken Sie auf eine Übung."
            : "Trainieren Sie berufstypische Pflegesituationen in realistischen Szenarien."}
        </p>
      </div>

      {uebungen.map((uebung) => {
        const config = TYPE_CONFIG[uebung.typ];
        const Icon = config.icon;
        const isExpanded = expandedId === uebung.uebungId;
        const titel = sprachLevel === "b1" && uebung.titelB1 ? uebung.titelB1 : uebung.titel;
        const beschreibung = sprachLevel === "b1" && uebung.beschreibungB1 ? uebung.beschreibungB1 : uebung.beschreibungC1;

        return (
          <motion.div
            key={uebung.uebungId}
            layout
            className="overflow-hidden rounded-2xl border border-[var(--lern-border)] bg-[var(--lern-card)]"
          >
            {/* Header */}
            <button
              onClick={() => setExpandedId(isExpanded ? null : uebung.uebungId)}
              className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-[var(--lern-bg-secondary)]"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${config.color}18` }}
              >
                <Icon size={20} style={{ color: config.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"
                    style={{ backgroundColor: config.color }}
                  >
                    {config.label}
                  </span>
                  <span className="text-[10px] font-medium text-[var(--lern-text-secondary)]">
                    Bloom {uebung.bloomLevel} · {uebung.steps.length} {uebung.steps.length === 1 ? "Schritt" : "Schritte"}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] leading-snug">
                  {titel}
                </h3>
              </div>
              <ChevronRight
                size={18}
                className={`shrink-0 mt-1 text-[var(--lern-text-secondary)] transition-transform ${isExpanded ? "rotate-90" : ""}`}
              />
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="border-t border-[var(--lern-border)] px-4 pb-4 pt-3">
                    <p className="text-sm text-[var(--lern-text-secondary)] leading-relaxed mb-4">
                      {beschreibung}
                    </p>

                    {/* Step-Übersicht */}
                    <div className="space-y-2 mb-4">
                      {uebung.steps.map((step, idx) => (
                        <div
                          key={step.stepId}
                          className="flex items-center gap-2 text-xs text-[var(--lern-text-secondary)]"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--lern-bg-secondary)] text-[10px] font-bold">
                            {idx + 1}
                          </span>
                          <span className="capitalize font-medium" style={{ color: config.color }}>
                            {step.stepType}
                          </span>
                          <span className="truncate">
                            {sprachLevel === "b1" && step.contentB1?.title ? step.contentB1.title : step.contentC1.title}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Start Button */}
                    {onStartUebung && (
                      <button
                        onClick={() => onStartUebung(uebung.uebungId)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
                        style={{ backgroundColor: config.color }}
                      >
                        <BookOpen size={16} />
                        {sprachLevel === "b1" ? "Übung starten" : "Simulation starten"}
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
