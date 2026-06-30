/**
 * W2 — Step-Level-Grounding: pure Kernlogik von scripts/step-grounding-check.ts.
 *
 * Prüft Parser, Referenz-Auflösung und die Auto-Strict-pro-Situation-Logik
 * ohne echten Content-Import (deterministisch, kein IO).
 */
import { describe, it, expect } from "vitest";
import {
  CLAIM_FREE_STEP_TYPES,
  isClaimBearing,
  parseKernfaktIds,
  parseRef,
  checkStepRefs,
  checkSituation,
  type FactIndex,
  type StepLike,
} from "../../scripts/step-grounding-check";

const factIndex: FactIndex = new Map([
  ["sturz-prophylaxe", new Set(["F-01", "F-08", "F-11"])],
  ["schmerz", new Set(["F-01", "F-02"])],
]);

describe("isClaimBearing / Whitelist", () => {
  it("claim-freie Typen sind nicht claim-tragend", () => {
    for (const t of CLAIM_FREE_STEP_TYPES) expect(isClaimBearing(t)).toBe(false);
  });
  it("mc/inlineWissen/sorting sind claim-tragend", () => {
    expect(isClaimBearing("mc")).toBe(true);
    expect(isClaimBearing("inlineWissen")).toBe(true);
    expect(isClaimBearing("sorting")).toBe(true);
  });
});

describe("parseKernfaktIds", () => {
  it("liest F-XX aus ### Headern, case-insensitiv normalisiert", () => {
    const md = [
      "# Kernfakten",
      "### F-01: Definition",
      "**Fakt:** ...",
      "#### F-08: Keine Fixierung",
      "### f-11: Interprofessionell", // lower-case Header
      "Kein Header: F-99 im Fließtext zählt nicht",
    ].join("\n");
    const ids = parseKernfaktIds(md);
    expect(ids).toEqual(new Set(["F-01", "F-08", "F-11"]));
    expect(ids.has("F-99")).toBe(false);
  });
});

describe("parseRef", () => {
  it("bare-Ref → Thema null", () => {
    expect(parseRef("F-08")).toEqual({ thema: null, fakt: "F-08" });
  });
  it("qualifizierte Ref → Thema + Fakt", () => {
    expect(parseRef("sturz-prophylaxe/F-08")).toEqual({ thema: "sturz-prophylaxe", fakt: "F-08" });
  });
  it("normalisiert Fakt auf Großschreibung + trimmt", () => {
    expect(parseRef(" sturz-prophylaxe/f-08 ")).toEqual({ thema: "sturz-prophylaxe", fakt: "F-08" });
  });
});

describe("checkStepRefs — Referenz-Integrität", () => {
  it("bare-Ref löst über themaPrimaer auf", () => {
    const step: StepLike = { stepId: "s1", stepType: "mc", themaPrimaer: "sturz-prophylaxe", kernfaktId: ["F-08"] };
    const { findings, hasValidRef } = checkStepRefs(step, factIndex, "sit");
    expect(findings).toEqual([]);
    expect(hasValidRef).toBe(true);
  });

  it("bare-Ref ohne themaPrimaer → DANGLING", () => {
    const step: StepLike = { stepId: "s2", stepType: "mc", kernfaktId: ["F-08"] };
    const { findings, hasValidRef } = checkStepRefs(step, factIndex, "sit");
    expect(hasValidRef).toBe(false);
    expect(findings).toHaveLength(1);
    expect(findings[0].kind).toBe("DANGLING_REF");
  });

  it("unbekanntes Thema → DANGLING", () => {
    const step: StepLike = { stepId: "s3", stepType: "mc", kernfaktId: ["unbekannt/F-01"] };
    const { findings } = checkStepRefs(step, factIndex, "sit");
    expect(findings[0].kind).toBe("DANGLING_REF");
    expect(findings[0].detail).toContain("keine Kernfakten-Datei");
  });

  it("nicht existierender F-XX → DANGLING", () => {
    const step: StepLike = { stepId: "s4", stepType: "mc", themaPrimaer: "schmerz", kernfaktId: ["F-99"] };
    const { findings } = checkStepRefs(step, factIndex, "sit");
    expect(findings[0].kind).toBe("DANGLING_REF");
    expect(findings[0].detail).toContain("existiert nicht");
  });

  it("qualifizierte Ref überschreibt themaPrimaer", () => {
    const step: StepLike = { stepId: "s5", stepType: "mc", themaPrimaer: "schmerz", kernfaktId: ["sturz-prophylaxe/F-11"] };
    const { findings, hasValidRef } = checkStepRefs(step, factIndex, "sit");
    expect(findings).toEqual([]);
    expect(hasValidRef).toBe(true);
  });
});

describe("checkSituation — Auto-Strict pro Situation", () => {
  const grounded: StepLike = { stepId: "g", stepType: "mc", themaPrimaer: "sturz-prophylaxe", kernfaktId: ["F-08"] };
  const ungrounded: StepLike = { stepId: "u", stepType: "mc", themaPrimaer: "sturz-prophylaxe" };
  const reflexion: StepLike = { stepId: "r", stepType: "reflection" };

  it("nicht adoptierte Situation (0 Groundings) → kein MISSING-Fehler", () => {
    const r = checkSituation("sit-a", [ungrounded, reflexion], factIndex);
    expect(r.adopted).toBe(false);
    expect(r.findings).toEqual([]);
  });

  it("adoptierte Situation → ungegroundeter claim-Step wird MISSING", () => {
    const r = checkSituation("sit-b", [grounded, ungrounded, reflexion], factIndex);
    expect(r.adopted).toBe(true);
    expect(r.claimBearingTotal).toBe(2); // reflection zählt nicht
    expect(r.grounded).toBe(1);
    const missing = r.findings.filter((f) => f.kind === "MISSING_GROUNDING");
    expect(missing).toHaveLength(1);
    expect(missing[0].stepId).toBe("u");
  });

  it("voll gegroundete Situation → PASS (0 Findings)", () => {
    const grounded2: StepLike = { stepId: "g2", stepType: "sorting", themaPrimaer: "sturz-prophylaxe", kernfaktId: ["F-01"] };
    const r = checkSituation("sit-c", [grounded, grounded2, reflexion], factIndex);
    expect(r.adopted).toBe(true);
    expect(r.findings).toEqual([]);
  });

  it("claim-freie Steps brauchen NIE Grounding (auch in adoptierter Situation)", () => {
    const r = checkSituation("sit-d", [grounded, reflexion], factIndex);
    expect(r.findings).toEqual([]);
  });

  it("Dangling-Ref ist auch in NICHT adoptierter Situation ein Fehler", () => {
    const broken: StepLike = { stepId: "b", stepType: "mc", themaPrimaer: "sturz-prophylaxe", kernfaktId: ["F-404"] };
    const r = checkSituation("sit-e", [broken, reflexion], factIndex);
    // adopted, weil broken eine (wenn auch kaputte) kernfaktId trägt
    expect(r.findings.some((f) => f.kind === "DANGLING_REF")).toBe(true);
  });

  it("--strict erzwingt Adoption auch ohne vorhandene Groundings", () => {
    const r = checkSituation("sit-f", [ungrounded], factIndex, /* globalStrict */ true);
    expect(r.adopted).toBe(true);
    expect(r.findings.filter((f) => f.kind === "MISSING_GROUNDING")).toHaveLength(1);
  });
});
