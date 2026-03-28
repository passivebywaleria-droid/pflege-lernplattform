# MC-Varianten — 18 Quiz-Formate für Abwechslung

**Geschrieben:** 2026-03-25
**Status:** Recherche + Implementierungs-Roadmap

---

## Übersicht

Die 18 Formate sind nach Grundprinzip gruppiert: **Auswahl-Varianten** (klassisch MC), **Bewertungs-Varianten** (Meta-Ebene), **Visuelle Varianten** (UI-Veränderung), **Fallbasierte Varianten** (klinisch), **Gamification-Varianten** (Spielmechanik).

Ziel: Alle ~20 Minuten Wechsel des Fragetyps, um Langeweile zu vermeiden und verschiedene Lernkanäle zu treffen.

---

## Gruppe 1: Auswahl-Varianten (Kern-MC)

### 1. Single-Best-Answer (SBA)

**Beschreibung:** Klassisch: 1 Frage, 4 Optionen, genau 1 richtig. Aber der Unterschied zum simplen MC: ALLE Optionen sind plausibel, eine ist die BESTE. Nicht "welche ist richtig" sondern "welche ist am richtigsten".

**Bloom-Level:** B2-B4 (Verstehen bis Analysieren)

**Wann passt:**
- Prüfungsvorbereitung
- Differenzierung zwischen ähnlichen Konzepten
- Klinische Entscheidungen

**Wann passt NICHT:**
- Absolute Fakten (da gibt es nur richtig/falsch)
- Anfänger die erstmal Grundlagen lernen

**Pflege-Beispiel:**

> "Ein Patient mit RA klagt über Morgensteifigkeit. Welche Maßnahme hat die HÖCHSTE Priorität?"
>
> A) Wärmeanwendung auf die Gelenke (plausibel, aber nicht erste Priorität)
> B) Schmerzerfassung mit VAS-Skala (richtig — erst Assessment, dann Intervention)
> C) Bewegungsübungen anleiten (plausibel, aber erst nach Schmerzerfassung)
> D) Arzt über Verschlechterung informieren (plausibel, aber erst eigenes Assessment)

**UI-Beschreibung:** Wie Standard-MC, aber Header zeigt "Wähle die BESTE Antwort" mit Stern-Icon. Optionen haben dezenten Rang-Indikator nach Lösung (1., 2., 3., 4. Rang wird aufgedeckt).

---

### 2. Multiple-Select (Mehrfachauswahl / "Select All That Apply")

**Beschreibung:** Mehrere Optionen können richtig sein. Der Schüler muss ALLE richtigen finden. Das NCLEX-Standardformat — deutlich schwieriger als Single-Choice, weil Raten fast unmöglich ist.

**Bloom-Level:** B2-B4 (Verstehen bis Analysieren)

**Wann passt:**
- Aufzählungen (Symptome, Maßnahmen, Risikofaktoren)
- Prüfungsvorbereitung NCLEX-Style

**Wann passt NICHT:**
- Anfänger (frustrierend wenn man 4/5 richtig hat aber 0 Punkte bekommt)
- Binäre Entscheidungen

**Pflege-Beispiel:**

> "Welche Symptome gehören zum Krankheitsbild der Rheumatoiden Arthritis? (Mehrere richtig)"
>
> - [x] Symmetrischer Gelenkbefall
> - [x] Morgensteifigkeit > 30 Minuten
> - [ ] Einseitiger Gelenkbefall (Gicht-Symptom)
> - [x] Rheumaknoten
> - [ ] Blitzartiger Schmerzbeginn (Gicht-Symptom)

**UI-Beschreibung:** Checkboxen statt Radio-Buttons. Badge oben: "Mehrere Antworten möglich". Optional: Anzeige wie viele richtig sind ("Wähle 3 von 5"). Teilpunkte möglich (jede richtige +1 XP, jede falsche -1 XP).

---

### 3. Negativ-Frage ("Welche NICHT?")

**Beschreibung:** Umkehrung: Alle Optionen bis auf eine sind richtig. Der Schüler muss den Fehler finden. Trainiert kritisches Denken und Ausschlussverfahren.

**Bloom-Level:** B3-B4 (Anwenden bis Analysieren)

**Wann passt:**
- Kontraindikationen
- Fehler erkennen
- Differenzialdiagnose
- "Was darf man NICHT tun?"

**Wann passt NICHT:**
- Anfänger die noch nicht genug wissen um Fehler zu erkennen
- Themen wo es keine klaren Kontraindikationen gibt

**Pflege-Beispiel:**

> "Welche Maßnahme gehört NICHT zur Dekubitusprophylaxe?"
>
> A) Regelmäßige Lagerungswechsel (richtig — gehört dazu)
> B) Hautinspektion bei jedem Lagerungswechsel (richtig)
> C) Massage der geröteten Hautstelle (FALSCH — verschlimmert!)
> D) Druckverteilende Hilfsmittel einsetzen (richtig)

**UI-Beschreibung:** Frage-Header in Warnfarbe (Orange/Rot). Das Wort "NICHT" ist fett + unterstrichen + farbig hervorgehoben. Nach Lösung: Die falsche Option wird rot markiert mit Warnsymbol, die richtigen grün.

---

### 4. Assertion-Reason (Aussage + Begründung)

**Beschreibung:** Zwei Aussagen: eine Behauptung (Assertion) und eine Begründung (Reason). Der Schüler muss beurteilen: (a) Ist die Behauptung richtig? (b) Ist die Begründung richtig? (c) Ist die Begründung der korrekte Grund FÜR die Behauptung? Testet tiefes Verständnis von Kausalzusammenhängen.

**Bloom-Level:** B4-B5 (Analysieren bis Bewerten)

**Wann passt:**
- Pathophysiologie
- Wirkungsketten
- "Warum tun wir das?" — überall wo Kausalität wichtig ist

**Wann passt NICHT:**
- Einfache Faktenabfrage
- Anfänger
- Themen ohne klare Kausalbeziehung

**Pflege-Beispiel:**

> **Aussage:** "Bei RA sollen Gelenke morgens bewegt werden."
> **Begründung:** "Weil Bewegung die Morgensteifigkeit reduziert."
>
> A) Aussage richtig, Begründung richtig, Begründung erklärt die Aussage ✓
> B) Aussage richtig, Begründung richtig, aber kein kausaler Zusammenhang
> C) Aussage richtig, Begründung falsch
> D) Aussage falsch

**UI-Beschreibung:** Zweigeteilt: Oben die Aussage in einer Karte, unten die Begründung in einer zweiten Karte, verbunden durch ein Pfeil-Symbol ("WEIL"). Darunter 4 Meta-Optionen. Farbcodierung nach Lösung: Grün/Rot für jede Karte einzeln + Pfeil grün wenn Kausalität stimmt.

---

### 5. Extended Matching Question (EMQ)

**Beschreibung:** Ein Thema, ein Pool von 8-12 Antwortmöglichkeiten, mehrere kurze Vignetten. Jede Vignette wird einem Antwort-Item zugeordnet. Nicht alle Items werden gebraucht. Durch die vielen Optionen ist Raten nahezu unmöglich (im Vergleich zu 1/4 bei Standard-MC). In der medizinischen Ausbildung als "goldener Standard" für diagnostisches Denken anerkannt.

**Bloom-Level:** B3-B5 (Anwenden bis Bewerten)

**Wann passt:**
- Differenzialdiagnose
- Medikamenten-Zuordnung
- Symptom-Erkennung
- Prüfungsvorbereitung

**Wann passt NICHT:**
- Einfache Definitionen
- Anfänger
- Themen mit weniger als 4 unterscheidbaren Konzepten

**Pflege-Beispiel:**

> **Thema: Gelenkerkrankungen**
> **Optionen:** A) RA, B) Gicht, C) Arthrose, D) Psoriasis-Arthritis, E) SLE, F) Spondylitis ankylosans, G) Polymyalgia rheumatica, H) Fibromyalgie
>
> **Vignette 1:** "55-jährige Frau, symmetrische Schwellung der Fingergrundgelenke, Morgensteifigkeit 2h, RF positiv" → A) RA
> **Vignette 2:** "62-jähriger Mann, plötzliche Schwellung Großzehe nachts, Harnsäure erhöht" → B) Gicht
> **Vignette 3:** "70-jährige Frau, belastungsabhängiger Knieschmerz, Krepitation, kein Fieber" → C) Arthrose

**UI-Beschreibung:** Oben: horizontaler Chip-Bar mit allen Optionen (scrollbar). Darunter: Vignetten als Karten, jeweils mit einem Dropdown oder Drag-Target für die Zuordnung. Fortschrittsanzeige "2/3 zugeordnet". Feedback pro Vignette einzeln.

---

## Gruppe 2: Bewertungs- und Meta-Varianten

### 6. Confidence-Weighted MC

**Beschreibung:** Standard-MC plus Confidence-Slider: "Wie sicher bist du?" (25%-100%). Richtig + sicher = volle Punkte. Richtig + unsicher = weniger Punkte. Falsch + sicher = MINUS-Punkte (Overconfidence wird bestraft). Trainiert metakognitive Kompetenz — in der Pflege kritisch, weil Overconfidence zu Fehlern führt.

**Bloom-Level:** B1-B4 (alle Levels, die Meta-Ebene kommt obendrauf)

**Wann passt:**
- Jedes Thema wo Selbsteinschätzung wichtig ist
- Einstufungstest (Antwortzeit + Confidence = ehrlicheres Signal)

**Wann passt NICHT:**
- Erste Begegnung mit einem Thema (Schüler kann seine Sicherheit nicht einschätzen wenn alles neu ist)

**Pflege-Beispiel:**

> "Was ist der Normwert für den CRP bei RA?"
> A) < 5 mg/l ✓  B) < 10 mg/l  C) < 20 mg/l  D) < 50 mg/l
>
> Confidence: [████████░░] 80%
>
> → Richtig + 80% sicher = 8 XP
> → Falsch + 80% sicher = -3 XP (Overconfidence-Warnung)

**UI-Beschreibung:** Nach Optionswahl erscheint ein Slider "Wie sicher bist du?" mit Emoji-Skala (unsicher bis sehr sicher). XP-Vorschau zeigt dynamisch was man gewinnen/verlieren könnte. Nach Lösung: Konfetti bei richtig+sicher, sanfter Hinweis bei falsch+sicher ("Du warst dir sehr sicher — lies nochmal nach").

---

### 7. Elimination-MC (50:50 / Lifeline)

**Beschreibung:** Der Schüler kann vor dem Antworten 1-2 Optionen eliminieren lassen (wie bei "Wer wird Millionär"). Kostet XP oder ein Leben. Reduziert von 4 auf 2 Optionen. Trainiert Ausschlussdenken — der Schüler soll ERST selbst überlegen welche Optionen unplausibel sind, DANN die Lifeline nutzen.

**Bloom-Level:** B1-B3 (Erinnern bis Anwenden)

**Wann passt:**
- Schwierige Fragen
- Prüfungssimulation
- Als Hilfe für schwächere Schüler

**Wann passt NICHT:**
- Einfache Fragen (dann ist die Lifeline überflüssig)
- Bloom 5-6 (da ist Elimination zu trivial)

**Pflege-Beispiel:**

> "Welches Medikament ist ein DMARD?"
> A) Ibuprofen  B) Methotrexat ✓  C) Paracetamol  D) Cortison
>
> [🎯 50:50 nutzen? Kostet 2 XP]
>
> → Eliminiert A) und C) → Schüler wählt zwischen B) und D)

**UI-Beschreibung:** Unter den 4 Optionen ein dezenter "Lifeline"-Button mit Icon und XP-Kosten. Bei Nutzung: 2 Optionen werden ausgegraut mit Durchstreich-Animation. Limitiert auf X Lifelines pro Session.

---

### 8. Wager-MC (XP setzen)

**Beschreibung:** Vor der Frage setzt der Schüler XP ein (1-5 XP aus seinem Vorrat). Richtig = doppelt zurück. Falsch = Einsatz verloren. Erzeugt emotionale Investition — der Schüler überlegt gründlicher wenn eigene Punkte auf dem Spiel stehen. Aus der Forschung: "Wager"-Mechaniken erhöhen die Verarbeitungstiefe signifikant.

**Bloom-Level:** B2-B5 (überall wo der Schüler schon Vorwissen hat)

**Wann passt:**
- Wiederholungs-Sessions
- Prüfungsvorbereitung
- Challenge-Modus

**Wann passt NICHT:**
- Erstbegegnung mit Thema (Schüler hat keine Basis zum Wetten)
- Schüler die Angst vor Punktverlust haben

**Pflege-Beispiel:**

> "Du hast 12 XP. Wie viel setzt du auf diese Frage?"
> [1 XP] [2 XP] [3 XP] [5 XP — ALLES!]
>
> → "Welcher Laborwert zeigt RA-spezifisch Antikörper?"
> A) CRP  B) Anti-CCP ✓  C) BSG  D) RF

**UI-Beschreibung:** Vor der Frage: Münz-/Chip-Auswahl-Animation (wie Poker). XP-Balance oben sichtbar. Bei Gewinn: Münzen fliegen rein + Sound. Bei Verlust: Münzen fliegen weg + sanftes Bedauern. Frage ist erst NACH dem Einsatz sichtbar (kein Vorschauen).

---

## Gruppe 3: Visuelle und UI-Varianten

### 9. Image-Based MC (Bild-MC)

**Beschreibung:** Die Optionen sind Bilder statt Text. Oder: Ein Bild ist der Stimulus, Textoptionen die Antwort. Spricht den visuellen Lernkanal an und ist besonders relevant in der Pflege (Wundstadien, Hautveränderungen, anatomische Strukturen, Medikamentenverpackungen).

**Bloom-Level:** B1-B3 (Erinnern bis Anwenden)

**Wann passt:**
- Visuelle Themen (Wundstadien, Hautbefunde, Lagerungspositionen, Hilfsmittel)
- B1-Schüler (weniger Leseaufwand)

**Wann passt NICHT:**
- Abstrakte Konzepte (Ethik, Pflegeprozess)
- Themen ohne visuelle Komponente

**Pflege-Beispiel:**

> "Welches Bild zeigt einen Dekubitus Grad 2?"
> [Bild A: Rötung] [Bild B: Blase ✓] [Bild C: Nekrose] [Bild D: Tiefe Wunde]
>
> ODER umgekehrt: Bild eines Gelenks gezeigt → "Um welche Gelenkveränderung handelt es sich?"

**UI-Beschreibung:** 2x2 Bildgrid statt vertikaler Textliste. Bilder mit abgerundeten Ecken, bei Tap vergrößerbar (Pinch-to-Zoom). Optionen sind klickbare Bildkarten. Bei Lösung: Grüner/Roter Rahmen um die Bilder. Ideal für Mobile-First.

---

### 10. Swipe-MC (Tinder-Style)

**Beschreibung:** Karten werden einzeln angezeigt. Swipe rechts = richtig/ja, Swipe links = falsch/nein. Schnell, intuitiv, macht süchtig. Funktioniert wie TrueFalse, aber kann auch für Kategorisierung genutzt werden ("Gehört zu RA?" → Swipe rechts / "Gehört nicht zu RA?" → Swipe links).

**Bloom-Level:** B1-B2 (Erinnern bis Verstehen)

**Wann passt:**
- Schnelle Wiederholung
- Faktenwissen
- Vokabel-/Glossar-Training
- B1-Schüler (wenig Lesen)

**Wann passt NICHT:**
- Komplexe Fragen
- Bloom 4+
- Themen die Nachdenken erfordern

**Pflege-Beispiel:**

> Karte: "Morgensteifigkeit > 60 Min"
> ← NEIN (kein RA-Symptom) | JA (RA-Symptom) →
>
> Karte: "Einseitiger Befall der Großzehe"
> ← NEIN (Gicht, nicht RA) ✓ | JA →

**UI-Beschreibung:** Vollbild-Karte mit Swipe-Geste. Grüner Schimmer bei Rechts-Swipe, Roter Schimmer bei Links-Swipe. Stapel-Indikator ("4/10"). Undo-Button für letzte Karte. Sofort-Feedback als kurze Einblendung. Geschwindigkeit erzeugt Flow-Zustand.

---

### 11. Grid-MC (Raster-Auswahl)

**Beschreibung:** Statt vertikaler Liste: Optionen in einem 2x3 oder 3x3 Grid, jede Option als kompakte Karte mit Icon + kurzem Text. Fühlt sich anders an als Standard-MC obwohl es dasselbe Prinzip ist. Gut für Mobile weil der Bildschirm besser genutzt wird.

**Bloom-Level:** B1-B3 (Erinnern bis Anwenden)

**Wann passt:**
- Kategorien mit klaren Icons (Medikamentengruppen, Pflegemaßnahmen, Hilfsmittel)
- Auswahl aus vielen kurzen Optionen

**Wann passt NICHT:**
- Lange Antworttexte (passen nicht in Grid-Karten)
- Weniger als 4 Optionen

**Pflege-Beispiel:**

> "Welche Hilfsmittel helfen bei RA im Alltag? (Wähle 3)"
> [🥄 Griffverdickung ✓] [🛁 Badewannenlift ✓] [🦽 Rollstuhl] [🔑 Schlüsseldrehhilfe ✓] [👓 Lupe] [🧦 Anziehhilfe ✓]

**UI-Beschreibung:** 2x3 oder 3x3 Grid mit quadratischen Karten. Jede Karte hat Emoji/Icon oben + kurzen Text unten. Tap = ausgewählt (blauer Rahmen). Multi-Select möglich. Feedback: Korrekte werden grün, falsche rot, fehlende werden gelb markiert.

---

### 12. Drop-Down Cloze MC (Dropdown im Fließtext)

**Beschreibung:** Ein Fließtext mit eingebetteten Dropdowns. Der Schüler wählt an jeder Lücke aus 3-4 Optionen. Ähnlich dem NGN NCLEX "Drop-down Cloze". Testet Verstehen im Kontext — nicht isolierte Fakten, sondern Zusammenhänge im Text.

**Bloom-Level:** B2-B4 (Verstehen bis Analysieren)

**Wann passt:**
- Zusammenhängende Texte (Pflegedokumentation, Pathophysiologie-Erklärungen, Arztbriefe verstehen)

**Wann passt NICHT:**
- Einzelfakten
- Themen die besser als isolierte Fragen funktionieren

**Pflege-Beispiel:**

> "Die Rheumatoide Arthritis ist eine [chronische ▼] Erkrankung, die vor allem die [Synovialis ▼] betrifft. Typisch ist ein [symmetrischer ▼] Gelenkbefall. Ohne Behandlung führt sie zu [Gelenkdestruktion ▼]."
>
> Jedes ▼ hat 3-4 Auswahlmöglichkeiten.

**UI-Beschreibung:** Fließtext mit inline-Dropdown-Elementen (touch-optimiert als Bottom-Sheet-Picker auf Mobile). Richtige Lücken werden grün hinterlegt, falsche rot mit Korrektur. Gesamtscore: "3/4 Lücken richtig".

---

## Gruppe 4: Fallbasierte und klinische Varianten

### 13. Case-Based MC (Vignetten-MC)

**Beschreibung:** Eine klinische Vignette (3-5 Sätze Patientenbeschreibung), dann eine MC-Frage dazu. Der Kern-Fragetyp in NCLEX, AMBOSS und allen medizinischen Prüfungen. Testet Transfer: Kann der Schüler Wissen auf eine konkrete Situation anwenden?

**Bloom-Level:** B3-B5 (Anwenden bis Bewerten)

**Wann passt:**
- Ab Session 2 einer LE, nachdem Grundlagen erklärt wurden
- Prüfungsvorbereitung
- Klinisches Denken

**Wann passt NICHT:**
- Erste Session einer LE (Schüler hat noch keine Grundlage)
- Reine Faktenabfrage

**Pflege-Beispiel:**

> **Vignette:** "Frau Yilmaz, 52 Jahre, kommt zur Frühschicht. Sie klagt über geschwollene und steife Finger. Sie braucht 45 Minuten bis sie die Hände richtig bewegen kann. Seit 3 Monaten nimmt sie Ibuprofen. Labor: CRP 28 mg/l, RF positiv."
>
> "Welche Pflegemaßnahme hat jetzt Priorität?"
> A) Rheumatologen-Termin vereinbaren
> B) Morgensteifigkeit dokumentieren und Schmerz erfassen ✓
> C) Kälteanwendung auf die Finger
> D) Bewegungsübungen sofort anleiten

**UI-Beschreibung:** Oben: Patienten-Karte mit Avatar, Name, Alter, Mini-Anamnese. Darunter optional Vitalzeichen oder Lab-Werte in einer Mini-Tabelle. Dann die MC-Frage. Visuell klar getrennt: Fall vs. Frage.

---

### 14. Situational Judgement MC (Handlungspriorisierung)

**Beschreibung:** Eine Situation wird beschrieben, 4 Handlungsoptionen werden angeboten. Der Schüler muss sie von "am besten" bis "am schlechtesten" ranken ODER die beste UND schlechteste auswählen. Kein eindeutig Richtig/Falsch — sondern Abstufungen von "optimal" bis "gefährlich". Testet klinisches Urteilsvermögen.

**Bloom-Level:** B4-B6 (Analysieren bis Erschaffen)

**Wann passt:**
- Pflegeentscheidungen
- Ethische Dilemmata
- Notfallsituationen
- Prüfungsvorbereitung (mündliche Prüfung)

**Wann passt NICHT:**
- Faktenwissen
- Anfänger
- Themen ohne Handlungsspielraum

**Pflege-Beispiel:**

> "Herr Meier, 78, RA-Patient, stürzt auf dem Flur. Er liegt am Boden, ist ansprechbar, klagt über Hüftschmerzen."
>
> Ranke von BESTE bis SCHLECHTESTE Reaktion:
> 1. Ruhe bewahren, Pat. nicht bewegen, Vitalzeichen prüfen, Arzt rufen (BESTE)
> 2. Pat. beruhigen und vorsichtig auf die Seite drehen
> 3. Sofort Kollegen zur Hilfe rufen und Pat. aufhelfen
> 4. Pat. aufheben und ins Bett bringen (SCHLECHTESTE — Hüftfraktur möglich!)

**UI-Beschreibung:** Drag-and-Drop-Ranking: 4 Karten die vertikal sortiert werden (1=beste, 4=schlechteste). Ähnlich unserem `sorting`-Step, aber mit Bewertungs-Feedback pro Position (nicht nur richtig/falsch).

---

### 15. Matrix-MC (Tabellen-Auswahl)

**Beschreibung:** Eine Tabelle mit Zeilen (z.B. Symptome) und Spalten (z.B. Krankheitsbilder). Der Schüler kreuzt pro Zeile die zutreffende(n) Spalte(n) an. Direkt aus dem NGN NCLEX übernommen. Testet systematisches Denken über mehrere Dimensionen gleichzeitig.

**Bloom-Level:** B3-B5 (Anwenden bis Bewerten)

**Wann passt:**
- Vergleiche zwischen Krankheitsbildern
- Medikamenten-Vergleiche
- Differenzialdiagnose

**Wann passt NICHT:**
- Einzelnes Thema ohne Vergleich
- Weniger als 3 Vergleichsdimensionen
- Mobile-Only (Tabellen sind auf kleinen Screens schwierig)

**Pflege-Beispiel:**

| | RA | Gicht | Arthrose |
|---|---|---|---|
| Symmetrischer Befall | [x] | [ ] | [ ] |
| Morgensteifigkeit >30m | [x] | [ ] | [ ] |
| Harnsäure erhöht | [ ] | [x] | [ ] |
| Belastungsschmerz | [ ] | [ ] | [x] |
| Akuter Nachtschmerz | [ ] | [x] | [ ] |

**UI-Beschreibung:** Scrollbare Tabelle, touch-optimierte Checkboxen (groß genug für Finger). Auf Mobile: horizontal scrollbar mit fixierter erster Spalte. Farbcodiertes Feedback pro Zelle. Gesamtscore: "8/10 richtig".

---

## Gruppe 5: Gamification-Varianten

### 16. Timer-MC mit Streak-Bonus

**Beschreibung:** MC-Fragen mit Countdown (10-15 Sekunden). Schneller richtig = mehr XP. Richtige Serie (Streak) gibt Multiplikator: 3 richtig = 2x XP, 5 richtig = 3x XP. Bereits teilweise implementiert im `timer`-Step, aber hier als eigenständiger Modus mit Streak-Mechanik.

**Bloom-Level:** B1-B2 (Erinnern bis Verstehen — wer nachdenken muss hat keine Zeit)

**Wann passt:**
- Wiederholung
- Faktenwissen festigen
- Challenge-Modus
- Wettbewerb

**Wann passt NICHT:**
- Neue Themen
- Bloom 3+ (Zeitdruck verhindert tiefes Denken)
- B1-Schüler (Lesezeit!)

**Pflege-Beispiel:**

> [⏱️ 12 Sek] "Fachbegriff für Gelenkentzündung?"
> A) Arthrose  B) Arthritis ✓  C) Arthroskopie  D) Arthralgie
>
> → 3 Sekunden → 5 XP + Streak x2 = 10 XP!

**UI-Beschreibung:** Prominenter Countdown-Ring oben (wird rot unter 5 Sek). Streak-Counter oben rechts mit Flammen-Animation. XP-Multiplikator blinkt bei Steigerung. Schnelle Transition zwischen Fragen (keine lange Feedback-Phase). Soundeffekte bei Streak-Aufbau.

---

### 17. Duell-MC (Gegen die KI / Gegen Peers)

**Beschreibung:** Der Schüler "spielt" gegen einen KI-Gegner oder einen gespeicherten Peer-Score. Beide beantworten dieselben 5 Fragen. Wer mehr richtig hat, gewinnt. Erzeugt kompetitiven Anreiz ohne echte Multiplayer-Infrastruktur.

**Bloom-Level:** B1-B3 (Erinnern bis Anwenden)

**Wann passt:**
- Wiederholung
- Motivation
- Prüfungsvorbereitung (unter Druck performen)

**Wann passt NICHT:**
- Neue Themen
- Kooperatives Lernen gewünscht
- Schüler die Wettbewerb stresst

**Pflege-Beispiel:**

> "Duell: 5 Fragen zum Thema RA — Schlage Dr. KI!"
>
> Frage 1: Du ✓ | KI ✓ → Gleichstand
> Frage 2: Du ✓ | KI ✗ → Du führst!
> Frage 3: Du ✗ | KI ✓ → Gleichstand
> ...
> Ergebnis: Du 4:3 KI → "Gewonnen! +15 Bonus-XP"

**UI-Beschreibung:** Split-Screen: Links Schüler-Avatar + Score, Rechts KI-Avatar + Score. Nach jeder Frage: kurze Animation wer den Punkt bekommt. Abschluss: Siegerehrung mit Podium-Animation. KI-Schwierigkeit adaptiv (passt sich an Schüler-Level an, gewinnt ~40% der Zeit).

---

### 18. Mystery-MC (Versteckte Frage, schrittweise Enthüllung)

**Beschreibung:** Die Frage wird schrittweise enthüllt. Erst kommt ein Hinweis, dann ein zweiter, dann ein dritter. Je früher der Schüler richtig antwortet, desto mehr XP. Trainiert diagnostisches Denken: Wie viel Information brauche ich für eine Entscheidung?

**Bloom-Level:** B3-B5 (Anwenden bis Bewerten)

**Wann passt:**
- Diagnostik
- Symptom-Erkennung
- Klinisches Reasoning
- Session 3 einer LE

**Wann passt NICHT:**
- Faktenabfrage
- Anfänger
- Themen ohne schrittweise Erkennbarkeit

**Pflege-Beispiel:**

> **Hinweis 1:** "Patientin, 48 Jahre, symmetrische Gelenkschmerzen" → [Jetzt antworten: 10 XP]
> **Hinweis 2:** "Morgensteifigkeit 90 Minuten, RF positiv" → [Jetzt antworten: 7 XP]
> **Hinweis 3:** "Schwanenhalsdeformität, Ulnardeviation" → [Jetzt antworten: 4 XP]
>
> Optionen: A) RA ✓  B) Gicht  C) SLE  D) Arthrose

**UI-Beschreibung:** Hinweise erscheinen einzeln mit Einblend-Animation (wie Kartenaufdecken). XP-Anzeige sinkt sichtbar mit jedem Hinweis. "Antworten"-Button pulsiert. Nach Lösung: Markierung bei welchem Hinweis ein Experte geantwortet hätte. Erzeugt Spannung und belohnt Mustererkennung.

---

## Zusammenfassung: Einsatz nach Bloom-Level und Session

| # | Variante | Bloom | Session | Erlebnis-Modus |
|---|----------|-------|---------|---|
| 1 | Single-Best-Answer | B2-B4 | S2, S3 | Challenge |
| 2 | Multiple-Select | B2-B4 | S2, S3 | Challenge |
| 3 | Negativ-Frage | B3-B4 | S2, S3 | Challenge |
| 4 | Assertion-Reason | B4-B5 | S3 | Challenge, Schreibtisch |
| 5 | Extended Matching (EMQ) | B3-B5 | S3 | Puzzle |
| 6 | Confidence-Weighted | B1-B4 | S1, S2, S3 | Challenge, Checkpoint |
| 7 | Elimination (50:50) | B1-B3 | S1, S2 | Challenge |
| 8 | Wager-MC | B2-B5 | S2, S3 | Challenge |
| 9 | Image-Based | B1-B3 | S1, S2 | Entdecker, Challenge |
| 10 | Swipe-MC | B1-B2 | S1, S2 | Challenge |
| 11 | Grid-MC | B1-B3 | S1, S2 | Challenge, Puzzle |
| 12 | Drop-Down Cloze | B2-B4 | S2, S3 | Schreibtisch |
| 13 | Case-Based (Vignette) | B3-B5 | S2, S3 | Story, Praxis-Sim |
| 14 | Situational Judgement | B4-B6 | S3 | Praxis-Sim |
| 15 | Matrix-MC | B3-B5 | S2, S3 | Puzzle, Sortierstation |
| 16 | Timer + Streak | B1-B2 | S1, S2 | Challenge |
| 17 | Duell-MC | B1-B3 | S2, S3 | Challenge |
| 18 | Mystery-MC | B3-B5 | S3 | Story, Entdecker |

---

## Implementierungs-Roadmap

### Phase 1: Quick Wins (wenig neue UI, nutzt bestehende Renderer)

- **Nr. 2 Multiple-Select** — nur `multiSelect: true` Flag, Checkbox-UI
- **Nr. 3 Negativ-Frage** — nur visuelles Styling der Frage (Warnfarbe)
- **Nr. 6 Confidence-Weighted** — Slider unter bestehendem MC
- **Nr. 9 Image-Based** — `imageUrl` auf Option-Level statt nur Step-Level
- **Nr. 13 Case-Based** — Kombination aus bestehendem Text-Step + MC

### Phase 2: Neue UI-Komponenten

- **Nr. 10 Swipe-MC** — Swipe-Gesture-Handler (Framer Motion)
- **Nr. 11 Grid-MC** — Grid-Layout statt vertikaler Liste
- **Nr. 16 Timer + Streak** — Timer existiert, Streak-Multiplikator fehlt
- **Nr. 8 Wager-MC** — Einsatz-UI vor der Frage

### Phase 3: Komplexe Formate

- **Nr. 4 Assertion-Reason** — Neue Zwei-Karten-UI
- **Nr. 5 Extended Matching** — Pool + Vignetten-UI
- **Nr. 14 Situational Judgement** — Ranking-UI (ähnlich Sorting)
- **Nr. 15 Matrix-MC** — Tabellen-UI (Mobile-Challenge)
- **Nr. 18 Mystery-MC** — Schrittweise Enthüllung
- **Nr. 17 Duell-MC** — KI-Gegner-Logik
- **Nr. 7 Elimination** — Lifeline-System + XP-Kosten
- **Nr. 12 Drop-Down Cloze** — Inline-Dropdown-UI

---

## Quellen

- [Comparing Multiple-Answer and Single-Answer MCQs (2024)](https://www.tandfonline.com/doi/full/10.1080/10528008.2024.2417106)
- [Multiple-Choice Testing Best Practices — ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2211368118301426)
- [Yale: Designing Assessment Questions](https://poorvucenter.yale.edu/teaching/teaching-resource-library/designing-assessment-questions)
- [NCLEX Question Types 2026 Guide](https://goodnurse.com/article/17/different-types-of-questions-on-the-nclex-exam-2026-guide)
- [Kaplan: NCLEX-RN Question Types](https://www.kaptest.com/study/nclex/nclex-rn-question-types/)
- [6 New NGN Question Types — ExamSoft](https://examsoft.com/resources/6-new-question-types-nclex/)
- [Next Gen NCLEX: Extended Drag and Drop](https://nurse.plus/ngn-drag-and-drop/)
- [EMQ Guidelines — PMC/NIH](https://pmc.ncbi.nlm.nih.gov/articles/PMC3410060/)
- [EMQ vs MCQ vs SCT Comparison — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC10977632/)
- [Extended Matching Questions — Tandfonline](https://www.tandfonline.com/doi/full/10.3108/beej.2003.01010002)
- [Gamification in EdTech — Duolingo, Khan, Kahoot](https://prodwrks.com/gamification-in-edtech-lessons-from-duolingo-khan-academy-ixl-and-kahoot/)
- [Top 10 Gamification Apps — Yu-kai Chou](https://yukaichou.com/gamification-examples/10-best-gamification-education-apps/)
- [AMBOSS Features](https://www.amboss.com/us/features)
- [AMBOSS AI Mode Learning](https://www.amboss.com/us/ai-mode-learning)
- [Situational Judgement Tests — Wikipedia](https://en.wikipedia.org/wiki/Situational_judgement_test)
- [SJTs in Healthcare — Tripod Partners](https://www.tripodpartners.com/career-advice/interview-advice/understanding-situational-judgement-tests-in-healthcare-recruitment/)
- [Bloom's Taxonomy — Simply Psychology](https://www.simplypsychology.org/blooms-taxonomy.html)
- [Bloom's Taxonomy Question Stems — Top Hat](https://tophat.com/blog/blooms-taxonomy-question-stems/)
- [Gamified E-Quizzes — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC7987514/)
- [Quiz Gamification in Mobile Apps — Plotline](https://www.plotline.so/blog/quiz-for-gamification-in-mobile-apps)
- [Mobbin: Quiz App UI Design Examples](https://mobbin.com/explore/mobile/screens/quiz)
