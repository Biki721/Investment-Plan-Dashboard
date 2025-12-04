export function IncrementRules() {
  return (
    <div>
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
        Salary increase rule (automatic suggestion)
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        When your salary rises, follow these suggested splits of the <em>increment</em>:
      </p>
      <ul className="mt-3 space-y-2 text-sm text-slate-300 ml-4">
        <li>
          • <strong>50%</strong> → SIPs (equity) (aggressive wealth building)
        </li>
        <li>
          • <strong>20%</strong> → PPF + NPS (stable + retirement; split 60/40 between PPF and NPS)
        </li>
        <li>
          • <strong>20%</strong> → Short-term FD / Emergency top-up or higher SIPs
        </li>
        <li>
          • <strong>10%</strong> → Lifestyle / discretionary increase (enjoyment)
        </li>
      </ul>
    </div>
  )
}
