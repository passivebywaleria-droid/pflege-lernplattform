import type { Metadata } from "next"
import Link from "next/link"
import { PUBLIC_LOCALE, SITE_NAME, wissenUrl } from "@/lib/seo/site"
import { wissenPages } from "@/lib/wissen/wissen-content"
import { SiteJsonLd } from "@/components/wissen/json-ld"
import { WissenCta } from "@/components/wissen/wissen-cta"

export function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  return params.then(({ locale }) => ({
    title: `Pflegewissen verständlich erklärt | ${SITE_NAME}`,
    description:
      "Prüfungswissen für die Pflegeausbildung — verständlich erklärt und fachlich belegt. Dekubitus, Pflegeprozess, Examen und mehr.",
    alternates: { canonical: wissenUrl() },
    robots:
      locale === PUBLIC_LOCALE
        ? { index: true, follow: true }
        : { index: false, follow: true },
  }))
}

export default function WissenHubPage() {
  return (
    <div className="min-h-dvh bg-[var(--lern-bg)] text-[var(--lern-text-primary)]">
      <SiteJsonLd />
      <div className="mx-auto w-full max-w-2xl px-5 py-10 sm:py-14">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--lern-accent)]">
          {SITE_NAME} · Wissen
        </p>
        <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          Pflegewissen, verständlich erklärt
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[var(--lern-text-secondary)]">
          Prüfungsrelevante Themen der Pflegeausbildung — in einfacher Sprache,
          mit Fallbezug und fachlich belegt. Kostenlos lesen.
        </p>

        <ul className="mt-8 space-y-3">
          {wissenPages.map((page) => (
            <li key={page.slug}>
              <Link
                href={`/de/wissen/${page.slug}`}
                className="block rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-5 transition-colors hover:border-[var(--lern-accent)]"
              >
                <h2 className="text-base font-bold text-[var(--lern-text-primary)]">
                  {page.frage}
                </h2>
                <p className="mt-1.5 line-clamp-2 text-sm text-[var(--lern-text-secondary)]">
                  {page.kurzantwort}
                </p>
                {page.ceContext && (
                  <p className="mt-2 text-xs text-[var(--lern-text-tertiary)]">
                    {page.ceContext}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <WissenCta source="wissen-hub" />
      </div>
    </div>
  )
}
