import { Link } from 'react-router-dom'

const services = [
  { icon: 'directions_car', title: 'Vehicle Loans', desc: 'Competitive rates and quick approvals for your next private or commercial vehicle.', slug: 'vehicle' },
  { icon: 'home', title: 'Home Loans', desc: 'Achieve your dream of homeownership with our low-interest rate mortgage options.', slug: 'home' },
  { icon: 'business_center', title: 'Business Loans', desc: 'Fuel your growth with tailored working capital and expansion loan solutions.', slug: 'business' },
  { icon: 'school', title: 'Education Loans', desc: 'Invest in your future with loans that cover global tuition and living expenses.', slug: 'education' },
]

export default function Home() {
  return (
    <main className="mt-giant">
      {/* Hero Section */}
      <section className="relative pb-xxl md:pb-giant bg-primary overflow-hidden min-h-[700px]">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            className="w-full h-full object-cover"
            src="https://5.imimg.com/data5/SELLER/Default/2021/12/UI/GZ/DT/51665645/finance-oraganisation-office-interior-design-1000x1000.png"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
        <div className="max-w-container-max mx-auto px-lg relative z-20 flex flex-col md:flex-row items-center min-h-[600px] gap-xl">
          <div className="w-full md:w-3/5 text-white pt-xl md:pt-0">
            <h1 className="text-display-lg-mobile md:text-display-lg mb-md leading-tight">
              Your Trusted Financial Partner for Every Financial Goal
            </h1>
            <p className="text-body-lg text-on-primary-container max-w-xl mb-xl">
              Experience simplified loan processes tailored for individuals and businesses. From dream homes to scaling enterprises, we guide you through every financial milestone with expertise and transparency.
            </p>
            <div className="flex flex-wrap gap-md">
              <Link to="/contact" className="bg-secondary text-white px-xl py-md rounded-lg font-label-lg hover:bg-secondary/90 transition-colors inline-block">
                Get Started
              </Link>
              <Link to="/services" className="border-2 border-secondary text-secondary-fixed px-xl py-md rounded-lg font-label-lg hover:bg-secondary/10 transition-colors inline-block">
                View Loan Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-surface py-xl border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-lg items-center text-center">
            <div className="flex flex-col">
              <span className="text-headline-lg text-primary">15k+</span>
              <span className="text-label-md text-on-surface-variant">Happy Customers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-lg text-primary">₹500Cr+</span>
              <span className="text-label-md text-on-surface-variant">Loans Disbursed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-lg text-primary">10+</span>
              <span className="text-label-md text-on-surface-variant">Banking Partners</span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-lg text-primary">98%</span>
              <span className="text-label-md text-on-surface-variant">Approval Rate</span>
            </div>
          </div>
          <div className="mt-xl flex flex-wrap justify-center items-center gap-xl grayscale opacity-60">
            <span className="text-headline-sm text-outline">HDFC BANK</span>
            <span className="text-headline-sm text-outline">ICICI BANK</span>
            <span className="text-headline-sm text-outline">SBI</span>
            <span className="text-headline-sm text-outline">AXIS BANK</span>
            <span className="text-headline-sm text-outline">IDFC FIRST</span>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-xxl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-giant">
            <h2 className="text-headline-lg text-primary mb-sm">Our Loan Solutions</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">Flexible and transparent financial products designed to meet your specific life and business goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-lg rounded-xl custom-shadow hover:-translate-y-2 transition-all duration-300 flex flex-col group">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-lg group-hover:bg-secondary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-secondary group-hover:text-white">{service.icon}</span>
                </div>
                <h3 className="text-headline-sm text-primary mb-sm">{service.title}</h3>
                <p className="text-body-sm text-on-surface-variant flex-grow mb-lg">{service.desc}</p>
                <Link to="/services" className="text-secondary font-label-lg flex items-center gap-xs">
                  Learn More <span className="material-symbols-outlined text-body-md">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-xxl bg-white">
        <div className="max-w-container-max mx-auto px-lg flex flex-col md:flex-row items-center gap-giant">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                className="rounded-2xl shadow-xl z-10 relative"
                src="https://agrimhfc.com/wp-content/uploads/2022/04/agrim-hfc.png"
                alt="Financial advisor consulting with client"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary p-lg rounded-xl shadow-lg z-20 text-white hidden md:block">
                <p className="text-headline-sm">15+ Years</p>
                <p className="text-label-md opacity-80">Industry Experience</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-secondary font-label-lg uppercase tracking-wider mb-sm block">Professional Excellence</span>
            <h2 className="text-headline-lg text-primary mb-lg">Why Choose Grace Financial Consultancy?</h2>
            <div className="space-y-lg">
              {[
                { icon: 'verified_user', title: 'Expert Guidance', desc: 'Our certified advisors analyze your profile to find the most suitable financial products with the lowest interest rates.' },
                { icon: 'bolt', title: 'Fast Processing', desc: 'We leverage deep banking relationships to expedite your application, often securing approvals within 48 hours.' },
                { icon: 'visibility', title: '100% Transparency', desc: 'No hidden charges or surprise clauses. We believe in clear communication throughout the loan lifecycle.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-md">
                  <div className="mt-1 text-secondary shrink-0">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-headline-sm text-on-surface">{item.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-xxl bg-primary text-white">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-giant">
            <h2 className="text-headline-lg mb-sm">How It Works</h2>
            <p className="text-body-md text-on-primary-container max-w-2xl mx-auto opacity-80">Get your funds in four simple steps without the traditional banking hassle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-xl relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-secondary-fixed/20 z-0"></div>
            {[
              { num: '1', title: 'Online Inquiry', desc: 'Submit your basic details through our simple online form.' },
              { num: '2', title: 'Consultation', desc: 'Speak with our expert to discuss your requirements and eligibility.' },
              { num: '3', title: 'Documentation', desc: 'Hassle-free digital upload or doorstep document collection.' },
              { num: '4', title: 'Disbursement', desc: 'Receive your funds directly in your bank account.' },
            ].map((step) => (
              <div key={step.num} className="relative z-10 text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-lg text-white text-headline-md ring-8 ring-primary">
                  {step.num}
                </div>
                <h4 className="text-headline-sm mb-sm">{step.title}</h4>
                <p className="text-body-sm opacity-70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-xxl bg-surface overflow-hidden">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-giant">
            <h2 className="text-headline-lg text-primary mb-sm">Voices of Trust</h2>
            <p className="text-body-md text-on-surface-variant">What our clients say about their journey with Grace Financial.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-lg">
            {[
              {
                name: 'Anjali Sharma',
                role: 'Home Loan Client',
                quote: '"Grace Financial made my home buying process incredibly smooth. Their team managed everything from documentation to follow-ups with the bank. Highly recommended!"',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaFcTZWTFmQtRq2ho2NFbNCIFJubC3dWR_jLYNPvgNjFoQv935_aH9mSU0Iob8hULqIOFqvm6pD_ZI3wGZll6h8tXSbWqfVDK4ikXCiJOI3qLg_D3gwwH1s8X9iFFG2yKzcD7UtmLa-nyJkmW_7AtyUtnEGuYTila9j7yGZLKYmvhumq5uJtfDpadMKK3Fdly0daE0sHIf9NUvSdHbY_RzjnZ-OsFBMDFtYPAZnG0zY2QcJrqYejixRQ',
              },
              {
                name: 'Vikram Goel',
                role: 'SME Business Owner',
                quote: '"The business loan helped our startup scale at the right time. The interest rates they secured were significantly lower than what I was finding on my own."',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIEivJLYN5S0OsZ5ug0Mf3jZT2vcdRC350tPN_2nC_f-D3UVCT6Gf9yvPbmxdLwvUCMoqju91RMTCpCZo2_PrAnELSeAgO1vTzaDGu7lQ1h0nlnJiIEy45F7C4vxzd1c6jJvXW0OzhF8knriIZB9cu81byxOWQFdyNpXWY_EshZgZdhHPtexphp-moTESj0-9J9Jvu2jrQNxKaparhrvYz0C4WlHgBGq2o7IlP0dPIg715AtCLgDklVQ',
              },
            ].map((t) => (
              <div key={t.name} className="flex-1 bg-white p-xl rounded-xl border border-outline-variant/30 custom-shadow">
                <div className="flex text-tertiary-fixed-dim mb-md">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="text-body-md italic mb-xl text-on-surface">{t.quote}</p>
                <div className="flex items-center gap-md">
                  <img className="w-12 h-12 rounded-full object-cover" src={t.img} alt={t.name} />
                  <div>
                    <p className="font-label-lg text-primary">{t.name}</p>
                    <p className="text-label-sm text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-giant">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="bg-primary-container rounded-2xl p-giant text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <h2 className="text-display-lg-mobile md:text-headline-lg mb-md relative z-10">Start Your Loan Application Today</h2>
            <p className="text-body-lg text-on-primary-container max-w-2xl mx-auto mb-xl opacity-90 relative z-10">
              Don't let financial barriers stop you. Our experts are ready to guide you to the best loan products available in the market.
            </p>
            <div className="flex flex-wrap justify-center gap-md relative z-10">
              <Link to="/contact" className="bg-secondary text-white px-xl py-md rounded-lg font-label-lg hover:scale-105 transition-transform shadow-lg inline-block">
                Apply Online Now
              </Link>
              <Link to="/contact" className="bg-white text-primary px-xl py-md rounded-lg font-label-lg hover:bg-surface transition-colors inline-block">
                Call an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
