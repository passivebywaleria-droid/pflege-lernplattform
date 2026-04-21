"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Check, ChevronDown, ChevronRight, BookOpen, Clock, User } from "lucide-react";
import type { Fallverlauf, FallStation } from "../../../content/_types";

interface FallZeitleisteProps {
  fallverlaeufe: Fallverlauf[];
  sprachLevel: "c1" | "b1";
  /** Callback: Wechsel zum Wissen-Tab + Kapitel öffnen */
  onKapitelNavigieren?: (kapitelId: string) => void;
  /** Callback: Station-Steps starten */
  onStationStarten?: (fallId: string, stationId: string) => void;
}

/** Fortschritt eines Falls als Prozent */
function berechneFortschritt(stationen: FallStation[]): number {
  if (stationen.length === 0) return 0;
  const abgeschlossen = stationen.filter((s) => s.freigeschaltet === true && s.steps.length === 0).length;
  // Vereinfacht: freigeschaltete Stationen = abgeschlossen (für Prototyp)
  const freigeschaltet = stationen.filter((s) => s.freigeschaltet).length;
  return Math.round((freigeschaltet / stationen.length) * 100);
}

/** Fall-Auswahl-Karte oben */
function FallKarte({
  fall,
  isActive,
  onClick,
}: {
  fall: Fallverlauf;
  isActive: boolean;
  onClick: () => void;
}) {
  const fortschritt = berechneFortschritt(fall.stationen);
  const alter = fall.patient.alter === 0 ? "6 Monate" : `${fall.patient.alter} Jahre`;

  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 rounded-xl p-2.5 text-left transition-all active:scale-[0.98] ${
        isActive
          ? "bg-[var(--lern-accent)]/10 border-[1.5px] border-[var(--lern-accent)]/40"
          : "bg-[var(--lern-card-bg)] border border-[var(--lern-border)]"
      }`}
      style={{ minWidth: "140px", maxWidth: "180px" }}
    >
      <div className="flex items-center gap-1.5 mb-1">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--lern-accent)]/10">
          <User size={12} className="text-[var(--lern-accent)]" />
        </span>
        <span className="text-xs font-bold text-[var(--lern-text-primary)] truncate">
          {fall.patient.name}
        </span>
      </div>
      <p className="text-[11px] text-[var(--lern-text-secondary)] mb-1.5 line-clamp-1">
        {alter}, {fall.patient.diagnosen[0]}
      </p>
      <div className="h-1 rounded-full bg-[var(--lern-divider)]">
        <div
          className="h-full rounded-full bg-[var(--lern-accent)] transition-all"
          style={{ width: `${fortschritt}%` }}
        />
      </div>
      <p className="text-[10px] text-[var(--lern-text-tertiary)] mt-0.5">
        {fall.stationen.length} Stationen
      </p>
    </button>
  );
}

/** Einzelne Station in der Zeitleiste */
function StationCard({
  station,
  index,
  isLast,
  sprachLevel,
  onKapitelNavigieren,
  onStationStarten,
  fallId,
}: {
  station: FallStation;
  index: number;
  isLast: boolean;
  sprachLevel: "c1" | "b1";
  onKapitelNavigieren?: (kapitelId: string) => void;
  onStationStarten?: (fallId: string, stationId: string) => void;
  fallId: string;
}) {
  const [expanded, setExpanded] = useState(index === 0 && station.freigeschaltet !== false);
  const istGesperrt = station.freigeschaltet === false;
  const istErsteStation = index === 0;
  const istFreigeschaltet = station.freigeschaltet !== false; // undefined = frei (erste Station)

  const titel = sprachLevel === "b1" && station.titelB1 ? station.titelB1 : station.titel;
  const situation = sprachLevel === "b1" && station.situationB1 ? station.situationB1 : station.situationC1;

  return (
    <div className="flex gap-3">
      {/* Timeline-Linie + Dot */}
      <div className="flex flex-col items-center">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
            istGesperrt
              ? "border-[var(--lern-divider)] bg-[var(--lern-card-bg)]"
              : istErsteStation
                ? "border-[var(--lern-accent)] bg-[var(--lern-accent)]"
                : "border-[#6B8F71] bg-[#6B8F71]"
          }`}
        >
          {istGesperrt ? (
            <Lock size={12} className="text-[var(--lern-text-tertiary)]" />
          ) : istErsteStation ? (
            <span className="text-xs font-bold text-white">{index + 1}</span>
          ) : (
            <Check size={14} className="text-white" />
          )}
        </div>
        {!isLast && (
          <div
            className={`w-0.5 flex-1 min-h-[24px] ${
              istGesperrt ? "bg-[var(--lern-divider)]" : "bg-[#6B8F71]/30"
            }`}
          />
        )}
      </div>

      {/* Station-Inhalt */}
      <div className={`flex-1 pb-4 ${istGesperrt ? "opacity-50" : ""}`}>
        <button
          onClick={() => !istGesperrt && setExpanded(!expanded)}
          disabled={istGesperrt}
          aria-expanded={expanded}
          className="w-full text-left"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
              {station.zeitpunkt}
            </span>
            <span className="text-xs text-[var(--lern-text-tertiary)]">
              Bloom {station.bloomRange[0]}-{station.bloomRange[1]}
            </span>
            {!istGesperrt && (
              expanded ? (
                <ChevronDown size={14} className="text-[var(--lern-text-tertiary)] ml-auto" />
              ) : (
                <ChevronRight size={14} className="text-[var(--lern-text-tertiary)] ml-auto" />
              )
            )}
          </div>
          <h3 className={`text-sm font-bold ${istGesperrt ? "text-[var(--lern-text-tertiary)]" : "text-[var(--lern-text-primary)]"}`}>
            {titel}
          </h3>
        </button>

        <AnimatePresence>
          {expanded && istFreigeschaltet && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              {/* Situations-Beschreibung */}
              <div className="mt-2 rounded-lg bg-[var(--lern-bg)] border border-[var(--lern-border)]/60 p-3">
                <p className="text-xs text-[var(--lern-text-secondary)] leading-relaxed whitespace-pre-line line-clamp-3">
                  {situation}
                </p>
              </div>

              {/* Relevante Kapitel */}
              {station.relevanteKapitel && station.relevanteKapitel.length > 0 && onKapitelNavigieren && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {station.relevanteKapitel.map((kId) => (
                    <button
                      key={kId}
                      onClick={(e) => {
                        e.stopPropagation();
                        onKapitelNavigieren(kId);
                      }}
                      className="inline-flex items-center gap-1 rounded-full bg-[var(--lern-accent)]/5 border border-[var(--lern-accent)]/20 px-2.5 py-0.5 text-[11px] font-medium text-[var(--lern-accent)] active:scale-95 transition-transform"
                    >
                      <BookOpen size={10} />
                      Kapitel lesen
                    </button>
                  ))}
                </div>
              )}

              {/* Steps-Info + Starten-Button */}
              {station.steps.length > 0 && (
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[var(--lern-text-tertiary)]">
                    <Clock size={12} />
                    <span>{station.steps.length} Aufgaben</span>
                  </div>
                  {onStationStarten && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onStationStarten(fallId, station.stationId);
                      }}
                      className="rounded-full bg-[var(--lern-accent)] px-3 py-1.5 text-xs font-semibold text-white active:scale-95 transition-transform hover:bg-[#B07A72]"
                    >
                      Starten
                    </button>
                  )}
                </div>
              )}

              {station.steps.length === 0 && (
                <p className="mt-2 text-[11px] text-[var(--lern-text-tertiary)] italic">
                  Aufgaben werden bald hinzugefügt.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Haupt-Komponente: Fall-Auswahl + Zeitleiste */
export function FallZeitleiste({
  fallverlaeufe,
  sprachLevel,
  onKapitelNavigieren,
  onStationStarten,
}: FallZeitleisteProps) {
  const [activeFallId, setActiveFallId] = useState(fallverlaeufe[0]?.fallId ?? "");
  const activeFall = fallverlaeufe.find((f) => f.fallId === activeFallId) ?? fallverlaeufe[0];

  if (!activeFall) return null;

  return (
    <div className="px-4 py-3" style={{ color: "var(--lern-text-primary)" }}>
      {/* Fall-Auswahl (horizontal scrollbar) */}
      <div className="mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--lern-text-tertiary)] mb-2">
          Patientenfälle
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
          {fallverlaeufe.map((fall) => (
            <FallKarte
              key={fall.fallId}
              fall={fall}
              isActive={fall.fallId === activeFallId}
              onClick={() => setActiveFallId(fall.fallId)}
            />
          ))}
        </div>
      </div>

      {/* Zeitleiste */}
      <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--lern-text-tertiary)] mb-3">
        Fallverlauf
      </h2>
      <div>
        {activeFall.stationen.map((station, i) => (
          <StationCard
            key={station.stationId}
            station={station}
            index={i}
            isLast={i === activeFall.stationen.length - 1}
            sprachLevel={sprachLevel}
            onKapitelNavigieren={onKapitelNavigieren}
            onStationStarten={onStationStarten}
            fallId={activeFall.fallId}
          />
        ))}
      </div>
    </div>
  );
}
