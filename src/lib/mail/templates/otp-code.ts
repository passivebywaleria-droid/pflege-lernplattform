import { SITE_NAME } from "@/lib/seo/site"

/**
 * OTP-Code-Mail — der 6-stellige Login-Code.
 * Der Code steht groß und allein, damit iOS/Android ihn aus der
 * Benachrichtigung als "one-time-code" anbieten können. Keine externen Assets.
 */
export function otpCodeMail(params: {
  code: string
  spitzname?: string
  ttlMinutes: number
}): { subject: string; html: string; text: string } {
  const { code, spitzname, ttlMinutes } = params
  const anrede = spitzname ? `Hallo ${spitzname},` : "Hallo,"
  // Betreff enthält den Code (iOS schlägt ihn zum Einfügen vor), beginnt aber
  // NICHT mit der nackten Zahl — Zahl-zuerst ist eine klassische
  // Spam-Heuristik (Yahoo-Spam-Befund 2026-07-19).
  const subject = `Dein ${SITE_NAME}-Code: ${code}`

  const text = [
    anrede,
    "",
    `dein Login-Code für ${SITE_NAME} lautet:`,
    "",
    code,
    "",
    `Gib ihn im geöffneten Fenster ein. Der Code gilt ${ttlMinutes} Minuten und`,
    "kann nur einmal verwendet werden.",
    "Falls du das nicht angefordert hast, ignoriere diese E-Mail einfach.",
    "",
    `— Dein ${SITE_NAME}-Team`,
  ].join("\n")

  const html = `
<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:480px;margin:0 auto;padding:24px;color:#2b2b2b">
  <p style="font-size:16px">${anrede}</p>
  <p style="font-size:15px;line-height:1.5">dein Login-Code für <strong>${SITE_NAME}</strong> lautet:</p>
  <p style="text-align:center;margin:28px 0">
    <span style="display:inline-block;font-size:34px;font-weight:700;letter-spacing:8px;color:#C4877F;font-family:'SF Mono',Menlo,Consolas,monospace">${code}</span>
  </p>
  <p style="font-size:13px;color:#6b6b6b;line-height:1.5">Gib ihn im geöffneten Fenster ein. Der Code gilt ${ttlMinutes} Minuten und kann nur einmal verwendet werden. Falls du das nicht angefordert hast, ignoriere diese E-Mail einfach.</p>
  <p style="font-size:13px;color:#6b6b6b;margin-top:24px">— Dein ${SITE_NAME}-Team</p>
</div>`.trim()

  return { subject, html, text }
}
