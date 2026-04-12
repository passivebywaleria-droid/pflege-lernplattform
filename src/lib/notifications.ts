/**
 * Push-Notification-Modul für Lern-Erinnerungen
 *
 * Nutzt die Web Notification API (kein externer Service).
 * Speichert Einstellungen in localStorage.
 */

const NOTIFICATION_ACTIVE_KEY = "pflege-notifications";
const LETZTE_AKTIVITAET_KEY = "pflege-letzte-aktivitaet";

/** Permission anfragen und Erinnerung aktivieren */
export async function scheduleLernErinnerung(): Promise<boolean> {
  if (typeof window === "undefined") return false;
  if (!("Notification" in window)) return false;

  if (Notification.permission !== "granted") {
    const result = await Notification.requestPermission();
    if (result !== "granted") return false;
  }

  localStorage.setItem(NOTIFICATION_ACTIVE_KEY, "true");
  return true;
}

/** Erinnerung deaktivieren */
export function deaktiviereLernErinnerung(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(NOTIFICATION_ACTIVE_KEY, "false");
}

/** Prüft ob Erinnerungen aktiv sind */
export function istErinnerungAktiv(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(NOTIFICATION_ACTIVE_KEY) === "true";
}

/** Letzte Aktivität speichern (bei Dashboard-Besuch oder Lern-Session) */
export function speichereLetzteAktivitaet(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(LETZTE_AKTIVITAET_KEY, Date.now().toString());
}

/** Prüft ob eine Erinnerung gesendet werden soll (>20h inaktiv) */
export function pruefeLernErinnerung(): void {
  if (typeof window === "undefined") return;
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted") return;
  if (localStorage.getItem(NOTIFICATION_ACTIVE_KEY) !== "true") return;

  const letzteAktivitaet = localStorage.getItem(LETZTE_AKTIVITAET_KEY);
  if (!letzteAktivitaet) return;

  const stunden = (Date.now() - parseInt(letzteAktivitaet)) / (1000 * 60 * 60);

  if (stunden > 20) {
    new Notification("Pflege-Lernplattform", {
      body: "Du hast heute noch nicht gelernt. Nur 15 Minuten reichen!",
      icon: "/icons/icon-192x192.png",
      tag: "lern-erinnerung",
    });
  }
}
