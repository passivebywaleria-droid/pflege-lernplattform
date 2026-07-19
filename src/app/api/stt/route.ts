import { NextRequest, NextResponse } from "next/server";

/**
 * Azure STT — Speech-to-Text (de-DE), Short-Audio REST API
 *
 * POST /api/stt
 * Body: WAV-Audio (16-bit PCM, 16 kHz, mono) — Client konvertiert vor dem
 * Upload (src/lib/audio/wav.ts), damit alle Geräte denselben Pfad nutzen.
 * Response: { text: string }
 *
 * DSGVO: Audio wird anonym weitergereicht (kein Name, keine User-ID),
 * Azure-Region EU, nichts wird serverseitig gespeichert.
 * Limits: Short Audio = max 60 s — der Recorder stoppt bei 30 s.
 */

// 30 s * 16 kHz * 2 Byte + WAV-Header, großzügig gerundet
const MAX_AUDIO_BYTES = 2 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    const speechKey = process.env.AZURE_SPEECH_KEY;
    const speechRegion = process.env.AZURE_SPEECH_REGION;
    // Test-/Mock-Override; im Betrieb wird die URL aus der Region gebaut
    const endpoint =
      process.env.AZURE_SPEECH_STT_ENDPOINT ||
      (speechRegion
        ? `https://${speechRegion}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1`
        : null);

    if (!speechKey || !endpoint) {
      return NextResponse.json(
        { error: "Spracherkennung ist nicht konfiguriert." },
        { status: 503 }
      );
    }

    const audio = await request.arrayBuffer();
    if (!audio || audio.byteLength < 100) {
      return NextResponse.json(
        { error: "Kein Audio empfangen." },
        { status: 400 }
      );
    }
    if (audio.byteLength > MAX_AUDIO_BYTES) {
      return NextResponse.json(
        { error: "Aufnahme zu lang." },
        { status: 413 }
      );
    }

    const azureResponse = await fetch(
      `${endpoint}?language=de-DE&format=simple`,
      {
        method: "POST",
        headers: {
          "Ocp-Apim-Subscription-Key": speechKey,
          "Content-Type": "audio/wav; codecs=audio/pcm; samplerate=16000",
          Accept: "application/json",
        },
        body: audio,
      }
    );

    if (!azureResponse.ok) {
      console.error("Azure STT error:", azureResponse.status);
      return NextResponse.json(
        { error: "Spracherkennung fehlgeschlagen." },
        { status: 502 }
      );
    }

    const data = (await azureResponse.json()) as {
      RecognitionStatus?: string;
      DisplayText?: string;
    };

    if (data.RecognitionStatus !== "Success" || !data.DisplayText) {
      // z. B. InitialSilenceTimeout — nichts Verwertbares gesprochen
      return NextResponse.json({ text: "" });
    }

    return NextResponse.json({ text: data.DisplayText });
  } catch (error) {
    console.error("STT error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}
