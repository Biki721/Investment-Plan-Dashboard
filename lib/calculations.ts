import { BASELINE_CONFIG, INCREMENT_RULES } from "./constants"
import type { Allocations } from "./types"

export function calculateAllocations(salary: number): Allocations {
  const rent = BASELINE_CONFIG.rent
  const disposable = salary - rent

  // Start with baseline allocations
  const allocs = { ...BASELINE_CONFIG.allocations }

  // Calculate increment from baseline
  const increment = Math.max(0, salary - BASELINE_CONFIG.salary)

  if (increment > 0) {
    // Apply increment rules
    const incToSIP = Math.round(increment * INCREMENT_RULES.SIP)
    const incToPPF_NPS = Math.round(increment * INCREMENT_RULES.PPF_NPS)
    const incToFD = Math.round(increment * INCREMENT_RULES.FD)
    const incToLifestyle = Math.round(increment * INCREMENT_RULES.Lifestyle)

    // Split PPF and NPS 60:40
    const incToPPF = Math.round(incToPPF_NPS * INCREMENT_RULES.PPF_SPLIT)
    const incToNPS = incToPPF_NPS - incToPPF

    // Add emergency fund growth until target met
    const currentAnnualEmergency = allocs.Emergency * 12
    if (currentAnnualEmergency < BASELINE_CONFIG.targetEmergencyFund) {
      const incToEmergency = Math.round(increment * INCREMENT_RULES.Emergency)
      allocs.Emergency += incToEmergency
    }

    // Apply increments
    allocs.SIP += incToSIP
    allocs.PPF += incToPPF
    allocs.NPS += incToNPS
    allocs.FD += incToFD
    allocs.Personal = Math.max(1000, allocs.Personal + incToLifestyle)
  } else if (salary < BASELINE_CONFIG.salary) {
    // Scale down proportionally if salary is less than baseline
    const baselineDisposable = BASELINE_CONFIG.salary - BASELINE_CONFIG.rent
    const scale = disposable / baselineDisposable

    for (const key in allocs) {
      if (key !== "Health") {
        allocs[key as keyof Allocations] = Math.round(allocs[key as keyof Allocations] * scale)
      }
    }
  }

  // Ensure total doesn't exceed disposable
  const total = Object.values(allocs).reduce((a, b) => a + b, 0)
  if (total > disposable) {
    const fixed = allocs.Health
    const adjustable = total - fixed
    const targetAdjustable = Math.max(0, disposable - fixed)
    const scale = targetAdjustable / adjustable

    for (const key in allocs) {
      if (key !== "Health") {
        allocs[key as keyof Allocations] = Math.round(allocs[key as keyof Allocations] * scale)
      }
    }
  }

  return allocs
}
