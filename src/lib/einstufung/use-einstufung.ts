"use client"

import { useEffect, useState } from "react"

const STORAGE_KEY = "pflege-lernprofil"

export interface EinstufungsStatus {
  hatEinstufung: boolean
  loaded: boolean
  sprachLevel: number | null
  fachwissenLevel: number | null
}

/**
 * Prüft ob der Benutzer bereits eingestuft wurde.
 * Liest aus dem LernProfil ob achsen gesetzt sind.
 */
export function useEinstufungsStatus(): EinstufungsStatus {
  const [status, setStatus] = useState<EinstufungsStatus>({
    hatEinstufung: false,
    loaded: false,
    sprachLevel: null,
    fachwissenLevel: null,
  })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const profil = JSON.parse(raw)
        if (profil.achsen && typeof profil.achsen.sprache === "number") {
          setStatus({
            hatEinstufung: true,
            loaded: true,
            sprachLevel: profil.achsen.sprache,
            fachwissenLevel: profil.achsen.fachwissen,
          })
          return
        }
      }
    } catch {
      // Ignorieren
    }
    setStatus({
      hatEinstufung: false,
      loaded: true,
      sprachLevel: null,
      fachwissenLevel: null,
    })
  }, [])

  return status
}
