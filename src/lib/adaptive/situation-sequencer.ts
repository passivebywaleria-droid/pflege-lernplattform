// SituationSequencer — Phasen-basierte Navigation für Lernsituationen
// Ergänzt den AdaptiveSequencer für CE-02+ situationsbasiertes Lernen.
//
// VISION.md: "Die KI hat mehrere Wege zum selben Lernziel."
// Konzept: Patient → 6 Pflegeprozess-Phasen → Kern-Steps + Optionale Steps + Baustein-Trigger

import type {
  ContentStep,
  PflegeProzessPhase,
  SituationsPhase,
  Lernsituation,
  BausteinTrigger,
  WissensStufe,
  Wissensbaustein,
  Thema,
} from "../../../content/_types";
import type { LernProfil, StepAntwort } from "@/hooks/use-lern-fortschritt";
import { klassifiziereZeit, zeitKonfidenz } from "./antwortzeit";

// --- Typen ---

/** Score nach einer Phase */
export type PhaseScore = "A" | "B" | "C";

/** Ergebnis einer Phase */
export interface PhaseErgebnis {
  phase: PflegeProzessPhase;
  score: PhaseScore;
  stepsBearbeitet: number;
  richtig: number;
  falsch: number;
  durchschnittKonfidenz: number;
}

/** Nächster Schritt-Vorschlag vom Sequencer */
export interface SituationSequencerResult {
  step: ContentStep;
  isInserted: boolean;
  reason?: "kern" | "optional" | "baustein" | "komplikation" | "wiederholung";
  phase: PflegeProzessPhase;
  phaseProgress: number; // 0-1, wie weit in der aktuellen Phase
}

/** Context für den Situation-Sequencer */
export interface SituationSequencerContext {
  situation: Lernsituation;
  currentPhaseIndex: number;
  currentStepIndex: number;
  phaseAntworten: StepAntwort[];
  sessionAntworten: StepAntwort[];
  profil: LernProfil;
  /** Bereits eingeblendete Baustein-IDs */
  geseheneBasuteine: Set<string>;
}

// --- Phasen-Reihenfolge ---

const PHASEN_REIHENFOLGE: PflegeProzessPhase[] = [
  "informieren",
  "beobachten",
  "planen",
  "durchfuehren",
  "evaluieren",
  "dokumentieren",
];

// --- SituationSequencer ---

export class SituationSequencer {
  private situation: Lernsituation;
  private themen: Map<string, Thema>;
  private profil: LernProfil;

  constructor(
    situation: Lernsituation,
    themen: Thema[],
    profil: LernProfil,
  ) {
    this.situation = situation;
    this.themen = new Map(themen.map((t) => [t.themaId, t]));
    this.profil = profil;
  }

  /** Aktualisiert das Profil (z.B. nach Achsen-Neuberechnung) */
  updateProfil(profil: LernProfil): void {
    this.profil = profil;
  }

  /** Gibt die aktuelle Phase zurück. */
  getCurrentPhase(phaseIndex: number): SituationsPhase | null {
    return this.situation.phasen[phaseIndex] ?? null;
  }

  /** Alle Steps für eine Phase zusammenstellen (Kern + ausgewählte Optionale). */
  getPhaseSteps(phaseIndex: number): ContentStep[] {
    const phase = this.situation.phasen[phaseIndex];
    if (!phase) return [];

    const steps = [...phase.kernSteps];

    // Optionale Steps basierend auf Profil auswählen
    const fachwissen = this.profil.achsen?.fachwissen ?? 2;

    if (fachwissen < 3) {
      // Schwache Schüler: ALLE optionalen Steps
      steps.push(...phase.optionaleSteps);
    } else if (fachwissen < 4) {
      // Mittlere Schüler: Hälfte der optionalen Steps (höherer Bloom)
      const sortiert = [...phase.optionaleSteps].sort(
        (a, b) => b.bloomLevel - a.bloomLevel,
      );
      steps.push(...sortiert.slice(0, Math.ceil(sortiert.length / 2)));
    }
    // Starke Schüler (≥4): Nur Kern-Steps

    return steps;
  }

  /**
   * Bewertet eine abgeschlossene Phase.
   * Score A (≥85%): Nächste Phase direkt
   * Score B (60-84%): 1 Wiederholung, dann nächste Phase
   * Score C (<60%): Wissensbausteine + Wiederholung + nächste Phase
   */
  evaluatePhase(antworten: StepAntwort[]): PhaseErgebnis {
    const bewertbare = antworten.filter((a) => a.correct !== null);
    const phase = PHASEN_REIHENFOLGE[0]; // wird vom Caller gesetzt

    if (bewertbare.length === 0) {
      return {
        phase,
        score: "B",
        stepsBearbeitet: antworten.length,
        richtig: 0,
        falsch: 0,
        durchschnittKonfidenz: 0.5,
      };
    }

    const richtig = bewertbare.filter((a) => a.correct === true).length;
    const falsch = bewertbare.length - richtig;
    const quote = richtig / bewertbare.length;

    // Zeitkonfidenz einbeziehen
    const durchschnittKonfidenz =
      bewertbare.reduce(
        (sum, a) => sum + zeitKonfidenz(a.zeitMs, a.stepType),
        0,
      ) / bewertbare.length;

    // Gewichteter Score: 70% Richtigkeit, 30% Zeitkonfidenz
    const gewichteterScore = quote * 0.7 + durchschnittKonfidenz * 0.3;

    let score: PhaseScore;
    if (gewichteterScore >= 0.85) score = "A";
    else if (gewichteterScore >= 0.6) score = "B";
    else score = "C";

    return {
      phase,
      score,
      stepsBearbeitet: antworten.length,
      richtig,
      falsch,
      durchschnittKonfidenz,
    };
  }

  /**
   * Prüft ob ein Baustein-Trigger ausgelöst wurde.
   * Gibt den passenden Wissensbaustein zurück (in der richtigen Stufe).
   */
  checkBausteinTrigger(
    phase: PflegeProzessPhase,
    lastAntwort: StepAntwort,
    geseheneBasuteine: Set<string>,
  ): { baustein: Wissensbaustein; stufe: WissensStufe } | null {
    if (lastAntwort.correct !== false) return null;

    // Finde passende Trigger für diese Phase
    const trigger = this.situation.bausteinTrigger.filter(
      (t) =>
        t.phase === phase &&
        !geseheneBasuteine.has(t.bausteinId),
    );

    if (trigger.length === 0) return null;

    // Ersten passenden Trigger verwenden
    const selectedTrigger = trigger[0];

    // Baustein finden
    for (const thema of this.themen.values()) {
      const baustein = thema.bausteine.find(
        (b) => b.bausteinId === selectedTrigger.bausteinId,
      );
      if (baustein) {
        // Stufe basierend auf Profil wählen
        const fachwissen = this.profil.achsen?.fachwissen ?? 2;
        let stufe: WissensStufe;
        if (fachwissen >= 4) stufe = 1; // Stark: Denkfrage
        else if (fachwissen >= 2.5) stufe = 2; // Mittel: Hinweis
        else stufe = 3; // Schwach: Volle Erklärung

        return { baustein, stufe };
      }
    }

    return null;
  }

  /**
   * Erzeugt einen ContentStep aus einem Wissensbaustein (für Inline-Einblendung).
   */
  bausteinToStep(
    baustein: Wissensbaustein,
    stufe: WissensStufe,
  ): ContentStep {
    switch (stufe) {
      case 1:
        // Denkfrage → MC-Step
        return {
          stepId: `${baustein.bausteinId}-denkfrage`,
          phase: 1,
          stepType: "mc",
          bloomLevel: 3,
          kompetenzbereich: "I.1",
          quellen: [],
          modus: "challenge",
          xpValue: 8,
          contentC1: {
            title: baustein.titel,
            body: baustein.stufe1.frage,
          },
          question: {
            fragetext: baustein.stufe1.frage,
            optionen: [
              {
                text: baustein.stufe1.antwort,
                isCorrect: true,
                explanation: `Richtig! ${baustein.stufe1.antwort}`,
              },
            ],
          },
        };
      case 2:
        // Hinweis → Text-Step
        return {
          stepId: `${baustein.bausteinId}-hinweis`,
          phase: 1,
          stepType: "text",
          bloomLevel: 2,
          kompetenzbereich: "I.1",
          quellen: [],
          modus: "entdecker",
          xpValue: 3,
          contentC1: {
            title: `Hinweis: ${baustein.titel}`,
            body: baustein.stufe2.text,
          },
          contentB1: baustein.stufe2.textB1
            ? {
                title: `Hinweis: ${baustein.titel}`,
                body: baustein.stufe2.textB1,
              }
            : undefined,
        };
      case 3:
        // Volle Erklärung → ContentStep aus Stufe 3
        return baustein.stufe3.step;
    }
  }

  /**
   * Berechnet den Fortschritt über alle Phasen.
   * Gibt 0-1 zurück (0 = nicht angefangen, 1 = alle 6 Phasen fertig).
   */
  getGesamtFortschritt(phaseResults: Record<string, PhaseErgebnis>): number {
    const abgeschlossen = Object.keys(phaseResults).length;
    return abgeschlossen / PHASEN_REIHENFOLGE.length;
  }

  /** Gibt die nächste Phase zurück (oder null wenn alle fertig). */
  getNextPhase(currentPhaseIndex: number): PflegeProzessPhase | null {
    const nextIndex = currentPhaseIndex + 1;
    if (nextIndex >= PHASEN_REIHENFOLGE.length) return null;
    return PHASEN_REIHENFOLGE[nextIndex];
  }

  /** Gibt die Phasen-Reihenfolge zurück. */
  static getPhasenReihenfolge(): PflegeProzessPhase[] {
    return [...PHASEN_REIHENFOLGE];
  }
}

/** Factory-Funktion für SituationSequencer. */
export function createSituationSequencer(
  situation: Lernsituation,
  themen: Thema[],
  profil: LernProfil,
): SituationSequencer {
  return new SituationSequencer(situation, themen, profil);
}
