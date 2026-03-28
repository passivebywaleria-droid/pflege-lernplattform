"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { HotspotZone } from "../../../content/ce-05/_types";

interface StepHotspotProps {
  title: string;
  body?: string;
  imageUrl: string;
  imageAlt: string;
  instruction: string;
  zones: HotspotZone[];
  onNext: (correct: boolean) => void;
}

export function StepHotspot({
  title,
  body,
  imageUrl,
  imageAlt,
  instruction,
  zones,
  onNext,
}: StepHotspotProps) {
  const [found, setFound] = useState<Set<string>>(new Set());
  const [ripple, setRipple] = useState<{ x: number; y: number; hit: boolean } | null>(null);
  const [completed, setCompleted] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (completed) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const xPct = ((e.clientX - rect.left) / rect.width) * 100;
      const yPct = ((e.clientY - rect.top) / rect.height) * 100;

      // Prüfe ob ein Hotspot getroffen wurde
      let hitZone: HotspotZone | null = null;
      for (const zone of zones) {
        const dist = Math.sqrt(
          Math.pow(xPct - zone.x, 2) + Math.pow(yPct - zone.y, 2)
        );
        if (dist <= zone.radius && !found.has(zone.id)) {
          hitZone = zone;
          break;
        }
      }

      // Ripple-Animation
      setRipple({ x: xPct, y: yPct, hit: !!hitZone });
      setTimeout(() => setRipple(null), 600);

      if (hitZone) {
        const newFound = new Set(found);
        newFound.add(hitZone.id);
        setFound(newFound);

        if (newFound.size === zones.length) {
          setTimeout(() => setCompleted(true), 500);
        }
      }
    },
    [zones, found, completed]
  );

  const allFound = found.size === zones.length;

  return (
    <div className="space-y-6 pb-20" style={{ color: "#1d1d1f" }}>
      <h2 className="text-2xl font-bold text-[#1d1d1f]">
        {title}
      </h2>

      {body && (
        <p className="text-[#1d1d1f]/70 leading-relaxed whitespace-pre-line">
          {body}
        </p>
      )}

      <p className="text-lg font-medium text-[#1d1d1f]">
        {instruction}
      </p>

      {/* Progress Dots */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#6e6e73]">
          {found.size} von {zones.length} gefunden
        </span>
        <div className="flex gap-1">
          {zones.map((z) => (
            <div
              key={z.id}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                found.has(z.id) ? "bg-[#30D158]" : "bg-[#d2d2d7]"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bild mit Hotspots */}
      <div
        className="relative rounded-2xl overflow-hidden border-2 border-[#d2d2d7] cursor-crosshair select-none"
        onClick={handleClick}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-auto"
          draggable={false}
        />

        {/* Gefundene Zonen anzeigen */}
        {zones.map(
          (zone) =>
            found.has(zone.id) && (
              <motion.div
                key={zone.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute flex items-center justify-center"
                style={{
                  left: `${zone.x}%`,
                  top: `${zone.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="h-8 w-8 rounded-full bg-[#30D158]/30 border-2 border-[#30D158] flex items-center justify-center">
                  <span className="text-xs font-bold text-[#30D158]">✓</span>
                </div>
                <span className="absolute -bottom-5 whitespace-nowrap text-[10px] font-bold text-[#30D158] bg-white/80 px-1 rounded">
                  {zone.label}
                </span>
              </motion.div>
            )
        )}

        {/* Ripple-Animation */}
        <AnimatePresence>
          {ripple && (
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`absolute h-6 w-6 rounded-full ${
                ripple.hit ? "bg-[#30D158]" : "bg-[#FF3B30]"
              }`}
              style={{
                left: `${ripple.x}%`,
                top: `${ripple.y}%`,
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Labels der gefundenen Zonen */}
      {found.size > 0 && (
        <div className="flex flex-wrap gap-2">
          {zones
            .filter((z) => found.has(z.id))
            .map((z) => (
              <span
                key={z.id}
                className="rounded-full bg-[#30D158]/10 px-3 py-1 text-sm font-medium text-[#30D158]"
              >
                {z.label}
              </span>
            ))}
        </div>
      )}

      {/* Ergebnis */}
      {completed && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="rounded-2xl bg-[#30D158]/10 border border-[#30D158]/30 p-4">
            <p className="font-semibold text-[#30D158]">
              Alle {zones.length} Punkte gefunden!
            </p>
          </div>
          <button
            onClick={() => onNext(allFound)}
            className="w-full rounded-2xl bg-[#0071e3] px-6 py-4 text-base font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#0077ED]"
          >
            Weiter
          </button>
        </motion.div>
      )}
    </div>
  );
}
