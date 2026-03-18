import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
  const t = useTranslations("auth")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{t("register")}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-sm text-muted-foreground">
          Registrierungs-Formular kommt in Tag 8-9.
        </p>
      </CardContent>
    </Card>
  )
}
