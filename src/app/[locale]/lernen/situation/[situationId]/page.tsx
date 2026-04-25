"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { loadSituation as staticLoadSituation } from "../../../../../../content/content-loader";
import type { Lernsituation, PflegeProzessPhase, ContentStep } from "../../../../../../content/_types";
import { PhasenProgress, PHASEN_ORDER } from "@/components/learn/phasen-progress";
import { StepRenderer } from "@/components/learn/step-renderer";

export default function SituationLernenPage() {
  const locale = useLocale();
  const params = useParams();
  const searchParams = useSearchParams();
  const situationId = params.situationId as string;
  const ceId = searchParams.get("ce") ?? "ce-02";
  const t = useTranslations("situation");

  const [situation, setSituation] = useState<Lernsituation | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPhaseId, setCurrentPhaseId] = useState<PflegeProzessPhase>("informieren");
  const [completedPhases, setCompletedPhases] = useState<PflegeProzessPhase[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // FIX (walkthrough B-09): Diagnose-Badges nach Phase 1 kompakt einklappbar, um
  // Wiederholungs-Müdigkeit über 30 Steps zu vermeiden. Toggle-State hier.
  const [diagnosenOpen, setDiagnosenOpen] = useState(true);
  // WOW Tag 1: Patient-Modal mit Lebensgeschichte
  const [patientModalOpen, setPatientModalOpen] = useState(false);
  // WOW Tag 1: Phasen-Intro vor Steps anzeigen (kontext der Phase)
  const [phaseIntroSeen, setPhaseIntroSeen] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setLoading(true);
    staticLoadSituation(ceId, situationId)
      .then(setSituation)
      .finally(() => setLoading(false));
  }, [ceId, situationId]);

  // Aktuelle Phase und ihre Steps
  const currentPhase = situation?.phasen.find((p) => p.phase === currentPhaseId);
  const phaseSteps: ContentStep[] = currentPhase
    ? [...currentPhase.kernSteps, ...currentPhase.optionaleSteps]
    : [];
  const currentStep = phaseSteps[currentStepIndex] ?? null;

  const handlePhaseClick = useCallback((phase: PflegeProzessPhase) => {
    if (completedPhases.includes(phase) || phase === currentPhaseId) {
      setCurrentPhaseId(phase);
      setCurrentStepIndex(0);
    }
  }, [completedPhases, currentPhaseId]);

  const handleNextStep = useCallback(() => {
    if (currentStepIndex < phaseSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Phase abgeschlossen
      if (!completedPhases.includes(currentPhaseId)) {
        setCompletedPhases((prev) => [...prev, currentPhaseId]);
      }
      // Nächste Phase
      const currentIdx = PHASEN_ORDER.indexOf(currentPhaseId);
      if (currentIdx < PHASEN_ORDER.length - 1) {
        setCurrentPhaseId(PHASEN_ORDER[currentIdx + 1]);
        setCurrentStepIndex(0);
      }
    }
  }, [currentStepIndex, phaseSteps.length, completedPhases, currentPhaseId]);

  // FIX (walkthrough B-09): Ab Phase 2 (beobachten) werden Diagnose-Badges
  // automatisch eingeklappt — Schüler kennt sie dann, kann bei Bedarf öffnen.
  useEffect(() => {
    if (currentPhaseId !== "informieren") {
      setDiagnosenOpen(false);
    }
  }, [currentPhaseId]);

  if (loading) {
    return (
      <div className="h-dvh bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--lern-text-secondary)]">Laden...</div>
      </div>
    );
  }

  if (!situation) {
    return (
      <div className="h-dvh bg-[var(--lern-bg)] flex items-center justify-center flex-col gap-4">
        <p className="text-[var(--lern-text-secondary)]">Lernsituation nicht gefunden.</p>
        <Link
          href={`/${locale}/lernen/ce/${ceId}`}
          className="text-sm text-[var(--lern-accent)] hover:underline"
        >
          {t("zurueckZurUebersicht")}
        </Link>
      </div>
    );
  }

  const allPhasesCompleted = completedPhases.length === PHASEN_ORDER.length;

  return (
    <div className="h-dvh bg-[var(--lern-bg)] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="shrink-0 bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <Link
            href={`/${locale}/lernen/ce/${ceId}`}
            className="inline-flex items-center gap-1 text-sm text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)] mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("zurueckZurUebersicht")}
          </Link>

          {/* Patient-Info */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h1 className="text-lg font-bold text-[var(--lern-text-primary)]">
                {situation.titel}
              </h1>
              {situation.patient && (
                <>
                  <p className="text-xs text-[var(--lern-text-secondary)] mt-0.5">
                    {t("patient")}: {situation.patient.name}, {situation.patient.alter} · {situation.patient.setting}
                  </p>
                  {situation.patient.hintergrund && (
                    <button
                      type="button"
                      onClick={() => setPatientModalOpen(true)}
                      className="inline-flex items-center gap-1 text-xs text-[var(--lern-accent)] hover:underline mt-1"
                    >
                      👤 Mehr über {situation.patient.name.split(" ")[0]} erfahren
                    </button>
                  )}
                </>
              )}
            </div>
            <span className="shrink-0 rounded-full bg-[var(--lern-accent-bg)] px-2 py-0.5 text-xs font-semibold text-[var(--lern-accent)]">
              {t("spirale", { level: situation.spirale })}
            </span>
          </div>

          {/* Diagnosen — FIX (walkthrough B-09): ab Phase 2 einklappbar */}
          {situation.patient && situation.patient.diagnosen.length > 0 && (
            <div className="mb-3">
              <button
                type="button"
                onClick={() => setDiagnosenOpen((v) => !v)}
                aria-expanded={diagnosenOpen}
                className="inline-flex items-center gap-1 text-xs text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)] mb-1"
              >
                <span>Diagnosen ({situation.patient.diagnosen.length})</span>
                {diagnosenOpen ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </button>
              {diagnosenOpen && (
                <div className="flex flex-wrap gap-1">
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
            </div>
          )}

          {/* Phasen-Progress */}
          <PhasenProgress
            currentPhase={currentPhaseId}
            completedPhases={completedPhases}
            onPhaseClick={handlePhaseClick}
          />
        </div>
      </div>

      {/* Content-Bereich */}
      <div className="mx-auto max-w-3xl px-4 py-3 flex-1 min-h-0 overflow-y-auto w-full">
        {allPhasesCompleted ? (
          /* Alle Phasen abgeschlossen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-[#6B8F71]/10 border border-[#6B8F71]/30 p-8 text-center"
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
              className="inline-block rounded-xl bg-[var(--lern-accent)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#B07A72]"
            >
              {t("zurueckZurUebersicht")}
            </Link>
          </motion.div>
        ) : currentStep ? (
          /* Step anzeigen */
          <div>
            {/* Phase-Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-[var(--lern-accent)] uppercase tracking-wider">
                  {t(`phasen.${currentPhaseId}`)}
                </p>
                <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">
                  {t(`phasenBeschreibung.${currentPhaseId}`)}
                </p>
              </div>
              <span className="text-xs text-[var(--lern-text-tertiary)]">
                {currentStepIndex + 1}/{phaseSteps.length}
              </span>
            </div>

            {/* Step-Progress-Bar */}
            <div className="h-1 rounded-full bg-[var(--lern-border)] mb-4">
              <div
                className="h-full rounded-full bg-[var(--lern-accent)] transition-all"
                style={{ width: `${((currentStepIndex + 1) / phaseSteps.length) * 100}%` }}
              />
            </div>

            {/* WOW Tag 1: Kurzer Phasen-Hook (volle Szene optional) */}
            {currentStepIndex === 0 && currentPhase?.kontext && !phaseIntroSeen[currentPhaseId] && (() => {
              // Hook = erste 1-2 Sätze, Rest in Toggle
              const fullText = currentPhase.kontext;
              const hookMatch = fullText.match(/^[\s\S]*?[.!?](\s|$)([\s\S]*?[.!?](\s|$))?/);
              const hook = hookMatch ? hookMatch[0].trim() : fullText.slice(0, 200);
              const rest = fullText.slice(hook.length).trim();
              return (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-[var(--lern-bg-primary)] border-[1.5px] border-[var(--lern-accent)]/20 p-4 mb-4"
                >
                  <p className="text-xs font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                    Szene · {t(`phasen.${currentPhaseId}`)}
                  </p>
                  <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed">
                    {hook}
                  </p>
                  {rest && (
                    <details className="mt-2 text-xs">
                      <summary className="cursor-pointer text-[var(--lern-accent)] font-medium">
                        📖 Vollszene lesen
                      </summary>
                      <div className="mt-2 text-[var(--lern-text-secondary)] whitespace-pre-line leading-relaxed">
                        {rest}
                      </div>
                      {currentPhase.kontextB1 && (
                        <details className="mt-2">
                          <summary className="cursor-pointer text-[var(--lern-accent)]">
                            🌍 Einfache Sprache (B1)
                          </summary>
                          <div className="mt-2 whitespace-pre-line">
                            {currentPhase.kontextB1}
                          </div>
                        </details>
                      )}
                    </details>
                  )}
                  <button
                    onClick={() => setPhaseIntroSeen({ ...phaseIntroSeen, [currentPhaseId]: true })}
                    className="mt-3 w-full rounded-xl bg-[var(--lern-accent)] px-4 py-2 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
                  >
                    Los geht&apos;s →
                  </button>
                </motion.div>
              );
            })()}

            {(currentStepIndex !== 0 || phaseIntroSeen[currentPhaseId] || !currentPhase?.kontext) && (
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
                  glossar={[]}
                  onNext={(correct) => {
                    handleNextStep();
                  }}
                  onSelfRating={() => {
                    handleNextStep();
                  }}
                  onReflection={() => {
                    handleNextStep();
                  }}
                  reflexionText={null}
                  score={0}
                  totalQuestions={phaseSteps.length}
                />
              </motion.div>
            </AnimatePresence>
            )}
          </div>
        ) : (
          /* Keine Steps in dieser Phase */
          <div className="text-center py-12">
            <p className="text-sm text-[var(--lern-text-tertiary)] mb-4">
              {t(`phasenBeschreibung.${currentPhaseId}`)}
            </p>
            <button
              onClick={handleNextStep}
              className="rounded-xl bg-[var(--lern-accent)] px-6 py-2.5 text-sm font-semibold text-white"
            >
              {t("fortschritt")}
            </button>
          </div>
        )}
      </div>

      {/* WOW Tag 1: Patient-Modal mit Lebensgeschichte */}
      {patientModalOpen && situation.patient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setPatientModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-[var(--lern-bg-primary)] rounded-2xl border-[1.5px] border-[var(--lern-border)] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPatientModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--lern-text-tertiary)] hover:text-[var(--lern-text-primary)] text-2xl leading-none"
              aria-label="Schließen"
            >
              ×
            </button>
            <h2 className="text-xl font-bold text-[var(--lern-text-primary)] mb-1">
              {situation.patient.name}, {situation.patient.alter}
            </h2>
            <p className="text-xs text-[var(--lern-text-tertiary)] mb-4">{situation.patient.setting}</p>

            {situation.patient.hintergrund && (
              <section className="mb-5">
                <h3 className="text-sm font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                  Lebensgeschichte
                </h3>
                <div className="prose prose-sm max-w-none text-[var(--lern-text-primary)] whitespace-pre-line leading-relaxed">
                  {situation.patient.hintergrund}
                </div>
                {situation.patient.hintergrundB1 && (
                  <details className="mt-3 text-xs">
                    <summary className="cursor-pointer text-[var(--lern-accent)] font-semibold">
                      🌍 Einfache Sprache (B1)
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
                <h3 className="text-sm font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                  Persönlichkeit
                </h3>
                <div className="prose prose-sm max-w-none text-[var(--lern-text-primary)] whitespace-pre-line leading-relaxed">
                  {situation.patient.persoenlichkeit}
                </div>
              </section>
            )}

            {situation.patient.zitate && situation.patient.zitate.length > 0 && (
              <section className="mb-5">
                <h3 className="text-sm font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-2">
                  Originalton ({situation.patient.zitate.length} Zitate)
                </h3>
                <div className="space-y-2">
                  {situation.patient.zitate.map((z, i) => (
                    <blockquote
                      key={i}
                      className="rounded-xl bg-[var(--lern-accent-bg)] border-l-4 border-[var(--lern-accent)] px-4 py-2 text-sm italic text-[var(--lern-text-primary)]"
                    >
                      „{z}"
                    </blockquote>
                  ))}
                </div>
              </section>
            )}

            <button
              onClick={() => setPatientModalOpen(false)}
              className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-3 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
            >
              Zurück zur Pflege
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
