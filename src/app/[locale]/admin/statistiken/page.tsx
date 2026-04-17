"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AdminStats {
  users: {
    totalUsers: number
    students: number
    teachers: number
    activeUsers: number
  }
  schools: {
    totalSchools: number
    paidSchools: number
    pilotSchools: number
  }
  activity30d: {
    totalMinuten: number
    totalSessions: number
    totalSteps: number
  }
  aktivsteSchulen: {
    schoolId: string
    schoolName: string
    totalMinuten: string
  }[]
}

function StatKarte({ label, wert, farbe }: { label: string; wert: string | number; farbe: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 p-4 shadow-sm"
    >
      <p className="text-2xl font-bold text-[var(--lern-text-primary)]">{wert}</p>
      <p className={`text-xs font-medium ${farbe}`}>{label}</p>
    </motion.div>
  )
}

export default function AdminStatistikenPage() {
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/admin/stats")
        if (res.ok) setStats(await res.json())
      } catch {
        // Fehler ignorieren
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] p-6">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="h-8 w-48 bg-[var(--lern-border)] rounded animate-pulse" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-20 bg-[var(--lern-bg-primary)] rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="min-h-screen bg-[var(--lern-bg)] flex items-center justify-center text-[#8e8e93]">
        Statistiken nicht verfügbar
      </div>
    )
  }

  const stunden30d = Math.round(stats.activity30d.totalMinuten / 60)

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
      <div className="sticky top-0 z-40 bg-[var(--lern-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--lern-border)]">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Plattform-Statistiken</h1>
          <p className="text-sm text-[#8e8e93]">Letzte 30 Tage</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Nutzer */}
        <div>
          <h2 className="text-sm font-semibold text-[#8e8e93] mb-3">Nutzer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatKarte label="Gesamt" wert={stats.users.totalUsers} farbe="text-[#8e8e93]" />
            <StatKarte label="Schüler" wert={stats.users.students} farbe="text-[var(--lern-accent)]" />
            <StatKarte label="Lehrer" wert={stats.users.teachers} farbe="text-[#6B8F71]" />
            <StatKarte label="Aktiv" wert={stats.users.activeUsers} farbe="text-[#4A7350]" />
          </div>
        </div>

        {/* Schulen */}
        <div>
          <h2 className="text-sm font-semibold text-[#8e8e93] mb-3">Schulen</h2>
          <div className="grid grid-cols-3 gap-3">
            <StatKarte label="Gesamt" wert={stats.schools.totalSchools} farbe="text-[#8e8e93]" />
            <StatKarte label="Bezahlt" wert={stats.schools.paidSchools} farbe="text-[#6B8F71]" />
            <StatKarte label="Pilot" wert={stats.schools.pilotSchools} farbe="text-[#D4956A]" />
          </div>
        </div>

        {/* Aktivität 30d */}
        <div>
          <h2 className="text-sm font-semibold text-[#8e8e93] mb-3">Aktivität (30 Tage)</h2>
          <div className="grid grid-cols-3 gap-3">
            <StatKarte label="Lernstunden" wert={stunden30d} farbe="text-[var(--lern-accent)]" />
            <StatKarte label="Sessions" wert={stats.activity30d.totalSessions} farbe="text-[#6B8F71]" />
            <StatKarte label="Steps" wert={stats.activity30d.totalSteps} farbe="text-[#D4956A]" />
          </div>
        </div>

        {/* Aktivste Schulen */}
        {stats.aktivsteSchulen.length > 0 && (
          <div>
            <h2 className="text-sm font-semibold text-[#8e8e93] mb-3">Aktivste Schulen</h2>
            <div className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 shadow-sm overflow-hidden">
              {stats.aktivsteSchulen.map((s, i) => (
                <div
                  key={s.schoolId}
                  className="flex items-center justify-between px-4 py-3 border-b border-[var(--lern-divider)] last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-[#8e8e93] w-5">{i + 1}</span>
                    <span className="text-sm font-medium">{s.schoolName}</span>
                  </div>
                  <span className="text-sm font-semibold text-[var(--lern-accent)]">
                    {Math.round(Number(s.totalMinuten) / 60)}h
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
