"use client"

/**
 * First-Party-Funnel — Play-then-Gate-Konversion messen.
 *
 * DSGVO: rein first-party, KEIN externer Tracker, KEINE personenbezogenen
 * Daten. Events werden client-seitig in localStorage gezählt (Demo-Sichtbarkeit)
 * und best-effort an den eigenen Endpunkt gemeldet (Server-Aggregation folgt).
 *
 * Event-Katalog (Pilot Play-then-Gate):
 *  - gast_start        Gast öffnet eine Situation ohne Login
 *  - step_fertig       Gast schließt einen Step ab
 *  - gate_gezeigt      soft-Gate wurde eingeblendet
 *  - gate_weggetippt   Gast hat das soft-Gate einmal weggetippt
 *  - gate_konvertiert  Gast klickt im Gate auf "Account erstellen"
 *  - account_erstellt  Registrierung erfolgreich abgeschlossen
 */
export type FunnelEvent =
  | "gast_start"
  | "step_fertig"
  | "gate_gezeigt"
  | "gate_weggetippt"
  | "gate_konvertiert"
  | "account_erstellt"
  // Monetarisierung (B2C-Paywall):
  | "paywall_gezeigt"
  | "paywall_konvertiert"
  // Kern-Loop (Option A + Adaptivitäts-Signal):
  | "spickzettel_offen"
  // Adaptiv-v1 (PLAN-ADAPTIV-V1, Messbarkeit):
  | "recheck_gezeigt"
  | "recheck_richtig"
  | "recheck_falsch"
  | "spickzettel_angebot_angenommen"
  | "sprache_angebot_gezeigt"
  | "sprache_angebot_angenommen"
  | "situation_neu_begonnen"

const LS_KEY = "pflege:funnel"

type FunnelProps = Record<string, string | number | boolean | undefined>

function readCounts(): Record<string, number> {
  if (typeof window === "undefined") return {}
  try {
    return JSON.parse(window.localStorage.getItem(LS_KEY) ?? "{}")
  } catch {
    return {}
  }
}

/**
 * Meldet ein Funnel-Event. Fire-and-forget, wirft nie.
 */
export function trackFunnel(event: FunnelEvent, props: FunnelProps = {}): void {
  if (typeof window === "undefined") return
  try {
    const counts = readCounts()
    counts[event] = (counts[event] ?? 0) + 1
    window.localStorage.setItem(LS_KEY, JSON.stringify(counts))
  } catch {
    // localStorage nicht verfügbar (privater Modus) — Event verwerfen
  }

  // Best-effort Server-Meldung (Endpunkt folgt; Fehler ignorieren).
  try {
    const body = JSON.stringify({ event, props })
    if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
      navigator.sendBeacon("/api/funnel", body)
    } else {
      void fetch("/api/funnel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body,
        keepalive: true,
      }).catch(() => {})
    }
  } catch {
    // Netzwerk/Beacon nicht verfügbar — egal, lokaler Zähler reicht für den Pilot
  }
}

/** Liest die lokalen Funnel-Zähler (für Demo-/Debug-Ansicht). */
export function getFunnelCounts(): Record<string, number> {
  return readCounts()
}
