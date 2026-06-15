import { Link } from 'react-router-dom'

export default function GraceLogo() {
  return (
    <Link to="/" className="flex items-center gap-sm group shrink-0">
      <img
        src="/grace_logo1.png"
        alt="Grace Financial"
        className="h-10 w-auto object-contain"
      />
    </Link>
  )
}
