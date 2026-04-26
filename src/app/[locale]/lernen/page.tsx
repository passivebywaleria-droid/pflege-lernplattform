"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  getAllLektionen,
  getAllLektionenAsync,
  getAllCEs,
} from "@/lib/content-loader";
import type { LeManifestEntry } from "@/lib/content-loader";
import { useEinstufungsStatus } from "@/lib/einstufung/use-einstufung";
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt";
import {
  generiereWochenplan,
  getAktuellerWochentagIndex,
} from "@/lib/wochenplan";

export default function LernenUebersichtPage() {
  const locale = useLocale();
  const router = useRouter();
  const { hatEinstufung, loaded: einstufungLoaded } = useEinstufungsStatus();
  const { profil, loaded: profilLoaded } = useLernFortschritt();

  useEffect(() => {
    if (einstufungLoaded && !hatEinstufung) {
      router.replace(`/${locale}/einstufung`);
    }
  }, [einstufungLoaded, hatEinstufung, router, locale]);

  const [lektionen, setLektionen] = useState<LeManifestEntry[]>(
    getAllLektionen()
  );

  useEffect(() => {
    getAllLektionenAsync().then((les) => {
      if (les.length > 0) setLektionen(les);
    });
  }, []);

  const wochenplan = useMemo(() => {
    if (!profilLoaded) return null;
    return generiereWochenplan(profil, lektionen);
  }, [profilLoaded, profil, lektionen]);

  const heuteIndex = getAktuellerWochentagIndex();
  const heutigerTag =
    wochenplan?.tage[heuteIndex >= 0 ? heuteIndex : 0] ?? null;
  const empfohleneLE =
    heuteIndex >= 0 && heutigerTag
      ? lektionen.find((l) => l.leId === heutigerTag.leId)
      : null;

  const ces = getAllCEs();
  const fertigCount = lektionen.filter(
    (l) =>
      l.status === "geprueft" ||
      l.status === "steps" ||
      l.status === "published"
  ).length;

  return (
    <div className="min-h-screen bg-[var(--lern-bg)] pb-24">
      {/* Header — Bundle-Stil: schlank */}
      <header className="bg-[var(--lern-bg)] border-b border-[var(--lern-border)]">
        <div className="mx-auto max-w-3xl px-4 pt-4 pb-3.5">
          <div className="flex items-center justify-between mb-1">
            <h1 className="text-base font-semibold text-[var(--lern-text-primary)]">
              Lernen
            </h1>
            <span className="text-[10px] uppercase tracking-wider text-[var(--lern-text-tertiary)]">
              {fertigCount}/{lektionen.length}
            </span>
          </div>
          <div className="h-1 rounded-full bg-[var(--lern-border)]">
            <div
              className="h-full rounded-full bg-[var(--lern-accent)] transition-all"
              style={{
                width: `${
                  lektionen.length > 0
                    ? (fertigCount / lektionen.length) * 100
                    : 0
                }%`,
              }}
            />
          </div>
        </div>
      </header>

      {/* Empfehlung für heute */}
      {empfohleneLE && heutigerTag && (
        <div className="mx-auto max-w-3xl px-4 pt-4">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-[var(--lern-accent-bg)] border border-[var(--lern-accent)]/20 p-3 flex items-center gap-3"
          >
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-accent)]">
                Empfehlung
              </p>
              <p className="text-sm font-semibold text-[var(--lern-text-primary)] truncate">
                {empfohleneLE.title}
              </p>
            </div>
            <Link
              href={`/${locale}/lernen/${empfohleneLE.leId}`}
              className="shrink-0 rounded-lg bg-[var(--lern-accent)] px-3 py-2 text-xs font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#1A7359]"
            >
              Starten
            </Link>
          </motion.div>
        </div>
      )}

      {/* CE-Liste — Hauptansicht (Situationsbasiert) */}
      {ces.length > 0 && (
        <div className="mx-auto max-w-3xl px-4 pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-tertiary)] mb-2 px-1">
            Curriculum
          </p>
          <div className="flex flex-col gap-2">
            {ces.map((ce) => (
              <Link key={ce.ceId} href={`/${locale}/lernen/ce/${ce.ceId}`}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-3 py-3 cursor-pointer hover:shadow-sm transition-shadow"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--lern-accent-bg)] text-xs font-bold text-[var(--lern-accent)] tabular-nums shrink-0">
                    {ce.ceNumber.toString().padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] leading-tight truncate">
                      {ce.titelShort}
                    </h3>
                    <p className="text-[11px] text-[var(--lern-text-tertiary)] truncate mt-0.5">
                      {ce.themen.length} Themen · {ce.situationen.length}{" "}
                      Situationen · {ce.gesamtUE} UE
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 3-Säulen-Filter — kompakt unten */}
      <div className="mx-auto max-w-3xl px-4 pt-5">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-tertiary)] mb-2 px-1">
          Nach Wissensart
        </p>
        <div className="grid grid-cols-3 gap-2">
          <Link
            href={`/${locale}/lernen/themen/anatomie`}
            className="rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-2 py-2.5 text-center transition-shadow hover:shadow-sm"
          >
            <p className="text-xs font-semibold text-[var(--lern-text-primary)]">
              Anatomie
            </p>
          </Link>
          <Link
            href={`/${locale}/lernen/themen/pflege`}
            className="rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-2 py-2.5 text-center transition-shadow hover:shadow-sm"
          >
            <p className="text-xs font-semibold text-[var(--lern-text-primary)]">
              Pflege
            </p>
          </Link>
          <Link
            href={`/${locale}/lernen/themen/krankheitslehre`}
            className="rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-2 py-2.5 text-center transition-shadow hover:shadow-sm"
          >
            <p className="text-xs font-semibold text-[var(--lern-text-primary)]">
              Krankheits&shy;lehre
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
