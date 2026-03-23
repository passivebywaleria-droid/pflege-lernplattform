# Sprachentwicklung B1→B2→C1 — Recherche & Empfehlungen

Datum: 2026-03-21
Kontext: Pflegeausbildungs-Lernplattform mit internationalen Schülerinnen (oft B1-Niveau)

---

## 1. Wie schnell verläuft B1→B2 in immersivem Kontext?

**Forschungslage:**
- B1→B2 benötigt typischerweise **150–250 Stunden gezieltes Lernen**
- In Vollzeit-Immersionsprogrammen (20–30 Std./Woche): **2–3 Monate**
- In berufsbegleitendem Kontext (Pflegeausbildung + Plattform): realistisch **4–8 Monate**
- Schlüsselfaktor: Immersion — wer täglich Deutsch im Berufsumfeld verwendet, lernt deutlich schneller

**Pflegespezifisch:**
- Das Examen **telc Deutsch B1·B2 Pflege** ist der Branchenstandard für die Approbation
- Ca. 60% der medizinischen Fachbegriffe haben lateinisch/griechische Wurzeln — erkennbar für Lernende mit westeuropäischer Schulbildung
- Unterscheidung wichtig: Allgemeinsprache vs. **Berufssprache (Fachsprache Pflege)** — beides muss gemessen werden
- Pflegeschülerinnen erwerben Fachvokabular oft schneller als allgemeine Grammatik

**Konsequenz für die Plattform:**
- Separate Tracks verfolgen: (a) allgemeines Deutsch-Niveau, (b) Fachvokabular Pflege
- Pflegespezifischer Wortschatz darf bereits bei B1-Allgemeinsprache auf B2-Niveau sein — das ist normal und soll so angezeigt werden

---

## 2. Messbare Indikatoren für Sprachfortschritt

### CAF-Framework (Complexity, Accuracy, Fluency)
Die SLA-Forschung verwendet drei Dimensionen für Lernenden-Output:

| Dimension | Was gemessen wird | Wie messbar |
|-----------|-------------------|-------------|
| **Complexity** | Satzlänge, Nebensatzhäufigkeit, Vokabularbreite | TTR, MTLD, Satzbaum-Tiefe |
| **Accuracy** | Grammatikfehler, Rechtschreibung, Kasusendungen | Fehler pro 100 Wörter (Error Rate) |
| **Fluency** | Verarbeitungszeit, Lesedurchsatz | Zeit bis Antwort, Lesedauer pro Abschnitt |

### Konkrete Metriken aus Plattformdaten

**Aus Freitextantworten:**
- **Type-Token-Ratio (TTR)**: Verhältnis einzigartiger Wörter zur Gesamtwortzahl — steigt von A1 bis B2 signifikant
- **MTLD** (Measure of Textual Lexical Diversity): stabilere Alternative zu TTR bei kurzen Texten
- **Durchschnittliche Satzlänge**: B1 ~10–14 Wörter/Satz, B2 ~15–20 Wörter/Satz
- **Nebensatzquote**: Anteil der Sätze mit Relativsätzen, Konjunktionen (weil, obwohl, sodass)
- **Fachvokabular-Rate**: Anteil erkannter Pflegefachbegriffe aus Referenzliste

**Aus Lückentexten / Gap-Fill:**
- **Fehlerrate** bei grammatischen Formen (Kasus, Artikel, Konjugation)
- **Antwortmuster** bei Distraktoren — welche Falschantworten gewählt werden, zeigt spezifische Schwächen
- **Retry-Rate** (wie oft Lernende ein Item erneut versuchen)

**Aus Leseverhalten:**
- **Lesedauer pro 100 Wörter** — B1-Lernende lesen ~30–40% langsamer als B2
- **Scroll-Stopp-Punkte** bei komplexem Satzbau (passiv, Relativsatz)
- **Glossar-Aufrufe**: Häufigkeit zeigt Vokabular-Defizite

**Aus Multiple-Choice / Quiz:**
- **Diskriminanzindex** je Schwierigkeitsstufe — Antwortmuster über Levels hinweg
- **Zeitverbrauch pro Item** als Signal für Verarbeitungsaufwand

---

## 3. Wie messen bestehende Plattformen?

### Duolingo
- **Learning Quiz** alle **2 Wochen**: 5 Fragen, unabhängig vom Kursmaterial, kein Einfluss auf Fortschritt
- Adaptiver Algorithmus schätzt aktuelles Niveau aus Fehlerrate + Antwortgeschwindigkeit
- Separate Checkpoint-Quizze am Ende jeder Unit (Achievement Tests)
- Skill Decay: Algorithmus schätzt Vergessen aus Zeit + früherer Performance

### Babbel / DaF-Apps
- Explizite Einstufungstests (Placement Tests) am Anfang
- Laufende implizite Neuberechnung aus Richtigkeit der Antworten
- Keine öffentlich dokumentierte Passive-Measurement-Architektur

### Wissenschaftliche Tools (L2SCA, TAASSC, Auto Error Analyzer)
- **L2 Syntactic Complexity Analyzer**: automatische Analyse von Satzstruktur-Komplexität
- **Auto Error Analyzer** (Llama 3.3): Fehler pro 100 Wörter aus Freitext — kostengünstig, skalierbar
- **Readability-Metriken für Deutsch**: Lesbarkeitsindex (LIX), Flesch-Kincaid adaptiert für DE

---

## 4. Empfohlenes Reassessment-Intervall

| Intervall | Methode | Aufwand Lernende |
|-----------|---------|-----------------|
| **Kontinuierlich** | Passiv aus Quiz-Antworten (Hintergrund) | Null |
| **Alle 2 Wochen** | Mini-Quiz (5–8 Fragen, 3–4 min) | Sehr gering |
| **Alle 4–6 Wochen** | Vollständige Niveau-Neubewertung | Mittel (10–15 min) |

**Empfehlung für die Plattform:**
1. **Kontinuierlich passiv**: Jede Interaktion (Quiz, Lückentext, Freitext) fließt gewichtet in ein Rolling-Average-Modell ein
2. **Alle 3 Wochen**: Automatische Neuberechnung des geschätzten CEFR-Niveaus (kein expliziter Test nötig)
3. **Alle 6 Wochen**: Optionaler kurzer Diagnosetest (8 Fragen, ~5 min) mit direktem Feedback — angeboten, nicht erzwungen

Begründung: 3 Wochen entspricht ca. 15–20 aktiven Lernstunden in der Ausbildung — genug Datenpunkte für eine statistisch reliable Neuschätzung.

---

## 5. Passives Messen ohne explizite Tests

### Signale und ihre Gewichtung

```
Sprachniveau-Score = gewichteter Mittelwert aus:

  Quiz-Genauigkeit           30%  (Richtigkeit nach Schwierigkeit)
  Freitext-Komplexität       25%  (TTR + Satzlänge + Fachvokabular)
  Freitext-Fehlerrate        20%  (Fehler pro 100 Wörter via LLM-Analyse)
  Lesedauer                  15%  (Normiert auf Textlänge und -schwierigkeit)
  Glossar-Nutzungsrate       10%  (Umgekehrt: weniger = besser)
```

### Implementierung (technisch realistisch für MVP)

**Phase 1 — Einfach (MVP):**
- Score aus Quiz-Genauigkeit nach Schwierigkeit-Tags
- Einfache Wortlänge + Satzlänge aus Freitextantworten (clientseitig berechenbar)
- Kein LLM nötig

**Phase 2 — Erweitert:**
- TTR-Berechnung serverseitig
- Fachvokabular-Matching gegen Referenzliste (Pflegebegriffe aus telc B1/B2 Pflege Curriculum)
- Lesedauer-Tracking (Scroll + Time-on-Page)

**Phase 3 — KI-gestützt:**
- Nebius/Llama 3.3 für Fehleranalyse in Freitextantworten (anonymisiert)
- Prompt: "Analysiere diesen Pflegeschüler-Text. Zähle Grammatikfehler nach Typ. Antworte nur mit JSON."
- Kosten: ~0,001–0,003€ pro Freitext-Analyse

---

## 6. Empfehlungen für die Plattform (Zusammenfassung)

1. **Dual-Track messen**: Allgemein-Deutsch (A1–C1) + Fachsprache Pflege (separat) — beide anzeigen
2. **Passiv-First**: Keine expliziten Tests im Alltag, alles aus normaler Nutzung berechnen
3. **3-Wochen-Zyklus** für Niveau-Update, 6-Wochen-Zyklus für optionalen Diagnosetest
4. **Freitext-Analyse**: TTR + Satzlänge reichen für Phase 1; Fehlerrate via LLM für Phase 2
5. **Visuelles Feedback**: Sprachlevel-Badge im Profil (B1 → B1+ → B2) — motiviert Nicht-Muttersprachler sichtbar
6. **Lückentexte mit Fehlertypanalyse**: Häufige Fehlertypen (Kasus, Artikelgender, Konjunktiv) gezielt anzeigen
7. **Lesedauer tracken** ab Woche 1 — ist ein starkes, unsichtbares Signal für Niveau
8. **Referenzliste Pflegevokabular** aufbauen: ~500 Kernbegriffe aus telc B1/B2 Pflege als Grundlage

---

## Quellen

- [Humboldt-Institut — German Immersion Course System](https://www.humboldt-institut.org/en/german-courses/course-system/)
- [Preply — How Long Does It Take to Learn German?](https://preply.com/en/blog/how-long-does-it-take-to-learn-german/)
- [TERN Group — Do Nurses Need B1 or B2 German?](https://www.tern-group.com/blog/do-nurses-need-b1-or-b2-german-to-work-in-germany-heres-the-answer)
- [Duolingo Research — Methods for Language Learning Assessment at Scale](https://research.duolingo.com/papers/portnoff.edm21.pdf)
- [Duolingo Blog — How does Duolingo measure learning?](https://blog.duolingo.com/how-does-duolingo-measure-learning/)
- [ResearchGate — Lexical Complexity And Language Proficiency: CEFR Levels](https://www.researchgate.net/publication/381306129_Lexical_Complexity_And_Language_Proficiency_An_Investigation_of_Indices_Across_Cefr_Levels)
- [Cambridge Core — Automated analysis of common errors in L2 learner production](https://www.cambridge.org/core/journals/studies-in-second-language-acquisition/article/automated-analysis-of-common-errors-in-l2-learner-production-prototype-web-application-development/631312E8DD4EB9CE558EFF6FD16C6520)
- [CAL — Measuring Language Complexity](https://www.cal.org/adultspeak/assessment/complexity.html)
- [ICF Centrum — German B1/B2 for medical nursing staff](https://www.icf-centrum.de/en/services/qualification-programmes/courses-for-nursing-staff/german-b1-b2-for-medical-nursing-staff/)
- [EU-JER — Readability Assessment for Language Learners in German Textbooks](https://www.eu-jer.com/enhancing-readability-assessment-for-language-learners-a-comparative-study-of-ai-and-traditional-metrics-in-german-textbooks)
