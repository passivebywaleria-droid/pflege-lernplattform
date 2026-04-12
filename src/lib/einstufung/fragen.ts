// Fragen-Pool für den Einstufungstest
// Achse 1: Sprachkompetenz Deutsch (allgemein + Fachsprache)
// Achse 2: Pflegefachliches Wissen
// 3 Schwierigkeitsstufen pro Achse, je 5+ Fragen

export type Achse = "sprache" | "fachwissen"
export type Schwierigkeit = 1 | 2 | 3

export interface EinstufungsFrage {
  id: string
  text: string
  optionen: { id: string; text: string }[]
  richtig: string // id der richtigen Option
  schwierigkeit: Schwierigkeit
  achse: Achse
  erklaerung: string // Wird nach Antwort gezeigt
}

// --- ACHSE 1: SPRACHKOMPETENZ ---

const sprachFragenLevel1: EinstufungsFrage[] = [
  {
    id: "sp-1-01",
    text: "Was bedeutet 'Dekubitus'?",
    optionen: [
      { id: "a", text: "Ein Medikament gegen Schmerzen" },
      { id: "b", text: "Eine Wunde durch zu langes Liegen" },
      { id: "c", text: "Eine Krankheit der Lunge" },
      { id: "d", text: "Ein Verband für den Arm" },
    ],
    richtig: "b",
    schwierigkeit: 1,
    achse: "sprache",
    erklaerung: "Ein Dekubitus ist ein Druckgeschwür, das durch zu langes Liegen oder Sitzen an einer Stelle entsteht.",
  },
  {
    id: "sp-1-02",
    text: "Welches Wort passt? 'Der Patient hat hohes ...'",
    optionen: [
      { id: "a", text: "Fieber" },
      { id: "b", text: "Blut" },
      { id: "c", text: "Wasser" },
      { id: "d", text: "Essen" },
    ],
    richtig: "a",
    schwierigkeit: 1,
    achse: "sprache",
    erklaerung: "'Hohes Fieber' ist ein häufiger Ausdruck in der Pflege. Fieber zeigt an, dass der Körper gegen eine Infektion kämpft.",
  },
  {
    id: "sp-1-03",
    text: "Was bedeutet 'Vitalzeichen'?",
    optionen: [
      { id: "a", text: "Die Kleidung des Patienten" },
      { id: "b", text: "Wichtige Körperwerte wie Puls und Blutdruck" },
      { id: "c", text: "Die Medikamente des Patienten" },
      { id: "d", text: "Die Zimmernummer im Krankenhaus" },
    ],
    richtig: "b",
    schwierigkeit: 1,
    achse: "sprache",
    erklaerung: "Vitalzeichen (auch: Vitalparameter) sind messbare Körperwerte wie Puls, Blutdruck, Temperatur und Atemfrequenz.",
  },
  {
    id: "sp-1-04",
    text: "Was bedeutet 'oral'?",
    optionen: [
      { id: "a", text: "Durch den Mund" },
      { id: "b", text: "Durch die Nase" },
      { id: "c", text: "Durch die Haut" },
      { id: "d", text: "Durch das Ohr" },
    ],
    richtig: "a",
    schwierigkeit: 1,
    achse: "sprache",
    erklaerung: "'Oral' bedeutet 'durch den Mund'. Beispiel: 'Das Medikament wird oral eingenommen' = man schluckt es.",
  },
  {
    id: "sp-1-05",
    text: "Was ist ein 'Pflegebericht'?",
    optionen: [
      { id: "a", text: "Ein Brief an die Familie" },
      { id: "b", text: "Eine schriftliche Aufzeichnung über die Pflege" },
      { id: "c", text: "Eine Rechnung vom Krankenhaus" },
      { id: "d", text: "Ein Vertrag mit dem Arzt" },
    ],
    richtig: "b",
    schwierigkeit: 1,
    achse: "sprache",
    erklaerung: "Ein Pflegebericht dokumentiert schriftlich, was bei der Pflege beobachtet und durchgeführt wurde.",
  },
]

const sprachFragenLevel2: EinstufungsFrage[] = [
  {
    id: "sp-2-01",
    text: "Was beschreibt der Begriff 'Aspiration'?",
    optionen: [
      { id: "a", text: "Einatmen von Fremdkörpern oder Flüssigkeiten in die Lunge" },
      { id: "b", text: "Ausatmen von verbrauchter Luft" },
      { id: "c", text: "Normale Atmung in Ruhe" },
      { id: "d", text: "Schnelles Atmen bei Anstrengung" },
    ],
    richtig: "a",
    schwierigkeit: 2,
    achse: "sprache",
    erklaerung: "Aspiration ist das Einatmen von Fremdkörpern (z.B. Nahrung, Flüssigkeit) in die Atemwege. Es kann zu einer Aspirationspneumonie führen.",
  },
  {
    id: "sp-2-02",
    text: "Was bedeutet 'Kontraktur'?",
    optionen: [
      { id: "a", text: "Dauerhafte Verkürzung von Muskeln oder Sehnen" },
      { id: "b", text: "Vorübergehende Muskelverspannung" },
      { id: "c", text: "Entzündung eines Gelenks" },
      { id: "d", text: "Bruch eines Knochens" },
    ],
    richtig: "a",
    schwierigkeit: 2,
    achse: "sprache",
    erklaerung: "Eine Kontraktur ist eine dauerhafte Verkürzung von Muskeln, Sehnen oder Bändern, die die Beweglichkeit eines Gelenks einschränkt.",
  },
  {
    id: "sp-2-03",
    text: "Welcher Satz ist fachlich korrekt formuliert?",
    optionen: [
      { id: "a", text: "Der Patient hat Wasser in den Beinen." },
      { id: "b", text: "Der Patient weist bilaterale Beinödeme auf." },
      { id: "c", text: "Die Beine vom Patient sind dick." },
      { id: "d", text: "Der Patient hat geschwollene Füße bekommen." },
    ],
    richtig: "b",
    schwierigkeit: 2,
    achse: "sprache",
    erklaerung: "'Bilaterale Beinödeme' ist die korrekte Fachsprache. Im Alltag sagt man 'Wasser in den Beinen', im Pflegebericht nutzt man Fachbegriffe.",
  },
  {
    id: "sp-2-04",
    text: "Was bedeutet 'subkutan'?",
    optionen: [
      { id: "a", text: "In den Muskel" },
      { id: "b", text: "In die Vene" },
      { id: "c", text: "Unter die Haut" },
      { id: "d", text: "Auf die Haut" },
    ],
    richtig: "c",
    schwierigkeit: 2,
    achse: "sprache",
    erklaerung: "'Subkutan' (s.c.) bedeutet 'unter die Haut'. Z.B. wird Insulin oft subkutan gespritzt.",
  },
  {
    id: "sp-2-05",
    text: "Was bedeutet die Abkürzung 'RR' in der Pflege?",
    optionen: [
      { id: "a", text: "Riva-Rocci (Blutdruck)" },
      { id: "b", text: "Ruhe-Rhythmus (Schlaf)" },
      { id: "c", text: "Reha-Report (Bericht)" },
      { id: "d", text: "Risiko-Register (Dokumentation)" },
    ],
    richtig: "a",
    schwierigkeit: 2,
    achse: "sprache",
    erklaerung: "RR steht für Riva-Rocci und bezeichnet die Blutdruckmessung. Benannt nach dem Erfinder des Blutdruckmessgeräts.",
  },
]

const sprachFragenLevel3: EinstufungsFrage[] = [
  {
    id: "sp-3-01",
    text: "Welche Formulierung gehört in einen Pflegebericht?",
    optionen: [
      { id: "a", text: "Herr M. war heute total schlecht drauf und wollte nichts essen." },
      { id: "b", text: "Herr M. äußerte Appetitlosigkeit. Nahrungsaufnahme zum Mittagessen verweigert. Flüssigkeitszufuhr ca. 200ml." },
      { id: "c", text: "Patient isst wieder mal nichts. Habe ihm gesagt er soll was essen." },
      { id: "d", text: "Herr M. hat keinen Bock auf Essen, ich konnte ihn nicht überreden." },
    ],
    richtig: "b",
    schwierigkeit: 3,
    achse: "sprache",
    erklaerung: "Im Pflegebericht wird sachlich, wertfrei und mit Fachbegriffen dokumentiert. Mengenangaben und beobachtbares Verhalten werden beschrieben.",
  },
  {
    id: "sp-3-02",
    text: "Was unterscheidet 'Exsikkose' von 'Dehydratation'?",
    optionen: [
      { id: "a", text: "Beides ist identisch" },
      { id: "b", text: "Exsikkose ist der klinische Befund, Dehydratation der pathophysiologische Prozess" },
      { id: "c", text: "Exsikkose betrifft nur alte Menschen" },
      { id: "d", text: "Dehydratation ist schwerer als Exsikkose" },
    ],
    richtig: "b",
    schwierigkeit: 3,
    achse: "sprache",
    erklaerung: "Dehydratation beschreibt den Prozess des Wasserverlusts, Exsikkose die klinisch sichtbare Austrocknung des Körpers (trockene Haut, stehende Hautfalten).",
  },
  {
    id: "sp-3-03",
    text: "Was bedeutet 'ABEDL' im pflegerischen Kontext?",
    optionen: [
      { id: "a", text: "Allgemeine Behandlungs- und Ernährungs-Dokumentations-Leitlinie" },
      { id: "b", text: "Aktivitäten, Beziehungen und existenzielle Erfahrungen des Lebens" },
      { id: "c", text: "Ärztliche Begutachtung elementarer Diagnostik-Leistungen" },
      { id: "d", text: "Ambulante Betreuung durch externe Dienstleister" },
    ],
    richtig: "b",
    schwierigkeit: 3,
    achse: "sprache",
    erklaerung: "ABEDL steht für 'Aktivitäten, Beziehungen und existenzielle Erfahrungen des Lebens' nach Krohwinkel. Es ist ein Pflegemodell mit 13 Bereichen.",
  },
  {
    id: "sp-3-04",
    text: "Ordnen Sie zu: 'Der Patient zeigt eine Cheyne-Stokes-Atmung.' Was bedeutet das?",
    optionen: [
      { id: "a", text: "Regelmäßige, tiefe Atmung" },
      { id: "b", text: "Periodisch an- und abschwellende Atemtiefe mit Atempausen" },
      { id: "c", text: "Schnelle, flache Atmung bei Aufregung" },
      { id: "d", text: "Atmung nur durch den Mund" },
    ],
    richtig: "b",
    schwierigkeit: 3,
    achse: "sprache",
    erklaerung: "Die Cheyne-Stokes-Atmung ist eine pathologische Atemform mit periodisch an- und abschwellender Atemtiefe, unterbrochen von Atempausen. Sie kann auf schwere Herzinsuffizienz oder Hirnschädigungen hindeuten.",
  },
  {
    id: "sp-3-05",
    text: "Was beschreibt der Fachbegriff 'Nosokomialinfektion'?",
    optionen: [
      { id: "a", text: "Eine Infektion, die im Krankenhaus erworben wurde" },
      { id: "b", text: "Eine Infektion der Nase" },
      { id: "c", text: "Eine angeborene Infektion" },
      { id: "d", text: "Eine Infektion durch Lebensmittel" },
    ],
    richtig: "a",
    schwierigkeit: 3,
    achse: "sprache",
    erklaerung: "Eine Nosokomialinfektion (von griech. nosokomeion = Krankenhaus) ist eine Infektion, die im Zusammenhang mit einer medizinischen Maßnahme erworben wurde.",
  },
]

// --- ACHSE 2: PFLEGEFACHLICHES WISSEN ---

const fachwissenFragenLevel1: EinstufungsFrage[] = [
  {
    id: "fw-1-01",
    text: "Wie oft sollte ein bettlägeriger Patient mindestens umgelagert werden?",
    optionen: [
      { id: "a", text: "Einmal am Tag" },
      { id: "b", text: "Alle 2 Stunden" },
      { id: "c", text: "Einmal pro Woche" },
      { id: "d", text: "Nur wenn er Schmerzen hat" },
    ],
    richtig: "b",
    schwierigkeit: 1,
    achse: "fachwissen",
    erklaerung: "Bettlägerige Patienten sollten mindestens alle 2 Stunden umgelagert werden, um einen Dekubitus zu verhindern. Der genaue Zeitraum hängt vom individuellen Risiko ab.",
  },
  {
    id: "fw-1-02",
    text: "Was gehört zu den Vitalzeichen?",
    optionen: [
      { id: "a", text: "Puls, Blutdruck, Temperatur, Atmung" },
      { id: "b", text: "Gewicht, Größe, BMI" },
      { id: "c", text: "Blutgruppe, Rhesusfaktor" },
      { id: "d", text: "Name, Alter, Geschlecht" },
    ],
    richtig: "a",
    schwierigkeit: 1,
    achse: "fachwissen",
    erklaerung: "Die klassischen Vitalzeichen sind: Puls (Herzfrequenz), Blutdruck, Körpertemperatur und Atemfrequenz.",
  },
  {
    id: "fw-1-03",
    text: "Warum ist Händedesinfektion in der Pflege wichtig?",
    optionen: [
      { id: "a", text: "Damit die Hände gut riechen" },
      { id: "b", text: "Um die Übertragung von Keimen zu verhindern" },
      { id: "c", text: "Weil es Vorschrift ist, aber keinen echten Nutzen hat" },
      { id: "d", text: "Nur vor dem Essen nötig" },
    ],
    richtig: "b",
    schwierigkeit: 1,
    achse: "fachwissen",
    erklaerung: "Händedesinfektion ist die wichtigste Maßnahme zur Vermeidung von Infektionsübertragungen (nosokomialen Infektionen) im Gesundheitswesen.",
  },
  {
    id: "fw-1-04",
    text: "Was sollte eine Pflegekraft tun, wenn ein Patient stürzt?",
    optionen: [
      { id: "a", text: "Sofort aufheben und ins Bett bringen" },
      { id: "b", text: "Erst Verletzungen prüfen, dann ggf. Arzt rufen und dokumentieren" },
      { id: "c", text: "Nichts tun, der Patient steht alleine auf" },
      { id: "d", text: "Nur den Angehörigen Bescheid sagen" },
    ],
    richtig: "b",
    schwierigkeit: 1,
    achse: "fachwissen",
    erklaerung: "Nach einem Sturz: Erst den Zustand prüfen (Bewusstsein, Verletzungen), dann je nach Befund handeln, Arzt informieren und den Sturz dokumentieren (Sturzprotokoll).",
  },
  {
    id: "fw-1-05",
    text: "Was bedeutet 'Prophylaxe' in der Pflege?",
    optionen: [
      { id: "a", text: "Behandlung einer Krankheit" },
      { id: "b", text: "Vorbeugende Maßnahmen gegen Krankheiten" },
      { id: "c", text: "Nachsorge nach einer Operation" },
      { id: "d", text: "Diagnose einer Erkrankung" },
    ],
    richtig: "b",
    schwierigkeit: 1,
    achse: "fachwissen",
    erklaerung: "Prophylaxe (griech. 'Vorbeugung') umfasst alle Maßnahmen, die Krankheiten oder Komplikationen verhindern sollen, z.B. Dekubitusprophylaxe, Thromboseprophylaxe.",
  },
]

const fachwissenFragenLevel2: EinstufungsFrage[] = [
  {
    id: "fw-2-01",
    text: "Welche Prophylaxe-Maßnahme hilft gegen Thrombose?",
    optionen: [
      { id: "a", text: "Bettruhe und Ruhigstellung" },
      { id: "b", text: "Kompressionsstrümpfe und Bewegungsübungen" },
      { id: "c", text: "Kalte Wickel auf die Beine" },
      { id: "d", text: "Hochkalorische Ernährung" },
    ],
    richtig: "b",
    schwierigkeit: 2,
    achse: "fachwissen",
    erklaerung: "Thromboseprophylaxe umfasst: Frühmobilisation, Bewegungsübungen, Kompressionsstrümpfe (MTS/ATS) und ggf. medikamentöse Antikoagulation.",
  },
  {
    id: "fw-2-02",
    text: "Welches Dekubitus-Stadium zeigt eine offene Wunde bis auf den Knochen?",
    optionen: [
      { id: "a", text: "Stadium I" },
      { id: "b", text: "Stadium II" },
      { id: "c", text: "Stadium III" },
      { id: "d", text: "Stadium IV" },
    ],
    richtig: "d",
    schwierigkeit: 2,
    achse: "fachwissen",
    erklaerung: "Dekubitus Stadium IV: Vollständiger Gewebeverlust mit freiliegenden Knochen, Sehnen oder Muskeln. Stadium I zeigt nur eine nicht wegdrückbare Rötung.",
  },
  {
    id: "fw-2-03",
    text: "Was ist der erste Schritt im Pflegeprozess nach Fiechter/Meier?",
    optionen: [
      { id: "a", text: "Pflegemaßnahmen durchführen" },
      { id: "b", text: "Informationen sammeln (Assessment)" },
      { id: "c", text: "Pflegeziele formulieren" },
      { id: "d", text: "Evaluation durchführen" },
    ],
    richtig: "b",
    schwierigkeit: 2,
    achse: "fachwissen",
    erklaerung: "Der Pflegeprozess beginnt mit der Informationssammlung (Assessment): Anamnese, Beobachtung, Befragung. Darauf folgen Erkennen von Problemen, Ziele setzen, Planen, Durchführen und Evaluieren.",
  },
  {
    id: "fw-2-04",
    text: "Wann darf eine Pflegekraft KEINE Medikamente verabreichen?",
    optionen: [
      { id: "a", text: "Wenn der Arzt es mündlich angeordnet hat" },
      { id: "b", text: "Wenn keine schriftliche ärztliche Anordnung vorliegt" },
      { id: "c", text: "Wenn die Packung schon geöffnet ist" },
      { id: "d", text: "Wenn der Patient das Medikament nicht kennt" },
    ],
    richtig: "b",
    schwierigkeit: 2,
    achse: "fachwissen",
    erklaerung: "Medikamente dürfen nur mit schriftlicher ärztlicher Anordnung verabreicht werden. Die 6-R-Regel gilt: Richtiger Patient, Richtiges Medikament, Richtige Dosis, Richtiger Zeitpunkt, Richtige Applikationsart, Richtige Dokumentation.",
  },
  {
    id: "fw-2-05",
    text: "Was ist eine Pneumonieprophylaxe-Maßnahme?",
    optionen: [
      { id: "a", text: "Flachlagerung des Oberkörpers" },
      { id: "b", text: "Atemübungen und Oberkörperhochlagerung" },
      { id: "c", text: "Fenster geschlossen halten" },
      { id: "d", text: "Bettruhe verordnen" },
    ],
    richtig: "b",
    schwierigkeit: 2,
    achse: "fachwissen",
    erklaerung: "Pneumonieprophylaxe umfasst: Atemübungen (V.A.T.I.-Lagerung), Oberkörperhochlagerung, Frühmobilisation, ausreichend Flüssigkeit und regelmäßiges Lüften.",
  },
]

const fachwissenFragenLevel3: EinstufungsFrage[] = [
  {
    id: "fw-3-01",
    text: "Ein Patient mit Herzinsuffizienz (NYHA III) klagt über zunehmende Dyspnoe. Welche pflegerische Sofortmaßnahme hat Priorität?",
    optionen: [
      { id: "a", text: "Flachlagerung und Beine hochlegen" },
      { id: "b", text: "Oberkörperhochlagerung und Beine tief" },
      { id: "c", text: "Seitenlagerung links" },
      { id: "d", text: "Bauchlage zur besseren Belüftung" },
    ],
    richtig: "b",
    schwierigkeit: 3,
    achse: "fachwissen",
    erklaerung: "Bei Herzinsuffizienz mit Dyspnoe: Oberkörperhochlagerung (Herzbettlagerung) entlastet das Herz. Beine tief lagern reduziert den venösen Rückstrom und damit die Vorlast.",
  },
  {
    id: "fw-3-02",
    text: "Bei der Versorgung eines Patienten mit MRSA — welche Hygienemaßnahme ist korrekt?",
    optionen: [
      { id: "a", text: "Normale Händedesinfektion reicht aus" },
      { id: "b", text: "Einzelzimmer, Schutzkittel, Handschuhe, Mund-Nasen-Schutz bei engem Kontakt" },
      { id: "c", text: "Nur Handschuhe tragen" },
      { id: "d", text: "Patient darf die Station nicht verlassen" },
    ],
    richtig: "b",
    schwierigkeit: 3,
    achse: "fachwissen",
    erklaerung: "MRSA-Management: Isolierung im Einzelzimmer, Barrieremaßnahmen (Kittel, Handschuhe, MNS), Händedesinfektion nach Kontakt, Dekolonisierungsmaßnahmen gemäß KRINKO-Empfehlung.",
  },
  {
    id: "fw-3-03",
    text: "Ein Patient mit Diabetes mellitus Typ 2 zeigt folgende Symptome: Verwirrtheit, Schwitzen, Zittern, Tachykardie. Was vermuten Sie?",
    optionen: [
      { id: "a", text: "Hyperglykämie" },
      { id: "b", text: "Hypoglykämie" },
      { id: "c", text: "Diabetische Ketoazidose" },
      { id: "d", text: "Normale Reaktion auf Insulin" },
    ],
    richtig: "b",
    schwierigkeit: 3,
    achse: "fachwissen",
    erklaerung: "Hypoglykämie-Symptome: Schwitzen, Zittern, Tachykardie, Verwirrtheit, Heißhunger. Sofortmaßnahme: Schnell resorbierbare Kohlenhydrate (Traubenzucker, Saft). Bei Bewusstlosigkeit: Glucagon i.m. oder Glucose i.v.",
  },
  {
    id: "fw-3-04",
    text: "Was ist das Ziel der Basalen Stimulation nach Bienstein/Fröhlich?",
    optionen: [
      { id: "a", text: "Muskelaufbau durch gezielte Gymnastik" },
      { id: "b", text: "Förderung der Wahrnehmung, Kommunikation und Bewegung bei wahrnehmungsbeeinträchtigten Menschen" },
      { id: "c", text: "Schmerztherapie durch Berührung" },
      { id: "d", text: "Beschleunigung der Wundheilung" },
    ],
    richtig: "b",
    schwierigkeit: 3,
    achse: "fachwissen",
    erklaerung: "Basale Stimulation fördert über somatische, vestibuläre und vibratorische Angebote die Wahrnehmung und Kommunikation bei Menschen mit eingeschränkter Wahrnehmung (z.B. Koma, Demenz).",
  },
  {
    id: "fw-3-05",
    text: "Im Rahmen der Sturzprophylaxe: Welches Assessment-Instrument wird zur Einschätzung des Sturzrisikos verwendet?",
    optionen: [
      { id: "a", text: "Glasgow Coma Scale" },
      { id: "b", text: "Morse Fall Scale" },
      { id: "c", text: "Braden-Skala" },
      { id: "d", text: "Norton-Skala" },
    ],
    richtig: "b",
    schwierigkeit: 3,
    achse: "fachwissen",
    erklaerung: "Die Morse Fall Scale erfasst das Sturzrisiko. Die Braden-/Norton-Skala erfasst das Dekubitusrisiko. Die Glasgow Coma Scale misst die Bewusstseinslage.",
  },
]

// --- Export: Alle Fragen gebündelt ---

export const alleFragen: EinstufungsFrage[] = [
  ...sprachFragenLevel1,
  ...sprachFragenLevel2,
  ...sprachFragenLevel3,
  ...fachwissenFragenLevel1,
  ...fachwissenFragenLevel2,
  ...fachwissenFragenLevel3,
]

export function getFragenNachAchseUndLevel(
  achse: Achse,
  schwierigkeit: Schwierigkeit
): EinstufungsFrage[] {
  return alleFragen.filter(
    (f) => f.achse === achse && f.schwierigkeit === schwierigkeit
  )
}

export function getZufaelligeFrage(
  achse: Achse,
  schwierigkeit: Schwierigkeit,
  bereitsGestellt: string[]
): EinstufungsFrage | null {
  const verfuegbar = getFragenNachAchseUndLevel(achse, schwierigkeit).filter(
    (f) => !bereitsGestellt.includes(f.id)
  )
  if (verfuegbar.length === 0) return null
  return verfuegbar[Math.floor(Math.random() * verfuegbar.length)]
}
