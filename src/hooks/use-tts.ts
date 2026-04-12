"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/**
 * TTS Hook — Azure KatjaNeural mit Browser-Fallback.
 *
 * Versucht /api/tts (Azure). Bei Fehler → Browser SpeechSynthesis.
 * Shared von TtsButton, FachbegriffTtsButton, Glossar.
 */
export function useTts() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Cleanup bei Unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (abortRef.current) {
        abortRef.current.abort();
      }
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setPlaying(false);
  }, []);

  const speakBrowser = useCallback(
    (text: string, rate: number) => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;

      window.speechSynthesis.cancel();

      const cleanText = text
        .replace(/[#*_~`]/g, "")
        .replace(/\n+/g, ". ")
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = "de-DE";
      utterance.rate = rate;

      const voices = window.speechSynthesis.getVoices();
      const germanVoice =
        voices.find(
          (v) => v.lang.startsWith("de") && v.name.includes("Female")
        ) ?? voices.find((v) => v.lang.startsWith("de"));
      if (germanVoice) {
        utterance.voice = germanVoice;
      }

      utterance.onend = () => setPlaying(false);
      utterance.onerror = () => setPlaying(false);

      setPlaying(true);
      window.speechSynthesis.speak(utterance);
    },
    []
  );

  const speak = useCallback(
    async (text: string, rate: number = 1.0) => {
      if (!text?.trim()) return;

      // Falls schon am Spielen → stoppen
      if (playing) {
        stop();
        return;
      }

      // Text säubern
      const cleanText = text
        .replace(/[#*_~`]/g, "")
        .replace(/\n+/g, ". ")
        .trim();

      if (!cleanText) return;

      setPlaying(true);

      // Versuche Azure TTS
      try {
        const controller = new AbortController();
        abortRef.current = controller;

        const response = await fetch("/api/tts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: cleanText, rate }),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`TTS API: ${response.status}`);
        }

        const contentType = response.headers.get("Content-Type");
        if (!contentType?.includes("audio")) {
          throw new Error("Kein Audio erhalten");
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const audio = new Audio(url);
        audioRef.current = audio;

        audio.onended = () => {
          URL.revokeObjectURL(url);
          audioRef.current = null;
          setPlaying(false);
        };
        audio.onerror = () => {
          URL.revokeObjectURL(url);
          audioRef.current = null;
          setPlaying(false);
        };

        await audio.play();
      } catch (error) {
        // Bei Abort: still beenden
        if (error instanceof DOMException && error.name === "AbortError") {
          setPlaying(false);
          return;
        }

        // Fallback: Browser SpeechSynthesis
        console.warn("Azure TTS fehlgeschlagen, nutze Browser-Fallback:", error);
        speakBrowser(cleanText, rate);
      }
    },
    [playing, stop, speakBrowser]
  );

  return { speak, stop, playing };
}
