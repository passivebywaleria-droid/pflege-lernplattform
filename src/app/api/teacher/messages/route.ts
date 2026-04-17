import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import { teacherStudentMessages, users } from "@/lib/db/schema"
import { requireAuth } from "@/lib/auth/require-auth"
import { eq, or, and, desc } from "drizzle-orm"
import { z } from "zod"

// GET: Nachrichten für den Lehrer laden
export async function GET() {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const messages = await db
      .select({
        id: teacherStudentMessages.id,
        senderId: teacherStudentMessages.senderId,
        receiverId: teacherStudentMessages.receiverId,
        content: teacherStudentMessages.content,
        contextLeId: teacherStudentMessages.contextLeId,
        contextStepId: teacherStudentMessages.contextStepId,
        isRead: teacherStudentMessages.isRead,
        createdAt: teacherStudentMessages.createdAt,
      })
      .from(teacherStudentMessages)
      .where(
        or(
          eq(teacherStudentMessages.senderId, auth.userId),
          eq(teacherStudentMessages.receiverId, auth.userId)
        )
      )
      .orderBy(desc(teacherStudentMessages.createdAt))
      .limit(100)

    return NextResponse.json(messages)
  } catch (error) {
    console.error("Teacher messages GET error:", error)
    return NextResponse.json({ error: "Laden fehlgeschlagen" }, { status: 500 })
  }
}

// POST: Nachricht senden
const messageSchema = z.object({
  receiverId: z.string().uuid(),
  content: z.string().min(1).max(5000),
  contextLeId: z.string().optional(),
  contextStepId: z.string().optional(),
})

export async function POST(request: NextRequest) {
  const auth = await requireAuth()
  if (auth instanceof NextResponse) return auth

  try {
    const body = await request.json()
    const parsed = messageSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 })
    }

    const [msg] = await db
      .insert(teacherStudentMessages)
      .values({
        senderId: auth.userId,
        receiverId: parsed.data.receiverId,
        content: parsed.data.content,
        contextLeId: parsed.data.contextLeId ?? null,
        contextStepId: parsed.data.contextStepId ?? null,
      })
      .returning({ id: teacherStudentMessages.id })

    return NextResponse.json({ id: msg.id }, { status: 201 })
  } catch (error) {
    console.error("Teacher messages POST error:", error)
    return NextResponse.json({ error: "Senden fehlgeschlagen" }, { status: 500 })
  }
}
