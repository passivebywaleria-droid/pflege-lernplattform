import { useTranslations } from "next-intl"

export default function HomePage() {
  const t = useTranslations("landing")

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <main className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {t("hero")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("subtitle")}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/register"
            className="rounded-full bg-pflege-blue px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-pflege-blue/90"
          >
            {t("cta")}
          </a>
          <a
            href="/login"
            className="rounded-full border border-border px-8 py-3 text-sm font-semibold transition-colors hover:bg-accent"
          >
            {t("ctaSchool")}
          </a>
        </div>
      </main>
    </div>
  )
}
