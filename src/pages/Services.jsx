import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FeatureList from '../components/FeatureList';
import usePageMeta from '../hooks/usePageMeta';
import { SERVICE_ROWS, SERVICE_PROCESS } from '../data/site';

export default function Services() {
  usePageMeta(
    'Website, Web App & Mobile App Development | Aadhvex',
    'Aadhvex Digital Solutions develops responsive business websites, e-commerce stores, custom web applications and mobile apps for businesses across India.'
  );

  return (
    <>
      <PageHero
        crumb="IT Services"
        eyebrow="IT Services"
        title="Website and app development that moves your business forward."
      >
        We design and develop digital experiences that help your business look professional, serve customers and work
        more efficiently.
      </PageHero>

      <section className="section">
        <div className="wrap">
          {SERVICE_ROWS.map((row) => (
            <div className="service-row" key={row.no}>
              <div className="service-index">{row.no}</div>
              <div>
                <h3>{row.title}</h3>
                <p>{row.text}</p>
              </div>
              <div className="tags">
                {row.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap split">
          <div>
            <div className="eyebrow">From idea to launch</div>
            <h2>
              A clear process.
              <br />A considered result.
            </h2>
            <p>
              We understand your goals, plan the right features, design the experience, build and test it, then help
              you launch.
            </p>
            <Link className="btn" to="/contact">
              Tell us what you need ↗
            </Link>
            <p>
              Need software for daily operations or help reaching customers? See our{' '}
              <Link className="inline-link" to="/offline-systems">
                offline business software
              </Link>{' '}
              and{' '}
              <Link className="inline-link" to="/digital-marketing">
                digital marketing services
              </Link>
              .
            </p>
          </div>
          <FeatureList items={SERVICE_PROCESS} />
        </div>
      </section>
    </>
  );
}