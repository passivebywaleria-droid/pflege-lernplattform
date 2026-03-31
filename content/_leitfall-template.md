# Leitfall-Template — Referenz für den Content Generator

> Extrahiert aus den Thieme-Fallbüchern. Dient als Vorlage für realistische Patientenfälle
> in Dialog-, Branching- und Fallbeispiel-Steps.

---

## 1. Quellen

| Buch | Autor(en) | Auflage | Verlag | Jahr | Fälle |
|------|-----------|---------|--------|------|-------|
| Fallbuch Chirurgie | Stefan Eisoldt | 6., überarbeitete Auflage | Georg Thieme Verlag, Stuttgart | 2020 | 150 Fälle |
| Fallbuch Neurologie | Roland Gerlach, Andreas Bickel | 4., vollständig überarbeitete und erweiterte Auflage | Georg Thieme Verlag, Stuttgart | 2018 | 100 Fälle |

Beide Bücher verwenden dasselbe bewährte **Thieme-Fallbuch-Format**:
- Seite 1: Fallvignette + Fragen (Frage-Antwort-Spiel)
- Seite 2+: Antworten + ausführlicher Kommentar (Lehrbuch-artig)

---

## 2. Standard-Fallformat (Thieme-Fallbuch-Struktur)

### 2.1 Aufbau der Fallvignette

Jeder Fall folgt einem festen Schema:

```
FALL [Nr.]

[Alter]-jährige/r [Geschlecht] mit [Leitsymptom(e)]

[Situationsbeschreibung — 4-8 Sätze]:
- Setting (Notaufnahme / Station / Praxis / Rettungsdienst / Sprechstunde)
- Anamnese (Beschwerden, Zeitverlauf, Vorgeschichte)
- Klinischer Befund (Inspektion, Palpation, Auskultation)
- Vitalzeichen (RR, Puls, Temperatur — wenn relevant)
- Laborwerte (wenn relevant)
- Ggf. Bildgebung (Verweis auf Abbildung)

[Verdachtsdiagnose oder Arbeitshypothese — 1 Satz]

───────────────────────────────────
FRAGEN:

[Nr.1] [Frage auf Bloom-Stufe 1-2: Erkennen / Verstehen]
       z.B. "Welche Verdachtsdiagnose stellen Sie?"
       z.B. "An welche Differenzialdiagnosen denken Sie?"

[Nr.2] [Frage auf Bloom-Stufe 2-3: Verstehen / Anwenden]
       z.B. "Nennen Sie mögliche Ursachen!"
       z.B. "Welche diagnostischen Maßnahmen führen Sie durch?"

[Ggf. Zwischeninformation — neuer Befund, Bildgebung, Laborwerte]

[Nr.3] [Frage auf Bloom-Stufe 3-4: Anwenden / Analysieren]
       z.B. "Welche Diagnose stellen Sie aufgrund der Anamnese und des Befundes?"
       z.B. "Beschreiben Sie das therapeutische Vorgehen!"

[Nr.4] [Frage auf Bloom-Stufe 4-5: Analysieren / Bewerten]
       z.B. "Welche Komplikationen können auftreten?"
       z.B. "Erläutern Sie die Pathophysiologie!"

[Nr.5] [Optional — Bloom-Stufe 5-6: Bewerten / Erschaffen]
       z.B. "Diskutieren Sie die therapeutischen Maßnahmen!"
       z.B. "Was raten Sie dem Patienten?" (! = Schwieriger Fall)
───────────────────────────────────
```

### 2.2 Schlüsselelemente der Vignette

| Element | Beschreibung | Beispiel |
|---------|-------------|----------|
| **Einleitungssatz** | Alter + Geschlecht + Leitsymptom, immer in der Überschrift | "52-jähriger Mann mit Erbrechen und geblähtem Abdomen" |
| **Setting** | Wo trifft man den Patienten? | Notaufnahme, Station, Praxis, Rettungsdienst, Sprechstunde, Routineuntersuchung |
| **Perspektive** | Immer 2. Person: "Sie untersuchen..." | "Sie kommen als Notarzt zur Unfallstelle" |
| **Anamnese** | Zeitverlauf + Beschwerden in Alltagssprache des Patienten | "Seit dem Morgen habe er Bauchschmerzen wechselnder Intensität" |
| **Vorgeschichte** | Vorerkrankungen, Operationen, Medikamente | "Auf Nachfragen gibt der Patient an, vor 6 Jahren am Blinddarm operiert worden zu sein" |
| **Klinischer Befund** | Objektive Untersuchungsergebnisse | "Bei der Inspektion ist das Abdomen meteoristisch gebläht" |
| **Vitalzeichen** | RR, Puls, Temperatur — nur wenn klinisch relevant | "RR 120/70 mmHg, Puls 90/min" |
| **Laborwerte** | Nur abnorme Werte, mit Einheiten | "Leukozyten 20.000/µl, CRP 15,5 mg/dl" |
| **Zwischeninformation** | Neuer Befund NACH einer Frage — treibt den Fall voran | "Bei der Diagnostik findet sich ein Kontrastmittelaustritt im Bereich der Anastomose" |
| **Verdachtssatz** | Lenkt den Leser, ohne die Antwort vorwegzunehmen | "Sie vermuten einen mechanischen Ileus" |

### 2.3 Fragen-Taxonomie (nach Bloom)

Die Fallbücher verwenden konsistent eine aufsteigende Bloom-Progression:

| Bloom | Fragetyp | Typische Formulierung |
|-------|----------|----------------------|
| **B1 — Erinnern** | Wissen abrufen | "Nennen Sie allgemeine Ursachen eines mechanischen Ileus!" |
| **B2 — Verstehen** | Verdachtsdiagnose | "An welche Differenzialdiagnosen denken Sie?" |
| **B3 — Anwenden** | Diagnostik planen | "Welche diagnostischen Maßnahmen führen Sie durch?" |
| **B4 — Analysieren** | Befund interpretieren | "Welche Diagnose stellen Sie aufgrund der Anamnese und des CT-Bildes?" |
| **B5 — Bewerten** | Therapie abwägen | "Wägen Sie die Methoden gegeneinander ab! Wie entscheiden Sie sich?" |
| **B6 — Erschaffen** | Begründen, Planen | "Beschreiben Sie die weitere Therapie bei diesem Patienten!" |

### 2.4 Besonderheiten der Neurologie-Fälle

- **Längere Vignetten** (8-15 Sätze statt 4-8), weil die neurologische Untersuchung detaillierter beschrieben wird
- **Mehr Zwischeninformationen** (Liquorbefund, MRT-Befund, Neurografie)
- **"Detektivische" Herangehensweise**: Strukturierte Anamnese → gezielte körperliche Untersuchung → Verdachtsdiagnose → apparative Bestätigung
- **Mehr Fragen pro Fall** (5-6 statt 3-5)
- **Schwierige Fälle** mit "!" markiert

---

## 3. Fünf Beispiel-Fälle für verschiedene Settings

### Fall A — Klinik (Chirurgie, postoperativ)

```
Frau Yilmaz, 45 Jahre, Station 3B (Chirurgie)

Setting: Normalstation, 3. postoperativer Tag nach laparoskopischer Cholezystektomie

Anamnese: Frau Yilmaz wurde vor 3 Tagen wegen Gallensteinen operiert. Der Eingriff
verlief komplikationslos. Gestern ging es ihr gut, sie hat angefangen zu essen.
Heute Morgen klagt sie über zunehmende Bauchschmerzen im rechten Oberbauch,
die in die rechte Schulter ausstrahlen. Sie hat 38,7 °C Temperatur.

Vitalzeichen: RR 135/85 mmHg, Puls 98/min, Temperatur 38,7 °C

Befund: Das Abdomen ist im rechten Oberbauch druckschmerzhaft, die Operationswunden
sind reizlos. Die Drainage fördert seit heute Morgen gallig-trübes Sekret.
Im Labor: Leukozyten 14.200/µl, CRP 8,3 mg/dl, Bilirubin 2,1 mg/dl.

→ Frage 1 (Bloom 2): Was ist Ihre Verdachtsdiagnose? Welche Komplikation
   könnte vorliegen?
→ Frage 2 (Bloom 3): Welche weiteren Untersuchungen veranlassen Sie?
→ Frage 3 (Bloom 4): Die Sonografie zeigt freie Flüssigkeit im rechten Oberbauch.
   Was bedeutet das? Welche Maßnahmen leiten Sie ein?
→ Frage 4 (Bloom 5): Was dokumentieren Sie im Pflegebericht? Welche
   Beobachtungen sind in den nächsten Stunden besonders wichtig?
```

### Fall B — Neurologie (Akutereignis)

```
Herr Petrov, 72 Jahre, Notaufnahme

Setting: Notaufnahme, Einlieferung durch Rettungsdienst

Anamnese: Herr Petrov wurde von seiner Ehefrau gefunden, als er am Frühstückstisch
plötzlich nicht mehr sprechen konnte und die rechte Hand die Kaffeetasse nicht
mehr halten konnte. Die Ehefrau hat sofort den Notruf gewählt. Zwischen
Symptombeginn und Eintreffen in der Notaufnahme sind 45 Minuten vergangen.
Vorerkrankungen: Vorhofflimmern (Marcumar), Diabetes mellitus Typ 2, arterielle
Hypertonie.

Vitalzeichen: RR 195/110 mmHg, Puls 88/min (arrhythmisch), SpO2 96%, BZ 189 mg/dl

Befund: Patient wach, versteht einfache Aufforderungen, kann aber nur einzelne Silben
hervorbringen. Hemiparese rechts (Arm > Bein). Babinski rechts positiv.
Blickdeviation nach links.

→ Frage 1 (Bloom 2): Welches klinische Syndrom liegt vor? Welche beiden Ursachen
   kommen in Frage?
→ Frage 2 (Bloom 3): Welche Sofortmaßnahmen ergreifen Sie als Pflegekraft bei
   der Aufnahme?
→ Frage 3 (Bloom 4): Das CCT zeigt keinen Blutungsnachweis. Der INR beträgt 3,2.
   Warum ist diese Information therapieentscheidend?
→ Frage 4 (Bloom 5): Der Patient wird auf die Stroke Unit verlegt. Welche
   pflegerischen Schwerpunkte setzen Sie in den ersten 24 Stunden?
→ Frage 5 (Bloom 6): Die Ehefrau fragt Sie weinend: "Wird er wieder normal
   sprechen können?" Wie reagieren Sie?
```

### Fall C — Ambulant (Hausarztpraxis)

```
Frau Albrecht, 68 Jahre, Hausarztpraxis

Setting: Routineuntersuchung, Diabetes-Kontrolltermin

Anamnese: Frau Albrecht kommt zum vierteljährlichen Kontrolltermin. Der Diabetes mellitus
Typ 2 besteht seit 12 Jahren, sie nimmt Metformin 2x 1000 mg. Beim Ausziehen der
Schuhe fällt Ihnen auf, dass sie eine offene Stelle an der rechten Ferse hat.
Auf Nachfragen sagt sie: "Ach, das habe ich erst letzte Woche bemerkt, das tut gar
nicht weh." Sie habe "schon länger" ein taubes Gefühl in den Füßen.

Vitalzeichen: RR 145/90 mmHg, HbA1c 8,2%

Befund: An der rechten Ferse findet sich ein ca. 2 cm großer Ulkus mit schmierigem
Belag, die umgebende Haut ist gerötet und überwärmt. Die Fußpulse sind beidseits
schwach tastbar. Die Sensibilität an beiden Füßen ist mit dem Monofilament
deutlich herabgesetzt.

→ Frage 1 (Bloom 2): Welche Diagnose stellen Sie? Welche zwei Grunderkrankungen
   begünstigen diese Komplikation?
→ Frage 2 (Bloom 3): Welche Klassifikation verwenden Sie zur Einteilung? Ordnen
   Sie den Befund ein.
→ Frage 3 (Bloom 4): Warum hat die Patientin keine Schmerzen, obwohl die Wunde
   offen ist? Erklären Sie den Zusammenhang.
→ Frage 4 (Bloom 5): Erstellen Sie einen Wundversorgungsplan. Welche Maßnahmen
   ergreifen Sie, und welche Berufsgruppen beziehen Sie ein?
→ Frage 5 (Bloom 6): Die Patientin sagt: "Ich trage halt gerne enge Schuhe."
   Führen Sie ein Beratungsgespräch zur Fußpflege bei Diabetes.
```

### Fall D — Notfall (Rettungsdienst / Akutsituation)

```
Herr Demir, 58 Jahre, Einkaufszentrum (Notfall)

Setting: Sie sind als Pflegekraft im Rettungsdienst (Notfallsanitäter-Praktikum). Alarm:
"Bewusstlose Person im Einkaufszentrum."

Anamnese: Beim Eintreffen finden Sie einen am Boden liegenden Mann. Umstehende
berichten, der Mann habe sich plötzlich an die Brust gegriffen, sei blass geworden
und zusammengesackt. "Er hat noch irgendwas von Schmerzen in der Brust
gesagt." Eine Frau, die sich als Apothekerin vorstellt, hat bereits den Puls
geprüft: "Sehr schnell und unregelmäßig." Ein Defibrillator (AED) hängt an
der Wand, wurde aber noch nicht eingesetzt.

Vitalzeichen (Ihre Messung): RR 85/50 mmHg, Puls 140/min (arrhythmisch),
SpO2 88%, Patient ansprechbar aber desorientiert, kaltschweißig, zyanotische Lippen.

→ Frage 1 (Bloom 2): An welche lebensbedrohlichen Diagnosen müssen Sie denken?
   Nennen Sie drei.
→ Frage 2 (Bloom 3): Beschreiben Sie Ihre Sofortmaßnahmen in der richtigen
   Reihenfolge!
→ Frage 3 (Bloom 4): Der Notarzt trifft ein und zeigt Ihnen das 12-Kanal-EKG:
   ST-Hebungen in II, III, aVF. Was bedeutet das? Welches Gefäß ist
   wahrscheinlich betroffen?
→ Frage 4 (Bloom 5): Auf dem Transport verschlechtert sich der Zustand — der
   Patient wird bewusstlos, kein Puls tastbar. Was tun Sie?
→ Frage 5 (Bloom 5): Nach erfolgreicher Reanimation im Krankenhaus fragt der
   Sohn Sie: "Hätte man das verhindern können?" Was antworten Sie?
```

### Fall E — Langzeitpflege (Pflegeheim)

```
Frau Baumann, 84 Jahre, Pflegeheim "Sonnengarten"

Setting: Langzeitpflege, Demenzwohnbereich. Sie arbeiten im Frühdienst.

Anamnese: Frau Baumann lebt seit 2 Jahren im Pflegeheim. Diagnosen: Alzheimer-Demenz
(mittelgradig), Osteoporose, Z.n. Schenkelhalsfraktur rechts (vor 8 Monaten).
Normalerweise ist sie freundlich, geht mit Rollator und isst selbstständig.
Heute Morgen weigert sie sich aufzustehen: "Lasst mich in Ruhe!" Sie ist
ungewöhnlich aggressiv, schlägt nach Ihnen, als Sie ihr beim Waschen helfen
wollen. Die Kollegin vom Nachtdienst berichtet, Frau Baumann sei "gegen
3 Uhr sehr unruhig gewesen und habe verwirrt nach ihrer Mutter gerufen".

Vitalzeichen: RR 100/65 mmHg, Puls 102/min, Temperatur 38,4 °C

Befund: Patientin nestelt an der Bettdecke, ist nicht orientiert zu Ort, Zeit und Situation.
Gestern war sie noch orientiert zu Person und teilweise zu Ort.
Die Mundschleimhaut ist trocken. Beim vorsichtigen Abtasten des Bauches
verzieht sie das Gesicht. Letzter Stuhlgang laut Dokumentation vor 4 Tagen.
Letzter Trinknachweis gestern: 600 ml.

→ Frage 1 (Bloom 2): Was fällt Ihnen auf — was hat sich im Vergleich zu "normal"
   verändert? Nennen Sie die Warnsignale.
→ Frage 2 (Bloom 3): Welche Ursachen kommen für die akute Verschlechterung in
   Frage? Nennen Sie mindestens vier mögliche Ursachen.
→ Frage 3 (Bloom 4): Warum ist es bei Demenzpatienten besonders schwierig,
   Schmerzen oder Infektionen zu erkennen? Welche Beobachtungsinstrumente
   kennen Sie?
→ Frage 4 (Bloom 5): Sie rufen den Hausarzt an. Was berichten Sie? Strukturieren
   Sie Ihre Übergabe nach SBAR.
→ Frage 5 (Bloom 6): Die Tochter kommt zu Besuch und sagt: "Gestern war sie
   doch noch so gut drauf! Pflegt ihr sie überhaupt richtig?" Wie reagieren
   Sie professionell?
```

---

## 4. Fallvariations-Regeln — Transfer-Patienten erstellen

### 4.1 Was ist ein Transfer-Patient?

Ein Transfer-Patient hat **dieselbe Erkrankung**, aber in einem **anderen Kontext**. Der Schüler muss sein Wissen übertragen (= Bloom B4-B5). Die Thieme-Fallbücher nutzen dieses Prinzip implizit: z.B. gibt es sowohl einen Ileus bei einem 52-Jährigen (Fall 2) als auch postoperative Bauchschmerzen bei einem 45-Jährigen (Fall 7) — gleiche Pathologie, anderes Setting.

### 4.2 Sechs Variations-Achsen

| Achse | Leitfall-Patient (S1+S2) | Transfer-Patient (S3) |
|-------|--------------------------|----------------------|
| **Alter** | 72-jähriger Mann | 38-jährige Schwangere |
| **Setting** | Normalstation | Pflegeheim / Häusliche Pflege / Notaufnahme |
| **Komorbidität** | Nur die Grunderkrankung | + Diabetes + Demenz + Sprachbarriere |
| **Schweregrad** | Typischer Verlauf | Komplikation / atypische Präsentation |
| **Sozialer Kontext** | Kooperativer Patient | Ängstlicher / aggressiver / non-complianter Patient |
| **Pflegeperspektive** | "Was liegt vor?" | "Was tust DU als Pflegekraft?" |

### 4.3 Regeln für gute Variationen

1. **Mindestens 2 Achsen verändern** — Nur das Alter zu ändern reicht nicht
2. **Emotionalen Hook einbauen** — Der Transfer-Patient hat immer ein menschliches Element (Angst, Wut, Trauer, Sprachbarriere, Angehörige)
3. **Pflege-Perspektive stärken** — Im Leitfall kann die Diagnose im Vordergrund stehen, beim Transfer-Patienten die pflegerische Handlung
4. **Komplikation als Wendepunkt** — Der Transfer-Patient hat idealerweise eine Komplikation, die der Leitfall nicht hatte
5. **Realistische Details** — Medikamentennamen, konkrete Vitalwerte, genaue Zeitangaben ("seit 3 Uhr nachts", "vor 6 Wochen")

### 4.4 Beispiel: Leitfall → Transfer

```
LEITFALL (S1 + S2):
  Herr Krause, 65 Jahre, Station — Rheumatoide Arthritis
  Erstdiagnose vor 3 Monaten, kooperativ, Muttersprachler, keine
  relevanten Nebendiagnosen. Fokus: Was ist RA? Wie wird behandelt?

TRANSFER-PATIENT (S3):
  Frau Güneş, 42 Jahre, Ambulanz — Rheumatoide Arthritis
  Seit 8 Jahren bekannt, MTX seit 5 Jahren. Kommt heute wegen
  plötzlicher Atemnot und trockenem Husten. Spricht Deutsch auf B1-Niveau.
  Ihr 16-jähriger Sohn übersetzt.
  → Komplikation: MTX-Pneumonitis? Interstitielle Lungenerkrankung?
  → Pflege-Fokus: Kommunikation mit Sprachbarriere, Medikamenten-
     anamnese trotz eingeschränkter Sprachkenntnisse, Aufklärung über
     Medikamentennebenwirkungen in einfacher Sprache
  → Emotionaler Hook: Der Sohn fragt: "Muss meine Mama das Medikament
     jetzt absetzen? Sie hat solche Angst vor den Schmerzen."
```

---

## 5. Leitfall-Qualitätskriterien

### 5.1 Was einen guten Fall ausmacht

| Kriterium | Gut | Schlecht |
|-----------|-----|---------|
| **Realismus** | Konkrete Vitalwerte, plausible Anamnese, echte Medikamentennamen | "Ein Patient hat Schmerzen" — ohne Details |
| **Emotionaler Hook** | Angst, Sorge, Alltagssituation, Angehörige | Rein technisch-medizinischer Text ohne Mensch |
| **Setting-Klarheit** | "Sie arbeiten im Frühdienst auf der chirurgischen Station" | Unklar wo und wann die Szene spielt |
| **Handlungsdruck** | Etwas muss JETZT entschieden werden | Patient sitzt einfach da und wartet |
| **Bloom-Progression** | Fragen steigen von B2 → B5 | Alle Fragen auf demselben Niveau |
| **Pflege-Relevanz** | "Was dokumentieren Sie?" / "Wie lagern Sie?" | Nur ärztliche Diagnostik und Therapie |
| **Kulturelle Vielfalt** | Diverse Namen, Hintergründe, Lebenssituationen | Alle Patienten heißen Müller und sind 65 |
| **Sprachliche Klarheit** | Kurze Sätze, Fachbegriffe erklärt oder im Glossar | Verschachtelte Sätze mit 3 Nebensätzen |

### 5.2 Diversitäts-Checkliste für Leitfälle

Über alle LEs hinweg soll die Gesamtheit der Fälle divers sein:

**Alter:**
- [ ] Kinder / Säuglinge (0-14)
- [ ] Jugendliche (15-17)
- [ ] Junge Erwachsene (18-35)
- [ ] Mittleres Alter (36-64)
- [ ] Ältere (65-79)
- [ ] Hochbetagte (80+)

**Geschlecht:**
- [ ] Männlich
- [ ] Weiblich
- [ ] Divers (wenn medizinisch relevant)

**Kultureller Hintergrund:**
- [ ] Deutsche Namen (Albrecht, Krause, Baumann)
- [ ] Türkische Namen (Yilmaz, Güneş, Demir, Kaya)
- [ ] Arabische Namen (Al-Hassan, Mansour, Said)
- [ ] Osteuropäische Namen (Petrov, Kowalski, Novak)
- [ ] Weitere (Nguyen, Santos, etc.)

**Setting:**
- [ ] Normalstation (Chirurgie, Innere, Neurologie, Orthopädie)
- [ ] Intensivstation
- [ ] Notaufnahme
- [ ] Pflegeheim / Langzeitpflege
- [ ] Ambulanz / Arztpraxis
- [ ] Häusliche Pflege
- [ ] Rettungsdienst / Notfall vor Ort
- [ ] Rehabilitation

**Sprachliche Besonderheit:**
- [ ] Muttersprachler — vollständige Kommunikation
- [ ] B1/B2 — eingeschränkte Kommunikation, Angehörige übersetzen
- [ ] Aphasie / Bewusstseinseinschränkung — nonverbale Kommunikation nötig
- [ ] Kind — altersgerechte Kommunikation
- [ ] Demenz — eingeschränkte Kooperation

### 5.3 Die drei häufigsten Fehler bei Leitfällen

1. **Zu abstrakt** — "Ein Patient hat eine Erkrankung X" statt konkreter Szene mit Namen, Alter, Setting, Vitalwerten. Lösung: Immer mindestens Name, Alter, Setting, 2 Vitalzeichen, 1 konkreten Befund.

2. **Nur Arzt-Perspektive** — "Welche Diagnose stellen Sie? Welche OP führen Sie durch?" Lösung: Mindestens 50% der Fragen müssen pflegerische Handlungen betreffen (Beobachtung, Dokumentation, Kommunikation, Lagerung, Prophylaxe, Beratung).

3. **Kein emotionaler Moment** — Der Patient ist ein Datensatz statt ein Mensch. Lösung: Jeder Fall braucht mindestens EINEN Satz, der Emotion transportiert (Angst, Wut, Hilflosigkeit, Sorge von Angehörigen, Humor, Dankbarkeit).

### 5.4 Qualitäts-Checkliste für jeden Leitfall

```
PFLICHT (alle müssen erfüllt sein):
- [ ] Name + Alter + Geschlecht vorhanden
- [ ] Setting klar benannt (wo, wann, welche Rolle hat der Schüler)
- [ ] Mindestens 2 Vitalzeichen oder Befunde
- [ ] Mindestens 1 konkreter klinischer Befund (nicht nur Symptome)
- [ ] Fragen steigen in Bloom-Stufen (mindestens B2 → B4)
- [ ] Mindestens 1 Frage mit Pflege-Perspektive
- [ ] Keine medizinischen Fehler (Leitlinien-konform)
- [ ] Sprachlich korrekt (C1 + B1-Version möglich)

SOLL (mindestens 2 von 4):
- [ ] Emotionaler Hook vorhanden (Angehörige, Angst, Alltagssituation)
- [ ] Zwischeninformation die den Fall vorantreibt
- [ ] Kulturelle Vielfalt (nicht-deutscher Name ODER Sprachbarriere)
- [ ] Komplikation oder Wendepunkt im Verlauf

BONUS (nice-to-have):
- [ ] Beruf des Patienten erwähnt (macht Empathie greifbar)
- [ ] Konkretes Medikament mit Dosis genannt
- [ ] Ethisches Dilemma oder Kommunikationsherausforderung
- [ ] Verknüpfung mit Interleaving-Thema
```

---

## 6. Anpassung für die Pflege-Lernplattform

### 6.1 Unterschiede zum Medizin-Fallbuch

Die Thieme-Fallbücher sind für Medizinstudierende geschrieben. Für Pflegeschüler gelten Anpassungen:

| Thieme (Medizin) | Unsere Plattform (Pflege) |
|-------------------|--------------------------|
| "Welche OP führen Sie durch?" | "Welche pflegerischen Maßnahmen leiten Sie ein?" |
| Diagnostik im Vordergrund | Beobachtung + Dokumentation im Vordergrund |
| Differenzialdiagnosen stellen | Veränderungen erkennen und melden |
| Therapie verordnen | Therapie unterstützen, überwachen, dokumentieren |
| Fachsprache C1-C2 | Fachsprache C1 mit B1-Toggle verfügbar |
| Nur Text + Bild | Interaktive Steps (MC, Branching, Sortierung, Dialog) |
| 3-5 offene Fragen | 12-23 Steps pro Session mit verschiedenen Modi |

### 6.2 Mapping auf Step-Typen

| Fallbuch-Element | Step-Typ in der Plattform |
|------------------|--------------------------|
| Verdachtsdiagnose stellen | `mc` oder `branching` |
| Befund interpretieren | `hotspot` oder `categorize` |
| Maßnahmen in Reihenfolge | `sorting` oder `sequencing` |
| Therapie erklären | `freetext` oder `dialog` |
| Komplikationen erkennen | `truefalse` oder `swipe` |
| Pflegebericht schreiben | `freetext` (mit KI-Bewertung) |
| Angehörigen-Gespräch | `dialog` oder `branching` |
| Vitalzeichen zuordnen | `matching` oder `slider` |
| Prioritäten setzen | `sorting` |
| Ethisches Dilemma | `branching` mit Konsequenzen |

---

*Dieses Dokument ist eine Referenz für den Content Generator und den Leitfall-Autor.
Es wird NICHT an Schüler ausgegeben. Stand: 2026-03-29.*
