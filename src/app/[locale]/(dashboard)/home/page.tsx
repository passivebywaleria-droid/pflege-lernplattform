import { useTranslations } from "next-intl"

export default function HomePage() {
  const t = useTranslations("nav")

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold">{t("home")}</h1>
      <p className="mt-2 text-muted-foreground">
        Dashboard-Inhalt kommt in Sprint 2.
      </p>
    </div>
  )
}
