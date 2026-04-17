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

### Urheberrecht / I Care Abstandstest
- `npx tsx scripts/check-artikel-abstand.ts le-{N}` prueft N-Gramm-Abstand gegen alle I Care Extrakte
- Schwellenwerte: ≥3 Treffer = WARN, ≥6 = FAIL (pro Block)
- Statistik-Fakten (Zahlen, Prozente) sind haeufige False Positives — manuell pruefen
- Primärquellen statt I-Care-Referenzen: `(§ 5 PflBG)`, `(ICN 2021)`, `(Fiechter/Meier 1981)`
- KI-Prüfer Block U1 ist K.O.-Kriterium in der Pipeline

### Lern-Snack Tab
- 6. Tab im Tab-Modell (zwischen Wissen und Üben)
- localStorage-Persistenz: `lernSnack:{leId}:{itemId}`
- Content-Typ: `LernSnack[]` in `content/_types.ts`
- Template: `specs/templates/lern-snack-plan.tmpl.md`

### Quality-Gate + Review-Pipeline (2026-04-17)
- **Master-Script**: `npx tsx scripts/quality-gate.ts le-{N}` — 11 Checks, JSON+MD Report
  - K.O.: TypeScript, Renderer, Urheberrecht (FAIL = 0)
  - Non-K.O.: Naming, Schema, Fakten, MC-Bias, Dialog-Bias, B1, Glossar, Pre-Live
  - Output: `content/le-{N}/quality-report.json` + `quality-report.md`
- **Cross-LE**: `npx tsx scripts/cross-le-checker.ts` — Glossar-Konsistenz, Duplikate, Patienten
- **Student-Walkthrough**: `npx tsx scripts/student-walkthrough.ts le-{N}` — Flow, Lese-Last, Interaktion, Monotonie
- **Pipeline-Status**: `npx tsx scripts/pipeline-checklist.ts le-{N}|--all` — zeigt naechsten Schritt
- **KI-Prüfer**: Liest `quality-report.json` VOR semantischer Prüfung — bei FAIL oder fehlend → Stop
- **Vorsicht**: Scripts wie `validate-le.ts` geben exit 1 auch bei MEDIUM-Warnungen — Quality-Gate parst Output statt Exit-Code
- **A11y-Block**: In `content-schema.ts` integriert — Bild-Steps brauchen bildhinweis/altText, Dialog-Phasen brauchen sprecher

### 6-Rollen-Review (2026-04-14)
- **Pipeline-Kriterien**: 32 semantisch (8 K.O.) — inkl. Block LS + Block SK (UE-Skalierung)
- **Code-Regeln**: Keine `text-[10px]` (min text-xs), keine hardcoded Hex-Farben (CSS-Vars), `aria-expanded` auf ALLE Akkordeons
- **Anrede**: IMMER "du" — nie "Sie" (auch in B1-Texten)
- **Statistiken**: Immer mit Jahresangabe, >5 Jahre alt → aktualisieren
- **Definitionen im Snack**: VOLLSTÄNDIG (ICN = 4 Kernaufgaben, nicht 2)
- **Keine Duplikate**: Snack-Items über Kapitelgrenzen prüfen
- **iOS Safari**: Text-Highlighting via Selection API funktioniert NICHT — Feature entfernt
