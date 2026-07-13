# Pflege-Review: ls-wagner-reanimation (CE-06, Reanimation Herr Wagner)

**Geprüft:** 2026-07-12
**Modus:** code (fertige `phases.ts`)
**File:** `content/ce-06/situationen/ls-wagner-reanimation/phases.ts`
**Fokus:** die 4 neuen Wissens-Tabs (inlineWissen) + 3 Anwendungs-Steps (2 mc, 1 reflection); KB-Marker
**Grounding:** `reanimation-bls.md`, `kpr-indikation-recht-ethik.md`, `notfallassessment.md`

**Mechanisierte Vor-Checks**
- `pflege-anti-pattern-check` → 0 Treffer in dieser Situation
- `standards-currency-check ce-06` → PASS (keine veraltete Norm; §1827/§323c/§221 aktuell)

---

## Findings

### 2) ALARMIEREN — `ce06-wagner-ala-00b-rettungskette` (inlineWissen)

#### F-01 (NIEDRIG): 'Rettungskette' vs. 'Überlebenskette' für die 4-Glieder-Kette
- **Stelle:** Z. 112 (erk-01b), Z. 230-231 (ala-00b), glossarBegriffe Z. 215/221
- **Problem:** Der Content nennt die 4-gliedrige ERC-Kette (erkennen → alarmieren → drücken → defibrillieren) durchgehend „Rettungskette". Die repo-Quelle `notfallmedizin-index/kap-rea.md` nutzt „Rettungskette" für den BLS-Ablauf (Deckung vorhanden) — ABER `pruefungswissen-index/kap-34.md` fragt explizit nach „die vier Schritte der **Überlebenskette**". In Prüfungen ist die 4-Glieder-ERC-Kette meist „Überlebenskette"; „Rettungskette" bezeichnet klassisch (DRK-Erste-Hilfe) eine 5-gliedrige Kette. Prüfungsorientierte Schüler könnten den Begriff mit einer Prüfungsfrage nicht matchen.
- **Standard-Verweis:** ERC 2021 (Chain of Survival = Überlebenskette); pruefungswissen-index/kap-34.md
- **Empfehlung:** „Überlebenskette" verwenden ODER beide Begriffe einmal gleichsetzen („Überlebenskette, auch Rettungskette genannt"). Inhalt (4 Glieder, phone-first-Reihenfolge) ist korrekt — nur Benennung präzisieren.

#### F-02 (NIEDRIG): „häufigster Auslöser" Kammerflimmern — Rhythmus vs. Ursache
- **Stelle:** Z. 231 (kerntext, letzter Absatz)
- **Problem:** „Der häufigste Auslöser eines plötzlichen Stillstands beim Erwachsenen ist das Kammerflimmern." Kammerflimmern ist ein **Rhythmus**, nicht die Ursache (Auslöser ist meist Myokardischämie/-infarkt). Kernfakt F-11 formuliert präziser: „häufigste **initiale Rhythmus** beim plötzlichen Herztod". „Auslöser" kann die Fehlvorstellung „VF = Ursache" stützen. (Innerklinisch/Normalstation sind nicht-schockbare Rhythmen sogar häufiger — hier aber beobachteter Kollaps + AED „Schock empfohlen", VF plausibel.)
- **Standard-Verweis:** reanimation-bls.md F-11
- **Empfehlung:** An F-11 angleichen: „der häufigste (schockbare) initiale Herzrhythmus … ist das Kammerflimmern" statt „Auslöser".

---

### Wissens-Tabs `ala-00b` / `erm-00b` / `erk-01b` (inlineWissen)

#### F-03 (NIEDRIG): quellen-Feld listet nur „ERC-Leitlinien 2021"
- **Stelle:** Z. 87, 206, 345 (quellen-Arrays)
- **Problem:** Die Tabs sind laut Kommentar auf F-04/F-05/F-11 bzw. F-06/F-07/F-08 (Pflege heute Kap. 14.3.1/14.3.2) gegroundet, das quellen-Feld nennt aber nur ERC 2021. Kein Fachfehler; die Primärquelle (Pflege heute), aus der die Kernfakten verbatim belegt sind, fehlt im sichtbaren Quellennachweis.
- **Standard-Verweis:** reanimation-bls.md (Verbatim-Belege aus pflege-heute-volltext)
- **Empfehlung:** „Pflege heute 2019, Kap. 14.3.1/14.3.2" ergänzen — konsistent zu den übrigen reanimation-Steps, die beide Quellen führen.

---

### 4) ÜBERGEBEN — `ce06-wagner-ueb-02-als-rolle` (mc)

#### F-04 (NIEDRIG): Distraktor „Zugang legen = ärztliche Aufgabe" — Vereinfachung
- **Stelle:** Z. 732-737 (Option 3 + explanation)
- **Problem:** Die explanation stellt „einen Zugang zu legen" pauschal als ärztliche Aufgabe dar. Ein periphervenöser Zugang ist grundsätzlich delegierbare Behandlungspflege (bei Qualifikation/Anordnung). Für eine PflegeSCHÜLERIN in der Reanimation ist eigenmächtiges Zugang-Legen + eigenmächtiges Adrenalin-Spritzen klar falsch — die Kernaussage (nicht eigenmächtig anordnen/spritzen) bleibt korrekt und deckungsgleich mit F-12.
- **Standard-Verweis:** reanimation-bls.md F-12; Rollenabgrenzung Anordnung/Durchführung
- **Empfehlung:** Optional Kern auf „eigenmächtig anordnen + spritzen" legen statt „Zugang legen ist absolut ärztlich". Kein Muss.

---

### `ce06-wagner-ueb-01b-als` (inlineWissen)

#### F-05 (NIEDRIG): themenSekundaer doppelt (Step-Ebene + inlineWissen)
- **Stelle:** Z. 642 (Step-Ebene) und Z. 653 (inlineWissen)
- **Problem:** `themenSekundaer: ["notfallassessment"]` steht doppelt; andere Tabs führen es nur im inlineWissen. Reine Struktur-Redundanz, kein Fachfehler.
- **Empfehlung:** Doppelung auf eine Stelle reduzieren (Schema-/Konsistenz-Feinschliff).

---

## Positiv-Befunde (fachlich geprüft, korrekt)

- **KPR-Indikation / Patientenwille** (`ref-00b-kpr-recht` + Frau-Kellner-MC): fachlich UND rechtlich korrekt. „Im Zweifel reanimieren"; Verzicht nur bei gültiger Patientenverfügung + ärztlicher Anordnung; Pflege entscheidet NICHT allein. Der Frau-Kellner-Gegenfall enthält bewusst BEIDE Bedingungen (gültige PV + ärztl. Verzichtsanordnung) → unzweideutig, kein „Pflege entscheidet über Leben"-Fallstrick.
- **Rechtsstand aktuell:** § 1827 BGB (Patientenverfügung, seit Betreuungsrechtsreform 2023 — NICHT § 1901a), § 323c StGB (unterlassene Hilfeleistung), § 221 StGB (Aussetzung / anvertraute Person). Currency-Check PASS.
- **Rollenabgrenzung Pflege/Arzt** (ALS-Tab + als-rolle-MC): sauber. HDM/Assistenz = Pflege; Zugang + Medikamenten-Anordnung = Arzt; Pflege zieht nach Anordnung auf, spritzt NICHT eigenmächtig. „ALS ersetzt BLS nicht, es baut darauf auf" (F-12) korrekt.
- **BLS-Technik ERC-2021-konform:** 5-6 cm, 100-120/min, vollständige Entlastung, harte Unterlage, 30:2, nach Schock ohne Puls-Check sofort weiter, Helferwechsel ~alle 2 Min (F-06/F-07/F-08).
- **Phone-first + Einzelhelfer** (F-04/F-05): erst Notruf/Team, dann sofort HDM, Patient NICHT verlassen um AED zu holen; zu zweit namentliche Delegation (Zuschauer-Effekt adressiert).
- **Schnappatmung / keine Pulskontrolle** (F-01/F-02/F-03): agonale Atmung zählt NICHT als Atmung; keine routinemäßige Pulskontrolle vor Reanimationsbeginn.
- **AED durch Schülerin/Laien** ist bestimmungsgemäß (kein Rollenkonflikt); Elektroden anterolateral korrekt; „Alle weg!" + Sichtkontrolle vor Schock korrekt.
- **KB-Marker (kernfaktId)** aller neuen Steps decken sich mit den Kernfakt-Inhalten; SBAR-Step löst korrekt über themaPrimaer `notfallassessment`/F-07 auf.
- **Distraktoren** durchweg plausible Anfängerfehler (kein Karikatur-Bias); explanation/feedback für JEDE Option gefüllt; Sandwich in B1-Feedback vorhanden.
- **Reflexions-Steps** (ref-01 Belastung/Debriefing, ref-03 Notfallplan): fachlich fundierte systemPrompt-Kriterien; validierender, nicht bagatellisierender Umgang mit der weinenden Schülerin gefordert.

## Cross-Step-Probleme

Keine. Patientendaten (Wagner 67, instab. Angina, 2 Infarkte, VHF unter Apixaban) nur im SBAR-Step, widerspruchsfrei. Rettungskette 4 Glieder in erk-01b und ala-00b identisch. No-Flow-Prinzip konsistent über alle Phasen. Cross-Link `ls-rios-synkope` existiert.

## Zusammenfassung

- **0 Findings HOCH**
- **0 Findings MITTEL**
- **5 Findings NIEDRIG** (Terminologie-Präzision, Quellen-Doku, Distraktor-Feinschliff, Struktur-Redundanz)
- **Allgemein:** Kein Pseudo-Empathie-Bias, kein Anti-Pattern-Treffer. Standards- und Rechtsbezug explizit und aktuell. Rollenabgrenzung Pflege/Arzt didaktisch sauber. Alle Findings sind Feinschliff ohne Sicherheitsrelevanz.
- **K.O.-Verdikt: PASS**
