import { useState } from 'react';
import PageHero from '../components/PageHero';
import usePageMeta from '../hooks/usePageMeta';
import { SITE, CONTACT_SERVICES } from '../data/site';

// Paste your free Web3Forms access key here (see README -> "Contact form").
const WEB3FORMS_KEY = 'd56bfba1-d9d2-4146-9b27-face613f4d14';

export default function Contact() {
  usePageMeta(
    'Contact Aadhvex Digital Solutions',
    'Contact Aadhvex Digital Solutions for websites, apps, offline software and digital marketing services.'
  );

  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Aadhvex Digital Solutions enquiry — ${data.get('service') || 'General enquiry'}`,
          from_name: 'Aadhvex Website',
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone') || 'Not provided',
          service: data.get('service'),
          message: data.get('message'),
          botcheck: data.get('botcheck') || '',
        }),
      });
      const result = await res.json();
      if (result.success) {
        form.reset();
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <PageHero crumb="Contact" eyebrow="Contact" title="Let's talk about what your business needs.">
        Tell us about your website, app, offline software or digital marketing requirement. We will be happy to
        discuss the next step.
      </PageHero>

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">Get in touch</div>
            <h2>Start with a conversation.</h2>
            <p>
              Reach Aadhvex Digital Solutions by phone or email. Tell us a little about your requirement and we will
              take it from there.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <small>Phone / WhatsApp</small>
                <strong>
                  <a href={SITE.phone1.href}>{SITE.phone1.label}</a>
                </strong>
              </div>
              <div className="contact-item">
                <small>Additional phone</small>
                <strong>
                  <a href={SITE.phone2.href}>{SITE.phone2.label}</a>
                </strong>
              </div>
              <div className="contact-item">
                <small>Email</small>
                <strong>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </strong>
              </div>
              <div className="contact-item">
                <small>Service area</small>
                <strong>Andhra Pradesh, India</strong>
                <div>Working with businesses across India through online consultations.</div>
              </div>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name *</label>
                <input id="name" name="name" placeholder="Name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91" />
              </div>
              <div className="field">
                <label htmlFor="service">What do you need? *</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="">Choose a service</option>
                  {CONTACT_SERVICES.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div className="field full">
                <label htmlFor="message">Your requirement *</label>
                <textarea id="message" name="message" placeholder="Briefly describe what you need..." required />
              </div>
            </div>
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
            <button className="btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send enquiry ↗'}
            </button>
            {status === 'success' && (
              <p className="form-note" role="status" style={{ color: '#15803d', fontWeight: 600 }}>
                Thank you! Your enquiry has been sent. We will contact you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-note" role="alert" style={{ color: '#b91c1c', fontWeight: 600 }}>
                Sorry, something went wrong. Please try again or call us on {SITE.phone1.label}.
              </p>
            )}
            {status === 'idle' && <p className="form-note">We will reply to the email address you provide.</p>}
          </form>
        </div>
      </section>
    </>
  );
}
