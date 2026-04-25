# Phase 5 — Evaluieren

## Metadaten

- **phase:** evaluieren
- **situationsTyp:** beratung
- **bloomRange:** [4, 5]
- **geschaetzteZeit:** 15-20 Min
- **tags:** pflege (65%), krankheitslehre (20%), anatomie (15%)

---

## Kontext (~230 Wörter)

Das Beratungsgespräch neigt sich dem Ende zu. Dr. Brinkmann ist jetzt im Zimmer — sie hat das Ende des Gesprächs mitbekommen. Frau Schneider hat geredet, zugehört, nachgedacht.

Jetzt ist es Zeit, den Stand zu klären: Was hat sie aus dem Gespräch mitgenommen? Wie fühlt sie sich? Und — die entscheidende Frage — was entscheidet sie?

Es gibt drei mögliche Antworten:
1. Sie lässt Mia heute impfen.
2. Sie bittet um Zeit — nächster Termin.
3. Sie lehnt für jetzt ab.

Alle drei Antworten sind zu respektieren. Kindeswohlgefährdung liegt hier nicht vor — Mia ist gesund, die Impfung ist nicht akut lebensnotwendig. Das Recht zur informierten Entscheidung gehört Frau Schneider. Deine Aufgabe ist es, sicherzustellen dass diese Entscheidung wirklich informiert ist — nicht dass sie die richtige Entscheidung aus deiner Sicht ist.

Das ist der Unterschied zwischen Beratung und Überredung.

---

## Kern-Steps (jeder Schüler sieht diese)

| # | Step-Typ | Bloom | Inhalt | Tag |
|---|----------|-------|--------|-----|
| K1 | dialog | B4 | Teach-Back: Du fragst Frau Schneider: 'Damit ich sicher bin, dass ich es verständlich erklärt habe — können Sie mir kurz sagen, was Sie über die Wakefield-Studie jetzt wissen?' Frau Schneider antwortet (gescriptet, Z5): 'Also ich habe verstanden: Die Studie damals war gefälscht, und seitdem wurde das in allen großen Studien widerlegt. Aber warum weiß das dann meine Freundin nicht?' Du wählst eine Antwort: (A) Kurz bestätigen + ihre Frage ernst nehmen und ansprechen (B) Die Frage übergehen, zur Entscheidung wechseln (C) Erklären, warum Desinformation sich schnell verbreitet (einfach, ohne abzuwerten). | pflege |
| K2 | mc | B4 | "Teach-Back ist eine Methode zur Überprüfung des Lernverstehens. Welche Aussage beschreibt den Kern von Teach-Back richtig?" — (A) Du fragst den Patienten, ob er alles verstanden hat (B) Du lässt den Patienten das Gehörte mit eigenen Worten wiedergeben (C) Du wiederholst die wichtigsten Informationen am Ende nochmal (D) Du testest ob der Patient sich die Informationen gemerkt hat. — Richtig: B. | pflege |
| K3 | branching | B5 | Frau Schneider trifft ihre Entscheidung. Drei Wege — je nach Branch in K1+K2: **Entscheidung A (impfen heute):** 'Okay. Ich lasse Mia heute impfen. Aber ich möchte das Infoblatt noch einmal mitbekommen.' → Deine Aufgabe: Würdige ihre Entscheidung professionell — nicht mit 'Sehr gut!' sondern mit Bestätigung ihres Prozesses. **Entscheidung B (nächster Termin):** 'Ich brauche noch Zeit. Kann ich beim nächsten Termin entscheiden?' → Deine Aufgabe: Einverstanden sein, Termin anbieten, keine Enttäuschung zeigen. **Entscheidung C (ablehnen):** 'Ich möchte Mia heute nicht impfen. Ich brauche mehr Zeit.' → Deine Aufgabe: Respektieren, Ablehnung dokumentieren, Rückkehroption offen halten. | pflege |
| K4 | reflection | B5 | "Frau Schneider hat sich entschieden — möglicherweise gegen deine persönliche Überzeugung. Wie fühlst du dich dabei? Was hilft dir, die Entscheidung zu respektieren, ohne innerlich zu urteilen?" (Keine Auswertung. Nur Raum für Reflexion.) | pflege |
| K5 | truefalse | B4 | 4 Aussagen zur Autonomie in der Beratung: 'Kindeswohlgefährdung liegt vor, wenn ein Elternteil eine STIKO-Empfehlung ablehnt' = falsch. 'Die Ablehnung einer Impfung ist rechtlich ein zulässiges Elternrecht' = wahr (§ 1629 BGB). 'Bei begründeter Kindeswohlgefährdung kann das Jugendamt eingeschaltet werden' = wahr. 'Hier, im Fall von Mia, liegt Kindeswohlgefährdung vor' = falsch (Mia ist gesund, Masern akut keine Bedrohung im Moment). | krankheitslehre |

---

## Optionale Steps (Sequencer wählt basierend auf Profil)

| # | Step-Typ | Bloom | Für wen | Inhalt | Tag |
|---|----------|-------|---------|--------|-----|
| O1 | text (interview) | B3 | Mittlere + C1 | Fiktives Interview: 'Was sagt Frau Schneider 2 Wochen nach dem Gespräch?' — Drei Versionen je nach Branch in K3. Zeigt: Respektvolle Beratung lässt die Tür offen. Überredung schließt sie. | pflege |
| O2 | freetext | B5 | C1 | "Wie hättest du das Gespräch geführt, wenn Frau Schneider grundsätzlich gegen Impfen wäre — nicht nur zögernd? Was würde sich an deiner Strategie ändern?" | pflege |
| O3 | text (glossary) | B1 | B1-Schüler | Glossar: Teach-Back, Autonomie, Kindeswohlgefährdung, informierte Einwilligung | pflege |

---

## Baustein-Trigger

| Trigger | Baustein-ID | Stufe |
|---------|------------|-------|
| K2-Falsch (A) — 'Ob verstanden?' | `patientenberatung-teach-back` | Stufe 2 oder 3 — Unterschied zwischen Fragen ob verstanden und Teach-Back |
| K5-Aussage 1 als wahr gewählt | `impfungen-masern-impfpflicht-ifsg` | Stufe 2 — Klärung was § 20a IfSG konkret bedeutet und was nicht |
| K4 immer | `patientenberatung-ziele` | Stufe 1 (Denkfrage Bloom 5-6): Wer entscheidet, was Beratungserfolg ist? |

---

## Feedback K1

**Antwort A (richtig — bestätigen + Frage ernst nehmen):**
"Genau. Du bestätigst, was sie richtig verstanden hat — und nimmst ihre Frage nach der Freundin ernst, ohne sie abzuwürgen. Das ist Teach-Back auf Augenhöhe: Du prüfst Verstehen und erzeugst gleichzeitig Vertrauen."

**Antwort B (übergehen):**
"Frau Schneiders Frage — warum ihre Freundin das nicht weiß — ist kein Ablenker. Es ist eine Frage, die zeigt: Sie denkt nach. Das Übergehen wirkt wie 'Das ist egal.' Desinformation nicht zu adressieren, lässt sie als offene Wunde. Nutze den Moment."

**Antwort C (Desinformation erklären):**
"Das ist eine wertvolle Ergänzung — wenn du es nicht abwertend formulierst. 'Falschinformationen verbreiten sich schneller als Korrekturen' (das stimmt, belegbar). Kathrin hat möglicherweise dasselbe gelesen wie Frau Schneider — früher, in derselben Community. Erkläre das sachlich, nicht als Kritik."

---

## Feedback K2

**Richtig (B):**
"Genau. Teach-Back lässt den Patienten das Gehörte mit eigenen Worten zurückgeben — das zeigt ob er es wirklich verstanden hat, nicht nur ob er nickt. 'Haben Sie alles verstanden?' führt fast immer zu 'Ja' — auch wenn das nicht stimmt."

**Falsch (A):**
"Das ist der häufige Fehler: 'Haben Sie alles verstanden?' ist keine Überprüfung. Wer nicht verstanden hat, sagt trotzdem oft 'Ja' — aus Höflichkeit, aus Scham, aus Erschöpfung. Teach-Back fragt nicht ob — es zeigt was."

**Falsch (C):**
"Das ist Wiederholung, nicht Teach-Back. Wiederholung kann helfen — aber sie zeigt nicht, ob die Person es wirklich verstanden hat. Teach-Back kehrt die Richtung um: Die Person erklärt dir."

---

## Adaptivitäts-Notiz

- **C1 + Vorerfahrung:** Alle Kern-Steps + O2. Reflexion ohne Glossar.
- **B2 + etwas Praxis:** Alle Kern-Steps + O1. Baustein Teach-Back wenn K2 falsch.
- **B1 + Anfänger:** Alle Kern-Steps + O3. Glossar aktiv. TTS für K5. Simplere Dialog-Prompts in K1.
