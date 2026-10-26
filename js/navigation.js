(function () {
  function initNavigation(getLang, revealApi) {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector("[data-menu-toggle]");
    const backdrop = document.querySelector(".nav__backdrop");
    const links = [...document.querySelectorAll(".nav__link")];
    const sections = links
      .map((link) => {
        const id = link.getAttribute("href")?.replace("#", "");
        return id ? document.getElementById(id) : null;
      })
      .filter(Boolean);

    function setMenuOpen(open) {
      if (!nav || !toggle) return;
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      const ui = window.PortfolioI18n.getUi(getLang());
      if (ui) {
        toggle.setAttribute("aria-label", open ? ui.nav.closeMenu : ui.nav.openMenu);
      }
    }

    toggle?.addEventListener("click", () => {
      setMenuOpen(!nav.classList.contains("is-open"));
    });

    backdrop?.addEventListener("click", () => setMenuOpen(false));

    links.forEach((link) => {
      link.addEventListener("click", () => {
        const id = (link.getAttribute("href") || "").replace("#", "");
        if (id && revealApi?.revealSection) {
          revealApi.revealSection(id);
          // Après le scroll fluide, forcer la révélation
          window.setTimeout(() => revealApi.revealSection(id), 400);
          window.setTimeout(() => revealApi.revealVisibleNow?.(), 700);
        }
        setMenuOpen(false);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          links.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.01
      }
    );

    sections.forEach((section) => observer.observe(section));

    return { setMenuOpen };
  }

  function initScrollChrome() {
    const bar = document.querySelector(".scroll-progress__bar");
    const backBtn = document.querySelector("[data-back-to-top]");

    function update() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;
      if (bar) bar.style.width = `${progress}%`;
      backBtn?.classList.toggle("is-visible", scrollTop > 480);
    }

    backBtn?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  window.PortfolioNavigation = { initNavigation, initScrollChrome };
})();
