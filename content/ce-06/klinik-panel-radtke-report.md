# Adversariales Klinik-Panel — `ls-radtke-brand` (CE-06, LE4)

**Geprüft:** 2026-07-05 · **Rolle:** 4 deterministische Panel-Lenses + semantischer 5. Lens (pflege-validator)
**Grounding:** `specs/ce-06/kernfakten/katastrophe-triage-krise.md` (F-01..F-12, verbatim Pflege heute Kap. 14.4/14.6/14.7/16.4)

## Verdikt: ✅ PASS — 0 HOCH-Befunde

Panel = umfassende Vorlage; Gründerin bleibt menschlicher Backstop.

### Pre-Filter (deterministisch)

| Filter | Ergebnis |
|--------|----------|
| `klinik-panel.ts ce-06 --situation ls-radtke-brand` | ✅ PASS (0/0/0) |
| `pflege-anti-pattern-check.ts ce-06` | ✅ PASS (0 Funde) |
| `step-grounding-check.ts ce-06` (ls-radtke-brand) | ✅ PASS (8/8 gegroundet, 0 dangling) |

---

## Lens-Ergebnisse

### Lens 1 — Arzneimittel/Zahlen-Sicherheit (W1): ✅ PASS
- **Sichtungskategorien** SK I (rot/vital→sofort) / SK II (gelb/schwer→dringlich) / SK III (grün/leicht→nichtdringlich) exakt und belegt (F-07).
- **ABCDE** = Airway/Breathing/Circulation/Disability/Exposure → „Atemweg, Atmung, Kreislauf, Bewusstsein, Entkleiden/Umgebung" korrekt (F-06).
- **MANV/Katastrophe** korrekt definiert (F-01/F-02); **Kleiderbrand** inkl. „Feuerlöscher nicht ins Gesicht" korrekt (F-05).
- **Keine erfundenen Instrumente** (kein ESI, kein Manchester), **keine erfundenen Dosen**.
- 🟡 NIEDRIG `RADTKE-L1-01`: siehe unten (SK IV/schwarz-Auslassung — kein Fehler).

### Lens 2 — Recht & Ethik / Currency: ✅ PASS
- „**Keine Auskunft an Dritte, nur die Einsatzleitung**" korrekt (F-10); Feedback-Framing „Persönlichkeitsrecht, Datenschutz, Fürsorge" ist rechtlich sauber (Presse-Auskunft über Namen/Zustand = Verstoß gegen Schweigepflicht/Datenschutz).
- **Keine veralteten Normen** — kein §1906/1906a, keine FeM-Norm einschlägig (Currency-Registry nicht getriggert).
- **Triage-Ethik korrekt gerahmt:** „für möglichst viele das Beste" / „nach Dringlichkeit, nicht nach Lautstärke" — keine Wertung von Menschenleben. Ethisch heikle SK IV (blau/„ohne Überlebenschance") wird bewusst nicht interaktiv sortiert.

### Lens 3 — DNQP/Standard/Grounding: ✅ PASS
- 8/8 claim-tragende Steps mit `kernfaktId`, alle gegroundet.
- 🟡 NIEDRIG `RADTKE-L3-01`: siehe unten (unbelegte Spezifik „Brandabschnitt schließen").

### Lens 4 — Konsistenz: ✅ PASS
- Patientendaten durchgängig: Radtke, **84**, beginnende Demenz, Schwerhörigkeit beidseits, Rollator — konsistent in patient.ts + allen Phasen.
- Setting (nächtlicher Heimbrand 02:10 → MANV → Sammelplatz) durchgängig.
- **9 stepIds unique**, keine Duplikate; **keine fremde patientId**.
- **Alle 6 Triage-Zuordnungen (erm-02) stimmig** zu den SK-Definitionen:
  bewusstlos/Atemnot→SK I ✓ · arterielle Blutung+Schock→SK I ✓ · großfl. Arm-Verbrennung (stabil)→SK II ✓ · Unterschenkel-Fraktur (stabil)→SK II ✓ · Schürfwunde/gehfähig→SK III ✓ · leichte Rauchreizung (klar, keine Atemnot)→SK III ✓.

### Lens 5 — Semantisch (pflege-validator): ✅ PASS
- **Kein Distraktor-als-Empfehlung:** alle Falsch-Optionen `isCorrect:false` + korrektive `explanation`.
- **Keine Pseudo-Empathie:** die korrekte Krisenintervention (abschirmen, Augenhöhe, mit Namen ansprechen, einfache Orientierung, KIT informieren) ist echte psychische Erste Hilfe (F-10/F-11), keine leere Floskel.
- **Realitätscheck ok:** „ausführliche Sacherklärung der Brandursache an die demente/panische Patientin" ist korrekt als *falsch/überfordernd* markiert (nicht als empathisch verkauft).
- **Step-Typ-Pflichten erfüllt:** MC mit `explanation` je Option + Sandwich im Falsch-Feedback + „du"-Anrede; truefalse eindeutig mit Standardbezug; freetext mit Bewertungskriterien + Musterantwort; reflection mit achtsamem Sandwich-systemPrompt (bei geschilderter eigener Belastung).

---

## Befunde (dedupliziert, literaturbelegt)

### 🟡 NIEDRIG `RADTKE-L3-01` — „Brandabschnitt schließen" ohne Verbatim-Beleg
- **Step:** `ce06-radtke-erk-01` · **kernfaktId:** F-04/F-03/F-09
- **Befund:** Die korrekte Option nennt die konkrete Taktik „Brandabschnitt schließen". Weder in den Kernfakten (F-04 = allgemein „Vorgaben der Einrichtung kennen") noch verbatim im Volltext auffindbar (`grep` „Brandabschnitt"/„Türen schließen" im Brandkontext = 0; „Schließen der Zimmertür" existiert nur im Gewalt-/Aggressions-Kapitel).
- **Einordnung:** Kein sachlicher Fehler — Rauchabschnitts-/Türenschließen ist etablierte deutsche Brandschutz-Doktrin und durch die Rahmung „nach dem Brandschutzplan meiner Einrichtung" (F-04) weitgehend gedeckt. Aber: Gründerin-Regel „keine unbelegte Detailtaktik".
- **Empfehlung:** Verbatim-Beleg beschaffen ODER generalisieren („nach der Brandschutzordnung der Einrichtung vorgehen"). → Beschaffung.

### 🟡 NIEDRIG `RADTKE-L1-01` — SK IV (blau) und schwarz fehlen im interaktiven Step
- **Step:** `ce06-radtke-erm-02` · **kernfaktId:** F-07/F-08
- **Befund:** Der Triage-Step lehrt nur SK I/II/III; SK IV (blau, „ohne Überlebenschance"→palliativ) und schwarz (Tote) stehen nur im Header-Kommentar und in F-07.
- **Einordnung:** Kein Fehler — die 3 gezeigten Kategorien sind exakt/belegt, nichts Falsches behauptet. Auslassung von SK IV/schwarz ist eine bewusste, ethisch saubere Scoping-Entscheidung (kein Sortieren eines lebenden Menschen als „blau/erwartend" oder „tot"). Restrisiko: Schüler hält System evtl. für dreistufig.
- **Empfehlung:** Optional ein Info-Satz in `body`/`begruendung`, dass zusätzlich SK IV (blau) und schwarz existieren — ohne sie interaktiv sortieren zu lassen.

---

## Beschaffung (Gründerin-Regel: nichts erfinden)

| Item | Grund | Quellen-Vorschlag |
|------|-------|-------------------|
| Verbatim-Beleg „Brandabschnitt/Brandschutztür schließen" als Brandfall-Sofortmaßnahme | In `erk-01` verwendet, aber nicht in Kernfakten/Volltext auffindbar | Pflege heute Kap. 14.6/14.7 (Verhalten im Brandfall) prüfen; sonst Brandschutzordnung/DIN 14096 — NICHT erfinden |
