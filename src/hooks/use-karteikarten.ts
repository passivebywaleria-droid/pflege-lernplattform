"use client";

import { useState, useCallback, useEffect } from "react";
import type { KarteikarteVorlage } from "../../content/_types";

// --- Types ---

export interface Karteikarte {
  id: string;
  vorderseite: string;   // Frage oder Fachbegriff
  rueckseite: string;    // Antwort oder Erklärung
  leId: string;
  naechsteWiederholung: number;  // timestamp (ms)
  intervall: number;     // Tage (1, 3, 7, 14, 30)
  stufe: number;         // 0-4
  erstelltAm: number;    // timestamp (ms)
  quelle?: "vorgeneriert" | "schwaeche";  // Woher die Karte stammt
}

export type Bewertung = "nochmal" | "schwer" | "gut" | "leicht";

// --- SM-2 ähnlicher Algorithmus ---

function berechneNeuesIntervall(
  aktuellesStufe: number,
  aktuellesIntervall: number,
  bewertung: Bewertung,
): { stufe: number; intervall: number } {
  switch (bewertung) {
    case "nochmal":
      // Reset: Stufe auf 0, Intervall auf 1 Tag
      return { stufe: 0, intervall: 1 };
    case "schwer":
      // Stufe bleibt gleich, Intervall bleibt gleich
      return { stufe: aktuellesStufe, intervall: Math.max(1, aktuellesIntervall) };
    case "gut":
      // Stufe +1, Intervall verdoppelt
      return {
        stufe: Math.min(aktuellesStufe + 1, 4),
        intervall: aktuellesIntervall <= 0 ? 1 : aktuellesIntervall * 2,
      };
    case "leicht":
      // Stufe +1, Intervall verdreifacht
      return {
        stufe: Math.min(aktuellesStufe + 1, 4),
        intervall: aktuellesIntervall <= 0 ? 3 : aktuellesIntervall * 3,
      };
  }
}

// --- Storage ---

const STORAGE_KEY = "pflege-karteikarten";

function ladeKarteikarten(): Karteikarte[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Karteikarte[];
  } catch {
    return [];
  }
}

function speichereKarteikarten(karten: Karteikarte[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(karten));
  } catch {
    // localStorage voll — stille Fehlerbehandlung
  }
}

// --- Hook ---

export function useKarteikarten() {
  const [karten, setKarten] = useState<Karteikarte[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Laden aus localStorage
  useEffect(() => {
    setKarten(ladeKarteikarten());
    setLoaded(true);
  }, []);

  // Speichern bei Änderung
  useEffect(() => {
    if (loaded) {
      speichereKarteikarten(karten);
    }
  }, [karten, loaded]);

  // Neue Karteikarte hinzufügen
  const addKarteikarte = useCallback(
    (data: { vorderseite: string; rueckseite: string; leId: string }) => {
      setKarten((prev) => {
        // Duplikat-Check: gleiche Vorderseite + gleiche LE = nicht nochmal erstellen
        const existiert = prev.some(
          (k) => k.vorderseite === data.vorderseite && k.leId === data.leId,
        );
        if (existiert) return prev;

        const neueKarte: Karteikarte = {
          id: `kk-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          vorderseite: data.vorderseite,
          rueckseite: data.rueckseite,
          leId: data.leId,
          naechsteWiederholung: Date.now(), // Sofort fällig
          intervall: 1,
          stufe: 0,
          erstelltAm: Date.now(),
        };

        return [...prev, neueKarte];
      });
    },
    [],
  );

  // Karte bewerten (SM-2)
  const bewerte = useCallback(
    (id: string, ergebnis: Bewertung) => {
      setKarten((prev) =>
        prev.map((karte) => {
          if (karte.id !== id) return karte;

          const { stufe, intervall } = berechneNeuesIntervall(
            karte.stufe,
            karte.intervall,
            ergebnis,
          );

          return {
            ...karte,
            stufe,
            intervall,
            naechsteWiederholung: Date.now() + intervall * 24 * 60 * 60 * 1000,
          };
        }),
      );
    },
    [],
  );

  // Fällige Karten holen
  const getFaelligeKarten = useCallback((): Karteikarte[] => {
    const jetzt = Date.now();
    return karten
      .filter((k) => k.naechsteWiederholung <= jetzt)
      .sort((a, b) => a.naechsteWiederholung - b.naechsteWiederholung);
  }, [karten]);

  // Karte löschen
  const loescheKarteikarte = useCallback((id: string) => {
    setKarten((prev) => prev.filter((k) => k.id !== id));
  }, []);

  // Alle Karten für eine LE
  const getKartenFuerLe = useCallback(
    (leId: string): Karteikarte[] => {
      return karten.filter((k) => k.leId === leId);
    },
    [karten],
  );

  // Statistiken
  const getStatistiken = useCallback(() => {
    const jetzt = Date.now();
    const faellig = karten.filter((k) => k.naechsteWiederholung <= jetzt).length;
    const gesamt = karten.length;
    const gemeistert = karten.filter((k) => k.stufe >= 4).length;
    const neuHeute = karten.filter(
      (k) => k.erstelltAm > jetzt - 24 * 60 * 60 * 1000,
    ).length;

    return { faellig, gesamt, gemeistert, neuHeute };
  }, [karten]);

  // Pre-generierte Karteikarten aus Content importieren
  const importVorlagen = useCallback(
    (vorlagen: KarteikarteVorlage[], leId: string, sprachNiveau: "c1" | "b1" = "c1") => {
      setKarten((prev) => {
        const neueKarten: Karteikarte[] = [];
        for (const vorlage of vorlagen) {
          // Duplikat-Check über Vorlagen-ID
          const existiert = prev.some((k) => k.id === vorlage.id);
          if (existiert) continue;

          neueKarten.push({
            id: vorlage.id,
            vorderseite: vorlage.vorderseite,
            rueckseite: sprachNiveau === "b1" ? vorlage.rueckseiteB1 : vorlage.rueckseiteC1,
            leId,
            naechsteWiederholung: Date.now(),
            intervall: 1,
            stufe: 0,
            erstelltAm: Date.now(),
            quelle: "vorgeneriert",
          });
        }
        if (neueKarten.length === 0) return prev;
        return [...prev, ...neueKarten];
      });
    },
    [],
  );

  // Gemeisterte Karten abrufen (für Store-Sync mit LernFortschritt)
  const getGemeistarteKarten = useCallback((): Array<{ leId: string; begriff: string }> => {
    return karten
      .filter((k) => k.stufe >= 4)
      .map((k) => ({ leId: k.leId, begriff: k.vorderseite }));
  }, [karten]);

  return {
    karten,
    loaded,
    addKarteikarte,
    bewerte,
    getFaelligeKarten,
    loescheKarteikarte,
    getKartenFuerLe,
    getStatistiken,
    getGemeistarteKarten,
    importVorlagen,
  };
}
