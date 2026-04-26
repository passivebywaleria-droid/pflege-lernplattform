"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslations, useLocale } from "next-intl"
import { cn } from "@/lib/utils"

const navItems = [
  { key: "home" as const, path: "/dashboard", icon: HomeIcon, ariaLabel: "Home" },
  { key: "learn" as const, path: "/lernen", icon: LearnIcon, ariaLabel: "Lernen" },
  { key: "cards" as const, path: "/review", icon: CardsIcon, ariaLabel: "Karten" },
  { key: "me" as const, path: "/dashboard", icon: MeIcon, ariaLabel: "Profil" },
]

export function BottomNav() {
  const t = useTranslations("nav")
  const pathname = usePathname()
  const locale = useLocale()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--lern-border)] bg-[var(--lern-bg-primary)] md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 14px)" }}
    >
      <div className="flex items-stretch px-3 pt-2 pb-1">
        {navItems.map((item, idx) => {
          const href = `/${locale}${item.path}`
          // "Ich" + "Home" zeigen beide auf /dashboard — nur ersten als active werten
          const isHome = item.key === "home"
          const isMe = item.key === "me"
          const matchesPath = pathname === href || pathname.startsWith(href + "/")
          const isActive = isMe
            ? false  // me-Tab später eigene Route
            : isHome
              ? matchesPath && !pathname.startsWith(`/${locale}/lernen`) && !pathname.startsWith(`/${locale}/review`)
              : matchesPath

          return (
            <Link
              key={`${item.key}-${idx}`}
              href={href}
              aria-label={item.ariaLabel}
              className="flex flex-1 flex-col items-center justify-center gap-1 py-1 min-h-[44px]"
            >
              <item.icon active={isActive} />
              <span
                className={cn(
                  "text-[10px] tracking-wide transition-colors",
                  isActive
                    ? "font-semibold text-[var(--lern-accent)]"
                    : "font-medium text-[var(--lern-text-tertiary)]"
                )}
              >
                {t(item.key)}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

// SVG-Icons aus claude-design-bundle/tabbar.jsx — 1:1 übernommen
function HomeIcon({ active }: { active: boolean }) {
  const stroke = active ? "var(--lern-accent)" : "var(--lern-text-tertiary)"
  const fill = active ? "var(--lern-accent-bg)" : "none"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill}>
      <path
        d="M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z"
        stroke={stroke}
        strokeWidth={1.6}
        strokeLinejoin="round"
        fill={fill}
      />
    </svg>
  )
}

function LearnIcon({ active }: { active: boolean }) {
  const stroke = active ? "var(--lern-accent)" : "var(--lern-text-tertiary)"
  const fill = active ? "var(--lern-accent-bg)" : "none"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 6 L12 3 L21 6 L12 9 Z"
        stroke={stroke}
        strokeWidth={1.6}
        strokeLinejoin="round"
        fill={fill}
      />
      <path
        d="M6 9 V14 Q12 17 18 14 V9"
        stroke={stroke}
        strokeWidth={1.6}
        strokeLinejoin="round"
        fill="none"
      />
      <line
        x1="21"
        y1="6"
        x2="21"
        y2="12"
        stroke={stroke}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  )
}

function CardsIcon({ active }: { active: boolean }) {
  const stroke = active ? "var(--lern-accent)" : "var(--lern-text-tertiary)"
  const fill = active ? "var(--lern-accent-bg)" : "none"
  const innerFill = active ? "var(--lern-bg-primary)" : "none"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="4" width="13" height="16" rx="2" stroke={stroke} strokeWidth={1.6} fill={fill} />
      <rect x="3" y="7" width="13" height="13" rx="2" stroke={stroke} strokeWidth={1.6} fill={innerFill} />
    </svg>
  )
}

function MeIcon({ active }: { active: boolean }) {
  const stroke = active ? "var(--lern-accent)" : "var(--lern-text-tertiary)"
  const fill = active ? "var(--lern-accent-bg)" : "none"
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="9" r="3.5" stroke={stroke} strokeWidth={1.6} fill={fill} />
      <path
        d="M5 20 Q5 14 12 14 Q19 14 19 20"
        stroke={stroke}
        strokeWidth={1.6}
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
