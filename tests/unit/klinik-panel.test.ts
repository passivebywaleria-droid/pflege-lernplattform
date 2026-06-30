/**
 * Adversariales Klinik-Panel (W6) — pure Kernlogik + Lens-Runner.
 *
 * Sichert: merge/dedup, Verdikt (K.O. bei HOCH), und die vier Lenses
 * (Arzneimittel, Recht, Grounding, Konsistenz) liefern literaturbelegte Befunde.
 */
import { describe, it, expect } from "vitest";
import {
  dedupKey,
  mergeFindings,
  panelVerdict,
  konsistenzFindings,
  lensArzneimittel,
  lensRecht,
  lensKonsistenz,
  SEVERITY_RANK,
  type PanelFinding,
} from "../../scripts/klinik-panel";
import type { ReferenzWert } from "../../scripts/klinik-zahlen-check";
import type { NormEntry } from "../../scripts/standards-currency-check";

const f = (p: Partial<PanelFinding>): PanelFinding => ({
  lens: "konsistenz",
  severity: "MITTEL",
  code: "X",
  title: "t",
  detail: "d",
  beleg: { quelle: "q" },
  ...p,
});

describe("dedupKey / mergeFindings", () => {
  it("identische Stelle+Code → ein Befund", () => {
    const a = f({ code: "DUP-STEPID", situationId: "s1", stepId: "x" });
    const b = f({ code: "DUP-STEPID", situationId: "s1", stepId: "x" });
    expect(dedupKey(a)).toBe(dedupKey(b));
    expect(mergeFindings([a, b])).toHaveLength(1);
  });

  it("behält bei Kollision die höhere Severity", () => {
    const lo = f({ code: "C", situationId: "s", severity: "NIEDRIG" });
    const hi = f({ code: "C", situationId: "s", severity: "HOCH" });
    const merged = mergeFindings([lo, hi]);
    expect(merged).toHaveLength(1);
    expect(merged[0].severity).toBe("HOCH");
  });

  it("verschiedene Stellen bleiben getrennt", () => {
    expect(mergeFindings([f({ stepId: "a" }), f({ stepId: "b" })])).toHaveLength(2);
  });

  it("sortiert nach Severity absteigend", () => {
    const merged = mergeFindings([
      f({ stepId: "1", severity: "NIEDRIG" }),
      f({ stepId: "2", severity: "HOCH" }),
      f({ stepId: "3", severity: "MITTEL" }),
    ]);
    expect(merged.map((x) => x.severity)).toEqual(["HOCH", "MITTEL", "NIEDRIG"]);
  });
});

describe("panelVerdict", () => {
  it("K.O. nur bei ≥1 HOCH", () => {
    expect(panelVerdict([f({ severity: "MITTEL" })]).ko).toBe(false);
    expect(panelVerdict([f({ severity: "HOCH" })]).ko).toBe(true);
  });
  it("zählt Severities + Beleg/Beschaffung", () => {
    const v = panelVerdict([
      f({ stepId: "1", severity: "HOCH", beleg: { quelle: "q" } }),
      f({ stepId: "2", severity: "MITTEL", beleg: null }),
    ]);
    expect(v).toMatchObject({ hoch: 1, mittel: 1, total: 2, belegt: 1, beschaffung: 1 });
  });
  it("leeres Panel → PASS", () => {
    expect(panelVerdict([]).ko).toBe(false);
  });
  it("SEVERITY_RANK ordnet HOCH>MITTEL>NIEDRIG", () => {
    expect(SEVERITY_RANK.HOCH).toBeGreaterThan(SEVERITY_RANK.MITTEL);
    expect(SEVERITY_RANK.MITTEL).toBeGreaterThan(SEVERITY_RANK.NIEDRIG);
  });
});

describe("Lens 4 — konsistenzFindings", () => {
  it("findet doppelte stepId", () => {
    const r = konsistenzFindings({
      situationId: "s1",
      patientId: "p1",
      steps: [{ stepId: "a" }, { stepId: "a" }, { stepId: "b" }],
    });
    const dup = r.filter((x) => x.code === "DUP-STEPID");
    expect(dup).toHaveLength(1);
    expect(dup[0].stepId).toBe("a");
    expect(dup[0].lens).toBe("konsistenz");
  });

  it("flaggt fremde patientId", () => {
    const r = konsistenzFindings({
      situationId: "s1",
      patientId: "p1",
      steps: [{ stepId: "a", patientId: "p2" }],
    });
    expect(r.some((x) => x.code === "PATIENT-MISMATCH")).toBe(true);
  });

  it("saubere Situation → keine Befunde", () => {
    expect(
      konsistenzFindings({
        situationId: "s1",
        patientId: "p1",
        steps: [{ stepId: "a", patientId: "p1" }, { stepId: "b" }],
      })
    ).toEqual([]);
  });

  it("ohne situations-patientId kein Mismatch-Check", () => {
    const r = konsistenzFindings({ situationId: "s1", steps: [{ stepId: "a", patientId: "px" }] });
    expect(r.some((x) => x.code === "PATIENT-MISMATCH")).toBe(false);
  });

  it("lensKonsistenz aggregiert über Situationen", () => {
    const r = lensKonsistenz([
      { situationId: "s1", patientId: "p1", steps: [{ stepId: "a" }, { stepId: "a" }] },
      { situationId: "s2", patientId: "p2", steps: [{ stepId: "c" }] },
    ]);
    expect(r).toHaveLength(1);
    expect(r[0].situationId).toBe("s1");
  });
});

describe("Lens 1 — lensArzneimittel (reuse W1)", () => {
  const db: ReferenzWert[] = [
    {
      id: "spo2",
      groesse: "Sauerstoffsättigung",
      physEinheit: "%",
      position: null,
      zielgruppe: "erwachsen",
      altersMarker: null,
      aliasse: ["SpO2", "Sauerstoffsättigung"],
      min: 90,
      max: 100,
      quelle: { datei: "recherche/x.md", zeile: 1, zitat: "SpO2 normal 95-100%" },
      hinweis: null,
    },
  ];

  it("flaggt falsch gelehrten Normwert als HOCH + literaturbelegt", () => {
    const r = lensArzneimittel(
      [{ file: "phase-x.ts", text: "Die SpO2 liegt im Normbereich bei 80 %." }],
      db
    );
    expect(r).toHaveLength(1);
    expect(r[0].severity).toBe("HOCH");
    expect(r[0].lens).toBe("arzneimittel");
    expect(r[0].beleg?.quelle).toContain("recherche/x.md");
  });

  it("korrekter Normwert → kein Befund", () => {
    const r = lensArzneimittel(
      [{ file: "phase-x.ts", text: "Die SpO2 liegt im Normbereich bei 96 %." }],
      db
    );
    expect(r).toHaveLength(0);
  });
});

describe("Lens 2 — lensRecht (reuse Currency)", () => {
  const reg: NormEntry[] = [
    {
      id: "FEM-BGB-1906",
      norm: "§ 1906a BGB",
      pattern: "§\\s*1906\\s*a?\\b",
      status: "veraltet",
      ersetztDurch: "§ 1831 BGB",
      datumAbloesung: "2023-01-01",
      grund: "Reform 2023.",
      severity: "HOCH",
      beleg: { quelle: "BGB § 1831" },
    },
  ];

  it("mappt veraltete Norm zu PanelFinding mit Beleg", () => {
    const r = lensRecht([{ file: "phase-r.ts", text: "geregelt in § 1906a BGB" }], reg);
    expect(r).toHaveLength(1);
    expect(r[0].lens).toBe("recht");
    expect(r[0].severity).toBe("HOCH");
    expect(r[0].beleg?.quelle).toBe("BGB § 1831");
  });
});
