"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { HandDrawnIcon } from "@/components/ui/hand-drawn-icon";
import type { ContentStep } from "../../../content/_types";
import type { StepAntwort } from "@/hooks/use-lern-fortschritt";
import { berechneKonfidenzKalibrierung } from "@/lib/adaptive/sequencer";

interface Schwaeche {
  begriff: string;
}

interface SessionSummaryProps {
  sessionXp: number;
  score: number;
  totalQuestions: number;
  streak: number;
  stepsCompleted: number;
  streakTage: number;
  sessionSteps?: ContentStep[];
  schwaechen?: Schwaeche[];
  nextSessionTitle?: string | null;
  sessionAntworten?: StepAntwort[];
  /** Einfache Liste gelernter Themen (Alternative zu sessionSteps-Extraktion) */
  themen?: string[];
  /** Einfache Liste von Schwaechen als Strings (Alternative zu Schwaeche[]) */
  schwaechenTexte?: string[];
  /** Name/Titel der naechsten Session (Alternative zu nextSessionTitle) */
  naechsteSession?: string | null;
  /** Freitext-Insight zur Konfidenz/Selbsteinschaetzung */
  konfidenzText?: string | null;
}

/**
 * Tages-Zusammenfassung am Ende einer Session.
 * Zeigt XP, Score, Streak, bearbeitete Steps, gelernte Themen,
 * Schwaechen-Hinweis, naechste Session und Konfidenz-Kalibrierung.
 */
export function SessionSummary({
  sessionXp,
  score,
  totalQuestions,
  streak,
  stepsCompleted,
  streakTage,
  sessionSteps,
  schwaechen,
  nextSessionTitle,
  sessionAntworten,
  themen,
  schwaechenTexte,
  naechsteSession,
  konfidenzText,
}: SessionSummaryProps) {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 100;

  // 3a: Gelernte Themen aus Steps extrahieren ODER aus themen-Prop
  const gelernteThemen = useMemo(() => {
    // Explizite themen-Prop hat Vorrang
    if (themen && themen.length > 0) return themen.slice(0, 6);
    if (!sessionSteps || sessionSteps.length === 0) return [];
    const themenMap = new Map<string, string>();
    for (const step of sessionSteps) {
      const title = step.contentC1?.title;
      const phase = step.themenblockPhase ?? "ALLGEMEIN";
      if (title && !themenMap.has(title)) {
        themenMap.set(title, phase);
      }
    }
    // Dedupliziert: unique titles, max 6
    return Array.from(themenMap.entries())
      .slice(0, 6)
      .map(([title]) => title);
  }, [sessionSteps, themen]);

  // 3d: Richtig-Quote berechnen
  const richtigQuote = useMemo(() => {
    if (!sessionAntworten || sessionAntworten.length === 0) return null;
    const bewertbare = sessionAntworten.filter(a => a.correct !== null);
    if (bewertbare.length === 0) return null;
    const richtig = bewertbare.filter(a => a.correct === true).length;
    return Math.round((richtig / bewertbare.length) * 100);
  }, [sessionAntworten]);

  // Konfidenz-Kalibrierung
  const kalibrierung = useMemo(() => {
    if (!sessionAntworten) return null;
    return berechneKonfidenzKalibrierung(sessionAntworten);
  }, [sessionAntworten]);

  const stats = [
    {
      label: "XP verdient",
      value: `+${sessionXp}`,
      color: "#D4956A",
      bgColor: "#D4956A",
      icon: "lightning" as const,
    },
    {
      label: "Richtig",
      value: `${score}/${totalQuestions}`,
      color: "#6B8F71",
      bgColor: "#6B8F71",
      icon: "check" as const,
    },
    {
      label: "Beste Serie",
      value: `${streak}x`,
      color: "#D4956A",
      bgColor: "#D4956A",
      icon: "fire" as const,
    },
    {
      label: "Steps",
      value: `${stepsCompleted}`,
      color: "var(--lern-accent)",
      bgColor: "var(--lern-accent)",
      icon: "book" as const,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-2xl bg-gradient-to-b from-[var(--lern-bg)] to-[var(--lern-bg-primary)] border border-[var(--lern-border)]/50 p-5 space-y-4"
    >
      <div className="flex items-center gap-2">
        <HandDrawnIcon name="celebration" size={20} color="#D4956A" />
        <h3 className="text-sm font-bold text-[var(--lern-text-primary)]">
          Das hast du geschafft
        </h3>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="rounded-xl p-3 text-center"
            style={{ backgroundColor: `${stat.bgColor}08` }}
          >
            <p
              className="text-xl font-bold tabular-nums"
              style={{ color: stat.color }}
            >
              {stat.value}
            </p>
            <p className="text-[11px] text-[var(--lern-text-secondary)] mt-0.5">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* 3a: Heute gelernt */}
      {gelernteThemen.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)]/30 p-4 space-y-2"
        >
          <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] uppercase tracking-wide">
            Heute gelernt
          </p>
          <ul className="space-y-1">
            {gelernteThemen.map((thema, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.05 }}
                className="flex items-center gap-2 text-sm text-[var(--lern-text-primary)]"
              >
                <span className="text-[#6B8F71] shrink-0">&#10003;</span>
                <span className="line-clamp-1">{thema}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* 3d: Richtig-Quote */}
      {richtigQuote !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)]/30 p-4 space-y-2"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] uppercase tracking-wide">
              Richtig-Quote
            </p>
            <p
              className="text-sm font-bold"
              style={{ color: richtigQuote >= 80 ? "#6B8F71" : richtigQuote >= 60 ? "#D4956A" : "#C96B5C" }}
            >
              {richtigQuote}%
            </p>
          </div>
          <div className="h-2 rounded-full bg-[var(--lern-border)]/30 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${richtigQuote}%` }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{
                backgroundColor: richtigQuote >= 80 ? "#6B8F71" : richtigQuote >= 60 ? "#D4956A" : "#C96B5C",
              }}
            />
          </div>
        </motion.div>
      )}

      {/* 3b: Schwaechen-Hinweis (aus Schwaeche[] oder string[]) */}
      {((schwaechen && schwaechen.length > 0) || (schwaechenTexte && schwaechenTexte.length > 0)) && (() => {
        const items = schwaechenTexte && schwaechenTexte.length > 0
          ? schwaechenTexte.slice(0, 4)
          : (schwaechen ?? []).slice(0, 4).map(s => s.begriff);
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="rounded-xl border p-4 space-y-2"
            style={{
              backgroundColor: "rgba(255, 214, 10, 0.06)",
              borderColor: "rgba(255, 214, 10, 0.25)",
            }}
          >
            <div className="flex items-center gap-2">
              <HandDrawnIcon name="lightbulb" size={14} color="#B8860B" />
              <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#B8860B" }}>
                Hier solltest du nochmal ueben
              </p>
            </div>
            <ul className="space-y-1">
              {items.map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.05 }}
                  className="flex items-center gap-2 text-sm text-[var(--lern-text-primary)]"
                >
                  <span style={{ color: "#BFA48E" }} className="shrink-0">&#9679;</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        );
      })()}

      {/* Streak-Tage */}
      {streakTage > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-2 rounded-xl bg-[#D4956A]/5 border border-[#D4956A]/15 px-3 py-2"
        >
          <HandDrawnIcon name="fire" size={16} color="#D4956A" />
          <p className="text-xs text-[var(--lern-text-primary)]">
            <strong className="text-[#D4956A]">{streakTage} Tag{streakTage !== 1 ? "e" : ""}</strong> am Stueck gelernt
          </p>
        </motion.div>
      )}

      {/* 3c: Naechste Session Teaser (naechsteSession oder nextSessionTitle) */}
      {(naechsteSession || nextSessionTitle) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex items-center gap-3 rounded-xl px-4 py-3"
          style={{
            backgroundColor: "color-mix(in srgb, var(--lern-accent) 5%, transparent)",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "color-mix(in srgb, var(--lern-accent) 15%, transparent)",
          }}
        >
          <HandDrawnIcon name="arrow-right" size={16} color="var(--lern-accent)" />
          <div>
            <p className="text-[11px] text-[var(--lern-text-tertiary)] uppercase tracking-wide">
              Morgen
            </p>
            <p className="text-sm font-medium text-[var(--lern-text-primary)]">
              {naechsteSession ?? nextSessionTitle}
            </p>
            <p className="text-[11px] text-[var(--lern-text-secondary)] mt-0.5">
              Bleib dran, du machst gute Fortschritte!
            </p>
          </div>
        </motion.div>
      )}

      {/* Konfidenz-Kalibrierung (berechnet) */}
      {kalibrierung && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="rounded-xl bg-[var(--lern-card-bg)] border border-[var(--lern-border)]/30 p-4"
        >
          <div className="flex items-start gap-2">
            <HandDrawnIcon
              name={kalibrierung.typ === "gut-kalibriert" ? "check" : kalibrierung.typ === "unterschaetzt" ? "lightning" : "lightbulb"}
              size={16}
              color={kalibrierung.typ === "gut-kalibriert" ? "#6B8F71" : kalibrierung.typ === "unterschaetzt" ? "#D4956A" : "#D4956A"}
            />
            <div>
              <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] uppercase tracking-wide mb-1">
                Selbsteinschaetzung
              </p>
              <p className="text-sm text-[var(--lern-text-primary)]">
                {kalibrierung.beschreibung}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Konfidenz-Feedback (Freitext) */}
      {konfidenzText && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15 }}
          className="rounded-xl border p-4"
          style={{
            backgroundColor: "var(--lern-bg)",
            borderColor: "var(--lern-border)",
          }}
        >
          <div className="flex items-start gap-2">
            <HandDrawnIcon name="star" size={14} color="var(--lern-accent)" />
            <div>
              <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] uppercase tracking-wide mb-1">
                Dein Lern-Insight
              </p>
              <p className="text-sm text-[var(--lern-text-secondary)]">
                {konfidenzText}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Motivations-Text */}
      <p className="text-xs text-[var(--lern-text-secondary)] text-center">
        {percentage >= 80
          ? "Hervorragend! Du beherrschst das Thema sehr gut."
          : percentage >= 60
            ? "Guter Fortschritt! Wiederholung festigt das Wissen."
            : "Jeder Schritt zaehlt. Bleib dran!"}
      </p>
    </motion.div>
  );
}
