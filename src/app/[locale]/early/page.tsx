import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { WaitlistForm } from "@/components/marketing/waitlist-form"

// Lead-Magnet: wird in public/lead-magnets/ generiert (scripts/generate-lead-magnet-pdf.ts)
const PDF_HREF = "/lead-magnets/pflege-fachbegriffe-de-tr-ar.pdf"

export default async function EarlyAccessPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ source?: string; utm_source?: string }>
}) {
  const { locale } = await params
  const sp = await searchParams
  const source = sp.source || sp.utm_source
  const t = await getTranslations({ locale, namespace: "early" })

  const labels = {
    emailLabel: t("emailLabel"),
    emailPlaceholder: t("emailPlaceholder"),
    cta: t("cta"),
    ctaLoading: t("ctaLoading"),
    privacy: t("privacy"),
    successTitle: t("successTitle"),
    successBody: t("successBody"),
    successDownload: t("successDownload"),
    errorGeneric: t("errorGeneric"),
  }

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--lern-bg)] text-[var(--lern-text-primary)]">
      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-xl">
          <div className="mb-6 inline-flex items-center rounded-full border-[1.5px] border-[var(--lern-accent)] bg-[var(--lern-accent-bg)] px-4 py-1.5 text-sm font-medium text-[var(--lern-accent)]">
            {t("badge")}
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {t("headline")}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-[var(--lern-text-secondary)]">
            {t("sub")}
          </p>

          <ul className="mt-6 space-y-2.5">
            <Bullet text={t("bullet1")} />
            <Bullet text={t("bullet2")} />
            <Bullet text={t("bullet3")} />
          </ul>

          <div className="mt-8">
            <WaitlistForm
              locale={locale}
              source={source}
              pdfHref={PDF_HREF}
              labels={labels}
            />
          </div>

          <p className="mt-6 flex items-center gap-2 text-xs text-[var(--lern-text-tertiary)]">
            <span>🇩🇪</span>
            <span>{t("trust")}</span>
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="text-sm text-[var(--lern-text-secondary)] underline-offset-4 transition-colors hover:text-[var(--lern-text-primary)] hover:underline"
            >
              {t("back")}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-[var(--lern-text-primary)]">
      <svg
        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--lern-accent)]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span>{text}</span>
    </li>
  )
}
