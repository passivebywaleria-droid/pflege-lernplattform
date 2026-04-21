"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { useEinstufungsStatus } from "@/lib/einstufung/use-einstufung"

/**
 * Redirect Schüler zur Einstufung wenn noch nicht eingestuft.
 * Lehrer/Admin/Schulleiter überspringen die Einstufung.
 */
export function EinstufungsGuard({ children }: { children: React.ReactNode }) {
  const { hatEinstufung, loaded } = useEinstufungsStatus()
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    if (!loaded) return

    // Prüfe ob der User ein Lehrer/Admin ist (kein Einstufungstest nötig)
    // Lehrer/Admin-Seiten: /teacher, /admin — die brauchen keine Einstufung
    const pathWithoutLocale = pathname.replace(`/${locale}`, "")
    const istLehrerOderAdmin =
      pathWithoutLocale.startsWith("/teacher") ||
      pathWithoutLocale.startsWith("/admin")

    if (istLehrerOderAdmin) {
      setChecked(true)
      return
    }

    if (!hatEinstufung) {
      router.replace(`/${locale}/einstufung`)
      return
    }

    setChecked(true)
  }, [loaded, hatEinstufung, router, locale, pathname])

  if (!loaded || !checked) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--lern-accent)] border-t-transparent" />
      </div>
    )
  }

  return <>{children}</>
}
