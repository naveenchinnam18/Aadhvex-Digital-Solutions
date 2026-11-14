import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FeatureList from '../components/FeatureList';
import usePageMeta from '../hooks/usePageMeta';
import { SERVICE_ROWS, SERVICE_PROCESS } from '../data/site';

export default function Services() {
  usePageMeta(
    'IT Services | Aadhvex Digital Solutions',
    'Aadhvex Digital Solutions provides website design, web application development and mobile app development.'
  );

  return (
    <>
      <PageHero
        crumb="IT Services"
        eyebrow="IT Services"
        title="Websites and applications that move your business forward."
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
          </div>
          <FeatureList items={SERVICE_PROCESS} />
        </div>
      </section>
    </>
  );
}
