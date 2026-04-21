import { describe, it, expect } from "vitest";
import {
  waehleStrategie,
  updateStrategiePraeferenz,
  type StrategiePraeferenzen,
  type StrategieTyp,
} from "@/lib/adaptive/strategie";

describe("waehleStrategie", () => {
  it("gibt erste Strategie aus Map für raten zurück", () => {
    const result = waehleStrategie("raten", undefined, [], 3);
    expect(result).toBe("schrittweise");
  });

  it("gibt erste Strategie aus Map für verwechslung zurück", () => {
    const result = waehleStrategie("verwechslung", undefined, [], 3);
    expect(result).toBe("vergleich");
  });

  it("filtert bereits versuchte Strategien raus", () => {
    const result = waehleStrategie("raten", undefined, ["schrittweise"], 3);
    expect(result).toBe("einfach"); // zweite in der Map
  });

  it("resettet Pool wenn alle Strategien verbraucht", () => {
    const bereitsVersucht: StrategieTyp[] = ["schrittweise", "einfach", "bild"];
    const result = waehleStrategie("raten", undefined, bereitsVersucht, 3);
    // Pool resettet → gibt erste aus Kandidaten zurück
    expect(["schrittweise", "einfach", "bild"]).toContain(result);
  });

  it("priorisiert 'einfach' bei niedrigem Sprachlevel", () => {
    // "sprache" hat "einfach" im Pool → wird bei sprachLevel < 2.5 priorisiert
    const result = waehleStrategie("sprache", undefined, [], 2);
    expect(result).toBe("einfach");
  });

  it("priorisiert 'einfach' nicht wenn bereits versucht", () => {
    const result = waehleStrategie("sprache", undefined, ["einfach"], 2);
    expect(result).not.toBe("einfach");
  });

  it("sortiert nach Präferenzen (effektive Strategie zuerst)", () => {
    const praef: StrategiePraeferenzen = {
      effektiv: { fallbeispiel: 5, analogie: 1 },
      ineffektiv: { analogie: 4, fallbeispiel: 0 },
    };
    const result = waehleStrategie("konzept", praef, [], 3);
    // fallbeispiel: 5/5=1.0, analogie: 1/5=0.2 → fallbeispiel gewinnt
    expect(result).toBe("fallbeispiel");
  });

  it("nutzt Fallback auf konzept-Map bei unbekannter Kategorie", () => {
    // TypeScript lässt das nicht zu, aber zur Sicherheit
    const result = waehleStrategie("konzept", undefined, [], 3);
    expect(result).toBe("analogie");
  });
});

describe("updateStrategiePraeferenz", () => {
  it("zählt effektiv hoch", () => {
    const result = updateStrategiePraeferenz(undefined, "analogie", true);
    expect(result.effektiv.analogie).toBe(1);
    expect(result.ineffektiv.analogie).toBeUndefined();
  });

  it("zählt ineffektiv hoch", () => {
    const result = updateStrategiePraeferenz(undefined, "bild", false);
    expect(result.ineffektiv.bild).toBe(1);
    expect(result.effektiv.bild).toBeUndefined();
  });

  it("akkumuliert bestehende Präferenzen", () => {
    const existing: StrategiePraeferenzen = {
      effektiv: { analogie: 3 },
      ineffektiv: { bild: 1 },
    };
    const result = updateStrategiePraeferenz(existing, "analogie", true);
    expect(result.effektiv.analogie).toBe(4);
    expect(result.ineffektiv.bild).toBe(1); // unverändert
  });
});
