"use client"

import { useState, useEffect } from "react"
import { Bell, X } from "lucide-react"

const NOTIFICATION_ASKED_KEY = "pflege-notification-asked"

export function NotificationPrompt() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Nur zeigen wenn Notifications API existiert und noch nie gefragt
    if (
      typeof window !== "undefined" &&
      "Notification" in window &&
      Notification.permission === "default" &&
      !localStorage.getItem(NOTIFICATION_ASKED_KEY)
    ) {
      // Dezent nach 30 Sekunden einblenden
      const timer = setTimeout(() => setShow(true), 30000)
      return () => clearTimeout(timer)
    }
  }, [])

  async function requestPermission() {
    localStorage.setItem(NOTIFICATION_ASKED_KEY, "true")
    await Notification.requestPermission()
    setShow(false)
  }

  function dismiss() {
    localStorage.setItem(NOTIFICATION_ASKED_KEY, "true")
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900">
          <Bell className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Erinnerungen aktivieren?
          </p>
          <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-400">
            Wir erinnern dich, wenn du heute noch nicht gelernt hast.
          </p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={requestPermission}
              className="rounded-lg bg-[#C4877F] px-3 py-1.5 text-sm font-medium text-white hover:bg-[#B07A72]"
            >
              Aktivieren
            </button>
            <button
              onClick={dismiss}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            >
              Nicht jetzt
            </button>
          </div>
        </div>
        <button
          onClick={dismiss}
          className="shrink-0 rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800"
          aria-label="Schließen"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
