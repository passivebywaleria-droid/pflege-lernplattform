# Abschluss-Varianten — 16 Session-Enden für Abwechslung

**Geschrieben:** 2026-03-25

Formate, die am Ende einer Session oder Lerneinheit stehen können. Jedes Format hat einen anderen Zweck, ein anderes Gefühl und passt zu anderen Situationen.

---

## Kategorie A: Ergebnis- und Feier-Formate

### 1. XP-Ergebnis-Screen (Duolingo-Stil)

**Beschreibung:** Animated Ergebnis-Karte mit XP-Zähler, Genauigkeit, Streak und Lernzeit. Der XP-Zähler zählt hoch, Confetti fällt, Streak-Flamme leuchtet auf.

**Wann passt es:** Nach jeder Session. Standard-Abschluss, besonders nach Challenge-Modi.

**Pflege-Beispiel:** "Session abgeschlossen! 185 XP | 87% richtig | Streak: 4 Tage | Lernzeit: 28 Min"

**UI:** Vollbild-Overlay, dunkelgrüner/goldener Hintergrund. Oben: Confetti-Animation. Mitte: Großer XP-Counter (zählt hoch von 0 auf 185). Darunter: 3 Statistik-Chips (Genauigkeit, Streak, Zeit). Unten: Großer "Weiter"-Button. Optional: "Teilen"-Icon.

---

### 2. Vorher/Nachher-Kompetenz-Vergleich

**Beschreibung:** Zeigt die Kompetenz-Einschätzung vom Session-Start neben dem Ergebnis. Visuell: Zwei Balken nebeneinander, der "Nachher"-Balken wächst animiert.

**Wann passt es:** Am Ende von Session 3 (Transfer-Session) oder nach einer ganzen LE.

**Pflege-Beispiel:** "Dein Wissen über Rheumatoide Arthritis: Vorher: 2/5 Sterne | Nachher: 4/5 Sterne. Du hast 6 neue Konzepte gemeistert."

**UI:** Split-Screen. Links: Grauer Balken mit "Start" (niedrig). Rechts: Grüner Balken mit "Jetzt" (hoch), wächst animiert. Darunter: Liste der gemeisterten Konzepte mit Häkchen. Unten: Motivationssatz.

---

### 3. Achievement/Badge-Vergabe

**Beschreibung:** Ein spezielles Badge wird freigeschaltet — mit Name, Icon und Beschreibung. Kurze Feier-Animation (Glitter, Pulsieren). Nur bei echten Meilensteinen, nicht inflationär.

**Wann passt es:** Erste LE abgeschlossen, erstes Fallbeispiel gelöst, 100% in einer Challenge, alle 12 Punkte eines Krankheitsbilds durch.

**Pflege-Beispiel:** Badge "RA-Grundlagen gemeistert" — "Du kennst jetzt Definition, Ursachen und Symptome der Rheumatoiden Arthritis."

**UI:** Zentriertes Badge-Icon (rund, goldener Rand) mit Puls-Animation. Darunter: Badge-Name in Fett. Beschreibung in 1-2 Sätzen. "Zu meinen Badges"-Link. Hintergrund leicht abgedunkelt.

---

### 4. Freischaltungs-Vorschau

**Beschreibung:** Zeigt was als Nächstes kommt und dass es jetzt freigeschaltet ist. Erzeugt Neugier und Sog-Effekt ("Noch eine Session!").

**Wann passt es:** Nach Abschluss einer Session wenn die nächste Session bereit ist. Nach LE-Abschluss wenn neue LE freigeschaltet wird.

**Pflege-Beispiel:** "Freigeschaltet: Session 2 — Wie wird RA behandelt? Therapie, Medikamente und was die Pflege tun kann."

**UI:** Card mit Lock-Icon das sich öffnet (Animation). Titel der neuen Session. 2-3 Bullet-Points was kommt. Vorschau-Bild oder Emoji. "Jetzt starten" oder "Morgen weitermachen"-Button.

---

## Kategorie B: Reflexions-Formate

### 5. Key-Takeaway-Karten (Brilliant-Stil)

**Beschreibung:** 3-5 Karten die man durchswipen kann, jede mit EINER Kern-Erkenntnis. Visuell klar, kein Fließtext. Jede Karte: Icon + 1 Satz + optionale Grafik.

**Wann passt es:** Nach Session 1 (Einstieg) wenn viel neues Wissen eingeführt wurde. Ideal für Theorie-lastige Sessions.

**Pflege-Beispiel:**
- Karte 1: "RA ist eine Autoimmunerkrankung — der Körper greift sich selbst an"
- Karte 2: "Typisch: Morgensteifigkeit über 30 Minuten"
- Karte 3: "RA ist symmetrisch — beide Hände gleichzeitig"

**UI:** Swipeable Kartenstack. Jede Karte hat farbigen Rand (nach Bloom-Stufe). Oben: Icon/Emoji. Mitte: Fett gedruckter Kernsatz. Unten: Optional Grafik/Bild. Fortschritts-Dots (3/5). Letzte Karte: "Verstanden"-Button.

---

### 6. Exit Ticket — "Welche Frage habe ich noch?"

**Beschreibung:** Der Schüler schreibt seine offene Frage auf. Das erzwingt Metakognition: "Was habe ich NICHT verstanden?" Die Frage wird gespeichert und kann später vom KI-Tutor oder Lehrer beantwortet werden.

**Wann passt es:** Nach schwierigen Sessions, nach Session 2 (Vertiefung) wo komplexe Zusammenhänge kamen.

**Pflege-Beispiel:** Prompt: "Was ist dir noch unklar?" — Schüler tippt: "Ich verstehe nicht, warum Methotrexat erst nach Wochen wirkt."

**UI:** Weißer Screen, oben: "Bevor du gehst..." in großer Schrift. Darunter: Freitext-Feld mit Placeholder "Was ist dir noch unklar?". Optional: 3 vorformulierte Fragen als Chips ("Alles klar!", "Therapie war kompliziert", "Begriffe noch unsicher"). "Absenden"-Button. Antwort kommt per Push oder in nächster Session.

---

### 7. Ein-Satz-Zusammenfassung

**Beschreibung:** Schüler fasst die ganze Session in EINEM Satz zusammen. Fördert Synthese — das höchste Bloom-Level. KI gibt Feedback ob der Satz das Wesentliche trifft.

**Wann passt es:** Am Ende von Session 3 (Transfer). Für fortgeschrittene Schüler (Level 2-3). Nicht für Anfänger.

**Pflege-Beispiel:** Prompt: "Fasse das Wichtigste über RA-Pflege in einem Satz zusammen." — Schüler: "Bei RA muss die Pflege Schmerzen lindern, Gelenke schützen und den Patienten zur Selbsthilfe anleiten."

**UI:** Minimalistischer Screen. Großer Prompt oben. Einzeiliges Textfeld (max 200 Zeichen). Zeichenzähler. "Prüfen"-Button. KI-Feedback erscheint als Sprechblase: "Gut! Du hast die drei Säulen der RA-Pflege erfasst."

---

### 8. Confidence-Rating Vorher/Nachher

**Beschreibung:** Am Session-Start wurde gefragt "Wie sicher bist du bei diesem Thema?" (1-5). Jetzt wird dieselbe Frage nochmal gestellt. Der Vergleich wird visualisiert. Fördert Metakognition und macht Lernfortschritt fühlbar.

**Wann passt es:** Am Ende jeder Session. Besonders wirkungsvoll bei Themen wo Schüler sich vorher unsicher fühlten.

**Pflege-Beispiel:** "Wie sicher bist du jetzt beim Thema Dekubitus-Stadien? Vorher: 2/5 | Jetzt: ___"

**UI:** 5 Sterne oder Slider (1-5). Oben: "Am Anfang hast du 2/5 gewählt." Schüler wählt neuen Wert. Animation zeigt den Sprung. Motivationssatz: "Von unsicher auf sicher — in 28 Minuten!"

---

## Kategorie C: Transfer-Formate

### 9. Praxis-Auftrag ("Achte morgen auf Station auf...")

**Beschreibung:** Ein konkreter Beobachtungs- oder Handlungsauftrag für die nächste Praxisphase. Verknüpft Theorie mit Praxis. Wird als Karte gespeichert und kann in der App abgehakt werden.

**Wann passt es:** Wenn der Schüler in der Praxisphase ist. Nach Sessions zu klinischen Themen (Assessments, Prophylaxe, Dokumentation).

**Pflege-Beispiel:** "Praxis-Auftrag: Achte morgen auf Station darauf, wie die Schmerz-Dokumentation gemacht wird. Welches Assessment wird benutzt? Notiere es in der App."

**UI:** Card mit Klemmbrett-Icon. Farbiger Rand (orange = Praxis). Titel: "Dein Praxis-Auftrag". 1-2 Sätze Aufgabe. Checkbox zum Abhaken. "Erinnere mich morgen"-Toggle. Wird unter "Meine Aufträge" gespeichert.

---

### 10. Rückblick auf Einstiegs-Problem (Brilliant-Prinzip)

**Beschreibung:** Am Session-Start wurde ein Problem gestellt das der Schüler (noch) nicht lösen konnte. Jetzt wird exakt dasselbe Problem nochmal gezeigt — und der Schüler kann es jetzt lösen. Der "Aha-Moment" wird spürbar.

**Wann passt es:** In Sessions die mit einem Brilliant-Moment starten. Besonders Session 1 (Einstieg).

**Pflege-Beispiel:** Start: "Frau Weber klagt über Morgensteifigkeit. Was könnte das sein?" (Schüler wusste es nicht). Ende: Dieselbe Frage — jetzt weiß der Schüler: "RA, weil symmetrisch + Morgensteifigkeit > 30 Min + RF positiv."

**UI:** Split-Screen oder Vorher/Nachher-Karte. Oben: "Am Anfang hast du das gesehen:" + Original-Frage (ausgegraut). Unten: Freitext oder MC nochmal. Bei richtiger Antwort: Grüner Haken + "Jetzt kannst du es!" + Confetti.

---

### 11. Feynman-Prompt ("Erkläre es einem Mitschüler")

**Beschreibung:** Der Schüler erklärt ein Konzept in eigenen Worten — so einfach dass ein Laie es versteht. Kann als Text ODER per Sprache (Whisper). KI prüft auf Vollständigkeit und Einfachheit.

**Wann passt es:** Am Ende von Session 2 oder 3. Für Schüler ab Level 2. Besonders bei komplexen Konzepten.

**Pflege-Beispiel:** "Stell dir vor, ein neuer Schüler fragt dich: Was ist Rheumatoide Arthritis? Erkläre es in 3 Sätzen."

**UI:** Persona-Avatar oben ("Dein Mitschüler fragt:"). Frage in Sprechblase. Darunter: Freitext-Feld ODER Mikrofon-Button für Spracheingabe. "Prüfen"-Button. KI-Feedback: "Super erklärt! Du hast vergessen zu erwähnen dass es eine Autoimmunerkrankung ist."

---

## Kategorie D: Spaced-Repetition-Brücke

### 12. Schwächen-Review ("Die 3 schwierigsten nochmal")

**Beschreibung:** Die 3 Fragen bei denen der Schüler am meisten Probleme hatte werden nochmal gezeigt — in vereinfachter Form. Keine XP, kein Druck. Reines Festigen.

**Wann passt es:** Nach Sessions mit niedriger Genauigkeit (unter 70%). Nach Challenge-Modi wo schnell geantwortet wurde.

**Pflege-Beispiel:** "Diese 3 Fragen waren knifflig. Lass uns die nochmal durchgehen." — (1) RF-Faktor Bedeutung, (2) Morgensteifigkeit vs. Belastungsschmerz, (3) MTX Wirkungseintritt.

**UI:** Überschrift: "Nochmal üben" mit Wiederholungs-Icon. 3 Mini-Cards nacheinander. Jede Karte: Frage + richtige Antwort + kurze Erklärung. Kein Timer, kein Scoring. "Jetzt sitzt es!"-Button am Ende.

---

### 13. Karteikarten-Ernte

**Beschreibung:** Aus der Session werden automatisch 5-8 Karteikarten generiert — Fachbegriffe, Definitionen, Zusammenhänge. Der Schüler kann Karten behalten, bearbeiten oder verwerfen. Diese fließen ins Spaced-Repetition-System.

**Wann passt es:** Nach jeder Session. Besonders nach Session 1 wo viele neue Begriffe kamen.

**Pflege-Beispiel:** Karten: "Morgensteifigkeit → Typisch für entzündliche Gelenkerkrankungen, > 30 Min bei RA" | "MTX → Methotrexat, Basistherapeutikum, Wirkung nach 4-6 Wochen"

**UI:** Kartenstack zum Durchswipen (Tinder-Stil). Jede Karte: Vorderseite (Begriff) → Tippen → Rückseite (Erklärung). Unter jeder Karte: "Behalten" (grün) oder "Kann ich schon" (grau). Zähler: "5 von 8 Karten behalten". Gespeicherte Karten erscheinen im Karteikarten-Modus.

---

### 14. Vorschau-Brücke ("Das kommt in 3 Tagen nochmal")

**Beschreibung:** Transparente Ankündigung wann welche Inhalte wiederkommen. Macht Spaced Repetition sichtbar und nachvollziehbar. Reduziert das Gefühl "war das jetzt umsonst?".

**Wann passt es:** Am Ende jeder Session als letztes Element. Kurz, nicht blockierend.

**Pflege-Beispiel:** "Diese Themen kommen bald wieder: Morgen: Schnellquiz RA-Basics | In 3 Tagen: Fallbeispiel Frau Weber | In 7 Tagen: RA-Therapie Wiederholung"

**UI:** Kleine Timeline-Grafik (horizontal). 3 Punkte auf der Zeitachse: "Morgen", "+3 Tage", "+7 Tage". Bei jedem Punkt: Themen-Chip. Dezent, nicht invasiv. Kann zugeklappt werden. "Verstanden"-Button.

---

## Kategorie E: Soziale und emotionale Formate

### 15. Ermutigungs-Feedback (Sandwich-Prinzip)

**Beschreibung:** Personalisiertes Feedback basierend auf der Session-Performance. Folgt dem Sandwich-Prinzip: Loben, Korrigieren, Ermutigen. Nie generisch — bezieht sich auf konkrete Stärken und Schwächen.

**Wann passt es:** Immer. Besonders wichtig nach schwierigen Sessions oder bei B1-Schülern die sich unsicher fühlen.

**Pflege-Beispiel:** "Stark! Du hast alle Symptome der RA richtig zugeordnet. Bei der Therapie warst du noch unsicher — das üben wir nächstes Mal. Du bist auf einem guten Weg!"

**UI:** Card mit warmem Hintergrund (gelb/orange Gradient). Oben: Personalisierter Satz (Lob). Mitte: Konkreter Hinweis (was üben). Unten: Ermutigung. Optional: Emoji/Icon passend zum Ton. Kein "Schließen"-X oben — der Schüler soll es lesen.

---

### 16. Tagesstatistik + Motivations-Impuls

**Beschreibung:** Kompakte Übersicht: Lernzeit, XP, bearbeitete Steps, Genauigkeit. Dazu ein kontextabhängiger Motivationssatz. Nicht immer das gleiche Zitat — bezieht sich auf das Gelernte.

**Wann passt es:** Am Ende des Lerntages (letzte Session des Tages). Oder wenn der Schüler die App schließt.

**Pflege-Beispiel:** "Dein Tag: 42 Min gelernt | 210 XP | 28 Steps | 81% richtig. Du hast heute mehr über RA gelernt als viele in einer ganzen Unterrichtsstunde."

**UI:** Kompakte Card. 4 Statistik-Chips in einer Reihe (Icons: Uhr, Stern, Steps, Prozent). Darunter: Motivationssatz in kursiv. Ganz unten: "Morgen geht's weiter mit: [Vorschau]". "Gute Nacht"-Button oder "Noch eine Session"-Button.

---

## Zuordnung: Welches Format wann?

| Session-Typ | Empfohlene Formate (2-3 kombinieren) |
|---|---|
| **Session 1 (Einstieg)** | Key-Takeaway-Karten (5) + Karteikarten-Ernte (13) + XP-Screen (1) |
| **Session 2 (Vertiefung)** | Schwächen-Review (12) + Exit Ticket (6) + Ermutigungs-Feedback (15) |
| **Session 3 (Transfer)** | Rückblick Einstiegs-Problem (10) + Feynman-Prompt (11) + Vorher/Nachher-Vergleich (2) |
| **Challenge-Session** | XP-Screen (1) + Schwächen-Review (12) + Vorschau-Brücke (14) |
| **Praxisphase** | Praxis-Auftrag (9) + Ein-Satz-Zusammenfassung (7) + Confidence-Rating (8) |
| **LE-Abschluss** | Achievement/Badge (3) + Freischaltungs-Vorschau (4) + Tagesstatistik (16) |
| **Tagesende** | Tagesstatistik (16) + Vorschau-Brücke (14) + Ermutigungs-Feedback (15) |

---

## Kombinations-Regel

Nie mehr als 3 Abschluss-Formate hintereinander. Empfohlene Reihenfolge:

1. **Inhaltlich** (Reflexion oder Transfer) — z.B. Key-Takeaways, Feynman, Exit Ticket
2. **Repetition** (Festigen) — z.B. Schwächen-Review, Karteikarten-Ernte
3. **Motivational** (Feiern + Ausblick) — z.B. XP-Screen, Badge, Vorschau-Brücke

So endet jede Session mit einem guten Gefühl, nicht mit einer Pflichtübung.

---

## Quellen

- [Duolingo Streak System Breakdown](https://medium.com/@salamprem49/duolingo-streak-system-detailed-breakdown-design-flow-886f591c953f)
- [Duolingo Gamification Secrets](https://www.orizon.co/blog/duolingos-gamification-secrets)
- [How Brilliant.org Motivates Learners with Animations](https://rive.app/blog/how-brilliant-org-motivates-learners-with-rive-animations)
- [Khan Academy Mastery Progress Visualization](https://support.khanacademy.org/hc/en-us/articles/18735142028045-Update-New-mastery-progress-visualization-on-Course-and-Unit-pages)
- [AMBOSS Platform Features](https://www.amboss.com/us/features)
- [Exit Tickets as Formative Assessment](https://www.structural-learning.com/post/exit-tickets)
- [Exit Ticket Examples](https://www.prodigygame.com/main-en/blog/exit-ticket-examples)
- [KWL Charts in Digital Learning](https://edtechbooks.org/designing_engaging_interactive_synchronous_online_classes/kwl_charts)
- [The Feynman Learning Technique](https://fs.blog/feynman-learning-technique/)
- [Spaced Repetition in Online Course Design](https://eshapard.github.io/teaching/applying-spaced-repetition-to-online-course-design.html)
- [Lesson Closure Activities](https://www.americanboard.org/ptk/lesson-closure/)
- [Closing Activities to Boost Understanding](https://britannicaeducation.com/blog/10-closing-activities-to-boost-student-understanding/)
- [Metacognition and Confidence](https://www.annualreviews.org/content/journals/10.1146/annurev-psych-022423-032425)
- [Gamified Learning Platforms 2026](https://training.safetyculture.com/blog/gamified-learning-platforms/)
