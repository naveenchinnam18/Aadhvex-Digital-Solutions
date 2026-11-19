import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function Terms() {
  usePageMeta('Terms of Use | Aadhvex Digital Solutions', 'Terms of use for the Aadhvex Digital Solutions website and its enquiry form.');

  return (
    <>
      <PageHero crumb="Terms" eyebrow="Legal" title="Terms of Use" />
      <section className="section">
        <div className="wrap narrow">
          <h3>Website information</h3>
          <p>
            Content on this website is provided for general information about services and capabilities. Scope,
            timelines, pricing, deliverables and technical feasibility are confirmed separately for each project.
          </p>
          <h3>Project engagements</h3>
          <p>
            Work begins only after the scope, commercial terms, responsibilities, payment milestones and acceptance
            criteria are agreed in writing.
          </p>
          <h3>Third-party platforms</h3>
          <p>
            Some solutions may rely on hosting providers, app stores, payment gateways, WhatsApp Business services or
            other third-party platforms. Their availability, policies and charges are controlled by those providers.
          </p>
          <h3>Changes</h3>
          <p>
            Website content may be updated as services evolve. Contact us if you need clarification about a specific
            service or proposal.
          </p>
          <p className="notice">
            Template notice: Review and replace this starter text with terms approved for the operating legal entity
            before launch.
          </p>
        </div>
      </section>
    </>
  );
}