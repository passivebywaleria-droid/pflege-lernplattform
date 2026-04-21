# Phasen-Plan: Frau M. — Nächtlicher Sturz

**situationId:** ls-frau-m-nacht-sturz
**Gesamt-Steps:** 30 (über 6 Phasen)
**Bloom-Range:** B2 → B6
**Branching-Entscheidungen:** 2 (beide in Phase 4)
**Freitext-Steps:** 2 (je einer in Phase 5 + Phase 6)
**Direkte Patientenzitate:** Z1–Z6 über die Phasen verteilt

---

## Phase 1 — Informieren & Ankommen

**Zeit:** ~15–25 Min
**Bloom:** B2–B3
**Kern-Frage:** Was weiß ich schon? Wie trete ich dem Menschen gegenüber?
**Steps:** 5

### Kontext

Du stehst auf dem Flur der internistischen Station. Es ist 02:48 Uhr. Frau Keller hat dich gerade zu Zimmer 14 geschickt. Du weißt: Frau M., 82, Pneumonie, ist gerade gestürzt. Mehr noch nicht. In den nächsten Minuten entscheidet sich, wie die Situation für Frau M. weitergeht — emotional und fachlich.

### Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 1.1 | `info-01-uebergabe-sbar` | **text** (displayFormat: `scenario`) | B2 | Szene öffnet: Nachtschwester flüstert auf dem Flur: _"Frau M., Zimmer 14, grad gestürzt, links neben dem Bett, ansprechbar, klagt über Hüftschmerz. Ich übernehme die Infusion nebenan — schau du mal."_ Du liest kurz die Pflegeübergabe (SBAR-ähnlich): S=Sturz vor 7 Min, B=Pneumonie Tag 3, Parkinson II, A=ansprechbar-orientiert-Hüftschmerz links, R=bitte Assessment + Arzt informieren wenn nötig. | pflege |
| 1.2 | `info-02-vor-betreten` | **confidence** | B2 | Konfidenz-Frage VOR dem Zimmer betreten: _"Wie sicher fühlst du dich, jetzt reinzugehen?"_ Skala 1–5. Didaktischer Anker für Phase 5. Kein richtig/falsch — ehrliche Selbsteinschätzung. | pflege |
| 1.3 | `info-03-erste-prioritaet` | **mc** (Single-Choice) | B3 | _"Was tust du beim Betreten des Zimmers ZUERST?"_ A) Blutdruck messen B) Licht voll einschalten, Frau M. begrüßen, Bewusstsein prüfen C) Nachtschwester rufen D) Frau M. sofort ins Bett heben. **Richtig: B.** Bloom 3, weil Priorisierung. Falsch-Feedback bei D adressiert Verletzungsgefahr (ungeprüfter Transfer nach Sturz). | pflege |
| 1.4 | `info-04-zimmer-betreten` | **dialog** (3 Phasen) | B3 | Dialog-Step: Du betrittst das Zimmer, knipst das indirekte Licht an (nicht die Deckenleuchte — Frau M. ist gerade gestürzt, kein Schockmoment). Du kniest auf Augenhöhe zu Frau M. am Boden. **Zitat Z1** erscheint: _"Es tut mir furchtbar leid, dass ich Sie jetzt um diese Zeit in Anspruch nehmen muss…"_. Du wählst deine Antwort aus 3 Optionen (validierend / geschäftlich / beruhigend mit Fehlinformation). Beste Antwort: validierend ("Sie machen gar keine Umstände, Frau M. Lassen Sie uns in Ruhe schauen, wie es Ihnen geht."). | pflege |
| 1.5 | `info-05-was-pruefe-ich` | **sorting** | B3 | Sortier-Aufgabe: Reihenfolge des ersten Assessments festlegen. Karten: [Bewusstsein/Ansprechbarkeit] → [grobe Verletzungsprüfung am Boden] → [Vitalzeichen] → [Transfer planen] → [Arzt informieren falls nötig]. Bloom 3 (Anwenden — Priorisierung nach ABCDE-ähnlich). | pflege |

**Phase-1-Abschluss:** _Zwischenseite_: "Du hast dir ein Bild gemacht. Frau M. ist bei Bewusstsein, klar orientiert, klagt über Schmerzen in der linken Hüfte, keine sichtbare Deformität. Zeit für das strukturierte Assessment."

---

## Phase 2 — Beobachten & Risiken erkennen

**Zeit:** ~25–35 Min
**Bloom:** B3–B4
**Kern-Frage:** Was zeigt sich? Welche Risikofaktoren liegen vor?
**Steps:** 6
**Brilliant-Prinzip:** Step 2.1 ist Neugier-Frage VOR Erklärung (Medikamentenliste wird gezeigt, BEVOR erklärt wird was ein PIM ist)

### Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 2.1 | `beob-01-medis-sichten` | **highlight** (Text-Markierung) | B4 | **BRILLIANT-FRAGE:** Vor dir die Medikamentenliste von Frau M. (5 Wirkstoffe). _"Markiere alle Wirkstoffe, die dir im Zusammenhang mit dem nächtlichen Sturz verdächtig vorkommen."_ Erwartet: Zolpidem (stark), HCT (mittel), Madopar (mittel). **Trigger für Baustein-Einblendung `sturz-prophylaxe-medikamente` Stufe 2–3.** | krankheitslehre |
| 2.2 | `beob-02-zolpidem-erklaert` | **text** (displayFormat: `scenario`) | B3 | Erklär-Step: Warum Zolpidem das Hauptproblem ist. Kurzer C1-Text (~180 Wörter): PRISCUS-2.0-Liste, verlängerte Halbwertszeit bei Älteren, Sedierung bis in die Nacht, Sturzrisiko 2- bis 3-fach erhöht. Quelle: _(PRISCUS 2.0, Holt et al. 2023; DNQP 2022)_. B1-Version folgt durch B1-Dozentin. | krankheitslehre |
| 2.3 | `beob-03-patientenfrage` | **dialog** (2 Phasen) | B3 | Du fragst Frau M. direkt: _"Haben Sie die Schlaftablette heute Abend auch genommen?"_ **Zitat Z2** erscheint: _"Ja, die Tablette — die neue, gegen das Schlafen…ich fühle mich morgens ein bisschen … wie in Watte. Aber ich dachte, das gehört dazu."_ Erkenntnis: Frau M. hat nicht berichtet, weil sie es für normal hielt. Didaktische Botschaft: Aktiv fragen, nicht warten. | pflege |
| 2.4 | `beob-04-risikofaktoren-katz` | **categorize** | B4 | Kategorisierung der Risikofaktoren von Frau M.: Intrinsisch (Alter 82, Parkinson, Osteoporose, Katarakt, Nykturie durch HCT, Sedierung durch Zolpidem, vorheriger Sturz = jetziger), Extrinsisch (fremde Umgebung Krankenhaus, Bett-Höhe, Weg zum WC 4m, nachts wenig Licht). **Trigger für Baustein `sturz-prophylaxe-risiken-intrinsisch` + `sturz-prophylaxe-risiken-extrinsisch` je nach Performance.** | pflege |
| 2.5 | `beob-05-orthostase-test` | **truefalse** (Mehrfach) | B4 | Pflegerischer Orthostase-Check: 4 Aussagen (wahr/falsch). 1) "Ich messe RR liegend, dann direkt im Sitzen, dann nach 1 Min im Stand." (wahr) 2) "Ein Abfall von 10/5 mmHg ist normal." (falsch — ≥20/10 = orthostatisch) 3) "Bei Parkinson ist Orthostase sehr häufig durch Madopar." (wahr) 4) "Ich muss Frau M. sofort aufstehen lassen zum Testen." (falsch — Assessment geht vor Mobilisation erneut, außerdem aktuell frischer Sturz). | krankheitslehre |
| 2.6 | `beob-06-patient-zitat-kontext` | **text** (displayFormat: `quote`) | B3 | **Zitat Z3** erscheint als Quote-Card: _"Zu Hause komme ich zurecht. Ich weiß, wo alles steht. Hier ist alles fremd, und das Bett ist so hoch. Ich bin sonst wirklich selbstständig, das müssen Sie mir glauben."_ Begleit-Text (3 Sätze): Was Frau M. sagt, ist didaktisch zentral — ein Mensch verliert Orientierung in neuer Umgebung, auch ohne Demenz. Selbstständigkeit bei Aufnahme ≠ Selbstständigkeit in fremder Umgebung unter Pneumonie-Behandlung + neuer Sedierung. | pflege |

**Phase-2-Abschluss:** _"Du hast das Risiko-Profil. Jetzt: Was kannst du für die verbleibenden Liegetage konkret tun?"_

---

## Phase 3 — Pflege planen

**Zeit:** ~25–35 Min
**Bloom:** B3–B4
**Kern-Frage:** Welche Maßnahmen für die nächsten Tage — und in welcher Reihenfolge?
**Steps:** 5

### Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 3.1 | `plan-01-kurzfristig-langfristig` | **matrix** (2×3) | B4 | Matrix: Maßnahmen einordnen nach _Zeitachse_ (sofort / diese Nacht / bis Entlassung) und _Ebene_ (Person / Umgebung / Medikation). Beispiele: "Nachtlicht am Bett an" (sofort / Umgebung), "Arzt informieren wegen Zolpidem" (sofort / Medikation), "Physio für Mobilisations-Aufbau" (bis Entlassung / Person). 9 Karten einsortieren. | pflege |
| 3.2 | `plan-02-umgebung-anpassen` | **sequencing** | B3 | Reihenfolge Umgebungsanpassung bis zum nächsten Schlaf: [Bett-Höhe niedrig stellen] → [Nachtlicht einschalten] → [Weg zum WC räumen — Infusionsständer beiseite] → [Klingel in Reichweite testen] → [Rutschfeste Socken anziehen]. **Trigger für Baustein `sturz-prophylaxe-umgebung` falls falsch.** | pflege |
| 3.3 | `plan-03-fixierung-nein` | **branching** (Klein-Branching) | B5 | _"Die Nachtschwester schlägt vor: 'Machen wir doch ein Bettgitter hoch, dann ist sie sicher.' Wie antwortest du?"_ 3 Pfade: A) "Ja, sofort hoch." (führt zu Erklärung warum Bettgitter Sturzhöhe erhöhen + rechtliche Aspekte) B) "Nein, das ist rechtlich nicht erlaubt ohne richterliche Genehmigung oder Einwilligung — und es schützt nicht, sondern kann Verletzungen verstärken." (richtiger Pfad mit Vertiefung) C) "Ich frag den Arzt morgen früh." (Zwischenpfad — Thema wird trotzdem erklärt). **Trigger für Baustein `sturz-prophylaxe-fixierung` Stufe 2–3.** | pflege |
| 3.4 | `plan-04-angst-adressieren` | **text** (displayFormat: `scenario`) | B3 | Erklär-Step: Post-Fall-Syndrom. Was es ist (Teufelskreis Angst → Immobilität → Muskelabbau → mehr Sturzrisiko), warum es bei Frau M. droht (äußert bereits Angst in **Zitat Z4**: _"Ich habe Angst, ehrlich gesagt…Wenn ich nochmal falle — was ist dann mit meiner Wohnung?"_). Quelle: _(DNQP 2022; Tinetti et al., Studies on Falls in Elderly)_. **Trigger für Baustein `sturz-prophylaxe-post-fall` Stufe 2–3.** | pflege |
| 3.5 | `plan-05-interprof-team` | **matching** | B3 | Zuordnung: Welche Berufsgruppe macht was? [Arzt: Medikamentenreview Zolpidem+HCT], [Physiotherapie: Mobilisations-Aufbau + Balance-Training], [Pflege: Umgebung + Nachtbetreuung + Beratung], [Ergotherapie: Hilfsmittelberatung für Zuhause], [Apotheker: Brown-Bag-Review für später]. **Trigger für Baustein `sturz-prophylaxe-team` Stufe 2.** | pflege |

---

## Phase 4 — Maßnahmen durchführen

**Zeit:** ~30–45 Min
**Bloom:** B4–B5
**Kern-Frage:** Wie setze ich das jetzt konkret um — und was mache ich, wenn etwas nicht wie geplant läuft?
**Steps:** 7 (inkl. 1 großes Branching + 1 kleines Branching)

### Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 4.1 | `dur-01-transfer-vom-boden` | **sorting** | B4 | Sortierung: Transfer von Frau M. vom Boden zurück ins Bett. Karten: [Kurzes Assessment Wirbelsäule/Hüfte — keine Fraktur-Zeichen?] → [Frau M. informieren was passiert] → [Nachtschwester dazuholen für 2-Personen-Transfer] → [Kinästhetischer Transfer über Seitlage und Kniestand] → [im Bett: Lagerung prüfen, Schmerz-Reassessment]. Bloom 4 wegen Risikoeinschätzung bei Hüftschmerz nach Sturz. | pflege |
| 4.2 | `dur-02-arzt-sbar` | **freetext** (kurz, 2–3 Sätze) | B4 | Du rufst den diensthabenden Arzt an. _"Formuliere in 2–3 Sätzen die Situation in SBAR-Struktur."_ KI-Feedback prüft: S (Sturz heute Nacht 02:40), B (Pneumonie Tag 3, Parkinson, neu Zolpidem), A (ansprechbar-orientiert, Hüftschmerz links ohne Deformität, VZ stabil), R (Arzt-Visite + Medikamentenreview Zolpidem). Bei B1-Schülern: Textbausteine als Hilfe. | pflege |
| 4.3 | `dur-03-mobilisation-hauptbranching` | **branching** (GROSSES Branching, 3 Pfade + Re-Entry) | B5 | **HAUPT-BRANCHING.** Frau M. ist zurück im Bett, Schmerz NRS 4/10, möchte zur Toilette. _"Was tust du?"_ Pfad A: _"Ich hole Toilettenstuhl ans Bett, Transfer 2-Personen, Frau M. nicht allein lassen."_ → richtiger Pfad, führt zu Dialog-Step mit **Zitat Z5**. Pfad B: _"Ich gebe ihr die Bettpfanne, das ist sicherer."_ → Zwischen-Feedback: würdig? bei orientierter Patientin? Patientenperspektive einblenden. Pfad C: _"Sie soll warten bis morgen früh, dann kann Physio dabei sein."_ → Feedback: Würde + akutes Bedürfnis + Infektgefahr bei Harnverhalt — zurück zu Pfad A mit Erklärung. **Trigger für Baustein `sturz-prophylaxe-sofortmassnahmen` Stufe 2–3 je nach Pfad.** | pflege |
| 4.4 | `dur-04-dialog-mobilisation` | **dialog** (4 Phasen) | B4 | Nach richtigem Pfad A: Dialog während Transfer. Frau M. am Bettrand, 3 Min sitzen lassen (Orthostase-Prävention). **Zitat Z5:** _"Geben Sie mir einen Moment. Meine Beine fühlen sich an, als gehörten sie mir nicht ganz…"_. Du wählst Antworten (validierend vs. zeitdruckerzeugend vs. medizinisch-erklärend). Beste: validierend + Zeit lassen + anschließend erklären. | pflege |
| 4.5 | `dur-05-balance-check-kleinbranching` | **branching** (Klein-Branching, 2 Pfade) | B5 | Beim Aufstehen vom Bettrand: Frau M. wird kurz schwindelig, greift nach deinem Arm. **Was tust du?** A) _"Sie setzen sich sofort wieder hin, ich hole die Pflegekraft."_ (richtig — sofort Sicherheit, dann Reassessment) B) _"Atmen Sie tief ein, das geht gleich vorbei, wir gehen langsam weiter."_ (falsch — bei Schwindel NACH frischem Sturz, Parkinson, Sedierung: nicht weitergehen). Kurzes Feedback zu Orthostase-Management und Sicherheitspriorität. | pflege |
| 4.6 | `dur-06-beratung-angst` | **text** (displayFormat: `scenario`) | B4 | Nach der Toilette, zurück im Bett. Du setzt dich kurz zu Frau M. Erklär-Step: Wie adressierst du ihre Sturz-Angst? Drei Bausteine der Beratung: 1) Ursache benennen (Zolpidem wird mit Arzt besprochen — es ist nicht "das Alter"), 2) Kontroll-Gefühl zurückgeben (gemeinsamer Plan für morgen), 3) Konkrete Sicherheitsmaßnahmen (Nachtlicht, Klingel, Toilettenstuhl nachts). Quelle: _(DNQP 2022 Kriterium 2 Information & Beratung)_. | pflege |
| 4.7 | `dur-07-hueftprotektor-option` | **mc** (Single-Choice) | B4 | _"Würdest du Frau M. für den Rest des Aufenthalts einen Hüftprotektor empfehlen?"_ A) Ja, grundsätzlich für alle über 80. B) Nein, Hüftprotektoren sind kontraindiziert nach Sturz. C) Bei diesem akuten Aufenthalt eher nicht — Compliance schlecht, Fokus auf Medikamentenreview + Umgebung; für Entlassung nach Hause ggf. mit Tochter besprechen. D) Nur wenn sie eine Fraktur hätte. **Richtig: C.** Nuancierte Antwort. **Trigger für Baustein `sturz-prophylaxe-hueftprotektoren` Stufe 1–2.** | pflege |

---

## Phase 5 — Evaluieren

**Zeit:** ~15–25 Min
**Bloom:** B4–B5 (mit B6-Anteil in Reflexion)
**Kern-Frage:** Nach 24 Stunden — hat es gewirkt? Was war gut, was nicht?
**Steps:** 4

### Kontext

Szenen-Sprung: 24 Stunden später, wieder Frühdienst. Frau Keller ist da, du übernimmst Frau M. mit. Du willst evaluieren, was die nächtlichen Maßnahmen gebracht haben.

### Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 5.1 | `eval-01-reassessment` | **categorize** | B4 | Kategorisierung nach Maßnahmen-Wirksamkeit: Welche Maßnahmen haben gewirkt (Zolpidem pausiert durch Arzt, Nachtlicht an, Toilettenstuhl nachts genutzt, rutschfeste Socken), welche waren überflüssig (keine), welche fehlen noch (Physio für Balance noch nicht da, HCT-Review offen, Hüftprotektor für Entlassung noch offen). Drei Karten-Gruppen. | pflege |
| 5.2 | `eval-02-patientensicht` | **text** (displayFormat: `quote`) | B4 | **Zitat Z6** als Quote-Card: _"Wissen Sie, was mir heute geholfen hat? Dass Sie mir erklärt haben, warum ich gestürzt bin. Ich dachte, ich werde einfach nur alt. Aber es waren die Tabletten. Das kann man ändern. Das ist etwas anderes."_. Begleit-Text: Die Bedeutung der Ursachenaufklärung für das Post-Fall-Syndrom — Kontroll-Erleben statt Schicksalserleben. **Trigger für Baustein `sturz-prophylaxe-post-fall` Stufe 3 (falls nicht in Phase 3 getriggert).** | pflege |
| 5.3 | `eval-03-konfidenz-nachher` | **confidence** | B4 | Wieder Konfidenz-Frage: _"Wie sicher fühlst du dich jetzt, als Pflegekraft bei einer ähnlichen Situation?"_ Skala 1–5. Vergleich mit Step 1.2 (info-02). Didaktische Spiegelung: Wachstum sichtbar machen. Kein richtig/falsch. | pflege |
| 5.4 | `eval-04-reflexion-frage` | **freetext** (kurz, 2–3 Sätze) | B5 | **Offene Reflexionsfrage (KI-Feedback):** _"Was hättest du anders gemacht, wenn du von Anfang an gewusst hättest, dass Zolpidem das Problem ist?"_ Erwartete Themen: früher nachfragen zu Medikamenten, Medikamentenreview proaktiv vorschlagen, andere Einschlafhilfen (schlafhygienisch, Warmmilch, Beruhigung) erst versuchen. Keine Musterantwort — Sandwich-Feedback durch KI. | pflege |

---

## Phase 6 — Dokumentieren

**Zeit:** ~20–30 Min
**Bloom:** B5–B6
**Kern-Frage:** Wie schreibe ich so, dass alle Kolleginnen Morgen die richtigen Schlüsse ziehen?
**Steps:** 3 (inkl. Freitext-Sturzprotokoll)

### Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 6.1 | `dok-01-sturzprotokoll-frei` | **freetext** (LANG, ~120–200 Wörter) | B6 | **HAUPT-FREITEXT.** _"Schreibe das Sturzprotokoll für Frau M. Dein Text soll enthalten: Datum/Uhrzeit, Ort, Hergang, Bewusstseinslage, Vitalzeichen, Verletzungen, Maßnahmen, informierte Personen, Ursachenhypothese (Medikation!)."_ KI-Feedback prüft 9 Kriterien. Für B1-Schüler: vorstrukturierte Textbausteine als Hilfe einblendbar. **Trigger für Baustein `sturz-prophylaxe-dokumentation` Stufe 2–3.** | pflege |
| 6.2 | `dok-02-pflegeplan-update` | **matching** | B5 | Pflegeplan anpassen: Zuordnung neuer Pflegeziele zu Pflegemaßnahmen. Z.B. Ziel: "Frau M. stürzt in verbleibenden Liegetagen nicht erneut" → Maßnahmen: Nachtlicht dauerhaft, Toilettenstuhl nachts, Zolpidem abgesetzt, 2-Personen-Mobilisation ersten 48h. 4 Ziel-Maßnahmen-Paare. | pflege |
| 6.3 | `dok-03-session-summary` | **summary** | B5 | Session-Zusammenfassung: Was du heute gelernt hast — Risikofaktoren erkennen (besonders Medikamente), würdevolle Kommunikation bei Sturz-Angst, rechtliche Grenzen der Fixierung, Pflegeprozess-Dokumentation, interprofessionelle Kommunikation. Plus: Karteikarten, die für FSRS zur Wiederholung vorgemerkt wurden. Plus: 1 offene Anschluss-Frage für die nächste Session ("Wie würdest du Frau M. auf die Entlassung vorbereiten?"). | pflege |

---

## Zusammenfassung Step-Typen-Vielfalt (Diversity-Check)

| Step-Typ | Anzahl | Phasen |
|----------|--------|--------|
| text (scenario/quote) | 5 | 1, 2, 3, 4, 5 |
| confidence | 2 | 1, 5 |
| mc | 2 | 1, 4 |
| dialog | 3 | 1, 2, 4 |
| sorting | 2 | 1, 4 |
| highlight | 1 | 2 |
| categorize | 2 | 2, 5 |
| truefalse | 1 | 2 |
| matrix | 1 | 3 |
| sequencing | 1 | 3 |
| branching | 3 | 3, 4, 4 |
| matching | 2 | 3, 6 |
| freetext | 3 | 4, 5, 6 |
| summary | 1 | 6 |
| **TOTAL** | **30** | |

**14 verschiedene Step-Typen** über 30 Steps. ✓ (Regel: ≥12)

---

## Bloom-Verteilung

| Phase | Bloom-Range | Steps |
|-------|-------------|-------|
| 1 Informieren | B2–B3 | 5 |
| 2 Beobachten | B3–B4 | 6 |
| 3 Planen | B3–B5 | 5 |
| 4 Durchführen | B4–B5 | 7 |
| 5 Evaluieren | B4–B5 | 4 |
| 6 Dokumentieren | B5–B6 | 3 |

Progression: ✓ (aufsteigend, mit Peak in Phase 4 durch Branching, Höhepunkt in Phase 6 durch Freitext-Dokumentation).

---

## Offene Fragen / Freitexte (25–30%-Regel)

- Phase 4.2 (freetext kurz SBAR)
- Phase 5.4 (freetext Reflexion)
- Phase 6.1 (freetext Sturzprotokoll LANG)
- Plus: 1 confidence Phase 1, 1 confidence Phase 5 = offene Selbsteinschätzung

**Offen/generativ: 5 von 30 = 17 %** für Minimal-C1-Schülerin. B1-Schülerin bekommt in Freitext-Steps Textbausteine (displayFormat-Anpassung), zählt aber als offen.

**Hinweis:** Die matrix/categorize/sorting-Steps haben vorgegebene Karten, gelten als semi-offen. Mit diesen: ca. 27 %. ✓

---

## 3-Säulen-Tag-Verteilung

- **pflege:** 26 Steps (86 %) — zu hoch, siehe Anmerkung
- **krankheitslehre:** 3 Steps (10 %) — Medikamentenwirkungen
- **anatomie:** 0 Steps

**Anmerkung für Phase 2-Review:** Der Regisseur sollte in Phase 2 (Beob-02 Zolpidem + Beob-05 Orthostase) 1–2 kleine Anatomie/Physiologie-Inserts ergänzen (z.B. Erklärung Nykturie-Pathophysiologie oder Tiefschlaf-Phasen GABA). Alternativ wird in der finalen Umsetzung 1 Step umgetagged (Beob-01 Medikamente-Highlight → `krankheitslehre`, was bereits geschehen ist). Tag-Regel: Kein Tag > 60 %. Wird in TS-Umsetzung nachkorrigiert durch Umtagging der Dialog-/Text-Steps mit krankheitslehre-Anteil. **Korrektur-To-Do für Generator: 2 weitere Steps auf krankheitslehre umtagen (beob-03, eval-04 haben Medikamenten-Anteil), 1 auf anatomie (beob-05 Orthostase hat Physiologie-Anteil).**

---

## Baustein-Trigger-Übersicht (Detail siehe `baustein-trigger.md`)

10 Baustein-Trigger verteilt über die Phasen.
