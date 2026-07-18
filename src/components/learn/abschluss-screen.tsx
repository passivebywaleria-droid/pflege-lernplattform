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

interface AbschlussScreenProps {
  situation: Lernsituation;
  daten: AbschlussDaten;
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
}: {
  baustein: AbschlussBaustein;
  b1: boolean;
  aufdeckenLabel: string;
  nochmalLabel: string;
  fallbackFrage: string;
}) {
  const [offen, setOffen] = useState(false);
  const frage =
    (b1 && baustein.abrufFrageB1) || baustein.abrufFrage || fallbackFrage;
  const regel = (b1 && baustein.faustregelB1) || baustein.faustregel;

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

export function AbschlussScreen({
  situation,
  daten,
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

  const abschlussText =
    (b1 && situation.abschlussTextB1) ||
    situation.abschlussText ||
    ((b1 && situation.titelB1) || situation.titel);

  const wacklige = daten.bausteine.filter((b) => b.wacklig);
  const wackligeNamen = wacklige.map(
    (b) => (b1 && b.titelB1) || b.titel
  );
  // Schwächen-Zeile (Ton C1 Coach) — nur mit vollständigen Session-Daten,
  // sonst kein Block (nie raten, nie „alles super" lügen).
  const zeigeEhrlich = antwortDatenVollstaendig && daten.beantwortet > 0;
  let ehrlichText: string | null = null;
  if (zeigeEhrlich) {
    if (daten.falsch === 0) {
      ehrlichText = t("alleRichtig");
    } else if (wackligeNamen.length > 0) {
      ehrlichText = t("schwaechen", {
        liste: wackligeNamen.join(" · "),
      });
    } else {
      ehrlichText = t("schwaechenOhneNamen");
    }
  }

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
      </div>

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
