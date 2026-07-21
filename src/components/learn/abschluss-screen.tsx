"use client";

// Abschluss-Screen der Situation (specs/ENTWURF-ABSCHLUSS-SCREEN.md, Waleria
// 2026-07-18: B-Abruf + Ton C1 Coach + dezente Gast-Zeile).
// Ehrlichkeits-Regeln: Schwächen-Block nur bei vollständigen Session-Daten,
// ehrliches Lob nur bei wirklich 0 Fehlern, kein Karten-Versprechen.

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Lernsituation } from "../../../content/_types";
import type { AbschlussDaten, AbschlussBaustein } from "@/lib/learn/abschluss-daten";
import { achsenBeschreibung } from "@/lib/adaptive/lern-profil";
import type { SituationsProfilAggregat } from "@/hooks/use-lern-fortschritt";

interface AbschlussScreenProps {
  situation: Lernsituation;
  daten: AbschlussDaten;
  /**
   * Aggregiertes „schärfer werdendes" Zwei-Achsen-Profil über alle Situationen.
   * null = keine/unvollständige Daten → Block wird nicht gezeigt.
   */
  profilAggregat?: SituationsProfilAggregat | null;
  /** Tages-Streak (geteilter Store). 0 = ausblenden. */
  streakTage?: number;
  /** false = Session lief nicht von Step 1 (Resume) → keine Schwächen-Aussage. */
  antwortDatenVollstaendig: boolean;
  sprachLevel: "c1" | "b1";
  isGuest: boolean;
  naechsteSituation: Lernsituation | null;
  gesamtSteps: number;
  locale: string;
  ceId: string;
}

function AbrufKarte({
  baustein,
  b1,
  aufdeckenLabel,
  nochmalLabel,
  fallbackFrage,
  ganzerBausteinLabel,
}: {
  baustein: AbschlussBaustein;
  b1: boolean;
  aufdeckenLabel: string;
  nochmalLabel: string;
  fallbackFrage: string;
  ganzerBausteinLabel: string;
}) {
  const [offen, setOffen] = useState(false);
  const frage =
    (b1 && baustein.abrufFrageB1) || baustein.abrufFrage || fallbackFrage;
  const regel = (b1 && baustein.faustregelB1) || baustein.faustregel;
  const kerntext = (b1 && baustein.kerntextB1) || baustein.kerntext;

  return (
    <div
      className={`mb-2 rounded-2xl border-[1.5px] p-3 text-start ${
        baustein.wacklig
          ? "border-[#D4956A]/60 bg-[#D4956A]/10"
          : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)]"
      }`}
    >
      {baustein.wacklig && (
        <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#D4956A]">
          {nochmalLabel}
        </p>
      )}
      {offen ? (
        <>
          <p className="text-xs text-[var(--lern-text-secondary)]">{frage}</p>
          <p className="mt-2 border-s-[3px] border-[var(--lern-accent)] ps-3 text-sm font-bold leading-relaxed text-[var(--lern-text-primary)]">
            {regel}
          </p>
          {/* Die Faustregel ist ein Destillat — das VOLLSTÄNDIGE, literatur-
              gegengelesene Wissen (Zahlen, Technik) steht im Kerntext,
              wortgleich. Kein Karten-Ende beim Halbwissen. */}
          {kerntext && (
            <details className="mt-2">
              <summary className="cursor-pointer text-xs font-medium text-[var(--lern-text-secondary)] underline decoration-dotted underline-offset-2">
                {ganzerBausteinLabel}
              </summary>
              <div className="mt-2 space-y-2">
                {kerntext.split(/\n\n+/).map((absatz, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-[var(--lern-text-primary)]"
                  >
                    {absatz}
                  </p>
                ))}
              </div>
            </details>
          )}
        </>
      ) : (
        <button
          type="button"
          onClick={() => setOffen(true)}
          aria-expanded={false}
          className="w-full text-start"
        >
          <span className="text-sm font-semibold text-[var(--lern-text-primary)]">
            {frage}
          </span>
          <span className="mt-1 block text-xs text-[var(--lern-text-secondary)]">
            {aufdeckenLabel}
          </span>
        </button>
      )}
    </div>
  );
}

/** Ein Achsen-Balken (5 Stufen). `faint` = Profil noch im Aufbau (gedämpft). */
function AchsenBalken({
  label,
  wert,
  beschreibung,
  faint,
}: {
  label: string;
  wert: number;
  beschreibung?: string | null;
  faint?: boolean;
}) {
  const stufen = Math.max(1, Math.min(5, Math.round(wert)));
  return (
    <div>
      <span className="text-sm font-semibold text-[var(--lern-text-primary)]">
        {label}
      </span>
      <div className="mt-1.5 flex gap-1" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${
              i <= stufen
                ? faint
                  ? "bg-[var(--lern-accent)]/40"
                  : "bg-[var(--lern-accent)]"
                : "bg-[var(--lern-border)]"
            }`}
          />
        ))}
      </div>
      {beschreibung && (
        <span className="mt-1 block text-xs text-[var(--lern-text-secondary)]">
          {beschreibung}
        </span>
      )}
    </div>
  );
}

export function AbschlussScreen({
  situation,
  daten,
  profilAggregat,
  streakTage,
  antwortDatenVollstaendig,
  sprachLevel,
  isGuest,
  naechsteSituation,
  gesamtSteps,
  locale,
  ceId,
}: AbschlussScreenProps) {
  const t = useTranslations("situation.abschluss");
  const tSit = useTranslations("situation");
  const b1 = sprachLevel === "b1";

  // Schärfer werdendes Profil: erst ab genug Situationen ein hartes Niveau,
  // vorher nur ein sich formendes Bild (Ehrlichkeit + Progress-Psychologie).
  const ZIEL_SITUATIONEN = 4;
  const agg =
    profilAggregat &&
    antwortDatenVollstaendig &&
    daten.beantwortet > 0 &&
    profilAggregat.situationenAbsolviert > 0
      ? profilAggregat
      : null;
  const reife = agg ? Math.min(agg.situationenAbsolviert, ZIEL_SITUATIONEN) : 0;
  const scharf = agg ? agg.situationenAbsolviert >= ZIEL_SITUATIONEN : false;
  // Harte Niveau-Labels ERST wenn scharf — sonst kein Verdikt behaupten.
  const fwText =
    scharf && agg
      ? achsenBeschreibung({ sprache: 3, fachwissen: agg.fachwissen, letzteBerechnung: "" }).fachwissen
      : null;
  const spText =
    scharf && agg && agg.sprache !== null
      ? achsenBeschreibung({ sprache: agg.sprache, fachwissen: 3, letzteBerechnung: "" }).sprache
      : null;

  const abschlussText =
    (b1 && situation.abschlussTextB1) ||
    situation.abschlussText ||
    ((b1 && situation.titelB1) || situation.titel);

  // Ehrliche Zeile — nur mit vollständigen Session-Daten. Keine Fehler-LISTE
  // mehr (die stünde doppelt zu den 🟠-Karten oben); stattdessen ein kurzer,
  // ermutigender Zeiger — Ende auf Ermutigung (Sandwich-Prinzip).
  const zeigeEhrlich = antwortDatenVollstaendig && daten.beantwortet > 0;
  const ehrlichText: string | null = !zeigeEhrlich
    ? null
    : daten.falsch === 0
      ? t("alleRichtig")
      : t("schwaechenKurz");

  const teaser = naechsteSituation
    ? (b1 && naechsteSituation.teaserB1) ||
      naechsteSituation.teaser ||
      t("naechsteFallback", {
        titel:
          (b1 && naechsteSituation.titelB1) || naechsteSituation.titel,
      })
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-6"
    >
      {/* Kopf: ruhiger Haken + Story-Abschluss + Leistungszeile */}
      <div className="mb-6 text-center">
        <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[var(--lern-accent)]/40 bg-[var(--lern-accent-bg)]">
          <Check className="h-5 w-5 text-[var(--lern-accent)]" aria-hidden="true" />
        </span>
        <h2 className="text-base font-bold leading-relaxed text-[var(--lern-text-primary)] [text-wrap:balance]">
          {abschlussText}
        </h2>
        <p className="mt-1.5 text-xs text-[var(--lern-text-secondary)]">
          {t("leistung", { schritte: gesamtSteps })}
        </p>
        {typeof streakTage === "number" && streakTage > 0 && (
          <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#D4956A]/10 px-3 py-1 text-xs font-bold text-[#D4956A]">
            {streakTage >= 2
              ? t("streakTage", { tage: streakTage })
              : t("streakTag1")}
          </p>
        )}
      </div>

      {/* Dein Stand — das „schärfer werdende" Profil. Formt sich über mehrere
          Situationen, statt aus EINER Session ein hartes Verdikt zu behaupten
          (Ehrlichkeit + Progress-Psychologie + Wiederkommens-Sog). */}
      {agg && (
        <div className="mb-6">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[var(--lern-text-secondary)]">
            {scharf ? t("deinStand") : t("profilBautSichAuf")}
          </p>
          <div className="space-y-3 rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-3">
            <AchsenBalken
              label={t("achseFachwissen")}
              wert={agg.fachwissen}
              beschreibung={fwText}
              faint={!scharf}
            />
            {agg.sprache !== null ? (
              <AchsenBalken
                label={t("achseSprache")}
                wert={agg.sprache}
                beschreibung={spText}
                faint={!scharf}
              />
            ) : (
              <div>
                <span className="text-sm font-semibold text-[var(--lern-text-primary)]">
                  {t("achseSprache")}
                </span>
                <span className="mt-1 block text-xs text-[var(--lern-text-secondary)]">
                  {t("spracheKeinHindernis")}
                </span>
              </div>
            )}
            {/* Reife-Meter — der Zeigarnik-Sog: das Profil vervollständigen wollen */}
            <div className="border-t border-[var(--lern-border)] pt-3">
              <span className="text-xs font-medium text-[var(--lern-text-secondary)]">
                {t("genauigkeit")}
              </span>
              <div className="mt-1 flex gap-1" aria-hidden="true">
                {Array.from({ length: ZIEL_SITUATIONEN }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      i < reife ? "bg-[#D4956A]" : "bg-[var(--lern-border)]"
                    }`}
                  />
                ))}
              </div>
              {!scharf && (
                <span className="mt-1 block text-xs text-[var(--lern-text-secondary)]">
                  {t("nochSituationen", { anzahl: ZIEL_SITUATIONEN - reife })}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Recap: aktiver Abruf — Frage zuerst, Tap deckt die Faustregel wortgleich auf */}
      {daten.bausteine.length > 0 && (
        <>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-[var(--lern-text-secondary)]">
            {t("mitnehmen")}
          </p>
          {daten.bausteine.map((b) => (
            <AbrufKarte
              key={b.stepId}
              baustein={b}
              b1={b1}
              aufdeckenLabel={t("aufdecken")}
              nochmalLabel={t("nochmalAnsehen")}
              fallbackFrage={t("abrufFallback", {
                titel: (b1 && b.titelB1) || b.titel,
              })}
              ganzerBausteinLabel={t("ganzerBaustein")}
            />
          ))}
        </>
      )}

      {/* Ehrliche Zeile (C1 Coach) */}
      {ehrlichText && (
        <>
          <p className="mb-2 mt-5 text-[11px] font-bold uppercase tracking-widest text-[var(--lern-text-secondary)]">
            {t("ehrlich")}
          </p>
          <p className="rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-accent-bg)] p-3 text-sm leading-relaxed text-[var(--lern-text-primary)]">
            {ehrlichText}
          </p>
        </>
      )}

      {/* Ausblick: nächste Situation */}
      {teaser && (
        <>
          <p className="mb-2 mt-5 text-[11px] font-bold uppercase tracking-widest text-[var(--lern-text-secondary)]">
            {t("naechstes")}
          </p>
          <p className="rounded-2xl border-[1.5px] border-[var(--lern-accent)]/30 bg-[var(--lern-accent-bg)] p-3 text-sm leading-relaxed text-[var(--lern-text-primary)]">
            {teaser}
          </p>
        </>
      )}

      {/* Gast: dezente Konto-Zeile — verspricht nur, was existiert (Fortschritt) */}
      {isGuest && (
        <p className="mt-4 text-center text-xs text-[var(--lern-text-secondary)]">
          <Link
            href={`/${locale}/mitmachen?next=${encodeURIComponent(`/${locale}/lernen/ce/${ceId}`)}`}
            className="underline decoration-dotted underline-offset-2"
          >
            {t("gastZeile")}
          </Link>
        </p>
      )}

      <Link
        href={`/${locale}/lernen/ce/${ceId}`}
        className="mt-6 block w-full rounded-xl bg-[var(--lern-accent)] px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#4C6A52]"
      >
        {tSit("continueSituation")}
      </Link>
    </motion.div>
  );
}
