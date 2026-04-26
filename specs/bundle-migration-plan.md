# Bundle-Migration — Schrittweiser Plan

**Quelle:** `design/claude-bundle/` (53 Files, ChatGPT-Palette)
**Ziel:** App visuell 1:1 zum Bundle, Logik unverändert
**Stand:** 2026-04-26

---

## Status-Übersicht

| Etappe | Inhalt | Status |
|--------|--------|--------|
| 1 | Palette projektweit + Tab-Bar | ✅ live |
| 1.5 | Inter-Schrift + Tab-Bar im Walkthrough verstecken | ✅ live |
| 2.1 | StepShell + StepActionBar Wrapper | ✅ live |
| 2.2 | step-pflegewagen (StepShell + StepActionBar) | ✅ live |
| 2.3 | step-mc (volles Refactor) | ✅ live |
| 2.4 | step-sorting | ✅ live |
| 2.5 | step-sequencing | ✅ live |
| 2.6 | step-dialog (nur Action-Bar) | ✅ live |
| 2.7 | step-freetext | ✅ live |
| 2.8 | step-branching | ✅ live |
| 2.9 | step-selfrating | ✅ live |
| 2.10 | step-text (nur Action-Bar) | ✅ live |
| 2.11 | step-highlight + step-categorize | ✅ live |
| 2.12 | step-truefalse + step-reflection | ✅ live |
| 2.13 | step-confidence (nicht in Frau M) | offen — bei Bedarf |
| 3 | CE-Übersicht + Thema-Detail | offen |
| 4 | Home / Karteikarten / Glossar | offen |
| 5 | Onboarding | offen |
| 6 | Polish + Dark-Mode-Test | offen |

---

## Bundle-Pattern für Steps

**Layout (StepShell):**

```
┌────────────────────────────────────┐
│  KIND-LABEL · CAPS TEAL 10px       │ ← "Entscheiden · MC"
│  Frage 18-20px / 600                │
│  (optional Body eingeklappt)        │
│  ─── 10-14px gap ───                │
│  Content-Slot                       │ ← Optionen, Cards, etc.
│                                     │
│  Tipp 12px text3                    │ ← optional
└────────────────────────────────────┘
[ Action-Bar fix unten ]              ← Weiter / Prüfen
```

**Spacing-Disziplin (1:1 Bundle):**
- Container-Padding: 16px horizontal, 18px top, 20px bottom
- Element-Gap: 8-12px (nicht 16-24px)
- Frage-zu-Optionen: 14px
- Optionen untereinander: 8px
- Border-Radius: 10px (nicht 16-24px)

**Body-Disziplin:**
- Default eingeklappt
- Toggle "Mehr Kontext" wenn länger als 1 Satz

**Wenn Titel ≈ Frage:**
- Titel weglassen, nur Frage zeigen

---

## Vorgehen pro Step

1. Renderer öffnen
2. Mit StepShell wrappen
3. Body-Layout kompakter (Bundle-Spacing)
4. Buttons in StepActionBar
5. TSC + Tests
6. Visueller Check via Bundle-HTML-Vergleich
7. Commit (klein, pro Step)

Deploy nach jeweils 2-3 Step-Migrationen, damit du den Fortschritt siehst.

---

## Außer Reichweite (Logik bleibt)

- Adaptivität / Kompetenz-Register
- Pflegewagen-Distraktor-Logik
- Sandwich-Feedback
- Glossar-Tooltips
- B1/C1-Inline
- Patient-Modal-Inhalt

---

## Erwartung

Frau-M-Situation komplett scrollfrei pro Step (Mobile 390×780).
