/* Jonathan Atton — site script
   French lives in the HTML; English is below. Switching back to French
   restores the original markup captured at load. */

const EN = {
    'a11y.skip': 'Skip to content',

    'nav.profil': 'Profile',
    'nav.expertise': 'Expertise',
    'nav.parcours': 'Career',
    'nav.projets': 'Projects',
    'nav.sport': 'Sport',
    'nav.contact': 'Contact',
    'header.cv': 'CV',

    'hero.kicker': 'Senior fullstack developer · Alsace — Moselle, France',
    'hero.tagline': 'Software built to <em>go the distance</em>.',
    'hero.lead': "15+ years designing web, mobile and business applications, from first idea to production. Today I bring <strong>AI</strong> into the mix to automate processes and get your tools ready for what's next.",
    'hero.cv': 'Download my CV',
    'hero.contact': 'Get in touch',
    'hero.scroll': 'Scroll',
    'badge.role': 'Senior fullstack developer',
    'badge.ai': 'AI',

    'stats.years': 'years of experience',
    'stats.users': 'Canicompet users',
    'stats.products': 'products built &amp; launched',
    'stats.sectors': 'industries',

    'profil.title': 'Profile',
    'profil.meta': 'Dev · Founder · Athlete',
    'profil.statement': 'Developer, founder and endurance athlete: three arenas, <em>one standard</em>.',
    'profil.p1': "As a <strong>senior software developer</strong>, I bring <strong>immediate added value</strong> to your company. My <strong>multi-sector experience</strong> (banking, legal, GDPR, IT consulting, analysis laboratory, sports) lets me quickly grasp your business challenges and <strong>take the initiative</strong> from day one. My technical expertise delivers solutions that can handle the most complex challenges.",
    'profil.p2': 'Beyond code, I draw on complementary skills in decision-making strategy, marketing and team leadership. This <strong>360° vision</strong> lets me propose innovative solutions aligned with your business goals.',
    'profil.l1.title': 'Developer',
    'profil.l1.text': 'Fullstack Python/Django, Angular/Ionic, React, .NET and Microsoft Dynamics 365. From real-time back-ends to mobile apps.',
    'profil.l2.title': 'Founder',
    'profil.l2.text': 'Founder of Canicompet and CaniGPS: from concept to products used by thousands of people, marketing and support included.',
    'profil.l3.title': 'Endurance athlete',
    'profil.l3.text': 'Canicross, triathlon, Xterra: French, European and World championships. Club president and race organiser.',

    'expertise.title': 'Expertise',
    'expertise.meta': 'Stack · AI · Leadership',
    'ai.kicker': 'AI &amp; automation',
    'ai.title': "Ready for tomorrow's AI needs.",
    'ai.text': 'Artificial intelligence is changing how software is built and how companies run. I rely on AI tools every day to <strong>build applications</strong>, <strong>automate processes</strong> and ship faster, with the rigour of a senior developer.',
    'ai.proof': 'Experience grounded in real projects: computer-vision R&amp;D at Eurofins since 2018, AI features built into Son Espace Santé.',
    'ai.c1.title': 'Intelligent applications',
    'ai.c1.text': 'Language models built into your applications: business assistants, document analysis, search and content generation.',
    'ai.c2.title': 'Process automation',
    'ai.c2.text': 'Workflows and agents connected to your existing tools (Dynamics 365, APIs, databases) to remove repetitive work.',
    'ai.c3.title': 'Scoping &amp; compliance',
    'ai.c3.text': 'Finding where AI creates real value, choosing the right solutions and deploying them with GDPR and data security in mind.',

    'skills.legend.core': 'Advanced',
    'skills.legend.good': 'Working proficiency',
    'skills.back': 'Back-end',
    'skills.api': 'REST APIs',
    'skills.ws': 'WebSocket (real time)',
    'skills.front': 'Front-end &amp; mobile',
    'skills.ms': 'Microsoft &amp; CRM',
    'skills.pcf': 'React components for Dynamics',
    'skills.data': 'Data &amp; cloud',
    'skills.ai': 'AI &amp; R&amp;D',
    'skills.llm': 'LLMs &amp; assistants',
    'skills.automation': 'Process automation',
    'skills.vision': 'Computer vision (OpenCV / Emgu)',
    'skills.lead': 'Leadership',
    'skills.autonomy': 'Autonomy &amp; decision-making',
    'skills.team': 'Team management',
    'skills.agile': 'Agile / Scrum project management',
    'skills.tenders': 'Key-account tenders',
    'skills.lang': 'Languages',
    'skills.fr': 'French — native',
    'skills.en': 'English — professional',

    'parcours.title': 'Career',
    'parcours.now': 'today',
    'parcours.today': 'Present',
    'parcours.live': 'Ongoing',
    'parcours.side': 'Side project',
    'parcours.demo': 'Try the demo ↗',
    'parcours.start': 'Start',
    'parcours.tag.ai': 'AI',
    'parcours.tag.mgmt': 'Management',
    'parcours.tvh.role': 'Senior developer',
    'parcours.tvh.text': 'Integrator and developer specialised in <strong>Microsoft Dynamics 365</strong>. Designing and deploying advanced business applications with <strong>Canvas Apps</strong> and <strong>React</strong> for clients such as TotalEnergies and Guinot.',
    'parcours.ses.text': 'Mobile app providing a digital passport for pets: paperwork, health and well-being tracking, with built-in <strong>AI</strong> features.',
    'parcours.cc.role': 'Founder',
    'parcours.cc.text': 'Built and grew a mobile platform that lets sports clubs manage registrations and time their competitions (manually or automatically) on their own. <strong>20,000+ users</strong>.',
    'parcours.gps.role': 'Founder',
    'parcours.gps.text': 'GPS tracking for dogs: real-time location, virtual fences, alerts and activity tracking.',
    'parcours.eurofins.role': 'Senior developer',
    'parcours.eurofins.text': 'World leader in laboratory testing. First on the lab analysis tracking software team, then <strong>lead developer</strong> of a flagship R&amp;D project: automated analysis with electron microscopes (computer vision, AI).',
    'parcours.actecil.role': 'IT manager',
    'parcours.actecil.text': 'Company specialised in GDPR audits and software. Set up the IT environment, built SaaS tools (APM, CilApps) and <strong>built a team</strong>. Tenders with key accounts (Thales, La Poste group).',
    'parcours.ei.role': 'Developer',
    'parcours.ei.text': 'Web tools, statistics, multi-site CMS and banking applications for Crédit Mutuel CIC.',
    'parcours.edu.role': "Master's degree in Software Engineering",
    'parcours.edu.text': 'During my studies: contributor to the worldwide open-source project Enlightenment (EFL) and Google Summer of Code participant.',

    'projets.title': 'Projects',
    'projets.meta': 'Designed, coded, shipped',
    'projets.cc.meta': 'Founder · since 2016',
    'projets.cc.text': 'Registration and timing platform for sports competitions, run by clubs entirely on their own.',
    'projets.cc.metric': 'active users',
    'projets.ses.meta': 'Side project · 2025',
    'projets.ses.text': 'Digital passport and well-being tracking for pets, with AI features.',
    'projets.ses.link': 'Try the demo',
    'projets.rc.meta': 'Desktop software',
    'projets.rc.text': 'Start lists and race timing, manual or automatic with chips.',
    'projets.gps.meta': 'Founder · 2020 – 2025',
    'projets.gps.text': 'Real-time location, virtual fences and activity tracking for dogs.',
    'projets.club.meta': 'Mobile app',
    'projets.club.text': 'App for dog clubs: members, messaging, calendar and shop.',
    'projets.next.meta': 'Next start',
    'projets.next.title': 'Your project?',
    'projets.next.text': "Business app, AI automation, Dynamics 365 integration… Let's talk.",

    'sport.title': 'Sport',
    'sport.meta': 'Canicross · Triathlon · Xterra',
    'sport.statement': 'Endurance, on the trails <em>as in production</em>.',
    'sport.p1': "A passionate athlete, I compete in canicross, bikejoring, triathlon and Xterra, and I have taken part in several <strong>French, European and World championships</strong>.",
    'sport.p2': 'Sport gives me resilience, consistency and a taste for ambitious goals: the same qualities I bring to every project.',
    'sport.r1.k': 'Disciplines',
    'sport.r1.v': 'Canicross · Bikejoring · Triathlon · Xterra',
    'sport.r2.k': 'Level',
    'sport.r2.v': 'French, European and World championships',
    'sport.r3.k': 'Club',
    'sport.r3.v': "President of Cani'Compet Alsace",
    'sport.r4.k': 'Organiser',
    'sport.r4.v': 'Benfeld Canicross ↗',

    'contact.title': 'Contact',
    'contact.meta': 'Reply within 48 h',
    'contact.statement': 'A project, a mission, <em>something to automate</em>?',
    'contact.text': "Collaboration, technical question or opportunity: drop me a line, I'd be glad to talk.",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Based in',
    'contact.location.v': 'Alsace — Moselle, France',
    'contact.web': 'Online',
    'contact.cv': 'Download the CV (PDF)',

    'form.first': 'First name',
    'form.last': 'Last name',
    'form.email': 'Email',
    'form.subject': 'Subject',
    'form.message': 'Message',
    'form.send': 'Send message',
    'form.ok.title': 'Message received!',
    'form.ok.text': "Thanks for your message. I'll get back to you shortly.",
    'form.ok.again': 'Send another message',

    'footer.tag': 'Senior fullstack developer &amp; endurance athlete',
    'footer.top': 'Back to the start'
};

const UI = {
    fr: {
        title: "Jonathan Atton — Développeur fullstack sénior & sportif d'endurance",
        langLabel: 'Switch to English',
        themeLabel: 'Changer de thème',
        sending: 'Envoi en cours…',
        missing: 'Merci de remplir tous les champs.',
        badEmail: "Merci d'indiquer une adresse email valide.",
        failed: 'Une erreur est survenue. Réessayez ou écrivez-moi directement à jonathan.atton@gmail.com.'
    },
    en: {
        title: 'Jonathan Atton — Senior fullstack developer & endurance athlete',
        langLabel: 'Passer en français',
        themeLabel: 'Toggle theme',
        sending: 'Sending…',
        missing: 'Please fill in every field.',
        badEmail: 'Please enter a valid email address.',
        failed: 'Something went wrong. Please try again or email me directly at jonathan.atton@gmail.com.'
    }
};

const store = {
    get(key) {
        try { return localStorage.getItem(key); } catch (e) { return null; }
    },
    set(key, value) {
        try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
    }
};

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let currentLang = store.get('lang') === 'en' ? 'en' : 'fr';

document.addEventListener('DOMContentLoaded', () => {
    /* ---------- i18n ---------- */
    const i18nEls = Array.from(document.querySelectorAll('[data-i18n]'));
    i18nEls.forEach(el => { el._fr = el.innerHTML; });

    const numberFormat = () => new Intl.NumberFormat(currentLang === 'fr' ? 'fr-FR' : 'en-US');

    const applyLang = (lang) => {
        currentLang = lang;
        i18nEls.forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerHTML = lang === 'en' && EN[key] !== undefined ? EN[key] : el._fr;
        });
        document.documentElement.lang = lang;
        document.title = UI[lang].title;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.textContent = lang === 'fr' ? 'EN' : 'FR';
            btn.setAttribute('aria-label', UI[lang].langLabel);
        });
        document.querySelectorAll('.theme-btn').forEach(btn => btn.setAttribute('aria-label', UI[lang].themeLabel));
        // Re-format counters that already finished
        document.querySelectorAll('[data-count].is-done').forEach(el => {
            el.textContent = numberFormat().format(Number(el.dataset.count));
        });
    };

    document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
        const next = currentLang === 'fr' ? 'en' : 'fr';
        store.set('lang', next);
        applyLang(next);
    }));

    if (currentLang === 'en') applyLang('en');

    /* ---------- Theme ---------- */
    document.querySelectorAll('.theme-btn').forEach(btn => btn.addEventListener('click', () => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        store.set('theme', next);
    }));

    /* ---------- Scroll: header state, progress, scroll cue ---------- */
    const header = document.querySelector('.site-header');
    const progress = document.querySelector('.progress span');
    const cue = document.querySelector('.scroll-cue');
    let ticking = false;

    const onScroll = () => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        header.classList.toggle('is-scrolled', y > 8);
        if (progress) progress.style.setProperty('--p', max > 0 ? Math.min(y / max, 1) : 0);
        if (cue) cue.classList.toggle('is-hidden', y > 80);
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(onScroll);
            ticking = true;
        }
    }, { passive: true });
    onScroll();

    /* ---------- Active section in navs ---------- */
    const navLinks = document.querySelectorAll('[data-nav]');
    const setActive = (id) => {
        navLinks.forEach(link => link.classList.toggle('is-active', link.dataset.nav === id));
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    }, { rootMargin: '-45% 0px -50% 0px' });

    document.querySelectorAll('main section[id]').forEach(section => {
        if (section.id === 'top') {
            new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) setActive(null);
            }, { rootMargin: '-45% 0px -50% 0px' }).observe(section);
        } else {
            sectionObserver.observe(section);
        }
    });

    /* ---------- Reveal on scroll ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    if (reducedMotion || !('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('is-in'));
    } else {
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-in');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
        revealEls.forEach(el => revealObserver.observe(el));
    }

    /* ---------- Counters (timing board) ---------- */
    const runCounter = (el) => {
        const target = Number(el.dataset.count);
        const finish = () => {
            el.textContent = numberFormat().format(target);
            el.classList.add('is-done');
        };
        if (reducedMotion) return finish();

        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(2, -10 * t);
            el.textContent = numberFormat().format(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(step);
            else finish();
        };
        el.textContent = '0';
        requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

    /* ---------- Hero track runner ---------- */
    const track = document.querySelector('.hero-track');
    if (track && reducedMotion && typeof track.pauseAnimations === 'function') {
        track.pauseAnimations();
    }

    /* ---------- Contact form ---------- */
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    const errorBox = document.getElementById('formError');
    const resetBtn = document.getElementById('formReset');

    if (form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const submitLabel = submitBtn.querySelector('.btn-label');
        const fields = ['firstName', 'lastName', 'email', 'subject', 'message'];

        const showError = (msg) => {
            errorBox.innerHTML = `<i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i><span></span>`;
            errorBox.querySelector('span').textContent = msg;
            errorBox.hidden = false;
        };

        const setBusy = (busy) => {
            submitBtn.disabled = busy;
            if (busy) {
                submitLabel.dataset.idle = submitLabel.innerHTML;
                submitLabel.textContent = UI[currentLang].sending;
            } else if (submitLabel.dataset.idle) {
                submitLabel.innerHTML = submitLabel.dataset.idle;
            }
        };

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            errorBox.hidden = true;

            const data = {};
            let missing = false;
            fields.forEach(name => {
                const input = form.elements[name];
                data[name] = input.value.trim();
                const empty = !data[name];
                input.closest('.field').classList.toggle('has-error', empty);
                if (empty) missing = true;
            });

            if (missing) return showError(UI[currentLang].missing);
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
                form.elements.email.closest('.field').classList.add('has-error');
                return showError(UI[currentLang].badEmail);
            }

            setBusy(true);
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 10000);

            try {
                const response = await fetch('https://server.canicompet.com/fr/accounts/ws_public/Contact/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...data,
                        recipient: 'website',
                        eventId: null,
                        source: 'portfolio_contact_form',
                        timestamp: new Date().toISOString()
                    }),
                    signal: controller.signal
                });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                form.reset();
                form.hidden = true;
                success.hidden = false;
            } catch (err) {
                console.error('Contact form error:', err);
                showError(UI[currentLang].failed);
            } finally {
                clearTimeout(timer);
                setBusy(false);
            }
        });

        form.addEventListener('input', (e) => {
            const field = e.target.closest('.field');
            if (field) field.classList.remove('has-error');
        });

        resetBtn?.addEventListener('click', () => {
            success.hidden = true;
            form.hidden = false;
            form.elements.firstName.focus();
        });
    }

    /* ---------- Console easter egg ---------- */
    console.log(
        '%cJonathan Atton%c\nDéveloppeur fullstack sénior · IA & automatisation · sportif d\'endurance\n→ Vous inspectez le code ? Parlons-en : jonathan.atton@gmail.com',
        'font: 800 28px "Big Shoulders", sans-serif; color:#ff5a1a; text-transform:uppercase;',
        'font: 13px ui-monospace, monospace; color:inherit;'
    );
});
