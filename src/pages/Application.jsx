import { useState } from 'react'
import { useReveal, revealStyle } from '../hooks/useReveal'
import { Link, useSearchParams } from 'react-router-dom'

const countryDigits = {
  '+1': 10, '+44': 11, '+61': 10, '+81': 11, '+86': 11, '+91': 10,
  '+92': 10, '+93': 9, '+94': 10, '+95': 10, '+971': 9, '+974': 8,
  '+966': 9, '+65': 8, '+60': 10, '+62': 11, '+63': 10, '+66': 9,
  '+49': 11, '+33': 9, '+39': 10, '+7': 10, '+55': 11,
}

export default function Application() {
  const [searchParams] = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [countryCode, setCountryCode] = useState('+91')
  const loanType = searchParams.get('type') || ''
  const [formRef, formVis] = useReveal()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    const form = e.target
    const data = {
      fullName: form.fullName.value,
      dateOfBirth: form.dateOfBirth.value,
      phone: form.countryCode.value + form.phone.value,
      email: form.email.value,
      loanType: form.loanType.value,
      loanAmount: form.loanAmount.value,
      employmentType: form.employmentType.value,
      monthlyIncome: form.monthlyIncome.value,
      cibilScore: form.cibilScore.value,
      originalSalarySlip: form.querySelector('input[name="originalSalarySlip"]:checked')?.value || '',
      address: form.address.value,
      notes: form.notes.value,
    }

    try {
      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.errors
          ? Object.values(result.errors).join(', ')
          : result.message || 'Submission failed'
        )
      }

      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="mt-giant relative">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .anim-hero { animation: fadeInUp 0.8s ease-out both; }
        .anim-hero-delay { animation: fadeInUp 0.8s ease-out 0.3s both; }
      `}</style>
      <section className="bg-gradient-to-br from-primary via-primary-container to-primary py-xxl text-on-primary">
        <div className="max-w-container-max mx-auto px-lg">
          <h1 className="anim-hero text-display-lg mb-md">Apply Now</h1>
          <p className="anim-hero-delay text-body-lg max-w-2xl opacity-90">Submit your loan application and our team will get back to you within 24 hours.</p>
        </div>
      </section>

      <section ref={formRef} className="max-w-container-max mx-auto px-lg -mt-xl" style={revealStyle(formVis)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-8 bg-surface-container-lowest p-xxl rounded-xl shadow-lg border border-outline-variant/30">
            <h2 className="text-headline-md text-primary mb-xl">Loan Application Form</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-lg" onSubmit={handleSubmit}>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Full Name *</label>
                <input name="fullName" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your full name" type="text" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Date of Birth</label>
                <input name="dateOfBirth" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" type="date" />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Phone Number *</label>
                <div className="flex gap-sm">
                  <select name="countryCode" className="bg-surface p-md rounded-lg border border-outline-variant text-body-md w-[110px] flex-shrink-0" value={countryCode} onChange={e => setCountryCode(e.target.value)}>
                    <option value="+1">+1 (US)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (AU)</option>
                    <option value="+81">+81 (JP)</option>
                    <option value="+86">+86 (CN)</option>
                    <option value="+91">+91 (IN)</option>
                    <option value="+92">+92 (PK)</option>
                    <option value="+93">+93 (AF)</option>
                    <option value="+94">+94 (LK)</option>
                    <option value="+95">+95 (MM)</option>
                    <option value="+971">+971 (AE)</option>
                    <option value="+974">+974 (QA)</option>
                    <option value="+966">+966 (SA)</option>
                    <option value="+65">+65 (SG)</option>
                    <option value="+60">+60 (MY)</option>
                    <option value="+62">+62 (ID)</option>
                    <option value="+63">+63 (PH)</option>
                    <option value="+66">+66 (TH)</option>
                    <option value="+49">+49 (DE)</option>
                    <option value="+33">+33 (FR)</option>
                    <option value="+39">+39 (IT)</option>
                    <option value="+7">+7 (RU)</option>
                    <option value="+55">+55 (BR)</option>
                  </select>
                  <input name="phone" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your phone number" type="tel" minLength={countryDigits[countryCode]} maxLength={countryDigits[countryCode]} pattern="[0-9]*" required />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Email Address *</label>
                <input name="email" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your email address" type="email" pattern="[a-zA-Z0-9._%+\-]+@gmail\.com" title="Must be a @gmail.com address" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Loan Type *</label>
                <select name="loanType" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" defaultValue={loanType} required>
                  <option value="">Select loan type</option>
                  <option>Home Loan</option>
                  <option>Vehicle Loan</option>
                  <option>Business Loan</option>
                  <option>Personal Loan</option>
                  <option>Education Loan</option>
                  <option>Property Loan</option>
                  <option>Mudra Loan</option>
                  <option>Solar Finance</option>
                </select>
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Loan Amount (₹) *</label>
                <input name="loanAmount" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Enter amount" type="number" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Employment Type</label>
                <select name="employmentType" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md">
                  <option value="">Select employment type</option>
                  <option>Salaried</option>
                  <option>Self-Employed</option>
                  <option>Business Owner</option>
                  <option>Freelancer</option>
                  <option>Retired</option>
                </select>
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Monthly Income (₹)</label>
                <input name="monthlyIncome" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your monthly income" type="number" />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">CIBIL Score</label>
                <input name="cibilScore" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Enter your CIBIL score (e.g., 750)" type="number" min="300" max="900" />
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="text-label-md text-on-surface-variant">Do you have an original salary slip? *</label>
                <div className="flex gap-md">
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="originalSalarySlip" value="Yes" className="peer sr-only" required />
                    <div className="w-full text-center p-md rounded-lg border border-outline-variant text-body-md peer-checked:border-primary peer-checked:bg-primary/20 peer-checked:text-primary transition-all">Yes</div>
                  </label>
                  <label className="flex-1 cursor-pointer">
                    <input type="radio" name="originalSalarySlip" value="No" className="peer sr-only" required />
                    <div className="w-full text-center p-md rounded-lg border border-outline-variant text-body-md peer-checked:border-primary peer-checked:bg-primary/20 peer-checked:text-primary transition-all">No</div>
                  </label>
                </div>
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="text-label-md text-on-surface-variant">Current Address</label>
                <textarea name="address" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your full address" rows="2"></textarea>
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="text-label-md text-on-surface-variant">Additional Notes</label>
                <textarea name="notes" className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Any specific requirements or details..." rows="3"></textarea>
              </div>
              {error && (
                <div className="md:col-span-2 bg-red-50 border border-red-200 text-red-700 p-md rounded-lg text-body-md">
                  {error}
                </div>
              )}
              <div className="md:col-span-2 mt-md">
                <button type="submit" disabled={submitting}
                  className="w-full py-md rounded-lg text-headline-sm transition-all flex justify-center items-center gap-sm bg-primary text-on-primary hover:opacity-90">
                  Submit Application <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-xl">
            <div className="bg-surface-container-lowest p-xl rounded-xl border border-outline-variant/30 space-y-lg">
              <h3 className="text-headline-sm text-primary">Required Documents</h3>
              <ul className="space-y-md text-body-md text-on-surface-variant">
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Aadhaar Card / PAN Card
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Address Proof (Utility Bill / Passport)
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Income Proof (Salary Slips / IT Returns)
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Bank Statements (Last 6 months)
                </li>
                <li className="flex items-start gap-sm">
                  <span className="material-symbols-outlined text-secondary text-sm">description</span>
                  Passport-size Photographs
                </li>
              </ul>
            </div>

            <div className="bg-primary-container p-xl rounded-xl text-on-primary-container space-y-lg">
              <h3 className="text-headline-sm text-white">Need Assistance?</h3>
              <p className="text-body-md opacity-80 text-white">Our loan experts are available to help you with the application process.</p>
              <div className="space-y-md">
                <Link to="/contact" className="flex text-white items-center gap-md text-body-lg hover:underline">
                  <span className="material-symbols-outlined text-white">call</span>
                  +91 97782 92234
                </Link>
                <div className="flex items-start gap-md text-body-lg">
                  <span className="material-symbols-outlined text-white flex-shrink-0">mail</span>
                  <span className="break-all text-white">info.gracefinancialconsultancy@gmail.com</span>
                </div>
              </div>
              <Link to="https://wa.me/919995533809" className="flex items-center gap-md mt-md bg-[#25D366] text-white p-md rounded-lg justify-center hover:shadow-lg transition-all">
                <span className="material-symbols-outlined">chat</span>
                Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
