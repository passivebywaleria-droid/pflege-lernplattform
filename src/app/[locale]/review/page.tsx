"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKarteikarten, type Karteikarte, type Bewertung } from "@/hooks/use-karteikarten";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function ReviewPage() {
  const t = useTranslations("review");
  const locale = useLocale();
  const { getFaelligeKarten, bewerte, getStatistiken, loaded } = useKarteikarten();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [erledigtHeute, setErledigtHeute] = useState(0);

  const faelligeKarten = useMemo(() => {
    if (!loaded) return [];
    return getFaelligeKarten();
  }, [loaded, getFaelligeKarten, erledigtHeute]); // eslint-disable-line react-hooks/exhaustive-deps

  const statistiken = useMemo(() => {
    if (!loaded) return { faellig: 0, gesamt: 0, gemeistert: 0, neuHeute: 0 };
    return getStatistiken();
  }, [loaded, getStatistiken, erledigtHeute]); // eslint-disable-line react-hooks/exhaustive-deps

  const aktuelleKarte: Karteikarte | null = faelligeKarten[currentIndex] ?? null;

  const handleBewertung = useCallback(
    (ergebnis: Bewertung) => {
      if (!aktuelleKarte) return;

      bewerte(aktuelleKarte.id, ergebnis);
      setIsFlipped(false);
      setErledigtHeute((prev) => prev + 1);

      // Nächste Karte oder zurück zum Anfang
      if (currentIndex >= faelligeKarten.length - 1) {
        setCurrentIndex(0);
      }
    },
    [aktuelleKarte, bewerte, currentIndex, faelligeKarten.length],
  );

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  if (!loaded) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--lern-bg)]">
        <div className="text-[var(--lern-text-tertiary)]">Laden...</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[var(--lern-bg)] pb-24"
      style={{ color: "var(--lern-text-primary)" }}
    >
      {/* Header — Bundle-Stil schlank */}
      <header className="bg-[var(--lern-bg)] border-b border-[var(--lern-border)]">
        <div className="mx-auto max-w-2xl px-4 pt-3 pb-3">
          <div className="flex items-center justify-between">
            <Link
              href={`/${locale}/dashboard`}
              aria-label="Zurück"
              className="text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)]"
            >
              ‹
            </Link>
            <h1 className="text-base font-semibold text-[var(--lern-text-primary)]">
              {t("title")}
            </h1>
            <span className="text-[10px] tabular-nums text-[var(--lern-text-tertiary)]">
              {statistiken.faellig}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-4">
        {/* Statistik-Leiste — kompakt */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] px-3 py-2.5 text-center">
            <p className="text-lg font-bold text-[var(--lern-accent)] tabular-nums">
              {statistiken.faellig}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-[var(--lern-text-tertiary)]">
              Fällig
            </p>
          </div>
          <div className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] px-3 py-2.5 text-center">
            <p className="text-lg font-bold text-[var(--lern-success)] tabular-nums">
              {erledigtHeute}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-[var(--lern-text-tertiary)]">
              Heute
            </p>
          </div>
          <div className="rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] px-3 py-2.5 text-center">
            <p className="text-lg font-bold text-[#D4956A] tabular-nums">
              {statistiken.gemeistert}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-[var(--lern-text-tertiary)]">
              Gemeistert
            </p>
          </div>
        </div>

        {/* Karteikarten-Bereich */}
        {aktuelleKarte ? (
          <div className="space-y-6">
            {/* Fortschritt */}
            <div className="text-center text-sm text-[var(--lern-text-tertiary)]">
              Karte {currentIndex + 1} von {faelligeKarten.length}
            </div>

            {/* Flip-Card */}
            <button
              type="button"
              className="perspective-1000 cursor-pointer w-full text-left"
              onClick={handleFlip}
              aria-label="Karteikarte umdrehen"
            >
              <AnimatePresence mode="wait">
                {!isFlipped ? (
                  <motion.div
                    key="vorderseite"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="min-h-[250px] rounded-2xl bg-[var(--lern-bg-primary)] p-8 shadow-lg flex flex-col items-center justify-center"
                  >
                    <p className="text-xs uppercase tracking-wide text-[var(--lern-text-tertiary)] mb-4">
                      Frage
                    </p>
                    <p className="text-xl font-semibold text-[var(--lern-text-primary)] text-center leading-relaxed">
                      {aktuelleKarte.vorderseite}
                    </p>
                    <p className="mt-6 text-xs text-[var(--lern-text-tertiary)]">
                      Tippen zum Umdrehen
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="rueckseite"
                    initial={{ rotateY: -90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="min-h-[250px] rounded-2xl bg-[#218C71] p-8 shadow-lg flex flex-col items-center justify-center"
                  >
                    <p className="text-xs uppercase tracking-wide text-white/70 mb-4">
                      Antwort
                    </p>
                    <p className="text-xl font-semibold text-white text-center leading-relaxed">
                      {aktuelleKarte.rueckseite}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Stufen-Anzeige */}
            <div className="flex justify-center gap-1">
              {[0, 1, 2, 3, 4].map((stufe) => (
                <div
                  key={stufe}
                  className={`h-1.5 w-8 rounded-full transition-colors ${
                    stufe <= aktuelleKarte.stufe
                      ? "bg-[#3E5A6A]"
                      : "bg-[var(--lern-divider)]"
                  }`}
                />
              ))}
            </div>

            {/* Bewertungs-Buttons (nur sichtbar wenn umgedreht) */}
            <AnimatePresence>
              {isFlipped && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="grid grid-cols-4 gap-2"
                >
                  <button
                    onClick={() => handleBewertung("nochmal")}
                    className="rounded-2xl bg-[#C96B5C]/10 px-3 py-4 min-h-[44px] text-center transition-all active:scale-95"
                  >
                    <span className="text-lg">↻</span>
                    <p className="mt-1 text-xs font-semibold text-[#C96B5C]">
                      {t("again")}
                    </p>
                    <p className="text-xs text-[var(--lern-text-tertiary)]">1 Tag</p>
                  </button>

                  <button
                    onClick={() => handleBewertung("schwer")}
                    className="rounded-2xl bg-[#D4956A]/10 px-3 py-4 min-h-[44px] text-center transition-all active:scale-95"
                  >
                    <span className="text-lg">😓</span>
                    <p className="mt-1 text-xs font-semibold text-[#D4956A]">
                      {t("hard")}
                    </p>
                    <p className="text-xs text-[var(--lern-text-tertiary)]">
                      {aktuelleKarte.intervall} {aktuelleKarte.intervall === 1 ? "Tag" : "Tage"}
                    </p>
                  </button>

                  <button
                    onClick={() => handleBewertung("gut")}
                    className="rounded-2xl bg-[#3E5A6A]/10 px-3 py-4 min-h-[44px] text-center transition-all active:scale-95"
                  >
                    <span className="text-lg">👍</span>
                    <p className="mt-1 text-xs font-semibold text-[#3E5A6A]">
                      {t("good")}
                    </p>
                    <p className="text-xs text-[var(--lern-text-tertiary)]">
                      {Math.max(1, aktuelleKarte.intervall * 2)} Tage
                    </p>
                  </button>

                  <button
                    onClick={() => handleBewertung("leicht")}
                    className="rounded-2xl bg-[#218C71]/10 px-3 py-4 min-h-[44px] text-center transition-all active:scale-95"
                  >
                    <span className="text-lg">🚀</span>
                    <p className="mt-1 text-xs font-semibold text-[#218C71]">
                      {t("easy")}
                    </p>
                    <p className="text-xs text-[var(--lern-text-tertiary)]">
                      {Math.max(3, aktuelleKarte.intervall * 3)} Tage
                    </p>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Keyboard Shortcut Hints */}
            <div className="hidden md:flex justify-center gap-4 text-xs text-[var(--lern-text-tertiary)]">
              <span>Leertaste: Umdrehen</span>
              <span>1-4: Bewerten</span>
            </div>
          </div>
        ) : (
          /* Keine Karten fällig */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 text-center"
          >
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#3E5A6A]/10">
              <span className="text-5xl">🎉</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--lern-text-primary)]">
              {t("noCards")}
            </h2>
            <p className="mt-2 text-[var(--lern-text-tertiary)]">
              {statistiken.gesamt > 0
                ? `Du hast ${statistiken.gesamt} Karten insgesamt, davon ${statistiken.gemeistert} gemeistert.`
                : "Lerne Lektionen und falsche Antworten werden automatisch zu Karteikarten."}
            </p>
            <Link
              href={`/${locale}/lernen/le-01`}
              className="mt-6 inline-block rounded-2xl bg-[#218C71] px-8 py-4 text-base font-semibold text-white transition-all active:scale-[0.98]"
            >
              Weiterlernen
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
