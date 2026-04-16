// LE-06 Lern-Snack: Kompakte Kernfakten pro Kapitel (Checklisten-Format)
// Jedes Item = 1 prüfbarer Fakt, den der Schüler abhaken kann

import type { LernSnack } from "../_types";

export const LE06_LERN_SNACK: LernSnack[] = [

  // ── Kap 1: Was bedeutet Mobilität? ──────────────────────────
  {
    kapitelId: "le06-kap-01",
    titel: "Was bedeutet Mobilität? — Einführung und Bedeutung",
    titelB1: "Was bedeutet Mobilität?",
    tag: "pflege",
    items: [
      { id: "le06-snack-k01-01", faktC1: "Mobilität bezeichnet die Fähigkeit, den eigenen Körper zielgerichtet zu bewegen und die Position zu wechseln.", faktB1: "Mobilität heißt: sich bewegen können und die Position verändern können.", kapitelRef: "le06-kap-01" },
      { id: "le06-snack-k01-02", faktC1: "Immobilität ist ein zentrales Risiko: Gleichzeitige Gefährdung für Dekubitus, Thrombose, Pneumonie, Kontraktur und Sturz.", faktB1: "Immobilität (= Unbeweglichkeit) ist gefährlich. Es drohen 5 Probleme: Druckgeschwür, Blutgerinnsel, Lungenentzündung, Gelenk-Versteifung und Sturz.", kapitelRef: "le06-kap-01" },
      { id: "le06-snack-k01-03", faktC1: "Die Förderung der Mobilität gehört zu den vorbehaltenen Tätigkeiten laut § 4 PflBG.", faktB1: "Die Förderung der Mobilität ist eine vorbehaltene Tätigkeit (§ 4 PflBG). Das heißt: Nur Pflegefachpersonen dürfen das planen.", kapitelRef: "le06-kap-01" },
      { id: "le06-snack-k01-04", faktC1: "Der DNQP-Expertenstandard zur Erhaltung und Förderung der Mobilität wurde 2020 aktualisiert.", faktB1: "Der Expertenstandard zur Mobilität wurde 2020 aktualisiert (DNQP).", kapitelRef: "le06-kap-01" },
      { id: "le06-snack-k01-05", faktC1: "Nur ausgebildete Pflegefachpersonen dürfen den individuellen Mobilitätsbedarf erheben und Maßnahmen planen.", faktB1: "Nur ausgebildete Pflegefachpersonen dürfen den Mobilitäts-Bedarf prüfen und Maßnahmen planen.", kapitelRef: "le06-kap-01" },
    ],
  },

  // ── Kap 2: Der Bewegungsapparat ──────────────────────────
  {
    kapitelId: "le06-kap-02",
    titel: "Der Bewegungsapparat — Grundlagen für die Pflege",
    titelB1: "Der Bewegungsapparat",
    tag: "anatomie",
    items: [
      { id: "le06-snack-k02-01", faktC1: "Der passive Bewegungsapparat (Knochen, Knorpel, Gelenke, Bänder) bildet das Gerüst, der aktive (Skelettmuskulatur) den Antrieb.", faktB1: "Der passive Teil (Knochen, Gelenke, Bänder) ist das Gerüst. Der aktive Teil (Muskeln) ist der Antrieb.", kapitelRef: "le06-kap-02" },
      { id: "le06-snack-k02-02", faktC1: "Der Mensch hat über 200 Knochen und rund 400 Muskeln.", faktB1: "Der Mensch hat über 200 Knochen und ungefähr 400 Muskeln.", kapitelRef: "le06-kap-02" },
      { id: "le06-snack-k02-03", faktC1: "Kugelgelenke (Schulter, Hüfte) erlauben Bewegung in alle Richtungen, Scharniergelenke (Knie, Ellbogen) vor allem Beugung und Streckung.", faktB1: "Kugelgelenke (Schulter, Hüfte) bewegen sich in alle Richtungen. Scharniergelenke (Knie, Ellbogen) beugen und strecken.", kapitelRef: "le06-kap-02" },
      { id: "le06-snack-k02-04", faktC1: "Bereits nach wenigen Tagen Bettruhe ist ein messbarer Muskelabbau nachweisbar.", faktB1: "Schon nach wenigen Tagen im Bett bauen die Muskeln ab. Das kann man messen.", kapitelRef: "le06-kap-02" },
      { id: "le06-snack-k02-05", faktC1: "Ältere Menschen verlieren bei Immobilität schneller Muskelmasse als jüngere und bauen langsamer wieder auf.", faktB1: "Ältere Menschen verlieren schneller Muskeln als jüngere. Sie bauen auch langsamer wieder auf.", kapitelRef: "le06-kap-02" },
    ],
  },

  // ── Kap 3: Kinästhetik — Bewegung verstehen lernen ──────────────────────────
  {
    kapitelId: "le06-kap-03",
    titel: "Kinästhetik — Bewegung verstehen lernen",
    titelB1: "Kinästhetik — Bewegung verstehen",
    tag: "pflege",
    items: [
      { id: "le06-snack-k03-01", faktC1: "Kinästhetik ist ein Handlungskonzept zur Unterstützung menschlicher Bewegung, entwickelt in den 1970er-Jahren von Hatch und Maietta.", faktB1: "Kinästhetik ist ein Konzept für Bewegung in der Pflege. Hatch und Maietta haben es in den 1970ern entwickelt.", kapitelRef: "le06-kap-03" },
      { id: "le06-snack-k03-02", faktC1: "Das zentrale Prinzip: Vorhandene Eigenbewegung unterstützen statt den Körper passiv transportieren.", faktB1: "Das Prinzip: Die Bewegung unterstützen, die der Mensch noch kann. Nicht einfach tragen!", kapitelRef: "le06-kap-03" },
      { id: "le06-snack-k03-03", faktC1: "Der pflegebedürftige Mensch wird als aktiver Partner in den Bewegungsablauf einbezogen.", faktB1: "Der Mensch macht aktiv mit bei der Bewegung. Er ist kein passiver Gegenstand.", kapitelRef: "le06-kap-03" },
      { id: "le06-snack-k03-04", faktC1: "Kinästhetisches Arbeiten reduziert die Rückenbelastung für Pflegende erheblich.", faktB1: "Kinästhetik schont den Rücken der Pflegekraft deutlich.", kapitelRef: "le06-kap-03" },
      { id: "le06-snack-k03-05", faktC1: "Rückenbeschwerden und Muskel-Skelett-Erkrankungen gehören zu den häufigsten Berufskrankheiten in der Pflege.", faktB1: "Rückenprobleme sind eine der häufigsten Berufskrankheiten in der Pflege.", kapitelRef: "le06-kap-03" },
    ],
  },

  // ── Kap 4: Kinästhetik-Konzepte Teil 1 ──────────────────────────
  {
    kapitelId: "le06-kap-04",
    titel: "Die 6 Konzepte der Kinästhetik (Teil 1): Interaktion und Funktionale Anatomie",
    titelB1: "Kinästhetik-Konzepte (Teil 1): Interaktion und Funktionale Anatomie",
    tag: "pflege",
    items: [
      { id: "le06-snack-k04-01", faktC1: "Das Konzept Interaktion beschreibt die wechselseitige Wahrnehmung zwischen Pflegeperson und pflegebedürftigem Menschen über die fünf Sinne und das kinästhetische Sinnessystem.", faktB1: "Interaktion heißt: Du und der Mensch nehmen euch gegenseitig wahr. Über Sehen, Hören, Fühlen und Bewegung.", kapitelRef: "le06-kap-04" },
      { id: "le06-snack-k04-02", faktC1: "Die Funktionale Anatomie der Kinästhetik unterteilt den Körper in 7 Massen und 6 Zwischenräume.", faktB1: "Die Kinästhetik teilt den Körper in 7 Massen und 6 Zwischenräume ein.", kapitelRef: "le06-kap-04" },
      { id: "le06-snack-k04-03", faktC1: "Die 7 Massen sind: Kopf, Brustkorb, Becken, 2 Arme, 2 Beine.", faktB1: "Die 7 Massen: Kopf, Brustkorb, Becken, 2 Arme, 2 Beine.", kapitelRef: "le06-kap-04" },
      { id: "le06-snack-k04-04", faktC1: "Die 6 Zwischenräume sind: Hals, Taille, 2 Achselhöhlen, 2 Leisten.", faktB1: "Die 6 Zwischenräume: Hals, Taille, 2 Achselhöhlen, 2 Leisten.", kapitelRef: "le06-kap-04" },
      { id: "le06-snack-k04-05", faktC1: "Goldene Regel: An den Massen unterstützen, die Zwischenräume frei lassen.", faktB1: "Goldene Regel: An den Massen anfassen. Die Zwischenräume frei lassen!", kapitelRef: "le06-kap-04" },
      { id: "le06-snack-k04-06", faktC1: "Häufigster Anfängerfehler: Unter die Achseln greifen blockiert den Brustkorb, verhindert Drehbewegungen und gefährdet den Plexus brachialis.", faktB1: "Häufigster Fehler: Unter die Achseln greifen. Das blockiert den Brustkorb. Drehbewegungen sind dann nicht möglich. Die Arm-Nerven können verletzt werden.", kapitelRef: "le06-kap-04" },
    ],
  },

  // ── Kap 5: Kinästhetik-Konzepte Teil 2 ──────────────────────────
  {
    kapitelId: "le06-kap-05",
    titel: "Die 6 Konzepte der Kinästhetik (Teil 2): Bewegung und Anstrengung",
    titelB1: "Kinästhetik-Konzepte (Teil 2): Bewegung und Anstrengung",
    tag: "pflege",
    items: [
      { id: "le06-snack-k05-01", faktC1: "Haltungsbewegung hält den Körper gegen die Schwerkraft in Position, Transportbewegung verlagert ihn durch den Raum.", faktB1: "Haltungs-Bewegung: Der Körper bleibt an einem Ort. Transport-Bewegung: Der Körper bewegt sich durch den Raum.", kapitelRef: "le06-kap-05" },
      { id: "le06-snack-k05-02", faktC1: "Parallele Bewegungen (synchron, eine Achse) sind kraftaufwändig, spiralige Bewegungen (Drehung über zwei Achsen) sind physiologisch und leichter.", faktB1: "Parallele Bewegungen brauchen viel Kraft. Spiralige Bewegungen (= Drehbewegungen) sind natürlicher und leichter.", kapitelRef: "le06-kap-05" },
      { id: "le06-snack-k05-03", faktC1: "Kleinkinder nutzen intuitiv spiralige Bewegungsmuster, wenn sie sich aufrichten.", faktB1: "Babys drehen sich ganz natürlich spiralig, wenn sie sich aufrichten.", kapitelRef: "le06-kap-05" },
      { id: "le06-snack-k05-04", faktC1: "Beim Konzept Anstrengung soll der pflegebedürftige Mensch sich aktiv abdrücken oder heranziehen — die Pflegekraft unterstützt, übernimmt aber nicht alles.", faktB1: "Der Mensch soll sich selbst abdrücken oder ziehen. Du unterstützt, aber du machst nicht alles allein.", kapitelRef: "le06-kap-05" },
      { id: "le06-snack-k05-05", faktC1: "In der Pflege werden spiralige Bewegungsmuster bevorzugt, weil sie weniger Kraft erfordern und natürlicher sind.", faktB1: "In der Pflege nutzt man spiralige Bewegungen. Sie brauchen weniger Kraft und sind natürlicher.", kapitelRef: "le06-kap-05" },
    ],
  },

  // ── Kap 6: Kinästhetik-Konzepte Teil 3 ──────────────────────────
  {
    kapitelId: "le06-kap-06",
    titel: "Die 6 Konzepte der Kinästhetik (Teil 3): Funktion und Umgebung",
    titelB1: "Kinästhetik-Konzepte (Teil 3): Funktion und Umgebung",
    tag: "pflege",
    items: [
      { id: "le06-snack-k06-01", faktC1: "Die Kinästhetik beschreibt 7 Grundpositionen von Rückenlage (stabilste) bis Zweibeinstand (instabilste).", faktB1: "Es gibt 7 Grund-Positionen. Rückenlage ist die stabilste. Stehen auf zwei Beinen ist die instabilste.", kapitelRef: "le06-kap-06" },
      { id: "le06-snack-k06-02", faktC1: "Mobilisation erfolgt schrittweise von einer Grundposition zur nächsten — nie direkt vom Liegen ins Stehen.", faktB1: "Mobilisation geht Schritt für Schritt. Nie direkt vom Liegen ins Stehen!", kapitelRef: "le06-kap-06" },
      { id: "le06-snack-k06-03", faktC1: "Die Betthöhe muss so eingestellt sein, dass die Füße des pflegebedürftigen Menschen im Sitzen den Boden berühren.", faktB1: "Das Bett muss so hoch sein, dass die Füße im Sitzen den Boden berühren.", kapitelRef: "le06-kap-06" },
      { id: "le06-snack-k06-04", faktC1: "Hilfsmittel müssen vor der Mobilisation bereitstehen, nicht erst währenddessen gesucht werden.", faktB1: "Alle Hilfsmittel müssen vorher bereitstehen. Nicht erst während der Mobilisation suchen!", kapitelRef: "le06-kap-06" },
      { id: "le06-snack-k06-05", faktC1: "Jede Zwischenposition ist ein Checkpoint: Stabilität prüfen, Kreislauf kontrollieren, dann erst weitermobilisieren.", faktB1: "Bei jedem Zwischenschritt: Ist der Mensch stabil? Ist der Kreislauf gut? Erst dann weiter.", kapitelRef: "le06-kap-06" },
    ],
  },

  // ── Kap 7: Kinästhetik Infant Handling ──────────────────────────
  {
    kapitelId: "le06-kap-07",
    titel: "Kinästhetik Infant Handling — Säuglinge richtig bewegen",
    titelB1: "Kinästhetik Infant Handling — Babys richtig bewegen",
    tag: "pflege",
    items: [
      { id: "le06-snack-k07-01", faktC1: "Säuglinge werden nach kinästhetischen Prinzipien immer über die Seite aufgenommen (spiralige Bewegung), nie parallel hochgehoben.", faktB1: "Babys immer über die Seite aufnehmen (= spiralige Bewegung). Nie gerade hochheben!", kapitelRef: "le06-kap-07" },
      { id: "le06-snack-k07-02", faktC1: "Beim Ablegen berühren die Füße zuerst die Unterlage, dann folgt der Körper über die Seitenlage in die Rückenlage.", faktB1: "Beim Ablegen: Die Füße berühren zuerst die Unterlage. Dann kommt der Körper über die Seite nach.", kapitelRef: "le06-kap-07" },
      { id: "le06-snack-k07-03", faktC1: "Abruptes paralleles Hochheben kann bei Säuglingen eine vestibuläre Überreizung des Gleichgewichtsorgans auslösen.", faktB1: "Schnelles, gerades Hochheben kann das Gleichgewichtsorgan des Babys überreizen.", kapitelRef: "le06-kap-07" },
      { id: "le06-snack-k07-04", faktC1: "Elternanleitung im Handling ist ein wichtiger pflegerischer Auftrag auf Wochenbett- und Neonatologie-Stationen.", faktB1: "Den Eltern das richtige Handling zeigen ist eine wichtige Aufgabe auf der Wochenbett-Station.", kapitelRef: "le06-kap-07" },
      { id: "le06-snack-k07-05", faktC1: "Spiralige Aufnahme gibt dem Vestibularsystem des Säuglings Zeit, sich an die Lageveränderung anzupassen.", faktB1: "Die spiralige Aufnahme gibt dem Gleichgewichtsorgan des Babys Zeit, sich anzupassen.", kapitelRef: "le06-kap-07" },
    ],
  },

  // ── Kap 8: Positionierung: Grundprinzipien ──────────────────────────
  {
    kapitelId: "le06-kap-08",
    titel: "Positionierung: Grundprinzipien",
    titelB1: "Positionierung: Die Grundregeln",
    tag: "pflege",
    items: [
      { id: "le06-snack-k08-01", faktC1: "Positionierung ist eine pflegerische Maßnahme mit definiertem Ziel: Druckentlastung, Atemerleichterung, Schmerzlinderung oder Bewegungsförderung.", faktB1: "Positionierung hat immer ein Ziel: Druck entlasten, Atmen erleichtern, Schmerzen lindern oder Bewegung fördern.", kapitelRef: "le06-kap-08" },
      { id: "le06-snack-k08-02", faktC1: "Scherkräfte entstehen, wenn die Haut gegen die Unterlage verschoben wird (z. B. beim Rutschen im Bett) und begünstigen Dekubitus.", faktB1: "Scher-Kräfte entstehen beim Rutschen im Bett. Die Haut wird verschoben. Das fördert einen Dekubitus.", kapitelRef: "le06-kap-08" },
      { id: "le06-snack-k08-03", faktC1: "Umlagerungsintervalle müssen individuell festgelegt werden — pauschale 2-Stunden-Intervalle sind nicht evidenzbasiert (DNQP 2017).", faktB1: "Wie oft du umlagern musst, ist individuell. „Alle 2 Stunden\" ist nicht wissenschaftlich bewiesen (DNQP 2017).", kapitelRef: "le06-kap-08" },
      { id: "le06-snack-k08-04", faktC1: "Der Fingertest unterscheidet wegdrückbare Rötung (Warnsignal) von nicht wegdrückbarer Rötung (Dekubitus Kategorie I).", faktB1: "Finger-Test: Wird die Rötung weiß beim Drücken? Dann nur ein Warnsignal. Bleibt sie rot? Dann Dekubitus Kategorie I.", kapitelRef: "le06-kap-08" },
      { id: "le06-snack-k08-05", faktC1: "Jedes überflüssige Lagerungskissen nimmt dem pflegebedürftigen Menschen Bewegungsfreiheit.", faktB1: "Jedes unnötige Kissen nimmt dem Menschen Bewegungsfreiheit. Weniger ist oft besser.", kapitelRef: "le06-kap-08" },
      { id: "le06-snack-k08-06", faktC1: "Der Mensch muss sich in der gewählten Position bequem fühlen, sonst bewegt er sich sofort wieder.", faktB1: "Der Mensch muss sich bequem fühlen in der Position. Sonst bewegt er sich sofort wieder.", kapitelRef: "le06-kap-08" },
    ],
  },

  // ── Kap 9: Rückenlage und Oberkörperhochlage ──────────────────────────
  {
    kapitelId: "le06-kap-09",
    titel: "Positionierungsarten (Teil 1): Rückenlage und Oberkörperhochlage",
    titelB1: "Positionierungsarten (Teil 1): Rückenlage und Oberkörper hoch",
    tag: "pflege",
    items: [
      { id: "le06-snack-k09-01", faktC1: "In der Rückenlage sind Hinterhaupt, Schulterblätter, Kreuzbein und Fersen dekubitusgefährdet.", faktB1: "In der Rückenlage sind diese Stellen gefährdet: Hinterkopf, Schulterblätter, Kreuzbein und Fersen.", kapitelRef: "le06-kap-09" },
      { id: "le06-snack-k09-02", faktC1: "Die Rückenlage verschlechtert die Belüftung der unteren Lungenabschnitte und erhöht das Pneumonierisiko.", faktB1: "In der Rückenlage bekommt der untere Teil der Lunge weniger Luft. Das Risiko für Lungenentzündung steigt.", kapitelRef: "le06-kap-09" },
      { id: "le06-snack-k09-03", faktC1: "Die Oberkörperhochlage (30°/45°/90°) wird bei Herz-/Lungenerkrankungen, Atemerleichterung und zum Essen eingesetzt.", faktB1: "Oberkörper hoch lagern (30°, 45° oder 90°) hilft bei Herz- oder Lungenproblemen und zum Essen.", kapitelRef: "le06-kap-09" },
      { id: "le06-snack-k09-04", faktC1: "Das Hauptrisiko der Oberkörperhochlage sind Scherkräfte durch Herunterrutschen im Bett.", faktB1: "Das Hauptproblem bei Oberkörper-Hochlage: Der Mensch rutscht im Bett nach unten. Das erzeugt Scher-Kräfte.", kapitelRef: "le06-kap-09" },
      { id: "le06-snack-k09-05", faktC1: "Gegenmaßnahme bei Scherkräften: Fußteil leicht anheben oder Anti-Rutsch-Unterlage verwenden.", faktB1: "Gegen das Rutschen: Das Fußteil leicht anheben. Oder eine Anti-Rutsch-Unterlage benutzen.", kapitelRef: "le06-kap-09" },
    ],
  },

  // ── Kap 10: 30°- und 90°-Seitenlage ──────────────────────────
  {
    kapitelId: "le06-kap-10",
    titel: "Positionierungsarten (Teil 2): 30°-Seitenlage und 90°-Seitenlage",
    titelB1: "Positionierungsarten (Teil 2): 30°- und 90°-Seitenlage",
    tag: "pflege",
    items: [
      { id: "le06-snack-k10-01", faktC1: "Die 30°-Seitenlage ist die zentrale Positionierung für die Dekubitusprophylaxe: Trochanter, Schulter und Kreuzbein werden entlastet.", faktB1: "Die 30°-Seitenlage ist die wichtigste Position gegen Dekubitus. Hüftknochen, Schulter und Kreuzbein werden entlastet.", kapitelRef: "le06-kap-10" },
      { id: "le06-snack-k10-02", faktC1: "Die 90°-Seitenlage erzeugt hohen Druck auf den Trochanter major und ist für die allgemeine Dekubitusprophylaxe ungeeignet.", faktB1: "Die 90°-Seitenlage drückt stark auf den Hüftknochen. Für die Dekubitus-Vorbeugung ist sie nicht geeignet.", kapitelRef: "le06-kap-10" },
      { id: "le06-snack-k10-03", faktC1: "Die 90°-Seitenlage hat ihren Platz im Bobath-Konzept (Hemiplegie) und nach Lungen-Operationen.", faktB1: "Die 90°-Seitenlage wird beim Bobath-Konzept und nach Lungen-Operationen benutzt.", kapitelRef: "le06-kap-10" },
      { id: "le06-snack-k10-04", faktC1: "Die 30°-Seitenlage verteilt das Körpergewicht auf eine große Fläche statt auf einen einzelnen Knochenvorsprung.", faktB1: "Die 30°-Seitenlage verteilt das Gewicht auf eine große Fläche. Kein einzelner Knochen wird stark belastet.", kapitelRef: "le06-kap-10" },
      { id: "le06-snack-k10-05", faktC1: "Der Trochanter major ist der seitliche Knochenvorsprung am Oberschenkel — eine der häufigsten Prädilektionsstellen.", faktB1: "Der Trochanter major ist der Knochen-Vorsprung an der Seite der Hüfte. Er ist eine der häufigsten gefährdeten Stellen.", kapitelRef: "le06-kap-10" },
    ],
  },

  // ── Kap 11: 135°, Bauchlage, Speziallagerungen ──────────────────────────
  {
    kapitelId: "le06-kap-11",
    titel: "Positionierungsarten (Teil 3): 135°-Lage, Bauchlage und Speziallagerungen",
    titelB1: "Positionierungsarten (Teil 3): Spezielle Lagen",
    tag: "pflege",
    items: [
      { id: "le06-snack-k11-01", faktC1: "Die 135°-Lage entlastet Kreuzbein und Fersen vollständig und eignet sich als Wechselposition bei Dekubitusrisiko.", faktB1: "Die 135°-Lage entlastet Kreuzbein und Fersen komplett. Sie eignet sich gut als Wechsel-Position.", kapitelRef: "le06-kap-11" },
      { id: "le06-snack-k11-02", faktC1: "Die Herzbettlage (Oberkörper hoch, Beine tief) entlastet das Herz bei Herzinsuffizienz.", faktB1: "Herzbett-Lage: Oberkörper hoch, Beine tief. Das entlastet das Herz bei Herzschwäche.", kapitelRef: "le06-kap-11" },
      { id: "le06-snack-k11-03", faktC1: "Die Schocklage (Beine hoch, Oberkörper flach) verbessert den venösen Rückstrom bei drohendem Kreislaufschock.", faktB1: "Schock-Lage: Beine hoch, Oberkörper flach. Das Blut fließt besser zum Herzen. Das hilft bei Kreislauf-Schock.", kapitelRef: "le06-kap-11" },
      { id: "le06-snack-k11-04", faktC1: "Die Nestlage gibt Frühgeborenen durch Lagerungshilfsmittel Sicherheit und fördert die Selbstwahrnehmung.", faktB1: "Die Nest-Lage gibt Frühgeborenen Sicherheit. Das Baby fühlt sich geborgen und nimmt seinen Körper wahr.", kapitelRef: "le06-kap-11" },
      { id: "le06-snack-k11-05", faktC1: "Jede Positionierung muss individuell akzeptiert werden — ablehnen darf der pflegebedürftige Mensch jederzeit.", faktB1: "Der Mensch darf jede Position jederzeit ablehnen.", kapitelRef: "le06-kap-11" },
    ],
  },

  // ── Kap 12: Mobilisation Grundsätze ──────────────────────────
  {
    kapitelId: "le06-kap-12",
    titel: "Mobilisation: Grundsätze und Vorbereitung",
    titelB1: "Mobilisation: Die Vorbereitung",
    tag: "pflege",
    items: [
      { id: "le06-snack-k12-01", faktC1: "Vor jeder Mobilisation: Befinden erfragen, Kreislauf kontrollieren, Muskelvenenpumpe aktivieren, Ziel erklären, Hilfsmittel bereitstellen.", faktB1: "Vor jeder Mobilisation: Wie fühlt sich der Mensch? Kreislauf prüfen. Füße bewegen lassen. Ziel erklären. Hilfsmittel bereitstellen.", kapitelRef: "le06-kap-12" },
      { id: "le06-snack-k12-02", faktC1: "Kommunikationsregel: Erst erklären, dann bewegen — eine Anweisung pro Handlungsschritt.", faktB1: "Erst erklären, dann bewegen. Pro Schritt nur eine Anweisung geben.", kapitelRef: "le06-kap-12" },
      { id: "le06-snack-k12-03", faktC1: "Eindeutige Orientierungswörter verwenden („zur Fensterseite\") statt links/rechts, da dies bei Gegenüberstellung verwirrt.", faktB1: "Sage „zur Fensterseite\" statt „links\". Weil links und rechts verwirren, wenn ihr euch gegenüber steht.", kapitelRef: "le06-kap-12" },
      { id: "le06-snack-k12-04", faktC1: "Ressourcenorientierung bedeutet: Was der Mensch selbst kann, macht er selbst — die Pflegeperson unterstützt gezielt (§ 2 PflBG).", faktB1: "Was der Mensch selbst kann, macht er selbst. Du hilfst nur dort, wo es nötig ist (§ 2 PflBG).", kapitelRef: "le06-kap-12" },
      { id: "le06-snack-k12-05", faktC1: "Rutschfestes Schuhwerk und festgestellte Bettbremsen sind Grundvoraussetzung für jede sichere Mobilisation.", faktB1: "Feste Schuhe und Bettbremsen fest: Das ist Pflicht bei jeder Mobilisation.", kapitelRef: "le06-kap-12" },
      { id: "le06-snack-k12-06", faktC1: "Fußkreisen und Fußwippen im Liegen aktivieren die Muskelvenenpumpe und reduzieren die Schwindelgefahr beim Aufstehen.", faktB1: "Fußkreisen und Fußwippen im Liegen aktivieren die Muskel-Venen-Pumpe. Das verringert Schwindel beim Aufstehen.", kapitelRef: "le06-kap-12" },
    ],
  },

  // ── Kap 13: Vom Bett an die Bettkante ──────────────────────────
  {
    kapitelId: "le06-kap-13",
    titel: "Mobilisation in der Praxis: Vom Bett an die Bettkante",
    titelB1: "Vom Bett an die Bettkante",
    tag: "pflege",
    items: [
      { id: "le06-snack-k13-01", faktC1: "Das Drehen im Bett erfolgt über eine spiralige Bewegung: Oberes Bein aufstellen, oberer Arm über den Körper, über die Seite drehen.", faktB1: "Drehen im Bett: Oberes Bein aufstellen. Oberen Arm über den Körper legen. Dann über die Seite drehen.", kapitelRef: "le06-kap-13" },
      { id: "le06-snack-k13-02", faktC1: "Die Pflegeperson unterstützt an Schulter und Becken (Massen), nicht an den Zwischenräumen.", faktB1: "Du unterstützt an Schulter und Becken (= Massen). Nicht an den Zwischenräumen!", kapitelRef: "le06-kap-13" },
      { id: "le06-snack-k13-03", faktC1: "Das Gewicht der nach unten gleitenden Beine erzeugt ein Drehmoment, das den Oberkörper beim Aufrichten unterstützt (Hebelprinzip).", faktB1: "Die Beine gleiten nach unten. Ihr Gewicht hilft, den Oberkörper aufzurichten. Das ist das Hebelprinzip.", kapitelRef: "le06-kap-13" },
      { id: "le06-snack-k13-04", faktC1: "Nach dem Aufrichten: 1–2 Minuten an der Bettkante sitzen lassen und den Kreislauf kontrollieren.", faktB1: "Nach dem Aufrichten: 1 bis 2 Minuten an der Bettkante sitzen lassen. Den Kreislauf prüfen.", kapitelRef: "le06-kap-13" },
      { id: "le06-snack-k13-05", faktC1: "Ein orthostatischer Blutdruckabfall beim Lagewechsel ist häufig, besonders nach längerer Bettruhe.", faktB1: "Beim Aufstehen kann der Blutdruck kurz abfallen. Das passiert oft nach langer Bettruhe.", kapitelRef: "le06-kap-13" },
    ],
  },

  // ── Kap 14: Transfer Bett in Rollstuhl ──────────────────────────
  {
    kapitelId: "le06-kap-14",
    titel: "Transfer: Vom Bett in den Rollstuhl",
    titelB1: "Transfer: Bett in Rollstuhl",
    tag: "pflege",
    items: [
      { id: "le06-snack-k14-01", faktC1: "Beim aktivierenden Transfer wird der Rollstuhl schräg zum Bett auf der stärkeren Seite des pflegebedürftigen Menschen gestellt.", faktB1: "Aktivierender Transfer: Rollstuhl schräg zum Bett stellen. Auf die starke Seite des Menschen.", kapitelRef: "le06-kap-14" },
      { id: "le06-snack-k14-02", faktC1: "Beim Bobath-Transfer wird der Rollstuhl auf die betroffene Seite gestellt, weil der Transfer über die betroffene Seite erfolgen soll.", faktB1: "Bobath-Transfer: Rollstuhl auf die gelähmte Seite stellen. Der Mensch soll über die gelähmte Seite umsteigen.", kapitelRef: "le06-kap-14" },
      { id: "le06-snack-k14-03", faktC1: "Das Rutschbrett ermöglicht einen sitzenden Transfer, die Drehscheibe einen stehenden Transfer mit eingeschränkter Drehfähigkeit.", faktB1: "Rutschbrett: sitzend umsetzen. Drehscheibe: stehend drehen, wenn das Drehen allein schwierig ist.", kapitelRef: "le06-kap-14" },
      { id: "le06-snack-k14-04", faktC1: "Ein Patientenlifter wird bei fehlendem Steh- und Drehvermögen eingesetzt und erfordert mindestens zwei Pflegepersonen.", faktB1: "Patienten-Lifter: wenn der Mensch nicht stehen und nicht drehen kann. Du brauchst mindestens 2 Personen.", kapitelRef: "le06-kap-14" },
      { id: "le06-snack-k14-05", faktC1: "Die Transferwahl muss individuell begründet sein: Barthel-Index, Belastungsvorgabe, Gleichgewicht, kognitiver Status.", faktB1: "Die Art des Transfers hängt ab von: Barthel-Index, Vorgabe des Arztes, Gleichgewicht und geistigem Zustand.", kapitelRef: "le06-kap-14" },
      { id: "le06-snack-k14-06", faktC1: "Vor jedem Transfer: Bremsen feststellen und Fußstützen wegklappen.", faktB1: "Vor jedem Transfer: Bremsen fest! Fußstützen wegklappen!", kapitelRef: "le06-kap-14" },
    ],
  },

  // ── Kap 15: Hilfsmittel ──────────────────────────
  {
    kapitelId: "le06-kap-15",
    titel: "Hilfsmittel bei der Mobilisation",
    titelB1: "Hilfsmittel für die Mobilität",
    tag: "pflege",
    items: [
      { id: "le06-snack-k15-01", faktC1: "Der Gehstock wird kontralateral eingesetzt — also auf der Gegenseite zur Schwäche.", faktB1: "Den Gehstock auf der gesunden Seite halten. Also auf der Gegenseite zur Schwäche.", kapitelRef: "le06-kap-15" },
      { id: "le06-snack-k15-02", faktC1: "Richtige Gehstockhöhe: Oberkante des Griffs auf Höhe des Handgelenks bei aufrecht stehendem Menschen.", faktB1: "Die richtige Höhe: Der Griff ist auf Höhe des Handgelenks, wenn der Mensch aufrecht steht.", kapitelRef: "le06-kap-15" },
      { id: "le06-snack-k15-03", faktC1: "Bei Unterarmgehstützen gibt der Arzt die Belastungsvorgabe vor (z. B. 20 kg Teilbelastung).", faktB1: "Bei Gehstützen sagt der Arzt, wie viel Gewicht auf das Bein darf. Zum Beispiel: 20 kg.", kapitelRef: "le06-kap-15" },
      { id: "le06-snack-k15-04", faktC1: "Beim Treppensteigen mit Gehstützen: Gesundes Bein zuerst hoch, krankes Bein zuerst runter.", faktB1: "Treppe hoch: gesundes Bein zuerst. Treppe runter: krankes Bein zuerst.", kapitelRef: "le06-kap-15" },
      { id: "le06-snack-k15-05", faktC1: "Bei einem Rollator müssen die Bremsen erklärt und geübt werden — ohne Bremskompetenz wird er zur Sturzfalle.", faktB1: "Beim Rollator müssen die Bremsen erklärt und geübt werden. Ohne Bremsen-Übung wird er gefährlich.", kapitelRef: "le06-kap-15" },
      { id: "le06-snack-k15-06", faktC1: "Eine pauschale Hilfsmittelzuordnung ohne Bezug zum konkreten pflegebedürftigen Menschen ist ein typischer Prüfungsfehler.", faktB1: "Hilfsmittel immer individuell auswählen. „Rollator für alle\" ist falsch und ein typischer Prüfungsfehler.", kapitelRef: "le06-kap-15" },
    ],
  },

  // ── Kap 16: Bobath ──────────────────────────
  {
    kapitelId: "le06-kap-16",
    titel: "Das Bobath-Konzept — Neurologische Patienten mobilisieren",
    titelB1: "Das Bobath-Konzept",
    tag: "pflege",
    items: [
      { id: "le06-snack-k16-01", faktC1: "Das Bobath-Konzept (Bobath, 1970er) ist das verbreitetste Therapiekonzept für neurologische Patienten nach Schlaganfall, MS und Parkinson.", faktB1: "Das Bobath-Konzept (1970er) ist das bekannteste Konzept für Patienten nach Schlaganfall, MS und Parkinson.", kapitelRef: "le06-kap-16" },
      { id: "le06-snack-k16-02", faktC1: "Grundprinzip: Die betroffene (gelähmte) Körperseite wird aktiv in alle Handlungen einbezogen, nicht kompensiert.", faktB1: "Grundprinzip: Die gelähmte Seite wird immer mit einbezogen. Nicht weglassen!", kapitelRef: "le06-kap-16" },
      { id: "le06-snack-k16-03", faktC1: "Konkret: Von der betroffenen Seite ansprechen, Nachttisch auf die betroffene Seite, über die betroffene Seite mobilisieren.", faktB1: "Konkret: Von der gelähmten Seite ansprechen. Nachttisch dort hinstellen. Über diese Seite mobilisieren.", kapitelRef: "le06-kap-16" },
      { id: "le06-snack-k16-04", faktC1: "Ziel: Normalisierung des Muskeltonus und Anbahnung physiologischer Bewegungsmuster.", faktB1: "Ziel: Die Muskel-Spannung soll normal werden. Der Körper soll wieder natürliche Bewegungen lernen.", kapitelRef: "le06-kap-16" },
      { id: "le06-snack-k16-05", faktC1: "Wird die betroffene Seite ignoriert, verstärkt sich ein Neglect (Aufmerksamkeitsstörung für eine Körper-/Raumhälfte).", faktB1: "Wenn du die gelähmte Seite ignorierst, wird ein Neglect schlimmer. Der Mensch nimmt dann eine Seite gar nicht mehr wahr.", kapitelRef: "le06-kap-16" },
    ],
  },

  // ── Kap 17: Dekubitus Definition ──────────────────────────
  {
    kapitelId: "le06-kap-17",
    titel: "Dekubitusprophylaxe: Was ist ein Dekubitus?",
    titelB1: "Was ist ein Dekubitus?",
    tag: "krankheitslehre",
    items: [
      { id: "le06-snack-k17-01", faktC1: "Ein Dekubitus ist eine lokal begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes über Knochenvorsprüngen durch Druck und/oder Scherkräfte (NPUAP/EPUAP, 2014).", faktB1: "Ein Dekubitus (= Druckgeschwür) ist eine Wunde an der Haut über Knochen. Ursache: zu langer Druck oder Scher-Kräfte (NPUAP/EPUAP, 2014).", kapitelRef: "le06-kap-17" },
      { id: "le06-snack-k17-02", faktC1: "Kategorie I: Nicht wegdrückbare Rötung bei intakter Haut (Fingertest positiv).", faktB1: "Kat. I: Die Haut ist rot. Die Rötung geht beim Drücken nicht weg. Die Haut ist noch ganz.", kapitelRef: "le06-kap-17" },
      { id: "le06-snack-k17-03", faktC1: "Kategorie II: Teilzerstörung der Haut — Blasenbildung oder flaches Geschwür.", faktB1: "Kat. II: Die Haut ist teilweise kaputt. Es gibt eine Blase oder eine flache Wunde.", kapitelRef: "le06-kap-17" },
      { id: "le06-snack-k17-04", faktC1: "Kategorie III: Vollständiger Hautverlust, Unterhautfettgewebe sichtbar, kein Knochen/Muskel.", faktB1: "Kat. III: Die Haut ist komplett zerstört. Man sieht das Fettgewebe. Knochen und Muskeln liegen nicht frei.", kapitelRef: "le06-kap-17" },
      { id: "le06-snack-k17-05", faktC1: "Kategorie IV: Vollständiger Gewebeverlust mit freiliegendem Knochen, Sehnen oder Muskeln.", faktB1: "Kat. IV: Alles ist zerstört. Knochen, Sehnen oder Muskeln liegen frei.", kapitelRef: "le06-kap-17" },
      { id: "le06-snack-k17-06", faktC1: "Die Prädilektionsstellen hängen von der Position ab: In Rückenlage sind Hinterhaupt, Schulterblätter, Kreuzbein und Fersen besonders gefährdet.", faktB1: "Welche Stellen gefährdet sind, hängt von der Position ab. Rückenlage: Hinterkopf, Schulterblätter, Kreuzbein, Fersen.", kapitelRef: "le06-kap-17" },
    ],
  },

  // ── Kap 18: Dekubitus Risikofaktoren ──────────────────────────
  {
    kapitelId: "le06-kap-18",
    titel: "Dekubitusprophylaxe: Risikofaktoren und Assessment",
    titelB1: "Dekubitus: Wer ist gefährdet?",
    tag: "krankheitslehre",
    items: [
      { id: "le06-snack-k18-01", faktC1: "Dekubitus-Risikofaktoren gliedern sich in personenbezogene, umgebungsbezogene und therapiebezogene Faktoren.", faktB1: "Es gibt 3 Arten von Risikofaktoren: personen-bezogen, umgebungs-bezogen und therapie-bezogen.", kapitelRef: "le06-kap-18" },
      { id: "le06-snack-k18-02", faktC1: "Die Braden-Skala erfasst 6 Subskalen mit einem Gesamtscore von 6–23 — niedriger Wert bedeutet höheres Risiko (Braden/Bergstrom, 1987).", faktB1: "Die Braden-Skala hat 6 Bereiche. Das Ergebnis: 6 bis 23 Punkte. Wenige Punkte = hohes Risiko (Braden/Bergstrom, 1987).", kapitelRef: "le06-kap-18" },
      { id: "le06-snack-k18-03", faktC1: "Die 6 Braden-Subskalen: Sensorisches Empfindungsvermögen, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte.", faktB1: "Die 6 Bereiche der Braden-Skala: Empfinden, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung.", kapitelRef: "le06-kap-18" },
      { id: "le06-snack-k18-04", faktC1: "Der Fingertest ist die wichtigste Früherkennungsmaßnahme: Nicht wegdrückbare Rötung = Dekubitus Kategorie I = sofortige Druckentlastung.", faktB1: "Der Finger-Test ist die wichtigste Früherkennung. Rötung geht nicht weg = Kat. I = sofort Druck entlasten!", kapitelRef: "le06-kap-18" },
      { id: "le06-snack-k18-05", faktC1: "Eingeschränkte Mobilität ist der wichtigste personenbezogene Risikofaktor für Dekubitus.", faktB1: "Der wichtigste Risikofaktor: Der Mensch kann sich nicht gut bewegen.", kapitelRef: "le06-kap-18" },
      { id: "le06-snack-k18-06", faktC1: "Hautbeobachtung an den Prädilektionsstellen muss bei jedem Positionswechsel erfolgen.", faktB1: "Bei jedem Positionswechsel musst du die gefährdeten Hautstellen prüfen.", kapitelRef: "le06-kap-18" },
    ],
  },

  // ── Kap 19: Dekubitus Maßnahmen ──────────────────────────
  {
    kapitelId: "le06-kap-19",
    titel: "Dekubitusprophylaxe: Maßnahmen",
    titelB1: "Dekubitus verhindern: Was hilft wirklich?",
    tag: "pflege",
    items: [
      { id: "le06-snack-k19-01", faktC1: "Kernsatz: Bewegung geht vor Positionierung — Eigenbewegung fördern ist die wichtigste Maßnahme (DNQP 2017).", faktB1: "Der wichtigste Satz: Bewegung geht vor Positionierung! Eigenbewegung fördern ist am wichtigsten (DNQP 2017).", kapitelRef: "le06-kap-19" },
      { id: "le06-snack-k19-02", faktC1: "Spezialmatratzen (Weichlagerung, Wechseldruck) kommen erst zum Einsatz, wenn Eigenbewegung nicht ausreicht.", faktB1: "Spezial-Matratzen kommen erst, wenn Eigenbewegung nicht reicht.", kapitelRef: "le06-kap-19" },
      { id: "le06-snack-k19-03", faktC1: "Nicht evidenzbasiert: Einreiben mit durchblutungsfördernden Mitteln — kein Nutzen belegt, kann die Haut schädigen.", faktB1: "Nicht bewiesen: Einreiben mit Durchblutungs-Cremes. Hilft nicht und kann die Haut schädigen.", kapitelRef: "le06-kap-19" },
      { id: "le06-snack-k19-04", faktC1: "Nicht evidenzbasiert: Massage über Knochenvorsprüngen — kann bereits druckgeschädigtes Gewebe zusätzlich belasten.", faktB1: "Nicht bewiesen: Massage über Knochen. Das kann das geschädigte Gewebe noch mehr belasten.", kapitelRef: "le06-kap-19" },
      { id: "le06-snack-k19-05", faktC1: "Nicht evidenzbasiert: Pauschale 2-Stunden-Umlagerung ohne individuelle Hautbeurteilung.", faktB1: "Nicht bewiesen: Alle 2 Stunden umlagern, ohne die Haut zu prüfen.", kapitelRef: "le06-kap-19" },
    ],
  },

  // ── Kap 20: Sturz Risikofaktoren ──────────────────────────
  {
    kapitelId: "le06-kap-20",
    titel: "Sturzprophylaxe: Risikofaktoren erkennen",
    titelB1: "Sturzprophylaxe: Wer ist gefährdet?",
    tag: "pflege",
    items: [
      { id: "le06-snack-k20-01", faktC1: "Ein Sturz ist jedes unbeabsichtigte Aufkommen auf dem Boden oder einer tieferen Ebene — auch ein Sturz auf die Knie zählt (DNQP 2013).", faktB1: "Ein Sturz = ungewolltes Hinfallen. Auch ein Sturz auf die Knie zählt (DNQP 2013).", kapitelRef: "le06-kap-20" },
      { id: "le06-snack-k20-02", faktC1: "Personenbezogene Sturzrisikofaktoren: Alter, Gleichgewichtsstörungen, Sehbeeinträchtigungen, kognitive Einschränkungen, Sturzangst.", faktB1: "Risiken bei der Person: Alter, Gleichgewichts-Probleme, schlechtes Sehen, Gedächtnis-Probleme, Sturz-Angst.", kapitelRef: "le06-kap-20" },
      { id: "le06-snack-k20-03", faktC1: "Medikamentenbezogene Risikofaktoren: Polypharmazie (≥5 Medikamente), psychotrope Medikamente, Antihypertensiva.", faktB1: "Risiken bei Medikamenten: 5 oder mehr Medikamente, Beruhigungsmittel, Blutdruck-Medikamente.", kapitelRef: "le06-kap-20" },
      { id: "le06-snack-k20-04", faktC1: "Umgebungsbezogene Risikofaktoren: Stolperfallen, schlechte Beleuchtung, falsches Schuhwerk, nicht festgestellte Bettbremsen.", faktB1: "Risiken in der Umgebung: Stolperfallen, schlechtes Licht, falsche Schuhe, Bettbremsen nicht fest.", kapitelRef: "le06-kap-20" },
      { id: "le06-snack-k20-05", faktC1: "Mehr als 50 % aller gestürzten Personen stürzen innerhalb von 12 Monaten erneut (DNQP 2013).", faktB1: "Mehr als 50 % der gestürzten Menschen stürzen innerhalb von 12 Monaten noch einmal (DNQP 2013).", kapitelRef: "le06-kap-20" },
      { id: "le06-snack-k20-06", faktC1: "Beinahestürze sind ein Frühwarnzeichen für erhöhtes Sturzrisiko und müssen dokumentiert werden.", faktB1: "Fast-Stürze sind ein Frühwarnzeichen. Du musst sie aufschreiben und melden.", kapitelRef: "le06-kap-20" },
    ],
  },

  // ── Kap 21: Sturz TUG + Maßnahmen ──────────────────────────
  {
    kapitelId: "le06-kap-21",
    titel: "Sturzprophylaxe: Assessment und Maßnahmen",
    titelB1: "Sturzprophylaxe: TUG-Test und Maßnahmen",
    tag: "pflege",
    items: [
      { id: "le06-snack-k21-01", faktC1: "TUG-Test: Aufstehen, 3 m gehen, umdrehen, zurück, setzen — unter 10 s unauffällig, ab 20 s erhöhtes Sturzrisiko (Podsiadlo/Richardson, 1991).", faktB1: "TUG-Test: Aufstehen, 3 Meter gehen, umdrehen, zurück, setzen. Unter 10 Sekunden = gut. Ab 20 Sekunden = hohes Sturzrisiko.", kapitelRef: "le06-kap-21" },
      { id: "le06-snack-k21-02", faktC1: "Kraft- und Gleichgewichtstraining ist die evidenzbasiert wirksamste Einzelmaßnahme der Sturzprophylaxe.", faktB1: "Kraft- und Gleichgewichts-Training ist die beste bewiesene Maßnahme gegen Stürze.", kapitelRef: "le06-kap-21" },
      { id: "le06-snack-k21-03", faktC1: "Maßnahmen: Geeignetes Schuhwerk, Haltegriffe, Nachtbeleuchtung, Stolperfallen beseitigen, Klingel in Reichweite.", faktB1: "Maßnahmen: Gute Schuhe, Haltegriffe, Nachtlicht, Stolperfallen weg, Klingel in Reichweite.", kapitelRef: "le06-kap-21" },
      { id: "le06-snack-k21-04", faktC1: "Die Sturzangst-Spirale: Sturz → Angst → weniger Bewegung → Muskelabbau → höheres Sturzrisiko → erneuter Sturz.", faktB1: "Die Spirale: Sturz, dann Angst, dann weniger Bewegung, dann Muskelabbau, dann wieder Sturz.", kapitelRef: "le06-kap-21" },
      { id: "le06-snack-k21-05", faktC1: "Die Sturzangst-Spirale wird durchbrochen durch Ermutigung, schrittweise Mobilisation und Sicherheit vermitteln.", faktB1: "Die Spirale stoppen: Ermutigen. Schritt für Schritt mobilisieren. Sicherheit geben.", kapitelRef: "le06-kap-21" },
      { id: "le06-snack-k21-06", faktC1: "Medikamentenüberprüfung (insbesondere Sedativa, Psychopharmaka) ist Teil der Sturzprophylaxe.", faktB1: "Die Medikamente prüfen gehört zur Sturz-Vorbeugung. Besonders Beruhigungsmittel und Schlafmittel.", kapitelRef: "le06-kap-21" },
    ],
  },

  // ── Kap 22: Kontraktur Theorie ──────────────────────────
  {
    kapitelId: "le06-kap-22",
    titel: "Kontrakturenprophylaxe: Wenn Gelenke versteifen",
    titelB1: "Kontrakturen: Wenn Gelenke versteifen",
    tag: "krankheitslehre",
    items: [
      { id: "le06-snack-k22-01", faktC1: "Eine Kontraktur ist die dauerhafte Gelenkversteifung durch Schrumpfung von Muskeln, Sehnen und Bändern.", faktB1: "Eine Kontraktur (= Gelenk-Versteifung): Muskeln und Bänder werden zu kurz. Das Gelenk bewegt sich nicht mehr.", kapitelRef: "le06-kap-22" },
      { id: "le06-snack-k22-02", faktC1: "Kontrakturen können bereits nach 4–14 Tagen Ruhigstellung entstehen und irreversibel werden.", faktB1: "Schon nach 4 bis 14 Tagen im Bett kann eine Kontraktur entstehen. Oft ist sie dann dauerhaft.", kapitelRef: "le06-kap-22" },
      { id: "le06-snack-k22-03", faktC1: "Der Spitzfuß entsteht, wenn die Bettdecke den Fuß permanent in Plantarflexion drückt.", faktB1: "Der Spitz-Fuß entsteht, wenn die Bettdecke dauerhaft auf den Fuß drückt. Der Fuß zeigt dann nach unten.", kapitelRef: "le06-kap-22" },
      { id: "le06-snack-k22-04", faktC1: "Besonders gefährdete Gelenke: Sprunggelenk (Spitzfuß), Handgelenk/Finger (Krallenhand), Hüfte (Beugekontraktur), Knie (Streckkontraktur).", faktB1: "Besonders gefährdet: Fuß-Gelenk (Spitz-Fuß), Hand (Krallen-Hand), Hüfte und Knie.", kapitelRef: "le06-kap-22" },
      { id: "le06-snack-k22-05", faktC1: "Kontrakturenprophylaxe muss vom ersten Tag der Immobilität an beginnen — nicht erst bei ersten Anzeichen.", faktB1: "Kontraktur-Vorbeugung muss ab dem ersten Tag der Bettruhe beginnen. Nicht erst bei ersten Anzeichen!", kapitelRef: "le06-kap-22" },
    ],
  },

  // ── Kap 23: Kontraktur Maßnahmen ──────────────────────────
  {
    kapitelId: "le06-kap-23",
    titel: "Kontrakturenprophylaxe: Maßnahmen und Übungen",
    titelB1: "Kontrakturen verhindern",
    tag: "pflege",
    items: [
      { id: "le06-snack-k23-01", faktC1: "Aktive Bewegungsübungen (der Mensch bewegt selbst) sind passiven Übungen (die Pflegeperson bewegt) vorzuziehen.", faktB1: "Besser: Der Mensch bewegt selbst (= aktiv). Wenn das nicht geht: Du bewegst das Gelenk für ihn (= passiv).", kapitelRef: "le06-kap-23" },
      { id: "le06-snack-k23-02", faktC1: "Bei passiven Bewegungsübungen: Langsam, ohne Schmerzen, durch den vollen physiologischen Bewegungsumfang führen.", faktB1: "Bei passiven Übungen: Langsam bewegen. Ohne Schmerzen. Den vollen Bewegungsumfang nutzen.", kapitelRef: "le06-kap-23" },
      { id: "le06-snack-k23-03", faktC1: "Ein Bettbogen nimmt den Druck der Bettdecke vom Fuß und verhindert den Spitzfuß.", faktB1: "Ein Bettbogen hält die Bettdecke vom Fuß weg. So entsteht kein Spitz-Fuß.", kapitelRef: "le06-kap-23" },
      { id: "le06-snack-k23-04", faktC1: "Die Funktionsstellung ist die Gelenkposition, die im Alltag am meisten Funktion erhält (z. B. Greifstellung der Hand).", faktB1: "Funktions-Stellung: Die Position, die im Alltag am wichtigsten ist. Zum Beispiel: die Hand in Greif-Stellung.", kapitelRef: "le06-kap-23" },
      { id: "le06-snack-k23-05", faktC1: "Die Neutral-Null-Stellung ist die anatomische Ausgangsposition zur Messung des Bewegungsumfangs.", faktB1: "Neutral-Null-Stellung: Der Mensch steht aufrecht. Ab hier misst du, wie weit ein Gelenk sich bewegt.", kapitelRef: "le06-kap-23" },
    ],
  },

  // ── Kap 24: Thrombose Virchow ──────────────────────────
  {
    kapitelId: "le06-kap-24",
    titel: "Thromboseprophylaxe: Die Virchow-Trias verstehen",
    titelB1: "Thrombose: Die Virchow-Trias",
    tag: "krankheitslehre",
    items: [
      { id: "le06-snack-k24-01", faktC1: "Die Virchow-Trias (Virchow, 1856) beschreibt drei Faktoren der Thromboseentstehung: verlangsamter Blutfluss, Gefäßwandschädigung, erhöhte Gerinnungsneigung.", faktB1: "Die Virchow-Trias nennt 3 Gründe für Thrombose: langsamer Blutfluss, beschädigte Gefäßwand, Blut gerinnt zu schnell (Virchow, 1856).", kapitelRef: "le06-kap-24" },
      { id: "le06-snack-k24-02", faktC1: "Bei Immobilität fällt die Muskelvenenpumpe aus — das Blut staut sich in den Beinvenen.", faktB1: "Ohne Bewegung arbeitet die Muskel-Venen-Pumpe nicht. Das Blut staut sich in den Beinvenen.", kapitelRef: "le06-kap-24" },
      { id: "le06-snack-k24-03", faktC1: "Expositionelle Risikofaktoren sind akut (OP, Trauma, Immobilisation), dispositionelle sind dauerhaft (Alter >60, Tumor, Adipositas) (AWMF 2015).", faktB1: "Vorübergehende Risiken: OP, Verletzung, Bettruhe. Dauerhafte Risiken: Alter über 60, Krebs, starkes Übergewicht (AWMF 2015).", kapitelRef: "le06-kap-24" },
      { id: "le06-snack-k24-04", faktC1: "Eine tiefe Beinvenenthrombose kann im Frühstadium symptomarm oder symptomlos sein.", faktB1: "Eine tiefe Bein-Venen-Thrombose kann am Anfang keine Anzeichen haben. Deshalb ist sie so gefährlich.", kapitelRef: "le06-kap-24" },
      { id: "le06-snack-k24-05", faktC1: "Löst sich ein Blutgerinnsel, kann es über das venöse System in die Lunge wandern und eine potenziell tödliche Lungenembolie verursachen.", faktB1: "Löst sich das Gerinnsel, wandert es in die Lunge. Das heißt Lungen-Embolie und ist lebensgefährlich.", kapitelRef: "le06-kap-24" },
      { id: "le06-snack-k24-06", faktC1: "Das Gesamtrisiko für Thrombose ergibt sich aus der Kombination von expositionellen und dispositionellen Faktoren.", faktB1: "Das Gesamt-Risiko ergibt sich aus vorübergehenden und dauerhaften Risiken zusammen.", kapitelRef: "le06-kap-24" },
    ],
  },

  // ── Kap 25: Thrombose Maßnahmen ──────────────────────────
  {
    kapitelId: "le06-kap-25",
    titel: "Thromboseprophylaxe: Maßnahmen — Von MTS bis Heparin",
    titelB1: "Thrombose verhindern: MTS und Heparin",
    tag: "pflege",
    items: [
      { id: "le06-snack-k25-01", faktC1: "Frühmobilisation und Aktivierung der Wadenmuskulatur sind die wichtigsten Maßnahmen der Thromboseprophylaxe (AWMF 2015).", faktB1: "Früh aufstehen und die Wadenmuskeln aktivieren sind die wichtigsten Maßnahmen gegen Thrombose (AWMF 2015).", kapitelRef: "le06-kap-25" },
      { id: "le06-snack-k25-02", faktC1: "MTS erzeugen Kompression von distal (Fuß) nach proximal (Oberschenkel) und werden morgens vor dem Aufstehen angezogen.", faktB1: "Thrombose-Strümpfe (MTS) drücken am Fuß stärker als am Oberschenkel. Man zieht sie morgens vor dem Aufstehen an.", kapitelRef: "le06-kap-25" },
      { id: "le06-snack-k25-03", faktC1: "MTS müssen faltenfrei sitzen — Falten erzeugen eine lokale Stauung und wirken kontraproduktiv.", faktB1: "Die Strümpfe müssen ohne Falten sitzen. Falten erzeugen eine Stauung. Das ist schlecht.", kapitelRef: "le06-kap-25" },
      { id: "le06-snack-k25-04", faktC1: "Der Zehenbereich der MTS bleibt frei, damit die Durchblutung kontrolliert werden kann.", faktB1: "Die Zehen bleiben frei. So kannst du die Durchblutung kontrollieren.", kapitelRef: "le06-kap-25" },
      { id: "le06-snack-k25-05", faktC1: "Medikamentöse Prophylaxe: Niedermolekulares Heparin subkutan nach ärztlicher Anordnung.", faktB1: "Medikamente: Heparin-Spritze unter die Haut. Nur nach Anordnung des Arztes.", kapitelRef: "le06-kap-25" },
      { id: "le06-snack-k25-06", faktC1: "Ausreichende Flüssigkeitszufuhr ist wichtig, da Dehydratation die Blutviskosität und damit die Gerinnungsneigung erhöht.", faktB1: "Genug trinken ist wichtig. Bei zu wenig Flüssigkeit wird das Blut dicker. Dann gerinnt es schneller.", kapitelRef: "le06-kap-25" },
    ],
  },

  // ── Kap 26: Pneumonie LISA ──────────────────────────
  {
    kapitelId: "le06-kap-26",
    titel: "Pneumonieprophylaxe: Das LISA-Prinzip",
    titelB1: "Pneumonie verhindern: LISA",
    tag: "pflege",
    items: [
      { id: "le06-snack-k26-01", faktC1: "LISA steht für: Lungenbelüftung verbessern, Infektionen vermeiden, Sekret mobilisieren, Aspiration vermeiden.", faktB1: "LISA = L: Lunge besser belüften. I: Infektionen vermeiden. S: Schleim lösen. A: Verschlucken vermeiden.", kapitelRef: "le06-kap-26" },
      { id: "le06-snack-k26-02", faktC1: "In Deutschland werden jährlich 400.000–600.000 Pneumoniefälle behandelt (Stand 2020er, RKI).", faktB1: "In Deutschland gibt es jährlich 400.000 bis 600.000 Fälle von Lungenentzündung (RKI, 2020er).", kapitelRef: "le06-kap-26" },
      { id: "le06-snack-k26-03", faktC1: "Im Liegen werden die unteren Lungenabschnitte schlechter belüftet — Sekret sammelt sich, Bakterien vermehren sich.", faktB1: "Im Liegen bekommt der untere Teil der Lunge wenig Luft. Schleim sammelt sich. Bakterien vermehren sich.", kapitelRef: "le06-kap-26" },
      { id: "le06-snack-k26-04", faktC1: "Mundpflege ist Pneumonieprophylaxe: Keime im Mundraum können bei eingeschränktem Hustenreflex in die tiefen Atemwege gelangen.", faktB1: "Mundpflege schützt vor Lungenentzündung. Keime im Mund können in die Lunge gelangen, wenn der Mensch schlecht husten kann.", kapitelRef: "le06-kap-26" },
      { id: "le06-snack-k26-05", faktC1: "Aspiration bedeutet das Eindringen von Nahrung, Flüssigkeit oder Speichel in die Atemwege unterhalb der Stimmritze.", faktB1: "Aspiration (= Verschlucken in die Lunge): Essen, Trinken oder Speichel gelangt in die Atemwege.", kapitelRef: "le06-kap-26" },
      { id: "le06-snack-k26-06", faktC1: "Dysphagie (Schluckstörung) ist ein Hauptrisikofaktor für Aspiration — besonders nach Schlaganfall.", faktB1: "Dysphagie (= Schluck-Störung) ist der Hauptgrund für Verschlucken. Besonders nach einem Schlaganfall.", kapitelRef: "le06-kap-26" },
      { id: "le06-snack-k26-07", faktC1: "Aufrechte Position beim Essen und Trinken sowie Prüfung des Schluckstatus sind zentrale Aspirationsprophylaxe-Maßnahmen.", faktB1: "Beim Essen und Trinken: aufrecht sitzen. Vorher das Schlucken prüfen. Das schützt vor Verschlucken.", kapitelRef: "le06-kap-26" },
    ],
  },

  // ── Kap 27: Prophylaxe-Bündel ──────────────────────────
  {
    kapitelId: "le06-kap-27",
    titel: "Prophylaxen im Zusammenhang: Das Prophylaxe-Bündel",
    titelB1: "Prophylaxen zusammen denken",
    tag: "pflege",
    items: [
      { id: "le06-snack-k27-01", faktC1: "Bei immobilen Menschen müssen Dekubitus-, Sturz-, Kontraktur-, Thrombose- und Pneumonieprophylaxe gleichzeitig bedacht werden.", faktB1: "Bei unbeweglichen Menschen musst du alle 5 Vorbeugungen gleichzeitig bedenken: Dekubitus, Sturz, Kontraktur, Thrombose, Pneumonie.", kapitelRef: "le06-kap-27" },
      { id: "le06-snack-k27-02", faktC1: "Das Zusammendenken mehrerer Prophylaxen als „Bündel\" ist eine pflegerische Kernkompetenz.", faktB1: "Alle Vorbeugungen zusammen zu denken ist eine wichtige Fähigkeit von Pflegefachpersonen.", kapitelRef: "le06-kap-27" },
      { id: "le06-snack-k27-03", faktC1: "Frühmobilisation wirkt gleichzeitig auf alle fünf Prophylaxen: Durchblutung, Muskelvenenpumpe, Lungenbelüftung, Gelenkbeweglichkeit, Kraft/Gleichgewicht.", faktB1: "Frühmobilisation hilft gegen alle 5 Gefahren gleichzeitig: Durchblutung, Muskelpumpe, Lunge, Gelenke, Kraft.", kapitelRef: "le06-kap-27" },
      { id: "le06-snack-k27-04", faktC1: "Frühmobilisation ist die wirksamste Einzelmaßnahme im gesamten Prophylaxe-Bündel (DNQP 2020).", faktB1: "Frühmobilisation ist die beste Einzelmaßnahme von allen (DNQP 2020).", kapitelRef: "le06-kap-27" },
      { id: "le06-snack-k27-05", faktC1: "Ein guter Prophylaxe-Plan beginnt mit der Frage: Was kann dieser Mensch heute an Bewegung leisten?", faktB1: "Die erste Frage bei der Planung: Was kann dieser Mensch heute an Bewegung schaffen?", kapitelRef: "le06-kap-27" },
    ],
  },

  // ── Kap 28: Schlaf Grundlagen ──────────────────────────
  {
    kapitelId: "le06-kap-28",
    titel: "Schlaf als Ressource: Grundlagen des Schlafs",
    titelB1: "Schlaf: die Grundlagen",
    tag: "pflege",
    items: [
      { id: "le06-snack-k28-01", faktC1: "Ein Schlafzyklus dauert durchschnittlich 90 Minuten und besteht aus Non-REM-Schlaf (Leicht-/Tiefschlaf) und REM-Schlaf (Traumschlaf).", faktB1: "Ein Schlaf-Zyklus dauert ungefähr 90 Minuten. Er hat Leicht- und Tiefschlaf und dann Traumschlaf (REM).", kapitelRef: "le06-kap-28" },
      { id: "le06-snack-k28-02", faktC1: "Pro Nacht durchläuft ein Mensch 4–7 Schlafzyklen (ICSD-3, 2014).", faktB1: "Pro Nacht gibt es 4 bis 7 Schlaf-Zyklen (ICSD-3, 2014).", kapitelRef: "le06-kap-28" },
      { id: "le06-snack-k28-03", faktC1: "Im Alter werden die Tiefschlafphasen kürzer und das Aufwachen häufiger — das ist eine normale altersbedingte Veränderung, keine Schlafstörung.", faktB1: "Im Alter wird der Tiefschlaf kürzer und das Aufwachen häufiger. Das ist normal. Das ist keine Schlafstörung.", kapitelRef: "le06-kap-28" },
      { id: "le06-snack-k28-04", faktC1: "Schlafmangel führt zu Müdigkeit und eingeschränkter Koordination — das Sturzrisiko steigt.", faktB1: "Zu wenig Schlaf macht müde und unsicher. Das Sturzrisiko steigt.", kapitelRef: "le06-kap-28" },
      { id: "le06-snack-k28-05", faktC1: "Schlafmedikamente (Sedativa) erhöhen die Sturzgefahr zusätzlich durch Tagesschläfrigkeit und unsicheren Gang.", faktB1: "Schlaf-Medikamente machen tagsüber müde und den Gang unsicher. Das erhöht die Sturzgefahr.", kapitelRef: "le06-kap-28" },
    ],
  },

  // ── Kap 29: Schlafhygiene ──────────────────────────
  {
    kapitelId: "le06-kap-29",
    titel: "Schlaf fördern: Schlafhygiene und pflegerische Maßnahmen",
    titelB1: "Guten Schlaf fördern: Schlafhygiene",
    tag: "pflege",
    items: [
      { id: "le06-snack-k29-01", faktC1: "Schlafhygiene umfasst alle Maßnahmen zur Förderung eines gesunden Schlafs: Gewohnheiten berücksichtigen, Störfaktoren minimieren, Rituale respektieren.", faktB1: "Schlaf-Hygiene: Alles tun für guten Schlaf. Gewohnheiten beachten. Störungen verringern. Rituale beibehalten.", kapitelRef: "le06-kap-29" },
      { id: "le06-snack-k29-02", faktC1: "Die vier häufigsten Schlafstörer in Einrichtungen: Licht, Lärm, Schmerzen, Raumtemperatur.", faktB1: "Die 4 häufigsten Schlafstörer: Licht, Lärm, Schmerzen und die Temperatur im Zimmer.", kapitelRef: "le06-kap-29" },
      { id: "le06-snack-k29-03", faktC1: "Im Nachtdienst: Nur stören, wenn medizinisch notwendig — Routinemaßnahmen auf Wachphasen verlegen.", faktB1: "Im Nachtdienst: Nur stören, wenn es medizinisch nötig ist. Routine auf Wachphasen legen.", kapitelRef: "le06-kap-29" },
      { id: "le06-snack-k29-04", faktC1: "Schlafmedikamente sollten immer das letzte Mittel sein — sie verändern die Schlafarchitektur, machen abhängig und erhöhen die Sturzgefahr.", faktB1: "Schlaf-Medikamente sind das letzte Mittel. Sie machen abhängig und erhöhen die Sturzgefahr.", kapitelRef: "le06-kap-29" },
      { id: "le06-snack-k29-05", faktC1: "Nicht-medikamentöse Maßnahmen (Schlafrituale, Störfaktoren reduzieren) zuerst ausschöpfen, bevor Medikamente erwogen werden.", faktB1: "Zuerst ohne Medikamente versuchen: Schlaf-Rituale, weniger Störungen. Medikamente nur wenn nötig.", kapitelRef: "le06-kap-29" },
    ],
  },

  // ── Kap 30: Assessments ──────────────────────────
  {
    kapitelId: "le06-kap-30",
    titel: "Assessments in der Mobilitätspflege: Barthel, Braden, TUG",
    titelB1: "Assessments in der Pflege: Barthel, Braden, TUG",
    tag: "pflege",
    items: [
      { id: "le06-snack-k30-01", faktC1: "Der Barthel-Index misst die Selbstständigkeit bei 10 ATL auf einer Skala von 0 (komplett abhängig) bis 100 Punkte (selbstständig) (Barthel/Mahoney, 1965).", faktB1: "Der Barthel-Index prüft 10 Alltags-Tätigkeiten. 0 Punkte = komplett abhängig. 100 Punkte = selbstständig (Barthel/Mahoney, 1965).", kapitelRef: "le06-kap-30" },
      { id: "le06-snack-k30-02", faktC1: "Die Braden-Skala hat 6 Subskalen, Score 6–23 — je niedriger der Wert, desto höher das Dekubitusrisiko (Braden/Bergstrom, 1987).", faktB1: "Die Braden-Skala hat 6 Bereiche. 6 bis 23 Punkte. Weniger Punkte = höheres Dekubitus-Risiko (Braden/Bergstrom, 1987).", kapitelRef: "le06-kap-30" },
      { id: "le06-snack-k30-03", faktC1: "Der TUG-Test misst die Mobilität: unter 10 s = unauffällig, ab 20 s = erhöhtes Sturzrisiko (Podsiadlo/Richardson, 1991).", faktB1: "Der TUG-Test prüft die Mobilität. Unter 10 Sekunden = gut. Ab 20 Sekunden = hohes Sturzrisiko (Podsiadlo/Richardson, 1991).", kapitelRef: "le06-kap-30" },
      { id: "le06-snack-k30-04", faktC1: "Assessments werden bei Aufnahme erhoben und regelmäßig im Verlauf wiederholt — sie sind Steuerungsinstrumente für die Pflegeplanung.", faktB1: "Tests werden bei der Aufnahme gemacht und regelmäßig wiederholt. Sie helfen bei der Pflege-Planung.", kapitelRef: "le06-kap-30" },
      { id: "le06-snack-k30-05", faktC1: "Ein steigender Barthel-Index nach einer Woche Mobilisation belegt die Wirksamkeit der pflegerischen Maßnahmen.", faktB1: "Steigt der Barthel-Index nach einer Woche Mobilisation? Dann wirken deine Maßnahmen.", kapitelRef: "le06-kap-30" },
    ],
  },

  // ── Kap 31: Dokumentation ──────────────────────────
  {
    kapitelId: "le06-kap-31",
    titel: "Dokumentation: Was, wann, warum",
    titelB1: "Dokumentation: Was, wann, warum",
    tag: "pflege",
    items: [
      { id: "le06-snack-k31-01", faktC1: "Der Mobilisationsplan dokumentiert: Maßnahmen, Häufigkeit, Hilfsmittel, Ziel.", faktB1: "Der Mobilisations-Plan schreibt auf: Welche Maßnahmen? Wie oft? Welche Hilfsmittel? Welches Ziel?", kapitelRef: "le06-kap-31" },
      { id: "le06-snack-k31-02", faktC1: "Das Positionierungsprotokoll enthält: Zeitpunkt, Position, Hautbeobachtung und Fingertest-Ergebnis.", faktB1: "Das Positionierungs-Protokoll enthält: Wann? Welche Position? Wie sieht die Haut aus? Finger-Test-Ergebnis?", kapitelRef: "le06-kap-31" },
      { id: "le06-snack-k31-03", faktC1: "Ein Sturzprotokoll wird nach jedem Sturzereignis ausgefüllt: Datum, Uhrzeit, Umstände, Verletzungen, Folgemaßnahmen.", faktB1: "Nach jedem Sturz: Sturzprotokoll ausfüllen. Wann? Wie? Welche Verletzungen? Welche Maßnahmen danach?", kapitelRef: "le06-kap-31" },
      { id: "le06-snack-k31-04", faktC1: "Assessment-Ergebnisse werden regelmäßig re-evaluiert — Veränderungen zeigen, ob Maßnahmen wirken.", faktB1: "Test-Ergebnisse regelmäßig wiederholen. Veränderungen zeigen, ob die Maßnahmen helfen.", kapitelRef: "le06-kap-31" },
      { id: "le06-snack-k31-05", faktC1: "Dokumentation ist auch juristischer Schutz — bei Dekubitusentstehung muss die Einrichtung angemessene Prophylaxe nachweisen können (§ 4 PflBG).", faktB1: "Dokumentation schützt auch rechtlich. Bei einem Dekubitus muss die Einrichtung beweisen, dass sie vorgebeugt hat (§ 4 PflBG).", kapitelRef: "le06-kap-31" },
      { id: "le06-snack-k31-06", faktC1: "Pflegerische Dokumentation sichert die Versorgungskontinuität über Schichtwechsel hinweg.", faktB1: "Die Dokumentation sorgt dafür, dass die nächste Schicht weiß, was los ist.", kapitelRef: "le06-kap-31" },
    ],
  },

  // ── Kap 32: Arbeitsschutz ──────────────────────────
  {
    kapitelId: "le06-kap-32",
    titel: "Arbeitsschutz: Der eigene Rücken zählt auch",
    titelB1: "Arbeitsschutz: Auch dein Rücken zählt",
    tag: "pflege",
    items: [
      { id: "le06-snack-k32-01", faktC1: "Pflegeberufe gehören zu den Berufsgruppen mit den höchsten Raten an Rücken- und Muskel-Skelett-Beschwerden (BGW-Statistiken).", faktB1: "Pflegekräfte haben besonders oft Rückenprobleme (BGW-Statistiken).", kapitelRef: "le06-kap-32" },
      { id: "le06-snack-k32-02", faktC1: "Kinästhetisches Arbeiten reduziert die Rückenbelastung, weil der pflegebedürftige Mensch aktiv mitarbeitet statt passiv gehoben zu werden.", faktB1: "Kinästhetik schont den Rücken, weil der Mensch aktiv mitmacht. Du musst ihn nicht allein heben.", kapitelRef: "le06-kap-32" },
      { id: "le06-snack-k32-03", faktC1: "Betthöhe auf Arbeitshöhe einstellen: Oberkante Matratze = Hüfthöhe der Pflegeperson.", faktB1: "Das Bett auf Arbeitshöhe einstellen: Die Matratze soll auf Hüfthöhe der Pflegekraft sein.", kapitelRef: "le06-kap-32" },
      { id: "le06-snack-k32-04", faktC1: "Aus den Beinen arbeiten, nah am pflegebedürftigen Menschen stehen, Hilfsmittel konsequent nutzen.", faktB1: "Aus den Beinen arbeiten. Nah am Menschen stehen. Hilfsmittel immer benutzen.", kapitelRef: "le06-kap-32" },
      { id: "le06-snack-k32-05", faktC1: "Bei schweren pflegebedürftigen Menschen oder fehlendem Eigenanteil grundsätzlich eine zweite Pflegekraft hinzuziehen.", faktB1: "Bei schweren Menschen oder wenn der Mensch nicht mithilft: immer eine zweite Pflegekraft holen.", kapitelRef: "le06-kap-32" },
    ],
  },

];
