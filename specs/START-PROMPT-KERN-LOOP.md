# Start-Prompt — Kern-Loop fertigstellen (Audit-Reihenfolge)

> Resume-Anker nach /clear (2026-07-18). Boot-Sequenz läuft eh; das hier ist der Stand.
> **Arbeitsmodus:** CLAUDE.md „Senior Product Partner" ist verbindlich — kein Schnell-Ja,
> Entscheidungen hinterfragen, alles belegen. Referenzen: `specs/DIDAKTIK-AUDIT-SITUATIONEN.md`
> (Prioritäten!), `specs/KERN-LOOP-STANDARD.md`, `specs/PLAN-ADAPTIV-V1.md`.

## Live auf carovia.de (Stand 6c10cf4, Branch feat/ce-06-wissens-tabs-redesign, gepusht)

- **„Erklär mir das anders"** (Nebius/Llama, RAG-gebunden, /api/erklaer-anders public)
- **PWA/Offline repariert** (war seit April tot: Turbopack↔Serwist → `build --webpack`;
  Custom-SW-Routen VOR defaultCache; OfflinePilotCache wärmt CE-Situationen; BackgroundSync)
- **Clean-Standard Baustein 1+2**: 1 Meta-Zeile, kein Typ-Label, EIN Feedback-Ort
  (Verdikt → Warum → „Warum die anderen nicht?" eingeklappt), Glossar gepunktet
- **Spickzettel (Option A, Baustein 3)**: Wagner 17→12 Steps, Ríos 2 Bausteine; Chip am
  Anker-Step, Sheet mit VOLLSTÄNDIGEM Baustein, „Kennst du schon?"-Pills mit ?von=-Rückkehr
- **Anmeldung end-to-end**: Prod-DB-Migration nachgezogen (birth_year/access_until,
  password_hash nullable, auth_identities/login_tokens/waitlist_signups), Brevo-Versand
  mit Domain-Auth (delivered+opened verifiziert), /login+/mitmachen im Lern-Design ohne
  App-Chrome, /register→/mitmachen

## Committed aber NOCH NICHT deployed (nach 6c10cf4)

- B1-Fix: Musterlösung im AnswerSheet nutzt explanationB1 (Audit-Lücke 4)
- Docs: DIDAKTIK-AUDIT, PLAN-ADAPTIV-V1, CLAUDE.md-Arbeitsmodus
→ Beim nächsten Deploy mitnehmen (scripts/deploy-hetzner.sh, Freigabe nötig).

## Nächste Schritte (Audit-Reihenfolge, von Waleria bestätigt)

1. ✅ **Abschluss-Screen** GEBAUT (2026-07-18, Waleria: B-Abruf + C1 Coach +
   Gast-Zeile dezent; specs/ENTWURF-ABSCHLUSS-SCREEN.md). Walkthrough verifiziert,
   Screenshots an Waleria. **Deploy-Freigabe offen.**
2. ✅ **Auftakt-Screen** GEBAUT (2026-07-19, Waleria: Lernziele aus dem
   Rahmenlehrplan pro Situation + Szene + nur Schrittzahl;
   specs/ENTWURF-AUFTAKT-SCREEN.md). **Deploy-Freigabe offen.**
3. **Adaptiv-v1** nach PLAN-ADAPTIV-V1 inkl. Frust-Bremse (3× falsch → Eskalation).
   Merken: Nachhaken = Spektrum-Kontrastfall (NIE wortgleich), Karteikarten sind
   WISSENS-Karten (Upsert, keine Duplikate), Skip bewusst nicht in v1.
4. **Sprech-/Hör-Moment** Wagner „Übergeben" (SBAR, TTS existiert).
5. Danach: Rechtstexte-Status (Task #11 — evtl. Parallel-Chat), Mastery-Definition.

## Offen / nicht vergessen

- Deploy-Freigaben IMMER bei Waleria; Dev-Server nie starten (lokale Prod-Instanz, Memory).
- Brevo: alten SMTP-Key im Dashboard löschen (Waleria). Kein Migrations-Workflow für
  Prod-DB — vor CE-02-Sanierung/neuen Tabellen klären (drizzle generate in Deploy).
- Parallel-Chat-Ergebnisse prüfen: PLAN-ADAPTIV-WAGNER? INVENTUR-FRAGE-DOPPLUNG? Rechtstexte?
- Kleinpunkte: DSO-2024-Zahl + AR-Gegenlese (FRAGEN-GRUENDERIN), Feedback-Text-Kürzung
  (Content-Batch), Startbildschirm-Hinweis („nie ‚installieren' sagen").
