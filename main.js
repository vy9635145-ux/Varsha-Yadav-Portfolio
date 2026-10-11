document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const navLinks = document.querySelector("#nav-links");
  const toast = document.querySelector("#toast");

  // Mobile navigation
  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("open", !isOpen);
  });
  navLinks?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation menu");
  }));

  // Small toast notification
  window.showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(window.toastTimer);
    window.toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  };

  // Reveal content as it enters the viewport
  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // Project cards and filters
  const grid = document.querySelector("#projects-grid");
  const filters = document.querySelectorAll(".filter-btn");
  const projects = window.PORTFOLIO_PROJECTS || [];
  const icon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`;
  const artMarkup = () => `<div class="project-art" aria-hidden="true"><div class="art-top"><span></span><span></span><span></span></div><div class="art-line"></div><div class="art-line short"></div><div class="art-blocks"><span></span><span></span><span></span></div></div>`;

  function renderProjects(filter = "all") {
    if (!grid) return;
    const filtered = projects.filter(project => filter === "all" || project.category === filter);
    if (!filtered.length) {
      grid.innerHTML = '<p class="no-projects">No projects in this category yet.</p>';
      return;
    }
    grid.innerHTML = filtered.map(project => {
      const liveLink = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">${icon("external-link")} Live demo</a>`
        : `<a class="disabled" href="#contact" aria-label="Live demo not published yet">${icon("clock-3")} Coming soon</a>`;
      const githubLink = project.githubUrl
        ? `<a href="${project.githubUrl}" target="_blank" rel="noreferrer">${icon("github")} Source code</a>`
        : "";
      return `<article class="project-card panel reveal">
        <div class="project-cover"><span class="project-number">${project.number}</span>${artMarkup()}</div>
        <div class="project-content">
          <div class="project-meta"><span class="project-type">${project.type}</span>${icon("arrow-up-right")}</div>
          <h3>${project.title}</h3><p>${project.description}</p>
          <div class="project-tech">${project.technologies.map(tech => `<span>${tech}</span>`).join("")}</div>
          <div class="project-links">${liveLink}${githubLink}</div>
        </div>
      </article>`;
    }).join("");
    grid.querySelectorAll(".reveal").forEach(item => requestAnimationFrame(() => item.classList.add("is-visible")));
    if (window.lucide) window.lucide.createIcons();
  }
  renderProjects();
  filters.forEach(button => button.addEventListener("click", () => {
    filters.forEach(item => item.classList.toggle("active", item === button));
    renderProjects(button.dataset.filter || "all");
  }));

  // Copy email address
  document.querySelector("#copy-email")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("vy9635145@gmail.com");
      window.showToast("Email address copied!");
    } catch {
      window.showToast("Email: vy9635145@gmail.com");
    }
  });

  // Current year
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // Icons
  if (window.lucide) window.lucide.createIcons();
});
