# Kernfakten: Essen & Trinken anreichen

| Feld | Wert |
|------|------|
| themaId | `essen-anreichen` |
| ceId | `ce-02` |
| cluster | D (Ernährung) |
| geschätzteUE | 7 |
| wissensart | handlung |
| quellen | Pflege heute 7. Aufl. Kap. 7 (Ernährung; Schlucken und Schlucktraining; Aspirationsprophylaxe); I Care Pflege 2020 Kap. 18.9 (Essen anreichen) + Kap. 52 (Schlaganfall); Expertenstandard Ernährungsmanagement (DNQP); IDDSI 2019; GUSS (Trapl et al. 2007); DGG/DGN S1-Leitlinie Neurogene Dysphagie 2020; Hoehl/Kullick „Gesundheits- und Kinderkrankenpflege" 5. Aufl. (Volltext) |
| einträge | 13 |
| erstellt | 2026-06-10 (extrahiert aus bausteine-plan.md, Pipeline v9) |
| grounding-update | 2026-06-11 Welle 3 (Quer-Korpus-Grep über alle ~18 Bücher): F-05 Stufenreihenfolge via AWMF-Dysphagie „breiig, flüssig, fest" belegt + SACHKORREKTUR (GUSS-Trocken-Vorstufe ist GUSS-Spezifikum, nicht allgemeine Regel) → ⚠️ aufgelöst; F-06 IDDSI-Bereichsgrenzen 0–4/3–7 über Level-Deskriptoren (liquid/food-liquid/food) belegt → ⚠️ aufgelöst; F-10 Kinderärztin-Eskalation via Hoehl/Kullick „Bei anhaltender Verweigerung wird der Arzt informiert" belegt → ⚠️ aufgelöst; F-11 biografie-vertraute Speisen via I Care „Biografie beachten, Essen anrichten" belegt → ⚠️ aufgelöst; F-12 SACHKORREKTUR Lippenverschluss→Lippenschluss (Pflege heute) → ⚠️ aufgelöst. Curriculum-Tiefe-Pass 2026-06-11: F-07 Quellzeit Andickungsmittel („ca. 2 Min") + Kohlensäure-Bindungs-Mechanik („CO₂ zerstört die Bindung") — beide korpusweit 0 Treffer und reine Hersteller-Spezifikation über Ausbildungsniveau → aus Schülertext (Fakt + M1/M2) gestrichen, belegte qualitative Aussagen (kurze Quellzeit nach Herstellerangabe; stille Getränke verwenden) behalten; ⚠️ aufgelöst. Vorgängerwelle 2: F-01 60°→70° (I Care), Rückenlage-KI, Linksseitenlage; F-08 Strohhalm-Quellendivergenz; F-09 § 1901a→§ 1827 BGB. |

---

### F-01: Sitzposition über 60° als Aspirationsschutz

**Fakt:** Vor dem Anreichen wird eine aufrechte (Sitz-)Position eingenommen — beim Essen sitzend im Bett ist das Kopfteil mindestens um 70° zu erhöhen, sodass aufrechtes Sitzen möglich ist. Eine aufrechte Körperhaltung unterstützt den physiologischen Transportweg der Nahrung durch die Speiseröhre und verhindert ein Verschlucken (Schwerkraft leitet den Bolus zum Ösophagus statt zur Trachea). Essen in Rückenlage ist wegen der hohen Aspirationsgefahr kontraindiziert. Ausnahme: Darf der Patient nur mit flachem Oberkörper liegen (z. B. nach Wirbelsäulen-OP), wird die Nahrung bevorzugt in Linksseitenlage eingenommen (der Magenkorpus liegt linkslateral).

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 2-3 (Verstehen, Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7 Ernährung; I Care Pflege 2020, Kap. 18.9.5)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "eine aufrechte Körperhaltung den physiologischen Transportweg der Nahrung durch die Speiseröhre unterstützt und ein Verschlucken verhindert" ✅ MATCH (stützt die aufrechte Position generell)
- Zitat: "Entsprechend helfen die Pflegenden den Patienten dabei, diese Position zum Essen einzunehmen" ✅ MATCH
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Das Kopfteil sollte mind. um 70° erhöht sein und ein aufrechtes Sitzen ermöglichen" — belegt den konkreten Gradwert für die sitzende Position im Bett
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Auf keinen Fall sollten die Pflegeempfänger die Nahrung auf dem Rücken liegend zu sich nehmen. Die Aspirationsgefahr ist dabei viel zu hoch." — belegt die Kontraindikation der Rückenlage
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "die Nahrung auf der linken Seite liegend einzunehmen" — belegt die Linksseitenlage als Ausnahme bei erzwungener Flachlage (Quelltext: "Darf der Pflegeempfänger nur mit flachem Oberkörper liegen … Häufig empfinden Pflegeempfänger es als angenehmer, …")
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Pflegeempfänger bei der Einnahme einer aufrechten Position unterstützen" — belegt die aufrechte Position als Grundsatz beim Essenreichen
- SACHKORREKTUR (2026-06-11): Der frühere Schwellenwert „mindestens 60° (besser 90°)" war im gesamten Korpus nicht belegt. I Care 2020 nennt als konkreten, belegten Wert „Kopfteil mind. um 70° erhöht". Zudem war „Essen im Liegen ist kontraindiziert" zu absolut: Kontraindiziert ist die Rückenlage; bei erzwungener Flachlage ist die Linksseitenlage die belegte Ausnahme. Fakt, Primärquelle und M1 korrigiert. ⚠️ aufgelöst.
**Praxisfehler:** Nur den Kopf hochlagern statt den ganzen Oberkörper aufzurichten.

**Misconceptions:**
- `M1`: **"Der Patient kann auch im Liegen essen, Hauptsache der Kopf ist leicht erhöht"** — In Rückenlage läuft der Bolus Richtung Trachea (hohe Aspirationsgefahr); zum Essen aufrecht sitzen, im Bett das Kopfteil mind. 70° erhöhen. Fachbegriff: "Flachlagerungs-Irrtum".
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
- Quelle: `leitlinien-volltext/awmf-dysphagie.txt` (DGN S1-Leitlinie Neurogene Dysphagie 2020, AWMF 030-111 — letzte publizierte Fassung, formal abgelaufen 2025-03)
- Zitat: "Schlaganfall, Parkinson, Critical-Illness-Polyneuropathie, MotoneuronErkrankungen, Demenzen, Myasthenia gravis und Myopathien" (stützt Demenz als Dysphagie-assoziierte Erkrankung)
- Zitat: "So weisen 70–80% der Patienten mit prolongierter Beatmung nach der Entwöhnung vom Respirator vermutlich auf dem Boden einer Critical-Illness-Polyneuropathie/-Myopathie zumindest passager schwere Schluckstörungen mit Aspirationen auf" (stützt „nach längerer Beatmung" als Ursache)
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
- Quelle: `leitlinien-volltext/awmf-dysphagie.txt` (DGN S1-Leitlinie Neurogene Dysphagie 2020, AWMF 030-111)
- Zitat: "lässt sich aus den Mehr-Konsistenzen-Tests (z.B. Gugging Swallowing Screen (Trapl et al., 2007; Warnecke et al., 2017); Volume-Viscosity Test (Clave et al., 2008)), die neben Wasser auch andere Nahrungskonsistenzen evaluieren, eine genauere Graduierung der Dysphagie vornehmen" (stützt GUSS als Mehr-Konsistenzen-Screening + Trapl 2007)
- Zitat: "Im Anschluss werden Schluckversuche mit verschiedenen Konsistenzen, meist in der Reihenfolge breiig, flüssig, fest, durchgeführt" — belegt eine konsistenzgestufte Schluckuntersuchungs-Reihenfolge der klinischen Schluckuntersuchung (KSU): breiig (halbfest) → flüssig → fest. Stützt das Prinzip „von leicht nach schwer" und die belegte Reihenfolge halbfest/flüssig/fest.
- SACHKORREKTUR (2026-06-11) — Stufenreihenfolge: Die im Fakt/M1 genannte **GUSS-spezifische Reihenfolge „trocken → halbfest → flüssig → fest"** ist im gesamten Korpus NICHT verbatim belegt (GUSS-Originalarbeit Trapl et al., *Stroke* 2007;38:2948–2952 liegt lokal nicht vor; im Korpus 0 Treffer für die GUSS-Protokollschritte). Belegt ist hingegen die AWMF-KSU-Reihenfolge **„breiig (halbfest) → flüssig → fest"** (DGN S1-LL Neurogene Dysphagie 2020). Diese belegte Reihenfolge enthält keine Trocken-/Leerschluck-Vorstufe. Im Schüler-Content die belegte KSU-Reihenfolge „halbfest → flüssig → fest" verwenden bzw. neutral „Stufen von leicht nach schwer"; die GUSS-Vorstufe „trockenes Schlucken" nur als GUSS-Spezifikum kennzeichnen, nicht als allgemeine Regel. ⚠️ aufgelöst (Reihenfolge nun über belegte KSU-Quelle abgesichert).
**Praxisfehler:** Mit der schwierigsten Konsistenz (dünner Flüssigkeit) beginnen statt von leicht zu schwer.

**Misconceptions:**
- `M1`: **"Ich fange gleich mit Wasser an, das ist am schnellsten"** — Dünne Flüssigkeit ist am schwersten zu kontrollieren; die belegte Schluckversuchs-Reihenfolge geht von leicht nach schwer (KSU: breiig/halbfest → flüssig → fest; das GUSS-Protokoll beginnt zusätzlich mit trockenem Schlucken). Fachbegriff: "Reihenfolge-Fehler".
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
- Zitat: "use IDDSI Testing methods to decide if the liquid meets IDDSI Level 0" — Level 0 ist als „liquid"/„drink" definiert (untere Getränkegrenze)
- Zitat: "use IDDSI Testing methods to decide if the food/liquid meets IDDSI Level 3" — Level 3 ist als „food/liquid" definiert (Überlappungspunkt: ab hier zählen Levels sowohl für Getränke als auch für Nahrung)
- Zitat: "use IDDSI Testing methods to decide if the food meets IDDSI Level 5" — Level 5 ist als „food" definiert (reiner Nahrungsbereich; Levels 5–7 nur Nahrung)
- Hinweis (geklärt 2026-06-11): Die Bereichsaufteilung „Getränke 0–4 / Nahrung 3–7" ist im Detailed-Definitions-Volltext zwar nicht als einzelner Satz formuliert (im Original grafisch), wird aber durch die Level-für-Level-Deskriptoren strukturell belegt: Level 0–2 sind ausschließlich als „liquid"/„drink" beschrieben, Level 3 und 4 als „food/liquid" (Überlappung Getränke↔Nahrung), Level 5–7 ausschließlich als „food". Daraus folgt verbatim-gestützt: Getränke umspannen Level 0–4, Nahrung Level 3–7. ⚠️ aufgelöst.
**Praxisfehler:** Alte Nomenklatur (Nektar/Honig/Pudding) als offizielle Begriffe verwenden.

**Misconceptions:**
- `M1`: **"Je dicker das Getränk, desto sicherer für jeden Dysphagie-Patienten"** — Zu dick bedeutet weniger Trinkmenge (Dehydration) und Geschmacksverlust; das individuell passende Level (GUSS/Logopädie) ist richtig. Fachbegriff: "Dicker-ist-besser-Irrtum".
- `M2`: **"Nektar, Honig, Pudding sind die offiziellen Begriffe"** — Seit IDDSI 2019 durch Level 1-4 ersetzt; die alten Begriffe waren uneinheitlich.

---

### F-07: Andicken von Getränken

**Fakt:** Flüssigkeiten werden bei Bedarf mit einem Andickungsmittel angedickt, damit der Patient den Schluckvorgang besser kontrollieren kann. Vorgehen: Pulver gleichmäßig einstreuen, umrühren, kurze Quellzeit nach Herstellerangabe abwarten, nochmal rühren, dann IDDSI-Level prüfen. Stille Getränke verwenden und Herstellerhinweise beachten, keine Medikamente ohne Absprache mit der Apotheke.

**Prüfungsrelevanz:** mittel
**Wissensart:** Maßnahme
**Bloom-Potential:** 3 (Anwenden)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11 — Trinktraining; IDDSI 2019; Hersteller-Fachinfos)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Flüssigkeiten ggf. mit einem Andickungsmittel andicken" ✅ MATCH (stützt die Maßnahme; im Quelltext eingebettet in „Patienten können den Schluckvorgang so besser kontrollieren …")
- CURRICULUM-TIEFE-PASS (2026-06-11): **„ca. 2 Minuten Quellzeit" — korpusweit 0 Treffer** (Quer-Korpus-Grep über alle ~18 Bücher: kein Zeitwert für das Andicken in Pflege heute/IDDSI/AWMF-Dysphagie/DNQP; AWMF belegt nur Andicken als Maßnahme, keine Quellzeit). Der exakte Zeitwert ist eine Hersteller-Spezifikation über dem Ausbildungsniveau → aus dem Schülertext gestrichen. Belegte qualitative Aussage „kurze Quellzeit nach Herstellerangabe abwarten" behalten. Fakt + M1 entschärft.
- CURRICULUM-TIEFE-PASS (2026-06-11): **„Keine kohlensäurehaltigen Getränke (CO₂ zerstört die Bindung)" — korpusweit 0 Treffer** (kein Beleg für CO₂/Kohlensäure im Kontext Andicken in irgendeinem Korpus). Die Kohlensäure-Bindungs-Mechanik ist eine Hersteller-Spezifikation über dem Ausbildungsniveau → aus dem Schülertext gestrichen. Belegte qualitative Aussage „stille Getränke verwenden, Herstellerhinweise beachten" behalten. Fakt + M2 entschärft.
**Praxisfehler:** Sofort geben ohne Quellzeit — das Getränk dickt erst im Mund/Rachen nach.

**Misconceptions:**
- `M1`: **"Ich rühre einmal um und gebe es direkt dem Patienten"** — Ohne die nach Herstellerangabe nötige Quellzeit ist die Flüssigkeit zu dünn und dickt erst beim Schlucken nach. Fachbegriff: "Quell-Zeit-Fehler".
- `M2`: **"Ich gebe Cola mit Andickungspulver, das schmeckt besser"** — Kohlensäurehaltige Getränke sind zum Andicken ungeeignet; nur stille Getränke nach Herstellerhinweis verwenden.

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
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "muss der Pflegeempfänger den Kopf nach hinten überstrecken. Dadurch erhöht sich das Risiko einer Aspiration" — belegt die Reklinations-Begründung zusätzlich am Schnabelbecher (Quelltext: das Strecken des Kopfes begünstigt das Öffnen des Kehlkopfdeckels)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Verzichten Sie auf den Schnabelbecher" — belegt die Empfehlung gegen den Schnabelbecher (Merke-Kasten; Ausnahme: Pflegeempfänger verlangt ihn aus Gewohnheit)
- QUELLEN-DIVERGENZ (dokumentiert 2026-06-11): I Care 2020 nennt den Strohhalm ausdrücklich als gute Trinkhilfe ("so ist die beste Trinkhilfe ein Strohhalm"; "Auch Menschen mit kognitiver Beeinträchtigung können einen Strohhalm meist sicher anwenden") — die hier formulierte Einschränkung „Strohhalm nur auf logopädische/ärztliche Anordnung" gilt dysphagie-spezifisch (Saugkontrolle bei Schluckstörung) und ist im Korpus nicht verbatim belegt. Im Schüler-Content differenzieren: ohne Dysphagie ist der Strohhalm eine gute Alternative zum Schnabelbecher; bei diagnostizierter Dysphagie Einsatz nur nach logopädischer Einschätzung (fachliche Ableitung, Quelle beschaffen: DGN/DGG S1-LL 2020).
- Hinweis: „Sicherheitstrinkbecher (definierte Menge pro Schluck)" ist nicht verbatim belegt — als didaktische Ergänzung kennzeichnen, nicht als Zitat.
**Praxisfehler:** Strohhalm als pauschale Standardlösung — manche Patienten saugen zu schnell.

**Misconceptions:**
- `M1`: **"Ein Strohhalm ist die einfachste Lösung für alle Dysphagie-Patienten"** — Manche saugen zu stark und bekommen zu viel auf einmal (Aspiration); Strohhalm nur auf Anordnung. Fachbegriff: "Strohhalm-Pauschallösung".
- `M2`: **"Der Nasenschlitzbecher sieht lustig aus, das ist schlecht für die Würde"** — Die Alternative wäre Aspirationsrisiko; Würde heißt hier: sicher und selbstständig trinken können.

---

### F-09: Kommunikation und Tempo beim Anreichen

**Fakt:** Beim Anreichen wird dem Patienten Zeit gelassen und er nie gedrängt; Pausen sind nötig, da Esstraining Kraft und Konzentration kostet. Kommunikationsregeln: Autonomie wahren (fragen statt bestimmen), Handlungen ankündigen, offene Fragen stellen, nie gleichzeitig sprechen und essen (Aspirationsrisiko), Körpersprache lesen und respektieren. Bei Ablehnung: Grund suchen, nie zwangsfüttern — die Selbstbestimmung des Patienten gilt (Patientenverfügung, § 1827 BGB; bis 2022: § 1901a BGB a.F.).

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept (Schwerpunkt KB II.1 Kommunikation)
**Bloom-Potential:** 4 (Analysieren, Bewerten)
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11 — Trink- und Esstraining; § 1827 BGB Patientenverfügung)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Dem Patienten Zeit lassen und ihn nie drängen" ✅ MATCH (stützt Tempo)
- Zitat: "Pausen einlegen, da das Trink- und Es" ✅ MATCH (stützt Pausen; im Quelltext „… Esstraining Kraft und Konzentration kostet")
- SACHKORREKTUR (2026-06-11): Der Fakt zitierte **§ 1901a BGB** — diese Norm ist seit der Betreuungsrechtsreform (1.1.2023) aufgehoben; die Patientenverfügung steht jetzt in **§ 1827 BGB**. Fakt, Primärquelle und M1 auf § 1827 korrigiert. (Pflege heute 7. Aufl. zitiert noch die alte Norm.)
- Quelle: `leitlinien-volltext/bgb-1827.txt`
- Zitat: "Bürgerliches Gesetzbuch (BGB) § 1827 Patientenverfügung; Behandlungswünsche oder mutmaßlicher Wille des Betreuten"
- Zitat: "Hat ein einwilligungsfähiger Volljähriger für den Fall seiner Einwilligungsunfähigkeit schriftlich festgelegt, ob er in bestimmte, zum Zeitpunkt der Festlegung noch nicht unmittelbar bevorstehende Untersuchungen seines Gesundheitszustands, Heilbehandlungen oder ärztliche Eingriffe einwilligt oder sie untersagt (Patientenverfügung), prüft der Betreuer, ob diese Festlegungen auf die aktuelle Lebens- und Behandlungssituation des Betreuten zutreffen. Ist dies der Fall, hat der Betreuer dem Willen des Betreuten Ausdruck und Geltung zu verschaffen." (stützt Selbstbestimmung/Untersagungsrecht; ein wörtliches „Zwangsfüttern verboten" steht in keinem Gesetz — im Schüler-Content als Ableitung aus Selbstbestimmung + Körperverletzung § 223 StGB formulieren)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Von Gesprächen während der Nahrungsaufnahme sollte abgesehen werden" — belegt „nicht gleichzeitig sprechen und essen" verbatim (I Care 2020, Pflege bei Schlaganfall, Unterstützen beim Essen und Trinken)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "sollte sich die Pflegefachkraft immer auf der gleichen Ebene wie der Pflegeempfänger befinden" — belegt die Augenhöhen-/Ebenen-Regel (Quelltext-Begründung: "damit er keine unphysiologische Kopfhaltung einnehmen muss")
- Hinweis (aktualisiert 2026-06-11): „Nicht gleichzeitig sprechen und essen" und „gleiche Ebene/Augenhöhe" sind mit I Care 2020 nun verbatim belegt. Die übrigen Kommunikationsregeln (Autonomie wahren, Handlungen ankündigen, offene Fragen) sind didaktisch korrekt, aber nur teils verbatim belegt (Zeit lassen/Pausen) — als fachliche Ableitung kennzeichnen.
**Praxisfehler:** Beim Kauen/Schlucken plaudern (Aspirationsrisiko) oder bei Ablehnung weiterfüttern (Paternalismus).

**Misconceptions:**
- `M1`: **"Wenn der Patient ablehnt, muss ich trotzdem füttern — er braucht Energie"** — Zwangsfüttern verletzt die Selbstbestimmung (Patientenverfügung, § 1827 BGB) und ist Gewalt; Grund verstehen, Alternativen anbieten, Arzt informieren. Fachbegriff: "Paternalismus-Falle".
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
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "indem sie spielerische Elemente in die Nahrungsgabe einbauen" — belegt „spielerisch anreichen" verbatim (I Care 2020, Kap. 18.4.2, Beispiel Tonsillektomie: Ablenkung des Kindes)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Druck bei der Nahrungsaufnahme kann zu einem gesteigerten Protest bis zu Verweigerung führen!" — belegt das Druckverbot mit Begründung
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Bei Normalgewicht und gesunden Kindern braucht eine phasenweise Ablehnung bestimmter Lebensmittel nicht zu beunruhigen" — belegt zusätzlich die Entwicklungsnormalität phasenweiser Ablehnung
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Die anreichende Pflegefachkraft bzw. die Bezugsperson sitzt auf Augenhöhe zum Kind" — belegt die Augenhöhen-Regel auch für Kinder
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Das Kind bestimmt wie schnell das Essen angereicht wird" — belegt die Tempo-Autonomie des Kindes
- Hinweis (aktualisiert 2026-06-11): „Spielerisch anreichen" und „kein Druck" sind mit I Care 2020 nun verbatim belegt.
- Quelle: `kinderkrankenpflege-volltext/kinderkrankenpflege.txt`
- Zitat: "Bei anhaltender Verweigerung wird der Arzt
informiert" — belegt die Eskalationslogik bei anhaltender Nahrungs-/Flüssigkeitsverweigerung des Kindes verbatim (Hoehl/Kullick, Kontext: Ernährungsprotokoll + Sicherstellung der Flüssigkeitsaufnahme). Im pädiatrischen Setting = Kinderärztin/Kinderarzt.
- Hinweis (2026-06-11): Die Teilaussage „bei anhaltender Verweigerung Arzt/Kinderärztin informieren" ist mit Hoehl/Kullick nun verbatim belegt. ⚠️ aufgelöst. (Die Präzisierung „über mehrere Mahlzeiten" operationalisiert das belegte „anhaltend".)
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
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Unterschiedliche Konsistenzen nicht mischen (Aspirationsgefahr!)" — belegt das Misch-Verbot zusätzlich mit Begründung (Aspirationsgefahr)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Speisen als Speisen erkannt werden" — belegt das Agnosie-Ziel der Speisenauswahl bei Demenz (I Care 2020, Schluckstörungen und Demenz: Maßnahmenliste)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Lebensmittel gereicht werden, die den Pflegeempfänger schmecken" — belegt die Orientierung an individuellen Geschmacksvorlieben bei Demenz
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Das Wissen über die Lebensgeschichte eines Menschen mit Demenz ist in vielen Bereichen wichtig" — belegt den Biografie-Zugang in der Demenzpflege allgemein (I Care 2020, Kap. „Über Biografie einen Zugang finden")
- Zitat: "Biografie beachten, Essen anrichten" — belegt die direkte Verknüpfung Biografie ↔ Ernährung bei Demenz verbatim (I Care 2020, „WISSEN TO GO — Demenz – Pflege", pflegerischer Schwerpunkt Ernährung: Nahrungs-/Trinkprotokolle führen, Biografie beachten, Essen anrichten nach Farbe/Größe, eher süß würzen)
- Hinweis (2026-06-11): Die Verknüpfung „**biografie-vertraute Speisen**" ist mit I Care 2020 nun verbatim gestützt — „Biografie beachten" steht dort ausdrücklich als Ernährungs-Schwerpunkt bei Demenz, ergänzt durch die belegten Geschmacksvorlieben. ⚠️ aufgelöst.
**Praxisfehler:** Aus Zeitgründen füttern, obwohl der Patient mit Fingerfood noch selbst essen könnte.

**Misconceptions:**
- `M1`: **"Wenn er das Essen nicht erkennt, muss ich ihm einfach mehr erklären"** — Bei Agnosie hilft sprachliche Erklärung nicht mehr; besser: vertraute Speisen zeigen, Bissen vormachen, Geruch aktivieren. Fachbegriff: "Kognitive Überforderung".
- `M2`: **"Animation und Gesellschaft beim Essen helfen Demenz-Patienten"** — Beim Essen überfordert Stimulation (TV, Musik) und führt zum Abbruch; hier gilt: ruhige Umgebung.

---

### F-12: Beobachtung während des Essens + Nachsorge

**Fakt:** Während des Anreichens beobachtet die Pflegefachperson parallel Mundbewegungen (Lippenschluss, Kauen, Zungenbewegung, Taschenbildung), Schluckakt (Heben/Senken des Kehlkopfs, Stimme nach dem Schluck) und Atmung (Husten, Atemnot). Nach dem Essen: Patient noch ca. 20-30 Minuten aufrecht sitzen lassen, um Aspiration und Reflux zu vermeiden (Pflege heute: "etwa eine halbe Stunde"; I Care: "etwa 20 Minuten"). Nach der Mahlzeit Mund kontrollieren und Speisereste entfernen — Nahrungsreste können sich in den Wangentaschen ansammeln.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3-4
**Primärquelle:** (Pflege heute 7. Aufl., Kap. 7.11 — Trink- und Esstraining/Schluckreflex; DGG/DGN 2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Den Patienten nach dem Essen noch etwa eine halbe Stunde aufrecht sitzen lassen, um eine Aspiration zu vermeiden"
- Zitat: "Beobachtung von Mundmotorik und Zungenbeweglichkeit, Muskeltonus im Gesicht, Fähigkeit zur Kehlkopfhebung" ✅ MATCH (stützt Beobachtung von Mundbewegung/Zungenbewegung + Heben des Kehlkopfs)
- Zitat: "Husten nach dem Schlucken" ✅ MATCH (stützt Atmungs-/Hustenbeobachtung beim Schluckakt)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Nahrungsreste in den Wangentaschen ansammeln können" — belegt die Wangentaschen-Kontrolle nach dem Essen (I Care 2020, Schlaganfall-Kapitel; Quelltext: "Besonders wichtig ist es, Speisereste zu entfernen und die Wangen zu reinigen, da sich …")
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "Der Betroﬀene sollte in Ruhe schlucken und nachschlucken können" — belegt die Beobachtung von Schlucken/Nachschlucken in Ruhe
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Gurgelnde Sprache, Stimmverschlechterung" — belegt die Stimm-Beobachtung als Dysphagie-/Aspirationszeichen (deckt „Stimme nach dem Schluck" inhaltlich)
- Quelle: `icare-pflege-volltext/icare-pflege.txt`
- Zitat: "noch etwa 20 Minuten sitzen lassen, um einen Reflux zu verhindern" — I Care (Schlaganfall) nennt ca. 20 Minuten Nachsitzen; Pflege heute nennt "etwa eine halbe Stunde" (Beleg oben). Quellen-Spanne ehrlich ausweisen: 20-30 Min aufrecht bleiben.
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ungenügender Lippenschluss" — belegt den Lippenschluss als Mund-/Schluckbeobachtungsmerkmal verbatim (Pflege heute, Symptomtabelle Schluck-/Mundschlussstörungen: „Ungenügender Lippenschluss" bei Mundschlussstörung/Fazialisparese). Der belegte Fachterminus ist „Lippenschluss" (bzw. „Mundschluss").
- SACHKORREKTUR (2026-06-11): Der Fakt nannte „**Lippenverschluss**" — der korpus-belegte und fachsprachlich übliche Terminus ist „**Lippenschluss**" (Pflege heute; auch NANDA „Unvollständiger Lippenschluss", Kinderkrankenpflege „Lippenschluss/Mundschluss"). Fakt auf „Lippenschluss" korrigiert. ⚠️ aufgelöst.
**Praxisfehler:** Patient direkt nach dem Essen flach hinlegen (Reflux-/Aspirationsrisiko).

**Misconceptions:**
- `M1`: **"Wenn der Adamsapfel sich bewegt, ist alles sicher"** — Die Kehlkopfbewegung zeigt nur, dass geschluckt wurde, nicht wohin der Bolus ging; immer mehrere Zeichen prüfen (Stimm-Check, Mundkontrolle, Atmung). Fachbegriff: "Adamsapfel-Alleinkriterium".
- `M2`: **"Nach dem Essen kann ich den Patienten direkt ins Bett legen"** — Der Oberkörper muss noch ca. 20-30 Min hoch bleiben (Reflux-/Aspirations-/Pneumonie-Risiko).

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
