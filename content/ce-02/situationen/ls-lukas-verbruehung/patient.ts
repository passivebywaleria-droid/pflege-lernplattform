// CE-02 Situation Lukas — Verbrühung und Kinderschutz-Abklärung — Patientenbeschreibung
// Quelle: content/ce-02/situationen/ls-lukas-verbruehung/patient-plan.md
// Pipeline v9 — 2026-04-23

import type { PatientBeschreibung } from "../../../_types";

export const CE02_SIT_LUKAS_VERBRUEHUNG_PATIENT: PatientBeschreibung = {
  patientId: "pat-lukas-k",
  name: "Lukas K.",
  alter: 2,
  geschlecht: "m",
  diagnosen: [
    "Verbrühung Grad 2a — linker Unterarm, linke Schulter, linker Thorax lateral (~15 % KOF)",
    "Akuter Schmerz (KUSS-Skala 8/10 bei Aufnahme)",
    "Exsikkosegefahr (Trinkmenge seit Unfall reduziert, Mundschleimhaut leicht trocken)",
    "Infektionsgefahr (offene Wundfläche, Hautbarriere lokal geschädigt)",
  ],
  nebendiagnosen: [
    "Keine bekannten Vorerkrankungen",
    "Keine bekannten Allergien",
    "Impfstatus: laut U-Heft aktuell (U6 durchgeführt, U7 noch ausstehend)",
  ],
  setting:
    "Kinderstation, pädiatrische Notaufnahme → Station, Mehrbettzimmer Kinder 0–4 J., Tag 1 der stationären Aufnahme",
  hintergrund:
    "Lukas K. ist 2 Jahre und 6 Monate alt und wiegt 13,2 kg. Er lebt bei seinen Eltern Sandra (28) und Kevin (31) in einer 3-Zimmer-Wohnung, er hat keine Geschwister. Heute Morgen gegen 09:20 Uhr zog Lukas eine gefüllte Teetasse vom Tisch. Der heiße Tee (~70–75 °C) ergoss sich über seinen linken Arm und den linken Oberkörper. Mutter Sandra war im selben Raum, ca. drei Meter entfernt. Sie hat Lukas sofort unter fließendes Wasser gehalten (korrekte Richtkühlung: 15–20 Min, lauwarmes Wasser). Dann Rettungsdienst gerufen, der die Erstversorgung übernahm. Kühlung korrekt durchgeführt — dies wird Sandra in der Kommunikation rückgemeldet. Vitalzeichen bei Aufnahme: HF 142/min (leicht erhöht, Schmerz/Stress), AF 28/min (normal für Alter), SpO₂ 98 %, RR 90/58 mmHg, Temp 37,4 °C. Alle Werte altersgerecht eingeordnet — Kleinkinder (2–3 J.) haben physiologisch höhere HF und AF als Erwachsene.",
  hintergrundB1:
    "Lukas ist 2,5 Jahre alt. Er wiegt 13,2 kg. Heute Morgen um 9:20 Uhr ist ein Unfall passiert. Lukas hat eine Teetasse vom Tisch gezogen. Der heiße Tee (~70–75 °C) ist auf seinen linken Arm und Oberkörper gefallen. Das nennt man Verbrühung (= Schaden durch heiße Flüssigkeit). Die Verbrühung ist Grad 2a: feuchte Blasen, der Patient hat Schmerzen. Etwa 15 % der Körper-Oberfläche sind betroffen. Mutter Sandra hat sofort das Richtige getan — sie hat Lukas unter fließendes Wasser gehalten (15–20 Minuten). Dann hat sie den Notruf gerufen. Lukas hat bei Aufnahme starke Schmerzen: KUSS-Skala 8 von 10. KUSS-Skala misst Schmerz bei kleinen Kindern. Er hat seit dem Unfall kaum getrunken. Das ist ein Zeichen für Exsikkose-Gefahr (= Austrocknung). Lukas kann nicht sagen wo es wehtut. Er sagt: \"Nein! Mama! Au-au-au!\" Bei Ablenkung (Seifenblasen, Musik) wird er ruhiger. Vater Kevin ist angespannt. Er hat Angst und reagiert laut. Bei jeder Verbrühung eines kleinen Kindes gibt es ein Kinderschutz-Screening — das ist ein Standard, kein Vorwurf.",
  persoenlichkeit:
    "Lukas ist ein aufgewecktes, neugieriges Kind. Er liebt Autos, spielt gerne mit Wasser (Badewanne, Schüssel) und redet in kurzen Sätzen: \"Mama, Luki haben!\" Er kennt seinen Namen, zeigt auf Körperteile wenn man fragt, und lacht gerne. Wenn er Schmerz hat, weint er laut und dreht den Kopf weg — er kann nicht sagen wo es wehtut, und er versteht nicht warum die Pflegeperson seine Wunde anfasst. Bei Ablenkung (Seifenblasen, Musik, Knisterfolie) wird sein Weinen leiser — das ist fachlich relevant für den Verbandwechsel. Mutter Sandra (28): jung, überfordert, gibt sich die Schuld, hat geweint, braucht Bestätigung und ruhige Führung. Vater Kevin (31): angespannt, defensiv, hat Angst vor Konsequenzen, reagiert laut wenn er das Gefühl hat jemand zweifelt an seiner Elternschaft.",
  zitate: [
    "\"Nein! Mama! Au-au-au!\"",
    "Sandra: \"Ich hab nur kurz nicht hingeschaut. Eine Sekunde. Das war alles meine Schuld.\"",
    "Kevin (als er vom Kinderschutz-Screening hört): \"Hören Sie auf, uns Vorwürfe zu machen! Das kann jedem passieren! Wir sind doch gute Eltern!\"",
    "Lukas (bei Seifenblasen): \"Bah-bah!\"",
  ],
};
