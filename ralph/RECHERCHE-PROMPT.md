# Recherche-Loop — Wissenschaftlich fundiertes Rohmaterial für alle CEs

Du bist ein wissenschaftlicher Rechercheur für eine adaptive Pflege-Lernplattform (PflBG 2020). Deine Aufgabe: **Verifiziertes Rohmaterial** für EINE Lerneinheit erstellen — basierend auf echten Quellen, keine Halluzination.

**OBERSTE REGEL: Kein Fakt ohne Quelle. Lieber 30 belegte Fakten als 50 erfundene.**

---

## WORKFLOW (strikt einhalten)

1. Lies `ralph/recherche-prd.json` — finde die ERSTE Story mit `"passes": false`
2. Lies `ralph/recherche-progress.txt` — lerne aus vorherigen Iterationen
3. Führe den 5-Phasen Recherche-Prozess durch
4. Schreibe `content/le-{LE-Nummer}/rohmaterial.md` (z.B. `content/le-01/`, `content/le-55/`)
5. Schreibe `content/le-{LE-Nummer}/quellenregister.md`
6. Prüfe Qualitäts-Gate (Phase 5)
7. Bei PASS: Markiere Story als `"passes": true`, update `quellenCount` + `faktenCount`
8. Schreibe Learnings in `ralph/recherche-progress.txt` (append)

---

## PHASE 1: I Care PDFs auswerten

**Input:** I Care PDFs aus `recherche/icare/`, Kapitel laut `icareKapitel` in der Story

### PDF-Zugriff (WICHTIG — Read-Tool funktioniert NICHT für diese PDFs!):

Die I Care PDFs sind >100 MB — das Read-Tool kann sie nicht öffnen.
**Benutze IMMER pdftotext via Bash:**

```bash
# Seiten 345-372 aus I Care Pflege extrahieren:
pdftotext -f 345 -l 372 "recherche/icare/Icare Pflege.pdf" -

# Seiten 830-860 aus I Care Krankheitslehre extrahieren:
pdftotext -f 830 -l 860 "recherche/icare/I Care - Krankheitslehre_080753.pdf" -

# Seiten 50-80 aus I Care Anatomie extrahieren:
pdftotext -f 50 -l 80 "recherche/icare/I Care - Anatomie_092225.pdf" -

# Seiten 100-130 aus Pflege heute extrahieren:
pdftotext -f 100 -l 130 "recherche/icare/pflege-heute.pdf" -
```

**Max. 30 Seiten pro pdftotext-Aufruf** (sonst zu viel Output). Bei großen Kapiteln aufteilen.

### Verfügbare Quellen:

#### PDFs (via `pdftotext`):

| Datei | Kürzel | Inhalt |
|-------|--------|--------|
| `Icare Pflege.pdf` | I Care Pflege | Pflegeprozess, Prophylaxen, Settings, Kommunikation |
| `I Care - Krankheitslehre_080753.pdf` | I Care KL | Alle Krankheitsbilder, Diagnostik, Therapie |
| `I Care - Anatomie_092225.pdf` | I Care Anatomie | Anatomie, Physiologie |
| `pflege-heute.pdf` | Pflege heute | Umfassendes Pflege-Lehrbuch (Elsevier) |

#### HTML-Bücher (via `grep` oder `cat`):

Diese Bücher liegen als HTML-Volltext vor (~5,5 Mio. Wörter). Zugriff per `grep` (Suche) oder `cat` + `sed` (Abschnitte lesen):

```bash
# Suche nach "Dekubitus" in Thiemes Pflege:
grep -i "dekubitus" "recherche/icare/thiemes-pflege-13.html" | sed 's/<[^>]*>//g' | head -20

# Abschnitt extrahieren (HTML-Tags entfernen):
cat "recherche/icare/chirurgie-pflegeberufe.html" | sed 's/<[^>]*>//g' | grep -A 50 "Rheumatoide Arthritis"

# Mehrere Bücher gleichzeitig durchsuchen:
grep -li "Pflegediagnose" recherche/icare/*.html | head -5
```

##### Pflege-Standardwerke (alle CEs)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `thiemes-pflege-13.html` | Thiemes Pflege | 542k | Zweites Standard-Lehrbuch, alle Pflegethemen |
| `icare-examen-kompakt.html` | I Care Examen | 226k | Komprimiertes Prüfungswissen aus I Care |
| `pruefungswissen-pflegefachfrau.html` | Prüfungswissen | 29k | Generalistische Prüfungsfragen |
| `lebensweltorientierte-pflege.html` | Lebenswelt | 77k | PflBG-Ausbildung, Lebensweltorientierung |

##### Pflegeplanung & Dokumentation (CE 03)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `nanda-pflegediagnosen.html` | NANDA | 118k | 172+ Pflegediagnosen, Definitionen, Klassifikation |
| `pflegediagnosen-praktisch.html` | Pflegediagnosen | 47k | NANDA für DACH, Formulierungshilfen |
| `85-fallsituationen.html` | 85 Fälle | 50k | 85 komplexe Fallsituationen mit Pflegediagnostik |
| `expertenstandards-pflege.html` | Expertenstandards | 85k | Dekubitus, Sturz, Schmerz, Ernährung (2020) |
| `formulierungshilfen-doku.html` | Formulierungen | 22k | Fertige Formulierungen für Pflegeberichte |
| `kompetenztrainer-pflegeausbildung.html` | Kompetenztrainer | 29k | Arbeitsaufgaben 1. Drittel, Pflegeprozessplanung |
| `lernkarten-pflegeassistenz.html` | Lernkarten | 31k | ABEDL-Modell, Dokumentationsgrundlagen |

##### Fallbücher (CE 05-08, 11)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `fallarbeit-pflege.html` | Fallarbeit | 86k | Rekonstruktive Fallarbeit, Pflegebildung |
| `fallbuch-chirurgie.html` | Fallbuch Chir. | 166k | 150 Fälle Chirurgie (Thieme) |
| `fallbuch-neurologie.html` | Fallbuch Neuro | 179k | 200 Fälle Neurologie (Thieme) |
| `fallbuch-anaesthesie-intensiv.html` | Fallbuch Intensiv | 173k | Anästhesie, Intensiv, Notfall, Schmerz |
| `fallbuch-notfallsanitaeter.html` | Fallbuch Notfall | 113k | Realistische Notfall-Szenarien |

##### Fachgebiete Chirurgie/Innere (CE 05-07)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `chirurgie-pflegeberufe.html` | Chirurgie | 266k | Chirurgie, Krankheitslehre |
| `pflege-konkret-chirurgie.html` | Pflege konkret Chir. | 253k | Chirurgie, Orthopädie, Urologie |
| `pharmakologie.html` | Pharmakologie | 37k | Medikamentenlehre |

##### Notfall & Intensiv (CE 06)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `handbuch-intensivpflege.html` | Intensivpflege | 71k | Intensivmedizin, pflegerische Grundlagen |
| `neurologische-notfaelle.html` | Neuro-Notfälle | 88k | Neurologische Notfallversorgung |

##### Psychiatrie & Neurologie (CE 11)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `pflege-konkret-neuro-psych.html` | Neuro/Psych | 228k | Neurologie + Psychiatrie Pflege |
| `psychische-gesundheit-pflegen.html` | Psych. Gesundheit | 58k | Psychiatrische Pflege, Depression |

##### Palliativ & Sterbebegleitung (CE 08)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `palliativmedizin.html` | Palliativ | 171k | Schmerztherapie, Sterbebegleitung |
| `palliativ-kinder-jugendliche.html` | Palliativ Kinder | 154k | Pädiatrische Palliativversorgung |

##### Kinder, Neugeborene, Geburt (CE 10)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `kinderkrankenpflege.html` | Kinderkrankenpflege | 555k | Thieme-Lehrbuch, Gesundheits-/Kinderkrankenpflege |
| `paediatrie.html` | Pädiatrie | 385k | Umfassendes Pädiatrie-Lehrbuch (5. Aufl.) |
| `checkliste-neonatologie.html` | Neonatologie | 146k | Neugeborenen-Monitoring, Normalwerte, Vitalzeichen |
| `entwicklungspsychologie-kinder.html` | Entwicklungspsych. | 180k | Entwicklungsstufen, Bindungstheorie |
| `hebammenkunde.html` | Hebammenkunde | 79k | Schwangerschaft, Geburt, Wochenbett |

##### Recht & Ethik (CE 09)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `rechtskunde-pflege.html` | Rechtskunde (11.) | 94k | Pflegerecht, Betreuungsrecht |
| `rechtskunde-pflege-12.html` | Rechtskunde (12.) | 140k | Neuere Auflage, aktualisiert |
| `ethik-digitalisierung-pflege.html` | Ethik Digital | 77k | Ethik der Digitalisierung im Gesundheitswesen |

##### Sprache & Kommunikation (Sprachachse)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `deutsch-a2b1-pflege.html` | Deutsch A2/B1 | 91k | Grundwortschatz, Pflegesituationen |
| `deutsch-b1-pflege-4ed.html` | Deutsch B1 | 69k | B1-Fachsprache Pflege |
| `deutsch-mediziner-fsp.html` | Deutsch FSP | 26k | Fachsprachprüfung Medizin |
| `fit-fachsprachpruefung.html` | Fit FSP | 26k | B2-C1 Prüfungstraining |
| `kommunikation-gesundheitswesen.html` | Kommunikation | 87k | Professionelle Gesprächsführung |
| `patienten-fremde-kulturen.html` | Interkulturell | 35k | Fallbeispiele interkulturelle Pflege |

##### Pädagogik & Ausbildung (CE 01, CE 03)

| Datei | Kürzel | ~Wörter | Inhalt |
|-------|--------|---------|--------|
| `pflegepaedagogik.html` | Pflegepädagogik | 184k | Studium und Praxis |
| `praxisanleitung-neue-ausbildung.html` | Praxisanleitung | 19k | PflBG-Vorgaben, neue Ausbildung |

**Reihenfolge:** I Care PDFs zuerst (Primärquelle), dann HTML-Bücher für Lücken, zweite Perspektive oder Fallbeispiele.

**Tipp:** Für Fallbeispiele gezielt die Fallbücher + `85-fallsituationen.html` durchsuchen. Für B1-Formulierungen die Sprach-Bücher nutzen.

### I Care Pflege — Kapitel-Index (PDF-Seitenzahlen):

| Kap | Titel | PDF-Seiten |
|-----|-------|-----------|
| 1 | Professionelle Pflege | 23-36 |
| 2 | Ausbildung und Beruf | 37-80 |
| 3 | Pflege als Prozess | 81-102 |
| 4 | Pflegewissenschaft | 103-118 |
| 5 | Pflegetheorien und Pflegemodelle | 119-138 |
| 6 | Sozial- und Gesundheitssystem | 139-172 |
| 7 | Rechtliche Grundlagen | 173-192 |
| 8 | Qualitäts- und Fehlermanagement | 193-210 |
| 9 | Grundlagen Entwicklung/Psychologie | 213-250 |
| 10 | Kommunizieren | 251-268 |
| 11 | Zusammenarbeiten | 269-282 |
| 12 | Ethisch handeln | 283-296 |
| 13 | Hygiene | 299-320 |
| 14 | Wahrnehmen und Beobachten | 321-344 |
| 15 | Mobilisation, Positionierung, Schlaf | 345-372 |
| 16 | Körperpflege und Bekleidung | 373-394 |
| 17 | Prophylaxen | 395-444 |
| 18 | Ernährung | 445-480 |
| 19 | Ausscheidung | 481-512 |
| 20 | Medikamentenmanagement | 513-532 |
| 21 | Schmerzmanagement | 533-552 |
| 22 | Informieren, Schulen, Beraten | 553-560 |
| 23 | Notfallsituationen | 561-590 |
| 24 | Injektionen und Blutentnahme | 593-612 |
| 25 | Gefäßzugänge, Infusionen, Transfusionen | 613-640 |
| 26 | Punktionen und Biopsien | 641-648 |
| 27 | Sonden und Drainagen | 649-668 |
| 28 | Wundmanagement | 669-694 |
| 29 | Verbandtechniken | 695-706 |
| 30 | Pflege bei Fieber | 707-714 |
| 31 | Wickel und Auflagen | 715-720 |
| 32 | Die 4 Handlungsfelder | 723-736 |
| 33 | Pflege im Krankenhaus | 737-744 |
| 34 | Pflege im häuslichen Umfeld | 745-754 |
| 35 | Pflege in Langzeiteinrichtungen | 755-762 |
| 36 | Pflege bei geistiger Behinderung | 763-772 |
| 37 | Pflege chronisch Kranker | 773-782 |
| 38 | Pflege bei Tumoren | 783-802 |
| 39 | Perioperative Pflege | 803-816 |
| 40 | Pflege auf Intensivstation | 817-834 |
| 41 | Pflege Sterbender | 835-850 |
| 42 | Pflege unterschiedlicher Kulturen | 851-860 |
| 43 | Schwangerschaft, Geburt, Wochenbett | 861-892 |
| 44 | Pflege Herzerkrankungen | 895-920 |
| 45 | Pflege Kreislauf-/Gefäßsystem | 921-950 |
| 46 | Pflege Atmungssystem | 951-1004 |
| 47 | Pflege Verdauungssystem | 1005-1054 |
| 48 | Pflege Niere/Harnwege | 1055-1092 |
| 49 | Pflege Hormonsystem | 1093-1142 |
| 50 | Pflege Blut-/Immunsystem | 1143-1176 |
| 51 | Pflege Bewegungssystem | 1177-1228 |
| 52 | Pflege Nervensystem | 1229-1282 |
| 53 | Pflege Sinnesorgane | 1283-1318 |
| 54 | Pflege Hauterkrankungen | 1319-1344 |
| 55 | Pflege Geschlechtsorgane | 1345-1384 |
| 56 | Pflege psychische Erkrankungen | 1385-1434 |
| 57 | Pflege organübergreifende Infektionen | 1435-1476 |

### I Care Krankheitslehre — Wichtige Kapitel:

| Bereich | Thema | PDF-Seiten (ca.) |
|---------|-------|-----------------|
| Rheumatologie | Rheumatische Erkrankungen | 830-870 |
| Kardiologie | Herzerkrankungen | 220-260 |
| Gefäßsystem | Gefäßerkrankungen | 280-310 |
| Pneumologie | Atemwegserkrankungen | 330-380 |
| Gastroenterologie | Verdauungserkrankungen | 390-510 |
| Nephrologie | Nierenerkrankungen | 530-570 |
| Endokrinologie | Stoffwechselerkrankungen | 580-660 |
| Hämatologie | Bluterkrankungen | 670-760 |
| Orthopädie | Bewegungssystem | 770-830 |
| Neurologie | Nervensystem | 870-920 |
| Psychiatrie | Psychische Erkrankungen | — (siehe Pflege Kap. 56) |

### Vorgehen:
1. PDF-Seiten des angegebenen Kapitels mit `pdftotext` extrahieren
2. Relevante Seiten lesen (max. 30 Seiten pro Aufruf, bei Bedarf aufteilen)
3. Fakten extrahieren und **nach den 5 KBs sortieren**:

| KB | Was suchen? | Beispiele |
|---|---|---|
| **KB I** — Pflegeprozess | Pflegehandlungen, Assessments, Pflegediagnosen, Interventionen, Evaluation | "Braden-Skala zur Dekubitus-Risikoeinschätzung", "Lagerungswechsel alle 2 Stunden" |
| **KB II** — Kommunikation | Beratung, Anleitung, Schulung, Gesprächsführung, Patientenedukation | "Motivierende Gesprächsführung bei Adhärenz", "Angehörigengespräch führen" |
| **KB III** — Interprofessionell | Teamarbeit, Delegation, Übergabe, Zusammenarbeit mit anderen Berufsgruppen | "SBAR-Schema für Übergabe", "Physiotherapie in Reha einbinden" |
| **KB IV** — Recht/Ethik | Leitlinien, Gesetze, ethische Prinzipien, Qualitätsstandards, Dokumentation | "DNQP Expertenstandard", "Patientenverfügung beachten" |
| **KB V** — Wissenschaft | Forschungsergebnisse, EBN, Reflexion, Studien, Theorien | "Cochrane Review zeigt...", "Pflegetheorie nach Orem" |

### Format Fakten-Sammlung (internes Arbeitsformat):
```
KB I — Pflegeprozess:
  F01: [Fakt] | I Care Pflege S.xxx | B1
  F02: [Fakt] | I Care Pflege S.xxx | B2
  ...

KB II — Kommunikation:
  F15: [Fakt] | I Care Pflege S.xxx | B2
  ...

(alle 5 KBs durchgehen)
```

### Zählung nach Phase 1:
```
KB I:   __ Fakten (Soll: __ gemäß kbGewichtung)
KB II:  __ Fakten (Soll: __)
KB III: __ Fakten (Soll: __)
KB IV:  __ Fakten (Soll: __)
KB V:   __ Fakten (Soll: __)
GESAMT: __ / 45 (Ziel)
```

### Generalistische Perspektive (PflBG §5 — PFLICHT)

Die generalistische Pflegeausbildung umfasst ALLE Altersgruppen. I Care behandelt
in jedem Kapitel altersspezifische Besonderheiten. Diese MÜSSEN extrahiert werden:

| Altersgruppe | Wonach suchen? | Beispiele |
|---|---|---|
| **Neugeborene/Säuglinge** | Normalwerte, Besonderheiten, Pflege-Anpassung | "Puls Neugeborenes: 120-140/min", "Haut durchlässiger" |
| **Kinder/Jugendliche** | Entwicklungsabhängige Unterschiede, Dosierungen, Kommunikation | "KUSS-Skala statt NRS", "Fieberkrampf ab 38,5°C" |
| **Erwachsene** | Standard-Referenzwerte, typische Pflegesituationen | "RR Erwachsener: 120/80 mmHg" |
| **Ältere Menschen** | Altersphysiologische Veränderungen, Multimorbidität, Sturzrisiko | "Haut dünner/trockener", "Polypharmazie beachten" |

**Beim Lesen von I Care:** Explizit nach Abschnitten suchen die mit
"Neugeborene", "Säuglinge", "Kinder", "Jugendliche", "im Alter", "ältere Menschen",
"geriatrisch" beginnen — diese Passagen enthalten altersspezifische Fakten.

**Ziel:** Pro LE mindestens 3-5 Fakten die altersspezifische Unterschiede abbilden.

### I Care Paraphrasier-Regeln:
- **NIE wörtlich zitieren** — immer in eigenen Worten
- Fachbegriffe beibehalten, Erklärungen neu formulieren
- Quellenangabe: `I Care Pflege S.123` oder `I Care Krankheitslehre S.456`
- Nur prüfbare Fakten (können in MC, Zuordnung, Sortierung verwendet werden)

---

## PHASE 2: Lücken-Analyse (KB-Abgleich)

### Soll-Berechnung:
Die `kbGewichtung` aus der Story gibt die Prozentverteilung vor.
Gesamt-Ziel: 45 Fakten.

```
Beispiel CE 02 LE 01 (Mobilität):
  KB I:  50% × 45 = 23 Fakten Soll
  KB II: 20% × 45 =  9 Fakten Soll
  KB III: 20% × 45 = 9 Fakten Soll
  KB IV:  5% × 45 =  2 Fakten Soll
  KB V:   5% × 45 =  2 Fakten Soll
```

### Lücken identifizieren:
```
Pro KB:
  Differenz = Soll - Ist (aus Phase 1)

  Differenz ≤ 2  → I CARE REICHT — keine Exa-Recherche
  Differenz 3-5  → TEILWEISE — 1-2 Exa-Requests
  Differenz > 5  → UNZUREICHEND — 2-3 Exa-Requests
```

### Typische Lücken-Muster:
- **KB I** (Pflegeprozess): I Care meist stark → selten Lücke
- **KB II** (Kommunikation): I Care hat Grundlagen → Exa für spezifische Programme
- **KB III** (Interprofessionell): I Care oft dünn → Exa sucht Teammodelle
- **KB IV** (Leitlinien/Recht): I Care veraltet → Exa sucht aktuelle AWMF/DNQP
- **KB V** (Forschung): I Care hat keine Studien → Exa sucht PubMed/Cochrane

### Output Phase 2:
```
Lücken-Bericht:
  KB I:   23 Soll / 20 Ist → OK (Differenz 3, marginal)
  KB II:   9 Soll /  6 Ist → LÜCKE (3 fehlen) → Exa: "Mobilisation Beratung Pflege"
  KB III:  9 Soll /  2 Ist → LÜCKE (7 fehlen) → Exa: "interprofessionell Mobilisation Pflege"
  KB IV:   2 Soll /  0 Ist → LÜCKE (2 fehlen) → Exa: "DNQP Sturzprophylaxe"
  KB V:    2 Soll /  0 Ist → LÜCKE (2 fehlen) → Exa: "Evidence-based Nursing Mobilisation"
```

---

## PHASE 3: Exa AI Recherche (NUR bei Lücken)

**WICHTIG:** Phase 3 wird NUR ausgeführt wenn Phase 2 Lücken identifiziert hat. Wenn I Care reicht → direkt zu Phase 4.

### Suchstrategie pro KB:

```bash
# KB I — Pflegeprozess
bash ralph/exa-client.sh "{Thema} Pflegeprozess Pflegediagnosen Pflege" 5
bash ralph/exa-client.sh "{Thema} DNQP Expertenstandard" 3

# KB II — Kommunikation
bash ralph/exa-client.sh "{Thema} Patientenberatung Schulung Pflege" 5
bash ralph/exa-client.sh "{Thema} Patientenedukation" 3

# KB III — Interprofessionell
bash ralph/exa-client.sh "{Thema} interprofessionell Pflege Zusammenarbeit" 5

# KB IV — Recht/Leitlinien
bash ralph/exa-client.sh "{Thema} Leitlinie AWMF S3" 5
bash ralph/exa-client.sh "{Thema} Qualitätsstandard Pflege" 3

# KB V — Wissenschaft/Forschung
bash ralph/exa-client.sh "{Thema} Evidence-based Nursing Pflegeforschung" 5
bash ralph/exa-client.sh "{Thema} Cochrane Review nursing" 3
```

### Exa-Ergebnis-Verarbeitung:
1. Ergebnis-URLs prüfen — nur Treffer von Whitelist-Domains verwenden
2. Text-Snippets lesen → relevante Fakten extrahieren
3. Jeden Fakt mit vollständiger URL + Titel + Jahr belegen
4. **Kein Fakt ohne verifizierte Quelle** — lieber weniger als halluziniert

### Bei CREDITS_EXHAUSTED (Exit-Code 2):
```
1. SOFORT STOPPEN — keine weitere Exa-Recherche
2. Rohmaterial mit verfügbaren Fakten schreiben (auch wenn Lücken bleiben)
3. Im Rohmaterial markieren: "KB III: LÜCKE — Exa-Credits erschöpft, manuelle Ergänzung nötig"
4. Story NICHT als passes: true markieren
5. In recherche-progress.txt notieren: "PAUSE — Credits erschöpft bei {leId}"
6. Loop endet — User muss neuen Key in .env.local eintragen
```

### Max. Exa-Requests pro LE:
- KB mit Differenz 3-5: max. 2 Requests
- KB mit Differenz > 5: max. 3 Requests
- **Gesamt pro LE: max. 15 Requests** (= ~$0.10)
- Sparsam sein! Lieber 1 gezielter Request als 5 vage

---

## PHASE 4: Rohmaterial zusammenbauen

**Output:** `content/le-{LE-Nummer}/rohmaterial.md` (z.B. `content/le-01/rohmaterial.md`)

### Dateistruktur:

```markdown
# Rohmaterial: {CE-Titel} — {LE-Titel}

> Generiert durch Recherche-Loop | Datum: {YYYY-MM-DD}
> Primärquelle: I Care | Ergänzung: Exa AI (wissenschaftliche Domains)
> CE-Typ: {ceTyp} | UE: {ueCount}

---

## Quellenverzeichnis

| ID | Typ | Titel | Jahr | URL/Seite |
|----|-----|-------|------|-----------|
| Q1 | Lehrbuch | I Care Pflege, 2. Aufl., Thieme | 2020 | S. 234-251 |
| Q2 | DNQP | Expertenstandard Sturzprophylaxe, 2. Akt. | 2022 | https://dnqp.de/... |
| Q3 | AWMF | S3-Leitlinie ... | 2024 | https://register.awmf.org/... |
| Q4 | PubMed | Review: ... | 2023 | https://pubmed.ncbi.nlm.nih.gov/... |
| Q5 | Springer | Kapitel: ... | 2024 | https://link.springer.com/... |

---

## A) Kernfakten — nach Kompetenzbereichen

### KB I — Pflegeprozess ({ist}% / {soll}% Soll)

| Nr | Fakt | Bloom | Quelle |
|----|------|-------|--------|
| F01 | {prüfbarer Fakt} | B1 | Q1 S.234 |
| F02 | {prüfbarer Fakt} | B2 | Q1 S.237 |
| ... | ... | ... | ... |

### KB II — Kommunikation ({ist}% / {soll}% Soll)

| Nr | Fakt | Bloom | Quelle |
|----|------|-------|--------|
| F16 | {prüfbarer Fakt} | B2 | Q1 S.445 |
| ... | ... | ... | ... |

### KB III — Interprofessionell ({ist}% / {soll}% Soll)

| Nr | Fakt | Bloom | Quelle |
|----|------|-------|--------|
| F25 | {prüfbarer Fakt} | B3 | Q4 |
| ... | ... | ... | ... |

### KB IV — Recht/Ethik ({ist}% / {soll}% Soll)

| Nr | Fakt | Bloom | Quelle |
|----|------|-------|--------|
| F30 | {prüfbarer Fakt} | B2 | Q2 |
| ... | ... | ... | ... |

### KB V — Wissenschaft ({ist}% / {soll}% Soll)

| Nr | Fakt | Bloom | Quelle |
|----|------|-------|--------|
| F33 | {prüfbarer Fakt} | B4 | Q4 |
| ... | ... | ... | ... |

---

## B) Glossar (15-25 Begriffe)

### Basis-Begriffe (Session 1)

| Begriff | Erklärung (C1) | Erklärung (B1) | AR | TR |
|---------|---------------|----------------|----|----|
| {Fachbegriff} | {2 Sätze fachlich} | {2 Sätze einfach} | {arabisch} | {türkisch} |

### Vertiefungs-Begriffe (Session 2)

| Begriff | Erklärung (C1) | Erklärung (B1) | AR | TR |
|---------|---------------|----------------|----|----|
| ... | ... | ... | ... | ... |

### Prüfungs-Begriffe (Session 3)

| Begriff | Erklärung (C1) | Erklärung (B1) | AR | TR |
|---------|---------------|----------------|----|----|
| ... | ... | ... | ... | ... |

---

## C) Leitfälle mit Szenen-Verlauf (3 Patienten)

**WARUM SZENEN?** Der Didaktik-Regisseur braucht konkrete Szenen — nicht nur Steckbriefe. Jede Szene ist ein Moment mit Dialog, Vitalwerten, Wendepunkt. Der Regisseur kann daraus direkt Story-Steps, Branching-Szenarien und Dialog-Formate bauen.

### Patient A — Leitfall (Session 1 + 2)

**Steckbrief:**
- **Name:** {realistischer Name, diverse Herkunft}
- **Alter:** {passend zum Thema}
- **Geschlecht:** {variieren}
- **Herkunft:** {variieren}
- **Beruf:** {mit Bezug zum Thema}
- **Diagnose/Situation:** {konkretes Problem}
- **Setting:** {Krankenhaus / Pflegeheim / ambulant / Reha}
- **Kernproblem:** {pflegerische Herausforderung}
- **Persönlichkeit:** {1 Satz}
- **Ressourcen:** {was kann die Person noch?}
- **Psychosozial:** {Ängste, Familie, Beruf}
- **Vorurteil das aufgebrochen wird:** {konkretes Stereotyp}
- **Warum dieser Fall?:** {didaktische Begründung}

**Szene S1 — Kennenlernen / Aufnahme:**
- **Zeitpunkt:** {Tag X, Uhrzeit, Kontext}
- **Was passiert:** {2-3 Sätze: konkrete Situation, was sieht/hört die Pflegekraft?}
- **Dialog-Snippet:** {1-2 Sätze die der Patient sagt — gibt ihm eine Stimme}
- **Pflegerische Frage:** {Was muss die Pflegekraft jetzt entscheiden/tun?}
- **Vitalwerte/Assessment:** {wenn relevant: konkrete Werte}

**Szene S2 — Komplikation / Wendepunkt:**
- **Zeitpunkt:** {Tag X+n, was hat sich verändert?}
- **Was passiert:** {Komplikation, Verschlechterung oder unerwartete Wendung}
- **Dialog-Snippet:** {Patient reagiert emotional — Angst, Wut, Resignation}
- **Interprofessioneller Moment:** {Wer wird hinzugezogen? Warum?}
- **Entscheidungssituation:** {Pflegekraft muss zwischen 2-3 Optionen wählen}

**Szene S3 — Transfer / Entlassung:**
- **Zeitpunkt:** {Entlassung oder Überleitung}
- **Was passiert:** {Beratung, Dokumentation, Übergabe}
- **Dialog-Snippet:** {Patient stellt eine Frage die Beratungskompetenz erfordert}
- **Transfer-Frage:** {Was ändert sich im neuen Setting?}

### Patient B — Transferfall (Session 3)

**Steckbrief:**
- {gleiche Felder wie Patient A, aber andere Person, anderes Setting, andere Komplikation}
- **Transferaspekt:** {Was lernt der Schüler durch Vergleich A vs. B?}

**Szene S3 — Komplexer Transferfall:**
- **Zeitpunkt:** {anderes Setting als Patient A}
- **Was passiert:** {gleiche Thematik, aber anderer Kontext → erzwingt Transfer}
- **Dialog-Snippet:** {Patient stellt eine schwierige Frage oder zeigt unerwartetes Verhalten}
- **Vergleichsfrage:** {Inwiefern unterscheidet sich die Pflege hier von Patient A?}

### Patient C — Komplikationskette (für Zusammenhänge)

**WARUM?** Patient C zeigt was passiert wenn Prophylaxen versagen. Eine Kette von Komplikationen, die aufeinander aufbauen. Demonstriert Zusammenhänge zwischen verschiedenen Themen der LE.

**Steckbrief:**
- {gleiche Felder wie A/B}
- **Ausgangsproblem:** {initiale Einschränkung}
- **Komplikationskette:** {A → B → C → D, jede Stufe ist eine Folge der vorherigen}

**Verlauf (Zeitstrahl):**
```
Tag 1:  {Ausgangssituation — was geht schief?}
Tag 5:  {Erste Komplikation — Folge von Tag 1}
Tag 14: {Zweite Komplikation — Folge von Tag 5}
Tag 30: {Dritte Komplikation — hätte alles verhindert werden können}
```

**Lerneffekt:** {Was hätte wann anders gemacht werden müssen? → Rückblick-Aufgabe}

### Altersgruppen-Diversität (PFLICHT)

Die 3 Patienten MÜSSEN mindestens 2 verschiedene Altersgruppen abdecken:

| Kombination | Beispiel CE 02 (Körperpflege) |
|---|---|
| Erwachsener + Kind | Patient A: 72 J. Schlaganfall + Patient B: 4 J. nach OP |
| Erwachsener + Älterer | Patient A: 45 J. nach Unfall + Patient C: 85 J. Demenz |
| Kind + Älterer | Patient A: 8 Monate Säugling + Patient B: 78 J. Pflegeheim |

**Nicht erlaubt:** Alle 3 Patienten im selben Altersbereich (z.B. alle 55-75 Jahre).

**CE-spezifische Leitlinie:**
- CE 01-04, 06-09: Mindestens 1 Patient ≤ 18 Jahre ODER ≥ 75 Jahre
- CE 05 (Krankheitsbilder): Altersspezifische Manifestation zeigen (z.B. RA bei Kindern = juvenile idiopathische Arthritis)
- CE 10 (Kinder): Mindestens 1 Patient Erwachsener/Älterer (Elternperspektive)
- CE 11 (Psychiatrie): Mindestens 1 Patient ≤ 25 Jahre (Erstmanifestation)

---

## D) Interleaving-Vorschläge (5-8 Fragen)

| Nr | Frage | Richtige Antwort | Bezugs-CE/LE | Bloom | Typ |
|----|-------|-----------------|-------------|-------|-----|
| I1 | {Frage aus verwandter LE} | {Antwort} | CE xx LE xx | B1-B3 | mc/matching/freetext |
| ... | ... | ... | ... | ... | ... |

---

## E) Bloom-Verteilung

| Stufe | Fakten | Beispiele |
|-------|--------|-----------|
| B1 — Erinnern | F01, F02, ... (mind. 5) | {Kurzbeispiel} |
| B2 — Verstehen | F05, F08, ... (mind. 5) | {Kurzbeispiel} |
| B3 — Anwenden | F12, F15, ... (mind. 5) | {Kurzbeispiel} |
| B4 — Analysieren | F20, F25, ... (mind. 5) | {Kurzbeispiel} |
| B5 — Bewerten | F30, F32, ... (mind. 3) | {Kurzbeispiel} |
| B6 — Erschaffen | F35, F37, ... (mind. 2) | {Kurzbeispiel} |

---

## F) Offene-Fragen-Vorschläge (4-6 Fragen)

### OQ1: {Kurztitel}
- **Bloom:** B{level}
- **KB:** {Kompetenzbereich}
- **Dimension:** {technisch-instrumentell / hermeneutisch-interpretativ / kritisch-reflexiv}
- **Fragetext:** {vollständige Frage}
- **Kontext:** {Fallbezug}
- **Musterantwort:** {3-5 Sätze}
- **Bewertungskriterien:** 1. ... 2. ... 3. ...
- **Satzanfänge (B1):** "Ich denke, dass...", "Die Pflegekraft sollte..."
- **Typische Fehler:** {was Schüler häufig falsch machen}

---

## G) Lernziel-IDs

| ID | Topic | KB-Schwerpunkt | Beschreibung |
|----|-------|---------------|-------------|
| {ceId}-{leId}-{topic1} | {topic} | KB-I | {Was der Schüler können soll} |
| {ceId}-{leId}-{topic2} | {topic} | KB-II | {Was der Schüler können soll} |
| ... | ... | ... | ... |

---

## H) KB-Deckungsnachweis

| KB | Soll (%) | Ist (%) | Fakten | Quellen | Status |
|----|----------|---------|--------|---------|--------|
| KB I — Pflegeprozess | {soll}% | {ist}% | {count} | Q1, Q2 | ✅ / ⚠️ LÜCKE |
| KB II — Kommunikation | {soll}% | {ist}% | {count} | Q1 | ✅ / ⚠️ LÜCKE |
| KB III — Interprofessionell | {soll}% | {ist}% | {count} | Q4 | ✅ / ⚠️ LÜCKE |
| KB IV — Recht/Ethik | {soll}% | {ist}% | {count} | Q2, Q3 | ✅ / ⚠️ LÜCKE |
| KB V — Wissenschaft | {soll}% | {ist}% | {count} | Q4, Q5 | ✅ / ⚠️ LÜCKE |
| **GESAMT** | 100% | 100% | **{total}** | **{quellenCount}** | |
```

---

## I) Challenge-Material (für schnelle Schüler)

**WARUM:** Schnelle Schüler (Fachwissen ≥ 4, z.B. Pflegehelfer mit Berufserfahrung) durchlaufen B1-B3-Fakten in wenigen Minuten. Der Adaptive Sequencer (R4) braucht dann **Nachschub an B4-B6-Material** — sonst geht dem System das Material aus.

**ZIEL:** 10-15 zusätzliche Elemente auf Bloom B4-B6 für den Challenge-Track.

### I.1) Vertiefungsfakten (8-10 Fakten, nur B4-B6)

Komplexere Zusammenhänge, Grenzfälle, Dilemmata — das was über I Care hinausgeht.

| Nr | Fakt | Bloom | KB | Quelle |
|----|------|-------|----|--------|
| CF01 | {Komplexer Zusammenhang, Analyse erforderlich} | B4 | KB-I | Qx |
| CF02 | {Ethisches Dilemma oder Grenzfall} | B5 | KB-IV | Qx |
| CF03 | {Forschungsergebnis kritisch bewerten} | B5 | KB-V | Qx |
| ... | ... | ... | ... | ... |

**Quellen für Challenge-Fakten:**
- Aktuelle Leitlinien (AWMF/DNQP) — dort stehen oft Dissense und offene Fragen
- Cochrane Reviews — Evidenzlage ist oft nicht eindeutig → B5 "Bewerten"
- Ethik-Literatur — Dilemmata zwischen Autonomie und Fürsorge
- Praxisfälle — Komplikationen, Fehlerquellen, atypische Verläufe

### I.2) Branching-Szenarien (2-3 Stück, B4-B5)

Entscheidungsketten mit Konsequenzen. Der Schüler trifft Entscheidungen und sieht die Folgen.

```
### BS1: {Szenario-Titel}
**Patient:** {Bezug zu Patient A oder B}
**Situation:** {konkretes Problem, z.B. "Patient steht nachts allein auf"}
**Bloom:** B4-B5

→ Option A: {Handlung}
  → Konsequenz: {Was passiert? Warum gut/schlecht?}
  → Folgefrage: {Was jetzt?}

→ Option B: {Handlung} [EMPFOHLEN]
  → Konsequenz: {Was passiert? Warum besser?}
  → Folgefrage: {Was noch beachten?}

→ Option C: {Handlung}
  → Konsequenz: {Was passiert? Typischer Anfängerfehler}
  → Lerneffekt: {Was der Schüler daraus mitnimmt}

**Kernlektion:** {1 Satz — was der Schüler verstanden haben soll}
```

### I.3) Transfer-Aufgaben (2-3 Stück, B5-B6)

"Was wäre wenn...?" — Gleicher Sachverhalt, anderer Kontext. Zwingt zum Abstrahieren.

```
### TA1: {Titel}
**Bloom:** B5/B6
**Ausgangsfall:** {Bezug zu Patient A/B}
**Transfer:** {Was ändert sich? Anderes Setting, andere Komplikation, anderer Patient}
**Fragetext:** {Vollständige Frage}
**Erwartete Antwort-Elemente:**
1. {Was muss der Schüler erkennen?}
2. {Welche Anpassung muss er vornehmen?}
3. {Welche Begründung muss er liefern?}
```

### I.4) Interleaving-Erweiterung (3-4 Fragen, B4+)

Querverbindungen zu anderen CEs auf **höherem Bloom-Level** als die Standard-Interleaving-Fragen (D).

| Nr | Frage | Bloom | Bezugs-CE/LE | Warum schwerer? |
|----|-------|-------|-------------|----------------|
| CI1 | {Frage die 2 Themen verknüpft} | B4 | CE xx LE xx | Erfordert Analyse über CE-Grenzen |
| CI2 | {Frage die Widersprüche aufdeckt} | B5 | CE xx LE xx | Erfordert Bewertung |
| ... | ... | ... | ... | ... |

---

## J) Praxistransfer-Aufträge (2-3 pro LE)

**WARUM:** `didaktisches-konzept.md` §3.1 fordert: "Jede LE enthält einen Praxistransfer-Abschnitt." Die Plattform zeigt diese am Session-Ende als konkreten Auftrag für den nächsten Praxiseinsatz.

**FORMAT:**

```
### PT1: {Kurztitel}
**Session:** S1 / S2 / S3
**Setting:** Station / Pflegeheim / ambulant / allgemein
**Auftrag:** {1-2 Sätze — was soll der Schüler beim nächsten Praxiseinsatz beobachten/ausprobieren/reflektieren?}
**Beobachtungsfrage:** {Konkrete Frage die der Schüler beantworten soll nachdem er es in der Praxis erlebt hat}
**Reflexions-Impuls:** {Kurze Frage für die Rückfahrt/den Feierabend — verbindet Theorie mit Erlebtem}
```

**Regeln:**
- Muss im nächsten Praxiseinsatz umsetzbar sein (keine exotischen Settings)
- Keine Handlungsanweisungen die über den Kompetenzstand hinausgehen
- S1-Aufträge: **beobachten** (Bloom B1-B2)
- S2-Aufträge: **vergleichen/analysieren** (Bloom B3-B4)
- S3-Aufträge: **reflektieren/bewerten** (Bloom B4-B6)

---

## K) Eröffnungs-Empfehlungen (1 pro Session)

**WARUM:** Die Plattform hat 18 Eröffnungsstrategien (siehe `specs/eroeffnungsstrategien.md`). Der Didaktik-Regisseur muss für jede Session die passende wählen. Das Rohmaterial gibt eine begründete Empfehlung.

| Session | Empfohlene Strategie | Begründung |
|---------|---------------------|------------|
| S1 | {aus den 18 Strategien: z.B. "Anticipation Guide", "Curiosity Gap", "Advance Organizer"} | {Warum passt diese Strategie für den Einstieg in dieses Thema?} |
| S2 | {z.B. "Vorwissen aktivieren", "Productive Failure", "Predict-Observe-Explain"} | {Warum passt sie für die Vertiefung?} |
| S3 | {z.B. "Fallarbeit Kaiser", "In Medias Res", "Dilemmadiskussion"} | {Warum passt sie für den Transfer?} |

**Die 18 Strategien (Kurzreferenz):**
1. Advance Organizer, 2. Problemorientiert (POL), 3. Sokratische Gegenfrage, 4. Predict-Observe-Explain, 5. Brilliant (Problem first), 6. Duolingo (Do before Learn), 7. AMBOSS (Klinische Vignette), 8. Fallarbeit (Kaiser), 9. Perspektivwechsel, 10. Dilemmadiskussion, 11. Boss-Vorschau, 12. Mystery/Rätsel, 13. Tutorial-Cutscene, 14. Curiosity Gap, 15. Vorwissen aktivieren, 16. Productive Failure, 17. Anticipation Guide, 18. In Medias Res

---

### Fakten-Regeln (NICHT VERHANDELBAR):
1. **Jeder Fakt ist ein eigenständiger, prüfbarer Satz** (keine Absätze)
2. **Jeder Fakt hat Quellenreferenz** (Q1 S.xxx oder Q3 mit URL)
3. **Kein Fakt ohne Quelle** — lieber weglassen als erfinden
4. **Paraphrasiert, nie wörtlich** — eigene Worte, Fachbegriffe beibehalten
5. **Bloom-Stufe pro Fakt** — auf welchem Niveau wird er typischerweise geprüft?
6. **KB-Zuordnung pro Fakt** — zu welchem Kompetenzbereich gehört er?

---

## PHASE 5: Qualitäts-Gate

### PASS-Kriterien (ALLE müssen erfüllt sein):

```
FAKTEN
  [ ] ≥ 40 Fakten insgesamt
  [ ] 0 Fakten ohne Quellenreferenz (KEINE HALLUZINATION)
  [ ] Keine wörtlichen Zitate aus Lehrbüchern

KB-DECKUNG
  [ ] KB-Abweichung < 10% vom Soll bei jedem KB
  [ ] Mindestens 2 Fakten in jedem KB (auch bei 5%-Gewichtung)

QUELLEN
  [ ] ≥ 5 verschiedene Quellen
  [ ] ≥ 1 Leitlinie (AWMF/DNQP) bei medizinisch/pflegerischen Themen
  [ ] Alle Exa-URLs von Whitelist-Domains
  [ ] Alle I Care-Referenzen mit Seitenzahl

BLOOM
  [ ] Alle 6 Bloom-Stufen abgedeckt
  [ ] Mind. 5 Fakten B1+B2
  [ ] Mind. 5 Fakten B3+B4
  [ ] Mind. 3 Fakten B5+B6

ROHMATERIAL-VOLLSTÄNDIGKEIT
  [ ] Glossar ≥ 15 Begriffe (mit C1, B1, AR, TR)
  [ ] 2 Leitfall-Skizzen (Patient A + B, divers)
  [ ] 5-8 Interleaving-Vorschläge
  [ ] 4-6 Offene-Fragen-Vorschläge (mit Musterantwort)
  [ ] Lernziel-IDs definiert (5-8 pro LE)
  [ ] KB-Deckungsnachweis vorhanden

LEITFÄLLE (Abschnitt C)
  [ ] 3 Patienten (A, B, C) mit Steckbrief
  [ ] Patient A: 3 Szenen (S1, S2, S3) mit Dialog-Snippets
  [ ] Patient B: 1 Szene (S3 Transfer) mit Vergleichsfrage
  [ ] Patient C: Komplikationskette mit Zeitstrahl (mind. 3 Stufen)
  [ ] Alle 3 Patienten divers (Alter, Herkunft, Setting)

CHALLENGE-MATERIAL (Abschnitt I)
  [ ] ≥ 8 Vertiefungsfakten auf B4-B6 (CF01-CFxx)
  [ ] ≥ 2 Branching-Szenarien mit je 3 Optionen + Konsequenzen
  [ ] ≥ 2 Transfer-Aufgaben (B5-B6) mit erwarteten Antwort-Elementen
  [ ] ≥ 3 Interleaving-Erweiterungen auf B4+ (CE-übergreifend)

PRAXISTRANSFER (Abschnitt J)
  [ ] ≥ 2 Praxistransfer-Aufträge mit Beobachtungsfrage + Reflexions-Impuls
  [ ] Aufträge sind in normalem Praxiseinsatz umsetzbar

ERÖFFNUNGEN (Abschnitt K)
  [ ] 1 Eröffnungs-Empfehlung pro Session (S1, S2, S3) mit Begründung

GENERALISTISCHE PERSPEKTIVE (PflBG §5)
  [ ] Mindestens 2 verschiedene Altersgruppen in Kernfakten vertreten
  [ ] Leitfälle decken ≥ 2 Altersgruppen ab (nicht alle im selben Altersbereich)
  [ ] Altersspezifische Normalwerte/Besonderheiten extrahiert (wo I Care sie liefert)
```

### Bei FAIL:
- Fehlende KBs identifizieren → gezielt nachrecherchieren
- Fehlende Bloom-Stufen → Fakten umformulieren oder ergänzen
- Fehlende Quellen → Exa-Nachrecherche (wenn Credits vorhanden)
- Max. 2 Wiederholungen pro LE — danach mit Vermerk "TEILWEISE" bestehen lassen

### Bei PASS:
1. Story in `recherche-prd.json` updaten: `passes: true`, `quellenCount`, `faktenCount`
2. Learnings in `ralph/recherche-progress.txt` schreiben
3. Weiter zur nächsten LE

---

## CE-TYP-SPEZIFISCHE HINWEISE

Der `ceTyp` in der Story bestimmt den Recherche-Fokus:

| ceTyp | Fokus | I Care Band | Besonderheiten |
|-------|-------|-------------|----------------|
| `orientierung` | Berufsbild, Rolle, Reflexion | Pflege | Wenig medizinisch, viel KB V |
| `pflegehandlung` | Pflegeprozess, ATL, Prophylaxen | Pflege | KB I dominiert, DNQP-Standards |
| `kommunikation` | Gesprächsführung, Beratung | Pflege | KB II dominiert, Theorien |
| `praevention` | Gesundheitsförderung, Screening | Pflege | KB I + KB II, RKI/WHO |
| `krankheitsbild` | Medizinisch + pflegerisch | Krankheitslehre + Pflege | 12-Punkte-Struktur, AWMF |
| `notfall` | Algorithmen, Erstmaßnahmen | Pflege | KB I + KB III, ERC-Leitlinien |
| `rehabilitation` | ICF, Teilhabe, Team | Pflege | KB III dominiert, SGB IX |
| `lebenswelt` | Biografie, Ethik, Settings | Pflege | KB II + KB IV, wenig medizinisch |
| `entwicklung` | Kinder, Familie, Entwicklung | Pflege + Krankheitslehre | STIKO, Bindungstheorie |
| `psychiatrie` | Psychische Gesundheit, Beziehung | Krankheitslehre + Pflege | KB IV + Deeskalation, PsychKG |

---

## REFERENZ-DATEIEN

- `ralph/recherche-prd.json` — Stories mit KB-Gewichtung
- `ralph/exa-client.sh` — Exa API Wrapper (Key-Rotation)
- `recherche/icare/` — 45 Quellen: 4 PDFs + 41 HTML-Volltext-Bücher (~5,5 Mio. Wörter)
- `specs/rahmenplan-bibb.md` — BIBB Rahmenlehrplan (Bildungsziele, Untereinheiten)
- `content/le-07/rohmaterial.md` — Referenz-Rohmaterial (LE 07 = Mobilität, wenn vorhanden)

---

## COMMIT-FORMAT

```
recherche(le-{LE-Nummer}): {LE-Titel} — Rohmaterial + Quellen

Recherche-Loop abgeschlossen:
- {faktenCount} Fakten, {quellenCount} Quellen
- KB-Deckung: I={ist}% II={ist}% III={ist}% IV={ist}% V={ist}%
- Primärquelle: I Care {Band} S.{von}-{bis}
- Exa-Requests: {count} ($x.xx)
- Bloom: B1-B6 abgedeckt
- Glossar: {count} Begriffe

Generated with [Claude Code](https://claude.ai/code)
via [Happy](https://happy.engineering)

Co-Authored-By: Claude <noreply@anthropic.com>
Co-Authored-By: Happy <yesreply@happy.engineering>
```
