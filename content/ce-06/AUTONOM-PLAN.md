# CE-06 autonom fertigstellen — Playbook (self-driving)

> **Zweck:** Damit ich CE-06 ohne ständige Rückfragen weiterbaue. Dieses Dokument ist mein
> stehender Auftrag + meine Leitplanken. Es gilt zusammen mit `specs/DIDAKTIK-WISSENSNETZ.md`,
> `specs/CROSS-CE-KONZEPTREGISTER.md`, `specs/ce-06/REDESIGN-SITUATIONEN-CE06.md`,
> `specs/ce-06/WISSENS-VERTEILUNG-LE1.md`. Gold-Template: Situation **Wagner**.

## Stehende Freigabe (was ich OHNE Rückfrage tue)
Die volle Pipeline pro Situation/Baustein anwenden — genau wie bei Wagner:
Wissens-Landkarte der LE → Verteilung (Heimat/Wiederbegegnung) → Wissens-Tabs (Gold-Standard-
Aufbau) → **jede** Tab bekommt eine Anwendung (Variante D) → KB-Marker aus dem LE-Schwerpunkt-Set
→ Marker vollständig → Literatur WORT FÜR WORT lesen vor dem Schreiben → paraphrasieren
(Abstandstest 0) → Kernfakten verbatim-belegt → Gates. **Prüf-Siegel der Gründerin wird
gebündelt** (morgens/später), nicht pro Baustein abgewartet.

## Reihenfolge (Priorität)
1. **LE1 abschließen** (Template-Domäne):
   - **Ríos → Neuro-Differenzial**: + Apoplex + epileptischer Anfall (K3), Wissens-Tabs +
     Anwendung, KB-Marker-Korrektur. Wiederbegegnung HKS↔Synkope setzen.
   - **Lehmann**: KB-Marker-Korrektur + Wissens-Tabs (K1 Trauma: Wunden/Blutung/Druckverband).
   - **Novak**: KB-Marker-Korrektur + Wissens-Tabs (K4 psychotische Erregung).
   - **Thermisch/chemische Notfälle**: NEUE kleine Situation (K1-Rest: Hitze/Verbrennung/
     Erfrierung/Verätzung). Kernfakten zuerst recherchieren.
   - **Differenzierungs-Capstone**: neue Situation, interleavt K2/K3/K4 („was ist es?").
2. **LE2–LE5**: je Situation Redesign — KB-Marker aus dem jeweiligen LE-Set + Wissens-Landkarte
   der LE + Wissens-Tabs mit Anwendung + Grounding (kernfaktId nachrüsten wo Situation adoptiert).
3. **Cross-CE-Rücklinks** setzen, wo CE-06 Wiederbegegnung ist (Register).

## Definition of Done pro Einheit (K.O.)
- `npx tsc --noEmit` PASS
- Abstandstest 0 (Wissens-Prosa vs. Quelle, 5-Wort-N-Gramm)
- `zitat-verifizierer` PASS (neue Kernfakten verbatim belegt)
- `step-grounding-check ce-06` PASS (0 dangling/missing)
- `pflege-validator` + `klinik-panel` PASS **oder alle Findings gefixt** (jede Severity)
- Wissens-Korridor 20–30 %; JEDER Tab hat eine Anwendung; KB aus LE-Set; Marker vollständig

## Leitplanken — wann ich PARKE statt zu raten
Geparkt wird in `content/ce-06/FRAGEN-GRUENDERIN.md` (ich wecke NIEMANDEN, ich mache mit dem
Rest weiter):
- Fachliche Aussage NICHT aus Pflege-Standardliteratur belegbar → **nicht erfinden**: kürzen
  (curriculum-tiefe-Regel) oder parken.
- Quelle fehlt für einen nötigen Fakt → Beschaffungsliste + parken (kein Piraten-Repo).
- Echter fachlicher Zweifel / Widerspruch in der Literatur → parken.
- Rechtsstand/Currency unklar → parken statt veraltete Fassung riskieren.
- Didaktische/strukturelle Entscheidung OHNE klaren Default (z. B. Zuschnitt einer neuen
  Situation) → sinnvollen Default nach den Leitfäden wählen, im Fortschritts-Log vermerken
  (nicht parken, nicht wecken) — reversibel.
- **NIE:** erfinden, Grounding überspringen, über Ausbildungsniveau lehren, ungedeckte Claims,
  Verbatim-Zitate ins Produkt, shadcn/ui ändern, Middleware anfassen, Secrets, Dev-Server starten.

## Reporting (damit der Morgen 1 Blick ist)
- `content/ce-06/AUTONOM-FORTSCHRITT.md` — pro Einheit: gebaut / Gates-Status / offene Findings.
- `content/ce-06/FRAGEN-GRUENDERIN.md` — geparkte Entscheidungen + Belege-Beschaffung.
- Memory (`project_wissens_tabs_kampagne.md`) am Ende jedes größeren Blocks aktualisieren.
- Kein `git commit`/`push` ohne ausdrückliche Freigabe (nur stagen bei git rm etc.).

## Wie du mich startest / stoppst
- **Start:** ein Wort — „weiter" / „leg los". Ich arbeite den Plan in Reihenfolge ab.
- **Dauerlauf während du schläfst:** `/loop CE-06 laut AUTONOM-PLAN fertig` — dann tacte ich mich
  selbst durch, parke Fragen, wecke dich nicht.
- **Stopp:** „stopp".

## Ehrliche Erwartung zum Umfang
CE-06 ist groß (LE1–LE5, 9 bestehende Situationen + 2 neue). Ich arbeite **qualitätszuerst in
Prioritätsreihenfolge** und schraube die Messlatte NICHT runter, um „fertig" zu behaupten.
Realistisch pro Arbeitsblock: LE1 vollständig, dann LE2 beginnend. Was nicht in Standard-Qualität
geht, wird geparkt statt gepfuscht.
