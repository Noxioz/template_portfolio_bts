document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    "main .hero, main #profil, main #projets, main #competences, main #contact"
  );

  // Pas d'animation si l'utilisateur préfère réduire les mouvements.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  elements.forEach((element) => {
    element.classList.add("fade-scroll");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -5% 0px"
    }
  );

  elements.forEach((element) => observer.observe(element));
});
