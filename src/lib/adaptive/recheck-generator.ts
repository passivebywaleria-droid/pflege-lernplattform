// Recheck-Generator (PLAN-ADAPTIV-V1, Station ③): baut das „Erinnerst du
// dich?"-Intermezzo für einen wackeligen Kernfakt — OHNE LLM, OHNE neue Fakten.
// Quellen-Hierarchie (Waleria 2026-07-18: anderer Kontext + anderer Satzbau):
//   1. Spektrum-Kontrastfall: Szenario = kurzbeschreibung eines Spektrum-
//      Eintrags (wortgleich, gegengelesener Content), Optionen = die
//      hauptfaktor-Etiketten des Spektrums → Transfer statt Wiedererkennen.
//      Einträge, deren Beschreibung ihr eigenes Etikett wörtlich enthält,
//      sind als Szenario ungeeignet (zu leicht) und werden übersprungen.
//   2. Options-Transform: TrueFalse aus der wortgleichen richtigen Option des
//      verpatzten Steps (ehrlich: Wiedererkennen möglich, schwächere Festigung).
//   3. Kein Material → kein Recheck (null).

import type { ContentStep, Lernsituation } from "../../../content/_types";

export interface RecheckFrage {
  art: "spektrum" | "richtigOption";
  kernfaktId: string;
  /** Szenario-Text (wortgleich aus dem Content, B1-aware). */
  szenario: string;
  /** Antwort-Optionen (bei "richtigOption": ["Stimmt", "Stimmt nicht"]-Semantik via UI). */
  optionen: string[];
  richtigIndex: number;
  /** Baustein-Step, dessen Faustregel bei falscher Antwort gezeigt wird. */
  bausteinStepId?: string;
  faustregel?: string;
  faustregelB1?: string;
}

function alleSteps(situation: Lernsituation): ContentStep[] {
  return situation.phasen.flatMap((p) => [...p.kernSteps, ...p.optionaleSteps]);
}

function hatKernfakt(step: ContentStep, kernfaktId: string): boolean {
  return Array.isArray(step.kernfaktId) && step.kernfaktId.includes(kernfaktId);
}

/**
 * Spektrum-Beschreibungen folgen oft dem Muster „Befund — Handlung".
 * Fürs Szenario wird der Handlungsteil abgeschnitten (echtes Retrieval statt
 * Ablesen) — aber nur, wenn der Befund-Teil allein tragfähig ist (≥ 30 Zeichen).
 * Der gezeigte Text bleibt eine wortgleiche Teilmenge des geprüften Contents.
 */
function befundTeil(kurzbeschreibung: string): string {
  const teil = kurzbeschreibung.split("—")[0].trim();
  return teil.length >= 30 ? teil : kurzbeschreibung;
}

/** Deterministische Position der richtigen Antwort (kein Math.random — testbar). */
function stabilerIndex(seed: string, laenge: number): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 997;
  return h % laenge;
}

export function generiereRecheck(
  situation: Lernsituation,
  kernfaktId: string,
  b1: boolean
): RecheckFrage | null {
  const steps = alleSteps(situation);

  // Quelle 1: Wissens-Baustein mit Spektrum zum selben Kernfakt
  const baustein = steps.find(
    (s) => s.stepType === "inlineWissen" && s.inlineWissen && hatKernfakt(s, kernfaktId)
  );
  const spektrum = baustein?.inlineWissen?.spektrum ?? [];
  const kandidaten = spektrum.filter(
    (e) =>
      e.hauptfaktor &&
      e.kurzbeschreibung &&
      // Beschreibung darf das eigene Etikett nicht verraten
      !e.kurzbeschreibung.toLowerCase().includes(e.hauptfaktor.toLowerCase()) &&
      (!b1 || e.kurzbeschreibungB1 || e.kurzbeschreibung)
  );
  if (baustein?.inlineWissen && kandidaten.length >= 1 && spektrum.length >= 2) {
    const szenarioEintrag = kandidaten[0];
    // Distraktoren = die ÜBRIGEN Etiketten des Spektrums (max. 3 Optionen gesamt)
    const distraktoren = spektrum
      .filter((e) => e !== szenarioEintrag && e.hauptfaktor)
      .map((e) => e.hauptfaktor)
      .slice(0, 2);
    if (distraktoren.length >= 1) {
      const optionen = [...distraktoren];
      const richtigIndex = stabilerIndex(kernfaktId + szenarioEintrag.patientName, optionen.length + 1);
      optionen.splice(richtigIndex, 0, szenarioEintrag.hauptfaktor);
      return {
        art: "spektrum",
        kernfaktId,
        szenario: befundTeil(
          (b1 && szenarioEintrag.kurzbeschreibungB1) || szenarioEintrag.kurzbeschreibung
        ),
        optionen,
        richtigIndex,
        bausteinStepId: baustein.stepId,
        faustregel: baustein.inlineWissen.faustregel,
        faustregelB1: baustein.inlineWissen.faustregelB1,
      };
    }
  }

  // Quelle 2: TrueFalse aus einer wortgleichen Option eines Antwort-Steps zum
  // Kernfakt. Damit „Stimmt" nicht IMMER die Antwort ist, wird deterministisch
  // mal die richtige, mal eine falsche Option als Aussage gezeigt.
  const antwortStep = steps.find((s) => hatKernfakt(s, kernfaktId) && s.question?.optionen);
  const opts = antwortStep?.question?.optionen ?? [];
  const richtige = opts.find((o) => o.isCorrect);
  const falsche = opts.find((o) => !o.isCorrect);
  if (richtige?.text) {
    const zeigeRichtige = !falsche || stabilerIndex(kernfaktId, 2) === 0;
    const aussage = zeigeRichtige ? richtige : (falsche as typeof richtige);
    return {
      art: "richtigOption",
      kernfaktId,
      szenario: aussage.text,
      // UI rendert diese beiden als Stimmt/Stimmt-nicht-Buttons
      optionen: [],
      richtigIndex: zeigeRichtige ? 0 : 1,
      bausteinStepId: baustein?.stepId,
      faustregel: baustein?.inlineWissen?.faustregel,
      faustregelB1: baustein?.inlineWissen?.faustregelB1,
    };
  }

  // Quelle 3: kein Material → kein Recheck
  return null;
}
