import type React from "react"
export function ExplanationsCard() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <h2 className="text-lg font-semibold mb-6">Explanations & Tax pointers</h2>

      <div className="space-y-6">
        <Section
          title="PPF vs NPS"
          content={
            <>
              <p>
                <strong>PPF (Public Provident Fund)</strong> — government-backed long-term savings scheme (15-year
                lock-in + extensions). Interest is tax-free and the entire maturity is exempt. Good for conservative,
                tax-free growth. Contributions (up to ₹1.5 lakh per year) are eligible for deduction under Section 80C.
              </p>
              <p className="mt-3">
                <strong>NPS (National Pension System)</strong> — retirement-focused product with equity and debt
                exposure. Tax benefits: contributions get deduction under 80C (up to ₹1.5L combined) and additional
                deduction of ₹50,000 under 80CCD(1B) for NPS. At maturity, 60% of corpus withdrawn is tax-free while 40%
                must be used to buy an annuity (tax rules depend on changed laws; treat this as general guidance).
              </p>
              <p className="mt-3">
                <strong>Key difference:</strong> PPF is fully EEE (Exempt-Exempt-Exempt) — contributions (within limits)
                get 80C, interest is tax-free, and maturity is tax-free. NPS gives additional tax flexibility and equity
                exposure but is partly taxable at withdrawal and requires annuity purchase for a portion.
              </p>
            </>
          }
        />

        <Section
          title="What is EEE (Exempt-Exempt-Exempt)?"
          content={
            <p>
              "EEE" means: <strong>Exempt at contribution</strong> (you get tax deduction now),{" "}
              <strong>Exempt on accrual/interest</strong> (interest/growth is tax-free), and{" "}
              <strong>Exempt at withdrawal</strong> (maturity amount is tax-free). PPF follows EEE fully.
            </p>
          }
        />

        <Section
          title="Annuity, FD, and tax-free comparison"
          content={
            <>
              <p>
                • <strong>Annuity</strong> — regular income stream you buy from an insurer (using retirement corpus).
                Annuity payouts are usually taxed as income in the year received (depends on product). Annuities are for
                guaranteed lifetime income but are not tax-free usually.
              </p>
              <p className="mt-2">
                • <strong>FD (Fixed Deposit)</strong> — interest is taxable as per your income slab. Senior citizen FDs
                or tax-saving FDs (5-year) have different rules; tax-saving FDs qualify for 80C but interest is taxable.
              </p>
              <p className="mt-2">
                • <strong>PPF</strong> — tax-free maturity (EEE). For tax-free retirement-like corpus, PPF is better
                than plain FD because FD interest is taxed.
              </p>
            </>
          }
        />
      </div>
    </div>
  )
}

interface SectionProps {
  title: string
  content: React.ReactNode
}

function Section({ title, content }: SectionProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">{title}</h3>
      <div className="text-sm text-slate-300 space-y-2 leading-relaxed">{content}</div>
    </div>
  )
}
