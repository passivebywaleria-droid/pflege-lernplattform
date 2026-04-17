"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface School {
  id: string
  name: string
  bundesland: string | null
  contactEmail: string | null
  licenseType: "free" | "pilot" | "paid"
  maxStudents: number
  stripeCustomerId: string | null
  studentCount: number
  createdAt: string
}

const LICENSE_COLORS: Record<string, string> = {
  free: "bg-[#8e8e93]/10 text-[#636366]",
  pilot: "bg-[#D4956A]/10 text-[#B07A52]",
  paid: "bg-[#6B8F71]/10 text-[#4A7350]",
}

export default function AdminSchulenPage() {
  const [schools, setSchools] = useState<School[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    bundesland: "",
    contactEmail: "",
    licenseType: "free" as const,
    maxStudents: 60,
  })

  useEffect(() => {
    loadSchools()
  }, [])

  async function loadSchools() {
    try {
      const res = await fetch("/api/admin/schools")
      if (res.ok) setSchools(await res.json())
    } catch {
      // Fehler ignorieren
    } finally {
      setLoading(false)
    }
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault()
    try {
      const res = await fetch("/api/admin/schools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setShowForm(false)
        setFormData({ name: "", bundesland: "", contactEmail: "", licenseType: "free", maxStudents: 60 })
        loadSchools()
      }
    } catch {
      // Fehler ignorieren
    }
  }

  return (
    <div className="min-h-screen bg-[var(--lern-bg)]" style={{ color: "var(--lern-text-primary)" }}>
      <div className="sticky top-0 z-40 bg-[var(--lern-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--lern-border)]">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Schulverwaltung</h1>
            <p className="text-sm text-[#8e8e93]">{schools.length} Schulen</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-full bg-[var(--lern-accent)] px-4 py-2 text-sm font-semibold text-white hover:bg-[#B07A72]"
          >
            + Neue Schule
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
        {/* Formular */}
        {showForm && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            onSubmit={handleCreate}
            className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 p-5 space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1">Schulname *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-[var(--lern-border)] bg-[var(--lern-bg)] px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Bundesland</label>
                <input
                  type="text"
                  value={formData.bundesland}
                  onChange={(e) => setFormData({ ...formData, bundesland: e.target.value })}
                  className="w-full rounded-lg border border-[var(--lern-border)] bg-[var(--lern-bg)] px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Kontakt-E-Mail</label>
                <input
                  type="email"
                  value={formData.contactEmail}
                  onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                  className="w-full rounded-lg border border-[var(--lern-border)] bg-[var(--lern-bg)] px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">Max. Schüler</label>
                <input
                  type="number"
                  min={1}
                  max={2000}
                  value={formData.maxStudents}
                  onChange={(e) => setFormData({ ...formData, maxStudents: parseInt(e.target.value) || 60 })}
                  className="w-full rounded-lg border border-[var(--lern-border)] bg-[var(--lern-bg)] px-3 py-2 text-sm"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="rounded-full bg-[var(--lern-accent)] px-5 py-2 text-sm font-semibold text-white hover:bg-[#B07A72]">
                Erstellen
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="rounded-full border border-[var(--lern-border)] px-5 py-2 text-sm">
                Abbrechen
              </button>
            </div>
          </motion.form>
        )}

        {/* Schulen-Liste */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-[var(--lern-bg-primary)] rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : schools.length === 0 ? (
          <div className="text-center py-12 text-[#8e8e93]">
            Noch keine Schulen registriert
          </div>
        ) : (
          schools.map((school) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]/50 p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{school.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${LICENSE_COLORS[school.licenseType]}`}>
                      {school.licenseType}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#8e8e93]">
                    {school.bundesland && <span>{school.bundesland}</span>}
                    {school.contactEmail && <span>{school.contactEmail}</span>}
                    <span>{school.studentCount}/{school.maxStudents} Schüler</span>
                    {school.stripeCustomerId && (
                      <span className="text-[#6B8F71]">Stripe aktiv</span>
                    )}
                  </div>
                </div>
                <div className="text-right text-xs text-[#8e8e93]">
                  <div className="font-mono">{school.id.slice(0, 8)}...</div>
                  <div>Schulcode</div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}
