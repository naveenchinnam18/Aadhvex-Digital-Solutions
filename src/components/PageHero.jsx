import { Link } from 'react-router-dom';

export default function PageHero({ crumb, eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link> / {crumb}
        </nav>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}
