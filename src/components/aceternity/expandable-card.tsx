"use client"

import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

interface ExpandableCardProps {
  title: string
  description: string
  expandedContent: React.ReactNode
  icon?: React.ReactNode
  className?: string
  accentColor?: string
}

export function ExpandableCard({
  title,
  description,
  expandedContent,
  icon,
  className,
  accentColor = "#7A816C",
}: ExpandableCardProps) {
  const [active, setActive] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [active])

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            onClick={() => setActive(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[60] grid place-items-center p-4">
            <motion.div
              layoutId={`card-${id}`}
              ref={ref}
              className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-neutral-900"
            >
              <div className="flex items-start justify-between p-6">
                <div className="flex items-center gap-3">
                  {icon && (
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      {icon}
                    </div>
                  )}
                  <div>
                    <motion.h3
                      layoutId={`title-${id}`}
                      className="text-lg font-semibold"
                    >
                      {title}
                    </motion.h3>
                    <motion.p
                      layoutId={`desc-${id}`}
                      className="text-sm text-neutral-500"
                    >
                      {description}
                    </motion.p>
                  </div>
                </div>
                <button
                  onClick={() => setActive(false)}
                  className="rounded-full p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="max-h-[60vh] overflow-y-auto px-6 pb-6"
              >
                {expandedContent}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        layoutId={`card-${id}`}
        onClick={() => setActive(true)}
        className={cn(
          "flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-left transition-shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900",
          className,
        )}
      >
        {icon && (
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            {icon}
          </div>
        )}
        <div className="min-w-0">
          <motion.h3 layoutId={`title-${id}`} className="font-semibold">
            {title}
          </motion.h3>
          <motion.p
            layoutId={`desc-${id}`}
            className="truncate text-sm text-neutral-500"
          >
            {description}
          </motion.p>
        </div>
      </motion.button>
    </>
  )
}
