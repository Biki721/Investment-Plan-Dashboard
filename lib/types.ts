export interface Allocations {
  Emergency: number
  SIP: number
  PPF: number
  NPS: number
  FD: number
  Health: number
  Personal: number
}

export interface AllocationConfig {
  salary: number
  rent: number
  targetEmergencyFund: number
  allocations: Allocations
}
