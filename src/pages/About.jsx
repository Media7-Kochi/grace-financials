export default function About() {
  return (
    <main className="mt-giant">
      {/* Hero Section: Company Story */}
      <section className="relative pt-xxl pb-giant bg-surface overflow-hidden">
        <div className="max-w-container-max mx-auto px-lg grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
          <div className="z-10">
            <span className="text-secondary font-label-lg uppercase tracking-wider mb-sm block">Our Journey</span>
            <h1 className="text-display-lg text-primary mb-lg">Empowering Aspirations Since 2010</h1>
            <p className="text-body-lg text-on-surface-variant mb-xl leading-relaxed">
              Grace Financial Consultancy began with a singular vision: to bridge the gap between financial complexity and human ambition. Based in the heart of India, we've evolved from a small advisory firm into a premier consultancy, helping thousands of families and entrepreneurs navigate their financial futures with confidence and clarity.
            </p>
            <div className="flex gap-md flex-wrap">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-label-lg text-primary">SEBI Registered</span>
              </div>
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <span className="font-label-lg text-primary">ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary-container/10 rounded-xl blur-2xl group-hover:bg-secondary-container/20 transition-all duration-500"></div>
            <img
              className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb7d4BF2FNzjt6HsfXzJvGkGGCqftni9-RbIf2fiYcCxZmEcTtK4-Qz0OE8_PkyaJ8GNWVOfT6pI_AdQqyn0iYg88eYiV4Lxh261el65LH0XeNx3RQKspWJen9z1MZSYJYSDfIfQQxQYYllJK5ObuhKQS1napDS_4A_OkkScCyX2XKLR1VQKhlITxzE5hySKJcS8vEo8h7Ob4REv68SmywdhGUDprjROkJ1V-u7Vp9Zghc_GjyAEe38Q"
              alt="Grace Financial Office"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-giant bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
            <div className="bg-surface-container-lowest p-xxl rounded-xl border border-outline-variant/30 flex flex-col items-center text-center custom-shadow">
              <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
              </div>
              <h3 className="text-headline-md text-primary mb-md">Our Mission</h3>
              <p className="text-body-md text-on-surface-variant">
                To democratize high-end financial expertise by providing transparent, accessible, and personalized loan solutions that empower every Indian to achieve their dreams of home ownership and business growth.
              </p>
            </div>
            <div className="bg-primary text-on-primary p-xxl rounded-xl flex flex-col items-center text-center custom-shadow">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-lg">
                <span className="material-symbols-outlined text-white text-4xl">visibility</span>
              </div>
              <h3 className="text-headline-md text-white mb-md">Our Vision</h3>
              <p className="text-body-md text-primary-fixed/80">
                To be India's most trusted financial partner, recognized for setting the gold standard in consultancy through innovation, ethical practices, and an unwavering commitment to our clients' long-term prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-giant bg-surface">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-giant">
            <h2 className="text-headline-lg text-primary mb-sm">Our Core Values</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">The principles that guide every interaction and decision at Grace Financial.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-lg">
            {[
              { icon: 'shield_with_heart', label: 'Trust' },
              { icon: 'search_check', label: 'Transparency' },
              { icon: 'groups_3', label: 'Customer Focus' },
              { icon: 'business_center', label: 'Professionalism' },
              { icon: 'trending_up', label: 'Growth' },
            ].map((v) => (
              <div key={v.label} className="group p-lg text-center bg-white rounded-lg border border-outline-variant/30 hover:shadow-lg transition-all duration-300">
                <span className="material-symbols-outlined text-secondary text-5xl mb-md block group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {v.icon}
                </span>
                <h4 className="font-label-lg text-primary">{v.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="py-giant bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-xl text-center">
            {[
              { value: '14+', label: 'Years Experience' },
              { value: '25k+', label: 'Loans Approved' },
              { value: '₹50B+', label: 'Disbursed Capital' },
              { value: '98%', label: 'Client Retention' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-[56px] font-extrabold text-secondary-fixed mb-xs">{s.value}</div>
                <p className="font-label-lg text-on-primary-container uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Grace */}
      <section className="py-giant bg-surface">
        <div className="max-w-container-max mx-auto px-lg grid grid-cols-1 md:grid-cols-2 gap-xxl items-center">
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-secondary/5 rounded-full scale-110 animate-pulse"></div>
            <img
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpfLMMyKMSuZ7-6rBW1jStfssy2yBT0l4nYnTR6MhGuSXVeKcA_LqP7fTGt99RCY_wYQ_ximMHyE9qL3abHs9VY7Z9pz-gQruVMHNcZBjNnRd3xzqJqJNiFXPQWn-sQq0qpWc-rUeEfGMmqtG59QOj1Z63Z1DWKWapjZRMYxm9uDvOFDls3gFA2QBncpDuIeNrlPHOgzXjgypPbxSniNU3petuH3-wN_rNWDVgCR6wNE-M2lWcnSvmUA"
              alt="Financial Advisor"
            />
          </div>
          <div>
            <h2 className="text-headline-lg text-primary mb-lg">Why Global Leaders Choose Grace</h2>
            <ul className="space-y-lg">
              {[
                { icon: 'account_balance', title: 'Institutional Expertise', desc: 'Our team consists of former banking executives who understand the inner workings of financial institutions.' },
                { icon: 'speed', title: 'Accelerated Processing', desc: 'Proprietary technology integration allows for 40% faster loan turnarounds compared to traditional methods.' },
                { icon: 'handshake', title: 'End-to-End Support', desc: 'From initial documentation to final disbursement, we handle the heavy lifting while you focus on your growth.' },
              ].map((item) => (
                <li key={item.title} className="flex gap-lg">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-headline-sm text-primary mb-xs">{item.title}</h4>
                    <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-giant bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-giant">
            <h2 className="text-headline-lg text-primary mb-sm">Leadership Team</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">Meet the experts behind our commitment to excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
            {[
              { name: 'Vikram Malhotra', role: 'Founder & CEO', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpdqzFEJJmQza_ueE7BKYZwtkmQ40OfGJCS7YImAgGxRGvEQgGHR81o2-8wJz_9TVQaM0uAlMkS8JIFRtE_NKuAImVzu2LFsC3A31vu09__OeMpfOdYHvU5Wcq3QoO02w8B2xsrUpr3ZIx5-YTi_qNVUzbN4ybNdai0XjUCpsVcDw9jnNLwkma5lJBJKlJcSEWF20uu74ewE-jBE7ik59xnB6F9piHmRsSFIwBdPDSfIM1bAWYcFLuKQ' },
              { name: 'Ananya Sharma', role: 'Chief Operating Officer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXxt_sBImF1dSpSkF6irXPgwD8CW_aoDmxp5z_OD7lV58o1Wft4gUnXxG72seyB5iQgbJDojckAz2Idbtr7bcVZdvmOp6nqToXLefNqHtSTavSZSs1kI196dvC3Mjs0ZmQQNczoWERfuwseppTwGnEmb5X-1wHceHhF1a32mGLoUMRDcc_LqYifzaVnh_-KLwf1D-5GX3bifJ_l7snQydFEoIOzOxOOFHaxax_af6YSj_C3m0-SZH6zQ' },
              { name: 'Rajesh Iyer', role: 'Head of Lending', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCijqHbg6fruNGj6M7eq8oeQEEiSalMvN5N6rwt03OHP0FYeSDdZYSS0FuTNgTfqy1rQVcrHOoUg6wEoAZ1_ly9uC7AMWT6zxYHjlbaGid_8G8UP15KVrBPJEsLo48PRwwl2OUQ9YxvkZJOo9TUHZJa9vdcmzPwHal-TTV9DlWq4gXaVrGgm7bmubHVIUv-g2CiXYYzODdzt_VmjH8BECiIQwEwNa808HMPxSDze3f6OgXzJ2K3d-_ofA' },
              { name: 'Sanya Kapoor', role: 'Chief Compliance Officer', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCez4LoJtqsvZx8db-34knKQq_3fjMmBo0BRKalBjaIqjLODwZqiDcPg4RwYbCSQcg44qldAbOkIV10PV_T2ubuhTSomPSmFpi0Orc5kmHLoqOJFdhuOzRaWYqW-_e7Cqp1-Am5HIj-PwekKOh_-kKrHo2zBSDHXWDoEghb0NPwb0XQ2ai0icTiVXo-4WbwZqxT4Hdhh5FgunpXcIKdmMUIPbZ1p5MvBZB2TnU0B5kJo_5vXka4nr8eqQ' },
            ].map((m) => (
              <div key={m.name} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src={m.img}
                    alt={m.name}
                  />
                </div>
                <div className="p-lg text-center">
                  <h4 className="text-headline-sm text-primary">{m.name}</h4>
                  <p className="font-label-md text-secondary uppercase tracking-widest mt-xs">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Gallery */}
      <section className="py-giant bg-surface">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-giant">
            <h2 className="text-headline-lg text-primary mb-sm">Our Environment</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">Where strategy meets execution. A glimpse into our modern workspace.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md md:h-[500px]">
            <div className="md:col-span-2 md:row-span-2">
              <img
                className="w-full h-full object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJI9ZSnwPDCK0w8T9tg-CmCuSpE_xTkmeIgSwXnpEDR0d2CK1ccdtVPva-F9jzX-auaO1Ew86nR7GPiU8aF1esHA8YVOGNeOl098vMjBkyps_PfaO8z7YP6hDmaIXjL4CWVPUwTzF0gKAGmpl0hsmA4zqaNepCEhTtW_zSc_WG9Tf6eUeMcggD77_nhlQFOrZUhPMOPfLSoTnZLuWVWcawmpHAxvVlPX_6Z9sWL8xilc8DEdK7XoKd7A"
                alt="Main Lobby"
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmHyxm1h8iZAoVvJkdThqeNyagrUAr7y-0zVoEVgjXTXdaG7oec6WUheENz3kFKC3zeJrlZiSCxY-S7l9AzRsSUO5Oer_i0roSgyENkaR9eZ2WiNwuRrPjEIB58iX898rd2vWV4ZZKV4gcmKStN39x3_rNyOIMVSjt9_zDtbbH1e6BS3lzj-7ofbm-ztOwoezR58BNLEG9B0t64mW8Hsc3uz33tZIavTuTLjfKNaSvIy1_G1LBhZ-l0g"
                alt="Meeting Room"
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOjC4Tsnp6gik6w96CC6oP-Ym1eAzgMWdb14gboYS0PN7_svpUpHj55ysDoNEZEMMzSLM1E44hz-CYkyOUJPa8w-hiokiHHblcuQc8l7j8LTqfcEwTRZ1miv4we3DYgCQ7GC77SpvgHjfFrnDUQGgzceIYY-4_1htZvLswKvSMCPR7fAs2If1SdTEMrScy8sjiGzoCk3BA-QS2CKVg_harY6emrr7ZpaOOlICiEoLHr10ue4xE7kPHXA"
                alt="Co-working space"
              />
            </div>
            <div className="md:col-span-2">
              <img
                className="w-full h-full object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWP1bdk8Z4YEbT1My4azdeCeAEKUkb43QZsf6uhsL5Thew5kIbS1FMMhp9GBAG3HBAiOQpWGagXIv7As-MP7VKeTZvjfqBE5UF5Spxc5A3Lp7DPgUn5cYGf1SRtImjkyXU4OHcx6FeFPaaapvCClW0FgNN3R7kFVPXjGe2xGKwJyexE-e_P5cwag_j7jnUhgeSmsCebpqT3jNWdqdOnJI_o13tcdZ23Rf-nMyPFS4y854ZRP6h_UmJ9Q"
                alt="Executive Suite"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
