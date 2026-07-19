/**
 * Adaptiv-v1: Recheck-Generator (Station ③) + Kernfakt-Register (Station ①).
 * Garantien: kein neuer Content (alle Texte wortgleich aus der Situation),
 * Spektrum-Transfer bevorzugt, TrueFalse-Fallback, Quelle 3 = null.
 *
 * @vitest-environment jsdom
 */

import { describe, it, expect, beforeEach, vi } from "vitest";
import { generiereRecheck } from "@/lib/adaptive/recheck-generator";
import {
  ladeRegister,
  markiereWackelig,
  markiereGefestigt,
  markiereRecheckGestellt,
  offeneRecheckKandidaten,
} from "@/lib/adaptive/kernfakt-register";
import type { ContentStep, Lernsituation, SituationsPhase } from "../../content/_types";

function mc(stepId: string, kernfaktId: string[], richtig: string, falsch: string): ContentStep {
  return {
    stepId,
    phase: 1,
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "I.4",
    quellen: [],
    kernfaktId,
    contentC1: { title: stepId, body: "" },
    question: {
      fragetext: "Frage?",
      optionen: [
        { text: richtig, isCorrect: true, explanation: "e" },
        { text: falsch, isCorrect: false, explanation: "e" },
      ],
    },
  } as unknown as ContentStep;
}

function baustein(stepId: string, kernfaktId: string[], spektrum: object[]): ContentStep {
  return {
    stepId,
    phase: 1,
    stepType: "inlineWissen",
    bloomLevel: 2,
    kompetenzbereich: "I.4",
    quellen: [],
    kernfaktId,
    contentC1: { title: "Baustein", body: "" },
    inlineWissen: {
      storyAufhaenger: "s",
      kerntext: "k",
      faustregel: "Die Faustregel.",
      faustregelB1: "Die Faustregel (B1).",
      spektrum,
      karteikarte: { vorderseite: "v", rueckseite: "r" },
    },
  } as unknown as ContentStep;
}

function situation(steps: ContentStep[]): Lernsituation {
  return {
    situationId: "test-sit",
    ceId: "ce-06",
    situationsTyp: "akutsituation",
    titel: "Test",
    themen: [],
    spirale: 1,
    geschaetzteUE: 1,
    phasen: [
      {
        phaseId: "p1",
        phase: "informieren",
        titel: "P",
        kontext: "",
        kernSteps: steps,
        optionaleSteps: [],
        geschaetzteDauer: 5,
      } as SituationsPhase,
    ],
    komplikationen: [],
    bausteinTrigger: [],
  } as unknown as Lernsituation;
}

const SPEKTRUM = [
  {
    patientName: "Fall A",
    hauptfaktor: "Stillstand",
    kurzbeschreibung: "Keine Reaktion, nur einzelnes Schnappen nach Luft.",
    kurzbeschreibungB1: "Keine Reaktion. Nur einzelnes Schnappen nach Luft.",
  },
  {
    patientName: "Fall B",
    hauptfaktor: "erhaltene Atmung",
    kurzbeschreibung: "Bewusstlos, aber der Brustkorb hebt sich ruhig und gleichmäßig.",
  },
];

describe("generiereRecheck", () => {
  it("Quelle 1: baut Spektrum-Transfer (Szenario wortgleich, Etiketten als Optionen)", () => {
    const sit = situation([baustein("w1", ["F-01"], SPEKTRUM), mc("q1", ["F-01"], "R", "F")]);
    const frage = generiereRecheck(sit, "F-01", false);
    expect(frage?.art).toBe("spektrum");
    // Szenario ist eine der wortgleichen kurzbeschreibungen
    expect(SPEKTRUM.map((s) => s.kurzbeschreibung)).toContain(frage!.szenario);
    // richtige Option = das Etikett des Szenario-Eintrags
    const eintrag = SPEKTRUM.find((s) => s.kurzbeschreibung === frage!.szenario)!;
    expect(frage!.optionen[frage!.richtigIndex]).toBe(eintrag.hauptfaktor);
    expect(frage!.faustregel).toBe("Die Faustregel.");
  });

  it("Quelle 1 überspringt Einträge, deren Beschreibung ihr Etikett verrät", () => {
    const verraeterisch = [
      {
        patientName: "Fall A",
        hauptfaktor: "Stillstand",
        kurzbeschreibung: "Das ist ein Stillstand mit Schnappatmung.", // enthält Etikett
      },
      SPEKTRUM[1],
    ];
    const sit = situation([baustein("w1", ["F-01"], verraeterisch)]);
    const frage = generiereRecheck(sit, "F-01", false);
    // Nur Fall B ist als Szenario zulässig
    expect(frage?.szenario).toBe(SPEKTRUM[1].kurzbeschreibung);
  });

  it("B1 nutzt kurzbeschreibungB1, fällt sonst auf C1 zurück", () => {
    const sit = situation([baustein("w1", ["F-01"], SPEKTRUM)]);
    const frage = generiereRecheck(sit, "F-01", true);
    expect([SPEKTRUM[0].kurzbeschreibungB1, SPEKTRUM[1].kurzbeschreibung]).toContain(
      frage!.szenario
    );
  });

  it("Quelle 2: TrueFalse aus wortgleicher Option, wenn kein Spektrum existiert", () => {
    const sit = situation([mc("q1", ["F-02"], "Die richtige Option.", "Die falsche Option.")]);
    const frage = generiereRecheck(sit, "F-02", false);
    expect(frage?.art).toBe("richtigOption");
    // Aussage ist wortgleich eine der beiden Optionen, richtigIndex passt dazu
    if (frage!.richtigIndex === 0) {
      expect(frage!.szenario).toBe("Die richtige Option.");
    } else {
      expect(frage!.szenario).toBe("Die falsche Option.");
    }
  });

  it("Quelle 3: kein Material → null", () => {
    const sit = situation([]);
    expect(generiereRecheck(sit, "F-99", false)).toBeNull();
  });

  it("schneidet den Handlungsteil nach dem Gedankenstrich ab (Retrieval statt Ablesen)", () => {
    const mitHandlung = [
      {
        patientName: "Fall A",
        hauptfaktor: "Stillstand",
        kurzbeschreibung: "Keine Reaktion und nur einzelnes Schnappen nach Luft — sofort reanimieren.",
      },
      SPEKTRUM[1],
    ];
    const sit = situation([baustein("w1", ["F-01"], mitHandlung)]);
    const frage = generiereRecheck(sit, "F-01", false);
    expect(frage!.szenario).not.toContain("sofort reanimieren");
  });
});

describe("kernfakt-register", () => {
  beforeEach(() => {
    // Repo-jsdom stellt kein vollständiges Storage bereit → Map-Stub
    // (gleiches Muster wie tests/components/spickzettel.test.tsx).
    const store = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    });
  });

  it("wackelig → Kandidat; gefestigt/recheckGestellt → kein Kandidat mehr", () => {
    let reg = markiereWackelig("sit", ["F-01", "F-02"], "q1", "raten");
    expect(offeneRecheckKandidaten(reg)).toEqual(["F-01", "F-02"]);

    markiereRecheckGestellt("sit", "F-01");
    reg = ladeRegister("sit");
    expect(offeneRecheckKandidaten(reg)).toEqual(["F-02"]);

    reg = markiereGefestigt("sit", "F-02");
    expect(offeneRecheckKandidaten(reg)).toEqual([]);
    expect(reg["F-02"].status).toBe("gefestigt");
  });

  it("erneut falsch nach gefestigt → wieder wackelig, aber recheckGestellt bleibt (max 1)", () => {
    markiereWackelig("sit", ["F-01"], "q1");
    markiereRecheckGestellt("sit", "F-01");
    markiereGefestigt("sit", "F-01");
    const reg = markiereWackelig("sit", ["F-01"], "q5");
    expect(reg["F-01"].status).toBe("wackelig");
    expect(reg["F-01"].recheckGestellt).toBe(true);
    expect(offeneRecheckKandidaten(reg)).toEqual([]);
  });
});
