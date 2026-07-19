# Text-Audit: ls-wagner-reanimation (CE-06)

**Geprüft:** 2026-07-19 (Auftrag Gründerin: „jeden Text in jedem Schritt")
**Files:** phases.ts (1135 Z.), patient.ts, situationen.ts (Eintrag Z. 104–130)
**Umfang:** 17 Steps (5 Phasen) + Patient + Situations-Eintrag; alle C1/B1-Textfelder
(kontext, body, fragetext, Optionen/explanation/feedback/patientResponse, transition,
storyAufhaenger, kerntext, faustregel, faustregelAbruf, spektrum, karteikarte, wusstestDuDas,
abschlussText, teaser).
**Maßstab:** I care Pflege 3. Aufl. (Kap. 23 Reanimation, Z. 94100–94541) wortwörtlich;
ergänzend Notfallmedizin-Volltext, kernfakten reanimation-bls / notfallassessment /
kpr-indikation-recht-ethik.

---

## Ergebnis vorab

Fachlich sauber. Alle sicherheitskritischen Zahlen, Reihenfolgen und Anweisungen sind
verbatim gegen I care belegt (5–6 cm, 100–120/min, 30:2, vollständige Entlastung mit
aufliegenden Händen, harte Unterlage, Helferwechsel ~2 Min, Pulskontrolle nur erfahren +
≤10 s zeitgleich, Schnappatmung = Stillstand, phone-first, Einzelhelfer bleibt). Kein
HOCH-, kein MITTEL-Finding. Die im Juli gesetzte Scope-Regel (Frage verspricht nicht mehr
als das Destillat beantwortet) ist eingehalten — die frühere No-Flow-Falle wurde bereits
korrigiert (erm-00b, Kommentar Z. 422–426). Drei NIEDRIG-Punkte + zwei PRÜFEN-Hinweise.

---

## Lens 1 — Halbwissen / Scope (Anlass des Audits)

Alle Abruf-/Karteikartentexte geprüft gegen ihren Kern-/Antworttext:

- **erk-01b** faustregelAbruf „Woran erkennst du den Stillstand — und was gilt bei
  Schnappatmung?" → Faustregel beantwortet beide Teile vollständig. OK.
- **ala-00b** faustregelAbruf „Was zuerst — und darfst du zum Defi laufen?" → Faustregel
  beantwortet beide Teile. OK.
- **erm-00b** faustregelAbruf bewusst auf „Warum ist jede Pause gefährlich?" verengt; die
  volle Technik (5–6 cm/100–120) steht im Kerntext + Karteikarte-Rückseite. Scope stimmt. OK.
- **ueb-01b** / **ref-00b** faustregelAbruf ↔ Faustregel deckungsgleich. OK.
- **erm-01** (sorting) enthält alle Kernparameter im Antwortset. OK.

Ein Rest-Punkt (F-03, siehe unten).

---

## Findings

### erkennen — ce06-wagner-erk-01b (inlineWissen)

#### F-01 (NIEDRIG): Karteikarte sagt kategorisch „Kein Pulstasten", der eigene Kerntext erlaubt es
- **Stelle:** phases.ts Z. 159 (karteikarte.rueckseite) bzw. Z. 163 (rueckseiteB1)
- **Zitat Karte:** „… Schnappen ist kein Atmen. Kein Pulstasten — direkt in die Rettungskette."
- **Zitat eigener Kerntext (Z. 116):** „Als erfahrene Pflegekraft darfst du ihn tasten — aber
  nur zeitgleich zur Atemkontrolle und höchstens zehn Sekunden lang …"
- **Beleg:** I care Pflege 3. Aufl., Z. 94195: „Nur erfahrene Pflegefachpersonen können
  parallel versuchen, den Karotispuls … zu tasten … Deswegen darf für die Pulsprüfung keine
  zusätzliche Zeit aufgewendet werden." (= kein routinemäßiges Tasten, aber kein absolutes Verbot).
- **Bewertung:** Die Verkürzung geht auf die sichere Seite (nicht tasten → schneller handeln),
  ist also nicht gefährlich, widerspricht aber wörtlich der Differenzierung, die derselbe
  Baustein lehrt. Reine Konsistenz-Politur.
- **Empfehlung:** Karte auf „Keine extra Zeit fürs Pulstasten — direkt in die Rettungskette"
  angleichen (deckt Faustregel-Aussage, ohne die 10-s-Ausnahme zu leugnen).

### erkennen / alarmieren — erk-01b + ala-00b (inlineWissen)

#### F-02 (NIEDRIG): „Rettungskette" mit „Überlebenskette" gleichgesetzt; 4. Glied fehlt
- **Stelle:** phases.ts Z. 116 („… Glied 1 der Rettungskette: Erkennen, Alarmieren, Drücken,
  Defibrillator") und Z. 259 („… die Rettungskette (bei der Reanimation auch Überlebenskette
  genannt): erkennen, alarmieren, drücken, mit dem Defibrillator schocken").
- **Problem:** Die genannten vier Glieder entsprechen der ERC-*Überlebenskette*, deren 4. Glied
  jedoch die **Postreanimationsbehandlung** ist — nicht die Defibrillation. „Rettungskette"
  (Laien-Erste-Hilfe: Absichern/Notruf/Sofortmaßnahmen/Rettungsdienst/Klinik) ist ein anderes
  Konzept. Die Gleichsetzung ist eine didaktische Vereinfachung, terminologisch unscharf.
- **Bewertung:** Klinisch nicht gefährlich; reine Begriffspräzision.
- **Empfehlung:** Entweder konsequent „Überlebenskette" nennen oder das 4. Glied offener
  fassen (z. B. „… Defibrillation — und danach die Weiterversorgung").

### durchgängig — Lernenden-Rolle

#### F-03 (NIEDRIG): „du" mal Pflegeschülerin, mal „erfahrene Pflegekraft"
- **Stelle:** Z. 116 („Als erfahrene Pflegekraft darfst du ihn tasten") vs. Z. 798/762
  („… deine wichtigste Aufgabe als Pflegeschülerin", Spektrum „Deine Rolle als Schülerin")
  und Reflexions-Kontext Z. 848 (eine *zweite* Pflegeschülerin holt den Defi und weint).
- **Problem:** Die angesprochene Lernende ist überwiegend Schülerin, wird aber in erk-01b als
  „erfahrene Pflegekraft" adressiert — ausgerechnet beim erfahrenen-vorbehaltenen Pulstasten.
  Ein Schüler könnte den 10-s-Karotispuls fälschlich als *seine* Option lesen.
- **Bewertung:** Grenzt an die plattformweite „fortgeschrittene-Schülerin-in-Führung"-Setzung,
  daher NIEDRIG; nur die Puls-Formulierung ist der sensible Punkt.
- **Empfehlung:** In Z. 116 klarstellen, dass das Pulstasten *erfahrenen* Kräften vorbehalten
  ist (3. Person), statt „du … als erfahrene Pflegekraft".

---

## PRÜFEN (kein Beleg im Korpus — kein Finding)

- **AED-Elektrodenposition** (erm-02, Z. 523): „rechts unterhalb des Schlüsselbeins, links
  seitlich unter der Achsel" ist die korrekte anterolaterale Standardposition, im Repo-Korpus
  aber nicht verbatim auffindbar (F-14 belegt nur „Bildanweisungen des AED gefolgt"). Inhalt
  korrekt; nur der Verbatim-Beleg fehlt.
- **„Kammerflimmern = häufigster Rhythmus"** (ala-00b, Z. 259): durch Notfallmedizin-Volltext
  (Z. 30360: „tachykarde Rhythmusstörungen – meist Kammerflimmern – sind die Hauptursache für
  Todesfälle") ausreichend gedeckt; als getroffene Formulierung vertretbar.

---

## Konsistenz-Check (Lens 4) — bestanden

- Patient-Daten identisch über alle Phasen: Klaus Wagner, 67, instabile Angina, 2 Infarkte,
  VHF unter Apixaban, Diabetes, Adipositas BMI 31; SBAR (Z. 672) greift genau diese auf.
- Zeitachse stimmig: Kollaps 08:15 → HDM ab 08:16 → 1 Schock 08:19 (genau der eine Schock aus
  erm-02) → Verlegung ITS mit ROSC (Phase 5 + abschlussText).
- Defi-Standort durchgängig 30 m (ala/erm/ref).
- Kein „richtig hier / falsch dort"-Widerspruch zwischen Steps.
- Kleinere, unschädliche Reibung: patient.setting „08:15 (Ende Nachtdienst)" vs. erk-Kontext
  „mit dem Frühdienst" — beschreibt denselben Schichtwechsel, kein Fehler.

## B1-Drift (Lens 3) — bestanden

Stichprobenweise + vollständig für alle sicherheitskritischen Felder geprüft: B1 sagt fachlich
dasselbe wie C1, keine weggekürzte Bedingung, keine Bedeutungsverschiebung (inkl. 5–6 cm /
100–120 / 30:2 / „Kein Pulstasten"-Karte / SBAR / Patientenverfügungs-Regel).

---

## Zusammenfassung

- **HOCH:** 0
- **MITTEL:** 0
- **NIEDRIG:** 3 (F-01 Puls-Karte vs. Kerntext; F-02 Rettungs-/Überlebenskette; F-03 Rollen-Adresse „du")
- **PRÜFEN (kein Beleg):** 2 (AED-Position, Kammerflimmern-Häufigkeit) — Inhalt jeweils korrekt
- **K.O.-Verdikt:** **PASS** (kein HOCH). Die drei NIEDRIG sind Präzisions-Politur, keine
  Deploy-Blocker.

## Fix-Status (2026-07-19, Haupt-Session)
- F-01 ✅ Karteikarte: „Keine extra Zeit fürs Pulstasten" (C1+B1) — Widerspruch zum Kerntext beseitigt.
- F-02 ✅ „Überlebenskette"-Gleichsetzung ENTFERNT (beide Stellen) — Verbatim-Prüfung ergab: Prüfungswissen Tab. 3.22 definiert die Überlebenskette anders (4. Glied = erweiterte Maßnahmen/Postreanimationsmanagement, Erkennen+Notruf = EIN Glied). Die echte Überlebenskette jetzt wortgetreu als sonstBox in ala-00b + Quelle am Step. Die vier Handgriffe bleiben als situatives Gerüst („deine Rettungskette in dieser Situation").
- F-03 ✅ Pulstasten in 3. Person („erfahrenen Pflegefachpersonen vorbehalten"), C1+B1.
- PRÜFEN-Punkte (AED-Position, Kammerflimmern) bleiben dokumentiert, Inhalt korrekt.
