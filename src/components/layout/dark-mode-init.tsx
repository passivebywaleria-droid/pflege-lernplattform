"use client";

import { useDarkModeInit } from "@/hooks/use-dark-mode";

/**
 * Client-Komponente die den Dark-Mode-Store beim App-Start initialisiert.
 * Liest localStorage und System-Preference, synchronisiert mit document.documentElement.
 * Wird im Root-Layout gerendert (das selbst ein Server Component ist).
 */
export function DarkModeInit() {
  useDarkModeInit();
  return null;
}
