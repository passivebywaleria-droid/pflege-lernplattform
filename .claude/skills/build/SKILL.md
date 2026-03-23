---
name: build
description: Implementiert den naechsten Task aus dem Sprint-Plan. Liest VISION.md, baut 1 Feature, validiert, committed.
user-invocable: true
allowed-tools: Read, Write, Edit, Bash, Glob, Grep, Agent
argument-hint: "[task-beschreibung]"
---

# /build — Einen Task implementieren

## Ablauf

### Schritt 1: Orientierung
Lies diese Dateien (parallel wo moeglich):
- `VISION.md` — Produkt-Vision
- `AGENTS.md` — Tech-Stack, Patterns, Kommandos
- `specs/SPRINT_PLAN.md` — Aktueller Sprint, naechster offener Task

### Schritt 2: Task waehlen
- Wenn `$ARGUMENTS` angegeben: diesen Task implementieren
- Wenn nicht: den naechsten offenen Task aus dem Sprint-Plan nehmen
- Pruefe Abhaengigkeiten — sind Vorgaenger-Tasks erledigt?

### Schritt 3: Investigation
Nutze Subagents parallel:
- Suche relevante existierende Komponenten
- Pruefe existierende Patterns fuer diesen Feature-Typ
- Lies existierende Dateien die geaendert werden muessen

### Schritt 4: Implementierung
- GENAU 1 Task — nicht mehr
- Folge den Patterns aus AGENTS.md
- i18n: Alle 3 Sprachen (DE/AR/TR)
- Mobile-First
- Tests schreiben

### Schritt 5: Validierung
```bash
npx tsc --noEmit
npx vitest run --reporter=verbose
npm run build
npm run lint
```
ALLE muessen PASS sein. Wenn nicht: fixen und nochmal.

### Schritt 6: Dokumentation
- Sprint-Plan: Task abhaken
- Memory: Was wurde gebaut?
- Learnings: Neues Pattern entdeckt?
- Veraltetes loeschen

### Schritt 7: Commit
Commit mit aussagekraeftiger Message. Kein Push ohne explizite Anweisung.
