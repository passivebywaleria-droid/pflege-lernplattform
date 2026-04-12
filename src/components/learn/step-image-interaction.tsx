"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type {
  ImageInteractionType,
  BeforeAfterData,
  LayerRevealData,
  ZoomPanData,
  ZoomAnnotation,
  GlossarEntry,
} from "../../../content/_types";
import { FachbegriffText } from "./fachbegriff-tooltip";

// ─── BeforeAfter Slider ───

function BeforeAfterSlider({ data }: { data: BeforeAfterData }) {
  const [position, setPosition] = useState(data.startPosition ?? 50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.max(0, Math.min(100, x)));
    },
    [],
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none touch-none"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleMove(e.clientX);
      }}
      onTouchMove={(e) => {
        handleMove(e.touches[0].clientX);
      }}
      onMouseDown={(e) => handleMove(e.clientX)}
      onTouchStart={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* After (untere Schicht, voll sichtbar) */}
      <img
        src={data.imageAfter}
        alt={data.labelAfter ?? "Nachher"}
        className="absolute inset-0 w-full h-full object-contain bg-white"
        draggable={false}
      />

      {/* Before (obere Schicht, abgeschnitten) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={data.imageBefore}
          alt={data.labelBefore ?? "Vorher"}
          className="w-full h-full object-contain bg-white"
          style={{ width: containerRef.current?.offsetWidth ?? "100%" }}
          draggable={false}
        />
      </div>

      {/* Divider-Linie */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Griff */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L3 10L7 16" stroke="var(--lern-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L17 10L13 16" stroke="var(--lern-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      {data.labelBefore && (
        <span className="absolute top-3 left-3 text-xs font-semibold bg-[var(--lern-bg-primary)]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[var(--lern-text-primary)] shadow-sm">
          {data.labelBefore}
        </span>
      )}
      {data.labelAfter && (
        <span className="absolute top-3 right-3 text-xs font-semibold bg-[var(--lern-bg-primary)]/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[var(--lern-text-primary)] shadow-sm">
          {data.labelAfter}
        </span>
      )}
    </div>
  );
}

// ─── Layer Reveal ───

function LayerRevealViewer({ data }: { data: LayerRevealData }) {
  const [visibleLayers, setVisibleLayers] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    data.layers.forEach((l) => {
      if (l.defaultVisible !== false) initial.add(l.id);
    });
    return initial;
  });

  const toggleLayer = (id: string) => {
    setVisibleLayers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {/* Bild-Stack */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--lern-bg)]">
        {/* Base Image */}
        {data.baseImageUrl && (
          <img
            src={data.baseImageUrl}
            alt="Grundbild"
            className="absolute inset-0 w-full h-full object-contain"
            draggable={false}
          />
        )}

        {/* Layers */}
        {data.layers.map((layer) => (
          <motion.div
            key={layer.id}
            className="absolute inset-0"
            initial={{ opacity: visibleLayers.has(layer.id) ? 1 : 0 }}
            animate={{ opacity: visibleLayers.has(layer.id) ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <img
              src={layer.imageUrl}
              alt={layer.label}
              className="w-full h-full object-contain"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>

      {/* Toggle-Chips */}
      <div className="flex flex-wrap gap-2 justify-center">
        {data.layers.map((layer) => {
          const active = visibleLayers.has(layer.id);
          return (
            <button
              key={layer.id}
              onClick={() => toggleLayer(layer.id)}
              className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all active:scale-95 ${
                active
                  ? "bg-[var(--lern-accent)] text-white shadow-sm"
                  : "bg-[var(--lern-bg)] text-[var(--lern-text-secondary)] border border-[var(--lern-border)]"
              }`}
            >
              {active ? "✓ " : ""}{layer.label}
            </button>
          );
        })}
      </div>

      {data.instruction && (
        <p className="text-xs text-center text-[var(--lern-text-secondary)]">{data.instruction}</p>
      )}
    </div>
  );
}

// ─── Zoom + Pan ───

function ZoomPanViewer({ data }: { data: ZoomPanData }) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [activeAnnotation, setActiveAnnotation] = useState<ZoomAnnotation | null>(null);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const maxZoom = data.maxZoom ?? 4;

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.3 : 0.3;
      setZoom((z) => Math.max(1, Math.min(maxZoom, z + delta)));
    },
    [maxZoom],
  );

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "touch" || e.button === 0) {
      isDragging.current = true;
      lastPos.current = { x: e.clientX, y: e.clientY };
    }
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current || zoom <= 1) return;
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      lastPos.current = { x: e.clientX, y: e.clientY };
      setOffset((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    },
    [zoom],
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleDoubleClick = useCallback(() => {
    if (zoom > 1) {
      setZoom(1);
      setOffset({ x: 0, y: 0 });
    } else {
      setZoom(2.5);
    }
  }, [zoom]);

  const zoomIn = () => setZoom((z) => Math.min(maxZoom, z + 0.5));
  const zoomOut = () => {
    const newZoom = Math.max(1, zoom - 0.5);
    setZoom(newZoom);
    if (newZoom <= 1) setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="space-y-3">
      {/* Bild-Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--lern-bg)] cursor-grab active:cursor-grabbing touch-none"
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onDoubleClick={handleDoubleClick}
      >
        <div
          className="w-full h-full transition-transform duration-100"
          style={{
            transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
            transformOrigin: "center center",
          }}
        >
          <img
            src={data.imageUrl}
            alt={data.imageAlt}
            className="w-full h-full object-contain"
            draggable={false}
          />

          {/* Annotations */}
          {data.annotations?.map((ann) => (
            <button
              key={ann.id}
              onClick={(e) => {
                e.stopPropagation();
                setActiveAnnotation(activeAnnotation?.id === ann.id ? null : ann);
              }}
              className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full border-2 transition-all ${
                activeAnnotation?.id === ann.id
                  ? "bg-[var(--lern-accent)] border-white scale-125 shadow-lg"
                  : "bg-[var(--lern-bg-primary)]/90 border-[var(--lern-accent)] hover:scale-110"
              }`}
              style={{ left: `${ann.x}%`, top: `${ann.y}%` }}
            >
              <span className="text-[8px] font-bold text-[var(--lern-accent)]">
                {activeAnnotation?.id === ann.id ? "✕" : "i"}
              </span>
            </button>
          ))}
        </div>

        {/* Zoom Level Indicator */}
        {zoom > 1 && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold bg-black/60 text-white px-2 py-0.5 rounded-full">
            {zoom.toFixed(1)}×
          </span>
        )}
      </div>

      {/* Zoom Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={zoomOut}
          disabled={zoom <= 1}
          className="w-9 h-9 rounded-full bg-[var(--lern-bg)] flex items-center justify-center text-lg font-bold text-[var(--lern-text-primary)] disabled:opacity-30 active:scale-95 transition-all"
        >
          −
        </button>
        <div className="w-24 h-1.5 rounded-full bg-[var(--lern-divider)] relative">
          <div
            className="h-full rounded-full bg-[var(--lern-accent)] transition-all"
            style={{ width: `${((zoom - 1) / (maxZoom - 1)) * 100}%` }}
          />
        </div>
        <button
          onClick={zoomIn}
          disabled={zoom >= maxZoom}
          className="w-9 h-9 rounded-full bg-[var(--lern-bg)] flex items-center justify-center text-lg font-bold text-[var(--lern-text-primary)] disabled:opacity-30 active:scale-95 transition-all"
        >
          +
        </button>
      </div>

      {/* Annotation Popover */}
      <AnimatePresence>
        {activeAnnotation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] shadow-lg p-4"
          >
            <p className="font-semibold text-sm text-[var(--lern-text-primary)]">{activeAnnotation.label}</p>
            {activeAnnotation.description && (
              <p className="text-sm text-[var(--lern-text-secondary)] mt-1">{activeAnnotation.description}</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-xs text-center text-[var(--lern-text-tertiary)]">
        Doppeltippen zum Zoomen • Ziehen zum Verschieben
      </p>
    </div>
  );
}

// ─── Main Component ───

interface StepImageInteractionProps {
  title: string;
  body?: string;
  instruction: string;
  interactionType: ImageInteractionType;
  beforeAfter?: BeforeAfterData;
  layerReveal?: LayerRevealData;
  zoomPan?: ZoomPanData;
  glossar?: GlossarEntry[];
  sprachLevel?: "c1" | "b1";
  onNext: () => void;
}

export function StepImageInteraction({
  title,
  body,
  instruction,
  interactionType,
  beforeAfter,
  layerReveal,
  zoomPan,
  glossar = [],
  onNext,
}: StepImageInteractionProps) {
  return (
    <div className="space-y-5" style={{ color: "var(--lern-text-primary)" }}>
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[10px] font-semibold text-[#9B7EA6] uppercase tracking-wider bg-[#9B7EA6]/10 px-2 py-0.5 rounded-full">
            {interactionType === "beforeAfter" ? "Vergleich" : interactionType === "layerReveal" ? "Schichten" : "Detail"}
          </span>
        </div>
        <h2 className="text-xl font-bold text-[var(--lern-text-primary)]">
          <FachbegriffText glossar={glossar}>{title}</FachbegriffText>
        </h2>
        {body && (
          <p className="text-sm text-[var(--lern-text-secondary)] mt-1.5 leading-relaxed">
            <FachbegriffText glossar={glossar}>{body}</FachbegriffText>
          </p>
        )}
      </div>

      {/* Instruction */}
      <div className="rounded-xl bg-[var(--lern-accent)]/5 border border-[var(--lern-accent)]/20 px-4 py-3">
        <p className="text-sm font-medium text-[var(--lern-accent)]">{instruction}</p>
      </div>

      {/* Interaction Content */}
      {interactionType === "beforeAfter" && beforeAfter && (
        <BeforeAfterSlider data={beforeAfter} />
      )}
      {interactionType === "layerReveal" && layerReveal && (
        <LayerRevealViewer data={layerReveal} />
      )}
      {interactionType === "zoomPan" && zoomPan && (
        <ZoomPanViewer data={zoomPan} />
      )}

      {/* Weiter */}
      <button
        onClick={onNext}
        className="w-full rounded-2xl bg-[var(--lern-accent)] py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
      >
        Weiter
      </button>
    </div>
  );
}
