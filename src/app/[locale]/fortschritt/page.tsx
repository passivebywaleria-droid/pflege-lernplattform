"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronDown, ChevronUp, BookOpen, CheckCircle2, Circle } from "lucide-react";
import { ceUebersicht, getLeIdsFuerCe, TOTAL_LES, type CeInfo } from "@/lib/ce-overview";
import { useLernFortschritt, type LeFortschritt } from "@/hooks/use-lern-fortschritt";

// --- Hilfsfunktionen ---

function istLeAbgeschlossen(le: LeFortschritt | null): boolean {
  if (!le) return false;
  // Abgeschlossen wenn mindestens 1 Session mit currentStep == totalSteps - 1
  return Object.values(le.sessions).some(
    (s) => s.currentStep >= s.totalSteps - 1 && s.totalSteps > 0
  );
}

function istLeGestartet(le: LeFortschritt | null): boolean {
  if (!le) return false;
  return Object.values(le.sessions).some((s) => s.currentStep > 0);
}

// --- CE-Karte ---

function CeKarte({
  ce,
  ceIndex,
  fortschritte,
  locale,
}: {
  ce: CeInfo;
  ceIndex: number;
  fortschritte: Record<string, LeFortschritt>;
  locale: string;
}) {
  const t = useTranslations("fortschritt");
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  const leIds = useMemo(() => getLeIdsFuerCe(ce.id), [ce.id]);

  const doneCount = leIds.filter((id) => istLeAbgeschlossen(fortschritte[id] ?? null)).length;
  const startedCount = leIds.filter(
    (id) => istLeGestartet(fortschritte[id] ?? null) && !istLeAbgeschlossen(fortschritte[id] ?? null)
  ).length;
  const prozent = ce.les > 0 ? Math.round((doneCount / ce.les) * 100) : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: ceIndex * 0.04, duration: 0.35 }}
      className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] overflow-hidden"
      style={{ color: "var(--lern-text-primary)" }}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded((e) => !e)}
        className="w-full text-left p-5 flex items-center gap-4 transition-colors hover:bg-[#fafafa] active:bg-[#f0f0f2]"
      >
        {/* CE-Nummer-Badge */}
        <div
          className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm"
          style={{ backgroundColor: ce.farbe }}
        >
          {(ceIndex + 1).toString().padStart(2, "0")}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-[15px] text-[var(--lern-text-primary)] truncate">
            CE {ceIndex + 1}: {ce.titel}
          </h3>
          <p className="text-xs text-[var(--lern-text-secondary)] mt-0.5">
            {t("lesAbgeschlossen", { done: doneCount, total: ce.les })}
            {startedCount > 0 && ` · ${startedCount} ${t("gestartet").toLowerCase()}`}
          </p>
        </div>

        {/* Fortschrittsring */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <div className="relative w-10 h-10">
            <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                stroke="#f0f0f2"
                strokeWidth="3"
              />
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                stroke={ce.farbe}
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${prozent * 0.942} 100`}
                className="transition-all duration-500"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[var(--lern-text-primary)]">
              {prozent}%
            </span>
          </div>

          {expanded ? (
            <ChevronUp className="w-4 h-4 text-[#8e8e93]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#8e8e93]" />
          )}
        </div>
      </button>

      {/* Fortschrittsbalken */}
      <div className="px-5 pb-4">
        <div className="h-1.5 rounded-full bg-[#f0f0f2] overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: ce.farbe }}
            initial={{ width: 0 }}
            animate={{ width: `${prozent}%` }}
            transition={{ duration: 0.6, delay: ceIndex * 0.04 + 0.2 }}
          />
        </div>
      </div>

      {/* Expandierte LE-Liste */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[var(--lern-divider)] mx-5" />
            <div className="px-5 py-3 space-y-1">
              {leIds.map((leId, i) => {
                const le = fortschritte[leId] ?? null;
                const done = istLeAbgeschlossen(le);
                const started = istLeGestartet(le);
                const leNr = parseInt(leId.replace("le-", ""));

                return (
                  <button
                    key={leId}
                    onClick={() => router.push(`/${locale}/lernen/${leId}`)}
                    className="w-full flex items-center gap-3 py-2.5 px-2 rounded-xl hover:bg-[var(--lern-bg)] active:bg-[var(--lern-divider)] transition-colors text-left"
                  >
                    {done ? (
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: ce.farbe }}
                      />
                    ) : started ? (
                      <div
                        className="w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center"
                        style={{ borderColor: ce.farbe }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: ce.farbe }}
                        />
                      </div>
                    ) : (
                      <Circle className="w-5 h-5 flex-shrink-0 text-[#c7c7cc]" />
                    )}

                    <span className={`text-sm flex-1 ${done ? "text-[var(--lern-text-secondary)]" : "text-[var(--lern-text-primary)]"}`}>
                      {t("leLabel", { nr: leNr })}
                      {i === 0 && leId === "le-01" ? " — Ausbildungsstart" : ""}
                    </span>

                    {done && (
                      <span className="text-xs text-[var(--lern-text-secondary)] bg-[#f0f0f2] px-2 py-0.5 rounded-full">
                        {t("abgeschlossen")}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Hauptseite ---

export default function FortschrittPage() {
  const t = useTranslations("fortschritt");
  const params = useParams();
  const router = useRouter();
  const locale = (params.locale as string) ?? "de";
  const { profil, loaded } = useLernFortschritt();

  const fortschritte = profil?.fortschritte ?? {};

  // Gesamtfortschritt berechnen
  const { gesamtDone, gesamtProzent } = useMemo(() => {
    let done = 0;
    for (const ce of ceUebersicht) {
      const leIds = getLeIdsFuerCe(ce.id);
      done += leIds.filter((id) => istLeAbgeschlossen(fortschritte[id] ?? null)).length;
    }
    return {
      gesamtDone: done,
      gesamtProzent: TOTAL_LES > 0 ? Math.round((done / TOTAL_LES) * 100) : 0,
    };
  }, [fortschritte]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#C4877F] border-t-transparent" />
          <p className="text-sm text-[var(--lern-text-secondary)]">{t("title")}...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
      {/* Header */}
      <div className="sticky top-0 z-30 bg-[var(--lern-bg)]/80 backdrop-blur-xl border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-2xl px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => router.push(`/${locale}/lernen`)}
            className="p-1.5 -ml-1.5 rounded-xl hover:bg-[var(--lern-divider)] transition-colors"
            aria-label={t("zurueck")}
          >
            <ChevronLeft className="w-5 h-5 text-[var(--lern-accent)]" />
          </button>
          <h1 className="text-lg font-bold text-[var(--lern-text-primary)]">{t("title")}</h1>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-6 space-y-6">
        {/* Gesamtfortschritt-Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-6 text-center"
        >
          {/* Großer Fortschrittsring */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            <svg viewBox="0 0 36 36" className="w-24 h-24 -rotate-90">
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                stroke="#f0f0f2"
                strokeWidth="2.5"
              />
              <circle
                cx="18" cy="18" r="15"
                fill="none"
                stroke="#C4877F"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={`${gesamtProzent * 0.942} 100`}
                className="transition-all duration-700"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-[var(--lern-text-primary)]">{gesamtProzent}%</span>
            </div>
          </div>

          <p className="text-sm font-medium text-[var(--lern-text-primary)]">
            {t("gesamtFortschritt", { prozent: gesamtProzent })}
          </p>
          <p className="text-xs text-[var(--lern-text-secondary)] mt-1">
            {t("lesAbgeschlossen", { done: gesamtDone, total: TOTAL_LES })}
          </p>

          {gesamtDone === 0 && (
            <div className="mt-4 flex flex-col items-center gap-3">
              <BookOpen className="w-8 h-8 text-[#c7c7cc]" />
              <p className="text-sm text-[#8e8e93]">{t("keinFortschritt")}</p>
              <button
                onClick={() => router.push(`/${locale}/lernen`)}
                className="rounded-2xl bg-[var(--lern-accent)] px-6 py-2.5 text-sm font-semibold text-white transition-all active:scale-[0.98]"
              >
                {t("lernenStarten")}
              </button>
            </div>
          )}
        </motion.div>

        {/* CE-Grid */}
        <div className="space-y-3">
          {ceUebersicht.map((ce, i) => (
            <CeKarte
              key={ce.id}
              ce={ce}
              ceIndex={i}
              fortschritte={fortschritte}
              locale={locale}
            />
          ))}
        </div>

        {/* Gesamt-Statistik unten */}
        {profil && profil.gesamtXp > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5 grid grid-cols-3 gap-4 text-center"
          >
            <div>
              <p className="text-2xl font-bold text-[var(--lern-accent)]">{profil.gesamtXp.toLocaleString()}</p>
              <p className="text-xs text-[var(--lern-text-secondary)]">XP</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#D4956A]">{profil.streakTage}</p>
              <p className="text-xs text-[var(--lern-text-secondary)]">Streak</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#6B8F71]">{gesamtDone}</p>
              <p className="text-xs text-[var(--lern-text-secondary)]">LEs</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
