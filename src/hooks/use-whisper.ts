"use client";

import { useState, useRef, useCallback } from "react";
import { resampleLinear } from "@/lib/audio/wav";

/**
 * On-Device-Whisper v2 (DSGVO-USP: Audio verlässt nie das Gerät).
 *
 * Lehren aus v1 (E2E-Befund 2026-07-19, Memory pilot-ux-haertung):
 * - Import per URL von /whisper/index.es.js (self-hosted) — ein Bare-Specifier
 *   ist im Browser nicht auflösbar, Bundling zerbricht den pthread-Worker.
 * - transcribe() liefert { segments, transcribeDurationMs }, KEIN Array.
 * - pthread-WASM braucht crossOriginIsolated (COOP/COEP in next.config) —
 *   checkWasmSupport() des Pakets prüft nur SIMD, deshalb eigener Guard.
 * - Modell base-q5_1 (57 MB) von carovia.de, nie von HuggingFace
 *   (Benchmark: beste deutsche Fachsprache ≤ 60 MB, ~0,5× Echtzeit).
 */

const WHISPER_MODULE_URL = "/whisper/index.es.js";
const MODEL_URL = "/whisper/models/ggml-base-q5_1.bin";

/** Marker-Fehler: Gerät/Kontext kann kein On-Device-Whisper. */
export const WHISPER_UNSUPPORTED = "WHISPER_UNSUPPORTED";

interface TranscriptSegment {
  text: string;
  timeStart: number;
  timeEnd: number;
}

interface WhisperServiceType {
  checkWasmSupport: () => Promise<boolean>;
  initModel: (data: Uint8Array) => Promise<void>;
  transcribe: (
    audioData: Float32Array,
    callback?: (segment: TranscriptSegment) => void,
    options?: { language?: string; threads?: number; translate?: boolean }
  ) => Promise<{ segments: TranscriptSegment[]; transcribeDurationMs: number }>;
}

// Singleton über Hook-Instanzen hinweg — Modell nur einmal in den Speicher
let whisperInstance: WhisperServiceType | null = null;
let loadingPromise: Promise<void> | null = null;

async function importWhisperModule(): Promise<{
  WhisperWasmService: new (o: { logLevel: number }) => WhisperServiceType;
}> {
  // Nativer Browser-Import einer URL — Function-Trick hält webpack/Turbopack
  // fern (Bundling würde den selbst-referenzierenden pthread-Worker brechen).
  return (Function("u", "return import(u)") as (u: string) => Promise<{
    WhisperWasmService: new (o: { logLevel: number }) => WhisperServiceType;
  }>)(WHISPER_MODULE_URL);
}

async function fetchModel(onProgress: (pct: number) => void): Promise<Uint8Array> {
  const res = await fetch(MODEL_URL);
  if (!res.ok || !res.body) {
    throw new Error("Sprachmodell konnte nicht geladen werden.");
  }
  const total = Number(res.headers.get("Content-Length")) || 0;
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;
    if (total > 0) onProgress(Math.min(99, Math.round((received / total) * 100)));
  }
  onProgress(100);
  const out = new Uint8Array(received);
  let offset = 0;
  for (const c of chunks) {
    out.set(c, offset);
    offset += c.length;
  }
  return out;
}

// Prefetch-Guard: pro Seite/Session nur ein Versuch
let prefetchStarted = false;

/**
 * Wärmt Modul + Modell im Hintergrund (SW-/HTTP-Cache), OHNE zu initialisieren
 * (Init kostet ~200 MB RAM und gehört an den ersten Sprech-Moment).
 * Aufruf beim Situations-Start, wenn die Situation einen Sprech-Step enthält —
 * dann wartet beim Step niemand mehr auf den 57-MB-Download.
 * Leitplanken: Datensparmodus respektieren, nur online, nur wenn das Gerät
 * Whisper überhaupt kann (COI + SIMD) — sonst wären 57 MB verschenkt.
 */
export function prefetchWhisperAssets(): void {
  if (prefetchStarted || typeof window === "undefined") return;
  prefetchStarted = true;

  const conn = (navigator as { connection?: { saveData?: boolean } }).connection;
  if (!navigator.onLine || conn?.saveData) return;
  if (typeof crossOriginIsolated !== "undefined" && !crossOriginIsolated) return;

  const idle =
    typeof requestIdleCallback === "function"
      ? requestIdleCallback
      : (cb: () => void) => setTimeout(cb, 2000);

  idle(() => {
    void (async () => {
      try {
        const { WhisperWasmService } = await importWhisperModule();
        const whisper = new WhisperWasmService({ logLevel: 3 });
        if (!(await whisper.checkWasmSupport())) return;
        // Download in den Browser-/SW-Cache — Response verwerfen, kein Init.
        await fetch(MODEL_URL, { priority: "low" } as RequestInit);
      } catch {
        // still scheitern — der Sprech-Step lädt dann regulär mit Progress-UI
      }
    })();
  });
}

export function useWhisper() {
  const [transcript, setTranscript] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [modelReady, setModelReady] = useState(whisperInstance !== null);
  const [modelProgress, setModelProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const ensureModel = useCallback(async () => {
    if (whisperInstance) {
      setModelReady(true);
      return;
    }
    if (!loadingPromise) {
      loadingPromise = (async () => {
        try {
          if (typeof crossOriginIsolated !== "undefined" && !crossOriginIsolated) {
            throw new Error(WHISPER_UNSUPPORTED);
          }
          const { WhisperWasmService } = await importWhisperModule();
          const whisper = new WhisperWasmService({ logLevel: 3 });
          if (!(await whisper.checkWasmSupport())) {
            throw new Error(WHISPER_UNSUPPORTED);
          }
          const modelData = await fetchModel(setModelProgress);
          await whisper.initModel(modelData);
          whisperInstance = whisper;
        } catch (err) {
          loadingPromise = null;
          throw err;
        }
      })();
    }
    await loadingPromise;
    setModelReady(true);
  }, []);

  const blobToFloat32 = useCallback(async (blob: Blob): Promise<Float32Array> => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext({ sampleRate: 16000 });
    }
    const ctx = audioContextRef.current;
    const audioBuffer = await ctx.decodeAudioData(await blob.arrayBuffer());
    // iOS Safari ignoriert die gewünschte Context-Rate teils → selbst resamplen
    return resampleLinear(audioBuffer.getChannelData(0), audioBuffer.sampleRate, 16000);
  }, []);

  const transcribe = useCallback(
    async (audioBlob: Blob): Promise<string> => {
      setLoading(true);
      setError(null);
      setTranscript(null);
      try {
        await ensureModel();
        if (!whisperInstance) throw new Error(WHISPER_UNSUPPORTED);

        const audioData = await blobToFloat32(audioBlob);
        const res = await whisperInstance.transcribe(audioData, undefined, {
          language: "de",
          threads: navigator.hardwareConcurrency
            ? Math.min(navigator.hardwareConcurrency, 4)
            : 2,
          translate: false,
        });
        const text = res.segments
          .map((s) => s.text)
          .join(" ")
          .trim();
        setTranscript(text);
        setLoading(false);
        return text;
      } catch (err) {
        setLoading(false);
        if (err instanceof Error && err.message === WHISPER_UNSUPPORTED) {
          setError(null); // kein User-Fehler — Aufrufer wechselt auf Fallback
          throw err;
        }
        setError(
          err instanceof Error ? err.message : "Transkription fehlgeschlagen."
        );
        return "";
      }
    },
    [ensureModel, blobToFloat32]
  );

  return {
    transcribe,
    transcript,
    loading,
    modelReady,
    modelProgress,
    error,
  };
}
