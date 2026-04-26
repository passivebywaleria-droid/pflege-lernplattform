"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  getCeManifest,
  getAllLektionen,
} from "@/lib/content-loader";
import { loadSituationen as staticLoadSituationen } from "../../../../../../content/content-loader";
import type { Lernsituation } from "../../../../../../content/_types";
import { PatientAvatar } from "@/components/learn/patient-avatar";

type CeTab = "situationen" | "themen";

// Cluster-Zuordnung für Themen (synchron mit themen-katalog.md)
const THEMEN_CLUSTER: Record<string, { label: string }> = {
  pflegeprozess: { label: "Pflegeprozess" },
  pflegeplanung: { label: "Pflegeprozess" },
  pflegedokumentation: { label: "Pflegeprozess" },
  "assessments-expertenstandards": { label: "Pflegeprozess" },
  kinaesthetik: { label: "Mobilität" },
  positionierung: { label: "Mobilität" },
  mobilisation: { label: "Mobilität" },
  "dekubitus-prophylaxe": { label: "Mobilität" },
  "thrombose-prophylaxe": { label: "Mobilität" },
  "sturz-prophylaxe": { label: "Mobilität" },
  "kontraktur-prophylaxe": { label: "Mobilität" },
  "pneumonie-prophylaxe": { label: "Mobilität" },
  schlaf: { label: "Mobilität" },
  haut: { label: "Körperpflege" },
  ganzkörperpflege: { label: "Körperpflege" },
  mundpflege: { label: "Körperpflege" },
  saeuglingspflege: { label: "Körperpflege" },
  "basale-stimulation": { label: "Körperpflege" },
  ernaehrungsgrundlagen: { label: "Ernährung" },
  ernaehrungsassessment: { label: "Ernährung" },
  "essen-anreichen": { label: "Ernährung" },
  "enterale-ernaehrung": { label: "Ernährung" },
  harnausscheidung: { label: "Ausscheidung" },
  blasenkatheter: { label: "Ausscheidung" },
  stuhlausscheidung: { label: "Ausscheidung" },
};

function SituationCard({
  situation,
  locale,
  ceId,
}: {
  situation: Lernsituation;
  locale: string;
  ceId: string;
}) {
  return (
    <Link
      href={`/${locale}/lernen/situation/${situation.situationId}?ce=${ceId}`}
    >
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-3 py-3 cursor-pointer transition-shadow hover:shadow-sm"
      >
        {situation.patient ? (
          <PatientAvatar name={situation.patient.name} size={36} />
        ) : (
          <div className="h-9 w-9 shrink-0 rounded-full bg-[var(--lern-accent-bg)]" />
        )}

        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] leading-tight truncate">
            {situation.titel}
          </h3>
          <p className="text-[11px] text-[var(--lern-text-tertiary)] truncate mt-0.5">
            {situation.patient
              ? `${situation.patient.name} · ${situation.patient.setting}`
              : situation.themen.slice(0, 2).join(" · ")}
          </p>
        </div>

        <span className="text-[10px] tabular-nums uppercase tracking-wider text-[var(--lern-text-tertiary)] shrink-0">
          {situation.geschaetzteUE} UE
        </span>
      </motion.div>
    </Link>
  );
}

function ThemaCard({
  themaId,
  locale,
  ceId,
}: {
  themaId: string;
  locale: string;
  ceId: string;
}) {
  const label = themaId
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Link href={`/${locale}/lernen/thema/${themaId}?ce=${ceId}`}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-3 py-2.5 cursor-pointer hover:shadow-sm transition-shadow"
      >
        <h3 className="text-sm font-medium text-[var(--lern-text-primary)] leading-tight">
          {label}
        </h3>
      </motion.div>
    </Link>
  );
}

export default function CeDetailPage() {
  const locale = useLocale();
  const params = useParams();
  const ceId = params.ceId as string;
  const t = useTranslations("situation");
  const tNav = useTranslations("themaNav");

  const [tab, setTab] = useState<CeTab>("situationen");
  const [situationen, setSituationen] = useState<Lernsituation[]>([]);

  const ceManifest = getCeManifest(ceId);
  const leLektionen = getAllLektionen().filter((le) => le.ceId === ceId);

  useEffect(() => {
    staticLoadSituationen(ceId).then(setSituationen);
  }, [ceId]);

  if (!ceManifest) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <p className="text-[var(--lern-text-secondary)]">CE nicht gefunden.</p>
      </div>
    );
  }

  const themenByCluster = ceManifest.themen.reduce<Record<string, string[]>>(
    (acc, themaId) => {
      const cluster = THEMEN_CLUSTER[themaId]?.label ?? "Sonstige";
      if (!acc[cluster]) acc[cluster] = [];
      acc[cluster].push(themaId);
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen bg-[var(--lern-bg)] pb-24">
      {/* Header — Bundle-Stil: kompakt, ohne lange Subtitles */}
      <header className="bg-[var(--lern-bg)] border-b border-[var(--lern-border)]">
        <div className="mx-auto max-w-3xl px-4 pt-3 pb-3.5">
          <div className="flex items-center justify-between mb-2.5">
            <Link
              href={`/${locale}/lernen`}
              aria-label="Übersicht"
              className="text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)]"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <span className="text-[11px] uppercase tracking-wider text-[var(--lern-text-tertiary)]">
              CE {ceManifest.ceNumber.toString().padStart(2, "0")}
            </span>
            <span className="w-5" aria-hidden />
          </div>
          <h1 className="text-base font-semibold leading-tight text-[var(--lern-text-primary)]">
            {ceManifest.titel}
          </h1>
          <p className="text-[11px] text-[var(--lern-text-tertiary)] mt-0.5">
            {ceManifest.gesamtUE} UE · {ceManifest.themen.length} Themen ·{" "}
            {ceManifest.situationen.length} Situationen
          </p>
        </div>
      </header>

      {/* Tab-Leiste — schlanker */}
      <div className="mx-auto max-w-3xl px-4 pt-3">
        <div className="flex gap-4 border-b border-[var(--lern-border)]">
          <button
            onClick={() => setTab("situationen")}
            className={`px-1 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${
              tab === "situationen"
                ? "border-[var(--lern-accent)] text-[var(--lern-accent)]"
                : "border-transparent text-[var(--lern-text-tertiary)]"
            }`}
          >
            {t("title")}
          </button>
          <button
            onClick={() => setTab("themen")}
            className={`px-1 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px ${
              tab === "themen"
                ? "border-[var(--lern-accent)] text-[var(--lern-accent)]"
                : "border-transparent text-[var(--lern-text-tertiary)]"
            }`}
          >
            {tNav("title")}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-4">
        {tab === "situationen" && (
          <>
            {leLektionen.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-tertiary)] mb-2">
                  Lerneinheiten
                </p>
                <div className="flex flex-col gap-2">
                  {leLektionen.map((le) => (
                    <Link key={le.leId} href={`/${locale}/lernen/${le.leId}`}>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-between gap-3 rounded-xl border border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-3 py-3 cursor-pointer hover:shadow-sm transition-shadow"
                      >
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] leading-tight truncate">
                            {le.title}
                          </h3>
                          <p className="text-[11px] text-[var(--lern-text-tertiary)] mt-0.5">
                            {le.sessions.length} Sessions · {le.zeitrichtwert}{" "}
                            UE
                          </p>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-[var(--lern-success)] font-semibold shrink-0">
                          Verfügbar
                        </span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {situationen.length > 0 ? (
              <>
                {leLektionen.length > 0 && (
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-tertiary)] mb-2">
                    Situationen
                  </p>
                )}
                <div className="flex flex-col gap-2">
                  {situationen.map((sit) => (
                    <SituationCard
                      key={sit.situationId}
                      situation={sit}
                      locale={locale}
                      ceId={ceId}
                    />
                  ))}
                </div>
              </>
            ) : (
              leLektionen.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-sm text-[var(--lern-text-tertiary)]">
                    {t("noSituationen")}
                  </p>
                </div>
              )
            )}
          </>
        )}

        {tab === "themen" && (
          <div className="flex flex-col gap-5">
            {Object.entries(themenByCluster).map(([cluster, themaIds]) => (
              <section key={cluster}>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--lern-text-tertiary)] mb-2">
                  {cluster}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {themaIds.map((themaId) => (
                    <ThemaCard
                      key={themaId}
                      themaId={themaId}
                      locale={locale}
                      ceId={ceId}
                    />
                  ))}
                </div>
              </section>
            ))}

            {ceManifest.themen.length === 0 && (
              <div className="text-center py-12">
                <p className="text-sm text-[var(--lern-text-tertiary)]">
                  {tNav("noThemen")}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
