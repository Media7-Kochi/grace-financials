import { useReveal, revealStyle } from '../hooks/useReveal'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formRef, formVis] = useReveal()
  const [mapRef, mapVis] = useReveal()
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const name = form.get('name')
    const phone = form.get('phone')
    const email = form.get('email')
    const loanType = form.get('loanType')
    const message = form.get('message')

    const text = `Hi Grace Financial,%0A%0A${encodeURIComponent('I would like to enquire about a loan.')}%0A%0A${encodeURIComponent(`Name: ${name}`)}%0A${encodeURIComponent(`Phone: ${phone}`)}%0A${encodeURIComponent(`Email: ${email}`)}%0A${encodeURIComponent(`Loan Type: ${loanType}`)}%0A${encodeURIComponent(`Message: ${message}`)}`

    window.open(`https://wa.me/919995533938?text=${text}`, '_blank')
  }

  return (
    <main className="mt-giant">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .anim-hero { animation: fadeInUp 0.8s ease-out both; }
        .anim-hero-delay { animation: fadeInUp 0.8s ease-out 0.3s both; }
      `}</style>
      <section className="bg-gradient-to-br from-primary via-primary-container to-primary py-xxl text-on-primary">
        <div className="max-w-container-max mx-auto px-lg">
          <h1 className="anim-hero text-display-lg mb-md">Get in Touch</h1>
          <p className="anim-hero-delay text-body-lg max-w-2xl opacity-90">Expert financial guidance is just a message away. Our team of specialists is ready to help you navigate your growth journey.</p>
        </div>
      </section>

      <section ref={formRef} className="max-w-container-max mx-auto px-lg -mt-xl" style={revealStyle(formVis)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-7 bg-surface-container-lowest p-xxl rounded-xl shadow-lg border border-outline-variant/30">
            <h2 className="text-headline-md text-primary mb-xl">Quick Loan Enquiry</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-lg" onSubmit={handleSubmit}>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Full Name</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="your full name" type="text" name="name" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Phone Number</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="your phone number" type="tel" name="phone" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Email Address</label>
                <input className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="your email address" type="email" name="email" required />
              </div>
              <div className="space-y-xs">
                <label className="text-label-md text-on-surface-variant">Loan Type</label>
                <select className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" name="loanType">
                  <option>Home Loan</option>
                  <option>Vehicle Loan</option>
                  <option>Business Loan</option>
                  <option>Personal Loan</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-xs">
                <label className="text-label-md text-on-surface-variant">Message</label>
                <textarea className="w-full bg-surface p-md rounded-lg border border-outline-variant text-body-md" placeholder="Tell us about your requirements..." name="message" rows="4"></textarea>
              </div>
              <div className="md:col-span-2 mt-md">
                <button type="submit"
                  className="w-full py-md rounded-lg text-headline-sm transition-all flex justify-center items-center gap-sm bg-primary text-on-primary hover:opacity-90">
                  Submit Enquiry <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-xl">
            <div className="bg-surface-container-lowest p-xl rounded-xl border border-outline-variant/30 space-y-lg">
              <h3 className="text-headline-sm text-primary">Contact Information</h3>
              <div className="flex gap-lg items-start">
                <div className="bg-primary-container p-sm rounded-lg text-on-primary-container">
                  <span className="material-symbols-outlined text-white">call</span>
                </div>
                <div className="min-w-0">
                  <p className="text-label-md text-on-surface-variant">Phone</p>
                  <a href="tel:+919995533988" className="text-body-lg text-primary hover:underline block break-words">+91 99955 33988</a>
                  <a href="tel:+919995533578" className="text-body-md text-on-surface-variant hover:underline block break-words">+91 99955 33578</a>
                  <a href="tel:+919995533938" className="text-body-md text-on-surface-variant hover:underline block break-words">+91 99955 33938</a>
                </div>
              </div>
              <div className="flex gap-lg items-start">
                <div className="bg-primary-container p-sm rounded-lg text-on-primary-container">
                  <span className="material-symbols-outlined text-white">mail</span>
                </div>
                <div className="min-w-0">
                  <p className="text-label-md text-on-surface-variant">Email</p>
                  <p className="text-body-xl text-primary break-words">info.gracefinancialconsultancy@gmail.com</p>
                  <p className="text-body-md text-on-surface-variant break-words">anvikochi@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-lg items-start">
                <div className="bg-primary-container p-sm rounded-lg text-on-primary-container">
                  <span className="material-symbols-outlined text-white">location_on</span>
                </div>
                <div className="min-w-0">
                  <p className="text-label-md text-on-surface-variant">Office Address</p>
                  <p className="text-body-lg text-primary break-words">3rd floor, National Pearl Star Building National Builders, 3D, behind Changampuzha Metro Station, Edappally, Kochi, Kerala 682024</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-container p-xl rounded-xl text-white space-y-lg">
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

            <a href="https://wa.me/919995533809" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white p-lg rounded-xl flex items-center justify-between text-headline-sm hover:shadow-xl transition-all group">
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined text-[32px]">chat</span>
                <span>WhatsApp Us</span>
              </div>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      <a ref={mapRef} href="https://www.google.com/maps/place/Media7/@10.0146413,76.3015766,249m/data=!3m1!1e3!4m6!3m5!1s0x3b080da588e92727:0xfb57d7fdb58a3559!8m2!3d10.014936!4d76.3018219!16s%2Fg%2F11mcyq76md?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="mt-giant w-full h-[500px] bg-surface-container relative overflow-hidden block" style={revealStyle(mapVis)}>
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
      </a>
    </main>
  )
}
