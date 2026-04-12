"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { registerSchema, type RegisterInput } from "@/lib/auth/validation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const ROLE_OPTIONS = [
  { value: "schueler" as const, labelKey: "roleStudent", icon: "🎓" },
  { value: "lehrer" as const, labelKey: "roleTeacher", icon: "👩‍🏫" },
  { value: "schulleiter" as const, labelKey: "rolePrincipal", icon: "🏫" },
]

export function RegisterForm() {
  const t = useTranslations("auth")
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      language: "de",
      role: "schueler",
    },
  })

  const selectedRole = watch("role") || "schueler"

  async function onSubmit(data: RegisterInput) {
    setError(null)
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        setError(body.error || t("registerError"))
        return
      }

      router.push("/dashboard")
      router.refresh()
    } catch {
      setError(t("registerError"))
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Rollenwahl */}
      <div className="space-y-2">
        <Label>{t("role")}</Label>
        <div className="grid grid-cols-3 gap-2">
          {ROLE_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setValue("role", option.value)}
              className={`flex flex-col items-center gap-1 rounded-xl border-2 p-3 text-center transition-all ${
                selectedRole === option.value
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <span className="text-xl">{option.icon}</span>
              <span className="text-xs font-semibold">{t(option.labelKey)}</span>
            </button>
          ))}
        </div>
        <input type="hidden" {...register("role")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">{t("name")}</Label>
        <Input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("email")}</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">{t("password")}</Label>
        <Input
          id="password"
          type="password"
          autoComplete="new-password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>

      {/* Schulcode (optional, für Lehrer/Schulleiter) */}
      {(selectedRole === "lehrer" || selectedRole === "schulleiter") && (
        <div className="space-y-2">
          <Label htmlFor="schoolCode">{t("schoolCode")}</Label>
          <Input
            id="schoolCode"
            type="text"
            placeholder={t("schoolCodePlaceholder")}
            {...register("schoolCode")}
          />
        </div>
      )}

      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "..." : t("register")}
      </Button>
    </form>
  )
}
