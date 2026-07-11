import { randomBytes, createHash } from "crypto"

/**
 * Magic-Link-Token — passwortloser Login/Signup (Pilot).
 *
 * Sicherheit:
 * - Klartext-Token nur im Link an die E-Mail (nie in der DB).
 * - In der DB liegt ausschließlich der SHA-256-Hash (login_tokens.tokenHash).
 * - Einmalig verwendbar (usedAt) + kurze Gültigkeit (TTL).
 */

export const MAGIC_LINK_TTL_MINUTES = 30

/** Erzeugt ein kryptografisch sicheres Klartext-Token (URL-safe). */
export function generateMagicToken(): string {
  return randomBytes(32).toString("base64url")
}

/** Hasht ein Klartext-Token für die DB-Ablage (deterministisch, kein Salt nötig). */
export function hashMagicToken(token: string): string {
  return createHash("sha256").update(token).digest("hex")
}

/** Ablaufzeitpunkt für ein frisch erzeugtes Token. */
export function magicTokenExpiry(now: Date = new Date()): Date {
  return new Date(now.getTime() + MAGIC_LINK_TTL_MINUTES * 60 * 1000)
}
