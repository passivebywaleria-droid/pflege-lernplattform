"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { getAllLektionen } from "@/lib/content-loader";
import type { LeManifestEntry } from "@/lib/content-loader";
import { useEinstufungsStatus } from "@/lib/einstufung/use-einstufung";
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt";
import {
  generiereWochenplan,
  getAktuellerWochentagIndex,
} from "@/lib/wochenplan";

// Farben pro CE
const CE_COLORS: Record<string, string> = {
  "ce-01": "var(--lern-accent)",
  "ce-02": "#D4956A",
  "ce-03": "#6B8F71",
  "ce-04": "#9B7EA6",
  "ce-05": "#C96B5C",
  "ce-06": "#8AABB5",
  "ce-07": "#B07A72",
  "ce-08": "#D4956A",
  "ce-09": "#6B8F71",
  "ce-10": "#9B7EA6",
  "ce-11": "#C96B5C",
};

const CE_LABELS: Record<string, string> = {
  "ce-01": "CE 01 — Ausbildungsstart",
  "ce-02": "CE 02 — Zu pflegende Menschen",
  "ce-03": "CE 03 — Erste Pflegeerfahrungen",
  "ce-04": "CE 04 — Gesundheit fördern",
  "ce-05": "CE 05 — Kurative Prozesse",
  "ce-06": "CE 06 — In Akutsituationen handeln",
  "ce-07": "CE 07 — Rehabilitatives Pflegen",
  "ce-08": "CE 08 — Menschen in kritischen Lebenssituationen",
  "ce-09": "CE 09 — Menschen in der letzten Lebensphase",
  "ce-10": "CE 10 — Kinder und Jugendliche pflegen",
  "ce-11": "CE 11 — Alte Menschen pflegen",
};

const STATUS_CONFIG: Record<string, { label: string; opacity: string; badge: string }> = {
  geprueft: { label: "Verfügbar", opacity: "opacity-100", badge: "bg-[#6B8F71] text-white" },
  steps: { label: "Verfügbar", opacity: "opacity-100", badge: "bg-[#6B8F71] text-white" },
  sessionplan: { label: "Entwurf", opacity: "opacity-70", badge: "bg-[#D4956A] text-white" },
  rohmaterial: { label: "In Planung", opacity: "opacity-50", badge: "bg-[#a09890] text-white" },
};

function LektionCard({ lektion, locale }: { lektion: LeManifestEntry; locale: string }) {
  const status = STATUS_CONFIG[lektion.status] ?? STATUS_CONFIG.rohmaterial;
  const isClickable = lektion.status === "geprueft" || lektion.status === "steps";
  const ceColor = CE_COLORS[lektion.ceId] ?? "var(--lern-accent)";

  const card = (
    <motion.div
      whileHover={isClickable ? { scale: 1.02 } : undefined}
      whileTap={isClickable ? { scale: 0.98 } : undefined}
      className={`rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 transition-shadow ${
        isClickable ? "cursor-pointer hover:shadow-lg" : "cursor-default"
      } ${status.opacity}`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold text-white"
            style={{ backgroundColor: ceColor }}
          >
            {lektion.leId.replace("le-", "").replace(/^0/, "")}
          </span>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${status.badge}`}>
            {status.label}
          </span>
        </div>
        <span className="text-xs text-[var(--lern-text-tertiary)]">{lektion.zeitrichtwert} UE</span>
      </div>

      <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-1 line-clamp-2">
        {lektion.title}
      </h3>

      <div className="flex items-center gap-2 text-[10px] text-[var(--lern-text-tertiary)]">
        <span>{lektion.sessions.length} Sessions</span>
        <span>·</span>
        <span>{lektion.ceId.replace("ce-", "CE ").toUpperCase()}</span>
      </div>
    </motion.div>
  );

  if (isClickable) {
    return <Link href={`/${locale}/lernen/${lektion.leId}`}>{card}</Link>;
  }
  return card;
}

export default function LernenUebersichtPage() {
  const locale = useLocale();
  const router = useRouter();
  const { hatEinstufung, loaded: einstufungLoaded } = useEinstufungsStatus();
  const { profil, loaded: profilLoaded } = useLernFortschritt();

  // Redirect zur Einstufung wenn noch nicht eingestuft
  useEffect(() => {
    if (einstufungLoaded && !hatEinstufung) {
      router.replace(`/${locale}/einstufung`);
    }
  }, [einstufungLoaded, hatEinstufung, router, locale]);

  const lektionen = getAllLektionen();

  // Wochenplan-Empfehlung
  const wochenplan = useMemo(() => {
    if (!profilLoaded) return null;
    return generiereWochenplan(profil, lektionen);
  }, [profilLoaded, profil, lektionen]);

  const heuteIndex = getAktuellerWochentagIndex();
  const heutigerTag = wochenplan?.tage[heuteIndex >= 0 ? heuteIndex : 0] ?? null;
  const empfohleneLE = heuteIndex >= 0 && heutigerTag
    ? lektionen.find((l) => l.leId === heutigerTag.leId)
    : null;

  // Gruppiere nach CE
  const ceGroups = lektionen.reduce<Record<string, LeManifestEntry[]>>((acc, l) => {
    if (!acc[l.ceId]) acc[l.ceId] = [];
    acc[l.ceId].push(l);
    return acc;
  }, {});

  const totalSessions = lektionen.reduce((sum, l) => sum + l.sessions.length, 0);
  const fertigCount = lektionen.filter((l) => l.status === "geprueft" || l.status === "steps").length;

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]">
      {/* Header */}
      <div className="bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-3xl px-4 py-8">
          <p className="text-xs font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-1">
            Pflege-Lernplattform
          </p>
          <h1 className="text-2xl font-bold text-[var(--lern-text-primary)] mb-2">
            Alle Lerneinheiten
          </h1>
          <p className="text-sm text-[var(--lern-text-secondary)] mb-4">
            {totalSessions} Sessions — {lektionen.length} Lerneinheiten
          </p>

          {/* Progress Overview */}
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="h-2 rounded-full bg-[var(--lern-bg)]">
                <div
                  className="h-full rounded-full bg-[#6B8F71] transition-all"
                  style={{ width: `${lektionen.length > 0 ? (fertigCount / lektionen.length) * 100 : 0}%` }}
                />
              </div>
            </div>
            <span className="text-xs font-semibold text-[var(--lern-text-secondary)]">
              {fertigCount}/{lektionen.length} verfügbar
            </span>
          </div>
        </div>
      </div>

      {/* Empfehlung für heute */}
      {empfohleneLE && heutigerTag && (
        <div className="mx-auto max-w-3xl px-4 pt-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/20 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-1">
                  Empfohlen für heute
                </p>
                <p className="text-sm font-semibold text-[var(--lern-text-primary)]">
                  {empfohleneLE.title}
                </p>
                <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">
                  {heutigerTag.typ === "neu" ? "Neues Thema" : heutigerTag.typ === "vertiefung" ? "Vertiefung" : "Wiederholung"}
                </p>
              </div>
              <Link
                href={`/${locale}/lernen/${empfohleneLE.leId}`}
                className="shrink-0 rounded-xl bg-[var(--lern-accent)] px-4 py-2.5 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
              >
                Starten
              </Link>
            </div>
          </motion.div>
        </div>
      )}

      {/* Themen-Filter (3 Säulen) */}
      <div className="mx-auto max-w-3xl px-4 pt-6">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-sm font-semibold text-[var(--lern-text-primary)]">Nach Thema üben</h2>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/${locale}/lernen/themen/anatomie`}
            className="flex-1 rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-3 text-center transition-shadow hover:shadow-md"
          >
            <span className="text-lg">🦴</span>
            <p className="text-xs font-semibold text-[var(--lern-text-primary)] mt-1">Anatomie</p>
          </Link>
          <Link
            href={`/${locale}/lernen/themen/pflege`}
            className="flex-1 rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-3 text-center transition-shadow hover:shadow-md"
          >
            <span className="text-lg">💊</span>
            <p className="text-xs font-semibold text-[var(--lern-text-primary)] mt-1">Pflege</p>
          </Link>
          <Link
            href={`/${locale}/lernen/themen/krankheitslehre`}
            className="flex-1 rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-3 text-center transition-shadow hover:shadow-md"
          >
            <span className="text-lg">🔬</span>
            <p className="text-xs font-semibold text-[var(--lern-text-primary)] mt-1">Krankheitslehre</p>
          </Link>
        </div>
      </div>

      {/* CE-Gruppen */}
      <div className="mx-auto max-w-3xl px-4 py-6 space-y-8">
        {Object.entries(ceGroups).map(([ceId, items]) => (
          <section key={ceId}>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold text-white"
                style={{ backgroundColor: CE_COLORS[ceId] ?? "var(--lern-accent)" }}
              >
                {ceId.replace("ce-0", "").replace("ce-", "")}
              </span>
              <h2 className="text-sm font-semibold text-[var(--lern-text-primary)]">
                {CE_LABELS[ceId] ?? ceId.toUpperCase()}
              </h2>
              <span className="text-xs text-[var(--lern-text-tertiary)]">
                {items.reduce((s, l) => s + l.sessions.length, 0)} Sessions
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {items.map((lektion) => (
                <LektionCard key={lektion.leId} lektion={lektion} locale={locale} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
