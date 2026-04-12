"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FlipWordsProps {
  words: string[]
  duration?: number
  className?: string
}

export function FlipWords({
  words,
  duration = 3000,
  className,
}: FlipWordsProps) {
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const startAnimation = useCallback(() => {
    const currentIndex = words.indexOf(currentWord)
    const nextIndex = (currentIndex + 1) % words.length
    setCurrentWord(words[nextIndex])
    setIsAnimating(true)
  }, [currentWord, words])

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation()
      }, duration)
      return () => clearTimeout(timeout)
    }
  }, [isAnimating, duration, startAnimation])

  return (
    <span className="relative inline-flex items-center justify-center">
      {/* Invisible spacer — breitestes Wort bestimmt die Breite */}
      <span className={cn("invisible font-semibold", className)} aria-hidden="true">
        {words.reduce((a, b) => (a.length >= b.length ? a : b), "")}
      </span>
      <AnimatePresence
        mode="popLayout"
        onExitComplete={() => {
          setIsAnimating(false)
        }}
      >
        <motion.span
          key={currentWord}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -15,
            filter: "blur(8px)",
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          className={cn(
            "absolute font-semibold",
            className,
          )}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
