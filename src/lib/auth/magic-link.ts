import { randomInt, createHash } from "crypto"

/**
 * Einmal-Code (OTP) — passwortloser Login/Signup (Pilot).
 *
 * Warum Code statt Klick-Link: Öffnet die Mail-App den Link in ihrem
 * In-App-Browser (WebView), ist das ein isolierter Speicher-Kontext — der
 * Gast-localStorage wäre unsichtbar (Merge scheitert) und die Session-Cookie
 * landet im WebView statt im Spiel-Browser. Ein 6-stelliger Code, den der
 * Nutzer im selben Tab eintippt, umgeht das.
 *
 * Sicherheit:
 * - Klartext-Code nur in der Mail (nie in der DB).
 * - In der DB liegt ausschließlich der SHA-256-Hash (login_tokens.codeHash).
 * - Bindung an die E-Mail (Verify braucht E-Mail + Code).
 * - Max. 5 Fehlversuche pro Code (login_tokens.attempts), dann invalide.
 * - Kurze Gültigkeit (TTL).
 */

export const OTP_TTL_MINUTES = 15
export const OTP_MAX_ATTEMPTS = 5
export const OTP_LENGTH = 6

/**
 * Erzeugt einen kryptografisch sicheren 6-stelligen Code (führende Nullen
 * erlaubt, immer genau 6 Zeichen).
 */
export function generateOtpCode(): string {
  // randomInt ist gleichverteilt (kein Modulo-Bias) im Bereich [0, 1_000_000).
  return randomInt(0, 1_000_000).toString().padStart(OTP_LENGTH, "0")
}

/** Hasht einen Code für die DB-Ablage (deterministisch, kein Salt nötig). */
export function hashOtpCode(code: string): string {
  return createHash("sha256").update(code).digest("hex")
}

/** Normalisiert Nutzereingabe (Leerzeichen/Bindestriche entfernen). */
export function normalizeOtpInput(raw: string): string {
  return raw.replace(/[^0-9]/g, "")
}

/** Ablaufzeitpunkt für einen frisch erzeugten Code. */
export function otpExpiry(now: Date = new Date()): Date {
  return new Date(now.getTime() + OTP_TTL_MINUTES * 60 * 1000)
}
