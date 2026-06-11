# Kernfakten: Essen & Trinken anreichen

| Feld | Wert |
|------|------|
| themaId | `essen-anreichen` |
| ceId | `ce-02` |
| cluster | D (Ernährung) |
| geschätzteUE | 7 |
| wissensart | handlung |
| quellen | Pflege heute 7. Aufl. Kap. 7 (Ernährung; Schlucken und Schlucktraining; Aspirationsprophylaxe); Expertenstandard Ernährungsmanagement (DNQP); IDDSI 2019; GUSS (Trapl et al. 2007); DGG/DGN S1-Leitlinie Neurogene Dysphagie 2020; Hoehl/Kullick „Gesundheits- und Kinderkrankenpflege" 5. Aufl. (Volltext) |
| einträge | 13 |
| erstellt | 2026-06-10 (extrahiert aus bausteine-plan.md, Pipeline v9) |
| grounding-update | 2026-06-11 (⚠️-Auflösung: kinderkrankenpflege-volltext, icare-examen-kompakt-volltext, pruefungswissen-volltext geprüft) |

---

### F-01: Sitzposition über 60° als Aspirationsschutz

**Fakt:** Vor dem Anreichen muss der Oberkörper mindestens 60° aufrecht sein (besser 90°). Eine aufrechte Körperhaltung unterstützt den physiologischen Transportweg der Nahrung durch die Speiseröhre und verhindert ein Verschlucken (Schwerkraft leitet den Bolus zum Ösophagus statt zur Trachea). Essen im Liegen ist kontraindiziert.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 2-3 (Verstehen, Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7 Ernährung; DGE 2024)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "eine aufrechte Körperhaltung den physiologischen Transportweg der Nahrung durch die Speiseröhre unterstützt und ein Verschlucken verhindert" ✅ MATCH (stützt die aufrechte Position generell)
- Zitat: "Entsprechend helfen die Pflegenden den Patienten dabei, diese Position zum Essen einzunehmen" ✅ MATCH
- ⚠️ **Der konkrete Schwellenwert „mindestens 60° (besser 90°)" ist im Korpus NICHT verbatim belegt** — Pflege heute spricht nur von „aufrechter Körperhaltung"/„aufrechter Sitzposition", nennt keinen Gradwert für die orale Nahrungsaufnahme. Quelle beschaffen: DGG/DGN S1-Leitlinie Neurogene Dysphagie 2020 oder DGE-Positionierungsempfehlung. Bis dahin im Schüler-Content nur als „aufrecht sitzen, nicht im Liegen" formulieren oder den Gradwert als „häufige Praxisempfehlung (≥60°)" kennzeichnen.
**Praxisfehler:** Nur den Kopf hochlagern statt den ganzen Oberkörper aufzurichten.

**Misconceptions:**
- `M1`: **"Der Patient kann auch im Liegen essen, Hauptsache der Kopf ist leicht erhöht"** — Im Liegen läuft der Bolus Richtung Trachea; der ganze Oberkörper muss über 60° aufrecht sein. Fachbegriff: "Flachlagerungs-Irrtum".
- `M2`: **"Die Temperatur ist egal, der Patient sagt wenn es zu heiß ist"** — Viele Patienten (Demenz, Schlaganfall mit gestörter Sensibilität) können das nicht zuverlässig melden; Temperaturkontrolle am Innenarm ist Pflegeaufgabe.

---

### F-02: Würde beim Essenreichen — Augenhöhe, Serviette statt Lätzchen

**Fakt:** Beim Anreichen wahrt die Pflegefachperson die Würde des erwachsenen Patienten: auf Augenhöhe sitzen (nicht herabsehen), eine Serviette statt eines "Lätzchens" oder "Esslatzes" anbieten, den Ausdruck "Füttern" vermeiden. Der Patient bestimmt Geschwindigkeit und Reihenfolge der Mahlzeit.

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 2-3
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7 — Respektvolle Kommunikation; WHO 2015; § 1901a BGB)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Beim Essenreichen respektieren Pflegende die Würde des erwachsenen Patienten"
- Zitat: "Ihm nicht „Esslatz“ oder „Lätzchen“ anbieten, sondern eine Serviette"
- Zitat: "Der Patient bestimmt Geschwindigkeit und Reihenfolge der Mahlzeit"
- Zitat: "neben dem Bett, das sie auf entsprechende Höhe gebracht haben, sodass sie nicht auf ihn herabsehen" ✅ MATCH (stützt „auf Augenhöhe sitzen, nicht herabsehen")
- Zitat: "Bewusst den Ausdruck „Füttern" vermeiden; dieser wird nur im Zusammenhang mit Säuglingen und Tieren" ✅ MATCH (verbatim aus Pflege heute 7. Aufl., Kap. 7 — Respektvolle Kommunikation beim Essenreichen)
**Praxisfehler:** Stehen über dem Bett (Machtgefälle), Hetzen aus Zeitdruck.

**Misconceptions:**
- `M1`: **"Es reicht, wenn ich freundlich bin — Stehen oder Sitzen ist egal"** — Körperhaltung ist Teil der nonverbalen Kommunikation; Stehen über dem liegenden Patienten signalisiert Machtgefälle. Fachbegriff: "Haltungs-Unterschätzung".
- `M2`: **"Der Patient bekommt eh nichts mit, weil er dement ist"** — Menschen mit Demenz spüren Emotionen und Körperhaltung oft feinfühliger; Würde ist hier wichtiger, nicht weniger wichtig.

---

### F-03: Aspirationsschutz-Technik — Kopf nach vorn, kleine Bissen, Schluck abwarten

**Fakt:** Beim Anreichen: Kopf leicht nach vorne geneigt (Kinn Richtung Brust — die Epiglottis verschließt so die Trachea), kleine Bissen (halber Löffel), und erst der nächste Bissen, wenn der Patient fertig gekaut und heruntergeschluckt hat. Kein Druck, Patient bestimmt das Tempo.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11 Schlucktraining; DGG/DGN S1-LL Neurogene Dysphagie 2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Kopf leicht nach vorne geneigt" ✅ MATCH
- Zitat: "Bevor sie den nächsten Bissen anbieten, warten sie, bis der Patient fertig gekaut und heruntergeschluckt hat" ✅ MATCH
- Zitat: "Kleine Bissen sowie langsames und gründliches Kauen" ✅ MATCH (stützt „kleine Bissen")
- Hinweis: Die exakte Mengenangabe „halber Löffel" ist nicht verbatim belegt; durch „Kleine Bissen" inhaltlich gedeckt. Im Schüler-Content „halber Löffel" als Faustregel kennzeichnen, nicht als Zitat.
**Praxisfehler:** Kopf nach hinten (Reklination) beim Trinken aus engem Becher — öffnet die Luftröhre.

**Misconceptions:**
- `M1`: **"Den Kopf nach hinten beugen hilft beim Schlucken"** — Reklination öffnet die Trachea und ist hochgefährlich; der Kopf muss nach vorn. Für das Trinken: Nasenschlitzbecher. Fachbegriff: "Reklinations-Irrtum".
- `M2`: **"Große Bissen sind effizienter, der Patient ist schneller satt"** — Große Bissen überfordern den Schluckakt und erhöhen das Aspirationsrisiko; ein halber Löffel reicht.

---

### F-04: Dysphagie-Warnzeichen beim Anreichen

**Fakt:** Dysphagie (Schluckstörung) zeigt sich beim Essen durch: Speichel-/Essensaustritt aus dem Mund, Speisereste in Mund/Wangentaschen, gurgelnde Sprache/Stimmverschlechterung, häufiges Verschlucken, Husten und Würgen — oder gerade das Ausbleiben von Husten und Würgen. Tritt auf bei Schlaganfall, Schädel-Hirn-Trauma, Demenz, nach längerer Beatmung, Parkinson, MS.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11.2 Schluckstörung)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Gurgelnde Sprache, Stimmverschlechterung"
- Zitat: "Die Gefahren und Folgen einer Dysphagie können für den Betroffenen schwerwiegend sein"
- Zitat: "Speichel oder Essensreste laufen aus dem Mund" ✅ MATCH (stützt „Speichel-/Essensaustritt aus dem Mund")
- Zitat: "Speisereste sammeln sich in Mund oder Wangentaschen" ✅ MATCH (stützt „Speisereste in Mund/Wangentaschen")
- Zitat: "Häufiges Verschlucken, Husten und Würgen" ✅ MATCH (stützt „häufiges Verschlucken, Husten und Würgen")
- Zitat: "Ausbleiben von Husten und Würgen" ✅ MATCH (stützt „oder gerade das Ausbleiben von Husten und Würgen")
- Zitat: "Schlaganfall (➔ 37.6), M. Parkinson (➔ 37.11.1), Multiple Sklerose (➔ 37.10), Schädel-Hirn-Trauma" ✅ MATCH (stützt die Ursachen Schlaganfall, Parkinson, MS, SHT)
- ⚠️ **Ursachen „Demenz" und „nach längerer Beatmung" NICHT als Dysphagie-Ursachen im Korpus belegt** — die Ursachen-Aufzählung der neurogenen Dysphagie (Pflege heute 37.2.8) nennt Schlaganfall/Parkinson/MS/SHT/ALS, aber weder Demenz noch Beatmung; „Beatmung" erscheint nur in der Pneumonie-Risikoliste, nicht als Schluckstörungs-Ursache. Quelle beschaffen: DGN/DGG S1-Leitlinie „Neurogene Dysphagie" 2020 (Demenz, postextubatorische/Post-Beatmungs-Dysphagie). Bis dahin im Schüler-Content nur die belegten neurologischen Ursachen als gesichert ausgeben.
**Praxisfehler:** Langes Essen als reine Altersnormalität abtun statt als Warnzeichen werten.

**Misconceptions:**
- `M1`: **"Wenn der Patient nicht hustet, hat er keine Schluckstörung"** — Stille Aspiration ("silent aspiration") verläuft ohne Husten; gerade das Ausbleiben von Husten ist ein Warnzeichen. Fachbegriff: "Stille-Aspirations-Blindheit".
- `M2`: **"Bei Schluckstörung einfach pürieren — das löst das Problem"** — Dysphagie ist individuell; nur ein Schluck-Assessment (GUSS/Logopädie) zeigt die passende Konsistenz.

---

### F-05: Schluck-Screening vor oraler Kost (GUSS)

**Fakt:** Vor der Nahrungsaufnahme bei Dysphagie-Verdacht wird geprüft, ob Husten- und Schluckreflex intakt sind — ein Patient darf nur bei intakten Schutzreflexen essen oder trinken, sonst droht Aspiration (im Extremfall Erstickungstod). Strukturiertes Screening (z.B. GUSS — Gugging Swallowing Screen, Trapl et al. 2007) testet stufenweise von trocken über halbfest und flüssig bis fest; bei Versagen einer Stufe: Stopp, Logopädie.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11.3 Beurteilung des Schluckvorgangs; GUSS — Trapl et al., Stroke 2007;38:2948-2952)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ein Patient darf nur bei intakten Schutzreflexen essen oder trinken" ✅ MATCH (stützt die Reflex-Voraussetzung)
- ⚠️ **GUSS-Spezifika NICHT im Korpus belegt:** Weder „GUSS"/„Gugging Swallowing Screen" noch die stufenweise Reihenfolge „trocken → halbfest → flüssig → fest" sind in Pflege heute, IDDSI oder DNQP verbatim enthalten. Quelle beschaffen: Trapl et al., *Stroke* 2007;38:2948–2952 (GUSS-Originalarbeit). Bis dahin im Schüler-Content nur „strukturiertes Schluck-Screening, Stufen von leicht nach schwer, bei Versagen Stopp + Logopädie" formulieren, ohne GUSS-Stufenreihenfolge als belegt auszugeben.
**Praxisfehler:** Mit der schwierigsten Konsistenz (dünner Flüssigkeit) beginnen statt von leicht zu schwer.

**Misconceptions:**
- `M1`: **"Ich fange gleich mit Wasser an, das ist am schnellsten"** — Dünne Flüssigkeit ist am schwersten zu kontrollieren; Reihenfolge ist trocken → halbfest → flüssig → fest. Fachbegriff: "Reihenfolge-Fehler".
- `M2`: **"Wenn Stufe 2 nicht klappt, probiere ich Stufe 3 trotzdem"** — Jedes Versagen = sofort Stopp; das Screening ist kein Versuch-und-Irrtum-Verfahren.

---

### F-06: IDDSI — internationaler Standard für Konsistenz

**Fakt:** IDDSI (International Dysphagia Diet Standardisation Initiative, 2019) standardisiert Konsistenzen mit Levels 0-7 und ersetzt alte Bezeichnungen wie "Nektar", "Honig", "Pudding". Getränke: Level 0-4 (dünn → extrem dick); Nahrung: Level 3-7 (flüssig → normal). Geprüft mit dem Flow-Test (10-ml-Spritze). Hintergrund: Flüssigkeiten können in der Regel schlechter kontrolliert werden als dickflüssige Speisen.

**Prüfungsrelevanz:** mittel
**Wissensart:** Klassifikation
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Complete IDDSI Framework — Detailed Definitions 2.0, 2019, CC BY-SA 4.0; Pflege heute 7. Aufl., Kap. 7.11 — Auswahl der Speisen)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Flüssigkeiten können in der Regel schlechter kontrolliert werden als dickflüssige Speisen"
- Quelle: `leitlinien-volltext/iddsi-framework.txt`
- Zitat: "the IDDSI Framework consisting of a continuum of 8 levels (0-7)" (8 Levels 0–7)
- Zitat: "Levels are identified by numbers, text labels and colour codes." (Kennzeichnung)
- Zitat: "Less than 1 mL remaining in the 10 mL slip tip syringe" (Flow-Test, 10-ml-Spritze, Beispiel Level 0)
- Zitat: "texture modified foods and thickened liquids used for individuals with dysphagia of all ages" (Geltungsbereich)
- Hinweis (TEILWEISE geklärt): Die Aussage "Levels 0–7 + Flow-Test (10-ml-Spritze)" ist mit IDDSI 2019 nun verbatim belegt. Die exakte Bereichsaufteilung "Getränke 0–4 / Nahrung 3–7" ist in diesem Detailed-Definitions-Volltext nicht als einzelner Satz verbatim enthalten (im Original nur grafisch dargestellt) → ⚠️ bleibt für die Bereichsgrenzen (IDDSI Complete Framework Grafik / Cichero et al. 2017, Dysphagia 32:293–314).
**Praxisfehler:** Alte Nomenklatur (Nektar/Honig/Pudding) als offizielle Begriffe verwenden.

**Misconceptions:**
- `M1`: **"Je dicker das Getränk, desto sicherer für jeden Dysphagie-Patienten"** — Zu dick bedeutet weniger Trinkmenge (Dehydration) und Geschmacksverlust; das individuell passende Level (GUSS/Logopädie) ist richtig. Fachbegriff: "Dicker-ist-besser-Irrtum".
- `M2`: **"Nektar, Honig, Pudding sind die offiziellen Begriffe"** — Seit IDDSI 2019 durch Level 1-4 ersetzt; die alten Begriffe waren uneinheitlich.

---

### F-07: Andicken von Getränken

**Fakt:** Flüssigkeiten werden bei Bedarf mit einem Andickungsmittel angedickt, damit der Patient den Schluckvorgang besser kontrollieren kann. Vorgehen: Pulver gleichmäßig einstreuen, umrühren, ca. 2 Minuten quellen lassen, nochmal rühren, dann IDDSI-Level prüfen. Keine kohlensäurehaltigen Getränke (CO2 zerstört die Bindung), keine Medikamente ohne Absprache mit der Apotheke.

**Prüfungsrelevanz:** mittel
**Wissensart:** Maßnahme
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11 — Trinktraining; IDDSI 2019; Hersteller-Fachinfos)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Flüssigkeiten ggf. mit einem Andickungsmittel andicken" ✅ MATCH (stützt die Maßnahme; im Quelltext eingebettet in „Patienten können den Schluckvorgang so besser kontrollieren …")
- ⚠️ **„ca. 2 Minuten Quellzeit" NICHT im Korpus belegt** — kein Zeitwert für das Andicken in Pflege heute/IDDSI/DNQP. Quelle beschaffen: Hersteller-Fachinformation (z. B. Nutilis/Resource ThickenUp, Quellzeit i. d. R. 1–3 Min) oder IDDSI-Methodik. Bis dahin als „kurze Quellzeit nach Herstellerangabe abwarten" formulieren.
- ⚠️ **„Keine kohlensäurehaltigen Getränke (CO₂ zerstört die Bindung)" NICHT im Korpus belegt** — Pflege heute nennt dies nicht im Kontext Andicken. Quelle beschaffen: Hersteller-Fachinformation Andickungsmittel. Bis dahin im Schüler-Content nur „stille Getränke verwenden, Herstellerhinweise beachten".
**Praxisfehler:** Sofort geben ohne Quellzeit — das Getränk dickt erst im Mund/Rachen nach.

**Misconceptions:**
- `M1`: **"Ich rühre einmal um und gebe es direkt dem Patienten"** — Ohne 2 Min Quellzeit ist die Flüssigkeit zu dünn und dickt erst beim Schlucken nach. Fachbegriff: "Quell-Zeit-Fehler".
- `M2`: **"Ich gebe Cola mit Andickungspulver, das schmeckt besser"** — Kohlensäure zerstört die Andickung; nur stille Getränke verwenden.

---

### F-08: Spezielle Trinkhilfen (Nasenschlitzbecher u.a.)

**Fakt:** Normale Becher mit engem Durchmesser sind bei Dysphagie ungeeignet, weil der Kopf zum Trinken in den Nacken gelegt werden muss (Reklination → Aspirationsgefahr). Besser sind Gefäße mit Nasenausschnitt (Nasenschlitzbecher) oder großem Durchmesser. Ein Sicherheitstrinkbecher gibt nur eine definierte Menge pro Schluck ab. Strohhalm nur auf logopädische/ärztliche Anordnung.

**Prüfungsrelevanz:** mittel
**Wissensart:** Maßnahme
**Bloom-Potential:** 2-3
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11 — Trinktraining/Trinkgefäße; DGG/DGN 2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "und Trinkgefäße mit einem engen Durchmesser sind nicht geeignet, da der Kopf zum Trinken in den Nacken gelegt werden muss" ✅ MATCH (stützt Reklinations-Begründung)
- Zitat: "Besser sind Gefäße mit Nasenausschnitt" ✅ MATCH
- Hinweis: „Sicherheitstrinkbecher (definierte Menge pro Schluck)" und „Strohhalm nur auf Anordnung" sind nicht verbatim belegt — als didaktische Ergänzung kennzeichnen, nicht als Zitat.
**Praxisfehler:** Strohhalm als pauschale Standardlösung — manche Patienten saugen zu schnell.

**Misconceptions:**
- `M1`: **"Ein Strohhalm ist die einfachste Lösung für alle Dysphagie-Patienten"** — Manche saugen zu stark und bekommen zu viel auf einmal (Aspiration); Strohhalm nur auf Anordnung. Fachbegriff: "Strohhalm-Pauschallösung".
- `M2`: **"Der Nasenschlitzbecher sieht lustig aus, das ist schlecht für die Würde"** — Die Alternative wäre Aspirationsrisiko; Würde heißt hier: sicher und selbstständig trinken können.

---

### F-09: Kommunikation und Tempo beim Anreichen

**Fakt:** Beim Anreichen wird dem Patienten Zeit gelassen und er nie gedrängt; Pausen sind nötig, da Esstraining Kraft und Konzentration kostet. Kommunikationsregeln: Autonomie wahren (fragen statt bestimmen), Handlungen ankündigen, offene Fragen stellen, nie gleichzeitig sprechen und essen (Aspirationsrisiko), Körpersprache lesen und respektieren. Bei Ablehnung: Grund suchen, nie zwangsfüttern (§ 1901a BGB).

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept (Schwerpunkt KB II.1 Kommunikation)
**Bloom-Potential:** 4 (Analysieren, Bewerten)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11 — Trink- und Esstraining; § 1901a BGB)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Dem Patienten Zeit lassen und ihn nie drängen" ✅ MATCH (stützt Tempo)
- Zitat: "Pausen einlegen, da das Trink- und Es" ✅ MATCH (stützt Pausen; im Quelltext „… Esstraining Kraft und Konzentration kostet")
- ⚠️ **§ 1901a BGB als Beleg für „nie zwangsfüttern" ist eine gedehnte Zitierung:** § 1901a BGB im Korpus betrifft die **Patientenverfügung** ("kann man festlegen, ob und wie man in bestimmten Krankheitssituationen behandelt werden möchte") — nicht ein verbatim Verbot des Zwangsfütterns. Die Selbstbestimmung ist damit grundsätzlich gedeckt, das spezifische Zwangsernährungs-Verbot aber nicht. Quelle beschaffen / korrekt zitieren: Zwangsernährung ohne Einwilligung = Körperverletzung (§ 223 StGB) bzw. Patientenautonomie (§ 1901a Abs. 1 BGB Patientenverfügung). Bis dahin im Schüler-Content „Zwangsfüttern verletzt die Selbstbestimmung (Patientenverfügung, § 1901a BGB)" präzise statt pauschal.
- Hinweis: Die Kommunikationsregeln (Autonomie wahren, Handlungen ankündigen, offene Fragen, nicht gleichzeitig sprechen+essen) sind didaktisch korrekt, im Ernährungs-Kapitel aber nur teils verbatim belegt (Zeit lassen/Pausen). „Nicht gleichzeitig sprechen und essen" ist als Aspirationslogik fachlich korrekt, hier aber nicht verbatim — als fachliche Ableitung kennzeichnen.
**Praxisfehler:** Beim Kauen/Schlucken plaudern (Aspirationsrisiko) oder bei Ablehnung weiterfüttern (Paternalismus).

**Misconceptions:**
- `M1`: **"Wenn der Patient ablehnt, muss ich trotzdem füttern — er braucht Energie"** — Zwangsfüttern verletzt die Selbstbestimmung (§ 1901a BGB) und ist Gewalt; Grund verstehen, Alternativen anbieten, Arzt informieren. Fachbegriff: "Paternalismus-Falle".
- `M2`: **"Ich frage: 'Schmeckt's?' — das reicht als Kommunikation"** — Geschlossene Fragen liefern automatische Ja-Antworten; offene Fragen ("Wie schmeckt dir das?") geben echte Information.

---

### F-10: Essen anreichen bei Kindern

**Fakt:** Kinder sind keine kleinen Erwachsenen: Essensverweigerung ab ca. 2 Jahren ist entwicklungspsychologisch oft normal. Prinzipien: Wunschkost, spielerisch anreichen, kein Druck/keine Bestrafung, kleine Portionen häufiger, Eltern als Partner einbeziehen. Fingerfood (mundgerechte Portionen) fördert Selbstständigkeit. Bei anhaltender Verweigerung über mehrere Mahlzeiten: Kinderärztin informieren.

**Prüfungsrelevanz:** mittel
**Wissensart:** Maßnahme
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7 — Fingerfood/mundgerechte Portionen; DGE 2024)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "„Fingerfood“, d. h. lauwarme Nahrung in mundgerechten Portionen"
- Zitat: "Manchmal isst der Patient – insbesondere Kinder – lieber in Anwesenheit seiner Familie" ✅ MATCH (stützt „Eltern als Partner einbeziehen")
- Quelle: `kinderkrankenpflege-volltext/kinderkrankenpflege.txt`
- Zitat: "abweichendem Essverhalten, das besonders im Kleinkindsalter häufig zu beobachten ist, i. d. R. keinen Krankheitswert hat und entwicklungsbedingt von alleine verschwindet" ✅ MATCH (stützt „Essensverweigerung im Kleinkindalter entwicklungspsychologisch normal")
- Zitat: "Das Kind kann seine Nahrungsaufnahme von entsprechend vorbereiteten Nahrungsmitteln weitestgehend selbstständig durchführen. Das Kind bevorzugt vertraute Geschmacksrichtungen" ✅ MATCH (aus Entwicklungstabelle: „ab ca. 2 Jahre" — stützt Selbstständigkeit und vertraute Speisen ab 2 Jahren)
- Zitat: "Es werden jeweils kleine Portionen und Schlucke gereicht" ✅ MATCH (stützt „kleine Portionen")
- Zitat: "Die Portionen werden nach Wunsch gerichtet und das Kind bestimmt die Reihenfolge und Geschwindigkeit der Nahrungsaufnahme" ✅ MATCH (stützt Wunschkost + Autonomie des Kindes beim Essen)
- Zitat: "empfiehlt es sich, ihm seine altersgemäße Wunschkost in vielen kleinen Mahlzeiten anzubieten" ✅ MATCH (stützt Wunschkost + kleine Portionen häufiger)
- ⚠️ **Teilaussagen „spielerisch anreichen", „kein Druck/keine Bestrafung" und „bei anhaltender Verweigerung Kinderärztin informieren" NICHT im Korpus belegt** — Hoehl/Kullick belegen die Entwicklungsnormalität und kleine Portionen/Wunschkost, nennen aber weder eine spielerische Anreichungstechnik noch ein Druckverbot noch die Empfehlung zur Kinderärztin bei anhaltender Verweigerung in dieser Form verbatim. Bis dahin im Schüler-Content als pädiatrische Praxisempfehlung kennzeichnen.
**Praxisfehler:** Druck oder Bestrafung ("kein Nachtisch, wenn du das nicht isst").

**Misconceptions:**
- `M1`: **"Bei Kindern muss ich strenger sein, sonst essen sie nie genug"** — Druck und Bestrafung sind pädagogisch schädlich und bei kranken Kindern zusätzlich belastend; bei Abwehr: Pause, anderes anbieten, später.
- `M2`: **"Eltern stören beim Essen, die soll ich rausschicken"** — Eltern kennen das Kind und sind Partner; sie wissen, was beim Essen hilft.

---

### F-11: Essen anreichen bei Demenz

**Fakt:** Bei Demenz erschweren Agnosie (Speisen nicht erkennen) und Apraxie (Besteck nicht benutzen können) das Essen. Anpassungen: Fingerfood statt Besteck (erhält Selbstständigkeit), eine erkennbare Komponente pro Teller statt Mischungen, ruhige reizarme Umgebung (keine Reizüberflutung), biografie-vertraute Speisen. Selbstständigkeit so lange wie möglich erhalten.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 3-4
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7 — Selbstständigkeit fördern / kognitiv beeinträchtigte Menschen; DGE 2024 Ernährung im Alter)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Insbesondere für Menschen mit kognitiven Einschränkungen muss eine Reizüberflutung vermieden werden"
- Zitat: "Agnosie. Störung des Erkennens" ✅ MATCH (stützt „Agnosie = Speisen nicht erkennen")
- Zitat: "Apraxie. Unfähigkeit, bestimmte Hand" ✅ MATCH (im Quelltext: „Unfähigkeit, bestimmte Handlungen koordiniert … auszuführen" — stützt „Apraxie = Besteck nicht benutzen können")
- Zitat: "oder auch Speisen aufgrund von Demenz" ✅ MATCH (im Quelltext: „… nicht identifizieren können, können die Speisen durch Anfassen ‚begreifen‘" — stützt Agnosie-Anpassung)
- Zitat: "Besonders bei dementen Menschen wurden in den letzten Jahren erfolgreich Ansätze mit Fingerfood" ✅ MATCH (stützt „Fingerfood statt Besteck bei Demenz")
- Zitat: "Konsistenzen nicht mischen, z. B. Nudelsuppe oder Joghurt mit Früchten" ✅ MATCH (aus Kap. 7.11 „Auswahl der Speisen" — stützt die Empfehlung, keine Mischkonsistenzen anzubieten; deckt das Prinzip „eine erkennbare Komponente/Konsistenz statt Mischungen" inhaltlich ab)
- ⚠️ **Teilaussage „biografie-vertraute Speisen" NICHT im Korpus verbatim belegt** — Pflege heute nennt „Vorlieben des Patienten berücksichtigen, z. B. Lieblingsessen" (Kap. 7 allgemein) und „Lieblingsessen" punktuell, aber keine verbatim Aussage über biografieorientierte Speisenauswahl speziell für Demenzpatienten. Quelle beschaffen: DNQP-Expertenstandard „Beziehungsgestaltung in der Pflege von Menschen mit Demenz" oder Böhm/Psychobiografisches Pflegemodell. Bis dahin im Schüler-Content als didaktische Anpassung kennzeichnen.
**Praxisfehler:** Aus Zeitgründen füttern, obwohl der Patient mit Fingerfood noch selbst essen könnte.

**Misconceptions:**
- `M1`: **"Wenn er das Essen nicht erkennt, muss ich ihm einfach mehr erklären"** — Bei Agnosie hilft sprachliche Erklärung nicht mehr; besser: vertraute Speisen zeigen, Bissen vormachen, Geruch aktivieren. Fachbegriff: "Kognitive Überforderung".
- `M2`: **"Animation und Gesellschaft beim Essen helfen Demenz-Patienten"** — Beim Essen überfordert Stimulation (TV, Musik) und führt zum Abbruch; hier gilt: ruhige Umgebung.

---

### F-12: Beobachtung während des Essens + Nachsorge

**Fakt:** Während des Anreichens beobachtet die Pflegefachperson parallel Mundbewegungen (Lippenverschluss, Kauen, Zungenbewegung, Taschenbildung), Schluckakt (Heben/Senken des Kehlkopfs, Stimme nach dem Schluck) und Atmung (Husten, Atemnot). Nach dem Essen: Patient noch etwa eine halbe Stunde aufrecht sitzen lassen, um eine Aspiration zu vermeiden.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3-4
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11 — Trink- und Esstraining/Schluckreflex; DGG/DGN 2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Den Patienten nach dem Essen noch etwa eine halbe Stunde aufrecht sitzen lassen, um eine Aspiration zu vermeiden"
- Zitat: "Beobachtung von Mundmotorik und Zungenbeweglichkeit, Muskeltonus im Gesicht, Fähigkeit zur Kehlkopfhebung" ✅ MATCH (stützt Beobachtung von Mundbewegung/Zungenbewegung + Heben des Kehlkopfs)
- Zitat: "Husten nach dem Schlucken" ✅ MATCH (stützt Atmungs-/Hustenbeobachtung beim Schluckakt)
- ⚠️ **Detail-Items „Lippenverschluss", „Taschenbildung" und „Stimme nach dem Schluck (feuchte/nasse Stimme)" NICHT verbatim im Korpus** — Pflege heute belegt Mundmotorik/Zungenbeweglichkeit/Kehlkopfhebung sowie „Stimmverschlechterung" (F-04), nicht aber diese drei exakten Beobachtungsbegriffe. Quelle beschaffen: DGN/DGG S1-Leitlinie „Neurogene Dysphagie" 2020 oder GUSS-Originalarbeit (Trapl et al. 2007, „voice quality" nach Schluck). Bis dahin im Schüler-Content als fachlich abgeleitete Beobachtungsmerkmale kennzeichnen.
**Praxisfehler:** Patient direkt nach dem Essen flach hinlegen (Reflux-/Aspirationsrisiko).

**Misconceptions:**
- `M1`: **"Wenn der Adamsapfel sich bewegt, ist alles sicher"** — Die Kehlkopfbewegung zeigt nur, dass geschluckt wurde, nicht wohin der Bolus ging; immer mehrere Zeichen prüfen (Stimm-Check, Mundkontrolle, Atmung). Fachbegriff: "Adamsapfel-Alleinkriterium".
- `M2`: **"Nach dem Essen kann ich den Patienten direkt ins Bett legen"** — Der Oberkörper muss mindestens 30 Min hoch bleiben (Reflux-/Pneumonie-Risiko).

---

### F-13: Dokumentation von Essen und Trinken

**Fakt:** Jede Mahlzeit wird dokumentiert: Essmenge (Portion ¼/½/¾/voll oder Gramm), Trinkmenge (ml exakt, ggf. Ein-/Ausfuhr-Bilanz), Konsistenz (IDDSI-Level), Selbstständigkeit (selbst/Teilhilfe/Vollhilfe), Auffälligkeiten (Husten, Verweigerung, Schmerzen) sowie Assessment-Parameter (Gewicht, MNA). Die Einrichtung stellt geeignete Instrumente und Hilfsmittel zur Einschätzung und Dokumentation bereit (DNQP). Dokumentationspflicht nach § 630f BGB.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Dokumentation
**Bloom-Potential:** 5 (Bewerten — Entscheiden was relevant ist)
**Primärquelle:** (Expertenstandard Ernährungsmanagement DNQP; § 630f BGB)
**Beleg:**
- Quelle: `dnqp-standards-index/ernaehrungsmanagement.txt`
- Zitat: "Die Einrichtung stellt sicher, dass geeignete Instrumente und Hilfsmittel zur Einschätzung und Dokumentation zur Verfügung stehen" ✅ MATCH (stützt Bereitstellungspflicht)
- Quelle: `leitlinien-volltext/bgb-630f.txt`
- Zitat: "Bürgerliches Gesetzbuch (BGB) § 630f Dokumentation der Behandlung"
- Zitat: "Der Behandelnde ist verpflichtet, zum Zweck der Dokumentation in unmittelbarem zeitlichen Zusammenhang mit der Behandlung eine Behandlungsakte in Papierform oder elektronisch zu führen."
**Praxisfehler:** Nur "Besonderes" notieren statt jede Mahlzeit — Verlaufstrends (schleichende Exsikkose) bleiben unsichtbar.

**Misconceptions:**
- `M1`: **"Ich schreibe nur auf, wenn was besonderes war — sonst ist es Routine"** — § 630f BGB verlangt lückenlose Dokumentation; Probleme erkennt man nur über Verlaufsdaten. Fachbegriff: "Dokumentations-Lücke".
- `M2`: **"Trinkmenge schätze ich — genau messen ist übertrieben"** — Bei herz-/nieren-/lungenkranken Patienten ist exakte Bilanzierung entscheidend; "ein halber Becher" kann 100 oder 200 ml sein.
