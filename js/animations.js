(function () {
  let observer = null;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function revealElement(el) {
    if (!el) return;
    el.classList.add("is-visible");
    if (observer) {
      try {
        observer.unobserve(el);
      } catch (_) {}
    }
  }

  function revealAll() {
    document.querySelectorAll(".reveal").forEach(revealElement);
  }

  function isNearViewport(el, margin) {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const extra = margin == null ? vh : margin;
    return rect.bottom > -extra && rect.top < vh + extra;
  }

  function revealVisibleNow() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      if (isNearViewport(el, window.innerHeight)) revealElement(el);
    });
  }

  function revealSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.querySelectorAll(".reveal").forEach(revealElement);
  }

  function observeAll() {
    if (prefersReducedMotion()) {
      revealAll();
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              revealElement(entry.target);
            }
          });
        },
        {
          threshold: 0,
          rootMargin: "120px 0px 120px 0px"
        }
      );
    }

    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      observer.observe(el);
    });

    revealVisibleNow();

    requestAnimationFrame(revealVisibleNow);
    window.setTimeout(revealVisibleNow, 100);
    window.setTimeout(revealVisibleNow, 400);
    // Filet de sécurité : tout devient visible rapidement
    window.setTimeout(revealAll, 1200);
  }

  function initRevealAnimations() {
    observeAll();

    window.addEventListener(
      "scroll",
      () => {
        revealVisibleNow();
      },
      { passive: true }
    );

    window.addEventListener("hashchange", () => {
      const id = (location.hash || "").replace("#", "");
      if (id) revealSection(id);
    });

    return {
      refresh: observeAll,
      revealAll,
      revealSection,
      revealVisibleNow
    };
  }

  window.PortfolioAnimations = { initRevealAnimations };
})();
