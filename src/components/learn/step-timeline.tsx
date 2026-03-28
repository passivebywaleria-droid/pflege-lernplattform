"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  descriptionB1?: string;
  icon?: string;
  highlight?: boolean;
}

interface StepTimelineProps {
  title: string;
  body?: string;
  instruction: string;
  events: TimelineEvent[];
  sprachLevel?: "c1" | "b1";
  onNext: (correct: boolean) => void;
}

export function StepTimeline({
  title,
  body,
  instruction,
  events,
  sprachLevel = "c1",
  onNext,
}: StepTimelineProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const allExpanded = expandedIds.size === events.length;

  const toggleEvent = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-5 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold">{title}</h2>

      {body && (
        <p className="leading-relaxed whitespace-pre-line">{body}</p>
      )}

      <p className="text-sm" style={{ color: "#6e6e73" }}>{instruction}</p>

      {/* Counter */}
      <span className="text-xs" style={{ color: "#6e6e73" }}>
        {expandedIds.size} von {events.length} erkundet
      </span>

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical Line */}
        <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-[#e8e8ed]" />

        <div className="space-y-1">
          {events.map((event, i) => {
            const isExpanded = expandedIds.has(event.id);
            const description =
              sprachLevel === "b1" && event.descriptionB1
                ? event.descriptionB1
                : event.description;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className={`absolute -left-8 top-4 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center z-10 ${
                    event.highlight
                      ? "border-[#FF9500] bg-[#FF9500]/10"
                      : isExpanded
                        ? "border-[#0071e3] bg-[#0071e3]/10"
                        : "border-[#d2d2d7] bg-white"
                  }`}
                >
                  {event.highlight && (
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-2 h-2 rounded-full bg-[#FF9500]"
                    />
                  )}
                  {!event.highlight && isExpanded && (
                    <div className="w-2 h-2 rounded-full bg-[#0071e3]" />
                  )}
                </div>

                {/* Card */}
                <div
                  onClick={() => toggleEvent(event.id)}
                  className={`rounded-xl border p-3 cursor-pointer transition-all ${
                    isExpanded
                      ? "border-[#0071e3]/30 bg-white shadow-sm"
                      : "border-[#e8e8ed] bg-[#f9f9fb] hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {event.icon && <span className="text-lg">{event.icon}</span>}
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#0071e3]">
                        {event.time}
                      </span>
                      <p className="text-sm font-medium text-[#1d1d1f] truncate">
                        {event.title}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-[#6e6e73] text-xs flex-shrink-0"
                    >
                      &#9660;
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-[#1d1d1f]/80 leading-relaxed mt-3 pt-3 border-t border-[#e8e8ed]">
                          {description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Continue — immer sichtbar, Timeline ist Info-Step */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => onNext(true)}
        className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
      >
        Weiter
      </motion.button>
    </div>
  );
}
