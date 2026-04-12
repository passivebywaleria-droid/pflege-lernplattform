"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---

interface LernKontext {
  leId?: string;
  stepId?: string;
  thema?: string;
  ceId?: string;
}

interface LehrerNachricht {
  id: string;
  von: "schueler" | "lehrer";
  text: string;
  zeit: string;
  kontext?: LernKontext;
  gelesen?: boolean;
}

interface LehrerChatProps {
  lernKontext?: LernKontext;
}

// --- Storage ---

const STORAGE_KEY = "pflege-lehrer-chat";

function ladeNachrichten(): LehrerNachricht[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as LehrerNachricht[];
  } catch {
    // Parsing fehlgeschlagen
  }
  return [];
}

function speichereNachrichten(nachrichten: LehrerNachricht[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nachrichten));
  } catch {
    // localStorage voll
  }
}

// --- Mock-Lehrer-Antworten ---

const MOCK_ANTWORTEN = [
  "Danke für deine Frage! Ich schaue mir an, wo du gerade stehst und melde mich.",
  "Gute Frage! Ich habe deinen Lernkontext gesehen und antworte dir bald ausführlich.",
  "Das ist ein wichtiger Punkt. Ich bereite eine Erklärung vor und melde mich bei dir.",
  "Danke für deine Nachricht! Ich sehe, dass du gerade an diesem Thema arbeitest. Meine Antwort kommt in Kürze.",
];

function zufaelligeAntwort(): string {
  return MOCK_ANTWORTEN[Math.floor(Math.random() * MOCK_ANTWORTEN.length)];
}

// --- Komponente ---

export function LehrerChat({ lernKontext }: LehrerChatProps) {
  const [open, setOpen] = useState(false);
  const [nachrichten, setNachrichten] = useState<LehrerNachricht[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Nachrichten laden
  useEffect(() => {
    setNachrichten(ladeNachrichten());
    setLoaded(true);
  }, []);

  // Scrollen bei neuen Nachrichten
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [nachrichten]);

  // Nachricht senden
  const sendMessage = useCallback(() => {
    if (!input.trim() || sending) return;

    const neueNachricht: LehrerNachricht = {
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      von: "schueler",
      text: input.trim(),
      zeit: new Date().toISOString(),
      kontext: lernKontext,
    };

    const aktualisiert = [...nachrichten, neueNachricht];
    setNachrichten(aktualisiert);
    speichereNachrichten(aktualisiert);
    setInput("");
    setSending(true);

    // Mock-Lehrer-Antwort nach 2 Sekunden
    setTimeout(() => {
      const lehrerAntwort: LehrerNachricht = {
        id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        von: "lehrer",
        text: zufaelligeAntwort(),
        zeit: new Date().toISOString(),
        gelesen: false,
      };

      setNachrichten((prev) => {
        const next = [...prev, lehrerAntwort];
        speichereNachrichten(next);
        return next;
      });
      setSending(false);
    }, 2000);
  }, [input, sending, nachrichten, lernKontext]);

  // Kontext-Text erzeugen
  const kontextText = lernKontext
    ? [
        lernKontext.ceId && `CE ${lernKontext.ceId.replace("ce-", "")}`,
        lernKontext.leId && `LE ${lernKontext.leId.replace("le-", "")}`,
        lernKontext.thema,
      ]
        .filter(Boolean)
        .join(" — ")
    : null;

  // Ungelesene Nachrichten zählen
  const ungelesen = nachrichten.filter((n) => n.von === "lehrer" && !n.gelesen).length;

  if (!loaded) return null;

  return (
    <>
      {/* Floating Button — Lehrer fragen */}
      <button
        onClick={() => {
          setOpen(true);
          // Alle Lehrer-Nachrichten als gelesen markieren
          setNachrichten((prev) => {
            const next = prev.map((n) =>
              n.von === "lehrer" ? { ...n, gelesen: true } : n
            );
            speichereNachrichten(next);
            return next;
          });
        }}
        className="fixed bottom-6 left-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#6B8F71] text-white shadow-lg transition-all active:scale-95 hover:bg-[#5A7D5F]"
        title="Lehrer fragen"
      >
        {/* Person-Icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
        {/* Ungelesene Badge */}
        {ungelesen > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C96B5C] text-[10px] font-bold text-white">
            {ungelesen}
          </span>
        )}
      </button>

      {/* Chat Sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-0 left-0 right-0 flex h-[75vh] flex-col rounded-t-3xl bg-[var(--lern-bg-primary)] shadow-xl"
            >
              {/* Header */}
              <div className="shrink-0 border-b border-[var(--lern-border)]/50 p-4">
                <div className="mx-auto mb-2 h-1 w-12 rounded-full bg-[var(--lern-border)]" />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[var(--lern-text-primary)]">
                      Lehrer fragen
                    </h3>
                    {kontextText && (
                      <p className="text-xs text-[var(--lern-text-secondary)] mt-0.5">
                        Kontext: {kontextText}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--lern-bg)] text-[var(--lern-text-secondary)]"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Kontext-Banner */}
              {kontextText && (
                <div className="shrink-0 mx-4 mt-3 rounded-xl bg-[#6B8F71]/5 border border-[#6B8F71]/20 px-3 py-2">
                  <p className="text-xs text-[#4A7350]">
                    Der Lehrer sieht deinen Lernkontext: <strong>{kontextText}</strong>
                  </p>
                </div>
              )}

              {/* Nachrichten */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-3"
              >
                {nachrichten.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-sm text-[var(--lern-text-secondary)]">
                      Du kannst deinem Lehrer direkt eine Frage stellen.
                      Der Lehrer sieht, was du gerade bearbeitest.
                    </p>
                  </div>
                )}

                {nachrichten.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.von === "schueler" ? "justify-end" : "justify-start"}`}
                  >
                    <div className="max-w-[85%]">
                      {/* Kontext-Tag bei Schüler-Nachrichten */}
                      {msg.von === "schueler" && msg.kontext?.thema && (
                        <p className="text-[10px] text-[var(--lern-text-tertiary)] text-right mb-1 mr-1">
                          {msg.kontext.thema}
                        </p>
                      )}
                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          msg.von === "schueler"
                            ? "bg-[#6B8F71] text-white"
                            : "bg-[var(--lern-bg)] text-[var(--lern-text-primary)]"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                      <p className="text-[10px] text-[var(--lern-text-tertiary)] mt-1 px-1">
                        {msg.von === "lehrer" ? "Lehrer" : "Du"} · {formatZeit(msg.zeit)}
                      </p>
                    </div>
                  </div>
                ))}

                {sending && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl bg-[var(--lern-bg)] px-4 py-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-[var(--lern-text-tertiary)] animate-bounce" />
                        <span className="h-2 w-2 rounded-full bg-[var(--lern-text-tertiary)] animate-bounce [animation-delay:0.15s]" />
                        <span className="h-2 w-2 rounded-full bg-[var(--lern-text-tertiary)] animate-bounce [animation-delay:0.3s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="shrink-0 border-t border-[var(--lern-border)]/50 p-4 pb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Deine Frage an den Lehrer..."
                    disabled={sending}
                    className="flex-1 rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg)] px-4 py-3 text-sm text-[var(--lern-text-primary)] placeholder:text-[var(--lern-text-tertiary)] focus:border-[#6B8F71] focus:outline-none disabled:opacity-50"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || sending}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6B8F71] text-white transition-all active:scale-95 disabled:opacity-40"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- Öffentliche Hilfsfunktionen ---

/** Alle Lehrer-Chat-Nachrichten laden (für Lehrer-Dashboard) */
export function getAlleLehrerNachrichten(): LehrerNachricht[] {
  return ladeNachrichten();
}

/** Mock-Nachrichten für Lehrer-Dashboard */
export function getMockLehrerNachrichten(): LehrerNachricht[] {
  return [
    {
      id: "mock-1",
      von: "schueler",
      text: "Ich verstehe den Unterschied zwischen Dekubitus Grad 2 und Grad 3 nicht. Können Sie das nochmal erklären?",
      zeit: new Date(Date.now() - 3600000).toISOString(),
      kontext: { leId: "le-01", ceId: "ce-01", thema: "Dekubitusprophylaxe", stepId: "le01-s2-tb3-05" },
    },
    {
      id: "mock-2",
      von: "schueler",
      text: "Bei der Pflegeplanung bin ich unsicher, wie ich die Maßnahmen formulieren soll.",
      zeit: new Date(Date.now() - 7200000).toISOString(),
      kontext: { leId: "le-01", ceId: "ce-01", thema: "Pflegeprozess", stepId: "le01-s4-tb7-02" },
    },
    {
      id: "mock-3",
      von: "schueler",
      text: "Kann ich den Stoff von heute nochmal in einfacherer Sprache bekommen?",
      zeit: new Date(Date.now() - 10800000).toISOString(),
      kontext: { leId: "le-01", ceId: "ce-01", thema: "Ausbildungsstart" },
    },
  ];
}

// --- Hilfsfunktion: Zeit formatieren ---

function formatZeit(isoString: string): string {
  try {
    const date = new Date(isoString);
    const jetzt = new Date();
    const diffMs = jetzt.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / 60000);

    if (diffMin < 1) return "gerade eben";
    if (diffMin < 60) return `vor ${diffMin} Min`;

    const diffStunden = Math.floor(diffMin / 60);
    if (diffStunden < 24) return `vor ${diffStunden} Std`;

    return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
  } catch {
    return "";
  }
}
