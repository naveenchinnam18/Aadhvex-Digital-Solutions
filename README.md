# Aadhvex Digital Solutions — React website

The same Aadhvex site and design, rebuilt with **React + Vite + React Router**, with a mobile-first layout.

## Run it

```bash
npm install
npm run dev        # development server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

Requires Node.js 18 or newer.

## Deploy (Netlify / Vercel)

1. Run `npm run build`.
2. Upload the **`dist`** folder to Netlify (or connect the repo: build command `npm run build`, publish directory `dist`).
3. Page refreshes and direct links work because of `public/_redirects` (Netlify) and `vercel.json` (Vercel).
4. Old links such as `/services.html` automatically redirect to `/services` on Netlify.

## Project structure

```
src/
  main.jsx              app entry
  App.jsx               routes
  components/           Header (mobile menu), Footer, Layout, PageHero, FeatureList,
                        WhatsAppFloat, ScrollManager
  pages/                Home, Services, OfflineSystems, DigitalMarketing,
                        About, Contact, Privacy, Terms, NotFound
  data/site.js          phone numbers, email, nav links, service / software lists
  hooks/usePageMeta.js  sets each page's browser title + description
  styles/style.css      all styling (same design; desktop base + responsive section)
  assets/               logos used by the pages
public/                 favicon, robots.txt, sitemap.xml, _redirects
```

## Editing content

- Phone numbers, email, WhatsApp link, menu items, the 12 offline systems, marketing services and service rows
  all live in **`src/data/site.js`**.
- Page headings and paragraphs are in the matching file inside `src/pages/`.

## Mobile layout highlights

- Hamburger menu opens a full-width panel with large tap rows, a "Start a project" button, tap-outside / Esc to
  close, and page scroll locked while open.
- Full-width stacked buttons, single-column cards, tidy 2×2 stats band, stacked hero details.
- Contact form uses 16px inputs (stops iPhone zoom-on-focus), `tel` / `email` keyboards and a full-width button.
- WhatsApp button becomes a compact round icon on phones so it no longer covers text.
- Checked with no sideways scrolling from 320px to 1280px wide.

## Contact form

Submissions are emailed straight to your inbox using [Web3Forms](https://web3forms.com) (free, no backend).

1. Go to https://web3forms.com, enter `aadhvexdigitalsolutions@gmail.com` and click **Create Access Key**.
2. Open your email and copy the access key you receive.
3. In `src/pages/Contact.jsx`, replace `PASTE-YOUR-ACCESS-KEY-HERE` with that key.
4. Rebuild and redeploy (`npm run build`). Send a test enquiry.

## Before publishing

- Replace `YOUR-DOMAIN-HERE` in `public/sitemap.xml` and `public/robots.txt` with the real domain, then submit
  the sitemap in Google Search Console. See `SEO-SETUP.md`.
- Confirm both phone numbers and the email mailbox.
- Review the privacy and terms text for the actual business.
- Add a real business address, social links, work samples and testimonials only when verified.
