import { describe, it, expect } from "vitest";
import { klassifiziereZeit, zeitKonfidenz } from "@/lib/adaptive/antwortzeit";

describe("klassifiziereZeit", () => {
  describe("schnelle Typen (mc)", () => {
    it("< 2s = geraten", () => {
      expect(klassifiziereZeit(1500, "mc")).toBe("geraten");
    });

    it("2-5s = blitz", () => {
      expect(klassifiziereZeit(3000, "mc")).toBe("blitz");
    });

    it("5-15s = sicher", () => {
      expect(klassifiziereZeit(10000, "mc")).toBe("sicher");
    });

    it("15-30s = normal", () => {
      expect(klassifiziereZeit(20000, "mc")).toBe("normal");
    });

    it("> 30s = unsicher", () => {
      expect(klassifiziereZeit(35000, "mc")).toBe("unsicher");
    });
  });

  describe("langsame Typen (freetext) — Schwellen verdoppelt", () => {
    it("< 10s = blitz (statt 5s)", () => {
      expect(klassifiziereZeit(8000, "freetext")).toBe("blitz");
    });

    it("10-30s = sicher (statt 5-15s)", () => {
      expect(klassifiziereZeit(20000, "freetext")).toBe("sicher");
    });

    it("30-60s = normal (statt 15-30s)", () => {
      expect(klassifiziereZeit(45000, "freetext")).toBe("normal");
    });

    it("> 60s = unsicher (statt 30s)", () => {
      expect(klassifiziereZeit(65000, "freetext")).toBe("unsicher");
    });
  });

  describe("Grenzwerte", () => {
    it("exakt 2000ms bei MC = blitz (nicht geraten)", () => {
      // < 2000 ist geraten, >= 2000 ist blitz
      expect(klassifiziereZeit(2000, "mc")).toBe("blitz");
    });

    it("exakt 5000ms bei MC = sicher", () => {
      expect(klassifiziereZeit(5000, "mc")).toBe("sicher");
    });
  });
});

describe("zeitKonfidenz", () => {
  it("blitz = 1.0", () => {
    expect(zeitKonfidenz(3000, "mc")).toBe(1.0);
  });

  it("sicher = 0.8", () => {
    expect(zeitKonfidenz(10000, "mc")).toBe(0.8);
  });

  it("normal = 0.5", () => {
    expect(zeitKonfidenz(20000, "mc")).toBe(0.5);
  });

  it("unsicher = 0.3", () => {
    expect(zeitKonfidenz(35000, "mc")).toBe(0.3);
  });

  it("geraten = 0.1", () => {
    expect(zeitKonfidenz(1000, "mc")).toBe(0.1);
  });

  it("Konfidenz ist monoton fallend: blitz > sicher > normal > unsicher > geraten", () => {
    const blitz = zeitKonfidenz(3000, "mc");
    const sicher = zeitKonfidenz(10000, "mc");
    const normal = zeitKonfidenz(20000, "mc");
    const unsicher = zeitKonfidenz(35000, "mc");
    const geraten = zeitKonfidenz(1000, "mc");
    expect(blitz).toBeGreaterThan(sicher);
    expect(sicher).toBeGreaterThan(normal);
    expect(normal).toBeGreaterThan(unsicher);
    expect(unsicher).toBeGreaterThan(geraten);
  });
});
