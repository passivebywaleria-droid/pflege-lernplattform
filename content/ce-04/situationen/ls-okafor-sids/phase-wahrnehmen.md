# Phase: Wahrnehmen

## Metadaten

| Feld | Wert |
|------|------|
| phase | wahrnehmen |
| situationId | `ls-okafor-sids` |
| bloomRange | [1, 2] |
| geschaetzteMin | 15-20 |
| tags | pflege (50%), anatomie (15%), krankheitslehre (35%) |

---

## Kontext (~250 Wörter)

Du bist Anika, Auszubildende im 3. Lehrjahr, heute im Mehrsparteneinsatz in der Kinderarztpraxis von Dr. Ehrmann. Es ist kurz vor halb elf. Im Wartezimmer sitzen sechs Familien. Frau Dr. Ehrmann bittet dich, die Elternberatung zur U3 zu übernehmen, während sie die körperliche Untersuchung nachbereitet.

Du gehst in das kleine Beratungszimmer und öffnest die Tür. Frau Okafor sitzt auf dem Stuhl neben dem Schreibtisch. Baby Daniel schläft im Tragetuch an ihrer Brust. Sein Köpfchen liegt seitlich an ihr, Atem ruhig und gleichmäßig. Frau Okafor lächelt dich an.

Bevor du etwas sagst, nimmst du dir einen Moment. Du beobachtest: Wie sitzt Frau Okafor? Wie hält sie Daniel? Wie reagiert sie auf seine Bewegungen? Welchen Eindruck macht die Mutter-Kind-Beziehung auf dich?

Das ist keine Prüfungs-Checkliste. Es ist professionelles Wahrnehmen — der erste Schritt in jeder Beratung.

- kontextB1: Du heißt Anika. Du bist Auszubildende im 3. Jahr.
  Heute arbeitest du in einer Kinder-Arztpraxis.
  Du gehst in ein kleines Zimmer.
  Frau Okafor sitzt dort. Baby Daniel schläft bei ihr im Tragetuch.
  Sein Atem ist ruhig. Frau Okafor lächelt dich an.
  Bevor du sprichst, schaust du genau hin.
  Du fragst dich: Wie sitzt sie? Wie hält sie das Baby?
  Das ist der erste Schritt in der Beratung: wahrnehmen.

---

## Kern-Steps

| # | Step-Typ | Bloom | Inhalt | Tag |
|---|----------|-------|--------|-----|
| K1 | text (scenario) | B1 | Situationseinstieg: Was siehst du? Anika betritt das Beratungszimmer | pflege |
| K1-bodyB1 | — | — | Du gehst in das Beratungszimmer. Frau Okafor sitzt auf einem Stuhl. Baby Daniel schläft an ihrer Brust. Er liegt im Tragetuch. Sein Atem ist ruhig. Frau Okafor lächelt dich an. Du schaust genau hin — bevor du etwas sagst. | — |
| K2 | freetext | B1 | "Du hast Frau Okafor und Daniel jetzt eine Minute beobachtet. Was nimmst du wahr — bei Frau Okafor, bei Daniel, bei ihrer Beziehung?" | pflege |
| K2-bodyB1 | — | — | Du hast Frau Okafor und Daniel eine Minute beobachtet. Was siehst du bei Frau Okafor? Was siehst du bei Daniel? Was siehst du zwischen den beiden? Schreibe 2-3 Sätze. | — |
| K3 | flipcard | B2 | Bindungssignale in der Beobachtung — Vorderseite: Was zeigt eine sichere Mutter-Kind-Bindung in der Praxis? / Rückseite: Reaktion auf Signale, Blickkontakt, Anpassung an Babyrythmen, Trost-Kompetenz (Bowlby, Attachment 1969) | pflege |
| K3-bodyB1 | — | — | Bindung (= Attachment, Bowlby 1969) bedeutet: Das Baby fühlt sich bei der Mutter sicher. Zeichen einer guten Bindung: Die Mutter hört das Baby. Sie reagiert schnell. Sie tröstet das Baby. Das Baby beruhigt sich bei ihr. | — |
| K4 | reflection | B2 | "Frau Okafor kommt aus Nigeria. Sie bringt ihr Baby zum ersten Mal zu dir in die Beratung. Welche Haltung nimmst du mit in dieses Gespräch — und warum?" | pflege |
| K4-bodyB1 | — | — | Frau Okafor kommt aus Nigeria. Sie hat andere Erfahrungen als du. Sie hat andere Vorstellungen von Pflege und Familie. Das ist normal. Kultursensibel beraten heißt: Du respektierst ihre Erfahrungen. Du urteilst nicht. Du informierst. Was denkst du: Welche Haltung brauchst du in diesem Gespräch? | — |

---

## Optionale Steps

| # | Step-Typ | Bloom | Für wen | Inhalt | Tag |
|---|----------|-------|---------|--------|-----|
| O1 | text (stepbystep) | B1 | B1-Schüler | Bindungstheorie nach Bowlby (1969): Was ist Bindung? Sichere Basis, Schutzsystem — 5 Schritte erklärt | anatomie |
| O2 | matching | B2 | Mittlere | Bindungsverhalten zuordnen: Babylaut → Elternreaktion → Bedeutung (3 Paare) | pflege |
| O3 | text (quote) | B1 | Alle | Frau Okafors erstes Zitat: "Bei uns zuhause schlafen die Babys immer mit der Mama. Das ist doch natürlich, oder?" — Was löst dieser Satz bei dir aus? | pflege |
| O4 | text (glossary) | B1 | B1-Schüler | Kultursensible Beratung: Was bedeutet das? Nicht eurozentrisch urteilen, verschiedene Gesundheitsvorstellungen respektieren | pflege |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| K2: Schüler nennt keine Bindungszeichen | `gesundheitsfoerderung-kinder-bindung-grundlagen` | Sequencer wählt je nach Profil |
| K4: Schüler nennt keine kultursensible Haltung | `patientenberatung-kultursensibel` | Sequencer wählt |
| O3 aktiviert | Erklärungstext zu Gesundheitsvorstellungen im internationalen Vergleich | Stufe 2-3 |

---

## Didaktische Notizen

- **Brilliant-Prinzip hier:** K2 ist die Neugier-Frage. Schüler beschreibt zuerst eigene Wahrnehmung — bevor theoretisches Wissen kommt.
- **Keine Bewertung in dieser Phase:** Noch keine SIDS-Risiken benennen. Nur wahrnehmen, einlassen, haltungsreflektieren.
- **Kulturelle Dimension:** O4 und K4 etablieren früh die Grundlage für die kultursensible Beratung — das ist eine Schutzfunktion für spätere Phasen.
- **Patient sichtbar:** Frau Okafor und Daniel sind in jedem Step greifbar (Name, Situation, Zitat).
