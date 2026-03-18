import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginPage() {
  const t = useTranslations("auth")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-2xl">{t("login")}</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {t("noAccount")}{" "}
          <Link href="/register" className="font-medium text-primary hover:underline">
            {t("register")}
          </Link>
        </p>
      </CardContent>
    </Card>
  )
}
