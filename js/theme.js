(function () {
  const THEME_KEY = "portfolio-theme";
  const storage = window.PortfolioStorage;

  function systemTheme() {
    if (typeof window.matchMedia !== "function") return "dark";
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function getPreferredTheme() {
    const saved = storage.get(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return systemTheme();
  }

  function syncThemeButtons(theme) {
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      const isDark = theme === "dark";
      btn.setAttribute("aria-pressed", String(isDark));
      const label = isDark
        ? btn.dataset.labelLight || "Passer en mode clair"
        : btn.dataset.labelDark || "Passer en mode sombre";
      btn.setAttribute("aria-label", label);
      btn.title = label;
      btn.querySelectorAll("[data-icon]").forEach((icon) => {
        icon.hidden = icon.dataset.icon !== (isDark ? "sun" : "moon");
      });
    });
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0b0b12" : "#f5f7fb");
  }

  function applyTheme(theme) {
    const next = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    storage.set(THEME_KEY, next);
    syncThemeButtons(next);
    return next;
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || getPreferredTheme();
    return applyTheme(current === "dark" ? "light" : "dark");
  }

  function initTheme() {
    applyTheme(getPreferredTheme());
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        toggleTheme();
      });
    });
  }

  window.PortfolioTheme = { getPreferredTheme, applyTheme, toggleTheme, initTheme, syncThemeButtons };
})();
