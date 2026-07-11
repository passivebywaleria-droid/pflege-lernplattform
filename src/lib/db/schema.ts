import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  boolean,
  timestamp,
  pgEnum,
  real,
  date,
  jsonb,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

// ══════════════════════════════════════════════
// ENUMS
// ══════════════════════════════════════════════

export const userRoleEnum = pgEnum("user_role", [
  "student",
  "teacher",
  "principal",
  "admin",
])

export const languageEnum = pgEnum("language", ["de", "ar", "tr"])

export const licenseTypeEnum = pgEnum("license_type", [
  "free",
  "pilot",
  "paid",
])

export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "active",
  "canceled",
  "past_due",
  "none",
])

export const contentTrackEnum = pgEnum("content_track", [
  "basis",
  "vertiefung",
])

export const contentTagEnum = pgEnum("content_tag", [
  "anatomie",
  "pflege",
  "krankheitslehre",
])

export const masteryLevelEnum = pgEnum("mastery_level", [
  "unbekannt",
  "versucht",
  "vertraut",
  "sicher",
  "gemeistert",
])

export const xpSourceEnum = pgEnum("xp_source", [
  "step",
  "session_complete",
  "streak_bonus",
  "daily_goal",
  "mastery_up",
  "exam",
  "flashcard",
])

export const contentStatusEnum = pgEnum("content_status", [
  "draft",
  "review",
  "published",
  "archived",
])

export const errorCategoryEnum = pgEnum("error_category", [
  "raten",
  "konzept",
  "sprache",
  "verwechslung",
  "fluechtig",
])

// ══════════════════════════════════════════════
// PART 1: CONTENT TABLES (14)
// ══════════════════════════════════════════════

// ──────────────────────────────────────────────
// 1. Schools (B2B)
// ──────────────────────────────────────────────

export const schools = pgTable("schools", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  bundesland: varchar("bundesland", { length: 50 }),
  contactEmail: varchar("contact_email", { length: 255 }),
  licenseType: licenseTypeEnum("license_type").notNull().default("free"),
  maxStudents: integer("max_students").default(60),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// ──────────────────────────────────────────────
// 2. CE Units (11 Curriculare Einheiten)
// ──────────────────────────────────────────────

export const ceUnits = pgTable("ce_units", {
  id: uuid("id").defaultRandom().primaryKey(),
  number: integer("number").notNull().unique(),
  titleDe: varchar("title_de", { length: 500 }).notNull(),
  titleAr: varchar("title_ar", { length: 500 }),
  titleTr: varchar("title_tr", { length: 500 }),
  ausbildungsdrittel: integer("ausbildungsdrittel").notNull(),
  zeitrichtwertH: integer("zeitrichtwert_h").notNull(),
  pruefungsrelevanz: jsonb("pruefungsrelevanz"),
  isActive: boolean("is_active").notNull().default(true),
})

// ──────────────────────────────────────────────
// 3. Lerneinheiten (55 total, ersetzt learnModules)
// ──────────────────────────────────────────────

export const lerneinheiten = pgTable(
  "lerneinheiten",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    leId: varchar("le_id", { length: 20 }).notNull(),
    ceId: uuid("ce_id")
      .notNull()
      .references(() => ceUnits.id, { onDelete: "cascade" }),
    title: varchar("title", { length: 500 }).notNull(),
    titleShort: varchar("title_short", { length: 200 }).notNull(),
    titleAr: varchar("title_ar", { length: 500 }),
    titleTr: varchar("title_tr", { length: 500 }),
    zeitrichtwert: integer("zeitrichtwert").notNull(), // UE
    sessionCount: integer("session_count").notNull().default(6),
    geschaetzteLernzeit: jsonb("geschaetzte_lernzeit").notNull(), // { c1: 30, b1: 40 }
    kompetenzbereiche: jsonb("kompetenzbereiche").notNull(), // ["KB-V.1"]
    bloomStufen: jsonb("bloom_stufen").notNull(), // [1,2,3]
    voraussetzungen: jsonb("voraussetzungen").notNull().default([]), // ["le-xx"]
    leitfall: jsonb("leitfall"), // { name, alter, diagnose, setting }
    sortOrder: integer("sort_order").notNull(),
    status: contentStatusEnum("status").notNull().default("draft"),
    version: integer("version").notNull().default(1),
    publishedAt: timestamp("published_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_lerneinheiten_le_id").on(table.leId),
    index("idx_lerneinheiten_ce_id").on(table.ceId),
    index("idx_lerneinheiten_status").on(table.status),
  ]
)

// ──────────────────────────────────────────────
// 4. Lernziele — Brücke Content ↔ Mastery
// ──────────────────────────────────────────────

export const lernziele = pgTable(
  "lernziele",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    lernzielId: varchar("lernziel_id", { length: 100 }).notNull(),
    leId: uuid("le_id")
      .notNull()
      .references(() => lerneinheiten.id, { onDelete: "cascade" }),
    title: varchar("title", { length: 500 }).notNull(),
    titleB1: varchar("title_b1", { length: 500 }),
    kompetenzbereich: varchar("kompetenzbereich", { length: 20 }).notNull(),
    bloomTarget: integer("bloom_target").notNull(),
    tag: contentTagEnum("tag").notNull(),
    sortOrder: integer("sort_order").notNull(),
  },
  (table) => [
    uniqueIndex("idx_lernziele_id").on(table.lernzielId),
    index("idx_lernziele_le_id").on(table.leId),
    index("idx_lernziele_tag").on(table.tag),
  ]
)

// ──────────────────────────────────────────────
// 5. Content Steps — Kern-Tabelle (42+ Step-Typen)
// ──────────────────────────────────────────────

export const contentSteps = pgTable(
  "content_steps",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    stepId: varchar("step_id", { length: 60 }).notNull(),
    leId: uuid("le_id")
      .notNull()
      .references(() => lerneinheiten.id, { onDelete: "cascade" }),
    session: varchar("session", { length: 10 }).notNull(), // "s1"–"s8"
    stepType: varchar("step_type", { length: 30 }).notNull(),
    bloomLevel: integer("bloom_level").notNull(),
    kompetenzbereich: varchar("kompetenzbereich", { length: 20 }).notNull(),
    track: contentTrackEnum("track").notNull().default("basis"),
    modus: varchar("modus", { length: 30 }),
    tag: contentTagEnum("tag").notNull(),

    // Lernziel-Link (für Mastery + Multi-Strategie)
    lernzielId: varchar("lernziel_id", { length: 100 }),
    themenblockPhase: varchar("themenblock_phase", { length: 30 }),

    // Multi-Strategie: gleicher lernzielId, anderer Variant = alternativer Weg
    strategyVariant: integer("strategy_variant").notNull().default(1),

    // Content (C1/B1 dual-level)
    contentC1: jsonb("content_c1").notNull(), // { title, body }
    contentB1: jsonb("content_b1"),

    // Polymorphes question-Feld (JSONB)
    question: jsonb("question"),

    // Display & Media
    displayFormat: varchar("display_format", { length: 30 }),
    imageUrl: varchar("image_url", { length: 500 }),
    imageAlt: varchar("image_alt", { length: 500 }),
    audioUrl: varchar("audio_url", { length: 500 }),
    bildkategorie: varchar("bildkategorie", { length: 20 }),

    // Adaptive Metadata
    difficulty: integer("difficulty"),
    xpValue: integer("xp_value"),
    quellen: jsonb("quellen").notNull().default([]),
    patientId: varchar("patient_id", { length: 50 }),

    // Versionierung
    version: integer("version").notNull().default(1),
    status: contentStatusEnum("status").notNull().default("draft"),
    sortOrder: integer("sort_order").notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_steps_step_id").on(table.stepId),
    index("idx_steps_le_session").on(table.leId, table.session),
    index("idx_steps_lernziel").on(table.lernzielId),
    index("idx_steps_type").on(table.stepType),
    index("idx_steps_bloom").on(table.bloomLevel),
    index("idx_steps_track").on(table.track),
    index("idx_steps_tag").on(table.tag),
    index("idx_steps_strategy").on(table.lernzielId, table.strategyVariant),
    index("idx_steps_status").on(table.status),
  ]
)

// ──────────────────────────────────────────────
// 6. Content Step History (Versionierung)
// ──────────────────────────────────────────────

export const contentStepHistory = pgTable(
  "content_step_history",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    stepId: varchar("step_id", { length: 60 }).notNull(),
    version: integer("version").notNull(),
    fullSnapshot: jsonb("full_snapshot").notNull(),
    changedBy: varchar("changed_by", { length: 100 }),
    changeReason: text("change_reason"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("idx_step_history").on(table.stepId, table.version)]
)

// ──────────────────────────────────────────────
// 7. Artikel-Kapitel (Wissen-Tab)
// ──────────────────────────────────────────────

export const artikelKapitel = pgTable(
  "artikel_kapitel",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    kapitelId: varchar("kapitel_id", { length: 60 }).notNull(),
    leId: uuid("le_id")
      .notNull()
      .references(() => lerneinheiten.id, { onDelete: "cascade" }),
    titel: varchar("titel", { length: 500 }).notNull(),
    titelB1: varchar("titel_b1", { length: 500 }),
    tag: contentTagEnum("tag").notNull(),
    geschaetzteDauer: integer("geschaetzte_dauer").notNull(), // Minuten
    bloecke: jsonb("bloecke").notNull(), // ArtikelBlock[]
    glossarBegriffe: jsonb("glossar_begriffe"), // string[]
    zusammenfassung: text("zusammenfassung"),
    zusammenfassungB1: text("zusammenfassung_b1"),
    headerImageUrl: varchar("header_image_url", { length: 500 }),
    lernzielRef: varchar("lernziel_ref", { length: 100 }),
    sortOrder: integer("sort_order").notNull(),
    version: integer("version").notNull().default(1),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_artikel_kapitel_id").on(table.kapitelId),
    index("idx_artikel_le").on(table.leId, table.sortOrder),
  ]
)

// ──────────────────────────────────────────────
// 8. Glossar-Entries (Fachbegriffe)
// ──────────────────────────────────────────────

export const glossarEntries = pgTable(
  "glossar_entries",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    leId: uuid("le_id")
      .notNull()
      .references(() => lerneinheiten.id, { onDelete: "cascade" }),
    begriff: varchar("begriff", { length: 255 }).notNull(),
    erklaerung: text("erklaerung").notNull(),
    erklaerungB1: text("erklaerung_b1"),
    uebersetzungen: jsonb("uebersetzungen").notNull().default({}),
    ausspracheAudio: varchar("aussprache_audio", { length: 500 }),
    istB1Alltagswort: boolean("ist_b1_alltagswort").default(false),
    vorsilbeNachsilbe: varchar("vorsilbe_nachsilbe", { length: 255 }),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (table) => [
    index("idx_glossar_le").on(table.leId),
    index("idx_glossar_begriff").on(table.begriff),
  ]
)

// ──────────────────────────────────────────────
// 9. Karteikarten (Flashcard-Vorlagen)
// ──────────────────────────────────────────────

export const karteikarten = pgTable(
  "karteikarten",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    karteikarteId: varchar("karteikarte_id", { length: 60 }).notNull(),
    leId: uuid("le_id")
      .notNull()
      .references(() => lerneinheiten.id, { onDelete: "cascade" }),
    vorderseite: text("vorderseite").notNull(),
    rueckseiteC1: text("rueckseite_c1").notNull(),
    rueckseiteB1: text("rueckseite_b1").notNull(),
    tag: contentTagEnum("tag").notNull(),
    kategorie: varchar("kategorie", { length: 30 }).notNull(),
    pruefungsrelevant: boolean("pruefungsrelevant").notNull().default(false),
    quelle: varchar("quelle", { length: 255 }),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (table) => [
    uniqueIndex("idx_karteikarte_id").on(table.karteikarteId),
  ]
)

// ──────────────────────────────────────────────
// 10. Lern-Snacks (Kernfakten-Checklisten)
// ──────────────────────────────────────────────

export const lernSnacks = pgTable(
  "lern_snacks",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    leId: uuid("le_id")
      .notNull()
      .references(() => lerneinheiten.id, { onDelete: "cascade" }),
    kapitelId: varchar("kapitel_id", { length: 60 }).notNull(),
    titel: varchar("titel", { length: 500 }).notNull(),
    titelB1: varchar("titel_b1", { length: 500 }),
    tag: contentTagEnum("tag").notNull(),
    items: jsonb("items").notNull(), // LernSnackItem[]
    sortOrder: integer("sort_order").notNull(),
  },
  (table) => [index("idx_snacks_le").on(table.leId, table.sortOrder)]
)

// ──────────────────────────────────────────────
// 11. Exam Patients (LE-übergreifend)
// ──────────────────────────────────────────────

export const examPatients = pgTable(
  "exam_patients",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    patientId: varchar("patient_id", { length: 50 }).notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    alter: integer("alter").notNull(),
    geschlecht: varchar("geschlecht", { length: 5 }).notNull(),
    diagnosen: jsonb("diagnosen").notNull(),
    sourceLEs: jsonb("source_les").notNull(),
    steckbrief: text("steckbrief").notNull(),
  },
  (table) => [uniqueIndex("idx_patient_id").on(table.patientId)]
)

// ──────────────────────────────────────────────
// 12. Fallverläufe (Fall-Tab)
// ──────────────────────────────────────────────

export const fallverlaeufe = pgTable(
  "fallverlaeufe",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    fallId: varchar("fall_id", { length: 60 }).notNull(),
    leId: uuid("le_id")
      .notNull()
      .references(() => lerneinheiten.id, { onDelete: "cascade" }),
    patientId: varchar("patient_id", { length: 50 }).notNull(),
    titel: varchar("titel", { length: 500 }).notNull(),
    titelB1: varchar("titel_b1", { length: 500 }),
    fokus: contentTagEnum("fokus").notNull(),
    stationen: jsonb("stationen").notNull(), // FallStation[] mit stepId-Referenzen
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (table) => [uniqueIndex("idx_fall_id").on(table.fallId)]
)

// ──────────────────────────────────────────────
// 13. Praxis-Übungen (Praxis-Tab)
// ──────────────────────────────────────────────

export const praxisUebungen = pgTable(
  "praxis_uebungen",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    uebungId: varchar("uebung_id", { length: 60 }).notNull(),
    leId: uuid("le_id")
      .notNull()
      .references(() => lerneinheiten.id, { onDelete: "cascade" }),
    typ: varchar("typ", { length: 30 }).notNull(),
    titel: varchar("titel", { length: 500 }).notNull(),
    titelB1: varchar("titel_b1", { length: 500 }),
    beschreibungC1: text("beschreibung_c1").notNull(),
    beschreibungB1: text("beschreibung_b1"),
    bloomLevel: integer("bloom_level").notNull(),
    stepIds: jsonb("step_ids").notNull(), // string[]
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (table) => [uniqueIndex("idx_uebung_id").on(table.uebungId)]
)

// ──────────────────────────────────────────────
// 14. Exam Cases (Prüfungs-Tab)
// ──────────────────────────────────────────────

export const examCases = pgTable(
  "exam_cases",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    caseId: varchar("case_id", { length: 60 }).notNull(),
    leId: uuid("le_id")
      .notNull()
      .references(() => lerneinheiten.id, { onDelete: "cascade" }),
    patientId: varchar("patient_id", { length: 50 }).notNull(),
    titel: varchar("titel", { length: 500 }).notNull(),
    schwierigkeit: varchar("schwierigkeit", { length: 20 }).notNull(),
    bloomRange: jsonb("bloom_range").notNull(),
    zeitLimitMinuten: integer("zeit_limit_minuten"),
    phasen: jsonb("phasen").notNull(), // ExamCasePhase[] mit stepId-Referenzen
  },
  (table) => [uniqueIndex("idx_case_id").on(table.caseId)]
)

// ══════════════════════════════════════════════
// PART 2: LEARNER TABLES (8)
// ══════════════════════════════════════════════

// ──────────────────────────────────────────────
// 15. Users (erweitert)
// ──────────────────────────────────────────────

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  // Nullable seit Pilot: passwortlose Accounts (Magic-Link / Google OAuth).
  passwordHash: varchar("password_hash", { length: 255 }),
  name: varchar("name", { length: 255 }),
  role: userRoleEnum("role").notNull().default("student"),
  schoolId: uuid("school_id").references(() => schools.id, {
    onDelete: "set null",
  }),
  classId: uuid("class_id"),
  language: languageEnum("language").notNull().default("de"),
  muttersprache: varchar("muttersprache", { length: 10 }),
  subscriptionStatus: subscriptionStatusEnum("subscription_status")
    .notNull()
    .default("none"),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }),
  isActive: boolean("is_active").notNull().default(true),
  isMinor: boolean("is_minor").notNull().default(false),
  parentalConsentAt: timestamp("parental_consent_at"),
  // Pilot: Geburtsjahr statt Klarname/Geburtsdatum (Datensparsamkeit) —
  // ≥16-Check bei Registrierung.
  birthYear: integer("birth_year"),

  // Zwei-Achsen-Profil (global)
  sprachLevel: real("sprach_level"),
  fachwissenLevel: real("fachwissen_level"),
  achsenLetztBerechnet: timestamp("achsen_letzt_berechnet"),

  // Lern-Präferenzen (KI lernt pro Schüler)
  lernpraeferenzen: jsonb("lernpraeferenzen"), // { textEffektiv, bildEffektiv, audioEffektiv }

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// ──────────────────────────────────────────────
// 15b. Auth Identities (Login-Methoden pro User) — Pilot
// Ein User kann mehrere Login-Wege haben (Passwort + Google + Magic-Link).
// ──────────────────────────────────────────────

export const authProviderEnum = pgEnum("auth_provider", [
  "password",
  "google",
  "apple",
  "email", // Magic-Link (passwortlos per E-Mail)
])

export const authIdentities = pgTable(
  "auth_identities",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    provider: authProviderEnum("provider").notNull(),
    // Bei OAuth: die stabile Provider-User-ID (z. B. Google "sub").
    // Bei email/password: die E-Mail.
    providerAccountId: varchar("provider_account_id", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_auth_identity_provider_account").on(
      table.provider,
      table.providerAccountId
    ),
    index("idx_auth_identity_user").on(table.userId),
  ]
)

// ──────────────────────────────────────────────
// 15c. Login Tokens (Magic-Link, einmalig) — Pilot
// ──────────────────────────────────────────────

export const loginTokens = pgTable(
  "login_tokens",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    // Nur der Hash des Tokens wird gespeichert (nie das Klartext-Token).
    tokenHash: varchar("token_hash", { length: 255 }).notNull().unique(),
    email: varchar("email", { length: 255 }).notNull(),
    expiresAt: timestamp("expires_at").notNull(),
    usedAt: timestamp("used_at"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("idx_login_token_email").on(table.email)]
)

// ──────────────────────────────────────────────
// 16. User CE Profiles (Zwei-Achsen pro CE)
// ──────────────────────────────────────────────

export const userCeProfiles = pgTable(
  "user_ce_profiles",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    ceId: uuid("ce_id")
      .notNull()
      .references(() => ceUnits.id, { onDelete: "cascade" }),
    sprachLevel: real("sprach_level").notNull().default(3.0),
    fachwissenLevel: real("fachwissen_level").notNull().default(1.0),
    lastUpdated: timestamp("last_updated").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_user_ce_profile").on(table.userId, table.ceId),
  ]
)

// ──────────────────────────────────────────────
// 17. User Lernziel Mastery (Khan-5-Level pro Lernziel)
// ──────────────────────────────────────────────

export const userLernzielMastery = pgTable(
  "user_lernziel_mastery",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lernzielId: varchar("lernziel_id", { length: 100 }).notNull(),
    stufe: masteryLevelEnum("stufe").notNull().default("unbekannt"),
    richtigInFolge: integer("richtig_in_folge").notNull().default(0),
    gesamtVersuche: integer("gesamt_versuche").notNull().default(0),
    gesamtRichtig: integer("gesamt_richtig").notNull().default(0),
    bloomMax: integer("bloom_max").notNull().default(0),
    naechsteWiederholung: timestamp("naechste_wiederholung").notNull(),
    letzteAntwort: timestamp("letzte_antwort"),
  },
  (table) => [
    uniqueIndex("idx_mastery_user_lernziel").on(
      table.userId,
      table.lernzielId
    ),
    index("idx_mastery_user_due").on(
      table.userId,
      table.naechsteWiederholung
    ),
    index("idx_mastery_stufe").on(table.userId, table.stufe),
  ]
)

// ──────────────────────────────────────────────
// 18. Step Responses (jede Antwort)
// ──────────────────────────────────────────────

export const stepResponses = pgTable(
  "step_responses",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    stepId: varchar("step_id", { length: 60 }).notNull(),
    sessionLogId: uuid("session_log_id"),
    correct: boolean("correct"),
    gewaehlteOption: text("gewaehlte_option"),
    freitextAntwort: text("freitext_antwort"),
    zeitMs: integer("zeit_ms").notNull(),
    zeitKlasse: varchar("zeit_klasse", { length: 15 }),
    fehlerKategorie: errorCategoryEnum("fehler_kategorie"),
    // Denormalisiert für Query-Performance
    stepType: varchar("step_type", { length: 30 }).notNull(),
    bloomLevel: integer("bloom_level").notNull(),
    lernzielId: varchar("lernziel_id", { length: 100 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("idx_responses_user").on(table.userId, table.createdAt),
    index("idx_responses_user_step").on(table.userId, table.stepId),
    index("idx_responses_user_lernziel").on(table.userId, table.lernzielId),
    index("idx_responses_session").on(table.sessionLogId),
  ]
)

// ──────────────────────────────────────────────
// 19. User Schwächen (Auto-Karteikarten bei Fehlern)
// ──────────────────────────────────────────────

export const userSchwaechen = pgTable(
  "user_schwaechen",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    leId: varchar("le_id", { length: 20 }).notNull(),
    begriff: varchar("begriff", { length: 255 }).notNull(),
    fragetext: text("fragetext").notNull(),
    richtigeAntwort: text("richtige_antwort").notNull(),
    falscheAntwort: text("falsche_antwort").notNull(),
    naechsteWiederholung: timestamp("naechste_wiederholung").notNull(),
    intervallTage: integer("intervall_tage").notNull().default(1),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("idx_schwaechen_user_due").on(
      table.userId,
      table.naechsteWiederholung
    ),
  ]
)

// ──────────────────────────────────────────────
// 20. Placement Test Results (Einstufung)
// ──────────────────────────────────────────────

export const placementTestResults = pgTable(
  "placement_test_results",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    sprachLevel: real("sprach_level").notNull(),
    fachwissenLevel: real("fachwissen_level").notNull(),
    details: jsonb("details").notNull(),
    completedAt: timestamp("completed_at").defaultNow().notNull(),
  },
  (table) => [
    index("idx_placement_user").on(table.userId, table.completedAt),
  ]
)

// ──────────────────────────────────────────────
// 21. User Karteikarten Status
// ──────────────────────────────────────────────

export const userKarteikartenStatus = pgTable(
  "user_karteikarten_status",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    karteikarteId: varchar("karteikarte_id", { length: 60 }).notNull(),
    stufe: masteryLevelEnum("stufe").notNull().default("unbekannt"),
    naechsteWiederholung: timestamp("naechste_wiederholung").notNull(),
    intervallTage: real("intervall_tage").notNull().default(1),
    letztesReview: timestamp("letztes_review"),
  },
  (table) => [
    uniqueIndex("idx_kk_user").on(table.userId, table.karteikarteId),
    index("idx_kk_due").on(table.userId, table.naechsteWiederholung),
  ]
)

// ──────────────────────────────────────────────
// 22. User Lern-Snack Checks (ersetzt localStorage)
// ──────────────────────────────────────────────

export const userLernSnackChecks = pgTable(
  "user_lern_snack_checks",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    snackItemId: varchar("snack_item_id", { length: 60 }).notNull(),
    checked: boolean("checked").notNull().default(true),
    checkedAt: timestamp("checked_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_snack_user_item").on(table.userId, table.snackItemId),
  ]
)

// ══════════════════════════════════════════════
// PART 3: PLANNING TABLES (7)
// ══════════════════════════════════════════════

// ──────────────────────────────────────────────
// 23. Session Logs (Lernzeit-Nachweis)
// ──────────────────────────────────────────────

export const sessionLogs = pgTable(
  "session_logs",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    leId: varchar("le_id", { length: 20 }).notNull(),
    ceId: varchar("ce_id", { length: 20 }).notNull(),
    session: varchar("session", { length: 10 }).notNull(),
    startzeit: timestamp("startzeit").notNull(),
    endzeit: timestamp("endzeit"),
    aktivMinuten: real("aktiv_minuten").notNull().default(0),
    stepsBearbeitet: integer("steps_bearbeitet").notNull().default(0),
    stepsGesamt: integer("steps_gesamt").notNull().default(0),
    score: integer("score"),
    xpEarned: integer("xp_earned").notNull().default(0),
    track: contentTrackEnum("track").notNull().default("basis"),
    isComplete: boolean("is_complete").notNull().default(false),
  },
  (table) => [
    index("idx_session_logs_user").on(table.userId, table.startzeit),
    index("idx_session_logs_user_le").on(table.userId, table.leId),
    index("idx_session_logs_ce").on(table.userId, table.ceId),
  ]
)

// ──────────────────────────────────────────────
// 24. Spaced Repetition Queue (FSRS, Lernziel-Ebene)
// ──────────────────────────────────────────────

export const spacedRepetitionQueue = pgTable(
  "spaced_repetition_queue",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lernzielId: varchar("lernziel_id", { length: 100 }).notNull(),
    nextReviewAt: timestamp("next_review_at").notNull(),
    difficulty: real("difficulty").notNull().default(0.3),
    stability: real("stability").notNull().default(0),
    retrievability: real("retrievability").notNull().default(0),
    intervalDays: real("interval_days").notNull().default(0),
    reps: integer("reps").notNull().default(0),
    lastReviewAt: timestamp("last_review_at"),
    lastRating: integer("last_rating"),
  },
  (table) => [
    uniqueIndex("idx_sr_user_lernziel").on(table.userId, table.lernzielId),
    index("idx_sr_due").on(table.userId, table.nextReviewAt),
  ]
)

// ──────────────────────────────────────────────
// 25. User LE Progress (LE-Level Fortschritt)
// ──────────────────────────────────────────────

export const userLeProgress = pgTable(
  "user_le_progress",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    leId: varchar("le_id", { length: 20 }).notNull(),
    gesamtXp: integer("gesamt_xp").notNull().default(0),
    abgeschlossen: boolean("abgeschlossen").notNull().default(false),
    letzterScore: integer("letzter_score"),
    naechsteWiederholung: timestamp("naechste_wiederholung"),
    letzteAktivitaet: timestamp("letzte_aktivitaet").defaultNow().notNull(),
    sessionProgress: jsonb("session_progress").notNull().default({}),
  },
  (table) => [
    uniqueIndex("idx_le_progress_user_le").on(table.userId, table.leId),
    index("idx_le_progress_wiederholung").on(
      table.userId,
      table.naechsteWiederholung
    ),
  ]
)

// ──────────────────────────────────────────────
// 26. Daily Activity
// ──────────────────────────────────────────────

export const dailyActivity = pgTable(
  "daily_activity",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    datum: date("datum").notNull(),
    minutenAktiv: real("minuten_aktiv").notNull().default(0),
    xpVerdient: integer("xp_verdient").notNull().default(0),
    sessionsAbgeschlossen: integer("sessions_abgeschlossen")
      .notNull()
      .default(0),
    stepsBearbeitet: integer("steps_bearbeitet").notNull().default(0),
  },
  (table) => [
    uniqueIndex("idx_daily_user_date").on(table.userId, table.datum),
    index("idx_daily_date").on(table.datum),
  ]
)

// ──────────────────────────────────────────────
// 27. User Streaks
// ──────────────────────────────────────────────

export const userStreaks = pgTable("user_streaks", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  currentStreak: integer("current_streak").notNull().default(0),
  longestStreak: integer("longest_streak").notNull().default(0),
  lastActivityDate: date("last_activity_date"),
  streakFreezesRemaining: integer("streak_freezes_remaining")
    .notNull()
    .default(0),
})

// ──────────────────────────────────────────────
// 28. XP Log
// ──────────────────────────────────────────────

export const xpLog = pgTable(
  "xp_log",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    xpAmount: integer("xp_amount").notNull(),
    source: xpSourceEnum("source").notNull(),
    referenceId: varchar("reference_id", { length: 100 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [index("idx_xp_log_user").on(table.userId, table.createdAt)]
)

// ──────────────────────────────────────────────
// 29. User Daily Goals
// ──────────────────────────────────────────────

export const userDailyGoals = pgTable("user_daily_goals", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  goalMinutes: integer("goal_minutes").notNull().default(10),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

// ══════════════════════════════════════════════
// PART 4: SCHOOL / TEACHER TABLES (5)
// ══════════════════════════════════════════════

// ──────────────────────────────────────────────
// 30. Classes (Klassen-Gruppierung)
// ──────────────────────────────────────────────

export const classes = pgTable("classes", {
  id: uuid("id").defaultRandom().primaryKey(),
  schoolId: uuid("school_id")
    .notNull()
    .references(() => schools.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  ausbildungsdrittel: integer("ausbildungsdrittel").notNull(),
  teacherId: uuid("teacher_id")
    .notNull()
    .references(() => users.id),
  startDate: date("start_date"),
  endDate: date("end_date"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

// ──────────────────────────────────────────────
// 31. Class Assignments (Lehrer → Klasse → LE)
// ──────────────────────────────────────────────

export const classAssignments = pgTable("class_assignments", {
  id: uuid("id").defaultRandom().primaryKey(),
  classId: uuid("class_id")
    .notNull()
    .references(() => classes.id, { onDelete: "cascade" }),
  leId: varchar("le_id", { length: 20 }).notNull(),
  dueDate: date("due_date"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

// ──────────────────────────────────────────────
// 32. Teacher-Student Messages (In-App Chat)
// ──────────────────────────────────────────────

export const teacherStudentMessages = pgTable(
  "teacher_student_messages",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    senderId: uuid("sender_id")
      .notNull()
      .references(() => users.id),
    receiverId: uuid("receiver_id")
      .notNull()
      .references(() => users.id),
    content: text("content").notNull(),
    contextLeId: varchar("context_le_id", { length: 20 }),
    contextStepId: varchar("context_step_id", { length: 60 }),
    isRead: boolean("is_read").notNull().default(false),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("idx_messages_receiver").on(
      table.receiverId,
      table.isRead,
      table.createdAt
    ),
    index("idx_messages_sender").on(table.senderId, table.createdAt),
  ]
)

// ──────────────────────────────────────────────
// 33. Lernzeit Reports (Materialisierte Berichte)
// ──────────────────────────────────────────────

export const lernzeitReports = pgTable(
  "lernzeit_reports",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    ceId: varchar("ce_id", { length: 20 }).notNull(),
    kompetenzbereich: varchar("kompetenzbereich", { length: 20 }).notNull(),
    totalMinuten: real("total_minuten").notNull(),
    totalSteps: integer("total_steps").notNull(),
    avgScore: real("avg_score"),
    zeitraum: varchar("zeitraum", { length: 50 }).notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    index("idx_lernzeit_user").on(table.userId, table.ceId, table.zeitraum),
  ]
)

// ──────────────────────────────────────────────
// 34. Crowd Poll Responses (echte Daten)
// ──────────────────────────────────────────────

export const crowdPollResponses = pgTable(
  "crowd_poll_responses",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    stepId: varchar("step_id", { length: 60 }).notNull(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    response: text("response").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    index("idx_poll_step").on(table.stepId),
    uniqueIndex("idx_poll_unique").on(table.stepId, table.userId),
  ]
)

// ──────────────────────────────────────────────
// 35. Push Subscriptions (Web Push API)
// ──────────────────────────────────────────────

export const pushSubscriptions = pgTable(
  "push_subscriptions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    endpoint: text("endpoint").notNull(),
    p256dh: text("p256dh").notNull(),
    auth: text("auth").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_push_endpoint").on(table.endpoint),
    index("idx_push_user").on(table.userId),
  ]
)

// ══════════════════════════════════════════════
// RELATIONS
// ══════════════════════════════════════════════

export const schoolsRelations = relations(schools, ({ many }) => ({
  users: many(users),
  classes: many(classes),
}))

export const ceUnitsRelations = relations(ceUnits, ({ many }) => ({
  lerneinheiten: many(lerneinheiten),
  userCeProfiles: many(userCeProfiles),
}))

export const lerneinheitenRelations = relations(
  lerneinheiten,
  ({ one, many }) => ({
    ceUnit: one(ceUnits, {
      fields: [lerneinheiten.ceId],
      references: [ceUnits.id],
    }),
    lernziele: many(lernziele),
    contentSteps: many(contentSteps),
    artikelKapitel: many(artikelKapitel),
    glossarEntries: many(glossarEntries),
    lernSnacks: many(lernSnacks),
    fallverlaeufe: many(fallverlaeufe),
    praxisUebungen: many(praxisUebungen),
    examCases: many(examCases),
  })
)

export const lernzieleRelations = relations(lernziele, ({ one, many }) => ({
  lerneinheit: one(lerneinheiten, {
    fields: [lernziele.leId],
    references: [lerneinheiten.id],
  }),
  contentSteps: many(contentSteps),
}))

export const contentStepsRelations = relations(contentSteps, ({ one }) => ({
  lerneinheit: one(lerneinheiten, {
    fields: [contentSteps.leId],
    references: [lerneinheiten.id],
  }),
}))

export const artikelKapitelRelations = relations(
  artikelKapitel,
  ({ one }) => ({
    lerneinheit: one(lerneinheiten, {
      fields: [artikelKapitel.leId],
      references: [lerneinheiten.id],
    }),
  })
)

export const glossarEntriesRelations = relations(
  glossarEntries,
  ({ one }) => ({
    lerneinheit: one(lerneinheiten, {
      fields: [glossarEntries.leId],
      references: [lerneinheiten.id],
    }),
  })
)

export const usersRelations = relations(users, ({ one, many }) => ({
  school: one(schools, {
    fields: [users.schoolId],
    references: [schools.id],
  }),
  class: one(classes, {
    fields: [users.classId],
    references: [classes.id],
  }),
  ceProfiles: many(userCeProfiles),
  mastery: many(userLernzielMastery),
  stepResponses: many(stepResponses),
  schwaechen: many(userSchwaechen),
  leProgress: many(userLeProgress),
  sessionLogs: many(sessionLogs),
  streaks: one(userStreaks),
  xpLogs: many(xpLog),
  dailyGoal: one(userDailyGoals),
  repetitionQueue: many(spacedRepetitionQueue),
}))

export const userCeProfilesRelations = relations(
  userCeProfiles,
  ({ one }) => ({
    user: one(users, {
      fields: [userCeProfiles.userId],
      references: [users.id],
    }),
    ceUnit: one(ceUnits, {
      fields: [userCeProfiles.ceId],
      references: [ceUnits.id],
    }),
  })
)

export const userLernzielMasteryRelations = relations(
  userLernzielMastery,
  ({ one }) => ({
    user: one(users, {
      fields: [userLernzielMastery.userId],
      references: [users.id],
    }),
  })
)

export const stepResponsesRelations = relations(stepResponses, ({ one }) => ({
  user: one(users, {
    fields: [stepResponses.userId],
    references: [users.id],
  }),
  sessionLog: one(sessionLogs, {
    fields: [stepResponses.sessionLogId],
    references: [sessionLogs.id],
  }),
}))

export const sessionLogsRelations = relations(
  sessionLogs,
  ({ one, many }) => ({
    user: one(users, {
      fields: [sessionLogs.userId],
      references: [users.id],
    }),
    responses: many(stepResponses),
  })
)

export const spacedRepetitionQueueRelations = relations(
  spacedRepetitionQueue,
  ({ one }) => ({
    user: one(users, {
      fields: [spacedRepetitionQueue.userId],
      references: [users.id],
    }),
  })
)

export const userLeProgressRelations = relations(
  userLeProgress,
  ({ one }) => ({
    user: one(users, {
      fields: [userLeProgress.userId],
      references: [users.id],
    }),
  })
)

export const userStreaksRelations = relations(userStreaks, ({ one }) => ({
  user: one(users, {
    fields: [userStreaks.userId],
    references: [users.id],
  }),
}))

export const xpLogRelations = relations(xpLog, ({ one }) => ({
  user: one(users, {
    fields: [xpLog.userId],
    references: [users.id],
  }),
}))

export const userDailyGoalsRelations = relations(
  userDailyGoals,
  ({ one }) => ({
    user: one(users, {
      fields: [userDailyGoals.userId],
      references: [users.id],
    }),
  })
)

export const classesRelations = relations(classes, ({ one, many }) => ({
  school: one(schools, {
    fields: [classes.schoolId],
    references: [schools.id],
  }),
  teacher: one(users, {
    fields: [classes.teacherId],
    references: [users.id],
  }),
  students: many(users),
  assignments: many(classAssignments),
}))

export const classAssignmentsRelations = relations(
  classAssignments,
  ({ one }) => ({
    class: one(classes, {
      fields: [classAssignments.classId],
      references: [classes.id],
    }),
  })
)

export const teacherStudentMessagesRelations = relations(
  teacherStudentMessages,
  ({ one }) => ({
    sender: one(users, {
      fields: [teacherStudentMessages.senderId],
      references: [users.id],
      relationName: "sentMessages",
    }),
    receiver: one(users, {
      fields: [teacherStudentMessages.receiverId],
      references: [users.id],
      relationName: "receivedMessages",
    }),
  })
)

export const lernzeitReportsRelations = relations(
  lernzeitReports,
  ({ one }) => ({
    user: one(users, {
      fields: [lernzeitReports.userId],
      references: [users.id],
    }),
  })
)

// ══════════════════════════════════════════════
// PART 5: SITUATIONSBASIERTES LERNEN (CE-02+)
// ══════════════════════════════════════════════

export const pflegeProzessPhaseEnum = pgEnum("pflege_prozess_phase", [
  "informieren",
  "beobachten",
  "planen",
  "durchfuehren",
  "evaluieren",
  "dokumentieren",
])

export const spiraleEnum = pgEnum("spirale", ["1", "2", "3", "4"])

export const ceContentStatusEnum = pgEnum("ce_content_status", [
  "themen-rohmaterial",
  "situationsplan",
  "steps",
  "geprueft",
  "published",
])

// ──────────────────────────────────────────────
// 36. Situations-Fortschritt (pro User + Situation)
// ──────────────────────────────────────────────

export const situationFortschritt = pgTable(
  "situation_fortschritt",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    situationId: varchar("situation_id", { length: 100 }).notNull(),
    ceId: varchar("ce_id", { length: 20 }).notNull(),
    /**
     * Phasenmodell-agnostisch (8 SituationsTypen haben verschiedene Phasen,
     * z.B. akutsituation ≠ pflegeprozess) — daher varchar statt
     * pflegeProzessPhaseEnum.
     */
    currentPhase: varchar("current_phase", { length: 40 })
      .notNull()
      .default("informieren"),
    /** Ergebnisse pro Phase: { informieren: { score: "A", stepsBearbeitet: 5 }, ... } */
    phaseResults: jsonb("phase_results").notNull().default({}),
    /** Wiedereinstiegs-Zustand: { completedPhases: string[], currentStepIndex: number } */
    resumeState: jsonb("resume_state").notNull().default({}),
    spirale: spiraleEnum("spirale").notNull().default("1"),
    isComplete: boolean("is_complete").notNull().default(false),
    gesamtXp: integer("gesamt_xp").notNull().default(0),
    startedAt: timestamp("started_at").defaultNow().notNull(),
    completedAt: timestamp("completed_at"),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => [
    uniqueIndex("idx_situation_user").on(table.userId, table.situationId),
    index("idx_situation_ce").on(table.userId, table.ceId),
    index("idx_situation_phase").on(table.userId, table.currentPhase),
  ]
)

// ──────────────────────────────────────────────
// 37. Lernzeit-Log (tägliche CE-basierte Lernzeit)
// ──────────────────────────────────────────────

export const lernzeitLog = pgTable(
  "lernzeit_log",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    ceId: varchar("ce_id", { length: 20 }).notNull(),
    datum: date("datum").notNull(),
    /** "situation" | "thema" | "karteikarten" | "pruefung" */
    modus: varchar("modus", { length: 30 }).notNull(),
    aktivMinuten: real("aktiv_minuten").notNull().default(0),
    /** themaIds die bearbeitet wurden */
    themen: jsonb("themen").notNull().default([]),
    situationId: varchar("situation_id", { length: 100 }),
    stepsBearbeitet: integer("steps_bearbeitet").notNull().default(0),
  },
  (table) => [
    index("idx_lernzeit_user_datum").on(table.userId, table.datum),
    index("idx_lernzeit_user_ce").on(table.userId, table.ceId),
  ]
)

// ──────────────────────────────────────────────
// 38. Themen-Mastery (pro User + Thema)
// ──────────────────────────────────────────────

export const userThemaMastery = pgTable(
  "user_thema_mastery",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    themaId: varchar("thema_id", { length: 100 }).notNull(),
    ceId: varchar("ce_id", { length: 20 }).notNull(),
    stufe: masteryLevelEnum("stufe").notNull().default("unbekannt"),
    richtigInFolge: integer("richtig_in_folge").notNull().default(0),
    gesamtVersuche: integer("gesamt_versuche").notNull().default(0),
    gesamtRichtig: integer("gesamt_richtig").notNull().default(0),
    /** Welche Wissensbausteine wurden bereits eingeblendet */
    geseheneBasuteine: jsonb("gesehene_bausteine").notNull().default([]),
    naechsteWiederholung: timestamp("naechste_wiederholung").notNull(),
    letzteAntwort: timestamp("letzte_antwort"),
  },
  (table) => [
    uniqueIndex("idx_thema_mastery_user").on(table.userId, table.themaId),
    index("idx_thema_mastery_ce").on(table.userId, table.ceId),
    index("idx_thema_mastery_due").on(
      table.userId,
      table.naechsteWiederholung
    ),
  ]
)

// Relations für neue Tabellen

export const situationFortschrittRelations = relations(
  situationFortschritt,
  ({ one }) => ({
    user: one(users, {
      fields: [situationFortschritt.userId],
      references: [users.id],
    }),
  })
)

export const lernzeitLogRelations = relations(lernzeitLog, ({ one }) => ({
  user: one(users, {
    fields: [lernzeitLog.userId],
    references: [users.id],
  }),
}))

export const userThemaMasteryRelations = relations(
  userThemaMastery,
  ({ one }) => ({
    user: one(users, {
      fields: [userThemaMastery.userId],
      references: [users.id],
    }),
  })
)

// ──────────────────────────────────────────────
// Waitlist / Early Access (Marketing)
// ──────────────────────────────────────────────
// Sammelt E-Mails aus Social-Funnel (Link in Bio → Landingpage).
// DSGVO: nur E-Mail + Sprache + Herkunft, keine weiteren Daten. Server DE.

export const waitlistSignups = pgTable(
  "waitlist_signups",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: varchar("email", { length: 320 }).notNull(),
    language: languageEnum("language").notNull().default("de"),
    // Herkunft (z. B. "tiktok", "instagram", "pinterest") aus utm/Query
    source: varchar("source", { length: 80 }),
    // Welcher Lead-Magnet versprochen wurde (z. B. "karteikarten-pdf")
    leadMagnet: varchar("lead_magnet", { length: 80 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    emailIdx: uniqueIndex("waitlist_email_idx").on(table.email),
  })
)
