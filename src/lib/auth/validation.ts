import { z } from "zod"

// UI-Rollen (deutsch, für Formular)
export const userRoles = ["schueler", "lehrer", "schulleiter"] as const
export type UserRole = (typeof userRoles)[number]

// DB-Rollen (englisch, für Datenbank + Session)
export type DbRole = "student" | "teacher" | "principal" | "admin"

// Mapping: UI → DB
const ROLE_MAP: Record<UserRole, DbRole> = {
  schueler: "student",
  lehrer: "teacher",
  schulleiter: "principal",
}

export function mapRoleToDb(uiRole: UserRole): DbRole {
  return ROLE_MAP[uiRole]
}

export const registerSchema = z.object({
  email: z.string().email("Ungültige E-Mail-Adresse"),
  password: z
    .string()
    .min(8, "Passwort muss mindestens 8 Zeichen lang sein"),
  name: z.string().min(1, "Name ist erforderlich").max(255),
  role: z.enum(userRoles).default("schueler"),
  language: z.enum(["de", "ar", "tr"]).default("de"),
  schoolCode: z.string().optional(),
})

export const loginSchema = z.object({
  email: z.string().email("Ungültige E-Mail-Adresse"),
  password: z.string().min(1, "Passwort ist erforderlich"),
})

// ── Magic-Link-Signup (Pilot: passwortlos, minimal) ──
// Pilot-Regel: nur ab 16 (Geburtsjahr-Check). Kein Klarname — nur Spitzname.
const PILOT_MIN_AGE = 16
const CURRENT_YEAR = new Date().getFullYear()

export const magicRequestSchema = z.object({
  email: z.string().trim().toLowerCase().email("Ungültige E-Mail-Adresse"),
  // Spitzname statt Klarname (Datensparsamkeit).
  spitzname: z
    .string()
    .trim()
    .min(1, "Bitte gib einen Spitznamen ein")
    .max(40, "Spitzname ist zu lang"),
  birthYear: z
    .number({ message: "Bitte gib dein Geburtsjahr an" })
    .int()
    .min(1900, "Bitte gib ein gültiges Geburtsjahr an")
    .max(CURRENT_YEAR, "Bitte gib ein gültiges Geburtsjahr an"),
  // ≥16-Bestätigung muss aktiv gesetzt sein.
  consent: z.literal(true, {
    message: "Bitte bestätige, dass du mindestens 16 bist",
  }),
  language: z.enum(["de", "ar", "tr"]).optional(),
  // Wohin nach erfolgreichem Login zurück (z. B. in die Situation).
  next: z.string().optional(),
})

/** true, wenn das Geburtsjahr das Pilot-Mindestalter (16) erreicht. */
export function isAtLeastPilotAge(birthYear: number): boolean {
  return CURRENT_YEAR - birthYear >= PILOT_MIN_AGE
}

export type RegisterInput = z.input<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type MagicRequestInput = z.infer<typeof magicRequestSchema>
