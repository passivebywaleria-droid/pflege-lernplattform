// Option A (KERN-LOOP-STANDARD, Baustein 3): inlineWissen-Steps mit
// praesentation "amAnwendungsStep" verschwinden als eigene Screens und hängen
// als Spickzettel am NÄCHSTEN Antwort-Step derselben Phase (Design-Doc
// specs/DESIGN-WISSEN-IN-STEPS.md). Fällt kein Antwort-Step mehr dahinter,
// hängt der Baustein am letzten Antwort-Step davor (Fallback) — er darf nie
// verloren gehen (Vollständigkeit ist Pflicht, Kompetenznachweis).

import type { ContentStep } from "../../../content/_types";

export interface SpickzettelVerteilung {
  /** Steps, die als eigene Screens gespielt werden (ohne verlagerte Wissens-Steps). */
  sichtbareSteps: ContentStep[];
  /** stepId eines Antwort-Steps → die dort angehefteten Wissens-Steps (Reihenfolge erhalten). */
  spickzettel: Map<string, ContentStep[]>;
}

function istVerlagert(step: ContentStep): boolean {
  return (
    step.stepType === "inlineWissen" &&
    !!step.inlineWissen &&
    step.praesentation === "amAnwendungsStep"
  );
}

/** Antwort-Step = trägt eine Frage (gleiche Definition wie das Play-then-Gate). */
function istAntwortStep(step: ContentStep): boolean {
  return !!step.question;
}

/** Verteilt die Steps EINER Phase. */
export function verteileSpickzettel(steps: ContentStep[]): SpickzettelVerteilung {
  const sichtbareSteps = steps.filter((s) => !istVerlagert(s));
  const spickzettel = new Map<string, ContentStep[]>();

  const haengeAn = (ankerId: string, baustein: ContentStep) => {
    const liste = spickzettel.get(ankerId) ?? [];
    liste.push(baustein);
    spickzettel.set(ankerId, liste);
  };

  steps.forEach((step, idx) => {
    if (!istVerlagert(step)) return;
    const naechster = steps.slice(idx + 1).find(istAntwortStep);
    if (naechster) {
      haengeAn(naechster.stepId, step);
      return;
    }
    const vorheriger = [...steps.slice(0, idx)].reverse().find(istAntwortStep);
    if (vorheriger) {
      haengeAn(vorheriger.stepId, step);
      return;
    }
    // Kein Antwort-Step in der Phase → Baustein bleibt eigener Screen
    // (nichts darf verschwinden). Wieder einsortieren an Originalposition.
    const anzahlSichtbarDavor = steps
      .slice(0, idx)
      .filter((s) => !istVerlagert(s)).length;
    sichtbareSteps.splice(anzahlSichtbarDavor, 0, step);
  });

  return { sichtbareSteps, spickzettel };
}
