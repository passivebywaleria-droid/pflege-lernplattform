"use client"

import { useState } from "react"

interface FounderAvatarProps {
  /** Bildpfad in /public, z. B. "/founder-waleria.jpg". Fällt auf Initialen zurück, wenn es fehlt. */
  src: string
  initials: string
  alt: string
}

/**
 * Zeigt ein echtes Gründerinnen-Foto, sobald die Datei in /public existiert.
 * Fehlt sie (404 / Ladefehler), erscheint sauber der Initialen-Kreis — kein kaputtes Bild.
 * So kann Waleria das Foto später einfach ablegen, ohne Code-Änderung.
 */
export function FounderAvatar({ src, initials, alt }: FounderAvatarProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--lern-sage)] text-xl font-bold text-white">
        {initials}
      </span>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={64}
      height={64}
      onError={() => setFailed(true)}
      className="h-16 w-16 rounded-full object-cover"
    />
  )
}
