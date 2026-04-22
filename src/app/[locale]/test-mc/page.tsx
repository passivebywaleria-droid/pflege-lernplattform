"use client";

import { useState } from "react";
import { StepMC } from "@/components/learn/step-mc";

const SAMPLE_OPTIONEN = [
  {
    text: "Lagerungswechsel alle 2 Stunden",
    isCorrect: true,
    explanation: "Regelmäßige Umlagerung entlastet Druckstellen und ist die wichtigste Maßnahme zur Dekubitus-Prophylaxe.",
  },
  {
    text: "Tägliches Eincremen mit Franzbranntwein",
    isCorrect: false,
    explanation: "Franzbranntwein trocknet die Haut aus und erhöht das Dekubitus-Risiko — daher kontraindiziert.",
  },
  {
    text: "Bettlägerige Patienten möglichst ruhig halten",
    isCorrect: false,
    explanation: "Immobilität ist ein Hauptrisikofaktor. Bewegungsförderung ist essenziell.",
  },
  {
    text: "Hautinspektion nur bei Beschwerden",
    isCorrect: false,
    explanation: "Die Haut muss täglich systematisch inspiziert werden — auch ohne Beschwerden.",
  },
];

export default function TestMCPage() {
  const [step, setStep] = useState(0);

  return (
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--lern-bg-primary, #fafaf9)" }}
    >
      {/* Header */}
      <div className="shrink-0 px-4 pt-3 pb-1 text-center">
        <p className="text-xs" style={{ color: "var(--lern-text-tertiary, #8e8e93)" }}>
          test-mc — StepMC + AnswerSheet
        </p>
      </div>

      {/* Step Content — füllt restliche Höhe */}
      <div className="flex-1 min-h-0 px-4 pb-4 max-w-md w-full mx-auto">
        {step === 0 ? (
          <StepMC
            title="Dekubitus-Prophylaxe"
            body="Herr Müller, 78 Jahre, liegt seit 3 Tagen bettlägerig nach einer Hüft-OP."
            fragetext="Welche Maßnahme ist die wichtigste zur Vorbeugung eines Dekubitus?"
            optionen={SAMPLE_OPTIONEN}
            bloomLevel={2}
            onNext={() => setTimeout(() => setStep(1), 400)}
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-center gap-4">
            <div className="rounded-2xl border border-[#6B8F71]/30 bg-[#6B8F71]/5 p-6 text-center space-y-3 w-full">
              <p className="text-2xl">🎉</p>
              <p className="font-semibold text-[#6B8F71]">Weiter funktioniert!</p>
              <button
                onClick={() => setStep(0)}
                className="rounded-xl px-4 py-2 text-sm font-medium text-white"
                style={{ backgroundColor: "#C4877F" }}
              >
                Nochmal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
