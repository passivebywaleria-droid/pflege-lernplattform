"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface ClassItem {
  id: string
  schoolId: string
  name: string
  ausbildungsdrittel: number
  teacherId: string
  isActive: boolean
  studentCount: number
  createdAt: string
}

export default function AdminKlassenPage() {
  const [classes, setClasses] = useState<ClassItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/classes")
        if (res.ok) setClasses(await res.json())
      } catch {
        // Fehler ignorieren
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const drittelLabel = (d: number) =>
    d === 1 ? "1. Drittel" : d === 2 ? "2. Drittel" : "3. Drittel"

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
      <div className="sticky top-0 z-40 bg-[var(--lern-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--lern-border)]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Klassenverwaltung</h1>
          <p className="text-sm text-[#8e8e93]">{classes.length} Klassen</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-3">
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-[var(--lern-bg-primary)] rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : classes.length === 0 ? (
          <div className="text-center py-12 text-[#8e8e93]">
            Noch keine Klassen erstellt
          </div>
        ) : (
          classes.map((cls) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-sm">{cls.name}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-[var(--lern-accent)]/10 text-[var(--lern-accent)] text-xs font-medium">
                      {drittelLabel(cls.ausbildungsdrittel)}
                    </span>
                    {!cls.isActive && (
                      <span className="px-2 py-0.5 rounded-full bg-[#8e8e93]/10 text-[#636366] text-xs">
                        inaktiv
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#8e8e93]">
                    {cls.studentCount} Schüler
                  </p>
                </div>
                <div className="text-right text-xs text-[#8e8e93]">
                  {cls.schoolId.slice(0, 8)}...
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}
