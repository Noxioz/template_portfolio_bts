(() => {
  const links = [...document.querySelectorAll('header nav a[href*="#"]')];

  if (!links.length || !('IntersectionObserver' in window)) return;

  const sections = [...new Set(
    links
      .map((link) => {
        const url = new URL(link.href, window.location.href);

        return url.pathname === window.location.pathname && url.hash
          ? document.querySelector(url.hash)
          : null;
      })
      .filter(Boolean)
  )];

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          const url = new URL(link.href, window.location.href);
          const isActive =
            url.pathname === window.location.pathname &&
            url.hash === `#${entry.target.id}`;

          link.classList.toggle('active', isActive);

          if (isActive) {
            link.setAttribute('aria-current', 'location');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    },
    { rootMargin: '-35% 0px -55% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
})();
