/**
 * Mail-Transport — Brevo (transaktionale E-Mails, EU/DSGVO).
 *
 * Solange BREVO_API_KEY nicht gesetzt ist, läuft der Transport im STUB-Modus:
 * die Mail wird nicht versendet, sondern der Inhalt (inkl. Magic-Link) in die
 * Server-Konsole geloggt — so ist der Flow lokal komplett testbar, bevor der
 * Brevo-Account steht.
 */

interface SendMailParams {
  to: string
  subject: string
  html: string
  text: string
}

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email"

function fromAddress() {
  return {
    name: process.env.MAIL_FROM_NAME ?? "Carovia",
    email: process.env.MAIL_FROM_EMAIL ?? "noreply@carovia.de",
  }
}

/**
 * Versendet eine transaktionale E-Mail. Wirft bei echtem Versand-Fehler,
 * damit die aufrufende Route den Nutzer informieren kann.
 * Im Stub-Modus (kein API-Key) wird nur geloggt und `stubbed: true` gemeldet.
 */
export async function sendMail(
  params: SendMailParams
): Promise<{ ok: boolean; stubbed: boolean }> {
  const apiKey = process.env.BREVO_API_KEY

  if (!apiKey) {
    // STUB: kein Versand — Inhalt loggen (nur Server-Konsole, nie an Client).
    console.info(
      `[mail:stub] An: ${params.to}\n[mail:stub] Betreff: ${params.subject}\n[mail:stub] Text:\n${params.text}`
    )
    return { ok: true, stubbed: true }
  }

  const res = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: fromAddress(),
      to: [{ email: params.to }],
      subject: params.subject,
      htmlContent: params.html,
      textContent: params.text,
    }),
  })

  if (!res.ok) {
    const detail = await res.text().catch(() => "")
    console.error(`[mail] Brevo-Versand fehlgeschlagen (${res.status}): ${detail}`)
    throw new Error("Mail-Versand fehlgeschlagen")
  }

  return { ok: true, stubbed: false }
}
