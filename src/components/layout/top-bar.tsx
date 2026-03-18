"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "./theme-toggle"

interface TopBarProps {
  userName?: string
}

export function TopBar({ userName }: TopBarProps) {
  const t = useTranslations("nav")
  const initials = userName
    ? userName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "?"

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-4 md:px-6">
      {/* Mobile: brand */}
      <Link href="/home" className="text-lg font-bold text-primary md:hidden">
        Pflege
      </Link>

      {/* Desktop: spacer (sidebar has brand) */}
      <div className="hidden md:block" />

      <div className="flex items-center gap-3">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full outline-none ring-ring focus-visible:ring-2">
            <Avatar className="h-8 w-8">
              <AvatarFallback className="text-xs">{initials}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="/settings" className="w-full">
                {t("settings")}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/api/auth/logout" className="w-full">
                {t("logout")}
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
