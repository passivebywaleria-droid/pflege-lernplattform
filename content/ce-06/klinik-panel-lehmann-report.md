# Adversariales Klinik-Panel — ce-06 · `ls-lehmann-sturz-sht`

**Geprüft:** 2026-07-13 · **Datei:** `content/ce-06/situationen/ls-lehmann-sturz-sht/phases.ts`
**Panel:** W6 4-Lens (deterministisch) + 5. semantischer Lens (pflege-validator-Rolle)
**Fokus:** 3 neue Wissens-Tabs `erk-01b-bewusstlos-check`, `erm-00b-blutstillung`, `erm-02b-fem-bettgitter`

## Verdikt: ✅ PASS — 0 HOCH-Befunde

---

## Deterministische Lenses (Skript, 0 Drift)

| Lens / Skript | Ergebnis |
|---|---|
| Klinik-Panel (4 Lenses gesamt) | ✅ 0 HOCH · 0 MITTEL · 0 NIEDRIG |
| L1 Arzneimittel/Zahlen (`klinik-zahlen-check`) | ✅ 0 out-of-range |
| L2 Recht & Ethik (`standards-currency-check`) | ✅ 0 Treffer (kein §1906/1906a) |
| L3 DNQP/Standard (`step-grounding-check`) | ✅ 10/10 claim-tragend gegroundet, 0 dangling |
| L4 Konsistenz | ✅ 0 Dubletten / Fremd-IDs |
| Anti-Pattern-Regex (`pflege-anti-pattern-check`) | ✅ 0 Funde |
| Faktentreue (`faktentreue-check`) | ✅ 0 ungedeckte Instrumente, Coverage 100% |
| Zitat-Verifizierer (Kernfakten) | ✅ 12/12 Verbatim-Belege verifiziert |

---

## Lens 1 — Arzneimittel-/Zahlen-Sicherheit → PASS

- **Apixaban** korrekt als **Wirkstoff** (DOAK / Faktor-Xa-Hemmer), nicht als Markenname. Korpusbelegt (pflege-heute 3×, zusätzlich AWMF-VTE, notfallmedizin, paetz, icare).
- **Keine erfundenen Dosen** — der Blutverdünner wird ausschließlich qualitativ (Blutungsrisiko) behandelt, nie mit Dosierung.
- `Marcumar` steht nur im Kernfakt-Verbatimbeleg (F-05), taucht im Content **nicht** auf — sauber.
- Alter **86** erscheint genau 1× (SBAR), keine widersprüchliche Altersangabe.

## Lens 2 — Recht & Ethik / Currency → PASS

- Durchgängig **§ 1831 BGB (Fassung ab 2023)** in erm-02, erm-02b, erm-03, Reflexion. **Kein** §1906/1906a.
- FeM-Logik fachlich vollständig: Genehmigung Betreuungsgericht · akute Gefahr kurzfristig zulässig + **unverzüglich nachholen** · Vorrang milderer Mittel · Einbindung Arzt/bevollmächtigte Tochter · einseitiges Gitter = keine FeM.
- Verbatim-Belege aus `leitlinien-volltext/bgb-1831.txt` verifiziert.

## Lens 3 — DNQP-/Standard-Grounding → PASS (mit 1 Beschaffungs-Notiz)

Zuordnung der neuen Tabs sauber: Tab A = F-01/02/03/04, Tab B = F-06/07, Tab C = F-08.
Alle abgefragten Claims gegroundet (Bewusstsein ansprechen+anfassen, Schwerhörigkeit täuscht, Lage nicht verändern, en bloc, SHT→verzögerte Hirnblutung, Antikoagulation→Klinik/CT, sterile Kompresse+leichter Druck, Druckverband, Wärmeerhalt, FeM).

**→ siehe Beschaffungs-Sektion (L5-SEM-01).**

## Lens 4 — Konsistenz → PASS

- 11 stepIds, alle unique (keine Dublette).
- Kein Item „hier korrekt / dort falsch": beidseitige Bettgitter **durchgängig** falsch/FeM (Distraktor in erm-02, Wissen in erm-02b, truefalse in erm-03).
- Patientendaten konsistent über alle Phasen: Apixaban · Osteoporose · Vorhofflimmern · „dritter Sturz in sechs Monaten" · Demenz · bevollmächtigte Tochter.

## Lens 5 — Semantisch (dieser Agent) → PASS

- **Distraktor vs. Empfehlung:** Alle Anti-Pattern (gedämpftes/Nacht-Licht, „Glück gehabt / ist ja nichts passiert", „unter den Achseln greifen", beidseitige Bettgitter, Hochheben) erscheinen **ausschließlich als falsche Optionen** und werden korrektiv aufgelöst. Nichts davon wird empfohlen.
- **Pseudo-Empathie:** vermieden — „Rücksicht über ruhige Stimme, nicht über Halbdunkel"; Reflexion trennt explizit nächtliches Orientierungslicht (Prophylaxe) vom falschen gedämpften Inspektionslicht.
- **Cushing-Trias** bewusst nicht behauptet (Korpus belegt nur Cushing-Syndrom) — Kommentar-Deklaration im Code stimmt.
- **Wiederbegegnung Wagner** (Tab A) fachlich richtig: Wagner (keine Reaktion + keine normale Atmung → HKS → reanimieren, Lage ändern) vs. Lehmann (reagiert + atmet → nicht bewegen, WS-Verdacht).
- **Step-Typ-Pflichten** erfüllt: MC mit `explanation` je Option, branching mit divergenten Konsequenzen/Patientenreaktionen, truefalse eindeutig + Standardverweis, reflection mit Sandwich-`systemPrompt`. inlineWissen ohne Antwort-Step → Play-then-Gate unverschoben.

---

## Beschaffungs-Sektion (Gründerin-Regel: fehlende Quelle → Beschaffung, nichts erfinden)

### L5-SEM-01 · NIEDRIG · kein K.O. · Status: BESCHAFFUNG

**Step:** `ce06-lehmann-erm-00b-blutstillung` (+ Spiegelung in `erm-01`)
**Claim:** „Bei tastbarer Knochenstufe / Verdacht auf Schädelbruch **kein** punktueller, kräftiger Druck — nur locker steril abdecken."
**Befund:** Fachlich korrekt und sicherheits-konservativ (Standard-Erste-Hilfe: kein Direktdruck auf mögliche Impressionsfraktur). Aber diese spezifische Ausnahme steht **nicht** in den zugeordneten Kernfakten F-06/F-07 (die decken sterile Kompresse + leichter Druck + Druckverband + Wärmeerhalt) und findet **keinen Verbatim-Beleg** im Korpus (pflege-heute: kein Treffer für „Schädelbruch"+„kein Druck" / „Knochenstufe" / „Impression").
**Beleg-Lage:** sterile Kompresse ✅ („sterilen Kompressen"), leichter Druck ✅ („leichtem Druck"), Druckverband ✅ (F-06). Nur die **Knochenstufen-Ausnahme ist ungegroundet.**
**Fix-Vorschlag:** Verbatim-Beleg aus Erste-Hilfe-/Notfallquelle (pflege-heute Kap. 14 Kopf-/Schädelwunde oder `notfallmedizin-volltext`) beschaffen und als F-06b/F-09 in `traumatologische-erstversorgung.md` ergänzen — **oder** die Aussage als allgemeinen Vorsichtshinweis weicher formulieren. **Kein K.O.**, da die Aussage fachlich richtig ist und eher schützt als gefährdet.

### Transparenz-Hinweise (kein Handlungsbedarf)

- **L5-SEM-02** „Licht voll einschalten für Inspektion": kein Korpus-Verbatim, aber durch `pflege-konformitaet.md` ausdrücklich als korrektes Muster vorgeschrieben + ABCDE-E ableitbar → regel-gedeckt, nicht erfunden.
- **L5-SEM-03** Deeskalation bei Demenz (erm-02): tragende Claims (Lage nicht ändern = F-01, Bettgitter = FeM = F-08) gegroundet; Deeskalations-Framing allgemeinprinzip-gestützt, kein falscher Fakt. Optional später mit Kommunikations-/Validation-Beleg verankern.

---

## Ergebnis

**PASS.** 0 HOCH in allen 5 Lenses. Die 3 neuen Wissens-Tabs sind literatur-belegt, currency-korrekt (§1831 ab 2023), konsistent und sauber als Wissen (ohne Antwort-Step) eingebaut. Einzige offene Position: 1 NIEDRIG-Beschaffungsnotiz (Knochenstufen-Druck-Ausnahme braucht einen Verbatim-Beleg oder weichere Formulierung). Die Gründerin bleibt menschlicher Backstop.
