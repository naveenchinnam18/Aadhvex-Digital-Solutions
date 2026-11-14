# SEO launch checklist — Aadhvex Digital Solutions (React version)

## Included
- Page-specific browser titles and meta descriptions (set per page in `src/pages/*`).
- Search-engine indexing directives, Open Graph metadata and Organization structured data (`index.html`).
- `public/robots.txt` and `public/sitemap.xml` (clean URLs: `/services`, `/offline-systems`, `/digital-marketing`,
  `/about`, `/contact`).
- Old `.html` addresses redirect to the new clean URLs on Netlify (`public/_redirects`).

## Required before publishing
1. Connect the final custom domain to your hosting provider (HTTPS).
2. Replace every `YOUR-DOMAIN-HERE` in `public/sitemap.xml` and `public/robots.txt` with the exact HTTPS domain.
3. Submit `https://YOUR-DOMAIN/sitemap.xml` in Google Search Console and verify the domain.
4. Confirm `aadhvexdigitalsolutions@gmail.com` is active (used in `src/data/site.js` and `index.html`).
5. Confirm both phone numbers: +91 78932 53699 and +91 78158 21117.
6. Add genuine address, social profiles and project photos only when available. Do not publish invented reviews,
   client logos, case studies or performance claims.

## Note about React and SEO
This is a client-rendered React app. Google can read it, but a plain HTML site is slightly simpler for crawlers.
If search visibility becomes a priority, the same components can be moved to a pre-rendering setup (for example
Next.js or vite-plugin-ssr) without changing the design.

## Recommended ongoing work
- Add original screenshots (compressed WebP) with accurate alt text.
- Keep Google Business Profile details consistent with the website.
- Publish helpful FAQs based on real customer questions.
- Track Search Console impressions, clicks and indexing monthly.

SEO does not guarantee a particular ranking or immediate indexing.
