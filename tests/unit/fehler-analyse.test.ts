import { describe, it, expect } from "vitest";
import {
  analysiereFehler,
  kategorisiereFehler,
  zaehleThemaFehler,
} from "@/lib/adaptive/fehler-analyse";
import type { StepAntwort } from "@/hooks/use-lern-fortschritt";

function makeAntwort(overrides: Partial<StepAntwort> = {}): StepAntwort {
  return {
    stepId: "s1-03",
    stepType: "mc",
    correct: false,
    zeitMs: 10000,
    ...overrides,
  };
}

describe("kategorisiereFehler", () => {
  it("klassifiziert < 2s bei MC als raten", () => {
    const antwort = makeAntwort({ zeitMs: 1500, stepType: "mc" });
    expect(kategorisiereFehler(antwort, [], 3)).toBe("raten");
  });

  it("klassifiziert 2-5s bei MC als fluechtig", () => {
    const antwort = makeAntwort({ zeitMs: 3000, stepType: "mc" });
    expect(kategorisiereFehler(antwort, [], 3)).toBe("fluechtig");
  });

  it("klassifiziert niedrigen Sprachlevel + lange Zeit als sprache", () => {
    const antwort = makeAntwort({ zeitMs: 20000 });
    expect(kategorisiereFehler(antwort, [], 2)).toBe("sprache");
  });

  it("klassifiziert 2+ vorherige Fehler als konzept", () => {
    const vorherige = [
      makeAntwort({ correct: false, stepId: "s1-01" }),
      makeAntwort({ correct: false, stepId: "s1-02" }),
    ];
    const antwort = makeAntwort({ zeitMs: 10000 });
    expect(kategorisiereFehler(antwort, vorherige, 4)).toBe("konzept");
  });

  it("klassifiziert 5-25s als verwechslung", () => {
    const antwort = makeAntwort({ zeitMs: 12000 });
    expect(kategorisiereFehler(antwort, [], 4)).toBe("verwechslung");
  });

  it("klassifiziert > 25s als konzept (default)", () => {
    const antwort = makeAntwort({ zeitMs: 30000 });
    expect(kategorisiereFehler(antwort, [], 4)).toBe("konzept");
  });
});

describe("analysiereFehler", () => {
  it("erkennt Raten bei < 3s und >= 3 Optionen", () => {
    const result = analysiereFehler(2500, "A", "B", ["A", "B", "C"], "mc");
    expect(result.kategorie).toBe("raten");
  });

  it("erkennt Sprachproblem bei niedrigem Level + langer Zeit", () => {
    const result = analysiereFehler(16000, "A", "B", ["A", "B"], "mc", 1);
    expect(result.kategorie).toBe("sprache");
  });
});

describe("zaehleThemaFehler", () => {
  it("zählt Fehler mit gleichem Prefix", () => {
    const antworten: StepAntwort[] = [
      makeAntwort({ stepId: "s1-03", correct: false }),
      makeAntwort({ stepId: "s1-04", correct: false }),
      makeAntwort({ stepId: "s2-01", correct: false }),
    ];
    expect(zaehleThemaFehler(antworten, "s1-03")).toBe(2); // s1-03 + s1-04
  });

  it("ignoriert -retry Suffix", () => {
    const antworten: StepAntwort[] = [
      makeAntwort({ stepId: "s1-03", correct: false }),
      makeAntwort({ stepId: "s1-03-retry", correct: false }),
    ];
    expect(zaehleThemaFehler(antworten, "s1-03-retry")).toBe(2);
  });
});
