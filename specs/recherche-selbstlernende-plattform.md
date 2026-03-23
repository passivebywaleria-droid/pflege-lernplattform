# Recherche: Selbstlernende Plattform -- Adaptive Optimierung durch Aggregierte Lernerdaten

> **Ziel:** Konkrete, implementierbare Strategien, wie die Pflege-Lernplattform sich durch aggregierte Schuelerdaten selbst verbessert.
> **Stack:** Next.js 15 + PostgreSQL + Drizzle ORM, Solo-Entwickler
> **Datum:** 2026-03-21

---

## Inhaltsverzeichnis

1. [Vorbilder: Wie fuehrende Plattformen lernen](#1-vorbilder)
2. [Item Response Theory (IRT) -- Praxistaugliches Modell](#2-irt)
3. [Learning Analytics: Welche Daten sammeln?](#3-learning-analytics)
4. [A/B-Testing in der Bildung](#4-ab-testing)
5. [Der B1-Sprachfaktor: Messen statt Raten](#5-b1-sprachfaktor)
6. [DSGVO-konforme Aggregation](#6-dsgvo)
7. [Datenbank-Schema fuer Learning Events](#7-schema)
8. [Feedback-Loop: Sammeln -> Analysieren -> Anpassen -> Verifizieren](#8-feedback-loop)
9. [Implementierungsplan fuer Solo-Entwickler](#9-implementierung)
10. [Quellen](#10-quellen)

---

## 1. Vorbilder: Wie fuehrende Plattformen lernen {#1-vorbilder}

### 1.1 Duolingo -- Birdbrain & Half-Life Regression

Duolingo ist das Referenzbeispiel fuer datengetriebene Lernoptimierung:

- **Birdbrain-Modell:** Fuer jede Uebung wird eine Wahrscheinlichkeit berechnet, dass der Nutzer sie richtig loest. Das System schaetzt gleichzeitig (a) die Schwierigkeit der Aufgabe und (b) die aktuelle Faehigkeit des Lerners. Nach jeder Antwort werden beide Schaetzungen aktualisiert.
- **Logistische Regression nach IRT:** Duolingo verwendet eine Variante der logistischen Regression, inspiriert von Item Response Theory (IRT) aus der Psychometrie.
- **Half-Life Regression (HLR):** Formel: `p = 2^(-Delta/h)` wobei `p` = Erinnerungswahrscheinlichkeit, `Delta` = Tage seit letzter Uebung, `h` = Halbwertszeit im Gedaechtnis. Die Halbwertszeit steigt bei richtiger Antwort, sinkt bei falscher.
- **Skalierung:** ~15 Milliarden Uebungen pro Woche werden verarbeitet. Tausende A/B-Tests pro Jahr.
- **Ergebnis:** HLR hat halb so hohe Fehlerrate wie das Leitner-System. +9,5% taegliche Retention.

**Uebertragbarkeit auf Pflege-Lernplattform:** Das HLR-Modell ist Open Source auf GitHub verfuegbar. Es kann fuer Pflegefachbegriffe und Konzepte adaptiert werden -- besonders wertvoll fuer B1-Lerner, die Fachterminologie behalten muessen.

### 1.2 Khan Academy -- Mastery Learning

- **Stufensystem:** Attempted -> Familiar -> Proficient -> Mastered
- **Datengetrieben:** Jede zusaetzliche auf "proficient" geuebte Faehigkeit bringt ~0,5 Prozentpunkte Lernzuwachs gegenueber dem Vorjahr.
- **Algorithmen passen Schwierigkeit an:** Aufgaben werden automatisch schwerer oder leichter, basierend auf individuellem Verstaendnis.
- **Effektivitaetsmessung:** Langzeitstudien zeigen 0,12-0,22 Standardabweichungen Verbesserung bei regelmaessiger Nutzung.

**Uebertragbarkeit:** Das Stufensystem (Versucht -> Vertraut -> Sicher -> Gemeistert) ist direkt uebertragbar auf Pflegethemen pro Kompetenzeinheit (CE).

### 1.3 AMBOSS -- Crowdsourced Difficulty

- **Schwierigkeit durch Nutzer definiert:** 1-5 Haemmer, automatisch berechnet aus Antwortquoten aller Nutzer.
- **Verteilung:** Leichteste 20% = 1 Hammer, schwerste 5% = 5 Haemmer.
- **Peer-Statistiken:** Pro Frage sieht man, wie andere Nutzer abgeschnitten haben.
- **Misleading-Options erkennen:** Statistiken zeigen, ob eine Antwortoption ueberdurchschnittlich oft gewaehlt wird -- Hinweis auf schlechte Formulierung.

**Uebertragbarkeit:** Das einfachste und sofort implementierbare Modell. Schwierigkeit = Prozentsatz falscher Antworten. Kein ML noetig, reines SQL.

---

## 2. Item Response Theory (IRT) -- Praxistaugliches Modell {#2-irt}

### 2.1 Die drei Modelle

| Modell | Parameter | Formel | Wann verwenden? |
|--------|-----------|--------|-----------------|
| **1PL (Rasch)** | b (Schwierigkeit) | `P = e^(theta-b) / (1 + e^(theta-b))` | Start, wenig Daten |
| **2PL** | a (Trennschaerfe), b (Schwierigkeit) | `P = e^(a*(theta-b)) / (1 + e^(a*(theta-b)))` | Ab ~200 Antworten/Frage |
| **3PL** | a, b, c (Ratewahrscheinlichkeit) | `P = c + (1-c) * [e^(a*(theta-b)) / (1 + e^(a*(theta-b)))]` | MC-Fragen mit 4+ Optionen |

Wobei:
- **theta (θ)** = Faehigkeitsschaetzung des Schuelers (Logit-Skala, typisch -3 bis +3)
- **b** = Schwierigkeit der Frage (gleiche Skala wie theta)
- **a** = Trennschaerfe (wie gut die Frage zwischen starken und schwachen Schuelern unterscheidet)
- **c** = Ratewahrscheinlichkeit (bei 4 MC-Optionen = 0,25)

### 2.2 Praktische Berechnung ohne ML-Framework

Fuer den Start reicht eine vereinfachte 1PL-Schaetzung mit reinem SQL/TypeScript:

```typescript
// Vereinfachte Schwierigkeitsschaetzung (1PL/Rasch-Approximation)
function estimateItemDifficulty(
  correctCount: number,
  totalAttempts: number
): number {
  // p = Anteil richtiger Antworten
  const p = correctCount / totalAttempts;
  // Clamp um Division durch 0 zu vermeiden
  const pClamped = Math.max(0.01, Math.min(0.99, p));
  // Schwierigkeit auf Logit-Skala: b = -ln(p/(1-p))
  // Negative Logit = leicht, positive Logit = schwer
  return -Math.log(pClamped / (1 - pClamped));
}

// Vereinfachte Faehigkeitsschaetzung
function estimateStudentAbility(
  responses: { difficulty: number; correct: boolean }[]
): number {
  // Maximum-Likelihood-Schaetzung via Newton-Raphson
  let theta = 0; // Startwert
  for (let iter = 0; iter < 20; iter++) {
    let numerator = 0;
    let denominator = 0;
    for (const r of responses) {
      const p = 1 / (1 + Math.exp(-(theta - r.difficulty)));
      numerator += (r.correct ? 1 : 0) - p;
      denominator += p * (1 - p);
    }
    if (denominator === 0) break;
    theta += numerator / denominator;
  }
  return theta;
}
```

### 2.3 Was IRT fuer die Plattform leistet

| Erkenntnis | Wie erkennen? | Schwellwert | Aktion |
|------------|---------------|-------------|--------|
| Frage zu leicht | b < -2.0 | >95% richtig | Schwierigkeit erhoehen oder aus Pruefungsvorbereitung entfernen |
| Frage zu schwer | b > 2.0 | <15% richtig | Ueberpruefen: Inhalt oder Formulierung? |
| Frage nicht trennscharf | a < 0.3 (2PL) | Starke und schwache Schueler scheitern gleich oft | Frage ueberarbeiten oder entfernen |
| Schlechte Formulierung | Hohe Fehlerrate + viele waehlen denselben falschen Distraktor | >40% waehlen einen Distraktor | Antwortoption ueberarbeiten |
| Rate-Verdacht | Viele sehr schnelle richtige Antworten | <5 Sek. + richtig bei schweren Fragen | Antwortzeit-basierte Gewichtung |

### 2.4 Mindestanzahl Antworten fuer stabile Schaetzungen

| Parameter | Minimum fuer grobe Schaetzung | Minimum fuer stabile Schaetzung |
|-----------|-------------------------------|--------------------------------|
| b (Schwierigkeit) | 30 Antworten | 100 Antworten |
| a (Trennschaerfe) | 100 Antworten | 200-500 Antworten |
| c (Ratewahrscheinlichkeit) | 200 Antworten | 500+ Antworten |
| theta (Schueler-Faehigkeit) | 20 beantwortete Fragen | 50+ Fragen |

**Empfehlung:** Mit 1PL (nur Schwierigkeit) starten. Ab ~50 Schuelern pro CE kann die Schwierigkeitsschaetzung zuverlaessig berechnet werden. 2PL erst ab ~200 Schuelern pro Frage einfuehren.

---

## 3. Learning Analytics: Welche Daten sammeln? {#3-learning-analytics}

### 3.1 Event-Typen (nach xAPI-Standard vereinfacht)

Das xAPI-Format (IEEE 9274.1.1-2023) definiert Learning Records als "Actor + Verb + Object". Fuer die Plattform vereinfacht:

| Event-Typ | Daten | Zweck |
|-----------|-------|-------|
| `lesson_started` | userId, lessonId, timestamp | Startzeit messen |
| `lesson_completed` | userId, lessonId, timestamp, duration_ms | Tatsaechliche Lernzeit |
| `step_viewed` | userId, stepId, timestamp, duration_ms | Verweildauer pro Schritt |
| `question_answered` | userId, questionId, selectedOption, correct, duration_ms, attempt_number | IRT-Berechnung, Schwierigkeit |
| `question_skipped` | userId, questionId, timestamp | Ueberspringen = moegliches Problemindikator |
| `hint_used` | userId, questionId, timestamp | Hinweis-Nutzung korreliert mit Schwierigkeit |
| `content_rated` | userId, contentId, rating (1-5), timestamp | Subjektives Feedback |
| `session_heartbeat` | userId, timestamp, activeTab | Inaktivitaet erkennen (Tab-Wechsel) |

### 3.2 Abgeleitete Metriken (aggregiert berechnen)

| Metrik | Berechnung | Schwellwerte |
|--------|------------|-------------|
| **Echte Bearbeitungszeit** | Summe aktiver step_viewed Events (ohne Pausen >2 Min.) | Vergleich mit geschaetzter Zeit |
| **Schwierigkeitsindex** | richtige_antworten / alle_antworten | <0.3 = zu schwer, >0.9 = zu leicht |
| **Distraktor-Analyse** | Verteilung der gewaehlten Optionen pro MC-Frage | Ein Distraktor >40% = Ueberarbeiten |
| **Abbruchrate** | lesson_started ohne lesson_completed / lesson_started | >30% = Inhalt problematisch |
| **Wiederholungsrate** | Schueler die Lektion >2x machen / alle Schueler | Hohe Rate bei mittlerer Schwierigkeit = ok; bei leichtem Inhalt = verwirrend |
| **Zeitfaktor B1** | Median-Zeit B1-Schueler / Median-Zeit C1-Schueler | Dynamisch, ersetzt statischen Faktor |
| **Verstaendnis-Kurve** | Richtig-Rate bei 1., 2., 3. Versuch | Schneller Anstieg = gut erklaert |

### 3.3 Zeitbasierte Signale (was sie bedeuten)

```
Verweildauer auf einem Schritt:
  < 3 Sekunden  → Ueberspringen/nicht gelesen (bei Text-Content)
  3-30 Sekunden → Normales Lesen (abhaengig von Textlaenge)
  30-120 Sek.   → Gruendliches Studieren ODER Verwirrung
  > 120 Sek.    → Wahrscheinlich inaktiv (Tab gewechselt)

  → Loesung: Heartbeat alle 30 Sek. um aktive vs. inaktive Zeit zu trennen
  → Textlaenge in Zeichen speichern, um Lesegeschwindigkeit zu normalisieren
```

---

## 4. A/B-Testing in der Bildung {#4-ab-testing}

### 4.1 Was testen?

| Test-Kategorie | Konkretes Beispiel Pflege | Primaere Metrik | Sekundaere Metrik |
|----------------|---------------------------|-----------------|-------------------|
| **Erklaerungsansatz** | Wundversorgung: Video vs. Schritt-fuer-Schritt-Text | Richtig-Rate im Quiz | Bearbeitungszeit |
| **Fragenformulierung** | "Welche Massnahme ist korrekt?" vs. "Was tun Sie als erstes?" | Fehlerrate | Korrelation mit Gesamtleistung |
| **Reihenfolge** | Theorie zuerst vs. Fallbeispiel zuerst | Retention nach 7 Tagen | Abbruchrate |
| **Feedback-Timing** | Sofort nach jeder Frage vs. am Ende des Blocks | Lernzuwachs (Pre/Post) | Zufriedenheit |
| **Schwierigkeits-Rampe** | Linear vs. Saegezahn (leicht-schwer-leicht-schwer) | Abschlussrate | Selbsteinschaetzung |
| **Gamification** | XP-Belohnung sofort vs. am Lektionsende | Session-Laenge | Rueckkehrrate naechster Tag |

### 4.2 Statistische Anforderungen fuer kleine Stichproben

In der Bildung hat man selten 30.000 Nutzer wie im E-Commerce. Realistische Groessen:

| Effektgroesse | Benoetigte Schueler pro Variante | Typische Situation |
|---------------|----------------------------------|--------------------|
| Gross (d=0.8) | ~26 pro Gruppe | Voellig neuer Erklaerungsansatz |
| Mittel (d=0.5) | ~64 pro Gruppe | Andere Fragenformulierung |
| Klein (d=0.2) | ~394 pro Gruppe | Subtile UX-Aenderung |

**Empfehlung fuer Solo-Entwickler:**

1. **Phase 1 (0-500 Schueler):** Kein echtes A/B-Testing. Stattdessen: Before/After-Vergleiche. Content aendern und Metriken vorher vs. nachher vergleichen.
2. **Phase 2 (500-2000 Schueler):** Einfaches A/B-Testing fuer grosse Effekte (Variante A vs. B pro Schule). Schule als Cluster verwenden.
3. **Phase 3 (2000+ Schueler):** Echtes randomisiertes A/B-Testing auf Schueler-Ebene.

### 4.3 Einfache A/B-Test-Implementierung

```typescript
// Deterministische Zuweisung basierend auf UserId + TestId
function getVariant(userId: string, testId: string): 'A' | 'B' {
  const hash = createHash('md5')
    .update(`${userId}-${testId}`)
    .digest('hex');
  // Erste 8 Hex-Zeichen als Zahl, Modulo 2
  const num = parseInt(hash.substring(0, 8), 16);
  return num % 2 === 0 ? 'A' : 'B';
}

// Einfacher Signifikanztest (Chi-Quadrat fuer 2x2)
function isSignificant(
  successA: number, totalA: number,
  successB: number, totalB: number,
  alpha: number = 0.05
): { significant: boolean; pValue: number; effectSize: number } {
  const pA = successA / totalA;
  const pB = successB / totalB;
  const pPooled = (successA + successB) / (totalA + totalB);
  const se = Math.sqrt(pPooled * (1 - pPooled) * (1/totalA + 1/totalB));
  const z = (pA - pB) / se;
  // Approximation der p-Value (zweiseitig)
  const pValue = 2 * (1 - normalCDF(Math.abs(z)));
  const effectSize = (pA - pB) / Math.sqrt(pPooled * (1 - pPooled));
  return {
    significant: pValue < alpha,
    pValue,
    effectSize
  };
}
```

---

## 5. Der B1-Sprachfaktor: Messen statt Raten {#5-b1-sprachfaktor}

### 5.1 Forschungslage

Laut Maluch & Sachse (2020) steigt die Lesegeschwindigkeit stark von A1 bis B1, stagniert aber dann -- B1- und B2-Lerner lesen gleich schnell, wobei B2 sich durch besseres Verstaendnis unterscheidet. Das bedeutet:

- Der **Geschwindigkeitsfaktor** ist zwischen B1 und B2 aehnlich
- Der **Verstaendnisfaktor** (Fehlerrate) unterscheidet B1 von B2
- Es gibt ein "Intermediate Plateau" (Gass & Selinker, 2001) -- B1/B2-Lerner fuehlen sich oft festgefahren

### 5.2 Strategie: Dynamischer Sprachfaktor aus echten Daten

Anstatt einen statischen Faktor von 1.5-2.5x zu verwenden, den Faktor aus echten Daten lernen:

```sql
-- Sprachfaktor pro CE und Sprachniveau berechnen
WITH time_by_language AS (
  SELECT
    ce_id,
    language_level,  -- 'B1', 'B2', 'C1', 'C2'
    PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY active_duration_ms) AS median_time
  FROM lesson_events
  WHERE event_type = 'lesson_completed'
    AND active_duration_ms > 60000   -- Min. 1 Minute (kein Skip)
    AND active_duration_ms < 3600000 -- Max. 1 Stunde (kein Vergessen)
  GROUP BY ce_id, language_level
  HAVING COUNT(*) >= 20  -- Mindestens 20 Datenpunkte
)
SELECT
  b1.ce_id,
  b1.median_time AS b1_median_ms,
  c1.median_time AS c1_median_ms,
  ROUND(b1.median_time::numeric / c1.median_time::numeric, 2) AS b1_faktor
FROM time_by_language b1
JOIN time_by_language c1 ON b1.ce_id = c1.ce_id AND c1.language_level = 'C1'
WHERE b1.language_level = 'B1';

-- Beispiel-Ergebnis:
-- ce_id | b1_median_ms | c1_median_ms | b1_faktor
-- CE01  |      1800000 |      1050000 |      1.71
-- CE05  |      2400000 |      1200000 |      2.00
-- CE11  |      1500000 |       900000 |      1.67
```

### 5.3 Erfassung des Sprachniveaus

Das Sprachniveau bei Registrierung erfragen (Selbsteinschaetzung) und optional durch einen kurzen Einstufungstest (10-15 Fragen, Fachvokabular + Textverstaendnis) validieren. Beide Werte speichern und im Laufe der Zeit anpassen, wenn die Plattform genug Daten hat.

### 5.4 Sprachfaktor-Kalibrierung ueber Zeit

```
Monat 1-3:   Statischer Faktor 1.7x (konservative Schaetzung)
Monat 4-6:   Erste echte Daten, Faktor pro CE berechnen
Monat 7-12:  Faktor pro CE + Themengebiet verfeinern
Jahr 2+:     Individueller Faktor pro Schueler (basierend auf bisheriger Performance)
```

---

## 6. DSGVO-konforme Aggregation {#6-dsgvo}

### 6.1 Grundprinzip

Laut European Data Protection Board (EDPB) sind **aggregierte Daten keine personenbezogenen Daten** und fallen nicht unter die DSGVO. Die Strategie:

1. **Individuelle Daten:** Nur mit Einwilligung, nur fuer persoenliches Lernerlebnis, geloescht nach Vertragsende
2. **Aggregierte Daten:** Anonymisiert, fuer Plattformverbesserung, unbegrenzt gespeichert

### 6.2 Anonymisierungs-Regeln

| Regel | Umsetzung |
|-------|-----------|
| **k-Anonymitaet** | Keine Aggregation ausgeben, wenn Gruppe < 5 Personen |
| **Keine Einzelidentifikation** | userId nie in Analyse-Tabellen, nur anonyme session_id |
| **Zeitliche Vergroberung** | Aggregation auf Tages- nicht Sekunden-Ebene fuer Reports |
| **Dimensionale Beschraenkung** | Nie mehr als 2 Dimensionen gleichzeitig filtern (CE + Sprachniveau, aber nicht + Schule + Alter) |
| **Einwilligung** | Datenschutzerklaerung muss erwaehnen: "Anonymisierte Nutzungsdaten zur Verbesserung der Lerninhalte" |

### 6.3 Technische Umsetzung

```typescript
// Zwei getrennte Datenstroeme

// 1. Persoenliche Daten (mit userId, fuer individuelles Lernen)
// → Tabelle: user_progress, user_responses
// → Geloescht bei Account-Loeschung (DSGVO Art. 17)

// 2. Anonyme Aggregation (ohne userId, fuer Plattformverbesserung)
// → Tabelle: item_statistics, content_metrics
// → Wird bei jedem Event inkrementell aktualisiert
// → Kein Rueckschluss auf einzelne Nutzer moeglich

async function recordAnswer(userId: string, questionId: string, correct: boolean, durationMs: number) {
  await db.transaction(async (tx) => {
    // 1. Persoenliche Antwort speichern (mit userId)
    await tx.insert(userResponses).values({
      userId, questionId, correct, durationMs,
      createdAt: new Date()
    });

    // 2. Anonyme Statistik inkrementell updaten (ohne userId)
    await tx
      .update(itemStatistics)
      .set({
        totalAttempts: sql`total_attempts + 1`,
        correctCount: correct ? sql`correct_count + 1` : sql`correct_count`,
        totalDurationMs: sql`total_duration_ms + ${durationMs}`,
        updatedAt: new Date()
      })
      .where(eq(itemStatistics.questionId, questionId));
  });
}
```

---

## 7. Datenbank-Schema fuer Learning Events {#7-schema}

### 7.1 Drizzle ORM Schema

```typescript
import { pgTable, uuid, text, integer, bigint, boolean,
  timestamp, real, jsonb, index } from 'drizzle-orm/pg-core';

// ========================================
// KERN-TABELLEN (persoenliche Daten)
// ========================================

/** Einzelne Antwort eines Schuelers */
export const userResponses = pgTable('user_responses', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  questionId: uuid('question_id').notNull().references(() => questions.id),
  selectedOptionId: uuid('selected_option_id'),
  correct: boolean('correct').notNull(),
  durationMs: integer('duration_ms').notNull(),
  attemptNumber: integer('attempt_number').notNull().default(1),
  hintUsed: boolean('hint_used').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  userIdx: index('ur_user_idx').on(table.userId),
  questionIdx: index('ur_question_idx').on(table.questionId),
  createdIdx: index('ur_created_idx').on(table.createdAt),
}));

/** Lektions-Fortschritt pro Schueler */
export const lessonProgress = pgTable('lesson_progress', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  lessonId: uuid('lesson_id').notNull().references(() => lessons.id),
  status: text('status', { enum: ['started', 'in_progress', 'completed'] }).notNull(),
  startedAt: timestamp('started_at').notNull(),
  completedAt: timestamp('completed_at'),
  activeDurationMs: bigint('active_duration_ms', { mode: 'number' }),
  stepsCompleted: integer('steps_completed').notNull().default(0),
  totalSteps: integer('total_steps').notNull(),
  score: real('score'), // 0.0 - 1.0
}, (table) => ({
  userLessonIdx: index('lp_user_lesson_idx').on(table.userId, table.lessonId),
}));

/** Generisches Learning Event (Heartbeat, Navigation, etc.) */
export const learningEvents = pgTable('learning_events', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  eventType: text('event_type', {
    enum: ['step_viewed', 'hint_used', 'content_rated',
           'session_start', 'session_end', 'heartbeat']
  }).notNull(),
  resourceType: text('resource_type'), // 'lesson', 'question', 'step'
  resourceId: uuid('resource_id'),
  durationMs: integer('duration_ms'),
  metadata: jsonb('metadata'), // Flexible zusaetzliche Daten
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (table) => ({
  userEventIdx: index('le_user_event_idx').on(table.userId, table.eventType),
  createdIdx: index('le_created_idx').on(table.createdAt),
}));

// ========================================
// AGGREGIERTE TABELLEN (anonyme Statistik)
// ========================================

/** Aggregierte Statistik pro Frage (kein userId!) */
export const itemStatistics = pgTable('item_statistics', {
  questionId: uuid('question_id').primaryKey().references(() => questions.id),
  totalAttempts: integer('total_attempts').notNull().default(0),
  correctCount: integer('correct_count').notNull().default(0),
  totalDurationMs: bigint('total_duration_ms', { mode: 'number' }).notNull().default(0),
  skipCount: integer('skip_count').notNull().default(0),
  hintCount: integer('hint_count').notNull().default(0),
  // IRT-Parameter (periodisch berechnet)
  difficultyB: real('difficulty_b'),        // 1PL Schwierigkeit
  discriminationA: real('discrimination_a'), // 2PL Trennschaerfe
  // Qualitaets-Flags
  flaggedForReview: boolean('flagged_for_review').notNull().default(false),
  flagReason: text('flag_reason'),
  lastCalculatedAt: timestamp('last_calculated_at'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/** Verteilung der gewaehlten Optionen pro MC-Frage */
export const optionStatistics = pgTable('option_statistics', {
  id: uuid('id').defaultRandom().primaryKey(),
  questionId: uuid('question_id').notNull().references(() => questions.id),
  optionId: uuid('option_id').notNull(),
  selectedCount: integer('selected_count').notNull().default(0),
  selectedByCorrectStudents: integer('selected_by_correct_students').notNull().default(0),
  // Wenn viele "gute" Schueler diesen Distraktor waehlen → schlechte Frage
}, (table) => ({
  questionOptionIdx: index('os_q_opt_idx').on(table.questionId, table.optionId),
}));

/** Aggregierte Lektions-Metriken (kein userId!) */
export const contentMetrics = pgTable('content_metrics', {
  contentId: uuid('content_id').primaryKey(),
  contentType: text('content_type', { enum: ['lesson', 'step', 'module'] }).notNull(),
  totalStarts: integer('total_starts').notNull().default(0),
  totalCompletions: integer('total_completions').notNull().default(0),
  medianDurationMs: bigint('median_duration_ms', { mode: 'number' }),
  p25DurationMs: bigint('p25_duration_ms', { mode: 'number' }),
  p75DurationMs: bigint('p75_duration_ms', { mode: 'number' }),
  avgRating: real('avg_rating'),
  ratingCount: integer('rating_count').notNull().default(0),
  // Segmentiert nach Sprachniveau
  medianDurationB1: bigint('median_duration_b1', { mode: 'number' }),
  medianDurationB2: bigint('median_duration_b2', { mode: 'number' }),
  medianDurationC1: bigint('median_duration_c1', { mode: 'number' }),
  lastCalculatedAt: timestamp('last_calculated_at'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

/** A/B-Test Konfiguration */
export const abTests = pgTable('ab_tests', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  status: text('status', { enum: ['draft', 'active', 'completed', 'cancelled'] })
    .notNull().default('draft'),
  contentIdA: uuid('content_id_a').notNull(),
  contentIdB: uuid('content_id_b').notNull(),
  primaryMetric: text('primary_metric').notNull(), // z.B. 'correct_rate', 'completion_rate'
  startedAt: timestamp('started_at'),
  endedAt: timestamp('ended_at'),
  resultSummary: jsonb('result_summary'), // { variantA: {...}, variantB: {...}, significant: bool }
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/** A/B-Test Zuweisungen (wird bei Bedarf geloescht) */
export const abTestAssignments = pgTable('ab_test_assignments', {
  id: uuid('id').defaultRandom().primaryKey(),
  testId: uuid('test_id').notNull().references(() => abTests.id),
  userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  variant: text('variant', { enum: ['A', 'B'] }).notNull(),
  assignedAt: timestamp('assigned_at').defaultNow().notNull(),
}, (table) => ({
  testUserIdx: index('abta_test_user_idx').on(table.testId, table.userId),
}));
```

### 7.2 Speicherverbrauch-Schaetzung

| Tabelle | Events/Schueler/Tag | Bei 1000 Schuelern/Monat | Bei 5000 Schuelern/Jahr |
|---------|---------------------|--------------------------|-------------------------|
| userResponses | ~20 | ~600.000 Zeilen | ~36 Mio. Zeilen |
| learningEvents | ~50 | ~1.500.000 Zeilen | ~90 Mio. Zeilen |
| itemStatistics | - | ~5.000 Zeilen (fix) | ~20.000 Zeilen (fix) |
| contentMetrics | - | ~500 Zeilen (fix) | ~2.000 Zeilen (fix) |

**Empfehlung:** learningEvents nach 12 Monaten archivieren (in komprimierte Jahres-Tabelle verschieben). userResponses mindestens 2 Jahre behalten fuer Spaced-Repetition-Analyse. Die aggregierten Tabellen bleiben klein und muessen nie archiviert werden.

---

## 8. Feedback-Loop: Sammeln -> Analysieren -> Anpassen -> Verifizieren {#8-feedback-loop}

### 8.1 Der Kreislauf

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│  SAMMELN    │────→│  ANALYSIEREN │────→│  ANPASSEN   │────→│  VERIFIZIEREN│
│             │     │              │     │             │     │              │
│ Events in   │     │ Naechtlicher │     │ Dashboard   │     │ Metriken     │
│ Echtzeit    │     │ Cron-Job     │     │ zeigt       │     │ nach 2-4     │
│ speichern   │     │ berechnet    │     │ Handlungs-  │     │ Wochen       │
│             │     │ Aggregation  │     │ empfehlung  │     │ vergleichen  │
└─────────────┘     └──────────────┘     └─────────────┘     └──────────────┘
      ↑                                                              │
      └──────────────────────────────────────────────────────────────┘
```

### 8.2 Naechtlicher Analyse-Job (Cron)

```typescript
// cron/nightly-analytics.ts -- Laeuft einmal taeglich um 03:00

async function runNightlyAnalytics() {
  // 1. Item-Schwierigkeit neu berechnen
  await db.execute(sql`
    UPDATE item_statistics SET
      difficulty_b = -LN(
        GREATEST(correct_count::numeric / NULLIF(total_attempts, 0), 0.01) /
        (1 - GREATEST(correct_count::numeric / NULLIF(total_attempts, 0), 0.01))
      ),
      last_calculated_at = NOW()
    WHERE total_attempts >= 30
  `);

  // 2. Flags setzen fuer Review
  await db.execute(sql`
    UPDATE item_statistics SET
      flagged_for_review = TRUE,
      flag_reason = CASE
        WHEN correct_count::numeric / NULLIF(total_attempts, 0) > 0.95
          THEN 'too_easy'
        WHEN correct_count::numeric / NULLIF(total_attempts, 0) < 0.15
          THEN 'too_hard'
        WHEN total_duration_ms::numeric / NULLIF(total_attempts, 0) < 3000
          THEN 'too_fast_suspect_guessing'
        ELSE NULL
      END
    WHERE total_attempts >= 30
      AND (
        correct_count::numeric / NULLIF(total_attempts, 0) > 0.95
        OR correct_count::numeric / NULLIF(total_attempts, 0) < 0.15
        OR total_duration_ms::numeric / NULLIF(total_attempts, 0) < 3000
      )
  `);

  // 3. Content-Metriken aktualisieren (Median, Perzentile)
  await db.execute(sql`
    INSERT INTO content_metrics (content_id, content_type, total_starts, total_completions,
      median_duration_ms, p25_duration_ms, p75_duration_ms, last_calculated_at, updated_at)
    SELECT
      lesson_id AS content_id,
      'lesson' AS content_type,
      COUNT(*) FILTER (WHERE status IN ('started','in_progress','completed')) AS total_starts,
      COUNT(*) FILTER (WHERE status = 'completed') AS total_completions,
      PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY active_duration_ms)
        FILTER (WHERE status = 'completed') AS median_duration_ms,
      PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY active_duration_ms)
        FILTER (WHERE status = 'completed') AS p25_duration_ms,
      PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY active_duration_ms)
        FILTER (WHERE status = 'completed') AS p75_duration_ms,
      NOW(),
      NOW()
    FROM lesson_progress
    GROUP BY lesson_id
    ON CONFLICT (content_id) DO UPDATE SET
      total_starts = EXCLUDED.total_starts,
      total_completions = EXCLUDED.total_completions,
      median_duration_ms = EXCLUDED.median_duration_ms,
      p25_duration_ms = EXCLUDED.p25_duration_ms,
      p75_duration_ms = EXCLUDED.p75_duration_ms,
      last_calculated_at = NOW(),
      updated_at = NOW()
  `);

  // 4. Distraktor-Analyse: Problematische Optionen finden
  const problematicDistractors = await db.execute(sql`
    SELECT
      os.question_id,
      os.option_id,
      os.selected_count,
      os.selected_count::numeric / NULLIF(is2.total_attempts, 0) AS selection_rate
    FROM option_statistics os
    JOIN item_statistics is2 ON is2.question_id = os.question_id
    JOIN question_options qo ON qo.id = os.option_id
    WHERE qo.is_correct = FALSE
      AND is2.total_attempts >= 50
      AND os.selected_count::numeric / NULLIF(is2.total_attempts, 0) > 0.40
    ORDER BY selection_rate DESC
  `);

  // 5. Ergebnisse fuer Admin-Dashboard bereitstellen
  if (problematicDistractors.length > 0) {
    await notifyAdmin('Problematische Distraktoren gefunden', problematicDistractors);
  }
}
```

### 8.3 Admin-Dashboard: Was die Plattform dem Entwickler zeigt

Das Dashboard sollte folgende Bereiche haben:

**1. Content-Gesundheits-Uebersicht:**
- Ampel-System: Gruen (>50 Antworten, keine Flags), Gelb (Flags gesetzt), Rot (kritische Werte)
- Sortierbar nach: Flagged zuerst, niedrigste Richtig-Rate, hoechste Abbruchrate

**2. Fragen-Detail-Ansicht:**
- Richtig-Rate ueber Zeit (Graph)
- Distraktor-Verteilung (Balkendiagramm)
- Durchschnittliche Antwortzeit
- Vergleich B1 vs. C1 Performance
- IRT-Parameter (b, optional a)

**3. Lektions-Uebersicht:**
- Geschaetzte vs. tatsaechliche Dauer (pro Sprachniveau)
- Abschlussrate
- Abbruch-Hotspots (bei welchem Schritt brechen Schueler ab?)

**4. Automatische Empfehlungen:**
```
[!] Frage Q-4821 (CE05, Wundversorgung):
    Richtig-Rate: 12% (n=87) → ZU SCHWER
    Empfehlung: Frage ueberarbeiten oder Erklaerung hinzufuegen

[!] Lektion L-0312 (CE03, Vitalzeichen):
    Geschaetzte Dauer: 15 Min → Tatsaechlich: 38 Min (B1: 52 Min)
    Empfehlung: Lektion aufteilen oder Zeitschaetzung anpassen

[!] Frage Q-1205 (CE01, Hygiene):
    Richtig-Rate: 98% (n=203) → ZU LEICHT
    Empfehlung: Aus Pruefungsvorbereitung entfernen, nur fuer Einstieg nutzen

[!] Distraktor Option C in Q-3387:
    43% aller Schueler waehlen diese falsche Option
    Empfehlung: Formulierung der Option ueberpruefen
```

---

## 9. Implementierungsplan fuer Solo-Entwickler {#9-implementierung}

### 9.1 Phasenplan

#### Phase 0: Grundlegendes Event-Tracking (Woche 1-2)

**Aufwand:** ~3 Tage

- `userResponses` und `lessonProgress` Tabellen anlegen
- Bei jeder Fragen-Antwort und Lektions-Abschluss Events schreiben
- Einfache Verweildauer messen (Zeitstempel bei Step-Wechsel)

```typescript
// Minimaler Event-Tracker (Client-Side)
class LearningTracker {
  private stepStartTime: number = 0;

  onStepEnter(stepId: string) {
    this.stepStartTime = Date.now();
  }

  onStepLeave(stepId: string) {
    const duration = Date.now() - this.stepStartTime;
    // Nur senden wenn zwischen 1 Sekunde und 5 Minuten
    if (duration > 1000 && duration < 300000) {
      fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({
          type: 'step_viewed',
          stepId,
          durationMs: duration,
        }),
      });
    }
  }

  onAnswer(questionId: string, optionId: string, correct: boolean) {
    const duration = Date.now() - this.stepStartTime;
    fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({
          type: 'question_answered',
          questionId,
          optionId,
          correct,
          durationMs: duration,
        }),
    });
  }
}
```

#### Phase 1: Einfache Aggregation (Woche 3-4)

**Aufwand:** ~2 Tage

- `itemStatistics` Tabelle anlegen
- Inkrementelles Update bei jeder Antwort (siehe Abschnitt 6.3)
- SQL-View fuer "Fragen-Gesundheit" erstellen

```sql
CREATE VIEW question_health AS
SELECT
  q.id,
  q.ce_id,
  q.topic,
  is2.total_attempts,
  ROUND(is2.correct_count::numeric / NULLIF(is2.total_attempts, 0), 3) AS correct_rate,
  ROUND(is2.total_duration_ms::numeric / NULLIF(is2.total_attempts, 0)) AS avg_duration_ms,
  is2.difficulty_b,
  is2.flagged_for_review,
  is2.flag_reason,
  CASE
    WHEN is2.total_attempts < 30 THEN 'insufficient_data'
    WHEN is2.correct_count::numeric / NULLIF(is2.total_attempts, 0) > 0.95 THEN 'too_easy'
    WHEN is2.correct_count::numeric / NULLIF(is2.total_attempts, 0) < 0.15 THEN 'too_hard'
    WHEN is2.flagged_for_review THEN 'needs_review'
    ELSE 'healthy'
  END AS health_status
FROM questions q
JOIN item_statistics is2 ON is2.question_id = q.id
ORDER BY
  CASE
    WHEN is2.flagged_for_review THEN 0
    WHEN is2.correct_count::numeric / NULLIF(is2.total_attempts, 0) < 0.15 THEN 1
    WHEN is2.correct_count::numeric / NULLIF(is2.total_attempts, 0) > 0.95 THEN 2
    ELSE 3
  END;
```

#### Phase 2: Schwierigkeits-basierte Adaptivitaet (Monat 2-3)

**Aufwand:** ~5 Tage

- 1PL IRT-Berechnung im naechtlichen Cron-Job
- Schueler-Faehigkeit (theta) schaetzen nach 20+ beantworteten Fragen
- Adaptive Fragenauswahl: Fragen waehlen, deren Schwierigkeit nahe am theta des Schuelers liegt
- Sprachfaktor-Berechnung starten

```typescript
// Adaptive Fragenauswahl
async function selectNextQuestion(
  userId: string,
  ceId: string,
  answeredQuestionIds: string[]
): Promise<Question> {
  const studentTheta = await getStudentAbility(userId, ceId);

  // Fragen auswaehlen, die:
  // 1. Noch nicht beantwortet wurden
  // 2. Schwierigkeit nahe am Schueler-Level
  // 3. Genug Daten fuer stabile Schwierigkeit haben
  const candidates = await db.query.questions.findMany({
    where: and(
      eq(questions.ceId, ceId),
      notInArray(questions.id, answeredQuestionIds),
      gte(itemStatistics.totalAttempts, 30),
    ),
    orderBy: sql`ABS(${itemStatistics.difficultyB} - ${studentTheta})`,
    limit: 5,
  });

  // Aus den 5 naechsten zufaellig eine waehlen (etwas Variation)
  return candidates[Math.floor(Math.random() * candidates.length)];
}
```

#### Phase 3: Admin-Dashboard & Feedback-Loop (Monat 3-4)

**Aufwand:** ~5 Tage

- Admin-Seite mit Fragen-Gesundheit, Content-Metriken, Distraktor-Analyse
- Naechtlicher Cron-Job (siehe Abschnitt 8.2)
- E-Mail-Benachrichtigung bei kritischen Flags
- Einfaches Before/After-Tracking bei Content-Aenderungen

#### Phase 4: A/B-Testing & Verfeinerung (Monat 6+)

**Aufwand:** ~3 Tage

- A/B-Test Tabellen und deterministische Zuweisung
- Signifikanz-Berechnung
- 2PL-IRT wenn genuegend Daten vorhanden

### 9.2 Technische Infrastruktur-Anforderungen

| Komponente | Loesung | Kosten |
|------------|---------|--------|
| Event-Ingestion | Next.js API Route (`/api/events`) | 0 EUR (Teil der App) |
| Datenbank | Bestehende PostgreSQL auf Hetzner | 0 EUR (bereits vorhanden) |
| Cron-Job | `node-cron` in der Next.js App oder Hetzner Cron | 0 EUR |
| Admin-Dashboard | Next.js Seite mit Recharts/Tremor | 0 EUR (Teil der App) |
| Alerting | Einfache E-Mail via Resend/SMTP | ~0-5 EUR/Monat |
| **Gesamt zusaetzlich** | | **~0-5 EUR/Monat** |

### 9.3 Was NICHT gebaut werden muss

- **Kein separater Analytics-Service:** PostgreSQL mit guten Indizes reicht fuer 5000+ Schueler
- **Kein ML-Framework:** Die 1PL-IRT-Berechnung ist reines SQL/TypeScript
- **Kein Echtzeit-Dashboard:** Naechtliche Batch-Verarbeitung reicht voellig
- **Kein xAPI-Server:** Das xAPI-Datenmodell als Inspiration nutzen, aber kein separater LRS noetig
- **Kein Data Warehouse:** Aggregierte Tabellen in der gleichen Datenbank
- **Kein Feature-Flag-System:** Einfache Hash-basierte A/B-Zuweisung reicht

---

## 10. Quellen {#10-quellen}

### Duolingo
- [Birdbrain: Learning how to help you learn](https://blog.duolingo.com/learning-how-to-help-you-learn-introducing-birdbrain/)
- [Half-Life Regression Paper (ACL 2016)](https://research.duolingo.com/papers/settles.acl16.pdf)
- [Half-Life Regression GitHub Repository](https://github.com/duolingo/halflife-regression)
- [How Duolingo uses AI (IEEE Spectrum)](https://spectrum.ieee.org/duolingo)
- [Duolingo Analytics Tools](https://blog.duolingo.com/duolingos-secret-weapon-our-beautiful-and-powerful-analytics-tools/)
- [Growth Model & Meaningful Metrics](https://blog.duolingo.com/growth-model-duolingo/)

### Khan Academy
- [Efficacy Results November 2024](https://blog.khanacademy.org/khan-academy-efficacy-results-november-2024/)
- [Skills to Proficient Measurement](https://blog.khanacademy.org/why-khan-academy-will-be-using-skills-to-proficient-to-measure-learning-outcomes/)
- [Mastery Learning Explained](https://support.khanacademy.org/hc/en-us/articles/5548760867853--How-do-Khan-Academy-s-Mastery-levels-work)

### AMBOSS
- [Question Difficulty System](https://support.amboss.com/hc/en-us/articles/360035679652-Question-difficulty)
- [Session Analysis](https://support.amboss.com/hc/en-us/articles/4852337184148-Session-Analysis)
- [Show Stats Feature](https://support.amboss.com/hc/en-us/articles/360032830911-Show-Stats-Feature)

### Item Response Theory
- [Practical Applications of IRT (Number Analytics)](https://www.numberanalytics.com/blog/practical-applications-item-response-theory-modern-testing)
- [IRT Overview (Assessment Systems)](https://assess.com/what-is-item-response-theory/)
- [IRT Wikipedia](https://en.wikipedia.org/wiki/Item_response_theory)
- [Cold Start Problem + ML + IRT (ScienceDirect)](https://www.sciencedirect.com/science/article/abs/pii/S036013151930096X)

### DSGVO & Learning Analytics
- [For Learning Analytics to Be Sustainable under GDPR (MDPI)](https://www.mdpi.com/2071-1050/13/20/11524)
- [Aggregated Data and GDPR (Protiviti)](https://blog.protiviti.com/2018/02/23/saving-analytical-data-without-violating-gdpr-part-2-aggregation-anonymization/)
- [EDPB: Aggregate Data = Non-Personal Data (IAPP)](https://iapp.org/news/a/aggregating-over-anonymized-data)

### Sprachfaktor & Lesegeschwindigkeit
- [Estimating Reading Time for L2 (Language Leveler)](https://languageleveler.com/blog/estimating-reading-time-second-language-reading)
- [Intermediate Plateau (Gass & Selinker, 2001)](https://medium.com/language-mind/reading-but-not-improving-6222da98691e)

### A/B-Testing & Statistik
- [Sample Size Calculator (Evan Miller)](https://www.evanmiller.org/ab-testing/sample-size.html)
- [Education App Benchmarks 2026 (Business of Apps)](https://www.businessofapps.com/data/education-app-benchmarks/)

### xAPI Standard
- [xAPI Overview](https://xapi.com/overview/)
- [xAPI Ecosystem](https://xapi.com/ecosystem/)

### Adaptive Learning Architektur
- [AI in Adaptive Education: Systematic Review (Springer)](https://link.springer.com/article/10.1007/s44217-025-00908-6)
- [Adaptive Learning Platforms (Coursera)](https://www.coursera.org/articles/adaptive-learning-platforms)
