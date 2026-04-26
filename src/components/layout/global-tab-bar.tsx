"use client"

import { usePathname } from "next/navigation"
import { BottomNav } from "@/components/layout/bottom-nav"

/**
 * Renders BottomNav on all student-facing routes.
 * Hidden on auth pages (login/register), admin/teacher dashboards, demo previews.
 */
export function GlobalTabBar() {
  const pathname = usePathname()

  if (!pathname) return null

  // Hide patterns: route segments after the locale where the tab-bar should not appear
  const hidePatterns = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/admin",
    "/lehrer",
    "/demo",
    "/demo-steps",
    "/onboarding",
    "/einstufung",
  ]

  const shouldHide = hidePatterns.some((p) => pathname.includes(p))
  if (shouldHide) return null

  return <BottomNav />
}
