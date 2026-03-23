---
name: status
description: Zeigt Projektstatus — was ist gebaut, was fehlt, naechster Schritt.
user-invocable: true
allowed-tools: Read, Glob, Grep
---

# /status — Projektstatus anzeigen

## Ablauf

### 1. Sprint-Stand
Lies `specs/SPRINT_PLAN.md` und zaehle:
- Erledigte Tasks
- Offene Tasks
- Aktueller Sprint

### 2. Code-Stand
Zaehle schnell:
- Anzahl Pages in `src/app/[locale]/`
- Anzahl Komponenten in `src/components/`
- Anzahl Tests (`**/*.test.*`)
- Anzahl i18n-Keys pro Sprache

### 3. Vision-Abdeckung
Pruefe gegen VISION.md Kernfeatures:
- [ ] Zwei-Achsen-Einstufung (Sprache + Fachwissen)
- [ ] Adaptiver Einstufungstest
- [ ] Quiz-Engine (8+ Fragetypen)
- [ ] 8-UE-Session-Struktur
- [ ] Wochen-/Semesterplanung
- [ ] KI-Didaktik (Fehleranalyse + Strategiewechsel)
- [ ] Whisper (TTS + STT)
- [ ] Lehrer-Chat
- [ ] Lehrer-Dashboard
- [ ] Gamification (XP, Streaks, Meilensteine)
- [ ] Glossar DE/AR/TR
- [ ] Karteikarten (FSRS)
- [ ] Pruefungsvorbereitung
- [ ] Offline-Modus (PWA)
- [ ] Lernzeit-Nachweis

### 4. Output
Zeige eine kompakte Uebersicht:

```
Sprint: X von Y
Tasks:  X erledigt / Y offen
Code:   X Pages, Y Komponenten, Z Tests
Vision: X/15 Kernfeatures

Naechster Schritt: [Task-Beschreibung]
```

## Regeln
- Nur lesen, nichts aendern
- Ehrlich sein — nicht beschoenigen
- Konkreten naechsten Schritt vorschlagen
