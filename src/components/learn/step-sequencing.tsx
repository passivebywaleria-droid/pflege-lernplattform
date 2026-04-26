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
import { StepShell } from "./step-shell";
import { StepActionBar } from "./step-action-bar";

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
      ? "border-[#3E5A6A]"
      : "border-[#C96B5C]"
    : isDragging
      ? "border-[#218C71]"
      : "border-[var(--lern-border)]";

  const bgColor = submitted
    ? isCorrect
      ? "bg-[#3E5A6A]/5"
      : "bg-[#C96B5C]/5"
    : isDragging
      ? "bg-[#218C71]/5"
      : "bg-[var(--lern-bg-primary)]";

  const numBg = submitted
    ? isCorrect
      ? "bg-[#3E5A6A] text-white"
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
  glossar,
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

  const safeTitle = title ?? "";
  const safeInstr = instruction ?? "";
  const titleEqualsInstr =
    safeTitle.trim().toLowerCase() === safeInstr.trim().toLowerCase();
  const question = titleEqualsInstr
    ? safeInstr
    : safeTitle || safeInstr;

  return (
    <div style={{ color: "var(--lern-text-primary)" }}>
      <StepShell
        kindLabel="Sequenz"
        question={question}
        body={body}
        glossar={glossar}
        tip={!submitted ? "Halte und ziehe zum Sortieren" : undefined}
      >
        {!titleEqualsInstr && title && (
          <p className="-mt-2 mb-3 text-sm font-medium text-[var(--lern-text-primary)]">
            {instruction}
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
              className={`mt-3 rounded-xl p-3 ${
                isFullyCorrect
                  ? "bg-[var(--lern-success)]/10 border border-[var(--lern-success)]/30"
                  : "bg-[var(--lern-error)]/10 border border-[var(--lern-error)]/30"
              }`}
            >
              <p className="font-semibold text-sm">
                {isFullyCorrect
                  ? "Perfekte Reihenfolge!"
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
      </StepShell>

      {!submitted ? (
        <StepActionBar>
          <button
            onClick={() => setSubmitted(true)}
            className="flex-1 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98]"
            style={{ backgroundColor: "#218C71" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A7359")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#218C71")}
          >
            Prüfen
          </button>
        </StepActionBar>
      ) : (
        <StepActionBar>
          <button
            onClick={() => onNext(isFullyCorrect)}
            className="flex-1 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all active:scale-[0.98]"
            style={{ backgroundColor: "#218C71" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1A7359")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#218C71")}
          >
            Weiter
          </button>
        </StepActionBar>
      )}
    </div>
  );
}
