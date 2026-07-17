/**
 * Option A: Verteilung verlagerter Wissens-Bausteine an Antwort-Steps.
 * Garantie: Kein Baustein geht verloren (Vollständigkeit = Pflicht).
 */

import { describe, it, expect } from "vitest";
import { verteileSpickzettel } from "@/lib/learn/spickzettel-verteilung";
import type { ContentStep } from "../../content/_types";

function mc(stepId: string): ContentStep {
  return {
    stepId,
    phase: 1,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "I.4",
    quellen: [],
    contentC1: { title: stepId, body: "" },
    question: { fragetext: "Frage?" },
  } as unknown as ContentStep;
}

function wissen(stepId: string, verlagert: boolean): ContentStep {
  return {
    stepId,
    phase: 1,
    stepType: "inlineWissen",
    bloomLevel: 2,
    kompetenzbereich: "I.4",
    quellen: [],
    praesentation: verlagert ? "amAnwendungsStep" : undefined,
    contentC1: { title: stepId, body: "" },
    inlineWissen: {
      storyAufhaenger: "s",
      kerntext: "k",
      faustregel: "f",
      karteikarte: { vorderseite: "v", rueckseite: "r" },
    },
  } as unknown as ContentStep;
}

describe("verteileSpickzettel", () => {
  it("hängt verlagerte Bausteine an den NÄCHSTEN Antwort-Step", () => {
    const { sichtbareSteps, spickzettel } = verteileSpickzettel([
      mc("q1"),
      wissen("w1", true),
      mc("q2"),
      mc("q3"),
    ]);
    expect(sichtbareSteps.map((s) => s.stepId)).toEqual(["q1", "q2", "q3"]);
    expect(spickzettel.get("q2")?.map((s) => s.stepId)).toEqual(["w1"]);
    expect(spickzettel.has("q1")).toBe(false);
  });

  it("Fallback: nach dem letzten Antwort-Step → hängt am VORHERIGEN", () => {
    const { sichtbareSteps, spickzettel } = verteileSpickzettel([
      mc("q1"),
      wissen("w1", true),
    ]);
    expect(sichtbareSteps.map((s) => s.stepId)).toEqual(["q1"]);
    expect(spickzettel.get("q1")?.map((s) => s.stepId)).toEqual(["w1"]);
  });

  it("ohne praesentation-Flag bleibt der Baustein eigener Screen (Default)", () => {
    const { sichtbareSteps, spickzettel } = verteileSpickzettel([
      mc("q1"),
      wissen("w1", false),
      mc("q2"),
    ]);
    expect(sichtbareSteps.map((s) => s.stepId)).toEqual(["q1", "w1", "q2"]);
    expect(spickzettel.size).toBe(0);
  });

  it("Phase ganz ohne Antwort-Steps: Baustein bleibt sichtbar (geht nie verloren)", () => {
    const reinerLeseStep = {
      ...wissen("text-1", false),
      stepType: "text",
    } as unknown as ContentStep;
    const { sichtbareSteps, spickzettel } = verteileSpickzettel([
      reinerLeseStep,
      wissen("w1", true),
    ]);
    expect(sichtbareSteps.map((s) => s.stepId)).toEqual(["text-1", "w1"]);
    expect(spickzettel.size).toBe(0);
  });

  it("mehrere Bausteine vor demselben Antwort-Step: Reihenfolge bleibt", () => {
    const { spickzettel } = verteileSpickzettel([
      wissen("w1", true),
      wissen("w2", true),
      mc("q1"),
    ]);
    expect(spickzettel.get("q1")?.map((s) => s.stepId)).toEqual(["w1", "w2"]);
  });
});
