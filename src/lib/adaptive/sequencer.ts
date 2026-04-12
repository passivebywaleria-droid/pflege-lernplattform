// AdaptiveSequencer — Middleware zwischen Content und Engine
// VISION.md: "Die KI hat mehrere Wege zum selben Lernziel."

import type { ContentStep } from "../../../content/_types";
import type { StepAntwort, LernProfil } from "@/hooks/use-lern-fortschritt";
import { klassifiziereZeit, zeitKonfidenz } from "./antwortzeit";
import { zaehleThemaFehler } from "./fehler-analyse";
import { istGemeistert, lernzielVonStep } from "./kompetenz-register";

// --- Typen ---

export type InsertionReason =
  | "retry"        // Gleicher Inhalt, anderer Typ
  | "hilfe"        // Erklär-Step nach Fehler
  | "challenge"    // Schwierigerer Step nach Streak
  | "repetition"   // Spaced Repetition
  | "abwechslung"; // Duolingo Task-Cap

// Checkpoint-Scoring (ADAPTIVER-THEMENBOGEN.md)
export type CheckpointScore = "A" | "B" | "C";

// Phasen die bei Score A übersprungen werden können
const SKIPPABLE_PHASES_A: string[] = [
  "ANDERS_ERKLÄRT",
  "STORYTELLING",
];

// Phasen die bei Score B übersprungen werden können
const SKIPPABLE_PHASES_B: string[] = [
  "STORYTELLING",
];

export interface SequencerResult {
  step: ContentStep;
  isInserted: boolean;
  reason?: InsertionReason;
  shouldSkip: boolean;
}

export interface SequencerContext {
  currentIndex: number;
  lastAntwort: StepAntwort | null;
  sessionAntworten: StepAntwort[];
  streak: number;
  sprachLevel: "c1" | "b1";
  sessionStartTime: number;
  leId?: string;
  /** Intern: stepIds die als Challenge vorgezogen wurden */
  _challengedStepIds?: Set<string>;
}

// --- Regel-System ---

interface AdaptiveRegel {
  id: string;
  name: string;
  priority: number;
  check: (ctx: SequencerContext, profil: LernProfil, steps: ContentStep[]) => ContentStep | null;
}

// Typ-Transformation-Map: Welche Step-Typen können gleichen Inhalt darstellen
const TYP_ALTERNATIVEN: Record<string, string[]> = {
  mc: ["truefalse", "swipe", "fillin"],
  truefalse: ["mc", "swipe", "confidence"],
  matching: ["categorize", "sorting"],
  sorting: ["sequencing", "matching"],
  fillin: ["cloze", "mc"],
  cloze: ["fillin", "mc"],
  swipe: ["truefalse", "mc", "confidence"],
  categorize: ["matching", "sorting"],
};

/**
 * Erstellt einen Retry-Step mit anderem Typ.
 * Versucht MC→TrueFalse, TrueFalse→MC etc.
 */
function createTypWechsel(original: ContentStep, vermeiden: string): ContentStep | null {
  const alternativen = TYP_ALTERNATIVEN[original.stepType] ?? [];
  const neuerTyp = alternativen.find((t) => t !== vermeiden);
  if (!neuerTyp) return null;

  // MC → TrueFalse: Aus der richtigen Option eine Aussage machen
  if (original.stepType === "mc" && neuerTyp === "truefalse" && original.question?.optionen) {
    const correct = original.question.optionen.find((o) => o.isCorrect);
    if (!correct) return null;
    return {
      ...original,
      stepId: `${original.stepId}-adapt`,
      stepType: "truefalse",
      modus: "challenge",
      xpValue: 5,
      question: {
        ...original.question,
        fragetext: original.question?.fragetext ?? "",
        trueFalseCards: [
          {
            statement: correct.text,
            isTrue: true,
            explanation: correct.explanation,
          },
          ...(original.question.optionen
            .filter((o) => !o.isCorrect)
            .slice(0, 1)
            .map((o) => ({
              statement: o.text,
              isTrue: false,
              explanation: o.explanation,
            }))),
        ],
      },
    };
  }

  // Andere Typen → MC-Retry
  if (neuerTyp === "mc" && original.question?.optionen) {
    return {
      ...original,
      stepId: `${original.stepId}-adapt`,
      stepType: "mc",
      modus: "challenge",
      xpValue: 5,
      contentC1: {
        ...original.contentC1,
        title: `Nochmal: ${original.contentC1.title}`,
      },
    };
  }

  return null;
}

/**
 * Erstellt einen Erklär-Step basierend auf der Fehlerkategorie.
 * Problem #3: Verschiedene Fehlertypen → verschiedene Erklärungen.
 *
 * - raten: Thema nochmal von Grund auf, Schritt für Schritt
 * - sprache: Einfachere Sprache, Glossar, B1-Version
 * - verwechslung: Unterschied zwischen Konzepten erklären
 * - konzept: Anderer Erklärungsweg, Analogie aus Alltag
 */
function createHilfeStep(
  original: ContentStep,
  fehlerKategorie?: "raten" | "konzept" | "sprache" | "verwechslung" | "fluechtig",
): ContentStep {
  const richtigeAntwort = original.question?.optionen?.find((o) => o.isCorrect);
  const kategorie = fehlerKategorie ?? "konzept";

  let title: string;
  let body: string;
  let titleB1: string | undefined;
  let bodyB1: string | undefined;

  switch (kategorie) {
    case "raten": {
      // Schüler hat geraten → Thema nochmal erklären, langsam
      title = `Schritt für Schritt: ${original.contentC1.title}`;
      body = original.contentC1.body;
      if (richtigeAntwort) {
        body = `**Kernaussage:** ${richtigeAntwort.text}\n\n${richtigeAntwort.explanation}\n\n---\n\n${original.contentC1.body}`;
      }
      titleB1 = original.contentB1 ? `Schritt für Schritt: ${original.contentB1.title}` : undefined;
      bodyB1 = original.contentB1?.body;
      break;
    }
    case "sprache": {
      // Sprachproblem → B1-Version, einfache Sprache
      title = `Einfach erklärt: ${original.contentC1.title}`;
      body = original.contentB1?.body ?? original.contentC1.body;
      if (richtigeAntwort) {
        const erklaerung = richtigeAntwort.explanationB1 ?? richtigeAntwort.explanation;
        body = `${erklaerung}\n\n---\n\n${body}`;
      }
      // Glossar-Begriffe hervorheben
      if (original.contentC1.glossarBegriffe?.length) {
        body += `\n\n**Wichtige Wörter:** ${original.contentC1.glossarBegriffe.join(", ")}`;
      }
      titleB1 = `Einfach erklärt: ${original.contentB1?.title ?? original.contentC1.title}`;
      bodyB1 = body;
      break;
    }
    case "verwechslung": {
      // Verwechslung → Unterschied zwischen Optionen erklären
      title = `Unterschied erklärt: ${original.contentC1.title}`;
      const vergleiche: string[] = [];
      if (richtigeAntwort) {
        vergleiche.push(`**Richtig: ${richtigeAntwort.text}**\n${richtigeAntwort.explanation}`);
      }
      const falscheOptionen = original.question?.optionen?.filter((o) => !o.isCorrect) ?? [];
      for (const opt of falscheOptionen.slice(0, 2)) {
        vergleiche.push(`**Nicht ${opt.text}** — ${opt.explanation}`);
      }
      body = vergleiche.join("\n\n---\n\n");
      if (original.contentC1.body) {
        body += `\n\n---\n\n${original.contentC1.body}`;
      }
      titleB1 = original.contentB1 ? `Unterschied erklärt: ${original.contentB1.title}` : undefined;
      bodyB1 = original.contentB1?.body;
      break;
    }
    case "konzept":
    default: {
      // Konzeptproblem → anderer Erklärungsweg
      title = `Anders erklärt: ${original.contentC1.title}`;
      body = richtigeAntwort
        ? `${richtigeAntwort.explanation}\n\n---\n\n${original.contentC1.body}`
        : original.contentC1.body;
      titleB1 = original.contentB1 ? `Anders erklärt: ${original.contentB1.title}` : undefined;
      bodyB1 = original.contentB1?.body;
      break;
    }
  }

  return {
    ...original,
    stepId: `${original.stepId}-hilfe`,
    stepType: "text",
    modus: "entdecker",
    xpValue: 3,
    phase: original.phase,
    bloomLevel: 1,
    contentC1: { title, body },
    contentB1: titleB1 && bodyB1 ? { title: titleB1, body: bodyB1 } : undefined,
    question: undefined,
  };
}

// --- Die 10 Regeln ---

const REGELN: AdaptiveRegel[] = [
  // R1, R3, R3b, R3c: DEAKTIVIERT — Scaffolding-Overlay übernimmt die Fehler-Erklärung.
  // Das Overlay zeigt KI-generiertes Sandwich-Feedback mit ECHTEN alternativen Erklärungen
  // statt den gleichen Body-Text mit anderem Titel zu wiederholen.
  // createHilfeStep() bleibt als Fallback-Funktion erhalten (z.B. ohne Internet).

  // R2: Typ-Wechsel nach 2+ gleichen Fehlern (bleibt aktiv — erzeugt ANDEREN Fragetyp)
  {
    id: "R2",
    name: "Typ-Wechsel bei Wiederholung",
    priority: 9,
    check: (ctx, _profil, steps) => {
      if (!ctx.lastAntwort || ctx.lastAntwort.correct !== false) return null;
      const fehlerCount = zaehleThemaFehler(ctx.sessionAntworten, ctx.lastAntwort.stepId);
      if (fehlerCount < 2) return null;
      const originalStep = steps.find((s) => s.stepId === ctx.lastAntwort!.stepId);
      if (!originalStep) return null;
      return createTypWechsel(originalStep, originalStep.stepType);
    },
  },

  // R4: Challenge bei 3+ richtig + schnell
  {
    id: "R4",
    name: "Challenge bei Streak",
    priority: 5,
    check: (ctx, _profil, steps) => {
      if (ctx.streak < 3) return null;
      if (!ctx.lastAntwort) return null;
      const zeitKlasse = klassifiziereZeit(ctx.lastAntwort.zeitMs, ctx.lastAntwort.stepType);
      if (zeitKlasse !== "blitz" && zeitKlasse !== "sicher") return null;

      // Finde nächsten Step mit höherem Bloom und mache ihn zum Challenge
      const nextSteps = steps.slice(ctx.currentIndex + 1);
      const challengeStep = nextSteps.find(
        (s) => s.bloomLevel > (ctx.lastAntwort?.bloomLevel ?? 2) && s.question
      );
      if (!challengeStep) return null;

      // Merke Original-stepId → wird beim shouldSkipStep übersprungen
      ctx._challengedStepIds?.add(challengeStep.stepId);

      return {
        ...challengeStep,
        stepId: `${challengeStep.stepId}-challenge`,
        modus: "challenge",
        xpValue: (challengeStep.xpValue ?? 10) * 2,
      };
    },
  },

  // R5: Abwechslung erzwingen (kein 4. MC am Stück)
  {
    id: "R5",
    name: "Abwechslung erzwingen",
    priority: 4,
    check: (ctx) => {
      const letzte3 = ctx.sessionAntworten.slice(-3);
      if (letzte3.length < 3) return null;
      const gleicherTyp = letzte3.every((a) => a.stepType === letzte3[0].stepType);
      if (!gleicherTyp) return null;
      // Kein Step einfügen — stattdessen wird shouldSkip den nächsten gleichen Typ überspringen
      return null;
    },
  },

  // R6: (ersetzt durch R3b — Sprachhilfe wird als Hilfe-Step eingefügt)
];

// --- AdaptiveSequencer Klasse ---

export class AdaptiveSequencer {
  private steps: ContentStep[];
  private profil: LernProfil;
  private pendingInsertions: ContentStep[];
  private consecutiveTypeCount: number;
  private lastStepType: string;
  /** stepIds die als Challenge vorgezogen wurden → Original überspringen */
  private challengedStepIds: Set<string>;

  constructor(steps: ContentStep[], profil: LernProfil) {
    this.steps = steps;
    this.profil = profil;
    this.pendingInsertions = [];
    this.consecutiveTypeCount = 0;
    this.lastStepType = "";
    this.challengedStepIds = new Set();
  }

  /** Aktualisiert das Profil (z.B. nach Achsen-Neuberechnung) */
  updateProfil(profil: LernProfil): void {
    this.profil = profil;
  }

  /**
   * Entscheidet was nach dem aktuellen Step kommt.
   * Prüft alle Regeln nach Priorität und gibt ggf. einen eingefügten Step zurück.
   */
  getNextStep(ctx: SequencerContext): SequencerResult {
    // challengedStepIds Set im Context mitgeben für R4
    ctx._challengedStepIds = this.challengedStepIds;

    // 1. Pending Insertions zuerst abarbeiten
    if (this.pendingInsertions.length > 0) {
      const inserted = this.pendingInsertions.shift()!;
      return { step: inserted, isInserted: true, reason: "retry", shouldSkip: false };
    }

    // 2. Regeln prüfen (nach Priorität sortiert)
    const sortierteRegeln = [...REGELN].sort((a, b) => b.priority - a.priority);
    for (const regel of sortierteRegeln) {
      const result = regel.check(ctx, this.profil, this.steps);
      if (result) {
        const reason = regel.id === "R4" ? "challenge" as const :
                       regel.id === "R1" ? "hilfe" as const :
                       "retry" as const;
        return { step: result, isInserted: true, reason, shouldSkip: false };
      }
    }

    // 3. Nächsten normalen Step zurückgeben
    const nextIndex = ctx.currentIndex + 1;
    if (nextIndex >= this.steps.length) {
      return { step: this.steps[this.steps.length - 1], isInserted: false, shouldSkip: false };
    }

    const nextStep = this.steps[nextIndex];

    // 4. shouldSkip prüfen
    const shouldSkip = this.shouldSkipStep(nextStep, ctx);

    // 5. Abwechslung tracken
    if (nextStep.stepType === this.lastStepType) {
      this.consecutiveTypeCount++;
    } else {
      this.consecutiveTypeCount = 1;
      this.lastStepType = nextStep.stepType;
    }

    return { step: nextStep, isInserted: false, shouldSkip };
  }

  /**
   * Prüft ob ein Step übersprungen werden soll.
   */
  private shouldSkipStep(step: ContentStep, ctx: SequencerContext): boolean {
    const achsen = this.profil.achsen;
    const register = this.profil.kompetenzRegister;

    // Challenge-Dedup: Step wurde bereits als Challenge vorgezogen → Original überspringen
    if (this.challengedStepIds.has(step.stepId)) {
      return true;
    }

    // Gemeistertes Lernziel → Quiz-Steps überspringen (Text-Steps behalten für Auffrischung)
    if (
      register &&
      step.question &&
      step.bloomLevel <= 3
    ) {
      const lernzielId = lernzielVonStep(step.stepId, step.lernziel, ctx.leId);
      if (istGemeistert(register, lernzielId)) {
        return true;
      }
    }

    // Text-Steps bei hohem Fachwissen überspringen (> 4)
    if (
      step.stepType === "text" &&
      step.bloomLevel <= 2 &&
      achsen &&
      achsen.fachwissen > 4
    ) {
      return true;
    }

    // Abwechslung: 4+ gleiche Typen am Stück → überspringen
    if (
      step.stepType === this.lastStepType &&
      this.consecutiveTypeCount >= 3
    ) {
      return true;
    }

    return false;
  }

  /**
   * Soll die Engine automatisch auf B1 wechseln?
   */
  shouldSwitchToB1(ctx: SequencerContext): boolean {
    // Wenn letzte 3 Antworten falsch + Sprach-Achse < 2.5
    const letzte3 = ctx.sessionAntworten.slice(-3);
    if (letzte3.length < 3) return false;
    const alleFalsch = letzte3.every((a) => a.correct === false);
    const sprachAchse = this.profil.achsen?.sprache ?? 3;
    return alleFalsch && sprachAchse < 2.5;
  }

  /**
   * Soll der Schüler ermutigt werden? (Sandwich-Prinzip)
   */
  shouldEncourage(ctx: SequencerContext): boolean {
    // Nach 2 Fehlern am Stück → Ermutigung
    const letzte2 = ctx.sessionAntworten.slice(-2);
    return letzte2.length >= 2 && letzte2.every((a) => a.correct === false);
  }

  // --- Problem #1: Checkpoint-basiertes Branching ---

  /**
   * Bewertet einen CHECKPOINT-Step und gibt den Score zurück.
   * Score A (≥85%): Phasen überspringen (ANDERS_ERKLÄRT, STORYTELLING)
   * Score B (60-84%): Standard-Pfad
   * Score C (<60%): Voller Bogen, alle Phasen
   */
  evaluateCheckpoint(ctx: SequencerContext): CheckpointScore {
    // Finde alle Antworten zum aktuellen Themenblock
    const checkpointAntworten = this.getThemenblockAntworten(ctx);
    if (checkpointAntworten.length === 0) return "B";

    const bewertbare = checkpointAntworten.filter((a) => a.correct !== null);
    if (bewertbare.length === 0) return "B";

    const richtig = bewertbare.filter((a) => a.correct === true).length;
    const quote = richtig / bewertbare.length;

    // Antwortzeit-Konfidenz einbeziehen (Problem #7)
    const durchschnittKonfidenz = bewertbare.reduce(
      (sum, a) => sum + zeitKonfidenz(a.zeitMs, a.stepType), 0,
    ) / bewertbare.length;

    // Gewichteter Score: 70% Richtigkeit, 30% Zeitkonfidenz
    const gewichteterScore = quote * 0.7 + durchschnittKonfidenz * 0.3;

    if (gewichteterScore >= 0.85) return "A";
    if (gewichteterScore >= 0.60) return "B";
    return "C";
  }

  /**
   * Gibt Themenblock-Antworten zurück (alle Antworten seit dem letzten SZENE/BRÜCKE-Step).
   */
  private getThemenblockAntworten(ctx: SequencerContext): StepAntwort[] {
    // Finde den aktuellen Step und seinen Themenblock
    const aktuellerStep = this.steps[ctx.currentIndex];
    if (!aktuellerStep?.themenblockPhase) return ctx.sessionAntworten;

    // Extrahiere Themenblock-ID aus stepId (z.B. "le01-s1-tb1-03" → "tb1")
    const tbMatch = aktuellerStep.stepId.match(/tb(\d+)/);
    if (!tbMatch) return ctx.sessionAntworten;

    const tbPrefix = `tb${tbMatch[1]}`;

    // Filtere Antworten die zu diesem Themenblock gehören
    return ctx.sessionAntworten.filter((a) => a.stepId.includes(tbPrefix));
  }

  /**
   * Bestimmt welche Steps nach einem Checkpoint übersprungen werden sollen.
   * Gibt die Anzahl der zu überspringenden Steps zurück.
   */
  getSkipCountAfterCheckpoint(
    ctx: SequencerContext,
    score: CheckpointScore,
  ): number {
    if (score === "C") return 0; // Voller Bogen

    const skipPhases = score === "A" ? SKIPPABLE_PHASES_A : SKIPPABLE_PHASES_B;
    let skipCount = 0;

    // Zähle aufeinanderfolgende Steps die übersprungen werden können
    for (let i = ctx.currentIndex + 1; i < this.steps.length; i++) {
      const step = this.steps[i];
      if (step.themenblockPhase && skipPhases.includes(step.themenblockPhase)) {
        skipCount++;
      } else {
        break; // Stoppe beim ersten nicht-überspringbaren Step
      }
    }

    return skipCount;
  }

  /**
   * Prüft ob der aktuelle Step ein CHECKPOINT ist.
   */
  isCheckpointStep(index: number): boolean {
    return this.steps[index]?.themenblockPhase === "CHECKPOINT";
  }

  // --- Problem #6: Spaced Repetition Review-Steps ---

  /**
   * Erzeugt Review-Steps aus fälligen Lernzielen.
   * Wird am Session-Start aufgerufen (Testing Effect: 3 Pings am Anfang).
   */
  getReviewSteps(maxCount = 3): ContentStep[] {
    if (!this.profil.kompetenzRegister) return [];

    const jetzt = new Date();
    const faellig = Object.values(this.profil.kompetenzRegister)
      .filter((e) => {
        if (e.stufe === "unbekannt") return false;
        return new Date(e.naechsteWiederholung) <= jetzt;
      })
      .sort((a, b) => {
        // Niedrigste Stufe zuerst (versucht vor vertraut vor sicher)
        const stufePrio: Record<string, number> = {
          versucht: 1, vertraut: 2, sicher: 3, gemeistert: 4, unbekannt: 5,
        };
        return (stufePrio[a.stufe] ?? 5) - (stufePrio[b.stufe] ?? 5);
      })
      .slice(0, maxCount);

    if (faellig.length === 0) return [];

    // Alle stepIds im aktuellen Haupt-Array (um Duplikate zu vermeiden)
    const mainStepIds = new Set(this.steps.map((s) => s.stepId));

    // Finde passende Steps für die fälligen Lernziele
    const reviewSteps: ContentStep[] = [];
    for (const eintrag of faellig) {
      const matchingStep = this.steps.find((s) => {
        const lzId = lernzielVonStep(s.stepId, s.lernziel);
        return lzId === eintrag.lernzielId && s.question;
      });

      if (matchingStep) {
        // Dedup: Wenn der Step schon im Haupt-Array ist, nicht nochmal als Review einfügen
        // (der Student wird ihn ohnehin in der normalen Reihenfolge sehen)
        if (mainStepIds.has(matchingStep.stepId)) continue;

        reviewSteps.push({
          ...matchingStep,
          stepId: `${matchingStep.stepId}-review`,
          modus: "checkpoint",
          xpValue: 5,
          contentC1: {
            ...matchingStep.contentC1,
            title: `Auffrischung: ${matchingStep.contentC1.title}`,
          },
          contentB1: matchingStep.contentB1
            ? {
                ...matchingStep.contentB1,
                title: `Auffrischung: ${matchingStep.contentB1.title}`,
              }
            : undefined,
        });
      }
    }

    return reviewSteps;
  }

  // --- Problem #7: Per-Thema Antwortzeit-Tracking ---

  /**
   * Berechnet pro-Thema Konfidenz basierend auf Antwortzeiten.
   * Gibt eine Map zurück: lernzielId → durchschnittliche Zeitkonfidenz (0-1)
   */
  getThemaKonfidenz(antworten: StepAntwort[]): Record<string, number> {
    const themaMap: Record<string, { sumKonfidenz: number; count: number }> = {};

    for (const a of antworten) {
      if (a.correct === null) continue;
      const konfidenz = zeitKonfidenz(a.zeitMs, a.stepType);
      const thema = a.stepId.replace(/-retry$|-adapt$|-hilfe$|-review$/, "").slice(0, 12);

      if (!themaMap[thema]) {
        themaMap[thema] = { sumKonfidenz: 0, count: 0 };
      }
      themaMap[thema].sumKonfidenz += konfidenz;
      themaMap[thema].count++;
    }

    const result: Record<string, number> = {};
    for (const [thema, data] of Object.entries(themaMap)) {
      result[thema] = data.sumKonfidenz / data.count;
    }
    return result;
  }
}

/**
 * Erstellt einen neuen AdaptiveSequencer.
 */
export function createSequencer(steps: ContentStep[], profil: LernProfil): AdaptiveSequencer {
  return new AdaptiveSequencer(steps, profil);
}

// --- Konfidenz-Kalibrierung ---

export interface KonfidenzKalibrierung {
  typ: "gut-kalibriert" | "unterschaetzt" | "ueberschaetzt";
  beschreibung: string;
  schnelleRichtige: number;
  langsameRichtige: number;
  schnelleFalsche: number;
}

/**
 * Berechnet die Konfidenz-Kalibrierung basierend auf Antwortzeiten.
 * Schnell + richtig = gut kalibriert, schnell + falsch = ueberschaetzt,
 * langsam + richtig = unterschaetzt.
 */
export function berechneKonfidenzKalibrierung(antworten: StepAntwort[]): KonfidenzKalibrierung | null {
  const bewertbare = antworten.filter(a => a.correct !== null);
  if (bewertbare.length < 5) return null;

  let schnelleRichtige = 0;
  let langsameRichtige = 0;
  let schnelleFalsche = 0;

  for (const a of bewertbare) {
    const istSchnell = a.zeitMs < 8000;
    if (a.correct && istSchnell) schnelleRichtige++;
    if (a.correct && !istSchnell) langsameRichtige++;
    if (!a.correct && istSchnell) schnelleFalsche++;
  }

  if (schnelleFalsche >= 3) {
    return {
      typ: "ueberschaetzt",
      beschreibung: "Du warst manchmal zu schnell -- lies die Frage nochmal genau durch.",
      schnelleRichtige, langsameRichtige, schnelleFalsche,
    };
  }
  if (langsameRichtige >= 4 && schnelleFalsche === 0) {
    return {
      typ: "unterschaetzt",
      beschreibung: "Du weißt mehr als du denkst! Vertrau dir ruhig mehr.",
      schnelleRichtige, langsameRichtige, schnelleFalsche,
    };
  }
  return {
    typ: "gut-kalibriert",
    beschreibung: "Gut eingeschätzt! Du weißt was du kannst.",
    schnelleRichtige, langsameRichtige, schnelleFalsche,
  };
}

// --- Konfidenz-Kalibrierung v2 (Drei-Stufen-Zeitmodell) ---

export function berechneKonfidenzKalibrierungV2(
  antworten: Array<{ correct: boolean | null; zeitMs: number; bloomLevel?: number }>
): { typ: "gut-kalibriert" | "unterschaetzt" | "ueberschaetzt" | "unbekannt"; text: string } {
  const gueltig = antworten.filter((a) => a.correct !== null && a.zeitMs > 0);

  let sicherUndRichtig = 0;
  let sicherUndFalsch = 0;
  let unsicherUndRichtig = 0;
  let _unsicherUndFalsch = 0;

  for (const a of gueltig) {
    let konfidenz: "sicher" | "mittel" | "unsicher";
    if (a.zeitMs < 5000) {
      konfidenz = "sicher";
    } else if (a.zeitMs < 15000) {
      konfidenz = "mittel";
    } else {
      konfidenz = "unsicher";
    }

    if (konfidenz === "sicher" && a.correct) sicherUndRichtig++;
    if (konfidenz === "sicher" && !a.correct) sicherUndFalsch++;
    if (konfidenz === "unsicher" && a.correct) unsicherUndRichtig++;
    if (konfidenz === "unsicher" && !a.correct) _unsicherUndFalsch++;
  }

  if (sicherUndRichtig > 3 && sicherUndFalsch <= 1) {
    return {
      typ: "gut-kalibriert",
      text: "Dein Bauchgefühl stimmt — du weißt mehr als du denkst!",
    };
  }

  if (unsicherUndRichtig > 2) {
    return {
      typ: "unterschaetzt",
      text: `Du warst ${unsicherUndRichtig}x unsicher aber richtig — vertrau dir mehr!`,
    };
  }

  if (sicherUndFalsch > 2) {
    return {
      typ: "ueberschaetzt",
      text: `Du warst ${sicherUndFalsch}x sicher aber falsch — lies nochmal genauer.`,
    };
  }

  return { typ: "unbekannt", text: "" };
}
