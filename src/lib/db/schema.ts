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
} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

// ──────────────────────────────────────────────
// Enums
// ──────────────────────────────────────────────

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

export const contentTypeEnum = pgEnum("content_type", [
  "text",
  "quiz",
  "case",
  "glossary",
])

export const questionTypeEnum = pgEnum("question_type", [
  "mc",
  "ordering",
  "gap",
  "flip",
  "dragdrop",
])

export const masteryLevelEnum = pgEnum("mastery_level", [
  "not_started",
  "attempted",
  "familiar",
  "proficient",
  "mastered",
])

export const xpSourceEnum = pgEnum("xp_source", [
  "lesson",
  "quiz",
  "streak_bonus",
  "daily_goal",
  "mastery_up",
])

export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "active",
  "canceled",
  "past_due",
  "none",
])

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
// 2. Users
// ──────────────────────────────────────────────

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  passwordHash: varchar("password_hash", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }),
  role: userRoleEnum("role").notNull().default("student"),
  schoolId: uuid("school_id").references(() => schools.id, {
    onDelete: "set null",
  }),
  language: languageEnum("language").notNull().default("de"),
  subscriptionStatus: subscriptionStatusEnum("subscription_status")
    .notNull()
    .default("none"),
  stripeCustomerId: varchar("stripe_customer_id", { length: 255 }),
  isActive: boolean("is_active").notNull().default(true),
  isMinor: boolean("is_minor").notNull().default(false),
  parentalConsentAt: timestamp("parental_consent_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// ──────────────────────────────────────────────
// 3. CE Units (Curriculare Einheiten)
// ──────────────────────────────────────────────

export const ceUnits = pgTable("ce_units", {
  id: uuid("id").defaultRandom().primaryKey(),
  number: integer("number").notNull().unique(), // 1-11
  titleDe: varchar("title_de", { length: 500 }).notNull(),
  titleAr: varchar("title_ar", { length: 500 }),
  titleTr: varchar("title_tr", { length: 500 }),
  ausbildungsdrittel: integer("ausbildungsdrittel").notNull(), // 1, 2, or 3
  zeitrichtwertH: integer("zeitrichtwert_h").notNull(), // hours
  pruefungsrelevanz: text("pruefungsrelevanz"), // JSON string with Tag1/Tag2/Tag3/Muendlich/Praktisch
  isActive: boolean("is_active").notNull().default(true),
})

// ──────────────────────────────────────────────
// 4. Learn Modules
// ──────────────────────────────────────────────

export const learnModules = pgTable("learn_modules", {
  id: uuid("id").defaultRandom().primaryKey(),
  ceId: uuid("ce_id")
    .notNull()
    .references(() => ceUnits.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 500 }).notNull(),
  titleAr: varchar("title_ar", { length: 500 }),
  titleTr: varchar("title_tr", { length: 500 }),
  bloomLevel: integer("bloom_level").notNull(), // 1-6
  order: integer("order").notNull(),
  contentType: contentTypeEnum("content_type").notNull().default("text"),
  contentDe: text("content_de"), // MDX/HTML content
  contentAr: text("content_ar"),
  contentTr: text("content_tr"),
  durationMin: integer("duration_min").default(15),
  isPublished: boolean("is_published").notNull().default(false),
})

// ──────────────────────────────────────────────
// 5. Quiz Questions
// ──────────────────────────────────────────────

export const quizQuestions = pgTable("quiz_questions", {
  id: uuid("id").defaultRandom().primaryKey(),
  moduleId: uuid("module_id")
    .notNull()
    .references(() => learnModules.id, { onDelete: "cascade" }),
  questionDe: text("question_de").notNull(),
  questionAr: text("question_ar"),
  questionTr: text("question_tr"),
  type: questionTypeEnum("type").notNull().default("mc"),
  bloomLevel: integer("bloom_level").notNull().default(1),
  difficulty: integer("difficulty").notNull().default(1), // 1-5
  explanationDe: text("explanation_de"),
  explanationAr: text("explanation_ar"),
  metadata: text("metadata"), // JSON for ordering/dragdrop config
})

// ──────────────────────────────────────────────
// 6. Quiz Answers
// ──────────────────────────────────────────────

export const quizAnswers = pgTable("quiz_answers", {
  id: uuid("id").defaultRandom().primaryKey(),
  questionId: uuid("question_id")
    .notNull()
    .references(() => quizQuestions.id, { onDelete: "cascade" }),
  answerTextDe: text("answer_text_de").notNull(),
  answerTextAr: text("answer_text_ar"),
  answerTextTr: text("answer_text_tr"),
  isCorrect: boolean("is_correct").notNull().default(false),
  order: integer("order"), // for ordering questions
})

// ──────────────────────────────────────────────
// 7. Glossary Terms
// ──────────────────────────────────────────────

export const glossaryTerms = pgTable("glossary_terms", {
  id: uuid("id").defaultRandom().primaryKey(),
  ceId: uuid("ce_id").references(() => ceUnits.id, { onDelete: "cascade" }),
  termDe: varchar("term_de", { length: 255 }).notNull(),
  definitionDe: text("definition_de").notNull(),
  termAr: varchar("term_ar", { length: 255 }),
  definitionAr: text("definition_ar"),
  termTr: varchar("term_tr", { length: 255 }),
  definitionTr: text("definition_tr"),
})

// ──────────────────────────────────────────────
// 8. User Progress
// ──────────────────────────────────────────────

export const userProgress = pgTable("user_progress", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  moduleId: uuid("module_id")
    .notNull()
    .references(() => learnModules.id, { onDelete: "cascade" }),
  completedAt: timestamp("completed_at"),
  scorePct: integer("score_pct"), // 0-100
  attempts: integer("attempts").notNull().default(0),
})

// ──────────────────────────────────────────────
// 9. Skill Mastery (Khan Academy 5-stage pattern)
// ──────────────────────────────────────────────

export const skillMastery = pgTable("skill_mastery", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  moduleId: uuid("module_id")
    .notNull()
    .references(() => learnModules.id, { onDelete: "cascade" }),
  level: masteryLevelEnum("level").notNull().default("not_started"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

// ──────────────────────────────────────────────
// 10. Spaced Repetition Queue (FSRS algorithm)
// ──────────────────────────────────────────────

export const spacedRepetitionQueue = pgTable("spaced_repetition_queue", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  questionId: uuid("question_id")
    .notNull()
    .references(() => quizQuestions.id, { onDelete: "cascade" }),
  nextReviewAt: timestamp("next_review_at").notNull(),
  difficulty: real("difficulty").notNull().default(0),
  stability: real("stability").notNull().default(0),
  retrievability: real("retrievability").notNull().default(0),
  intervalDays: real("interval_days").notNull().default(0),
  reps: integer("reps").notNull().default(0),
  lastReviewAt: timestamp("last_review_at"),
})

// ──────────────────────────────────────────────
// 11. User Streaks (Duolingo pattern)
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
// 12. XP Log
// ──────────────────────────────────────────────

export const xpLog = pgTable("xp_log", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  xpAmount: integer("xp_amount").notNull(),
  source: xpSourceEnum("source").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

// ──────────────────────────────────────────────
// 13. User Daily Goals
// ──────────────────────────────────────────────

export const userDailyGoals = pgTable("user_daily_goals", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  goalMinutes: integer("goal_minutes").notNull().default(10), // 5, 10, 15, 20
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

// ──────────────────────────────────────────────
// Relations
// ──────────────────────────────────────────────

export const schoolsRelations = relations(schools, ({ many }) => ({
  users: many(users),
}))

export const usersRelations = relations(users, ({ one, many }) => ({
  school: one(schools, {
    fields: [users.schoolId],
    references: [schools.id],
  }),
  progress: many(userProgress),
  mastery: many(skillMastery),
  streaks: one(userStreaks),
  xpLogs: many(xpLog),
  dailyGoal: one(userDailyGoals),
  repetitionQueue: many(spacedRepetitionQueue),
}))

export const ceUnitsRelations = relations(ceUnits, ({ many }) => ({
  modules: many(learnModules),
  glossaryTerms: many(glossaryTerms),
}))

export const learnModulesRelations = relations(
  learnModules,
  ({ one, many }) => ({
    ceUnit: one(ceUnits, {
      fields: [learnModules.ceId],
      references: [ceUnits.id],
    }),
    questions: many(quizQuestions),
    progress: many(userProgress),
    mastery: many(skillMastery),
  })
)

export const quizQuestionsRelations = relations(
  quizQuestions,
  ({ one, many }) => ({
    module: one(learnModules, {
      fields: [quizQuestions.moduleId],
      references: [learnModules.id],
    }),
    answers: many(quizAnswers),
    repetitionEntries: many(spacedRepetitionQueue),
  })
)

export const quizAnswersRelations = relations(quizAnswers, ({ one }) => ({
  question: one(quizQuestions, {
    fields: [quizAnswers.questionId],
    references: [quizQuestions.id],
  }),
}))

export const glossaryTermsRelations = relations(glossaryTerms, ({ one }) => ({
  ceUnit: one(ceUnits, {
    fields: [glossaryTerms.ceId],
    references: [ceUnits.id],
  }),
}))

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  user: one(users, {
    fields: [userProgress.userId],
    references: [users.id],
  }),
  module: one(learnModules, {
    fields: [userProgress.moduleId],
    references: [learnModules.id],
  }),
}))

export const skillMasteryRelations = relations(skillMastery, ({ one }) => ({
  user: one(users, {
    fields: [skillMastery.userId],
    references: [users.id],
  }),
  module: one(learnModules, {
    fields: [skillMastery.moduleId],
    references: [learnModules.id],
  }),
}))

export const spacedRepetitionQueueRelations = relations(
  spacedRepetitionQueue,
  ({ one }) => ({
    user: one(users, {
      fields: [spacedRepetitionQueue.userId],
      references: [users.id],
    }),
    question: one(quizQuestions, {
      fields: [spacedRepetitionQueue.questionId],
      references: [quizQuestions.id],
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
