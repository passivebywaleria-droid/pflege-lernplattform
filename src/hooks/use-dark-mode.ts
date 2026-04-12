import { create } from "zustand";
import { useEffect } from "react";

interface DarkModeStore {
  isDark: boolean;
  toggle: () => void;
  setDark: (value: boolean) => void;
}

export const useDarkModeStore = create<DarkModeStore>((set) => ({
  isDark: false,
  toggle: () =>
    set((state) => {
      const next = !state.isDark;
      if (typeof window !== "undefined") {
        localStorage.setItem("pflege-dark-mode", next ? "dark" : "light");
        document.documentElement.classList.toggle("dark", next);
      }
      return { isDark: next };
    }),
  setDark: (value: boolean) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("pflege-dark-mode", value ? "dark" : "light");
      document.documentElement.classList.toggle("dark", value);
    }
    set({ isDark: value });
  },
}));

/**
 * Hook zum Initialisieren des Dark Mode.
 * Liest localStorage und System-Preference.
 * Muss einmal in einem Client-Component aufgerufen werden.
 */
export function useDarkModeInit() {
  const setDark = useDarkModeStore((s) => s.setDark);

  useEffect(() => {
    const stored = localStorage.getItem("pflege-dark-mode");
    if (stored === "dark") {
      setDark(true);
    } else if (stored === "light") {
      setDark(false);
    } else {
      // System-Preference als Fallback
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDark(prefersDark);
    }
  }, [setDark]);
}
