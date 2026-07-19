"use client";

import { useState, useRef, useCallback } from "react";
import { encodeWavPcm16 } from "@/lib/audio/wav";

/**
 * Server-STT Hook (Azure Speech, EU — via /api/stt).
 *
 * Pfad: Aufnahme-Blob (webm/opus bzw. mp4/aac je nach Browser)
 * → decodeAudioData auf 16 kHz mono → WAV PCM 16-bit → POST /api/stt.
 * Die Client-Konvertierung macht das Geräte-Format egal — iOS Safari
 * nimmt mp4/aac auf, Chrome webm/opus, Azure bekommt immer WAV.
 *
 * On-Device-Whisper (DSGVO-USP) ist v2 — Befunde und Bedingungen
 * (COOP/COEP, Self-Host-Modell) im Memory „pilot-ux-haertung".
 */
export function useStt() {
  const [transcript, setTranscript] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const blobToWav = useCallback(async (blob: Blob): Promise<ArrayBuffer> => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext({ sampleRate: 16000 });
    }
    const ctx = audioContextRef.current;
    const arrayBuffer = await blob.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);
    return encodeWavPcm16(audioBuffer.getChannelData(0), audioBuffer.sampleRate);
  }, []);

  const transcribe = useCallback(
    async (audioBlob: Blob): Promise<string> => {
      setLoading(true);
      setError(null);
      setTranscript(null);

      try {
        if (typeof navigator !== "undefined" && !navigator.onLine) {
          throw new Error(
            "Die Sprechübung braucht eine Internetverbindung. Du kannst diesen Schritt überspringen."
          );
        }

        const wav = await blobToWav(audioBlob);

        const response = await fetch("/api/stt", {
          method: "POST",
          headers: { "Content-Type": "audio/wav" },
          body: wav,
        });

        if (!response.ok) {
          const data = await response.json().catch(() => null);
          throw new Error(
            data?.error ?? "Spracherkennung fehlgeschlagen. Versuch es nochmal."
          );
        }

        const data = (await response.json()) as { text?: string };
        const text = (data.text ?? "").trim();

        if (!text) {
          throw new Error(
            "Ich habe nichts verstanden — sprich bitte etwas lauter und deutlicher."
          );
        }

        setTranscript(text);
        setLoading(false);
        return text;
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Transkription fehlgeschlagen.";
        setError(msg);
        setLoading(false);
        return "";
      }
    },
    [blobToWav]
  );

  return {
    transcribe,
    transcript,
    loading,
    error,
  };
}
