import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { OFFLINE_SYSTEMS, OFFLINE_EXTRAS } from '../data/site';

export default function OfflineSystems() {
  usePageMeta(
    'Offline Systems & Desktop Software | Aadhvex Digital Solutions',
    'Aadhvex Digital Solutions develops custom offline desktop software and local network systems for business operations.'
  );

  return (
    <>
      <PageHero
        crumb="Offline Systems"
        eyebrow="Offline Systems"
        title="Custom desktop software for the way your business works."
      >
        Reliable software for offices and businesses that need to manage daily work locally, even when internet
        access is limited or unavailable.
      </PageHero>

      <section className="section">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Custom offline software</div>
            <h2>
              Your process.
              <br />
              Your software.
            </h2>
            <p>
              We build offline-first desktop systems around your actual workflow — from entering records and managing
              transactions to printing documents and generating reports.
            </p>
            <p>
              Depending on the requirement, software can run on a single computer or across a local office network.
            </p>
            <Link className="btn" to="/contact">
              Discuss an offline system ↗
            </Link>
          </div>
          <div className="quote-panel">
            <div className="eyebrow">Designed for daily operations</div>
            <blockquote>Keep essential business work running with software built for your environment.</blockquote>
            <p>
              Local data storage, role-based access, reports, backups and printing can be planned around the project
              scope.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">What we can build</div>
              <h2>
                Practical systems for
                <br />
                everyday work.
              </h2>
            </div>
            <p>Each system is scoped to your users, devices and operating process.</p>
          </div>
          <div className="cards offline-specialities">
            {OFFLINE_SYSTEMS.map((item) => (
              <article className="card" key={item.num}>
                <div className="card-num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Beyond these 12 solutions</div>
              <h2>Software shaped around your workflow.</h2>
            </div>
            <p>We also build tailored systems and supporting features to match the way your organisation operates.</p>
          </div>
          <div className="system-grid">
            {OFFLINE_EXTRAS.map((item) => (
              <article className="system" key={item.label}>
                <small>{item.label}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
