/**
 * Abschluss-Screen (specs/ENTWURF-ABSCHLUSS-SCREEN.md): Faustregeln-Recap +
 * ehrliche Schwächen-Zuordnung. Garantien: Anker-Regel identisch zur
 * Spickzettel-Verteilung, wacklige Bausteine zuerst, keine geratenen Schwächen.
 */

import { describe, it, expect } from "vitest";
import { sammleAbschlussDaten } from "@/lib/learn/abschluss-daten";
import type { ContentStep, Lernsituation, SituationsPhase } from "../../content/_types";

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

function wissen(stepId: string, titel: string, abruf?: string): ContentStep {
  return {
    stepId,
    phase: 1,
    stepType: "inlineWissen",
    bloomLevel: 2,
    kompetenzbereich: "I.4",
    quellen: [],
    praesentation: "amAnwendungsStep",
    contentC1: { title: titel, body: "" },
    inlineWissen: {
      storyAufhaenger: "s",
      kerntext: "k",
      faustregel: `Faustregel ${titel}`,
      faustregelAbruf: abruf,
      karteikarte: { vorderseite: "v", rueckseite: "r" },
    },
  } as unknown as ContentStep;
}

function situation(phasen: Array<ContentStep[]>): Lernsituation {
  return {
    situationId: "test-sit",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    titel: "Test",
    themen: [],
    spirale: 1,
    geschaetzteUE: 1,
    phasen: phasen.map(
      (steps, i): SituationsPhase => ({
        phaseId: `p${i}`,
        phase: "informieren",
        titel: `Phase ${i}`,
        kontext: "",
        kernSteps: steps,
        optionaleSteps: [],
        geschaetzteDauer: 5,
      })
    ),
    komplikationen: [],
    bausteinTrigger: [],
  } as unknown as Lernsituation;
}

describe("sammleAbschlussDaten", () => {
  it("sammelt alle Bausteine mit Faustregel und Abruf-Frage", () => {
    const sit = situation([[wissen("w1", "Erkennen", "Woran erkennst du X?"), mc("q1")]]);
    const daten = sammleAbschlussDaten(sit, new Map([["q1", true]]));
    expect(daten.bausteine).toHaveLength(1);
    expect(daten.bausteine[0].faustregel).toBe("Faustregel Erkennen");
    expect(daten.bausteine[0].abrufFrage).toBe("Woran erkennst du X?");
    // Kerntext wird wortgleich mitgegeben — die Karte darf nie beim Destillat enden
    expect(daten.bausteine[0].kerntext).toBe("k");
    expect(daten.bausteine[0].wacklig).toBe(false);
  });

  it("markiert Baustein als wacklig, wenn der Anker-Step (nächster Antwort-Step) falsch war", () => {
    const sit = situation([[mc("q1"), wissen("w1", "Erkennen"), mc("q2"), mc("q3")]]);
    const daten = sammleAbschlussDaten(
      sit,
      new Map([
        ["q1", false], // NICHT der Anker von w1 → darf w1 nicht wacklig machen
        ["q2", false], // Anker von w1
        ["q3", true],
      ])
    );
    expect(daten.bausteine[0].wacklig).toBe(true);
    expect(daten.wackligeTitel).toEqual(["Erkennen"]);
    expect(daten.falsch).toBe(2);
    expect(daten.beantwortet).toBe(3);
  });

  it("Fallback-Anker: kein Antwort-Step danach → der letzte davor zählt", () => {
    const sit = situation([[mc("q1"), wissen("w1", "Nachklapp")]]);
    const daten = sammleAbschlussDaten(sit, new Map([["q1", false]]));
    expect(daten.bausteine[0].wacklig).toBe(true);
  });

  it("sortiert wacklige Bausteine nach vorn, Rest in Original-Reihenfolge", () => {
    const sit = situation([
      [wissen("w1", "A"), mc("q1")],
      [wissen("w2", "B"), mc("q2"), wissen("w3", "C"), mc("q3")],
    ]);
    const daten = sammleAbschlussDaten(
      sit,
      new Map([
        ["q1", true],
        ["q2", true],
        ["q3", false], // Anker von w3
      ])
    );
    expect(daten.bausteine.map((b) => b.titel)).toEqual(["C", "A", "B"]);
  });

  it("ohne Antwort am Anker: Baustein NICHT wacklig (nie raten)", () => {
    const sit = situation([[wissen("w1", "A"), mc("q1")]]);
    const daten = sammleAbschlussDaten(sit, new Map());
    expect(daten.bausteine[0].wacklig).toBe(false);
    expect(daten.beantwortet).toBe(0);
  });
});
