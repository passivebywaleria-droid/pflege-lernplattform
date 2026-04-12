import { create } from "zustand";
import { useEffect } from "react";

/**
 * Unterstützte Muttersprachen für Glossar-Übersetzungen.
 * Priorität aus recherche/paedagogik/ERGEBNIS.md + recherche/wettbewerb/ERGEBNIS.md
 */
export type Muttersprache = "de" | "tr" | "ar" | "en" | "vi" | "tl" | "bs" | "uk" | "ro";

export interface MutterspracheOption {
  code: Muttersprache;
  label: string;       // Eigenbezeichnung
  labelDe: string;     // Deutsche Bezeichnung
}

export const MUTTERSPRACHE_OPTIONS: MutterspracheOption[] = [
  { code: "de", label: "Deutsch", labelDe: "Deutsch" },
  { code: "tr", label: "Türkçe", labelDe: "Türkisch" },
  { code: "ar", label: "العربية", labelDe: "Arabisch" },
  { code: "en", label: "English", labelDe: "Englisch" },
  { code: "vi", label: "Tiếng Việt", labelDe: "Vietnamesisch" },
  { code: "tl", label: "Filipino", labelDe: "Tagalog/Filipino" },
  { code: "bs", label: "Bosanski", labelDe: "Bosnisch" },
  { code: "uk", label: "Українська", labelDe: "Ukrainisch" },
  { code: "ro", label: "Română", labelDe: "Rumänisch" },
];

const STORAGE_KEY = "pflege-muttersprache";

interface MutterspracheStore {
  /** Gewählte Muttersprache. null = noch nicht gewählt */
  sprache: Muttersprache | null;
  /** true wenn die Auswahl noch nie getroffen wurde */
  needsSelection: boolean;
  /** Muttersprache setzen */
  setSprache: (code: Muttersprache) => void;
}

export const useMutterspracheStore = create<MutterspracheStore>((set) => ({
  sprache: null,
  needsSelection: true,
  setSprache: (code: Muttersprache) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, code);
    }
    set({ sprache: code, needsSelection: false });
  },
}));

/**
 * Initialisiert die Muttersprache aus localStorage.
 * Einmal in einem Client-Component aufrufen (z.B. Layout).
 */
export function useMutterspracheInit() {
  const setSprache = useMutterspracheStore((s) => s.setSprache);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && MUTTERSPRACHE_OPTIONS.some(o => o.code === stored)) {
      setSprache(stored as Muttersprache);
    }
  }, [setSprache]);
}
