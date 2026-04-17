import type { InferSelectModel, InferInsertModel } from "drizzle-orm"
import type {
  users,
  schools,
  ceUnits,
  lerneinheiten,
  lernziele,
  contentSteps,
  artikelKapitel,
  glossarEntries,
  karteikarten,
  lernSnacks,
  examPatients,
  fallverlaeufe,
  praxisUebungen,
  examCases,
  userCeProfiles,
  userLernzielMastery,
  stepResponses,
  userSchwaechen,
  placementTestResults,
  userKarteikartenStatus,
  userLernSnackChecks,
  sessionLogs,
  spacedRepetitionQueue,
  userLeProgress,
  dailyActivity,
  userStreaks,
  xpLog,
  userDailyGoals,
  classes,
  classAssignments,
  teacherStudentMessages,
  lernzeitReports,
  crowdPollResponses,
} from "@/lib/db/schema"

// ── Content Types ──
export type User = InferSelectModel<typeof users>
export type School = InferSelectModel<typeof schools>
export type CEUnit = InferSelectModel<typeof ceUnits>
export type Lerneinheit = InferSelectModel<typeof lerneinheiten>
export type Lernziel = InferSelectModel<typeof lernziele>
export type ContentStep = InferSelectModel<typeof contentSteps>
export type ArtikelKapitelRow = InferSelectModel<typeof artikelKapitel>
export type GlossarEntry = InferSelectModel<typeof glossarEntries>
export type Karteikarte = InferSelectModel<typeof karteikarten>
export type LernSnack = InferSelectModel<typeof lernSnacks>
export type ExamPatient = InferSelectModel<typeof examPatients>
export type FallverlaufRow = InferSelectModel<typeof fallverlaeufe>
export type PraxisUebungRow = InferSelectModel<typeof praxisUebungen>
export type ExamCaseRow = InferSelectModel<typeof examCases>

// ── Learner Types ──
export type UserCeProfile = InferSelectModel<typeof userCeProfiles>
export type UserLernzielMastery = InferSelectModel<typeof userLernzielMastery>
export type StepResponse = InferSelectModel<typeof stepResponses>
export type UserSchwaeche = InferSelectModel<typeof userSchwaechen>
export type PlacementTestResult = InferSelectModel<typeof placementTestResults>
export type UserKarteikartenStatus = InferSelectModel<typeof userKarteikartenStatus>
export type UserLernSnackCheck = InferSelectModel<typeof userLernSnackChecks>

// ── Planning Types ──
export type SessionLog = InferSelectModel<typeof sessionLogs>
export type SpacedRepetitionEntry = InferSelectModel<typeof spacedRepetitionQueue>
export type UserLeProgressRow = InferSelectModel<typeof userLeProgress>
export type DailyActivityRow = InferSelectModel<typeof dailyActivity>
export type UserStreak = InferSelectModel<typeof userStreaks>
export type XPLogEntry = InferSelectModel<typeof xpLog>
export type UserDailyGoal = InferSelectModel<typeof userDailyGoals>

// ── School Types ──
export type ClassRow = InferSelectModel<typeof classes>
export type ClassAssignment = InferSelectModel<typeof classAssignments>
export type TeacherStudentMessage = InferSelectModel<typeof teacherStudentMessages>
export type LernzeitReport = InferSelectModel<typeof lernzeitReports>
export type CrowdPollResponse = InferSelectModel<typeof crowdPollResponses>

// ── Insert Types ──
export type NewUser = InferInsertModel<typeof users>
export type NewSchool = InferInsertModel<typeof schools>
export type NewLerneinheit = InferInsertModel<typeof lerneinheiten>
export type NewContentStep = InferInsertModel<typeof contentSteps>
export type NewStepResponse = InferInsertModel<typeof stepResponses>
export type NewSessionLog = InferInsertModel<typeof sessionLogs>
