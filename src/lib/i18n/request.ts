import { getRequestConfig } from "next-intl/server"

export const locales = ["de", "ar", "tr"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "de"

const rtlLocales: Locale[] = ["ar"]

export function isRTL(locale: string): boolean {
  return rtlLocales.includes(locale as Locale)
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale
  }

  return {
    locale,
    messages: (await import(`../../../messages/${locale}.json`)).default,
  }
})
