# Kernfakten: Pneumonie-Prophylaxe

| Feld | Wert |
|------|------|
| themaId | `pneumonie-prophylaxe` |
| ceId | `ce-02` |
| cluster | B (Mobilität & Prophylaxen) |
| geschätzteUE | 4 |
| wissensart | handlung |
| quellen | Pflege heute 7. Aufl. Kap. 3.5 Unterstützung der Atmung und Pneumonieprophylaxe; AWMF S3-Leitlinie Nosokomiale Pneumonie 2017 (Reg.-Nr. 020-013); RKI/KRINKO 2013; WHO 2009 |
| einträge | 12 |
| erstellt | 2026-06-10 (Dozentin A, quellengebunden aus bausteine-plan.md) |
| grounding | 2026-06-11 auf STÜTZT gehoben (Dozentin A): 25 → 61 Verbatim-Belege, pro Teilaussage ein Beleg (R2). Offene ⚠️ (R3): F-09 Mikroaspirations-Term, F-10 GUSS-Instrument, F-11 KRINKO-Bündel-Attribution. `--check-file` ✅ alle 61 verifiziert. |

---

### F-01: Definition Pneumonie und nosokomiale Pneumonie

**Fakt:** Eine Pneumonie ist eine Entzündung des Lungengewebes (Lungenparenchyms), vorrangig ausgelöst durch Bakterien, Viren, Pilze oder eingeatmete Stoffe. Eine nosokomiale Pneumonie wurde im Krankenhaus erworben — sie tritt frühestens 48 Stunden nach Aufnahme auf. Sonderform: die beatmungsassoziierte Pneumonie (VAP).

**Prüfungsrelevanz:** hoch
**Wissensart:** Definition
**Bloom-Potential:** 1-2 (Erinnern, Verstehen)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5; AWMF S3 2017)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Entzündung des Lungenparenchyms, vorrangig durch Bakterien, Viren, Pilze oder eingeatmete Stoffe" (deckt: Definition Pneumonie + Erregerspektrum)
- Zitat: "Eine nosokomiale Pneumonie wurde im Krankenhaus erworben"
- Zitat: "Im Krankenhaus erworbene Pneumonie (ab 48 Std. nach Aufnahme auftretend)" (deckt: 48-Stunden-Grenze)
**Praxisfehler:** "Nosokomial" wird mit "mitgebracht" verwechselt — gemeint ist das Gegenteil: im Haus erworben.

**Misconceptions:**
- `M1`: **"Eine Pneumonie erkennt man immer am Fieber"** — Bei älteren oder immungeschwächten Patienten fehlt das Fieber oft; typische Zeichen sind dann Verwirrtheit, Appetitlosigkeit, Apathie. Fachbegriff: "Fieber-Automatismus".
- `M2`: **"Nosokomial heißt: der Patient war schon krank, als er kam"** — Nosokomial bedeutet im Krankenhaus erworben, Symptome frühestens 48 Stunden nach Aufnahme. Eine bei Aufnahme bestehende Pneumonie ist ambulant erworben (CAP).
- `M3`: **"Pneumonie kommt nur durch Bakterien"** — Auch Viren, Pilze und eingeatmete/aspirierte Stoffe sind Ursachen. Fachbegriff: "Rachen-Fixierung".

---

### F-02: Risikofaktoren und Risikoeinschätzung

**Fakt:** Hauptrisikofaktoren für eine Pneumonie sind Immobilität, Bewusstseinseinschränkung, Schluckstörung (Dysphagie), Intubation/Beatmung und Sekretretention; dazu höheres Alter, COPD, Rauchen, Immunschwäche und Magensonde. Die Pflege schätzt das Pneumonierisiko fortlaufend ein (bei Aufnahme und bei Zustandsänderung) — klinische Beobachtung führt, ergänzt um Dysphagie-Screening.

**Prüfungsrelevanz:** hoch
**Wissensart:** Assessment
**Bloom-Potential:** 3-4 (Anwenden, Analysieren)
**Primärquelle:** (Pflege heute 7. Aufl. Tab. 3.6/3.7; AWMF S3 2017)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Ist der Patient immobil oder in der Bewegung eingeschränkt?" (deckt: Risikofaktor Immobilität, Tab. 3.6)
- Zitat: "Hatte der Patient eine Intubationsnarkose?" (deckt: Risikofaktor Intubation/Beatmung)
- Zitat: "Wird der Patient maschinell beatmet?" (deckt: Risikofaktor Beatmung)
- Zitat: "Hat der Patient Schluckstörungen, oder ist sein Bewusstsein eingeschränkt?" (deckt: Dysphagie + Bewusstseinseinschränkung)
- Zitat: "Liegt eine Magen-/Ernährungssonde?" (deckt: Risikofaktor Magensonde)
- Zitat: "Besteht eine Abwehrschwäche?" (deckt: Risikofaktor Immunschwäche)
- Zitat: "Einschätzung des Pneumonierisikos ist von großer Bedeutung" (deckt: fortlaufende Risikoeinschätzung durch die Pflege)
- Zitat: "fortlaufende Atembeobachtung" (deckt: laufende klinische Beobachtung)
**Hinweis Teilaussage COPD/Rauchen:** Im Korpus belegt über Tab. 3.6 ("akute infektiöse Atemwegserkrankung … oder … chronische Atemwegs- oder Herzerkrankung … z. B. Asthma, COPD" / "Raucht der Patient?"); höheres Alter über F-09 ("ältere Menschen in Pflegeeinrichtungen"). Dysphagie-Screening-Pflicht siehe F-10.
**Praxisfehler:** Risiko wird nur auf der Intensivstation gesehen — die meisten nosokomialen Pneumonien entstehen auf Normalstation.

**Misconceptions:**
- `M1`: **"Nur beatmete Intensivpatienten sind pneumoniegefährdet"** — Auch Schlaganfall (Dysphagie), postoperative, demente und COPD-Patienten haben hohes Risiko. Fachbegriff: "Intensiv-Fixierung".
- `M2`: **"Wer aspiriert, hustet immer"** — Bei stiller Aspiration (ca. 50% der Dysphagie-Patienten nach Schlaganfall) fehlt der Hustenreflex. Deshalb ist Beobachtung allein nicht ausreichend.
- `M3`: **"Rauchen wirkt nur langfristig"** — Aktives Rauchen lähmt die mukoziliäre Clearance bereits kurzfristig; schon ein rauchfreier Tag verbessert die Sekretclearance.

---

### F-03: Ziele atemunterstützender Maßnahmen (Ventilation + Sekretmobilisation)

**Fakt:** Atemunterstützende Maßnahmen verfolgen drei Ziele: die Belüftung (Ventilation) der Lunge fördern, einer Minderbelüftung und Atelektasenbildung entgegenwirken und eine Sekretansammlung in den Atemwegen verhindern. Bei erkannter Atembeeinträchtigung sind Ventilationsförderung und Sekretmobilisation konsequent durchzuführen. Die didaktische Eselsbrücke LISA (Lagerung, Inhalation, Sekretmanagement, Atemübungen) fasst die Maßnahmenfelder zusammen — sie ist Merkhilfe, keine Leitlinie.

**Prüfungsrelevanz:** hoch
**Wissensart:** Konzept
**Bloom-Potential:** 2-4
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5; AWMF S3 2017)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Lunge ist in allen Bezirken effektiv belüftet" (deckt: Ziel Ventilation/Belüftung)
- Zitat: "Die Schleimhaut von Mund, Rachen" (deckt: Ziel intakte Schleimhaut, Spickzettel Ziele der Pneumonieprophylaxe)
- Zitat: "Eine Sekretansammlung in den Atemwegen zu verhindern" (deckt: Ziel Sekretansammlung verhindern)
- Zitat: "Maßnahmen zur Ventilationsförderung und Sekretmobilisation sind bei" (deckt: konsequente Durchführung bei Atembeeinträchtigung)
**Hinweis Teilaussage LISA:** Die Eselsbrücke LISA ist eine Merkhilfe ohne Leitliniencharakter — als didaktisches Konstrukt nicht quellenpflichtig; die belegten Maßnahmenfelder (Lagerung, Inhalation, Sekretmanagement, Atemübungen) stehen einzeln in Kap. 3.5.
**Praxisfehler:** Einzelmaßnahmen werden isoliert eingesetzt — Wirksamkeit entsteht aus dem Bündel plus Frühmobilisation.

**Misconceptions:**
- `M1`: **"LISA ist eine S3-Leitlinie — also verbindlich"** — LISA ist eine Merkhilfe; die verbindlichen Empfehlungen stehen in AWMF S3 (2017) und KRINKO (2013). Fachbegriff: "Leitlinien-Verwechslung".
- `M2`: **"Eine einzelne LISA-Säule reicht"** — Bündel-Strategien senken das Risiko deutlich stärker als Einzelmaßnahmen. Fachbegriff: "Einzel-Maßnahmen-Irrtum".
- `M3`: **"Jeder Patient muss inhalieren"** — Inhalation nur bei Indikation (zähes Sekret, Bronchospasmus, Anordnung); Routine-Inhalation kann sogar Keime aus Verneblern eintragen.

---

### F-04: Oberkörperhochlagerung

**Fakt:** Die Oberkörperhochlage entspricht einer sitzenden Position, in der leichter und tiefer eingeatmet werden kann als im Liegen. Sie wird mit 30-45° eingesetzt, verbessert die Atemmechanik und schützt vor Reflux/Mikroaspiration. Wichtig: Hochrutschen vermeiden (Abknickung/Kompression des Thorax, Dekubitusgefahr am Gesäß-Steiß-Bereich) und nur im Wechsel mit anderen Positionen einsetzen.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 3
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5; KRINKO 2013)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Die Oberkörperhochlage entspricht der sitzenden Position, in welcher leichter und tiefer eingeatmet werden kann als im Liegen" (deckt: Atemmechanik-Vorteil)
- Zitat: "Die Atemarbeit verringert sich im" (deckt: verbesserte Atemmechanik im Sitzen)
- Zitat: "Oberkörper erhöht positionieren (30–45°) bei nasoenteraler Sonde" (deckt: 30–45°)
- Zitat: "Reflux (Zurückfließen) von Sondenkost" (deckt: Schutz vor Reflux; die 30–45°-Positionierung ist im Korpus genau dieser Reflux-Gefahr bei Sonde zugeordnet)
- Zitat: "nur im Wechsel mit anderen Positionen" (deckt: nur im Wechsel einsetzen)
- Zitat: "Gefahr eines Dekubitus im Gesäß-Steiß-Bereich" (deckt: Dekubitusgefahr Gesäß-Steiß)
- Zitat: "im Bett nicht zum Fußende abrutscht" (deckt: Hochrutschen vermeiden)
- Zitat: "Kompression des Thorax" (deckt: Abknickung/Kompression bei Abrutschen)
**Hinweis Teilaussage „Mikroaspiration":** Im Korpus für die OK-Hochlage namentlich nur als **Reflux**-Schutz bei Sonde belegt (s. o.). Der Begriff „Mikroaspiration" steht in Pflege heute (Z. 142669: „Mikroaspirationen sind möglich"), dort jedoch im Trachealkanülen-Cuff-Kontext, nicht für die OK-Hochlage. Aussage daher auf „Reflux" gestützt; „Mikroaspiration" als Mechanismus-Hinweis, nicht als OK-Hochlage-spezifischer Beleg.
**Praxisfehler:** Reine Kopfteilerhöhung führt zum Hochrutschen (Scherkräfte → Dekubitus); Knieknick/Rutschbremse fehlt.

**Misconceptions:**
- `M1`: **"Je höher der Oberkörper, desto besser"** — 30-45° ist optimal; höher erhöht den Druck auf das Sakrum (Dekubitusrisiko) und ist schlecht durchhaltbar. Fachbegriff: "Maximal-Lagerungs-Mythos".
- `M2`: **"Oberkörperhochlagerung ist nur auf der Intensivstation wichtig"** — Sie wirkt bei allen immobilen Patienten, auch auf Normalstation und in der Altenpflege.
- `M3`: **"Kopfteil hoch ist dasselbe wie Oberkörper hoch"** — Kopfteilerhöhung allein lässt den Patienten abrutschen; korrekt ist die aufgerichtete Position plus Rutschsicherung.

---

### F-05: Dosierte Lippenbremse und PEP-Atmung

**Fakt:** Bei der dosierten Lippenbremse entsteht durch die locker geschlossenen Lippen eine körpereigene Stenose: Der erhöhte exspiratorische Atemwegswiderstand beugt einer Verengung der Bronchien und einem Alveolenkollaps vor. Eingesetzt v.a. bei Asthma und COPD. Bei der PEP-Atmung wird gegen einen Widerstand ausgeatmet — es entsteht in den Bronchien ein größerer Druck als im Thorax, was das Tracheobronchiallumen stabilisiert.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 3
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Bei der dosierten Lippenbremse entsteht durch die Lippen eine körpereigene Stenose" (deckt: Lippenbremse = Stenose)
- Zitat: "ein erhöhter exspiratorischer Atemwegswiderstand, der einer Verengung der Bronchien und einem Alveolenkollaps vorbeugt" (deckt: Wirkmechanismus Lippenbremse)
- Zitat: "ein größerer Druck in den" (deckt: PEP erzeugt erhöhten Druck)
- Zitat: "Bronchien als im Thorax. Dadurch wird das" (deckt: größerer Druck in Bronchien als im Thorax)
- Zitat: "Tracheobronchiallumen stabilisiert" (deckt: Stabilisierung des Tracheobronchiallumens)
**Praxisfehler:** Lippen werden fest gepresst statt locker aufgelegt — die Ausatmung wird anstrengend statt entlastend.

**Misconceptions:**
- `M1`: **"Die Lippenbremse ist nur für COPD sinnvoll"** — Sie hilft bei Atemnot fast jeder Ursache und kann nicht schaden. Fachbegriff: "COPD-Beschränkung".
- `M2`: **"Je fester die Lippen, desto besser"** — Die Lippen liegen locker aufeinander; zu starkes Pressen erhöht den Widerstand und verstärkt die Atemnot. Fachbegriff: "Press-Fehler".
- `M3`: **"Atemübungen gegen Widerstand sind für alle geeignet"** — Bei Lungenemphysem sind sie kontraindiziert (Gefahr: Emphysemblasen platzen → Pneumothorax).

---

### F-06: Kontaktatmung

**Fakt:** Bei der Kontaktatmung legt die Pflegeperson die Hände auf Bauch oder Thorax (Rippen in der Axillarlinie); durch den taktilen Reiz lernt der Patient, die Atembewegungen wahrzunehmen und gezielt in bestimmte Lungenbereiche zu lenken. Indikation ist eine flache Atmung; ebenso wird sie als gezielte Atemübung bei COPD eingesetzt. Übung mehrmals täglich über je 5-6 Atemzüge, keine Kontraindikationen.

**Prüfungsrelevanz:** mittel
**Wissensart:** Handlung
**Bloom-Potential:** 4 (Analysieren)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Indikation für die Kontaktatmung ist eine flache Atmung, ebenso wird sie als gezielte Atemübung bei COPD eingesetzt" (deckt: Indikation flache Atmung + COPD)
- Zitat: "an die Rippen in der linken und" (deckt: Handauflage an die Rippen)
- Zitat: "rechten Axillarlinie" (deckt: Position Axillarlinie)
- Zitat: "mehrmals am Tag jeweils" (deckt: mehrmals täglich)
- Zitat: "während 5–6 Atemzügen wiederholt werden" (deckt: je 5–6 Atemzüge)
**Hinweis Teilaussage „keine Kontraindikationen":** im Korpus belegt — „Kontraindikationen bestehen nicht" (Z. 10825, direkt anschließend an die Kontaktatmung-Beschreibung).
**Praxisfehler:** Festes Drücken statt leichtem Kontakt — behindert die Atmung und verängstigt den Patienten.

**Misconceptions:**
- `M1`: **"Bei der Kontaktatmung drückt man fest, damit gegen Widerstand geatmet wird"** — Kontaktatmung heißt nur Kontakt, kein Druck; Ziel ist Wahrnehmung, nicht Kraftaufbau. Fachbegriff: "Druck-Fehler".
- `M2`: **"Kontaktatmung geht nur bei wachen, kooperativen Patienten"** — Gerade bei schwachen, dementen oder bewusstseinseingeschränkten Patienten wirkt der taktile Reiz.
- `M3`: **"Kontaktatmung ersetzt alle anderen Atemübungen"** — Sie ist eine Technik im Bündel; bei mobilen Patienten sind aktive Übungen oft wirksamer.

---

### F-07: Sekretmanagement und gezieltes Absaugen

**Fakt:** Sekretmanagement umfasst sekretverflüssigende, -lösende und -entleerende Maßnahmen (Inhalation bei Indikation, Lagerung, PEP-Geräte, Hustentechniken). Das Absaugen von Bronchialsekret ist nur durchzuführen, wenn andere Maßnahmen zur Sekretentfernung nicht wirkungsvoll sind — es ist keine Prophylaxe, sondern eine Maßnahme bei fehlender Selbstreinigung. Geplantes Absaugen erfolgt nach ärztlicher Anordnung bzw. Pflegestandard.

**Prüfungsrelevanz:** hoch
**Wissensart:** Handlung
**Bloom-Potential:** 4
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5; KRINKO 2013)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Sekretmanagement: sekretverflüssigende," (deckt: Sekretmanagement umfasst sekretverflüssigende …)
- Zitat: "-lösende und -entleerende Maßnahmen" (deckt: … -lösende und -entleerende Maßnahmen)
- Zitat: "Das Absaugen von Bronchialsekret nur durchführen, wenn andere Maßnahmen zur Sekretentfernung nicht wirkungsvoll sind" (deckt: Absaugen nur als Ultima Ratio, keine Prophylaxe)
**Hinweis Teilaussage „geplantes Absaugen nach ärztlicher Anordnung/Pflegestandard":** im Korpus für apparative Verfahren belegt (z. B. „IPPB-Geräts erfolgt nach ärztlicher Anordnung", Z. 11044) und über die Pflegestandard-Logik des Kapitels gedeckt.
**Praxisfehler:** Routinemäßiges Absaugen — reizt die Schleimhaut und kann Keime tiefer eintragen.

**Misconceptions:**
- `M1`: **"Je fester der Patient hustet, desto besser"** — Forcierter Stoßhusten kollabiert kleine Bronchien und löst (postoperativ) starken Schmerz aus; Huffing ist oft schonender und effektiver. Fachbegriff: "Stoßhusten-Mythos".
- `M2`: **"Absaugen gehört zur Routine-Prophylaxe bei Bettlägerigen"** — Absaugen ist keine Prophylaxe, sondern Maßnahme bei ausbleibender Selbstreinigung (Bewusstlosigkeit, Intubation, schwere Schwäche). Fachbegriff: "Absaug-Routine-Irrtum".
- `M3`: **"Lagerungsdrainage heißt Kopf nach unten"** — Der betroffene Lungenbereich liegt oben, damit Sekret Richtung Trachea fließt; klassische Kopftieflage ist heute kaum noch empfohlen.

---

### F-08: Frühmobilisation als wichtigste Maßnahme

**Fakt:** Eine regelmäßige Mobilisation des Patienten oder häufige Positions- und Lagewechsel gelten als wichtigste Maßnahme zur Pneumonieprophylaxe. Mit der Mobilisation wird auch bei schweren Erkrankungen so früh wie möglich begonnen, da körperliche Aktivität für eine gleichmäßige Belüftung aller Lungenpartien unverzichtbar ist. Frühmobilisation wirkt gleichzeitig gegen Pneumonie, Thrombose und Dekubitus.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 3-5
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5; DNQP Mobilität 2020)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Eine regelmäßige Mobilisation des Patienten oder häufige Positions- und Lagewechsel gelten hierbei als wichtigste Maßnahme" (deckt: wichtigste Maßnahme)
- Zitat: "so früh wie möglich mit der Mobilisation begonnen" (deckt: Frühmobilisation auch bei schweren Erkrankungen)
- Zitat: "Körperliche Aktivität ist für eine ausreichende und gleichmäßige Belüftung aller" (deckt: Aktivität unverzichtbar für gleichmäßige Belüftung)
- Zitat: "Die frühe Mobilisation dient der Prophylaxe von Pneumo" (deckt: Mobilisation als Pneumonieprophylaxe)
- Zitat: "Dekubitus und Thrombose" (deckt: gleichzeitig gegen Dekubitus und Thrombose; Originalsatz: „… Prophylaxe von Pneumonie, Dekubitus und Thrombose")
**Praxisfehler:** "Schonung" und Bettruhe als vermeintlicher Schutz — jeder zusätzliche Liegetag erhöht das Pneumonierisiko.

**Misconceptions:**
- `M1`: **"Frühmobilisation erst nach 48 Stunden stabiler Werte"** — ERAS-Konzepte empfehlen Mobilisation bereits am OP-Tag bzw. 1. post-OP-Tag bei stabilem Kreislauf. Fachbegriff: "48h-Wartepflicht-Irrtum".
- `M2`: **"Mobilisation bedeutet nur Gehen"** — Mobilisation ist ein Stufenmodell (Aufsetzen, Bettkante, Stand, Gehen); jede Stufe wirkt. Fachbegriff: "Geh-Einschränkung".
- `M3`: **"Bei Schmerzen soll der Patient liegen bleiben"** — Schmerz ist kein Grund für Bettruhe, sondern Auftrag für gute Analgesie, damit Mobilisation möglich wird.

---

### F-09: Aspirationsprophylaxe und Mundhygiene

**Fakt:** Eine gute Mundhygiene senkt nachweislich das Pneumonierisiko bei älteren Menschen in Pflegeeinrichtungen, da eine gestörte Mundflora bzw. mangelhafte Mundhygiene Infektionen der Atemwege begünstigt (Erregereintrag über Aspiration mundständiger Keime). Zur Aspirationsprophylaxe gehören außerdem Oberkörperhochlage bzw. Seitenlage, Kontrolle der Sondenlage und das Bereithalten eines funktionsfähigen Absauggeräts bei Risikopatienten.

**Prüfungsrelevanz:** hoch
**Wissensart:** Maßnahme
**Bloom-Potential:** 4
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5; KRINKO 2013)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Verschiedene Studien belegen die Bedeutung einer guten Mundhygiene für das Reduzieren des Pneumonierisikos bei älteren Menschen in Pflegeeinrichtungen" (deckt: Mundhygiene senkt Pneumonierisiko, ältere Menschen)
- Zitat: "Störung der normalen Mundflora" (deckt: gestörte Mundflora als Ursache einer Atemwegsinfektion — Tab. „Atembeeinträchtigung und deren Ursachen": Infektion der Atemwege durch Mundflora-Störung)
- Zitat: "Patienten in Oberkörperhochlage oder Seitenlage bringen (Aspirationsprophylaxe)" (deckt: OK-Hochlage/Seitenlage als Aspirationsprophylaxe)
- Zitat: "Kontrolle der Sondenlage vor Verabreichen" (deckt: Kontrolle der Sondenlage)
- Zitat: "Bei Risikopatienten: funktionsfähiges Absauggerät bereithalten" (deckt: funktionsfähiges Absauggerät bei Risikopatienten)
- Zitat: "Auch bei bewusstlosen und intubierten Patienten ist die" (deckt: Mundpflege auch bei nicht-essenden/zahnlosen Hochrisikopatienten wichtig — Mundpflege-Kapitel 6.7)
- ⚠️ **Mechanismus-Term „Mikroaspiration":** Der Wirkpfad „Mundkeime → Atemwege" ist im Korpus über die Mundflora-Störung als Atemwegsinfektions-Ursache belegt (s. o.); der **spezifische Term „Mikroaspiration" als Mechanismus der Mund-Pneumonie-Verbindung ist in Pflege heute nicht verbatim vorhanden** (das Wort steht nur im Trachealkanülen-Cuff-Kontext, Z. 142669). Fakt-Formulierung daher auf „Aspiration mundständiger Keime / gestörte Mundflora" gestützt. Quelle für expliziten Mikroaspirations-Pathomechanismus beschaffen (KRINKO nosokomiale Pneumonie 2013 / Scannapieco-Reviews) **ODER** Term bei „Mikroaspiration" belassen nur als allgemeine Erläuterung.
**Praxisfehler:** Mundpflege wird bei zahnlosen Patienten oder bei Magensonde vernachlässigt — gerade dort ist sie besonders wichtig.

**Misconceptions:**
- `M1`: **"Ohne eigene Zähne ist Mundpflege nicht nötig"** — Zunge, Gaumen und Prothese sind Keim-/Biofilm-Reservoire (Candida, Bakterien). Fachbegriff: "Zahnlos-Ignoranz".
- `M2`: **"Chlorhexidin-Spülung ist Standard für alle Risikopatienten"** — Der Routine-Einsatz ist umstritten; mechanische Reinigung ist wichtiger. Fachbegriff: "Chlorhexidin-Pauschalisierung".
- `M3`: **"Bei Magensonde ist Mundpflege weniger wichtig"** — Ohne Kauen fehlt die mechanische Reinigung, der Mund trocknet aus, Keime vermehren sich stärker — Mundpflege ist umso wichtiger.

---

### F-10: Schluckstörung (Dysphagie) und Aspirationsgefahr

**Fakt:** Eine Schluckstörung — etwa die Unfähigkeit, richtig zu kauen und zu schlucken nach Schlaganfall — ist eine zentrale Aspirations- und Pneumonieursache. Bei Verdacht gilt: keine Nahrung/Flüssigkeit, bevor vor der Nahrungsaufnahme geprüft ist, ob Husten- und Schluckreflex intakt sind (nur bei intakten Schutzreflexen darf der Patient essen/trinken); bei bestätigter Dysphagie angepasste Kost-/Flüssigkeitskonsistenz (z.B. dickflüssige Kost, Andickungsmittel) und aufrechte Esshaltung mit anschließendem aufrechten Sitzen zur Aspirationsprophylaxe. Risikozeichen: häufiges Verschlucken/Husten und Würgen, gurgelnde Sprache/Stimmverschlechterung, Speisereste in den Wangentaschen. ⚠️ Quelle beschaffen (Trapl et al. 2007 / GUSS-Originalarbeit): Das konkret benannte Screening-Instrument **GUSS-Test** ist im lokalen Korpus nicht belegt — Pflege heute beschreibt die strukturierte Reflexprüfung, aber nicht das GUSS-Verfahren namentlich.

**Prüfungsrelevanz:** sehr hoch
**Wissensart:** Entscheidung
**Bloom-Potential:** 5 (Bewerten, Entscheiden)
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5/7.11; AWMF S3 2017; GUSS: Trapl et al. 2007 — ⚠️ lokal nicht verifizierbar)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Hat der Patient Schluckstörungen, oder ist sein Bewusstsein eingeschränkt?"
- Zitat: "überprüfen sie vor der Nahrungsaufnahme, ob"
- Zitat: "Ein Patient darf nur bei intakten Schutzreflexen essen oder trinken"
- Zitat: "Häufiges Verschlucken, Husten und Würgen"
- Zitat: "Gurgelnde Sprache, Stimmverschlechterung"
- Zitat: "Flüssigkeiten ggf. mit einem Andickungsmittel andicken"
- Zitat: "Den Patienten nach dem Essen noch"
**Praxisfehler:** "Ein Schluck Wasser zum Testen" ohne strukturiertes Screening — bei stiller Aspiration gelangt das Wasser unbemerkt in die Lunge.

**Misconceptions:**
- `M1`: **"Ein Schluck Wasser zum Testen geht immer"** — Bei stiller Aspiration fehlt der Husten; Wasser ist zudem am schwersten zu schlucken. Kein Wasser-Test ohne Screening. Fachbegriff: "Wasser-Test-Fehler".
- `M2`: **"Eingedickte Flüssigkeiten sind immer sicher"** — Andicken senkt das Risiko, eliminiert es aber nicht; zu stark angedickt kann sogar schlechter schluckbar sein. Fachbegriff: "Andickungs-Dogma".
- `M3`: **"Bei fehlendem Appetit ist die Dysphagie unwichtig"** — Mangelernährung und Aspirationspneumonie sind gleichzeitige Risiken; die Lösung ist sicheres Essen, nicht weniger Essen.

---

### F-11: Händehygiene und Hygiene-Bündel

**Fakt:** Sowohl hygienische als auch atemunterstützende Maßnahmen sind entscheidend, um nosokomiale Pneumonien zu vermeiden. Zentrale Hygienemaßnahme ist die regelmäßige und gewissenhafte Händedesinfektion vor und nach Patientenkontakt; ergänzt durch Basishygiene, hygienisch korrektes Verhalten (Absaugen, Intubation, O2-/Inhalationstherapie) und gute Mundhygiene. Diese Hygienemaßnahmen wirken zusammen — keine ersetzt die andere; die KRINKO/RKI legt als gesetzlich beauftragte Kommission die Richtlinien zur Krankenhaushygiene fest.

**Prüfungsrelevanz:** hoch
**Wissensart:** Entscheidung
**Bloom-Potential:** 4-5
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5/41.2; RKI/KRINKO 2013; WHO 2009)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "atemunterstützende Maßnahmen sind von entscheidender Bedeutung, um nosokomiale Pneumonien zu vermeiden" (deckt: hygienische + atemunterstützende Maßnahmen entscheidend)
- Zitat: "Regelmäßige und gewissenhafte Händedesinfektion" (deckt: zentrale Hygienemaßnahme Händedesinfektion)
- Zitat: "Einhalten der Basishygiene" (deckt: Basishygiene)
- Zitat: "Hygienisch korrektes Verhalten" (deckt: korrektes Verhalten bei Absaugen/Intubation/O2-/Inhalationstherapie)
- Zitat: "Richtlinien zur Krankenhaushygiene zu erstellen" (deckt: KRINKO-Auftrag = Krankenhaushygiene-Richtlinien)
- ⚠️ **Teilaussage „KRINKO empfiehlt diese Maßnahmen als Bündel":** Pflege heute listet die Hygienemaßnahmen für die Prophylaxe der nosokomialen Pneumonie gemeinsam auf, **attribuiert aber keine ausdrückliche „Bündel"-Empfehlung an die KRINKO** für die nosokomiale Pneumonie. Die explizite Bündel-Strategie (care bundle) wurde daher aus dem Fakt entfernt und auf „wirken zusammen" entschärft. Quelle beschaffen für KRINKO-Bündel-Empfehlung (KRINKO-Empfehlung „Prävention der nosokomialen beatmungsassoziierten Pneumonie" 2013, Bundesgesundheitsbl.), falls die Bündel-Aussage wieder aufgenommen werden soll.
**Praxisfehler:** Händedesinfektion nach dem Absaugen wird oft vergessen — hohes Übertragungsrisiko.

**Misconceptions:**
- `M1`: **"Händewaschen ist wirksamer als Händedesinfektion"** — Alkoholische Desinfektion ist Standard; Waschen nur bei sichtbarer Verschmutzung oder Clostridium-difficile-Kontakt. Fachbegriff: "Wasch-Präferenz-Irrtum".
- `M2`: **"Kurze Einwirkzeit reicht auch"** — Die vorgegebene Einwirkzeit (i.d.R. 30 s) ist validiert; kürzere Zeit erreicht nicht die volle Keimreduktion. Fachbegriff: "Einwirkzeit-Verkürzung".
- `M3`: **"Handschuhe ersetzen die Händedesinfektion"** — Handschuhe haben Mikrolöcher, beim Ausziehen droht Kontamination; vor und nach Handschuhen ist zu desinfizieren.

---

### F-12: Epidemiologie der nosokomialen Pneumonie

**Fakt:** Jedes Jahr werden in Deutschland etwa 75.000-112.000 Pneumonien im Krankenhaus erworben. Die nosokomiale Pneumonie zählt damit zu den häufigsten Krankenhausinfektionen und unterstreicht den Stellenwert konsequenter Prophylaxe und Hygiene.

**Prüfungsrelevanz:** mittel
**Wissensart:** Epidemiologie
**Bloom-Potential:** 1-2
**Primärquelle:** (Pflege heute 7. Aufl. Kap. 3.5)
**Beleg:**
- Quelle: `pflege-heute-volltext/pflege-heute.txt`
- Zitat: "Jedes Jahr werden in Deutschland etwa"
- Zitat: "75.000–112.000 Pneumonien im Krankenhaus erworben"
**Praxisfehler:** Die Häufigkeit wird unterschätzt — Pneumonieprophylaxe gilt fälschlich als nachrangige Routine statt als Kernaufgabe.

**Misconceptions:**
- `M1`: **"Krankenhausinfektionen sind selten"** — Mit zehntausenden nosokomialen Pneumonien pro Jahr in Deutschland sind sie ein häufiges, relevantes Problem.
- `M2`: **"Pneumonien im Krankenhaus sind unvermeidbar"** — Ein großer Teil ist durch Hygiene- und atemunterstützende Maßnahmen vermeidbar.
- `M3`: **"Nur Schwerkranke sind betroffen"** — Auch immobile Patienten auf Normalstation tragen ein erhebliches Risiko.
