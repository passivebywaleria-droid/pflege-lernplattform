"use client"

import { useState, useEffect } from "react"
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

export function LearningReminderBanner() {
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
