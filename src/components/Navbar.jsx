import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './Navbar.css'

const navigationLinks = [
  { label: 'Projects', path: '/projects' },
  { label: 'Experiments', path: '/experiments' },
  { label: 'Build Log', path: '/build-log' },
  { label: 'Now', path: '/now' },
  { label: 'About', path: '/about' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-container">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="brand-name">CODEX.PY</span>
          <span className="brand-label">LAB / 01</span>
        </Link>

        <nav
          className={`main-navigation ${
            menuOpen ? 'main-navigation-open' : ''
          }`}
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              className="navigation-link"
              to={link.path}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link
            className="navigation-link navigation-link-contact"
            to="/contact"
            onClick={closeMenu}
          >
            Contact
            <ArrowUpRight size={13} strokeWidth={1.5} />
          </Link>
        </nav>

        <div className="header-status">
          <span className="status-indicator" />
          <span className="status-text">BUILDING</span>
        </div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </div>
    </header>
  )
}

export default Navbar