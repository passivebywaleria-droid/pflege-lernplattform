# Baustein-Trigger: ls-lukas-verbruehung

**situationId:** ls-lukas-verbruehung
**Gesamte Trigger:** 10
**Quell-Themen:** `haut`, `saeuglingspflege`, `pflegeprozess`, `pflegedokumentation`, `ernaehrungsgrundlagen`, `mundpflege`

---

## Trigger-Übersicht

| # | Step-ID | Trigger-Bedingung | Baustein-ID | Thema | Stufe |
|---|---------|-------------------|-------------|-------|-------|
| T-01 | `info-03-kinderschutz-erklaeren` | Schüler wählt falschen Pfad A oder B | `kinderschutz-abklaerung` | pflegeprozess / pflegedokumentation | Sequencer wählt 2–3 |
| T-02 | `info-04-u-heft-impfstatus` | Schüler markiert falsches Feld oder übersieht Impfstatus | `kinderschutz-abklaerung` | pflegeprozess | 1 (C1), 2 (B2), 3 (B1) |
| T-03 | `beob-01-kuss-skala-brilliant` | Schüler identifiziert weniger als 3 KUSS-Kategorien korrekt | `schmerzassessment-kinder` | saeuglingspflege | Sequencer wählt 2–3 |
| T-04 | `beob-02-wundinspektion` | Immer (Erklär-Step führt immer zu Baustein) | `verbruehungsgrade` | haut | Sequencer wählt je Profil |
| T-05 | `beob-04-haematome-screening` | Schüler kategorisiert Hämatom falsch (falsch-positiv oder falsch-negativ) | `kinderschutz-abklaerung` | pflegeprozess | 2 |
| T-06 | `beob-05-trinken-mundschleimhaut` | Schüler beantwortet ≥2 Aussagen falsch | `ernaehrungsgrundlagen-kinder` | ernaehrungsgrundlagen | Sequencer wählt 2–3 |
| T-07 | `plan-02-wundversorgung-feuchte` | Immer (Erklär-Step führt immer zu Baustein) | `haut-wundversorgung-feuchte` | haut | Sequencer wählt je Profil |
| T-08 | `plan-04-ethisches-dilemma-kinderschutz` | Schüler wählt Pfad A oder B | `kinderschutz-kommunikation` | pflegeprozess | 2–3 |
| T-09 | `dur-03-komplikation-lukas-schreit` | Schüler wählt Pfad A oder C | `schmerzassessment-kinder` | saeuglingspflege | 3 |
| T-10 | `dur-05-mundpflege-trinkangebot` | Schüler wählt A oder D | `mundpflege-kleinkind` | mundpflege | 2 |
| T-11 | `dur-06-komplikation-vater-laut` | Schüler wählt Pfad A oder C | `kinderschutz-kommunikation` | pflegeprozess | 3 |
| T-12 | `eval-01-wundstatus` | Schüler identifiziert Heilungszeichen nicht korrekt | `haut-wundheilung` | haut | 2 |
| T-13 | `dok-01-wunddoku-freetext` | KI-Feedback erkennt ≤5 von 8 Kriterien | `pflegedokumentation-wunde` | pflegedokumentation | 2–3 |

**Gesamte Trigger: 13** (davon 10 Kern, 3 immer-aktiv)

---

## Baustein-Beschreibungen (Referenz für Generator)

### `kinderschutz-abklaerung`
- **Thema:** pflegeprozess / pflegedokumentation
- **Inhalt:** § 4 KKG: Hinschauen → Einschätzen → Handeln → Dokumentieren. Warum ist Abklärung Standard und kein Verdacht? Wann wird das Jugendamt informiert (§ 8a SGB VIII)? Wie wird das Screening durchgeführt?
- **Bloom:** 3–4
- **Primärquellen:** (§ 4 KKG 2012), (§ 8a SGB VIII), (Bundesarbeitsgemeinschaft Kinderschutz, 2020)

### `kinderschutz-kommunikation`
- **Thema:** pflegeprozess (Kommunikation mit Eltern)
- **Inhalt:** Wie erkläre ich Eltern das Kinderschutz-Screening ohne Vorwurf? Deeskalation bei aufgewühlten Angehörigen. Sandwich-Prinzip in der Kommunikation mit Eltern.
- **Bloom:** 4–5
- **Primärquellen:** [Transfer] — Kommunikationsmodelle (Schulz von Thun), (§ 4 KKG)

### `schmerzassessment-kinder`
- **Thema:** saeuglingspflege
- **Inhalt:** KUSS-Skala für Kinder 0–4 Jahre. 5 Kategorien, Auswertung, Grenzwert für Handlungsbedarf. Warum Selbstauskunft bei Kleinkindern nicht möglich ist.
- **Bloom:** 3
- **Primärquellen:** (Büttner/Finke, 2000: KUSS-Skala, validiert für 0–4 Jahre)

### `verbruehungsgrade`
- **Thema:** haut
- **Inhalt:** Verbrühungsgrade 1 / 2a / 2b / 3. Merkmale, Prognose, Wundversorgung. Wallace-Neunerregel für Erwachsene und Modifikation für Kinder (Lund-Browder).
- **Bloom:** 2–3
- **Primärquellen:** (DGV, 2023), (Wallace, 1951), (Lund/Browder, 1944)

### `haut-wundversorgung-feuchte`
- **Thema:** haut
- **Inhalt:** Feuchte Wundbehandlung — Prinzip, Materialien, Intervalle. Warum feuchtes Milieu die Epithelisierung beschleunigt. Besonderheiten bei Kindern (kein Chlorhexidin, keine alkoholhaltigen Mittel).
- **Bloom:** 3–4
- **Primärquellen:** (DGV-Leitlinie, 2023), (Hoehl/Kullick, 2019)

### `ernaehrungsgrundlagen-kinder`
- **Thema:** ernaehrungsgrundlagen
- **Inhalt:** Flüssigkeitsbedarf Kleinkind (Holliday-Segar-Regel). Erhöhter Bedarf bei Verbrühung. Zeichen der Exsikkose. Trinkanreize für Kleinkinder.
- **Bloom:** 3
- **Primärquellen:** (Holliday/Segar, 1957), (GNPI, 2022)

### `mundpflege-kleinkind`
- **Thema:** mundpflege
- **Inhalt:** Mundpflege bei Kleinkindern. Kontraindikationen (Chlorhexidin unter 2 Jahren). Soor-Risiko bei Trinkschwäche. Praktische Durchführung.
- **Bloom:** 3
- **Primärquellen:** (DGKJ, 2022), (Hoehl/Kullick, 2019)

### `haut-wundheilung`
- **Thema:** haut
- **Inhalt:** Phasen der Wundheilung (Exsudation, Granulation, Epithelisierung). Zeichen regelrechter Heilung vs. Infektionszeichen. Besonderheiten bei thermischen Verletzungen.
- **Bloom:** 3–4
- **Primärquellen:** (DGV, 2023), (Hoehl/Kullick, 2019)

### `pflegedokumentation-wunde`
- **Thema:** pflegedokumentation
- **Inhalt:** Was gehört in eine Wunddokumentation? Standardisierte Dokumentation (Lokalisation, Grad, Fläche, Exsudat, Umgebungshaut, Maßnahmen, Ergebnis). Fotodokumentation — wann und wie? Kinderschutz-spezifische Dokumentation: Was ist sachlich, was ist Interpretation?
- **Bloom:** 5–6
- **Primärquellen:** (Berufsgenossenschaft Gesundheitsdienst und Wohlfahrtspflege BGW, 2022: Wunddokumentation), (§ 4 KKG — Dokumentationspflicht)

---

## Manifest-Eintrag (für content/_manifest.ts)

```ts
{
  situationId: "ls-lukas-verbruehung",
  ceId: "ce-02",
  patient: "Lukas K., 2,5 Jahre",
  spirale: 3,
  themen: ["haut", "ganzkörperpflege", "saeuglingspflege", "ernaehrungsgrundlagen", "mundpflege", "pflegeprozess", "pflegedokumentation"],
  geschaetzteUE: 3,
  status: "situationsplan",
}
```

---

## Adaptivitäts-Zusammenfassung

| Schüler-Typ | Kern-Steps | Optionale Steps | Bausteine | Dauer |
|-------------|-----------|-----------------|-----------|-------|
| C1 + Vorerfahrung | 30 (alle) | 2–3 Vertiefungen | Stufe 1 (Denkfragen) | ~2 UE |
| B2 + etwas Praxis | 30 (alle) | 5–6 Übungen | Stufe 2 (Hinweise) | ~3 UE |
| B1 + Anfängerin | 30 (alle) | 9–11 Grundlagen | Stufe 3 (Vollständige Erklärungen + B1 + TTS + Glossar) | ~4 UE |
