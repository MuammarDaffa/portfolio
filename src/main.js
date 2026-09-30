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
    github: 'https://github.com/MuammarDaffa/Dapur_Aisyah_Final',
    demo: 'https://github.com/MuammarDaffa/Dapur_Aisyah_Final',
  },
  {
    name: 'Coffee Thrones',
    description: 'Website promosi kedai kopi yang dibangun dengan Laravel. Memiliki halaman khusus admin (CMS) untuk mengelola katalog menu produk, galeri, hingga jam operasional secara dinamis .',
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    image: '/images/thrones (2).png',
    github: 'https://github.com/MuammarDaffa/website-coffee-thrones',
    demo: 'https://github.com/MuammarDaffa/website-coffee-thrones',
  },
  {
    name: 'Flutter Book App',
    description: 'Aplikasi Flutter yang mengambil data dari Open Books API dan menampilkan judul buku, sinopsis, dan rating.',
    tech: ['Flutter', 'Dart', 'API'],
    image: '/images/buku.png',
    github: 'https://github.com/MuammarDaffa/flutter_book_app',
    demo: 'https://github.com/MuammarDaffa/flutter_book_app',
  }
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
      </div>
      <div class="project-card__body">
        <h3 class="project-card__name">${project.name}</h3>
        <p class="project-card__desc">${project.description}</p>

        <div class="project-card__footer">
          <span class="project-card__price-fake">Lihat</span>
          ${project.demo ? `
          <a href="${project.demo}" class="project-card__action" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>` : ''}
        </div>
      </div>
    </article>
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
  initMobileNav();
  initScrollSpy();
});
