// AdaptiveSequencer — Middleware zwischen Content und Engine
// VISION.md: "Die KI hat mehrere Wege zum selben Lernziel."

import type { ContentStep } from "../../../content/ce-05/_types";
import type { StepAntwort, LernProfil } from "@/hooks/use-lern-fortschritt";
import { klassifiziereZeit, type ZeitKlasse } from "./antwortzeit";
import { kategorisiereFehler, zaehleThemaFehler } from "./fehler-analyse";
import { istGemeistert, lernzielVonStep } from "./kompetenz-register";

// --- Typen ---

export type InsertionReason =
  | "retry"        // Gleicher Inhalt, anderer Typ
  | "hilfe"        // Erklär-Step nach Fehler
  | "challenge"    // Schwierigerer Step nach Streak
  | "repetition"   // Spaced Repetition
  | "abwechslung"; // Duolingo Task-Cap

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
 * Erstellt einen einfachen Erklär-Step aus einem Frage-Step.
 * Wird eingefügt wenn der Schüler geraten hat.
 */
function createHilfeStep(original: ContentStep): ContentStep {
  const richtigeAntwort = original.question?.optionen?.find((o) => o.isCorrect);

  return {
    ...original,
    stepId: `${original.stepId}-hilfe`,
    stepType: "text",
    modus: "entdecker",
    xpValue: 3,
    phase: original.phase,
    bloomLevel: 1,
    contentC1: {
      title: `Kurz erklärt: ${original.contentC1.title}`,
      body: richtigeAntwort
        ? `${richtigeAntwort.explanation}\n\n${original.contentC1.body}`
        : original.contentC1.body,
    },
    contentB1: original.contentB1
      ? {
          title: `Kurz erklärt: ${original.contentB1.title}`,
          body: original.contentB1.body,
        }
      : undefined,
    question: undefined,
  };
}

// --- Die 10 Regeln ---

const REGELN: AdaptiveRegel[] = [
  // R1: Sofort-Hilfe bei Raten (höchste Priorität)
  {
    id: "R1",
    name: "Sofort-Hilfe bei Raten",
    priority: 10,
    check: (ctx, _profil, steps) => {
      if (!ctx.lastAntwort || ctx.lastAntwort.correct !== false) return null;
      if (ctx.lastAntwort.fehlerKategorie !== "raten") return null;
      const originalStep = steps.find((s) => s.stepId === ctx.lastAntwort!.stepId);
      if (!originalStep) return null;
      return createHilfeStep(originalStep);
    },
  },

  // R2: Typ-Wechsel nach 2+ gleichen Fehlern
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

  // R3: Erklärung bei Konzeptproblem
  {
    id: "R3",
    name: "Erklärung bei Konzeptproblem",
    priority: 8,
    check: (ctx, _profil, steps) => {
      if (!ctx.lastAntwort || ctx.lastAntwort.correct !== false) return null;
      if (ctx.lastAntwort.fehlerKategorie !== "konzept") return null;
      const originalStep = steps.find((s) => s.stepId === ctx.lastAntwort!.stepId);
      if (!originalStep) return null;
      return createHilfeStep(originalStep);
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

  // R6: Sprach-Hilfe bei niedrigem Sprachlevel
  {
    id: "R6",
    name: "Automatisch B1 bei Sprachproblem",
    priority: 7,
    check: (ctx, profil) => {
      if (!ctx.lastAntwort || ctx.lastAntwort.correct !== false) return null;
      if (ctx.lastAntwort.fehlerKategorie !== "sprache") return null;
      if (ctx.sprachLevel === "b1") return null; // Schon auf B1

      // Kein Step einfügen — signalisiert der Engine dass sie auf B1 wechseln soll
      return null;
    },
  },
];

// --- AdaptiveSequencer Klasse ---

export class AdaptiveSequencer {
  private steps: ContentStep[];
  private profil: LernProfil;
  private pendingInsertions: ContentStep[];
  private consecutiveTypeCount: number;
  private lastStepType: string;

  constructor(steps: ContentStep[], profil: LernProfil) {
    this.steps = steps;
    this.profil = profil;
    this.pendingInsertions = [];
    this.consecutiveTypeCount = 0;
    this.lastStepType = "";
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
}

/**
 * Erstellt einen neuen AdaptiveSequencer.
 */
export function createSequencer(steps: ContentStep[], profil: LernProfil): AdaptiveSequencer {
  return new AdaptiveSequencer(steps, profil);
}
