import { Link } from 'react-router-dom';
import FeatureList from '../components/FeatureList';
import usePageMeta from '../hooks/usePageMeta';
import { HOME_PROCESS } from '../data/site';

export default function Home() {
  usePageMeta(
    'Aadhvex Digital Solutions | Websites, Software & Digital Marketing',
    'Aadhvex Digital Solutions creates professional websites, custom web and mobile applications, offline business software and digital marketing solutions.'
  );

  return (
    <>
      <section className="hero">
        <div className="wrap hero-layout">
          <div>
            <div className="eyebrow">Aadhvex Digital Solutions</div>
            <h1>Digital experiences built around your business.</h1>
            <p>
              We help businesses make a confident start online and work smarter every day. From thoughtful websites
              and custom software to practical digital marketing, we bring the right pieces together to support your
              next stage of growth.
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

      <section className="proof-band">
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

      <section className="section section-white">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">What we do</div>
              <h2>
                Everything digital,
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
              <h3>Websites & applications</h3>
              <p>
                Professional business websites, e-commerce stores and custom web or mobile applications that make it
                easier for customers to understand and use your services.
              </p>
              <Link className="card-link" to="/services">
                Explore development ↗
              </Link>
            </article>
            <article className="card">
              <div className="card-num">02 / BUSINESS SOFTWARE</div>
              <h3>Software for everyday work</h3>
              <p>
                Custom desktop and offline-first systems for billing, inventory, records, reporting and workflows that
                need dependable day-to-day operation.
              </p>
              <Link className="card-link" to="/offline-systems">
                Explore software ↗
              </Link>
            </article>
            <article className="card">
              <div className="card-num">03 / DIGITAL MARKETING</div>
              <h3>Build your digital presence</h3>
              <p>
                Search optimisation, social media, paid campaigns and content support to help your business become
                easier to discover and engage with.
              </p>
              <Link className="card-link" to="/digital-marketing">
                Explore marketing ↗
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="why-aadhvex">
        <div className="wrap split">
          <div>
            <div className="eyebrow">A better way to get started</div>
            <h2>Clear thinking. Careful work. Reliable delivery.</h2>
            <p>
              Every business has a different audience, workflow and goal. We begin by understanding yours, then
              recommend a practical scope instead of adding features you do not need.
            </p>
            <p>
              From the first discussion to launch, we keep communication straightforward and make sure you understand
              what is being built and why.
            </p>
            <Link className="btn" to="/about">
              Get to know Aadhvex ↗
            </Link>
          </div>
          <FeatureList items={HOME_PROCESS} />
        </div>
      </section>

      <section className="cta-strip">
        <div className="wrap split">
          <div>
            <h2>Have an idea you are ready to move forward with?</h2>
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
