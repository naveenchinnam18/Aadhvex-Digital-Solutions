import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found | Aadhvex Digital Solutions', 'The page you are looking for could not be found.', {
    noindex: true,
  });

  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow">404</div>
        <h1>This page could not be found.</h1>
        <p>The link may be out of date. Head back to the home page or tell us what you were looking for.</p>
        <div className="hero-actions">
          <Link className="btn" to="/">
            Back to home ↗
          </Link>
          <Link className="btn btn-outline" to="/contact">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}