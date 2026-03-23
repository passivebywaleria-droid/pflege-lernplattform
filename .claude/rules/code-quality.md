# Code-Qualitaet

## TypeScript
- Strict mode ist aktiv — keine `any` Types, keine `@ts-ignore`
- Alle Komponenten mit Interface fuer Props
- Pfad-Aliase nutzen: `@/components/`, `@/lib/`, `@/hooks/`

## Komponenten
- shadcn/ui in `src/components/ui/` — NIEMALS manuell aendern
- Neue UI-Komponenten via `npx shadcn@latest add <name>`
- Eigene Komponenten: `src/components/<feature>/<name>.tsx`
- `"use client"` nur wenn noetig (Hooks, Events, State)

## Internationalisierung
- IMMER alle 3 Dateien gleichzeitig aendern:
  - `messages/de.json`
  - `messages/ar.json`
  - `messages/tr.json`
- Keys konsistent: `feature.section.label`
- RTL-Support fuer Arabisch: `dir="rtl"` im Layout

## Tests
- Vitest fuer Unit/Integration
- Jede neue Komponente: mindestens 1 Test
- Kritische Flows: Playwright E2E (Login, Quiz, Lektion)

## Validierung vor Commit
```bash
npx tsc --noEmit && npx vitest run --reporter=verbose && npm run build
```
Alle drei muessen PASS sein bevor committed wird.
