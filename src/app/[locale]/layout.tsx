import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Inter } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { ThemeProvider } from "next-themes"
import { locales, isRTL } from "@/lib/i18n/request"
import type { Locale } from "@/lib/i18n/request"
import { LearningReminderBanner } from "@/components/pwa/learning-reminder-banner"
import { NotificationPrompt } from "@/components/pwa/notification-prompt"
import { ErrorBoundaryWrapper } from "@/components/error-boundary-wrapper"
import { DarkModeInit } from "@/components/layout/dark-mode-init"
import { GlobalTabBar } from "@/components/layout/global-tab-bar"
import { SITE_URL } from "@/lib/seo/site"
import "../globals.css"

// Inter — Bundle-Font (claude-design-bundle), wirkt schmaler/kompakter als Poppins
const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',  // Variable-Name behalten für Backward-Compat
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pflege-Lernplattform",
    template: "%s | Pflege-Lernplattform",
  },
  description:
    "Adaptive Lernplattform für die generalistische Pflegeausbildung nach PflBG 2020",
  manifest: "/manifest.json",
  themeColor: "#5A7D60",
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
      <body className={`${inter.variable} min-h-screen bg-background text-foreground antialiased font-[family-name:var(--font-poppins)]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <DarkModeInit />
            <ErrorBoundaryWrapper>
              {children}
            </ErrorBoundaryWrapper>
            <LearningReminderBanner />
            <NotificationPrompt />
            <GlobalTabBar />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
