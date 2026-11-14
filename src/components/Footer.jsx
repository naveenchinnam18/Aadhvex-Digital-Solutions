import { Link, useLocation } from 'react-router-dom';
import footerLogo from '../assets/footer-logo.png';
import { SITE } from '../data/site';

export default function Footer() {
  const isHome = useLocation().pathname === '/';
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link className="footer-brand" to="/">
              <img src={footerLogo} alt="Aadhvex Digital Solutions" width="959" height="742" loading="lazy" />
            </Link>
            <p>
              {isHome
                ? 'Websites, applications and business-focused digital services, thoughtfully built to help organisations move forward.'
                : 'Websites, applications, offline software and digital marketing for businesses that want to move forward.'}
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <Link to="/services">IT Services</Link>
            <Link to="/offline-systems">Offline Systems</Link>
            <Link to="/digital-marketing">Digital Marketing</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About Aadhvex</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          <div>
            <h4>Get in touch</h4>
            <Link to="/contact">Contact our team ↗</Link>
            <a href={`mailto:${SITE.email}`}>Email us ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aadhvex Digital Solutions. All rights reserved.</span>
          <span>Thoughtful technology. Built for real businesses.</span>
        </div>
      </div>
    </footer>
  );
}
