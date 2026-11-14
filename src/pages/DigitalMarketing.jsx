import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import FeatureList from '../components/FeatureList';
import usePageMeta from '../hooks/usePageMeta';
import { MARKETING_SERVICES, WHATSAPP_STEPS } from '../data/site';

export default function DigitalMarketing() {
  usePageMeta(
    'Digital Marketing | Aadhvex Digital Solutions',
    'Aadhvex Digital Solutions offers social media handling, Meta Ads, Google Ads, SEO, email marketing, content writing and bulk WhatsApp messaging.'
  );

  return (
    <>
      <PageHero
        crumb="Digital Marketing"
        eyebrow="Digital Marketing"
        title="Build your presence. Reach the right people. Grow with purpose."
      >
        Practical digital marketing services to help your business become more visible, communicate consistently and
        generate enquiries.
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">Our digital marketing services</div>
              <h2>
                Everything your business needs
                <br />
                to show up online.
              </h2>
            </div>
            <p>Choose one service or bring them together into a consistent marketing plan.</p>
          </div>
          <div className="cards">
            {MARKETING_SERVICES.map((item) => (
              <article className="card" key={item.num}>
                <div className="card-num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap split">
          <div>
            <div className="eyebrow" style={{ color: '#d9e8a5' }}>
              Bulk WhatsApp messaging
            </div>
            <h2>Reach customers through conversations.</h2>
            <p>
              Plan organised WhatsApp campaigns for launches, offers, events and customer updates. Campaigns must use
              appropriate consent, approved templates where required and compliant sending practices.
            </p>
            <Link className="btn" to="/contact">
              Plan a campaign ↗
            </Link>
          </div>
          <FeatureList items={WHATSAPP_STEPS} />
        </div>
      </section>
    </>
  );
}
