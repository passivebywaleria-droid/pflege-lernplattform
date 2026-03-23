# Sicherheit & Datenschutz

## DSGVO (nicht verhandelbar)

- **Server:** Hetzner Cloud, Deutschland — alle Daten in DE
- **KI-Anfragen:** Nur anonymisiert an Nebius (Frage + Antwort, KEIN Name, KEINE User-ID)
- **Keine externen Tracker:** Kein Google Analytics, kein Facebook Pixel, nichts
- **Keine Werbung:** Niemals
- **Loeschrecht:** User kann Account + alle Daten jederzeit loeschen

## Code-Sicherheit

- `.env` Dateien NIEMALS committen
- Secrets NIEMALS hardcoden
- HTTPS ueberall (Let's Encrypt)
- JWT-Tokens: httpOnly Cookies, nicht localStorage
- Input-Validierung: Zod auf Server UND Client
- SQL: Drizzle ORM (kein Raw SQL, keine Injection)
- XSS: React escaped automatisch — trotzdem kein `dangerouslySetInnerHTML`

## Minderjaehrige

- Unter 16: Eltern-Einwilligung erforderlich (DSGVO Art. 8)
- Consent-Flow im Registrierungsprozess einbauen
- Eltern-Zugang: Optional, nur Lernfortschritt (nicht Inhalte)

## Middleware

- `src/middleware.ts` handled JWT-Validierung + Locale-Routing
- VORSICHTIG bearbeiten — Fehler hier = kompletter Auth-Ausfall
- Aenderungen an Middleware: immer manuell testen
