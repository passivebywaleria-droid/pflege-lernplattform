import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PUBLIC_LOCALE, SITE_NAME, wissenUrl } from "@/lib/seo/site"
import {
  allWissenSlugs,
  getWissenPage,
  type WissenSection,
} from "@/lib/wissen/wissen-content"
import { RichText } from "@/components/wissen/rich-text"
import { WissenJsonLd } from "@/components/wissen/json-ld"
import { WissenCta } from "@/components/wissen/wissen-cta"

export const dynamicParams = false

export function generateStaticParams() {
  // Nur deutschsprachige Seiten werden statisch gebaut (öffentlicher Bereich = de).
  return allWissenSlugs().map((slug) => ({ locale: PUBLIC_LOCALE, slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const page = getWissenPage(slug)
  if (!page) return {}

  const canonical = wissenUrl(slug)
  const isPublic = locale === PUBLIC_LOCALE

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical },
    robots: isPublic
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: "article",
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: SITE_NAME,
      locale: "de_DE",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  }
}

export default async function WissenDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = await params
  const page = getWissenPage(slug)
  if (!page) notFound()

  return (
    <div className="min-h-dvh bg-[var(--lern-bg)] text-[var(--lern-text-primary)]">
      <WissenJsonLd page={page} />

      <article className="mx-auto w-full max-w-2xl px-5 py-10 sm:py-14">
        {/* Breadcrumb */}
        <nav aria-label="Brotkrumen" className="mb-6 text-xs text-[var(--lern-text-tertiary)]">
          <Link href="/de/wissen" className="hover:underline">
            Wissen
          </Link>
          {page.ceContext && <span> · {page.ceContext}</span>}
        </nav>

        <h1 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          {page.frage}
        </h1>

        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--lern-text-tertiary)]">
          <span>Aktualisiert: {formatDate(page.updated)}</span>
          <span aria-hidden>·</span>
          <span>{page.lesezeitMin} Min Lesezeit</span>
        </p>

        {/* TL;DR — der AEO-Hebel: knappe, eigenständig zitierbare Antwort */}
        <div className="mt-6 rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--lern-accent)]">
            Kurz erklärt
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--lern-text-primary)]">
            {page.kurzantwort}
          </p>
        </div>

        {/* Hauptinhalt */}
        <div className="mt-10 space-y-10">
          {page.sections.map((section, i) => (
            <Section key={i} section={section} />
          ))}
        </div>

        {/* FAQ */}
        <section className="mt-12" aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className="text-lg font-bold text-[var(--lern-text-primary)]"
          >
            Häufige Fragen
          </h2>
          <div className="mt-4 space-y-3">
            {page.faq.map((item, i) => (
              <details
                key={i}
                className="rounded-xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-[var(--lern-text-primary)]">
                  {item.frage}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-[var(--lern-text-secondary)]">
                  {item.antwort}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <WissenCta source={`wissen-${page.slug}`} />

        {/* Quellen */}
        <section className="mt-12" aria-labelledby="quellen-heading">
          <h2
            id="quellen-heading"
            className="text-sm font-semibold text-[var(--lern-text-primary)]"
          >
            Quellen
          </h2>
          <ul className="mt-2 space-y-1 text-xs text-[var(--lern-text-tertiary)]">
            {page.quellen.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[var(--lern-text-tertiary)]">
            Dieser Beitrag dient der Ausbildung und ersetzt keine ärztliche oder
            pflegerische Fachberatung im Einzelfall.
          </p>
        </section>
      </article>
    </div>
  )
}

function Section({ section }: { section: WissenSection }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-[var(--lern-text-primary)]">
        {section.heading}
      </h2>
      {section.body?.map((p, i) => (
        <p
          key={i}
          className="mt-3 text-sm leading-relaxed text-[var(--lern-text-secondary)]"
        >
          <RichText text={p} />
        </p>
      ))}
      {section.bullets && (
        <ul className="mt-3 space-y-2">
          {section.bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-[var(--lern-text-secondary)]"
            >
              <span aria-hidden className="mt-1 text-[var(--lern-accent)]">
                •
              </span>
              <span>
                <RichText text={b} />
              </span>
            </li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            {section.table.caption && (
              <caption className="mb-2 text-left text-xs text-[var(--lern-text-tertiary)]">
                {section.table.caption}
              </caption>
            )}
            <thead>
              <tr>
                {section.table.headers.map((h, i) => (
                  <th
                    key={i}
                    className="border-b-[1.5px] border-[var(--lern-border)] py-2 pr-3 text-left font-semibold text-[var(--lern-text-primary)]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border-b border-[var(--lern-border)] py-2 pr-3 align-top text-[var(--lern-text-secondary)]"
                    >
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-")
  return `${d}.${m}.${y}`
}
