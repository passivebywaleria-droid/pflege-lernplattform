/**
 * Lernergebnis-Tiefe (W10) — pure Kernlogik.
 *
 * Sichert die Bloom→Tiefe-Ableitung (berührt/geübt/geprüft) und das Gate
 * „jedes LE mind. geübt" inkl. by-design-Ausnahmen (motorisch/einstellung).
 */
import { describe, it, expect } from "vitest";
import {
  bloomToTiefe,
  deriveLeTiefe,
  meetsMinimum,
  gateLe,
  bilanz,
  TIEFE_RANK,
  type LernergebnisLite,
} from "../../scripts/lernergebnis-tiefe";

const le = (p: Partial<LernergebnisLite>): LernergebnisLite => ({
  id: "CE-LE-W1",
  text: "x",
  typ: "wissen",
  bloomStufe: 3,
  altersbezug: false,
  motorisch: false,
  ...p,
});

describe("bloomToTiefe", () => {
  it.each([
    [1, "berührt"],
    [2, "berührt"],
    [3, "geübt"],
    [4, "geübt"],
    [5, "geprüft"],
    [6, "geprüft"],
  ] as const)("Bloom %i → %s", (b, t) => expect(bloomToTiefe(b)).toBe(t));
});

describe("deriveLeTiefe", () => {
  it("leer → fehlt", () => expect(deriveLeTiefe([])).toBe("fehlt"));
  it("nur Bloom 1-2 → berührt", () => expect(deriveLeTiefe([1, 2])).toBe("berührt"));
  it("höchste Stufe gewinnt", () => {
    expect(deriveLeTiefe([2, 4])).toBe("geübt");
    expect(deriveLeTiefe([1, 2, 5])).toBe("geprüft");
  });
});

describe("meetsMinimum / TIEFE_RANK", () => {
  it("Rang fehlt<berührt<geübt<geprüft", () => {
    expect(TIEFE_RANK.fehlt).toBeLessThan(TIEFE_RANK["berührt"]);
    expect(TIEFE_RANK["berührt"]).toBeLessThan(TIEFE_RANK["geübt"]);
    expect(TIEFE_RANK["geübt"]).toBeLessThan(TIEFE_RANK["geprüft"]);
  });
  it("geübt erfüllt Minimum geübt", () => expect(meetsMinimum("geübt", "geübt")).toBe(true));
  it("berührt erfüllt Minimum geübt NICHT", () => expect(meetsMinimum("berührt", "geübt")).toBe(false));
});

describe("gateLe — Wissensziele", () => {
  it("Bloom-4-Step → PASS", () => {
    expect(gateLe(le({ typ: "wissen" }), [4]).status).toBe("PASS");
  });
  it("nur Bloom-2-Step → FAIL (nur berührt)", () => {
    const r = gateLe(le({ typ: "wissen" }), [2]);
    expect(r.status).toBe("FAIL");
    expect(r.erreichteTiefe).toBe("berührt");
  });
  it("kein Step → FAIL (fehlt)", () => {
    const r = gateLe(le({ typ: "wissen" }), []);
    expect(r.status).toBe("FAIL");
    expect(r.erreichteTiefe).toBe("fehlt");
  });
});

describe("gateLe — by-design-Ausnahmen", () => {
  it("motorisch mit Berührung → BY-DESIGN (kein FAIL)", () => {
    expect(gateLe(le({ motorisch: true }), [2]).status).toBe("BY-DESIGN");
  });
  it("motorisch ohne jeden Step → FAIL", () => {
    expect(gateLe(le({ motorisch: true }), []).status).toBe("FAIL");
  });
  it("einstellung mit Berührung → BY-DESIGN", () => {
    expect(gateLe(le({ typ: "einstellung" }), [1]).status).toBe("BY-DESIGN");
  });
  it("einstellung ohne Step → FAIL", () => {
    expect(gateLe(le({ typ: "einstellung" }), []).status).toBe("FAIL");
  });
});

describe("bilanz", () => {
  it("zählt Status + Tiefe-Verteilung", () => {
    const results = [
      gateLe(le({ id: "a", typ: "wissen" }), [4]), // PASS geübt
      gateLe(le({ id: "b", typ: "wissen" }), [2]), // FAIL berührt
      gateLe(le({ id: "c", typ: "wissen" }), []), // FAIL fehlt
      gateLe(le({ id: "d", motorisch: true }), [2]), // BY-DESIGN
    ];
    const b = bilanz(results);
    expect(b).toMatchObject({ total: 4, pass: 1, fail: 2, byDesign: 1, fehlt: 1 });
    // a[4]→geübt, b[2]+d[2]→berührt, c[]→fehlt
    expect(b.verteilung["geübt"]).toBe(1);
    expect(b.verteilung["berührt"]).toBe(2);
  });
});
