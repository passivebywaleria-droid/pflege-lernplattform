# Pflege-Review (B1-Re-Validierung, 5. Lens): ls-rios-synkope

**Geprüft:** 2026-07-15
**Datei:** content/ce-06/situationen/ls-rios-synkope/phases.ts (773 Zeilen, 5 Phasen)
**Auftrag:** Semantische Re-Validierung NUR der B1-Felder nach reiner Sprach-Sanierung (C1 war bereits PASS, C1 = Referenz-Wahrheit).
**Step-Anzahl:** 11 (7 MC, 1 Branching, 2 inlineWissen, 1 Reflection)
**Grounding-Abgleich:** specs/ce-06/kernfakten/neurologische-akutsituationen.md (F-01 bis F-13)

## Prüfumfang

Jedes B1-Feld gegen sein C1-Pendant gelesen: kontextB1, contentB1 (title/body/glossarBegriffe),
explanationB1, feedbackB1, storyAufhaengerB1, kerntextB1, faustregelB1, spektrum[].kurzbeschreibungB1,
karteikarte[vorderseiteB1/rueckseiteB1], reflection contentB1.

## Findings

Keine HOCH. Keine MITTEL.

### F-01 (NIEDRIG): Status-epilepticus-Definition in B1 auf eine der zwei Handlungsschwellen verkürzt
- **Stelle:** ce06-rios-ref-00d-krampfanfall, explanationB1 Option 1 (Zeile 713–714)
- **Problem:** C1 nennt beide Status-Kriterien ("länger als 5 Minuten ODER Anfall auf Anfall ohne Erholung", deckt F-12). B1 nennt nur die 5-Minuten-Schwelle ("Hört der Anfall nach 5 Minuten nicht auf …"). Der zweite Fall (Anfallsserie ohne zwischenzeitliche Erholung) fehlt in der B1-Variante.
- **Standard-Verweis:** F-12 / ILAE 2015 (Trinka et al.) — Status epilepticus = ≥5 min ODER rezidivierende Anfälle ohne Erholung.
- **Bewertung:** Die genannte 5-Min-Schwelle ist korrekt und die primäre Handlungsschwelle; nichts Falsches wird gelehrt, nur weniger Vollständiges. Für B1 vertretbare Vereinfachung — der gefährliche Verlauf (langer Anfall → sofort Arzt) bleibt korrekt vermittelt. Keine irreführende Aussage. Optional: Halbsatz „oder wenn ein Anfall auf den nächsten folgt" ergänzen, um dem C1-Stand gleichzuziehen.

## Gezielt geprüfte Risiko-Areale (Auftragsfokus) — alle korrekt

1. **Synkope-Definition** (kontextB1, erk-01 glossar, ref-00b kerntextB1): „kurze Ohnmacht / Kreislauf fängt sich von allein / nach Sekunden bis Minuten wieder wach" — deckt F-01. Gloss „Synkope (= kurze Ohnmacht)" korrekt. Kardiale Synkope als gefährlich benannt (F-02). PASS.
2. **Hypoglykämie / i.v.-Glukose** (erk-01b kerntextB1, erm-01/erm-02 feedbackB1/explanationB1): Schwelle < 50 mg/dl, Symptome/Handeln schon < 70 mg/dl (F-03) korrekt. Behandlung nach Bewusstsein (F-05): wach → orale schnelle KH; benommen → NICHTS oral (Aspiration), Glukose i.v. als ärztliche Behandlung, Pflege bereitet vor/assistiert, punktiert Shunt nicht eigenmächtig. Keine ml-Dosis in B1 erfunden. PASS.
3. **Status epilepticus 5-Min** (ref-00d): Schwelle korrekt (F-12), siehe F-01 oben (nur Vollständigkeit). PASS.
4. **Stabile Seitenlage** (erm-03 explanationB1): Bei bewusstseinsgetrübtem Patienten (nur Schmerzreiz) Atemwegsschutz durch stabile Seitenlage, Beine hoch als Kreislaufhilfe; Kopftieflage/Trendelenburg als kontraindiziert markiert (F-06/F-07). PASS.

## Fachwort-Glossen (B1) — Stichprobe, alle klinisch korrekt
- „Synkope (= kurze Ohnmacht)" ✓
- „Hypoglykämie (= Unterzuckerung)" ✓
- „Aspiration (= Verschlucken in die Lunge / in die Atemwege)" ✓
- „Shunt (= Gefäßzugang für die Dialyse)" ✓ (arteriovenöser Shunt, korrekt vereinfacht)
- „ärztliche Anordnung (= der Arzt ordnet an)" ✓
- „Apoplex (Schlaganfall)", „SBAR (= …)" ✓

## Anti-Pattern-Gegencheck (B1-spezifisch)
- Keine Pseudo-Empathie / Bagatellisierung (kein „NRS ok", kein „gedämpftes Licht").
- Keine kinästhetisch falschen Formulierungen (nicht einschlägig — Akutsituation).
- Keine orale Gabe beim Bewusstseinsgetrübten empfohlen (im Gegenteil: Kernlehre der Situation, in B1 sauber gespiegelt).
- Kein eigenmächtiges Shunt-Punktieren / keine erfundene Dosis.
- Anrede durchgehend „du". Keine „Sie"-Verstöße an Lernende.

## Cross-Step-Konsistenz (B1)
- Patient-Daten konsistent: 63 J. (SBAR), Diabetiker unter Insulin, BZ 48 mg/dl → nach Glukose 120 mg/dl, Shunt links/intakt. B1- und C1-Werte identisch.
- „48" in erk-01b storyAufhaenger konsistent mit erk-02 (Messung in erk-01 ausgelöst).

## Zusammenfassung
- 0 Findings HOCH
- 0 Findings MITTEL
- 1 Finding NIEDRIG (F-01: Status-epilepticus-Zweitkriterium in B1 weggelassen — vertretbare Vereinfachung, nicht irreführend)
- Allgemeine Beobachtung: Die B1-Sanierung ist fachlich sauber. Fachwörter wurden behalten und korrekt geg1osst, Vereinfachungen führen nirgends zu einer falschen oder gefährlichen Aussage. Kein Drift gegenüber C1 in den kritischen Arealen (Synkope, Hypoglykämie/i.v.-Glukose, Status-5-Min, stabile Seitenlage).
- **K.O.-Verdikt: PASS** (kein HOCH; einziges NIEDRIG ist optional, kein Deploy-Blocker).
