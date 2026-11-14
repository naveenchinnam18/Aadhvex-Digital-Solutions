import { SITE } from '../data/site';

// Desktop: text pill. Phones: compact round button (CSS swaps the two).
export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aadhvex on WhatsApp"
    >
      <svg className="wa-icon" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        <path d="M8.5 10.5c.5 2 2.2 3.7 4.2 4.3l1.3-1.3 2 .9c-.3 1.2-1.3 1.9-2.5 1.7-3.1-.5-5.6-3-6.1-6.1-.2-1.2.5-2.2 1.7-2.5l.9 2z" fill="currentColor" stroke="none" />
      </svg>
      <span className="wa-label">WhatsApp us ↗</span>
    </a>
  );
}
