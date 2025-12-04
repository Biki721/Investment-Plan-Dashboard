import { SUMMARY_TABLE_DATA } from "@/lib/constants"
import type { Allocations } from "@/lib/types"

interface SummaryCardProps {
  allocations: Allocations
  salary: number
}

export function SummaryCard({ allocations, salary }: SummaryCardProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Summary</h3>
          <div className="text-2xl font-bold text-cyan-400">₹{salary.toLocaleString("en-IN")}</div>
        </div>

        <div className="text-sm text-slate-300 mb-6">Suggested allocations (monthly)</div>

        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-2 text-left text-slate-400 font-medium text-xs">Investment</th>
              <th className="py-2 text-right text-slate-400 font-medium text-xs">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {SUMMARY_TABLE_DATA.map((item) => (
              <tr key={item.key} className="hover:bg-white/5">
                <td className="py-2 text-slate-200">{item.label}</td>
                <td className="py-2 text-right text-blue-300 font-medium">
                  ₹
                  {allocations[item.key as keyof Allocations]?.toLocaleString("en-IN") ||
                    item.defaultAmount.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400">
          If salary increases, use the slider on the left to see the suggested increase per bucket (rules shown in the
          main card).
        </div>
      </div>

      <ActionItems />
      <SIPGuide />
    </div>
  )
}

function ActionItems() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Action items (first month)</h3>
      <ol className="text-sm text-slate-300 space-y-2 ml-4">
        <li>1. Set up 3 SIP mandates via your brokerage or mutual fund app.</li>
        <li>2. Open/confirm PPF account and start monthly contributions or lump sum up to ₹1.5L/yr.</li>
        <li>3. Enable Auto Sweep / Flexi FD in your bank for surplus.</li>
        <li>4. Buy family health insurance (include parents if needed).</li>
      </ol>
    </div>
  )
}

function SIPGuide() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">How many SIPs?</h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        Start with 3 SIPs: <strong>Large-cap / Flexi-cap</strong> (core), <strong>Mid/Small / Thematic</strong>{" "}
        (growth), and <strong>ELSS</strong> (tax saving). Add 1–2 more only if you can track them. Avoid 8–10 tiny SIPs;
        it becomes hard to manage and cost-inefficient.
      </p>
    </div>
  )
}
