import { useState } from 'react'
import { useReveal, revealStyle } from '../hooks/useReveal'

const categories = ['All Insights', 'Home Loan Tips', 'Vehicle Finance', 'Loan Guides', 'Business Growth', 'Credit Scoring']

const posts = [
  { category: 'Vehicle Loans', date: 'Oct 12, 2024', title: 'Leasing vs. Buying: Which is Better for Your Business?', excerpt: 'We break down the tax benefits and cash flow implications of both options to help your business stay lean and mobile.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACL9BmZMcwClE_6xVWTloMUT9jmkUvezpSOkggu9yxKQuqBk27j5zE9q8Mmu2_OCr1kmV5PmEkiAC3wsBDJJ5QKNCcWqe0UI0pNTpUckzm0oQls24WMDdvjdlssEaUvMTIwNTB29S3iQNAHtlUHMO5VCD86HL0_2RWlWu2fmkKzyTialQA02V5nMaBSVYLv1AwgsiQg46oCqRgsD7-3mKFkhei9uqMyoD9AOSmIFKt46US1NCMRjSLUQ' },
  { category: 'Business Finance', date: 'Oct 08, 2024', title: 'Working Capital Loans: Scaling Your Startup Efficiently', excerpt: 'Managing inventory and seasonal shifts requires fluid capital. Discover the flexible loan structures available for SMEs.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs3kNvdxfukgkonsXQSi9_mdxbCT5iLWYqFymDFuh8F0BZDCGLImj2Gkiiu1of58UCgzcV-RKJlbodMI_vaHoITsliOTxGyZ6quaTF2URAw93ENYDMTdquU-bAGDABURiA-N0WULkchqiliuQGYC5NTF15vLxEfF8mImyxVcBzOSfcWu1AZPpEZSK8qciwHu2f2Pwj8y5pYZhfh40gzuh5ICT51TygB4w7dYIHLxfLOX0K35yJyWk3sQ' },
  { category: 'Loan Guides', date: 'Oct 05, 2024', title: 'Understanding CIBIL Scores: Your Key to Lower Interest Rates', excerpt: 'A higher credit score doesn\'t mean just approval; it means better bargaining power. Here is how to improve yours in 6 months.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCHFZX42qkhbE5SwT5itF96Ti3mFlE_9FObG8V7ykML8YxhGzBhJTIgO0hAAoexFUMFLSdO9HUJIM1feN6y7jwrDO97T8c3vV6s1aJN2AZ5aLA595yF9gQJ2BsWjIKGAusp50SvDRZcDF-U_pBPH9rr0hOpM81g8DTE88JZAFiBU8p2tD9uLA79_kW64e3xB_tdL9e8qjIi4g0hfszZCWDnI9DUp6G63mePTiuF5i1hlWMoY9ocxZV7Q' },
  { category: 'Home Loan Tips', date: 'Sep 28, 2024', title: 'Balance Transfers: When to Move Your Mortgage', excerpt: 'Are you stuck with a high-interest loan? Learn the step-by-step process of shifting your balance to Grace Financial.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDurLpbrkxo6wmHxbM9Wrw55Q3NxESqVZbArIGkk2MPJ46ixYHr5y6RmBg5Gi6V_j1jHlzzWSzDDHdcSH7_FP2DHgtl647JYH34YUfgjf_sY9RvUT_yThhyKA_owuk1b9vLzbduiFj30J2rPB1rQGMa2EGv9_enLwX8k84denEfqXnqw2g1YfNBBt6Xjt3HsxY4a1stDTV-Za0MunHeZkmMZX_F2D_X9IPq1vdzghqR9sMvRKTYvfTjog' },
  { category: 'Expert Reliability', date: 'Sep 22, 2024', title: 'Navigating Market Volatility as a Long-term Investor', excerpt: 'Don\'t let short-term market noise distract from your financial goals. Our consultants share wealth preservation secrets.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4j5nG9uw0z5swyyogEqvCy2HE6KvR3cHfhrAK7CL4ajzL5xa0xsta8SavHYCz8tyOYIzgAQOGgeC1KekZv6tVrDaY55Fq9gjP4aMgpbYjaWR9TxD9SmDEADEnLH69zVuoszcITEqIxJtNVjhmXKrxO2X8W3yKtP6bof5hkfCJiFiKzPQRst7X5UOw7FnN5FA0KZToJb_k4On0DRyxeyklYxPSOAKRzkQzX1jeD9xLv_5WTEOrbOwGMw' },
  { category: 'Grace Insights', date: 'Sep 15, 2024', title: 'The Grace Guarantee: Transparency in Every Loan Contract', excerpt: 'Discover why thousands of families trust Grace Financial for their most important life decisions. No hidden charges, ever.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn5AAztIMEaaYTU_01KzGGKrJcdnSLidR_UE1qmWxa4tJy4J6KcJGz0cQZJ6diNMANHmvDAuDQ1YxRpgHcZeWh1J7r8-5PRRpl-wcdmVkQrErEuIu-6nLWnM9UNd7BXXwCYxs7u4_Ftxyf_LNVwUw8KiIAU-LBYuRKHQplDqaq2z1B2N9_A15V5hx3xaBPX8Y5iJPl3WPi9Q2szij632dKBCKIMTMW3ySkyirAfq2tol6-eVbkZcsrgg' },
]

const PER_PAGE = 3

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All Insights')
  const [visibleCount, setVisibleCount] = useState(PER_PAGE)
  const [featuredRef, featuredVis] = useReveal()
  const [latestRef, latestVis] = useReveal()
  const [newsRef, newsVis] = useReveal()

  const filtered = activeCategory === 'All Insights' ? posts : posts.filter(p => p.category === activeCategory)
  const visiblePosts = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  const handleLoadMore = () => setVisibleCount(prev => Math.min(prev + PER_PAGE, filtered.length))

  return (
    <main className="mt-giant">
      <section className="bg-surface py-xxl border-b border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-lg">
            <div>
              <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-sm">Financial Insights</h1>
              <p className="text-body-lg text-on-surface-variant max-w-2xl">Expert guidance and strategic tips to help you navigate the complexities of modern personal and business finance.</p>
            </div>
            <div className="relative w-full md:w-[400px]">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-xl pr-lg py-md bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-body-md" placeholder="Search for articles..." type="text" />
            </div>
          </div>
          <div className="flex gap-sm mt-xl overflow-x-auto no-scrollbar py-sm">
            {categories.map((cat) => (
              <button key={cat} onClick={() => { setActiveCategory(cat); setVisibleCount(PER_PAGE) }}
                className={`px-lg py-sm rounded-full text-label-md whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary'
                    : 'bg-white border border-outline-variant text-on-surface-variant hover:bg-surface-container'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeCategory === 'All Insights' && (
        <section ref={featuredRef} className="py-xxl" style={revealStyle(featuredVis)}>
          <div className="max-w-container-max mx-auto px-lg">
            <div className="group relative flex flex-col md:flex-row bg-white rounded-xl overflow-hidden custom-shadow transition-all duration-500 cursor-pointer">
              <div className="md:w-3/5 h-[300px] md:h-[500px] relative overflow-hidden">
                <img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDJ7IU7rMWv8qKHxoFIOomGZ4CLWhynTPXTju0M7BlLiTeigG-3FH3jC4KHyGlhz4GznEzv8cYGy-AVNQQD2wPygAXkAK-1eRQXsxHWugyF4S4VtgGooNDIeqMY5iOSX-wkrDbAsxdOhUK3jOMflN_m0zIb7Q-duN262gfXmVeNgzkLNyeHMdHbnOYwYzX7IJI02jTXTps7NwyXTa78N7DUDfl-0ylwuDnCHbAX5jj4UQQljp-n96Xyg" />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="md:w-2/5 p-xl md:p-giant flex flex-col justify-center">
                <span className="inline-block px-sm py-xs bg-secondary-fixed text-on-secondary-fixed text-label-sm font-bold uppercase tracking-wider mb-md rounded">Featured Guide</span>
                <h2 className="text-headline-lg text-primary mb-md group-hover:text-secondary transition-colors">Mastering Your Home Loan: 5 Strategies for Early Repayment</h2>
                <p className="text-body-md text-on-surface-variant mb-xl">Reducing your interest burden starts with a clear plan. Learn how small changes to your repayment schedule can save you lakhs over the lifetime of your mortgage.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-sm">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary font-bold">AK</div>
                    <span className="text-label-md text-on-surface">Arjun Kapoor</span>
                  </div>
                  <span className="text-secondary text-label-lg flex items-center gap-xs">
                    Read Full Article <span className="material-symbols-outlined text-md">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section ref={latestRef} className={activeCategory === 'All Insights' ? 'pb-giant' : 'py-xxl'} style={revealStyle(latestVis)}>
        <div className="max-w-container-max mx-auto px-lg">
          <h3 className="text-headline-md text-primary mb-xl">Latest Articles</h3>
          {filtered.length === 0 ? (
            <div className="text-center py-xl text-on-surface-variant">
              <span className="material-symbols-outlined text-4xl mb-sm">article</span>
              <p className="text-body-lg">No articles in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
              {visiblePosts.map((post, i) => (
                <article key={i} className="bg-white rounded-xl overflow-hidden custom-shadow group cursor-pointer border border-outline-variant/30">
                  <div className="aspect-video overflow-hidden relative">
                    <img alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={post.image} />
                  </div>
                  <div className="p-lg">
                    <div className="flex items-center gap-md mb-sm">
                      <span className="text-label-sm font-bold text-secondary-fixed-dim uppercase tracking-tighter">{post.category}</span>
                      <span className="text-label-sm text-outline">{post.date}</span>
                    </div>
                    <h4 className="text-headline-sm text-primary mb-sm group-hover:text-secondary transition-colors">{post.title}</h4>
                    <p className="text-body-sm text-on-surface-variant line-clamp-3 mb-lg">{post.excerpt}</p>
                    <span className="text-label-lg text-primary group-hover:underline flex items-center gap-xs">
                      Read More <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
          {hasMore && (
            <div className="mt-giant flex justify-center">
              <button onClick={handleLoadMore} className="border-2 border-primary text-primary px-xxl py-md rounded-lg text-label-lg hover:bg-primary hover:text-on-primary transition-all">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      <section ref={newsRef} className="bg-primary py-giant overflow-hidden relative" style={revealStyle(newsVis)}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-[40px] border-secondary-container"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full border-[30px] border-secondary"></div>
        </div>
        <div className="max-w-container-max mx-auto px-lg relative z-10">
          <div className="bg-primary-container p-xl md:p-xxl rounded-xl flex flex-col md:flex-row items-center gap-xl border border-outline/20">
            <div className="md:w-1/2">
              <h2 className="text-headline-lg text-on-primary mb-sm">Stay Updated with Financial Tips</h2>
              <p className="text-body-lg text-on-primary-container">Get the latest insights on loan rates and financial management delivered straight to your inbox twice a month.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-md" onSubmit={e => e.preventDefault()}>
                <input className="flex-grow px-lg py-md rounded-lg bg-surface text-on-surface border-none focus:ring-2 focus:ring-secondary outline-none" placeholder="Enter your email address" type="email" />
                <button className="bg-secondary text-white px-xl py-md rounded-lg text-label-lg hover:bg-secondary/90 transition-colors shadow-lg" type="submit">
                  Subscribe Now
                </button>
              </form>
              <p className="mt-md text-label-sm text-on-primary-container opacity-70">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
