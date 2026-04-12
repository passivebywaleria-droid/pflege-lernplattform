"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt";
import { getAllLektionen } from "@/lib/content-loader";
import {
  generiereWochenplan,
  getAktuellerWochentagIndex,
  type WochenplanTag,
} from "@/lib/wochenplan";

const TAG_NAMEN: Record<string, string> = {
  Mo: "Montag",
  Di: "Dienstag",
  Mi: "Mittwoch",
  Do: "Donnerstag",
  Fr: "Freitag",
};

const TYP_FARBEN: Record<string, { bg: string; text: string; badge: string }> = {
  neu: { bg: "bg-[#C4877F]/5", text: "text-[#C4877F]", badge: "bg-[#C4877F]/10 text-[#C4877F]" },
  vertiefung: { bg: "bg-[#D4956A]/5", text: "text-[#D4956A]", badge: "bg-[#D4956A]/10 text-[#D4956A]" },
  wiederholung: { bg: "bg-[#6B8F71]/5", text: "text-[#6B8F71]", badge: "bg-[#6B8F71]/10 text-[#6B8F71]" },
};

const TYP_LABELS: Record<string, string> = {
  neu: "Neues Thema",
  vertiefung: "Vertiefung",
  wiederholung: "Wiederholung",
};

function TagKarte({
  tag,
  istHeute,
  index,
}: {
  tag: WochenplanTag;
  istHeute: boolean;
  index: number;
}) {
  const locale = useLocale();
  const t = useTranslations("wochenplan");
  const farben = TYP_FARBEN[tag.typ] ?? TYP_FARBEN.neu;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      className={`rounded-2xl border-2 transition-all ${
        istHeute
          ? "border-[#C4877F] shadow-lg shadow-[#C4877F]/10"
          : "border-transparent"
      } bg-[var(--lern-bg-primary)] p-5`}
    >
      {/* Tag-Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-bold ${istHeute ? "text-[#C4877F]" : "text-[var(--lern-text-primary)]"}`}>
            {TAG_NAMEN[tag.tag]}
          </span>
          {istHeute && (
            <span className="rounded-full bg-[#C4877F] px-2 py-0.5 text-[10px] font-semibold text-white">
              {t("today")}
            </span>
          )}
        </div>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${farben.badge}`}>
          {TYP_LABELS[tag.typ]}
        </span>
      </div>

      {/* Thema */}
      <h3 className="text-base font-semibold text-[var(--lern-text-primary)] mb-1">
        {tag.thema}
      </h3>
      <p className="text-xs text-[var(--lern-text-tertiary)] mb-3">
        {tag.ceId.replace("ce-", "CE ").toUpperCase()} &middot; {tag.sessions} Sessions
      </p>

      {/* Fortschritt */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-[var(--lern-text-tertiary)]">{t("progress")}</span>
          <span className="text-xs font-semibold text-[var(--lern-text-primary)]">{tag.fortschrittProzent}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-[var(--lern-bg)]">
          <motion.div
            className="h-full rounded-full bg-[#C4877F]"
            initial={{ width: 0 }}
            animate={{ width: `${tag.fortschrittProzent}%` }}
            transition={{ delay: index * 0.08 + 0.3, duration: 0.5 }}
          />
        </div>
      </div>

      {/* Starten-Button */}
      {istHeute && (
        <Link
          href={`/${locale}/lernen/${tag.leId}`}
          className="block w-full rounded-xl bg-[#C4877F] px-4 py-3 text-center text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
        >
          {t("startNow")}
        </Link>
      )}
    </motion.div>
  );
}

export default function WochenplanPage() {
  const t = useTranslations("wochenplan");
  const locale = useLocale();
  const { profil, loaded } = useLernFortschritt();
  const alleLektionen = getAllLektionen();

  const wochenplan = useMemo(() => {
    if (!loaded) return null;
    return generiereWochenplan(profil, alleLektionen);
  }, [loaded, profil, alleLektionen]);

  const heuteIndex = getAktuellerWochentagIndex();

  if (!loaded || !wochenplan) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--lern-bg)]">
        <div className="text-[var(--lern-text-tertiary)]">Laden...</div>
      </div>
    );
  }

  // Gesamtfortschritt der Woche
  const gesamtFortschritt = wochenplan.tage.length > 0
    ? Math.round(
        wochenplan.tage.reduce((sum, tag) => sum + tag.fortschrittProzent, 0) /
          wochenplan.tage.length,
      )
    : 0;

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-[var(--lern-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-2xl px-4 py-3">
          <div className="flex items-center justify-between">
            <Link
              href={`/${locale}/dashboard`}
              className="text-sm font-medium text-[#C4877F] active:opacity-60"
            >
              Zurück
            </Link>
            <h1 className="text-lg font-bold text-[var(--lern-text-primary)]">{t("title")}</h1>
            <div className="text-sm text-[var(--lern-text-tertiary)]">
              KW {wochenplan.kalenderwoche}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-6">
        {/* Wochen-Übersicht */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-2xl bg-[var(--lern-bg-primary)] p-5 shadow-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-bold text-[var(--lern-text-primary)]">
                {t("weekOverview")}
              </h2>
              <p className="text-sm text-[var(--lern-text-tertiary)]">
                {t("weekProgress", { percent: gesamtFortschritt })}
              </p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C4877F]/10">
              <span className="text-lg font-bold text-[#C4877F]">
                {gesamtFortschritt}%
              </span>
            </div>
          </div>

          {/* Wochentag-Punkte */}
          <div className="flex justify-between">
            {wochenplan.tage.map((tag, i) => (
              <div key={tag.tag} className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                    i === heuteIndex
                      ? "bg-[#C4877F] text-white"
                      : tag.fortschrittProzent >= 100
                        ? "bg-[#6B8F71] text-white"
                        : "bg-[var(--lern-bg)] text-[var(--lern-text-tertiary)]"
                  }`}
                >
                  {tag.tag}
                </div>
                <div
                  className={`h-1 w-6 rounded-full ${
                    tag.fortschrittProzent >= 100
                      ? "bg-[#6B8F71]"
                      : tag.fortschrittProzent > 0
                        ? "bg-[#C4877F]"
                        : "bg-[var(--lern-divider)]"
                  }`}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tages-Karten */}
        <div className="space-y-3">
          {wochenplan.tage.map((tag, index) => (
            <TagKarte
              key={tag.tag}
              tag={tag}
              istHeute={index === heuteIndex}
              index={index}
            />
          ))}
        </div>

        {/* Wochenende-Hinweis */}
        {heuteIndex === -1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 rounded-2xl bg-[#D4956A]/5 border border-[#D4956A]/20 p-5 text-center"
          >
            <span className="text-3xl mb-2 block">☀️</span>
            <p className="text-sm font-semibold text-[#D4956A]">
              {t("weekend")}
            </p>
            <p className="text-xs text-[var(--lern-text-tertiary)] mt-1">
              {t("weekendHint")}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
