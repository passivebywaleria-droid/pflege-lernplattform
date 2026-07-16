// RAG-Kontext für „Erklär mir das anders" (VISION: Strategiewechsel).
//
// Baut aus einer Lernsituation den Lernstoff-Kontext für die Alternativ-Erklärung:
//   1. Der Step selbst (Frage, Optionen + Erklärungen) — die didaktische Basis.
//   2. inlineWissen-Bausteine der Situation (Kerntext + Faustregel), priorisiert
//      nach kernfaktId-Überlappung mit dem Step — dieselben Fakten, andere Worte.
//
// Bewusst NUR Quellen aus dem content/-Bundle (liegt im Server-Build) —
// keine specs/-Markdown-Dateien, die im Docker-Image fehlen könnten.

import type { ContentStep, Lernsituation } from "../../../content/_types";

export interface ErklaerKontext {
  /** Zusammengesetzter Lernstoff-Text für den System-Prompt. */
  lernstoff: string;
  /** false, wenn der Step nicht in der Situation existiert — dann kein Grounding möglich. */
  stepGefunden: boolean;
}

/** Alle Steps einer Situation in Abspielreihenfolge (Kern + optionale). */
function alleSteps(situation: Lernsituation): ContentStep[] {
  return situation.phasen.flatMap((p) => [...p.kernSteps, ...p.optionaleSteps]);
}

interface McOptionLite {
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

/** Frage + Optionen-Erklärungen des Ziel-Steps als Lernstoff-Abschnitt. */
function stepAbschnitt(step: ContentStep): string {
  const teile: string[] = [];
  const body = step.contentC1?.body?.trim();
  if (body) teile.push(body);

  const q = step.question as
    | { fragetext?: string; optionen?: McOptionLite[]; options?: McOptionLite[] }
    | undefined;
  if (q?.fragetext) teile.push(`Frage: ${q.fragetext}`);

  const optionen = q?.optionen ?? q?.options ?? [];
  for (const o of optionen) {
    if (!o.explanation) continue;
    const label = o.isCorrect ? "Richtige Antwort" : "Falsche Antwort";
    teile.push(`${label}: „${o.text}" — ${o.explanation}`);
  }
  return teile.join("\n");
}

/** kerntext + faustregel eines inlineWissen-Steps als Lernstoff-Abschnitt. */
function wissenAbschnitt(step: ContentStep): string {
  const w = step.inlineWissen;
  if (!w) return "";
  const teile: string[] = [];
  const titel = step.contentC1?.title?.trim();
  if (titel) teile.push(`Wissens-Baustein: ${titel}`);
  if (w.kerntext) teile.push(w.kerntext);
  if (w.faustregel) teile.push(`Faustregel: ${w.faustregel}`);
  return teile.join("\n");
}

/** Überlappung der kernfaktIds zweier Steps (bare "F-08" wie qualifiziert "thema/F-08"). */
function kernfaktUeberlappung(a: ContentStep, b: ContentStep): number {
  const idsA = new Set((a.kernfaktId ?? []).map((id) => id.split("/").pop() ?? id));
  const idsB = (b.kernfaktId ?? []).map((id) => id.split("/").pop() ?? id);
  return idsB.filter((id) => idsA.has(id)).length;
}

/**
 * Baut den Lernstoff-Kontext für die Alternativ-Erklärung.
 *
 * @param maxZeichen Zeichen-Budget für den Gesamt-Kontext (Token-Kosten-Deckel).
 */
export function baueErklaerKontext(
  situation: Lernsituation,
  stepId: string,
  maxZeichen = 4500
): ErklaerKontext {
  const steps = alleSteps(situation);
  const zielStep = steps.find((s) => s.stepId === stepId);
  if (!zielStep) {
    return { lernstoff: "", stepGefunden: false };
  }

  const abschnitte: string[] = [stepAbschnitt(zielStep)];

  // Wissens-Bausteine: erst die mit gemeinsamen Kernfakten (absteigend),
  // dann die übrigen der Situation — bis das Zeichen-Budget erschöpft ist.
  const bausteine = steps
    .filter((s) => s.stepType === "inlineWissen" && s.inlineWissen)
    .map((s) => ({ step: s, score: kernfaktUeberlappung(zielStep, s) }))
    .sort((a, b) => b.score - a.score);

  let laenge = abschnitte[0].length;
  for (const { step } of bausteine) {
    const abschnitt = wissenAbschnitt(step);
    if (!abschnitt) continue;
    if (laenge + abschnitt.length > maxZeichen) break;
    abschnitte.push(abschnitt);
    laenge += abschnitt.length;
  }

  return {
    lernstoff: abschnitte.join("\n\n---\n\n").slice(0, maxZeichen),
    stepGefunden: true,
  };
}
