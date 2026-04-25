# Phase 4 — Durchführen: Atemübungen, Bewegung, Komplikationen

**situationId:** ls-kovac-ambulant
**Zeit:** ~30–45 Min
**Bloom:** B4–B5
**Kern-Frage:** Wie führe ich die geplanten Maßnahmen durch — und wie reagiere ich, wenn etwas nicht nach Plan läuft?
**Steps:** 7 (inkl. 2 Komplikationen mit Branching)

---

## Kontext

Es ist jetzt 08:00 Uhr. Du hast 30 Minuten bis du gehen musst. Der Plan steht: Atemübungen mit Lippenbremse, Bewegungsübungen für Knie und Sprunggelenke im Sitzen, Trinkprotokoll für heute festlegen, und kurze Schlafhygiene-Vorbesprechung fürs Abendgespräch. Frau Kovač sitzt im Sessel. Du beginnst mit den Atemübungen — sanft, weil du weißt: zu schnell, und sie wird kurzatmig.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 4.1 | `dur-01-atemuebungen-erklaert` | **text** (displayFormat: `stepbystep`) | B3 | Schritt-für-Schritt: Lippenbremse und Kontaktatmung in der ambulanten Pflege. 4 Schritte: 1) Frau Kovač in aufrechter Sitzposition (Sessel mit Rückenlehne, leicht vorgeneigt), Hände auf den Oberschenkeln. 2) Einatmen durch die Nase (2 Sek). 3) Ausatmen durch leicht geschlossene Lippen — wie durch einen Strohhalm (4 Sek). 4) Kurze Pause, dann wiederholen. Kontaktatmung: du legst sanft die Hände seitlich auf den unteren Brustkorb und gibst leichten Druck beim Ausatmen — propriozeptiver Reiz, der die Tiefatmung fördert. Wichtig: Nie mehr als 3–5 Wiederholungen am Stück bei COPD III (GOLD-Report 2023). | krankheitslehre |
| 4.2 | `dur-02-atemuebung-ausfuehren-mc` | **mc** (Single-Choice) | B4 | Frau Kovač macht die ersten 3 Wiederholungen mit. Du beobachtest. Frage: _"Was ist das wichtigste Zeichen, dass die Lippenbremse korrekt ausgeführt wird?"_ A) Die Patientin atmet schneller als vorher. B) Die Ausatmungsphase ist länger als die Einatmungsphase und das Pfeifen hörbar. C) Die Patientin hustet nach der Übung. D) Der Brustkorb hebt sich stark beim Einatmen. **Richtig: B** — verlängerte Ausatmung mit leichtem Widerstand an den Lippen ist das Wirkprinzip. Feedback bei A: Tachypnoe ist kein Ziel, sondern ein Warnsignal. Feedback bei C: Husten nach Atemübung kann vorkommen, ist aber kein Wirkzeichen. Feedback bei D: Costovertebrale Atmung allein ist nicht das Ziel — Zwerchfell und untere Thoraxanteile sollen aktiviert werden. | krankheitslehre |
| 4.3 | `dur-03-komplikation-kurzatmigkeit` | **branching** (KOMPLIKATION 1 — 3 Pfade) | B5 | **KOMPLIKATION 1: Kurzatmigkeit.** Nach der 4. Wiederholung lehnt sich Frau Kovač zurück, atmet flach, Atemfrequenz steigt auf ca. 22/Min, leichte Lippenzyanose. Sie sagt: _**Zitat Z4**: "Warten Sie kurz. Wenn ich schnell mach, wird mir schwindelig. Ich kenn das schon."_ Deine Reaktion: Pfad A) _"Ich unterbreche sofort, lasse sie aufrecht sitzen, öffne das Fenster, bleibe bei ihr. Wenn Zyanose zunimmt oder SpO2 unter 88% fällt — Notarzt."_ → Richtiger Pfad. Vertiefung: Kutschersitz erklären. Pfad B) _"Ich sage: 'Noch eine Runde, dann hören wir auf.' Es ist gleich vorbei."_ → Feedback: Beim COPD-III-Patienten mit Zyanose ist Weitermachen kontraindiziert. Erklärung der GOLD-Warnsignale. Pfad C) _"Ich rufe sofort den Notarzt."_ → Feedback: Bei bekannter COPD mit bekannter Belastungsdyspnoe ist das Abbrechen und Beobachten der erste Schritt. Notarzt bei anhaltender Verschlechterung (SpO2 <88%, Bewusstseinstrübung). Quelle: (GOLD-Report COPD 2023). | pflege |
| 4.4 | `dur-04-bewegung-knie-im-sitzen` | **sorting** | B4 | Frau Kovač hat sich erholt. Bewegungsübungen Knie und Sprunggelenk im Sitzen. Sortieraufgabe: Reihenfolge der Übungssequenz. Karten: [Warm up: Füße kreisen — Sprunggelenk mobilisieren, 10× je Seite] → [Knie: langsam strecken so weit möglich, halten 3 Sek, zurück — 5× je Seite] → [Fersenwippe: Ferse heben und senken — Wadenmuskel-Pumpe aktivieren] → [Bewusste Pause: Frau Kovač fragt ob Schmerzen bestehen] → [Abschluss: Beine kurz ausschütteln, Befindlichkeit erfragen]. Bloom 4 — Begründung der Reihenfolge: Warm-up vor Belastung, Pause als Evaluation, immer Schmerzkontrolle. | pflege |
| 4.5 | `dur-05-komplikation-sohn-datenschutz` | **branching** (KOMPLIKATION 2 — 3 Pfade) | B5 | **KOMPLIKATION 2: Sohn ruft an.** Mitten in den Bewegungsübungen klingelt das Telefon. Frau Kovač sagt: _**Zitat Z5**: "Das ist mein Darko. Darf ich kurz?"_ Sie telefoniert 2 Minuten, dann hält sie dir das Telefon hin: "Er möchte mit Ihnen sprechen. Er fragt wie es mir geht." Deine Reaktion: Pfad A) _"Ich sage Darko: 'Ihre Mutter ist heute Morgen wohlauf — für Details müssen Sie sich bitte direkt an den Pflegedienst wenden. Frau Kovač ist die Ansprechpartnerin, nicht ich per Telefon.'"_ → Richtiger Pfad. Erklärung: ohne dokumentierte Schweigepflichtsentbindung von Frau Kovač darf ich keine Gesundheitsdaten weitergeben, auch nicht an Angehörige (DSGVO 2018, Art. 9). Pfad B) _"Ich erzähle Darko den Gesundheitszustand kurz — er macht sich bestimmt Sorgen."_ → Feedback: Sorgen rechtfertigen keine Datenweitergabe ohne Einwilligung. Konsequenz: Pflegedienst kann haftbar werden (§ 203 StGB Schweigepflicht). Pfad C) _"Ich sage Frau Kovač: Sie entscheidet, was ich sagen darf."_ → Feedback: Korrekte Grundhaltung — aber auch Frau Kovač müsste das formal schriftlich autorisieren. Erkläre Schweigepflichtsentbindungs-Formular. Quelle: (DSGVO 2018, Art. 4 + Art. 9). | pflege |
| 4.6 | `dur-06-trinkmenge-vereinbaren` | **dialog** (2 Phasen) | B4 | Nach den Übungen: Trinkgespräch. Phase A — du zeigst Frau Kovač das Trinkprotokoll von gestern (800 ml). Erklärung: "Ihr Körper braucht mehr Flüssigkeit — auch damit der Schleim in der Lunge dünnflüssiger wird und sich leichter löst." Phase B — gemeinsam vereinbaren: Du stellst 3 Trinkbecher à 200 ml griffbereit auf den Küchentisch. Frau Kovač sagt: "Ich trink nicht gern viel, weil ich dann dauernd muss." — du antwortest (aus 3 Optionen wählen): a) "Das ist aber wichtig, also bitte schon trinken." b) "Das verstehe ich. Wir verteilen das über den Tag — je ein Becher morgens, mittags, nachmittags. Nicht auf einmal." c) "Beim Arzt besprechen wir das — ich notiere es." **Beste Antwort: b** — Motivierende Gesprächsführung: Hindernis anerkennen, Lösung anbieten. (DNQP Kontinenzförderung 2014). | pflege |
| 4.7 | `dur-07-schlahhygiene-vorgesprach` | **text** (displayFormat: `scenario`) + **confidence** | B3–B4 | Kurzes Vorgespräch Schlafhygiene vor deinem Abgang. Du sagst: "Heute Abend möchte ich mit Ihnen besprechen, warum das Fernsehen nach Mitternacht Ihren Schlaf beeinflusst. Nicht weil ich Ihnen sage, was Sie tun sollen — sondern damit Sie verstehen, was im Körper passiert." Frau Kovač nickt: "Na gut." — Das ist kein Ja, aber kein Nein. Erklär-Text (kurz, ~120 Wörter): Warum Blaulicht (TV) Melatonin-Ausschüttung hemmt, warum unregelmäßige Schlafzeiten den zirkadianen Rhythmus stören, besonders bei älteren Menschen (Melatonin-Produktion nimmt physiologisch ab). Confidence-Frage am Ende: "Wie sicher bist du, dass Frau Kovač heute Abend das Schlaf-Gespräch annehmen wird?" Skala 1–5. Keine richtige Antwort — Reflexions-Anker. | anatomie |

---

## Optionale Steps

| # | Step-Typ | Bloom | Für wen | Inhalt |
|---|----------|-------|---------|--------|
| Opt-4.A | **text** (displayFormat: `glossary`) | B1 | B1-Schüler | Fachbegriffe Phase 4: Lippenbremse, Kutschersitz, PEEP-Effekt, Zirkadiane Rhythmik, Melatonin |
| Opt-4.B | **flipcard** (4 Karten) | B2 | Mittlere | GOLD-Warnsignale COPD: Wann ist es ein Notfall? (SpO2 <88%, Bewusstseinstrübung, fehlende Reaktion auf Lageänderung, Zyanose zunehmend) |
| Opt-4.C | **chatSim** | B5 | Fortgeschrittene | Simuliertes Telefongespräch mit Darko Kovač — übe die richtige Formulierung bei Datenschutzanfragen von Angehörigen. KI spielt Darko, der wiederholt nachfragt. |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| dur-03: Pfad B oder C gewählt | `pneumonie-prophylaxe-copd-management` | Stufe 2–3 |
| dur-05: Pfad B gewählt | `pflegedokumentation-datenschutz` | Stufe 3 |
| dur-02: falsche Antwort | `pneumonie-prophylaxe-lippenbremse` | Sequencer wählt |

---

**Phase-4-Abschluss:** _"07:58 Uhr. Du packst deine Sachen. Frau Kovač sagt: 'Bis heute Abend dann.' Die Übungen sind gemacht, die Trinkbecher stehen bereit, das Datenschutz-Gespräch mit Darko ist geregelt. Was du jetzt weißt: Frau Kovač wird heute wahrscheinlich wieder allein fernsehen bis Mitternacht. Und du weißt, was du heute Abend sagen wirst."_
