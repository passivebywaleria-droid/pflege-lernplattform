"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { X, BookOpen } from "lucide-react"

// Gleicher Key wie notifications.ts + use-lern-fortschritt.ts — ein System
const LAST_ACTIVITY_KEY = "pflege-letzte-aktivitaet"
const BANNER_DISMISSED_KEY = "pflege-banner-dismissed"

function getToday(): string {
  return new Date().toISOString().slice(0, 10)
}

/** Speichert die heutige Aktivität in localStorage (ms-Timestamp) */
export function recordLearningActivity() {
  if (typeof window !== "undefined") {
    localStorage.setItem(LAST_ACTIVITY_KEY, Date.now().toString())
  }
}

/**
 * Pfade, auf denen das Reminder-Banner NICHT erscheinen darf.
 * Pilot 2026-04-28: Banner überlagerte sticky Step-Action-Bar (z-40 vs. z-50)
 * → Schüler konnten "Weiter"-Button nicht erreichen. Auf Lern-Seiten
 * grundsätzlich kein Banner — der User ist ja gerade aktiv am Lernen.
 */
const HIDDEN_ON_PATHS = [
  "/lernen/situation/",
  "/lernen/le/",
  "/lernen/ce/",
  "/pruefung/",
  "/karteikarten",
]

export function LearningReminderBanner() {
  const pathname = usePathname()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const lastActivityMs = localStorage.getItem(LAST_ACTIVITY_KEY)
    const dismissedToday = localStorage.getItem(BANNER_DISMISSED_KEY)
    const today = getToday()

    // Prüfe ob letzte Aktivität heute war (ms-Timestamp → Datum)
    const lastActivityToday = lastActivityMs
      ? new Date(parseInt(lastActivityMs)).toISOString().slice(0, 10) === today
      : false

    if (!lastActivityToday && dismissedToday !== today) {
      setShow(true)
    }
  }, [])

  // Marketing-Landing (Locale-Root, z. B. /de) — kein App-Streak-Banner für Besucher
  const segments = pathname ? pathname.split("/").filter(Boolean) : []
  if (segments.length <= 1) {
    return null
  }

  // Banner auf aktiven Lern-/Prüfungs-/Karteikarten-Routen unterdrücken
  if (pathname && HIDDEN_ON_PATHS.some((p) => pathname.includes(p))) {
    return null
  }

  function dismiss() {
    localStorage.setItem(BANNER_DISMISSED_KEY, getToday())
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-blue-200 bg-blue-50 p-4 shadow-lg dark:border-blue-800 dark:bg-blue-950"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900">
          <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">
            Heute noch nicht gelernt
          </p>
          <p className="mt-0.5 text-sm text-blue-700 dark:text-blue-300">
            Schon 5 Minuten reichen, um deinen Streak zu halten!
          </p>
        </div>
        <button
          onClick={dismiss}
          className="shrink-0 rounded-lg p-1 text-blue-400 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900"
          aria-label="Schließen"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
