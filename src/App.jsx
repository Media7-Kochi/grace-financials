import { useEffect, useState, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Loading from './pages/Loading'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import EmiCalculator from './pages/EmiCalculator'
import Eligibility from './pages/Eligibility'
import SuccessStories from './pages/SuccessStories'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Application from './pages/Application'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsConditions from './pages/TermsConditions'
import Disclaimer from './pages/Disclaimer'
import RefundPolicy from './pages/RefundPolicy'
import Sitemap from './pages/Sitemap'
import DnsCheck from './pages/DnsCheck'
import Error from './pages/Error'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(false)
  const timerRef = useRef(null)
  const [showError, setShowError] = useState(true)

  useEffect(() => {
    requestAnimationFrame(() => setLoading(true))
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timerRef.current)
  }, [pathname])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'e' && !e.target.matches('input, textarea, select')) {
        setShowError(prev => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />

      {/* Remove this for hide Error */}
      {/* {showError && <Error />} */}

      {loading ? <Loading /> : (
        <>
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/emi-calculator" element={<EmiCalculator />} />
              <Route path="/eligibility" element={<Eligibility />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Application />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/dns-check" element={<DnsCheck />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </div>
  )
}

export default App
