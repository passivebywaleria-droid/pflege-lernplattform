import { SITE_NAME } from "@/lib/seo/site"

/**
 * Magic-Link-Mail — der Login-/Signup-Link.
 * Schlicht, mobil-lesbar, warme Marke. Keine externen Assets (Inline-Styles).
 */
export function magicLinkMail(params: {
  verifyUrl: string
  spitzname?: string
  ttlMinutes: number
}): { subject: string; html: string; text: string } {
  const { verifyUrl, spitzname, ttlMinutes } = params
  const anrede = spitzname ? `Hallo ${spitzname},` : "Hallo,"
  const subject = `Dein Login-Link für ${SITE_NAME}`

  const text = [
    anrede,
    "",
    `tippe auf diesen Link, um dich bei ${SITE_NAME} anzumelden und weiterzulernen:`,
    verifyUrl,
    "",
    `Der Link gilt ${ttlMinutes} Minuten und kann nur einmal verwendet werden.`,
    "Falls du das nicht angefordert hast, ignoriere diese E-Mail einfach.",
    "",
    `— Dein ${SITE_NAME}-Team`,
  ].join("\n")

  const html = `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#2b2b2b">
  <p style="font-size:16px">${anrede}</p>
  <p style="font-size:15px;line-height:1.5">tippe auf den Button, um dich bei <strong>${SITE_NAME}</strong> anzumelden und weiterzulernen:</p>
  <p style="text-align:center;margin:28px 0">
    <a href="${verifyUrl}" style="display:inline-block;background:#C4877F;color:#fff;text-decoration:none;font-weight:600;font-size:15px;padding:14px 28px;border-radius:12px">
      Jetzt anmelden
    </a>
  </p>
  <p style="font-size:13px;color:#6b6b6b;line-height:1.5">Der Link gilt ${ttlMinutes} Minuten und kann nur einmal verwendet werden. Falls du das nicht angefordert hast, ignoriere diese E-Mail einfach.</p>
  <p style="font-size:13px;color:#6b6b6b;margin-top:24px">— Dein ${SITE_NAME}-Team</p>
</div>`.trim()

  return { subject, html, text }
}
