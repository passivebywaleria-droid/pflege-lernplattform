"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  mockSchueler,
  schwierigsteThemen,
  berechneKlassenStatistiken,
  type SchuelerStatus,
} from "@/lib/mock/lehrer-daten";
import { getMockLehrerNachrichten } from "@/components/learn/lehrer-chat";

/** Status-Badge mit Farb-Kodierung */
function StatusBadge({ status, label }: { status: SchuelerStatus; label: string }) {
  const farbe =
    status === "aktiv"
      ? "bg-[#6B8F71]/10 text-[#4A7350]"
      : status === "inaktiv"
        ? "bg-[#D4956A]/10 text-[#B07A52]"
        : "bg-[#C96B5C]/10 text-[#A0584C]";

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${farbe}`}>
      {status === "aktiv" && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#6B8F71] mr-1.5" />
      )}
      {status === "brauchtHilfe" && (
        <span className="w-1.5 h-1.5 rounded-full bg-[#C96B5C] mr-1.5 animate-pulse" />
      )}
      {label}
    </span>
  );
}

/** Fortschrittsbalken */
function FortschrittsBalken({ prozent }: { prozent: number }) {
  const farbe =
    prozent >= 70
      ? "bg-[#6B8F71]"
      : prozent >= 40
        ? "bg-[#D4956A]"
        : "bg-[#C96B5C]";

  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-[var(--lern-bg)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${prozent}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`h-full rounded-full ${farbe}`}
        />
      </div>
      <span className="text-xs font-medium text-[var(--lern-text-primary)]/60 w-8 text-right">
        {prozent}%
      </span>
    </div>
  );
}

/** Statistik-Karte */
function StatKarte({
  label,
  wert,
  icon,
  farbe,
}: {
  label: string;
  wert: string | number;
  icon: React.ReactNode;
  farbe: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 p-4 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${farbe}`}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-[var(--lern-text-primary)]">{wert}</p>
          <p className="text-xs text-[#8e8e93]">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function LehrerDashboardPage() {
  const t = useTranslations("lehrer");

  const stats = useMemo(() => berechneKlassenStatistiken(mockSchueler), []);
  const lehrerNachrichten = useMemo(() => getMockLehrerNachrichten(), []);

  function statusLabel(status: SchuelerStatus): string {
    if (status === "aktiv") return t("aktiv");
    if (status === "inaktiv") return t("inaktiv");
    return t("brauchtHilfe");
  }

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
      {/* Header */}
      <div className="sticky top-0 z-40 bg-[var(--lern-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--lern-border)]">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">{t("title")}</h1>
          <p className="text-sm text-[#8e8e93]">
            {stats.gesamt} {t("schueler")}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6 space-y-6 pb-24">
        {/* === Statistik-Karten === */}
        <div className="grid grid-cols-2 gap-3">
          <StatKarte
            label={t("durchschnittlicherFortschritt")}
            wert={`${stats.durchschnitt}%`}
            farbe="bg-[var(--lern-accent)]/10"
            icon={
              <svg className="w-5 h-5 text-[var(--lern-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="m7 11 4-4 4 4 5-5" />
              </svg>
            }
          />
          <StatKarte
            label={t("aktiv")}
            wert={stats.aktive.length}
            farbe="bg-[#6B8F71]/10"
            icon={
              <svg className="w-5 h-5 text-[#6B8F71]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <StatKarte
            label={t("inaktiv")}
            wert={stats.inaktive.length}
            farbe="bg-[#D4956A]/10"
            icon={
              <svg className="w-5 h-5 text-[#D4956A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            }
          />
          <StatKarte
            label={t("brauchtHilfe")}
            wert={stats.brauchenHilfe.length}
            farbe="bg-[#C96B5C]/10"
            icon={
              <svg className="w-5 h-5 text-[#C96B5C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>
            }
          />
        </div>

        {/* === Neue Nachrichten === */}
        {lehrerNachrichten.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-[var(--lern-bg-primary)] rounded-2xl border-2 border-[#6B8F71]/20 shadow-sm p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#6B8F71]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#6B8F71]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2 className="text-base font-semibold">{t("neueNachrichten")}</h2>
              <span className="ml-auto px-2 py-0.5 rounded-full bg-[#6B8F71]/10 text-[#4A7350] text-xs font-bold">
                {lehrerNachrichten.length}
              </span>
            </div>

            <div className="space-y-2.5">
              {lehrerNachrichten.map((msg) => (
                <div key={msg.id} className="rounded-xl bg-[var(--lern-bg)] p-3">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-sm font-medium">{msg.text.length > 80 ? msg.text.slice(0, 80) + "..." : msg.text}</p>
                  </div>
                  {msg.kontext && (
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-[var(--lern-accent)]/5 text-[var(--lern-accent)] text-xs font-medium">
                        {msg.kontext.ceId?.replace("ce-", "CE ")} — {msg.kontext.thema ?? "Allgemein"}
                      </span>
                      <span className="text-xs text-[#8e8e93]">
                        {formatNachrichtZeit(msg.zeit)}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* === Klassenübersicht — Tabelle === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 shadow-sm overflow-hidden"
        >
          <div className="px-4 py-3 border-b border-[var(--lern-divider)]">
            <h2 className="text-base font-semibold">{t("klasseUebersicht")}</h2>
          </div>

          {/* Desktop-Tabelle */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-[#8e8e93] border-b border-[var(--lern-divider)]">
                  <th className="text-left px-4 py-2 font-medium">{t("name")}</th>
                  <th className="text-left px-4 py-2 font-medium">{t("letzterLogin")}</th>
                  <th className="text-left px-4 py-2 font-medium w-40">{t("fortschritt")}</th>
                  <th className="text-left px-4 py-2 font-medium">{t("aktiveCE")}</th>
                  <th className="text-left px-4 py-2 font-medium">{t("status")}</th>
                </tr>
              </thead>
              <tbody>
                {mockSchueler.map((s) => (
                  <tr key={s.id} className="border-b border-[var(--lern-divider)] last:border-0 hover:bg-[var(--lern-bg)] transition-colors">
                    <td className="px-4 py-3 font-medium">{s.name}</td>
                    <td className="px-4 py-3 text-[#8e8e93]">{s.letzterLogin}</td>
                    <td className="px-4 py-3">
                      <FortschrittsBalken prozent={s.fortschritt} />
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-md bg-[var(--lern-accent)]/5 text-[var(--lern-accent)] text-xs font-medium">
                        {s.aktiveCE}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={s.status} label={statusLabel(s.status)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile-Karten */}
          <div className="sm:hidden divide-y divide-[var(--lern-bg)]">
            {mockSchueler.map((s) => (
              <div key={s.id} className="px-4 py-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-medium text-sm">{s.name}</span>
                  <StatusBadge status={s.status} label={statusLabel(s.status)} />
                </div>
                <FortschrittsBalken prozent={s.fortschritt} />
                <div className="flex items-center justify-between mt-1.5 text-xs text-[#8e8e93]">
                  <span>{s.letzterLogin}</span>
                  <span className="px-2 py-0.5 rounded-md bg-[var(--lern-accent)]/5 text-[var(--lern-accent)] font-medium">
                    {s.aktiveCE}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === Aktivste Schüler === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 shadow-sm p-4"
        >
          <h2 className="text-base font-semibold mb-3">{t("aktivsteSchueler")}</h2>
          <div className="space-y-2.5">
            {stats.aktivste.map((s, i) => (
              <div key={s.id} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  i === 0 ? "bg-[#BFA48E]/20 text-[#8B6F55]" :
                  i === 1 ? "bg-[var(--lern-border)]/30 text-[#636366]" :
                  "bg-[#C97B2A]/10 text-[#C97B2A]"
                }`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="text-xs text-[#8e8e93]">{s.streak} Tage Streak</p>
                </div>
                <span className="text-sm font-semibold text-[var(--lern-accent)]">
                  {s.fortschritt}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === Schwierigste Themen === */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 shadow-sm p-4"
        >
          <h2 className="text-base font-semibold mb-3">{t("schwierigsteThemen")}</h2>
          <div className="space-y-3">
            {schwierigsteThemen.map((thema) => (
              <div
                key={thema.thema}
                className="rounded-xl bg-[var(--lern-bg)] p-3"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="text-sm font-medium">{thema.thema}</p>
                  <span className="shrink-0 px-2 py-0.5 rounded-md bg-[#C96B5C]/10 text-[#C96B5C] text-xs font-medium">
                    {thema.fehlversuche} {t("fehlversuche")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--lern-accent)] font-medium">{thema.ce}</span>
                  <span className="text-xs text-[#8e8e93]">
                    {thema.betroffeneSchueler.length} {t("schueler")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === Braucht-Hilfe-Bereich === */}
        {stats.brauchenHilfe.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[var(--lern-bg-primary)] rounded-2xl border-2 border-[#C96B5C]/20 shadow-sm p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#C96B5C]/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#C96B5C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <h2 className="text-base font-semibold">{t("hilfeBereich")}</h2>
            </div>

            <div className="space-y-2.5 mb-3">
              {stats.brauchenHilfe.map((s) => (
                <div key={s.id} className="flex items-center justify-between rounded-xl bg-[#C96B5C]/5 p-3">
                  <div>
                    <p className="text-sm font-medium">{s.name}</p>
                    <p className="text-xs text-[#8e8e93]">{s.aktiveCE} &middot; {s.fortschritt}%</p>
                  </div>
                  <span className="text-xs text-[#C96B5C] font-medium">
                    {s.tageInaktiv > 0 ? `${s.tageInaktiv}d inaktiv` : ""}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#D4956A]/5 border border-[#D4956A]/20 p-3">
              <p className="text-xs text-[#B07A52] leading-relaxed">
                {t("hilfeEmpfehlung")}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/** Zeit formatieren für Nachrichten */
function formatNachrichtZeit(isoString: string): string {
  try {
    const date = new Date(isoString);
    const jetzt = new Date();
    const diffMs = jetzt.getTime() - date.getTime();
    const diffMin = Math.floor(diffMs / 60000);

    if (diffMin < 1) return "gerade eben";
    if (diffMin < 60) return `vor ${diffMin} Min`;

    const diffStunden = Math.floor(diffMin / 60);
    if (diffStunden < 24) return `vor ${diffStunden} Std`;

    return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });
  } catch {
    return "";
  }
}
