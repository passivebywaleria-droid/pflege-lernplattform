# Adversariales Klinik-Panel (W6) + semantischer Lens — `ls-erlemann-organspende`

- **CE:** ce-06 · **LE5:** Organspende / Hirntod / Recht & Ethik
- **Thema-Grounding:** `specs/ce-06/kernfakten/organspende-hirntod.md` (F-01..F-10)
- **Datum:** 2026-07-13 (Re-Prüfung nach Currency-Update: F-04 geändert, F-10 neu)
- **Verdikt:** ✅ **PASS** — 0 HOCH, 1 MITTEL, 2 NIEDRIG (nicht-blockierend). Kein K.O. (K.O. nur bei ≥1 HOCH).

> Panel = umfassende Vorlage, nicht das letzte Wort. Die Gründerin bleibt menschlicher Backstop und kann jeden Befund overrulen.

---

## Prüf-Fokus dieses Updates

| Frage | Ergebnis |
|-------|----------|
| (1) „zwei qualifizierte Ärzte, beide erfahren, mind. einer Neuro" fachlich/rechtlich korrekt + konsistent über alle Steps? | ✅ Ja — konsistent in Tab B, Faustregel, Spektrum, Karteikarte, ala-01-Option + C1/B1-Erklärung. Substanz deckt sich mit der realen BÄK-Richtlinie (Vierte Fortschreibung 2015). |
| (2) Register-Ergänzung korrekt (zusätzlicher Weg, Entscheidungslösung unverändert, kein Widerspruch)? | ✅ Ja — F-10/Tab B setzen das Register ausdrücklich als *zusätzlichen* Weg; ohne Ausweis/Register → Angehörige nach mutmaßlichem Willen. Keine Widerspruchslösung. |
| (3) Entscheidungslösung durchgehend, „automatisch Spender" nur als widerlegter Distraktor? | ✅ Ja — „niemand automatisch Spender" positiv gesetzt; Widerspruchslösung nur in `erm-01` Option B (`isCorrect:false`) + explizit widerlegt. |
| (4) BÄK-Richtlinie-Detail plausibel als sichtbare Primärquelle? | ⚠️ Substanz ja — **aber** die zitierte Fassungsnummer „5. Fortschreibung" ist nicht belegt und widerspricht der eigenen Korpusquelle (siehe M1). |

---

## Deterministische Checks (ausgeführt)

| Check | Ergebnis | Detail |
|-------|----------|--------|
| `zitat-verifizierer --check-file organspende-hirntod.md` | ✅ PASS | 10 Beleg-Blöcke · **30/30 Verbatim-Belege** verifiziert (I care Pflege 7.6.5/12.6.3 + Pflege heute 43.14/6) |
| `step-grounding-check ce-06` | ✅ PASS | ls-erlemann: 10 claim-tragend / 10 gegroundet · 0 Dangling · 0 Missing |
| `pflege-anti-pattern-check ce-06` | ✅ PASS | 0 Funde (HOCH 0 / MITTEL 0 / NIEDRIG 0) |
| `standards-currency-check ce-06` | ✅ PASS | 0 Treffer — keine in der Registry gelistete veraltete Norm autoritativ verwendet |
| `klinik-panel ce-06 --situation ls-erlemann-organspende` | ✅ PASS | Zahlen 0 · Recht 0 · DNQP/Standard 0 · Konsistenz 0 |

> Hinweis: Die Standards-Currency-Registry (`recherche/standards-currency.json`) kennt aktuell nur die §1906a→§1831-Ablösung. Die BÄK-Fortschreibungs-Diskrepanz (M1) ist **nicht** registry-abgedeckt und wird deshalb erst vom semantischen Lens gefangen — Kandidat für einen neuen Registry-Eintrag (siehe Beschaffung).

---

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit → keine Befunde

Einzige belastbare Zahl (821 Lebertransplantationen 2017, davon 760 postmortal) ist verbatim aus F-07 (Pflege heute) belegt und korrekt als historisches „z. B."-Beispiel gekennzeichnet. Datum „2024" (Register) + „2012" (Entscheidungslösung) korrekt. Kein out-of-range Normwert im Content.

## Lens 2 — Recht & Ethik / Currency → 1 MITTEL (Prüf-Fokus)

Scharf geprüft, weil hier kritisch:

- **Rechtsstand ENTSCHEIDUNGSLÖSUNG (seit 2012):** durchgehend korrekt (erk/ala-00b, erm-01 richtige Option, F-05). „Niemand automatisch Spender" mehrfach positiv gesetzt.
- **Widerspruchslösung / „automatisch Spender":** erscheint **ausschließlich** als klar markierter Distraktor (`erm-01`, Option B, `isCorrect:false`), in der Erklärung explizit widerlegt („In Deutschland gilt die Entscheidungslösung, nicht die Widerspruchslösung"). Das ist **„lehrt ÜBER Falsches", nicht „empfiehlt Falsches"** — korrekt. **Kein HOCH.**
- **Organspende-Register (F-10, NEU):** korrekt als *zusätzlicher* Weg dargestellt (Ausweis ODER seit 2024 Register); ohne beides → Angehörige nach mutmaßlichem Willen. „Die Entscheidungslösung selbst bleibt dadurch unverändert" ist rechtlich zutreffend. Datum 18.03.2024 (BfArM) + Gesetz zur Stärkung der Entscheidungsbereitschaft (2020) korrekt. **Kein Widerspruch zur Widerspruchslösung.** Konsistent in Tab B kerntext/faustregel/karteikarte. (Register in `erm-01` nicht erneut erwähnt — zulässige Vereinfachung, da dort nur die Grundregel „keine eigene Entscheidung → Angehörige" geprüft wird.)
- **TPG definiert NICHT den Tod (F-02):** konsistent in erk-00b, erk-01, erm-02.
- **Hirntod-Feststellung = zwei unabhängige Ärzte ohne Transplantationsbezug (F-04):** konsistent in ala-00b, ala-01, erkennen-kontext.
- **BÄK-Qualifikations-Detail (F-04, GEÄNDERT):** „beide mehrjährige Intensiverfahrung bei schwer Hirngeschädigten, mind. einer Facharzt Neurologie/Neurochirurgie" — **inhaltlich korrekt** und deckungsgleich mit der realen BÄK-Richtlinie IHA (Vierte Fortschreibung 2015). Nicht korpus-verbatim (I care trägt nur „2 qualifizierte Ärzte … nicht in den Organspendeprozess direkt eingebunden"), sondern über die BÄK-Richtlinie als benannte Primärquelle geführt — legitim (wie ERC/§ BGB). **ABER:** Fassungsnummer „5. Fortschreibung" → siehe **M1**.
- **Pflege stellt keinen Hirntod fest / drängt nicht (F-03/F-09):** konsistent in erm-00b, erm-01, erm-02, ueb-01.
- **E1/E2 (ref-01/ref-02):** ausdrücklich wertneutral („keine Weltanschauung bewerten", „wertneutral gegenüber Überzeugungen").
- Standards-Currency-Registry: 0 Treffer (die BÄK-Fassung ist dort nicht gelistet).

## Lens 3 — DNQP-/Standard-Konformität (Grounding) → keine Befunde

Alle 10 claim-tragenden Steps tragen `kernfaktId` (F-01..F-10) und sind gegroundet; step-grounding-check PASS, keine Dangling-Refs. F-10 ist bewusst korpus-frei (amtliche Currency-Ergänzung, im Kernfakt transparent als „kein Korpus-Verbatim" markiert) — vom Grounding-Check nicht als claim-tragender Verbatim-Zwang behandelt, korrekt.

## Lens 4 — Konsistenz → keine Befunde

Patient Tobias Erlemann, 24, Motorradunfall/Hirnblutung, kein Organspendeausweis (und kein Register-Eintrag) — konsistent über alle 5 Phasen. Keine doppelten stepId, keine fremde patientId. KB-Marker durchgehend im LE5-Set {I.4, II.1, II.3, III.2, V.2}: erk-00b/erk-01/erm-01/erm-03/ref-02 = II.3; ala-00b/ala-01 = III.2; erm-00b/erm-02 = I.4; ueb-01 = II.1; ref-01 = V.2.

## Lens 5 — semantisch (pflege-validator)

- **Distraktor-vs-Empfehlung:** sauber getrennt; alle gefährlichen Aussagen (Widerspruchslösung, „Pflege gibt frei", „zur Zustimmung raten", „Zeitdruck aufbauen") in Falsch-Positionen mit korrekter Widerlegung.
- **Pseudo-Empathie / Realitätscheck:** „warmer Körper täuscht Leben vor" ehrlich benannt statt weichgespült — kein Anti-Pattern.
- **Step-Typ-Pflichten:** MC (Erklärung je Option + Standardverweis), truefalse (unzweideutig), branching (unterschiedliche Konsequenzen + realistische Reaktionen), reflection (keine T/F-Validierung), freetext (fachliche Kriterien + vorbildliche Musterantwort) — alle erfüllt.
- **Anrede:** Lernende mit „du" (auch „eine Grenze für dich"), Angehörige/Patient in 3. Person / gesiezt; kein Siez-Fehler an Lernende.
- Ein B1-Vereinfachungs-Detail → **N1**.

---

## Befunde

### M1 — MITTEL · Currency/Recht: BÄK-Richtlinie-Fassung „5. Fortschreibung" nicht belegt (widerspricht Korpus)
**Ort:** `specs/ce-06/kernfakten/organspende-hirntod.md` Z. 70 (F-04 Primärquelle) · `phases.ts` Z. 176 (`ala-00b` quellen) · Z. 245 (`ala-01` quellen).
**Beschreibung:** Als sichtbare Primärquelle wird die „BÄK-Richtlinie IHA (**5. Fortschreibung**, § 16 TPG)" zitiert. Die im selben Kernfakt genutzte Korpusquelle nennt die Richtlinie jedoch als **„Vierte Fortschreibung, Stand 13.08.19"** (`recherche/icare-pflege-volltext/icare-pflege.txt` Z. 135998). Eine „5. Fortschreibung" ist nicht belegt; der bekannte, aktuell maßgebliche Stand ist die **4. (Vierte) Fortschreibung (2015)** — genau die Fassung, die die zitierten Qualifikations-Anforderungen (beide intensiverfahren, mind. einer Neurologie/Neurochirurgie) einführte. Die **fachliche Substanz** von F-04 ist damit korrekt; falsch/unbelegt ist nur die **Fassungsnummer**. Das ist exakt die Art Norm-/Fassungs-Drift, die der Recht-&-Currency-Lens fangen soll (analog §1906a→§1831). Kein HOCH, weil dem Schüler kein falscher klinischer Inhalt gelehrt wird und die Nummer nur in `quellen[]`/Kernfakt steht (nicht im Erklärungstext der Optionen).
**Beleg:** I care Pflege 2020, Kap. 12.6.3 + Quellenverzeichnis „…Nr. 2 TPG, Vierte Fortschreibung … Stand: 13.08.19"; BÄK-Richtlinie IHA, 4. Fortschreibung, Dtsch Arztebl 2015.
**Empfehlung (kein Step-Code-Eingriff durch diesen Lens):** „5. Fortschreibung" → „4. (Vierte) Fortschreibung" in F-04 sowie in `ala-00b`/`ala-01` `quellen`, ODER einen verifizierten Beleg für eine echte 5. Fortschreibung vorlegen (sonst BESCHAFFUNG, nicht erfinden). Gründerin entscheidet als Backstop.

### N1 — NIEDRIG · B1-Vereinfachung engt „Neurologie ODER Neurochirurgie" ein
**Ort:** `ala-01` `explanationB1` der richtigen Option: „…und sind beide erfahren in der Intensivbehandlung (**einer aus der Neurologie**)."
**Beschreibung:** Die C1-Fassung nennt korrekt „mindestens einer Facharzt für Neurologie **oder Neurochirurgie**". Die B1-Verkürzung auf „einer aus der Neurologie" ist nicht falsch (Neurologie ist eine gültige Option), lässt aber die Neurochirurgie-Alternative weg. Rein didaktische Vereinfachung, kein Fachfehler.
**Empfehlung:** Optional „(einer aus Neurologie oder Neurochirurgie)" — nicht blockierend.

### N2 — NIEDRIG · Doku-Diskrepanz Glossar-Anzahl (kosmetisch, unverändert)
**Ort:** `content/ce-06/glossar.ts` vs. Task-Zählangabe.
**Beschreibung:** Frühere Task-Notiz nannte „9 neue Glossar-Einträge"; vorhanden sind 8 (fachlich korrekt, currency-sauber). Betrifft die Currency-Änderung nicht.
**Empfehlung:** Zählangabe auf 8 korrigieren oder 9. Eintrag ergänzen. Nicht blockierend.

---

## Beschaffung (Gründerin-Regel: nichts erfinden → fehlende Quelle beschaffen)

- **BÄK-Richtlinie IHA — korrekte Fassungsnummer/Beleg (zu M1):** Verifizierten Nachweis der aktuell gültigen Fassung der „Richtlinie gemäß § 16 Abs. 1 S. 1 Nr. 1 TPG zur Feststellung des irreversiblen Hirnfunktionsausfalls" beschaffen (BÄK-Original-PDF / Dtsch Arztebl). Bis dahin die korpus-belegte **Vierte Fortschreibung** verwenden. Kandidat für einen neuen Eintrag in `recherche/standards-currency.json`, damit die Fassungs-Drift künftig deterministisch (Lens 2) statt nur semantisch gefangen wird.
- Alle übrigen Kernfakten (F-01..F-09) verbatim verifiziert; F-10 amtliche Currency-Ergänzung (BfArM 18.03.2024) transparent als korpus-frei markiert — kein offener Verbatim-Beleg.
