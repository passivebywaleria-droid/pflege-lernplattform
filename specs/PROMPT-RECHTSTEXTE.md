# Parallel-Chat-Prompt: Rechtstexte (Task #11 — AGB, Widerruf, Datenschutz, Impressum)

> Von Waleria in einen NEUEN Chat kopieren. Der Chat schreibt NUR nach specs/,
> kein src/, kein Commit (bewährtes Parallel-Chat-Muster vom 16.07.).

---

Lies zuerst: VISION.md, AGENTS.md, specs/START-PROMPT-KERN-LOOP.md (Kontext),
src/app/api/billing/ + src/components/learn/paywall-gate.tsx (was verkauft wird),
memory-Hinweise zu Stripe (Auto-Abo ≥18, Einmalkauf 16–17), DSGVO-Regeln in
.claude/rules/security.md.

**Auftrag:** Erstelle vollständige ENTWÜRFE für die vier Rechtstexte von
carovia.de (Betreiberin: Waleria, Einzelunternehmen — Details als Platzhalter
{NAME/ANSCHRIFT/USt-ID} markieren, NICHT erfinden):

1. **Impressum** (§ 5 DDG/TMG-Nachfolge, § 18 MStV) — inkl. Platzhalter-Block.
2. **Datenschutzerklärung** (DSGVO) — konkret auf unseren Stack: Hetzner DE
   (Hosting/AVV), Brevo (Transaktions-Mails, Domain-Auth), Stripe (Zahlung),
   Nebius EU Amsterdam (KI-Anfragen anonymisiert, kein Name/keine User-ID),
   first-party Funnel-Events in localStorage (KEINE Tracker, keine Cookies
   außer Session-JWT httpOnly), Registrierung ab 16 (Art. 8 DSGVO-Argumentation),
   Löschrecht, Speicherdauern, Betroffenenrechte.
3. **AGB** — B2C-Abo (10 €/Monat, Auto-Verlängerung ≥18) + Einmalkauf (16–17,
   ohne Auto-Verlängerung), Freemium-Grenze, Leistungsbeschreibung
   (Lernplattform, kein Erfolgs-/Prüfungsversprechen!), Verfügbarkeit,
   Minderjährigen-Regelung, Kündigungs-Button-Pflicht (§ 312k BGB).
4. **Widerrufsbelehrung** inkl. Muster-Widerrufsformular — mit korrekter
   Behandlung digitaler Inhalte (§ 356 Abs. 5 BGB: Erlöschen bei Zustimmung
   zum sofortigen Beginn — muss in den Checkout-Flow!).

**Regeln:** Keine erfundenen Firmendaten. Jede rechtliche Aussage konservativ
formulieren. Am Ende eine CHECKLISTE „vor Live": (a) Platzhalter füllen,
(b) anwaltliche Prüfung empfohlen (Entwurf ≠ Rechtsberatung), (c) technische
Folgeaufgaben für den Haupt-Chat (Footer-Links, Checkout-Checkbox
„sofortiger Beginn/Widerruf erlischt", Kündigungs-Button-Route).

**Output:** specs/rechtstexte/impressum.md, datenschutz.md, agb.md,
widerruf.md + specs/rechtstexte/CHECKLISTE.md. Deutsch, „Sie"-Form (Rechtstexte
sind die Ausnahme von der Du-Regel), echte Umlaute.
