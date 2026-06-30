import { Fragment } from "react"

/**
 * Rendert Markdown-light: nur **fett**. Kein dangerouslySetInnerHTML.
 * Splittet am `**`-Paar und macht jedes zweite Segment zu <strong>.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*/)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-[var(--lern-text-primary)]">
            {part}
          </strong>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  )
}
