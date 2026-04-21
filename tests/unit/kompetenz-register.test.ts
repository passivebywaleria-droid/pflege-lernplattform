import { describe, it, expect } from "vitest";
import {
  berechneNeueStufe,
  updateKompetenz,
  istGemeistert,
  brauchtWiederholung,
  lernzielVonStep,
  kompetenzUebersicht,
  type KompetenzEintrag,
  type KompetenzRegister,
} from "@/lib/adaptive/kompetenz-register";
import type { StepAntwort } from "@/hooks/use-lern-fortschritt";

function makeEintrag(overrides: Partial<KompetenzEintrag> = {}): KompetenzEintrag {
  return {
    lernzielId: "ce01-le01-dekubitus",
    stufe: "unbekannt",
    richtigInFolge: 0,
    gesamtVersuche: 0,
    gesamtRichtig: 0,
    letzteAntwort: new Date().toISOString(),
    naechsteWiederholung: new Date().toISOString(),
    bloomMax: 0,
    ...overrides,
  };
}

function makeAntwort(overrides: Partial<StepAntwort> = {}): StepAntwort {
  return {
    stepId: "s1-03",
    stepType: "mc",
    correct: true,
    zeitMs: 8000, // "sicher" Bereich
    bloomLevel: 2,
    ...overrides,
  };
}

describe("berechneNeueStufe", () => {
  it("unbekannt → vertraut: 1× richtig (kein Raten)", () => {
    const eintrag = makeEintrag({ stufe: "unbekannt", richtigInFolge: 1 });
    const antwort = makeAntwort({ correct: true, zeitMs: 8000 });
    expect(berechneNeueStufe(eintrag, antwort)).toBe("vertraut");
  });

  it("versucht → vertraut: 1× richtig", () => {
    const eintrag = makeEintrag({ stufe: "versucht", richtigInFolge: 1 });
    const antwort = makeAntwort({ correct: true, zeitMs: 8000 });
    expect(berechneNeueStufe(eintrag, antwort)).toBe("vertraut");
  });

  it("vertraut → sicher: 2× richtig in Folge + schnell", () => {
    const eintrag = makeEintrag({ stufe: "vertraut", richtigInFolge: 2 });
    const antwort = makeAntwort({ correct: true, zeitMs: 4000 }); // blitz
    expect(berechneNeueStufe(eintrag, antwort)).toBe("sicher");
  });

  it("vertraut bleibt vertraut: 2× richtig aber langsam", () => {
    const eintrag = makeEintrag({ stufe: "vertraut", richtigInFolge: 2 });
    const antwort = makeAntwort({ correct: true, zeitMs: 25000 }); // normal
    expect(berechneNeueStufe(eintrag, antwort)).toBe("vertraut");
  });

  it("sicher → gemeistert: 2× richtig + Bloom 3+", () => {
    const eintrag = makeEintrag({ stufe: "sicher", richtigInFolge: 2, bloomMax: 3 });
    const antwort = makeAntwort({ correct: true, zeitMs: 8000, bloomLevel: 3 });
    expect(berechneNeueStufe(eintrag, antwort)).toBe("gemeistert");
  });

  it("gemeistert → sicher: 2× falsch in Folge", () => {
    const eintrag = makeEintrag({ stufe: "gemeistert", richtigInFolge: -2 });
    const antwort = makeAntwort({ correct: false, zeitMs: 10000 });
    expect(berechneNeueStufe(eintrag, antwort)).toBe("sicher");
  });

  it("vertraut → versucht: 2× falsch in Folge", () => {
    const eintrag = makeEintrag({ stufe: "vertraut", richtigInFolge: -2 });
    const antwort = makeAntwort({ correct: false, zeitMs: 10000 });
    expect(berechneNeueStufe(eintrag, antwort)).toBe("versucht");
  });

  it("Raten zählt nicht — Stufe bleibt gleich", () => {
    const eintrag = makeEintrag({ stufe: "vertraut", richtigInFolge: 0 });
    const antwort = makeAntwort({ correct: true, zeitMs: 1000, stepType: "mc" }); // geraten
    expect(berechneNeueStufe(eintrag, antwort)).toBe("vertraut");
  });

  it("null-Antwort (Text/Reflexion) — keine Änderung", () => {
    const eintrag = makeEintrag({ stufe: "sicher" });
    const antwort = makeAntwort({ correct: null, zeitMs: 5000 });
    expect(berechneNeueStufe(eintrag, antwort)).toBe("sicher");
  });
});

describe("updateKompetenz", () => {
  it("erstellt neuen Eintrag wenn undefined", () => {
    const antwort = makeAntwort({ correct: true, zeitMs: 8000 });
    const result = updateKompetenz(undefined, "lz-01", antwort);
    expect(result.lernzielId).toBe("lz-01");
    expect(result.stufe).toBe("vertraut");
    expect(result.gesamtVersuche).toBe(1);
    expect(result.gesamtRichtig).toBe(1);
  });

  it("aktualisiert bestehenden Eintrag", () => {
    const eintrag = makeEintrag({ stufe: "vertraut", gesamtVersuche: 3, gesamtRichtig: 2 });
    const antwort = makeAntwort({ correct: true, zeitMs: 8000 });
    const result = updateKompetenz(eintrag, "ce01-le01-dekubitus", antwort);
    expect(result.gesamtVersuche).toBe(4);
    expect(result.gesamtRichtig).toBe(3);
  });
});

describe("istGemeistert", () => {
  it("true bei gemeistert", () => {
    const register: KompetenzRegister = {
      "lz-01": makeEintrag({ lernzielId: "lz-01", stufe: "gemeistert" }),
    };
    expect(istGemeistert(register, "lz-01")).toBe(true);
  });

  it("false bei sicher", () => {
    const register: KompetenzRegister = {
      "lz-01": makeEintrag({ lernzielId: "lz-01", stufe: "sicher" }),
    };
    expect(istGemeistert(register, "lz-01")).toBe(false);
  });

  it("false bei unbekanntem Lernziel", () => {
    expect(istGemeistert({}, "nicht-vorhanden")).toBe(false);
  });
});

describe("lernzielVonStep", () => {
  it("nutzt lernziel wenn vorhanden", () => {
    expect(lernzielVonStep("s1-03", "dekubitus-definition")).toBe("dekubitus-definition");
  });

  it("nutzt leId als Fallback", () => {
    expect(lernzielVonStep("s1-03", undefined, "le-01")).toBe("le-01");
  });

  it("nutzt stepId als letzter Fallback", () => {
    expect(lernzielVonStep("s1-03")).toBe("s1-03");
  });
});

describe("kompetenzUebersicht", () => {
  it("zählt Stufen für LE-Prefix korrekt", () => {
    const register: KompetenzRegister = {
      "le01-a": makeEintrag({ lernzielId: "le01-a", stufe: "gemeistert" }),
      "le01-b": makeEintrag({ lernzielId: "le01-b", stufe: "sicher" }),
      "le01-c": makeEintrag({ lernzielId: "le01-c", stufe: "vertraut" }),
      "le02-a": makeEintrag({ lernzielId: "le02-a", stufe: "gemeistert" }),
    };
    const result = kompetenzUebersicht(register, "le01");
    expect(result.gesamt).toBe(3);
    expect(result.gemeistert).toBe(1);
    expect(result.sicher).toBe(1);
    expect(result.vertraut).toBe(1);
  });
});
