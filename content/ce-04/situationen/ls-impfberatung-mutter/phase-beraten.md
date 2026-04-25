# Phase 4 — Beraten

## Metadaten

- **phase:** beraten
- **situationsTyp:** beratung
- **bloomRange:** [4, 5]
- **geschaetzteZeit:** 25-40 Min
- **tags:** pflege (55%), krankheitslehre (25%), anatomie (20%)

---

## Kontext (~280 Wörter)

Frau Schneider hat zugehört. Sie hat Fragen gestellt. Du hast sachlich geantwortet. Jetzt kommt der härteste Teil — nicht weil du überzeugst, sondern weil du sie begleitest.

Beraten ist kein Verkaufsgespräch. Du stellst Fragen statt Behauptungen. Du öffnest Türen statt sie zuzuschlagen. Du machst Raum für ihre Unsicherheit, ohne sie darin alleine zu lassen.

Das Trichterprinzip: Weit anfangen (offene Fragen: Was ist Ihnen wichtig?), dann enger werden (Klärungsfragen: Was meinen Sie mit 'Nebenwirkungen'?), dann konkret (Was würde für Sie den Ausschlag geben?).

Und dann — mitten in das Gespräch hinein — passiert etwas Unerwartetes.

---

## Kern-Steps (jeder Schüler sieht diese)

| # | Step-Typ | Bloom | Inhalt | Tag |
|---|----------|-------|--------|-----|
| K1 | text (stepbystep) | B3 | SDM im Beratungsgespräch nach Elwyn (2012): Team Talk → Option Talk → Decision Talk. Kurzdarstellung. Frau Schneider befindet sich jetzt im Übergang Option Talk → Decision Talk. | pflege |
| K2 | dialog | B4 | Interaktiver Dialog: Meltem stellt Frau Schneider eine Frage. Du wählst: (A) 'Haben Sie sich das gut überlegt?' (B) 'Was würde für Sie den Ausschlag geben?' (C) 'Möchten Sie, dass wir heute impfen?' (D) 'Ich verstehe Ihre Sorge — was fehlt Ihnen noch an Information?' — Richtig: B oder D — beide öffnen das Gespräch. A und C schließen es. | pflege |
| K3 | chatSim | B5 | Kurzes Gespräch-Simulation (3-4 Exchanges). Frau Schneider sagt: 'Ich weiß einfach nicht. Was würden Sie tun, wenn Mia Ihre Tochter wäre?' Schüler tippt Antwort. Varianten gescriptet: (Professionell) 'Das kann ich für Sie nicht beantworten — aber ich kann Ihnen helfen, herausfinden was für Mia und für Sie stimmt.' (Unprofessionell) 'Ich würde sofort impfen.' KI bewertet nach SDM-Kriterien + Autonomie. | pflege |
| K4 | branching | B5 | **KOMPLIKATION 1:** Frau Schneider sagt: 'Das Kind meiner Freundin Kathrin hat nach der MMR-Impfung Autismus entwickelt. Kathrin ist sicher, dass das zusammenhängt.' Du entscheidest: **Branch A** 'Das ist ein Zufall — die Studie dazu ist widerlegt, und in Millionen-Studien wurde kein Zusammenhang gefunden' (sachlich richtig, aber ohne Empathie). **Branch B** 'Das klingt für Kathrin und Sie sehr beängstigend. Ich kann verstehen, dass das zweifeln lässt. Darf ich Ihnen erklären, was die Wissenschaft dazu sagt?' (Validieren + dann Fakten). **Branch C** 'Das ist Unsinn. Autismus hat nichts mit Impfungen zu tun.' (sachlich korrekt, kommunikativ katastrophal). | pflege |
| K5 | branching | B5 | **KOMPLIKATION 2:** Während ihr noch redet, öffnet sich die Tür. Dr. Brinkmann steckt den Kopf rein: 'Meltem, sind wir bald fertig? Das nächste Kind wartet schon 20 Minuten.' Du entscheidest: **Branch X** Du brichst das Gespräch ab: 'Ich glaube, Frau Schneider braucht noch einen Moment — dann kommen wir.' (zu passiv, Ärztin entscheidet allein). **Branch Y** Du sagst ruhig: 'Frau Schneider hat noch offene Fragen — wir sind gleich soweit. Ich informiere Sie.' (professionell, klare Kommunikation ohne Konfrontation). **Branch Z** Du sagst: 'Dr. Brinkmann, Frau Schneider ist noch nicht sicher — ich kann das hier nicht alleine entscheiden.' (Unsicherheit, Kompetenz abgegeben). | pflege |
| K6 | confidence | B4 | Slider: "Wie sicher bist du, Branch B (Komplikation 1) war die richtige Reaktion?" 1-10. Dann: Begründung lesen + Vergleich mit Einschätzung. | pflege |

---

## Optionale Steps (Sequencer wählt basierend auf Profil)

| # | Step-Typ | Bloom | Für wen | Inhalt | Tag |
|---|----------|-------|---------|--------|-----|
| O1 | text (procontra) | B3 | Alle | Trichterprinzip in der Beratung: Weit → enger → konkret. Beispiel-Fragen für jede Ebene im Impf-Kontext. | pflege |
| O2 | freetext | B5 | C1 + B2 | "Formuliere selbst eine Antwort auf Frau Schneiders Frage: 'Was würden Sie an meiner Stelle tun?' — in max. 3 Sätzen, SDM-konform, ohne paternalistisch zu sein." | pflege |
| O3 | text (glossary) | B1 | B1-Schüler | Glossar: Trichterprinzip, Autonomie, Paternalismus, Anekdoten-Denken vs. statistische Evidenz | pflege |
| O4 | reflection | B5 | Alle | "Was fühlst du, wenn jemand etwas ablehnt, von dem du überzeugt bist, dass es richtig ist? Wie behältst du dabei deine professionelle Haltung?" (Abschluss der Beratungsphase — Selbstreflexion) | pflege |

---

## Branching-Auflösungen

### Komplikation 1 — Branch A (sachlich, aber ohne Empathie)
**Feedback nach Wahl A:**
"Du hast die Fakten korrekt dargestellt — und Frau Schneider hat abgeschaltet. Schau auf ihre Körperhaltung: Die Jacke wird wieder zugemacht. Sachlichkeit ohne Empathie wirkt wie 'Deine Sorge zählt nicht'. Das war die richtige Information zur falschen Zeit. Merke: Erst validieren, dann informieren."

**Konsequenz in Story:** Frau Schneider lehnt sich zurück. Kurze Pause. Sie sagt: 'Ja. Sie haben wahrscheinlich Recht.' Aber es klingt wie ein Abschluss, nicht wie eine Öffnung. Das Gespräch friert ein.

### Komplikation 1 — Branch B (Validieren + Fakten) ← EMPFOHLENER WEG
**Feedback nach Wahl B:**
"Genau. Du hast ihre Emotion ernst genommen — und danach Raum für die Fakten geöffnet. Frau Schneider fühlt sich gehört, nicht belehrt. Das ist der Unterschied zwischen 'Ich widerlege dich' und 'Ich begleite dich'. Merke: Validieren bedeutet nicht zustimmen — es bedeutet: Ich nehme dich ernst."

**Konsequenz in Story:** Frau Schneider atmet aus. Sie schaut dich direkt an. Sie sagt: _'Okay. Ich höre Ihnen zu. Aber bitte erklären Sie mir, nicht reden Sie mit mir.'_ Jetzt öffnet sich das Gespräch wirklich.

### Komplikation 1 — Branch C (Konfrontation)
**Feedback nach Wahl C:**
"Das ist sachlich korrekt — und kommunikativ ein Fehlschlag. 'Das ist Unsinn' sagt Frau Schneider: Deine Freundin ist naiv und du auch. In Sekunden ist das Gespräch vorbei. Merke: Auch richtige Aussagen können Beratung zerstören, wenn sie ohne Empathie kommen."

**Konsequenz in Story:** Frau Schneider steht auf. 'Ich glaube, wir brauchen heute keine Impfung. Danke.' Sie geht.

---

### Komplikation 2 — Branch X (zu passiv)
**Feedback nach Wahl X:**
"Du hast das Gespräch zwar nicht abgebrochen — aber du hast die Ärztin entscheiden lassen, ob weitergemacht wird. Das wirkt auf Frau Schneider wie: 'Ich stehe nicht wirklich hinter diesem Gespräch.' Klarer ist: Du kommunizierst direkt, was du brauchst."

### Komplikation 2 — Branch Y ← EMPFOHLENER WEG
**Feedback nach Wahl Y:**
"Genau das. Du kommunizierst klar, ohne die Ärztin zu konfrontieren. Frau Schneider sieht: Diese Pflegeperson nimmt mein Gespräch ernst, auch wenn die Ärztin Zeitdruck hat. Das stärkt deine Glaubwürdigkeit."

### Komplikation 2 — Branch Z (Unsicherheit)
**Feedback nach Wahl Z:**
"Du hast deine Kompetenz abgegeben — genau in dem Moment, wo Frau Schneider Verlässlichkeit braucht. Du darfst Grenzen signalisieren — aber als Erwachsene, nicht als jemand der rettend auf die Ärztin wartet."

---

## Adaptivitäts-Notiz

- **C1 + Vorerfahrung:** Alle Kern-Steps + O2 + O4. Feedback nach Branching kurz.
- **B2 + etwas Praxis:** Alle Kern-Steps + O1 + O4. Baustein SDM-3-Talk aktiv.
- **B1 + Anfänger:** Alle Kern-Steps (vereinfachte Dialog-Prompts) + O1 + O3. Glossar aktiv. Vor K4: kurzer Vorbereitungstext "Was ist Anekdoten-Denken?" (Baustein Stufe 3 vorab).
