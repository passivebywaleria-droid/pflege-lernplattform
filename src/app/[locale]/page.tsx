import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { WaitlistForm } from "@/components/marketing/waitlist-form"
import { FounderAvatar } from "@/components/marketing/founder-avatar"
import { locales } from "@/lib/i18n/request"

// OG-Locale-Mapping für hreflang/openGraph
const OG_LOCALE: Record<string, string> = { de: "de_DE", ar: "ar_AR", tr: "tr_TR" }

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "landing" })
  const title = t("metaTitle")
  const description = t("metaDescription")

  return {
    metadataBase: new URL("https://carovia.de"),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
    openGraph: {
      type: "website",
      siteName: "Carovia",
      title,
      description,
      locale: OG_LOCALE[locale] ?? "de_DE",
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "landing" })

  const demoHref = `/${locale}/lernen`
  const loginHref = `/${locale}/login`

  const waitlistLabels = {
    emailLabel: t("waitlistEmailLabel"),
    emailPlaceholder: t("waitlistEmailPlaceholder"),
    cta: t("waitlistCta"),
    ctaLoading: t("waitlistCtaLoading"),
    privacy: t("waitlistPrivacy"),
    successTitle: t("waitlistSuccessTitle"),
    successBody: t("waitlistSuccessBody"),
    errorGeneric: t("waitlistError"),
  }

  const previewLabels = {
    badge: t("previewBadge"),
    question: t("previewQuestion"),
    correct: t("previewCorrect"),
    wrong1: t("previewWrong1"),
    wrong2: t("previewWrong2"),
    feedback: t("previewFeedback"),
  }

  return (
    <div className="flex min-h-dvh flex-col bg-[var(--lern-bg)] text-[var(--lern-text-primary)]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--lern-accent)] text-sm font-bold text-white">
              C
            </span>
            <span className="text-base font-bold">Carovia</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href={loginHref}
              className="hidden text-sm font-medium text-[var(--lern-text-secondary)] transition-colors hover:text-[var(--lern-text-primary)] sm:block"
            >
              {t("navLogin")}
            </Link>
            <Link
              href={demoHref}
              className="rounded-full bg-[var(--lern-accent)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4C6A52]"
            >
              {t("navTryFree")}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 pb-16 pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border-[1.5px] border-[var(--lern-accent)] bg-[var(--lern-accent-bg)] px-4 py-1.5 text-sm font-medium text-[var(--lern-accent)]">
            {t("heroBadge")}
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {t("heroTitle1")} {t("heroTitle2")}{" "}
            <span className="text-[var(--lern-accent)]">{t("heroTitleAccent")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--lern-text-secondary)] sm:text-lg">
            {t("heroSub")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href={demoHref}
              className="rounded-full bg-[var(--lern-accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--lern-accent)]/25 transition-all hover:bg-[#4C6A52] hover:shadow-xl"
            >
              {t("heroCtaPrimary")}
            </Link>
            <a
              href="#warteliste"
              className="rounded-full border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-8 py-3.5 text-base font-semibold text-[var(--lern-text-primary)] transition-colors hover:bg-[var(--lern-accent-bg)]"
            >
              {t("heroCtaSecondary")}
            </a>
          </div>

          {/* Gründerin-Note: untermauert die kühne Headline mit ehrlicher Lehrer-Stimme */}
          <p className="mx-auto mt-8 max-w-xl border-l-[2.5px] border-[var(--lern-sage)] pl-4 text-left text-sm italic leading-relaxed text-[var(--lern-text-secondary)] rtl:border-l-0 rtl:border-r-[2.5px] rtl:pl-0 rtl:pr-4 rtl:text-right">
            {t("heroFounderNote")}
          </p>

          <p className="mt-8 text-xs text-[var(--lern-text-tertiary)]">{t("heroMicroTrust")}</p>
        </div>
      </section>

      {/* Drei Versprechen */}
      <section className="border-t-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-sm font-bold uppercase tracking-wider text-[var(--lern-accent)]">
            {t("promisesEyebrow")}
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            <PromiseCard icon="📚" title={t("promise1Title")} desc={t("promise1Desc")} />
            <PromiseCard icon="🎯" title={t("promise2Title")} desc={t("promise2Desc")} />
            <PromiseCard icon="🌐" title={t("promise3Title")} desc={t("promise3Desc")} />
          </div>
        </div>
      </section>

      {/* Demo-Tease */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--lern-sage)]">
            {t("demoEyebrow")}
          </h2>
          <p className="mb-4 text-2xl font-bold sm:text-3xl">{t("demoTitle")}</p>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-[var(--lern-text-secondary)]">
            {t("demoBody")}
          </p>

          {/* Produkt-Vorschau: illustrativer Session-Step (zeigt statt erzählt) */}
          <SessionPreview labels={previewLabels} />

          <Link
            href={demoHref}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--lern-accent)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[var(--lern-accent)]/25 transition-all hover:bg-[#4C6A52] hover:shadow-xl"
          >
            <span>{t("demoCta")}</span>
            <svg
              className="h-4 w-4 rtl:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Für wen */}
      <section className="border-t-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-5 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-[var(--lern-accent)]">
            {t("forWhoEyebrow")}
          </h2>
          <p className="text-xl font-semibold leading-relaxed sm:text-2xl">{t("forWhoText")}</p>
        </div>
      </section>

      {/* Gründerin */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-3 text-center text-sm font-bold uppercase tracking-wider text-[var(--lern-sage)]">
            {t("founderEyebrow")}
          </h2>
          <p className="mb-6 text-center text-2xl font-bold sm:text-3xl">{t("founderTitle")}</p>
          <blockquote className="rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg)] p-6 text-center">
            <p className="text-base italic leading-relaxed text-[var(--lern-text-primary)]">
              „{t("founderQuote")}"
            </p>
            <footer className="mt-5 flex flex-col items-center gap-2">
              <FounderAvatar src="/founder-waleria.jpg" initials="W" alt={t("founderName")} />
              <span className="text-sm font-bold text-[var(--lern-text-primary)]">
                {t("founderName")}
              </span>
              <span className="text-xs text-[var(--lern-text-secondary)]">{t("founderRole")}</span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Warteliste-Capture */}
      <section
        id="warteliste"
        className="scroll-mt-20 border-t-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] px-5 py-16"
      >
        <div className="mx-auto max-w-xl">
          <h2 className="mb-2 text-center text-sm font-bold uppercase tracking-wider text-[var(--lern-accent)]">
            {t("waitlistEyebrow")}
          </h2>
          <p className="mb-3 text-center text-2xl font-bold sm:text-3xl">{t("waitlistTitle")}</p>
          <p className="mx-auto mb-7 max-w-md text-center text-base leading-relaxed text-[var(--lern-text-secondary)]">
            {t("waitlistBody")}
          </p>
          <WaitlistForm
            locale={locale}
            leadMagnet="pilot-warteliste"
            labels={waitlistLabels}
          />
        </div>
      </section>

      {/* Trust-Leiste */}
      <section className="px-5 py-12">
        <div className="mx-auto grid max-w-3xl gap-7 sm:grid-cols-4">
          <TrustBadge icon="🇩🇪" title={t("trust1Title")} sub={t("trust1Sub")} />
          <TrustBadge icon="🔒" title={t("trust2Title")} sub={t("trust2Sub")} />
          <TrustBadge icon="🗑️" title={t("trust3Title")} sub={t("trust3Sub")} />
          <TrustBadge icon="👩‍⚕️" title={t("trust4Title")} sub={t("trust4Sub")} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg)] px-5 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[var(--lern-text-secondary)]">
            &copy; {new Date().getFullYear()} Carovia
          </p>
          <div className="flex gap-6 text-sm text-[var(--lern-text-secondary)]">
            <a
              href="mailto:info@pflege-lernplattform.de"
              className="transition-colors hover:text-[var(--lern-text-primary)]"
            >
              {t("footerContact")}
            </a>
            <span className="cursor-default">{t("footerPrivacy")}</span>
            <span className="cursor-default">{t("footerImprint")}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface PreviewLabels {
  badge: string
  question: string
  correct: string
  wrong1: string
  wrong2: string
  feedback: string
}

function SessionPreview({ labels }: { labels: PreviewLabels }) {
  return (
    <div className="mx-auto max-w-sm rounded-3xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg-primary)] p-5 text-left shadow-lg shadow-[var(--lern-accent)]/10">
      <span className="inline-flex rounded-full bg-[var(--lern-accent-bg)] px-3 py-1 text-xs font-semibold text-[var(--lern-accent)]">
        {labels.badge}
      </span>
      <p className="mt-3 text-sm font-bold text-[var(--lern-text-primary)]">{labels.question}</p>
      <div className="mt-4 space-y-2">
        <PreviewOption text={labels.correct} correct />
        <PreviewOption text={labels.wrong1} />
        <PreviewOption text={labels.wrong2} />
      </div>
      <div className="mt-4 flex items-start gap-2 rounded-xl bg-[var(--lern-accent-bg)] p-3">
        <Check className="mt-0.5 shrink-0 text-[var(--lern-accent)]" />
        <p className="text-xs leading-relaxed text-[var(--lern-text-secondary)]">{labels.feedback}</p>
      </div>
    </div>
  )
}

function PreviewOption({ text, correct = false }: { text: string; correct?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between rounded-xl border-[1.5px] px-4 py-2.5 text-sm ${
        correct
          ? "border-[var(--lern-accent)] bg-[var(--lern-accent-bg)] font-semibold text-[var(--lern-text-primary)]"
          : "border-[var(--lern-border)] text-[var(--lern-text-secondary)]"
      }`}
    >
      <span>{text}</span>
      {correct && <Check className="text-[var(--lern-accent)]" />}
    </div>
  )
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-4 w-4 ${className}`}
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
  )
}

function PromiseCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border-[1.5px] border-[var(--lern-border)] bg-[var(--lern-bg)] p-5 transition-shadow hover:shadow-md">
      <span className="mb-3 block text-2xl">{icon}</span>
      <h3 className="mb-2 text-base font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--lern-text-secondary)]">{desc}</p>
    </div>
  )
}

function TrustBadge({ icon, title, sub }: { icon: string; title: string; sub: string }) {
  return (
    <div className="text-center">
      <span className="mb-2 block text-2xl">{icon}</span>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xs text-[var(--lern-text-secondary)]">{sub}</p>
    </div>
  )
}
