/**
 * Force le téléchargement du CV (évite l'ouverture inline du PDF dans le navigateur).
 */
(function () {
  async function downloadCv(url, filename) {
    const response = await fetch(url, { credentials: "same-origin" });
    if (!response.ok) throw new Error("cv_fetch_failed");
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = objectUrl;
    anchor.download = filename || "CV_Fifaliana_Valea.pdf";
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
  }

  function initCvDownload() {
    document.querySelectorAll("[data-cv-download]").forEach((link) => {
      link.addEventListener("click", async (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");
        const filename = link.getAttribute("download") || "CV_Fifaliana_Valea.pdf";
        if (!href) return;
        try {
          await downloadCv(href, filename);
        } catch (error) {
          console.warn("[portfolio] Téléchargement forcé indisponible, ouverture du PDF.", error);
          window.open(href, "_blank", "noopener,noreferrer");
        }
      });
    });
  }

  window.PortfolioCvDownload = { initCvDownload };
})();
