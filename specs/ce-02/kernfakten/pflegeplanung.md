# Kernfakten: Pflegeplanung

| Feld | Wert |
|------|------|
| themaId | `pflegeplanung` |
| ceId | `ce-02` |
| cluster | A (Pflegeprozess & Planung) |
| geschätzteUE | 8 |
| wissensart | konzept |
| quellen | Pflege heute 7. Aufl. Kap. Pflegeprozess und Pflegeplanung; NANDA-I 2021; § 4 PflBG; Orem 1971; Krohwinkel 1993; Roper/Logan/Tierney 1980; Doran 1981 |
| einträge | 14 |
| erstellt | 2026-06-10 (Dozentin A) |
| grounding | STÜTZT-Stand 2026-06-11: 48 Verbatim-Belege, alle ✅ verifiziert (`--check-file`). 2 ⚠️-Markierungen (PESR/PÄSR-Kürzel in F-01/F-02; „med. stabil / pflege täglich" in F-07) — im Korpus nicht belegbar, Quelle beschaffen ODER Claim entfernen (R3). |

---

### F-01: PÄS-Format der Pflegediagnose

**Fakt:** Eine problemfokussierende Pflegediagnose nach NANDA besteht aus drei Komponenten: Problem (Was?), Ätiologie (beeinflussende Faktoren — Warum?) und Symptome (bestimmende Merkmale — Woran erkennbar?). Dieser Aufbau wird als PÄS-Format abgekürzt. ⚠️ Die in Deutschland verbreitete Erweiterung um die Ressource (R) zum **PESR/PÄSR**-Schema ist im vorliegenden Korpus (Pflege heute) NICHT belegt — Pflege heute behandelt Ressourcen separat (➔ F-02/F-13), nennt aber kein „PESR/PÄSR"-Kürzel. Quelle beschaffen (z. B. NANDA-I-Original 2021 oder einschlägiges Pflegeplanungs-Lehrbuch) ODER Kürzel-Claim entfernen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 2-3 (Verstehen, Anwenden)
**Primärquelle:** (NANDA-I 2021)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Der Aufbau einer Pflegediagnose durch diese drei Komponenten wird abgekürzt als"
- Zitat: "PÄS-Format (Problem, Ätiologie [beeinflussende Faktoren] und Symptome [bestimmende Merkmale])"

**Misconceptions:**
- `M1`: **"Symptom (S) und Problem (P) sind dasselbe"** — P ist die diagnostische Aussage ("Was ist das Pflegeproblem?"), S sind die beobachtbaren Belege dafür. P = Schlussfolgerung, S = Beweis. Fachbegriff: "P-S-Verwechslung".
- `M2`: **"Die Ätiologie ist nur Beiwerk"** — Die Ätiologie (beeinflussende Faktoren) ist der Ansatzpunkt der Pflegemaßnahmen: Pflege setzt bei den Ursachen an, nicht nur am Symptom.

---

### F-02: PES vs. PESR — Ressourcen als deutsche Erweiterung

**Fakt:** Das international (NANDA-I) gebräuchliche PES-/PÄS-Schema beschreibt das Defizit. Das Erfassen der Ressourcen ist im deutschsprachigen Raum ebenso wichtig wie das Erfassen der Pflegeprobleme, um aktivierende Pflege leisten zu können. ⚠️ Die hieraus oft abgeleitete Schema-Erweiterung „PES → **PESR**" (Ressource als vierter Buchstabe) ist im Korpus (Pflege heute) NICHT als Kürzel belegt; belegt ist nur der inhaltliche Stellenwert der Ressourcen. Quelle beschaffen ODER Kürzel-Claim entfernen (siehe F-01).

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (NANDA-I 2021; Krohwinkel 1993)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ebenso wichtig wie das Erfassen von Pflegeproblemen ist das Erfassen der Ressourcen"
- Zitat: "aktivierende Pflege"

**Misconceptions:**
- `M1`: **"PES ist veraltet und in Deutschland verboten"** — PES ist der internationale NANDA-I-Standard und nicht verboten. In Deutschland wird PESR bevorzugt, weil es den ressourcenorientierten, rehabilitativen Ansatz besser abbildet.
- `M2`: **"Die Ressource ist optional, nur in der Reha nötig"** — Ressourcen sind Pflichtbestandteil. Sie sind die Grundlage für realistische Zielformulierung. Fachbegriff: "Ressourcen-Unterschätzung".

---

### F-03: Drei NANDA-Diagnosetypen

**Fakt:** NANDA unterscheidet drei Arten von Pflegediagnosen: (1) problemfokussierende (aktuelle) Diagnose mit PÄS-Struktur, (2) Risikopflegediagnose — benennt Zustände, die vorhergesagt, aber noch nicht eingetreten sind (kein S, nur Risikofaktoren), und (3) Pflegediagnose der Gesundheitsförderung — der Patient möchte sein Wohlbefinden steigern.

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 2-4
**Primärquelle:** (NANDA-I 2021)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Pflegediagnosen unterscheiden: problemfokussierende Pflegediagnose, Risikopflegediagnose und Pflegediagnosen der Gesundheitsförderung"
- Zitat: "Die Risikopflegediagnose benennt Zustände, die vorhergesagt werden können, aber noch nicht eingetreten sind"
- Zitat: "Beschreibung der Motivation und der Wünsche des Patienten, sein Wohlbefinden zu steigern"

**Misconceptions:**
- `M1`: **"Risikodiagnosen braucht man nicht — erst wenn das Problem da ist, handelt man"** — Risikodiagnosen sind die Grundlage für Prophylaxen. Reaktive Pflege (nach dem Schaden) ist schlechte Pflege.
- `M2`: **"Eine Risikodiagnose hat auch Symptome"** — Nein: Das Problem ist noch nicht eingetreten, es gibt nichts zu beobachten. Es gibt nur Risikofaktoren. Fachbegriff: "Risikodiagnose-Symptom-Fehler".

---

### F-04: SMART-Regel für Pflegeziele

**Fakt:** Ein korrekt formuliertes Pflegeziel folgt der SMART-Regel: Spezifisch (auf die Situation des Patienten bezogen), Messbar (Ergebnis beschreib- oder messbar), Akzeptiert (Patient einverstanden), Realisierbar (für den Patienten erreichbar), Terminierbar (bis zu einem bestimmten Termin). Schlagwörter wie "größtmögliche Selbstständigkeit" erfüllen die Zielfunktion nicht.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Handlung
**Bloom-Potential:** 3-4
**Primärquelle:** (Doran 1981; Pflege heute SMART-Regel)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ein korrekt formuliertes Pflegeziel beinhaltet folgende Anforderungen z. B. nach der"
- Zitat: "Spezifisch: Ist die Pflegemaßnahme speziell auf die Situation des Patienten bezogen"
- Zitat: "Messbar: Lässt sich das Ergebnis beschreiben oder messen"
- Zitat: "Akzeptiert: Ist der Patient mit dem Vorgehen einverstanden"
- Zitat: "Realisierbar: Sind die festgelegten Ziele"
- Zitat: "Terminierbar: Ist die Umsetzung der Pflegemaßnahme bis zu einem bestimmten Termin zu erreichen"

**Praxisfehler:** Hilfsverben wie "sollen", "müssen", "können" in der Zielformulierung — das Ziel beschreibt einen Soll-Zustand, nicht einen Wunsch.

**Misconceptions:**
- `M1`: **"SMART ist zu starr — Pflege ist individuell, da braucht man keine Zahlen"** — SMART ist gerade deshalb wichtig: '1500 ml täglich' ist das individuelle Ziel dieses Patienten und macht es überprüfbar.
- `M2`: **"Ein Ziel ohne Termin ist auch gut"** — Der Termin (T) ist der Auslöser für die Evaluation. Ohne Termin wird das Ziel nie überprüft.
- `M3`: **"Das A steht für Achievable/Erreichbar"** — In der hier zugrunde gelegten Fassung steht A für **Akzeptiert** (Patient einverstanden); andere Fassungen lesen A als Achievable. Quelle beachten.

---

### F-05: Zielhierarchie — Nahziel und Fernziel

**Fakt:** Ein Pflegeziel beschreibt einen Soll-Zustand bzw. ein angestrebtes Ergebnis, das der Patient — ggf. mit Unterstützung — erreichen kann und soll. Unterschieden werden Nahziele (in absehbarer Zukunft erreichbar) und Fernziele (auf die länger hingearbeitet werden muss). Erreichbare Nahziele dienen als Erfolgserlebnis für den Patienten.

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 3
**Primärquelle:** (Krohwinkel 1993; Pflege heute)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Beschreibung eines Soll-Zustands bzw. eines angestrebten Ergebnisses"
- Zitat: "Nahziele, die in absehbarer Zukunft zu erreichen sind, und Fernziele"
- Zitat: "hilfreich, um erreichbare Nahziele als Erfolgserlebnis für den Patienten zu erzielen"

**Misconceptions:**
- `M1`: **"Das Fernziel ist das wichtigste, deshalb plant man es zuerst"** — Das Fernziel gibt die Richtung, aber die tägliche Pflege arbeitet mit dem Nahziel. Fernziel ohne Nahziele ist Wunschdenken.
- `M2`: **"Wenn das Nahziel nicht erreicht wird, ist der Patient gescheitert"** — Ein nicht erreichtes Nahziel ist eine Information für die Evaluation (Ziel zu hoch? Maßnahme falsch?), keine Niederlage.

---

### F-06: Pflegemaßnahmen — die W-Fragen

**Fakt:** Pflegemaßnahmen werden konkret als Antwort auf die W-Fragen formuliert: "Wer macht wann, was, wie, womit?" — so knapp wie möglich, so ausführlich wie nötig. Nur vollständig formulierte Maßnahmen sind eindeutig und über den Schichtwechsel hinweg umsetzbar.

**Prüfungsrelevanz:** hoch
**Wissensart:** Handlung
**Bloom-Potential:** 3
**Primärquelle:** (Pflege heute)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "konkret als Antwort auf folgende W-Fragen formuliert: „Wer macht wann, was, wie, womit?"
- Zitat: "Die Formulierung ist dabei so knapp wie möglich und so ausführlich wie nötig zu halten"

**Praxisfehler:** Floskeln wie "psychische Betreuung" oder "Angst nehmen" erfüllen die Kriterien nicht — richtig sind konkrete, überprüfbare Aussagen.

**Misconceptions:**
- `M1`: **"Man schreibt nur das Ziel — die Maßnahmen entscheidet jede Schicht selbst"** — Der Pflegeplan ist verbindlich. Selbstständiges Entscheiden je Schicht führt zu uneinheitlicher Pflege (Patientensicherheit).
- `M2`: **"Ärztlich angeordnete Maßnahmen gehören in die Pflegeplanung"** — Nein: Bei ärztlich angeordneten Maßnahmen (z.B. Injektionen) hat die Pflege keinen Entscheidungsspielraum; sie werden auf dem Durchführungskontrollblatt dokumentiert, nicht geplant.

---

### F-07: Medizinische Diagnose vs. Pflegediagnose

**Fakt:** Die medizinische Diagnose (Arzt) beschreibt die Krankheit; die Pflegediagnose (Pflegefachperson) beschreibt die menschliche Reaktion dieses Patienten auf Gesundheitszustände/Lebensprozesse — also die Folgen von Gesundheitsproblemen, für die Pflegende zuständig sind. Beide Perspektiven sind notwendig und ergänzen einander. ⚠️ Die häufige Lehrbuch-Zuspitzung „medizinische Diagnose ist stabil, Pflegediagnose verändert sich täglich" ist im Korpus (Pflege heute) so NICHT belegt — belegt ist die Perspektiven-Unterscheidung (Krankheit vs. menschliche Reaktion/Folgen), nicht die Stabilitäts-/Täglich-Aussage. Quelle beschaffen ODER Zuspitzung entfernen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (NANDA-I 2021; § 4 PflBG)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "womit selbstverständlich nicht das Diagnostizieren von" (Pflege-Diagnostizieren ≠ Krankheits-Diagnostizieren)
- Zitat: "Es bedeutet vielmehr das Erkennen der Folgen von Gesundheitsproblemen, für die Pflegende zuständig" (Pflegeperspektive = Folgen/Reaktion)
- Zitat: "menschlichen Reaktion auf Gesundheitszustände/Lebensprozesse oder die" (Pflegediagnose = menschliche Reaktion)

**Misconceptions:**
- `M1`: **"Pflegediagnose und medizinische Diagnose sind dasselbe, nur anders formuliert"** — Verschiedene Perspektiven: Krankheit vs. menschliche Reaktion. Dieselbe Krankheit kann bei zwei Patienten zu verschiedenen Pflegediagnosen führen.
- `M2`: **"Wenn der Arzt eine Diagnose stellt, braucht die Pflege keine eigene"** — Die Pflege braucht die eigene Diagnose, um den Pflegebedarf zu erfassen und Maßnahmen zu planen.

---

### F-08: Pflegeplanung als vorbehaltene Tätigkeit (§ 4 PflBG)

**Fakt:** Die Planung, Steuerung und Evaluation des Pflegeprozesses sind vorbehaltene Tätigkeiten nach § 4 PflBG: Erhebung und Feststellung des individuellen Pflegebedarfs; Organisation, Gestaltung und Steuerung des Pflegeprozesses; Analyse, Evaluation, Sicherung und Entwicklung der Qualität. Sie dürfen nur von Personen mit abgeschlossener dreijähriger Pflegeausbildung durchgeführt werden — und sind dem eigenverantwortlichen Aufgabenbereich der Pflege zugeordnet.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Recht
**Bloom-Potential:** 3-4
**Primärquelle:** (§ 4 PflBG)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "nur von Personen mit erfolgreich abgeschlossener dreijähriger Pflegeausbildung durchgeführt werden dürfen"
- Zitat: "Erhebung und Feststellung des individuellen Pflegebedarfs"
- Zitat: "Organisation, Gestaltung und Steuerung des Pflegeprozesses"
- Zitat: "Analyse, Evaluation, Sicherung und Entwicklung der Qualität der Pflege"
- Zitat: "Diese vorbehaltenen Tätigkeiten im Rahmen der Pflegeplanung sind somit dem"
- Zitat: "eigenverantwortlichen Aufgabenbereich der"

**Misconceptions:**
- `M1`: **"Erfahrene Pflegehilfen dürfen selbst planen — Erfahrung zählt mehr als der Abschluss"** — § 4 PflBG ist gesetzliche Regelung, kein Ermessen. Erfahrung ersetzt weder Ausbildung noch gesetzliche Berechtigung.
- `M2`: **"Die Pflegefachperson kann die Planung vollständig delegieren"** — Vorbehaltene Tätigkeiten sind per Definition nicht delegierbar; delegierbar ist nur die Durchführung der Maßnahmen.

---

### F-09: Pflegemodell Orem — Selbstpflegedefizit

**Fakt:** Nach Orem achten die Pflegenden auf Selbstpflegeerfordernisse, indem sie Selbstpflegefähigkeiten und Selbstpflegedefizite identifizieren. Pflege ist notwendig, wenn ein Selbstpflegedefizit besteht — die Lücke zwischen Selbstpflegefähigkeit und Selbstpflegeanforderung. Orem beschreibt das pflegerische Handeln in drei prinzipiellen Formen (Pflegesystemen): **vollständig kompensatorisches**, **teilweise kompensatorisches** und **anleitend-unterstützendes System** (Terminologie nach Pflege heute).

**Prüfungsrelevanz:** mittel
**Wissensart:** Modell
**Bloom-Potential:** 3-4
**Primärquelle:** (Orem 1971)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Nach Orem (➔ 50.3.4) achten die Pflegenden insbesondere auf Selbstpflegeerfordernisse, indem sie Selbstpflegefähigkeiten und Selbstpflegedefizite identifizieren"
- Zitat: "Dieses beschreibt Orem in drei prinzi"
- Zitat: "Vollständig kompensatorisches System"
- Zitat: "Teilweise kompensatorisches System"
- Zitat: "Anleitend-unterstützendes System"

**Misconceptions:**
- `M1`: **"Pflege nach Orem heißt immer alles übernehmen"** — Nur das vollständig kompensatorische System übernimmt alles; im anleitend-unterstützenden System gibt die Pflege nur Anleitung, Beratung und Schulung.
- `M2`: **"Selbstpflegedefizit bedeutet Bequemlichkeit des Patienten"** — Es ist die fachliche Beschreibung der Lücke zwischen Fähigkeit und Anforderung, kein Werturteil.

---

### F-10: Pflegemodell Krohwinkel — AEDL/ABEDL

**Fakt:** Monika Krohwinkel erweiterte das Lebensaktivitäten-Konzept um den Aspekt "Mit existenziellen Erfahrungen des Lebens umgehen" und beschrieb es als 13 Aktivitäten und existenzielle Erfahrungen des Lebens (AEDL®), später überarbeitet zum ABEDL®-Modell (Aktivitäten, Beziehungen und existenzielle Erfahrungen des Lebens). Die "Fördernde Prozesspflege als System" (1993) ist Grundlage v.a. in der Alten- und Langzeitpflege.

**Prüfungsrelevanz:** mittel
**Wissensart:** Modell
**Bloom-Potential:** 2-3
**Primärquelle:** (Krohwinkel 1993)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "den Aspekt „Mit existenziellen Erfahrungen des Lebens umgehen"
- Zitat: "als 13 Aktivitäten und existenzielle Erfahrungen des Lebens"
- Zitat: "Die Theorie wurde 1993 erstmals veröffentlicht"
- Zitat: "ABEDL®: Aktivitäten, Beziehungen und existenzielle Erfahrungen des Lebens"

**Misconceptions:**
- `M1`: **"AEDL und ABEDL sind verschiedene Modelle"** — ABEDL ist die überarbeitete Fassung des AEDL-Modells (B = Beziehungen ergänzt), nicht ein anderes Modell.
- `M2`: **"Krohwinkel ist nur Theorie ohne Praxisbezug"** — Es ist hierzulande eine wesentliche Grundlage für die Pflege v.a. in Alten- und Langzeitpflege.

---

### F-11: Pflegemodell Roper, Logan und Tierney — Lebensaktivitäten

**Fakt:** Nach Roper (bzw. Juchli) können die Lebensaktivitäten bzw. Aktivitäten des täglichen Lebens als Kriterien für die Informationssammlung herangezogen werden. Krohwinkel baute auf diesem Konzept von Roper, Logan und Tierney auf und erweiterte es um den existenziellen Aspekt.

**Prüfungsrelevanz:** mittel
**Wissensart:** Modell
**Bloom-Potential:** 2-3
**Primärquelle:** (Roper/Logan/Tierney 1980)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Nach Roper bzw. Juchli (➔ 50.3.4) können die Lebensaktivitäten bzw. Aktivitäten des täglichen Lebens als Kriterien herangezogen werden"
- Zitat: "von Roper, Logan und Tierney um den Aspekt"

**Misconceptions:**
- `M1`: **"Lebensaktivitäten sind eine deutsche Erfindung"** — Das Konzept stammt von Roper, Logan und Tierney; Krohwinkel und Juchli haben es im deutschsprachigen Raum adaptiert.

---

### F-12: Pflegeplanung ist ein kontinuierlicher Prozess

**Fakt:** Kommen neue Informationen hinzu, überprüfen die Pflegenden, ob die Pflegeplanung geändert werden muss. Die Informationssammlung ist nie abgeschlossen, sondern ein kontinuierlicher Prozess. Der Pflegeplan wird laufend evaluiert und angepasst (Regelkreis), nicht einmalig erstellt.

**Prüfungsrelevanz:** hoch
**Wissensart:** Prozess
**Bloom-Potential:** 3-4
**Primärquelle:** (Fiechter/Meier 1981; Pflege heute)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "überprüfen die Pflegenden, ob die Pflegeplanung aufgrund dieser Informationen geändert werden muss"
- Zitat: "Die Informationssammlung ist demzufolge nie abgeschlossen, sondern ein kontinuierlicher Prozess"

**Misconceptions:**
- `M1`: **"Der Pflegeplan wird bei Aufnahme erstellt und gilt dann"** — Er ist ein Regelkreis: Evaluation führt zu Anpassung, sobald sich der Zustand oder neue Informationen ergeben.
- `M2`: **"Evaluation ist nur am Ende eines Aufenthalts nötig"** — Evaluation erfolgt fortlaufend, ausgelöst durch den Zieltermin und durch neue Informationen.

---

### F-13: Ressourcen erfassen — aktivierende Pflege

**Fakt:** Ressourcen sind die Fähigkeiten und Fertigkeiten des Patienten, Folgen von Gesundheitsproblemen aus eigener Kraft auszugleichen. Sie umfassen körperliche, psychische, spirituelle, räumliche, soziale und ökonomische Ressourcen. Das Erfassen der Ressourcen ist ebenso wichtig wie das Erfassen der Pflegeprobleme — Voraussetzung für aktivierende Pflege.

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 3-4
**Primärquelle:** (Krohwinkel 1993; Pflege heute)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Fähigkeiten und Fertigkeiten des Patienten, Folgen von Gesundheitsproblemen"
- Zitat: "aus eigener Kraft auszugleichen"
- Zitat: "Körperliche, psychische, spirituelle, räumliche, soziale, ökonomische Fähigkeiten und Motivationen"
- Zitat: "Ebenso wichtig wie das Erfassen von Pflegeproblemen ist das Erfassen der Ressourcen"

**Misconceptions:**
- `M1`: **"Ressourcen sind immer offensichtlich"** — Ressourcen sind oft nicht offensichtlich (z.B. Motivation, soziales Netz, Resilienz) und müssen gezielt erhoben werden.
- `M2`: **"Aktivierende Pflege bedeutet, den Patienten zu überfordern"** — Aktivierende Pflege fördert vorhandene Fähigkeiten gezielt; Über- wie Unterforderung sind beide ein Fehler.

---

### F-14: Strukturmodell mit SIS® (Entbürokratisierung)

**Fakt:** Seit 2016 wurde in vielen Einrichtungen das Strukturmodell zur Entbürokratisierung der Pflegedokumentation mit der Strukturierten Informationssammlung (SIS®) eingeführt, um den Dokumentationsaufwand möglichst gering zu halten. Es ergänzt die klassischen Pflegeprozess-Modelle (4-, 5-, 6-Schritt-Modell).

**Prüfungsrelevanz:** mittel
**Wissensart:** Organisation
**Bloom-Potential:** 2
**Primärquelle:** (Pflege heute; Strukturmodell SIS® 2016)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Seit 2016 wurde in vielen Einrichtungen das"
- Zitat: "Strukturmodell zur Entbürokratisierung der Pflegedokumentation"
- Zitat: "mit der Strukturierten Informationssammlung (SIS®)"
- Zitat: "um den Dokumentationsaufwand möglichst gering zu halten"

**Misconceptions:**
- `M1`: **"Das Strukturmodell ersetzt den Pflegeprozess"** — Es ist ein Dokumentationsmodell zur Entbürokratisierung, nicht ein Ersatz für die fachliche Pflegeprozess-Logik.
- `M2`: **"SIS heißt weniger Sorgfalt"** — Ziel ist geringerer Dokumentationsaufwand, nicht geringere fachliche Sorgfalt.
