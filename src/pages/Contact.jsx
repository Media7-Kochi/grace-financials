import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
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
          <h1 className="text-display-lg mb-md">Get in Touch</h1>
          <p className="text-body-lg max-w-2xl opacity-90">Expert financial guidance is just a message away. Our team of specialists is ready to help you navigate your growth journey.</p>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-lg -mt-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-7 bg-surface-container-lowest p-xxl rounded-xl shadow-lg border border-outline-variant/30">
            <h2 className="text-headline-md text-primary mb-xl">Quick Loan Enquiry</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-lg" onSubmit={handleSubmit}>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Full Name</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="your full name" type="text" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Phone Number</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="your phone number" type="tel" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Email Address</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="your email address" type="email" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Loan Type</label>
                <select className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md">
                  <option>Home Loan</option>
                  <option>Vehicle Loan</option>
                  <option>Business Loan</option>
                  <option>Personal Loan</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="text-label-md text-on-surface-variant">Message</label>
                <textarea className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Tell us about your requirements..." rows="4"></textarea>
              </div>
              <div className="md:col-span-2 mt-md">
                <button type="submit" disabled={submitting}
                  className={`w-full py-md rounded-lg text-headline-sm transition-all flex justify-center items-center gap-sm ${
                    submitted ? 'bg-emerald-600 text-white' : 'bg-primary text-on-primary hover:opacity-90'
                  }`}>
                  {submitting ? (
                    <><span className="material-symbols-outlined animate-spin">refresh</span> Submitting...</>
                  ) : submitted ? (
                    <><span className="material-symbols-outlined">check_circle</span> Success</>
                  ) : (
                    <>Submit Enquiry <span className="material-symbols-outlined">send</span></>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-xl">
            <div className="bg-surface-container-lowest p-xl rounded-xl border border-outline-variant/30 space-y-lg">
              <h3 className="text-headline-sm text-primary">Contact Information</h3>
              <div className="flex gap-lg items-start">
                <div className="bg-primary-container p-sm rounded-lg text-on-primary-container">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="text-label-md text-on-surface-variant">Phone</p>
                  <p className="text-body-lg text-primary">+91 99955 33809</p>
                  <p className="text-body-md text-on-surface-variant">+91 97782 92234</p>
                </div>
              </div>
              <div className="flex gap-lg items-start">
                <div className="bg-primary-container p-sm rounded-lg text-on-primary-container">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="text-label-md text-on-surface-variant">Email</p>
                  <p className="text-body-xl text-primary">info.gracefinancialconsultency@gmail.com</p>
                  <p className="text-body-md text-on-surface-variant">anvikochi@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-lg items-start">
                <div className="bg-primary-container p-sm rounded-lg text-on-primary-container">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="text-label-md text-on-surface-variant">Office Address</p>
                  <p className="text-body-lg text-primary">3rd floor, National Pearl Star Building National Builders, 3D, behind Changampuzha Metro Station, Edappally, Kochi, Kerala 682024</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-container p-xl rounded-xl text-on-primary-container space-y-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-headline-sm">Business Hours</h3>
                <span className="bg-emerald-500/20 text-emerald-300 text-label-sm px-sm py-xs rounded-full">Open Now</span>
              </div>
              <ul className="space-y-sm text-body-md opacity-80">
                <li className="flex justify-between"><span>Monday - Saturday</span><span>09:30 AM - 05:30 PM</span></li>
                <li className="flex justify-between text-on-primary-container/60"><span>Sunday</span><span>Closed</span></li>
              </ul>
              <hr className="border-on-primary-container/20" />
              <div className="flex gap-lg justify-center">
                <a className="hover:text-secondary-fixed transition-colors" href="#"><span className="material-symbols-outlined">language</span></a>
                <a className="hover:text-secondary-fixed transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
                <a className="hover:text-secondary-fixed transition-colors" href="#"><span className="material-symbols-outlined">hub</span></a>
              </div>
            </div>

            <Link to="https://wa.me/919820012345" className="bg-[#25D366] text-white p-lg rounded-xl flex items-center justify-between text-headline-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined text-[32px]">chat</span>
                <span>WhatsApp Us</span>
              </div>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-giant w-full h-[500px] bg-surface-container relative overflow-hidden">
        <div className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 transition-all duration-700">
          <img className="w-full h-full object-cover" alt=""
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACrep7j_SvwojIBudv3U_ygD7-0sqQytHyeFCZUotZvKf8oE1zMLP_39HRPniVWwKiOg5llHyNPoBh0Iij1Mm0wwiVF20hFRdpYKQsOWYcr6bJ-_VEC0qD9MONviEK6LhvyfdgDjAe6Q0v5CweOmmjl5J1ahsaKLcC5xSS2ujS-G-BAdEzb3esQn6lnvZ0sp30EdDGUvD1RiEvI53rqZhvznsF0RrgILiHT8orLDh6wao2rV_mQKrlLw" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary text-on-primary p-lg rounded-xl shadow-2xl flex items-center gap-md animate-bounce">
            <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
            <span className="text-headline-sm">We are here</span>
          </div>
        </div>
      </section>
    </main>
  )
}
