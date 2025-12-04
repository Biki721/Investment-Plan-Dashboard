"use client"

import { BASELINE_CONFIG } from "@/lib/constants"

interface SalarySliderProps {
  salary: number
  onSalaryChange: (salary: number) => void
}

export function SalarySlider({ salary, onSalaryChange }: SalarySliderProps) {
  const percentage =
    ((salary - BASELINE_CONFIG.minSalary) / (BASELINE_CONFIG.maxSalary - BASELINE_CONFIG.minSalary)) * 100

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-2">
          Monthly Net Salary (₹): <strong className="text-cyan-400">{salary.toLocaleString("en-IN")}</strong>
        </label>
        <input
          type="range"
          min={BASELINE_CONFIG.minSalary}
          max={BASELINE_CONFIG.maxSalary}
          step={1000}
          value={salary}
          onChange={(e) => onSalaryChange(Number(e.target.value))}
          className="w-full h-2 bg-gradient-to-r from-cyan-400 to-slate-600 rounded-lg appearance-none cursor-pointer accent-blue-400"
          style={{
            background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${percentage}%, rgba(255,255,255,0.15) ${percentage}%, rgba(255,255,255,0.15) 100%)`,
          }}
        />
      </div>
    </div>
  )
}
