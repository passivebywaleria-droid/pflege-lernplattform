# Adversariales Klinik-Panel + semantischer 5. Lens — `ls-gruber-schock`

- **CE:** ce-06 · **LE2** · hypovolämischer Schock bei oberer GI-Blutung
- **Datei:** `content/ce-06/situationen/ls-gruber-schock/phases.ts`
- **Kernfakten:** `specs/ce-06/kernfakten/schock-und-kreislauf.md` (F-01..F-14) + `notfallassessment.md`
- **Geprüft:** 2026-07-13
- **Verdikt:** ✅ **PASS** — kein HOCH-Befund, kein K.O.

---

## Deterministische Lenses (Skript-Panel)

| Lens / Check | Ergebnis | HOCH | MITTEL | NIEDRIG |
|---|---|---|---|---|
| 1 Arzneimittel/Zahlen (`klinik-panel`) | ✅ PASS | 0 | 0 | 0 |
| 2 Recht & Ethik (`standards-currency-check`) | ✅ PASS (0 Treffer) | 0 | 0 | 0 |
| 3 DNQP/Standard (`step-grounding-check ce-06`) | ✅ PASS (0 dangling/missing) | 0 | 0 | 0 |
| 4 Konsistenz (`klinik-panel`) | ✅ PASS | 0 | 0 | 0 |
| Pre-Filter Regex (`pflege-anti-pattern-check ce-06`) | ✅ PASS (0 Funde) | 0 | 0 | 0 |
| Zitat-Verifizierer (Kernfakten-Belege) | ✅ Alle Belege verifiziert | – | – | – |

Klinik-Panel: `Zahlen 0 · Recht 0 · DNQP/Standard 0 · Konsistenz 0`. Grounding: `ls-gruber-schock` vollständig gegroundet.

---

## Semantischer 5. Lens (dieser Agent)

Prüfung dessen, was Regex/Skript nicht kann — Distraktor vs. Empfehlung, Pseudo-Empathie, Step-Typ-Pflichten, KB-Marker.

**Bestanden:**

- **Distraktor vs. Empfehlung:** Alle gefährlichen Aussagen erscheinen ausschließlich als `isCorrect:false`-Distraktoren mit korrektivem `explanation` — Beine-hoch bei oberer GI-Blutung (erm-01 Opt. 2), eigenmächtig Perfusor/Infusion aufdrehen (erm-04), Kalium-Bolus peripher (erm-06), Monitor stummschalten (erm-05), Oberkörper stark aufrichten bei RR 80/50 (erm-05/erm-01), orale Gaben trotz Nüchternheit (erm-02). **Kein Lehren von Falschem.**
- **Autotransfusions-Falle:** Die F-06-Ausnahme (obere GI-Blutung/Kopf/Lunge → keine Beine-hoch, Aspirationsgefahr, nüchtern) ist verbatim gegroundet und der zentrale Lernpunkt (Tab B `erm-00b`, MC `erm-01`). Konsistent mit Pflegewagen `erm-02` (Beine-hoch-Keil → „weglegen").
- **Keine erfundenen Dosen:** Katecholamine/Perfusor nur als Wirkstoffgruppe + nur auf Arztanordnung (`ala-00b`, `erm-04`). Adrenalin/Noradrenalin nur als körpereigene Stresshormone der Zentralisation (`erk-01`, `erk-01b`). Sauerstoff 6–8 l/min + Maske-Minimum 5 l/min gegroundet (F-06/F-11).
- **Cross-Step-Konsistenz:** Vitalprogression stimmig (Puls 108→132, RR 100/70→80/50, Sättigung fallend); Alter 69 nur im SBAR, kein Widerspruch; kein Item „korrekt hier / falsch dort".
- **KB-Marker (LE2-Set):** III.2 an Team/Grenze/Alarmieren, I.4 an Akut-Handeln, II.1 an SBAR, V.2 an Reflexion, I.1 an Coping — wie in der Redesign-Runde vorgesehen.
- **Step-Typ-Pflichten:** `explanation` je MC-Option, `erklaerung` je Pflegewagen-Item, eindeutige truefalse-Aussagen, reflection/freetext mit Sandwich-`systemPrompt` bzw. `bewertungskriterien`, B1-Varianten durchgängig.
- **Glossar:** Alle 9 neuen Begriffe vorhanden (hypovolämischer Schock, Zentralisation, Schockindex, Herzzeitvolumen, Katecholamine, Perfusor, Autotransfusionslage, obere GI-Blutung, Aspiration).

---

## Befunde

### GRUBER-N1 — NIEDRIG — Beleg-Vollständigkeit (kein Faktfehler)

- **Step:** `ce06-gruber-erm-06` (Kalium/Rhythmus)
- **Sache:** Korrekte MC-Option nennt „Konzentrationen über **40 mmol/l** nur über ZVK". Die Zahl steht in der Kernfakt-Prosa (F-10) und ist klinisch Standard (Pflege heute Kap. 33.10.3), aber unter den **verbatim-verifizierten Belegen** von F-10 nicht als Token enthalten (belegt sind „nur über einen ZVK infundiert werden" + „Venenwandreizung").
- **Beleg:** Pflege heute 2019, Kap. 33.10.3; F-10.
- **Empfehlung (Beschaffung):** Verbatim-Beleg mit der 40-mmol/l-Angabe zu F-10 ergänzen ODER Zahl generischer fassen („hohe Konzentrationen"). Nicht K.O., kein inhaltlicher Fehler.

---

## Ergebnis

**✅ PASS.** 0× HOCH, 0× MITTEL, 1× NIEDRIG (Beleg-Vollständigkeit, kein Faktfehler). Kein K.O.-Kriterium erfüllt. Die kritischen Leitplanken (Autotransfusions-Ausnahme, keine erfundenen Dosen, Katecholamine/Perfusor nur Arztanordnung, Kalium langsam/ZVK, Anti-Patterns nur als Distraktoren) sind korrekt umgesetzt. Panel = Vorlage; die Gründerin bleibt menschlicher Backstop.
