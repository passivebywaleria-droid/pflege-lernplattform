import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const t = useTranslations("auth")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">{t("login")}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-sm text-muted-foreground">
          Login-Formular kommt in Tag 8-9.
        </p>
      </CardContent>
    </Card>
  )
}
