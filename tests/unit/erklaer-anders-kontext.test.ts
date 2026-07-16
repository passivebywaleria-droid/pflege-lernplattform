/**
 * RAG-Kontext für „Erklär mir das anders" — baut Lernstoff aus Step-Erklärungen
 * + inlineWissen-Bausteinen (priorisiert nach kernfaktId-Überlappung).
 */

import { describe, it, expect } from "vitest";
import { baueErklaerKontext } from "@/lib/ai/erklaer-anders-kontext";
import type { ContentStep, Lernsituation } from "../../content/_types";

function mcStep(stepId: string, kernfaktId: string[]): ContentStep {
  return {
    stepId,
    phase: 1,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "I.4",
    quellen: ["Test"],
    kernfaktId,
    contentC1: {
      title: "Atmet er noch?",
      body: "Herr W. reagiert nicht und schnappt nach Luft.",
    },
    question: {
      fragetext: "Wie wertest du die schnappende Atmung?",
      optionen: [
        {
          text: "Stabile Seitenlage",
          isCorrect: false,
          explanation: "Schnappatmung ist keine normale Atmung.",
        },
        {
          text: "Herz-Kreislauf-Stillstand annehmen",
          isCorrect: true,
          explanation: "Keine Reaktion + keine normale Atmung = Stillstand.",
        },
      ],
    },
  } as unknown as ContentStep;
}

function wissenStep(
  stepId: string,
  kernfaktId: string[],
  kerntext: string
): ContentStep {
  return {
    stepId,
    phase: 1,
    stepType: "inlineWissen",
    bloomLevel: 2,
    kompetenzbereich: "I.4",
    quellen: ["Test"],
    kernfaktId,
    contentC1: { title: `Baustein ${stepId}`, body: "" },
    inlineWissen: {
      storyAufhaenger: "Szene.",
      kerntext,
      faustregel: `Faustregel zu ${stepId}.`,
      karteikarte: { vorderseite: "V", rueckseite: "R" },
    },
  } as unknown as ContentStep;
}

function situation(steps: ContentStep[]): Lernsituation {
  return {
    situationId: "ls-test",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    titel: "Test",
    themen: [],
    spirale: 1,
    geschaetzteUE: 1,
    phasen: [
      {
        phase: "erkennen",
        kontext: "",
        kernSteps: steps,
        optionaleSteps: [],
      },
    ],
    komplikationen: [],
    bausteinTrigger: [],
  } as unknown as Lernsituation;
}

describe("baueErklaerKontext", () => {
  it("liefert stepGefunden=false bei unbekannter stepId", () => {
    const sit = situation([mcStep("step-a", ["F-01"])]);
    const result = baueErklaerKontext(sit, "gibt-es-nicht");
    expect(result.stepGefunden).toBe(false);
    expect(result.lernstoff).toBe("");
  });

  it("enthält Frage, richtige und falsche Erklärung des Ziel-Steps", () => {
    const sit = situation([mcStep("step-a", ["F-01"])]);
    const result = baueErklaerKontext(sit, "step-a");
    expect(result.stepGefunden).toBe(true);
    expect(result.lernstoff).toContain("Wie wertest du die schnappende Atmung?");
    expect(result.lernstoff).toContain(
      "Keine Reaktion + keine normale Atmung = Stillstand."
    );
    expect(result.lernstoff).toContain("Schnappatmung ist keine normale Atmung.");
  });

  it("priorisiert Wissens-Bausteine mit kernfaktId-Überlappung", () => {
    const sit = situation([
      mcStep("step-a", ["F-01", "F-02"]),
      wissenStep("w-fremd", ["F-99"], "Fremder Kerntext ohne Überlappung."),
      wissenStep("w-passend", ["F-01"], "Passender Kerntext zur Schnappatmung."),
    ]);
    const result = baueErklaerKontext(sit, "step-a");
    const posPassend = result.lernstoff.indexOf("Passender Kerntext");
    const posFremd = result.lernstoff.indexOf("Fremder Kerntext");
    expect(posPassend).toBeGreaterThan(-1);
    expect(posFremd).toBeGreaterThan(-1);
    expect(posPassend).toBeLessThan(posFremd);
  });

  it("löst vollqualifizierte kernfaktIds (thema/F-01) auf", () => {
    const sit = situation([
      mcStep("step-a", ["reanimation-bls/F-01"]),
      wissenStep("w-fremd", ["F-99"], "Fremder Kerntext."),
      wissenStep("w-passend", ["F-01"], "Passender Kerntext."),
    ]);
    const result = baueErklaerKontext(sit, "step-a");
    expect(result.lernstoff.indexOf("Passender Kerntext")).toBeLessThan(
      result.lernstoff.indexOf("Fremder Kerntext")
    );
  });

  it("respektiert das Zeichen-Budget", () => {
    const langerText = "x".repeat(3000);
    const sit = situation([
      mcStep("step-a", ["F-01"]),
      wissenStep("w-1", ["F-01"], langerText),
      wissenStep("w-2", ["F-01"], langerText),
      wissenStep("w-3", ["F-01"], langerText),
    ]);
    const result = baueErklaerKontext(sit, "step-a", 4000);
    expect(result.lernstoff.length).toBeLessThanOrEqual(4000);
  });
});
