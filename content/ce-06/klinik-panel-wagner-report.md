# Adversariales Klinik-Panel (W6) — CE-06 · `ls-wagner-reanimation`

**Datei:** `content/ce-06/situationen/ls-wagner-reanimation/phases.ts`
**Stand:** 2026-07-14 (Re-Check) · **Geprüfte Steps:** 17 · **Kernfakten:** `reanimation-bls`, `notfallassessment`, `kpr-indikation-recht-ethik`
**Re-Prüfung (aktuell):** Puls-Fix — `erk-01b-hks-erkennen` kerntext + TrueFalse `erk-02` auf I care Pflege 3. Aufl. 2025 umgestellt (F-03: erfahrene Pflegekraft darf Karotispuls tasten, aber NUR zeitgleich zur Atemkontrolle, max. 10 Sek., keine Extra-Zeit)
**Vorherige Re-Prüfung:** AED-Branching `erm-02` — „Patienten nicht berühren, Analyse läuft" + Hände-weg-Pause (F-14)

## Verdikt: ✅ PASS — 0 HOCH-Befunde

Alle vier deterministischen Skript-Lenses + der semantische 5. Lens grün. Der 2025-Puls-Fix ist verbatim gegroundet, in sich und zum eigenen TrueFalse widerspruchsfrei und verzögert die CPR nicht.

Panel = Vorlage, nicht letztes Wort. **Die Gründerin bleibt Backstop.**

---

## Re-Check des aktuellen Updates (Karotispuls — I care 2025)

**Steps:** `ce06-wagner-erk-01b-hks-erkennen` (Wissens-Tab, `kernfaktId ["F-01","F-02","F-03"]`) + `ce06-wagner-erk-02` (TrueFalse, `kernfaktId ["F-03"]`). Kernfakt **F-03** (`reanimation-bls.md`) auf I care 2025 umgestellt.

| Prüffrage | Ergebnis |
|---|---|
| Fachlich korrekt / aktuell (I care 2025 + ERC 2021)? | **Ja.** ERC 2021 / I care 3. Aufl. 2025: Routine-Pulskontrolle vor CPR-Beginn wird nicht empfohlen (fehleranfällig), ABER ausreichend erfahrenes Personal *soll* die Karotispuls-Kontrolle **zeitgleich mit der Atemkontrolle** (max. 10 Sek.) durchführen. Genau so formuliert der kerntext. |
| Verbatim-gegroundet? | **Ja.** F-03 belegt auf `icare-pflege-3aufl-volltext/icare-pflege-3aufl.txt`: „soll zeitgleich mit der Atemkontrolle eine Pulskontrolle an der Arteria carotis durchführen" + „max. 10 Sekunden versuchen, den Karotispuls zu" — zusätzlich `pflege-heute` „Eine Prüfung des Kreislaufs vor Beginn der Wiederbelebung wird auch für professionelle Helfer nicht mehr generell empfohlen". `zitat-verifizierer --check-file reanimation-bls.md` = **19/19 ✅**. |
| Verzögert der neue Text die CPR? | **Nein.** Der kerntext bindet das Tasten explizit an „nur zeitgleich zur Atemkontrolle und höchstens zehn Sekunden … Verschenk dafür keine extra Zeit: Bleiben Reaktion und normale Atmung aus, wird sofort reanimiert." Kein separater Zeitblock, keine Verzögerung. |
| Kein Widerspruch zum eigenen TrueFalse `erk-02`? | **Nein — konsistent.** Statement „Bevor ich mit der Reanimation beginne, muss ich zuerst sicher den Puls tasten" = **falsch** (korrekt aufgelöst). Die Auflösung nennt exakt die 2025-Nuance: „Nur ein Erfahrener darf gleichzeitig kurz (max. 10 Sek.) den Karotispuls tasten, während er nach anderen Lebenszeichen sucht." Der kerntext sagt „darfst … zeitgleich"; das TrueFalse widerlegt nur das „zuerst/muss" (also die *verzögernde, verpflichtende, vorgeschaltete* Pulskontrolle). Beide Aussagen decken sich. |
| Kein Widerspruch zum ALS-Teil (post-Schock)? | **Nein.** `erm-02`/`erm-03` lehren weiterhin „nach dem Schock ohne Pulscheck sofort weiterdrücken" (No-Flow minimieren) — das ist der *intra-CPR*-Kontext und ein anderer Moment als die *Erkennungs*-Pulskontrolle. Semantisch sauber getrennt. |
| Konsistenz C1/B1 | Beide Sprachvarianten tragen die Botschaft stimmig; B1-Lernsnack: „Kein Pulstasten — direkt in die Rettungskette" (didaktische Vereinfachung Richtung „im Zweifel nie verzögern") widerspricht der C1-Präzision nicht. |

---

## Deterministische Lenses

**Lens 1 — Arzneimittel-/Zahlen-Sicherheit (W1)** ✅ `klinik-panel` Zahlen-Lens **0**. 5–6 cm (F-06), 100–120/min (F-07), 30:2 (F-08), Adrenalin alle 3–5 Min (F-10), **Pulskontrolle max. 10 Sek./nicht generell/zeitgleich Atemkontrolle (F-03, I care 2025)** — alle verbatim. Helferwechsel ~2 Min bewusst als ERC-Organisationsempfehlung deklariert.

**Lens 2 — Recht & Ethik / Standards-Currency** ✅ `standards-currency-check ce-06`: **0** Treffer. § 323c StGB (F-04), § 221 StGB (F-05), **§ 1827 BGB** (aktuelle Fassung seit 01.01.2023, kein § 1901a/§ 1906-Drift). KPR-Indikation korrekt (F-01/F-02).

**Lens 3 — DNQP-/Standard-Konformität · Step-Grounding (W2)** ✅ `step-grounding-check ce-06`: PASS, **claim-tragend 15 · gegroundet 15**, 0 Dangling. BLS/ALS folgt ERC 2021; Puls-Handling jetzt über F-03 auf I care 2025 belegt; AED-Handhabung über F-14; SBAR korrekt auf `notfallassessment/F-07` (Leonard 2004).

**Lens 4 — Konsistenz** ✅ Wagner-Alter 67 = SBAR; SBAR-Background deckungsgleich mit `patient.ts`; 17 stepIds, keine Duplikate; Wagner (keine PV → reanimieren) vs. Frau Kellner, 84 (gültige PV → NICHT) sauber kontrastiert.

**Lens 5 — Semantisch (pflege-validator)** ✅ `pflege-anti-pattern-check ce-06`: **0** Regex-Treffer. Alle falschen Optionen `isCorrect:false` mit korrigierender Widerlegung; „sofort Schock ohne Ansage" (erm-02) korrekt als gefährlicher Distraktor; Puls-vor-CPR („Fühl erst, ob er noch einen Puls hat!") ausschließlich als Distraktor/falsches Statement mit korrektiver Auflösung — „lehrt über Falsches", nicht „empfiehlt Falsches". Reflexion validierend (Sandwich).

---

## Beobachtung

**OBS-AED-ANALYSEPAUSE — AUFGELÖST** (Vor-Update, F-14). Der aktuelle Puls-Fix (F-03, I care 2025) ist ohne offene Beobachtung.

## Beschaffung
Keine. Alle Befunde belegt.
