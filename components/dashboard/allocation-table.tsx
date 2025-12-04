import { ALLOCATION_LABELS } from "@/lib/constants"
import type { Allocations } from "@/lib/types"

interface AllocationTableProps {
  allocations: Allocations
  total: number
}

export function AllocationTable({ allocations, total }: AllocationTableProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Allocation</h3>
      <div className="flex justify-between text-xs text-slate-400 mb-3 px-2">
        <span>Category</span>
        <span>Monthly (₹)</span>
      </div>
      <table className="w-full text-sm">
        <tbody className="divide-y divide-white/5">
          {Object.entries(allocations).map(([key, value]) => (
            <tr key={key} className="hover:bg-white/5 transition-colors">
              <td className="py-2 px-2 font-medium text-blue-300">
                {ALLOCATION_LABELS[key as keyof typeof ALLOCATION_LABELS] || key}
              </td>
              <td className="py-2 px-2 text-right text-slate-200">₹{value.toLocaleString("en-IN")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 pt-4 border-t border-white/10 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400">Total allocated:</span>
          <strong className="text-cyan-400">₹{total.toLocaleString("en-IN")}</strong>
        </div>
      </div>
    </div>
  )
}
