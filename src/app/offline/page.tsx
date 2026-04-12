"use client";

import { useState, useEffect } from "react";

interface OfflineLektion {
  leId: string;
}

function getOfflineLektionenListe(): OfflineLektion[] {
  const result: OfflineLektion[] = [];
  try {
    const prefix = "pflege-offline-le-";
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(prefix) && localStorage.getItem(key) === "true") {
        result.push({ leId: key.replace(prefix, "") });
      }
    }
  } catch {
    // Fehler ignorieren
  }
  return result;
}

function hatLernprofil(): boolean {
  try {
    return localStorage.getItem("pflege-lernprofil") !== null;
  } catch {
    return false;
  }
}

function hatKarteikarten(): boolean {
  try {
    const raw = localStorage.getItem("pflege-karteikarten");
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0;
  } catch {
    return false;
  }
}

export default function OfflinePage() {
  const [offlineLektionen, setOfflineLektionen] = useState<OfflineLektion[]>([]);
  const [profilVorhanden, setProfilVorhanden] = useState(false);
  const [karteikartenVorhanden, setKarteikartenVorhanden] = useState(false);

  useEffect(() => {
    setOfflineLektionen(getOfflineLektionenListe());
    setProfilVorhanden(hatLernprofil());
    setKarteikartenVorhanden(hatKarteikarten());
  }, []);

  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        minHeight: "100vh",
        margin: 0,
        backgroundColor: "var(--lern-bg)",
        color: "var(--lern-text-primary)",
        padding: "1.5rem",
      }}
    >
      <div style={{ maxWidth: "500px", margin: "0 auto", paddingTop: "2rem" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C4877F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginBottom: "1rem" }}
          >
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
            <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
            <path d="M10.71 5.05A16 16 0 0 1 22.56 9" />
            <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
            <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
            Keine Internetverbindung
          </h1>
          <p style={{ fontSize: "0.9rem", color: "var(--lern-text-secondary)", lineHeight: 1.5 }}>
            Du bist gerade offline. Hier siehst du, was trotzdem verfügbar ist.
          </p>
        </div>

        {/* Verfügbare Inhalte */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.75rem", color: "var(--lern-text-primary)" }}>
            Offline verfügbar
          </h2>

          {/* Offline-Lektionen */}
          {offlineLektionen.length > 0 ? (
            <div style={{ marginBottom: "1rem" }}>
              {offlineLektionen.map((le) => (
                <a
                  key={le.leId}
                  href={`/lernen/${le.leId}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 1rem",
                    backgroundColor: "var(--lern-bg-primary)",
                    borderRadius: "12px",
                    border: "1px solid var(--lern-border)",
                    marginBottom: "0.5rem",
                    textDecoration: "none",
                    color: "var(--lern-text-primary)",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>📖</span>
                  <div>
                    <p style={{ fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                      LE {le.leId.replace("le-", "")}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "var(--lern-text-tertiary)", margin: 0 }}>
                      Heruntergeladen
                    </p>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C4877F"
                    strokeWidth="2"
                    style={{ marginLeft: "auto" }}
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              ))}
            </div>
          ) : (
            <div
              style={{
                padding: "1rem",
                backgroundColor: "var(--lern-bg-primary)",
                borderRadius: "12px",
                border: "1px solid var(--lern-border)",
                marginBottom: "1rem",
              }}
            >
              <p style={{ fontSize: "0.85rem", color: "var(--lern-text-tertiary)", margin: 0 }}>
                Keine Lektionen heruntergeladen. Lade Lektionen über den &quot;Für Offline speichern&quot;-Button herunter, wenn du online bist.
              </p>
            </div>
          )}

          {/* Weitere Offline-Features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {karteikartenVorhanden && (
              <a
                href="/review"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "#D4956A",
                  backgroundImage: "linear-gradient(135deg, #D4956A, #FF6B00)",
                  borderRadius: "12px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>🗂️</span>
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 600, margin: 0 }}>
                    Karteikarten wiederholen
                  </p>
                  <p style={{ fontSize: "0.75rem", opacity: 0.8, margin: 0 }}>
                    Funktioniert auch offline
                  </p>
                </div>
              </a>
            )}

            {profilVorhanden && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "var(--lern-bg-primary)",
                  borderRadius: "12px",
                  border: "1px solid #6B8F71",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>✅</span>
                <div>
                  <p style={{ fontSize: "0.85rem", fontWeight: 600, margin: 0, color: "#4A7350" }}>
                    Lernfortschritt gespeichert
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "var(--lern-text-tertiary)", margin: 0 }}>
                    Wird synchronisiert, sobald du wieder online bist
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Erneut versuchen */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              backgroundColor: "#C4877F",
              color: "white",
              border: "none",
              borderRadius: "12px",
              padding: "12px 24px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              width: "100%",
            }}
          >
            Erneut verbinden
          </button>
          <p style={{ fontSize: "0.75rem", color: "var(--lern-text-tertiary)", marginTop: "0.75rem" }}>
            Sobald du wieder Internet hast, wird dein Fortschritt automatisch synchronisiert.
          </p>
        </div>
      </div>
    </div>
  );
}
