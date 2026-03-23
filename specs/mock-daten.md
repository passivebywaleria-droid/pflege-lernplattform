# Spec: Mock-Daten & DB-Seeding

> Priorität: HÖCHSTE — Wird als erstes benötigt (Basis für alle Features)

## Überblick

Da wir lokal mit Mock-Daten arbeiten (kein Hetzner-PostgreSQL), brauchen wir ein vollständiges Mock-Daten-System unter `src/lib/mock/`.

## Dateien

### `src/lib/mock/ce-units.ts`
Alle 11 Curricularen Einheiten mit echten Titeln aus PflBG 2020:

| Nr | Titel (DE) | Ausbildungsdrittel | Zeitrichtwert |
|----|------------|-------------------|---------------|
| 01 | Die Ausbildung beginnen ... | 1 | 100h |
| 02 | Zu pflegende Menschen in der Bewegung und Selbstversorgung unterstützen | 1 | 140h |
| 03 | Erste Pflegeerfahrungen reflektieren ... | 1 | 80h |
| 04 | Gesundheit fördern und präventiv handeln | 1+2 | 140h |
| 05 | Menschen in kurativen Prozessen pflegerisch unterstützen | 2 | 180h |
| 06 | In Akutsituationen sicher handeln | 2 | 60h |
| 07 | Rehabilitatives Pflegehandeln ... | 2 | 80h |
| 08 | Menschen in kritischen Lebenssituationen ... | 2+3 | 160h |
| 09 | Menschen in der letzten Lebensphase begleiten | 3 | 40h |
| 10 | Entwicklung und Gesundheit in Kindheit und Jugend fördern | 3 | 120h |
| 11 | Menschen mit psychischen Gesundheitsproblemen ... | 3 | 80h |

### `src/lib/mock/learn-modules.ts`
3-5 Module pro MVP-CE (CE 01, 02, 05, 06) mit:
- id, ceId, titleDe/Ar/Tr
- bloomLevel (1-4), durationMin, isPublished
- contentDe/Ar/Tr (Platzhalter-Text, 2-3 Absätze)

### `src/lib/mock/quiz-questions.ts`
8-10 Fragen pro MVP-CE mit:
- Alle 5 Fragetypen vertreten
- Platzhalter-Text (pflege-thematisch)
- Antworten mit isCorrect

### `src/lib/mock/glossary-terms.ts`
5-10 Begriffe pro MVP-CE:
- termDe/Ar/Tr, definitionDe/Ar/Tr
- Pflege-Fachbegriffe (können generisch sein)

### `src/lib/mock/users.ts`
- 1 Schüler (Fatima, student, Deutsch)
- 1 Schüler (Ahmed, student, Arabisch)
- 1 Lehrerin (Frau Schmidt, teacher)
- 1 Admin

### `src/lib/mock/user-progress.ts`
- Fatima: CE 01 zu 75%, CE 02 zu 20%
- Ahmed: CE 01 zu 40%

### `src/lib/mock/index.ts`
Zentrale Export-Datei für alle Mock-Daten.

## TypeScript-Typen

Typen aus dem Drizzle-Schema ableiten (InferSelectModel) oder manuelle Interfaces in `src/types/`:
- `CeUnit`, `LearnModule`, `QuizQuestion`, `QuizAnswer`
- `GlossaryTerm`, `User`, `UserProgress`, `SkillMastery`
- `UserStreak`, `XpLogEntry`, `UserDailyGoal`

## Technische Hinweise

- Mock-Daten als TypeScript-Arrays exportieren (kein JSON)
- IDs als Strings: `"ce-01"`, `"mod-ce01-001"`, `"q-ce01-001"`
- Timestamps als `new Date()` Objekte
- Alle Mock-Daten sind statisch (kein API, kein Fetch)
- Später ersetzbar durch echte DB-Calls (gleiche Typen)
