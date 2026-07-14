# Start-Prompt — CE-06 „Sahne-Pilot": B1-Tabs + Arabisch-Demo-Pfad

> In den neuen Chat kopieren. Boot-Sequenz (CLAUDE.md) läuft eh; das hier ist der Resume-Anker.

## Wo wir stehen (2026-07-14)
**CE-06 ist fachlich FERTIG und aktuell.** Alle 11 Situationen haben Gold-Standard-Wissens-Tabs (inlineWissen), KB aus
dem LE-Schwerpunkt-Set, und sind **wort-für-wort gegen I care Pflege 3. Auflage 2025 gegengelesen** (0 fachliche Fehler;
2025 bestätigt den Content, teils aktueller als die Bücher). Alle Currency-Fixes + 2025-Nachschärfungen sind verbatim auf
2025 gegroundet, alle Gates + Klinik-Panel PASS.
- Branch: **`feat/ce-06-wissens-tabs-redesign`** (6 Commits, **ungepusht**). Letzter: `6040c9b`.
- I care 2025 liegt lokal im Korpus: `recherche/icare-pflege-3aufl-volltext/icare-pflege-3aufl.txt` (via `.gitignore`
  gesperrt — Urheberrecht, NIE committen). zitat-verifizierer nutzt ihn automatisch.
- Details: `content/ce-06/AUTONOM-FORTSCHRITT.md` · geparkt: `content/ce-06/FRAGEN-GRUENDERIN.md` (nur offen: DSO-2024-Zahl
  final gegen DSO-PDF gegenlesen, kein Blocker) · Review-Seite: https://claude.ai/code/artifact/079072b5-e6f6-47cf-8384-28a81d1f27c8
- Memory-Detail: `memory/project_wissens_tabs_kampagne.md` (Abschnitt „CE-06 komplett gegen I care 2025" + „Launch-Entscheidung").

## Auftrag jetzt: „Sahne von Sahne"-Pilot vorbereiten (überzeugen, nicht lean-lernen)
Entscheidung steht (Dozentin bestätigt): **B1-Varianten der Tabs + Arabisch als EINE Demo-Sprache.** Nicht alle 8 Sprachen
(Post-PMF). „Bestes ≠ Meistes" — fokussierte Tiefe, USP sichtbar machen.

### 1. B1-Varianten der Wissens-Tabs (größter Hebel, ~1 Tag)
- Betrifft NUR die **inlineWissen-Tabs** (~33 über die 11 Situationen). MC/Branching/Dialog haben schon `contentB1`/
  `explanationB1`/`feedbackB1` — die sind fertig.
- Zu ergänzen pro Tab: **`storyAufhaengerB1`, `kerntextB1`, `faustregelB1`**, Spektrum-`kurzbeschreibung` in einfacher
  Sprache, `karteikarte.vorderseiteB1`/`rueckseiteB1`. Schema: `InlineWissenData` in `content/_types.ts`.
- **Niveau = EINFACHE Sprache (B1)**, NICHT Leichte Sprache (A1). Regel-Beleg: `recherche/inhalte/ERGEBNIS.md` Abschnitt
  „Leichte vs. Einfache Sprache". Kurze Sätze, keine Nominalisierungen/Passiv-Ketten, Fachbegriff + Klammer-Erklärung,
  „du"-Anrede, echte Umlaute.
- **WICHTIG: B1 braucht KEIN neues Grounding.** Es ist dieselbe, schon verbatim-belegte Fach-Aussage in einfacherer
  Sprache. Also: keine neuen kernfaktId, keine neuen Belege — nur den C1-`kerntext` sprachlich vereinfachen. Der Abstandstest
  läuft weiter gegen den Korpus (paraphrasiert bleiben → Abstand 0).
- Gates danach: `npx tsc --noEmit`; `scripts/abstand-ce06-situation.ts <sit>` (weiterhin 0); optional ein B1-Didaktik-Check.
  Gold-Vorbild für B1-Ton: die bestehenden `explanationB1` in `ls-wagner-reanimation`.

### 2. Arabisch — Demo-Pfad + Glossar (Beweis der Mehrsprachigkeit)
- **Warum Arabisch:** Research-Priorität #1 der Sprachbrücke (`PROJEKTBRIEFING.md` Z.89-117, `recherche/inhalte/ERGEBNIS.md`
  Z.111-135): Türkei größte Nationalität, aber 2./3.-Gen oft deutsch-muttersprachlich; **Deutsch–Arabisch = größte echte
  Bedarfsgruppe** (Syrien/Irak/Afghanistan/Marokko starten mit A2/B1). RTL beweist die Tech im schwersten Fall.
- **Scope = Glossar-First + Demo-Pfad, NICHT Voll-Übersetzung** (`recherche/dialog/KLAERUNGEN.md` Widerspruch #2):
  Glossar Pflicht DE/AR (ggf. TR), die 1–2 Demo-Situationen mit AR-Sprachbrücke; nicht alle 33 Tabs übersetzen.
- Tech: next-intl + `dir="rtl"` sind schon gebaut (AGENTS.md). Glossar-Struktur `content/ce-06/glossar.ts`
  (`GlossarEntry`). Prüfen, ob AR-Felder im Schema existieren, sonst ergänzen.
- **Demo-Pfad:** Wagner (Demo-Wow Reanimation) + 1 zweite Situation. **Offen (Dozentin fragen): welche zweite?**
  Vorschlag: eine, die die Zwei-Achsen-Adaptivität zeigt (gleiches Thema B1 vs. C1 nebeneinander).

### 3. Danach: Deploy carovia.de (Pilot).

## Reihenfolge
B1-Tabs zuerst (größter Überzeugungs-Hebel) → Arabisch Demo-Pfad+Glossar → Deploy.

## Leitplanken
- I care = Prüfungsmaßstab; wo aktuelle Leitlinie abweicht + sicherheitsrelevant → aktualisieren + zitieren (schon getan).
- Nichts erfinden, nichts Urheberrechtliches committen (Korpus lokal), echte Umlaute, `dir="rtl"` für AR.
- Dozentin = Waleria (Pflegepädagogin) — fachliche Instanz; bei echten fachlichen Zweifeln parken in FRAGEN-GRUENDERIN.
- Kein `git push`/Deploy ohne Freigabe. Dev-Server NIE über Claude starten.

## Erste Schritte im neuen Chat
1. Kurz `content/ce-06/AUTONOM-FORTSCHRITT.md` + diesen Prompt lesen.
2. Mit den B1-Tabs einer Situation anfangen (z. B. Wagner) als Muster, Dozentin gegenlesen lassen, dann skalieren.
3. Parallel: Glossar-AR-Schema prüfen + Arabisch für den Wagner-Demo-Pfad.
