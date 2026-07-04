# MASTER-BUILDPLAN — Pflege-Lernplattform

> **Wirbelsäule des Projekts.** Diese Datei ist die einzige Wahrheitsquelle für
> Reihenfolge, Status und Rezept beim Ausbau aller CEs.
> Jeder neue Chat startet mit dem Boot-Satz (siehe unten) und liest zuerst diese Datei.
>
> Stand: 2026-06-29

---

## 0. Boot-Satz für jeden neuen Chat (kopieren & einfügen)

```
Lies CLAUDE.md, memory/MEMORY.md und specs/MASTER-BUILDPLAN.md.
Dein Job in diesem Chat: <EIN Job aus der Tabelle unten>.
Halte dich an das CE-Rezept. Am Ende: commit + MEMORY.md + MASTER-BUILDPLAN Status updaten.
```

**Regel: 1 Chat = 1 abgegrenzter Job.** Nie mehrere CEs oder Job-Typen in einem Chat
mischen — Kontext bleibt sauber, Übergabe bleibt möglich.

---

## 1. Die drei Übergabe-Elemente (der Staffelstab)

Chats sind flüchtig. Was zwischen ihnen überlebt:

1. **`specs/MASTER-BUILDPLAN.md`** (diese Datei) — Reihenfolge, Status, Rezept
2. **`memory/MEMORY.md`** — stabiler Projektzustand
3. **Git-Commits** — der eigentliche Artefakt-Handoff

Jeder Chat MUSS am Ende alle drei aktualisieren, sonst ist der Job nicht fertig.

---

## 2. Status pro CE (gemessen 2026-06-29)

| CE | Thema | Lernergebnisse | Status | Tiefe |
|----|-------|:--:|--------|-------|
| CE-01 | Ausbildungsstart / Eigene Rolle | 18 | 🔴 nur v1-Bausteine-Pläne | — |
| CE-02 | Pflegeprozess / Sturz | 77 | ✅ fertig | voll (0 FEHLT, gehärtet, deployed) |
| CE-03 | Reflexion / Ethik | 23 | 🔴 nur v1-Bausteine-Pläne | — |
| CE-04 | Kommunikation + Gesundheitsförderung | 43 | 🟡 Kommunikation (2 Situationen) fertig; LE2 Gesundheitsförderung offen | Pilot |
| CE-05 | (siehe Katalog) | 58 | 🔴 nur v1-Bausteine-Pläne | — |
| CE-06 | Akutsituationen | 35 | 🟡 **LE1 + LE2 komplett** (6 Situationen; 19/35 LE), gate-green, deployed; LE3–LE5 offen | Pilot |
| CE-07 | (siehe Katalog) | 36 | 🔴 nur v1-Bausteine-Pläne | — |
| CE-08 | (siehe Katalog) | 85 | 🔴 nur v1-Bausteine-Pläne | — |
| CE-09 | (siehe Katalog) | 64 | 🔴 nur v1-Bausteine-Pläne | — |
| CE-10 | (siehe Katalog) | 68 | 🔴 nur v1-Bausteine-Pläne | — |
| CE-11 | (siehe Katalog) | 67 | 🔴 nur v1-Bausteine-Pläne | — |

Gesamt: 574 Lernergebnisse. Abgedeckt: CE-02 (77) voll + CE-04-Kommunikation (Teil von 43).

🔴 = Rohmaterial (nur `.md`-Pläne, keine Situationen, nicht verdrahtet)
🟡 = teilweise · ✅ = fertig & deployed

---

## 3. Die Chat-Typen

| # | Chat-Typ | Job | Anzahl | Parallel? |
|---|----------|-----|--------|-----------|
| 0 | **Pipeline-Härtung** | Pipeline v10 fertig: v2-Bausteine-Generator, Coverage-Validator + Inline-Wissen als feste Stufen | 1 — ZUERST | nein |
| 1 | **CE-Bau** | EINE CE end-to-end auf Pilot-Tiefe (Rezept §4) | 9 | nein (Merge-Konflikte) |
| 2 | **Infra/Deploy** | Echte Domain, Caddy, Backups, Monitoring | 1 | ✅ ja |
| 3 | **Dozentin-Review** | Menschliche Freigabe-Flow + Findings einarbeiten | wiederkehrend | ✅ ja |
| 4 | **Cross-CE-QA** | Glossar-Konsistenz, Duplikat-Patienten, Spaced-Repetition | alle 2–3 CEs | nein |

**Parallelisierungs-Regel:** CE-Bau-Chats nie gleichzeitig auf denselben Dateien.
Infra/Dozentin/Design-Chats dürfen parallel (andere Dateien).

---

## 4. CE-Rezept (Pilot-Tiefe) — identisch für jeden CE-Bau-Chat

**Arbeitsteilung (wichtig): Generierung = Chat-direkt, Prüfung = Skript.**
Schritte 1-3 (Grounding, Bausteine, Situationen) werden **chat-getrieben mit vollem
Kontext** gebaut — NICHT über die Sub-Agent-Generatoren. Grund: voller Kontext = weniger
Drift Richtung „klingt empathisch statt ist korrekt" (siehe pflege-konformitaet.md).
Schritte 4-5 (Härtung, Coverage) laufen über die **Skripte** — die prüfen tireless,
exhaustiv und deterministisch, was ein Mensch/Chat in Zeile 400 übersieht.

```
1. Grounding   → kernfakten/{thema}.md aus recherche/ (Verbatim-Belege, kein erfundener Content)  [CHAT]
2. Bausteine   → v2-Stil (Lehr-Patient + Anker+Spektrum + Aha-Moment + Wiederbegegnung)            [CHAT]
3. Situationen → 2-3 Leitsituationen mit phases.ts                                                  [CHAT]
4. Härtung     → doppelter Pflege-Check (pflege-validator mode=plan + mode=code)                    [SKRIPT]
5. Coverage    → npx tsx scripts/lernergebnis-coverage-scaffold.ts <ce> → recheck bis 0 FEHLT       [SKRIPT]
   + Cross-Naht → npx tsx scripts/cross-le-checker.ts (Glossar/Patienten/Begriffs-Konsistenz)
6. Verdrahten  → content-loader.ts (CE_MODULES) + _manifest.ts + deployen (Hetzner)
7. Abschluss   → commit + MEMORY.md + diesen Plan (Status auf ✅, Tiefe eintragen)
```

Validierung vor Commit: `npx tsc --noEmit && npx vitest run && npm run build`

### Session-Erneuerung (wenn die Quali nachlässt)

Die „1 CE pro Chat"-Regel ist KEINE harte Grenze — der Staffelstab (§1) trägt den Stand
über eine frische Session. Wenn der Kontext voll wird / die Quali spürbar nachlässt:

1. **Build-Journal pflegen** — der Chat notiert *während* des Bauens die harten Fakten in
   `content/{ce}/BUILD-JOURNAL.md`: Patient (Name/Alter/Diagnose/Ton), welches LE wo
   abgedeckt, offene Entscheidungen. Das ist die Naht-Versicherung.
2. **Snapshot** — commit + MEMORY/Journal updaten.
3. **Frische Session booten** — Boot-Satz (§0) + „lies content/{ce}/BUILD-JOURNAL.md,
   mach weiter bei <Schritt>". Bootet nahtlos.
4. **Naht-Brüche fängt das Skript** — `cross-le-checker.ts` prüft Glossar/Patienten/
   Begriffs-Drift über Sessions hinweg.

→ Nicht „1 CE dann Stopp", sondern: **bauen bis zur Degradierung → snapshot → erneuern.**
Nicht alle 10 Min erneuern (Re-Orientierung kostet Tokens), sondern bei spürbarem Abfall.

---

## 5. Reihenfolge (Wellen)

**Welle 1 — Demo/Pilot-fähig:**
1. Chat 0: Pipeline-Härtung (v10)
2. CE-06 Akutsituationen (Wow-Stück für Demo)
3. CE-01 (leicht, 18 LE, Einstieg)
4. → **Pilot/Test mit echten Schülern** → Feedback einarbeiten

**Welle 2 — Mittelfeld:**
5. CE-03 (23) · CE-04-LE2 Gesundheitsförderung (Rest) · CE-05 (58) · CE-07 (36)

**Welle 3 — die Schweren (je evtl. 2 Chats):**
6. CE-08 (85) · CE-09 (64) · CE-10 (68) · CE-11 (67)

Nach jeweils 2–3 CEs: ein Cross-CE-QA-Chat (Typ 4).

---

## 6. Zeit-Schätzung (Referenz: CE-04-Welle ≈ 1 Marathon-Session)

- **Pilot-Tiefe alle CEs:** ~15–18 Marathon-Sessions → ~4–6 Wochen (bei 3–4/Woche)
- **Volle CE-02-Tiefe alle CEs:** ~30–35 Sessions → ~2–3 Monate
- **Erste pilotfähige Ergebnisse:** ~2 Wochen (Welle 1)

Flaschenhals ist NICHT die Generierung, sondern: Grounding/Quellenbindung,
Dozentin-Review, Pflege-Härtung. Diese drei lassen sich nicht beschleunigen.

---

## 7. Fortschritts-Log (jeder Chat trägt hier eine Zeile ein)

| Datum | Chat-Job | Ergebnis |
|-------|----------|----------|
| 2026-06-14 | CE-04 Kommunikation | 5 Themen + 2 Situationen, 3 Review-Zyklen, 0 FEHLT, deployed |
| 2026-06-29 | Master-Buildplan angelegt | diese Datei |
| 2026-06-29 | Landing-Überarbeitung (Design-Chat) | B2C-Landing neu (Warteliste-first, Gründerin Waleria, DE/TR/AR, hreflang/OG); app-weit Teal→Dusty-Rose; Play-then-Gate als Spec (specs/SPEC-PLAY-THEN-GATE.md). tsc/build/vitest ✅. Offen: Commit+Deploy, Gate-Bau (eigener Chat) |
| 2026-06-30 | Pipeline-Härtung Stage 2 (W2/W5/W3) | Step-Grounding (`kernfaktId` + `step-grounding-check.ts`), adversarialer Stützt-Check (`stuetzt-check.ts`, 3 Lenses), Faktentreue-Gate scharf (Coverage≥80%→exit 1). +43 Tests, tsc/vitest(458)/build ✅. CE-02 STRICT-PASS. Nächste: Stage 3 (W1/W4) |
| 2026-06-30 | Pipeline-Härtung Stage 3 (W1/W4) | Klinik-Zahlen-Validator (`referenzwerte.json` 18 korpus-belegte Werte + `klinik-zahlen-check.ts`, nur Autoritäts-Claims, Falldaten-Whitelist, Beschaffungsliste) + 4 neue korpus-belegte Anti-Patterns (2h-starr/Massage/Hautmythos/Opioid) in Skript+Register (W8 grün). +51 Tests, tsc/vitest(509)/build/eslint ✅. CE-02 0 FP. Nächste: Stage 4 (W6/W10) |
| 2026-07-03 | CE-06 Welle 1 (Reanimation) | Demo-Wow gebaut: Kernfakten `reanimation-bls`+`notfallassessment` (22 Belege ✅ zitat-verifizierer, Quelle pflege-heute+notfallmedizin-volltext), Situation `ls-wagner-reanimation` (5 Akut-Phasen, 9 Steps, Branching-unter-Zeitdruck AED-Schock), voll `kernfaktId`-gegroundet. Gates grün: step-grounding 8/8, klinik-zahlen, currency, faktentreue, anti-pattern, klinik-panel (0 HOCH), pflege-validator PASS (4 non-block. Findings gefixt). tsc/vitest(564)/build/eslint ✅. Verdrahtet (CE_MODULES+manifest status=steps). Coverage: 4/35 LE (LE1-Kern) — `lernergebnis-tiefe 6` bewusst FAIL (31 LE offen, Welle 2–5 im BUILD-JOURNAL). Status CE-06 → 🟡 Pilot. **Deployed (Hetzner, HTTP 200):** https://178-105-176-161.nip.io/de/lernen/situation/ls-wagner-reanimation?ce=ce-06 |
| 2026-07-03 | CE-06 Welle 1b (Ríos, LE1-K3) | 2. Akutsituation `ls-rios-synkope` (Synkope/schwere Hypoglykämie an Dialyse). Kernfakten `neurologische-akutsituationen` (9 Belege ✅). Kritisch gehärtet ggü. altem Plan: FAST-Homonym vermieden, keine pauschale Trendelenburg, Shunt-Widerspruch gelöst (G40% i.v. = ärztlich), <50 mg/dl belegt. pflege-validator PASS (0 HOCH); 3 Findings gefixt inkl. **systematischem MC-Längen-Bias** (richtige Optionen gekürzt, auch Wagner ref-02). Gates grün, tsc/vitest(564)/build/eslint ✅. Deployed. Coverage 5/35 LE. |
| 2026-07-03 | CE-06 Welle 1c (Lehmann, LE1-K1) | 3. Akutsituation `ls-lehmann-sturz-sht` (Sturz/SHT im Heim, Demenz, Osteoporose, Apixaban, Nachtdienst). Kernfakten `traumatologische-erstversorgung` (12 Belege ✅, inkl. §1831 BGB verbatim). Recht+Klinik gehärtet: SHT+Antikoag→112/CT; Anti-Pattern nur als falsche Optionen (Licht/Glück/Achseln/Bettgitter) → 0 Treffer; FeM §1831 statt §1906; Cushing-Trias vermieden. pflege-validator PASS (0 HOCH/0 MITTEL); 6 NIEDRIG gefixt (Branching-Konsequenzen, §1831-Akut-Beleg, Nachtlicht-Abgrenzung, Impressionsfraktur, Längen). Gates grün, tsc/vitest(564)/build/eslint ✅. Deployed. Coverage 6/35 LE (nur LE1-K4 + LE2-5 offen). |
| 2026-07-03 | CE-06 Welle 1d (Novak, LE1-K4) → LE1 KOMPLETT | 4. Akutsituation `ls-novak-erregung` (paranoide Schizophrenie + Pneumonie/Fieber, akute Erregung). Kernfakten `psychische-akutsituationen` (15 Belege ✅). Leitplanke „diagnostic overshadowing" (organische Ursachen zuerst); Deeskalation vor Zwang; Sedierung ärztlich. pflege-validator PASS (0 HOCH); 4 MITTEL + 3 NIEDRIG gefixt — u.a. **Rechtsfehler** (PsychKG greift auf somat. Station nicht → §1831 BGB/Gefahr im Verzug) + Eigenschutz-Grounding-Lücke (neuer Kernfakt F-08). **LE1 damit vollständig** (7/7, tiefe 0 FEHLT in LE1). Gates grün, deployed. Coverage 7/35 LE. |
| 2026-07-03 | CE-06 LE2-Start (Yıldız, Herzinfarkt) | 5. Akutsituation `ls-yildiz-thoraxschmerz` (ACS-Verdacht: Angina, die diesmal nicht auf Nitro/Ruhe bessert). Kernfakten `herz-kreislauf-akut` (14 Belege ✅, Pflege heute Kap. 21). Deckt LE2-W3/K1/K3 (+W2 kardiogener Schock teilw). Kritisch: Oberkörper HOCH statt Schocklage (Preload), Lagerung abflachen bei RR<90&Puls>100 (verbatim), O2/Nitro nur ärztlich, Diabetiker/Frauen = mehr Wachsamkeit. pflege-validator PASS (0 HOCH); 1 MITTEL + 2 NIEDRIG gefixt. Gates grün, deployed. Coverage 11/35 LE. |
| 2026-07-04 | CE-06 LE2 komplett (Gruber, Schock) | 6. Akutsituation `ls-gruber-schock` (Herbert Gruber, 69, hypovolämischer Schock bei oberer GI-Blutung/Ulcus unter NSAR). Kernfakten `schock-und-kreislauf` (F-01..F-14, 52 Belege ✅; pflege-heute Kap. 14.5/3.5/33.10.3 + I-care-Anatomie 6/7 + kommunikation). Deckt **LE2 komplett**: W1 (Anatomie/Zentralisation), W2 (4 Schockformen voll), W3-Rest (Katecholamin-Perfusor, Reizleitung Sinusknoten, Kalium/Rhythmus, O2-Systeme, Infusion), K1 (Monitor-Branching), K2 (Pflegewagen PVK/ZVK), K4 (Coping-Freetext bloom 6), E1 (Intensiv-Kontext, reflection). Kern-Falle: **Autotransfusionslage-Ausnahme bei oberer GI-Blutung** (Beine-hoch = FALSCH, F-06); Katecholamine/Perfusor nur ärztlich (Wirkstoff, keine Dosen); i.v.-Kalium langsam/ZVK (Bolus-Distraktor gefährlich-falsch); nüchtern. 12 Steps, step-grounding 11/11. pflege-validator PASS (0 HOCH); 1 MITTEL + 4 NIEDRIG gefixt (MC-Längen-Bias, Pflegewagen-Balance). tsc/vitest(564)/build/eslint ✅, klinik-panel 0 HOCH, currency/faktentreue(STRICT 88%)/anti-pattern ✅. **LE1 (7/7) + LE2 (8/8) komplett → 19/35 LE.** Deployed (Hetzner, HTTP 200). |
| 2026-06-30 | Pipeline-Härtung Stage 4 (W6/W10) | Adversariales Klinik-Panel (`klinik-panel.ts` — 4 parallele Lenses Zahlen/Recht/Grounding/Konsistenz, merge+dedup, K.O. bei HOCH, Report) + Standards-Currency-Registry (`standards-currency.json` + `standards-currency-check.ts`, fängt §1906a→§1831, CE-01-Pläne 8×) + Coverage-Tiefe (`lernergebnis-tiefe.ts` — Bloom→berührt/geübt/geprüft, Gate „mind. geübt", Mapping-getrieben). Scaffold+Agent-Docs+Regel aktualisiert. +55 Tests, tsc/vitest(564)/build/eslint ✅. W8 grün. **Alle 10 Schwachstellen (W1–W10) ✅.** |
