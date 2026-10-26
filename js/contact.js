(function () {
  /**
   * Remplacez par votre URL Formspree, ex. "https://formspree.io/f/xxxxxxxx"
   * Laissez vide pour utiliser mailto (aucun faux succès).
   */
  const FORMSPREE_ENDPOINT = "";

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function initContactForm(getLang) {
    const form = document.querySelector("[data-contact-form]");
    if (!form) return;

    const status = form.querySelector("[data-form-status]");
    const submitBtn = form.querySelector('[type="submit"]');

    function clearErrors() {
      form.querySelectorAll("[data-error]").forEach((el) => {
        el.textContent = "";
      });
      if (status) {
        status.textContent = "";
        status.className = "form-status";
      }
    }

    function setFieldError(name, message) {
      const el = form.querySelector(`[data-error="${name}"]`);
      if (el) el.textContent = message;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      clearErrors();

      const ui = window.PortfolioI18n.getUi(getLang());
      const meta = window.PortfolioI18n.getMeta();
      if (!ui || !meta) return;

      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const subject = String(data.get("subject") || "").trim();
      const message = String(data.get("message") || "").trim();

      let valid = true;
      if (!name) {
        setFieldError("name", ui.contact.errorRequired);
        valid = false;
      }
      if (!email) {
        setFieldError("email", ui.contact.errorRequired);
        valid = false;
      } else if (!isValidEmail(email)) {
        setFieldError("email", ui.contact.errorEmail);
        valid = false;
      }
      if (!subject) {
        setFieldError("subject", ui.contact.errorRequired);
        valid = false;
      }
      if (!message) {
        setFieldError("message", ui.contact.errorRequired);
        valid = false;
      }

      if (!valid) return;

      if (!FORMSPREE_ENDPOINT) {
        if (status) {
          status.textContent = ui.contact.errorSend;
          status.className = "form-status is-error";
        }
        const mailto = `mailto:${meta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
          `${message}\n\n— ${name} <${email}>`
        )}`;
        window.location.href = mailto;
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = ui.contact.sending;
      }

      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data
        });

        if (!response.ok) throw new Error("send_failed");

        form.reset();
        if (status) {
          status.textContent = ui.contact.success;
          status.className = "form-status is-success";
        }
      } catch {
        if (status) {
          status.textContent = ui.contact.errorSend;
          status.className = "form-status is-error";
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = ui.contact.send;
        }
      }
    });
  }

  window.PortfolioContact = { initContactForm, FORMSPREE_ENDPOINT };
})();
