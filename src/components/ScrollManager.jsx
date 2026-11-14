import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// New page -> start at the top. Link with #hash -> scroll to that section.
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const changedPage = previousPath.current !== pathname;
    previousPath.current = pathname;

    const root = document.documentElement;
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;

    if (target) {
      if (changedPage) {
        root.style.scrollBehavior = 'auto';
        target.scrollIntoView();
        root.style.scrollBehavior = '';
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = '';
  }, [pathname, hash, key]);

  return null;
}
