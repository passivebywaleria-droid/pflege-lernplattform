# Wissensbausteine: Gesundheitsförderung Kinder und Jugendliche

## Metadaten

| Feld | Wert |
|------|------|
| themaId | `gesundheitsfoerderung-kinder` |
| ceId | `ce-04` |
| cluster | C (Spezialisierung 3. AD) |
| wissensart | handlung |
| kompetenzbereich | I.3 |
| geschaetzteUE | 25 |
| zielzeitMin | 619 (25 UE × 45 × 0,55) |
| bausteineAnzahl | 32 |
| voraussetzungen | `patientenberatung` |
| erstellt | 2026-04-23 |
| pipelineVersion | v9 (Gold-Standard) |

**Bloom-Verteilung:** Bloom 1-2: 22% (7 Bausteine), Bloom 3-4: 56% (18 Bausteine), Bloom 5-6: 22% (7 Bausteine)

**Primärquellen:**
- Bowlby J. (1969): Attachment and Loss, Vol. 1
- Ainsworth M. (1978): Fremde-Situation-Test / Strange Situation Procedure
- G-BA Kinder-Richtlinie (2024): U1 bis U9, J1
- STIKO (Ständige Impfkommission am RKI): Empfehlungen, Stand aktuell
- § 8a SGB VIII (Schutzauftrag bei Kindeswohlgefährdung)
- § 4 KKG (Bundeskinderschutzgesetz 2012, Beratungs- und Mitteilungsrecht)
- § 20 IfSG (Masern-Impfpflicht seit 2020)
- WHO (2023): Breastfeeding Recommendations
- AAP Task Force on SIDS (2022): Safe Sleep Guidelines
- Jones K.L., Smith D.W. (1973): Recognition of the Fetal Alcohol Syndrome
- FKE (Forschungsinstitut für Kinderernährung Dortmund): optimiX-Konzept
- RKI: KiGGS-Studie (Kinder- und Jugendgesundheitssurvey, Welle 2)
- Piaget J. (1936): Stadientheorie der kognitiven Entwicklung
- WHO (2019): Guidelines on Physical Activity, Sedentary Behaviour and Sleep for Children under 5

---

## Baustein 1: bindungstheorie-bowlby

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-bindung-grundlagen
- **bloomLevel:** 2
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-01]

### Stufe 1 — Denkfrage
- **Frage:** "Ein Baby weint, wenn die Mutter den Raum verlässt, und beruhigt sich sofort, wenn sie zurückkommt. Was sagt dir dieses Verhalten über die Beziehung zwischen Baby und Mutter?"
- **Step-Typ:** freetext (aktiviert Alltagswissen)

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Bindung ist die besondere emotionale Beziehung eines Kindes zu einer Hauptbezugsperson. Der Psychiater John Bowlby beschrieb sie 1969 als biologisch angelegtes Schutzsystem: Das Kind sucht Nähe bei Gefahr oder Stress. Ohne sichere Bindung wird Entwicklung schwer. (Bowlby, Attachment 1969)"

**B1 (225 Zeichen):** "Bindung ist eine besondere Beziehung. Das Baby hat sie zu einer wichtigen Person. Meistens zur Mutter oder zum Vater. Der Forscher Bowlby hat sie 1969 beschrieben. Das Baby sucht Nähe, wenn es Angst hat. Das ist ein Schutz-System."

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (680 Zeichen):**
"Die Bindungstheorie geht auf den britischen Psychiater John Bowlby zurück und erklärt, wie Kinder eine exklusive emotionale Beziehung zu einer Hauptbezugsperson aufbauen. Diese **Bindung** ist nicht erlernt, sondern **biologisch angelegt**: Das Kind sendet Signale (Weinen, Greifen, Blickkontakt), die Bezugsperson reagiert — und daraus entsteht über die ersten Lebensmonate ein inneres Arbeitsmodell von Beziehung. Kernfunktion: Das Kind sucht in Stress oder Gefahr **Nähe zur Bindungsperson** (Schutzsystem). Gleichzeitig erkundet es von ihr aus die Welt (**sichere Basis**). Die Qualität dieser ersten Bindung prägt spätere Beziehungen, Stressregulation und psychische Gesundheit. (Bowlby, Attachment 1969)"

**B1 (530 Zeichen):**
"Die Bindungstheorie kommt vom Forscher **John Bowlby** aus England. Er hat sie 1969 beschrieben. Bindung heißt: Ein Kind hat eine besondere Beziehung zu einer Hauptperson. Meistens ist das die Mutter oder der Vater. Diese Bindung ist **nicht gelernt**. Das Baby kann sie schon von Geburt an. Sie ist ein natürlicher Schutz. Wenn das Kind Angst hat, sucht es Nähe. Wenn alles okay ist, geht es weg und schaut die Welt an. Diese erste Bindung ist sehr wichtig. Sie prägt, wie das Kind später Beziehungen hat und mit Stress umgeht."

- **Erklärungs-Step:** stepType `text` (displayFormat: stepbystep)
- **Glossar-Begriffe:** [Bindung, Bezugsperson, sichere Basis, Bindungsperson]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bindung ist erlernt — je mehr Aufmerksamkeit, desto besser"**
- **Fachbegriff:** Verwöhn-Irrtum
- **Feedback (C1, 255 Zeichen):** "Nicht ganz — Bindung ist biologisch angelegt, nicht erlernt. Und: Es geht nicht um **Menge** an Aufmerksamkeit, sondern um **Qualität** der Reaktion. Wichtig ist, dass die Bezugsperson feinfühlig und verlässlich auf die Signale des Babys antwortet. (Bowlby, 1969)"
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — Bindung kann das Baby schon bei Geburt. Und es geht nicht um **viel** Aufmerksamkeit. Es geht darum, dass die Person **richtig** reagiert. Also: sehen, was das Baby braucht, und darauf antworten."

**D2: "Bindung bildet sich nur zur biologischen Mutter"**
- **Fachbegriff:** Mutter-Mythos
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Kinder bauen Bindungen zu **jeder feinfühligen Bezugsperson** auf: Vater, Großeltern, Pflegeeltern, Erzieherin. Entscheidend ist nicht die Biologie, sondern die verlässliche emotionale Verfügbarkeit. Ein Kind kann mehrere Bindungspersonen haben."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — ein Kind kann Bindungen zu vielen Personen haben: Vater, Oma, Opa, Pflegeeltern, Erzieherin. Wichtig ist nicht, wer die Mutter ist. Wichtig ist: Die Person ist da und reagiert gut auf das Kind."

**D3: "Bindung spielt nur in den ersten Lebensmonaten eine Rolle"**
- **Fachbegriff:** Frühkindlich-Abschluss-Fehler
- **Feedback (C1, 260 Zeichen):** "Nicht ganz — Bindung prägt das ganze Leben. Sie wirkt als **inneres Arbeitsmodell** für spätere Beziehungen: Partnerschaften, Freundschaften, Umgang mit Stress. Die ersten 2-3 Jahre sind besonders prägend, aber Bindung bleibt lebenslang wichtig."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Bindung ist ein Leben lang wichtig. Die ersten 2 bis 3 Jahre prägen aber am stärksten. Wie ein Kind jetzt Bindung erlebt, wirkt später auch auf Partnerschaften und Freundschaften."

### Richtig-Feedback
**C1 (250 Zeichen):** "Genau. Bindung ist ein biologisch angelegtes Schutzsystem: Das Kind sucht Nähe zur Bezugsperson bei Stress und erkundet von ihr aus die Welt (sichere Basis). Die Qualität dieser ersten Bindung prägt Beziehungen und Stressregulation ein Leben lang."

**B1 (215 Zeichen):** "Sehr gut. Bindung ist ein Schutz für das Baby. Es sucht Nähe, wenn es Angst hat. Und es erkundet die Welt von der Bezugsperson aus. Die erste Bindung ist sehr wichtig. Sie prägt Beziehungen ein Leben lang."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was beschreibt Bowlby (1969) als Bindung?"
- **Rückseite:** "Biologisch angelegte, exklusive emotionale Beziehung des Kindes zu einer Hauptbezugsperson. Funktion: Schutzsystem (Nähe bei Gefahr) + sichere Basis zum Erkunden."
- **Kategorie:** fachbegriff

---

## Baustein 2: bindungsmuster-ainsworth

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-bindung-muster
- **bloomLevel:** 3
- **wissensart:** klassifikation
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-02]

### Stufe 1 — Denkfrage
- **Frage:** "Stell dir vor, du beobachtest vier Babys: Eins weint bei Trennung und lässt sich danach trösten. Eins weint nicht. Eins weint und lässt sich nicht beruhigen. Eins wirkt verwirrt. Was könnte dahinterstecken?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Mary Ainsworth beschrieb 1978 im **Fremde-Situation-Test** vier Bindungsmuster: **B** sicher (trösten lassen), **A** unsicher-vermeidend (kein Protest), **C** unsicher-ambivalent (nicht zu trösten), **D** desorganisiert (widersprüchliches Verhalten). (Ainsworth, 1978)"

**B1 (230 Zeichen):** "Die Forscherin Ainsworth hat 1978 vier Bindungs-Muster gefunden: **B** sicher: Kind lässt sich trösten. **A** vermeidend: Kind zeigt wenig. **C** ambivalent: Kind lässt sich nicht trösten. **D** desorganisiert: Kind verhält sich verwirrt."

- **Step-Typ:** comparison (Tabelle 4 Muster)

### Stufe 3 — Erklärung

**C1 (740 Zeichen):**
"Die Entwicklungspsychologin Mary Ainsworth entwickelte in den 1970er Jahren den **Fremde-Situation-Test** (Strange Situation Procedure): Ein Kind (12-18 Monate) wird kurz von der Bezugsperson getrennt und mit einer fremden Person konfrontiert. Beobachtet wird vor allem das **Wiedervereinigungsverhalten**. Daraus ergeben sich vier Muster:

**B — Sicher (ca. 60 %):** Kind protestiert bei Trennung, freut sich bei Rückkehr, lässt sich trösten und spielt dann weiter. Bezugsperson ist feinfühlig und verlässlich.

**A — Unsicher-vermeidend (ca. 20 %):** Kind zeigt kaum Reaktion, ignoriert Rückkehr der Bezugsperson. Innen gestresst (nachgewiesen über Cortisol), außen scheinbar unbeteiligt.

**C — Unsicher-ambivalent (ca. 10 %):** Kind klammert und wehrt gleichzeitig ab, lässt sich nicht beruhigen.

**D — Desorganisiert (ca. 10 %):** Widersprüchliche Verhaltensweisen (auf Bezugsperson zugehen und erstarren), häufig nach traumatischen Erfahrungen. (Ainsworth, 1978)"

**B1 (620 Zeichen):**
"Die Forscherin **Mary Ainsworth** hat 1978 einen Test gemacht. Er heißt **Fremde-Situation-Test**. Ein Kind (12 bis 18 Monate alt) wird kurz von der Mutter getrennt. Dann kommt eine fremde Person. Danach kommt die Mutter zurück. Wichtig ist: Wie reagiert das Kind auf die Rückkehr?

Es gibt **4 Muster**:

**B — Sicher** (ca. 60 von 100 Kindern): Das Kind weint beim Abschied. Bei der Rückkehr freut es sich. Es lässt sich trösten. Dann spielt es weiter.

**A — Unsicher-vermeidend** (ca. 20 von 100): Das Kind zeigt kaum Reaktion. Es tut so, als wäre nichts. Aber innen ist Stress.

**C — Unsicher-ambivalent** (ca. 10 von 100): Das Kind will die Mutter, wehrt sich aber auch. Es lässt sich nicht beruhigen.

**D — Desorganisiert** (ca. 10 von 100): Das Kind verhält sich seltsam. Oft nach schlimmen Erlebnissen."

- **Erklärungs-Step:** stepType `comparison` (4-Spalten-Vergleich)
- **Glossar-Begriffe:** [Fremde-Situation-Test, Bindungsmuster, sicher, unsicher-vermeidend, unsicher-ambivalent, desorganisiert]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein Kind, das bei Trennung nicht weint, hat eine sichere Bindung"**
- **Fachbegriff:** Vermeidungs-Missverständnis
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — das ist typisch für **Muster A (unsicher-vermeidend)**. Das Kind hat gelernt: Wenn ich Gefühle zeige, hilft es nicht. Außen ruhig, innen aber messbar gestresst (erhöhter Cortisolspiegel). Sichere Bindung heißt: Kind darf Gefühle zeigen und wird getröstet."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — das ist **Muster A** (unsicher-vermeidend). Das Kind zeigt nichts, aber innen ist Stress. Es hat gelernt: Weinen hilft nicht. Sichere Bindung ist anders: Das Kind darf Gefühle zeigen und wird getröstet."

**D2: "Desorganisierte Bindung bedeutet das Kind hat eine Behinderung"**
- **Fachbegriff:** D-Typ-Pathologie-Fehler
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — **Muster D (desorganisiert)** ist kein medizinisches Störungsbild, sondern ein Bindungsmuster. Es entsteht meist durch **unberechenbares oder angstmachendes Verhalten** der Bezugsperson (z.B. bei Misshandlung, schwerer psychischer Erkrankung der Eltern). Das Kind weiß nicht, was sicher ist."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Muster D** ist keine Behinderung. Es ist ein Bindungs-Muster. Es entsteht, wenn die Bezugsperson oft unberechenbar ist. Zum Beispiel bei Gewalt oder schwerer Krankheit. Das Kind weiß nicht, was sicher ist."

**D3: "Bindungsmuster sind endgültig und können sich nicht mehr ändern"**
- **Fachbegriff:** Fixierungs-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Bindungsmuster sind **veränderbar**. Neue, verlässliche Beziehungen (Pflegefamilie, Partnerin, Therapie) können unsichere Muster teilweise überschreiben. Die Forschung nennt das 'earned security'. Die ersten Jahre sind prägend, aber nicht festgelegt."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — Bindungs-Muster können sich ändern. Neue Beziehungen können helfen: eine Pflegefamilie, ein Partner, eine Therapie. Die Forschung sagt: Man kann sichere Bindung später 'erarbeiten'. Die ersten Jahre prägen, aber sind nicht endgültig."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. Ainsworth (1978) unterscheidet im Fremde-Situation-Test vier Muster: **B** sicher (trösten lassen, weiter spielen), **A** vermeidend (kein Protest), **C** ambivalent (nicht zu beruhigen), **D** desorganisiert (widersprüchlich). Entscheidend: das Wiedersehen."

**B1 (230 Zeichen):** "Sehr gut. Ainsworth hat 4 Muster gefunden: **B** sicher, **A** vermeidend, **C** ambivalent, **D** desorganisiert. Wichtig ist nicht der Abschied — wichtig ist, wie das Kind reagiert, wenn die Mutter zurückkommt."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Bindungsmuster unterscheidet Ainsworth (1978) im Fremde-Situation-Test?"
- **Rückseite:** "B sicher (60 %), A unsicher-vermeidend (20 %), C unsicher-ambivalent (10 %), D desorganisiert (10 %). Beurteilt wird das Wiedervereinigungsverhalten."
- **Kategorie:** fachbegriff

---

## Baustein 3: motorische-meilensteine

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-meilensteine-motorik
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-03]

### Stufe 1 — Denkfrage
- **Frage:** "Mit welchem Alter, denkst du, kann ein gesundes Kind frei laufen? Und warum ist es wichtig, dass du als Pflegefachkraft die Meilensteine kennst?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (245 Zeichen):** "Grobe motorische Meilensteine: Kopf heben 3 Monate, Drehen 5 Mo, freies Sitzen 7 Mo, Krabbeln 9 Mo, Stehen mit Halt 12 Mo, freies Laufen um 15 Mo. Die Kinder-Richtlinie (G-BA) prüft diese Meilensteine bei den U-Untersuchungen. (G-BA Kinder-Richtlinie)"

**B1 (230 Zeichen):** "Große Meilensteine für Bewegung: Kopf heben mit 3 Monaten, Drehen mit 5, Sitzen mit 7, Krabbeln mit 9, Stehen mit Halt mit 12 Monaten, freies Laufen mit etwa 15 Monaten. Bei den U-Untersuchungen prüft der Arzt diese Schritte."

- **Step-Typ:** timeline (Meilensteine auf Zeitachse)

### Stufe 3 — Erklärung

**C1 (690 Zeichen):**
"Die motorische Entwicklung verläuft in einer charakteristischen Reihenfolge — **von kopfwärts nach füßwärts** (kraniokaudal) und **vom Rumpf zur Peripherie**. Wichtige Eckpunkte nach der Kinder-Richtlinie des G-BA (geprüft bei U-Untersuchungen):

- **3 Monate:** Kopf in Bauchlage kurz heben
- **5 Monate:** Drehen vom Rücken auf den Bauch
- **7 Monate:** Freies Sitzen für einige Sekunden
- **9 Monate:** Krabbeln (nicht alle Kinder — manche rutschen)
- **12 Monate:** Aufstehen und Stehen mit Halt
- **15 Monate:** Freies Laufen (Normbereich 12-18 Monate)

Jedes Kind entwickelt sich individuell. Abweichungen von wenigen Wochen sind normal. Wichtig: **Seitengleiche Bewegung, zunehmende Kontrolle, Exploration**. Deutliche Verzögerungen oder Rückschritte sind Warnzeichen und führen zu weiterer kinderärztlicher Diagnostik. (G-BA Kinder-Richtlinie, U1-U9)"

**B1 (560 Zeichen):**
"Bewegung entwickelt sich in einer bestimmten Reihenfolge: **von oben nach unten** und **von innen nach außen**. Die wichtigsten Schritte (vom G-BA geprüft bei den U-Untersuchungen):

- **3 Monate:** Kopf heben (in Bauchlage)
- **5 Monate:** Drehen (Rücken → Bauch)
- **7 Monate:** Sitzen (frei, ein paar Sekunden)
- **9 Monate:** Krabbeln (nicht jedes Kind — manche rutschen)
- **12 Monate:** Stehen mit Halt
- **15 Monate:** Frei laufen (normal: 12 bis 18 Monate)

Jedes Kind ist anders. Ein paar Wochen Unterschied sind normal. Wichtig ist: Beide Seiten bewegen sich gleich. Das Kind wird besser. Nur große Verzögerungen sind ein Warnzeichen."

- **Erklärungs-Step:** stepType `timeline` (Meilenstein-Zeitstrahl 0-18 Mo)
- **Glossar-Begriffe:** [Meilenstein, kraniokaudal, Motorik, U-Untersuchung]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Wenn ein Kind mit 10 Monaten noch nicht krabbelt, ist etwas krankhaft"**
- **Fachbegriff:** Krabbel-Zwang-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — Krabbeln ist **nicht obligatorisch**. Manche Kinder rutschen auf dem Po, manche überspringen das Krabbeln ganz und stehen direkt auf. Solange andere Meilensteine (Sitzen, Aufziehen, Laufen) altersgerecht erreicht werden, ist das unproblematisch."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — nicht jedes Kind krabbelt. Manche rutschen auf dem Po. Manche stehen direkt auf, ohne zu krabbeln. Das ist normal. Wichtig ist, dass andere Schritte wie Sitzen und Laufen zur richtigen Zeit kommen."

**D2: "Früher ist immer besser — wenn ein Kind schon mit 9 Monaten läuft, ist es weiter entwickelt"**
- **Fachbegriff:** Früh-ist-besser-Mythos
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — sehr frühes Laufen (< 10 Monate) ist medizinisch eher **ungünstig**: Der Halteapparat ist noch nicht ausgereift, Fehlstellungen können entstehen. Der Normbereich fürs freie Laufen ist **12-18 Monate**. 'Weiter' bedeutet nicht automatisch besser."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — sehr früh laufen ist nicht besser. Unter 10 Monaten ist der Körper noch nicht stark genug. Das kann schlecht für Beine und Füße sein. Normal ist Laufen zwischen 12 und 18 Monaten. Früh heißt nicht automatisch gesund."

**D3: "Alle Kinder erreichen Meilensteine exakt zum gleichen Zeitpunkt"**
- **Fachbegriff:** Norm-starr-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — Meilensteine sind **Durchschnittswerte** mit einem Normbereich. Freies Laufen ist zwischen 12 und 18 Monaten normal. Bei den U-Untersuchungen achtet der Kinderarzt auf den **Verlauf und Warnzeichen**, nicht auf starre Wochen-Genauigkeit."
- **Feedback (B1, 225 Zeichen):** "Nicht ganz — Meilensteine sind Durchschnitte. Freies Laufen ist zwischen 12 und 18 Monaten normal. Der Arzt schaut bei den U-Untersuchungen: Wie entwickelt sich das Kind insgesamt? Kleine Unterschiede sind normal."

### Richtig-Feedback
**C1 (260 Zeichen):** "Genau. Motorische Meilensteine: Kopf heben 3 Mo, Drehen 5 Mo, Sitzen 7 Mo, Krabbeln 9 Mo, Stehen mit Halt 12 Mo, freies Laufen 12-18 Mo. Die G-BA-Kinder-Richtlinie prüft den Verlauf bei U-Untersuchungen. Wichtig: Normbereich, nicht starre Wochen-Vorgabe."

**B1 (230 Zeichen):** "Sehr gut. Die Meilensteine: Kopf heben 3 Mo, Drehen 5 Mo, Sitzen 7 Mo, Krabbeln 9 Mo, Stehen 12 Mo, Laufen 12-18 Mo. Die U-Untersuchungen prüfen das. Wichtig: Normbereich, nicht genau auf die Woche."

### Verknüpfte Karteikarte
- **Vorderseite:** "Mit welchem Alter läuft ein Kind durchschnittlich frei?"
- **Rückseite:** "Um 15 Monate (Normbereich 12-18 Monate). Bei den U-Untersuchungen geprüft (G-BA Kinder-Richtlinie)."
- **Kategorie:** fakt

---

## Baustein 4: sprach-meilensteine

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-meilensteine-sprache
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-04]

### Stufe 1 — Denkfrage
- **Frage:** "Wann spricht ein Kind wohl seine ersten Worte? Und was unterscheidet 'Lallen' von 'echten Wörtern'?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Sprachmeilensteine: Lallen ab 6 Monaten (ba-ba, da-da), erste sinnhafte Worte um 12 Monate, **Zwei-Wort-Sätze** mit 24 Monaten, **Drei-Wort-Sätze** um 36 Monate. Verzögerungen zeigen sich oft bei der U6/U7. (G-BA Kinder-Richtlinie)"

**B1 (225 Zeichen):** "Sprache entwickelt sich so: Lallen mit 6 Monaten (ba-ba, da-da). Erste Wörter mit 12 Monaten. Zwei-Wort-Sätze mit 24 Monaten (Mama komm). Drei-Wort-Sätze mit 36 Monaten. Der Arzt prüft das bei der U6 und U7."

- **Step-Typ:** timeline (Sprachentwicklung 0-36 Mo)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Die Sprachentwicklung folgt einem universellen Muster:

- **6 Monate:** Lallen — rhythmische Silbenketten (ba-ba-ba, ma-ma-ma), noch ohne Bedeutung
- **12 Monate:** Erste sinnhafte Einwortsätze ('Mama' als Ruf), durchschnittlich **5-10 Wörter aktiv**
- **18 Monate:** Wortschatzexplosion, etwa 50 Wörter, Zeigen auf benannte Objekte
- **24 Monate:** **Zwei-Wort-Sätze** ('Mama komm', 'Ball weg'), etwa 200 Wörter
- **36 Monate:** **Drei-Wort-Sätze** mit erster Grammatik, Zeitformen beginnen, Wortschatz ca. 500-1000 Wörter

Warnzeichen (abklärungsbedürftig): weniger als 50 Wörter mit 24 Monaten (**Late Talker**), keine Zweiwort-Äußerungen mit 24 Monaten. Ursachen können Hörstörung, Entwicklungsverzögerung, ungünstige Umgebung oder Mehrsprachigkeit mit geringem Input sein. Die U7 (21-24 Monate) prüft gezielt den Wortschatz. (G-BA Kinder-Richtlinie, U7)"

**B1 (580 Zeichen):**
"Sprache entwickelt sich in einer festen Reihenfolge:

- **6 Monate:** Lallen. Das Kind wiederholt Silben: ba-ba, da-da. Noch keine Bedeutung.
- **12 Monate:** Erste richtige Wörter. Meistens 'Mama' oder 'Papa'. Etwa **5 bis 10 Wörter**.
- **18 Monate:** Der Wortschatz wächst schnell. Etwa **50 Wörter**.
- **24 Monate:** **Zwei-Wort-Sätze**: 'Mama komm', 'Ball weg'. Etwa **200 Wörter**.
- **36 Monate:** **Drei-Wort-Sätze** mit Grammatik. Etwa **500 bis 1000 Wörter**.

**Warnzeichen**: Mit 24 Monaten weniger als 50 Wörter heißt **Late Talker**. Mögliche Gründe: schlechtes Hören, zu wenig Sprache zu Hause, Entwicklungsverzögerung. Die U7 (21-24 Monate) prüft das."

- **Erklärungs-Step:** stepType `timeline` (Sprache auf Zeitstrahl mit Warnzeichen)
- **Glossar-Begriffe:** [Lallen, Wortschatzexplosion, Late Talker, Zwei-Wort-Satz]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Mehrsprachig aufwachsende Kinder sprechen grundsätzlich später"**
- **Fachbegriff:** Mehrsprachigkeits-Mythos
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Mehrsprachigkeit ist **kein Risikofaktor für Sprachentwicklung**. Kinder erreichen die Meilensteine gleich zeitig, wenn auch pro Sprache mit geringerem Wortschatz. Der **Gesamtwortschatz** über beide Sprachen ist meist normal. Verzögerung heißt: Hörtest, nicht 'zweite Sprache weglassen'."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — zwei Sprachen machen nicht langsamer. Das Kind lernt beide Sprachen zusammen. Pro Sprache weiß es weniger Wörter. Aber insgesamt ist der Wortschatz normal. Bei Verzögerung: Hören prüfen lassen. Nicht einfach eine Sprache weglassen."

**D2: "Ein Kind, das mit 24 Monaten nur 20 Wörter spricht, ist nur spät dran — keine Diagnostik nötig"**
- **Fachbegriff:** Late-Talker-Verharmlosung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — mit 24 Monaten weniger als **50 Wörter** oder fehlende Zweiwort-Sätze heißt **Late Talker**. Das ist ein klares Warnsignal und rechtfertigt Hörtest und Abklärung bei der U7. Etwa die Hälfte der Late Talker bleibt sprachauffällig. Frühe Logopädie verbessert die Prognose deutlich."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — mit 24 Monaten unter 50 Wörtern heißt **Late Talker**. Das ist ein Warnsignal. Die U7 prüft das. Wichtig: Hörtest machen. Etwa die Hälfte dieser Kinder hat weiter Probleme. Frühe Logopädie hilft viel. Nicht einfach warten und hoffen."

**D3: "Fernsehen hilft Kindern beim Sprechen lernen"**
- **Fachbegriff:** Medien-Lernmythos
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — Studien zeigen, dass **passives Medienkonsum** unter 3 Jahren die Sprachentwicklung **eher bremst**. Kinder lernen Sprache nur im **direkten Kontakt** mit Bezugspersonen (Dialog, Blickkontakt, Reagieren). Die WHO empfiehlt: 0-2 Jahre keine Bildschirmzeit, 2-4 Jahre max. 1 Stunde. (WHO, 2019)"
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Fernsehen hilft kleinen Kindern **nicht** beim Sprechen. Sie lernen Sprache nur, wenn jemand mit ihnen spricht. Also mit Blickkontakt und im Gespräch. Die WHO sagt: 0 bis 2 Jahre kein Bildschirm. 2 bis 4 Jahre maximal 1 Stunde pro Tag."

### Richtig-Feedback
**C1 (255 Zeichen):** "Genau. Die Meilensteine: Lallen 6 Mo, erste Wörter 12 Mo, 50 Wörter 18 Mo, Zwei-Wort-Sätze 24 Mo, Drei-Wort-Sätze 36 Mo. Warnzeichen: < 50 Wörter mit 24 Mo = Late Talker. Die U7 ist der zentrale Kontrolltermin. Mehrsprachigkeit ist KEIN Risikofaktor."

**B1 (230 Zeichen):** "Sehr gut. Lallen mit 6 Mo, erste Wörter mit 12 Mo, Zwei-Wort-Sätze mit 24 Mo, Drei-Wort-Sätze mit 36 Mo. Warnzeichen: weniger als 50 Wörter mit 24 Monaten (Late Talker). Wichtig: Zwei Sprachen sind kein Problem."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was ist ein Late Talker?"
- **Rückseite:** "Kind, das mit 24 Monaten weniger als 50 Wörter spricht oder keine Zweiwort-Sätze bildet. Abklärung: Hörtest + Entwicklungsdiagnostik bei U7."
- **Kategorie:** fachbegriff

---

## Baustein 5: piaget-kognition

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-piaget
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-05]

### Stufe 1 — Denkfrage
- **Frage:** "Ein 2-jähriges Kind versteckt ein Spielzeug, indem es sich die Augen zuhält. Was sagt dir das über sein Denken?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Jean Piaget beschrieb 4 Stadien der kognitiven Entwicklung. Für die Pflege wichtig: **sensomotorisch** (0-2 J, Erkunden über Sinne und Bewegung) und **präoperational** (2-7 J, magisches Denken, Egozentrismus). Kinder denken altersabhängig anders als Erwachsene. (Piaget, 1936)"

**B1 (240 Zeichen):** "Jean Piaget hat die Denkentwicklung in 4 Stufen geteilt. Wichtig für Pflege sind: **sensomotorisch** (0 bis 2 Jahre: durch Fühlen und Bewegen lernen) und **präoperational** (2 bis 7 Jahre: magisches Denken, alles dreht sich um mich). (Piaget, 1936)"

- **Step-Typ:** comparison (2 Stadien-Vergleich)

### Stufe 3 — Erklärung

**C1 (730 Zeichen):**
"Der Schweizer Entwicklungspsychologe Jean Piaget beschrieb 1936 vier Stadien der kognitiven Entwicklung. Für die Kinderkrankenpflege sind die ersten beiden zentral:

**Sensomotorisches Stadium (0-2 Jahre):** Das Kind erschließt die Welt über **Sinne und Bewegung**. Zentral: **Objektpermanenz** (ab ca. 8 Monaten) — das Verständnis, dass etwas noch existiert, wenn es nicht sichtbar ist. Vorher: 'aus den Augen, aus dem Sinn'.

**Präoperationales Stadium (2-7 Jahre):** Symbolisches Denken beginnt. Aber: **Egozentrismus** (andere Sichtweisen noch nicht vorstellbar), **magisches Denken** ('Der Schrank isst mich'), **animistisches Denken** (Dinge haben Gefühle). Krankheit wird oft als **Strafe** erlebt.

Pflege-Konsequenz: Kinder müssen altersgerecht informiert werden. Dem 3-Jährigen erklärt man: 'Die Spritze ist wie ein kleiner Mückenstich', nicht Pharmakologie. **Autonomieerhalt + einfache, bildhafte Sprache**. (Piaget, 1936)"

**B1 (590 Zeichen):**
"Der Forscher **Jean Piaget** hat die Denkentwicklung in 4 Stufen geteilt. Für die Pflege sind die ersten zwei wichtig:

**Sensomotorisch (0 bis 2 Jahre):** Das Kind lernt mit Sinnen und Bewegung. Wichtig: **Objektpermanenz**. Das heißt: Etwas existiert auch dann, wenn man es nicht sieht. Ein Kind versteht das erst mit 8 Monaten.

**Präoperational (2 bis 7 Jahre):** Das Kind kann jetzt Symbole verstehen. Aber: Es denkt **egozentrisch** (alles dreht sich um mich). Es hat **magisches Denken** ('Der Schrank isst mich'). Es denkt: 'Alle Dinge haben Gefühle.' Krankheit fühlt sich oft wie eine **Strafe** an.

**Wichtig für Pflege:** Sprich altersgerecht. Sage einem 3-jährigen Kind: 'Die Spritze ist wie ein kleiner Mückenstich.' Nutze Bilder und einfache Wörter."

- **Erklärungs-Step:** stepType `comparison` (Tabelle sensomotorisch vs. präoperational)
- **Glossar-Begriffe:** [sensomotorisch, präoperational, Objektpermanenz, Egozentrismus, magisches Denken]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Ein 4-jähriges Kind versteht, dass die Operation seiner Gesundheit dient"**
- **Fachbegriff:** Rationalitäts-Annahme
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — mit 4 Jahren ist das Kind im **präoperationalen Stadium**. Es denkt magisch und egozentrisch. Krankheit und Operation werden oft als **Strafe** oder **Bedrohung** erlebt, nicht als 'Hilfe'. Altersgerechte Aufklärung mit Bildern, Kuscheltier-Demonstration und einfachen Worten ist nötig."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — ein 4-jähriges Kind denkt **präoperational**. Krankheit fühlt sich wie Strafe an, nicht wie Hilfe. Das Kind versteht keine Erwachsenen-Erklärung. Nutze Bilder, spiele die Operation mit einem Kuscheltier vor, sprich einfach."

**D2: "Objektpermanenz hat ein Baby von Geburt an"**
- **Fachbegriff:** Permanenz-Frühstart-Fehler
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — **Objektpermanenz** entwickelt sich erst um **8 Monate**. Vorher gilt: Was das Baby nicht sieht, existiert für es nicht. Deshalb klappt Kuckuck-Spiel erst dann richtig und die **Fremdel-Phase** beginnt (Baby merkt, dass es die Mutter gibt, wenn sie nicht da ist). (Piaget, 1936)"
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — **Objektpermanenz** kommt erst mit etwa 8 Monaten. Vorher denkt das Baby: Was ich nicht sehe, gibt es nicht. Deshalb funktioniert Kuckuck-Spiel erst ab 8 Monaten. Und deshalb beginnt dann auch das **Fremdeln**."

**D3: "Piagets Stadien sind exakt an das Alter gebunden"**
- **Fachbegriff:** Alters-Starrheits-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — die Altersangaben sind **Richtwerte**, keine starren Grenzen. Die moderne Forschung zeigt auch: Kinder können einzelne Leistungen oft **früher** als Piaget annahm. Wichtig ist die **Abfolge der Stufen**, nicht das genaue Alter. Pflege orientiert sich am einzelnen Kind."
- **Feedback (B1, 235 Zeichen):** "Nicht ganz — das Alter bei Piaget ist ein Richtwert. Nicht jede Stufe kommt genau zu dem Alter. Heute weiß man: Kinder können manches früher. Aber die Reihenfolge der Stufen stimmt. Wichtig: Schau auf das einzelne Kind, nicht auf das Alter."

### Richtig-Feedback
**C1 (275 Zeichen):** "Genau. Piaget (1936) beschreibt 4 Stadien. Relevant für die Pflege: **sensomotorisch** (0-2 J, Objektpermanenz ab 8 Mo) und **präoperational** (2-7 J, Egozentrismus, magisches Denken). Daraus folgt: altersgerechte, bildhafte Aufklärung — nicht Erwachsenen-Erklärungen."

**B1 (235 Zeichen):** "Sehr gut. Piaget hat 4 Stufen beschrieben. Wichtig: **sensomotorisch** (0-2 J, Objektpermanenz ab 8 Mo) und **präoperational** (2-7 J, magisches Denken, Egozentrismus). Für die Pflege: Nutze Bilder, einfache Wörter, Kuscheltiere."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was bedeutet Objektpermanenz nach Piaget und ab wann besteht sie?"
- **Rückseite:** "Verständnis, dass ein Objekt weiter existiert, auch wenn es nicht sichtbar ist. Entwickelt sich ab ca. 8 Monaten."
- **Kategorie:** fachbegriff

---

## Baustein 6: soziale-meilensteine-fremdeln

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-meilensteine-sozial
- **bloomLevel:** 2
- **wissensart:** fakt
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-06]

### Stufe 1 — Denkfrage
- **Frage:** "Warum weint ein 9 Monate altes Baby plötzlich, wenn du ihm ohne die Mutter näherkommst? Und warum trotzt ein 2-jähriges Kind bei allem 'Nein'?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (240 Zeichen):** "Soziale Meilensteine: **Soziales Lächeln** ab 6 Wochen (erstes bewusstes Lächeln zur Person), **Fremdeln** ab 8 Monaten (Angst vor Fremden), **Trotzphase** mit 2-3 Jahren (Ich-Werdung, Autonomie). Alle drei sind entwicklungsnormale Zeichen."

**B1 (225 Zeichen):** "Die soziale Entwicklung hat wichtige Schritte: **Soziales Lächeln** mit 6 Wochen (erstes bewusstes Lächeln). **Fremdeln** mit 8 Monaten (Angst vor Fremden). **Trotzphase** mit 2-3 Jahren (Kind will alles selbst und sagt oft Nein)."

- **Step-Typ:** timeline (soziale Meilensteine 0-3 J)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Drei soziale Meilensteine sind für die Pflege wichtig:

**Soziales Lächeln (ab 6 Wochen):** Erstes gezieltes Lächeln zur Bezugsperson — Beginn der sozialen Kommunikation. Wichtiges Signal an die Eltern, dass Bindung entsteht. Ausbleibendes soziales Lächeln > 3 Monate ist abklärungsbedürftig.

**Fremdeln (ab 8 Monaten):** Das Kind unterscheidet jetzt vertraute von fremden Personen und reagiert mit **Angst** auf Fremde. Zeichen **gelungener Bindungsentwicklung**. Dauer: einige Monate. Für die Pflege bedeutet das: Bezugsperson nach Möglichkeit **einbeziehen**, nicht erzwingen, kindgerecht Beziehung aufbauen.

**Trotzphase / Autonomiephase (2-3 Jahre):** Das Kind entdeckt seinen eigenen Willen, testet Grenzen, sagt häufig 'Nein' und 'selber'. Diese **Autonomie-Entwicklung** ist Voraussetzung für gesunde Persönlichkeitsbildung. Pflege: Wahlmöglichkeiten anbieten ('Rotes oder blaues Pflaster?') statt nur Anweisungen geben."

**B1 (600 Zeichen):**
"Drei wichtige soziale Schritte:

**Soziales Lächeln (ab 6 Wochen):** Das erste bewusste Lächeln für die Bezugsperson. Ein wichtiges Zeichen: Die Bindung beginnt. Wenn ein Baby mit 3 Monaten nicht lächelt: Arzt fragen.

**Fremdeln (ab 8 Monaten):** Das Kind hat jetzt Angst vor Fremden. Das ist **normal und gut**. Es zeigt: Die Bindung zur Mutter oder zum Vater ist da. Für die Pflege: Nimm die Bezugsperson dazu. Zwinge das Kind nicht.

**Trotzphase (2 bis 3 Jahre):** Das Kind will alles selbst machen. Es sagt oft 'Nein'. Das heißt **Autonomiephase**. Es ist normal und wichtig. Pflege-Tipp: Gib dem Kind eine Wahl. Zum Beispiel: 'Willst du ein rotes oder ein blaues Pflaster?' Das geht besser als Befehle."

- **Erklärungs-Step:** stepType `timeline` (soziale Meilensteine 0-3 J mit Pflege-Tipps)
- **Glossar-Begriffe:** [Soziales Lächeln, Fremdeln, Trotzphase, Autonomiephase]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Fremdeln ist ein Zeichen für schlechte soziale Entwicklung"**
- **Fachbegriff:** Fremdel-Pathologie-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — Fremdeln ist ein **positives Entwicklungszeichen**. Das Kind kann jetzt vertraute und fremde Personen unterscheiden und hat eine Bindung zur Bezugsperson aufgebaut. Ausbleibendes Fremdeln kann sogar ein Warnzeichen für Bindungsstörung sein. Pflege: Ruhe, Bezugsperson dazu."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — Fremdeln ist **gut**. Es zeigt: Das Kind hat eine starke Bindung zur Mutter. Es kann jetzt Menschen unterscheiden. Wenn ein Kind mit 12 Monaten nie fremdelt, ist das eher ein Warnzeichen. Für die Pflege: Ruhig sein. Bezugsperson dazu."

**D2: "In der Trotzphase muss man konsequent durchgreifen und Grenzen zeigen"**
- **Fachbegriff:** Autoritärer-Durchsetzungs-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die Trotzphase ist keine 'Ungezogenheit', sondern eine **gesunde Autonomie-Entwicklung**. Hartes Durchgreifen ('Wer ist hier der Chef?') frustriert das Kind und bringt es nicht weiter. Besser: **Wahlmöglichkeiten geben**, verständnisvoll bleiben und unnötige Kämpfe vermeiden."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die Trotzphase ist keine böse Absicht. Das Kind lernt: 'Ich bin jemand.' Das ist gut. Strenges Durchgreifen hilft nicht. Besser: Gib dem Kind eine Wahl. 'Willst du die Jacke oder den Pulli?' Das fühlt sich für das Kind gut an."

**D3: "Soziales Lächeln zeigt sich schon in den ersten Lebenstagen"**
- **Fachbegriff:** Lächel-Frühstart-Fehler
- **Feedback (C1, 265 Zeichen):** "Nicht ganz — das frühe Lächeln von Neugeborenen ist meist **Reflex-Lächeln** (im Schlaf, nicht sozial). Das **echte soziale Lächeln** zur Person kommt um **6 Wochen**. Es ist ein wichtiger Meilenstein und Start der gezielten sozialen Kommunikation zwischen Baby und Bezugsperson."
- **Feedback (B1, 230 Zeichen):** "Nicht ganz — Neugeborene lächeln manchmal im Schlaf. Das ist aber nur ein Reflex. Das **echte Lächeln zur Person** kommt mit 6 Wochen. Das ist der wichtige Meilenstein. Er zeigt: Die Kommunikation mit anderen beginnt."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. Drei soziale Meilensteine: **soziales Lächeln** (6 Wochen, Bindungssignal), **Fremdeln** (8 Monate, gelungene Bindungsentwicklung), **Trotzphase** (2-3 Jahre, Autonomie-Entwicklung). Alle drei sind entwicklungsnormal — keine 'Störungen', sondern Zeichen."

**B1 (230 Zeichen):** "Sehr gut. Soziales Lächeln mit 6 Wochen, Fremdeln mit 8 Monaten, Trotzphase mit 2-3 Jahren. Alle drei sind normal und gut. Fremdeln zeigt starke Bindung. Trotzphase ist Autonomie. Beides ist kein Problem."

### Verknüpfte Karteikarte
- **Vorderseite:** "Ab wann beginnt das Fremdeln und was bedeutet es?"
- **Rückseite:** "Ab etwa 8 Monaten. Zeichen gelungener Bindungsentwicklung: Kind unterscheidet vertraute von fremden Personen."
- **Kategorie:** fakt

---

## Baustein 7: u-untersuchungen-ueberblick

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-u-untersuchungen
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-07]

### Stufe 1 — Denkfrage
- **Frage:** "Warum geht ein gesundes Baby in den ersten Lebensjahren trotzdem regelmäßig zum Arzt? Welchen Zweck haben diese Routine-Untersuchungen?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Die **U-Untersuchungen** sind gesetzlich geregelte Vorsorgetermine (G-BA Kinder-Richtlinie): U1 direkt nach Geburt, U2 mit 3-10 Tagen, U3 mit 4-5 Wochen, und weiter bis U9 mit 5 Jahren. Jede U prüft Entwicklung, Wachstum, Risiken. Ergebnisse kommen ins **gelbe U-Heft**."

**B1 (245 Zeichen):** "Die **U-Untersuchungen** sind feste Termine für Kinder beim Arzt. Sie stehen im Gesetz (G-BA). U1 kommt direkt nach der Geburt. U2 mit 3 bis 10 Tagen. Dann U3 bis U9 — bis zum 5. Lebensjahr. Ergebnisse kommen in das **gelbe U-Heft**."

- **Step-Typ:** timeline (U1-U9 auf Zeitachse)

### Stufe 3 — Erklärung

**C1 (750 Zeichen):**
"Die Früherkennungsuntersuchungen für Kinder sind in der **Kinder-Richtlinie des G-BA** geregelt und durch die gesetzliche Krankenversicherung bezahlt:

| U | Zeitpunkt | Schwerpunkt |
|---|-----------|-------------|
| U1 | direkt nach Geburt | Apgar, Vitalität, Fehlbildungen |
| U2 | 3-10 Tage | Neugeborenen-Screening, Hüfte, Stoffwechsel |
| U3 | 4-5 Wochen | Gewicht, Reflexe, Hüft-Ultraschall |
| U4 | 3-4 Monate | Motorik, Hören, Impfungen starten |
| U5 | 6-7 Monate | Sitzen, Greifen, Nahrungsaufbau |
| U6 | 10-12 Monate | Laufen-Anbahnung, erste Worte |
| U7 | 21-24 Monate | Sprache (Wortschatz!) |
| U7a | 34-36 Monate | Sehen, Sprache, Verhalten |
| U8 | 46-48 Monate | Ganzheitliche Entwicklung |
| U9 | 60-64 Monate | Schulreife |

Ziele: **frühzeitig Entwicklungsauffälligkeiten erkennen**, Impfungen fördern, Eltern beraten. Ergebnisse werden im **gelben U-Heft** dokumentiert. Seit 2008 gibt es in einigen Bundesländern verbindliche Einladungs-/Meldesysteme bei Nicht-Teilnahme. (G-BA Kinder-Richtlinie, U1-U9)"

**B1 (620 Zeichen):**
"Die **U-Untersuchungen** sind feste Termine beim Kinderarzt. Das steht in der **Kinder-Richtlinie des G-BA**. Die Krankenkasse bezahlt alles.

Die wichtigsten Termine:
- **U1** direkt nach der Geburt: Ist das Baby gesund?
- **U2** mit 3 bis 10 Tagen: Stoffwechsel, Hüfte
- **U3** mit 4 bis 5 Wochen: Gewicht, Hüft-Ultraschall
- **U4** mit 3 bis 4 Monaten: Bewegung, Hören, erste Impfungen
- **U5** mit 6 bis 7 Monaten: Sitzen, Greifen
- **U6** mit 10 bis 12 Monaten: Laufen, erste Worte
- **U7** mit 21 bis 24 Monaten: Sprache (Wortschatz!)
- **U7a** mit 34 bis 36 Monaten: Sehen, Sprache
- **U8** mit 46 bis 48 Monaten: Ganze Entwicklung
- **U9** mit 60 bis 64 Monaten: Schulreife

Ziele: Probleme **früh erkennen**. Impfungen fördern. Eltern beraten. Alles kommt in das **gelbe U-Heft**."

- **Erklärungs-Step:** stepType `timeline` (U1-U9 detailliert)
- **Glossar-Begriffe:** [U-Untersuchung, Früherkennung, U-Heft, Schulreife, G-BA]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "U-Untersuchungen sind freiwillig und können bei gesunden Kindern weggelassen werden"**
- **Fachbegriff:** Freiwilligkeits-Fehler
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — in einigen **Bundesländern sind U-Untersuchungen verbindlich** (z.B. in BW, Bayern, Hessen) mit Einlade- und Meldesystem. In allen Bundesländern ist die Teilnahme dringend empfohlen, weil sich **stille Entwicklungsstörungen** nur bei systematischer Kontrolle zeigen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — in manchen Bundesländern sind die U-Termine **Pflicht** (Baden-Württemberg, Bayern, Hessen). Wenn das Kind nicht kommt, wird das gemeldet. Überall gilt: Die Termine sind wichtig. Manche Probleme zeigen sich nur da."

**D2: "Die U-Untersuchungen prüfen vor allem das körperliche Wachstum"**
- **Fachbegriff:** Wachstums-Verkürzungs-Irrtum
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die U-Untersuchungen sind **umfassend**: körperliches Wachstum **und** Motorik, Sprache, Sehen, Hören, Verhalten, Impfungen, Beratung der Eltern. Die U7 (21-24 Mo) etwa ist primär ein **Sprach-Check**. Die U9 prüft die Schulreife. Wachstum ist nur ein Teil."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — die U-Termine prüfen **viele Dinge**: Gewicht, Bewegung, Sprache, Sehen, Hören, Verhalten, Impfungen. Zum Beispiel: Die U7 (21-24 Monate) ist vor allem ein **Sprach-Test**. Die U9 prüft, ob das Kind schulfähig ist."

**D3: "Nach der U9 braucht es keine weiteren Vorsorgeuntersuchungen mehr"**
- **Fachbegriff:** Nach-Schulstart-Abbruch
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — nach U9 kommt noch die **J1** (12-14 Jahre) und optional **J2** (16-17 Jahre). Die J1 ist besonders wichtig: Pubertät, Impfstatus (HPV, Tdap), Gesprächsangebote zu Sexualität, Medienkonsum, psychischer Gesundheit. Oft einzige regelmäßige Arzt-Kontaktchance im Jugendalter."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — nach der U9 kommt noch die **J1** (12-14 Jahre) und die **J2** (16-17 Jahre). Die J1 ist wichtig: Pubertät, Impfungen, Gespräche über Sexualität, Medien, Gefühle. Oft ist das der einzige Arzt-Termin im Jugendalter."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Die U-Untersuchungen sind gesetzlich geregelte Vorsorge-Termine (G-BA Kinder-Richtlinie): U1 (Geburt) bis U9 (5-6 Jahre), plus J1 (12-14 J) und J2 (16-17 J). Umfassend: körperlich, kognitiv, sprachlich, sozial. Alles dokumentiert im gelben U-Heft."

**B1 (240 Zeichen):** "Sehr gut. Die U-Untersuchungen gehen von U1 (Geburt) bis U9 (5-6 Jahre). Dann noch J1 und J2 in der Pubertät. Sie prüfen nicht nur Wachstum, sondern auch Sprache, Bewegung, Sehen, Hören. Alles steht im gelben U-Heft."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche U-Untersuchung prüft schwerpunktmäßig die Sprachentwicklung?"
- **Rückseite:** "U7 (21-24 Monate) — Wortschatz und erste Zweiwort-Sätze. (G-BA Kinder-Richtlinie)"
- **Kategorie:** fakt

---

## Baustein 8: u-heft-impfpass

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-u-heft
- **bloomLevel:** 2
- **wissensart:** handlung
- **zeitBudget:** 3 Min
- **quelleFakten:** [F-08]

### Stufe 1 — Denkfrage
- **Frage:** "Eltern bringen ein Kind in die Klinik. Welche drei Dokumente solltest du nach Möglichkeit immer sehen wollen? Und warum?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (255 Zeichen):** "Drei zentrale Dokumente für jedes Kind: **Gelbes U-Heft** (Vorsorge-Ergebnisse U1-U9 + J1), **Impfpass** (gelber Internationaler Impfausweis der WHO-Norm), und bei chronischen Erkrankungen **Notfallpass** oder **Diabetes-Pass**. Immer mitführen lassen."

**B1 (230 Zeichen):** "Drei wichtige Dokumente für Kinder: **Gelbes U-Heft** (Ergebnisse der U-Termine), **Impfpass** (welche Impfungen hat das Kind bekommen?), und bei chronischer Krankheit einen **Notfallpass**. Eltern sollen diese immer dabei haben."

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (640 Zeichen):**
"Drei Dokumente sind für die pflegerische Anamnese und Beratung zentral:

**Gelbes U-Heft** (offiziell: 'Kinder-Untersuchungsheft'): In allen Bundesländern einheitlich. Enthält Ergebnisse aller U-Untersuchungen U1 bis U9 sowie J1. Befunde, Perzentilen-Kurven für Wachstum, Kopfumfang, Auffälligkeiten, Empfehlungen.

**Impfpass** (Internationaler Impfausweis nach WHO-Norm): Gelbes DIN-A6-Heft. Jede Impfung wird vom Arzt mit Datum, Impfstoff, Chargen-Nummer und Unterschrift eingetragen. Wichtig bei Aufnahmen (Impfstatus) und vor Reisen.

**Notfallpass/Allergiepass/Diabetes-Pass:** Bei chronischen Erkrankungen. Enthält Diagnose, Medikamente, Notfall-Handlung.

Pflege-Konsequenz: Bei Aufnahme immer nach diesen Dokumenten fragen. Die Information lässt sich nicht rekonstruieren. (G-BA Kinder-Richtlinie, U1-U9; STIKO Empfehlungen)"

**B1 (550 Zeichen):**
"Drei wichtige Dokumente für Kinder:

**Gelbes U-Heft**: Darin stehen alle Ergebnisse der U-Termine (U1 bis U9 und J1). Gewicht, Größe, Probleme, Tipps vom Arzt. Das Heft ist in allen Bundesländern **gleich**.

**Impfpass**: Ein gelbes Heft. So groß wie eine Postkarte. Da schreibt der Arzt jede Impfung hinein: Datum, Impfstoff, Unterschrift. Das ist wichtig bei Krankenhaus-Aufnahme und vor Reisen.

**Notfallpass**: Für Kinder mit chronischen Krankheiten (zum Beispiel Diabetes, Allergie). Hier stehen: Diagnose, Medikamente, was im Notfall zu tun ist.

**Für die Pflege wichtig**: Bei Aufnahme immer nach diesen drei Dokumenten fragen. Diese Infos kann man nicht schnell nachmachen."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [U-Heft, Impfpass, Notfallpass, Perzentile]
- **TTS-relevant:** nein

### Misconceptions → Distraktoren

**D1: "Das U-Heft ist nur für den Arzt wichtig — in der Pflege brauche ich es nicht"**
- **Fachbegriff:** Pflege-Irrelevanz-Irrtum
- **Feedback (C1, 270 Zeichen):** "Nicht ganz — das U-Heft ist **auch pflegerisch zentral**: Entwicklungsstand, Wachstum, bisherige Auffälligkeiten, Allergien, Impfstatus. Ohne U-Heft fehlt dir bei der Aufnahme wichtige Information. Bei Zweifel: Eltern nachhaken, Heft nachreichen lassen."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — das U-Heft ist auch für die Pflege **wichtig**: Wie ist das Kind entwickelt? Gab es Probleme? Welche Impfungen hat es? Ohne das Heft fehlen dir bei der Aufnahme wichtige Infos. Immer nachfragen und bringen lassen."

**D2: "Impfpass und U-Heft sind dasselbe Dokument"**
- **Fachbegriff:** Dokument-Verwechslung
- **Feedback (C1, 250 Zeichen):** "Nicht ganz — das sind zwei **unterschiedliche Dokumente**. Das **U-Heft** dokumentiert Vorsorge-Untersuchungen, Wachstum und Entwicklung. Der **Impfpass** dokumentiert ausschließlich Impfungen (internationale WHO-Norm). Beide sollten Eltern mitbringen."
- **Feedback (B1, 215 Zeichen):** "Nicht ganz — U-Heft und Impfpass sind **zwei verschiedene Dokumente**. Im **U-Heft** stehen die U-Termine. Im **Impfpass** stehen nur die Impfungen. Eltern sollen beides mitbringen."

**D3: "Wenn der Impfpass verloren ist, reicht eine Aussage der Eltern"**
- **Fachbegriff:** Erinnerungs-Fehler
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — ohne schriftliche Impf-Dokumentation gilt der Impfstatus als **unklar**. Die STIKO empfiehlt dann, **fehlende Impfungen nachzuholen** (wie bei nicht-geimpfter Person). Beim Kinderarzt kann ein neuer Impfpass ausgestellt werden, aber nur auf Basis dokumentierter Impfungen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — ohne den Impfpass gilt: Wir wissen nicht, ob das Kind geimpft ist. Die STIKO sagt dann: **nochmal impfen**. Eltern können sich oft nicht genau erinnern. Ein neuer Pass ist möglich, aber nur mit echten Nachweisen vom Arzt."

### Richtig-Feedback
**C1 (265 Zeichen):** "Genau. Drei Dokumente sind zentral: **Gelbes U-Heft** (U1-J1, Entwicklung und Wachstum), **Impfpass** (WHO-Norm, jede Impfung dokumentiert), bei chronischer Krankheit **Notfallpass**. Bei Aufnahme immer danach fragen — diese Infos lassen sich nicht rekonstruieren."

**B1 (230 Zeichen):** "Sehr gut. Drei Dokumente sind wichtig: gelbes U-Heft (Entwicklung), Impfpass (Impfungen), Notfallpass (bei chronischer Krankheit). Frag die Eltern immer bei der Aufnahme danach. Diese Infos kann man später nicht einfach nachschauen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche drei Dokumente solltest du bei der Aufnahme eines Kindes einsehen?"
- **Rückseite:** "Gelbes U-Heft (U1-J1), Impfpass (WHO-Norm), bei chronischer Krankheit Notfallpass."
- **Kategorie:** handlung

---

## Baustein 9: stiko-impfkalender

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-stiko
- **bloomLevel:** 3
- **wissensart:** fakt
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-09]

### Stufe 1 — Denkfrage
- **Frage:** "Warum bekommt ein Baby schon mit 2 Monaten seine erste Impfung — obwohl das eigentliche Immunsystem noch nicht ausgereift ist?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Die **STIKO** (Ständige Impfkommission am RKI) gibt den Impfkalender heraus. Grundimmunisierung beginnt ab **2. Lebensmonat** mit der **6-fach-Impfung** (Diphtherie, Tetanus, Pertussis, Polio, Hib, Hepatitis B). Masern-Impfpflicht seit 2020 (§ 20 IfSG). (STIKO)"

**B1 (245 Zeichen):** "Die **STIKO** ist die Impfkommission in Deutschland. Sie sagt: Das Baby bekommt die **erste Impfung mit 2 Monaten**. Es ist eine **6-fach-Impfung** gegen 6 Krankheiten. Masern-Impfung ist Pflicht seit 2020. Das steht im Infektionsschutzgesetz (§ 20 IfSG)."

- **Step-Typ:** timeline (Impfkalender 0-24 Mo)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Die **Ständige Impfkommission (STIKO)** am Robert Koch-Institut gibt jährlich aktualisierte Impfempfehlungen heraus. Diese sind zwar keine Pflicht, aber in Deutschland **medizinischer Standard**:

**Grundimmunisierung (0-14 Monate):**
- **Ab 2. Monat**: 6-fach-Impfung (Diphtherie, Tetanus, Pertussis/Keuchhusten, Polio, Haemophilus influenzae Typ B, Hepatitis B) + Pneumokokken + Rotaviren (oral)
- **4. Monat**: 2. Dosis 6-fach + Pneumokokken
- **11. Monat**: 3. Dosis 6-fach + Pneumokokken
- **11-14. Monat**: MMR (Masern, Mumps, Röteln) + Meningokokken C + Varizellen (Windpocken)
- **15. Monat**: 2. MMR + 2. Varizellen

**Auffrischungen**: 5-6 Jahre Tdap+Polio, 9-16 Jahre Tdap+Polio + HPV (humane Papillomaviren) ab 9 Jahren.

**Masern-Impfpflicht (§ 20 IfSG)**: Seit 2020. Kinder in Kita und Schule müssen Masern-Immunität nachweisen, sonst Besuchsverbot. Ziel: Herdenimmunität >95 %.

Pflege: STIKO-Empfehlungen kennen, Eltern sachlich informieren, Impfgespräch führen. (STIKO Empfehlungen; § 20 IfSG)"

**B1 (650 Zeichen):**
"Die **STIKO** ist die Impf-Kommission in Deutschland. Sie gehört zum **RKI** (Robert Koch-Institut). Jedes Jahr macht sie einen neuen Impfkalender.

**Die wichtigsten Termine:**

- **Ab 2. Monat:** **6-fach-Impfung** (gegen 6 Krankheiten: Diphtherie, Tetanus, Keuchhusten, Polio, HiB, Hepatitis B) + Pneumokokken + Rotavirus (oral)
- **4. Monat:** 2. Dosis
- **11. Monat:** 3. Dosis
- **11 bis 14 Monate:** **MMR** (Masern, Mumps, Röteln) + Meningokokken C + Windpocken
- **15 Monate:** 2. MMR + 2. Windpocken

**Später:**
- 5-6 Jahre: Auffrischung
- 9-16 Jahre: Auffrischung + **HPV-Impfung** (ab 9 Jahren)

**Masern-Impfpflicht seit 2020 (§ 20 IfSG)**: Ohne Masern-Impfung darf ein Kind nicht in die Kita oder Schule.

**Für die Pflege**: Kenne den Impfkalender. Berate Eltern sachlich."

- **Erklärungs-Step:** stepType `timeline` (Impfkalender 0-18 J)
- **Glossar-Begriffe:** [STIKO, 6-fach-Impfung, MMR, HPV, Grundimmunisierung, Herdenimmunität]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Mit 2 Monaten ist das Immunsystem noch nicht reif für Impfungen"**
- **Fachbegriff:** Zu-früh-Impfen-Mythos
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — das Immunsystem ist **ab 2 Monaten gut ausgereift** für die meisten Impfantworten. Wartet man länger, sinkt der **Nestschutz** (Antikörper von der Mutter) und das Kind wird anfällig für **Pertussis** (Keuchhusten), die bei Säuglingen tödlich verlaufen kann. Früh impfen schützt Leben."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — das Baby kann ab **2 Monaten** schon gut auf Impfungen reagieren. Später ist gefährlich: Der Schutz von der Mutter (Nestschutz) geht weg. Dann kann zum Beispiel **Keuchhusten** lebensgefährlich für Babys werden. Darum wird früh geimpft."

**D2: "Die STIKO-Empfehlungen sind Pflicht in Deutschland"**
- **Fachbegriff:** Pflicht-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — STIKO-Empfehlungen sind **medizinischer Standard, aber keine Pflicht**. Eltern können selbst entscheiden. **Ausnahme seit 2020**: Die **Masern-Impfung ist Pflicht** (§ 20 IfSG) für Kinder in Kita/Schule und Pflegepersonal. Alle anderen Impfungen bleiben empfohlen, nicht gesetzlich."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die STIKO gibt **Empfehlungen**, keine Pflicht. Eltern dürfen selbst entscheiden. **Ausnahme**: Die **Masern-Impfung ist Pflicht** seit 2020. Das steht in § 20 IfSG. Pflicht gilt für Kita-Kinder, Schulkinder und Pflege-Personal. Alle anderen Impfungen sind Empfehlungen."

**D3: "Die 6-fach-Impfung überfordert das Immunsystem des Babys"**
- **Fachbegriff:** Kombi-Überlastungs-Mythos
- **Feedback (C1, 305 Zeichen):** "Nicht ganz — die Zahl der Antigene in der 6-fach-Impfung ist **gering** im Vergleich zur alltäglichen Belastung (normale Infekte bringen viel mehr Antigene). Moderne Kombinationsimpfstoffe sind besser verträglich als einzelne Impfungen. **Weniger Pieks, weniger Stress, gleicher Schutz**. (STIKO)"
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die Zahl der Impfstoffe in der 6-fach-Impfung ist für das Immunsystem **kein Problem**. Ein normaler Schnupfen hat viel mehr Keime. Die Kombi-Impfung ist besser: **weniger Spritzen, weniger Stress, gleicher Schutz**. So sagt es die STIKO."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Der STIKO-Impfkalender beginnt mit **2 Monaten**: 6-fach-Impfung + Pneumokokken + Rotaviren. Weitere Termine mit 4 und 11 Monaten, MMR mit 11-14 Monaten. **Masern-Impfpflicht seit 2020** (§ 20 IfSG). Alle anderen Impfungen sind Empfehlungen, aber medizinischer Standard."

**B1 (245 Zeichen):** "Sehr gut. Die STIKO sagt: Erste Impfung mit **2 Monaten** (6-fach + Pneumokokken + Rotavirus). Dann mit 4 und 11 Monaten. MMR mit 11-14 Monaten. **Masern ist Pflicht seit 2020** (§ 20 IfSG). Andere Impfungen sind Empfehlungen, aber dringend empfohlen."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was regelt § 20 IfSG seit 2020 bezüglich Impfungen?"
- **Rückseite:** "Masern-Impfpflicht für Kinder in Kita/Schule und für Pflegepersonal. Ohne Nachweis: Besuchs- bzw. Tätigkeitsverbot."
- **Kategorie:** recht

---

## Baustein 10: j1-jugendgesundheits­untersuchung

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-j1
- **bloomLevel:** 3
- **wissensart:** konzept
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-10]

### Stufe 1 — Denkfrage
- **Frage:** "Zwischen der U9 (5 Jahre) und der J1 (12-14 Jahre) liegen rund 7 Jahre. Welche gesundheitlichen Themen kommen in dieser Zeit dazu — für die es dann in der J1 einen eigenen Termin gibt?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (260 Zeichen):** "Die **J1** (Jugend-Gesundheits-Untersuchung) ist zwischen 12 und 14 Jahren: Pubertät, Impfstatus (**HPV**, Tdap), Körperbild, Ernährung, Medienkonsum, Sexualität, psychische Gesundheit. Die J2 (16-17 J) ist optional. (G-BA Kinder-Richtlinie)"

**B1 (240 Zeichen):** "Die **J1** ist eine Untersuchung für Jugendliche. Zwischen 12 und 14 Jahren. Themen: Pubertät, **HPV-Impfung**, Essen, Medien, Sexualität, Gefühle. Die **J2** ist mit 16-17 Jahren und freiwillig. (G-BA Kinder-Richtlinie)"

- **Step-Typ:** text (displayFormat: checklist)

### Stufe 3 — Erklärung

**C1 (700 Zeichen):**
"Nach der U9 (5-6 Jahre) gibt es eine Lücke. Erst mit **12-14 Jahren** folgt die **J1** (Jugend-Gesundheits-Untersuchung). Sie ist in der Kinder-Richtlinie verankert.

**Inhalte:**
- **Körperliche Entwicklung**: Pubertätsstadien nach Tanner, Größe, Gewicht, Wirbelsäule (Skoliose), Blutdruck
- **Impfstatus**: Auffrischung Tdap+Polio, **HPV-Impfung** (ab 9 J empfohlen, Kostenübernahme GKV), Meningokokken
- **Gesundheitsverhalten**: Ernährung, Bewegung, Medien, Alkohol, Nikotin, Drogen
- **Psychische Gesundheit**: Stimmung, Schule, Mobbing, Selbstwert
- **Sexualität**: Ohne Eltern Gespräch möglich (Schweigepflicht des Arztes)

Die **J2** (16-17 Jahre) ist freiwillig und wird nicht von allen Krankenkassen bezahlt. Inhalte: berufliche Eignung, Sexualität, Sucht.

Pflege-Rolle: Jugendliche sind oft zögerlich, über Sexualität oder Sucht zu reden. **Vertraulichkeit** betonen, Schweigepflicht erklären, gesprächsbereit sein. (G-BA Kinder-Richtlinie; STIKO HPV-Empfehlung)"

**B1 (590 Zeichen):**
"Nach der U9 (5-6 Jahre) kommt lange nichts. Erst mit **12-14 Jahren** gibt es die **J1**. Das ist die **Jugend-Gesundheits-Untersuchung**.

**Themen bei J1:**
- **Körper**: Pubertät, Größe, Gewicht, Rücken, Blutdruck
- **Impfungen**: Tetanus-Auffrischung, **HPV-Impfung** (Krebsvorsorge!), Meningokokken
- **Lebensstil**: Essen, Bewegung, Medien, Alkohol, Rauchen, Drogen
- **Gefühle**: Stimmung, Schule, Mobbing, Selbstbewusstsein
- **Sexualität**: Kann ohne Eltern besprochen werden. Der Arzt hat Schweigepflicht.

Die **J2** (16-17 Jahre) ist freiwillig. Nicht jede Krankenkasse bezahlt sie. Themen: Beruf, Sexualität, Sucht.

**Für die Pflege**: Jugendliche sind oft unsicher. Erkläre: **Ich habe Schweigepflicht.** Zeig: Ich bin offen zum Reden."

- **Erklärungs-Step:** stepType `text` (displayFormat: checklist)
- **Glossar-Begriffe:** [J1, J2, HPV, Pubertätsstadien, Tanner, Schweigepflicht]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei der J1 dürfen Eltern das Gespräch zur Sexualität nicht verlassen"**
- **Fachbegriff:** Eltern-Präsenz-Irrtum
- **Feedback (C1, 280 Zeichen):** "Nicht ganz — bei der **J1 darf der/die Jugendliche ein Gespräch ohne Eltern** anbieten. Der Arzt unterliegt auch gegenüber Minderjährigen ab ca. 14 Jahren der **Schweigepflicht**, wenn der Jugendliche einsichtsfähig ist. Das schützt das Vertrauen und ermöglicht offene Themen (Sex, Drogen)."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — bei der **J1** kann das Kind mit dem Arzt **allein reden**. Ohne die Eltern. Der Arzt hat **Schweigepflicht**. Das gilt auch für junge Menschen. So kann der Jugendliche offen über Sex, Drogen oder Gefühle sprechen."

**D2: "Die HPV-Impfung ist nur für Mädchen wichtig"**
- **Fachbegriff:** HPV-Geschlechter-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — die STIKO empfiehlt seit 2018 **HPV für alle Jugendlichen ab 9 Jahren** (Mädchen **und** Jungen). Grund: HPV verursacht nicht nur Gebärmutterhalskrebs, sondern auch **Penis-, Anal-, Mund-Rachenkrebs**. Jungen schützen zudem ihre Partnerinnen (Herdenimmunität). (STIKO)"
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die HPV-Impfung ist **für Mädchen und Jungen**. Das sagt die STIKO seit 2018. Alle ab 9 Jahren. HPV macht nicht nur Gebärmutterhalskrebs. Auch andere Krebsarten: im Mund, am Anus, am Penis. Jungen schützen auch ihre Partnerinnen."

**D3: "Zwischen U9 und J1 gibt es keine wichtigen Gesundheitsthemen"**
- **Fachbegriff:** Lücken-Bagatellisierung
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — gerade in dieser Zeit entwickeln sich **Adipositas, psychische Probleme und Fehlhaltungen**. Die Kinder-Richtlinie enthält deshalb in einigen Bundesländern zusätzliche U10 (7-8 J) und U11 (9-10 J). Nicht alle Krankenkassen zahlen, aber viele bieten diese als Extraleistung an."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — zwischen U9 und J1 entstehen viele Probleme: Übergewicht, psychische Probleme, Rücken. Deshalb gibt es in manchen Bundesländern **U10** (7-8 Jahre) und **U11** (9-10 Jahre). Nicht alle Kassen zahlen das. Manche bieten es als Extra an."

### Richtig-Feedback
**C1 (280 Zeichen):** "Genau. Die J1 (12-14 J) deckt die Pubertät ab: körperliche Entwicklung, HPV- und Tdap-Impfung, Lebensstil (Ernährung, Medien, Sucht), psychische Gesundheit, Sexualität. Wichtig: **Schweigepflicht auch gegenüber Eltern** ermöglicht offene Gespräche. J2 (16-17 J) optional."

**B1 (245 Zeichen):** "Sehr gut. Die J1 ist mit 12-14 Jahren. Themen: Pubertät, HPV-Impfung, Lebensstil, Gefühle, Sexualität. Der Arzt hat **Schweigepflicht**, auch vor den Eltern. So kann der Jugendliche offen reden. Die J2 mit 16-17 Jahren ist freiwillig."

### Verknüpfte Karteikarte
- **Vorderseite:** "Was sind die Hauptthemen der J1 (12-14 Jahre)?"
- **Rückseite:** "Pubertät, Impfstatus (HPV, Tdap), Lebensstil (Ernährung, Medien, Sucht), psychische Gesundheit, Sexualität. Gespräch auch ohne Eltern möglich (Schweigepflicht)."
- **Kategorie:** fakt

---

## Baustein 11: masern-impfpflicht

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-masern-pflicht
- **bloomLevel:** 3
- **wissensart:** recht
- **zeitBudget:** 4 Min
- **quelleFakten:** [F-11]

### Stufe 1 — Denkfrage
- **Frage:** "Seit 2020 gibt es in Deutschland eine **Impfpflicht** gegen eine einzige Krankheit. Warum ausgerechnet **Masern** — und warum gerade in Kitas, Schulen und der Pflege?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (280 Zeichen):** "Seit **1. März 2020** gilt das Masernschutzgesetz (§ 20 Abs. 8 IfSG). Pflicht: Nachweis von Masern-Immunität (2 Impfungen oder Genesung) für Kinder in Kita/Schule, Personal in Gemeinschaftseinrichtungen, Pflegepersonal. Ohne Nachweis: Betretungs-/Tätigkeitsverbot."

**B1 (250 Zeichen):** "Seit dem **1. März 2020** gibt es in Deutschland die **Masern-Impfpflicht** (§ 20 IfSG). Alle Kinder in Kita und Schule brauchen einen Nachweis: 2 Impfungen oder schon gehabt. Auch Pflegepersonal muss das zeigen. Ohne Nachweis: kein Zugang zur Arbeit."

- **Step-Typ:** text (displayFormat: news)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Das **Masernschutzgesetz** wurde am 14. November 2019 beschlossen und trat am **1. März 2020** in Kraft. Grundlage: § 20 Abs. 8 Infektionsschutzgesetz.

**Wer ist betroffen?**
- Alle Kinder ab 1 Jahr in Kitas, Kindergärten, Schulen, Tagespflege
- Personal in diesen Einrichtungen (Erzieher, Lehrer, Küchenkräfte)
- Personal in medizinischen Einrichtungen mit Kontakt zu Immungeschwächten (Krankenhaus, Pflegeheim, Arztpraxis)
- Asylbewerber und Flüchtlinge in Gemeinschaftsunterkünften

**Nachweis:** 2 dokumentierte MMR-Impfungen, Titer-Nachweis der Immunität, medizinische Kontraindikation **oder** überstandene Masernerkrankung (Arztbestätigung).

**Durchsetzung:** Gesundheitsamt prüft. Bei Nicht-Einhaltung: Betretungsverbot in der Einrichtung, Tätigkeitsverbot für Personal, Bußgeld bis 2.500 €.

**Warum Masern?** Hochansteckend (R0 = 12-18, einer der höchsten Werte), schwere Komplikationen (SSPE-Enzephalitis), Herdenimmunität erst bei 95 %. Deutschland lag 2018/2019 bei 93 %. (§ 20 IfSG; RKI)"

**B1 (640 Zeichen):**
"Das **Masernschutzgesetz** gilt seit dem **1. März 2020**. Es steht in § 20 des **Infektionsschutzgesetzes (IfSG)**.

**Wer muss den Nachweis zeigen?**
- Alle Kinder ab 1 Jahr in Kita, Kindergarten, Schule
- Das Personal dort (Erzieher, Lehrer, Küche)
- Personal im Krankenhaus, Pflegeheim, Arztpraxis
- Flüchtlinge in Sammelunterkünften

**Was gilt als Nachweis?**
- **2 Impfungen** gegen Masern
- **Blut-Test** (Titer zeigt Immunität)
- **Arzt-Attest** (Kind darf aus medizinischen Gründen nicht geimpft werden)
- **Bestätigung**, dass Masern schon überstanden wurden

**Durchsetzung:** Das **Gesundheitsamt** kontrolliert. Bei fehlendem Nachweis: Die Person darf die Einrichtung **nicht betreten**. Personal darf **nicht arbeiten**. Bußgeld bis 2.500 €.

**Warum Masern?** Masern sind **sehr ansteckend**. Können schwere Komplikationen machen (auch tödlich). Nur bei 95 % Impfquote sind alle geschützt."

- **Erklärungs-Step:** stepType `text` (displayFormat: news)
- **Glossar-Begriffe:** [Masernschutzgesetz, Titer, Herdenimmunität, Kontraindikation, Gesundheitsamt]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Die Masern-Impfpflicht gilt für alle Deutschen ab 18 Jahren"**
- **Fachbegriff:** Allgemeinpflicht-Fehler
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — die Masern-Impfpflicht gilt **nicht für die gesamte Bevölkerung**, sondern für **spezifische Gruppen**: Kinder in Kita/Schule, deren Personal, Personal in Kliniken/Pflegeheimen/Arztpraxen mit Kontakt zu Immungeschwächten, Bewohner/Personal in Asylunterkünften. (§ 20 IfSG)"
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — die Masern-Pflicht ist **nicht für alle** in Deutschland. Sie gilt nur für: Kinder in Kita und Schule, Personal dort, Pflegepersonal, Klinikpersonal, Arztpraxis-Personal. Und für Menschen in Asyl-Unterkünften. (§ 20 IfSG)"

**D2: "Ein positiver Antikörper-Titer reicht nicht als Nachweis"**
- **Fachbegriff:** Titer-Ablehnungs-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — ein **positiver IgG-Titer** gegen Masern gilt offiziell als Nachweis einer Immunität (§ 20 Abs. 9 IfSG). Wer zum Beispiel als Kind Masern hatte, muss sich nicht mehr impfen lassen. Auch wer unsicher über frühere Impfungen ist, kann einen Titer-Test machen lassen."
- **Feedback (B1, 245 Zeichen):** "Nicht ganz — ein **positiver Blut-Test** (Titer) gilt als Nachweis. Wer als Kind Masern hatte, ist immun. Wer nicht weiß, ob er geimpft ist, kann den Titer testen lassen. Wenn der Titer hoch ist, braucht die Person keine Impfung."

**D3: "Bei fehlendem Nachweis gibt es nur ein Gespräch, keine konkreten Folgen"**
- **Fachbegriff:** Folgenlosigkeits-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — die Folgen sind **konkret**: **Betretungsverbot** für das Kind in Kita/Schule, **Tätigkeitsverbot** für Personal, **Bußgeld bis 2.500 Euro** für Eltern oder Arbeitgeber. Das Gesundheitsamt kontrolliert aktiv. Unterlassener Nachweis ist eine Ordnungswidrigkeit. (§ 20 IfSG)"
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — die Folgen sind **deutlich**: Kind darf **nicht in die Kita**. Personal darf **nicht arbeiten**. **Bußgeld bis 2.500 Euro** für Eltern oder Arbeitgeber. Das Gesundheitsamt kontrolliert. Kein Nachweis = echte rechtliche Konsequenzen."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Seit 1. März 2020 gilt § 20 IfSG: Nachweis der Masern-Immunität für Kinder in Kita/Schule, deren Personal und Pflegekräfte. 2 Impfungen, Titer, Genesung oder Kontraindikation. Folgen bei Verstoß: Betretungs-/Tätigkeitsverbot, Bußgeld bis 2.500 €. Herdenimmunität-Ziel 95 %."

**B1 (250 Zeichen):** "Sehr gut. Seit 1. März 2020 gilt die Masern-Impfpflicht (§ 20 IfSG). Sie betrifft Kinder in Kita/Schule, das Personal dort und Pflegekräfte. Nachweis: 2 Impfungen, Blut-Test oder Masern gehabt. Bei Verstoß: Betretungsverbot und Bußgeld bis 2.500 €."

### Verknüpfte Karteikarte
- **Vorderseite:** "Seit wann gilt die Masern-Impfpflicht in Deutschland und für wen?"
- **Rückseite:** "Seit 1. März 2020 (§ 20 IfSG). Für Kinder in Kita/Schule, deren Personal, Pflege- und Klinikpersonal mit Kontakt zu Immungeschwächten."
- **Kategorie:** recht

---

## Baustein 12: impfgespraech-fuehren

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-impfgespraech
- **bloomLevel:** 5
- **wissensart:** handlung
- **zeitBudget:** 6 Min
- **quelleFakten:** [F-12]

### Stufe 1 — Denkfrage
- **Frage:** "Eine Mutter sagt: 'Impfungen schädigen das Immunsystem meines Kindes, das will ich nicht.' Was ist deine erste Reaktion — und was sollte sie NICHT sein?"
- **Step-Typ:** freetext (Bloom 5)

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Das Impfgespräch folgt motivierender Gesprächsführung: **zuhören statt belehren**, Sorgen ernst nehmen, sachlich informieren (STIKO-Quelle nennen), **keine Überredung**. Autonomie achten. Eltern sollen entscheiden — deine Aufgabe ist Information, nicht Überzeugen."

**B1 (240 Zeichen):** "Beim Impfgespräch: **Zuhören, nicht überzeugen**. Nimm die Sorgen der Eltern ernst. Erkläre sachlich. Sage, woher du die Info hast (STIKO). Übe keinen Druck aus. Die Eltern entscheiden selbst. Deine Aufgabe: gute Infos geben, nicht überreden."

- **Step-Typ:** dialog (Impfgespräch Beispiel)

### Stufe 3 — Erklärung

**C1 (770 Zeichen):**
"Impfgespräche gelingen mit vier Prinzipien:

**1. Aktiv zuhören**: Welche konkrete Sorge steht hinter der Ablehnung? Autismus-Mythos? Immunsystem-Angst? Schlechte Erfahrung? **Erst fragen, dann antworten**. ('Was genau macht dir Sorgen?')

**2. Sachlich informieren**: Fakten mit Quellen nennen (STIKO, RKI). Keine Polemik, keine Herabsetzung anderer Meinungen. Mythen sanft korrigieren, nicht lächerlich machen.

**3. Autonomie respektieren**: Eltern haben das Entscheidungsrecht (Ausnahme: Masern-Pflicht). Kein Drohen, kein Drucktheater. Motivierende Gesprächsführung: 'Was müsste passieren, damit Sie eine Impfung in Erwägung ziehen?'

**4. Dokumentieren**: Gespräch, Argumente, Entscheidung dokumentieren — auch eine Impfablehnung.

**Häufige Sorgen und Fakten:**
- 'Impfungen lösen Autismus aus' — widerlegt (Wakefield-Studie 1998 war Fälschung)
- 'Mein Kind ist zu klein' — gerade das Alter braucht Schutz (Pertussis, HiB)
- 'Zu viele auf einmal' — Immunsystem bewältigt tausende Antigene täglich

Wichtig: **Beziehungsebene erhalten**. Eine heute überzeugte Familie ist verloren, wenn ihr das Gefühl gegeben wird, nicht ernst genommen zu werden. (STIKO Handbuch; WHO)"

**B1 (670 Zeichen):**
"Ein gutes Impfgespräch hat **4 Regeln**:

**1. Zuhören**: Frag nach! 'Was macht dir Sorgen?' Die Sorge muss ernst genommen werden. Erst zuhören, dann antworten.

**2. Sachlich informieren**: Nenn Fakten und die Quelle (STIKO, RKI). Mache dich nicht lustig. Korrigiere sanft.

**3. Autonomie achten**: Die Eltern entscheiden. Außer bei Masern (Pflicht). Kein Druck. Kein Drohen. Nutze motivierende Fragen: 'Was müsste passieren, damit Sie anders denken?'

**4. Dokumentieren**: Schreibe auf, was besprochen wurde. Auch wenn die Eltern Nein sagen.

**Oft gehörte Sorgen und was wahr ist:**
- 'Impfungen machen Autismus.' → Das ist **falsch**. Die Studie von 1998 war eine **Fälschung**.
- 'Mein Kind ist zu klein.' → Gerade kleine Kinder brauchen Schutz (Keuchhusten!).
- 'Zu viele Impfungen gleichzeitig.' → Das Immunsystem kann das gut. Jeden Tag kommen tausende Keime.

**Wichtig**: Die Beziehung zur Familie ist wichtig. Wenn Eltern sich nicht ernst genommen fühlen, sind sie weg. Heute Nein kann morgen Ja werden."

- **Erklärungs-Step:** stepType `dialog` (Impfgespräch mit Mutter)
- **Glossar-Begriffe:** [motivierende Gesprächsführung, Impfaufklärung, Autismus-Mythos, Wakefield-Studie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Bei Impfgegnern muss man klar und hart die Wahrheit sagen, sonst ändern sie nichts"**
- **Fachbegriff:** Konfrontations-Irrtum
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — **Konfrontation festigt die Ablehnung** (Backfire-Effekt). Studien zeigen: Wer belehrt wird, fühlt sich angegriffen und verharrt in der Position. Besser: motivierende Gesprächsführung, Sorgen ernst nehmen, sachlich informieren, Autonomie achten. Harte Ansagen wirken selten."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **harte Ansagen wirken meistens nicht**. Wer sich angegriffen fühlt, sagt erst recht Nein. Das heißt **Backfire-Effekt**. Besser: Zuhören, Sorgen ernst nehmen, ruhig erklären. Die Eltern entscheiden selbst. Druck macht es schlimmer."

**D2: "Wenn Eltern sich trotz Aufklärung gegen Impfung entscheiden, muss ich das nicht dokumentieren"**
- **Fachbegriff:** Dokumentations-Lücke
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — die **Aufklärung und die Ablehnung müssen schriftlich dokumentiert** werden: Inhalt des Gesprächs, wichtige Fakten, Entscheidung der Eltern. Rechtlich wichtig (Haftung bei Erkrankung) und pflegerisch (nächste Fachkraft sieht Stand). Eine Impfablehnung ist kein 'Vergessen-Thema'."
- **Feedback (B1, 265 Zeichen):** "Nicht ganz — **Ablehnung muss schriftlich dokumentiert** werden. Was wurde besprochen? Welche Fakten? Wie haben die Eltern entschieden? Das ist wichtig: rechtlich und für die nächste Kollegin. Eine Impfablehnung ist kein Thema, das man 'vergisst'."

**D3: "Pflegekräfte dürfen keine Impfaufklärung machen — das ist Ärztesache"**
- **Fachbegriff:** Rollen-Verengung
- **Feedback (C1, 295 Zeichen):** "Nicht ganz — Pflegekräfte dürfen und sollen **impfaufklärend beraten**. Die **ärztliche Impfaufklärung** (rechtliche Einwilligung, § 630e BGB) ist Ärztesache. Pflegerische Gesundheitsberatung zum Impfschutz, zu STIKO-Empfehlungen und zur Beantwortung von Fragen ist ausdrücklich Pflegeaufgabe (PflBG § 5)."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — Pflegekräfte **dürfen über Impfungen beraten**. Die **formelle Einwilligung** muss der Arzt machen (§ 630e BGB). Aber Fragen beantworten, Infos geben, Sorgen aufnehmen: das ist **Pflegeaufgabe** (§ 5 PflBG). Die Eltern haben oft mehr Vertrauen zu Pflegepersonen."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. Das Impfgespräch folgt motivierender Gesprächsführung: **aktiv zuhören**, Sorgen ernst nehmen, **sachlich informieren** mit Quellen (STIKO), **Autonomie achten**, Ergebnis **dokumentieren**. Konfrontation macht die Ablehnung stärker (Backfire-Effekt). Beziehung ist wichtiger als 'Recht haben'."

**B1 (255 Zeichen):** "Sehr gut. Gutes Impfgespräch: **zuhören, nicht überzeugen**. Sorgen ernst nehmen. Sachlich mit Quellen informieren (STIKO). Autonomie achten. Dokumentieren. Druck und Konfrontation machen Ablehnung stärker. Beziehung ist wichtiger als sofortiger Erfolg."

### Verknüpfte Karteikarte
- **Vorderseite:** "Welche 4 Prinzipien gelten im Impfgespräch?"
- **Rückseite:** "1. Aktiv zuhören, 2. Sachlich informieren (Quellen!), 3. Autonomie achten (keine Überredung), 4. Dokumentieren. Konfrontation vermeiden (Backfire-Effekt)."
- **Kategorie:** handlung

---

## Baustein 13: herdenimmunitaet

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-herdenimmunitaet
- **bloomLevel:** 4
- **wissensart:** konzept
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-13]

### Stufe 1 — Denkfrage
- **Frage:** "Warum schützt es auch **ungeimpfte Menschen**, wenn genügend andere geimpft sind? Und warum ist das bei Masern besonders wichtig?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "**Herdenimmunität** heißt: Ist ein ausreichender Anteil der Bevölkerung immun, bricht die Infektionskette ab — auch Nicht-Geimpfte sind geschützt. Notwendige Quote hängt von Ansteckungsfähigkeit (R0) ab. Bei Masern: **95 %**. Bei Grippe: ca. 60 %. (RKI)"

**B1 (240 Zeichen):** "**Herdenimmunität** heißt: Wenn genug Menschen geimpft sind, kann sich eine Krankheit nicht mehr ausbreiten. Dann sind auch die geschützt, die **nicht geimpft sind**. Bei Masern braucht es **95 %**. Grippe: ca. 60 %. (RKI)"

- **Step-Typ:** diagram (Herdenimmunität-Grafik)

### Stufe 3 — Erklärung

**C1 (720 Zeichen):**
"**Herdenimmunität (Gemeinschaftsschutz)** ist das Prinzip, nach dem ein hoher Anteil Immuner in einer Bevölkerung indirekt auch Nicht-Immune schützt. Das Virus findet nicht genug 'Wirte' und erlischt.

**Berechnung:** Die Schwelle hängt von der **Basisreproduktionszahl R0** ab (wie viele Menschen ein Infizierter anstecken würde):

| Krankheit | R0 | Herdenimmunitäts-Schwelle |
|-----------|----|--------------------------|
| Masern | 12-18 | ≥ 95 % |
| Röteln | 5-7 | ≥ 85 % |
| Mumps | 4-7 | ≥ 80 % |
| Pertussis | 12-17 | ≥ 92 % |
| Influenza | 1,5-2 | ≥ 60 % |

**Warum Masern kritisch?** Mit R0 = 12-18 sind Masern **eines der ansteckendsten Viren überhaupt**. Schon kleine Impflücken führen zu Ausbrüchen. Deutschland lag 2018 bei 93 % MMR-Quote — zu wenig für Herdenimmunität. Daraus resultierte die Masern-Impfpflicht 2020.

**Besonders geschützt werden:** Säuglinge unter 11 Monaten (noch nicht impfbar), Immungeschwächte (Krebs, HIV, Chemo), Schwangere. Diese Gruppen sind auf die Herdenimmunität **angewiesen**. (RKI)"

**B1 (620 Zeichen):**
"**Herdenimmunität** heißt Gemeinschaftsschutz. Wenn genug Menschen immun sind, kann sich eine Krankheit **nicht mehr ausbreiten**. Der Virus findet niemanden, den er anstecken kann. Er verschwindet.

**Wie viele müssen immun sein?** Das hängt von der Krankheit ab. Je ansteckender, desto mehr müssen geimpft sein:

- **Masern**: ≥ 95 % (sehr ansteckend, R0 = 12-18)
- **Röteln**: ≥ 85 %
- **Keuchhusten**: ≥ 92 %
- **Grippe**: ≥ 60 %

**Warum ist Masern so kritisch?** Masern sind **extrem ansteckend**. Ein kranker Mensch steckt 12 bis 18 andere an. Schon kleine Impflücken machen große Ausbrüche. Deutschland hatte 2018 nur 93 %. Das war zu wenig. Deshalb kam 2020 die **Masern-Pflicht**.

**Besonders wichtig für**: Babys unter 11 Monaten (können nicht geimpft werden), Menschen mit Krebs, mit HIV, in Chemotherapie, Schwangere. Diese Menschen brauchen die Herdenimmunität."

- **Erklärungs-Step:** stepType `diagram` (Herdenimmunität + R0-Tabelle)
- **Glossar-Begriffe:** [Herdenimmunität, R0, Basisreproduktionszahl, Immungeschwächte]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Herdenimmunität entsteht durch natürliche Durchseuchung schneller als durch Impfungen"**
- **Fachbegriff:** Durchseuchungs-Irrtum
- **Feedback (C1, 300 Zeichen):** "Nicht ganz — **Durchseuchung** kostet Menschenleben. Um eine Masern-Herdenimmunität natürlich zu erreichen, müssten ~95 % der Bevölkerung Masern durchmachen — mit **vielen Komplikationen** (Enzephalitis, SSPE, Tod). Impfungen erreichen dieselbe Immunität **ohne Krankheit**. Ethisch und medizinisch klar."
- **Feedback (B1, 260 Zeichen):** "Nicht ganz — **natürlich durchmachen** kostet Leben. Um bei Masern auf 95 % Immunität zu kommen, müssten 95 % erkranken — **mit vielen Toten und Komplikationen**. Die Impfung macht Immunität **ohne Krankheit**. Das ist sicherer und ethisch besser."

**D2: "Wenn mein Kind geimpft ist, müssen sich andere nicht impfen lassen — es ist ja geschützt"**
- **Fachbegriff:** Einzelner-Schutz-Fehler
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — **Einzelschutz reicht nicht**. Geimpfte können vereinzelt Impfversagen haben (ca. 2-5 % bei Masern). Nur **Herdenimmunität** schützt Säuglinge < 11 Monaten (nicht impfbar) und Immungeschwächte. Jedes ungeimpfte Kind erhöht das Risiko für diese verletzlichen Gruppen. **Solidarität**."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — **Einzelschutz reicht nicht**. Auch Geimpfte können selten erkranken (Impfversagen). Nur **Herdenimmunität** schützt Babys unter 11 Monaten (zu jung für Impfung) und Menschen mit schwachem Immunsystem. Ungeimpfte erhöhen das Risiko für diese Menschen."

**D3: "Herdenimmunitäts-Schwelle ist bei allen Krankheiten gleich hoch"**
- **Fachbegriff:** Schwellen-Vereinheitlichung
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die Schwelle hängt von der **Basisreproduktionszahl R0** ab. Masern (R0 = 12-18) brauchen ≥95 %, Röteln (R0 = 5-7) nur ≥85 %, Grippe (R0 = 1,5-2) nur ≥60 %. Je ansteckender die Krankheit, desto höher muss die Impfquote sein. Ein pauschaler Wert gibt es nicht."
- **Feedback (B1, 250 Zeichen):** "Nicht ganz — die Schwelle ist **nicht gleich** für alle Krankheiten. Sie hängt davon ab, wie ansteckend die Krankheit ist. Masern: 95 %. Röteln: 85 %. Grippe: 60 %. Je ansteckender, desto mehr Menschen müssen geimpft sein."

### Richtig-Feedback
**C1 (285 Zeichen):** "Genau. Herdenimmunität = Gemeinschaftsschutz. Die Schwelle hängt von R0 ab. Masern (R0=12-18) brauchen ≥95 %, deshalb die Impfpflicht 2020. Schützt besonders Säuglinge <11 Mo, Immungeschwächte, Schwangere. Durchseuchung ist keine Alternative — kostet Leben. (RKI)"

**B1 (245 Zeichen):** "Sehr gut. Herdenimmunität schützt auch Menschen, die nicht geimpft werden können. Je ansteckender die Krankheit, desto höher die Schwelle. Masern: 95 %. Deshalb kam die Impfpflicht. Schützt besonders Babys und Menschen mit schwachem Immunsystem."

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie hoch muss die Impfquote bei Masern für Herdenimmunität sein?"
- **Rückseite:** "≥ 95 % der Bevölkerung muss immun sein, weil Masern sehr ansteckend sind (R0 = 12-18). (RKI)"
- **Kategorie:** fakt

---

## Baustein 14: stillen-who

### Metadaten
- **bausteinId:** gesundheitsfoerderung-kinder-stillen
- **bloomLevel:** 3
- **wissensart:** handlung
- **zeitBudget:** 5 Min
- **quelleFakten:** [F-14]

### Stufe 1 — Denkfrage
- **Frage:** "Warum empfiehlt die WHO ausgerechnet **6 Monate ausschließliches Stillen** — und nicht 4 Monate, nicht 12 Monate? Und was heißt 'ausschließlich'?"
- **Step-Typ:** freetext

### Stufe 2 — Hinweis

**C1 (270 Zeichen):** "Die **WHO empfiehlt 6 Monate ausschließliches Stillen**, danach Beikost bei fortgesetztem Stillen bis mindestens 2 Jahre. 'Ausschließlich' heißt: nur Muttermilch, **keine Beikost, kein Wasser, kein Tee**. Vorteile: Infektionsschutz, Bindung, Allergieprävention. (WHO, 2023)"

**B1 (245 Zeichen):** "Die **WHO** empfiehlt **6 Monate ausschließliches Stillen**. Das heißt: nur Muttermilch, **nichts anderes** — auch kein Wasser, kein Tee. Danach Beikost mit weiter Stillen bis mindestens 2 Jahre. Vorteile: Schutz vor Infektionen, Bindung, weniger Allergien. (WHO, 2023)"

- **Step-Typ:** text (displayFormat: scenario)

### Stufe 3 — Erklärung

**C1 (760 Zeichen):**
"Die Empfehlungen zum Stillen der **WHO (2023)** und der **Nationalen Stillkommission** sind klar:

**6 Monate ausschließliches Stillen (exclusive breastfeeding)**:
- Nur Muttermilch — **keine** Beikost, **kein** Tee, **kein** Wasser, **kein** Saft
- Ausnahme: Vitamin D + Vitamin K-Prophylaxe, Medikamente
- Danach: Beikost-Einführung ab dem 5.-7. Monat, parallel weiter stillen

**Weiter stillen bis mindestens 2 Jahre** — so lange Mutter und Kind möchten.

**Vorteile für das Kind:**
- **Infektionsschutz** durch mütterliche Antikörper (IgA) gegen Durchfall, Atemwegsinfekte, Mittelohrentzündung
- **Allergieprävention** (v.a. wenn familiäre Atopie vorhanden)
- **Geringeres SIDS-Risiko** (plötzlicher Kindstod)
- **Niedrigeres Risiko für Adipositas**, Diabetes Typ 2, Blutdruckerhöhung im späteren Leben
- **Bindungsförderung** durch Nähe, Hautkontakt, Oxytocin-Ausschüttung

**Vorteile für die Mutter:**
- Schnellere Gebärmutter-Rückbildung
- Reduziertes Risiko für Brustkrebs und Eierstockkrebs
- Natürliche Empfängnisverhütung (LAM-Methode, eingeschränkt)

**Grenzen/Kontraindikationen:** HIV-Infektion (individuell), bestimmte Medikamente, schwere Drogenabhängigkeit. (WHO, 2023; Nationale Stillkommission)"

**B1 (660 Zeichen):**
"Die **WHO sagt (2023)**: **6 Monate nur Muttermilch**. Nichts anderes. Auch kein Wasser, Tee oder Saft. Nur Vitamin D und Vitamin K darf das Baby bekommen.

**Nach 6 Monaten:** Beikost starten. Aber **weiter stillen** — bis das Kind mindestens 2 Jahre alt ist. So lange Mutter und Kind wollen.

**Warum ist Stillen so gut?**

Für das **Baby**:
- Schutz vor Krankheiten (Antikörper der Mutter)
- Weniger Durchfall, Lungenentzündung, Mittelohrentzündung
- Weniger Allergien
- Weniger plötzlicher Kindstod (**SIDS**)
- Später weniger Übergewicht, Diabetes, Bluthochdruck
- **Bindung** durch Nähe und Hautkontakt

Für die **Mutter**:
- Die Gebärmutter wird schneller klein
- Weniger Brustkrebs und Eierstockkrebs
- Stillt wie eine Verhütung (aber nicht sicher!)

**Grenzen**: HIV (individuell prüfen), manche Medikamente, Drogen. Dann lieber nicht stillen."

- **Erklärungs-Step:** stepType `text` (displayFormat: procontra)
- **Glossar-Begriffe:** [ausschließliches Stillen, Beikost, Kolostrum, LAM-Methode, Atopie]
- **TTS-relevant:** ja

### Misconceptions → Distraktoren

**D1: "Nach 4 Monaten sollte man Beikost geben, sonst lernt das Kind es nie"**
- **Fachbegriff:** Beikost-Frühstart-Irrtum
- **Feedback (C1, 290 Zeichen):** "Nicht ganz — die WHO empfiehlt Beikost **ab dem 5. bis 7. Monat** (nicht vor 4 Monaten). Der Darm ist vorher nicht reif, Allergierisiko steigt. Der optimale Zeitpunkt richtet sich nach **Reifezeichen** des Kindes (sitzen, greifen, Interesse) — meist zwischen 5 und 7 Monaten. (WHO)"
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — Beikost sollte zwischen **5 und 7 Monaten** starten. Nicht vor 4 Monaten. Der Darm ist vorher nicht fertig. Zu früh Beikost macht mehr Allergien. Richte dich nach dem Baby: Kann es sitzen? Greift es nach Essen? Dann ist es bereit."

**D2: "Stillen macht das Kind anhänglich und verzögert die Selbstständigkeit"**
- **Fachbegriff:** Anhänglichkeits-Mythos
- **Feedback (C1, 285 Zeichen):** "Nicht ganz — Studien zeigen das **Gegenteil**: Lange gestillte Kinder sind **emotional stabiler** und oft **selbstständiger**, weil sie eine sichere Bindung haben (siehe Bowlby, Ainsworth). 'Anhänglich durch Stillen' ist ein Mythos. Die Bindung stärkt das Kind — sie behindert es nicht."
- **Feedback (B1, 255 Zeichen):** "Nicht ganz — das ist ein Mythos. Lang gestillte Kinder sind oft **selbstständiger** und stabiler. Sie haben eine sichere Bindung (Bowlby). Das hilft ihnen im Leben. Stillen bremst **nicht** die Entwicklung — es unterstützt sie."

**D3: "Frauen mit kleinen Brüsten haben oft zu wenig Milch"**
- **Fachbegriff:** Brustgröße-Milchmenge-Fehler
- **Feedback (C1, 275 Zeichen):** "Nicht ganz — die **Brustgröße hat nichts mit Milchmenge** zu tun. Die Milchmenge hängt vom **Saug-Reiz** ab (Prolaktin-Ausschüttung). Eine 'kleine' Brust kann genauso viel oder mehr Milch produzieren. Häufiges Anlegen, Ruhe, gute Position sind entscheidend, nicht die Größe."
- **Feedback (B1, 240 Zeichen):** "Nicht ganz — **Brustgröße ist nicht wichtig** für die Milchmenge. Die Milch kommt durch das Saugen. Das macht das Hormon **Prolaktin**. Eine kleine Brust kann genug Milch machen. Wichtig: oft anlegen, ruhig sein, gute Position finden."

### Richtig-Feedback
**C1 (290 Zeichen):** "Genau. WHO empfiehlt 6 Monate ausschließliches Stillen (nur Muttermilch, keine Beikost/Wasser/Tee), danach Beikost-Einführung bei fortgesetztem Stillen bis mindestens 2 Jahre. Vorteile: Infektionsschutz (IgA), Allergieprävention, SIDS-Reduktion, Bindung. (WHO, 2023)"

**B1 (250 Zeichen):** "Sehr gut. WHO empfiehlt **6 Monate nur Muttermilch**. Nichts anderes — kein Tee, kein Wasser. Danach Beikost und **weiter stillen** bis mindestens 2 Jahre. Vorteile: Schutz vor Infekten, weniger Allergien, weniger SIDS, Bindung. (WHO, 2023)"

### Verknüpfte Karteikarte
- **Vorderseite:** "Wie lange empfiehlt die WHO ausschließliches Stillen und was bedeutet 'ausschließlich'?"
- **Rückseite:** "6 Monate. 'Ausschließlich' = nur Muttermilch, keine Beikost/Wasser/Tee. Danach Beikost bei fortgesetztem Stillen bis mind. 2 Jahre. (WHO, 2023)"
- **Kategorie:** fakt

---



