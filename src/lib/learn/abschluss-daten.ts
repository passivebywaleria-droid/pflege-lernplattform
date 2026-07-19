// Abschluss-Screen (specs/ENTWURF-ABSCHLUSS-SCREEN.md): sammelt aus einer
// abgeschlossenen Situation die Faustregeln aller Wissens-Bausteine (wortgleich)
// und ordnet falsche Antworten den Bausteinen zu, deren Anker-Step verpatzt
// wurde. Ehrlichkeits-Regeln: ohne vollständige Antwort-Daten keine Schwächen-
// Aussage; nur Anker-Treffer ergeben BENANNTE Schwächen.

import type { ContentStep, Lernsituation } from "../../../content/_types";

export interface AbschlussBaustein {
  stepId: string;
  /** Kurzname des Bausteins (contentC1.title) — für die Schwächen-Zeile. */
  titel: string;
  titelB1?: string;
  faustregel: string;
  faustregelB1?: string;
  /** Abruf-Frage (Content-Feld faustregelAbruf); fehlt sie, baut die UI einen Fallback aus dem Titel. */
  abrufFrage?: string;
  abrufFrageB1?: string;
  /**
   * Vollständiger Kerntext wortgleich (bereits literatur-gegengelesen) —
   * „Ganzen Baustein lesen" auf der aufgedeckten Karte. Die Faustregel allein
   * ist ein Destillat, nie das komplette Pflegewissen (Waleria 2026-07-19).
   */
  kerntext: string;
  kerntextB1?: string;
  /** true = die Antwort am Anker-Step dieses Bausteins war falsch. */
  wacklig: boolean;
}

export interface AbschlussDaten {
  /** Wacklige zuerst, sonst Situations-Reihenfolge. */
  bausteine: AbschlussBaustein[];
  /** Anzahl in dieser Session beantworteter Frage-Steps. */
  beantwortet: number;
  falsch: number;
  /** Titel der wackligen Bausteine (für „Daneben lagst du bei: …"). */
  wackligeTitel: string[];
}

function istAntwortStep(step: ContentStep): boolean {
  return !!step.question;
}

/**
 * Anker-Step eines Bausteins: der nächste Antwort-Step derselben Phase,
 * sonst der letzte davor — dieselbe Regel wie die Spickzettel-Verteilung
 * (spickzettel-verteilung.ts), damit Schwäche und Spickzettel-Chip immer
 * auf denselben Step zeigen.
 */
function ankerStepId(steps: ContentStep[], bausteinIdx: number): string | null {
  const danach = steps.slice(bausteinIdx + 1).find(istAntwortStep);
  if (danach) return danach.stepId;
  const davor = [...steps.slice(0, bausteinIdx)].reverse().find(istAntwortStep);
  return davor?.stepId ?? null;
}

export function sammleAbschlussDaten(
  situation: Lernsituation,
  antworten: ReadonlyMap<string, boolean>
): AbschlussDaten {
  const bausteine: AbschlussBaustein[] = [];

  for (const phase of situation.phasen) {
    const steps = [...phase.kernSteps, ...phase.optionaleSteps];
    steps.forEach((step, idx) => {
      const wissen = step.inlineWissen;
      if (step.stepType !== "inlineWissen" || !wissen) return;
      const anker = ankerStepId(steps, idx);
      bausteine.push({
        stepId: step.stepId,
        titel: step.contentC1?.title ?? phase.titel,
        titelB1: step.contentB1?.title,
        faustregel: wissen.faustregel,
        faustregelB1: wissen.faustregelB1,
        abrufFrage: wissen.faustregelAbruf,
        abrufFrageB1: wissen.faustregelAbrufB1,
        kerntext: wissen.kerntext,
        kerntextB1: wissen.kerntextB1,
        wacklig: anker != null && antworten.get(anker) === false,
      });
    });
  }

  let beantwortet = 0;
  let falsch = 0;
  antworten.forEach((korrekt) => {
    beantwortet += 1;
    if (!korrekt) falsch += 1;
  });

  const sortiert = [
    ...bausteine.filter((b) => b.wacklig),
    ...bausteine.filter((b) => !b.wacklig),
  ];

  return {
    bausteine: sortiert,
    beantwortet,
    falsch,
    wackligeTitel: sortiert.filter((b) => b.wacklig).map((b) => b.titel),
  };
}
