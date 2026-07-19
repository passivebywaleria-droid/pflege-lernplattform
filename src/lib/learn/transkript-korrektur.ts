/**
 * Fachbegriff-Postkorrektur für On-Device-Transkripte.
 *
 * Whisper base-q5_1 verstümmelt deutsche Fachbegriffe systematisch
 * (Benchmark 2026-07-19: „Trombose Profilaxe" → Thromboseprophylaxe,
 * „Appixaban" → Apixaban, „Vorhofliehmann" → Vorhofflimmern). Die
 * Situation kennt ihre Fachbegriffe aber (Glossar + Zielwort) — ein
 * Fuzzy-Match über Wortfenster repariert genau diese Klasse von Fehlern,
 * bevor das Transkript angezeigt und von der KI bewertet wird.
 *
 * Bewusst konservativ: hohe Ähnlichkeitsschwelle, Mindestlänge, längere
 * Fenster gewinnen — lieber ein Fehler stehen lassen als „richtig raten".
 * Alltagssprache („atmet nicht") wird NICHT angefasst; das fängt der
 * KI-Feedback-Prompt ab (Transkriptionsfehler nicht ankreiden).
 */

const MIN_TERM_LENGTH = 6;
const SIMILARITY_THRESHOLD = 0.72;

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-zäöüß0-9]/g, "");
}

/** Normalisierte Levenshtein-Ähnlichkeit (1 = identisch). */
export function aehnlichkeit(a: string, b: string): number {
  if (a === b) return 1;
  if (!a.length || !b.length) return 0;
  const prev = new Array(b.length + 1);
  const curr = new Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
    }
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j];
  }
  return 1 - prev[b.length] / Math.max(a.length, b.length);
}

export interface KorrekturErgebnis {
  text: string;
  ersetzungen: Array<{ von: string; zu: string }>;
}

/**
 * Ersetzt Wortfenster (1-3 Wörter) im Transkript durch den ähnlichsten
 * Fachbegriff aus dem Lexikon, wenn die Ähnlichkeit über der Schwelle liegt.
 * Exakte Treffer (auch case-insensitiv) bleiben unangetastet.
 */
export function korrigiereTranskript(
  transkript: string,
  lexikon: string[]
): KorrekturErgebnis {
  const begriffe = [...new Set(lexikon)]
    .filter((b) => normalize(b).length >= MIN_TERM_LENGTH)
    .map((original) => ({ original, norm: normalize(original) }));
  if (!begriffe.length || !transkript.trim()) {
    return { text: transkript, ersetzungen: [] };
  }

  const woerter = transkript.split(/\s+/);
  const ersetzungen: Array<{ von: string; zu: string }> = [];
  const out: string[] = [];

  let i = 0;
  while (i < woerter.length) {
    let best: {
      begriff: string;
      score: number;
      fenster: number;
    } | null = null;

    // Fenster 1-3 Wörter — längster ähnlichster Treffer gewinnt
    for (let fenster = 1; fenster <= 3 && i + fenster <= woerter.length; fenster++) {
      const kandidat = normalize(woerter.slice(i, i + fenster).join(" "));
      if (kandidat.length < MIN_TERM_LENGTH) continue;
      for (const { original, norm } of begriffe) {
        // Längen-Guard: völlig andere Länge kann kein Verstümmelungs-Fehler sein
        if (kandidat.length < norm.length * 0.6 || kandidat.length > norm.length * 1.5) {
          continue;
        }
        const score = aehnlichkeit(kandidat, norm);
        if (score < SIMILARITY_THRESHOLD) continue;
        // Beitrag-Guard: Bei Mehrwort-Fenstern muss das ERSTE Wort den Treffer
        // verbessern — sonst frisst das Fenster Füllwörter
        // („mit der Herzdruckmassage" darf nicht als Ganzes ersetzt werden).
        if (fenster > 1) {
          const ohneErstes = normalize(woerter.slice(i + 1, i + fenster).join(" "));
          if (
            ohneErstes.length >= norm.length * 0.6 &&
            aehnlichkeit(ohneErstes, norm) >= score
          ) {
            continue;
          }
        }
        if (
          !best ||
          score > best.score ||
          (score === best.score && fenster > best.fenster)
        ) {
          best = { begriff: original, score, fenster };
        }
      }
    }

    if (best) {
      const von = woerter.slice(i, i + best.fenster).join(" ");
      // Satzzeichen am Fenster-Ende erhalten (z. B. „Apixabahn," → „Apixaban,")
      const trailing = von.match(/[.,;:!?]+$/)?.[0] ?? "";
      if (normalize(von) !== normalize(best.begriff)) {
        ersetzungen.push({ von, zu: best.begriff });
      }
      out.push(best.begriff + trailing);
      i += best.fenster;
    } else {
      out.push(woerter[i]);
      i += 1;
    }
  }

  return { text: out.join(" "), ersetzungen };
}
