import { useEffect } from 'react';

function setContent(selector, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute('content', value);
}

// Updates the tab title + search/social descriptions for the current page.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    setContent('meta[name="description"]', description);
    setContent('meta[property="og:title"]', title);
    setContent('meta[property="og:description"]', description);
  }, [title, description]);
}
