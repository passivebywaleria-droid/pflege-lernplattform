import type { InferSelectModel, InferInsertModel } from "drizzle-orm"
import type {
  users,
  schools,
  ceUnits,
  learnModules,
  quizQuestions,
  quizAnswers,
  glossaryTerms,
  userProgress,
  skillMastery,
  spacedRepetitionQueue,
  userStreaks,
  xpLog,
  userDailyGoals,
} from "@/lib/db/schema"

// Select types (what you GET from the database)
export type User = InferSelectModel<typeof users>
export type School = InferSelectModel<typeof schools>
export type CEUnit = InferSelectModel<typeof ceUnits>
export type LearnModule = InferSelectModel<typeof learnModules>
export type QuizQuestion = InferSelectModel<typeof quizQuestions>
export type QuizAnswer = InferSelectModel<typeof quizAnswers>
export type GlossaryTerm = InferSelectModel<typeof glossaryTerms>
export type UserProgress = InferSelectModel<typeof userProgress>
export type SkillMastery = InferSelectModel<typeof skillMastery>
export type SpacedRepetitionEntry = InferSelectModel<
  typeof spacedRepetitionQueue
>
export type UserStreak = InferSelectModel<typeof userStreaks>
export type XPLogEntry = InferSelectModel<typeof xpLog>
export type UserDailyGoal = InferSelectModel<typeof userDailyGoals>

// Insert types (what you PUT into the database)
export type NewUser = InferInsertModel<typeof users>
export type NewSchool = InferInsertModel<typeof schools>
export type NewCEUnit = InferInsertModel<typeof ceUnits>
export type NewLearnModule = InferInsertModel<typeof learnModules>
export type NewQuizQuestion = InferInsertModel<typeof quizQuestions>
export type NewQuizAnswer = InferInsertModel<typeof quizAnswers>
export type NewGlossaryTerm = InferInsertModel<typeof glossaryTerms>
