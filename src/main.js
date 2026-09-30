/* ============================================
   MAIN.JS — Portfolio Logic
   ============================================ */

import './styles/main.css';

// ---- Project Data (separated from markup per PRD) ----
const projectsData = [
  {
    name: 'Dapur Aisyah',
    description: 'Website pemesanan katering secara online yang memungkinkan pelanggan melihat menu dan melakukan pemesanan.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind'],
    image: '/images/dapur_aisyah.png',
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    name: 'Coffee Thrones',
    description: 'Website Coffee Thrones dengan fitur CRUD untuk mengelola menu dan galeri.',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    image: '/images/thrones (2).png',
    github: 'https://github.com/',
    demo: 'https://example.com',
  },
  {
    name: 'Flutter Book App',
    description: 'Aplikasi Flutter yang mengambil data dari Open Books API dan menampilkan judul buku, sinopsis, dan rating.',
    tech: ['Flutter', 'Dart', 'API'],
    image: '/images/buku.png',
    github: 'https://github.com/',
    demo: 'https://example.com',
  }
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
      <div class="project-card__image-wrapper">
        ${project.svg
          ? project.svg
          : project.image
            ? `<img src="${project.image}" alt="Screenshot of ${project.name}" class="project-card__image" loading="lazy" />`
            : `<div class="project-card__image-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>`
        }
        ${project.github ? `
        <a href="${project.github}" class="project-card__badge" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>` : ''}
      </div>
      <div class="project-card__body">
        <h3 class="project-card__name">${project.name}</h3>
        <p class="project-card__desc">${project.description}</p>
        
        <div class="project-card__tech">
          ${project.tech.map(t => `<span class="project-card__tech-tag">${t}</span>`).join('')}
        </div>
        
        <div class="project-card__footer">
          <span class="project-card__price-fake">Project</span>
          ${project.demo ? `
          <a href="${project.demo}" class="project-card__action" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>` : ''}
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
