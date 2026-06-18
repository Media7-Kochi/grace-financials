import { useState } from 'react'
import { useReveal, revealStyle } from '../hooks/useReveal'
import { Link } from 'react-router-dom'

export default function Eligibility() {
  const [step, setStep] = useState(1)
  const [income, setIncome] = useState(50000)
  const [employment, setEmployment] = useState('')
  const [existingEmis, setExistingEmis] = useState(0)
  const [cibil, setCibil] = useState(750)
  const [showResult, setShowResult] = useState(false)
  const [resultsRef, resultsVis] = useReveal()
  const [formRef, formVis] = useReveal()

  const totalSteps = 4

  const calculateEligibility = () => {
    const multiplier = employment === 'salaried' ? 36 : 30
    const cibilFactor = cibil >= 750 ? 1 : cibil >= 650 ? 0.7 : 0.4
    const disposable = income - existingEmis
    return Math.max(0, Math.round(disposable * multiplier * cibilFactor / 1000) * 1000)
  }

  const getRecommendations = () => {
    const eligible = calculateEligibility()
    const recs = []
    if (eligible >= 300000) recs.push({ name: 'Personal Loan', amount: 'Up to ₹' + Math.min(eligible, 2500000).toLocaleString('en-IN') })
    if (eligible >= 500000) recs.push({ name: 'Vehicle Loan', amount: 'Up to ₹' + Math.min(eligible, 5000000).toLocaleString('en-IN') })
    if (eligible >= 1000000) recs.push({ name: 'Home Loan', amount: 'Up to ₹' + Math.min(eligible, 10000000).toLocaleString('en-IN') })
    if (eligible >= 2000000) recs.push({ name: 'Business Loan', amount: 'Up to ₹' + Math.min(eligible, 5000000).toLocaleString('en-IN') })
    if (recs.length === 0) recs.push({ name: 'Mudra Loan', amount: 'Up to ₹50,000' })
    return recs
  }

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
    else { setShowResult(true) }
  }

  if (showResult) {
    const eligible = calculateEligibility()
    const recs = getRecommendations()
    return (
      <main className="mt-giant">
        <section className="relative pt-xxl pb-giant bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary"></div>
          <div className="relative z-10 max-w-container-max mx-auto px-lg text-center">
            <span className="material-symbols-outlined text-6xl text-secondary-fixed mb-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary mb-md">Your Eligibility Results</h1>
          </div>
        </section>
        <section ref={resultsRef} className="section-padding" style={revealStyle(resultsVis)}>
          <div className="max-w-container-max mx-auto px-lg max-w-2xl">
            <div className="card p-xl text-center mb-xl">
              <p className="text-label-lg text-on-surface-variant mb-xs">Estimated Loan Eligibility</p>
              <p className="text-display-lg text-primary font-bold">₹{eligible.toLocaleString('en-IN')}</p>
            </div>
            <div className="mb-xl">
              <h3 className="text-headline-md text-primary mb-md">Recommended Loan Types</h3>
              <div className="grid grid-cols-1 gap-md">
                {recs.map((r) => (
                  <div key={r.name} className="card p-md flex items-center justify-between">
                    <div className="flex items-center gap-md">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-body-md text-primary font-semibold">{r.name}</span>
                    </div>
                    <span className="text-label-lg text-secondary">{r.amount}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-label-sm text-on-surface-variant text-center mb-xl px-lg">This is an indicative eligibility estimate only. Final approval and loan amount are subject to lender policies, income verification, credit assessment, and documentation.</p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Link to="/apply" className="btn-primary text-center">Proceed to Application</Link>
              <Link to="/contact" className="btn-secondary text-center">Speak to an Advisor</Link>
            </div>
            <button onClick={() => { setShowResult(false); setStep(1) }} className="block mx-auto mt-lg text-label-lg text-secondary hover:text-primary transition-colors">
              Recalculate
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="mt-giant">
      <section className="relative pt-xxl pb-giant bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-lg text-center">
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-primary mb-md">Check Your Loan Eligibility</h1>
          <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto">Find out how much you can borrow in just a few steps</p>
        </div>
      </section>

      <section ref={formRef} className="section-padding" style={revealStyle(formVis)}>
        <div className="max-w-container-max mx-auto px-lg max-w-2xl">
          <div className="flex items-center justify-center gap-sm mb-xl">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-label-md font-bold transition-colors ${s <= step ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface-variant'}`}>
                  {s}
                </div>
                {s < totalSteps && <div className={`w-12 h-1 mx-xs rounded transition-colors ${s < step ? 'bg-primary' : 'bg-outline-variant'}`}></div>}
              </div>
            ))}
          </div>

          <div className="card p-xl">
            {step === 1 && (
              <div>
                <h3 className="text-headline-md text-primary mb-lg">What is your monthly income?</h3>
                <label className="flex justify-between items-center mb-sm">
                  <span className="text-label-lg text-on-surface">Monthly Income</span>
                  <span className="text-headline-sm text-primary">₹{income.toLocaleString('en-IN')}</span>
                </label>
                <input type="range" min="10000" max="500000" step="5000" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full accent-primary" />
                <div className="flex justify-between text-label-sm text-on-surface-variant mt-sm">
                  <span>₹10,000</span>
                  <span>₹5,00,000</span>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-headline-md text-primary mb-lg">Select your employment type</h3>
                <div className="grid grid-cols-2 gap-md">
                  {['salaried', 'self-employed'].map((type) => (
                    <button key={type} onClick={() => setEmployment(type)} className={`p-xl rounded-xl border-2 text-center transition-all ${employment === type ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant text-on-surface-variant hover:border-primary'}`}>
                      <span className="material-symbols-outlined text-3xl block mb-sm">{type === 'salaried' ? 'badge' : 'work_history'}</span>
                      <span className="text-body-md font-semibold capitalize">{type.replace('-', ' ')}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-headline-md text-primary mb-lg">What are your existing monthly EMIs?</h3>
                <label className="flex justify-between items-center mb-sm">
                  <span className="text-label-lg text-on-surface">Existing EMIs</span>
                  <span className="text-headline-sm text-primary">₹{existingEmis.toLocaleString('en-IN')}</span>
                </label>
                <input type="range" min="0" max="200000" step="1000" value={existingEmis} onChange={(e) => setExistingEmis(Number(e.target.value))} className="w-full accent-primary" />
                <div className="flex justify-between text-label-sm text-on-surface-variant mt-sm">
                  <span>₹0</span>
                  <span>₹2,00,000</span>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="text-headline-md text-primary mb-lg">What is your CIBIL Score?</h3>
                <label className="flex justify-between items-center mb-sm">
                  <span className="text-label-lg text-on-surface">CIBIL Score</span>
                  <span className="text-headline-sm text-primary">{cibil}</span>
                </label>
                <input type="range" min="300" max="900" value={cibil} onChange={(e) => setCibil(Number(e.target.value))} className="w-full accent-primary" />
                <div className="flex justify-between text-label-sm text-on-surface-variant mt-sm">
                  <span>300</span>
                  <span>900</span>
                </div>
                <div className={`mt-md p-md rounded-lg text-center text-label-md ${cibil >= 750 ? 'bg-emerald/10 text-emerald' : cibil >= 650 ? 'bg-gold/10 text-gold' : 'bg-error/10 text-error'}`}>
                  {cibil >= 750 ? 'Excellent Score' : cibil >= 650 ? 'Good Score' : 'Needs Improvement'}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-xl pt-lg border-t border-outline-variant/30">
              <button onClick={() => { if (step > 1) setStep(step - 1) }} disabled={step === 1} className={`btn-secondary ${step === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                Previous
              </button>
              <button onClick={handleNext} className="btn-primary">
                {step === totalSteps ? 'Check Eligibility' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
