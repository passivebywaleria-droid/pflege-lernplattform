"use client";

/**
 * StepComparison — Vergleichstabelle (Mobile-First)
 *
 * Design-Standards:
 * - Mobile: Karten-Layout — jedes Kriterium wird zur eigenen Karte
 *   mit Spalten-Werten als farbcodierte Zeilen darunter
 * - Weiter-Button ist IMMER sichtbar (Info-Step, kein Quiz)
 * - Inline-style `color: #1d1d1f` auf Container (shadcn-glass-ui Fix)
 * - pb-20 am Ende damit Chat-FAB die letzte Zeile nicht verdeckt
 * - Zeilen sind antippbar zum Aufklappen
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";
import { ContentIcon } from "@/components/ui/hand-drawn-icon";

function ComparisonIcon({ icon }: { icon?: string }) {
  return <ContentIcon icon={icon} size={16} color="white" />;
}

function ComparisonIconColored({ icon, color }: { icon?: string; color: string }) {
  return <ContentIcon icon={icon} size={14} color={color} />;
}

interface ComparisonColumn {
  label: string;
  icon?: string;
}

interface ComparisonRow {
  criterion: string;
  values: string[];
  valuesB1?: string[];
  highlight?: number;
}

interface StepComparisonProps {
  title: string;
  body?: string;
  instruction: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

// Farben für Spalten (unterscheidbar, passt zum Apple-Design)
const COLUMN_COLORS = [
  { bg: "bg-[var(--lern-accent)]", light: "bg-[var(--lern-accent)]/10", border: "border-[var(--lern-accent)]/20", text: "text-[var(--lern-accent)]", hex: "var(--lern-accent)" },
  { bg: "bg-[#6B8F71]", light: "bg-[#6B8F71]/10", border: "border-[#6B8F71]/20", text: "text-[#147a2a]", hex: "#147a2a" },
  { bg: "bg-[#D4956A]", light: "bg-[#D4956A]/10", border: "border-[#D4956A]/20", text: "text-[#a86200]", hex: "#a86200" },
  { bg: "bg-[#9B7EA6]", light: "bg-[#9B7EA6]/10", border: "border-[#9B7EA6]/20", text: "text-[#7B2FA0]", hex: "#7B2FA0" },
  { bg: "bg-[#C96B5C]", light: "bg-[#C96B5C]/10", border: "border-[#C96B5C]/20", text: "text-[#c4291f]", hex: "#c4291f" },
];

export function StepComparison({
  title,
  body,
  instruction,
  columns,
  rows,
  glossar,
  sprachLevel = "c1",
  onNext,
}: StepComparisonProps) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [viewedRows, setViewedRows] = useState<Set<number>>(new Set());

  const handleRowTap = (idx: number) => {
    setViewedRows((prev) => new Set(prev).add(idx));
    setExpandedRow(expandedRow === idx ? null : idx);
  };

  return (
    <div className="space-y-5 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {body && (
        <p className="leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      <p className="text-lg font-medium" style={{ color: "var(--lern-text-primary)" }}>{instruction}</p>

      {/* Spalten-Legende */}
      <div className="flex flex-wrap gap-2">
        {columns.map((col, i) => {
          const color = COLUMN_COLORS[i % COLUMN_COLORS.length];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`${color.bg} rounded-full px-3 py-1.5 flex items-center gap-1.5`}
            >
              {col.icon && <ComparisonIcon icon={col.icon} />}
              <span className="text-xs font-semibold text-white">{col.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Kriterium-Karten */}
      <div className="space-y-2">
        {rows.map((row, rowIdx) => {
          const isExpanded = expandedRow === rowIdx;
          const isViewed = viewedRows.has(rowIdx);
          const values =
            sprachLevel === "b1" && row.valuesB1
              ? row.valuesB1
              : row.values;

          return (
            <motion.div
              key={rowIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: rowIdx * 0.06 }}
              className={`rounded-2xl border overflow-hidden transition-all ${
                isExpanded
                  ? "border-[var(--lern-accent)]/30 bg-[var(--lern-bg-primary)] shadow-sm"
                  : isViewed
                    ? "border-[var(--lern-divider)] bg-[var(--lern-bg-primary)]"
                    : "border-[var(--lern-divider)] bg-[var(--lern-bg)]"
              }`}
            >
              {/* Kriterium-Header (antippbar) */}
              <button
                onClick={() => handleRowTap(rowIdx)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-sm font-semibold flex-1">{renderBold(row.criterion)}</span>
                <motion.span
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-[var(--lern-text-tertiary)] ml-2"
                >
                  ▼
                </motion.span>
              </button>

              {/* Aufgeklappte Werte */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-2">
                      {values.map((val, colIdx) => {
                        const color = COLUMN_COLORS[colIdx % COLUMN_COLORS.length];
                        return (
                          <div
                            key={colIdx}
                            className={`rounded-xl ${color.light} border ${color.border} p-3`}
                          >
                            <div className="flex items-start gap-2">
                              <span className={`text-xs font-bold ${color.text} whitespace-nowrap`}>
                                <ComparisonIconColored icon={columns[colIdx]?.icon} color={color.hex} /> {columns[colIdx]?.label}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed mt-1.5">{renderBold(val)}</p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Fortschritt */}
      <p className="text-xs text-center" style={{ color: "var(--lern-text-tertiary)" }}>
        {viewedRows.size} von {rows.length} Kriterien angesehen
      </p>

      {/* Weiter — immer sichtbar, Comparison ist Info-Step kein Quiz */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => onNext(true)}
        className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
      >
        Weiter
      </motion.button>
    </div>
  );
}
