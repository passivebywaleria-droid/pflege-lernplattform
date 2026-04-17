"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, ChevronRight, CheckCircle2, XCircle, ArrowLeft } from "lucide-react"
import type { ExamCase, ExamCasePhase, ContentStep } from "../../../content/_types"
import { StepRenderer } from "./step-renderer"

// Prüfungsmodus: C1, kein Glossar, keine Hilfen
const PRUEFUNG_SPRACHLEVEL = "c1" as const
const PRUEFUNG_GLOSSAR: never[] = []

interface FallverlaufEngineProps {
  examCase: ExamCase
  onExit: () => void
}

interface PhaseResult {
  phaseId: string
  richtig: number
  total: number
  antworten: { stepId: string; korrekt: boolean }[]
}

export function FallverlaufEngine({ examCase, onExit }: FallverlaufEngineProps) {
  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(-1) // -1 = Briefing
  const [currentStepIdx, setCurrentStepIdx] = useState(0)
  const [phaseResults, setPhaseResults] = useState<PhaseResult[]>([])
  const [phaseAntworten, setPhaseAntworten] = useState<{ stepId: string; korrekt: boolean }[]>([])
  const [showPhaseResult, setShowPhaseResult] = useState(false)
  const [fertig, setFertig] = useState(false)
  const [startTime] = useState(Date.now())

  const currentPhase: ExamCasePhase | null =
    currentPhaseIdx >= 0 && currentPhaseIdx < examCase.phasen.length
      ? examCase.phasen[currentPhaseIdx]
      : null

  const currentStep: ContentStep | null =
    currentPhase && currentStepIdx < currentPhase.steps.length
      ? currentPhase.steps[currentStepIdx]
      : null

  const handleStepComplete = useCallback(
    (korrekt: boolean) => {
      if (!currentPhase) return

      const stepId = currentPhase.steps[currentStepIdx]?.stepId ?? `step-${currentStepIdx}`
      const neueAntworten = [...phaseAntworten, { stepId, korrekt }]
      setPhaseAntworten(neueAntworten)

      if (currentStepIdx + 1 < currentPhase.steps.length) {
        // Nächster Step in gleicher Phase
        setCurrentStepIdx(currentStepIdx + 1)
      } else {
        // Phase fertig — Ergebnis zeigen
        const richtig = neueAntworten.filter((a) => a.korrekt).length
        setPhaseResults([
          ...phaseResults,
          {
            phaseId: currentPhase.phaseId,
            richtig,
            total: neueAntworten.length,
            antworten: neueAntworten,
          },
        ])
        setShowPhaseResult(true)
      }
    },
    [currentPhase, currentStepIdx, phaseAntworten, phaseResults]
  )

  function startNextPhase() {
    setShowPhaseResult(false)
    setPhaseAntworten([])
    setCurrentStepIdx(0)

    if (currentPhaseIdx + 1 < examCase.phasen.length) {
      setCurrentPhaseIdx(currentPhaseIdx + 1)
    } else {
      setFertig(true)
    }
  }

  // ── Briefing ──
  if (currentPhaseIdx === -1) {
    return (
      <div className="px-4 py-6 space-y-5" style={{ color: "var(--lern-text-primary)" }}>
        <button onClick={onExit} className="flex items-center gap-1 text-sm text-[#8e8e93]">
          <ArrowLeft size={16} /> Zurück
        </button>

        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold">{examCase.titel}</h2>
          <p className="text-sm text-[var(--lern-text-secondary)]">
            Fallverlauf — Prüfungssimulation
          </p>
        </div>

        {/* Patient */}
        <div className="rounded-2xl border border-[var(--lern-border)] bg-[var(--lern-card)] p-4 space-y-2">
          <h3 className="text-sm font-semibold">
            {examCase.patient.name} ({examCase.patient.alter} J.)
          </h3>
          <p className="text-sm text-[var(--lern-text-secondary)] leading-relaxed">
            {examCase.patient.steckbrief}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {examCase.patient.diagnosen.map((d) => (
              <span key={d} className="rounded-full bg-[var(--lern-bg-secondary)] px-2.5 py-0.5 text-xs font-medium text-[var(--lern-text-secondary)]">
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Phasen-Übersicht */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Verlauf ({examCase.phasen.length} Phasen)</h3>
          {examCase.phasen.map((phase, i) => (
            <div key={phase.phaseId} className="flex items-center gap-3 rounded-xl bg-[var(--lern-card)] border border-[var(--lern-border)] p-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9B7EA6]/10 text-xs font-bold text-[#9B7EA6]">
                {i + 1}
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium">{phase.zeitpunkt}</p>
                <p className="text-xs text-[var(--lern-text-secondary)]">{phase.steps.length} Aufgaben</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-[#9B7EA6]/5 border border-[#9B7EA6]/20 p-3">
          <p className="text-xs text-[var(--lern-text-secondary)]">
            Du begleitest {examCase.patient.name} durch verschiedene Zeitpunkte.
            Jede Phase bringt neue Informationen und neue Entscheidungen.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentPhaseIdx(0)}
          className="w-full rounded-2xl bg-[#9B7EA6] px-5 py-3.5 text-sm font-semibold text-white"
        >
          Fallverlauf starten
        </motion.button>
      </div>
    )
  }

  // ── Gesamtergebnis ──
  if (fertig) {
    const gesamtRichtig = phaseResults.reduce((s, p) => s + p.richtig, 0)
    const gesamtTotal = phaseResults.reduce((s, p) => s + p.total, 0)
    const prozent = gesamtTotal > 0 ? Math.round((gesamtRichtig / gesamtTotal) * 100) : 0
    const dauer = Math.round((Date.now() - startTime) / 60000)

    return (
      <div className="px-4 py-6 space-y-5" style={{ color: "var(--lern-text-primary)" }}>
        <div className="text-center space-y-3">
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
            prozent >= 70 ? "bg-[#6B8F71]/10" : prozent >= 50 ? "bg-[#D4956A]/10" : "bg-[#C96B5C]/10"
          }`}>
            <span className={`text-2xl font-bold ${
              prozent >= 70 ? "text-[#6B8F71]" : prozent >= 50 ? "text-[#D4956A]" : "text-[#C96B5C]"
            }`}>{prozent}%</span>
          </div>
          <h2 className="text-xl font-bold">Fallverlauf abgeschlossen</h2>
          <p className="text-sm text-[var(--lern-text-secondary)]">
            {gesamtRichtig}/{gesamtTotal} richtig — {dauer} Minuten
          </p>
        </div>

        {/* Phasen-Ergebnisse */}
        <div className="space-y-2">
          {phaseResults.map((result, i) => {
            const phaseProzent = result.total > 0 ? Math.round((result.richtig / result.total) * 100) : 0
            return (
              <div key={result.phaseId} className="flex items-center justify-between rounded-xl bg-[var(--lern-card)] border border-[var(--lern-border)] p-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#8e8e93]">{i + 1}</span>
                  <span className="text-sm font-medium">{examCase.phasen[i]?.zeitpunkt}</span>
                </div>
                <span className={`text-sm font-semibold ${phaseProzent >= 70 ? "text-[#6B8F71]" : "text-[#D4956A]"}`}>
                  {result.richtig}/{result.total}
                </span>
              </div>
            )
          })}
        </div>

        <button
          onClick={onExit}
          className="w-full rounded-2xl bg-[var(--lern-bg-secondary)] px-5 py-3.5 text-sm font-semibold"
        >
          Zurück zur Prüfungsübersicht
        </button>
      </div>
    )
  }

  // ── Phase-Ergebnis (Zwischenergebnis) ──
  if (showPhaseResult && currentPhase) {
    const lastResult = phaseResults[phaseResults.length - 1]
    const phaseProzent = lastResult && lastResult.total > 0
      ? Math.round((lastResult.richtig / lastResult.total) * 100)
      : 0
    const isLast = currentPhaseIdx + 1 >= examCase.phasen.length

    return (
      <div className="px-4 py-6 space-y-5" style={{ color: "var(--lern-text-primary)" }}>
        <div className="text-center space-y-2">
          <h2 className="text-lg font-bold">Phase abgeschlossen</h2>
          <p className="text-sm text-[var(--lern-text-secondary)]">{currentPhase.zeitpunkt}</p>
          <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ${
            phaseProzent >= 70 ? "bg-[#6B8F71]/10 text-[#6B8F71]" : "bg-[#D4956A]/10 text-[#D4956A]"
          }`}>
            {phaseProzent >= 70 ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
            {lastResult?.richtig}/{lastResult?.total} richtig
          </div>
        </div>

        {/* Nächste Phase Vorschau */}
        {!isLast && (
          <div className="rounded-2xl border border-[var(--lern-border)] bg-[var(--lern-card)] p-4">
            <p className="text-xs font-semibold text-[#8e8e93] mb-1">Nächste Phase</p>
            <p className="text-sm font-medium">{examCase.phasen[currentPhaseIdx + 1]?.zeitpunkt}</p>
            <p className="text-xs text-[var(--lern-text-secondary)] mt-1">
              {examCase.phasen[currentPhaseIdx + 1]?.kontext}
            </p>
          </div>
        )}

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={startNextPhase}
          className="w-full rounded-2xl bg-[#9B7EA6] px-5 py-3.5 text-sm font-semibold text-white flex items-center justify-center gap-2"
        >
          {isLast ? "Ergebnis anzeigen" : "Weiter zur nächsten Phase"}
          <ChevronRight size={16} />
        </motion.button>
      </div>
    )
  }

  // ── Step innerhalb einer Phase ──
  if (currentPhase && currentStep) {
    return (
      <div style={{ color: "var(--lern-text-primary)" }}>
        {/* Phase-Header */}
        <div className="sticky top-0 z-30 bg-[var(--lern-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--lern-border)] px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#9B7EA6] font-semibold">
                Phase {currentPhaseIdx + 1}/{examCase.phasen.length}
              </p>
              <p className="text-sm font-medium">{currentPhase.zeitpunkt}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#8e8e93]">
              <Clock size={12} />
              {currentStepIdx + 1}/{currentPhase.steps.length}
            </div>
          </div>
          {/* Fortschrittsbalken */}
          <div className="h-1 bg-[var(--lern-bg)] rounded-full mt-2 overflow-hidden">
            <motion.div
              className="h-full bg-[#9B7EA6] rounded-full"
              animate={{ width: `${((currentStepIdx + 1) / currentPhase.steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Kontext (nur beim ersten Step der Phase) */}
        {currentStepIdx === 0 && (
          <div className="px-4 pt-4">
            <div className="rounded-xl bg-[#9B7EA6]/5 border border-[#9B7EA6]/20 p-3 mb-4">
              <p className="text-sm text-[var(--lern-text-secondary)] leading-relaxed">
                {currentPhase.kontext}
              </p>
            </div>
          </div>
        )}

        {/* Step Renderer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPhaseIdx}-${currentStepIdx}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="px-4 py-2"
          >
            <StepRenderer
              step={currentStep}
              sprachLevel={PRUEFUNG_SPRACHLEVEL}
              glossar={PRUEFUNG_GLOSSAR}
              onNext={(correct) => handleStepComplete(correct ?? false)}
              onSelfRating={() => {/* Prüfungsmodus — ignoriert */}}
              onReflection={() => {/* Prüfungsmodus — ignoriert */}}
              reflexionText={null}
              score={phaseResults.reduce((s, p) => s + p.richtig, 0)}
              totalQuestions={examCase.phasen.reduce((s, p) => s + p.steps.length, 0)}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    )
  }

  return null
}
