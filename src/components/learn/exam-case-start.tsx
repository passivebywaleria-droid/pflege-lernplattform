"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, BookOpen, Brain, Target } from "lucide-react";
import type { ExamCase } from "../../../content/_types";
import { PruefungsModus } from "./pruefungs-modus";

interface ExamCaseStartProps {
  examCase: ExamCase;
  leTitle: string;
  onExit: () => void;
}

export function ExamCaseStart({ examCase, leTitle, onExit }: ExamCaseStartProps) {
  const [gestartet, setGestartet] = useState(false);

  // Alle Steps aus allen Phasen flatten
  const alleSteps = examCase.phasen.flatMap((p) => p.steps);

  if (gestartet) {
    return (
      <PruefungsModus
        steps={alleSteps}
        leTitle={`${examCase.titel} — ${examCase.patient.name}`}
        onExit={onExit}
      />
    );
  }

  return (
    <div className="px-4 py-6 space-y-6" style={{ color: "#1d1d1f" }}>
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D4956A]/10 flex items-center justify-center">
          <Target size={28} className="text-[#D4956A]" />
        </div>
        <h2 className="text-xl font-bold text-[var(--lern-text-primary)]">
          Pruefungssimulation
        </h2>
        <p className="text-sm text-[var(--lern-text-secondary)]">
          {examCase.titel}
        </p>
      </div>

      {/* Patient-Steckbrief */}
      <div className="rounded-2xl border border-[var(--lern-border)] bg-[var(--lern-card)] p-4 space-y-2">
        <h3 className="text-sm font-semibold text-[var(--lern-text-primary)]">
          Patientin: {examCase.patient.name} ({examCase.patient.alter} J.)
        </h3>
        <p className="text-sm text-[var(--lern-text-secondary)] leading-relaxed">
          {examCase.patient.steckbrief}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {examCase.patient.diagnosen.map((d) => (
            <span
              key={d}
              className="inline-block rounded-full bg-[var(--lern-bg-secondary)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--lern-text-secondary)]"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      {/* Statistiken */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-[var(--lern-card)] border border-[var(--lern-border)] p-3 text-center">
          <Clock size={16} className="mx-auto mb-1 text-[var(--lern-text-secondary)]" />
          <p className="text-lg font-bold text-[var(--lern-text-primary)]">
            {examCase.zeitLimitMinuten ?? 60}
          </p>
          <p className="text-[10px] text-[var(--lern-text-secondary)]">Minuten</p>
        </div>
        <div className="rounded-2xl bg-[var(--lern-card)] border border-[var(--lern-border)] p-3 text-center">
          <BookOpen size={16} className="mx-auto mb-1 text-[var(--lern-text-secondary)]" />
          <p className="text-lg font-bold text-[var(--lern-text-primary)]">
            {examCase.phasen.length}
          </p>
          <p className="text-[10px] text-[var(--lern-text-secondary)]">Phasen</p>
        </div>
        <div className="rounded-2xl bg-[var(--lern-card)] border border-[var(--lern-border)] p-3 text-center">
          <Brain size={16} className="mx-auto mb-1 text-[var(--lern-text-secondary)]" />
          <p className="text-lg font-bold text-[var(--lern-text-primary)]">
            {alleSteps.length}
          </p>
          <p className="text-[10px] text-[var(--lern-text-secondary)]">Fragen</p>
        </div>
      </div>

      {/* Phasen-Uebersicht */}
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-[var(--lern-text-primary)]">
          Pruefungsablauf
        </h3>
        {examCase.phasen.map((phase, idx) => (
          <div
            key={phase.phaseId}
            className="flex items-start gap-3 rounded-xl bg-[var(--lern-card)] border border-[var(--lern-border)] p-3"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4956A]/10 text-xs font-bold text-[#D4956A]">
              {idx + 1}
            </span>
            <div>
              <p className="text-sm font-medium text-[var(--lern-text-primary)]">
                {phase.zeitpunkt}
              </p>
              <p className="text-xs text-[var(--lern-text-secondary)] mt-0.5">
                {phase.steps.length} Aufgaben
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Hinweis */}
      <div className="rounded-xl bg-[#D4956A]/5 border border-[#D4956A]/20 p-3">
        <p className="text-xs text-[var(--lern-text-secondary)]">
          Im Pruefungsmodus gibt es keine Erklaerungen, kein Glossar und keinen KI-Chat.
          Antworten Sie aus dem Gedaechtnis — wie in der echten Pruefung.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onExit}
          className="flex-1 rounded-2xl bg-[var(--lern-bg-secondary)] px-5 py-3.5 text-sm font-semibold text-[var(--lern-text-primary)] transition-all active:scale-[0.98]"
        >
          Zurueck
        </button>
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setGestartet(true)}
          className="flex-1 rounded-2xl bg-[#D4956A] px-5 py-3.5 text-sm font-semibold text-white transition-all"
        >
          Pruefung starten
        </motion.button>
      </div>
    </div>
  );
}
