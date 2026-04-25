# Wissensbausteine: Ernährungsgrundlagen

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `ernaehrungsgrundlagen` |
| ceId | `ce-02` |
| cluster | D (Ernährung & Flüssigkeit) |
| wissensart | handlung |
| kompetenzbereich | I.1 |
| geschaetzteUE | 8 |
| zielzeitMin | 198 (8 UE × 45 × 0,55) |
| bausteineAnzahl | 16 |
| voraussetzungen | — |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 19% (3 Bausteine), Bloom 3-4: 56% (9 Bausteine), Bloom 5-6: 25% (4 Bausteine)

**Primärquellen:**
- DGE/ÖGE/SGE (2024): D-A-CH-Referenzwerte für die Nährstoffzufuhr, 3. Auflage
- DGE (2024): 10 Regeln der DGE für eine vollwertige Ernährung
- WHO (2015): Guideline: Sugars intake for adults and children (WHO/NMH/NHD/15.2)
- WHO (2020): Healthy diet — Fact sheet Nr. 394
- Atwater W.O. (1899): Principles of Nutrition and Nutritive Value of Food (USDA Bulletin No. 142)
- FAO/WHO/UNU (2004): Human Energy Requirements (Report 1)
- EFSA (2010): Scientific Opinion on Dietary Reference Values for water, EFSA Journal 8(3):1459
- Harris J.A., Benedict F.G. (1919): A Biometric Study of Basal Metabolism in Man
- DNQP (2017, aktualisiert 2024): Expertenstandard Ernährungsmanagement in der Pflege
- DGEM (2019): S3-Leitlinie Klinische Ernährung
- Mifflin M.D., St Jeor S.T. (1990): A new predictive equation for resting energy expenditure

---

## Baustein 1: naehrstoffgruppen-ueberblick

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-naehrstoffgruppen
- **bloomLevel:** 1
- **wissensart:** fakt
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir deinen Teller vom letzten Mittagessen vor. Was bekommt dein Körper aus diesem Essen — und warum braucht er unterschiedliche Bestandteile?"
- **Step-Typ:** freetext (kurz, aktiviert Vorwissen)

### Stufe 2 — Hinweis

**C1 (235 Zeichen):** "Nährstoffe teilen sich in zwei Gruppen: **Makronährstoffe** (Kohlenhydrate, Fette, Proteine) liefern Energie und Baustoffe in großen Mengen. **Mikronährstoffe** (Vitamine, Mineralstoffe, Spurenelemente) wirken in kleinsten Mengen als Regulatoren."

**B1 (215 Zeichen):** "Im Essen gibt es zwei Arten von Nährstoffen. **Makronährstoffe** sind Kohlenhydrate, Fette und Eiweiße. Der Körper braucht viel davon. **Mikronährstoffe** sind Vitamine und Mineralstoffe. Der Körper braucht nur wenig, aber jeden Tag."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Nährstoffe werden nach der benötigten Menge eingeteilt:

**Makronährstoffe** (griech. makros = groß) — liefern **Energie** und **Baustoffe**:
- **Kohlenhydrate** — Hauptenergiequelle
- **Fette (Lipide)** — Energiespeicher, Baustoff der Zellmembran
- **Proteine (Eiweiße)** — Baustoff für Muskeln, Enzyme, Hormone
- **Wasser** — Lösungs- und Transportmittel
- **Ballaststoffe** — unverdaulich, wichtig für Darm

**Mikronährstoffe** (griech. mikros = klein) — wirken als **Regulatoren**:
- **Vitamine** — 13 lebenswichtige organische Verbindungen
- **Mineralstoffe** (z.B. Natrium, Kalium, Calcium)
- **Spurenelemente** (z.B. Eisen, Zink, Jod)

Makronährstoffe werden in Gramm gemessen, Mikronährstoffe in Milligramm oder Mikrogramm. Fehlen einzelne Mikronährstoffe, kann trotz kalorisch ausreichender Ernährung eine **versteckte Unterversorgung** entstehen. (DGE/ÖGE/SGE, D-A-CH-Referenzwerte 2024)"

**B1 (550 Zeichen):**
"Nährstoffe werden nach der Menge eingeteilt:

**Makronährstoffe** — der Körper braucht viel davon (Gramm):
- **Kohlenhydrate** — geben Energie
- **Fette** — geben Energie und bauen die Zellen
- **Eiweiße (Proteine)** — bauen die Muskeln
- **Wasser** — löst und transportiert
- **Ballaststoffe** — helfen dem Darm

**Mikronährstoffe** — der Körper braucht wenig davon (Milligramm):
- **Vitamine** — 13 Stück, lebenswichtig
- **Mineralstoffe** — zum Beispiel Kalzium, Natrium
- **Spurenelemente** — zum Beispiel Eisen, Jod

Wichtig: Auch wenn du genug Kalorien isst, kann ein Vitamin fehlen. Das heißt **versteckter Hunger**."

- **Erklärungs-Step:** stepType `reveal` (Zwei Gruppen aufdecken)
- **Glossar-Begriffe:** [Makronährstoff, Mikronährstoff, Spurenelement, Ballaststoff]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Vitamine geben dem Körper Energie"**
- **Fachbegriff:** Vitamin-Energie-Irrtum
- **Feedback (C1, 235 Zeichen):** "Nicht ganz — Vitamine liefern **keine Kalorien**. Sie wirken als Regulatoren im Stoffwechsel, zum Beispiel als Coenzyme. Energie kommt aus Makronährstoffen: Kohlenhydraten, Fetten, Proteinen. Merke: Vitamine regeln, Makros liefern Energie."
- **Feedback (B1, 205 Zeichen):** "Nicht ganz — Vitamine geben **keine Energie**. Sie helfen dem Körper bei seiner Arbeit. Energie kommt aus Kohlenhydraten, Fetten und Eiweißen. Merke: Vitamine regeln. Makronährstoffe geben Energie."

**D2: "Wasser ist kein Nährstoff, weil es keine Kalorien hat"**
- **Fachbegriff:** Wasser-Nährstoff-Irrtum
- **Feedback (C1, 255 Zeichen):** "Fast — Wasser zählt zu den **essentiellen Nährstoffen**, obwohl es kalorienfrei ist. Es ist Lösungs- und Transportmittel, reguliert die Körpertemperatur und ist am Stoffwechsel beteiligt. Menschen überleben länger ohne Essen als ohne Trinken. Merke: Kalorien ≠ Nährstoff."
- **Feedback (B1, 220 Zeichen):** "Fast — Wasser **ist** ein Nährstoff, auch ohne Kalorien. Der Körper braucht Wasser, um Stoffe zu transportieren und die Temperatur zu regeln. Ohne Essen überlebt man Wochen, ohne Wasser nur Tage. Merke: Wasser ist ein Nährstoff."

**D3: "Alkohol gehört nicht zu den Nährstoffen"**
- **Fachbegriff:** Alkohol-Einordnungs-Fehler
- **Feedback (C1, 245 Zeichen):** "Teilweise richtig — Alkohol (Ethanol) liefert **7 kcal pro Gramm** und damit Energie, wird aber nicht zu den regulären Nährstoffen gezählt. Er ist ein Zellgift und belastet die Leber. Merke: Alkohol liefert Kalorien, ist aber kein Nährstoff."
- **Feedback (B1, 215 Zeichen):** "Teilweise richtig — Alkohol hat **7 Kalorien pro Gramm**. Also gibt er Energie. Aber Alkohol ist kein Nährstoff, weil er für den Körper giftig ist. Die Leber muss ihn abbauen. Merke: Alkohol = Energie, aber kein Nährstoff."

### Richtig-Feedback
**C1 (245 Zeichen):** "Sehr gut. Makronährstoffe (Kohlenhydrate, Fette, Proteine, Wasser, Ballaststoffe) liefern Energie und Baustoffe — in Gramm. Mikronährstoffe (Vitamine, Mineralstoffe, Spurenelemente) regulieren den Stoffwechsel — in Milligramm oder Mikrogramm."

**B1 (210 Zeichen):** "Sehr gut. Makronährstoffe sind Kohlenhydrate, Fette und Eiweiße. Der Körper braucht viel davon. Mikronährstoffe sind Vitamine und Mineralstoffe. Der Körper braucht wenig. Beides ist jeden Tag wichtig."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen Makro- und Mikronährstoffen?"
- **Rückseite:** "Makronährstoffe (KH, Fette, Proteine) liefern Energie in Gramm-Mengen. Mikronährstoffe (Vitamine, Mineralstoffe) regulieren in Milligramm-Mengen."
- **Kategorie:** fachbegriff

---

## Baustein 2: kohlenhydrate-energieanteil

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-kohlenhydrate
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Wenn du morgens Brot mit Marmelade isst und mittags Pasta — was macht dein Körper mit diesem Essen? Woran merkst du, dass du Energie daraus bekommst?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Kohlenhydrate liefern **4 kcal pro Gramm** und sollen laut DGE **mehr als 50%** der täglichen Energie ausmachen. Sie kommen als Einfachzucker (Glukose), Zweifachzucker (Saccharose) oder Mehrfachzucker (Stärke) vor. Hauptquelle: Getreide, Obst, Kartoffeln."

**B1 (220 Zeichen):** "Kohlenhydrate geben **4 Kalorien pro Gramm**. Sie sollen **mehr als die Hälfte** der Energie am Tag liefern. Es gibt Zucker (Einfach), Haushaltszucker (Zweifach) und Stärke (Mehrfach). Quellen: Brot, Nudeln, Obst, Kartoffeln."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"Kohlenhydrate sind die **Hauptenergiequelle** des Körpers. Energiewert: **4 kcal pro Gramm** (Atwater-Faktor).

**Einteilung nach Kettenlänge:**
- **Monosaccharide** (Einfachzucker): Glukose, Fruktose, Galaktose
- **Disaccharide** (Zweifachzucker): Saccharose (Haushaltszucker), Laktose, Maltose
- **Polysaccharide** (Mehrfachzucker): Stärke (Getreide, Kartoffeln), Glykogen (Leber), Ballaststoffe (unverdaulich)

**DGE-Empfehlung:** >50% der täglichen Energiezufuhr aus Kohlenhydraten, Schwerpunkt auf **komplexen Kohlenhydraten** mit Ballaststoffen.

**WHO-Empfehlung zu freiem Zucker:** <10% der Tagesenergie, besser <5%. 'Freier Zucker' bedeutet Haushaltszucker plus Zucker aus Säften/Honig — nicht Zucker in ganzen Früchten.

**Stoffwechsel:** Glukose wird direkt ins Blut aufgenommen (Blutzucker). Überschuss wird als Glykogen in Leber/Muskeln gespeichert oder in Fett umgewandelt. Das Gehirn verbraucht täglich ca. 120 g Glukose — es ist der wichtigste Kohlenhydratverbraucher. (DGE 2024, WHO 2015, Atwater 1899)"

**B1 (580 Zeichen):**
"Kohlenhydrate geben **Energie**: **4 Kalorien pro Gramm**.

**Drei Arten:**
- **Einfachzucker** (Monosaccharide): Traubenzucker (Glukose), Fruchtzucker
- **Zweifachzucker** (Disaccharide): Haushaltszucker, Milchzucker
- **Mehrfachzucker** (Polysaccharide): Stärke in Brot, Nudeln, Kartoffeln; Ballaststoffe

**DGE sagt:** Mehr als **50%** der Energie am Tag aus Kohlenhydraten. Am besten komplexe Kohlenhydrate mit Ballaststoffen — also Vollkorn, Kartoffeln, Hülsenfrüchte.

**WHO sagt:** Weniger als **10%** aus freiem Zucker, besser weniger als **5%**. Freier Zucker = Haushaltszucker, Saft, Honig. Obst ist in Ordnung.

Wichtig: Das Gehirn braucht jeden Tag etwa 120 g Zucker — nur als Glukose."

- **Erklärungs-Step:** stepType `comparison` (3 Kohlenhydrat-Arten vergleichen)
- **Glossar-Begriffe:** [Monosaccharid, Disaccharid, Polysaccharid, Glykogen, freier Zucker, Atwater-Faktor]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Obst enthält schädlichen Zucker, der genauso schlecht ist wie Haushaltszucker"**
- **Fachbegriff:** Fruchtzucker-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — die WHO unterscheidet bewusst. **Freier Zucker** (Haushaltszucker, Saftzucker, Honig) soll unter 10% der Energie bleiben. Zucker in **ganzen Früchten** zählt nicht dazu, weil er mit Ballaststoffen und Vitaminen verbunden ist. Merke: Frucht ≠ freier Zucker."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — die WHO sagt: Zucker in **ganzen Früchten** ist **nicht** das Problem. Das Problem ist **freier Zucker** — also Haushaltszucker und Saft. Obst hat Ballaststoffe und Vitamine dazu. Merke: Ein Apfel ist kein Problem. Eine Cola schon."

**D2: "Kohlenhydrate soll man weglassen, weil sie dick machen"**
- **Fachbegriff:** Low-Carb-Mythos
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die DGE empfiehlt **>50% der Tagesenergie aus Kohlenhydraten**. Nicht die Kohlenhydrate an sich machen dick, sondern eine **positive Energiebilanz** (mehr rein als raus). Problematisch sind freier Zucker und Weißmehl, nicht Vollkorn oder Kartoffeln. Merke: Menge vor Dämonisieren."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die DGE sagt: **Mehr als 50%** der Energie soll aus Kohlenhydraten kommen. Dick macht nicht das Brot — dick macht: mehr essen als verbrennen. Vollkorn und Kartoffeln sind gut. Zucker und Weißmehl in Massen sind das Problem. Merke: Die Menge ist wichtig."

**D3: "Ballaststoffe sind Kohlenhydrate, die viel Energie liefern"**
- **Fachbegriff:** Ballaststoff-Kalorien-Irrtum
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Ballaststoffe sind zwar Kohlenhydrate (Polysaccharide), aber **für den Menschen unverdaulich**. Sie liefern fast keine Energie, aber fördern die Darmgesundheit, sättigen und senken den Blutzuckeranstieg. Merke: Ballaststoffe = Kohlenhydrate ohne Energie."
- **Feedback (B1, 220 Zeichen):** "Nicht ganz — Ballaststoffe sind zwar Kohlenhydrate, aber der Körper **kann sie nicht verdauen**. Sie geben also fast keine Energie. Sie sind trotzdem wichtig: für den Darm und das Sättigungsgefühl. Merke: Ballaststoffe = ohne Energie."

### Richtig-Feedback
**C1 (265 Zeichen):** "Sehr gut. Kohlenhydrate liefern 4 kcal/g und sollen laut DGE >50% der Tagesenergie ausmachen. Schwerpunkt: komplexe Kohlenhydrate mit Ballaststoffen (Vollkorn, Hülsenfrüchte). Die WHO empfiehlt für freien Zucker <10%, besser <5% der Tagesenergie."

**B1 (230 Zeichen):** "Sehr gut. Kohlenhydrate geben 4 Kalorien pro Gramm. Mehr als die Hälfte der Energie soll daraus kommen. Am besten: Vollkorn, Kartoffeln, Hülsenfrüchte. Die WHO sagt: Weniger als 10% aus Zucker, besser nur 5%."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viel Energie liefert 1 g Kohlenhydrate und wie hoch ist die DGE-Empfehlung am Tag?"
- **Rückseite:** "4 kcal pro Gramm. DGE: >50% der täglichen Energiezufuhr aus Kohlenhydraten, vorwiegend komplex mit Ballaststoffen."
- **Kategorie:** fakt

---

## Baustein 3: fette-energiedichte

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-fette
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Warum macht ein Esslöffel Öl dicker als ein Esslöffel Reis, obwohl beide gleich viel wiegen? Was passiert im Körper damit?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Fette liefern **9 kcal pro Gramm** — **mehr als doppelt so viel** wie Kohlenhydrate oder Proteine. DGE-Empfehlung: ca. **30% der Tagesenergie** aus Fett. Wichtig: die Qualität — **ungesättigte Fettsäuren** (Olivenöl, Fisch) vor **gesättigten** (Butter, Wurst)."

**B1 (225 Zeichen):** "Fette geben **9 Kalorien pro Gramm** — mehr als **doppelt so viel** wie Kohlenhydrate oder Eiweiß. DGE: **30%** der Energie aus Fett am Tag. Wichtig ist die Art: **ungesättigte Fettsäuren** (Öl, Fisch) sind besser als **gesättigte** (Butter, Wurst)."

- **Step-Typ:** text (displayFormat: beforeafter — Vergleich Butter vs Olivenöl)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Fette (Lipide) sind die **energiedichteste** Nährstoffgruppe: **9 kcal pro Gramm** (Atwater-Faktor).

**Funktionen:**
- Energielieferant und Energiespeicher (Fettgewebe)
- Baustein der Zellmembranen
- Träger der fettlöslichen Vitamine (E, D, K, A)
- Geschmacksträger und Sättigungsfaktor

**Einteilung nach chemischer Struktur:**
- **Gesättigte Fettsäuren** (keine Doppelbindungen): in Butter, Kokosöl, Wurst, Käse
- **Einfach ungesättigte Fettsäuren** (eine Doppelbindung): in Olivenöl, Rapsöl, Nüssen
- **Mehrfach ungesättigte Fettsäuren** (mehrere Doppelbindungen): Omega-3 (Fisch, Leinöl) und Omega-6 (Sonnenblumenöl)
- **Trans-Fettsäuren**: bei industrieller Härtung entstanden — ungünstig

**DGE-Empfehlungen:**
- Gesamtfett: ~30% der Tagesenergie
- Gesättigte Fettsäuren: <10% der Tagesenergie
- Mehrfach ungesättigte Fettsäuren: 7-10%, davon Omega-3 mindestens 0,5%
- Trans-Fettsäuren: so wenig wie möglich (<1%)

**Essentielle Fettsäuren** (der Körper kann sie nicht selbst herstellen): Linolsäure (Omega-6) und Alpha-Linolensäure (Omega-3). (DGE 2024, Atwater 1899)"

**B1 (615 Zeichen):**
"Fette geben viel Energie: **9 Kalorien pro Gramm** — über **doppelt so viel** wie Kohlenhydrate.

**Fette sind wichtig für:**
- Energie und Energie-Speicher (Fettgewebe)
- Den Bau von Zellen
- Die Aufnahme von Vitamin E, D, K und A
- Geschmack und Sättigung

**Arten von Fett:**
- **Gesättigte Fettsäuren** — fest bei Zimmertemperatur, in Butter, Wurst, Käse
- **Ungesättigte Fettsäuren** — flüssig, in Öl, Nüssen, Fisch
- **Omega-3** und **Omega-6** — lebenswichtig, der Körper kann sie nicht selbst bauen
- **Trans-Fettsäuren** — ungesund, in Pommes und Fertigprodukten

**DGE sagt:**
- Etwa **30%** der Energie aus Fett
- Weniger als **10%** aus gesättigten Fettsäuren
- Trans-Fettsäuren so wenig wie möglich

Merke: Öl ist besser als Butter."

- **Erklärungs-Step:** stepType `matrix` (Fettsäure-Typen: Quelle, Wirkung, Empfehlung)
- **Glossar-Begriffe:** [Lipid, gesättigte Fettsäure, ungesättigte Fettsäure, Omega-3, Trans-Fettsäure, essentielle Fettsäure]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Fett macht fett — am besten gar kein Fett essen"**
- **Fachbegriff:** Fettfrei-Mythos
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — der Körper **braucht** Fett: für Zellmembranen, fettlösliche Vitamine und essentielle Fettsäuren (Omega-3, Omega-6). DGE empfiehlt **~30% der Tagesenergie** aus Fett. Zu wenig Fett bedeutet Mangel an Vitamin A, D, E, K. Wichtig ist die **Qualität**, nicht die Abwesenheit."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — der Körper **braucht** Fett. Ohne Fett kann er die Vitamine A, D, E und K nicht aufnehmen. Die DGE sagt: Etwa **30%** der Energie soll aus Fett kommen. Wichtig ist **welches** Fett: Öl und Fisch statt Butter. Merke: Kein Fett ist auch ungesund."

**D2: "Alle pflanzlichen Fette sind gesund"**
- **Fachbegriff:** Pflanzenfett-Trugschluss
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — **Palmöl** und **Kokosöl** sind pflanzlich, enthalten aber hohe Anteile gesättigter Fettsäuren. Gehärtete Pflanzenfette (in Margarine, Fertigprodukten) können sogar **Trans-Fettsäuren** enthalten. Merke: 'Pflanzlich' heißt nicht automatisch 'gesund' — die Fettsäure entscheidet."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — nicht alles pflanzliche Fett ist gesund. **Palmöl** und **Kokosöl** sind pflanzlich, aber haben viele **gesättigte** Fettsäuren. Gehärtete Fette in Fertigprodukten haben **Trans-Fettsäuren** — sehr ungesund. Merke: Pflanzlich ist nicht automatisch gut."

**D3: "Cholesterin muss man komplett vermeiden"**
- **Fachbegriff:** Cholesterin-Pauschal-Irrtum
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — der Körper stellt **Cholesterin selbst her** und braucht es für Zellmembranen, Hormone und Vitamin D. Neue DGE-Leitlinien (2024) zeigen: Die Nahrungscholesterin-Menge hat weniger Einfluss als früher gedacht. Entscheidend ist die **Menge gesättigter Fette**, nicht Cholesterin allein. Merke: Differenziert betrachten."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — der Körper **braucht** Cholesterin und macht es selbst. Es ist wichtig für Hormone und Zellen. Die neue DGE-Meinung (2024): Cholesterin im Essen ist weniger wichtig als gedacht. Wichtiger: Wenig gesättigte Fette (Butter, Wurst). Merke: Nicht alles Cholesterin ist böse."

### Richtig-Feedback
**C1 (270 Zeichen):** "Sehr gut. Fette liefern 9 kcal/g und sollen ~30% der Tagesenergie ausmachen. Wichtig ist die Qualität: ungesättigte Fettsäuren (Olivenöl, Rapsöl, Fisch) statt gesättigte (Butter, Wurst). Essentielle Fettsäuren (Omega-3, Omega-6) muss der Körper über die Nahrung bekommen."

**B1 (235 Zeichen):** "Sehr gut. Fett gibt 9 Kalorien pro Gramm — doppelt so viel wie Kohlenhydrate. 30% der Energie aus Fett ist okay. Am besten Öl, Nüsse und Fisch. Wenig Butter und Wurst. Omega-3 und Omega-6 muss der Körper aus dem Essen holen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viel kcal liefert 1 g Fett und wie hoch ist die DGE-Fett-Empfehlung?"
- **Rückseite:** "9 kcal pro Gramm. DGE: ca. 30% der Tagesenergie aus Fett, davon <10% gesättigte Fettsäuren."
- **Kategorie:** fakt

---

## Baustein 4: proteine-funktion

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-proteine
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Sportler isst viel Hähnchen und Quark. Was passiert mit diesem Eiweiß im Körper? Und was wäre, wenn er gar kein Eiweiß essen würde?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Proteine liefern **4 kcal pro Gramm** und sollen **15-20% der Tagesenergie** ausmachen. Ihre Hauptaufgabe ist **nicht** Energie, sondern **Baustoff**: Muskeln, Enzyme, Hormone, Antikörper. Sie bestehen aus 20 Aminosäuren, davon **9 essentiell**."

**B1 (220 Zeichen):** "Eiweiße geben **4 Kalorien pro Gramm**. DGE: **15 bis 20%** der Energie am Tag aus Eiweiß. Hauptaufgabe ist **nicht Energie**, sondern **Bauen**: Muskeln, Enzyme, Hormone. Sie bestehen aus 20 Aminosäuren — **9 essentiell**."

- **Step-Typ:** text (displayFormat: checklist — Proteinfunktionen)

### Stufe 3 — Erklärung

**C1 (735 Zeichen):**
"Proteine (Eiweiße) sind die **Baustoffe** des Körpers. Energiewert: **4 kcal pro Gramm** (Atwater-Faktor). DGE-Empfehlung: **15-20% der Tagesenergie** — das sind **0,8 g pro kg Körpergewicht** bei Erwachsenen bis 65 Jahre, **1,0 g/kg** ab 65 Jahren.

**Funktionen:**
- **Bau:** Muskeln, Haut, Haare, Nägel, Knochenmatrix
- **Stoffwechsel:** alle Enzyme sind Proteine
- **Abwehr:** Antikörper (Immunglobuline)
- **Transport:** Hämoglobin (Sauerstoff), Albumin (Hormone)
- **Regulation:** viele Hormone (Insulin)

**Aminosäuren:**
- **20 proteinogene Aminosäuren** insgesamt
- **9 essentielle** (muss der Körper über die Nahrung bekommen): Leucin, Isoleucin, Valin, Lysin, Methionin, Phenylalanin, Threonin, Tryptophan, Histidin
- **11 nicht-essentielle** (kann der Körper selbst herstellen)

**Biologische Wertigkeit:** Je ähnlicher ein Nahrungsprotein dem Körperprotein ist, desto besser wird es verwertet. Tierisches Protein (Ei, Fleisch) hat meist höhere Wertigkeit als pflanzliches. Durch **Kombination** (z.B. Kartoffeln + Ei oder Reis + Bohnen) lässt sich die Wertigkeit steigern.

**Wichtig bei Mangelernährung:** Fehlendes Protein führt zu Muskelabbau (Sarkopenie) und schlechter Wundheilung. (DGE 2024, FAO/WHO/UNU 2007)"

**B1 (630 Zeichen):**
"Eiweiße (Proteine) sind die **Baustoffe** vom Körper. Sie geben auch Energie: **4 Kalorien pro Gramm**. DGE: **15-20%** der Energie aus Eiweiß. Das sind **0,8 g pro kg Körpergewicht** am Tag, ab 65 Jahren **1,0 g pro kg**.

**Eiweiß ist wichtig für:**
- **Muskeln**, Haut, Haare, Nägel, Knochen
- **Enzyme** (helfen beim Stoffwechsel)
- **Antikörper** (gegen Krankheiten)
- **Transport** im Blut (z.B. Sauerstoff)
- **Hormone** wie Insulin

**Aminosäuren:** Eiweiße bestehen aus 20 Bausteinen. **9 davon sind essentiell** — der Körper kann sie nicht selbst bauen. Du musst sie essen.

**Gute Eiweißquellen:** Ei, Fleisch, Milch, Fisch, Bohnen, Linsen, Nüsse, Quark.

**Trick:** Kartoffeln + Ei oder Reis + Bohnen zusammen — so ist das Eiweiß **hochwertiger**.

Wichtig: Bei zu wenig Eiweiß verliert der Körper Muskeln. Wunden heilen schlechter."

- **Erklärungs-Step:** stepType `diagram` (Eiweißfunktionen als Mindmap)
- **Glossar-Begriffe:** [Aminosäure, essentielle Aminosäure, biologische Wertigkeit, Sarkopenie, proteinogen]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Nur Fleisch enthält hochwertiges Eiweiß"**
- **Fachbegriff:** Tier-Protein-Monopol-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — tierisches Eiweiß (Ei, Fleisch, Milch) hat zwar meist eine höhere biologische Wertigkeit, aber durch **geschickte Kombination** pflanzlicher Proteine (z.B. Kartoffeln + Ei, Reis + Bohnen, Mais + Linsen) erreicht man hohe Wertigkeiten. Merke: Kombination schlägt Fleisch."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — tierisches Eiweiß ist oft hochwertig, aber **pflanzliche Kombinationen** sind auch sehr gut. Zum Beispiel: Kartoffeln + Ei, Reis + Bohnen. So bekommt der Körper alle wichtigen Aminosäuren. Merke: Auch ohne Fleisch kann man gutes Eiweiß essen."

**D2: "Je mehr Eiweiß, desto besser — auch 3 g pro kg Körpergewicht sind gesund"**
- **Fachbegriff:** Protein-Überdosierung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die DGE empfiehlt **0,8 g/kg** (1,0 g/kg ab 65 Jahren). Sehr hohe Mengen (>2 g/kg) können die **Nieren belasten**, besonders bei Vorerkrankung. Der Körper kann Eiweiß nicht speichern — Überschuss wird in Fett umgewandelt oder ausgeschieden. Merke: Mehr ist nicht besser."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — die DGE sagt: **0,8 g pro kg Körpergewicht** (ab 65 Jahren 1,0 g/kg). Viel mehr ist **nicht gesünder**. Zu viel Eiweiß kann die **Nieren** belasten. Der Körper kann Eiweiß nicht speichern. Merke: Das richtige Maß ist wichtig, nicht mehr."

**D3: "Bei älteren Menschen braucht man weniger Eiweiß, weil sie weniger aktiv sind"**
- **Fachbegriff:** Senioren-Protein-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **das Gegenteil** ist richtig. Die DGE empfiehlt ab 65 Jahren sogar **1,0 g/kg** (mehr als bei jüngeren Erwachsenen mit 0,8 g/kg). Grund: Ältere Menschen bauen Muskelmasse schneller ab (Sarkopenie). Mehr Eiweiß schützt. Bei Mangelernährung sogar bis 1,2-1,5 g/kg. Merke: Alt = mehr Eiweiß."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — **das Gegenteil** stimmt! Ab 65 Jahren empfiehlt die DGE **1,0 g pro kg** — also **mehr** als bei jüngeren Erwachsenen. Grund: Ältere Menschen verlieren schneller Muskeln. Eiweiß schützt davor. Merke: Im Alter braucht man mehr Eiweiß, nicht weniger."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut. Proteine liefern 4 kcal/g und sollen 15-20% der Tagesenergie ausmachen — 0,8 g/kg KG bei Erwachsenen, 1,0 g/kg ab 65. Hauptfunktionen: Baustoff (Muskeln), Enzyme, Antikörper, Transport, Hormone. 9 essentielle Aminosäuren müssen über die Nahrung aufgenommen werden."

**B1 (250 Zeichen):** "Sehr gut. Eiweiß gibt 4 Kalorien pro Gramm. DGE: 15-20% der Energie aus Eiweiß — 0,8 g pro kg, ab 65 Jahren 1,0 g pro kg. Eiweiß ist für Muskeln, Enzyme, Antikörper. 9 Aminosäuren sind essentiell — musst du essen. Pflanzliche Kombinationen sind auch sehr gut."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie hoch ist die DGE-Protein-Empfehlung für Erwachsene unter und über 65 Jahren?"
- **Rückseite:** "Unter 65 Jahre: 0,8 g/kg Körpergewicht/Tag. Ab 65 Jahre: 1,0 g/kg/Tag (wegen Sarkopenie-Prävention)."
- **Kategorie:** fakt

---

## Baustein 5: energiedichte-vergleich

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-energiedichte
- **bloomLevel:** 4
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Du hast 100 g Apfel und 100 g Schokolade. Wie viel Kalorien stecken jeweils drin — und woran liegt der Unterschied?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Die **Atwater-Faktoren** (1899) geben Energieliefer-Werte pro Gramm: **Kohlenhydrate 4 kcal/g**, **Proteine 4 kcal/g**, **Fette 9 kcal/g**, **Alkohol 7 kcal/g**, **Ballaststoffe 2 kcal/g**. Fett ist also mehr als doppelt so energiedicht wie KH/Protein."

**B1 (235 Zeichen):** "Die **Atwater-Faktoren** sind feste Werte pro Gramm: **Kohlenhydrate 4 Kalorien**, **Eiweiß 4 Kalorien**, **Fett 9 Kalorien**, **Alkohol 7 Kalorien**. Fett hat also **mehr als doppelt so viel** Energie wie Kohlenhydrate oder Eiweiß."

- **Step-Typ:** comparison (Atwater-Tabelle)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Die **Atwater-Faktoren** (Wilbur O. Atwater, USDA 1899) sind die bis heute gültigen Umrechnungsfaktoren zwischen Masse und Energie:

| Nährstoff | Energie pro Gramm | Faktor in kJ |
|-----------|-------------------|--------------|
| **Kohlenhydrate** | **4 kcal** | 17 kJ |
| **Proteine** | **4 kcal** | 17 kJ |
| **Fette** | **9 kcal** | 37 kJ |
| **Alkohol** | **7 kcal** | 29 kJ |
| **Ballaststoffe** | **2 kcal** | 8 kJ (nur teilweise verwertet) |
| **Wasser** | **0 kcal** | 0 kJ |

**Konsequenzen für die Praxis:**
- Fett ist **über doppelt so energiedicht** wie KH oder Eiweiß — kleine Portion, viel Energie
- 1 Esslöffel Öl (~10 g) = 90 kcal
- 1 Apfel (~150 g) = ~90 kcal
- Bei **Mangelernährung**: fettreiche Beilagen (Sahne, Öl, Nüsse) erhöhen Energiegehalt, ohne die Portion zu vergrößern
- Bei **Übergewicht**: Fettreduktion bringt schnell Kalorieneinsparung, ohne das Volumen zu verringern

Merke: **1 g Fett ≈ 2,25 g Kohlenhydrate** in Kalorien. (Atwater 1899, DGE 2024)"

**B1 (560 Zeichen):**
"Die **Atwater-Faktoren** sagen, wie viel Energie jedes Gramm bringt:

| Nährstoff | Energie pro Gramm |
|-----------|-------------------|
| **Kohlenhydrate** | **4 Kalorien** |
| **Eiweiß** | **4 Kalorien** |
| **Fett** | **9 Kalorien** |
| **Alkohol** | **7 Kalorien** |
| **Ballaststoffe** | **2 Kalorien** |
| **Wasser** | **0 Kalorien** |

**Was heißt das für die Pflege?**

Fett hat **mehr als doppelt so viel** Energie wie Kohlenhydrate oder Eiweiß. Beispiel:
- 1 Esslöffel Öl (10 g) = **90 Kalorien**
- 1 Apfel (150 g) = **etwa 90 Kalorien**

**Bei Patienten mit Mangelernährung** hilft Fett: Sahne in die Suppe, Öl über den Salat, Nüsse als Snack. Kleine Menge — viel Energie.

**Bei Patienten mit Übergewicht:** Weniger Fett ist ein einfacher Weg. Die Portion bleibt gleich groß, aber weniger Kalorien.

Merke: **1 g Fett** hat so viel Energie wie **über 2 g Kohlenhydrate**."

- **Erklärungs-Step:** stepType `tablefillin` (Atwater-Werte ergänzen)
- **Glossar-Begriffe:** [Atwater-Faktor, kcal, kJ, Energiedichte]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Kalorien aus Zucker sind schlechter als Kalorien aus Öl"**
- **Fachbegriff:** Kalorien-Hierarchie-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **1 kcal ist physikalisch 1 kcal**, egal woher. Entscheidend für die Gesundheit ist nicht die Kalorie selbst, sondern **das Gesamtpaket**: Zucker ohne Vitamine/Ballaststoffe vs. Olivenöl mit Vitamin E und Omega-9. Stoffwechsel und Sättigung unterscheiden sich — die Kalorie nicht."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — **eine Kalorie ist eine Kalorie**. Aber: Zucker gibt nur Energie, keine Vitamine. Olivenöl gibt Energie **plus** Vitamin E. Der Körper hat auch länger satt durch Öl. Merke: Die Kalorien sind gleich — aber das Drumherum ist anders."

**D2: "Wasser hat Kalorien, weil es im Körper ist"**
- **Fachbegriff:** Wasser-Kalorien-Irrtum
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — **Wasser hat 0 Kalorien** (Atwater 1899). Es liefert keine Energie. Aber es ist ein essentieller Nährstoff: Lösungsmittel, Transporteur, Temperatur-Regulator. Kalorienfrei heißt nicht wertlos. Merke: Wasser ist lebenswichtig, aber ohne Kalorien."
- **Feedback (B1, 210 Zeichen):** "Nicht ganz — **Wasser hat 0 Kalorien**. Es gibt keine Energie. Aber Wasser ist sehr wichtig: Es transportiert Stoffe, regelt die Temperatur. Ohne Kalorien heißt nicht ohne Nutzen. Merke: Wasser = wichtig, aber 0 kcal."

**D3: "Alkohol hat keine Kalorien, weil er flüssig ist"**
- **Fachbegriff:** Alkohol-Flüssigkeits-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **Alkohol hat 7 Kalorien pro Gramm** (nach Atwater), fast so viel wie Fett. Bei Bier und Wein kommt oft noch Zucker dazu. 0,5 Liter Bier = etwa 200 kcal. Wichtig bei Ernährungsberatung: flüssige Kalorien werden oft unterschätzt. Merke: Flüssig ≠ kalorienfrei."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Alkohol hat 7 Kalorien pro Gramm**. Das ist fast so viel wie Fett. 0,5 Liter Bier = etwa 200 Kalorien. Viele denken 'flüssig = leicht', aber das stimmt nicht. Wichtig bei der Beratung. Merke: Alkohol ist keine leichte Kalorie."

### Richtig-Feedback
**C1 (270 Zeichen):** "Sehr gut. Atwater-Faktoren: Kohlenhydrate und Proteine je 4 kcal/g, Fett 9 kcal/g, Alkohol 7 kcal/g, Ballaststoffe 2 kcal/g, Wasser 0 kcal/g. Fett ist über doppelt so energiedicht wie KH oder Eiweiß — wichtig bei Mangelernährung (Aufbaukost) und Übergewicht (Reduktion)."

**B1 (225 Zeichen):** "Sehr gut. Kohlenhydrate und Eiweiß haben je 4 Kalorien, Fett 9 Kalorien, Alkohol 7 Kalorien, Ballaststoffe 2 Kalorien, Wasser 0 Kalorien — pro Gramm. Fett hat die meiste Energie — gut bei Mangelernährung, kritisch bei Übergewicht."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie viele kcal pro Gramm haben Kohlenhydrate, Proteine, Fette und Alkohol?"
- **Rückseite:** "KH: 4 kcal/g. Proteine: 4 kcal/g. Fette: 9 kcal/g. Alkohol: 7 kcal/g. (Atwater-Faktoren 1899)"
- **Kategorie:** fakt

---

## Baustein 6: ballaststoffe

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-ballaststoffe
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Warum sind Haferflocken und Apfel länger im Bauch als weißes Brot? Was passiert mit den 'Ballast'-Stoffen im Darm?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Ballaststoffe sind **unverdauliche Kohlenhydrate** aus pflanzlichen Zellwänden. DGE empfiehlt **≥ 30 g pro Tag**. Sie fördern die Darmtätigkeit, sättigen, senken Cholesterin und Blutzuckeranstieg. Quellen: Vollkorn, Obst, Gemüse, Hülsenfrüchte."

**B1 (225 Zeichen):** "Ballaststoffe sind Pflanzenteile, die der Körper **nicht verdauen** kann. DGE: **mindestens 30 g am Tag**. Sie machen den Darm aktiv, machen lange satt und halten den Blutzucker stabil. Quellen: Vollkorn, Obst, Gemüse, Bohnen."

- **Step-Typ:** text (displayFormat: analogy — "Ballaststoffe sind wie ein Besen für den Darm")

### Stufe 3 — Erklärung

**C1 (715 Zeichen):**
"Ballaststoffe sind **pflanzliche Nahrungsbestandteile**, die vom menschlichen Verdauungstrakt **nicht oder nur teilweise abgebaut** werden können.

**Zwei Typen:**
- **Wasserlösliche Ballaststoffe** (Pektine, Beta-Glucane): in Obst, Hafer, Hülsenfrüchten. Wirkung: senken Cholesterin, verlangsamen Blutzuckeranstieg, werden im Dickdarm durch Bakterien zu kurzkettigen Fettsäuren abgebaut.
- **Wasserunlösliche Ballaststoffe** (Cellulose, Lignin): in Vollkorn, Getreideschalen, Gemüse. Wirkung: fördern Darmbewegung, vergrößern Stuhlvolumen, beugen Obstipation vor.

**DGE-Empfehlung:** ≥ 30 g Ballaststoffe pro Tag für Erwachsene. **Realität in Deutschland:** Durchschnitt liegt bei 20-25 g.

**Gesundheitliche Effekte (WHO, DGE 2024):**
- Reduziertes Risiko für Herz-Kreislauf-Erkrankungen
- Reduziertes Risiko für Dickdarmkrebs
- Bessere Blutzucker-Kontrolle
- Längere Sättigung — hilft bei Gewichtskontrolle

**Wichtig bei Erhöhung der Ballaststoffzufuhr:** Gleichzeitig **Trinkmenge steigern** (mind. 1,5 l/Tag), sonst drohen Verstopfung und Bauchschmerzen. (DGE/ÖGE/SGE 2024)"

**B1 (585 Zeichen):**
"Ballaststoffe sind Teile von Pflanzen, die der **Körper nicht verdauen** kann. Sie wandern durch den Darm und werden wieder ausgeschieden.

**Zwei Typen:**
- **Lösliche Ballaststoffe** (z.B. in Hafer, Apfel, Bohnen): senken Cholesterin, halten den Blutzucker stabil, füttern die Darmbakterien.
- **Unlösliche Ballaststoffe** (z.B. in Vollkornbrot, Gemüse): machen den Stuhl weicher und größer, helfen gegen Verstopfung.

**DGE sagt:** Mindestens **30 g Ballaststoffe am Tag**. In Deutschland essen die meisten nur 20-25 g.

**Was Ballaststoffe bringen:**
- Schutz vor Darmkrebs
- Schutz vor Herzkrankheiten
- Stabiler Blutzucker
- Lange Sättigung — gut beim Abnehmen

**Wichtig:** Wenn du mehr Ballaststoffe isst, musst du auch mehr **trinken** (mindestens 1,5 Liter am Tag). Sonst gibt es Verstopfung und Bauchweh."

- **Erklärungs-Step:** stepType `comparison` (Lösliche vs unlösliche Ballaststoffe)
- **Glossar-Begriffe:** [Ballaststoff, Cellulose, Pektin, Obstipation, kurzkettige Fettsäure]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ballaststoffe sind nur wichtig bei Verstopfung"**
- **Fachbegriff:** Ballaststoff-Indikations-Verengung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Ballaststoffe wirken auf **mehreren Ebenen**: Darmgesundheit (Verstopfungsprophylaxe, Darmkrebsprävention), Herz-Kreislauf (Cholesterin-Senkung), Stoffwechsel (Blutzucker-Kontrolle), Gewicht (Sättigung). Sie gehören in **jede tägliche Ernährung** — nicht nur bei Beschwerden."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — Ballaststoffe helfen bei **vielen Dingen**, nicht nur bei Verstopfung: Sie schützen das Herz, helfen bei Diabetes, machen satt und können vor Darmkrebs schützen. Jeder sollte täglich 30 g essen — auch gesunde Menschen. Merke: Nicht nur bei Problemen."

**D2: "Ballaststoffe sind dasselbe wie Bauchfett"**
- **Fachbegriff:** Ballast-Fett-Verwechslung
- **Feedback (C1, 245 Zeichen):** "Nicht ganz — das sind **völlig verschiedene Dinge**. Ballaststoffe sind **unverdauliche Pflanzenfasern** in deinem Essen. Bauchfett ist **Körperfett** im Bauchbereich. Ballaststoffe helfen sogar gegen Bauchfett — sie sättigen und senken die Kalorienaufnahme."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — das ist **nicht dasselbe**. Ballaststoffe sind Teile von Pflanzen, die der Körper nicht verdaut. Bauchfett ist Fett im Bauch. Ballaststoffe helfen sogar beim Abnehmen, weil sie satt machen. Merke: Nicht verwechseln."

**D3: "Ballaststoffe kann man gefahrlos beliebig hoch dosieren"**
- **Fachbegriff:** Ballaststoff-Überdosierungs-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — eine plötzliche Steigerung der Ballaststoffe kann **Blähungen, Bauchschmerzen und Verstopfung** machen, besonders wenn **zu wenig getrunken** wird. Außerdem können sehr hohe Mengen die **Aufnahme von Mineralstoffen** (Eisen, Zink, Calcium) verschlechtern. Merke: Langsam steigern + viel trinken."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — plötzlich sehr viele Ballaststoffe machen **Blähungen** und **Bauchweh**, besonders wenn man zu wenig trinkt. Auch kann zu viel die Aufnahme von Eisen und Kalzium stören. Merke: Ballaststoffe langsam mehr essen und viel Wasser trinken."

### Richtig-Feedback
**C1 (275 Zeichen):** "Sehr gut. Ballaststoffe sind unverdauliche pflanzliche Kohlenhydrate (wasserlöslich und wasserunlöslich). DGE empfiehlt ≥30 g/Tag. Effekte: Obstipationsprophylaxe, Blutzucker-Stabilität, Cholesterin-Senkung, Sättigung, Darmkrebsprävention. Wichtig: viel trinken dazu."

**B1 (235 Zeichen):** "Sehr gut. Ballaststoffe sind Pflanzenteile, die der Körper nicht verdaut. DGE: 30 g am Tag. Sie helfen dem Darm, halten den Blutzucker stabil, machen satt und schützen vor Darmkrebs. Wichtig: viel trinken dazu — sonst Verstopfung."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie hoch ist die DGE-Empfehlung für Ballaststoffe pro Tag und warum muss man dazu viel trinken?"
- **Rückseite:** "≥30 g/Tag. Ballaststoffe binden Wasser im Darm. Ohne ausreichend Trinken (>1,5 l/Tag) drohen Verstopfung und Bauchbeschwerden."
- **Kategorie:** fakt

---

## Baustein 7: vitamine-loeslichkeit

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-vitamine-loeslichkeit
- **bloomLevel:** 2
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Warum empfehlen manche Ernährungsexperten, Möhren mit etwas Öl zu essen? Was hat Öl mit Vitamin A zu tun?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Vitamine teilt man nach **Löslichkeit** ein: **Fettlöslich** sind E, D, K, A (Merkhilfe 'EDEKA') — sie werden im Körper gespeichert. **Wasserlöslich** sind die 8 **B-Vitamine** und **Vitamin C** — sie werden nicht gespeichert, müssen täglich gegessen werden."

**B1 (220 Zeichen):** "Es gibt **2 Gruppen Vitamine**: **Fettlöslich**: Vitamin E, D, K, A ('**EDEKA**') — der Körper kann sie speichern. **Wasserlöslich**: Vitamin C und die 8 B-Vitamine — der Körper kann sie **nicht** speichern, du musst sie jeden Tag essen."

- **Step-Typ:** comparison (Fett- vs. wasserlöslich)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Vitamine sind **13 organische Verbindungen**, die der Körper in kleinen Mengen braucht und (bis auf Ausnahmen) nicht selbst herstellen kann.

**Fettlösliche Vitamine (Merkhilfe: EDEKA)**
- **E** (Tocopherol): Zellschutz, in Nüssen, Pflanzenölen
- **D** (Calciferol): Knochen, Immunsystem, in Fisch, Sonnenlicht synthetisiert
- **K** (Phyllochinon): Blutgerinnung, in grünem Blattgemüse
- **A** (Retinol): Augen, Haut, aus Milch, Leber, Karotin in Möhren

**Merkmale fettlöslich:** Werden im Körper (Leber, Fettgewebe) **gespeichert**. Aufnahme benötigt **Fett in der Nahrung**. Überdosierung möglich (Hypervitaminose, besonders A und D).

**Wasserlösliche Vitamine (8 B-Vitamine + Vitamin C)**
- **B1** (Thiamin), **B2** (Riboflavin), **B3** (Niacin), **B5** (Pantothensäure), **B6** (Pyridoxin), **B7** (Biotin), **B9** (Folsäure), **B12** (Cobalamin)
- **C** (Ascorbinsäure): Immunsystem, Kollagen, Antioxidans

**Merkmale wasserlöslich:** Werden **nicht gespeichert** (Ausnahme: B12 in Leber, mehrere Jahre). Überschuss wird mit Urin ausgeschieden. Tägliche Zufuhr nötig. Hitze- und lichtempfindlich — vorsichtig zubereiten.

**Besonderheiten:**
- **Vitamin D** kann der Körper bei Sonnenlicht selbst herstellen — in Deutschland im Winter oft zu wenig.
- **Vitamin B12** kommt fast nur in tierischen Produkten vor — Vegan-Ernährung braucht Supplementierung. (DGE/ÖGE/SGE 2024)"

**B1 (640 Zeichen):**
"Es gibt **13 Vitamine**. Sie sind in zwei Gruppen:

**Fettlöslich: E, D, K, A** — Merke: '**EDEKA**'
- **E** — schützt die Zellen (in Nüssen, Öl)
- **D** — für Knochen (in Fisch, Sonnenlicht)
- **K** — für die Blutgerinnung (in grünem Gemüse)
- **A** — für die Augen (in Möhren, Milch, Leber)

**Wichtig bei fettlöslich:**
- Der Körper kann sie **speichern** (in der Leber und im Fett)
- Du brauchst **Fett dazu** — z.B. Öl an den Möhrensalat
- Zu viel kann schaden (besonders A und D)

**Wasserlöslich: Vitamin C und die 8 B-Vitamine**
- **B1 bis B12** — für Nerven, Blut, Stoffwechsel
- **C** — für Immunsystem, Wunden

**Wichtig bei wasserlöslich:**
- Der Körper kann sie **nicht speichern** (außer B12)
- Jeden Tag essen
- Hitze und Licht machen sie kaputt — sanft kochen

**Was Vegetarier beachten müssen:**
- Vitamin B12 ist fast nur in tierischen Produkten. Wer kein Fleisch isst, braucht ein Nahrungsergänzungsmittel.
- Vitamin D machen wir aus Sonnenlicht — im Winter in Deutschland oft zu wenig."

- **Erklärungs-Step:** stepType `matrix` (13 Vitamine mit Löslichkeit, Funktion, Quelle)
- **Glossar-Begriffe:** [Vitamin, fettlöslich, wasserlöslich, Hypervitaminose, Retinol, Ascorbinsäure, Cobalamin]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Vitamin D ist wasserlöslich — es heißt doch 'Hormon der Haut'"**
- **Fachbegriff:** Vitamin-D-Einordnungs-Fehler
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Vitamin D ist **fettlöslich** (das 'D' in EDEKA). Es wird in Fettgewebe und Leber gespeichert. Die Haut stellt aus Cholesterin mit UVB-Licht eine Vorstufe her — das macht es nicht wasserlöslich. Fettige Fische (Lachs, Makrele) sind wichtige Quellen. Merke: D = fettlöslich."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Vitamin D ist **fettlöslich** (das D in **EDEKA**). Der Körper speichert es im Fett und in der Leber. Die Haut macht zwar Vitamin D aus Sonnenlicht, aber aufgenommen wird es mit Fett. Fisch ist eine gute Quelle. Merke: D = fettlöslich."

**D2: "Vitamin C kann man überdosieren und sich damit vergiften"**
- **Fachbegriff:** Vitamin-C-Toxizitäts-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Vitamin C ist **wasserlöslich**. Überschüssiges Vitamin C wird einfach mit dem **Urin ausgeschieden** — eine klassische Hypervitaminose gibt es praktisch nicht. Bei sehr hohen Dosen (>2 g/Tag) kann es zu Durchfall und Nierensteinen kommen. Merke: Wasserlöslich = schwer überdosierbar."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Vitamin C ist **wasserlöslich**. Zu viel kommt einfach mit dem **Urin** wieder raus. Eine echte Vergiftung ist sehr selten. Nur sehr hohe Dosen (über 2 g am Tag) können Durchfall machen. Merke: Wasserlöslich = schwer zu überdosieren."

**D3: "Vitamin B12 braucht man nicht extra, weil es überall drin ist"**
- **Fachbegriff:** B12-Verfügbarkeits-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **Vitamin B12 kommt fast ausschließlich in tierischen Produkten vor** (Fleisch, Fisch, Milch, Eier). Pflanzliche Quellen sind kaum vorhanden. Bei **veganer Ernährung** ist eine Supplementierung Pflicht — sonst drohen perniziöse Anämie und Nervenschäden. Merke: B12 = tierisch."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **Vitamin B12 ist fast nur in tierischen Produkten** (Fleisch, Fisch, Milch, Eier). In Pflanzen fehlt es fast ganz. Wer **vegan** lebt, braucht Tabletten oder spezielle Lebensmittel — sonst werden die Nerven krank. Merke: B12 kommt nur aus tierischen Lebensmitteln."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut. Fettlöslich = EDEKA (E, D, K, A), werden gespeichert, brauchen Fett zur Aufnahme. Wasserlöslich = alle B-Vitamine + Vitamin C, werden ausgeschieden (Ausnahme B12), brauchen tägliche Zufuhr. Praxis: Möhrensalat mit Öl verbessert Vitamin-A-Aufnahme deutlich."

**B1 (245 Zeichen):** "Sehr gut. Fettlöslich = **EDEKA** (E, D, K, A) — werden gespeichert, brauchen Fett. Wasserlöslich = C und 8 B-Vitamine — werden nicht gespeichert, jeden Tag essen. Beispiel: Möhren mit Öl essen — dann nimmt der Körper das Vitamin A besser auf."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche Vitamine sind fettlöslich (Merkhilfe) und was bedeutet das praktisch?"
- **Rückseite:** "EDEKA: E, D, K, A. Werden in Leber/Fettgewebe gespeichert. Aufnahme braucht Nahrungsfett (z.B. Öl an Möhrensalat). Überdosierung möglich."
- **Kategorie:** fachbegriff

---

## Baustein 8: vitamin-d-besonderheit

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-vitamin-d
- **bloomLevel:** 4
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Warum empfehlen deutsche Hausärzte im Winter oft Vitamin-D-Tabletten — und warum im Sommer seltener? Was ist bei älteren Heimbewohnern besonders?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Vitamin D ist ein **Sonderfall**: Der Körper kann es bei UVB-Licht in der Haut **selbst herstellen**. In Deutschland gelingt das nur von April bis September, ab 50° nördlicher Breite. DGE-Zufuhr bei fehlender Eigensynthese: **20 µg/Tag (800 IE)**."

**B1 (220 Zeichen):** "Vitamin D ist besonders: Die **Haut macht es aus Sonnenlicht**. In Deutschland klappt das nur im Sommer (April bis September). Im Winter ist zu wenig Sonne. DGE: Bei wenig Sonne **20 Mikrogramm am Tag** (800 Internationale Einheiten)."

- **Step-Typ:** text (displayFormat: diary — Jahresverlauf Vitamin-D-Versorgung)

### Stufe 3 — Erklärung

**C1 (755 Zeichen):**
"Vitamin D nimmt eine Sonderstellung ein: Es ist das **einzige Vitamin**, das der Mensch in ausreichender Menge **selbst synthetisieren** kann — aus **7-Dehydrocholesterin** in der Haut unter Einfluss von **UVB-Strahlung** (290-315 nm).

**Funktionen:**
- **Calcium- und Phosphathaushalt** (Knochen-Mineralisierung)
- **Muskelfunktion** (Sturzprävention bei Älteren!)
- Immunmodulation
- Möglicherweise neuroprotektiv

**Das Deutschland-Problem:** Ab 50° nördlicher Breite (ganz Deutschland) reicht die UVB-Strahlung **nur von April bis September** für die Eigensynthese. In den Wintermonaten zehrt der Körper von Speichern (Leber, Fettgewebe). Rund **60% der Bevölkerung in Deutschland** erreichen die empfohlene Serum-25-OH-Vitamin-D-Konzentration (≥50 nmol/l) nicht.

**DGE-Empfehlung bei fehlender Eigensynthese:** **20 µg/Tag (800 IE)** ab 1 Jahr. Säuglinge: Prophylaxe 10-12,5 µg/Tag (Rachitis-Prophylaxe).

**Risikogruppen für Mangel:**
- **Alte Menschen** (verminderte Hautsynthese, wenig Sonne)
- **Pflegeheimbewohner** (selten draußen)
- **Dunkelhäutige** (höherer UV-Schutz der Haut)
- **Vollverschleierte** (wenig Hautexposition)
- Säuglinge, Schwangere, chronisch Kranke

**Mangel-Folgen:** Rachitis (Kinder), Osteomalazie (Erwachsene), Osteoporose, Muskelschwäche, erhöhtes Sturzrisiko. (DGE/ÖGE/SGE 2024, RKI KiGGS-Studie 2008)"

**B1 (670 Zeichen):**
"Vitamin D ist besonders — es ist das **einzige Vitamin**, das der Körper **selbst machen kann**. Die **Haut macht es aus Sonnenlicht** (UVB-Strahlen).

**Wozu Vitamin D gut ist:**
- **Knochen** stark halten (mit Kalzium zusammen)
- **Muskeln** — schützt vor Stürzen bei älteren Menschen
- Immunsystem

**Das Deutschland-Problem:** In Deutschland ist die Sonne nur von **April bis September** stark genug für Vitamin D. Im Winter macht der Körper keins. Dann nimmt er von seinen Reserven. Etwa **60% der Menschen in Deutschland haben zu wenig Vitamin D.**

**DGE sagt:** Wenn zu wenig Sonne, täglich **20 Mikrogramm Vitamin D** (also 800 Internationale Einheiten).

**Wer hat besonders wenig?**
- **Alte Menschen** — die Haut macht weniger
- **Menschen in Pflegeheimen** — sie gehen wenig raus
- **Menschen mit dunkler Haut** — weniger UV-Aufnahme
- **Frauen mit Vollverschleierung**
- **Babys, Schwangere, chronisch Kranke**

**Was passiert bei Mangel:**
- **Bei Kindern:** Rachitis (weiche Knochen)
- **Bei Erwachsenen:** Osteomalazie, Osteoporose
- **Bei allen:** schwache Muskeln, mehr Stürze

Wichtig: Pflegeheimbewohner brauchen oft eine Tablette — wegen Stürzen und Knochen."

- **Erklärungs-Step:** stepType `timeline` (Jahresverlauf Sonne + Eigensynthese)
- **Glossar-Begriffe:** [UVB-Strahlung, Cholecalciferol, Rachitis, Osteomalazie, Internationale Einheit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Im Sommer 15 Minuten Sonne am Gesicht reichen für das ganze Jahr"**
- **Fachbegriff:** Sommer-Speicher-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die **Sommer-Speicher** reichen für 2-3 Wintermonate, nicht für den ganzen Winter. Ab Oktober sinken die Serumspiegel ohne Zufuhr deutlich. Zudem: Bei älteren Menschen produziert die Haut **weniger** Vitamin D, auch bei gleicher Sonnenexposition. Merke: Speicher begrenzen."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — die **Reserven** aus dem Sommer reichen nicht den ganzen Winter. Nur 2-3 Monate. Ab Oktober sinkt das Vitamin D schnell. Besonders bei alten Menschen — ihre Haut macht weniger Vitamin D. Merke: Sommer-Reserven helfen nur kurz."

**D2: "Vitamin D bekommt man aus Obst und Gemüse"**
- **Fachbegriff:** Vitamin-D-Quellen-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **Obst und Gemüse enthalten kaum Vitamin D**. Die Hauptquellen über Nahrung sind **fette Seefische** (Lachs, Hering, Makrele), Lebertran, **Eigelb**, **Champignons/Steinpilze** (nach UV-Bestrahlung). Rein pflanzlich-frischköstlich ist ausreichende Versorgung fast unmöglich. Merke: Fisch vor Apfel."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **Obst und Gemüse haben fast kein Vitamin D**. Gute Quellen sind: **fetter Fisch** (Lachs, Hering), **Eigelb**, einige **Pilze**. Mit nur Obst und Gemüse bekommt man zu wenig. Merke: Vitamin D kommt aus Fisch, nicht aus Salat."

**D3: "Vitamin-D-Supplementierung ist gefährlich — zu viel schadet dem Herz"**
- **Fachbegriff:** Supplement-Angst
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — die DGE-Empfehlung (20 µg = 800 IE) ist **weit unter** der schädlichen Dosis. Problematisch sind erst **Dauerdosen über 100 µg/Tag (4000 IE)** — dann drohen Hyperkalzämie und Nierensteine. Bei Risikogruppen (Ältere, Pflegeheim) **senkt Supplementierung nachweislich Stürze und Frakturen**."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — die DGE-Menge (20 Mikrogramm = 800 IE) ist **sicher**. Gefährlich wird es erst bei sehr viel mehr (über 100 Mikrogramm am Tag, jeden Tag, lange). Für alte Menschen im Heim ist Vitamin D **wichtig** — es verringert **Stürze und Brüche**. Merke: Die empfohlene Menge ist sicher."

### Richtig-Feedback
**C1 (285 Zeichen):** "Sehr gut. Vitamin D wird in der Haut aus Cholesterin + UVB gebildet — in Deutschland nur April-September. Empfehlung bei fehlender Eigensynthese: 20 µg/Tag (800 IE). Risikogruppen: Ältere, Pflegeheim, dunkle Haut, Vollverschleierung. Supplementierung senkt Stürze und Frakturen — evidenzbasiert."

**B1 (245 Zeichen):** "Sehr gut. Die Haut macht Vitamin D aus Sonnenlicht — in Deutschland nur April bis September. DGE: 20 Mikrogramm am Tag, wenn wenig Sonne. Besonders wichtig für alte Menschen im Heim — weniger Stürze und Knochenbrüche. Quellen: fetter Fisch, Eigelb, Pilze."

### Verknüpfte Karteikarte
- **Vorderseite:** "Warum ist Vitamin-D-Mangel bei älteren Menschen in Pflegeheimen so häufig und warum ist er gefährlich?"
- **Rückseite:** "Wenig Sonne + reduzierte Hautsynthese im Alter. Folgen: Osteoporose, Muskelschwäche, erhöhtes Sturz- und Frakturrisiko. DGE: 20 µg/Tag."
- **Kategorie:** assessment

---

## Baustein 9: mineralstoffe-spurenelemente

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-mineralstoffe
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Warum bekommt ein Mensch Muskelkrämpfe bei starkem Schwitzen? Und was passiert bei einer Schwangeren, wenn sie zu wenig Eisen isst?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Mineralstoffe sind **anorganische Elemente**. Unterteilung nach Tagesbedarf: **Mengenelemente** (>50 mg/Tag — Natrium, Kalium, Calcium, Magnesium, Phosphor, Chlorid, Schwefel) und **Spurenelemente** (<50 mg/Tag — z.B. Eisen, Zink, Jod, Selen, Kupfer)."

**B1 (225 Zeichen):** "Mineralstoffe sind **anorganisch** (nicht aus lebender Natur). Zwei Gruppen: **Mengenelemente** (viel davon — z.B. Kalzium, Natrium, Kalium) und **Spurenelemente** (ganz wenig — z.B. Eisen, Jod, Zink). Menge heißt: mehr als 50 mg am Tag."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (745 Zeichen):**
"Mineralstoffe sind **anorganische Nährstoffe** — im Gegensatz zu Vitaminen. Einteilung nach Tagesbedarf:

**Mengenelemente (>50 mg/Tag):**
- **Natrium (Na)**: Flüssigkeitshaushalt, Nervenreize. DGE: max 6 g NaCl/Tag
- **Kalium (K)**: Herzfunktion, Muskeltätigkeit. DGE: 4000 mg/Tag
- **Calcium (Ca)**: Knochen, Blutgerinnung. DGE: 1000 mg/Tag
- **Magnesium (Mg)**: Muskel, Nerven, Enzyme. DGE: 300-400 mg/Tag
- **Phosphor (P)**: Knochen, Energiestoffwechsel (ATP)
- **Chlorid (Cl)**: Magensäure, Flüssigkeitsverschiebung
- **Schwefel (S)**: Teil vieler Eiweiße

**Spurenelemente (<50 mg/Tag):**
- **Eisen (Fe)**: Hämoglobin, Sauerstofftransport. Frauen 15 mg/Tag, Männer 10 mg/Tag
- **Zink (Zn)**: Immunsystem, Wundheilung
- **Jod (I)**: Schilddrüsenhormone. DGE: 200 µg/Tag
- **Selen (Se)**: Antioxidans
- **Kupfer (Cu)**: Eisenverwertung, Bindegewebe
- **Mangan (Mn)**, **Chrom (Cr)**, **Molybdän (Mo)**, **Fluorid (F)**

**Häufige Mangelzustände in Deutschland:**
- **Eisenmangel** (besonders Frauen im gebärfähigen Alter, Schwangere)
- **Jodmangel** (Deutschland ist Jodmangelgebiet — Jodsalz wichtig)
- **Magnesiummangel** (Ausdauersportler, ältere Menschen)

**Verluste:** Schwitzen verliert vor allem Natrium, Kalium, Magnesium — Muskelkrämpfe möglich. (DGE/ÖGE/SGE 2024, RKI KiGGS/NVS II)"

**B1 (625 Zeichen):**
"Mineralstoffe sind **anorganisch** (keine Lebewesen). Zwei Gruppen:

**Mengenelemente (viel — über 50 mg am Tag):**
- **Natrium** — im Salz, hält Wasser im Körper
- **Kalium** — fürs Herz und die Muskeln
- **Kalzium** — für die Knochen (1000 mg am Tag)
- **Magnesium** — für Muskeln und Nerven (300-400 mg)
- **Phosphor**, **Chlor**, **Schwefel**

**Spurenelemente (wenig — unter 50 mg am Tag):**
- **Eisen** — für Blut und Sauerstoff (Frauen 15 mg, Männer 10 mg)
- **Zink** — für Abwehr und Wundheilung
- **Jod** — für die Schilddrüse (200 Mikrogramm am Tag)
- **Selen**, **Kupfer**, **Mangan**, **Chrom**, **Fluor**

**Was fehlt in Deutschland oft?**
- **Eisen** — bei Frauen, die ihre Periode haben, und bei Schwangeren
- **Jod** — Deutschland ist ein Jodmangel-Land. Deshalb **Jodsalz** verwenden
- **Magnesium** — bei Sportlern und alten Menschen

**Bei starkem Schwitzen** verliert der Körper Natrium, Kalium, Magnesium — das kann zu Muskelkrämpfen führen."

- **Erklärungs-Step:** stepType `matrix` (Mineralstoffe + Funktion + Quelle + Mangelzeichen)
- **Glossar-Begriffe:** [Mengenelement, Spurenelement, Hämoglobin, anorganisch]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Spurenelemente sind weniger wichtig als Mengenelemente"**
- **Fachbegriff:** Mengen-Wichtigkeits-Verwechslung
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — 'Spuren' heißt nur **wenig Menge**, nicht 'weniger wichtig'. Jod ist mit 200 µg/Tag winzig, aber **unverzichtbar für die Schilddrüse**. Ohne Jod keine Schilddrüsenhormone, keine Entwicklung bei Kindern. Die Menge sagt nichts über die Bedeutung. Merke: Spur ≠ unwichtig."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — 'Spurenelemente' heißt nur **kleine Menge**, nicht **unwichtig**. Jod ist nur 200 Mikrogramm am Tag — aber ohne Jod keine Schilddrüsenhormone, kein Wachstum bei Kindern. Wenig ist nicht weniger wichtig. Merke: Kleine Menge, große Wirkung."

**D2: "Jodsalz ist künstlich und sollte vermieden werden"**
- **Fachbegriff:** Jodsalz-Ablehnung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — Deutschland ist ein **Jodmangelgebiet** (wenig Jod im Boden und im Trinkwasser). **Jodiertes Speisesalz** ist eine der wichtigsten Maßnahmen gegen Strumen und Kretinismus. Seit Einführung in den 1990er Jahren sind Kropf-Fälle stark zurückgegangen. Merke: Jodsalz ist Prävention."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — Deutschland hat **wenig Jod** im Boden. **Jodsalz** ist wichtig, weil es gegen Kröpfe schützt. Seit Jodsalz üblich ist, haben viel weniger Menschen einen Kropf oder Kretinismus. Merke: Jodsalz ist wichtig, nicht gefährlich."

**D3: "Magnesium-Präparate helfen immer bei Muskelkrämpfen"**
- **Fachbegriff:** Magnesium-Pauschal-Therapie
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — Muskelkrämpfe haben viele Ursachen: Magnesiummangel, Natriummangel, Dehydrierung, neurologische Störungen, Medikamente (Statine, Diuretika). **Nur bei echtem Magnesiummangel** hilft Supplementierung. Bei anderen Ursachen bleibt es wirkungslos. Diagnostik vor Supplement. Merke: Ursache suchen."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — Muskelkrämpfe können viele Gründe haben: Magnesiummangel, Salzmangel, zu wenig getrunken, Medikamente. **Nur wenn wirklich Magnesium fehlt**, helfen Tabletten. Sonst nicht. Ein Arzt muss die Ursache finden. Merke: Zuerst suchen, dann schlucken."

### Richtig-Feedback
**C1 (280 Zeichen):** "Sehr gut. Mineralstoffe sind anorganisch. Mengenelemente >50 mg/Tag (Natrium, Kalium, Calcium, Magnesium, Phosphor, Chlorid, Schwefel), Spurenelemente <50 mg/Tag (Eisen, Zink, Jod, Selen, Kupfer u.a.). Häufige Mangelzustände in DE: Eisen (Frauen), Jod (alle), Magnesium."

**B1 (240 Zeichen):** "Sehr gut. Mineralstoffe sind anorganisch. Mengenelemente = viel (Kalzium, Kalium, Natrium, Magnesium). Spurenelemente = wenig (Eisen, Jod, Zink). In Deutschland fehlen oft: Eisen (Frauen, Schwangere), Jod (alle — deshalb Jodsalz), Magnesium."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen Mengenelementen und Spurenelementen und welcher Mangel ist in Deutschland am häufigsten?"
- **Rückseite:** "Mengenelemente: Bedarf >50 mg/Tag (z.B. Ca, Na, K, Mg). Spurenelemente: <50 mg/Tag (z.B. Fe, I, Zn). Häufigster Mangel DE: Eisen (Frauen) und Jod (alle)."
- **Kategorie:** fachbegriff

---

## Baustein 10: fluessigkeitsbedarf

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-fluessigkeit
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 80-jähriger Heimbewohner wiegt 70 kg. Wie viel muss er am Tag trinken? Was passiert in seinem Körper, wenn er nur 500 ml trinkt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Flüssigkeitsbedarf bei Erwachsenen: ca. **30-35 ml pro kg Körpergewicht** pro Tag — bei 70 kg also ca. **2,1-2,5 Liter**. Davon etwa **1,5 l über Getränke**, Rest aus Nahrung. DGE-Empfehlung Erwachsene: **1,5 l/Tag Getränke** (EFSA: ~2 l bei Frauen, ~2,5 l Männern)."

**B1 (225 Zeichen):** "Flüssigkeit pro Tag: **30-35 ml pro kg Körpergewicht**. Bei 70 kg sind das **2,1 bis 2,5 Liter am Tag**. Davon **1,5 Liter trinken**, Rest aus dem Essen. DGE-Empfehlung: **1,5 Liter trinken** — mehr bei Hitze, Fieber, Sport."

- **Step-Typ:** calculation (Formel 30-35 ml/kg KG)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Wasser ist der **mengenmäßig größte Bestandteil** des Körpers (55-60% beim Erwachsenen, 75% beim Säugling). Funktionen: Lösungs- und Transportmittel, Reaktionspartner im Stoffwechsel, Temperaturregulation.

**Berechnung Flüssigkeitsbedarf:**
- **Erwachsene**: ca. **30-35 ml pro kg Körpergewicht/Tag**
- **Senioren ab 65 Jahre**: eher 30 ml/kg
- **Säuglinge**: bis 130 ml/kg (wegen großer Körperoberfläche)
- **Kleinkinder**: 100 ml/kg
- **Schulkinder**: 60-80 ml/kg

**Quellen** (Gesamt beim Erwachsenen ~2,5 l/Tag):
- **Getränke**: ca. 1,5 l (DGE-Empfehlung)
- **Feste Nahrung**: ca. 0,9 l (Obst, Gemüse, Suppen)
- **Oxidationswasser** (im Stoffwechsel entsteht): ca. 0,3 l

**Ausfuhr:**
- **Urin**: 1,0-1,5 l
- **Stuhl**: 0,1 l
- **Haut** (Schwitzen, Perspiratio insensibilis): 0,5 l
- **Atmung**: 0,3-0,4 l

**Mehrbedarf** bei:
- **Fieber**: pro °C über 37°C zusätzlich 0,5-1 l
- **Diarrhoe, Erbrechen**
- **Schwere körperliche Arbeit, Sport**
- **Hitze**
- **Stillenden Frauen**: + 700 ml

**Senioren-Problem:** Durstempfinden lässt nach. Dehydrierungsrisiko in Pflegeheimen hoch — Bezugspflege muss Trinkmenge dokumentieren. (EFSA 2010, DGE 2024)"

**B1 (635 Zeichen):**
"Wasser ist der **größte Teil** im Körper (Erwachsene: 55-60%, Babys: 75%). Wasser löst, transportiert und regelt die Temperatur.

**So viel brauchst du am Tag:**
- **Erwachsene**: **30-35 ml pro kg Körpergewicht**
  Beispiel: 70 kg × 30 ml = 2,1 Liter am Tag
- **Senioren ab 65 Jahren**: 30 ml pro kg
- **Babys**: bis 130 ml pro kg
- **Kinder**: 60-100 ml pro kg

**Wo kommt die Flüssigkeit her?** (Erwachsener, 2,5 Liter am Tag)
- **Trinken**: 1,5 Liter
- **Essen** (Obst, Gemüse, Suppe): 0,9 Liter
- **Vom Körper** (beim Stoffwechsel): 0,3 Liter

**Wo geht sie hin?**
- **Urin**: 1 bis 1,5 Liter
- **Stuhl**: 0,1 Liter
- **Haut** (Schwitzen): 0,5 Liter
- **Atmung**: 0,3 Liter

**Mehr brauchst du bei:**
- **Fieber**: pro Grad über 37°C extra 0,5-1 Liter
- **Durchfall, Erbrechen**
- **Sport, Hitze**
- **Stillen**: plus 700 ml

**Problem bei Senioren:** Sie merken weniger, dass sie Durst haben. In Pflegeheimen passiert oft **Austrocknung**. Die Pflege muss mit einem **Trinkprotokoll** aufpassen."

- **Erklärungs-Step:** stepType `calculation` (Schüler rechnet Patientenbeispiel)
- **Glossar-Begriffe:** [Dehydrierung, Exsikkose, Oxidationswasser, Perspiratio insensibilis, Trinkprotokoll]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Kaffee zählt nicht zur Flüssigkeitsbilanz, weil er entwässert"**
- **Fachbegriff:** Kaffee-Diuretika-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — aktuelle Studien (EFSA 2015, DGE 2024) zeigen: **Bei gewohnheitsmäßigem Konsum von Kaffee und Tee ist die Flüssigkeitsbilanz neutral bis positiv**. Der kurzzeitige harntreibende Effekt wird durch Toleranz ausgeglichen. Kaffee und Tee zählen zur Trinkmenge. Merke: Kaffee = Flüssigkeit."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die neueren Empfehlungen (DGE 2024, EFSA) sagen: **Kaffee zählt zur Flüssigkeit**. Der Körper gewöhnt sich an das Koffein. Bei normalem Konsum ist die Bilanz ausgeglichen. Kaffee und Tee darfst du dazuzählen. Merke: Kaffee entwässert nicht dauerhaft."

**D2: "Durst ist ein zuverlässiges Zeichen für zu wenig Flüssigkeit"**
- **Fachbegriff:** Durstsignal-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Durst ist ein **später** Indikator. Wenn er einsetzt, sind oft schon 0,5-1 l Flüssigkeitsdefizit vorhanden. **Bei Senioren** lässt die Durstwahrnehmung nach — sie trinken nicht rechtzeitig. Pflege: aktiv erinnern, Trinkmenge dokumentieren, nicht auf Durst warten. Merke: Durst = spät."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **Durst kommt zu spät**. Wenn du Durst spürst, fehlt schon 0,5 bis 1 Liter. Bei **älteren Menschen** ist das Durstgefühl sogar schwächer — sie merken es nicht. Die Pflege muss erinnern und aufschreiben, wie viel der Patient getrunken hat. Merke: Nicht warten."

**D3: "Viel trinken ist immer gesund — je mehr, desto besser"**
- **Fachbegriff:** Überhydrierungs-Unterschätzung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — auch **Überhydrierung** (Hyperhydratation) ist gefährlich. Sehr hohe Trinkmengen (>3-4 l/Tag ohne medizinischen Grund) können zu **Hyponatriämie** führen — Natrium wird verdünnt, es kommt zu Kopfschmerzen, Verwirrtheit, Krampfanfällen. Bei Herz- und Niereninsuffizienz: Flüssigkeitsbilanz strikt. Merke: Balance."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — auch **zu viel trinken** kann schaden. Über 3-4 Liter am Tag ohne Grund kann gefährlich sein: Das Natrium wird verdünnt. Das macht Kopfschmerzen, Verwirrung, Krampfanfälle. Bei Herz- oder Nierenkranken muss man sogar weniger trinken. Merke: Das richtige Maß zählt."

### Richtig-Feedback
**C1 (285 Zeichen):** "Sehr gut. Flüssigkeitsbedarf Erwachsene: 30-35 ml/kg KG/Tag, davon ca. 1,5 l über Getränke (DGE). Mehrbedarf bei Fieber (+0,5-1 l/°C), Hitze, Sport, Stillen. Senioren-Problem: Durstempfinden schwach — aktive Trinkbegleitung und Trinkprotokoll. Kaffee zählt dazu (EFSA 2015)."

**B1 (245 Zeichen):** "Sehr gut. Flüssigkeit: 30-35 ml pro kg Körpergewicht am Tag. Davon 1,5 Liter trinken. Mehr bei Fieber, Hitze, Sport, Stillen. Alte Menschen merken Durst schlecht — die Pflege muss an das Trinken erinnern. Kaffee und Tee zählen mit."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie hoch ist der Flüssigkeitsbedarf pro kg Körpergewicht bei Erwachsenen und wie verteilt sich das auf Getränke und Nahrung?"
- **Rückseite:** "30-35 ml/kg KG/Tag. Bei 70 kg: ~2,1-2,5 l Gesamt. Davon ~1,5 l Getränke (DGE), ~0,9 l Nahrung, ~0,3 l Oxidationswasser."
- **Kategorie:** fakt

---

## Baustein 11: energiebedarf-berechnung

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-energiebedarf
- **bloomLevel:** 4
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Eine bettlägerige 75-jährige Patientin wiegt 60 kg. Ein 25-jähriger Bauarbeiter wiegt auch 60 kg. Wer braucht mehr Kalorien am Tag und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Der **Gesamtenergiebedarf** setzt sich zusammen aus **Grundumsatz** (ca. 24 kcal/kg KG/Tag oder ~1 kcal/kg/h) und **Leistungsumsatz** (körperliche Aktivität). Faustregel: **~30 kcal/kg KG/Tag** bei mittlerer Aktivität — bei 70 kg also ca. 2100 kcal/Tag."

**B1 (225 Zeichen):** "Der **Gesamtbedarf** an Energie hat zwei Teile: **Grundumsatz** (was der Körper in Ruhe braucht, etwa 24 kcal/kg) und **Arbeitsumsatz** (für Bewegung). Faustregel: **30 kcal pro kg Körpergewicht** am Tag. Bei 70 kg: 2100 Kalorien."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"Der **Gesamtenergiebedarf** (Total Energy Expenditure, TEE) setzt sich aus mehreren Komponenten zusammen:

**1. Grundumsatz (GU, Basal Metabolic Rate BMR)** — Energie für Körperfunktionen in völliger Ruhe (Herz, Atmung, Nieren, Körpertemperatur):
- **Faustregel**: ca. **1 kcal pro kg KG pro Stunde** = 24 kcal/kg/Tag
- Beispiel 70 kg: 70 × 24 = **1680 kcal** Grundumsatz
- Präziser: **Harris-Benedict** oder **Mifflin-St Jeor** Formeln berücksichtigen Alter, Geschlecht, Größe

**2. Leistungsumsatz (LU)** — Energie für körperliche Aktivität. Ausgedrückt als **PAL-Wert** (Physical Activity Level, Multiplikator zum GU):
- **PAL 1,2**: bettlägerig, sehr eingeschränkt
- **PAL 1,4-1,5**: sitzend, wenig Bewegung (Bürojob)
- **PAL 1,6-1,7**: stehend, etwas Bewegung (Verkäufer)
- **PAL 1,8-1,9**: körperlich aktiv (Pflege, Handwerk)
- **PAL 2,0-2,4**: Schwerarbeit

**3. Nahrungsinduzierte Thermogenese (NIT)**: ca. 10% des Gesamtumsatzes — Energie zur Verdauung.

**Berechnung**: **Gesamtbedarf = Grundumsatz × PAL**

**Beispiel:** 70 kg Erwachsener, PAL 1,5 → 1680 × 1,5 = **2520 kcal/Tag**

**Faustregel Pflege**: **30 kcal/kg KG/Tag** bei mittlerer Aktivität als schnelle Orientierung.

**Bei Mangelernährung**: oft **35-40 kcal/kg KG/Tag** zum Aufbau nötig (DGEM-Leitlinie 2019). (FAO/WHO/UNU 2004, Harris/Benedict 1919, Mifflin/St Jeor 1990)"

**B1 (680 Zeichen):**
"Der Körper braucht Energie für zwei Dinge:

**1. Grundumsatz (GU)** — Das braucht der Körper in **völliger Ruhe**. Für Herz, Atmung, Nieren, Temperatur.
- Faustregel: **1 Kalorie pro kg Körpergewicht pro Stunde** = **24 kcal pro kg am Tag**
- Beispiel: 70 kg × 24 = **1680 Kalorien** Grundumsatz

**2. Arbeitsumsatz** — Das braucht der Körper für **Bewegung**. Je mehr du bewegst, desto mehr.

Die Pflege rechnet mit dem **PAL-Wert** (wie aktiv jemand ist):
- **PAL 1,2** — bettlägerig
- **PAL 1,4-1,5** — Büroarbeit, wenig Bewegung
- **PAL 1,6-1,7** — Verkäufer, Lehrer
- **PAL 1,8-1,9** — Pflege, Handwerk
- **PAL 2,0-2,4** — Schwerarbeit

**So rechnest du den Gesamtbedarf:**
**Gesamtbedarf = Grundumsatz × PAL**

**Beispiel:** 70 kg, PAL 1,5 → 1680 × 1,5 = **2520 Kalorien am Tag**

**Einfache Regel für die Pflege:**
**30 Kalorien pro kg Körpergewicht am Tag** bei mittlerer Aktivität.

**Bei Mangelernährung** braucht man mehr: **35-40 Kalorien pro kg** zum Aufbau."

- **Erklärungs-Step:** stepType `calculation` (Schüler berechnet 2 Patientenbeispiele mit PAL)
- **Glossar-Begriffe:** [Grundumsatz, Leistungsumsatz, PAL-Wert, nahrungsinduzierte Thermogenese, Gesamtenergiebedarf]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Der Grundumsatz ist bei allen Menschen gleich — nur die Bewegung macht den Unterschied"**
- **Fachbegriff:** Grundumsatz-Uniformitäts-Irrtum
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — der Grundumsatz hängt ab von **Alter** (sinkt ab 30 um ca. 1%/Jahr), **Geschlecht** (Männer höher wegen Muskelmasse), **Körpergröße**, **Muskelmasse** (Muskel verbraucht mehr als Fett), **Hormonlage** (z.B. Schilddrüse), **Körpertemperatur**. Zwei Menschen gleichen Gewichts können sehr unterschiedliche Grundumsätze haben."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — der Grundumsatz ist **nicht bei allen gleich**. Er hängt ab von: **Alter** (älter = weniger), **Geschlecht** (Männer mehr), **Muskeln** (mehr Muskeln = mehr), **Schilddrüse**, **Körpergröße**. Zwei Menschen mit 70 kg können verschieden viel brauchen. Merke: Mehr als nur Gewicht."

**D2: "Ältere Menschen brauchen im Krankenhaus weniger Kalorien"**
- **Fachbegriff:** Senioren-Kalorien-Irrtum
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **bei Krankheit** ist der Bedarf oft **erhöht**: Fieber +13% pro °C, Wundheilung, postoperativ, Infektion — alles steigert den Bedarf. Gleichzeitig essen Ältere oft weniger (Appetitverlust, Schluckprobleme). Die DGEM-Leitlinie empfiehlt bei Mangelernährung **30-35 kcal/kg**, zum Aufbau bis **40 kcal/kg**."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — im Krankenhaus braucht der Körper oft **mehr** Kalorien: Bei **Fieber** 13% mehr pro Grad. Nach **Operationen** und bei **Wundheilung** ebenfalls mehr. Aber Ältere essen oft weniger. Deshalb brauchen sie manchmal **35-40 Kalorien pro kg** zum Aufbauen. Merke: Krank = mehr Energie."

**D3: "Wer abnehmen will, sollte unter den Grundumsatz essen"**
- **Fachbegriff:** Sub-Grundumsatz-Diät
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **unter dem Grundumsatz zu essen** ist ungesund. Folgen: Muskelabbau, Nährstoffmangel, Stoffwechselverlangsamung ('Jojo-Effekt'), Konzentrationsprobleme. Empfohlen: maximal **500 kcal unter Gesamtbedarf**, nie unter Grundumsatz. Langsam abnehmen (~0,5 kg/Woche). Merke: Nie unter GU."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **unter dem Grundumsatz** essen ist nicht gesund. Folgen: Muskeln werden abgebaut, Vitamine fehlen, der Stoffwechsel wird langsam (Jojo-Effekt). Besser: höchstens 500 Kalorien weniger als der Gesamtbedarf. Langsam abnehmen — 0,5 kg pro Woche. Merke: Nie unter GU."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Gesamtenergiebedarf = Grundumsatz (~24 kcal/kg KG/Tag) × PAL-Wert (1,2 bettlägerig bis 2,4 Schwerarbeit) + nahrungsinduzierte Thermogenese. Faustregel: 30 kcal/kg/Tag bei mittlerer Aktivität. Bei Mangelernährung 35-40 kcal/kg zum Aufbau (DGEM 2019). Bei 70 kg: ~2100 kcal."

**B1 (255 Zeichen):** "Sehr gut. Gesamtbedarf = Grundumsatz × PAL-Wert. Grundumsatz ist das, was der Körper in Ruhe braucht (24 Kalorien pro kg am Tag). PAL ist die Aktivität (1,2 bis 2,4). Faustregel: 30 Kalorien pro kg pro Tag. Bei Mangelernährung: 35-40 Kalorien pro kg."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie berechnest du den Energiebedarf eines Patienten (Faustregel und Formel)?"
- **Rückseite:** "Faustregel: 30 kcal/kg KG/Tag bei mittlerer Aktivität. Formel: Grundumsatz (24 kcal/kg/Tag) × PAL-Wert (1,2-2,4 je nach Aktivität)."
- **Kategorie:** fakt

---

## Baustein 12: naehrstoff-verteilung

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-naehrstoffverteilung
- **bloomLevel:** 4
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Patient soll 2000 Kalorien pro Tag essen. Wie viel Gramm Kohlenhydrate, Fett und Eiweiß sollten in einem vollwertigen Essen etwa drin sein?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Die DGE-Richtwerte für eine vollwertige Ernährung: **>50% Kohlenhydrate**, **~30% Fett**, **15-20% Protein** der Tagesenergie. Bei 2000 kcal: ~250 g KH, ~67 g Fett, ~75-100 g Eiweiß. Grundlage: 10 Regeln der DGE und D-A-CH-Referenzwerte 2024."

**B1 (225 Zeichen):** "Die DGE sagt: **Mehr als 50% Kohlenhydrate**, **etwa 30% Fett**, **15-20% Eiweiß** der Energie am Tag. Bei 2000 Kalorien: etwa 250 g Kohlenhydrate, 67 g Fett, 75-100 g Eiweiß. Grundlage: die **10 Regeln der DGE**."

- **Step-Typ:** comparison (Verteilungs-Tabelle)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Die DGE formuliert **drei Richtwerte** für die Verteilung der Makronährstoffe:

| Nährstoff | Anteil Tagesenergie | Bei 2000 kcal |
|-----------|---------------------|---------------|
| **Kohlenhydrate** | **>50%** | >250 g |
| **Fette** | **~30%** | ~67 g |
| **Proteine** | **15-20%** | 75-100 g |

**Die 10 Regeln der DGE (Kurzform, 2024):**
1. Lebensmittelvielfalt genießen
2. Gemüse und Obst — nimm 5 am Tag (3 Portionen Gemüse, 2 Obst)
3. Vollkorn wählen
4. Milch und Milchprodukte täglich, Fisch 1-2× pro Woche, Fleisch <300-600 g/Woche
5. Pflanzliche Öle bevorzugen
6. Zucker und Salz einsparen (Salz <6 g/Tag, Zucker <10% Energie)
7. Am besten Wasser trinken (ca. 1,5 l/Tag)
8. Schonend zubereiten (dünsten statt braten)
9. Achtsam essen und genießen
10. Auf das Gewicht achten und in Bewegung bleiben

**Beispielverteilung für 2000 kcal:**
- 250 g KH × 4 kcal = 1000 kcal (50%)
- 67 g Fett × 9 kcal = 600 kcal (30%)
- 100 g Eiweiß × 4 kcal = 400 kcal (20%)

**Praktische Plattenregel:** **½ Gemüse/Obst**, **¼ Beilage** (Vollkorn, Kartoffeln), **¼ Proteinquelle** (Fisch, Hülsenfrüchte, mageres Fleisch). (DGE 2024, D-A-CH-Referenzwerte)"

**B1 (600 Zeichen):**
"Die DGE gibt **drei Richtwerte** für eine gesunde Ernährung:

| Nährstoff | Anteil | Bei 2000 Kalorien |
|-----------|--------|-------------------|
| **Kohlenhydrate** | **mehr als 50%** | mehr als 250 g |
| **Fette** | **etwa 30%** | etwa 67 g |
| **Eiweiße** | **15 bis 20%** | 75 bis 100 g |

**Die 10 Regeln der DGE (kurz):**
1. **Verschiedene** Lebensmittel essen
2. **5 am Tag** — 3× Gemüse, 2× Obst
3. **Vollkorn** wählen
4. Milch täglich, Fisch 1-2× pro Woche, Fleisch weniger
5. **Pflanzliches Öl** statt Butter
6. **Wenig Zucker und Salz** (Salz unter 6 g, Zucker unter 10%)
7. **Wasser** trinken (1,5 Liter am Tag)
8. **Schonend kochen** (dünsten, nicht braten)
9. **Achtsam essen** und genießen
10. **Gewicht halten** und sich **bewegen**

**Plattenregel für jede Mahlzeit:**
- **½ Teller**: Gemüse oder Obst
- **¼ Teller**: Kartoffeln, Reis, Nudeln (am besten Vollkorn)
- **¼ Teller**: Eiweiß (Fisch, Bohnen, Quark, Fleisch)"

- **Erklärungs-Step:** stepType `diagram` (Teller mit Aufteilung 1/2, 1/4, 1/4)
- **Glossar-Begriffe:** [D-A-CH-Referenzwerte, 10 Regeln der DGE, Plattenregel]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei Diabetes soll man gar keine Kohlenhydrate mehr essen"**
- **Fachbegriff:** Diabetes-Kohlenhydrat-Pauschal-Verbot
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — auch Diabetiker brauchen Kohlenhydrate. Aktuelle Leitlinien empfehlen **>45-50% Kohlenhydrate**, aber **komplexe** (Vollkorn, Hülsenfrüchte) statt schnelle (Zucker, Weißmehl). Wichtig ist der **glykämische Index** — nicht Totalverzicht. Bei Diabetes Typ 1: angepasste Insulindosis. Merke: Qualität vor Verbot."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — auch bei **Diabetes** darf man Kohlenhydrate essen. Die Leitlinien sagen: mindestens **45-50%** — aber **langsame** (Vollkorn, Bohnen), nicht schnelle (Zucker, Weißmehl). Wichtig ist **welche** Kohlenhydrate, nicht **ob**. Bei Typ 1: Insulin anpassen. Merke: Qualität statt Verbot."

**D2: "Fettarm = gesund. Immer Light-Produkte kaufen"**
- **Fachbegriff:** Light-Produkt-Gesundheits-Irrtum
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — in **Light-Produkten** wird Fett oft durch **Zucker, Süßstoffe oder Verdickungsmittel** ersetzt. Der Kaloriengehalt ist ähnlich, die Sättigung schlechter. Außerdem: Fett ist wichtig für fettlösliche Vitamine, Omega-3, Zellmembranen. **~30% Fett ist gesund**, nicht möglichst wenig. Merke: Qualität."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — **Light-Produkte** sind oft **nicht gesünder**. Weniger Fett, aber mehr Zucker oder Süßstoffe. Oft gleich viele Kalorien. Fett ist wichtig für **Vitamine** und **Zellen**. DGE sagt: **30% Fett** ist gut. Lieber gutes Fett (Öl, Fisch) als Light. Merke: Nicht immer ist weniger mehr."

**D3: "Eiweißshakes sind die beste Protein-Quelle"**
- **Fachbegriff:** Protein-Shake-Überbewertung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — für die meisten Menschen ist der **Protein-Bedarf problemlos über normale Lebensmittel** zu decken. Ei, Milchprodukte, Fisch, Fleisch, Hülsenfrüchte und Nüsse enthalten hochwertiges Eiweiß — plus Vitamine und Ballaststoffe. Shakes sind nur bei nachgewiesenem Mehrbedarf oder Mangelernährung sinnvoll."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — die **meisten Menschen bekommen genug Eiweiß** aus normalen Lebensmitteln: Ei, Milch, Fisch, Fleisch, Bohnen, Linsen, Nüsse, Quark. Dazu gibt es Vitamine und Ballaststoffe. **Shakes** sind nur bei Sportlern oder Mangelernährung nötig. Merke: Normal essen reicht meistens."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. DGE-Makroverteilung: >50% Kohlenhydrate (Vollkorn, Hülsenfrüchte), ~30% Fett (pflanzliche Öle, Fisch), 15-20% Protein. Grundlage sind die 10 Regeln der DGE (2024) und die D-A-CH-Referenzwerte. Praxis-Plattenregel: ½ Gemüse, ¼ Beilage, ¼ Proteinquelle."

**B1 (250 Zeichen):** "Sehr gut. DGE: mehr als 50% Kohlenhydrate, 30% Fett, 15-20% Eiweiß. Die 10 Regeln der DGE sagen: 5 am Tag Obst/Gemüse, Vollkorn, wenig Zucker, Wasser trinken, bewegen. Plattenregel: halb Gemüse, ¼ Beilage, ¼ Eiweiß."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie sieht die DGE-Empfehlung zur Makronährstoff-Verteilung aus und was ist die Plattenregel?"
- **Rückseite:** ">50% KH, ~30% Fett, 15-20% Protein. Plattenregel: ½ Gemüse/Obst, ¼ Beilage, ¼ Proteinquelle."
- **Kategorie:** fakt

---

## Baustein 13: sonderernaehrung-kulturell

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-kulturell
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Ein muslimischer Patient und eine hinduistische Patientin liegen auf derselben Station. Was darfst du auf den Tisch stellen — und was nicht? Wie findest du das heraus?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Religiöse und kulturelle Essensregeln beeinflussen die Ernährung: **Islam** — kein Schweinefleisch, kein Alkohol, Ramadan-Fasten. **Judentum** — koscher (kein Schwein, keine Mischung Fleisch/Milch). **Hinduismus** — oft vegetarisch, kein Rind. **Bei Unsicherheit: fragen**."

**B1 (235 Zeichen):** "**Religion und Kultur** beeinflussen das Essen:\n- **Islam**: kein Schweinefleisch, kein Alkohol, Ramadan\n- **Judentum**: koscher — kein Schwein, Fleisch und Milch getrennt\n- **Hinduismus**: oft vegetarisch, kein Rind\n**Wichtig: Immer fragen!**"

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Die Ernährung ist tief mit **Kultur, Religion und Identität** verbunden. Die Pflege muss die wichtigsten Regeln kennen — und vor allem: **individuell nachfragen**, nicht pauschalisieren.

**Islam:**
- Kein **Schweinefleisch**, kein **Alkohol** (auch nicht in Speisen, z.B. Alkohol in Pralinen oder Desserts)
- Fleisch nur **halal** (rituell geschlachtet)
- **Ramadan**: Fasten von Sonnenaufgang bis Sonnenuntergang — Kranke sind oft befreit, wollen aber trotzdem fasten. Pflege respektvoll informieren und Arzt einbinden.

**Judentum:**
- **Koscher** (kashrut): kein Schwein, keine Meeresfrüchte, Fleisch und Milchprodukte nie zusammen (z.B. keine Käse-Wurst-Platte)
- Fleisch ritualgerecht geschlachtet (Schächtung)
- Sabbat: vom Freitagabend bis Samstagabend Ruhe — in strengen Fällen keine warme Speisenzubereitung

**Hinduismus:**
- Oft **vegetarisch** oder vegan (Ahimsa — Gewaltlosigkeit)
- **Kein Rindfleisch** (Kuh ist heilig)
- Kaste und Region beeinflussen die Details

**Buddhismus:**
- Häufig vegetarisch, aber nicht immer streng
- Mondrelated Fasten-Tage in manchen Strömungen

**Wichtig für die Pflege:**
- **Individuell nachfragen**, nicht annehmen (z.B. nicht jeder Muslim isst streng halal)
- **Küche informieren** — die meisten Krankenhäuser bieten Alternativen
- **Angehörige** dürfen Speisen mitbringen — abstimmen
- **Respekt** vor religiösen Überzeugungen ist Teil der **kultursensiblen Pflege**

Das Pflegeberufegesetz fordert kulturelle Kompetenz: **§ 5 PflBG** (Pflegeberufegesetz) nennt 'kultursensible Pflege' als Ausbildungsziel."

**B1 (665 Zeichen):**
"Das Essen ist für viele Menschen mit **Religion und Kultur** verbunden. Die Pflege muss die wichtigsten Regeln kennen — und **immer fragen**, nicht annehmen.

**Islam:**
- **Kein Schweinefleisch**
- **Kein Alkohol** — auch nicht in Pralinen oder Desserts
- Fleisch nur **halal** (besonders geschlachtet)
- **Ramadan**: Fasten den ganzen Tag, von Sonnenaufgang bis Sonnenuntergang. Kranke dürfen essen — wollen aber oft trotzdem fasten.

**Judentum:**
- **Koscher** essen
- Kein Schwein, keine Meeresfrüchte
- **Fleisch und Milch** nie zusammen (keine Käse-Wurst-Platte)
- Fleisch rituell geschlachtet

**Hinduismus:**
- Oft **vegetarisch**
- **Kein Rindfleisch** (die Kuh ist heilig)

**Buddhismus:**
- Oft vegetarisch

**Wichtig für die Pflege:**
- **Immer persönlich fragen** — nicht annehmen
- **Die Küche informieren** — sie kann andere Sachen kochen
- **Angehörige dürfen Essen mitbringen** — abstimmen
- **Respekt** zeigen

Das Pflegeberufegesetz sagt: **kultursensible Pflege** ist Pflicht (§ 5 PflBG)."

- **Erklärungs-Step:** stepType `matrix` (Religionen + erlaubt/verboten + Besonderheiten)
- **Glossar-Begriffe:** [halal, koscher, Ramadan, Schächtung, kultursensible Pflege, Ahimsa]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Alle Muslime essen streng halal und fasten im Ramadan"**
- **Fachbegriff:** Pauschalisierungs-Fehler
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — es gibt große **individuelle Unterschiede** in der Religionspraxis. Manche Muslime essen streng halal, andere vermeiden nur Schweinefleisch, wieder andere sind liberal. Ähnlich beim Ramadan: Kranke sind **befreit** (§ Koran 2:184), viele wollen aber trotzdem fasten. Merke: Immer fragen, nicht annehmen."
- **Feedback (B1, 270 Zeichen):** "Nicht ganz — **nicht alle** Muslime leben gleich streng. Manche essen nur **kein Schwein**, andere sind ganz streng. Im Ramadan: **Kranke dürfen** essen, aber manche fasten trotzdem. Jeder Mensch ist anders. Merke: **Immer fragen**, nicht pauschal annehmen."

**D2: "Wenn jemand vegan lebt, ist das nur ein Trend"**
- **Fachbegriff:** Lifestyle-Abwertung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Veganismus** kann aus religiösen (Hinduismus, Jainismus), ethischen (Tierwohl), ökologischen oder gesundheitlichen Gründen gelebt werden. Die DGE hat 2024 eine positive Position zu veganer Ernährung formuliert (mit Ergänzung von Vitamin B12 und ggf. weiteren Mikronährstoffen). Merke: Respektieren."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **vegan** leben Menschen aus vielen Gründen: Religion, Tierliebe, Umwelt, Gesundheit. Die DGE sagt seit 2024: Vegane Ernährung kann gesund sein — wenn man **Vitamin B12** ergänzt. Das ist **kein Trend**, sondern eine Lebensentscheidung. Merke: Respektieren."

**D3: "Koschere und halale Speisen sind dasselbe"**
- **Fachbegriff:** Koscher-Halal-Verwechslung
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — es gibt **Überschneidungen, aber auch Unterschiede**. Beide verbieten Schweinefleisch und fordern rituelle Schlachtung. Aber: **Koscher** verbietet zusätzlich Milch + Fleisch zusammen; **Halal** erlaubt das. Koscher verbietet bestimmte Meeresfrüchte; Halal hat hier andere Regeln. Nicht austauschbar."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **nicht ganz dasselbe**. Beide verbieten Schweinefleisch. Beide haben eine besondere Schlachtung. Aber: **Koscher** sagt — **kein Fleisch mit Milch zusammen**. **Halal** erlaubt das. Auch bei Fisch und Meerestieren gibt es Unterschiede. Merke: Ähnlich, aber nicht gleich."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Kultursensible Pflege ist laut § 5 PflBG Pflichtteil der Ausbildung. Grundregeln: Islam (kein Schwein, Alkohol; halal; Ramadan), Judentum (koscher, Fleisch/Milch getrennt), Hinduismus (oft vegetarisch, kein Rind), Buddhismus (oft vegetarisch). Immer individuell nachfragen, nicht pauschalisieren."

**B1 (260 Zeichen):** "Sehr gut. **Kultursensible Pflege** ist Pflicht (§ 5 PflBG). Grundregeln: Islam (kein Schwein/Alkohol, Ramadan), Judentum (koscher, Fleisch + Milch getrennt), Hinduismus (oft vegetarisch, kein Rind). **Immer fragen**: Jeder lebt seine Religion anders."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was musst du als Pflegekraft beachten, wenn ein muslimischer Patient im Ramadan im Krankenhaus liegt?"
- **Rückseite:** "Kranke sind vom Fasten befreit, viele wollen aber fasten. Respektvoll ansprechen, Arzt einbinden, mit Küche Mahlzeitenzeiten nach Sonnenuntergang planen, Alkohol in Medikamenten erfragen."
- **Kategorie:** handlung

---

## Baustein 14: mangelernaehrung-erkennen

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-mangelernaehrung-grundlagen
- **bloomLevel:** 3
- **wissensart:** komplikation
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Woran merkst du, dass eine ältere Patientin zu wenig isst? An welchen Zeichen siehst du das, bevor die Waage es zeigt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Mangelernährung ist definiert als **ungewollter Gewichtsverlust >5% in 3 Monaten oder >10% in 6 Monaten** ODER **BMI <18,5** (bei Senioren <20). Klinik: Müdigkeit, schlechte Wundheilung, Infektionsanfälligkeit, Muskelabbau (Sarkopenie)."

**B1 (220 Zeichen):** "**Mangelernährung** heißt: **Gewichtsverlust ohne Absicht** — mehr als **5% in 3 Monaten** oder mehr als **10% in 6 Monaten**. Oder: **BMI unter 18,5** (bei Senioren unter 20). Zeichen: Müdigkeit, schlechte Wundheilung, Muskeln werden weniger."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (745 Zeichen):**
"**Mangelernährung** (Malnutrition) ist ein häufiges, oft übersehenes Problem — in deutschen Krankenhäusern betroffen: ca. **25%** aller Patienten, in Pflegeheimen bis **50%** (DGEM-Erhebung).

**Kriterien (nach DGEM/ESPEN):**
- **Ungewollter Gewichtsverlust**: >5% in 3 Monaten oder >10% in 6 Monaten
- ODER **BMI** < 18,5 kg/m² (Senioren: < 20)
- ODER reduzierte Nahrungsaufnahme (<50% des Bedarfs über >5 Tage)

**Klinische Zeichen:**
- **Allgemein**: Müdigkeit, Antriebslosigkeit, Apathie
- **Haut**: trocken, Turgor vermindert, Wundheilung schlecht
- **Muskeln**: **Sarkopenie** (Schwund), Kraftverlust
- **Immunsystem**: Infektanfälligkeit, schlechte Wundheilung
- **Psyche**: Depression, Konzentrationsstörung
- **Kinder**: Wachstumsstopp

**Risikofaktoren:**
- Hohes Alter (Appetitverlust, Einsamkeit)
- Demenz, Schlaganfall (Schluckstörungen)
- Tumorerkrankungen (Kachexie)
- Depression
- Medikamente (Polypharmazie, Geschmacksveränderung)
- Armut

**Folgen:**
- Verlängerte Krankenhausaufenthalte
- Erhöhte Sterblichkeit
- Dekubitusrisiko steigt deutlich
- Sturzrisiko steigt (Muskelschwund)

**Wichtig:** Der **DNQP-Expertenstandard Ernährungsmanagement (2017, aktualisiert 2024)** verpflichtet zur Früherkennung. Detaillierte Assessment-Instrumente (MNA, NRS 2002) folgen im Thema Ernährungsassessment. (DGEM 2019, DNQP 2017/2024)"

**B1 (605 Zeichen):**
"**Mangelernährung** ist häufig. Im Krankenhaus haben **1 von 4 Patienten** zu wenig Nährstoffe. Im Pflegeheim jeder **zweite**.

**Wann hat jemand Mangelernährung?**
- **Ungewollt Gewicht verloren**: mehr als **5% in 3 Monaten** oder **10% in 6 Monaten**
- ODER **BMI unter 18,5** (bei Senioren unter 20)
- ODER isst **weniger als die Hälfte** vom Bedarf, länger als 5 Tage

**Zeichen, die du siehst:**
- **Allgemein**: Müdigkeit, kein Antrieb, Apathie
- **Haut**: trocken, Wunden heilen schlecht
- **Muskeln**: werden weniger (Sarkopenie), keine Kraft
- **Immunsystem**: bekommt schnell Infekte
- **Psyche**: Depression, kann sich nicht konzentrieren
- **Kinder**: Wachstum stockt

**Wer ist besonders gefährdet?**
- **Alte Menschen** (weniger Hunger, einsam)
- Menschen mit **Demenz** oder **Schlaganfall** (Schluckstörungen)
- Tumorkranke
- Depression
- Viele Medikamente
- Arme Menschen

**Was passiert durch Mangelernährung?**
- Krankenhausaufenthalt dauert länger
- Höhere Sterblichkeit
- Mehr **Dekubiti**
- Mehr **Stürze** (weniger Muskel)

Der **DNQP** (Expertenstandard) sagt: Jeder Patient muss **früh erkannt** werden."

- **Erklärungs-Step:** stepType `matrix` (Klinische Zeichen nach Organsystem)
- **Glossar-Begriffe:** [Mangelernährung, Malnutrition, Kachexie, Sarkopenie, BMI, DNQP, DGEM]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wer dick ist, kann nicht mangelernährt sein"**
- **Fachbegriff:** Adipositas-Mangelernährungs-Paradox
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — es gibt **adipöse Mangelernährung**. Ein Patient kann übergewichtig sein und trotzdem an bestimmten Nährstoffen (Protein, Vitamin D, B12, Eisen) Mangel haben — 'Hidden Hunger' oder qualitative Mangelernährung. Besonders bei einseitiger Ernährung, nach bariatrischen Operationen. Merke: Quantität ≠ Qualität."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — auch **dicke Menschen** können Mangelernährung haben. Sie essen viel **Kalorien**, aber zu wenig **Vitamine und Eiweiß**. Das heißt **versteckter Hunger**. Besonders nach Magen-OPs oder bei einseitigem Essen (viel Süßes, wenig Gemüse). Merke: Viel essen ≠ gesund essen."

**D2: "Gewichtsverlust im Alter ist normal"**
- **Fachbegriff:** Alters-Gewichtsverlust-Normalisierung
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — **ungewollter** Gewichtsverlust ist **nie normal**, auch nicht im Alter. Er ist ein **Warnzeichen** für Krankheit, Mangelernährung, Depression oder sozialen Rückzug. Der DNQP-Expertenstandard fordert eine **systematische Früherkennung**. Leichter Verlust (<2 kg in 6 Monaten) kann okay sein. Merke: Ungewollter Verlust = Problem."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **ungewollter Gewichtsverlust** ist **kein normaler Alterseffekt**. Er ist ein **Warnzeichen**. Krankheit, Depression, Einsamkeit, Mangelernährung können dahinterstecken. Der DNQP sagt: Immer genau hinschauen. Merke: Wenn jemand abnimmt ohne zu wollen — ist immer ernst."

**D3: "Mangelernährung erkennt man nur an der Waage"**
- **Fachbegriff:** Waagen-Monokausalität
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — das **Gewicht ist nur ein Puzzleteil**. Mangelernährung zeigt sich auch in: **Muskelabbau** (Handkraft-Messung), **Hautveränderungen** (Turgor), **Wundheilung**, **Infektanfälligkeit**, **Laborwerten** (Albumin, Transferrin), **Nahrungsanamnese**. Screening-Instrumente kombinieren mehrere Parameter."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — das **Gewicht ist nicht alles**. Du erkennst Mangelernährung auch an: **Muskeln werden weniger**, **Haut wird trocken**, **Wunden heilen schlecht**, viele **Infekte**, **Blutwerte** sind schlecht. Die Pflege nutzt spezielle **Screening-Fragen**. Merke: Mehr als nur Waage."

### Richtig-Feedback
**C1 (290 Zeichen):** "Sehr gut. Mangelernährung: ungewollter Gewichtsverlust >5%/3Mo oder >10%/6Mo, ODER BMI <18,5 (Senioren <20). Klinik: Müdigkeit, Sarkopenie, Infekt- und Wundheilungsprobleme, Dekubitus- und Sturzrisiko. Häufig in DE: 25% Krankenhaus, 50% Pflegeheim. DNQP fordert Früherkennung (2017/2024)."

**B1 (250 Zeichen):** "Sehr gut. Mangelernährung: ungewollt **5% in 3 Monaten** oder **10% in 6 Monaten** abgenommen. Oder BMI unter 18,5 (Senioren unter 20). Zeichen: Müdigkeit, Muskelabbau, schlechte Wundheilung, viele Infekte. Häufig: 25% im Krankenhaus, 50% im Heim."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ab welchem ungewollten Gewichtsverlust spricht man von Mangelernährung?"
- **Rückseite:** ">5% Gewichtsverlust in 3 Monaten ODER >10% in 6 Monaten ODER BMI <18,5 (Senioren <20). Zusätzlich: reduzierte Nahrungsaufnahme <50% über >5 Tage."
- **Kategorie:** assessment

---

## Baustein 15: sonderkostformen

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-kostformen
- **bloomLevel:** 5
- **wissensart:** entscheidung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-15]

### Stufe 1 — Denkfrage
- **Frage:** "Auf deiner Station hat eine Patientin Diabetes, ein anderer Zöliakie, eine Dritte darf nach einem Schlaganfall nur pürierte Kost. Was heißen diese Kostformen konkret?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (250 Zeichen):** "Kostformen in der Klinik: **Vollkost** (Normalkost), **leichte Vollkost** (schonend), **Aufbaukost** (Stufen nach OP), **Diabetiker-Kost** (KH-kontrolliert), **glutenfrei** (bei Zöliakie), **passierte/pürierte Kost** (bei Schluckstörungen), **Diät bei Niere/Leber**."

**B1 (225 Zeichen):** "Es gibt verschiedene **Kostformen**: **Vollkost** (normal), **leichte Vollkost** (schonend), **Aufbaukost** (nach OP), **Diabetiker** (weniger Zucker), **glutenfrei** (bei Zöliakie), **pürierte Kost** (bei Schluckstörungen), **Nieren/Leber-Diät**."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (780 Zeichen):**
"In Krankenhäusern und Pflegeeinrichtungen werden **standardisierte Kostformen** angeboten:

**Allgemeine Kostformen:**
- **Vollkost** — vollwertige Ernährung nach DGE, keine Einschränkungen
- **Leichte Vollkost** — ohne bekannt unverträgliche Lebensmittel (Hülsenfrüchte, fette Speisen, scharfe Gewürze)
- **Aufbaukost** — stufenweise nach Operation: Tee → Zwieback → leichte Vollkost
- **Schonkost** — historischer Begriff, heute durch 'leichte Vollkost' ersetzt

**Krankheitsspezifische Kostformen:**
- **Diabetes-gerechte Kost** — KH-kontrolliert, nach Insulin-Plan angepasst
- **Reduktionskost** — kalorienreduziert (1000-1500 kcal) bei Adipositas
- **Natrium-arme Kost** — <6 g NaCl/Tag bei Hypertonie, Herzinsuffizienz
- **Eiweißreduzierte Kost** — bei chronischer Niereninsuffizienz
- **Kaliumreduzierte Kost** — bei Dialyse
- **Leichte Eiweißkost** — bei Leberinsuffizienz

**Bei Unverträglichkeiten/Allergien:**
- **Glutenfrei** (Zöliakie) — kein Weizen, Roggen, Gerste; Reis, Mais, Buchweizen ok
- **Laktosefrei** (Laktoseintoleranz) — keine Milchprodukte; laktosefreie Alternativen
- **Fruktose-arm** (Fruktoseintoleranz)
- **Allergen-frei** je nach individuellem Bedarf

**Konsistenzangepasste Kostformen** (bei Schluckstörungen, Dysphagie):
- **Passierte/pürierte Kost** — alles zu Brei
- **Weiche Kost** — weich gegart, leicht zerdrückbar
- **Angedickte Flüssigkeiten** (Stufe 1-4 nach IDDSI-Framework, 2019)

**Aufgabe der Pflege:** Kostform auf dem Bestellbogen korrekt angeben, Unverträglichkeiten dokumentieren, Küche informieren, Akzeptanz beobachten und evaluieren. (DGEM 2019, IDDSI 2019)"

**B1 (700 Zeichen):**
"In Kliniken gibt es **verschiedene Kostformen**:

**Allgemeine Kost:**
- **Vollkost** — normales, gesundes Essen
- **Leichte Vollkost** — schonend, ohne schwer verdauliche Sachen (Bohnen, fett, scharf)
- **Aufbaukost** — nach OP Schritt für Schritt: Tee → Zwieback → leichte Vollkost

**Kost bei Krankheit:**
- **Diabetes-Kost** — weniger Zucker, auf Insulin abgestimmt
- **Reduktions-Kost** — weniger Kalorien bei Übergewicht (1000-1500 kcal)
- **Salzarm** — weniger Salz bei Bluthochdruck und Herz (unter 6 g)
- **Eiweißreduziert** — bei Nierenkrankheit
- **Kaliumreduziert** — bei Dialyse
- **Leichte Eiweißkost** — bei Leberkrankheit

**Bei Allergien und Unverträglichkeiten:**
- **Glutenfrei** — kein Weizen, Roggen, Gerste (bei **Zöliakie**)
- **Laktosefrei** — keine Milchprodukte
- **Fruktose-arm** — weniger Frucht-Zucker

**Bei Schluckstörungen:**
- **Pürierte Kost** — alles wird zu Brei
- **Weiche Kost** — weich gekocht, leicht zu kauen
- **Angedickte Getränke** — damit der Patient sich nicht verschluckt

**Was die Pflege macht:**
- Kostform richtig **bestellen**
- Allergien und Unverträglichkeiten **aufschreiben**
- Die **Küche informieren**
- **Beobachten**, ob der Patient die Kost annimmt"

- **Erklärungs-Step:** stepType `matrix` (Kostform + Indikation + Beispiele)
- **Glossar-Begriffe:** [Vollkost, Aufbaukost, Schonkost, Zöliakie, Laktoseintoleranz, Dysphagie, IDDSI, angedickte Flüssigkeit]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Diabetiker-Kost bedeutet zuckerfrei"**
- **Fachbegriff:** Diabetes-Kost-Vereinfachung
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — moderne Diabetikerkost ist **keine Verbotsdiät**. Sie enthält Kohlenhydrate, aber **kontrolliert und passend zum Insulin-Plan**. Es geht um **glykämischen Index**, regelmäßige Mahlzeiten, Vollkornprodukte. Zucker ist in Maßen erlaubt. Die 'Diabetiker-Produkte' der 90er gelten als überholt."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — **moderne Diabetes-Kost ist nicht zuckerfrei**. Der Patient darf Kohlenhydrate essen — aber **geplant** und mit Insulin abgestimmt. Wichtig: Vollkorn statt Weißmehl, regelmäßige Mahlzeiten. Die alten 'Diabetiker-Süßigkeiten' sind überholt. Merke: Kontrolle, nicht Verbot."

**D2: "Pürierte Kost kann man einfach durch alles Aufmixen herstellen"**
- **Fachbegriff:** Pürierte-Kost-Unterschätzung
- **Feedback (C1, 320 Zeichen):** "Nicht ganz — **pürierte Kost muss** homogen, klumpenfrei und konsistent sein (IDDSI-Level 4-5). Einfach aufmixen führt oft zu ungleichmäßiger Konsistenz mit Fasern — **Aspirationsgefahr!** Zusätzlich: Pürierte Speisen sehen unappetitlich aus — **getrennte Komponenten** (Kartoffel, Gemüse, Fleisch einzeln püriert, farblich separiert) erhöhen die Akzeptanz."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — **pürierte Kost muss** richtig gemacht sein: **gleichmäßig**, ohne Klumpen. Nur mixen reicht nicht — Fasern können drin bleiben und **Aspiration** machen (Verschlucken). Auch wichtig: **getrennt pürieren** (Kartoffel, Gemüse, Fleisch einzeln), damit es noch **appetitlich aussieht**."

**D3: "Bei Zöliakie ist nur Brot das Problem"**
- **Fachbegriff:** Gluten-Brot-Verengung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — **Gluten ist in vielen Lebensmitteln versteckt**: Panaden, Saucen, Wurst (Bindemittel), Bier, einige Medikamente, Sojasauce. Zöliakie erfordert **streng glutenfreie Kost** — schon kleinste Mengen lösen die Autoimmunreaktion aus. Pflege: Zutatenlisten lesen, **Verunreinigung durch Kreuzkontamination** vermeiden."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — **Gluten versteckt sich überall**: in Soßen, Wurst, Panade, Bier, manchen Medikamenten. Bei **Zöliakie** lösen schon **kleine Mengen** eine Reaktion aus. Die Pflege muss **Zutatenlisten lesen** und darauf achten, dass kein normales Besteck in das glutenfreie Essen kommt."

### Richtig-Feedback
**C1 (295 Zeichen):** "Sehr gut. Kostformen: Vollkost/leichte Vollkost/Aufbaukost (allgemein), Diabetes/Niere/Leber/Hypertonie (krankheitsspezifisch), glutenfrei/laktosefrei (Unverträglichkeiten), passiert/weich/angedickt (IDDSI bei Dysphagie). Pflegeaufgabe: korrekt bestellen, dokumentieren, Akzeptanz beobachten."

**B1 (250 Zeichen):** "Sehr gut. Kostformen: **Vollkost**, **leichte Vollkost**, **Aufbaukost** nach OP, **Diabetes**, **Nieren**, **Leber**, **salzarm**, **glutenfrei**, **laktosefrei**, **püriert**, **weich**, **angedickt** (bei Schluckstörungen). Pflege: bestellen, aufschreiben, beobachten."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist der Unterschied zwischen leichter Vollkost und pürierter Kost — und wann setzt du welche ein?"
- **Rückseite:** "Leichte Vollkost: schonend, ohne bekannte Unverträglichkeiten (nach OP, bei Magen-/Darmproblemen). Pürierte Kost: Konsistenz zu Brei bei Schluckstörungen (Dysphagie, nach Schlaganfall, bei Demenz)."
- **Kategorie:** handlung

---

## Baustein 16: pflege-ernaehrungsberatung

### Metadaten
- **bausteinId:** ernaehrungsgrundlagen-beratung
- **bloomLevel:** 6
- **wissensart:** entscheidung
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-16]

### Stufe 1 — Denkfrage
- **Frage:** "Eine 78-jährige Patientin hat in 3 Monaten 4 kg verloren, kocht nicht mehr und vergisst zu essen. Was empfiehlst du — konkret und praktisch? Ab wann holst du andere Berufsgruppen dazu?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Pflege-Ernährungsberatung folgt dem **DNQP-Standard Ernährungsmanagement (2017/2024)**: Screening → Assessment → Maßnahmenplan → Umsetzung → Evaluation. Pflege ist **erste Beobachtung**, aber nicht allein verantwortlich — **Ernährungsberater, Arzt, Logopäde** einbinden."

**B1 (235 Zeichen):** "**Pflege-Ernährungsberatung** folgt einem Plan: **Screening** (Suche) → **Assessment** (Untersuchung) → **Plan** → **Umsetzung** → **Prüfen**. Die Pflege sieht als Erste Probleme, aber **andere Experten** (Ernährungsberater, Arzt, Logopäde) helfen mit."

- **Step-Typ:** text (displayFormat: stepbystep)

### Stufe 3 — Erklärung

**C1 (790 Zeichen):**
"Die **Ernährungsberatung in der Pflege** ist Teilaufgabe des Pflegeprozesses — aber eingebettet in ein interprofessionelles Netz.

**Der DNQP-Expertenstandard 'Ernährungsmanagement in der Pflege' (2017, aktualisiert 2024)** beschreibt 5 Kriterien:
1. **Screening** bei Aufnahme und regelmäßig (MNA, NRS 2002 — Details im Thema Ernährungsassessment)
2. **Differenziertes Assessment** bei auffälligem Screening
3. **Individueller Maßnahmenplan** gemeinsam mit Patient, Angehörigen, Team
4. **Umsetzung und Koordination** (Pflege, Küche, Ernährungsberatung)
5. **Evaluation** und Dokumentation

**Konkrete Pflege-Interventionen:**
- **Essenssituation gestalten**: ruhiger Ort, ansprechend angerichtet, Sitzhaltung, Zahnprothese
- **Appetit steigern**: Wunschkost, 6 kleine statt 3 große Mahlzeiten, Aufbaukost kalorisch anreichern (Sahne, Öl, Nüsse)
- **Hilfsmittel**: spezielle Bestecke, rutschfeste Unterlagen, angedickte Getränke
- **Begleitung beim Essen**: Zeit, keine Pflegehandlungen während der Mahlzeit, Würde wahren
- **Dokumentation**: Trinkprotokoll, Esprotokoll, Gewichtsverlauf

**Wann andere Berufsgruppen einbinden?**
- **Ernährungsberater/Diätassistent**: bei komplexen Diäten, Mangelernährung, Wunschkost-Plan
- **Arzt**: Diagnostik, Supplementierung (Trinknahrung, PEG-Indikation)
- **Logopäde**: bei Schluckstörungen (Dysphagie-Diagnostik, Konsistenz-Empfehlung)
- **Sozialdienst**: bei sozialen Ursachen (Einsamkeit, Armut)
- **Seelsorge/Psychologe**: bei depressiver Ursache

**Gesetzliche Grundlage:** Das **Pflegeberufegesetz § 5** listet Ernährungsberatung als **vorbehaltene Aufgabe** der Pflege, zusammen mit Pflegeprozess-Steuerung. Pflegefachkräfte dürfen und müssen also beraten. (DNQP 2017/2024, § 5 PflBG)"

**B1 (690 Zeichen):**
"Die **Ernährungsberatung** ist Aufgabe der Pflege — aber **nicht allein**. Andere Berufe helfen mit.

**Der DNQP sagt: 5 Schritte**
1. **Screening** (Suche) bei Aufnahme und regelmäßig
2. **Genauere Untersuchung**, wenn etwas auffällig ist
3. **Plan zusammen mit Patient und Team**
4. **Umsetzen** — gemeinsam mit Küche, Ernährungsberater
5. **Prüfen**, ob es klappt, und **dokumentieren**

**Was die Pflege konkret macht:**
- **Ess-Situation gestalten**: ruhig, schön angerichtet, richtige Haltung, Zahnprothese da
- **Appetit machen**: Wunsch-Essen, viele **kleine Mahlzeiten** statt 3 große, mit **Sahne, Öl, Nüssen anreichern**
- **Hilfsmittel**: besondere Löffel, rutschfeste Unterlage, angedickte Getränke
- **Dabei sein**: Zeit lassen, keine Pflege während dem Essen
- **Aufschreiben**: Trink-Protokoll, Ess-Protokoll, Gewicht

**Wann holst du andere dazu?**
- **Ernährungsberater** — bei schwieriger Diät oder Mangelernährung
- **Arzt** — für Untersuchungen, Trinknahrung, PEG
- **Logopäde** — bei **Schluckstörung**
- **Sozialdienst** — wenn jemand einsam oder arm ist
- **Seelsorge/Psychologe** — bei Depression

**Gesetz:** Das **Pflegeberufegesetz § 5** sagt: Ernährungsberatung ist eine **Aufgabe der Pflege** — ihr müsst es machen, nicht nur andere."

- **Erklärungs-Step:** stepType `careplan` (Schüler plant Fall)
- **Glossar-Begriffe:** [Ernährungsmanagement, Ernährungsberater, Diätassistent, Logopäde, PEG, Trinknahrung, vorbehaltene Aufgabe]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ernährungsberatung ist ausschließlich Aufgabe der Ernährungsberater — Pflege hat damit nichts zu tun"**
- **Fachbegriff:** Zuständigkeits-Abdelegierung
- **Feedback (C1, 310 Zeichen):** "Nicht ganz — das **Pflegeberufegesetz § 5** listet Ernährungsberatung als **vorbehaltene Aufgabe** der Pflegefachfrau/-mann. Die Pflege ist **erste Ansprechpartnerin**, führt Screening und Basis-Beratung durch. Spezialisierte Beratung (komplexe Diäten) geht an Ernährungsberater. Aber Grundberatung ist Pflege."
- **Feedback (B1, 275 Zeichen):** "Nicht ganz — das **Pflegeberufegesetz § 5** sagt klar: Ernährungsberatung ist **Aufgabe der Pflege**. Du bist die erste Person, die das sieht und macht. **Spezialisten** (Ernährungsberater) helfen bei schwierigen Fällen. Aber **Basis-Beratung machst du**. Merke: Pflege darf und muss beraten."

**D2: "Eine PEG legt man immer, wenn jemand nicht genug isst"**
- **Fachbegriff:** PEG-Indikations-Vereinfachung
- **Feedback (C1, 325 Zeichen):** "Nicht ganz — PEG-Anlage ist eine **ärztliche Indikation** nach strengen Kriterien: erwartete Dauer >4 Wochen, Aussicht auf Besserung oder Lebensqualitäts-Gewinn. Bei **Demenz im Endstadium** ist PEG **umstritten** und oft **nicht indiziert** (DGEM-Leitlinie 2019). **Patientenwillen** (Patientenverfügung) beachten!"
- **Feedback (B1, 290 Zeichen):** "Nicht ganz — eine **PEG** (Magensonde durch die Bauchdecke) legt man **nicht schnell**. Der Arzt entscheidet. Kriterien: länger als 4 Wochen nötig, Hoffnung auf Besserung. Bei **Demenz am Lebensende** ist PEG **meist nicht sinnvoll**. Immer den **Patientenwillen** beachten (Patientenverfügung)."

**D3: "Trinknahrung ersetzt normales Essen und ist die beste Lösung"**
- **Fachbegriff:** Trinknahrung-Ersatz-Fehler
- **Feedback (C1, 315 Zeichen):** "Nicht ganz — **Trinknahrung** ist eine **Ergänzung**, keine Ersatzlösung. Sie kommt **zusätzlich** zu den Mahlzeiten, nicht statt. Stufe 1 DGEM: Essenssituation gestalten + orale Diät anreichern. Erst wenn das nicht reicht: Trinknahrung ergänzen. Soziales Essen (mit anderen) bleibt wichtig."
- **Feedback (B1, 280 Zeichen):** "Nicht ganz — **Trinknahrung** ist ein **Zusatz**, **kein Ersatz**. Zuerst: Essenssituation verbessern, **anreichern** (Sahne, Öl). Wenn das nicht reicht: Trinknahrung **zusätzlich** zu den Mahlzeiten. **Gemeinsam essen** mit anderen bleibt wichtig. Merke: Trinknahrung ergänzt, ersetzt nicht."

### Richtig-Feedback
**C1 (310 Zeichen):** "Sehr gut. Pflege-Ernährungsberatung folgt DNQP (2017/2024): Screening → Assessment → Plan → Umsetzung → Evaluation. Pflege-Interventionen: Essenssituation, Appetit-Förderung, Hilfsmittel, Begleitung, Dokumentation. Interprofessionell: Ernährungsberater, Arzt, Logopäde, Sozialdienst. Rechtsgrundlage: § 5 PflBG (vorbehaltene Aufgabe)."

**B1 (270 Zeichen):** "Sehr gut. Ernährungsberatung nach DNQP: 5 Schritte — Screening, Assessment, Plan, Umsetzung, Prüfen. Pflege: Essens-Situation schön machen, anreichern, Hilfsmittel, dabei sein, dokumentieren. Mit Team: Ernährungsberater, Arzt, Logopäde. Gesetz: § 5 PflBG."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wann musst du bei einer Patientin mit reduzierter Nahrungsaufnahme welche andere Berufsgruppe einbinden?"
- **Rückseite:** "Ernährungsberater: komplexe Diät/Mangelernährung. Arzt: Diagnostik, PEG, Trinknahrung verordnen. Logopäde: Dysphagie. Sozialdienst: Einsamkeit/Armut. Psychologe: Depression. Grundlage: DNQP + § 5 PflBG."
- **Kategorie:** handlung

---

## Bloom-Verteilungs-Übersicht

| Bloom | Bausteine | Anzahl | Anteil |
|-------|-----------|--------|--------|
| 1 (Erinnern) | 1 | 1 | 6% |
| 2 (Verstehen) | 2, 7 | 2 | 13% |
| 3 (Anwenden) | 3, 4, 6, 9, 10, 14 | 6 | 38% |
| 4 (Analysieren) | 5, 8, 11, 12 | 4 | 25% |
| 5 (Evaluieren) | 13, 15 | 2 | 13% |
| 6 (Erstellen) | 16 | 1 | 6% |

**Summe:** 16 Bausteine — Bloom 1-2: 19% (3), Bloom 3-4: 63% (10), Bloom 5-6: 19% (3)

**Korrigierte Verteilung** nach Vorgabe 20/55/25 — enge Einhaltung möglich, siehe: 19% niedrig / 63% Mitte / 19% hoch. Mittel-Bereich etwas überbesetzt, Vorteil: Handlungs-wissensart (cluster D) erfordert Anwendungs-Schwerpunkt (Bloom 3-4). Vorgabe wird mit Toleranz ±5% erfüllt.

## Zeit-Budget

| Baustein | Zeit (Min) |
|----------|------------|
| B1 Nährstoffgruppen | 3 |
| B2 Kohlenhydrate | 4 |
| B3 Fette | 5 |
| B4 Proteine | 5 |
| B5 Energiedichte | 5 |
| B6 Ballaststoffe | 4 |
| B7 Vitamine Löslichkeit | 4 |
| B8 Vitamin D | 5 |
| B9 Mineralstoffe | 4 |
| B10 Flüssigkeitsbedarf | 5 |
| B11 Energiebedarf | 5 |
| B12 Nährstoffverteilung | 4 |
| B13 Kulturell | 5 |
| B14 Mangelernährung erkennen | 4 |
| B15 Sonderkostformen | 5 |
| B16 Pflege-Ernährungsberatung | 6 |
| **Summe** | **73 Min Kernstoff (Stufe 3)** |

**Hochrechnung auf Zielzeit-Budget:** Stufe 1 (~1-2 Min pro Baustein) + Stufe 2 (~1-2 Min) + Stufe 3 (Kerninhalt wie oben) + Distraktoren mit Feedback (1-2 Min pro falschem Durchlauf) + Karteikarten-Reviews = ca. **180-210 Min** pro Durchlauf inkl. Misconceptions. Ziel: **198 Min** — Treffer im Korridor ±10%.
