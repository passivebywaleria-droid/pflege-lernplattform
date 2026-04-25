# Baustein-Trigger: ls-yilmaz-spirale2

**situationId:** ls-yilmaz-spirale2
**ceId:** ce-02
**Erstellt:** 2026-04-23
**Pipelineversion:** v9 (Gold-Standard)

---

## Übersicht

Diese Datei listet alle Baustein-Trigger der Lernsituation: Welche Wissensbausteine werden wann und bei welchem Anlass eingeblendet. Der Sequencer entscheidet die Stufe (1/2/3) anhand des Schüler-Profils — außer wenn hier explizit eine Stufe festgelegt ist.

**Prinzip:** Bausteine erscheinen nur wenn ein Schüler Schwierigkeiten hat oder zusätzliches Wissen benötigt. Sie sind KEINE Pflicht-Steps.

---

## Trigger-Tabelle (chronologisch)

| # | Phase | Trigger-Step | Trigger-Bedingung | Baustein-ID | Stufe |
|---|-------|--------------|-------------------|-------------|-------|
| T01 | informieren | `info-03-prioritaet-setzen` | Antwort D gewählt ("eine Rötung ist harmlos") | `dekubitus-prophylaxe-definition` | Sequencer wählt |
| T02 | informieren | `info-02-akte-risikoprofil` (Karte 2) | Frage zu Adipositas + Dekubitus falsch beantwortet | `dekubitus-prophylaxe-entstehung` | Sequencer wählt |
| T03 | beobachten | `beob-01-wunde-sehen` | ≥ 1 Hotspot-Fehler bei Wundrand/Wundgrund/Mazeration | `dekubitus-prophylaxe-kategorien` | Sequencer wählt |
| T04 | beobachten | `beob-02-kategorien-abgrenzen` | Zuordnung Kategorie I vs. II falsch | `dekubitus-prophylaxe-kategorien` | Stufe 2 oder 3 |
| T05 | beobachten | `beob-04-braden-heute` | Gesamtscore ±2 falsch (Abweichung > 2 Punkte) | `assessments-expertenstandards-screening-assessment` | Sequencer wählt |
| T06 | beobachten | `beob-05-warum-trotz-prophylaxe` | Antwort < 2 Gründe benannt | `dekubitus-prophylaxe-entstehung` | Stufe 2 |
| T07 | beobachten | `beob-06-umgebung-feuchtigkeit` | ≥ 3 Items falsch zugeordnet | `dekubitus-prophylaxe-risikofaktoren` | Sequencer wählt |
| T08 | planen | `plan-01-wundauflage-auswahl` | Antwort A (trockener Verband) oder D (VAC) | `dekubitus-prophylaxe-wundversorgung` | Stufe 2 |
| T09 | planen | `plan-03-135-grad-erklaert` | Schüler stellt Verständnisfrage (Self-rating < 3) | `positionierung-135-grad-schema` | Stufe 2 |
| T10 | planen | `plan-04-donabedian-qualitaet` | ≥ 3 Fehlzuordnungen in Conceptmap | `assessments-expertenstandards-donabedian` | Sequencer wählt |
| T11 | durchfuehren | `durch-03-foto-dokumentation` | ≥ 2 Falsch-Antworten bei Datenschutz-Fragen | `pflegedokumentation-datenschutz` | Stufe 2 |
| T12 | durchfuehren | `durch-04-positionierung-135` | ≥ 2 Kissen-Positionen falsch beschriftet | `positionierung-135-grad-schema` | Stufe 2 oder 3 |
| T13 | durchfuehren | Branching K2 (Autonomie) | Weg B gewählt (Zwang) | `assessments-expertenstandards-patientenautonomie` | Stufe 2 |
| T14 | evaluieren | `eval-01-wundstatus-beurteilen` | Einschätzung A (stagnierend) oder C (Verschlechterung) | `dekubitus-prophylaxe-wundversorgung` | Stufe 2 |
| T15 | evaluieren | `eval-03-reflexion-warum` | Reflexion < 3 Ebenen benannt (nur Patientenfaktoren, kein System) | `assessments-expertenstandards-donabedian` | Stufe 2 |
| T16 | evaluieren | `eval-04-entlassungsplanung` | < 4 Items im Entlassungsplan | `pflegedokumentation-entlassung` | Stufe 2 |
| T17 | dokumentieren | `doku-01-wundbericht-freitext` | < 5 Wundbericht-Elemente | `pflegedokumentation-grundsatz` | Stufe 2 |
| T18 | dokumentieren | `doku-02-spe-qualitaetscheck` | ≥ 3 Fehlzuordnungen in S-P-E-Matrix | `assessments-expertenstandards-donabedian` | Stufe 2 |
| T19 | dokumentieren | `doku-03-expertenstandard-anwenden` | ≥ 2 Kriterien falsch bewertet | `assessments-expertenstandards-dnqp-dekubitus` | Stufe 2 |

---

## Referenzierte Bausteine (alle aus CE-02-Themen)

| Baustein-ID | Thema | Beschreibung |
|-------------|-------|--------------|
| `dekubitus-prophylaxe-definition` | `dekubitus-prophylaxe` | Definition + Mechanismus |
| `dekubitus-prophylaxe-kategorien` | `dekubitus-prophylaxe` | Kategorien I–IV + Fingertest + Deep Tissue Injury |
| `dekubitus-prophylaxe-entstehung` | `dekubitus-prophylaxe` | Entstehungsfaktoren + Druck×Zeit + Scherkräfte |
| `dekubitus-prophylaxe-risikofaktoren` | `dekubitus-prophylaxe` | Endogene + exogene Risikofaktoren + Braden-Score |
| `dekubitus-prophylaxe-wundversorgung` | `dekubitus-prophylaxe` | Wundauflagen-Auswahl + feuchtes Wundmilieu |
| `positionierung-135-grad-schema` | `positionierung` | 135°-Schräge Seitenlage + Kissen-Anordnung + SVG-Bild |
| `assessments-expertenstandards-screening-assessment` | `assessments-expertenstandards` | Braden-Skala + Screening vs. Assessment |
| `assessments-expertenstandards-donabedian` | `assessments-expertenstandards` | S-P-E-Modell Donabedian (1966) |
| `assessments-expertenstandards-dnqp-dekubitus` | `assessments-expertenstandards` | DNQP Expertenstandard Dekubitus 2024 — Struktur-Prozess-Ergebnis-Kriterien |
| `assessments-expertenstandards-patientenautonomie` | `assessments-expertenstandards` | Patientenrecht + Einwilligung + Dokumentation Ablehnung |
| `pflegedokumentation-grundsatz` | `pflegedokumentation` | Was nicht dokumentiert ist gilt als nicht durchgeführt |
| `pflegedokumentation-datenschutz` | `pflegedokumentation` | DSGVO Art. 9 + Foto-Dokumentation + Privatgeräte-Verbot |
| `pflegedokumentation-entlassung` | `pflegedokumentation` | Entlassungsmanagement + Pflegeüberleitung |

---

## Adaptivitäts-Logik

### C1 + Vorerfahrung
- Bausteine erscheinen als Stufe 1 (Denkfragen)
- Trigger-Schwelle höher: erst bei ≥ 3 Fehlern (statt 1-2)
- Fokus-Bausteine: `assessments-expertenstandards-donabedian`, `positionierung-135-grad-schema`

### B2 + etwas Praxis
- Bausteine erscheinen als Stufe 2 (Hinweise)
- Standard-Trigger wie in Tabelle
- Alle Trigger aktiv

### B1 + Anfängerin
- Bausteine erscheinen als Stufe 3 (vollständige Erklärung + B1 + TTS)
- Zusätzliche proaktive Einblendung: `dekubitus-prophylaxe-kategorien` vor Phase 2 (präventiv, nicht erst bei Fehler)
- Alle optionalen Steps aktiviert

---

## Spirale-2-Progression (Vergleich mit Spirale 1)

| Baustein | Spirale 1 | Spirale 2 |
|----------|-----------|-----------|
| `dekubitus-prophylaxe-definition` | Kern-Baustein (immer) | Nur bei Fehler |
| `dekubitus-prophylaxe-kategorien` | Kern (Kategorie I Fokus) | Trigger (Kategorie II Differenzierung) |
| `dekubitus-prophylaxe-entstehung` | Einführend | Vertiefend (Scherkräfte, Neuropathie) |
| `positionierung-135-grad-schema` | Grundlage 30°-Regel | 135° als Wundschutz-Maßnahme |
| `assessments-expertenstandards-donabedian` | Nicht vorhanden | **NEU in Spirale 2** — Qualitätssicherung als Konzept |
| `pflegedokumentation-grundsatz` | Einführend | Vertiefend (Rechtsdimension, Wunddokumentation) |

---

## Qualitätsprüfung Trigger-Liste

- [x] Min 3 Baustein-Trigger: **19 Trigger** ✅
- [x] Kein Trigger referenziert unbekannten Baustein (alle sind aus CE-02-Themen) ✅
- [x] Mindestens 5 verschiedene Bausteine referenziert: **13 Bausteine** ✅
- [x] Keine doppelten Trigger für denselben Step ✅
- [x] B1-Schüler hat immer Zugang zu Stufe 3 (TTS + einfache Sprache) ✅
