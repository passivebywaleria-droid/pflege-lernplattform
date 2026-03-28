"use client";

import { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAllLektionen } from "@/lib/content-loader";
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt";
import { getSessionEmpfehlungen, getRepetitionPings, zaehleWiederholungen, type SessionEmpfehlung } from "@/lib/adaptive/session-planner";

// Wochentage
const WOCHENTAGE = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

export default function DashboardPage() {
  const { profil, loaded, getLetztePosition } = useLernFortschritt();
  const lektionen = getAllLektionen();
  const letztePosition = getLetztePosition();

  // Adaptive Empfehlungen
  const empfehlungen = useMemo(() => {
    if (!profil) return [];
    return getSessionEmpfehlungen(profil, lektionen);
  }, [profil, lektionen]);

  const wiederholungsCount = useMemo(() => {
    return zaehleWiederholungen(profil?.kompetenzRegister);
  }, [profil]);

  // Wochenaktivität (letzte 7 Tage)
  const wochenDaten = useMemo(() => {
    if (!profil) return [];
    const heute = new Date();
    return Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(heute);
      date.setDate(date.getDate() - (6 - i));
      const datum = date.toISOString().split("T")[0];
      const aktivitaet = profil.tagesAktivitaeten.find((a) => a.datum === datum);
      const tag = WOCHENTAGE[date.getDay() === 0 ? 6 : date.getDay() - 1];
      return {
        tag,
        datum,
        minuten: aktivitaet?.minutenAktiv ?? 0,
        xp: aktivitaet?.xpVerdient ?? 0,
      };
    });
  }, [profil]);

  const maxMinuten = Math.max(1, ...wochenDaten.map((d) => d.minuten));

  // Fällige Karteikarten
  const faelligeKarten = useMemo(() => {
    if (!profil) return [];
    const jetzt = new Date().toISOString();
    return profil.schwaechen.filter((k) => k.naechsteWiederholung <= jetzt);
  }, [profil]);

  // Lernpfad: Lektionen mit Fortschritt-Status
  const lernpfad = useMemo(() => {
    return lektionen.map((le) => {
      const fortschritt = profil?.fortschritte[le.leId];
      let status: "locked" | "available" | "in_progress" | "done" = "locked";
      let prozent = 0;

      if (le.status === "fertig") {
        if (fortschritt?.abgeschlossen) {
          status = "done";
          prozent = 100;
        } else if (fortschritt && Object.keys(fortschritt.sessions).length > 0) {
          status = "in_progress";
          // Durchschnitt aller Sessions
          const sessions = Object.values(fortschritt.sessions);
          prozent = Math.round(
            sessions.reduce((sum, s) => sum + (s.currentStep / Math.max(1, s.totalSteps)) * 100, 0) /
            Math.max(1, sessions.length)
          );
        } else {
          status = "available";
        }
      }

      return { ...le, status, prozent, xp: fortschritt?.gesamtXp ?? 0 };
    });
  }, [lektionen, profil]);

  // Kompetenz-Daten für Radar
  const kompetenzDaten = useMemo(() => {
    const kompetenzen: Record<string, { total: number; done: number }> = {};
    for (const le of lernpfad) {
      for (const kb of le.kompetenzbereiche) {
        if (!kompetenzen[kb]) kompetenzen[kb] = { total: 0, done: 0 };
        kompetenzen[kb].total++;
        if (le.prozent >= 80) kompetenzen[kb].done++;
      }
    }
    return Object.entries(kompetenzen).map(([name, data]) => ({
      name,
      wert: data.total > 0 ? Math.round((data.done / data.total) * 100) : 0,
    }));
  }, [lernpfad]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#1d1d1f] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#0071e3] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#1d1d1f]">
      {/* Header */}
      <div className="bg-white dark:bg-[#1d1d1f] border-b border-[#d2d2d7]/50 dark:border-white/10">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">
                Dashboard
              </h1>
              <p className="text-sm text-[#6e6e73]">
                Dein Lernfortschritt auf einen Blick
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-[#6e6e73]">Streak</p>
                <p className="text-lg font-bold text-[#FF9500]">
                  🔥 {profil?.streakTage ?? 0}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-[#6e6e73]">Gesamt</p>
                <p className="text-lg font-bold text-[#0071e3]">
                  {profil?.gesamtXp ?? 0} XP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-6 space-y-6">
        {/* Empfehlungs-Karten (SessionPlanner) */}
        {empfehlungen.length > 0 && (
          <div className="space-y-3">
            {empfehlungen.map((emp, i) => (
              <EmpfehlungsKarte key={`${emp.leId}-${emp.session}-${emp.typ}`} empfehlung={emp} delay={i * 0.05} />
            ))}
          </div>
        )}

        {/* Fallback: Statisches Weitermachen wenn keine Empfehlungen */}
        {empfehlungen.length === 0 && letztePosition && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href={`/de/lernen/${letztePosition.leId}`}>
              <div className="rounded-2xl bg-[#0071e3] p-5 text-white transition-all active:scale-[0.98]">
                <p className="text-xs font-medium opacity-80 mb-1">Weitermachen</p>
                <p className="text-lg font-bold">
                  {lektionen.find((l) => l.leId === letztePosition.leId)?.title ?? letztePosition.leId}
                </p>
                <p className="text-sm opacity-80">
                  Session {letztePosition.session} · Step {letztePosition.step + 1}/{letztePosition.totalSteps}
                </p>
                <div className="mt-3 h-1.5 rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white"
                    style={{
                      width: `${(letztePosition.step / Math.max(1, letztePosition.totalSteps)) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Spaced-Repetition-Hinweis */}
        {wiederholungsCount > 0 && wiederholungsCount < 5 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl bg-[#FF9500]/5 border border-[#FF9500]/20 px-5 py-3"
          >
            <p className="text-sm text-[#FF9500] font-medium">
              {wiederholungsCount} Lernziel{wiederholungsCount > 1 ? "e" : ""} zur Auffrischung fällig
            </p>
            <p className="text-xs text-[#86868b] mt-0.5">
              Wird automatisch in deine nächste Session eingebaut
            </p>
          </motion.div>
        )}

        {/* Wochenaktivität */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-white dark:bg-white/5 border border-[#d2d2d7] dark:border-white/10 p-5"
        >
          <h2 className="text-sm font-semibold text-[#1d1d1f] dark:text-white mb-4">
            Diese Woche
          </h2>
          <div className="flex items-end gap-2 h-24">
            {wochenDaten.map((d) => (
              <div key={d.datum} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col justify-end h-16">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(d.minuten / maxMinuten) * 100}%` }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`w-full rounded-t-md ${
                      d.minuten > 0 ? "bg-[#0071e3]" : "bg-[#d2d2d7] dark:bg-white/10"
                    }`}
                    style={{ minHeight: d.minuten > 0 ? "4px" : "2px" }}
                  />
                </div>
                <span className="text-[10px] text-[#86868b]">{d.tag}</span>
                {d.minuten > 0 && (
                  <span className="text-[9px] font-medium text-[#0071e3]">
                    {d.minuten} Min
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Kompetenz-Radar (vereinfacht als Balken) */}
        {kompetenzDaten.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-white dark:bg-white/5 border border-[#d2d2d7] dark:border-white/10 p-5"
          >
            <h2 className="text-sm font-semibold text-[#1d1d1f] dark:text-white mb-4">
              Kompetenz-Übersicht
            </h2>
            <div className="space-y-3">
              {kompetenzDaten.map((k) => (
                <div key={k.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[#6e6e73] truncate max-w-[200px]">{k.name}</span>
                    <span className="text-xs font-semibold text-[#1d1d1f] dark:text-white">
                      {k.wert}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-[#f5f5f7] dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${k.wert}%` }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="h-full rounded-full bg-[#0071e3]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Karteikarten (Schwächen) */}
        {faelligeKarten.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl bg-[#FF9500]/5 border border-[#FF9500]/20 p-5"
          >
            <h2 className="text-sm font-semibold text-[#FF9500] mb-3">
              Wiederholung fällig ({faelligeKarten.length})
            </h2>
            <div className="space-y-2">
              {faelligeKarten.slice(0, 5).map((k) => (
                <div
                  key={k.id}
                  className="rounded-xl bg-white dark:bg-white/5 p-3 border border-[#d2d2d7]/50 dark:border-white/10"
                >
                  <p className="text-sm font-medium text-[#1d1d1f] dark:text-white">
                    {k.begriff}
                  </p>
                  <p className="text-xs text-[#6e6e73]">{k.fragetext}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Lernpfad */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-2xl bg-white dark:bg-white/5 border border-[#d2d2d7] dark:border-white/10 p-5"
        >
          <h2 className="text-sm font-semibold text-[#1d1d1f] dark:text-white mb-4">
            Lernpfad CE 05
          </h2>
          <div className="space-y-2">
            {lernpfad.map((le) => {
              const statusIcon =
                le.status === "done"
                  ? "✅"
                  : le.status === "in_progress"
                    ? "▶️"
                    : le.status === "available"
                      ? "⚪"
                      : "🔒";

              return (
                <div key={le.leId}>
                  {le.status === "available" || le.status === "in_progress" || le.status === "done" ? (
                    <Link href={`/de/lernen/${le.leId}`}>
                      <div className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[#f5f5f7] dark:hover:bg-white/5 active:scale-[0.99]">
                        <span className="text-lg shrink-0">{statusIcon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#1d1d1f] dark:text-white truncate">
                            LE {le.order} — {le.title}
                          </p>
                          {le.prozent > 0 && (
                            <div className="mt-1 h-1 rounded-full bg-[#f5f5f7] dark:bg-white/10">
                              <div
                                className="h-full rounded-full bg-[#30D158]"
                                style={{ width: `${le.prozent}%` }}
                              />
                            </div>
                          )}
                        </div>
                        {le.xp > 0 && (
                          <span className="text-xs font-semibold text-[#0071e3]">
                            {le.xp} XP
                          </span>
                        )}
                      </div>
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl p-3 opacity-50">
                      <span className="text-lg shrink-0">{statusIcon}</span>
                      <p className="text-sm font-medium text-[#1d1d1f] dark:text-white truncate">
                        LE {le.order} — {le.title}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// --- Empfehlungs-Karte ---

const EMPFEHLUNG_STYLES: Record<string, { bg: string; border: string; icon: string; label: string }> = {
  weiter: { bg: "bg-[#0071e3]", border: "", icon: "▶️", label: "Weitermachen" },
  "neue-session": { bg: "bg-white dark:bg-white/5", border: "border border-[#0071e3]/30", icon: "📖", label: "Nächste Session" },
  "neue-le": { bg: "bg-white dark:bg-white/5", border: "border border-[#30D158]/30", icon: "🆕", label: "Neue Lektion" },
  wiederholung: { bg: "bg-[#FF9500]/5", border: "border border-[#FF9500]/20", icon: "🔄", label: "Wiederholung" },
  challenge: { bg: "bg-[#AF52DE]/5", border: "border border-[#AF52DE]/20", icon: "⚡", label: "Challenge" },
};

function EmpfehlungsKarte({ empfehlung, delay }: { empfehlung: SessionEmpfehlung; delay: number }) {
  const style = EMPFEHLUNG_STYLES[empfehlung.typ] ?? EMPFEHLUNG_STYLES["neue-session"];
  const isWeiter = empfehlung.typ === "weiter";
  const isWiederholung = empfehlung.typ === "wiederholung";

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`rounded-2xl p-5 transition-all active:scale-[0.98] ${style.bg} ${style.border}`}
    >
      <div className="flex items-start gap-3">
        <span className="text-lg shrink-0">{style.icon}</span>
        <div className="flex-1 min-w-0">
          <p className={`text-xs font-medium mb-0.5 ${isWeiter ? "text-white/80" : "text-[#86868b]"}`}>
            {style.label}
          </p>
          <p className={`text-sm font-semibold ${isWeiter ? "text-white" : "text-[#1d1d1f] dark:text-white"}`}>
            {empfehlung.grund}
          </p>
          <p className={`text-xs mt-1 ${isWeiter ? "text-white/70" : "text-[#86868b]"}`}>
            ~{empfehlung.geschaetzteMinuten} Min
          </p>
        </div>
      </div>
    </motion.div>
  );

  // Wiederholung hat kein Link-Ziel (wird in nächste Session eingebaut)
  if (isWiederholung) return content;

  return (
    <Link href={`/de/lernen/${empfehlung.leId}`}>
      {content}
    </Link>
  );
}
