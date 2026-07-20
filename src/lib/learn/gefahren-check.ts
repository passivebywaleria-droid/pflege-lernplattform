/**
 * Gefahren-Check für gesprochene/geschriebene Schüler-Antworten.
 *
 * Deterministische Schicht (kein LLM): Sagt ein Schüler etwas pflegefachlich
 * Gefährliches, antwortet ein FESTER, geprüfter Korrektursatz — Quelle ist die
 * Anti-Pattern-Registry in .claude/rules/pflege-konformitaet.md (Spalte
 * „Korrekt" + Standards-Verweise). IDs identisch mit der Registry (AP-*);
 * der Sync-Test prüft, dass jede ID dort existiert.
 *
 * Bewusst eine TEILMENGE: nur Muster, die in gesprochener Ich-Form („ich
 * hebe Sie hoch") eindeutig genug sind. Kontextabhängige Muster (Schellong,
 * Opioid-Mythos) bleiben dem semantischen Review vorbehalten — lieber ein
 * ausgelassener Treffer als eine falsche Belehrung.
 */

export interface GefahrenTreffer {
  id: string;
  hinweis: string;
  hinweisB1: string;
}

interface GefahrenMuster extends GefahrenTreffer {
  pattern: RegExp;
}

const MUSTER: GefahrenMuster[] = [
  {
    id: "AP-NRS-OK",
    pattern: /nrs\s*[4-9].{0,40}?\b(ok(ay)?|in ordnung|im rahmen|nicht schlimm|wenig|passt schon)\b/i,
    hinweis:
      "NRS ab 4 ist moderater Schmerz — dokumentations- und interventionspflichtig (DNQP Schmerzmanagement). Im SBAR-Anruf erwähnen, Bedarfsanalgesie ansprechen.",
    hinweisB1:
      "NRS 4 oder mehr ist echter Schmerz. Das musst du dokumentieren und etwas dagegen tun (DNQP Schmerz). Sag es beim Anruf, frag nach Schmerzmittel bei Bedarf.",
  },
  {
    id: "AP-HEBEN-ZIEHEN",
    pattern: /\b(hebe|ziehe|heben|ziehen)\s+(ich\s+|wir\s+)?(sie|ihn|dich|den patienten|die patientin)\s+(hoch|auf|aus dem bett)\b|\bhoch(zu)?ziehen\b|\bhochheben\b/i,
    hinweis:
      "Nicht heben oder hochziehen: Der Patient macht die Bewegung selbst, du begleitest und sicherst (Kinästhetik nach Hatch/Maietta). Er gibt das Tempo vor.",
    hinweisB1:
      "Nicht hochziehen oder heben. Der Patient bewegt sich selbst, du hilfst und sicherst (Kinästhetik). Er bestimmt das Tempo.",
  },
  {
    id: "AP-UNTER-ACHSELN",
    pattern: /unter\s+(den?\s+|die\s+)?achseln?\b/i,
    hinweis:
      "Nicht unter den Achseln greifen — Risiko für das Schultergelenk und deinen Rücken. Seitlich am Becken/Rumpf sichern, der Patient bewegt sich selbst (Kinästhetik).",
    hinweisB1:
      "Nicht unter den Achseln greifen — das kann die Schulter verletzen. Halte seitlich am Becken oder Rumpf, der Patient bewegt sich selbst.",
  },
  {
    id: "AP-GLUECK-VOR-ASSESSMENT",
    pattern: /gl[üu]ck\s+gehabt|ist\s+ja\s+nichts\s+passiert|zum\s+gl[üu]ck\s+nichts\s+passiert/i,
    hinweis:
      "Erst Verletzungen ausschließen, dann beruhigen: Vor dem abgeschlossenen Assessment ist ‚nichts passiert' eine Fehlinformation (DNQP Sturzprophylaxe).",
    hinweisB1:
      "Erst prüfen, ob der Patient verletzt ist. Erst danach kannst du sagen, dass nichts passiert ist (DNQP Sturz).",
  },
  {
    id: "AP-BETTGITTER-BEIDSEITIG",
    pattern: /(beide|beidseitig\w*)\s+(bettgitter|seitengitter)|((bett|seiten)gitter)\s+(beidseitig|auf beiden seiten)/i,
    hinweis:
      "Beidseitig hochgezogene Bettgitter gelten ohne Genehmigung rechtlich als Fixierung (§ 1831 Abs. 4 BGB). Einseitig sichern — der Patient muss selbst heraus können.",
    hinweisB1:
      "Bettgitter auf beiden Seiten sind ohne Erlaubnis eine Fixierung (§ 1831 BGB). Nur eine Seite — der Patient muss selbst aus dem Bett können.",
  },
  {
    id: "AP-DEKUBITUS-MASSAGE",
    pattern: /(massier\w*|reib\w*|einreib\w*)\s+.{0,30}?(r[öo]tung|ger[öo]tete|druckstelle|hautstelle|stei[ßss]bein|ferse)|((r[öo]tung|druckstelle|hautstelle)\s?.{0,30}?(massier\w*|reib\w*))/i,
    hinweis:
      "Gerötete oder gefährdete Hautstellen nicht massieren oder reiben — das schädigt das Gewebe zusätzlich (DNQP Dekubitusprophylaxe). Stattdessen: Druck vollständig entlasten.",
    hinweisB1:
      "Rote oder gefährdete Hautstellen nie massieren oder reiben — das macht die Haut kaputter (DNQP Dekubitus). Besser: keinen Druck mehr auf die Stelle.",
  },
  {
    id: "AP-2H-LAGERUNG-STARR",
    pattern: /\b(um)?lagern?\b[^.]{0,30}?\balle\s+(zwei|2)\s+stunden\b|\balle\s+(zwei|2)\s+stunden\b[^.]{0,30}?\b((um)?lagern?|drehen|positionier\w*)\b/i,
    hinweis:
      "Kein starres 2-Stunden-Schema: Das Bewegungs-/Positionierungsintervall wird individuell festgelegt (DNQP Dekubitusprophylaxe) — nach Hautzustand und Risiko.",
    hinweisB1:
      "Nicht automatisch alle 2 Stunden lagern. Wie oft, hängt vom Patienten ab — Haut anschauen und individuell entscheiden (DNQP Dekubitus).",
  },
  {
    id: "AP-LICHT-INDIREKT",
    pattern: /(ged[äa]mpftes|indirektes|gedimmtes)\s+licht|licht\s+ged[äa]mpft/i,
    hinweis:
      "Nach einem Sturz das Licht voll einschalten — hell genug für die Verletzungs-Inspektion (DNQP Sturzprophylaxe), aber nicht direkt blendend.",
    hinweisB1:
      "Nach einem Sturz: Licht ganz anmachen. Du musst Verletzungen gut sehen können (DNQP Sturz).",
  },
];

/** Prüft einen Transkript-/Freitext auf gefährliche Aussagen. Pure, testbar. */
export function pruefeGefahren(text: string): GefahrenTreffer[] {
  if (!text.trim()) return [];
  return MUSTER.filter((m) => m.pattern.test(text)).map(
    ({ id, hinweis, hinweisB1 }) => ({ id, hinweis, hinweisB1 })
  );
}
