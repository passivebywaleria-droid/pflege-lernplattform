"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { ContentTag } from "../../../../../../content/_types";
import { loadAllTagStats } from "../../../../../../content/content-loader";
import type { LeTagStats } from "../../../../../../content/content-loader";

const TAG_CONFIG: Record<ContentTag, { icon: string; color: string; colorBg: string }> = {
  anatomie: { icon: "🦴", color: "#9B7EA6", colorBg: "rgba(155,126,166,0.1)" },
  pflege: { icon: "💊", color: "#C4877F", colorBg: "rgba(196,135,127,0.1)" },
  krankheitslehre: { icon: "🔬", color: "#C96B5C", colorBg: "rgba(201,107,92,0.1)" },
};

const VALID_TAGS: ContentTag[] = ["anatomie", "pflege", "krankheitslehre"];

export default function ThemenTagPage() {
  const params = useParams();
  const locale = useLocale();
  const t = useTranslations("themen");
  const tag = params.tag as string;
  const [stats, setStats] = useState<LeTagStats[]>([]);
  const [loading, setLoading] = useState(true);

  const isValidTag = VALID_TAGS.includes(tag as ContentTag);
  const currentTag = (isValidTag ? tag : "pflege") as ContentTag;
  const config = TAG_CONFIG[currentTag];

  useEffect(() => {
    loadAllTagStats().then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  // LEs filtern die Steps mit diesem Tag haben
  const filteredLEs = useMemo(() => {
    return stats
      .filter((le) => le[currentTag] > 0)
      .sort((a, b) => b[currentTag] - a[currentTag]);
  }, [stats, currentTag]);

  const totalSteps = filteredLEs.reduce((sum, le) => sum + le[currentTag], 0);
  const totalLEs = filteredLEs.length;

  if (!isValidTag) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-[var(--lern-text-primary)] mb-2">
            {t("invalidTag")}
          </h1>
          <div className="flex gap-3 justify-center mt-4">
            {VALID_TAGS.map((vt) => (
              <Link
                key={vt}
                href={`/${locale}/lernen/themen/${vt}`}
                className="rounded-xl px-4 py-2 text-sm font-semibold text-white"
                style={{ backgroundColor: TAG_CONFIG[vt].color }}
              >
                {TAG_CONFIG[vt].icon} {t(vt)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "#1d1d1f" }}>
      {/* Header */}
      <div className="bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50">
        <div className="mx-auto max-w-3xl px-4 py-6">
          {/* Zurück + Tab-Navigation */}
          <div className="flex items-center gap-2 mb-4">
            <Link
              href={`/${locale}/lernen`}
              className="text-sm text-[var(--lern-text-tertiary)] hover:text-[var(--lern-text-primary)] transition-colors"
            >
              ← {t("backToLernen")}
            </Link>
          </div>

          {/* Tag-Tabs */}
          <div className="flex gap-2 mb-6">
            {VALID_TAGS.map((vt) => {
              const vtConfig = TAG_CONFIG[vt];
              const isActive = vt === currentTag;
              return (
                <Link
                  key={vt}
                  href={`/${locale}/lernen/themen/${vt}`}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "text-white shadow-sm"
                      : "text-[var(--lern-text-secondary)] bg-[var(--lern-bg)] hover:bg-[var(--lern-bg-primary)]"
                  }`}
                  style={isActive ? { backgroundColor: vtConfig.color } : undefined}
                >
                  {vtConfig.icon} {t(vt)}
                </Link>
              );
            })}
          </div>

          {/* Titel + Stats */}
          <h1 className="text-2xl font-bold text-[var(--lern-text-primary)] mb-1">
            {config.icon} {t(`${currentTag}Title`)}
          </h1>
          <p className="text-sm text-[var(--lern-text-secondary)] mb-1">
            {t(`${currentTag}Desc`)}
          </p>
          {!loading && (
            <p className="text-xs text-[var(--lern-text-tertiary)]">
              {totalSteps} Steps · {totalLEs} {totalLEs === 1 ? "Lektion" : "Lektionen"}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-6">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--lern-border)] border-t-[var(--lern-accent)]" />
          </div>
        ) : filteredLEs.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg text-[var(--lern-text-secondary)]">{t("noContent")}</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredLEs.map((le, i) => (
              <motion.div
                key={le.leId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/${locale}/lernen/${le.leId}`}>
                  <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 transition-shadow hover:shadow-lg cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: config.color }}>
                          {le.ceId.toUpperCase()} · {le.leId.toUpperCase()}
                        </span>
                        <h3 className="text-sm font-semibold text-[var(--lern-text-primary)] mt-0.5">
                          {le.title}
                        </h3>
                      </div>
                      <div
                        className="shrink-0 rounded-lg px-2.5 py-1 text-xs font-bold text-white"
                        style={{ backgroundColor: config.color }}
                      >
                        {le[currentTag]} Steps
                      </div>
                    </div>

                    {/* Tag-Distribution Bar */}
                    <div className="mt-3">
                      <div className="flex h-2 rounded-full overflow-hidden bg-[var(--lern-bg)]">
                        {le.anatomie > 0 && (
                          <div
                            className="h-full transition-all"
                            style={{
                              width: `${(le.anatomie / le.total) * 100}%`,
                              backgroundColor: TAG_CONFIG.anatomie.color,
                            }}
                          />
                        )}
                        {le.pflege > 0 && (
                          <div
                            className="h-full transition-all"
                            style={{
                              width: `${(le.pflege / le.total) * 100}%`,
                              backgroundColor: TAG_CONFIG.pflege.color,
                            }}
                          />
                        )}
                        {le.krankheitslehre > 0 && (
                          <div
                            className="h-full transition-all"
                            style={{
                              width: `${(le.krankheitslehre / le.total) * 100}%`,
                              backgroundColor: TAG_CONFIG.krankheitslehre.color,
                            }}
                          />
                        )}
                      </div>
                      <div className="flex gap-3 mt-1.5 text-[10px] text-[var(--lern-text-tertiary)]">
                        {le.anatomie > 0 && (
                          <span>🦴 {le.anatomie}</span>
                        )}
                        {le.pflege > 0 && (
                          <span>💊 {le.pflege}</span>
                        )}
                        {le.krankheitslehre > 0 && (
                          <span>🔬 {le.krankheitslehre}</span>
                        )}
                        <span className="ml-auto">{le.total} gesamt · {le.sessions.length} Sessions</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
