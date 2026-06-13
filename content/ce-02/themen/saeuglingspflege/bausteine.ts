// CE-02 Thema Säuglingspflege — Wissensbausteine (21 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/saeuglingspflege/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (starke Schüler)
// Stufe 2 = Hinweis (mittlere Schüler)
// Stufe 3 = Erklärung als ContentStep (Basis-Schüler)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_SAEUGLINGSPFLEGE_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: saeuglingshaut-besonderheiten (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-haut-besonderheiten",
    themaId: "saeuglingspflege",
    titel: "Besonderheiten der Säuglingshaut",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir die Haut eines Erwachsenen und die eines Neugeborenen nebeneinander vor. Was könnte anders sein — und warum könnte das für die Pflege wichtig sein?",
      antwort:
        "Neugeborenenhaut ist rund 60 % dünner als Erwachsenenhaut. Die Barrierefunktion und der Säureschutzmantel sind noch nicht ausgereift. Erst mit etwa 4 Wochen stellt sich der saure pH-Wert ein, der vor Keimen schützt. Die große Körperoberfläche im Verhältnis zum Gewicht führt zu schnellem Wärmeverlust. Für die Pflege: wenig, warm, mild.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Neugeborenenhaut ist rund 60 % dünner als Erwachsenenhaut. Die Barrierefunktion und der **Säureschutzmantel** sind noch nicht ausgereift. Erst mit etwa 4 Wochen stellt sich der saure pH-Wert ein, der vor Keimen schützt. (Hoehl/Kullick, 2019)",
      textB1:
        "Die Haut eines Babys ist viel dünner als deine. Sie schützt noch nicht gut vor Keimen und Kälte. Auch der Säureschutz auf der Haut ist erst mit etwa 4 Wochen fertig. Deshalb ist die Haut am Anfang sehr empfindlich.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-haut-besonderheiten",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Besonderheiten der Säuglingshaut",
          body: "Die Haut eines Neugeborenen unterscheidet sich grundlegend von der eines Erwachsenen. Sie ist dünner, durchlässiger und die **Barrierefunktion** ist noch unvollständig. Das bedeutet: Wasser, Wärme und auch Wirkstoffe aus Cremes oder Seifen werden schneller aufgenommen, Reizstoffe dringen leichter ein. Der **Säureschutzmantel** — ein dünner, leicht saurer Film aus Talg und Schweiß — ist bei der Geburt noch neutral und baut sich erst über rund vier Wochen auf. Weil dieser Schutz fehlt, können sich Keime leichter vermehren. Dazu kommt: Die **Körperoberfläche im Verhältnis zum Gewicht** ist groß, der Säugling kühlt schnell aus und verliert viel Flüssigkeit über die Haut. Für die Pflege heißt das: wenig, aber gezielt waschen — keine parfümierten Seifen, kein starkes Rubbeln. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Säureschutzmantel", "Hautbarriere"],
        },
        contentB1: {
          title: "Besonderheiten der Säuglingshaut",
          body: "Die Haut eines Babys ist sehr dünn und empfindlich. Sie schützt noch nicht gut. Wasser, Wärme und Stoffe aus Cremes gehen schnell hinein. Keime auch. Der **Säureschutzmantel** auf der Haut ist am Anfang nicht fertig. Er wächst erst in etwa 4 Wochen. Babys haben viel Haut im Verhältnis zu ihrem Gewicht. Deshalb kühlen sie schnell aus. Sie verlieren auch mehr Wasser über die Haut. Für dich als Pflegekraft heißt das: Wasche das Baby wenig. Nimm keine Seife mit Duftstoffen. Reibe nicht stark. Die Haut braucht Zeit, um stark zu werden.",
          glossarBegriffe: ["Säureschutzmantel", "Hautbarriere"],
        },
      },
    },
    glossarBegriffe: ["Säureschutzmantel", "Hautbarriere"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: saeuglingsbad-durchfuehrung (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-bad-durchfuehrung",
    themaId: "saeuglingspflege",
    titel: "Säuglingsbad — Vorbereitung und Durchführung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du sollst einen 4 Wochen alten Säugling baden. Welche drei Dinge würdest du **vor** dem Bad vorbereiten — und warum?",
      antwort:
        "Säuglingsbad: Wassertemperatur 37 °C, Raumtemperatur 24-26 °C, Badedauer maximal 5-10 Minuten. Bei gesunder Haut keine Badezusätze — Seifenreste irritieren den Säureschutzmantel. Alles in Reichweite legen, weil man das Kind nie allein lassen darf.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Säuglingsbad: Wassertemperatur **37 °C**, Raumtemperatur **24-26 °C**, Badedauer **maximal 5-10 Minuten**. Bei gesunder Haut keine Badezusätze — Seifenreste irritieren den Säureschutzmantel. Alles in Reichweite legen, bevor das Kind ins Wasser kommt.",
      textB1:
        "So badest du ein Baby sicher: Wasser **37 Grad**. Raum **24-26 Grad** warm. Nicht länger als **5-10 Minuten**. Keine Seife bei gesunder Haut. Leg alles bereit, bevor das Baby ins Wasser kommt. Dann kannst du es nicht allein lassen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-bad-durchfuehrung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Säuglingsbad — Vorbereitung und Durchführung",
          body: "Das Säuglingsbad folgt klaren Regeln, weil Babys schnell auskühlen und auf Seifen überreagieren können. **Vorbereitung**: Raumtemperatur 24-26 °C, Zugluft vermeiden. Wassertemperatur mit dem Ellenbogen oder einem Badethermometer prüfen — Ziel sind **37 °C**. Handtuch, Kleidung, Windel, Waschlappen müssen in Reichweite liegen, weil du das Kind **nie** unbeobachtet lassen darfst. **Durchführung**: Säugling mit dem Nacken-Rücken-Griff sicher halten (Kopf in der Armbeuge, mit derselben Hand den Oberarm umfasst). Langsam ins Wasser gleiten lassen, mit Gesicht und Kopf beginnen, dann Rumpf, zuletzt Genitalbereich. **Dauer maximal 5-10 Minuten**, sonst trocknet die Haut aus. **Nachbereitung**: sanft tupfen, nicht rubbeln, besonders Hautfalten gut abtrocknen. Bei gesunder Haut keine Badezusätze — sie stören den Säureschutz. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Nacken-Rücken-Griff"],
        },
        contentB1: {
          title: "Säuglingsbad — Vorbereitung und Durchführung",
          body: "So badest du ein Baby sicher. **Vorher**: Der Raum muss 24-26 Grad warm sein. Kein Zug. Das Wasser muss 37 Grad haben. Prüfe es mit einem Thermometer oder dem Ellenbogen. Leg alles bereit: Handtuch, Kleidung, Windel, Waschlappen. Du darfst das Baby **nie** allein lassen. **Beim Baden**: Halte das Baby mit dem Nacken-Rücken-Griff. Das heißt: Der Kopf liegt in deiner Armbeuge. Deine Hand hält den Oberarm. Tauche das Baby langsam ein. Wasche erst Gesicht und Kopf. Dann den Körper. Zuletzt den Windelbereich. Bade nur 5-10 Minuten. Sonst wird die Haut trocken. **Danach**: Tupfe sanft trocken. Nicht reiben.",
          glossarBegriffe: ["Nacken-Rücken-Griff"],
        },
      },
    },
    glossarBegriffe: ["Nacken-Rücken-Griff"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: vernix-caseosa (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-vernix",
    themaId: "saeuglingspflege",
    titel: "Vernix caseosa — Funktion und Pflege",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Neugeborenes hat auf der Haut einen weißlichen, schmierigen Belag. Eine Mutter fragt dich: 'Kann ich das abwaschen, das sieht unschön aus.' Wie antwortest du?",
      antwort:
        "Die Vernix caseosa ist ein natürlicher Hautschutz aus der Schwangerschaft. Sie schützt vor Austrocknung, hält warm und wirkt antimikrobiell. Die heutige Empfehlung: nicht abwaschen — sie zieht in 24-48 Stunden von selbst in die Haut ein.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die weiße, käseärtige Schicht heißt **Vernix caseosa** (Käseschmiere). Sie schützt die Neugeborenenhaut in den ersten Tagen vor Austrocknung und Keimen und wird **nicht abgewaschen**, sondern zieht von selbst ein.",
      textB1:
        "Der weiße Belag auf der Haut heißt **Vernix caseosa**. Auf Deutsch: Käseschmiere. Er schützt die Haut des Babys in den ersten Tagen. Du wäschst ihn nicht ab. Er zieht von selbst in die Haut ein. Das ist normal.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-03",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-vernix",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Vernix caseosa — Funktion und Pflege",
          body: "Die **Vernix caseosa** (lateinisch für 'käseartige Firnis') ist eine weißlich-fettige Schicht aus abgeschilferten Hautzellen, Talg und Lanugohaaren. Sie bildet sich ab der 20. Schwangerschaftswoche und schützt den Fetus im Fruchtwasser. Nach der Geburt hat sie drei wichtige Funktionen: Sie **schützt vor Wasserverlust** über die noch unreife Haut, **hält Wärme** und wirkt **antimikrobiell** gegen bestimmte Keime. Deshalb lautet die heutige Empfehlung: **Nicht abwaschen**. Die Vernix zieht innerhalb der ersten 24-48 Stunden von selbst in die Haut ein. Beim ersten Bad reicht es, starke Blut- oder Stuhlreste vorsichtig zu entfernen — die Vernix bleibt. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Vernix caseosa"],
        },
        contentB1: {
          title: "Vernix caseosa — Funktion und Pflege",
          body: "Die Vernix caseosa ist eine weiße, fettige Schicht auf der Haut des Neugeborenen. Auf Deutsch heißt sie **Käseschmiere**. Sie schützt das Baby schon im Bauch der Mutter. Nach der Geburt hat sie drei Aufgaben: Sie schützt die Haut vor dem Austrocknen. Sie hält warm. Sie hilft gegen Keime. Deshalb gilt heute: **Nicht abwaschen**. Die Schicht zieht in 1-2 Tagen von selbst in die Haut ein. Wenn beim ersten Bad Blut oder Kindspech auf der Haut ist, kannst du das vorsichtig entfernen. Die weiße Schicht bleibt.",
          glossarBegriffe: ["Vernix caseosa"],
        },
      },
    },
    glossarBegriffe: ["Vernix caseosa"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: nabelpflege (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-nabelpflege",
    themaId: "saeuglingspflege",
    titel: "Nabelpflege — Dry cord care",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Neugeborenes ist drei Tage alt. Der Nabelstumpf ist noch dran und sieht trocken aus. Eine Großmutter rät: 'Cremt den Nabel ein, damit er schön weich bleibt.' Was ist deine Antwort — und worauf achtest du bei jeder Versorgung?",
      antwort:
        "Die moderne Nabelpflege ist trocken und sauber (dry cord care): Nabelstumpf nicht eincremen, nicht desinfizieren bei unauffälligem Verlauf, nicht unter die Windel schlagen. Täglich kontrollieren auf Rötung, Schwellung, Sekret, Geruch. Abfall normal nach 5-15 Tagen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die moderne Nabelpflege ist **trocken und sauber**: Nabelstumpf **nicht eincremen**, nicht desinfizieren bei unauffälligem Verlauf, **nicht unter die Windel** schlagen. Täglich kontrollieren auf Rötung, Schwellung, Sekret, Geruch. Abfall normal nach 5-15 Tagen.",
      textB1:
        "Die Regel heute: Den Nabel **trocken halten**. Nicht eincremen. Keine Desinfektion, wenn alles normal aussieht. Die Windel unter dem Nabel lassen, nicht drüber. Jeden Tag schauen: Ist er rot? Nass? Riecht er? Der Nabel fällt nach 5-15 Tagen ab.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-nabelpflege",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Nabelpflege — Dry cord care",
          body: "Die Nabelpflege hat sich in den letzten Jahrzehnten grundlegend geändert. Die aktuelle Empfehlung lautet **dry cord care** (trockene Nabelpflege): Der Nabelstumpf wird **weder eingecremt noch routinemäßig desinfiziert**, wenn keine Infektionszeichen vorliegen. Grund: Desinfektionsmittel verzögern den natürlichen Trocknungs- und Abfallprozess. Wichtig sind drei Dinge: **Erstens** Händedesinfektion vor jeder Berührung. **Zweitens** den Nabel trocken und sauber halten — die Windel wird **unterhalb** des Nabels geschlossen, damit keine Feuchtigkeit oder Stuhl in die Wunde kommt. **Drittens** die **tägliche Kontrolle** auf Entzündungszeichen: Rötung, Schwellung, eitriges oder übelriechendes Sekret, Blutung. Bei Auffälligkeiten sofort Arztkontakt — eine **Omphalitis** (Nabelentzündung) kann sich beim Neugeborenen schnell ausbreiten. Der Nabelstumpf fällt normalerweise zwischen Tag 5 und 15 von selbst ab. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Omphalitis"],
        },
        contentB1: {
          title: "Nabelpflege — Dry cord care",
          body: "Die Regel heute heißt: **trockene Nabelpflege**. Das heißt: Du cremst den Nabel **nicht** ein. Du desinfizierst ihn **nicht**, wenn alles normal aussieht. Warum? Weil Desinfektion den Nabel nass macht. Er fällt dann später ab. So machst du es richtig: **Erstens** Hände desinfizieren. **Zweitens** den Nabel trocken halten. Die Windel schließt du **unter dem Nabel**. So kommt kein Urin oder Stuhl in die Wunde. **Drittens** jeden Tag kontrollieren: Ist der Nabel rot? Schwillt er an? Kommt Eiter oder ein komischer Geruch? Dann sofort den Arzt rufen. Der Nabel fällt normal nach 5-15 Tagen von selbst ab.",
          glossarBegriffe: ["Omphalitis"],
        },
      },
    },
    glossarBegriffe: ["Omphalitis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: omphalitis-warnzeichen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-omphalitis",
    themaId: "saeuglingspflege",
    titel: "Omphalitis — Warnzeichen und Handlung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Bei einem sieben Tage alten Säugling bemerkst du, dass die Haut um den Nabel rot und heiß ist. Aus der Nabelwunde tritt gelbliches Sekret. Was befürchtest du, und was tust du?",
      antwort:
        "Verdacht auf Omphalitis (Nabelentzündung). Warnzeichen: Rötung, Überwärmung, Schwellung, eitriges/übelriechendes Sekret, Blutung ohne Anlass. Gefahr: Sepsis. Sofortiger Arztkontakt — beim Neugeborenen nie abwarten.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Warnzeichen einer **Omphalitis** (Nabelentzündung): Rötung und Überwärmung der Nabelumgebung, Schwellung, **eitriges oder übelriechendes Sekret**, Blutung ohne Mobilisation, Fieber, verändertes Trinkverhalten. → **sofort Arztkontakt**.",
      textB1:
        "Zeichen für eine Nabelentzündung (Omphalitis): Die Haut um den Nabel ist **rot** und **warm**. Der Nabel ist **geschwollen**. Eiter oder ein komischer Geruch kommen heraus. Das Baby trinkt schlecht oder hat Fieber. → **Sofort Arzt rufen**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-omphalitis",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Omphalitis — Warnzeichen und Handlung",
          body: "Eine **Omphalitis** ist eine bakterielle Entzündung des Nabelstumpfs und/oder der umgebenden Bauchdecke. Sie ist beim Neugeborenen besonders gefährlich, weil die Erreger über die Nabelgefäße schnell in den Blutkreislauf gelangen und eine **Sepsis** auslösen können. Klassische Zeichen sind: **Rötung und Überwärmung** der Haut rund um den Nabel (periumbilikal), **Schwellung und Verhärtung**, **eitriges oder übelriechendes Sekret**, **Blutung ohne äußeren Anlass**. Systemische Zeichen: Fieber, Trinkunlust, graue Hautfarbe, Berührungsempfindlichkeit. Die Handlungskette ist eindeutig: **Bei Verdacht sofort Arztkontakt**. Nie 'abwarten' bei einem Neugeborenen — die Zeit ist bei einer Sepsis kritisch. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Omphalitis"],
        },
        contentB1: {
          title: "Omphalitis — Warnzeichen und Handlung",
          body: "Eine Omphalitis ist eine Entzündung am Nabel. Sie ist gefährlich, weil die Keime schnell ins Blut gehen können. Dann bekommt das Baby eine **Sepsis** — eine Blutvergiftung. Das kann lebensgefährlich sein. So erkennst du die Gefahr: Die Haut um den Nabel ist **rot** und **warm**. Der Nabel ist **dick**. Eiter oder schlechter Geruch sind da. Der Nabel blutet ohne Grund. Das Baby trinkt schlecht. Es hat Fieber oder sieht grau aus. **Die Regel ist klar**: Bei diesen Zeichen musst du **sofort einen Arzt rufen**. Warte nicht bis morgen. Bei Babys zählt jede Stunde.",
          glossarBegriffe: ["Omphalitis"],
        },
      },
    },
    glossarBegriffe: ["Omphalitis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: wickeln-ablauf (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-wickeln",
    themaId: "saeuglingspflege",
    titel: "Wickeln — Ablauf und Infant Handling",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du willst ein Baby wickeln. Warum könnte es aus Sicht der Kinästhetik (Infant Handling) wichtig sein, das Baby **langsam** und mit **viel Körperkontakt** zu bewegen — statt es schnell und mit ausgestreckten Beinen anzuheben?",
      antwort:
        "Infant Handling: langsame, angekündigte Bewegungen geben Sicherheit und ermöglichen dem Baby, die eigene Bewegung zu spüren. Nie an den Beinen hochheben — das belastet Hüfte und Wirbelsäule und ist ein Kontrollverlust für das Kind.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Beim Wickeln: Windel unterlegen, mit warmem Wasser und Waschlappen reinigen, bei Mädchen **von vorne nach hinten**, **Ölpflege statt Feuchttücher** bei trockener Haut. Infant-Handling: langsam, mit Körperkontakt, kein Anheben an den Beinen. (Hoehl/Kullick, 2019)",
      textB1:
        "So wickelst du ein Baby: Neue Windel drunter. Mit warmem Wasser putzen. Bei Mädchen **von vorne nach hinten** wischen. Bei trockener Haut lieber **Öl statt Feuchttücher**. Bewege das Baby **langsam**, bleib mit den Händen am Körper. Nie an den Beinen hochheben.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-06",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-wickeln",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Wickeln — Ablauf und Infant Handling",
          body: "Wickeln ist mehr als ein Hygienevorgang — es ist **Beziehungsarbeit und Bewegungslernen**. **Vorbereitung**: Wickelplatz warm, alle Utensilien griffbereit, Hände desinfizieren. Eine neue, offene Windel wird **bereits unter das Gesäß** gelegt, bevor die alte geöffnet wird — falls das Kind uriniert oder stuhlt. **Reinigung**: warmes Wasser und weicher Waschlappen sind bei gesunder Haut erste Wahl. **Bei Mädchen** grundsätzlich **von der Harnröhre Richtung After** (vorne nach hinten), um Harnwegsinfekte zu vermeiden. **Bei Jungen** Vorhaut **nicht zurückziehen**. **Feuchttücher** enthalten oft Duftstoffe und Alkohol und reizen empfindliche Haut — lieber **Öl auf Watte** oder reines Wasser. **Kinästhetik (Infant Handling)**: Das Kind wird **gerollt, nicht gehoben**. Eine Hand umfasst Schulter und Kopf, die andere das Becken. Langsame, angekündigte Bewegungen geben Sicherheit, das Baby spürt seine eigene Bewegung und lernt mit. Nie an den Beinen hochziehen — das belastet Hüfte und Wirbelsäule. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Infant Handling"],
        },
        contentB1: {
          title: "Wickeln — Ablauf und Infant Handling",
          body: "Wickeln ist nicht nur Saubermachen. Es ist auch eine Zeit für Nähe. **So gehst du vor**: Der Wickelplatz muss warm sein. Leg alles bereit. Desinfiziere deine Hände. Leg eine neue, offene Windel **unter das Baby**, bevor du die alte aufmachst. Dann kann nichts danebengehen. Mach mit **warmem Wasser und einem Waschlappen** sauber. Bei Mädchen wischst du **von vorne nach hinten**. Das schützt vor Blasenentzündung. Bei Jungen: Vorhaut **nicht** zurückziehen. Feuchttücher haben oft Duftstoffe. Besser ist **Öl auf Watte** oder Wasser. **Bewege das Baby langsam**. Rolle es zur Seite, heb es nicht an den Beinen hoch. Eine Hand hält Kopf und Schulter. Die andere das Becken. So lernt das Baby seine Bewegung.",
          glossarBegriffe: ["Infant Handling"],
        },
      },
    },
    glossarBegriffe: ["Infant Handling"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: windeldermatitis-ursachen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-windeldermatitis-ursachen",
    themaId: "saeuglingspflege",
    titel: "Windeldermatitis — Ursachen und Pathomechanismus",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Baby hat am Po eine rote, entzündete Haut. Die Mutter fragt: 'Wie kann das sein, ich wickle doch oft?' Welche drei Ursachen kommen für eine Windeldermatitis in Frage?",
      antwort:
        "Die Windeldermatitis entsteht durch ein Zusammenspiel aus Feuchtigkeit, Reibung und Stuhl-Enzymen. Unter Windeln steigt der pH, die Haut quillt auf, die Barriere bricht. Durchfall, Antibiotika und falsche Reinigung sind häufige Auslöser.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Windeldermatitis entsteht durch ein Zusammenspiel aus **Feuchtigkeit, Reibung und Stuhl-Enzymen**. Unter Windeln steigt der pH, die Haut quillt auf, die Barriere bricht. Durchfall, Antibiotika und falsche Reinigung sind häufige Auslöser. (DGKJ-Leitlinie 2021)",
      textB1:
        "Warum entsteht wunder Po? Drei Gründe zusammen: **Feuchtigkeit** (Urin), **Reibung** (Windel) und **Stuhl-Enzyme** (machen die Haut kaputt). Die Haut quillt auf. Sie wird dünn. Sie entzündet sich. Durchfall oder Antibiotika machen es schlimmer.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGKJ-Leitlinie 2021"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-windeldermatitis-ursachen",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Windeldermatitis — Ursachen und Pathomechanismus",
          body: "Die **Windeldermatitis** ist die häufigste Hauterkrankung im Säuglingsalter. Sie entsteht durch ein Zusammenspiel mehrerer Faktoren. **Erstens**: dauerhafte Feuchtigkeit durch Urin und Stuhl macht die **Hautbarriere durchlässig** — die Haut quillt auf und verliert ihren Schutz. **Zweitens**: der **pH-Wert** in der Windel steigt durch Harnstoff-Abbau ins Alkalische, was die **Verdauungsenzyme des Stuhls aktiviert**. Diese Enzyme (Proteasen, Lipasen) greifen dann die aufgeweichte Haut an. **Drittens**: **Reibung** durch Windel und Hautfalten verstärkt die mechanische Belastung. Risikoerhöhend wirken Durchfall (viele Enzyme), Antibiotika-Therapie (Hefepilz-Wachstum), seltenes Wickeln und scharfe Feuchttücher. Typisch ist eine **scharf begrenzte Rötung** im Windelbereich, oft mit Papeln. (DGKJ-Leitlinie 2021)",
          glossarBegriffe: ["Windeldermatitis"],
        },
        contentB1: {
          title: "Windeldermatitis — Ursachen und Pathomechanismus",
          body: "Ein wunder Po (Windeldermatitis) ist die häufigste Hautkrankheit bei Babys. **Drei Dinge zusammen** machen die Haut kaputt: **Erstens**: Die Haut ist lange nass. Urin und Stuhl machen die Haut weich. Dann ist der Schutz weg. **Zweitens**: Der Urin wird in der Windel scharf. Er macht die Enzyme im Stuhl aktiv. Diese Enzyme fressen die weiche Haut an. **Drittens**: Die Windel reibt an der Haut. Auch das verletzt sie. **Schlimmer wird es durch**: Durchfall (mehr Enzyme), Antibiotika (dann kommt Pilz), zu selten wickeln, scharfe Feuchttücher. Typisch: rote Stellen nur dort, wo die Windel ist.",
          glossarBegriffe: ["Windeldermatitis"],
        },
      },
    },
    glossarBegriffe: ["Windeldermatitis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: windeldermatitis-massnahmen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-windeldermatitis-massnahmen",
    themaId: "saeuglingspflege",
    titel: "Windeldermatitis — Maßnahmen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 10 Monate altes Baby hat seit zwei Tagen eine Windeldermatitis: rote Haut, aber noch keine offenen Stellen. Welche fünf konkreten Maßnahmen leitest du ein — und welche **grundlegende Regel** verbindet sie alle?",
      antwort:
        "Häufiger wickeln, Windelpausen/Luft, Wasser + Waschlappen, Zinkpaste dünn, kein Puder. Regel: Nässe raus, Reiz weg, Schutz drauf.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei Windeldermatitis: **häufiger wickeln**, **offen strampeln lassen** (mehrmals täglich), sanft mit Wasser reinigen, **Zinkpaste dünn** auftragen, Feuchttücher meiden. Keine Puder wegen Aspirationsgefahr. Bei Pilzverdacht: Antimykotikum (Arzt).",
      textB1:
        "So hilfst du bei wundem Po: **Oft wickeln**. **Luft ran**: Windel weglassen, Baby strampeln lassen. **Sanft waschen**. **Zinkpaste dünn** auftragen. Keine Feuchttücher. Keinen Puder (gefährlich beim Einatmen). Bei Pilz: Salbe vom Arzt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGKJ-Leitlinie 2021"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-windeldermatitis-massnahmen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Windeldermatitis — Maßnahmen",
          body: "Die Behandlung der Windeldermatitis folgt dem Prinzip: **Nässe raus, Reiz weg, Schutz drauf**. Fünf Bausteine bilden das Standardvorgehen. **Erstens** die **Frequenz**: mindestens **alle 2-3 Stunden wickeln**, bei Durchfall nach jedem Stuhlgang. **Zweitens** die **Freiheit**: mehrmals täglich Windelpausen von 15-30 Minuten, das Kind offen strampeln lassen — Luft ist die beste Medizin. **Drittens** die **Reinigung**: nur **warmes Wasser** und weicher Waschlappen, **keine Feuchttücher** mit Duft- und Konservierungsstoffen. **Viertens** die **Hautpflege**: eine **dünne Schicht Zinkpaste** (z.B. Penaten, Bepanthol) als physikalische Barriere. Dick aufgetragen behindert sie die Atmung der Haut. **Fünftens** **keine Puder** — Aspirationsgefahr, Klumpenbildung in Falten. Bei scharf randbegrenzter, knallroter Rötung mit Satellitenläsionen besteht **Candida-Verdacht** und der Arzt verordnet ein Antimykotikum. Heilt die Rötung nach 3-5 Tagen nicht oder verschlimmert sich: Arztkontakt. (DGKJ-Leitlinie 2021)",
          glossarBegriffe: ["Windeldermatitis"],
        },
        contentB1: {
          title: "Windeldermatitis — Maßnahmen",
          body: "Bei einem wunden Po hilfst du mit **fünf einfachen Schritten**. Die Regel dahinter: **Weniger Nässe, weniger Reizung, mehr Schutz**. **Erstens**: **Oft wickeln**. Alle 2-3 Stunden. Bei Durchfall nach jedem Stuhl. **Zweitens**: **Luft dranlassen**. Lass das Baby mehrmals am Tag 15-30 Minuten ohne Windel strampeln. Luft heilt. **Drittens**: **Sanft waschen** mit warmem Wasser und einem weichen Lappen. **Keine Feuchttücher**, die haben oft scharfe Stoffe. **Viertens**: **Zinkpaste dünn** auftragen, zum Beispiel Penaten oder Bepanthol. Dick ist **nicht** besser. **Fünftens**: **Keinen Puder benutzen**. Das Baby kann es einatmen. Das ist gefährlich. Wenn die Haut **knallrot** wird mit kleinen Punkten drum herum: **zum Arzt**. Dann ist es vielleicht ein Pilz.",
          glossarBegriffe: ["Windeldermatitis"],
        },
      },
    },
    glossarBegriffe: ["Windeldermatitis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: thermoregulation-saeugling (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-thermoregulation",
    themaId: "saeuglingspflege",
    titel: "Thermoregulation beim Säugling",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum kann ein nackter Säugling im 22 °C warmen Raum innerhalb weniger Minuten auskühlen, während ein Erwachsener das kaum merken würde? Überlege zwei körperliche Unterschiede.",
      antwort:
        "Die Auskühlungsneigung hat drei Gründe: großes Verhältnis Körperoberfläche zu Gewicht, wenig Unterhautfett und unreife zentrale Temperaturregulation ohne Zittermechanismus. Die Wärme entsteht über das braune Fettgewebe, das sich schnell erschöpft. Für die Pflege: Raum 24-26 °C, zügig arbeiten, sofort anziehen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Säuglinge haben eine **große Körperoberfläche bezogen auf das Gewicht**, wenig Unterhautfettgewebe und eine unreife zentrale Temperaturregulation. Sie kühlen beim Wickeln und Baden schnell aus. Warmhalten bedeutet: Raum 24-26 °C, zügiges Arbeiten, sofort anziehen.",
      textB1:
        "Ein Baby kühlt schnell aus, weil drei Dinge zusammenkommen: Viel **Haut im Verhältnis zum Gewicht**. Wenig **Fett unter der Haut**. Das **Gehirn** kann die Temperatur noch nicht gut regeln. Deshalb: Raum warm halten, schnell arbeiten, sofort anziehen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-09",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-thermoregulation",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Thermoregulation beim Säugling",
          body: "Die **Thermoregulation** beim Neugeborenen ist aus drei Gründen labil. **Erstens** das Verhältnis **Körperoberfläche zu Körpergewicht**: beim Neugeborenen rund dreimal so hoch wie beim Erwachsenen, dadurch entsprechend hoher Wärmeverlust. **Zweitens** die **geringe Isolationsschicht**: wenig weißes Unterhautfettgewebe, keine dicke Körperbehaarung. **Drittens** die **unreife zentrale Steuerung** im Hypothalamus — Zittern als Wärmeproduktion funktioniert bei Neugeborenen nur eingeschränkt, die Wärme wird über das **braune Fettgewebe** (Thermogenese) erzeugt, das sich aber schnell erschöpft. Konsequenz für die Pflege: **Raumtemperatur 24-26 °C** beim Wickeln und Baden, Zugluft vermeiden, Oberkörper bedecken während man den Windelbereich versorgt, warme Hände haben, sofort anziehen nach dem Bad. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Thermoregulation", "braunes Fettgewebe"],
        },
        contentB1: {
          title: "Thermoregulation beim Säugling",
          body: "Babys kühlen schnell aus. Warum? Drei Gründe. **Erstens**: Sie haben **viel Haut** im Verhältnis zu ihrem Gewicht. Ein Erwachsener hat wenig Haut und viel Körper. Ein Baby ist umgekehrt. Viel Haut = viel Wärmeverlust. **Zweitens**: Babys haben **wenig Fett** unter der Haut. Fett ist wie ein Mantel. Babys haben diesen Mantel noch nicht. **Drittens**: Das **Gehirn** kann die Temperatur noch nicht gut steuern. Babys können nicht zittern wie du. Sie produzieren Wärme aus dem **braunen Fett**. Aber das ist schnell leer. **Für dich in der Pflege heißt das**: Raum 24-26 Grad. Nicht lange auspacken. Bauch warmhalten beim Wickeln. Sofort anziehen nach dem Bad.",
          glossarBegriffe: ["Thermoregulation", "braunes Fettgewebe"],
        },
      },
    },
    glossarBegriffe: ["Thermoregulation", "braunes Fettgewebe"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: milchschorf-vs-ekzem (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-milchschorf-ekzem",
    themaId: "saeuglingspflege",
    titel: "Gneis vs. Milchschorf — Differenzierung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Mutter zeigt dir gelbliche, schuppige Beläge auf der Kopfhaut ihres 2 Monate alten Babys und fragt: 'Ist das schon ein Ekzem? Muss ich zum Arzt?' Wie unterscheidest du **Gneis/Milchschorf** von einem **atopischen Ekzem**?",
      antwort:
        "Gneis (Kopfgneis, seborrhoisches Ekzem): fettig-gelblich, kein Juckreiz, harmlos, selbstlimitierend, Öl + weicher Kamm. Milchschorf: rot, nässend, juckend — Frühform des atopischen Ekzems (Neurodermitis), Arztkontakt nötig.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Gneis (Kopfgneis)** = fettige, gelbliche Schuppen, meist harmlos, heilt spontan — **nicht** identisch mit dem atopischen Ekzem. **Milchschorf** ist im Sprachgebrauch oft eine frühe Form des **atopischen Ekzems**: rot, nässend, juckend.",
      textB1:
        "**Gneis** = fettige, gelbe Schuppen am Kopf. Das ist meist **harmlos**. Es geht von selbst weg. **Milchschorf** ist oft der Anfang einer anderen Krankheit: **atopisches Ekzem (Neurodermitis)**. Das ist **rot, nass, juckt**. Unterschied: fettig vs. trocken/rot.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-10",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-milchschorf-ekzem",
        tag: "pflege",
        contentC1: {
          title: "Gneis vs. Milchschorf — Differenzierung",
          body: "Die Begriffe werden umgangssprachlich häufig verwechselt. **Gneis (Kopfgneis, seborrhoisches Säuglingsekzem)** erscheint meist in den ersten Lebenswochen: fettige, gelbliche bis bräunliche Schuppen, gut haftend, vor allem auf der Kopfhaut, auch in Augenbrauen und Nasolabialfalten. Er juckt **nicht**, das Kind ist unauffällig. Gneis ist **selbstlimitierend** — verschwindet bis zum Ende des ersten Lebensjahres. **Pflege**: Vorsichtig mit Öl (z.B. Mandelöl) einweichen, dann mit weichem Babykamm lösen. Nicht kratzen oder abreiben. Der **Milchschorf** hingegen ist eine Frühform des **atopischen Ekzems (Neurodermitis)**: rot, nässend, schuppig, stark **juckend**, oft beginnt er an den Wangen und auf der Kopfhaut. Das Baby ist unruhig, schläft schlecht, reibt am Kopf. **Behandlung** erfordert ärztliche Abklärung und meist rückfettende Basispflege. Die Abgrenzung ist klinisch wichtig: Gneis braucht Geduld, atopisches Ekzem braucht einen Plan. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Gneis", "Milchschorf"],
        },
        contentB1: {
          title: "Gneis vs. Milchschorf — Differenzierung",
          body: "Die Wörter werden oft verwechselt. **Gneis** (auch Kopfgneis) kommt in den ersten Wochen. Es sieht aus wie **gelbe, fettige Schuppen** auf dem Kopf. Auch an den Augenbrauen. Es **juckt nicht**. Das Baby ist ganz normal. Gneis geht von selbst weg. Meistens im ersten Lebensjahr. Was hilft? **Öl** (zum Beispiel Mandelöl) drauf. Einwirken lassen. Dann mit weichem Kamm lösen. **Milchschorf** ist etwas anderes. Oft ist das der **Anfang einer Neurodermitis (atopisches Ekzem)**. Die Haut ist **rot, nass, schuppig, und es juckt stark**. Oft an den Wangen. Das Baby ist unruhig und schläft schlecht. Dann **musst du zum Arzt**. Der Unterschied: Gneis ist **fettig und harmlos**. Milchschorf ist **rot und unangenehm**.",
          glossarBegriffe: ["Gneis", "Milchschorf"],
        },
      },
    },
    glossarBegriffe: ["Gneis", "Milchschorf"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: stillen-who-empfehlung (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-stillen-empfehlung",
    themaId: "saeuglingspflege",
    titel: "Stillen — WHO-Empfehlung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine werdende Mutter fragt: 'Wie lange soll ich stillen? Bis wann darf es nur Muttermilch sein, ab wann Beikost?' Wie fasst du die heutige WHO-Empfehlung in drei Punkten zusammen?",
      antwort:
        "Die WHO empfiehlt (2023): 6 Monate ausschließlich stillen. Ab 6 Monaten schrittweise Beikost. Weiterstillen bis zum 2. Geburtstag oder länger, solange Mutter und Kind es möchten.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die WHO empfiehlt **ausschließliches Stillen in den ersten 6 Monaten**. Danach **schrittweise Beikost einführen**, das Stillen jedoch **bis zum 2. Geburtstag oder darüber hinaus** fortsetzen, solange Mutter und Kind es wünschen. (WHO, 2023)",
      textB1:
        "Die WHO sagt: **6 Monate nur Muttermilch**. Danach kommt **Beikost** (Brei, kleine Stückchen) dazu. Aber **weiter stillen** — bis das Kind 2 Jahre alt ist, oder auch länger. Solange Mutter und Kind es wollen. (WHO, 2023)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-11",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["WHO 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-stillen-empfehlung",
        tag: "pflege",
        displayFormat: "news",
        contentC1: {
          title: "Stillen — WHO-Empfehlung",
          body: "Die **WHO-Empfehlung** aus der Global Strategy for Infant and Young Child Feeding definiert drei Stufen. **Erstens: ausschließliches Stillen in den ersten sechs Lebensmonaten.** 'Ausschließlich' heißt **nur Muttermilch, keine Zufütterung** von Wasser, Tee oder Formulanahrung — außer bei medizinischer Indikation. **Zweitens: Einführung von Beikost ab dem 6. Monat.** Die Nieren, der Darm und die Motorik sind dann reif genug, um neue Nahrung zu verarbeiten. **Drittens: Weiterstillen** parallel zur Beikost **bis zum 2. Geburtstag oder darüber hinaus**, solange Mutter und Kind es möchten. Begründet wird das mit dem nachgewiesenen Nutzen: reduziertes Infektions- und Allergierisiko, bessere kognitive Entwicklung, geringeres mütterliches Brustkrebs-Risiko. Die Nationale Stillkommission (2022) schließt sich dieser Empfehlung an. (WHO, 2023)",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Stillen — WHO-Empfehlung",
          body: "Die WHO hat drei klare Regeln. **Erste Regel: 6 Monate nur Muttermilch.** Das bedeutet: kein Wasser, kein Tee, keine Formulanahrung. Nur die Brust. Außer der Arzt sagt etwas anderes. **Zweite Regel: Ab 6 Monaten Beikost.** Die Nieren und der Darm sind dann groß genug. Das Baby kann dann auch sitzen und kauen. Beikost heißt: Gemüsebrei, Obstbrei, dann kleine Stückchen. **Dritte Regel: Weiter stillen bis 2 Jahre** — oder länger. Solange Mutter und Kind wollen. Warum? Muttermilch macht das Baby gesünder. Weniger Infekte. Weniger Allergien. Auch die Mutter hat weniger Brustkrebs-Risiko.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: sids-praevention (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-sids-praevention",
    themaId: "saeuglingspflege",
    titel: "SIDS-Prävention — sichere Schlafumgebung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Ehepaar richtet gerade das Kinderzimmer ein. Sie fragen dich: 'Was können wir tun, damit unser Baby sicher schläft?' Nenne fünf Empfehlungen, die **heute als evidenzbasiert gelten** — und erkläre kurz, warum sie wirken.",
      antwort:
        "SIDS-Prävention nach AAP (2022): Rückenlage zum Schlafen, Elternzimmer ohne Bedsharing, fester Untergrund ohne weiche Decken/Kissen/Nestchen, Rauchfreiheit in Schwangerschaft und Umgebung, Schlafsack statt Decke, Raumtemperatur 16-18 °C. Durch diese Empfehlungen ist SIDS seit den 90ern um über 80 % gesunken.",
    },
    stufe2: {
      typ: "hinweis",
      text: "SIDS-Prävention nach **AAP (2022)**: **Rückenlage** zum Schlafen, im **Elternzimmer** ohne Bettgemeinschaft, **fester Untergrund** ohne weiche Decken/Kissen/Nestchen, **Rauchfreiheit** in Schwangerschaft und Umgebung, **Schlafsack** statt Decke, **passende Raumtemperatur** (16-18 °C).",
      textB1:
        "Sicheres Schlafen gegen **SIDS** (plötzlicher Kindstod): **Auf den Rücken** legen. **Im Elternzimmer** schlafen, aber **im eigenen Bett**. **Feste Matratze**, keine weichen Kissen oder Decken. **Rauchfrei**. **Schlafsack** statt Decke. **Raum 16-18 Grad** — nicht zu warm.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["AAP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-sids-praevention",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "SIDS-Prävention — sichere Schlafumgebung",
          body: "**SIDS** (Sudden Infant Death Syndrome / plötzlicher Kindstod) ist der plötzliche, unerklärte Tod eines scheinbar gesunden Säuglings im ersten Lebensjahr, meist im Schlaf. Durch konsequente Präventions-Botschaften sind die Zahlen seit den 1990er-Jahren in Deutschland **um über 80 % gesunken**. Die **AAP-Empfehlungen 2022** bündeln die Evidenz: **Erstens** die **Rückenlage** zum Schlafen — Bauchlage erhöht das Risiko mehrfach. **Zweitens** das **Elternzimmer ohne Bettgemeinschaft (Roomsharing, kein Bedsharing)** mindestens im ersten halben Jahr. **Drittens** ein **fester Untergrund** (Babymatratze), **kein Nestchen, keine Stofftiere, keine losen Decken oder Kissen**. **Viertens** eine **rauchfreie Umgebung** in Schwangerschaft und danach. **Fünftens** ein **Schlafsack** statt Decke. **Raumtemperatur 16-18 °C**, Überwärmung vermeiden. Zusätzlich **schützend**: Stillen und Schnuller zum Einschlafen. (AAP 2022)",
          glossarBegriffe: ["SIDS"],
        },
        contentB1: {
          title: "SIDS-Prävention — sichere Schlafumgebung",
          body: "**SIDS** heißt: Ein Baby stirbt plötzlich im Schlaf. Seit den 1990er-Jahren gibt es viel weniger SIDS-Fälle — **über 80 % weniger**. Die **AAP (2022)** empfiehlt fünf Regeln. **Erste Regel: Rückenlage** zum Schlafen. Nicht auf den Bauch oder die Seite. **Zweite Regel: Im Elternzimmer** schlafen, aber **im eigenen Bettchen**. Nicht zusammen im Elternbett. **Dritte Regel: Feste Matratze**. Keine weichen Kissen. Keine Kuscheltiere. Keine losen Decken. **Vierte Regel: Kein Rauch**. Nicht beim Baby. Auch nicht in der Schwangerschaft. **Fünfte Regel: Schlafsack** statt Decke. **Raum 16-18 Grad**. Nicht zu warm. **Extra-Schutz**: Stillen und Schnuller helfen auch.",
          glossarBegriffe: ["SIDS"],
        },
      },
    },
    glossarBegriffe: ["SIDS"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: u-untersuchungen (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-u-untersuchungen",
    themaId: "saeuglingspflege",
    titel: "U-Untersuchungen — Früherkennungsprogramm",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein frischgebackener Vater zeigt dir stolz das **gelbe Heft** seines Babys. Er fragt: 'Was sind die **U-Untersuchungen** eigentlich, und warum so viele im ersten Jahr?' Erkläre ihm den Zweck und die Rolle der Pflegekraft.",
      antwort:
        "Die U-Untersuchungen (U1-U9, J1) sind gesetzlich verankerte Früherkennungsuntersuchungen nach § 26 SGB V. Im ersten Lebensjahr 6 Termine: U1 direkt nach Geburt bis U6 im 10.-12. Monat. Geprüft werden Wachstum, Entwicklung, Sinne, Impfungen. Dokumentation im gelben Heft.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **U-Untersuchungen (U1-U9, J1)** sind gesetzlich verankerte **Früherkennungsuntersuchungen** nach § 26 SGB V und der Kinder-Richtlinie des G-BA. **U1 direkt nach Geburt**, **U2 am 3.-10. Tag**, **U3 bis U6 im 1. Lebensjahr**. Ziel: Entwicklung, Risiken, Impfungen prüfen.",
      textB1:
        "Die **U-Untersuchungen** sind wichtige Arzt-Termine für Babys und Kinder. Sie heißen U1 bis U9 und J1. Sie sind im Gesetz vorgeschrieben (§ 26 SGB V). **U1** ist direkt nach der Geburt. **U2** mit 3-10 Tagen. **U3-U6** im ersten Jahr. Man prüft Wachstum, Gesundheit, Impfungen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["§ 26 SGB V", "G-BA Kinder-Richtlinie 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-u-untersuchungen",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "U-Untersuchungen — Früherkennungsprogramm",
          body: "Die **U-Untersuchungen** sind ein staatlich organisiertes Früherkennungsprogramm für Kinder, rechtlich verankert in **§ 26 SGB V** und inhaltlich durch die **Kinder-Richtlinie des G-BA** geregelt. Sie umfassen **U1 bis U9 und J1**, insgesamt zehn Termine vom ersten Lebenstag bis zum Jugendalter. **Im ersten Lebensjahr** liegen besonders viele: **U1** direkt nach Geburt (Apgar, Vitalzeichen), **U2** zwischen 3. und 10. Tag, **U3** in der 4.-5. Woche, **U4** im 3.-4. Monat, **U5** im 6.-7. Monat, **U6** im 10.-12. Monat. Geprüft werden Wachstum (Gewicht, Länge, Kopfumfang in Perzentilen), motorische und sensorische Entwicklung, Hör- und Sehvermögen, Impfstatus, körperliche und soziale Entwicklung. Die Befunde werden im **gelben Heft** (Kinder-Untersuchungsheft) dokumentiert. **Rolle der Pflegekraft**: Eltern motivieren, Termine nicht zu versäumen, Auffälligkeiten zwischen den Terminen melden, gelbes Heft zu jedem Termin mitgeben.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "U-Untersuchungen — Früherkennungsprogramm",
          body: "Die U-Untersuchungen sind **wichtige Arzt-Termine** für Kinder. Sie stehen im Gesetz (**§ 26 SGB V**). Es gibt U1 bis U9, plus J1 (mit 12-14 Jahren). **Im ersten Lebensjahr** hat ein Baby **6 Termine**: **U1**: direkt nach der Geburt. **U2**: Tag 3 bis 10. **U3**: Woche 4-5. **U4**: Monat 3-4. **U5**: Monat 6-7. **U6**: Monat 10-12. Was wird geprüft? Wie schwer und groß ist das Kind? Wächst der Kopf normal? Hört und sieht es gut? Bewegt es sich richtig? Sind die Impfungen da? Alles wird ins **gelbe Heft** eingetragen. Deine Aufgabe als Pflegekraft: Eltern erinnern, das Heft mitgeben, Probleme melden.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: pflegeanamnese-saeugling (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-anamnese",
    themaId: "saeuglingspflege",
    titel: "Pflegeanamnese beim Säugling",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Mutter bringt ihr 6 Wochen altes Baby in deine Einrichtung. Welche **fünf Bereiche** würdest du in der Pflegeanamnese gezielt erfragen — und warum sind gerade diese bei einem Säugling entscheidend?",
      antwort:
        "Sechs Bereiche: Geburtsanamnese (Schwangerschaft, Geburt, Frühgeborenheit), Ernährung (gestillt/Flasche, Menge, Häufigkeit), Ausscheidung (nasse Windeln, Stuhl), Schlaf (Ort, Lage, Dauer), U-Untersuchungen + Impfstatus, Allergien, Entwicklungsstand. Die Eltern sind die Informationsquelle — gezielt und konkret fragen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflegeanamnese Säugling: **Geburtsanamnese** (Schwangerschaft, Geburt, Frühgeborenheit), **Ernährung** (gestillt/Flasche, Menge, Häufigkeit), **Ausscheidung** (nasse Windeln, Stuhl), **Schlaf** (Ort, Lage, Dauer), **U-Untersuchungen + Impfstatus**, **Allergien**, **Entwicklungsstand**.",
      textB1:
        "Das fragst du bei einem Baby ab: **Geburt** (war sie normal? Frühgeboren?). **Essen** (Brust oder Flasche? Wie viel?). **Windeln** (wie oft nass, wie ist der Stuhl?). **Schlaf** (wo schläft es, wie lange?). **Arzt-Termine und Impfungen**. **Allergien**. **Entwicklung**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-14",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-anamnese",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pflegeanamnese beim Säugling",
          body: "Die **Pflegeanamnese** beim Säugling unterscheidet sich von der Erwachsenenanamnese: Das Kind erzählt nicht selbst, die **Eltern sind die Informationsquelle**, und viele Bereiche, die beim Erwachsenen nebensächlich wären, sind hier zentral. **Sechs Bereiche** gehören fest dazu. **Erstens die Geburtsanamnese**: Schwangerschaftswoche, Geburtsmodus (spontan, Kaiserschnitt), Geburtsgewicht, Apgar, Auffälligkeiten, Frühgeborenheit. **Zweitens die Ernährung**: Gestillt (Häufigkeit, Dauer) oder Flasche (Art der Nahrung, Menge, Trinktempo), Beikost-Beginn, Ess-Auffälligkeiten. **Drittens die Ausscheidung**: Zahl nasser Windeln pro Tag (Indikator für Flüssigkeitszufuhr), Stuhlgang-Häufigkeit, -Konsistenz und -Farbe. **Viertens der Schlaf**: Ort (eigenes Bett, Elternzimmer), Lage (Rücken?), Schlafdauer, Einschlafrituale. **Fünftens U-Untersuchungen und Impfstatus**: Welche wurden gemacht? Gelbes Heft dabei? **Sechstens Allergien, Medikamente, Entwicklungsstand**: Motorik, Sprache, Sozialverhalten passend zum Alter? Die Anamnese ist die Basis für einen sicheren Pflegeplan. (Hoehl/Kullick, 2019)",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Pflegeanamnese beim Säugling",
          body: "Bei einem Baby fragst du die **Eltern**, weil das Baby noch nicht spricht. **Sechs wichtige Bereiche**: **Erstens die Geburt**: War es eine normale Geburt oder Kaiserschnitt? Wie viele Wochen? Wie schwer? Gab es Probleme? **Zweitens das Essen**: Stillt die Mutter? Wie oft? Oder Flasche? Welche Nahrung? Gibt es schon Beikost? **Drittens die Windeln**: Wie oft nass am Tag? Wie oft Stuhl? Wie sieht der Stuhl aus? Das zeigt, ob das Baby genug trinkt. **Viertens der Schlaf**: Wo schläft das Baby? Auf dem Rücken? Wie lange? **Fünftens die Arzt-Termine und Impfungen**: Sind alle U-Termine gemacht? Bring das gelbe Heft mit. **Sechstens Besonderes**: Allergien? Medikamente? Entwicklung normal? Bewegt es sich passend zum Alter?",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: nacken-ruecken-griff (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-nacken-ruecken-griff",
    themaId: "saeuglingspflege",
    titel: "Nacken-Rücken-Griff",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum reicht eine Hand unter dem Po nicht aus, wenn du ein Neugeborenes aus dem Wasser hebst? Welche Körperteile müssen unbedingt gestützt werden — und warum?",
      antwort:
        "Nacken-Rücken-Griff: Nacken in der Armbeuge, Hand umschließt Oberarm von außen — stabilisiert Schulter-Nacken-Achse. Zweite Hand am Gesäß/Oberschenkel. Pflicht bis zur sicheren Kopfkontrolle (ca. 3-4 Monate). Der Kopf macht 25 % des Körpergewichts aus.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der **Nacken-Rücken-Griff** stützt Kopf und Rumpf beim Heben oder im Wasser: Der Nacken liegt in der **Armbeuge**, deine **Hand umfasst den Oberarm** von außen. Die andere Hand hält den Po/die Oberschenkel. So ist die Halswirbelsäule gesichert.",
      textB1:
        "Der **Nacken-Rücken-Griff**: Der **Kopf des Babys** liegt in deiner **Armbeuge**. Deine **Hand greift den Oberarm** von außen. Die **andere Hand** hält den Po. So ist der Hals geschützt. Wichtig: Babys können den Kopf noch nicht allein halten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-15",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-nacken-ruecken-griff",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Nacken-Rücken-Griff",
          body: "Der **Nacken-Rücken-Griff** ist die sichere Trageweise für Neugeborene und junge Säuglinge, die ihren Kopf noch nicht selbst halten können. **So geht er**: Der Säugling liegt auf dem Rücken. Du schiebst einen Arm unter sein Schulterblatt, sodass der **Nacken in deiner Armbeuge** ruht. Deine **Hand umschließt dabei den Oberarm des Kindes** von außen — das stabilisiert die gesamte Schulter-Nacken-Achse. Mit der **zweiten Hand** greifst du unter das Gesäß oder zwischen den Oberschenkeln. Der Rücken des Kindes liegt nun auf deinem Unterarm, die Wirbelsäule wird durchgehend gestützt. Der Griff ist besonders wichtig **beim Baden**, **beim Transfer** vom Wickeltisch und **beim Anziehen**. Er verhindert Überstreckung der Halswirbelsäule und gibt dem Kind Sicherheit. **Bis zur sicheren Kopfkontrolle** (ca. 3-4 Lebensmonate) ist der Griff Pflicht. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Nacken-Rücken-Griff"],
        },
        contentB1: {
          title: "Nacken-Rücken-Griff",
          body: "So hältst du ein Neugeborenes sicher: Der Name ist **Nacken-Rücken-Griff**. **Schritt 1**: Das Baby liegt auf dem Rücken. **Schritt 2**: Schieb deinen Arm unter die Schulter des Babys. Der **Nacken liegt in deiner Armbeuge**. **Schritt 3**: Mit der **gleichen Hand** greifst du den **Oberarm** von außen. So hält dein Arm den Kopf und den oberen Rücken sicher. **Schritt 4**: Die **andere Hand** hält den Po oder die Oberschenkel. Jetzt ist das Baby sicher. Der ganze Rücken liegt auf deinem Arm. **Wann brauchst du den Griff?** Beim Baden, beim Hochnehmen, beim Anziehen. Bis das Baby **3-4 Monate** alt ist.",
          glossarBegriffe: ["Nacken-Rücken-Griff"],
        },
      },
    },
    glossarBegriffe: ["Nacken-Rücken-Griff"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 16: trinkmengenzeichen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-trinkmengenzeichen",
    themaId: "saeuglingspflege",
    titel: "Trinkmengenzeichen beim gestillten Säugling",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Mutter sagt dir unsicher: 'Ich weiß nicht, ob mein Baby genug trinkt — ich sehe ja nicht, wie viel rauskommt an der Brust.' Welche **vier Zeichen** zeigen dir verlässlich, ob ein gestilltes Baby **genug** bekommt?",
      antwort:
        "Vier Zeichen für ausreichende Milchaufnahme: mindestens 5-6 nasse Windeln/Tag ab 5. Tag, regelmäßiger gelblicher Stuhl ab Tag 3-5, Wiedererreichen des Geburtsgewichts bis Tag 10-14 (dann +150-200 g/Woche), zufriedenes, waches Verhalten.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Vier Zeichen für **ausreichende Milchaufnahme**: **mindestens 5-6 nasse Windeln/Tag** ab 5. Tag, **regelmäßiger gelblicher Stuhl**, **normale Gewichtsentwicklung** (Wiederreichen des Geburtsgewichts bis Tag 10-14), **zufriedenes, waches Verhalten** nach dem Trinken.",
      textB1:
        "Vier Zeichen, dass das Baby **genug trinkt**: **5-6 nasse Windeln** am Tag (ab Tag 5). **Regelmäßiger Stuhl**, **gelblich**. **Gewicht steigt** (Geburtsgewicht wieder erreicht bis Tag 10-14). Das Baby ist nach dem Trinken **zufrieden und wach**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-16",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-trinkmengenzeichen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Trinkmengenzeichen beim gestillten Säugling",
          body: "Bei gestillten Säuglingen lässt sich die Trinkmenge nicht direkt messen — deshalb werden **indirekte Zeichen** herangezogen. **Erstens die Zahl nasser Windeln**: Ab dem **5. Lebenstag** sollten es **mindestens 5-6 schwer-nasse Windeln pro Tag** sein. Das ist der zuverlässigste Einzelindikator für ausreichende Flüssigkeitszufuhr. **Zweitens die Stuhlzeichen**: Der erste Stuhl (Mekonium) ist dunkelgrün-schwarz. Ab Tag 3-5 wird er **gelblich, weich, gut riechend** — das zeigt, dass genug Milch ankommt. **Drittens die Gewichtsentwicklung**: In den ersten Tagen verlieren Neugeborene **bis zu 7-10 % Körpergewicht** (physiologischer Gewichtsverlust). Das **Geburtsgewicht muss bis Tag 10-14** wieder erreicht sein, danach **Zunahme ca. 150-200 g/Woche** im ersten Lebensvierteljahr. **Viertens das Verhalten**: Ein satt getrunkenes Baby ist **zufrieden, entspannt, schläft gut und ist in Wachphasen aufmerksam**. Unruhe, ständiges Weinen, Apathie, Trinkschwäche sind **Warnzeichen**. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Mekonium"],
        },
        contentB1: {
          title: "Trinkmengenzeichen beim gestillten Säugling",
          body: "Bei einer Mutter, die stillt, siehst du die Milchmenge nicht. Aber du kannst **vier Zeichen** prüfen. **Erstens: Nasse Windeln zählen**. Ab Tag 5 sollten es **mindestens 5-6 schwer-nasse Windeln am Tag** sein. Weniger = Alarm. **Zweitens: Stuhl anschauen**. Am Anfang ist der Stuhl schwarz-grün (Mekonium). Ab Tag 3-5 wird er **gelb, weich und riecht mild**. Dann kommt genug Milch an. **Drittens: Gewicht kontrollieren**. In den ersten Tagen verliert das Baby etwas Gewicht (bis 7-10 %). Das ist normal. Aber bis **Tag 10-14** muss es das Geburtsgewicht **wieder haben**. Danach nimmt es **150-200 Gramm pro Woche** zu. **Viertens: Wie wirkt das Baby?** Ist es satt, entspannt, schläft es gut? Oder ist es unruhig und weint oft?",
          glossarBegriffe: ["Mekonium"],
        },
      },
    },
    glossarBegriffe: ["Mekonium"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 17: impfstatus-stiko (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-impfstatus-stiko",
    themaId: "saeuglingspflege",
    titel: "Impfkalender und STIKO",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Mutter fragt: 'Warum sollen Babys schon mit 2 Monaten geimpft werden? Ist das nicht zu früh?' Was antwortest du — und welche Quelle nennst du?",
      antwort:
        "Die STIKO am RKI empfiehlt erste Impfungen ab dem vollendeten 2. Lebensmonat (6-fach + Pneumokokken + Rotavirus). Rechtsgrundlage: § 20 IfSG. Frühe Impfungen schützen vor Krankheiten, die für Säuglinge besonders gefährlich sind, weil der Nestschutz ab ca. 6-8 Wochen nachlässt.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **STIKO am RKI** empfiehlt die ersten Impfungen **ab dem vollendeten 2. Lebensmonat** (6-fach-Impfstoff + Pneumokokken + Rotavirus). Rechtsgrundlage: § 20 IfSG. Frühe Impfungen schützen vor Krankheiten, die für Säuglinge besonders gefährlich sind. (RKI/STIKO 2024)",
      textB1:
        "Die **STIKO** ist die Impf-Kommission beim **RKI**. Sie sagt: Die **ersten Impfungen ab 2 Monaten**. Das sind Sechsfach-Impfung, Pneumokokken und Rotavirus. Warum so früh? Weil kleine Babys bei diesen Krankheiten **sehr krank** werden können.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-17",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["RKI/STIKO 2024", "§ 20 IfSG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-impfstatus-stiko",
        tag: "pflege",
        displayFormat: "news",
        contentC1: {
          title: "Impfkalender und STIKO",
          body: "Die **Ständige Impfkommission (STIKO)** am **Robert Koch-Institut** veröffentlicht jährlich den aktualisierten Impfkalender. Die Rechtsgrundlage bildet **§ 20 Infektionsschutzgesetz (IfSG)**. Für Säuglinge beginnt die Impfserie **ab dem vollendeten 2. Lebensmonat** — mit dem **6-fach-Impfstoff** (Diphtherie, Tetanus, Pertussis, Polio, Hib, Hepatitis B), der **Pneumokokken-Impfung** und der **Rotavirus-Schluckimpfung**. Weitere Dosen folgen mit 4 und 11 Monaten. Mit 11-14 Monaten kommen **MMR-V** (Masern-Mumps-Röteln-Varizellen) und **Meningokokken C** dazu. Die frühen Impfungen sind begründet: Pertussis (Keuchhusten) und invasive Hib-Infektionen sind für ungeimpfte Säuglinge **lebensbedrohlich**. Der **Nestschutz durch mütterliche Antikörper** nimmt nach den ersten Wochen ab. Bei jeder U-Untersuchung gehört der Impfstatus ins gelbe Heft. (RKI/STIKO 2024)",
          glossarBegriffe: ["STIKO", "Nestschutz"],
        },
        contentB1: {
          title: "Impfkalender und STIKO",
          body: "Die **STIKO** ist die **Impf-Kommission** in Deutschland. Sie arbeitet am **RKI** (Robert Koch-Institut). Sie sagt jedes Jahr, welche Impfungen wann kommen. Die Regel steht im **Infektionsschutzgesetz (§ 20 IfSG)**. **Ab dem 2. Monat** bekommt ein Baby die **ersten Impfungen**: Sechsfach-Impfung (gegen Tetanus, Keuchhusten, Kinderlähmung und mehr), Pneumokokken, Rotavirus. Weitere Impfungen folgen mit **4 und 11 Monaten**. Mit **11-14 Monaten** kommen **Masern, Mumps, Röteln und Windpocken** dazu. **Warum so früh?** Weil Krankheiten wie **Keuchhusten** für kleine Babys **sehr gefährlich** sind. Der Schutz von der Mutter reicht nur ein paar Wochen. Deine Aufgabe: Impfstatus bei jeder U-Untersuchung prüfen, im gelben Heft nachschauen.",
          glossarBegriffe: ["STIKO", "Nestschutz"],
        },
      },
    },
    glossarBegriffe: ["STIKO", "Nestschutz"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 18: vernix-bad-timing (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-erstes-bad",
    themaId: "saeuglingspflege",
    titel: "Timing des ersten Bades — Bonding vs. Hygiene",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Klinik badet Neugeborene oft schon in der ersten Stunde nach der Geburt. Eine andere wartet 24 Stunden. **Welche Option ist heute empfohlen — und warum?** Beziehe dabei Vernix, Thermoregulation und Bonding ein.",
      antwort:
        "Empfehlung heute: Erstes Bad erst nach 24 Stunden (oder später). Drei Gründe: Vernix caseosa als natürlicher Hautschutz zieht in 24-48 h ein, Auskühlungsgefahr mit Folgen für Blutzucker und Atmung, sowie die Priorität von Bonding und Stillstart. Direkt nach Geburt reicht sanftes Abtupfen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Empfehlung heute: **Erstes Bad erst nach 24 Stunden** (oder später). Gründe: **Vernix** als natürlicher Hautschutz soll einziehen, **Auskühlungsgefahr** direkt nach Geburt, **Bonding und Stillstart** haben Vorrang. Direkt nach Geburt reicht sanftes Abtrocknen. (Hoehl/Kullick, 2019)",
      textB1:
        "Die Regel heute: **Erstes Bad erst nach 24 Stunden** oder sogar später. Warum? **Die Käseschmiere soll einziehen** (Hautschutz). Das Baby **kühlt sonst aus**. Die erste Zeit ist für das **Bonding und Stillen** wichtig. Direkt nach der Geburt reicht **Abtrocknen**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-18",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-erstes-bad",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Timing des ersten Bades — Bonding vs. Hygiene",
          body: "Die Praxis, Neugeborene direkt nach der Geburt zu baden, ist **nicht mehr Standard**. Die aktuelle Empfehlung lautet: **Erstes Bad frühestens nach 24 Stunden**, oft sogar später. Drei Gründe dafür. **Erstens: Vernix caseosa schützen**. Die Käseschmiere wirkt antimikrobiell, rückfettend und wärmeisolierend. Ein frühes Bad wäscht sie aus, bevor sie ihren vollen Nutzen entfalten kann. **Zweitens: Auskühlungsgefahr vermeiden**. Direkt nach der Geburt ist die Thermoregulation des Kindes labil, ein zu frühes Bad erhöht das Risiko für Hypothermie und damit auch für Hypoglykämie und Atemprobleme. **Drittens: Bonding und Stillstart priorisieren**. Die erste Stunde nach der Geburt ist sensibel für die **Mutter-Kind-Bindung (Bonding)** und den Stillstart — in dieser Zeit gehört das Kind **Haut an Haut** auf die Mutter, nicht in die Wanne. Praxis: Blut, Fruchtwasser und Stuhlreste werden **sanft mit warmem Wasser abgetupft**, die Vernix bleibt. Das erste richtige Bad folgt **nach 24 Stunden oder später**. (Hoehl/Kullick, 2019)",
          glossarBegriffe: ["Bonding", "Vernix caseosa"],
        },
        contentB1: {
          title: "Timing des ersten Bades — Bonding vs. Hygiene",
          body: "Früher hat man Neugeborene sofort gebadet. **Heute ist das anders**. Die Regel: **Erstes Bad frühestens nach 24 Stunden**. Warum nicht sofort? **Drei Gründe**. **Erstens: Die Käseschmiere (Vernix) schützen**. Sie ist gut für die Haut. Sie hilft gegen Keime. Sie hält warm. Wenn du zu früh badest, wäschst du sie weg. **Zweitens: Auskühlung vermeiden**. Direkt nach der Geburt ist das Baby noch nicht stabil bei der Wärme. Ein Bad macht es kalt. Das ist gefährlich. **Drittens: Bonding zuerst**. Die erste Stunde ist **wichtig für die Bindung** zwischen Mutter und Baby. Und für das **Stillen**. Das Baby soll **Haut an Haut** bei der Mutter sein. Nicht in der Wanne. **Was macht man stattdessen?** Blut und Fruchtwasser **sanft abtupfen**. Die weiße Schicht bleibt drauf. Das richtige Bad kommt später.",
          glossarBegriffe: ["Bonding", "Vernix caseosa"],
        },
      },
    },
    glossarBegriffe: ["Bonding", "Vernix caseosa"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 19: elternanleitung-beratung (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-elternanleitung",
    themaId: "saeuglingspflege",
    titel: "Elternanleitung — Prinzipien und Umsetzung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine junge Mutter wickelt sichtbar unsicher, sie blickt dich bei jedem Handgriff fragend an. Wie bringst du ihr **sicheres Wickeln** bei, **ohne sie zu beschämen** oder es **für sie zu machen**? Welche drei Prinzipien leiten dein Vorgehen?",
      antwort:
        "Elternanleitung folgt drei Prinzipien: 1) Ressourcen würdigen (was machen sie schon gut?), 2) Modeling statt Übernahme (Erklären → Zeigen → Mitmachen lassen), 3) Bestärken statt Bewerten. Ziel: Selbstwirksamkeit, nicht Abhängigkeit. Rechtsgrundlage: § 4 PflBG.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Elternanleitung folgt drei Prinzipien: **1) Ressourcen würdigen** (was machen sie schon gut?), **2) Erklären + Zeigen + Mitmachen lassen** (Modeling statt Übernahme), **3) Bestärken ohne Bewertung**. Ziel: Selbstwirksamkeit, nicht Abhängigkeit. (Hoehl/Kullick, 2019)",
      textB1:
        "So leitest du Eltern an: **1) Loben, was sie schon können**. **2) Erklären, zeigen, mitmachen lassen** — nicht für sie machen. **3) Stärken ohne Kritik**. Das Ziel: Die Eltern sollen **sicher werden**, nicht **abhängig** von dir. Eltern sind die Experten ihres Kindes.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-19",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick 2019", "§ 4 PflBG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-elternanleitung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Elternanleitung — Prinzipien und Umsetzung",
          body: "**Elternanleitung** ist ein Kernauftrag in der Säuglingspflege. Das PflBG nennt sie als pflegerischen Vorbehalt (§ 4 PflBG: Beratung/Anleitung), und sie ist für die Familie oft wichtiger als die eigentliche Pflegehandlung. Drei didaktische Prinzipien leiten das Vorgehen. **Erstens: Ressourcen würdigen.** Bevor du erklärst, beobachtest du: Was macht die Mutter oder der Vater bereits **gut**? Daran anknüpfen. 'Sie halten den Kopf schön stabil — sehr gut. Jetzt zeige ich Ihnen, wie Sie noch den Oberarm dazu fassen.' **Zweitens: Modeling statt Übernahme**. Die Regel lautet: **Erklären, dann Zeigen, dann die Eltern machen lassen** — mit deinen Worten als Begleitung. Wenn du es selbst übernimmst, nimmst du den Eltern die Lerngelegenheit. **Drittens: Bestärken statt Bewerten**. 'Das klappt schon sehr gut' ist besser als 'Das ist richtig, aber...'. Vermeide **Fachjargon** ohne Erklärung. Nutze **kurze Sätze**, gib **Zeit zum Üben**. Die Elternanleitung ist erfolgreich, wenn die Eltern das **nächste Mal ohne dich** sicher sind. (Hoehl/Kullick, 2019)",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Elternanleitung — Prinzipien und Umsetzung",
          body: "**Elternanleitung** ist ein wichtiger Teil deiner Arbeit. Das steht im **Pflegeberufegesetz (§ 4 PflBG)**. Ziel: Die Eltern sollen das Baby **selbst** versorgen können — nicht du für sie. **Drei Regeln** helfen dir. **Erste Regel: Loben, was schon gut ist.** Schau zuerst: Was machen die Eltern richtig? Sag es ihnen. 'Sie halten den Kopf super. Jetzt zeige ich noch, wie Sie den Oberarm dazu greifen.' **Zweite Regel: Erklären, zeigen, selbst machen lassen.** Nicht du machst es. Du erklärst. Du zeigst einmal. Dann machen **sie** es, und du erklärst während sie es tun. So lernen sie am besten. **Dritte Regel: Stärken, nicht kritisieren**. Sag: 'Das klappt schon gut!' Nicht: 'Richtig, aber...'. Keine schweren Wörter. **Ergebnis**: Die Eltern werden **sicher**. Beim nächsten Mal schaffen sie es **ohne dich**.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 20: sensomotorische-meilensteine (Bloom 2) — AP-3 LE6 (Alters-Breite Säugling)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-sensomotorische-meilensteine",
    themaId: "saeuglingspflege",
    titel: "Sensomotorische Meilensteine im 1. Lebensjahr",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Vater sorgt sich, weil sein 10 Monate altes Baby noch nicht krabbelt, das Nachbarskind aber schon. Ab wann ist eine Abweichung wirklich auffällig — und warum spricht man heute lieber von 'Korridoren' als von festen Meilensteinen?",
      antwort:
        "Der zeitliche Verlauf ist individuell sehr unterschiedlich, darum spricht man heute von Entwicklungskorridoren statt fixer Meilensteine — manche Kinder überspringen z.B. das Krabbeln. Grobe Orientierung: 3 Monate Kopfkontrolle, 6 Monate Drehen, 9-10 Monate freies Sitzen/Krabbeln, 12 Monate Laufen mit Festhalten, 18 Monate freies Laufen. Erst deutliche, anhaltende Abweichungen sind auffällig — dafür gibt es die U-Untersuchungen. (Pflege heute, Kap. 18.2)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die kindliche Motorik reift von oben nach unten (erst Kopf, dann Rumpf, dann Beine). Grobe Korridore: 6 Wo. Kopf kurz anheben · 3 Mon. Kopfkontrolle/Unterarmstütz · 5 Mon. Sitzen mit Stütze · 6 Mon. Drehen Bauch↔Rücken, palmares Greifen · 9-10 Mon. freies Sitzen, Krabbeln, Pinzettengriff · 12 Mon. Laufen mit Festhalten · 14 Mon. freies Stehen · 18 Mon. freies Laufen. Heute spricht man von Entwicklungskorridoren, nicht von festen Meilensteinen — der Verlauf ist individuell. Sensorik (Sehen) reift parallel. (Pflege heute, Kap. 18.2)",
      textB1:
        "Ein Baby lernt Bewegungen von oben nach unten: erst den Kopf, dann den Rumpf, dann die Beine. Ungefähr: 3 Monate Kopf halten · 6 Monate sich drehen und greifen · 9-10 Monate frei sitzen und krabbeln · 12 Monate an der Hand laufen · 18 Monate allein laufen. Wichtig: Jedes Kind ist anders. Man spricht von Korridoren, nicht von festen Terminen. Manche Babys krabbeln gar nicht.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-20-meilensteine",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Pflege heute (7. Aufl.), Kap. 18.2 (Physiologische Entwicklung, motorische und sensorische Entwicklung, Abb. 18.11)", "Hoehl/Kullick: Gesundheits- und Kinderkrankenpflege"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-meilensteine",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Sensomotorische Meilensteine im 1. Lebensjahr",
          body: "Im ersten Lebensjahr reift das Nervensystem rasant: Die **Primitivreflexe** verschwinden und werden von bewusst gesteuerten Bewegungen abgelöst. Die Entwicklung verläuft **von oben nach unten** — erst Kopf, dann Rumpf, dann Beine. Wichtig: Säuglinge leiten ihre Entwicklungsschritte durch **Üben selbst ein** (angeborener Bewegungsdrang) — man kann sie nicht 'beschleunigen'.\n\n**Grobe motorische Korridore (nach Pflege heute, Abb. 18.11):**\n- **6 Wochen:** hebt den Kopf in Bauchlage kurz an\n- **3 Monate:** **Kopfkontrolle** — hält Kopf in Bauchlage länger (45-90°), stützt sich auf die Unterarme (Unterarmstütz)\n- **5 Monate:** sitzt mit Unterstützung\n- **6 Monate:** dreht sich vom Bauch auf den Rücken und zurück, **greift palmar** (mit ganzer Hand), erforscht Dinge mit dem Mund\n- **9 Monate:** steht mit Festhalten, beginnt frei zu sitzen und zu krabbeln; **Pinzettengriff** (Daumen + Zeigefinger)\n- **10 Monate:** sitzt frei und krabbelt\n- **12 Monate:** läuft mit Festhalten an einer Hand oder an Möbeln entlang\n- **14 Monate:** steht ohne Unterstützung\n- **18 Monate:** läuft frei ohne Hilfe\n\n**Wichtig — Korridore statt fixer Termine:** Der zeitliche Verlauf ist **individuell sehr unterschiedlich**. Heute spricht man eher von **Entwicklungskorridoren** als von fest verankerten 'Meilensteinen'. Manche Säuglinge überspringen z.B. das Krabbeln. Erst **deutliche, anhaltende** Abweichungen sind auffällig — sie werden in den **U-Untersuchungen** erfasst.\n\n**Sensorik reift parallel:** Mit 3 Monaten folgt das Kind bewegten Objekten mit den Augen, mit 4-6 Monaten ist das räumliche Sehen gut entwickelt, mit etwa einem Jahr erreicht die Sehschärfe Erwachsenen-Niveau. Mehr Bewegung erweitert die Wahrnehmung — und bessere Wahrnehmung fördert die Motorik.\n\n**Was heißt das fürs Handling?** Solange die Kopfkontrolle fehlt (bis ca. 3-4 Monate), wird **Kopf und Nacken immer gestützt** (Nacken-Rücken-Griff). Generell gilt **Infant Handling**: das Kind über die Seite **rollen statt gerade hochziehen**, nie an den Beinen hochziehen — so spürt es seine eigene Bewegung und lernt mit. (Pflege heute, Kap. 18.2; Hoehl/Kullick)",
          glossarBegriffe: ["Kopfkontrolle", "Pinzettengriff", "Entwicklungskorridor", "Nacken-Rücken-Griff"],
        },
        contentB1: {
          title: "Sensomotorische Meilensteine im 1. Lebensjahr",
          body: "Im ersten Lebensjahr lernt ein Baby sehr schnell. Das Gehirn reift. Die **frühen Reflexe** verschwinden, und das Kind bewegt sich immer mehr mit Absicht. Die Entwicklung geht **von oben nach unten**: erst Kopf, dann Rumpf, dann Beine. Das Baby übt von selbst — man kann es nicht schneller machen.\n\n**Grobe Zeit-Korridore (Pflege heute, Abb. 18.11):**\n- **6 Wochen:** hebt den Kopf in Bauchlage kurz an\n- **3 Monate:** **hält den Kopf** (Kopfkontrolle), stützt sich auf die Unterarme\n- **5 Monate:** sitzt mit Hilfe\n- **6 Monate:** dreht sich vom Bauch auf den Rücken, **greift mit der ganzen Hand**, steckt Dinge in den Mund\n- **9 Monate:** steht mit Festhalten, sitzt frei, krabbelt; **Pinzettengriff** (Daumen + Zeigefinger)\n- **10 Monate:** sitzt frei und krabbelt\n- **12 Monate:** läuft an der Hand oder an Möbeln entlang\n- **14 Monate:** steht allein\n- **18 Monate:** läuft allein\n\n**Wichtig:** Jedes Kind ist **anders**. Man sagt heute **Korridor**, nicht festen Termin. Manche Babys krabbeln nie. Nur **deutliche** und **anhaltende** Abweichungen sind auffällig — dafür gibt es die **U-Untersuchungen**.\n\n**Das Sehen reift mit:** Mit 3 Monaten folgt das Baby Dingen mit den Augen. Mit einem Jahr sieht es fast so gut wie ein Erwachsener.\n\n**Was heißt das fürs Tragen?** Solange das Baby den Kopf nicht hält (bis ca. 3-4 Monate): **immer Kopf und Nacken stützen** (Nacken-Rücken-Griff). Allgemein: das Kind **über die Seite rollen, nicht gerade hochziehen**, nie an den Beinen ziehen.",
          glossarBegriffe: ["Kopfkontrolle", "Pinzettengriff", "Entwicklungskorridor", "Nacken-Rücken-Griff"],
        },
      },
    },
    glossarBegriffe: ["Kopfkontrolle", "Pinzettengriff", "Entwicklungskorridor", "Nacken-Rücken-Griff"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 21: saug-schluck-stoerung (Bloom 2) — Coverage-Recheck LE8 W6 (Saug-/Schluckstörung Säugling)
  // ═══════════════════════════════════════════
  {
    bausteinId: "saeuglingspflege-saug-schluck-stoerung",
    themaId: "saeuglingspflege",
    titel: "Saug- und Schluckstörung beim Säugling",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Frühgeborenes (30. SSW) verschluckt sich beim Flaschetrinken und seine Sauerstoffsättigung fällt ab. Warum fällt gerade Frühgeborenen das Trinken so schwer — und was bedeutet das für die Art, wie du fütterst?",
      antwort:
        "Bis etwa zur 32. SSW ist die Koordination von Saugen, Schlucken und Atmen noch nicht ausgereift. Frühgeborene können noch nicht gleichzeitig saugen und schlucken und machen während des Schluckens eine Atempause (Schluck-Apnoe) — daher der Sättigungsabfall. Konsequenz: häufiger die Flasche aus dem Mund nehmen, damit das Kind Zeit zum Schlucken und Atmen hat. (Hoehl/Kullick, Kap. 24)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Saugen, Schlucken und Atmen müssen koordiniert werden — das reift erst um die 32. SSW. Frühgeborene haben ein unreifes Saugmuster (Saugen und Schlucken nicht gleichzeitig) und machen beim Schlucken eine Atempause (Schluck-Apnoe → Sättigungsabfall). Maßnahmen: Flasche häufiger herausnehmen (Schluckpause), Lippenschluss/Schlucken unterstützen, Trinkdauer beobachten. Bei Trinkschwäche/zu langer Mahlzeit (>30 min oder 2× nicht getrunken): sondieren. (Hoehl/Kullick, Kap. 24)",
      textB1:
        "Ein Baby muss Saugen, Schlucken und Atmen zusammenbringen. Das lernt es erst um die 32. Schwangerschaftswoche. Frühgeborene können noch nicht gleichzeitig saugen und schlucken. Beim Schlucken atmen sie kurz nicht (Schluck-Apnoe) — dann fällt der Sauerstoff ab. Hilfe: die Flasche öfter herausnehmen, damit das Kind schlucken und atmen kann. Wenn das Trinken zu schwer ist, bekommt es die Nahrung über eine Sonde.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-saeuglingspflege-wb-21-saug-schluck",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Hoehl/Kullick: Gesundheits- und Kinderkrankenpflege, Kap. 24 (Pflege des zu früh geborenen Kindes; Saug-Schluck-Koordination, Trinkschwäche)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-saeuglingspflege-saug-schluck",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Saug- und Schluckstörung beim Säugling",
          body: "Trinken sieht einfach aus, ist für einen Säugling aber eine **komplexe Koordinationsleistung**: Saugen, Schlucken und Atmen müssen genau ineinandergreifen (Hoehl/Kullick, Kap. 24).\n\n**Warum das gestört sein kann:**\n- **Bis etwa zur 32. Schwangerschaftswoche (SSW)** ist die Koordination von **Saugen, Schlucken und Atmen** noch **nicht ausgereift**.\n- Frühgeborene haben ein **unreifes Saugmuster**: Sie können noch **nicht gleichzeitig** saugen und schlucken, sondern schlucken **vor oder nach** dem Saugen.\n- Während des Schluckens **atmet das Frühgeborene nicht** (**Schluck-Apnoe**) — das kann zu einem **Abfall der Sauerstoffsättigung** führen.\n- **Trinkschwäche** (kraftloses, zu langsames Trinken) ist außerdem ein **unspezifisches Warnzeichen** und kann auf andere Probleme hinweisen (z.B. Infektion) — immer ernst nehmen.\n\n**Was die Pflege tun kann:**\n- **Flasche häufiger aus dem Mund nehmen**, damit das Kind Gelegenheit zum **Schlucken und Atmen** hat\n- **Lippenschluss unterstützen**: leichter Druck auf den Mundringmuskel, ggf. ein Finger unter dem Kinn\n- **Schlucken anbahnen**: einen Finger leicht auf das Zungenbein legen, um das Schlucken zu ertasten/zu unterstützen\n- **Trinkdauer und -menge beobachten**: Trinkt ein Frühgeborenes **2-mal nacheinander** nicht oder braucht **mehr als 30 Minuten** für eine Mahlzeit, wird die nächste Mahlzeit **sondiert** — sonst verbraucht es beim Trinken mehr Energie, als es aufnimmt\n- **Therapeuten einbeziehen**: Bei anhaltenden Schwierigkeiten Physio-/Ergotherapie hinzuziehen\n\nSo verhinderst du, dass Trinken für das Kind zu Stress, Sättigungsabfall und Erschöpfung wird. (Hoehl/Kullick, Kap. 24)",
          glossarBegriffe: ["Saug-Schluck-Koordination", "Schluck-Apnoe", "Trinkschwäche"],
        },
        contentB1: {
          title: "Saug- und Schluckstörung beim Säugling",
          body: "Trinken ist für ein Baby schwer: **Saugen, Schlucken und Atmen** müssen zusammenpassen (Hoehl/Kullick, Kap. 24).\n\n**Warum es schwer sein kann:**\n- **Bis etwa zur 32. Schwangerschaftswoche** klappt das Zusammenspiel von **Saugen, Schlucken und Atmen** noch nicht.\n- Frühgeborene können **nicht gleichzeitig** saugen und schlucken — sie schlucken **vor oder nach** dem Saugen.\n- Beim Schlucken **atmen sie kurz nicht** (**Schluck-Apnoe**) — dann fällt der **Sauerstoff** ab.\n- **Trinkschwäche** (kraftloses Trinken) ist ein **Warnzeichen** — nimm es immer ernst.\n\n**Was du tun kannst:**\n- **Flasche öfter herausnehmen**, damit das Kind **schlucken und atmen** kann\n- **Mund-Hilfe**: leichter Druck auf den Mund-Ringmuskel oder ein Finger unter dem Kinn\n- **Schlucken unterstützen**: einen Finger leicht aufs Zungenbein legen\n- **Beobachten**: Wenn das Kind **2-mal nacheinander** nicht trinkt oder **länger als 30 Minuten** braucht, gibst du die Nahrung über eine **Sonde**\n- **Hilfe holen**: bei großen Problemen Physio- oder Ergotherapie",
          glossarBegriffe: ["Saug-Schluck-Koordination", "Schluck-Apnoe", "Trinkschwäche"],
        },
      },
    },
    glossarBegriffe: ["Saug-Schluck-Koordination", "Schluck-Apnoe", "Trinkschwäche"],
    karteikarten: [],
  },
];
