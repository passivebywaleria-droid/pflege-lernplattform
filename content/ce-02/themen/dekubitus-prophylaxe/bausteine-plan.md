# Wissensbausteine: Dekubitus-Prophylaxe

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `dekubitus-prophylaxe` |
| ceId | `ce-02` |
| cluster | B (Mobilität & Prophylaxen) |
| wissensart | handlung |
| geschaetzteUE | 12 |
| zielzeitMin | 297 (12 UE × 45 × 0,55) |
| bausteineAnzahl | 14 |
| voraussetzungen | `positionierung` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 21% (3 Bausteine), Bloom 3-4: 57% (8 Bausteine), Bloom 5-6: 22% (3 Bausteine)

**Primärquellen:**
- DNQP (2017, 2. Aktualisierung 2024): Expertenstandard Dekubitusprophylaxe in der Pflege
- NPUAP/EPUAP/PPPIA (2019): Clinical Practice Guideline — International Pressure Injury Guideline
- Braden B.J., Bergstrom N. (1987): Original Braden Scale
- Cochrane Review Moore Z. (2022): Repositioning for pressure ulcer prevention
- RKI (2023): Krankenhaus-Hygiene-Daten Prävalenz
- § 1906a BGB (Freiheitsentziehende Maßnahmen)

---

## Baustein 1: dekubitus-definition

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-definition
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Was passiert mit der Haut, wenn sie lange auf etwas Hartes drückt? Stell dir vor, du sitzt 6 Stunden auf einer Holzbank ohne dich zu bewegen."
- **Step-Typ:** freetext (kurz, aktiviert Vorwissen)

### Stufe 2 — Hinweis

**C1 (225 Zeichen):** "Ein Dekubitus ist eine lokale Schädigung der Haut und des darunterliegenden Gewebes durch anhaltenden Druck oder Scherkräfte. Er entsteht meist über Knochenvorsprüngen — Steißbein, Ferse, Trochanter. (NPUAP/EPUAP 2019)"

**B1 (210 Zeichen):** "Ein Dekubitus ist eine Wunde. Sie entsteht, wenn zu lange Druck auf die Haut wirkt. Die Haut und das Gewebe darunter werden kaputt. Meistens an Stellen, wo ein Knochen nah unter der Haut liegt."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (650 Zeichen):**
"Ein Dekubitus ist definiert als **lokale Schädigung der Haut und/oder des darunterliegenden Gewebes**, meist über einem Knochenvorsprung, verursacht durch **Druck allein oder Druck in Kombination mit Scherkräften**. Der Mechanismus: Anhaltender Druck komprimiert Kapillargefäße, die Sauerstoff- und Nährstoffversorgung bricht zusammen, Zellen sterben ab. Scherkräfte (parallele Gegenbewegung zweier Gewebeschichten, z.B. beim Hochrutschen im Bett) verstärken den Schaden auf tieferer Ebene. Wichtige Risikofaktoren: **Immobilität, Sensibilitätsverlust, Mangelernährung, Feuchtigkeit, höheres Alter**. Der Expertenstandard DNQP 2017/2024 nennt Dekubitus 'weitgehend vermeidbar'. (NPUAP/EPUAP 2019)"

**B1 (520 Zeichen):**
"Ein Dekubitus ist eine Wunde an der Haut. Sie entsteht, weil zu lange Druck auf eine Stelle wirkt. So läuft es ab: Der Druck drückt die kleinen Blutgefäße zu. Die Haut bekommt keinen Sauerstoff mehr. Die Zellen sterben. Auch **Scherkräfte** machen es schlimmer. Scherkräfte heißt: Zwei Schichten bewegen sich gegeneinander — zum Beispiel, wenn der Patient im Bett nach unten rutscht. Wer hat ein hohes Risiko? Menschen, die sich wenig bewegen, wenig essen, alt sind oder viel schwitzen. Der DNQP sagt: Dekubitus kann man meistens vermeiden."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Dekubitus, Scherkräfte, Knochenvorsprung, Kapillare]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Dekubitus ist nur eine Hautrötung"**
- **Fachbegriff:** Oberflächlichkeits-Irrtum
- **Feedback (C1, 225 Zeichen):** "Fast — eine nicht-wegdrückbare Rötung ist **Kategorie I** und schon ein Dekubitus. Aber er kann viel tiefer gehen: bis zum Muskel oder Knochen (Kategorie III/IV). Merke: Dekubitus ist nicht immer nur oberflächlich."
- **Feedback (B1, 195 Zeichen):** "Fast — eine Rötung, die nicht weggeht, ist schon ein Dekubitus (Kategorie I). Aber er kann noch viel tiefer werden: bis zum Muskel oder Knochen. Merke: Nicht jeder Dekubitus sieht nur rot aus."

**D2: "Ein Dekubitus ist dasselbe wie ein Ulcus cruris (offenes Bein)"**
- **Fachbegriff:** Wund-Verwechslung
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Dekubitus entsteht durch **Druck**, meist über Knochenvorsprüngen. Ulcus cruris entsteht durch **venöse Stauung** im Unterschenkel, unabhängig vom Druck. Beide sind chronische Wunden, aber die Ursache ist anders. Merke: Dekubitus = Druck. Ulcus cruris = Vene."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — ein Dekubitus entsteht durch Druck. Ein Ulcus cruris (offenes Bein) entsteht durch schlechte Venen im Bein. Beide sind Wunden, aber aus ganz anderen Gründen. Merke: Dekubitus = Druck. Ulcus = Vene."

**D3: "Nur bettlägerige Patienten bekommen einen Dekubitus"**
- **Fachbegriff:** Bettlägerigkeits-Mythos
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — auch **Rollstuhlfahrer**, langzeitsitzende Patienten oder Menschen mit Gipsverband sind gefährdet. Wichtig ist nicht 'im Bett liegen', sondern **anhaltender Druck auf eine Stelle**. Auch ein nicht gepolsterter O2-Schlauch hinter dem Ohr kann einen Dekubitus auslösen."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — auch Menschen im Rollstuhl oder mit Gips können einen Dekubitus bekommen. Wichtig ist nicht 'Liegen', sondern **Druck auf eine Stelle**. Auch ein Schlauch hinter dem Ohr kann einen Dekubitus machen."

### Richtig-Feedback
**C1 (245 Zeichen):** "Genau. Ein Dekubitus ist eine lokale Haut- und Gewebeschädigung durch anhaltenden Druck oder Scherkräfte — meist an Stellen mit wenig Gewebe über dem Knochen. Wichtig: Dekubitus ist laut DNQP zu einem großen Teil vermeidbar, nicht schicksalhaft."

**B1 (210 Zeichen):** "Sehr gut. Ein Dekubitus ist eine Wunde, die durch zu langen Druck entsteht. Meistens da, wo der Knochen nah unter der Haut liegt. Wichtig: Der DNQP sagt, wir können Dekubitus meistens vermeiden."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist ein Dekubitus? (NPUAP/EPUAP-Definition)"
- **Rückseite:** "Lokale Schädigung der Haut und/oder des darunterliegenden Gewebes durch Druck allein oder Druck + Scherkräfte — meist über Knochenvorsprüngen."
- **Kategorie:** fachbegriff

---

## Baustein 2: kategorien-1-bis-4

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-kategorien
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn ein Dekubitus schlimmer wird — was verändert sich mit der Zeit? Beschreibe in eigenen Worten von 'ganz leicht' bis 'sehr schlimm'."
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Die NPUAP/EPUAP-Klassifikation kennt **4 Kategorien**: I = nicht-wegdrückbare Rötung (Haut intakt), II = Teilverlust der Haut (Blase/Erosion), III = Hautverlust bis ins Unterhautfettgewebe, IV = Verlust bis Muskel/Knochen/Sehnen sichtbar."

**B1 (220 Zeichen):** "Ein Dekubitus hat **4 Stufen**: Kategorie I = rote Stelle, die nicht weggeht (Haut noch ganz). Kategorie II = Blase oder offene Stelle. Kategorie III = tiefe Wunde mit Fett. Kategorie IV = Wunde bis zum Muskel oder Knochen."

- **Step-Typ:** comparison (Tabelle mit 4 Kategorien)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die internationale Klassifikation (NPUAP/EPUAP 2019) unterscheidet 4 Kategorien plus 2 Sondertypen:

**Kategorie I** — Nicht-wegdrückbare Rötung bei intakter Haut. Der **Fingertest** ist der Schlüssel: Drückt man auf die Rötung und sie bleibt rot (wird nicht weiß) = Dekubitus I. Bei dunkler Haut zeigt sich oft nur eine Verhärtung, Wärme oder Farbänderung.

**Kategorie II** — Teilverlust der Haut: Es zeigt sich eine flache, offene Wunde (Erosion) oder eine intakte/geöffnete Blase. Die Dermis ist betroffen, Subkutis intakt.

**Kategorie III** — Verlust der Haut bis ins Unterhautfettgewebe. Fettgewebe kann sichtbar werden. Faszien, Muskeln, Knochen nicht freigelegt.

**Kategorie IV** — Vollständiger Hautverlust mit freiliegendem Muskel, Knochen oder Sehne.

**Sondertypen:** 'Nicht einstufbar' (vollständig mit Belag bedeckt) und 'Deep Tissue Injury' (violette/kastanienfarbene intakte Haut mit tiefer Gewebeschädigung darunter). (NPUAP/EPUAP 2019)"

**B1 (555 Zeichen):**
"Ein Dekubitus hat 4 Kategorien und 2 Sonderformen:

**Kategorie I**: Rote Stelle, die nicht weggeht. Haut ist noch ganz. Der **Fingertest**: Du drückst auf die rote Stelle. Bleibt sie rot = Dekubitus. Bei dunkler Haut: Wärme oder harte Stelle.

**Kategorie II**: Blase oder kleine offene Wunde. Nicht tief.

**Kategorie III**: Tiefere Wunde. Das Fett unter der Haut ist zu sehen.

**Kategorie IV**: Sehr tiefe Wunde. Muskel, Knochen oder Sehne sind zu sehen.

**Sonderformen**: 'Nicht einstufbar' (Wunde mit Belag, man sieht nicht, wie tief). **Deep Tissue Injury** (lila Stelle, Haut noch ganz, aber innen ist Gewebe kaputt)."

- **Erklärungs-Step:** stepType `reveal` (4 Kategorien + 2 Sondertypen, aufdecken)
- **Glossar-Begriffe:** [Fingertest, Dermis, Subkutis, Faszie, Deep Tissue Injury]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Eine Blase ist immer Kategorie I"**
- **Fachbegriff:** Blasen-Einstufungs-Fehler
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — eine Blase (intakt oder geöffnet) ist **Kategorie II**. Kategorie I ist nur eine Rötung bei intakter Haut, ohne jede Verletzung. Merke: Sobald die obere Hautschicht durchbrochen ist (Blase, Erosion), sind wir mindestens bei Kategorie II."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — eine Blase ist schon Kategorie **II**. Kategorie I ist nur eine Rötung, die Haut ist noch ganz. Sobald die Haut kaputt ist (Blase, kleine Wunde) = Kategorie II. Merke: Blase = II, nicht I."

**D2: "Wenn die Haut ganz ist, kann es kein Dekubitus sein"**
- **Fachbegriff:** Intakte-Haut-Trugschluss
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — bei **Kategorie I** ist die Haut intakt, aber es ist schon ein Dekubitus (nicht-wegdrückbare Rötung). Noch wichtiger: **Deep Tissue Injury** — die Haut ist intakt, zeigt aber eine lila/kastanienfarbene Verfärbung. Darunter ist das Gewebe bereits geschädigt. Merke: Haut-intakt schließt Dekubitus NICHT aus."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — auch bei ganzer Haut kann es ein Dekubitus sein. Kategorie I: Rote Stelle, aber Haut ganz. Deep Tissue Injury: Lila Stelle, Haut ganz — aber innen ist das Gewebe schon kaputt. Merke: Ganze Haut bedeutet nicht 'kein Dekubitus'."

**D3: "Kategorien darf man zurück-einstufen, wenn die Wunde heilt"**
- **Fachbegriff:** Rückstufungs-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — Kategorien werden **nicht rückwärts** gezählt. Ein Kategorie-IV-Dekubitus, der zu einem flachen Defekt heilt, bleibt ein 'heilender Kategorie-IV-Dekubitus' — nicht plötzlich Kategorie II. Grund: Das Gewebe heilt anatomisch anders (Narbengewebe). Merke: Einmal IV, immer IV."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — wenn ein Dekubitus heilt, bleibt die Kategorie. Ein Kategorie IV wird nicht zu Kategorie II, auch wenn die Wunde kleiner wird. Grund: Das neue Gewebe ist eine Narbe, nicht echte Haut. Merke: Die Kategorie geht nur nach oben, nie nach unten."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Die 4 Kategorien: I (nicht-wegdrückbare Rötung), II (Blase/Erosion), III (Haut-Fettgewebe), IV (Muskel/Knochen/Sehne). Plus: 'Nicht einstufbar' (Belag verdeckt Tiefe) und Deep Tissue Injury (innere Schädigung bei intakter Haut). Wichtig: Fingertest für Kategorie I."

**B1 (245 Zeichen):** "Genau. Die 4 Stufen: I = rote Stelle, Haut ganz. II = Blase oder kleine Wunde. III = tiefe Wunde mit Fett. IV = Muskel oder Knochen zu sehen. Dazu: Nicht einstufbar (Belag) und Deep Tissue Injury (innen kaputt). Wichtig: Der Fingertest für Kategorie I."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Fingertest bei Dekubitus Kategorie I?"
- **Rückseite:** "Finger drücken auf die Rötung. Bleibt sie rot (wird nicht weiß) = Dekubitus Kategorie I."
- **Kategorie:** assessment

---

## Baustein 3: entstehungsfaktoren

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-entstehung
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient liegt 4 Stunden ohne Umlagerung im Bett. Was passiert in seiner Haut und im Gewebe darunter? Beschreibe die Kette bis zur Wunde."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Druck × Zeit = Dekubitus. Die **Intensität** (wie hoch) und die **Dauer** (wie lange) entscheiden gemeinsam. Dazu kommen Scherkräfte (parallele Verschiebung) und Friktion (Reibung). Wichtig: Auch kurzer, sehr hoher Druck kann ausreichen."

**B1 (215 Zeichen):** "Druck und Zeit machen den Dekubitus. Zwei Dinge entscheiden: **Wie stark** drückt es (Intensität) und **wie lange** (Dauer). Dazu: Scherkräfte (gegeneinander verschieben) und Reibung. Auch kurzer, starker Druck reicht."

- **Step-Typ:** text (displayFormat: analogy — "Druck ist wie ein Schraubstock")

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Die Entstehung folgt einer klaren Kette: **Druck** komprimiert die Kapillargefäße in der Haut und im Gewebe. Bei normaler Gewebsdurchblutung liegt der Kapillardruck bei ca. 32 mmHg. Wird dieser Wert überschritten (z.B. beim Liegen auf dem Steißbein: 40-60 mmHg), bricht die Sauerstoffversorgung der Zellen zusammen (Ischämie). Nach ca. 30-120 Minuten beginnt die Zellschädigung. Ohne Druckentlastung sterben Zellen ab (Nekrose) — und es entsteht ein Dekubitus.

**Zusätzliche Faktoren:**
- **Scherkräfte**: Parallele Verschiebung zwischen Gewebeschichten (z.B. beim Hochrutschen im Bett). Sie schädigen die tiefen Gewebe stärker als reiner Druck.
- **Friktion (Reibung)**: Oberflächliche Haut-Abscheuerung — fördert Kategorie-II-Dekubiti.
- **Feuchtigkeit**: Mazeriert die Haut und senkt ihre Widerstandskraft.

**Formel im Kopf**: Druck + Zeit + Scherkräfte + Feuchtigkeit = Dekubitus-Risiko. (NPUAP/EPUAP 2019)"

**B1 (580 Zeichen):**
"So entsteht ein Dekubitus:

**Schritt 1** — Der Druck drückt die kleinen Blutgefäße in der Haut zu.
**Schritt 2** — Die Zellen bekommen keinen Sauerstoff mehr (Ischämie).
**Schritt 3** — Nach 30 bis 120 Minuten ohne Umlagern fangen die Zellen an zu sterben.
**Schritt 4** — Ohne Hilfe wird daraus eine Wunde.

**Dazu kommen:**
- **Scherkräfte**: Wenn der Patient im Bett nach unten rutscht, verschieben sich die Schichten. Das macht tiefe Schäden.
- **Reibung**: Die Haut scheuert an der Matratze. Macht oberflächliche Wunden.
- **Feuchtigkeit**: Nasse Haut ist schwächer. Urin oder Schweiß machen sie kaputt.

Merke: Druck + Zeit + Scherkräfte + Nässe = Wunde."

- **Erklärungs-Step:** stepType `diagram` (Druck-Zeit-Kurve + Ischämie-Kette)
- **Glossar-Begriffe:** [Ischämie, Nekrose, Kapillardruck, Mazeration, Friktion]

### Misconceptions → Distraktoren

**D1: "Nur hoher Druck führt zum Dekubitus — kurze Zeit ist egal"**
- **Fachbegriff:** Druck-Monokausalität
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **Druck × Zeit** entscheidet. Ein moderater Druck über 4 Stunden kann genauso schädlich sein wie ein sehr hoher Druck über 30 Minuten. Deswegen Umlagerung nach einem individuellen Rhythmus, nicht nach fester Regel. Merke: Die Zeit ist genauso wichtig wie die Stärke."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Druck UND Zeit** entscheiden zusammen. Auch mittlerer Druck über 4 Stunden kann schlimm sein. Deswegen lagern wir Patienten regelmäßig um. Merke: Nicht nur wie stark der Druck ist — auch wie lange er drückt."

**D2: "Friktion und Scherkräfte sind dasselbe"**
- **Fachbegriff:** Scherkraft-Friktion-Verwechslung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **Friktion** ist oberflächliche Reibung der Haut an einer Oberfläche (macht Hautabscheuerung). **Scherkräfte** verschieben tiefere Gewebeschichten gegeneinander (machen tiefe Schäden). Beide sind schlecht, aber verschieden. Beispiel Hochrutschen: Friktion an der Haut + Scherkräfte tief im Gewebe."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — das sind zwei verschiedene Dinge. **Friktion** = Reibung oben an der Haut (schält die Haut). **Scherkräfte** = Schichten verschieben sich tief innen (tiefe Schäden). Beim Hochrutschen kommt beides. Merke: Friktion oben, Scherkräfte tief."

**D3: "Feuchtigkeit allein macht keinen Dekubitus"**
- **Fachbegriff:** Feuchtigkeits-Unterschätzung
- **Feedback (C1, 295 Zeichen):** "Fast richtig — Feuchtigkeit allein macht zwar keinen klassischen Dekubitus, aber sie **mazeriert** die Haut (weicht sie auf) und senkt die Widerstandskraft. Bei Inkontinenz kombiniert mit Druck entsteht leicht ein Dekubitus. Es gibt auch die **Inkontinenz-assoziierte Dermatitis (IAD)** als eigene Diagnose."
- **Feedback (B1, 265 Zeichen):** "Fast richtig — Feuchtigkeit allein macht keinen Dekubitus. Aber sie weicht die Haut auf und macht sie schwächer. Dann reicht weniger Druck. Es gibt auch eine eigene Hauterkrankung durch Urin — die IAD (Inkontinenz-assoziierte Dermatitis). Merke: Nässe + Druck = gefährlich."

### Richtig-Feedback
**C1 (270 Zeichen):** "Sehr gut. Die Entstehung: Druck komprimiert Kapillaren → Ischämie → Zellschädigung nach 30-120 Min → Nekrose → Dekubitus. Verstärker: Scherkräfte (tief), Friktion (oberflächlich), Feuchtigkeit. Formel: Druck × Zeit + Scherkräfte + Feuchtigkeit = Risiko."

**B1 (230 Zeichen):** "Sehr gut. So entsteht ein Dekubitus: Der Druck drückt die Blutgefäße zu. Kein Sauerstoff. Nach 30-120 Minuten sterben Zellen. Dazu: Scherkräfte tief innen, Reibung oben, Feuchtigkeit macht die Haut schwächer."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie lange dauert es, bis bei anhaltendem Druck erste Zellschäden entstehen?"
- **Rückseite:** "Ca. 30-120 Minuten (abhängig von Druckhöhe, Gewebequalität und Risikofaktoren). Deswegen regelmäßige Umlagerung."
- **Kategorie:** fakt

---

## Baustein 4: praedilektionsstellen

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-praedilektion
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir einen Patienten in Rückenlage vor. Wo drückt sein Körper am stärksten auf die Matratze?"
- **Step-Typ:** hotspot (Körper-Illustration, Schüler markiert Stellen)

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Prädilektionsstellen sind Körperstellen mit wenig Gewebe über dem Knochen. Je nach Lage: In Rückenlage **Sakrum (46%)**, **Fersen (19%)**, Schulterblätter, Hinterhaupt. In Seitenlage: Trochanter, Malleolen. Im Sitzen: Sitzbeinhöcker, Steißbein."

**B1 (225 Zeichen):** "Prädilektionsstellen = typische Wundstellen. Sie liegen da, wo wenig Gewebe über dem Knochen ist. In Rückenlage: **Steißbein (46%)**, **Ferse (19%)**, Schulterblatt, Hinterkopf. Seitenlage: Hüftknochen, Knöchel. Im Sitzen: Gesäß."

- **Step-Typ:** labelImage (Körper von vorne, hinten, seitlich — Stellen beschriften)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Prädilektionsstellen sind Körperregionen, an denen sich aufgrund der Anatomie häufig Dekubiti bilden: wenig Weichteilpolster über einem **Knochenvorsprung**.

**In Rückenlage** (häufigste Dekubitus-Lokalisationen weltweit):
- **Sakrum/Steißbein** (~46% aller Dekubiti)
- **Ferse** (~19%)
- Hinterhaupt, Schulterblätter, Ellenbogen, Fersen

**In Seitenlage**:
- **Trochanter major** (Hüftknochen)
- Malleolus (Knöchel außen)
- Ohrmuschel, Schulter

**Im Sitzen (z.B. Rollstuhl)**:
- **Sitzbeinhöcker** (Tuber ischiadicum)
- Steißbein

**Sonderstellen durch Medizinprodukte**:
- Nasenrücken (Sauerstoffbrille)
- Ohren (O2-Brille-Schlauch)
- Hinterkopf (Lagerung bei Beatmung)
- Genitalbereich (Dauerkatheter)

Diese **geräte-assoziierten Dekubiti** (medical device-related pressure injuries, MDRPI) machen mittlerweile bis zu 34% aller Dekubiti im Krankenhaus aus. Pflege muss sie aktiv beobachten. (NPUAP/EPUAP 2019, RKI 2023)"

**B1 (560 Zeichen):**
"Prädilektionsstellen sind die typischen Wundstellen. Dort ist wenig Fleisch über dem Knochen.

**In Rückenlage:** Steißbein (46% — am häufigsten!), Ferse (19%), Hinterkopf, Schulterblatt.

**In Seitenlage:** Hüftknochen (Trochanter), äußerer Knöchel, Ohr, Schulter.

**Im Sitzen:** Sitzknochen, Steißbein.

**Durch Geräte:**
- Nase (Sauerstoffbrille)
- Ohren (Schlauch von der Sauerstoffbrille)
- Hinterkopf (bei Beatmung)
- Im Intimbereich (Dauerkatheter)

Diese Dekubiti durch Geräte sind heute sehr häufig: bis zu 34% aller Dekubiti im Krankenhaus. Wichtig: Auch diese Stellen bewusst anschauen."

- **Erklärungs-Step:** stepType `hotspot` (3 Körperansichten — Rücken, Seite, Sitz — Prozente anzeigen)
- **Glossar-Begriffe:** [Sakrum, Trochanter, Malleolus, Tuber ischiadicum, MDRPI]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Am häufigsten entsteht Dekubitus an den Füßen"**
- **Fachbegriff:** Ferse-Überschätzung
- **Feedback (C1, 245 Zeichen):** "Fast — die **Ferse** (19%) ist die zweithäufigste Stelle. Am häufigsten ist das **Sakrum/Steißbein** (~46%). Grund: In Rückenlage trägt das Sakrum das meiste Körpergewicht über eine kleine Fläche. Merke: Steißbein vor Ferse."
- **Feedback (B1, 210 Zeichen):** "Fast — die Ferse ist die **zweit**häufigste Stelle (19%). Am meisten entstehen Dekubiti am Steißbein (46%). In Rückenlage drückt das Steißbein am meisten auf die Matratze. Merke: Steißbein > Ferse."

**D2: "Geräte-Dekubiti (z.B. Sauerstoffbrille) sind selten und unwichtig"**
- **Fachbegriff:** Geräte-Dekubitus-Unterschätzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Medical Device-related Pressure Injuries (MDRPI)** sind heute bis zu **34% aller Dekubiti im Krankenhaus**. Besonders betroffen: Nasenrücken, Ohren (O2-Brille), Hinterkopf (bei Beatmung). Sie werden oft übersehen, weil die Pflege den Fokus auf Sakrum/Ferse legt."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Geräte-Dekubiti sind **häufig**: Bis zu 34% aller Dekubiti im Krankenhaus kommen durch medizinische Geräte. Oft an Nase, Ohren, Hinterkopf. Wichtig: Auch unter Geräten wie der Sauerstoffbrille regelmäßig die Haut anschauen."

**D3: "Bauchlage ist dekubitus-sicher, weil der Patient Polster hat"**
- **Fachbegriff:** Bauchlage-Mythos
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — auch in Bauchlage gibt es Prädilektionsstellen: **Knie**, **Zehen** (bei Spitzfuß), **Schambein**, **Brustbein**, **Stirn**. Besonders in COVID-Zeiten wurde klar: Bauchlagerung schützt vor Sakrum-Dekubitus, schafft aber neue Risikozonen. Merke: Jede Lage hat ihre Stellen."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — auch in Bauchlage gibt es Wundstellen: Knie, Zehen, Schambein, Brustbein, Stirn. In der COVID-Zeit lagen viele Patienten auf dem Bauch — da zeigte sich: Es gibt neue Wundstellen. Merke: Jede Position hat ihre Risikostellen."

### Richtig-Feedback
**C1 (265 Zeichen):** "Gut gesehen. Die Top-Stellen: Sakrum (46%), Ferse (19%), dann je nach Lage Trochanter, Knöchel, Sitzbein. Extra-Achtung: Geräte-Dekubiti (Sauerstoffbrille, Katheter) — bis zu 34% aller Fälle. Pflege-Check: Beim Umlagern alle 2h die Haut kontrollieren."

**B1 (225 Zeichen):** "Gut gesehen. Häufigste Stellen: Steißbein (46%), Ferse (19%). Dann je nach Lage: Hüftknochen, Knöchel, Sitzknochen. Extra: Geräte-Dekubiti (Nase, Ohren durch Sauerstoffbrille). Immer beim Umlagern die Haut anschauen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die häufigste Dekubitus-Lokalisation und zu welchem Anteil?"
- **Rückseite:** "Sakrum/Steißbein — ca. 46% aller Dekubiti. Grund: Rückenlage, kleine Auflagefläche, hoher Druck."
- **Kategorie:** fakt

---

## Baustein 5: braden-skala

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-braden
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Wie könntest du in wenigen Minuten einschätzen, wie hoch das Dekubitus-Risiko eines Patienten ist? Welche 5-6 Dinge würdest du beobachten?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Die **Braden-Skala** ist das international am häufigsten genutzte Risiko-Instrument. Sie hat **6 Items** (sensorische Wahrnehmung, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte) — Gesamtwert **6-23 Punkte**. Risiko: **<18 Punkte**."

**B1 (225 Zeichen):** "Die **Braden-Skala** ist ein Werkzeug, das die Pflege nutzt. Sie hat **6 Punkte**: Sinne, Feuchtigkeit, Aktivität, Mobilität, Essen, Reibung. Jeder bekommt Punkte. Zusammen: **6-23 Punkte**. Weniger als **18 = Risiko**."

- **Step-Typ:** text (displayFormat: checklist — 6 Items)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Die **Braden-Skala** (Braden & Bergstrom 1987) ist das am besten validierte Instrument zur Einschätzung des Dekubitus-Risikos. Sie bewertet 6 Bereiche mit je 1-4 Punkten (außer Reibung/Scherkräfte: 1-3):

1. **Sensorische Wahrnehmung** (1 fehlend — 4 uneingeschränkt): Kann der Patient Druck spüren und darauf reagieren?
2. **Feuchtigkeit** (1 konstant feucht — 4 selten feucht): Wie oft ist die Haut nass?
3. **Aktivität** (1 bettlägerig — 4 läuft regelmäßig): Wie mobil ist der Patient?
4. **Mobilität** (1 vollständig immobil — 4 uneingeschränkt): Kann er sich selbst bewegen?
5. **Ernährung** (1 sehr schlecht — 4 ausgezeichnet): Wie gut isst er?
6. **Reibung und Scherkräfte** (1 Problem — 3 kein Problem): Rutscht er beim Hochziehen?

**Gesamtwert:** 6 (höchstes Risiko) bis 23 (kein Risiko). **Grenzwerte:**
- **≤ 9 Punkte**: sehr hohes Risiko
- **10-12**: hohes Risiko
- **13-14**: mittleres Risiko
- **15-18**: geringes Risiko
- **19-23**: kein Risiko

**Wichtig:** Der DNQP-Expertenstandard 2017/2024 stellt klar — kein einzelnes Instrument ist Pflicht. Klinische Einschätzung ist führend. (Braden & Bergstrom 1987, DNQP 2017/2024)"

**B1 (640 Zeichen):**
"Die **Braden-Skala** ist ein Werkzeug, um das Dekubitus-Risiko einzuschätzen.

**Sie hat 6 Bereiche** mit je 1-4 Punkten (nur Reibung: 1-3):

1. **Sensorik**: Spürt er Druck? (1 = nein, 4 = ja)
2. **Feuchtigkeit**: Ist die Haut oft nass? (1 = immer, 4 = selten)
3. **Aktivität**: Wie viel bewegt er sich? (1 = nur liegen, 4 = läuft)
4. **Mobilität**: Kann er sich selbst bewegen? (1 = nein, 4 = ja)
5. **Ernährung**: Wie gut isst er? (1 = sehr schlecht, 4 = gut)
6. **Reibung/Scherkräfte**: Rutscht er beim Hochziehen? (1 = ja, 3 = nein)

**Gesamt:** 6 bis 23 Punkte. **Wenig Punkte = hohes Risiko.**
- **≤ 9**: sehr hohes Risiko
- **10-12**: hohes Risiko
- **13-14**: mittleres Risiko
- **15-18**: geringes Risiko
- **19-23**: kein Risiko

**Wichtig:** Der DNQP 2017/2024 sagt: Werkzeuge helfen, aber die Pflegekraft denkt selbst."

- **Erklärungs-Step:** stepType `matrix` (Braden-Items × Punkte)
- **Glossar-Begriffe:** [Braden-Skala, Norton-Skala, Assessment, Cut-off]

### Misconceptions → Distraktoren

**D1: "Ein Braden-Wert von 19 bedeutet: Keine Prophylaxe nötig"**
- **Fachbegriff:** Cut-off-Dogmatismus
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — auch bei 19 Punkten kann ein Patient gefährdet sein, wenn **einzelne Items schlecht sind** (z.B. 1 bei Mobilität). Der DNQP 2024 mahnt: **Klinische Einschätzung** zählt mehr als die Summe. Ein mobiler Patient mit Diarrhö (Feuchtigkeit 1) braucht trotz Braden 19 eine Prophylaxe. Merke: Einzelne Items lesen, nicht nur Summe."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — auch mit 19 Punkten kann Gefahr da sein. Wenn ein einzelner Punkt schlecht ist (z.B. Mobilität nur 1), reicht das schon. Der DNQP 2024 sagt: Die Pflegekraft muss selbst denken. Auch ein mobiler Patient mit Durchfall braucht eine Prophylaxe. Merke: Nicht nur die Summe anschauen."

**D2: "Die Braden-Skala ist nur einmal bei Aufnahme nötig"**
- **Fachbegriff:** Statisches-Assessment-Denken
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Re-Assessment ist Pflicht bei **Zustandsveränderung**: Nach OP, bei neuer Erkrankung, nach Mobilitätsverlust, bei Inkontinenz-Beginn. Auch ein zunächst niedriges Risiko kann sich innerhalb von Stunden ändern. Der DNQP empfiehlt: Mindestens wöchentlich + bei Veränderung. Merke: Dynamisch denken."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — die Braden muss immer wieder gemacht werden. Zum Beispiel: Nach einer OP. Bei einer neuen Krankheit. Bei neuer Inkontinenz. Das Risiko kann sich in Stunden ändern. Empfehlung: Mindestens 1× pro Woche + immer bei Veränderung."

**D3: "Je niedriger der Wert, desto besser"**
- **Fachbegriff:** Wert-Richtungs-Umkehr
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — bei der **Braden-Skala gilt: Je NIEDRIGER der Wert, desto HÖHER das Risiko**. Braden 6 = maximales Risiko, Braden 23 = kein Risiko. Das ist wichtig, weil manche Skalen (z.B. Norton in älteren Versionen) umgekehrt funktionieren. Merke: Braden niedrig = Gefahr hoch."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — bei der **Braden** ist es umgekehrt: **Wenig Punkte = hohes Risiko**. 6 Punkte = sehr gefährlich. 23 Punkte = kein Risiko. Andere Skalen (wie Norton früher) funktionieren andersherum. Merke: Braden niedrig = Gefahr."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Die Braden-Skala mit 6 Items (Sensorik, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung) gibt 6-23 Punkte. <18 = Risiko. Aber: Der DNQP 2024 betont — Skalen sind Hilfsmittel, klinische Einschätzung ist führend. Auch einzelne schlechte Items zählen. Re-Assessment bei Veränderung."

**B1 (250 Zeichen):** "Sehr gut. Die Braden-Skala hat 6 Punkte: Sensorik, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung. Ergibt 6-23 Punkte. Weniger als 18 = Risiko. Aber wichtig: Auch einzelne schlechte Punkte zählen. Bei Veränderung neu einschätzen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 6 Items misst die Braden-Skala und welcher Gesamtwert gilt als Risiko-Grenze?"
- **Rückseite:** "Sensorische Wahrnehmung, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Gesamt 6-23 Punkte. <18 = Dekubitus-Risiko."
- **Kategorie:** assessment

---

## Baustein 6: dnqp-expertenstandard

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-dnqp
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du bist Qualitätsbeauftragte in einem Pflegeheim. Welche 5 Punkte müssen deine Pflegekräfte erfüllen, damit möglichst keine Dekubiti entstehen?"
- **Step-Typ:** freetext (Bloom 4)

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Der **DNQP-Expertenstandard Dekubitusprophylaxe** (2017, 2. Aktualisierung 2024) definiert **5 Kriterien**: (1) Risikoeinschätzung, (2) Haut-/Gewebebeurteilung, (3) Bewegung/Druckentlastung, (4) Hilfsmittel, (5) Information/Edukation des Patienten."

**B1 (230 Zeichen):** "Der **DNQP-Expertenstandard Dekubitusprophylaxe** (2017/2024) hat **5 Kriterien**: (1) Risiko einschätzen, (2) Haut anschauen, (3) Druck entlasten (Bewegung), (4) Hilfsmittel nutzen, (5) Patient informieren und anleiten."

- **Step-Typ:** text (displayFormat: checklist — 5 Kriterien)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Der **Expertenstandard 'Dekubitusprophylaxe in der Pflege'** des DNQP (Erstversion 2010, aktuell 2. Aktualisierung 2024) ist für alle Pflegeeinrichtungen in Deutschland **rechtlich verbindlich** (§ 113a SGB XI). Er definiert 5 Kriterien mit dazugehörigen Struktur-, Prozess- und Ergebnisanforderungen:

**K1 — Risikoeinschätzung**: Alle Patienten innerhalb 2h nach Aufnahme einschätzen. Re-Assessment bei Zustandsveränderung.

**K2 — Haut- und Gewebebeurteilung**: Regelmäßige Inspektion gefährdeter Stellen, besonders der Prädilektionsstellen. Dokumentation.

**K3 — Bewegungsförderung und Druckentlastung**: Individueller Bewegungsplan. Umlagerung, Mikrobewegungen, Mobilisation. **Keine feste 2h-Regel mehr** (Aktualisierung 2024) — Zeit individuell bestimmen.

**K4 — Druckverteilende Hilfsmittel**: Wechseldruck-, Weichlagerungsmatratzen. Risikobasierte Auswahl.

**K5 — Information, Anleitung, Beratung**: Patient und Angehörige informieren, anleiten zur Mitbestimmung.

**Rechtliche Bedeutung**: Abweichung vom Standard muss begründet werden. (DNQP 2017/2024)"

**B1 (635 Zeichen):**
"Der **Expertenstandard Dekubitusprophylaxe** vom DNQP (2017, neue Version 2024) gilt für alle Pflegeeinrichtungen in Deutschland. Das Gesetz § 113a SGB XI sagt: Man muss ihn befolgen.

**Er hat 5 Kriterien:**

**K1 — Risiko einschätzen**: Innerhalb von 2 Stunden nach Aufnahme. Bei Veränderung neu.

**K2 — Haut anschauen**: Regelmäßig die gefährdeten Stellen kontrollieren. Aufschreiben.

**K3 — Bewegung und Druck entlasten**: Individueller Plan. Umlagern, kleine Bewegungen, laufen. **Nicht mehr feste 2 Stunden** (neue Version 2024) — jeder Patient braucht seinen eigenen Zeitabstand.

**K4 — Hilfsmittel nutzen**: Wechseldruckmatratze, Weichlagerung — je nach Risiko.

**K5 — Information und Anleitung**: Patient und Angehörige informieren. Gemeinsam entscheiden.

**Wichtig:** Wenn man vom Standard abweicht, muss man das begründen können."

- **Erklärungs-Step:** stepType `reveal` (5 Kriterien mit Detail-Aufklappen)
- **Glossar-Begriffe:** [DNQP, Expertenstandard, § 113a SGB XI, Risikoassessment]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Lagerung alle 2 Stunden ist Pflicht laut DNQP"**
- **Fachbegriff:** 2h-Regel-Dogmatismus
- **Feedback (C1, 340 Zeichen):** "Nicht mehr aktuell — die **2. Aktualisierung 2024** hat die starre 2h-Regel aufgegeben. Stattdessen: **Individueller Zeitabstand** je nach Patient, Unterlage und Risiko. Ein Patient auf einer Wechseldruckmatratze braucht anders als auf einer Standard-Matratze. Merke: Zeitabstand individuell bestimmen, nicht pauschal 2h. Der Standard wurde aktualisiert."
- **Feedback (B1, 290 Zeichen):** "Das war früher so — der neue **DNQP 2024** sagt: Nicht mehr feste 2 Stunden für alle. Jeder Patient braucht seinen eigenen Zeitabstand. Zum Beispiel: Auf einer Wechseldruckmatratze muss man seltener umlagern. Merke: Die Zeit kommt auf den Patienten und die Matratze an."

**D2: "Der Expertenstandard ist nur eine Empfehlung, keine Pflicht"**
- **Fachbegriff:** Empfehlungs-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — der DNQP-Expertenstandard hat **rechtliche Verbindlichkeit** über § 113a SGB XI für alle Pflegeeinrichtungen. Er definiert den 'anerkannten Stand der Wissenschaft'. Abweichungen müssen **schriftlich begründet** sein. Ein Gericht kann sich auf den Standard stützen. Merke: Expertenstandard = rechtliche Grundlage."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — der Expertenstandard ist **Gesetz**. Das sagt § 113a SGB XI. Alle Pflegeeinrichtungen müssen ihn beachten. Wenn man abweicht, muss man es schriftlich begründen. Ein Gericht kann sich darauf stützen. Merke: Expertenstandard = Pflicht."

**D3: "Ausreichend ist, wenn die Haut 1× täglich angeschaut wird"**
- **Fachbegriff:** Kontroll-Frequenz-Irrtum
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — bei gefährdeten Patienten (Braden ≤ 18) gehört die Hautinspektion **bei jeder Umlagerung oder Körperpflege** dazu. Bei hohem Risiko (Braden ≤ 12) ist eine strukturierte Inspektion **mindestens 2× täglich** empfohlen. Einmal täglich reicht nur bei Patienten ohne Risiko. Merke: Frequenz je nach Risiko."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — bei Patienten mit Risiko (Braden ≤ 18) muss man bei jeder Umlagerung und bei der Körperpflege die Haut anschauen. Bei hohem Risiko (Braden ≤ 12): mindestens 2× am Tag. Nur bei Patienten ohne Risiko reicht 1× täglich. Merke: Mehr Risiko = öfter kontrollieren."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. Der DNQP-Expertenstandard 2017/2024 hat 5 Kriterien: (1) Risikoeinschätzung, (2) Hautbeurteilung, (3) Bewegung/Druckentlastung (individueller Zeitabstand!), (4) Hilfsmittel, (5) Information/Anleitung. Er ist über § 113a SGB XI rechtlich verbindlich. Abweichungen müssen begründet werden."

**B1 (260 Zeichen):** "Sehr gut. Der DNQP-Standard 2017/2024 hat 5 Punkte: (1) Risiko einschätzen, (2) Haut anschauen, (3) Bewegen/Umlagern (individuell, nicht mehr fest 2h!), (4) Hilfsmittel, (5) Patient informieren. Er ist Pflicht nach § 113a SGB XI. Abweichen nur mit Begründung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie ist der DNQP-Expertenstandard Dekubitusprophylaxe rechtlich bindend?"
- **Rückseite:** "Über § 113a SGB XI — Pflicht für alle Pflegeeinrichtungen. Abweichungen müssen begründet werden."
- **Kategorie:** recht

---

## Baustein 7: druckentlastung-lagerungsrhythmus

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-lagerung
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Ein bettlägeriger Patient liegt auf dem Rücken. Du hast 12 Stunden Dienst. Wann und wie oft lagerst du ihn um? Begründe."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Der DNQP 2024 hat die starre 2h-Regel aufgegeben. **Individueller Lagerungsrhythmus** je nach Patient, Unterlage und Risiko. Dazu: **Mikrobewegungen** (alle 15-30 Min kleine Lageveränderungen) sind genauso wichtig wie komplette Umlagerungen."

**B1 (225 Zeichen):** "Der DNQP 2024 sagt nicht mehr: 'Alle 2 Stunden umlagern'. Stattdessen: **Individueller Zeitabstand** für jeden Patienten. Genauso wichtig: **Mikrobewegungen** (kleine Bewegungen alle 15-30 Minuten) — nicht nur komplette Umlagerung."

- **Step-Typ:** sequencing (Reihenfolge Mobilisationsstufen: passive Lageänderung → Mikrobewegung → komplette Umlagerung → Aktivitätsförderung)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die Druckentlastung ist das **Kernstück** der Dekubitusprophylaxe. Der DNQP-Standard 2024 gibt die starre 2h-Regel auf und fordert **individuelle Bewegungsplanung**:

**Prinzipien:**
1. **Individueller Zeitabstand** — Richtwert 2-4h, aber je nach Patient und Unterlage (auf Wechseldruckmatratze: 4-6h möglich; auf Standard-Matratze: oft 2h nötig).
2. **30°-Schräglagerung** statt 90°-Seitenlage — reduziert Druck auf Trochanter deutlich.
3. **Mikrobewegungen** — kleine Lageveränderungen (Kissen leicht verschieben) alle 15-30 Min. Auch nicht-beobachtbare Eigenbewegungen beachten.
4. **Aktivitätsförderung** — jede Form von Mobilisation ist Druckentlastung: Aufsitzen, Bettkante, Stehen, Gehen.
5. **'Unterwegs' vermeiden** — nie einen Patienten auf einer Prädilektionsstelle positionieren, die schon gerötet ist.

**Lagerungshilfen:**
- **Freilagerung** von Fersen (nicht nur entlasten, sondern **frei schweben** lassen — Kissen unter Waden)
- **30°-Schräglagerung** (schräg, nicht seitlich)
- **Positionierung V/A/I** (nach Körperform)

**Fehler vermeiden:** Kein Ringkissen (komprimiert randständig), kein Reiben/Massieren geröteter Stellen. (DNQP 2024, Cochrane Moore 2022)"

**B1 (660 Zeichen):**
"Druckentlastung ist das **Wichtigste** bei der Dekubitusprophylaxe. Der DNQP 2024 hat die feste 2-Stunden-Regel weggenommen. Jetzt gilt: **Individuell planen.**

**5 Regeln:**

1. **Individueller Zeitabstand** — Als Richtwert 2-4 Stunden. Auf einer Wechseldruckmatratze oft 4-6 Stunden. Auf normaler Matratze meist 2 Stunden.

2. **30°-Schräglagerung** statt 90°-Seitenlage — drückt weniger auf den Hüftknochen.

3. **Mikrobewegungen** — kleine Bewegungen alle 15-30 Minuten. Kissen leicht verschieben. Auch wenn der Patient sich selbst bewegt — schon das hilft.

4. **Aktivität fördern** — Aufsetzen, Bettkante, Stehen, Gehen. Jede Bewegung entlastet.

5. **Nie auf eine rote Stelle legen!**

**Richtige Hilfsmittel:**
- **Fersen frei schweben** lassen (Kissen unter die Waden)
- **30°-Schräglagerung** (nicht ganz zur Seite)

**Fehler vermeiden:** **Kein Ringkissen** — das drückt am Rand! **Nicht massieren** bei roter Stelle!"

- **Erklärungs-Step:** stepType `comparison` (Tabelle: 90°-Seitenlage vs. 30°-Schräglagerung — Druck auf Trochanter)
- **Glossar-Begriffe:** [30°-Schräglagerung, Mikrobewegung, Freilagerung, Ringkissen, Wechseldruckmatratze]

### Misconceptions → Distraktoren

**D1: "Ein Ringkissen unter dem Steißbein ist optimale Entlastung"**
- **Fachbegriff:** Ringkissen-Mythos
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — Ringkissen sind **kontraindiziert**. Sie entlasten zwar die Mitte, **komprimieren aber randständig** die Gefäße und verschlechtern die Durchblutung des umliegenden Gewebes. Der DNQP empfiehlt stattdessen: **Vollflächig druckverteilende Hilfsmittel** (Weichlagerungskissen, Wechseldruck) oder **Freilagerung**. Merke: Ringkissen = veraltet, sogar schädlich."
- **Feedback (B1, 285 Zeichen):** "Nicht ganz — **Ringkissen sind verboten**. Sie entlasten zwar in der Mitte, aber der Ring drückt auf das Gewebe rundherum und macht es noch schlechter. Besser: weiche Kissen, die den ganzen Bereich entlasten. Oder die Stelle frei schweben lassen. Merke: Kein Ringkissen. Nie."

**D2: "Massieren der roten Stelle fördert die Durchblutung und heilt den Dekubitus"**
- **Fachbegriff:** Massage-Mythos
- **Feedback (C1, 345 Zeichen):** "Nicht ganz — **das ist einer der gefährlichsten Mythen**. Massieren einer geröteten Stelle **schädigt das bereits geschwächte Gewebe zusätzlich** (mechanischer Reiz). Studien zeigen sogar: Massage beschleunigt die Dekubitus-Entstehung. Richtig ist: **Druck entlasten, Haut schonend reinigen, Feuchtigkeit vermeiden.** Merke: Nicht reiben, nicht massieren. Nie."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — **Massieren ist verboten**. Das Gewebe ist schon kaputt. Wenn man reibt, macht man es noch schlimmer. Studien zeigen: Massage macht den Dekubitus schlimmer. Richtig: Druck wegnehmen. Haut sanft waschen. Trocken halten. Merke: Nicht reiben. Nie massieren."

**D3: "Franzbranntwein ist eine bewährte Dekubitus-Prophylaxe"**
- **Fachbegriff:** Franzbranntwein-Irrtum
- **Feedback (C1, 335 Zeichen):** "Nicht ganz — **Franzbranntwein ist kontraindiziert**. Er trocknet die Haut aus (Alkohol), schädigt den Säureschutzmantel und macht die Haut anfälliger. Das war eine Großmutter-Praktik, die heute **wissenschaftlich widerlegt** ist. Der DNQP empfiehlt stattdessen: **pH-neutrale Reinigung und bedarfsgerechte Hautpflege**. Merke: Kein Franzbranntwein."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — **Franzbranntwein ist verboten**. Er trocknet die Haut aus und macht sie schwächer. Das war früher eine Hausmittel-Praktik, heute wissen wir: Sie schadet. Richtig: Die Haut pH-neutral waschen und bei Bedarf eincremen. Merke: Kein Franzbranntwein. Nie."

### Richtig-Feedback
**C1 (300 Zeichen):** "Sehr gut. Die 5 Prinzipien: (1) Individueller Zeitabstand (nicht mehr pauschal 2h!), (2) 30°-Schräglagerung statt 90°-Seitenlage, (3) Mikrobewegungen alle 15-30 Min, (4) Aktivitätsförderung, (5) Nie auf bereits gerötete Stellen. Absolute No-Gos: Ringkissen, Massage, Franzbranntwein."

**B1 (255 Zeichen):** "Sehr gut. Die 5 Regeln: (1) Individueller Zeitabstand (nicht mehr feste 2 Stunden!), (2) 30°-Schräglagerung statt ganz zur Seite, (3) kleine Bewegungen alle 15-30 Minuten, (4) Aktivität fördern, (5) Nie auf rote Stellen legen. Verboten: Ringkissen, Massage, Franzbranntwein."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist die 30°-Schräglagerung besser als die 90°-Seitenlage?"
- **Rückseite:** "30°-Schräglage reduziert den Druck auf den Trochanter major deutlich — 90°-Seitenlage bringt das volle Körpergewicht auf eine kleine Fläche."
- **Kategorie:** handlung

---

## Baustein 8: druckverteilende-hilfsmittel

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-hilfsmittel
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Welche Hilfsmittel kennst du zur Druckentlastung? Welches nimmst du für einen Patienten mit Braden 9 und welches für einen mit Braden 16?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Druckverteilende Hilfsmittel: **Standard-Matratze** (Braden ≥ 15), **Weichlagerungsmatratze** (Braden 12-14), **Wechseldruckmatratze** (Braden ≤ 12 oder bestehender Dekubitus). Zusätzlich: Positionierungskissen, Fersenschützer."

**B1 (220 Zeichen):** "Hilfsmittel für die Druckentlastung: **Normale Matratze** (bei wenig Risiko), **Weichlagerungsmatratze** (mittleres Risiko), **Wechseldruckmatratze** (hohes Risiko oder schon ein Dekubitus). Dazu: Kissen, Fersenschützer."

- **Step-Typ:** comparison (3 Matratzentypen: Indikation, Vorteile, Nachteile)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Druckverteilende Hilfsmittel werden **risikobasiert** ausgewählt:

**Standard-Schaumstoffmatratze** — für Patienten ohne oder mit geringem Risiko (Braden ≥ 15). Ausreichend, wenn Mobilität gut ist.

**Weichlagerungsmatratze (Schaumstoff, Visco-elastisch)** — für mittleres Risiko (Braden 12-14). Verteilt Druck über größere Fläche. Vorteil: Geräuschlos, günstig. Nachteil: 'Ertrinkungsgefühl'.

**Wechseldruckmatratze (Air-Luft-System)** — für hohes Risiko (Braden ≤ 12) oder bestehenden Dekubitus. Luftkammern blasen abwechselnd auf/ab, so entsteht wechselnder Kontakt. Vorteil: Automatische Druckentlastung. Nachteil: Geräuschbelastung, kann Desorientierung fördern.

**Zusätzliche Hilfsmittel:**
- **Fersenschützer / -kissen** — Ferse frei schweben lassen
- **Positionierungskissen** (V/A/I/U-Form)
- **Gleitlaken** (gegen Scherkräfte beim Hochziehen)
- **Sitzkissen** für Rollstuhlfahrer (Roho, Vicair)

**Wichtig**: Hilfsmittel ersetzen **KEINE Bewegung**. Sie sind Ergänzung, nicht Substitut. Auch mit Wechseldruckmatratze bleibt regelmäßiges Umlagern nötig. (DNQP 2024)"

**B1 (600 Zeichen):**
"Es gibt verschiedene Matratzen — je nach Risiko:

**Normale Matratze** — bei wenig Risiko (Braden 15 oder mehr). Genug, wenn der Patient sich gut bewegt.

**Weichlagerungsmatratze** — bei mittlerem Risiko (Braden 12-14). Sie ist weich und verteilt den Druck. Vorteil: Leise und günstig. Nachteil: Einige Patienten fühlen sich wie 'versinkend'.

**Wechseldruckmatratze** — bei hohem Risiko (Braden 12 oder weniger) oder wenn schon ein Dekubitus da ist. Luft in der Matratze wechselt — mal ist eine Stelle aufgeblasen, mal die andere. Vorteil: Automatisch. Nachteil: Sie macht Geräusche. Manche Patienten werden unruhig.

**Weitere Hilfsmittel:**
- **Fersenschützer** — Ferse schwebt frei
- **Positionierungskissen**
- **Gleitlaken** (hilft beim Hochziehen ohne Scherkräfte)
- **Sitzkissen** für Rollstuhl

**Wichtig:** Die Matratze **ersetzt das Umlagern nicht**. Man muss auch mit Wechseldruckmatratze umlagern."

- **Erklärungs-Step:** stepType `matrix` (Braden-Wert × Matratzentyp)
- **Glossar-Begriffe:** [Wechseldruckmatratze, Weichlagerung, Visco-elastisch, Gleitlaken]

### Misconceptions → Distraktoren

**D1: "Mit Wechseldruckmatratze muss man nicht mehr umlagern"**
- **Fachbegriff:** Matratzen-Wundermittel-Mythos
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — eine Wechseldruckmatratze **reduziert** die Umlagerungs-Frequenz, **ersetzt sie aber nicht**. Auch hier gibt es Stellen mit höherem Druck, und Scherkräfte beim Hochziehen bleiben. Der DNQP 2024 stellt klar: Hilfsmittel sind Ergänzung, kein Ersatz für aktive Pflege. Merke: Matratze ergänzt, ersetzt nicht."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — die Wechseldruckmatratze hilft, macht aber nicht alles allein. Auch dort gibt es Stellen mit Druck. Und beim Hochziehen entstehen immer Scherkräfte. Der DNQP 2024 sagt: Matratze ist Hilfe, aber nicht Ersatz. Merke: Auch mit Matratze umlagern."

**D2: "Eine weichere Matratze ist immer besser"**
- **Fachbegriff:** Weichheits-Trugschluss
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — zu weiche Matratzen können **Eigenbewegungen erschweren** (Patient versinkt, muss mehr Kraft aufwenden, um sich zu bewegen). Das fördert Immobilität — und die ist ein Dekubitus-Risiko! Richtige Wahl: Risikobasiert. Bei Rehabilitation oft bewusst festere Matratze für Mobilisation."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — zu weiche Matratzen sind manchmal schlecht. Der Patient versinkt und kann sich schlechter bewegen. Das ist eine Gefahr! Die Wahl kommt auf das Risiko an. Bei Reha nimmt man oft extra eine festere Matratze, damit der Patient sich bewegen kann."

**D3: "Ein Ringkissen unter dem Sitzbein ist ein Hilfsmittel"**
- **Fachbegriff:** Ringkissen-Verwechslung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — Ringkissen sind **kein empfohlenes Hilfsmittel** mehr, sondern **kontraindiziert**. Sie komprimieren randständige Gefäße und verschlimmern die Durchblutung. Richtig für Rollstuhlfahrer: **druckverteilende Sitzkissen** (Roho, Vicair). Merke: Ringkissen ≠ Hilfsmittel, sondern Fehler."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — Ringkissen sind **verboten**. Sie drücken am Rand und machen das Gewebe noch schlechter. Richtig für den Rollstuhl: spezielle Sitzkissen, die den Druck gleichmäßig verteilen (zum Beispiel Roho oder Vicair). Merke: Kein Ringkissen."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Risikobasiert wählen: Standard-Matratze (Braden ≥ 15), Weichlagerung (12-14), Wechseldruckmatratze (≤ 12 oder Dekubitus). Zusätzlich: Fersenschützer, Positionierungskissen, Gleitlaken, Sitzkissen. Aber: Hilfsmittel ersetzen niemals Bewegung und Umlagerung."

**B1 (240 Zeichen):** "Genau. Je nach Risiko: Normale Matratze (Braden 15 oder mehr), Weichlagerung (12-14), Wechseldruck (12 oder weniger, oder bei Dekubitus). Dazu: Fersenschützer, Kissen, Gleitlaken, Sitzkissen. Aber: Matratze ersetzt niemals das Umlagern."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ab welchem Braden-Wert ist eine Wechseldruckmatratze indiziert?"
- **Rückseite:** "Ab Braden ≤ 12 (hohes Risiko) oder bei bereits bestehendem Dekubitus."
- **Kategorie:** handlung

---

## Baustein 9: hautpflege-und-ernaehrung

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-haut-ernaehrung
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Zwei Patienten haben das gleiche Sturzrisiko, aber Patient A isst gut und trinkt viel, Patient B ist mangelernährt. Wer hat das höhere Dekubitus-Risiko? Warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Hautpflege: pH-neutrale Reinigung, **keine Seife**, **keine Alkoholbasis**, bei trockener Haut bedarfsgerecht eincremen (W/O-Emulsion). Ernährung: **Eiweiß** (1,2-1,5 g/kg KG/d) und **Flüssigkeit** (30-35 ml/kg KG/d) sind kritisch."

**B1 (215 Zeichen):** "Hautpflege: pH-neutral waschen (kein Alkohol, keine Seife). Trockene Haut eincremen. Ernährung: Genug **Eiweiß** (1,2-1,5 g/kg Körpergewicht am Tag) und **Trinken** (30-35 ml/kg am Tag). Beides schützt die Haut."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Hautpflege und Ernährung sind oft unterschätzte Prophylaxe-Faktoren.

**Hautpflege-Prinzipien:**
- **pH-neutrale Reinigung** (Syndet, pH 5,5) — erhält den Säureschutzmantel
- **Keine Seife** — alkalisch, schädigt Säureschutzmantel
- **Kein Franzbranntwein, kein reiner Alkohol** — trocknet aus
- **Bei trockener Haut**: W/O-Emulsion (Wasser-in-Öl) einmal täglich
- **Bei feuchter Haut (Inkontinenz)**: Schutzfilme (Zinkpaste, barriereaktive Cremes)
- **Nie massieren** bei geröteten Stellen

**Ernährung — die unsichtbare Prophylaxe:**
- **Eiweiß**: 1,2-1,5 g/kg KG/Tag (bei Risikopatient höher) — Grundbaustein für Gewebereparatur und Immunabwehr
- **Flüssigkeit**: 30-35 ml/kg KG/Tag (Ausnahme: Herzinsuffizienz, Niereninsuffizienz)
- **Mikronährstoffe**: Vitamin C (Kollagen-Synthese), Zink (Wundheilung)

**Screening:** MNA (Mini Nutritional Assessment) bei älteren Patienten; NRS-2002 im Krankenhaus. Bei Mangelernährung: Konsultation Ernährungsberatung.

**Wichtig:** Der DNQP-Expertenstandard 'Ernährungsmanagement' (2017) verweist explizit auf Dekubitus als Komplikation der Mangelernährung."

**B1 (650 Zeichen):**
"Hautpflege und gutes Essen helfen, Dekubitus zu verhindern.

**Hautpflege:**
- **pH-neutral waschen** — mit milder Waschlotion (kein Alkohol, keine Seife)
- **Kein Franzbranntwein** (trocknet die Haut aus)
- Bei **trockener Haut**: einmal am Tag eincremen (mit Creme, die nicht wasserlöslich ist)
- Bei **Inkontinenz**: Schutzcreme (z.B. Zinkpaste)
- **Nie reiben oder massieren** bei roten Stellen

**Ernährung — die stille Prophylaxe:**
- **Eiweiß**: 1,2-1,5 Gramm pro kg Körpergewicht am Tag. Eiweiß ist das Baumaterial für die Haut.
- **Trinken**: 30-35 ml pro kg Körpergewicht am Tag (Ausnahme: Herz- oder Nierenkrank)
- **Vitamine**: Vitamin C und Zink helfen bei der Wundheilung

**Bei älteren Patienten** gibt es den **MNA-Test** (Mini Nutritional Assessment) — er zeigt, ob jemand mangelernährt ist. Dann braucht es eine Ernährungsberatung.

**Wichtig:** Der DNQP-Standard zur Ernährung (2017) nennt Dekubitus als Folge von Mangelernährung."

- **Erklärungs-Step:** stepType `reveal` (2 Blöcke: Hautpflege + Ernährung)
- **Glossar-Begriffe:** [Syndet, W/O-Emulsion, Säureschutzmantel, MNA, NRS-2002]

### Misconceptions → Distraktoren

**D1: "Häufiges Waschen beugt Dekubitus vor"**
- **Fachbegriff:** Waschen-Übertreibung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **zu häufiges Waschen (mehrmals täglich mit Seife)** schädigt den Säureschutzmantel und trocknet die Haut aus. Die Haut wird **anfälliger, nicht robuster**. Richtig: Nur bei Bedarf waschen (nach Inkontinenz), sonst abwaschen, pH-neutral, kein Parfum. Merke: Weniger ist mehr."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — zu oft waschen ist **schlecht**. Die Haut wird trocken und kaputt. Sie wird dann schwächer, nicht stärker. Richtig: Nur waschen, wenn es nötig ist (z.B. nach Stuhlgang). Mit pH-neutraler Waschlotion. Merke: Weniger waschen ist besser."

**D2: "Eiweiß ist nur bei bestehenden Wunden wichtig"**
- **Fachbegriff:** Eiweiß-Reparatur-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — Eiweiß ist auch **vor der Wunde** wichtig. Es baut und erhält die Haut, das Immunsystem und die Gewebefestigkeit. Ein mangelernährter Patient hat **dünnere, weniger elastische Haut** und ist anfälliger. Der Bedarf liegt dauerhaft bei 1,2-1,5 g/kg KG/Tag, bei Risikopatienten höher."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — Eiweiß ist auch **vor der Wunde** wichtig. Es macht die Haut dick und elastisch. Wer wenig Eiweiß bekommt, hat dünne Haut — und die reißt schneller. Der Körper braucht täglich 1,2-1,5 Gramm pro kg. Merke: Eiweiß beugt vor — nicht nur heilen."

**D3: "Eincremen schadet, weil es die Poren verstopft"**
- **Fachbegriff:** Poren-Mythos
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — bei **trockener Haut** ist bedarfsgerechtes Eincremen Teil der Prophylaxe (W/O-Emulsion, einmal täglich). Die Poren werden **nicht verstopft**, wenn das Produkt dermatologisch geprüft ist. Wichtig: Weniger ist mehr (sparsam auftragen), pH-neutral, ohne Parfum. Merke: Bedarfsgerecht."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **trockene Haut braucht Creme**. Das verstopft die Poren nicht (wenn die Creme gut ist). Wichtig: Nur wenig Creme auftragen, pH-neutral, ohne Duft. 1× am Tag reicht. Merke: Bei trockener Haut eincremen ist richtig."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Hautpflege: pH-neutral, kein Alkohol, bei Bedarf eincremen (nicht zu viel). Ernährung: Eiweiß 1,2-1,5 g/kg KG/Tag, Flüssigkeit 30-35 ml/kg KG/Tag. Vitamin C und Zink unterstützen. MNA/NRS-2002 zum Screening. Dekubitus ist eine Komplikation der Mangelernährung (DNQP)."

**B1 (255 Zeichen):** "Sehr gut. Hautpflege: pH-neutral, kein Alkohol, bei trockener Haut eincremen. Ernährung: Eiweiß (1,2-1,5 g/kg am Tag), Trinken (30-35 ml/kg am Tag), Vitamine C und Zink. MNA-Test bei Älteren. Der DNQP sagt: Mangelernährung ist eine Ursache für Dekubitus."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie hoch ist der tägliche Eiweiß- und Flüssigkeitsbedarf eines dekubitus-gefährdeten Patienten?"
- **Rückseite:** "Eiweiß: 1,2-1,5 g/kg KG/Tag. Flüssigkeit: 30-35 ml/kg KG/Tag (Ausnahme: Herz-/Niereninsuffizienz)."
- **Kategorie:** fakt

---

## Baustein 10: wundversorgung-prinzipien

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-wundversorgung
- **bloomLevel:** 4
- **wissensart:** maßnahme
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient hat jetzt einen Dekubitus Grad II. Was denkst du — was muss als erstes passieren? Warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Bei bestehendem Dekubitus: **Druckentlastung ist oberstes Gebot** — sonst heilt keine Wunde. Dann: **Feuchte Wundbehandlung** (Hydrokolloid, Hydrogel — NICHT trocknen). Dokumentation: Kategorie, Größe, Wundgrund, Exsudat, Foto."

**B1 (220 Zeichen):** "Bei einem Dekubitus: **Zuerst Druck wegnehmen** — sonst heilt die Wunde nicht. Dann: **Feuchte Wundbehandlung** (Hydrokolloid, Hydrogel — NICHT austrocknen!). Aufschreiben: Kategorie, Größe, Wundgrund, Flüssigkeit, Foto."

- **Step-Typ:** sequencing (Reihenfolge Wundversorgung)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Bei einem bestehenden Dekubitus gilt das **T-I-M-E-Prinzip** in der Wundversorgung:

**T — Tissue (Gewebe)**: Abgestorbenes Gewebe (Nekrose) fördert Infektion. **Débridement** (mechanisch, autolytisch, enzymatisch) je nach Wundzustand.

**I — Infection/Inflammation**: Zeichen erkennen (Rubor, Dolor, Tumor, Calor), Abstrich bei Verdacht, Antibiotika nach Arztanordnung.

**M — Moisture**: **Feuchte Wundbehandlung** ist Standard. Trockene Wunden heilen schlechter. Verbände nach Exsudat-Menge:
- **Hydrokolloide** (wenig Exsudat, Kategorie II)
- **Hydrogele** (trockene/nekrotische Wunden)
- **Alginate** (stark exsudierend)
- **Schaumstoffe** (moderat exsudierend, gut zum Druckschutz)

**E — Edge (Wundrand)**: Wundrand schützen (Barriereprodukte), Mazeration vermeiden.

**ABSOLUTE PFLICHT:** **Druckentlastung der betroffenen Region** — keine Heilung ohne. Bei Sakrum-Dekubitus: Nicht in Rückenlage. Bei Fersen-Dekubitus: Ferse frei schweben lassen.

**Dokumentation:** Kategorie, Größe (Länge × Breite × Tiefe in cm), Wundgrund (%), Exsudat-Menge und -Farbe, Foto (mit Maßstab), Datum. (NPUAP/EPUAP 2019, EWMA)"

**B1 (650 Zeichen):**
"Bei einem Dekubitus hilft das **T-I-M-E-Prinzip**:

**T — Gewebe**: Totes Gewebe muss weg (das nennt man **Débridement**). Sonst kommt es zu einer Infektion.

**I — Infektion**: Zeichen schauen (Rötung, Schmerz, Schwellung, Wärme). Bei Verdacht: Abstrich. Antibiotika, wenn der Arzt es sagt.

**M — Feuchtigkeit**: **Feuchte Wundbehandlung** — das ist heute Standard. Trockene Wunden heilen schlechter. Welcher Verband? Kommt auf die Wunde an:
- **Hydrokolloid** — wenig Flüssigkeit, Kategorie II
- **Hydrogel** — trockene oder schwarze Wunden
- **Alginat** — viel Flüssigkeit
- **Schaumstoff** — mittlere Flüssigkeit, schützt vor Druck

**E — Wundrand**: Den Rand schützen (mit Schutzcreme), damit er nicht aufweicht.

**ABSOLUT WICHTIG:** **Den Druck von der Wunde nehmen** — sonst heilt nichts. Bei Steißbein-Wunde: nicht auf dem Rücken liegen. Bei Fersen-Wunde: Ferse frei schweben lassen.

**Aufschreiben:** Kategorie, Größe (Länge × Breite × Tiefe in cm), Wundgrund (%), Flüssigkeit (Menge, Farbe), Foto mit Maßstab, Datum."

- **Erklärungs-Step:** stepType `reveal` (T-I-M-E-Schritte einzeln)
- **Glossar-Begriffe:** [Débridement, Nekrose, Hydrokolloid, Hydrogel, Alginat, Mazeration, T-I-M-E]

### Misconceptions → Distraktoren

**D1: "Eine Wunde heilt am besten, wenn sie an der Luft trocknen kann"**
- **Fachbegriff:** Trockene-Wunde-Mythos
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **das ist heute wissenschaftlich überholt**. Feuchte Wunden heilen **schneller und mit weniger Narben** (Winter 1962, mehrfach bestätigt). Die Zellen können im feuchten Milieu wandern, trockene Krusten behindern die Heilung. Standard: Feuchte Wundbehandlung (Hydrokolloide, Hydrogele). Merke: Feucht heilt besser."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — das ist eine alte Idee. Wissenschaftliche Studien (seit 1962) zeigen: **Feuchte Wunden heilen besser**. Die Heilzellen können sich besser bewegen. Trockene Krusten behindern die Heilung. Heute Standard: Feuchte Verbände. Merke: Feucht ist besser als trocken."

**D2: "Ein Dekubitus heilt, auch wenn der Patient weiter auf der Stelle liegt"**
- **Fachbegriff:** Druck-Ignoranz
- **Feedback (C1, 335 Zeichen):** "Nicht ganz — **keine Heilung ohne Druckentlastung**. Das ist die **erste Regel**. Jedes Verbandsmaterial der Welt bringt nichts, wenn der Druck weiter auf der Wunde lastet. Bei Sakrum-Dekubitus also: Keine Rückenlage. Bei Fersen-Dekubitus: Ferse frei schweben lassen. Merke: Druckentlastung > Verband. Immer zuerst."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **ohne Druckentlastung heilt nichts**. Das ist das wichtigste. Der beste Verband hilft nicht, wenn der Patient weiter auf der Wunde liegt. Bei Steißbein-Wunde: nicht auf dem Rücken. Bei Fersen-Wunde: Ferse in die Luft. Merke: Druck weg ist wichtiger als der Verband."

**D3: "Betaisodona-Lösung ist der beste Wundverband"**
- **Fachbegriff:** Antiseptika-Überdosierung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Antiseptika wie Povidon-Jod (Betaisodona) werden **nicht routinemäßig** für Dekubiti verwendet. Sie schädigen auch gesunde Zellen und verzögern die Heilung. Einsatz nur bei **Infektionszeichen** und zeitlich begrenzt. Standard ist feuchte Wundbehandlung mit modernen Verbandsmaterialien."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Jod-Lösungen sind nicht für jede Wunde. Sie können auch gesunde Zellen kaputt machen und die Heilung verzögern. Man nimmt sie nur bei Infektion — und nur kurz. Standard ist feuchte Wundbehandlung mit modernen Verbänden. Merke: Jod nur bei Infektion."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. T-I-M-E-Prinzip: T (Gewebe/Débridement), I (Infektion), M (feuchte Wundbehandlung — Hydrokolloid, Hydrogel, Alginat, Schaum je nach Exsudat), E (Wundrand schützen). Absolute Pflicht: Druckentlastung der betroffenen Stelle. Dokumentation: Kategorie, Größe, Wundgrund, Exsudat, Foto."

**B1 (270 Zeichen):** "Sehr gut. T-I-M-E: T (Gewebe — totes weg), I (Infektion), M (feuchte Behandlung — Hydrokolloid, Hydrogel, Alginat, Schaum), E (Wundrand schützen). Absolut wichtig: Druck weg von der Wunde. Aufschreiben: Kategorie, Größe, Wundgrund, Flüssigkeit, Foto."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet das T-I-M-E-Prinzip in der Dekubitus-Wundversorgung?"
- **Rückseite:** "T=Tissue (totes Gewebe entfernen), I=Infection, M=Moisture (feuchte Wundbehandlung), E=Edge (Wundrand schützen). Und: Druckentlastung ist Pflicht."
- **Kategorie:** handlung

---

## Baustein 11: haeufige-fehler

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-fehler
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Welche 'Hausmittel' oder 'Tricks' aus der Pflege hast du schon gehört, die angeblich Dekubitus verhindern? Was denkst du — sind sie richtig?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (225 Zeichen):** "Häufige Fehler in der Praxis: (1) **Massage/Eisbehandlung** geröteter Stellen, (2) **Franzbranntwein**, (3) **Ringkissen**, (4) **Föhnen** oder **Puder** bei feuchter Haut, (5) Starre **2h-Regel** ohne Individualisierung."

**B1 (210 Zeichen):** "Typische Fehler in der Pflege: (1) **Massieren oder Eis** auf rote Stellen, (2) **Franzbranntwein**, (3) **Ringkissen**, (4) **Föhnen oder Puder** bei feuchter Haut, (5) Immer feste **2 Stunden** umlagern."

- **Step-Typ:** swipe (Richtig vs. Falsch: 6-8 Praktiken)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Diese Praktiken sind **obsolete oder kontraindiziert** (trotz teils noch weit verbreiteter Anwendung):

**1. Massieren geröteter Stellen** — schädigt bereits geschwächtes Gewebe, beschleunigt Dekubitus-Entstehung.

**2. Eisbehandlung** — Vasokonstriktion verschlimmert die Minderdurchblutung.

**3. Franzbranntwein** — trocknet Haut aus, schädigt Säureschutzmantel.

**4. Ringkissen** — komprimieren randständige Gefäße, verschlechtern die Durchblutung.

**5. Puder (Babypuder) bei feuchter Haut** — verklumpt, schafft feuchte Nischen, fördert Hautreizung.

**6. Föhnen** — austrocknend, kein Evidenz-Nachweis.

**7. Starre 2h-Regel** — seit DNQP 2024 abgelöst durch individuelle Bewegungsplanung.

**8. Uro-Kondom** bei Inkontinenz (Männer) — kann Dekubitus am Penis verursachen (Medical Device Pressure Injury).

**9. Cortison-Salbe** auf Dekubitus — immunsuppressiv, hemmt Wundheilung.

**10. 'Fersenbälle'** aus Gaze — tauglos, entlastet nicht.

**Warum halten sich diese Praktiken?** Oft durch Tradition ('Das haben wir immer so gemacht'). Evidenzbasierte Pflege prüft jede Maßnahme auf wissenschaftliche Grundlage.

**Neue Evidenz-Basis:** Systematische Übersichtsarbeiten (Cochrane Moore 2022, EWMA). (DNQP 2024)"

**B1 (610 Zeichen):**
"Diese Dinge sind **verboten** oder falsch (auch wenn viele sie noch machen):

**1. Massieren** von roten Stellen — macht das Gewebe noch kaputter.

**2. Eis** auf rote Stellen — Gefäße ziehen sich zusammen, Durchblutung wird schlechter.

**3. Franzbranntwein** — trocknet die Haut aus.

**4. Ringkissen** — drücken am Rand.

**5. Puder (Babypuder)** bei feuchter Haut — verklebt, macht Hautreizung.

**6. Föhnen** — trocknet aus, bringt nichts.

**7. Starre 2-Stunden-Regel** — der DNQP 2024 sagt: Jeder Patient braucht einen individuellen Zeitabstand.

**8. Uro-Kondom** bei Männern mit Inkontinenz — kann Dekubitus am Penis machen.

**9. Cortison-Creme** auf Dekubitus — hemmt die Heilung.

**10. 'Fersenbälle'** aus Mullbinde — entlasten nicht.

**Warum gibt es diese Fehler noch?** Oft aus Gewohnheit. Evidenzbasierte Pflege prüft, ob etwas wissenschaftlich funktioniert. Neue Grundlagen: Cochrane-Review 2022, DNQP 2024."

- **Erklärungs-Step:** stepType `swipe` (10 Praktiken — richtig vs. falsch)
- **Glossar-Begriffe:** [Vasokonstriktion, evidenzbasierte Pflege, obsolet, MDRPI]

### Misconceptions → Distraktoren

**D1: "Eine kurze Eisanwendung regt die Durchblutung an"**
- **Fachbegriff:** Reaktive-Hyperämie-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Eis führt zur **Vasokonstriktion** (Gefäße ziehen sich zusammen), nicht zu Vasodilatation. Die kurze 'reaktive Hyperämie' danach ist kein Heilmechanismus, sondern eine reflektorische Reaktion. Für schon geschwächtes Gewebe ist Eis **zusätzlich schädigend**. Merke: Kein Eis auf gerötete/gefährdete Stellen."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — Eis macht die Blutgefäße **enger**, nicht weiter. Die kurze Rötung nach dem Eis ist keine gute Durchblutung — nur eine Reaktion. Für das schon schwache Gewebe ist Eis **schädlich**. Merke: Kein Eis auf rote oder gefährdete Stellen."

**D2: "Puder hält die Haut trocken und hilft bei Inkontinenz"**
- **Fachbegriff:** Puder-Hygiene-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Puder (besonders Babypuder mit Talkum) **verklumpt** bei Feuchtigkeit zu kleinen Klümpchen, die wie Sandpapier wirken. In Hautfalten fördert es **Mazeration und Pilzwachstum**. Richtige Lösung bei Inkontinenz: **Barriereprodukte** (Zinkpaste, Hautschutzfilme). Merke: Puder ≠ Hautschutz."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Puder verklumpt mit Feuchtigkeit. Diese kleinen Klümpchen drücken auf die Haut wie Sandpapier. Sie machen die Haut kaputt. In Hautfalten kommt Pilz dazu. Richtig bei Inkontinenz: **Schutzcreme** (wie Zinkpaste). Merke: Kein Puder."

**D3: "Cortison-Salbe hilft, weil sie die Rötung reduziert"**
- **Fachbegriff:** Cortison-Dekubitus-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **Cortison ist immunsuppressiv** und hemmt die Wundheilung. Es reduziert zwar die sichtbare Rötung, aber **ohne das Problem zu lösen** — und verzögert die Heilung. Auf Dekubitus gehört **kein Cortison** (außer bei konkreter dermatologischer Indikation vom Arzt). Merke: Cortison ≠ Dekubitus-Therapie."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **Cortison hilft NICHT**. Es macht zwar die Rötung weniger, aber hemmt die Heilung. Die Wunde wird schlechter. Auf einen Dekubitus gehört **kein Cortison** — nur wenn der Arzt es extra verordnet. Merke: Kein Cortison auf Dekubitus."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Die 10 häufigen Fehler: Massage, Eis, Franzbranntwein, Ringkissen, Puder, Föhnen, starre 2h-Regel, Uro-Kondom, Cortison, Fersenbälle. Alle obsolet oder sogar schädlich. Evidenzbasierte Pflege prüft jede Praktik wissenschaftlich. Grundlage: Cochrane, DNQP, NPUAP/EPUAP."

**B1 (250 Zeichen):** "Sehr gut. 10 häufige Fehler: Massage, Eis, Franzbranntwein, Ringkissen, Puder, Föhnen, starre 2-h-Regel, Uro-Kondom, Cortison, Fersenbälle. Alle verboten oder falsch. Evidenzbasierte Pflege prüft wissenschaftlich: Cochrane, DNQP, NPUAP/EPUAP."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist das Massieren einer geröteten Stelle kontraindiziert?"
- **Rückseite:** "Massage schädigt das bereits geschwächte Gewebe zusätzlich und beschleunigt die Dekubitus-Entstehung. Nachweis: NPUAP/EPUAP, DNQP."
- **Kategorie:** handlung

---

## Baustein 12: dokumentation

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-dokumentation
- **bloomLevel:** 3
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient bekommt trotz Prophylaxe einen Dekubitus. Angehörige fragen: 'Wie konnte das passieren?' Welche Unterlagen brauchst du, um das nachvollziehbar zu machen?"
- **Step-Typ:** freetext (Bloom 3)

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Pflegedokumentation beim Dekubitus: **Assessment** (Braden + klinisch), **Risiko-Plan** (Maßnahmen konkret), **Wunddokumentation** (Kategorie, Größe, Wundgrund, Exsudat, Foto, Datum), **Durchführung** (Umlagerung, Hautkontrolle), **Evaluation**."

**B1 (230 Zeichen):** "Aufschreiben beim Dekubitus: **Einschätzung** (Braden + Beobachtung), **Plan** (was ich mache), **Wunde** (Kategorie, Größe, Wundgrund, Flüssigkeit, Foto, Datum), **Durchführung** (Umlagerungen, Hautkontrolle), **Auswertung**."

- **Step-Typ:** sequencing (Reihenfolge der Dokumentations-Bereiche)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Dokumentation ist beim Dekubitus besonders wichtig — sowohl **rechtlich** ('Was nicht dokumentiert ist, gilt als nicht getan') als auch **fachlich** (Verlauf nachvollziehbar).

**Was muss dokumentiert werden:**

**1. Assessment bei Aufnahme** (innerhalb 2h):
- Braden-Skala (Gesamtwert + einzelne Items)
- Klinische Einschätzung
- Hautstatus-Erstbefund (alle Prädilektionsstellen)

**2. Risikomanagement-Plan**:
- Bewegungsplan (individueller Zeitabstand)
- Hilfsmittel-Wahl (welche Matratze, welche Kissen)
- Maßnahmen Hautpflege + Ernährung

**3. Bei bestehendem Dekubitus — Wunddokumentation** (pro Verbandswechsel):
- **Kategorie** (I-IV oder unstageable)
- **Größe**: Länge × Breite × Tiefe in cm
- **Wundgrund**: Anteile (rot/gelb/schwarz/rosa in %)
- **Wundrand**: (mazeriert, unterminiert, scharf, vital)
- **Exsudat**: Menge (wenig/mittel/viel), Farbe, Geruch
- **Begleiterscheinungen**: Schmerzen, Umgebung (Rötung, Mazeration)
- **Foto mit Maßstab** (Zustimmung des Patienten!)
- **Datum + Unterschrift**

**4. Durchführung**: Jede Umlagerung, Hautinspektion, Verbandswechsel

**5. Evaluation**: Wöchentlich: Heilungs- oder Verschlechterungs-Verlauf

**Rechtlich wichtig:** SGB XI, MDK-Prüfung, Haftung bei fehlender Dokumentation."

**B1 (630 Zeichen):**
"Dokumentation ist beim Dekubitus sehr wichtig. Es gibt einen Satz in der Pflege: **'Was nicht aufgeschrieben ist, wurde nicht gemacht.'** Rechtlich und fachlich wichtig.

**Was muss aufgeschrieben werden:**

**1. Einschätzung bei Aufnahme** (innerhalb 2 Stunden):
- Braden-Skala (Gesamtzahl + einzelne Punkte)
- Pflegerische Einschätzung
- Haut genau anschauen (alle gefährdeten Stellen)

**2. Plan**:
- Wann wird umgelagert (individueller Rhythmus)
- Welche Matratze, welche Kissen
- Hautpflege + Ernährung

**3. Bei bestehendem Dekubitus — pro Verbandswechsel**:
- **Kategorie** (I bis IV)
- **Größe**: Länge × Breite × Tiefe in cm
- **Wundgrund**: rot/gelb/schwarz/rosa (in Prozent)
- **Wundrand**: wie sieht er aus?
- **Flüssigkeit**: viel/wenig, Farbe, Geruch
- **Schmerzen**: hat der Patient Schmerzen?
- **Foto mit Maßstab** (Patient muss einverstanden sein!)
- **Datum + Unterschrift**

**4. Durchführung**: Jede Umlagerung, jede Hautkontrolle, jeder Verband

**5. Auswertung**: Wöchentlich: Heilt die Wunde oder wird sie schlechter?

**Rechtlich wichtig:** SGB XI, MDK prüft. Ohne Dokumentation: Haftung."

- **Erklärungs-Step:** stepType `checklist` (Dokumentations-Abschnitte)
- **Glossar-Begriffe:** [MDK, SGB XI, Wundgrund, Exsudat, Mazeration]

### Misconceptions → Distraktoren

**D1: "Ein Foto ersetzt die schriftliche Dokumentation"**
- **Fachbegriff:** Foto-Ersatz-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — ein Foto ist **Ergänzung**, nicht Ersatz. Rechtlich und fachlich braucht es auch die schriftliche Dokumentation: Kategorie, Größe in cm, Wundgrund-Anteile, Exsudat-Qualität. Ein Foto allein zeigt keine Tiefe, keinen Geruch, kein Schmerzniveau. Merke: Foto + Text, nicht Foto statt Text."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — ein Foto reicht nicht. Es zeigt nicht die Tiefe, den Geruch oder die Schmerzen. Man braucht auch den Text: Kategorie, Größe, wie die Wunde aussieht, wie viel Flüssigkeit. Merke: Foto UND Text — nicht nur Foto."

**D2: "Umlagerungen muss man nicht extra dokumentieren — das ist Routine"**
- **Fachbegriff:** Routine-Dokumentations-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **jede Umlagerung muss dokumentiert werden** (Zeit, Position, durchführende Person). Das ist nicht Routine-Arbeit, sondern Qualitäts-Nachweis. Bei einem MDK-Prüfverfahren oder einer Haftungsklage ist die Dokumentation das einzige, was zählt. Merke: Umlagerung = Dokumentation Pflicht."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — jede Umlagerung muss aufgeschrieben werden: Zeit, Position, wer es gemacht hat. Das ist kein 'Extra', sondern Pflicht. Bei einer Prüfung (MDK) oder wenn es zum Streit kommt, ist das Aufgeschriebene der einzige Nachweis. Merke: Umlagern = aufschreiben."

**D3: "Bei einem schon bestehenden Dekubitus reicht die Dokumentation 1× pro Woche"**
- **Fachbegriff:** Doku-Frequenz-Unterschätzung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — bei bestehendem Dekubitus erfolgt Wunddokumentation **bei jedem Verbandswechsel** (je nach Exsudat täglich bis 3× wöchentlich). Wöchentlich ist nur die **Evaluation** (Zusammenfassung der Entwicklung). Zwischen den Evaluations-Zeitpunkten wird bei jedem Kontakt dokumentiert."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — bei einem bestehenden Dekubitus schreibt man **bei jedem Verbandswechsel** auf. Das ist oft täglich oder 3× pro Woche. Einmal pro Woche ist nur die Auswertung (geht die Wunde vor oder zurück?). Merke: Jeder Verbandswechsel = Dokumentation."

### Richtig-Feedback
**C1 (295 Zeichen):** "Genau. Dokumentation umfasst: (1) Assessment bei Aufnahme (innerhalb 2h), (2) Risikomanagement-Plan, (3) Wunddokumentation pro Verbandswechsel (Kategorie, Größe, Wundgrund, Exsudat, Foto, Datum), (4) Jede Durchführung, (5) Wöchentliche Evaluation. Rechtlich: SGB XI, MDK, Haftungsgrundlage."

**B1 (260 Zeichen):** "Genau. Dokumentation: (1) Einschätzung bei Aufnahme (in 2 Stunden), (2) Plan, (3) Wunde bei jedem Verbandswechsel (Kategorie, Größe, Wundgrund, Flüssigkeit, Foto, Datum), (4) Jede Durchführung, (5) Wöchentliche Auswertung. Rechtlich wichtig: SGB XI, MDK."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 5 Aspekte gehören zur Wunddokumentation bei einem Dekubitus?"
- **Rückseite:** "Kategorie, Größe (L×B×T in cm), Wundgrund (Anteile in %), Wundrand, Exsudat (Menge/Farbe/Geruch). Plus: Foto mit Maßstab, Datum, Unterschrift."
- **Kategorie:** recht

---

## Baustein 13: praevalenz-in-deutschland

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-praevalenz
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Wie viele Patienten in einem deutschen Krankenhaus haben deiner Schätzung nach einen Dekubitus? Welche Altersgruppe ist am stärksten betroffen?"
- **Step-Typ:** freetext (kurz)

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Dekubitus-Prävalenz in Deutschland: **ca. 12,5% im Krankenhaus** (DNQP-Daten), **5-8% in Pflegeheimen**. Am stärksten betroffen: **Menschen ≥ 80 Jahre**. Hauptursachen: Immobilität, Mangelernährung, Inkontinenz, Multimorbidität."

**B1 (225 Zeichen):** "Dekubitus in Deutschland: **etwa 12,5% aller Patienten im Krankenhaus** haben einen. In Pflegeheimen: **5-8%**. Am meisten betroffen: **Menschen ab 80 Jahren**. Gründe: wenig Bewegung, wenig Essen, Inkontinenz, viele Krankheiten."

- **Step-Typ:** text (displayFormat: news — als Statistik-Fakt)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"**Dekubitus-Prävalenz in Deutschland (aktuelle Daten):**

- **Akutkrankenhaus**: ~12,5% (DNQP-Daten, nationale Benchmark-Erhebung)
- **Pflegeheim**: 5-8%
- **Ambulante Pflege**: 3-5%
- **Intensivstation**: bis zu 20% (hochrisiko-Setting)

**Risikogruppen:**
- **Alter ≥ 80 Jahre**: Prävalenz steigt stark
- **Immobilität** (bettlägerig, Rollstuhl-gebunden)
- **Neurologische Erkrankungen** (Schlaganfall, Demenz, Querschnitt)
- **Mangelernährung** (BMI < 18,5 oder Gewichtsverlust > 10%)
- **Inkontinenz**
- **Multimorbidität** (≥ 3 chronische Erkrankungen)

**Kosten:**
- Ein Dekubitus Kategorie III-IV kostet im Schnitt **ca. 10.000-30.000 €** pro Fall (Behandlung, verlängerter Aufenthalt).
- Kategorie I-II: einige hundert bis wenige tausend Euro.

**Qualitätsindikator:** Dekubitus-Prävalenz ist ein Haupt-**Qualitätsindikator** in der MDK-Prüfung. Er zeigt: Hat die Einrichtung ein wirksames Prophylaxe-System?

**Wichtig:** DNQP nennt Dekubitus 'weitgehend vermeidbar'. Jeder nicht-entstandene Dekubitus ist gelebte Pflegequalität. (DNQP 2017/2024, RKI 2023)"

**B1 (595 Zeichen):**
"**Wie oft gibt es Dekubitus in Deutschland?**

- **Im Krankenhaus**: etwa **12,5% der Patienten** haben einen.
- **Im Pflegeheim**: 5 bis 8%.
- **In der häuslichen Pflege**: 3 bis 5%.
- **Intensivstation**: bis zu 20% — hier ist das Risiko am höchsten.

**Wer hat das höchste Risiko?**
- **Ab 80 Jahren** steigt die Zahl stark
- **Bettlägerige** oder **Rollstuhlfahrer**
- Menschen mit **Schlaganfall, Demenz, Querschnitt**
- **Mangelernährung** (BMI unter 18,5 oder viel Gewicht verloren)
- **Inkontinenz**
- Menschen mit **vielen Krankheiten gleichzeitig**

**Kosten:**
- Ein schwerer Dekubitus (Kategorie III oder IV) kostet **10.000 bis 30.000 Euro** pro Fall.
- Kleinere Dekubiti (I-II) kosten weniger — aber auch einiges.

**Wichtig:** Der Dekubitus ist ein **Qualitäts-Zeichen**. Der MDK prüft, wie viele Dekubiti eine Einrichtung hat. Der DNQP sagt: **Die meisten Dekubiti kann man verhindern.** Jeder Dekubitus, der nicht entsteht, ist gute Pflege."

- **Erklärungs-Step:** stepType `diagram` (Balkendiagramm: Prävalenz nach Setting)
- **Glossar-Begriffe:** [Prävalenz, Multimorbidität, MDK, Qualitätsindikator]

### Misconceptions → Distraktoren

**D1: "Dekubitus ist heute selten geworden durch moderne Pflege"**
- **Fachbegriff:** Progress-Optimismus
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — die Prävalenz ist zwar leicht gesunken, aber **noch immer bei 12,5% im Krankenhaus** (DNQP-Daten). Insbesondere demografischer Wandel (mehr alte, multimorbide Patienten) und verkürzte Liegezeiten (weniger Zeit für Prophylaxe pro Patient) halten die Zahlen hoch. Merke: Dekubitus ist **kein historisches Problem**."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — Dekubitus ist **immer noch häufig**: 12,5% im Krankenhaus. Die Zahl ist etwas gesunken, aber nicht weg. Gründe: Mehr alte Patienten, kürzere Liegezeiten. Die Pflege hat weniger Zeit pro Patient. Merke: Dekubitus ist heute noch ein großes Problem."

**D2: "Dekubitus ist ein Problem von Pflegeheimen, nicht von Krankenhäusern"**
- **Fachbegriff:** Setting-Fehlzuordnung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **genau umgekehrt**: Die Prävalenz im Akutkrankenhaus (12,5%) ist **höher** als in Pflegeheimen (5-8%). Gründe: Akut-kranke Patienten, postoperative Immobilität, Intensiv-Settings. Pflegeheime haben oft kontinuierliche Prophylaxe-Teams. Merke: Krankenhaus > Pflegeheim."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — genau andersherum. Im **Krankenhaus** gibt es **mehr** Dekubiti (12,5%) als im **Pflegeheim** (5-8%). Warum? Im Krankenhaus sind Patienten akut krank und bewegen sich weniger (OPs, Intensivstation). Merke: Krankenhaus hat mehr Dekubiti."

**D3: "Ein Dekubitus kostet höchstens ein paar hundert Euro"**
- **Fachbegriff:** Kosten-Unterschätzung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — ein Dekubitus **Kategorie III-IV** kostet **10.000-30.000 €** pro Fall (verlängerter Aufenthalt, Wundversorgung, Komplikationen). Auch kleinere Dekubiti (Kategorie II) können einige tausend Euro kosten. In Summe: Dekubitus ist in Deutschland ein **Milliarden-Problem**. Merke: Prophylaxe spart Kosten."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — ein schwerer Dekubitus (Kategorie III oder IV) kostet **10.000 bis 30.000 Euro** pro Fall. Auch kleinere kosten viele tausend Euro. In ganz Deutschland ist das ein Milliarden-Problem. Merke: Prophylaxe ist nicht nur gut für den Patienten — sie spart auch Geld."

### Richtig-Feedback
**C1 (275 Zeichen):** "Sehr gut. Prävalenz in Deutschland: Krankenhaus ~12,5%, Pflegeheim 5-8%, ambulant 3-5%, Intensivstation bis 20%. Hauptrisikogruppe: ≥ 80 Jahre + Immobilität + Mangelernährung + Inkontinenz + Multimorbidität. Kosten Kategorie III-IV: 10.000-30.000 €. DNQP: weitgehend vermeidbar."

**B1 (245 Zeichen):** "Sehr gut. In Deutschland: Krankenhaus ~12,5%, Pflegeheim 5-8%, ambulant 3-5%, Intensivstation bis 20%. Höchstes Risiko: ab 80 Jahren, wenig Bewegung, schlechte Ernährung, Inkontinenz, viele Krankheiten. Kosten: 10.000-30.000 Euro. DNQP: meistens vermeidbar."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie hoch ist die Dekubitus-Prävalenz im deutschen Krankenhaus?"
- **Rückseite:** "Ca. 12,5% aller Patienten (DNQP-Daten). Pflegeheim: 5-8%, ambulant: 3-5%, Intensivstation: bis 20%."
- **Kategorie:** fakt

---

## Baustein 14: information-beratung-patient

### Metadaten
- **bausteinId:** dekubitus-prophylaxe-information
- **bloomLevel:** 5
- **wissensart:** maßnahme
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 82-jähriger Patient sagt: 'Ich will nicht ständig gedreht werden. Lassen Sie mich einfach in Ruhe!' Wie reagierst du? Welche 3 Argumente kannst du ihm geben?"
- **Step-Typ:** freetext (Bloom 5 — Anwendung + Kommunikation)

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Der DNQP K5 fordert: **Information, Anleitung, Beratung**. Patient und Angehörige werden **aktiv einbezogen**. Partizipative Entscheidungsfindung — nicht 'ich weiß, was gut für dich ist', sondern 'lass uns das gemeinsam besprechen'."

**B1 (220 Zeichen):** "Der DNQP-Standard sagt: Patienten und Angehörige werden **informiert und angeleitet**. Man entscheidet **gemeinsam**. Nicht: 'Ich weiß besser, was für dich gut ist.' Sondern: 'Lass uns zusammen schauen, was sinnvoll ist.'"

- **Step-Typ:** dialog (Gesprächssituation Pflegekraft-Patient)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die **Information und Anleitung** von Patient und Angehörigen ist Kriterium 5 des DNQP-Expertenstandards.

**Ziele:**
- Patient **versteht** sein Risiko und die Prophylaxe-Maßnahmen
- Patient **wirkt aktiv mit** (Mikrobewegungen, Rückmeldung zu Schmerzen, Selbstbeobachtung)
- Angehörige können **zu Hause weiter** prophylaxieren
- **Selbstbestimmung** wird gewahrt (ein Patient hat das Recht auf abgelehnte Maßnahmen — mit dokumentierter Aufklärung)

**Inhalte der Beratung:**
1. **Was ist ein Dekubitus?** — laienverständlich
2. **Wie entsteht er?** — Druck + Zeit
3. **Warum gerade ich?** — individuelle Risikofaktoren
4. **Was tun wir?** — konkrete Maßnahmen (Umlagerung, Matratze, Hautpflege)
5. **Was kannst du tun?** — Eigenbewegungen, Rückmeldung, Ernährung, Trinken
6. **Was kann die Familie tun?** — wenn Angehörige einbezogen werden

**Kommunikation bei Ablehnung** ('Lass mich in Ruhe'):
- **Nicht Druck ausüben** — Autonomie respektieren
- **Grund erfragen** (Schmerz? Müdigkeit? Scham?)
- **Alternativen anbieten** (vielleicht nur kleine Mikrobewegungen? Anderer Zeitpunkt?)
- **Dokumentieren** — bei wiederholter Ablehnung: Entscheidung schriftlich, Arzt informieren

**Kultursensibel**: Bei fremdsprachigen Patienten ggf. Dolmetscher/Angehörige einbeziehen, einfache Sprache, Bilder nutzen."

**B1 (670 Zeichen):**
"Das **5. Kriterium** des DNQP sagt: Patient und Angehörige werden **informiert und angeleitet**.

**Ziele:**
- Patient **versteht**, was ein Dekubitus ist und wie man ihn verhindert
- Patient **macht aktiv mit** (kleine Bewegungen, sagen wenn es drückt)
- Familie kann **zu Hause** weiter helfen
- Der Patient **darf auch ablehnen** — das ist sein Recht

**Was besprichst du mit dem Patienten?**
1. **Was ist ein Dekubitus?** — einfach erklären
2. **Wie entsteht er?** — Druck + Zeit
3. **Warum habe ich das Risiko?** — was ist bei ihm persönlich
4. **Was machen wir?** — Umlagern, Matratze, Hautpflege
5. **Was kannst du selbst tun?** — kleine Bewegungen, sag Bescheid, gut essen und trinken
6. **Was kann die Familie tun?**

**Wenn der Patient NICHT will ('Lass mich in Ruhe!'):**
- **Nicht zwingen** — er hat das Recht zu nein sagen
- **Fragen, warum**: Hat er Schmerzen? Ist er müde? Schämt er sich?
- **Alternativen anbieten**: Vielleicht nur kleine Bewegungen? Später?
- **Aufschreiben** — wenn er öfter ablehnt: Schriftlich festhalten, den Arzt informieren

**Bei fremden Sprachen**: Dolmetscher oder Angehörige einbeziehen, einfache Sprache, Bilder nutzen."

- **Erklärungs-Step:** stepType `dialog` (3-4 Phasen-Dialog: Patient lehnt ab, Pflegekraft reagiert)
- **Glossar-Begriffe:** [Partizipative Entscheidungsfindung, Autonomie, Selbstbestimmung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn ein Patient nicht gedreht werden will, muss ich ihn trotzdem drehen — zu seinem Schutz"**
- **Fachbegriff:** Paternalismus-Irrtum
- **Feedback (C1, 340 Zeichen):** "Nicht ganz — das ist **Paternalismus** und rechtlich problematisch. Ein einwilligungsfähiger Patient hat das **Recht auf Ablehnung** — auch wenn die Entscheidung für ihn ungünstig ist. Pflicht der Pflege: **Aufklärung** über Konsequenzen, **Alternativen** anbieten, **Dokumentation**. Gewalt gegen den Willen des Patienten wäre Nötigung."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — du darfst den Patienten **nicht zwingen**. Er hat das Recht, Nein zu sagen. Auch wenn es nicht gut für ihn ist. Deine Aufgabe: **Erklären**, was passieren kann. **Alternativen anbieten**. **Aufschreiben**. Aber nie mit Gewalt. Das wäre Gewalt gegen den Willen — rechtlich ein Problem."

**D2: "Angehörige sind für die Prophylaxe nicht zuständig"**
- **Fachbegriff:** Angehörigen-Ausschluss
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — der DNQP-Standard K5 fordert explizit die **Einbeziehung von Angehörigen**, insbesondere wenn diese pflegen (z.B. vor Entlassung in häusliche Pflege). Anleitung umfasst: Wie erkenne ich einen Dekubitus? Wie helfe ich bei der Umlagerung? Wie gestalte ich das Zuhause? Merke: Angehörige sind Partner."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Angehörige gehören dazu, besonders wenn sie zu Hause pflegen. Der DNQP sagt: Sie müssen lernen: Wie sehe ich einen Dekubitus? Wie helfe ich beim Umlagern? Wie mache ich das Zuhause sicher? Merke: Angehörige sind Teil des Teams."

**D3: "Alle Patienten bekommen dieselbe Beratung — das ist gerecht"**
- **Fachbegriff:** Standardisierungs-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **gerecht bedeutet nicht gleich**. Ein B1-Sprecher, eine demente Person und eine akademisch gebildete Person brauchen sehr unterschiedliche Beratungen. Der Standard ist: **Individuell angepasst** — in Sprache, Tiefe, Medium (Text, Bild, Video). Ziel: Jeder versteht, nicht: Jeder hört dasselbe."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **gleich ist nicht gerecht**. Ein Patient, der wenig Deutsch spricht, braucht andere Beratung als ein Arzt. Ein dementer Patient braucht eine andere als ein jüngerer Patient. **Individuell** heißt: passend zur Person. Ziel: Jeder versteht — nicht jeder hört das Gleiche."

### Richtig-Feedback
**C1 (305 Zeichen):** "Sehr gut. Beratung beinhaltet: Was ist ein Dekubitus, wie entsteht er, individuelles Risiko, unsere Maßnahmen, was der Patient selbst tun kann, Rolle der Angehörigen. Bei Ablehnung: Autonomie respektieren, Grund erfragen, Alternativen, dokumentieren. Individuell anpassen an Sprache und Verstehen."

**B1 (260 Zeichen):** "Sehr gut. Beratung: Was ist ein Dekubitus, wie entsteht er, dein Risiko, unsere Maßnahmen, was du selbst tun kannst, was die Familie tun kann. Bei Ablehnung: Respektieren, Grund fragen, Alternativen, aufschreiben. Individuell anpassen — nicht für alle gleich."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie reagierst du, wenn ein einwilligungsfähiger Patient die Umlagerung ablehnt?"
- **Rückseite:** "Autonomie respektieren. Aufklären über Konsequenzen, Alternativen anbieten, Grund erfragen, dokumentieren. Bei wiederholter Ablehnung: Arzt informieren. Nicht zwingen."
- **Kategorie:** recht

---

## Zeit-Budget-Check

**Zielzeit Thema:** 297 Min (12 UE × 45 × 0,55)
**Summe Bausteine (Stufe 2+3):** ~60 Min (14 Bausteine × ~4,3 Min)
**Verbleibend für Situationen + Übungs-Steps:** ~237 Min

→ PASS. Gute Reserve für Sessionplan-Steps (MC, Swipe, Dialog, Branching).

## Cluster-Querverbindungen

Dieser Themen-Block gehört zum **natürlichen Cluster B+C**:
- `positionierung` (Voraussetzung)
- `mobilisation` (Nachfolger)
- `thrombose-prophylaxe` (Komorbidität)
- `sturz-prophylaxe` (Komorbidität)
- `ernaehrungsassessment` (Risikofaktor Mangelernährung)
- `haut` (Basiswissen)

In Lernsituationen (z.B. "Frau Yilmaz nach Hüft-TEP") werden mehrere dieser Themen gleichzeitig aktiviert.
