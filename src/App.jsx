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
import Contact from './pages/Contact'
import Application from './pages/Application'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    setLoading(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timerRef.current)
  }, [pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      {loading ? <Loading /> : (
        <>
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/emi-calculator" element={<EmiCalculator />} />
              <Route path="/eligibility" element={<Eligibility />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Application />} />
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
