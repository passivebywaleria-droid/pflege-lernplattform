/**
 * Sichere Sprech-/Freitext-Bewertung — „LLM als Detektor, nicht als Autor"
 * (Waleria 2026-07-20).
 *
 * Das LLM füllt NUR eine geschlossene Checkliste (erfüllt/nicht erfüllt) und
 * muss jedes „erfüllt" mit einem wörtlichen Transkript-Zitat belegen. Die
 * Verifikation hier prüft das Zitat mechanisch gegen das Transkript — eine
 * halluzinierte Erfüllung wird verworfen. Der Feedback-TEXT entsteht im
 * Composer ausschließlich aus geprüften Content-Sätzen (SprechKriterium)
 * und rein quantitativen Code-Aussagen — nie aus dem LLM.
 */

import type { SprechKriterium } from "../../../content/_types";

/** Roh-Antwort des LLM (unverifiziert). */
export interface RohKriteriumsUrteil {
  id: string;
  erfuellt: boolean;
  zitat?: string;
}

/** Verifiziertes Urteil — nur das erreicht je den Schüler. */
export interface KriteriumsUrteil {
  id: string;
  erfuellt: boolean;
  zitat: string | null;
  /** true = LLM behauptete „erfüllt", aber das Zitat stand nicht im Transkript. */
  verworfen: boolean;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[„"""'']/g, "")
    .replace(/[^a-zäöüß0-9]/g, "");
}

/**
 * Verifiziert die LLM-Checkliste gegen das Transkript.
 * - Jede erwartete Kriteriums-ID bekommt genau ein Urteil (fehlend → nicht erfüllt).
 * - „erfüllt" ohne verifizierbares Zitat (normalisierter Substring des
 *   Transkripts, mindestens 8 Zeichen) wird VERWORFEN → nicht erfüllt.
 */
export function verifiziereChecklist(
  transkript: string,
  roh: RohKriteriumsUrteil[] | null | undefined,
  erwarteteIds: string[]
): KriteriumsUrteil[] {
  const transkriptNorm = normalize(transkript);
  const byId = new Map((roh ?? []).map((r) => [r.id, r]));

  return erwarteteIds.map((id) => {
    const r = byId.get(id);
    if (!r || !r.erfuellt) {
      return { id, erfuellt: false, zitat: null, verworfen: false };
    }
    const zitatNorm = normalize(r.zitat ?? "");
    const belegt =
      zitatNorm.length >= 8 && transkriptNorm.includes(zitatNorm);
    if (!belegt) {
      return { id, erfuellt: false, zitat: null, verworfen: true };
    }
    return { id, erfuellt: true, zitat: r.zitat ?? null, verworfen: false };
  });
}

export interface FeedbackZeile {
  id: string;
  label: string;
  erfuellt: boolean;
  /** Geprüfter Content-Satz — nur gesetzt, wenn das Kriterium fehlt. */
  satz: string | null;
}

export interface SprechFeedback {
  zeilen: FeedbackZeile[];
  anzahlErfuellt: number;
  anzahlGesamt: number;
  alleErfuellt: boolean;
}

/**
 * Baut die Anzeige-Daten aus Kriterien (geprüfter Content) + verifizierten
 * Urteilen. Enthält bewusst KEINEN generierten Text: Labels und Sätze kommen
 * 1:1 aus dem Content, Zahlen aus dem Code.
 */
export function komponiereSprechFeedback(
  kriterien: SprechKriterium[],
  urteile: KriteriumsUrteil[],
  sprachLevel: "c1" | "b1"
): SprechFeedback {
  const byId = new Map(urteile.map((u) => [u.id, u]));
  const zeilen: FeedbackZeile[] = kriterien.map((k) => {
    const erfuellt = byId.get(k.id)?.erfuellt ?? false;
    const label =
      sprachLevel === "b1" && k.labelB1 ? k.labelB1 : k.label;
    const satz = erfuellt
      ? null
      : sprachLevel === "b1" && k.feedbackFehltB1
        ? k.feedbackFehltB1
        : k.feedbackFehlt;
    return { id: k.id, label, erfuellt, satz };
  });
  const anzahlErfuellt = zeilen.filter((z) => z.erfuellt).length;
  return {
    zeilen,
    anzahlErfuellt,
    anzahlGesamt: zeilen.length,
    alleErfuellt: anzahlErfuellt === zeilen.length,
  };
}
