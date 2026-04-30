// CE-02 Situation Kovac — Inline-Wissens-Bausteine
// Themen: pneumonie-prophylaxe, schlaf, harnausscheidung (Wiederbegegnung), pflegeprozess (Wiederbegegnung)
// Bausteine: 10 · Verteilt ueber 6 Phasen · Lehr-Patientin: Frau Kovac
// Generiert: 2026-04-26

import type { ContentStep } from "../../../_types";

// ============================================================
// PHASE 1 — INFORMIEREN (2 Bausteine)
// ============================================================

/**
 * 1A — Pneumonie-Prophylaxe: COPD + Pneumonierisiko
 * Position: VOR Step 1.2 (Prioritaeten vor der Tuer) — Schueler muss wissen,
 * warum Erschoepfung nach 3 Min Atemübungen ein Pneumonie-Risikosignal ist.
 */
export const CE02_KOVAC_INLINE_01A_PNEUMONIE_COPD: ContentStep = {
  stepId: "ce02-kovac-info-01b-pneumonie-copd-risiko",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S3-Leitlinie nosokomiale Pneumonie 2017",
    "GOLD-Report COPD 2023",
    "KRINKO 2013",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-info-pneumonierisiko",
  tag: "krankheitslehre",
  themaPrimaer: "pneumonie-prophylaxe",
  themenSekundaer: ["schlaf"],
  transition:
    "Du weisst jetzt, warum Frau Kovacs Lunge besonders gefährdet ist. Aber welche Informationen aus der Übergabe sind am dringendsten?",
  contentC1: {
    title: "Warum ist Frau Kovacs Lunge so gefährdet?",
    body: "",
    glossarBegriffe: ["Pneumonie", "nosokomial", "Atelektase", "Sekretverhaltung"],
  },
  contentB1: {
    title: "Warum ist die Lunge von Frau Kovac in Gefahr?",
    body: "",
    glossarBegriffe: ["Pneumonie", "Atelektase"],
  },
  inlineWissen: {
    bausteinRef: "pneumonie-prophylaxe-definition",
    storyAufhaenger:
      "Petras Übergabezettel sagt: \"Frau Kovac erschöpft nach 3 Min Atemübungen.\" Das klingt harmlos. Aber bei COPD III bedeutet das: Die Lunge schafft es kaum noch, sich selbst sauber zu halten. Und genau das ist der Moment, in dem eine Pneumonie entstehen kann.",
    storyAufhaengerB1:
      "Im Übergabezettel steht: Frau Kovac war nach 3 Minuten Atem-Übungen erschöpft. Das klingt wenig. Aber bei ihrer schweren Lungenerkrankung (COPD) ist das ein Warnsignal. Die Lunge kann sich nicht mehr gut selbst reinigen.",
    kerntext:
      "**Pneumonie bei COPD — warum Frau Kovac besonders gefährdet ist:**\n\n• Bei COPD III ist die **mukoziliäre Clearance** (Selbstreinigung der Atemwege durch Flimmerhärchen) stark reduziert. Sekret bleibt in den Bronchien liegen.\n\n• Frau Kovac hustet nachts viel, aber der Schleim \"will nicht raus\" — ein Zeichen für **Sekretverhaltung**. Zaehes Sekret + flache Atmung = idealer Naehrboden für Keime.\n\n• Ihre **geringe Trinkmenge** (800 ml) verschärft das Problem: Weniger Flüssigkeit = zäheres Sekret = schwieriger abzuhusten.\n\n• Im ambulanten Setting fehlt die 24h-Beobachtung — eine beginnende Pneumonie (Fieber, veränderter Auswurf, Tachypnoe) kann zwischen den Besuchen unbemerkt bleiben.\n\nQuelle: (AWMF S3 2017; GOLD-Report COPD 2023)",
    kerntextB1:
      "**Warum ist Frau Kovacs Lunge in Gefahr?**\n\n• Bei schwerer COPD arbeiten die **Flimmerhärchen** in der Lunge nicht mehr richtig. Der Schleim bleibt liegen.\n\n• Frau Kovac hustet nachts — aber der Schleim kommt nicht raus. Das ist gefährlich: Bakterien wachsen im Schleim.\n\n• Sie trinkt zu wenig (800 ml). Dadurch wird der Schleim noch zäherer.\n\n• Ambulant heißt: Zwischen den Besuchen sieht niemand ob sich etwas verschlechtert. Du musst bei jedem Besuch genau hinschauen.\n\nQuelle: (AWMF S3 2017; GOLD 2023)",
    faustregel:
      "**COPD + wenig Trinken + zähes Sekret = Pneumonie-Alarm.** Jeder Morgenbesuch beginnt mit Sekret-Check.",
    faustregelB1:
      "COPD + wenig trinken + zähes Sekret = Lungenentzündungs-Gefahr. Jeden Morgen Schleim kontrollieren.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Pneumonie Tag 3, stationär",
        kurzbeschreibung:
          "Bei Frau M. ist die Pneumonie bereits da — Tag 3 der Behandlung. Bei Frau Kovac willst du verhindern, dass es so weit kommt.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Schlaganfall + Dysphagie",
        kurzbeschreibung:
          "Bei ihm kommt Aspirationsgefahr dazu — Speichel und Nahrung können in die Lunge gelangen. Anderer Mechanismus, gleiches Risiko.",
      },
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hüft-tep",
        hauptfaktor: "Post-OP Immobilität",
        kurzbeschreibung:
          "Nach der Hüft-OP liegt sie viel — flache Atmung, reduzierter Hustenstoss. Bei ihr ist es die Immobilität, bei Kovac die COPD selbst.",
      },
    ],
    sonstBox:
      "Weitere Risikofaktoren für Pneumonie, die bei Frau Kovac nicht im Vordergrund stehen: Intubation/Beatmung (VAP), Bewusstseinseinschränkung, Immunsuppression, Magensonde. Diese werden bei Herr Petrov (Schlaganfall) und in CE-06 (Akutsituationen) vertieft.",
    sonstBoxB1:
      "Andere Pneumonie-Risiken: Beatmung, Bewusstlosigkeit, schwaches Immunsystem, Magensonde. Das lernst du bei anderen Patienten — z.B. Herr Petrov (Schlaganfall).",
    karteikarte: {
      vorderseite:
        "Frau Kovac (84, COPD III) trinkt 800 ml/Tag und hustet nachts zähes Sekret. Warum ist sie pneumoniegefährdet — und was kannst du tun?",
      rueckseite:
        "COPD III = reduzierte mukoziliäre Clearance + Sekretverhaltung. Geringe Trinkmenge macht Sekret zäher. Ambulant fehlt 24h-Beobachtung. Maßnahmen: Trinkmenge steigern (Sekretverdünnung), Atemübungen mit Lippenbremse (Sekretmobilisation), Sekretfarbe bei jedem Besuch prüfen (gelb-grün = Infekt → Arzt). Spektrum: Frau M. (Pneumonie Tag 3), Petrov (Aspiration), Yilmaz (Immobilität). Faustregel: COPD + wenig Trinken + zähes Sekret = Pneumonie-Alarm.",
    },
  },
};

/**
 * 1B — Pflegeprozess (Wiederbegegnung): SBAR im ambulanten Setting
 * Position: VOR Step 1.2 — Schueler hat SBAR bei Frau M. gelernt,
 * hier: ambulante Uebergabe ist KEIN vollstaendiges SBAR.
 */
export const CE02_KOVAC_INLINE_01B_PFLEGEPROZESS_SBAR: ContentStep = {
  stepId: "ce02-kovac-info-01c-sbar-ambulant",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981",
    "Aktionsbündnis Patientensicherheit: SBAR-Übergabe",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-info-sbar-ambulant",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["pneumonie-prophylaxe"],
  transition:
    "Petras Zettel ist typisch ambulant — knapp, aber nicht vollständig. Jetzt sortierst du, was am dringendsten ist.",
  contentC1: {
    title: "SBAR im ambulanten Setting — was fehlt?",
    body: "",
    glossarBegriffe: ["SBAR", "Pflegeprozess", "Informationssammlung"],
  },
  contentB1: {
    title: "SBAR — was fehlt auf Petras Zettel?",
    body: "",
    glossarBegriffe: ["SBAR", "Übergabe"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-informationssammlung",
    wiederbegegnung: {
      basisBausteinId: "pflegeprozess-informationssammlung",
      basisPatient: "Frau M.",
      vertiefung:
        "Bei Frau M. hast du SBAR als vollständige stationäre Übergabe kennengelernt (Situation-Background-Assessment-Recommendation). In der ambulanten Pflege sieht Realität anders aus: Petras Zettel liefert S und B — aber Assessment und Recommendation fehlen. Das ist kein Versagen von Petra, sondern ambulante Praxis. Du musst A und R heute Morgen selbst ergänzen.",
      vertiefungB1:
        "Bei Frau M. hast du SBAR gelernt — eine Struktur für Übergaben. Petras Zettel hat nur S und B (was war + Hintergrund). Assessment (was denke ich?) und Recommendation (was schlage ich vor?) fehlen. Das ist normal ambulant — du ergänzt das heute selbst.",
    },
    storyAufhaenger:
      "Petras Zettel liegt vor dir: \"Fr. Kovac unruhig. Hat kaum gegessen — nur Brot. Trinkmenge 820 ml. Stühlgang seit 4 Tagen keiner. Kompressionsstrümpfe abgelehnt.\" Klingt vollständig? Bei Frau M. auf Station hättest du jetzt auch Petras Einschätzung (A) und ihren Vorschlag für heute (R). Hier nicht.",
    storyAufhaengerB1:
      "Petras Zettel sagt was gestern passiert ist. Aber: Was hat Petra dazu gedacht? Und was schlägt sie für heute vor? Das steht nicht auf dem Zettel. Bei Frau M. im Krankenhaus war die Übergabe vollständiger.",
    kerntext:
      "**SBAR ambulant vs. stationär:**\n\n• **S (Situation)** ✔ Petra beschreibt: unruhig, wenig gegessen, Atemübungen kurz.\n\n• **B (Background)** ✔ Trinkmenge, Obstipation 4 Tage, Strümpfe verweigert.\n\n• **A (Assessment)** ✘ Fehlt. Was hat Petra eingeschätzt? War die Unruhe auffällig? Hat sie einen Infektverdacht?\n\n• **R (Recommendation)** ✘ Fehlt. Was soll heute Morgen Priorität sein?\n\n**Warum ist das normal?** Ambulante Übergaben sind kürzer — Petra hatte nach dem Abendbesuch noch 4 weitere Patienten. Die vollständige SBAR-Struktur ist das Ideal; in der ambulanten Praxis ist S+B oft alles, was du bekommst. Deine Aufgabe: A und R selbst ergänzen.\n\nQuelle: (Fiechter/Meier 1981; DNQP 2014)",
    kerntextB1:
      "**Was hat Petras Zettel — und was fehlt?**\n\n• **S (Situation)** ✔ Was war? Frau Kovac unruhig, wenig gegessen.\n\n• **B (Background)** ✔ Trinkmenge, Verstopfung, Strümpfe abgelehnt.\n\n• **A (Assessment)** ✘ Was denkt Petra darüber? Das fehlt.\n\n• **R (Recommendation)** ✘ Was schlägt Petra für heute vor? Das fehlt auch.\n\n**Warum ist das so?** Ambulant hat Petra wenig Zeit. Nach Frau Kovac kamen noch 4 andere Patienten. Deshalb ist der Zettel kurz. Du musst das A und R heute selbst machen.",
    faustregel:
      "**Ambulante Übergabe = oft nur S+B.** Assessment und Recommendation ergänzt du beim Besuch selbst.",
    faustregelB1:
      "Ambulant bekommst du oft nur Situation + Background. Assessment und Recommendation machst du selbst.",
    karteikarte: {
      vorderseite:
        "Petras Übergabezettel bei Frau Kovac enthält S und B, aber kein A und kein R. Warum — und was tust du?",
      rueckseite:
        "Ambulante Übergaben sind kürzer als stationäre — Zeitdruck, viele Patienten. S+B (Fakten) sind dokumentiert, A (Einschätzung) und R (Empfehlung) fehlen oft. Pflegerische Aufgabe: A und R beim nächsten Besuch selbst ergänzen. Faustregel: Ambulante Übergabe = oft nur S+B. Bei Frau M. (stationär) war SBAR vollständig — dort ist das Team grösser und die Übergabe strukturierter.",
    },
  },
};

// ============================================================
// PHASE 2 — BEOBACHTEN (3 Bausteine)
// ============================================================

/**
 * 2A — Pneumonie-Prophylaxe: Atembeobachtung systematisch
 * Position: VOR Step 2.1 (Brilliant-Frage Atembeobachtung) — gibt dem Schueler
 * das Wissen, das er fuer die Freitext-Antwort braucht.
 */
export const CE02_KOVAC_INLINE_02A_PNEUMONIE_ATEMBEOB: ContentStep = {
  stepId: "ce02-kovac-beob-00b-pneumonie-atembeobachtung",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S3-Leitlinie nosokomiale Pneumonie 2017",
    "GOLD-Report COPD 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-beob-pneumonie-prophylaxe",
  tag: "krankheitslehre",
  themaPrimaer: "pneumonie-prophylaxe",
  themenSekundaer: ["schlaf"],
  transition:
    "Du weisst jetzt, worauf du bei der Atmung achten musst. Beschreibe in eigenen Worten, was du siehst.",
  contentC1: {
    title: "Pneumonie-Prophylaxe bei der Atembeobachtung",
    body: "",
    glossarBegriffe: ["Pneumonie-Prophylaxe", "Sputum", "Atemfrequenz", "Lippenbremse"],
  },
  contentB1: {
    title: "Worauf achtest du bei der Atmung?",
    body: "",
    glossarBegriffe: ["Pneumonie-Prophylaxe", "Sputum"],
  },
  inlineWissen: {
    bausteinRef: "pneumonie-prophylaxe-risikofaktoren",
    storyAufhaenger:
      "Frau Kovac sitzt im Sessel und atmet. In Phase 1 hast du gelesen: \"Heute Nacht hab ich gehusten. Viel. Der Schleim will nicht raus.\" Bevor du die Atmung beobachtest — was genau suchst du, das auf eine beginnende Pneumonie hinweisen könnte?",
    storyAufhaengerB1:
      "Frau Kovac sitzt im Sessel. Sie hat nachts viel gehustet. Der Schleim kam nicht raus. Bevor du ihre Atmung beobachtest: Was genau suchst du? Welche Zeichen könnten auf eine Lungenentzündung hinweisen?",
    kerntext:
      "**Pneumonie-Frühzeichen bei der Atembeobachtung:**\n\n• **Sputum-Farbe** ist der wichtigste ambulante Früh-Indikator. Weiss-klar = normal bei COPD. **Gelb-grün = Infektverdacht** → Arzt informieren. Rostig-schaumig = Lungenbeteiligung/Ödem.\n\n• **Atemfrequenz** >20/Min (Tachypnoe) — nicht nur bei Belastung, auch in Ruhe prüfen. Bei Frau Kovac mit COPD III ist die Baseline schon erhöhter als bei Gesunden.\n\n• **Rasselgeräusche** bei der Ausatmung — du hörst sie ohne Stethoskop wenn die Sekretansammlung stark genug ist.\n\n• **Fieber fehlt oft bei aelteren Menschen** — stattdessen: Verwirrtheit, Appetitlosigkeit, erhöhte Sturzneigung. Bei Frau Kovac: War die \"Unruhe\" von gestern Abend ein Frühzeichen?\n\n• **Ambulanter Zusatz:** Zwischen den Besuchen kann sich eine Pneumonie entwickeln, ohne dass es jemand sieht. Deshalb: Angehörige (Darko bei Telefonaten) und Patientin selbst instruieren — auf Fieber, veränderten Schleim, Atemnot achten.\n\nQuelle: (AWMF S3 2017; GOLD 2023; KRINKO 2013)",
    kerntextB1:
      "**Worauf achtest du bei der Atmung — um eine Lungenentzündung früh zu erkennen?**\n\n• **Schleim-Farbe** = wichtigstes Zeichen. Weiss = normal. **Gelb-grün = mögliche Infektion** → Arzt informieren.\n\n• **Wie schnell atmet sie?** Mehr als 20 Mal pro Minute in Ruhe = Warnsignal.\n\n• **Hoerst du Rasseln?** Wenn der Schleim in der Lunge liegt, hörst du manchmal ein Rasseln — auch ohne Stethoskop.\n\n• **Kein Fieber heißt nicht gesund.** Ältere Menschen haben oft kein Fieber bei Pneumonie. Stattdessen: Verwirrtheit, kein Appetit, Stürze.\n\n• **Ambulant:** Zwischen den Besuchen kann sich viel ändern. Sag Frau Kovac: Wenn der Schleim gelb wird oder du Fieber hast — Pflegedienst anrufen.",
    faustregel:
      "**Schleim-Farbe jeden Morgen prüfen.** Gelb-grün bei COPD = Arzt informieren, nicht abwarten.",
    faustregelB1:
      "Jeden Morgen Schleim-Farbe prüfen. Gelb-grün = Arzt informieren.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Pneumonie Tag 3, Fieber + CRP erhöhrt",
        kurzbeschreibung:
          "Bei Frau M. ist die Pneumonie schon diagnostiziert — Fieber, erhöhter CRP, rasselnde Atemgeräusche. Bei Kovac suchst du die Frühzeichen, bevor es so weit kommt.",
      },
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz, Pneumonie-Frühzeichen oft nur Verwirrtheit",
        kurzbeschreibung:
          "Bei Demenz zeigt sich Pneumonie häufig nur als akute Verwirrtheit — kein Fieber, kein Husten. Ältere wie Frau Kovac können ähnlich atypisch reagieren.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Aspirationspneumonie durch Dysphagie",
        kurzbeschreibung:
          "Sein Pneumonierisiko kommt vom Schlucken — Speichel und Nahrung gelangen in die Lunge. Anderer Mechanismus als bei Kovac (Sekretverhaltung).",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Kovac (COPD III) hustet nachts zähes Sekret. Welche Sputum-Farbe ist ein Alarmsignal — und was tust du dann?",
      rueckseite:
        "Gelb-grünes Sputum = bakterieller Infektverdacht → Arzt informieren, nicht abwarten. Weiss-klar = normal bei COPD. Rostig-schaumig = Lungenödem-Verdacht. Zusätzlich prüfen: Atemfrequenz (>20/Min Ruhe), Rasselgeräusche, Verwirrtheit (Fieber fehlt bei Älteren oft). Spektrum: Frau M. (Pneumonie manifest), Bauer (Demenz: nur Verwirrtheit), Petrov (Aspiration). Faustregel: Schleim-Farbe jeden Morgen prüfen.",
    },
  },
};

/**
 * 2B — Schlaf: Schlafphasen + zirkadianer Rhythmus
 * Position: VOR Step 2.4 (Schlafanamnese Dialog) — Schueler braucht Grundwissen
 * ueber Schlafarchitektur, um Frau Kovacs Schlafmuster einordnen zu koennen.
 */
export const CE02_KOVAC_INLINE_02B_SCHLAF_PHYSIOLOGIE: ContentStep = {
  stepId: "ce02-kovac-beob-03b-schlaf-physiologie",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AASM Scoring Manual 2020",
    "Borbely 1982 — Two Process Model",
    "DGSM S3-Leitlinie Insomnie 2017/2020",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-beob-schlafphysiologie",
  tag: "anatomie",
  themaPrimaer: "schlaf",
  themenSekundaer: ["pneumonie-prophylaxe"],
  transition:
    "Du kennst jetzt die Grundlagen des Schlafs. Gleich fragst du Frau Kovac nach ihrer Nacht — mit diesem Wissen verstehst du ihre Antworten besser.",
  contentC1: {
    title: "Wie Schlaf funktioniert — und warum Frau Kovac nicht durchschläft",
    body: "",
    glossarBegriffe: ["NREM", "REM", "Schlafzyklus", "Melatonin", "Zirkadianer Rhythmus"],
  },
  contentB1: {
    title: "Wie funktioniert Schlaf?",
    body: "",
    glossarBegriffe: ["Schlafzyklus", "Melatonin"],
  },
  inlineWissen: {
    bausteinRef: "schlaf-zyklen-nrem-rem",
    storyAufhaenger:
      "Frau Kovac sagt: \"Ich schlafe ein, aber um zwei bin ich wieder wach.\" Das klingt nach Zufall — ist es aber nicht. Der Körper hat eine innere Uhr, und Frau Kovacs Schlaf folgt einem Muster, das du verstehen musst, bevor du mit ihr ueber Schlafhygiene sprichst.",
    storyAufhaengerB1:
      "Frau Kovac sagt: \"Um zwei bin ich wieder wach.\" Das ist kein Zufall. Der Körper hat eine innere Uhr. Bevor du sie nach dem Schlaf fragst, solltest du verstehen wie Schlaf funktioniert.",
    kerntext:
      "**Schlaf in 90-Minuten-Zyklen:**\n\nDer Mensch durchläuft pro Nacht **4-6 Schlafzyklen** a 90 Minuten. Jeder Zyklus wechselt zwischen **NREM** (Körper erholt sich) und **REM** (Gehirn verarbeitet).\n\n• **Erste Nachthälfte:** Tiefschlaf (N3) dominiert — körperliche Regeneration.\n• **Zweite Nachthälfte:** REM-Phasen werden länger — Gedächtnis, Traum.\n\n**Bei Frau Kovac (84, COPD III):**\n• Sie schläft gegen 23 Uhr ein → erster Tiefschlaf-Block bis ca. 0:30 Uhr.\n• Erwachen um 2 Uhr = **Ende des 2. Zyklus** — typischer Aufwachzeitpunkt.\n• COPD verstärkt das Problem: nächtliche Hypoxie und Hustenreiz wecken sie genau dann, wenn der Schlaf ohnehin leichter wird.\n• **Melatonin** (Schlafhormon) wird bei Dunkelheit ausgeschüttet, durch **Blaulicht vom Fernseher gehemmt** — Frau Kovacs TV-Ritual verzögert das Einschlafen.\n\nQuelle: (AASM 2020; Borbely 1982; DGSM 2017/2020)",
    kerntextB1:
      "**Schlaf läuft in Zyklen:**\n\nPro Nacht hat der Mensch **4-6 Schlafzyklen**. Jeder dauert etwa **90 Minuten**.\n\n• **Erste Nachthälfte:** Tiefer Schlaf — der Körper erholt sich.\n• **Zweite Nachthälfte:** Mehr Traumschlaf (REM) — das Gehirn verarbeitet.\n\n**Bei Frau Kovac:**\n• Sie schläft um 23 Uhr ein.\n• Um 2 Uhr wird sie wach — das ist nach dem 2. Zyklus. Das ist ein typischer Aufwachmoment.\n• Ihre Lungenerkrankung (COPD) macht es schlimmer: Nachts wird die Atmung schlechter, der Husten weckt sie.\n• **Melatonin** (Schlaf-Hormon) braucht Dunkelheit. Der **Fernseher** stört — blaüs Licht hemmt Melatonin.",
    faustregel:
      "**Erwachen nach 2-3 Zyklen (3-4,5 Stunden) ist physiologisch.** Bei COPD + Blaulicht wird die Rueckkehr in den Schlaf zum Problem.",
    faustregelB1:
      "Nach 3 bis 4 Stunden aufzuwachen ist normal. Bei COPD und Fernseher wird das Wiedereinschlafen schwer.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz + Sundowning",
        kurzbeschreibung:
          "Bei Demenz ist der zirkadiane Rhythmus massiv gestört — Herr Bauer ist nachts desorientiert und unruhig. Anderer Mechanismus als bei Kovac, aber ähnliches Ergebnis: kein durchgehender Schlaf.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Adipositas + Schlafapnoe-Risiko",
        kurzbeschreibung:
          "Bei BMI 38 besteht Risiko für obstruktive Schlafapnoe — nächtliche Atemaussetzer wecken sie. Schlaf-Störung durch einen anderen Atemmechanismus.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Schlaganfall + veränderter Schlaf-Wach-Rhythmus",
        kurzbeschreibung:
          "Nach Schlaganfall ist der Schlaf-Wach-Rhythmus oft gestört — längere Schlafepisoden tagsüber, nächtliche Wachphasen. Neurologische Ursache.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Kovac schläft um 23 Uhr ein und wacht um 2 Uhr auf. Warum — und welche Rolle spielt der Fernseher?",
      rueckseite:
        "Erwachen um 2 Uhr = Ende des 2. Schlafzyklus (a 90 Min). Physiologisch normal. Bei COPD: nächtliche Hypoxie + Hustenreiz wecken zusätzlich. Fernseher: Blaulicht hemmt Melatonin-Ausschüttung (Schlafhormon) → verzögertes Einschlafen + gestörter zirkadianer Rhythmus. Spektrum: Bauer (Demenz/Sundowning), Schmidt (Schlafapnoe-Risiko), Petrov (neurologisch). Faustregel: Erwachen nach 2-3 Zyklen ist physiologisch — aber COPD + Blaulicht verhindern Wiedereinschlafen.",
    },
  },
};

/**
 * 2C — Harnausscheidung (Wiederbegegnung): Trinkmenge + Harnausscheidung
 * Position: VOR Step 2.5 (Trinkprotokoll-Berechnung) — verknuepft Trinkmenge
 * mit der Harnausscheidung-Thematik (Lehr-Patient: Herr Petrov).
 */
export const CE02_KOVAC_INLINE_02C_HARNAUSSCHEIDUNG: ContentStep = {
  stepId: "ce02-kovac-beob-04b-harnausscheidung-trink",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP Kontinenzförderung 2014",
    "AWMF S2k Harninkontinenz 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-beob-harnausscheidung",
  tag: "pflege",
  themaPrimaer: "harnausscheidung",
  themenSekundaer: ["pneumonie-prophylaxe"],
  transition:
    "Du verstehst jetzt den Zusammenhang zwischen Trinken und Ausscheidung. Rechne jetzt das Trinkprotokoll aus.",
  contentC1: {
    title: "Warum Frau Kovac zu wenig trinkt — und was das mit der Harnausscheidung zu tun hat",
    body: "",
    glossarBegriffe: ["Harnausscheidung", "Inkontinenzangst", "Exsikkose", "Fluidbalance"],
  },
  contentB1: {
    title: "Warum trinkt Frau Kovac so wenig?",
    body: "",
    glossarBegriffe: ["Harnausscheidung", "Exsikkose"],
  },
  inlineWissen: {
    bausteinRef: "harnausscheidung-urin-normalwerte",
    wiederbegegnung: {
      basisBausteinId: "harnausscheidung-urin-normalwerte",
      basisPatient: "Herr Petrov",
      vertiefung:
        "Urin-Normalwerte kennst du von Herr Petrov (Katheter-Management). Bei Frau Kovac ist die Besonderheit: Sie trinkt absichtlich wenig, weil sie Angst hat, ständig zur Toilette zu müssen. Das ist ein häufiges ambulantes Problem — Inkontinenzangst führt zu Dehydration, und Dehydration verschlimmert die COPD (zäheres Sekret).",
      vertiefungB1:
        "Urin-Normalwerte kennst du von Herr Petrov. Bei Frau Kovac ist es anders: Sie trinkt extra wenig, weil sie nicht ständig zur Toilette will. Das Problem: Wenig trinken macht den Schleim in der Lunge zäh. So hängt alles zusammen.",
    },
    storyAufhaenger:
      "Du nimmst das Trinkprotokoll vom Kuechentisch. 800 ml gestern — deutlich unter dem aerztlichen Zielwert von 1.200 ml. Frau Kovac wird später sagen: \"Ich trink nicht gern viel, weil ich dann dauernd muss.\" Hinter dieser Aussage steckt ein Kreislauf, den du als Pflegekraft durchbrechen kannst.",
    storyAufhaengerB1:
      "800 ml hat Frau Kovac gestern getrunken. Zu wenig. Sie wird später sagen: \"Wenn ich viel trinke, muss ich dauernd auf die Toilette.\" Das ist der Grund warum sie so wenig trinkt.",
    kerntext:
      "**Der Trinkvermeidungs-Kreislauf:**\n\n• Frau Kovac hat **Angst vor Harndrang** — besonders nachts (Nykturie-Angst). Aufstehen im Dunkeln mit Kontrakturen und COPD = Sturzrisiko.\n\n• Deshalb trinkt sie weniger → **konzentrierterer Urin** (dunkelgelb, spez. Gewicht erhöhrt) → reizt die Blasenschleimhaut → paradoxerweise **mehr Harndrang**, nicht weniger.\n\n• Gleichzeitig: weniger Flüssigkeit → **zäheres Sekret** in der Lunge → schwieriger abzuhusten → Pneumonierisiko steigt.\n\n• Normalwert Harnausscheidung: **1.500-2.000 ml/24h**. Bei 800 ml Trinkmenge wird Frau Kovac deutlich darunter liegen — ein Exsikkose-Indikator.\n\n**Pflegerischer Ansatz:** Nicht \"mehr trinken\" befehlen, sondern das Hindernis (Inkontinenzangst) adressieren und die Trinkmenge ueber den Tag verteilen.\n\nQuelle: (DNQP Kontinenzförderung 2014; AWMF S2k 2023)",
    kerntextB1:
      "**Warum trinkt Frau Kovac so wenig?**\n\n• Sie hat Angst: Wenn sie viel trinkt, muss sie oft zur Toilette. Nachts ist das gefährlich — Aufstehen mit steifen Knien und Atemnot = Sturzrisiko.\n\n• Deshalb trinkt sie weniger. Aber der Urin wird dadurch **dunkler und stärker**. Und das reizt die Blase — sie muss **trotzdem** oft.\n\n• Gleichzeitig: Wenig Trinken macht den **Schleim in der Lunge zäh**. Abhusten wird schwerer. Das erhöhrt die Pneumonie-Gefahr.\n\n• Normal: Ein Erwachsener macht 1,5-2 Liter Urin pro Tag. Bei 800 ml Trinken ist das viel weniger.\n\n**Was kannst du tun?** Nicht befehlen \"Trinken Sie mehr!\" — sondern das Problem verstehen und die Trinkmenge ueber den Tag verteilen.",
    faustregel:
      "**Inkontinenzangst → Trinkvermeidung → zähes Sekret → Pneumonierisiko.** Durchbreche den Kreislauf — mit Verteilung, nicht mit Druck.",
    faustregelB1:
      "Angst vor Toilette → wenig trinken → zähes Sekret → Lungenentzündungs-Gefahr. Trinken verteilen, nicht befehlen.",
    karteikarte: {
      vorderseite:
        "Frau Kovac trinkt 800 ml/Tag weil sie Angst vor häufigem Harndrang hat. Warum verschlimmert das ihr COPD-Problem?",
      rueckseite:
        "Wenig Trinken → zäheres Bronchialsekret → reduzierte Clearance → Pneumonierisiko. Gleichzeitig: konzentrierter Urin → Blasenreizung → paradox MEHR Harndrang. Normalwert: 1.500-2.000 ml Urinausscheidung/24h. Pflegerisch: Trinkmenge ueber Tag verteilen (3 Becher a 200 ml), nicht einmalig grosse Menge. Spektrum: Petrov (Katheter, andere Problematik), Schmidt (Adipositas, Beckenbodenbelastung). Faustregel: Inkontinenzangst → Trinkvermeidung → zähes Sekret → Pneumonie.",
    },
  },
};

// ============================================================
// PHASE 3 — PLANEN (2 Bausteine)
// ============================================================

/**
 * 3A — Schlaf: Schlafhygiene-Regeln
 * Position: VOR Step 3.4 (Schlafberatung Sequencing) — Schueler braucht
 * Schlafhygiene-Wissen um die Reihenfolge des Gespraechs planen zu koennen.
 */
export const CE02_KOVAC_INLINE_03A_SCHLAFHYGIENE: ContentStep = {
  stepId: "ce02-kovac-plan-03b-schlafhygiene-regeln",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DGSM S3-Leitlinie Insomnie 2017/2020",
    "ICSD-3 Text Revision 2023",
    "Beers-Liste AGS 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-plan-schlafhygiene",
  tag: "pflege",
  themaPrimaer: "schlaf",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Du kennst jetzt die Schlafhygiene-Regeln. Aber wie baust du das Gespräch mit Frau Kovac auf? In welcher Reihenfolge?",
  contentC1: {
    title: "Schlafhygiene — 6 Regeln für besseren Schlaf",
    body: "",
    glossarBegriffe: ["Schlafhygiene", "Blaulicht", "Melatonin", "Insomnie"],
  },
  contentB1: {
    title: "6 Regeln für besseren Schlaf",
    body: "",
    glossarBegriffe: ["Schlafhygiene", "Melatonin"],
  },
  inlineWissen: {
    bausteinRef: "schlaf-schlafhygiene-regeln",
    storyAufhaenger:
      "Du planst das Schlafgespräch für heute Abend. Frau Kovac schaut bis Mitternacht fern, schläft gegen 23 Uhr ein, wacht um 2 Uhr auf. Bevor du ihr etwas empfiehlst, musst du wissen welche Schlafhygiene-Regeln evidenzbasiert sind — und welche bei einer 84-Jaehrigen mit COPD realistisch umsetzbar.",
    storyAufhaengerB1:
      "Heute Abend willst du mit Frau Kovac ueber ihren Schlaf sprechen. Bevor du ihr Tipps gibst, lerne die Regeln für besseren Schlaf — und was bei einer 84-jährigen Frau mit Lungenerkrankung realistisch ist.",
    kerntext:
      "**6 evidenzbasierte Schlafhygiene-Regeln (DGSM 2017/2020):**\n\n• **Regelmässige Schlafzeiten** — jeden Tag zur gleichen Zeit ins Bett und aufstehen. Die innere Uhr braucht Routine.\n\n• **Blaulicht meiden** ab 1-2 Stunden vor dem Schlafen — Fernseher, Tablet, Smartphone hemmen Melatonin. Alternative: Radio, Hoerbuch, gedimmtes Licht.\n\n• **Schlafzimmer nur zum Schlafen** — kein Fernseher im Bett (bei Frau Kovac: Sessel-TV und Bett trennen).\n\n• **Kein Koffein ab 14 Uhr** — Frau Kovacs Abendkaffee (18:30) ist kontraproduktiv. Halbwertszeit von Koffein: 5-6 Stunden.\n\n• **Tagesschlaf begrenzen** — max. 20-30 Min Mittagsschlaf. Frau Kovac \"macht nach dem Mittag die Augen zu\" → prüfen wie lange.\n\n• **Keine Schlafmittel als Erstlösung** — Benzodiazepine und Z-Substanzen sind bei >65-Jaehrigen nach Beers-Liste (AGS 2023) potenziell inadäquat: Sturzrisiko, kognitive Einschränkung, Abhängigkeit.\n\n**Bei Frau Kovac realistisch:** Nicht alles auf einmal ändern. Ein Punkt pro Woche. Start: Blaulicht (TV → Radio).\n\nQuelle: (DGSM S3 2017/2020; Beers-Liste AGS 2023)",
    kerntextB1:
      "**6 Regeln für besseren Schlaf:**\n\n• **Immer zur gleichen Zeit schlafen** — die innere Uhr braucht Routine.\n\n• **Kein Fernseher 1-2 Stunden vor dem Schlafen** — das blaue Licht stört das Schlaf-Hormon (Melatonin). Besser: Radio oder Hoerbuch.\n\n• **Bett nur zum Schlafen** — nicht zum Fernsehen.\n\n• **Kein Kaffee ab 14 Uhr** — Koffein wirkt 5-6 Stunden. Frau Kovacs Abendkaffee (18:30) stört den Schlaf.\n\n• **Mittagsschlaf nicht länger als 30 Minuten** — sonst ist man abends nicht müde.\n\n• **Keine Schlaftabletten** — bei Älteren gefährlich (Sturzrisiko, Suchtgefahr). Nur Arzt darf entscheiden.\n\n**Bei Frau Kovac:** Nicht alles auf einmal. Start mit einem Punkt: Radio statt Fernseher.",
    faustregel:
      "**Ein Tipp pro Woche, nicht sechs auf einmal.** Start bei Frau Kovac: Blaulicht reduzieren (TV → Radio).",
    faustregelB1:
      "Ein Tipp pro Woche reicht. Für Frau Kovac zuerst: Radio statt Fernseher.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Demenz + Tag-Nacht-Umkehr",
        kurzbeschreibung:
          "Bei Demenz ist die innere Uhr stark gestört. Schlafhygiene hilft wenig — Lichttherapie am Morgen und strukturierter Tagesablauf sind wichtiger.",
      },
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hüft-tep",
        hauptfaktor: "Post-OP Schmerz stört den Schlaf",
        kurzbeschreibung:
          "Nach der Hüft-OP ist Schmerz der Hauptgrund für Schlaflosigkeit. Hier geht Schmerzmanagement vor Schlafhygiene.",
      },
    ],
    sonstBox:
      "Weitere Schlafstörungs-Ursachen, die bei Frau Kovac nicht im Vordergrund stehen: Restless-Legs-Syndrom, obstruktive Schlafapnoe, periodische Beinbewegungen (PLMS). Bei Verdacht: Arzt informieren, ggf. Schlaflabor-Überweisung.",
    sonstBoxB1:
      "Andere Schlafstörungs-Gründe: Unruhige Beine (Restless Legs), Atemaussetzer im Schlaf (Schlafapnoe). Das muss der Arzt abklären.",
    karteikarte: {
      vorderseite:
        "Frau Kovac schaut bis Mitternacht fern, trinkt Abendkaffee um 18:30 und schläft nach dem Mittagessen kurz. Welche 3 Schlafhygiene-Regeln sind für sie am relevantesten?",
      rueckseite:
        "1. Blaulicht meiden 1-2h vor Schlaf (TV → Radio). 2. Kein Koffein ab 14 Uhr (Abendkaffee streichen oder entkoffeiniert). 3. Tagesschlaf begrenzen auf 20-30 Min. Nicht alles auf einmal — ein Tipp pro Woche. Keine Schlafmittel bei >65 (Beers-Liste AGS 2023: Sturzrisiko + Abhängigkeit). Spektrum: Bauer (Demenz, Tag-Nacht-Umkehr), Yilmaz (Schmerz stört Schlaf). Faustregel: Ein Tipp pro Woche, nicht sechs auf einmal.",
    },
  },
};

/**
 * 3B — Pflegeprozess (Wiederbegegnung): SMART-Ziele im ambulanten Setting
 * Position: VOR Step 3.5 (Fillin SMART-Ziele) — Wiederbegegnung des
 * SMART-Prinzips mit ambulantem Fokus (Patienten-Akzeptanz besonders kritisch).
 */
export const CE02_KOVAC_INLINE_03B_SMART_AMBULANT: ContentStep = {
  stepId: "ce02-kovac-plan-04b-smart-ambulant",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981",
    "Doran SMART 1981",
    "DNQP Mobilität 2017/2024",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-plan-smart-ambulant",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["schlaf", "harnausscheidung"],
  transition:
    "Du weisst jetzt, warum das A in SMART ambulant entscheidend ist. Formuliere die Pflegeziele für Frau Kovac.",
  contentC1: {
    title: "SMART-Ziele ambulant — warum das A entscheidet",
    body: "",
    glossarBegriffe: ["SMART-Ziel", "Pflegeplanung", "Patientenautonomie"],
  },
  contentB1: {
    title: "SMART-Ziele: Warum muss Frau Kovac Ja sagen?",
    body: "",
    glossarBegriffe: ["SMART-Ziel", "Pflegeziel"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-schritt-3-ziele-smart",
    wiederbegegnung: {
      basisBausteinId: "pflegeprozess-schritt-3-ziele-smart",
      basisPatient: "Frau M.",
      vertiefung:
        "SMART-Ziele kennst du von Frau M. (stationär). In der ambulanten Pflege ist das A (Akzeptiert) besonders kritisch: Du bist Gast in Frau Kovacs Wohnung. Wenn sie dem Ziel nicht zustimmt, kann sie dich bitten zu gehen. Stationär hast du das Team und den Rahmen — ambulant hast du nur dein Wort und ihr Vertrauen.",
      vertiefungB1:
        "SMART-Ziele kennst du von Frau M. im Krankenhaus. Ambulant ist das A (Akzeptiert) noch wichtiger: Frau Kovac muss dem Ziel zustimmen. Wenn sie Nein sagt, kannst du sie nicht zwingen — du bist in ihrer Wohnung.",
    },
    storyAufhaenger:
      "Du willst Pflegeziele formulieren: Trinkmenge steigern, Bewegungsübungen, Schlafhygiene. Aber Frau Kovac hat gerade die Kompressionsstrümpfe abgelehnt. Sie ist eine Frau mit eigenem Kopf. Ein Pflegeziel das sie nicht mitträgt, ist wertlos.",
    storyAufhaengerB1:
      "Du willst Ziele für Frau Kovac setzen: mehr Trinken, Übungen, besser Schlafen. Aber sie hat gerade Nein zu den Strümpfen gesagt. Wenn sie dem Ziel nicht zustimmt, funktioniert es nicht.",
    kerntext:
      "**SMART ambulant — warum das A entscheidet:**\n\n• **S** (Spezifisch) — \"Frau Kovac trinkt 1.200 ml\" statt \"mehr trinken\".\n• **M** (Messbar) — Trinkprotokoll zeigt es.\n• **A** (Akzeptiert) — **Hier liegt der Unterschied.** Stationär akzeptiert der Patient oft stillschweigend. Ambulant muss Frau Kovac **aktiv Ja sagen** — sonst führt sie das Ziel allein nicht aus, denn du bist nicht da.\n• **R** (Realistisch) — Von 800 ml direkt auf 1.500 ml? Unrealistisch. Besser: 1.000 ml als Nahziel.\n• **T** (Terminiert) — \"In 3 Tagen\" — nicht \"irgendwann\".\n\n**Ambulante Besonderheit:** Du siehst Frau Kovac 2x/Tag je 30-45 Min. Die restlichen 23 Stunden ist sie allein. Jedes Ziel muss **ohne dich funktionieren**. Deshalb: einfach, konkret, von ihr mitgetragen.\n\nQuelle: (Doran 1981; Fiechter/Meier 1981)",
    kerntextB1:
      "**Was ist das SMART-Prinzip?**\n\n• **S** = Genau sagen was du willst (\"1.200 ml trinken\", nicht \"mehr trinken\").\n• **M** = Messbar (das Trinkprotokoll zeigt es).\n• **A** = Frau Kovac sagt Ja. Ohne ihr Ja funktioniert es nicht.\n• **R** = Erreichbar (von 800 ml auf 1.000 ml — nicht sofort 1.500 ml).\n• **T** = Bis wann? (\"In 3 Tagen\").\n\n**Ambulant besonders wichtig:** Du bist nur kurz da. 23 Stunden ist Frau Kovac allein. Das Ziel muss so einfach sein, dass sie es allein schaffen kann.",
    faustregel:
      "**Ambulante SMART-Ziele müssen ohne dich funktionieren.** Wenn Frau Kovac nicht Ja sagt, ist es kein Ziel — es ist dein Wunsch.",
    faustregelB1:
      "Ein Pflegeziel ambulant muss so einfach sein, dass die Patientin es allein schafft. Ohne ihr Ja ist es kein Ziel.",
    karteikarte: {
      vorderseite:
        "Warum ist das A (Akzeptiert) in SMART-Zielen ambulant noch wichtiger als stationär?",
      rueckseite:
        "Ambulant ist die Patientin 23h/Tag allein. Ziele müssen ohne Pflegekraft funktionieren. Stationär gibt es das Team, ambulant nur das Vertrauen. Frau Kovac lehnt Strümpfe ab — ein Ziel gegen ihren Willen ist wirkungslos. Faustregel: Ambulante SMART-Ziele müssen ohne dich funktionieren. Bei Frau M. (stationär) war das A weniger kritisch — dort war das Team permanent anwesend.",
    },
  },
};

// ============================================================
// PHASE 4 — DURCHFUEHREN (2 Bausteine)
// ============================================================

/**
 * 4A — Pneumonie-Prophylaxe: Lippenbremse — Wirkprinzip
 * Position: VOR Step 4.2 (MC Lippenbremse) — Schueler braucht das Wirkprinzip
 * (PEEP-Effekt), um die MC-Frage beantworten zu koennen.
 */
export const CE02_KOVAC_INLINE_04A_LIPPENBREMSE: ContentStep = {
  stepId: "ce02-kovac-dur-01b-lippenbremse-wirkprinzip",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "GOLD-Report COPD 2023",
    "Pflege Heute 7. Aufl. Kap. Atmung",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-dur-lippenbremse-wirkprinzip",
  tag: "krankheitslehre",
  themaPrimaer: "pneumonie-prophylaxe",
  transition:
    "Du kennst jetzt den PEEP-Effekt der Lippenbremse. Woran erkennst du, dass Frau Kovac sie richtig macht?",
  contentC1: {
    title: "Die Lippenbremse — warum sie bei COPD so wichtig ist",
    body: "",
    glossarBegriffe: ["Lippenbremse", "PEEP-Effekt", "Atemwegskollaps", "Kontaktatmung"],
  },
  contentB1: {
    title: "Warum hilft die Lippenbremse?",
    body: "",
    glossarBegriffe: ["Lippenbremse", "PEEP-Effekt"],
  },
  inlineWissen: {
    bausteinRef: "pneumonie-prophylaxe-lippenbremse",
    storyAufhaenger:
      "Du hast gerade die Atemübungen mit Frau Kovac durchgeführt — Schritt für Schritt. Sie pfeift beim Ausatmen durch fast geschlossene Lippen. Aber warum genau hilft das ihrer Lunge? Das Wirkprinzip zu verstehen ist wichtig, weil du gleich beurteilen musst ob sie es richtig macht.",
    storyAufhaengerB1:
      "Frau Kovac macht die Atemübung: Sie atmet langsam durch fast geschlossene Lippen aus. Es pfeift leise. Aber warum hilft das? Bevor du beobachtest ob sie es richtig macht, verstehe das Wirkprinzip.",
    kerntext:
      "**Warum die Lippenbremse bei COPD wirkt:**\n\n• Bei COPD III sind die kleinen Atemwege (Bronchiolen) **instabil** — sie kollabieren beim Ausatmen. Luft bleibt in der Lunge gefangen (**Air Trapping**).\n\n• Die Lippenbremse erzeugt einen erhöhten Druck beim Ausatmen — den **PEEP-Effekt** (Positive End-Expiratory Pressure). Dieser Druck hält die Bronchiolen offen.\n\n• **Verhältnis Einatmung : Ausatmung = 1:2** (2 Sek ein, 4 Sek aus). Die verlängerte Ausatmung gibt der Lunge mehr Zeit, Luft abzugeben.\n\n• **Kontaktatmung** (Hände auf unteren Brustkorb) ist ein **propriozeptiver Reiz** — Frau Kovac spürt ihre eigene Atmung und kann sie besser steürn. Die Hände drücken nicht, sie folgen.\n\n• **Pneumonie-Bezug:** Durch effektivere Ausatmung wird Sekret in den Atemwegen bewegt → leichteres Abhusten → weniger Sekretverhaltung → geringeres Pneumonierisiko.\n\nQuelle: (GOLD-Report COPD 2023; Pflege Heute 7. Aufl.)",
    kerntextB1:
      "**Warum hilft die Lippenbremse?**\n\n• Bei COPD sind die kleinen Atemwege **locker** — sie fallen beim Ausatmen zusammen. Luft bleibt in der Lunge stecken.\n\n• Die Lippenbremse baut **Druck auf** beim Ausatmen. Dieser Druck hält die Atemwege offen. Das nennt man **PEEP-Effekt**.\n\n• **2 Sekunden einatmen, 4 Sekunden ausatmen** — doppelt so lang ausatmen wie einatmen.\n\n• Die Hände auf dem Brustkorb helfen Frau Kovac, ihre Atmung zu spüren. Du drückst nicht — du folgst nur.\n\n• **Warum ist das gut gegen Pneumonie?** Besseres Ausatmen → Schleim bewegt sich → leichter abhusten → weniger Lungenentzündungs-Gefahr.",
    faustregel:
      "**Lippenbremse = innerer Druck hält Atemwege offen.** Erkennungszeichen: Ausatmung länger als Einatmung + leises Pfeifen.",
    faustregelB1:
      "Lippenbremse hält die Atemwege offen. Zeichen: Ausatmen länger als Einatmen + leises Pfeifen.",
    spektrum: [
      {
        patientName: "Frau M.",
        situationsId: "frau-m-nacht-sturz",
        hauptfaktor: "Pneumonie Tag 3, Atemübungen therapeutisch",
        kurzbeschreibung:
          "Bei Frau M. ist die Lippenbremse Teil der Pneumonie-Therapie — bei Kovac ist sie Prophylaxe. Gleiche Technik, anderer Kontext.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Hemiplegie, Koordination eingeschränkt",
        kurzbeschreibung:
          "Bei Hemiplegie kann die Kontaktatmung einseitig eingeschränkt sein. Die Lippenbremse funktioniert aber trotzdem — sie ist unabhängig von der Körperseite.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Was ist der PEEP-Effekt bei der Lippenbremse — und warum ist er bei COPD III besonders wichtig?",
      rueckseite:
        "PEEP = Positive End-Expiratory Pressure. Die fast geschlossenen Lippen erzeugen beim Ausatmen einen erhöhten Druck, der die instabilen Bronchiolen offenhält und Air Trapping verhindert. Verhältnis 1:2 (2 Sek ein, 4 Sek aus). Bei COPD III sind die Atemwege besonders instabil → PEEP-Effekt besonders wichtig. Pneumonie-Bezug: bessere Ausatmung → Sekretmobilisation → weniger Sekretverhaltung. Faustregel: Lippenbremse = innerer Druck hält Atemwege offen.",
    },
  },
};

/**
 * 4B — Harnausscheidung (Wiederbegegnung): Obstipation + Fluessigkeit
 * Position: VOR Step 4.6 (Trinkgespraech) — vertieft den Zusammenhang
 * zwischen Obstipation, Fluessigkeitsmangel und Harnausscheidung.
 */
export const CE02_KOVAC_INLINE_04B_OBSTIPATION_TRINK: ContentStep = {
  stepId: "ce02-kovac-dur-05b-obstipation-flüssigkeit",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP Kontinenzförderung 2014",
    "AWMF S2k Harninkontinenz 2023",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-dur-obstipation-trinken",
  tag: "pflege",
  themaPrimaer: "harnausscheidung",
  themenSekundaer: ["pneumonie-prophylaxe"],
  transition:
    "Du verstehst jetzt den Dreifach-Zusammenhang. Gleich führst du das Trinkgespräch — mit diesem Wissen im Hintergrund.",
  contentC1: {
    title: "Obstipation, Trinkmenge und Harnausscheidung — der Dreifach-Zusammenhang",
    body: "",
    glossarBegriffe: ["Obstipation", "Harnausscheidung", "Darmperistaltik", "Exsikkose"],
  },
  contentB1: {
    title: "Verstopfung, Trinken und Urin — wie hängt das zusammen?",
    body: "",
    glossarBegriffe: ["Obstipation", "Exsikkose"],
  },
  inlineWissen: {
    bausteinRef: "harnausscheidung-urin-normalwerte",
    wiederbegegnung: {
      basisBausteinId: "harnausscheidung-urin-normalwerte",
      basisPatient: "Herr Petrov",
      vertiefung:
        "Die Urin-Normalwerte kennst du. Bei Frau Kovac zeigt sich ein Dreifach-Zusammenhang: Zu wenig Trinken → Obstipation (4 Tage kein Stuhlgang) + zähes Bronchialsekret + konzentrierter Urin. Eine Maßnahme (Trinkmenge steigern) verbessert drei Probleme gleichzeitig.",
      vertiefungB1:
        "Urin-Werte kennst du. Bei Frau Kovac hängt alles zusammen: Wenig trinken → Verstopfung + zähes Sekret + dunkler Urin. Mehr trinken hilft bei allen drei Problemen.",
    },
    storyAufhaenger:
      "Frau Kovac hat seit 4 Tagen keinen Stuhlgang, trinkt 800 ml und hustet zähes Sekret. Das klingt nach drei verschiedenen Problemen. In Wirklichkeit ist es eines: Flüssigkeitsmangel — mit drei Auswirkungen.",
    storyAufhaengerB1:
      "4 Tage kein Stuhlgang. 800 ml getrunken. Zaehes Sekret in der Lunge. Drei Probleme? Nein — ein Problem mit drei Auswirkungen: zu wenig Wasser im Körper.",
    kerntext:
      "**Der Dreifach-Zusammenhang bei Frau Kovac:**\n\n• **Darm:** Wenig Flüssigkeit → harter Stuhl → verlangsamte Peristaltik → Obstipation. 4 Tage ohne Stuhlgang bei 800 ml Trinkmenge ist erwartbar, nicht ueberraschend.\n\n• **Lunge:** Wenig Flüssigkeit → zähes Bronchialsekret → schlechtere Clearance → erhöhtes Pneumonierisiko (bei COPD III ohnehin schon reduziert).\n\n• **Niere/Blase:** Wenig Flüssigkeit → konzentrierter Urin → Blasenreizung → paradoxerweise häufigerer Harndrang → Frau Kovac trinkt noch weniger (Teufelskreis).\n\n**Eine Maßnahme, drei Effekte:** Trinkmenge schrittweise auf 1.200 ml steigern (aerztlich vereinbart).\n• Darm: weicherer Stuhl, bessere Peristaltik\n• Lunge: flüssigeres Sekret, leichteres Abhusten\n• Blase: weniger konzentrierter Urin, weniger Reizung\n\nQuelle: (DNQP 2014; AWMF S2k 2023)",
    kerntextB1:
      "**Drei Probleme — eine Ursache:**\n\n• **Darm:** Wenig Trinken → harter Stuhlgang → 4 Tage Verstopfung.\n• **Lunge:** Wenig Trinken → zähes Sekret → schwer abzuhusten.\n• **Blase:** Wenig Trinken → dunkler Urin → reizt die Blase → muss oefter zur Toilette → trinkt noch weniger.\n\n**Eine Lösung:** Schrittweise mehr trinken (Ziel: 1.200 ml/Tag). Das hilft dem Darm, der Lunge UND der Blase gleichzeitig.",
    faustregel:
      "**Flüssigkeitsmangel ist nie nur ein Problem.** Bei Frau Kovac: Obstipation + zähes Sekret + konzentrierter Urin = ein gemeinsamer Nenner.",
    faustregelB1:
      "Zu wenig Trinken betrifft nie nur eine Sache. Bei Frau Kovac: Verstopfung + Schleim + Urin — alles gleichzeitig.",
    karteikarte: {
      vorderseite:
        "Frau Kovac: 800 ml Trinkmenge, 4 Tage Obstipation, zähes Sekret. Welcher Zusammenhang — und welche eine Maßnahme hilft bei allen drei?",
      rueckseite:
        "Gemeinsamer Nenner: Flüssigkeitsmangel. (1) Darm: harter Stuhl + verlangsamte Peristaltik. (2) Lunge: zähes Sekret + reduzierte Clearance + Pneumonierisiko. (3) Blase: konzentrierter Urin + Blasenreizung + Teufelskreis Trinkvermeidung. Maßnahme: Trinkmenge schrittweise auf 1.200 ml (aerztlich vereinbart) — verbessert alle drei. Faustregel: Flüssigkeitsmangel ist nie nur ein Problem.",
    },
  },
};

// ============================================================
// PHASE 5 — EVALUIEREN (1 Baustein)
// ============================================================

/**
 * 5A — Pflegeprozess (Wiederbegegnung): Evaluation als Regelkreis
 * Position: VOR Step 5.1 (Trinkprotokoll Kategorisierung) — erinnert an
 * den Regelkreis-Charakter des Pflegeprozesses.
 */
export const CE02_KOVAC_INLINE_05A_EVALUATION_REGELKREIS: ContentStep = {
  stepId: "ce02-kovac-eval-00b-evaluation-regelkreis",
  phase: 5,
  stepType: "inlineWissen",
  bloomLevel: 3,
  kompetenzbereich: "I.1",
  quellen: [
    "Fiechter/Meier 1981",
    "DNQP Mobilität 2017/2024",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-eval-regelkreis",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: ["schlaf", "harnausscheidung"],
  transition:
    "Evaluation ist keine Endstation — sie ist der Start für morgen. Schau jetzt, was heute funktioniert hat und was nicht.",
  contentC1: {
    title: "Evaluation — der Regelkreis in der ambulanten Praxis",
    body: "",
    glossarBegriffe: ["Evaluation", "Regelkreis", "Soll-Ist-Abgleich", "Pflegeprozess"],
  },
  contentB1: {
    title: "Evaluation — was hat funktioniert?",
    body: "",
    glossarBegriffe: ["Evaluation", "Pflegeprozess"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-schritt-6-evaluation",
    wiederbegegnung: {
      basisBausteinId: "pflegeprozess-schritt-6-evaluation",
      basisPatient: "Frau M.",
      vertiefung:
        "Bei Frau M. hast du den Soll-Ist-Abgleich gelernt: Pflegeziel (Soll) vs. tatsächlicher Zustand (Ist). Ambulant ist Evaluation schwieriger — du hast nicht den ganzen Tag beobachtet. Du musst dich auf das Trinkprotokoll, Frau Kovacs Eigenaussagen und deine Stichproben-Beobachtung verlassen. Evaluation mit lückenhaften Daten ist ambulanter Alltag.",
      vertiefungB1:
        "Den Soll-Ist-Vergleich kennst du von Frau M.: Ziel vs. Realität. Ambulant ist es schwerer — du warst nicht den ganzen Tag da. Du musst dich auf das Protokoll und Frau Kovacs Worte verlassen.",
    },
    storyAufhaenger:
      "Es ist 18:30 Uhr, Abendbesuch. Du hast heute Morgen Ziele vereinbart: Trinkmenge steigern, Übungen, Schlafgespräch vorbereiten. Jetzt schaust du: Was ist passiert in den 10 Stunden, die du nicht da warst?",
    storyAufhaengerB1:
      "Du bist zum Abendbesuch da. Heute Morgen hast du Ziele vereinbart. Was ist in den 10 Stunden passiert, als du nicht da warst?",
    kerntext:
      "**Evaluation ambulant — 3 Besonderheiten:**\n\n• **Lueckenhafte Daten:** Du warst 45 Min morgens da. Was dazwischen passiert ist, weisst du nur aus dem Trinkprotokoll und Frau Kovacs Erzählung. Das ist weniger als stationär — aber es ist, was du hast.\n\n• **Soll-Ist mit Vorsicht:** \"2 von 3 Bechern geleert\" = 680 ml bis 18:30 Uhr. Ziel: 1.200 ml/Tag. Auf den ersten Blick: nicht erreicht. Aber: 680 ml bis 18:30 ist mehr als gestern (800 ml den ganzen Tag). Die Richtung stimmt — und das zählt.\n\n• **Regelkreis-Konsequnz:** Teilweise erreicht → Maßnahme nicht abbrechen, sondern anpassen. Morgen: 4. Becher hinstellen statt 3. Tee anbieten statt Wasser (Frau Kovac mag Tee). Ziel bleibt 1.200 ml — der Weg aendert sich.\n\n**Evaluation ist keine Erfolgskontrolle** — sie ist Datenerhebung für den nächsten Plan.\n\nQuelle: (Fiechter/Meier 1981; DNQP 2017/2024)",
    kerntextB1:
      "**Evaluation ambulant — 3 Punkte:**\n\n• **Du warst nicht den ganzen Tag da.** Du weisst nur was im Protokoll steht und was Frau Kovac erzählt.\n\n• **Vergleich Ziel und Realität:** 680 ml bis 18:30 — Ziel ist 1.200 ml. Nicht erreicht? Stimmt. Aber gestern war es 800 ml den ganzen Tag. Es geht in die richtige Richtung.\n\n• **Was jetzt?** Morgen: Einen Becher mehr hinstellen. Tee anbieten statt nur Wasser. Das Ziel bleibt — der Weg aendert sich.\n\nEvaluation heißt nicht: geschafft oder nicht geschafft. Es heißt: Was muss ich morgen anders machen?",
    faustregel:
      "**Evaluation ambulant = Richtung zählt mehr als Zielwert.** 680 ml statt 800 ml ist ein Erfolg — auch wenn 1.200 ml noch fehlen.",
    faustregelB1:
      "Die Richtung zählt. 680 ml bis zum Abend ist besser als gestern 800 ml den ganzen Tag. Morgen wird es mehr.",
    karteikarte: {
      vorderseite:
        "Frau Kovac hat bis 18:30 Uhr 680 ml getrunken (Ziel: 1.200 ml). Ist die Evaluation positiv oder negativ — und was aendert sich morgen?",
      rueckseite:
        "Weder noch — Evaluation ist Datenerhebung, keine Wertung. Richtung stimmt: 680 ml bis 18:30 > 800 ml/ganzer Tag gestern. Regelkreis: Teilziel nicht erreicht → Maßnahme anpassen (4 Becher statt 3, Tee statt Wasser, aerztliches Tagesziel 1.200 ml bleibt). Bei Frau M. (stationär) war der Soll-Ist-Vergleich einfacher — 24h-Dokumentation. Ambulant: lückenhafte Daten sind normal. Faustregel: Richtung zählt mehr als Zielwert.",
    },
  },
};

// ============================================================
// PHASE 1 — INFORMIEREN (Ergaenzung: 1 Baustein)
// ============================================================

/**
 * 1C — Kontraktur + Thrombose + Trinkprotokoll (Wohnungscheck-Begriffe)
 * Position: VOR ce02-kovac-info-03-wohnungscheck
 * Begriffe: Kontraktur, Thrombose, Trinkprotokoll, Hausrecht
 */
export const CE02_KOVAC_INLINE_01C_RISIKEN_UEBERBLICK: ContentStep = {
  stepId: "ce02-kovac-info-02b-risiken-ueberblick",
  phase: 1,
  stepType: "inlineWissen",
  bloomLevel: 1,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP Kontrakturprophylaxe 2024 (in Entwicklung)",
    "AWMF S3-Leitlinie Thromboseprophylaxe 2022",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-info-risiken",
  tag: "pflege",
  themaPrimaer: "kontraktur-prophylaxe",
  themenSekundaer: ["thrombose-prophylaxe"],
  transition:
    "Du kennst jetzt die drei Hauptrisiken bei Frau Kovac. Gleich inspizierst du ihre Wohnung — und erkennst, welche Risiken sich dort zeigen.",
  contentC1: {
    title: "Kontraktur, Thrombose, Flüssigkeit — drei Risiken, eine Patientin",
    body: "",
    glossarBegriffe: ["Kontraktur", "Thrombose", "Trinkprotokoll", "Hausrecht"],
  },
  contentB1: {
    title: "Was sind die drei grossen Risiken bei Frau Kovac?",
    body: "",
    glossarBegriffe: ["Kontraktur", "Thrombose"],
  },
  inlineWissen: {
    bausteinRef: "kontraktur-prophylaxe-definition",
    storyAufhaenger:
      "Petras Zettel sagt vieles zwischen den Zeilen: \"Strümpfe verweigert\" = Thrombose-Prophylaxe stockt. \"Kaum gegessen\" = Ernährungsproblem. \"Knie tut weh\" = Bewegungseinschränkung. Und alles in einer 84-jährigen Frau mit COPD, die den ganzen Tag im Sessel sitzt. Drei Risiken, die sich gegenseitig verstärken.",
    storyAufhaengerB1:
      "Frau Kovac hat drei grosse Risiken: Ihre Gelenke können steif werden. Sie kann ein Blutgerinnsel bekommen. Und sie trinkt zu wenig. Alles hängt zusammen.",
    kerntext:
      "**Drei Risiken bei Frau Kovac:**\n\n• **Kontraktur** = Versteifung eines Gelenks durch dauerhafte Fehlstellung. Frau Kovac sitzt den ganzen Tag mit angewinkelten Knien. Das Kniegelenk wird kürzer, das Strecken wird unmöglich. Ohne Bewegung → irreversible Kontraktur in Wochen.\n\n• **Thrombose** = Blutgerinnsel in einer tiefen Vene, meist Bein. Frau Kovac: Sitzt viel (Stase), trinkt wenig (Haemokonzentration), bewegt die Beine kaum (fehlende Wadenmuskelpumpe). Kompressionsstrümpfe verweigert → Risiko erhöhrt.\n\n• **Trinkprotokoll** = systematische Erfassung der Trinkmenge ueber 24h. Zeigt: Wie viel trinkt sie wirklich? (Nicht: \"Ich trinke genug\" — sondern messbar.) Bei Frau Kovac: Gestern 800 ml (Bedarf: mind. 1.200 ml).\n\n• **Hausrecht:** In der ambulanten Pflege bist du Gast. Frau Kovac entscheidet, was in ihrer Wohnung passiert. Du darfst beraten, empfehlen, dokumentieren — aber nicht gegen ihren Willen handeln.\n\nQuelle: (AWMF S3 Thrombose 2022; DNQP Kontraktur 2024)",
    kerntextB1:
      "**Drei grosse Risiken:**\n\n• **Kontraktur** = Gelenk wird steif. Frau Kovac sitzt immer mit angewinkelten Knien. Ohne Bewegung wird das Knie irgendwann steif — dann kann sie gar nicht mehr gehen.\n\n• **Thrombose** = Blutgerinnsel im Bein. Sie sitzt viel + trinkt wenig + bewegt die Beine nicht = gefährlich. Strümpfe helfen — aber sie will keine.\n\n• **Trinkprotokoll** = Aufschreiben wie viel sie trinkt. Gestern: 800 ml. Das ist zu wenig (Minimum: 1.200 ml).\n\n• **Hausrecht**: Du bist Gast bei Frau Kovac. Du darfst beraten — aber sie entscheidet.",
    faustregel:
      "**Immobilität + wenig Trinken + keine Strümpfe = dreifaches Risiko.** Ambulant: Beratung statt Anordnung.",
    faustregelB1:
      "Wenig Bewegung + wenig Trinken + keine Strümpfe = drei Gefahren gleichzeitig. Du berätst — Frau Kovac entscheidet.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Kontraktur bei Bettlägerigkeit",
        kurzbeschreibung:
          "Bei Herr Bauer droht Kontraktur durch Bettlägerigkeit. Bei Frau Kovac durch dauerhaftes Sitzen — anderer Mechanismus, gleiches Ergebnis.",
      },
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hüft-tep",
        hauptfaktor: "Post-OP: Thrombose + Kontraktur + Dekubitus",
        kurzbeschreibung:
          "Bei Frau Yilmaz sind es dieselben Risiken — aber stationär, mit ständiger Beobachtung. Ambulant fehlt diese Kontrolle.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Kovac sitzt den ganzen Tag, trinkt 800 ml und verweigert Strümpfe. Welche drei Risiken bestehen — und was ist das Besondere ambulant?",
      rueckseite:
        "1) Kontraktur: Kniegelenk in Flexion → ohne Bewegung irreversibel. 2) Thrombose: Stase + Haemokonzentration + fehlende Wadenmuskelpumpe. 3) Dehydration: 800 ml/Tag (Bedarf 1.200). Ambulant: Frau Kovac hat Hausrecht — du berätst, sie entscheidet. Faustregel: Immobilität + wenig Trinken + keine Strümpfe = dreifaches Risiko.",
    },
  },
};

// ============================================================
// PHASE 2 — BEOBACHTEN (Ergaenzung: 2 Bausteine)
// ============================================================

/**
 * 2D — Virchow-Trias + Thrombose + Kompressionstherapie
 * Position: VOR ce02-kovac-beob-06-oedeme-thrombose-blick
 * Begriffe: Virchow-Trias, Thrombose, Stase, Kompressionstherapie
 */
export const CE02_KOVAC_INLINE_02D_VIRCHOW_TRIAS: ContentStep = {
  stepId: "ce02-kovac-beob-05b-virchow-trias",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "AWMF S3-Leitlinie VTE-Prophylaxe 2022",
    "Virchow 1856 — Thrombose-Pathogenese",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-beob-virchow",
  tag: "krankheitslehre",
  themaPrimaer: "thrombose-prophylaxe",
  themenSekundaer: ["kontraktur-prophylaxe"],
  transition:
    "Du verstehst jetzt die drei Ursachen für Thrombose. Gleich untersuchst du Frau Kovacs Beine — und ordnest ein, was du siehst.",
  contentC1: {
    title: "Virchow-Trias — warum Frau Kovac thrombosegefährdet ist",
    body: "",
    glossarBegriffe: ["Virchow-Trias", "Thrombose", "Stase", "Kompressionstherapie"],
  },
  contentB1: {
    title: "Warum kann ein Blutgerinnsel entstehen?",
    body: "",
    glossarBegriffe: ["Thrombose", "Kompressionstherapie"],
  },
  inlineWissen: {
    bausteinRef: "thrombose-prophylaxe-virchow",
    storyAufhaenger:
      "Frau Kovac hat geschwollene Knöchel. Sie sitzt den ganzen Tag im Sessel. Sie trinkt 800 ml. Sie verweigert die Strümpfe. Und in der Medikamentenliste steht kein Heparin — nur ASS. Rudolf Virchow würde sagen: Das sind drei rote Flaggen gleichzeitig.",
    storyAufhaengerB1:
      "Frau Kovacs Knöchel sind geschwollen. Sie sitzt viel, trinkt wenig und will keine Strümpfe. Warum kann daraus ein Blutgerinnsel werden?",
    kerntext:
      "**Virchow-Trias — die drei Ursachen der Thrombose (1856):**\n\n• **1. Stase** (verlangsamter Blutfluss): Frau Kovac sitzt den ganzen Tag. Die Wadenmuskelpumpe arbeitet nicht. Blut staut sich in den tiefen Beinvenen.\n\n• **2. Endothelschädigung** (Gefässwandschäden): Chronische Veneninsuffizienz, frühere Thrombosen, Krampfadern — geschädigte Venenwand begünstigt Gerinnselbildung.\n\n• **3. Hyperkoagulabilität** (erhöhte Gerinnungsneigung): Bei Frau Kovac: Dehydration (800 ml → dickes Blut), Immobilität, Alter >80 Jahre.\n\n**Kompressionstherapie:**\n• Kompressionsstrümpfe Klasse II beschleunigen den venösen Rueckfluss und reduzieren Stase. Frau Kovac verweigert sie → Alternativ: Kompressionsverbände versuchen oder Bewegungsübungen (Sprunggelenk-Mobilisation, Wadenmuskelpumpe) als Teilkompensation.\n\n• **ASS ≠ Thromboseprophylaxe** bei venösen Thrombosen. ASS hemmt Thrombozyten (arteriell), nicht die plasmatische Gerinnung (venös). Heparin wäre nötig — aerztliche Ruecksprache empfehlen.\n\nQuelle: (AWMF S3 VTE 2022; Virchow 1856)",
    kerntextB1:
      "**Warum entsteht ein Blutgerinnsel?**\n\n• **1. Blut fliesst zu langsam** (Stase): Frau Kovac sitzt viel. Das Blut staut sich in den Beinen.\n• **2. Gefässwand beschädigt**: Alte Venen, Krampfadern — die Wand ist nicht mehr glatt.\n• **3. Blut ist zu dick**: Wenig trinken (800 ml) → Blut wird dicker → Gerinnsel leichter.\n\n**Strümpfe helfen:** Sie drücken die Beine sanft zusammen → Blut fliesst besser. Frau Kovac will keine → dann: Fuss-Übungen als Ersatz.\n\n**ASS hilft NICHT** gegen Bein-Gerinnsel. ASS ist für Arterien, nicht für Venen. Der Arzt müsste Heparin ueberlegen.",
    faustregel:
      "**Virchow-Trias: Stase + Gefässwandschaden + dickes Blut = Thrombose.** ASS schützt nicht vor venösen Thrombosen.",
    faustregelB1:
      "Wenig Bewegung + kranke Venen + wenig trinken = Blutgerinnsel-Gefahr. ASS hilft hier nicht — nur Strümpfe oder Heparin.",
    spektrum: [
      {
        patientName: "Frau Yilmaz",
        situationsId: "ls-yilmaz-hüft-tep",
        hauptfaktor: "Post-OP: Heparin + Strümpfe + Mobilisation",
        kurzbeschreibung:
          "Bei Frau Yilmaz ist die Prophylaxe stationär klar geregelt: Heparin s.c. + Strümpfe + Frühmobilisation. Ambulant bei Kovac: Strümpfe verweigert, kein Heparin, nur ASS.",
      },
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Post-OP + Tumorerkrankung = erhöhte Koagulabilität",
        kurzbeschreibung:
          "Herr Nguyen hat eine Tumorerkrankung — ein zusätzlicher Risikofaktor für Thrombose (Hyperkoagulabilität). Sein Heparin ist deshalb besonders wichtig.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Kovac hat geschwollene Knöchel, trinkt 800 ml, nimmt ASS und verweigert Strümpfe. Erkläre mit der Virchow-Trias, warum sie thrombosegefährdet ist.",
      rueckseite:
        "Virchow-Trias: 1) Stase: Ganztägig im Sessel, keine Wadenmuskelpumpe. 2) Endothelschaden: Alter, ggf. Varikose. 3) Hyperkoagulabilität: Dehydration (800 ml) + Alter >80. ASS hemmt Thrombozyten (arteriell) — schützt NICHT vor venöser Thrombose. Kompression würde Stase reduzieren — verweigert. Empfehlung: Ärztliche Ruecksprache wegen Heparin. Ersatz: Sprunggelenk-Übungen (Wadenmuskelpumpe). Faustregel: Stase + Schaden + dickes Blut = Thrombose.",
    },
  },
};

/**
 * 2E — Kontraktur + VAS + Extensionsdefizit + Atemhilfsmuskulatur
 * Position: VOR ce02-kovac-beob-03-gelenke-assessment
 * Begriffe: Kontraktur, VAS, Extensionsdefizit, Flexionskontraktur, Atemhilfsmuskulatur, DNQP Schmerz
 */
export const CE02_KOVAC_INLINE_02E_KONTRAKTUR_GELENKE: ContentStep = {
  stepId: "ce02-kovac-beob-02b-kontraktur-gelenke",
  phase: 2,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "I.1",
  quellen: [
    "DNQP Expertenstandard Schmerzmanagement 2020",
    "AWMF S2k-Leitlinie Kontrakturprophylaxe 2024 (Entwurf)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-beob-kontraktur",
  tag: "pflege",
  themaPrimaer: "kontraktur-prophylaxe",
  themenSekundaer: ["thrombose-prophylaxe"],
  transition:
    "Du verstehst jetzt Kontraktur, Extensionsdefizit und Schmerzassessment. Gleich beurteilst du Frau Kovacs Gelenke — und schreibst auf, was du findest.",
  contentC1: {
    title: "Kontraktur, Extensionsdefizit und Schmerz-Assessment bei COPD",
    body: "",
    glossarBegriffe: ["Kontraktur", "VAS", "Extensionsdefizit", "Flexionskontraktur", "Atemhilfsmuskulatur", "DNQP Schmerz"],
  },
  contentB1: {
    title: "Was passiert mit Gelenken, die sich nicht mehr bewegen?",
    body: "",
    glossarBegriffe: ["Kontraktur", "VAS"],
  },
  inlineWissen: {
    bausteinRef: "kontraktur-prophylaxe-assessment",
    storyAufhaenger:
      "Frau Kovac will aufstehen — aber das rechte Knie lässt sich nicht ganz strecken. \"Das geht schon seit Wochen so\", sagt sie. Das ist kein normaler Verschleiss. Das ist ein Extensionsdefizit — und ohne Intervention wird es schlimmer.",
    storyAufhaengerB1:
      "Frau Kovacs rechtes Knie geht nicht ganz gerade. \"Das war schon immer so\", sagt sie. Stimmt das — oder wird es schlimmer?",
    kerntext:
      "**Kontraktur — wenn Gelenke steif werden:**\n\n• **Kontraktur** = dauerhafte Bewegungseinschränkung eines Gelenks durch Verkürzung von Muskeln, Sehnen oder Gelenkkapsel. Entsteht durch anhaltende Immobilität in einer Position.\n\n• **Flexionskontraktur** am Knie: Das Knie bleibt in Beugestellung, vollständige Streckung ist nicht mehr möglich. Frau Kovacs Sessel-Position (Knie immer angewinkelt) fördert genau das.\n\n• **Extensionsdefizit** = die fehlenden Grade bei der Streckung. Messung: Vollständige Streckung = 0°. Frau Kovacs Defizit: z.B. -15° → sie kann das Knie nur bis 15° vor der vollen Streckung bringen.\n\n• **VAS** (Visuelle Analogskala): Schmerzmessung 0-10. Bei Frau Kovac (kognitiv intakt, sprachfähig) geeigneter als NRS. DNQP Schmerzmanagement (2020): Systematisches Schmerzassessment = Pflicht bei jeder Mobilisation.\n\n• **Atemhilfsmuskulatur**: Bei COPD nutzt Frau Kovac Hals- und Schultermuskeln zum Atmen (sichtbare Einziehungen, hochgezogene Schultern). Beachte: Verspannte Schultermuskulatur durch Atemhilfsmuskulatur-Einsatz kann Kontrakturrisiko im Schultergelenk erhöhen.\n\nQuelle: (DNQP Schmerzmanagement 2020; AWMF S2k 2024)",
    kerntextB1:
      "**Was ist eine Kontraktur?**\n\n• Ein Gelenk wird steif, weil es zu lange in einer Position war. Frau Kovacs Knie ist immer angewinkelt (im Sessel). Deshalb wird es steif.\n\n• **Extensionsdefizit** = sie kann das Knie nicht mehr ganz strecken. Es fehlen ein paar Grad.\n\n• **VAS** = Schmerzskala von 0 bis 10. Frage: \"Wie stark ist der Schmerz? 0 = kein Schmerz, 10 = stärkster vorstellbarer Schmerz.\"\n\n• **Atemhilfsmuskulatur** = Bei COPD benutzt Frau Kovac Halsmuskeln zum Atmen. Das siehst du an hochgezogenen Schultern. Das kann auch die Schulter steif machen.",
    faustregel:
      "**Kontraktur = Immobilität + Zeit + eine Position.** VAS bei jeder Mobilisation. Atemhilfsmuskulatur beobachten = Schulter-Kontrakturrisiko erkennen.",
    faustregelB1:
      "Gelenke werden steif wenn sie sich nicht bewegen. Immer nach Schmerzen fragen (VAS). Bei COPD: Schultern beobachten.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Knie-Kontraktur bei Demenz + Bettlägerigkeit",
        kurzbeschreibung:
          "Herr Bauers Kontraktur ist weiter fortgeschritten — er liegt viel, bewegt die Beine kaum und kann nicht mehr kooperieren. Bei Frau Kovac gibt es noch ein Zeitfenster.",
      },
      {
        patientName: "Herr Petrov",
        situationsId: "ls-petrov-schlaganfall",
        hauptfaktor: "Spastik-Kontraktur durch Hemiparese",
        kurzbeschreibung:
          "Bei Petrov droht Kontraktur durch Spastik (Muskeltonus zu hoch). Bei Kovac durch Immobilität (Muskeltonus normal, Gelenk wird einfach nicht bewegt).",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Kovacs rechtes Knie lässt sich nicht ganz strecken (-15°). Wie heißt das — und warum ist es bei COPD-Patienten besonders relevant?",
      rueckseite:
        "Extensionsdefizit = fehlende Grade bei Streckung. Ursache: Flexionskontraktur durch dauerhaftes Sitzen mit angewinkelten Knien. Bei COPD: Atemhilfsmuskulatur-Einsatz kann zusätzlich Schulter-Kontraktur begünstigen. VAS bei jeder Mobilisation (DNQP 2020). Messung: 0° = volle Streckung, -15° = 15 Grad fehlen. Ohne Intervention: Defizit nimmt zu → Gehen wird unmöglich. Faustregel: Kontraktur = Immobilität + Zeit + eine Position.",
    },
  },
};

// ============================================================
// PHASE 3 — PLANEN (Ergaenzung: 1 Baustein)
// ============================================================

/**
 * 3C — Motivierende Gespraechsfuehrung + Zirkadiane Rhythmik
 * Position: VOR ce02-kovac-plan-04-schlafberatung-planen
 * Begriffe: Motivierende Gespraechsfuehrung, Zirkadiane Rhythmik
 */
export const CE02_KOVAC_INLINE_03C_MOTIVIEREND: ContentStep = {
  stepId: "ce02-kovac-plan-03b-motivierend",
  phase: 3,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "II.1",
  quellen: [
    "Miller/Rollnick 2013 — Motivational Interviewing 3. Aufl.",
    "DGSM S3-Leitlinie Insomnie 2017/2020",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-plan-motivierend",
  tag: "pflege",
  themaPrimaer: "schlaf",
  themenSekundaer: ["pflegeprozess"],
  transition:
    "Du kennst jetzt die Grundprinzipien der Motivierenden Gesprächsführung. Gleich planst du das Schlafberatungsgespräch — und entscheidest, wie du Frau Kovac vom Fernseher-Verzicht ueberzeugst.",
  contentC1: {
    title: "Motivierende Gesprächsführung — Veränderung fördern, nicht fordern",
    body: "",
    glossarBegriffe: ["Motivierende Gesprächsführung", "Zirkadiane Rhythmik"],
  },
  contentB1: {
    title: "Wie ueberzeugst du Frau Kovac?",
    body: "",
    glossarBegriffe: ["Motivierende Gesprächsführung"],
  },
  inlineWissen: {
    bausteinRef: "schlaf-motivierende-gesprächsführung",
    storyAufhaenger:
      "Frau Kovac schaut bis Mitternacht Fernsehen. Du weisst: Blaulicht hemmt Melatonin. Aber wenn du sagst \"Schalten Sie den Fernseher ab\", wird sie sagen: \"Das ist das Einzige was ich noch hab.\" Motivierende Gesprächsführung geht anders — sie lässt Frau Kovac selbst zur Erkenntnis kommen.",
    storyAufhaengerB1:
      "Frau Kovac schaut nachts Fernsehen. Du weisst: Das ist schlecht für den Schlaf. Aber wenn du sagst \"Machen Sie den Fernseher aus\", sagt sie nein. Wie gehst du vor?",
    kerntext:
      "**Motivierende Gesprächsführung (MI, Miller/Rollnick 2013):**\n\n• **Prinzip 1 — Empathie ausdrücken:** \"Ich verstehe, dass der Fernseher abends Gesellschaft ist.\" Kein Urteil, kein Vorwurf.\n\n• **Prinzip 2 — Diskrepanz entwickeln:** \"Sie schlafen schlecht ein und wachen um 2 Uhr auf. Was glauben Sie: Koennte der Fernseher damit zu tun haben?\" Der Patient entdeckt den Widerspruch selbst.\n\n• **Prinzip 3 — Widerstand aufnehmen:** Wenn Frau Kovac sagt \"Der Fernseher bleibt an\" → nicht dagegen argumentieren, sondern: \"Was wäre, wenn Sie ihn um 22 Uhr ausmachen statt um 24 Uhr? Nur als Versuch für 3 Tage?\"\n\n• **Prinzip 4 — Selbstwirksamkeit stärken:** \"Sie haben gestern die Atemübungen geschafft, obwohl es schwer war. Wenn Sie das können, können Sie auch das hier ausprobieren.\"\n\n**Zirkadiane Rhythmik:** Der 24h-Rhythmus von Schlaf-Wach, Temperatur und Hormonen. Blaulicht (Fernseher, Handy) hemmt Melatonin-Ausschüttung → Einschlafen verzögert sich. Empfehlung: 1h vor Schlaf kein Bildschirm.\n\nQuelle: (Miller/Rollnick 2013; DGSM 2017/2020)",
    kerntextB1:
      "**Wie ueberzeugst du jemanden, der nicht will?**\n\n• **Verstehen:** \"Ich weiss, der Fernseher ist Ihnen wichtig.\" Nicht schimpfen.\n• **Fragen statt sagen:** \"Was glauben SIE — hat der Fernseher mit dem schlechten Schlaf zu tun?\" Die Patientin soll es selbst merken.\n• **Klein anfangen:** Nicht \"Fernseher aus\", sondern \"Vielleicht um 22 Uhr statt Mitternacht? Nur 3 Tage probieren?\"\n• **Loben:** \"Sie haben die Atemübungen geschafft — das war auch nicht leicht.\"\n\n**Zirkadiane Rhythmik:** Der Körper hat eine innere Uhr. Bildschirm-Licht stört diese Uhr → man kann nicht einschlafen. 1 Stunde vor dem Schlafen: kein Bildschirm.",
    faustregel:
      "**Motivierende Gesprächsführung = Fragen statt Sagen.** Der Patient entdeckt den Widerspruch selbst. Klein anfangen, nicht alles auf einmal.",
    faustregelB1:
      "Fragen statt sagen. Klein anfangen. Und loben was schon klappt.",
    spektrum: [
      {
        patientName: "Herr Nguyen",
        situationsId: "ls-nguyen-stoma",
        hauptfaktor: "Ernährungsberatung bei Scham",
        kurzbeschreibung:
          "Bei Herrn Nguyen geht es um Ernährungsumstellung nach Stoma-OP. Gleiche Methode: nicht vorschreiben, sondern mit dem Patienten Lösungen entwickeln.",
      },
      {
        patientName: "Frau Schmidt",
        situationsId: "ls-schmidt-adipositas",
        hauptfaktor: "Gewichtsreduktion + Lebensstiländerung",
        kurzbeschreibung:
          "Bei Frau Schmidt ist MI zentral: Gewichtsreduktion funktioniert nur mit eigener Motivation — nicht mit aerztlichen Anweisungen.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Kovac schaut bis Mitternacht Fernsehen und schläft schlecht. Wie setzt du Motivierende Gesprächsführung ein?",
      rueckseite:
        "MI (Miller/Rollnick 2013): 1) Empathie: \"Ich verstehe, Fernseher = Gesellschaft.\" 2) Diskrepanz: \"Koennte der Fernseher mit dem schlechten Schlaf zusammenhängen?\" 3) Widerstand aufnehmen: \"22 Uhr statt 24 Uhr? Nur 3 Tage?\" 4) Selbstwirksamkeit: \"Die Atemübungen konnten Sie auch — das hier schaffen Sie auch.\" Zirkadiane Rhythmik: Blaulicht hemmt Melatonin → 1h vor Schlaf kein Bildschirm. Faustregel: Fragen statt Sagen.",
    },
  },
};

// ============================================================
// PHASE 4 — DURCHFUEHREN (Ergaenzung: 1 Baustein)
// ============================================================

/**
 * 4C — Schweigepflicht + DSGVO + Datenschutz + Gesundheitsdaten
 * Position: VOR ce02-kovac-dur-05-komplikation-sohn-datenschutz
 * Begriffe: Schweigepflicht, DSGVO, Datenschutz, Gesundheitsdaten
 */
export const CE02_KOVAC_INLINE_04C_SCHWEIGEPFLICHT: ContentStep = {
  stepId: "ce02-kovac-dur-04b-schweigepflicht",
  phase: 4,
  stepType: "inlineWissen",
  bloomLevel: 2,
  kompetenzbereich: "IV.2",
  quellen: [
    "§ 203 StGB (Verletzung von Privatgeheimnissen)",
    "DSGVO Art. 9 (Gesundheitsdaten)",
    "PflBG § 5 (Berufspflichten)",
  ],
  track: "basis",
  modus: "entdecker",
  lernziel: "ce02-kovac-ambulant-dur-schweigepflicht",
  tag: "pflege",
  themaPrimaer: "pflegeprozess",
  themenSekundaer: [],
  transition:
    "Du verstehst jetzt, warum Gesundheitsdaten besonders geschützt sind. Gleich klingelt das Telefon — Frau Kovacs Sohn will wissen, wie es seiner Mutter geht. Was darfst du sagen?",
  contentC1: {
    title: "Schweigepflicht, DSGVO und Gesundheitsdaten in der ambulanten Pflege",
    body: "",
    glossarBegriffe: ["Schweigepflicht", "DSGVO", "Datenschutz", "Gesundheitsdaten"],
  },
  contentB1: {
    title: "Was darfst du ueber Frau Kovac erzählen — und was nicht?",
    body: "",
    glossarBegriffe: ["Schweigepflicht", "Datenschutz"],
  },
  inlineWissen: {
    bausteinRef: "pflegeprozess-schweigepflicht",
    storyAufhaenger:
      "Du stehst bei Frau Kovac in der Kueche. Ihr Handy klingelt. Darko (der Sohn in Muenchen) fragt: \"Wie geht es meiner Mutter? Hat sie die Strümpfe angezogen? Was hat der Arzt gesagt?\" Er klingt besorgt, er meint es gut. Aber: Darfst du antworten?",
    storyAufhaengerB1:
      "Frau Kovacs Sohn ruft an. Er will wissen wie es seiner Mutter geht. Er meint es gut — aber darfst du einfach so erzählen?",
    kerntext:
      "**Schweigepflicht und Datenschutz in der Pflege:**\n\n• **§ 203 StGB**: Pflegekräfte unterliegen der Schweigepflicht. Gesundheitsdaten dürfen nicht an Dritte weitergegeben werden — auch nicht an Angehörige, es sei denn, die Patientin stimmt zu.\n\n• **DSGVO Art. 9**: Gesundheitsdaten sind \"besondere Kategorien personenbezogener Daten\" — höchste Schutzstufe. Weitergabe nur mit ausdrücklicher Einwilligung.\n\n• **Ambulant besonders heikel:** Du stehst in Frau Kovacs Wohnung, telefonierst auf IHREM Handy mit IHREM Sohn. Die Grenzen verschwimmen — aber die Pflicht bleibt.\n\n• **Lösung:** Frage Frau Kovac VOR dem Anruf: \"Darf ich Darko sagen, wie der Besuch heute war? Was darf ich erzählen, was nicht?\" Dokumentiere die Einwilligung.\n\n• **Ohne Einwilligung:** \"Herr Kovac, ich verstehe Ihre Sorge. Aber ich darf ohne Einwilligung Ihrer Mutter keine Informationen weitergeben. Fragen Sie sie bitte selbst — oder ich frage sie jetzt, ob ich Ihnen etwas erzählen darf.\"\n\nQuelle: (§ 203 StGB; DSGVO Art. 9; PflBG § 5)",
    kerntextB1:
      "**Was darfst du erzählen?**\n\n• **Schweigepflicht** heißt: Du darfst ueber Patienten nichts erzählen — nicht mal der Familie.\n• **Datenschutz** (DSGVO) schützt Gesundheitsdaten besonders streng.\n• **Was tust du?** Frage Frau Kovac: \"Darf ich Ihrem Sohn sagen wie es Ihnen geht?\" Wenn sie Ja sagt: ok. Wenn nein: nicht.\n• **Ohne Erlaubnis zum Sohn:** \"Ich darf leider nichts sagen ohne Erlaubnis Ihrer Mutter. Fragen Sie sie bitte selbst.\"",
    faustregel:
      "**Ohne Einwilligung der Patientin: keine Auskunft — auch nicht an Angehörige.** Erst fragen, dann reden.",
    faustregelB1:
      "Erst die Patientin fragen ob du dem Sohn etwas erzählen darfst. Ohne Erlaubnis: nichts sagen.",
    spektrum: [
      {
        patientName: "Herr Bauer",
        situationsId: "ls-bauer-demenz-sturz",
        hauptfaktor: "Gesetzliche Betreuung = Auskunftsrecht",
        kurzbeschreibung:
          "Bei Herr Bauer ist der Sohn gesetzlicher Betreuer → er hat Auskunftsrecht. Bei Frau Kovac hat Darko KEIN Betreuungsrecht — sie ist einwilligungsfähig.",
      },
      {
        patientName: "Lukas",
        situationsId: "ls-lukas-verbrühung",
        hauptfaktor: "Minderjähriger: Eltern haben Auskunftsrecht",
        kurzbeschreibung:
          "Bei Lukas (2,5 J.) haben Sandra und Kevin als Sorgeberechtigte automatisch Auskunftsrecht. Andere Rechtsgrundlage als bei Frau Kovac.",
      },
    ],
    karteikarte: {
      vorderseite:
        "Frau Kovacs Sohn Darko ruft an und will wissen, ob sie die Strümpfe angezogen hat. Darfst du antworten?",
      rueckseite:
        "Nein — nicht ohne Einwilligung von Frau Kovac. Schweigepflicht (§ 203 StGB) + DSGVO Art. 9 (Gesundheitsdaten = höchste Schutzstufe). Lösung: Frau Kovac fragen: \"Darf ich Darko erzählen wie es Ihnen geht?\" Bei Ja: erzählen. Bei Nein: \"Herr Kovac, fragen Sie bitte Ihre Mutter selbst.\" Einwilligung dokumentieren. Spektrum: Bauer (Betreuer = Auskunftsrecht), Lukas (Eltern = Sorgerecht). Faustregel: Erst Patientin fragen, dann reden.",
    },
  },
};

// ============================================================
// EXPORT — alle 15 Inline-Wissens-Bausteine
// ============================================================

export const CE02_KOVAC_AMBULANT_INLINE_WISSEN: ContentStep[] = [
  // Phase 1
  CE02_KOVAC_INLINE_01A_PNEUMONIE_COPD,
  CE02_KOVAC_INLINE_01B_PFLEGEPROZESS_SBAR,
  CE02_KOVAC_INLINE_01C_RISIKEN_UEBERBLICK,
  // Phase 2
  CE02_KOVAC_INLINE_02A_PNEUMONIE_ATEMBEOB,
  CE02_KOVAC_INLINE_02B_SCHLAF_PHYSIOLOGIE,
  CE02_KOVAC_INLINE_02C_HARNAUSSCHEIDUNG,
  CE02_KOVAC_INLINE_02D_VIRCHOW_TRIAS,
  CE02_KOVAC_INLINE_02E_KONTRAKTUR_GELENKE,
  // Phase 3
  CE02_KOVAC_INLINE_03A_SCHLAFHYGIENE,
  CE02_KOVAC_INLINE_03B_SMART_AMBULANT,
  CE02_KOVAC_INLINE_03C_MOTIVIEREND,
  // Phase 4
  CE02_KOVAC_INLINE_04A_LIPPENBREMSE,
  CE02_KOVAC_INLINE_04B_OBSTIPATION_TRINK,
  CE02_KOVAC_INLINE_04C_SCHWEIGEPFLICHT,
  // Phase 5
  CE02_KOVAC_INLINE_05A_EVALUATION_REGELKREIS,
];
