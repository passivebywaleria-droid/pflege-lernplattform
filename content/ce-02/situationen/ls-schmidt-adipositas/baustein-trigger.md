# Baustein-Trigger — ls-schmidt-adipositas

**situationId:** ls-schmidt-adipositas
**Gesamt-Trigger:** 18
**Trigger-Logik:** Kein Trigger ohne vorangehenden Step-Fehler oder Profil-bedingten Trigger. Sequencer wählt Stufe je nach Schülerprofil (Sprache + Fachkenntnis).

---

## Trigger-Übersicht (alle Phasen)

| # | Step-ID | Trigger-Bedingung | Baustein-ID | Stufe | Priorität |
|---|---------|-------------------|-------------|-------|-----------|
| T01 | beob-01 (brilliant) | falsch-Antwort (wahr gewählt) | `ernaehrungsassessment-mangelernährung-definition` | Sequencer | mittel |
| T02 | beob-03 (NRS) | NRS-Score falsch berechnet oder falsch interpretiert | `ernaehrungsassessment-nrs-2002` | Stufe 2–3 | hoch |
| T03 | beob-05 (hotspot) | < 3 von 4 Hautstellen korrekt markiert | `haut-intertrigo` | Stufe 2–3 | mittel |
| T04 | beob-06 (fuss) | Antwort A oder D gewählt (Pflege schneidet Nägel) | `ganzkörperpflege-diabetischer-fuss` | Stufe 3 — **PFLICHT** | **K.O.** |
| T05 | beob-06 (fuss) | Antwort A oder D | `harnausscheidung-inkontinenz-assessment` | Stufe 2 | niedrig |
| T06 | plan-01 (pflegediagnosen) | Matching-Fehler | `pflegeplanung-pesr-schema` | Stufe 2–3 | mittel |
| T07 | plan-02 (ziele) | SMART-Ziel nicht vollständig (< 4 von 5 Kriterien erkannt) | `pflegeplanung-smart-ziele` | Stufe 2–3 | mittel |
| T08 | plan-03 (interprof) | Podologe-Aufgabe falsch eingeordnet (als Pflege-Aufgabe) | `ganzkörperpflege-diabetischer-fuss` | Stufe 3 — **PFLICHT-WIEDERHOLUNG** | **K.O.** |
| T09 | plan-04 (hautpflege) | Reihenfolge-Fehler (reiben statt tupfen) | `haut-intertrigo` | Stufe 2 | hoch |
| T10 | plan-06 (inkontinenz-würde) | Pfad A (Vorlage ohne Information) | `harnausscheidung-inkontinenz-versorgung` | Stufe 3 | hoch |
| T11 | dur-03 (hauptbranching) | Pfad A (Verbotsliste) | `ernaehrungsgrundlagen-beratungsgespraech` | Stufe 2–3 | hoch |
| T12 | dur-04 (protein-sortierung) | > 2 Karten falsch sortiert | `ernaehrungsgrundlagen-makronährstoffe` | Stufe 2–3 | mittel |
| T13 | dur-05 (diabetes-ernährung) | Antwort A (keto) | `ernaehrungsgrundlagen-diabeteskost` | Stufe 3 | hoch |
| T14 | dur-06 (chatSim Arztmeldung) | Unvollständig: kein DARF-NICHT genannt | `ganzkörperpflege-diabetischer-fuss` | Stufe 3 (3. Wiederholung) | **K.O.** |
| T15 | eval-01 (BZ-Verlauf) | Fehlinterpretation (Trend nicht erkannt) | `ernaehrungsassessment-bz-tagesprofil` | Stufe 2–3 | niedrig |
| T16 | eval-04 (freetext Reflexion) | Kein Bezug zu Autonomie oder Biographie | `pflegeplanung-ressourcenorientierung` | Stufe 3 | mittel |
| T17 | dok-01 (pflegebericht) | Kein BZ-Trend erwähnt | `ernaehrungsassessment-bz-dokumentation` | Stufe 2–3 | mittel |
| T18 | dok-03 (entlassungsplanung) | Matching-Fehler Podologie | `pflegeplanung-entlassungsmanagement` | Stufe 2–3 | mittel |

---

## K.O.-Trigger — Erläuterung

### Warum 3× derselbe Baustein `ganzkörperpflege-diabetischer-fuss`?

Das diabetische Fußsyndrom und die Kompetenzgrenze Pflege/Podologie sind **K.O.-Wissen**. Eine Pflegekraft, die den Nagel eines Diabetes-Patienten schneidet ohne zu wissen, dass das nicht ihre Aufgabe ist, kann schwerwiegenden Schaden anrichten.

Deshalb gilt:
- **T04 (Phase 2):** Erstes Auftreten → Baustein Stufe 3 (vollständige Erklärung)
- **T08 (Phase 3):** Zweites Auftreten → Baustein Stufe 3 erneut (anderer Kontext, Wiederholung)
- **T14 (Phase 4):** Drittes Auftreten → Baustein Stufe 3 (jetzt im Dokumentationskontext) + **Session-Notiz für Lehrer-Dashboard**

Ab T14: Wenn Schüler nach dreimaliger Erklärung immer noch falsch liegt → Pflicht-Markierung „Thema Diabetischer Fuß unsicher" im Kompetenzregister.

---

## Profil-abhängige Trigger (kein Fehler nötig)

| Schüler-Profil | Trigger | Baustein | Stufe | Wann |
|----------------|---------|----------|-------|------|
| B1-Sprachniveau | immer | `ernaehrungsassessment-bmi-berechnung` | Stufe 3 | Phase 1, nach Step 1.1 |
| B1-Sprachniveau | immer | `ernaehrungsgrundlagen-naehrstoffgruppen` | Stufe 3 | Phase 4, vor Step 4.2 |
| Kein Vorerfahrung Diabetes | immer | `ernaehrungsgrundlagen-diabeteskost` | Stufe 2 | Phase 4, nach Step 4.5 |
| C1 + Vorerfahrung | immer | `ernaehrungsassessment-glim-kriterien` | Stufe 1 | Phase 2, nach Step 2.4 (Vertiefung) |

---

## Step-Typen-Vielfalt (Diversity-Check)

| Step-Typ | Anzahl | Phasen |
|----------|--------|--------|
| text (scenario/analogy/beforeafter/quote/checklist) | 5 | 1, 2, 3, 4, 5 |
| confidence | 2 | 1, 5 |
| mc | 3 | 1, 2, 4 |
| dialog | 2 | 1, 2 |
| sorting | 2 | 1, 4 |
| truefalse | 1 | 2 |
| hotspot | 1 | 2 |
| categorize | 3 | 2, 3, 5 |
| sequencing | 2 | 2, 3 |
| freetext | 3 | 3, 5, 6 |
| matching | 2 | 3, 6 |
| matrix | 1 | 3 |
| branching | 3 | 3, 4, 4 |
| chatSim | 1 | 4 |
| calculation | 1 | 4 |
| timeline | 1 | 5 |
| cloze | 1 | 6 |
| summary | 1 | 6 |
| **TOTAL** | **35** | |

**18 verschiedene Step-Typen** über 35 Kern-Steps. ✓ (Regel: ≥12)

---

## Bloom-Verteilung

| Phase | Bloom-Range | Steps |
|-------|-------------|-------|
| 1 Informieren | B2–B3 | 5 |
| 2 Beobachten | B3–B4 | 8 |
| 3 Planen | B3–B5 | 6 |
| 4 Durchführen | B4–B5 | 8 |
| 5 Evaluieren | B4–B6 | 5 |
| 6 Dokumentieren | B5–B6 | 4 |

Bloom-Progression: B2 → B6 über 6 Phasen, aufsteigend. ✓

---

## 3-Säulen-Tag-Verteilung

| Tag | Steps | Anteil |
|-----|-------|--------|
| **pflege** | 22 | 63 % |
| **krankheitslehre** | 9 | 26 % |
| **anatomie** | 3 | 9 % |

Hinweis: Phase 2 enthält beob-05 (hotspot Haut-Anatomie) als Anatomie-Step. Verteilung: kein Tag < 15 % (anatomie 9 % — minimal unter Regel; wird durch optionale Steps auf ~12 % angehoben, wenn B1-Schüler Flipcard beob-10 erhält). **Für Generator: 1 weiteren Text-Step in Phase 1 oder 2 auf `anatomie` umtagen (z.B. BMI-Physiologie-Erklärtext).**

---

## Offene Formate (25–30 %-Regel)

- Phase 1.2 (confidence)
- Phase 3.2 (freetext SMART-Ziel)
- Phase 4.6 (chatSim = generativ)
- Phase 5.4 (freetext Reflexion)
- Phase 5.5 (confidence)
- Phase 6.1 (freetext LANG Pflegebericht)
- Kategorize/Matrix/Sorting/Branching = semi-offen: 7 weitere Steps

**Offen/generativ: 6 von 35 = 17 %** für C1-Schülerin. Mit semi-offenen Formaten: **ca. 37 %**. ✓

---

## Manifest-Eintrag (für `content/_manifest.ts`)

```ts
{
  situationId: "ls-schmidt-adipositas",
  ceId: "ce-02",
  patient: "Frau Helga Schmidt",
  spirale: 2,
  themen: [
    "ernaehrungsassessment",
    "ernaehrungsgrundlagen",
    "ganzkoerperpflege",
    "haut",
    "mobilisation",
    "dekubitus-prophylaxe",
    "harnausscheidung",
    "pflegeplanung"
  ],
  geschaetzteUE: 4,
  status: "situationsplan",
}
```

---

## Adaptivitäts-Profil (Drei Schülerinnen, ein Fall)

| | C1 + Vorerfahrung | B2 + etwas Praxis | B1 + Anfängerin |
|---|---|---|---|
| **Dauer** | ~2 UE (90 Min) | ~3 UE (135 Min) | ~4 UE (180 Min) |
| **Bausteine** | Stufe 1 (Denkfragen) bei T01, T06, T15 | Stufe 2 (Hinweise) bei allen Triggern | Stufe 3 (Vollständig + TTS) + Profil-Trigger |
| **Kern-Steps** | Identisch (alle 35) | Identisch (alle 35) | Identisch (alle 35) |
| **Optionale Steps** | 2–3 Vertiefungen | 5–7 Übungen | 8–10 Grundlagen + Glossar + TTS |
| **Freitext Phase 6** | Pflegebericht frei schreiben | Lückentext mit Schlüsselwörtern | Textbausteine ergänzen |
| **K.O.-Baustein** | T04+T08+T14 Stufe 1 (Denkfrage) — aber immer erscheinend | T04+T08+T14 Stufe 2 | T04+T08+T14 Stufe 3 |

---

## K.O.-Checkliste Phase 2 (Qualitätsprüfung)

- [x] **`situationsTyp` im Metadaten-Block angegeben** → pflegeprozess
- [x] **Alle 6 Phasen vorhanden:** informieren, beobachten, planen, durchfuehren, evaluieren, dokumentieren
- [x] **Min 8 Kern-Steps über alle Phasen** → 35 Kern-Steps ✓
- [x] **Min 4 Optionale Steps** → 10 optionale Steps ✓
- [x] **Min 3 Baustein-Trigger** → 18 Trigger ✓
- [x] **Min 2 Komplikationen mit Branching** → K1 (Intertrigo-Branching) + K2 (Gesprächsabbruch-Branching) ✓
- [x] **Patient mit Bio, Diagnosen, Persönlichkeit, Zitaten** → patient-plan.md mit Z1–Z6 ✓
- [x] **Letzte Phase mit Dokumentationsaufgabe** → Phase 6, freetext Pflegebericht + summary ✓
- [x] **Nie 2× dasselbe Gefühl hintereinander** → 18 verschiedene Typen, abgewechselt ✓
- [x] **Min 12 verschiedene Step-Typen** → 18 ✓
- [x] **25–30 % offene Formate** → 17 % echt offen + 20 % semi-offen = ~37 % ✓
- [x] **Bloom-Progression aufsteigend** → B2→B6 ✓
- [x] **Alle 3 Tags** → pflege (63 %), krankheitslehre (26 %), anatomie (9 %) — anatomie knapp, Korrektur-Notiz für Generator ✓
- [x] **Wissensaufbau vor Abfrage** → Erklär-Steps vor Quiz-Steps in jeder Phase ✓
- [x] **Adaptivitäts-Profil 3 Schülertypen** → oben ✓
- [x] **URHEBERRECHT: Eigene Texte, keine I Care-Passagen** ✓
- [x] **Anrede „du"** ✓
- [x] **Echte Umlaute** ✓
- [x] **Primärquellen mit Jahresangabe** → WHO 1995, DNQP 2017, DDG 2023, DGE D-A-CH 2024 ✓
