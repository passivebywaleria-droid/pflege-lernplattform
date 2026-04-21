import { describe, it, expect } from "vitest";
import { berechneAchsen, achsenBeschreibung } from "@/lib/adaptive/lern-profil";
import type { StepAntwort, SchwachstellenKarte } from "@/hooks/use-lern-fortschritt";

function makeAntwort(overrides: Partial<StepAntwort> = {}): StepAntwort {
  return {
    stepId: "s1-01",
    stepType: "mc",
    correct: true,
    zeitMs: 8000,
    bloomLevel: 2,
    ...overrides,
  };
}

function makeSchwaeche(overrides: Partial<SchwachstellenKarte> = {}): SchwachstellenKarte {
  return {
    id: "sw-1",
    leId: "le-01",
    begriff: "Dekubitus",
    fragetext: "Was ist ein Dekubitus?",
    richtigeAntwort: "Druckgeschwür",
    falscheAntwort: "Bluterguss",
    erstelltAm: new Date().toISOString(),
    naechsteWiederholung: new Date(Date.now() - 86400000).toISOString(), // gestern fällig
    intervallTage: 1,
    ...overrides,
  };
}

describe("berechneAchsen", () => {
  it("gibt Default 3,3 bei leeren Antworten zurück", () => {
    const result = berechneAchsen([], [], 0, 0);
    expect(result.sprache).toBe(3);
    expect(result.fachwissen).toBe(3);
  });

  it("hoher Sprach-Score bei 0% B1-Toggle", () => {
    const antworten = Array.from({ length: 10 }, (_, i) =>
      makeAntwort({ stepId: `s${i}`, correct: true, bloomLevel: 4, zeitMs: 5000 })
    );
    const result = berechneAchsen(antworten, [], 0, 100);
    expect(result.sprache).toBeGreaterThanOrEqual(4);
  });

  it("niedriger Sprach-Score bei 50%+ B1-Toggle", () => {
    const antworten = Array.from({ length: 10 }, (_, i) =>
      makeAntwort({ stepId: `s${i}`, correct: false, bloomLevel: 4, zeitMs: 15000 })
    );
    const result = berechneAchsen(antworten, [], 50, 100);
    expect(result.sprache).toBeLessThanOrEqual(2);
  });

  it("Fachwissen sinkt bei vielen offenen Schwächen", () => {
    const antworten = [makeAntwort()];
    const ohneSchwaechen = berechneAchsen(antworten, [], 0, 10);
    const mitSchwaechen = berechneAchsen(
      antworten,
      Array.from({ length: 10 }, (_, i) => makeSchwaeche({ id: `sw-${i}` })),
      0,
      10,
    );
    expect(mitSchwaechen.fachwissen).toBeLessThan(ohneSchwaechen.fachwissen);
  });

  it("Werte sind immer im Bereich 1-5", () => {
    // Extremfall: alles falsch + langsam + viel B1
    const antworten = Array.from({ length: 20 }, (_, i) =>
      makeAntwort({ stepId: `s${i}`, correct: false, zeitMs: 50000, bloomLevel: 5 })
    );
    const schwaechen = Array.from({ length: 50 }, (_, i) => makeSchwaeche({ id: `sw-${i}` }));
    const result = berechneAchsen(antworten, schwaechen, 100, 20);
    expect(result.sprache).toBeGreaterThanOrEqual(1);
    expect(result.sprache).toBeLessThanOrEqual(5);
    expect(result.fachwissen).toBeGreaterThanOrEqual(1);
    expect(result.fachwissen).toBeLessThanOrEqual(5);
  });
});

describe("achsenBeschreibung", () => {
  it("gibt passende Labels zurück", () => {
    const result = achsenBeschreibung({ sprache: 1, fachwissen: 5, letzteBerechnung: "" });
    expect(result.sprache).toContain("B1");
    expect(result.fachwissen).toContain("Experte");
  });

  it("rundet auf nächste ganze Zahl", () => {
    const result = achsenBeschreibung({ sprache: 3.7, fachwissen: 2.3, letzteBerechnung: "" });
    expect(result.sprache).toContain("B2-C1");
    expect(result.fachwissen).toContain("Grundwissen");
  });
});
