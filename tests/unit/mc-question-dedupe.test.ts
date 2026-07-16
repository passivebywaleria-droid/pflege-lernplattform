/**
 * dedupeTrailingQuestion — entfernt die Schlussfrage des Bodys aus der Anzeige,
 * wenn der Fragetext sie sinngleich wiederholt (Dozentin-Feedback 2026-07-16:
 * „die Frage steht doppelt da"). Nur Präsentation, Content bleibt unverändert.
 */

import { describe, it, expect } from "vitest";
import { dedupeTrailingQuestion } from "@/components/learn/step-mc";

describe("dedupeTrailingQuestion", () => {
  it("entfernt die sinngleiche Schlussfrage (Wagner-Fall)", () => {
    const body =
      "Herr Wagner reagiert nicht auf Ansprache und Rütteln an den Schultern. Du siehst alle paar Sekunden einen einzelnen, schnappenden Atemzug. Wie wertest du diese Atmung?";
    const fragetext = "Wie wertest du die schnappende Atmung von Herrn Wagner?";
    const result = dedupeTrailingQuestion(body, fragetext);
    expect(result).toBe(
      "Herr Wagner reagiert nicht auf Ansprache und Rütteln an den Schultern. Du siehst alle paar Sekunden einen einzelnen, schnappenden Atemzug."
    );
  });

  it("lässt eine inhaltlich ANDERE Schlussfrage stehen", () => {
    const body = "Der RR liegt bei 80/50 mmHg, der Puls bei 128. Was sagt dir der Schockindex?";
    const fragetext = "Welche Lagerung wählst du für Herrn Gruber?";
    expect(dedupeTrailingQuestion(body, fragetext)).toBe(body);
  });

  it("lässt den Body stehen, wenn er NUR aus der Frage besteht", () => {
    const body = "Wie wertest du die schnappende Atmung?";
    const fragetext = "Wie wertest du die schnappende Atmung von Herrn Wagner?";
    expect(dedupeTrailingQuestion(body, fragetext)).toBe(body);
  });

  it("lässt Bodies ohne Schlussfrage unverändert", () => {
    const body = "Herr Wagner reagiert nicht. Du beginnst mit der Herzdruckmassage.";
    const fragetext = "Wie tief drückst du?";
    expect(dedupeTrailingQuestion(body, fragetext)).toBe(body);
  });

  it("verkraftet undefined", () => {
    expect(dedupeTrailingQuestion(undefined, "Frage?")).toBeUndefined();
  });
});
