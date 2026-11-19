import { Link } from 'react-router-dom';
import FeatureList from '../components/FeatureList';
import usePageMeta from '../hooks/usePageMeta';
import { HOME_PROCESS } from '../data/site';

export default function Home() {
  usePageMeta(
    'Website Development, Software & Digital Marketing | Aadhvex',
    'Aadhvex Digital Solutions builds business websites, web and mobile apps, offline desktop software and digital marketing services for businesses across India.'
  );

  return (
    <>
      <section className="hero" aria-labelledby="home-heading">
        <div className="wrap hero-layout">
          <div>
            <div className="eyebrow">Aadhvex Digital Solutions</div>
            <h1 id="home-heading">Websites, software and digital marketing built around your business.</h1>
            <p>
              Aadhvex Digital Solutions helps businesses across India make a confident start online and work smarter
              every day. From professional website development and custom software to practical digital marketing, we
              bring the right pieces together to support your next stage of growth.
            </p>
            <div className="hero-actions">
              <Link className="btn" to="/contact">
                Let's discuss your project ↗
              </Link>
              <Link className="btn btn-outline" to="/services">
                Explore our services
              </Link>
            </div>
            <div className="hero-meta">
              <div>
                <strong>Web & app development</strong>
                <span>Built around your requirements</span>
              </div>
              <div>
                <strong>Business-first</strong>
                <span>Solutions shaped around your needs</span>
              </div>
              <div>
                <strong>Growing services</strong>
                <span>Digital marketing now underway</span>
              </div>
            </div>
          </div>

          <div className="visual-panel">
            <div className="panel-label">A practical digital partner</div>
            <div className="panel-title">
              Make your next move <em>count.</em>
            </div>
            <div className="panel-row">
              <span>01 &nbsp; Build your presence</span>
              <b>Websites & apps</b>
            </div>
            <div className="panel-row">
              <span>02 &nbsp; Simplify operations</span>
              <b>Business software</b>
            </div>
            <div className="panel-row">
              <span>03 &nbsp; Reach your audience</span>
              <b>Digital marketing</b>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Why businesses work with us">
        <div className="wrap proof-grid">
          <div>
            <strong>Custom-built</strong>
            <span>Websites developed</span>
          </div>
          <div>
            <strong>End-to-end</strong>
            <span>From planning to deployment</span>
          </div>
          <div>
            <strong>Made to fit</strong>
            <span>Solutions for different business needs</span>
          </div>
          <div>
            <strong>One partner</strong>
            <span>Technology and digital growth</span>
          </div>
        </div>
      </section>

      <section className="section section-white" aria-labelledby="services-heading">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">What we do</div>
              <h2 id="services-heading">
                Website, software and marketing services
                <br />
                with a clear purpose.
              </h2>
            </div>
            <p>
              We focus on useful outcomes: a stronger online presence, smoother daily operations and better ways to
              connect with customers.
            </p>
          </div>
          <div className="cards">
            <article className="card">
              <div className="card-num">01 / WEB & APP DEVELOPMENT</div>
              <h3>Website & app development</h3>
              <p>
                Professional business websites, e-commerce stores, web applications and mobile apps that make it
                easier for customers to understand and use your services.
              </p>
              <Link className="card-link" to="/services">
                Website & app development services ↗
              </Link>
            </article>
            <article className="card">
              <div className="card-num">02 / BUSINESS SOFTWARE</div>
              <h3>Offline business software</h3>
              <p>
                Custom desktop and offline-first software for billing and inventory, milk collection, pharmacy,
                hospital, school, payroll, loan and jewellery billing, on a single PC or a local office network.
              </p>
              <Link className="card-link" to="/offline-systems">
                Offline business software ↗
              </Link>
            </article>
            <article className="card">
              <div className="card-num">03 / DIGITAL MARKETING</div>
              <h3>Digital marketing services</h3>
              <p>
                SEO, Google Ads, Meta Ads, social media handling, email marketing and bulk WhatsApp messaging to help
                your business become easier to discover and engage with.
              </p>
              <Link className="card-link" to="/digital-marketing">
                Digital marketing services ↗
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="why-aadhvex" aria-labelledby="why-heading">
        <div className="wrap split">
          <div>
            <div className="eyebrow">A better way to get started</div>
            <h2 id="why-heading">Clear thinking. Careful work. Reliable delivery.</h2>
            <p>
              Every business has a different audience, workflow and goal. We begin by understanding yours, then
              recommend a practical scope instead of adding features you do not need, whether that is a website, a
              mobile app, offline software or a digital marketing plan.
            </p>
            <p>
              From the first discussion to launch, we keep communication straightforward and make sure you understand
              what is being built and why.
            </p>
            <Link className="btn" to="/about">
              About Aadhvex Digital Solutions ↗
            </Link>
          </div>
          <FeatureList items={HOME_PROCESS} />
        </div>
      </section>

      <section className="cta-strip" aria-labelledby="cta-heading">
        <div className="wrap split">
          <div>
            <h2 id="cta-heading">Have an idea you are ready to move forward with?</h2>
            <p>Tell us what you want to achieve. We will help you work out a sensible next step.</p>
          </div>
          <div>
            <Link className="btn" to="/contact">
              Talk to our team ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}