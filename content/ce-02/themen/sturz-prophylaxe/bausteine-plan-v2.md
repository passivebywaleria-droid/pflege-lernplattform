# Wissensbausteine v2 — Sturz-Prophylaxe (Goldstandard-Pilot)

> ⚠️ **OBSOLET (2026-04-26)** — diese Stilprobe nutzt **Frau Berger** als Lehr-Patientin.
> Nach User-Entscheidung wurde auf **existierende Situations-Patient(inn)en** umgestellt
> (Frau M. statt Frau Berger). Die finale Inline-Wissens-Implementierung lebt in
> `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts` (Steps 01b, 03b, 05b).
>
> Diese Datei nur noch als **Stil-Referenz** für die v2-Struktur (Lerntreppe, Aha-Moment,
> Spektrum, Sonst-Box) behalten — die Frau-Berger-Inhalte sind keine Quelle mehr.

**Pilot-Status:** 2026-04-26 — 3 Bausteine als Stilprobe für User-Review.
**Vergleich:** v1 lag bisher als `bausteine-plan.md` ab (lehrbuchhaft, isoliert). v2 testet Lerntreppe + Patientenstory + Aha-Moment.

---

## Stil-Pflicht v2 (was sich gegenüber v1 ändert)

1. **Lerntreppe.** Jeder Baustein referenziert den vorherigen ("Wir wissen jetzt…") und kündigt den nächsten an ("Beim nächsten Mal schauen wir…"). Reihenfolge ist nicht beliebig.
2. **Roter Faden = ein Patient.** Frau Berger zieht sich durch ALLE Bausteine des Themas. Keine abstrakten "Stell dir vor"-Beispiele mehr — immer Frau Berger.
3. **Aha-Moment + Faustregel.** Jeder Baustein hat einen einzigen Satz, der hängenbleibt. Steht prominent am Ende von Stufe 3.
4. **Story-Aufhänger statt Definition.** Stufe 1 startet mit einer konkreten Frau-Berger-Szene, nicht mit "Was ist…"
5. **Bild-Slot Pflicht.** Jeder Baustein hat einen Gemini-Prompt-Vorschlag.
6. **Standards 2026.** DNQP 2022 + Pflege heute 2024 + AWMF aktuell. Jede Aussage zitierfähig.

---

## Die virtuelle Patientin: Frau Berger

**Name:** Helga Berger
**Alter:** 84
**Wohnsituation:** Allein in einer 2-Zimmer-Wohnung im Erdgeschoss, Köln-Ehrenfeld. Tochter Andrea kommt 2× pro Woche. Mobiler Pflegedienst 1× täglich morgens (45-Min-Besuch).
**Vorgeschichte:** Z.n. Schenkelhalsfraktur rechts vor 2 Jahren mit OP (Hüft-TEP). Seitdem Rollator. Diabetes Typ 2 seit 12 Jahren mit Polyneuropathie der Füße ("ich spür meine Zehen kaum noch"). Polypharmazie (7 Medikamente, darunter Furosemid + Mirtazapin).
**Letzter Sturz:** Vor 6 Wochen im Bad, beim Aufstehen vom Toilettensitz — ohne Verletzung, "nur Schreck". Hat es ihrer Tochter erst nach 3 Tagen erzählt.
**Persönlichkeit:** Will selbständig bleiben. "Ich bin doch noch keine Hilfsbedürftige." Hat ein Foto von 1987 auf der Anrichte: sie und ihr Mann beim Wandern im Allgäu. Witwe seit 6 Jahren.
**Sprache:** Spricht Deutsch (Muttersprache), aber mit Köln-Akzent ("dat", "kütt"). Hört links schlecht (kein Hörgerät, "wozu").

Frau Berger ist nicht Frau M. — bewusst eine andere Patientin, damit wir nicht mit Frau-M.-Sturz kollidieren. Sie ist die Lehr-Patientin für das Thema, nicht für eine Situation.

---

## Baustein 1: was-ist-ein-sturz

### Story-Aufhänger
Du kommst Mittwochmorgen zu Frau Berger. Sie wirkt müde. Beim Frühstück erzählt sie nebenbei: „Heut Nacht, dat war knapp. Ich musste auf die Toilette und bin im Flur ins Stolpern gekommen. Ich hab mich gerade noch am Türrahmen festgehalten." Dann lacht sie: „Aber gefallen bin ich ja nicht."

### Stufe 1 — Denkfrage (Schüler aktiviert)

**Frage (C1):** „War das ein Sturz oder nicht? Was würdest du Frau Berger antworten?"
**Frage (B1):** „Frau Berger hat sich am Türrahmen festgehalten. War das ein Sturz?"
**Step-Typ:** freetext (kurze Antwort, max. 50 Wörter)
**Bewertungskriterium für KI:** Schüler sollte erkennen, dass Beinahe-Stürze zählen — auch wenn die Antwort unsicher ist, ist „ich bin mir nicht sicher" valide.

### Stufe 2 — Hinweis (kurze Auflösung)

**C1 (235 Zeichen):** „Was Frau Berger beschreibt — sich gerade noch festhalten — heißt **Beinahe-Sturz** oder **Near-Miss**. Die WHO und der DNQP zählen das als Sturzereignis. Es muss dokumentiert werden, denn der nächste mal hält sie sich vielleicht nicht mehr."

**B1 (210 Zeichen):** „Frau Berger ist nicht gefallen — aber fast. Das nennt man **Beinahe-Sturz**. Die WHO sagt: Auch das ist ein Sturz und muss aufgeschrieben werden. Beim nächsten Mal hält sie sich vielleicht nicht mehr fest."

**Step-Typ:** text (displayFormat: scenario)
**Glossar-Begriffe:** [Sturz, Beinahe-Sturz, Near-Miss, DNQP, WHO]

### Stufe 3 — Erklärung (volle Tiefe)

**C1 (720 Zeichen):**
„Die WHO definiert einen Sturz als **'Ereignis, bei dem die betroffene Person unbeabsichtigt auf dem Boden oder einer tieferen Ebene landet'** (WHO 2007). Der DNQP-Expertenstandard 2022 ergänzt: Auch **Beinahe-Stürze** zählen — also Situationen, in denen sich jemand gerade noch abfangen kann oder von einer Pflegekraft aufgefangen wird.

Drei Aspekte sind wichtig:
- **Unbeabsichtigt** — wer sich bewusst hinsetzt, stürzt nicht.
- **Tiefere Ebene** — auch vom Stuhl rutschen ist ein Sturz.
- **Ereignis** — kein Prozess, ein Moment.

Warum die Beinahe-Stürze mitzählen? Weil sie Warnsignale sind. Die Studienlage ist eindeutig: Wer einen Beinahe-Sturz hatte, hat in den nächsten 6 Monaten ein **2- bis 3-fach erhöhtes Risiko** für einen echten Sturz. Frau Berger hat dir gerade ein Frühwarnsignal gegeben — das gehört in die Pflegedokumentation."

**B1 (560 Zeichen):**
„Die WHO sagt: Ein Sturz ist, wenn jemand **unabsichtlich** auf den Boden oder etwas Tieferes fällt. Das gilt auch fürs Rutschen vom Stuhl.

Der DNQP sagt: Auch **Beinahe-Stürze** sind Stürze. Beinahe-Sturz heißt: Der Mensch hält sich gerade noch fest — wie Frau Berger am Türrahmen.

Warum ist das wichtig? Studien zeigen: Wer einmal beinahe gefallen ist, fällt in den nächsten 6 Monaten 2 bis 3 Mal so oft wirklich. Das ist ein **Warnsignal**. Du musst es aufschreiben — nicht weil etwas passiert ist, sondern damit nichts passiert."

**Step-Typ:** text (displayFormat: stepbystep)
**TTS-relevant:** ja (Definition + Faustregel)

### Aha-Moment / Faustregel

> **„Jeder Beinahe-Sturz ist ein angekündigter Sturz."**

Frau Berger hat dich heute gewarnt — auch wenn sie es nicht so meinte. Deine Aufgabe: zuhören, dokumentieren, nicht abwiegeln.

### Misconceptions → Distraktoren (für MC-Übung danach)

**D1: „Wenn nichts passiert ist, muss man auch nichts dokumentieren."**
- **Fachbegriff:** Bagatellisierungs-Irrtum
- **Feedback (C1, 240 Zeichen):** „Verständlich — aber falsch. Der DNQP 2022 verlangt die Dokumentation jedes Beinahe-Sturzes. Nicht weil etwas passiert ist, sondern weil dadurch ein Risiko sichtbar wird, das du sonst übersiehst. Dokumentation ist Vorbeugung."
- **Feedback (B1, 200 Zeichen):** „Das denken viele — ist aber falsch. Auch Beinahe-Stürze müssen aufgeschrieben werden. Sonst sieht der nächste Pfleger nicht, dass Frau Berger ein hohes Risiko hat. Dokumentieren = Vorbeugen."

**D2: „Ein Sturz ist erst dann ein Sturz, wenn der Patient verletzt ist."**
- **Fachbegriff:** Verletzungs-Irrtum
- **Feedback (C1, 220 Zeichen):** „Nein — die WHO-Definition unterscheidet nicht nach Verletzung. Auch ein folgenloser Sturz auf den Teppich ist ein Sturz. Verletzung ist eine **Folge**, nicht das Kriterium. Sonst würden 60 % aller Stürze nie erfasst."
- **Feedback (B1, 195 Zeichen):** „Falsch — die WHO sagt nichts über Verletzung. Auch wenn nichts passiert, ist es ein Sturz. Sonst würden wir mehr als die Hälfte aller Stürze nie aufschreiben — und das Risiko nicht erkennen."

**D3: „Wenn jemand sich bewusst hinsetzt, weil ihm schwindlig wird, ist das auch ein Sturz."**
- **Fachbegriff:** Absichts-Verwechslung
- **Feedback (C1, 230 Zeichen):** „Knifflig, aber nein. **Bewusst** hinsetzen ist kein Sturz, weil das Kriterium 'unbeabsichtigt' fehlt. Aber: Schwindel beim Aufstehen ist ein Risikosignal — auch ohne Sturz. Du dokumentierst den Schwindel, nicht einen 'Sturz'."
- **Feedback (B1, 200 Zeichen):** „Schwierig, aber nein. Wer sich extra hinsetzt, ist nicht gestürzt. Aber Schwindel ist ein Warnsignal — du schreibst auf 'Frau Berger hatte Schwindel', nicht 'Frau Berger ist gestürzt'."

### Bild-Slot

**Gemini-Prompt:** „Aquarell-Skizze einer 84-jährigen Frau in einem Bademantel, die sich nachts in einem Wohnungsflur am Türrahmen festhält. Dezente warme Beleuchtung. Ruhige, würdevolle Atmosphäre — kein Drama, kein Schmerz. Sie blickt zur Seite, leicht verlegen. Aquarell, weiche Linien, gedeckte Farben (Sage-Grün, Dusty-Rose, warmes Beige). Keine medizinischen Geräte sichtbar."

**Alt-Text:** „Frau Berger hält sich nachts am Türrahmen fest, um nicht zu fallen — der Beinahe-Sturz, den sie morgens beim Frühstück erzählt."

### Verbindung zum nächsten Baustein

> Wir wissen jetzt: Frau Berger hat heute Nacht einen Beinahe-Sturz gehabt — ein Warnsignal. Im **nächsten Baustein** schauen wir an: **Warum** stolpert eine Frau wie Frau Berger eigentlich? Spoiler: Es ist nie nur ein Grund.

### Karteikarten-Eintrag (für SR-Tab nach Abschluss)

**Vorderseite:** „Frau Berger erzählt: 'Ich hab mich heut Nacht am Türrahmen festgehalten, fast wäre ich gefallen.' Ist das ein Sturz?"
**Rückseite:** „Ja. Beinahe-Stürze sind laut DNQP 2022 dokumentationspflichtige Sturzereignisse. Faustregel: **Jeder Beinahe-Sturz ist ein angekündigter Sturz.**"

### Metadaten
- **bausteinId:** sturz-prophylaxe-was-ist-ein-sturz
- **bloomLevel:** 1 (Definition + Anwendung)
- **wissensart:** definition
- **zeitBudget:** 4 Min (Stufen 1+2+3, ohne MC-Übung)
- **voraussetzungen:** keine (Einstiegs-Baustein)
- **nachfolger:** sturz-prophylaxe-warum-stuerzen-alte-menschen
- **quellen:** WHO 2007 — Global Report on Falls Prevention; DNQP 2022 — Expertenstandard Sturzprophylaxe 2. Aktualisierung; Pflege heute 2024 Kap. Mobilität

---

## Baustein 2: warum-stuerzen-alte-menschen

### Story-Aufhänger
Du hast Frau Bergers Beinahe-Sturz dokumentiert. Die Tochter Andrea ruft mittags an: „Wieso fällt sie eigentlich immer wieder fast? Ist das das Alter?" — Was antwortest du?

### Stufe 1 — Denkfrage

**Frage (C1):** „Welche Gründe würdest du Andrea nennen, warum Frau Berger sturzgefährdet ist? Schreibe 3 Faktoren auf, die dir bei Frau Berger einfallen."
**Frage (B1):** „Warum stürzt Frau Berger oft beinahe? Schreibe 3 Gründe auf, die du bei ihr siehst."
**Step-Typ:** freetext (offene Liste, 3 Punkte erwartet)
**Bewertungskriterium für KI:** Mind. 3 Faktoren erwartet, Bonus wenn intrinsisch + extrinsisch unterschieden.

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** „Bei Frau Berger kommen mehrere Risikofaktoren zusammen: hohes Alter (84), frühere Hüftfraktur, Polyneuropathie durch Diabetes, 7 Medikamente (darunter Furosemid + Mirtazapin), beginnender Sehverlust. Stürze haben **fast nie eine** Ursache."

**B1 (220 Zeichen):** „Bei Frau Berger sind viele Sachen zusammen: Sie ist 84, sie ist schon mal gestürzt, sie spürt ihre Füße schlecht (Diabetes), sie nimmt 7 Medikamente, sie sieht schlechter. Stürze haben fast nie nur **einen** Grund."

**Step-Typ:** text (displayFormat: scenario)
**Glossar-Begriffe:** [Risikofaktor, intrinsisch, extrinsisch, Polyneuropathie, Polypharmazie, Orthostase]

### Stufe 3 — Erklärung

**C1 (820 Zeichen):**
„Stürze sind fast nie das Ergebnis einer einzelnen Ursache. Der DNQP 2022 unterscheidet zwei Gruppen von Risikofaktoren — und Frau Berger zeigt aus beiden mehrere:

**Intrinsisch (im Patienten):**
1. **Alter > 75** — Frau Berger ist 84.
2. **Sturz in den letzten 12 Monaten** — vor 6 Wochen, plus heute Nacht.
3. **Muskuläre Schwäche / Sarkopenie** — seit ihrer Hüft-OP weniger Aktivität.
4. **Polyneuropathie durch Diabetes** — sie spürt ihre Zehen kaum, propriozeptiver Input fehlt.
5. **Polypharmazie + Sturz-fördernde Medikamente** — 7 Medikamente, darunter **Furosemid** (Hypovolämie, Schwindel beim Aufstehen) und **Mirtazapin** (Sedierung, Orthostase, PRISCUS-Liste).
6. **Sensorische Einschränkung** — eingeschränktes Hören links, beginnender Visusverlust.

**Extrinsisch (in der Umgebung):**
- Bad ohne Haltegriffe (sie ist im Bad gestürzt vor 6 Wochen).
- Teppich im Flur (Stolperfalle).
- Beleuchtung im Flur nachts schlecht.

Faustregel: **Ab 4 gleichzeitigen Risikofaktoren steigt das Sturzrisiko überproportional an** — das ist die Eintrittsschwelle für ein „hohes Sturzrisiko" laut DNQP 2022. Frau Berger hat **mindestens 9** — sie ist nicht „ein bisschen sturzgefährdet", sie ist hochgefährdet.

(DNQP 2022; Beers-Liste 2023; PRISCUS-Liste 2023)"

**B1 (640 Zeichen):**
„Stürze haben fast nie nur **einen** Grund. Der DNQP 2022 sagt: Es sind immer mehrere Sachen zusammen.

Es gibt zwei Arten von Gründen:

**Im Patienten (intrinsisch):**
- Alter über 75 (Frau Berger: 84)
- Schon mal gestürzt (Frau Berger: ja, 2 Mal)
- Schwache Muskeln (nach der Hüft-OP weniger Bewegung)
- **Polyneuropathie:** Sie spürt ihre Füße schlecht (Diabetes)
- **Polypharmazie:** 7 Medikamente, darunter Furosemid und Mirtazapin (machen schwindlig beim Aufstehen)
- Schlechtes Sehen und Hören

**In der Umgebung (extrinsisch):**
- Kein Haltegriff im Bad
- Teppich im Flur (Stolperfalle)
- Wenig Licht nachts

**Faustregel:** Wer mehr als **4 Risikofaktoren** gleichzeitig hat, hat ein **hohes Sturzrisiko**. Frau Berger hat 9 — sie ist sehr gefährdet.

(DNQP 2022)"

**Step-Typ:** text (displayFormat: stepbystep)
**TTS-relevant:** ja

### Aha-Moment / Faustregel

> **„Stürze haben fast nie eine Ursache — sie haben einen Risiko-Cocktail. 4+ Faktoren = hohes Risiko."**

Bei Frau Berger sind es 9 — der Cocktail ist voll.

### Misconceptions → Distraktoren

**D1: „Frau Berger stürzt, weil sie alt ist."**
- **Fachbegriff:** Alters-Reduktionismus
- **Feedback (C1, 250 Zeichen):** „Naheliegend, aber unscharf. Alter ist **ein** Risikofaktor (über 75), aber nie die alleinige Erklärung. Gleichaltrige ohne Polyneuropathie, ohne Polypharmazie und ohne frühere Fraktur stürzen viel seltener. Faktoren addieren sich, Alter erklärt nichts allein."
- **Feedback (B1, 215 Zeichen):** „Klingt logisch, ist aber zu einfach. Alter ist **ein** Grund — aber andere 84-Jährige ohne Diabetes und ohne 7 Medikamente stürzen viel seltener. Die Gründe sind immer mehrere zusammen, nie nur das Alter."

**D2: „Wenn man die Medikamente reduziert, stürzt sie nicht mehr."**
- **Fachbegriff:** Mono-Lösungs-Irrtum
- **Feedback (C1, 240 Zeichen):** „Wichtiger Ansatz, aber zu monokausal. Medikamenten-Review (mit Hausarzt) ist Pflicht — aber Frau Berger hätte **trotzdem** Polyneuropathie, Sehverlust und einen rutschigen Bad-Boden. Sturzprävention ist immer **multifaktoriell**, nie eine Sache."
- **Feedback (B1, 220 Zeichen):** „Guter Gedanke — aber zu einfach. Auch ohne 7 Medikamente hat Frau Berger noch immer schlechte Füße (Diabetes), schlechtes Sehen und einen rutschigen Boden im Bad. Sturzprävention ist immer **viele Sachen zusammen**."

**D3: „Hauptproblem ist das Bad ohne Haltegriffe — wenn das saniert ist, ist sie sicher."**
- **Fachbegriff:** Umwelt-Reduktionismus
- **Feedback (C1, 245 Zeichen):** „Umgebungsanpassung ist wichtig — aber Frau Bergers Beinahe-Sturz heute Nacht war im **Flur**, nicht im Bad. Selbst mit perfekt umgebauter Wohnung bleibt das intrinsische Risiko (Polyneuropathie, Mirtazapin). Beides muss gleichzeitig angegangen werden."
- **Feedback (B1, 215 Zeichen):** „Wichtig, aber nicht alles. Heute Nacht ist Frau Berger im **Flur** beinahe gestürzt, nicht im Bad. Auch in einer perfekten Wohnung hat sie noch ihre Probleme (Diabetes, Medikamente). Beides muss gleichzeitig besser werden."

### Bild-Slot

**Gemini-Prompt:** „Schemazeichnung eines Pflege-Risiko-Cocktails: ein Glas mit verschiedenfarbigen Flüssigkeitsschichten, jede Schicht beschriftet mit einem Sturz-Risikofaktor (Alter 84, frühere Fraktur, Polyneuropathie, 7 Medikamente, Sehverlust, schlechte Beleuchtung). Aquarell-Stil, gedeckte Farben (Sage-Grün, Dusty-Rose, warmes Beige). Klare, lehrbuchhafte Visualisierung — kein Drama. Beschriftungen auf Deutsch."

**Alt-Text:** „Frau Bergers Sturz-Risiko-Cocktail: 9 Faktoren in einem Glas, sichtbar geschichtet. Jede Schicht ein Risiko, das sich addiert."

### Verbindung zum nächsten Baustein

> Wir wissen jetzt: Frau Berger hat **9** Risikofaktoren — sie ist hochgefährdet. Aber wie hättest du das **bei einem fremden Patienten in 5 Minuten** erkannt? Im **nächsten Baustein** lernst du das **Sturz-Assessment am Bett** — kein Tool, sondern ein Augen-und-Hände-Vorgang.

### Karteikarten-Eintrag

**Vorderseite:** „Andrea fragt: 'Warum fällt Mama immer fast? Ist das einfach das Alter?'"
**Rückseite:** „Nein — Stürze sind multifaktoriell. Bei Frau Berger 9 Risikofaktoren: Alter > 75, frühere Fraktur, Polyneuropathie, Polypharmazie (Furosemid, Mirtazapin = PRISCUS), Sehverlust, kein Haltegriff im Bad, Teppich, schlechte Beleuchtung. Faustregel: **4+ Faktoren = hohes Risiko, Frau Berger hat 9.** (DNQP 2022)"

### Metadaten
- **bausteinId:** sturz-prophylaxe-warum-stuerzen-alte-menschen
- **bloomLevel:** 2 (Verstehen + Anwenden)
- **wissensart:** mechanismus
- **zeitBudget:** 5 Min
- **voraussetzungen:** sturz-prophylaxe-was-ist-ein-sturz
- **nachfolger:** sturz-prophylaxe-risiko-erkennen-am-bett
- **quellen:** DNQP 2022; Beers-Liste 2023; PRISCUS-Liste 2023; Pflege heute 2024 Kap. Mobilität; ICN 2021 Polypharmazie

---

## Baustein 3: risiko-erkennen-am-bett

### Story-Aufhänger
Stell dir vor: Du machst nicht den Hausbesuch bei Frau Berger, sondern arbeitest auf einer **Station**. Frau Berger wird heute aufgenommen — Verdacht auf Hypoglykämie. Du hast **5 Minuten**, bevor die Visite kommt. Was prüfst du, um ihr Sturzrisiko einzuschätzen? **Wichtig:** Du hast kein Tinetti-Tool, kein STRATIFY-Bogen — der DNQP empfiehlt explizit **kein** einzelnes Instrument.

### Stufe 1 — Denkfrage

**Frage (C1):** „Du hast 5 Minuten am Bett von Frau Berger und sollst ihr Sturzrisiko einschätzen — ohne Skala. Was prüfst du? (mind. 4 Punkte)"
**Frage (B1):** „Du hast 5 Minuten bei Frau Berger. Wie findest du heraus, ob sie stürzen könnte? Schreibe 4 Sachen auf, die du anschauen oder fragen würdest."
**Step-Typ:** freetext (Liste, 4-6 Punkte erwartet)
**Bewertungskriterium für KI:** 4+ Punkte erwartet aus: Anamnese (frühere Stürze), Aufstehen-beobachten, Schuhe/Hilfsmittel sichten, Medikamentenliste prüfen, Bewusstsein/Schwindel abfragen, Augenmerk auf intrinsisch + extrinsisch.

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** „Der DNQP 2022 sagt: kein einzelnes Tool reicht. Du machst eine **klinische multifaktorielle Einschätzung**. In 5 Minuten: 1) frag nach früheren Stürzen, 2) schau ihr beim Aufstehen zu, 3) sichte Schuhe + Hilfsmittel, 4) prüf die Medikamentenliste, 5) frag nach Schwindel."

**B1 (235 Zeichen):** „Der DNQP sagt: Es gibt **kein** einzelnes Tool — du nimmst Augen + Hände. In 5 Minuten: 1) Frag, ob sie schon mal gefallen ist, 2) schau ihr beim Aufstehen zu, 3) prüf Schuhe und Rollator, 4) lies die Medikamentenliste, 5) frag, ob ihr schwindlig wird."

**Step-Typ:** text (displayFormat: scenario)
**Glossar-Begriffe:** [Sturz-Assessment, Tinetti-Test, STRATIFY, multifaktoriell, Anamnese, Timed-up-and-go]

### Stufe 3 — Erklärung

**C1 (920 Zeichen):**
„Der DNQP-Expertenstandard 2022 ist klar: **'Es wird kein einzelnes Assessment-Instrument empfohlen.'** Stattdessen: **klinische multifaktorielle Einschätzung** durch die Pflegefachperson. Das ist gewollt — kein Tool fängt alle Risikofaktoren, jeder Patient ist anders.

In 5 Minuten am Bett kommst du erstaunlich weit. So gehst du vor:

**1. Anamnese (60 Sek):**
- „Sind Sie in den letzten 12 Monaten schon mal gestürzt — auch wenn nichts passiert ist?"
- „Wird Ihnen manchmal schwindlig, besonders beim Aufstehen?"
- → Ein Ja auf Frage 1 = **automatisch hohes Sturzrisiko** (DNQP 2022).

**2. Aufstehen beobachten (60 Sek) — der „Timed-up-and-go-Mini":**
- Bitte den Patienten, vom Bett zu sitzen und aufzustehen. Beobachte: Stützt er sich? Schwankt er? Braucht er mehrere Anläufe?
- > 12 Sekunden vom Sitz zum sicheren Stehen → erhöhtes Risiko.

**3. Hilfsmittel + Schuhe sichten (30 Sek):**
- Hat sie Hausschuhe mit glatten Sohlen an? Rollator passend eingestellt?

**4. Medikamentenliste prüfen (60 Sek):**
- > 4 Dauermedikamente? Psychopharmaka, Diuretika, Sedativa, Antihypertensiva dabei? PRISCUS-/Beers-Liste-Treffer?

**5. Sensorik prüfen (30 Sek):**
- Brille auf? Hörgerät an? Frag, ob sie nachts den Weg zur Toilette sieht.

Fertig — 5 Minuten. Du hast jetzt eine **klinische Einschätzung** mit allen 5 Domänen. Schreib die Beobachtungen in die Pflegedokumentation, nicht eine Punkt-Zahl.

(DNQP 2022; Pflege heute 2024)"

**B1 (720 Zeichen):**
„Der DNQP 2022 sagt klar: Es gibt **kein** einzelnes Tool für Sturzrisiko. Du **schaust selbst** und **fragst selbst**. Das ist gewollt — kein Tool ist perfekt für alle Menschen.

In 5 Minuten am Bett:

**1. Frage (60 Sek):**
- „Sind Sie schon mal gestürzt — auch wenn nichts passiert ist?"
- „Wird Ihnen schwindlig, wenn Sie aufstehen?"
- → Wenn sie **ja** sagt zu Frage 1 = automatisch **hohes Risiko**.

**2. Aufstehen anschauen (60 Sek):**
- Bitte sie aufzustehen. Schau: Hält sie sich fest? Wackelt sie? Dauert es lange?
- Mehr als **12 Sekunden** vom Sitzen zum sicheren Stehen = Risiko.

**3. Schuhe und Rollator anschauen (30 Sek):**
- Trägt sie Hausschuhe mit glatten Sohlen? Ist der Rollator richtig eingestellt?

**4. Medikamentenliste lesen (60 Sek):**
- Mehr als **4 Medikamente**? Sind Schlafmittel, Wassertabletten oder Beruhigungsmittel dabei?

**5. Sehen und Hören prüfen (30 Sek):**
- Hat sie Brille auf? Hörgerät an? Sieht sie nachts den Weg zur Toilette?

Fertig. Du hast in **5 Minuten** alle wichtigen Punkte. Du schreibst auf, was du gesehen und gehört hast — keine Punktzahl.

(DNQP 2022)"

**Step-Typ:** text (displayFormat: stepbystep)
**TTS-relevant:** ja

### Aha-Moment / Faustregel

> **„Augen + Hände + 5 Fragen schlagen jede Punkte-Skala. DNQP 2022: keine Skala — klinische Einschätzung."**

Wenn ein Patient dir auf die erste Frage „Sind Sie schon mal gestürzt?" mit „ja" antwortet — du brauchst keinen Tinetti-Test mehr. Er hat gerade selbst sein Risiko bestätigt.

### Misconceptions → Distraktoren

**D1: „Wir nehmen den Tinetti-Test, weil der ist Standard."**
- **Fachbegriff:** Tool-Reflex
- **Feedback (C1, 250 Zeichen):** „Verständlich, aber falsch. Der DNQP 2022 empfiehlt **kein** einzelnes Tool — auch nicht Tinetti, STRATIFY oder Hendrich. Diese Tools sind für Studien gemacht, nicht für die Praxis. Standard ist die **klinische Einschätzung** durch dich."
- **Feedback (B1, 215 Zeichen):** „Das denken viele — ist aber falsch. Der DNQP sagt: **Kein** Tool ist Standard. Tinetti ist für Studien gut, aber im Alltag zählt deine eigene Einschätzung. Du bist das Tool."

**D2: „Ohne Punktzahl kann ich nicht sagen, ob das Risiko hoch ist."**
- **Fachbegriff:** Skalen-Abhängigkeit
- **Feedback (C1, 245 Zeichen):** „Im Gegenteil — der DNQP 2022 sagt: Punktzahlen vermitteln **falsche Sicherheit**. Du dokumentierst Beobachtungen ('Patient steht schwankend auf, braucht 2 Anläufe, hält sich am Nachttisch fest') — das ist klinisch viel präziser als ein Score."
- **Feedback (B1, 220 Zeichen):** „Nein — der DNQP sagt: Punktzahlen sind oft falsch. Du schreibst auf, was du **siehst**: 'Patient steht wackelig auf, braucht 2 Versuche, hält sich am Nachttisch fest.' Das ist viel klarer als 'Score 8'."

**D3: „Ich frage nicht nach früheren Stürzen — das macht den Patienten nervös."**
- **Fachbegriff:** Schon-Reflex
- **Feedback (C1, 240 Zeichen):** „Verständlich, aber kontraproduktiv. Studien zeigen: Patienten **wollen** gefragt werden — sie verschweigen Stürze sonst aus Scham (Frau Berger hat ihrer Tochter 3 Tage nichts gesagt). Offen fragen schafft Vertrauen, schützt nicht."
- **Feedback (B1, 215 Zeichen):** „Verständlich, aber falsch. Studien zeigen: Patienten **wollen** gefragt werden. Sonst verschweigen sie Stürze aus Scham — Frau Berger hat ihrer Tochter 3 Tage nichts gesagt. Offen fragen ist Schutz, nicht Belastung."

### Bild-Slot

**Gemini-Prompt:** „Aquarell-Skizze: eine junge Pflegeperson (kein Geschlecht festgelegt, freundliches Gesicht) sitzt auf einem Hocker neben dem Bett einer älteren Frau (84). Die Frau richtet sich gerade auf — die Pflegeperson beobachtet aufmerksam, hat eine Hand bereit aber greift nicht ein. Im Hintergrund: Klemmbrett mit Medikamentenliste auf dem Nachttisch. Warme, würdevolle Atmosphäre. Aquarell, Sage-Grün/Dusty-Rose-Palette."

**Alt-Text:** „Pflegeperson beobachtet Frau Berger beim Aufstehen — kein Tool, kein Greifen, nur Augen und Aufmerksamkeit. Klinische Einschätzung in 5 Minuten."

### Verbindung zum nächsten Baustein

> Wir wissen jetzt: Frau Berger hat 9 Risikofaktoren — und du kannst das in 5 Minuten am Bett selbst einschätzen, ohne Tool. Aber: **Was sagst du Frau Berger und ihrer Tochter danach?** Im **nächsten Baustein** lernst du **Information und Beratung** — nicht „Sie sind stark sturzgefährdet" sagen, sondern partnerschaftlich planen.

### Karteikarten-Eintrag

**Vorderseite:** „Du hast 5 Minuten am Bett, sollst Frau Bergers Sturzrisiko einschätzen — ohne Skala. Was prüfst du?"
**Rückseite:** „**Klinische multifaktorielle Einschätzung** (DNQP 2022, kein Tool empfohlen): 1) Anamnese (frühere Stürze + Schwindel), 2) Aufstehen beobachten (> 12 Sek = Risiko), 3) Schuhe/Hilfsmittel sichten, 4) Medikamentenliste prüfen (> 4, PRISCUS), 5) Sensorik (Brille, Hörgerät). Faustregel: **Augen + Hände + 5 Fragen schlagen jede Punkte-Skala.**"

### Metadaten
- **bausteinId:** sturz-prophylaxe-risiko-erkennen-am-bett
- **bloomLevel:** 3 (Anwenden)
- **wissensart:** assessment
- **zeitBudget:** 6 Min
- **voraussetzungen:** sturz-prophylaxe-warum-stuerzen-alte-menschen
- **nachfolger:** sturz-prophylaxe-information-und-beratung
- **quellen:** DNQP 2022 — Expertenstandard Sturzprophylaxe Kriterium 1; Pflege heute 2024 Kap. Mobilität; PRISCUS-Liste 2023; Beers-Liste 2023

---

## Was unterscheidet v2 von v1 — Cheatsheet für Pipeline-Update

| Element | v1 (alt) | v2 (Goldstandard) |
|---------|----------|-------------------|
| Stufe 1 Denkfrage | „Stell dir vor du sitzt 6 h auf Holzbank…" (abstrakt) | „Frau Berger erzählt: 'Ich hab mich am Türrahmen festgehalten…'" (konkret, Patient) |
| Roter Faden | keiner — jeder Baustein für sich | virtuelle Patientin Frau Berger durch alle Bausteine |
| Verbindung zum Vorgänger | keine | „Wir wissen jetzt…" am Anfang von Stufe 1 |
| Verbindung zum Nachfolger | keine | „Im nächsten Baustein…" am Ende |
| Aha-Moment | versteckt in Stufe 3 | eigener Block mit Faustregel-Zitat |
| Bild-Slot | optional | Pflicht, mit Gemini-Prompt + Alt-Text |
| Karteikarte | separat geplant | inline definiert (Vorder- + Rückseite) |
| Sprache | Lehrbuch („Ein Dekubitus ist definiert als…") | Story + Lehre („Frau Berger erzählt — und der DNQP sagt dazu:") |
| Distraktor-Logik | Misconceptions als Liste | Distraktoren mit Fachbegriff-Etikett (Bagatellisierungs-Irrtum, Tool-Reflex, …) — diagnostisch |

---

## Pflicht für Pipeline-Update (wenn v2 OK)

1. **`dozentin`-Agent** bekommt neuen Style-Guide aus diesem File als Pflicht-Lektüre
2. **Baustein-Validator-Skript:** prüft pro Baustein die 9 Pflicht-Elemente (Aufhänger, 3 Stufen, Aha-Moment, Faustregel, Bild-Slot, Karteikarte, Verbindung Vorgänger, Verbindung Nachfolger, Quellen)
3. **`_types.ts`-Erweiterung** für `Baustein`: Felder `vorgaenger`, `nachfolger`, `ahaMoment`, `faustregel`, `bildSlot`, `karteikarte` ergänzen
4. **Themen-Dramaturgie:** pro Thema **eine** virtuelle Patient-Bio anlegen (`themen/{thema}/patient-bio.md`), die alle Bausteine teilen
