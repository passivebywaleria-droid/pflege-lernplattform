"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ContentStep, GlossarEntry } from "../../../content/_types";
import { StepMC } from "./step-mc";
import { StepMatching } from "./step-matching";
import { StepSorting } from "./step-sorting";
import { StepFillIn } from "./step-fillin";
import { StepSequencing } from "./step-sequencing";
import { StepCategorize } from "./step-categorize";
import { StepSlider } from "./step-slider";

// Fragetypen die im Prüfungsmodus sinnvoll sind (keine reinen Lese-Steps)
const PRUEFUNGS_STEP_TYPES = new Set([
  "mc", "matching", "sorting", "fillin", "sequencing",
  "categorize", "slider", "truefalse", "cloze",
]);

interface PruefungsModusProps {
  steps: ContentStep[];
  leTitle: string;
  glossar?: GlossarEntry[];
  onExit: () => void;
}

interface PruefungsErgebnis {
  total: number;
  richtig: number;
  prozent: number;
  zeitSekunden: number;
  details: { stepId: string; title: string; correct: boolean }[];
}

export function PruefungsModus({ steps, leTitle, glossar, onExit }: PruefungsModusProps) {
  // Nur Frage-Steps filtern
  const frageSteps = steps.filter((s) => PRUEFUNGS_STEP_TYPES.has(s.stepType));
  const maxFragen = Math.min(frageSteps.length, 20);
  const pruefungsSteps = frageSteps.slice(0, maxFragen);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ergebnis, setErgebnis] = useState<PruefungsErgebnis | null>(null);
  const [details, setDetails] = useState<{ stepId: string; title: string; correct: boolean }[]>([]);
  const [zeitVerbleibend, setZeitVerbleibend] = useState(maxFragen * 90); // 90 Sek pro Frage
  const [gestartet, setGestartet] = useState(false);
  const startZeit = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer starten
  useEffect(() => {
    if (!gestartet) return;
    startZeit.current = Date.now();
    timerRef.current = setInterval(() => {
      setZeitVerbleibend((prev) => {
        if (prev <= 1) {
          // Zeit abgelaufen -> sofort auswerten
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gestartet]);

  // Zeit abgelaufen -> Ergebnis
  useEffect(() => {
    if (zeitVerbleibend === 0 && gestartet && !ergebnis) {
      berechneErgebnis(details);
    }
  }, [zeitVerbleibend, gestartet, ergebnis]);

  const berechneErgebnis = useCallback((aktuelleDetails: typeof details) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const zeitSekunden = Math.round((Date.now() - startZeit.current) / 1000);
    const richtig = aktuelleDetails.filter((d) => d.correct).length;
    setErgebnis({
      total: aktuelleDetails.length,
      richtig,
      prozent: aktuelleDetails.length > 0 ? Math.round((richtig / aktuelleDetails.length) * 100) : 0,
      zeitSekunden,
      details: aktuelleDetails,
    });
  }, []);

  const handleAntwort = useCallback((correct: boolean) => {
    const step = pruefungsSteps[currentIndex];
    if (!step) return;

    const neueDetails = [...details, { stepId: step.stepId, title: step.contentC1.title, correct }];
    setDetails(neueDetails);

    if (currentIndex < pruefungsSteps.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      berechneErgebnis(neueDetails);
    }
  }, [currentIndex, pruefungsSteps, details, berechneErgebnis]);

  const formatZeit = (sek: number) => {
    const min = Math.floor(sek / 60);
    const s = sek % 60;
    return `${min}:${s.toString().padStart(2, "0")}`;
  };

  // Start-Screen
  if (!gestartet) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center p-4" style={{ color: "var(--lern-text-primary)" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full rounded-3xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-8 text-center space-y-6"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#D4956A]/10 flex items-center justify-center">
            <span className="text-3xl">📝</span>
          </div>
          <h1 className="text-2xl font-bold">Pr\u00fcfungsmodus</h1>
          <p className="text-sm text-[var(--lern-text-secondary)]">
            {leTitle}
          </p>
          <div className="space-y-2 text-sm text-[var(--lern-text-secondary)]">
            <p><strong className="text-[var(--lern-text-primary)]">{maxFragen} Fragen</strong> ohne Erkl\u00e4rungen</p>
            <p><strong className="text-[var(--lern-text-primary)]">{formatZeit(maxFragen * 90)}</strong> Zeitlimit</p>
            <p>Keine Hilfen, kein Glossar, kein KI-Chat</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onExit}
              className="flex-1 rounded-2xl bg-[var(--lern-bg)] px-5 py-3.5 text-sm font-semibold text-[var(--lern-text-primary)] transition-all active:scale-[0.98]"
            >
              Abbrechen
            </button>
            <button
              onClick={() => setGestartet(true)}
              className="flex-1 rounded-2xl bg-[var(--lern-accent)] px-5 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98]"
            >
              Starten
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Ergebnis-Screen
  if (ergebnis) {
    const pruefungsreife = ergebnis.prozent >= 80 ? "gruen" : ergebnis.prozent >= 60 ? "gelb" : "rot";
    const farbe = pruefungsreife === "gruen" ? "#6B8F71" : pruefungsreife === "gelb" ? "#D4956A" : "#C96B5C";
    const label = pruefungsreife === "gruen" ? "Pr\u00fcfungsreif" : pruefungsreife === "gelb" ? "Fast bereit" : "Noch \u00fcben";
    const icon = pruefungsreife === "gruen" ? "✅" : pruefungsreife === "gelb" ? "⚠️" : "❌";

    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center p-4" style={{ color: "var(--lern-text-primary)" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full rounded-3xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-8 space-y-6"
        >
          {/* Pr\u00fcfungsreife-Indikator */}
          <div className="text-center space-y-3">
            <div
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl"
              style={{ backgroundColor: `${farbe}15` }}
            >
              {icon}
            </div>
            <h1 className="text-2xl font-bold">{label}</h1>
            <p className="text-5xl font-bold" style={{ color: farbe }}>
              {ergebnis.prozent}%
            </p>
          </div>

          {/* Statistiken */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-[var(--lern-bg)] p-3 text-center">
              <p className="text-xs text-[var(--lern-text-secondary)]">Richtig</p>
              <p className="text-lg font-bold text-[#6B8F71]">{ergebnis.richtig}</p>
            </div>
            <div className="rounded-2xl bg-[var(--lern-bg)] p-3 text-center">
              <p className="text-xs text-[var(--lern-text-secondary)]">Falsch</p>
              <p className="text-lg font-bold text-[#C96B5C]">{ergebnis.total - ergebnis.richtig}</p>
            </div>
            <div className="rounded-2xl bg-[var(--lern-bg)] p-3 text-center">
              <p className="text-xs text-[var(--lern-text-secondary)]">Zeit</p>
              <p className="text-lg font-bold">{formatZeit(ergebnis.zeitSekunden)}</p>
            </div>
          </div>

          {/* Fragen-Details */}
          <div className="space-y-2">
            <h2 className="text-sm font-semibold">Deine Antworten</h2>
            <div className="max-h-48 overflow-y-auto space-y-1.5">
              {ergebnis.details.map((d, i) => (
                <div
                  key={d.stepId}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm"
                  style={{ backgroundColor: d.correct ? "#6B8F7110" : "#C96B5C10" }}
                >
                  <span>{d.correct ? "✅" : "❌"}</span>
                  <span className="text-[var(--lern-text-secondary)] shrink-0">#{i + 1}</span>
                  <span className="truncate">{d.title}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onExit}
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-5 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98]"
          >
            Zur\u00fcck zur Lektion
          </button>
        </motion.div>
      </div>
    );
  }

  // Pr\u00fcfungs-Step rendern
  const step = pruefungsSteps[currentIndex];
  if (!step) return null;

  const fortschritt = ((currentIndex + 1) / pruefungsSteps.length) * 100;
  const zeitWarnung = zeitVerbleibend < 60;

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
      {/* Pr\u00fcfungs-Header: Timer + Fortschritt */}
      <div className="sticky top-0 z-50 bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50 px-4 py-3">
        <div className="mx-auto max-w-2xl flex items-center gap-4">
          <button
            onClick={onExit}
            className="text-sm text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)] transition-colors"
          >
            Abbrechen
          </button>

          {/* Fortschrittsbalken */}
          <div className="flex-1 h-2 rounded-full bg-[var(--lern-bg)]">
            <motion.div
              className="h-full rounded-full bg-[var(--lern-accent)]"
              animate={{ width: `${fortschritt}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <span className="text-sm font-medium text-[var(--lern-text-secondary)]">
            {currentIndex + 1}/{pruefungsSteps.length}
          </span>

          {/* Timer */}
          <div
            className={`rounded-xl px-3 py-1.5 text-sm font-bold ${
              zeitWarnung ? "bg-[#C96B5C]/10 text-[#C96B5C] animate-pulse" : "bg-[var(--lern-bg)] text-[var(--lern-text-primary)]"
            }`}
          >
            {formatZeit(zeitVerbleibend)}
          </div>
        </div>
      </div>

      {/* Step-Content (ohne Erkl\u00e4rungen) */}
      <div className="mx-auto max-w-2xl px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.stepId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {renderPruefungsStep(step, handleAntwort)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Rendert Step-Typ im Pr\u00fcfungsmodus (kein Glossar, keine Erkl\u00e4rungen)
function renderPruefungsStep(
  step: ContentStep,
  onNext: (correct: boolean) => void,
) {
  const { stepType, contentC1, question } = step;
  if (!question) return null;

  switch (stepType) {
    case "mc": {
      const optionen = question.optionen ?? (question as Record<string, unknown>).options as typeof question.optionen;
      if (!optionen) return null;
      return (
        <StepMC
          title={contentC1.title}
          body={contentC1.body}
          fragetext={question.fragetext ?? contentC1.title}
          optionen={optionen}
          multiSelect={question.multiSelect}
          onNext={onNext}
        />
      );
    }

    case "matching": {
      const pairs = question.matchingPairs ?? (question as Record<string, unknown>).pairs as typeof question.matchingPairs;
      if (!pairs) return null;
      return (
        <StepMatching
          title={contentC1.title}
          body={contentC1.body}
          fragetext={question.fragetext ?? "Ordne die Begriffe richtig zu."}
          pairs={pairs}
          onNext={onNext}
        />
      );
    }

    case "sorting": {
      const items = question.sortItems ?? (question as Record<string, unknown>).items as string[];
      if (!items) return null;
      return (
        <StepSorting
          title={contentC1.title}
          body={contentC1.body}
          fragetext={question.fragetext ?? "Bringe die Elemente in die richtige Reihenfolge."}
          items={items}
          onNext={onNext}
        />
      );
    }

    case "fillin": {
      const fillin = question.fillin;
      if (!fillin) return null;
      return (
        <StepFillIn
          title={contentC1.title}
          body={contentC1.body}
          sentence={fillin.sentence}
          options={fillin.options}
          correctIndex={fillin.correctIndex}
          onNext={onNext}
        />
      );
    }

    case "sequencing": {
      const sequencing = question.sequencing;
      if (!sequencing) return null;
      return (
        <StepSequencing
          title={contentC1.title}
          body={contentC1.body}
          instruction={sequencing.instruction}
          items={sequencing.items}
          onNext={onNext}
        />
      );
    }

    case "categorize": {
      const categories = question.categories;
      const categoryItems = question.categoryItems ?? (question as Record<string, unknown>).items as typeof question.categoryItems;
      if (!categories || !categoryItems) return null;
      return (
        <StepCategorize
          title={contentC1.title}
          body={contentC1.body}
          categories={categories}
          items={categoryItems}
          onNext={onNext}
        />
      );
    }

    case "slider": {
      const slider = question?.slider;
      if (!slider) return null;
      return (
        <StepSlider
          title={contentC1.title}
          body={contentC1.body}
          instruction={slider.instruction}
          unit={slider.unit}
          min={slider.min}
          max={slider.max}
          step={slider.step}
          correctValue={slider.correctValue}
          tolerance={slider.tolerance}
          explanation={slider.explanation}
          onNext={onNext}
        />
      );
    }

    default:
      // Fallback: Einfache MC-artige Darstellung
      if (question?.optionen) {
        return (
          <StepMC
            title={contentC1.title}
            body={contentC1.body}
            fragetext={question.fragetext ?? contentC1.title}
            optionen={question.optionen}
            onNext={onNext}
          />
        );
      }
      return null;
  }
}
