// Reusable HTML components — inject header/footer to avoid duplication

const components = {
  headerHTML: `
    <header class="header">
      <div class="container header-container">
        <a href="index.html" class="logo">JA</a>
        <nav class="nav">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link" data-i18n="nav.about">À propos</a></li>
            <li><a href="skills.html" class="nav-link" data-i18n="nav.skills">Compétences</a></li>
            <li><a href="experience.html" class="nav-link" data-i18n="nav.experience">Expériences</a></li>
            <li><a href="portfolio.html" class="nav-link" data-i18n="nav.portfolio">Portfolio</a></li>
            <li><a href="sports.html" class="nav-link" data-i18n="nav.sports">Sports</a></li>
            <li class="lang-switcher">
              <button id="lang-btn" class="lang-btn" aria-label="Changer la langue / Change language">EN</button>
            </li>
            <li>
              <button id="theme-toggle" class="theme-toggle" aria-label="Toggle Theme">
                <i class="fa-solid fa-moon"></i>
                <i class="fa-solid fa-sun"></i>
              </button>
            </li>
          </ul>
          <button class="mobile-menu-btn" aria-label="Menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </nav>
      </div>
    </header>
  `,

  footerHTML: `
    <footer class="footer">
      <div class="container">
        <div class="footer-socials">
          <a href="https://www.linkedin.com/in/jonathan-atton-4286495b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
          <a href="https://github.com/Watchwolf" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
          <a href="Jonathan-Atton-CV.pdf" target="_blank" rel="noopener noreferrer" data-i18n-title="hero.cv_title" title="Télécharger mon CV" download><i class="fa-solid fa-file-pdf"></i></a>
        </div>
        <p data-i18n="footer.rights">&copy; 2026 Jonathan Atton. Tous droits réservés.</p>
      </div>
    </footer>
  `,

  injectComponents() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (header) header.outerHTML = this.headerHTML;
    if (footer) footer.outerHTML = this.footerHTML;
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = components;
}
