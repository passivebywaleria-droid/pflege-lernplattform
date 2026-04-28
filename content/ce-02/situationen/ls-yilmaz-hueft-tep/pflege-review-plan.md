# Pflege-Review (Plan): ls-yilmaz-hueft-tep

**Geprüft:** 2026-04-26
**Mode:** plan (retrospektive Doppelprüfung — Code-Review separat als pflege-review.md, dort PASS)
**Files:** 8 (patient-plan.md, baustein-trigger.md, 6 Phasen-Pläne)
**Step-Anzahl im Plan:** 28 (5+7+5+8+4+4 inkl. Optionale, Step-IDs teils anders nummeriert als Code)

## Findings

### phase-durchfuehren — Step 4.1 dur-01-mobilisation-reihenfolge (sequencing)

#### F-P01 (HOCH): „Beide Beine gleichzeitig schwingen" widerspricht Hüft-TEP-Postoperativ-Standard
- **Stelle:** phase-durchfuehren.md Zeile 40 (Schritt 4 der Reihenfolge) + Feedback Zeile 46
- **Problem:** Plan dokumentiert „Beide Beine gleichzeitig über die Bettkante schwingen — nicht einzeln (wegen Lagerungsvorschrift: Hüftbeugung kontrollieren)". Standard nach Hüft-TEP ist genau umgekehrt: operiertes Bein zuerst in Streckung über die Bettkante, gesunde Seite folgt aktiv (Patientin dreht über die gesunde Seite). Gleichzeitiges Schwingen erzeugt unkontrollierte Adduktion/Innenrotation = Luxationsrisiko in den ersten 6–12 Wochen post-OP. Der zitierte „Grund" ist sachlich falsch.
- **Standard-Verweis:** DGU (2022) S2k-Endoprothetik Hüfte; AOK-Patientenleitlinie; pflege-konformitaet.md (Kinästhetik = Patient bewegt selbst).
- **Empfehlung:** Schritt 4 umformulieren — operiertes Bein zuerst in Streckung führen, kein gleichzeitiges Schwingen. Patientin bewegt aktiv mit, Pflege sichert seitlich am Becken.

#### F-P02 (HOCH): „3 Min an der Bettkante sitzen" ohne RR-Messung = Anti-Pattern Pseudo-Schellong
- **Stelle:** Zeile 41 (Schritt 5)
- **Problem:** „3 Minuten an der Bettkante sitzen: Schwindel abfragen, Kreislauf anpassen lassen". Genau das in pflege-konformitaet.md Zeile 16 explizit gelistete Anti-Pattern: Warten ohne RR-Messung suggeriert Schutz, leistet ihn aber nicht. Schellong = RR liegend → ≥1 Min sitzen → RR sitzend → bei Differenz ≥20 mmHg syst. / ≥10 mmHg diast. Aufstehen verschieben.
- **Standard-Verweis:** Anti-Pattern-Liste pflege-konformitaet.md; Freeman et al. (2011) AAS-Consensus orthostat. Hypotonie.
- **Empfehlung:** Schritt 5 splitten/präzisieren: „RR liegend dokumentiert. 3 Min an Bettkante sitzen, RR sitzend messen, Schwindel/Übelkeit abfragen — Aufstehen nur bei Stabilität." Schwellenwert in Phase 4 Feedback (>30 mmHg) auf ≥20 mmHg syst. / ≥10 mmHg diast. korrigieren — sonst Inkonsistenz zu Step 6.2 (>20 mmHg).

### phase-beobachten — Step 2.4 beob-04-thrombose-virchow (categorize)

#### F-P03 (HOCH): Diabetes-Zuordnung zu „Gefäßwandschaden" konzeptionell falsch
- **Stelle:** Zeile 144 (Tabelle Risikofaktor-Zuordnung)
- **Problem:** „Diabetes mellitus — Gefäßveränderungen chronisch → Gefäßwandschaden". Virchow-Trias bezieht sich auf venöse Thrombogenese; Diabetes wirkt v.a. über Hyperkoagulabilität (PAI-1 ↑, Fibrinogen ↑, Thrombozytenaktivierung). Diabetische Mikro-/Makroangiopathie ist primär arteriell, kein TVT-relevanter Endothelschaden im Virchow-Sinn.
- **Standard-Verweis:** DGG (2022) S2k-Leitlinie tiefe Beinvenenthrombose.
- **Empfehlung:** Item entweder als Hyperkoagulabilität reklassifizieren (mit korrekter explanation) oder ersetzen durch klares Beispiel (z.B. „direkter OP-Zugang an V. femoralis-Region" → Gefäßwandschaden).

### phase-durchfuehren — Step 4.2 dur-02-orthostatisch-branching (branching)

#### F-P04 (MITTEL): Antidiabetika als RR-Senker im Feedback inhaltlich unscharf
- **Stelle:** Zeile 69 (Pfad-A-Erklärung)
- **Problem:** „Antidiabetika (manche senken RR)" — orale Antidiabetika (Metformin, Sulfonylharnstoffe) sind nicht primär RR-senkend. Hypotonie kann via Hypoglykämie auftreten — anderer Mechanismus als orthostatische Dysregulation.
- **Standard-Verweis:** Cross-Step-Konsistenz; pharmakologisch unstrittig.
- **Empfehlung:** Antidiabetika streichen, stattdessen relevante Faktoren benennen: Bettlägerigkeit (Gefäßregulation gedämpft), postop. Volumenverschiebung, Schmerz-bedingte autonome Aktivierung, ggf. Analgetika.

### phase-durchfuehren — Step 4.4 dur-04-mustafa-branching (branching)

#### F-P05 (MITTEL): Score-3-Pfad „Frau Yilmaz als Vermittlerin" während akuter Standphase
- **Stelle:** Zeile 134 (Pfad A)
- **Problem:** Frau Yilmaz steht zum ersten Mal nach Hüft-TEP (NRS 4 dokumentiert). Sie zur Übersetzerin/Vermittlerin zu machen, während Mustafa nach ihrem Arm greifen will, teilt ihre Aufmerksamkeit zwischen Sicherheit (Stand, Schmerz, Sturzrisiko) und Beziehungsarbeit. DNQP-Sturzprophylaxe priorisiert in Akutphasen Patientensicherheit.
- **Standard-Verweis:** DNQP Sturzprophylaxe; ABCDE-Logik (Sicherheit vor Kommunikation).
- **Empfehlung:** Sequenz im Pfad A explizieren: 1) nonverbales Stopp + ruhige Geste an Mustafa, 2) Frau Yilmaz sicher zum Stuhl/Bettkante zurückführen, 3) ERST DANN Vermittlung. Alternativ Step splitten: erst sichern, dann kommunizieren.

### phase-beobachten — Step 2.5 beob-05-thrombose-klinisch (truefalse)

#### F-P06 (MITTEL): Aktive Druckprovokation der Wade veraltet/risikobehaftet
- **Stelle:** Zeile 162 (body) + Zeile 166 (TF-Item Homans)
- **Problem:** Body lässt Schülerin „leicht auf die Wade drücken". Das ist eher Pratt- als Homans-Zeichen; aktive Provokationszeichen werden in modernen TVT-Leitlinien nicht mehr empfohlen (theoretisches Embolie-Risiko, niedrige Sensitivität/Spezifität). Die TF-Karte erklärt korrekt die niedrige Spezifität, lehrt aber gleichzeitig die Provokation.
- **Standard-Verweis:** DGG (2022) S2k-Leitlinie TVT.
- **Empfehlung:** body umformulieren auf Inspektion im Seitenvergleich: Schwellung, Umfang (Messung), Hauttemperatur, Verfärbung; spontane Schmerzangabe abfragen — keine Druckprovokation lehren.

### phase-planen — Step 3.3 plan-03-massnahmen-sortieren (sorting)

#### F-P07 (MITTEL): Mehrdeutigkeit in Reihenfolge nicht offengelegt
- **Stelle:** Zeile 101–108 (7 sortItems)
- **Problem:** Items 4 (Yilmaz informieren) und 5 (Mustafa via Yilmaz informieren) sind reihenfolge-tolerant zueinander. pflege-konformitaet.md verlangt: „Bei Mehrdeutigkeit: nur EINE Reihenfolge zulassen oder Toleranz dokumentieren".
- **Empfehlung:** Toleranz im Feedback ergänzen oder die beiden Items zu einem zusammenfassen („Patientin und Angehöriger informieren").

### phase-evaluieren — Step 5.1 eval-01-massnahmen-check (categorize)

#### F-P08 (NIEDRIG): „Wadenschmerz gemeldet" als eigene Kategorie unscharf
- **Stelle:** Zeile 43
- **Problem:** Eintrag „Doppler läuft, Ergebnis ausstehend" ist Prozess-Status, nicht Wirkungs-Bewertung. Die Kategorie-Logik (hat gewirkt / läuft / nicht gelöst) wird damit aufgeweicht.
- **Empfehlung:** Vierte Kategorie „in Klärung — Ergebnis abwarten" sauber benennen oder Item aus Wirkungs-Tabelle herausnehmen und im Folgeplan separat führen.

### phase-planen — Step 3.2 plan-02-pesr-formulieren (cloze)

#### F-P09 (NIEDRIG): Distraktoren für „vollständig orientiert" einseitig
- **Stelle:** Zeile 76 (Lückenoption „Ressourcen — orientiert")
- **Problem:** Plausible Falsch-Antwort fehlt. Realistischer Anfänger-Fehler: „zeitlich eingeschränkt aber sonst orientiert" bei post-OP-79-Jähriger.
- **Empfehlung:** Distraktor ergänzen.

### patient-plan.md — Lagerungsvorschrift

#### F-P10 (NIEDRIG): Hüft-TEP-Lagerungsregeln unvollständig benannt
- **Stelle:** Zeile 44 + Zeile 152
- **Problem:** Plan listet Hüftbeugung <90° und Beinkreuzung — der dritte zentrale Standardpunkt „keine Innenrotation des operierten Beins in den ersten 6–12 Wochen" fehlt explizit (wird nur indirekt via „Beinkreuzung" abgedeckt). Bei Anfänger-Schülern unklar.
- **Empfehlung:** In patient-plan.md und Step 1.4 (matching) als eigenes Paar aufnehmen: „Keine Innenrotation operiertes Bein → Luxationsprophylaxe (Standard 6–12 Wochen post-OP)."

## Cross-Step-Konsistenz

- **Orthostase-Schwellenwert** uneinheitlich: Phase 4.2 nennt „>30 mmHg systolisch" (Z69), Phase 6.2 „>20 mmHg systolisch" (Z85). Pflicht: vereinheitlichen auf ≥20 mmHg syst. / ≥10 mmHg diast. (AAS-Konsens 2011).
- **Mobilisationsstufe 3 vs. „20 kg Belastung"** (patient-plan.md Z43) konsistent mit „Aufstehen mit Unterarmgehstützen" — OK.
- **Mustafa-Information in Phase 3 vor Aufstehen vs. Eskalation in Phase 4** logisch konsistent (Plan macht klar: Information war erfolgt, Eskalation = Angst-Reaktion trotzdem).
- **Patient-Stammdaten** (Alter 79, BMI 34, Zementpfanne, Fondaparinux 2,5 mg, Tag 3 post-OP) durch alle 6 Phasen konsistent.

## Hüft-TEP-spezifische Gesamtbewertung

- 90°-Flexionsregel: korrekt im Plan, durchgehend.
- Adduktionsverbot (kein Beinkreuzen): korrekt referenziert.
- Innenrotationsverbot: nur implizit — F-P10.
- Mobilisation am Tag 3 (nicht später): korrekt — entspricht Fast-Track-Standard, NICHT „2 Wochen liegen".
- Kinästhetik (Patient bewegt selbst): in Phase 4 Step 4.1 verletzt (F-P01) — Sicherungsposition seitlich-hinter ist suboptimal.
- Thromboseprophylaxe: pharmakologisch (Fondaparinux 35 Tage) korrekt; mechanisch (Kompressionsstrümpfe, Mobilisation) thematisiert.
- Kulturelle Sensibilität: Mustafa als Ressource gut angelegt; Ramadan/Fasten nicht thematisiert — im Plan nicht erforderlich (Operation/akute postop. Phase, keine Fastenfrage relevant).

## Zusammenfassung

- 3 HOCH (F-P01 Mobilisations-Reihenfolge, F-P02 Pseudo-Schellong, F-P03 Diabetes/Virchow)
- 4 MITTEL (F-P04 Antidiabetika, F-P05 Vermittler-Sicherheit, F-P06 Druckprovokation, F-P07 Sorting-Mehrdeutigkeit)
- 3 NIEDRIG (F-P08 Kategorie-Logik, F-P09 PESR-Distraktor, F-P10 Innenrotationsregel)
- Allgemein: Plan ist didaktisch klar strukturiert, Standards-Bezug überwiegend explizit (DNQP, NPUAP/EPUAP, DGU, PESR, SBAR). Patient-Bio würdevoll, Zitate authentisch. Drei substantielle pflegefachliche Schwächen (F-P01/02/03) sind allesamt im Code-Review (pflege-review.md) ebenfalls aufgefallen — die Plan-Mängel haben sich also in den Code fortgepflanzt und müssen dort behoben werden, NICHT erneut im Plan.
- Pseudo-Empathie-Bias: gering. Sandwich-Feedback durchgängig, aber nie auf Kosten der Fachlichkeit.

**K.O.-Verdikt (Plan):** FAIL — wegen 3 HOCH-Befunden (Mobilisations-Reihenfolge, Schellong-Anti-Pattern, Virchow-Diabetes-Zuordnung).

**Operativ:** Da der Code aus diesem Plan bereits generiert ist und das Code-Review (pflege-review.md vom 2026-04-25) die identischen drei HOCH-Punkte adressiert, sind die Korrekturen am Code (nicht am Plan) zu vollziehen. Plan dient hier als historisches Dokument; bei zukünftigen Plan-Generationen sollten F-P01/02/03 im didaktik-regisseur als geprüfte Anti-Patterns hinterlegt sein.

---

## Code-Sync-Status (2026-04-26)

Alle 10 Plan-Findings wurden im Code (`patient.ts` + 6 Phasen-Files) adressiert. Verifikation:

| Plan-ID | Code-Pendant | Status im Code |
|---------|--------------|----------------|
| F-P01 (HOCH) Mobilisationsreihenfolge | Step 4.1 sequencing s4 | FIXED — operiertes Bein zuerst in Streckung, Patientin dreht aktiv mit |
| F-P02 (HOCH) Pseudo-Schellong | Step 4.1 s1+s5, 4.2 Feedback, 6.2 matching | FIXED — RR liegend → ≥1 Min sitzen → RR sitzend, Schwellen ≥20/≥10 mmHg |
| F-P03 (HOCH) Diabetes/Virchow | Step 2.4 categorize | FIXED — `correctCategory: 2` (Hyperkoagulabilität) + Erklärung PAI-1/Fibrinogen |
| F-P04 (MITTEL) Antidiabetika-RR | Step 4.2 body | FIXED — Antidiabetika-Aussage ersetzt, Hypoglykämie-Differential klargestellt |
| F-P05 (MITTEL) Vermittler-Sicherheit | Step 4.4 branching Score-3 | FIXED — Reihenfolge: Stopp-Geste → sicher hinsetzen → DANN vermitteln |
| F-P06 (MITTEL) Druckprovokation | Step 2.5 truefalse body+TF1 | FIXED — Inspektion im Seitenvergleich, Provokationszeichen-Verbot (DGG 2022) |
| F-P07 (MITTEL) Sorting-Mehrdeutigkeit | Step 3.3 sorting body | FIXED — Toleranz-Hinweis im body C1+B1 |
| F-P08 (NIEDRIG) Kategorie-Logik | Step 5.1 categorize | FIXED — vierte Kategorie "Ergebnis ausstehend", Lernpointe im body |
| F-P09 (NIEDRIG) PESR-Distraktor | Step 3.2 cloze blank 4 | FIXED — Distraktor "zeitlich eingeschränkt aber sonst" eingefügt |
| F-P10 (NIEDRIG) Innenrotationsregel | Step 1.4 matching | FIXED (2026-04-26) — Matching auf 5 Paare erweitert: Innenrotationsverbot als eigenes Paar; alle drei DGU-Verbote (90° Flexion, Adduktion, Innenrotation) explizit; Kissen-Pair als mechanische Adduktionsprophylaxe getrennt |

Cross-Step-Konsistenz Orthostase-Schwellenwerte: einheitlich ≥20 mmHg syst. und ≥10 mmHg diast. (AAS-Konsensus 2011) durch Phase 4.1, 4.2 und 6.2.

**Neuer Plan-K.O.-Status (2026-04-26): PASS** — alle 3 HOCH, 4 MITTEL und 3 NIEDRIG Findings sind im Code adressiert. TypeScript-Check der ls-yilmaz-hueft-tep-Files läuft fehlerfrei.


---

**K.O.-Verdikt (final, 2026-04-26): PASS** — alle HOCH/MITTEL/NIEDRIG-Findings durch Fix-Agents adressiert (siehe Fix-Block oben). TypeScript clean. Live-Deploy freigegeben.
