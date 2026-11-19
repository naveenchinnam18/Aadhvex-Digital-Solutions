import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';

const HOW_WE_WORK = [
  { num: '01', title: 'Understand', text: 'We learn about your business, your users and the result you want.' },
  { num: '02', title: 'Build with purpose', text: 'We agree on the scope and create a solution that fits your needs.' },
  { num: '03', title: 'Deliver & support', text: 'We test, launch and help you move forward with confidence.' },
];

export default function About() {
  usePageMeta(
    'About Aadhvex Digital Solutions | Software & Marketing',
    'Learn about Aadhvex Digital Solutions, a team building websites, mobile apps, offline desktop software and digital marketing solutions for businesses in India.'
  );

  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Aadhvex Digital Solutions"
        title="A practical team for websites, apps, offline software and digital marketing."
      >
        We help businesses bring their ideas online, simplify everyday work and connect with customers through
        thoughtful digital solutions.
      </PageHero>

      <section className="section">
        <div className="wrap split">
          <div>
            <div className="eyebrow">Who we are</div>
            <h2>Technology should make business simpler.</h2>
            <p>
              Aadhvex Digital Solutions works with businesses to understand what they need and deliver solutions that
              are clear, useful and dependable. Our work focuses on three areas: IT services, offline systems and
              digital marketing.
            </p>
            <p>We believe good work begins by listening, setting clear expectations and building around the real requirement.</p>
            <p>
              Explore our{' '}
              <Link className="inline-link" to="/services">
                website and app development
              </Link>
              ,{' '}
              <Link className="inline-link" to="/offline-systems">
                offline business software
              </Link>{' '}
              and{' '}
              <Link className="inline-link" to="/digital-marketing">
                digital marketing
              </Link>{' '}
              services.
            </p>
          </div>
          <div className="quote-panel">
            <div className="eyebrow">The name</div>
            <blockquote>Aadhvex means a beginning — the point where an idea becomes something real.</blockquote>
            <p>We want to be a dependable partner from the first conversation through delivery and beyond.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">How we work</div>
              <h2>
                Clear communication.
                <br />
                Careful execution.
              </h2>
            </div>
          </div>
          <div className="cards">
            {HOW_WE_WORK.map((item) => (
              <article className="card" key={item.num}>
                <div className="card-num">{item.num}</div>
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