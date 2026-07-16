// „Erklär mir das anders" — Alternativ-Erklärung nach falscher Antwort.
//
// VISION „Strategiewechsel": Wenn die Standard-Erklärung nicht verfängt, erklärt
// die KI denselben Inhalt ANDERS (Versuch 1: Alltags-Analogie, Versuch 2:
// Schritt-für-Schritt). RAG-gebunden an den Lernstoff der Situation
// (src/lib/ai/erklaer-anders-kontext.ts) — die KI darf nichts erfinden.
//
// DSGVO wie /api/ki-chat: Payload enthält KEINEN Namen, KEINE User-ID —
// nur Step-Inhalt + gewählte/richtige Antwort. Nebius EU (Amsterdam).

import { NextRequest, NextResponse } from "next/server";
import { loadSituation } from "../../../../content/content-loader";
import { baueErklaerKontext } from "@/lib/ai/erklaer-anders-kontext";

const NEBIUS_API_URL = "https://api.studio.nebius.com/v1/chat/completions";

/** Marker, mit dem das Modell fehlende Lernstoff-Deckung signalisiert. */
const MARKER_NICHT_IM_LERNSTOFF = "NICHT_IM_LERNSTOFF";

/** Ehrlicher Fallback — lieber an die Lehrerin verweisen als erfinden. */
const FALLBACK_NICHT_IM_LERNSTOFF =
  "Dazu finde ich in deinem Lernstoff keine sichere andere Erklärung. Frag am besten deine Lehrerin oder deinen Lehrer — das ist hier der ehrlichere Weg.";

const FALLBACK_FEHLER =
  "Die Alternativ-Erklärung klappt gerade nicht. Versuch es gleich nochmal — oder lies die Erklärung oben in Ruhe durch.";

/** Max. Alternativ-Erklärungen pro Step (Strategie 1 + Strategie 2). */
const MAX_VERSUCHE = 2;

interface ErklaerAndersRequest {
  ceId: string;
  situationId: string;
  stepId: string;
  frage: string;
  gewaehlteAntwort: string;
  richtigeAntwort: string;
  sprachLevel?: "c1" | "b1";
  versuch?: number;
}

function systemPrompt(lernstoff: string, sprachLevel: "c1" | "b1", versuch: number): string {
  const strategie =
    versuch >= 2
      ? "Erkläre Schritt für Schritt: Zerlege den Gedankengang in 2-4 kleine, nummerierte Schritte — vom Beobachten bis zur richtigen Entscheidung."
      : "Erkläre mit einer Analogie aus dem Alltag (Haushalt, Verkehr, Natur — etwas, das jeder kennt) und schlage dann die Brücke zurück zur Pflegesituation.";

  const sprache =
    sprachLevel === "b1"
      ? "Der Schüler lernt auf Sprachniveau B1: kurze Hauptsätze, keine Schachtelsätze, kein Passiv. Fachbegriffe sofort in Klammern einfach erklären."
      : "Der Schüler lernt auf Sprachniveau C1: Fachsprache ist ok, neue Begriffe kurz erklären.";

  return `Du bist ein didaktischer Pflege-Tutor für Auszubildende in der generalistischen Pflegeausbildung (Deutschland). Ein Schüler hat eine Frage falsch beantwortet und die Standard-Erklärung nicht verstanden. Deine Aufgabe: Erkläre die richtige Antwort NOCH EINMAL ANDERS.

Strategie für diese Erklärung: ${strategie}

${sprache}

Harte Regeln:
1. Stütze dich AUSSCHLIESSLICH auf den LERNSTOFF unten. Erfinde keine Fakten, Zahlen oder Maßnahmen, die dort nicht stehen.
2. Wenn der Lernstoff die Frage fachlich nicht abdeckt, antworte NUR mit dem Wort ${MARKER_NICHT_IM_LERNSTOFF} — nichts anderes.
3. Wiederhole nicht die Formulierung der Standard-Erklärung — der Schüler hat sie schon gelesen und nicht verstanden.
4. Sprich den Schüler mit „du" an. Sei ermutigend, nie herablassend. Keine Emojis.
5. Maximal 5 Sätze (bei Schritt-für-Schritt: maximal 4 kurze Schritte).
6. Sprache: Deutsch.

LERNSTOFF:
${lernstoff}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ErklaerAndersRequest>;
    const {
      ceId,
      situationId,
      stepId,
      frage,
      gewaehlteAntwort,
      richtigeAntwort,
    } = body;

    if (!ceId || !situationId || !stepId || !frage || !richtigeAntwort) {
      return NextResponse.json(
        { error: "ceId, situationId, stepId, frage und richtigeAntwort sind erforderlich" },
        { status: 400 }
      );
    }

    const versuch = Math.max(1, Math.floor(body.versuch ?? 1));
    if (versuch > MAX_VERSUCHE) {
      return NextResponse.json({
        erklaerung:
          "Zwei andere Erklärungen hast du schon bekommen. Lies sie nochmal in Ruhe — oder frag deine Lehrerin, die kennt noch mehr Wege.",
        source: "limit",
      });
    }

    const sprachLevel = body.sprachLevel === "b1" ? "b1" : "c1";

    // RAG-Bindung: Lernstoff der Situation laden. Ohne Grounding keine KI-Antwort.
    const situation = await loadSituation(ceId, situationId);
    if (!situation) {
      return NextResponse.json({
        erklaerung: FALLBACK_NICHT_IM_LERNSTOFF,
        source: "nicht-im-lernstoff",
      });
    }
    const kontext = baueErklaerKontext(situation, stepId);
    if (!kontext.stepGefunden || kontext.lernstoff.trim().length === 0) {
      return NextResponse.json({
        erklaerung: FALLBACK_NICHT_IM_LERNSTOFF,
        source: "nicht-im-lernstoff",
      });
    }

    const apiKey = process.env.NEBIUS_API_KEY;
    if (!apiKey) {
      // Dev-Fallback wie /api/ki-chat — kein Fehler, ehrliche Ansage.
      return NextResponse.json({
        erklaerung:
          "In der fertigen Version erkläre ich dir das hier mit anderen Worten — zum Beispiel mit einem Vergleich aus dem Alltag. Aktuell bin ich im Entwicklungsmodus.",
        source: "fallback",
      });
    }

    // Anonymisiert: nur Aufgaben-Inhalt, keine Personendaten.
    const userMessage = `Frage: ${frage}
Der Schüler hat geantwortet: „${gewaehlteAntwort ?? "(keine Angabe)"}" — das war falsch.
Richtig wäre: „${richtigeAntwort}"

Erkläre ihm anders, warum die richtige Antwort stimmt und wo sein Denkfehler lag.`;

    const response = await fetch(NEBIUS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.3-70B-Instruct",
        messages: [
          { role: "system", content: systemPrompt(kontext.lernstoff, sprachLevel, versuch) },
          { role: "user", content: userMessage },
        ],
        max_tokens: 320,
        temperature: 0.6,
      }),
    });

    if (!response.ok) {
      console.error("Nebius API error (erklaer-anders):", response.status);
      return NextResponse.json({ erklaerung: FALLBACK_FEHLER, source: "error" });
    }

    const data = await response.json();
    const reply: string = data.choices?.[0]?.message?.content?.trim() ?? "";

    if (!reply || reply.includes(MARKER_NICHT_IM_LERNSTOFF)) {
      return NextResponse.json({
        erklaerung: FALLBACK_NICHT_IM_LERNSTOFF,
        source: "nicht-im-lernstoff",
      });
    }

    return NextResponse.json({ erklaerung: reply, source: "nebius" });
  } catch (error) {
    console.error("erklaer-anders error:", error);
    return NextResponse.json({ erklaerung: FALLBACK_FEHLER, source: "error" });
  }
}
