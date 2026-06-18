import { useReveal, revealStyle } from '../hooks/useReveal'
import { Link } from 'react-router-dom'

const reviews = [
  {
    name: 'For Checking',
    role: 'Grace',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpfLMMyKMSuZ7-6rBW1jStfssy2yBT0l4nYnTR6MhGuSXVeKcA_LqP7fTGt99RCY_wYQ_ximMHyE9qL3abHs9VY7Z9pz-gQruVMHNcZBjNnRd3xzqJqJNiFXPQWn-sQq0qpWc-rUeEfGMmqtG59QOj1Z63Z1DWKWapjZRMYxm9uDvOFDls3gFA2QBncpDuIeNrlPHOgzXjgypPbxSniNU3petuH3-wN_rNWDVgCR6wNE-M2lWcnSvmUA',
    quote: "The transparency Grace Financial offered during our home loan process was refreshing. They didn't just give us a loan; they gave us a financial roadmap for the next decade.",
  },
]

export default function SuccessStories() {
  const [reviewsRef, reviewsVis] = useReveal()
  const [caseRef, caseVis] = useReveal()
  const [galleryRef, galleryVis] = useReveal()
  const [ctaRef, ctaVis] = useReveal()

  return (
    <main className="mt-giant">
      <section className="relative py-giant overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
          <img className="w-full h-full object-cover grayscale opacity-20" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCNRuwYLnjkqwa-VEBDR2umV-5TueYtS10L0p0QenZZX4aI8OBNBiUalNIrbLvQj8pV_kuH_L2YE1ZGgEhpFsrr_SAAA7Hh9z1ngY-xqwsJomGWbgpGRqGjMWs3Vw528NnfD77v58ZzYoFiphCisplRbwFinejMQem_utL6KBGtVT2oAzPQy1ZjpWAQvCnv5AYbMsp5yJ7YyYDYv_moQuF-MtrLE-DTFpHpOBWpYP0Ne9tuZ2pd_t8CA"/>
        </div>
        <div className="relative z-20 max-w-container-max mx-auto px-lg text-center md:text-left">
          <div className="max-w-2xl">
            <span className="inline-block px-md py-xs bg-secondary-fixed text-on-secondary-fixed rounded-full text-label-md mb-md">Our Success Stories</span>
            <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-lg">Real Stories, Real Financial Growth</h1>
            <p className="text-body-lg text-on-surface-variant mb-xl">Witness the transformation of Indian entrepreneurs and families who partnered with Grace Financial to turn their aspirations into enduring legacies.</p>
            <div className="flex flex-col sm:flex-row gap-md">
              <Link to="/contact" className="bg-primary text-on-primary px-xl py-md rounded-lg text-label-lg shadow-lg hover:opacity-90 transition-all">Start Your Story</Link>
              <Link to="/contact" className="bg-surface border-2 border-primary text-primary px-xl py-md rounded-lg text-label-lg hover:bg-surface-container transition-all">View Case Studies</Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={reviewsRef} className="py-xxl bg-surface-container-low" style={revealStyle(reviewsVis)}>
        <div className="max-w-container-max mx-auto px-lg">
          <div className="flex justify-between items-end mb-xxl">
            <div>
              <h2 className="text-headline-lg text-primary mb-sm">Voice of Trust</h2>
              <p className="text-on-surface-variant text-body-md">What our clients say about their journey with us.</p>
            </div>
            <div className="hidden md:flex gap-sm">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline hover:bg-surface-container-highest transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-outline hover:bg-surface-container-highest transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
            {reviews.map((r) => (
              <div key={r.name} className="glass-card p-xl rounded-xl flex flex-col h-full">
                <div className="flex gap-xs text-tertiary-fixed-dim mb-md">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-body-md text-on-surface mb-xl italic">&ldquo;{r.quote}&rdquo;</p>
                <div className="mt-auto flex items-center gap-md">
                  <img className="w-14 h-14 rounded-full object-cover" alt="" src={r.img} />
                  <div>
                    <h4 className="text-headline-sm text-primary">{r.name}</h4>
                    <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={caseRef} className="py-xxl bg-primary text-on-primary" style={revealStyle(caseVis)}>
        <div className="max-w-container-max mx-auto px-lg">
          <div className="mb-xxl">
            <h2 className="text-display-lg-mobile md:text-display-lg mb-sm">The path to Grace's success.</h2>
            <p className="text-on-primary-container text-body-lg">Real success stories from our valued clients.</p>
          </div>
          <div className="text-center py-xxl border-2 border-dashed border-on-primary/20 rounded-xl">
            <span className="material-symbols-outlined text-[64px] text-on-primary/40 mb-lg">auto_stories</span>
            <h3 className="text-headline-lg mb-sm">Coming Soon</h3>
            <p className="text-body-lg text-on-primary-container max-w-lg mx-auto">We're documenting our success stories. Check back soon to read about how we've helped our clients achieve their financial goals.</p>
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="py-xxl" style={revealStyle(galleryVis)}>
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-xxl">
            <h2 className="text-headline-lg text-primary mb-sm">Grace in Motion</h2>
            <p className="text-on-surface-variant text-body-md">Moments of impact, celebrations, and our growing community.</p>
          </div>
          <div className="masonry-grid gap-lg">
            {[
              { url: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAG2lnoN44jRvXe4sz_CKig7vEU9qYE8KNct1nMadTCTKIpexYBp0rHI4KMgdm3YK9AmcrMlt0gXZWWAEhogqfFkWGF1iXxYJ5A8yEe4cHQiQPqTteH0gshBG9i8cztUXtw94yFhn8iVVm0z=s0'},
            ].map((item, i) => {
              const img = (
                <div key={i} className="mb-lg break-inside-avoid">
                  <div className="rounded-xl overflow-hidden shadow-sm group">
                    <img className="w-full h-auto group-hover:scale-105 transition-transform duration-500" alt="" src={item.url} />
                  </div>
                </div>
              )
              return item.link ? <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">{img}</a> : img
            })}
          </div>
        </div>
      </section>

      <section ref={ctaRef} className="py-xxl bg-secondary text-on-secondary" style={revealStyle(ctaVis)}>
        <div className="max-w-container-max mx-auto px-lg text-center">
          <h2 className="text-display-lg-mobile md:text-display-lg mb-lg">Your Success Story Starts Here</h2>
          <p className="text-body-lg mb-xl max-w-2xl mx-auto opacity-90">Join thousands of satisfied clients who have achieved their financial goals with Grace Financial Consultancy. Our experts are ready to guide you.</p>
          <Link to="/contact" className="bg-white text-secondary px-giant py-md rounded-lg text-label-lg shadow-2xl hover:scale-105 transition-all inline-block">Schedule a Consultation</Link>
        </div>
      </section>
    </main>
  )
}
