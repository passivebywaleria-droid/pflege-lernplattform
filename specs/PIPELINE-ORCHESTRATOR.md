# Pipeline-Orchestrator — Spezifikation

> **Status:** Entwurf 2026-04-16
> **Ziel:** Eine LE mit einem einzigen Kommando vom Curriculum bis `status: "geprueft"` durchfahren.

---

## Problem

Heute ist die Content-Pipeline nur als **Prompts + Regeln** dokumentiert. Der Handoff zwischen Dozentin → B1 → Generator → Scripts → Prüfer passiert **manuell** (Main-Claude ruft jeden Agent einzeln auf). Bei FAIL gibt es zwar die Regel „zurück zur Dozentin, max 3 Runden", aber kein Code automatisiert diese Schleife.

**Folge:** Jede LE braucht manuelle Supervision. 55 LEs = 55× dieselbe Choreographie.

---

## Ziel

```bash
npx tsx scripts/run-pipeline.ts le-02
```

Ergibt:
- 11 TypeScript-Dateien in `content/le-02/` nach Naming-Standard
- Manifest-Status `"geprueft"` im Erfolgsfall
- Prüfbericht unter `content/le-02/pruefbericht.md`
- **Zero Human-Interaction** während der Runde. Bei Human-Eskalation: klare Fehlerausgabe + Report.

Einziger Input: **LE-ID**. Rohmaterial + alle Inhalte **werden generiert** (Dozentin Phase 1).

---

## Architektur

```
┌─────────────────────────────────────────────────────────────┐
│  scripts/run-pipeline.ts le-NN                              │
│                                                              │
│  1. Curriculum-Eintrag le-NN lesen (einziger Input)          │
│  2. State-File content/le-NN/.pipeline-state.json anlegen    │
│                                                              │
│  ┌──────────── Runde K (max 3) ────────────────────────┐    │
│  │                                                      │    │
│  │  3. Dozentin-Agent (Opus, spawn)                     │    │
│  │     ├─ Phase 1: Rohmaterial + metadata.ts            │    │
│  │     ├─ Phase 2: 8 Plan-Dateien                       │    │
│  │     └─ Manifest: rohmaterial → sessionplan           │    │
│  │                                                      │    │
│  │  4. B1-Dozentin-Agent (Opus, spawn)                  │    │
│  │     └─ inline B1 bei 4 Dateien                       │    │
│  │                                                      │    │
│  │  5. Generator-Agent (Sonnet, spawn)                  │    │
│  │     ├─ 11 TS-Dateien (inkl. index.ts Barrel)         │    │
│  │     └─ Manifest: sessionplan → steps                 │    │
│  │                                                      │    │
│  │  6. Gate A (lokal, kein LLM):                        │    │
│  │     ├─ npx tsc --noEmit                              │    │
│  │     ├─ npx tsx scripts/validate-le.ts le-NN          │    │
│  │     └─ npx tsx scripts/check-artikel-abstand.ts      │    │
│  │        FAIL → routing siehe §4, zurück zu 3.         │    │
│  │                                                      │    │
│  │  7. KI-Prüfer-Agent (Opus, spawn)                    │    │
│  │     ├─ 32 semantische Kriterien (8 K.O.)             │    │
│  │     ├─ PASS  → Manifest: steps → geprueft. DONE.     │    │
│  │     └─ FAIL  → routing siehe §4, zurück zu 3.        │    │
│  │                                                      │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                              │
│  8. K ≥ 3: Human-Eskalation                                  │
│     └─ Report unter content/le-NN/escalation-report.md       │
└─────────────────────────────────────────────────────────────┘
```

---

## §1 Kommandos

```bash
# Neue LE komplett durchlaufen (Phase 1..Prüfer)
npx tsx scripts/run-pipeline.ts le-02

# Ab bestimmter Phase starten (Resume nach Crash)
npx tsx scripts/run-pipeline.ts le-02 --from=generator

# Trockenlauf (zeigt was passieren würde, ohne Agenten zu spawnen)
npx tsx scripts/run-pipeline.ts le-02 --dry-run

# Runden-Limit überschreiben (Default 3)
npx tsx scripts/run-pipeline.ts le-02 --max-rounds=5

# Nur Prüfer laufen lassen (bei bereits vorhandenen TS-Dateien)
npx tsx scripts/run-pipeline.ts le-02 --only=pruefer
```

---

## §2 State-Management

**Datei:** `content/le-NN/.pipeline-state.json` (gitignored)

```ts
interface PipelineState {
  leId: string                // "le-02"
  startedAt: string           // ISO
  lastUpdate: string          // ISO
  round: number               // 1..3
  phase: Phase                // aktuelle Phase
  lastError?: string
  lastFailReport?: string     // Pfad zu Report
  history: HistoryEntry[]     // alle Runden + Ergebnisse
}

type Phase =
  | "init"
  | "dozentin-p1"
  | "dozentin-p2"
  | "b1-dozentin"
  | "generator"
  | "gate-a-scripts"
  | "pruefer"
  | "done"
  | "escalated"

interface HistoryEntry {
  round: number
  phase: Phase
  status: "started" | "passed" | "failed"
  reportPath?: string
  timestamp: string
}
```

**Zweck:**
- Resume-Fähigkeit nach Crash
- Post-Mortem-Analyse (wo bricht die Pipeline typischerweise?)
- Metrik-Tracking (durchschnittliche Rundenzahl pro LE)

---

## §3 Agent-Spawning

**Mechanismus:** `Task`-Tool (Anthropic Agent SDK) mit `subagent_type: "general-purpose"`.

Der Orchestrator liest den Prompt aus `.claude/agents/{name}.md` und hängt LE-spezifische Parameter an:

```ts
async function spawnAgent(name: AgentName, le: string, context: unknown) {
  const systemPrompt = readFileSync(`.claude/agents/${name}.md`, "utf-8")
  const taskPrompt = buildTaskPrompt(name, le, context)

  return await agentSdk.task({
    subagent_type: "general-purpose",
    prompt: `${systemPrompt}\n\n---\n\n## Dein aktueller Auftrag\n\n${taskPrompt}`,
    description: `${name} für ${le}`,
  })
}
```

**Agent-Mapping:**

| Name | Datei | Modell | In welcher Phase? |
|------|-------|--------|-------------------|
| `dozentin` | `.claude/agents/dozentin.md` | Opus | P1 + P2 |
| `b1-dozentin` | `.claude/agents/b1-dozentin.md` | Opus | nach P2 |
| `content-generator` | `.claude/agents/content-generator.md` | Sonnet | nach B1 |
| `didaktik-pruefer` | `.claude/agents/didaktik-pruefer.md` | Opus | nach Gate A |

---

## §4 Fehler-Routing (Kritisch)

Bei FAIL entscheidet der Orchestrator anhand der Fehler-Ebene, **welcher Agent neu starten muss** und **welchen Kontext** er bekommt.

| Fehler-Typ | Erkennbar an | Zurück zu | Begründung |
|-----------|--------------|-----------|------------|
| **Schema K.O.** (F001-F014) | `validate-le.ts` Check Schema | **Generator** | TS-Generierung falsch, Plan war korrekt |
| **Naming K.O.** (F015-F018) | `validate-le.ts` Check N | **Generator** | Export-Namen/Barrel falsch |
| **U1 Urheberrecht K.O.** | `check-artikel-abstand.ts` | **Dozentin P1** | Rohmaterial-Formulierung zu nah an Quelle |
| **F7/F11 Fakten K.O.** | Prüfer | **Dozentin P1** | Rohmaterial-Fakten falsch/erfunden |
| **F10 Gefahr K.O.** | Prüfer | **Dozentin P1** | Gefährliche Inhalte — Rohmaterial neu |
| **B5/B6 Didaktik K.O.** | Prüfer | **Dozentin P2** | Plan-Reihenfolge/Curriculum-Abdeckung falsch |
| **I7 Sandwich K.O.** | Prüfer | **Dozentin P2** | Feedback-Ton falsch — Plan neu |
| **P6 Schüler-Perspektive K.O.** | Prüfer | **Dozentin P2** | Dialog-Rollen falsch — Plan neu |
| **LS1 Snack-Urheberrecht K.O.** | Prüfer | **Dozentin P2** | Snack-Plan zu nah an Quelle |
| **Nur Warnings** (I1..I6, L2..L7, Q7..Q9 etc.) | Prüfer | **ignoriert** | Kein Rerun nötig |

**Feedback-Übergabe:** Der Orchestrator schreibt den spezifischen Fehler-Report in `content/le-NN/.feedback-round-K.md` und hängt ihn als Kontext an den Agent-Prompt.

---

## §5 Runden-Limit + Eskalation

- **Default-Limit:** 3 Runden (entspricht Prüfer-Regel Z. 212)
- **Override:** `--max-rounds=N`
- **Eskalation:** Bei K=3 und immer noch FAIL → Pipeline stoppt, schreibt `content/le-NN/escalation-report.md` mit:
  - Was hat jede Runde versucht?
  - Welche K.O.-Kriterien sind persistent?
  - Empfehlung: Human-Review von Curriculum-Eintrag, Rohmaterial, Plan

Status-Maschine bei Eskalation: letzter stabiler Status bleibt (nicht `"geprueft"`). LE wird NICHT live.

---

## §6 Manifest-Integration

Der Orchestrator aktualisiert `content/_manifest.ts` nach **jedem** erfolgreichen Gate:

| Phase abgeschlossen | Neuer Status |
|---------------------|--------------|
| Dozentin Phase 1 | `rohmaterial` |
| Dozentin Phase 2 | `sessionplan` |
| Generator + Gate A | `steps` |
| KI-Prüfer PASS | `geprueft` |

**`published`** bleibt Human-only — der Orchestrator setzt das NIE.

Implementierung: Helper `updateManifestStatus(leId, status)` modifiziert `_manifest.ts` transaktional (lock, edit, validate, release).

---

## §7 Auto-Fix für triviale Patterns (optional, Phase 2)

Manche Schema-Fehler sind **eindeutig Rename-bar** ohne LLM. Der Orchestrator könnte zwischen Generator und Gate A ein Auto-Fix-Script laufen lassen:

| Pattern | Fix |
|---------|-----|
| `question.optionen` → `question.options` | String-Rename |
| `question.sequence` → `question.sequencing` | String-Rename |
| `dialogLines` → `dialogPhases` | String-Rename |
| Feld-Namen mit ae/oe/ue in Identifiern | whitelist-basiert belassen |

**Entscheidung:** Phase 1 OHNE Auto-Fix bauen. Wenn nach 3 Runden 80% der Fehler dieselben sind → Phase 2 hinzufügen.

---

## §8 Kosten

**Annahmen:**
- Opus-Call (Dozentin, B1, Prüfer): ~$0.50–1.50 pro Call (je nach Input-Größe)
- Sonnet-Call (Generator): ~$0.10–0.30 pro Call
- Pro LE-Runde: 4 Opus + 1 Sonnet = ~$2.50–7.00
- 3 Runden worst case: ~$7.50–21.00

**Break-even:** Human-Supervision einer Pipeline-Runde kostet (großzügig geschätzt) ≥30 Min × 50€/h = 25€. Orchestrator ist günstiger ab Runde 1 — besonders bei 55 LEs.

---

## §9 Akzeptanzkriterien

- [ ] **A1**: `npx tsx scripts/run-pipeline.ts le-02` läuft von leerem `content/le-02/` bis Status `"geprueft"` ohne Human-Interaktion
- [ ] **A2**: Bei simulierter U1-Violation (manueller Edit in Artikel) geht die Runde 2 zurück zu Dozentin P1 und fixt es
- [ ] **A3**: Bei 3× FAIL wird sauber eskaliert, State-File bleibt, kein halber Commit
- [ ] **A4**: Resume funktioniert: Kill nach Generator → erneuter Aufruf setzt bei Gate A fort
- [ ] **A5**: `--dry-run` zeigt geplanten Ablauf ohne Agent-Spawns + ohne Manifest-Änderungen
- [ ] **A6**: Alle Agent-Outputs werden in `content/le-NN/.pipeline-logs/` archiviert (Debug-Fähigkeit)
- [ ] **A7**: Script ist idempotent: mehrfacher Aufruf mit existierender LE = Resume, nicht Überschreiben
- [ ] **A8**: `validate-le.ts` läuft nach Orchestrator-Abschluss grün
- [ ] **A9**: `npx tsc --noEmit` läuft nach Orchestrator-Abschluss grün

---

## §10 Offene Entscheidungen (vor Build zu klären)

| # | Frage | Vorschlag |
|---|-------|-----------|
| O1 | Parallelisierung: Kann B1-Dozentin parallel zu Glossar-Generator laufen? | Phase 1 nein (einfach halten) |
| O2 | Auto-Fix für Schema-Fehler (siehe §7) in Phase 1 oder 2? | Phase 2 |
| O3 | Sollen Fotos/Bilder auch automatisch generiert werden (Bild-Pipeline)? | Nein — separater Trigger |
| O4 | Curriculum-Eintrag als ENV-Var oder direkt aus curriculum-55-le-struktur.md? | Direkt Datei lesen |
| O5 | Was wenn LE bereits `"published"` ist? | Orchestrator verweigert Lauf (Schutz) |
| O6 | Logs in Git einchecken oder nur lokal? | Nur lokal (`.pipeline-logs/` in .gitignore) |
| O7 | Batch-Modus: `run-pipeline.ts --all` für alle Draft-LEs? | Später (Phase 3) |
| O8 | Integration mit Agent-Teams-Feature (CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1)? | Prüfen ob sinnvoller Ersatz für eigene Implementation |

---

## §11 Aufwand

| Modul | Aufwand |
|-------|---------|
| §2 State-Management (JSON + Resume) | 1.5 h |
| §3 Agent-Spawning + Prompt-Assembly | 2 h |
| §4 Fehler-Routing-Matrix + Feedback-Dateien | 1.5 h |
| §5 Runden-Limit + Eskalations-Report | 1 h |
| §6 Manifest-Integration (transaktional) | 1 h |
| CLI-Flags + Dry-Run | 1 h |
| Testing mit LE-02 (Pilot) | 2 h |
| Dokumentation + Sprint-Plan-Eintrag | 0.5 h |

**Summe:** ~10.5 h (kritischer Pfad, ohne Auto-Fix Phase 2)

---

## §12 Was NICHT gebaut wird (erstmal)

- **Auto-Fix** für Schema-Fehler (§7) — erst wenn Pattern-Häufung erkennbar
- **Parallelisierung** (§10 O1) — einfacher sequentieller Lauf reicht
- **Bild-Pipeline-Integration** (§10 O3) — bleibt separater Schritt
- **Batch-Modus** (§10 O7) — erst nach stabilem Single-Run
- **UI/Dashboard** für Pipeline-Status — CLI reicht vorerst
- **Retry-Logik** für einzelne LLM-API-Fehler — erst bei beobachteten Crashes

---

## §13 Test-Plan (vor Live-Einsatz)

1. **Pilot LE-02** (neue LE, kleines Thema): Kompletter Durchlauf inkl. möglicher Fehler-Runden
2. **LE-06 Retry** (hat bekannte Probleme): Orchestrator auf existierende LE ansetzen, prüft ob Fix-Routing funktioniert
3. **LE-03 Batch-Dry** (später): `--all` Trockenlauf über 3 Draft-LEs
4. **Validate-le.ts grün** nach jedem Pilot
5. **Prüfbericht manuell gegenlesen**: entspricht der Output dem was Main-Claude früher manuell produziert hat?

---

## Nachtrag: Abgrenzung zu Agent Teams

Claude Code hat ein experimentelles Feature `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1`. Das könnte ein Teil dieser Spec kostenlos liefern (Spawning, Inbox, Shutdown-Handling).

**Entscheidung vor Build:** Entweder
- (a) Eigenes Orchestrator-Script (vollständige Kontrolle, keine Experimental-Abhängigkeit)
- (b) Agent Teams nutzen (schneller, aber experimentell)

Empfehlung: **(a) starten**, (b) später evaluieren wenn Teams-API stabilisiert.
