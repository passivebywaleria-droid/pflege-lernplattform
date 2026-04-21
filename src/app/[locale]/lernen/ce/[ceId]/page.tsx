"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import {
  getCeManifest,
  getLektionManifest,
  getAllLektionen,
} from "@/lib/content-loader";
import {
  loadThemen as staticLoadThemen,
  loadSituationen as staticLoadSituationen,
} from "../../../../../../content/content-loader";
import type { CEManifestEntry, Thema, Lernsituation } from "../../../../../../content/_types";

type CeTab = "situationen" | "themen";

const SPIRALE_COLORS: Record<number, string> = {
  1: "#6B8F71",
  2: "#D4956A",
  3: "#9B7EA6",
  4: "#C96B5C",
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
  const t = useTranslations("situation");
  const spiralColor = SPIRALE_COLORS[situation.spirale] ?? "#6B8F71";

  return (
    <Link href={`/${locale}/lernen/situation/${situation.situationId}?ce=${ceId}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 cursor-pointer hover:shadow-lg transition-shadow"
      >
        <div className="flex items-start justify-between mb-2">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-white"
            style={{ backgroundColor: spiralColor }}
          >
            {t("spirale", { level: situation.spirale })}
          </span>
          <span className="text-xs text-[var(--lern-text-tertiary)]">
            {t("geschaetzteZeit", { ue: situation.geschaetzteUE })}
          </span>
        </div>

        <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-1">
          {situation.titel}
        </h3>

        <div className="flex items-center gap-2 text-xs text-[var(--lern-text-tertiary)] mb-2">
          <span>{t("patient")}: {situation.patient.name}, {situation.patient.alter}</span>
          <span>·</span>
          <span>{situation.patient.setting}</span>
        </div>

        <div className="flex flex-wrap gap-1">
          {situation.themen.slice(0, 3).map((themaId) => (
            <span
              key={themaId}
              className="rounded-md bg-[var(--lern-bg)] px-2 py-0.5 text-[10px] text-[var(--lern-text-secondary)]"
            >
              {themaId.replace(/-/g, " ")}
            </span>
          ))}
          {situation.themen.length > 3 && (
            <span className="text-[10px] text-[var(--lern-text-tertiary)]">
              +{situation.themen.length - 3}
            </span>
          )}
        </div>

        {/* 6-Phasen Mini-Fortschritt */}
        <div className="flex gap-1 mt-3">
          {situation.phasen.map((phase) => (
            <div
              key={phase.phaseId}
              className="h-1.5 flex-1 rounded-full bg-[var(--lern-border)]"
              title={phase.phase}
            />
          ))}
        </div>
      </motion.div>
    </Link>
  );
}

function ThemaCard({ themaId }: { themaId: string }) {
  const t = useTranslations("themaNav");
  const label = themaId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-3">
      <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-1">
        {label}
      </h3>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs text-[var(--lern-text-tertiary)]">
          {t("quickCheck")}
        </span>
        <span className="text-xs text-[var(--lern-text-tertiary)]">·</span>
        <span className="text-xs text-[var(--lern-text-tertiary)]">
          {t("karteikarten")}
        </span>
      </div>
    </div>
  );
}

// Cluster-Zuordnung für CE-02 Themen (synchron mit themen-katalog.md)
const THEMEN_CLUSTER: Record<string, { label: string; icon: string }> = {
  // Cluster A — Pflegeprozess
  "pflegeprozess": { label: "Pflegeprozess", icon: "📋" },
  "pflegeplanung": { label: "Pflegeprozess", icon: "📋" },
  "pflegedokumentation": { label: "Pflegeprozess", icon: "📋" },
  "assessments-expertenstandards": { label: "Pflegeprozess", icon: "📋" },
  // Cluster B — Mobilität
  "kinaesthetik": { label: "Mobilität", icon: "🚶" },
  "positionierung": { label: "Mobilität", icon: "🚶" },
  "mobilisation": { label: "Mobilität", icon: "🚶" },
  "dekubitus-prophylaxe": { label: "Mobilität", icon: "🚶" },
  "thrombose-prophylaxe": { label: "Mobilität", icon: "🚶" },
  "sturz-prophylaxe": { label: "Mobilität", icon: "🚶" },
  "kontraktur-prophylaxe": { label: "Mobilität", icon: "🚶" },
  "pneumonie-prophylaxe": { label: "Mobilität", icon: "🚶" },
  "schlaf": { label: "Mobilität", icon: "🚶" },
  // Cluster C — Körperpflege
  "haut": { label: "Körperpflege", icon: "🧴" },
  "ganzkörperpflege": { label: "Körperpflege", icon: "🧴" },
  "mundpflege": { label: "Körperpflege", icon: "🧴" },
  "saeuglingspflege": { label: "Körperpflege", icon: "🧴" },
  "basale-stimulation": { label: "Körperpflege", icon: "🧴" },
  // Cluster D — Ernährung
  "ernaehrungsgrundlagen": { label: "Ernährung", icon: "🍎" },
  "ernaehrungsassessment": { label: "Ernährung", icon: "🍎" },
  "essen-anreichen": { label: "Ernährung", icon: "🍎" },
  "enterale-ernaehrung": { label: "Ernährung", icon: "🍎" },
  // Cluster E — Ausscheidung
  "harnausscheidung": { label: "Ausscheidung", icon: "💧" },
  "blasenkatheter": { label: "Ausscheidung", icon: "💧" },
  "stuhlausscheidung": { label: "Ausscheidung", icon: "💧" },
};

export default function CeDetailPage() {
  const locale = useLocale();
  const params = useParams();
  const ceId = params.ceId as string;
  const t = useTranslations("situation");
  const tNav = useTranslations("themaNav");

  const [tab, setTab] = useState<CeTab>("situationen");
  const [situationen, setSituationen] = useState<Lernsituation[]>([]);
  const [loading, setLoading] = useState(true);

  const ceManifest = getCeManifest(ceId);

  // Auch LE-basierte Inhalte für diesen CE laden
  const leLektionen = getAllLektionen().filter((le) => le.ceId === ceId);

  useEffect(() => {
    setLoading(true);
    staticLoadSituationen(ceId)
      .then(setSituationen)
      .finally(() => setLoading(false));
  }, [ceId]);

  if (!ceManifest) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <p className="text-[var(--lern-text-secondary)]">CE nicht gefunden.</p>
      </div>
    );
  }

  // Gruppiere Themen nach Cluster
  const themenByCluster = ceManifest.themen.reduce<Record<string, string[]>>(
    (acc, themaId) => {
      const cluster = THEMEN_CLUSTER[themaId]?.label ?? "Sonstige";
      if (!acc[cluster]) acc[cluster] = [];
      acc[cluster].push(themaId);
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]">
      {/* Header */}
      <div className="bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <Link
            href={`/${locale}/lernen`}
            className="inline-flex items-center gap-1 text-sm text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)] mb-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Übersicht
          </Link>

          <p className="text-xs font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-1">
            CE {ceManifest.ceNumber.toString().padStart(2, "0")}
          </p>
          <h1 className="text-xl font-bold text-[var(--lern-text-primary)] mb-1">
            {ceManifest.titel}
          </h1>
          <p className="text-sm text-[var(--lern-text-secondary)]">
            {ceManifest.gesamtUE} UE · {ceManifest.themen.length} Themen · {ceManifest.situationen.length} Lernsituationen
          </p>
        </div>
      </div>

      {/* Tab-Leiste */}
      <div className="mx-auto max-w-3xl px-4 pt-4">
        <div className="flex gap-2 border-b border-[var(--lern-border)]">
          <button
            onClick={() => setTab("situationen")}
            className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 ${
              tab === "situationen"
                ? "border-[var(--lern-accent)] text-[var(--lern-accent)]"
                : "border-transparent text-[var(--lern-text-tertiary)] hover:text-[var(--lern-text-secondary)]"
            }`}
          >
            {t("title")}
          </button>
          <button
            onClick={() => setTab("themen")}
            className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 ${
              tab === "themen"
                ? "border-[var(--lern-accent)] text-[var(--lern-accent)]"
                : "border-transparent text-[var(--lern-text-tertiary)] hover:text-[var(--lern-text-secondary)]"
            }`}
          >
            {tNav("title")}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-6">
        {tab === "situationen" && (
          <div className="space-y-4">
            {/* LE-basierte Lektionen (Legacy) falls vorhanden */}
            {leLektionen.length > 0 && (
              <div className="mb-6">
                <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] uppercase tracking-wider mb-2">
                  Lerneinheiten (verfügbar)
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {leLektionen.map((le) => (
                    <Link key={le.leId} href={`/${locale}/lernen/${le.leId}`}>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[#6B8F71]/30 p-4 cursor-pointer hover:shadow-md"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-sm font-semibold text-[var(--lern-text-primary)]">
                              {le.title}
                            </h3>
                            <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">
                              {le.sessions.length} Sessions · {le.zeitrichtwert} UE
                            </p>
                          </div>
                          <span className="rounded-full bg-[#6B8F71] px-2 py-0.5 text-xs font-semibold text-white">
                            Verfügbar
                          </span>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Situations-Karten */}
            {situationen.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {situationen.map((sit) => (
                  <SituationCard
                    key={sit.situationId}
                    situation={sit}
                    locale={locale}
                    ceId={ceId}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-sm text-[var(--lern-text-tertiary)]">
                  {t("noSituationen")}
                </p>
              </div>
            )}
          </div>
        )}

        {tab === "themen" && (
          <div className="space-y-6">
            {Object.entries(themenByCluster).map(([cluster, themaIds]) => {
              const clusterInfo = Object.values(THEMEN_CLUSTER).find(
                (c) => c.label === cluster,
              );
              return (
                <section key={cluster}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">{clusterInfo?.icon ?? "📚"}</span>
                    <h2 className="text-sm font-semibold text-[var(--lern-text-primary)]">
                      {cluster}
                    </h2>
                    <span className="text-xs text-[var(--lern-text-tertiary)]">
                      {themaIds.length} Themen
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {themaIds.map((themaId) => (
                      <ThemaCard key={themaId} themaId={themaId} />
                    ))}
                  </div>
                </section>
              );
            })}

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
