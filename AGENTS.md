# AGENTS.md — Technischer Guide

> Referenz fuer Tech-Stack, Kommandos, Patterns. Regeln stehen in `.claude/rules/`.

## Kommandos

```bash
npm run dev                        # Entwicklungsserver (localhost:3000)
npx tsc --noEmit                   # TypeScript pruefen
npx vitest run --reporter=verbose  # Tests ausfuehren
npm run build                      # Produktions-Build
npm run lint                       # ESLint
```

## Validierung (vor jedem Commit)

```bash
npx tsc --noEmit && npx vitest run && npm run build && npm run lint
```

## Tech-Stack

| Was | Technologie |
|-----|-------------|
| Framework | Next.js 15 (App Router) |
| Sprache | TypeScript (strict) |
| Styling | Tailwind CSS 4 + shadcn/ui |
| State (Client) | Zustand |
| State (Server) | TanStack React Query |
| ORM | Drizzle ORM (PostgreSQL) |
| DB (Entwicklung) | Mock-Daten in `src/lib/mock/` |
| Auth | JWT (jose) + bcryptjs |
| i18n | next-intl (DE/AR/TR) |
| Tests | Vitest + Testing Library |
| Formulare | react-hook-form + Zod |
| Icons | lucide-react |
| Animation | framer-motion |
| Charts | recharts |
| Drag & Drop | @dnd-kit |

## Dateistruktur

```
src/
├── app/[locale]/              # Pages (App Router)
│   ├── (auth)/                # Login/Register Layout
│   ├── (dashboard)/           # Geschuetzter Bereich
│   └── api/                   # API Routes
├── components/
│   ├── ui/                    # shadcn/ui (NICHT manuell aendern)
│   ├── auth/                  # Auth-Komponenten
│   ├── layout/                # Navigation, Sidebar
│   ├── learn/                 # Lernmodul-Komponenten
│   ├── quiz/                  # Quiz-Komponenten
│   ├── dashboard/             # Dashboard-Komponenten
│   └── gamification/          # Streaks, XP, Goals
├── lib/
│   ├── auth/                  # Session, Guards
│   ├── db/                    # Drizzle Schema
│   ├── mock/                  # Mock-Daten
│   ├── i18n/                  # next-intl Config
│   └── utils.ts               # Utilities
├── hooks/                     # Custom Hooks
└── types/                     # TypeScript-Typen
```

## Orchestrierung

```
.claude/
├── rules/                     # Modulare Regeln (immer geladen)
│   ├── code-quality.md        # TypeScript, Tests, i18n
│   ├── vision-first.md        # VISION.md = Wahrheit
│   ├── documentation.md       # Dokumentations-Disziplin
│   └── security.md            # DSGVO, Secrets, Auth
├── agents/                    # Spezialisierte Agenten
│   ├── builder.md             # Implementiert 1 Task
│   ├── planner.md             # Gap-Analyse, Sprint-Plan
│   └── reviewer.md            # Code-Review, A11y, Security
├── skills/                    # Custom Slash-Commands
│   ├── build/SKILL.md         # /build — Feature implementieren
│   ├── plan/SKILL.md          # /plan — Sprint planen
│   ├── cleanup/SKILL.md       # /cleanup — Aufraumen
│   └── status/SKILL.md        # /status — Projektstatus
└── settings.json              # Agent Teams + Hooks
```

### Agent Teams (fuer parallele Arbeit)

Aktiviert via `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. Nutze fuer:
- Parallele Feature-Entwicklung (Frontend + Backend + Tests)
- Mehrere CEs gleichzeitig mit Inhalten befuellen
- Code Review aus verschiedenen Perspektiven

```
Beispiel: "Erstelle ein Agent Team mit 3 Teammates:
  - Teammate 1: Quiz-Engine bauen
  - Teammate 2: Dashboard bauen
  - Teammate 3: Tests schreiben"
```

## Code-Patterns

### Neue Seite
```tsx
// src/app/[locale]/(dashboard)/learn/page.tsx
import { useTranslations } from "next-intl"

export default function LearnPage() {
  const t = useTranslations("learn")
  return <div>{t("title")}</div>
}
```

### Neue Komponente
```tsx
// src/components/learn/module-card.tsx
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ModuleCardProps {
  title: string
  progress: number
}

export function ModuleCard({ title, progress }: ModuleCardProps) {
  return (
    <Card>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent><Progress value={progress} /></CardContent>
    </Card>
  )
}
```

### Mock-Daten
```tsx
// src/lib/mock/learn-modules.ts
import type { LearnModule } from "@/types/db"

export const mockLearnModules: LearnModule[] = [
  {
    id: "mod-001",
    ceId: "ce-01",
    titleDe: "Ausbildungsstart",
    titleAr: "بداية التدريب",
    titleTr: "Eğitim Başlangıcı",
    bloomLevel: 1,
    durationMin: 15,
    isPublished: true,
  },
]
```

## Bekannte Eigenheiten

- `middleware.ts` handled JWT + Locale Routing — vorsichtig bearbeiten
- Schema nutzt `pgTable` — fuer Mock-Daten TypeScript-Typen ableiten
- RTL-Support fuer Arabisch: `dir="rtl"` im Layout
- Neue shadcn-Komponenten: `npx shadcn@latest add <name>`

## Learnings

_Wird ergaenzt wenn neue Patterns entdeckt werden._
