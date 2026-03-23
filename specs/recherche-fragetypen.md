# Recherche: Interaktive Fragetypen für Lernplattformen

Stand: 2026-03-21 | Ziel: 20+ Fragetypen für 8 UE/Tag Pflegeausbildung

---

## Bereits implementiert (8 Typen)

1. Multiple Choice (MC)
2. Lückentext (Gap-Fill)
3. Zuordnung (Matching)
4. Reihenfolge (Sequencing)
5. Hotspot (Bild anklicken)
6. Wahr/Falsch (True/False)
7. Kategorisierung (Drag into buckets)
8. Text-Markierung (Highlight)

---

## Neue Fragetypen: Vollständige Liste (25 Typen)

| # | Name | Beschreibung | Bloom | Mobil | Kompl. |
|---|------|-------------|-------|-------|--------|
| 9 | **Flashcard (Flip)** | Karte umdrehen, Begriff vs. Definition | 1-2 | Ja | S |
| 10 | **Bildlückentext** | Bild mit beschriftbaren Pfeilen/Feldern | 1-2 | Ja | S |
| 11 | **Audio-Transkription** | Audio hören, Text vervollständigen | 2 | Ja | M |
| 12 | **Wort-Scramble** | Buchstaben/Wörter in richtige Reihenfolge ziehen | 2 | Ja | S |
| 13 | **Memory-Kartenspiel** | Paare aus verdeckten Karten aufdecken (Begriff+Bild) | 1-2 | Ja | M |
| 14 | **Kreuzworträtsel** | Fachbegriffe in ein Gitter eintragen | 1-2 | Bedingt | M |
| 15 | **Wortsuche (Word Search)** | Begriffe im Buchstabengitter finden | 1 | Ja | M |
| 16 | **Schieberegler-Skala** | Wert auf einer Skala einschätzen (z.B. Schmerzskala 0-10) | 2-3 | Ja | S |
| 17 | **Drag-the-Words** | Wörter in Lücken eines Satzes ziehen | 2 | Ja | M |
| 18 | **Bildreihenfolge** | Bilder einer Prozedur in korrekte Reihenfolge bringen | 3 | Ja | M |
| 19 | **Kurzantwort (Free Text)** | Offene Textantwort, KI-bewertet | 2-5 | Ja | L |
| 20 | **Fallvignette (Case Study)** | Text lesen, mehrere verknüpfte Fragen beantworten | 3-4 | Ja | M |
| 21 | **Branching Scenario** | Entscheidungsbaum: Patientensituation → Handlung wählen → Konsequenz | 4-5 | Ja | L |
| 22 | **Virtueller Patient** | Vitalwerte ablesen, Symptome erheben, Diagnose stellen | 4-6 | Bedingt | L |
| 23 | **Fehler finden (Error Spotting)** | Fehlerhaften Text/Bild korrigieren | 4 | Ja | M |
| 24 | **Sortier-Timer (Speed Sort)** | Begriffe so schnell wie möglich in Kategorien einordnen | 3 | Ja | M |
| 25 | **Analogie-Aufgabe** | „A verhält sich zu B wie C zu ___" | 3-4 | Ja | M |
| 26 | **Beobachtungsaufgabe (Spot-the-Difference)** | Zwei Bilder vergleichen, Abweichungen markieren | 4 | Ja | M |
| 27 | **Rollenspiel-Dialog** | Multiple-Choice-Konversation simulieren (Pflegekraft/Patient) | 3-4 | Ja | M |
| 28 | **Zeitstrahl (Timeline)** | Ereignisse/Pflegeschritte auf Zeitachse einordnen | 3 | Ja | M |
| 29 | **Mathe-Aufgabe (Dosisrechnung)** | Numerische Eingabe: z.B. Infusionsrate berechnen | 3 | Ja | S |
| 30 | **Concept Map (vereinfacht)** | Begriffe mit Pfeilen verknüpfen, Hierarchie aufbauen | 4-5 | Bedingt | L |
| 31 | **Video-Frage** | Video stoppt, eingebettete Frage erscheint (Interactive Video) | 2-4 | Ja | M |
| 32 | **Ranking (Prioritätenliste)** | Pflegemaßnahmen nach Dringlichkeit priorisieren | 4-5 | Ja | M |
| 33 | **Bingo-Karte** | Begriffe auf Bingo-Karte abhaken während Audio/Video läuft | 2 | Ja | M |

---

## Details: Pflegespezifische Prioritätstypen

### Branching Scenario (Typ 21) — Bloom 4-5, Kompl. L
- Patientenstatus wird beschrieben (z.B. Sturz, Blutzuckerentgleisung)
- Lernende trifft Entscheidung A/B/C
- Jede Wahl führt zu realistischen Konsequenzen
- Vorbild: H5P "Branching Scenario", vSim for Nursing
- React-Umsetzung: State Machine + Framer Motion für Übergänge

### Virtueller Patient (Typ 22) — Bloom 4-6, Kompl. L
- Vereinfacht: Anamnese-Karten aufdecken, Befunde lesen
- Entscheidung: Welche Maßnahme einleiten?
- Body Interact / vSim als Referenz
- React: Phasen-basierter Ablauf, kein 3D nötig

### Dosisrechnung (Typ 29) — Bloom 3, Kompl. S
- Eingabefeld + Einheitenwahl (mg, ml, Tropfen/min)
- Formeln im Hintergrund, Schritt-für-Schritt Feedback
- Kritisch für Examen und Patientensicherheit

### Fallvignette (Typ 20) — Bloom 3-4, Kompl. M
- Patientenfall als Text (150–300 Wörter)
- 3–5 verknüpfte Fragen (MC, Free Text, Prioritäten)
- Besonders gut für OSCE-Vorbereitung

### Rollenspiel-Dialog (Typ 27) — Bloom 3-4, Kompl. M
- Wichtig für B1-Deutsch-Lernende
- Pflegekraft spricht mit Patient/Arzt
- Multiple-Choice-Antwortoptionen in der Konversation
- Sprachmodelle könnten echte Dialogsimulation ergänzen

---

## Gut für B1-Deutsch-Lernende (Sprachunterstützung)

| Typ | Warum hilfreich |
|-----|----------------|
| Flashcard | Termin + Bild + Aussprache kombinierbar |
| Audio-Transkription | Hörverständnis + Schreiben |
| Drag-the-Words | Satzbau-Training ohne freie Texteingabe |
| Rollenspiel-Dialog | Alltagskommunikation im Pflegekontext |
| Bildlückentext | Vokabeln visuell verankern |
| Wort-Scramble | Rechtschreibung spielerisch üben |
| Kreuzworträtsel | Schreibung von Fachbegriffen einüben |

Empfehlung: Immer Bild + Begriff + Audioaussprache kombinieren. Hover/Tap-Tooltip mit Übersetzung (optional). Muttersprache wählbar als Scaffold.

---

## Gamification-Fragetypen (besonders motivierend)

| Typ | Mechanismus | Engagement |
|-----|------------|-----------|
| Memory-Kartenspiel | Entdeckungsfreude, Zeitdruck | Hoch |
| Speed Sort | Timer, Highscore | Sehr hoch |
| Kreuzworträtsel | Lösungsmoment ("Aha!") | Hoch |
| Wortsuche | Entspannend, leicht | Mittel |
| Bingo-Karte | Sozial, kollektiv | Hoch (Klasse) |
| Branching Scenario | Narrative Spannung | Sehr hoch |

---

## Bloom-Level-Verteilung (empfohlener Mix pro Lektion)

```
Bloom 1 (Erinnern):     Flashcard, Memory, Wortsuche         → 20%
Bloom 2 (Verstehen):    MC, T/F, Audio, Drag-the-Words        → 25%
Bloom 3 (Anwenden):     Gap-Fill, Dosisrechnung, Speed Sort   → 25%
Bloom 4 (Analysieren):  Fallvignette, Fehler finden, Ranking  → 20%
Bloom 5-6 (Bewerten/Erschaffen): Branching, Concept Map, VP   → 10%
```

Pro 8-UE-Tag: Alle 6 Bloom-Level mindestens einmal abdecken. Höhere Levels gegen Ende des Tages platzieren (wenn Grundwissen sitzt).

---

## Technische Umsetzbarkeit (React + dnd-kit + Framer Motion)

### Komplex. S — Einfach (1–3 Tage)
- Flashcard: CSS 3D-Flip, keine Library nötig
- Schieberegler: HTML range input + Tailwind
- Dosisrechnung: Input + Validierung
- True/False: Erweiterte MC-Variante
- Wort-Scramble: Array.sort + dnd-kit

### Komplex. M — Mittel (3–7 Tage)
- Memory-Kartenspiel: Grid + Framer Motion AnimatePresence
- Drag-the-Words: dnd-kit DragOverlay
- Kreuzworträtsel: 2D-Grid-Daten + Input-Handler
- Video-Frage: HTML5 video + onTimeUpdate Events
- Bildreihenfolge: dnd-kit Sortable + Framer Motion
- Rollenspiel-Dialog: State Machine, kein Drag nötig
- Timeline: dnd-kit Sortable horizontal

### Komplex. L — Aufwändig (1–3 Wochen)
- Branching Scenario: Baum-Datenstruktur + Navigation
- Virtueller Patient: Phasenmanagement + viele Assets
- Concept Map: SVG-Pfeile + dnd-kit (komplexes Positioning)
- Kurzantwort/KI: API-Integration Nebius/Llama 3.3

### Hinweis zu dnd-kit + Framer Motion
- Beide Libraries sind kompatibel (Stand 2025)
- dnd-kit übernimmt Drag-Logik, Framer Motion nur für Exit/Enter-Animationen
- Touch-Support: dnd-kit hat nativen TouchSensor — alle Drag-Typen funktionieren mobil

---

## Plattform-Referenzen

| Plattform | Besondere Typen |
|-----------|----------------|
| **Duolingo** | Drag-the-Words, Audio-Transkription, Bildauswahl, Sprechübung |
| **Khan Academy** | Video-Frage, numerische Eingabe, Expression Builder |
| **Brilliant** | Interaktive Diagramme, Concept Slider, visuelles Problemlösen |
| **Quizlet** | Flashcard, Speed-Match (Blast), Live-Bingo, Practice Test |
| **H5P** | Branching Scenario, Interactive Video, Dialog Cards, Virtual Tour |
| **vSim/Body Interact** | Virtueller Patient, Vitalmessung, Medikamentengabe |

---

## Empfehlung: Implementierungsreihenfolge

**Sprint 1 (MVP):** Flashcard, Audio-Transkription, Drag-the-Words, Bildreihenfolge, Dosisrechnung
**Sprint 2:** Memory-Spiel, Speed Sort, Fallvignette, Fehler finden, Rollenspiel-Dialog
**Sprint 3:** Branching Scenario, Video-Frage, Timeline, Kreuzworträtsel, Ranking
**Später:** Virtueller Patient, Concept Map, KI-Kurzantwort

Gesamtziel: 15–20 Typen produktionsreif vor Beta-Launch. Die 5 Haupttypen (MC, Lückentext, Matching, Sequencing, Hotspot) bereits vorhanden — 10–15 neue bis Beta.

---

## Quellen

- [H5P Content Types Overview](https://h5p.org/content-types-and-applications)
- [Virtual Simulation in Nursing Education — PMC Meta-Analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC9212904/)
- [Body Interact — Virtual Patient Simulator](https://bodyinteract.com/)
- [Quizlet Study Modes](https://quizlet.com/gb/features/study-modes)
- [dnd-kit Overview](https://dndkit.com/)
- [Framer Motion Reorder](https://motion.dev/docs/react-reorder)
- [Bloom's Taxonomy for Digital Learning](https://www.neovation.com/learn/27-what-is-blooms-taxonomy-for-digital-learning)
- [Khan Academy Spring 2025 Updates](https://blog.khanacademy.org/need-to-know-spring-2025-question-generators-for-student-engagement-interactive-biology-tools-and-time-saving-export-options/)
- [German for Nurses — FluentU](https://www.fluentu.com/blog/german/german-for-nurses/)
