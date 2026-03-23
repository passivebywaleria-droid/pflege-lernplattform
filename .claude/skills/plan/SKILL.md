---
name: plan
description: Analysiert Gap zwischen VISION.md und aktuellem Code. Aktualisiert Sprint-Plan. Schreibt KEINEN Code.
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit
argument-hint: "[fokus-bereich]"
---

# /plan — Sprint-Plan aktualisieren

## Ablauf

### Schritt 1: Vision verstehen
Lies parallel:
- `VISION.md` — komplette Produkt-Vision
- `specs/FEATURE_LISTE.md` — alle 38 Features
- `specs/SPRINT_PLAN.md` — aktueller Stand

### Schritt 2: Codebase analysieren
Durchsuche `src/` systematisch:
- Pages: `src/app/[locale]/`
- Komponenten: `src/components/`
- API: `src/app/[locale]/api/` oder `src/app/api/`
- DB-Schema: `src/lib/db/`
- Mock-Daten: `src/lib/mock/`
- Tests: `**/*.test.*`
- i18n: `messages/*.json`

### Schritt 3: Gap-Analyse
Erstelle eine Liste:
- Was fordert VISION.md das noch NICHT gebaut ist?
- Was ist angefangen aber NICHT fertig?
- Was ist gebaut aber NICHT mehr Vision-konform?
- Was ist gebaut und FERTIG?

### Schritt 4: Sprint-Plan schreiben
Aktualisiere `specs/SPRINT_PLAN.md`:
- Erledigte Tasks abhaken
- Neue Tasks hinzufuegen aus Gap-Analyse
- Priorisieren: Abhaengigkeiten → Wichtigkeit → Komplexitaet
- Max 30-40 Tasks insgesamt
- Jeder Task: atomarer Scope, Dateipfade, Aufwand (S/M/L)

### Schritt 5: Aufraeumen
- Veraltete Specs loeschen oder markieren
- Memory aktualisieren
- Inkonsistenzen aufloesen (VISION.md gewinnt immer)

## Wenn $ARGUMENTS angegeben
Fokussiere die Analyse auf den angegebenen Bereich (z.B. "quiz-system" oder "dashboard").

## Regeln
- KEIN Code schreiben
- VISION.md ist die Wahrheit
- Keine Features erfinden
