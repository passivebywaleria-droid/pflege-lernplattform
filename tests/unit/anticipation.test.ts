/**
 * Tests für Brilliant-Prinzip (Anticipation) + KI-Scaffolding
 *
 * @vitest-environment node
 */

import { describe, it, expect } from "vitest";

// --- injectAnticipation Logic Test (inline copy to test pure function) ---

interface MinimalStep {
  stepId: string;
  stepType: string;
  themenblockPhase?: string;
  modus?: string;
  xpValue?: number;
  track?: string;
  contentC1: { title: string; body?: string };
  contentB1?: { title: string; body?: string };
  question?: {
    fragetext?: string;
    optionen?: { text: string; isCorrect: boolean; explanation: string }[];
  };
}

function injectAnticipation(steps: MinimalStep[]): MinimalStep[] {
  const result: MinimalStep[] = [];
  const processedTBs = new Set<string>();

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    result.push(step);

    if (step.themenblockPhase === "SZENE") {
      const tbMatch = step.stepId.match(/tb(\d+)/);
      if (!tbMatch || processedTBs.has(tbMatch[1])) continue;
      processedTBs.add(tbMatch[1]);

      const checkpointStep = steps.find((s, j) =>
        j > i &&
        s.themenblockPhase === "CHECKPOINT" &&
        s.stepType === "mc" &&
        s.stepId.includes(`tb${tbMatch[1]}`)
      );

      if (checkpointStep?.question?.optionen) {
        const anticipation: MinimalStep = {
          ...checkpointStep,
          stepId: `${checkpointStep.stepId}-anticipation`,
          themenblockPhase: "SZENE",
          modus: "puzzle",
          xpValue: 0,
          track: "basis",
          contentC1: {
            ...checkpointStep.contentC1,
            title: "Was denkst du?",
            body: checkpointStep.contentC1.body || "Bevor wir es erklären — rate mal!",
          },
        };
        result.push(anticipation);
      }
    }
  }
  return result;
}

describe("injectAnticipation", () => {
  it("fügt Anticipation-Step nach SZENE ein", () => {
    const steps: MinimalStep[] = [
      { stepId: "le01-s1-tb1-01", stepType: "text", themenblockPhase: "SZENE", contentC1: { title: "Szene" } },
      { stepId: "le01-s1-tb1-02", stepType: "text", themenblockPhase: "ERKLÄRUNG", contentC1: { title: "Erklärung" } },
      {
        stepId: "le01-s1-tb1-03", stepType: "mc", themenblockPhase: "CHECKPOINT",
        contentC1: { title: "Checkpoint" },
        question: {
          fragetext: "Was ist richtig?",
          optionen: [
            { text: "A", isCorrect: true, explanation: "Richtig" },
            { text: "B", isCorrect: false, explanation: "Falsch" },
          ],
        },
      },
    ];

    const result = injectAnticipation(steps);

    expect(result).toHaveLength(4); // 3 original + 1 anticipation
    expect(result[1].stepId).toBe("le01-s1-tb1-03-anticipation");
    expect(result[1].modus).toBe("puzzle");
    expect(result[1].xpValue).toBe(0);
    expect(result[1].contentC1.title).toBe("Was denkst du?");
  });

  it("fügt nur eine Anticipation pro Themenblock ein", () => {
    const steps: MinimalStep[] = [
      { stepId: "le01-s1-tb1-01", stepType: "text", themenblockPhase: "SZENE", contentC1: { title: "Szene 1" } },
      { stepId: "le01-s1-tb1-02", stepType: "text", themenblockPhase: "SZENE", contentC1: { title: "Szene 2" } },
      {
        stepId: "le01-s1-tb1-03", stepType: "mc", themenblockPhase: "CHECKPOINT",
        contentC1: { title: "CP" },
        question: { fragetext: "?", optionen: [{ text: "A", isCorrect: true, explanation: "ok" }] },
      },
    ];

    const result = injectAnticipation(steps);
    const anticipations = result.filter(s => s.stepId.endsWith("-anticipation"));
    expect(anticipations).toHaveLength(1);
  });

  it("fügt keine Anticipation ein wenn kein CHECKPOINT-MC vorhanden", () => {
    const steps: MinimalStep[] = [
      { stepId: "le01-s1-tb1-01", stepType: "text", themenblockPhase: "SZENE", contentC1: { title: "Szene" } },
      { stepId: "le01-s1-tb1-02", stepType: "text", themenblockPhase: "CHECKPOINT", contentC1: { title: "Text CP" } },
    ];

    const result = injectAnticipation(steps);
    expect(result).toHaveLength(2); // Keine Anticipation
  });

  it("verarbeitet mehrere Themenblöcke korrekt", () => {
    const steps: MinimalStep[] = [
      { stepId: "le01-s1-tb1-01", stepType: "dialog", themenblockPhase: "SZENE", contentC1: { title: "TB1" } },
      {
        stepId: "le01-s1-tb1-02", stepType: "mc", themenblockPhase: "CHECKPOINT",
        contentC1: { title: "CP1" },
        question: { fragetext: "?", optionen: [{ text: "A", isCorrect: true, explanation: "ok" }] },
      },
      { stepId: "le01-s1-tb2-01", stepType: "dialog", themenblockPhase: "SZENE", contentC1: { title: "TB2" } },
      {
        stepId: "le01-s1-tb2-02", stepType: "mc", themenblockPhase: "CHECKPOINT",
        contentC1: { title: "CP2" },
        question: { fragetext: "?", optionen: [{ text: "B", isCorrect: true, explanation: "ok" }] },
      },
    ];

    const result = injectAnticipation(steps);
    const anticipations = result.filter(s => s.stepId.endsWith("-anticipation"));
    expect(anticipations).toHaveLength(2);
    expect(anticipations[0].stepId).toContain("tb1");
    expect(anticipations[1].stepId).toContain("tb2");
  });

  it("gibt leere/kurze Arrays unverändert zurück", () => {
    expect(injectAnticipation([])).toHaveLength(0);
    const single: MinimalStep[] = [{ stepId: "x", stepType: "text", contentC1: { title: "T" } }];
    expect(injectAnticipation(single)).toHaveLength(1);
  });
});

describe("Anticipation stepId-Erkennung", () => {
  it("endsWith -anticipation", () => {
    expect("le01-s1-tb1-03-anticipation".endsWith("-anticipation")).toBe(true);
    expect("le01-s1-tb1-03".endsWith("-anticipation")).toBe(false);
  });
});
