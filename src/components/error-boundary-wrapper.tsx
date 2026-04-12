"use client"

import type { ReactNode } from "react"
import { ErrorBoundary } from "@/components/error-boundary"

/**
 * Client-Wrapper für ErrorBoundary.
 * Wird im Server-Layout eingebunden.
 */
export function ErrorBoundaryWrapper({ children }: { children: ReactNode }) {
  return <ErrorBoundary>{children}</ErrorBoundary>
}
