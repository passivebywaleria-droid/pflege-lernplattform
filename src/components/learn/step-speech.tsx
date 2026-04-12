"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTts } from "@/hooks/use-tts";
import { useRecorder } from "@/hooks/use-recorder";
import { useWhisper } from "@/hooks/use-whisper";
import type { GlossarEntry } from "../../../content/_types";
import type { SpeechData } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface StepSpeechProps {
  title: string;
  body: string;
  glossar: GlossarEntry[];
  speech: SpeechData;
  sprachLevel: "c1" | "b1";
  onNext: (correct?: boolean) => void;
}

/**
 * Levenshtein-Distanz für Fuzzy-Match bei Nachsprech-Übungen.
 * Normalisiert auf 0-1 (0 = identisch, 1 = komplett verschieden).
 */
function levenshteinSimilarity(a: string, b: string): number {
  const la = a.toLowerCase().trim();
  const lb = b.toLowerCase().trim();
  if (la === lb) return 1;
  if (!la.length || !lb.length) return 0;

  const matrix: number[][] = [];
  for (let i = 0; i <= la.length; i++) {
    matrix[i] = [i];
    for (let j = 1; j <= lb.length; j++) {
      if (i === 0) {
        matrix[i][j] = j;
      } else {
        const cost = la[i - 1] === lb[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + cost
        );
      }
    }
  }
  const maxLen = Math.max(la.length, lb.length);
  return 1 - matrix[la.length][lb.length] / maxLen;
}

type Bewertung = "perfekt" | "gut" | "nochmal";

function bewerteSimilarity(score: number): Bewertung {
  if (score >= 0.85) return "perfekt";
  if (score >= 0.6) return "gut";
  return "nochmal";
}

const BEWERTUNG_CONFIG: Record<Bewertung, { label: string; farbe: string; emoji: string }> = {
  perfekt: { label: "Perfekt ausgesprochen!", farbe: "#6B8F71", emoji: "🎯" },
  gut: { label: "Fast richtig — probier es nochmal!", farbe: "#D4956A", emoji: "👍" },
  nochmal: { label: "Versuch es nochmal — hör dir den Begriff nochmal an.", farbe: "#C96B5C", emoji: "🔄" },
};

export function StepSpeech({
  title,
  body,
  glossar,
  speech,
  sprachLevel,
  onNext,
}: StepSpeechProps) {
  const { speak: ttsSpeak, playing: ttsPlaying } = useTts();
  const { startRecording, stopRecording, recording, audioBlob, error: recorderError } = useRecorder();
  const { transcribe, transcript, loading: whisperLoading, modelReady, modelProgress, error: whisperError } = useWhisper();

  const [bewertung, setBewertung] = useState<Bewertung | null>(null);
  const [similarity, setSimilarity] = useState<number | null>(null);
  const [kiFeedback, setKiFeedback] = useState<string | null>(null);
  const [kiFeedbackLoading, setKiFeedbackLoading] = useState(false);
  const [versuch, setVersuch] = useState(0);

  const isNachsprechen = speech.speechType === "nachsprechen";
  const aufgabe = sprachLevel === "b1" && speech.aufgabeB1 ? speech.aufgabeB1 : speech.aufgabe;

  // Wenn audioBlob fertig → transkribieren
  useEffect(() => {
    if (!audioBlob) return;

    (async () => {
      const text = await transcribe(audioBlob);
      if (!text) return;

      if (isNachsprechen && speech.zielwort) {
        // Typ A: Vergleich mit Zielwort
        const score = levenshteinSimilarity(text, speech.zielwort);
        setSimilarity(score);
        setBewertung(bewerteSimilarity(score));
      } else {
        // Typ B: KI-Feedback holen
        setBewertung("gut"); // Erstmal neutral
        await fetchKiFeedback(text);
      }
      setVersuch((v) => v + 1);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioBlob]);

  const fetchKiFeedback = useCallback(async (spokenText: string) => {
    setKiFeedbackLoading(true);
    try {
      const response = await fetch("/api/ki-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: spokenText,
          aufgabe: aufgabe ?? speech.aufgabe ?? "Erkläre den Fachbegriff",
          bewertungshinweis: speech.bewertungshinweis ?? "",
          sprachLevel,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setKiFeedback(data.feedback ?? data.bewertung ?? null);
        // Bewertung basierend auf KI-Score
        if (data.score !== undefined) {
          setBewertung(data.score >= 70 ? "perfekt" : data.score >= 40 ? "gut" : "nochmal");
        }
      }
    } catch {
      // Kein KI-Feedback — nicht kritisch
    } finally {
      setKiFeedbackLoading(false);
    }
  }, [aufgabe, speech.aufgabe, speech.bewertungshinweis, sprachLevel]);

  const handleNochmal = useCallback(() => {
    setBewertung(null);
    setSimilarity(null);
    setKiFeedback(null);
  }, []);

  const handleWeiter = useCallback(() => {
    onNext(bewertung === "perfekt" || bewertung === "gut");
  }, [onNext, bewertung]);

  const error = recorderError || whisperError;

  return (
    <div className="space-y-5" style={{ color: "var(--lern-text-primary)" }}>
      {/* Titel + Aufgabe */}
      <div>
        <h2 className="text-xl font-bold mb-2">
          <FachbegriffText glossar={glossar}>{title}</FachbegriffText>
        </h2>
        <p className="text-sm text-[var(--lern-text-secondary)] leading-relaxed">
          <FachbegriffText glossar={glossar}>{body}</FachbegriffText>
        </p>
      </div>

      {/* Nachsprechen: Zielwort anzeigen + Vorlesen */}
      {isNachsprechen && speech.zielwort && (
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-[var(--lern-accent)]/5 border border-[var(--lern-accent)]/20">
          <button
            onClick={() => ttsSpeak(speech.zielwort!, 0.85)}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors ${
              ttsPlaying
                ? "bg-[var(--lern-accent)] text-white"
                : "bg-[var(--lern-accent)]/10 text-[var(--lern-accent)]"
            }`}
            title="Vorlesen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          </button>
          <div>
            <p className="text-xs text-[var(--lern-text-tertiary)] mb-0.5">
              {sprachLevel === "b1" ? "Hör zu und sprich nach:" : "Sprich diesen Begriff aus:"}
            </p>
            <p className="text-2xl font-bold text-[var(--lern-accent)]">{speech.zielwort}</p>
          </div>
        </div>
      )}

      {/* Erklären: Aufgabe anzeigen */}
      {!isNachsprechen && aufgabe && (
        <div className="p-4 rounded-2xl bg-[#9B7EA6]/5 border border-[#9B7EA6]/20">
          <p className="text-xs text-[#9B7EA6] font-medium mb-1">Deine Aufgabe:</p>
          <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed">
            <FachbegriffText glossar={glossar}>{aufgabe}</FachbegriffText>
          </p>
        </div>
      )}

      {/* Modell-Download-Fortschritt */}
      {!modelReady && whisperLoading && (
        <div className="text-center p-4">
          <div className="w-full h-2 bg-[var(--lern-divider)] rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-[var(--lern-accent)] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${modelProgress}%` }}
            />
          </div>
          <p className="text-xs text-[var(--lern-text-tertiary)]">
            Spracherkennung wird geladen... {modelProgress}%
          </p>
        </div>
      )}

      {/* Fehler */}
      {error && (
        <div className="p-3 rounded-xl bg-[#C96B5C]/10 border border-[#C96B5C]/20">
          <p className="text-sm text-[#C96B5C]">{error}</p>
        </div>
      )}

      {/* Mikrofon-Button */}
      {!bewertung && (
        <div className="flex flex-col items-center gap-3 py-4">
          <button
            onClick={recording ? stopRecording : startRecording}
            disabled={whisperLoading}
            className={`relative flex h-20 w-20 items-center justify-center rounded-full transition-all ${
              recording
                ? "bg-[#C96B5C] text-white scale-110"
                : whisperLoading
                  ? "bg-[var(--lern-divider)] text-[var(--lern-text-tertiary)]"
                  : "bg-[var(--lern-accent)] text-white active:scale-95"
            }`}
          >
            {/* Pulsierender Ring bei Aufnahme */}
            {recording && (
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-[#C96B5C]"
                animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}

            {recording ? (
              // Stop-Icon
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="6" width="12" height="12" rx="2" />
              </svg>
            ) : whisperLoading ? (
              // Spinner
              <motion.div
                className="w-7 h-7 border-3 border-current border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              // Mikrofon-Icon
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="9" y="2" width="6" height="11" rx="3" />
                <path d="M5 10a7 7 0 0 0 14 0" />
                <line x1="12" y1="19" x2="12" y2="22" />
              </svg>
            )}
          </button>
          <p className="text-xs text-[var(--lern-text-tertiary)]">
            {recording
              ? "Aufnahme läuft — tippe zum Stoppen"
              : whisperLoading
                ? "Wird verarbeitet..."
                : "Tippe zum Sprechen"}
          </p>
        </div>
      )}

      {/* Ergebnis */}
      <AnimatePresence>
        {bewertung && transcript && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Transkript */}
            <div className="p-4 rounded-2xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)]">
              <p className="text-xs text-[var(--lern-text-tertiary)] mb-1">Du hast gesagt:</p>
              <p className="text-base font-medium text-[var(--lern-text-primary)]">
                &ldquo;{transcript}&rdquo;
              </p>
            </div>

            {/* Nachsprechen: Similarity-Ergebnis */}
            {isNachsprechen && similarity !== null && (
              <div
                className="p-4 rounded-2xl border"
                style={{
                  backgroundColor: `${BEWERTUNG_CONFIG[bewertung].farbe}10`,
                  borderColor: `${BEWERTUNG_CONFIG[bewertung].farbe}30`,
                }}
              >
                <p className="text-sm font-semibold" style={{ color: BEWERTUNG_CONFIG[bewertung].farbe }}>
                  {BEWERTUNG_CONFIG[bewertung].emoji} {BEWERTUNG_CONFIG[bewertung].label}
                </p>
                {bewertung !== "perfekt" && speech.zielwort && (
                  <p className="text-xs text-[var(--lern-text-secondary)] mt-1">
                    Zielwort: <strong>{speech.zielwort}</strong>
                  </p>
                )}
              </div>
            )}

            {/* Erklären: KI-Feedback */}
            {!isNachsprechen && (
              <div className="p-4 rounded-2xl bg-[#9B7EA6]/5 border border-[#9B7EA6]/20">
                {kiFeedbackLoading ? (
                  <p className="text-sm text-[var(--lern-text-tertiary)]">KI bewertet deine Antwort...</p>
                ) : kiFeedback ? (
                  <div>
                    <p className="text-xs font-medium text-[#9B7EA6] mb-1">Feedback:</p>
                    <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed">{kiFeedback}</p>
                  </div>
                ) : (
                  <p className="text-sm text-[var(--lern-text-secondary)]">
                    Gut gemacht! Du hast die Aufgabe bearbeitet.
                  </p>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              {bewertung === "nochmal" || (isNachsprechen && bewertung === "gut" && versuch < 3) ? (
                <>
                  <button
                    onClick={handleNochmal}
                    className="flex-1 py-3 rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] text-sm font-medium text-[var(--lern-text-primary)]"
                  >
                    Nochmal versuchen
                  </button>
                  <button
                    onClick={handleWeiter}
                    className="flex-1 py-3 rounded-xl bg-[var(--lern-accent)] text-white text-sm font-medium"
                  >
                    Weiter
                  </button>
                </>
              ) : (
                <button
                  onClick={handleWeiter}
                  className="w-full py-3 rounded-xl bg-[var(--lern-accent)] text-white text-sm font-medium"
                >
                  Weiter
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
