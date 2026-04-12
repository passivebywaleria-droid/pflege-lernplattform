/**
 * Meilensteine & Badges
 *
 * Definiert erreichbare Meilensteine basierend auf LernProfil-Daten.
 * Wird im Dashboard und als Badge-Popup genutzt.
 */

import type { LernProfil } from "@/hooks/use-lern-fortschritt"

export interface Meilenstein {
  id: string
  titel: string
  beschreibung: string
  icon: string
  bedingung: (profil: LernProfil) => boolean
}

export const meilensteine: Meilenstein[] = [
  {
    id: "erste-lektion",
    titel: "Erste Schritte",
    beschreibung: "Erste Lektion abgeschlossen",
    icon: "\uD83C\uDFAF",
    bedingung: (p) => Object.keys(p.fortschritte).length >= 1,
  },
  {
    id: "streak-3",
    titel: "Am Ball",
    beschreibung: "3 Tage in Folge gelernt",
    icon: "\uD83D\uDD25",
    bedingung: (p) => p.streakTage >= 3,
  },
  {
    id: "streak-7",
    titel: "Wochenkrieger",
    beschreibung: "7 Tage in Folge gelernt",
    icon: "\u26A1",
    bedingung: (p) => p.streakTage >= 7,
  },
  {
    id: "streak-30",
    titel: "Monatsmeister",
    beschreibung: "30 Tage in Folge gelernt",
    icon: "\uD83D\uDCAA",
    bedingung: (p) => p.streakTage >= 30,
  },
  {
    id: "100-xp",
    titel: "XP-Sammler",
    beschreibung: "100 XP gesammelt",
    icon: "\uD83D\uDC8E",
    bedingung: (p) => p.gesamtXp >= 100,
  },
  {
    id: "500-xp",
    titel: "XP-Meister",
    beschreibung: "500 XP gesammelt",
    icon: "\uD83D\uDC51",
    bedingung: (p) => p.gesamtXp >= 500,
  },
  {
    id: "1000-xp",
    titel: "XP-Legende",
    beschreibung: "1000 XP gesammelt",
    icon: "\uD83C\uDF1F",
    bedingung: (p) => p.gesamtXp >= 1000,
  },
  {
    id: "ce-komplett",
    titel: "CE Abgeschlossen",
    beschreibung: "Erste CE komplett",
    icon: "\uD83C\uDFC6",
    bedingung: (p) => {
      // Prüfe ob mindestens eine CE komplett ist (alle LEs abgeschlossen)
      const lePrefixes = new Set<string>()
      for (const leId of Object.keys(p.fortschritte)) {
        const match = leId.match(/^le-(\d+)/)
        if (match) lePrefixes.add(match[1])
      }
      // Vereinfacht: Mindestens 5 LEs einer CE abgeschlossen
      for (const prefix of lePrefixes) {
        const lesInCe = Object.entries(p.fortschritte).filter(
          ([id]) => id.startsWith(`le-${prefix}`)
        )
        if (lesInCe.length >= 5 && lesInCe.every(([, le]) => le.abgeschlossen)) {
          return true
        }
      }
      return false
    },
  },
  {
    id: "karteikarten-10",
    titel: "Karteikarten-Starter",
    beschreibung: "10 Karteikarten erstellt",
    icon: "\uD83C\uDCCF",
    bedingung: (p) => p.schwaechen.length >= 10,
  },
  {
    id: "karteikarten-50",
    titel: "Karteikarten-Pro",
    beschreibung: "50 Karteikarten gemeistert",
    icon: "\uD83C\uDCCF",
    bedingung: (p) => p.schwaechen.length >= 50,
  },
  {
    id: "woche-aktiv",
    titel: "Volle Woche",
    beschreibung: "7 verschiedene Tage aktiv",
    icon: "\uD83D\uDCC5",
    bedingung: (p) => p.tagesAktivitaeten.length >= 7,
  },
  {
    id: "pruefungsreif",
    titel: "Prüfungsreif",
    beschreibung: "Erste Prüfungssimulation bestanden",
    icon: "\uD83C\uDF93",
    bedingung: () => false, // Wird aktiviert wenn Prüfungsmodus implementiert ist
  },
]

/** Gibt alle erreichten Meilensteine zurück */
export function getErreichteMeilensteine(profil: LernProfil): Meilenstein[] {
  return meilensteine.filter((m) => m.bedingung(profil))
}

/** Gibt alle noch nicht erreichten Meilensteine zurück */
export function getOffeneMeilensteine(profil: LernProfil): Meilenstein[] {
  return meilensteine.filter((m) => !m.bedingung(profil))
}

/** Prüft ob neue Meilensteine erreicht wurden (seit letztem Check) */
export function pruefeNeueMeilensteine(
  profil: LernProfil,
  bereitsGesehen: string[]
): Meilenstein[] {
  return meilensteine.filter(
    (m) => m.bedingung(profil) && !bereitsGesehen.includes(m.id)
  )
}

const GESEHEN_KEY = "pflege-meilensteine-gesehen"

/** Gesehene Meilensteine aus localStorage laden */
export function getGeseheneMeilensteine(): string[] {
  if (typeof window === "undefined") return []
  try {
    const raw = localStorage.getItem(GESEHEN_KEY)
    return raw ? (JSON.parse(raw) as string[]) : []
  } catch {
    return []
  }
}

/** Meilenstein als gesehen markieren */
export function markiereMeilensteinGesehen(id: string): void {
  if (typeof window === "undefined") return
  const gesehen = getGeseheneMeilensteine()
  if (!gesehen.includes(id)) {
    gesehen.push(id)
    localStorage.setItem(GESEHEN_KEY, JSON.stringify(gesehen))
  }
}
