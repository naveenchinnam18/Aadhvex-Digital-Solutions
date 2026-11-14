import { Link, Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollManager from './ScrollManager';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />

      <div className="topline">
        <div className="wrap">
          <span>
            {isHome
              ? 'WEB DEVELOPMENT · BUSINESS SOFTWARE · DIGITAL MARKETING'
              : 'WEBSITES · APPS · OFFLINE SOFTWARE · DIGITAL MARKETING'}
          </span>
          <span>
            {isHome ? 'Have a requirement? ' : 'Have a project in mind? '}
            <Link to="/contact">{isHome ? "Let's discuss it ↗" : "Let's talk ↗"}</Link>
          </span>
        </div>
      </div>

      <Header ctaLabel={isHome ? 'Start a conversation ↗' : 'Start a project ↗'} />

      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
