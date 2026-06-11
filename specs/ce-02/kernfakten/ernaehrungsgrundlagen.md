# Kernfakten: Ernährungsgrundlagen

| Feld | Wert |
|------|------|
| themaId | `ernaehrungsgrundlagen` |
| ceId | `ce-02` |
| cluster | D (Ernährung & Flüssigkeit) |
| geschätzteUE | 8 |
| wissensart | handlung |
| quellen | Pflege heute 7. Aufl. Kap. 7 Ernährung (verbatim-belegt); DNQP Expertenstandard Ernährungsmanagement 1. Aktual. 2017/2024; DGE/ÖGE/SGE D-A-CH-Referenzwerte (Erläuterungen, lokaler Extrakt — Einzelnährstoff-Tabellen NICHT enthalten); I Care Pflegeexamen kompakt (Thieme, verbatim-belegt); Prüfungswissen Pflegefachfrau (Elsevier, verbatim-belegt); Hoehl/Kullick Kinderkrankenpflege 5. Aufl. (verbatim-belegt); WHO 2015 Guideline Sugars intake (verbatim-belegt, leitlinien-volltext); Atwater 1899 |
| grounding-stand | 2026-06-11, dritte Überarbeitung (icare-pflege/-anatomie-Volltext erschlossen). Aufgelöste ⚠️ (Vorrunden): F-01 Makro-/Mikronährstoff-Terminologie, F-04 0,8–1 g/kgKG Protein-Referenz + Senioren-Erhöhung, F-08 Vitamin-D-Synthese (Haut-Vorstufe + UV), F-09 Mengenelemente/Spurenelemente nach Körpertrockenmasse, F-09/M1 Jod-Richtwert, F-10 +500 ml/°C Fieber, F-10 1,5-l-Trinkmenge, F-12 DGE-Prozentwerte, F-02 WHO Zucker <10%/<5%. 2026-06-11 (3): F-08 Vitamin-D-Synthese-Mechanismus (Cholecalciferol aus Cholesterin in Keratinozyten der Haut unter Sonnenlicht) via icare-anatomie verbatim belegt; F-04 Senioren-Protein 0,8–1,5 g/kgKG + 1,0 g/kg-Untergrenze (Schuetz 2017) via icare-pflege verbatim verstärkt. Verbleibende ⚠️ (DGE-Tool erforderlich, im neuen Korpus NICHT verbatim auffindbar): Gehirn 120 g Glukose/Tag (F-02), gesättigte FA <10% (F-03), Alkohol 7 kcal/g + Ballaststoffe ~2 kcal/g (F-05), Ballaststoffe ≥30 g (F-06), 20 µg/800 IE Vitamin-D-Referenzwert + Fachbegriff 7-Dehydrocholesterin (F-08), +700 ml Stillen (F-10). |
| einträge | 16 |
| erstellt | 2026-06-10 (extrahiert aus bausteine-plan.md, Pipeline v9) |

---

### F-01: Makro- und Mikronährstoffe

**Fakt:** Nährstoffe werden nach der benötigten Menge eingeteilt. **Makronährstoffe** (Kohlenhydrate, Fette, Proteine, Wasser, Ballaststoffe) liefern Energie und Baustoffe in Gramm-Mengen. **Mikronährstoffe** (Vitamine, Mineralstoffe, Spurenelemente) wirken in kleinsten Mengen (mg/µg) als Regulatoren. Auch bei kalorisch ausreichender Ernährung kann eine versteckte Unterversorgung an Mikronährstoffen entstehen ("versteckter Hunger").

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 1-2 (Erinnern, Verstehen)
⚠️ Terminologie-Hinweis: Pflege heute teilt Nahrungsbestandteile NICHT in „Makro-/Mikronährstoffe" ein. Die Makro-/Mikronährstoff-Terminologie ist jetzt über Prüfungswissen und I Care Examen kompakt verbatim belegt. Der Begriff **„versteckter Hunger"** ist im Korpus weiterhin nicht verbatim belegt — bleibt als didaktischer Merkbegriff (kursiv kennzeichnen in Content).

**Primärquelle:** (DGE/ÖGE/SGE, D-A-CH-Referenzwerte 2024; I Care Examen kompakt Kap. 18; Prüfungswissen Pflegefachfrau Kap. 1.1.7)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Energieliefernde Nahrungsbestandteile (Kohlenhydrate, Eiweiße, Fette)"  (belegt die Energieträger — entspr. den „Makronährstoffen" Kohlenhydrate/Fette/Proteine)
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Nicht energieliefernde Nahrungsbestandteile (Ballaststoffe, Mineralstoffe, Wasser, Vitamine, sekundäre Pflanzenstoffe)"  (belegt Ballaststoffe + Wasser als eigene Bestandteile sowie Mineralstoffe/Vitamine als nicht-energieliefernde Stoffe)
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "wenigen Millionstel bis Tausendstel Gramm (1 µg–5 mg)"  (belegt Mikronährstoff-Wirkung in mg/µg-Kleinstmengen — siehe auch F-09)
- Quelle: `pruefungswissen-volltext/pruefungswissen.txt`
- Zitat: "Zu den Makronährstoffen gehören Kohlenhydrate, Eiweiße und Fette, zu den Mikronährstoffen gehören Mineralstoffe, Vitamine und sekundäre Pflanzenstoffe."
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "Makronährstoffe: Kohlenhydrate, Fett, Protein, Wasser"
- Zitat: "Mikronährstoffe: Vitamine, Mineralstoffe"
**Praxisfehler:** Mikronährstoff-Mangel wird übersehen, weil der Patient ausreichend Kalorien zu sich nimmt.

**Misconceptions:**
- `M1`: **"Vitamine geben dem Körper Energie"** — Vitamine liefern keine Kalorien, sie wirken als Regulatoren (z.B. Coenzyme). Energie kommt aus Makronährstoffen. Fachbegriff: "Vitamin-Energie-Irrtum".
- `M2`: **"Wasser ist kein Nährstoff, weil es keine Kalorien hat"** — Wasser zählt zu den essentiellen Nährstoffen (Lösungs-/Transportmittel, Temperaturregulation), obwohl es kalorienfrei ist. Kalorien ≠ Nährstoff.
- `M3`: **"Alkohol gehört zu den Nährstoffen"** — Alkohol liefert zwar 7 kcal/g Energie, wird aber als Zellgift nicht zu den regulären Nährstoffen gezählt.

---

### F-02: Kohlenhydrate — Energiegehalt und Anteil

**Fakt:** Kohlenhydrate sind die Hauptenergiequelle des Körpers. Energiewert: **4 kcal pro Gramm** (Atwater; Pflege heute: 4,1 kcal/17,2 kJ). Empfohlener Anteil an der täglichen Nahrungsaufnahme: **55–60%** (Pflege heute Kap. 7; DGE qualitativ: KH liefern >50% der Energie), Schwerpunkt auf komplexen Kohlenhydraten mit Ballaststoffen. Einteilung nach Kettenlänge: Mono-, Di-, Polysaccharide. Glukose ist der Hauptenergielieferant; vor allem die Gehirnzellen können nur Glukose verbrennen. Der Körper kann nur 300–500 g Glukose (als Glykogen) speichern.
⚠️ Quelle beschaffen (DGE D-A-CH Referenzwerte-Tool): Die konkrete Zahl **Gehirn verbraucht ca. 120 g Glukose/Tag** ist im Korpus nicht verbatim belegt (Pflege heute belegt nur qualitativ „nur Glukose verbrennen" + Speicherkapazität 300–500 g).

**Prüfungsrelevanz:** hoch
**Wissensart:** Fakt
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (Pflege heute Kap. 7; Atwater 1899; WHO 2015 Guideline Sugars intake; 120-g-Gehirnglukose: ⚠️ lokal nicht verifizierbar)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "1 g Kohlenhydrate liefert 4,1 kcal (17,2 kJ)"
- Zitat: "Täglicher Bedarf: 55–60 % der Gesamtnahrungsaufnahme"
- Zitat: "Vor allem die Zellen des Gehirns können nur Glukose verbrennen"
- Zitat: "der menschliche Körper kann nur 300–500 g Glukose speichern"
- Quelle: `leitlinien-volltext/who-zucker-2015.txt`
- Zitat: "In both adults and children, WHO recommends reducing the intake of free sugars to less than 10% of total energy intake"
- Zitat: "WHO suggests a further reduction of the intake of free sugars to below 5% of total energy intake (conditional recommendation"
**Praxisfehler:** Kohlenhydrate pauschal als "Dickmacher" weglassen statt komplexe KH (Vollkorn, Hülsenfrüchte) zu bevorzugen.

**Misconceptions:**
- `M1`: **"Obst enthält schädlichen Zucker wie Haushaltszucker"** — Es wird unterschieden zwischen freiem Zucker (Haushaltszucker, Saft, Honig) und Zucker in ganzen Früchten (mit Ballaststoffen, Vitaminen), der anders zu bewerten ist. Fachbegriff: "Fruchtzucker-Irrtum". (WHO-Schwelle freier Zucker <10%/<5%: verbatim belegt, WHO 2015 — siehe Beleg-Block F-02.)
- `M2`: **"Kohlenhydrate soll man weglassen, weil sie dick machen"** — Kohlenhydrate sollen mit 55–60% den größten Nahrungsanteil stellen (Pflege heute). Dick macht eine positive Energiebilanz, nicht KH an sich. Fachbegriff: "Low-Carb-Mythos".
- `M3`: **"Ballaststoffe sind Kohlenhydrate, die viel Energie liefern"** — Ballaststoffe sind Polysaccharide, aber für den Menschen unverdaulich und liefern fast keine Energie.

---

### F-03: Fette — Energiedichte und Fettsäure-Qualität

**Fakt:** Fette (Lipide) sind die energiedichteste Nährstoffgruppe: **9 kcal pro Gramm** (Atwater; Pflege heute: 9,3 kcal/38,9 kJ) — mehr als doppelt so viel wie KH/Protein. Empfohlener Anteil an der täglichen Nahrungsaufnahme: **25–30%** (Pflege heute Kap. 7). Entscheidend ist die Qualität: gesättigte Fettsäuren erhöhen das „schlechte" LDL-Cholesterin und sollten möglichst wenig verzehrt werden; ungesättigte Fettsäuren (Olivenöl, Rapsöl, Fisch) sind günstiger. Mehrfach ungesättigte (essentielle) Fettsäuren kann der Körper nicht selbst herstellen.
⚠️ Quelle beschaffen (DGE D-A-CH Referenzwerte-Tool / Fett-Kapitel): Der konkrete Schwellenwert **gesättigte Fettsäuren <10% der Tagesenergie** ist im lokalen Korpus NICHT belegt — Pflege heute formuliert nur qualitativ („möglichst wenig").

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 7; Atwater 1899; gesättigt-<10%-Schwellenwert: ⚠️ lokal nicht verifizierbar)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "1 g Fett liefert 9,3 kcal"
- Zitat: "Täglicher Bedarf: 25–30 % der Gesamtnahrungsaufnahme"
- Zitat: "Gesättigte Fettsäuren erhöhen das"
**Praxisfehler:** Fett komplett meiden — führt zu Mangel an fettlöslichen Vitaminen (A, D, E, K) und essentiellen Fettsäuren.

**Misconceptions:**
- `M1`: **"Fett macht fett — am besten gar kein Fett essen"** — Der Körper braucht Fett für Zellmembranen, fettlösliche Vitamine und essentielle Fettsäuren. Wichtig ist die Qualität, nicht die Abwesenheit. Fachbegriff: "Fettfrei-Mythos".
- `M2`: **"Alle pflanzlichen Fette sind gesund"** — Palmöl und Kokosöl sind pflanzlich, enthalten aber viele gesättigte Fettsäuren; gehärtete Fette können Trans-Fettsäuren enthalten. Fachbegriff: "Pflanzenfett-Trugschluss".
- `M3`: **"Cholesterin muss man komplett vermeiden"** — Der Körper stellt Cholesterin selbst her und braucht es; entscheidend ist die Menge gesättigter Fette, nicht Nahrungscholesterin allein.

---

### F-04: Proteine — Funktion und Aminosäuren

**Fakt:** Proteine (Eiweiße) sind die Baustoffe des Körpers. Energiewert: **4 kcal pro Gramm** (Pflege heute: 4,1 kcal). Empfohlener Anteil an der täglichen Nahrungsaufnahme: **10–15%** (Pflege heute Kap. 7); erhöhter Bedarf in Wachstum, Schwangerschaft, Stillzeit und Alter. Sie bestehen aus 20 Aminosäuren, davon **9 essentiell** (müssen über die Nahrung aufgenommen werden). Tierisches Protein hat meist höhere biologische Wertigkeit; Kombination pflanzlicher Quellen steigert die Wertigkeit.
Der Referenzwert **0,8–1 g/kgKG/Tag für gesunde Erwachsene** ist über I Care Examen kompakt (Tab. 18.1) belegt. Für Senioren ist die Spanne **0,8–1,5 g/kgKG** nun zusätzlich über I Care Pflege verbatim belegt; bei mangelernährten älteren Patienten nennt I Care Pflege die Regel **„mindestens 1,0 g/kg Körpergewicht" (Schuetz et al. 2017)**. Der Fakt führt daher den belegten Wert "0,8–1,5 g/kgKG für Senioren (erhöhter Bedarf)" mit 1,0 g/kg als Untergrenze bei Mangelernährung.

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 7; I Care Examen kompakt Tab. 18.1 + Kap. 18.3.4)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "neun davon kann der Körper nicht selbst herstellen, sie müssen mit der Nahrung aufgenommen werden"
- Zitat: "Tierisches Eiweiß hat für den Menschen eine höhere biologische Wertigkeit"
- Zitat: "Täglicher Bedarf: 10–15 % der Gesamtnahrungsaufnahme"
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "15–20 % der Energiezufuhr (0,8–1 g/kgKG/Tag)"
- Zitat: "ausreichende Proteinmengen (0,8–"
- Zitat: "der Proteinbedarf steigt"
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Auf ausreichende Proteinmengen (zwischen 0,8 und" (Forts. „1,5 g/kgKG) sollte geachtet werden" — belegt Senioren-Proteinspanne 0,8–1,5 g/kgKG)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "tägliche Proteinzufuhr von mindestens 1,0 g/kg Körpergewicht" (Schuetz et al. 2017 — belegt 1,0-g/kg-Untergrenze bei mangelernährten älteren Patienten)
**Praxisfehler:** Bei älteren/mangelernährten Patienten zu wenig Protein anbieten — fördert Muskelabbau und schlechte Wundheilung.

**Misconceptions:**
- `M1`: **"Nur Fleisch enthält hochwertiges Eiweiß"** — Durch geschickte Kombination pflanzlicher Proteine (Kartoffeln + Ei, Reis + Bohnen) erreicht man hohe biologische Wertigkeiten. Fachbegriff: "Tier-Protein-Monopol-Irrtum".
- `M2`: **"Je mehr Eiweiß, desto besser"** — Ein sehr hoher Eiweißüberschuss belastet Stoffwechsel und Nieren (Pflege heute: „Eiweißüberschuss belastet … die Nieren"); Überschuss wird nicht als Eiweiß gespeichert. Für gesunde Erwachsene gilt 0,8–1 g/kgKG/Tag als Orientierungswert (I Care Examen kompakt Tab. 18.1).
- `M3`: **"Ältere brauchen weniger Eiweiß, weil sie weniger aktiv sind"** — Das Gegenteil ist fachlicher Konsens: Im Alter steigt der relative Proteinbedarf zur Vorbeugung von Muskelabbau. I Care Examen kompakt nennt für Senioren "ausreichende Proteinmengen (0,8–1,5 g/kgKG)" und formuliert: "der Proteinbedarf steigt".

---

### F-05: Atwater-Faktoren / Energiedichte-Vergleich

**Fakt:** Die physiologischen Brennwerte (Atwater-Faktoren) sind die Umrechnungswerte zwischen Masse und Energie. Pflege heute nennt: **Kohlenhydrate 4,1 kcal/g (17,2 kJ)**, **Eiweiß 4,1 kcal/g (17,2 kJ)**, **Fett 9,3 kcal/g** (gerundet: KH 4, Prot 4, Fett 9 kcal/g). **Wasser 0 kcal/g** (siehe F-01/M2). Fett ist über doppelt so energiedicht wie KH oder Eiweiß — relevant bei Mangelernährung (Anreicherung mit Sahne/Öl) und Übergewicht (Fettreduktion). ⚠️ Quelle beschaffen (DGE/Atwater-Originalwerte): Die häufig zitierten Rundwerte **Alkohol 7 kcal/g** und **Ballaststoffe ~2 kcal/g** sind im lokalen Korpus nicht belegt (Alkohol-7-kcal kommt nur in F-01/M3 und F-05/M3 als didaktische Aussage vor, ohne Primärbeleg).

**Prüfungsrelevanz:** hoch
**Wissensart:** Fakt
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (Pflege heute Kap. 7; DGE 2024; Alkohol/Ballaststoffe: ⚠️ lokal nicht verifizierbar)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "1 g Kohlenhydrate liefert 4,1 kcal (17,2 kJ)"
- Zitat: "1 g Eiweiß liefert"
- Zitat: "1 g Fett liefert 9,3 kcal"
- Zitat: "1 kcal entspricht 4,185 kJ"
**Praxisfehler:** Bei Mangelernährung wird die Portion vergrößert statt energetisch angereichert (Fett/Sahne) — der Patient schafft die Menge nicht.

**Misconceptions:**
- `M1`: **"Kalorien aus Zucker sind schlechter als Kalorien aus Öl"** — 1 kcal ist physikalisch 1 kcal; entscheidend für die Gesundheit ist das Gesamtpaket (Vitamine, Ballaststoffe, Sättigung), nicht die Kalorie selbst. Fachbegriff: "Kalorien-Hierarchie-Irrtum".
- `M2`: **"Wasser hat Kalorien"** — Wasser hat 0 kcal, liefert keine Energie, ist aber essentieller Nährstoff.
- `M3`: **"Alkohol hat keine Kalorien, weil er flüssig ist"** — Alkohol liefert 7 kcal/g, fast so viel wie Fett; flüssige Kalorien werden oft unterschätzt.

---

### F-06: Ballaststoffe

**Fakt:** Ballaststoffe sind weitgehend unverdauliche, vorwiegend pflanzliche Polysaccharide. Sie regen u. a. die Darmperistaltik an und erhalten die physiologische Darmflora (Pflege heute). Zwei Typen: wasserlöslich (Pektine, Beta-Glucane — senken Cholesterin, verlangsamen Blutzuckeranstieg) und wasserunlöslich (Cellulose, Lignin — fördern Darmbewegung, beugen Obstipation vor). Bei Erhöhung der Zufuhr Trinkmenge mitsteigern.
⚠️ Quelle beschaffen (DGE D-A-CH Referenzwerte-Tool, Ballaststoff-Kapitel 2021): Der **DGE-Richtwert ≥ 30 g/Tag** (sowie der Vergleichswert „Realität DE 20–25 g" und „≥ 1,5 l/Tag") ist im lokalen Korpus NICHT verbatim belegt.

**Prüfungsrelevanz:** mittel
**Wissensart:** Konzept
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 7; ≥30-g-Richtwert: ⚠️ lokal nicht verifizierbar)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ballaststoffe sind weitgehend unverdauliche Polysaccharide"
- Zitat: "Ballaststoffe regulieren u. a. die Darmperistaltik und erhalten die physiologische Darmflora"
**Praxisfehler:** Ballaststoffreiche Kost ohne ausreichende Flüssigkeit ansetzen — führt zu Verstopfung und Bauchbeschwerden.

**Misconceptions:**
- `M1`: **"Ballaststoffe sind nur wichtig bei Verstopfung"** — Sie wirken auf mehreren Ebenen: Darmgesundheit, Herz-Kreislauf (Cholesterin), Blutzucker, Sättigung. Gehören in jede tägliche Ernährung. Fachbegriff: "Ballaststoff-Indikations-Verengung".
- `M2`: **"Ballaststoffe sind dasselbe wie Bauchfett"** — Ballaststoffe sind unverdauliche Pflanzenfasern im Essen; Bauchfett ist Körperfett. Sie helfen sogar gegen Übergewicht.
- `M3`: **"Ballaststoffe kann man beliebig hoch dosieren"** — Plötzliche Steigerung (besonders ohne Trinken) macht Blähungen, Bauchschmerzen; sehr hohe Mengen können Mineralstoffaufnahme verschlechtern.

---

### F-07: Vitamine — Löslichkeit (fett- vs. wasserlöslich)

**Fakt:** Vitamine sind lebensnotwendige (essenzielle) organische Verbindungen, die der Körper (bis auf Ausnahmen) nicht selbst bilden kann. Einteilung nach Löslichkeit: **Fettlöslich** sind A, D, E, K (Merkhilfe "EDEKA") — werden im Körper gespeichert, Überdosierung kann zu Vergiftungserscheinungen führen. **Wasserlöslich** sind die B-Komplex-Vitamine (B1, B2, B6, B12, Niacin, Biotin, Pantothensäure, Folsäure) und Vitamin C — Überschuss wird über die Nieren ausgeschieden, eine Überdosierung ist nicht möglich; hitze-/licht-/sauerstoffempfindlich. Damit benennt Pflege heute insgesamt 13 Vitamine (4 fettlöslich + 9 wasserlöslich).

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (Pflege heute Kap. 7; „13"-Gesamtzahl = Summe der bei Pflege heute aufgezählten 4 + 9 Vitamine)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Wasserlösliche Vitamine werden bei einer übermäßigen Aufnahme über die Nieren ausgeschieden"
- Zitat: "Fettlösliche Vitamine: Vitamin A, Vitamin"
- Zitat: "Wasserlösliche Vitamine: Vitamin B1, Vitamin B2, Vitamin B6, Vitamin B12, Niacin, Biotin, Pantothensäure, Folsäure, Vitamin C"
**Praxisfehler:** Fettlösliche Vitamine (z.B. Vitamin A aus Möhren) ohne Fett servieren — der Körper nimmt sie schlecht auf.

**Misconceptions:**
- `M1`: **"Vitamin D ist wasserlöslich"** — Vitamin D ist fettlöslich (das D in EDEKA), wird in Fettgewebe/Leber gespeichert. Fachbegriff: "Vitamin-D-Einordnungs-Fehler".
- `M2`: **"Vitamin C kann man überdosieren und sich vergiften"** — Vitamin C ist wasserlöslich; Überschuss wird über den Urin ausgeschieden, eine klassische Hypervitaminose gibt es praktisch nicht.
- `M3`: **"Vitamin B12 braucht man nicht extra, es ist überall drin"** — B12 kommt fast ausschließlich in tierischen Produkten vor; bei veganer Ernährung ist Supplementierung Pflicht.

---

### F-08: Vitamin D — Sonderstellung und Mangel

**Fakt:** Vitamin D (Calciferol) nimmt eine Sonderstellung ein: Es kann im Körper unter Sonnenlicht-Einfluss gebildet werden — Pflege heute spricht von „fehlender Bildung im Körper" als Supplementierungs-Indikation. Funktionen: Knochenbildung, Aufnahme von Kalzium und Phosphaten (Knochen), Muskelfunktion (Sturzprävention). Vitamin D (v.a. bei älteren Menschen) ist eine der wenigen relevanten Mangel-Ausnahmen in Deutschland. Empfehlung bei fehlender Eigensynthese (Pflege heute, Osteoporoseprävention): **Vitamin D 10–20 µg/Tag**. Die DGE/D-A-CH-Referenzwerte bestätigen qualitativ, dass ab dem 50.–60. Lebensjahr für Vitamin D eine höhere Zufuhr empfohlen wird; der obere Grenzwert für Erwachsene liegt bei 50 µg/Tag. Risikogruppen: Ältere, Pflegeheimbewohner, dunkle Haut, Vollverschleierung, Säuglinge. Mangelfolgen: Rachitis (Kinder), Osteomalazie, Begünstigung der Osteoporose, Muskelschwäche, erhöhtes Sturzrisiko. Der Synthese-Mechanismus ist über I Care Anatomie nun präziser belegt: **Cholecalciferol** wird in der Haut aus **Cholesterin** unter Sonneneinstrahlung gebildet und in Leber und Niere zur aktiven Form (1,25-Dihydroxycholecalciferol) umgewandelt. ⚠️ Quelle beschaffen (DGE D-A-CH-Referenzwerte, Einzelnährstoff-Tabelle): Der konkrete **Vitamin-D-Referenzwert von 20 µg/Tag (= 800 IE) bei fehlender Eigensynthese** steht NICHT verbatim im lokalen DGE-Extrakt. Der biochemische Fachbegriff "7-Dehydrocholesterin" als exakte Vorstufe bleibt im Korpus unbelegt (I Care Anatomie nennt nur „Cholesterin" als Ausgangsstoff).

**Prüfungsrelevanz:** hoch
**Wissensart:** Fakt
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (Pflege heute Kap. 7/26/29; DGE/D-A-CH-Referenzwerte — qualitativ + oberer Grenzwert; Hoehl/Kullick Kinderkrankenpflege Kap. Rachitisprophylaxe; 20 µg/800 IE-Referenzwert: ⚠️ lokal nicht verifizierbar)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Knochenbildung"
- Zitat: "Aufnahme von Kalzium und Phosphaten"
- Zitat: "Vitamin D (10–20 µg/Tag bei fehlender Bildung im Körper)"
- Zitat: "Osteomalazie (➔ 33.10.4), Rachitis"
- Zitat: "Vitamin D (v. a. bei älteren Menschen"
- Quelle: `leitlinien-volltext/dge-dach-referenzwerte.txt`
- Zitat: "Etwa ab dem 50. bis 60. Lebensjahr wird für einzelne Nährstoffe eine höhere Zufuhr empfohlen"
- Quelle: `kinderkrankenpflege-volltext/kinderkrankenpflege.txt`
- Zitat: "Es liegt in der Haut als Vorstufe vor und benötigt zur Aktivierung UV-Strahlen."
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "Bei ausreichender Sonneneinstrahlung kann sein Ausgangsstoﬀ, das Cholecalciferol, in der" (Forts. „Haut aus Cholesterin (S.36) gebildet werden" — belegt Hautsynthese aus Cholesterin unter Sonnenlicht)
- Quelle: `icare-anatomie-volltext/icare-anatomie.txt`
- Zitat: "In den Keratinozyten wird bei Sonneneinstrahlung aus Cholesterin das Cholecalciferol gebildet." (belegt Bildungsort Keratinozyten der Haut)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Bei langer Bettlägerigkeit sollte über eine Vitamin-D-Gabe" (Forts. „nachgedacht werden, da die körpereigene Synthese durch das fehlende Sonnenlicht unterbleibt" — belegt Supplementierung bei fehlender Eigensynthese im Pflegekontext)
**Praxisfehler:** Bei Pflegeheimbewohnern wird der Vitamin-D-Status nicht beachtet — obwohl Supplementierung Stürze und Frakturen nachweislich senkt.

**Misconceptions:**
- `M1`: **"Im Sommer 15 Minuten Sonne reichen fürs ganze Jahr"** — Sommer-Speicher reichen nur 2-3 Wintermonate; ab Oktober sinken die Serumspiegel. Fachbegriff: "Sommer-Speicher-Mythos".
- `M2`: **"Vitamin D bekommt man aus Obst und Gemüse"** — Obst/Gemüse enthalten kaum Vitamin D; Hauptquellen sind fette Seefische, Eigelb, UV-bestrahlte Pilze.
- `M3`: **"Vitamin-D-Supplementierung ist gefährlich"** — Die DGE-Menge (20 µg/800 IE) ist weit unter der schädlichen Dosis (>100 µg/4000 IE dauerhaft); bei Risikogruppen senkt sie Stürze und Frakturen.

---

### F-09: Mineralstoffe und Spurenelemente

**Fakt:** Mineralstoffe sind lebensnotwendige Stoffe, die der Körper nicht selbst bilden kann. Einteilung nach ihrem Gehalt im Körper (Pflege heute): **Mengenelemente** — werden in größeren Mengen (bis über 1 kg beim Kalzium) gespeichert: Natrium, Kalium, Kalzium, Chlor, Phosphor, Schwefel, Magnesium. **Spurenelemente** — werden nur in Kleinstmengen (1 µg–5 mg) täglich benötigt: Eisen, Kobalt, Chrom, Kupfer, Mangan, Molybdän, Selen, Zink, Jod, Fluor. Häufige Mangelzustände in Deutschland: Eisenmangel (Frauen im gebärfähigen Alter, Schwangere), Jodmangel (DE ist Jodmangelgebiet — Jodsalz wichtig), Magnesiummangel.
I Care Examen kompakt belegt die Abgrenzung nach **Körpertrockenmasse** (mg/kg), nicht nach Tagesbedarf: Mengenelemente >50 mg/kg Körpertrockenmasse, Spurenelemente <50 mg/kg Körpertrockenmasse. Diese Definition stimmt mit dem bisherigen Fakt-Text überein. Die ⚠️ für "50-mg-Tagesbedarfsgrenze" ist damit aufgelöst — diese Abgrenzungsart wird im Fakt nicht verwendet.

**Prüfungsrelevanz:** mittel
**Wissensart:** Klassifikation
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 7; I Care Examen kompakt Kap. 18.1.2.2)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "werden Mineralstoffe in Mengen- und Spurenelemente unterschieden"
- Zitat: "Mengenelemente werden in größeren Mengen"
- Zitat: "Spurenelemente werden nur in Kleinstmengen"
- Zitat: "wenigen Millionstel bis Tausendstel Gramm (1 µg–5 mg)"
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "Mengenelemente (> 50 mg/kg Körpertrockenmasse): Natrium, Kalium, Kalzium, Magnesium, Chlorid, Phosphor und Schwefel"
- Zitat: "Spuren- oder Mikroelemente (< 50 mg/kg Körpertrockenmasse): Eisen, Jod, Fluorid, Zink, Selen, Kupfer, Mangan, Chrom, Molybdän, Kobalt, Nickel"
**Praxisfehler:** Muskelkrämpfe pauschal mit Magnesium behandeln, ohne die Ursache (Natriummangel, Dehydrierung, Medikamente) abzuklären.

**Misconceptions:**
- `M1`: **"Spurenelemente sind weniger wichtig als Mengenelemente"** — "Spur" heißt nur "wenig Menge" (1 µg–5 mg täglich), nicht "weniger wichtig". Jod wird nur in Kleinstmengen benötigt (ca. 150–200 µg/Tag für Jugendliche und Erwachsene; Prüfungswissen Pflegefachfrau), ist aber unverzichtbar für die Schilddrüse. Fachbegriff: "Mengen-Wichtigkeits-Verwechslung".
- `M2`: **"Jodsalz ist künstlich und sollte vermieden werden"** — Deutschland ist Jodmangelgebiet; jodiertes Speisesalz ist eine der wichtigsten Maßnahmen gegen Struma und Kretinismus.
- `M3`: **"Magnesium-Präparate helfen immer bei Muskelkrämpfen"** — Krämpfe haben viele Ursachen; nur bei echtem Magnesiummangel hilft Supplementierung. Diagnostik vor Supplement.

---

### F-10: Flüssigkeitsbedarf

**Fakt:** Wasser ist mengenmäßig der größte Körperbestandteil: Der Körper eines Erwachsenen besteht zu **ca. 60%** aus Wasser, bei Neugeborenen zu ca. **80%** (Pflege heute Kap. 7). Flüssigkeitsbedarf ist von Lebensalter und Körpergewicht abhängig; Erwachsene (bis 50 J.) benötigen **ca. 35 ml/kg KG/Tag** (Pflege heute Tab. 7.6). Diese Gesamtflüssigkeitsmenge wird zu einem Teil über die Nahrung gedeckt (Pflege heute: ~0,33 ml je zugeführter kcal), der Rest ist Trinkmenge. Mehrbedarf u. a. bei Fieber, Diarrhö, Erbrechen, starkem Schwitzen. Senioren-Problem: vermindertes Durstempfinden → hohes Dehydratationsrisiko → aktive Trinkbegleitung und Trinkprotokoll.
Die Faustregel **+500 ml/°C Fieber** ist über I Care Examen kompakt belegt (Perspiratio insensibilis). Der **DGE-Trinkmengenrichtwert „ca. 1,5 l"** ist qualitativ belegt (I Care Examen kompakt: "ca. 1,5–3 l täglich"). Die Zusatzregel **+700 ml beim Stillen** ist im Korpus NICHT verbatim belegt — bleibt ⚠️.

**Prüfungsrelevanz:** hoch
**Wissensart:** Fakt
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute Kap. 7 Tab. 7.5/7.6; I Care Examen kompakt Kap. 18.1.1.5 + Tab. 18.4 + Merke Perspiratio; +700 ml Stillen: ⚠️ lokal nicht verifizierbar)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Der Flüssigkeitsbedarf ist von Lebensalter und Körpergewicht abhängig"
- Zitat: "besteht der Körper eines Erwachsenen zu ca. 60 % (bei Neugeborenen sind es 80 %)"
- Zitat: "Erwachsene benötigen ca. 35 ml/kg KG"
- Zitat: "erhöht z. B. bei Erbrechen, Diarrhö, Fieber"
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "Bei Fieber rechnet man zusätzlich pro Tag ca. 500 ml Flüssigkeitsverlust pro 1°C erhöhter Temperatur."
- Zitat: "Zufuhrmenge: ca. 1,5–3 l täglich"
**Praxisfehler:** Auf Durst warten statt aktiv zum Trinken zu motivieren — bei Senioren ist Durst ein später, unzuverlässiger Indikator.

**Misconceptions:**
- `M1`: **"Kaffee zählt nicht zur Flüssigkeitsbilanz, weil er entwässert"** — Bei gewohnheitsmäßigem Konsum ist die Bilanz neutral bis positiv; Kaffee und Tee zählen zur Trinkmenge (EFSA 2015). Fachbegriff: "Kaffee-Diuretika-Mythos".
- `M2`: **"Durst ist ein zuverlässiges Zeichen für Flüssigkeitsmangel"** — Durst ist ein später Indikator (oft schon 0,5-1 l Defizit); bei Senioren zusätzlich abgeschwächt.
- `M3`: **"Viel trinken ist immer gesund — je mehr, desto besser"** — Überhydrierung (>3-4 l ohne Grund) kann zu Hyponatriämie führen; bei Herz-/Niereninsuffizienz strikte Bilanz.

---

### F-11: Energiebedarf berechnen (Grundumsatz × PAL)

**Fakt:** Der Gesamtenergiebedarf = **Grundumsatz + Leistungsumsatz**. Grundumsatz (Energie in völliger Ruhe): Faustregel ~24 kcal/kg KG/Tag (Pflege heute altersabhängig: 20-30 J. 25, 30-70 J. 22,5, >70 J. 20 kcal/kg). Leistungsumsatz wird über den **PAL-Wert** (Physical Activity Level) ausgedrückt: 1,2 (bettlägerig) bis 2,0-2,4 (Schwerarbeit). Gesamtbedarf = Grundumsatz × PAL. Pflege-Faustregel: ~30 kcal/kg KG/Tag bei mittlerer Aktivität; bei Mangelernährung 35-40 kcal/kg zum Aufbau (DGEM 2019).

**Prüfungsrelevanz:** hoch
**Wissensart:** Fakt
**Bloom-Potential:** 4 (Analysieren / Berechnen)
**Primärquelle:** (DGE/D-A-CH-Referenzwerte — Energierichtwert = Grundumsatz × PAL; FAO/WHO/UNU 2004; Harris/Benedict 1919; DGEM 2019)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Gesamtenergiebedarf = Grundumsatz + Leistungsumsatz"
- Zitat: "Im Alter nimmt der Grundumsatz ab"
- Quelle: `leitlinien-volltext/dge-dach-referenzwerte.txt`
- Zitat: "Richtwert für die Energiezufuhr ="
- Zitat: "Der Richtwert für die Energiezufuhr wird als ein Mehrfaches des Grundumsatzes angegeben"
- Zitat: "kann der PAL-Wert zwischen"
**Praxisfehler:** Bei kranken/älteren Patienten pauschal "weniger Kalorien" annehmen — bei Fieber, Wundheilung und OP ist der Bedarf oft erhöht.

**Misconceptions:**
- `M1`: **"Der Grundumsatz ist bei allen gleich — nur Bewegung macht den Unterschied"** — Der Grundumsatz hängt ab von Alter, Geschlecht, Körpergröße, Muskelmasse, Hormonlage. Fachbegriff: "Grundumsatz-Uniformitäts-Irrtum".
- `M2`: **"Ältere Menschen brauchen im Krankenhaus weniger Kalorien"** — Bei Krankheit (Fieber +13%/°C, Wundheilung, OP) ist der Bedarf oft erhöht; bei Mangelernährung 35-40 kcal/kg.
- `M3`: **"Wer abnehmen will, sollte unter den Grundumsatz essen"** — Unter dem Grundumsatz essen fördert Muskelabbau, Nährstoffmangel und Jojo-Effekt; empfohlen max. 500 kcal unter Gesamtbedarf.

---

### F-12: Nährstoffverteilung und DGE-Regeln

**Fakt:** Eine vollwertige Ernährung verteilt sich auf die drei energieliefernden Makronährstoffe (Anteile nach Pflege heute Kap. 7): **Kohlenhydrate 55–60%**, **Fett 25–30%**, **Eiweiß 10–15%** der täglichen Nahrungsaufnahme. Praktische Plattenregel: ½ Gemüse/Obst, ¼ Beilage (Vollkorn, Kartoffeln), ¼ Proteinquelle. Der DGE-Ernährungskreis dient als Wegweiser für die Lebensmittelauswahl.
Die DGE-Prozentwerte für Erwachsene (>50% KH, 30% Fett, 15–20% Protein) sind jetzt über I Care Examen kompakt Tab. 18.1 verbatim belegt. Hinweis: Die DGE-Werte für Erwachsene (>50% KH; 30% Fett; 15–20% Protein) weichen leicht von den Pflege-heute-Werten (55–60% KH; 25–30% Fett; 10–15% Protein) ab — beide Quellen werden im Fakt ausgewiesen.

**Prüfungsrelevanz:** mittel
**Wissensart:** Fakt
**Bloom-Potential:** 4 (Analysieren / Berechnen)
**Primärquelle:** (Pflege heute Kap. 7; I Care Examen kompakt Tab. 18.1 [DGE-Werte Erwachsene])
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "zeigt die ideale Zusammensetzung für eine vollwertige Ernährung"
- Zitat: "Täglicher Bedarf: 55–60 % der Gesamtnahrungsaufnahme"
- Zitat: "Täglicher Bedarf: 25–30 % der Gesamtnahrungsaufnahme"
- Zitat: "Täglicher Bedarf: 10–15 % der Gesamtnahrungsaufnahme"
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "> 50 % der gesamten Energiezufuhr"
- Zitat: "30 % der gesamten Energiezufuhr"
- Zitat: "15–20 % der Energiezufuhr (0,8–1 g/kgKG/Tag)"
**Praxisfehler:** Bei der Mahlzeitenplanung nur auf die Kalorienzahl achten, nicht auf eine ausgewogene Makronährstoff-Verteilung.

**Misconceptions:**
- `M1`: **"Eine gesunde Ernährung besteht vor allem aus Eiweiß"** — Den größten Anteil (55–60%) sollen Kohlenhydrate liefern, Eiweiß nur 10–15% (Pflege heute). Plattenregel: Gemüse/Obst dominiert.
- `M2`: **"Fett sollte man weglassen, Kohlenhydrate sind immer gut"** — Empfohlen sind ~25–30% Fett (Qualität entscheidend) und KH vorwiegend komplex; einseitige Verteilung ist nicht vollwertig.
- `M3`: **"Die 10 DGE-Regeln gelten nur für gesunde Menschen"** — Sie sind die Basis jeder vollwertigen Ernährung; krankheitsbedingte Kostformen bauen darauf auf.

---

### F-13: Kulturelle und religiöse Ernährung (kultursensible Pflege)

**Fakt:** Ernährung ist tief mit Kultur, Religion und Identität verbunden. Wichtige Regeln: **Islam** (kein Schweinefleisch, kein Alkohol, halal, Ramadan-Fasten — Kranke befreit, fasten aber oft trotzdem), **Judentum** (koscher: kein Schwein, Fleisch und Milch getrennt), **Hinduismus** (oft vegetarisch, kein Rind), **Buddhismus** (häufig vegetarisch). Zentral: individuell nachfragen, nicht pauschalisieren; Küche informieren; Angehörige dürfen Speisen mitbringen. Kultursensible Pflege ist laut § 5 PflBG Ausbildungsziel.

**Prüfungsrelevanz:** mittel
**Wissensart:** Entscheidung / Handlung
**Bloom-Potential:** 5 (Bewerten)
**Primärquelle:** (Pflege heute Kap. 15.3 Religionen; § 5 PflBG)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "allen muslimischen Patienten das gleiche Essen wie anderen Patienten"
- Zitat: "Der Verzehr anderer Fleischsorten ist nur erlaubt (halal), wenn die Schlachtung nach islamischem Ritus (Schächten) durchgeführt wurde"
- Zitat: "Im Fastenmonat Ramadan dürfen Gläubige nur zwischen Sonnenuntergang und"
- Zitat: "kranke und schwache Menschen sind von"
- Zitat: "Strenggläubige Juden dürfen nur Speisen zu sich nehmen, die koscher sind"
- Zitat: "darf Fleisch nicht mit Milchprodukten"
- Zitat: "Fast alle Hindus lehnen das Töten von Kühen und das Essen von Rindfleisch"
- Zitat: "Vorschriften gibt es nicht, Vegetarismus wird jedoch oft bevorzugt"
**Praxisfehler:** Allen Angehörigen einer Religion pauschal dasselbe Essen anbieten (z.B. "Muslim = nur ohne Schweinefleisch"), statt individuell nachzufragen.

**Misconceptions:**
- `M1`: **"Alle Muslime essen streng halal und fasten im Ramadan"** — Es gibt große individuelle Unterschiede; Kranke sind vom Fasten befreit, manche fasten trotzdem. Immer fragen. Fachbegriff: "Pauschalisierungs-Fehler".
- `M2`: **"Wenn jemand vegan lebt, ist das nur ein Trend"** — Veganismus kann religiöse, ethische, ökologische oder gesundheitliche Gründe haben; DGE 2024 bewertet vegane Ernährung positiv (mit B12-Ergänzung).
- `M3`: **"Koschere und halale Speisen sind dasselbe"** — Beide verbieten Schwein und fordern rituelle Schlachtung, aber koscher verbietet zusätzlich Fleisch + Milch zusammen; nicht austauschbar.

---

### F-14: Mangelernährung erkennen

**Fakt:** Mangelernährung (Malnutrition) ist nach DGEM ein anhaltendes Defizit an Energie und/oder Nährstoffen (negative Bilanz zwischen Aufnahme und Bedarf). Kriterien: ungewollter Gewichtsverlust **>5% in 3 Monaten oder >10% in 6 Monaten**, ODER **BMI <18,5** (Senioren <20), ODER Nahrungsaufnahme <50% des Bedarfs über >5 Tage. Klinik: Müdigkeit, Sarkopenie, schlechte Wundheilung, Infektanfälligkeit, erhöhtes Dekubitus- und Sturzrisiko. Häufigkeit in DE: ~25% im Krankenhaus, bis 50% im Pflegeheim. Auch übergewichtige Menschen können mangelernährt sein.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Komplikation / Assessment
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (DGEM 2019; DNQP 2017/2024)
**Beleg:**
- Quelle: `dnqp-standards-index/ernaehrungsmanagement.txt`
- Zitat: "anhaltendes Defizit an Energie und/oder Nährstoffen, im Sinne einer negativen Bilanz zwischen Aufnahme und Bedarf"
- Zitat: "auch übergewichtige Menschen eine Mangelernährung aufweisen können"
**Praxisfehler:** Ungewollten Gewichtsverlust im Alter als "normal" abtun statt als Warnzeichen systematisch zu erfassen.

**Misconceptions:**
- `M1`: **"Wer dick ist, kann nicht mangelernährt sein"** — Es gibt adipöse / qualitative Mangelernährung ("Hidden Hunger"): genug Kalorien, aber Mangel an Protein, Vitamin D, B12, Eisen. Fachbegriff: "Adipositas-Mangelernährungs-Paradox".
- `M2`: **"Gewichtsverlust im Alter ist normal"** — Ungewollter Gewichtsverlust ist nie normal, sondern Warnzeichen für Krankheit, Depression oder Mangelernährung; DNQP fordert systematische Früherkennung.
- `M3`: **"Mangelernährung erkennt man nur an der Waage"** — Gewicht ist nur ein Puzzleteil; auch Muskelabbau, Hautturgor, Wundheilung, Laborwerte und Nahrungsanamnese zählen.

---

### F-15: Sonderkostformen

**Fakt:** In der Klinik gibt es definierte Kostformen, die ärztlich/pflegerisch zugeordnet werden (Pflege heute Tab. 7.12). Zentrale Kostformen mit Indikation: **Vollkost** (normale Kost mit normalem Kaloriengehalt), **leichte Vollkost/Schonkost** (leicht verdaulich, nicht blähend, fettarm, ohne scharfes Würzen), **pürierte/passierte Kost** (alle festen Speisen püriert, bei eingeschränktem Kauvermögen/Schluckstörung), **Aufbaukost** (stufenweiser Nahrungsaufbau nach OP/Nahrungskarenz), **energiedefinierte Kost** (reduzierter Kaloriengehalt, Reduktionsdiät bei Adipositas), **kalorienreiche Kost** (bei Untergewicht/Kachexie), sowie eiweiß-/elektrolytdefinierte Diäten (z.B. natriumarme Kost bei Niereninsuffizienz). Tab. 7.12 listet darüber hinaus weitere Diätformen (Diabetes-, fettarme, purinarme, keimarme, glutenfreie Kost).

**Prüfungsrelevanz:** hoch
**Wissensart:** Entscheidung / Handlung
**Bloom-Potential:** 5 (Bewerten / Zuordnen)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7 Tab. 7.12 Kostformen und Diäten)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Normale Kost mit normalem Kaloriengehalt"
- Zitat: "Leicht verdaulich"
- Zitat: "Patienten mit eingeschränktem Kauvermögen"
- Zitat: "Alle festen Speisen sind püriert"
- Zitat: "Kost wird nach einem Schema aufgebaut"
- Zitat: "Reduzierter Kaloriengehalt"
- Zitat: "Patienten mit Untergewicht/Kachexie"
- Zitat: "z. B. natriumarme Kost"
**Praxisfehler:** Nach einer Magen-Darm-OP direkt Vollkost anbieten statt stufenweiser Aufbaukost — Gefahr von Unverträglichkeit/Komplikationen.

**Misconceptions:**
- `M1`: **"Schonkost und Aufbaukost sind dasselbe"** — Schonkost ist eine dauerhaft leicht verdauliche Kostform; Aufbaukost ist ein stufenweises Schema (Tee → Zwieback → Suppe → pürierte → leichte Vollkost).
- `M2`: **"Pürierte Kost ist nur etwas für sehr alte Menschen"** — Sie ist indiziert bei eingeschränktem Kauvermögen oder Schluckstörung (z.B. nach Schlaganfall), unabhängig vom Alter.
- `M3`: **"Diabetiker brauchen eine komplett andere Diät"** — Moderne Diabeteskost orientiert sich an vollwertiger Ernährung (kohlenhydratbewusst), nicht an einer strikten "Sonderdiät".

---

### F-16: Pflegerische Aufgabe und interprofessionelles Ernährungsmanagement

**Fakt:** Der DNQP-Expertenstandard Ernährungsmanagement verpflichtet die Pflegefachkraft, bei allen Patienten/Bewohnern zu Beginn ein **Screening** auf Anzeichen einer drohenden/bestehenden Mangelernährung durchzuführen und bei Auffälligkeiten ein **vertieftes Assessment** anzuschließen. Ziel ist die frühzeitige Erfassung und Bewertung, um einer Mangelernährung entgegenzuwirken. Eine optimale Ernährungsversorgung gelingt nur in enger berufsübergreifender Zusammenarbeit (Pflege, Arzt, Ernährungsfachkraft/Diätassistent, Logopädie, Angehörige).

**Prüfungsrelevanz:** hoch
**Wissensart:** Organisation / Handlung
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (DNQP Expertenstandard Ernährungsmanagement 2017/2024)
**Beleg:**
- Quelle: `dnqp-standards-index/ernaehrungsmanagement.txt`
- Zitat: "frühzeitige Erfassung und Bewertung von Anzeichen einer drohenden oder bestehenden Mangelernährung"
- Zitat: "Eine optimale Ernährungsversorgung ist nur in enger berufsübergreifender Zusammenarbeit"
**Praxisfehler:** Ernährungsprobleme allein als Pflege-Aufgabe behandeln, ohne Arzt, Ernährungsfachkraft oder Logopädie (bei Dysphagie) einzubinden.

**Misconceptions:**
- `M1`: **"Ernährungsmanagement ist Pflege-Sache allein"** — Eine optimale Versorgung gelingt nur interprofessionell; Trinknahrung, Schluckdiagnostik und Diättherapie brauchen weitere Berufsgruppen.
- `M2`: **"Screening macht man nur bei sichtbar mageren Patienten"** — Der DNQP fordert Screening bei ALLEN Patienten zu Beginn, unabhängig vom äußeren Eindruck (auch Übergewichtige).
- `M3`: **"Ein Screening bei Aufnahme reicht"** — Erfassung ist ein fortlaufender Prozess; bei Zustandsänderung ist eine erneute Einschätzung nötig.
