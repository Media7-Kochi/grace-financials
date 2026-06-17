import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GraceLogo from './GraceLogo'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/emi-calculator', label: 'EMI Calculator' },
    { to: '/eligibility', label: 'Eligibility' },
    { to: '/success-stories', label: 'Success Stories' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-surface/90 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-lg py-sm">
        <GraceLogo />
        <div className="hidden lg:flex items-center gap-lg">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-body-md transition-colors ${
                isActive(link.to)
                  ? 'text-secondary border-b-2 border-secondary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-md">
          <Link to="/apply" className="bg-primary-container text-white px-lg py-sm rounded-lg font-label-lg hover:scale-95 transition-transform hidden sm:inline-block">
            Apply Now
          </Link>
          <button
            className="lg:hidden p-sm text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-outline-variant/20">
          <div className="max-w-container-max mx-auto px-lg py-md flex flex-col gap-xs">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-md py-md rounded-lg text-body-md transition-colors ${
                  isActive(link.to)
                    ? 'text-secondary bg-secondary-fixed/50 font-semibold'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/apply" onClick={() => setMobileOpen(false)} className="bg-primary-container text-white px-lg py-sm rounded-lg font-label-lg text-center mt-sm">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
