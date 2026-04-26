"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type {
  GlossarEntry,
  PflegewagenZone,
  PflegewagenItem,
} from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";
import {
  generiereSandwichFeedback,
  SandwichFeedbackDisplay,
} from "./bloom-feedback";
import { StepActionBar } from "./step-action-bar";

interface StepPflegewagenProps {
  title: string;
  body?: string;
  fragetext: string;
  zonen: PflegewagenZone[];
  items: PflegewagenItem[];
  begruendung: string;
  glossar?: GlossarEntry[];
  sprachLevel: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

const ZONE_VARIANTS: Record<
  NonNullable<PflegewagenZone["variant"]>,
  { border: string; bg: string; text: string; itemBg: string; label: string }
> = {
  primary: {
    border: "border-[#3E5A6A]/40",
    bg: "bg-[#3E5A6A]/8",
    text: "text-[#2F4654]",
    itemBg: "bg-[#3E5A6A]/10",
    label: "Auf den Wagen",
  },
  secondary: {
    border: "border-[#218C71]/40",
    bg: "bg-[#218C71]/8",
    text: "text-[#1A7359]",
    itemBg: "bg-[#218C71]/10",
    label: "Auf den Wagen",
  },
  discard: {
    border: "border-[var(--lern-text-tertiary)]/30",
    bg: "bg-[var(--lern-text-tertiary)]/5",
    text: "text-[var(--lern-text-secondary)]",
    itemBg: "bg-[var(--lern-text-tertiary)]/8",
    label: "Brauche ich nicht",
  },
};

function getIcon(name: string): LucideIcon {
  const iconKey = name as keyof typeof LucideIcons;
  const Icon = (LucideIcons[iconKey] ?? LucideIcons.Package) as LucideIcon;
  return Icon;
}

export function StepPflegewagen({
  title,
  body,
  fragetext,
  zonen,
  items,
  begruendung,
  glossar,
  sprachLevel,
  onNext,
}: StepPflegewagenProps) {
  const initialPool = useRef([...items].sort(() => Math.random() - 0.5));
  const [pool, setPool] = useState<PflegewagenItem[]>(initialPool.current);
  const [placement, setPlacement] = useState<Record<string, string>>({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const isB1 = sprachLevel === "b1";

  // Item in Zone setzen (oder Discard-Zone via id "__discard")
  const handlePlace = (zoneId: string) => {
    if (checked || !selectedItemId) return;
    const item = pool.find((i) => i.id === selectedItemId);
    if (!item) return;
    setPool((p) => p.filter((i) => i.id !== selectedItemId));
    setPlacement((pl) => ({ ...pl, [selectedItemId]: zoneId }));
    setSelectedItemId(null);
  };

  // Item aus Zone zurück in Pool
  const handleUnplace = (itemId: string) => {
    if (checked) return;
    const item = items.find((i) => i.id === itemId);
    if (!item) return;
    setPool((p) => [item, ...p]);
    setPlacement((pl) => {
      const next = { ...pl };
      delete next[itemId];
      return next;
    });
  };

  const allPlaced = pool.length === 0;

  const evaluation = items.map((item) => {
    const placedZoneId = placement[item.id];
    const expected = item.korrekteZoneId ?? "__discard";
    return {
      item,
      placedZoneId,
      expected,
      isCorrect: placedZoneId === expected,
    };
  });

  const correctCount = evaluation.filter((e) => e.isCorrect).length;
  const allCorrect = correctCount === items.length;

  const handleCheck = () => {
    if (!allPlaced) return;
    setChecked(true);
  };

  // Hilfs-Renderer für ein Item-Chip
  const renderItem = (
    item: PflegewagenItem,
    opts: {
      selected?: boolean;
      onClick?: () => void;
      isCorrect?: boolean;
      submitted?: boolean;
      compact?: boolean;
    }
  ) => {
    const Icon = getIcon(item.icon);
    const label = (isB1 && item.labelB1) || item.label;

    const borderColor = opts.submitted
      ? opts.isCorrect
        ? "border-[#3E5A6A]"
        : "border-[#C96B5C]"
      : opts.selected
        ? "border-[#218C71]"
        : "border-[var(--lern-border)]";

    const bgColor = opts.submitted
      ? opts.isCorrect
        ? "bg-[#3E5A6A]/10"
        : "bg-[#C96B5C]/10"
      : opts.selected
        ? "bg-[#218C71]/10"
        : "bg-[var(--lern-bg-primary)]";

    const iconColor = opts.submitted
      ? opts.isCorrect
        ? "text-[#2F4654]"
        : "text-[#3E5A6A]"
      : "text-[var(--lern-text-primary)]";

    return (
      <motion.button
        key={item.id}
        whileTap={!opts.submitted ? { scale: 0.95 } : undefined}
        onClick={opts.onClick}
        disabled={opts.submitted}
        className={`flex ${opts.compact ? "flex-row items-center gap-2 px-3 py-2" : "flex-col items-center gap-1.5 px-3 py-3"} rounded-xl border-[1.5px] ${borderColor} ${bgColor} transition-all ${
          !opts.submitted ? "hover:shadow-sm cursor-pointer" : "cursor-default"
        } focus:outline-2 focus:outline-[var(--lern-accent)] focus:outline-offset-2 min-w-[80px]`}
        aria-label={label}
      >
        <Icon
          className={`${opts.compact ? "h-5 w-5" : "h-6 w-6"} ${iconColor} shrink-0`}
          aria-hidden="true"
        />
        <span
          className={`text-xs font-medium ${opts.compact ? "" : "text-center"} ${iconColor}`}
        >
          {label}
        </span>
      </motion.button>
    );
  };

  return (
    <div
      className="space-y-5 pb-20"
      style={{ color: "var(--lern-text-primary)" }}
    >
      {/* Titel */}
      <h2 className="text-base font-bold text-[var(--lern-text-primary)]">
        {title}
      </h2>

      {/* Body */}
      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line text-sm">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      {/* Frage */}
      <div className="rounded-2xl border-[1.5px] border-[var(--lern-accent)]/40 bg-[var(--lern-accent-bg)] px-4 py-3">
        <p className="text-sm font-semibold text-[var(--lern-text-primary)]">
          {renderBold(fragetext)}
        </p>
      </div>

      {/* Hinweis */}
      {!checked && (
        <p className="text-xs text-[var(--lern-text-tertiary)]">
          Tippe ein Material an, dann auf den passenden Bereich.
        </p>
      )}

      {/* Zonen (Pflegewagen-Bereiche) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {zonen.map((zone) => {
          const variant = zone.variant ?? "primary";
          const colors = ZONE_VARIANTS[variant];
          const zoneItems = items.filter(
            (item) => placement[item.id] === zone.id
          );
          const zoneLabel = (isB1 && zone.labelB1) || zone.label;
          const zoneDescription =
            (isB1 && zone.beschreibungB1) || zone.beschreibung;

          return (
            <button
              key={zone.id}
              type="button"
              onClick={() => selectedItemId && handlePlace(zone.id)}
              disabled={checked || !selectedItemId}
              className={`text-left rounded-2xl border-[1.5px] ${colors.border} ${colors.bg} p-4 min-h-[140px] flex flex-col gap-2 transition-all ${
                selectedItemId && !checked
                  ? "ring-2 ring-[var(--lern-accent)] ring-offset-2 cursor-pointer"
                  : "cursor-default"
              }`}
              aria-label={`Bereich ${zoneLabel} — ${zoneItems.length} Materialien`}
            >
              <div className="flex items-baseline justify-between">
                <span className={`text-sm font-bold ${colors.text}`}>
                  {zoneLabel}
                </span>
                <span className="text-xs text-[var(--lern-text-tertiary)]">
                  {zoneItems.length}
                </span>
              </div>
              {zoneDescription && (
                <span className="text-xs text-[var(--lern-text-tertiary)]">
                  {zoneDescription}
                </span>
              )}

              {/* Items in dieser Zone */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                <AnimatePresence>
                  {zoneItems.length === 0 && !selectedItemId && !checked && (
                    <span className="text-xs text-[var(--lern-text-tertiary)]/70 italic">
                      noch leer
                    </span>
                  )}
                  {zoneItems.map((item) => {
                    const evalEntry = evaluation.find(
                      (e) => e.item.id === item.id
                    );
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!checked) handleUnplace(item.id);
                        }}
                        role={!checked ? "button" : undefined}
                        tabIndex={!checked ? 0 : undefined}
                      >
                        {renderItem(item, {
                          submitted: checked,
                          isCorrect: evalEntry?.isCorrect,
                          compact: true,
                        })}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </button>
          );
        })}
      </div>

      {/* Pool — verfügbare Materialien */}
      {!checked && pool.length > 0 && (
        <div className="rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-card-bg,#fafafa)] p-3">
          <span className="text-xs font-bold text-[var(--lern-text-secondary)] block mb-2">
            Material-Pool ({pool.length})
          </span>
          <div className="flex flex-wrap gap-2">
            {pool.map((item) =>
              renderItem(item, {
                selected: selectedItemId === item.id,
                onClick: () =>
                  setSelectedItemId(
                    selectedItemId === item.id ? null : item.id
                  ),
              })
            )}
          </div>
        </div>
      )}

      {/* Feedback nach Check (im Content) */}
      {checked && (
        <div className="space-y-3">
          <SandwichFeedbackDisplay
            correct={allCorrect}
            feedback={generiereSandwichFeedback(
              allCorrect,
              `${correctCount} von ${items.length} richtig zugeordnet`,
              begruendung
            )}
          />

          <details className="rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-card-bg,#fafafa)] p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--lern-text-secondary)]">
              Warum welches Material?
            </summary>
            <ul className="mt-3 space-y-2 text-sm">
              {evaluation.map(({ item, isCorrect }) => {
                const Icon = getIcon(item.icon);
                const erklaerung =
                  (isB1 && item.erklaerungB1) || item.erklaerung;
                const label = (isB1 && item.labelB1) || item.label;
                return (
                  <li
                    key={item.id}
                    className="flex gap-3 items-start pb-2 border-b border-[var(--lern-border)]/40 last:border-b-0 last:pb-0"
                  >
                    <Icon
                      className={`h-5 w-5 mt-0.5 shrink-0 ${
                        isCorrect ? "text-[#2F4654]" : "text-[#3E5A6A]"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="flex-1">
                      <span className="font-semibold text-[var(--lern-text-primary)]">
                        {label}
                      </span>
                      <p className="text-xs text-[var(--lern-text-secondary)] leading-relaxed mt-0.5">
                        {erklaerung}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
      )}

      {/* Action-Bar fix unten (Bundle-Stil) */}
      {!checked && allPlaced && (
        <StepActionBar>
          <button
            onClick={handleCheck}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] text-white font-semibold py-3.5 hover:bg-[#1A7359] transition-colors"
          >
            Prüfen
          </button>
        </StepActionBar>
      )}
      {checked && (
        <StepActionBar>
          <button
            onClick={() => onNext(allCorrect)}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] text-white font-semibold py-3.5 hover:bg-[#1A7359] transition-colors"
          >
            Weiter
          </button>
        </StepActionBar>
      )}
    </div>
  );
}
