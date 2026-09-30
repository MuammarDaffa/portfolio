/* ============================================
   MAIN.JS — Portfolio Logic
   ============================================ */

import './styles/main.css';

// ---- Project Data (separated from markup per PRD) ----
const projectsData = [
  {
    number: '01',
    name: 'Dapur Aisyah',
    description: 'Aplikasi pemesanan katering berbasis web untuk mengelola menu, pesanan, pembayaran, dan stok.',
    purpose: 'Built as a final project (tugas akhir) to solve real workflow challenges in a catering business — from order management to stock tracking.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    features: ['Menu management', 'Order processing', 'Payment tracking', 'Stock management', 'Admin dashboard'],
    image: null, // Replace with actual screenshot path, e.g. '/images/dapur-aisyah.webp'
    github: 'https://github.com/',
    demo: null, // Replace with live demo URL if available
  },
  // Add more projects here following the same structure.
  // Example:
  // {
  //   number: '02',
  //   name: 'Project Name',
  //   description: 'Short description.',
  //   purpose: 'Why this project was built.',
  //   tech: ['Tech1', 'Tech2'],
  //   features: ['Feature 1', 'Feature 2'],
  //   image: '/images/project-name.webp',
  //   github: 'https://github.com/...',
  //   demo: 'https://...',
  // },
];

// ---- Experience Data ----
const experienceData = [
  // Uncomment and fill in when you have real experience:
  // {
  //   position: 'Web Developer Intern',
  //   company: 'Company Name',
  //   period: 'Jan 2026 — Mar 2026',
  //   description: 'Description of role and contributions.',
  //   responsibilities: [
  //     'Built and maintained web features using Laravel',
  //     'Collaborated with the team on database design',
  //   ],
  //   tech: ['Laravel', 'PHP', 'MySQL'],
  // },
];


// ============================================
// RENDER FUNCTIONS
// ============================================

/**
 * Render project cards into the DOM
 */
function renderProjects() {
  const container = document.getElementById('projectsList');
  if (!container) return;

  if (projectsData.length === 0) {
    container.innerHTML = `
      <div class="experience__placeholder">
        Projects will be added here.
      </div>
    `;
    return;
  }

  container.innerHTML = projectsData.map(project => `
    <article class="project-card">
      <div class="project-card__image">
        ${project.image
          ? `<img src="${project.image}" alt="Screenshot of ${project.name}" loading="lazy" />`
          : `<div class="project-card__image-placeholder">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Screenshot placeholder</span>
            </div>`
        }
      </div>
      <div class="project-card__body">
        <div class="project-card__number">${project.number}</div>
        <h3 class="project-card__name">${project.name}</h3>
        <p class="project-card__desc">${project.description}</p>
        ${project.purpose ? `<p class="project-card__purpose">${project.purpose}</p>` : ''}
        <div class="project-card__tech">
          ${project.tech.map(t => `<span class="project-card__tech-tag">${t}</span>`).join('')}
        </div>
        ${project.features && project.features.length > 0 ? `
          <div class="project-card__features">
            <div class="project-card__features-title">Key Features</div>
            <ul class="project-card__features-list">
              ${project.features.map(f => `<li>${f}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        <div class="project-card__actions">
          ${project.demo ? `<a href="${project.demo}" class="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
          ${project.github ? `<a href="${project.github}" class="btn btn--secondary btn--sm" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Render experience items into the DOM
 */
function renderExperience() {
  const container = document.getElementById('experienceList');
  if (!container) return;

  if (experienceData.length === 0) {
    container.innerHTML = `
      <div class="experience__placeholder">
        Experience, internships, or relevant activities will be listed here as they become available.
      </div>
    `;
    return;
  }

  container.innerHTML = experienceData.map(exp => `
    <div class="experience__item">
      <div class="experience__header">
        <div class="experience__position">${exp.position}</div>
        <div class="experience__period">${exp.period}</div>
      </div>
      <div class="experience__company">${exp.company}</div>
      ${exp.description ? `<p class="experience__desc">${exp.description}</p>` : ''}
      ${exp.responsibilities && exp.responsibilities.length > 0 ? `
        <ul class="experience__responsibilities">
          ${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
      ` : ''}
      ${exp.tech && exp.tech.length > 0 ? `
        <div class="experience__tech">
          ${exp.tech.map(t => `<span class="experience__tech-tag">${t}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');
}


// ============================================
// MOBILE NAVIGATION
// ============================================

function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when clicking a nav link
  menu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}


// ============================================
// ACTIVE NAV HIGHLIGHT ON SCROLL
// ============================================

function initScrollSpy() {
  const sections = document.querySelectorAll('.section[id], .hero[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('is-active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  });

  sections.forEach(section => observer.observe(section));
}


// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderExperience();
  initMobileNav();
  initScrollSpy();
});
