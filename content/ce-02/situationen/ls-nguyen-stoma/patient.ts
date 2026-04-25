// CE-02 Situation Herr Nguyen — Kolostoma-Erstversorgung nach Sigmaresektion
// Quelle: content/ce-02/situationen/ls-nguyen-stoma/patient-plan.md
// Pipeline v9 — 2026-04-23

import type { PatientBeschreibung } from "../../../_types";

export const CE02_SIT_NGUYEN_STOMA_PATIENT: PatientBeschreibung = {
  patientId: "pat-nguyen",
  name: "Tran Nguyen",
  alter: 72,
  geschlecht: "m",
  diagnosen: [
    "Kolonkarzinom (Sigma) — Adenokarzinom T3 N1 M0, OP-Indikation gestellt",
    "Z.n. Sigmaresektion + endständiges Kolostoma — 4. postoperativer Tag",
    "Mangelernährung — BMI 19,2 kg/m², Albumin 28 g/l (↓), 6 kg Gewichtsverlust in 3 Monaten",
    "Dekubitusgefahr — Braden-Skala: 14 Punkte (gering-moderate Gefährdung)",
  ],
  nebendiagnosen: [
    "Arterielle Hypertonie (Ramipril 5 mg/d, stabil)",
    "Leichte Anämie (Hb 10,2 g/dl) — kein akuter Handlungsbedarf",
  ],
  setting:
    "Chirurgische Station, Zweibettzimmer, 4. postoperativer Tag nach Sigmaresektion mit endständigem Kolostoma",
  hintergrund:
    "Tran Nguyen kam 1985 mit seiner Frau aus Vietnam nach Deutschland. Die Familie betrieb über 20 Jahre ein vietnamesisches Restaurant in einer mittelgroßen Stadt — er als Koch, sie an der Kasse. Das Restaurant wurde vor 3 Jahren übergeben, nach dem Krebsbefund fehlte die Kraft weiterzumachen. Herr Nguyen ist ein stiller Mann. Er lacht selten, wenn er es tut, kräuseln sich seine Augen zu schmalen Halbmonden. Er kommuniziert bedächtig: sucht nach Worten, macht lange Pausen. Sein Deutsch reicht für kurze Sätze im Alltag — Fachbegriffe, Erklärungen zum Stoma, Ernährungsanweisungen versteht er kaum ohne Hilfe seiner Tochter. Essen war sein Beruf, seine Sprache, sein Ausdruck von Fürsorge. Jetzt, mit dem Stoma, ist die Ausscheidung etwas, das er nicht mehr kontrollieren kann. Das verletzt ihn tief — er weint nicht laut. Er schlägt die Augen nieder, wenn das Pflegepersonal die Abdeckung entfernt. Ehefrau Mai (68) spricht kein Deutsch, ist jeden Nachmittag da. Tochter Linh (35) kommt täglich, spricht fließend Deutsch und übersetzt für die Eltern — manchmal in einer abgemilderten Version.",
  hintergrundB1:
    "Herr Nguyen kam 1985 aus Vietnam nach Deutschland. Er war Koch. Er hatte ein Restaurant. Das Restaurant wurde vor 3 Jahren übergeben. Herr Nguyen spricht einfaches Deutsch. Fach-Wörter versteht er kaum. Er braucht seine Tochter Linh als Übersetzerin. Herr Nguyen hat jetzt ein Stoma (= eine Öffnung am Bauch). Der Darm kommt durch die Bauch-Wand nach außen. Der Stuhl kommt in einen Beutel. Herr Nguyen kann das nicht kontrollieren. Das ist schwer für ihn. Er sagt leise: 'Ich bin kein richtiger Mann mehr.' Er spricht nicht viel über seine Gefühle. Seine Frau Mai spricht kein Deutsch. Sie sitzt neben dem Bett. Sie hat Angst. Zuhause muss sie den Stoma-Beutel wechseln. Das überfordert sie. Wichtig: Du schaust immer Herrn Nguyen an. Er ist der Patient.",
  persoenlichkeit:
    "Stiller, bedächtiger Mann. Sucht nach Worten, macht lange Pausen. Deutsch für kurze Alltagssätze ausreichend — Fachsprache kaum. Emotionales Kernthema: Würde und Männlichkeit. Körperliche Integrität und Selbstständigkeit bedeuteten für ihn Stärke. Das Stoma erlebt er als Verlust eines Teils von dem, was er war. Er spricht nicht darüber — aber in einem stillen Moment sagt er leise: 'Ich bin kein richtiger Mann mehr.' Augenkontakt beim Beutelwechsel meidet er. Tochter Linh übersetzt, kann aber Aussagen abmildern um ihn zu schützen. Augenkontakt und direkte Ansprache bleiben immer beim Patienten.",
  zitate: [
    "Linh (übersetzt): 'Papa sagt, er möchte lieber warten. Er ist noch müde.'",
    "Linh (übersetzt): 'Er sagt, es ist ihm peinlich. Er möchte nicht, dass jemand das sieht.'",
    "Herr Nguyen (flüsternd, auf Deutsch): 'Ich bin kein richtiger Mann mehr.'",
    "Linh (für Mutter Mai): 'Mama hat Angst. Was wenn der Beutel zuhause ausläuft? Was wenn sie es falsch macht? Sie hat noch nie so etwas gemacht.'",
    "Linh: 'Papa hat früher für 60 Gäste gekocht. Jetzt isst er drei Löffel und schiebt den Teller weg. Das macht mir Sorgen.'",
    "Herr Nguyen (langsam, nach dem Nachmittag): 'Danke. Das... war nicht so schlimm. Wie ich dachte.'",
  ],
};
