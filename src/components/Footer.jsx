import { Link } from 'react-router-dom'
import GraceLogo from './GraceLogo'

export default function Footer() {
  return (
    <footer className="bg-primary w-full mt-giant border-t border-outline/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-xl max-w-container-max mx-auto px-lg py-xxl">
        <div className="flex flex-col gap-md">
          <GraceLogo />
          <p className="text-on-primary-container text-body-sm">Your premier destination for expert financial consultancy and loan processing services in India.</p>
        </div>
        <div>
          <h5 className="text-white font-label-lg mb-lg">Our Services</h5>
          <ul className="space-y-sm">
            {['Vehicle Loans', 'Home Loans', 'Business Loans', 'Education Loans'].map((item) => (
              <li key={item}>
                <Link to="/services" className="text-on-primary-container hover:text-on-primary text-body-sm transition-colors">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-label-lg mb-lg">Quick Links</h5>
          <ul className="space-y-sm">
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Loan Calculator', to: '/emi-calculator' },
              { label: 'Eligibility Check', to: '/eligibility' },
              { label: 'Success Stories', to: '/success-stories' },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="text-on-primary-container hover:text-on-primary text-body-sm transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-label-lg mb-lg">Contact Info</h5>
          <ul className="space-y-sm">
            <li className="flex items-center gap-sm text-on-primary-container text-body-sm">
              <span className="material-symbols-outlined text-body-sm">call</span> +91 98765 43210
            </li>
            <li className="flex items-center gap-sm text-on-primary-container text-body-sm">
              <span className="material-symbols-outlined text-body-sm">mail</span> contact@gracefinancial.com
            </li>
            <li className="flex items-start gap-sm text-on-primary-container text-body-sm">
              <span className="material-symbols-outlined text-body-sm">location_on</span> Mumbai Financial District, Maharashtra, India
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-lg py-lg border-t border-outline/10 text-center">
        <p className="text-on-primary-container text-body-sm">&copy; 2026 Grace Financial Consultancy. All rights reserved.</p>
      </div>
    </footer>
  )
}
