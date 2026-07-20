"use client";

import { motion } from "framer-motion";
import type { Lernsituation } from "../../../content/_types";

interface WiedereinstiegScreenProps {
  situation: Lernsituation;
  /** 1-basierte Schrittnummer, an der zuletzt gespielt wurde. */
  schrittNummer: number;
  gesamtSteps: number;
  sprachLevel: "c1" | "b1";
  onWeiter: () => void;
  onNeuBeginnen: () => void;
}

/**
 * Wiedereinstieg (Waleria 2026-07-20): Kommt der Schüler mitten in eine
 * Situation zurück, entscheidet ER, ob er weitermacht oder neu beginnt —
 * statt still an der alten Stelle zu landen. Ruhig, ein Screen, zwei Wege.
 */
export function WiedereinstiegScreen({
  situation,
  schrittNummer,
  gesamtSteps,
  sprachLevel,
  onWeiter,
  onNeuBeginnen,
}: WiedereinstiegScreenProps) {
  const b1 = sprachLevel === "b1";
  const patient = situation.patient;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center px-6 py-10 text-center"
      style={{ color: "var(--lern-text-primary)" }}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-[var(--lern-text-tertiary)]">
        {b1 ? "Willkommen zurück" : "Schön, dass du weitermachst"}
      </p>

      <h2 className="mt-2 text-base font-bold">
        {situation.titel}
      </h2>
      {patient?.name && (
        <p className="mt-1 text-sm text-[var(--lern-text-secondary)]">
          {patient.name}
          {patient.alter ? ` · ${patient.alter}` : ""}
        </p>
      )}

      <div className="mt-6 w-full max-w-sm rounded-2xl bg-[var(--lern-card-bg)] border-[1.5px] border-[var(--lern-border)] p-4">
        <p className="text-sm text-[var(--lern-text-secondary)] leading-relaxed">
          {b1
            ? `Du warst bei Schritt ${schrittNummer} von ${gesamtSteps}.`
            : `Du warst zuletzt bei Schritt ${schrittNummer} von ${gesamtSteps}.`}
        </p>
      </div>

      <div className="mt-6 flex w-full max-w-sm flex-col gap-3">
        <button
          onClick={onWeiter}
          className="w-full rounded-xl bg-[var(--lern-accent)] py-3 text-sm font-semibold text-white hover:bg-[#B07A72] transition-colors"
        >
          {b1
            ? `Weiter bei Schritt ${schrittNummer}`
            : `Weitermachen bei Schritt ${schrittNummer}`}
        </button>
        <button
          onClick={onNeuBeginnen}
          className="w-full rounded-xl border-[1.5px] border-[var(--lern-border)] bg-transparent py-3 text-sm font-medium text-[var(--lern-text-secondary)] hover:bg-[var(--lern-card-bg)] transition-colors"
        >
          {b1 ? "Von vorne beginnen" : "Von vorne anfangen"}
        </button>
      </div>
    </motion.div>
  );
}
