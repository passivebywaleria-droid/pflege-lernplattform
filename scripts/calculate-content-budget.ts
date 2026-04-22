/**
 * calculate-content-budget.ts
 *
 * Berechnet das Zeit-Budget für alle Content-Typen eines Themas.
 *
 * Modell:
 * - Session = 45 Min (1 UE)
 * - 70% neue Inhalte = 31,5 Min pro Session
 * - 30% Spaced Repetition = 13,5 Min (ältere Themen)
 * - App-Dichte-Faktor: 0,55
 * - Wissen-Tab: stilles Nachschlagewerk — zählt NICHT ins Budget
 * - Prüfungsfälle: separate Entitäten — zählen NICHT ins Thema-Budget
 *
 * Operator-System (PflAPrV, 100-120P pro 120-Min-Klausur):
 * - AFB I  (nennen/beschreiben):    1P = ~78s mobil
 * - AFB II (erläutern/vergleichen): 2P = ~156s mobil
 * - AFB III (begründen):            3P = ~234s mobil
 * - AFB III (beurteilen/planen):    4P = ~312s mobil
 *
 * Quellen:
 * - PflAPrV §§ 14–16 (Prüfungsformat)
 * - KMK Operatoren-Katalog (Anforderungsbereiche I/II/III)
 * - Zeit-Modell v3 (calculate-step-time.ts)
 *
 * Usage:
 *   npx tsx scripts/calculate-content-budget.ts
 */

import {
  calculateStepTime,
  calculateTotalTime,
  getZielzeitSekunden,
  type StepTimeInput,
  type SprachLevel,
  type BloomLevel,
} from "./calculate-step-time";

// ═══════════════════════════════════════════════════
// KONSTANTEN
// ═══════════════════════════════════════════════════

const SESSION_SEK = 45 * 60;          // 2700s = 1 UE
const SESSION_NEU_ANTEIL = 0.70;      // 70% neuer Content
const APP_DICHTE_FAKTOR = 0.55;

/** Lesegeschwindigkeit mit Fachsprache-Abschlag 20% */
const LESE_ZPS: Record<SprachLevel, number> = {
  c1: 17 * 0.8, // 13,6 Z/s
  b1: 12 * 0.8, //  9,6 Z/s
};

const BLOOM_VERSTEHEN: Record<BloomLevel, number> = {
  1: 0.20, 2: 0.20, 3: 0.40, 4: 0.60, 5: 1.00, 6: 1.00,
};

/**
 * Mobile Sekunden pro Prüfungs-Punkt.
 * Papier: 1P ≈ 60s. Mobile: ~1,3× langsamer = 78s/P.
 */
const SEK_PRO_PUNKT_MOBIL = 78;

// ═══════════════════════════════════════════════════
// TYPEN
// ═══════════════════════════════════════════════════

export type PruefungsOperator =
  | "nennen"
  | "benennen"
  | "beschreiben"
  | "erlaeutern"
  | "erklaeren"
  | "vergleichen"
  | "einordnen"
  | "begruenden"
  | "beurteilen"
  | "bewerten"
  | "entwickeln"
  | "planen";

/** Punkte pro Operator-Typ (AFB I=1P, AFB II=2P, AFB III=3-4P) */
export const OPERATOR_PUNKTE: Record<PruefungsOperator, number> = {
  nennen: 1, benennen: 1, beschreiben: 1,
  erlaeutern: 2, erklaeren: 2, vergleichen: 2, einordnen: 2,
  begruenden: 3,
  beurteilen: 4, bewerten: 4, entwickeln: 4, planen: 4,
};

/** AFB-Zuordnung pro Operator */
export const OPERATOR_AFB: Record<PruefungsOperator, 1 | 2 | 3> = {
  nennen: 1, benennen: 1, beschreiben: 1,
  erlaeutern: 2, erklaeren: 2, vergleichen: 2, einordnen: 2,
  begruenden: 3, beurteilen: 3, bewerten: 3, entwickeln: 3, planen: 3,
};

export interface WissenstextInput {
  zeichen: number;
  bloomLevel: BloomLevel;
  sprachLevel: SprachLevel;
  hatBilder?: boolean; // +15% Verarbeitungszeit
}

export interface SnackInput {
  zeichen: number;
  sprachLevel: SprachLevel;
  // Snacks: immer Bloom 1-2
}

export interface PruefungsAufgabe {
  operator: PruefungsOperator;
  /** Gesamtpunkte (z.B. "Nennen Sie 5 Maßnahmen" = 5P) */
  punkte: number;
  beschreibung?: string;
}

export interface PruefungsfallInput {
  fallId: string;
  fallTextZeichen: number;  // Patientenfall (~300 Wörter = ~1800 Z)
  aufgaben: PruefungsAufgabe[];
  sprachLevel: SprachLevel;
}

export interface ThemaBudgetInput {
  themaId: string;
  ue: number;              // Zeitrichtwert aus Rahmenlehrplan
  sprachLevel: SprachLevel;
  wissenstexte?: WissenstextInput[];
  snacks?: SnackInput[];
  steps?: StepTimeInput[];
}

// ═══════════════════════════════════════════════════
// BERECHNUNGEN — Wissenstext
// ═══════════════════════════════════════════════════

export interface WissenstextZeit {
  lesezeit: number;
  verstehenszeit: number;
  bildAufschlag: number;
  total: number;
}

export function calculateWissenstextTime(input: WissenstextInput): WissenstextZeit {
  const lesezeit = input.zeichen / LESE_ZPS[input.sprachLevel];
  const verstehenszeit = lesezeit * BLOOM_VERSTEHEN[input.bloomLevel];
  const basis = lesezeit + verstehenszeit;
  const bildAufschlag = input.hatBilder ? basis * 0.15 : 0;
  return {
    lesezeit: Math.round(lesezeit),
    verstehenszeit: Math.round(verstehenszeit),
    bildAufschlag: Math.round(bildAufschlag),
    total: Math.round(basis + bildAufschlag),
  };
}

// ═══════════════════════════════════════════════════
// BERECHNUNGEN — Snack
// ═══════════════════════════════════════════════════

export interface SnackZeit {
  lesezeit: number;
  total: number;
}

export function calculateSnackTime(input: SnackInput): SnackZeit {
  const lesezeit = input.zeichen / LESE_ZPS[input.sprachLevel];
  const verstehenszeit = lesezeit * 0.15; // Bloom 1-2, minimal
  return {
    lesezeit: Math.round(lesezeit),
    total: Math.round(lesezeit + verstehenszeit),
  };
}

// ═══════════════════════════════════════════════════
// BERECHNUNGEN — Prüfungsfall
// ═══════════════════════════════════════════════════

export interface PruefungsfallZeit {
  fallId: string;
  falltextZeit: number;
  aufgabenZeit: number;
  gesamtpunkte: number;
  total: number;
  totalMin: number;
  perAufgabe: Array<{
    operator: PruefungsOperator;
    punkte: number;
    afb: 1 | 2 | 3;
    sekunden: number;
    beschreibung?: string;
  }>;
}

export function calculatePruefungsfallTime(input: PruefungsfallInput): PruefungsfallZeit {
  // Falltext: Bloom 4 (Analyse-Niveau beim Lesen)
  const lesezeit = input.fallTextZeichen / LESE_ZPS[input.sprachLevel];
  const falltextZeit = Math.round(lesezeit * (1 + BLOOM_VERSTEHEN[4]));

  const perAufgabe = input.aufgaben.map((a) => ({
    operator: a.operator,
    punkte: a.punkte,
    afb: OPERATOR_AFB[a.operator],
    sekunden: Math.round(a.punkte * SEK_PRO_PUNKT_MOBIL),
    beschreibung: a.beschreibung,
  }));

  const aufgabenZeit = perAufgabe.reduce((s, a) => s + a.sekunden, 0);
  const gesamtpunkte = input.aufgaben.reduce((s, a) => s + a.punkte, 0);
  const total = falltextZeit + aufgabenZeit;

  return {
    fallId: input.fallId,
    falltextZeit,
    aufgabenZeit,
    gesamtpunkte,
    total,
    totalMin: Math.round(total / 60),
    perAufgabe,
  };
}

// ═══════════════════════════════════════════════════
// BERECHNUNGEN — Thema-Budget
// ═══════════════════════════════════════════════════

export interface ThemaBudgetResult {
  themaId: string;
  ue: number;

  // Budget
  gesamtBudgetSek: number;   // UE × 45 × 0.55
  neuBudgetSek: number;      // 70% davon = neuer Content
  srBudgetSek: number;       // 30% davon = SR älterer Themen
  sessionNeuSek: number;     // Neuer Content pro Session (31,5 Min)
  sessionsBenoetigt: number; // ceil(neuContent / sessionNeu)

  // Content-Zeiten (Sekunden)
  wissenstextSek: number;
  snackSek: number;
  stepSek: number;
  gesamtNeuSek: number;

  // Budget-Check
  abweichung: number; // (gesamt - neuBudget) / neuBudget
  status: "✅ ok" | "⚠️ zu-viel" | "⚠️ zu-wenig";
  empfehlung: string;
}

export function calculateThemaBudget(input: ThemaBudgetInput): ThemaBudgetResult {
  const gesamtBudgetSek = getZielzeitSekunden(input.ue, APP_DICHTE_FAKTOR);
  const neuBudgetSek = Math.round(gesamtBudgetSek * SESSION_NEU_ANTEIL);
  const srBudgetSek = gesamtBudgetSek - neuBudgetSek;
  const sessionNeuSek = Math.round(SESSION_SEK * SESSION_NEU_ANTEIL); // 1890s

  const wissenstextSek = (input.wissenstexte ?? []).reduce(
    (s, w) => s + calculateWissenstextTime(w).total, 0
  );
  const snackSek = (input.snacks ?? []).reduce(
    (s, sn) => s + calculateSnackTime(sn).total, 0
  );
  const stepSek = input.steps ? calculateTotalTime(input.steps).totalSeconds : 0;
  const gesamtNeuSek = wissenstextSek + snackSek + stepSek;

  const sessionsBenoetigt = Math.ceil(gesamtNeuSek / sessionNeuSek);
  const abweichung = neuBudgetSek > 0 ? (gesamtNeuSek - neuBudgetSek) / neuBudgetSek : 0;

  let status: ThemaBudgetResult["status"];
  let empfehlung: string;
  const abweichungProzent = Math.round(abweichung * 100);
  const diffMin = Math.round(Math.abs(gesamtNeuSek - neuBudgetSek) / 60);

  if (Math.abs(abweichung) <= 0.20) {
    status = "✅ ok";
    empfehlung = `Budget eingehalten (${abweichungProzent > 0 ? "+" : ""}${abweichungProzent}%). ${sessionsBenoetigt} Session(s) à 45 Min.`;
  } else if (abweichung > 0.20) {
    status = "⚠️ zu-viel";
    empfehlung = `+${abweichungProzent}% über Budget (+${diffMin} Min). ${Math.ceil(diffMin / 5)} Steps oder einen Wissenstext kürzen.`;
  } else {
    status = "⚠️ zu-wenig";
    empfehlung = `${abweichungProzent}% unter Budget (-${diffMin} Min). ${Math.ceil(diffMin / 5)} Bausteine oder Steps ergänzen.`;
  }

  return {
    themaId: input.themaId,
    ue: input.ue,
    gesamtBudgetSek,
    neuBudgetSek,
    srBudgetSek,
    sessionNeuSek,
    sessionsBenoetigt,
    wissenstextSek,
    snackSek,
    stepSek,
    gesamtNeuSek,
    abweichung,
    status,
    empfehlung,
  };
}

// ═══════════════════════════════════════════════════
// HILFSFUNKTIONEN
// ═══════════════════════════════════════════════════

function fmt(sek: number): string {
  const total = Math.round(sek);
  const min = Math.floor(total / 60);
  const s = total % 60;
  return s > 0 ? `${min}m ${s}s` : `${min}m`;
}

function printThemaBudget(result: ThemaBudgetResult): void {
  const b = result;
  console.log(`\n${"─".repeat(60)}`);
  console.log(`Thema: ${b.themaId}  (${b.ue} UE)`);
  console.log(`${"─".repeat(60)}`);
  console.log(`Budget gesamt:      ${fmt(b.gesamtBudgetSek)}  (${b.ue} UE × 45 × 0,55)`);
  console.log(`  davon neu (70%):  ${fmt(b.neuBudgetSek)}`);
  console.log(`  davon SR  (30%):  ${fmt(b.srBudgetSek)}  (ältere Themen)`);
  console.log(`  pro Session neu:  ${fmt(b.sessionNeuSek)}  (31,5 Min)`);
  console.log(``);
  console.log(`Content (neu):`);
  console.log(`  Wissenstexte:     ${fmt(b.wissenstextSek)}`);
  console.log(`  Snacks:           ${fmt(b.snackSek)}`);
  console.log(`  Steps:            ${fmt(b.stepSek)}`);
  console.log(`  ─────────────────────────────`);
  console.log(`  Gesamt neu:       ${fmt(b.gesamtNeuSek)}`);
  console.log(``);
  console.log(`Sessions benötigt:  ${b.sessionsBenoetigt}  à 45 Min`);
  console.log(`Status:             ${b.status}`);
  console.log(`Empfehlung:         ${b.empfehlung}`);
}

function printPruefungsfall(result: PruefungsfallZeit): void {
  console.log(`\n${"─".repeat(60)}`);
  console.log(`Prüfungsfall: ${result.fallId}  (${result.gesamtpunkte}P)`);
  console.log(`${"─".repeat(60)}`);
  console.log(`Falltext lesen:     ${fmt(result.falltextZeit)}`);
  console.log(`Aufgaben schreiben: ${fmt(result.aufgabenZeit)}`);
  result.perAufgabe.forEach((a) => {
    const desc = a.beschreibung ? `  "${a.beschreibung}"` : "";
    console.log(`  AFB ${a.afb} ${a.operator.padEnd(12)} ${String(a.punkte).padStart(2)}P → ${fmt(a.sekunden)}${desc}`);
  });
  console.log(`  ─────────────────────────────`);
  console.log(`Gesamt:             ${fmt(result.total)}  (~${result.totalMin} Min)`);
  const ueAequivalent = (result.total / (45 * 60)).toFixed(1);
  console.log(`UE-Äquivalent:      ~${ueAequivalent} UE`);
}

// ═══════════════════════════════════════════════════
// CLI — Beispielrechnungen
// ═══════════════════════════════════════════════════

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("=== Content-Budget-Rechner v1 ===");

  // Beispiel 1: Thema "Sturz-Prophylaxe" (4 UE)
  const sturzBudget = calculateThemaBudget({
    themaId: "sturz-prophylaxe",
    ue: 4,
    sprachLevel: "c1",
    wissenstexte: [
      { zeichen: 600, bloomLevel: 2, sprachLevel: "c1" },              // Was ist Sturz?
      { zeichen: 700, bloomLevel: 2, sprachLevel: "c1", hatBilder: true }, // Risikofaktoren
      { zeichen: 500, bloomLevel: 3, sprachLevel: "c1" },              // Maßnahmen
    ],
    snacks: [
      { zeichen: 120, sprachLevel: "c1" }, // Sturzstatistik
      { zeichen: 150, sprachLevel: "c1" }, // Mnemonic ABCDE
      { zeichen: 100, sprachLevel: "c1" }, // Wichtigste Fachbegriffe
    ],
    steps: [
      { zeichen: 150, bloomLevel: 2, stepType: "mc", sprachLevel: "c1", anzahlOptionen: 4 },
      { zeichen: 150, bloomLevel: 2, stepType: "mc", sprachLevel: "c1", anzahlOptionen: 4 },
      { zeichen: 200, bloomLevel: 3, stepType: "matching", sprachLevel: "c1", dndElemente: 4 },
      { zeichen: 200, bloomLevel: 3, stepType: "sorting", sprachLevel: "c1", dndElemente: 5 },
      { zeichen: 250, bloomLevel: 3, stepType: "sequencing", sprachLevel: "c1", dndElemente: 6 },
      { zeichen: 200, bloomLevel: 2, stepType: "truefalse", sprachLevel: "c1" },
      { zeichen: 200, bloomLevel: 2, stepType: "truefalse", sprachLevel: "c1" },
      { zeichen: 300, bloomLevel: 4, stepType: "errorspot", sprachLevel: "c1" },
      { zeichen: 300, bloomLevel: 4, stepType: "hotspot", sprachLevel: "c1" },
      { zeichen: 350, bloomLevel: 5, stepType: "branching", sprachLevel: "c1" },
      { zeichen: 200, bloomLevel: 2, stepType: "checklist", sprachLevel: "c1" },
      { zeichen: 150, bloomLevel: 3, stepType: "summary", sprachLevel: "c1" },
    ],
  });
  printThemaBudget(sturzBudget);

  // Beispiel 2: Prüfungsfall "Frau Wagner, 78" (25P)
  const pruefungsfall = calculatePruefungsfallTime({
    fallId: "frau-wagner-sturz-chirurgie",
    fallTextZeichen: 1800, // ~300 Wörter
    sprachLevel: "c1",
    aufgaben: [
      { operator: "nennen",     punkte: 5, beschreibung: "5 Sturzrisikofaktoren bei Frau Wagner" },
      { operator: "beschreiben",punkte: 3, beschreibung: "Zustand nach Sturz" },
      { operator: "erlaeutern", punkte: 6, beschreibung: "3 Prophylaxemaßnahmen (je 2P)" },
      { operator: "begruenden", punkte: 6, beschreibung: "Prioritätenreihung begründen" },
      { operator: "planen",     punkte: 5, beschreibung: "Pflegeplanung für 24h" },
    ],
  });
  printPruefungsfall(pruefungsfall);

  // Beispiel 3: Vergleich B1-Schüler vs. C1-Schüler (Sturz-Prophylaxe)
  console.log("\n=== B1 vs. C1 — Sturz-Prophylaxe (4 UE) ===");
  const b1Budget = calculateThemaBudget({
    themaId: "sturz-prophylaxe (B1)",
    ue: 4,
    sprachLevel: "b1",
    wissenstexte: [
      { zeichen: 600, bloomLevel: 2, sprachLevel: "b1" },
      { zeichen: 700, bloomLevel: 2, sprachLevel: "b1", hatBilder: true },
      { zeichen: 500, bloomLevel: 3, sprachLevel: "b1" },
    ],
    snacks: [
      { zeichen: 120, sprachLevel: "b1" },
      { zeichen: 150, sprachLevel: "b1" },
    ],
    steps: [
      { zeichen: 150, bloomLevel: 2, stepType: "mc", sprachLevel: "b1", anzahlOptionen: 4 },
      { zeichen: 150, bloomLevel: 2, stepType: "mc", sprachLevel: "b1", anzahlOptionen: 4 },
      { zeichen: 200, bloomLevel: 3, stepType: "matching", sprachLevel: "b1", dndElemente: 4 },
      { zeichen: 200, bloomLevel: 2, stepType: "truefalse", sprachLevel: "b1" },
      { zeichen: 200, bloomLevel: 3, stepType: "sorting", sprachLevel: "b1", dndElemente: 4 },
    ],
  });
  printThemaBudget(b1Budget);
  console.log("");
}
