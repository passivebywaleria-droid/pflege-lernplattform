"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FocusCard {
  title: string
  description?: string
  icon?: React.ReactNode
  color?: string
}

interface FocusCardsProps {
  cards: FocusCard[]
  className?: string
  onCardClick?: (index: number) => void
}

export function FocusCards({ cards, className, onCardClick }: FocusCardsProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2", className)}>
      {cards.map((card, index) => (
        <button
          key={index}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(index)}
          onBlur={() => setHovered(null)}
          onClick={() => onCardClick?.(index)}
          className={cn(
            "relative rounded-xl border p-4 text-left transition-all duration-300",
            "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900",
            hovered !== null && hovered !== index && "scale-[0.98] opacity-50 blur-[1px]",
            hovered === index && "scale-[1.02] shadow-lg",
          )}
        >
          <div className="flex items-start gap-3">
            {card.icon && (
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${card.color || "#7A816C"}15` }}
              >
                {card.icon}
              </div>
            )}
            <div>
              <h3 className="font-semibold">{card.title}</h3>
              {card.description && (
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {card.description}
                </p>
              )}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
