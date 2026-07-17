import { redirect } from "next/navigation"

// Registrierung läuft passwortlos über /mitmachen (Pilot-Flow, ein Weg statt
// zwei). Die alte Passwort-Registrierung ist abgeschaltet — bestehende Links
// auf /register laufen hier sanft weiter.
export default async function RegisterPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  redirect(`/${locale}/mitmachen`)
}
