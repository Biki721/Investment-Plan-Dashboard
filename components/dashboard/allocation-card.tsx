"use client"

import { SalarySlider } from "./salary-slider"
import { AllocationTable } from "./allocation-table"
import { AllocationBars } from "./allocation-bars"
import { IncrementRules } from "./increment-rules"
import type { Allocations } from "@/lib/types"

interface AllocationCardProps {
  salary: number
  setSalary: (salary: number) => void
  allocations: Allocations
  rent: number
  disposable: number
}

export function AllocationCard({ salary, setSalary, allocations, rent, disposable }: AllocationCardProps) {
  const total = Object.values(allocations).reduce((a, b) => a + b, 0)

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:shadow-xl transition-shadow">
      <SalarySlider salary={salary} onSalaryChange={setSalary} />

      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="mb-4 text-slate-300 text-sm">
          <strong>Rent:</strong> ₹{rent.toLocaleString("en-IN")} | <strong>Disposable:</strong> ₹
          {disposable.toLocaleString("en-IN")}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <AllocationTable allocations={allocations} total={total} />
        <AllocationBars allocations={allocations} disposable={disposable} />
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <IncrementRules />
      </div>

      <div className="mt-6 pt-6 border-t border-white/10">
        <QuickNotes />
      </div>
    </div>
  )
}

function QuickNotes() {
  return (
    <div>
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Quick notes</h3>
      <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
        <p>
          • <strong>Health insurance rule:</strong> As salary increases, upgrade your cover. Ideally → increase sum
          insured every 2–3 years or when salary rises by 20–30%. Not auto‑calculated, but keep this in mind.
        </p>
        <p>
          • <strong>How many SIPs?</strong> 3–5 SIPs is practical: a large-cap or flexi-cap, a mid/small-cap or
          thematic, and an ELSS for tax saving. You can split the SIP amount across these funds.
        </p>
        <p>
          • <strong>SIP duration</strong>: 5–15 years depending on goals. Longer duration smooths volatility.
        </p>
        <p>
          • <strong>For salary {">"}₹1,00,000</strong>: keep 40–50% of incremental savings into SIPs and 25–30% into
          long-term tax-saving instruments (PPF/NPS/ELSS).
        </p>
      </div>
    </div>
  )
}
