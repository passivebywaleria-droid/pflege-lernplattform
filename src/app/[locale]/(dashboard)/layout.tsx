import { getSession } from "@/lib/auth/session"
import { redirect } from "next/navigation"
import { Sidebar } from "@/components/layout/sidebar"
import { TopBar } from "@/components/layout/top-bar"
import { EinstufungsGuard } from "@/components/auth/einstufungs-guard"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()
  if (!session) redirect("/login")

  return (
    <div className="flex h-screen">
      <Sidebar role={session.role} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TopBar userName={undefined} />
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
          <EinstufungsGuard>
            {children}
          </EinstufungsGuard>
        </main>
        {/* BottomNav wird global via GlobalTabBar im Root-Layout gerendert */}
      </div>
    </div>
  )
}
