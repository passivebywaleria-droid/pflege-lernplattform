"use client";

// „Erinnerst du dich?"-Intermezzo (PLAN-ADAPTIV-V1, Station ③): fragt einen
// wackeligen Kernfakt 2+ Steps später in ANDEREM Gewand ab (Spektrum-Transfer
// oder TrueFalse). Zählt NICHT im Schritt-Zähler. Ton: neugierig, nie prüfend.
// Richtig → eine dezente Zeile („Sitzt."). Falsch → Faustregel des Bausteins
// wird direkt gezeigt (Spickzettel-Kern), der Fakt bleibt wackelig.

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { RecheckFrage } from "@/lib/adaptive/recheck-generator";

interface RecheckIntermezzoProps {
  frage: RecheckFrage;
  sprachLevel: "c1" | "b1";
  onFertig: (richtig: boolean) => void;
}

export function RecheckIntermezzo({ frage, sprachLevel, onFertig }: RecheckIntermezzoProps) {
  const t = useTranslations("situation.recheck");
  const b1 = sprachLevel === "b1";
  const [gewaehlt, setGewaehlt] = useState<number | null>(null);

  const beantwortet = gewaehlt !== null;
  const richtig = beantwortet && gewaehlt === frage.richtigIndex;
  const faustregel = (b1 && frage.faustregelB1) || frage.faustregel;

  const optionen =
    frage.art === "spektrum" ? frage.optionen : [t("stimmt"), t("stimmtNicht")];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="pb-6"
    >
      <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-[var(--lern-accent)]">
        {t("titel")}
      </p>
      <p className="mb-4 text-xs text-[var(--lern-text-secondary)]">{t("untertitel")}</p>

      <p className="mb-2 text-sm font-semibold leading-relaxed text-[var(--lern-text-primary)]">
        {frage.art === "spektrum" ? t("frageSpektrum") : t("frageStimmt")}
      </p>
      <p className="mb-4 rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-3 text-sm italic leading-relaxed text-[var(--lern-text-primary)]">
        {frage.szenario}
      </p>

      <div className="space-y-2">
        {optionen.map((opt, i) => {
          const istRichtige = i === frage.richtigIndex;
          const istGewaehlt = gewaehlt === i;
          return (
            <button
              key={i}
              type="button"
              disabled={beantwortet}
              onClick={() => setGewaehlt(i)}
              className={`w-full rounded-2xl border-[1.5px] p-3 text-start text-sm leading-relaxed transition-all active:scale-[0.99] ${
                beantwortet && istRichtige
                  ? "border-[var(--lern-accent)] bg-[var(--lern-accent-bg)]"
                  : beantwortet && istGewaehlt
                    ? "border-[#D4956A]/70 bg-[#D4956A]/10"
                    : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)]"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {beantwortet && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
          {richtig ? (
            <p className="text-sm font-medium text-[var(--lern-text-primary)]">
              {t("sitzt")}
            </p>
          ) : (
            <>
              <p className="mb-2 text-sm text-[var(--lern-text-primary)]">
                {t("nochNicht")}
              </p>
              {faustregel && (
                <p className="border-s-[3px] border-[var(--lern-accent)] ps-3 text-sm font-bold leading-relaxed text-[var(--lern-text-primary)]">
                  {faustregel}
                </p>
              )}
            </>
          )}
          <button
            type="button"
            onClick={() => onFertig(richtig)}
            className="mt-4 block w-full rounded-xl bg-[var(--lern-accent)] px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-[#4C6A52]"
          >
            {t("weiter")}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
