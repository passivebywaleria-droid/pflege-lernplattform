"use client";

/**
 * Dev-Test-Route für den Dialog-Step (step-dialog.tsx).
 *
 * Rendert den info-04-Dialog aus Frau M. direkt — ohne dass man
 * durch alle Steps der Situation klicken muss. Nur zum Debugging
 * während der Bundle-Migration.
 *
 * URL: /de/dev/dialog-test (öffentlich, in middleware publicPaths)
 */

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { StepDialog } from "@/components/learn/step-dialog";
import { CE02_SIT_FRAU_M_NACHT_STURZ_INFORMIEREN } from "../../../../../content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren";
import { CE02_SIT_FRAU_M_NACHT_STURZ_DURCHFUEHREN } from "../../../../../content/ce-02/situationen/frau-m-nacht-sturz/phase-durchfuehren";
import type { ContentStep } from "../../../../../content/_types";

// Alle Dialog-Steps aus Frau M finden
function findDialogSteps() {
  const steps: { id: string; phase: string; step: ContentStep }[] = [];
  for (const step of CE02_SIT_FRAU_M_NACHT_STURZ_INFORMIEREN.kernSteps) {
    if (step.stepType === "dialog") {
      steps.push({ id: step.stepId, phase: "informieren", step });
    }
  }
  for (const step of CE02_SIT_FRAU_M_NACHT_STURZ_DURCHFUEHREN.kernSteps) {
    if (step.stepType === "dialog") {
      steps.push({ id: step.stepId, phase: "durchfuehren", step });
    }
  }
  return steps;
}

export default function DialogTestPage() {
  const locale = useLocale();
  const dialogSteps = findDialogSteps();
  const [activeIdx, setActiveIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const active = dialogSteps[activeIdx];
  if (!active) return <div>Keine Dialog-Steps gefunden</div>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const q = active.step.question as any;
  const phases = q?.dialogPhases ?? [];

  return (
    <div className="h-dvh bg-[var(--lern-bg)] flex flex-col overflow-hidden">
      {/* Dev-Header */}
      <header className="shrink-0 bg-[var(--lern-accent-bg)] border-b border-[var(--lern-accent)]/40">
        <div className="mx-auto max-w-3xl px-4 py-2.5 flex items-center justify-between gap-3">
          <Link
            href={`/${locale}/lernen`}
            aria-label="Zurück"
            className="text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)]"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex-1 min-w-0 text-center">
            <p className="text-[10px] uppercase tracking-wider text-[var(--lern-accent)] font-bold">
              Dev · Dialog-Test
            </p>
            <p className="text-[11px] text-[var(--lern-text-secondary)] truncate">
              {active.id} · {phases.length} Phasen
            </p>
          </div>
          <button
            onClick={() => setResetKey((k) => k + 1)}
            aria-label="Dialog neu starten"
            className="text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)]"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>

        {/* Step-Switcher */}
        <div className="mx-auto max-w-3xl px-4 pb-2 flex flex-wrap gap-1.5">
          {dialogSteps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveIdx(i);
                setResetKey((k) => k + 1);
              }}
              className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition-colors ${
                activeIdx === i
                  ? "bg-[var(--lern-accent)] text-white"
                  : "bg-[var(--lern-bg-primary)] text-[var(--lern-text-secondary)] border border-[var(--lern-border)]"
              }`}
            >
              {s.id.replace("ce02-frau-m-", "")}
            </button>
          ))}
        </div>
      </header>

      {/* Dialog-Renderer */}
      <main className="flex-1 min-h-0 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-4">
          <StepDialog
            key={`${active.id}-${resetKey}`}
            title={active.step.contentC1.title ?? ""}
            body={active.step.contentC1.body}
            patientName={q?.patientName ?? "Patient"}
            phases={phases}
            sprachLevel="c1"
            onNext={(correct) => {
              alert(`Dialog abgeschlossen — correct: ${correct}`);
              setResetKey((k) => k + 1);
            }}
          />
        </div>
      </main>
    </div>
  );
}
