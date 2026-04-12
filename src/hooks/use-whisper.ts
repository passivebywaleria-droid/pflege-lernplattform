"use client";

import { useState, useRef, useCallback } from "react";

/**
 * Whisper WASM Transkription Hook.
 * Lädt whisper.wasm (tiny, 75 MB) lazy beim ersten Aufruf.
 * Komplett im Browser — Audio verlässt nie das Gerät. DSGVO-perfekt.
 */

// Singleton: Whisper-Service nur einmal laden
let whisperInstance: WhisperServiceType | null = null;
let modelLoaded = false;
let loadingPromise: Promise<void> | null = null;

// Types für dynamischen Import
interface WhisperServiceType {
  checkWasmSupport: () => Promise<boolean>;
  initModel: (data: Uint8Array) => Promise<void>;
  transcribe: (
    audioData: Float32Array,
    callback?: (segment: TranscriptSegment) => void,
    options?: TranscribeOptions
  ) => Promise<TranscriptSegment[]>;
}

interface TranscriptSegment {
  text: string;
  timeStart: number;
  timeEnd: number;
}

interface TranscribeOptions {
  language?: string;
  threads?: number;
  translate?: boolean;
}

interface ModelManagerType {
  loadModel: (
    id: "tiny" | "base" | "small" | "medium-q5_0" | "large-q5_0",
    saveCache?: boolean,
    onProgress?: (progress: number) => void
  ) => Promise<Uint8Array>;
}

export function useWhisper() {
  const [transcript, setTranscript] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [modelReady, setModelReady] = useState(modelLoaded);
  const [modelProgress, setModelProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  /**
   * Whisper-Modell lazy laden (nur beim ersten Aufruf).
   * Cached in IndexedDB — nach erstem Download sofort verfügbar.
   */
  const ensureModel = useCallback(async () => {
    if (modelLoaded && whisperInstance) {
      setModelReady(true);
      return;
    }

    if (loadingPromise) {
      await loadingPromise;
      setModelReady(true);
      return;
    }

    loadingPromise = (async () => {
      try {
        // Dynamic import — Turbopack-safe (Pfad zur Laufzeit)
        const moduleName = "@timur00kh/" + "whisper.wasm";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const mod = await (Function("m", "return import(m)")(moduleName) as Promise<any>);
        const { WhisperWasmService, ModelManager } = mod;

        const whisper = new WhisperWasmService({ logLevel: 0 });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const modelManager: ModelManagerType = new ModelManager({ logLevel: 0 }) as any;

        // WASM-Support prüfen
        const supported = await whisper.checkWasmSupport();
        if (!supported) {
          throw new Error("WebAssembly wird von diesem Browser nicht unterstützt.");
        }

        // Modell laden (tiny = 75 MB, cached in IndexedDB)
        const modelData = await modelManager.loadModel(
          "tiny",
          true,
          (progress: number) => {
            setModelProgress(Math.round(progress));
          }
        );

        await whisper.initModel(modelData);

        whisperInstance = whisper as unknown as WhisperServiceType;
        modelLoaded = true;
        setModelReady(true);
      } catch (err) {
        loadingPromise = null;
        throw err;
      }
    })();

    await loadingPromise;
  }, []);

  /**
   * Audio-Blob zu Float32Array (16 kHz Mono) konvertieren.
   * Nutzt Web Audio API (Browser-nativ).
   */
  const blobToFloat32 = useCallback(async (blob: Blob): Promise<Float32Array> => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext({ sampleRate: 16000 });
    }
    const ctx = audioContextRef.current;

    const arrayBuffer = await blob.arrayBuffer();
    const audioBuffer = await ctx.decodeAudioData(arrayBuffer);

    // Mono-Channel extrahieren
    return audioBuffer.getChannelData(0);
  }, []);

  /**
   * Audio-Blob transkribieren.
   * Lädt Modell beim ersten Aufruf, dann cached.
   */
  const transcribe = useCallback(
    async (audioBlob: Blob): Promise<string> => {
      setLoading(true);
      setError(null);
      setTranscript(null);

      try {
        // Modell sicherstellen
        await ensureModel();

        if (!whisperInstance) {
          throw new Error("Whisper konnte nicht geladen werden.");
        }

        // Audio konvertieren
        const audioData = await blobToFloat32(audioBlob);

        // Transkribieren
        const segments = await whisperInstance.transcribe(audioData, undefined, {
          language: "de",
          threads: navigator.hardwareConcurrency
            ? Math.min(navigator.hardwareConcurrency, 4)
            : 2,
          translate: false,
        });

        const text = segments
          .map((s) => s.text)
          .join(" ")
          .trim();

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
