// Adaptiver Einstufungsalgorithmus
// VISION.md: "Fragen werden adaptiv schwerer wenn richtig beantwortet"
// VISION.md: "Antwortzeit als Signal (2s = weiß es, 30s = rät)"

import type { Achse, Schwierigkeit, EinstufungsFrage } from "./fragen"
import { getZufaelligeFrage } from "./fragen"

// --- Typen ---

export interface FrageAntwort {
  frageId: string
  achse: Achse
  schwierigkeit: Schwierigkeit
  korrekt: boolean
  zeitMs: number // Antwortzeit in Millisekunden
}

export interface AchsenErgebnis {
  score: number        // 0-100
  level: number        // 1-5 (für LernAchsen-Kompatibilität)
  fragenGesamt: number
  fragenRichtig: number
  durchschnittZeitMs: number
}

export interface EinstufungsErgebnis {
  sprache: AchsenErgebnis
  fachwissen: AchsenErgebnis
  gesamtDauerMs: number
  abgeschlossenAm: string // ISO-String
}

export interface EinstufungsState {
  phase: "willkommen" | "sprache" | "fachwissen" | "ergebnis"
  aktuelleAchse: Achse
  aktuellesLevel: Schwierigkeit
  aktuelleFrage: EinstufungsFrage | null
  frageNummer: number       // 1-basiert für Anzeige
  maxFragen: number         // pro Achse (6-8)
  antworten: FrageAntwort[]
  bereitsGestellteIds: string[]
  frageStartZeit: number    // timestamp für Zeitmessung
  gesamtStartZeit: number   // timestamp für Gesamtdauer
  ergebnis: EinstufungsErgebnis | null
}

// --- Konstanten ---

const MIN_FRAGEN_PRO_ACHSE = 6
const MAX_FRAGEN_PRO_ACHSE = 8
const SCHNELL_GRENZE_MS = 5000   // < 5s = schnelle Antwort
const LANGSAM_GRENZE_MS = 15000  // > 15s = langsame Antwort (wahrscheinlich geraten)

// --- Initialer State ---

export function createInitialState(): EinstufungsState {
  return {
    phase: "willkommen",
    aktuelleAchse: "sprache",
    aktuellesLevel: 2, // Starte bei mittlerem Level
    aktuelleFrage: null,
    frageNummer: 0,
    maxFragen: MAX_FRAGEN_PRO_ACHSE,
    antworten: [],
    bereitsGestellteIds: [],
    frageStartZeit: 0,
    gesamtStartZeit: 0,
    ergebnis: null,
  }
}

// --- Nächste Frage bestimmen ---

export function naechsteFrage(state: EinstufungsState): EinstufungsState {
  const achsenAntworten = state.antworten.filter(
    (a) => a.achse === state.aktuelleAchse
  )
  const anzahl = achsenAntworten.length

  // Prüfe ob Achse fertig
  if (anzahl >= MAX_FRAGEN_PRO_ACHSE) {
    return wechsleAchseOderEnde(state)
  }

  // Mindestens MIN_FRAGEN, danach Early Stop wenn klar
  if (anzahl >= MIN_FRAGEN_PRO_ACHSE) {
    const konfidenz = berechneKonfidenz(achsenAntworten)
    if (konfidenz > 0.8) {
      return wechsleAchseOderEnde(state)
    }
  }

  // Level adaptieren basierend auf letzter Antwort
  let neuesLevel = state.aktuellesLevel
  if (achsenAntworten.length > 0) {
    const letzteAntwort = achsenAntworten[achsenAntworten.length - 1]
    neuesLevel = adaptiereLevel(
      state.aktuellesLevel,
      letzteAntwort.korrekt,
      letzteAntwort.zeitMs
    )
  }

  // Frage aus Pool holen
  const frage = getZufaelligeFrage(
    state.aktuelleAchse,
    neuesLevel,
    state.bereitsGestellteIds
  )

  // Fallback: Wenn kein Frage auf Level verfügbar, andere Level probieren
  if (!frage) {
    const fallbackLevel: Schwierigkeit[] = neuesLevel === 1
      ? [2, 3]
      : neuesLevel === 3
        ? [2, 1]
        : [1, 3]

    for (const level of fallbackLevel) {
      const fallback = getZufaelligeFrage(
        state.aktuelleAchse,
        level,
        state.bereitsGestellteIds
      )
      if (fallback) {
        return {
          ...state,
          aktuellesLevel: level,
          aktuelleFrage: fallback,
          frageNummer: state.frageNummer + 1,
          frageStartZeit: Date.now(),
        }
      }
    }
    // Keine Fragen mehr verfügbar → Achse beenden
    return wechsleAchseOderEnde(state)
  }

  return {
    ...state,
    aktuellesLevel: neuesLevel,
    aktuelleFrage: frage,
    frageNummer: state.frageNummer + 1,
    frageStartZeit: Date.now(),
  }
}

// --- Antwort verarbeiten ---

export function verarbeiteAntwort(
  state: EinstufungsState,
  gewaehlteOptionId: string
): EinstufungsState {
  if (!state.aktuelleFrage) return state

  const zeitMs = Date.now() - state.frageStartZeit
  const korrekt = gewaehlteOptionId === state.aktuelleFrage.richtig

  const antwort: FrageAntwort = {
    frageId: state.aktuelleFrage.id,
    achse: state.aktuelleAchse,
    schwierigkeit: state.aktuelleFrage.schwierigkeit,
    korrekt,
    zeitMs,
  }

  return {
    ...state,
    antworten: [...state.antworten, antwort],
    bereitsGestellteIds: [
      ...state.bereitsGestellteIds,
      state.aktuelleFrage.id,
    ],
  }
}

// --- Phase starten ---

export function starteEinstufung(state: EinstufungsState): EinstufungsState {
  const jetzt = Date.now()
  const neuState: EinstufungsState = {
    ...state,
    phase: "sprache",
    aktuelleAchse: "sprache",
    aktuellesLevel: 2,
    frageNummer: 0,
    gesamtStartZeit: jetzt,
  }
  return naechsteFrage(neuState)
}

// --- Ergebnis berechnen ---

export function berechneErgebnis(
  state: EinstufungsState
): EinstufungsErgebnis {
  const spracheAntworten = state.antworten.filter((a) => a.achse === "sprache")
  const fachwissenAntworten = state.antworten.filter(
    (a) => a.achse === "fachwissen"
  )

  return {
    sprache: berechneAchsenScore(spracheAntworten),
    fachwissen: berechneAchsenScore(fachwissenAntworten),
    gesamtDauerMs: Date.now() - state.gesamtStartZeit,
    abgeschlossenAm: new Date().toISOString(),
  }
}

// --- Interne Hilfsfunktionen ---

function adaptiereLevel(
  aktuellesLevel: Schwierigkeit,
  korrekt: boolean,
  zeitMs: number
): Schwierigkeit {
  if (korrekt && zeitMs < SCHNELL_GRENZE_MS) {
    // Richtig + schnell → Level hoch
    return Math.min(3, aktuellesLevel + 1) as Schwierigkeit
  }
  if (!korrekt) {
    // Falsch → Level runter
    return Math.max(1, aktuellesLevel - 1) as Schwierigkeit
  }
  // Richtig aber langsam → gleiches Level
  return aktuellesLevel
}

function wechsleAchseOderEnde(state: EinstufungsState): EinstufungsState {
  if (state.aktuelleAchse === "sprache") {
    // Wechsle zu Fachwissen
    const neuState: EinstufungsState = {
      ...state,
      phase: "fachwissen",
      aktuelleAchse: "fachwissen",
      aktuellesLevel: 2,
      frageNummer: 0,
    }
    return naechsteFrage(neuState)
  }

  // Beide Achsen fertig → Ergebnis
  const ergebnis = berechneErgebnis(state)
  return {
    ...state,
    phase: "ergebnis",
    aktuelleFrage: null,
    ergebnis,
  }
}

function berechneAchsenScore(antworten: FrageAntwort[]): AchsenErgebnis {
  if (antworten.length === 0) {
    return {
      score: 50,
      level: 3,
      fragenGesamt: 0,
      fragenRichtig: 0,
      durchschnittZeitMs: 0,
    }
  }

  const richtig = antworten.filter((a) => a.korrekt).length
  const gesamtZeit = antworten.reduce((sum, a) => sum + a.zeitMs, 0)

  // Score-Berechnung mit Gewichtung:
  // 1. Korrektheit (60%): richtige Antworten / Gesamtzahl
  // 2. Schwierigkeits-Bonus (25%): höheres Level bei richtiger Antwort zählt mehr
  // 3. Zeitfaktor (15%): schnelle korrekte Antworten geben Bonus

  // Korrektheit
  const korrektRate = richtig / antworten.length

  // Schwierigkeits-gewichteter Score
  let schwierigkeitsScore = 0
  let maxSchwierigkeitsScore = 0
  for (const a of antworten) {
    const gewicht = a.schwierigkeit // 1, 2 oder 3
    maxSchwierigkeitsScore += gewicht
    if (a.korrekt) {
      schwierigkeitsScore += gewicht
    }
  }
  const schwierigkeitsRate =
    maxSchwierigkeitsScore > 0
      ? schwierigkeitsScore / maxSchwierigkeitsScore
      : 0

  // Zeitfaktor: Bonus für schnelle korrekte Antworten
  let zeitBonus = 0
  const richtigeAntworten = antworten.filter((a) => a.korrekt)
  if (richtigeAntworten.length > 0) {
    const schnelleRichtige = richtigeAntworten.filter(
      (a) => a.zeitMs < SCHNELL_GRENZE_MS
    ).length
    zeitBonus = schnelleRichtige / richtigeAntworten.length
  }

  // Abzug für sehr langsame Antworten (wahrscheinlich geraten)
  const langsameRichtige = richtigeAntworten.filter(
    (a) => a.zeitMs > LANGSAM_GRENZE_MS
  ).length
  const rateAbzug = richtigeAntworten.length > 0
    ? (langsameRichtige / richtigeAntworten.length) * 0.1
    : 0

  // Gewichtetes Endergebnis (0-100)
  const rawScore =
    korrektRate * 0.6 +
    schwierigkeitsRate * 0.25 +
    zeitBonus * 0.15 -
    rateAbzug

  const score = Math.round(Math.max(0, Math.min(100, rawScore * 100)))

  // Level-Mapping: Score → Level 1-5
  const level = scoreToLevel(score)

  return {
    score,
    level,
    fragenGesamt: antworten.length,
    fragenRichtig: richtig,
    durchschnittZeitMs: Math.round(gesamtZeit / antworten.length),
  }
}

function scoreToLevel(score: number): number {
  if (score >= 85) return 5
  if (score >= 70) return 4
  if (score >= 50) return 3
  if (score >= 30) return 2
  return 1
}

function berechneKonfidenz(antworten: FrageAntwort[]): number {
  // Wie sicher sind wir uns über das Level?
  // Hohe Konfidenz = konsistente Antworten (alle richtig oder alle falsch auf einem Level)
  if (antworten.length < 3) return 0

  const letzten3 = antworten.slice(-3)
  const alleGleich = letzten3.every((a) => a.korrekt === letzten3[0].korrekt)
  if (alleGleich) return 0.9

  // Alternierend = wenig Konfidenz
  return 0.5
}
