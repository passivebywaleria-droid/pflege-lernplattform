/**
 * Standards-Currency-Check (W6 / Teil D) — pure Kernlogik.
 *
 * Sichert: veraltete Normen werden autoritativ gefangen, im KORREKTIVEN/
 * historischen Kontext aber NICHT (sonst feuert der Check auf den eigenen
 * Erklärtext). Hätte §1906a→§1831 (W7) automatisch gefangen.
 */
import { describe, it, expect } from "vitest";
import {
  scanTextForOutdatedNorms,
  loadCurrencyRegistry,
  KORREKTIV_MARKER_RE,
  type NormEntry,
} from "../../scripts/standards-currency-check";

const REG: NormEntry[] = [
  {
    id: "FEM-BGB-1906",
    norm: "§ 1906 / § 1906a BGB",
    pattern: "§\\s*1906\\s*a?\\b",
    status: "veraltet",
    ersetztDurch: "§ 1831 BGB",
    datumAbloesung: "2023-01-01",
    grund: "Betreuungsrechtsreform 2023.",
    severity: "HOCH",
    beleg: { quelle: "BGB § 1831", zitat: "frueher § 1906" },
  },
];

describe("scanTextForOutdatedNorms", () => {
  it("fängt §1906a autoritativ verwendet", () => {
    const hits = scanTextForOutdatedNorms(
      "Fixierung ist nur mit richterlicher Genehmigung (§ 1906a BGB) zulässig.",
      REG
    );
    expect(hits).toHaveLength(1);
    expect(hits[0].id).toBe("FEM-BGB-1906");
    expect(hits[0].severity).toBe("HOCH");
    expect(hits[0].ersetztDurch).toBe("§ 1831 BGB");
    expect(hits[0].line).toBe(1);
  });

  it("fängt auch §1906 ohne 'a'", () => {
    const hits = scanTextForOutdatedNorms("geregelt in § 1906 BGB Abs. 4", REG);
    expect(hits).toHaveLength(1);
    expect(hits[0].matched).toMatch(/1906/);
  });

  it("ignoriert KORREKTIVEN Kontext (vormals) — eigener Erklärtext", () => {
    const hits = scanTextForOutdatedNorms(
      "Maßnahme nach § 1831 Abs. 4 BGB (seit Betreuungsrechtsreform 2023; vormals § 1906 BGB).",
      REG
    );
    expect(hits).toHaveLength(0);
  });

  it("ignoriert 'abgelöst durch'-Lehrtext", () => {
    const hits = scanTextForOutdatedNorms(
      "§ 1906a BGB wurde abgelöst durch § 1831 BGB.",
      REG
    );
    expect(hits).toHaveLength(0);
  });

  it("ignoriert reine Kommentarzeilen", () => {
    const hits = scanTextForOutdatedNorms("  // historischer Verweis auf § 1906a BGB", REG);
    expect(hits).toHaveLength(0);
  });

  it("feuert NICHT auf die aktuelle Fassung §1831", () => {
    const hits = scanTextForOutdatedNorms("FeM-Genehmigung nach § 1831 BGB einholen.", REG);
    expect(hits).toHaveLength(0);
  });

  it("leere Registry → keine Treffer", () => {
    expect(scanTextForOutdatedNorms("§ 1906a BGB", [])).toHaveLength(0);
  });

  it("korrekte Zeilennummer bei mehrzeiligem Text", () => {
    const hits = scanTextForOutdatedNorms("Zeile1\nZeile2\nFEM nach § 1906a BGB", REG);
    expect(hits[0].line).toBe(3);
  });

  it("defektes Pattern crasht nicht", () => {
    const bad: NormEntry[] = [{ ...REG[0], pattern: "([" }];
    expect(() => scanTextForOutdatedNorms("text", bad)).not.toThrow();
  });
});

describe("KORREKTIV_MARKER_RE", () => {
  it.each(["vormals", "früher", "abgelöst", "ersetzt", "seit 2023", "Reform", "veraltet", "nicht mehr"])(
    "erkennt Korrektiv-Marker '%s'",
    (m) => expect(KORREKTIV_MARKER_RE.test(m)).toBe(true)
  );
  it("normaler Lehrtext ist kein Korrektiv-Marker", () => {
    expect(KORREKTIV_MARKER_RE.test("Fixierung braucht eine Genehmigung")).toBe(false);
  });
});

describe("Registry-Integrität (echte Datei)", () => {
  it("lädt und jede Norm ist belegt + gültiges Pattern", () => {
    const reg = loadCurrencyRegistry();
    expect(reg.length).toBeGreaterThan(0);
    for (const n of reg) {
      expect(n.beleg.quelle.length).toBeGreaterThan(0);
      expect(n.status).toBe("veraltet");
      expect(() => new RegExp(n.pattern, "gi")).not.toThrow();
    }
  });
});
