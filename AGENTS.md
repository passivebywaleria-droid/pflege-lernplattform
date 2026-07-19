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

### App-Layout + Step-Design (2026-04-21)
- **Lern-Seite Root**: `h-dvh flex flex-col overflow-hidden` — nie `min-h-screen` mit Root-Scroll
- **Content-Area**: `flex-1 min-h-0 overflow-y-auto` (scrollt intern, Root bleibt fix)
- **Bottom-Tabs**: `shrink-0`, `border-t` (nicht `border-b`), `pb-[env(safe-area-inset-bottom)]`
- **Floating Buttons**: `bottom-20` (nicht `bottom-6`) — über Bottom-Tab-Leiste
- **Border-Standard**: `border-[1.5px]` überall (nicht `border` 1px, nicht `border-2` 2px)
- **Hover-Standard**: `hover:bg-[#B07A72]` für alle Accent-Buttons
- **BONE Farbe**: `${ROSE}08` (8% Opacity), NICHT mehr `#EAE0D5`
- **Step-Card padding**: `p-3` (Standard), `p-4` max — kompakter für mobile Screens
- **Turbopack-Cache**: Bei "Internal Server Error" → `rm -rf .next && npm run dev`

### Content-Budget + Prüfungsfall-Architektur (2026-04-22)

**Budget-Scripts:**
- `scripts/calculate-step-time.ts` — Zeit pro Step (MC, Matching, etc.)
- `scripts/calculate-content-budget.ts` — Gesamt-Budget: Wissenstexte + Snacks + Steps + Prüfungsfall

**Zwei Lernmodi:**
- **Lernen-Modus**: Verzahnt (Wissenstext → sofort Steps → nächster Text), Bloom 1-4
- **Prüfungs-Modus**: Langer Patientenfall + offene Fragen (freetext), Bloom 4-6, kein Feedback bis Ende

**Prüfungsfall-Architektur:**
- Eigene Entität (nicht Teil eines Themas), CE-übergreifend möglich
- Freischaltung: ALLE referenzierten Themen müssen vom Schüler abgeschlossen sein
- Format: `pruefungsfallId`, `voraussetzungen[]`, `aufgaben[]` mit Operator + Punkte + Musterlösung
- Ordner: `content/ce-{NN}/pruefung/{pruefungsfallId}/pruefungsfall-plan.md`

**Operator-System (PflAPrV, 100-120P pro 120-Min-Klausur):**
- AFB I (nennen/benennen/beschreiben): 1P = ~78s mobil
- AFB II (erläutern/erklären/vergleichen): 2P = ~156s mobil
- AFB III (begründen): 3P = ~234s mobil
- AFB III (beurteilen/bewerten/entwickeln/planen): 4P = ~312s mobil
- Plattform-Format: 20-30P pro Fall → ~35 Min

**Ausbildungsdrittel → CE-Mapping:**
- 1./2. AD: CE 01-03 komplett, CE 04+05 begonnen
- CE 01-03 haben KEINE Stunden im 3. AD
- CE 04+05 setzen sich im 3. AD fort (je 80h/140h)

**Wissen-Tab:** stilles Nachschlagewerk — zählt NICHT ins Budget, gleicher Content wie Stufe-3-Bausteine

### On-Device-Whisper + Cross-Origin-Isolation (2026-07-19)
- **App-weite COOP/COEP-Header** (`next.config.ts headers()`) sind Pflicht für SharedArrayBuffer/pthread-WASM — `crossOriginIsolated` MUSS true sein, sonst stirbt der Worker-Spawn (checkWasmSupport des Pakets prüft NUR SIMD, nicht SAB!)
- **HARTES GESETZ dadurch:** Künftige OAuth-Logins (Google!) MÜSSEN Redirect-Flow nutzen (Popups verlieren window.opener unter COOP same-origin); externe Embeds/Bilder brauchen CORP-Header; eingebettetes Stripe.js wäre tot (Hosted-Checkout-Redirect bleibt ok)
- **Whisper-Assets self-hosted**: `public/whisper/` (Modul committet, 57-MB-Modell via `npx tsx scripts/fetch-whisper-model.ts`, gitignored); Import per URL `Function("u","return import(u)")("/whisper/index.es.js")` — NIE Bare-Specifier (Browser kann nicht auflösen), NIE bundeln (zerbricht selbst-referenzierenden pthread-Worker)
- **transcribe() liefert `{segments, transcribeDurationMs}`**, kein Array
- **Modellwahl base-q5_1** (Benchmark 2026-07-19): beste dt. Fachsprache ≤ 60 MB, ~0,5× Echtzeit; tiny zerstört Fachbegriffe, small 2,5× Echtzeit = zu langsam
- **Fachbegriff-Postkorrektur**: `src/lib/learn/transkript-korrektur.ts` (Fuzzy ≥ 0,72 gegen Glossar+Zielwort, Beitrag-Guard gegen Füllwort-Fresser) — Alltagssprache-Fehler fängt der KI-Prompt ab
- **deploy-hetzner.sh rsynct jetzt auch next.config.ts + public/** — vorher wären Header + Modell nie am Server angekommen

### PWA/Serwist + Turbopack-Falle (2026-07-16)
- **Next 16 baut default mit Turbopack — @serwist/next braucht Webpack**: `"build": "next build --webpack"` ist PFLICHT, sonst wird `public/sw.js` nicht regeneriert (stale Manifest → SW-Install schlägt auf jedem Gerät fehl → PWA/Offline komplett tot, ohne Build-Fehler)
- **Symptom erkennen**: Build-ID in `public/sw.js` (`_next/static/<BUILD_ID>/`) mit `.next/BUILD_ID` vergleichen
- **runtimeCaching ist first-match-wins**: eigene Routen VOR `...defaultCache` — dahinter sind sie toter Code (defaultCache hat RSC/HTML/Catch-all-Matcher ohne networkTimeoutSeconds)
- **Offline-Warmup**: `OfflinePilotCache` auf der CE-Seite cached alle Situations-Dokumente (Cache „lektion-pages", URL exakt wie verlinkt inkl. `?ce=`); JS-Chunks kommen aus dem Precache-Manifest
- **Deploy**: package.json wird mitgersynct (deploy-hetzner.sh) — Build-Script muss auf dem Server identisch sein

### 6-Rollen-Review (2026-04-14)
- **Pipeline-Kriterien**: 32 semantisch (8 K.O.) — inkl. Block LS + Block SK (UE-Skalierung)
- **Code-Regeln**: Keine `text-[10px]` (min text-xs), keine hardcoded Hex-Farben (CSS-Vars), `aria-expanded` auf ALLE Akkordeons
- **Anrede**: IMMER "du" — nie "Sie" (auch in B1-Texten)
- **Statistiken**: Immer mit Jahresangabe, >5 Jahre alt → aktualisieren
- **Definitionen im Snack**: VOLLSTÄNDIG (ICN = 4 Kernaufgaben, nicht 2)
- **Keine Duplikate**: Snack-Items über Kapitelgrenzen prüfen
- **iOS Safari**: Text-Highlighting via Selection API funktioniert NICHT — Feature entfernt
