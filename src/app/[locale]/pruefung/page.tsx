"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  getVerfuegbarePruefungen,
  ALLE_FRAGEN,
  waehleFragen,
  extrahiereSchwaechen,
  type PruefungsFrage,
} from "@/lib/pruefung/fragen-pool";
import { useLernFortschritt } from "@/hooks/use-lern-fortschritt";
import { getCrossLEPatienten } from "../../../../content/_patients";
import type { ExamPatient } from "../../../../content/_types";

// --- Typen ---

interface PruefungsErgebnis {
  ceId: string;
  total: number;
  richtig: number;
  prozent: number;
  zeitSekunden: number;
  schwaechen: string[];
  antworten: boolean[];
  fragen: PruefungsFrage[];
  datum: string;
}

interface GespeichertesErgebnis {
  ceId: string;
  prozent: number;
  datum: string;
}

const STORAGE_KEY = "pflege-pruefungen";

function ladeErgebnisse(): GespeichertesErgebnis[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as GespeichertesErgebnis[];
  } catch { /* leer */ }
  return [];
}

function speichereErgebnis(e: GespeichertesErgebnis): void {
  try {
    const alle = ladeErgebnisse();
    alle.push(e);
    // Nur letzte 50 Ergebnisse behalten
    localStorage.setItem(STORAGE_KEY, JSON.stringify(alle.slice(-50)));
  } catch { /* voll */ }
}

function letzterVersuch(ceId: string): GespeichertesErgebnis | null {
  const alle = ladeErgebnisse().filter((e) => e.ceId === ceId);
  return alle.length > 0 ? alle[alle.length - 1] : null;
}

// --- Hauptkomponente ---

// --- Fallverlauf-Platzhalter ---

function FallverlaufTab({ locale }: { locale: string }) {
  const crossLEPatienten = useMemo(() => getCrossLEPatienten(), []);

  if (crossLEPatienten.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-6 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl bg-[#9B7EA6]/5 border border-[#9B7EA6]/20 p-5"
        >
          <h2 className="text-sm font-semibold text-[#9B7EA6] mb-2">Fallverl&auml;ufe</h2>
          <p className="text-sm text-[var(--lern-text-secondary)] leading-relaxed">
            Hier werden LE-&uuml;bergreifende Patientenf&auml;lle erscheinen — wie in der echten PflAPrV-Pr&uuml;fung.
            Ein Patient durchl&auml;uft mehrere Stationen und Zeitpunkte. Du triffst Entscheidungen, planst Pflege und begr&uuml;ndest dein Handeln.
          </p>
          <p className="text-sm text-[var(--lern-text-tertiary)] mt-3">
            Verf&uuml;gbar sobald du mindestens 2 Lerneinheiten abgeschlossen hast, die denselben Patienten teilen.
          </p>
        </motion.div>

        {/* Vorschau: Welche Patienten kommen */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
        >
          <h3 className="text-sm font-semibold mb-3">Geplante Fallverl&auml;ufe</h3>
          <p className="text-xs text-[var(--lern-text-tertiary)]">
            Patienten werden &uuml;ber mehrere LEs hinweg wiederverwendet. Sobald Cross-LE-Content generiert wird, erscheinen hier die Fallverl&auml;ufe.
          </p>
        </motion.div>
      </div>
    );
  }

  // Wenn Cross-LE-Patienten existieren
  return (
    <div className="mx-auto max-w-2xl px-4 py-6 space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-[#9B7EA6]/5 border border-[#9B7EA6]/20 p-5"
      >
        <h2 className="text-sm font-semibold text-[#9B7EA6] mb-2">Fallverl&auml;ufe — Pr&uuml;fungssimulation</h2>
        <ul className="text-sm text-[var(--lern-text-secondary)] space-y-1">
          <li>Patienten-Fallverlauf &uuml;ber mehrere Zeitpunkte</li>
          <li>Pflegeplanung, Entscheidungen und Begr&uuml;ndungen</li>
          <li>Bloom-Level 4-6 (Analysieren, Bewerten, Erschaffen)</li>
          <li>Kein Glossar, keine Hilfen — wie in der Pr&uuml;fung</li>
        </ul>
      </motion.div>

      {crossLEPatienten.map((patient: ExamPatient, i: number) => (
        <motion.div
          key={patient.patientId}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 * (i + 1) }}
          className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
        >
          <div className="mb-3">
            <h3 className="text-base font-semibold">{patient.name}</h3>
            <p className="text-xs text-[var(--lern-text-secondary)]">
              {patient.alter} Jahre, {patient.diagnosen.join(", ")}
            </p>
            <p className="text-xs text-[var(--lern-text-tertiary)] mt-1">
              Lerneinheiten: {patient.sourceLEs.join(", ")}
            </p>
          </div>

          <p className="text-sm text-[var(--lern-text-secondary)] mb-3">{patient.steckbrief}</p>

          <button
            disabled
            className="w-full rounded-2xl bg-[var(--lern-accent)]/40 px-5 py-3 text-sm font-semibold text-white cursor-not-allowed"
          >
            Bald verf&uuml;gbar
          </button>
        </motion.div>
      ))}
    </div>
  );
}

export default function PruefungPage() {
  const locale = useLocale();
  const [phase, setPhase] = useState<"auswahl" | "pruefung" | "ergebnis">("auswahl");
  const [modus, setModus] = useState<"mc" | "fallverlauf">("mc");
  const [gewaehltesCE, setGewaehltesCE] = useState<string | null>(null);
  const [fragen, setFragen] = useState<PruefungsFrage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [antworten, setAntworten] = useState<boolean[]>([]);
  const [gewaehlt, setGewaehlt] = useState<number | null>(null);
  const [ergebnis, setErgebnis] = useState<PruefungsErgebnis | null>(null);
  const [zeitVerbleibend, setZeitVerbleibend] = useState(0);
  const startZeit = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const { logAktivitaet } = useLernFortschritt();
  const verfuegbar = useMemo(() => getVerfuegbarePruefungen(), []);

  // Timer
  useEffect(() => {
    if (phase !== "pruefung") return;
    timerRef.current = setInterval(() => {
      setZeitVerbleibend((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase]);

  // Zeit abgelaufen
  useEffect(() => {
    if (zeitVerbleibend === 0 && phase === "pruefung") {
      abschliessen(antworten, fragen);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zeitVerbleibend]);

  const abschliessen = useCallback(
    (aktuelleAntworten: boolean[], aktuelleFragen: PruefungsFrage[]) => {
      if (timerRef.current) clearInterval(timerRef.current);
      const zeitSekunden = Math.round((Date.now() - startZeit.current) / 1000);
      const richtig = aktuelleAntworten.filter(Boolean).length;
      const total = aktuelleFragen.length;
      const prozent = total > 0 ? Math.round((richtig / total) * 100) : 0;
      const schwaechen = extrahiereSchwaechen(aktuelleFragen, aktuelleAntworten);

      const e: PruefungsErgebnis = {
        ceId: gewaehltesCE ?? "",
        total,
        richtig,
        prozent,
        zeitSekunden,
        schwaechen,
        antworten: aktuelleAntworten,
        fragen: aktuelleFragen,
        datum: new Date().toISOString(),
      };

      speichereErgebnis({ ceId: e.ceId, prozent: e.prozent, datum: e.datum });
      logAktivitaet(Math.round(zeitSekunden / 60), richtig * 5, 0);
      setErgebnis(e);
      setPhase("ergebnis");
    },
    [gewaehltesCE, logAktivitaet],
  );

  const startePruefung = useCallback(
    (ceId: string) => {
      const pool = ALLE_FRAGEN[ceId];
      if (!pool) return;
      const ausgewaehlt = waehleFragen(pool, 20);
      setGewaehltesCE(ceId);
      setFragen(ausgewaehlt);
      setCurrentIndex(0);
      setAntworten([]);
      setGewaehlt(null);
      setZeitVerbleibend(ausgewaehlt.length * 90);
      startZeit.current = Date.now();
      setPhase("pruefung");
    },
    [],
  );

  const handleAntwort = useCallback(
    (optionIndex: number) => {
      if (gewaehlt !== null) return; // Doppelklick verhindern
      setGewaehlt(optionIndex);

      const frage = fragen[currentIndex];
      const correct = frage.optionen[optionIndex].istRichtig;
      const neueAntworten = [...antworten, correct];
      setAntworten(neueAntworten);

      // Kurze Pause, dann nächste Frage (kein Feedback!)
      setTimeout(() => {
        if (currentIndex < fragen.length - 1) {
          setCurrentIndex((i) => i + 1);
          setGewaehlt(null);
        } else {
          abschliessen(neueAntworten, fragen);
        }
      }, 300);
    },
    [gewaehlt, fragen, currentIndex, antworten, abschliessen],
  );

  const formatZeit = (sek: number) => {
    const min = Math.floor(sek / 60);
    const s = sek % 60;
    return `${min}:${s.toString().padStart(2, "0")}`;
  };

  // === AUSWAHL-PHASE ===
  if (phase === "auswahl") {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
        <div className="bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50">
          <div className="mx-auto max-w-2xl px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Pr&uuml;fungsmodus</h1>
                <p className="text-sm text-[var(--lern-text-secondary)]">Simulierte Pr&uuml;fungen im echten Format</p>
              </div>
              <Link href={`/${locale}/dashboard`} className="text-sm text-[#C4877F] font-medium">
                Dashboard
              </Link>
            </div>

            {/* Tab-Switch: MC | Fallverlauf */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setModus("mc")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  modus === "mc"
                    ? "bg-[var(--lern-accent)] text-white"
                    : "bg-[var(--lern-bg)] text-[var(--lern-text-secondary)]"
                }`}
              >
                MC-Pr&uuml;fung
              </button>
              <button
                onClick={() => setModus("fallverlauf")}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  modus === "fallverlauf"
                    ? "bg-[#9B7EA6] text-white"
                    : "bg-[var(--lern-bg)] text-[var(--lern-text-secondary)]"
                }`}
              >
                Fallverlauf
              </button>
            </div>
          </div>
        </div>

        {modus === "fallverlauf" ? (
          <FallverlaufTab locale={locale} />
        ) : (
        <div className="mx-auto max-w-2xl px-4 py-6 space-y-4">
          {/* Info-Box */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-[#D4956A]/5 border border-[#D4956A]/20 p-5"
          >
            <h2 className="text-sm font-semibold text-[#D4956A] mb-2">Wie in der echten Pr&uuml;fung</h2>
            <ul className="text-sm text-[var(--lern-text-secondary)] space-y-1">
              <li>20 Fragen im Multiple-Choice-Format</li>
              <li>Zeitlimit: 90 Sekunden pro Frage</li>
              <li>Keine Hilfen, kein Glossar, keine Erkl&auml;rungen</li>
              <li>Ergebnis + Schw&auml;chen-Analyse am Ende</li>
            </ul>
          </motion.div>

          {/* Prüfungen */}
          {verfuegbar.map((p, i) => {
            const letzter = letzterVersuch(p.ceId);
            const reife = letzter
              ? letzter.prozent >= 80
                ? "gruen"
                : letzter.prozent >= 60
                  ? "gelb"
                  : "rot"
              : null;

            return (
              <motion.div
                key={p.ceId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * (i + 1) }}
                className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-base font-semibold">{p.label}</h3>
                    <p className="text-xs text-[var(--lern-text-secondary)]">{p.fragenAnzahl} Fragen im Pool</p>
                  </div>
                  {reife && (
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor:
                            reife === "gruen" ? "#6B8F71" : reife === "gelb" ? "#D4956A" : "#C96B5C",
                        }}
                      />
                      <span className="text-xs text-[var(--lern-text-secondary)]">
                        Letzter Versuch: {letzter?.prozent}%
                      </span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => startePruefung(p.ceId)}
                  className="w-full rounded-2xl bg-[var(--lern-accent)] px-5 py-3 text-sm font-semibold text-white transition-all active:scale-[0.98]"
                >
                  Pr&uuml;fung starten
                </button>
              </motion.div>
            );
          })}

          {verfuegbar.length === 0 && (
            <div className="text-center py-12 text-[var(--lern-text-secondary)]">
              <p className="text-sm">Noch keine Pr&uuml;fungen verf&uuml;gbar.</p>
            </div>
          )}
        </div>
        )}
      </div>
    );
  }

  // === PRÜFUNGS-PHASE ===
  if (phase === "pruefung") {
    const frage = fragen[currentIndex];
    if (!frage) return null;

    const fortschritt = ((currentIndex + 1) / fragen.length) * 100;
    const zeitWarnung = zeitVerbleibend < 60;

    return (
      <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
        {/* Header */}
        <div className="sticky top-0 z-50 bg-[var(--lern-bg-primary)] border-b border-[var(--lern-border)]/50 px-4 py-3">
          <div className="mx-auto max-w-2xl flex items-center gap-4">
            <button
              onClick={() => {
                if (timerRef.current) clearInterval(timerRef.current);
                setPhase("auswahl");
              }}
              className="text-sm text-[var(--lern-text-secondary)] hover:text-[var(--lern-text-primary)] transition-colors"
            >
              Abbrechen
            </button>

            <div className="flex-1 h-2 rounded-full bg-[var(--lern-bg)]">
              <motion.div
                className="h-full rounded-full bg-[var(--lern-accent)]"
                animate={{ width: `${fortschritt}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <span className="text-sm font-medium text-[var(--lern-text-secondary)]">
              {currentIndex + 1}/{fragen.length}
            </span>

            <div
              className={`rounded-xl px-3 py-1.5 text-sm font-bold ${
                zeitWarnung
                  ? "bg-[#C96B5C]/10 text-[#C96B5C] animate-pulse"
                  : "bg-[var(--lern-bg)] text-[var(--lern-text-primary)]"
              }`}
            >
              {formatZeit(zeitVerbleibend)}
            </div>
          </div>
        </div>

        {/* Frage */}
        <div className="mx-auto max-w-2xl px-4 py-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={frage.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Schwierigkeit */}
              <div className="flex items-center gap-2">
                <span
                  className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor:
                      frage.schwierigkeit === "leicht"
                        ? "#6B8F7115"
                        : frage.schwierigkeit === "mittel"
                          ? "#D4956A15"
                          : "#C96B5C15",
                    color:
                      frage.schwierigkeit === "leicht"
                        ? "#6B8F71"
                        : frage.schwierigkeit === "mittel"
                          ? "#D4956A"
                          : "#C96B5C",
                  }}
                >
                  {frage.schwierigkeit}
                </span>
                <span className="text-xs text-[var(--lern-text-tertiary)]">{frage.thema}</span>
              </div>

              {/* Fragetext */}
              <h2 className="text-lg font-semibold leading-relaxed">{frage.fragetext}</h2>

              {/* Optionen */}
              <div className="space-y-3">
                {frage.optionen.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => handleAntwort(oi)}
                    disabled={gewaehlt !== null}
                    className={`w-full text-left rounded-2xl border px-5 py-4 text-sm font-medium transition-all active:scale-[0.98] ${
                      gewaehlt === oi
                        ? "border-[#C4877F] bg-[var(--lern-accent)]/5"
                        : "border-[var(--lern-border)] bg-[var(--lern-bg-primary)] hover:border-[#B07A72]/40"
                    }`}
                  >
                    <span className="text-[var(--lern-text-tertiary)] mr-2 font-semibold">
                      {String.fromCharCode(65 + oi)}.
                    </span>
                    {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // === ERGEBNIS-PHASE ===
  if (phase === "ergebnis" && ergebnis) {
    const reife =
      ergebnis.prozent >= 80 ? "gruen" : ergebnis.prozent >= 60 ? "gelb" : "rot";
    const farbe =
      reife === "gruen" ? "#6B8F71" : reife === "gelb" ? "#D4956A" : "#C96B5C";
    const label =
      reife === "gruen"
        ? "Pr\u00fcfungsreif"
        : reife === "gelb"
          ? "Fast bereit"
          : "Noch \u00fcben";

    // Vorheriger Versuch
    const alleVersuche = ladeErgebnisse().filter((e) => e.ceId === ergebnis.ceId);
    const vorherigerVersuch = alleVersuche.length > 1 ? alleVersuche[alleVersuche.length - 2] : null;

    return (
      <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
        <div className="mx-auto max-w-2xl px-4 py-8 space-y-6">
          {/* Ergebnis-Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-8 text-center space-y-4"
          >
            <div
              className="w-20 h-20 mx-auto rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${farbe}15` }}
            >
              <span className="text-4xl font-bold" style={{ color: farbe }}>
                {ergebnis.prozent}%
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-bold">{label}</h1>
              <p className="text-sm text-[var(--lern-text-secondary)] mt-1">
                {ergebnis.richtig} von {ergebnis.total} Fragen richtig
              </p>
            </div>

            {/* Vergleich */}
            {vorherigerVersuch && (
              <div className="rounded-xl bg-[var(--lern-bg)] px-4 py-3">
                <p className="text-sm">
                  Letzter Versuch:{" "}
                  <span className="font-semibold">{vorherigerVersuch.prozent}%</span>
                  {" \u2192 "}Jetzt:{" "}
                  <span className="font-semibold" style={{ color: farbe }}>
                    {ergebnis.prozent}%
                  </span>
                  {ergebnis.prozent > vorherigerVersuch.prozent && (
                    <span className="text-[#6B8F71] font-semibold">
                      {" "}(+{ergebnis.prozent - vorherigerVersuch.prozent}%)
                    </span>
                  )}
                </p>
              </div>
            )}
          </motion.div>

          {/* Statistiken */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-3 gap-3"
          >
            <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 text-center">
              <p className="text-xs text-[var(--lern-text-secondary)]">Richtig</p>
              <p className="text-xl font-bold text-[#6B8F71]">{ergebnis.richtig}</p>
            </div>
            <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 text-center">
              <p className="text-xs text-[var(--lern-text-secondary)]">Falsch</p>
              <p className="text-xl font-bold text-[#C96B5C]">
                {ergebnis.total - ergebnis.richtig}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-4 text-center">
              <p className="text-xs text-[var(--lern-text-secondary)]">Zeit</p>
              <p className="text-xl font-bold">{formatZeit(ergebnis.zeitSekunden)}</p>
            </div>
          </motion.div>

          {/* Schwächen */}
          {ergebnis.schwaechen.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl bg-[#C96B5C]/5 border border-[#C96B5C]/20 p-5"
            >
              <h2 className="text-sm font-semibold text-[#C96B5C] mb-3">
                Diese Themen solltest du wiederholen
              </h2>
              <div className="space-y-2">
                {ergebnis.schwaechen.map((thema) => (
                  <div
                    key={thema}
                    className="rounded-xl bg-[var(--lern-bg-primary)] px-4 py-3 text-sm font-medium"
                  >
                    {thema}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Fragen-Detail */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] p-5"
          >
            <h2 className="text-sm font-semibold mb-3">Alle Fragen im Detail</h2>
            <div className="max-h-96 overflow-y-auto space-y-3">
              {ergebnis.fragen.map((f, i) => (
                <div
                  key={f.id}
                  className="rounded-xl border p-4 space-y-2"
                  style={{
                    borderColor: ergebnis.antworten[i] ? "#6B8F7140" : "#C96B5C40",
                    backgroundColor: ergebnis.antworten[i] ? "#6B8F7108" : "#C96B5C08",
                  }}
                >
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 text-sm font-semibold text-[var(--lern-text-tertiary)]">
                      #{i + 1}
                    </span>
                    <p className="text-sm font-medium">{f.fragetext}</p>
                  </div>
                  <p className="text-xs text-[var(--lern-text-secondary)] pl-6">{f.erklaerung}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Aktionen */}
          <div className="flex gap-3">
            <button
              onClick={() => {
                setPhase("auswahl");
                setErgebnis(null);
              }}
              className="flex-1 rounded-2xl bg-[var(--lern-bg)] px-5 py-3.5 text-sm font-semibold text-[var(--lern-text-primary)] transition-all active:scale-[0.98]"
            >
              Zur&uuml;ck
            </button>
            <Link
              href={`/${locale}/lernen/le-01`}
              className="flex-1 rounded-2xl bg-[var(--lern-accent)] px-5 py-3.5 text-sm font-semibold text-white text-center transition-all active:scale-[0.98]"
            >
              Schw&auml;chen &uuml;ben
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
