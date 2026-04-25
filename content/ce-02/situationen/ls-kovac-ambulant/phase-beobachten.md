# Phase 2 — Beobachten: Atembeobachtung, Gelenke, Schlaf, Flüssigkeit

**situationId:** ls-kovac-ambulant
**Zeit:** ~25–35 Min
**Bloom:** B3–B4
**Kern-Frage:** Was zeigt Frau Kovačs Körper heute? Welche Risikosignale erkennst du — und welche übersieht man leicht?
**Steps:** 6
**Brilliant-Prinzip:** Step 2.1 ist die Neugier-Frage VOR der Erklärung — du siehst die Befunde, bevor du weißt wie du sie einordnen sollst.

---

## Kontext

Frau Kovač sitzt im Sessel. Du hast das Gespräch eröffnet, das Trinkprotokoll liegt auf dem Tisch. Jetzt geht es darum, systematisch zu beobachten — mit deinen Augen, deinen Ohren, deinen Fragen. Bei COPD III ist das kein Routinecheck; was du hier übersiehst, wird beim nächsten Besuch schlimmer. Und du hast 45 Minuten.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 2.1 | `beob-01-atembeobachtung-brilliant` | **freetext** (kurz, Neugier-Frage) | B3 | **BRILLIANT-FRAGE.** Du schaust Frau Kovač an. Aufgabe: _"Beschreibe in 2-3 Sätzen was du bei der Atmung beobachtest, bevor du nachliest was 'normal' bei COPD ist."_ Erwartete Elemente: Atemfrequenz, Atemhilfsmuskulatur, Lippenbremse, Husten, Körperhaltung im Sitzen. Keine richtige/falsche Antwort — Sandbox zum Vorbereiten. KI-Feedback: "Du hast [X] erwähnt — das ist wichtig. Jetzt schau: Frau Kovač sagt: **Zitat Z2**: _'Heute Nacht hab ich gehusten. Viel. Der Schleim will nicht raus.'_" | pflege |
| 2.2 | `beob-02-copd-atemzeichen` | **text** (displayFormat: `checklist`) | B3 | Erklärungs-Step: Was du bei COPD beobachten musst. Checkliste mit 7 Punkten: Atemfrequenz (normal 12–20/Min — Tachypnoe = Warnsignal), Einsatz der Atemhilfsmuskulatur (Schulterheben = Zeichen schwerer Atemarbeit), Lippenbremse spontan aktiv?, Atemgeräusche (Giemen? Brummen? Pfeifen?), Sputum-Farbe (gelb-grün = Infektion, weiß-klar = normal), Körperhaltung (Kutschersitz reduziert Atemarbeit), SpO2 (falls vorhanden). Quelle: (GOLD-Report COPD 2023). B1-Version: Begriffe in einfacher Sprache, TTS aktiviert. | krankheitslehre |
| 2.3 | `beob-03-gelenke-assessment` | **categorize** | B4 | Du schaust dir Frau Kovačs Kniegelenke an. Kategorisierungsaufgabe: Befunde einordnen in [Normalbefund] / [Kontraktur-Zeichen] / [Akutes Warnsignal]. Karten: "Extensionsdefizit ca. 15° — Knie streckt sich nicht ganz" / "Rötung und Wärme am Knie" / "Schmerz bei Bewegung VAS 3/10" / "Haut über Knie gespannt, glänzend" / "Umfangsdifferenz linkes/rechtes Bein 2 cm" / "Morgensteifigkeit die sich nach 10 Min bessert". Trigger für Baustein-Einblendung wenn Fehleinordnung. Quelle: (MDS/Medizinischer Dienst 2018 — Kontrakturrisiko ambulant). | krankheitslehre |
| 2.4 | `beob-04-schlafanamnese` | **dialog** (3 Phasen) | B3 | Schlaf-Anamnese als Dialog. Du fragst Frau Kovač gezielt. Phase A — offene Frage: "Wann gehen Sie abends ins Bett?" Phase B — Frau Kovač antwortet: "Nach dem Film. So gegen elf, halb zwölf." Phase C — du fragst weiter: "Und wann schlafen Sie ein?" — Frau Kovač: "Lange. Ich lieg dann und denk. Dann schlaf ich, dann bin ich wieder wach. Um zwei hab ich aufgehört zu versuchen und den Fernseher angemacht." Du wählst die nächste Frage aus 3 Optionen: a) "Das klingt nach Schlafstörung — ich notiere das." b) "Sagen Sie mir: Haben Sie tagsüber mal Schlafepisoden?" c) "Das müssen Sie mit dem Arzt besprechen." **Beste Antwort: b** — Tagesschläfrigkeit ist diagnostisch wichtig (Insomnie vs. zirkadiane Störung). | pflege |
| 2.5 | `beob-05-trinkprotokoll-auswerten` | **calculation** | B4 | Aufgabe: Werteerfassung. Du nimmst das Trinkprotokoll von gestern. Eingetragen: 07:30: Kaffee 150 ml / 09:00: Wasser 100 ml / 12:00: Suppe 200 ml / 15:30: Tee 100 ml / 18:30: Abend-Kaffee 100 ml / 21:00: Wasser 150 ml. Frage: "Wie viel ml hat Frau Kovač gestern getrunken? Was fehlt bis zur Mindest-Tagesmenge von 1.500 ml (DNQP Kontinenzförderung 2014)?" Berechnung: Summe = 800 ml. Differenz zu 1.500 ml = 700 ml. Feedback: "800 ml ist deutlich unter dem Bedarf. Bei Furosemid-Einnahme und COPD ist eine angemessene Flüssigkeitszufuhr besonders wichtig, um Sekretverflüssigung zu unterstützen — aber Achtung: Nicht unbegrenzt trinken bei Herzinsuffizienz. Individuell abstimmen." | anatomie |
| 2.6 | `beob-06-oedeme-thrombose-blick` | **truefalse** (Mehrfach) | B4 | Thromboserisiko erkennen: 4 Aussagen wahr/falsch. 1) "Frau Kovač trägt keine Kompressionsstrümpfe und sitzt viel — das erhöht die Stase." (wahr) 2) "ASS ersetzt die Kompressionstherapie vollständig." (falsch — ASS wirkt auf Thrombozyten, nicht auf venöse Stase in tiefen Beinvenen) 3) "Bei Herzinsuffizienz mit Unterschenkelödemen ist die Thrombosegefahr erhöht." (wahr — Stase + Gewebsdruck) 4) "Wenn Frau Kovač keine Beschwerden hat, ist kein Thromboserisiko vorhanden." (falsch — Tiefe Venenthrombosen verlaufen oft symptomlos). Trigger für Baustein bei ≥2 falschen Antworten. | krankheitslehre |

---

## Optionale Steps

| # | Step-Typ | Bloom | Für wen | Inhalt |
|---|----------|-------|---------|--------|
| Opt-2.A | **flipcard** (4 Karten) | B2 | B1-Schüler | COPD-Stadien I–IV erklärt mit Alltagsvergleich (GOLD-Report 2023) |
| Opt-2.B | **text** (displayFormat: `scenario`) | B3 | Mittlere | Warum Lippenbremse hilft: Physikalische Erklärung PEEP-Effekt — Verhinderung von Atemwegskollaps |
| Opt-2.C | **slider** | B3 | Alle | Einschätzung: Wie hoch ist das Thromboserisiko bei Frau Kovač auf einer Skala 1-10? Begründe. Danach Auflösung mit Faktorenanalyse. |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| beob-03: Rötung nicht als Warnsignal erkannt | `kontraktur-prophylaxe-risikoassessment` | Sequencer wählt |
| beob-05: Berechnung falsch | `ernaehrungsassessment-fluessigkeit` | Stufe 3 |
| beob-06: ≥2 falsche Antworten Thrombose | `thrombose-prophylaxe-virchow-trias` | Sequencer wählt |

---

**Phase-2-Abschluss:** _"Du hast Frau Kovačs Zustand heute Morgen systematisch erfasst: Atemarbeit erhöht, Schlaf gestört, Trinkmenge deutlich zu gering, Gelenke kontrakturiert, Thromboserisiko erhöht. Alles gleichzeitig. Und du hast 45 Minuten. Wie planst du das?"_
