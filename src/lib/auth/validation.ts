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

export type RegisterInput = z.input<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>
