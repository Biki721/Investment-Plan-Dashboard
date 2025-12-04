import type { Allocations } from "@/lib/types"

interface AllocationBarsProps {
  allocations: Allocations
  disposable: number
}

export function AllocationBars({ allocations, disposable }: AllocationBarsProps) {
  const getPercentage = (value: number) => Math.min(100, Math.round((value / disposable) * 100))

  const bars = [
    { key: "Emergency", label: "Emergency Fund" },
    { key: "SIP", label: "SIPs (Equity MFs)" },
    { key: "PPF", label: "PPF" },
    { key: "NPS", label: "NPS" },
    { key: "FD", label: "Short-term FD / Auto Sweep" },
    { key: "Health", label: "Health Insurance (self)" },
    { key: "ParentsHealth", label: "Parents' Health Insurance (avg)" },
    { key: "Personal", label: "Personal expenses + buffer" },
  ]

  return (
    <div>
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Visual breakdown</h3>
      <div className="space-y-4">
        {bars.map(({ key, label }) => (
          <div key={key}>
            <div className="text-xs text-slate-400 mb-1">{label}</div>
            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-200"
                style={{
                  width: `${getPercentage(allocations[key as keyof Allocations])}%`,
                }}
              />
            </div>
            <div className="text-xs text-slate-500 mt-1">
              {getPercentage(allocations[key as keyof Allocations])}% of disposable
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
