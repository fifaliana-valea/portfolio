/**
 * Accès sécurisé à localStorage.
 */
window.PortfolioStorage = {
  get(key) {
    try {
      if (typeof localStorage === "undefined") return null;
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      if (typeof localStorage === "undefined") return false;
      localStorage.setItem(key, value);
      return true;
    } catch {
      return false;
    }
  }
};
