# Recherche: Antwortzeit als Wissenssignal

**Datum:** 2026-03-21
**Kontext:** Adaptive Lernplattform Pflege — Multiple-Choice-Fragen
**Frage:** Ist die Antwortzeit ein valides Signal dafür, ob ein Schüler etwas wirklich weiß?

---

## 1. Was sagt die Forschung?

### Kernbefund: Ja, aber mit Einschränkungen

Bildungspsychologie und Kognitionswissenschaft bestätigen: Antwortzeit ist ein **valides, aber rauschbehaftetes** Signal. Die Beziehung zwischen Antwortzeit und Kompetenz ist **kurvilinear** (nicht linear):

- **Sehr kurze Zeit** (< 5 s bei komplexen Fragen): Hohe Wahrscheinlichkeit von Rapid Guessing — Schüler hat die Frage nicht gelesen.
- **Mittlere Zeit** (aufgabenabhängige "Sweetspot"-Zone): Höchste Antwortqualität, echtes Wissen.
- **Sehr lange Zeit** (> 3–4× Median): Kann Unsicherheit bedeuten — muss aber nicht. Könnte auch Leseproblem, Angst oder schwere Frage sein.

Quelle: [Curvilinear dependency of response accuracy on response time — ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0160289617302933)

### Rapid Guessing ist messbar

Forschung (Wise & Kong, 2005/2012) hat gezeigt: Antworten unterhalb von **10 % des item-spezifischen Mittelwerts** (max. 10 Sekunden) sind mit hoher Wahrscheinlichkeit Rapid Guesses — also nicht reflektierte Antworten.

Dieser Schwellenwert hat sich als **Goldstandard** für die Erkennung von Rapid Guessing etabliert.

Quelle: [Rapid Guessing Detection — MDPI Algorithms](https://www.mdpi.com/1999-4893/16/2/89)

---

## 2. Etablierte Modelle und Algorithmen

### Item Response Theory (IRT) — 3-Parameter-Modell

Das klassische 3PL-Modell enthält einen **Rateparameter (c)**, der die Wahrscheinlichkeit modelliert, durch Raten richtig zu antworten. Antwortzeit wird hier nicht direkt einbezogen — ist aber komplementär.

Quelle: [Item Response Theory — Wikipedia](https://en.wikipedia.org/wiki/Item_response_theory)

### Hierarchisches Modell (van der Linden, 2007)

Kombiniert IRT mit Lognormal-Response-Time-Modell:
- Level 1: Personenkompetenz ↔ Itemschwierigkeit → Antwortrichtigkeit
- Level 2: Personengeschwindigkeit ↔ Item-Zeitintensität → Antwortzeit

Das Modell nimmt an, dass Kompetenz und Geschwindigkeit **schwach negativ korreliert** sind: schnelle Schüler sind im Durchschnitt etwas weniger kompetent (Speed-Accuracy Tradeoff), aber der Effekt ist gering und individuell variabel.

### Mixture-IRT-Modelle (modernste Methode)

Neueste Ansätze klassifizieren Antworten in zwei latente Klassen:
- **Klasse 1:** Echtes Antworten (Kompetenz + Itemschwierigkeit bestimmen Zeit und Richtigkeit)
- **Klasse 2:** Rapid Guessing (zufällige Antwortzeit, Trefferquote ~ Ratewahrscheinlichkeit)

Quelle: [Mixture model for responses and response times — PubMed](https://pubmed.ncbi.nlm.nih.gov/31385609/)

### Duolingo — Birdbrain-Algorithmus

Duolingo nutzt eine logistische Regression inspiriert von IRT. Die Antwortzeit fliesst implizit ein (Schwierigkeit des Items wird aus Antwortmustern geschätzt), aber **nicht direkt als primäres Wissenssignal**. Der Fokus liegt auf Richtig/Falsch + Wiederholungsintervall.

Quelle: [How Duolingo's AI Learns — IEEE Spectrum](https://spectrum.ieee.org/duolingo)

### Anki / FSRS — Konfidenz statt Zeit

Anki (SM-2) fragt Schüler nach **Selbsteinschätzung** (Again / Hard / Good / Easy), nicht nach Zeit. Das neuere FSRS-Modell (seit Anki 23.10) modelliert Vergessenskurven mit höherer Präzision — ebenfalls ohne Antwortzeit als primäres Signal.

Quelle: [FSRS Spaced Repetition Algorithm — Anki Forums](https://forums.ankiweb.net/t/how-to-use-the-next-generation-spaced-repetition-algorithm-fsrs-on-anki/25415)

### AMBOSS

AMBOSS nutzt Spaced Repetition (Anki-Integration) und Schwächenanalyse auf Basis von Richtig/Falsch-Mustern. Antwortzeit ist kein dokumentiertes Signal in ihrem öffentlichen Algorithmus.

---

## 3. Pitfalls — Was kann schiefgehen?

### 3a. Langsame Leser

Pflegeschüler mit Leseproblemen oder niedrigem Leseniveau brauchen länger — **nicht** weil sie unsicher sind, sondern weil das Dekodieren des Textes Zeit kostet. Eine hohe Zeitstrafe ist hier ungerecht.

**Konsequenz:** Antwortzeit nie als Strafe einsetzen. Nur als kontextuelles Signal.

### 3b. Prüfungsangst

Test Anxiety erhöht Antwortzeiten messbar, auch bei kompetenten Schülern. In Computer-Adaptive Tests (CATs) wurde gezeigt, dass Angst die Validität der Messung beeinträchtigt.

Quelle: [Test Anxiety, Computer-Adaptive Testing — ERIC](https://files.eric.ed.gov/fulltext/EJ1054865.pdf)

**Konsequenz:** Zeitdruck nie sichtbar machen. Kein Countdown-Timer bei Pflegefragen.

### 3c. Sprachbarriere (B1 Deutsch)

Internationale Pflegeschüler lesen langsamer auf Deutsch — selbst wenn sie die medizinische Kompetenz besitzen. Forschung zeigt, dass Kognitive Last und Sprachprofil die gemessene Antwortzeit stark beeinflussen.

Quelle: [Cognitive Load and Language Test Items — Language Testing in Asia](https://languagetestingasia.springeropen.com/articles/10.1186/s40468-022-00163-8)

**Konsequenz:** Sprachbarriere-Flag im System: Wenn Schüler-Profil "Nicht-Muttersprachler" → Zeitfenster um Faktor 1.5 skalieren.

### 3d. False Positives bei High-Ability-Schülern

Sehr kompetente Schüler antworten manchmal sehr schnell — **weil** sie es wirklich wissen. Ein Threshold, der schnelle Antworten als "Rapid Guessing" markiert, bestraft sie zu Unrecht.

Forschung warnt explizit vor diesem False-Positive-Problem.

Quelle: [Enhancing Response Time Thresholds — Springer](https://link.springer.com/article/10.1186/s40536-020-00082-1)

### 3e. Speed-Accuracy Tradeoff

Manche Schüler antworten bewusst schnell mit mehr Fehlern — oder langsam mit mehr Richtigkeit. Beides ist legitime Lernstrategie. Die Zeit allein sagt wenig; erst die **Kombination** ist aussagekräftig.

---

## 4. Typische Schwellenwerte

| Fragetyp | Rapid-Guessing-Threshold | Erwartete Normalzeit |
|---|---|---|
| Einfache Faktenfrage (1 Satz) | < 3–4 s | 8–20 s |
| Mittelkomplexe MC (2–3 Sätze) | < 6–8 s | 20–45 s |
| Fallvignette (4–6 Sätze) | < 10–15 s | 45–90 s |
| Slow-Reader-Faktor (B1-Schüler) | × 1.5 skalieren | — |

**Goldstandard (Wise & Ma 2012):** Threshold = 10 % des item-spezifischen Mittelwerts, maximal 10 Sekunden.

Für unsere Plattform: **Item-spezifisch kalibrieren**, nicht universell.

---

## 5. Best Practices: Zeit + Richtigkeit kombinieren

Das stärkste Signal entsteht aus der **Kombination** beider Dimensionen:

```
Signal-Matrix:

                  RICHTIG          FALSCH
Schnell     │ Echtes Wissen  │ Rapid Guess    │
            │ (high confid.) │ (discard)      │
Mittel      │ Solides Wissen │ Lernbedarf     │
            │ (reinforce)    │ (retry)        │
Langsam     │ Unsicher aber  │ Schwäche,      │
            │ kompetent      │ erklären       │
            │ (flag: review) │ (Hilfe anb.)   │
```

### Empfohlene Kombinations-Formel (einfach implementierbar)

```typescript
type AnswerQuality = 'mastered' | 'known' | 'uncertain' | 'guessed' | 'unknown';

function classifyAnswer(
  correct: boolean,
  responseTimeSec: number,
  expectedTimeSec: number, // item-spezifisch kalibriert
  isNonNativeSpeaker: boolean
): AnswerQuality {
  const timeMultiplier = isNonNativeSpeaker ? 1.5 : 1.0;
  const adjustedExpected = expectedTimeSec * timeMultiplier;
  const rapidThreshold = Math.min(adjustedExpected * 0.10, 10);

  if (responseTimeSec < rapidThreshold) {
    return correct ? 'guessed' : 'guessed'; // Rapid guess — ignorieren
  }
  if (correct && responseTimeSec < adjustedExpected * 0.5) {
    return 'mastered'; // Schnell + richtig = sicher gewusst
  }
  if (correct && responseTimeSec < adjustedExpected * 1.5) {
    return 'known'; // Normal + richtig = bekannt
  }
  if (correct) {
    return 'uncertain'; // Langsam + richtig = unsicher, Review empfehlen
  }
  return 'unknown'; // Falsch = Lernbedarf
}
```

### Spaced-Repetition-Intervall nach Signal

| Signal | Nächste Wiederholung | Aktion |
|---|---|---|
| `mastered` | +14 Tage | Nur bestätigen |
| `known` | +4 Tage | Normal |
| `uncertain` | +1 Tag | + "Tipp" anzeigen |
| `guessed` | Ignorieren | Nicht in Berechnung |
| `unknown` | Sofort (gleiche Session) | Erklärung anbieten |

---

## 6. Konkrete Empfehlungen für unsere Plattform

### Tun

1. **Item-spezifische Zeitbaseline ermitteln:** Erste 50–100 Antworten pro Frage speichern → Median berechnen → Threshold = 10 % davon.
2. **Rapid-Guessing-Antworten aus Kompetenzberechnung herausfiltern**, aber trotzdem loggen.
3. **Nicht-Muttersprachler-Flag** im Nutzerprofil → Zeitfenster ×1.5.
4. **5-stufige Qualitätsklassifikation** (mastered / known / uncertain / guessed / unknown) statt binärem Richtig/Falsch.
5. **Antwortzeit unsichtbar** für Schüler — kein sichtbarer Timer, kein Zeitdruck.
6. Zeit nur als **internes Signal** nutzen — nie als Strafe oder sichtbare Metrik.

### Nicht tun

- Keinen universellen Zeitthreshold (z. B. "3 Sekunden = immer Raten") für alle Fragen.
- Keine sichtbaren Countdowns bei Wissensfragen (erhöht Angst, senkt Validität).
- Antwortzeit nicht allein als Wissenssignal — immer in Kombination mit Richtigkeit.
- Kein Abzug von XP/Hearts bei langsamen (aber richtigen) Antworten.

### Kalibrierungsstrategie (Phase 1)

Da initial keine Baseline existiert, starten wir mit konservativen Defaults und lernen iterativ:

- Faktenfragen: expected = 15 s
- Mittlere MC: expected = 35 s
- Fallvignetten: expected = 60 s
- Nach 100 Antworten pro Item: automatische Kalibrierung auf echten Median

---

## Quellen

- [Curvilinear dependency of response accuracy on response time — ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0160289617302933)
- [Rapid Guessing Detection: Optimal Threshold — MDPI Algorithms](https://www.mdpi.com/1999-4893/16/2/89)
- [Mixture Model for Responses and Response Times — PubMed](https://pubmed.ncbi.nlm.nih.gov/31385609/)
- [Enhancing Response Time Thresholds — Large-Scale Assessments in Education, Springer](https://link.springer.com/article/10.1186/s40536-020-00082-1)
- [Model-Based Treatment of Rapid Guessing — Journal of Educational Measurement, Wiley](https://onlinelibrary.wiley.com/doi/full/10.1111/jedm.12290)
- [Understanding Examinees' Item Responses through Cognitive Modeling — Springer](https://largescaleassessmentsineducation.springeropen.com/articles/10.1186/s40536-023-00158-8)
- [Test Anxiety and Computer-Adaptive Testing — ERIC](https://files.eric.ed.gov/fulltext/EJ1054865.pdf)
- [Cognitive Load and Language Test Item Difficulty — Language Testing in Asia](https://languagetestingasia.springeropen.com/articles/10.1186/s40468-022-00163-8)
- [How Duolingo's AI Learns What You Need to Learn — IEEE Spectrum](https://spectrum.ieee.org/duolingo)
- [Speed-Accuracy Tradeoff and Confidence — eLife](https://elifesciences.org/articles/43499)
- [Use of Response Time for Measuring Cognitive Ability — MDPI](https://www.mdpi.com/2079-3200/4/4/14)
- [Confidence Predicts Speed-Accuracy Tradeoff — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6711665/)
