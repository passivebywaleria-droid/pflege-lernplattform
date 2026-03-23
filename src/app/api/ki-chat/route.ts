import { NextRequest, NextResponse } from "next/server";

const NEBIUS_API_URL = "https://api.studio.nebius.com/v1/chat/completions";

const SYSTEM_PROMPT = `Du bist ein freundlicher Pflege-Tutor für Auszubildende in der generalistischen Pflegeausbildung (Deutschland).

Regeln:
1. Antworte nur zu Pflege-Themen (alle 11 Curricularen Einheiten der PflAPrV).
2. Wenn die Frage nicht zur Pflegeausbildung passt, sage freundlich: "Das ist eine spannende Frage, aber ich bin spezialisiert auf Pflegethemen. Hast du eine Frage zu deiner aktuellen Lektion?"
3. Antworte in 2-4 Sätzen, klar und verständlich.
4. Verwende Fachbegriffe, erkläre sie aber kurz in Klammern wenn nötig.
5. Sei ermutigend und professionell. Kein Emoji.
6. Wenn der Schüler vom aktuellen Thema abschweift, leite zurück: "Gute Frage! Dazu kommen wir später. Lass uns erstmal bei [aktuelles Thema] bleiben."
7. Sprache: Deutsch.`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { messages, context } = await request.json() as {
      messages: ChatMessage[];
      context?: { leTitle?: string; stepTitle?: string; glossar?: string[] };
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "messages Array ist erforderlich" },
        { status: 400 }
      );
    }

    // Max 5 Nachrichten pro Session
    if (messages.filter((m) => m.role === "user").length > 5) {
      return NextResponse.json({
        reply: "Du hast für diese Session bereits 5 Fragen gestellt. Mach erst die Lektion weiter — danach kannst du in der nächsten Session wieder fragen.",
        source: "limit",
      });
    }

    // System-Prompt mit Kontext anreichern
    let enrichedPrompt = SYSTEM_PROMPT;
    if (context?.leTitle) {
      enrichedPrompt += `\n\nAktuelles Thema: ${context.leTitle}`;
    }
    if (context?.stepTitle) {
      enrichedPrompt += `\nAktueller Step: ${context.stepTitle}`;
    }
    if (context?.glossar && context.glossar.length > 0) {
      enrichedPrompt += `\nGlossar-Begriffe dieser LE: ${context.glossar.join(", ")}`;
    }

    const apiKey = process.env.NEBIUS_API_KEY;

    // Ohne API-Key: Dev-Fallback
    if (!apiKey) {
      return NextResponse.json({
        reply: "Das ist eine gute Frage! In der fertigen Version antworte ich hier mit echtem KI-Wissen aus der Pflegeausbildung. Aktuell bin ich im Entwicklungsmodus.",
        source: "fallback",
      });
    }

    const response = await fetch(NEBIUS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.3-70B-Instruct",
        messages: [
          { role: "system", content: enrichedPrompt },
          ...messages,
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      console.error("Nebius API error:", response.status);
      return NextResponse.json({
        reply: "Entschuldigung, ich konnte deine Frage gerade nicht verarbeiten. Versuche es gleich nochmal.",
        source: "error",
      });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "Ich konnte keine Antwort generieren. Bitte stelle deine Frage nochmal.";

    return NextResponse.json({ reply, source: "nebius" });
  } catch (error) {
    console.error("KI-Chat error:", error);
    return NextResponse.json({
      reply: "Ein Fehler ist aufgetreten. Bitte versuche es erneut.",
      source: "error",
    });
  }
}
