"use client";

import { useMemo, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt";
import { getAllLektionen } from "@/lib/content-loader";

// 90-Tage Kalender-Heatmap
function KalenderHeatmap({ aktivitaeten }: { aktivitaeten: { datum: string; minutenAktiv: number }[] }) {
  const tage = useMemo(() => {
    const heute = new Date();
    const result: { datum: string; minuten: number; wochentag: number }[] = [];
    for (let i = 89; i >= 0; i--) {
      const date = new Date(heute);
      date.setDate(date.getDate() - i);
      const datum = date.toISOString().split("T")[0];
      const akt = aktivitaeten.find((a) => a.datum === datum);
      result.push({
        datum,
        minuten: akt?.minutenAktiv ?? 0,
        wochentag: date.getDay(),
      });
    }
    return result;
  }, [aktivitaeten]);

  const maxMinuten = Math.max(1, ...tage.map((t) => t.minuten));

  const getFarbe = (minuten: number) => {
    if (minuten === 0) return "bg-[var(--lern-bg)]";
    const intensitaet = minuten / maxMinuten;
    if (intensitaet > 0.75) return "bg-[var(--lern-accent)]";
    if (intensitaet > 0.5) return "bg-[var(--lern-accent)]/70";
    if (intensitaet > 0.25) return "bg-[var(--lern-accent)]/40";
    return "bg-[var(--lern-accent)]/20";
  };

  // In Wochen-Spalten aufteilen
  const wochen: typeof tage[] = [];
  let aktuelleWoche: typeof tage = [];
  for (const tag of tage) {
    aktuelleWoche.push(tag);
    if (tag.wochentag === 6 || tag === tage[tage.length - 1]) {
      wochen.push(aktuelleWoche);
      aktuelleWoche = [];
    }
  }

  return (
    <div className="flex gap-[3px] overflow-x-auto pb-2">
      {wochen.map((woche, wi) => (
        <div key={wi} className="flex flex-col gap-[3px]">
          {woche.map((tag) => (
            <div
              key={tag.datum}
              className={`w-3 h-3 rounded-sm ${getFarbe(tag.minuten)}`}
              title={`${tag.datum}: ${tag.minuten} Min`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// PDF-Export: Druckbares HTML öffnen
function erstelleLernzeitNachweis(
  gesamtMinuten: number,
  gesamtXp: number,
  gesamtTage: number,
  bearbeiteteLEs: { leId: string; title: string; xp: number; sessions: number; prozent: number; aktivStunden: string; letzteAktivitaet: string }[],
): void {
  const heute = new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const tabellenZeilen = bearbeiteteLEs.map((le) => `
    <tr>
      <td style="padding: 8px 12px; border-bottom: 1px solid #e5e5e5;">${le.leId.toUpperCase()}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #e5e5e5;">${le.title}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #e5e5e5; text-align: center;">${le.aktivStunden}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #e5e5e5; text-align: center;">${le.sessions}</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #e5e5e5; text-align: center;">${le.prozent}%</td>
      <td style="padding: 8px 12px; border-bottom: 1px solid #e5e5e5; text-align: center;">${le.letzteAktivitaet}</td>
    </tr>
  `).join("");

  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Lernzeit-Nachweis \u2014 Pflege-Lernplattform</title>
  <style>
    @media print {
      body { margin: 0; padding: 20px; }
      .no-print { display: none !important; }
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1d1d1f;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.5;
    }
    h1 { font-size: 24px; margin-bottom: 4px; }
    h2 { font-size: 16px; margin-top: 32px; margin-bottom: 12px; color: #6e6e73; }
    .subtitle { color: #6e6e73; font-size: 14px; }
    .stats { display: flex; gap: 24px; margin: 24px 0; }
    .stat { text-align: center; }
    .stat-value { font-size: 28px; font-weight: 700; color: #C4877F; }
    .stat-label { font-size: 12px; color: #6e6e73; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th {
      text-align: left;
      padding: 8px 12px;
      background: #f5f5f7;
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #6e6e73;
    }
    .footer {
      margin-top: 60px;
      padding-top: 20px;
      border-top: 1px solid #d2d2d7;
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #86868b;
    }
    .signature-line {
      margin-top: 40px;
      border-top: 1px solid #1d1d1f;
      width: 200px;
      padding-top: 4px;
      font-size: 11px;
      color: #6e6e73;
    }
    .print-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #C4877F;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>Lernzeit-Nachweis</h1>
  <p class="subtitle">Pflege-Lernplattform \u2014 Generalistische Pflegeausbildung</p>
  <p class="subtitle">Erstellt am: ${heute}</p>

  <div class="stats">
    <div class="stat">
      <div class="stat-value">${Math.round(gesamtMinuten / 60)}h ${gesamtMinuten % 60}m</div>
      <div class="stat-label">Aktive Lernzeit gesamt</div>
    </div>
    <div class="stat">
      <div class="stat-value" style="color: #D4956A;">${gesamtXp}</div>
      <div class="stat-label">Erfahrungspunkte</div>
    </div>
    <div class="stat">
      <div class="stat-value" style="color: #6B8F71;">${gesamtTage}</div>
      <div class="stat-label">Aktive Lerntage</div>
    </div>
  </div>

  <h2>Bearbeitete Lerneinheiten</h2>
  <table>
    <thead>
      <tr>
        <th>LE</th>
        <th>Thema</th>
        <th style="text-align: center;">Aktive Stunden</th>
        <th style="text-align: center;">Sessions</th>
        <th style="text-align: center;">Fortschritt</th>
        <th style="text-align: center;">Letzte Aktivit\u00e4t</th>
      </tr>
    </thead>
    <tbody>
      ${tabellenZeilen}
    </tbody>
  </table>

  <div class="footer">
    <div>
      <p>Pflege-Lernplattform</p>
      <p>Dieser Nachweis dokumentiert aktive Lernzeit (nicht nur Anwesenheit).</p>
    </div>
    <div style="text-align: right;">
      <div class="signature-line">Unterschrift Sch\u00fcler/in</div>
    </div>
  </div>

  <button class="print-btn no-print" onclick="window.print()">
    Als PDF speichern
  </button>
</body>
</html>`;

  const fenster = window.open("", "_blank");
  if (fenster) {
    fenster.document.write(html);
    fenster.document.close();
  }
}

export default function LernzeitPage() {
  const locale = useLocale();
  const { profil, loaded } = useLernFortschritt();
  const lektionen = getAllLektionen();

  // Wochen-Statistik (letzte 4 Wochen)
  const wochenStats = useMemo(() => {
    if (!profil) return [];
    const heute = new Date();
    const wochen: { label: string; minuten: number; xp: number }[] = [];

    for (let w = 3; w >= 0; w--) {
      let minuten = 0;
      let xp = 0;
      for (let d = 0; d < 7; d++) {
        const date = new Date(heute);
        date.setDate(date.getDate() - (w * 7 + d));
        const datum = date.toISOString().split("T")[0];
        const akt = profil.tagesAktivitaeten.find((a) => a.datum === datum);
        if (akt) {
          minuten += akt.minutenAktiv;
          xp += akt.xpVerdient;
        }
      }
      const start = new Date(heute);
      start.setDate(start.getDate() - (w * 7 + 6));
      const tag = start.getDate();
      const monat = start.toLocaleDateString("de-DE", { month: "short" });
      wochen.push({ label: `${tag}. ${monat}`, minuten, xp });
    }
    return wochen;
  }, [profil]);

  // Bearbeitete LEs mit aktivMinuten aus sessionLogs
  const bearbeiteteLEs = useMemo(() => {
    if (!profil) return [];

    // SessionLogs nach leId gruppieren
    const logsByLe = new Map<string, number>();
    for (const log of profil.sessionLogs ?? []) {
      logsByLe.set(log.leId, (logsByLe.get(log.leId) ?? 0) + log.aktivMinuten);
    }

    return Object.entries(profil.fortschritte).map(([leId, fort]) => {
      const le = lektionen.find((l) => l.leId === leId);
      const sessions = Object.values(fort.sessions);
      const gesamtSteps = sessions.reduce((s, sess) => s + sess.totalSteps, 0);
      const bearbeiteteSteps = sessions.reduce((s, sess) => s + sess.currentStep, 0);

      // Aktive Minuten: aus Logs oder geschätzt (5 Min pro Step)
      const aktivMinutenLog = logsByLe.get(leId) ?? 0;
      const geschaetzteMinuten = aktivMinutenLog > 0 ? aktivMinutenLog : bearbeiteteSteps * 5;

      const h = Math.floor(geschaetzteMinuten / 60);
      const m = geschaetzteMinuten % 60;
      const aktivStunden = h > 0 ? `${h}h ${m}m` : `${m}m`;

      return {
        leId,
        title: le?.title ?? leId,
        ceId: le?.ceId ?? "",
        xp: fort.gesamtXp,
        sessions: sessions.length,
        prozent: gesamtSteps > 0 ? Math.round((bearbeiteteSteps / gesamtSteps) * 100) : 0,
        letzteAktivitaet: fort.letzteAktivitaet,
        aktivMinuten: geschaetzteMinuten,
        aktivStunden,
      };
    }).sort((a, b) => b.letzteAktivitaet.localeCompare(a.letzteAktivitaet));
  }, [profil, lektionen]);

  // Gesamt-Statistiken
  const gesamtMinuten = profil?.tagesAktivitaeten.reduce((s, a) => s + a.minutenAktiv, 0) ?? 0;
  const gesamtXp = profil?.gesamtXp ?? 0;
  const gesamtTage = profil?.tagesAktivitaeten.filter((a) => a.minutenAktiv > 0).length ?? 0;
  const maxWochenMinuten = Math.max(1, ...wochenStats.map((w) => w.minuten));

  // PDF-Export
  const handleExport = useCallback(() => {
    const formattedLEs = bearbeiteteLEs.map((le) => ({
      ...le,
      letzteAktivitaet: new Date(le.letzteAktivitaet).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    }));
    erstelleLernzeitNachweis(gesamtMinuten, gesamtXp, gesamtTage, formattedLEs);
  }, [bearbeiteteLEs, gesamtMinuten, gesamtXp, gesamtTage]);

  if (!loaded) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--lern-accent)] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
      {/* Header */}
      <div className="bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Lernzeit</h1>
              <p className="text-sm text-[var(--lern-text-secondary)]">Dein Aktivit&auml;ts-Nachweis</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleExport}
                className="rounded-xl bg-[var(--lern-accent)] px-4 py-2 text-sm font-semibold text-white transition-all active:scale-[0.98]"
              >
                PDF exportieren
              </button>
              <Link
                href={`/${locale}/dashboard`}
                className="text-sm text-[var(--lern-accent)] font-medium"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-6 space-y-6">
        {/* Gesamt-Stats */}
        <div className="grid grid-cols-3 gap-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 text-center"
          >
            <p className="text-xs text-[var(--lern-text-secondary)]">Gesamt</p>
            <p className="text-2xl font-bold text-[var(--lern-accent)]">
              {Math.round(gesamtMinuten / 60)}h {gesamtMinuten % 60}m
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 text-center"
          >
            <p className="text-xs text-[var(--lern-text-secondary)]">Gesamt-XP</p>
            <p className="text-2xl font-bold text-[#D4956A]">{gesamtXp}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 text-center"
          >
            <p className="text-xs text-[var(--lern-text-secondary)]">Aktive Tage</p>
            <p className="text-2xl font-bold text-[#6B8F71]">{gesamtTage}</p>
          </motion.div>
        </div>

        {/* Kalender-Heatmap (90 Tage) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
        >
          <h2 className="text-sm font-semibold mb-4">Letzte 90 Tage</h2>
          <KalenderHeatmap aktivitaeten={profil?.tagesAktivitaeten ?? []} />
          <div className="flex items-center justify-end gap-1.5 mt-3">
            <span className="text-[10px] text-[var(--lern-text-secondary)]">Weniger</span>
            <div className="w-3 h-3 rounded-sm bg-[var(--lern-accent)]/20" />
            <div className="w-3 h-3 rounded-sm bg-[var(--lern-accent)]/40" />
            <div className="w-3 h-3 rounded-sm bg-[var(--lern-accent)]/70" />
            <div className="w-3 h-3 rounded-sm bg-[var(--lern-accent)]" />
            <span className="text-[10px] text-[var(--lern-text-secondary)]">Mehr</span>
          </div>
        </motion.div>

        {/* Stunden pro Woche */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
        >
          <h2 className="text-sm font-semibold mb-4">Stunden pro Woche</h2>
          <div className="flex items-end gap-3 h-24">
            {wochenStats.map((w) => (
              <div key={w.label} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col justify-end h-16">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(w.minuten / maxWochenMinuten) * 100}%` }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className={`w-full rounded-t-md ${w.minuten > 0 ? "bg-[var(--lern-accent)]" : "bg-[var(--lern-divider)]"}`}
                    style={{ minHeight: w.minuten > 0 ? "4px" : "2px" }}
                  />
                </div>
                <span className="text-[10px] text-[var(--lern-text-tertiary)]">{w.label}</span>
                {w.minuten > 0 && (
                  <span className="text-[9px] font-medium text-[var(--lern-accent)]">
                    {Math.round(w.minuten / 60)}h {w.minuten % 60}m
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CE/LE-Tabelle */}
        {bearbeiteteLEs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold">Bearbeitete Lerneinheiten</h2>
              <span className="text-xs text-[var(--lern-text-secondary)]">
                {bearbeiteteLEs.length} LE{bearbeiteteLEs.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Tabelle: Mobile = Karten, Desktop = Tabelle */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--lern-border)]">
                    <th className="text-left py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-secondary)]">LE</th>
                    <th className="text-left py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-secondary)]">Thema</th>
                    <th className="text-center py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-secondary)]">Aktive Zeit</th>
                    <th className="text-center py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-secondary)]">Sessions</th>
                    <th className="text-center py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-secondary)]">Fortschritt</th>
                    <th className="text-center py-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-secondary)]">Letzte Aktivit&auml;t</th>
                  </tr>
                </thead>
                <tbody>
                  {bearbeiteteLEs.map((le) => (
                    <tr key={le.leId} className="border-b border-[var(--lern-divider)] hover:bg-[var(--lern-bg)]/50">
                      <td className="py-2.5 px-2 font-medium">{le.leId.toUpperCase()}</td>
                      <td className="py-2.5 px-2 truncate max-w-[200px]">{le.title}</td>
                      <td className="py-2.5 px-2 text-center text-[var(--lern-accent)] font-semibold">{le.aktivStunden}</td>
                      <td className="py-2.5 px-2 text-center text-[var(--lern-text-secondary)]">{le.sessions}</td>
                      <td className="py-2.5 px-2 text-center">
                        <span
                          className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: le.prozent >= 80 ? "#6B8F7115" : le.prozent >= 40 ? "#D4956A15" : "#f5f5f7",
                            color: le.prozent >= 80 ? "#6B8F71" : le.prozent >= 40 ? "#D4956A" : "#6e6e73",
                          }}
                        >
                          {le.prozent}%
                        </span>
                      </td>
                      <td className="py-2.5 px-2 text-center text-xs text-[var(--lern-text-secondary)]">
                        {new Date(le.letzteAktivitaet).toLocaleDateString("de-DE", {
                          day: "2-digit",
                          month: "2-digit",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: Karten */}
            <div className="sm:hidden space-y-3">
              {bearbeiteteLEs.map((le) => (
                <Link key={le.leId} href={`/${locale}/lernen/${le.leId}`}>
                  <div className="flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-[var(--lern-bg)] active:scale-[0.99]">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{le.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[var(--lern-accent)] font-semibold">{le.aktivStunden}</span>
                        <span className="text-xs text-[var(--lern-text-secondary)]">{le.sessions} Sessions</span>
                        <span className="text-xs text-[var(--lern-text-secondary)]">{le.xp} XP</span>
                      </div>
                      <div className="mt-1.5 h-1.5 rounded-full bg-[var(--lern-bg)]">
                        <div
                          className="h-full rounded-full bg-[#6B8F71]"
                          style={{ width: `${le.prozent}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[var(--lern-text-secondary)]">{le.prozent}%</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* Hinweis zu PDF */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl bg-[var(--lern-accent)]/5 border border-[var(--lern-accent)]/20 p-4"
        >
          <p className="text-sm text-[var(--lern-accent)] font-medium">Lernzeit-Nachweis f&uuml;r die Schule</p>
          <p className="text-xs text-[var(--lern-text-secondary)] mt-1">
            Klicke auf &quot;PDF exportieren&quot; um einen druckbaren Nachweis deiner aktiven Lernzeit zu erstellen.
            Dieser dokumentiert nur tats&auml;chliche Interaktion, nicht Anwesenheit.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
