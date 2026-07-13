# Adversariales Klinik-Panel (W6) — CE-06 · ls-novak-erregung

**Datei:** `content/ce-06/situationen/ls-novak-erregung/phases.ts`
**Fall:** Herr Novak, 34 — akute psychotische Erregung (paranoid) auf der Inneren, dabei Fieber 39,2 °C bei Pneumonie
**Erweiterung geprüft:** 3 NEUE Wissens-Tabs — Tab A Eigenschutz/Deeskalation (`erk-01b`), Tab B Erregung ≠ Psychose (`erk-02b`), Tab C Grenzen des Zwangs (`erm-01b`)
**Grounding:** `specs/ce-06/kernfakten/psychische-akutsituationen.md` (F-01..F-08, **15/15 Verbatim-Belege verifiziert**) + `notfallassessment.md`
**Datum:** 2026-07-13

## Verdikt: ✅ PASS (kein K.O.)

| | HOCH | MITTEL | NIEDRIG |
|---|---|---|---|
| Befunde | **0** | 0 | 2 (informativ) |

Kein HOCH-Befund über alle vier deterministischen Lenses + 5. semantischen Lens. Zwei informative NIEDRIG-Anmerkungen (N1/N2) für den Gründerin-Backstop — **nicht blockierend**.

**Skript-Läufe (deterministisch, 0 Drift):**
- `klinik-panel.ts --situation ls-novak-erregung` → 0 Befunde (Zahlen 0 · Recht 0 · DNQP 0 · Konsistenz 0) · exit 0
- `pflege-anti-pattern-check.ts ce-06` → 0 Funde (HOCH 0 · MITTEL 0 · NIEDRIG 0)
- `step-grounding-check.ts ce-06` → ls-novak-erregung: claim-tragend **9** · gegroundet **9** · dangling **0**
- `standards-currency-check.ts ce-06` → 0 Treffer (keine veraltete Norm autoritativ verwendet)
- `zitat-verifizierer.ts --check-file …/psychische-akutsituationen.md` → **15/15** Belege verifiziert

---

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit ✅
Out-of-Range **0** · keine erfundenen Dosen · keine falsch gelehrten Normwerte.

| Aspekt | Ergebnis | Beleg |
|---|---|---|
| Haloperidol als Wirkstoff | OK | Nur Wirkstoffname, KEINE erfundene Dosis/mg/Volumen. F-07 verbatim „Bei Übererregung oder aggressivem Verhalten evtl. Haloperidol i. v." (PH 38.8) |
| Sedierung = ärztliche Anordnung | OK | Durchgängig (ala-01, erm-01b, erm-02); Pflege gibt Sedativa nie eigenmächtig (F-07). Zusatz-Warnung „gerade bei Fieber/Pneumonie riskant" (ala-01) klinisch plausibel, keine Falschaussage |
| Fieber 39,2 °C bei Pneumonie | OK | Physiologisch plausibel; als potenzielle Ursache des Fieberdelirs korrekt eingeordnet (F-01) |
| SpO2 / Blutzucker / Temperatur | OK | Als Mess-Parameter benannt, KEINE erfundenen Zahlenwerte |

## Lens 2 — Recht & Ethik / Currency ✅
`standards-currency-check`: Recht-Lens **0** Funde. Keine veraltete Norm-Fassung.

| Aspekt | Ergebnis | Beleg |
|---|---|---|
| **§ 1831 BGB (aktuelle Fassung)** | OK | Durchgängig § 1831 BGB verwendet — NICHT §1906/§1906a. Betreuungsrechtsreform 01.01.2023 korrekt abgebildet (erm-01b, erm-02, Faustregel, Karteikarte) |
| Quelltext-Abgleich BGB | OK | `leitlinien-volltext/bgb-1831.txt`: „nur mit Genehmigung des Betreuungsgerichts zulässig" + „mit dem Aufschub Gefahr … unverzüglich nachzuholen" — Content paraphrasiert exakt (Gefahr im Verzug → Sofortmaßnahme, dann nachholen) |
| **PsychKG vs. Betreuungsrecht (somatische Station!)** | OK | Korrekt abgegrenzt: auf der Inneren ist die richterliche Grundlage das Betreuungsrecht (§ 1831 BGB); PsychKG/UG greift nur für Unterbringung in **psychiatrischen Einrichtungen**, nicht automatisch auf somatischer Station. Gegroundet F-06 (verbatim „Für Patienten in psychiatrischen Einrichtungen gibt es besondere Regelungen") |
| FeM: Zustimmung / Gefahr im Verzug / richterlich | OK | F-06 verbatim „wenn der Betroffene zugestimmt hat, Gefahr im Verzug ist oder…" |
| Zwang legitimiert / Mindestmaß / nicht aggressiv | OK | F-05 verbatim „muss legitimiert sein und auf das Mindestmaß beschränkt bleiben" |

## Lens 3 — DNQP-/Standard-Grounding ✅
`step-grounding-check`: claim-tragend **9** · gegroundet **9** · dangling **0**. Alle 3 neuen Tabs korrekt kernfaktId-verankert.

| Neuer Tab | kernfaktId | Ergebnis | Beleg |
|---|---|---|---|
| Tab A `erk-01b` Eigenschutz/Deeskalation | F-08/F-02/F-03 | OK | F-08 „Sicheren Abstand wahren", „Sicherstellen, dass ein Fluchtweg", „bei den ersten Anzeichen von Gewaltbereitschaft die Situation verlassen"; F-03 „nie mit mehreren Personen" + „Kollegen … im Hintergrund"; F-02 Deeskalationsziel (PH 16.6) |
| Tab B `erk-02b` Erregung ≠ Psychose | F-01 | OK | F-01 „Bei sehr hohem Fieber: motorische Unruhe, ängstliche Erregung, Sinnestäuschungen" + „hochfieberhafte Zustände … Delir" (PH 12.3). „diagnostic overshadowing" = beschreibender Begriff, Kern-Claim hängt korrekt an F-01 |
| Tab C `erm-01b` Grenzen des Zwangs | F-04/F-05/F-06/F-07 | OK | F-04 „Erst in der letzten Deeskalationsstufe"; F-05 Mindestmaß/legitimiert; F-06 FeM-Rechtsgrundlagen + § 1831 BGB; F-07 Haloperidol ärztlich |

## Lens 4 — Konsistenz (Patient-Daten / Cross-Step) ✅
Doppelte stepIds **0** · fremde patientIds **0**.

| Aspekt | Ergebnis | Beleg |
|---|---|---|
| Fieber 39,2 °C durchgängig | OK | Identisch in erk-02, Tab B (Spektrum + Aufhänger + Karteikarte), SBAR-Übergabe |
| Pneumonie / paranoide Schizophrenie | OK | Durchgängig konsistent (Kontext, erk-02, Tab B, SBAR „bekannte paranoide Schizophrenie") |
| Entfernte Infusion | OK | erstmassnahmen-Kontext „Infusion hat er sich vom Arm gezogen" == SBAR „hat die Infusion entfernt" |
| Kein Item hier-korrekt/dort-falsch | OK | Fixierung/Sedierung/Wahn-Widerlegen konsequent nur als Distraktor bzw. „letzte Stufe unter Recht" — keine widersprüchliche Wertung zwischen Steps |
| Wiederbegegnung → Ríos | OK | `basisBausteinId: "neuro-differenzial"` == `bausteinRef` in `ls-rios-synkope/phases.ts`; Ríos lehrt tatsächlich „erst Blutzucker" → Transfer „erst Körper, dann Psyche" fachlich korrekt |

## Lens 5 — Semantisch (pflege-validator) ✅
`pflege-anti-pattern-check`: **0** Funde. Distraktor-vs-Empfehlung sauber getrennt.

- **Fixieren / Sedieren / Wahn-frontal-widerlegen** erscheinen ausschließlich als FALSCHE Optionen (`isCorrect: false`) mit korrekter Widerlegung — „lehrt über Falsches", nicht „empfiehlt Falsches":
  - „Sofort festhalten" (erk-01) · „das bilden Sie sich ein" (erk-01) · „selbst Beruhigungsmittel geben" (ala-01) · „Reißen Sie sich zusammen, Unsinn" (erm-01 branching) · „Mitspielen/Gegenmittel" (erm-01) · „sofort fixieren, selbst entscheiden" (erm-02) · „niemals fixieren" (erm-02) · „dreht durch … Beruhigung" (SBAR) — alle als Distraktor markiert.
- Fixierung wird nur dort als zulässig gelehrt, wo sie es fachlich IST: „letzte Stufe, nur bei echter Gefahr, legitimiert, Mindestmaß, im Team, eine Person spricht weiter" (erm-02 Korrekt-Antwort + Tab C) — das ist Lehre ÜBER die Rechtsgrenze, keine Handlungsempfehlung im aktuellen Fall.
- **Deeskalation korrekt:** GEFÜHL (Angst) ernst nehmen, Wahninhalt weder bestätigen noch hart widerlegen (Validation, kein Mitspielen) — lehrbuchkonform.
- **Kritische Leitplanke durchgehalten:** „akute Erregung NICHT automatisch psychiatrisch — organische Ursachen zuerst" trägt konsistent durch erk-02, Tab B, Alarmieren, SBAR und Reflexion (organische Spur explizit als offene Ursache benannt, nicht „nur Psychose"). Kein Bruch.
- Keine Pseudo-Empathie („kein Schockmoment"/„Glück gehabt") vorhanden.

### N1 — NIEDRIG (informativ, nicht blockierend)
**Steps:** `erk-02` + Tab B `erk-02b` · **Lens 3/5**
Die praktische Ergänzung „SpO2-Clip und Blutzucker-Stich brauchen Nähe/Berührung — die Messung gelingt oft erst, wenn er dich heranlässt" ist eine **praktisch-plausible Inferenz**, die über den Wortlaut von F-01 hinausgeht (F-01 belegt die organische Ursache, nicht die Mess-Praktik).
**Bewertung:** KEIN Fehler — die Aussage ist pflegerisch selbstevident und medizinisch nicht falsch; sie stellt keinen fachlichen Standard-Claim dar. Verstärkt didaktisch den Kern „Deeskalation und Assessment gehen Hand in Hand". **Gründerin-Option:** so belassen.

### N2 — NIEDRIG (informativ, nicht blockierend)
**Step:** `ce06-novak-ueb-01` (SBAR) · **Lens 4**
Das Alter „34" wird erstmals in der SBAR-Übergabe (Phase 4) genannt und in den früheren Phasen nicht etabliert.
**Bewertung:** KEIN Widerspruch (Attribut kommt nur einmal vor, SBAR nennt Name+Alter regelhaft). Rein narrative Beobachtung. **Gründerin-Option:** optional das Alter bereits im Erkennen-Kontext erwähnen — kosmetisch.

---

## Beschaffung
Keine offenen Belege. Alle Claims der 3 neuen Tabs sind gegroundet und verbatim verifiziert (F-01..F-08, 15/15). § 1831 BGB gegen `leitlinien-volltext/bgb-1831.txt` abgeglichen.

*Panel = umfassende Vorlage. Gründerin bleibt menschlicher Backstop und kann jeden Befund overrulen.*
