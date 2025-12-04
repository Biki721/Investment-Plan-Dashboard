export const BASELINE_CONFIG = {
  salary: 62000,
  rent: 20000,
  targetEmergencyFund: 120000,
  minSalary: 30000,
  maxSalary: 200000,
  allocations: {
    Emergency: 5000,
    SIP: 15000,
    PPF: 4000,
    NPS: 3000,
    FD: 3000,
    Health: 800,
    ParentsHealth: 2500,
    Personal: 8700,
  },
}

export const INCREMENT_RULES = {
  SIP: 0.5,
  PPF_NPS: 0.2,
  PPF_SPLIT: 0.6,
  FD: 0.2,
  Lifestyle: 0.1,
  Emergency: 0.15,
}

export const ALLOCATION_LABELS: Record<string, string> = {
  Emergency: "Emergency Fund",
  SIP: "SIPs (Equity MFs)",
  PPF: "PPF",
  NPS: "NPS",
  FD: "Short-term FD / Auto Sweep",
  Health: "Health Insurance (self)",
  ParentsHealth: "Parents' Health Insurance (avg)",
  Personal: "Personal expenses + buffer",
}

export const SUMMARY_TABLE_DATA = [
  { key: "Emergency", label: "Emergency Fund", defaultAmount: 5000 },
  { key: "SIP", label: "SIPs (Equity MFs)", defaultAmount: 15000 },
  { key: "PPF", label: "PPF", defaultAmount: 4000 },
  { key: "NPS", label: "NPS", defaultAmount: 3000 },
  { key: "FD", label: "Short-term FD / Auto Sweep", defaultAmount: 3000 },
  { key: "Health", label: "Health Insurance (self)", defaultAmount: 800 },
  { key: "ParentsHealth", label: "Parents' Health Insurance (avg)", defaultAmount: 2500 },
  { key: "Personal", label: "Personal expenses + buffer", defaultAmount: 8700 },
]
