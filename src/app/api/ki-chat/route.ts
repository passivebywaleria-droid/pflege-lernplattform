import { NextRequest, NextResponse } from "next/server";

const NEBIUS_API_URL = "https://api.studio.nebius.com/v1/chat/completions";

const SYSTEM_PROMPT_BASE = `Du bist ein freundlicher Pflege-Tutor für Auszubildende in der generalistischen Pflegeausbildung (Deutschland).

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
    interface RecentError {
      stepTitle: string;
      gewaehlteOption?: string;
      richtigeAntwort?: string;
    }

    const { messages, context } = await request.json() as {
      messages: ChatMessage[];
      context?: {
        leTitle?: string;
        stepTitle?: string;
        stepBody?: string;
        glossar?: string[];
        sprachLevel?: "b1" | "c1";
        recentErrors?: RecentError[];
      };
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
    let enrichedPrompt = SYSTEM_PROMPT_BASE;

    const sprachLevel = context?.sprachLevel ?? "c1";
    if (sprachLevel === "b1") {
      enrichedPrompt += `\n\nWICHTIG: Der Schüler lernt auf Sprachniveau B1. Verwende einfache, kurze Sätze. Erkläre Fachbegriffe immer in Klammern mit einfachen Worten. Vermeide Nebensätze und Passiv.`;
    } else {
      enrichedPrompt += `\n\nDer Schüler lernt auf Sprachniveau C1. Du kannst Fachsprache verwenden, erkläre aber neue Begriffe beim ersten Mal.`;
    }

    if (context?.leTitle) {
      enrichedPrompt += `\n\nDer Schüler bearbeitet gerade: ${context.leTitle}`;
    }
    if (context?.stepTitle) {
      enrichedPrompt += `\nAktueller Step: ${context.stepTitle}`;
    }
    if (context?.stepBody) {
      // Nur erste 300 Zeichen, um Token zu sparen
      const bodyShort = context.stepBody.length > 300
        ? context.stepBody.slice(0, 300) + '...'
        : context.stepBody;
      enrichedPrompt += `\nInhalt des Steps: ${bodyShort}`;
    }
    if (context?.recentErrors && context.recentErrors.length > 0) {
      const fehlerText = context.recentErrors
        .map((e, i) => {
          let line = `${i + 1}. "${e.stepTitle}"`;
          if (e.gewaehlteOption) line += ` — gewählt: "${e.gewaehlteOption}"`;
          if (e.richtigeAntwort) line += `, richtig wäre: "${e.richtigeAntwort}"`;
          return line;
        })
        .join("\n");
      enrichedPrompt += `\n\nLetzte Fehler des Schülers:\n${fehlerText}\nGehe auf diese Fehler ein wenn der Schüler danach fragt. Nutze das Sandwich-Prinzip: Loben, Korrigieren, Ermutigen.`;
    }
    if (context?.glossar && context.glossar.length > 0) {
      // Nur erste 10 Begriffe — spart ~100 Tokens bei großen Glossaren
      enrichedPrompt += `\nGlossar-Begriffe dieser LE: ${context.glossar.slice(0, 10).join(", ")}`;
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
        max_tokens: 220,
        temperature: 0.5,
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
