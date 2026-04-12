"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCircularProgressProps {
  max?: number
  value: number
  min?: number
  size?: number
  strokeWidth?: number
  className?: string
  gaugePrimaryColor?: string
  gaugeSecondaryColor?: string
  children?: React.ReactNode
}

export function AnimatedCircularProgress({
  max = 100,
  value = 0,
  min = 0,
  size = 120,
  strokeWidth = 10,
  className,
  gaugePrimaryColor = "#7A816C",
  gaugeSecondaryColor = "#E5DFD6",
  children,
}: AnimatedCircularProgressProps) {
  const circumference = 2 * Math.PI * 45
  const percentPx = circumference / 100
  const currentPercent = ((value - min) / (max - min)) * 100

  const springValue = useSpring(0, {
    bounce: 0,
    duration: 1500,
  })

  const strokeDashoffset = useTransform(
    springValue,
    (val) => circumference - percentPx * val,
  )

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    springValue.set(currentPercent)
  }, [springValue, currentPercent])

  if (!isClient) return null

  return (
    <div
      className={cn("relative", className)}
      style={{ width: size, height: size }}
    >
      <svg
        fill="none"
        viewBox="0 0 100 100"
        strokeWidth={strokeWidth}
        className="h-full w-full -rotate-90"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth={strokeWidth}
          stroke={gaugeSecondaryColor}
          strokeLinecap="round"
          className="opacity-20"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          strokeWidth={strokeWidth}
          stroke={gaugePrimaryColor}
          strokeLinecap="round"
          style={{ strokeDasharray: circumference, strokeDashoffset }}
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}
