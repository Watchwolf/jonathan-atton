document.addEventListener('DOMContentLoaded', () => {
    // Internationalization (i18n)
    const translations = {
        "fr": {
            "nav": {
                "about": "À propos",
                "skills": "Compétences",
                "experience": "Expériences",
                "portfolio": "Portfolio",
                "sports": "Sports",
                "nav_prev": "Précédent",
                "nav_next": "Suivant"
            },
            "hero": {
                "title": "Jonathan Atton",
                "subtitle": "Développeur Fullstack",
                "location": "Secteur Alsace - Moselle - France",
                "text": "Président Cani'Compet Alsace | Sportif canicross & triathlon",
                "contact": "Me contacter",
                "cv_title": "Télécharger mon CV"
            },
            "about": {
                "title": "À propos",
                "p1": "En tant que développeur logiciel sénior, je suis prêt à apporter une valeur ajoutée immédiate à votre entreprise. Mon expérience multisectorielle (banque, juridique, RGPD, laboratoire d’analyses, sport) me permet de comprendre et de m’adapter rapidement à des contextes variés. Mon expertise technique assure la création de solutions logiciels capables de répondre aux défis les plus complexes.",
                "p2": "Au-delà du code, je mets à profit mes compétences complémentaires en matière de stratégie décisionnelle, de marketing et d’encadrement de projets & équipes pour assurer une gestion intégrée du cycle de vie produit."
            },
            "skills": {
                "title": "Compétences",
                "backend": {
                    "title": "Back-end",
                    "item1": "<strong>Python / Django</strong>: Maîtrise avancée, APIs RESTful.",
                    "item2": "<strong>.NET / C#</strong>: Écosystème Microsoft, WPF, Analyse d'images, IA.",
                    "item3": "<strong>WebSocket</strong>: Communication temps réel."
                },
                "frontend": {
                    "title": "Front-end",
                    "item1": "<strong>Angular / Ionic</strong>: Applications web et mobiles modernes.",
                    "item2": "<strong>Microsoft Dynamics</strong>: Et PowerApps.",
                    "item3": "<strong>React</strong>: Avec intégration dans Microsoft Dynamics.",
                    "item4": "<strong>Python / PyQt</strong>: Interfaces de bureau."
                },
                "data": {
                    "title": "Data & Cloud",
                    "item1": "<strong>SQL</strong>: Bases de données relationnelles, optimisation.",
                    "item2": "<strong>Cloud (OVH)</strong>: Déploiement, gestion d'infrastructure.",
                    "item3": "<strong>OS</strong>: Linux, MacOS, Windows."
                },
                "ia": {
                    "title": "R&D / IA",
                    "item1": "<strong>OpenCV / Emgu</strong>: Vision par ordinateur.",
                    "item2": "<strong>IA</strong>: Analyse automatique.",
                    "item3": "<strong>Intégration de l'IA</strong>: Dans les applications."
                },
                "soft": {
                    "title": "Soft Skills",
                    "item1": "<strong>Leadership & Management</strong>: Encadrement d'équipes et de projets.",
                    "item2": "<strong>Gestion de projet</strong>: Méthodologies Agiles, Scrum.",
                    "item3": "<strong>Adaptabilité</strong>: Capacité à évoluer dans des contextes variés.",
                    "item4": "<strong>Vision stratégique</strong>: Accompagnement de la croissance produit."
                },
                "languages": {
                    "title": "Langues",
                    "item1": "<strong>Français</strong>: Maternel.",
                    "item2": "<strong>Anglais</strong>: Professionnel."
                }
            },
            "experience": {
                "title": "Expériences",
                "exp1": {
                    "date": "10/2025 – Aujourd’hui",
                    "title": "Développeur sénior – TVH Consulting",
                    "desc": "Intégrateur et développeur spécialisé sur la solution <strong>Microsoft Dynamics</strong>. Conception et déploiement d'applications métiers avancées exploitant la puissance de <strong>Canvas Apps</strong> et la flexibilité de <strong>React</strong> pour répondre aux besoins critiques de gestion d'entreprise."
                },
                "exp2": {
                    "date": "12/2016 – Aujourd’hui",
                    "title": "Création de la plateforme RacesConnect",
                    "desc": "Création et promotion des plateformes mobiles <a href=\"https://racesconnect.com\" target=\"_blank\">RacesConnect</a> et <a href=\"https://canicompet.com\" target=\"_blank\">Canicompet</a>. Gestion des inscriptions et chronométrage."
                },
                "exp3": {
                    "date": "06/2020 – 02/2025",
                    "title": "Création de la plateforme CaniGPS",
                    "desc": "Solution de suivi GPS pour chiens <a href=\"https://canigps.fr\" target=\"_blank\">CaniGPS</a>. Localisation, clôtures virtuelles, suivi d'activité sportif."
                },
                "exp4": {
                    "date": "04/2018 – 12/2022",
                    "title": "Développeur sénior Eurofins",
                    "desc": "R&D sur l'analyse automatique par microscope électronique. Automatisation, IA, ergonomie."
                },
                "exp5": {
                    "date": "01/2013 – 03/2018",
                    "title": "Responsable Informatique ActeCil",
                    "desc": "Mise en place infrastructure, outils SAS (APM, CilApps), management équipe."
                },
                "exp6": {
                    "date": "01/2010 – 01/2013",
                    "title": "Développeur Euro Information",
                    "desc": "Outils WEB, statistiques, CMS multi-sites pour Crédit Mutuel CIC."
                }
            },
            "portfolio": {
                "title": "Portfolio",
                "project1": {
                    "title": "Son espace santé / refuge / éleveur",
                    "desc": "Solution complète de gestion du bien-être et du suivi administratif pour les propriétaires d'animaux, les refuges et les éleveurs.",
                    "link": "Voir le site"
                },
                "project2": {
                    "title": "RacesConnect – Canicompet",
                    "desc": "Plateformes de gestion d'inscriptions et chronométrage de compétitions. <strong>+20 000 utilisateurs actifs</strong>.",
                    "link": "Voir le site"
                },
                "project3": {
                    "title": "RacesConnect Timing",
                    "desc": "Logiciel pour gérer les listes de départ et le chronométrage des compétitions. Chronométrage manuel ou automatique avec des puces.",
                    "link": "Voir le site"
                },
                "project4": {
                    "title": "CaniClub Connect",
                    "desc": "Application mobile pour clubs canins : gestion membres, comm, boutique."
                },
                "project5": {
                    "title": "CaniGPS",
                    "desc": "Plateforme de géolocalisation et suivi d'activité pour chiens.",
                    "link": "Voir le site"
                }
            },
            "sports": {
                "title": "Sports",
                "p1": "Athlète accompli et passionné, je pratique régulièrement le canicross, le caniVTT, le triathlon et le Xterra. J’ai participé à plusieurs championnats de France, d’Europe et du Monde.",
                "p2": "Cette discipline m'apporte résilience et capacité à atteindre des objectifs ambitieux. Je suis également président du club <strong>Cani’Compet Alsace</strong> et organisateur du <a href=\"https://canicrossdebenfeld.canicompet.com/\" target=\"_blank\">canicross de Benfeld</a>."
            },
            "footer": {
                "rights": "© 2026 Jonathan Atton. Tous droits réservés."
            }
        },
        "en": {
            "nav": {
                "about": "About",
                "skills": "Skills",
                "experience": "Experience",
                "portfolio": "Portfolio",
                "sports": "Sports",
                "nav_prev": "Previous",
                "nav_next": "Next"
            },
            "hero": {
                "title": "Jonathan Atton",
                "subtitle": "Fullstack Developer",
                "location": "Alsace - Moselle Sector - France",
                "text": "President of Cani'Compet Alsace | Canicross & Triathlon athlete",
                "contact": "Contact me",
                "cv_title": "Download my CV"
            },
            "about": {
                "title": "About",
                "p1": "As a senior software developer, I am ready to bring immediate added value to your company. My multi-sector experience (banking, legal, GDPR, analysis laboratory, sports) allows me to understand and quickly adapt to various contexts. My technical expertise ensures the creation of software solutions capable of meeting the most complex challenges.",
                "p2": "Beyond code, I leverage my complementary skills in decision-making strategy, marketing, and project & team management to ensure integrated product lifecycle management."
            },
            "skills": {
                "title": "Skills",
                "backend": {
                    "title": "Back-end",
                    "item1": "<strong>Python / Django</strong>: Advanced mastery, RESTful APIs.",
                    "item2": "<strong>.NET / C#</strong>: Microsoft ecosystem, WPF, Image analysis, AI.",
                    "item3": "<strong>WebSocket</strong>: Real-time communication."
                },
                "frontend": {
                    "title": "Front-end",
                    "item1": "<strong>Angular / Ionic</strong>: Modern web and mobile applications.",
                    "item2": "<strong>Microsoft Dynamics</strong>: and PowerApps.",
                    "item3": "<strong>React</strong>: Integrated within Microsoft Dynamics.",
                    "item4": "<strong>Python / PyQt</strong>: Desktop interfaces."
                },
                "data": {
                    "title": "Data & Cloud",
                    "item1": "<strong>SQL</strong>: Relational databases, optimization.",
                    "item2": "<strong>Cloud (OVH)</strong>: Deployment, infrastructure management.",
                    "item3": "<strong>OS</strong>: Linux, MacOS, Windows."
                },
                "ia": {
                    "title": "R&D / AI",
                    "item1": "<strong>OpenCV / Emgu</strong>: Computer vision.",
                    "item2": "<strong>AI</strong>: Automatic analysis.",
                    "item3": "<strong>AI Integration</strong>: Into applications."
                },
                "soft": {
                    "title": "Soft Skills",
                    "item1": "<strong>Leadership & Management</strong>: Team and project management.",
                    "item2": "<strong>Project Management</strong>: Agile methodologies, Scrum.",
                    "item3": "<strong>Adaptability</strong>: Ability to evolve in various contexts.",
                    "item4": "<strong>Strategic Vision</strong>: Supporting product growth."
                },
                "languages": {
                    "title": "Languages",
                    "item1": "<strong>French</strong>: Native.",
                    "item2": "<strong>English</strong>: Professional."
                }
            },
            "experience": {
                "title": "Experience",
                "exp1": {
                    "date": "10/2025 – Present",
                    "title": "Senior Developer – TVH Consulting",
                    "desc": "Integrator and developer specialized in <strong>Microsoft Dynamics</strong> solutions. Design and deployment of advanced business applications leveraging <strong>Canvas Apps</strong> and the flexibility of <strong>React</strong> to meet critical business management needs."
                },
                "exp2": {
                    "date": "12/2016 – Present",
                    "title": "Creation of RacesConnect Platform",
                    "desc": "Creation and promotion of mobile platforms <a href=\"https://racesconnect.com\" target=\"_blank\">RacesConnect</a> and <a href=\"https://canicompet.com\" target=\"_blank\">Canicompet</a>. Registration management and timing."
                },
                "exp3": {
                    "date": "06/2020 – 02/2025",
                    "title": "Creation of CaniGPS Platform",
                    "desc": "GPS tracking solution for dogs <a href=\"https://canigps.fr\" target=\"_blank\">CaniGPS</a>. Localization, virtual fences, sports activity tracking."
                },
                "exp4": {
                    "date": "04/2018 – 12/2022",
                    "title": "Senior Developer Eurofins",
                    "desc": "R&D on automatic analysis by electron microscope. Automation, AI, ergonomics."
                },
                "exp5": {
                    "date": "01/2013 – 03/2018",
                    "title": "IT Manager ActeCil",
                    "desc": "Infrastructure setup, SaaS tools (APM, CilApps), team management."
                },
                "exp6": {
                    "date": "01/2010 – 01/2013",
                    "title": "Developer Euro Information",
                    "desc": "Web tools, statistics, multi-site CMS for Crédit Mutuel CIC."
                }
            },
            "portfolio": {
                "title": "Portfolio",
                "project1": {
                    "title": "Son Espace Santé / Refuge / Éleveur",
                    "desc": "Complete health and administrative tracking solution for pet owners, shelters, and breeders.",
                    "link": "Visit site"
                },
                "project2": {
                    "title": "RacesConnect – Canicompet",
                    "desc": "Registration management and timing platforms for competitions. <strong>20,000+ active users</strong>.",
                    "link": "Visit site"
                },
                "project3": {
                    "title": "RacesConnect Timing",
                    "desc": "Software to manage start lists and competition timing. Manual or automatic timing with chips.",
                    "link": "Visit site"
                },
                "project4": {
                    "title": "CaniClub Connect",
                    "desc": "Mobile application for dog clubs: member management, communication, shop."
                },
                "project5": {
                    "title": "CaniGPS",
                    "desc": "Geolocation and activity tracking platform for dogs.",
                    "link": "Visit site"
                }
            },
            "sports": {
                "title": "Sports",
                "p1": "An accomplished and passionate athlete, I regularly practice canicross, bikejorning, triathlon, and Xterra. I have participated in several French, European, and World championships.",
                "p2": "This discipline brings me resilience and the ability to achieve ambitious goals. I am also president of the <strong>Cani’Compet Alsace</strong> club and organizer of the <a href=\"https://canicrossdebenfeld.canicompet.com/\" target=\"_blank\">Benfeld Canicross</a>."
            },
            "footer": {
                "rights": "© 2026 Jonathan Atton. All rights reserved."
            }
        }
    };

    let currentLang = localStorage.getItem('lang') || (navigator.language.startsWith('en') ? 'en' : 'fr');

    const applyTranslations = (lang) => {
        const langData = translations[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedValue(langData, key);
            if (value) el.innerHTML = value;
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            const value = getNestedValue(langData, key);
            if (value) el.setAttribute('title', value);
        });

        const langBtn = document.getElementById('lang-btn');
        if (langBtn) langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
    };

    const getNestedValue = (obj, path) => {
        return path.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    const toggleLang = () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem('lang', currentLang);
        applyTranslations(currentLang);
    };

    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLang);
    }

    // Initial load
    applyTranslations(currentLang);

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

    const applyTheme = (theme) => {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
        localStorage.setItem('theme', theme);
    };

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            currentTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
            applyTheme(currentTheme);
        });
    }

    applyTheme(currentTheme); // Initial check



    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const header = document.querySelector('.header');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        document.querySelector('.nav').classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            document.querySelector('.nav').classList.remove('active');
        });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Active Link Highlighting for Multi-page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
