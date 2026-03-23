"use client";

import { useState, useRef, useCallback } from "react";

interface TtsButtonProps {
  text: string;
  className?: string;
}

/**
 * Lautsprecher-Button der Text vorliest.
 * MVP: Browser SpeechSynthesis API (deutsch).
 * Später: Azure KatjaNeural.
 */
export function TtsButton({ text, className = "" }: TtsButtonProps) {
  const [playing, setPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const toggle = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;

    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      return;
    }

    // Vorherige Ausgabe abbrechen
    window.speechSynthesis.cancel();

    // Klartext extrahieren (HTML-Tags und Markdown entfernen)
    const cleanText = text
      .replace(/[#*_~`]/g, "")
      .replace(/\n+/g, ". ")
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "de-DE";
    utterance.rate = 1.0;

    // Deutsche Stimme bevorzugen
    const voices = window.speechSynthesis.getVoices();
    const germanVoice = voices.find(
      (v) => v.lang.startsWith("de") && v.name.includes("Female")
    ) ?? voices.find((v) => v.lang.startsWith("de"));
    if (germanVoice) {
      utterance.voice = germanVoice;
    }

    utterance.onend = () => setPlaying(false);
    utterance.onerror = () => setPlaying(false);

    utteranceRef.current = utterance;
    setPlaying(true);
    window.speechSynthesis.speak(utterance);
  }, [text, playing]);

  return (
    <button
      onClick={toggle}
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
        playing
          ? "bg-[#0071e3] text-white"
          : "bg-[#f5f5f7] dark:bg-white/10 text-[#6e6e73] hover:bg-[#e5e5ea] dark:hover:bg-white/15"
      } ${className}`}
      title={playing ? "Stoppen" : "Vorlesen"}
    >
      {playing ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  );
}
