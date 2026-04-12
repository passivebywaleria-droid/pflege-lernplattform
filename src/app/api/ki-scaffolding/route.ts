import { NextRequest, NextResponse } from "next/server";

const NEBIUS_API_URL = "https://api.studio.nebius.com/v1/chat/completions";

type FehlerKategorie = "raten" | "konzept" | "sprache" | "verwechslung" | "fluechtig";
type SprachLevel = "c1" | "b1";

interface ScaffoldingRequest {
  stepId: string;
  fehlerKategorie: FehlerKategorie;
  thema: string;
  gewaehlteAntwort: string;
  richtigeAntwort: string;
  sprachLevel: SprachLevel;
  versuch?: number;
  bisherigeStrategien?: string[];
}

interface ScaffoldingResponse {
  erklaerung: string;
  analogie: string;
  tipp: string;
}

export interface ScaffoldingResult {
  sandwich: { lob: string; korrektur: string; ermutigung: string };
  alternativeErklaerung: string;
  analogie?: string;
  strategieTyp: string;
  source?: string;
}

const STRATEGIE_MAP: Record<FehlerKategorie, string> = {
  raten:
    "Der Schüler hat geraten (zu schnelle Antwortzeit bei mehreren Optionen). Erkläre das Thema wie einem 5-Jährigen. Schritt für Schritt.",
  konzept:
    "Der Schüler verwechselt Konzepte. Erkläre den Unterschied mit einer Alltagsanalogie.",
  sprache:
    "Der Schüler hat ein Sprachproblem, nicht ein Wissensproblem. Erkläre in B1-Deutsch. Maximal 3 Sätze. Einfache Wörter.",
  verwechslung:
    "Der Schüler verwechselt zwei ähnliche Begriffe oder Konzepte. Zeige eine Gegenüberstellung: Was IST es vs. Was ist es NICHT.",
  fluechtig:
    "Der Schüler hat zu schnell geantwortet und die Frage nicht richtig gelesen. Wiederhole den Kernpunkt deutlich.",
};

const STATIC_FALLBACK: ScaffoldingResult = {
  sandwich: {
    lob: "Guter Versuch! Du hast dich mit dem Thema auseinandergesetzt.",
    korrektur: "Die richtige Antwort ergibt sich aus dem Zusammenhang der Pflegesituation. Lies dir den Erklärtext nochmal in Ruhe durch.",
    ermutigung: "Beim nächsten Mal klappt es bestimmt. Du bist auf dem richtigen Weg!",
  },
  alternativeErklaerung: "Stell dir vor, du bist ein Detektiv: Jeder Hinweis (Symptom, Massnahme, Fachbegriff) führt dich näher zur richtigen Lösung.",
  analogie: "Stell dir vor, du bist ein Detektiv: Jeder Hinweis führt dich näher zur richtigen Lösung.",
  strategieTyp: "analogie",
  source: "fallback",
};

function buildSystemPrompt(
  fehlerKategorie: FehlerKategorie,
  sprachLevel: SprachLevel,
  versuch: number,
  bisherigeStrategien: string[],
): string {
  const strategie = STRATEGIE_MAP[fehlerKategorie];

  const sprachHinweis =
    sprachLevel === "b1"
      ? "WICHTIG: Der Schüler lernt auf Sprachniveau B1. Verwende einfache, kurze Sätze. Erkläre Fachbegriffe in Klammern. Vermeide Nebensätze und Passiv."
      : "Der Schüler lernt auf Sprachniveau C1. Du kannst Fachsprache verwenden.";

  const versuchHinweis = versuch > 1
    ? `Der Schüler hat dieses Thema schon ${versuch - 1}x falsch beantwortet. Wähle einen KOMPLETT ANDEREN Erklärungsansatz als zuvor.`
    : "";

  const strategienHinweis = bisherigeStrategien.length > 0
    ? `Bereits genutzte Strategien (NICHT wiederholen): ${bisherigeStrategien.join(", ")}.`
    : "";

  return `Du bist ein didaktischer Pflege-Tutor für die generalistische Pflegeausbildung (Deutschland).

Deine Aufgabe: Ein Schüler hat eine Frage falsch beantwortet. Erkläre das Thema auf eine NEUE, ANDERE Art.

Fehlertyp-Strategie:
${strategie}

${sprachHinweis}
${versuchHinweis}
${strategienHinweis}

Regeln:
1. Sandwich-Prinzip: Erst loben, dann korrigieren, dann ermutigen.
2. Die alternativeErklaerung muss ein KOMPLETT ANDERER Ansatz sein als der Originaltext. Nutze: Analogie, Geschichte, Vergleich, Schritt-für-Schritt, Alltagsbezug.
3. Maximal 120 Wörter pro Feld.
4. Pflege-Kontext: Beziehe dich auf die Pflegepraxis.
5. Kein Emoji. Professionell aber warmherzig.
6. Antworte ausschliesslich im folgenden JSON-Format, ohne Markdown-Codeblöcke:
{"sandwich":{"lob":"...","korrektur":"...","ermutigung":"..."},"alternativeErklaerung":"...","analogie":"...","strategieTyp":"analogie|geschichte|vergleich|schritt-fuer-schritt|alltagsbezug|eselsbruecke"}

- "sandwich.lob": Anerkenne was der Schüler richtig gemacht/gedacht hat (1-2 Sätze).
- "sandwich.korrektur": Erkläre warum die Antwort falsch ist und was richtig ist (2-3 Sätze).
- "sandwich.ermutigung": Motiviere für den nächsten Versuch (1 Satz).
- "alternativeErklaerung": Eine KOMPLETT ANDERE Erklärung des Konzepts (3-5 Sätze, anderer Blickwinkel).
- "analogie": Eine Alltagsanalogie oder Eselsbrücke (1-2 Sätze).
- "strategieTyp": Welchen Erklärungsansatz du gewählt hast.`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ScaffoldingRequest;

    const { stepId, fehlerKategorie, thema, gewaehlteAntwort, richtigeAntwort, sprachLevel, versuch, bisherigeStrategien } = body;

    // Validierung
    if (!stepId || !fehlerKategorie || !thema || !richtigeAntwort || !sprachLevel) {
      return NextResponse.json(
        { error: "Pflichtfelder: stepId, fehlerKategorie, thema, richtigeAntwort, sprachLevel" },
        { status: 400 }
      );
    }

    const validKategorien: FehlerKategorie[] = ["raten", "konzept", "sprache", "verwechslung", "fluechtig"];
    if (!validKategorien.includes(fehlerKategorie)) {
      return NextResponse.json(
        { error: `fehlerKategorie muss einer der folgenden Werte sein: ${validKategorien.join(", ")}` },
        { status: 400 }
      );
    }

    const validSprachLevels: SprachLevel[] = ["c1", "b1"];
    if (!validSprachLevels.includes(sprachLevel)) {
      return NextResponse.json(
        { error: "sprachLevel muss 'c1' oder 'b1' sein" },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEBIUS_API_KEY;

    // Ohne API-Key: statischer Fallback
    if (!apiKey) {
      return NextResponse.json(STATIC_FALLBACK);
    }

    const systemPrompt = buildSystemPrompt(fehlerKategorie, sprachLevel, versuch ?? 1, bisherigeStrategien ?? []);

    const userMessage = `Thema: ${thema}
Gewählte Antwort (falsch): ${gewaehlteAntwort ?? "(keine Angabe)"}
Richtige Antwort: ${richtigeAntwort}
Fehlertyp: ${fehlerKategorie}
Versuch: ${versuch ?? 1}`;

    const response = await fetch(NEBIUS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.3-70B-Instruct",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        max_tokens: 280,
        temperature: 0.4,
      }),
    });

    if (!response.ok) {
      console.error("Nebius API error:", response.status);
      return NextResponse.json({
        ...STATIC_FALLBACK,
        source: "error",
      });
    }

    const data = await response.json();
    const rawContent: string =
      data.choices?.[0]?.message?.content ?? "";

    // JSON aus der Antwort extrahieren
    try {
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      const parsed = JSON.parse(jsonMatch ? jsonMatch[0] : rawContent);

      // Neues Format mit sandwich
      if (parsed.sandwich) {
        const result: ScaffoldingResult = {
          sandwich: {
            lob: parsed.sandwich.lob ?? STATIC_FALLBACK.sandwich.lob,
            korrektur: parsed.sandwich.korrektur ?? STATIC_FALLBACK.sandwich.korrektur,
            ermutigung: parsed.sandwich.ermutigung ?? STATIC_FALLBACK.sandwich.ermutigung,
          },
          alternativeErklaerung: parsed.alternativeErklaerung ?? STATIC_FALLBACK.alternativeErklaerung,
          analogie: parsed.analogie,
          strategieTyp: parsed.strategieTyp ?? "analogie",
          source: "nebius",
        };
        return NextResponse.json(result);
      }

      // Legacy-Format (erklaerung/analogie/tipp) → in neues Format konvertieren
      const result: ScaffoldingResult = {
        sandwich: {
          lob: STATIC_FALLBACK.sandwich.lob,
          korrektur: parsed.erklaerung ?? STATIC_FALLBACK.sandwich.korrektur,
          ermutigung: parsed.tipp ?? STATIC_FALLBACK.sandwich.ermutigung,
        },
        alternativeErklaerung: parsed.analogie ?? STATIC_FALLBACK.alternativeErklaerung,
        analogie: parsed.analogie,
        strategieTyp: "analogie",
        source: "nebius-legacy",
      };
      return NextResponse.json(result);
    } catch {
      console.error("Scaffolding JSON parse error, using raw content");
      return NextResponse.json({
        ...STATIC_FALLBACK,
        alternativeErklaerung: rawContent || STATIC_FALLBACK.alternativeErklaerung,
        source: "nebius-raw",
      });
    }
  } catch (error) {
    console.error("KI-Scaffolding error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}
