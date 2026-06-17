import { Link } from 'react-router-dom'

export default function SuccessStories() {
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

      <section className="py-xxl bg-surface-container-low">
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
            <div className="glass-card p-xl rounded-xl flex flex-col h-full">
              <div className="flex gap-xs text-tertiary-fixed-dim mb-md">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-body-md text-on-surface mb-xl italic">"The transparency Grace Financial offered during our home loan process was refreshing. They didn't just give us a loan; they gave us a financial roadmap for the next decade."</p>
              <div className="mt-auto flex items-center gap-md">
                <img className="w-14 h-14 rounded-full object-cover" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGp4VE1s6NS_aQOqMh39PaXHZ5zA064JzLdc0YuuQRml95EKYdqnq93ViwBI2O5sKkCDRtq-WUhC9yyVeza0b2SSAKBJ_vwcKZ4evChcajTLtPz0s302qgjkLhPSM24fM4nvSNe_efisSM44_R-jQp7ESGpUpZOZeZiN9pS4Rfk8jQ4xJ6s19L5oVg-J9x9Ve4EY6alVVmf5sUKxCbePPO4U6qHiksYnlLdDd0dKDjedrGeVaPAE6rcg"/>
                <div>
                  <h4 className="text-headline-sm text-primary">Rajesh Kumar</h4>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">Homeowner, Mumbai</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-xl rounded-xl flex flex-col h-full">
              <div className="flex gap-xs text-tertiary-fixed-dim mb-md">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-body-md text-on-surface mb-xl italic">"Our startup expansion wouldn't have been possible without their business funding expertise. Their team understood our unique cash flow needs and structured a perfect plan."</p>
              <div className="mt-auto flex items-center gap-md">
                <img className="w-14 h-14 rounded-full object-cover" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs64kwrCDcsTPOdNqm_KNJAIq1o0Ktgm3zOgbZ08fRPP8CcdSET0dC__dLxQper-219kdSlvc4RbF5sTgHLYU92CFdzt9l4c7W3S5m91Rfg2msBj-QzXjQ5a0f4PoOmwDIb5SqjtEnus_vY6LmATX0aidnBw-QQArQ2tjz3j9UX7P7MMsU979HzlOM7z72grUFg9QdiQSju8lsKXu0xOuWbNfQFoPg66hwxX5p72LNeGmI8h-2iCC0VQ"/>
                <div>
                  <h4 className="text-headline-sm text-primary">Ananya Sharma</h4>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">CEO, TechVeda</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-xl rounded-xl flex flex-col h-full">
              <div className="flex gap-xs text-tertiary-fixed-dim mb-md">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-body-md text-on-surface mb-xl italic">"Highly professional and remarkably fast. They managed to secure my vehicle loan within 48 hours, allowing me to close the deal on my dream car without any stress."</p>
              <div className="mt-auto flex items-center gap-md">
                <img className="w-14 h-14 rounded-full object-cover" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMwhFiqJBe8xH5ZE3ANfAhxuJK11GdrseBCU-balXE-1BkyNQsSMmBCDou_hdMbihDWAc38nTkPYg107UF9vjvlSWJszATgr9Q_Xo5gsGahp7iBNrcBWh9bPpNILhIy9qsUJwT5CY6p0axFSo1DKF7EmqJNpx3KVC32LTb5PR7-lzcjtpgFs8vB5299TBj6bIY5x-66XS7FYL4Qvcs0X30HMhuIoO_CCObRyBmOSemwKvNwQPOZzaGQ"/>
                <div>
                  <h4 className="text-headline-sm text-primary">Vikram Singh</h4>
                  <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">Architect, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xxl bg-primary text-on-primary">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="mb-xxl text-center md:text-left">
            <h2 className="text-display-lg-mobile md:text-display-lg mb-sm">Bento Case Studies</h2>
            <p className="text-on-primary-container text-body-lg">Proven methodologies and data-backed success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg h-auto md:h-[600px]">
            <div className="md:col-span-2 bg-on-primary-fixed text-on-primary p-xl rounded-xl flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <span className="text-label-sm uppercase tracking-widest text-secondary-fixed mb-md block">Business Expansion</span>
                <h3 className="text-display-lg-mobile md:text-display-lg mb-md">₹50Cr Funding for Logistics Titan</h3>
                <p className="text-body-lg text-on-primary-container max-w-lg mb-xl">Grace Financial facilitated a complex restructuring and debt-funding package for a Tier-2 logistics provider, resulting in 40% YoY growth.</p>
                <div className="grid grid-cols-3 gap-lg border-t border-outline/30 pt-lg">
                  <div>
                    <div className="text-headline-md font-bold text-secondary-fixed">40%</div>
                    <div className="text-label-sm text-on-primary-container">Revenue Increase</div>
                  </div>
                  <div>
                    <div className="text-headline-md font-bold text-secondary-fixed">12</div>
                    <div className="text-label-sm text-on-primary-container">Days for Approval</div>
                  </div>
                  <div>
                    <div className="text-headline-md font-bold text-secondary-fixed">1.2%</div>
                    <div className="text-label-sm text-on-primary-container">Interest Saved</div>
                  </div>
                </div>
              </div>
              <img className="absolute -right-20 -bottom-20 w-1/2 h-1/2 object-cover rounded-full opacity-20 grayscale group-hover:opacity-40 transition-opacity" alt="" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJnB_9L1fYY44Afxr1DQWGni0bnWuB9L5d7xeUVYHbTa-CS8eB4e6lnuH21SQ63ca_MlfZGR6J1fumCHW8LScWDgczB2wja7oJdS_1_EmINMlCQK-IDIby5eIZOdfVN__ioBE_kZsdoTOiq5La_NCWdXqGj_YkW6DfYlbQDKdq-1Zj15Zo6SWSS9Yx8gYIJfh-6EJhgir3d54Jrc-bP4aDEv-EqdQzq4Iml6qrMe3XLuoAt5V1-fpnMg"/>
            </div>
            <div className="flex flex-col gap-lg">
              <div className="bg-surface-container-highest text-primary p-lg rounded-xl flex-1 group cursor-pointer hover:bg-secondary-fixed transition-all">
                <span className="text-label-sm uppercase text-secondary mb-sm block">Home Loans</span>
                <h4 className="text-headline-md mb-sm">The NRI Dream Home</h4>
                <p className="text-body-sm text-on-surface-variant">Seamless cross-border funding for a luxury villa in Goa.</p>
                <div className="mt-md text-secondary font-bold flex items-center gap-xs">Read Full Story <span className="material-symbols-outlined">arrow_forward</span></div>
              </div>
              <div className="bg-secondary-container text-on-secondary-container p-lg rounded-xl flex-1 group cursor-pointer hover:bg-on-secondary-container hover:text-on-secondary transition-all">
                <span className="text-label-sm uppercase text-white/70 mb-sm block">Medical Financing</span>
                <h4 className="text-headline-md mb-sm">Swift Healthcare Support</h4>
                <p className="opacity-80 text-body-sm">Urgent funding for hospital equipment modernization.</p>
                <div className="mt-md font-bold flex items-center gap-xs">Read Full Story <span className="material-symbols-outlined">arrow_forward</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xxl">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-xxl">
            <h2 className="text-headline-lg text-primary mb-sm">Grace in Motion</h2>
            <p className="text-on-surface-variant text-body-md">Moments of impact, celebrations, and our growing community.</p>
          </div>
          <div className="masonry-grid gap-lg">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCHg2eofdWUQDUKGAv1PSeQULjxmhnTZjDdR7okVWs7bJvLxylwlMfvOoyi-fwPM5PHiteMDMnxp5VHrITCnRIR2mcYvCxHNdkJ5pp09gGTv1hGO_xhMAjEhwcWpEM40Z7RSJEp28Z5Q5bby_VH_9uueTzJPE97u71d4Z9eS-0XdTdY26nIXdgjxq8jWQZZJVtfBgF2_Ehk3vGcYdYnB5NC8zIhwWP3Ny4axOTqXRCVY_iMo-oMs8zUgg',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCHac7_jtSWFs8pRsHCn7TUwWyyas2rxYBW1QeYuJplk9GGBvSyv5VpntnI52BA2rBRYbrvkkAE5QWbu1TVbdWlFj-gAjbuG2KPf6eub4T2XMBQVP5-9__vFUY3r3-MJL0NtyNQtrEROTkj1xOeNokvf434xIPquMgHAqLY2YyJMSFlYw4nLU2aBzJ_GdhZGRUT60CZGSdzbWZNCnQEdwi7Tsv4g6vvRsd_gv2aznuR7wZsA_GuzHrzFw',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDGPJVNetFRlsLk6woNO4rPySDY53v4DoNTK-8YKlSWL1wd3EdjOa5es2fG_IbGl7RFPqKiqLKQdqYXLKvN8T1f2tNVu61_VzTqGuat1TeMWqOOwJONRuMOUd6ERZ7dWLN22XvYcwEx4bdGDNmJPizOauhowwXH-TsVMv3eNJn0wIrt6Cd_XKQ-lhuqahh34kndZpp3jSRUyErzS6ERbOuFVhe8qW6GtFYYYyecbs2lgBPWIjYmvYotEg',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuABENbmauJBKM0zUUahPZfSJpAce4vkLI_OYAalgPOD3Ccjf328Jmc781Rqt1AG3DW6rgEJD1sGjZSbs_ta28nQR1EXPsb5emO-J7sJOEjEFA64MO4-7GzGOb2tpmyvrcGiLKGMsaJtDwCsrCXjZpR_vWi88beLno26c4-INfYz7HHdG3JLNGADHTLX94v0Ij-o3LKN_dgBdNMD1j8mpn_9HNe9oz7hJeHqv4Hifw83HRbVhsxjZH1OFA',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCpSsBeXkTHVSgZAtCia5XKA-FRgEYOi3TfxLsd4k2H8dmHYViFK_CNftpp2qpoWm8_AjZs38AvjU2V74csZsWJR1se3qVwUgTBJIpWE_ends6DSIgG9fLzoxfOnfjYB-_iM3FVEiW3BPXFxR5hYV0rShqB2ZVP5BKkIsz5uyHLr6_QxSJ-CPuTq8Wx9a68g7_G-D72eMa0qjKscrgZBwuJstiGxORgu_0M5NAD9NIl4kKJVSU8TwKNfw',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAlYIugirJ-XpFU1aaDhiH7BC2q-Xcb44yXO1DJ8e8Bn7GtFPwxd1Ms7f3Xg-2cWY3_fY9FkqnrtZeycxxnXs1ivhdKPqBsSINAWzvJ_GV0n9V5vJ9vBvQ4hIe2wZnikt_DM7hqXq68HzPPJWtn-PaHOBPe7dVmd79AfFVTErSGV4PftMH39vmwli0PKWQjGhoEukL1Za_Ni8u_vJs04_EC_FgP_g6X75J2pWC47_7VUinFE5EuyUczig',
            ].map((url, i) => (
              <div key={i} className="mb-lg break-inside-avoid">
                <div className="rounded-xl overflow-hidden shadow-sm group">
                  <img className="w-full h-auto group-hover:scale-105 transition-transform duration-500" alt="" src={url} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-xxl bg-secondary text-on-secondary">
        <div className="max-w-container-max mx-auto px-lg text-center">
          <h2 className="text-display-lg-mobile md:text-display-lg mb-lg">Your Success Story Starts Here</h2>
          <p className="text-body-lg mb-xl max-w-2xl mx-auto opacity-90">Join thousands of satisfied clients who have achieved their financial goals with Grace Financial Consultancy. Our experts are ready to guide you.</p>
          <Link to="/contact" className="bg-white text-secondary px-giant py-md rounded-lg text-label-lg shadow-2xl hover:scale-105 transition-all inline-block">Schedule a Consultation</Link>
        </div>
      </section>
    </main>
  )
}
