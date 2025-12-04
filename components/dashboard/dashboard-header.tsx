interface DashboardHeaderProps {
  salary: number
}

export function DashboardHeader({ salary }: DashboardHeaderProps) {
  return (
    <header className="pt-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        💼 Investment Plan Dashboard
      </h1>
      <p className="text-slate-400 text-sm mt-1">Monthly Plan</p>
    </header>
  )
}
