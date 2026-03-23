import { NextRequest, NextResponse } from "next/server";

const NEBIUS_API_URL = "https://api.studio.nebius.com/v1/chat/completions";

export async function POST(request: NextRequest) {
  try {
    const { systemPrompt, userMessage } = await request.json();

    if (!userMessage || typeof userMessage !== "string") {
      return NextResponse.json(
        { error: "userMessage ist erforderlich" },
        { status: 400 }
      );
    }

    const apiKey = process.env.NEBIUS_API_KEY;

    // Ohne API-Key: Fallback-Antwort (Dev-Modus)
    if (!apiKey) {
      return NextResponse.json({
        feedback: generateFallbackFeedback(userMessage),
        source: "fallback",
      });
    }

    // Nebius API Call (Llama 3.3 70B)
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
        max_tokens: 200,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error("Nebius API error:", response.status, await response.text());
      return NextResponse.json({
        feedback: generateFallbackFeedback(userMessage),
        source: "fallback",
      });
    }

    const data = await response.json();
    const feedback = data.choices?.[0]?.message?.content ?? generateFallbackFeedback(userMessage);

    return NextResponse.json({ feedback, source: "nebius" });
  } catch (error) {
    console.error("KI-Feedback error:", error);
    return NextResponse.json({
      feedback: "Danke für deine Gedanken! Lass uns gemeinsam in das Thema eintauchen.",
      source: "error-fallback",
    });
  }
}

/**
 * Fallback wenn kein API-Key konfiguriert (Entwicklung).
 * Einfache Keyword-basierte Antwort.
 */
function generateFallbackFeedback(text: string): string {
  const lower = text.toLowerCase();
  const keywords = {
    gelenk: "Gelenke",
    entzünd: "Entzündung",
    schmerz: "Schmerzen",
    autoimmun: "Autoimmunerkrankung",
    rheuma: "Rheuma",
    steif: "Steifigkeit",
    finger: "Finger",
    hand: "Hände",
    immun: "Immunsystem",
    schwellung: "Schwellung",
  };

  const found: string[] = [];
  for (const [key, label] of Object.entries(keywords)) {
    if (lower.includes(key)) {
      found.push(label);
    }
  }

  if (found.length >= 2) {
    return `Du bringst schon einiges an Vorwissen mit — ${found.slice(0, 2).join(" und ")} sind wichtige Aspekte! Mal sehen, ob sich dein Bild im Laufe der Lektion bestätigt und erweitert.`;
  }

  if (found.length === 1) {
    return `Guter Ansatz — ${found[0]} spielt tatsächlich eine Rolle! In dieser Lektion wirst du herausfinden, was genau dahinter steckt und warum das für die Pflege wichtig ist.`;
  }

  return "Danke für deine Gedanken! Lass uns gemeinsam herausfinden, was hinter diesem Thema steckt. Du wirst überrascht sein, wie viel Pflege-Relevanz darin steckt.";
}
