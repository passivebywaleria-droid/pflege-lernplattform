# Wissensbausteine: Blasenkatheter

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `blasenkatheter` |
| ceId | `ce-02` |
| cluster | E (Ärztliche Anordnungen) |
| wissensart | handlung |
| kompetenzbereich | III.2 |
| geschaetzteUE | 10 |
| zielzeitMin | 248 (10 UE × 45 × 0,55) |
| bausteineAnzahl | 18 |
| voraussetzungen | `harnausscheidung` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 22% (4 Bausteine), Bloom 3-4: 56% (10 Bausteine), Bloom 5-6: 22% (4 Bausteine)

**Primärquellen:**
- KRINKO (2015): Empfehlung zur Prävention und Kontrolle Katheter-assoziierter Harnwegsinfektionen
- CDC/HICPAC (2009, Update 2019): Guideline for Prevention of Catheter-associated Urinary Tract Infections
- AWMF S3-Leitlinie (2017, Update 2024): Epidemiologie, Diagnostik, Therapie und Management unkomplizierter Harnwegsinfektionen
- RKI (2023): KISS — Krankenhaus-Infektions-Surveillance-System, CAUTI-Daten
- EAUN Guideline (2012, Update 2021): Catheterisation Urethral intermittent in adults
- § 630a BGB (Behandlungsvertrag, ärztliche Anordnung)
- § 4 PflBG (Vorbehaltsaufgaben der Pflege)

---

## Baustein 1: katheter-definition-und-arten

### Metadaten
- **bausteinId:** blasenkatheter-definition-arten
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 10 Min
- **quelleFakten:** [F-01, F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, ein Patient kann seinen Urin nicht mehr selbst ablassen. Welche Wege fallen dir ein, wie man die Blase entleeren könnte? Sammle in eigenen Worten."
- **Step-Typ:** freetext (aktiviert Vorwissen)

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Ein Blasenkatheter ist ein steriler Kunststoffschlauch, der Urin aus der Blase ableitet. Es gibt 4 Hauptformen: Einmalkatheter (ISK), transurethraler Dauerkatheter (BVK), suprapubischer Katheter (SPDK) und Spülkatheter (3-Wege). (KRINKO 2015)"

**B1 (215 Zeichen):** "Ein Blasenkatheter ist ein dünner Schlauch. Er leitet Urin aus der Blase raus. Es gibt 4 Formen: Einmalkatheter (einmal rein, einmal raus), Dauerkatheter (bleibt über Harnröhre), suprapubischer Katheter (durch Bauch) und Spülkatheter."

- **Step-Typ:** comparison (Tabelle 4 Katheter-Arten)

### Stufe 3 — Erklärung

**C1 (710 Zeichen):**
"Ein Blasenkatheter ist ein steriles Medizinprodukt, das Urin aus der Harnblase ableitet. Die Auswahl richtet sich nach Indikation und Dauer:

**1. Einmalkatheter (Intermittierender Katheterismus, ISK)** — wird eingeführt, Urin läuft ab, Katheter wird entfernt. Goldstandard bei neurogener Blasenstörung oder Restharn.

**2. Transurethraler Dauerkatheter (BVK, Blasenverweilkatheter)** — wird über die Harnröhre eingeführt und bleibt über Tage bis Wochen liegen. Fixierung durch Ballon (5-10 ml Aqua dest.) in der Blase.

**3. Suprapubischer Katheter (SPDK)** — durch eine kleine Öffnung in der Bauchdecke direkt in die Blase. Vorteil: keine Harnröhrenreizung, niedrigeres HWI-Risiko bei Langzeit.

**4. Spülkatheter (3-Wege-Katheter)** — hat zusätzlichen Kanal für Dauerspülung bei Hämaturie (z.B. nach Prostata-OP). (KRINKO 2015, EAUN 2021)"

**B1 (585 Zeichen):**
"Ein Blasenkatheter ist ein Schlauch aus Kunststoff. Er leitet Urin aus der Blase. Welcher Katheter passt, hängt von der Situation ab:

**1. Einmalkatheter (ISK)** — Rein, Urin läuft raus, wieder raus. Zum Beispiel, wenn die Blase nicht mehr richtig entleert.

**2. Dauerkatheter (BVK)** — Geht über die Harnröhre in die Blase. Bleibt Tage oder Wochen drin. Ein kleiner Ballon (mit Wasser gefüllt) hält ihn in der Blase.

**3. Suprapubischer Katheter (SPDK)** — Geht durch einen kleinen Schnitt im Bauch in die Blase. Vorteil: weniger Infektionen.

**4. Spülkatheter (3 Wege)** — Hat einen Extra-Schlauch zum Spülen. Wird benutzt, wenn Blut im Urin ist."

- **Erklärungs-Step:** stepType `reveal` (4 Katheter-Arten, aufdecken mit Bild)
- **Glossar-Begriffe:** [Blasenkatheter, ISK, BVK, SPDK, Spülkatheter, transurethral, suprapubisch]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Dauerkatheter ist immer die beste Lösung bei Blasenproblemen"**
- **Fachbegriff:** Dauerkatheter-Bequemlichkeits-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — ein Dauerkatheter birgt pro Liegetag 3-10% zusätzliches Infektionsrisiko (KRINKO 2015). Der **ISK** (intermittierende Selbstkatheterisierung) ist bei Restharn der Goldstandard. Merke: So kurz wie möglich, so selten wie möglich — und DK ist nie die Standard-Lösung."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — ein Dauerkatheter macht viele Infektionen. Jeden Tag mehr Risiko. Besser ist oft der Einmalkatheter (ISK). Merke: Dauerkatheter nur wenn wirklich nötig. Und so kurz wie möglich."

**D2: "Ein suprapubischer Katheter ist gefährlicher als ein Dauerkatheter"**
- **Fachbegriff:** SPDK-Gefahren-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — der SPDK hat bei Langzeitableitung ein **niedrigeres Infektionsrisiko** als der transurethrale DK. Die Harnröhre wird nicht gereizt, keine Schleimhautverletzung. Nachteile: Stichkanal muss pflegen. Merke: Bei geplanter Langzeitableitung > 2 Wochen ist SPDK oft die sicherere Wahl."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — der Katheter durch den Bauch (SPDK) ist bei langer Zeit oft **sicherer** als durch die Harnröhre. Weniger Infektionen, weil die Harnröhre nicht gereizt wird. Merke: Bei langer Zeit ist SPDK oft besser, nicht schlechter."

**D3: "Einmalkatheter braucht man nur in der Klinik"**
- **Fachbegriff:** ISK-Klinik-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — der **ISK (Intermittierende Selbstkatheterisierung)** wird zu Hause täglich 4-6x angewandt, z.B. bei Querschnittlähmung oder neurogener Blase. Patienten lernen, sich selbst zu katheterisieren (saubere, nicht sterile Technik zu Hause). Merke: ISK ist oft Alltags-Selbstversorgung."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — den Einmalkatheter (ISK) benutzen viele Menschen zu Hause. Zum Beispiel bei Querschnittlähmung. Sie lernen, es selbst zu machen, 4-6 mal am Tag. Merke: ISK ist oft für zu Hause, nicht nur für die Klinik."

### Richtig-Feedback
**C1 (255 Zeichen):** "Genau. Die 4 Katheter-Arten: Einmalkatheter (ISK) für einmalige Entleerung oder Selbstkatheterisierung, transurethraler Dauerkatheter (BVK) für kurze Zeit, suprapubischer Katheter (SPDK) für Langzeit, 3-Wege-Spülkatheter bei Blutungen. Auswahl nach Indikation."

**B1 (225 Zeichen):** "Sehr gut. Die 4 Katheter: Einmalkatheter (ISK) für einmaliges Entleeren. Dauerkatheter (BVK) durch die Harnröhre für kurze Zeit. Suprapubischer (SPDK) durch den Bauch für lange Zeit. Spülkatheter (3 Wege) zum Spülen bei Blut."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Katheter-Arten gibt es und wann welche?"
- **Rückseite:** "ISK (einmalig, Selbstkatheterisierung), BVK (transurethral, kurz), SPDK (suprapubisch, lang), 3-Wege-Spülkatheter (bei Hämaturie)."
- **Kategorie:** fachbegriff

---

## Baustein 2: katheter-materialien-und-groessen

### Metadaten
- **bausteinId:** blasenkatheter-material-groesse
- **bloomLevel:** 2
- **wissensart:** fakten
- **zeitBudget:** 10 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Katheter aus einem billigen Material darf nur 5 Tage liegen. Warum? Was könnte an einem Material wichtig sein, wenn es Wochen im Körper bleibt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Material bestimmt Liegezeit: Latex/PVC max 5 Tage (reizt), silikonisierter Latex max 14 Tage, **Silikon 4-6 Wochen** (biokompatibel). Größe in Charrière (Ch): 1 Ch = 1/3 mm Außendurchmesser. Erwachsene: 12-16 Ch, Kinder: 8-10 Ch."

**B1 (220 Zeichen):** "Das Material entscheidet, wie lange ein Katheter liegen darf: Latex/PVC max 5 Tage (reizt). Silikon-Latex max 14 Tage. **Silikon 4-6 Wochen** (gut verträglich). Die Größe heißt Charrière (Ch). Erwachsene: 12-16 Ch. Kinder: 8-10 Ch."

- **Step-Typ:** comparison (Material-Tabelle + Ch-Skala)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"**Materialien im Überblick** (KRINKO 2015, EAUN 2021):

| Material | Max. Liegezeit | Eigenschaften |
|----------|----------------|---------------|
| Latex / PVC | 5 Tage | Günstig, reizt Schleimhaut, Latex-Allergie möglich |
| Silikonisierter Latex | 14 Tage | Beschichtet, weniger Reizung |
| Vollsilikon | 4-6 Wochen | Biokompatibel, teuer, bevorzugt für Langzeit |
| Antimikrobiell beschichtet (Silber/Nitrofurazon) | variabel | NICHT als Standardprophylaxe empfohlen (KRINKO 2015) — nur in Ausnahmen |

**Größen (Charrière-Skala):** 1 Ch = 1/3 mm Außendurchmesser. Also: 12 Ch = 4 mm, 16 Ch = 5,3 mm.
- Frauen/Männer Erwachsene: 12-16 Ch
- Kinder: 8-10 Ch
- Säuglinge: 6-8 Ch

**Regel**: So dünn wie möglich, so dick wie nötig. Ein zu dicker Katheter verletzt die Harnröhre, ein zu dünner kann durch Sekret verstopfen. Farbcode am Katheteransatz zeigt die Größe (standardisiert)."

**B1 (620 Zeichen):**
"**Materialien und wie lange sie liegen dürfen:**

- **Latex/PVC**: max 5 Tage. Billig, aber reizt die Haut. Manche sind allergisch.
- **Silikonisierter Latex**: max 14 Tage. Beschichtet, weniger Reizung.
- **Vollsilikon**: 4-6 Wochen. Gut verträglich, teuer. Für lange Zeit.
- **Antimikrobiell beschichtet**: NICHT zur Standardprophylaxe (KRINKO 2015). Nur in speziellen Fällen.

**Größen — Charrière (Ch):** 1 Ch = 1/3 Millimeter.
- Erwachsene (Frau und Mann): 12-16 Ch
- Kinder: 8-10 Ch
- Babys: 6-8 Ch

**Regel**: So dünn wie möglich, so dick wie nötig. Zu dick = Harnröhre kaputt. Zu dünn = verstopft. Die Farbe am Katheter-Ende zeigt die Größe."

- **Erklärungs-Step:** stepType `text` (displayFormat: table)
- **Glossar-Begriffe:** [Charrière, Ch, Latex, Silikon, biokompatibel, antimikrobiell]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Je dicker der Katheter, desto besser der Abfluss"**
- **Fachbegriff:** Dick-ist-besser-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — ein zu dicker Katheter verletzt die Harnröhrenschleimhaut und erhöht das **Risiko für Via falsa und Striktur** (Harnröhrenverengung). Standard bei Erwachsenen: 12-16 Ch. Nur bei starkem Sediment/Blut: 18-22 Ch. Merke: So dünn wie möglich, so dick wie nötig."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — ein zu dicker Katheter macht die Harnröhre kaputt. Zu dick tut weh und macht Narben. Normal: 12-16 Ch. Nur bei Blut oder viel Sediment nimmt man dicker. Merke: So dünn wie möglich, so dick wie nötig."

**D2: "Silber-beschichtete Katheter verhindern Harnwegsinfektionen"**
- **Fachbegriff:** Silber-Prophylaxe-Mythos
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die **KRINKO (2015) empfiehlt antimikrobielle Katheter NICHT als Standardprophylaxe**. Die Evidenz zeigt kaum Vorteil bei Langzeit, und sie sind deutlich teurer. Die beste Infektionsprophylaxe ist: Kurze Liegezeit + sterile Anlage + geschlossenes System. Nicht das Material."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die KRINKO sagt: Silber-Katheter verhindern **keine** Infektionen. Sie sind teuer und bringen wenig. Besser ist: Katheter kurz drin lassen, steril anlegen, geschlossenes System. Merke: Nicht das Material schützt, sondern die Technik."

**D3: "Ch steht für Zentimeter"**
- **Fachbegriff:** Ch-Einheiten-Verwechslung
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — **Ch steht für Charrière**, einer französischen Größeneinheit für den Außendurchmesser. 1 Ch = 1/3 mm = 0,33 mm. Also: 12 Ch = 4 mm, 18 Ch = 6 mm. Zentimeter wäre viel zu groß für einen Katheter. Merke: Ch = Drittel Millimeter, nicht cm."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — **Ch** heißt **Charrière**. Das ist eine besondere Einheit: 1 Ch = 1/3 mm. Also 12 Ch = 4 mm. Zentimeter wäre viel zu groß. Merke: Ch ist ein Drittel Millimeter, nicht cm."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. Material bestimmt Liegezeit: Latex/PVC 5 Tage, silikonisierter Latex 14 Tage, Vollsilikon 4-6 Wochen. Antimikrobielle Beschichtungen sind laut KRINKO 2015 KEINE Standardprophylaxe. Größe in Charrière (1 Ch = 1/3 mm): Erwachsene 12-16 Ch, Kinder 8-10 Ch."

**B1 (235 Zeichen):** "Sehr gut. Material = Liegezeit: Latex 5 Tage, Silikon-Latex 14 Tage, Silikon 4-6 Wochen. Silber-Katheter sind keine Standardprophylaxe. Größe in Charrière: 1 Ch = 1/3 mm. Erwachsene 12-16 Ch, Kinder 8-10 Ch."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet 12 Ch in mm? Welche Größe für Erwachsene?"
- **Rückseite:** "1 Ch = 1/3 mm. 12 Ch = 4 mm. Erwachsene: 12-16 Ch. Kinder: 8-10 Ch."
- **Kategorie:** fachbegriff

---

## Baustein 3: indikationen-krinko

### Metadaten
- **bausteinId:** blasenkatheter-indikationen
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 15 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, eine Kollegin sagt: 'Die inkontinente Frau M. legen wir einen Katheter, das ist einfacher für die Pflege.' Ist das eine korrekte Indikation? Warum ja oder nein?"
- **Step-Typ:** freetext (Bloom 4, kritisches Denken)

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "KRINKO (2015) nennt 5 zulässige Indikationen: 1) perioperativ (OP, bestimmte Eingriffe), 2) akuter Harnverhalt/Urinretention, 3) stundengenaue Bilanzierung (Intensiv), 4) Dekubitus + Inkontinenz (Wundheilung!), 5) Palliation/Komfort am Lebensende."

**B1 (235 Zeichen):** "Die KRINKO (2015) sagt: Ein Dauerkatheter ist nur in 5 Fällen erlaubt: 1) vor/nach OP, 2) Blase kann nicht mehr entleeren, 3) Urin muss genau gemessen werden (Intensiv), 4) Dekubitus + Inkontinenz (Wunde soll heilen), 5) am Lebensende für Komfort."

- **Step-Typ:** reveal (5 Indikationen vs. 5 Nicht-Indikationen)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"**Zulässige Indikationen** (KRINKO 2015, CDC/HICPAC 2009):

1. **Perioperativ** — bei ausgewählten operativen Eingriffen (Urologie, Gynäkologie, lange OPs)
2. **Akute Urinretention / Harnverhalt** — Blase kann nicht spontan entleeren
3. **Stundengenaue Bilanzierung** — bei kritisch Kranken (Intensiv, Schock, akutes Nierenversagen)
4. **Sakrale / perineale Wunden bei Inkontinenz** — Dekubitus heilt nicht, wenn Urin auf die Wunde läuft
5. **Palliativversorgung** — Komfort am Lebensende, wenn Umlagern Schmerzen verursacht

**NICHT erlaubte Indikationen** (häufige Fehler!):
- ❌ Reine Harninkontinenz als alleinige Indikation
- ❌ Pflegeerleichterung (Zeitersparnis)
- ❌ Urinkulturen sammeln (außer bei bestehendem Katheter)
- ❌ Bequemlichkeit des Teams / Angehöriger
- ❌ Sturzprophylaxe (Patient soll nicht aufstehen)

**Grundregel**: Jeden Tag neu prüfen — kann er raus? So kurz wie möglich = Maximum-Regel. (KRINKO 2015)"

**B1 (620 Zeichen):**
"**Wann darf man einen Dauerkatheter legen?** (KRINKO 2015):

1. **Vor/nach einer OP** — wenn der Arzt es anordnet
2. **Harnverhalt** — die Blase kann nicht mehr entleeren
3. **Intensivstation** — Urin muss genau gemessen werden (Stunde für Stunde)
4. **Dekubitus am Po + Inkontinenz** — damit die Wunde heilen kann
5. **Am Lebensende** — für Komfort, wenn Umlagern weh tut

**Was ist NICHT erlaubt?**
- ❌ Nur weil jemand inkontinent ist
- ❌ Damit die Pflege schneller geht
- ❌ Um einen Urin-Test zu machen (wenn noch kein Katheter liegt)
- ❌ Damit der Patient nicht aufsteht (Sturz-Angst)

**Wichtig**: Jeden Tag fragen — kann er raus? So kurz wie möglich."

- **Erklärungs-Step:** stepType `classification` (Indikation ja/nein, 10 Fälle)
- **Glossar-Begriffe:** [Indikation, KRINKO, Harnverhalt, Urinretention, Bilanzierung, Palliation]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Inkontinenz alleine ist eine Indikation für den Dauerkatheter"**
- **Fachbegriff:** Inkontinenz-Indikations-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **Inkontinenz allein rechtfertigt KEINEN Dauerkatheter** (KRINKO 2015). Alternativen: Inkontinenz-Einlagen, Kondomurinal (Mann), Toilettentraining, ISK. Ein DK bei reiner Inkontinenz erhöht das Infektionsrisiko ohne Nutzen. Ausnahme: Dekubitus + Inkontinenz zur Wundheilung."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — Inkontinenz allein ist **kein Grund** für einen Dauerkatheter (KRINKO 2015). Besser: Einlagen, Kondomurinal (für Mann), Toilettentraining. Nur wenn auch ein Dekubitus am Po ist, darf man einen Katheter legen (damit die Wunde heilt)."

**D2: "Wenn der Patient nachts oft zur Toilette muss, ist ein Katheter sinnvoll"**
- **Fachbegriff:** Nykturie-Komfort-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **nächtliche Miktion (Nykturie) ist KEINE Indikation**. Ein Katheter birgt jeden Tag 3-10% mehr Infektionsrisiko (KRINKO 2015). Alternativen: Flüssigkeitstiming, Toilettentraining, nahestehende Toilettenstuhl, Nachtlicht. Merke: Komfort rechtfertigt keinen Katheter."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — oft zur Toilette müssen ist **kein Grund** für einen Katheter. Jeder Tag mit Katheter bringt mehr Infektionsgefahr. Besser: abends weniger trinken, Toilettenstuhl nah ans Bett, Nachtlicht. Komfort ist kein Grund für einen Katheter."

**D3: "Zur Sturzprophylaxe darf man einen Katheter legen"**
- **Fachbegriff:** Sturz-Prävention-Fehlgriff
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — ein Katheter zur Sturzprophylaxe ist **nicht indiziert und rechtlich bedenklich** (freiheitsentziehende Maßnahme, KRINKO 2015). Alternativen: Sturzassessment, Niederflurbett, Hüftprotektoren, Bewegungsmelder, Toilettenstuhl. Merke: Sturzangst ist kein medizinischer Grund für einen Katheter."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — einen Katheter gegen Sturz ist **nicht erlaubt**. Das ist eine Einschränkung der Freiheit. Besser: Niedriges Bett, Toilettenstuhl neben dem Bett, Bewegungsmelder. Merke: Angst vor Sturz ist kein Grund, einen Katheter zu legen."

**D4: "Man darf einen Katheter legen, um eine Urinprobe für die Kultur zu bekommen"**
- **Fachbegriff:** Kultur-Indikations-Fehlgriff
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — für eine Urinkultur reicht **Mittelstrahlurin** oder ein **Einmalkatheterismus**. Einen Dauerkatheter nur für die Probe zu legen, ist keine Indikation (KRINKO 2015). Wenn bereits ein Katheter liegt: Probe aus dem Probeentnahmeport, nicht aus dem Urinbeutel."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — für eine Urinprobe reicht Mittelstrahlurin oder ein Einmalkatheter. Einen Dauerkatheter nur für die Probe zu legen, ist kein richtiger Grund. Wenn der Katheter schon liegt: Probe aus dem speziellen Entnahmeport."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Die 5 KRINKO-Indikationen: Perioperativ, Harnverhalt, Bilanzierung (Intensiv), Dekubitus+Inkontinenz, Palliation. Nicht erlaubt: Reine Inkontinenz, Pflegeerleichterung, Urinkulturen ohne vorhandenen Katheter, Sturzprophylaxe. Maximum-Regel: So kurz wie möglich."

**B1 (245 Zeichen):** "Sehr gut. 5 Gründe für einen Dauerkatheter: vor/nach OP, Harnverhalt, Intensivstation, Dekubitus + Inkontinenz, Lebensende. Nicht erlaubt: nur Inkontinenz, Pflege schneller machen, Sturzangst, Urinprobe. Regel: So kurz wie möglich, jeden Tag fragen — kann er raus?"

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne die 5 KRINKO-Indikationen für einen Dauerkatheter."
- **Rückseite:** "1) Perioperativ, 2) Harnverhalt/Urinretention, 3) Stundengenaue Bilanzierung, 4) Dekubitus + Inkontinenz, 5) Palliation. (KRINKO 2015)"
- **Kategorie:** regel

---

## Baustein 4: vorbereitung-material-steril

### Metadaten
- **bausteinId:** blasenkatheter-vorbereitung
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 12 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Was brauchst du, um eine sterile Katheterisierung vorzubereiten? Sammle in eigenen Worten — denk an Material, Umgebung und den Patienten."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Vorbereitung: Händedesinfektion, steriles Katheterset (Lochtuch, Pinzette, Tupfer, Schale), Antiseptikum (z.B. Octenisept), steriles Gleitgel (anästhesierend), Katheter in passender Größe, Urinauffangbeutel (geschlossenes System), sterile Handschuhe, 2. Person."

**B1 (225 Zeichen):** "Was du brauchst: Hände desinfizieren, steriles Katheter-Set (Tuch, Pinzette, Tupfer), Desinfektionsmittel, Gleitgel (mit Betäubung), Katheter in richtiger Größe, Urinbeutel (geschlossenes System), sterile Handschuhe, eine zweite Person."

- **Step-Typ:** checklist (Material-Liste)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"**Sterile Vorbereitung** (KRINKO 2015, CDC/HICPAC 2009):

**Material — geschlossenes System:**
- Steriles Katheterset (Einmalset): Lochtuch, sterile Tupfer, Pinzette, Nierenschale
- **Antiseptikum** (Octenisept, Prontosan — wässrige, schleimhautverträgliche Lösung)
- **Steriles Gleitgel mit Lokalanästhetikum** (z.B. Instillagel — Lidocain) — Einwirkzeit 2-5 Min
- **Katheter** in passender Ch (Erwachsene 12-16, Kinder 8-10)
- **Urinauffangbeutel** mit Rücklaufsperre und Probeentnahmeport
- **Aqua dest.** zum Blocken (5-10 ml, je nach Ballongröße) — **KEIN NaCl!**
- 2 Paar sterile Handschuhe
- Bett absenken, Beleuchtung, Ablagefläche

**Patient:**
- Identifikation, Aufklärung, Einwilligung
- Intimsphäre schützen (Sichtschutz)
- Lagerung: Frau — Rückenlage mit angewinkelten Beinen. Mann — Rückenlage.

**Team:**
- 2-Personen-Prinzip empfohlen (eine desinfiziert, eine führt)

**Prinzip**: Geschlossenes System nie öffnen — Infektionsrisiko!"

**B1 (640 Zeichen):**
"**Was du vorbereiten musst:**

**Material:**
- Steriles Katheter-Set: Tuch, sterile Tupfer, Pinzette
- **Desinfektionsmittel** (z.B. Octenisept) für die Haut
- **Gleitgel mit Betäubung** (z.B. Instillagel) — 2-5 Minuten einwirken lassen
- **Katheter** — richtige Größe: Erwachsene 12-16 Ch, Kinder 8-10 Ch
- **Urinbeutel** mit Rückschlagventil (geschlossenes System!)
- **Aqua dest.** zum Blocken — 5-10 ml (**KEIN NaCl!**)
- 2 Paar sterile Handschuhe

**Patient:**
- Name prüfen, aufklären, Einverständnis holen
- Intimsphäre schützen
- Lagerung: Frau — auf dem Rücken, Beine angewinkelt. Mann — auf dem Rücken, gerade.

**Team:**
- Zu zweit arbeiten (einer desinfiziert, einer führt ein)

**Wichtig**: Das geschlossene System nie aufmachen!"

- **Erklärungs-Step:** stepType `checklist` (Material + Patient + Team)
- **Glossar-Begriffe:** [Antiseptikum, Octenisept, Instillagel, Aqua dest., Lochtuch, geschlossenes System]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Man kann den Katheter-Ballon mit NaCl blocken"**
- **Fachbegriff:** NaCl-Block-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **immer Aqua dest.** (destilliertes Wasser) verwenden. NaCl kann kristallisieren, den Ballon undicht machen oder blockieren. Der Katheter fällt dann raus oder lässt sich nicht entfernen. Herstellerangabe beachten: meist 5-10 ml. Merke: Ballon = Aqua dest., nie NaCl."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — man nimmt **immer Aqua dest.** (destilliertes Wasser). NaCl macht Kristalle. Dann wird der Ballon kaputt und der Katheter fällt raus oder geht nicht raus. Menge: 5-10 ml. Merke: Ballon = Aqua dest., nie NaCl (Kochsalz)."

**D2: "Das Gleitgel ist nur dazu da, dass der Katheter rutscht"**
- **Fachbegriff:** Gleitgel-Unterschätzung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — modernes Katheter-Gleitgel (Instillagel) enthält **Lokalanästhetikum (Lidocain)** und Antiseptikum (Chlorhexidin). Es **betäubt die Harnröhre** und desinfiziert gleichzeitig. Einwirkzeit **2-5 Minuten**! Sonst schmerzhafte Katheterisierung. Merke: Gleitgel betäubt, nicht nur rutscht."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — das Gleitgel hat auch **Betäubung** (Lidocain) und Desinfektion drin. Es betäubt die Harnröhre. Deshalb **2-5 Minuten warten**, bevor du den Katheter einführst. Sonst tut es weh. Merke: Gleitgel macht nicht nur glatt, es betäubt."

**D3: "Sterile Handschuhe reichen — der Rest muss nicht steril sein"**
- **Fachbegriff:** Sterilitäts-Missverständnis
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **alle Materialien**, die mit dem Katheter oder Harnröhreneingang in Kontakt kommen, müssen steril sein: Katheter, Tupfer, Pinzette, Gleitgel (in steriler Verpackung), Antiseptikum. Das **Lochtuch** schafft ein steriles Feld. Unsterile Bereiche: nur das Äußere vor der Desinfektion."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **alles**, was den Katheter oder die Stelle berührt, muss steril sein: Katheter, Tupfer, Pinzette, Gleitgel, Desinfektionsmittel. Das Lochtuch macht einen sterilen Bereich. Nur das außen drum herum ist nicht steril. Merke: Alles drin = steril, nicht nur Handschuhe."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Vorbereitung: Händedesinfektion, steriles Set (Lochtuch, Pinzette, Tupfer), Antiseptikum (Octenisept), Gleitgel mit Lidocain (2-5 Min einwirken!), Katheter in passender Ch, Urinbeutel (geschlossenes System), Aqua dest. zum Blocken (KEIN NaCl!), 2-Personen-Prinzip."

**B1 (255 Zeichen):** "Sehr gut. Vorbereitung: Hände desinfizieren, steriles Set, Desinfektionsmittel, Gleitgel mit Betäubung (2-5 Min warten), richtige Katheter-Größe, Urinbeutel (geschlossenes System), Aqua dest. zum Blocken (nicht NaCl!), zu zweit arbeiten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Womit wird der Katheter-Ballon geblockt? Wie viel?"
- **Rückseite:** "Aqua dest. (destilliertes Wasser), 5-10 ml laut Herstellerangabe. NIEMALS NaCl (kristallisiert, Ballon undicht)."
- **Kategorie:** regel

---

## Baustein 5: katheterisierung-frau

### Metadaten
- **bausteinId:** blasenkatheter-technik-frau
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 15 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Die Harnröhre der Frau ist nur 3-5 cm lang. Wie tief musst du den Katheter vorsichtig einführen, damit er sicher in der Blase liegt? Überlege — warum reicht 3 cm nicht?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Frau: Rückenlage, Beine angewinkelt. Intim-Desinfektion von vorne nach hinten (Labien → Meatus urethrae), Einwirkzeit! Katheter **4-6 cm** einführen bis Urin fließt, dann 2-3 cm vorschieben, Ballon blocken (5-10 ml Aqua dest.)."

**B1 (215 Zeichen):** "Frau: Rückenlage, Beine angewinkelt. Desinfektion von **vorne nach hinten** (nie andersrum!) — Einwirkzeit abwarten. Katheter **4-6 cm** einführen, bis Urin kommt. Dann 2-3 cm weiter. Ballon blocken (5-10 ml Aqua dest.)."

- **Step-Typ:** sequence (Schritte 1-8 sortieren)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"**Katheterisierung der Frau — Schritt für Schritt** (KRINKO 2015, EAUN 2021):

1. **Identifikation, Aufklärung, Einwilligung**
2. **Lagerung**: Rückenlage, Beine aufgestellt/angewinkelt (Gynäkologisch)
3. **Händedesinfektion**, unsterile Handschuhe, Lochtuch legen
4. **Mit nicht-dominanter Hand Labien spreizen** (bleibt kontaminiert — nicht mehr lösen!)
5. **Intim-Desinfektion** mit dominanter Hand, Pinzette + getränkte Tupfer:
   - Immer **von vorne nach hinten** (Vermeidung Fäkal-Keime)
   - 3 Tupfer: rechts, links, Meatus urethrae (Harnröhrenöffnung)
   - **Einwirkzeit Antiseptikum** 30-60 Sek abwarten!
6. **Sterile Handschuhe**, Gleitgel **2-5 Min einwirken lassen**
7. **Katheter 4-6 cm einführen** bis Urin fließt, dann **2-3 cm weiter** vorschieben (Ballon soll in der Blase liegen, nicht in der Harnröhre!)
8. **Ballon blocken** mit 5-10 ml Aqua dest.
9. **Katheter leicht zurückziehen** bis Widerstand (Ballon am Blasenausgang)
10. **Urinbeutel anschließen** (geschlossenes System)
11. **Fixierung am Oberschenkel**, Beutel unterhalb der Blase"

**B1 (640 Zeichen):**
"**Katheter legen bei der Frau — Schritt für Schritt:**

1. Patientin begrüßen, aufklären, Einverständnis
2. **Lagerung**: Rückenlage, Beine angewinkelt
3. Hände desinfizieren, unsterile Handschuhe, Lochtuch
4. **Labien spreizen** mit einer Hand (diese Hand bleibt dreckig, nicht mehr lösen!)
5. **Desinfektion**: Immer **von vorne nach hinten**, 3 Tupfer (rechts, links, Mitte). **30-60 Sekunden warten!**
6. Sterile Handschuhe, **Gleitgel 2-5 Min einwirken**
7. Katheter **4-6 cm einführen** bis Urin kommt, dann **2-3 cm weiter**
8. **Ballon blocken** mit 5-10 ml Aqua dest.
9. Katheter leicht zurückziehen, bis Widerstand kommt
10. Urinbeutel anschließen (nicht öffnen!)
11. Am Oberschenkel fixieren, Beutel **unter** der Blase"

- **Erklärungs-Step:** stepType `sequence` (11 Schritte)
- **Glossar-Begriffe:** [Labien, Meatus urethrae, Harnröhre, blocken, fixieren]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der Katheter wird nur so tief eingeführt, bis Urin kommt"**
- **Fachbegriff:** Ballon-Position-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — wenn Urin fließt, ist die **Ballonposition** noch nicht sicher. Der Katheter muss **2-3 cm weiter vorgeschoben** werden, damit der Ballon **in der Blase** liegt, nicht in der Harnröhre. Sonst: Harnröhre reißt beim Blocken ein (Via falsa). Merke: Urin + 2-3 cm = dann blocken."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — wenn Urin kommt, musst du **2-3 cm weiter** schieben. Sonst liegt der Ballon in der Harnröhre. Wenn du dann aufbläst — **reißt die Harnröhre**. Das heißt Via falsa. Merke: Urin kommt + 2-3 cm weiter, dann aufblasen."

**D2: "Desinfektion von hinten nach vorne ist gleich gut"**
- **Fachbegriff:** Desinfektions-Richtungs-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **immer von vorne nach hinten** desinfizieren (Richtung After). Andersrum zieht du **Darmkeime (E. coli)** zur Harnröhre — Hauptursache für CAUTI! Pro Tupfer **einmal wischen**, dann verwerfen. Die Richtung ist ein zentrales Hygieneprinzip. Merke: Vorne nach hinten, immer."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **immer von vorne nach hinten** desinfizieren. Andersrum ziehst du Darmkeime (E. coli) zur Harnröhre. Das macht Infektionen. Jeder Tupfer einmal benutzen, dann wegwerfen. Merke: Vorne nach hinten, nie andersrum."

**D3: "Die Hand, die die Labien spreizt, darf man wieder lösen, wenn sie verrutscht"**
- **Fachbegriff:** Spreiz-Hand-Kontamination
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die spreizende Hand gilt als **kontaminiert** (sie berührt die unsterile Haut). Wenn du sie löst, **fallen die Labien zurück auf den desinfizierten Bereich** — die Desinfektion ist hinüber. Du musst neu beginnen. Merke: Einmal gespreizt, bleibt gespreizt bis Katheter liegt."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die Hand, die die Labien auseinander hält, bleibt dort. Wenn du loslässt, fallen die Labien auf die desinfizierte Stelle — alles dreckig. Du musst von vorne anfangen. Merke: Einmal gespreizt, bleibt gespreizt, bis der Katheter drin ist."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Frau: Rückenlage mit Beinen angewinkelt. Labien mit nicht-dominanter Hand spreizen und halten. Desinfektion immer von vorne nach hinten, 3 Tupfer, 30-60 Sek Einwirkzeit. Gleitgel 2-5 Min. Katheter 4-6 cm einführen bis Urin, dann 2-3 cm vorschieben, Ballon blocken."

**B1 (260 Zeichen):** "Sehr gut. Frau: Rückenlage, Beine angewinkelt. Labien spreizen (Hand bleibt). Desinfektion von vorne nach hinten, 3 Tupfer, 30-60 Sek warten. Gleitgel 2-5 Min. Katheter 4-6 cm rein bis Urin, dann 2-3 cm weiter. Ballon blocken. Beutel unter die Blase."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie tief wird der Katheter bei der Frau eingeführt?"
- **Rückseite:** "4-6 cm bis Urin fließt, dann noch 2-3 cm weiter vorschieben (damit der Ballon in der Blase liegt, nicht in der Harnröhre). Dann blocken."
- **Kategorie:** handlung

---

## Baustein 6: katheterisierung-mann

### Metadaten
- **bausteinId:** blasenkatheter-technik-mann
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 15 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Die Harnröhre des Mannes ist 20-25 cm lang und hat **Krümmungen**. Was bedeutet das für das Einführen des Katheters? Warum gibt es hier mehr Verletzungsgefahr als bei der Frau?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Mann: Rückenlage. Penis senkrecht (90°) halten → Harnröhre streckt sich. Gleitgel **aktiv instillieren** (10 ml über Glans in die Harnröhre), 5 Min einwirken. Katheter **20-25 cm** einführen (bis Urin), dann Penis absenken, Ballon blocken."

**B1 (225 Zeichen):** "Mann: Rückenlage. Penis **senkrecht nach oben** halten (90°), damit die Harnröhre gerade wird. Gleitgel **in die Harnröhre** geben (10 ml), 5 Minuten warten. Katheter **20-25 cm** einführen, bis Urin kommt. Dann Penis absenken, blocken."

- **Step-Typ:** sequence (Schritte mit Bild der männlichen Anatomie)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"**Katheterisierung des Mannes — Schritt für Schritt** (KRINKO 2015, EAUN 2021):

1. **Identifikation, Aufklärung, Einwilligung**
2. **Lagerung**: Rückenlage, Beine leicht gespreizt
3. **Händedesinfektion**, unsterile Handschuhe, Lochtuch legen
4. **Penis mit nicht-dominanter Hand** greifen (bleibt kontaminiert!), **Vorhaut zurückziehen** (falls vorhanden)
5. **Intim-Desinfektion**: 3 Tupfer — **kreisförmig von der Harnröhrenöffnung nach außen**, **Einwirkzeit 30-60 Sek**
6. **Sterile Handschuhe**, Gleitgel **aktiv in die Harnröhre instillieren** (10 ml), Penis leicht zuhalten, **5 Min einwirken**
7. **Penis senkrecht (90°) halten** — Harnröhre streckt sich
8. **Katheter langsam vorschieben bis 20-25 cm** — erst gerade, bei Widerstand (Beckenboden) Penis leicht **absenken auf 45°**
9. **Kein Gewaltanwenden!** Widerstand bei Prostata-Bereich normal — tief atmen lassen, warten
10. Bei Urinfluss: **noch 2-3 cm weiter vorschieben**, Ballon blocken (5-10 ml Aqua dest.)
11. **Vorhaut zurückziehen** (Paraphimose verhindern!), Beutel anschließen"

**B1 (660 Zeichen):**
"**Katheter legen beim Mann — Schritt für Schritt:**

1. Patient begrüßen, aufklären
2. **Lagerung**: Rückenlage, Beine leicht offen
3. Hände desinfizieren, unsterile Handschuhe, Lochtuch
4. **Penis halten** mit einer Hand (diese Hand bleibt dreckig), **Vorhaut zurück** (wenn da)
5. **Desinfektion**: 3 Tupfer, **kreisförmig von der Mitte nach außen**, 30-60 Sek warten
6. Sterile Handschuhe, **Gleitgel in die Harnröhre spritzen** (10 ml), **5 Min warten**
7. **Penis senkrecht nach oben** halten (90°) → Harnröhre gerade
8. Katheter **20-25 cm einführen** — bei Widerstand Penis leicht **nach unten** (45°)
9. **Keine Gewalt!** Widerstand ist normal — Patient soll tief atmen
10. Wenn Urin kommt: **2-3 cm weiter**, Ballon blocken (5-10 ml Aqua dest.)
11. **Vorhaut wieder nach vorne ziehen!** Sonst: Paraphimose (gefährlich!). Beutel anschließen."

- **Erklärungs-Step:** stepType `sequence` (11 Schritte mit Anatomie-Bild)
- **Glossar-Begriffe:** [Vorhaut, Glans, Harnröhre, Paraphimose, Via falsa, Prostata]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei Widerstand einfach fester drücken, dann geht der Katheter durch"**
- **Fachbegriff:** Gewalt-Katheter-Irrtum
- **Feedback (C1, 310 Zeichen):** "NIEMALS! Widerstand bedeutet meist: Beckenbodenmuskel verkrampft oder Prostata-Passage. **Fester drücken verursacht Via falsa** (die Nadel bohrt ein falsches Loch in die Harnröhre) — massive Blutung, Stenose, Notfall. Richtig: Patient tief atmen lassen, Penis leicht senken (45°), abwarten."
- **Feedback (B1, 270 Zeichen):** "NIEMALS! Widerstand heißt meist: Muskel verkrampft. **Fester drücken macht die Harnröhre kaputt** (Via falsa) — ein falsches Loch, viel Blut, Notfall. Richtig: Patient soll tief atmen, Penis etwas nach unten kippen, warten. Wenn's nicht geht: Arzt holen."

**D2: "Die Vorhaut muss nicht unbedingt wieder zurückgezogen werden"**
- **Fachbegriff:** Paraphimose-Risiko-Unterschätzung
- **Feedback (C1, 310 Zeichen):** "Falsch — **die Vorhaut MUSS nach dem Legen wieder nach vorne** (über die Glans). Sonst: **Paraphimose** — die zurückgezogene Vorhaut schnürt den Penis ab, staut die Lymphe, Gewebe schwillt, kann absterben. Urologischer Notfall! Merke: Vorhaut zurück zum Legen, sofort wieder nach vorne."
- **Feedback (B1, 280 Zeichen):** "Falsch — die Vorhaut **MUSS** wieder nach vorne. Wenn sie hinten bleibt: Sie schnürt den Penis ab (Paraphimose). Das Gewebe schwillt, kann absterben. Das ist ein Notfall! Merke: Vorhaut zurück zum Legen, sofort wieder nach vorne ziehen. Immer!"

**D3: "Der Penis wird beim Legen flach hingelegt"**
- **Fachbegriff:** Penis-Lagerungs-Fehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — den Penis **senkrecht (90°)** halten, damit die **S-förmige Harnröhre sich streckt** und der Katheter gerade passt. Beim Widerstand am Beckenboden leicht **auf 45° absenken**. Flach würde den Katheter an die Harnröhrenwand drücken — Verletzungsrisiko. Merke: 90° → 45°."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — den Penis **senkrecht nach oben halten** (90°). Dann wird die Harnröhre gerade. Bei Widerstand: leicht nach unten kippen (45°). Flach hinlegen macht die Harnröhre krumm, Katheter kann verletzen. Merke: 90°, dann 45° bei Widerstand."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Mann: Rückenlage. Penis mit nicht-dominanter Hand halten, Vorhaut zurück. Desinfektion kreisförmig von innen nach außen, 30-60 Sek. Gleitgel in die Harnröhre instillieren, 5 Min. Penis senkrecht (90°), Katheter 20-25 cm, bei Widerstand auf 45° senken. Ballon. **Vorhaut wieder nach vorne!**"

**B1 (270 Zeichen):** "Sehr gut. Mann: Rückenlage. Penis halten, Vorhaut zurück. Desinfektion kreisförmig, 30-60 Sek. Gleitgel in die Harnröhre, 5 Min warten. Penis senkrecht, Katheter 20-25 cm. Bei Widerstand leicht nach unten. Keine Gewalt! Nach dem Legen: Vorhaut wieder nach vorne!"

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum muss die Vorhaut nach der Katheter-Anlage wieder nach vorne?"
- **Rückseite:** "Sonst Paraphimose — die Vorhaut schnürt den Penis ab, Lymphstau, Gewebsnekrose. Urologischer Notfall! Immer sofort reponieren."
- **Kategorie:** regel

---

## Baustein 7: harnwegsinfektion-cauti

### Metadaten
- **bausteinId:** blasenkatheter-cauti-infektion
- **bloomLevel:** 4
- **wissensart:** zusammenhang
- **zeitBudget:** 15 Min
- **quelleFakten:** [F-08, F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Warum wird ein Katheter mit jedem Tag, den er liegt, gefährlicher? Was passiert genau im Körper? Überlege — was ist der Unterschied zwischen Tag 1 und Tag 10?"
- **Step-Typ:** freetext (Bloom 4, Zusammenhang)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "CAUTI (Catheter-associated Urinary Tract Infection) = **häufigste nosokomiale Infektion** (30-40%, RKI/KISS). Pro Liegetag **3-10% Bakteriurie-Risiko**. Ursache: Biofilm auf Katheter + Aufsteigen durch Lumen/außen. Erreger: E. coli, Enterokokken, Pseudomonas."

**B1 (235 Zeichen):** "CAUTI = Katheter-bedingte Harnwegsinfektion. Das ist die **häufigste Krankenhausinfektion** (30-40%). **Pro Tag** mit Katheter kommen 3-10% mehr Bakterien in die Blase. Warum? Ein Biofilm wächst auf dem Katheter. E. coli steigt auf."

- **Step-Typ:** text (displayFormat: stepbystep — Entstehungsweg)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"**CAUTI — Pathogenese und Epidemiologie** (KRINKO 2015, RKI/KISS 2023, CDC/HICPAC 2009):

**Häufigkeit**: CAUTI ist **die häufigste nosokomiale Infektion**: 30-40% aller Krankenhausinfektionen. Pro Liegetag steigt das **Bakteriurie-Risiko um 3-10%**. Nach 10 Tagen: fast jeder Patient bakteriurisch.

**Entstehungsweg:**
1. **Extraluminal** (außen am Katheter entlang, 65-70% der Fälle) — Keime der Periurethralhaut wandern zwischen Katheter und Harnröhrenwand hoch
2. **Intraluminal** (im Katheter-Lumen, 30-35%) — durch Kontamination beim Beutelwechsel oder Öffnen des Systems
3. **Biofilm**: Innerhalb 72h nach Anlage bildet sich ein Biofilm auf der Katheteroberfläche — Bakterien kleben, vermehren sich geschützt, sind antibiotikaresistent

**Häufigste Erreger** (KISS-Daten):
- E. coli (Darmkeim, 25-30%)
- Enterococcus faecalis (15-20%)
- Pseudomonas aeruginosa (10-15%)
- Klebsiella, Proteus, Candida

**Symptome**: Trübe Urin, stechender Geruch, Fieber, Unterbauchschmerzen. **Bei Alten atypisch**: Verwirrtheit, Delir, Sturz, reduzierter AZ — oft einziges Zeichen!"

**B1 (660 Zeichen):**
"**CAUTI — Infektion durch den Katheter:**

**Wie oft?** CAUTI ist die **häufigste Infektion im Krankenhaus** (30-40%, RKI). **Jeden Tag** mit Katheter kommen 3-10% mehr Bakterien rein. Nach 10 Tagen haben fast alle Patienten Bakterien im Urin.

**Wie kommen die Bakterien rein?**
1. **Außen am Katheter** (65-70%) — Hautkeime wandern hoch
2. **Im Schlauch** (30-35%) — beim Beutelwechsel
3. **Biofilm**: Nach 3 Tagen bildet sich ein Schleim auf dem Katheter. Da kleben Bakterien und vermehren sich. Antibiotika wirken schlecht.

**Welche Keime?**
- **E. coli** (Darmkeim, 25-30%)
- Enterokokken, Pseudomonas, Candida

**Symptome**: Trüber Urin, schlechter Geruch, Fieber, Bauchschmerzen. **Bei alten Menschen oft anders**: Verwirrtheit, Stürze, plötzlich schlecht — das ist oft das einzige Zeichen!"

- **Erklärungs-Step:** stepType `reveal` (Pathogenese-Diagramm + Erreger-Tabelle)
- **Glossar-Begriffe:** [CAUTI, Bakteriurie, Biofilm, nosokomial, E. coli, Delir]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Trüber Urin im Katheter heißt immer Infektion"**
- **Fachbegriff:** Trübung-Infektion-Fehlschluss
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **trüber Urin allein ist keine Diagnose**. Trübung kann auch durch Kristalle, Phosphate, Eiweiß, Nahrung entstehen. Eine **CAUTI braucht Symptome + positive Urinkultur** (KRINKO 2015). Eine reine Bakteriurie ohne Symptome wird NICHT behandelt. Merke: Trüb + Fieber + Schmerz = verdächtig."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — trüber Urin **allein** heißt noch nichts. Kann auch Kristalle oder Essen sein. Eine echte CAUTI braucht: trüb **und** Fieber, Schmerzen oder Verwirrtheit. Nur Bakterien ohne Symptome wird nicht behandelt. Merke: Trüb + krank = verdächtig."

**D2: "Der alte Patient hat keine Infektion, er ist nur verwirrt"**
- **Fachbegriff:** Delir-Atypie-Übersehen
- **Feedback (C1, 315 Zeichen):** "VORSICHT — bei **älteren Patienten** ist Delir/Verwirrtheit oft das **einzige Symptom** einer CAUTI (atypischer Verlauf). Sie haben oft **kein Fieber**, keine Schmerzen, nur plötzliche Wesensveränderung, Sturz, AZ-Verschlechterung. Immer an CAUTI denken! Urin untersuchen + Arzt informieren."
- **Feedback (B1, 275 Zeichen):** "VORSICHT — bei alten Menschen ist Verwirrtheit oft das **einzige Zeichen** einer Infektion. Kein Fieber, keine Schmerzen — nur plötzlich verwirrt, stürzen, schwach. **Immer an CAUTI denken!** Urin-Streifen, Arzt Bescheid sagen. Nicht als 'normale Verwirrtheit' abtun."

**D3: "Je früher man bei Bakteriurie Antibiotika gibt, desto besser"**
- **Fachbegriff:** Antibiotika-Übergebrauch
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — eine **asymptomatische Bakteriurie** (Keime im Urin, aber keine Symptome) wird **nicht behandelt** (KRINKO 2015, AWMF-LL). Antibiotika fördern Resistenzen und lösen oft Candida-Infektion aus. Nur bei **symptomatischer CAUTI** (Fieber, Schmerz, Delir) wird Antibiose begonnen. Antibiotic Stewardship!"
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — wenn nur Bakterien im Urin sind, aber keine Symptome, gibt man **keine Antibiotika** (KRINKO). Antibiotika machen Resistenzen. Nur wenn der Patient **krank** ist (Fieber, Schmerzen, Verwirrtheit) — dann Antibiose. Merke: Keine Symptome = keine Antibiose."

**D4: "Das Spülen des Katheters hilft gegen Infektionen"**
- **Fachbegriff:** Prophylaktisches-Spülen-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **prophylaktisches Spülen wird NICHT empfohlen** (KRINKO 2015, CDC/HICPAC 2009). Jede Öffnung des geschlossenen Systems **bringt NEUE Keime rein**. Spülen nur bei Verstopfung (Blutgerinnsel, Sediment) auf ärztliche Anordnung. Merke: Spülen erhöht das Infektionsrisiko, schützt nicht davor."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Spülen zum Schutz ist **nicht erlaubt**. Jedes Öffnen bringt neue Bakterien rein. Das ist gefährlicher als nichts zu tun. Spülen nur bei Verstopfung und **nur auf Arzt-Anordnung**. Merke: Spülen macht mehr Infektionen, nicht weniger."

### Richtig-Feedback
**C1 (310 Zeichen):** "Genau. CAUTI = häufigste nosokomiale Infektion (30-40%). Pro Tag +3-10% Bakteriurie. Wege: extraluminal (65%) > intraluminal (35%). Biofilm nach 72h. Erreger: E. coli, Enterokokken, Pseudomonas. Symptome: trüb, Fieber, Schmerz — bei Alten oft NUR Delir/AZ-Verschlechterung! Asymptomatisch = nicht behandeln."

**B1 (275 Zeichen):** "Sehr gut. CAUTI ist die häufigste Krankenhaus-Infektion (30-40%). Pro Tag 3-10% mehr Bakterien. Außen am Katheter (65%) oder im Schlauch (35%). Biofilm nach 3 Tagen. Hauptkeim: E. coli. Symptome: trüb, Fieber, Schmerzen — bei Alten oft nur Verwirrtheit! Asymptomatisch = keine Antibiose."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist bei alten Patienten oft das einzige CAUTI-Symptom?"
- **Rückseite:** "Delir / plötzliche Verwirrtheit, AZ-Verschlechterung, Sturz — oft OHNE Fieber oder Schmerz. Atypischer Verlauf! Immer an CAUTI denken."
- **Kategorie:** assessment

---

## Baustein 8: geschlossenes-system-pflege

### Metadaten
- **bausteinId:** blasenkatheter-geschlossenes-system
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 12 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Warum ist das 'geschlossene System' bei einem Dauerkatheter so wichtig? Was passiert, wenn du den Beutel ausleerst und dabei etwas tropft?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Geschlossenes System = Katheter + Ableitungsschlauch + Beutel bleiben **ungetrennt**. Beutel **unterhalb Blasenniveau** (nie höher, nie am Boden). Leeren bei 2/3 voll. Beutelwechsel nur bei System-Defekt oder Wechselzeit. Kein Spülen zur Prophylaxe."

**B1 (225 Zeichen):** "Geschlossenes System = Katheter, Schlauch und Beutel bleiben **zusammen**. Beutel **immer unter der Blase** (nie höher, nie am Boden). Leeren wenn 2/3 voll. Beutel nur wechseln, wenn kaputt. Kein Spülen zum Vorbeugen."

- **Step-Typ:** classification (richtig/falsch: 8 Pflege-Situationen)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"**Geschlossenes System — Pflegeprinzipien** (KRINKO 2015, CDC/HICPAC 2009):

**Was heißt geschlossen?**
Katheter → Ableitungsschlauch → Urinbeutel → Ablasshahn bilden eine **unabhängige Einheit**. Verbindung **nie öffnen** (außer Beutelwechsel bei Defekt).

**Beutel-Position** (wichtig!):
- **Immer unterhalb des Blasenniveaus** → Schwerkraft, kein Rückfluss
- **NIE über Blasenhöhe halten** (z.B. beim Transport) → Reflux (Urin fließt zurück in die Blase)
- **NIE auf dem Fußboden** → Kontaminationsrisiko, außerdem kann Ablasshahn aufstoßen

**Leeren:**
- Bei ca. **2/3 Füllung** (nicht später — Gewicht zieht am Katheter, Reflux)
- **Einmalhandschuhe**, eigenes Gefäß pro Patient, Ablasshahn nicht am Gefäß berühren
- Anschließend Hahn mit Alkoholtuch wischen, Händedesinfektion

**Beutelwechsel:**
- **Nicht routinemäßig wechseln!** Nur bei: Defekt, Leckage, starker Verschmutzung, 7-14 Tage je nach Hersteller
- Bei Wechsel: Hygienisch, Katheter-Ende desinfizieren

**Urinkultur-Probe**: NUR aus dem **Probeentnahmeport** (NIE aus dem Beutel — kontaminiert)."

**B1 (650 Zeichen):**
"**Das geschlossene System — so pflegst du es:**

**Was heißt geschlossen?**
Katheter, Schlauch und Beutel bleiben zusammen. Nie die Verbindung aufmachen!

**Wo hängt der Beutel?**
- **Immer unter der Blase** (Urin läuft runter, nicht hoch)
- **NIE höher halten** (auch nicht beim Transport!) → Urin fließt zurück
- **NIE auf den Boden** → zu viele Keime

**Wann leeren?**
- Wenn der Beutel **2/3 voll** ist (nicht erst wenn er ganz voll ist — zieht sonst am Katheter)
- **Einmalhandschuhe**, eigenes Gefäß für jeden Patient
- Ablasshahn **nicht berühren** beim Leeren
- Nach dem Leeren: mit Alkoholtuch wischen, Hände desinfizieren

**Beutel wechseln:**
- **Nicht routinemäßig!** Nur wenn: kaputt, undicht, dreckig, 7-14 Tage alt
- Urinprobe nehmen: NUR aus dem speziellen Port — NIE aus dem Beutel!"

- **Erklärungs-Step:** stepType `checklist` (Do's and Don'ts)
- **Glossar-Begriffe:** [geschlossenes System, Reflux, Ablasshahn, Probeentnahmeport]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Beim Transport hängt man den Beutel oben am Patientenbett"**
- **Fachbegriff:** Reflux-Transport-Fehler
- **Feedback (C1, 295 Zeichen):** "NIEMALS — wenn der Beutel **über Blasenhöhe** kommt, fließt kontaminierter Urin zurück in die Blase (**Reflux**). Das ist einer der häufigsten CAUTI-Auslöser! Beim Transport: Beutel am Bett-Rahmen **unterhalb der Matratze** oder am Rollstuhl unten fixieren. Merke: Beutel IMMER unter der Blase."
- **Feedback (B1, 260 Zeichen):** "NIEMALS — wenn der Beutel **höher als die Blase** hängt, fließt dreckiger Urin zurück. Das ist einer der Hauptgründe für Infektionen! Beim Transport: Beutel immer **unten** — am Bett unter der Matratze oder am Rollstuhl unten. Merke: Beutel immer unten, nie oben."

**D2: "Der Beutel sollte täglich gewechselt werden — Hygiene!"**
- **Fachbegriff:** Wechsel-Hygiene-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — genau das **Gegenteil** ist richtig (KRINKO 2015, CDC 2009). **Jeder Wechsel = Öffnen des Systems = Keim-Eintritt**. Daher: Beutel so lange wie möglich belassen (7-14 Tage je Hersteller), nur bei Defekt oder starker Verschmutzung wechseln. Routine-Wechsel erhöht das Infektionsrisiko."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — genau andersrum (KRINKO). **Jedes Mal wechseln bringt neue Keime rein**. Also: Beutel so lange wie möglich lassen (7-14 Tage), nur wechseln, wenn kaputt oder sehr dreckig. Merke: Oft wechseln = mehr Infektionen, nicht weniger."

**D3: "Zur Urinkultur entnimmt man aus dem Urinbeutel"**
- **Fachbegriff:** Beutel-Probe-Kontamination
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — der **Urin im Beutel ist immer kontaminiert** (Biofilm, stehender Urin). Für eine Kultur: **Probeentnahmeport** am Schlauch mit Alkohol desinfizieren, Nadel einführen, frischen Urin ziehen. Vorher Schlauch 5-10 Min abklemmen, damit Urin sich ansammelt. Nie aus dem Beutel."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — der Urin im Beutel hat **immer Keime** (steht lang da). Für eine Probe: Den **speziellen Port** am Schlauch benutzen. Mit Alkohol desinfizieren, Nadel rein, frischen Urin ziehen. Vorher 5-10 Min abklemmen. Merke: Immer aus dem Port, nie aus dem Beutel."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Geschlossenes System: nie öffnen. Beutel **unter Blasenniveau** (beim Transport!). Bei 2/3 leeren, Einmalhandschuhe, Ablasshahn sauber. Routine-Wechsel NICHT — nur bei Defekt/Verschmutzung, 7-14 Tage. Urinkultur nur aus Probeentnahmeport, nie aus dem Beutel."

**B1 (260 Zeichen):** "Sehr gut. Geschlossenes System: nie aufmachen. Beutel **immer unter der Blase** (auch beim Transport!). Leeren bei 2/3. Nicht routinemäßig wechseln — nur wenn kaputt. Urinprobe nur aus dem Port, nie aus dem Beutel. Merke: Je weniger öffnen, desto weniger Infektionen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum muss der Urinbeutel unterhalb der Blase hängen?"
- **Rückseite:** "Um Reflux zu vermeiden — kontaminierter Urin fließt sonst zurück in die Blase (häufiger CAUTI-Auslöser). Nie über Blasenhöhe, nie auf den Boden."
- **Kategorie:** regel

---

## Baustein 9: intimpflege-mit-katheter

### Metadaten
- **bausteinId:** blasenkatheter-intimpflege
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 10 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient mit Dauerkatheter muss mindestens 1x täglich im Intimbereich gewaschen werden. Was ist dabei anders als bei einem Patienten ohne Katheter?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Intimpflege **1x täglich** mit **Wasser und pH-neutraler Seife** — KEIN Antiseptikum (KRINKO 2015). Reinigung von Meatus zum Katheter hin (nicht rückwärts Richtung Körper ziehen). Zugrichtung: vom Körper weg. Katheter nicht am Patienten reiben."

**B1 (225 Zeichen):** "Intimpflege **jeden Tag 1x** mit **Wasser und pH-neutraler Seife** — **KEIN Desinfektionsmittel** (KRINKO 2015). Waschen von der Harnröhrenöffnung **weg vom Körper** den Katheter entlang. Den Katheter nicht am Körper reiben."

- **Step-Typ:** sequence (Pflege-Schritte)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"**Intimpflege bei liegendem Katheter** (KRINKO 2015, CDC/HICPAC 2009):

**Grundregel**: Routine-Intimpflege ist wichtig, aber **Antiseptika sind KONTRAINDIZIERT** (keine Prävention, schädigen Schleimhaut, fördern Resistenzen).

**Vorgehen:**
1. **Händedesinfektion, Einmalhandschuhe**
2. **Warmes Wasser + pH-neutrale Waschlotion** (z.B. Sebamed, keine Seife pH 5,5+)
3. **Reinigung der Intimregion**:
   - **Frau**: Von vorne nach hinten, Labien spreizen, Meatus urethrae reinigen
   - **Mann**: Glans, Vorhaut zurückziehen, danach wieder reponieren
4. **Katheter reinigen**: Mit separatem Lappen **von der Harnröhre weg** Richtung Beutel (ca. 10 cm), nie andersherum
5. **Abtrocknen** (feucht = Pilzwachstum)
6. **Fixierung prüfen**: Katheter am Oberschenkel (Frau/Mann) oder Abdomen (Mann bei BVK) locker fixieren — kein Zug, keine Knicke

**Häufigkeit**: 1x täglich Routine, zusätzlich nach Stuhlgang.

**NICHT**: Octenisept, Betaisodona, Alkohol am Katheter — erhöht nicht die Sicherheit, schädigt Haut/Katheter."

**B1 (620 Zeichen):**
"**Intimpflege mit Katheter — so geht's:**

**Wichtig**: Kein Desinfektionsmittel! Nur Wasser und milde Seife (KRINKO 2015).

**Schritte:**
1. Hände desinfizieren, Einmalhandschuhe
2. **Warmes Wasser + milde Waschlotion** (pH-neutral)
3. **Waschen der Intimregion**:
   - **Frau**: Von vorne nach hinten, Labien öffnen, Harnröhren-Eingang mitwaschen
   - **Mann**: Eichel waschen, Vorhaut zurück, nach dem Waschen wieder nach vorne!
4. **Katheter waschen**: Mit extra Lappen **vom Körper weg** Richtung Beutel (ca. 10 cm). **Nie Richtung Körper!**
5. **Gut abtrocknen** (feucht = Pilze)
6. **Katheter fixieren** am Oberschenkel — locker, kein Ziehen, kein Knick

**Wann?** 1 x am Tag, extra nach Stuhlgang.

**NICHT**: Octenisept, Betaisodona, Alkohol — schadet nur."

- **Erklärungs-Step:** stepType `sequence` (6 Pflege-Schritte)
- **Glossar-Begriffe:** [pH-neutral, Fixierung, Meatus urethrae, Reponieren]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Den Katheter täglich mit Octenisept reinigen — dann gibt's weniger Infektionen"**
- **Fachbegriff:** Antiseptikum-Routine-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **Antiseptika als Routinepflege am Katheter werden NICHT empfohlen** (KRINKO 2015, CDC 2009). Studien zeigen keinen Vorteil, aber: Schleimhautreizung, Material-Schädigung des Katheters, Resistenzen. **Wasser + pH-neutrale Seife** reicht. Merke: Waschen ja, desinfizieren nein."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **Desinfektionsmittel bringen nichts** (KRINKO 2015). Sie schaden sogar: reizen die Haut, machen den Katheter kaputt, fördern Resistenzen. Nur Wasser und milde Seife reichen. Merke: Normal waschen ja, desinfizieren nein."

**D2: "Beim Waschen zieht man den Lappen zum Körper hin, damit man alles gut sieht"**
- **Fachbegriff:** Wasch-Richtungs-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **immer vom Körper weg** (Richtung Beutel) wischen. Andersrum schiebt du Keime aus dem Katheter-Schlauch **zur Harnröhre** — direkt in den CAUTI-Weg. Pro Lappen einmal wischen, dann verwerfen. Merke: Weg vom Körper, nicht zum Körper."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **immer vom Körper weg** wischen (Richtung Beutel). Andersrum schiebst du Keime vom Schlauch zur Harnröhre — dann kommt die Infektion. Jeder Lappen einmal, dann weg. Merke: Vom Körper weg, nicht zum Körper hin."

**D3: "Der Katheter wird gar nicht fixiert, damit der Patient Bewegungsfreiheit hat"**
- **Fachbegriff:** Fixierungs-Vergessen
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — der Katheter **muss fixiert** sein (Oberschenkel mit Pflasterband oder Fixier-Gurt). Ohne Fixierung: Zug auf den Ballon bei Bewegung → Harnröhrenverletzung, Blasenreizung. Mit Fixierung: Der Katheter bleibt in Position, der Patient kann sich trotzdem frei bewegen. Merke: Locker, aber fixiert."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — der Katheter muss **fixiert** sein (am Oberschenkel). Ohne Fixierung: Bei jeder Bewegung zieht der Katheter an der Harnröhre — verletzt die Schleimhaut. Locker fixieren, nicht zu stramm. Merke: Fixieren ja, aber locker."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Intimpflege 1x täglich (plus nach Stuhlgang) mit Wasser und pH-neutraler Seife — KEINE Antiseptika (KRINKO 2015). Frau: von vorne nach hinten. Mann: Eichel, Vorhaut zurück/vor. Katheter vom Körper weg wischen. Abtrocknen. Katheter am Oberschenkel fixieren."

**B1 (255 Zeichen):** "Sehr gut. Intimpflege jeden Tag 1x (plus nach Stuhlgang), Wasser + milde Seife — **kein Desinfektionsmittel** (KRINKO 2015). Frau: von vorne nach hinten. Mann: Eichel, Vorhaut zurück und vor. Katheter vom Körper weg wischen. Gut abtrocknen. Am Oberschenkel fixieren."

### Verknüpfte Karteikarte
- **Vorderseite:** "Mit was wird der Intimbereich bei liegendem Katheter gereinigt?"
- **Rückseite:** "Wasser + pH-neutrale Waschlotion, NICHT mit Antiseptika (KRINKO 2015 — keine Evidenz, schadet Haut und Katheter)."
- **Kategorie:** regel

---

## Baustein 10: komplikationen-fruehzeichen

### Metadaten
- **bausteinId:** blasenkatheter-komplikationen
- **bloomLevel:** 4
- **wissensart:** zusammenhang
- **zeitBudget:** 15 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Welche Komplikationen können bei einem Dauerkatheter auftreten? Überlege: Was geht kaputt, wenn ein Fremdkörper lange in einem empfindlichen Organ liegt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Komplikationen: 1) CAUTI (häufigste), 2) Via falsa (falscher Weg beim Legen), 3) Urethra-Striktur (Narbe = Verengung), 4) Ballonverletzung, 5) Urolithiasis (Steine am Katheter), 6) Paraphimose (Vorhaut), 7) Blutung, 8) Harnröhrenreizung/Druckulcus."

**B1 (235 Zeichen):** "Komplikationen beim Dauerkatheter: 1) Infektion (CAUTI, am häufigsten), 2) Harnröhre kaputt (Via falsa), 3) Narbe, 4) Ballon platzt, 5) Steine am Katheter, 6) Paraphimose (Vorhaut), 7) Blutung, 8) Druckstellen in der Harnröhre."

- **Step-Typ:** matching (Komplikation → Maßnahme)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"**Komplikationen des Dauerkatheters — Früherkennung und Maßnahmen:**

| Komplikation | Zeichen | Sofort-Maßnahme |
|--------------|---------|-----------------|
| **CAUTI** (30-40%) | Fieber, trüber Urin, Delir bei Alten, Flankenschmerz | Arzt, Urinprobe, ggf. Katheterwechsel |
| **Via falsa** (beim Legen) | starke Blutung, kein Urinfluss, Schmerz | **Sofort Arzt**, Katheter belassen, blocken nicht! |
| **Urethra-Striktur** | schwieriges Legen, dünner Urinstrahl nach Entfernung | Urologe, Bougierung |
| **Ballon platzt beim Entfernen** | Katheterfragmente in Blase | Arzt, ggf. Zystoskopie |
| **Urolithiasis** (Katheter-Inkrustation) | Katheter verstopft, Urin läuft schlecht | Katheterwechsel, ggf. Spülung |
| **Paraphimose** (Mann) | Geschwollene, schmerzhafte Vorhaut hinten | **Notfall!** Sofort Arzt, manuelle Reposition |
| **Blutung** | Rotes Blut im Urin, Blutkoagel | Arzt, ggf. Spülkatheter, Klemmprobe |
| **Druckulcus Harnröhre** | Schmerz, Sekret, Entzündung | Katheterentfernung, Arzt |

**Wichtige Beobachtung täglich**: Urinmenge, Farbe, Geruch, Schmerzen, Fieber, Harnröhreneingang (Rötung, Sekret). **Pflegerische Dokumentation** essenziell! (AWMF-LL HWI 2017/2024)"

**B1 (680 Zeichen):**
"**Komplikationen und was du tun musst:**

| Was passiert | Zeichen | Was du tust |
|--------------|---------|-------------|
| **CAUTI** (Infektion) | Fieber, trüber Urin, Verwirrtheit | Arzt holen, Urinprobe |
| **Via falsa** (Weg kaputt) | Viel Blut, kein Urin | **Sofort Arzt!** Nicht aufblasen! |
| **Narbe** (Striktur) | Schwacher Urinstrahl später | Urologe |
| **Ballon platzt** | Stücke in der Blase | Arzt |
| **Steine am Katheter** | Katheter verstopft | Neuer Katheter |
| **Paraphimose** (Vorhaut) | Vorhaut hinten, dick, schmerzhaft | **Notfall!** Sofort Arzt |
| **Blutung** | Rot im Urin | Arzt, ggf. Spülkatheter |
| **Druckstelle** | Schmerz, Sekret | Katheter raus, Arzt |

**Jeden Tag beobachten**: Wie viel Urin? Welche Farbe? Riecht er schlecht? Schmerzen? Fieber? Rote Stelle um den Katheter?
**Immer dokumentieren!**"

- **Erklärungs-Step:** stepType `text` (displayFormat: table — 8 Komplikationen)
- **Glossar-Begriffe:** [Via falsa, Striktur, Urolithiasis, Paraphimose, Inkrustation, Bougierung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn beim Legen Blut kommt, drückt man fester, dann geht's schon"**
- **Fachbegriff:** Via-falsa-Gewalt-Fehler
- **Feedback (C1, 310 Zeichen):** "NIEMALS — **Blutung beim Legen + kein Urinfluss = Via falsa** (falscher Weg in die Harnröhrenwand). Fester drücken **vergrößert den Schaden** massiv. Sofortmaßnahmen: Katheter an der Stelle belassen (nicht blocken, nicht ziehen), **sofort Arzt**. Urologischer Notfall! Merke: Blut + kein Urin = STOP."
- **Feedback (B1, 275 Zeichen):** "NIEMALS — Blut beim Legen + kein Urin = **Via falsa** (die Harnröhre ist kaputt, falsche Richtung). Fester drücken macht es nur schlimmer! **Sofort aufhören**, Katheter drin lassen (nicht aufblasen, nicht ziehen), **Arzt holen**. Das ist ein Notfall. Merke: Blut + kein Urin = STOP."

**D2: "Eine Paraphimose löst sich von selbst — man muss nur warten"**
- **Fachbegriff:** Paraphimose-Abwarten-Fehler
- **Feedback (C1, 305 Zeichen):** "NEIN — die Paraphimose ist ein **urologischer Notfall**. Die zurückgezogene Vorhaut schnürt ab, die Lymphe staut, das Gewebe schwillt, kann innerhalb von Stunden **nekrotisieren**. **Sofort manuelle Reposition** versuchen (Arzt oder erfahrene Pflege), sonst Circumcisio. Nie 'abwarten', nie lokal kühlen und hoffen."
- **Feedback (B1, 275 Zeichen):** "NEIN — das ist ein **Notfall**. Die Vorhaut schnürt den Penis ab, das Gewebe schwillt. Innerhalb von Stunden kann das Gewebe absterben. **Sofort Arzt**, der schiebt die Vorhaut vorsichtig zurück. Nie warten! Nie einfach kühlen. Merke: Paraphimose = Notfall, immer sofort Arzt."

**D3: "Wenn der Urin rot ist, ist das normal nach dem Legen"**
- **Fachbegriff:** Haematurie-Unterschätzung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **leichte, rosa-rötliche Verfärbung** kann nach dem Legen vorkommen und klingt in Stunden ab. **Richtig rote Farbe, Koagel oder anhaltende Blutung** sind pathologisch: Arzt informieren. Bei starker Blutung ggf. Umstieg auf 3-Wege-Spülkatheter. Dokumentieren: Farbe, Menge, Dauer. Merke: Rosa ok, Rot nicht."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — ein bisschen **rosa** kann nach dem Legen sein und geht weg. **Richtig rot, mit Klumpen oder länger als 1-2 Stunden** ist nicht normal — Arzt holen. Dann braucht man vielleicht einen Spülkatheter. Immer dokumentieren. Merke: Rosa ok, Rot ist Alarm."

### Richtig-Feedback
**C1 (305 Zeichen):** "Genau. Wichtigste Komplikationen: CAUTI (häufigste, 30-40%), Via falsa (Notfall! Nicht blocken!), Striktur, Ballon-Platzen, Urolithiasis, Paraphimose (Notfall!), Blutung, Druckulcus. Früherkennung durch tägliche Beobachtung: Menge, Farbe, Geruch, Schmerz, Fieber, Harnröhreneingang. Dokumentieren!"

**B1 (275 Zeichen):** "Sehr gut. Wichtigste Komplikationen: Infektion (am häufigsten), Via falsa (Notfall!), Narbe, Ballon-Platzen, Steine, Paraphimose (Notfall!), Blutung, Druckstelle. Jeden Tag beobachten: Menge, Farbe, Geruch, Schmerz, Fieber, Haut um den Katheter. Alles dokumentieren!"

### Verknüpfte Karteikarte
- **Vorderseite:** "Was tust du bei Blutung + kein Urinfluss während der Katheterisierung?"
- **Rückseite:** "STOP! Nicht weiter schieben, nicht blocken. Katheter belassen, SOFORT Arzt — Verdacht auf Via falsa (urologischer Notfall)."
- **Kategorie:** notfall

---

## Baustein 11: katheterentfernung-maximum-regel

### Metadaten
- **bausteinId:** blasenkatheter-entfernung-maximum
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 12 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient hat seit 3 Tagen einen Katheter nach einer Hüft-OP. Er kann wieder selbst aufstehen. Was tust du? Wer entscheidet, wann der Katheter raus kann?"
- **Step-Typ:** freetext (Bloom 4)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "**Maximum-Regel** (KRINKO 2015): Jeder Liegetag erhöht das CAUTI-Risiko — also so **kurz wie möglich**. Tägliche Indikationsprüfung! Vor Entfernung: Blasentraining (3-6h abklemmen) umstritten. Entfernung: Ballon entleeren (nicht blocken!), Katheter zügig ziehen."

**B1 (240 Zeichen):** "**Maximum-Regel** (KRINKO 2015): Der Katheter muss **so kurz wie möglich** liegen. Jeden Tag fragen: Kann er raus? Früher war Blasentraining üblich (abklemmen) — heute umstritten. Ziehen: Ballon **leer machen** (nicht rein!), Katheter raus, fertig."

- **Step-Typ:** sequence (Ablauf Entfernung)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"**Maximum-Regel — Die wichtigste Regel bei Dauerkathetern** (KRINKO 2015, CDC/HICPAC 2009):

> **So kurz wie möglich, so lang wie nötig.**

**Tägliche Indikationsprüfung** (Pflegestandard):
- Ist die Indikation noch gegeben?
- Kann der Patient spontan Wasser lassen?
- Kann stattdessen auf ISK, Kondomurinal oder Einlagen umgestellt werden?
- Bei OP-Patient: Sobald mobil + spontanes Wasserlassen → raus!

**Blasentraining** (früher Standard, heute umstritten):
- Traditionell: Katheter 3-6h vor Entfernung abklemmen, dann öffnen — Blase soll wieder "trainiert" werden
- **Aktuelle Evidenz (Cochrane 2013/2024)**: Kein Vorteil gegenüber direkter Entfernung
- **Heute**: Abklemmen **nicht mehr routinemäßig** empfohlen. Direkt ziehen.

**Entfernung Schritt für Schritt:**
1. Aufklärung, Einmalhandschuhe
2. **Ballon ENTleeren** — mit Spritze passiv absaugen (nicht rein-blocken!)
3. Katheter **langsam, gleichmäßig ziehen** (1-2 Sek)
4. Material in gelben Sack entsorgen, Dokumentation
5. **Beobachtung**: Wann erste Miktion? Restharn? Symptome?
6. Falls nach 6h kein spontanes Wasserlassen: Arzt informieren (Harnverhalt?)"

**B1 (670 Zeichen):**
"**Maximum-Regel — Die wichtigste Regel:**

> **So kurz wie möglich, so lang wie nötig.**

**Jeden Tag fragen** (Pflegestandard):
- Brauchen wir den Katheter noch?
- Kann der Patient wieder selbst Wasser lassen?
- Gibt es eine Alternative (Einmalkatheter, Kondomurinal, Einlagen)?
- Nach OP: Wenn der Patient aufstehen kann + selbst Wasser lassen kann → raus!

**Blasentraining** (früher üblich, heute umstritten):
- Früher: Katheter vor dem Ziehen 3-6 Stunden zuklemmen
- **Heute**: Studien (Cochrane 2024) sagen: Bringt nichts. Einfach direkt ziehen.

**So ziehst du den Katheter:**
1. Patient aufklären, Einmalhandschuhe
2. **Ballon leer machen** — mit Spritze Wasser rausziehen
3. Katheter **langsam und gleichmäßig** rausziehen (1-2 Sek)
4. In gelben Sack, dokumentieren
5. **Beobachten**: Wann pinkelt er wieder? Wieviel Restharn? Schmerzen?
6. Wenn nach 6 Stunden kein Urin kommt: **Arzt informieren** (Harnverhalt)"

- **Erklärungs-Step:** stepType `sequence` (6 Schritte + Beobachtung)
- **Glossar-Begriffe:** [Maximum-Regel, Blasentraining, Miktion, Restharn, Harnverhalt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Vor dem Ziehen muss man den Katheter immer 6 Stunden abklemmen (Blasentraining)"**
- **Fachbegriff:** Blasentraining-Dogma
- **Feedback (C1, 310 Zeichen):** "Nicht mehr — **Blasentraining wird heute nicht mehr routinemäßig empfohlen** (Cochrane 2013/2024, KRINKO 2015). Studien zeigen: Kein Unterschied beim spontanen Wasserlassen, aber längere Katheter-Liegezeit = mehr Infektionen. Die Empfehlung ist: **Direkt ziehen**, nicht mehr abklemmen."
- **Feedback (B1, 275 Zeichen):** "Nicht mehr — **Blasentraining bringt nichts** (Cochrane 2024). Früher hat man abgeklemmt, heute weiß man: Es hilft nicht beim Pinkeln, aber der Katheter liegt länger = mehr Infektionen. Heute: einfach direkt rausziehen. Merke: Abklemmen ist veraltet."

**D2: "Den Ballon lässt man einfach drin, er löst sich schon"**
- **Fachbegriff:** Ballon-Entfernen-Vergessen
- **Feedback (C1, 310 Zeichen):** "NIEMALS — **der Ballon MUSS vor dem Ziehen entleert sein**. Ein gefüllter Ballon ist größer als die Harnröhre → **massive Harnröhrenverletzung bei Zug**, Schmerz, Blutung. Vorgehen: Spritze auf Ballonventil, Flüssigkeit **passiv absaugen** (nie rein-blocken — Rückstau!). Erst wenn Ballon entspannt: ziehen."
- **Feedback (B1, 280 Zeichen):** "NIEMALS — **den Ballon MUSST du erst leer machen**, bevor du ziehst. Sonst: Der Ballon ist dicker als die Harnröhre → große Verletzung, viel Blut, Schmerz. So: Spritze an das Ventil, Wasser **rausziehen** (nicht reindrücken!). Erst wenn Ballon leer: Katheter raus."

**D3: "Nach dem Ziehen muss der Patient sofort pinkeln, sonst liegt ein Harnverhalt vor"**
- **Fachbegriff:** Miktions-Zeitfenster-Fehler
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **bis zu 6 Stunden** warten auf erste spontane Miktion ist normal (v.a. nach längerer Katheterzeit, die Blase muss sich 'erinnern'). Flüssigkeitszufuhr fördert. **Erst nach 6 Stunden** ohne Miktion: Arzt, Blasenscan, ggf. ISK. Merke: 6h Geduld, dann Arzt — nicht sofort alarmiert."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — **6 Stunden warten** ist normal. Die Blase muss sich erst wieder erinnern. Viel trinken hilft. **Erst nach 6 Stunden** ohne Pinkeln: Arzt holen, Blase checken (Ultraschall). Dann vielleicht Einmalkatheter. Merke: 6 Stunden Geduld, dann erst Alarm."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Maximum-Regel: So kurz wie möglich. Tägliche Indikationsprüfung. Blasentraining ist nicht mehr Standard (Cochrane 2024). Entfernung: Ballon passiv ENTleeren, langsam ziehen, dokumentieren. 6h beobachten auf spontane Miktion. Danach Arzt bei Harnverhalt. Flüssigkeitszufuhr fördern."

**B1 (260 Zeichen):** "Sehr gut. Maximum-Regel: so kurz wie möglich. Jeden Tag fragen: Kann er raus? Abklemmen (Blasentraining) ist heute nicht mehr Standard. Ziehen: Ballon leer machen, langsam raus. 6 Stunden auf erstes Pinkeln warten. Viel trinken. Danach Arzt bei Harnverhalt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie entfernt man einen Dauerkatheter korrekt?"
- **Rückseite:** "1) Ballon mit Spritze ENTleeren (passiv absaugen, nie rein!). 2) Katheter langsam ziehen. 3) Dokumentieren. 4) 6h auf erste Miktion warten — dann ggf. Arzt."
- **Kategorie:** handlung

---

## Baustein 12: alternativen-zum-dauerkatheter

### Metadaten
- **bausteinId:** blasenkatheter-alternativen
- **bloomLevel:** 4
- **wissensart:** entscheidung
- **zeitBudget:** 12 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Herr B., 82, hat Inkontinenz und Demenz. Die Familie fragt: 'Kann er einen Katheter bekommen?' Was sind die Alternativen zum Dauerkatheter — und warum sind sie meistens besser?"
- **Step-Typ:** freetext (Bloom 4)

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Alternativen zum DK: 1) **ISK** (Intermittierende Selbstkatheterisierung — Goldstandard bei Restharn), 2) **Kondomurinal** (Mann, bei Inkontinenz), 3) **Inkontinenz-Einlagen/Windeln**, 4) **Toilettentraining** (zeitgesteuerte Miktion), 5) **Toilettenstuhl**."

**B1 (235 Zeichen):** "Alternativen zum Dauerkatheter: 1) **Einmalkatheter (ISK)** bei Restharn, 2) **Kondomurinal** (Kondom mit Schlauch, für Männer), 3) **Einlagen/Windeln**, 4) **Toilettentraining** (feste Zeiten), 5) **Toilettenstuhl** neben dem Bett."

- **Step-Typ:** matching (Situation → Alternative)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"**Alternativen zum transurethralen Dauerkatheter** (KRINKO 2015, EAUN 2021, AWMF):

**1. Intermittierende Selbstkatheterisierung (ISK) — Goldstandard bei Restharn**
- Patient (oder Pflege) katheterisiert sich 4-6x/Tag mit Einmalkatheter
- Bei Neurogener Blase (Querschnitt, MS), Spina bifida, Hypoaktiver Detrusor
- **Vorteil**: kaum CAUTI-Risiko (keine permanente Fremdkörper)
- Technik: sauber, zu Hause nicht steril (Infektionsrisiko < Dauerkatheter)

**2. Kondomurinal (nur Mann, bei Inkontinenz ohne Restharn)**
- Kondom-förmiges Sammelsystem mit Schlauch zu einem Beutel
- **Wichtig**: täglich wechseln, Haut pflegen, nicht zu eng
- Kontraindikation: Hautläsionen, Harnverhalt

**3. Inkontinenz-Hilfsmittel**
- Windeln, Einlagen, Vorlagen
- Täglich mehrmals wechseln, Haut pflegen (Barriere-Creme)
- Keine Infektionsgefahr, aber Dermatitis möglich

**4. Toilettentraining / Timed Voiding**
- Feste Zeiten (alle 2-3h) zur Toilette bringen
- Bei Demenz wirksam, reduziert Inkontinenzepisoden

**5. Toilettenstuhl / Urinflasche**
- Für bettlägerige Patienten mit erhaltener Blasenkontrolle
- Niedrigschwellig, erhält Würde"

**B1 (640 Zeichen):**
"**Alternativen zum Dauerkatheter:**

**1. Einmalkatheter (ISK) — der beste Weg bei Restharn**
- Patient (oder Pflege) macht **4-6 mal am Tag** einen Einmalkatheter
- Gut bei: Querschnittlähmung, MS, schwache Blasenmuskeln
- **Vorteil**: fast keine Infektionen

**2. Kondomurinal (nur Mann)**
- Kondom mit Schlauch, sammelt Urin im Beutel
- **Wichtig**: jeden Tag wechseln, Haut pflegen
- Nicht bei: offener Haut, Harnverhalt

**3. Einlagen / Windeln**
- Oft wechseln, Haut gut pflegen (Creme)
- Keine Infektion, aber Haut kann gereizt werden

**4. Toilettentraining**
- Alle 2-3 Stunden zur Toilette bringen
- Gut bei Demenz, weniger Inkontinenz-Episoden

**5. Toilettenstuhl neben dem Bett**
- Für Menschen im Bett, die noch Bescheid sagen können
- Einfach, würdevoll"

- **Erklärungs-Step:** stepType `reveal` (5 Alternativen aufdecken)
- **Glossar-Begriffe:** [ISK, Kondomurinal, Timed Voiding, Toilettenstuhl, Neurogene Blase]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Kondomurinal kann man auch bei Frauen anwenden"**
- **Fachbegriff:** Kondomurinal-Geschlechter-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht — **Kondomurinale sind nur für Männer** konzipiert. Es gibt zwar 'Urinvorlagen für die Frau' (z.B. Trichtersysteme), aber sie sind **nicht zuverlässig** und selten im klinischen Alltag. Bei Frauen: Einlagen, Windeln, Toilettentraining, ISK. Merke: Kondomurinal = Mann."
- **Feedback (B1, 235 Zeichen):** "Nicht — **Kondomurinal nur für Männer**. Bei Frauen gibt es andere Hilfen: Einlagen, Windeln, Toilettentraining, Einmalkatheter (ISK). Merke: Kondomurinal ist nur für Männer gemacht."

**D2: "ISK ist nur etwas für die Klinik, zu Hause zu kompliziert"**
- **Fachbegriff:** ISK-Komplexitäts-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **ISK ist ein Zuhause-Verfahren**. Patienten mit Querschnittlähmung lernen es schnell (sauberer Einmalkatheter, 4-6x/Tag). Die Technik zu Hause ist **nicht steril, sondern sauber** (EAUN 2021) — und trotzdem infektionsärmer als ein Dauerkatheter. Merke: ISK = Alltags-Autonomie."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — **ISK ist für zu Hause**. Patienten lernen das schnell, machen es 4-6 mal am Tag. Zu Hause muss es **sauber, nicht steril** sein — und hat trotzdem weniger Infektionen als Dauerkatheter. Merke: ISK ist für den Alltag, nicht nur für die Klinik."

**D3: "Bei Demenz geht nur ein Dauerkatheter, weil Toilettentraining nicht klappt"**
- **Fachbegriff:** Demenz-Katheter-Vorurteil
- **Feedback (C1, 310 Zeichen):** "Falsch — **gerade bei Demenz ist Toilettentraining wirksam** und wird empfohlen (feste Zeiten alle 2-3h, Begleitung). Ein Dauerkatheter bei Demenz ist **hochproblematisch**: Verwirrtheit verstärkt sich, Katheterzug, Selbstextraktion, erhöhtes CAUTI-Risiko. Toilettentraining + Einlagen sind hier Goldstandard."
- **Feedback (B1, 275 Zeichen):** "Falsch — **Toilettentraining funktioniert bei Demenz gut**! Feste Zeiten (alle 2-3 Stunden) und Hilfe zur Toilette. Ein Dauerkatheter macht Demenz oft schlimmer (Patient zieht am Katheter, mehr Infektionen). Besser: Toilettentraining + Einlagen. Katheter ist hier keine Lösung."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. 5 Alternativen: ISK (Goldstandard bei Restharn), Kondomurinal (Mann, bei Inkontinenz), Einlagen/Windeln (mit Hautpflege), Toilettentraining (bei Demenz wirksam), Toilettenstuhl (bei bettlägerigen mit Kontrolle). Ein DK ist erst nach Prüfung dieser Alternativen gerechtfertigt."

**B1 (270 Zeichen):** "Sehr gut. 5 Alternativen: Einmalkatheter (ISK) bei Restharn, Kondomurinal (Mann, bei Inkontinenz), Einlagen/Windeln (Haut pflegen!), Toilettentraining (alle 2-3h, gut bei Demenz), Toilettenstuhl. Erst wenn nichts davon reicht: Katheter. Die meisten Menschen brauchen keinen Dauerkatheter."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Goldstandard bei chronischem Restharn (Alternative zum DK)?"
- **Rückseite:** "ISK — Intermittierende Selbstkatheterisierung. 4-6x/Tag Einmalkatheter (sauber, zu Hause nicht steril). Deutlich weniger Infektionen als Dauerkatheter. (EAUN 2021)"
- **Kategorie:** regel

---

## Baustein 13: spuelung-indikation-und-technik

### Metadaten
- **bausteinId:** blasenkatheter-spuelung
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 12 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Die Kollegin sagt: 'Der Katheter ist verstopft, ich spüle mal durch mit Kochsalzlösung.' Darf sie das? Wer entscheidet, wann gespült wird?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Blasenspülung nur **auf ärztliche Anordnung** (§ 630a BGB) bei: Blutkoagel, Obstruktion, nach urologischer OP. Technik: **streng steril**, geschlossenes System beibehalten. **NIEMALS prophylaktisch** (KRINKO 2015). Lösung: NaCl 0,9% steril, körperwarm."

**B1 (235 Zeichen):** "Spülen **nur wenn der Arzt es sagt** (§ 630a BGB). Gründe: Blut-Klumpen, Katheter verstopft, nach OP. **Streng steril** arbeiten. **NIEMALS zum Vorbeugen spülen** (KRINKO 2015). Lösung: NaCl 0,9% steril, körperwarm (nicht kalt!)."

- **Step-Typ:** classification (Spülen ja/nein, 8 Situationen)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"**Blasenspülung — Indikation, Technik, Grenzen** (KRINKO 2015, AWMF-LL):

**Pflegerechtlich**: Blasenspülung ist **ärztlich anordnungspflichtig** (§ 630a BGB, Vorbehaltsaufgabe). Pflege führt nach Anordnung durch.

**Indikationen** (streng begrenzt):
1. **Verstopfung des Katheters** durch Blutkoagel oder Sediment
2. **Nach urologischer Operation** (TURP, Blasentumor) — meist Dauerspülung mit 3-Wege-Katheter
3. **Nach Zystoskopie** zur Reinigung
4. **NICHT zur Infektionsprophylaxe** — ist kontraindiziert

**Technik — Einmalspülung über 3-Wege-Hahn:**
1. Händedesinfektion, sterile Handschuhe
2. **NaCl 0,9% steril, körperwarm** (nicht kalt → Blasenkrampf!)
3. **100-500 ml** mit **steriler Blasenspritze** über Zuleitung
4. Leicht injizieren, **passiv zurücklaufen lassen**
5. **Geschlossenes System** möglichst erhalten (Zugangsport)
6. Dokumentation: Menge, Aussehen Rücklauf

**Dauerspülung (nach OP)**: 3-Wege-Katheter mit NaCl-Beutel, Tropfrate nach Anordnung, Bilanzierung! (Zugabe und Abgang).

**Gefahren**: Keimeinschleppung bei unsterilem Arbeiten, Blasenkrampf bei kaltem Spülen, Überdehnung der Blase."

**B1 (650 Zeichen):**
"**Blasenspülung — wann und wie:**

**Wichtig**: Spülen darf nur **der Arzt anordnen** (§ 630a BGB — Vorbehaltsaufgabe).

**Wann spült man?**
1. **Katheter verstopft** durch Blut oder Sediment
2. **Nach Urologie-OP** (meist Dauerspülung mit 3-Wege-Katheter)
3. **Nach Zystoskopie** zum Reinigen
4. **NIEMALS zum Vorbeugen** von Infektionen (KRINKO 2015)

**So spülst du — Einmalspülung:**
1. Hände desinfizieren, sterile Handschuhe
2. **NaCl 0,9% steril, körperwarm** (nicht kalt — sonst krampft die Blase!)
3. **100-500 ml** mit **steriler Spritze** in den Katheter
4. Leicht reindrücken, **zurücklaufen lassen**
5. System **so wenig wie möglich öffnen**
6. Dokumentieren: Menge, Aussehen (Blut? klar?)

**Dauerspülung nach OP**: 3-Wege-Katheter, NaCl-Beutel, Tropfen nach Plan, Ein- und Ausfuhr rechnen!

**Gefahren**: Keime, Blasenkrampf (bei kaltem Wasser), Blase überdehnen."

- **Erklärungs-Step:** stepType `sequence` (Einmal- + Dauerspülung)
- **Glossar-Begriffe:** [Blasenspülung, NaCl 0,9%, 3-Wege-Katheter, Zystoskopie, TURP, Bilanzierung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Pflege darf ohne Anordnung spülen, wenn der Katheter verstopft ist"**
- **Fachbegriff:** Vorbehaltsaufgaben-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **Blasenspülung ist ärztliche Anordnung** (§ 630a BGB, Vorbehaltsaufgabe). Bei Verstopfung: 1) Katheterlage prüfen, 2) Knick/Klemme? 3) Patient umlagern, 4) Arzt informieren. **Ohne Anordnung nicht spülen** — haftungsrechtlich problematisch. Merke: Anordnung holen, dann durchführen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Spülen geht nur **mit Anordnung vom Arzt** (§ 630a BGB). Wenn der Katheter verstopft: erst prüfen (liegt er richtig? Knick?), dann **Arzt informieren**. Ohne Anordnung nicht spülen — ist rechtlich nicht erlaubt. Merke: Immer erst Arzt fragen."

**D2: "Zum Spülen nimmt man Leitungswasser — das ist steril genug"**
- **Fachbegriff:** Spülflüssigkeits-Fehler
- **Feedback (C1, 305 Zeichen):** "Nein — **NUR sterile NaCl 0,9%** (isoton). Leitungswasser enthält Keime (Pseudomonas, Legionellen), ist hypoton → osmotische Zellschädigung der Blasenschleimhaut. **Keine Desinfektionsmittel** in die Blase (Octenisept, Betaisodona) — schädigt Urothel. Merke: Nur sterile physiologische NaCl."
- **Feedback (B1, 270 Zeichen):** "NEIN — **nur steriles NaCl 0,9%**. Leitungswasser hat Keime und schädigt die Blasenwand. **Keine Desinfektion** in die Blase — das verletzt die Schleimhaut. Nur sterile Salzlösung vom Arzt. Merke: Steriles NaCl, nie anderes."

**D3: "Zum Spülen drückt man die Flüssigkeit mit Druck rein, damit es gut durchgeht"**
- **Fachbegriff:** Druckspülen-Fehler
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **leicht injizieren, nicht drücken**. Hoher Druck: 1) kann die Blase überdehnen, 2) Koagel in die Nieren drücken (Reflux), 3) Blasenkrampf auslösen. Fließt sie nicht zurück: nicht forcieren, Arzt rufen. Regel: **Sanfter Bolus, dann passiv zurücklaufen lassen**. Max 100 ml auf einmal."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **sanft reindrücken, nicht mit Gewalt**. Zu viel Druck: Die Blase kann platzen, Blut wird in die Nieren gedrückt, Blasenkrampf. Wenn nichts zurückkommt: nicht weiter drücken, **Arzt rufen**. Regel: Sanft rein (max 100 ml), dann zurücklaufen lassen."

### Richtig-Feedback
**C1 (300 Zeichen):** "Genau. Blasenspülung nur auf ärztliche Anordnung (§ 630a BGB). Indikationen: Koagel, Obstruktion, nach Urologie-OP. NIEMALS zur Prophylaxe (KRINKO 2015). Technik: Steril, NaCl 0,9% körperwarm, 100-500 ml, sanft injizieren, passiv zurück, System möglichst geschlossen. Dokumentieren."

**B1 (270 Zeichen):** "Sehr gut. Spülung nur mit Arzt-Anordnung. Gründe: Verstopfung, nach OP. Nie zum Vorbeugen! Technik: steril, sterile NaCl 0,9%, körperwarm, 100-500 ml, sanft rein, zurücklaufen lassen, System so wenig wie möglich öffnen. Alles dokumentieren."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was darf Pflege bei verstopftem Katheter SELBST tun, was nicht?"
- **Rückseite:** "Selbst: Lage prüfen, Knick/Klemme kontrollieren, Patient umlagern. NICHT selbst: Blasenspülung — das ist Arzt-Anordnung (§ 630a BGB)."
- **Kategorie:** rechtlich

---





