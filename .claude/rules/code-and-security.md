# Code-Qualität & Sicherheit

## TypeScript
- Strict mode — keine `any`, keine `@ts-ignore`
- Pfad-Aliase: `@/components/`, `@/lib/`, `@/hooks/`
- shadcn/ui (`src/components/ui/`) — NIEMALS manuell ändern, nur `npx shadcn@latest add`
- `"use client"` nur wenn nötig (Hooks, Events, State)

## i18n
- IMMER alle 3 gleichzeitig: `messages/de.json`, `messages/ar.json`, `messages/tr.json`
- Keys: `feature.section.label`
- RTL für Arabisch: `dir="rtl"`

## Tests & Validierung
```bash
npx tsc --noEmit && npx vitest run && npm run build && npm run lint
```

## Sicherheit
- `.env` NIEMALS committen, Secrets NIEMALS hardcoden
- JWT: httpOnly Cookies (nicht localStorage)
- Input: Zod auf Server UND Client
- SQL: Drizzle ORM (kein Raw SQL)
- XSS: Kein `dangerouslySetInnerHTML`
- Middleware (`src/middleware.ts`): JWT + Locale — VORSICHTIG bearbeiten

## DSGVO
- Server: Hetzner DE, KI: Nebius anonymisiert (kein Name, keine User-ID)
- Keine Tracker, keine Werbung, Löschrecht
- Unter 16: Eltern-Einwilligung (DSGVO Art. 8)
