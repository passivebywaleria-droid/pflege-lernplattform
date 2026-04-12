// XP-Berechnung per Formel — kein Gamification-Designer mehr nötig
// Base-XP nach Step-Typ + Bloom-Multiplikator

import type { StepType } from "./_types";

const BASE_XP: Record<StepType, number> = {
  // Passive / Leicht (5 XP)
  text: 5,
  selfrating: 5,
  summary: 5,
  reveal: 5,
  flipcard: 5,

  // Einfache Interaktion (10 XP)
  mc: 10,
  truefalse: 10,
  fillin: 10,
  swipe: 10,
  confidence: 10,

  // Mittel (15 XP)
  matching: 15,
  memory: 15,
  crossword: 15,
  categorize: 15,
  timer: 15,
  cloze: 15,

  // Anspruchsvoll (20 XP)
  sorting: 20,
  sequencing: 20,
  dialog: 20,
  highlight: 20,
  comparison: 20,
  timeline: 20,
  slider: 20,
  diagram: 20,

  // Komplex (25 XP)
  branching: 25,
  hotspot: 25,
  freetext: 25,
  reflection: 25,
  labelImage: 25,
  imageInteraction: 20,
  careplan: 25,
  audio: 10,
  speech: 20,

  // v3: Neue Step-Typen
  wordorder: 15,
  calculation: 20,
  tablefillin: 20,
  errorspot: 20,
  matrix: 20,
  conceptmap: 25,
  chatSim: 25,
  estimation: 15,
  crowdPoll: 10,
};

/**
 * Berechnet XP für einen Step basierend auf Typ und Bloom-Level.
 * Bloom 1 = 1.0x, Bloom 6 = 1.5x
 */
export function calculateXP(stepType: StepType, bloomLevel: number): number {
  const base = BASE_XP[stepType] ?? 10;
  const bloomMultiplier = 1 + (Math.min(Math.max(bloomLevel, 1), 6) - 1) * 0.1;
  return Math.round(base * bloomMultiplier);
}
