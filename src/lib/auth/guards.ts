import { NextResponse } from "next/server"
import { getSession, type SessionPayload } from "./session"

type Role = SessionPayload["role"]

export async function requireAuth(): Promise<SessionPayload> {
  const session = await getSession()
  if (!session) {
    throw new AuthError("Not authenticated", 401)
  }
  return session
}

export async function requireRole(...roles: Role[]): Promise<SessionPayload> {
  const session = await requireAuth()
  if (!roles.includes(session.role)) {
    throw new AuthError("Insufficient permissions", 403)
  }
  return session
}

export class AuthError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message)
    this.name = "AuthError"
  }
}

export function handleAuthError(error: unknown): NextResponse {
  if (error instanceof AuthError) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode }
    )
  }
  return NextResponse.json({ error: "Internal server error" }, { status: 500 })
}
