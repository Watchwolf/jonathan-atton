/* Version F — « Air »
   Theme toggle (light by default, key 'theme-f'), compact mobile menu,
   scroll reveals, scroll-spy, counters and the contact form. */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
};

/* ---------- Theme ---------- */
function initTheme() {
    const btn = document.querySelector('.theme-btn');
    if (!btn) return;
    const root = document.documentElement;
    const sync = () => {
        const dark = root.getAttribute('data-theme') === 'dark';
        btn.setAttribute('aria-label', dark ? 'Activer le thème clair' : 'Activer le thème sombre');
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0f131c' : '#f6f8fb');
    };
    sync();
    btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        store.set('theme-f', next);
        sync();
    });
}

/* ---------- Mobile menu ---------- */
function initMenu() {
    const btn = document.querySelector('.menu-btn');
    const links = document.getElementById('navLinks');
    if (!btn || !links) return;
    const setOpen = (open) => {
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
        links.classList.toggle('is-open', open);
    };
    btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
    links.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && links.classList.contains('is-open')) { setOpen(false); btn.focus(); }
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-pill')) setOpen(false);
    });
}

/* ---------- Counters ---------- */
function initCounters() {
    const fmt = new Intl.NumberFormat('fr-FR');
    const run = (el) => {
        const target = Number(el.dataset.count);
        if (reducedMotion) { el.textContent = fmt.format(target); return; }
        const start = performance.now();
        const step = (now) => {
            const t = Math.min((now - start) / 1300, 1);
            el.textContent = fmt.format(Math.round(target * (1 - Math.pow(2, -10 * t))));
            if (t < 1) requestAnimationFrame(step);
            else el.textContent = fmt.format(target);
        };
        requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) { run(e.target); io.unobserve(e.target); }
        });
    }, { threshold: 0.6 });
    document.querySelectorAll('[data-count]').forEach((el) => io.observe(el));
}

/* ---------- Contact form (same logic as the live site) ---------- */
function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    const card = form.closest('.form-card');
    const ok = card.querySelector('.form-ok');
    const errorBox = form.querySelector('.form-error');
    const submit = form.querySelector('button[type="submit"]');
    const label = submit.querySelector('.btn-label');
    const fields = ['firstName', 'lastName', 'email', 'subject', 'message'];

    const showError = (msg) => {
        errorBox.textContent = msg;
        errorBox.hidden = false;
    };

    form.addEventListener('input', (e) => e.target.closest('.field')?.classList.remove('has-error'));

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        errorBox.hidden = true;
        const data = {};
        let missing = false;
        fields.forEach((name) => {
            data[name] = form[name].value.trim();
            const empty = !data[name];
            form[name].closest('.field').classList.toggle('has-error', empty);
            missing = missing || empty;
        });
        if (missing) return showError('Merci de remplir tous les champs.');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            form.email.closest('.field').classList.add('has-error');
            return showError("Merci d'indiquer une adresse email valide.");
        }

        submit.disabled = true;
        label.textContent = 'Envoi en cours…';
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 10000);
        try {
            const res = await fetch('https://server.canicompet.com/fr/accounts/ws_public/Contact/', {
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
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            form.reset();
            form.hidden = true;
            ok.hidden = false;
            card.classList.add('is-sent');
        } catch (err) {
            console.error('Contact form error:', err);
            showError('Une erreur est survenue. Réessayez ou écrivez-moi directement à jonathan.atton@gmail.com.');
        } finally {
            clearTimeout(timer);
            submit.disabled = false;
            label.textContent = 'Envoyer le message';
        }
    });

    card.querySelector('[data-form-again]')?.addEventListener('click', () => {
        ok.hidden = true;
        form.hidden = false;
        card.classList.remove('is-sent');
        form.firstName.focus();
    });
}

/* ---------- Page chrome ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMenu();

    const reveals = document.querySelectorAll('.reveal');
    if (reducedMotion || !('IntersectionObserver' in window)) {
        reveals.forEach((el) => el.classList.add('is-in'));
    } else {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (en.isIntersecting) {
                    en.target.classList.add('is-in');
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
        reveals.forEach((el) => io.observe(el));
    }

    const links = document.querySelectorAll('[data-nav]');
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const id = en.target.id === 'top' ? null : en.target.id;
            links.forEach((a) => {
                const on = a.dataset.nav === id;
                a.classList.toggle('is-active', on);
                if (on) a.setAttribute('aria-current', 'true');
                else a.removeAttribute('aria-current');
            });
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

    const onScroll = () => document.body.classList.toggle('is-scrolled', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    initCounters();
    initForm();
});
