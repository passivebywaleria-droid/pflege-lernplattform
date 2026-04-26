"use client";

import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion, AnimatePresence } from "framer-motion";
import type { GlossarEntry } from "../../../content/_types";
import { FachbegriffText, renderBold } from "./fachbegriff-tooltip";
import { GripVertical } from "lucide-react";

interface StepSortingProps {
  title: string;
  body?: string;
  fragetext: string;
  items: string[];
  glossar?: GlossarEntry[];
  onNext: (correct: boolean) => void;
}

function SortableItem({
  id,
  pos,
  label,
  submitted,
  isCorrect,
  glossar,
}: {
  id: string;
  pos: number;
  label: string;
  submitted: boolean;
  isCorrect: boolean;
  glossar: GlossarEntry[];
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id, disabled: submitted });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
    opacity: isDragging ? 0.85 : 1,
  };

  const borderColor = submitted
    ? isCorrect ? "border-[#3E5A6A]" : "border-[#C96B5C]"
    : isDragging ? "border-[#218C71]" : "border-[var(--lern-border)]";

  const bgColor = submitted
    ? isCorrect ? "bg-[#3E5A6A]/5" : "bg-[#C96B5C]/5"
    : isDragging ? "bg-[#218C71]/5" : "bg-[var(--lern-bg-primary)]";

  const numBg = submitted
    ? isCorrect ? "bg-[#3E5A6A] text-white" : "bg-[#C96B5C] text-white"
    : "bg-[var(--lern-card-bg,#f5f5f7)] text-[var(--lern-text-secondary)]";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 rounded-xl border-[1.5px] ${borderColor} ${bgColor} p-3 transition-colors select-none`}
    >
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${numBg}`}>
        {submitted ? (isCorrect ? "✓" : pos + 1) : pos + 1}
      </span>

      <p className="flex-1 text-sm font-medium text-[var(--lern-text-primary)] leading-snug">
        <FachbegriffText glossar={glossar}>{renderBold(label) as unknown as string}</FachbegriffText>
      </p>

      {!submitted && (
        <button
          {...attributes}
          {...listeners}
          className="shrink-0 touch-none cursor-grab active:cursor-grabbing rounded-lg p-1.5 text-[var(--lern-text-tertiary,#8e8e93)] hover:text-[var(--lern-text-secondary)] hover:bg-[var(--lern-card-bg)]"
          aria-label="Ziehen um Position zu ändern"
        >
          <GripVertical size={18} />
        </button>
      )}
    </div>
  );
}

export function StepSorting({
  title,
  body,
  fragetext,
  items,
  glossar,
  onNext,
}: StepSortingProps) {
  // IDs = "item-0", "item-1", ... (shuffle on init)
  const [order, setOrder] = useState<string[]>(() => {
    const ids = items.map((_, i) => `item-${i}`);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    return ids;
  });
  const [submitted, setSubmitted] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 100, tolerance: 5 } }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setOrder((prev) => {
        const oldIndex = prev.indexOf(String(active.id));
        const newIndex = prev.indexOf(String(over.id));
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }

  const isFullyCorrect = order.every((id, idx) => id === `item-${idx}`);
  const correctCount = order.filter((id, idx) => id === `item-${idx}`).length;

  return (
    <div className="flex flex-col h-full" style={{ color: "var(--lern-text-primary)" }}>
      <div className="flex-1 min-h-0 overflow-y-auto space-y-4 pb-2">
        <h2 className="text-base font-bold">{title}</h2>

        {body && (
          <p className="text-sm text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
            <FachbegriffText glossar={glossar ?? []}>{body}</FachbegriffText>
          </p>
        )}

        <p className="text-sm font-medium">
          <FachbegriffText glossar={glossar ?? []}>{fragetext}</FachbegriffText>
        </p>

        {!submitted && (
          <p className="text-xs text-[var(--lern-text-secondary)] flex items-center gap-1">
            <GripVertical size={12} className="shrink-0" />
            Halte und ziehe zum Sortieren
          </p>
        )}

        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={order} strategy={verticalListSortingStrategy}>
            <div className="space-y-2">
              {order.map((id, pos) => {
                const itemIdx = parseInt(id.replace("item-", ""));
                return (
                  <SortableItem
                    key={id}
                    id={id}
                    pos={pos}
                    label={items[itemIdx]}
                    submitted={submitted}
                    isCorrect={id === `item-${pos}`}
                    glossar={glossar ?? []}
                  />
                );
              })}
            </div>
          </SortableContext>
        </DndContext>

        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-2xl p-4 ${
                isFullyCorrect
                  ? "bg-[#3E5A6A]/10 border border-[#3E5A6A]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
              }`}
            >
              <p className="font-semibold text-sm">
                {isFullyCorrect
                  ? "Perfekte Reihenfolge! ✓"
                  : `${correctCount} von ${items.length} an der richtigen Position`}
              </p>
              {!isFullyCorrect && (
                <div className="mt-2">
                  <p className="text-xs text-[var(--lern-text-secondary)] mb-1">Richtige Reihenfolge:</p>
                  <ol className="space-y-0.5">
                    {items.map((item, i) => (
                      <li key={i} className="text-xs text-[var(--lern-text-primary)]/70">
                        {i + 1}. {item}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="shrink-0 pt-3">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
            style={{ backgroundColor: "#218C71" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A7359")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#218C71")}
          >
            Prüfen
          </button>
        ) : (
          <button
            onClick={() => onNext(isFullyCorrect)}
            className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
            style={{ backgroundColor: isFullyCorrect ? "#3E5A6A" : "#C96B5C" }}
          >
            Weiter
          </button>
        )}
      </div>
    </div>
  );
}
