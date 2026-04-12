export interface MotivationsText {
  text: string;
  ab: number;
}

export const motivationsTexte: MotivationsText[] = [
  { text: "Super, weiter so!", ab: 3 },
  { text: "Du bist auf einem guten Weg!", ab: 5 },
  { text: "Halbzeit geschafft!", ab: 10 },
  { text: "Du lernst richtig gut heute!", ab: 15 },
  { text: "Fast fertig — du schaffst das!", ab: 18 },
];

// Set zum Tracken bereits angezeigter Texte (pro Page-Lifecycle)
const gezeigteTexte = new Set<number>();

/** Setzt das Tracking zurück (z.B. bei neuer Session) */
export function resetMotivationsTracking(): void {
  gezeigteTexte.clear();
}

/**
 * Gibt den passenden Motivationstext zurück,
 * wenn der aktuelle Step-Index einen Schwellenwert erreicht oder überschritten hat.
 * Jeder Schwellenwert wird nur 1x angezeigt.
 * Gibt null zurück wenn kein Text angezeigt werden soll.
 */
export function getMotivationsText(stepIndex: number): MotivationsText | null {
  // Finde den höchsten Schwellenwert der erreicht aber noch nicht angezeigt wurde
  const passende = motivationsTexte
    .filter((m) => stepIndex >= m.ab && !gezeigteTexte.has(m.ab))
    .sort((a, b) => b.ab - a.ab);

  if (passende.length === 0) return null;

  const treffer = passende[0];
  gezeigteTexte.add(treffer.ab);
  return treffer;
}
