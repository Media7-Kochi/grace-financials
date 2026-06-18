import { useReveal, revealStyle } from '../hooks/useReveal'
import { Link } from 'react-router-dom'

export default function Services() {
  const [gridRef, gridVis] = useReveal()
  const [ctaRef, ctaVis] = useReveal()

  return (
    <main className="mt-giant">
      {/* Hero Section */}
      <header className="relative pb-xxl md:pt-[160px] md:pb-[100px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpSxI30Sct756UEopV6MuOrA_rxZ-07I0aM0pmFCnP1ZEMvjbTvWuOvaQ7Y8WYsBmN1PGZAMk0bvmVDDn4ns9-l215or_pYfRlz0FPyaCC8E72-xUyQX5Uk1ywnTQ8ytxintb5WA4gTECXPnsd9Dixngx-q1H0ciH8DqoorGwsVfywFFBvfqR-dOCgpNiTH5wekj5CJdUkL78_Ve88PZwN2SWtGChez60Ru6W6-7Yf1AeKtH6O0a3KuQ"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/80 to-surface"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-lg text-center pt-xl md:pt-0">
          <span className="inline-block px-md py-xs bg-primary-fixed text-on-primary-fixed rounded-full text-label-sm mb-lg">OUR SERVICES</span>
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-md max-w-3xl mx-auto">
            Financial Solutions Tailored For Every Need.
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-xl">
            From personal milestones to business expansions, we provide structured credit solutions with transparency and speed.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-md">
            <Link to="/contact" className="bg-primary text-on-primary px-giant py-md rounded-lg text-label-lg hover:shadow-lg transition-all inline-block">
              Schedule Consultation
            </Link>
            <Link to="/eligibility" className="border-2 border-secondary text-secondary px-giant py-md rounded-lg text-label-lg hover:bg-secondary/5 transition-all inline-block">
              Check your Eligibility
            </Link>
          </div>
        </div>
      </header>

      {/* Services Grid - Bento Style */}
      <div ref={gridRef} className="max-w-container-max mx-auto px-lg py-xxl" style={revealStyle(gridVis)}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg">

          {/* Vehicle Loan */}
          <section className="md:col-span-8 group relative overflow-hidden rounded-xl border border-outline-variant/30 bg-white p-xl service-hover-card">
              <div className="absolute inset-0 z-0">
                <img className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" src="https://www.esaar.in/s3-ap-south-1.amazonaws.com/images-bucket-efin-uat/wp-content/uploads/2020/03/28135131/s-vehicle.jpg" />
              </div>
            <div className="flex flex-col md:flex-row gap-xl items-start relative z-10">
              <div className="w-16 h-16 rounded-xl bg-secondary-container/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-secondary text-3xl">directions_car</span>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center mb-sm">
                  <h2 className="text-headline-md text-primary">VEHICLE LOAN</h2>
                  <span className="px-sm py-xs bg-emerald-100 text-emerald-800 rounded text-label-sm">24H Processing</span>
                </div>
                <p className="text-body-md text-on-surface-variant mb-lg">Drive your dreams with our tailored financing for Cars, SUVs, and Commercial vehicles. Competitive rates and flexible repayment cycles.</p>
                <div className="flex flex-wrap gap-sm mb-xl">
                  <span className="px-md py-xs bg-surface-container-low rounded-full text-on-surface-variant text-label-md">New Cars</span>
                  <span className="px-md py-xs bg-surface-container-low rounded-full text-on-surface-variant text-label-md">Used SUVs</span>
                  <span className="px-md py-xs bg-surface-container-low rounded-full text-on-surface-variant text-label-md">Fleet Finance</span>
                </div>
                <Link to="/apply?type=Vehicle+Loan" className="bg-primary text-on-primary px-lg py-sm rounded-lg text-label-lg hover:opacity-90 inline-block">Apply Now</Link>
              </div>
            </div>
          </section>

          {/* Personal Loan */}
          <section className="md:col-span-4 bg-primary text-on-primary rounded-xl p-xl flex flex-col justify-between service-hover-card">
            <div>
              <span className="material-symbols-outlined text-4xl mb-lg block">person</span>
              <h2 className="text-headline-md mb-sm">PERSONAL LOAN</h2>
              <p className="text-body-sm text-on-primary-container mb-lg">Unsecured credit for life's unexpected moments or planned celebrations.</p>
              <ul className="space-y-sm mb-xl">
                {[
                  { icon: 'check_circle', label: 'Medical Emergency' },
                  { icon: 'check_circle', label: 'Wedding Expenses' },
                  { icon: 'check_circle', label: 'Education Costs' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-sm font-label-md">
                    <span className="material-symbols-outlined text-secondary-fixed-dim text-sm">{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/apply?type=Personal+Loan" className="w-full bg-on-primary text-primary py-sm rounded-lg text-label-lg text-center inline-block">Apply Now</Link>
          </section>

          {/* Home Loan */}
          <section className="md:col-span-4 rounded-xl border border-outline-variant/30 bg-white p-xl service-hover-card relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" src="https://infiniumrealty.com/_next/image?url=%2Fimages%2Fblogs%2Fhome-loan.jpg&w=3840&q=75" />
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-lg block">home_work</span>
              <h2 className="text-headline-sm text-primary mb-sm">HOME LOAN</h2>
              <p className="text-body-sm text-on-surface-variant mb-lg">Build, buy, or renovate your sanctuary with home finance starting at attractive rates.</p>
              <div className="space-y-md mb-lg">
                <div className="p-sm bg-surface-container rounded-lg font-label-md text-on-surface-variant">Purchase & Construction</div>
                <div className="p-sm bg-surface-container rounded-lg font-label-md text-on-surface-variant">Home Renovation</div>
                <div className="p-sm bg-surface-container rounded-lg font-label-md text-on-surface-variant">Balance Transfer</div>
              </div>
              <Link to="/apply?type=Home+Loan" className="text-secondary font-label-lg flex items-center gap-sm group">
                Apply Now <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </section>

          {/* Business Loan */}
          <section className="md:col-span-8 rounded-xl border border-outline-variant/30 bg-white overflow-hidden relative group service-hover-card">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATAa3X43iNxn3WY0_uFyCI4yiOiidU5Te6lX24DbHgtjxcqnZK7dQVMBLTV5WxfobdpmsFJj0q5E_LTxnzgvwpLI2frYE_wIlqPCkMFWOOTieLC3or8vq3dg8mrHYxxvnwEyhcdoykExuU-Tq1wbS758Wa0PwAYuoUGqnvcH03vCmBU5mdMDhmu545i6C3KbTD5oFSSSyA-Ma-T-KK3-WNiJG9SRj2c-xk2Vd29n6KDkeNhveVgy6Ezw"
                alt=""
              />
            </div>
            <div className="relative z-10 p-xl flex flex-col md:flex-row gap-xl h-full items-center">
              <div className="flex-grow">
                <h2 className="text-headline-md text-primary mb-sm">BUSINESS LOAN</h2>
                <p className="text-body-md text-on-surface-variant mb-lg max-w-lg">Fuel your enterprise with dedicated credit lines for MSMEs, Startups, and Working Capital requirements.</p>
                <div className="grid grid-cols-2 gap-md mb-lg">
                  <div className="flex items-center gap-md">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                    </div>
                    <span className="font-label-md">Scalable Credit</span>
                  </div>
                  <div className="flex items-center gap-md">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-sm">description</span>
                    </div>
                    <span className="font-label-md">Easy Docs</span>
                  </div>
                </div>
                <Link to="/apply?type=Business+Loan" className="bg-primary text-on-primary px-lg py-sm rounded-lg text-label-lg inline-block">Apply Now</Link>
              </div>
              <div className="hidden md:block w-1/3">
                <div className="p-lg bg-surface-container-highest rounded-xl border border-outline/20">
                  <h4 className="font-label-lg mb-sm">MSME Special</h4>
                  <p className="text-body-sm mb-md">Special interest waivers for registered MSMEs.</p>
                  <Link to="/apply?type=Business+Loan" className="text-secondary text-label-sm underline">Register MSME Now</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Solar Finance - Premium Card */}
          <section className="md:col-span-12 rounded-2xl bg-[#0B2147] text-white p-xl md:p-xxl flex flex-col md:flex-row items-center gap-xxl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10 flex-grow">
              <div className="flex items-center gap-md mb-lg">
                <span className="material-symbols-outlined text-secondary-container text-4xl">wb_sunny</span>
                <h2 className="text-display-lg-mobile font-bold">SOLAR FINANCE</h2>
              </div>
              <p className="text-body-lg text-on-primary-container max-w-2xl mb-xl">
                Transition to clean energy with funding up to <strong>100 Crore</strong> for Rooftop installations and EV Charging infrastructure.
              </p>
              <div className="flex flex-wrap gap-xl mb-xl">
                <div className="flex flex-col">
                  <span className="text-headline-sm">100 Cr+</span>
                  <span className="text-label-sm text-on-primary-container">Limit Capacity</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-headline-sm">Zero</span>
                  <span className="text-label-sm text-on-primary-container">Hidden Charges</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-headline-sm">Pan-India</span>
                  <span className="text-label-sm text-on-primary-container">Deployment</span>
                </div>
              </div>
              <Link to="/apply?type=Solar+Finance" className="btn-premium px-giant py-md rounded-lg text-label-lg shadow-xl inline-block">Apply Now</Link>
            </div>
            <div className="relative z-10 w-full md:w-1/3 aspect-square rounded-xl overflow-hidden border border-white/10">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWPx776MmFKZafVMAt9kvKuXA6WZlHmdFCLz5e9oiub-jEYfQxUaaZN_WQCOHni1mohUqcINtKJ3ZVsXmekzrlWkDYNnzzOYFyxoCWCrGOaOPiOoTuLtaa_NbW7SQPi45kC0R2n5Q8fXtnkYrKnKZZ4rTgy75xE-1BihQ7u7pPaMnmXwYgCoEGI_UihMtLBdGvM1O9z1Nfn5RduKbC11qlbDD10LJyLdf_SeH-P87-T04aS3-dFsUgJw"
                alt="Solar farm installation"
              />
            </div>
          </section>

          {/* Education Loan */}
          <section className="md:col-span-4 rounded-xl border border-outline-variant/30 bg-white p-xl service-hover-card relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" src="https://www.cashe.co.in/wp-content/uploads/2024/12/education-loan-interest-rates-title-image.png" />
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-lg block">school</span>
              <h2 className="text-headline-sm text-primary mb-sm">EDUCATION LOAN</h2>
              <p className="text-body-sm text-on-surface-variant mb-lg">Invest in your future with loans for global education, covering tuition, travel, and stay.</p>
              <ul className="space-y-sm mb-xl">
                {[
                  { icon: 'flight_takeoff', label: 'Study Abroad' },
                  { icon: 'menu_book', label: 'Tuition Fees' },
                  { icon: 'laptop_mac', label: 'Equipment & Stay' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-sm font-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary text-sm">{item.icon}</span>
                    {item.label}
                  </li>
                ))}
              </ul>
              <Link to="/apply?type=Education+Loan" className="w-full border border-secondary text-secondary py-sm rounded-lg text-label-lg hover:bg-secondary/5 block text-center">Apply Now</Link>
            </div>
          </section>

          {/* Property Loan */}
          <section className="md:col-span-4 rounded-xl border border-outline-variant/30 bg-white p-xl service-hover-card relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" src="https://img.etimg.com/thumb/width-300,height-225,imgsize-34604,resizemode-75,msid-98727474/wealth/borrow/tax-savings-home-loan-top-up-could-be-the-cheapest-loan-available-for-you/top-up-home-loan-benefits.jpg" />
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-lg block">location_city</span>
              <h2 className="text-headline-sm text-primary mb-sm">PROPERTY LOAN</h2>
              <p className="text-body-sm text-on-surface-variant mb-lg">Leverage your residential or commercial property assets to unlock liquidity for your needs.</p>
              <div className="flex flex-col gap-sm mb-xl">
                {['Commercial', 'Residential'].map((item) => (
                  <div key={item} className="flex justify-between items-center py-xs border-b border-outline-variant/30">
                    <span className="font-label-md">{item}</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </div>
                ))}
              </div>
              <Link to="/apply?type=Property+Loan" className="w-full bg-primary text-on-primary py-sm rounded-lg text-label-lg block text-center">Apply Now</Link>
            </div>
          </section>

          {/* Mudra Loan */}
          <section className="md:col-span-4 rounded-xl border border-outline-variant/30 bg-surface-container p-xl service-hover-card relative overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <img className="w-full h-full object-cover opacity-10 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" src="https://5.imimg.com/data5/SELLER/Default/2024/3/402801898/JU/BT/QP/138647904/mudra-loan-500x500.png" />
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-lg block">payments</span>
              <h2 className="text-headline-sm text-primary mb-sm">MUDRA LOAN</h2>
              <p className="text-body-sm text-on-surface-variant mb-lg">Government-backed schemes to empower micro-enterprises across various growth stages.</p>
              <div className="grid grid-cols-3 gap-xs mb-xl">
                {['SHISHU', 'KISHOR', 'TARUN'].map((item) => (
                  <div key={item} className="text-center p-xs bg-white rounded border border-outline-variant/50">
                    <div className="text-label-sm text-primary">{item}</div>
                  </div>
                ))}
              </div>
              <Link to="/apply?type=Mudra+Loan" className="w-full bg-primary text-on-primary py-sm rounded-lg text-label-lg block text-center">Apply Now</Link>
            </div>
          </section>

        </div>
      </div>

      {/* Global CTA */}
      <section ref={ctaRef} className="bg-primary-container py-xxl" style={revealStyle(ctaVis)}>
        <div className="max-w-container-max mx-auto px-lg text-center">
          <h2 className="text-headline-lg text-white mb-lg">Don't See What You Need?</h2>
          <p className="text-body-lg text-on-primary-container max-w-xl mx-auto mb-xl">Our financial consultants are ready to create a bespoke solution for your unique requirements.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-md">
            <a
              className="flex items-center justify-center gap-md bg-[#25D366] text-white px-xl py-md rounded-lg text-label-lg hover:opacity-90"
              href="https://wa.me/919995533809"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
              WhatsApp Chat
            </a>
            <Link to="/contact" className="flex items-center justify-center gap-md bg-secondary text-on-secondary px-xl py-md rounded-lg text-label-lg">
              <span className="material-symbols-outlined">call</span>
              Call +91 99955 33809
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
