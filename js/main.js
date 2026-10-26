(function () {
  let currentLang = window.PortfolioI18n.getPreferredLang();
  let revealApi = {
    refresh() {},
    revealAll() {},
    revealSection() {},
    revealVisibleNow() {}
  };

  function refreshUi() {
    window.PortfolioRender.renderAll(currentLang);
    window.PortfolioTheme.applyTheme(
      document.documentElement.getAttribute("data-theme") || "dark"
    );
    revealApi.refresh();
    const hash = (location.hash || "").replace("#", "");
    if (hash) {
      revealApi.revealSection(hash);
    }
  }

  function init() {
    if (!window.PORTFOLIO_CONTENT) {
      console.error("[portfolio] data/content.js non chargé.");
      return;
    }

    window.PortfolioTheme.initTheme();
    window.PortfolioI18n.setLang(currentLang);
    refreshUi();

    revealApi = window.PortfolioAnimations.initRevealAnimations();
    window.PortfolioNavigation.initNavigation(() => currentLang, revealApi);
    window.PortfolioNavigation.initScrollChrome();
    window.PortfolioContact.initContactForm(() => currentLang);
    window.PortfolioCvDownload.initCvDownload();

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        currentLang = window.PortfolioI18n.toggleLang(currentLang);
        refreshUi();
      });
    });

    // Si on arrive avec une ancre, révéler la section
    const initialHash = (location.hash || "").replace("#", "");
    if (initialHash) {
      revealApi.revealSection(initialHash);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
