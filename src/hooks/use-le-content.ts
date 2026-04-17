"use client";

import { useState, useEffect } from "react";
import type {
  ArtikelKapitel,
  Fallverlauf,
  PraxisUebung,
  ExamCase,
  LernSnack,
} from "../../content/_types";
import {
  fetchArtikel,
  fetchFallverlaeufe,
  fetchPraxis,
  fetchPruefungsfall,
  fetchSnacks,
} from "@/lib/content-api";
import {
  loadArtikel as staticLoadArtikel,
  loadFall as staticLoadFall,
  loadPraxis as staticLoadPraxis,
  loadPruefung as staticLoadPruefung,
  loadSnack as staticLoadSnack,
} from "../../content/content-loader";

// Static fallback: manifest-driven für alle LEs (le-01, le-06, …).
async function getStaticFallback(leId: string) {
  const [artikel, fall, praxis, pruefung, snack] = await Promise.all([
    staticLoadArtikel(leId),
    staticLoadFall(leId),
    staticLoadPraxis(leId),
    staticLoadPruefung(leId),
    staticLoadSnack(leId),
  ]);
  return {
    artikel: artikel ?? undefined,
    fallverlaeufe: fall ?? undefined,
    praxisUebungen: praxis ?? undefined,
    pruefungsfall: pruefung ?? undefined,
    lernSnack: snack ?? undefined,
  };
}

interface LeContentResult {
  artikel: ArtikelKapitel[] | undefined;
  fallverlaeufe: Fallverlauf[] | undefined;
  praxisUebungen: PraxisUebung[] | undefined;
  pruefungsfall: ExamCase | undefined;
  lernSnack: LernSnack[] | undefined;
  loading: boolean;
}

/**
 * Lädt Tab-Content für eine LE (Artikel, Fälle, Praxis, Prüfung, Snacks).
 * API-First mit Static-Fallback.
 */
export function useLeContent(leId: string): LeContentResult {
  const [artikel, setArtikel] = useState<ArtikelKapitel[] | undefined>();
  const [fallverlaeufe, setFallverlaeufe] = useState<Fallverlauf[] | undefined>();
  const [praxisUebungen, setPraxisUebungen] = useState<PraxisUebung[] | undefined>();
  const [pruefungsfall, setPruefungsfall] = useState<ExamCase | undefined>();
  const [lernSnack, setLernSnack] = useState<LernSnack[] | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);

      try {
        // Try all API calls in parallel
        const [apiArtikel, apiFall, apiPraxis, apiPruefung, apiSnack] =
          await Promise.all([
            fetchArtikel(leId),
            fetchFallverlaeufe(leId),
            fetchPraxis(leId),
            fetchPruefungsfall(leId),
            fetchSnacks(leId),
          ]);

        if (cancelled) return;

        // Use API data if available, otherwise try static fallback
        const hasApiData =
          apiArtikel.length > 0 ||
          apiFall.length > 0 ||
          apiPraxis.length > 0 ||
          apiPruefung !== null ||
          apiSnack.length > 0;

        if (hasApiData) {
          setArtikel(apiArtikel.length > 0 ? apiArtikel : undefined);
          setFallverlaeufe(apiFall.length > 0 ? apiFall : undefined);
          setPraxisUebungen(apiPraxis.length > 0 ? apiPraxis : undefined);
          setPruefungsfall(apiPruefung ?? undefined);
          setLernSnack(apiSnack.length > 0 ? apiSnack : undefined);
        } else {
          // Static fallback
          const fallback = await getStaticFallback(leId);
          if (cancelled) return;
          setArtikel(fallback.artikel);
          setFallverlaeufe(fallback.fallverlaeufe);
          setPraxisUebungen(fallback.praxisUebungen);
          setPruefungsfall(fallback.pruefungsfall);
          setLernSnack(fallback.lernSnack);
        }
      } catch {
        // On error, try static fallback
        if (cancelled) return;
        const fallback = await getStaticFallback(leId);
        if (cancelled) return;
        setArtikel(fallback.artikel);
        setFallverlaeufe(fallback.fallverlaeufe);
        setPraxisUebungen(fallback.praxisUebungen);
        setPruefungsfall(fallback.pruefungsfall);
        setLernSnack(fallback.lernSnack);
      }

      if (!cancelled) setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [leId]);

  return { artikel, fallverlaeufe, praxisUebungen, pruefungsfall, lernSnack, loading };
}
