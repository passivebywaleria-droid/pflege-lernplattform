"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface KiChatProps {
  leTitle: string;
  stepTitle: string;
  glossar?: string[];
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MAX_MESSAGES = 5;

export function KiChat({ leTitle, stepTitle, glossar }: KiChatProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const remainingMessages = MAX_MESSAGES - userMessageCount;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading || remainingMessages <= 0) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ki-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
          context: { leTitle, stepTitle, glossar },
        }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Ich bin gerade offline. Deine Frage wurde gespeichert — ich antworte dir sobald du wieder online bist.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#0071e3] text-white shadow-lg transition-all active:scale-95 hover:bg-[#0077ED]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
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
              className="absolute bottom-0 left-0 right-0 flex h-[75vh] flex-col rounded-t-3xl bg-white shadow-xl"
            >
              {/* Header */}
              <div className="shrink-0 border-b border-[#d2d2d7]/50 p-4">
                <div className="mx-auto mb-2 h-1 w-12 rounded-full bg-[#d2d2d7]" />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#1d1d1f]">
                      Frag mich!
                    </h3>
                    <p className="text-xs text-[#6e6e73]">
                      {remainingMessages > 0
                        ? `Noch ${remainingMessages} Fragen in dieser Session`
                        : "Keine Fragen mehr in dieser Session"}
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73]"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-3"
              >
                {messages.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-sm text-[#6e6e73]">
                      Ich kann dir Fragen zu <strong>{leTitle}</strong> beantworten.
                      Was möchtest du wissen?
                    </p>
                  </div>
                )}

                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        msg.role === "user"
                          ? "bg-[#0071e3] text-white"
                          : "bg-[#f5f5f7] text-[#1d1d1f]"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl bg-[#f5f5f7] px-4 py-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-[#86868b] animate-bounce" />
                        <span className="h-2 w-2 rounded-full bg-[#86868b] animate-bounce [animation-delay:0.15s]" />
                        <span className="h-2 w-2 rounded-full bg-[#86868b] animate-bounce [animation-delay:0.3s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="shrink-0 border-t border-[#d2d2d7]/50 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder={
                      remainingMessages > 0
                        ? "Deine Frage..."
                        : "Keine Fragen mehr in dieser Session"
                    }
                    disabled={remainingMessages <= 0 || loading}
                    className="flex-1 rounded-xl border border-[#d2d2d7] bg-[#f5f5f7] px-4 py-3 text-sm text-[#1d1d1f] placeholder:text-[#86868b] focus:border-[#0071e3] focus:outline-none disabled:opacity-50"
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!input.trim() || loading || remainingMessages <= 0}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0071e3] text-white transition-all active:scale-95 disabled:opacity-40"
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
