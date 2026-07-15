import { useState, useEffect, useCallback } from 'react'
import { useReveal, revealStyle } from '../hooks/useReveal'

// Paste your direct image links here (direct image URLs, not Instagram post URLs)
const galleryImages = [
  {
    imageUrl: 'https://i.pinimg.com/736x/08/73/26/087326dc85b8a8fe7e54cc170b9e778c.jpg',
    caption: '🚀 Zero Collateral Loan – ഇനി ബിസിനസ് വളർച്ചയ്ക്ക് തടസ്സമില്ല!',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/H_pv_pffvQs?autoplay=1&mute=1&loop=1&playlist=H_pv_pffvQs&controls=0&modestbranding=1&rel=0',
    caption: '💰 Personal Loan മുതൽ ₹1 കോടി+ Business Finance വരെ | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/7vc2q6bnAC8?autoplay=1&mute=1&loop=1&playlist=7vc2q6bnAC8&controls=0&modestbranding=1&rel=0',
    caption: '💰 Personal Loan മുതൽ ₹1 കോടി+ Business Finance വരെ | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/9e/b8/7b/9eb87b315470fe24357579e65242186c.jpg',
    caption: 'Need Funds to Grow your Business..',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/C72G7xru1_E?autoplay=1&mute=1&loop=1&playlist=C72G7xru1_E&controls=0&modestbranding=1&rel=0',
    caption: '💰 Personal Loan മുതൽ ₹1 കോടി+ Business Finance വരെ | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/4f/6d/df/4f6ddf14806da76bc9afa9e6d7e8772f.jpg',
    caption: '🚀 Scale your business without worrying about the funds! ',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/59/e5/e5/59e5e55f5113d820f98e1edae6944cd4.jpg',
    caption: '🚀 Grace Financial Consultancy – No.1 MSME Experts Across India',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/hw2DX3Cc0UQ?autoplay=1&mute=1&loop=1&playlist=hw2DX3Cc0UQ&controls=0&modestbranding=1&rel=0',
    caption: '💰 ₹50 ലക്ഷം വരെ Personal Loan | കുറഞ്ഞ ശമ്പളമുള്ളവർക്കും ലോൺ | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/f6/03/20/f603200bba26795977127e086dab1c56.jpg',
    caption: '🤝 More Than a Brand, A Relationship of Trust.',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/bBsnbuv9h-I?autoplay=1&mute=1&loop=1&playlist=bBsnbuv9h-I&controls=0&modestbranding=1&rel=0',
    caption: '💼 ബിസിനസ് തുടങ്ങണോ? ₹ ഫണ്ടിംഗ് ഇനി എളുപ്പം | Startup & MSME Loan | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/94/ab/3c/94ab3c087ebc6206d3311d086e2bf6a4.jpg',
    caption: 'Expand your business with the right financial support.',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/jKLr7q_5N1A?autoplay=1&mute=1&loop=1&playlist=jKLr7q_5N1A&controls=0&modestbranding=1&rel=0',
    caption: '🎓 വിദേശ പഠനം ഇനി എളുപ്പം! Visa Fund & Education Loan | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/77/17/da/7717da1e9bb5f6b643f4a20ae3e96173.jpg',
    caption: 'Knowledge is power—and your future starts today 🎓',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/gM0UqrTTSbE?autoplay=1&mute=1&loop=1&playlist=gM0UqrTTSbE&controls=0&modestbranding=1&rel=0',
    caption: 'ഡോക്ടർമാർക്കായി ₹1 കോടി വരെ ലോൺ! 🩺 No Collateral | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/57/47/d3/5747d37916f5c2350f198680b8326690.jpg',
    caption: '🏡 Your Dream Home is Now Within Reach! ✨',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/5eDM5kXAGLs?autoplay=1&mute=1&loop=1&playlist=5eDM5kXAGLs&controls=0&modestbranding=1&rel=0',
    caption: '24 മണിക്കൂറിൽ Vehicle Loan! 🚗 പുതിയതും പഴയതുമായ വാഹനങ്ങൾക്ക് ഫാസ്റ്റ് ഫിനാൻസ്',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/d2/71/81/d27181e6f399821101a8125d74ebf478.jpg',
    caption: '💼 Need Funding to Start or Grow Your Business? 💼',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/_DjToTA757s?autoplay=1&mute=1&loop=1&playlist=_DjToTA757s&controls=0&modestbranding=1&rel=0',
    caption: 'Finance Executive Vacancy! 💼 Grace Financial Consultancyയിൽ ജോലി അവസരം #JobVacancy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/3a/a1/49/3aa149e76ad19d918171b528b10015ef.jpg',
    caption: '💼 Manage Your Expenses With Confidence',
    category: 'Ad Poster',
    postedAt: '2026-06-02',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/z5_Nld-zgIA?autoplay=1&mute=1&loop=1&playlist=z5_Nld-zgIA&controls=0&modestbranding=1&rel=0',
    caption: '₹5 കോടി വരെ MSME Finance! 🚀 നിങ്ങളുടെ ബിസിനസ് വളർച്ചയ്ക്ക് ഇനി തടസമില്ല | #MSMELoan #BusinessLoan',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/9hQ-1P_VvAM?autoplay=1&mute=1&loop=1&playlist=9hQ-1P_VvAM&controls=0&modestbranding=1&rel=0',
    caption: '₹100 കോടി വരെ Solar Finance! ☀️ Power Today, Save Tomorrow #SolarEnergy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/MwFfnJiFmfQ?autoplay=1&mute=1&loop=1&playlist=MwFfnJiFmfQ&controls=0&modestbranding=1&rel=0',
    caption: '₹വരുമാന സർട്ടിഫിക്കറ്റ് വേണ്ട! 🚗 സെക്കൻഡ് ഹാൻഡ് കാർ ലോൺ ഇനി എളുപ്പം | #GraceFinancialConsultancy',
    category: 'Reels',
    postedAt: '2026-07-02',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/b5/5f/59/b55f595063148bd628ad2bf01d25b11f.jpg',
    caption: '🚀 Your Business Deserves Bigger Opportunities!',
    category: 'Ad Poster',
    postedAt: '2026-07-15',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/c8/0e/da/c80eda631ff05a082d5782ce6750ed7d.jpg',
    caption: 'Looking for Business Funding? We’ve Got You Covered! ✅',
    category: 'Ad Poster',
    postedAt: '2026-07-15',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/Z9u6HdZPPxI?autoplay=1&mute=1&loop=1&playlist=Z9u6HdZPPxI&controls=0&modestbranding=1&rel=0',
    caption: '💼 ₹10 കോടി വരെ Business Loan | Same Day Funding* | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-15',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/3d/1e/64/3d1e64c0b7413b40cfdf5682e28a3347.jpg',
    caption: '🏡 Your Dream Home is Closer Than You Think!',
    category: 'Ad Poster',
    postedAt: '2026-07-15',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/sUCmFn1N_9E?autoplay=1&mute=1&loop=1&playlist=sUCmFn1N_9E&controls=0&modestbranding=1&rel=0',
    caption: '💼 ₹10 കോടി വരെ Business Loan | Same Day Funding* | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-15',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/a4/32/31/a43231e9b3816628b0af4a92227f69ff.jpg',
    caption: '🚀 Your Financial Dreams Deserve the Right Partner!',
    category: 'Ad Poster',
    postedAt: '2026-07-15',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/Lx7usvyfbxg?autoplay=1&mute=1&loop=1&playlist=Lx7usvyfbxg&controls=0&modestbranding=1&rel=0',
    caption: '🚀 Startup Grant Funding | Up to ₹1.5 Crore | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-15',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://i.pinimg.com/736x/f5/76/d3/f576d3b0dd90590cb294e5dc244f64bc.jpg',
    caption: '🚀 Fuel Your Dream, Not Your Equity!',
    category: 'Ad Poster',
    postedAt: '2026-07-15',
    mediaType: 'IMAGE',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/YilNai2O4XU?autoplay=1&mute=1&loop=1&playlist=YilNai2O4XU&controls=0&modestbranding=1&rel=0',
    caption: '🏡 Loan Against Property | Up to 50% Property Value | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-15',
    mediaType: 'VIDEO',
  },
  {
    imageUrl: 'https://www.youtube.com/embed/mSRvQt8RcVo?autoplay=1&mute=1&loop=1&playlist=mSRvQt8RcVo&controls=0&modestbranding=1&rel=0',
    caption: '💼 Unsecured Business Loan | ₹3 ലക്ഷം മുതൽ ₹50 ലക്ഷം വരെ | Grace Financial Consultancy',
    category: 'Reels',
    postedAt: '2026-07-15',
    mediaType: 'VIDEO',
  },
]

export default function Gallery() {
  // Pagination & Filters
  const [category, setCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)

  const showMore = () => setVisibleCount(prev => prev + 6)

  // Lightbox State
  const [activePhotoIndex, setActivePhotoIndex] = useState(null)
  const [touchStartX, setTouchStartX] = useState(0)

  // Refs for reveals
  const [headerRef, headerVis] = useReveal()
  const [galleryRef, galleryVis] = useReveal()

  // Filter posts based on category and search
  const filteredPosts = galleryImages.filter(post => {
    const matchCategory = category === 'All' || post.category === category
    const matchSearch = !searchQuery ||
      (post.caption && post.caption.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchCategory && matchSearch
  })

  const displayPosts = filteredPosts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredPosts.length

  // Lightbox Navigation
  const showPrev = useCallback(() => {
    if (activePhotoIndex === null) return
    setActivePhotoIndex(prev => (prev === 0 ? filteredPosts.length - 1 : prev - 1))
  }, [activePhotoIndex, filteredPosts.length])

  const showNext = useCallback(() => {
    if (activePhotoIndex === null) return
    setActivePhotoIndex(prev => (prev === filteredPosts.length - 1 ? 0 : prev + 1))
  }, [activePhotoIndex, filteredPosts.length])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') showPrev()
    if (e.key === 'ArrowRight') showNext()
    if (e.key === 'Escape') setActivePhotoIndex(null)
  }, [showPrev, showNext])

  useEffect(() => {
    if (activePhotoIndex !== null) {
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activePhotoIndex, handleKeyDown])

  // Touch Swipe Support
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    if (diff > 55) {
      showNext()
    } else if (diff < -55) {
      showPrev()
    }
  }

  useEffect(() => {
    setVisibleCount(6)
  }, [category, searchQuery])

  const formatDate = (isoString) => {
    if (!isoString) return ''
    const date = new Date(isoString)
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    })
  }

  const categories = ['All', 'Ad Poster', 'Reels']

  // Helper to get YouTube thumbnail
  const getYouTubeThumbnail = (url) => {
    const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]+)/)
    return match ? `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg` : null
  }

  return (
    <main className="mt-giant bg-surface min-h-screen text-on-surface font-body pb-xxl">
      {/* Lightbox Modal */}
      {activePhotoIndex !== null && filteredPosts[activePhotoIndex] && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex flex-col justify-between items-center p-md md:p-xl select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActivePhotoIndex(null)
          }}
        >
          {/* Top Bar */}
          <div className="w-full max-w-5xl flex justify-between items-center text-white/90 z-[101]">
            <div className="text-body-sm font-medium">
              {activePhotoIndex + 1} / {filteredPosts.length}
            </div>
            <button
              onClick={() => setActivePhotoIndex(null)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close Lightbox"
            >
              <span className="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>

{/* Main Content Area */}
            <div className="w-full max-w-5xl flex-1 flex items-center justify-center relative my-sm md:my-md">
              <button
                onClick={showPrev}
                className="absolute left-0 z-[101] w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined text-[32px]">chevron_left</span>
              </button>

              <div className="relative max-h-[70vh] md:max-h-[75vh] max-w-full flex justify-center items-center overflow-hidden rounded-lg shadow-2xl">
                {filteredPosts[activePhotoIndex].mediaType === 'VIDEO' ? (
                  <iframe
                    src={filteredPosts[activePhotoIndex].imageUrl}
                    title={filteredPosts[activePhotoIndex].caption || 'Gallery Video'}
                    className="w-full h-full max-h-[70vh] md:max-h-[75vh]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={filteredPosts[activePhotoIndex].imageUrl}
                    alt={filteredPosts[activePhotoIndex].caption || 'Gallery Image'}
                    className="max-h-[70vh] md:max-h-[75vh] w-auto max-w-full object-contain pointer-events-none transition-transform duration-300"
                  />
                )}
              </div>

            <button
              onClick={showNext}
              className="absolute right-0 z-[101] w-12 h-12 hidden md:flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined text-[32px]">chevron_right</span>
            </button>
          </div>

          {/* Bottom Caption Info */}
          <div className="w-full max-w-5xl text-white/90 bg-white/5 backdrop-blur-md rounded-xl p-md border border-white/10 text-center flex flex-col md:flex-row md:items-center md:justify-between gap-md z-[101]">
            <div className="text-left max-w-3xl">
              <span className="inline-block text-[11px] font-semibold bg-secondary/80 text-white px-sm py-0.5 rounded-full uppercase tracking-wider mb-sm">
                {filteredPosts[activePhotoIndex].category}
              </span>
              <p className="text-body-sm line-clamp-3 md:line-clamp-2 opacity-80">
                {filteredPosts[activePhotoIndex].caption || 'No caption provided.'}
              </p>
              <div className="text-[12px] opacity-50 mt-sm flex items-center gap-xs">
                <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                {formatDate(filteredPosts[activePhotoIndex].postedAt)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Header */}
      <header ref={headerRef} className="relative py-giant overflow-hidden bg-primary text-white mb-xl" style={revealStyle(headerVis)}>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <img
            className="w-full h-full object-cover"
            src="https://5.imimg.com/data5/SELLER/Default/2021/12/UI/GZ/DT/51665645/finance-oraganisation-office-interior-design-1000x1000.png"
            alt=""
          />
        </div>

        <div className="relative z-20 max-w-container-max mx-auto px-lg text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-xl">
          <div className="max-w-2xl">
            <div className="flex justify-center md:justify-start items-center gap-sm mb-md">
              <span className="inline-block px-md py-xs bg-secondary-fixed text-on-secondary-fixed rounded-full text-label-md">
                Our Feed
              </span>
              <a
                href="https://www.instagram.com/grace_financials/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary-container transition-colors"
                title="Instagram Profile"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-bold mb-md">
              Gallery
            </h1>
            <p className="text-body-lg opacity-90 text-on-primary-container max-w-xl">
              Explore our latest moments, projects, events, and behind-the-scenes updates.
            </p>
          </div>

          {/* Instagram Profile Box */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-lg rounded-2xl flex flex-col items-center text-center w-full md:w-80 shrink-0">
            <div className="w-20 h-20 bg-surface-container rounded-full overflow-hidden mb-md border-2 border-secondary relative">
              <img
                src="/grace_href.png"
                alt="Grace Financial"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-headline-sm text-white">
              Grace Financial Consultancy
            </h3>
            <p className="text-body-sm text-white/70 mb-lg">
              @grace_financials
            </p>
            <a
              href="https://www.instagram.com/grace_financials/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white w-full py-md rounded-lg font-label-lg hover:bg-secondary/90 hover:scale-[0.98] transition-all flex items-center justify-center gap-sm shadow-md"
            >
              Follow us on Instagram
            </a>
          </div>
        </div>
      </header>

      {/* Gallery Section */}
      <section ref={galleryRef} className="max-w-7xl mx-auto px-md md:px-xl" style={revealStyle(galleryVis)}>
        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-md mb-xl flex-wrap">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-sm justify-center sm:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-lg py-sm rounded-full text-label-md font-medium transition-all duration-200 ${
                  category === cat
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'bg-surface-container-highest text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Count */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-sm w-full sm:w-auto">
            <div className="text-body-sm text-on-surface-variant shrink-0">
              {filteredPosts.length === 0 ? 'No images to show' : `Showing ${displayPosts.length} of ${filteredPosts.length} image${filteredPosts.length > 1 ? 's' : ''}`}
            </div>
            <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gallery..."
                className="w-full bg-surface pl-xl pr-md py-sm rounded-lg border border-outline-variant/40 focus:border-secondary outline-none text-body-sm transition-all"
              />
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-giant border-2 border-dashed border-outline-variant/50 rounded-xl max-w-lg mx-auto my-xl bg-white shadow-sm">
            <span className="material-symbols-outlined text-[64px] text-outline/40 mb-lg flex justify-center">photo_library</span>
            <h3 className="text-headline-md text-primary mb-sm">No Moments Found</h3>
            <p className="text-body-md text-on-surface-variant max-w-sm mx-auto px-md">
              {searchQuery
                ? `No images matched your search for "${searchQuery}". Try adjusting your query.`
                : galleryImages.length === 0
                  ? 'Add direct image links to the galleryImages array in Gallery.jsx to get started!'
                  : 'No images in this category yet.'}
            </p>
          </div>
        )}

        {/* Masonry Image Grid */}
        {filteredPosts.length > 0 && (
          <div className="masonry-grid gap-lg" style={revealStyle(galleryVis)}>
            {displayPosts.map((post, i) => (
              <div
                key={i}
                onClick={() => setActivePhotoIndex(i)}
                className="mb-lg break-inside-avoid bg-white border border-outline-variant/20 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              >
                {/* Media Wrap */}
                <div className="relative overflow-hidden w-full h-auto bg-surface-container">
                  {post.mediaType === 'VIDEO' ? (
                    <iframe
                      src={post.imageUrl}
                      title={post.caption || 'Gallery Video'}
                      loading="lazy"
                      className="w-full aspect-[9/16] border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={post.imageUrl}
                      alt={post.caption || 'Gallery Media'}
                      loading="lazy"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-lg text-white">
                    <div className="flex justify-between items-center">
                      <span className="bg-white/20 backdrop-blur-md text-[11px] font-semibold px-md py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                      {post.mediaType === 'VIDEO' && (
                        <span className="material-symbols-outlined text-[20px] text-white">
                          play_circle
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-sm mb-xs">
                        <svg className="w-5 h-5 fill-current text-white/90" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        <span className="text-[12px] opacity-90">{formatDate(post.postedAt)}</span>
                      </div>
                      <p className="text-body-sm line-clamp-2 font-medium leading-relaxed opacity-95">
                        {post.caption || 'Explore the moment'}
                      </p>
                      <span className="mt-md text-[12px] font-semibold border-b border-white pb-0.5 inline-block opacity-85 hover:opacity-100 transition-opacity">
                        View Photo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {hasMore && (
          <div className="flex justify-center mt-xl">
            <button
              onClick={showMore}
              className="bg-primary text-on-primary px-xl py-md rounded-full font-label-lg hover:bg-primary/90 hover:scale-[0.98] transition-all shadow-md flex items-center gap-sm"
            >
              <span>Show More</span>
              <span className="material-symbols-outlined text-[20px]">expand_circle_down</span>
            </button>
          </div>
        )}
      </section>
    </main>
  )
}