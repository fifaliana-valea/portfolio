(function () {
  const LANG_KEY = "portfolio-lang";
  const storage = window.PortfolioStorage;

  function getPreferredLang() {
    const saved = storage.get(LANG_KEY);
    if (saved === "fr" || saved === "en") return saved;
    return "fr";
  }

  function setLang(lang) {
    const next = lang === "en" ? "en" : "fr";
    storage.set(LANG_KEY, next);
    document.documentElement.lang = next;
    return next;
  }

  function toggleLang(current) {
    return setLang(current === "fr" ? "en" : "fr");
  }

  function getUi(lang) {
    const content = window.PORTFOLIO_CONTENT;
    if (!content || !content.ui) {
      console.error("[portfolio] Contenu bilingue introuvable (data/content.js).");
      return null;
    }
    return content.ui[lang] || content.ui.fr;
  }

  function getMeta() {
    return window.PORTFOLIO_CONTENT && window.PORTFOLIO_CONTENT.meta;
  }

  window.PortfolioI18n = { getPreferredLang, setLang, toggleLang, getUi, getMeta };
})();
