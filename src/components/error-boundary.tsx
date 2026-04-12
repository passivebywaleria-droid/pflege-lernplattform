"use client"

import { Component, type ReactNode } from "react"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

/**
 * Error Boundary für kritische App-Bereiche.
 * Fängt Render-Fehler ab und zeigt Fallback-UI.
 * Fortschritt bleibt erhalten (localStorage).
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // In Produktion: Logging-Service anbinden
    console.error("[ErrorBoundary]", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
          <div className="text-5xl mb-4" aria-hidden="true">
            &#128517;
          </div>
          <h2 className="text-xl font-semibold text-[var(--lern-text-primary)] mb-2">
            Etwas ist schiefgelaufen
          </h2>
          <p className="text-[var(--lern-text-secondary)] mb-4 max-w-sm">
            Keine Sorge, dein Fortschritt ist gespeichert.
          </p>
          {this.state.error && (
            <details className="mb-4 text-left max-w-md w-full">
              <summary className="text-xs text-[var(--lern-text-tertiary)] cursor-pointer">
                Technische Details
              </summary>
              <pre className="mt-2 text-xs text-[var(--lern-text-tertiary)] bg-[var(--lern-bg)] rounded-lg p-3 overflow-auto max-h-32">
                {this.state.error.message}
              </pre>
            </details>
          )}
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-6 py-3 bg-[var(--lern-accent)] text-white rounded-xl font-medium transition-all hover:bg-[#B07A72] active:scale-[0.98]"
          >
            Nochmal versuchen
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
