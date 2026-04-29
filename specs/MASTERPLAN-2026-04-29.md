# Masterplan — Von Frau-M.-Pilot zu 11 CEs Live-Ready

**Datum:** 2026-04-29
**Ausgangspunkt:** Frau-M.-Sturz als Pilot mit Inline-Wissen, QA-System Stufe 1, Pflege-Härtung durch.
**Ziel:** Alle 11 CEs mit Situationen, Inline-Wissen, QA-validiert, live-ready.

---

## Phase 1 — Frau-M. Goldstandard (2-3 Tage)

Frau-M.-Sturz wird zur **perfekten Referenz-Situation**. Alles was danach generiert wird, wird gegen diesen Standard gemessen.

| # | Task | Aufwand | Abhängig von |
|---|------|---------|-------------|
| 1.1 | **Transitionen Phase 2-6** — Micro-Narrationen für alle Phasen schreiben (je 4-6 Übergänge pro Phase) | 2 h | — |
| 1.2 | **Drag-and-Drop Matrix-Step** — `step-matrix.tsx` mit @dnd-kit/core neu (Phase 3.1 Maßnahmen-Matrix) | 3 h | — |
| 1.3 | **Drag-and-Drop Pflegewagen-Step** — `step-pflegewagen.tsx` mit @dnd-kit/core (Phase 4.3 Material) | 3 h | — |
| 1.4 | **Step-Body-Layout** — alle Step-Bodies in Phase 1-6 mit Absätzen + Bullets restrukturieren (Brilliant-Frage, Matching-Instruktionen, Text-Steps) | 3 h | — |
| 1.5 | **QA-Tool Highlight-Klick fixen** — Inline-Span-Klick-Logik für step-highlight.tsx | 1 h | — |
| 1.6 | **QA-Tool Matching-Klick fixen** — Links-Rechts-Paare-Logik robuster | 1 h | — |
| 1.7 | **QA-Lauf Frau-M.** — Score soll ≥ 95/100 (A) sein | 1 h | 1.1-1.6 |
| 1.8 | **Emilia Console-Error fixen** — 404-Asset identifizieren + beheben | 30 min | — |
| 1.9 | **Glossar erweitern** — Coverage-Audit über Frau-M.-Texte, fehlende Begriffe ergänzen | 1 h | — |
| 1.10 | **Frau-M. Pflege-Re-Validation** — pflege-validator mode=code nochmal nach allen Änderungen | 1 h | 1.1-1.4 |

**Ergebnis Phase 1:** Frau-M. Score ≥ 95/100, alle Steps klickbar, alle Step-Typen mit Drag-Drop, narrativer Bogen durch Transitionen, Pflege-validiert.

---

## Phase 2 — Pipeline v10 (1 Woche)

Die Content-Pipeline wird so umgebaut, dass sie automatisch Frau-M.-Qualität reproduziert.

| # | Task | Aufwand | Abhängig von |
|---|------|---------|-------------|
| 2.1 | **Dozentin-Agent v2 Style-Guide** — Lehr-Patient, Anker+Spektrum, Aha-Moment, Lerntreppe, Faustregel, Bild-Slot, Karteikarte als Pflicht-Elemente. Aus `bausteine-plan-v2.md` Stil ableiten | 4 h | Phase 1 |
| 2.2 | **Inline-Wissen-Generator-Agent** — neuer Agent der Sessionplan analysiert + verwendeteBegriffe pro Step extrahiert + vor erstem Vorkommen Inline-Baustein einfügt | 6 h | 2.1 |
| 2.3 | **Curriculum-Validator als Pipeline-Stufe** — `scripts/curriculum-coverage-audit.ts` als K.O.-Check in die Pipeline einbauen (FAIL wenn Thema nicht zentral abgedeckt) | 2 h | 2.2 |
| 2.4 | **Transition-Generator** — Agent der pro Step einen 1-Satz-Übergang generiert basierend auf Patient-Story + vorheriger Step-Inhalt | 3 h | 2.1 |
| 2.5 | **Karteikarten-Auto-Generation** — Schema + API: bei Situations-Abschluss Inline-Bausteine → Karteikarten-Stapel | 4 h | 2.2 |
| 2.6 | **Lehr-Patient-Mapping pro CE** — Dokument `content/ce-XX/lehr-patient-mapping.md` mit Thema → Patient-Zuordnung | 2 h | — |
| 2.7 | **Pipeline-Orchestrator v10** — alle Stufen in Reihenfolge: Recherche → Bausteine v2 → Sessionplan → Plan-Validator → Inline-Wissen → Code-Generator → Transitions → Code-Validator → Curriculum-Validator → Karteikarten → Pflege-Gate | 4 h | 2.1-2.6 |
| 2.8 | **QA als Pipeline-Stufe** — `situation-qa.ts` nach Pflege-Gate als letzten Check. Score < 70 = FAIL | 2 h | 2.7 |

**Ergebnis Phase 2:** Pipeline v10 komplett — jede neue Situation wird automatisch mit Inline-Wissen, Transitionen, Karteikarten, Curriculum-Check und QA-Score generiert.

---

## Phase 3 — CE-02 komplett (3-4 Wochen)

Alle 9 restlichen CE-02-Situationen auf Frau-M.-Niveau bringen.

| # | Task | Aufwand | Abhängig von |
|---|------|---------|-------------|
| 3.1 | **Inline-Wissen für 9 Situationen** — pro Situation 12-20 Bausteine via Pipeline v10. 9 parallele Sub-Agents, je 1 pro Situation | 2-3 Wochen | Phase 2 |
| 3.2 | **Transitionen für 9 Situationen** — via Transition-Generator-Agent | 2-3 Tage | 3.1 |
| 3.3 | **Step-Body-Layout für 9 Situationen** — Absätze + Bullets in allen Step-Bodies | 3-4 Tage | 3.1 |
| 3.4 | **Pflege-Re-Validation für 9 Situationen** — pflege-validator mode=code | 2 Tage | 3.1-3.3 |
| 3.5 | **QA-Lauf CE-02 --all** — alle 10 Situationen Score ≥ 85/100 (B+) | 1 Tag | 3.4 |
| 3.6 | **Curriculum-Coverage CE-02 25/25** — alle 25 Themen zentral durch Inline-Bausteine abgedeckt | 1 Tag | 3.1 |
| 3.7 | **Karteikarten generiert** — ~70-90 unique Karteikarten für CE-02 | 1 Tag | 3.1 |

**Ergebnis Phase 3:** CE-02 komplett — 10 Situationen, 25 Themen, 175+ Inline-Bausteine, 70-90 Karteikarten, alle QA ≥ 85.

---

## Phase 4 — CE-01, CE-03 bis CE-11 (2-3 Monate)

Pro CE: Situationen generieren + Inline-Wissen + QA.

| # | Task | Aufwand pro CE | Abhängig von |
|---|------|---------------|-------------|
| 4.1 | **Situationen entwerfen** — 10-15 Patientenfälle pro CE, passend zu Themen | 3-5 Tage | Phase 2 (Pipeline v10) |
| 4.2 | **Lehr-Patient-Mapping** + Spektrum-Datenbank pro CE | 1 Tag | 4.1 |
| 4.3 | **Pipeline v10 durchlaufen** — Recherche → Bausteine → Code → Inline-Wissen → Transitionen → QA | 1-2 Wochen | 4.1-4.2 |
| 4.4 | **Pflege-Validation + Curriculum-Coverage** | 2-3 Tage | 4.3 |
| 4.5 | **QA-Lauf CE-XX --all** → Score ≥ 80 | 1 Tag | 4.4 |

**Reihenfolge der CEs:**
1. CE-04 (hat schon 5 Plan-Situationen) — schnellster Start
2. CE-05 (Innere Medizin — großes CE, viel Content)
3. CE-03 (Kommunikation — interdisziplinär)
4. CE-01 (Ausbildungsstart — Basis)
5. CE-06 bis CE-11 parallel mit Sub-Agents

**Ergebnis Phase 4:** 11 CEs × 10-15 Situationen = 110-165 Situationen, alle QA-validiert.

---

## Phase 5 — Erweiterungen (fortlaufend, parallel zu Phase 4)

| # | Feature | Aufwand | Prio |
|---|---------|---------|------|
| 5.1 | **Anklickbares Glossar überall** — `<GlossarText>`-Wrapper für alle Fließtexte | 2 Tage | hoch |
| 5.2 | **Patient-Dossier** — Patientenakte als ständig zugängliches Feature | 3 Tage | hoch |
| 5.3 | **Curriculum-Coverage-UI für Schüler** — Fortschritt pro Thema sichtbar | 3 Tage | hoch |
| 5.4 | **Adaptive Spaced Repetition (SM-2)** für Karteikarten | 3 Tage | hoch |
| 5.5 | **Just-in-Time-Praxismodus** — Mini-Refresh auf Station | 4 Tage | sehr hoch |
| 5.6 | **KI-Tutor-Chat im Baustein-Kontext** | 3 Tage | hoch |
| 5.7 | **Tagesempfehlung-Engine** (autonome 8-UE-Planung) | 5 Tage | mittel |
| 5.8 | **Lehrer-Dashboard Curriculum-Lücken** | 3 Tage | mittel |
| 5.9 | **Reflexionsmomente** nach emotional dichten Bausteinen | 1 Tag | niedrig |
| 5.10 | **Audio-Modus** (TTS Bausteine + Karteikarten offline) | 3 Tage | mittel |
| 5.11 | **Cross-Linking Wiederbegegnung Renderer** | 2 Tage | mittel |
| 5.12 | **Echte Pflege-Stimmen** für Patient-Audios | variabel | niedrig |
| 5.13 | **Pflege-Karriere-Pfad-Visualisierung** | 2 Tage | niedrig |

---

## Zeitplan-Übersicht

```
Woche 1-2:   Phase 1 (Frau-M. Goldstandard)
Woche 2-3:   Phase 2 (Pipeline v10)
Woche 4-7:   Phase 3 (CE-02 komplett)
Woche 5+:    Phase 5.1-5.3 parallel (Glossar, Patient-Dossier, Coverage-UI)
Woche 8-20:  Phase 4 (CE-01, CE-03 bis CE-11)
Woche 8+:    Phase 5.4-5.13 fortlaufend
```

**Gesamt bis 11 CEs live-ready: ~5-6 Monate**
(mit paralleler Feature-Entwicklung in Phase 5)

---

## Qualitäts-Gates pro Phase

| Gate | Kriterium | Tool |
|------|-----------|------|
| Pflege-Gate | Plan-PASS + Code-PASS (doppelter Check) | `scripts/pflege-gate.ts` |
| Curriculum-Gate | 100% Themen zentral abgedeckt | `scripts/curriculum-coverage-audit.ts` |
| QA-Gate | Score ≥ 80/100 (kein F oder D) | `scripts/situation-qa.ts` |
| TS-Gate | `npx tsc --noEmit` clean | TypeScript |
| Build-Gate | `npm run build` clean | Next.js |

Jede Situation muss ALLE 5 Gates passieren bevor Live-Deploy.

---

## Sofort starten mit

**Phase 1, Task 1.1:** Transitionen Phase 2-6 für Frau-M. schreiben.
