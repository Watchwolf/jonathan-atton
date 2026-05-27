// Reusable HTML components — inject header/footer to avoid duplication

const components = {
  headerHTML: `
    <header class="header">
      <div class="container header-container">
        <a href="index.html" class="logo">JA</a>
        <nav class="nav">
          <ul class="nav-list">
            <li><a href="index.html" class="nav-link"><i class="fa-solid fa-user nav-icon"></i><span class="nav-text" data-i18n="nav.about">À propos</span></a></li>
            <li><a href="skills.html" class="nav-link"><i class="fa-solid fa-laptop-code nav-icon"></i><span class="nav-text" data-i18n="nav.skills">Compétences</span></a></li>
            <li><a href="experience.html" class="nav-link"><i class="fa-solid fa-briefcase nav-icon"></i><span class="nav-text" data-i18n="nav.experience">Expériences</span></a></li>
            <li><a href="portfolio.html" class="nav-link"><i class="fa-solid fa-folder-open nav-icon"></i><span class="nav-text" data-i18n="nav.portfolio">Portfolio</span></a></li>
            <li><a href="sports.html" class="nav-link"><i class="fa-solid fa-person-running nav-icon"></i><span class="nav-text" data-i18n="nav.sports">Sports</span></a></li>
            <li><a href="contact.html" class="nav-link"><i class="fa-solid fa-envelope nav-icon"></i><span class="nav-text" data-i18n="nav.contact">Contact</span></a></li>
            <li class="lang-switcher header-utility">
              <button class="lang-btn" aria-label="Changer la langue / Change language">EN</button>
            </li>
            <li class="header-utility">
              <button class="theme-toggle" aria-label="Toggle Theme">
                <i class="fa-solid fa-moon"></i>
                <i class="fa-solid fa-sun"></i>
              </button>
            </li>
          </ul>
        </nav>
        <div class="mobile-utilities">
          <button class="lang-btn" aria-label="Changer la langue / Change language">EN</button>
          <button class="theme-toggle" aria-label="Toggle Theme">
            <i class="fa-solid fa-moon"></i>
            <i class="fa-solid fa-sun"></i>
          </button>
        </div>
      </div>
    </header>
    <nav class="mobile-bottom-nav">
      <ul class="mobile-bottom-nav-list">
        <li><a href="index.html" class="nav-link mobile-nav-link"><i class="fa-solid fa-user nav-icon"></i><span class="nav-text" data-i18n="nav.about">À propos</span></a></li>
        <li><a href="skills.html" class="nav-link mobile-nav-link"><i class="fa-solid fa-laptop-code nav-icon"></i><span class="nav-text" data-i18n="nav.skills">Compétences</span></a></li>
        <li><a href="experience.html" class="nav-link mobile-nav-link"><i class="fa-solid fa-briefcase nav-icon"></i><span class="nav-text" data-i18n="nav.experience">Expériences</span></a></li>
        <li><a href="portfolio.html" class="nav-link mobile-nav-link"><i class="fa-solid fa-folder-open nav-icon"></i><span class="nav-text" data-i18n="nav.portfolio">Portfolio</span></a></li>
        <li><a href="sports.html" class="nav-link mobile-nav-link"><i class="fa-solid fa-person-running nav-icon"></i><span class="nav-text" data-i18n="nav.sports">Sports</span></a></li>
        <li><a href="contact.html" class="nav-link mobile-nav-link"><i class="fa-solid fa-envelope nav-icon"></i><span class="nav-text" data-i18n="nav.contact">Contact</span></a></li>
      </ul>
    </nav>
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
