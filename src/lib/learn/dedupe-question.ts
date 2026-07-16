/**
 * Entfernt die Schluss-Frage eines Body-/Kontext-Textes aus der ANZEIGE, wenn
 * der separate Fragetext sie sinngleich wiederholt. Reine Präsentation — der
 * Content bleibt unverändert. Gegen die „Frage steht doppelt da"-Dopplung, die
 * bei MC, Sorting und anderen Steps auftritt (Dozentin-Feedback 2026-07-16).
 */

/** Inhaltswörter eines Satzes, normalisiert (Kleinbuchstaben, ohne Satzzeichen, ab 4 Zeichen). */
function contentWords(s: string): Set<string> {
  return new Set(
    s
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, " ")
      .split(/\s+/)
      .filter((w) => w.length >= 4)
  );
}

/**
 * Ist der letzte Satz des Bodys eine Frage und ≥60% seiner Inhaltswörter kommen
 * auch im Fragetext vor, wird er weggelassen. Besteht der Body nur aus der Frage,
 * bleibt er stehen (sonst wäre die Anzeige leer).
 */
export function dedupeTrailingQuestion(
  body: string | undefined,
  fragetext: string
): string | undefined {
  if (!body || !fragetext) return body;
  const trimmed = body.trimEnd();
  if (!trimmed.endsWith("?")) return body;
  const m = trimmed.match(/(?:^|[.!?…])\s*([^.!?…]+\?)$/);
  if (!m) return body;
  const lastSentence = m[1].trim();
  const rest = trimmed.slice(0, trimmed.length - lastSentence.length).trimEnd();
  if (!rest) return body;
  const qWords = contentWords(lastSentence);
  if (qWords.size === 0) return body;
  const fWords = contentWords(fragetext);
  let overlap = 0;
  qWords.forEach((w) => {
    if (fWords.has(w)) overlap++;
  });
  return overlap / qWords.size >= 0.6 ? rest : body;
}
