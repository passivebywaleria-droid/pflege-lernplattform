# Pflege-Lernplattform — UI Bundle für Claude Design

> Zweck: Diese Datei in Claude.ai Projects hochladen und mit Design-Prompt arbeiten.
> Zielgruppe: Pflegeschüler:innen (16+), Mobile-First, warme Palette.

## Tech-Stack
- Next.js 15 (App Router, Turbopack)
- Tailwind CSS 4 + shadcn/ui
- framer-motion für Animationen
- lucide-react Icons
- next-intl (DE/AR/TR i18n)

## Design-Prinzipien (Soll bleiben)
- **Mobile-First** (max-width: 3xl = 768px Content-Breite)
- **Warme Palette**: Dusty Rose #C4877F (Accent), Sage #6B8F71 (Success)
- **Echte Umlaute**: ä, ö, ü, ß (nie ae/oe/ue/ss)
- **"du"-Anrede** durchgehend
- **Sandwich-Feedback**: Loben → Korrigieren → Ermutigen
- **CSS-Variablen** `--lern-*` überall (nicht ersetzen!)

---

# 1️⃣ Design Tokens (globals.css — relevanter Auszug)

```css
:root {
  /* Lern-Engine Farben (Warm Palette) */
  --lern-bg: #fafaf9;
  --lern-bg-primary: #ffffff;
  --lern-bg-secondary: #faf9f7;
  --lern-text-primary: #1d1d1f;
  --lern-text-secondary: #6e6e73;
  --lern-text-tertiary: #86868b;
  --lern-border: #E5DFD6;
  --lern-divider: rgba(196, 135, 127, 0.10);
  --lern-card-bg: #fafaf9;
  --lern-accent: #C4877F;         /* Dusty Rose */
  --lern-accent-bg: rgba(196, 135, 127, 0.08);
  --lern-topbar-bg: rgba(250, 250, 249, 0.8);
  --lern-overlay-bg: #ffffff;

  /* Status-Farben (Warm) */
  --lern-success: #6B8F71;        /* Sage */
  --lern-warning: #D4956A;        /* Amber */
  --lern-error: #C96B5C;          /* Warm Red */
  --lern-info: #9B7EA6;           /* Lavender */

  /* Brand Colors */
  --color-pflege-rose: #C4877F;
  --color-pflege-green: #6B8F71;
  --color-pflege-red: #C96B5C;
  --color-pflege-amber: #D4956A;

  /* Mastery (Lernfortschritt) */
  --color-mastery-not-started: #a09890;
  --color-mastery-attempted: #D4956A;
  --color-mastery-familiar: #BFA48E;
  --color-mastery-proficient: #6B8F71;
  --color-mastery-mastered: #C4877F;

  --radius: 0.625rem;
}

.dark {
  --lern-bg: #1a1917;
  --lern-bg-primary: #2a2825;
  --lern-bg-secondary: #1a1917;
  --lern-text-primary: #f5f5f3;
  --lern-text-secondary: #b0aaa2;
  --lern-text-tertiary: #8e8880;
  /* Accent bleibt warm */
  --lern-accent: #C4877F;
}

/* Typographie-Hierarchie (FINAL, projektweit) */
/* H1 Screen-Titel: text-base font-semibold (16px) */
/* H2 Step/Card-Titel: text-base font-bold (16px) */
/* H3 Kapitel: text-sm font-semibold (14px) */
/* Body/Frage: text-sm (14px) */
/* Meta/Badge: text-xs (12px) */
```

---

# 2️⃣ CE-Übersichtsseite — `src/app/[locale]/lernen/ce/[ceId]/page.tsx`

(Datei zeigt alle Themen + Situationen einer CE)

```tsx
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
          {situation.patient ? (
            <>
              <span>{t("patient")}: {situation.patient.name}, {situation.patient.alter}</span>
              <span>·</span>
              <span>{situation.patient.setting}</span>
            </>
          ) : (
            <span>{situation.themen.join(", ")}</span>
          )}
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

function ThemaCard({ themaId, locale, ceId }: { themaId: string; locale: string; ceId: string }) {
  const t = useTranslations("themaNav");
  const label = themaId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <Link href={`/${locale}/lernen/thema/${themaId}?ce=${ceId}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-3 cursor-pointer hover:shadow-md transition-shadow"
      >
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
      </motion.div>
    </Link>
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
                      <ThemaCard key={themaId} themaId={themaId} locale={locale} ceId={ceId} />
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
```

---

# 3️⃣ Thema-Detail-Seite — `src/app/[locale]/lernen/thema/[themaId]/page.tsx`

(Neue Seite — zeigt Wissensbausteine mit 3 Stufen, Glossar, Karteikarten)

```tsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { loadThema } from "../../../../../../content/content-loader";
import type { Thema, Wissensbaustein } from "../../../../../../content/_types";

type TabKey = "bausteine" | "glossar" | "karteikarten";

function BausteinCard({ baustein }: { baustein: Wissensbaustein }) {
  const [expanded, setExpanded] = useState(false);
  const [stufe, setStufe] = useState<1 | 2 | 3>(1);

  return (
    <motion.div
      layout
      className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between text-left"
      >
        <h3 className="text-sm font-semibold text-[var(--lern-text-primary)]">
          {baustein.titel}
        </h3>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-[var(--lern-text-tertiary)]" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[var(--lern-text-tertiary)]" />
        )}
      </button>

      {expanded && (
        <div className="mt-3 space-y-3">
          {/* Stufen-Switcher */}
          <div className="flex gap-1 rounded-lg bg-[var(--lern-bg)] p-1">
            {[1, 2, 3].map((s) => (
              <button
                key={s}
                onClick={() => setStufe(s as 1 | 2 | 3)}
                className={`flex-1 rounded-md px-2 py-1 text-xs font-semibold transition ${
                  stufe === s
                    ? "bg-[var(--lern-accent)] text-white"
                    : "text-[var(--lern-text-secondary)]"
                }`}
              >
                Stufe {s}
              </button>
            ))}
          </div>

          {/* Stufe 1: Denkfrage */}
          {stufe === 1 && (
            <div>
              <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] uppercase tracking-wider mb-1">
                Denkfrage
              </p>
              <p className="text-sm text-[var(--lern-text-primary)] mb-2">
                {baustein.stufe1.frage}
              </p>
              <details className="text-xs">
                <summary className="cursor-pointer text-[var(--lern-accent)] font-semibold">
                  Antwort anzeigen
                </summary>
                <p className="mt-2 text-[var(--lern-text-secondary)]">
                  {baustein.stufe1.antwort}
                </p>
              </details>
            </div>
          )}

          {/* Stufe 2: Hinweis */}
          {stufe === 2 && (
            <div>
              <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] uppercase tracking-wider mb-1">
                Hinweis
              </p>
              <p className="text-sm text-[var(--lern-text-primary)]">
                {baustein.stufe2.text}
              </p>
              {baustein.stufe2.textB1 && (
                <details className="mt-2 text-xs">
                  <summary className="cursor-pointer text-[var(--lern-accent)] font-semibold">
                    Einfache Sprache (B1)
                  </summary>
                  <p className="mt-2 text-[var(--lern-text-secondary)]">
                    {baustein.stufe2.textB1}
                  </p>
                </details>
              )}
            </div>
          )}

          {/* Stufe 3: Erklärung */}
          {stufe === 3 && (() => {
            // Step hat flexible Struktur — body kann direkt oder in contentC1 liegen
            const step = baustein.stufe3.step as unknown as Record<string, unknown>;
            const contentC1 = (step.contentC1 as Record<string, unknown>) || {};
            const contentB1 = (step.contentB1 as Record<string, unknown>) || {};
            const title = (step.title as string) || (contentC1.title as string) || "";
            const bodyC1 = (step.body as string) || (contentC1.body as string) || "";
            const bodyB1 = (contentB1.body as string) || "";
            const stepType = step.stepType as string;
            return (
              <div>
                <p className="text-xs font-semibold text-[var(--lern-text-tertiary)] uppercase tracking-wider mb-1">
                  Erklärung
                </p>
                <div className="rounded-lg bg-[var(--lern-bg)] p-3 text-sm text-[var(--lern-text-primary)]">
                  {title && <h4 className="font-semibold mb-2">{title}</h4>}
                  {bodyC1 ? (
                    <p className="whitespace-pre-wrap">{bodyC1}</p>
                  ) : (
                    <p className="text-xs text-[var(--lern-text-tertiary)] italic">
                      Step-Typ: {stepType} (Inhalt im Lernmodus verfügbar)
                    </p>
                  )}
                  {bodyB1 && (
                    <details className="mt-3 text-xs">
                      <summary className="cursor-pointer text-[var(--lern-accent)] font-semibold">
                        Einfache Sprache (B1)
                      </summary>
                      <p className="mt-2 whitespace-pre-wrap text-[var(--lern-text-secondary)]">
                        {bodyB1}
                      </p>
                    </details>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </motion.div>
  );
}

export default function ThemaDetailPage() {
  const locale = useLocale();
  const params = useParams();
  const searchParams = useSearchParams();
  const themaId = params.themaId as string;
  const ceId = searchParams.get("ce") ?? "ce-02";

  const [thema, setThema] = useState<Thema | null>(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<TabKey>("bausteine");

  useEffect(() => {
    setLoading(true);
    loadThema(ceId, themaId)
      .then(setThema)
      .finally(() => setLoading(false));
  }, [ceId, themaId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <p className="text-[var(--lern-text-secondary)]">Lade...</p>
      </div>
    );
  }

  if (!thema) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-[var(--lern-text-secondary)]">Thema nicht gefunden: {themaId}</p>
        <Link href={`/${locale}/lernen/ce/${ceId}`} className="text-[var(--lern-accent)] text-sm">
          ← Zurück zur CE
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]">
      {/* Header */}
      <div className="bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <Link
            href={`/${locale}/lernen/ce/${ceId}`}
            className="inline-flex items-center gap-1 text-sm text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)] mb-3"
          >
            <ArrowLeft className="h-4 w-4" />
            {ceId.toUpperCase()}
          </Link>

          <p className="text-xs font-semibold text-[var(--lern-accent)] uppercase tracking-wider mb-1">
            Thema · {thema.wissensart}
          </p>
          <h1 className="text-xl font-bold text-[var(--lern-text-primary)] mb-1">
            {thema.titel}
          </h1>
          <p className="text-sm text-[var(--lern-text-secondary)]">
            {thema.geschaetzteUE} UE · {thema.bausteine.length} Bausteine · {thema.glossar.length} Glossar · {thema.karteikarten.length} Karteikarten
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mx-auto max-w-3xl px-4 pt-4">
        <div className="flex gap-2 border-b border-[var(--lern-border)]">
          {(["bausteine", "glossar", "karteikarten"] as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 capitalize ${
                tab === key
                  ? "border-[var(--lern-accent)] text-[var(--lern-accent)]"
                  : "border-transparent text-[var(--lern-text-tertiary)] hover:text-[var(--lern-text-secondary)]"
              }`}
            >
              {key} ({
                key === "bausteine" ? thema.bausteine.length :
                key === "glossar" ? thema.glossar.length :
                thema.karteikarten.length
              })
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-6 space-y-3">
        {tab === "bausteine" && thema.bausteine.map((b) => (
          <BausteinCard key={b.bausteinId} baustein={b} />
        ))}

        {tab === "glossar" && thema.glossar.map((entry) => (
          <div
            key={entry.begriff}
            className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-3"
          >
            <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] mb-1">
              {entry.begriff}
            </h3>
            <p className="text-sm text-[var(--lern-text-secondary)]">{entry.erklaerung}</p>
            {entry.erklaerungB1 && (
              <details className="mt-2 text-xs">
                <summary className="cursor-pointer text-[var(--lern-accent)] font-semibold">
                  Einfache Sprache
                </summary>
                <p className="mt-1 text-[var(--lern-text-secondary)]">{entry.erklaerungB1}</p>
              </details>
            )}
          </div>
        ))}

        {tab === "karteikarten" && thema.karteikarten.map((karte, idx) => (
          <details
            key={karte.id ?? idx}
            className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-3 cursor-pointer"
          >
            <summary className="font-semibold text-sm text-[var(--lern-text-primary)]">
              {karte.vorderseite}
            </summary>
            <p className="mt-2 text-sm text-[var(--lern-text-secondary)]">
              {karte.rueckseiteC1}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
```

---

# 4️⃣ Situation-Lernseite — `src/app/[locale]/lernen/situation/[situationId]/page.tsx`

(Kernerlebnis: 6-Phasen-Lernreise mit Patient)

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { loadSituation as staticLoadSituation } from "../../../../../../content/content-loader";
import type { Lernsituation, PflegeProzessPhase, ContentStep } from "../../../../../../content/_types";
import { PhasenProgress, PHASEN_ORDER } from "@/components/learn/phasen-progress";
import { StepRenderer } from "@/components/learn/step-renderer";

export default function SituationLernenPage() {
  const locale = useLocale();
  const params = useParams();
  const searchParams = useSearchParams();
  const situationId = params.situationId as string;
  const ceId = searchParams.get("ce") ?? "ce-02";
  const t = useTranslations("situation");

  const [situation, setSituation] = useState<Lernsituation | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPhaseId, setCurrentPhaseId] = useState<PflegeProzessPhase>("informieren");
  const [completedPhases, setCompletedPhases] = useState<PflegeProzessPhase[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  // FIX (walkthrough B-09): Diagnose-Badges nach Phase 1 kompakt einklappbar, um
  // Wiederholungs-Müdigkeit über 30 Steps zu vermeiden. Toggle-State hier.
  const [diagnosenOpen, setDiagnosenOpen] = useState(true);

  useEffect(() => {
    setLoading(true);
    staticLoadSituation(ceId, situationId)
      .then(setSituation)
      .finally(() => setLoading(false));
  }, [ceId, situationId]);

  // Aktuelle Phase und ihre Steps
  const currentPhase = situation?.phasen.find((p) => p.phase === currentPhaseId);
  const phaseSteps: ContentStep[] = currentPhase
    ? [...currentPhase.kernSteps, ...currentPhase.optionaleSteps]
    : [];
  const currentStep = phaseSteps[currentStepIndex] ?? null;

  const handlePhaseClick = useCallback((phase: PflegeProzessPhase) => {
    if (completedPhases.includes(phase) || phase === currentPhaseId) {
      setCurrentPhaseId(phase);
      setCurrentStepIndex(0);
    }
  }, [completedPhases, currentPhaseId]);

  const handleNextStep = useCallback(() => {
    if (currentStepIndex < phaseSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Phase abgeschlossen
      if (!completedPhases.includes(currentPhaseId)) {
        setCompletedPhases((prev) => [...prev, currentPhaseId]);
      }
      // Nächste Phase
      const currentIdx = PHASEN_ORDER.indexOf(currentPhaseId);
      if (currentIdx < PHASEN_ORDER.length - 1) {
        setCurrentPhaseId(PHASEN_ORDER[currentIdx + 1]);
        setCurrentStepIndex(0);
      }
    }
  }, [currentStepIndex, phaseSteps.length, completedPhases, currentPhaseId]);

  // FIX (walkthrough B-09): Ab Phase 2 (beobachten) werden Diagnose-Badges
  // automatisch eingeklappt — Schüler kennt sie dann, kann bei Bedarf öffnen.
  useEffect(() => {
    if (currentPhaseId !== "informieren") {
      setDiagnosenOpen(false);
    }
  }, [currentPhaseId]);

  if (loading) {
    return (
      <div className="h-dvh bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="animate-pulse text-[var(--lern-text-secondary)]">Laden...</div>
      </div>
    );
  }

  if (!situation) {
    return (
      <div className="h-dvh bg-[var(--lern-bg)] flex items-center justify-center flex-col gap-4">
        <p className="text-[var(--lern-text-secondary)]">Lernsituation nicht gefunden.</p>
        <Link
          href={`/${locale}/lernen/ce/${ceId}`}
          className="text-sm text-[var(--lern-accent)] hover:underline"
        >
          {t("zurueckZurUebersicht")}
        </Link>
      </div>
    );
  }

  const allPhasesCompleted = completedPhases.length === PHASEN_ORDER.length;

  return (
    <div className="h-dvh bg-[var(--lern-bg)] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="shrink-0 bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <Link
            href={`/${locale}/lernen/ce/${ceId}`}
            className="inline-flex items-center gap-1 text-sm text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)] mb-2"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("zurueckZurUebersicht")}
          </Link>

          {/* Patient-Info */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h1 className="text-lg font-bold text-[var(--lern-text-primary)]">
                {situation.titel}
              </h1>
              {situation.patient && (
                <p className="text-xs text-[var(--lern-text-secondary)] mt-0.5">
                  {t("patient")}: {situation.patient.name}, {situation.patient.alter} · {situation.patient.setting}
                </p>
              )}
            </div>
            <span className="shrink-0 rounded-full bg-[var(--lern-accent-bg)] px-2 py-0.5 text-xs font-semibold text-[var(--lern-accent)]">
              {t("spirale", { level: situation.spirale })}
            </span>
          </div>

          {/* Diagnosen — FIX (walkthrough B-09): ab Phase 2 einklappbar */}
          {situation.patient && situation.patient.diagnosen.length > 0 && (
            <div className="mb-3">
              <button
                type="button"
                onClick={() => setDiagnosenOpen((v) => !v)}
                aria-expanded={diagnosenOpen}
                className="inline-flex items-center gap-1 text-xs text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)] mb-1"
              >
                <span>Diagnosen ({situation.patient.diagnosen.length})</span>
                {diagnosenOpen ? (
                  <ChevronUp className="h-3 w-3" />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </button>
              {diagnosenOpen && (
                <div className="flex flex-wrap gap-1">
                  {situation.patient.diagnosen.map((d) => (
                    <span
                      key={d}
                      className="rounded-md bg-[var(--lern-bg)] px-2 py-0.5 text-[10px] text-[var(--lern-text-secondary)]"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Phasen-Progress */}
          <PhasenProgress
            currentPhase={currentPhaseId}
            completedPhases={completedPhases}
            onPhaseClick={handlePhaseClick}
          />
        </div>
      </div>

      {/* Content-Bereich */}
      <div className="mx-auto max-w-3xl px-4 py-3 flex-1 min-h-0 overflow-y-auto w-full">
        {allPhasesCompleted ? (
          /* Alle Phasen abgeschlossen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-[#6B8F71]/10 border border-[#6B8F71]/30 p-8 text-center"
          >
            <span className="text-4xl mb-4 block">🎉</span>
            <h2 className="text-lg font-bold text-[var(--lern-text-primary)] mb-2">
              {t("alleAbgeschlossen")}
            </h2>
            <p className="text-sm text-[var(--lern-text-secondary)] mb-4">
              {situation.titel}
            </p>
            <Link
              href={`/${locale}/lernen/ce/${ceId}`}
              className="inline-block rounded-xl bg-[var(--lern-accent)] px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#B07A72]"
            >
              {t("zurueckZurUebersicht")}
            </Link>
          </motion.div>
        ) : currentStep ? (
          /* Step anzeigen */
          <div>
            {/* Phase-Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-[var(--lern-accent)] uppercase tracking-wider">
                  {t(`phasen.${currentPhaseId}`)}
                </p>
                <p className="text-xs text-[var(--lern-text-tertiary)] mt-0.5">
                  {t(`phasenBeschreibung.${currentPhaseId}`)}
                </p>
              </div>
              <span className="text-xs text-[var(--lern-text-tertiary)]">
                {currentStepIndex + 1}/{phaseSteps.length}
              </span>
            </div>

            {/* Step-Progress-Bar */}
            <div className="h-1 rounded-full bg-[var(--lern-border)] mb-4">
              <div
                className="h-full rounded-full bg-[var(--lern-accent)] transition-all"
                style={{ width: `${((currentStepIndex + 1) / phaseSteps.length) * 100}%` }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPhaseId}-${currentStepIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <StepRenderer
                  step={currentStep}
                  sprachLevel="c1"
                  glossar={[]}
                  onNext={(correct) => {
                    handleNextStep();
                  }}
                  onSelfRating={() => {}}
                  onReflection={() => {}}
                  reflexionText={null}
                  score={0}
                  totalQuestions={phaseSteps.length}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Keine Steps in dieser Phase */
          <div className="text-center py-12">
            <p className="text-sm text-[var(--lern-text-tertiary)] mb-4">
              {t(`phasenBeschreibung.${currentPhaseId}`)}
            </p>
            <button
              onClick={handleNextStep}
              className="rounded-xl bg-[var(--lern-accent)] px-6 py-2.5 text-sm font-semibold text-white"
            >
              {t("fortschritt")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

# 🎨 Design-Prompt für Claude

> Ich habe eine Pflege-Lernplattform (Next.js 15 + Tailwind + shadcn/ui).
> Palette: Dusty Rose #C4877F + Sage #6B8F71, warm, Mobile-First.
> Zielgruppe: Pflegeschüler:innen 16+, oft B1-Deutschniveau.
>
> Behalte alle CSS-Variablen `--lern-*` und Fachlogik unverändert.
> Ziel: Mehr Ruhe, klarere Typografie-Hierarchie, emotionale Wärme,
> weniger visuelle Dichte. Inspiration: Duolingo, aber ernster/medizinischer.
>
> Bitte überarbeite die 3 Seiten + gib mir komplette TSX-Dateien zurück.
