// CE-02 Situation Frau Kovač — Ambulante Pflege — Patientenbeschreibung
// Quelle: content/ce-02/situationen/ls-kovac-ambulant/patient-plan.md
// Spirale 3 — Pipeline v9 — 2026-04-23

import type { PatientBeschreibung } from "../../../_types";

export const CE02_SIT_KOVAC_AMBULANT_PATIENT: PatientBeschreibung = {
  patientId: "pat-kovac-marija",
  name: "Marija Kovač",
  alter: 84,
  geschlecht: "w",
  diagnosen: [
    "COPD (GOLD-Stadium III) — schwere Atemwegsobstruktion, FEV1 30–49 % des Sollwertes",
    "Herzinsuffizienz (NYHA Stadium II) — Atemnot bei mittlerer Belastung, Unterschenkelödeme",
    "Kontrakturen beider Kniegelenke — Flexionskontrakturen, Extensionsdefizit ca. 15°",
    "Chronische Obstipation — Stuhlgang alle 3–5 Tage, harter Stuhl",
    "Insomnie (chronisch) — Einschlaflatenz >45 Min, nächtliches Erwachen",
    "Exsikkose-Neigung — Trinkmenge häufig unter 1.000 ml/Tag",
  ],
  nebendiagnosen: [
    "Nikotinabusus — 3 Zigaretten täglich (reduziert von früher 20/Tag)",
  ],
  setting:
    "Ambulante Pflege, Privatwohnung 3. Obergeschoss (Aufzug vorhanden), 2× täglich Hausbesuch (morgens 07:30 Uhr + abends 18:30 Uhr), Pflegegrad 3",
  hintergrund:
    "Marija Kovač wurde 1942 in einem Dorf nahe Dubrovnik geboren. Sie wuchs mit vier Geschwistern auf und half früh im Haushalt. Mit 22 Jahren heiratete sie Josip Kovač, der 1969 als Gastarbeiter nach Deutschland ging. Marija folgte ihm 1971 mit dem damals dreijährigen Darko. Sie lebte 55 Jahre in derselben Stadt, lernte Deutsch mit Mühe aber gründlich und arbeitete 18 Jahre in der Schulkantine. Sie ist eine Frau mit ausgeprägtem Eigensinn — jahrzehntelang hat sie ihren Haushalt allein geführt. Josips Tod vor 11 Jahren hat sie härter getroffen, als sie es zeigen wollte. Das Rauchen und das Spätfernsehen sind für sie das Wenige, das ihr in einem Leben, das immer enger wird, noch selbst gehört. Sie misstraut dem Pflegedienst anfangs — nicht aus Bösartigkeit, sondern weil sie weiß, dass Abhängigkeit einmal anfängt. Wenn du ihre Würde achtest und ihr erklärst warum etwas wichtig ist, hört sie zu. Sohn Darko (57) lebt in Split/Kroatien und ruft zweimal pro Woche an.",
  hintergrundB1:
    "Frau Kovač ist 84 Jahre alt. Sie lebt allein in einer Wohnung. Sie kommt aus Kroatien. Sie lebt seit 55 Jahren in Deutschland. Ihr Mann ist gestorben. Ihr Sohn Darko lebt in Kroatien und ruft zweimal pro Woche an. Sie hat COPD (= schwere Lungen-Erkrankung). Ihre Knie lassen sich nicht mehr ganz strecken (= Kontraktur). Sie schläft schlecht. Sie trinkt zu wenig, weil sie Angst vor Inkontinenz hat. Sie raucht 3 Zigaretten täglich. Sie ist eine starke Frau. Wenn du ihr erklärst warum etwas wichtig ist, hört sie zu. Wenn du ihr etwas befiehlst ohne Erklärung, sagt sie Nein.",
  persoenlichkeit:
    "Gutes Alltagsdeutsch ohne Akzent, manchmal kroatische Einschübe wenn sie emotional ist. Fachbegriffe teils unbekannt ('COPD' kennt sie, 'FEV1' nicht, 'Stase' nicht). Ausgeprägte Autonomie — versteht Hinweise besser als lange Erklärungen. Verweigert Kompressionsstrümpfe konsequnt ('Die drücken nur. Ich hab doch die Tabletten.'). TV bis Mitternacht als Einschlaf-Ritual seit Josips Tod — kein Schwäche, sondern Kontrolle über ihr eigenes Leben. Wenn du Aufklärung mit Respekt bringst, hört sie zu. Wenn du Druck machst, lehnt sie ab.",
  zitate: [
    "Ah, Sie sind's. Ich hab noch nicht mal Kaffee.",
    "Heute Nacht hab ich gehusten. Viel. Der Schleim will nicht raus.",
    "Ich brauch keine Strümpfe! Die drücken nur. Ich hab doch die Tabletten.",
    "Warten Sie kurz. Wenn ich schnell mach, wird mir schwindelig. Ich kenn das schon.",
    "Das ist mein Darko. Darf ich kurz?",
    "Die Übungen heut Morgen — ich hab's nochmal probiert, allein. Zweimal.",
  ],
};
