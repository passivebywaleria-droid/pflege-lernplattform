import { describe, it, expect } from "vitest";
import {
  korrigiereTranskript,
  entferneDirekteWiederholungen,
  aehnlichkeit,
} from "@/lib/learn/transkript-korrektur";
import { resampleLinear } from "@/lib/audio/wav";

// Lexikon wie es aus Glossar + Zielwort einer CE-06-Situation kommt
const LEXIKON = [
  "Herzdruckmassage",
  "Thromboseprophylaxe",
  "Apixaban",
  "Angina pectoris",
  "Vorhofflimmern",
  "Defibrillator",
  "Sauerstoffsättigung",
  "Reanimation",
];

describe("aehnlichkeit", () => {
  it("ist 1 bei Gleichheit und 0 bei leerem String", () => {
    expect(aehnlichkeit("abc", "abc")).toBe(1);
    expect(aehnlichkeit("", "abc")).toBe(0);
  });

  it("misst Nähe symmetrisch-normalisiert", () => {
    const s = aehnlichkeit("herztruckmassage", "herzdruckmassage");
    expect(s).toBeGreaterThan(0.9);
  });
});

describe("korrigiereTranskript — echte Whisper-Fehler (Benchmark 2026-07-19)", () => {
  it("repariert Ein-Wort-Verstümmelungen", () => {
    const r = korrigiereTranskript(
      "wir haben mit der Herztruckmassage begonnen.",
      LEXIKON
    );
    expect(r.text).toContain("Herzdruckmassage");
    expect(r.ersetzungen).toEqual([
      { von: "Herztruckmassage", zu: "Herzdruckmassage" },
    ]);
  });

  it("repariert auseinandergerissene Komposita über Wortfenster", () => {
    const r = korrigiereTranskript(
      "nach der Trombose Profilaxe beginne ich",
      LEXIKON
    );
    expect(r.text).toContain("Thromboseprophylaxe");
  });

  it("repariert Medikamentennamen mit Satzzeichen", () => {
    const r = korrigiereTranskript("Vorhofflimmern unter Apixabahn,", LEXIKON);
    expect(r.text).toBe("Vorhofflimmern unter Apixaban,");
  });

  it("dokumentierte Grenze: 'Vorhofliehmann' (Ähnlichkeit 0,64) bleibt stehen", () => {
    // Bewusst NICHT korrigiert — unter der 0,72-Schwelle. Lieber ein
    // stehengelassener Fehler (den der KI-Prompt abfedert) als eine
    // falsche „Reparatur". Schwelle nur mit neuem Benchmark ändern.
    const r = korrigiereTranskript("und Vorhofliehmann unter", LEXIKON);
    expect(r.text).toContain("Vorhofliehmann");
    expect(r.ersetzungen).toEqual([]);
  });

  it("lässt korrekte Fachbegriffe unangetastet (keine Ersetzung gemeldet)", () => {
    const r = korrigiereTranskript(
      "Ich beginne mit der Herzdruckmassage und hole den Defibrillator.",
      LEXIKON
    );
    expect(r.text).toBe(
      "Ich beginne mit der Herzdruckmassage und hole den Defibrillator."
    );
    expect(r.ersetzungen).toEqual([]);
  });

  it("fasst Alltagssprache NICHT an", () => {
    const r = korrigiereTranskript(
      "er ist bewusstlos und ab mit nicht, wir warten auf den Arzt",
      LEXIKON
    );
    expect(r.text).toContain("ab mit nicht");
    expect(r.ersetzungen).toEqual([]);
  });

  it("ist robust bei leerem Transkript und leerem Lexikon", () => {
    expect(korrigiereTranskript("", LEXIKON).text).toBe("");
    expect(korrigiereTranskript("Hallo Welt", []).text).toBe("Hallo Welt");
  });
});

describe("entferneDirekteWiederholungen — iPhone-Live-Befund 2026-07-19", () => {
  it("glättet Whisper-Schleifen (echtes iPhone-Transkript)", () => {
    expect(
      entferneDirekteWiederholungen(
        "Ich übergebe, ich übergebe, herwachn, herwachn. Es kollobiert, es kollobiert, mir weiß ich nicht, mir weiß ich nicht."
      )
    ).toBe("Ich übergebe, herwachn. Es kollobiert, mir weiß ich nicht.");
  });

  it("glättet den halluzinierten Schwanz-Satz aus dem Benchmark", () => {
    expect(
      entferneDirekteWiederholungen(
        "Hier ist Station 3. Wir haben begonnen. Hier ist Station 3."
      )
      // NICHT benachbart → bleibt (bewusst konservativ)
    ).toBe("Hier ist Station 3. Wir haben begonnen. Hier ist Station 3.");
    expect(
      entferneDirekteWiederholungen("Wir haben begonnen. Wir haben begonnen.")
    ).toBe("Wir haben begonnen.");
  });

  it("lässt Text ohne Wiederholungen unangetastet", () => {
    const s = "Herr Wagner ist 67 Jahre alt, er atmet nicht.";
    expect(entferneDirekteWiederholungen(s)).toBe(s);
  });

  it("ignoriert Groß-/Kleinschreibung beim Vergleich", () => {
    expect(entferneDirekteWiederholungen("Er kollabiert, er kollabiert.")).toBe(
      "Er kollabiert."
    );
  });
});

describe("resampleLinear", () => {
  it("gibt bei gleicher Rate dieselben Samples zurück", () => {
    const s = new Float32Array([0, 0.5, 1]);
    expect(resampleLinear(s, 16000, 16000)).toBe(s);
  });

  it("halbiert die Länge bei 32k→16k und interpoliert", () => {
    const s = new Float32Array([0, 0.25, 0.5, 0.75, 1, 0.75, 0.5, 0.25]);
    const out = resampleLinear(s, 32000, 16000);
    expect(out.length).toBe(4);
    expect(out[0]).toBeCloseTo(0);
    expect(out[out.length - 1]).toBeCloseTo(0.25);
  });

  it("48k→16k drittelt die Länge", () => {
    const s = new Float32Array(48000).fill(0.3);
    const out = resampleLinear(s, 48000, 16000);
    expect(out.length).toBe(16000);
    expect(out[8000]).toBeCloseTo(0.3);
  });
});
