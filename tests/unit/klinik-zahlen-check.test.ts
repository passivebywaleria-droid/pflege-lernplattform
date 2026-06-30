/**
 * W1 — Klinischer Zahlen-Validator: pure Kernlogik (Parsing, Alias-Match,
 * Autoritäts-Claim-Erkennung, Range-Validierung, Falldaten-Schutz).
 */
import { describe, it, expect } from "vitest";
import {
  analyzeText,
  parseValueAtStart,
  parseGermanNumber,
  aliasInWindow,
  normalizeForMatch,
  buildLineExempt,
  NORM_MARKER_RE,
  PED_KONTEXT_RE,
  type ReferenzWert,
} from "../../scripts/klinik-zahlen-check";

// ─── Test-DB (klein, deterministisch) ────────────────────────────────────────
const Q = { datei: "recherche/x.txt", zeile: 1, zitat: "z" };
const DB: ReferenzWert[] = [
  {
    id: "spo2-erw", groesse: "SpO2", physEinheit: "%", position: null,
    zielgruppe: "erwachsen", altersMarker: null,
    aliasse: ["spo2", "sauerstoffsättigung", "sättigung"],
    min: 93, max: 100, quelle: Q, hinweis: null,
  },
  {
    id: "rr-syst-erw", groesse: "Blutdruck systolisch", physEinheit: "mmHg",
    position: "systolisch", zielgruppe: "erwachsen", altersMarker: null,
    aliasse: ["blutdruck", "systolisch", "rr"], min: 100, max: 139, quelle: Q, hinweis: null,
  },
  {
    id: "rr-diast-erw", groesse: "Blutdruck diastolisch", physEinheit: "mmHg",
    position: "diastolisch", zielgruppe: "erwachsen", altersMarker: null,
    aliasse: ["blutdruck", "diastolisch", "rr"], min: 60, max: 89, quelle: Q, hinweis: null,
  },
  {
    id: "puls-erw", groesse: "Puls", physEinheit: "/min", position: null,
    zielgruppe: "erwachsen", altersMarker: null,
    aliasse: ["puls", "herzfrequenz", "hf"], min: 60, max: 100, quelle: Q, hinweis: null,
  },
  {
    id: "puls-kleinkind", groesse: "Puls Kleinkind", physEinheit: "/min", position: null,
    zielgruppe: "kind", altersMarker: "kleinkind",
    aliasse: ["puls", "herzfrequenz", "hf"], min: 100, max: 120, quelle: Q, hinweis: null,
  },
  {
    id: "temp-erw", groesse: "Körpertemperatur", physEinheit: "°C", position: null,
    zielgruppe: "erwachsen", altersMarker: null,
    aliasse: ["temperatur", "körpertemperatur"], min: 36.0, max: 37.5, quelle: Q, hinweis: null,
  },
  {
    id: "bz-mgdl", groesse: "Blutzucker", physEinheit: "mg/dl", position: null,
    zielgruppe: "erwachsen", altersMarker: null,
    aliasse: ["blutzucker", "blutglukose"], min: null, max: 100, quelle: Q, hinweis: null,
  },
];

// ─── parseGermanNumber ────────────────────────────────────────────────────────
describe("parseGermanNumber", () => {
  it("Komma-Dezimal", () => expect(parseGermanNumber("36,5")).toBe(36.5));
  it("Punkt-Dezimal", () => expect(parseGermanNumber("37.5")).toBe(37.5));
  it("Ganzzahl", () => expect(parseGermanNumber("120")).toBe(120));
});

// ─── normalizeForMatch ────────────────────────────────────────────────────────
describe("normalizeForMatch", () => {
  it("Subscript-2 → 2 (SpO₂)", () => expect(normalizeForMatch("SpO₂")).toBe("spo2"));
  it("lowercased", () => expect(normalizeForMatch("Normwert")).toBe("normwert"));
});

// ─── parseValueAtStart ────────────────────────────────────────────────────────
describe("parseValueAtStart", () => {
  it("Prozent einzeln", () => {
    expect(parseValueAtStart("95 %")).toMatchObject({ unit: "%", values: [95] });
  });
  it("Prozent-Range", () => {
    expect(parseValueAtStart("95-100 %")).toMatchObject({ unit: "%", values: [95, 100] });
  });
  it("mmHg-Paar einzeln", () => {
    const p = parseValueAtStart("120/80 mmHg");
    expect(p?.unit).toBe("mmHg");
    expect(p?.syst).toEqual([120]);
    expect(p?.diast).toEqual([80]);
  });
  it("mmHg-Paar mit Ranges (120–129/80–89)", () => {
    const p = parseValueAtStart("120–129/80–89 mmHg");
    expect(p?.syst).toEqual([120, 129]);
    expect(p?.diast).toEqual([80, 89]);
  });
  it("/min mit Wort (Atemzüge/min)", () => {
    expect(parseValueAtStart("14–18 Atemzüge/min")).toMatchObject({ unit: "/min", values: [14, 18] });
  });
  it("/min ohne Wort", () => {
    expect(parseValueAtStart("142/min")).toMatchObject({ unit: "/min", values: [142] });
  });
  it("°C mit Komma-Dezimal + bis", () => {
    expect(parseValueAtStart("36,5 bis 37,5 °C")).toMatchObject({ unit: "°C", values: [36.5, 37.5] });
  });
  it("mg/dl Range", () => {
    expect(parseValueAtStart("20-40 mg/dl")).toMatchObject({ unit: "mg/dl", values: [20, 40] });
  });
  it("kein bekannter Einheits-Anker → null", () => {
    expect(parseValueAtStart("5 Patienten")).toBeNull();
  });
});

// ─── aliasInWindow ────────────────────────────────────────────────────────────
describe("aliasInWindow", () => {
  it("Kurz-Token mit Wortgrenze (rr) trifft 'rr 120'", () => {
    expect(aliasInWindow("rr", normalizeForMatch("der rr 120"))).toBe(true);
  });
  it("Kurz-Token (rr) trifft NICHT in 'Herr'", () => {
    expect(aliasInWindow("rr", normalizeForMatch("Herr Müller"))).toBe(false);
  });
  it("spo2 trifft normalisiertes SpO₂", () => {
    expect(aliasInWindow("spo2", normalizeForMatch("SpO₂ liegt"))).toBe(true);
  });
  it("Langwort als Substring", () => {
    expect(aliasInWindow("blutdruck", normalizeForMatch("der Blutdruckwert"))).toBe(true);
  });
});

// ─── NORM_MARKER_RE ───────────────────────────────────────────────────────────
describe("NORM_MARKER_RE", () => {
  const has = (s: string) => new RegExp(NORM_MARKER_RE.source, "i").test(s);
  it("trifft Normwert/Normbereich/physiologisch + Suffixe", () => {
    expect(has("Normwert")).toBe(true);
    expect(has("Normbereichs")).toBe(true);
    expect(has("physiologischer")).toBe(true);
    expect(has("Normaltemperatur")).toBe(true);
  });
  it("trifft NICHT bloßes 'normal'", () => {
    expect(has("Das ist normal entwickelt")).toBe(false);
  });
});

// ─── PED_KONTEXT_RE ───────────────────────────────────────────────────────────
describe("PED_KONTEXT_RE", () => {
  it("Kleinkind / Säugling / Kinder", () => {
    expect(PED_KONTEXT_RE.test("für Kleinkinder")).toBe(true);
    expect(PED_KONTEXT_RE.test("beim Säugling")).toBe(true);
  });
  it("kein Kinder-Kontext bei Erwachsenen-Text", () => {
    expect(PED_KONTEXT_RE.test("beim erwachsenen Patienten")).toBe(false);
  });
});

// ─── analyzeText: Kern-Verhalten ──────────────────────────────────────────────
describe("analyzeText — Autoritäts-Claims", () => {
  it("korrekter Normwert passt → kein Finding", () => {
    const r = analyzeText("Die SpO₂ — Normwert ≥ 95 %.", DB);
    expect(r.findings).toHaveLength(0);
    expect(r.claimsChecked).toBe(1);
  });

  it("falsch gelehrter SpO2-Normwert (80 %) → Finding", () => {
    const r = analyzeText("Der SpO₂-Normwert liegt bei 80 %.", DB);
    expect(r.findings).toHaveLength(1);
    expect(r.findings[0].refId).toBe("spo2-erw");
    expect(r.findings[0].badValues).toEqual([80]);
  });

  it("falsch gelehrter Blutdruck-Normwert (160/100) → Finding für syst UND diast", () => {
    const r = analyzeText("Physiologischer Blutdruck: 160/100 mmHg.", DB);
    const ids = r.findings.map((f) => f.refId).sort();
    expect(ids).toEqual(["rr-diast-erw", "rr-syst-erw"]);
  });

  it("korrekter Blutdruck-Normbereich (120–129/80–89) → kein Finding", () => {
    const r = analyzeText("Physiologischer Blutdruck beim Erwachsenen: 120–129/80–89 mmHg.", DB);
    expect(r.findings).toHaveLength(0);
  });
});

describe("analyzeText — Falldaten-Schutz (der kritische Edge-Case)", () => {
  it("Falldaten ohne Norm-Marker werden NICHT geprüft (RR 90/58)", () => {
    const r = analyzeText("Lukas' Vitalwerte bei Aufnahme: RR 90/58 mmHg, SpO₂ 98 %.", DB);
    expect(r.findings).toHaveLength(0);
    expect(r.claimsChecked).toBe(0);
  });

  it("Falldaten-Zahl in anderer Klausel (Komma) wird nicht an Marker gebunden", () => {
    // „Normbereich" gehört zur vorigen Aussage; „Fieber 38,2 °C" ist Falldatum.
    const r = analyzeText("im Normbereich, Fieber 38,2 °C bei Aufnahme.", DB);
    expect(r.findings).toHaveLength(0);
  });

  it("klinik-zahlen:ignore-Zeile wird übersprungen", () => {
    const text = "const x = 1; // klinik-zahlen:ignore SpO₂-Normwert 80 %";
    const r = analyzeText(text, DB, buildLineExempt(text));
    expect(r.findings).toHaveLength(0);
  });

  it("Kommentarzeile wird übersprungen", () => {
    const text = "  // SpO₂-Normwert liegt bei 80 %";
    const r = analyzeText(text, DB, buildLineExempt(text));
    expect(r.findings).toHaveLength(0);
  });
});

describe("analyzeText — Altersgruppen", () => {
  it("Kinder-Kontext nutzt pädiatrischen Eintrag (Kleinkind-Puls 100–120 korrekt)", () => {
    const r = analyzeText("Normbereich Puls beim Kleinkind: 110/min.", DB);
    expect(r.findings).toHaveLength(0);
    expect(r.claimsChecked).toBe(1); // gegen Kleinkind-Eintrag, nicht Erwachsen
  });

  it("Erwachsenen-Puls-Wert im Kinder-Kontext als Norm gelehrt → Finding (70 < 100)", () => {
    const r = analyzeText("Normbereich Puls beim Kleinkind: 70/min.", DB);
    expect(r.findings).toHaveLength(1);
    expect(r.findings[0].refId).toBe("puls-kleinkind");
  });

  it("Größe ohne pädiatrischen Beleg (Temp Kind) → Skip, kein Finding", () => {
    const r = analyzeText("Normaltemperatur beim Kleinkind liegt bei 40 °C.", DB);
    expect(r.findings).toHaveLength(0);
    expect(r.skips).toHaveLength(1);
    expect(r.skips[0].reason).toBe("kein-paediatrischer-normwert");
  });
});

describe("analyzeText — Identifikation/Abgrenzung", () => {
  it("Prozent-Norm ohne SpO2-Alias → ignoriert (nicht jede % ist SpO2)", () => {
    const r = analyzeText("Normwert: 50 % der Fälle.", DB);
    expect(r.findings).toHaveLength(0);
    expect(r.skips).toHaveLength(0);
  });

  it("offene Untergrenze (BZ min=null): hoher Wert flaggt, kein Unterlauf-Check", () => {
    const hoch = analyzeText("Blutzucker-Normwert nüchtern: 200 mg/dl.", DB);
    expect(hoch.findings).toHaveLength(1);
    expect(hoch.findings[0].badValues).toEqual([200]);
    const tief = analyzeText("Blutzucker-Normwert nüchtern: 5 mg/dl.", DB);
    expect(tief.findings).toHaveLength(0); // min=null → kein Unterlauf-Finding
  });

  it("Präalbumin '20-40 mg/dl' triggert KEINEN Blutzucker-Treffer (Alias-Schutz)", () => {
    const r = analyzeText("Präalbumin. Normwert: 20-40 mg/dl.", DB);
    expect(r.findings).toHaveLength(0);
    expect(r.skips).toHaveLength(0);
  });
});
