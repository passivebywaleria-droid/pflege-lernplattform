"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Meilenstein } from "@/lib/meilensteine"
import {
  pruefeNeueMeilensteine,
  getGeseheneMeilensteine,
  markiereMeilensteinGesehen,
} from "@/lib/meilensteine"
import type { LernProfil } from "@/hooks/use-lern-fortschritt"

interface BadgePopupProps {
  profil: LernProfil | null
}

/**
 * Badge-Popup: Wird eingeblendet wenn ein neuer Meilenstein erreicht wird.
 * Zeigt Confetti-Partikel + Badge mit Scale-Animation.
 * Blendet nach 4 Sekunden automatisch aus.
 */
export function BadgePopup({ profil }: BadgePopupProps) {
  const [aktuell, setAktuell] = useState<Meilenstein | null>(null)
  const [warteschlange, setWarteschlange] = useState<Meilenstein[]>([])

  // Prüfe auf neue Meilensteine wenn Profil sich ändert
  useEffect(() => {
    if (!profil) return

    const gesehen = getGeseheneMeilensteine()
    const neue = pruefeNeueMeilensteine(profil, gesehen)

    if (neue.length > 0) {
      setWarteschlange(neue)
    }
  }, [profil])

  // Zeige nächsten Meilenstein aus Warteschlange
  useEffect(() => {
    if (!aktuell && warteschlange.length > 0) {
      const naechster = warteschlange[0]
      setAktuell(naechster)
      markiereMeilensteinGesehen(naechster.id)
      setWarteschlange((prev) => prev.slice(1))

      // Auto-Hide nach 4 Sekunden
      const timer = setTimeout(() => {
        setAktuell(null)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [aktuell, warteschlange])

  return (
    <AnimatePresence>
      {aktuell && (
        <motion.div
          key={aktuell.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
        >
          {/* Confetti-Partikel */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: "50vw",
                  y: "50vh",
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  scale: [0, 1, 0.5],
                  opacity: [1, 1, 0],
                  rotate: Math.random() * 720 - 360,
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  ease: "easeOut",
                  delay: Math.random() * 0.3,
                }}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: [
                    "#D4956A", "#C4877F", "#6B8F71", "#C96B5C",
                    "#9B7EA6", "#BFA48E", "#B07A72",
                  ][i % 7],
                }}
              />
            ))}
          </div>

          {/* Badge-Karte */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{
              scale: [0, 1.15, 1],
              rotate: [- 10, 5, 0],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="relative bg-[var(--lern-bg-primary)] rounded-3xl shadow-2xl px-8 py-10 text-center max-w-xs pointer-events-auto"
            onClick={() => setAktuell(null)}
            role="dialog"
            aria-label={`Meilenstein erreicht: ${aktuell.titel}`}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.3, 1] }}
              transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
              className="text-6xl mb-3"
            >
              {aktuell.icon}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xs font-semibold text-[var(--lern-accent)] uppercase tracking-wide mb-1"
            >
              Meilenstein erreicht!
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-bold text-[var(--lern-text-primary)] mb-1"
            >
              {aktuell.titel}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-[var(--lern-text-secondary)]"
            >
              {aktuell.beschreibung}
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
