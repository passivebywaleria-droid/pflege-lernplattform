# Pflege-Lernplattform — Projekt-Anweisungen

> Wird automatisch bei jeder Session geladen. Kurz, konkret, verbindlich.

## Boot-Sequenz

Bei jedem Session-Start diese Dateien in dieser Reihenfolge lesen:

1. `VISION.md` — Was bauen wir? (Wahrheitsquelle, überstimmt alles)
2. `AGENTS.md` — Wie bauen wir? (Tech-Stack, Patterns, Kommandos)
3. `specs/SPRINT_PLAN.md` — Wo stehen wir? (aktueller Sprint + Tasks)

## Absolute Regeln

- **VISION.md ist die Wahrheit.** Bei jedem Widerspruch gilt VISION.md.
- **Nie Code schreiben ohne VISION.md gelesen zu haben.**
- **Immer alle 3 Sprachen updaten:** `messages/de.json`, `messages/ar.json`, `messages/tr.json`
- **Nie shadcn/ui-Komponenten manuell ändern** (`src/components/ui/`)
- **Middleware vorsichtig bearbeiten** — handled JWT + Locale Routing
- **Validierung vor jedem Commit:** `npx tsc --noEmit && npx vitest run && npm run build`
- **Keine Secrets in Code** — .env Dateien nie committen
- **Immer echte Umlaute verwenden:** ä, ö, ü, ß — NIEMALS ae, oe, ue, ss

## Dokumentations-Disziplin

**Nach jedem abgeschlossenen Schritt:**
1. Memory aktualisieren (was wurde gebaut/entschieden)
2. Veraltete Memory-Einträge löschen
3. Veraltete Spec-Dateien markieren oder löschen
4. Sprint-Plan aktualisieren (Task abhaken)
5. AGENTS.md Learnings ergänzen wenn neues Pattern entdeckt

**Bei jedem Session-Start:**
1. Memory lesen
2. Prüfen ob Dateien veraltet sind
3. Leere Ordner und Duplikate aufräumen

## Kommunikation

- Deutsch, kurz, direkt
- Zahlen und Ergebnisse vor Meinungen
- Wenn unklar: fragen statt raten
- Optionen anbieten statt lange erklären

## Imports

@VISION.md
@AGENTS.md
