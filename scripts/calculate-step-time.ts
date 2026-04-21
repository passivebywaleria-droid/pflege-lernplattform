/**
 * calculate-step-time.ts
 *
 * Berechnet die erwartete Bearbeitungszeit pro Step basierend auf
 * empirisch fundiertem Zeit-Modell v3 (2026-04-21).
 *
 * Basis:
 * - Lesegeschwindigkeit Deutsch: C1 = 17 Zeichen/s, B1 = 12 Zeichen/s (L2-Faktor 0,7)
 * - MC-Response-Zeiten: 36-41s (3 vs 4 Optionen), komplex bis 90s
 * - Tippgeschwindigkeit Mobile: 38 WpM = ~1,5 Zeichen/s
 * - Bloom-Verarbeitungs-Aufschlag: 1→20%, 3→40%, 4→60%, 5-6→100%
 * - Microlearning: 3-5 Min pro Baustein optimal
 *
 * Quellen:
 * - IReST (International Reading Speed Texts), 179 WpM Deutsch
 * - L2-Faktor 0,7 (Language Leveler, Cambridge SLA)
 * - MC-Timing (PubMed 25200022, Literacy Matters)
 * - Aalto University Typing Study 37k Teilnehmer
 *
 * Usage:
 *   import { calculateStepTime } from "./calculate-step-time";
 *   const seconds = calculateStepTime({ ... });
 */

export type SprachLevel = "c1" | "b1";
export type BloomLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type StepType =
  | "mc"
  | "mc-statement"
  | "truefalse"
  | "swipe"
  | "matching"
  | "sorting"
  | "categorize"
  | "text"
  | "dialog"
  | "flipcard"
  | "reveal"
  | "audio"
  | "reflection"
  | "fillin"
  | "sequencing"
  | "freetext"
  | "branching"
  | "hotspot"
  | "label-image"
  | "speech"
  | "summary"
  | "confidence"
  | "comparison"
  | "errorspot"
  | "roleplay"
  | "calculation"
  | "fachsprache"
  | "abbreviations"
  | "blitz"
  | "checklist"
  | "risk-assessment"
  | "competence-check"
  | "chatsim";

export interface StepTimeInput {
  /** Gesamt-Zeichenzahl aller Texte im Step (title + question + options + context) */
  zeichen: number;
  /** Bloom-Level des Steps (1-6) */
  bloomLevel: BloomLevel;
  /** Welcher Step-Typ */
  stepType: StepType;
  /** Sprachlevel des Schülers */
  sprachLevel: SprachLevel;
  /** Anzahl Antwortoptionen (nur für MC-Varianten, default 4) */
  anzahlOptionen?: number;
  /** Erwartete Zeichen Nutzer-Eingabe (für Freitext/Speech, default 0) */
  eingabeZeichen?: number;
  /** Anzahl Drag-and-Drop-Elemente (für Matching/Sorting, default 0) */
  dndElemente?: number;
  /** Anzahl Branching-Entscheidungen (default 1) */
  branchingEntscheidungen?: number;
}

export interface StepTimeBreakdown {
  total: number;
  lesezeit: number;
  verstehenszeit: number;
  bearbeitungszeit: number;
  eingabezeit: number;
  nachdenkzeit: number;
  stepType: StepType;
  bloomLevel: BloomLevel;
  sprachLevel: SprachLevel;
}

/** Zeichen pro Sekunde beim Lesen (mit Fachsprache-Abschlag für medizinische Texte 20%) */
const LESE_GESCHWINDIGKEIT_Z_PRO_S: Record<SprachLevel, number> = {
  c1: 17 * 0.8, // 13,6 Z/s (Fachsprache-Abschlag)
  b1: 12 * 0.8, // 9,6 Z/s
};

/** Bloom-Verarbeitungs-Aufschlag zur Lesezeit */
const BLOOM_VERSTEHEN_FAKTOR: Record<BloomLevel, number> = {
  1: 0.2,
  2: 0.2,
  3: 0.4,
  4: 0.6,
  5: 1.0,
  6: 1.0,
};

/** Basis-Bearbeitungszeit pro Step-Typ in Sekunden (Bloom-unabhängig) */
const STEP_BASIS_ZEIT: Record<StepType, number> = {
  // Klick-basiert
  mc: 40,
  "mc-statement": 40,
  truefalse: 25,
  swipe: 20,

  // Drag-and-Drop
  matching: 60,
  sorting: 75,
  categorize: 60,
  sequencing: 90,

  // Text lesen + klicken
  text: 30, // Erklärtext lesen
  dialog: 45,
  flipcard: 20,
  reveal: 30,
  audio: 60, // Audio hören + klicken

  // Komplexe Interaktion
  reflection: 90,
  fillin: 45,
  freetext: 180, // Basis, skaliert mit eingabeZeichen
  branching: 90, // pro Entscheidung, skaliert mit branchingEntscheidungen
  hotspot: 45,
  "label-image": 60,
  speech: 45,
  summary: 30,

  // Mehrwert-Typen
  confidence: 20,
  comparison: 45,
  errorspot: 60,
  roleplay: 120,
  calculation: 90,
  fachsprache: 40,
  abbreviations: 30,
  blitz: 15,
  checklist: 45,
  "risk-assessment": 75,
  "competence-check": 60,
  chatsim: 120,
};

/** Bloom-abhängige Nachdenk-Zeit (zusätzlich zu Bearbeitung) in Sekunden */
const NACHDENK_ZEIT: Record<BloomLevel, number> = {
  1: 5,
  2: 10,
  3: 20,
  4: 40,
  5: 75,
  6: 100,
};

/** MC-Option-Aufschlag (mehr Optionen = länger lesen + entscheiden) */
function mcOptionsAufschlag(anzahl: number): number {
  if (anzahl <= 2) return -10;
  if (anzahl === 3) return 0;
  if (anzahl === 4) return 5;
  if (anzahl === 5) return 15;
  return 25;
}

/** Drag-and-Drop-Zeit: 2s pro Element */
function dndZeit(elemente: number): number {
  return elemente * 2;
}

/**
 * Berechnet die erwartete Bearbeitungszeit eines Steps in Sekunden.
 *
 * @returns Sekunden-Breakdown + Total
 */
export function calculateStepTime(input: StepTimeInput): StepTimeBreakdown {
  const {
    zeichen,
    bloomLevel,
    stepType,
    sprachLevel,
    anzahlOptionen = 4,
    eingabeZeichen = 0,
    dndElemente = 0,
    branchingEntscheidungen = 1,
  } = input;

  // 1. Lesezeit (alle Texte im Step)
  const lesezeit = zeichen / LESE_GESCHWINDIGKEIT_Z_PRO_S[sprachLevel];

  // 2. Verstehenszeit (Bloom-abhängiger Aufschlag)
  const verstehenszeit = lesezeit * BLOOM_VERSTEHEN_FAKTOR[bloomLevel];

  // 3. Bearbeitungszeit (Step-Typ-basiert)
  let bearbeitungszeit = STEP_BASIS_ZEIT[stepType];

  // MC-spezifisch: Option-Aufschlag
  if (stepType === "mc" || stepType === "mc-statement") {
    bearbeitungszeit += mcOptionsAufschlag(anzahlOptionen);
  }

  // Drag-and-Drop: Element-Aufschlag
  if (stepType === "matching" || stepType === "sorting" || stepType === "categorize" || stepType === "sequencing") {
    bearbeitungszeit += dndZeit(dndElemente);
  }

  // Branching: pro Entscheidung
  if (stepType === "branching") {
    bearbeitungszeit *= branchingEntscheidungen;
  }

  // B1-Aufschlag: 10% mehr Zeit für Interaktion (Sprache verlangsamt Entscheidung)
  if (sprachLevel === "b1") {
    bearbeitungszeit *= 1.1;
  }

  // 4. Eingabezeit (Tippen bei Freitext/Speech)
  let eingabezeit = 0;
  if (stepType === "freetext" || stepType === "speech" || stepType === "reflection") {
    // 1.5 Zeichen/s auf Mobile, B1 tippt 20% langsamer (Rechtschreibung unsicherer)
    const tippGeschwindigkeit = sprachLevel === "b1" ? 1.2 : 1.5;
    eingabezeit = eingabeZeichen / tippGeschwindigkeit;
  }

  // 5. Nachdenkzeit (Bloom-abhängig)
  const nachdenkzeit = NACHDENK_ZEIT[bloomLevel];

  const total = lesezeit + verstehenszeit + bearbeitungszeit + eingabezeit + nachdenkzeit;

  return {
    total: Math.round(total),
    lesezeit: Math.round(lesezeit),
    verstehenszeit: Math.round(verstehenszeit),
    bearbeitungszeit: Math.round(bearbeitungszeit),
    eingabezeit: Math.round(eingabezeit),
    nachdenkzeit: Math.round(nachdenkzeit),
    stepType,
    bloomLevel,
    sprachLevel,
  };
}

/**
 * Berechnet die Gesamtzeit einer Liste von Steps.
 */
export function calculateTotalTime(
  steps: StepTimeInput[],
): { totalSeconds: number; totalMinutes: number; perStep: StepTimeBreakdown[] } {
  const perStep = steps.map(calculateStepTime);
  const totalSeconds = perStep.reduce((sum, s) => sum + s.total, 0);
  return {
    totalSeconds,
    totalMinutes: Math.round(totalSeconds / 60),
    perStep,
  };
}

/**
 * Gibt Zielzeit für ein Thema/Situation basierend auf UE + App-Dichte-Faktor.
 *
 * @param ue Anzahl UE aus dem Rahmenlehrplan
 * @param faktor App-Dichte-Faktor (default 0,55 aus Zeit-Modell v3)
 * @returns Zielzeit in Sekunden
 */
export function getZielzeitSekunden(ue: number, faktor = 0.55): number {
  return ue * 45 * 60 * faktor;
}

/**
 * Prüft ob geplante Step-Zeiten in das UE-Budget passen (±20% Toleranz).
 */
export function checkZeitBudget(
  ue: number,
  steps: StepTimeInput[],
  faktor = 0.55,
  toleranz = 0.2,
): { passt: boolean; aktuellSek: number; zielSek: number; abweichung: number; empfehlung: string } {
  const zielSek = getZielzeitSekunden(ue, faktor);
  const { totalSeconds: aktuellSek } = calculateTotalTime(steps);
  const abweichung = (aktuellSek - zielSek) / zielSek;
  const passt = Math.abs(abweichung) <= toleranz;

  let empfehlung: string;
  if (abweichung > toleranz) {
    empfehlung = `Zu viel Content: ${Math.round(abweichung * 100)}% über Budget. Steps oder Text kürzen.`;
  } else if (abweichung < -toleranz) {
    empfehlung = `Zu wenig Content: ${Math.round(Math.abs(abweichung) * 100)}% unter Budget. Mehr Bausteine oder Übungen.`;
  } else {
    empfehlung = `Budget eingehalten (Abweichung ${Math.round(abweichung * 100)}%).`;
  }

  return { passt, aktuellSek, zielSek, abweichung, empfehlung };
}

// CLI-Modus: Script direkt ausführen für Beispielrechnungen
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("=== Zeit-Modell v3 Beispielrechnungen ===\n");

  const beispiele: Array<{ name: string; input: StepTimeInput }> = [
    {
      name: "Einfache MC: 'Was ist Dekubitus?' (Bloom 2, C1)",
      input: { zeichen: 150, bloomLevel: 2, stepType: "mc", sprachLevel: "c1", anzahlOptionen: 4 },
    },
    {
      name: "Einfache MC: 'Was ist Dekubitus?' (Bloom 2, B1)",
      input: { zeichen: 150, bloomLevel: 2, stepType: "mc", sprachLevel: "b1", anzahlOptionen: 4 },
    },
    {
      name: "Komplexes Branching (Bloom 5, C1)",
      input: { zeichen: 300, bloomLevel: 5, stepType: "branching", sprachLevel: "c1", branchingEntscheidungen: 1 },
    },
    {
      name: "Freitext Pflegebericht (Bloom 6, C1, 80 Wörter Eingabe)",
      input: { zeichen: 550, bloomLevel: 6, stepType: "freetext", sprachLevel: "c1", eingabeZeichen: 400 },
    },
    {
      name: "Freitext Pflegebericht (Bloom 6, B1, 80 Wörter Eingabe)",
      input: { zeichen: 550, bloomLevel: 6, stepType: "freetext", sprachLevel: "b1", eingabeZeichen: 400 },
    },
    {
      name: "Matching 5 Paare (Bloom 3, C1)",
      input: { zeichen: 200, bloomLevel: 3, stepType: "matching", sprachLevel: "c1", dndElemente: 5 },
    },
    {
      name: "Flipcard Begriff (Bloom 1, C1)",
      input: { zeichen: 80, bloomLevel: 1, stepType: "flipcard", sprachLevel: "c1" },
    },
    {
      name: "Dialog Rollenspiel (Bloom 5, B1)",
      input: { zeichen: 400, bloomLevel: 5, stepType: "dialog", sprachLevel: "b1" },
    },
  ];

  for (const { name, input } of beispiele) {
    const r = calculateStepTime(input);
    console.log(`${name}`);
    console.log(
      `  → ${r.total}s total (Lesen ${r.lesezeit}s + Verstehen ${r.verstehenszeit}s + Bearbeiten ${r.bearbeitungszeit}s + Eingabe ${r.eingabezeit}s + Nachdenken ${r.nachdenkzeit}s)\n`,
    );
  }

  // Budget-Check Beispiel
  console.log("=== Budget-Check: Thema 'Sturzprophylaxe' (4 UE) ===");
  const sturzSteps: StepTimeInput[] = [
    // 10 Bausteine à 3-5 Min Lesen (~200-400 Zeichen)
    ...Array(10).fill({ zeichen: 300, bloomLevel: 2, stepType: "text", sprachLevel: "c1" }),
    // 12 Steps gemischt
    { zeichen: 150, bloomLevel: 2, stepType: "mc", sprachLevel: "c1", anzahlOptionen: 4 },
    { zeichen: 150, bloomLevel: 2, stepType: "mc", sprachLevel: "c1", anzahlOptionen: 4 },
    { zeichen: 200, bloomLevel: 3, stepType: "matching", sprachLevel: "c1", dndElemente: 4 },
    { zeichen: 200, bloomLevel: 3, stepType: "categorize", sprachLevel: "c1", dndElemente: 5 },
    { zeichen: 250, bloomLevel: 3, stepType: "sequencing", sprachLevel: "c1", dndElemente: 6 },
    { zeichen: 300, bloomLevel: 4, stepType: "errorspot", sprachLevel: "c1" },
    { zeichen: 300, bloomLevel: 4, stepType: "hotspot", sprachLevel: "c1" },
    { zeichen: 350, bloomLevel: 5, stepType: "branching", sprachLevel: "c1" },
    { zeichen: 350, bloomLevel: 5, stepType: "dialog", sprachLevel: "c1" },
    { zeichen: 400, bloomLevel: 6, stepType: "freetext", sprachLevel: "c1", eingabeZeichen: 300 },
    { zeichen: 200, bloomLevel: 2, stepType: "checklist", sprachLevel: "c1" },
    { zeichen: 150, bloomLevel: 3, stepType: "summary", sprachLevel: "c1" },
  ];

  const budget = checkZeitBudget(4, sturzSteps);
  console.log(`  Ziel: ${Math.round(budget.zielSek / 60)} Min (4 UE × 0.55)`);
  console.log(`  Aktuell: ${Math.round(budget.aktuellSek / 60)} Min`);
  console.log(`  ${budget.empfehlung}`);
}
