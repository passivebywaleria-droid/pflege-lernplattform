"use client"

import { useState } from "react"

interface UpgradeBannerProps {
  locale?: string
}

export function UpgradeBanner({ locale = "de" }: UpgradeBannerProps) {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "individual" }),
      })

      if (!res.ok) {
        const data = await res.json()
        alert(data.error ?? "Checkout fehlgeschlagen")
        return
      }

      const { url } = await res.json()
      if (url) window.location.href = url
    } catch {
      alert("Verbindungsfehler")
    } finally {
      setLoading(false)
    }
  }

  async function handlePortal() {
    setLoading(true)
    try {
      const res = await fetch("/api/stripe/portal", {
        method: "POST",
      })

      if (!res.ok) return
      const { url } = await res.json()
      if (url) window.location.href = url
    } catch {
      // Ignorieren
    } finally {
      setLoading(false)
    }
  }

  const texts = {
    de: {
      title: "Alle Lerneinheiten freischalten",
      desc: "Mit dem Abo erhältst du Zugang zu allen CEs, Prüfungsmodus und KI-Feedback.",
      cta: "Jetzt upgraden — 14,90 €/Monat",
      manage: "Abo verwalten",
    },
    ar: {
      title: "فتح جميع وحدات التعلم",
      desc: "مع الاشتراك تحصل على جميع الوحدات ووضع الامتحان والتعليقات الذكية.",
      cta: "ترقية الآن — 14,90 €/شهر",
      manage: "إدارة الاشتراك",
    },
    tr: {
      title: "Tüm öğrenme birimlerini aç",
      desc: "Abonelikle tüm CE'lere, sınav moduna ve yapay zeka geri bildirimlerine erişim sağlarsın.",
      cta: "Şimdi yükselt — 14,90 €/ay",
      manage: "Aboneliği yönet",
    },
  }

  const t = texts[locale as keyof typeof texts] ?? texts.de

  return (
    <div className="rounded-2xl border-2 border-[var(--lern-accent)]/30 bg-[var(--lern-accent)]/5 p-5">
      <h3 className="text-base font-semibold text-[var(--lern-text-primary)] mb-1">
        {t.title}
      </h3>
      <p className="text-sm text-[var(--lern-text-secondary)] mb-4">
        {t.desc}
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleCheckout}
          disabled={loading}
          className="rounded-full bg-[var(--lern-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1A7359] disabled:opacity-50"
        >
          {loading ? "..." : t.cta}
        </button>
        <button
          onClick={handlePortal}
          disabled={loading}
          className="rounded-full border border-[var(--lern-border)] px-5 py-2.5 text-sm font-medium text-[var(--lern-text-primary)] transition-colors hover:bg-[var(--lern-bg)]"
        >
          {t.manage}
        </button>
      </div>
    </div>
  )
}
