# Baustein-Trigger — ls-bgf-projekt-rueckenschule

> Welche Wissensbausteine wann eingeblendet werden.
> Trigger-Logik: Sequencer wertet aus → wählt Stufe (1/2/3) je Schüler-Profil.

---

## Übersicht

| Phase | Trigger-Bedingung | Baustein-ID | Stufe-Regel |
|-------|------------------|-------------|-------------|
| wahrnehmen | Step 2 leer / sehr allgemein | `bgf-arbschg` | Sequencer: C1→S1, B2→S2, B1→S3 |
| wahrnehmen | Step 5 Antwort falsch (nicht ArbSchG § 5) | `bgf-arbschg` | Sequencer wählt |
| wahrnehmen | Step 4 unter 4/6 Zuordnungen richtig | `eigengesundheit-belastungen` | B1→S3, sonst S2 |
| einschaetzen | Step 2 unter 5/8 richtig | `gesundheitsprojekt-bedarfsanalyse` | Sequencer wählt |
| einschaetzen | Step 4 Pfad B gewählt (Carmen ignorieren) | `gesundheitsprojekt-partizipation` | Immer S2 |
| einschaetzen | Step 6 SMART-Ziel nicht SMART | `gesundheitsprojekt-smart-ziele` | B1→S3, sonst S2 |
| informieren | Step 2 Sequencing falsch (>2 Fehler) | `gesundheitsprojekt-pdca` | Sequencer wählt |
| informieren | Step 4 Matching falsch (<3 richtig) | `gesundheitsmodelle-ottawa` | B1→S3, B2→S2 |
| informieren | Step 6 Antwort falsch (Setting nicht erkannt) | `gesundheitsmodelle-setting-ansatz` | Immer S3 |
| beraten | Step 2 Pfad defensiv oder argumentativ | `gesundheitsprojekt-partizipation` | S2 |
| beraten | K1-2 Pfad A oder B gewählt | `gesundheitsprojekt-pdca` | S2 |
| beraten | K2-2 monetären ROI erwartet | `gesundheitsprojekt-evaluation-donabedian` | B1→S3, sonst S2 |
| evaluieren | Step 2 matrix unter 70 % richtig | `gesundheitsprojekt-evaluation-donabedian` | Sequencer wählt |
| evaluieren | Step 3 Antwort falsch (4/8 = zu wenig) | `gesundheitsprojekt-erwartungen-bgf` | S3 |
| evaluieren | Step 5 Freitext ohne SPO-Struktur | `gesundheitsprojekt-evaluation-donabedian` | S1 (Erinnerung) |
| dokumentieren | Step 4 DSGVO-Risiko nicht erkannt | `bgf-dsgvo-mitarbeiterdaten` | S3 |
| dokumentieren | Step 5 Freitext ohne Donabedian | `gesundheitsprojekt-evaluation-donabedian` | S1 |
| dokumentieren | Step 2 Sorting falsch (>3 Fehler) | `gesundheitsprojekt-bericht-aufbau` | S2 |

---

## Mindest-Trigger (K.O.)

Laut Qualitätsregeln: min 3 Baustein-Trigger pro Situation.
Diese Situation hat **17 Trigger über 6 Phasen** — deutlich über Minimum.

---

## Bausteine-Quellen (referenzierte Themen)

| Baustein-ID | Thema | Baustein-Nr. |
|-------------|-------|-------------|
| `bgf-arbschg` | `betriebliche-gesundheitsfoerderung` | Baustein 1 |
| `bgf-dsgvo-mitarbeiterdaten` | `betriebliche-gesundheitsfoerderung` | Baustein 9 |
| `eigengesundheit-belastungen` | `eigengesundheit` | Baustein 2 |
| `gesundheitsprojekt-abgrenzung` | `gesundheitsprojekt` | Baustein 1 |
| `gesundheitsprojekt-bedarfsanalyse` | `gesundheitsprojekt` | Baustein 5 |
| `gesundheitsprojekt-smart-ziele` | `gesundheitsprojekt` | Baustein 7 |
| `gesundheitsprojekt-pdca` | `gesundheitsprojekt` | Baustein 8 |
| `gesundheitsprojekt-partizipation` | `gesundheitsprojekt` | Baustein 14 |
| `gesundheitsprojekt-evaluation-donabedian` | `gesundheitsprojekt` | Baustein 22 |
| `gesundheitsprojekt-erwartungen-bgf` | `gesundheitsprojekt` | Baustein 23 |
| `gesundheitsprojekt-bericht-aufbau` | `gesundheitsprojekt` | Baustein 29 |
| `gesundheitsmodelle-ottawa` | `gesundheitsmodelle` | Baustein 5 |
| `gesundheitsmodelle-setting-ansatz` | `gesundheitsmodelle` | Baustein 6 |

---

## Stufen-Logik (Referenz)

| Schüler-Profil | Standard-Stufe | Ausnahmen |
|----------------|---------------|-----------|
| C1 + Vorerfahrung | Stufe 1 (Denkfrage) | Immer S2/S3 bei Pfad B/C Branching-Entscheidung |
| B2 + etwas Praxis | Stufe 2 (Hinweis) | S3 bei DSGVO-Themen (hohe Relevanz) |
| B1 + Anfängerin | Stufe 3 (Erklärung + Glossar + TTS) | Immer; keine S1 für B1 |

---

## Manifest-Eintrag (für content/_manifest.ts)

```ts
{
  situationId: "ls-bgf-projekt-rueckenschule",
  ceId: "ce-04",
  titel: "BGF-Projekt Rückenschule — Schmerzfrei durch die Schicht",
  spirale: 3,
  situationsTyp: "beratung",
  rollenkontext: "Jenny, Azubi 3. Lehrjahr, leitet BGF-Mini-Projekt",
  themen: [
    "betriebliche-gesundheitsfoerderung",
    "eigengesundheit",
    "gesundheitsprojekt",
    "gesundheitsmodelle",
    "patientenberatung"
  ],
  geschaetzteUE: 5,
  status: "situationsplan",
  ausbildungsdrittel: 3,
}
```
