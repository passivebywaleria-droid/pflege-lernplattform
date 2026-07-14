# Kernfakten — Akutes Abdomen, Stoma & Drainagen (CE-06)

> Thema-Slug: `abdomen-stoma-drainagen` · CE-06 · Cluster B (LE3)
> Deckt: CE06-LE3-W1 (Ursachen/Symptome/Differentialdiagnostik akutes Abdomen),
> W2 (Ileo- vs. Kolostoma + Versorgungsanforderungen), W3 (Wirkungsweisen Drainagesysteme),
> W4 (Mobilisation mit Sonden/Drainagen · viszeraler/Kolik-/abdominaler Schmerz · Infektionsprophylaxe
> Dauerkatheter · postop Überwachung Gasaustausch/Obstipation/Urinausscheidung), K1 (postop Stoma-Versorgung),
> K2 (postop Verbandwechsel bei Drainagen), E1 (Bedeutung von Information/Wissen für akuterkrankte Menschen).
>
> **Grounding-Regel:** Verbatim-Belege aus `recherche/*-volltext/`.
> Prüfbar: `npx tsx scripts/zitat-verifizierer.ts --check-file specs/ce-06/kernfakten/abdomen-stoma-drainagen.md`.
> Primärquellen: Paetz Chirurgie (23. Aufl.) Kap. 7.5 (Drainagen), 12.5/12.6 (intraabdominelle Blutung,
> akutes Abdomen), 9.2.4/9.5 (Frühmobilisierung, Pneumonie-/Harnverhalt), 23.8/23.9 (Stoma);
> I care Krankheitslehre Kap. 7.1 (Schmerzarten); EAUN Catheterisation Guideline 2024 (Dauerkatheter).
>
> **Kritische Leitplanken (bewusst so gebaut):**
> - Akutes Abdomen: sofortiges ärztliches Handeln, Patient bleibt **nüchtern** (mögliche OP/Endoskopie). Keine
>   erfundenen Medikamenten-Dosen. Analgesie/Diagnostik ärztlich.
> - Drainagen **in der Bauchhöhle ohne Sog** (Darmschädigung durch Sog) — Redon (unkontrollierter Sog) liegt im
>   Weichteil/Unterhautfettgewebe, NICHT als Bauchhöhlendrainage mit Sog behaupten.
> - **>200 ml Blutverlust aus Drainagen in der 1. Stunde postop = sofort Arzt** (Nachblutungszeichen, F-06).
> - Stoma-Durchblutung beurteilen ist Pflege; die Beurteilung einer Nekrose/Komplikation ist **ärztliche** Aufgabe.
> - Einführen eines Einmalkatheters ins Stoma ist **ärztlich** (delegierbar an Stomatherapeutin/angeleitete Fachkraft).

---

### F-01: Akutes Abdomen — Sammelbegriff, sofortiges Handeln, meist chirurgisch
Das „akute Abdomen" („akuter Bauch") ist ein Sammelbegriff für verschiedene, akut bedrohliche Krankheitsbilder in der Bauchhöhle, die meist mit Schmerzen einhergehen. Es erfordert sofortiges diagnostisches und therapeutisches Handeln; meist ist eine chirurgische Behandlung erforderlich.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "verschiedene Krankheitsbilder, die eine akut"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "meist mit Schmerzen einhergehende Situation in der Bauchhöhle"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "erfordert sofortiges"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Meist ist eine chirurgische Behandlung erforderlich"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 12.6)

### F-02: Akutes Abdomen — Leitsymptome (Bauchschmerz, „harter Bauch", Erbrechen, Kreislauf)
Das akute Abdomen ist charakterisiert durch Bauchschmerzen (Dauerschmerz, krampfartiger Schmerz oder Kolik), eine Abwehrspannung der Bauchmuskeln („harter Bauch"), Erbrechen oder Brechreiz sowie Kreislaufsymptome (evtl. Schock). Besonders Charakter und Lokalisation des Bauchschmerzes geben Hinweise auf die ursächliche Krankheit.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Bauchschmerzen (Dauerschmerz, krampfartiger"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Abwehrspannung der Bauchmuskeln"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Kreislaufsymptome (evtl. Schock)"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 12.6)

### F-03: Akutes Abdomen — Ursachen + Differentialdiagnostik (auch „nichtchirurgische" Ursachen)
Wichtige Ursachen sind Entzündungen (z. B. Appendizitis, Cholezystitis, Pankreatitis), Perforationen von Hohlorganen (z. B. Magenperforation, Sigmaperforation bei Divertikulitis), Zirkulationsstörungen (z. B. inkarzerierte Hernie, Ileus), Steineinklemmung (Nieren-/Gallenkolik) und Blutungen. Differentialdiagnostisch wichtig: Auch „nichtchirurgische" Prozesse außerhalb der Bauchhöhle können ein akutes Abdomen vortäuschen (z. B. Herzinfarkt, basale Pneumonie, entgleister Diabetes mellitus).

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Entzündung von Organen in der Bauchhöhle"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Perforation von Hohlorganen"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Sigmaperforation bei Divertikulitis"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Zirkulationsstörung"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Prozesse außerhalb der Bauchhöhle können die Symptomatik eines akuten Abdomens"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Herzinfarkt, basale Pneumonie, entgleister Diabetes mellitus"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 12.6)

### F-04: Akutes Abdomen — jeder Patient bleibt nüchtern (bis Klärung des Vorgehens)
Bis zur Klärung des therapeutischen Vorgehens bleibt jeder Patient mit akutem Abdomen nüchtern (Vorbereitung auf eine mögliche Operation/Endoskopie).

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "bleibt jeder Patient mit akutem Abdomen nüchtern"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 12.6)

### F-05: Schmerzarten — viszeraler, somatischer, Kolikschmerz
Nach der Entstehungsursache unterscheidet man den somatischen, den viszeralen und den neurogenen Schmerz. Der viszerale Schmerz beruht auf der Reizung von Nozizeptoren innerer Organe und ist oft schwer zu lokalisieren. Eine typische viszerale Ausprägung ist der Kolikschmerz: krampfartig, heftig, mit vegetativen Symptomen wie Übelkeit und Schweißausbrüchen (z. B. Nierenkolik, Gallenkolik).

**Beleg:**
- Quelle: `icare-krankheitslehre-volltext/icare-krankheitslehre.txt`
- Zitat: "den somatischen, den viszeralen"
- Quelle: `icare-krankheitslehre-volltext/icare-krankheitslehre.txt`
- Zitat: "Er beruht auf der Reizung von Nozizeptoren innerer Organe und ist oft schwer zu lokalisieren"
- Quelle: `icare-krankheitslehre-volltext/icare-krankheitslehre.txt`
- Zitat: "krampfartig, heftig, mit vegetativen Symptomen wie Übelkeit und Schweißausbrüchen"
- Primärquelle: (I care Krankheitslehre, Kap. 7.1)

### F-06: Intraabdominelle Nachblutung — >200 ml aus Drainagen in der 1. Stunde → sofort Arzt
Die häufigste Ursache einer intraabdominellen Blutung ist die postoperative Nachblutung. Bei postoperativen Patienten ist ein stärkerer Blutverlust aus Drainagen (über 200 ml in der ersten Stunde) ein leicht erkennbares und untrügliches Zeichen einer Nachblutung — dann muss sofort der Arzt verständigt werden.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Postoperative Nachblutung"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "stärkerer Blutverlust aus Drainagen (über 200 ml in der ersten Stunde) ein leicht erkennbares und untrügliches Zeichen einer Nachblutung"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 12.5)

### F-07: Drainagen — Funktion + Sog-Prinzip (in der Bauchhöhle KEIN Sog)
Drainagen haben die Aufgabe, Sekret, Blut und Eiter aus Wund-, Körper- oder Abszesshöhlen abzuleiten. Insbesondere bei Drainagen in der Bauchhöhle wird kein Sog verwendet, weil der Darm durch den Sog geschädigt werden kann (Perforation, Darmfistel). Mit Sog werden z. B. die Bülau-Drainage (kontrollierter Sog) und die Redon-Drainage (unkontrollierter Sog) angeschlossen.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Drainagen haben die Aufgabe, Sekret, Blut"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "bei Drainagen in der Bauchhöhle wird kein Sog verwendet, weil der Darm durch den Sog geschädigt werden kann"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Redon-Drainage (unkontrollierter Sog)"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 7.5.1)

### F-08: Drainagen — Redon als häufigste Weichteil-Saugdrainage; geschlossenes System senkt Infektionsrisiko
Die Redon-Drainage ist die häufigste Weichteildrainage; diese Saugdrainage wird häufig am Ende einer Operation in das Unterhautfettgewebe eingelegt. Grundsätzlich sollten alle Drainageschläuche „geschlossen" mit einem Auffanggefäß verbunden sein — so wird die Möglichkeit einer bakteriellen Infektion verringert und ein Durchfeuchten des Verbands verhindert.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Die Redon-Drainage ist die häufigste Weichteildrainage"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "in das Unterhautfettgewebe eingelegt"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "So wird die Möglichkeit einer"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "bakteriellen Infektion verringert"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 7.5.1/7.5.2)

### F-09: Drainage-Verbandwechsel — aseptisch, Redon unter Erhaltung des Sogs wechseln
Da die Redon-Drainage in sterilem Gewebe liegt, muss beim Wechsel entsprechend hygienisch (aseptisch) vorgegangen werden, um eine Keimverschleppung zu vermeiden. Die volle Vakuumflasche wird unter Erhaltung des Sogs (also bei abgeklemmtem Schlauch) durch eine neue ersetzt.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "muss entsprechend hygienisch (aseptisch)"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "um eine Keimverschleppung zu"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "unter Erhaltung des Sogs"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "also bei abgeklemmtem Schlauch"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 7.5.2)

### F-10: Stoma — Ileostoma vs. Kolostoma: Definition und Lage
Ein Stoma (künstlicher Darmausgang) ist die Ausleitung des Dünn- oder Dickdarms über die Bauchdecke. Als Ileostoma bezeichnet man die Ausleitung des Dünndarms (Ileum) im rechten Unterbauch. Als Kolostoma bezeichnet man die Ausleitung des Dickdarms, meist des Colon descendens oder sigmoideum (typisch im linken Unterbauch).

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Als Ileostoma bezeichnet man die Ausleitung des Dünndarms (Ileum) im rechten Unterbauch"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Als Kolostoma bezeichnet man die Ausleitung des Dickdarms, meistens des Colon descendens oder des Colon"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 23.8.2/23.8.3)

### F-11: Ileo vs. Kolo — Versorgungsanforderung: Dünndarminhalt aggressiver, prominentes Stoma, exaktes Zuschneiden
Der kontinuierlich austretende Dünndarminhalt ist viel aggressiver als der Dickdarminhalt und führt bei längerem Hautkontakt zu erheblichen Hautschäden durch Mazeration. Frisch nach der Anlage läuft er in großen Mengen ab (etwa 1–3 Liter pro Tag); erst nach einigen Wochen wird die Ausscheidung breiiger und geringer. Deshalb wird das Ileostoma so eingenäht, dass es die Haut ca. 3 cm überragt (prominentes Ileostoma/Nippel-Ileostoma); das exakte Zuschneiden der Hautschutzplatte ist beim Ileostoma besonders wichtig.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Der kontinuierlich austretende Dünndarminhalt (pro Tag etwa 1 Liter) ist viel aggressiver als"
- Quelle: `icare-pflege-3aufl-volltext/icare-pflege-3aufl.txt`
- Zitat: "der Stuhl läuft kontinuierlich in großen Mengen ab (1000"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "zu erheblichen Hautschäden durch Mazeration"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Das exakte Zuschneiden der Hautschutzplatte ist beim Ileostoma besonders wichtig"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 23.8.2)

### F-12: Kolostoma-Formen — endständig (permanent oder temporär nach Hartmann), Stuhlkonsistenz
Das endständige Kolostoma ist die häufigste Form des Anus praeter. Nach einer Hartmann-Operation besteht ebenfalls ein endständiges Kolostoma; dieses ist meist ein temporäres Stoma, das operativ zurückverlagert werden kann. Die endständige Kolostomie fördert meist breiigen bis festen Stuhlgang.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Das endständige Kolostoma ist die häufigste Form des Anus praeter"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "besteht ebenfalls ein endständiges Kolostoma. Dieses ist meistens ein temporäres Stoma, das operativ zurückverlagert werden kann"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "fördert meist breiigen bis festen Stuhlgang"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 23.8.3/23.9)

### F-13: Postoperative Stomapflege — Inspektion Durchblutung, Ödem, erster Versorgungswechsel
In den ersten Tagen nach der Operation beschränkt sich das pflegerische Handeln hauptsächlich auf die Inspektion und die Kontrolle der Funktion des Stomas. Eine vitale Schleimhaut ist rosig bis rot, feucht glänzend; eine Durchblutungsstörung zeigt sich als dunkelrote bis livide Verfärbung; eine avitale Schleimhaut ist grau bis schwarz verfärbt. Ist der Darm nicht ausreichend durchblutet, muss der Chirurg oder der behandelnde Arzt sofort hinzugezogen werden. Ein leichtes Ödem ist in den ersten postoperativen Tagen normal. Bei intakter Versorgung ist der erste Wechsel am 3. postoperativen Tag indiziert; genutzt werden ein- oder zweiteilige Systeme.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "beschränkt sich"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "das pflegerische Handeln hauptsächlich auf die Inspektion und die Kontrolle der Funktion des Stomas"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Eine vitale Schleimhaut ist rosig bis rot, feucht glänzend"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Eine avitale Schleimhaut ist grau bis schwarz verfärbt"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "muss der Chirurg oder der behandelnde Arzt sofort hinzugezogen werden"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Bei einer intakten und dichten Versorgung ist"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "der 1. Wechsel am 3. postoperativen Tag indiziert"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 23.9.2)

### F-14: Postoperative Darmtätigkeit / Obstipationsgefahr — Ausscheidung, Darmgeräusche als Peristaltik-Zeichen
Die Ausscheidung beim Ileostoma sollte spätestens 24 Stunden nach der Operation erfolgen. Bei der Kolostomie kann es durchaus länger (2–3 Tage postoperativ) dauern, bis eine Ausscheidung erfolgt. Ein gutes Zeichen für eine beginnende Darmtätigkeit (Peristaltik) sind die Darmgase; das Abhören des Bauchs auf Darmgeräusche gibt Auskunft über die beginnende Darmtätigkeit.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Die Ausscheidung beim Ileostoma sollte sofort nach der Anlage des Stomas erfolgen, spätestens 24 Stunden nach der Operation"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Bei der Kolostomie kann es durchaus länger (2–3 Tage"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Ein gutes Zeichen für eine beginnende Darmtätigkeit (Peristaltik) sind die Darmgase"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 23.9.2)

### F-15: Postoperative Überwachung — Gasaustausch: Immobilisation/Schonatmung, Frühmobilisation
Postoperative Immobilisation sowie eine schmerzbedingte Schonatmung sind die Hauptursachen für eine postoperative Pneumonie; deshalb ist eine ausreichende Schmerztherapie nötig, damit der Patient tief durchatmen und abhusten kann. Die wirksamste Maßnahme zur Pneumonieprophylaxe ist die Frühmobilisation. Die frühestmögliche körperliche Aktivität verringert zudem das Thromboserisiko durch Beschleunigung des venösen Blutstroms — Patienten sollten möglichst am Abend des OP-Tages an der Bettkante sitzen und spätestens am Folgetag aufstehen.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Postoperative Immobilisation sowie eine schmerzbedingte Schonatmung sind"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "die Hauptursachen für eine postoperative Pneumonie"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Maßnahme zur Pneumonieprophylaxe ist auch hier die"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Frühestmögliche körperliche Aktivität des frisch operierten Patienten verringert das Thromboserisiko"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "an der Bettkante sitzen und spätestens am"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 9.2.4/9.5)

### F-16: Postoperative Überwachung — Urinausscheidung (Harnverhalt) und Dauerkatheter-Infektionsprophylaxe
Jeder Patient muss postoperativ spätestens nach 6–8 Stunden spontan Wasser gelassen haben; der postoperative Harnverhalt ist fast immer durch eine reflektorische Miktionssperre oder einen verstopften Blasenkatheter bedingt. Zur Infektionsprophylaxe bei liegendem Dauerkatheter gehören: Händehygiene unmittelbar vor und nach jeder Manipulation am Katheter/System, ein geschlossenes System mit knickfreiem, ungehindertem Harnabfluss und der Auffangbeutel stets unterhalb des Blasenniveaus (nicht auf den Boden stellen).

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "muss postoperativ nach"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "spätestens 6–8 Stunden spontan Wasser gelassen haben"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Der postoperative Harnverhalt ist fast immer durch eine"
- Quelle: `eaun-katheterisierung-2024-volltext/eaun-katheterisierung-2024.txt`
- Zitat: "Perform hand hygiene immediately before and after any manipulation"
- Quelle: `eaun-katheterisierung-2024-volltext/eaun-katheterisierung-2024.txt`
- Zitat: "Keep the collecting bag below the level of the bladder at all times"
- Quelle: `eaun-katheterisierung-2024-volltext/eaun-katheterisierung-2024.txt`
- Zitat: "Keep the catheter and collecting tube free from kinking"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 9.5; EAUN Catheterisation Guideline 2024, Kap. 10.3)

### F-17: Bedeutung von Information/Wissen für den akuterkrankten Menschen (Patientenedukation)
Information, Beratung und Schulung sind zentraler Bestandteil der Pflege: Im Gespräch können Ängste, Unwissenheit und Sorgen abgeschwächt werden. Durch die Anleitung zur Selbstversorgung sowie Patientenschulung (Patientenedukation) gewinnt der betroffene Mensch Sicherheit im Umgang mit seiner Situation — Selbstvertrauen und Eigenständigkeit zu erhalten ist das Pflegeziel.

**Beleg:**
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Im Gespräch können Ängste, Unwissenheit und die Sorge"
- Quelle: `paetz-chirurgie-volltext/paetz-chirurgie.txt`
- Zitat: "Durch die Anleitung zur Selbstversorgung sowie Patientenschulung (Patientenedukation)"
- Primärquelle: (Paetz Chirurgie 2017, Kap. 23.9)
