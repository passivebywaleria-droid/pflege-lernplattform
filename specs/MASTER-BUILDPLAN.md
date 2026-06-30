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
| CE-06 | Akutsituationen | 35 | 🔴 nur v1-Bausteine-Pläne | — |
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
