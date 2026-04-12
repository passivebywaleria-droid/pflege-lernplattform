"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

interface ChatMessage {
  role: "patient" | "schueler";
  text: string;
}

interface StepChatSimProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  patientName: string;
  situation: string;
  situationB1?: string;
  systemPrompt: string;
  maxTurns: number;
  evaluationCriteria: string[];
  onNext: (correct: boolean) => void;
}

export function StepChatSim({
  title,
  body,
  glossar,
  sprachLevel = "c1",
  patientName,
  situation,
  situationB1,
  systemPrompt,
  maxTurns,
  evaluationCriteria,
  onNext,
}: StepChatSimProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);
  const [evaluation, setEvaluation] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const displaySituation = sprachLevel === "b1" && situationB1 ? situationB1 : situation;
  const turnsLeft = maxTurns - messages.filter((m) => m.role === "schueler").length;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || loading || finished) return;
    const userMsg = input.trim();
    setInput("");

    const newMessages: ChatMessage[] = [...messages, { role: "schueler", text: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("/api/ki-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: `Du bist ${patientName}. ${systemPrompt}\n\nSituation: ${situation}\n\nAntworte als Patient. Maximal 2-3 Sätze. Bleib in der Rolle.`,
            },
            ...newMessages.map((m) => ({
              role: m.role === "patient" ? "assistant" : "user",
              content: m.text,
            })),
          ],
        }),
      });

      const data = await response.json();
      const patientResponse = data.response || data.message || "...";
      setMessages((prev) => [...prev, { role: "patient", text: patientResponse }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "patient", text: "(Antwort konnte nicht geladen werden. Bitte versuche es erneut.)" },
      ]);
    }

    setLoading(false);
  }, [input, loading, finished, messages, patientName, systemPrompt, situation]);

  const finishChat = useCallback(async () => {
    setFinished(true);
    setLoading(true);

    try {
      const response = await fetch("/api/ki-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fragetext: `Bewerte dieses Gespräch zwischen einem Pflegeschüler und dem Patienten ${patientName}.`,
          antwort: messages.map((m) => `${m.role === "schueler" ? "Schüler" : patientName}: ${m.text}`).join("\n"),
          musterantwort: `Bewertungskriterien: ${evaluationCriteria.join(", ")}`,
          bewertungskriterien: evaluationCriteria,
        }),
      });
      const data = await response.json();
      setEvaluation(data.feedback || data.response || "Bewertung konnte nicht geladen werden.");
    } catch {
      setEvaluation("Bewertung konnte nicht geladen werden. Aber du hast das Gespräch geführt!");
    }

    setLoading(false);
  }, [messages, patientName, evaluationCriteria]);

  return (
    <div className="space-y-5 pb-20" style={{ color: "var(--lern-text-primary)" }}>
      <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">{title}</h2>

      {body && (
        <p className="text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
          <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
        </p>
      )}

      {/* Situation */}
      <div className="rounded-2xl bg-[#D4956A]/10 border border-[#D4956A]/30 p-4">
        <p className="text-xs font-bold text-[#D4956A] mb-1 uppercase tracking-wide">Patientensituation</p>
        <p className="text-sm text-[var(--lern-text-primary)]">
          <strong>{patientName}</strong> — <FachbegriffText glossar={glossar ?? []}>{displaySituation}</FachbegriffText>
        </p>
      </div>

      {/* Chat-Verlauf */}
      <div className="rounded-2xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] p-4 space-y-3 max-h-[360px] overflow-y-auto">
        {messages.length === 0 && (
          <p className="text-sm text-[var(--lern-text-tertiary)] italic text-center py-4">
            Beginne das Gespräch mit {patientName}…
          </p>
        )}
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.role === "schueler" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                msg.role === "schueler"
                  ? "bg-[var(--lern-accent)] text-white rounded-br-md"
                  : "bg-[var(--lern-border)]/50 text-[var(--lern-text-primary)] rounded-bl-md"
              }`}
            >
              {msg.role === "patient" && (
                <p className="text-xs font-semibold mb-0.5 opacity-70">{patientName}</p>
              )}
              <p className="leading-relaxed">{msg.text}</p>
            </div>
          </motion.div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="rounded-2xl bg-[var(--lern-border)]/50 px-4 py-3 rounded-bl-md">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-[var(--lern-text-tertiary)] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-[var(--lern-text-tertiary)] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-[var(--lern-text-tertiary)] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Eingabe */}
      {!finished ? (
        <div className="space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              disabled={loading || turnsLeft <= 0}
              placeholder={turnsLeft > 0 ? "Deine Nachricht…" : "Gespräch beenden"}
              className="flex-1 rounded-2xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)] px-4 py-3 text-sm text-[var(--lern-text-primary)] placeholder:text-[var(--lern-text-tertiary)] focus:outline-2 focus:outline-[var(--lern-accent)] disabled:opacity-60"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading || turnsLeft <= 0}
              className="rounded-2xl bg-[var(--lern-accent)] px-4 py-3 text-white font-medium text-sm transition-all active:scale-95 disabled:opacity-40"
            >
              ↑
            </button>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-[var(--lern-text-tertiary)]">
              {turnsLeft > 0 ? `Noch ${turnsLeft} Nachricht${turnsLeft > 1 ? "en" : ""}` : "Gespräch beenden"}
            </p>
            <button
              onClick={finishChat}
              disabled={messages.length < 2 || loading}
              className="text-xs font-medium text-[var(--lern-accent)] disabled:opacity-40"
            >
              Gespräch auswerten
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {evaluation && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/15 p-4"
            >
              <p className="text-sm font-medium text-[var(--lern-accent)] mb-2">KI-Bewertung</p>
              <p className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed whitespace-pre-line">
                {evaluation}
              </p>
            </motion.div>
          )}

          <button
            onClick={() => onNext(true)}
            className="w-full rounded-2xl bg-[var(--lern-accent)] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
          >
            Weiter
          </button>
        </div>
      )}
    </div>
  );
}
