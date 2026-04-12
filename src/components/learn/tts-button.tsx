"use client";

import { useTts } from "@/hooks/use-tts";

interface TtsButtonProps {
  text: string;
  className?: string;
  rate?: number;
}

/**
 * Lautsprecher-Button der Text vorliest.
 * Azure KatjaNeural mit Browser-Fallback.
 */
export function TtsButton({ text, className = "", rate }: TtsButtonProps) {
  const { speak, playing } = useTts();

  return (
    <button
      onClick={() => speak(text, rate)}
      className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
        playing
          ? "bg-[var(--lern-accent)] text-white"
          : "bg-[var(--lern-bg)] text-[var(--lern-text-secondary)] hover:bg-[var(--lern-divider)]"
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
