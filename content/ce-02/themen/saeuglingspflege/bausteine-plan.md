# Wissensbausteine: Säuglingspflege

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `saeuglingspflege` |
| ceId | `ce-02` |
| cluster | C (Spezialgruppen — Säugling) |
| wissensart | handlung |
| kompetenzbereich | I.1 |
| geschaetzteUE | 10 |
| zielzeitMin | 248 (10 UE × 45 × 0,55) |
| bausteineAnzahl | 19 |
| voraussetzungen | `haut`, `kinaesthetik` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 21% (4 Bausteine), Bloom 3-4: 53% (10 Bausteine), Bloom 5-6: 26% (5 Bausteine)

**Primärquellen:**
- WHO (2023): Breastfeeding Recommendations — Global Strategy for Infant and Young Child Feeding
- Hoehl M., Kullick P. (Hrsg., 2019): Gesundheits- und Kinderkrankenpflege, 5. Aufl.
- AAP — American Academy of Pediatrics (2022): Updated Safe Sleep Recommendations — SIDS Risk Reduction
- G-BA (2023): Kinder-Richtlinie — Früherkennungsuntersuchungen U1 bis U9 + J1
- DGKJ (2021): S2k-Leitlinie Windeldermatitis
- RKI/STIKO (2024): Empfehlungen zur Säuglings-Impfungen
- § 26 SGB V (Kinderfrüherkennungsuntersuchungen)

---

## Baustein 1: saeuglingshaut-besonderheiten

### Metadaten
- **bausteinId:** saeuglingspflege-haut-besonderheiten
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir die Haut eines Erwachsenen und die eines Neugeborenen nebeneinander vor. Was könnte anders sein — und warum könnte das für die Pflege wichtig sein?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Neugeborenenhaut ist rund 60 % dünner als Erwachsenenhaut. Die Barrierefunktion und der **Säureschutzmantel** sind noch nicht ausgereift. Erst mit etwa 4 Wochen stellt sich der saure pH-Wert ein, der vor Keimen schützt. (Hoehl/Kullick, 2019)"

**B1 (230 Zeichen):** "Die Haut eines Babys ist viel dünner als deine. Sie schützt noch nicht gut vor Keimen und Kälte. Auch der Säureschutz auf der Haut ist erst mit etwa 4 Wochen fertig. Deshalb ist die Haut am Anfang sehr empfindlich."

- **Step-Typ:** text (displayFormat: beforeafter)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Die Haut eines Neugeborenen unterscheidet sich grundlegend von der eines Erwachsenen. Sie ist dünner, durchlässiger und die **Barrierefunktion** ist noch unvollständig. Das bedeutet: Wasser, Wärme und auch Wirkstoffe aus Cremes oder Seifen werden schneller aufgenommen, Reizstoffe dringen leichter ein. Der **Säureschutzmantel** — ein dünner, leicht saurer Film aus Talg und Schweiß — ist bei der Geburt noch neutral und baut sich erst über rund vier Wochen auf. Weil dieser Schutz fehlt, können sich Keime leichter vermehren. Dazu kommt: Die **Körperoberfläche im Verhältnis zum Gewicht** ist groß, der Säugling kühlt schnell aus und verliert viel Flüssigkeit über die Haut. Für die Pflege heißt das: wenig, aber gezielt waschen — keine parfümierten Seifen, kein starkes Rubbeln. (Hoehl/Kullick, 2019)"

**B1 (540 Zeichen):**
"Die Haut eines Babys ist sehr dünn und empfindlich. Sie schützt noch nicht gut. Wasser, Wärme und Stoffe aus Cremes gehen schnell hinein. Keime auch. Der **Säureschutzmantel** auf der Haut ist am Anfang nicht fertig. Er wächst erst in etwa 4 Wochen. Babys haben viel Haut im Verhältnis zu ihrem Gewicht. Deshalb kühlen sie schnell aus. Sie verlieren auch mehr Wasser über die Haut. Für dich als Pflegekraft heißt das: Wasche das Baby wenig. Nimm keine Seife mit Duftstoffen. Reibe nicht stark. Die Haut braucht Zeit, um stark zu werden."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Säureschutzmantel, Barrierefunktion, pH-Wert, Körperoberfläche]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Säuglingshaut ist nur kleiner, aber sonst wie Erwachsenenhaut"**
- **Fachbegriff:** Skalierungs-Irrtum
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — die Haut ist nicht nur kleiner, sondern auch **dünner, durchlässiger und weniger geschützt**. Der Säureschutzmantel fehlt am Anfang noch. Deshalb reagieren Babys viel schneller auf Reizstoffe. Merke: Babyhaut ist anders gebaut, nicht nur kleiner."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — Babyhaut ist nicht nur kleiner. Sie ist auch dünner und schwächer. Sie hat am Anfang keinen guten Schutz gegen Keime. Deshalb reagiert sie schnell auf Seifen und Cremes. Merke: Babyhaut ist anders, nicht nur klein."

**D2: "Der Säureschutzmantel ist bei Geburt schon fertig"**
- **Fachbegriff:** pH-Reife-Mythos
- **Feedback (C1, 240 Zeichen):** "Nicht ganz — bei Geburt ist der pH der Haut noch **neutral (etwa 6,5-7)**. Der saure, schützende pH-Wert baut sich erst über rund 4 Wochen auf. In dieser Zeit ist das Baby besonders anfällig für Hautinfektionen. Merke: Säureschutz kommt später."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — der Säureschutz auf der Haut ist am Anfang noch nicht fertig. Er braucht etwa 4 Wochen. In dieser Zeit kann das Baby schneller Hautprobleme bekommen. Merke: Der Säureschutz kommt erst nach einigen Wochen."

**D3: "Babys verlieren weniger Wärme als Erwachsene, weil sie kleiner sind"**
- **Fachbegriff:** Thermoregulations-Fehlschluss
- **Feedback (C1, 265 Zeichen):** "Umgekehrt — im Verhältnis zum Gewicht haben Babys eine **große Körperoberfläche**. Sie verlieren dadurch deutlich mehr Wärme als Erwachsene. Beim Baden oder Wickeln können sie in Minuten auskühlen. Merke: Je kleiner das Kind, desto schneller die Auskühlung."
- **Feedback (B1, 225 Zeichen):** "Umgekehrt — Babys haben viel Haut im Verhältnis zu ihrem Gewicht. Sie verlieren schneller Wärme als du. Beim Wickeln oder Baden kühlen sie in Minuten aus. Merke: Kleine Kinder frieren schnell."

### Richtig-Feedback
**C1 (255 Zeichen):** "Genau. Neugeborenenhaut ist dünner, durchlässiger und der Säureschutzmantel ist noch nicht ausgereift. Erst ab etwa 4 Wochen ist der pH sauer und schützt. Die große Körperoberfläche führt zu schnellem Wärmeverlust. Deshalb: wenig, warm, mild."

**B1 (210 Zeichen):** "Sehr gut. Babyhaut ist dünner und empfindlicher. Der Säureschutz kommt erst nach 4 Wochen. Babys frieren schneller, weil sie viel Haut im Verhältnis zum Gewicht haben. Merke: wenig waschen, warm halten, mild sein."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wann ist der Säureschutzmantel der Säuglingshaut ausgereift?"
- **Rückseite:** "Erst mit etwa 4 Wochen — bei Geburt ist der pH der Haut neutral und damit noch anfällig für Keime."
- **Kategorie:** fakt

---

## Baustein 2: saeuglingsbad-durchfuehrung

### Metadaten
- **bausteinId:** saeuglingspflege-bad-durchfuehrung
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Du sollst einen 4 Wochen alten Säugling baden. Welche drei Dinge würdest du **vor** dem Bad vorbereiten — und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Säuglingsbad: Wassertemperatur **37 °C**, Raumtemperatur **24-26 °C**, Badedauer **maximal 5-10 Minuten**. Bei gesunder Haut keine Badezusätze — Seifenreste irritieren den Säureschutzmantel. Alles in Reichweite legen, bevor das Kind ins Wasser kommt."

**B1 (225 Zeichen):** "So badest du ein Baby sicher: Wasser **37 Grad**. Raum **24-26 Grad** warm. Nicht länger als **5-10 Minuten**. Keine Seife bei gesunder Haut. Leg alles bereit, bevor das Baby ins Wasser kommt. Dann kannst du es nicht allein lassen."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Das Säuglingsbad folgt klaren Regeln, weil Babys schnell auskühlen und auf Seifen überreagieren können. **Vorbereitung**: Raumtemperatur 24-26 °C, Zugluft vermeiden. Wassertemperatur mit dem Ellenbogen oder einem Badethermometer prüfen — Ziel sind **37 °C**. Handtuch, Kleidung, Windel, Waschlappen müssen in Reichweite liegen, weil du das Kind **nie** unbeobachtet lassen darfst. **Durchführung**: Säugling mit dem Nacken-Rücken-Griff sicher halten (Kopf in der Armbeuge, mit derselben Hand den Oberarm umfasst). Langsam ins Wasser gleiten lassen, mit Gesicht und Kopf beginnen, dann Rumpf, zuletzt Genitalbereich. **Dauer maximal 5-10 Minuten**, sonst trocknet die Haut aus. **Nachbereitung**: sanft tupfen, nicht rubbeln, besonders Hautfalten gut abtrocknen. Bei gesunder Haut keine Badezusätze — sie stören den Säureschutz. (Hoehl/Kullick, 2019)"

**B1 (590 Zeichen):**
"So badest du ein Baby sicher. **Vorher**: Der Raum muss 24-26 Grad warm sein. Kein Zug. Das Wasser muss 37 Grad haben. Prüfe es mit einem Thermometer oder dem Ellenbogen. Leg alles bereit: Handtuch, Kleidung, Windel, Waschlappen. Du darfst das Baby **nie** allein lassen. **Beim Baden**: Halte das Baby mit dem Nacken-Rücken-Griff. Das heißt: Der Kopf liegt in deiner Armbeuge. Deine Hand hält den Oberarm. Tauche das Baby langsam ein. Wasche erst Gesicht und Kopf. Dann den Körper. Zuletzt den Windelbereich. Bade nur 5-10 Minuten. Sonst wird die Haut trocken. **Danach**: Tupfe sanft trocken. Nicht reiben."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Nacken-Rücken-Griff, Badethermometer, Hautfalten]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "40 °C ist besser — das ist schön warm"**
- **Fachbegriff:** Wohlfühl-Temperatur-Irrtum
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — **40 °C ist zu heiß** und kann die Haut reizen oder sogar verbrühen. Die Ziel-Temperatur für Säuglinge ist **37 °C**, das entspricht der Körpertemperatur. Höhere Temperaturen trocknen die Haut zusätzlich aus. Merke: 37 °C, nicht mehr."
- **Feedback (B1, 200 Zeichen):** "Nein — 40 Grad ist zu heiß. Das ist gefährlich für die Haut. Babys haben eine empfindliche Haut. Sie ist schnell verbrannt. Die richtige Temperatur ist 37 Grad. Das ist genauso warm wie der Körper."

**D2: "Ein Bad von 20 Minuten entspannt das Baby"**
- **Fachbegriff:** Dauer-Mythos
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — längere Bäder **trocknen die Haut aus** und erhöhen das Auskühlungsrisiko. Der Säureschutzmantel wird ausgewaschen. Maximal **5-10 Minuten** sind empfohlen. Wenn das Kind entspannen soll, ist Hautkontakt nach dem Bad wirksamer. Merke: kurz baden, lang kuscheln."
- **Feedback (B1, 215 Zeichen):** "Nein — ein langes Bad ist nicht gut. Die Haut trocknet aus. Das Baby kühlt aus. **Nur 5-10 Minuten** sind gut. Wenn das Baby sich entspannen soll: Kuschle nach dem Bad. Das hilft mehr als langes Baden."

**D3: "Ein Babybadeschaum ist sanft genug für jedes Bad"**
- **Fachbegriff:** Badezusatz-Mythos
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — auch 'milde' Badezusätze **stören den unreifen Säureschutzmantel** und hinterlassen Seifenreste. Bei gesunder Haut sind **klare Bäder ohne Zusätze** die beste Wahl. Zusätze sind nur bei bestimmten Hautproblemen nach ärztlicher Anweisung sinnvoll. Merke: klares Wasser reicht."
- **Feedback (B1, 235 Zeichen):** "Nein — auch **milde Seifen** sind oft zu stark für Babyhaut. Sie zerstören den Säureschutz. Am besten: **nur klares Wasser**. Zusätze nur, wenn der Arzt es sagt — zum Beispiel bei Hautproblemen. Merke: Wasser reicht meistens."

### Richtig-Feedback
**C1 (270 Zeichen):** "Genau. Das Säuglingsbad folgt drei Regeln: 37 °C Wasser, maximal 5-10 Minuten, Raum warm und zugfrei. Alles in Reichweite, weil du das Kind nie loslassen darfst. Bei gesunder Haut keine Zusätze — sie stören den Säureschutz, der bei Neugeborenen ohnehin erst reifen muss."

**B1 (225 Zeichen):** "Sehr gut. Die drei Regeln beim Baby-Bad: 37 Grad Wasser, maximal 5-10 Minuten, warmer Raum ohne Zug. Leg alles bereit — du darfst das Baby nicht allein lassen. Bei gesunder Haut: kein Schaum, keine Seife."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie warm und wie lange badet man einen Säugling?"
- **Rückseite:** "37 °C Wassertemperatur, maximal 5-10 Minuten Badedauer. Bei gesunder Haut keine Badezusätze."
- **Kategorie:** handlung

---

## Baustein 3: vernix-caseosa

### Metadaten
- **bausteinId:** saeuglingspflege-vernix
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Neugeborenes hat auf der Haut einen weißlichen, schmierigen Belag. Eine Mutter fragt dich: 'Kann ich das abwaschen, das sieht unschön aus.' Wie antwortest du?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (210 Zeichen):** "Die weiße, käseartige Schicht heißt **Vernix caseosa** (Käseschmiere). Sie schützt die Neugeborenenhaut in den ersten Tagen vor Austrocknung und Keimen und wird **nicht abgewaschen**, sondern zieht von selbst ein."

**B1 (215 Zeichen):** "Der weiße Belag auf der Haut heißt **Vernix caseosa**. Auf Deutsch: Käseschmiere. Er schützt die Haut des Babys in den ersten Tagen. Du wäschst ihn nicht ab. Er zieht von selbst in die Haut ein. Das ist normal."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (620 Zeichen):**
"Die **Vernix caseosa** (lateinisch für 'käseartiger Firnis') ist eine weißlich-fettige Schicht aus abgeschilferten Hautzellen, Talg und Lanugohaaren. Sie bildet sich ab der 20. Schwangerschaftswoche und schützt den Fetus im Fruchtwasser. Nach der Geburt hat sie drei wichtige Funktionen: Sie **schützt vor Wasserverlust** über die noch unreife Haut, **hält Wärme** und wirkt **antimikrobiell** gegen bestimmte Keime. Deshalb lautet die heutige Empfehlung: **Nicht abwaschen**. Die Vernix zieht innerhalb der ersten 24-48 Stunden von selbst in die Haut ein. Beim ersten Bad reicht es, starke Blut- oder Stuhlreste vorsichtig zu entfernen — die Vernix bleibt. (Hoehl/Kullick, 2019)"

**B1 (510 Zeichen):**
"Die Vernix caseosa ist eine weiße, fettige Schicht auf der Haut des Neugeborenen. Auf Deutsch heißt sie **Käseschmiere**. Sie schützt das Baby schon im Bauch der Mutter. Nach der Geburt hat sie drei Aufgaben: Sie schützt die Haut vor dem Austrocknen. Sie hält warm. Sie hilft gegen Keime. Deshalb gilt heute: **Nicht abwaschen**. Die Schicht zieht in 1-2 Tagen von selbst in die Haut ein. Wenn beim ersten Bad Blut oder Kindspech auf der Haut ist, kannst du das vorsichtig entfernen. Die weiße Schicht bleibt."

- **Erklärungs-Step:** stepType `reveal`
- **Glossar-Begriffe:** [Vernix caseosa, Lanugohaare, antimikrobiell]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Vernix ist unhygienisch und muss weg"**
- **Fachbegriff:** Hygiene-Mythos
- **Feedback (C1, 235 Zeichen):** "Umgekehrt — die Vernix ist **nicht unhygienisch**, sondern wirkt antimikrobiell und schützt die Haut. Sie besteht aus körpereigenen Stoffen und ist für das Baby geradezu ideal. Früher wurde sie abgewaschen, heute weiß man: Sie soll bleiben."
- **Feedback (B1, 205 Zeichen):** "Falsch — die Käseschmiere ist **nicht schmutzig**. Sie schützt das Baby. Sie hilft sogar gegen Keime. Früher hat man sie abgewaschen. Heute weiß man: Sie muss bleiben. Sie zieht von selbst in die Haut ein."

**D2: "Vernix muss man mit Öl oder Creme abtragen"**
- **Fachbegriff:** Abtragungs-Irrtum
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — Öl oder Creme sind **nicht nötig**, weil die Vernix selbst ein natürlicher Hautschutz ist. Zusätzliches Öl kann die Haut sogar reizen. Die Schicht zieht in 24-48 Stunden von selbst ein. Merke: nicht waschen, nicht eincremen, einfach lassen."
- **Feedback (B1, 215 Zeichen):** "Nein — du brauchst kein Öl und keine Creme. Die Käseschmiere ist schon der beste Schutz. Öl kann die Haut reizen. Die Schicht geht in 1-2 Tagen von selbst weg. Merke: Nichts drauf, einfach lassen."

**D3: "Vernix ist nur bei Frühgeborenen wichtig"**
- **Fachbegriff:** Frühchen-Verwechslung
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Vernix schützt **jedes Neugeborene**. Frühgeborene haben sogar oft schon weniger davon, weil sich die Schicht erst gegen Ende der Schwangerschaft reduziert. Bei reifen Neugeborenen ist sie dünner, aber genauso wichtig. Merke: Vernix gilt für alle Babys."
- **Feedback (B1, 225 Zeichen):** "Nicht richtig — die Käseschmiere schützt **jedes Baby**, nicht nur Frühgeborene. Frühgeborene haben oft schon weniger davon. Bei reifen Babys ist sie dünner, aber genauso wichtig. Merke: Sie hilft allen Babys."

### Richtig-Feedback
**C1 (240 Zeichen):** "Genau. Vernix caseosa ist ein natürlicher Hautschutz aus der Schwangerschaft. Sie schützt vor Austrocknung, hält warm und wirkt antimikrobiell. Die heutige Empfehlung: **nicht abwaschen**, sie zieht in 24-48 Stunden von selbst in die Haut ein."

**B1 (205 Zeichen):** "Sehr gut. Die Käseschmiere schützt die Haut des Babys. Sie schützt vor Trockenheit und Keimen und hält warm. Die Regel heute: **nicht abwaschen**. Sie geht in 1-2 Tagen von selbst in die Haut ein."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist Vernix caseosa und wie pflegt man sie?"
- **Rückseite:** "Weißliche Fettschicht aus Hautzellen, Talg und Lanugo. Schützt vor Austrocknung, Wärmeverlust und Keimen. Nicht abwaschen — zieht in 24-48 h ein."
- **Kategorie:** fachbegriff

---

## Baustein 4: nabelpflege

### Metadaten
- **bausteinId:** saeuglingspflege-nabelpflege
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Neugeborenes ist drei Tage alt. Der Nabelstumpf ist noch dran und sieht trocken aus. Eine Großmutter rät: 'Cremt den Nabel ein, damit er schön weich bleibt.' Was ist deine Antwort — und worauf achtest du bei jeder Versorgung?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Die moderne Nabelpflege ist **trocken und sauber**: Nabelstumpf **nicht eincremen**, nicht desinfizieren bei unauffälligem Verlauf, **nicht unter die Windel** schlagen. Täglich kontrollieren auf Rötung, Schwellung, Sekret, Geruch. Abfall normal nach 5-15 Tagen."

**B1 (230 Zeichen):** "Die Regel heute: Den Nabel **trocken halten**. Nicht eincremen. Keine Desinfektion, wenn alles normal aussieht. Die Windel unter dem Nabel lassen, nicht drüber. Jeden Tag schauen: Ist er rot? Nass? Riecht er? Der Nabel fällt nach 5-15 Tagen ab."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die Nabelpflege hat sich in den letzten Jahrzehnten grundlegend geändert. Die aktuelle Empfehlung lautet **dry cord care** (trockene Nabelpflege): Der Nabelstumpf wird **weder eingecremt noch routinemäßig desinfiziert**, wenn keine Infektionszeichen vorliegen. Grund: Desinfektionsmittel verzögern den natürlichen Trocknungs- und Abfallprozess. Wichtig sind drei Dinge: **Erstens** Händedesinfektion vor jeder Berührung. **Zweitens** den Nabel trocken und sauber halten — die Windel wird **unterhalb** des Nabels geschlossen, damit keine Feuchtigkeit oder Stuhl in die Wunde kommt. **Drittens** die **tägliche Kontrolle** auf Entzündungszeichen: Rötung, Schwellung, eitriges oder übelriechendes Sekret, Blutung. Bei Auffälligkeiten sofort Arztkontakt — eine **Omphalitis** (Nabelentzündung) kann sich beim Neugeborenen schnell ausbreiten. Der Nabelstumpf fällt normalerweise zwischen Tag 5 und 15 von selbst ab. (Hoehl/Kullick, 2019)"

**B1 (600 Zeichen):**
"Die Regel heute heißt: **trockene Nabelpflege**. Das heißt: Du cremst den Nabel **nicht** ein. Du desinfizierst ihn **nicht**, wenn alles normal aussieht. Warum? Weil Desinfektion den Nabel nass macht. Er fällt dann später ab. So machst du es richtig: **Erstens** Hände desinfizieren. **Zweitens** den Nabel trocken halten. Die Windel schließt du **unter dem Nabel**. So kommt kein Urin oder Stuhl in die Wunde. **Drittens** jeden Tag kontrollieren: Ist der Nabel rot? Schwillt er an? Kommt Eiter oder ein komischer Geruch? Dann sofort den Arzt rufen. Der Nabel fällt normal nach 5-15 Tagen von selbst ab."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Nabelstumpf, Omphalitis, dry cord care]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der Nabel muss täglich mit Desinfektionsmittel versorgt werden"**
- **Fachbegriff:** Desinfektions-Routine-Mythos
- **Feedback (C1, 270 Zeichen):** "Nicht mehr aktuell — **routinemäßige Desinfektion** verzögert den Abfall und verändert die Hautflora. Aktuelle Empfehlung ist die **trockene Nabelpflege** ohne Desinfektion bei unauffälligem Verlauf. Nur bei Entzündungszeichen (Rötung, Eiter) wird auf Arzt-Anordnung desinfiziert."
- **Feedback (B1, 225 Zeichen):** "Nein — Desinfektion jeden Tag ist **nicht nötig**, wenn der Nabel normal aussieht. Die Regel heute: trocken halten. Nur wenn er rot wird oder Eiter hat: Arzt rufen. Dann sagt der Arzt, was du machen sollst."

**D2: "Nabelcreme hält die Haut geschmeidig und hilft beim Heilen"**
- **Fachbegriff:** Creme-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — **Creme hält die Feuchtigkeit fest** und verzögert das Eintrocknen des Nabelstumpfs. Damit steigt das Infektionsrisiko. Der Nabel braucht das Gegenteil: Luft und Trockenheit. Merke: nicht eincremen, nur kontrollieren und trocken halten."
- **Feedback (B1, 210 Zeichen):** "Nein — Creme macht den Nabel feucht. Das ist schlecht. Der Nabel braucht Luft, damit er trocken wird und abfällt. Feucht = mehr Gefahr für eine Infektion. Merke: Nicht eincremen. Nur sauber halten."

**D3: "Die Windel über den Nabel ziehen, damit er geschützt ist"**
- **Fachbegriff:** Windel-Positions-Fehler
- **Feedback (C1, 265 Zeichen):** "Umgekehrt — die Windel muss **unter** dem Nabel geschlossen werden. Sonst gelangen Feuchtigkeit, Urin oder Stuhl direkt an die Wunde, und das erhöht das Infektionsrisiko (Omphalitis). Die kleine Faltkante am Windelbund hilft, den Nabel freizulassen. Merke: Windel unten."
- **Feedback (B1, 220 Zeichen):** "Falsch — die Windel schließt du **unter** dem Nabel, nicht oben drüber. Oben drüber wäre der Nabel nass und schmutzig. Das ist gefährlich. Unten ist er frei und trocken. Merke: Windel unten schließen, Nabel frei lassen."

### Richtig-Feedback
**C1 (270 Zeichen):** "Genau. Die trockene Nabelpflege ist der heutige Standard: nicht eincremen, nicht routinemäßig desinfizieren, Windel unter dem Nabel schließen. Täglich auf Entzündungszeichen kontrollieren (Rötung, Schwellung, Sekret, Geruch). Abfall erfolgt normal zwischen Tag 5 und 15."

**B1 (225 Zeichen):** "Sehr gut. Die Regel ist: Den Nabel trocken halten. Nicht eincremen. Keine Desinfektion bei normalem Nabel. Windel unter dem Nabel. Jeden Tag schauen, ob er rot wird oder riecht. Der Nabel fällt nach 5-15 Tagen ab."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie wird der Nabelstumpf beim Neugeborenen heute gepflegt?"
- **Rückseite:** "Dry cord care: trocken halten, nicht eincremen, nicht routinemäßig desinfizieren. Windel unter dem Nabel schließen. Täglich kontrollieren. Abfall nach 5-15 Tagen."
- **Kategorie:** handlung

---

## Baustein 5: omphalitis-warnzeichen

### Metadaten
- **bausteinId:** saeuglingspflege-omphalitis
- **bloomLevel:** 4
- **wissensart:** komplikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Bei einem sieben Tage alten Säugling bemerkst du, dass die Haut um den Nabel rot und heiß ist. Aus der Nabelwunde tritt gelbliches Sekret. Was befürchtest du, und was tust du?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Warnzeichen einer **Omphalitis** (Nabelentzündung): Rötung und Überwärmung der Nabelumgebung, Schwellung, **eitriges oder übelriechendes Sekret**, Blutung ohne Mobilisation, Fieber, verändertes Trinkverhalten. → **sofort Arztkontakt**."

**B1 (220 Zeichen):** "Zeichen für eine Nabelentzündung (Omphalitis): Die Haut um den Nabel ist **rot** und **warm**. Der Nabel ist **geschwollen**. Eiter oder ein komischer Geruch kommen heraus. Das Baby trinkt schlecht oder hat Fieber. → **Sofort Arzt rufen**."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Eine **Omphalitis** ist eine bakterielle Entzündung des Nabelstumpfs und/oder der umgebenden Bauchdecke. Sie ist beim Neugeborenen besonders gefährlich, weil die Erreger über die Nabelgefäße schnell in den Blutkreislauf gelangen und eine **Sepsis** auslösen können. Klassische Zeichen sind: **Rötung und Überwärmung** der Haut rund um den Nabel (periumbilikal), **Schwellung und Verhärtung**, **eitriges oder übelriechendes Sekret**, **Blutung ohne äußeren Anlass**. Systemische Zeichen: Fieber, Trinkunlust, graue Hautfarbe, Berührungsempfindlichkeit. Die Handlungskette ist eindeutig: **Bei Verdacht sofort Arztkontakt**. Nie 'abwarten' bei einem Neugeborenen — die Zeit ist bei einer Sepsis kritisch. (Hoehl/Kullick, 2019)"

**B1 (555 Zeichen):**
"Eine Omphalitis ist eine Entzündung am Nabel. Sie ist gefährlich, weil die Keime schnell ins Blut gehen können. Dann bekommt das Baby eine **Sepsis** — eine Blutvergiftung. Das kann lebensgefährlich sein. So erkennst du die Gefahr: Die Haut um den Nabel ist **rot** und **warm**. Der Nabel ist **dick**. Eiter oder schlechter Geruch sind da. Der Nabel blutet ohne Grund. Das Baby trinkt schlecht. Es hat Fieber oder sieht grau aus. **Die Regel ist klar**: Bei diesen Zeichen musst du **sofort einen Arzt rufen**. Warte nicht bis morgen. Bei Babys zählt jede Stunde."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Omphalitis, Sepsis, periumbilikal]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Eine leichte Rötung ist normal und heilt von allein"**
- **Fachbegriff:** Verharmlosungs-Irrtum
- **Feedback (C1, 285 Zeichen):** "Vorsicht — beim Neugeborenen ist **jede Rötung am Nabel verdächtig**. Eine beginnende Omphalitis sieht zuerst harmlos aus, kann aber innerhalb von Stunden zu einer Sepsis fortschreiten. Die Devise lautet: **Lieber einmal zu viel den Arzt kontaktieren als einmal zu wenig**. Merke: beim Nabel nie abwarten."
- **Feedback (B1, 235 Zeichen):** "Vorsicht — eine Rötung am Nabel ist **nicht harmlos**. Eine Entzündung kann schnell gefährlich werden. Das Baby kann in Stunden sehr krank werden. Die Regel: **Lieber einmal zu viel anrufen als einmal zu wenig**. Merke: beim Nabel nie warten."

**D2: "Rötung reicht nicht — es muss Eiter da sein, um den Arzt zu rufen"</Text>
- **Fachbegriff:** Schwellenwert-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht richtig — **Eiter ist ein spätes Zeichen**, die Entzündung ist dann schon fortgeschritten. Schon Rötung, Überwärmung oder Berührungsempfindlichkeit sind Warnsignale, die einen Arztkontakt rechtfertigen. Merke: Warte nicht auf Eiter — schon die Rötung ist Grund genug."
- **Feedback (B1, 220 Zeichen):** "Nein — wenn Eiter kommt, ist die Entzündung schon groß. **Rötung, Wärme oder Schmerz** sind schon genug, um den Arzt zu rufen. Warte nicht, bis es schlimmer wird. Merke: Schon bei Rötung Arzt rufen."

**D3: "Ich kann die Entzündung zuhause mit mehr Desinfektion behandeln"**
- **Fachbegriff:** Selbstbehandlungs-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht sicher — eine Omphalitis braucht **ärztliche Diagnose und meist Antibiotika**. Eigenmächtige Desinfektion kann die oberflächlichen Zeichen kaschieren, während die Infektion tiefer wandert. Bei einem Neugeborenen mit Sepsis-Risiko ist das hochgefährlich. Merke: Entzündung = Arzt."
- **Feedback (B1, 230 Zeichen):** "Nein — du **darfst die Entzündung nicht selbst behandeln**. Das Baby braucht vielleicht Antibiotika. Desinfektion allein reicht nicht. Die Entzündung geht tiefer, du siehst es nur nicht. Merke: Bei Entzündung **immer** zum Arzt."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Die fünf Schlüssel-Zeichen einer Omphalitis sind: Rötung, Überwärmung, Schwellung, eitriges/übelriechendes Sekret und Blutung ohne Anlass. Jedes einzelne ist ein Grund für sofortigen Arztkontakt — beim Neugeborenen kann sich eine Sepsis innerhalb von Stunden entwickeln."

**B1 (235 Zeichen):** "Sehr gut. Die Warnzeichen sind: Rötung, Wärme, Schwellung, Eiter oder schlechter Geruch, Blutung ohne Grund. Auch ein Zeichen allein ist ein Grund, den Arzt zu rufen. Bei Babys ist eine Entzündung schnell sehr gefährlich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Zeichen deuten auf eine Omphalitis hin und was tust du?"
- **Rückseite:** "Rötung, Überwärmung, Schwellung, eitriges/übelriechendes Sekret, Blutung ohne Anlass. → Sofort Arztkontakt (Sepsis-Gefahr)."
- **Kategorie:** assessment

---

## Baustein 6: wickeln-ablauf

### Metadaten
- **bausteinId:** saeuglingspflege-wickeln
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Du willst ein Baby wickeln. Warum könnte es aus Sicht der Kinästhetik (Infant Handling) wichtig sein, das Baby **langsam** und mit **viel Körperkontakt** zu bewegen — statt es schnell und mit ausgestreckten Beinen anzuheben?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Beim Wickeln: Windel unterlegen, mit warmem Wasser und Waschlappen reinigen, bei Mädchen **von vorne nach hinten**, **Ölpflege statt Feuchttücher** bei trockener Haut. Infant-Handling: langsam, mit Körperkontakt, kein Anheben an den Beinen. (Hoehl/Kullick, 2019)"

**B1 (230 Zeichen):** "So wickelst du ein Baby: Neue Windel drunter. Mit warmem Wasser putzen. Bei Mädchen **von vorne nach hinten** wischen. Bei trockener Haut lieber **Öl statt Feuchttücher**. Bewege das Baby **langsam**, bleib mit den Händen am Körper. Nie an den Beinen hochheben."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (850 Zeichen):**
"Wickeln ist mehr als ein Hygienevorgang — es ist **Beziehungsarbeit und Bewegungslernen**. **Vorbereitung**: Wickelplatz warm, alle Utensilien griffbereit, Hände desinfizieren. Eine neue, offene Windel wird **bereits unter das Gesäß** gelegt, bevor die alte geöffnet wird — falls das Kind uriniert oder stuhlt. **Reinigung**: warmes Wasser und weicher Waschlappen sind bei gesunder Haut erste Wahl. **Bei Mädchen** grundsätzlich **von der Harnröhre Richtung After** (vorne nach hinten), um Harnwegsinfekte zu vermeiden. **Bei Jungen** Vorhaut **nicht zurückziehen**. **Feuchttücher** enthalten oft Duftstoffe und Alkohol und reizen empfindliche Haut — lieber **Öl auf Watte** oder reines Wasser. **Kinästhetik (Infant Handling)**: Das Kind wird **gerollt, nicht gehoben**. Eine Hand umfasst Schulter und Kopf, die andere das Becken. Langsame, angekündigte Bewegungen geben Sicherheit, das Baby spürt seine eigene Bewegung und lernt mit. Nie an den Beinen hochziehen — das belastet Hüfte und Wirbelsäule. (Hoehl/Kullick, 2019)"

**B1 (650 Zeichen):**
"Wickeln ist nicht nur Saubermachen. Es ist auch eine Zeit für Nähe. **So gehst du vor**: Der Wickelplatz muss warm sein. Leg alles bereit. Desinfiziere deine Hände. Leg eine neue, offene Windel **unter das Baby**, bevor du die alte aufmachst. Dann kann nichts danebengehen. Mach mit **warmem Wasser und einem Waschlappen** sauber. Bei Mädchen wischst du **von vorne nach hinten**. Das schützt vor Blasenentzündung. Bei Jungen: Vorhaut **nicht** zurückziehen. Feuchttücher haben oft Duftstoffe. Besser ist **Öl auf Watte** oder Wasser. **Bewege das Baby langsam**. Rolle es zur Seite, heb es nicht an den Beinen hoch. Eine Hand hält Kopf und Schulter. Die andere das Becken. So lernt das Baby seine Bewegung."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Infant Handling, Kinästhetik, Harnröhre, Vorhaut]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Beine hochheben geht am schnellsten"**
- **Fachbegriff:** Hochhebe-Mythos
- **Feedback (C1, 275 Zeichen):** "Nicht ratsam — das Anheben an den Beinen **überstreckt Hüfte und Wirbelsäule** und ist für das Baby ein Kontrollverlust. **Infant Handling** empfiehlt das Rollen zur Seite, mit Hand an Schulter und Becken. Das Baby spürt seine Bewegung mit und lernt. Merke: nicht hochheben, rollen."
- **Feedback (B1, 235 Zeichen):** "Nein — das Baby an den Beinen hochziehen ist **nicht gut**. Die Hüfte und der Rücken werden zu stark gestreckt. Das Baby verliert das Gefühl für seinen Körper. **Besser**: Roll das Baby zur Seite. Eine Hand am Kopf, eine am Becken."

**D2: "Bei Mädchen wischt man von hinten nach vorne, damit alles sauber wird"**
- **Fachbegriff:** Wischrichtungs-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht richtig — von **hinten nach vorne** schleppt Darmkeime in die Harnröhre und fördert **Harnwegsinfekte**. Richtig ist **von vorne nach hinten**: von der Harnröhre Richtung After. Gegebenenfalls mit frischem Waschlappen oder Seite wechseln. Merke: immer vorne nach hinten bei Mädchen."
- **Feedback (B1, 240 Zeichen):** "Nein — von hinten nach vorne bringt Darmkeime in die Harnröhre. Dann kommen Blasenentzündungen. **Richtig**: von **vorne nach hinten** wischen. Von der Harnröhre zum Po. Wenn nötig: frischer Waschlappen. Merke: vorne nach hinten."

**D3: "Bei Jungen muss man die Vorhaut zurückziehen zum Reinigen"**
- **Fachbegriff:** Vorhaut-Mythos
- **Feedback (C1, 300 Zeichen):** "Nicht richtig — die Vorhaut ist beim Säugling noch **mit der Eichel verklebt (physiologische Phimose)**. Gewaltsames Zurückziehen kann Risse und spätere Verengungen verursachen. Die äußere Reinigung mit Wasser reicht. Die Vorhaut löst sich in den ersten Lebensjahren von allein. Merke: nicht zurückziehen."
- **Feedback (B1, 245 Zeichen):** "Nein — du **darfst die Vorhaut nicht zurückziehen**. Beim Baby ist sie mit der Eichel verwachsen. Das ist normal. Wenn du ziehst, kann sie einreißen. Wasser von außen reicht. Die Vorhaut wird in den ersten Jahren von selbst locker."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Wickeln ist Beziehungspflege: langsame Bewegungen, Infant Handling, warmer Wickelplatz. Bei Mädchen von vorne nach hinten reinigen, bei Jungen die Vorhaut nicht zurückziehen. Öl statt Feuchttücher bei empfindlicher Haut. Neue Windel immer schon drunterlegen, bevor du die alte öffnest."

**B1 (240 Zeichen):** "Sehr gut. Wickeln geht so: warm, langsam, mit Körperkontakt. Bei Mädchen von vorne nach hinten putzen. Bei Jungen die Vorhaut nicht ziehen. Öl statt Feuchttücher bei empfindlicher Haut. Neue Windel schon drunterlegen, bevor du öffnest."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie wickelt man einen Säugling nach Infant-Handling-Prinzipien? (Schritte + Besonderheiten Mädchen/Jungen)"
- **Rückseite:** "Rollen statt hochheben, neue Windel vorher unterlegen. Bei Mädchen vorne nach hinten. Bei Jungen Vorhaut nicht zurückziehen. Öl statt Feuchttücher bei empfindlicher Haut."
- **Kategorie:** handlung

---

## Baustein 7: windeldermatitis-ursachen

### Metadaten
- **bausteinId:** saeuglingspflege-windeldermatitis-ursachen
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Baby hat am Po eine rote, entzündete Haut. Die Mutter fragt: 'Wie kann das sein, ich wickle doch oft?' Welche drei Ursachen kommen für eine Windeldermatitis in Frage?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Die Windeldermatitis entsteht durch ein Zusammenspiel aus **Feuchtigkeit, Reibung und Stuhl-Enzymen**. Unter Windeln steigt der pH, die Haut quillt auf, die Barriere bricht. Durchfall, Antibiotika und falsche Reinigung sind häufige Auslöser. (DGKJ-Leitlinie 2021)"

**B1 (235 Zeichen):** "Warum entsteht wunder Po? Drei Gründe zusammen: **Feuchtigkeit** (Urin), **Reibung** (Windel) und **Stuhl-Enzyme** (machen die Haut kaputt). Die Haut quillt auf. Sie wird dünn. Sie entzündet sich. Durchfall oder Antibiotika machen es schlimmer."

- **Step-Typ:** text (displayFormat: procontra)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die **Windeldermatitis** ist die häufigste Hauterkrankung im Säuglingsalter. Sie entsteht durch ein Zusammenspiel mehrerer Faktoren. **Erstens**: dauerhafte Feuchtigkeit durch Urin und Stuhl macht die **Hautbarriere durchlässig** — die Haut quillt auf und verliert ihren Schutz. **Zweitens**: der **pH-Wert** in der Windel steigt durch Harnstoff-Abbau ins Alkalische, was die **Verdauungsenzyme des Stuhls aktiviert**. Diese Enzyme (Proteasen, Lipasen) greifen dann die aufgeweichte Haut an. **Drittens**: **Reibung** durch Windel und Hautfalten verstärkt die mechanische Belastung. Risikoerhöhend wirken Durchfall (viele Enzyme), Antibiotika-Therapie (Hefepilz-Wachstum), seltenes Wickeln und scharfe Feuchttücher. Typisch ist eine **scharf begrenzte Rötung** im Windelbereich, oft mit Papeln. (DGKJ-Leitlinie 2021)"

**B1 (600 Zeichen):**
"Ein wunder Po (Windeldermatitis) ist die häufigste Hautkrankheit bei Babys. **Drei Dinge zusammen** machen die Haut kaputt: **Erstens**: Die Haut ist lange nass. Urin und Stuhl machen die Haut weich. Dann ist der Schutz weg. **Zweitens**: Der Urin wird in der Windel scharf. Er macht die Enzyme im Stuhl aktiv. Diese Enzyme fressen die weiche Haut an. **Drittens**: Die Windel reibt an der Haut. Auch das verletzt sie. **Schlimmer wird es durch**: Durchfall (mehr Enzyme), Antibiotika (dann kommt Pilz), zu selten wickeln, scharfe Feuchttücher. Typisch: rote Stellen nur dort, wo die Windel ist."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Windeldermatitis, Proteasen, Lipasen, Hautbarriere]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Eine Windeldermatitis entsteht nur durch Urin"**
- **Fachbegriff:** Mono-Ursachen-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht vollständig — Urin allein reicht nicht. Es sind **drei Faktoren zusammen**: Feuchtigkeit, Reibung und **Stuhl-Enzyme**. Besonders die Verdauungsenzyme aus dem Stuhl sind aggressiv, vor allem bei Durchfall. Urin ist Wegbereiter, Stuhl oft der Täter. Merke: nicht nur Urin, sondern das Paket."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Urin allein** macht noch keinen wunden Po. Es kommen **drei Dinge zusammen**: Nässe, Reibung und **Stuhl-Enzyme**. Besonders bei Durchfall greifen die Enzyme aus dem Stuhl die Haut an. Merke: Nässe, Reibung und Stuhl — alle drei."

**D2: "Je öfter ich creme, desto besser für die Haut"</Text>
- **Fachbegriff:** Überpflegungs-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht automatisch — **zu viel Creme** hält die Feuchtigkeit auf der Haut fest und kann die Situation verschlimmern. Bei beginnender Windeldermatitis ist **Zinkpaste dünn** und vor allem **offene Pflege** wichtiger als Creme. Die Haut braucht Luft, nicht Schichten. Merke: dünn cremen, offen lassen."
- **Feedback (B1, 245 Zeichen):** "Nicht unbedingt — **zu viel Creme** hält die Nässe auf der Haut. Das ist schlecht. Bei Windeldermatitis hilft **Zinkpaste dünn** und **Luft**. Lass das Baby oft ohne Windel strampeln. Creme hilft, aber viel hilft nicht viel. Merke: dünn cremen, oft Luft."

**D3: "Antibiotika haben nichts mit dem wunden Po zu tun"**
- **Fachbegriff:** Antibiotika-Fehlschluss
- **Feedback (C1, 300 Zeichen):** "Nicht richtig — **Antibiotika** verändern die Darmflora und begünstigen eine **Candida-Besiedlung** (Hefepilz) im Windelbereich. Typisch ist dann eine knallrote, randbetonte Rötung mit Satellitenpapeln. Diese Form braucht eine antimykotische Behandlung. Merke: Antibiotika → Pilzgefahr im Windelbereich."
- **Feedback (B1, 255 Zeichen):** "Doch — **Antibiotika** können einen wunden Po schlimmer machen. Sie töten gute Bakterien. Dann wächst der **Pilz Candida**. Der macht eine knallrote Haut mit kleinen Punkten außen drum. Dann braucht das Baby eine Salbe gegen Pilz. Merke: Antibiotika → Pilzgefahr."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Die Windeldermatitis hat drei Treiber: Feuchtigkeit, Reibung und Stuhl-Enzyme, die im alkalischen Windelmilieu besonders aktiv sind. Durchfall, Antibiotika und scharfe Feuchttücher sind häufige Auslöser. Deshalb ist die Prävention immer dieselbe: wenig Nässe, wenig Reibung, viel Luft."

**B1 (250 Zeichen):** "Sehr gut. Ein wunder Po entsteht durch **Nässe, Reibung und Stuhl-Enzyme** zusammen. Durchfall, Antibiotika und scharfe Feuchttücher machen es schlimmer. Deshalb gilt: oft wickeln, sanft reinigen, viel Luft an die Haut lassen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 Haupt-Ursachen hat die Windeldermatitis?"
- **Rückseite:** "Feuchtigkeit (Urin/Stuhl), Reibung (Windel) und Stuhl-Enzyme (Proteasen/Lipasen im alkalischen Milieu). Verstärkt durch Durchfall, Antibiotika, scharfe Feuchttücher."
- **Kategorie:** fakt

---

## Baustein 8: windeldermatitis-massnahmen

### Metadaten
- **bausteinId:** saeuglingspflege-windeldermatitis-massnahmen
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 10 Monate altes Baby hat seit zwei Tagen eine Windeldermatitis: rote Haut, aber noch keine offenen Stellen. Welche fünf konkreten Maßnahmen leitest du ein — und welche **grundlegende Regel** verbindet sie alle?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Bei Windeldermatitis: **häufiger wickeln**, **offen strampeln lassen** (mehrmals täglich), sanft mit Wasser reinigen, **Zinkpaste dünn** auftragen, Feuchttücher meiden. Keine Puder wegen Aspirationsgefahr. Bei Pilzverdacht: Antimykotikum (Arzt)."

**B1 (235 Zeichen):** "So hilfst du bei wundem Po: **Oft wickeln**. **Luft ran**: Windel weglassen, Baby strampeln lassen. **Sanft waschen**. **Zinkpaste dünn** auftragen. Keine Feuchttücher. Keinen Puder (gefährlich beim Einatmen). Bei Pilz: Salbe vom Arzt."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"Die Behandlung der Windeldermatitis folgt dem Prinzip: **Nässe raus, Reiz weg, Schutz drauf**. Fünf Bausteine bilden das Standardvorgehen. **Erstens** die **Frequenz**: mindestens **alle 2-3 Stunden wickeln**, bei Durchfall nach jedem Stuhlgang. **Zweitens** die **Freiheit**: mehrmals täglich Windelpausen von 15-30 Minuten, das Kind offen strampeln lassen — Luft ist die beste Medizin. **Drittens** die **Reinigung**: nur **warmes Wasser** und weicher Waschlappen, **keine Feuchttücher** mit Duft- und Konservierungsstoffen. **Viertens** die **Hautpflege**: eine **dünne Schicht Zinkpaste** (z.B. Penaten, Bepanthol) als physikalische Barriere. Dick aufgetragen behindert sie die Atmung der Haut. **Fünftens** **keine Puder** — Aspirationsgefahr, Klumpenbildung in Falten. Bei scharf randbegrenzter, knallroter Rötung mit Satellitenläsionen besteht **Candida-Verdacht** und der Arzt verordnet ein Antimykotikum. Heilt die Rötung nach 3-5 Tagen nicht oder verschlimmert sich: Arztkontakt. (DGKJ-Leitlinie 2021)"

**B1 (680 Zeichen):**
"Bei einem wunden Po hilfst du mit **fünf einfachen Schritten**. Die Regel dahinter: **Weniger Nässe, weniger Reizung, mehr Schutz**. **Erstens**: **Oft wickeln**. Alle 2-3 Stunden. Bei Durchfall nach jedem Stuhl. **Zweitens**: **Luft dranlassen**. Lass das Baby mehrmals am Tag 15-30 Minuten ohne Windel strampeln. Luft heilt. **Drittens**: **Sanft waschen** mit warmem Wasser und einem weichen Lappen. **Keine Feuchttücher**, die haben oft scharfe Stoffe. **Viertens**: **Zinkpaste dünn** auftragen, zum Beispiel Penaten oder Bepanthol. Dick ist **nicht** besser. **Fünftens**: **Keinen Puder benutzen**. Das Baby kann es einatmen. Das ist gefährlich. Wenn die Haut **knallrot** wird mit kleinen Punkten drum herum: **zum Arzt**. Dann ist es vielleicht ein Pilz."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Zinkpaste, Antimykotikum, Candida, Aspiration]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Dick Creme auftragen schützt besser"**
- **Fachbegriff:** Mengen-Mythos
- **Feedback (C1, 280 Zeichen):** "Nicht richtig — **dicke Cremeschichten** verhindern die Luftzirkulation und halten Feuchtigkeit unter der Creme gefangen. Zink wirkt als **dünne, physikalische Barriere**. Mehr ist nicht besser, sondern schlechter. Die Devise: dünn auftragen, Luft dranlassen. Merke: dünne Schicht reicht."
- **Feedback (B1, 235 Zeichen):** "Nein — **viel Creme ist nicht besser**. Eine dicke Schicht hält die Nässe drunter. Das macht es schlimmer. **Dünn** auftragen ist genau richtig. Die Haut braucht Luft. Merke: Wenig Creme, viel Luft."

**D2: "Puder hält die Haut trocken — also ist er gut bei Windeldermatitis"**
- **Fachbegriff:** Puder-Mythos
- **Feedback (C1, 310 Zeichen):** "Nicht ratsam — **Puder ist heute obsolet**: Er klumpt in Hautfalten (reizt dadurch zusätzlich), und vor allem besteht **Aspirationsgefahr** — das Baby kann beim Wickeln feinen Staub einatmen, was zu Lungenproblemen führen kann. Die Pädiatrie rät seit Jahren davon ab. Merke: kein Puder bei Babys."
- **Feedback (B1, 255 Zeichen):** "Nein — **Puder ist gefährlich** für Babys. Er klumpt in den Falten. Und das Baby kann den feinen Staub **einatmen**. Das kann die Lunge schädigen. Ärzte raten seit Jahren: **keinen Puder** verwenden. Merke: Puder ist für Babys tabu."

**D3: "Feuchttücher sind sanft genug, gerade bei wundem Po"**
- **Fachbegriff:** Feuchttuch-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht automatisch — viele Feuchttücher enthalten **Parfüm, Konservierungsstoffe oder Alkohol**, die entzündete Haut zusätzlich reizen. Bei Windeldermatitis ist **warmes Wasser mit Waschlappen** die sanfteste Variante. Reiben vermeiden, nur tupfen. Merke: bei wundem Po keine Feuchttücher."
- **Feedback (B1, 240 Zeichen):** "Nein — viele Feuchttücher haben **Parfüm oder Alkohol**. Das brennt auf entzündeter Haut. Bei wundem Po ist **Wasser mit einem weichen Lappen** am besten. Nicht reiben, nur tupfen. Merke: Bei wundem Po kein Feuchttuch."

### Richtig-Feedback
**C1 (310 Zeichen):** "Genau. Die fünf Maßnahmen: häufig wickeln, Windelpausen mit Luft, sanfte Wasserreinigung, dünne Zinkpaste, kein Puder. Die verbindende Regel lautet **Nässe raus, Reiz weg, Schutz drauf**. Wenn keine Besserung in 3-5 Tagen oder scharf randbegrenzte Rötung mit Satellitenpapeln auftritt: Arztkontakt (Pilzverdacht)."

**B1 (255 Zeichen):** "Sehr gut. Die fünf Schritte: oft wickeln, Luft ran, sanft waschen, Zinkpaste dünn, keinen Puder. Die Regel dahinter: **Nässe raus, Reiz weg, Schutz drauf**. Wenn es in 3-5 Tagen nicht besser wird oder knallrot mit Punkten drum herum: zum Arzt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Maßnahmen bei Windeldermatitis — und welche Grundregel verbindet sie?"
- **Rückseite:** "Häufig wickeln, Windelpausen/Luft, Wasser + Waschlappen, Zinkpaste dünn, kein Puder. Regel: Nässe raus, Reiz weg, Schutz drauf."
- **Kategorie:** handlung

---

## Baustein 9: thermoregulation-saeugling

### Metadaten
- **bausteinId:** saeuglingspflege-thermoregulation
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Warum kann ein nackter Säugling im 22 °C warmen Raum innerhalb weniger Minuten auskühlen, während ein Erwachsener das kaum merken würde? Überlege zwei körperliche Unterschiede."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Säuglinge haben eine **große Körperoberfläche bezogen auf das Gewicht**, wenig Unterhautfettgewebe und eine unreife zentrale Temperaturregulation. Sie kühlen beim Wickeln und Baden schnell aus. Warmhalten bedeutet: Raum 24-26 °C, zügiges Arbeiten, sofort anziehen."

**B1 (240 Zeichen):** "Ein Baby kühlt schnell aus, weil drei Dinge zusammenkommen: Viel **Haut im Verhältnis zum Gewicht**. Wenig **Fett unter der Haut**. Das **Gehirn** kann die Temperatur noch nicht gut regeln. Deshalb: Raum warm halten, schnell arbeiten, sofort anziehen."

- **Step-Typ:** text (displayFormat: procontra)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Die **Thermoregulation** beim Neugeborenen ist aus drei Gründen labil. **Erstens** das Verhältnis **Körperoberfläche zu Körpergewicht**: beim Neugeborenen rund dreimal so hoch wie beim Erwachsenen, dadurch entsprechend hoher Wärmeverlust. **Zweitens** die **geringe Isolationsschicht**: wenig weißes Unterhautfettgewebe, keine dicke Körperbehaarung. **Drittens** die **unreife zentrale Steuerung** im Hypothalamus — Zittern als Wärmeproduktion funktioniert bei Neugeborenen nur eingeschränkt, die Wärme wird über das **braune Fettgewebe** (Thermogenese) erzeugt, das sich aber schnell erschöpft. Konsequenz für die Pflege: **Raumtemperatur 24-26 °C** beim Wickeln und Baden, Zugluft vermeiden, Oberkörper bedecken während man den Windelbereich versorgt, warme Hände haben, sofort anziehen nach dem Bad. (Hoehl/Kullick, 2019)"

**B1 (610 Zeichen):**
"Babys kühlen schnell aus. Warum? Drei Gründe. **Erstens**: Sie haben **viel Haut** im Verhältnis zu ihrem Gewicht. Ein Erwachsener hat wenig Haut und viel Körper. Ein Baby ist umgekehrt. Viel Haut = viel Wärmeverlust. **Zweitens**: Babys haben **wenig Fett** unter der Haut. Fett ist wie ein Mantel. Babys haben diesen Mantel noch nicht. **Drittens**: Das **Gehirn** kann die Temperatur noch nicht gut steuern. Babys können nicht zittern wie du. Sie produzieren Wärme aus dem **braunen Fett**. Aber das ist schnell leer. **Für dich in der Pflege heißt das**: Raum 24-26 Grad. Nicht lange auspacken. Bauch warmhalten beim Wickeln. Sofort anziehen nach dem Bad."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Thermoregulation, Hypothalamus, braunes Fettgewebe, Thermogenese]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Babys frieren nicht, sie fühlen sich warm an"**
- **Fachbegriff:** Hautgefühl-Fehlschluss
- **Feedback (C1, 290 Zeichen):** "Nicht zuverlässig — **Hände und Füße** fühlen sich beim Säugling oft kühl an, das ist normal. Beurteilt wird die Kerntemperatur am **Nacken, Rücken oder Bauch**. Babys frieren still, weil sie nicht zittern können — sie werden bei Auskühlung eher apathisch. Merke: Kerntemperatur zählt, nicht die Hände."
- **Feedback (B1, 245 Zeichen):** "Nicht richtig — **Hände und Füße** sind bei Babys oft kalt. Das ist normal. Prüfe lieber am **Nacken, Rücken oder Bauch**. Wenn es dort kühl ist, friert das Baby wirklich. Ein Baby zittert nicht. Es wird dann eher still. Merke: Nacken prüfen, nicht Hände."

**D2: "Babys schwitzen genau wie Erwachsene"**
- **Fachbegriff:** Schwitz-Gleichsetzung
- **Feedback (C1, 280 Zeichen):** "Nicht richtig — die **Schweißdrüsen** sind beim Neugeborenen noch **unreif**, Schwitzen als Kühlmechanismus funktioniert eingeschränkt. Das bedeutet: Babys sind in Wärme genauso gefährdet wie in Kälte. **Überhitzung** ist ein Risiko für SIDS und Dehydratation. Merke: Babys regulieren in beide Richtungen schlecht."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Babys **schwitzen nicht** so gut wie du. Ihre Schweißdrüsen sind noch nicht fertig. Deshalb werden sie schnell **zu warm**. Zu warm ist auch gefährlich — zum Beispiel für SIDS. Merke: Babys können beide Richtungen schlecht regeln."

**D3: "Je mehr Decken, desto besser — Babys müssen immer warm sein"**
- **Fachbegriff:** Überwärmungs-Mythos
- **Feedback (C1, 300 Zeichen):** "Nicht richtig — **Überwärmung** ist ein eigener Risikofaktor, besonders beim Schlafen (SIDS). Babys sollen warm, aber nicht heiß liegen. Kontrolle: Nacken warm, Hände kühl = passt. Nacken feucht-heiß = zu warm. Besser **Schlafsack als dicke Decken**. Merke: warm ja, überwärmt nein."
- **Feedback (B1, 250 Zeichen):** "Nein — **zu viel Wärme ist auch gefährlich**. Besonders beim Schlafen. Zu warm kann zu SIDS führen. Richtig: Nacken warm, Hände ruhig kühl. Wenn der Nacken schwitzt, ist das Baby zu warm. **Schlafsack statt dicker Decken**. Merke: warm ja, heiß nein."

### Richtig-Feedback
**C1 (305 Zeichen):** "Genau. Die Auskühlungsneigung hat drei Gründe: großes Verhältnis Körperoberfläche zu Gewicht, wenig subkutanes Fett und unreife zentrale Temperaturregulation ohne Zittermechanismus. Die Wärme entsteht über das braune Fettgewebe, das sich schnell erschöpft. Für die Pflege: Raum 24-26 °C, zügig arbeiten, sofort anziehen."

**B1 (250 Zeichen):** "Sehr gut. Die drei Gründe: viel Haut, wenig Fett, unreifes Gehirn. Babys können nicht zittern. Sie machen Wärme aus braunem Fett, das schnell leer ist. Deshalb: warmer Raum, schnell arbeiten, schnell anziehen. Überhitzung ist aber auch gefährlich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum kühlen Säuglinge so schnell aus? (3 Gründe) Und welche Raumtemperatur für Wickeln/Baden?"
- **Rückseite:** "Große Körperoberfläche/Gewicht, wenig Unterhautfett, unreife Thermoregulation ohne Zittern. Raumtemperatur: 24-26 °C. Überhitzung vermeiden (SIDS-Risiko)."
- **Kategorie:** fakt

---

## Baustein 10: milchschorf-vs-ekzem

### Metadaten
- **bausteinId:** saeuglingspflege-milchschorf-ekzem
- **bloomLevel:** 4
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Mutter zeigt dir gelbliche, schuppige Beläge auf der Kopfhaut ihres 2 Monate alten Babys und fragt: 'Ist das schon ein Ekzem? Muss ich zum Arzt?' Wie unterscheidest du **Gneis/Milchschorf** von einem **atopischen Ekzem**?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "**Gneis (Kopfgneis)** = fettige, gelbliche Schuppen, meist harmlos, heilt spontan — trotz Wortähnlichkeit **nicht** identisch mit dem atopischen Ekzem. **Milchschorf** ist im Sprachgebrauch oft eine frühe Form des **atopischen Ekzems**: rot, nässend, juckend."

**B1 (235 Zeichen):** "**Gneis** = fettige, gelbe Schuppen am Kopf. Das ist meist **harmlos**. Es geht von selbst weg. **Milchschorf** ist oft der Anfang einer anderen Krankheit: **atopisches Ekzem (Neurodermitis)**. Das ist **rot, nass, juckt**. Unterschied: fettig vs. trocken/rot."

- **Step-Typ:** comparison

### Stufe 3 — Erklärung

**C1 (800 Zeichen):**
"Die Begriffe werden umgangssprachlich häufig verwechselt. **Gneis (Kopfgneis, seborrhoisches Säuglingsekzem)** erscheint meist in den ersten Lebenswochen: fettige, gelbliche bis bräunliche Schuppen, gut haftend, vor allem auf der Kopfhaut, auch in Augenbrauen und Nasolabialfalten. Er juckt **nicht**, das Kind ist unauffällig. Gneis ist **selbstlimitierend** — verschwindet bis zum Ende des ersten Lebensjahres. **Pflege**: Vorsichtig mit Öl (z.B. Mandelöl) einweichen, dann mit weichem Babykamm lösen. Nicht kratzen oder abreiben. Der **Milchschorf** hingegen, der seinen Namen vom Aussehen wie angebrannte Milch hat, ist eine Frühform des **atopischen Ekzems (Neurodermitis)**: rot, nässend, schuppig, stark **juckend**, oft beginnt er an den Wangen und auf der Kopfhaut. Das Baby ist unruhig, schläft schlecht, reibt am Kopf. **Behandlung** erfordert ärztliche Abklärung und meist rückfettende Basispflege, bei Schüben antientzündliche Cremes (Arzt). Die Abgrenzung ist klinisch wichtig: Gneis braucht Geduld, atopisches Ekzem braucht einen Plan. (Hoehl/Kullick, 2019)"

**B1 (680 Zeichen):**
"Die Wörter werden oft verwechselt. **Gneis** (auch Kopfgneis) kommt in den ersten Wochen. Es sieht aus wie **gelbe, fettige Schuppen** auf dem Kopf. Auch an den Augenbrauen. Es **juckt nicht**. Das Baby ist ganz normal. Gneis geht von selbst weg. Meistens im ersten Lebensjahr. Was hilft? **Öl** (zum Beispiel Mandelöl) drauf. Einwirken lassen. Dann mit weichem Kamm lösen. **Milchschorf** ist etwas anderes. Der Name kommt, weil es aussieht wie **verbrannte Milch**. Oft ist das der **Anfang einer Neurodermitis (atopisches Ekzem)**. Die Haut ist **rot, nass, schuppig, und es juckt stark**. Oft an den Wangen. Das Baby ist unruhig und schläft schlecht. Dann **musst du zum Arzt**. Der gibt spezielle Cremes. Der Unterschied: Gneis ist **fettig und harmlos**. Milchschorf ist **rot und unangenehm**."

- **Erklärungs-Step:** stepType `comparison`
- **Glossar-Begriffe:** [Gneis, Milchschorf, atopisches Ekzem, Neurodermitis, seborrhoisch]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Gneis und Milchschorf sind dasselbe"**
- **Fachbegriff:** Begriffsverwechslung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Gneis (seborrhoisches Ekzem)** ist fettig, gelblich, nicht juckend und harmlos. **Milchschorf** wird medizinisch meist als **Frühform des atopischen Ekzems** gesehen: rot, nässend, juckt. Unterschiedliche Ursache, unterschiedlicher Verlauf, unterschiedliche Behandlung. Merke: fettig-harmlos vs. rot-juckend."
- **Feedback (B1, 250 Zeichen):** "Nein — **Gneis** ist fettig, gelb, juckt nicht. Er ist harmlos. **Milchschorf** ist rot, nass und juckt. Er ist oft der Anfang einer Neurodermitis. Zwei verschiedene Probleme, zwei verschiedene Behandlungen. Merke: fettig = Gneis, rot = Milchschorf."

**D2: "Gneis muss man sofort wegkratzen, sonst bleibt er"**
- **Fachbegriff:** Kratz-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht ratsam — **Kratzen verletzt die dünne Kopfhaut** und öffnet Infektionspforten. Gneis löst sich sanft mit **Öl (z.B. Mandelöl)**: einwirken lassen, dann mit weichem Kamm oder Bürste entfernen. Selbst wenn man nichts tut: Gneis geht im ersten Jahr von allein weg. Merke: nicht kratzen, sondern einweichen."
- **Feedback (B1, 240 Zeichen):** "Nein — **nicht kratzen**. Die Kopfhaut ist dünn. Kratzen macht kleine Wunden. Dann können Keime rein. Richtig: **Öl drauf** (Mandelöl), einwirken lassen, dann mit weichem Kamm lösen. Oder einfach warten — Gneis geht von selbst weg."

**D3: "Bei Milchschorf genügt Öl und viel Baden"**
- **Fachbegriff:** Behandlungs-Fehlschluss
- **Feedback (C1, 310 Zeichen):** "Nicht ausreichend — beim **atopischen Ekzem (Milchschorf)** helfen Öl-Kompressen und häufiges Baden **nicht**. Im Gegenteil: zu viel Wasser trocknet aus. Wichtig ist eine **rückfettende Basispflege** und bei Schüben **antientzündliche Cremes** nach Arztverordnung. Das Ekzem ist eine chronische Erkrankung. Merke: Milchschorf braucht Plan, nicht nur Öl."
- **Feedback (B1, 260 Zeichen):** "Nein — bei **Milchschorf (Neurodermitis)** hilft Öl allein nicht. Zu viel Baden macht die Haut trockener. Das Baby braucht **spezielle Creme** vom Arzt. Das ist eine Krankheit, die lange dauert. Merke: Gneis = Öl reicht. Milchschorf = zum Arzt."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Die Abgrenzung ist wichtig: **Gneis** ist fettig-gelblich, nicht juckend, harmlos und selbstlimitierend — Öl und Geduld reichen. **Milchschorf** ist meist Zeichen eines **atopischen Ekzems**: rot, nässend, juckend. Es braucht ärztliche Abklärung und einen Behandlungsplan. Fettig = harmlos, rot = zum Arzt."

**B1 (255 Zeichen):** "Sehr gut. **Gneis** ist fettig, gelb, juckt nicht — das ist harmlos. Öl und warten reicht. **Milchschorf** ist rot, nass, juckt — das ist oft **Neurodermitis**. Das Baby muss zum Arzt. Merke: fettig = harmlos. Rot und juckt = zum Arzt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Unterschied Gneis vs. Milchschorf — Aussehen, Juckreiz, Behandlung?"
- **Rückseite:** "Gneis: fettig-gelblich, kein Juckreiz, harmlos, Öl + weicher Kamm. Milchschorf: rot, nässend, juckend — Frühform des atopischen Ekzems, Arztkontakt."
- **Kategorie:** fachbegriff

---

## Baustein 11: stillen-who-empfehlung

### Metadaten
- **bausteinId:** saeuglingspflege-stillen-empfehlung
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Eine werdende Mutter fragt: 'Wie lange soll ich stillen? Bis wann darf es nur Muttermilch sein, ab wann Beikost?' Wie fasst du die heutige WHO-Empfehlung in drei Punkten zusammen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Die WHO empfiehlt **ausschließliches Stillen in den ersten 6 Monaten**. Danach **schrittweise Beikost einführen**, das Stillen jedoch **bis zum 2. Geburtstag oder darüber hinaus** fortsetzen, solange Mutter und Kind es wünschen. (WHO, 2023)"

**B1 (220 Zeichen):** "Die WHO sagt: **6 Monate nur Muttermilch**. Danach kommt **Beikost** (Brei, kleine Stückchen) dazu. Aber **weiter stillen** — bis das Kind 2 Jahre alt ist, oder auch länger. Solange Mutter und Kind es wollen. (WHO, 2023)"

- **Step-Typ:** text (displayFormat: news)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die **WHO-Empfehlung** aus der Global Strategy for Infant and Young Child Feeding definiert drei Stufen. **Erstens: ausschließliches Stillen in den ersten sechs Lebensmonaten.** 'Ausschließlich' heißt **nur Muttermilch, keine Zufütterung** von Wasser, Tee oder Formulanahrung — außer bei medizinischer Indikation. **Zweitens: Einführung von Beikost ab dem 6. Monat.** Die Nieren, der Darm und die Motorik sind dann reif genug, um neue Nahrung zu verarbeiten. **Drittens: Weiterstillen** parallel zur Beikost **bis zum 2. Geburtstag oder darüber hinaus**, solange Mutter und Kind es möchten. Begründet wird das mit dem nachgewiesenen Nutzen: reduziertes Infektions- und Allergierisiko, bessere kognitive Entwicklung, geringeres mütterliches Brustkrebs-Risiko. Die Nationale Stillkommission (2022) schließt sich dieser Empfehlung an. (WHO, 2023)"

**B1 (570 Zeichen):**
"Die WHO hat drei klare Regeln. **Erste Regel: 6 Monate nur Muttermilch.** Das bedeutet: kein Wasser, kein Tee, keine Formulanahrung. Nur die Brust. Außer der Arzt sagt etwas anderes. **Zweite Regel: Ab 6 Monaten Beikost.** Die Nieren und der Darm sind dann groß genug. Das Baby kann dann auch sitzen und kauen. Beikost heißt: Gemüsebrei, Obstbrei, dann kleine Stückchen. **Dritte Regel: Weiter stillen bis 2 Jahre** — oder länger. Solange Mutter und Kind wollen. Warum? Muttermilch macht das Baby gesünder. Weniger Infekte. Weniger Allergien. Auch die Mutter hat weniger Brustkrebs-Risiko."

- **Erklärungs-Step:** stepType `text` (displayFormat: news)
- **Glossar-Begriffe:** [Beikost, Formulanahrung, exklusives Stillen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "4 Monate ausschließliches Stillen reicht, dann kann man Beikost geben"**
- **Fachbegriff:** Veraltete-Empfehlung-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht mehr aktuell — ältere Empfehlungen sprachen von 4 Monaten. Die heutige **WHO-Empfehlung (2023)** ist klar: **6 Monate ausschließlich stillen**. Der Verdauungstrakt ist vorher nicht reif für feste Nahrung, das Allergierisiko steigt. Merke: 6 Monate, nicht 4."
- **Feedback (B1, 235 Zeichen):** "Nein — früher sagte man 4 Monate. Heute sagt die **WHO (2023)**: **6 Monate nur Muttermilch**. Der Darm vom Baby ist vor 6 Monaten noch nicht fertig. Zu frühe Beikost gibt oft Allergien. Merke: 6 Monate, nicht 4."

**D2: "Mit 6 Monaten soll man abstillen, weil Muttermilch dann nichts mehr bringt"**
- **Fachbegriff:** Abstill-Mythos
- **Feedback (C1, 300 Zeichen):** "Nicht richtig — Muttermilch ist auch **nach 6 Monaten wertvoll**: sie liefert Antikörper, passt sich dem Kind an und reduziert Infekte. Die WHO empfiehlt **Weiterstillen bis zum 2. Geburtstag oder länger**, parallel zur Beikost. Abstillen ist eine individuelle Entscheidung, keine medizinische Pflicht. Merke: Muttermilch verliert ihren Wert nicht."
- **Feedback (B1, 260 Zeichen):** "Nein — Muttermilch ist auch nach 6 Monaten **gut**. Sie hilft gegen Krankheiten. Sie ändert sich mit dem Kind. Die WHO sagt: **Weiter stillen bis 2 Jahre oder länger**. Plus Beikost natürlich. Wann abstillen, entscheidet die Mutter. Es gibt keinen Zwang."

**D3: "Man kann von Anfang an Wasser zusätzlich zur Muttermilch geben, das ist wichtig"**
- **Fachbegriff:** Zufütterungs-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht empfohlen — in den ersten 6 Monaten braucht ein gestilltes Baby **kein zusätzliches Wasser**. Muttermilch besteht zu rund 87 % aus Wasser und deckt den Flüssigkeitsbedarf komplett ab. Zusätzliches Wasser kann die **Nieren belasten** und die Trinkmenge an der Brust reduzieren. Merke: ausschließlich = wirklich nur Muttermilch."
- **Feedback (B1, 255 Zeichen):** "Nein — in den ersten 6 Monaten braucht das Baby **kein extra Wasser**. Muttermilch ist zum größten Teil Wasser. Das reicht. Extra Wasser ist schlecht für die kleinen Nieren. Und das Baby trinkt dann weniger an der Brust. Merke: nur Muttermilch, nichts anderes."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Die WHO-Empfehlung (2023) besteht aus drei Stufen: Ausschließlich stillen in den ersten 6 Monaten, ab 6 Monaten schrittweise Beikost, Weiterstillen bis mindestens zum 2. Geburtstag. Die Nationale Stillkommission schließt sich dem an. Nutzen: weniger Infekte, Allergien und Brustkrebs-Risiko."

**B1 (250 Zeichen):** "Sehr gut. Die drei Regeln der WHO: **6 Monate nur Muttermilch**. Dann **Beikost dazu**. **Weiter stillen bis 2 Jahre** oder länger. Das Baby wird gesünder: weniger Infekte, weniger Allergien. Auch für die Mutter gut: weniger Brustkrebs."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie lautet die aktuelle WHO-Empfehlung zum Stillen (3 Stufen)?"
- **Rückseite:** "6 Monate ausschließlich stillen. Ab 6 Monaten schrittweise Beikost. Weiterstillen bis zum 2. Geburtstag oder länger, solange Mutter und Kind es möchten. (WHO, 2023)"
- **Kategorie:** fakt

---

## Baustein 12: sids-praevention

### Metadaten
- **bausteinId:** saeuglingspflege-sids-praevention
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Ehepaar richtet gerade das Kinderzimmer ein. Sie fragen dich: 'Was können wir tun, damit unser Baby sicher schläft?' Nenne fünf Empfehlungen, die **heute als evidenzbasiert gelten** — und erkläre kurz, warum sie wirken."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "SIDS-Prävention nach **AAP (2022)**: **Rückenlage** zum Schlafen, im **Elternzimmer** ohne Bettgemeinschaft, **fester Untergrund** ohne weiche Decken/Kissen/Nestchen, **Rauchfreiheit** in Schwangerschaft und Umgebung, **Schlafsack** statt Decke, **passende Raumtemperatur** (16-18 °C)."

**B1 (260 Zeichen):** "Sicheres Schlafen gegen **SIDS** (plötzlicher Kindstod): **Auf den Rücken** legen. **Im Elternzimmer** schlafen, aber **im eigenen Bett**. **Feste Matratze**, keine weichen Kissen oder Decken. **Rauchfrei**. **Schlafsack** statt Decke. **Raum 16-18 Grad** — nicht zu warm."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (870 Zeichen):**
"**SIDS** (Sudden Infant Death Syndrome / plötzlicher Kindstod) ist der plötzliche, unerklärte Tod eines scheinbar gesunden Säuglings im ersten Lebensjahr, meist im Schlaf. Durch konsequente Präventions-Botschaften sind die Zahlen seit den 1990er-Jahren in Deutschland **um über 80 % gesunken**. Die **AAP-Empfehlungen 2022** bündeln die Evidenz in einem umfassenden Schlafumfeld-Paket. **Erstens** die **Rückenlage** zum Schlafen — Bauchlage erhöht das Risiko mehrfach. **Zweitens** das **Elternzimmer ohne Bettgemeinschaft (Roomsharing, kein Bedsharing)** mindestens im ersten halben Jahr: eigenes Bett oder Beistellbett neben dem Elternbett. **Drittens** ein **fester Untergrund** (Babymatratze), **kein Nestchen, keine Stofftiere, keine losen Decken oder Kissen** — Erstickungsgefahr. **Viertens** eine **rauchfreie Umgebung** in Schwangerschaft und danach; passives Rauchen erhöht das Risiko deutlich. **Fünftens** ein **Schlafsack** statt Decke, damit das Baby nicht unter die Decke rutscht. **Raumtemperatur 16-18 °C**, Überwärmung vermeiden. Zusätzlich **schützend**: Stillen und Schnuller zum Einschlafen (nach Etablierung des Stillens). (AAP 2022)"

**B1 (700 Zeichen):**
"**SIDS** heißt: Ein Baby stirbt plötzlich im Schlaf. Die Ursache kennt man oft nicht. Seit den 1990er-Jahren gibt es viel weniger SIDS-Fälle — **über 80 % weniger**. Das kommt durch klare Regeln für sicheres Schlafen. Die **AAP (2022)** empfiehlt fünf Regeln. **Erste Regel: Rückenlage** zum Schlafen. Nicht auf den Bauch oder die Seite. **Zweite Regel: Im Elternzimmer** schlafen, aber **im eigenen Bettchen**. Nicht zusammen im Elternbett (Gefahr zu ersticken). **Dritte Regel: Feste Matratze**. Keine weichen Kissen. Keine Kuscheltiere. Keine lose Decken. **Vierte Regel: Kein Rauch**. Nicht beim Baby. Auch nicht in der Schwangerschaft. **Fünfte Regel: Schlafsack** statt Decke. So kann das Baby nicht darunter rutschen. **Raum 16-18 Grad**. Nicht zu warm. **Extra-Schutz**: Stillen und Schnuller helfen auch."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [SIDS, Roomsharing, Bedsharing, Schlafsack]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Seitenlage ist sicherer als Rückenlage, falls das Baby spuckt"**
- **Fachbegriff:** Aspirations-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht richtig — **Seitenlage ist instabil**, das Baby rollt oft in die Bauchlage, und Bauchlage erhöht das SIDS-Risiko deutlich. Gesunde Säuglinge **schützen sich in Rückenlage selbst** vor Aspiration durch den Schluckreflex. **Rückenlage ist der Standard**. Merke: Rücken ist sicher, Seite und Bauch nicht."
- **Feedback (B1, 260 Zeichen):** "Nein — **Seitenlage ist nicht sicher**. Das Baby rollt schnell auf den Bauch. Bauchlage ist sehr gefährlich für SIDS. Wenn ein Baby spuckt, schützt es sich **auf dem Rücken von selbst** durch Schlucken. Merke: **Rückenlage** ist die sichere Regel."

**D2: "Im Elternbett zu schlafen ist sicherer, weil die Eltern merken wenn etwas ist"**
- **Fachbegriff:** Bedsharing-Mythos
- **Feedback (C1, 310 Zeichen):** "Nicht sicher — **Bedsharing erhöht das SIDS-Risiko**, vor allem in Kombination mit Rauchen, Alkohol, Müdigkeit oder weicher Matratze. Das Baby kann überdeckt oder überlegen werden. **Roomsharing** (Bett im Elternzimmer, aber **eigenes** Bett) ist das sichere Konzept. Merke: gleiches Zimmer, getrenntes Bett."
- **Feedback (B1, 265 Zeichen):** "Nein — zusammen im Elternbett ist **gefährlicher**. Die Eltern können das Baby zudecken oder sich drauf legen. Vor allem, wenn sie müde sind. **Sicher**: Baby schläft im **Elternzimmer**, aber im **eigenen Bettchen**. Merke: gleicher Raum, aber getrennt."

**D3: "Viele Kissen und Nestchen machen das Bett gemütlicher und sicherer"**
- **Fachbegriff:** Nestchen-Mythos
- **Feedback (C1, 305 Zeichen):** "Umgekehrt — **Kissen, Decken, Stofftiere und Nestchen sind ein Erstickungsrisiko**. Das Baby kann mit dem Gesicht hineinrutschen. Sicher ist **ein leeres Bett** mit fester Matratze und Schlafsack — sonst nichts. Auch Bettumrandungen werden von der AAP nicht mehr empfohlen. Merke: leeres Bett ist sicheres Bett."
- **Feedback (B1, 260 Zeichen):** "Falsch — **Kissen und Nestchen sind gefährlich**. Das Baby kann mit dem Gesicht hinein rutschen und **ersticken**. Sicher ist **ein leeres Bett** mit harter Matratze und Schlafsack. Keine Kuscheltiere, keine Nestchen, keine Kissen. Merke: leer ist sicher."

### Richtig-Feedback
**C1 (315 Zeichen):** "Genau. Die SIDS-Prävention nach AAP 2022 kombiniert: Rückenlage, Roomsharing ohne Bedsharing, fester Untergrund ohne weiche Textilien, Rauchfreiheit, Schlafsack statt Decke, Raumtemperatur 16-18 °C. Zusätzlich schützend wirken Stillen und Schnuller. Durch diese Empfehlungen ist SIDS seit den 90ern um über 80 % gesunken."

**B1 (265 Zeichen):** "Sehr gut. Die Regeln für sicheres Schlafen: **Rücken** — **eigenes Bettchen im Elternzimmer** — **feste Matratze, nichts drin** — **rauchfrei** — **Schlafsack, nicht Decke** — **16-18 Grad**. Stillen und Schnuller helfen auch. SIDS ist seit den 90ern viel seltener geworden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Die 5 Regeln zur SIDS-Prävention (AAP 2022)?"
- **Rückseite:** "Rückenlage, Elternzimmer ohne Bedsharing, fester Untergrund ohne weiche Textilien, rauchfrei, Schlafsack statt Decke. Raum 16-18 °C. Zusätzlich: Stillen, Schnuller."
- **Kategorie:** handlung

---

## Baustein 13: u-untersuchungen

### Metadaten
- **bausteinId:** saeuglingspflege-u-untersuchungen
- **bloomLevel:** 2
- **wissensart:** orientierung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Ein frischgebackener Vater zeigt dir stolz das **gelbe Heft** seines Babys. Er fragt: 'Was sind die **U-Untersuchungen** eigentlich, und warum so viele im ersten Jahr?' Erkläre ihm den Zweck und die Rolle der Pflegekraft."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Die **U-Untersuchungen (U1-U9, J1)** sind gesetzlich verankerte **Früherkennungsuntersuchungen** nach § 26 SGB V und der Kinder-Richtlinie des G-BA. **U1 direkt nach Geburt**, **U2 am 3.-10. Tag**, **U3 bis U6 im 1. Lebensjahr**. Ziel: Entwicklung, Risiken, Impfungen prüfen."

**B1 (250 Zeichen):** "Die **U-Untersuchungen** sind wichtige Arzt-Termine für Babys und Kinder. Sie heißen U1 bis U9 und J1. Sie sind im Gesetz vorgeschrieben (§ 26 SGB V). **U1** ist direkt nach der Geburt. **U2** mit 3-10 Tagen. **U3-U6** im ersten Jahr. Man prüft Wachstum, Gesundheit, Impfungen."

- **Step-Typ:** text (displayFormat: news)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die **U-Untersuchungen** sind ein staatlich organisiertes Früherkennungsprogramm für Kinder, rechtlich verankert in **§ 26 SGB V** und inhaltlich durch die **Kinder-Richtlinie des G-BA** geregelt. Sie umfassen **U1 bis U9 und J1**, insgesamt zehn Termine vom ersten Lebenstag bis zum Jugendalter. **Im ersten Lebensjahr** liegen besonders viele: **U1** direkt nach Geburt (Apgar, Vitalzeichen), **U2** zwischen 3. und 10. Tag, **U3** in der 4.-5. Woche, **U4** im 3.-4. Monat, **U5** im 6.-7. Monat, **U6** im 10.-12. Monat. Geprüft werden Wachstum (Gewicht, Länge, Kopfumfang in Perzentilen), motorische und sensorische Entwicklung, Hör- und Sehvermögen, Impfstatus, körperliche und soziale Entwicklung. Die Befunde werden im **gelben Heft** (Kinder-Untersuchungsheft) dokumentiert. **Rolle der Pflegekraft**: Eltern motivieren, Termine nicht zu versäumen, Auffälligkeiten zwischen den Terminen melden, gelbes Heft zu jedem Termin mitgeben."

**B1 (640 Zeichen):**
"Die U-Untersuchungen sind **wichtige Arzt-Termine** für Kinder. Sie stehen im Gesetz (**§ 26 SGB V**). Es gibt U1 bis U9, plus J1 (mit 12-14 Jahren). **Im ersten Lebensjahr** hat ein Baby **6 Termine**: **U1**: direkt nach der Geburt. **U2**: Tag 3 bis 10. **U3**: Woche 4-5. **U4**: Monat 3-4. **U5**: Monat 6-7. **U6**: Monat 10-12. Was wird geprüft? Wie schwer und groß ist das Kind? Wächst der Kopf normal? Hört und sieht es gut? Bewegt es sich richtig? Sind die Impfungen da? Alles wird ins **gelbe Heft** eingetragen. Das Heft heißt **Kinder-Untersuchungsheft**. Deine Aufgabe als Pflegekraft: Eltern erinnern, das Heft mitgeben, Probleme melden."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [U-Untersuchung, Kinder-Richtlinie, Perzentile, gelbes Heft]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "U-Untersuchungen sind freiwillig, man kann sie weglassen"**
- **Fachbegriff:** Freiwilligkeits-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — rechtlich sind sie **Anspruchsleistungen** (§ 26 SGB V), keine Pflicht im strafrechtlichen Sinn. Aber: In mehreren Bundesländern gibt es ein **verbindliches Einladungs- und Meldewesen** zur Kindeswohlsicherung. Praktisch gelten sie als **dringend empfohlen**. Merke: Recht auf Teilnahme, Empfehlung zur Teilnahme."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — die U-Termine sind nicht **Pflicht** wie Schule. Aber sie sind **sehr wichtig**. Der Staat lädt ein und kontrolliert. Sie helfen, Krankheiten früh zu finden. Eltern sollen sie machen lassen. Merke: Recht und Empfehlung, nicht Strafgesetz."

**D2: "U-Untersuchungen prüfen nur die Größe und das Gewicht"**
- **Fachbegriff:** Reduktions-Mythos
- **Feedback (C1, 295 Zeichen):** "Nicht vollständig — die U-Untersuchungen prüfen **viele Bereiche**: Wachstum, Motorik, Sinnesentwicklung (Hören, Sehen), Sprache, Sozialverhalten, Impfstatus, Organe, körperliche Auffälligkeiten. Sie sind eine **umfassende Entwicklungskontrolle**, nicht nur Messen und Wiegen. Merke: mehr als Zahlen."
- **Feedback (B1, 250 Zeichen):** "Nicht nur — die U-Termine prüfen **viel mehr**. Auch **Bewegung, Hören, Sehen, Sprache, Impfungen, Organe**. Alles, was für die Entwicklung wichtig ist. Merke: Die U-Termine kontrollieren das ganze Kind, nicht nur die Größe."

**D3: "Das gelbe Heft ist nur für die Ärzte, Eltern müssen nichts damit tun"**
- **Fachbegriff:** Heft-Unterschätzung
- **Feedback (C1, 290 Zeichen):** "Nicht richtig — das **gelbe Heft (Kinder-Untersuchungsheft)** gehört den Eltern und muss **zu jedem Termin mitgebracht** werden. Es dokumentiert die gesamte Entwicklung und wird später auch für Schule, Kita oder Arztwechsel benötigt. Die Pflegekraft erinnert aktiv daran. Merke: Heft ist der rote Faden."
- **Feedback (B1, 250 Zeichen):** "Nicht richtig — das **gelbe Heft** gehört den Eltern. Sie bringen es zu **jedem Arzt-Termin** mit. Der Arzt trägt die Ergebnisse ein. Später brauchen es auch die Kita und die Schule. Deine Aufgabe: Eltern erinnern, das Heft immer mitzubringen."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Die U-Untersuchungen sind gesetzlich verankert (§ 26 SGB V, Kinder-Richtlinie G-BA). Im ersten Jahr 6 Termine: U1 direkt nach Geburt bis U6 im 10.-12. Monat. Geprüft werden Wachstum, Entwicklung, Sinne, Impfungen. Dokumentation im gelben Heft. Pflegekraft motiviert Eltern und erinnert an Termine."

**B1 (250 Zeichen):** "Sehr gut. Die U-Termine stehen im Gesetz (§ 26 SGB V). Im ersten Jahr sind es **sechs**: U1 bis U6. Geprüft werden Wachstum, Bewegung, Sinne und Impfungen. Alles kommt ins **gelbe Heft**. Deine Aufgabe: Eltern erinnern, Heft immer mitnehmen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viele U-Untersuchungen gibt es im 1. Lebensjahr und was ist das gelbe Heft?"
- **Rückseite:** "6 U-Untersuchungen (U1-U6) im 1. Lebensjahr. Rechtsgrundlage: § 26 SGB V + Kinder-Richtlinie G-BA. Gelbes Heft = Kinder-Untersuchungsheft, dokumentiert Befunde."
- **Kategorie:** recht

---

## Baustein 14: pflegeanamnese-saeugling

### Metadaten
- **bausteinId:** saeuglingspflege-anamnese
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Mutter bringt ihr 6 Wochen altes Baby in deine Einrichtung. Welche **fünf Bereiche** würdest du in der Pflegeanamnese gezielt erfragen — und warum sind gerade diese bei einem Säugling entscheidend?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "Pflegeanamnese Säugling: **Geburtsanamnese** (Schwangerschaft, Geburt, Frühgeborenheit), **Ernährung** (gestillt/Flasche, Menge, Häufigkeit), **Ausscheidung** (nasse Windeln, Stuhl), **Schlaf** (Ort, Lage, Dauer), **U-Untersuchungen + Impfstatus**, **Allergien**, **Entwicklungsstand**."

**B1 (250 Zeichen):** "Das fragst du bei einem Baby ab: **Geburt** (war sie normal? Frühgeboren?). **Essen** (Brust oder Flasche? Wie viel?). **Windeln** (wie oft nass, wie ist der Stuhl?). **Schlaf** (wo schläft es, wie lange?). **Arzt-Termine und Impfungen**. **Allergien**. **Entwicklung**."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (830 Zeichen):**
"Die **Pflegeanamnese** beim Säugling unterscheidet sich von der Erwachsenenanamnese: Das Kind erzählt nicht selbst, die **Eltern sind die Informationsquelle**, und viele Bereiche, die beim Erwachsenen nebensächlich wären, sind hier zentral. **Sechs Bereiche** gehören fest dazu. **Erstens die Geburtsanamnese**: Schwangerschaftswoche, Geburtsmodus (spontan, Kaiserschnitt), Geburtsgewicht, Apgar, Auffälligkeiten, Frühgeborenheit. **Zweitens die Ernährung**: Gestillt (Häufigkeit, Dauer) oder Flasche (Art der Nahrung, Menge, Trinktempo), Beikost-Beginn, Ess-Auffälligkeiten. **Drittens die Ausscheidung**: Zahl nasser Windeln pro Tag (Indikator für Flüssigkeitszufuhr), Stuhlgang-Häufigkeit, -Konsistenz und -Farbe. **Viertens der Schlaf**: Ort (eigenes Bett, Elternzimmer), Lage (Rücken?), Schlafdauer, Einschlafrituale. **Fünftens U-Untersuchungen und Impfstatus**: Welche wurden gemacht? Gelbes Heft dabei? **Sechstens Allergien, Medikamente, Entwicklungsstand**: Motorik, Sprache, Sozialverhalten passend zum Alter? Die Anamnese ist die Basis für einen sicheren Pflegeplan. (Hoehl/Kullick, 2019)"

**B1 (680 Zeichen):**
"Bei einem Baby fragst du die **Eltern**, weil das Baby noch nicht spricht. **Sechs wichtige Bereiche**: **Erstens die Geburt**: War es eine normale Geburt oder Kaiserschnitt? Wie viele Wochen? Wie schwer? Gab es Probleme? **Zweitens das Essen**: Stillt die Mutter? Wie oft? Oder Flasche? Welche Nahrung? Gibt es schon Beikost? **Drittens die Windeln**: Wie oft nass am Tag? Wie oft Stuhl? Wie sieht der Stuhl aus? Das zeigt, ob das Baby genug trinkt. **Viertens der Schlaf**: Wo schläft das Baby? Auf dem Rücken? Wie lange? **Fünftens die Arzt-Termine und Impfungen**: Sind alle U-Termine gemacht? Bring das gelbe Heft mit. **Sechstens Besonderes**: Allergien? Medikamente? Entwicklung normal? Bewegt es sich passend zum Alter?"

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Pflegeanamnese, Apgar, Entwicklungsstand, Perzentile]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei einem Baby reicht es, Alter und Gewicht zu erfragen"**
- **Fachbegriff:** Minimalismus-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ausreichend — Säuglingspflege braucht **umfangreiche Anamnese**: Geburt, Ernährung, Ausscheidung, Schlaf, U-Untersuchungen, Allergien, Entwicklung. Nur so erkennst du Risiken (Frühgeborenheit, Trinkmengenprobleme, Windeldermatitis). Merke: Pflegeanamnese ist beim Baby länger, nicht kürzer."
- **Feedback (B1, 250 Zeichen):** "Nein — bei einem Baby musst du **viel mehr** fragen als nur Alter und Gewicht. Auch: Geburt, Essen, Windeln, Schlaf, Arzt-Termine, Allergien, Entwicklung. Nur so findest du Probleme früh. Merke: Baby-Anamnese ist lang, nicht kurz."

**D2: "Nasse Windeln zählen ist nicht wichtig — das machen die Eltern"**
- **Fachbegriff:** Windel-Unterschätzung
- **Feedback (C1, 300 Zeichen):** "Nicht richtig — die **Zahl nasser Windeln** ist beim Säugling ein **zentrales Zeichen** für ausreichende Flüssigkeitszufuhr. Als Faustregel gelten mindestens **5-6 nasse Windeln am Tag** bei voller Trinkmenge. Weniger kann auf Dehydratation oder Trinkprobleme hinweisen. Merke: Windelzahl zählt als Assessment."
- **Feedback (B1, 255 Zeichen):** "Doch — wie oft die Windel nass ist, ist **wichtig**. Normal sind **5-6 nasse Windeln am Tag**. Weniger heißt: Das Baby trinkt zu wenig. Das kann gefährlich sein (Dehydratation). Deshalb fragst du das in der Anamnese. Merke: Windeln zählen ist Assessment."

**D3: "Wenn die Eltern sagen 'alles ok', muss ich nicht weiter nachfragen"**
- **Fachbegriff:** Oberflächen-Fehler
- **Feedback (C1, 310 Zeichen):** "Nicht vorsichtig genug — Eltern **beschönigen manchmal**, besonders bei Scham oder Unsicherheit (z.B. Schreibabys, Schlafentzug, Überforderung). **Gezielte, konkrete Fragen** bringen oft andere Antworten als allgemeine. 'Wie oft am Tag trinkt es?' statt 'Trinkt es gut?'. Merke: konkret fragen, nicht nur 'geht's ok?'"
- **Feedback (B1, 260 Zeichen):** "Nein — **nachfragen lohnt sich**. Eltern sagen oft 'alles gut', auch wenn es nicht so ist. Vielleicht schämen sie sich. Oder sie sind müde. Frag **konkret**: 'Wie oft trinkt es am Tag?' statt 'Trinkt es gut?'. So kommst du zur Wahrheit."

### Richtig-Feedback
**C1 (305 Zeichen):** "Genau. Die Säuglings-Pflegeanamnese umfasst sechs Bereiche: Geburtsanamnese, Ernährung, Ausscheidung (Windelzahl!), Schlaf, U-Untersuchungen/Impfstatus, Allergien und Entwicklungsstand. Eltern sind die Informationsquelle — gezielt und konkret fragen. Die Anamnese ist die Basis für einen sicheren individuellen Pflegeplan."

**B1 (260 Zeichen):** "Sehr gut. Die sechs Bereiche: **Geburt, Essen, Windeln, Schlaf, U-Termine, Allergien/Entwicklung**. Die **Eltern** erzählen — das Baby kann es nicht. Frag **konkret**, nicht nur 'alles ok?'. So findest du Probleme früh und planst die Pflege sicher."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 6 Bereiche umfasst die Pflegeanamnese beim Säugling?"
- **Rückseite:** "Geburtsanamnese, Ernährung (Brust/Flasche), Ausscheidung (Windelzahl, Stuhl), Schlaf (Ort, Lage), U-Untersuchungen/Impfstatus, Allergien + Entwicklungsstand."
- **Kategorie:** assessment

---

## Baustein 15: nacken-ruecken-griff

### Metadaten
- **bausteinId:** saeuglingspflege-nacken-ruecken-griff
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Warum reicht eine Hand unter dem Po nicht aus, wenn du ein Neugeborenes aus dem Wasser hebst? Welche Körperteile müssen unbedingt gestützt werden — und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Der **Nacken-Rücken-Griff** stützt Kopf und Rumpf beim Heben oder im Wasser: Der Nacken liegt in der **Armbeuge**, deine **Hand umfasst den Oberarm** von außen. Die andere Hand hält den Po/die Oberschenkel. So ist die Halswirbelsäule gesichert."

**B1 (235 Zeichen):** "Der **Nacken-Rücken-Griff**: Der **Kopf des Babys** liegt in deiner **Armbeuge**. Deine **Hand greift den Oberarm** von außen. Die **andere Hand** hält den Po. So ist der Hals geschützt. Wichtig: Babys können den Kopf noch nicht allein halten."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Der **Nacken-Rücken-Griff** ist die sichere Trageweise für Neugeborene und junge Säuglinge, die ihren Kopf noch nicht selbst halten können. **So geht er**: Der Säugling liegt auf dem Rücken. Du schiebst einen Arm unter sein Schulterblatt, sodass der **Nacken in deiner Armbeuge** ruht. Deine **Hand umschließt dabei den Oberarm des Kindes** von außen — das stabilisiert die gesamte Schulter-Nacken-Achse. Mit der **zweiten Hand** greifst du unter das Gesäß oder zwischen den Oberschenkeln. Der Rücken des Kindes liegt nun auf deinem Unterarm, die Wirbelsäule wird durchgehend gestützt. Der Griff ist besonders wichtig **beim Baden**, **beim Transfer** vom Wickeltisch und **beim Anziehen**. Er verhindert Überstreckung der Halswirbelsäule und gibt dem Kind Sicherheit. (Hoehl/Kullick, 2019)"

**B1 (540 Zeichen):**
"So hältst du ein Neugeborenes sicher: Der Name ist **Nacken-Rücken-Griff**. **Schritt 1**: Das Baby liegt auf dem Rücken. **Schritt 2**: Schieb deinen Arm unter die Schulter des Babys. Der **Nacken liegt in deiner Armbeuge**. **Schritt 3**: Mit der **gleichen Hand** greifst du den **Oberarm** von außen. So hält dein Arm den Kopf und den oberen Rücken sicher. **Schritt 4**: Die **andere Hand** hält den Po oder die Oberschenkel. Jetzt ist das Baby sicher. Der ganze Rücken liegt auf deinem Arm. **Wann brauchst du den Griff?** Beim Baden, beim Hochnehmen, beim Anziehen."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Nacken-Rücken-Griff, Halswirbelsäule, Überstreckung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Arm unter dem Rücken reicht, wenn man vorsichtig ist"**
- **Fachbegriff:** Ein-Hand-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht sicher — **ein Arm allein stützt den Kopf nicht genug**. Der Kopf macht rund **25 % des Körpergewichts** aus, und die Halsmuskulatur ist noch schwach. Die Hand am Oberarm **sichert gegen Verrutschen**, die zweite Hand stützt Po oder Oberschenkel. Merke: zwei Hände, Kopf und Po."
- **Feedback (B1, 245 Zeichen):** "Nein — **eine Hand reicht nicht**. Der Kopf ist schwer im Verhältnis zum Körper. Ein Baby kann den Kopf noch nicht halten. Du brauchst **zwei Hände**: eine am Nacken/Oberarm, eine am Po. Merke: zwei Hände, immer."

**D2: "Man hält das Baby am Kopf und am Rücken"**
- **Fachbegriff:** Kopf-Halten-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **direkt am Kopf greifen** ist unsicher, weil die Fontanellen und Halswirbel empfindlich sind. Richtig ist: **Nacken in die Armbeuge**, Hand am **Oberarm** des Babys. So stützt der ganze Unterarm den Rücken, und der Kopf ist in natürlicher Position. Merke: Armbeuge, nicht Handfläche."
- **Feedback (B1, 235 Zeichen):** "Nicht gut — **nicht den Kopf direkt greifen**. Die Fontanellen am Kopf sind empfindlich. Besser: Der **Nacken liegt in deiner Armbeuge**. Die Hand greift den **Oberarm**. So ist der ganze Rücken sicher. Merke: Armbeuge, nicht Kopf."

**D3: "Der Griff ist nur am Anfang nötig, nach 4 Wochen kann das Baby den Kopf halten"**
- **Fachbegriff:** Zeitpunkt-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht so früh — die **Kopfkontrolle** entwickelt sich schrittweise, stabil ist sie meist erst **ab dem 3.-4. Lebensmonat**. Bis dahin stützt du Kopf und Nacken aktiv, auch beim Hochnehmen und im Tragetuch. Der Griff wird erst unnötig, wenn das Kind den Kopf in Bauchlage sicher hebt und hält. Merke: Monate, nicht Wochen."
- **Feedback (B1, 260 Zeichen):** "Nein — das Baby kann den Kopf erst **nach 3-4 Monaten** sicher halten. Bis dahin musst du den **Kopf immer stützen**. Auch beim Tragen und Hochnehmen. Die Halsmuskeln brauchen Zeit. Merke: drei bis vier Monate, nicht Wochen."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Der Nacken-Rücken-Griff ist die Standard-Trageweise im ersten Lebensvierteljahr: Nacken in die Armbeuge, Hand am Oberarm, zweite Hand am Gesäß. Der ganze Unterarm stützt die Wirbelsäule, der Kopf bleibt in physiologischer Position. Bis zur sicheren Kopfkontrolle (ca. 3-4 Monate) Pflicht."

**B1 (235 Zeichen):** "Sehr gut. Der Griff geht so: Der Nacken liegt in deiner Armbeuge. Die Hand greift den Oberarm. Die andere Hand hält den Po. Der Rücken liegt auf deinem Arm. Du brauchst den Griff, bis das Baby **3-4 Monate alt** ist und den Kopf selbst hält."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie funktioniert der Nacken-Rücken-Griff und wann ist er Pflicht?"
- **Rückseite:** "Nacken in Armbeuge, Hand am Oberarm, zweite Hand am Gesäß/Oberschenkel. Pflicht in den ersten 3-4 Monaten, bis zur sicheren Kopfkontrolle."
- **Kategorie:** handlung

---

## Baustein 16: trinkmengenzeichen

### Metadaten
- **bausteinId:** saeuglingspflege-trinkmengenzeichen
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-16]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Mutter sagt dir unsicher: 'Ich weiß nicht, ob mein Baby genug trinkt — ich sehe ja nicht, wie viel rauskommt an der Brust.' Welche **vier Zeichen** zeigen dir verlässlich, ob ein gestilltes Baby **genug** bekommt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Vier Zeichen für **ausreichende Milchaufnahme**: **mindestens 5-6 nasse Windeln/Tag** ab 5. Tag, **regelmäßiger gelblicher Stuhl**, **normale Gewichtsentwicklung** (Wiederreichen des Geburtsgewichts bis Tag 10-14), **zufriedenes, waches Verhalten** nach dem Trinken."

**B1 (240 Zeichen):** "Vier Zeichen, dass das Baby **genug trinkt**: **5-6 nasse Windeln** am Tag (ab Tag 5). **Regelmäßiger Stuhl**, **gelblich**. **Gewicht steigt** (Geburtsgewicht wieder erreicht bis Tag 10-14). Das Baby ist nach dem Trinken **zufrieden und wach**."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"Bei gestillten Säuglingen lässt sich die Trinkmenge nicht direkt messen — deshalb werden **indirekte Zeichen** herangezogen. **Erstens die Zahl nasser Windeln**: Ab dem **5. Lebenstag** sollten es **mindestens 5-6 schwer-nasse Windeln pro Tag** sein. Das ist der zuverlässigste Einzelindikator für ausreichende Flüssigkeitszufuhr. **Zweitens die Stuhlzeichen**: Der erste Stuhl (Mekonium) ist dunkelgrün-schwarz. Ab Tag 3-5 wird er **gelblich, weich, gut riechend** — das zeigt, dass genug Milch ankommt. Gestillte Babys haben in den ersten Wochen oft **mehrere Stühle pro Tag**. **Drittens die Gewichtsentwicklung**: In den ersten Tagen verlieren Neugeborene **bis zu 7-10 % Körpergewicht** (physiologischer Gewichtsverlust). Das **Geburtsgewicht muss bis Tag 10-14** wieder erreicht sein, danach **Zunahme ca. 150-200 g/Woche** im ersten Lebensvierteljahr. **Viertens das Verhalten**: Ein satt getrunkenes Baby ist **zufrieden, entspannt, schläft gut und ist in Wachphasen aufmerksam**. Unruhe, ständiges Weinen, Apathie, Trinkschwäche sind **Warnzeichen**. (Hoehl/Kullick, 2019)"

**B1 (650 Zeichen):**
"Bei einer Mutter, die stillt, siehst du die Milchmenge nicht. Aber du kannst **vier Zeichen** prüfen. **Erstens: Nasse Windeln zählen**. Ab Tag 5 sollten es **mindestens 5-6 schwer-nasse Windeln am Tag** sein. Weniger = Alarm. **Zweitens: Stuhl anschauen**. Am Anfang ist der Stuhl schwarz-grün (Mekonium). Ab Tag 3-5 wird er **gelb, weich und riecht mild**. Dann kommt genug Milch an. **Drittens: Gewicht kontrollieren**. In den ersten Tagen verliert das Baby etwas Gewicht (bis 7-10 %). Das ist normal. Aber bis **Tag 10-14** muss es das Geburtsgewicht **wieder haben**. Danach nimmt es **150-200 Gramm pro Woche** zu. **Viertens: Wie wirkt das Baby?** Ist es satt, entspannt, schläft es gut? Oder ist es unruhig und weint oft?"

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [Mekonium, physiologischer Gewichtsverlust, Trinkmenge]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn das Baby nach dem Trinken schläft, hat es genug"**
- **Fachbegriff:** Schlaf-Fehlschluss
- **Feedback (C1, 295 Zeichen):** "Nicht zuverlässig — **Schläfrigkeit** kann auch Zeichen einer **Unterzuckerung oder Erschöpfung** bei zu wenig Milch sein. Vor allem in den ersten Tagen kann ein zu schwaches Baby an der Brust einschlafen, ohne genug getrunken zu haben. Bessere Zeichen: Windeln, Stuhl, Gewicht. Merke: Schlaf allein ist kein Beweis."
- **Feedback (B1, 255 Zeichen):** "Nicht immer — **Schlaf** heißt nicht automatisch 'satt'. Manche Babys schlafen, weil sie zu **schwach** sind. Besonders am Anfang. Bessere Zeichen: **nasse Windeln, Stuhl, Gewicht**. Merke: Schlaf ist kein sicheres Zeichen."

**D2: "Weinen bedeutet immer Hunger"**
- **Fachbegriff:** Hunger-Reduktion
- **Feedback (C1, 295 Zeichen):** "Nicht ausschließlich — Weinen kann auch **Müdigkeit, Schmerzen (z.B. Blähungen), volle Windel, Überforderung oder Langeweile** bedeuten. Hunger zeigt sich oft **vor dem Weinen**: Suchbewegungen des Mundes, Schmatzen, Händchen zum Mund. Weinen ist ein **spätes** Hungersignal. Merke: früh Zeichen lesen, nicht erst auf Weinen warten."
- **Feedback (B1, 260 Zeichen):** "Nicht nur — Babys weinen aus vielen Gründen: **Hunger, Müdigkeit, Schmerz, volle Windel**. Hunger zeigt sich oft **vorher**: Das Baby sucht mit dem Mund, macht Schmatzgeräusche, steckt die Hand rein. Weinen ist **das letzte** Zeichen. Merke: frühe Zeichen erkennen."

**D3: "Gewicht wird erst ab der 6. Lebenswoche wichtig"**
- **Fachbegriff:** Gewichts-Unterschätzung
- **Feedback (C1, 300 Zeichen):** "Nicht richtig — das Gewicht ist **schon in den ersten Tagen** ein Schlüsselindikator. **Bis Tag 10-14** muss das Geburtsgewicht wieder erreicht sein, danach ca. **150-200 g/Woche Zunahme**. Zu starker Verlust (>10 %) oder fehlende Zunahme sind früh ein Alarmzeichen. Merke: Gewicht ist ab Tag 1 wichtig."
- **Feedback (B1, 260 Zeichen):** "Nein — das Gewicht ist **vom ersten Tag an** wichtig. In den ersten Tagen verliert das Baby etwas (bis 7-10 %). Aber **bis Tag 10-14** muss das Geburtsgewicht wieder da sein. Dann **150-200 Gramm pro Woche** drauf. Verliert es mehr: Alarm. Merke: Gewicht zählt ab Tag 1."

### Richtig-Feedback
**C1 (310 Zeichen):** "Genau. Die vier zuverlässigen Zeichen für ausreichende Trinkmenge sind: 5-6 nasse Windeln/Tag ab Tag 5, regelmäßiger gelblicher Stuhl ab Tag 3-5, Wiedererreichen des Geburtsgewichts bis Tag 10-14 mit danach 150-200 g/Woche, und ein zufriedenes, waches Verhalten. Diese Kombination ist aussagekräftiger als jedes Einzelzeichen."

**B1 (265 Zeichen):** "Sehr gut. Die vier Zeichen: **5-6 nasse Windeln** ab Tag 5, **gelber Stuhl** ab Tag 3-5, **Gewicht wieder da** bis Tag 10-14 und dann **150-200 g/Woche drauf**, **zufriedenes Baby**. Alle vier zusammen sind ein gutes Bild. Einzelne Zeichen allein sind nicht sicher."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Zeichen zeigen, dass ein gestilltes Baby ausreichend trinkt?"
- **Rückseite:** "5-6 nasse Windeln/Tag ab Tag 5, gelblicher weicher Stuhl ab Tag 3-5, Geburtsgewicht wieder erreicht bis Tag 10-14 (dann +150-200 g/Woche), zufriedenes Verhalten."
- **Kategorie:** assessment

---

## Baustein 17: impfstatus-stiko

### Metadaten
- **bausteinId:** saeuglingspflege-impfstatus-stiko
- **bloomLevel:** 2
- **wissensart:** orientierung
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-17]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Mutter fragt: 'Warum sollen Babys schon mit 2 Monaten geimpft werden? Ist das nicht zu früh?' Was antwortest du — und welche Quelle nennst du?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (275 Zeichen):** "Die **STIKO am RKI** empfiehlt die ersten Impfungen **ab dem vollendeten 2. Lebensmonat** (6-fach-Impfstoff + Pneumokokken + Rotavirus). Rechtsgrundlage: § 20 IfSG. Frühe Impfungen schützen vor Krankheiten, die für Säuglinge besonders gefährlich sind. (RKI/STIKO 2024)"

**B1 (245 Zeichen):** "Die **STIKO** ist die Impf-Kommission beim **RKI**. Sie sagt: Die **ersten Impfungen ab 2 Monaten**. Das sind Sechsfach-Impfung, Pneumokokken und Rotavirus. Warum so früh? Weil kleine Babys bei diesen Krankheiten **sehr krank** werden können."

- **Step-Typ:** text (displayFormat: news)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die **Ständige Impfkommission (STIKO)** am **Robert Koch-Institut** veröffentlicht jährlich den aktualisierten Impfkalender. Die Rechtsgrundlage bildet **§ 20 Infektionsschutzgesetz (IfSG)**. Für Säuglinge beginnt die Impfserie **ab dem vollendeten 2. Lebensmonat** — mit dem **6-fach-Impfstoff** (Diphtherie, Tetanus, Pertussis, Polio, Hib, Hepatitis B), der **Pneumokokken-Impfung** und der **Rotavirus-Schluckimpfung**. Weitere Dosen folgen mit 4 und 11 Monaten. Mit 11-14 Monaten kommen **MMR-V** (Masern-Mumps-Röteln-Varizellen) und **Meningokokken C** dazu. Die frühen Impfungen sind begründet: Pertussis (Keuchhusten) und invasive Hib-Infektionen sind für ungeimpfte Säuglinge **lebensbedrohlich**. Der **Nestschutz durch mütterliche Antikörper** nimmt nach den ersten Wochen ab. Bei jeder U-Untersuchung gehört der Impfstatus ins gelbe Heft. (RKI/STIKO 2024)"

**B1 (620 Zeichen):**
"Die **STIKO** ist die **Impf-Kommission** in Deutschland. Sie arbeitet am **RKI** (Robert Koch-Institut). Sie sagt jedes Jahr, welche Impfungen wann kommen. Die Regel steht im **Infektionsschutzgesetz (§ 20 IfSG)**. **Ab dem 2. Monat** bekommt ein Baby die **ersten Impfungen**: Sechsfach-Impfung (gegen Tetanus, Keuchhusten, Kinderlähmung und mehr), Pneumokokken, Rotavirus. Weitere Impfungen folgen mit **4 und 11 Monaten**. Mit **11-14 Monaten** kommen **Masern, Mumps, Röteln und Windpocken** dazu. **Warum so früh?** Weil Krankheiten wie **Keuchhusten** für kleine Babys **sehr gefährlich** sind. Der Schutz von der Mutter reicht nur ein paar Wochen. Deine Aufgabe: Impfstatus bei jeder U-Untersuchung prüfen, im gelben Heft nachschauen."

- **Erklärungs-Step:** stepType `text` (displayFormat: news)
- **Glossar-Begriffe:** [STIKO, RKI, Nestschutz, Impfkalender, IfSG]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "2 Monate ist zu früh — das Immunsystem ist überfordert"**
- **Fachbegriff:** Überforderungs-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht richtig — das **Immunsystem eines 2 Monate alten Babys** reagiert sicher und gut auf Impfungen. Die frühen Impfungen sind bewusst **früh** gesetzt, weil der Schutz der Mutter (Nestschutz) dann abnimmt und Krankheiten wie **Pertussis** für kleine Säuglinge lebensgefährlich sein können. Merke: früh = rechtzeitig, nicht zu früh."
- **Feedback (B1, 265 Zeichen):** "Nein — das Immunsystem **kann das**. Mit 2 Monaten ist das Baby bereit. Der **Schutz von der Mutter** wird weniger. Krankheiten wie **Keuchhusten** können kleine Babys sehr krank machen. Deshalb impft man früh. Merke: früh = sicher, nicht zu früh."

**D2: "Stillen schützt so gut, dass Impfungen nicht nötig sind"**
- **Fachbegriff:** Stillschutz-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht ausreichend — **Muttermilch schützt** vor einigen Infektionen (Antikörper aus der Milch), aber **nicht vor allen**. Besonders **Pertussis, Hib oder Pneumokokken** werden nicht zuverlässig abgedeckt. **Stillen und Impfen ergänzen sich** — sie ersetzen sich nicht. Merke: Stillen plus Impfen, nicht statt."
- **Feedback (B1, 260 Zeichen):** "Nein — Muttermilch **hilft**, aber sie schützt nicht gegen alles. Krankheiten wie **Keuchhusten** kann sie nicht abhalten. Stillen und Impfen sind **beides wichtig**. Zusammen, nicht stattdessen. Merke: Stillen plus Impfen."

**D3: "Impfungen sind Pflicht in Deutschland"**
- **Fachbegriff:** Pflicht-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — die meisten Impfungen sind **dringend empfohlen**, aber nicht **Pflicht**. **Ausnahme**: Die **Masern-Impfung ist seit 2020 für Kita- und Schulkinder Pflicht** (Masernschutzgesetz, § 20 Abs. 8 IfSG). Die übrigen Impfungen werden empfohlen und gesetzlich erstattet. Merke: meist Empfehlung, Masern Pflicht."
- **Feedback (B1, 270 Zeichen):** "Nicht alle — die meisten Impfungen sind **dringend empfohlen**. Aber sie sind **nicht Pflicht**. **Eine Ausnahme**: **Masern** ist **Pflicht** für Kita- und Schulkinder (seit 2020). Die anderen sind freiwillig, aber alle bezahlt. Merke: Empfehlung ja, Pflicht nur Masern."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Die STIKO-Empfehlungen am RKI geben den Impfkalender vor. Ab dem vollendeten 2. Lebensmonat: 6-fach + Pneumokokken + Rotavirus. Weitere Dosen mit 4 und 11 Monaten, MMR-V + Meningokokken mit 11-14 Monaten. Grundlage: § 20 IfSG. Frühe Impfungen schließen die Lücke, wenn der Nestschutz nachlässt."

**B1 (260 Zeichen):** "Sehr gut. Die **STIKO** am **RKI** sagt, wann geimpft wird. **Ab 2 Monaten** starten die ersten Impfungen: Sechsfach, Pneumokokken, Rotavirus. Weiter mit **4 und 11 Monaten**. Dann **MMR-V** und Meningokokken. Grundlage: **§ 20 IfSG**. Früh impfen schützt sicher."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wer gibt die Impf-Empfehlungen, ab wann werden Babys in Deutschland geimpft?"
- **Rückseite:** "STIKO am RKI (Rechtsgrundlage § 20 IfSG). Start ab vollendetem 2. Lebensmonat (6-fach + Pneumokokken + Rotavirus). Weitere Dosen mit 4 und 11 Monaten, MMR-V mit 11-14 Monaten. Masern-Impfpflicht seit 2020 für Kita/Schule."
- **Kategorie:** recht

---

## Baustein 18: vernix-bad-timing

### Metadaten
- **bausteinId:** saeuglingspflege-erstes-bad
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-18]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Klinik badet Neugeborene oft schon in der ersten Stunde nach der Geburt. Eine andere wartet 24 Stunden. **Welche Option ist heute empfohlen — und warum?** Beziehe dabei Vernix, Thermoregulation und Bonding ein."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (285 Zeichen):** "Empfehlung heute: **Erstes Bad erst nach 24 Stunden** (oder später). Gründe: **Vernix** als natürlicher Hautschutz soll einziehen, **Auskühlungsgefahr** direkt nach Geburt, **Bonding und Stillstart** haben Vorrang. Direkt nach Geburt reicht sanftes Abtrocknen. (Hoehl/Kullick, 2019)"

**B1 (250 Zeichen):** "Die Regel heute: **Erstes Bad erst nach 24 Stunden** oder sogar später. Warum? **Die Käseschmiere soll einziehen** (Hautschutz). Das Baby **kühlt sonst aus**. Die erste Zeit ist für das **Bonding und Stillen** wichtig. Direkt nach der Geburt reicht **Abtrocknen**."

- **Step-Typ:** text (displayFormat: beforeafter)

### Stufe 3 — Erklärung

**C1 (830 Zeichen):**
"Die Praxis, Neugeborene direkt nach der Geburt zu baden, ist **nicht mehr Standard**. Die aktuelle Empfehlung lautet: **Erstes Bad frühestens nach 24 Stunden**, oft sogar später. Drei Gründe dafür. **Erstens: Vernix caseosa schützen**. Die Käseschmiere wirkt antimikrobiell, rückfettend und wärmeisolierend. Ein frühes Bad wäscht sie aus, bevor sie ihren vollen Nutzen entfalten kann. **Zweitens: Auskühlungsgefahr vermeiden**. Direkt nach der Geburt ist die Thermoregulation des Kindes labil, ein zu frühes Bad erhöht das Risiko für Hypothermie und damit auch für Hypoglykämie und Atemprobleme. **Drittens: Bonding und Stillstart priorisieren**. Die erste Stunde nach der Geburt ist sensibel für die **Mutter-Kind-Bindung (Bonding)** und den Stillstart — in dieser Zeit gehört das Kind **Haut an Haut** auf die Mutter, nicht in die Wanne. Praxis: Blut, Fruchtwasser und Stuhlreste werden **sanft mit warmem Wasser abgetupft**, die Vernix bleibt. Das erste richtige Bad folgt **nach 24 Stunden oder später** — abhängig von Klinikstandard und Elternwunsch. (Hoehl/Kullick, 2019)"

**B1 (680 Zeichen):**
"Früher hat man Neugeborene sofort gebadet. **Heute ist das anders**. Die Regel: **Erstes Bad frühestens nach 24 Stunden**. Warum nicht sofort? **Drei Gründe**. **Erstens: Die Käseschmiere (Vernix) schützen**. Sie ist gut für die Haut. Sie hilft gegen Keime. Sie hält warm. Wenn du zu früh badest, wäschst du sie weg. **Zweitens: Auskühlung vermeiden**. Direkt nach der Geburt ist das Baby noch nicht stabil bei der Wärme. Ein Bad macht es kalt. Das ist gefährlich. **Drittens: Bonding zuerst**. Die erste Stunde ist **wichtig für die Bindung** zwischen Mutter und Baby. Und für das **Stillen**. Das Baby soll **Haut an Haut** bei der Mutter sein. Nicht in der Wanne. **Was macht man stattdessen?** Blut und Fruchtwasser **sanft abtupfen**. Die weiße Schicht bleibt drauf. Das richtige Bad kommt später."

- **Erklärungs-Step:** stepType `comparison`
- **Glossar-Begriffe:** [Bonding, Hypothermie, Hypoglykämie, Haut-an-Haut-Kontakt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Baden direkt nach der Geburt ist wichtig, damit das Baby sauber ist"**
- **Fachbegriff:** Sofort-Sauber-Mythos
- **Feedback (C1, 310 Zeichen):** "Nicht mehr empfohlen — **Sauberkeit direkt nach Geburt ist kein Argument** gegen die Vernix. Blut und Fruchtwasser lassen sich **sanft abtupfen**. Die weiße Schicht ist **nicht schmutzig**, sondern ein natürlicher Schutz. Frühe Bäder erhöhen das Auskühlungsrisiko und stören Bonding. Merke: Abtupfen reicht zuerst."
- **Feedback (B1, 265 Zeichen):** "Nein — **schnell sauber** ist nicht das Ziel. Die weiße Schicht ist **nicht Schmutz**, sie ist **Schutz**. Blut und Fruchtwasser kann man **sanft abtupfen**. Frühes Baden macht das Baby kalt und stört das erste Kuscheln. Merke: Erst Abtupfen, später Baden."

**D2: "Man sollte innerhalb der ersten 6 Stunden baden, sonst trocknet die Vernix"**
- **Fachbegriff:** Fenster-Fehlschluss
- **Feedback (C1, 305 Zeichen):** "Nicht richtig — die Vernix soll gerade **nicht schnell abgewaschen** werden. Sie zieht in 24-48 Stunden von selbst in die Haut ein und muss weder 'geöffnet' noch abgetragen werden. **Kein Zeitdruck** fürs erste Bad. Die **aktuelle Leitlinie** empfiehlt, mindestens 24 Stunden zu warten. Merke: kein schnelles Fenster."
- **Feedback (B1, 265 Zeichen):** "Nein — die Käseschmiere soll **nicht weggewaschen** werden. Sie zieht in 1-2 Tagen **von selbst** in die Haut. Es gibt keinen Zeitdruck. Die Regel heute: **mindestens 24 Stunden warten**. Merke: Die Schicht geht von selbst weg. Einfach lassen."

**D3: "Das Bonding kann nachgeholt werden, das Bad ist wichtiger"**
- **Fachbegriff:** Bonding-Unterschätzung
- **Feedback (C1, 315 Zeichen):** "Nicht richtig — die **erste Stunde nach Geburt** ist eine **sensible Phase** für die Mutter-Kind-Bindung und den Stillstart. Oxytocin-Ausschüttung und frühes Anlegen beeinflussen Stilldauer und Bindungsverhalten nachhaltig. **Haut-an-Haut-Kontakt** hat in dieser Zeit Priorität. Ein Bad kann und soll warten. Merke: Bonding zuerst."
- **Feedback (B1, 270 Zeichen):** "Nein — die erste Stunde ist **besonders**. Da entsteht die Bindung zwischen Mutter und Baby. Das Stillen beginnt. Beides klappt **Haut an Haut** am besten. Das kannst du nicht später nachholen. Das Bad kann warten — **Bonding zuerst**. Merke: Erst kuscheln, dann baden."

### Richtig-Feedback
**C1 (325 Zeichen):** "Genau. Das erste Bad wird heute **frühestens nach 24 Stunden** empfohlen. Drei Gründe tragen die Entscheidung: Vernix als natürlicher Hautschutz, Auskühlungsgefahr mit Folgen für Blutzucker und Atmung, sowie die Priorität von Bonding und Stillstart. Direkt nach Geburt reicht sanftes Abtupfen. Das spätere Bad folgt dann mit 37 °C, max 5-10 Minuten, ohne Zusätze."

**B1 (275 Zeichen):** "Sehr gut. **Erstes Bad erst nach 24 Stunden**. Drei Gründe: **Vernix schützt** die Haut. Das Baby **kühlt sonst aus**. **Bonding und Stillen** sind zuerst wichtig. Nach der Geburt reicht **Abtupfen**. Das erste richtige Bad kommt später — dann mit 37 Grad und maximal 5-10 Minuten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wann soll das erste Bad eines Neugeborenen stattfinden — und warum nicht früher?"
- **Rückseite:** "Frühestens nach 24 Stunden (oft später). Gründe: Vernix-Schutz, Vermeidung Auskühlung/Hypoglykämie, Priorität Bonding und Stillstart. Direkt nach Geburt nur sanft abtupfen."
- **Kategorie:** handlung

---

## Baustein 19: elternanleitung-beratung

### Metadaten
- **bausteinId:** saeuglingspflege-elternanleitung
- **bloomLevel:** 5
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-19]

### Stufe 1 — Denkfrage
- **Frage:** "Eine junge Mutter wickelt sichtbar unsicher, sie blickt dich bei jedem Handgriff fragend an. Wie bringst du ihr **sicheres Wickeln** bei, **ohne sie zu beschämen** oder es **für sie zu machen**? Welche drei Prinzipien leiten dein Vorgehen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (290 Zeichen):** "Elternanleitung folgt drei Prinzipien: **1) Ressourcen würdigen** (was machen sie schon gut?), **2) Erklären + Zeigen + Mitmachen lassen** (Modeling statt Übernahme), **3) Bestärken ohne Bewertung**. Ziel: Selbstwirksamkeit, nicht Abhängigkeit. (Hoehl/Kullick, 2019)"

**B1 (260 Zeichen):** "So leitest du Eltern an: **1) Loben, was sie schon können**. **2) Erklären, zeigen, mitmachen lassen** — nicht für sie machen. **3) Stärken ohne Kritik**. Das Ziel: Die Eltern sollen **sicher werden**, nicht **abhängig** von dir. Eltern sind die Experten ihres Kindes."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (900 Zeichen):**
"**Elternanleitung** ist ein Kernauftrag in der Säuglingspflege. Das PflBG nennt sie als pflegerischen Vorbehalt (§ 4 PflBG: Beratung/Anleitung), und sie ist für die Familie oft wichtiger als die eigentliche Pflegehandlung. Drei didaktische Prinzipien leiten das Vorgehen. **Erstens: Ressourcen würdigen.** Bevor du erklärst, beobachtest du: Was macht die Mutter oder der Vater bereits **gut**? Daran anknüpfen. 'Sie halten den Kopf schön stabil — sehr gut. Jetzt zeige ich Ihnen, wie Sie noch den Oberarm dazu fassen.' **Zweitens: Modeling statt Übernahme**. Die Regel lautet: **Erklären, dann Zeigen, dann die Eltern machen lassen** — mit deinen Worten als Begleitung. Wenn du es selbst übernimmst, nimmst du den Eltern die Lerngelegenheit. **Drittens: Bestärken statt Bewerten**. 'Das klappt schon sehr gut' ist besser als 'Das ist richtig, aber...'. Vermeide **Fachjargon** ohne Erklärung. Vermeide **Vergleiche mit anderen Eltern**. Nutze **kurze Sätze**, gib **Zeit zum Üben**. Die Elternanleitung ist erfolgreich, wenn die Eltern das **nächste Mal ohne dich** sicher sind. Besonders wichtig ist das bei jungen, sprachlich unsicheren oder traumatisierten Eltern — dort Ressourcen wahrnehmen und die Zeit nehmen, die nötig ist. (Hoehl/Kullick, 2019)"

**B1 (720 Zeichen):**
"**Elternanleitung** ist ein wichtiger Teil deiner Arbeit. Das steht im **Pflegeberufegesetz (§ 4 PflBG)**. Ziel: Die Eltern sollen das Baby **selbst** versorgen können — nicht du für sie. **Drei Regeln** helfen dir. **Erste Regel: Loben, was schon gut ist.** Schau zuerst: Was machen die Eltern richtig? Sag es ihnen. 'Sie halten den Kopf super. Jetzt zeige ich noch, wie Sie den Oberarm dazu greifen.' **Zweite Regel: Erklären, zeigen, selbst machen lassen.** Nicht du machst es. Du erklärst. Du zeigst einmal. Dann machen **sie** es, und du erklärst während sie es tun. So lernen sie am besten. **Dritte Regel: Stärken, nicht kritisieren**. Sag: 'Das klappt schon gut!' Nicht: 'Richtig, aber...'. Keine schweren Wörter. Keine Vergleiche mit anderen. **Ergebnis**: Die Eltern werden **sicher**. Beim nächsten Mal schaffen sie es **ohne dich**. Besonders wichtig bei jungen oder unsicheren Eltern. Auch wenn sie die Sprache noch nicht so gut können: Nimm dir **Zeit**."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Modeling, Ressourcen, Selbstwirksamkeit, Elternanleitung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn Eltern unsicher sind, sollte ich die Pflege übernehmen, bis sie ruhiger werden"**
- **Fachbegriff:** Übernahme-Fehlschluss
- **Feedback (C1, 320 Zeichen):** "Nicht ratsam — **Übernahme verstärkt die Unsicherheit** und signalisiert 'Sie können es nicht'. Besser: **die Eltern machen lassen**, dich als Begleitung anbieten, Schritt für Schritt mitgehen. Jeder eigene, begleitete Versuch stärkt **Selbstwirksamkeit**. Übernahme nur in echten Gefahrensituationen. Merke: anleiten, nicht ersetzen."
- **Feedback (B1, 275 Zeichen):** "Nein — wenn du es **für sie machst**, lernen sie es nicht. Sie werden noch unsicherer. Besser: Du **begleitest** sie. Sie machen es **selbst**. Du erklärst dabei. So werden sie sicher. Übernimm nur, wenn wirklich Gefahr ist. Merke: begleiten, nicht ersetzen."

**D2: "Ich muss die Eltern auf alle Fehler aufmerksam machen — sonst lernen sie nichts"**
- **Fachbegriff:** Fehler-Fokus-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht effektiv — ein **Fehler-Fokus** verunsichert und blockiert das Lernen. Lernpsychologisch sind **positive Verstärkung** (Ressourcen benennen) und **klare Korrektur im Moment** ('Greifen Sie hier dazu') deutlich wirksamer. **Kritik ohne Lösung** entmutigt. Fehler ansprechen: ja — aber immer mit Alternative. Merke: loben vor korrigieren."
- **Feedback (B1, 285 Zeichen):** "Nein — **zu viel Kritik macht Angst**. Die Eltern werden dann noch unsicherer. Besser: **Erst loben**, dann korrigieren. Und immer sagen, **wie es geht** — nicht nur, was falsch ist. 'Versuchen Sie mal, hier den Oberarm zu greifen.' Merke: loben vor korrigieren."

**D3: "Bei sprachlich unsicheren Eltern ist Anleitung schwer — ich sage es am besten kurz und weniger"**
- **Fachbegriff:** Sprachbarriere-Rückzug
- **Feedback (C1, 330 Zeichen):** "Nicht hilfreich — **Sprachliche Unsicherheit heißt nicht weniger Bedarf**, oft im Gegenteil. Strategien: **kurze Sätze, klare Wörter, zeigen und nachmachen lassen, Bilder, nachfragen 'Was haben Sie verstanden?', ggf. Dolmetscher**. Die Eltern haben dasselbe Recht auf vollständige Anleitung. Merke: Anleitung anpassen, nicht reduzieren."
- **Feedback (B1, 290 Zeichen):** "Nein — **weniger erklären hilft nicht**. Die Eltern brauchen die **gleichen Informationen**, nur anders erklärt. Nutze **einfache Sätze**, **zeige viel**, **frage nach**. Zeig Bilder. Wenn nötig: **Dolmetscher** holen. Merke: anders erklären, nicht weniger."

### Richtig-Feedback
**C1 (330 Zeichen):** "Genau. Die drei Prinzipien der Elternanleitung sind: **Ressourcen würdigen** (was läuft schon gut?), **Modeling statt Übernahme** (Erklären → Zeigen → Mitmachen lassen), **Bestärken statt Bewerten** (klappt gut statt richtig-aber). So wachsen Selbstwirksamkeit und Sicherheit. Die Anleitung ist rechtlich im § 4 PflBG als Pflegeaufgabe verankert."

**B1 (285 Zeichen):** "Sehr gut. Die drei Regeln: **Loben, was schon gut ist**. **Erklären, zeigen, selbst machen lassen** — nicht für sie machen. **Stärken, nicht kritisieren**. Das Ziel: Die Eltern werden sicher. Sie können es beim nächsten Mal allein. Die Anleitung ist deine Aufgabe (§ 4 PflBG)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 3 Prinzipien leiten die Elternanleitung in der Säuglingspflege?"
- **Rückseite:** "1) Ressourcen würdigen (was schon gut läuft), 2) Modeling statt Übernahme (Erklären → Zeigen → Mitmachen), 3) Bestärken statt Bewerten. Rechtsgrundlage: § 4 PflBG."
- **Kategorie:** handlung

---



