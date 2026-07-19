"use client";

// Auftakt-Screen der Situation (specs/ENTWURF-AUFTAKT-SCREEN.md, Waleria
// 2026-07-19): Advance Organizer gegen den kalten Einstieg (Audit-Lücke 1).
// Patient-Karte → Szene (der bislang ungenutzte Phase-1-kontext, wortgleich) →
// Lernziele (schülersprachliche 1:1-Übersetzungen der Rahmenlehrplan-
// Lernergebnisse, pro Situation aufgeteilt) → Schrittzahl → EINE Aktion.
// Ehrlichkeits-Regel: ohne lernzieleSchueler entfällt der Block ersatzlos.

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { Lernsituation } from "../../../content/_types";

interface AuftaktScreenProps {
  situation: Lernsituation;
  sprachLevel: "c1" | "b1";
  gesamtSteps: number;
  onStart: () => void;
  onPatientTap?: () => void;
}

function initialen(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((teil) => teil[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function AuftaktScreen({
  situation,
  sprachLevel,
  gesamtSteps,
  onStart,
  onPatientTap,
}: AuftaktScreenProps) {
  const t = useTranslations("situation.auftakt");
  const b1 = sprachLevel === "b1";

  const patient = situation.patient;
  const erstePhase = situation.phasen[0];
  const szene = erstePhase
    ? (b1 && erstePhase.kontextB1) || erstePhase.kontext
    : null;
  const lernziele = situation.lernzieleSchueler ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-6"
    >
      {/* Patient-Karte — Tap öffnet das bestehende Patient-Modal */}
      {patient && (
        <button
          type="button"
          onClick={onPatientTap}
          className="flex w-full items-center gap-3 rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-3 text-start"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[var(--lern-accent)]/40 bg-[var(--lern-accent-bg)] text-sm font-bold text-[var(--lern-accent)]">
            {initialen(patient.name)}
          </span>
          <span className="min-w-0">
            <span className="block text-[15px] font-bold text-[var(--lern-text-primary)]">
              {patient.name} · {patient.alter}
            </span>
            <span className="mt-0.5 block text-xs leading-relaxed text-[var(--lern-text-secondary)]">
              {patient.setting}
            </span>
          </span>
        </button>
      )}

      {/* Szene: Phase-1-kontext wortgleich (bislang toter Content) */}
      {szene && (
        <p className="mt-4 text-sm italic leading-relaxed text-[var(--lern-text-secondary)]">
          {szene}
        </p>
      )}

      {/* Lernziele aus dem Rahmenlehrplan, schülersprachlich */}
      {lernziele.length > 0 && (
        <>
          <p className="mb-2 mt-5 text-[11px] font-bold uppercase tracking-widest text-[var(--lern-text-secondary)]">
            {t("lernenHier")}
          </p>
          <ul className="space-y-2">
            {lernziele.map((ziel, i) => (
              <li key={`${ziel.lernergebnisId}-${i}`} className="flex gap-2.5">
                <span
                  aria-hidden="true"
                  className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lern-accent)]"
                />
                <span className="text-sm leading-relaxed text-[var(--lern-text-primary)]">
                  {(b1 && ziel.textB1) || ziel.text}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[11px] text-[var(--lern-text-tertiary)]">
            {t("rahmenlehrplan")}
          </p>
        </>
      )}

      <p className="mt-6 text-center text-xs text-[var(--lern-text-secondary)]">
        {t("schritte", { schritte: gesamtSteps })}
      </p>
      <button
        type="button"
        onClick={onStart}
        className="mt-2 block w-full rounded-xl bg-[var(--lern-accent)] px-6 py-3 text-center text-[15px] font-semibold text-white transition-all hover:bg-[#4C6A52]"
      >
        {t("los")}
      </button>
    </motion.div>
  );
}
