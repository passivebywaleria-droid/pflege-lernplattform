"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { getAllLektionen } from "@/lib/content-loader";
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt";
import { getSessionEmpfehlungen, zaehleWiederholungen, type SessionEmpfehlung } from "@/lib/adaptive/session-planner";
import type { KompetenzStufe } from "@/lib/adaptive/kompetenz-register";
import {
  generiereWochenplan,
  getAktuellerWochentagIndex,
} from "@/lib/wochenplan";
import { getVerfuegbarePruefungen } from "@/lib/pruefung/fragen-pool";
import { speichereLetzteAktivitaet, pruefeLernErinnerung } from "@/lib/notifications";
import { getErreichteMeilensteine, getOffeneMeilensteine } from "@/lib/meilensteine";
import { BadgePopup } from "@/components/learn/badge-popup";
import { TagesplanKarte } from "@/components/dashboard/tagesplan-karte";
import { KompetenzUebersicht } from "@/components/dashboard/kompetenz-uebersicht";
import { LernpfadSektion } from "@/components/dashboard/lernpfad-sektion";
// Prüfungsreife aus localStorage lesen
function getPruefungsreife(): { ceId: string; prozent: number; reife: "gruen" | "gelb" | "rot" } | null {
  try {
    const raw = localStorage.getItem("pflege-pruefungen");
    if (!raw) return null;
    const ergebnisse = JSON.parse(raw) as { ceId: string; prozent: number; datum: string }[];
    if (ergebnisse.length === 0) return null;
    const letztes = ergebnisse[ergebnisse.length - 1];
    const reife = letztes.prozent >= 80 ? "gruen" as const : letztes.prozent >= 60 ? "gelb" as const : "rot" as const;
    return { ceId: letztes.ceId, prozent: letztes.prozent, reife };
  } catch {
    return null;
  }
}

// Wochentage
const WOCHENTAGE = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

/** Tageszeit-abhängiger Gruß */
function getTagesgruss(): string {
  const stunde = new Date().getHours();
  if (stunde < 12) return "Guten Morgen";
  if (stunde < 18) return "Guten Tag";
  return "Guten Abend";
}
export default function DashboardPage() {
  const locale = useLocale();
  const { profil, loaded, getLetztePosition, getFaelligeWiederholungen, toggleModus } = useLernFortschritt();
  const istPraxisModus = profil?.modus === "praxis";
  const lektionen = useMemo(() => getAllLektionen(), []);
  const letztePosition = getLetztePosition();

  // Adaptive Empfehlungen
  const empfehlungen = useMemo(() => {
    if (!profil) return [];
    return getSessionEmpfehlungen(profil, lektionen);
  }, [profil, lektionen]);

  const wiederholungsCount = useMemo(() => {
    return zaehleWiederholungen(profil?.kompetenzRegister);
  }, [profil]);

  // Wochenplan-Integration
  const wochenplan = useMemo(() => {
    if (!loaded) return null;
    return generiereWochenplan(profil, lektionen);
  }, [loaded, profil, lektionen]);

  const heuteIndex = getAktuellerWochentagIndex();
  const heutigerTag = wochenplan?.tage[heuteIndex >= 0 ? heuteIndex : 0] ?? null;

  // Fällige Spaced-Repetition-LEs
  const faelligeWiederholungen = useMemo(() => {
    return getFaelligeWiederholungen();
  }, [getFaelligeWiederholungen]);

  // Notification-Prüfung + Aktivität speichern
  useEffect(() => {
    speichereLetzteAktivitaet();
    pruefeLernErinnerung();
  }, []);

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

      if (le.status === "geprueft" || le.status === "steps") {
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

  // Kompetenz-Daten für Radar (basierend auf CE-Fortschritt)
  const kompetenzDaten = useMemo(() => {
    const ceStats: Record<string, { total: number; done: number }> = {};
    for (const le of lernpfad) {
      const ce = le.ceId;
      if (!ceStats[ce]) ceStats[ce] = { total: 0, done: 0 };
      ceStats[ce].total++;
      if (le.prozent >= 80) ceStats[ce].done++;
    }
    return Object.entries(ceStats).map(([name, data]) => ({
      name: name.replace("ce-", "CE ").toUpperCase(),
      wert: data.total > 0 ? Math.round((data.done / data.total) * 100) : 0,
    }));
  }, [lernpfad]);

  // KompetenzRegister-Zusammenfassung (Lernziel-Mastery)
  const kompetenzRegisterStats = useMemo(() => {
    const register = profil?.kompetenzRegister;
    if (!register) return null;
    const eintraege = Object.values(register);
    if (eintraege.length === 0) return null;
    const counts: Record<KompetenzStufe, number> = {
      unbekannt: 0, versucht: 0, vertraut: 0, sicher: 0, gemeistert: 0,
    };
    for (const e of eintraege) {
      counts[e.stufe]++;
    }
    const gesamt = eintraege.length;
    const gemeistertProzent = gesamt > 0 ? Math.round((counts.gemeistert / gesamt) * 100) : 0;
    return { counts, gesamt, gemeistertProzent };
  }, [profil]);

  // Meilensteine
  const erreichteMeilensteine = useMemo(() => {
    if (!profil) return [];
    return getErreichteMeilensteine(profil);
  }, [profil]);

  const offeneMeilensteine = useMemo(() => {
    if (!profil) return [];
    return getOffeneMeilensteine(profil).slice(0, 4);
  }, [profil]);

  // Tagesplan zusammenstellen
  const tagesplan = useMemo(() => {
    const plan: { text: string; geschafft: boolean; link?: string; dauer?: string }[] = [];

    for (const emp of empfehlungen.slice(0, 3)) {
      plan.push({
        text: emp.grund,
        geschafft: false,
        link: emp.typ !== "wiederholung" ? `/${locale}/lernen/${emp.leId}` : undefined,
        dauer: `${emp.geschaetzteMinuten} Min`,
      });
    }

    if (faelligeKarten.length > 0) {
      plan.push({
        text: `${faelligeKarten.length} Karteikarten wiederholen`,
        geschafft: false,
        dauer: `${Math.max(5, faelligeKarten.length * 2)} Min`,
      });
    }

    const heute = new Date().toISOString().split("T")[0];
    const heuteAktivitaet = profil?.tagesAktivitaeten.find((a) => a.datum === heute);
    if (heuteAktivitaet && heuteAktivitaet.sessionsAbgeschlossen > 0) {
      plan.push({
        text: `${heuteAktivitaet.sessionsAbgeschlossen} Session${heuteAktivitaet.sessionsAbgeschlossen > 1 ? "s" : ""} abgeschlossen`,
        geschafft: true,
      });
    }

    return plan;
  }, [empfehlungen, faelligeKarten, profil]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--lern-accent)] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]">
      {/* Badge-Popup (Meilensteine) */}
      <BadgePopup profil={profil} />

      {/* Header mit Tagesgruß */}
      <div className="bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[var(--lern-text-primary)]">
                {getTagesgruss()}!
              </h1>
              <p className="text-sm text-[var(--lern-text-secondary)]">
                Dein Lernfortschritt auf einen Blick
              </p>
            </div>
            <div className="flex items-center gap-3">
              {profil && profil.streakTage > 0 && (
                <div className="text-right">
                  <p className="text-xs text-[var(--lern-text-secondary)]">Streak</p>
                  <p className="text-lg font-bold text-[#D4956A]">
                    {"\uD83D\uDD25"} {profil.streakTage}
                  </p>
                </div>
              )}
              <div className="text-right">
                <p className="text-xs text-[var(--lern-text-secondary)]">Gesamt</p>
                <p className="text-lg font-bold text-[var(--lern-accent)]">
                  {profil?.gesamtXp ?? 0} XP
                </p>
              </div>
            </div>
          </div>
          {/* Streak-Motivation */}
          {profil && profil.streakTage >= 3 && (
            <motion.p
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-[#D4956A] font-medium mt-2"
            >
              Tag {profil.streakTage} in Folge! {"\uD83D\uDD25"} Weiter so!
            </motion.p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-6 space-y-6">
        {/* Praktikums-Modus Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl p-4 flex items-center justify-between ${
            istPraxisModus
              ? "bg-[#6B8F71]/5 border-2 border-[#6B8F71]/30"
              : "bg-[var(--lern-bg-primary)] border border-[var(--lern-border)]"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{istPraxisModus ? "\uD83C\uDFE5" : "\uD83D\uDCDA"}</span>
            <div>
              <p className="text-sm font-semibold text-[var(--lern-text-primary)]">
                {istPraxisModus ? "Praxis-Modus aktiv" : "Theorie-Modus"}
              </p>
              <p className="text-xs text-[var(--lern-text-secondary)]">
                {istPraxisModus
                  ? "Kurze Sessions für zwischendurch"
                  : "Ich bin gerade im Praktikum"}
              </p>
            </div>
          </div>
          <button
            onClick={toggleModus}
            className={`relative h-7 w-12 rounded-full transition-colors ${
              istPraxisModus ? "bg-[#6B8F71]" : "bg-[var(--lern-border)]"
            }`}
          >
            <span
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                istPraxisModus ? "translate-x-5" : "translate-x-0.5"
              }`}
            />
          </button>
        </motion.div>

        {/* Praxis-Modus Banner mit Empfehlungen */}
        {istPraxisModus && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl bg-[#6B8F71]/5 border border-[#6B8F71]/20 p-5"
          >
            <h2 className="text-sm font-semibold text-[#4A7350] mb-3">
              Empfohlen im Praktikum
            </h2>
            <div className="space-y-2">
              <Link href={`/${locale}/review`}>
                <div className="flex items-center gap-3 rounded-xl bg-[var(--lern-bg-primary)] p-3 border border-[var(--lern-border)]/50 transition-all active:scale-[0.98]">
                  <span className="text-lg">🗂️</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[var(--lern-text-primary)]">Karteikarten wiederholen</p>
                    <p className="text-xs text-[var(--lern-text-tertiary)]">Perfekt für die Pause auf Station</p>
                  </div>
                </div>
              </Link>
              <div className="rounded-xl bg-[var(--lern-bg-primary)] p-3 border border-[var(--lern-border)]/50">
                <p className="text-sm font-medium text-[var(--lern-text-primary)] mb-1">Reflexionsfrage</p>
                <p className="text-xs text-[var(--lern-text-secondary)] leading-relaxed">
                  Was hast du heute auf Station gesehen? Welche Pflegemaßnahme war besonders eindrücklich?
                </p>
              </div>
              <div className="rounded-xl bg-[var(--lern-bg-primary)] p-3 border border-[var(--lern-border)]/50">
                <p className="text-sm font-medium text-[var(--lern-text-primary)] mb-1">Quick-Review (30 Min)</p>
                <p className="text-xs text-[var(--lern-text-secondary)] leading-relaxed">
                  Verbinde deine Praxiserfahrung mit der Theorie — kurze Session statt 8 UE
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tagesplan */}
        <TagesplanKarte tagesplan={tagesplan} />
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
            <Link href={`/${locale}/lernen/${letztePosition.leId}`}>
              <div className="rounded-2xl bg-[var(--lern-accent)] p-5 text-white transition-all active:scale-[0.98]">
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

        {/* Heute auf deinem Plan (Wochenplan-Verknüpfung) */}
        {heuteIndex >= 0 && heutigerTag && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[#6B8F71]/30 p-5"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-semibold text-[#6B8F71] uppercase tracking-wider">
                Heute auf deinem Plan
              </p>
              <Link href={`/${locale}/wochenplan`} className="text-xs text-[var(--lern-accent)] font-medium">
                Wochenplan
              </Link>
            </div>
            <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-1">
              {heutigerTag.thema}
            </h3>
            <p className="text-xs text-[var(--lern-text-tertiary)] mb-3">
              {heutigerTag.ceId.replace("ce-", "CE ").toUpperCase()} &middot;{" "}
              {heutigerTag.typ === "neu" ? "Neues Thema" : heutigerTag.typ === "vertiefung" ? "Vertiefung" : "Wiederholung"} &middot;{" "}
              {heutigerTag.fortschrittProzent}% geschafft
            </p>
            <Link
              href={`/${locale}/lernen/${heutigerTag.leId}`}
              className="block w-full rounded-xl bg-[#6B8F71] px-4 py-3 text-center text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#28B84C]"
            >
              Jetzt starten
            </Link>
          </motion.div>
        )}

        {/* Wochenende-Hinweis im Dashboard */}
        {heuteIndex === -1 && wochenplan && wochenplan.tage.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 }}
            className="rounded-2xl bg-[#D4956A]/5 border border-[#D4956A]/20 p-5 text-center"
          >
            <p className="text-sm font-semibold text-[#D4956A]">
              Genieß das Wochenende!
            </p>
            <p className="text-xs text-[var(--lern-text-tertiary)] mt-1">
              Am Montag geht es weiter mit: {wochenplan.tage[0]?.thema}
            </p>
          </motion.div>
        )}

        {/* Spaced-Repetition-Hinweis (Kompetenz-Register) */}
        {wiederholungsCount > 0 && wiederholungsCount < 5 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl bg-[#D4956A]/5 border border-[#D4956A]/20 px-5 py-3"
          >
            <p className="text-sm text-[#D4956A] font-medium">
              {wiederholungsCount} Lernziel{wiederholungsCount > 1 ? "e" : ""} zur Auffrischung fällig
            </p>
            <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">
              Wird automatisch in deine nächste Session eingebaut
            </p>
          </motion.div>
        )}

        {/* Fällige Spaced-Repetition-Wiederholungen (LE-Level) */}
        {faelligeWiederholungen.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="rounded-2xl bg-[#9B7EA6]/5 border border-[#9B7EA6]/20 p-5"
          >
            <h2 className="text-sm font-semibold text-[#9B7EA6] mb-3">
              Wiederholung fällig ({faelligeWiederholungen.length} LE{faelligeWiederholungen.length > 1 ? "s" : ""})
            </h2>
            <div className="space-y-2">
              {faelligeWiederholungen.slice(0, 3).map((w) => {
                const le = lektionen.find((l) => l.leId === w.leId);
                return (
                  <Link key={w.leId} href={`/${locale}/lernen/${w.leId}`}>
                    <div className="flex items-center justify-between rounded-xl bg-[var(--lern-bg-primary)] p-3 border border-[var(--lern-border)]/50 transition-colors hover:bg-[var(--lern-bg)]">
                      <div>
                        <p className="text-sm font-medium text-[var(--lern-text-primary)]">
                          {le?.title ?? w.leId}
                        </p>
                        <p className="text-xs text-[var(--lern-text-tertiary)]">
                          Letzter Score: {w.letzterScore}% &middot; Fällig seit {Math.round(w.faelligSeitTagen)} Tag{Math.round(w.faelligSeitTagen) !== 1 ? "en" : ""}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-[#9B7EA6]">
                        Wiederholen
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Prüfungsreife-Badge */}
        <PruefungsreifeBadge />

        {/* Wochen-Zusammenfassung: XP, Streak, Steps */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="grid grid-cols-3 gap-3"
        >
          <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 text-center">
            <p className="text-xs text-[var(--lern-text-secondary)]">XP diese Woche</p>
            <p className="text-xl font-bold text-[var(--lern-accent)]">
              {wochenDaten.reduce((s, d) => s + d.xp, 0)}
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 text-center">
            <p className="text-xs text-[var(--lern-text-secondary)]">Streak</p>
            <p className="text-xl font-bold text-[#D4956A]">
              {profil?.streakTage ?? 0} Tage
            </p>
          </div>
          <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 text-center">
            <p className="text-xs text-[var(--lern-text-secondary)]">Lernzeit</p>
            <p className="text-xl font-bold text-[#6B8F71]">
              {wochenDaten.reduce((s, d) => s + d.minuten, 0)} Min
            </p>
          </div>
        </motion.div>

        {/* Meilensteine & Badges */}
        {(erreichteMeilensteine.length > 0 || offeneMeilensteine.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.09 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
          >
            <h2 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-4">
              Deine Badges
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {erreichteMeilensteine.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="flex flex-col items-center text-center gap-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--lern-accent)]/10 flex items-center justify-center text-2xl">
                    {m.icon}
                  </div>
                  <p className="text-[10px] font-medium text-[var(--lern-text-primary)] leading-tight">
                    {m.titel}
                  </p>
                </motion.div>
              ))}
              {offeneMeilensteine.map((m) => (
                <div
                  key={m.id}
                  className="flex flex-col items-center text-center gap-1 opacity-30"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--lern-text-tertiary)]/10 flex items-center justify-center text-2xl">
                    ?
                  </div>
                  <p className="text-[10px] font-medium text-[var(--lern-text-tertiary)] leading-tight">
                    {m.titel}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Wochenaktivität */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-[var(--lern-text-primary)]">
              Diese Woche
            </h2>
            <Link href={`/${locale}/lernzeit`} className="text-xs text-[var(--lern-accent)] font-medium">
              Lernzeit-Nachweis
            </Link>
          </div>
          <div className="flex items-end gap-2 h-24">
            {wochenDaten.map((d) => (
              <div key={d.datum} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col justify-end h-16">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(d.minuten / maxMinuten) * 100}%` }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className={`w-full rounded-t-md ${
                      d.minuten > 0 ? "bg-[var(--lern-accent)]" : "bg-[var(--lern-divider)]"
                    }`}
                    style={{ minHeight: d.minuten > 0 ? "4px" : "2px" }}
                  />
                </div>
                <span className="text-[10px] text-[var(--lern-text-tertiary)]">{d.tag}</span>
                {d.minuten > 0 && (
                  <span className="text-[9px] font-medium text-[var(--lern-accent)]">
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
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
          >
            <h2 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-4">
              Kompetenz-Übersicht
            </h2>
            <div className="space-y-3">
              {kompetenzDaten.map((k) => (
                <div key={k.name}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-[var(--lern-text-secondary)] truncate max-w-[200px]">{k.name}</span>
                    <span className="text-xs font-semibold text-[var(--lern-text-primary)]">
                      {k.wert}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--lern-bg)]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${k.wert}%` }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="h-full rounded-full bg-[var(--lern-accent)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Lernziel-Mastery (KompetenzRegister) */}
        {kompetenzRegisterStats && (
          <KompetenzUebersicht kompetenzRegisterStats={kompetenzRegisterStats} />
        )}

        {/* Stärken & Schwächen (Zwei-Achsen-Profil) */}
        {profil?.achsen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
          >
            <h2 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-4">
              Dein Profil
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[var(--lern-text-secondary)]">Sprachkompetenz</span>
                  <span className="text-xs font-semibold text-[var(--lern-text-primary)]">
                    {profil.achsen.sprache <= 2 ? "B1" : profil.achsen.sprache <= 3 ? "B2" : "C1"} ({profil.achsen.sprache}/5)
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[var(--lern-bg)]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(profil.achsen.sprache / 5) * 100}%` }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: profil.achsen.sprache >= 4 ? "#6B8F71" : profil.achsen.sprache >= 3 ? "#D4956A" : "#C96B5C" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-[var(--lern-text-secondary)]">Pflegefachwissen</span>
                  <span className="text-xs font-semibold text-[var(--lern-text-primary)]">
                    {profil.achsen.fachwissen <= 2 ? "Anf\u00e4nger" : profil.achsen.fachwissen <= 3 ? "Grundlagen" : "Fortgeschritten"} ({profil.achsen.fachwissen}/5)
                  </span>
                </div>
                <div className="h-2 rounded-full bg-[var(--lern-bg)]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(profil.achsen.fachwissen / 5) * 100}%` }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: profil.achsen.fachwissen >= 4 ? "#6B8F71" : profil.achsen.fachwissen >= 3 ? "#D4956A" : "#C96B5C" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Karteikarten (Schwächen) */}
        {faelligeKarten.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl bg-[#D4956A]/5 border border-[#D4956A]/20 p-5"
          >
            <h2 className="text-sm font-semibold text-[#D4956A] mb-3">
              Wiederholung fällig ({faelligeKarten.length})
            </h2>
            <div className="space-y-2">
              {faelligeKarten.slice(0, 5).map((k) => (
                <div
                  key={k.id}
                  className="rounded-xl bg-[var(--lern-bg-primary)] p-3 border border-[var(--lern-border)]/50"
                >
                  <p className="text-sm font-medium text-[var(--lern-text-primary)]">
                    {k.begriff}
                  </p>
                  <p className="text-xs text-[var(--lern-text-secondary)]">{k.fragetext}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Lernpfad */}
        <LernpfadSektion lernpfad={lernpfad} locale={locale} />
      </div>
    </div>
  );
}

// --- Empfehlungs-Karte ---

const EMPFEHLUNG_STYLES: Record<string, { bg: string; border: string; icon: string; label: string }> = {
  weiter: { bg: "bg-[var(--lern-accent)]", border: "", icon: "▶️", label: "Weitermachen" },
  "neue-session": { bg: "bg-[var(--lern-bg-primary)]", border: "border border-[var(--lern-accent)]/30", icon: "📖", label: "Nächste Session" },
  "neue-le": { bg: "bg-[var(--lern-bg-primary)]", border: "border border-[#6B8F71]/30", icon: "🆕", label: "Neue Lektion" },
  wiederholung: { bg: "bg-[#D4956A]/5", border: "border border-[#D4956A]/20", icon: "🔄", label: "Wiederholung" },
  challenge: { bg: "bg-[#9B7EA6]/5", border: "border border-[#9B7EA6]/20", icon: "⚡", label: "Challenge" },
};

function EmpfehlungsKarte({ empfehlung, delay }: { empfehlung: SessionEmpfehlung; delay: number }) {
  const locale = useLocale();
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
          <p className={`text-xs font-medium mb-0.5 ${isWeiter ? "text-white/80" : "text-[var(--lern-text-tertiary)]"}`}>
            {style.label}
          </p>
          <p className={`text-sm font-semibold ${isWeiter ? "text-white" : "text-[var(--lern-text-primary)]"}`}>
            {empfehlung.grund}
          </p>
          <p className={`text-xs mt-1 ${isWeiter ? "text-white/70" : "text-[var(--lern-text-tertiary)]"}`}>
            ~{empfehlung.geschaetzteMinuten} Min
          </p>
        </div>
      </div>
    </motion.div>
  );

  // Wiederholung hat kein Link-Ziel (wird in nächste Session eingebaut)
  if (isWiederholung) return content;

  return (
    <Link href={`/${locale}/lernen/${empfehlung.leId}`}>
      {content}
    </Link>
  );
}

// --- Prüfungsreife-Badge ---

function PruefungsreifeBadge() {
  const locale = useLocale();
  const pruefung = getPruefungsreife();
  const verfuegbar = getVerfuegbarePruefungen();

  if (verfuegbar.length === 0) return null;

  const farbe = pruefung
    ? pruefung.reife === "gruen" ? "#6B8F71" : pruefung.reife === "gelb" ? "#D4956A" : "#C96B5C"
    : "#86868b";
  const label = pruefung
    ? pruefung.reife === "gruen" ? "Pr\u00fcfungsreif" : pruefung.reife === "gelb" ? "Fast bereit" : "Noch \u00fcben"
    : "Noch nicht getestet";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 }}
    >
      <Link href={`/${locale}/pruefung`}>
        <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 transition-all active:scale-[0.98]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: farbe }}
              />
              <div>
                <p className="text-sm font-semibold text-[var(--lern-text-primary)]">
                  Pr\u00fcfungsreife
                </p>
                <p className="text-xs text-[var(--lern-text-secondary)]">{label}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {pruefung && (
                <span className="text-sm font-bold" style={{ color: farbe }}>
                  {pruefung.prozent}%
                </span>
              )}
              <span className="text-xs text-[var(--lern-accent)] font-medium">
                Pr\u00fcfung starten
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
