"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AudioPlayer } from "./audio-player";
import { TtsButton } from "./tts-button";
import { FachbegriffText } from "./fachbegriff-tooltip";
import type { GlossarEntry } from "../../../content/_types";

export interface StepAudioProps {
  title: string;
  body?: string;
  audioUrl: string;
  audioLabel?: string;
  transcript?: string;
  imageUrl?: string;
  imageAlt?: string;
  fallbezug?: string;
  glossar?: GlossarEntry[];
  glossarBegriffe?: string[];
  onNext: () => void;
}

export function StepAudio({
  title,
  body,
  audioUrl,
  audioLabel,
  transcript,
  imageUrl,
  imageAlt,
  fallbezug,
  glossar,
  onNext,
}: StepAudioProps) {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="space-y-6 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      {/* Title */}
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>
        <TtsButton text={`${title}. ${body || ""}`} className="shrink-0 mt-1" />
      </div>

      {/* Body (B1, kurz) */}
      {body && (
        <div className="text-[var(--lern-text-primary)]/80 leading-relaxed">
          {body.split("\n\n").map((paragraph, i) => (
            <p key={i} className="whitespace-pre-line mb-3 last:mb-0">
              <FachbegriffText glossar={glossar ?? []}>{paragraph}</FachbegriffText>
            </p>
          ))}
        </div>
      )}

      {/* Optional: Bild */}
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-[var(--lern-border)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={imageAlt || title} className="w-full h-auto" />
          {imageAlt && (
            <p className="text-xs text-[var(--lern-text-tertiary)] text-center py-2 px-4">{imageAlt}</p>
          )}
        </motion.div>
      )}

      {/* Audio-Player (Hauptinhalt) */}
      <AudioPlayer src={audioUrl} label={audioLabel} />

      {/* Transkript — Collapsible */}
      {transcript && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="w-full flex items-center justify-between rounded-2xl bg-[var(--lern-bg)] border border-[var(--lern-border)] px-4 py-3 transition-colors active:bg-[var(--lern-divider)]"
          >
            <span className="text-sm font-medium text-[var(--lern-text-primary)]">
              Transkript anzeigen
            </span>
            <span className="text-sm text-[var(--lern-text-secondary)]">
              {showTranscript ? "▲" : "▼"}
            </span>
          </button>
          {showTranscript && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              className="rounded-b-2xl bg-[var(--lern-bg)]/50 border border-t-0 border-[var(--lern-border)] px-4 py-3"
            >
              <div className="text-sm text-[var(--lern-text-primary)]/70 leading-relaxed space-y-2">
                {transcript.split("\n\n").map((p, i) => (
                  <p key={i} className="whitespace-pre-line">
                    <FachbegriffText glossar={glossar ?? []}>{p}</FachbegriffText>
                  </p>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Fallbezug */}
      {fallbezug && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-2xl bg-[var(--lern-accent)]/5 border border-[var(--lern-accent)]/15 p-4"
        >
          <p className="text-sm font-medium text-[var(--lern-accent)] mb-1">Fallbezug</p>
          <p className="text-sm text-[var(--lern-text-primary)]/70">{fallbezug}</p>
        </motion.div>
      )}

      {/* Weiter */}
      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onClick={onNext}
        className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
      >
        Weiter
      </motion.button>
    </div>
  );
}
