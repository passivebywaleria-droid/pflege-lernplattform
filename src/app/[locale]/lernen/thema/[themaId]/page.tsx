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
      className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] px-3 py-2.5"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={expanded}
      >
        <h3 className="text-sm font-medium text-[var(--lern-text-primary)] leading-tight">
          {baustein.titel}
        </h3>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-[var(--lern-text-tertiary)] shrink-0 ml-2" />
        ) : (
          <ChevronDown className="h-4 w-4 text-[var(--lern-text-tertiary)] shrink-0 ml-2" />
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
    <div className="min-h-screen bg-[var(--lern-bg)] pb-12">
      {/* Header — Bundle-Stil */}
      <header className="bg-[var(--lern-bg)] border-b border-[var(--lern-border)]">
        <div className="mx-auto max-w-3xl px-4 pt-3 pb-3.5">
          <div className="flex items-center justify-between mb-2.5">
            <Link
              href={`/${locale}/lernen/ce/${ceId}`}
              aria-label={`Zurück zu ${ceId.toUpperCase()}`}
              className="text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)]"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <span className="text-[11px] uppercase tracking-wider text-[var(--lern-text-tertiary)]">
              {thema.wissensart}
            </span>
            <span className="w-5" aria-hidden />
          </div>
          <h1 className="text-base font-semibold leading-tight text-[var(--lern-text-primary)]">
            {thema.titel}
          </h1>
          <p className="text-[11px] text-[var(--lern-text-tertiary)] mt-0.5">
            {thema.geschaetzteUE} UE · {thema.bausteine.length} Bausteine ·{" "}
            {thema.glossar.length} Glossar
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="mx-auto max-w-3xl px-4 pt-3">
        <div className="flex gap-4 border-b border-[var(--lern-border)]">
          {(["bausteine", "glossar", "karteikarten"] as TabKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-1 py-2 text-sm font-semibold transition-colors border-b-2 -mb-px capitalize ${
                tab === key
                  ? "border-[var(--lern-accent)] text-[var(--lern-accent)]"
                  : "border-transparent text-[var(--lern-text-tertiary)]"
              }`}
            >
              {key}{" "}
              <span className="text-[10px] tabular-nums">
                ({
                  key === "bausteine"
                    ? thema.bausteine.length
                    : key === "glossar"
                      ? thema.glossar.length
                      : thema.karteikarten.length
                })
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-4 space-y-2">
        {tab === "bausteine" && thema.bausteine.map((b) => (
          <BausteinCard key={b.bausteinId} baustein={b} />
        ))}

        {tab === "glossar" && thema.glossar.map((entry) => (
          <div
            key={entry.begriff}
            className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] px-3 py-2.5"
          >
            <h3 className="text-sm font-semibold text-[var(--lern-text-primary)]">
              {entry.begriff}
            </h3>
            <p className="text-xs text-[var(--lern-text-secondary)] mt-1 leading-relaxed">{entry.erklaerung}</p>
            {entry.erklaerungB1 && (
              <details className="mt-1.5 text-xs">
                <summary className="cursor-pointer text-[var(--lern-accent)] font-medium">
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
            className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] px-3 py-2.5 cursor-pointer"
          >
            <summary className="font-medium text-sm text-[var(--lern-text-primary)]">
              {karte.vorderseite}
            </summary>
            <p className="mt-2 text-xs text-[var(--lern-text-secondary)] leading-relaxed">
              {karte.rueckseiteC1}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
