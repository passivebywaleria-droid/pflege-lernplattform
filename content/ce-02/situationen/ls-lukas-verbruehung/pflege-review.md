# Pflege-Review: ls-lukas-verbruehung

**Geprüft:** 2026-04-25
**Files:** 7 (6 Phasen + patient.ts)
**Step-Anzahl:** 30 (5 Informieren, 6 Beobachten, 5 Planen, 7 Durchführen, 4 Evaluieren, 3 Dokumentieren) — davon 4 Dialog/Branching ohne reine Wahl, 6 MC, 3 Highlight, 5 Text, 2 Sequencing/Sorting, 3 Categorize, 2 Matching, 1 Comparison, 1 Calculation, 1 Matrix, 1 Timeline, 1 Summary, 2 Freetext, 1 TrueFalse

## Findings

### patient.ts — Erstversorgung Kühldauer

#### F-01 (HOCH): Kühldauer 15-20 Min bei 15% KOF Kleinkind ist potenziell gefährlich
- **Stelle:** patient.ts Zeile 26 + 28; phase-informieren Step 1.2 Zeile 99, 106
- **Problem:** Sandras Kühlmaßnahme "15-20 Minuten unter fließendem Wasser" wird als korrekte Erstversorgung dargestellt und ihr explizit als "richtig" rückgemeldet. Bei einem 2,5-jährigen Kleinkind (13,2 kg) mit 15% KOF Verbrühung ist das nach aktueller DGV-S2k-Leitlinie und GNPI-Empfehlung **zu lang und mit Hypothermie-Gefahr verbunden**. Aktuelle Empfehlung: bei Kindern unter 8 Jahren bzw. bei >10% KOF nur kurz (max. 10 Min) und nur lokal kühlen, möglichst lauwarmes Wasser (ca. 20°C), Restkörper warmhalten. Bei 15% KOF wird oft sogar gegen ausgedehnte Kühlung gewarnt — zugunsten von Wärmeerhalt (verbrannte Haut verliert Temperaturregulation, Kleinkinder kühlen schnell aus → Schockverstärkung).
- **Standard-Verweis:** DGV-Leitlinie "Behandlung thermischer Verletzungen im Kindesalter" 2015/aktualisiert; GNPI-Empfehlung Erstversorgung Kinderverbrennung; Hoehl/Kullick 2019 (Kinderkrankenpflege)
- **Empfehlung:** Entweder (a) Kühldauer auf "kurz lokal gekühlt, dann zugedeckt" reduzieren, oder (b) didaktisch nutzen: Sandra hat "in der Akutsituation richtig reagiert (Kühlen und Notruf)", aber im Lerntext wird die Nuance erwähnt — bei Kindern unter 8 Jahren oder >10% KOF ist Kurzkühlung mit Wärmeerhalt der Standard, nicht 15-20 Min ausgedehnt. So bleibt Sandra "richtig genug" entlastet, der Schüler lernt aber den aktuellen Standard.

### phase-durchfuehren — Step 4.4 Verbandwechsel

#### F-02 (MITTEL): NaCl-Reinigung als Pflichtschritt bei intakten Blasen
- **Stelle:** phase-durchfuehren.ts Zeile 299 + 304
- **Problem:** "Wundreinigung mit NaCl 0,9%" wird als zweiter Schritt im Verbandwechsel-Algorithmus dargestellt. Bei intakten Blasen Grad 2a ist eine routinemäßige Wundreinigung/Spülung mit NaCl **nicht zwingend** und kann das fragile Wundbett unnötig irritieren. NaCl-Spülung hat ihre Indikation bei Wundsekretentfernung, Krusten oder Verschmutzung — nicht als Routine bei sauberer, gespanner Blase mit Hydrokolloid-Vorgeschichte.
- **Standard-Verweis:** DGV-Leitlinie 2023 — Wundbettmanagement bei Grad-2a-Verbrennungen; Hoehl/Kullick (sparsame Wundreinigung bei Kindern)
- **Empfehlung:** Schritt 2 abschwächen: "Wundreinigung mit NaCl 0,9% **nur bei Verschmutzung oder Wundsekretkrusten** — bei sauberer intakter Wundfläche keine routinemäßige Spülung". Ggf. Distraktor bauen: "Gilt es zu spülen, auch wenn die Blasen intakt und die Wunde sauber ist?"

### phase-informieren — Step 1.4 U-Heft

#### F-03 (MITTEL): Tetanus-Relevanz bei reiner Verbrühung überbewertet
- **Stelle:** phase-informieren.ts Zeile 314-318
- **Problem:** "Sehr relevant — bei offener Wundfläche muss Tetanus-Schutz geprüft sein" suggeriert, dass Verbrühungen tetanusrelevante Wunden sind. Tatsächlich ist das **bei reiner Verbrühung (heißer Tee, geschlossene/oberflächliche Blasen) nicht der Standard**: Hitze ist ein eigener Sterilisator, klassische Tetanus-Risikowunden sind tiefe Stich-/Quetsch-/Bisswunden mit Erdkontakt. STIKO empfiehlt Tetanus-Auffrischung bei Verbrennung erst bei tieferen, kontaminierten oder nekrotischen Wunden — nicht reflexhaft bei jeder Verbrühung 2a.
- **Standard-Verweis:** STIKO-Empfehlungen Tetanus-Postexpositionsprophylaxe; RKI Verbrennungswunden
- **Empfehlung:** Reason umformulieren: "Relevant zu prüfen — Tetanus-Schutz wird bei tieferen oder kontaminierten Wunden geprüft. Bei reiner Verbrühung (Hitze sterilisiert) ist das Risiko gering, der Status sollte aber bei Aufnahme dokumentiert sein."

### phase-beobachten — Step 2.1 KUSS-Skala

#### F-04 (MITTEL): KUSS-Score-Aussage "8/10" widerspricht KUSS-Mechanik
- **Stelle:** patient.ts Zeile 14, 28; phase-beobachten Zeile 41 ff.; durchgängig in allen Phasen
- **Problem:** Die KUSS-Skala (Büttner/Finke 2000) hat **Maximalwert 10** (5 Kategorien × max. 2 Punkte), interventionspflichtig ab Score ≥4. Die Schreibweise "KUSS 8/10" und "KUSS 9/10" ist formal korrekt, aber die Beschreibungen passen schlecht zusammen: Im Highlight-Step werden alle 5 Kategorien mit 1-2 Punkten beschrieben → das ergibt **5-10 Punkte**, mit den dortigen Formulierungen eher 5-7 Punkte (leises Wimmern = 1, Grimassieren = 2, Anspannung = 1, Beine anziehen = 1, Drehen/Greifen = 1-2). KUSS 8 wäre gerechtfertigt bei "lautem Schreien" (2) — Lukas wimmert aber nur (1). Der angegebene Wert ist plausibler als 5-7.
- **Standard-Verweis:** Büttner/Finke 2000, KUSS-Original-Validierung 0-4 Jahre
- **Empfehlung:** Entweder Beschreibung in Step 2.1 anschärfen ("noch lautes Schreien-Phasen, kräftiges Wegstoßen") um Score 8 zu rechtfertigen — ODER Patientenwert auf KUSS 6/10 reduzieren (immer noch deutlich interventionspflichtig). Konsistenz Patient-Hintergrund ↔ Beobachtungs-Step herstellen.

### phase-planen — Step 3.3 Flüssigkeitsbedarf

#### F-05 (MITTEL): Verbrühungs-Zusatzbedarf-Formel unklar / unkonventionell
- **Stelle:** phase-planen.ts Zeile 138
- **Problem:** "ca. 1-2 ml/kg/% KOF in den ersten 24h = 13,2 × 15 = ca. 200-400 ml extra" — die Parkland-Formel (Standard für Verbrennungsschock-Resuscitation) ist **4 ml × kg × % KOF in 24h**, nicht 1-2. Die Formel hier passt zu keinem etablierten Pädiatrie-Schema. Bei Kindern wird oft die **modifizierte Galveston-Formel** (5000 ml/m² verbrannte KOF + 2000 ml/m² Erhaltung) verwendet, oder Parkland mit Anpassung. Bei 15% KOF Grad 2a beim Kleinkind wäre 4 × 13,2 × 15 = 792 ml in 24h zusätzlich (Parkland) — also fast doppelt so viel wie der Lerntext angibt.
- **Standard-Verweis:** S2k-Leitlinie Behandlung thermischer Verletzungen Erwachsene/Kinder; GNPI Pädiatrische Schock-Therapie
- **Empfehlung:** Entweder Hinweis pauschalisieren ohne Zahlenwert ("Bei Verbrühung kommt ein Verbrühungs-Zusatzbedarf hinzu, dessen genaue Menge der Arzt nach Parkland- oder Galveston-Formel berechnet"), ODER auf Parkland korrigieren: 4 ml × 13,2 × 15 = ~790 ml für die ersten 24h, davon 50% in den ersten 8h.

### phase-durchfuehren — Step 4.5 Mundpflege

#### F-06 (NIEDRIG): Chlorhexidin-Verbot u. Begründung
- **Stelle:** phase-durchfuehren.ts Zeile 363; phase-planen.ts Zeile 100
- **Problem:** "Chlorhexidin ist bei Kleinkindern nicht zugelassen — Schluckgefahr, Schleimhautreizung, keine Zulassung unter 6 Jahren". Das stimmt für Mundspülungen zur Mundpflege bei Kleinkindern (CHX 0,2% Mundspülungen sind für Kinder unter 6 J. nicht empfohlen). Bei Lukas wäre Octenidin oder Kamille/Salbei in Schluckmenge die Alternative. Begründung "Schluckgefahr" ist gut — "Schleimhautreizung" auch. **OK, aber:** Im Plan-Step (Zeile 100) wird "Chlorhexidin-Spülung bei unter 2-Jährigen" erwähnt — Lukas ist 2,5 J., also gerade darüber. Logikkette etwas schwammig.
- **Standard-Verweis:** DGKJ 2022 Mundpflege Kleinkind
- **Empfehlung:** Konsistenz: einheitlich "unter 6 Jahren nicht empfohlen" statt einmal 2 J., einmal 6 J. Octenidin als kindgerechte Alternative im Lerntext erwähnen.

### phase-durchfuehren — Step 4.3 Komplikation Schreien

#### F-07 (NIEDRIG): "Sandra soll Lukas festhalten" — Begriff Fixierung könnte präziser
- **Stelle:** phase-durchfuehren.ts Zeile 273-279
- **Problem:** "Sandra soll Lukas festhalten, dann geht es schneller." Distraktor wird mit "Fixieren ist nur in Notfällen erlaubt" abgelehnt — pflegerechtlich korrekt, ABER: "Festhalten" durch Eltern bei medizinischen Maßnahmen ist nicht automatisch eine Fixierung im rechtlichen Sinn. **Therapeutisches Halten** (mit Einverständnis und Empathie) ist bei kleinen Kindern eine etablierte Technik (Hoehl/Kullick). Die Formulierung des Distraktors ("dann geht es schneller") macht es klar zur falschen Antwort wegen Motiv (Geschwindigkeit statt Kindeswohl) — gut. Aber das Feedback verallgemeinert: "Kinder festhalten ist nur in Notfällen erlaubt" — das ist zu pauschal.
- **Standard-Verweis:** Hoehl/Kullick 2019, Kap. Maßnahmen mit Widerstand
- **Empfehlung:** Feedback nuancieren: "Therapeutisches Halten mit Einverständnis und Sandras Stimme als Beruhigung kann sinnvoll sein — aber nicht als Strategie 'damit es schneller geht'. Hier liegt kein Notfall vor, die Pause + Bedarfsanalgesie sind die richtige Antwort."

### phase-dokumentieren — Step 6.2 Kinderschutz-Doku

#### F-08 (MITTEL): Wertung "wahrscheinlich schuldig" als Lehrbeispiel zu plump
- **Stelle:** phase-dokumentieren.ts Zeile 112
- **Problem:** Distraktor "Vater Kevin hat laut reagiert — ist wahrscheinlich schuldig" ist eine Karikatur — keine Pflegeperson würde das so dokumentieren. Plumper Distraktor verfehlt Lerneffekt.
- **Standard-Verweis:** § 4 KKG, BGW-Empfehlung sachliche Dokumentation
- **Empfehlung:** Subtilerer realistischer Anfänger-Fehler: "Vater Kevin ist sehr emotional und schwer ansprechbar gewesen, möglicherweise überfordert mit der Situation" — klingt empathisch, ist aber **Interpretation statt Beobachtung** und gehört nicht in die sachliche Dokumentation. Solche Wertungs-Schichten sind das, was Anfänger wirklich schreiben.

### phase-evaluieren — Step 5.1 Wundstatus

#### F-09 (NIEDRIG): "9/10" KUSS bei Aufnahme widerspricht patient.ts (8/10)
- **Stelle:** phase-evaluieren.ts Zeile 54 (KUSS 9/10) vs. patient.ts Zeile 14 (KUSS 8/10) vs. phase-evaluieren Step 5.2 Zeile 109 (KUSS 9/10 um 09:20)
- **Problem:** Inkonsistenz: patient.ts und phase-informieren sagen **KUSS 8/10 bei Aufnahme**, phase-evaluieren spricht von **KUSS 9/10 bei Aufnahme**. Das verwirrt, da der Schüler beide Werte sieht.
- **Standard-Verweis:** Cross-Step-Konsistenz (siehe pflege-konformitaet.md)
- **Empfehlung:** Auf einen Wert vereinheitlichen — vorzugsweise KUSS 8 bei Erstaufnahme (vor i.v.-Analgesie). Im Timeline-Step (5.2) auch konsistent halten.

## Cross-Step-Probleme

- **KUSS-Werte 8/9** (siehe F-09) — patient.ts vs. phase-evaluieren inkonsistent
- **Chlorhexidin-Altersgrenze** (F-06) — phase-planen nennt "unter 2 J.", phase-durchfuehren "unter 6 J." — vereinheitlichen
- **Verbrühungs-Zusatzbedarf-Formel** (F-05) widerspricht der etablierten Parkland-/Galveston-Formel — Schüler bekommt einen falschen Eindruck der Größenordnung
- **Wundreinigungs-Pflichtschritt** (F-02) im Verbandwechsel-Algorithmus widerspricht dem in Step 4.4 selbst geforderten Prinzip "Blasen nicht öffnen / minimale Manipulation"

## Zusammenfassung

- **HOCH:** 1 (F-01 Kühldauer 15-20 Min bei Kleinkind/15% KOF)
- **MITTEL:** 5 (F-02 NaCl-Reinigung, F-03 Tetanus, F-04 KUSS-Score-Beschreibung, F-05 Flüssigkeitsformel, F-08 Karikatur-Distraktor)
- **NIEDRIG:** 3 (F-06 CHX-Logik, F-07 Halten/Fixieren, F-09 KUSS-Inkonsistenz)

**Allgemeine Beobachtungen:**
- Didaktisch sehr stark: Kommunikations-Stränge (Sandra-Schuldgefühle, Kevin-Deeskalation, Frau Fink-Ankündigung) sind herausragend gut umgesetzt — Sandwich-Prinzip, Empathie-zuerst-Strategie, klare Sprache. Validation und Anti-Anti-Pattern werden konsequent eingehalten.
- Kinderschutz (§ 4 KKG) wird transparent und nicht-anklagend kommuniziert — vorbildlich.
- KUSS-Skala-Highlight als Brilliant-First-Aufgabe ist starkes didaktisches Mittel.
- B1-Konsistenz: durchgängig vorhanden, sprachlich gut.
- Schwächen liegen primär in **medizinisch-pharmakologischen Detailwerten** (Kühldauer, Parkland-Formel, NaCl-Routine) — diese sollten gegen aktuelle DGV-/GNPI-Standards überprüft werden.
- Kinästhetik-Anti-Patterns: keine gefunden. Pseudo-Empathie: keine gefunden.

**K.O.-Verdikt:** **FAIL** — F-01 (Kühldauer) ist ein HOCH-Finding. Sandras Maßnahme als "korrekt" zu loben, obwohl 15-20 Min Kühlung bei einem 2,5-Jährigen mit 15% KOF Hypothermie-Risiko bedeutet, kann zu Schaden in der Praxis führen, wenn Schüler diese Empfehlung weitergeben. **Vor Live-Deploy F-01 anpassen** (Sandras Handlung emotional würdigen, im Lerntext aber den aktuellen Standard für Kleinkinder erklären). F-02 und F-05 sollten parallel mitkorrigiert werden — sie betreffen direkt anwendbare Pflegehandlungen.
