"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardStackItem {
  id: string | number
  content: React.ReactNode
}

interface CardStackProps {
  items: CardStackItem[]
  offset?: number
  scaleFactor?: number
  className?: string
  autoFlipInterval?: number
  onFlip?: (index: number) => void
}

export function CardStack({
  items,
  offset = 10,
  scaleFactor = 0.06,
  className,
  autoFlipInterval,
  onFlip,
}: CardStackProps) {
  const [cards, setCards] = useState<CardStackItem[]>(items)

  useEffect(() => {
    setCards(items)
  }, [items])

  useEffect(() => {
    if (!autoFlipInterval) return
    const interval = setInterval(() => {
      flip()
    }, autoFlipInterval)
    return () => clearInterval(interval)
  }, [autoFlipInterval, cards])

  const flip = () => {
    setCards((prevCards) => {
      const newCards = [...prevCards]
      const first = newCards.shift()!
      newCards.push(first)
      return newCards
    })
    onFlip?.(0)
  }

  return (
    <div
      className={cn("relative h-60 w-60", className)}
      onClick={flip}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && flip()}
    >
      <AnimatePresence>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute flex h-full w-full cursor-pointer flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            style={{ transformOrigin: "top center" }}
            animate={{
              top: index * -offset,
              scale: 1 - index * scaleFactor,
              zIndex: cards.length - index,
            }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {card.content}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
