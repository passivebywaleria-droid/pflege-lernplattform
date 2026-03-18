import { z } from "zod"

export const registerSchema = z.object({
  email: z.string().email("Ungueltige E-Mail-Adresse"),
  password: z
    .string()
    .min(8, "Passwort muss mindestens 8 Zeichen lang sein"),
  name: z.string().min(1, "Name ist erforderlich").max(255),
  language: z.enum(["de", "ar", "tr"]).default("de"),
  schoolCode: z.string().optional(),
})

export const loginSchema = z.object({
  email: z.string().email("Ungueltige E-Mail-Adresse"),
  password: z.string().min(1, "Passwort ist erforderlich"),
})

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>
