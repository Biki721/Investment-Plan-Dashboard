"use client"

import { useState } from "react"
import { BASELINE_CONFIG } from "@/lib/constants"
import { calculateAllocations } from "@/lib/calculations"
import { DashboardHeader } from "./dashboard-header"
import { AllocationCard } from "./allocation-card"
import { ExplanationsCard } from "./explanations-card"
import { SummaryCard } from "./summary-card"

export function DashboardContainer() {
  const [salary, setSalary] = useState(BASELINE_CONFIG.salary)

  const allocations = calculateAllocations(salary)
  const rent = BASELINE_CONFIG.rent
  const disposable = salary - rent

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 p-7 text-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <DashboardHeader salary={salary} />
          <AllocationCard
            salary={salary}
            setSalary={setSalary}
            allocations={allocations}
            rent={rent}
            disposable={disposable}
          />
          <ExplanationsCard />
        </div>

        <div className="space-y-6">
          <SummaryCard allocations={allocations} salary={salary} />
        </div>
      </div>

      <footer className="text-center text-slate-400 text-sm mt-16">
        Created for you — interactive plan. Tip: revisit allocations every 6–12 months or after major life events.
      </footer>
    </div>
  )
}
