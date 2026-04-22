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
import type { SequencingItem, GlossarEntry } from "../../../content/_types";
import { renderBold } from "./fachbegriff-tooltip";
import { GripVertical } from "lucide-react";

interface StepSequencingProps {
  title: string;
  body?: string;
  glossar?: GlossarEntry[];
  instruction: string;
  items: SequencingItem[];
  onNext: (correct: boolean) => void;
}

// ─── Einzelnes sortierbares Item ─────────────────────────────────────────────
function SortableItem({
  item,
  pos,
  submitted,
  isCorrect,
}: {
  item: SequencingItem;
  pos: number;
  submitted: boolean;
  isCorrect: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: item.id, disabled: submitted });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
    opacity: isDragging ? 0.85 : 1,
  };

  const borderColor = submitted
    ? isCorrect
      ? "border-[#6B8F71]"
      : "border-[#C96B5C]"
    : isDragging
      ? "border-[#C4877F]"
      : "border-[var(--lern-border)]";

  const bgColor = submitted
    ? isCorrect
      ? "bg-[#6B8F71]/5"
      : "bg-[#C96B5C]/5"
    : isDragging
      ? "bg-[#C4877F]/5"
      : "bg-[var(--lern-bg-primary)]";

  const numBg = submitted
    ? isCorrect
      ? "bg-[#6B8F71] text-white"
      : "bg-[#C96B5C] text-white"
    : "bg-[var(--lern-card-bg,#f5f5f7)] text-[var(--lern-text-secondary)]";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center gap-3 rounded-xl border-[1.5px] ${borderColor} ${bgColor} p-3 transition-colors select-none`}
    >
      {/* Positionsnummer */}
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${numBg}`}
      >
        {submitted
          ? isCorrect
            ? "✓"
            : pos + 1
          : pos + 1}
      </span>

      {/* Bild (optional) */}
      {item.imageUrl && (
        <div className="h-10 w-10 shrink-0 rounded-lg overflow-hidden bg-[var(--lern-bg)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.imageUrl} alt={item.label} className="h-full w-full object-cover" />
        </div>
      )}

      {/* Label */}
      <p className="flex-1 text-sm font-medium text-[var(--lern-text-primary)] leading-snug">
        {renderBold(item.label)}
      </p>

      {/* Drag-Handle */}
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

// ─── Hauptkomponente ──────────────────────────────────────────────────────────
export function StepSequencing({
  title,
  body,
  instruction,
  items,
  onNext,
}: StepSequencingProps) {
  const [order, setOrder] = useState<string[]>(() => {
    const ids = items.map((i) => i.id);
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

  const correctIds = items.map((i) => i.id);
  const isFullyCorrect = order.every((id, idx) => id === correctIds[idx]);
  const correctCount = order.filter((id, idx) => id === correctIds[idx]).length;

  return (
    <div className="flex flex-col h-full" style={{ color: "var(--lern-text-primary)" }}>
      {/* Scrollbarer Content */}
      <div className="flex-1 min-h-0 overflow-y-auto space-y-4 pb-2">
        <h2 className="text-base font-bold">{title}</h2>

        {body && (
          <p className="text-sm text-[var(--lern-text-primary)]/70 leading-relaxed whitespace-pre-line">
            {body}
          </p>
        )}

        <p className="text-sm font-medium">{instruction}</p>

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
                const item = items.find((i) => i.id === id)!;
                const isCorrect = id === correctIds[pos];
                return (
                  <SortableItem
                    key={id}
                    item={item}
                    pos={pos}
                    submitted={submitted}
                    isCorrect={isCorrect}
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
                  ? "bg-[#6B8F71]/10 border border-[#6B8F71]/30"
                  : "bg-[#C96B5C]/10 border border-[#C96B5C]/30"
              }`}
            >
              <p className="font-semibold text-sm">
                {isFullyCorrect
                  ? "Perfekte Reihenfolge! ✓"
                  : `${correctCount} von ${items.length} richtig positioniert`}
              </p>
              {!isFullyCorrect && (
                <div className="mt-2">
                  <p className="text-xs text-[var(--lern-text-secondary)] mb-1">Richtige Reihenfolge:</p>
                  <ol className="space-y-0.5">
                    {items.map((item, i) => (
                      <li key={item.id} className="text-xs text-[var(--lern-text-primary)]/70">
                        {i + 1}. {item.label}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fixer Button unten */}
      <div className="shrink-0 pt-3">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
            style={{ backgroundColor: "#C4877F" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B07A72")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C4877F")}
          >
            Prüfen
          </button>
        ) : (
          <button
            onClick={() => onNext(isFullyCorrect)}
            className="w-full rounded-2xl px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
            style={{ backgroundColor: isFullyCorrect ? "#6B8F71" : "#C96B5C" }}
          >
            Weiter
          </button>
        )}
      </div>
    </div>
  );
}
