// CE-04 Thema Kultursensible Kommunikation — Wissensbausteine (6 Bausteine, 3 Stufen)
// Lernergebnis-First (specs/ce-04/kommunikation-build-plan.md)
// Deckt: LE1-W7 + LE3 (W1/W2/W3/W4, K1/K2/K3, E1)
// Quelle: Kommunikation im Gesundheitswesen Kap. 1/2 (interkulturell); I Care Pflege (Tabu, Demenz-Angehörige, Beratungsstellen)

import type { Wissensbaustein } from "../../../_types";

export const CE04_THEMA_KULTURSENSIBLE_KOMMUNIKATION_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: kulturelle-unterschiede (Bloom 2) — LE1-W7
  // ═══════════════════════════════════════════
  {
    bausteinId: "kultursensible-kommunikation-unterschiede",
    themaId: "kultursensible-kommunikation",
    titel: "Kulturelle Unterschiede im Kommunikationsverhalten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient schaut dir beim Gespräch nie in die Augen und weicht zurück, wenn du näher trittst. Du denkst: 'Der ist unhöflich und ablehnend.' Könnte es auch etwas ganz anderes bedeuten?",
      antwort:
        "Ja. Blickkontakt und Körperabstand (Proxemik) werden je nach Kulturkreis sehr unterschiedlich bewertet: Wegschauen kann Respekt bedeuten, nicht Desinteresse; ein größerer Abstand kann normal und angenehm sein. Auch Berührung, Gestik, Gesichtsausdruck und Tonfall werden kulturell unterschiedlich gewertet. Wichtig: nicht einzelne Zeichen vorschnell (selektiv) interpretieren. (Kommunikation im Gesundheitswesen, Kap. 2)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Nonverbale Kommunikation ist kulturell sehr unterschiedlich. Beispiele: Proxemik (Körperabstand) — manche Kulturen empfinden dichten Abstand als normal, andere weichen zurück; Berührung/Körperkontakt (auch gleichgeschlechtlich) wird unterschiedlich bewertet; Blickkontakt — Wegschauen kann Respekt, Verlegenheit ODER Desinteresse bedeuten; Gestik (Hände/Finger) — manche Gesten sind anderswo unangemessen; ernster Tonfall/Gesichtsausdruck kann als unfreundlich wirken. Regel: keine selektive Interpretation einzelner Zeichen; kulturelle Kompetenz durch Weiterbildung. (Kommunikation im Gesundheitswesen, Kap. 2)",
      textB1:
        "Körpersprache ist in jeder Kultur anders. Beispiele: Abstand — manche stehen gern nah, andere weichen zurück. Berührung wird unterschiedlich bewertet. Blickkontakt — Wegschauen kann Respekt heißen, nicht Desinteresse. Manche Gesten sind anderswo unhöflich. Ein ernster Ton kann unfreundlich wirken. Regel: Deute einzelne Zeichen nicht zu schnell. Bilde dich weiter.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kultur-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (kulturelle Unterschiede nonverbaler Kommunikation, Proxemik)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-kultur-unterschiede",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Kulturelle Unterschiede im Kommunikationsverhalten",
          body: "Kommunikation ist kulturell geprägt — besonders die **nonverbalen** Anteile. Wer das nicht weiß, deutet Verhalten schnell falsch (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Wo Kulturen sich unterscheiden:**\n- **Proxemik (Körperabstand):** Für einige Kulturen ist ein dichter Abstand selbstverständlich und angenehm; andere empfinden Abstand als angemessen und **weichen zurück**, wenn ein Unbekannter zu nahe kommt.\n- **Berührung/Körperkontakt:** wird unterschiedlich bewertet — auch der **gleichgeschlechtliche** Körperkontakt.\n- **Blickkontakt:** Dauer und Fokus haben verschiedene Bedeutungen. **Wegblicken** kann Verlegenheit, Desinteresse **oder Respekt** bedeuten. Jemandem direkt in die Augen zu schauen ist nicht überall selbstverständlich.\n- **Gestik:** Gesten mit Händen und Fingern können anderswo **geringschätzend oder unangemessen** sein.\n- **Gesichtsausdruck/Tonfall:** Ein ernster Ausdruck kann als distanziert, unfreundlich oder aggressiv empfunden werden.\n- **Geruch:** wie stark Gerüche bewertet werden, ist individuell und kulturell unterschiedlich.\n\n**Die wichtigste Regel:** **Keine selektive Interpretation** einzelner Kommunikationsbestandteile — ein einzelnes Zeichen sagt für sich genommen wenig. Statt vorschnell zu werten: nachfragen, beobachten, sich **kulturelle Kompetenz** aneignen (Weiterbildung). (Kommunikation im Gesundheitswesen, Kap. 2)",
          glossarBegriffe: ["Proxemik", "kulturelle Kompetenz", "selektive Interpretation"],
        },
        contentB1: {
          title: "Kulturelle Unterschiede im Kommunikationsverhalten",
          body: "Kommunikation ist in jeder Kultur anders — vor allem die **Körpersprache**. Wer das nicht weiß, deutet vieles falsch (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Wo Kulturen sich unterscheiden:**\n- **Abstand:** Manche stehen gern nah, andere **weichen zurück**, wenn man zu nah kommt.\n- **Berührung:** wird unterschiedlich bewertet — auch zwischen gleichem Geschlecht.\n- **Blickkontakt:** **Wegschauen** kann Respekt, Verlegenheit **oder** Desinteresse heißen. Direkt in die Augen schauen ist nicht überall normal.\n- **Gesten:** Manche Handzeichen sind anderswo **unhöflich**.\n- **Gesicht/Ton:** Ein ernster Ton kann unfreundlich wirken.\n- **Geruch:** wie stark Gerüche zählen, ist von Mensch zu Mensch verschieden.\n\n**Wichtigste Regel:** Deute **einzelne Zeichen nicht zu schnell**. Frag lieber nach, beobachte, und bilde dich weiter (**kulturelle Kompetenz**).",
          glossarBegriffe: ["Proxemik", "kulturelle Kompetenz", "selektive Interpretation"],
        },
      },
    },
    glossarBegriffe: ["Proxemik", "kulturelle Kompetenz", "selektive Interpretation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: direkte-indirekte-kommunikation (Bloom 4) — LE3-K1
  // ═══════════════════════════════════════════
  {
    bausteinId: "kultursensible-kommunikation-direkt-indirekt",
    themaId: "kultursensible-kommunikation",
    titel: "Direkte und indirekte Kommunikation unterscheiden",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du fragst einen Patienten direkt: 'Haben Sie Schmerzen?' Er sagt 'Es geht schon' und lächelt — verneint aber nicht wirklich. Eine andere Person hätte vielleicht klar 'Ja' oder 'Nein' gesagt. Was ist hier los?",
      antwort:
        "Hier treffen direkte und indirekte Kommunikationsstile aufeinander. Manche Sprachen/Kulturen sind direkt (inhaltsorientiert, Ich-bezogen), andere indirekt (auf das Gegenüber orientiert, höflich umschreibend, um das 'Gesicht zu wahren'). 'Es geht schon' kann indirekt durchaus Schmerz bedeuten. Wer den Stil nicht erkennt, überhört wichtige Botschaften. (Kommunikation im Gesundheitswesen, Kap. 1; I Care)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kulturen/Sprachen unterscheiden sich im Kommunikationsstil: Direkte Kommunikation ist inhaltsorientiert und Ich-bezogen, sagt Dinge klar und unverblümt. Indirekte Kommunikation ist auf das Gegenüber/den Adressaten orientiert, umschreibt höflich, vermeidet offene Ablehnung, um das 'Gesicht zu wahren'. In der Pflege wichtig: indirekte Aussagen ('Es geht schon') ernst nehmen, nonverbale Zeichen beachten, behutsam nachfragen — nicht nur die Worte werten. (Kommunikation im Gesundheitswesen, Kap. 1)",
      textB1:
        "Menschen reden unterschiedlich direkt. Direkte Kommunikation sagt klar, was Sache ist. Indirekte Kommunikation umschreibt höflich und vermeidet ein offenes 'Nein', um niemanden zu beschämen ('das Gesicht wahren'). In der Pflege: Nimm indirekte Aussagen wie 'Es geht schon' ernst, achte auf die Körpersprache und frag behutsam nach.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kultur-wb-02",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (systematisch-kommunikative Vorlieben: direkt/indirekt)", "I Care Pflege (kultursensibel, 'Gesicht wahren')"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-kultur-direkt-indirekt",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Direkte und indirekte Kommunikation",
          body: "Ein zentraler kultureller Unterschied ist der **Kommunikationsstil**: direkt oder indirekt (Kommunikation im Gesundheitswesen, Kap. 1).\n\n**Direkte Kommunikation**\n- **inhaltsorientiert und Ich-bezogen** — sagt klar und unverblümt, worum es geht\n- ein 'Nein' ist ein 'Nein', Kritik wird offen geäußert\n- ein eher direkter Stil ist eine **Tendenz**, kein fester National- oder Charakterzug (auch in Deutschland kommunizieren viele Menschen indirekt)\n\n**Indirekte Kommunikation**\n- **auf das Gegenüber/den Adressaten orientiert** — höflich umschreibend\n- vermeidet **offene Ablehnung oder Kritik**, um das **'Gesicht zu wahren'** (das des anderen und das eigene)\n- Zustimmung oder Ablehnung wird angedeutet, nicht ausgesprochen\n\n**Differenzieren — woran erkennst du den Stil?**\n- Werden klare Aussagen gemacht oder eher Andeutungen?\n- Passt das gesprochene Wort zur Körpersprache, oder gibt es einen Widerspruch ('Es geht schon' + schmerzverzerrtes Gesicht)?\n\n**In der Pflege:** Wer indirekte Kommunikation als 'unklar' oder 'ausweichend' abtut, überhört wichtige Botschaften — etwa Schmerz, Angst oder Ablehnung einer Maßnahme. **Indirekte Aussagen ernst nehmen, nonverbale Zeichen beachten, behutsam und konkret nachfragen** ('Sie sagen, es geht — aber ich sehe, dass Sie das Gesicht verziehen. Wie stark sind die Schmerzen von 0 bis 10?'). (Kommunikation im Gesundheitswesen, Kap. 1; I Care)",
          glossarBegriffe: ["direkte Kommunikation", "indirekte Kommunikation", "Gesicht wahren"],
        },
        contentB1: {
          title: "Direkte und indirekte Kommunikation",
          body: "Ein wichtiger kultureller Unterschied ist der **Stil**: direkt oder indirekt (Kommunikation im Gesundheitswesen, Kap. 1).\n\n**Direkte Kommunikation**\n- **klar und unverblümt** — sagt offen, worum es geht\n- ein 'Nein' ist ein 'Nein'\n- ein eher direkter Stil — aber das ist eine **Tendenz**, kein fester Nationalcharakter\n\n**Indirekte Kommunikation**\n- **höflich und umschreibend**\n- vermeidet ein offenes 'Nein', um das **'Gesicht zu wahren'** (niemanden zu beschämen)\n- Zustimmung/Ablehnung wird **angedeutet**, nicht gesagt\n\n**Woran erkennst du den Stil?**\n- Klare Aussagen oder eher Andeutungen?\n- Passen Worte und Körpersprache zusammen? ('Es geht schon' + Schmerz im Gesicht)\n\n**In der Pflege:** Nimm indirekte Aussagen **ernst**. Achte auf die Körpersprache. Frag **behutsam und konkret** nach: 'Sie sagen, es geht — aber Ihr Gesicht sieht angespannt aus. Wie stark sind die Schmerzen von 0 bis 10?'",
          glossarBegriffe: ["direkte Kommunikation", "indirekte Kommunikation", "Gesicht wahren"],
        },
      },
    },
    glossarBegriffe: ["direkte Kommunikation", "indirekte Kommunikation", "Gesicht wahren"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: tabuthemen (Bloom 4) — LE3-W2
  // ═══════════════════════════════════════════
  {
    bausteinId: "kultursensible-kommunikation-tabuthemen",
    themaId: "kultursensible-kommunikation",
    titel: "Tabuthemen kultursensibel ansprechen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du musst mit einer Patientin über ihre Inkontinenz und Intimpflege sprechen. Sie wird sofort sehr verschlossen und wehrt ab. Warum ist gerade dieses Thema so heikel — und wie sprichst du es trotzdem an?",
      antwort:
        "Weil es ein Tabuthema ist: Ein Tabu ist etwas, worüber man (aus Scham oder kulturell-religiösen Gründen) nicht offen spricht — Sexualität, Intimität, Ausscheidung/Inkontinenz, Tod oder psychische Erkrankung gehören in vielen Kulturkreisen dazu. Wichtig ist, das Thema behutsam, diskret und wertschätzend anzusprechen (Enttabuisierung), die Scham anzuerkennen und auf Wunsch gleichgeschlechtliche Pflege anzubieten. (I Care Pflege; Kommunikation im Gesundheitswesen)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein Tabu ist etwas, worüber aus Scham oder kulturell-religiösen Gründen nicht offen gesprochen wird. Tabuthemen variieren je Kulturkreis, häufig betroffen: Sexualität und Intimität, Ausscheidung/Inkontinenz, Tod und Sterben, psychische Erkrankungen. Umgang: das Thema behutsam, diskret und wertschätzend ansprechen (Enttabuisierung peinlicher Situationen), Scham anerkennen, Sichtschutz/Intimsphäre wahren, auf Wunsch gleichgeschlechtliche Pflege. (I Care Pflege)",
      textB1:
        "Ein Tabu ist etwas, worüber man aus Scham oder aus religiös-kulturellen Gründen nicht offen redet. Je nach Kultur sind das oft: Sexualität, Intimbereich, Ausscheidung/Inkontinenz, Tod, psychische Krankheit. Umgang: das Thema vorsichtig, diskret und wertschätzend ansprechen, die Scham anerkennen, Sichtschutz geben, auf Wunsch gleichgeschlechtliche Pflege.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kultur-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["I Care Pflege (Sexualität und Pflege – ein Tabuthema?; Enttabuisierung; Inkontinenz als Tabuthema)", "Kommunikation im Gesundheitswesen, Kap. 2 (kulturelle Unterschiede)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-kultur-tabuthemen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Tabuthemen kultursensibel ansprechen",
          body: "Ein **Tabu** beschreibt etwas Verbotenes oder Beschämendes — einen Tatbestand, der zwar existiert, über den aber aus Scham oder kulturell-religiösen Gründen **nicht offen gesprochen** wird (I Care Pflege).\n\n**Häufige Tabuthemen (je Kulturkreis unterschiedlich gewichtet):**\n- **Sexualität und Intimität** — gilt im Verhältnis von Sexualität und Pflege oft als Tabu, ebenso Sexualität im Alter\n- **Ausscheidung / Inkontinenz** — gilt verbreitet als Tabuthema\n- **Körper, Berührung, Nacktheit** — kulturell unterschiedlich stark schambesetzt\n- **Tod und Sterben**\n- **Psychische Erkrankungen**\n\n**Warum das wichtig ist:** Wird ein Tabuthema unsensibel angesprochen, zieht sich der Mensch zurück — wichtige pflegerische Informationen bleiben verborgen, und seine Würde wird verletzt.\n\n**Wie du Tabuthemen ansprichst:**\n- **Behutsam, diskret und wertschätzend** — nicht beiläufig im Mehrbettzimmer\n- **Enttabuisierung peinlicher Situationen:** das Thema ruhig und sachlich normalisieren ('Das betrifft viele Menschen, wir gehen damit ganz selbstverständlich um')\n- **Scham anerkennen**, nicht überspielen\n- **Sichtschutz und Intimsphäre** wahren\n- auf Wunsch **gleichgeschlechtliche Pflege** anbieten\n- kulturelle und religiöse Gründe **ernst nehmen**, nicht bewerten (I Care Pflege)",
          glossarBegriffe: ["Tabu", "Enttabuisierung", "Scham"],
        },
        contentB1: {
          title: "Tabuthemen kultursensibel ansprechen",
          body: "Ein **Tabu** ist etwas, worüber man aus **Scham** oder aus **religiös-kulturellen** Gründen **nicht offen spricht** (I Care Pflege).\n\n**Häufige Tabuthemen (je nach Kultur unterschiedlich):**\n- **Sexualität und Intimbereich** — auch Sexualität im Alter\n- **Ausscheidung / Inkontinenz**\n- **Körper, Berührung, Nacktheit**\n- **Tod und Sterben**\n- **Psychische Krankheiten**\n\n**Warum wichtig:** Sprichst du ein Tabu unsensibel an, zieht sich der Mensch zurück — du erfährst Wichtiges nicht, und seine Würde leidet.\n\n**Wie du es ansprichst:**\n- **Vorsichtig, diskret und wertschätzend** — nicht im Mehrbettzimmer nebenbei\n- Das Thema ruhig **normalisieren**: 'Das betrifft viele Menschen.'\n- **Scham anerkennen**\n- **Sichtschutz** geben, Intimsphäre wahren\n- auf Wunsch **gleichgeschlechtliche Pflege**\n- kulturelle/religiöse Gründe **ernst nehmen**",
          glossarBegriffe: ["Tabu", "Enttabuisierung", "Scham"],
        },
      },
    },
    glossarBegriffe: ["Tabu", "Enttabuisierung", "Scham"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: muttersprachliche-beratung (Bloom 2) — LE3-K2/K3
  // ═══════════════════════════════════════════
  {
    bausteinId: "kultursensible-kommunikation-muttersprachlich",
    themaId: "kultursensible-kommunikation",
    titel: "Sprachbarrieren überbrücken: Dolmetscher und muttersprachliche Angebote",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Patientin spricht kaum Deutsch, ihr 12-jähriger Sohn übersetzt das Aufklärungsgespräch. Warum ist das problematisch — und welche bessere Lösung gibt es?",
      antwort:
        "Ein Kind als Dolmetscher ist problematisch: Es wird mit belastenden Inhalten überfordert, Fachliches geht verloren, und Tabuthemen (Intimes, Diagnosen) kann es nicht angemessen übersetzen — die Aufklärung wird unzuverlässig. Besser: professionelle Dolmetscher oder Sprachmittler, Kollegen mit entsprechenden Sprachkenntnissen, muttersprachliche Beratungsangebote; ergänzend einfache Sprache, Zeichnen und visuelle Hilfen. (Kommunikation im Gesundheitswesen, Kap. 2)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei Sprachbarrieren sollten Kollegen mit entsprechenden Sprachkenntnissen oder professionelle Dolmetscher/Sprachmittler hinzugezogen werden — keine Kinder oder belasteten Angehörigen, gerade bei Tabuthemen und Aufklärung. Muttersprachlich angebotene Beratungs- und Therapiesettings erhöhen Verständnis und Zugang. Ergänzend: einfache Sprache, langsames Sprechen, Zeichnen, anschauliche Medien/Bilder. (Kommunikation im Gesundheitswesen, Kap. 2)",
      textB1:
        "Wenn jemand wenig Deutsch spricht: Hol Kollegen mit der Sprache oder einen professionellen Dolmetscher dazu — keine Kinder und keine belasteten Angehörigen, vor allem bei heiklen Themen. Muttersprachliche Beratung hilft beim Verstehen. Zusätzlich: einfache Sprache, langsam sprechen, zeichnen, Bilder zeigen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kultur-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (fremdsprachliche Herausforderungen, Dolmetscher)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-kultur-muttersprachlich",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Sprachbarrieren überbrücken",
          body: "Sprachbarrieren gefährden Verständigung, Aufklärung und Sicherheit. Es gibt verschiedene Wege, sie zu überbrücken — und Anforderungen, wann welcher passt (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Professionelle Sprachmittlung — die erste Wahl bei Wichtigem:**\n- **Kollegen mit entsprechenden Sprachkenntnissen** oder **professionelle Dolmetscher/Sprachmittler** hinzuziehen — besonders bei **Aufklärung, Diagnosen und Tabuthemen**.\n- **Keine Kinder** und möglichst **keine belasteten Angehörigen** als Dolmetscher: Sie werden überfordert, Fachliches geht verloren, Intimes/Belastendes kann nicht angemessen übersetzt werden.\n\n**Muttersprachliche Angebote planen (K2):**\n- **muttersprachlich angebotene Beratungs- und Therapiesettings** erhöhen Verständnis und Zugang — gerade für Menschen mit Migrationshintergrund.\n- Bei der Planung berücksichtigen: Verfügbarkeit von Sprachmittlern, Termin-/Zeitbedarf (Dolmetschen dauert länger), Datenschutz, Vertraulichkeit.\n\n**Ergänzende Hilfen (wenn kein Dolmetscher verfügbar):**\n- **einfache Sprache**, langsam und deutlich sprechen\n- **Zeichnen**, anschauliche Medien, Bilder und Piktogramme\n- Verständnis durch Nachfragen/Paraphrase sichern\n\n**Wo gibt es Unterstützung (K3)?** Information zu Sprachmittlung und kultursensiblen Angeboten z.B. über die Einrichtung, Beratungsstellen, Pflegestützpunkte und Migrationsdienste. (Kommunikation im Gesundheitswesen, Kap. 2)",
          glossarBegriffe: ["Dolmetscher/Sprachmittler", "muttersprachliche Beratung", "einfache Sprache"],
        },
        contentB1: {
          title: "Sprachbarrieren überbrücken",
          body: "Wenn die Sprache fehlt, leidet die Verständigung — und die Sicherheit. So überbrückst du Sprachbarrieren (Kommunikation im Gesundheitswesen, Kap. 2):\n\n**Profis zuerst (bei Wichtigem):**\n- **Kollegen mit der Sprache** oder **professionelle Dolmetscher** holen — besonders bei **Aufklärung, Diagnosen und heiklen Themen**.\n- **Keine Kinder** und möglichst **keine belasteten Angehörigen** übersetzen lassen: Sie werden überfordert, Wichtiges geht verloren.\n\n**Muttersprachliche Angebote:**\n- **Beratung in der Muttersprache** hilft Menschen mit Migrationshintergrund sehr.\n- Plane: Gibt es Sprachmittler? Mehr Zeit (Dolmetschen dauert länger)? Datenschutz?\n\n**Wenn kein Dolmetscher da ist:**\n- **einfache Sprache**, langsam sprechen\n- **zeichnen**, Bilder und Symbole zeigen\n- mit Nachfragen sichern, ob es verstanden wurde\n\n**Wo gibt es Hilfe?** Über die Einrichtung, Beratungsstellen, Pflegestützpunkte und Migrationsdienste.",
          glossarBegriffe: ["Dolmetscher/Sprachmittler", "muttersprachliche Beratung", "einfache Sprache"],
        },
      },
    },
    glossarBegriffe: ["Dolmetscher/Sprachmittler", "muttersprachliche Beratung", "einfache Sprache"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: pflegende-angehoerige (Bloom 2) — LE3-W1/W3/W4/K3
  // ═══════════════════════════════════════════
  {
    bausteinId: "kultursensible-kommunikation-pflegende-angehoerige",
    themaId: "kultursensible-kommunikation",
    titel: "Pflegende Angehörige unterstützen — besonders bei Demenz und Migration",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die Tochter eines demenzkranken Mannes pflegt ihn seit Jahren allein zu Hause, spricht wenig Deutsch und wirkt erschöpft und zurückgezogen. Welche zwei Belastungen treffen hier zusammen — und welche konkreten Hilfen kannst du nennen?",
      antwort:
        "Hier treffen die hohe Dauerbelastung der Demenzpflege (physisch und psychisch, über Jahre, steigend mit dem Verlauf) und das Isolationsrisiko bei Migrationshintergrund (Sprachbarriere, weniger Zugang zu Hilfen) zusammen. Konkrete Hilfen: Pflegestützpunkt, Deutsche Alzheimer Gesellschaft, Angehörigenschulungen, Selbsthilfegruppen sowie Entlastungsangebote wie Kurzzeit- und Verhinderungspflege. (I Care Pflege)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Pflege eines Menschen mit Demenz kann viele Jahre dauern und ist physisch wie psychisch stark belastend; mit fortschreitender Erkrankung steigen die Anforderungen an die Angehörigen. Pflegende Angehörige mit Migrationshintergrund sind zusätzlich isolations- und einsamkeitsgefährdet (Sprachbarrieren, geringerer Zugang zu Hilfen). Unterstützung: Pflegestützpunkte, Deutsche Alzheimer Gesellschaft, Angehörigenschulungen, Selbsthilfegruppen; Entlastung durch Kurzzeitpflege und Verhinderungspflege. Pflege durch Angehörige darf nicht vorausgesetzt werden. (I Care Pflege)",
      textB1:
        "Einen Menschen mit Demenz zu pflegen, dauert oft viele Jahre und belastet Körper und Seele stark. Je weiter die Demenz, desto schwerer wird es für die Angehörigen. Bei Migrationshintergrund kommt oft Einsamkeit dazu (Sprache, weniger Zugang zu Hilfen). Hilfen: Pflegestützpunkt, Deutsche Alzheimer Gesellschaft, Angehörigenschulungen, Selbsthilfegruppen, Kurzzeitpflege und Verhinderungspflege.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kultur-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["I Care Pflege (Demenz – pflegende Angehörige; Beratungs-, Entlastungs- und Selbsthilfeangebote; Pflegestützpunkte, Deutsche Alzheimer Gesellschaft)", "Pflege heute (7. Aufl.) — Schweregrade der Demenz (leicht/mittelschwer/schwer)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-kultur-pflegende-angehoerige",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pflegende Angehörige unterstützen",
          body: "Angehörige tragen einen großen Teil der Pflege — und geraten dabei selbst an Grenzen. Als Pflegefachkraft erkennst du ihre Belastung und kennst die Hilfen (I Care Pflege).\n\n**Belastung bei Demenz (W3):**\n- Die Pflege eines Menschen mit Demenz kann **viele Jahre andauern** und ist **physisch und psychisch stark belastend**.\n- Wichtig: **Pflege durch Angehörige darf nicht vorausgesetzt werden** — prüfe, ob die häusliche Versorgung wirklich gesichert ist.\n\n**Die Demenzphasen verändern die Belastung der Angehörigen (W4):** Die Schweregrade sind nicht scharf abgegrenzt, geben aber die Richtung vor (Pflege heute):\n- **Leichte Demenz:** Störungen v.a. des Kurzzeitgedächtnisses, Wortfindungsstörungen, eingeschränktes Urteilsvermögen, Stimmungsschwankungen — ein unabhängiges Leben ist noch möglich. *Für Angehörige:* Sie bemerken die Veränderungen, übernehmen erste Aufgaben (Erinnern, Begleiten) und erleben **Sorge und Konflikte** um die nachlassende Selbstständigkeit.\n- **Mittelschwere Demenz:** auch das Langzeitgedächtnis und die Orientierung sind gestört, deutlicher Verlust von Alltagskompetenzen, **beginnende Hilfs- und Aufsichtsbedürftigkeit** — kein unabhängiges Leben mehr. *Für Angehörige:* die Belastung steigt stark — zunehmende **Aufsicht (auch nachts)**, Umgang mit **herausforderndem Verhalten** und Orientierungsstörungen.\n- **Schwere Demenz:** kaum noch Sprache, Verlust motorischer Fähigkeiten, **vollständige Pflegebedürftigkeit**. *Für Angehörige:* körperlich und psychisch **maximale Dauerbelastung**, oft **antizipatorische Trauer** (der Mensch erkennt sie nicht mehr) und die schwere Entscheidung über einen Heimübergang.\n\n**Zusätzliches Isolationsrisiko bei Migrationshintergrund (W1):**\n- **Sprachbarrieren** und **geringerer Zugang** zu Information und Hilfen erhöhen die Gefahr von **Einsamkeit und Isolation** pflegender Angehöriger mit Migrationshintergrund. Muttersprachliche und kultursensible Angebote sind hier besonders wichtig.\n\n**Beratungs- und Informationsstellen (K3):**\n- **Pflegestützpunkte** — beraten zur Pflege (Adresse über Rathaus/Krankenkasse)\n- **Deutsche Alzheimer Gesellschaft e.V.** — Beratungsstellen, Alzheimer-Telefon, E-Mail-Beratung\n- **Angehörigenschulungen** (über die Krankenkassen)\n- **Selbsthilfegruppen** zum Erfahrungsaustausch — gerade bei psychischer Belastung sinnvoll\n\n**Entlastungsangebote:**\n- **Kurzzeitpflege** (vorübergehende stationäre Versorgung, z.B. bei Überforderung/Urlaub)\n- **Verhinderungspflege** (Vertretung der Pflegeperson, auch zu Hause)\n- **häusliche Krankenpflege**, wenn die Angehörigen es nicht mehr leisten können (I Care Pflege)",
          glossarBegriffe: ["pflegende Angehörige", "Pflegestützpunkt", "Verhinderungspflege"],
        },
        contentB1: {
          title: "Pflegende Angehörige unterstützen",
          body: "Angehörige übernehmen viel Pflege — und stoßen selbst an Grenzen. Du erkennst ihre Belastung und kennst die Hilfen (I Care Pflege).\n\n**Belastung bei Demenz:**\n- Die Pflege kann **viele Jahre dauern** und belastet **Körper und Seele stark**.\n- Wichtig: **Man darf nicht voraussetzen**, dass die Angehörigen das schaffen. Prüfe, ob es zu Hause wirklich klappt.\n\n**Die Demenzphasen verändern die Belastung (Pflege heute):**\n- **Leichte Demenz:** vergisst Neues, sucht Wörter, kann noch allein leben. *Angehörige:* machen sich **Sorgen**, helfen beim Erinnern, es gibt **Konflikte** um die Selbstständigkeit.\n- **Mittelschwere Demenz:** vergisst auch Altes, findet sich schlecht zurecht, braucht **Hilfe und Aufsicht**. *Angehörige:* viel **Aufsicht (auch nachts)**, schwieriges Verhalten — die Belastung wird groß.\n- **Schwere Demenz:** spricht kaum noch, ist **ganz pflegebedürftig**. *Angehörige:* **stärkste Belastung**, oft **Trauer** (der Mensch erkennt sie nicht mehr), Frage nach einem Heimplatz.\n\n**Mehr Einsamkeit bei Migrationshintergrund:**\n- **Sprachbarrieren** und **weniger Zugang** zu Hilfen führen oft zu **Einsamkeit**. Muttersprachliche Angebote helfen besonders.\n\n**Wo gibt es Hilfe?**\n- **Pflegestützpunkt** (Adresse über Rathaus/Krankenkasse)\n- **Deutsche Alzheimer Gesellschaft** (Telefon, E-Mail, Beratungsstellen)\n- **Angehörigenschulungen** (Krankenkasse)\n- **Selbsthilfegruppen**\n\n**Entlastung:**\n- **Kurzzeitpflege** (kurz in einer Einrichtung)\n- **Verhinderungspflege** (Vertretung, auch zu Hause)\n- **häusliche Krankenpflege**",
          glossarBegriffe: ["pflegende Angehörige", "Pflegestützpunkt", "Verhinderungspflege"],
        },
      },
    },
    glossarBegriffe: ["pflegende Angehörige", "Pflegestützpunkt", "Verhinderungspflege"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: kultursensibel-reflexion (Bloom 5) — LE3-E1
  // ═══════════════════════════════════════════
  {
    bausteinId: "kultursensible-kommunikation-reflexion",
    themaId: "kultursensible-kommunikation",
    titel: "Kulturelle Spezifika erkennen — und die eigene Prägung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Familie besteht darauf, dem schwer kranken Vater die Diagnose nicht zu sagen — 'das würde ihn nur schwächen'. Dir widerstrebt das, weil du Aufklärung für selbstverständlich hältst. Wessen Sicht ist hier 'richtig'?",
      antwort:
        "Keine ist pauschal 'richtig' — hier treffen unterschiedliche kulturelle Spezifika und Werte aufeinander, auch deine eigenen. Kultursensibel handeln heißt: die eigene Prägung erkennen, die andere Sichtweise nicht vorschnell bewerten, kulturelle Spezifika den Handlungsweisen zuordnen und im Rahmen von Recht (Selbstbestimmung des Patienten) und Ethik eine tragfähige Lösung suchen. (Kommunikation im Gesundheitswesen; I Care)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kultursensibel zu handeln verlangt, kulturelle Spezifika den passenden Untersuchungs- und Handlungsweisen zuzuordnen UND die eigene Kulturgebundenheit zu reflektieren. Die eigenen Werte sind nicht der neutrale Maßstab. Ziel: andere Sichtweisen verstehen statt bewerten, ohne dabei Patientenrechte (Selbstbestimmung) und ethische Grenzen aufzugeben.",
      textB1:
        "Kultursensibel handeln heißt: kulturelle Besonderheiten in deine Pflege und Untersuchung einbeziehen — und merken, dass auch du kulturell geprägt bist. Deine eigenen Werte sind nicht das neutrale Maß. Ziel: die andere Sicht verstehen statt bewerten — ohne die Rechte des Patienten (Selbstbestimmung) aufzugeben.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kultur-wb-06",
        phase: 1,
        stepType: "reflection",
        bloomLevel: 5,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (interkulturelle Kompetenz)", "I Care Pflege (kultursensibel pflegen; Leininger)"],
        track: "basis",
        modus: "schreibtisch",
        lernziel: "ce04-kultur-reflexion",
        tag: "pflege",
        contentC1: {
          title: "Kulturelle Spezifika erkennen — und die eigene Prägung",
          body: "Kultursensible Kommunikation endet nicht beim Wissen über 'die anderen'. Sie verlangt zweierlei (Kommunikation im Gesundheitswesen; I Care Pflege):\n\n**1. Kulturelle Spezifika den Handlungsweisen zuordnen.**\nWelche kulturellen oder religiösen Besonderheiten beeinflussen hier die Untersuchung, die Pflege, das Gespräch? (z.B. Umgang mit Diagnosen, Schmerz, Intimität, Ernährung, gleichgeschlechtliche Pflege.) Diese Spezifika fließen in dein konkretes Handeln ein.\n\n**2. Die eigene Kulturgebundenheit reflektieren.**\nDeine eigenen Überzeugungen, Werte und Selbstverständlichkeiten (z.B. 'Aufklärung ist immer richtig') sind **selbst kulturell geprägt** — nicht der neutrale Maßstab. Wer das erkennt, kann andere Sichtweisen **verstehen statt vorschnell bewerten**.\n\n**Der Rahmen bleibt:** Kultursensibilität bedeutet nicht, alles zu akzeptieren. **Patientenrechte (Selbstbestimmung) und ethische Grenzen** gelten weiter. Die Kunst ist, im Spannungsfeld zwischen Respekt für kulturelle Werte und den Rechten des Einzelnen eine tragfähige Lösung zu finden — oft im Gespräch mit Patient, Familie und Team.",
          glossarBegriffe: ["kulturelle Kompetenz", "Kulturgebundenheit", "Selbstbestimmung"],
        },
        contentB1: {
          title: "Kulturelle Spezifika erkennen — und die eigene Prägung",
          body: "Kultursensibel zu sein heißt nicht nur, etwas über 'die anderen' zu wissen. Es braucht zwei Dinge (Kommunikation im Gesundheitswesen; I Care Pflege):\n\n**1. Kulturelle Besonderheiten einbeziehen.**\nWelche kulturellen oder religiösen Besonderheiten wirken hier auf Pflege und Gespräch? (z.B. Umgang mit Diagnosen, Schmerz, Intimität, Essen, gleichgeschlechtliche Pflege.) Das fließt in dein Handeln ein.\n\n**2. Die eigene Prägung erkennen.**\nDeine eigenen Werte (z.B. 'Aufklärung ist immer richtig') sind **selbst kulturell geprägt** — nicht das neutrale Maß. Wer das merkt, kann andere Sichtweisen **verstehen statt bewerten**.\n\n**Der Rahmen bleibt:** Kultursensibel heißt nicht, alles zu akzeptieren. Die **Rechte des Patienten (Selbstbestimmung)** und ethische Grenzen gelten weiter. Such eine Lösung im Gespräch mit Patient, Familie und Team.",
          glossarBegriffe: ["kulturelle Kompetenz", "Kulturgebundenheit", "Selbstbestimmung"],
        },
        question: {
          fragetext: "Beschreibe eine Situation, in der kulturelle Unterschiede eine Rolle spielten, und ordne sie ein.",
          reflection: {
            prompt:
              "Schreibe 4-6 Sätze: 1) Schildere eine Situation, in der kulturelle Unterschiede eine Rolle spielten (Praxis, Schule, Alltag). 2) Welche kulturellen Spezifika beeinflussten das Handeln — und wie? 3) Wo hast du gemerkt, dass auch DEINE eigene Sicht kulturell geprägt ist? 4) Wie hast du Respekt für die Kultur und die Rechte des Einzelnen zusammengebracht (oder würdest es)?",
            placeholder:
              "Die Situation war … Kulturell wirkte … Meine eigene Prägung zeigte sich, als … Respekt und Patientenrechte habe ich verbunden, indem …",
            systemPrompt:
              "Bewerte im Sandwich-Prinzip. Ordnet der Schüler kulturelle Spezifika konkreten Handlungsweisen zu (nicht nur 'war anders')? Reflektiert er die EIGENE Kulturgebundenheit (erkennt, dass die eigenen Werte nicht neutral sind)? Hält er die Balance zwischen kulturellem Respekt und Patientenrechten/Ethik (kein Kulturrelativismus, kein Bevormunden)? Lob für eine differenzierte Bloom-5-Reflexion. Niemals abwertend.",
          },
        },
      },
    },
    glossarBegriffe: ["kulturelle Kompetenz", "Kulturgebundenheit", "Selbstbestimmung"],
    karteikarten: [],
  },
];
