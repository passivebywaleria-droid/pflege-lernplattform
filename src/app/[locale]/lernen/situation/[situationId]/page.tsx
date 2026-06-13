"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { loadSituation as staticLoadSituation } from "../../../../../../content/content-loader";
import type {
  Lernsituation,
  AnyPhase,
  ContentStep,
  GlossarEntry,
} from "../../../../../../content/_types";
import { PhasenProgress } from "@/components/learn/phasen-progress";
import { StepRenderer } from "@/components/learn/step-renderer";
import { PatientAvatar } from "@/components/learn/patient-avatar";
import { CE02_THEMA_STURZ_PROPHYLAXE_GLOSSAR } from "../../../../../../content/ce-02/themen/sturz-prophylaxe/glossar";

/**
 * Glossar-Mapping pro Situation — welche Themen-Glossare relevant sind.
 * Pilot 2026-04-28: Frau-M.-Sturz nutzt das Sturz-Prophylaxe-Glossar als Basis.
 * Ausbau geplant: pro Situation alle berührten Themen-Glossare mergen + zentrales
 * Pflege-Glossar als Fallback (siehe specs/PLAN-INLINE-WISSEN-2026-04-26.md).
 */
const SITUATION_GLOSSAR: Record<string, GlossarEntry[]> = {
  "frau-m-nacht-sturz": CE02_THEMA_STURZ_PROPHYLAXE_GLOSSAR,
};

export default function SituationLernenPage() {
  const locale = useLocale();
  const params = useParams();
  const searchParams = useSearchParams();
  const situationId = params.situationId as string;
  const ceId = searchParams.get("ce") ?? "ce-02";
  const t = useTranslations("situation");

  const [situation, setSituation] = useState<Lernsituation | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPhaseId, setCurrentPhaseId] = useState<AnyPhase>("informieren");
  const [completedPhases, setCompletedPhases] = useState<AnyPhase[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  // Micro-Narration: erzählerischer Übergang — wird als Intro-Text
  // OBEN im nächsten Step angezeigt (vom vorherigen Step mitgegeben).
  const [transitionText, setTransitionText] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    staticLoadSituation(ceId, situationId)
      .then((sit) => {
        setSituation(sit);
        // Phasenmodell-agnostisch: auf die ERSTE Phase der Situation setzen
        // (Pflegeprozess startet bei "informieren", Beratung bei "wahrnehmen" …)
        if (sit?.phasen?.length) {
          setCurrentPhaseId(sit.phasen[0].phase);
          setCompletedPhases([]);
          setCurrentStepIndex(0);
        }
      })
      .finally(() => setLoading(false));
  }, [ceId, situationId]);

  // Reihenfolge der Phasen dieser Situation (situationsTyp-abhängig)
  const phaseOrder: AnyPhase[] = situation?.phasen.map((p) => p.phase) ?? [];

  const currentPhase =
    situation?.phasen.find((p) => p.phase === currentPhaseId) ??
    situation?.phasen[0];
  const phaseSteps: ContentStep[] = currentPhase
    ? [...currentPhase.kernSteps, ...currentPhase.optionaleSteps]
    : [];
  const currentStep = phaseSteps[currentStepIndex] ?? null;

  const handlePhaseClick = useCallback(
    (phase: AnyPhase) => {
      if (completedPhases.includes(phase) || phase === currentPhaseId) {
        setCurrentPhaseId(phase);
        setCurrentStepIndex(0);
      }
    },
    [completedPhases, currentPhaseId]
  );

  const advanceStep = useCallback(() => {
    if (currentStepIndex < phaseSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      if (!completedPhases.includes(currentPhaseId)) {
        setCompletedPhases((prev) => [...prev, currentPhaseId]);
      }
      const currentIdx = phaseOrder.indexOf(currentPhaseId);
      if (currentIdx >= 0 && currentIdx < phaseOrder.length - 1) {
        setCurrentPhaseId(phaseOrder[currentIdx + 1]);
        setCurrentStepIndex(0);
      }
    }
  }, [currentStepIndex, phaseSteps.length, completedPhases, currentPhaseId, phaseOrder]);

  const handleNextStep = useCallback(() => {
    // Micro-Narration: wenn Step ein transition-Feld hat, kurzen
    // Erzähl-Übergang zeigen bevor der nächste Step kommt.
    const step = phaseSteps[currentStepIndex];
    const trans = step?.transition;
    if (trans && trans.trim().length > 0) {
      // Zwischenscreen — Lesezeit nach Textlänge: min 4s, B1-Tempo (12 chars/s) + 2.5s Pause
      setTransitionText(trans);
      const readMs = Math.max(3000, Math.round((trans.length / 14) * 1000) + 1500);
      setTimeout(() => {
        setTransitionText(null);
        advanceStep();
      }, readMs);
    } else {
      setTransitionText(null);
      advanceStep();
    }
  }, [currentStepIndex, phaseSteps, advanceStep]);

  if (loading) {
    return (
      <div className="h-dvh bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--lern-text-secondary)]">
          Laden…
        </div>
      </div>
    );
  }

  if (!situation) {
    return (
      <div className="h-dvh bg-[var(--lern-bg)] flex items-center justify-center flex-col gap-4">
        <p className="text-[var(--lern-text-secondary)]">
          Lernsituation nicht gefunden.
        </p>
        <Link
          href={`/${locale}/lernen/ce/${ceId}`}
          className="text-sm text-[var(--lern-accent)] hover:underline"
        >
          {t("zurueckZurUebersicht")}
        </Link>
      </div>
    );
  }

  const allPhasesCompleted =
    phaseOrder.length > 0 && completedPhases.length === phaseOrder.length;
  const phaseLabel = t(`phasen.${currentPhaseId}`);
  const totalSteps = phaseSteps.length;

  return (
    <div className="h-dvh bg-[var(--lern-bg)] flex flex-col overflow-hidden">
      {/* Sticky Header — Bundle-Stil (claude-design-bundle/v1-situation-flow.jsx FlowHeader) */}
      <header className="shrink-0 bg-[var(--lern-bg)] border-b border-[var(--lern-border)]">
        <div className="mx-auto max-w-3xl px-4 pt-3 pb-3.5">
          {/* Top-Row: Back · Schritt-Counter · Menü */}
          <div className="flex items-center justify-between mb-2.5">
            <Link
              href={`/${locale}/lernen/ce/${ceId}`}
              aria-label={t("zurueckZurUebersicht")}
              className="text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)]"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <span className="text-[11px] uppercase tracking-wider text-[var(--lern-text-tertiary)] tabular-nums">
              {totalSteps > 0 && currentStep
                ? `${phaseLabel} · ${currentStepIndex + 1}/${totalSteps}`
                : phaseLabel}
            </span>
            <span className="w-5" aria-hidden />
          </div>

          {/* Patient-Row: Avatar · Name · Setting */}
          {situation.patient && (
            <div className="flex items-center gap-2.5 mb-3">
              <PatientAvatar
                name={situation.patient.name}
                size={40}
                onClick={
                  situation.patient.hintergrund
                    ? () => setPatientModalOpen(true)
                    : undefined
                }
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold leading-tight text-[var(--lern-text-primary)] truncate">
                  {situation.titel}
                </div>
                <div className="text-[11px] text-[var(--lern-text-tertiary)] truncate mt-0.5">
                  {situation.patient.name} · {situation.patient.alter} ·{" "}
                  {situation.patient.setting}
                </div>
              </div>
            </div>
          )}

          {/* Phasen-Bar */}
          <PhasenProgress
            currentPhase={currentPhaseId}
            completedPhases={completedPhases}
            phasen={phaseOrder}
            onPhaseClick={handlePhaseClick}
          />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 min-h-0 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-5 pb-24">
          {allPhasesCompleted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl bg-[var(--lern-accent-bg)] border-[1.5px] border-[var(--lern-accent)]/30 p-8 text-center"
            >
              <span className="text-4xl mb-4 block">🎉</span>
              <h2 className="text-lg font-bold text-[var(--lern-text-primary)] mb-2">
                {t("alleAbgeschlossen")}
              </h2>
              <p className="text-sm text-[var(--lern-text-secondary)] mb-4">
                {situation.titel}
              </p>
              <Link
                href={`/${locale}/lernen/ce/${ceId}`}
                className="inline-block rounded-xl bg-[var(--lern-accent)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1A7359]"
              >
                {t("zurueckZurUebersicht")}
              </Link>
            </motion.div>
          ) : transitionText ? (
            /* Micro-Narration — Zwischenscreen, länger sichtbar (4.5-7s je nach Textlänge) */
            <AnimatePresence mode="wait">
              <motion.div
                key="transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center py-24"
              >
                <p
                  className="text-center text-base italic leading-relaxed max-w-sm px-6"
                  style={{ color: "var(--lern-text-secondary)" }}
                >
                  {transitionText}
                </p>
              </motion.div>
            </AnimatePresence>
          ) : currentStep ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPhaseId}-${currentStepIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <StepRenderer
                  step={currentStep}
                  sprachLevel="c1"
                  glossar={SITUATION_GLOSSAR[situationId] ?? []}
                  onNext={() => handleNextStep()}
                  onSelfRating={() => handleNextStep()}
                  onReflection={() => handleNextStep()}
                  reflexionText={null}
                  score={0}
                  totalQuestions={phaseSteps.length}
                />
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="text-center py-12">
              <button
                onClick={handleNextStep}
                className="rounded-xl bg-[var(--lern-accent)] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1A7359]"
              >
                {t("fortschritt")}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Patient-Modal (Avatar-Klick) — Lebensgeschichte */}
      {patientModalOpen && situation.patient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setPatientModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPatientModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--lern-text-tertiary)] hover:text-[var(--lern-text-primary)] text-2xl leading-none"
              aria-label="Schließen"
            >
              ×
            </button>
            <div className="flex items-center gap-3 mb-4">
              <PatientAvatar name={situation.patient.name} size={56} />
              <div>
                <h2 className="text-lg font-bold text-[var(--lern-text-primary)]">
                  {situation.patient.name}, {situation.patient.alter}
                </h2>
                <p className="text-[11px] text-[var(--lern-text-tertiary)]">
                  {situation.patient.setting}
                </p>
              </div>
            </div>

            {situation.patient.diagnosen.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {situation.patient.diagnosen.map((d) => (
                  <span
                    key={d}
                    className="rounded-md bg-[var(--lern-bg)] px-2 py-0.5 text-[10px] text-[var(--lern-text-secondary)]"
                  >
                    {d}
                  </span>
                ))}
              </div>
            )}

            {situation.patient.hintergrund && (
              <section className="mb-5">
                <h3 className="text-[11px] font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                  Lebensgeschichte
                </h3>
                <div className="text-sm text-[var(--lern-text-primary)] whitespace-pre-line leading-relaxed">
                  {situation.patient.hintergrund}
                </div>
                {situation.patient.hintergrundB1 && (
                  <details className="mt-3 text-xs">
                    <summary className="cursor-pointer text-[var(--lern-accent)] font-semibold">
                      Einfache Sprache (B1)
                    </summary>
                    <div className="mt-2 text-[var(--lern-text-secondary)] whitespace-pre-line">
                      {situation.patient.hintergrundB1}
                    </div>
                  </details>
                )}
              </section>
            )}

            {situation.patient.persoenlichkeit && (
              <section className="mb-5">
                <h3 className="text-[11px] font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                  Persönlichkeit
                </h3>
                <div className="text-sm text-[var(--lern-text-primary)] whitespace-pre-line leading-relaxed">
                  {situation.patient.persoenlichkeit}
                </div>
              </section>
            )}

            {situation.patient.zitate && situation.patient.zitate.length > 0 && (
              <section className="mb-5">
                <h3 className="text-[11px] font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                  Originalton ({situation.patient.zitate.length})
                </h3>
                <div className="space-y-2">
                  {situation.patient.zitate.map((z, i) => (
                    <blockquote
                      key={i}
                      className="rounded-xl bg-[var(--lern-accent-bg)] border-l-2 border-[var(--lern-accent)] px-4 py-2 text-sm italic text-[var(--lern-text-primary)]"
                    >
                      „{z}"
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            <button
              onClick={() => setPatientModalOpen(false)}
              className="w-full rounded-xl bg-[var(--lern-accent)] px-6 py-3 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#1A7359]"
            >
              Zurück
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
