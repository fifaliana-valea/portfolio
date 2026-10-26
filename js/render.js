(function () {
const SVG = {
  frontend:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 6h16v2H4V6zm0 5h10v2H4v-2zm0 5h16v2H4v-2z"/></svg>',
  backend:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 5h16a1 1 0 0 1 1 1v4H3V6a1 1 0 0 1 1-1zm-1 7h18v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6zm4 2v2h2v-2H7zm4 0v2h2v-2h-2z"/></svg>',
  databases:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.36 6 2s-2.13 2-6 2-6-1.36-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.36-6-2v-1.39C7.28 16.5 9.42 17 12 17s4.72-.5 6-1.39V17c0 .64-2.13 2-6 2z"/></svg>',
  devops:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>',
  architecture:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>',
  languages:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.21 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.69.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M6.94 6.5A1.94 1.94 0 1 1 5 4.56 1.94 1.94 0 0 1 6.94 6.5zM5.25 8.75h3.38V20H5.25zm5.63 0h3.24v1.54h.05a3.55 3.55 0 0 1 3.2-1.76c3.42 0 4.05 2.25 4.05 5.18V20h-3.38v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V20h-3.5z"/></svg>'
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function techList(items) {
  return `<ul class="tech-list">${items
    .map((t) => `<li class="tech-chip">${escapeHtml(t)}</li>`)
    .join("")}</ul>`;
}

function renderStaticChrome(lang) {
  const ui = window.PortfolioI18n.getUi(lang);
  const meta = window.PortfolioI18n.getMeta();
  if (!ui || !meta) return;

  document.title =
    lang === "fr"
      ? `${meta.name} — ${meta.title.fr} | Portfolio`
      : `${meta.name} — ${meta.title.en} | Portfolio`;

  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute("content", ui.hero.tagline);
  }

  const map = {
    "[data-i18n='nav.home']": ui.nav.home,
    "[data-i18n='nav.about']": ui.nav.about,
    "[data-i18n='nav.skills']": ui.nav.skills,
    "[data-i18n='nav.experience']": ui.nav.experience,
    "[data-i18n='nav.projects']": ui.nav.projects,
    "[data-i18n='nav.education']": ui.nav.education,
    "[data-i18n='nav.contact']": ui.nav.contact,
    "[data-i18n='hero.greeting']": ui.hero.greeting,
    "[data-i18n='hero.title']": meta.title[lang],
    "[data-i18n='hero.tagline']": ui.hero.tagline,
    "[data-i18n='hero.ctaProjects']": ui.hero.ctaProjects,
    "[data-i18n='hero.ctaContact']": ui.hero.ctaContact,
    "[data-i18n='hero.ctaCv']": ui.hero.ctaCv,
    "[data-i18n='about.title']": ui.about.title,
    "[data-i18n='about.lead']": ui.about.lead,
    "[data-i18n='about.body']": ui.about.body,
    "[data-i18n='about.qualitiesTitle']": ui.about.qualitiesTitle,
    "[data-i18n='about.qualities']": ui.about.qualities,
    "[data-i18n='about.languagesTitle']": ui.about.languagesTitle,
    "[data-i18n='skills.title']": ui.skills.title,
    "[data-i18n='skills.subtitle']": ui.skills.subtitle,
    "[data-i18n='experience.title']": ui.experience.title,
    "[data-i18n='experience.subtitle']": ui.experience.subtitle,
    "[data-i18n='projects.title']": ui.projects.title,
    "[data-i18n='projects.subtitle']": ui.projects.subtitle,
    "[data-i18n='education.title']": ui.education.title,
    "[data-i18n='education.subtitle']": ui.education.subtitle,
    "[data-i18n='contact.title']": ui.contact.title,
    "[data-i18n='contact.subtitle']": ui.contact.subtitle,
    "[data-i18n='contact.emailLabel']": ui.contact.emailLabel,
    "[data-i18n='contact.phoneLabel']": ui.contact.phoneLabel,
    "[data-i18n='contact.locationLabel']": ui.contact.locationLabel,
    "[data-i18n='contact.formTitle']": ui.contact.formTitle,
    "[data-i18n='contact.formNote']": ui.contact.formNote,
    "[data-i18n='contact.mailtoFallback']": ui.contact.mailtoFallback,
    "[data-i18n='contact.send']": ui.contact.send,
    "[data-i18n='footer.rights']": `© ${new Date().getFullYear()} ${meta.name}. ${ui.footer.rights}`,
    "[data-i18n='footer.built']": ui.footer.built,
    "[data-i18n='backToTop']": ui.backToTop
  };

  Object.entries(map).forEach(([selector, text]) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.textContent = text;
    });
  });

  document.querySelectorAll("[data-i18n-placeholder='contact.name']").forEach((el) => {
    el.placeholder = ui.contact.name;
  });
  document.querySelectorAll("[data-i18n-placeholder='contact.email']").forEach((el) => {
    el.placeholder = ui.contact.email;
  });
  document.querySelectorAll("[data-i18n-placeholder='contact.subject']").forEach((el) => {
    el.placeholder = ui.contact.subject;
  });
  document.querySelectorAll("[data-i18n-placeholder='contact.message']").forEach((el) => {
    el.placeholder = ui.contact.message;
  });

  document.querySelectorAll("[data-i18n-label='contact.name']").forEach((el) => {
    el.textContent = ui.contact.name;
  });
  document.querySelectorAll("[data-i18n-label='contact.email']").forEach((el) => {
    el.textContent = ui.contact.email;
  });
  document.querySelectorAll("[data-i18n-label='contact.subject']").forEach((el) => {
    el.textContent = ui.contact.subject;
  });
  document.querySelectorAll("[data-i18n-label='contact.message']").forEach((el) => {
    el.textContent = ui.contact.message;
  });

  const skip = document.querySelector(".skip-link");
  if (skip) skip.textContent = ui.nav.skip;

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.dataset.labelLight = ui.nav.themeLight;
    btn.dataset.labelDark = ui.nav.themeDark;
  });

  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.textContent = lang === "fr" ? "EN" : "FR";
    btn.setAttribute("aria-label", ui.nav.langSwitch);
    btn.title = ui.nav.langSwitch;
  });

  document.querySelectorAll("[data-menu-toggle]").forEach((btn) => {
    const open = document.querySelector(".nav")?.classList.contains("is-open");
    btn.setAttribute("aria-label", open ? ui.nav.closeMenu : ui.nav.openMenu);
  });

  const locationEl = document.querySelector("[data-contact-location]");
  if (locationEl) locationEl.textContent = meta.location[lang];

  const emailValue = document.querySelector("[data-contact-email]");
  if (emailValue) emailValue.textContent = meta.email;

  const phoneValue = document.querySelector("[data-contact-phone]");
  if (phoneValue) phoneValue.textContent = meta.phone;
}

function renderAboutLanguages(lang) {
  const ui = window.PortfolioI18n.getUi(lang);
  const root = document.querySelector("[data-languages]");
  if (!root) return;
  root.innerHTML = ui.about.languages
    .map(
      (item) => `
      <li class="lang-item">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.level)}</span>
      </li>`
    )
    .join("");
}

function renderSkills(lang) {
  const ui = window.PortfolioI18n.getUi(lang);
  const root = document.querySelector("[data-skills]");
  if (!root) return;
  root.innerHTML = ui.skills.categories
    .map(
      (cat) => `
      <article class="card skill-card reveal" data-category="${escapeHtml(cat.id)}">
        <div class="skill-card__title">
          <span class="skill-card__icon">${SVG[cat.id] || SVG.languages}</span>
          <h3>${escapeHtml(cat.title)}</h3>
        </div>
        <ul class="skill-tags">
          ${cat.items
            .map((item) => `<li><span class="skill-tag" title="${escapeHtml(item)}">${escapeHtml(item)}</span></li>`)
            .join("")}
        </ul>
      </article>`
    )
    .join("");
}

function renderExperience(lang) {
  const ui = window.PortfolioI18n.getUi(lang);
  const root = document.querySelector("[data-experience]");
  if (!root) return;
  root.innerHTML = ui.experience.items
    .map(
      (item) => `
      <article class="timeline-item reveal" id="exp-${escapeHtml(item.id)}">
        <span class="timeline-item__dot" aria-hidden="true"></span>
        <div class="card experience-card">
          <div class="experience-card__meta">
            <span class="experience-card__project">${escapeHtml(item.project)}</span>
            <span class="experience-card__company">${escapeHtml(item.company)}</span>
            <span class="experience-card__period">${escapeHtml(item.period)}</span>
          </div>
          <h3>${escapeHtml(item.role)}</h3>
          <p>${escapeHtml(item.description)}</p>
          ${techList(item.technologies)}
          <ul class="mission-list">
            ${item.missions.map((m) => `<li>${escapeHtml(m)}</li>`).join("")}
          </ul>
        </div>
      </article>`
    )
    .join("");
}

function trainingStatus(item, ui) {
  const now = new Date();
  const start = item.startDate ? new Date(`${item.startDate}T00:00:00`) : null;
  const end = item.endDate ? new Date(`${item.endDate}T23:59:59`) : null;
  if (start && now < start) {
    return { key: "upcoming", label: ui.education.statusUpcoming };
  }
  if (end && now > end) {
    return { key: "completed", label: ui.education.statusCompleted };
  }
  return { key: "ongoing", label: ui.education.statusOngoing };
}

function renderProjects(lang) {
  const ui = window.PortfolioI18n.getUi(lang);
  const root = document.querySelector("[data-projects]");
  if (!root) return;
  root.innerHTML = ui.projects.items
    .map((item) => {
      const dateLine = item.date || "";
      const academicBadge = item.academic
        ? `<p class="project-card__academic">${escapeHtml(ui.projects.academicLabel)}</p>`
        : "";
      const detailsAcademic = item.academic
        ? `<li><strong>${escapeHtml(ui.projects.academicLabel)}</strong></li>`
        : "";
      return `
      <article class="card project-card reveal" data-project="${escapeHtml(item.id)}">
        <figure class="project-card__media">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.imageAlt)}" loading="lazy" width="800" height="500"
            onerror="this.style.display='none'; this.parentElement.classList.add('is-fallback');" />
          <figcaption class="project-card__badge">${escapeHtml(ui.projects.illustrativeNote)}</figcaption>
        </figure>
        <div class="project-card__body">
          ${academicBadge}
          ${dateLine ? `<p class="project-card__date">${escapeHtml(dateLine)}</p>` : ""}
          <h3>${escapeHtml(item.title)}</h3>
          <p class="project-card__summary">${escapeHtml(item.summary)}</p>
          ${techList(item.technologies)}
          <ul class="project-card__features">
            ${item.features.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}
          </ul>
          <ul class="project-card__details" hidden>
            ${detailsAcademic}
            ${item.details.map((d) => `<li>${escapeHtml(d)}</li>`).join("")}
          </ul>
          <div class="project-card__actions">
            <button type="button" class="btn btn--link" data-project-toggle aria-expanded="false">
              ${escapeHtml(ui.projects.viewDetails)}
            </button>
            <div class="project-links">
              ${item.links
                .map(
                  (link) =>
                    `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a>`
                )
                .join("")}
            </div>
          </div>
        </div>
      </article>`;
    })
    .join("");

  root.querySelectorAll("[data-project-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".project-card");
      const details = card.querySelector(".project-card__details");
      const expanded = card.classList.toggle("is-expanded");
      details.hidden = !expanded;
      btn.setAttribute("aria-expanded", String(expanded));
      btn.textContent = expanded ? ui.projects.hideDetails : ui.projects.viewDetails;
    });
  });
}

function renderEducation(lang) {
  const ui = window.PortfolioI18n.getUi(lang);
  const root = document.querySelector("[data-education]");
  if (!root) return;

  const academicCards = ui.education.items
    .map(
      (item) => `
      <article class="card edu-card reveal">
        <p class="edu-card__school">${escapeHtml(item.school)}</p>
        <h3>${escapeHtml(item.degree)}</h3>
        <p>${escapeHtml(item.option)}</p>
        <p class="edu-card__period">${escapeHtml(item.period)}</p>
        ${item.status ? `<span class="edu-card__status">${escapeHtml(item.status)}</span>` : ""}
      </article>`
    )
    .join("");

  const complementary = ui.education.complementary || [];
  const complementaryCards = complementary
    .map((item) => {
      const status = trainingStatus(item, ui);
      return `
      <article class="card training-card reveal" data-training="${escapeHtml(item.id)}">
        <div class="training-card__header">
          <span class="training-card__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
              <path d="M12 3l8 4.5v4c0 4.5-3.2 8.4-8 9.5-4.8-1.1-8-5-8-9.5v-4L12 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
              <path d="M9.5 12.5h5M12 10v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
            </svg>
          </span>
          <div>
            <p class="edu-card__school">${escapeHtml(item.organization)}</p>
            <h3>${escapeHtml(item.title)}</h3>
          </div>
          <span class="edu-card__status edu-card__status--${status.key}">${escapeHtml(status.label)}</span>
        </div>
        <p class="edu-card__period">${escapeHtml(item.period)}</p>
        <p>${escapeHtml(item.description)}</p>
        <p class="training-card__themes-label">${escapeHtml(ui.education.themesLabel)}</p>
        <ul class="skill-tags training-card__themes">
          ${item.themes
            .map((theme) => `<li><span class="skill-tag">${escapeHtml(theme)}</span></li>`)
            .join("")}
        </ul>
        <a class="training-card__org-link" href="${escapeHtml(item.organizationUrl)}" target="_blank" rel="noopener noreferrer">
          ${escapeHtml(ui.education.orgLinkLabel)}
        </a>
      </article>`;
    })
    .join("");

  root.innerHTML = `
    <div class="edu-block">
      <h3 class="edu-block__title">${escapeHtml(ui.education.academicHeading)}</h3>
      <div class="edu-grid">${academicCards}</div>
    </div>
    ${
      complementary.length
        ? `<div class="edu-block">
            <h3 class="edu-block__title">${escapeHtml(ui.education.complementaryHeading)}</h3>
            <div class="edu-grid edu-grid--complementary">${complementaryCards}</div>
          </div>`
        : ""
    }
  `;
}

function renderAll(lang) {
  const ui = window.PortfolioI18n.getUi(lang);
  const meta = window.PortfolioI18n.getMeta();
  if (!ui || !meta) {
    console.error("[portfolio] Impossible de rendre le contenu.");
    return;
  }
  renderStaticChrome(lang);
  renderAboutLanguages(lang);
  renderSkills(lang);
  renderExperience(lang);
  renderProjects(lang);
  renderEducation(lang);
}

  window.PortfolioRender = {
    renderStaticChrome,
    renderAboutLanguages,
    renderSkills,
    renderExperience,
    renderProjects,
    renderEducation,
    renderAll
  };
})();
