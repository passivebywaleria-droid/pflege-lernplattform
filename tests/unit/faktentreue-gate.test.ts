/**
 * W3 — Faktentreue-Gate scharfschalten: Coverage-Berechnung, Modus-Entscheid,
 * Instrument-Auswertung und exit-Code-Logik (pure, kein IO).
 */
import { describe, it, expect } from "vitest";
import {
  computeCoverage,
  decideMode,
  evaluateInstrumente,
  gateExitCode,
  DEFAULT_COVERAGE_THRESHOLD,
} from "../../scripts/faktentreue-check";

describe("computeCoverage", () => {
  it("volle Deckung = 1.0", () => {
    expect(computeCoverage(25, 25)).toBe(1);
  });
  it("keine Themen → 0 (keine Division durch null)", () => {
    expect(computeCoverage(0, 0)).toBe(0);
  });
  it("teilweise Deckung", () => {
    expect(computeCoverage(7, 14)).toBe(0.5);
  });
  it("deckelt auf 1, wenn mehr Kernfakten als Themen", () => {
    expect(computeCoverage(30, 25)).toBe(1);
  });
});

describe("decideMode", () => {
  it("Coverage ≥ Schwelle → strict", () => {
    expect(decideMode({ coverage: 1 }).mode).toBe("strict");
    expect(decideMode({ coverage: DEFAULT_COVERAGE_THRESHOLD }).mode).toBe("strict");
  });
  it("Coverage < Schwelle → warn", () => {
    expect(decideMode({ coverage: 0 }).mode).toBe("warn");
    expect(decideMode({ coverage: 0.79 }).mode).toBe("warn");
  });
  it("--strict override schlägt niedrige Coverage", () => {
    expect(decideMode({ coverage: 0, override: "strict" }).mode).toBe("strict");
  });
  it("--warn override schlägt hohe Coverage", () => {
    expect(decideMode({ coverage: 1, override: "warn" }).mode).toBe("warn");
  });
  it("eigene Schwelle wird respektiert", () => {
    expect(decideMode({ coverage: 0.5, threshold: 0.4 }).mode).toBe("strict");
    expect(decideMode({ coverage: 0.5, threshold: 0.6 }).mode).toBe("warn");
  });
});

describe("evaluateInstrumente", () => {
  const basis = "der dnqp-standard nennt den schellong-test und die braden-skala.";
  it("trennt gedeckt/ungedeckt, case-insensitiv, sortiert", () => {
    const { gedeckt, ungedeckt } = evaluateInstrumente(["Schellong", "Braden", "Morse"], basis);
    expect(gedeckt).toEqual(["Braden", "Schellong"]);
    expect(ungedeckt).toEqual(["Morse"]);
  });
  it("leere Eingabe → leere Listen", () => {
    expect(evaluateInstrumente([], basis)).toEqual({ gedeckt: [], ungedeckt: [] });
  });
});

describe("gateExitCode", () => {
  it("strict + Lücke → 1", () => {
    expect(gateExitCode("strict", 3)).toBe(1);
  });
  it("strict ohne Lücke → 0", () => {
    expect(gateExitCode("strict", 0)).toBe(0);
  });
  it("warn + Lücke → 0 (sichtbar, aber nicht blockierend)", () => {
    expect(gateExitCode("warn", 5)).toBe(0);
  });
});
