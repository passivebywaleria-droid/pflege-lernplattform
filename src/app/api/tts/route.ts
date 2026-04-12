import { NextRequest, NextResponse } from "next/server";

/**
 * Azure TTS — KatjaNeural (de-DE)
 *
 * POST /api/tts
 * Body: { text: string, rate?: number }
 * Response: audio/mpeg stream
 *
 * Nutzt Azure Cognitive Services REST API direkt (kein SDK nötig).
 * Free Tier: 500.000 Zeichen/Monat.
 */

const MAX_TEXT_LENGTH = 5000;

function buildSsml(text: string, rate: number): string {
  // XML-Sonderzeichen escapen
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

  // Rate als Prozent (1.0 = default, 0.85 = -15%)
  const ratePercent = Math.round(rate * 100);

  return `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="de-DE">
  <voice name="de-DE-KatjaNeural">
    <prosody rate="${ratePercent}%">${escaped}</prosody>
  </voice>
</speak>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, rate = 1.0 } = body as { text: string; rate?: number };

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "text ist erforderlich" },
        { status: 400 }
      );
    }

    if (text.length > MAX_TEXT_LENGTH) {
      return NextResponse.json(
        { error: `Text zu lang (max ${MAX_TEXT_LENGTH} Zeichen)` },
        { status: 400 }
      );
    }

    const speechKey = process.env.AZURE_SPEECH_KEY;
    const speechRegion = process.env.AZURE_SPEECH_REGION;

    if (!speechKey || !speechRegion) {
      return NextResponse.json(
        { error: "Azure Speech nicht konfiguriert" },
        { status: 400 }
      );
    }

    // Token holen
    const tokenResponse = await fetch(
      `https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`,
      {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": speechKey,
          "Content-Length": "0",
        },
      }
    );

    if (!tokenResponse.ok) {
      console.error("Azure token error:", tokenResponse.status);
      return NextResponse.json(
        { error: "Azure-Authentifizierung fehlgeschlagen" },
        { status: 502 }
      );
    }

    const accessToken = await tokenResponse.text();

    // SSML bauen und Audio generieren
    const ssml = buildSsml(text, rate);

    const audioResponse = await fetch(
      `https://${speechRegion}.tts.speech.microsoft.com/cognitiveservices/v1`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/ssml+xml",
          "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
          "User-Agent": "PflegeLernplattform",
        },
        body: ssml,
      }
    );

    if (!audioResponse.ok) {
      console.error("Azure TTS error:", audioResponse.status);
      return NextResponse.json(
        { error: "Sprachsynthese fehlgeschlagen" },
        { status: 502 }
      );
    }

    const audioBuffer = await audioResponse.arrayBuffer();

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.byteLength.toString(),
        "Cache-Control": "public, max-age=86400", // 24h Cache
      },
    });
  } catch (error) {
    console.error("TTS error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten" },
      { status: 500 }
    );
  }
}
