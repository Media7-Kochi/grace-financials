import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Application() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      e.target.reset()
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <main className="mt-giant">
      <section className="bg-gradient-to-br from-primary via-primary-container to-primary py-xxl text-on-primary">
        <div className="max-w-container-max mx-auto px-lg">
          <h1 className="text-display-lg mb-md">Apply Now</h1>
          <p className="text-body-lg max-w-2xl opacity-90">Submit your loan application and our team will get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-lg -mt-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-8 bg-surface-container-lowest p-xxl rounded-xl shadow-lg border border-outline-variant/30">
            <h2 className="text-headline-md text-primary mb-xl">Loan Application Form</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-lg" onSubmit={handleSubmit}>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Full Name *</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your full name" type="text" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Date of Birth</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" type="date" />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Phone Number *</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your phone number" type="tel" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Email Address *</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your email address" type="email" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Loan Type *</label>
                <select className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" required>
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
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Enter amount" type="number" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Employment Type</label>
                <select className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md">
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
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your monthly income" type="number" />
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="text-label-md text-on-surface-variant">Current Address</label>
                <textarea className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Your full address" rows="2"></textarea>
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="text-label-md text-on-surface-variant">Additional Notes</label>
                <textarea className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Any specific requirements or details..." rows="3"></textarea>
              </div>
              <div className="md:col-span-2 mt-md">
                <button type="submit" disabled={submitting}
                  className={`w-full py-md rounded-lg text-headline-sm transition-all flex justify-center items-center gap-sm ${
                    submitted ? 'bg-emerald-600 text-white' : 'bg-primary text-on-primary hover:opacity-90'
                  }`}>
                  {submitting ? (
                    <><span className="material-symbols-outlined animate-spin">refresh</span> Submitting...</>
                  ) : submitted ? (
                    <><span className="material-symbols-outlined">check_circle</span> Application Submitted Successfully</>
                  ) : (
                    <>Submit Application <span className="material-symbols-outlined">send</span></>
                  )}
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
              <h3 className="text-headline-sm">Need Assistance?</h3>
              <p className="text-body-md opacity-80">Our loan experts are available to help you with the application process.</p>
              <div className="space-y-md">
                <Link to="/contact" className="flex items-center gap-md text-body-lg hover:underline">
                  <span className="material-symbols-outlined">call</span>
                  +91 97782 92234
                </Link>
                <Link to="/contact" className="flex items-center gap-md text-body-lg hover:underline">
                  <span className="material-symbols-outlined">mail</span>
                  info.gracefinancialconsultency@gmail.com
                </Link>
              </div>
              <Link to="https://wa.me/919820012345" className="flex items-center gap-md mt-md bg-[#25D366] text-white p-md rounded-lg justify-center hover:shadow-lg transition-all">
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
