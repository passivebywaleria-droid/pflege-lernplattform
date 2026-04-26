"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  pflegeGlossar,
  FACHGEBIETE,
  sucheGlossar,
  type GlossarEintrag,
  type Fachgebiet,
} from "@/lib/glossar/pflege-glossar";
import { useTts } from "@/hooks/use-tts";

/** Browser-TTS Fallback für AR/TR (Azure nur de-DE) */
function sprecheBrowserTts(text: string, lang: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.85;
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) => v.lang.startsWith(lang.slice(0, 2)));
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

/** Mini-Lautsprecher-Button — Azure für DE, Browser-TTS für AR/TR */
function GlossarTtsButton({ text, lang }: { text: string; lang: string }) {
  const { speak: speakAzure, playing } = useTts();

  const handleClick = useCallback(() => {
    if (lang.startsWith("de")) {
      speakAzure(text, 0.85);
    } else {
      sprecheBrowserTts(text, lang);
    }
  }, [text, lang, speakAzure]);

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center w-7 h-7 rounded-full transition-colors ml-1.5 ${
        playing && lang.startsWith("de")
          ? "bg-[var(--lern-accent)] text-white"
          : "bg-[var(--lern-accent)]/10 text-[var(--lern-accent)] hover:bg-[var(--lern-accent)]/20"
      }`}
      title="Vorlesen"
      aria-label={`${text} vorlesen`}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    </button>
  );
}

/** Fachgebiet-Badge-Farben */
const FACHGEBIET_FARBEN: Record<string, string> = {
  Prophylaxe: "bg-[#3E5A6A]/10 text-[#4A7350]",
  Anatomie: "bg-[var(--lern-accent)]/10 text-[var(--lern-accent)]",
  Vitalzeichen: "bg-[#D4956A]/10 text-[#B07A52]",
  Pflegeprozess: "bg-[#9B7EA6]/10 text-[#8A6D95]",
  Hygiene: "bg-[#8AABB5]/10 text-[#6A8B95]",
  Krankheitslehre: "bg-[#C96B5C]/10 text-[#C96B5C]",
  Medikamente: "bg-[#D4956A]/10 text-[#D4956A]",
  Ernährung: "bg-[#3E5A6A]/10 text-[#4A7350]",
  Dokumentation: "bg-[#8E8E93]/10 text-[#636366]",
  Kommunikation: "bg-[#9B7EA6]/10 text-[#8A6D95]",
  Notfall: "bg-[#C96B5C]/10 text-[#A0584C]",
};

type Ansicht = "de" | "ar" | "tr";

export default function GlossarPage() {
  const t = useTranslations("glossar");
  const locale = useLocale();

  const [inputValue, setInputValue] = useState("");
  const [suchtext, setSuchtext] = useState("");
  const [aktiverFilter, setAktiverFilter] = useState<Fachgebiet | "alle">("alle");

  // Debounce: Suchtext erst nach 300ms aktualisieren
  useEffect(() => {
    const timer = setTimeout(() => setSuchtext(inputValue), 300);
    return () => clearTimeout(timer);
  }, [inputValue]);
  const [ansicht, setAnsicht] = useState<Ansicht>(
    locale === "ar" ? "ar" : locale === "tr" ? "tr" : "de"
  );
  const [aufgeklappt, setAufgeklappt] = useState<string | null>(null);

  const gefilterteEintraege = useMemo(() => {
    let ergebnis: GlossarEintrag[] = sucheGlossar(suchtext);
    if (aktiverFilter !== "alle") {
      ergebnis = ergebnis.filter((e) => e.fachgebiet === aktiverFilter);
    }
    return ergebnis.sort((a, b) => a.begriffDe.localeCompare(b.begriffDe, "de"));
  }, [suchtext, aktiverFilter]);

  /** Erklärung je nach Ansicht */
  function getErklaerung(e: GlossarEintrag): string {
    if (ansicht === "ar") return e.erklaerungAr;
    if (ansicht === "tr") return e.erklaerungTr;
    return e.erklaerungDe;
  }

  return (
    <div
      className="min-h-screen bg-[var(--lern-bg)] pb-24"
      dir={locale === "ar" ? "rtl" : "ltr"}
      style={{ color: "var(--lern-text-primary)" }}
    >
      {/* Header — Bundle-Stil */}
      <header className="sticky top-0 z-40 bg-[var(--lern-bg)]/95 backdrop-blur-md border-b border-[var(--lern-border)]">
        <div className="max-w-2xl mx-auto px-4 pt-3 pb-3">
          <div className="flex items-center justify-between mb-2.5">
            <h1 className="text-base font-semibold text-[var(--lern-text-primary)]">
              {t("title")}
            </h1>
            <span className="text-[10px] tabular-nums uppercase tracking-wider text-[var(--lern-text-tertiary)]">
              {gefilterteEintraege.length}
            </span>
          </div>

          {/* Suchfeld */}
          <div className="relative mb-2.5">
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--lern-text-tertiary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t("searchPlaceholder")}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] text-sm focus:outline-none focus:border-[var(--lern-accent)] transition-colors"
            />
          </div>

          {/* Sprach-Toggle + Fachgebiet-Filter in einer Zeile */}
          <div className="flex gap-1 mb-1.5">
            {(["de", "ar", "tr"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setAnsicht(lang)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                  ansicht === lang
                    ? "bg-[var(--lern-accent)] text-white"
                    : "bg-[var(--lern-bg-primary)] text-[var(--lern-text-tertiary)] border border-[var(--lern-border)]"
                }`}
              >
                {lang === "de" ? "DE" : lang === "ar" ? "AR" : "TR"}
              </button>
            ))}
          </div>

          {/* Fachgebiet-Filter */}
          <div className="flex gap-1 overflow-x-auto pb-0.5 -mx-4 px-4 no-scrollbar">
            <button
              onClick={() => setAktiverFilter("alle")}
              className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${
                aktiverFilter === "alle"
                  ? "bg-[var(--lern-text-primary)] text-[var(--lern-bg)]"
                  : "bg-[var(--lern-bg-primary)] text-[var(--lern-text-tertiary)] border border-[var(--lern-border)]"
              }`}
            >
              {t("all")}
            </button>
            {FACHGEBIETE.map((fg) => (
              <button
                key={fg}
                onClick={() => setAktiverFilter(fg)}
                className={`shrink-0 px-2.5 py-1 rounded-full text-[11px] font-medium transition-colors ${
                  aktiverFilter === fg
                    ? "bg-[var(--lern-text-primary)] text-[var(--lern-bg)]"
                    : "bg-[var(--lern-bg-primary)] text-[var(--lern-text-tertiary)] border border-[var(--lern-border)]"
                }`}
              >
                {fg}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Glossar-Karten */}
      <div className="max-w-2xl mx-auto px-4 pt-3 space-y-2">
        <AnimatePresence mode="popLayout">
          {gefilterteEintraege.map((eintrag) => {
            const istOffen = aufgeklappt === eintrag.id;
            return (
              <motion.div
                key={eintrag.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setAufgeklappt(istOffen ? null : eintrag.id)}
                  className="w-full text-left px-4 py-3.5 flex items-start justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    {/* Deutscher Begriff (immer sichtbar) */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-base font-semibold text-[var(--lern-text-primary)]">
                        {eintrag.begriffDe}
                      </span>
                      <GlossarTtsButton text={eintrag.begriffDe} lang="de-DE" />
                    </div>

                    {/* Übersetzungen */}
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                      <span className="text-sm text-[var(--lern-text-primary)]/50" dir="rtl">
                        {eintrag.begriffAr}
                      </span>
                      <span className="text-sm text-[var(--lern-text-primary)]/50">
                        {eintrag.begriffTr}
                      </span>
                    </div>
                  </div>

                  {/* Fachgebiet-Badge + Chevron */}
                  <div className="flex items-center gap-2 shrink-0 mt-0.5">
                    <span
                      className={`px-2 py-0.5 rounded-md text-xs font-medium ${
                        FACHGEBIET_FARBEN[eintrag.fachgebiet] ?? "bg-[var(--lern-bg)] text-[#636366]"
                      }`}
                    >
                      {eintrag.fachgebiet}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#8e8e93] transition-transform ${istOffen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </button>

                {/* Aufklapp-Bereich */}
                <AnimatePresence>
                  {istOffen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 border-t border-[var(--lern-divider)]">
                        {/* Erklärung */}
                        <p
                          className="text-sm text-[var(--lern-text-primary)]/80 leading-relaxed mb-3"
                          dir={ansicht === "ar" ? "rtl" : "ltr"}
                        >
                          {getErklaerung(eintrag)}
                        </p>

                        {/* Alle 3 Übersetzungen */}
                        <div className="space-y-2 rounded-xl bg-[var(--lern-bg)] p-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-[#8e8e93] w-6">DE</span>
                            <span className="text-sm font-medium text-[var(--lern-text-primary)]">
                              {eintrag.begriffDe}
                            </span>
                            <GlossarTtsButton text={eintrag.begriffDe} lang="de-DE" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-[#8e8e93] w-6">AR</span>
                            <span className="text-sm text-[var(--lern-text-primary)]" dir="rtl">
                              {eintrag.begriffAr}
                            </span>
                            <GlossarTtsButton text={eintrag.begriffAr} lang="ar" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-[#8e8e93] w-6">TR</span>
                            <span className="text-sm text-[var(--lern-text-primary)]">
                              {eintrag.begriffTr}
                            </span>
                            <GlossarTtsButton text={eintrag.begriffTr} lang="tr" />
                          </div>
                        </div>

                        {/* Aussprache */}
                        {eintrag.aussprache && (
                          <p className="text-xs text-[#8e8e93] mt-2">
                            Aussprache: [{eintrag.aussprache}]
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {gefilterteEintraege.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#8e8e93] text-sm">{t("noResults")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
