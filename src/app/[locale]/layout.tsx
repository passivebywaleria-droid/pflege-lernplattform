import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Poppins } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { ThemeProvider } from "next-themes"
import { locales, isRTL } from "@/lib/i18n/request"
import type { Locale } from "@/lib/i18n/request"
import { LearningReminderBanner } from "@/components/pwa/learning-reminder-banner"
import { NotificationPrompt } from "@/components/pwa/notification-prompt"
import { ErrorBoundaryWrapper } from "@/components/error-boundary-wrapper"
import { DarkModeInit } from "@/components/layout/dark-mode-init"
import "../globals.css"

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Pflege-Lernplattform",
    template: "%s | Pflege-Lernplattform",
  },
  description:
    "Adaptive Lernplattform für die generalistische Pflegeausbildung nach PflBG 2020",
  manifest: "/manifest.json",
  themeColor: "#C4877F",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Pflege-Lernplattform",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages()
  const dir = isRTL(locale) ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${poppins.variable} min-h-screen bg-background text-foreground antialiased font-[family-name:var(--font-poppins)]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <DarkModeInit />
            <ErrorBoundaryWrapper>
              {children}
            </ErrorBoundaryWrapper>
            <LearningReminderBanner />
            <NotificationPrompt />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
