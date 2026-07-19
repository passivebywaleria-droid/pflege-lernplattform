// Kernfakt-Register (PLAN-ADAPTIV-V1, Station ①): „Nicht Step 7 war falsch,
// sondern Kernfakt F-07 ist wackelig." Die kernfaktId-Ebene verbindet
// Antwort-Steps, Spickzettel-Bausteine und Karteikarten.
//
// Speicherung: localStorage, first-party, für Gast UND eingeloggt identisch.
// Server-Sync bewusst NICHT in v1 — neue DB-Tabellen sind blockiert, bis der
// Prod-Migrations-Workflow geklärt ist (bekannter offener Punkt, siehe
// specs/START-PROMPT-KERN-LOOP.md). Das Datenformat ist upsert-fähig angelegt,
// damit v2 nur den Transport ergänzt.

export type KernfaktStatus = "wackelig" | "gefestigt";

export interface KernfaktEintrag {
  status: KernfaktStatus;
  /** Step, an dem der Fakt zuletzt wackelte bzw. gefestigt wurde. */
  stepId: string;
  /** Fehlerkategorie aus analysiereFehler (nur bei wackelig, optional). */
  kategorie?: string;
  /** Recheck in DIESER Situation bereits gestellt? (max. 1 pro Kernfakt) */
  recheckGestellt?: boolean;
}

export type KernfaktRegister = Record<string, KernfaktEintrag>;

function registerKey(situationId: string): string {
  return `kernfakte:${situationId}`;
}

export function ladeRegister(situationId: string): KernfaktRegister {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(registerKey(situationId));
    return raw ? (JSON.parse(raw) as KernfaktRegister) : {};
  } catch {
    return {};
  }
}

function speichereRegister(situationId: string, register: KernfaktRegister): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(registerKey(situationId), JSON.stringify(register));
  } catch {
    // localStorage voll/gesperrt — Adaptivität degradiert still, Lernfluss geht vor
  }
}

/**
 * Falsche Antwort: alle Kernfakten des Steps als wackelig registrieren.
 * Upsert — ein bereits gefestigter Fakt wird wieder wackelig (ehrlich),
 * `recheckGestellt` bleibt dabei erhalten (max. 1 Recheck pro Situation).
 */
export function markiereWackelig(
  situationId: string,
  kernfaktIds: readonly string[],
  stepId: string,
  kategorie?: string
): KernfaktRegister {
  const register = ladeRegister(situationId);
  for (const id of kernfaktIds) {
    register[id] = {
      status: "wackelig",
      stepId,
      kategorie,
      recheckGestellt: register[id]?.recheckGestellt,
    };
  }
  speichereRegister(situationId, register);
  return register;
}

/** Recheck richtig beantwortet → Fakt gilt als gefestigt. */
export function markiereGefestigt(situationId: string, kernfaktId: string): KernfaktRegister {
  const register = ladeRegister(situationId);
  const bisher = register[kernfaktId];
  register[kernfaktId] = {
    status: "gefestigt",
    stepId: bisher?.stepId ?? "",
    recheckGestellt: true,
  };
  speichereRegister(situationId, register);
  return register;
}

/** Recheck wurde gestellt (unabhängig vom Ausgang) — nie zweimal pro Situation. */
export function markiereRecheckGestellt(situationId: string, kernfaktId: string): void {
  const register = ladeRegister(situationId);
  if (register[kernfaktId]) {
    register[kernfaktId].recheckGestellt = true;
    speichereRegister(situationId, register);
  }
}

/** Wackelige Fakten, die noch keinen Recheck bekommen haben — in Einfüge-Reihenfolge. */
export function offeneRecheckKandidaten(register: KernfaktRegister): string[] {
  return Object.entries(register)
    .filter(([, e]) => e.status === "wackelig" && !e.recheckGestellt)
    .map(([id]) => id);
}
