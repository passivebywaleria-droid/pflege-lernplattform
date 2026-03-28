# Text/Erklär-Varianten — 22 Wege, Wissen zu vermitteln

**Datum:** 2026-03-25
**Status:** Spezifikation (Research + Implementierungsplan)

---

## Kontext

Die Lernplattform hat aktuell einen Standard-Text-Step (`stepType: "text"`) mit:
- Fließtext mit Absätzen/Listen
- Carousel-Modus (Swipe-Karten)
- "Wusstest du?"-Collapsible
- Fallbezug-Box
- Glossar-Chips
- Bilder mit Bildunterschrift
- TTS-Button

Das ist ein solider Standard. Aber VISION.md fordert: **"Nicht nur lesen — nicht einfach Texte scrollen wie ein digitales Buch."**

Diese Spezifikation dokumentiert 22 verschiedene Content-Delivery-Formate, um Wissen jenseits von reinem Text zu vermitteln.

---

## Forschungsbasis: Mayers 12 Multimedia-Prinzipien

Bevor die Formate: Die wichtigsten Prinzipien aus der empirischen Forschung (Mayer 2014+):

| Prinzip | Bedeutung für uns |
|---------|-------------------|
| **Multimedia** | Worte + Bilder > nur Worte. Jeder Erklär-Step braucht visuelle Komponente |
| **Segmentierung** | Komplexe Inhalte in kleine Häppchen aufteilen. Nicht 1 langer Text, sondern 5 Karten |
| **Signaling** | Wichtiges hervorheben (fett, Farbe, Icons). Nicht alles gleich formatieren |
| **Redundanz** | Nicht gleichzeitig Text + Audio + Bild mit Text. Entweder Audio+Bild ODER Text+Bild |
| **Modalität** | Bei Animation: lieber Audio-Erklärung als Text-Erklärung (Dual Coding) |
| **Kohärenz** | Kein Dekor-Müll. Jedes Bild muss dem Verständnis dienen |
| **Personalisierung** | "Du" statt "Man". Konversationston. Genau das was unsere Sandwich-Methode macht |
| **Contiguity** | Erklärung direkt neben dem Bild, nicht darunter in separatem Absatz |
| **Pacing** | Schueler bestimmt Geschwindigkeit (nicht Auto-Play Videos). Agency wichtig |
| **Pre-Training** | Fachbegriffe VOR komplexer Erklärung einführen |
| **Modality** | Text + visuelle Erkl. besser als Text + Sprache für komplexe Inhalte |
| **Individual Differences** | Fortgeschrittene brauchen weniger Redundanz (springen direkt zu Details) |

**Quellen:** Digital Learning Institute, Water Bear Learning, Edutopia

---

## Die 22 Formate — vollständig

### FORMAT 1: Annotiertes Bild (Hotspot-Erklärung)

**Beschreibung:** Ein Bild (Anatomie, Körperregionen, Medizinprodukt) mit anklickbaren Hotspots. Tippen auf einen Punkt öffnet eine Erklärung als Overlay.

**Wann passt es:**
- Anatomie, Körperregionen, Druckstellen (Dekubitus-Prädilektionsstellen)
- Medizinprodukte erklären (Infusionspumpe, Rollator-Teile)
- Wundbeurteilung: "Was siehst du hier?"
- Bewegungsbereich-Einschränkungen

**Wann NICHT:**
- Abstrakte Konzepte ohne visuelle Darstellung (Pflegeethik, Rechtsgrundlagen)
- Wenn kein gutes Bild vorhanden ist

**Pflege-Beispiel:** Körperschema mit 7 Dekubitus-Prädilektionsstellen. Schüler tippt auf Sakralregion → Overlay: "Sakralregion — Häufigste Stelle (40%). Entsteht bei Rückenlage durch Auflagedruck und Scherung."

**App-UI:** Vollbild-Bild mit pulsierenden blauen Punkten. Tippen öffnet Bottom-Sheet mit Titel + kurzer Text + "Nächster Punkt"-Button. Fortschrittsanzeige: "3/7 Punkte entdeckt".

---

### FORMAT 2: Vergleichstabelle (Side-by-Side)

**Beschreibung:** Zwei oder drei Dinge werden in einer strukturierten Tabelle gegenübergestellt. Kategorien links, Ausprägungen rechts.

**Wann passt es:**
- Krankheitsbilder abgrenzen (RA vs. Arthrose, Dekubitus Grad 1 vs. 2 vs. 3 vs. 4)
- Medikamente vergleichen (NSAR vs. Biologika)
- Pflegemaßnahmen: konservativ vs. operativ
- Unterschiede zwischen Ursachen (Infektion vs. Autoimmun)

**Wann NICHT:**
- Nur ein einziges Thema (kein Vergleich möglich)
- Zu viele Spalten (>3 werden mobil unleserlich)

**Pflege-Beispiel:**

| Merkmal | Rheumatoide Arthritis | Arthrose |
|--------|---|---|
| Ursache | Autoimmun | Verschleiß |
| Gelenke betroffener | Symmetrisch, kleine Gelenke (Finger) | Große Gelenke, einseitig |
| Morgensteifigkeit | >60 Min | <30 Min |
| Entzündungszeichen | Ja (Schwellung, Wärme, Rötung) | Gering oder keine |

**App-UI:** Horizontal scrollbare Karte mit sticky erster Spalte. Farbcodiert: Spalte A blau, Spalte B orange. Optional: Zeile antippen → Detailerklärung klappt auf.

---

### FORMAT 3: Timeline / Verlauf (Chronologisch)

**Beschreibung:** Ereignisse oder Phasen werden entlang einer vertikalen Zeitachse dargestellt. Jeder Punkt hat Überschrift + kurze Erklärung.

**Wann passt es:**
- Krankheitsverlauf (RA: Frühphase → Etabliert → Spätphase)
- Diagnostik-Ablauf (Anamnese → Labor → Bildgebung → Diagnose)
- Historische Entwicklung (Geschichte der Pflege)
- Tagesablauf eines Patienten

**Wann NICHT:**
- Nicht-sequenzielle Inhalte (Symptome, die unabhängig voneinander auftreten)
- Wenn Reihenfolge irrelevant ist

**Pflege-Beispiel:** RA-Verlauf:
- **Erscheinungsjahr 1:** Morgensteifigkeit, Müdigkeit
- **Jahr 2-5:** Gelenkzerstörung beginnt
- **Jahr 10+:** Deformitäten, OP möglich

Jeder Punkt zeigt Symptome + Pflegerelevanz.

**App-UI:** Vertikale Linie links, Punkte als Kreise. Scrollen zeigt nacheinander jeden Abschnitt. Aktiver Punkt vergrößert sich. Abschnitte animieren rein (Scrollytelling-Effekt). Maximal 5-7 Punkte pro Timeline.

---

### FORMAT 4: Flipcard (Karteikarten-Stil)

**Beschreibung:** Karte mit Fachbegriff vorne, Erklärung auf der Rückseite. Schüler tippt zum Umdrehen. KEIN Quiz — reine Wissensvermittlung.

**Wann passt es:**
- Fachbegriffe einführen (Glossar als interaktives Element)
- Definitionen lernen (Dekubitus, Kontraktur, Spastik)
- Abkürzungen erklären (CRP, BSG, RF, ACPA)
- Schnelles Wiederholen am Ende einer Session

**Wann NICHT:**
- Komplexe Zusammenhänge (brauchen mehr als Vorder-/Rückseite)
- Prozesse, Abläufe (zu linear für Karten)

**Pflege-Beispiel:**
- **Vorderseite:** "CRP"
- **Rückseite:** "C-reaktives Protein. Entzündungsmarker im Blut. Normwert: <5 mg/l. Bei RA oft stark erhöht."

**App-UI:** Karte mit 3D-Flip-Animation (framer-motion). Swipe-Deck: Karte nach links = nächste, nach rechts = zurück. Unten: "4/8 Begriffe". Optional: "Kenne ich schon"-Swipe für spaced repetition.

---

### FORMAT 5: Akkordeon (Klappbare Abschnitte)

**Beschreibung:** Überschriften sind sichtbar, Inhalt klappt auf Tippen auf. Schüler entscheidet selbst, was er lesen will. Progressive Disclosure.

**Wann passt es:**
- Übersichts-Steps mit mehreren Unterthemen ("5 Therapiesäulen bei RA")
- Differenzierung: Starke Schüler lesen alles, schwache nur das Wichtigste
- Nachschlagewerk-Charakter innerhalb einer Session
- Inhalte die nicht linear gelesen werden müssen

**Wann NICHT:**
- Wenn ALLE Abschnitte gelesen werden MÜSSEN (dann lieber Carousel)
- Bei nur 1-2 kurzen Absätzen (Overhead zu groß)

**Pflege-Beispiel:** "Therapie der RA — 5 Säulen":
1. Medikamente → Aufklappen: DMARDs, Biologika, NSAR
2. Physiotherapie → Aufklappen: Bewegung, Wärme/Kälte
3. Ergotherapie → Aufklappen: Gelenkschutz, Hilfsmittel
4. Psychosoziale Unterstützung
5. Operative Therapie

**App-UI:** Jede Überschrift als Leiste mit Chevron-Icon. Aufklappen zeigt Content mit sanfter Animation. Fortschrittsindikator: Häkchen erscheint wenn Abschnitt geöffnet und gelesen wurde. "Alle gelesen"-Check bevor "Weiter" aktiv wird.

---

### FORMAT 6: Chat-Protokoll / Dialog-Simulation

**Beschreibung:** Wissen wird als simuliertes Gespräch zwischen zwei Personen vermittelt. Nachrichten erscheinen nacheinander wie in einem Messenger.

**Wann passt es:**
- Pflege-Arzt-Kommunikation (SBAR-Schema demonstrieren)
- Patientengespräch (Anamnese, Aufklärung, Beratung)
- Übergabe-Gespräche (Dienstübergabe Früh/Spät)
- Wenn Fachsprache im Kontext gezeigt werden soll

**Wann NICHT:**
- Rein faktenbasierte Inhalte (Pathophysiologie, Anatomie)
- Wenn es keinen natürlichen Dialog gibt

**Pflege-Beispiel:**
- **Pflegerin Sarah:** "Guten Morgen Herr Mueller. Wie haben Sie geschlafen?"
- **Patient Mueller:** "Schlecht. Meine Hände sind wieder so steif."
- **Sarah:** "Wie lange dauert die Steifigkeit morgens?"
- **Mueller:** "Bestimmt eine Stunde."
- **[Info-Bubble]:** "Morgensteifigkeit >60 Min = typisch für RA. Bei Arthrose meist <30 Min."

**App-UI:** Chat-Bubbles links/rechts wie WhatsApp. Blaue Bubble = Pflegekraft, graue = Patient. Info-Bubbles dazwischen mit Glühbirnen-Icon. Nachrichten erscheinen mit Tipp-Animation (3 Punkte) und dann Text. "Weiter"-Button zeigt nächsten Message-Block.

---

### FORMAT 7: Reveal-on-Tap (Aufdecken)

**Beschreibung:** Inhalte sind zunächst verdeckt (Blur, Abdeckung, oder Fragezeichen). Schüler tippt auf einen Bereich, um ihn aufzudecken. Erzeugt Neugier und aktives Engagement.

**Wann passt es:**
- "Was glaubst du?" → Antwort aufdecken (Brilliant-Prinzip: Problem vor Erklärung)
- Schrittweises Aufdecken eines Schemas (z.B. Entzündungskaskade)
- Überraschende Fakten ("Wie viele Menschen in DE haben RA?" → Tippen → "800.000")

**Wann NICHT:**
- Wenn die Information sofort sichtbar sein muss (Warnhinweise, Notfallmaßnahmen)
- Zu viele versteckte Elemente (>6 wird mühsam)

**Pflege-Beispiel:** "Was passiert im Gelenk bei RA?" — 4 Felder verdeckt:
1. [Aufdecken] → "Immunsystem greift Gelenkinnenhaut an"
2. [Aufdecken] → "Entzündung entsteht (Synovitis)"
3. [Aufdecken] → "Pannus-Gewebe wächst"
4. [Aufdecken] → "Knorpel und Knochen werden zerstört"

**App-UI:** Karten mit Blur-Effekt und Fingerabdruck-Icon. Tippen entfernt Blur mit Wisch-Animation. Nummer zeigt empfohlene Reihenfolge. Nach Aufdecken aller Karten: Zusammenfassungssatz unten.

---

### FORMAT 8: Infografik-Karte

**Beschreibung:** Eine einzelne, visuell aufbereitete Karte mit Key Facts. Kombination aus Icons, Zahlen und kurzen Texten. Wie ein Instagram-Infografik-Post.

**Wann passt es:**
- Statistiken und Zahlen (Prävalenz, Inzidenz, Altersverteilung)
- Key Facts zu einem Thema als Zusammenfassung
- Einstieg in ein neues Thema ("RA auf einen Blick")

**Wann NICHT:**
- Detaillierte Erklärungen (zu wenig Platz)
- Wenn Zusammenhänge wichtiger sind als Einzelfakten

**Pflege-Beispiel:** "RA auf einen Blick":
- Icon Mensch: "800.000 Betroffene in DE"
- Icon Geschlecht: "3x häufiger bei Frauen"
- Icon Uhr: "Morgensteifigkeit >60 Min"
- Icon Gelenk: "Symmetrischer Befall"
- Icon Kalender: "Gipfel: 50-70 Jahre"

**App-UI:** Farbige Karte mit 4-6 Icon+Text-Zeilen. Großer Titel oben. Subtiler Gradient-Hintergrund. Kein Scrollen nötig — alles auf einen Blick. Optional: Zahlen animieren hoch (Counter-Animation).

---

### FORMAT 9: Scrollytelling (Scroll-getriebene Erklärung)

**Beschreibung:** Beim Scrollen erscheinen nacheinander Texte, Bilder und Animationen. Der Scroll-Fortschritt steuert die Narration. Wie ein interaktiver Artikel.

**Wann passt es:**
- Komplexe Prozesse schrittweise erklären (Entzündungskaskade, Wundheilung)
- Emotionale Geschichten (Patientenperspektive)
- Wenn Reihenfolge wichtig ist und der Schüler das Tempo bestimmen soll

**Wann NICHT:**
- Kurze, einfache Fakten (Overhead zu groß)
- Inhalte die nicht-linear konsumiert werden sollen
- Performance-kritisch auf schwachen Geräten

**Pflege-Beispiel:** "Der Weg zur Diagnose" — Schüler scrollt:
1. (Bild: Patient im Wartezimmer) "Herr Mueller kommt zum Arzt..."
2. (Bild wird Hände-Nahaufnahme) "...weil seine Finger morgens steif sind"
3. (Bild wird Blutröhrchen) "Blutuntersuchung: CRP erhöht, RF positiv"
4. (Bild wird Röntgen) "Röntgen: Erosionen an MCP-Gelenken"
5. (Text fade-in) "Diagnose: Rheumatoide Arthritis"

**App-UI:** Vollbild-Abschnitte die beim Scrollen ineinander übergehen. Bild bleibt fixiert (sticky), Text scrollt darüber. Scroll-Fortschrittsbalken am Rand. Funktioniert mit framer-motion `useScroll`.

---

### FORMAT 10: Mnemonic-Karte (Eselsbrücke)

**Beschreibung:** Ein Merksatz, Akronym oder Bild-Assoziation, die einen komplexen Sachverhalt einprägsam zusammenfasst. Visuell gestaltet für maximale Erinnerung.

**Wann passt es:**
- Aufzählungen merken (z.B. SBAR-Schema für Übergabe)
- Reihenfolgen merken (ABCDE-Schema, Therapie-Eskalation)
- Kriterien auswendig lernen (ACR/EULAR-Kriterien)

**Wann NICHT:**
- Verständnis-basierte Inhalte (Eselsbrücken fördern Auswendiglernen, nicht Verständnis)
- Wenn es keine gute Eselsbrücke gibt (erzwungene Mnemonics sind schlechter als keine)

**Pflege-Beispiel:** "SIGEL für Entzündungszeichen":
- **S** = Schmerz
- **I** = Immobilität (Funktionseinschränkung)
- **G** = Gelenkerguss
- **E** = Erythem (Rötung)
- **L** = Lokale Überwärmung

Visuell: Jeder Buchstabe groß und farbig, darunter ein kleines Icon (Blitz für Schmerz, Schloss für Immobilität etc.)

**App-UI:** Zentrierte Karte mit großem Akronym. Jeden Buchstaben antippen zeigt die Erklärung. Hintergrund in markantem Farbton (gelb/orange = "merken"). Speichern-Button: Karte wird in persönliche Karteikarten-Sammlung übernommen.

---

### FORMAT 11: Analogie-Karte (Alltags-Vergleich)

**Beschreibung:** Ein komplexes medizinisches Konzept wird durch einen Vergleich aus dem Alltag erklär. Links das Bekannte, rechts das Neue.

**Wann passt es:**
- Abstrakte Konzepte greifbar machen (Immunsystem = Polizei, Autoimmun = Polizei greift eigene Bürger an)
- B1-Schüler die Fachsprache noch nicht verstehen
- Pathophysiologie anschaulich erklären

**Wann NICHT:**
- Wenn die Analogie nicht präzise genug ist (falsche Vereinfachung)
- Fortgeschrittene Schüler die Fachsprache brauchen (Analogien können infantil wirken)
- Prüfungsrelevante Definitionen (Analogie ist kein Fachbegriff)

**Pflege-Beispiel:**
- **Links (Alltag):** "Stell dir vor, die Polizei verwechselt friedliche Bürger mit Verbrechern und greift sie an."
- **Rechts (Medizin):** "Bei RA verwechselt das Immunsystem gesunde Gelenkinnenhaut mit Feinden und greift sie an."
- **Unten:** "Beide Fälle: Die Schutzfunktion richtet sich gegen den eigenen Körper."

**App-UI:** Split-Screen-Karte. Links Alltags-Icon + Text (warm, orange), rechts Medizin-Icon + Text (blau, sachlich). Verbindungslinie in der Mitte mit "=" Zeichen. Unten: Fachbegriff in Box: "Das nennt man: Autoimmunerkrankung".

---

### FORMAT 12: Checkliste

**Beschreibung:** Eine Liste von Punkten mit Checkboxen. Schüler hakt ab was er verstanden hat oder was in einer Situation zu tun ist. Vermittelt Handlungswissen.

**Wann passt es:**
- Pflegemaßnahmen bei einem Krankheitsbild
- Assessments durchführen (Was muss ich prüfen?)
- Vorbereitung auf Prüfungssituationen
- Übergabe-Checkliste, Aufnahme-Checkliste

**Wann NICHT:**
- Erklärung von Zusammenhängen (Checkliste ist "Was", nicht "Warum")
- Theoretische Grundlagen (zu flach)

**Pflege-Beispiel:** "Pflege bei RA — Morgenroutine":
- [ ] Morgensteifigkeit einschätzen (Dauer, Intensität)
- [ ] Wärme-Anwendung vor Mobilisation
- [ ] Gelenkschonende Bewegungsübungen
- [ ] Hilfsmittel bereitstellen (Griffverstärker, angepasstes Besteck)
- [ ] Schmerzmedikation nach Anordnung, 30 Min VOR Aktivität
- [ ] Dokumentation in der Pflegeplanung

**App-UI:** Liste mit Checkbox-Animation (Häkchen + grüner Ring). Jeder Punkt antippbar → klappt Kurzerklärung auf. Fortschritt: "4/6 verstanden". Am Ende: Zusammenfassung "Diese 6 Punkte sind deine tägliche Routine."

---

### FORMAT 13: Flowchart / Entscheidungsbaum (Erklärung)

**Beschreibung:** Ein visueller Entscheidungsbaum der zeigt: "Wenn X, dann Y. Wenn Z, dann W." Nicht als Quiz, sondern als Erklärung eines Algorithmus.

**Wann passt es:**
- Diagnostik-Algorithmen (Wann Röntgen? Wann MRT?)
- Therapie-Eskalation (Stufe 1 → Stufe 2 → Stufe 3)
- Pflegerische Entscheidungen (Wundversorgung: Welches Material bei welchem Grad?)
- Notfall-Algorithmen

**Wann NICHT:**
- Einfache lineare Abläufe (da reicht eine Timeline)
- Zu komplexe Bäume (>4 Ebenen werden mobil unleserlich)

**Pflege-Beispiel:** "Medikamentöse RA-Therapie":
- Start: "RA diagnostiziert"
- → "MTX verträglich?"
- → Ja: "MTX + Folsäure"
- → "Wirkung nach 3 Monaten?"
- → Nein: "Biologikum hinzufügen"

**App-UI:** Horizontal/vertikal scrollbarer Baum. Aktiver Knoten hervorgehoben. Tippen auf Knoten zeigt Erklärung. Pinch-to-Zoom für Übersicht. Farbcodiert: Grün = Standardweg, Orange = Eskalation, Rot = Notfall. Maximal 3 Entscheidungsebenen.

---

### FORMAT 14: Before/After (Vorher/Nachher)

**Beschreibung:** Zwei Zustände werden gegenübergestellt: VOR einer Maßnahme und NACH einer Maßnahme. Oder: Gesund vs. Krank.

**Wann passt es:**
- Gelenkveränderungen bei RA (gesundes Gelenk vs. RA-Gelenk)
- Wirkung von Therapie (vor Behandlung vs. nach 6 Monaten)
- Pflegebericht: schlecht formuliert vs. gut formuliert
- Lagerung: falsch vs. richtig

**Wann NICHT:**
- Wenn es keinen klaren Vorher/Nachher-Kontrast gibt
- Bei Prozessen (da besser Timeline)

**Pflege-Beispiel:**
- **Vorher:** Röntgenbild Hand mit intakten Gelenken. Text: "Gesundes MCP-Gelenk. Glatter Knorpel, kein Erguss."
- **Nachher:** Röntgenbild Hand mit Erosionen. Text: "RA nach 5 Jahren ohne Therapie. Erosionen, Gelenkspaltverschmälerung, Fehlstellung."

**App-UI:** Slider in der Mitte des Bildes (wie bei Fotobearbeitungs-Apps). Schüler zieht Slider nach links/rechts um zwischen Vorher und Nachher zu wechseln. Oder: Zwei Karten nebeneinander mit rotem/grünem Rahmen.

---

### FORMAT 15: Patienten-Steckbrief (Persona-Karte)

**Beschreibung:** Eine strukturierte Karte die einen Patienten als Person vorstellt: Name, Alter, Diagnose, Lebensumstände, aktuelle Probleme. Gibt dem Leitfall ein Gesicht.

**Wann passt es:**
- Einstieg in jede LE (Leitfall-Patient vorstellen)
- Wenn empathisches Verständnis gefördert werden soll
- Case Studies und Fallbeispiele

**Wann NICHT:**
- Rein theoretische Inhalte ohne Patientenbezug
- Wenn Anonymisierung wichtig ist (echte Fälle)

**Pflege-Beispiel:**
```
MEHMET YILMAZ (62)
Beruf: Ehem. Bauarbeiter, jetzt Frührente
Diagnose: RA seit 8 Jahren, DAS28: 4.2
Lebt mit: Ehefrau (pflegt ihn teilweise)
Sprache: Deutsch B1, Türkisch Muttersprache
Aktuell: Starke Morgensteifigkeit, kann Knöpfe nicht schließen
Wunsch: "Ich möchte wieder allein zurechtkommen"
```

**App-UI:** Karte mit Avatar-Illustration oben (nicht Foto — DSGVO + Diversität). Strukturierte Felder darunter. Farbiger Rand passend zur Diagnose-Schwere (gelb/orange/rot). "Merken"-Button: Patient wird für die ganze LE als Referenz gespeichert.

---

### FORMAT 16: Pro/Contra-Karte

**Beschreibung:** Ein Thema wird aus zwei Perspektiven beleuchtet: Argumente dafür und dagegen. Fördert kritisches Denken (Bloom 4-5).

**Wann passt es:**
- Ethische Fragen (Zwangernährung ja/nein?)
- Therapieentscheidungen (Biologika: teuer aber wirksam)
- Pflegekonzepte bewerten (Kinästhetik vs. konventionelle Mobilisation)

**Wann NICHT:**
- Wenn es keine echte Kontroverse gibt (Hände waschen: immer Pro)
- Faktenfragen (es gibt kein Pro/Contra bei "Was ist CRP?")

**Pflege-Beispiel:** "Biologika bei RA":
- **PRO:** Hohe Wirksamkeit, weniger Gelenkzerstörung, bessere Lebensqualität
- **CONTRA:** Hohe Kosten (15.000-25.000 EUR/Jahr), Infektionsrisiko erhöht, regelmäßige Kontrollen nötig
- **Fazit:** "Individuell abwägen. Bei schwerem Verlauf überwiegt der Nutzen."

**App-UI:** Zweigeteilte Karte. Links grün mit Daumen-hoch-Icon, rechts rot mit Daumen-runter-Icon. Jede Seite hat 3-4 Bullet Points. Unten: Fazit-Box in neutralem Grau. Optional: "Was denkst du?"-Button leitet zu Reflection-Step.

---

### FORMAT 17: Zitat + Kontext

**Beschreibung:** Ein prägnantes Zitat (von Pflegetheoretikern, Patienten, oder aus Leitlinien) als Aufhänger, gefolgt von Kontext und Erklärung.

**Wann passt es:**
- Pflegetheorien einführen (Virginia Henderson, Dorothea Orem)
- Ethische Reflexion anstoßen
- Patientenperspektive erlebbar machen
- Leitlinien-Empfehlungen zitieren

**Wann NICHT:**
- Wenn das Zitat keinen Mehrwert hat (nicht Zitat um des Zitats willen)
- Technische/naturwissenschaftliche Inhalte

**Pflege-Beispiel:**
> "Pflege ist die Kunst, für einen Menschen zu sorgen, der krank ist, als wäre er gesund."
> — Virginia Henderson, 1966

**Kontext:** Henderson definierte 14 Grundbedürfnisse. Bei RA-Patienten sind besonders betroffen: Sich bewegen, sich kleiden, arbeiten, schlafen. Die Pflegeplanung orientiert sich an diesen Bedürfnissen.

**App-UI:** Großes Zitat in Serifenschrift mit Anführungszeichen-Icon. Darunter Autor + Jahr. Kontext-Text in normalem Style. Dezenter Hintergrund (leichtes Gradient). Wirkt "edel" und seriös.

---

### FORMAT 18: Micro-Video / GIF-Erklärung

**Beschreibung:** Ein kurzes Video (15-30 Sek) oder animiertes GIF das einen Vorgang zeigt. Kein Erklarvideo, sondern eine visuelle Demonstration.

**Wann passt es:**
- Bewegungsübungen demonstrieren (Fingergymnastik bei RA)
- Pflegetechniken zeigen (Verbandwechsel, Lagerung)
- Mechanismen visualisieren (Entzündungsreaktion im Gelenk als Animation)

**Wann NICHT:**
- Wenn Text + Bild ausreicht (Video hat höheren Produktionsaufwand)
- Theoretische Erklärungen (da ist Audio+Bild effizienter als Video)
- MVP-Phase (Produktion teuer — später via KI-Animation oder Rive)

**Pflege-Beispiel:** 20-Sekunden-Loop: Gelenkschnitt-Animation. Gesunde Synovia → Immunzellen wandern ein → Entzündung → Pannus-Gewebe → Knorpelabbau. Beschriftungen erscheinen synchron.

**App-UI:** Autoplay-Video (stumm, mit Untertiteln). Loop-Modus oder Play/Pause. Fortschrittsbalken. Darunter: Texterklärung für Barrierefreiheit. Später: Rive-Animationen statt Video (leichter, interaktiv).

---

### FORMAT 19: Schritt-für-Schritt-Anleitung (Stepped Guide)

**Beschreibung:** Nummerierte Schritte mit je einer Überschrift, Kurztext und optionalem Bild. Schüler navigiert durch die Schritte. Wie ein Kochrezept.

**Wann passt es:**
- Pflegemaßnahmen durchführen (Gelenkschutz-Techniken)
- Assessments anwenden (DAS28-Score berechnen)
- Dokumentation schreiben (Pflegebericht Schritt für Schritt)
- Patientenedukation vorbereiten

**Wann NICHT:**
- Wenn die Reihenfolge egal ist (dann Checkliste oder Akkordeon)
- Theoretisches Hintergrundwissen

**Pflege-Beispiel:** "Gelenkschutz im Alltag — 5 Techniken":
1. **Greifen:** Immer mit der ganzen Hand, nie mit den Fingerspitzen
2. **Heben:** Gegenstände nah am Körper tragen, Gewicht verteilen
3. **Öffnen:** Schraubgläser mit Hilfsmittel öffnen, nie mit Kraft
4. **Schreiben:** Griffverstärkung verwenden, Pausen einlegen
5. **Arbeitsfläche:** Auf Ellbogenhöhe, nicht bücken

**App-UI:** Horizontaler Stepper oben (Kreis 1-2-3-4-5). Hauptbereich zeigt aktuellen Schritt mit Bild + Text. Vor/Zurück-Buttons. Progress: "Schritt 3 von 5". Am Ende: Zusammenfassung aller Schritte auf einer Karte.

---

### FORMAT 20: Nachrichtenmeldung / Zeitungsartikel

**Beschreibung:** Wissen wird im Format einer kurzen Nachricht präsentiert. Headline, Lead, Details. Erzeugt Realitätsbezug und Aktualität.

**Wann passt es:**
- Aktuelle Forschungsergebnisse ("Neue Studie zeigt...")
- Gesundheitspolitik (Pflegereform, Personalschlüssel)
- Epidemiologie (Prävalenz-Daten, Trends)
- Einstieg zum Nachdenken ("Problem vor Erklärung" — Brilliant-Prinzip)

**Wann NICHT:**
- Detaillierte medizinische Erklärungen
- Wenn es keine aktuelle/realistische Nachricht gibt

**Pflege-Beispiel:**
```
PFLEGE-NEWS
"Jeder 4. RA-Patient gibt innerhalb von 5 Jahren seinen Beruf auf"

Eine Studie der Deutschen Rheuma-Liga (2024) zeigt:
Rheumatoide Arthritis führt bei 25% der Betroffenen
innerhalb von 5 Jahren zur Berufsunfähigkeit.
Frühe Therapie kann das verhindern.

→ Was bedeutet das für die Pflege?
```

**App-UI:** Karte mit "BREAKING" oder "PFLEGE-NEWS"-Badge oben. Fette Headline. Kurzer Fließtext. Unten: Denkfrage als Überleitung. Design: Zeitungsartikel-Stil mit Serifen-Font für Headline, Sans-Serif für Body.

---

### FORMAT 21: Tagebuch-Eintrag (Perspektivwechsel)

**Beschreibung:** Ein kurzer Text aus der Ich-Perspektive: Patient, Pflegekraft, oder Angehöriger erzählt von einem Erlebnis. Fördert Empathie und Perspektivverständnis.

**Wann passt es:**
- Patientenperspektive erlebbar machen (Wie fühlt sich RA an?)
- Pflegealltag reflektieren (Belastungen, Erfolge)
- Angehörigen-Perspektive (pflegende Ehefrau)
- Psychosoziale Aspekte

**Wann NICHT:**
- Klinische Fakten (unwissenschaftlich im Tagebuch-Stil)
- Wenn Objektivität gefragt ist (Diagnostik, Medikamente)

**Pflege-Beispiel:**
```
📓 Mehmets Tagebuch — Dienstag, 7:15 Uhr

Heute Morgen konnte ich wieder die Zahnpasta-Tube
nicht aufdrehen. Meine Frau musste mir helfen.
Ich bin 62 und fühle mich wie 90.

Beim Frühstück konnte ich die Kaffeetasse kaum halten.
Meine Finger sind wie eingefroren. Nach einer Stunde
wird es langsam besser. Aber bis dahin sitze ich nur da
und warte.

Der Arzt sagt, das sei "Morgensteifigkeit".
Ich sage: Das ist mein halber Morgen.
```

**App-UI:** Handschrift-ähnlicher Font (oder kursiv). Papier-Textur-Hintergrund. Leicht schräg gestellte Karte. Datum oben. Notizbuch-Icon. Emotional, warm. Danach: Fachlicher Text erklärt was Mehmet beschreibt.

---

### FORMAT 22: Glossar-Deep-Dive (Begriffskarte mit Kontext)

**Beschreibung:** Ein einzelner Fachbegriff wird umfassend erklärt: Definition, Etymologie, Synonym, Übersetzung, Anwendungsbeispiel, Verwechslungsgefahr. Mehr als eine Flipcard, weniger als ein ganzer Text-Step.

**Wann passt es:**
- Neue Fachbegriffe einführen die später ständig gebraucht werden
- Begriffe die oft verwechselt werden (Arthritis vs. Arthrose)
- B1-Schüler die Wortbedeutung und Aussprache brauchen

**Wann NICHT:**
- Wenn der Begriff einfach und selbsterklärend ist
- Wenn er schon in einem anderen Format erklärt wurde

**Pflege-Beispiel:**
```
RHEUMATOIDE ARTHRITIS
━━━━━━━━━━━━━━━━━━━━━
Definition: Chronisch-entzündliche Autoimmunerkrankung
            der Gelenke
Abkürzung: RA
Früher:    Chronische Polyarthritis (cP)
Türkisch:  Romatoid artrit
Arabisch:  التهاب المفاصل الروماتويدي
Aussprache: [🔊 Abspielen]
━━━━━━━━━━━━━━━━━━━━━
⚠️ Verwechslungsgefahr:
   Arthritis = Entzündung
   Arthrose  = Verschleiß
━━━━━━━━━━━━━━━━━━━━━
Verwendung: "Der Patient hat eine RA mit hoher
            Krankheitsaktivität (DAS28 > 5.1)."
```

**App-UI:** Strukturierte Karte mit klaren Trennlinien. TTS-Button für Aussprache. Sprach-Tabs (DE/TR/AR). Verwechslungs-Box mit Warn-Icon. Unten: "Zur Karteikarten-Sammlung hinzufügen"-Button.

---

## Zusammenfassung: Wann welches Format?

| Kategorie | Formate | Typischer Einsatz |
|-----------|---------|-------------------|
| **Fakten präsentieren** | Infografik (#8), Flipcard (#4), Glossar-Deep-Dive (#22) | Zahlen, Definitionen, Überblick |
| **Vergleichen** | Vergleichstabelle (#2), Before/After (#14), Pro/Contra (#16) | Abgrenzung, Bewertung |
| **Prozesse erklären** | Timeline (#3), Flowchart (#13), Schritt-für-Schritt (#19) | Abläufe, Algorithmen |
| **Visuell erklären** | Annotiertes Bild (#1), Scrollytelling (#9), Video/GIF (#18) | Anatomie, Mechanismen |
| **Interaktiv entdecken** | Reveal-on-Tap (#7), Akkordeon (#5) | Neugier wecken, selbstgesteuert |
| **Merken helfen** | Mnemonic (#10), Analogie (#11), Checkliste (#12) | Auswendiglernen, Transfer |
| **Empathie fördern** | Chat-Protokoll (#6), Tagebuch (#21), Steckbrief (#15) | Patientenperspektive |
| **Kontext geben** | Zitat (#17), Nachrichtenmeldung (#20) | Einstieg, Reflexion |

---

## Implementierungsplan

### Phase 1: Sofort umsetzbar (kein neuer Content nötig, nur UI)
Diese Formate können mit bestehenden Content-Strukturen implementiert werden:

1. **Akkordeon (#5)** — Erweiterung von `step-text`
2. **Flipcard (#4)** — Neuer `stepType: "flipcard"`
3. **Reveal-on-Tap (#7)** — Neuer `stepType: "reveal"`
4. **Vergleichstabelle (#2)** — Neuer `stepType: "comparison"`
5. **Infografik-Karte (#8)** — Neuer `stepType: "infographic"`

### Phase 2: Mittelfristig (Content-Struktur anpassen)
Diese brauchen neue Datenfelder, sind aber nicht aufwendig:

6. **Chat-Protokoll (#6)** — Erweiterung von `stepType: "dialog"` (existiert schon!)
7. **Timeline (#3)** — Neuer `stepType: "timeline"`
8. **Patienten-Steckbrief (#15)** — Neuer `stepType: "persona"`
9. **Checkliste (#12)** — Neuer `stepType: "checklist"`
10. **Schritt-für-Schritt (#19)** — Neuer `stepType: "stepper"`

### Phase 3: Später (aufwändiger)
Diese erfordern Produktionsaufwand oder komplexere Infrastruktur:

11. **Scrollytelling (#9)** — Komplex, braucht gutes Asset-Management
12. **Micro-Video/GIF (#18)** — Content-Produktion nötig
13. **Annotiertes Bild (#1)** — Braucht gute Bilder + Hotspot-Daten

### Formate als Display-Varianten
Die Formate **Mnemonic (#10), Analogie (#11), Before/After (#14), Pro/Contra (#16), Zitat (#17), Nachrichtenmeldung (#20), Tagebuch (#21), Glossar-Deep-Dive (#22)** können als **Varianten des Text-Steps** umgesetzt werden:

- Neues Feld in `contentC1`: `displayFormat?: "mnemonic" | "analogy" | "beforeafter" | "procontra" | "quote" | "news" | "diary" | "glossary"`
- Unterschiedliches Rendering im bestehenden `step-text.tsx`
- Kein neuer `stepType` nötig, nur Template-Variationen

---

## Quellen

- [Mayer's 12 Principles of Multimedia Learning - Digital Learning Institute](https://www.digitallearninginstitute.com/blog/mayers-principles-multimedia-learning)
- [Mayer's Principles - Water Bear Learning](https://waterbearlearning.com/mayers-principles-multimedia-learning/)
- [Mayer's Principles - eduMe](https://www.edume.com/blog/elearning-multimedia)
- [Brilliant: Learn by doing - ScreensDesign](https://screensdesign.com/showcase/brilliant-learn-by-doing)
- [How Brilliant.org uses Rive animations](https://rive.app/blog/how-brilliant-org-motivates-learners-with-rive-animations)
- [Interactive play in learning - UX Collective](https://uxdesign.cc/the-key-to-learning-math-and-science-online-is-interactive-play-6ea68ce167fe)
- [9 Microlearning Formats - eLearning Industry](https://elearningindustry.com/microlearning-formats-a-guide-for-ld-professionals)
- [8 types of eLearning content - AcademySmart](https://academysmart.com/insights/elearning-content-formats/)
- [Microlearning Design Principles - LearnBrite](https://learnbrite.com/microlearning-design/)
- [Duolingo Teaching Method](https://blog.duolingo.com/duolingo-teaching-method/)
- [Duolingo as Microlearning Tool - ACM](https://dl.acm.org/doi/fullHtml/10.1145/3631991.3632026)
- [What 1000 Days of Duolingo taught about Microlearning](https://www.td.org/content/atd-blog/what-1-000-days-of-duolingo-taught-me-about-microlearning-and-gamification)
- [AMBOSS Product Features](https://www.amboss.com/us/features)
- [AMBOSS Learning Cards Guide](https://www.amboss.com/us/knowledge/User_guide_-_Viewing_learning_cards)
- [Scrollytelling Guide - UI Deploy](https://ui-deploy.com/blog/complete-scrollytelling-guide-how-to-create-interactive-web-narratives-2025)
- [Scrollytelling - Daffodil Software](https://insights.daffodilsw.com/blog/what-is-scrollytelling-and-how-to-tell-immersive-stories-with-design)
- [Storytelling in Nursing Education - Frontiers in Medicine](https://www.frontiersin.org/journals/medicine/articles/10.3389/fmed.2025.1587526/full)
- [Narrative Pedagogy in Nursing - Wolters Kluwer](https://www.wolterskluwer.com/en/expert-insights/narrative-pedagogy-in-nursing-ed-used-to-teach-tough-topics)
- [Patient Stories in Health Sciences - BMC Medical Education](https://link.springer.com/article/10.1186/s12909-024-05987-x)
- [Accordion UI Best Practices - Smashing Magazine](https://www.smashingmagazine.com/2017/06/designing-perfect-accordion-checklist/)
- [Khan Academy Teaching Framework - EdisonOS](https://www.edisonos.com/digital-sat/khan-academy-teaching-framework)
- [Nursing Mnemonics - Nurseslabs](https://nurseslabs.com/category/nursing-notes/nursing-mnemonics-tips/)
- [Picmonic Visual Learning Tool](https://www.picmonic.com/)
