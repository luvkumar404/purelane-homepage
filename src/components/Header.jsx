import { navLinks } from '../data/navigation'
import { BrandMark } from './icons'

export default function Header({ headerRef, headerUp }) {
  return (
    <header id="hdr" ref={headerRef} className={headerUp ? 'up' : ''}>
      <div className="navpill glass">
        <a className="brand" href="#top" aria-label="Purelane home">
          <span className="mark">
            <BrandMark />
          </span>
          <span className="txt">
            <span className="n1">Purelane</span>
            <span className="n2">Clean, simply</span>
          </span>
        </a>
        <nav className="nav" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="navtools">
          <button type="button" className="ico hide-s" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </button>
          <button type="button" className="ico hide-s" aria-label="Account">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
              <circle cx="12" cy="8" r="3.6" />
              <path d="M5 20c0-3.6 3.1-5.6 7-5.6s7 2 7 5.6" />
            </svg>
          </button>
          <button type="button" className="ico" aria-label="Cart, 0 items">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h2l2.2 10.4a1.6 1.6 0 0 0 1.6 1.3h7.6a1.6 1.6 0 0 0 1.6-1.3L20.5 9H6.4" />
              <circle cx="10" cy="20.5" r="1.1" />
              <circle cx="17.5" cy="20.5" r="1.1" />
            </svg>
            <span className="dot">0</span>
          </button>
          <button type="button" className="ico burger" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
