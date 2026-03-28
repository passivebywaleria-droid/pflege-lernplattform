# Dialog/Interaktions-Varianten — 25 Gesprächs- und Simulations-Formate

**Veröffentlicht:** 2026-03-25
**Status:** Forschungsbasiert, implementierungsreif
**Quelle:** E-Learning-Forschung für Gesundheitsberufe

---

## Aktueller Stand

Die aktuelle Implementierung in `src/components/learn/step-dialog.tsx` ist ein WhatsApp-Style Chat mit:
- Chat-Bubbles (Patient links weiß, Pflege rechts grün)
- Typing-Indicator mit Bounce-Animation
- 3 Antwortoptionen pro Phase (linear, Phase für Phase)
- Score pro Option (0-3), Prozent-Ergebnis am Ende
- Vitals-Monitor (grün, Monospace)
- Feedback-Box nach jeder Antwort

Die `DialogPhase`-Datenstruktur in `content/ce-05/_types.ts` unterstützt: `context`, `speaker`, `vitals`, `options` (mit Score + Feedback), B1-Varianten.

---

## 1. DIALOG-FORMATE (7 Formate)

### Format 1: WhatsApp-Chat (AKTUELL)

**Beschreibung:** Messenger-UI mit Chat-Bubbles, Typing-Indicator, Zeitstempel. Patient schreibt links (weiß), Pflege rechts (grün). WhatsApp-Hintergrundmuster.

**Wann passt es:** Pflege-Patient-Kommunikation auf Augenhöhe, informelle Gespräche, Anamnese, Beratung, Aufklärung. Junge Zielgruppe erkennt das Format sofort.

**Wann passt es NICHT:** Formelle Situationen (Visite, Übergabe), Gruppensituationen, zeitkritische Szenarien. Wirkt bei Arzt-Kommunikation zu casual.

**Pflege-Beispiel:** Pflegekraft berät Patienten über Thromboseprophylaxe. Patient fragt nach, Pflegekraft erklärt in einfacher Sprache.

**App-UI:** Bereits implementiert. Grüner Hintergrund mit SVG-Pattern, runde Bubbles, Uhrzeiten, Typing-Dots.

---

### Format 2: Telefongespräch-Simulation

**Beschreibung:** Dunkelgrüner/schwarzer Screen im Telefon-UI. Oben: Anrufer-Name + Timer (00:32). Keine Chat-Bubbles, stattdessen audiovisuelle Darstellung: Schallwellen-Animation wenn der Andere spricht, Text als Untertitel eingeblendet. Antwortoptionen erscheinen als Buttons am unteren Rand.

**Wann passt es:** Arzt anrufen (SBAR-Meldung), Notfallkommunikation, Rückruf von Angehörigen, Nachtdienst-Szenarien wo man den Arzt telefonisch informiert. Trainiert ein reales Szenario das Schüler fürchten: "Den Arzt nachts anrufen."

**Wann passt es NICHT:** Situationen wo Körpersprache wichtig ist, lange Beratungsgespräche, Situationen wo visuelle Hinweise (Mimik, Gestik) entscheidend sind.

**Pflege-Beispiel:** Patient hat plötzlich Atemnot. Pflegekraft ruft Stationsarzt an. SBAR-Struktur: "Situation: Herr Mueller, Zimmer 12, akute Dyspnoe. Background: 78 Jahre, Z.n. Hüft-TEP Tag 2. Assessment: SpO2 88%, Tachykardie 110/min. Recommendation: Bitte kommen Sie."

**App-UI:** Schwarzer Hintergrund. Oben: runder Avatar + Name + "Anruf läuft" + Timer. Mitte: animierte Schallwellen (CSS) + Untertitel-Text. Unten: 3 Antwort-Buttons. Optional: "Auflegen"-Button als Abbruch-Option.

---

### Format 3: Visite-Runde (Video-Call-Stil)

**Beschreibung:** Split-Screen oder Kachel-Layout wie ein Video-Call. Oben: Arzt-Avatar (mit Namensschild und Rolle). Unten: Patient im Bett (illustriert). Seitlich: Pflegekraft (Du). Der Arzt stellt Fragen, der Patient antwortet, die Pflegekraft muss relevante Informationen ergänzen.

**Wann passt es:** Visite-Simulation, interprofessionelle Kommunikation, Situationen wo 3+ Personen beteiligt sind. Trainiert die Pflege-Rolle IN der Visite: Wann spreche ich? Was berichte ich?

**Wann passt es NICHT:** 1:1-Gespräche, informelle Situationen, reine Wissensvermittlung.

**Pflege-Beispiel:** Morgenvisite. Arzt fragt: "Wie war die Nacht?" Patient sagt: "Gut, nur die Schulter." Pflegekraft muss ergänzen: Schmerzprotokoll, Vitalwerte, Medikamenten-Compliance. Arzt entscheidet basierend auf dem Input.

**App-UI:** Grid-Layout (2x2 oder 1+2). Jede Person hat Avatar + Namensbadge + Rolle. Sprechende Person hat leuchtenden Rand. Antwortoptionen erscheinen als Overlay wenn du dran bist. Zeitstrahl unten zeigt Visite-Fortschritt.

---

### Format 4: Comic-Panel / Sprechblasen-Stil

**Beschreibung:** Illustrierter Patient im Bett oder Pflegesituation. Sprechblasen erscheinen direkt über den Charakteren wie in einem Comic. Sequentiell: Panel für Panel, wie ein interaktiver Comic. Antwortoptionen in leerer Sprechblase der Pflegekraft.

**Wann passt es:** Anfänger (Bloom B1-B2), sprachschwache Schüler (B1-Deutsch), visuelle Lerner. Die Bilder geben Kontext den der Text allein nicht liefert. Auch für emotionale Szenarien (Mimik des Patienten sichtbar).

**Wann passt es NICHT:** Komplexe mehrstufige Entscheidungen, lange Dialoge (wird visuell überladen), Dokumentations-Szenarien.

**Pflege-Beispiel:** Ältere Patientin im Bett, schmerzverzerrtes Gesicht. Sprechblase: "Mein Rücken tut so weh..." Pflegekraft-Sprechblase (leer, zum Auswählen): a) "Auf einer Skala von 1-10?" b) "Seit wann?" c) "Haben Sie Ihre Tabletten genommen?"

**App-UI:** Großes Illustrations-Panel (SVG oder Bild). Sprechblasen mit Schwanz zum Sprecher. Animation: Sprechblasen poppen nacheinander auf (framer-motion). Antwort: Leere Sprechblase der Pflegekraft mit Auswahloptionen darin.

---

### Format 5: Interview-Protokoll (Frage-Antwort-Tabelle)

**Beschreibung:** Strukturiertes, formelles Format. Zweispaltige Tabelle oder gestapelte Karten: Links die Frage/Aktion der Pflegekraft, rechts die Antwort des Patienten. Oben: Patient-Dossier (Name, Alter, Diagnose). Format erinnert an Pflegedokumentation.

**Wann passt es:** Anamnese-Erhebung, strukturierte Befragung, Assessment-Instrumente (Barthel-Index, Braden-Skala). Trainiert systematisches Vorgehen. Bloom B3-B4.

**Wann passt es NICHT:** Emotionale Gespräche, Notfallsituationen, informelle Kommunikation. Zu steril für Beziehungsaufbau.

**Pflege-Beispiel:** Pflegeassessment bei Aufnahme. Schüler muss in richtiger Reihenfolge Fragen stellen: Allergien, Medikamente, Vorerkrankungen, Mobilität, Ernährung. Tabelle füllt sich Schritt für Schritt.

**App-UI:** Card mit Patient-Header (Avatar, Name, Zimmer, Diagnose). Darunter: gestapelte Zeilen. Jede Zeile hat links ein Dropdown/Button für die Pflegefrage, rechts erscheint die Antwort nach Auswahl. Fortschrittsbalken zeigt Assessment-Vollständigkeit.

---

### Format 6: Gruppengespräch (Multi-NPC)

**Beschreibung:** Mehrere NPCs gleichzeitig sichtbar. Kreis- oder Halbkreis-Anordnung der Avatare. Verschiedene Personen sprechen nacheinander, mit unterschiedlichen Meinungen/Perspektiven. Die Pflegekraft muss auf verschiedene Personen reagieren oder moderieren.

**Wann passt es:** Fallbesprechung im Team, Angehörigen-Gespräch mit mehreren Familienmitgliedern, Ethik-Diskussion, Pflegeplanung im interdisziplinären Team. Bloom B4-B5.

**Wann passt es NICHT:** Einfache 1:1-Situationen, Anfänger-Content, schnelle Entscheidungen.

**Pflege-Beispiel:** Angehörigen-Gespräch. Tochter will Mutter nach Hause holen, Sohn will Pflegeheim, Patientin schweigt. Pflegekraft muss vermitteln, Patientenwille erfragen, professionell beraten. Jede Person hat andere Emotionen und Argumente.

**App-UI:** Oberer Bereich: 3-4 Avatare im Halbkreis mit Namen und Rollen-Badges. Aktiver Sprecher hat Highlight-Ring. Chat-Bereich zeigt alle Nachrichten mit farblich unterschiedlichen Absendernamen. Antwortoptionen adressieren verschiedene Personen ("Zu Frau Schmidt sagen:" / "Zur Tochter sagen:").

---

### Format 7: Übergabe-Gespräch (Schichtübergabe)

**Beschreibung:** Split-Screen: Links die abgebende Pflegekraft (NPC), rechts eine Notizblock-UI. Die abgebende Kraft berichtet über Patienten. Der Schüler muss entscheiden: Was ist wichtig? Was notiere ich? Was frage ich nach?

**Wann passt es:** SBAR-Training, Schichtübergabe, Priorisierung von Informationen. Realitätsnahes Format das im Pflegealltag täglich vorkommt. Bloom B3-B4. Laut Forschung verbessert SBAR-basiertes Simulationstraining die Kommunikationsklarheit signifikant.

**Wann passt es NICHT:** Patient-Pflege-Kommunikation, emotionale Szenarien, Anfänger die noch kein Basiswissen haben.

**Pflege-Beispiel:** Nachtdienst übergibt an Frühdienst. "Zimmer 3, Herr Yilmaz, 67 Jahre, Pneumonie. Hat nachts 38,9 Fieber gehabt, Antibiotikum läuft seit 02:00. SpO2 um 04:00 auf 91% gefallen, Sauerstoff auf 4l erhöht. Will unbedingt nach Hause." Schüler muss priorisieren: Was ist dringend? Was ist Routine?

**App-UI:** Links: Avatar der Kollegin + Sprech-Bubble (sequentiell, wie Teleprompter). Rechts: Interaktiver Notizblock. Schüler tippt auf wichtige Informationen um sie zu markieren. Am Ende: Vergleich "Was hast du notiert?" vs. "Was war wirklich wichtig?" Bonus: Rückfrage-Button ("Was meinst du mit...?").

---

## 2. BRANCHING-VARIANTEN (5 Formate)

### Format 8: Linearer Dialog (Phase für Phase) — AKTUELL

**Beschreibung:** Jede Phase hat eine feste Reihenfolge. Unabhängig von der Antwort geht es zur nächsten Phase. Scoring ist kumulativ, aber der Pfad ändert sich nicht.

**Wann passt es:** Einfache Gespräche, Einstieg in Dialogübungen (Bloom B1-B2), wenn alle Optionen geübt werden sollen. Niedrige Komplexität, gut für Anfänger.

**Wann passt es NICHT:** Wenn Konsequenzen wichtig sind, wenn "falsche" Antworten reale Folgen hätten, fortgeschrittene Schüler die Herausforderung brauchen.

**Pflege-Beispiel:** Begrüßung eines neuen Patienten. Egal was man sagt, das Gespräch geht weiter, nur der Score variiert.

**App-UI:** Aktuell implementiert. Chat + 3 Optionen + Feedback + nächste Phase.

---

### Format 9: Verzweigter Dialog (verschiedene Pfade)

**Beschreibung:** Je nach Antwort geht der Dialog in eine andere Richtung. Echte Verzweigungen mit unterschiedlichen Folge-Szenen. Wie ein "Choose Your Own Adventure". Verschiedene Enden möglich.

**Wann passt es:** Komplexe Gespräche wo die Wortwahl den Verlauf ändert. Bloom B3-B5. Trainiert Konsequenz-Denken. Forschung zeigt: Branching-Szenarien fördern klinisches Denken und Entscheidungskompetenz besser als lineare Simulationen.

**Wann passt es NICHT:** Einfache Wissensfragen, Situationen wo es nur eine richtige Antwort gibt, wenn der Content-Aufwand nicht gerechtfertigt ist (jeder Pfad braucht eigenen Content).

**Pflege-Beispiel:** Schmerzassessment. Wenn du zuerst nach der Schmerzskala fragst, erfährst du die Intensität (Pfad A). Wenn du zuerst nach der Lokalisation fragst, beschreibt der Patient die Ausstrahlung (Pfad B). Beide führen zum Ziel, aber über andere Informationen.

**App-UI:** Wie WhatsApp-Chat, aber nach Auswahl verzweigt der Dialog sichtbar. Optional: Mini-Flowchart am Rand zeigt wo man ist. Am Ende: "Du hast Pfad A genommen. Es gibt noch Pfad B — willst du nochmal?"

---

### Format 10: Konsequenz-Dialog (Auswirkungen auf spätere Phasen)

**Beschreibung:** Kein sofortiger Pfadwechsel, aber frühere Antworten beeinflussen spätere Phasen. Patient erinnert sich. Beziehungsqualität baut sich auf oder ab. Variablen werden gespeichert und beeinflussen Optionen/Reaktionen.

**Wann passt es:** Mehrteilige Patientenbeziehungen, Bloom B4-B5. Trainiert: "Wie ich kommuniziere hat langfristige Folgen." Ähnlich wie in der Forschung zu "Real-time decision-making in chronic illness branching simulation" beschrieben.

**Wann passt es NICHT:** Einmalige kurze Dialoge, Anfänger die noch Grundlagen lernen, wenn der Aufwand die Lernerfahrung nicht rechtfertigt.

**Pflege-Beispiel:** Phase 1: Du vergisst dich vorzustellen. Phase 4: Patient sagt "Sie haben mir noch nicht mal Ihren Namen gesagt" und ist misstrauisch. Oder: Phase 1: Du sprichst den Patienten mit Namen an. Phase 4: Patient öffnet sich emotional weil er Vertrauen aufgebaut hat.

**App-UI:** Wie WhatsApp-Chat, aber mit "Beziehungs-Indicator" oben (Herz-Icon mit Füllung 0-100%). Jede Antwort verändert den Indicator subtil. Am Ende: Zusammenfassung "Dein Vertrauenslevel: 78% — Der Patient hat sich geöffnet."

---

### Format 11: Zeitdruck-Dialog (Countdown)

**Beschreibung:** Antwort muss innerhalb von X Sekunden gewählt werden. Timer läuft sichtbar ab. Bei Ablauf: Standardreaktion (Schweigen, Stottern) oder Patient wird ungeduldig. Erhöhter Stress simuliert reale Notfallsituationen.

**Wann passt es:** Notfallkommunikation, Triage, Reanimations-Kommunikation. Bloom B3-B4. Simuliert den echten Zeitdruck auf Station. Forschung zeigt: Zeitdruck in Branching-Simulationen verbessert die klinische Adaptibilität.

**Wann passt es NICHT:** Beratungsgespräche, emotionale Situationen, Anfänger, sprachlich schwache Schüler (B1-Deutsch — Zeitdruck + Sprachbarriere = Frustration).

**Pflege-Beispiel:** Patient kollabiert. Du musst in 10 Sekunden entscheiden: Notruf? Vitalzeichen prüfen? Kollegen rufen? Je schneller und richtiger, desto mehr Punkte. Timer läuft, Herzfrequenz-Sound im Hintergrund.

**App-UI:** WhatsApp-Chat mit prominentem Countdown-Timer oben (roter Kreis, Sekundenzähler). Optionen haben Urgency-Styling (roter Rand). Bei Ablauf: graue Bubble "..." (Schweigen). Pulsierender Rand um den Chat bei unter 5 Sekunden.

---

### Format 12: Empathie-Meter (Beziehungs-Score sichtbar)

**Beschreibung:** Sichtbarer Empathie-/Beziehungs-Score der sich bei jeder Antwort verändert. Grün = Patient fühlt sich verstanden. Rot = Patient zieht sich zurück. Angelehnt an Game-Design ("Relationship Points") und die Empathy Assessment Scale aus der Forschung.

**Wann passt es:** Schwierige Gespräche (Trauer, Angst, Wut), Kommunikation mit Angehörigen, Bloom B3-B5. Macht die "weichen" Kommunikationsfähigkeiten messbar. Game-based Learning für Empathie zeigt nachweislich Verbesserung der Empathie-Scores bei Pflegefachkräften.

**Wann passt es NICHT:** Faktenbasierte Dialoge, Dokumentation, SBAR (zu technisch für Empathie-Scoring), wenn die Metrik vom Inhalt ablenkt.

**Pflege-Beispiel:** Patientin weint nach Diagnosegesprächs. Empathie-Meter steht bei 50%. "Ich verstehe, das ist ein Schock" +20%. "Das wird schon" -10% (Bagatellisierung). "Möchten Sie darüber reden?" +15%. Ziel: über 80%.

**App-UI:** Herz- oder Gesichts-Icon oben rechts mit Farbverlauf (rot-gelb-grün) und Prozentzahl. Ändert sich animiert bei jeder Antwort. Optional: Mini-Gesicht des Patienten das die Emotion zeigt (lächelnd, neutral, traurig). Am Ende: "Empathie-Score: 85% — Hervorragend!"

---

## 3. SIMULATIONS-FORMATE (5 Formate)

### Format 13: Klinische Entscheidungs-Simulation (Patient verschlechtert sich)

**Beschreibung:** Zeitverlauf-Simulation. Patient-Zustand verschlechtert sich in Echtzeit (oder Step-basiert). Vitalwerte ändern sich. Schüler muss in richtiger Reihenfolge handeln: Beobachten, Messen, Melden, Maßnahmen einleiten. Wie Body Interact oder vSim for Nursing, aber text/kartenbasiert.

**Wann passt es:** Notfall-Management, Verschlechterung erkennen, Prioritätensetzung. Bloom B4-B6. Kernkompetenz der Pflege: früh erkennen wenn etwas nicht stimmt. Forschung bestätigt: virtuelle Simulationen verbessern klinisches Denken signifikant.

**Wann passt es NICHT:** Routine-Pflege, Beratung, wenn kein dynamischer Zustand simuliert werden muss.

**Pflege-Beispiel:** Herr Mueller, 2 Tage nach OP. Anfangs stabil. Dann: "Mir ist schwindelig." Vitalwerte: RR 100/60 (vorher 130/80). Puls steigt auf 110. Was tust du zuerst? Arzt rufen? Infusion beschleunigen? Nachblutung checken?

**App-UI:** Oben: Vitalwerte-Monitor (schwarzer Hintergrund, grüne Schrift, wie aktuell). Mitte: Zeitstrahl mit Phasen (T+0h, T+2h, T+4h). Jede Phase: Karte mit Patientenaussage + neue Vitalwerte. Unten: 4-6 Aktions-Buttons (nicht Antworten, sondern Handlungen). Reihenfolge zählt.

---

### Format 14: Triage-Simulation (Priorisierung)

**Beschreibung:** Mehrere Patienten gleichzeitig. Schüler muss priorisieren: Wer zuerst? Warum? Karten-basiert: Jeder Patient ist eine Karte mit Kurzinfos. Drag-and-Drop in Prioritätsreihenfolge. Inspiriert von Triage-Simulations-Szenarien die Kommunikation und klinisches Denken kombinieren.

**Wann passt es:** Priorisierung, Zeitmanagement, Nachtdienst-Szenarien. Bloom B4-B5. Trainiert die Fähigkeit: "Alles ist dringend — was ist am dringendsten?"

**Wann passt es NICHT:** Einzelpatient-Szenarien, Anfänger die noch keine Krankheitsbilder kennen, emotionale Kommunikation.

**Pflege-Beispiel:** Nachtdienst, 4 Patienten klingeln gleichzeitig. Karte 1: "Brauche Schmerzmittel" (Routine). Karte 2: "Mir ist übel" (evtl. Aspiration?). Karte 3: "Bin gestürzt" (Sturzfolgen?). Karte 4: "Kann nicht atmen" (NOTFALL). Richtige Reihenfolge: 4, 3, 2, 1.

**App-UI:** 4 Patientenkarten nebeneinander (scrollbar auf Mobile). Jede Karte: Avatar + Name + Zimmernr. + Kurztext + Vitalwerte. Drag-and-Drop (dnd-kit, bereits im Stack) in nummerierte Slots (1. Priorität, 2. Priorität...). Nach Sortierung: Feedback pro Position mit Begründung.

---

### Format 15: Dokumentations-Simulation

**Beschreibung:** Schüler muss einen Pflegebericht, eine Wunddokumentation oder einen Verlegungsbericht schreiben. Strukturiertes Formular mit Freitext-Feldern. KI bewertet Vollständigkeit, Fachsprache, Klarheit.

**Wann passt es:** Pflegedokumentation lernen, Fachsprache üben, Bloom B4-B6. Integrierte Plattformen wie vSim + Lippincott DocuCare kombinieren Simulation mit Dokumentation. Absolut praxisrelevant: schlechte Doku = rechtliches Risiko.

**Wann passt es NICHT:** Kommunikationstraining, Anfänger die noch keine Fachbegriffe kennen, schnelle Quiz-Formate.

**Pflege-Beispiel:** Nach dem Branching-Szenario (Dekubitus Grad 2): "Dokumentiere die Wunde." Formular: Lokalisation (Dropdown), Größe (cm), Wundgrund (Auswahl), Wundrand (Auswahl), Exsudat (Auswahl), Maßnahmen (Freitext). KI prüft: "Du hast die Fotodokumentation vergessen."

**App-UI:** Formular-UI mit strukturierten Feldern (Dropdowns, Checkboxen) + Freitext-Bereich. Oben: Patient-Header mit Fallinfos. Seitlich: Checkliste "Was gehört in die Doku?" Unten: "Absenden" Button. Danach: KI-Feedback mit Annotation (grüne Häkchen / rote Markierungen).

---

### Format 16: Medikamenten-Check (Verordnungs-Prüfung)

**Beschreibung:** Arztanordnung wird gezeigt. Schüler muss prüfen: Richtiger Patient? Richtige Dosis? Richtige Zeit? Kontraindikationen? Allergien? Interaktionen? Die "5 R"-Regel der Medikamentengabe als interaktive Simulation.

**Wann passt es:** Medikamenten-Management, Patientensicherheit, Bloom B3-B5. Häufigster Fehler in der Pflege: Medikamentenfehler. Training hier ist direkt lebensrettend.

**Wann passt es NICHT:** Allgemeine Kommunikation, emotionale Szenarien, wenn das Thema keine Medikamente betrifft.

**Pflege-Beispiel:** Anordnung: "Methotrexat 15mg p.o. täglich." Patient: Frau Schmidt, 62, RA. Allergie: Penicillin. Nierenwerte: Kreatinin 2.1. Schüler muss erkennen: 1) Methotrexat ist WÖCHENTLICH nicht täglich (Überdosis-Gefahr!), 2) Nierenwerte sind erhöht (Kontraindikation), 3) Penicillin-Allergie ist hier irrelevant.

**App-UI:** Oben: Verordnungs-Karte im "Krankenhaus-Formular-Stil" (weiß, monospace). Darunter: Patient-Dossier aufklappbar (Allergien, Laborwerte, aktuelle Medis). Unten: Checkliste mit Toggle-Buttons: "Korrekt" / "Fehler gefunden" pro Feld. Bei Fehler: Freitext "Was ist falsch?" KI-Bewertung.

---

### Format 17: Visite-Begleitung (Arzt fragt, du antwortest)

**Beschreibung:** Der Arzt (NPC) stellt Fragen während der Visite. Der Schüler muss als Pflegekraft korrekte Informationen liefern: Vitalwerte, Befinden, Medikamenten-Compliance, Besonderheiten der Nacht. Kein Chat — eher ein Abfrage-Format.

**Wann passt es:** Interprofessionelle Kommunikation Pflege-Arzt. Bloom B3-B4. Trainiert: "Was muss ich dem Arzt sagen? Was ist relevant?" SBAR-Training in der Praxis. Forschung belegt signifikante Verbesserung der Kommunikationsklarheit durch SBAR-Simulation.

**Wann passt es NICHT:** Patient-Pflege-Kommunikation, Beratung, wenn kein Arzt involviert ist.

**Pflege-Beispiel:** Arzt bei Visite: "Wie war die Nacht bei Frau Mueller?" Optionen: a) "Gut, keine Besonderheiten" (zu ungenau), b) "SpO2 stabil 95%, Temperatur 37.2, hat um 03:00 Bedarfsmedikation Ibuprofen 600 erhalten wegen Schmerzen re. Knie, VAS 6" (korrekt, strukturiert), c) "Sie hat schlecht geschlafen und hatte Schmerzen" (korrekt aber unstrukturiert).

**App-UI:** Visite-Runde als Timeline. Links: Arzt-Avatar mit Sprechblase (Frage). Rechts: Patientenakte-Snippet als Hilfe (aufklappbar). Unten: 3 Antwortoptionen. Bewertung nicht nur richtig/falsch sondern auch Qualität der Kommunikation (strukturiert, prägnant, vollständig).

---

## 4. FEEDBACK-VARIANTEN IM DIALOG (5 Formate)

### Format 18: Sofort-Feedback (AKTUELL)

**Beschreibung:** Nach jeder Antwort erscheint eine Feedback-Box. Erklärt warum die Antwort gut/schlecht war. Sandwich-Prinzip: Loben, Korrigieren, Ermutigen.

**Wann passt es:** Anfänger, neue Themen, wenn der Lerneffekt pro Antwort maximiert werden soll. Forschung-konform: sofortiges Feedback ist effektiver als verzögertes bei Anfängern.

**Wann passt es NICHT:** Fortgeschrittene Schüler die sich selbst einschätzen sollen, wenn der Flow unterbrochen wird, realistische Simulationen (kein Arzt gibt dir nach jedem Satz Feedback).

**Pflege-Beispiel:** Aktuell implementiert. Blaue Box mit "Feedback"-Label.

**App-UI:** Bereits implementiert. Blaue Box mit framer-motion Animation.

---

### Format 19: Kumulatives Feedback am Ende (Debrief)

**Beschreibung:** Kein Feedback während des Dialogs. Am Ende: ausführliches Debrief. Alle Antworten nochmal aufgelistet mit Bewertung. Stärken und Schwächen benannt. Verbesserungsvorschläge.

**Wann passt es:** Fortgeschrittene (Bloom B4-B6), Prüfungssimulation, wenn der Realismus hoch sein soll. Im echten Pflegealltag gibt es auch kein Sofort-Feedback. Debrief ist Standard in der Simulations-basierten Ausbildung.

**Wann passt es NICHT:** Anfänger die ohne Feedback verloren sind, lange Dialoge (am Ende hat man die ersten Antworten vergessen), wenn sofortige Korrektur nötig ist.

**Pflege-Beispiel:** Komplettes Aufnahmegespräch durchspielen (8 Phasen). Am Ende: "Phase 1 — Du hast dich vorgestellt. Phase 2 — Allergien nicht erfragt (FEHLEND). Phase 3 — Schmerzerfassung korrekt." Gesamtscore + Empfehlung.

**App-UI:** Dialog läuft ohne Unterbrechung. Am Ende: Debrief-Screen mit aufklappbaren Accordion-Sektionen pro Phase. Jede Phase: grüner Haken oder rotes X + Erklärung. Unten: Gesamtbewertung + "Nochmal versuchen?"-Button.

---

### Format 20: Patienten-Reaktion ALS Feedback (Implizit)

**Beschreibung:** Kein explizites Feedback-Feld. Stattdessen reagiert der Patient nonverbal/verbal als implizites Feedback. Schlechte Antwort: Patient wird einsilbig, verschränkt Arme, sagt "Hm." Gute Antwort: Patient öffnet sich, erzählt mehr, lächelt.

**Wann passt es:** Fortgeschrittene Kommunikation (Bloom B4-B5), Empathie-Training, wenn der Schüler lernen soll die Reaktion des Gegenüber zu LESEN. Realitätsnah: Im echten Gespräch gibt auch niemand explizites Feedback.

**Wann passt es NICHT:** Anfänger die nicht wissen worauf sie achten sollen, Fakten-basierte Dialoge, wenn die Reaktion mehrdeutig wäre.

**Pflege-Beispiel:** Patientin nach Fehlgeburt. Gute Antwort: "Das tut mir sehr leid." → Patientin weint, erzählt von ihren Ängsten (= sie vertraut dir). Schlechte Antwort: "Das kommt leider vor." → Patientin dreht sich weg, sagt "Lassen Sie mich bitte allein." (= Vertrauen zerstört).

**App-UI:** Comic-Panel-Stil oder WhatsApp-Chat. Patient-Avatar ändert Gesichtsausdruck (5 Stufen: freudig, neutral, besorgt, traurig, abweisend). Keine Feedback-Box. Erst am Ende optionaler Debrief: "Hast du bemerkt, dass die Patientin sich nach deiner 2. Antwort zurückgezogen hat?"

---

### Format 21: Kolleginnen-Kommentar (Peer-Feedback)

**Beschreibung:** Nach dem Dialog kommentiert eine erfahrene Kollegin (NPC) die Leistung. Informeller Ton, praxisnah. "Hey, ich hab mitgehört. Das mit der Schmerz-Skala war super. Aber nächstes Mal frag auch nach der Medikamenten-Compliance."

**Wann passt es:** Praxis-Transfer, mittleres Niveau (Bloom B3-B4), wenn das Feedback motivierend und kollegial statt "lehrhaft" sein soll. Simuliert Mentoring auf Station.

**Wann passt es NICHT:** Formelle Prüfungssimulation, wenn wissenschaftliche Präzision nötig ist, Anfänger die strukturiertes Feedback brauchen.

**Pflege-Beispiel:** Nach dem Schmerzassessment-Dialog. Kollegin Sarah: "Gut gemacht! Du hast VAS und Lokalisation erfragt. Was ich noch machen würde: Schmerzqualität (stechend? dumpf?) und Schmerzvertstärker/Schmerzminderer. Das hilft dem Arzt bei der Therapieentscheidung."

**App-UI:** Nach dem Dialog: Neue Chat-Bubble oder Sidebar von rechts. Avatar "Sarah, Mentorin" mit Pflegekraft-Icon. Sprechblase im informellen Ton. Optional: "Frag Sarah" Button für Rückfragen (KI-Chat an diesen Kontext gebunden).

---

### Format 22: Replay-Vergleich (Was wäre wenn?)

**Beschreibung:** Nach dem Dialog: Optimaler Dialog wird nochmal gezeigt. Side-by-Side: Links deine Version, rechts die optimale Version. Schüler sieht den Unterschied. Inspiriert von "Video-Review" aus der Simulations-forschung, aber textbasiert.

**Wann passt es:** Bloom B4-B6, wenn der Schüler aus dem Vergleich lernt. Besonders bei Kommunikation: SEHEN wie es besser geht ist wirkungsvoller als nur zu LESEN dass es falsch war.

**Wann passt es NICHT:** Wenn es nur eine richtige Antwort gibt (dann reicht normales Feedback), Anfänger die vom Vergleich überfordert wären.

**Pflege-Beispiel:** Aufklärungsgespräch. Deine Version: "Sie müssen die Kompressionsstrümpfe tragen." Optimale Version: "Die Kompressionsstrümpfe helfen, dass sich kein Blutgerinnsel bildet. Darf ich Ihnen zeigen wie Sie sie am besten anziehen?" Unterschied markiert: Partizipation statt Anweisung.

**App-UI:** Split-Screen oder Tab-Wechsel: "Dein Dialog" | "Optimaler Dialog". Unterschiede farblich markiert (rot = deine suboptimale Antwort, grün = optimale Alternative). Annotationen an den Unterschieden erklären das WARUM.

---

## 5. ROLLEN-VARIANTEN (3 Formate)

### Format 23: Pflege-Arzt-Dialog (SBAR)

**Beschreibung:** Pflege ruft Arzt an oder spricht mit Arzt während der Visite. SBAR-Struktur wird geübt: Situation, Background, Assessment, Recommendation. Der Arzt reagiert je nach Qualität der Meldung: strukturiert = schnelle klare Anweisung. Unstrukturiert = Arzt fragt 10x nach.

**Wann passt es:** Interprofessionelle Kommunikation, Bloom B3-B5. Eine der wichtigsten Kompetenzen in der Pflege. SBAR-basierte Simulation verbessert nachweislich die Kommunikationsqualität.

**Wann passt es NICHT:** Patient-Kommunikation, Anfänger die SBAR noch nicht kennen, emotionale Szenarien.

**Pflege-Beispiel:** Patient hat Fieber 39.5, neues CRP 180. SBAR: "Situation: Herr Yilmaz, Zimmer 7, Fieber 39.5 seit 2 Stunden. Background: Tag 3 nach Knie-TEP, bisher fieberfrei. Assessment: CRP 180, Wunde reizlos, aber Patient hat Schüttelfrost. Recommendation: Ich würde Blutkulturen abnehmen, bitte Anordnung."

**App-UI:** Telefon-Format (Format 2) + SBAR-Hilfe-Panel als Seitenleiste. Optionen sind nach SBAR-Struktur sortiert. Arzt-Reaktion passt sich an: Strukturierte Meldung → "Gut. Blutkulturen abnehmen, Paracetamol 1g." Unstrukturierte → "Warten Sie — WER hat WAS? Seit WANN?"

---

### Format 24: Pflege-Angehörige-Dialog

**Beschreibung:** Angehörige kommen mit Emotionen, Erwartungen, Forderungen. Die Pflegekraft muss professionell bleiben, informieren ohne zu überfordern, Grenzen setzen ohne zu verletzen.

**Wann passt es:** Beratung, Aufklärung, Beschwerde-Management. Bloom B3-B5. Angehörige sind eine der größten Herausforderungen im Pflegealltag. Emotional geladene Situationen.

**Wann passt es NICHT:** Rein medizinische Szenarien, wenn kein Angehöriger involviert ist.

**Pflege-Beispiel:** Tochter beschwert sich: "Meine Mutter liegt seit 3 Stunden in nassen Sachen!" Optionen: a) Entschuldigung + sofortige Maßnahme (professionell), b) "Wir haben zu wenig Personal" (Rechtfertigung), c) "Das stimmt nicht, wir waren vor einer Stunde da" (Konfrontation). Empathie-Meter reagiert.

**App-UI:** WhatsApp-Chat oder Comic-Panel. Angehörigen-Avatar mit emotionalem Gesichtsausdruck. Empathie-Meter (Format 12) kombiniert. Optional: "Deeskalations-Tipp" Button für B1-Schüler die Hilfe brauchen.

---

### Format 25: Dreiergespräch (Patient + Angehörige + Pflege)

**Beschreibung:** Drei Personen im Gespräch. Patient und Angehörige haben möglicherweise unterschiedliche Wünsche. Pflegekraft muss vermitteln, den Patientenwillen stärken, beide ernst nehmen.

**Wann passt es:** Ethische Konflikte, Entlassungsplanung, Vorsorgevollmacht-Themen. Bloom B5-B6. Die komplexeste Kommunikationssituation in der Pflege.

**Wann passt es NICHT:** Einfache Dialoge, Anfänger, wenn nur 2 Personen beteiligt sind.

**Pflege-Beispiel:** Patient (85) will zu Hause sterben. Tochter will Behandlung im Krankenhaus fortsetzen. Patient sagt leise: "Ich möchte nach Hause." Tochter laut: "Er weiß nicht was er sagt!" Pflegekraft muss: Patientenwillen erfragen, Tochter ernst nehmen, palliative Optionen aufzeigen.

**App-UI:** Gruppengespräch-Format (Format 6). 3 Avatare oben. Antwortoptionen sind an verschiedene Personen adressiert. Zwei Beziehungs-Indikatoren: einer für Patient, einer für Angehörige. Manchmal muss man sich entscheiden: Patient zufrieden ODER Angehörige zufrieden.

---

## Zusammenfassung: 25 Formate im Überblick

| Nr | Format | Kategorie | Bloom | Komplexität |
|---|--------|-----------|-------|----------|
| 1 | WhatsApp-Chat | Dialog | B1-B3 | Niedrig |
| 2 | Telefon-Simulation | Dialog | B3-B5 | Mittel |
| 3 | Visite-Runde | Dialog | B3-B5 | Hoch |
| 4 | Comic-Panel | Dialog | B1-B2 | Niedrig |
| 5 | Interview-Protokoll | Dialog | B3-B4 | Mittel |
| 6 | Gruppengespräch | Dialog | B4-B5 | Hoch |
| 7 | Übergabe-Gespräch | Dialog | B3-B4 | Mittel |
| 8 | Linear | Branching | B1-B2 | Niedrig |
| 9 | Verzweigt | Branching | B3-B5 | Hoch |
| 10 | Konsequenz | Branching | B4-B5 | Hoch |
| 11 | Zeitdruck | Branching | B3-B4 | Mittel |
| 12 | Empathie-Meter | Branching | B3-B5 | Mittel |
| 13 | Klinische Entscheidung | Simulation | B4-B6 | Hoch |
| 14 | Triage | Simulation | B4-B5 | Hoch |
| 15 | Dokumentation | Simulation | B4-B6 | Mittel |
| 16 | Medikamenten-Check | Simulation | B3-B5 | Mittel |
| 17 | Visite-Begleitung | Simulation | B3-B4 | Mittel |
| 18 | Sofort-Feedback | Feedback | B1-B3 | Niedrig |
| 19 | Kumulatives Debrief | Feedback | B4-B6 | Mittel |
| 20 | Implizite Reaktion | Feedback | B4-B5 | Mittel |
| 21 | Kolleginnen-Kommentar | Feedback | B3-B4 | Niedrig |
| 22 | Replay-Vergleich | Feedback | B4-B6 | Mittel |
| 23 | Pflege-Arzt (SBAR) | Rollen | B3-B5 | Mittel |
| 24 | Pflege-Angehörige | Rollen | B3-B5 | Mittel |
| 25 | Dreiergespräch | Rollen | B5-B6 | Hoch |

---

## Implementierungs-Empfehlungen

### Sofort umsetzbar (wenig Änderung an der Engine):
- **Format 4 (Comic-Panel)** — neuer Renderer, gleiche Datenstruktur
- **Format 11 (Zeitdruck)** — Timer-Overlay auf bestehenden Dialog
- **Format 12 (Empathie-Meter)** — Score-Visualisierung oben im Dialog
- **Format 19 (Kumulatives Debrief)** — Feedback am Ende statt pro Phase
- **Format 21 (Kolleginnen-Kommentar)** — zusätzliche Phase nach dem Dialog

### Mittlerer Aufwand (neue UI-Komponenten):
- **Format 2 (Telefon)** — neuer Renderer, ähnliche Datenstruktur
- **Format 5 (Interview-Protokoll)** — Tabellen-UI
- **Format 7 (Übergabe)** — Split-Screen + Notizblock
- **Format 16 (Medikamenten-Check)** — Formular-UI
- **Format 20 (Implizite Reaktion)** — Avatar-Emotionen

### Hoher Aufwand (neue Engine-Logik):
- **Format 9 (Verzweigt)** — Branching-Graph statt linearer Phasen
- **Format 10 (Konsequenz)** — Variablen-System über Phasen hinweg
- **Format 13 (Klinische Entscheidung)** — Zeitverlauf + dynamische Vitalwerte
- **Format 14 (Triage)** — Multi-Patient + Drag-and-Drop

---

## Quellen

- [Simulation in Clinical Nursing Education (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8116070/)
- [Real-time decision-making in chronic illness branching simulation (PMC)](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7882254/)
- [Virtual Simulation Tools for Communication Skills Training (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC12074551/)
- [Effectiveness of SBAR-based simulation programs (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC10347853/)
- [Branching scenarios for clinical decision-making (ResearchGate)](https://www.researchgate.net/publication/386110346_Branching_scenarios_can_develop_clinical_decision-_making_using_work-integrated_learning)
- [Empathy development through game-based learning (ScienceDirect)](https://www.sciencedirect.com/science/article/abs/pii/S0260691724003198)
- [Measuring perceived empathy in dialogue systems (Springer)](https://link.springer.com/article/10.1007/s00146-023-01715-z)
- [Duolingo Adventures — gamified learning experience](https://blog.duolingo.com/adventures/)
- [AI in Nursing Education 2026 (NursesEducator)](https://nurseseducator.com/ai-in-nursing-education-2026-how-personalized-learning-models-are-transforming-92-of-student-outcomes)
- [Simulation-Based Learning Supported by Technology (JMIR)](https://www.jmir.org/2025/1/e58744/PDF)
- [Virtual Simulation to Enhance Clinical Reasoning (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC9212904/)
- [Triage Simulation for communication and clinical reasoning (QSEN)](https://www.qsen.org/strategies-submission/triage-simulation-to-enhance-communication-and-clinical-reasoning-skills)
- [Body Interact — Virtual Patients Simulator](https://bodyinteract.com/)
- [vSim for Nursing (Laerdal Medical)](https://laerdal.com/us/vsim)
- [LLM-Generated Dialogues for VR Nurse Training (Springer)](https://link.springer.com/chapter/10.1007/978-3-031-61041-7_13)
- [Decision-based branching video learning (ScienceDirect)](https://www.sciencedirect.com/science/article/abs/pii/S1471595325001921)
- [Oxford Medical Simulation — Voice Communication](https://oxfordmedicalsimulation.com/using-your-voice-communicating-with-virtual-patients/)
- [PCS Spark — AI Healthcare Simulation](https://www.pcs.ai/spark)
