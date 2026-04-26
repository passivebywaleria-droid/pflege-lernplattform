"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeedbackText } from "./feedback-text";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";
import { StepActionBar } from "./step-action-bar";
import { PatientAvatar } from "./patient-avatar";
import { RotateCcw } from "lucide-react";

interface DialogOption {
  text: string;
  patientResponse: string;
  score: number;
  feedback: string;
  // B1-Varianten für einfache Sprache
  textB1?: string;
  patientResponseB1?: string;
  feedbackB1?: string;
}

interface DialogPhase {
  context: string;
  speaker?: string;
  vitals?: string;
  options: DialogOption[];
  contextB1?: string;
}

interface StepDialogProps {
  title: string;
  body?: string;
  patientName: string;
  phases: DialogPhase[];
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
  sprachLevel?: "c1" | "b1";
}

type ChatMessage = {
  /**
   * - patient: linke Bubble mit Avatar + Name
   * - pflege: rechte Bubble (Du)
   * - narration: graue italic Zeile mittig (Bühnenanweisung / Body-Language)
   */
  sender: "patient" | "pflege" | "narration";
  text: string;
  speakerName?: string;
};

// Helper: Wählt Text basierend auf Sprachlevel
function t(c1: string, b1: string | undefined, level: "c1" | "b1"): string {
  return level === "b1" && b1 ? b1 : c1;
}

/**
 * Trennt Body-Language von eigentlicher Sprache.
 *
 * Eingabe: 'Frau M. atmet hörbar aus. Ihre Schultern sinken leicht. "Danke. Das ist so ungewohnt..."'
 *
 * Ausgabe: { gestik: 'Frau M. atmet hörbar aus. Ihre Schultern sinken leicht.', speech: 'Danke. Das ist so ungewohnt...' }
 *
 * Funktioniert bei:
 *   - "..."  (typografisch korrekt: „..." oder "..."  oder ""...")
 *   - Wenn nur eines vorhanden ist, wird das andere undefined.
 */
function parseGestikUndSpeech(raw: string): {
  gestik?: string;
  speech?: string;
} {
  // Match alle drei Anführungszeichen-Varianten: "..." oder „..." oder „..."
  const speechMatch = raw.match(
    /["„"]([^"""„]+?)["""]/u
  );
  if (!speechMatch) {
    // Kein Speech-Pattern (keine Anführungszeichen) — der ganze Text ist
    // Bühnenanweisung / Body-Language, nichts wird tatsächlich gesagt.
    return { gestik: raw.trim() };
  }
  const speech = speechMatch[1].trim();
  // Alles was nicht in den Anführungszeichen steht, ist Gestik
  const gestikRaw = (raw.slice(0, speechMatch.index) +
    raw.slice((speechMatch.index ?? 0) + speechMatch[0].length))
    .replace(/\s+/g, " ")
    .trim();
  // Leading dashes/spaces und trailing colons/dashes/spaces entfernen
  const gestik = gestikRaw
    .replace(/^[—\-\s,]+|[—\-\s,:]+$/g, "")
    .trim();
  return {
    gestik: gestik.length > 0 ? gestik : undefined,
    speech,
  };
}

export function StepDialog({
  title,
  body,
  patientName,
  phases,
  glossar,
  onNext,
  sprachLevel = "c1",
}: StepDialogProps) {
  const [phase, setPhase] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [typing, setTyping] = useState(false);
  const [showFeedback, setShowFeedback] = useState<string | null>(null);
  const [waitingForUser, setWaitingForUser] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [finished, setFinished] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [showConsequence, setShowConsequence] = useState<string | null>(null);
  const [firstAttemptCorrect, setFirstAttemptCorrect] = useState<boolean[]>([]);
  const chatRef = useRef<HTMLDivElement>(null);
  const bottomAnchorRef = useRef<HTMLDivElement>(null);
  const current = phases[phase];

  useEffect(() => {
    // 1) Chat-Container intern auto-bottom (sofort, ohne Animation)
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    // 2) Page-Scroll zum Bottom-Anchor — Delay genug für AnimatePresence
    //    damit die Höhe von Konsequenz/Feedback/Choices im DOM steht
    const id = setTimeout(() => {
      bottomAnchorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 250);
    return () => clearTimeout(id);
  }, [messages, typing, showChoices, showFeedback, showConsequence, finished]);

  // Erste Phase einleiten: context als narration, falls Patient-Speech enthalten ist
  // wird der speech als Patient-Bubble extrahiert.
  const showContextMessage = useCallback(() => {
    const ctx = phases[phase];
    if (!ctx) return;
    const contextText = t(ctx.context, ctx.contextB1, sprachLevel);
    const { gestik, speech } = parseGestikUndSpeech(contextText);
    setShowChoices(false);
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => {
        const next = [...m];
        if (gestik) next.push({ sender: "narration", text: gestik });
        // Eingebettetes Speech ist üblicherweise vom Patienten — auch in
        // Phasen mit speaker="Du" (Pflege-Aktion) zitiert der context oft
        // den Patienten direkt.
        if (speech) {
          const speakerName =
            ctx.speaker && ctx.speaker !== "Du"
              ? ctx.speaker
              : patientName;
          next.push({
            sender: "patient",
            text: speech,
            speakerName,
          });
        }
        return next;
      });
      setTimeout(() => setShowChoices(true), 400);
    }, 800);
  }, [phase, phases, patientName, sprachLevel]);

  // Beim Start die erste Context-Nachricht zeigen
  useEffect(() => {
    if (!initialized && phases.length > 0) {
      setInitialized(true);
      showContextMessage();
    }
  }, [initialized, phases.length, showContextMessage]);

  const choose = (opt: DialogOption) => {
    // Patient-Reply: speaker = patientName (NICHT "Du" — auch wenn Phase-context
    // mit "Du" beginnt, ist die patientResponse immer vom Patienten)
    const optText = t(opt.text, opt.textB1, sprachLevel);
    const optResponse = t(opt.patientResponse, opt.patientResponseB1, sprachLevel);
    const optFeedback = t(opt.feedback, opt.feedbackB1, sprachLevel);

    const isGoodChoice = opt.score >= 2;
    setFirstAttemptCorrect((prev) => [...prev, isGoodChoice]);

    setShowChoices(false);
    setMessages((m) => [...m, { sender: "pflege", text: optText }]);
    setTyping(true);
    setTotalScore((s) => s + opt.score);
    setMaxScore((s) => s + 3);

    // Konsequenz-Nachricht bei schlechter Wahl (score 0 oder 1)
    const consequenceText = !isGoodChoice
      ? opt.score === 0
        ? "Diese Reaktion kann das Vertrauen beeinträchtigen. Versuche, empathischer zu kommunizieren."
        : "Das war nicht optimal. Achte auf eine wertschätzende und professionelle Kommunikation."
      : null;

    setTimeout(() => {
      setTyping(false);
      // Body-Language von Patient-Speech trennen
      const { gestik, speech } = parseGestikUndSpeech(optResponse);
      setMessages((m) => {
        const next = [...m];
        if (gestik) next.push({ sender: "narration", text: gestik });
        if (speech) {
          next.push({
            sender: "patient",
            text: speech,
            speakerName: patientName,
          });
        } else if (!gestik) {
          // Fallback: kein Speech-Marker — ganzen Text als Patient-Bubble
          next.push({
            sender: "patient",
            text: optResponse,
            speakerName: patientName,
          });
        }
        return next;
      });

      if (consequenceText) {
        setShowConsequence(consequenceText);
        // Konsequenz kurz anzeigen, dann Feedback
        setTimeout(() => {
          setShowConsequence(null);
          setShowFeedback(optFeedback);
          setWaitingForUser(true);
        }, 2500);
      } else {
        setShowFeedback(optFeedback);
        setWaitingForUser(true);
      }
    }, 1200);
  };

  const nextPhase = () => {
    setShowFeedback(null);
    setWaitingForUser(false);
    if (phase + 1 < phases.length) {
      const nextP = phase + 1;
      setPhase(nextP);
      const ctx = phases[nextP];
      if (ctx) {
        const contextText = t(ctx.context, ctx.contextB1, sprachLevel);
        const { gestik, speech } = parseGestikUndSpeech(contextText);
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setMessages((m) => {
            const next = [...m];
            // Phase-Trenner als Narration
            next.push({
              sender: "narration",
              text: `── Phase ${nextP + 1} ──`,
            });
            if (gestik) next.push({ sender: "narration", text: gestik });
            if (speech) {
              const speakerName =
                ctx.speaker && ctx.speaker !== "Du"
                  ? ctx.speaker
                  : patientName;
              next.push({
                sender: "patient",
                text: speech,
                speakerName,
              });
            }
            return next;
          });
          setTimeout(() => setShowChoices(true), 400);
        }, 800);
      }
    } else {
      setFinished(true);
    }
  };

  /** Replay: Dialog vom Anfang neu starten */
  const handleReplay = () => {
    setPhase(0);
    setMessages([]);
    setTotalScore(0);
    setMaxScore(0);
    setTyping(false);
    setShowFeedback(null);
    setWaitingForUser(false);
    setShowChoices(false);
    setFinished(false);
    setShowConsequence(null);
    setFirstAttemptCorrect([]);
    // showContextMessage durch initialized=false neu triggern
    setInitialized(false);
  };

  const scorePercent =
    maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  return (
    <div
      className="flex flex-col gap-3"
      style={{
        color: "var(--lern-text-primary)",
        minHeight: "calc(100dvh - 220px)",
      }}
    >
      {/* Header — kompakter, kein langer Body */}
      <div className="shrink-0">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
          Dialog
        </p>
        <h2 className="text-[19px] font-semibold leading-tight text-[var(--lern-text-primary)] mt-1">
          {title}
        </h2>
        {body && (
          <details className="mt-2 text-xs">
            <summary className="cursor-pointer text-[var(--lern-accent)] font-medium">
              Mehr Kontext
            </summary>
            <p className="mt-2 text-sm text-[var(--lern-text-secondary)] leading-relaxed">
              <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
            </p>
          </details>
        )}
      </div>

      {/* Vitals monitor */}
      {current && !finished && current.vitals && (
        <div className="shrink-0 bg-[#1d1d1f] rounded-xl px-4 py-2 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#3E5A6A] animate-pulse" />
          <span className="text-xs text-[#3E5A6A] font-mono">
            {current.vitals}
          </span>
        </div>
      )}

      {/* Chat — WhatsApp-Style, füllt verfügbaren Platz, scrollt intern */}
      <div
        ref={chatRef}
        className="flex-1 min-h-[200px] space-y-3 overflow-y-auto rounded-2xl bg-[#efeae2] p-3"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      >
        {messages.map((m, i) => {
          // Narration: italic graue Zeile mittig — Body-Language / Bühnenanweisung
          if (m.sender === "narration") {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center px-4"
              >
                <p className="text-[11px] italic text-[#667781] text-center leading-relaxed">
                  {m.text}
                </p>
              </motion.div>
            );
          }

          // Patient-Bubble (links + Avatar) oder Pflege-Bubble (rechts)
          const isPatient = m.sender === "patient";
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.2 }}
              className={`flex items-end gap-1.5 ${
                isPatient ? "justify-start" : "justify-end"
              }`}
            >
              {isPatient && (
                <PatientAvatar
                  name={m.speakerName ?? patientName}
                  size={28}
                />
              )}
              <div
                className={`max-w-[80%] px-3 py-2 text-sm leading-relaxed shadow-sm ${
                  isPatient
                    ? "bg-[var(--lern-bg-primary)] text-[#111b21] rounded-2xl rounded-bl-md"
                    : "bg-[#d9fdd3] text-[#111b21] rounded-2xl rounded-br-md"
                }`}
              >
                {isPatient && (
                  <span className="text-[11px] font-semibold text-[var(--lern-accent)] block mb-0.5">
                    {m.speakerName ?? patientName}
                  </span>
                )}
                {!isPatient && (
                  <span className="text-[11px] font-semibold text-[#3E5A6A] block mb-0.5">
                    Du
                  </span>
                )}
                {renderBold(m.text)}
              </div>
            </motion.div>
          );
        })}

        {/* Typing indicator */}
        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-[var(--lern-bg-primary)] rounded-2xl rounded-tl-md px-4 py-3 shadow-sm">
              <div className="flex gap-1">
                <span
                  className="w-2 h-2 rounded-full bg-[#667781] animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-[#667781] animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-[#667781] animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Konsequenz / Feedback / Choices — alle shrink-0 unter dem Chat */}
      <div className="shrink-0 space-y-2">
      <AnimatePresence>
        {showConsequence && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl bg-[#D4956A]/10 border border-[#D4956A]/20 p-3"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D4956A] mb-1">Konsequenz</p>
            <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed">{showConsequence}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl bg-[var(--lern-accent)]/10 border border-[var(--lern-accent)]/20 p-3"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--lern-accent)] mb-1">Feedback</p>
            <p className="text-sm text-[var(--lern-text-primary)] leading-relaxed">
              <FeedbackText sprachLevel={sprachLevel}>{showFeedback}</FeedbackText>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Choices — als Antwort-Vorschläge unter dem Chat */}
      <AnimatePresence>
        {showChoices && !finished && !showFeedback && !typing && current && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="space-y-1.5"
          >
            <p className="text-[10px] uppercase tracking-wider text-[var(--lern-text-tertiary)] font-semibold px-1">Wähle deine Antwort</p>
            {current.options.map((opt, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => choose(opt)}
                className="w-full text-left px-3 py-2.5 border border-[var(--lern-border)] rounded-xl text-sm text-[var(--lern-text-primary)] hover:border-[var(--lern-accent)] transition-colors bg-[var(--lern-bg-primary)]"
              >
                {t(opt.text, opt.textB1, sprachLevel)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </div>

      {/* End — Ergebnis */}
      {finished && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4 shrink-0"
        >
          <div className="relative inline-flex items-center justify-center w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke="currentColor"
                className="text-[var(--lern-divider)]"
                strokeWidth="3"
              />
              <motion.circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                stroke={scorePercent >= 70 ? "#3E5A6A" : "#D4956A"}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${scorePercent} 100`}
                initial={{ strokeDasharray: "0 100" }}
                animate={{ strokeDasharray: `${scorePercent} 100` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </svg>
            <span className="absolute text-base font-bold text-[var(--lern-text-primary)]">
              {scorePercent}%
            </span>
          </div>
          <p className="text-sm text-[var(--lern-text-secondary)]">
            {scorePercent >= 80
              ? "Hervorragende Kommunikation!"
              : scorePercent >= 50
                ? "Gute Ansätze, Potential nach oben."
                : "Hier gibt es Übungsbedarf."}
          </p>

          {/* Beim-ersten-Versuch-Statistik */}
          {firstAttemptCorrect.length > 0 && (
            <div className="rounded-2xl bg-[var(--lern-bg)] px-4 py-3">
              <p className="text-xs text-[var(--lern-text-secondary)]">
                Beim ersten Versuch richtig: {firstAttemptCorrect.filter(Boolean).length}/{firstAttemptCorrect.length} Phasen
              </p>
            </div>
          )}

        </motion.div>
      )}

      {/* Anchor-Div: Auto-Scroll-Ziel — h-20 reserviert Platz über StepActionBar
          (fixed, ~70px hoch), damit Content beim ScrollIntoView nicht von der
          Action-Bar überdeckt wird */}
      <div ref={bottomAnchorRef} aria-hidden className="h-20" />

      {/* Action-Bar fix unten — Weiter zur nächsten Phase ODER zum nächsten Step */}
      {!finished && waitingForUser && showFeedback && (
        <StepActionBar>
          <button
            onClick={nextPhase}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#1A7359]"
          >
            Weiter
          </button>
        </StepActionBar>
      )}
      {finished && (
        <StepActionBar>
          <button
            onClick={handleReplay}
            aria-label="Diesen Dialog noch mal"
            className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-4 py-3.5 text-sm font-semibold text-[var(--lern-text-primary)] transition-all active:scale-[0.98] hover:border-[var(--lern-accent)]"
          >
            <RotateCcw className="h-4 w-4" />
            Noch mal
          </button>
          <button
            onClick={() => onNext(scorePercent >= 70)}
            className="flex-1 rounded-xl bg-[var(--lern-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#1A7359]"
          >
            Weiter
          </button>
        </StepActionBar>
      )}
    </div>
  );
}
