export interface ZweiAchsenLabels {
  yLabel: string
  yLow: string
  yHigh: string
  xLabel: string
  xLow: string
  xHigh: string
  youLabel: string
  caption: string
}

/**
 * Zwei-Achsen-Diagramm: visualisiert den USP der getrennten Messung von
 * Sprache (B1→C1) und Fachwissen. Reine Darstellung, statische Positionen.
 */
export function ZweiAchsenDiagramm({ labels }: { labels: ZweiAchsenLabels }) {
  return (
    <figure className="mx-auto my-0 w-full max-w-md" dir="ltr">
      <div className="flex items-stretch gap-3">
        {/* Y-Achse: Sprache */}
        <div className="flex flex-col items-center justify-between py-1">
          <span className="text-[11px] font-semibold text-[var(--lern-text-tertiary)]">{labels.yHigh}</span>
          <span className="rotate-180 whitespace-nowrap text-xs font-bold text-[var(--lern-accent)] [writing-mode:vertical-rl]">
            {labels.yLabel}
          </span>
          <span className="text-[11px] font-semibold text-[var(--lern-text-tertiary)]">{labels.yLow}</span>
        </div>

        {/* Feld */}
        <div className="relative aspect-square flex-1 overflow-hidden rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)]">
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4" aria-hidden="true">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} className="border-b border-e border-[var(--lern-divider)]" />
            ))}
          </div>

          {/* Zielpfad zum Examen */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 12 88 C 35 75 55 45 88 12"
              fill="none"
              stroke="var(--lern-accent)"
              strokeOpacity="0.35"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Du-bist-hier-Punkt */}
          <div className="absolute" style={{ left: "38%", top: "52%" }}>
            <span className="block h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--lern-accent)] shadow-[0_0_0_6px_var(--lern-accent-bg)]" />
            <span className="absolute left-3 top-0 -translate-y-1/2 whitespace-nowrap rounded-full bg-[var(--lern-accent)] px-2.5 py-1 text-[11px] font-semibold text-white">
              {labels.youLabel}
            </span>
          </div>
        </div>
      </div>

      {/* X-Achse: Fachwissen */}
      <div className="mt-2 flex items-center justify-between ps-8">
        <span className="text-[11px] font-semibold text-[var(--lern-text-tertiary)]">{labels.xLow}</span>
        <span className="text-xs font-bold text-[var(--lern-accent)]">{labels.xLabel}</span>
        <span className="text-[11px] font-semibold text-[var(--lern-text-tertiary)]">{labels.xHigh}</span>
      </div>

      <figcaption className="mt-4 text-center text-xs leading-relaxed text-[var(--lern-text-tertiary)]">
        {labels.caption}
      </figcaption>
    </figure>
  )
}
