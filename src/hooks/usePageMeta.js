import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ORIGIN = 'https://aadhvex-digital-solutions.pages.dev';
const DEFAULT_ROBOTS = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

// Finds a <head> tag, or creates it if index.html does not have it yet.
function getTag(selector, tagName, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tagName);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    document.head.appendChild(el);
  }
  return el;
}

function setContent(selector, attrs, value) {
  getTag(selector, 'meta', attrs).setAttribute('content', value);
}

// Updates title, description, canonical URL, social tags and robots for the current page.
// Pass { noindex: true } for pages that should stay out of search results (e.g. the 404 page).
export default function usePageMeta(title, description, { noindex = false } = {}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
    const url = `${ORIGIN}${path}`;

    document.title = title;

    setContent('meta[name="description"]', { name: 'description' }, description);
    setContent('meta[name="robots"]', { name: 'robots' }, noindex ? 'noindex, follow' : DEFAULT_ROBOTS);

    getTag('link[rel="canonical"]', 'link', { rel: 'canonical' }).setAttribute('href', url);

    setContent('meta[property="og:title"]', { property: 'og:title' }, title);
    setContent('meta[property="og:description"]', { property: 'og:description' }, description);
    setContent('meta[property="og:url"]', { property: 'og:url' }, url);
    setContent('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    setContent('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
  }, [title, description, noindex, pathname]);
}