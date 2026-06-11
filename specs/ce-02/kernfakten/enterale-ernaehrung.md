# Kernfakten: Enterale & parenterale Ernährung

| Feld | Wert |
|------|------|
| themaId | `enterale-ernaehrung` |
| ceId | `ce-02` |
| cluster | D (Ernährung) |
| geschätzteUE | 7 |
| wissensart | handlung |
| quellen | Pflege heute 7. Aufl. Kap. 7.7 Enterale Ernährung über Sonden; ASPEN Consensus Recommendations for Refeeding Syndrome 2020 (Nutr Clin Pract 35(2):178–195); DNQP Expertenstandard Ernährungsmanagement (2. Aktual.); DGEM S3-Leitlinie Klinische Ernährung 2013/2020 |
| einträge | 11 |
| erstellt | 2026-06-10 (Pipeline v9) |
| grounding | 2026-06-11 auf STÜTZT gehoben (Dozentin A): 67 Verbatim-Belege, alle ✅ MATCH. Pro Teilaussage ein Beleg (R2). [F-09 Spülmenge via DGEM-Heimenterale 2024 belegt: 20–40 mL.] „schwere Mukositis" (F-01) → korrigiert auf belegtes „Stenosen im MDT"; Cola-Aussage (F-09) → an Korpus angepasst (Ausnahme-Spüllösung). 2026-06-11 (Welle icare-Volltext): F-01 karenzbedingte Darmschleimhaut-Atrophie via icare-krankheitslehre verbatim belegt (⚠️ gelöst); F-11 >800-mosmol/l-Schwelle via icare-pflege + icare-examen-kompakt zusätzlich verbatim verstärkt. Verbleibende ⚠️ (DGEM-S3-Tool, im icare-Korpus NICHT verbatim): pH <5,5 (F-03 — DGEM-Heimenterale belegt ≤5; icare-pflege nennt „Magensäure pH ca. 2"), ZPE-Obergrenze ~2000 mosmol/l (F-11), Cola-flockt-Eiweiß-Aussage (F-09/M1, nur falls als Lehraussage genutzt). |

---

### F-01: Enteral vs. parenteral — "Wenn der Darm funktioniert, wird er benutzt"

**Fakt:** Reicht die orale Ernährung nicht aus, gibt es zwei Wege der künstlichen Ernährung: enteral (über eine im Magen-Darm-Trakt platzierte Sonde) und parenteral (über venöse Zugänge, am Darm vorbei). Enteral ist fast immer erste Wahl — weniger Komplikationen. Parenteral (totale parenterale Ernährung) wird gewählt, wenn der Verdauungstrakt völlig umgangen werden muss, z. B. bei Ileus, Stenosen im Magen-Darm-Trakt oder schwerem Kurzdarmsyndrom.

**Prüfungsrelevanz:** hoch
**Wissensart:** Definition
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.5; DGEM S3-Leitlinie Klinische Ernährung 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Dann wird der Patient künstlich ernährt" (zwei Wege)
- Zitat: "die enterale Ernährung über eine im oberen" (enteraler Weg: Sonde im MDT)
- Zitat: "die parenterale Ernährung über venöse Zugänge" (parenteraler Weg, am Darm vorbei)
- Zitat: "Die enterale Ernährung ist im Vergleich zur" (enteral komplikationsärmer — Forts. „parenteralen Ernährung mit deutlich weniger Komplikationen behaftet")
- Zitat: "wird der Verdauungstrakt völlig umgangen" (TPE-Indikation)
- Zitat: "Stenosen im Magen-Darm-Trakt oder schwerem Kurzdarmsyndrom" (parenterale Indikationen; Forts. „bei Ileus … oder schwerem Kurzdarmsyndrom")
- Quelle: `icare-krankheitslehre-volltext/icare-krankheitslehre.txt`
- Zitat: "bei zu langer Nahrungskarenz eine Atrophie der Darmschleimhaut mit dem Risiko" (Forts. „einer Einwanderung von Darmbakterien in das nekrotische Gewebe droht" — belegt nutritiv/karenzbedingte Darmschleimhaut-Atrophie bei fehlender enteraler Ernährung; trägt den Transfer „Darm verkümmert ohne Benutzung")
- Hinweis: Der Fachbegriff „Zottenatrophie" ist im Korpus nur im Zöliakie-Kontext belegt (icare-pflege/-krankheitslehre); die karenzbedingte Mukosa-Atrophie ist nun aber über icare-krankheitslehre (Pankreatitis-Kapitel: „bei zu langer Nahrungskarenz eine Atrophie der Darmschleimhaut") verbatim belegt. Im Content „Atrophie der Darmschleimhaut" zitieren, „Zottenatrophie" als didaktische Merkhilfe kennzeichnen.
**Praxisfehler:** Parenteral wird als "moderner" für besser gehalten — dabei ist enteral komplikationsärmer.
**Transfer:** Wie ein Muskel, der nur stark bleibt, wenn er benutzt wird: Der Darm verkümmert (Zottenatrophie), wenn er nicht ernährt wird.

**Misconceptions:**
- `M1`: **"Parenteral ist moderner und daher immer besser"** — Infusionen wirken technisch, bringen aber Infektionsrisiko, und der Darm verkümmert ohne Benutzung. Fachbegriff: "Modernitäts-Trugschluss".
- `M2`: **"Enterale Ernährung geht nur über eine PEG"** — Enteral heißt "über den Magen-Darm-Trakt": auch nasogastrale Sonde und Trinknahrung sind enteral.
- `M3`: **"Parenteral ersetzt alles ohne Nachteile"** — Der Darm verkümmert (Zottenatrophie), der zentrale Zugang birgt Sepsisgefahr.

---

### F-02: Sondenformen nach Dauer und Lage

**Fakt:** Die Sondenwahl richtet sich nach Dauer und Endlage. Kurzzeitig (<4 Wochen): nasogastrale Sonde (Nase → Magen) oder nasojejunale Sonde (Nase → Dünndarm, bei Aspirationsrisiko). Langzeitig (>4 Wochen): PEG (perkutane endoskopische Gastrostomie, Bauchdecke → Magen) oder PEJ (perkutane endoskopische Jejunostomie, → Dünndarm). Das Legen ist ärztliche Aufgabe, wird aber häufig delegiert — ebenso Verabreichung, Pflege und Entfernung.

**Prüfungsrelevanz:** hoch
**Wissensart:** Klassifikation
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.1; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Dünner Schlauch aus Kunststoff oder Weichgummi"
- Zitat: "perkutane endoskopische Gastrostomie"
- Zitat: "Liegedauer je nach Material bis" (NG-Sonde — Forts. „zu vier Wochen"; deckt kurzzeitig <4 Wochen)
- Zitat: "Länger oder dauerhaft notwendige enterale Ernährung" (PEG-Indikation: Langzeit)
- Zitat: "Perkutane Punktion des Magens im Rahmen einer Gastroskopie" (PEG endoskopisch angelegt)
- Zitat: "die Verabreichung von Sondenkost, die Pflege der liegenden Sonde" (delegierbare Pflegeaufgaben)
- Hinweis: Pflege heute nennt für die NG-Sonde verbatim „Liegedauer … bis zu vier Wochen" und für PEG/PEJ „länger oder dauerhaft" — die im Fakt genutzte saubere Grenze „<4 / >4 Wochen" operationalisiert das (NG-Wert verbatim belegt; die >4-Wochen-Grenze für PEG ist die gängige DGEM-Konvention, in Pflege heute qualitativ als „länger/dauerhaft" formuliert).
**Praxisfehler:** PEG wird fälschlich für kurzfristige postoperative Ernährung gelegt — dafür ist die nasogastrale Sonde gedacht.

**Misconceptions:**
- `M1`: **"Die PEG ist für kurzzeitige Ernährung nach OP"** — PEG wird endoskopisch angelegt und ist für dauerhafte Ernährung (>4 Wochen). Kurzfristig: NG-Sonde. Fachbegriff: "Kurzzeit-PEG-Irrtum".
- `M2`: **"Bei Aspirationsrisiko nimmt man eine größere NG-Sonde"** — Nicht die Größe, sondern die Lage der Spitze zählt: jejunale Sonde (NJ/PEJ) umgeht den Magen.
- `M3`: **"PEG und NG-Sonde enden beide im Dünndarm"** — Beide enden im Magen; nur NJ und PEJ reichen ins Jejunum.

---

### F-03: Lagekontrolle der Sonde — pH-Test statt Luftinsufflation

**Fakt:** Vor jeder Nahrungszufuhr muss die Sondenlage kontrolliert werden. Die Überprüfung mit Indikatorpapier (pH-Wert) ist die sicherste Methode; pH <5,5 spricht für Magenlage. Zusätzlich immer die Markierung auf der Sonde berücksichtigen. Eine falsch liegende Sonde ist lebensgefährlich (Aspiration in die Lunge). Bei jejunal liegenden Sonden ist die Lufteinspritzung nicht aussagekräftig — Patienten werden auf Dislokationszeichen (Regurgitation, Erbrechen) beobachtet.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.1; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Überprüfung mit Indikatorpapier ist die sicherste Methode" (pH-Test sicherste Methode; Forts. „(pH-Wert)")
- Zitat: "die Markierung auf der Sonde zu berücksichtigen" (zusätzlich Markierung prüfen)
- Zitat: "kann die korrekte Lage der Sonde nicht wie bei einer gastral liegenden Sonde mittels Lufteinspritzen geprüft werden" (jejunal: Lufttest nicht aussagekräftig)
- Quelle: `leitlinien-volltext/dgem-heimenterale-2024.txt`
- Zitat: "pH-Bestätigung des Mageninhalts (pH 5 oder weniger)"
- Hinweis: DGEM-Heimenterale-Leitlinie 2024 belegt den pH-Schwellenwert als "pH 5 oder weniger" (≤5), nicht als <5,5 wie im Fakt formuliert. Der Fakt-Text ("pH <5,5") ist damit inhaltlich strenger als die Quelle, aber liegt im sicheren Bereich (jeder pH ≤5 ist auch <5,5). NICE NG-Tube-Standard (≤5,5) für die weitere Grenze beschaffen oder Fakt auf die belegte DGEM-Formulierung anpassen.
**Praxisfehler:** Verlass auf die veraltete Luftinsufflation mit Stethoskop — Geräusche entstehen auch bei Fehllage in Lunge oder Ösophagus.

**Misconceptions:**
- `M1`: **"Wenn Luft hörbar einblubbert, liegt die Sonde sicher im Magen"** — Luftinsufflation ist nicht mehr Standard; Geräusche täuschen auch bei Fehllage. Fachbegriff: "Auskultations-Trugschluss".
- `M2`: **"pH-Messung ist bei allen Patienten zuverlässig"** — Protonenpumpenhemmer heben den Magen-pH, dann ist der Test unzuverlässig → Röntgen.
- `M3`: **"Die Lage muss nur einmal bei Anlage geprüft werden"** — Vor jeder Gabe und pro Schicht prüfen; Sonden verlagern sich durch Husten/Erbrechen.

---

### F-04: Applikationsformen — Bolus, Schwerkraft, Pumpe

**Fakt:** Bei NG-Sonde oder PEG kann die Sondennahrung portionsweise als Bolus (max. 100 ml in 5–10 Min.), halbkontinuierlich per Schwerkraft (500 ml in ca. 30–45 Min.) oder kontinuierlich mit Pumpe (ca. 100 ml/h) gegeben werden. Bei Sonden mit Spitze im Jejunum muss die Sondenkost kontinuierlich über eine Ernährungspumpe gegeben werden, da die Speicherfunktion des Magens fehlt. Magenrest vor Gabe prüfen: Lassen sich >50 % der letzten Nahrung aspirieren, liegt ggf. eine Magenentleerungsstörung vor — Arzt informieren.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.5; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Bolus (maximal 100 ml in 5–10 Min.), halbkontinuierlich unter Ausnutzung der" (Bolus max. 100 ml/5–10 Min.)
- Zitat: "Schwerkraft (500 ml in ca. 30–45 Min.) oder" (halbkontinuierlich/Schwerkraft 500 ml/30–45 Min.)
- Zitat: "kontinuierlich mithilfe einer Pumpe (ca." (kontinuierlich Pumpe; Forts. „100 ml pro Stunde")
- Zitat: "muss die Sondenkost kontinuierlich über eine Ernährungspumpe" (Jejunum: zwingend kontinuierlich/Pumpe)
- Zitat: "Lassen sich mehr als 50 % der letzten" (Magenrest >50 % aspirierbar; Forts. „Nahrung aspirieren … liegt ggf. eine Magenentleerungsstörung vor")
- Zitat: "liegt ggf. eine Magenentleerungsstörung vor" (Konsequenz: Arzt informieren)
**Praxisfehler:** Bolusgabe bei Dünndarm-Sonden — der Dünndarm hat keine Speicherfunktion, Folge sind Durchfall und Kreislaufprobleme.

**Misconceptions:**
- `M1`: **"Bolus ist bei allen Sondentypen möglich"** — Bolus nur bei Magen-Sonden (NG, PEG); im Jejunum droht Dumping. Fachbegriff: "Universal-Bolus-Irrtum".
- `M2`: **"Die Pumpe ist nur für Intensivpatienten"** — Pumpe ist an die Sondenlage gebunden (jede Dünndarm-Sonde), nicht an die Krankheitsschwere.
- `M3`: **"Spülen vor/nach der Gabe ist unnötig"** — Ohne Spülen verkleben Nahrungsreste und die Sonde verstopft.

---

### F-05: Sondenkost-Arten — standardisierte Industrienahrung

**Fakt:** Sondenkost ist standardisierte Industrienahrung, kein püriertes Essen — Selbstgefertigte (Home-made-)Kost ist in der Regel nicht zu empfehlen. Hochmolekulare (vollbilanzierte) Standardnahrung setzt erhaltene Verdauungsfunktion voraus; niedermolekulare Kost enthält die Nährstoffe resorptionsfähig (kaum Verdauungsleistung nötig). Stoffwechseladaptierte Spezialdiäten berücksichtigen z. B. Diabetes, Leber-/Niereninsuffizienz oder Intensivpatienten. Die Auswahl erfolgt nach Arztanordnung.

**Prüfungsrelevanz:** mittel
**Wissensart:** Fakt
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.5; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Hochmolekulare Sondenkost: vollbilanzierte Standardnahrung" (hochmolekular = vollbilanziert)
- Zitat: "Verdauungsfunktion muss erhalten sein" (hochmolekular setzt erhaltene Verdauung voraus)
- Zitat: "enthalten die Nährstoffe bereits in resorptionsfähigen Bestandteilen" (niedermolekular: resorptionsfähig, kaum Verdauungsleistung)
- Zitat: "Stoffwechseladaptierte Sondenkost" (Spezialdiäten: Diabetes, Leber/Niere, Intensiv)
- Zitat: "Selbstgefertigte Sondenkost (Home-made" (Home-made i. d. R. nicht empfohlen)
**Praxisfehler:** Püriertes Küchenessen über die Sonde geben — verstopft die Sonde und hat unklare Zusammensetzung.

**Misconceptions:**
- `M1`: **"Sondenkost ist püriertes normales Essen"** — Sie ist industriell hergestellte, sterile Nahrung mit definierter Zusammensetzung. Fachbegriff: "Küchen-Nahrungs-Irrtum".
- `M2`: **"Alle Patienten bekommen die gleiche Standard-Sondenkost"** — Die Wahl hängt von Diagnose und Bedarf ab (Diabetes-, Nieren-, hochkalorische Formel).
- `M3`: **"Ballaststoffe weglassen, damit die Sonde nicht verstopft"** — Moderne ballaststoffhaltige Kost verstopft nicht; nur initial nach Darm-OP verzichtet man.

---

### F-06: Tägliche PEG-Pflege — Mobilisieren gegen Buried-Bumper-Syndrom

**Fakt:** Bei liegender PEG wird die Eintrittsstelle mit Kochsalzlösung gereinigt und auf Entzündungszeichen, Sekret und Hypergranulation beobachtet. Die Sonde wird mobilisiert: 2–3 cm hin- und herschieben und um 360° drehen — das verhindert das Einwachsen der inneren Halteplatte in die Mageninnenwand (Buried-Bumper-Syndrom). Die äußere Halteplatte spannungsfrei (ca. 0,5 cm über Hautniveau) einlegen, kein starker Zug. Ausnahme: Eine Jet-PEG darf nicht gedreht werden.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.3; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Eintrittsstelle mit Kochsalzlösung reinigen" (Reinigung mit NaCl)
- Zitat: "Hypergranulation" (Beobachtung auf Entzündungszeichen, Sekret, Hypergranulation)
- Zitat: "Sonde mobilisieren: 2–3 cm hin- und herschieben und um 360° drehen" (Mobilisieren 2–3 cm + 360°)
- Zitat: "Eine Jet-PEG" (Forts. „darf nicht gedreht werden, um eine Dislokation zu vermeiden")
- Zitat: "verhindert das Einwachsen der inneren Halteplatte in die Mageninnenwand" (Buried-Bumper-Prävention)
- Zitat: "Halteplatte ca. 0,5 cm über Hautniveau" (äußere Halteplatte spannungsfrei, 0,5 cm)
- Zitat: "Keinen starken Zug auf die Sonde" (kein starker Zug — sonst Druckschäden)
**Praxisfehler:** Sonde "in Ruhe lassen" — ohne tägliches Mobilisieren wächst die innere Halteplatte ein (Buried-Bumper), operative Entfernung nötig.

**Misconceptions:**
- `M1`: **"Die PEG sollte möglichst wenig bewegt werden"** — Genau das tägliche Mobilisieren verhindert das Buried-Bumper-Syndrom. Fachbegriff: "Stillstand-Irrtum".
- `M2`: **"Die äußere Halteplatte muss fest anliegen"** — Sie muss spannungsfrei sitzen; zu fest → Druckstelle/Nekrose. Die innere Platte hält die Sonde.
- `M3`: **"Täglich mit Desinfektionsmittel reinigen"** — In der Routine-Phase Wasser/NaCl; Dauer-Desinfektion schädigt die Haut.

---

### F-07: Aspiration — gefährlichste Akut-Komplikation

**Fakt:** Eine liegende Ernährungssonde behindert den Sphinkterverschluss und begünstigt Reflux (Zurückfließen) von Sondenkost — Gefahr der Aspiration in die Atemwege (Aspirationspneumonie, Ersticken). Prophylaxe: Oberkörper erhöht positionieren (30–45°) bei nasoenteraler Sonde, möglichst sitzende Position (Bewusstlose mind. 30° halb sitzend), Lagekontrolle vor Gabe, bei Risikopatienten funktionsfähiges Absauggerät bereithalten. Bei Aspirationsverdacht: Gabe sofort stoppen, Oberkörper hoch, absaugen, Arzt alarmieren.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Komplikation
**Bloom-Potential:** 4 (Analysieren, akute Handlung)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5/7.7; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Sonde behindert Sphinkterverschluss; Gefahr von" (Mechanismus: gestörter Sphinkterverschluss)
- Zitat: "Reflux (Zurückfließen) von Sondenkost" (Reflux → Aspirationsgefahr)
- Zitat: "Oberkörper erhöht positionieren (30–45°)" (Prophylaxe: OK-Hochlage 30–45°)
- Zitat: "bewusstlose Patienten mind. 30° halb" (Bewusstlose mind. 30° halb sitzend)
- Zitat: "Bei Risikopatienten: funktionsfähiges Absauggerät bereithalten" (Absauggerät bei Risikopatienten)
**Praxisfehler:** Patient liegt während/nach der Gabe flach — fördert Reflux und nächtliche Aspirationspneumonien.

**Misconceptions:**
- `M1`: **"Beim Sondieren kann nichts in die Lunge kommen"** — Aspiration entsteht durch Reflux bei flacher Lage; die Sonde schützt nicht. Fachbegriff: "Sonden-Sicherheits-Mythos".
- `M2`: **"Nach der Gabe kann der Patient sofort flach liegen"** — Oberkörper 30–60 Min nach Gabe weiter hochlagern, der Magen entleert sich langsam.
- `M3`: **"Bei Aspiration etwas zu trinken geben"** — Gefährlich; bei Aspirationsverdacht nichts oral geben (weitere Aspiration).

---

### F-08: Durchfall — häufig, aber fast immer behebbar

**Fakt:** Durchfall ist die häufigste Komplikation der Sondenernährung, aber nicht schicksalhaft. Vor dem Arztkontakt wird überlegt, ob die Sondenkost zu kalt war, die Einzelportionen zu groß waren oder die Menge zu schnell gesteigert wurde. Die Rücksprache mit dem Arzt klärt eine osmotische Diarrhö (Sondenkost zieht im Darm osmotisch Wasser an); auch an infektiöse Diarrhö (z. B. Antibiotika-assoziiert, C. difficile) ist zu denken. Erste Maßnahme: Rate reduzieren, Ursache suchen — nicht komplett stoppen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Komplikation
**Bloom-Potential:** 4 (Analysieren, Ursachen differenzieren)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.5; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "ob die Sondenkost vielleicht zu kalt war, die Einzelportionen zu" (zu kalt / zu große Einzelportionen)
- Zitat: "die Menge zu schnell gesteigert" (zu schnelle Mengensteigerung)
- Zitat: "ob eine osmotische Diarrhö vorliegen" (osmotische Diarrhö — Sondenkost zieht Wasser an)
- Zitat: "Auch an die Möglichkeit einer infektiösen Diarrhö" (auch infektiöse Diarrhö bedenken)
**Praxisfehler:** Durchfall als "bei Sonde normal" abtun statt systematisch nach Rate, Temperatur, Hygiene, Antibiotika und Sorbit zu suchen.

**Misconceptions:**
- `M1`: **"Durchfall bei Sondenkost ist normal und gehört dazu"** — Fast immer gibt es eine behebbare Ursache; unbehandelt drohen Dehydratation und Mangelernährung. Fachbegriff: "Schicksal-Irrtum".
- `M2`: **"Bei Durchfall stellt man die Sondenkost komplett ab"** — Komplettes Abstellen führt zu Mangelernährung; richtig: Rate reduzieren, Ursache suchen.
- `M3`: **"Sondenkost vor Gabe auf Körpertemperatur erwärmen"** — Aufwärmen fördert Bakterienwachstum; Zimmertemperatur ist richtig.

---

### F-09: Sondenverstopfung — Spülen ist die wichtigste Prophylaxe

**Fakt:** Verstopfung der Sonde ist eine häufige, aber vermeidbare Komplikation — vermeidbar durch sorgfältige Spülung vor und nach der Verabreichung von Sondenkost oder Medikamenten. Medikamente einzeln und getrennt von der Sondenkost geben (sonst Ausflockung). Bei Verstopfung: mit lauwarmem Wasser in einer 10- oder 20-ml-Spritze unter vorsichtigem Druck freispülen — keine kleinen Spritzen mit hohem Druck (lösen Sondenrupturen aus). Kohlensäurehaltige Getränke (z. B. Cola), Pepsinwein oder Pankreasenzyme nur in Ausnahmefällen und nach hauseigenem Standard. Hilft nichts, muss die Sonde entfernt und gewechselt werden.

**Prüfungsrelevanz:** hoch
**Wissensart:** Komplikation / Handlung
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.3; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Verstopfung der Sonde vermeiden" (Prophylaxe-Prinzip)
- Zitat: "durch sorgfältige Spülung vor und" (Forts. „nach der Verabreichung von Sondenkost oder Medikamenten")
- Zitat: "mit lauwarmem Wasser in" (Freispülen mit lauwarmem Wasser, 10-/20-ml-Spritze)
- Zitat: "unter vorsichtigem Druck freispülen" (vorsichtiger Druck)
- Zitat: "Spritzen erzeugen einen zu großen Druck" (zu kleine Spritzen → Sondenruptur)
- Zitat: "kohlensäurehaltige Getränke wie z. B. Cola" (Cola nur als Ausnahme-Spüllösung)
- Zitat: "Medikamente getrennt von der Sondenkost geben" (getrennt wegen Ausflockung)
- Zitat: "Medikamente möglichst einzeln verabreichen" (einzeln)
- Quelle: `leitlinien-volltext/dgem-heimenterale-2024.txt`
- Zitat: "20–40 mL frischem Trinkwasser gespült werden" (DGEM-S3-Leitlinie Heimenterale/-parenterale Ernährung 2024 — evidenzbasierte Routine-Spülmenge nach Medikamentengabe; ersetzt frühere unbelegte „20–50 ml"-Angabe, korrekt belegt 20–40 mL)
**Praxisfehler:** Spülen nach Medikamentengabe vergessen oder Medikamente mit Sondenkost mischen — verklebt das Lumen.

**Misconceptions:**
- `M1`: **"Cola eignet sich zum Routine-Freispülen"** — In Pflege heute ist Cola nur eine Ausnahme-Spüllösung „nach hauseigenem Standard", kein Routine- oder Erstmittel; Standard ist lauwarmes Wasser. (Die verbreitete Aussage „Cola flockt Eiweiß aus / ohne Evidenz" ist im Korpus nicht belegt — ⚠️ Quelle beschaffen, falls als Lehraussage genutzt.) Fachbegriff: "Cola-Mythos".
- `M2`: **"Mit viel Druck bekommt man jede Sonde frei"** — Zu kleine Spritzen erzeugen zu großen Druck und lösen Sondenrupturen aus; richtig: 10-/20-ml-Spritze mit vorsichtigem Druck.
- `M3`: **"Medikamente können mit der Sondennahrung zusammen gegeben werden"** — Mischen führt zu Ausflockung und Sondenverstopfung; Medikamente einzeln, getrennt von der Sondenkost, vor/nach spülen.

---

### F-10: Vorsichtiger Kostaufbau — Mengensteigerung nur bei Verträglichkeit (Refeeding-Risiko)

**Fakt:** Die Nahrungsmenge darf immer erst gesteigert werden, wenn die vorangegangene Menge über mindestens 24 Std. gut vertragen wurde; bei Unverträglichkeit (Erbrechen, Durchfall) wird auf die zuletzt vertragene Menge reduziert. Besondere Gefahr nach langer Mangelernährung: das Refeeding-Syndrom — bei zu schneller Kalorienzufuhr treiben steigende Insulinspiegel Elektrolyte (Phosphat, Kalium, Magnesium) in die Zellen, die Plasmaspiegel fallen ab (ASPEN-Definition: Abfall von Phosphat, Kalium und/oder Magnesium um 10–20 % [mild] bis >30 % [schwer] und/oder Organfunktionsstörung bzw. Thiaminmangel, innerhalb von 5 Tagen nach Kalorienstart; Risiko u. a. Herzrhythmusstörungen, Atemversagen). Prophylaxe (ASPEN 2020): langsamer Start mit 10–20 kcal/kg in den ersten 24 Std. und Steigerung um 33 % des Ziels alle 1–2 Tage; vor Start Serum-Kalium, -Magnesium und -Phosphat kontrollieren und niedrige Werte ausgleichen; Thiamin 100 mg vor Nahrungsbeginn substituieren.

**Prüfungsrelevanz:** hoch
**Wissensart:** Komplikation
**Bloom-Potential:** 4 (klinische Beurteilung)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.5; ASPEN Consensus Recommendations for Refeeding Syndrome 2020, Nutr Clin Pract 35(2):178–195; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "darf immer erst gesteigert werden, wenn die vorangegangene"
- Quelle: `leitlinien-volltext/aspen-refeeding.txt`
- Zitat: "A decrease in any 1, 2, or 3 of serum phosphorus, potassium, and/or magnesium levels by 10%–20%" (Definition/Diagnosekriterien — mild)
- Zitat: "20%–30% (moderate), or >30%" (Schweregrade: moderat / schwer >30 %)
- Zitat: "And occurring within 5 days of reinitiating or substantially increasing energy provision." (Zeitfenster)
- Zitat: "Rising insulin levels drive phosphorus and potassium intracellularly" (Mechanismus)
- Zitat: "Initiate with 100–150 g of dextrose or 10–20 kcal/kg for the first 24 hours" (Kostaufbau 10–20 kcal/kg)
- Zitat: "advance by 33% of goal every 1 to 2 days" (Steigerung)
- Zitat: "Check serum potassium, magnesium, and phosphorus before initiation of nutrition." (Elektrolytkontrolle)
- Zitat: "Supplement thiamin 100 mg before feeding or before initiating dextrose-containing IV fluids in patients at risk." (Thiamin)
- Zitat: "16–18.5 kg/m" (Risikokriterien-Tabelle: BMI 16–18,5 bzw. <16 kg/m² als Risikomarker — M2)
- Zitat: "Anorexia Nervosa" (Risikogruppe Essstörung; weitere im Text: Alcohol/Substance-Use, Cancer — M2)
- Hinweis: Die in v9 noch offene ⚠️-Markierung (10–20 kcal/kg, Thiamin, Elektrolyt-Mechanismus, Hypophosphatämie) ist mit ASPEN 2020 nun verbatim belegt. Die in Pflege heute verwendete pauschale Angabe "Steigerung über 5–7 Tage" ist in ASPEN nicht verbatim als Fixwert genannt (ASPEN: "advance by 33% of goal every 1 to 2 days"); deshalb oben auf die ASPEN-Formulierung umgestellt.
**Praxisfehler:** Nach langer Mangelernährung sofort die volle Kalorienmenge geben — löst das Refeeding-Syndrom aus.

**Misconceptions:**
- `M1`: **"Nach Mangelernährung schnell viel Energie geben, um aufzubauen"** — Genau das löst das Refeeding-Syndrom aus; Elektrolyte stürzen ab. Fachbegriff: "Aufbau-Irrtum".
- `M2`: **"Refeeding-Syndrom betrifft nur Magersucht-Patienten"** — Risikogruppen sind breit; ASPEN nennt u. a. Tumorerkrankung, chronischen Alkohol-/Drogenkonsum, Essstörungen sowie längeres Fasten/negligible Nahrungsaufnahme (BMI <16 bzw. 16–18,5 kg/m² als Risikokriterien).
- `M3`: **"Bei parenteraler Ernährung tritt es nicht auf"** — Der Mechanismus ist wegunabhängig; das Risiko hängt an Menge und Geschwindigkeit, nicht am Weg.

---

### F-11: Parenterale Ernährung — Grundzüge und Hygiene

**Fakt:** Parenterale Ernährung ist die künstliche Ernährung unter Umgehung des Magen-Darm-Trakts (in der Regel intravenös). Periphervenös (Armvene): kurzfristig (wenn der Patient voraussichtlich nach 2–3 Tagen wieder essen kann), nur niedrig-osmolare Lösungen. Zentralvenös (ZVK): bei länger dauernder totaler parenteraler Ernährung und für höher osmolare Lösungen — Infusionslösungen mit einer Osmolarität >800 mosmol/l müssen über einen zentralvenösen Katheter gegeben werden. Die enterale Ernährung ist im Vergleich zur parenteralen mit deutlich weniger Komplikationen behaftet — parenteral droht v. a. die Katheterinfektion (z. B. durch ZVK) bis zur Sepsis. Parenterale Ernährung unterliegt dem Arzneimittelgesetz (immer ärztliche Anordnung); strenge Hygiene und ein separates Lumen sind Pflicht.

**Prüfungsrelevanz:** mittel
**Wissensart:** Fakt
**Bloom-Potential:** 2 (Verstehen)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 7.7.5/43.5.6; DGEM S3-Leitlinie 2013/2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Künstliche Ernährung unter Umgehung des" (Definition: unter Umgehung des Magen-Darm-Trakts)
- Zitat: "Kann der Patient voraussichtlich nach" (periphervenös, wenn nach 2–3 Tagen wieder essbar — Forts. „2–3 Tagen wieder essen, werden Flüssigkeit, Elektrolyte und Glukose über einen periphervenösen Zugang gegeben")
- Zitat: "müssen über einen zen" (Forts. „tralvenösen Katheter verabreicht werden" — Schwelle >800 mosmol/l → ZVK; vollständiger Satz: „Infusionslösungen mit einer Osmolarität > 800 mosmol/l müssen über einen zentralvenösen Katheter verabreicht werden")
- Zitat: "Die enterale Ernährung ist im Vergleich zur" (enteral komplikationsärmer)
- Zitat: "Katheterinfektionen (z. B. durch ZVK)" (parenterales Hauptrisiko: Katheterinfektion)
- Zitat: "unterliegt dem Arzneimittelgesetz" (parenterale Lösungen = Arzneimittel, ärztliche Anordnung)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "800 bis 900 mosmol/l kommt es zu Gefäßirritationen. Sie dürfen" (Forts. „deshalb nicht peripher verabreicht werden" — bestätigt die periphervenöse Obergrenze und ZVK-Pflicht oberhalb davon)
- Quelle: `icare-examen-kompakt-volltext/icare-examen-kompakt.txt`
- Zitat: "mit einer hohen Osmolarität (mehr als 800 mosmol/l," (Forts. „… dürfen nicht über periphervenöse Zugänge verabreicht werden" — bestätigt >800-mosmol/l-Schwelle)
- Zur Obergrenze „ZPE bis ~2000 mosmol/l": ⚠️ Quelle beschaffen (Pflege heute Kap. 43.5.6 / DGEM S3-Leitlinie 2013/2020) — die ZVK-Schwelle >800 mosmol/l ist mehrfach verbatim belegt (Pflege heute, icare-pflege „800–900", icare-examen-kompakt „mehr als 800"), der 2000-mosmol/l-Obergrenzwert für ZVK-Lösungen aber weiterhin NICHT. Bis zur Beschaffung nur die >800-Schwelle als belegt führen.
**Praxisfehler:** Medikamente über dasselbe Lumen wie die parenterale Ernährung geben — Ausflockung, Inkompatibilität, erhöhtes Infektionsrisiko.

**Misconceptions:**
- `M1`: **"Parenterale Ernährung geht nur über ZVK oder Port"** — Auch periphervenös möglich (kurzfristig, niedrig-osmolare Lösungen); erst >800 mosmol/l erfordert einen ZVK. Fachbegriff: "ZVK-Ausschließlichkeits-Irrtum".
- `M2`: **"Über den Ernährungskatheter kann man auch Medikamente geben"** — Ein separates Lumen ist Pflicht; Mischen führt zu Ausflockung und Infektionsrisiko.
- `M3`: **"Parenteral hat kein höheres Infektionsrisiko als enteral"** — Parenteral hat deutlich höheres Risiko (Katheter-Sepsis); deshalb enteral bevorzugen.
