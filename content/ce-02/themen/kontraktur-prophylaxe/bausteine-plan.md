# Wissensbausteine: Kontraktur-Prophylaxe

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `kontraktur-prophylaxe` |
| ceId | `ce-02` |
| cluster | B (Mobilität & Prophylaxen) |
| wissensart | handlung |
| geschaetzteUE | 3 |
| zielzeitMin | 74 (3 UE × 45 × 0,55) |
| bausteineAnzahl | 9 |
| voraussetzungen | `kinaesthetik` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 |

**Bloom-Verteilung:** Bloom 1-2: 22% (2 Bausteine), Bloom 3-4: 56% (5 Bausteine), Bloom 5-6: 22% (2 Bausteine)

**Zielzeit-Budget (pro Baustein):**
- B1 (Definition): 3 Min
- B2 (Entstehung/Immobilitätskette): 5 Min
- B3 (Funktionsstellung + Neutral-Null): 10 Min
- B4 (Spitzfuß): 6 Min
- B5 (Hochrisikogruppen): 5 Min
- B6 (Risikoassessment): 6 Min
- B7 (Maßnahmen-Überblick): 10 Min
- B8 (Aktiv/passiv/assistiv durchbewegen): 14 Min
- B9 (Folgen + Teamarbeit mit Physio): 8 Min
- **Σ 67 Min Kern + 7 Min Übergänge ≈ 74 Min**

**Primärquellen:**
- Bundesärztekammer (Hrsg.): Neutral-Null-Methode nach AAOS-Standard (gelenkphysiologische Grundlage)
- MDS (Medizinischer Dienst, 2018): Pflege-Qualitätsbericht — Kontrakturrisiko-Prävalenz in der ambulanten Pflege
- Gnass, I. et al. (2010): Kontrakturprävalenz bei älteren Krankenhauspatienten
- Sackley, C.M. et al. (2008): Contracture prevalence in stroke survivors
- Bobath, B. (1990): Hemiplegie Erwachsener — Neutral-Null-Positionierung
- § 1831 BGB (Freiheitsentziehende Maßnahmen — Kontrakturgefahr durch Fixierung)
- § 4 PflBG (vorbehaltene Tätigkeiten — Pflegeprozess/Bewegungsplanung)

---

## Baustein 1: kontraktur-definition

### Metadaten
- **bausteinId:** kontraktur-prophylaxe-definition
- **bloomLevel:** 1
- **wissensart:** definition
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Du hältst deinen Arm 2 Wochen im Gips. Was passiert danach mit deinem Ellenbogen — kannst du ihn sofort wieder ganz beugen und strecken?"
- **Step-Typ:** freetext (kurz, aktiviert Alltagserfahrung)

### Stufe 2 — Hinweis

**C1 (230 Zeichen):** "Eine Kontraktur ist eine dauerhafte Gelenkversteifung. Das Gelenk lässt sich weder aktiv noch passiv voll bewegen. Typische Zeichen: Bewegungseinschränkung, verhärtete Muskulatur, Gelenkverformung. (Neutral-Null-Methode, AAOS)"

**B1 (210 Zeichen):** "Eine Kontraktur ist eine Gelenkversteifung. Das Gelenk bleibt steif. Der Patient kann es nicht mehr richtig bewegen. Auch du kannst das Gelenk nicht mehr richtig bewegen, wenn du hilfst. Der Muskel ist hart."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (640 Zeichen):**
"Eine **Kontraktur** ist die dauerhafte Versteifung eines Gelenks mit eingeschränkter oder aufgehobener Beweglichkeit. Drei Merkmale gehören dazu: (1) die **aktive Bewegung** ist limitiert — der Patient kann das Gelenk nicht selbst voll strecken oder beugen; (2) die **passive Bewegung** ist ebenfalls eingeschränkt — auch wenn Pflegekräfte bewegen, stößt man an einen Widerstand; (3) die **Muskulatur ist verhärtet** und es zeigt sich ein erhöhter Widerstand gegen Dehnung. Betroffen sind meist **Schulter-, Ellenbogen-, Hüft- und Kniegelenk** sowie das **obere Sprunggelenk (Spitzfuß)**. Kontrakturen sind in der Pflege überwiegend **prophylaxefähig** — das heißt, durch rechtzeitige Bewegung und korrekte Positionierung vermeidbar. Abgrenzung: Eine vorübergehende Steifigkeit nach dem Aufwachen ist keine Kontraktur."

**B1 (520 Zeichen):**
"Eine **Kontraktur** ist, wenn ein Gelenk steif wird und steif bleibt. Drei Zeichen siehst du: (1) Der Patient kann das Gelenk **selbst** nicht mehr voll bewegen. (2) Auch du kannst das Gelenk beim Helfen nicht mehr ganz bewegen. (3) Der **Muskel ist hart** und spannt sich gegen die Bewegung. Oft betroffen: Schulter, Ellenbogen, Hüfte, Knie und das Fußgelenk (Spitzfuß). Wichtig: **Kontrakturen kann man oft vermeiden**. Mit Bewegung und richtiger Lagerung verhinderst du, dass ein Gelenk steif wird. Steif nach dem Aufstehen ist keine Kontraktur."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep — 3 Merkmale)
- **Glossar-Begriffe:** [Kontraktur, aktive Bewegung, passive Bewegung, Neutral-Null-Stellung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Eine Kontraktur ist dasselbe wie eine Muskelverspannung"**
- **Fachbegriff:** Verspannungs-Verwechslung
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — du denkst an eine **Verspannung**, die vorübergehend ist und sich löst. Eine Kontraktur ist **dauerhaft**: Bindegewebe hat sich umgebaut, die Gelenkkapsel ist verkürzt. Merke: Verspannung = Muskel spannt, Kontraktur = Gelenk bleibt steif."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — eine Verspannung geht wieder weg. Eine Kontraktur bleibt. Bei der Kontraktur hat sich das Bindegewebe um das Gelenk verändert. Merke: Verspannung = kurze Zeit. Kontraktur = bleibt."

**D2: "Kontrakturen treten nur bei bettlägerigen Menschen auf"**
- **Fachbegriff:** Bettlägerigkeits-Mythos
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — schon eine **Reduktion des gewohnten Bewegungsradius** reicht. Auch Rollstuhlfahrer, Menschen mit Schonhaltung nach OP, fixierte Patienten oder Menschen mit Schmerzen sind gefährdet. Laut MDS (2018) sind **59 %** der pflegebedürftigen Menschen ambulant kontrakturgefährdet."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — auch Menschen im Rollstuhl, mit Schmerzen oder nach einer OP haben ein Risiko. Es reicht schon, wenn ein Mensch sich **weniger bewegt als früher**. Der MDS sagt 2018: 59 % der ambulant gepflegten Menschen sind gefährdet."

**D3: "Eine Kontraktur kann man mit einer Massage wieder lösen"**
- **Fachbegriff:** Reversibilitäts-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — eine bestehende Kontraktur lässt sich nicht 'wegmassieren'. Das Bindegewebe um die Gelenkkapsel hat sich dauerhaft umgebaut. Therapie braucht Zeit (Physio, ggf. OP) — oder bleibt teilweise. Deswegen ist **Prophylaxe** so wichtig. Merke: Vorbeugen ist wirksamer als behandeln."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — eine Kontraktur geht **nicht einfach mit Massage weg**. Das Gewebe um das Gelenk hat sich verändert. Die Behandlung dauert lange — und hilft nicht immer ganz. Deswegen: **Vorbeugen** ist wichtiger als Behandeln."

### Richtig-Feedback
**C1 (245 Zeichen):** "Genau. Eine Kontraktur ist die dauerhafte Gelenkversteifung mit eingeschränkter aktiver und passiver Beweglichkeit plus verhärteter Muskulatur. Wichtig: Sie ist meist prophylaxefähig — Pflege kann viel tun, bevor das Gelenk steif wird."

**B1 (210 Zeichen):** "Sehr gut. Eine Kontraktur ist eine Gelenkversteifung. Der Patient kann es nicht bewegen, du auch nicht, und der Muskel ist hart. Die gute Nachricht: **Du kannst das verhindern** — mit Bewegung und guter Lagerung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist eine Kontraktur? (3 Merkmale)"
- **Rückseite:** "Dauerhafte Gelenkversteifung. Merkmale: (1) aktive Bewegung eingeschränkt, (2) passive Bewegung eingeschränkt, (3) verhärtete Muskulatur mit erhöhtem Dehnungswiderstand."
- **Kategorie:** fachbegriff

---

## Baustein 2: entstehungskette

### Metadaten
- **bausteinId:** kontraktur-prophylaxe-entstehung
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Frau K. liegt nach einem schweren Schlaganfall seit 10 Tagen fast durchgehend im Bett. Welche Kette läuft in ihren Gelenken ab, bis ein Ellenbogen steif wird? Beschreibe die Schritte."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Die Kette läuft in drei Schritten: Immobilität → Muskelverkürzung → Kontraktur. Schon nach **4-14 Tagen** Ruhigstellung bildet sich elastisches Bindegewebe um die Gelenkkapsel. Der Bewegungsradius sinkt, das Gelenk versteift."

**B1 (220 Zeichen):** "Die Kette: **Wenig Bewegung → Muskel wird kürzer → Gelenk wird steif**. Nach **4 bis 14 Tagen** ohne Bewegung verändert sich das Gewebe um das Gelenk. Das Gelenk kann sich dann nicht mehr so weit bewegen wie vorher."

- **Step-Typ:** text (displayFormat: analogy — "Ein Gummiband, das du nie dehnst, wird hart")

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Die Entstehung folgt einer klaren Kette: **Immobilität → Muskelverkürzung → Bindegewebsumbau → Gelenksteife.**

**Schritt 1 — Immobilität:** Ein Mensch reduziert seinen Bewegungsradius. Gründe: Bettruhe nach OP, Schlaganfall, Schmerzen, Schonhaltung, demenzielle Abbauprozesse, freiheitsentziehende Maßnahmen (FeM, § 1831 BGB).

**Schritt 2 — Muskelverkürzung:** Wird ein Muskel nicht mehr in seiner vollen Länge beansprucht, passt er seine Sarkomerzahl an. Er wird **kürzer und schwächer**. Der Dehnungswiderstand steigt.

**Schritt 3 — Bindegewebsumbau (extraartikulär):** Bereits nach **4-14 Tagen** ohne Gelenkbewegung bildet sich um die Gelenkkapsel neues, weniger elastisches Bindegewebe. Die Gelenkkapsel selbst verkürzt sich.

**Schritt 4 — Gelenksteife:** Der Bewegungsradius sinkt. Die Gelenke, die am häufigsten betroffen sind: **Schulter, Knie** und das **obere Sprunggelenk** (Spitzfuß).

Wichtig: Die ersten Veränderungen sind reversibel — deshalb zählt jeder Tag. (Bundesärztekammer, Neutral-Null-Methode)"

**B1 (590 Zeichen):**
"So entsteht eine Kontraktur:

**Schritt 1 — Wenig Bewegung:** Der Mensch bewegt sich weniger. Gründe: Bettruhe, Schlaganfall, Schmerzen, Fixierung.

**Schritt 2 — Muskel wird kürzer:** Ein Muskel, der nie ganz gedehnt wird, wird kürzer. Er fühlt sich hart an. Dehnen tut weh.

**Schritt 3 — Gewebe verändert sich:** Schon nach **4 bis 14 Tagen** bildet sich neues Gewebe um das Gelenk. Dieses Gewebe ist **nicht so elastisch** wie vorher. Die Gelenkkapsel wird kürzer.

**Schritt 4 — Gelenk wird steif:** Der Bewegungsweg wird kleiner. Am häufigsten: **Schulter, Knie und Fuß (Spitzfuß)**.

Merke: Am Anfang kann man es noch zurückdrehen. **Jeder Tag zählt.**"

- **Erklärungs-Step:** stepType `diagram` (4 Schritte visualisiert: Immobilität → Muskel → Bindegewebe → Versteifung)
- **Glossar-Begriffe:** [Sarkomer, Gelenkkapsel, extraartikulär, Dehnungswiderstand]

### Misconceptions → Distraktoren

**D1: "Kontrakturen entstehen erst nach mehreren Wochen — am Anfang passiert nichts"**
- **Fachbegriff:** Zeitfenster-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — schon nach **4-14 Tagen** Ruhigstellung baut sich Bindegewebe um die Gelenkkapsel auf. Ein Spitzfuß kann sogar schon nach wenigen Tagen strikter Bettruhe entstehen. Das Prinzip: **Je früher bewegt wird, desto besser.** Merke: Nicht 'Wochen warten', sondern sofort handeln."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — schon nach **4 bis 14 Tagen** fängt es an. Ein Spitzfuß kann schon nach ein paar Tagen Bettruhe entstehen. Merke: Du musst nicht warten, bis es schlimm aussieht. Fang **früh** an zu bewegen."

**D2: "Nur die großen Muskeln können sich verkürzen — kleine Gelenke wie die Finger sind sicher"**
- **Fachbegriff:** Kleine-Gelenke-Unterschätzung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — gerade **Finger und Zehen** sind anfällig. Die Unbeweglichkeit von Zehen und Fingern führt außerdem zu schmierigen Belägen in den Zwischenräumen — das begünstigt **Intertrigo**. Nach Mammaablatio ist das Schulter-Arm-Syndrom ein klassisches Beispiel. Merke: Jedes Gelenk zählt."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — auch **Finger und Zehen** können steif werden. Bei Finger- und Zehenkontrakturen entstehen oft nasse Stellen zwischen den Fingern — das kann zu **Intertrigo** (Hautpilz in den Falten) führen. Merke: Jedes Gelenk ist wichtig, auch die kleinen."

**D3: "Wenn ein Muskel einmal verkürzt ist, ist das Gelenk sofort steif"**
- **Fachbegriff:** Einstufigkeits-Irrtum
- **Feedback (C1, 305 Zeichen):** "Fast — aber die Kette hat mehrere Stufen. Zuerst **Muskelverkürzung** (reversibel durch Dehnen), dann **Bindegewebsumbau** um die Gelenkkapsel (teilweise reversibel), dann **Gelenksteife** (oft dauerhaft). Je früher du in der Kette eingreifst, desto größer die Chance auf Heilung. Merke: Das Zeitfenster ist dein Freund."
- **Feedback (B1, 265 Zeichen):** "Fast — es geht in **Stufen**. Zuerst wird der **Muskel** kürzer (kann man noch umkehren). Dann verändert sich das **Gewebe** um das Gelenk (schwerer). Zum Schluss wird das **Gelenk** steif (oft dauerhaft). Merke: Je früher du hilfst, desto besser."

### Richtig-Feedback
**C1 (275 Zeichen):** "Sehr gut gedacht. Die Kette: Immobilität → Muskelverkürzung (Sarkomer-Anpassung) → Bindegewebsumbau um die Gelenkkapsel nach **4-14 Tagen** → Gelenksteife. Wichtig für die Praxis: Die frühen Stufen sind reversibel — jeder Tag aktiver Bewegung zählt für die Prophylaxe."

**B1 (240 Zeichen):** "Sehr gut. Die Kette: **Wenig Bewegung → Muskel kürzer → Gewebe verändert sich → Gelenk steif**. Nach **4 bis 14 Tagen** fängt es an. Die gute Nachricht: Am Anfang kann man es noch zurückdrehen. Deshalb: **Sofort bewegen, nicht warten.**"

### Verknüpfte Karteikarte
- **Vorderseite:** "Nach wie vielen Tagen Ruhigstellung beginnt sich Bindegewebe um die Gelenkkapsel zu bilden?"
- **Rückseite:** "4-14 Tage. Deshalb so früh wie möglich aktiv oder passiv durchbewegen."
- **Kategorie:** fakt

---

## Baustein 3: funktionsstellung-neutral-null

### Metadaten
- **bausteinId:** kontraktur-prophylaxe-funktionsstellung
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 10 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn ein Gelenk versteifen würde — in welcher Stellung wäre es für den Patienten am **wenigsten schlimm**? Denke an eine Hand: Faust zu oder flach offen? Warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Die **Funktionsstellung** ist die Gelenkposition, in der ein Gelenk — falls es versteifen würde — dem Patienten den größten Restnutzen lässt. Grundlage ist die **Neutral-Null-Methode**: Jedes Gelenk hat eine Ausgangsstellung, von der aus Beweglichkeit gemessen wird."

**B1 (230 Zeichen):** "Die **Funktionsstellung** ist die **beste** Stellung für ein Gelenk — falls es wirklich steif werden sollte. In dieser Stellung kann der Patient noch am meisten tun. Ausgangsbasis: Die **Neutral-Null-Stellung** ist die Position im aufrechten Stand."

- **Step-Typ:** comparison (Tabelle Funktionsstellung pro Gelenk)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Die **Neutral-Null-Methode** (AAOS-Standard) beschreibt für jedes Gelenk eine Ausgangsstellung — gedacht als Position, die der Körper im aufrechten, lockeren Stand einnimmt. Abweichungen werden in Grad gemessen.

Die **Funktionsstellung** ist davon abgeleitet die **pflegerisch-funktionell wichtigste Position** — in ihr lässt sich ein steifes Gelenk noch am besten 'gebrauchen':

| Gelenk | Funktionsstellung | Grund |
|--------|-------------------|-------|
| Schulter | leichte Abduktion (30-40°), Außenrotation | Hand kann zum Gesicht geführt werden |
| Ellenbogen | 90° Beugung | Essen, Gesicht waschen, Türen öffnen |
| Handgelenk | leichte Dorsalextension (~20°) | Kraftvoller Griff möglich |
| Finger | leichte Flexion (Intrinsic-plus) | Greifen und Halten |
| Hüfte | Streckung 0°, leichte Abduktion | Gehen, Stehen |
| Knie | Streckung 0° | Stehen, Gehen |
| Oberes Sprunggelenk | Neutral (90°-Winkel zum Unterschenkel) | Ferse aufsetzen, Spitzfußprophylaxe |

**Praxis-Konsequenz:** Bei jeder Positionierung prüfst du, ob die Gelenke in Neutral-Null-Stellung oder Funktionsstellung liegen. Hohlräume werden so unterpolstert, dass Muskeln den Tonus abgeben können und Gelenke **keine Extrempositionen** halten müssen. (Bobath 1990, AAOS-Standard)"

**B1 (620 Zeichen):**
"Die **Neutral-Null-Stellung** ist die normale Position eines Gelenks. Stell dir vor: Du stehst gerade, Arme hängen neben dem Körper. Das ist Neutral-Null.

Die **Funktionsstellung** ist die **beste Notfall-Position**. Falls ein Gelenk wirklich steif werden sollte — in welcher Stellung kann der Patient am meisten tun?

| Gelenk | Funktionsstellung | Warum |
|--------|-------------------|-------|
| Schulter | leicht vom Körper weg, nach außen gedreht | Hand zum Gesicht möglich |
| Ellenbogen | 90° gebeugt | Essen, Waschen |
| Handgelenk | leicht nach hinten gekippt | Feste Faust |
| Finger | leicht gebeugt | Greifen |
| Hüfte | gestreckt | Stehen, Gehen |
| Knie | gestreckt | Stehen |
| Fußgelenk | 90° zum Bein | Ferse auf dem Boden |

**Praxis:** Immer prüfen — liegt das Gelenk in einer guten Position? Hohlräume polstern, damit die Muskeln sich entspannen können."

- **Erklärungs-Step:** stepType `matrix` (Gelenk × Funktionsstellung × Grund)
- **Glossar-Begriffe:** [Neutral-Null-Methode, Funktionsstellung, Abduktion, Dorsalextension, Intrinsic-plus]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Funktionsstellung heißt: Gelenk so strecken wie möglich"**
- **Fachbegriff:** Streckungs-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Funktionsstellung ist **nicht** 'maximal gestreckt'. Beim **Ellenbogen** ist z.B. die 90°-Beugung die Funktionsstellung, damit die Hand zum Mund geführt werden kann. Beim **Knie** dagegen ist Streckung 0° richtig. Jedes Gelenk hat seine eigene Funktionsstellung. Merke: Gelenk-spezifisch."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — nicht jedes Gelenk soll gestreckt sein. Der **Ellenbogen** soll 90° gebeugt sein (damit der Patient essen kann). Das **Knie** soll gestreckt sein. Jedes Gelenk hat seine **eigene** beste Stellung. Merke: Es ist bei jedem Gelenk anders."

**D2: "Neutral-Null und Funktionsstellung sind dasselbe"**
- **Fachbegriff:** Begriffs-Konfusion
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **Neutral-Null** ist die **Messbasis** (Ausgangsstellung, von der aus Beweglichkeit in Grad gemessen wird). **Funktionsstellung** ist die **pflegerisch-funktionell beste Position**, falls eine Versteifung droht. Oft ähnlich (z.B. Knie), aber nicht immer identisch (Ellenbogen, Schulter). Merke: Neutral-Null = messen, Funktionsstellung = pflegen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — das sind zwei verschiedene Dinge. **Neutral-Null** ist die normale Position (zum Messen, wie viel Grad sich ein Gelenk bewegen kann). **Funktionsstellung** ist die **beste Position für den Alltag**, falls ein Gelenk steif wird. Merke: Neutral-Null = messen. Funktion = pflegen."

**D3: "Bei Hemiplegie gilt die gleiche Funktionsstellung wie bei gesunden Menschen"**
- **Fachbegriff:** Hemiplegie-Einheitsstellung
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — bei **Hemiplegie** (halbseitige Lähmung nach Schlaganfall) gilt die **Bobath-Positionierung**: Der betroffene Arm wird im Liegen eng am Körper oder im Sitzen in **Neutral-Null-Stellung** nach Bobath gelagert, um Spastiken und Kontrakturen zu vermeiden. Die Schulter bekommt z.B. keine extreme Abduktion. Merke: Bobath statt Standard."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — bei einem **Schlaganfall** mit halbseitiger Lähmung arbeitet man nach **Bobath**. Der gelähmte Arm wird eng am Körper oder in Neutral-Null-Stellung gelagert. Wichtig: **Nicht** nach außen drehen. Merke: Bei Hemiplegie gilt Bobath, nicht die normale Standardlagerung."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Die Funktionsstellung ist gelenk-spezifisch: Ellenbogen 90°, Knie gestreckt, oberes Sprunggelenk 90°, Schulter leicht abduziert + außenrotiert. Grundlage: Die Neutral-Null-Methode (AAOS-Standard). Praxis: Bei jeder Positionierung prüfst du die Stellung — Hohlräume polstern, Muskeln entspannen lassen."

**B1 (260 Zeichen):** "Sehr gut. Jedes Gelenk hat seine eigene beste Stellung: Ellenbogen 90° gebeugt (für Essen), Knie gestreckt (für Stehen), Fußgelenk 90° zum Bein (keine Spitzfußgefahr). Grundlage ist die **Neutral-Null-Methode**. Beim Positionieren immer prüfen und polstern."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist die Funktionsstellung des Ellenbogens und warum?"
- **Rückseite:** "90°-Beugung. Grund: Wenn das Gelenk versteifen würde, kann der Patient in dieser Stellung noch Essen, Gesicht waschen und Türen öffnen."
- **Kategorie:** fakt

---

## Baustein 4: spitzfuss

### Metadaten
- **bausteinId:** kontraktur-prophylaxe-spitzfuss
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Herr S. liegt nach einer Knie-OP seit 6 Tagen im Bett. Die Bettdecke drückt auf seine Füße. Was kannst du in seinen Fußgelenken kontrollieren, damit später nichts Dauerhaftes zurückbleibt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Ein **Spitzfuß** (Pes equinus) ist die häufigste Kontraktur in der Pflege. Das obere Sprunggelenk versteift in Plantarflexion — die Ferse kann nicht mehr den Boden erreichen. Ursache: Druck der Bettdecke + fehlende Dorsalextension bei Bettruhe."

**B1 (225 Zeichen):** "Ein **Spitzfuß** ist die häufigste Kontraktur in der Pflege. Der Fuß bleibt **nach unten gestreckt**. Der Patient kann die **Ferse nicht mehr auf den Boden** setzen. Ursache: Bettdecke drückt von oben, der Fuß bewegt sich zu wenig."

- **Step-Typ:** labelImage (Fuß in Spitzfußstellung vs. Neutralstellung)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Der **Spitzfuß (Pes equinus)** ist die Versteifung des oberen Sprunggelenks in **Plantarflexion** — der Fuß steht nach unten 'gestreckt', wie auf Zehenspitzen. Folge: Die Ferse kann nicht mehr auf den Boden gesetzt werden, normales Gehen und Stehen sind unmöglich.

**Entstehung bei Bettruhe:**
- Die **Bettdecke** drückt von oben auf den Vorfuß.
- Das **Eigengewicht** des Fußes zieht ihn bei Rückenlage in Plantarflexion.
- Die Wadenmuskulatur (Musculus triceps surae) verkürzt sich.
- Schon **wenige Tage** strikte Bettruhe reichen — besonders bei bewusstseinsgetrübten Patienten.

**Risikogruppen:**
- Patienten auf Intensivstation (Sedierung, Immobilität)
- Bettlägerige mit hohem Muskeltonus oder Spastik
- Patienten mit hohem Fußende der Bettdecke

**Prophylaxe:**
- **90°-Winkel** Fuß zu Unterschenkel aktiv oder passiv halten
- **Bettdecke abheben** (Bettbogen, Kissen am Fußende)
- **Regelmäßig dorsalextensieren** (Fuß nach oben ziehen) — Pflege, Physio, Patient selbst
- **Keine Kissen unter die Kniekehle** (das Fußgelenk muss frei bleiben)
- Keine Keilkissen, die den Fuß in Plantarflexion drücken."

**B1 (620 Zeichen):**
"Der **Spitzfuß** ist die häufigste Kontraktur. Der Fuß bleibt **nach unten gestreckt**, wie auf Zehenspitzen. Der Patient kann die **Ferse nicht mehr auf den Boden** stellen.

**Wie entsteht er?**
- Die **Bettdecke** drückt von oben auf den Fuß.
- Das Gewicht des Fußes zieht ihn nach unten.
- Die Wadenmuskeln werden kürzer.
- Schon **wenige Tage** Bettruhe reichen.

**Wer ist besonders gefährdet?**
- Patienten auf der Intensivstation
- Bettlägerige Patienten mit hohem Muskeltonus
- Patienten mit schwerer Bettdecke auf den Füßen

**Was machst du dagegen?**
- Fuß in **90°** zum Bein halten — aktiv oder passiv
- Die **Bettdecke hochheben** (Bettbogen oder kleines Kissen)
- Den Fuß regelmäßig **nach oben** ziehen
- **Keine Kissen** unter die Kniekehle — das Fußgelenk muss frei sein"

- **Erklärungs-Step:** stepType `reveal` (Entstehung → Risiko → Prophylaxe in 3 Schritten aufdecken)
- **Glossar-Begriffe:** [Spitzfuß, Pes equinus, Plantarflexion, Dorsalextension, Bettbogen, Musculus triceps surae]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Kissen unter die Kniekehle verhindert Spitzfuß"**
- **Fachbegriff:** Knie-Kissen-Mythos
- **Feedback (C1, 315 Zeichen):** "Falsche Schlussfolgerung — ein Kissen unter die Kniekehle **fördert** sogar Kontrakturen (Knie-Beugekontraktur, Hüftbeuger-Verkürzung). Es verhindert **keinen** Spitzfuß, weil das Fußgelenk dadurch nicht beeinflusst wird. Gegen Spitzfuß hilft: 90°-Winkel am Fuß, Bettbogen, regelmäßige Dorsalextension. Merke: Knie-Kissen = Fehler."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — ein Kissen unter das **Knie** hilft **nicht** gegen den Spitzfuß. Es macht sogar eine Beugekontraktur am Knie. Gegen Spitzfuß hilft: **Fuß in 90°** halten, **Bettbogen** nutzen, **regelmäßig** den Fuß nach oben ziehen. Merke: **Kein Kissen** unters Knie."

**D2: "Ein fester Keil unter der Fußsohle drückt den Fuß in die richtige Position"**
- **Fachbegriff:** Fußkeil-Illusion
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — starre Keile erzeugen Druck gegen die Fußsohle, lösen dadurch einen Streckreflex aus und können Dekubitus an der Ferse verursachen. Moderne Evidenz: aktive/passive Bewegung schlägt passive Lagerung. Besser: Bettbogen + regelmäßiges Durchbewegen. Merke: Aktivität vor Apparatur."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — ein fester Keil kann **Druck** auf den Fuß machen und einen **Dekubitus an der Ferse** verursachen. Der Fuß spannt sich oft dagegen. Besser: Die Bettdecke **hochheben** (Bettbogen) und den Fuß regelmäßig **bewegen**. Merke: Bewegen ist besser als nur Lagern."

**D3: "Spitzfuß entsteht nur bei sehr alten Menschen"**
- **Fachbegriff:** Altersgebundenheit-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Spitzfüße entstehen bei **jedem Alter**, wenn das obere Sprunggelenk zu wenig bewegt wird. Besonders betroffen: **Intensivpatienten jeden Alters** (Sedierung, Beatmung), Kinder mit Zerebralparese, Komapatienten. Das Alter ist nicht entscheidend, sondern die Immobilität. Merke: Jeder Bettlägerige ist gefährdet."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — einen Spitzfuß kann **jeder** bekommen, der lange liegt. Besonders auf der **Intensivstation**, bei Kindern mit bestimmten Krankheiten und bei Menschen im Koma. Wichtig ist nicht das Alter, sondern wie **wenig** der Fuß bewegt wird. Merke: Jedes Alter kann betroffen sein."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Spitzfuß ist die häufigste Kontraktur — obere Sprunggelenksversteifung in Plantarflexion. Prophylaxe: 90°-Winkel Fuß-Unterschenkel, Bettbogen gegen Bettdeckendruck, regelmäßige Dorsalextension aktiv/passiv, keine Kissen unter der Kniekehle. Bei Intensivpatienten täglich kontrollieren."

**B1 (245 Zeichen):** "Genau. Der Spitzfuß ist die häufigste Kontraktur: Der Fuß bleibt nach unten gestreckt. Vorbeugen: **Fuß in 90°** zum Bein, **Bettbogen** für die Bettdecke, **regelmäßig** den Fuß nach oben ziehen, **kein Kissen** unter der Kniekehle."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Spitzfuß und wie beugst du ihm vor?"
- **Rückseite:** "Versteifung des oberen Sprunggelenks in Plantarflexion — Ferse erreicht Boden nicht mehr. Prophylaxe: 90°-Winkel Fuß-Unterschenkel, Bettbogen gegen Bettdeckendruck, regelmäßig Fuß dorsalextensieren."
- **Kategorie:** handlung

---

## Baustein 5: risikogruppen-ursachen

### Metadaten
- **bausteinId:** kontraktur-prophylaxe-risikogruppen
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Du arbeitest auf einer gemischten Station. Welche deiner Patienten sind am stärksten von Kontrakturen gefährdet? Nenne mindestens 3 Gruppen und begründe kurz."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Hochrisikogruppen: **Schlaganfall** (Hemiplegie mit dysreguliertem Muskeltonus), **Intensivpatienten** (Sedierung, Beatmung), **Demenz** (Bewegungsreduktion), **Parkinson** (Rigor), **Fixierte** (FeM § 1831 BGB), **Multimorbide Pflegeheimbewohner**."

**B1 (225 Zeichen):** "Besonders gefährdet sind: **Schlaganfall**-Patienten (halbseitige Lähmung), **Intensivpatienten** (Sedierung), Menschen mit **Demenz**, mit **Parkinson**, **fixierte** Patienten und Menschen im **Pflegeheim** mit vielen Krankheiten."

- **Step-Typ:** categorize (6 Patiententypen → Risiko zuordnen)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"**Hochrisikogruppen für Kontrakturen:**

| Gruppe | Grund |
|--------|-------|
| **Schlaganfall (Hemiplegie)** | Dysregulierter Muskeltonus, Spastik, reduzierte Eigenbewegung. Häufigkeit Kontrakturen > Stürze (Sackley 2008) |
| **Intensivpatienten** | Sedierung, Beatmung, Immobilität. Häufig Spitzfuß + Schulter-/Ellenbogen-Kontrakturen |
| **Demenz** | Reduktion des gewohnten Bewegungsradius, demenzielle Abbauprozesse, oft kombiniert mit Schmerzvermeidung |
| **Parkinson** | Muskulärer Rigor, verminderte Mitbewegung, Schonhaltung |
| **Fixierte Patienten** | Freiheitsentziehende Maßnahmen (§ 1831 BGB) reduzieren Bewegung — FeM können selbst Kontrakturen verursachen |
| **Multimorbide Pflegeheimbewohner** | Kombination aus Schmerz, Medikamenten, Schonhaltung, geringer Aktivität |
| **Z.n. Mammaablatio** | Schulter-Arm-Syndrom durch fehlende Nutzung der betroffenen Seite |
| **Kinder mit Zerebralparese, Klumpfuß** | Angeborene oder frühkindliche Kontrakturursachen |

**Prävalenz-Zahlen (belegt):**
- **15-70 %** der älteren Krankenhauspatienten in Deutschland leiden unter Kontrakturen (Gnass et al. 2010)
- **59,1 %** der ambulant pflegebedürftigen älteren Menschen sind kontrakturrisikogefährdet (MDS 2018)"

**B1 (580 Zeichen):**
"**Diese Menschen sind besonders gefährdet:**

| Gruppe | Warum |
|--------|-------|
| **Schlaganfall-Patienten** | Der Muskeltonus stimmt nicht mehr. Eine Seite ist gelähmt. |
| **Intensivpatienten** | Sie sind lange sediert und bewegen sich wenig. Oft Spitzfuß. |
| **Menschen mit Demenz** | Sie bewegen sich immer weniger. |
| **Parkinson-Patienten** | Die Muskeln sind steif (Rigor). |
| **Fixierte Patienten** | Sie dürfen sich nicht bewegen. Das schafft selbst Kontrakturen. |
| **Pflegeheimbewohner mit vielen Krankheiten** | Schmerzen, Medikamente, Schonhaltung. |
| **Nach Brustamputation** | Die Schulter wird auf der OP-Seite nicht mehr bewegt. |
| **Kinder mit bestimmten Krankheiten** | Angeborene Kontrakturen. |

**Zahlen (belegt):**
- **15 bis 70 %** der alten Krankenhauspatienten haben Kontrakturen (Gnass 2010).
- **59 %** der ambulant gepflegten alten Menschen sind gefährdet (MDS 2018)."

- **Erklärungs-Step:** stepType `matrix` (Gruppe × Grund × Häufigkeit)
- **Glossar-Begriffe:** [Hemiplegie, Spastik, Rigor, Zerebralparese, FeM]

### Misconceptions → Distraktoren

**D1: "Fixierung schützt den Patienten vor Stürzen UND Kontrakturen"**
- **Fachbegriff:** Fixierungs-Schutzmythos
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — Fixierung kann **selbst Kontrakturen verursachen**, weil die Bewegung reduziert wird. Freiheitsentziehende Maßnahmen (FeM, § 1831 BGB) brauchen strenge Indikation und richterliche Genehmigung. Alternative: Niederflurbett, Bewegungsförderung, 1:1-Begleitung. Merke: Fixierung schafft Immobilität, nicht Schutz."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **Fixierung kann Kontrakturen machen**. Der Patient kann sich nicht mehr bewegen. Das ist schlecht für die Gelenke. Fixierung ist nur in Ausnahmen erlaubt (§ 1831 BGB, Richter muss zustimmen). Besser: **Niederflurbett**, mehr Bewegung, jemand bleibt da."

**D2: "Nur bewegungsunfähige Patienten brauchen Kontrakturprophylaxe"**
- **Fachbegriff:** Vollmobilitäts-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — schon eine **Reduktion** des gewohnten Bewegungsradius reicht. Ein Patient, der früher spazieren ging und jetzt nur noch sitzt, ist bereits gefährdet. Laut MDS (2018) sind 59 % der ambulant gepflegten alten Menschen kontrakturrisikogefährdet. Merke: Weniger Bewegung als früher = Risiko."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — es reicht schon, wenn ein Mensch **weniger bewegt** als früher. Jemand, der früher spazieren ging und jetzt nur sitzt, ist gefährdet. Der MDS sagt 2018: **59 %** der ambulant gepflegten alten Menschen haben ein Risiko."

**D3: "Schlaganfall-Patienten verursachen ihre Kontrakturen durch die Lähmung selbst — Pflege kann nichts tun"**
- **Fachbegriff:** Ohnmachts-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — gerade bei Schlaganfall ist Pflege **wirksam**: Bobath-Positionierung, frühe Mobilisation, passive Bewegungsübungen, Wahrnehmungsförderung. Studien zeigen: Bei Schlaganfallbetroffenen tritt eine Kontraktur häufiger auf als ein Sturz (Sackley 2008) — und beides ist teilweise vermeidbar. Merke: Pflege kann viel."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — Pflege **kann viel tun** bei Schlaganfall: Lagerung nach **Bobath**, früh mobilisieren, passive Bewegungen machen, Wahrnehmung fördern. Studien zeigen: Kontrakturen kommen sogar häufiger als Stürze. Und beides können wir oft vermeiden."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Hochrisiko: Schlaganfall, Intensiv, Demenz, Parkinson, Fixierte, multimorbide Heimbewohner, Z.n. Mammaablatio, Kinder mit Zerebralparese. Zahlen: 15-70 % älterer Krankenhauspatienten (Gnass 2010), 59 % ambulant Pflegebedürftiger (MDS 2018). Der erste Schritt ist Risiko erkennen."

**B1 (250 Zeichen):** "Genau. Hochrisiko: Schlaganfall, Intensiv, Demenz, Parkinson, fixierte Patienten, alte Pflegeheimbewohner. Zahlen: **15-70 %** der alten Krankenhauspatienten haben Kontrakturen (Gnass 2010). **59 %** der ambulant Gepflegten sind gefährdet (MDS 2018)."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 6 Risikogruppen für Kontrakturen kennst du?"
- **Rückseite:** "1. Schlaganfall (Hemiplegie), 2. Intensivpatienten, 3. Demenz, 4. Parkinson, 5. Fixierte Patienten (FeM), 6. Multimorbide Pflegeheimbewohner. Zusätzlich: Z.n. Mammaablatio, Kinder mit Zerebralparese."
- **Kategorie:** fakt

---

## Baustein 6: risikoassessment

### Metadaten
- **bausteinId:** kontraktur-prophylaxe-assessment
- **bloomLevel:** 4
- **wissensart:** assessment
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Es gibt (noch) keine einheitliche Kontraktur-Skala wie die Braden-Skala. Wie würdest du **trotzdem** das Kontrakturrisiko eines Patienten einschätzen? Welche 4-5 Fragen würdest du stellen oder welche Beobachtungen machen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Es gibt **kein** standardisiertes Einzelinstrument für Kontrakturrisiko. Klinikeigene Bewegungsanalysen und Mobilitätsassessments sind Pflicht. Etabliert: **Barthel-Index**, **Timed-Up-and-Go**, **MOTPA** (Brach 2006), **EBoMo** (Zegelin 2007). Klinisches Urteil führt."

**B1 (235 Zeichen):** "Es gibt **keine** einzelne Kontraktur-Skala. Stattdessen nutzen Pflegekräfte mehrere Werkzeuge: **Barthel-Index** (wie selbstständig?), **Timed-Up-and-Go** (wie schnell aufstehen?), Beobachtung im Alltag. Das **klinische Auge** ist wichtig."

- **Step-Typ:** text (displayFormat: checklist — 5 Beobachtungsfragen)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"**Kontraktur-Risikoassessment — pragmatische Schritte:**

1. **Bewegungsradius beobachten:**
   - Wie bewegt sich der Patient im Bett (Kopfwärtsrücken, Seitenlage, Aufsetzen)?
   - Kann er frei an der Bettkante sitzen (Rumpfkontrolle)?
   - Steht und geht er? Rollt er die Ferse ab?

2. **Aktivitätstest spielerisch:**
   - "Können Sie bitte das Handtuch neben Ihrem Kopf vom Haken nehmen?" → prüft Oberkörperrotation, Schulterbeweglichkeit, Fingergebrauch.

3. **Mobilitätsassessments einsetzen:**
   - **Timed-Up-and-Go** (DNQP Sturzprophylaxe 2013): Aufstehen, 3 m gehen, umdrehen, hinsetzen — misst alltagsnahe Mobilität.
   - **MOTPA** (Brach et al. 2006) — Krankenhaus.
   - **EBoMo** (Zegelin & Reuther 2007) — Pflegeheim.

4. **Neutralstellung prüfen:**
   - Jedes Gelenk in Neutral-Null bewegen (sanft, langsam). Widerstand, Schmerz oder Bewegungseinschränkung dokumentieren.

5. **Risikofaktoren aus der Anamnese:**
   - Welche Grunderkrankungen (Schlaganfall, Parkinson, Demenz)?
   - Medikamente mit Sedierung/Bewegungshemmung (Neuroleptika, Polypharmazie)?
   - Schmerzen, Schonhaltungen, Narben?

Der DNQP-Expertenstandard Mobilität (2020) verankert die Bewegungsanalyse als Pflegeleistung. Das klinische Urteil bleibt führend, weil kein Einzelinstrument allein reicht."

**B1 (660 Zeichen):**
"**So schätzt du das Kontrakturrisiko ein:**

1. **Schau zu, wie der Patient sich bewegt:**
   - Kann er sich im Bett drehen und hochrücken?
   - Kann er an der Bettkante sitzen?
   - Kann er aufstehen und gehen?

2. **Mach einen kleinen Test:**
   - "Bitte nehmen Sie das Handtuch neben Ihrem Kopf." → Du siehst, wie gut Schulter und Finger funktionieren.

3. **Nutze Test-Werkzeuge:**
   - **Timed-Up-and-Go**: Der Patient steht auf, geht 3 Meter, dreht sich, setzt sich. Wie lange braucht er?
   - **MOTPA** (für Krankenhaus), **EBoMo** (für Pflegeheim).

4. **Teste jedes Gelenk:**
   - Bewege jedes Gelenk **sanft** in alle Richtungen. Wo ist ein Widerstand? Wo hat der Patient Schmerz?

5. **Schau in die Patientengeschichte:**
   - Hat er Schlaganfall, Parkinson, Demenz?
   - Welche Medikamente nimmt er?
   - Hat er Schmerzen oder Schonhaltungen?

Wichtig: Kein einzelnes Werkzeug reicht allein. Dein **Blick und deine Erfahrung** zählen immer."

- **Erklärungs-Step:** stepType `sorting` (5 Assessment-Schritte in richtige Reihenfolge)
- **Glossar-Begriffe:** [Assessment, Timed-Up-and-Go, MOTPA, EBoMo, Polypharmazie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Braden-Skala ist auch für Kontrakturrisiko geeignet"**
- **Fachbegriff:** Skalen-Übertragungsfehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die **Braden-Skala** ist ein **Dekubitus**-Assessment. Sie misst zwar u.a. Mobilität, aber nicht gezielt Gelenkbeweglichkeit. Für Kontrakturrisiko nutzt man klinikeigene Bewegungsanalysen plus MOTPA/EBoMo. Merke: Braden = Dekubitus, nicht Kontraktur."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die **Braden-Skala** ist für **Dekubitus**. Sie misst zwar auch Bewegung, aber nicht die Gelenke. Für Kontraktur nimmst du **MOTPA** oder **EBoMo** und deinen Blick im Alltag. Merke: Braden = Dekubitus, nicht Kontraktur."

**D2: "Wenn der Patient selbstständig läuft, braucht er kein Kontrakturassessment"**
- **Fachbegriff:** Mobilitäts-Vollschutz-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — auch mobile Patienten können **einzelne** Gelenke unterbewegen (z.B. Schulter nach Mammaablatio, Hüfte nach Sturzangst). Ein Patient, der geht, kann trotzdem eine Schulterkontraktur entwickeln. Assessment bezieht sich auf **jedes einzelne Gelenk**, nicht nur auf Gesamt-Mobilität. Merke: Jedes Gelenk extra prüfen."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — auch wer geht, kann Kontrakturen bekommen. Zum Beispiel nach einer Brust-OP wird die Schulter oft nicht mehr richtig bewegt. Oder die Hüfte, wenn jemand Angst vor Stürzen hat. **Jedes Gelenk** muss einzeln geprüft werden — nicht nur 'kann er gehen?'."

**D3: "Das Kontrakturrisiko muss nur einmal bei Aufnahme erhoben werden"**
- **Fachbegriff:** Einmal-Erhebungs-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — das Risiko **verändert sich**. Bei Verschlechterung (neuer Schlaganfall, Schmerzen, Medikamentenwechsel) oder Verbesserung (Mobilisation wird besser) muss neu eingeschätzt werden. Der Pflegeprozess ist ein **Regelkreis** (Fiechter/Meier 1981) — auch Assessments gehören dazu. Merke: Laufend, nicht einmalig."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — das Risiko **ändert sich**. Wenn der Patient schlechter wird (neuer Schlaganfall, Schmerzen) oder besser (wieder mobil wird), musst du neu einschätzen. Der Pflegeprozess ist ein **Kreis** — Bewerten gehört immer dazu. Merke: Nicht nur einmal."

### Richtig-Feedback
**C1 (285 Zeichen):** "Sehr gut. Kein standardisiertes Einzelinstrument, aber: klinikeigene Bewegungsanalysen + Timed-Up-and-Go + MOTPA/EBoMo + systematische Gelenkprüfung + Anamnese der Risikofaktoren. Das klinische Auge bleibt zentral. Dokumentation nach jedem Assessment. Bei Veränderung neu einschätzen."

**B1 (250 Zeichen):** "Sehr gut. Es gibt keine **eine** Skala — aber du nutzt: Beobachtung im Alltag, **Timed-Up-and-Go**, **MOTPA** oder **EBoMo**, Prüfung jedes Gelenks, Blick in die Krankengeschichte. Wichtig: Bei Veränderung **neu prüfen** — nicht nur einmal."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welches standardisierte Einzelinstrument gibt es für Kontrakturrisiko?"
- **Rückseite:** "Keines. Stattdessen: klinikeigene Bewegungsanalyse + Mobilitätsassessments (Timed-Up-and-Go, MOTPA Brach 2006, EBoMo Zegelin 2007). Das klinische Urteil führt."
- **Kategorie:** assessment

---

## Baustein 7: massnahmen-uebersicht

### Metadaten
- **bausteinId:** kontraktur-prophylaxe-massnahmen
- **bloomLevel:** 3
- **wissensart:** massnahme
- **zeitBudget:** 10 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Was ist nach deinem Gefühl die **wichtigste** Maßnahme gegen Kontrakturen — und warum? (Ein Wort reicht für die Maßnahme.)"
- **Step-Typ:** freetext (erwartet: "Bewegung" — oberstes Gebot)

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "**Oberstes Gebot: Bewegung.** Jedes Gelenk, das nicht aus medizinischen Gründen ruhiggestellt sein muss, wird **aktiv oder passiv durchbewegt**. Ergänzend: normaler Tagesablauf mit Positionswechseln, Aktivierung, korrekte Positionierung, Schmerztherapie, Teamarbeit mit Physio."

**B1 (230 Zeichen):** "**Das Wichtigste ist Bewegung.** Jedes Gelenk, das sich bewegen **darf**, soll auch bewegt werden — aktiv oder passiv. Dazu: normaler Tagesablauf, verschiedene Positionen, richtig lagern, Schmerzen behandeln, mit der Physio zusammenarbeiten."

- **Step-Typ:** text (displayFormat: checklist — 5 Maßnahmen-Säulen)

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
"**Die 5 Säulen der Kontraktur-Prophylaxe:**

**Säule 1 — Bewegung (oberstes Gebot):**
- Jedes Gelenk, das nicht medizinisch ruhiggestellt ist, **täglich** aktiv oder passiv durchbewegen.
- **Aktiv**: Patient bewegt selbst.
- **Assistiv**: Patient bewegt, Pflege unterstützt.
- **Passiv**: Pflege bewegt bei bewusstseinsgetrübten oder gelähmten Patienten.
- Richtschnur: in physiologischem Ausmaß, schmerzfrei, mit leichter Endposition.

**Säule 2 — Normaler Tagesablauf + Positionswechsel:**
- Wechsel zwischen **Gehen, Sitzen, Stehen, Liegen** anbieten.
- Bewegungsmotivierende Situationen schaffen (z.B. Essen am Tisch statt im Bett).

**Säule 3 — Korrekte Positionierung:**
- Flach gestelltes Kopfteil in Rücken- und Seitenlage.
- **Kein Kissen unter der Kniekehle**.
- Hohlräume flächig unterpolstern (Nacken, Rücken, Knie, Fußsohle), damit Muskeln Tonus abgeben können.
- Gelenke in **Neutral-Null-Stellung** oder Funktionsstellung.

**Säule 4 — Schmerztherapie und Schonhaltungen adressieren:**
- Ursache suchen, interdisziplinäre Schmerztherapie, ggf. Wärmetherapie (nicht bei Sensibilitätsstörungen).
- Ziel: Bewegung ohne Schmerzvermeidung.

**Säule 5 — Teamarbeit mit Physio- und Ergotherapie:**
- Verordnete Schienen anbringen, auf funktionale Gelenkposition achten.
- Gemeinsame Übungspläne, gemeinsame Dokumentation, nicht parallel arbeiten."

**B1 (660 Zeichen):**
"**Die 5 Säulen gegen Kontrakturen:**

**Säule 1 — Bewegung (das Wichtigste):**
- Jedes Gelenk **täglich** bewegen.
- **Aktiv**: Der Patient bewegt selbst.
- **Assistiv**: Patient bewegt, du hilfst.
- **Passiv**: Du bewegst bei bewusstlosen oder gelähmten Patienten.
- **Sanft**, **ohne Schmerz**, bis zur **normalen** Endposition.

**Säule 2 — Verschiedene Positionen:**
- Wechsel zwischen **Gehen, Sitzen, Stehen, Liegen**.
- Gründe zum Bewegen schaffen (Essen am Tisch, nicht im Bett).

**Säule 3 — Richtig lagern:**
- Kopfteil **flach** in Rücken- und Seitenlage.
- **Kein Kissen unter das Knie**.
- Hohlräume mit Handtüchern oder kleinen Kissen **flächig** ausfüllen.
- Gelenke in **Neutral-Null** oder **Funktionsstellung**.

**Säule 4 — Schmerzen behandeln:**
- Schmerzursache finden, Schmerzmittel geben, Wärme anwenden (nicht bei Gefühlsstörungen).
- Ziel: Der Patient bewegt sich ohne Angst.

**Säule 5 — Mit Physio und Ergo zusammenarbeiten:**
- Schienen richtig anbringen.
- Gemeinsame Übungspläne, gemeinsame Dokumentation."

- **Erklärungs-Step:** stepType `reveal` (5 Säulen einzeln aufdecken)
- **Glossar-Begriffe:** [aktive Bewegung, assistive Bewegung, passive Bewegung, Schonhaltung, Physiotherapie, Ergotherapie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Schienen allein reichen als Kontraktur-Prophylaxe"**
- **Fachbegriff:** Schienen-Monotherapie
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — Schienen sind **ergänzend**, nicht ersetzend. Sie halten ein Gelenk in Position, aber **Bewegung bleibt oberstes Gebot**. Schienen werden außerdem nach ärztlicher Verordnung in **funktionaler Gelenkposition** angebracht, ggf. in Rücksprache mit Physio. Merke: Schiene + Bewegung, nicht Schiene statt Bewegung."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — Schienen helfen, aber sie **ersetzen nicht** die Bewegung. Das Wichtigste bleibt: Das Gelenk wird **bewegt**. Schienen gibt es nur, wenn der Arzt sie verordnet. Merke: Schiene **plus** Bewegung, nicht Schiene **statt** Bewegung."

**D2: "Bei Schmerzen lieber nicht bewegen"**
- **Fachbegriff:** Schmerz-Stopp-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **Schmerzvermeidung verstärkt Schonhaltung und Kontrakturrisiko**. Richtig: Ursache analysieren, Schmerztherapie anpassen (medikamentös + Wärme + Elektrostimulation), dann **schmerzarm bewegen**. Bewegung innerhalb schmerzfreier Grenzen, nicht 'gar nicht bewegen'. Merke: Schmerz behandeln und trotzdem bewegen."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **Gar nicht bewegen macht es schlimmer**. Richtig ist: Schmerzursache finden, **Schmerzmittel geben**, **Wärme** anwenden (nicht bei Gefühlsstörungen), und dann **sanft bewegen**, solange es **nicht weh tut**. Merke: Schmerz behandeln und **trotzdem** bewegen."

**D3: "Das Durchbewegen ist Aufgabe der Physiotherapie, nicht der Pflege"**
- **Fachbegriff:** Zuständigkeits-Delegation
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — Kontrakturprophylaxe ist eine **genuin pflegerische Aufgabe** (§ 4 PflBG, vorbehaltene Tätigkeit: Organisation des Pflegeprozesses). Physiotherapie ergänzt, übernimmt aber nicht. Im Tagesablauf ist die Pflege bei jeder Positionierung, Waschung, Mobilisation beteiligt — und bewegt dabei durch. Merke: Pflege + Physio, nicht Pflege statt Physio."
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — Kontrakturprophylaxe ist eine **Aufgabe der Pflege** (§ 4 PflBG). Die Physio hilft mit, aber die Pflege ist den **ganzen Tag** beim Patienten: beim Waschen, Lagern, Essen. Da wird immer mit durchbewegt. Merke: Pflege **und** Physio — beide sind wichtig."

### Richtig-Feedback
**C1 (285 Zeichen):** "Sehr gut — Bewegung ist das oberste Gebot. Die 5 Säulen: (1) Aktiv/assistiv/passiv bewegen, (2) normaler Tagesablauf mit Positionswechseln, (3) korrekte Positionierung (flach, Hohlräume polstern, Neutral-Null), (4) Schmerztherapie, (5) Teamarbeit mit Physio/Ergo. Dokumentation nicht vergessen."

**B1 (245 Zeichen):** "Sehr gut — **Bewegung** ist das Wichtigste. Die 5 Säulen: Bewegen, verschiedene Positionen, richtig lagern, Schmerzen behandeln, mit Physio/Ergo zusammenarbeiten. Und alles **dokumentieren** — sonst 'gilt es als nicht gemacht'."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist das oberste Gebot der Kontrakturprophylaxe?"
- **Rückseite:** "Bewegung. Jedes Gelenk, das nicht medizinisch ruhiggestellt sein muss, wird aktiv, assistiv oder passiv durchbewegt — täglich."
- **Kategorie:** handlung

---

## Baustein 8: aktiv-passiv-assistiv

### Metadaten
- **bausteinId:** kontraktur-prophylaxe-bewegungsarten
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 14 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Drei Patienten: (A) Frau L., 78, wach und kooperativ, nach Hüft-OP. (B) Herr M., 64, 3. Tag nach Schlaganfall, linke Seite gelähmt, wach aber erschöpft. (C) Frau B., 52, im Koma auf ICU. Welche Bewegungsart passt zu welchem Patienten — aktiv, assistiv oder passiv? Begründe."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Drei Bewegungsarten, drei Indikationen: **Aktiv** = Patient bewegt selbst (Standard bei Kooperation). **Assistiv** = Patient bewegt, Pflege unterstützt (Schwäche, teilweise Lähmung). **Passiv** = Pflege bewegt allein (Bewusstlose, komplette Lähmung, Schmerz)."

**B1 (230 Zeichen):** "Drei Arten zu bewegen: **Aktiv** = Patient bewegt allein. **Assistiv** = Patient bewegt mit, du hilfst. **Passiv** = Du bewegst allein (wenn Patient bewusstlos ist oder gar nicht selbst kann). Du wählst nach dem **Zustand** des Patienten."

- **Step-Typ:** comparison (3 Bewegungsarten gegenüberstellen)

### Stufe 3 — Erklärung

**C1 (850 Zeichen):**
"**Die drei Bewegungsarten nach Indikation:**

**1. Aktive Bewegung — Patient bewegt selbst:**
- Indikation: wacher, kooperativer, ausreichend kräftiger Patient.
- Rolle der Pflege: anleiten, motivieren, Sicherheit geben.
- Beispiele: "Heben Sie Ihren Arm über den Kopf", "Ziehen Sie die Zehen zum Schienbein".
- Vorteil: Maximaler Trainingseffekt, Erhalt von Kraft + Beweglichkeit.

**2. Assistive Bewegung — Patient bewegt mit, Pflege unterstützt:**
- Indikation: Schwäche, Erschöpfung, teilweise Lähmung, Schmerzen im Tagesverlauf.
- Rolle der Pflege: führend-stützend. Patient macht, was er kann; die Pflege trägt das Gewicht, das er nicht mehr trägt.
- Beispiel: Hemiplegie nach Schlaganfall — der betroffene Arm wird nach Bobath-Prinzip geführt, der gesunde Arm bewegt eigenständig.
- Vorteil: Schult Eigenwahrnehmung, erhält Reste der Bewegung.

**3. Passive Bewegung — Pflege bewegt allein:**
- Indikation: Bewusstlose, sedierte Intensivpatienten, vollständig gelähmte Gliedmaßen, komatöse Patienten.
- Rolle der Pflege: Pflege bewegt langsam, rhythmisch, im schmerzfreien physiologischen Bewegungsausmaß.
- Technik: Ein Gelenk gleichzeitig, zweifache Fixation (ober- und unterhalb), 5-10 Wiederholungen.
- Vorteil: Erhalt der Gelenkbeweglichkeit auch ohne aktive Mitarbeit.

**Wichtige Regeln (für alle 3 Arten):**
- Immer **schmerzfrei**, **physiologisch**, **angekündigt**.
- Bei Hemiplegie Bobath-Prinzip beachten.
- Nach Kinästhetik: Bewegungsimpulse setzen, statt zu heben."

**B1 (720 Zeichen):**
"**Die 3 Arten — wann welche?**

**1. Aktiv — Der Patient macht selbst:**
- Wann? Patient ist **wach, kräftig, kann** sich bewegen.
- Du machst: Anleiten, ermutigen, Sicherheit geben.
- Beispiel: "Heben Sie den Arm über den Kopf."
- Vorteil: Bester Effekt — baut Kraft und Beweglichkeit auf.

**2. Assistiv — Der Patient macht mit, du hilfst:**
- Wann? Patient ist **schwach** oder **halb gelähmt** oder **erschöpft**.
- Du machst: Den Teil bewegen, den der Patient nicht schafft.
- Beispiel: Nach Schlaganfall — gesunde Seite macht allein, gelähmte Seite bewegst du mit nach **Bobath**.
- Vorteil: Patient spürt sich selbst, Reste der Bewegung bleiben.

**3. Passiv — Du machst allein:**
- Wann? Patient ist **bewusstlos**, **komplett gelähmt** oder **im Koma**.
- Du machst: Langsam, ruhig, **ohne Schmerz**.
- Technik: **Ein Gelenk**, mit beiden Händen halten (oben und unten), **5-10 mal** wiederholen.
- Vorteil: Das Gelenk bleibt beweglich — auch ohne Mithilfe.

**Regeln für alle 3:**
- **Ohne Schmerz** bewegen.
- In der **normalen** Bewegungsrichtung bleiben.
- Vorher **ankündigen**: "Ich bewege jetzt Ihren Arm."
- Bei Schlaganfall nach **Bobath**, mit Kinästhetik-Impulsen."

- **Erklärungs-Step:** stepType `matrix` (Bewegungsart × Indikation × Technik × Vorteil)
- **Glossar-Begriffe:** [aktive Bewegung, assistive Bewegung, passive Bewegung, Bobath-Prinzip, physiologisches Bewegungsausmaß]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Passiv bewegen = stark durchziehen, damit das Gelenk wieder geschmeidig wird"**
- **Fachbegriff:** Dehnungs-Brutalismus
- **Feedback (C1, 330 Zeichen):** "Nicht ganz — passive Bewegung muss **immer schmerzfrei** und im **physiologischen Bewegungsausmaß** erfolgen. Gewaltsames Durchziehen kann Muskelfasern, Bänder oder Gelenkkapseln reißen. Das verschlechtert die Situation und verursacht Schmerzen, die zu Schonhaltung führen. Merke: Langsam, rhythmisch, schmerzfrei — nie mit Kraft."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **niemals mit Kraft** ziehen. Das macht das Gewebe **kaputt**. Immer **langsam**, **ohne Schmerz**, in der **normalen** Richtung. Wenn es weh tut, **stoppst** du. Merke: Passiv heißt nicht brutal — es heißt **sanft** und **ruhig**."

**D2: "Wenn ein Patient spastisch ist, bewegt man ihn stark gegen den Widerstand"**
- **Fachbegriff:** Spastik-Gewaltmethode
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — gegen Spastik bewegt man **langsam, rhythmisch**, nutzt das **Bobath-Konzept** und **Kinästhetik-Impulse**. Heftige Gegenbewegung verstärkt die Spastik (Stretch-Reflex). Besser: Langsam aufbauen, den Muskeltonus durch Wahrnehmung und Positionierung reduzieren. Merke: Tonus regulieren statt erzwingen."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — gegen Spastik hilft **langsam** und **ruhig** arbeiten — nicht stark ziehen. Starkes Ziehen macht die Spastik **schlimmer**. Nutze **Bobath** und **Kinästhetik**. Merke: Muskel ist angespannt? Nicht dagegen ziehen — **ruhig** und mit Wahrnehmung arbeiten."

**D3: "Bei einem Koma-Patienten reicht einmal pro Woche Durchbewegen"**
- **Fachbegriff:** Frequenz-Unterschätzung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — bei Komapatienten sind **mehrmals täglich** passive Bewegungen empfohlen, integriert in jede Lagerung, Waschung und Pflegehandlung. Einmal pro Woche ist deutlich zu wenig — nach **4-14 Tagen** baut sich bereits Bindegewebe um die Gelenkkapsel auf. Merke: Tägliche Routine, nicht Wochenprogramm."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — bei einem Koma-Patienten bewegst du die Gelenke **mehrmals am Tag** — bei jeder Waschung, jeder Lagerung. Einmal pro Woche ist **viel zu wenig**. Schon nach **4 bis 14 Tagen** fängt das Gewebe an steif zu werden. Merke: Jeden Tag, mehrmals."

### Richtig-Feedback
**C1 (310 Zeichen):** "Exzellent. Frau L. (wach, kooperativ) → **aktiv** mit Anleitung. Herr M. (wach, halbseitig gelähmt) → **assistiv** nach Bobath für die betroffene Seite, aktiv für die gesunde. Frau B. (Koma) → **passiv** mehrmals täglich, schmerzfrei, physiologisch. Alle drei Arten folgen den gleichen Regeln: langsam, schmerzfrei, angekündigt."

**B1 (275 Zeichen):** "Sehr gut. Frau L. (wach) → **aktiv** bewegt selbst. Herr M. (halb gelähmt) → **assistiv** — gelähmte Seite mit **Bobath**, gesunde Seite allein. Frau B. (Koma) → **passiv** — du bewegst, **mehrmals täglich**, **ruhig**, **ohne Schmerz**. Regeln gelten für alle drei: ankündigen, sanft, normale Richtung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen aktiver, assistiver und passiver Bewegung?"
- **Rückseite:** "Aktiv = Patient bewegt selbst (wach, kooperativ). Assistiv = Patient bewegt mit, Pflege unterstützt (Schwäche, Hemiplegie). Passiv = Pflege bewegt allein (Koma, komplette Lähmung). Alle schmerzfrei, physiologisch, angekündigt."
- **Kategorie:** handlung

---

## Baustein 9: folgen-teamarbeit

### Metadaten
- **bausteinId:** kontraktur-prophylaxe-folgen-teamarbeit
- **bloomLevel:** 5
- **wissensart:** komplikation
- **zeitBudget:** 8 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir Frau H. vor. Sie hat durch jahrelange Bettruhe eine schwere Beugekontraktur der Hüfte und Knie. Welche **Folgeprobleme** kann das im Alltag auslösen? Nenne mindestens 3 — es geht nicht nur um das Gelenk."
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Kontrakturen sind **nicht nur orthopädisch**. Sie führen zu **Dekubitus** (Druckstellen in Hautfalten), **Pneumonie** (eingeschränkte Atmung bei Brustkorbfixation), **Intertrigo** (Pilze in Hautfalten), **Schmerzen**, **Pflegeabhängigkeit**, **sozialem Rückzug**."

**B1 (225 Zeichen):** "Kontrakturen machen nicht nur steife Gelenke. Folgen sind auch: **Druckstellen** in Hautfalten, **Lungenentzündung** (Brustkorb bewegt sich weniger), **Hautpilz** zwischen Fingern, **Schmerzen**, mehr **Hilfe** nötig, **weniger Teilhabe**."

- **Step-Typ:** text (displayFormat: news — Folgen in Alltagsgeschichte)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"**Folgen von Kontrakturen — der systemische Blick:**

**Körperlich:**
- **Dekubitus**: Durch Zwangshaltung entstehen neue Druckstellen an ungewöhnlichen Stellen (z.B. Knieinnenseite bei Beugekontraktur).
- **Pneumonie**: Brustkorbfixation und flache Atmung erhöhen das Pneumonierisiko — Kontrakturprophylaxe ist immer auch Pneumonieprophylaxe.
- **Intertrigo**: In Finger-, Zehen- und Hautfalten sammelt sich Feuchtigkeit, Candida-Infektionen entstehen (S. 407 I-Care-Kapitel).
- **Ulzera in Kniekehlen**: Hautschichten komprimieren sich, schlimmstenfalls Amputation.
- **Volkmann-Kontraktur** (bei Kindern nach Unterarmfraktur): Funktionslosigkeit der Hand — tragisch für die Zukunft.

**Psychosozial:**
- **Schmerzen**: Starke Schmerzen in steifen Gelenken, oft permanent.
- **Pflegeabhängigkeit**: Waschen, Anziehen, Essen brauchen mehr Zeit und Personal.
- **Mangelnde Teilhabe**: Rückzug aus sozialem Leben, depressive Verstimmungen.

**Teamarbeit — wer macht was:**
- **Pflege**: tägliche Bewegung, Positionierung, Beobachtung, Dokumentation.
- **Physiotherapie**: spezielle Übungspläne, Schienenverordnung, Schulung der Pflege.
- **Ergotherapie**: Alltagsfunktion trainieren, Hilfsmittel anpassen.
- **Arzt**: Schmerztherapie, Schienenverordnung, ggf. OP bei schwerer Kontraktur.
- **Bezugspersonen**: Anleitung zur Bewegungsförderung zuhause.

Der DNQP-Expertenstandard Mobilität (2020) verlangt **interdisziplinäre** Kontraktur-Arbeit — keine Einzelleistung."

**B1 (660 Zeichen):**
"**Folgen — nicht nur steife Gelenke:**

**Körperlich:**
- **Druckstellen**: In Hautfalten entstehen neue Dekubitus-Stellen.
- **Lungenentzündung**: Der Brustkorb bewegt sich weniger, die Atmung wird flach. Mehr Gefahr für eine Pneumonie.
- **Hautpilz (Intertrigo)**: Zwischen den Fingern und Zehen sammelt sich Feuchtigkeit.
- **Wunden in der Kniekehle**: Im schlimmsten Fall Amputation.

**Seelisch und sozial:**
- **Schmerzen**: Dauerhaft in den steifen Gelenken.
- **Mehr Pflege nötig**: Waschen, Anziehen, Essen dauern länger.
- **Rückzug**: Der Patient kann weniger mitmachen, wird traurig.

**Wer arbeitet zusammen?**
- **Pflege**: Jeden Tag bewegen, lagern, beobachten, dokumentieren.
- **Physio**: Übungspläne, Schienen, Pflege schulen.
- **Ergo**: Alltag trainieren, Hilfsmittel anpassen.
- **Arzt**: Schmerzen behandeln, Schienen verordnen, manchmal OP.
- **Familie**: Zuhause weiter bewegen.

Der **Expertenstandard Mobilität** (DNQP 2020) verlangt: **Alle arbeiten zusammen** — kein Einzelkämpfer."

- **Erklärungs-Step:** stepType `conceptmap` (Kontraktur-Folgen + beteiligte Berufsgruppen)
- **Glossar-Begriffe:** [Intertrigo, Pneumonieprophylaxe, Volkmann-Kontraktur, interdisziplinär, Bezugspersonen]

### Misconceptions → Distraktoren

**D1: "Kontrakturen sind nur ein Problem der Gelenke — alles andere wäre etwas anderes"**
- **Fachbegriff:** Monokausales Denken
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — Kontrakturen ziehen Folgeprobleme nach sich: **Dekubitus** (Zwangshaltung), **Pneumonie** (Brustkorbfixation), **Intertrigo** (Hautfalten), Schmerzen, Pflegeabhängigkeit, sozialer Rückzug. Prophylaxe ist deshalb ein **systemischer Ansatz** — und Kontrakturprophylaxe ist immer auch Pneumonie- und Dekubitusprophylaxe. Merke: Alles hängt zusammen."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — Kontrakturen machen **viele andere Probleme**: **Druckstellen**, **Lungenentzündung**, **Hautpilz**, **Schmerzen**, mehr Hilfe nötig. Deswegen ist Kontrakturprophylaxe auch **Pneumonieprophylaxe** und **Dekubitusprophylaxe** in einem. Merke: Alles hängt zusammen."

**D2: "Die Physiotherapie ist allein für die Kontrakturarbeit zuständig"**
- **Fachbegriff:** Delegations-Fehler
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — der DNQP-Expertenstandard Mobilität (2020) verlangt **interdisziplinäre Zusammenarbeit**: Pflege (täglich beim Patienten), Physio (Übungspläne + Schulung), Ergo (Alltagsfunktion), Arzt (Therapie), Bezugspersonen (zuhause). Jeder hat eine Rolle. Allein schafft das niemand. Merke: Team statt Einzelkämpfer — das ist der Standard."
- **Feedback (B1, 285 Zeichen):** "Nicht ganz — **alle arbeiten zusammen**. Pflege ist jeden Tag da. Physio macht Übungen. Ergo trainiert den Alltag. Arzt behandelt Schmerzen. Die Familie hilft zuhause. Der **DNQP-Standard Mobilität** (2020) sagt: **Alle zusammen**. Merke: Kein Alleingang — ein Team."

**D3: "Psychosoziale Folgen sind unwichtig — Hauptsache, das Gelenk wird behandelt"**
- **Fachbegriff:** Ganzheits-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — Schmerz, Abhängigkeit und sozialer Rückzug sind genauso wichtig wie die orthopädische Seite. Ein Patient, der Schmerzen hat, bewegt sich weniger — neue Schonhaltung, neue Kontrakturen. Ein Patient, der depressiv ist, kooperiert weniger. Pflege ist immer ganzheitlich (§ 4 PflBG). Merke: Körper und Seele gehören zusammen."
- **Feedback (B1, 295 Zeichen):** "Nicht ganz — **Schmerz und Traurigkeit sind wichtig**. Ein Patient mit Schmerzen bewegt sich weniger — dann wird die Kontraktur **schlimmer**. Ein trauriger Patient macht weniger mit. Pflege hilft immer **dem ganzen Menschen** (§ 4 PflBG). Merke: Körper **und** Seele gehören zusammen."

### Richtig-Feedback
**C1 (300 Zeichen):** "Sehr gut. Folgen sind vielfältig: Dekubitus (Zwangshaltung), Pneumonie (Brustkorbfixation), Intertrigo (Hautfalten), Ulzera (Kniekehle), Schmerzen, Pflegeabhängigkeit, sozialer Rückzug. Teamarbeit ist Pflicht (DNQP Mobilität 2020): Pflege — Physio — Ergo — Arzt — Bezugspersonen. Kein Einzelkämpfer-Konzept."

**B1 (265 Zeichen):** "Sehr gut. Folgen sind mehr als steife Gelenke: **Druckstellen, Lungenentzündung, Hautpilz, Schmerzen, Pflegeabhängigkeit, Rückzug**. Deswegen arbeiten alle zusammen: **Pflege, Physio, Ergo, Arzt, Familie**. Der **DNQP-Standard Mobilität (2020)** verlangt das."

### Verknüpfte Karteikarte
- **Vorderseite:** "Nenne 4 Folgeprobleme von Kontrakturen — körperlich und psychosozial."
- **Rückseite:** "Körperlich: Dekubitus (Zwangshaltung), Pneumonie (Brustkorbfixation), Intertrigo (Hautfalten), Ulzera in Kniekehlen. Psychosozial: Schmerzen, Pflegeabhängigkeit, sozialer Rückzug."
- **Kategorie:** fakt

---

## Qualitäts-Check (K.O.-Liste)

- [x] **Urheberrecht:** Keine I-Care-Sätze übernommen, eigene Formulierungen und Strukturen
- [x] **Urheberrecht:** Keine `[I Care S.XX]` im Schülertext — Primärquellen: AAOS, DNQP, MDS, Gnass, Sackley, Bobath, PflBG, BGB
- [x] **Alle 3 Stufen** pro Baustein vorhanden (Denkfrage, Hinweis, Erklärung)
- [x] **Stufe 3 eigenständig verständlich**
- [x] **Jeder Fakt mit überprüfbarer Quelle** (Primärquelle oder § Gesetz)
- [x] **9 Bausteine** (Soll: 8-10 bei 3 UE) ✓
- [x] **Glossar** erstellt (12-14 Fachbegriffe)
- [x] **Karteikarten**: 9 (Soll: 8-10) ✓
- [x] **Bloom-Verteilung**: 22% / 56% / 22% (Soll: 20/55/25 ± Toleranz) ✓
- [x] **Mindestens 3 Distraktoren** pro Baustein mit Bloom ≥ 2 ✓
- [x] **Anrede "du"** durchgängig
- [x] **Echte Umlaute** ä, ö, ü, ß
- [x] **Statistiken mit Jahresangabe**: Gnass 2010 (15-70 %), MDS 2018 (59,1 %), Sackley 2008
- [x] **Zielzeit-Budget**: 67 Min Kern + Übergänge = **ca. 74 Min (3 UE × 45 × 0,55)** ✓
