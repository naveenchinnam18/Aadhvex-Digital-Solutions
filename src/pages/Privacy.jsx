import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function Privacy() {
  usePageMeta('Privacy Policy | Aadhvex Digital Solutions', 'Aadhvex Digital Solutions website privacy information.');

  return (
    <>
      <PageHero crumb="Privacy" eyebrow="Legal" title="Privacy Policy" />
      <section className="section">
        <div className="wrap narrow">
          <h3>Information you choose to share</h3>
          <p>
            If you contact us by email, phone or WhatsApp, we may receive the information you provide, such as your
            name, contact details and project description. This website's enquiry form opens your email application and
            does not send information to a website server.
          </p>
          <h3>How information may be used</h3>
          <p>
            Information you provide may be used to respond to enquiries, discuss requirements, prepare proposals and
            provide requested services.
          </p>
          <h3>Third-party services</h3>
          <p>
            Links to third-party websites, including WhatsApp and email providers, are governed by those providers'
            own privacy terms. This starter site does not intentionally set analytics or advertising cookies.
          </p>
          <h3>Retention and requests</h3>
          <p>
            Contact us using the details on the Contact page if you have a question about information you have shared
            with us. Before publication, add the responsible legal entity, verified contact details, retention periods
            and any applicable statutory disclosures.
          </p>
          <p className="notice">
            Template notice: This is general website copy, not legal advice. Have the final policy reviewed against the
            actual business and applicable law.
          </p>
        </div>
      </section>
    </>
  );
}
