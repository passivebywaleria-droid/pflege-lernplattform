#!/usr/bin/env python3
"""
Fix umlaute in content/le-06/steps-s*.ts files.

Strategie: Whitelist-basierte Ersetzung. Nur bekannte deutsche Wörter mit
ae/oe/ue/Ae/Oe/Ue/ss → ä/ö/ü/Ä/Ö/Ü/ß.

WICHTIG:
- Nur innerhalb von String-Literalen (zwischen " ... ") ersetzen
- NICHT ersetzen: Keys, Variablen, stepType-Werte, JSX etc.
- Whole-Word-Replacement (Wortgrenzen)
- "Masse"/"Massen" bleibt unverändert (Kinästhetik-Fachbegriff, mehrdeutig)
- "Paediatrie" etc. bleibt (falsche Umlaut-Annahme)
"""

import re
import sys

# Whitelist: direkte Wort-zu-Wort-Ersetzungen
# (klein- und Groß-Version wenn sie sich unterscheiden)
REPLACEMENTS = [
    # Maßnahmen (Pflichtbegriff)
    ("Massnahme", "Maßnahme"),
    ("Massnahmen", "Maßnahmen"),
    ("Sofortmassnahmen", "Sofortmaßnahmen"),
    ("Sofortmassnahme", "Sofortmaßnahme"),
    ("Gegenmassnahme", "Gegenmaßnahme"),
    ("Gegenmassnahmen", "Gegenmaßnahmen"),
    ("Routinemassnahmen", "Routinemaßnahmen"),
    ("Erstmassnahme", "Erstmaßnahme"),
    ("Erstmassnahmen", "Erstmaßnahmen"),

    # Ausmaß / regelmäßig
    ("Ausmass", "Ausmaß"),
    ("regelmaessig", "regelmäßig"),
    ("regelmässig", "regelmäßig"),

    # Größe
    ("Groesse", "Größe"),
    ("groessten", "größten"),
    ("Koerpergroesse", "Körpergröße"),

    # für / Für / dafür
    ("fuer", "für"),
    ("Fuer", "Für"),
    ("dafuer", "dafür"),
    ("wofuer", "wofür"),

    # über / Über
    ("ueber", "über"),
    ("Ueber", "Über"),
    ("Ueberblick", "Überblick"),
    ("Ueberlappungen", "Überlappungen"),
    ("ueberfluessige", "überflüssige"),

    # Verben: müssen/können/dürfen
    ("muss", "muss"),  # unverändert
    ("muessen", "müssen"),
    ("Muessen", "Müssen"),
    ("musst", "musst"),  # unverändert
    ("Muss", "Muss"),    # unverändert
    ("koennen", "können"),
    ("Koennen", "Können"),

    # Körper / körper-
    ("Koerper", "Körper"),
    ("koerper", "körper"),
    ("Oberkoerper", "Oberkörper"),
    ("Koerperliche", "Körperliche"),
    ("koerperliche", "körperliche"),
    ("koerperlichen", "körperlichen"),
    ("Koerperposition", "Körperposition"),
    ("Koerperkontakt", "Körperkontakt"),
    ("Koerperteile", "Körperteile"),
    ("Koerpercheck", "Körpercheck"),
    ("Koerperumriss", "Körperumriss"),

    # Rücken / rücken-
    ("Ruecken", "Rücken"),
    ("ruecken", "rücken"),
    ("Rueckenlage", "Rückenlage"),
    ("rueckenlage", "rückenlage"),
    ("Rueckenschmerzen", "Rückenschmerzen"),
    ("Rueckenschonendes", "Rückenschonendes"),
    ("rueckenschonendes", "rückenschonendes"),
    ("Rueckfragen", "Rückfragen"),
    ("Zurueck", "Zurück"),
    ("zuruecksetzen", "zurücksetzen"),

    # Hüft / Höhe
    ("Hueft", "Hüft"),
    ("Huefte", "Hüfte"),
    ("Hueftoperation", "Hüftoperation"),
    ("Huefthoehe", "Hüfthöhe"),
    ("Hoehe", "Höhe"),
    ("Betthoehe", "Betthöhe"),
    ("Arbeitshoehe", "Arbeitshöhe"),
    ("Schulterhoehe", "Schulterhöhe"),
    ("erhoehen", "erhöhen"),
    ("erhoeht", "erhöht"),
    ("erhoehte", "erhöhte"),
    ("erhoehter", "erhöhter"),
    ("erhoehtes", "erhöhtes"),
    ("Oberkoerperhoch", "Oberkörperhoch"),
    ("hoechste", "höchste"),
    ("hoechsten", "höchsten"),

    # Frühmobilisation, Frühere
    ("Fruehmobilisation", "Frühmobilisation"),
    ("Fruehere", "Frühere"),
    ("frueher", "früher"),

    # Fuß, Fuß-
    ("Fuesse", "Füße"),
    ("Fuessen", "Füßen"),
    ("Fuss", "Fuß"),
    ("Spitzfuss", "Spitzfuß"),
    ("Spitzfussprophylaxe", "Spitzfußprophylaxe"),
    ("Antispitzfuss", "Antispitzfuß"),
    ("Fussgymnastik", "Fußgymnastik"),

    # Flüssigkeit
    ("Fluessigkeit", "Flüssigkeit"),
    ("Fluessigkeitszufuhr", "Flüssigkeitszufuhr"),

    # Lücken / Schlüssel
    ("Luecken", "Lücken"),
    ("Lueckentext", "Lückentext"),
    ("Schluessel", "Schlüssel"),
    ("Schluesselkompetenz", "Schlüsselkompetenz"),
    ("Schluesselbegriffe", "Schlüsselbegriffe"),

    # Fälle / Pflegefälle
    ("Faelle", "Fälle"),
    ("Pneumoniefaelle", "Pneumoniefälle"),
    ("faellt", "fällt"),

    # -bündel / buendeln
    ("Buendel", "Bündel"),
    ("buendeln", "bündeln"),

    # Äußere
    ("Aerztin", "Ärztin"),
    ("Aerzte", "Ärzte"),
    ("Aerzt", "Ärzt"),  # fallback

    # Ältere / altersabhängige
    ("Altersabhaengige", "Altersabhängige"),
    ("Abhaengigkeit", "Abhängigkeit"),
    ("Angehoerige", "Angehörige"),

    # Prädilektion
    ("Praedilektion", "Prädilektion"),
    ("Praedilektionsstelle", "Prädilektionsstelle"),
    ("Praedilektionsstellen", "Prädilektionsstellen"),

    # Röntgen / Rötung
    ("Roetung", "Rötung"),
    ("gerotet", "gerötet"),

    # Schädigung
    ("Schaedigung", "Schädigung"),
    ("geschaedigt", "geschädigt"),
    ("geschaedigte", "geschädigte"),

    # Nährstoff / Ernährung
    ("Naehrstoff", "Nährstoff"),
    ("Naehrstoffe", "Nährstoffe"),
    ("Ernaehrung", "Ernährung"),
    ("Ernaehrungsgewohnheiten", "Ernährungsgewohnheiten"),
    ("Mangelernaehrung", "Mangelernährung"),

    # Häufig
    ("haeufig", "häufig"),
    ("Haeufig", "Häufig"),
    ("haeufige", "häufige"),
    ("haeufigen", "häufigen"),
    ("haeufiger", "häufiger"),
    ("haeufigere", "häufigere"),
    ("haeufigsten", "häufigsten"),
    ("hauptsaechlichen", "hauptsächlichen"),

    # Tücher / Türschlagen
    ("Tuecher", "Tücher"),
    ("Tuerschlagen", "Türschlagen"),

    # Überprüf / prüf
    ("Ueberpruef", "Überprüf"),
    ("Pruefe", "Prüfe"),
    ("Pruefung", "Prüfung"),
    ("Pruefungs", "Prüfungs"),
    ("pruefe", "prüfe"),
    ("pruefen", "prüfen"),
    ("gepruef", "geprüf"),

    # mögl. / möchte
    ("moegl", "mögl"),  # Präfix
    ("moeglich", "möglich"),
    ("moegliche", "mögliche"),
    ("Moegliche", "Mögliche"),
    ("moechte", "möchte"),

    # mühsam
    ("Muehsam", "Mühsam"),
    ("muehsam", "mühsam"),

    # lässt / ließ
    ("Laesst", "Lässt"),
    ("laesst", "lässt"),
    ("laessig", "lässig"),
    ("lassen", "lassen"),  # unverändert
    ("Lassen", "Lassen"),  # unverändert
    ("loslassen", "loslassen"),  # unverändert
    ("entlassen", "entlassen"),  # unverändert

    # fühlt / Gefühl
    ("Fuehl", "Fühl"),
    ("fuehlt", "fühlt"),
    ("Fuehre", "Führe"),
    ("fuehre", "führe"),
    ("Fuehrt", "Führt"),
    ("fuehrt", "führt"),
    ("fuehren", "führen"),
    ("durchlaeuft", "durchläuft"),
    ("Bewegungsfuehrung", "Bewegungsführung"),
    ("Gefuehle", "Gefühle"),
    ("Ausfuehrung", "Ausführung"),
    ("durchgefuehrt", "durchgeführt"),

    # Erklär / zähl / Gespräch
    ("Erklaer", "Erklär"),
    ("erklaer", "erklär"),
    ("Zaehl", "Zähl"),
    ("zaehl", "zähl"),
    ("Schaetze", "Schätze"),
    ("schaetzen", "schätzen"),
    ("einschaetzen", "einschätzen"),
    ("Risikoeinschaetzung", "Risikoeinschätzung"),
    ("Gespraech", "Gespräch"),
    ("Pausengespraech", "Pausengespräch"),

    # Wäge / Ergänz
    ("Waehle", "Wähle"),
    ("waehle", "wähle"),
    ("Ergaenze", "Ergänze"),

    # Stärke / Schwäche / Muskelschwäche
    ("Staerk", "Stärk"),
    ("staerk", "stärk"),
    ("Schwaeche", "Schwäche"),
    ("Muskelschwaeche", "Muskelschwäche"),

    # Stürz / stürzt / gestürzt
    ("Stuerz", "Stürz"),
    ("stuerz", "stürz"),
    ("stuerzt", "stürzt"),
    ("stuerzen", "stürzen"),
    ("gestuerzt", "gestürzt"),
    ("Beinahestuerze", "Beinahestürze"),
    ("Beinahestuerzen", "Beinahestürzen"),
    ("stuerzig", "stürzig"),

    # Drück / Druck
    ("Drueck", "Drück"),
    ("drueck", "drück"),
    ("drueckt", "drückt"),
    ("druecktst", "drückst"),  # Tippfehler im Original → drückst
    ("Wegdruecken", "Wegdrücken"),
    ("wegdrueckbare", "wegdrückbare"),
    ("unterdruecken", "unterdrücken"),
    ("Eindruecke", "Eindrücke"),

    # Läng
    ("Laeng", "Läng"),
    ("Laengerer", "Längerer"),
    ("Verknuepfung", "Verknüpfung"),
    ("verknuepfen", "verknüpfen"),

    # Übung
    ("Uebung", "Übung"),
    ("Uebungen", "Übungen"),
    ("Atemuebung", "Atemübung"),
    ("Atemuebungen", "Atemübungen"),
    ("Bewegungsuebung", "Bewegungsübung"),
    ("Bewegungsuebungen", "Bewegungsübungen"),

    # Dreißig
    ("Dreissig", "Dreißig"),
    ("dreissig", "dreißig"),

    # Ältere (gibt es in den Listen gar nicht) — übrig
    ("Aeltere", "Ältere"),
    ("aelter", "älter"),

    # Näh (Nähe vs. nah)
    ("Naeh", "Näh"),  # wird nur als Präfix verwendet, s.o.

    # weiß / heißt
    ("weiss", "weiß"),
    ("Weiss", "Weiß"),
    ("weisst", "weißt"),
    ("heisst", "heißt"),

    # Messung / misst → bleibt wie es ist (kein Umlaut!)
    # Nährstoff bereits oben

    # Zustand / ändert
    ("aendern", "ändern"),
    ("veraendern", "verändern"),
    ("Veraenderbar", "Veränderbar"),
    ("veraenderbar", "veränderbar"),
    ("veraendert", "verändert"),
    ("Veraenderungen", "Veränderungen"),
    ("Hautveraenderungen", "Hautveränderungen"),
    ("Schlafveraenderung", "Schlafveränderung"),
    ("Schlafveraenderungen", "Schlafveränderungen"),
    ("aendere", "ändere"),
    ("aenderst", "änderst"),
    ("Zustaende", "Zustände"),

    # Aktivität / Mobilität / Fähigkeit
    ("Aktivitaet", "Aktivität"),
    ("aktivitaet", "aktivität"),
    ("Aktivitaeten", "Aktivitäten"),
    ("Tagesaktivitaet", "Tagesaktivität"),
    ("Nachtaktivitaet", "Nachtaktivität"),
    ("Mobilitaet", "Mobilität"),
    ("mobilitaet", "mobilität"),
    ("Immobilitaet", "Immobilität"),
    ("Faehigkeit", "Fähigkeit"),
    ("Gehfaehigkeit", "Gehfähigkeit"),
    ("Prioritaet", "Priorität"),
    ("Qualitaetssicherung", "Qualitätssicherung"),

    # Kinästhetik
    ("kinaesthetik", "kinästhetik"),
    ("Kinaesthetik", "Kinästhetik"),

    # Nässer / nässt — hier nicht gewünscht ("Nasser" = "nasser")
    # "Nasser" steht in Original als Adjektiv → bleibt.

    # Selbständig / selbst
    ("Selbststaendigkeit", "Selbstständigkeit"),
    ("selbststaendig", "selbstständig"),
    ("Selbstaendig", "Selbständig"),

    # Sehstörungen / Schlafstörungen
    ("Sehstoerungen", "Sehstörungen"),
    ("Sehstoerung", "Sehstörung"),
    ("Schlafstoerungen", "Schlafstörungen"),
    ("Schlafstoerung", "Schlafstörung"),
    ("Schluckstoerung", "Schluckstörung"),
    ("Stoerung", "Störung"),
    ("stoeren", "stören"),
    ("stoert", "stört"),
    ("gestoert", "gestört"),
    ("gestoerten", "gestörten"),
    ("Stoerfaktoren", "Störfaktoren"),
    ("Bewegungsfoerderung", "Bewegungsförderung"),
    ("foerdern", "fördern"),
    ("foerdert", "fördert"),
    ("schlaffoerdernd", "schlaffördernd"),
    ("Schlaffoerderungsplan", "Schlafförderungsplan"),
    ("durchblutungsfoerdernden", "durchblutungsfördernden"),
    ("Loesung", "Lösung"),
    ("Loesungsorientiert", "Lösungsorientiert"),
    ("Loese", "Löse"),
    ("loesen", "lösen"),
    ("Sekretloesung", "Sekretlösung"),
    ("Abkuerzung", "Abkürzung"),
    ("Verkuerzung", "Verkürzung"),
    ("kuerzere", "kürzere"),
    ("naechstes", "nächstes"),
    ("naechtliche", "nächtliche"),
    ("Naechtliche", "Nächtliche"),

    # Räume / Rätsel
    ("Raetsel", "Rätsel"),
    ("Kreuzwortraetsel", "Kreuzworträtsel"),

    # Schüler / Schülerin
    ("Schuelerin", "Schülerin"),
    ("Schueler", "Schüler"),

    # Begründung / Aufklärung
    ("Begruendung", "Begründung"),
    ("Aufklaerung", "Aufklärung"),
    ("aufklaeren", "aufklären"),
    ("klaeren", "klären"),
    ("abgeklaert", "abgeklärt"),

    # Geräusch / Lärm
    ("Laerm", "Lärm"),
    ("Geraeuschkulisse", "Geräuschkulisse"),

    # Geräte / Sekret (kein Umlaut nötig)
    # Knöchel / Knochen
    ("Knoechel", "Knöchel"),
    ("Knochenvorspruengen", "Knochenvorsprüngen"),

    # Gefäß / Gefässwand
    ("Gefaesswand", "Gefäßwand"),

    # Vollständig
    ("Vollstaendig", "Vollständig"),
    ("Vollstaendiger", "Vollständiger"),
    ("Vollstaendiges", "Vollständiges"),
    ("vollstaendig", "vollständig"),
    ("vollstaendigen", "vollständigen"),
    ("vollstaendiges", "vollständiges"),
    ("Unvollstaendig", "Unvollständig"),
    ("Unvollstaendige", "Unvollständige"),
    ("unvollstaendig", "unvollständig"),

    # Gefährdet
    ("Gefaehrdete", "Gefährdete"),
    ("gefaehrdet", "gefährdet"),
    ("gefaehrdete", "gefährdete"),
    ("gefaehrdeten", "gefährdeten"),
    ("Gefaehrdete", "Gefährdete"),
    ("gefaehrlich", "gefährlich"),

    # Oberflächlich
    ("oberflaechliche", "oberflächliche"),

    # Schulterblatt / Steißbein
    ("Schulterblaetter", "Schulterblätter"),
    ("Steissbein", "Steißbein"),
    ("Einschnuerung", "Einschnürung"),

    # Kräfte / Scher-
    ("Scherkraefte", "Scherkräfte"),
    ("Scherkraeften", "Scherkräften"),
    ("Hebelkraefte", "Hebelkräfte"),
    ("kraeftig", "kräftig"),
    ("Pflegekraefte", "Pflegekräfte"),

    # Wäre / währte
    ("waere", "wäre"),
    ("definitionsgemaess", "definitionsgemäß"),

    # Gefühl / Gedächtnis
    ("Gedaechtnisbildung", "Gedächtnisbildung"),

    # Müdigkeit / müde / unnötig / völlig
    ("muede", "müde"),
    ("Muedigkeit", "Müdigkeit"),
    ("unnoetig", "unnötig"),
    ("noetig", "nötig"),
    ("voellig", "völlig"),

    # Händehygiene / Hände
    ("Haendehygiene", "Händehygiene"),
    ("Haendedesinfektion", "Händedesinfektion"),

    # Föhnen / Kühles / Kälte
    ("Foehnen", "Föhnen"),
    ("Kuehles", "Kühles"),
    ("Kaelte", "Kälte"),

    # Häng / halt / Nasser
    ("haengen", "hängen"),
    ("haengt", "hängt"),
    ("haelt", "hält"),

    # Vorsätze / Ansätze
    ("Vorsaetze", "Vorsätze"),
    ("Ansaetze", "Ansätze"),
    ("Einsaetze", "Einsätze"),

    # Räum / Einträge
    ("Eintraege", "Einträge"),

    # Druckgeschwür
    ("Druckgeschwuer", "Druckgeschwür"),

    # Naessen / Nässe
    # (nicht in Wortliste, Skip)

    # Fühlst / fehlst (Fehler im Original: "faehlst" → "fehlst")
    ("faehlst", "fehlst"),

    # Ursächlich / ursächlich
    ("ursaechlich", "ursächlich"),

    # Präsenz
    ("Praesenz", "Präsenz"),

    # Voraussetzung → bleibt (kein Umlaut)
    # Grundvoraussetzung → bleibt

    # Bewusstsein, Bewusstlosigkeit → bleibt (kein Umlaut)

    # Jährig / jährlich
    ("Jaehriger", "Jähriger"),
    ("Jaehrige", "Jährige"),
    ("jaehriger", "jähriger"),
    ("jaehrlich", "jährlich"),
    ("jaehrliche", "jährliche"),

    # Zusammenhänge
    ("Zusammenhaenge", "Zusammenhänge"),

    # Erfassen / fassen → bleibt
    # fassen, Fassen, anfassen, anzufassen, bauen, dauert, Dauer etc. bleibt

    # Kinästhetik
    # Lung / Belüftung
    ("Lungenbelueftung", "Lungenbelüftung"),

    # Nützen / natürlich
    ("nuetzen", "nützen"),
    ("natuerlich", "natürlich"),
    ("schuetzt", "schützt"),
    ("Schuetzt", "Schützt"),

    # Medikamentöser
    ("medikamentoeser", "medikamentöser"),

    # Thromboseprophylaxestrümpfe / Strümpfe
    ("Thromboseprophylaxestruempfe", "Thromboseprophylaxestrümpfe"),
    ("Struempfe", "Strümpfe"),

    # Entzündung / spüren
    ("Entzuendung", "Entzündung"),
    ("spueren", "spüren"),
    ("gelaehmt", "gelähmt"),

    # Einschränk / einschränken
    ("eingeschraenkt", "eingeschränkt"),
    ("Bewegungseinschraenkung", "Bewegungseinschränkung"),
    ("einschraenken", "einschränken"),

    # Funktionsstellung / Extremitäten
    ("Extremitaeten", "Extremitäten"),

    # Kenntnisstand, aktuellen etc. bleibt

    # Hautentzündung
    ("Hautentzuendung", "Hautentzündung"),

    # Fühlt bereits oben
    # Bettlägerig
    ("bettlaegerig", "bettlägerig"),
    ("bettlaegerigen", "bettlägerigen"),
    ("Bettlaegerigkeit", "Bettlägerigkeit"),

    # Hilfebedürftigkeit
    ("Hilfebeduerftigkeit", "Hilfebedürftigkeit"),

    # Kopfhörern
    ("Kopfhoerern", "Kopfhörern"),
    ("hoeren", "hören"),
    ("gehoert", "gehört"),
    ("gehoeren", "gehören"),

    # Lieblingskissen → bleibt
    # Säulen / Bündel
    ("Saeulen", "Säulen"),

    # Unauffällig
    ("unauffaellig", "unauffällig"),

    # Spät
    ("spaet", "spät"),

    # Täglich
    ("taeglich", "täglich"),
    ("Taegliche", "Tägliche"),
    ("taeglichen", "täglichen"),
    ("tagsueber", "tagsüber"),
    ("Tagsueber", "Tagsüber"),

    # Klopfmassage → bleibt (Massage hat kein Umlaut)
    # Influenza → bleibt

    # Löffel / überflüssige
    ("Loeffel", "Löffel"),
    ("ueberfluessige", "überflüssige"),

    # Fülle (Imperativ: "Fülle die Lücken")
    ("Fuelle", "Fülle"),
    ("fuelle", "fülle"),

    # Stürze (Plural)
    ("Stuerze", "Stürze"),

    # Ausfüllen / gebückt / abfährt / würde / schläft
    ("ausfuellen", "ausfüllen"),
    ("gebueckt", "gebückt"),
    ("abfaehrt", "abfährt"),
    ("wuerde", "würde"),
    ("schlaeft", "schläft"),

    # Passiv → bleibt (kein Umlaut)
    # Kissen → bleibt
]

# Whitelist-Replacements als Regex (Word-Boundary)
def build_pattern(word):
    # Escaping + Word Boundaries
    return re.compile(r'\b' + re.escape(word) + r'\b')

# String-literal-safe replacement:
# Wir machen es einfacher — das File ist praktisch nur ContentSteps mit vielen Strings.
# Ein whole-word-replacement global ist sicher, solange wir nur echte Wörter matchen.
# Tokens wie "stepType", "quellen", "themenblockPhase", "xpValue", "question", "fragetext",
# "options", "hotspots", "flipcards" etc. enthalten keine ae/oe/ue/ss.
# Also können wir whole-word-replacement file-wide anwenden.

def fix_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content
    for old, new in REPLACEMENTS:
        if old == new:
            continue
        pattern = build_pattern(old)
        content = pattern.sub(new, content)
    changed = content != original
    if changed:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)
    return changed

if __name__ == "__main__":
    files = sys.argv[1:] or [
        "content/le-06/steps-s1.ts",
        "content/le-06/steps-s2.ts",
        "content/le-06/steps-s3.ts",
        "content/le-06/steps-s4.ts",
        "content/le-06/steps-s5.ts",
        "content/le-06/steps-s6.ts",
    ]
    for f in files:
        changed = fix_file(f)
        print(f"{'CHANGED' if changed else 'nochange'}: {f}")
