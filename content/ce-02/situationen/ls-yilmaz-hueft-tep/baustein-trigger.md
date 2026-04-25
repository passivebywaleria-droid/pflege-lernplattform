# Baustein-Trigger — Frau Yilmaz, Hüft-TEP

**situationId:** ls-yilmaz-hueft-tep
**ceId:** ce-02
**Gesamt-Trigger:** 15
**Themen-Abdeckung:** mobilisation, dekubitus-prophylaxe, thrombose-prophylaxe, positionierung, pflegeprozess, pflegedokumentation

---

## Trigger-Logik

**Wann wird ein Baustein eingeblendet?**
1. Schüler macht einen Fehler bei einem Kern-Step (falsche MC-Antwort, falsch sortiert, Lücken leer)
2. Schüler erkennt einen Befund nicht (Hotspot-Miss)
3. Step explizit als "Baustein folgt immer" markiert (Brilliant-Prinzip, Risiko-Zusammenfassung)
4. Schüler-Profil bestimmt die STUFE (1/2/3) — nicht ob ein Baustein erscheint

**Wer entscheidet die Stufe?**
Der Sequencer, basierend auf:
- Sprachprofil (B1/B2/C1)
- Fachprofil (Anfänger/Fortgeschritten)
- Antwortzeit (schnelle richtige Antwort = höhere Stufe)

---

## Trigger-Tabelle (alle 15)

| # | Step-ID | Trigger-Bedingung | Baustein-ID | Wann Stufe 1 | Wann Stufe 2 | Wann Stufe 3 |
|---|---------|-------------------|-------------|-------------|-------------|-------------|
| T1 | `info-04-lagerungsregel-pruefen` | < 2 von 4 Paare richtig | `mobilisation-lagerungsregel-tep` | C1 + Praxis | B2 | B1 |
| T2 | `info-06-sbar-optional` (optional) | > 1 Lücke falsch | `pflegedokumentation-sbar-schema` | C1 | B2 | B1 |
| T3 | `beob-01-haut-brilliant` | Rötung am Steißbein nicht markiert | `dekubitus-prophylaxe-definition` | C1 | B2 | B1 |
| T4 | `beob-01-haut-brilliant` | immer nach Hotspot (Brillant-Prinzip) | `dekubitus-prophylaxe-kategorien` | C1 (Stufe 1) | B2 (Stufe 2) | B1 (Stufe 3) |
| T5 | `beob-04-thrombose-virchow` | < 3 von 5 Faktoren richtig zugeordnet | `thrombose-prophylaxe-virchow-trias` | C1 | B2 | B1 |
| T6 | `beob-06-braden-optional` (optional) | Slider-Werte > 1 Punkt daneben | `dekubitus-prophylaxe-braden-skala` | C1 | B2 | B1 |
| T7 | `plan-02-pesr-formulieren` | > 2 Lücken falsch | `pflegeprozess-pflegeziel-pesr` | C1 | B2 | B1 |
| T8 | `plan-03-massnahmen-sortieren` | > 2 Positionen falsch | `pflegeprozess-massnahmenplanung` | — | B2 | B1 |
| T9 | `dur-01-mobilisation-reihenfolge` | Schritt 5 (Sitzen) übersprungen | `mobilisation-orthostatisch-phasen` | C1 | B2 | B1 |
| T10 | `dur-02-orthostatisch-branching` | Pfad B oder C gewählt (nicht Pfad A) | `mobilisation-orthostatisch-definition` | — | B2 | B1 |
| T11 | `dur-05-lagerung-nach-mobilisation` | Antwort C (90° Seite) oder D gewählt | `positionierung-30-grad` | — | B2 | B1 |
| T12 | `dur-06-umlagerungs-timer` | > 2 Stunden gewählt | `dekubitus-prophylaxe-umlagerungsrhythmus` | C1 | B2 | B1 |
| T13 | `eval-02-folgeplan-morgen` | Analgesie fehlt in Übergabe | `pflegeprozess-evaluation-zirkel` | C1 | B2 | — |
| T14 | `eval-02-folgeplan-morgen` | Hautinspektion fehlt | `dekubitus-prophylaxe-verlaufskontrolle` | — | B2 | B1 |
| T15 | `dok-01-pflegebericht-frei` | Hautbefund ohne Kategorie, NRS fehlt, Orthostase fehlt | `pflegedokumentation-pflegebericht-regeln` | — | B2 | B1 |

---

## Trigger nach Thema

### Thema: mobilisation

| Trigger | Step | Baustein |
|---------|------|---------|
| T1 | info-04 | mobilisation-lagerungsregel-tep |
| T9 | dur-01 | mobilisation-orthostatisch-phasen |
| T10 | dur-02 | mobilisation-orthostatisch-definition |

### Thema: dekubitus-prophylaxe

| Trigger | Step | Baustein |
|---------|------|---------|
| T3 | beob-01 | dekubitus-prophylaxe-definition |
| T4 | beob-01 | dekubitus-prophylaxe-kategorien (immer) |
| T6 | beob-06 | dekubitus-prophylaxe-braden-skala |
| T12 | dur-06 | dekubitus-prophylaxe-umlagerungsrhythmus |
| T14 | eval-02 | dekubitus-prophylaxe-verlaufskontrolle |

### Thema: thrombose-prophylaxe

| Trigger | Step | Baustein |
|---------|------|---------|
| T5 | beob-04 | thrombose-prophylaxe-virchow-trias |

### Thema: positionierung

| Trigger | Step | Baustein |
|---------|------|---------|
| T11 | dur-05 | positionierung-30-grad |

### Thema: pflegeprozess

| Trigger | Step | Baustein |
|---------|------|---------|
| T7 | plan-02 | pflegeprozess-pflegeziel-pesr |
| T8 | plan-03 | pflegeprozess-massnahmenplanung |
| T13 | eval-02 | pflegeprozess-evaluation-zirkel |

### Thema: pflegedokumentation

| Trigger | Step | Baustein |
|---------|------|---------|
| T2 | info-06 | pflegedokumentation-sbar-schema |
| T15 | dok-01 | pflegedokumentation-pflegebericht-regeln |

---

## Adaptivitäts-Profil: Wie viele Bausteine sieht welcher Schüler?

| Schüler-Typ | Erwartete Trigger | Stufe | Zusätzliche Bausteine durch optionale Steps |
|------------|------------------|-------|---------------------------------------------|
| C1 + Vorerfahrung | 2-4 Trigger (nur schwere Stellen) | Stufe 1 (Denkfrage) | 0-1 |
| B2 + etwas Praxis | 5-8 Trigger | Stufe 2 (Hinweis + Kontext) | 2-3 |
| B1 + Anfängerin | 10-13 Trigger | Stufe 3 (Vollständige Erklärung + B1-Text + Glossar + TTS) | 5-8 |

**Pflicht-Trigger (alle Schüler sehen diese immer):**
- T4 (dekubitus-prophylaxe-kategorien): Nach Hotspot beob-01, immer — Brilliant-Prinzip
- T5 (thrombose-prophylaxe-virchow-trias): Bei < 3/5 richtig — hohes Risiko wenn Wissen fehlt

---

## Verknüpfte Karteikarten (Spaced Repetition)

Folgende Karteikarten werden nach der Situation zur FSRS-Wiederholung vorgemerkt:

| Karteikarte | Thema | FSRS-Start |
|-------------|-------|------------|
| Dekubitus Kategorie I: Definition + Sofortmaßnahme | dekubitus-prophylaxe | sofort |
| Virchow-Trias: 3 Säulen benennen | thrombose-prophylaxe | sofort |
| Lagerungsvorschrift Hüft-TEP: 3 Regeln | mobilisation | sofort |
| PESR-Schema: 4 Elemente | pflegeprozess | sofort |
| Orthostatische Hypotonie: Definition + Grenzwert | mobilisation | sofort |
| 30°-Mikrolagerung: Wann und warum | positionierung | +2 Tage |
| Braden-Skala: Grenzwert Risikobereich | dekubitus-prophylaxe | +2 Tage |

---

## Quellen der referenzierten Bausteine

Jeder Baustein in dieser Tabelle existiert bereits in den Themen-Ordnern:

| Baustein-ID | Datei |
|-------------|-------|
| mobilisation-lagerungsregel-tep | `content/ce-02/themen/mobilisation/bausteine-plan.md` |
| mobilisation-orthostatisch-phasen | `content/ce-02/themen/mobilisation/bausteine-plan.md` |
| mobilisation-orthostatisch-definition | `content/ce-02/themen/mobilisation/bausteine-plan.md` |
| dekubitus-prophylaxe-definition | `content/ce-02/themen/dekubitus-prophylaxe/bausteine-plan.md` |
| dekubitus-prophylaxe-kategorien | `content/ce-02/themen/dekubitus-prophylaxe/bausteine-plan.md` |
| dekubitus-prophylaxe-braden-skala | `content/ce-02/themen/dekubitus-prophylaxe/bausteine-plan.md` |
| dekubitus-prophylaxe-umlagerungsrhythmus | `content/ce-02/themen/dekubitus-prophylaxe/bausteine-plan.md` |
| dekubitus-prophylaxe-verlaufskontrolle | `content/ce-02/themen/dekubitus-prophylaxe/bausteine-plan.md` |
| thrombose-prophylaxe-virchow-trias | `content/ce-02/themen/thrombose-prophylaxe/bausteine-plan.md` |
| positionierung-30-grad | `content/ce-02/themen/positionierung/bausteine-plan.md` |
| pflegeprozess-pflegeziel-pesr | `content/ce-02/themen/pflegeprozess/bausteine-plan.md` |
| pflegeprozess-massnahmenplanung | `content/ce-02/themen/pflegeprozess/bausteine-plan.md` |
| pflegeprozess-evaluation-zirkel | `content/ce-02/themen/pflegeprozess/bausteine-plan.md` |
| pflegedokumentation-sbar-schema | `content/ce-02/themen/pflegedokumentation/bausteine-plan.md` |
| pflegedokumentation-pflegebericht-regeln | `content/ce-02/themen/pflegedokumentation/bausteine-plan.md` |
