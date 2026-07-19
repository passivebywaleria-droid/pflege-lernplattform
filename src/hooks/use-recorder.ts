"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/**
 * Mikrofon-Aufnahme Hook.
 * Nutzt MediaRecorder API (Browser-nativ).
 * Max 30 Sekunden, auto-stop.
 */

/**
 * iOS Safari kennt KEIN audio/webm — ein nicht unterstützter mimeType lässt
 * den MediaRecorder-Konstruktor mit NotSupportedError werfen. Deshalb:
 * Kandidaten durchprobieren (Chrome/Android → webm/opus, iOS → mp4),
 * sonst den Browser wählen lassen (undefined).
 */
export function pickRecorderMimeType(
  isTypeSupported: (type: string) => boolean
): string | undefined {
  const candidates = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"];
  return candidates.find((c) => isTypeSupported(c));
}

export function useRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Cleanup bei Unmount
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
        mediaRecorderRef.current.stop();
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const startRecording = useCallback(async () => {
    setError(null);
    setAudioBlob(null);
    chunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          sampleRate: 16000,
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      streamRef.current = stream;

      const mimeType = pickRecorderMimeType((t) =>
        MediaRecorder.isTypeSupported(t)
      );
      const recorder = new MediaRecorder(
        stream,
        mimeType ? { mimeType } : undefined
      );
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        // recorder.mimeType = was der Browser WIRKLICH aufgenommen hat
        const blob = new Blob(chunksRef.current, {
          type: recorder.mimeType || mimeType || "audio/webm",
        });
        setAudioBlob(blob);
        setRecording(false);

        // Stream stoppen
        stream.getTracks().forEach((t) => t.stop());
        streamRef.current = null;
      };

      recorder.start(100); // 100ms Chunks
      setRecording(true);

      // Auto-stop nach 30 Sekunden
      timerRef.current = setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
        }
      }, 30000);
    } catch (err) {
      if (err instanceof DOMException && err.name === "NotAllowedError") {
        setError("Mikrofon-Zugriff verweigert. Bitte erlaube den Zugriff in den Browser-Einstellungen.");
      } else if (err instanceof DOMException && err.name === "NotFoundError") {
        setError("Kein Mikrofon gefunden. Bitte schließe ein Mikrofon an.");
      } else {
        setError("Mikrofon konnte nicht gestartet werden.");
      }
      setRecording(false);
    }
  }, []);

  const stopRecording = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  }, []);

  return {
    startRecording,
    stopRecording,
    recording,
    audioBlob,
    error,
  };
}
