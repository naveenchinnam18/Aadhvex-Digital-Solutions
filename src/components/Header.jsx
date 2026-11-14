import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import brandLockup from '../assets/brand-lockup.png';
import { NAV_LINKS } from '../data/site';

function NavItem({ link }) {
  // "Why Aadhvex" points at a section on the home page, so it is never "active".
  if (link.hash) return <Link to={link.to}>{link.label}</Link>;
  return (
    <NavLink to={link.to} end={link.end}>
      {link.label}
    </NavLink>
  );
}

export default function Header({ ctaLabel }) {
  const [open, setOpen] = useState(false);
  const { key } = useLocation();
  const close = useCallback(() => setOpen(false), []);

  // Close the menu after any navigation.
  useEffect(() => {
    setOpen(false);
  }, [key]);

  // While open: lock page scroll, close on Escape, close if the screen grows.
  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <>
      <header className="header">
        <div className="wrap nav">
          <Link className="brand" to="/" aria-label="Aadhvex Digital Solutions – home">
            <img className="brand-lockup" src={brandLockup} alt="Aadhvex Digital Solutions" width="352" height="94" />
          </Link>

          <nav className="navlinks" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.to} link={link} />
            ))}
          </nav>

          <Link className="nav-cta" to="/contact">
            {ctaLabel}
          </Link>

          <button
            type="button"
            className={`menu-btn${open ? ' is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="mobile-nav" className={`mobile-nav${open ? ' open' : ''}`} aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.to} link={link} />
            ))}
            <Link className="btn mobile-nav-cta" to="/contact">
              Start a project ↗
            </Link>
          </nav>
        </div>
      </header>
      <div className={`nav-backdrop${open ? ' show' : ''}`} onClick={close} aria-hidden="true" />
    </>
  );
}
