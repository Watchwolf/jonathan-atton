/* Proposition C — « En direct »
   Live clock, career chrono, camera switch, ticker, counters,
   scroll reveals and the contact form. */

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
};

const pad = (n) => String(n).padStart(2, '0');

/* ---------- Clock + career chrono ---------- */
const CAREER_START = new Date(2010, 0, 4, 9, 0, 0); // first day at Euro Information

function careerElapsed(now) {
    const s = CAREER_START;
    let y = now.getFullYear() - s.getFullYear();
    let m = now.getMonth() - s.getMonth();
    let d = now.getDate() - s.getDate();
    let rest = (now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds())
        - (s.getHours() * 3600 + s.getMinutes() * 60 + s.getSeconds());
    if (rest < 0) { rest += 86400; d--; }
    if (d < 0) {
        m--;
        d += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (m < 0) { y--; m += 12; }
    return { y, m, d, h: Math.floor(rest / 3600), mi: Math.floor((rest % 3600) / 60), se: rest % 60 };
}

function initClock() {
    const clock = document.querySelector('[data-clock]');
    const chrono = document.querySelector('[data-chrono]');
    const hms = document.querySelector('[data-chrono-hms]');
    const tick = () => {
        const now = new Date();
        if (clock) clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
        const e = careerElapsed(now);
        if (chrono) chrono.textContent = `${e.y} a · ${pad(e.m)} m · ${pad(e.d)} j`;
        if (hms) hms.textContent = `+ ${pad(e.h)}:${pad(e.mi)}:${pad(e.se)}`;
    };
    tick();
    setInterval(tick, 1000);
}

/* ---------- Camera switch (main feed ⇄ picture-in-picture) ---------- */
function initCameras() {
    const screen = document.querySelector('.screen');
    const pip = document.querySelector('[data-pip]');
    if (!screen || !pip) return;
    const feedImg = screen.querySelector('[data-feed-img]');
    const pipImg = pip.querySelector('[data-pip-img]');
    const pipLabel = pip.querySelector('[data-pip-label]');
    const camNow = screen.querySelector('[data-cam-now]');
    const sub = screen.querySelector('.lt-sub');

    const cams = {
        terrain: {
            src: 'images/canicross-hd.jpg',
            alt: 'Jonathan Atton en course de canicross avec son chien',
            label: 'Terrain',
            pos: '56% 45%',
            sub: 'Alsace — Moselle · Fondateur de Canicompet'
        },
        bureau: {
            src: 'images/jonathan-atton-portrait-hd.jpg',
            alt: 'Jonathan Atton en tenue de bureau',
            label: 'Bureau',
            pos: '50% 22%',
            sub: 'En poste chez TVH Consulting · Dynamics 365 · React'
        }
    };
    let main = 'terrain';
    let busy = false;

    const apply = () => {
        const other = main === 'terrain' ? 'bureau' : 'terrain';
        feedImg.src = cams[main].src;
        feedImg.alt = cams[main].alt;
        feedImg.style.objectPosition = cams[main].pos;
        pipImg.src = cams[other].src;
        pip.classList.toggle('is-landscape', other === 'terrain');
        pipLabel.textContent = `CAM 2 · ${cams[other].label}`;
        camNow.textContent = `CAM 1 · ${cams[main].label}`;
        pip.setAttribute('aria-label', `Passer sur la caméra 2 : ${cams[other].label.toLowerCase()}`);
        const flag = sub.querySelector('.flag-fr');
        sub.textContent = cams[main].sub;
        sub.prepend(flag);
    };

    pip.addEventListener('click', () => {
        if (busy) return;
        busy = true;
        main = main === 'terrain' ? 'bureau' : 'terrain';
        if (reducedMotion) {
            apply();
            busy = false;
            return;
        }
        screen.classList.remove('is-wiping');
        void screen.offsetWidth;
        screen.classList.add('is-wiping');
        setTimeout(apply, 240);
        setTimeout(() => { screen.classList.remove('is-wiping'); busy = false; }, 720);
    });
}

/* ---------- Ticker: duplicate items for a seamless loop ---------- */
function initTicker() {
    const track = document.querySelector('[data-ticker]');
    if (!track) return;
    Array.from(track.children).forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
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

/* ---------- Contact form ---------- */
function initForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    const studio = form.closest('.studio');
    const ok = studio.querySelector('.form-ok');
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
            studio.classList.add('is-sent');
        } catch (err) {
            console.error('Contact form error:', err);
            showError('Une erreur est survenue. Réessayez ou écrivez-moi directement à jonathan.atton@gmail.com.');
        } finally {
            clearTimeout(timer);
            submit.disabled = false;
            label.textContent = 'Envoyer le message';
        }
    });

    studio.querySelector('[data-form-again]')?.addEventListener('click', () => {
        ok.hidden = true;
        form.hidden = false;
        studio.classList.remove('is-sent');
        form.firstName.focus();
    });
}

/* ---------- Page chrome ---------- */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.theme-btn')?.addEventListener('click', () => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        store.set('theme', next);
    });

    const reveals = document.querySelectorAll('.reveal');
    if (reducedMotion) {
        reveals.forEach((el) => el.classList.add('is-in'));
    } else {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (en.isIntersecting) {
                    en.target.classList.add('is-in');
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
        reveals.forEach((el) => io.observe(el));
    }

    const links = document.querySelectorAll('[data-nav]');
    const spy = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const id = en.target.id === 'top' ? null : en.target.id;
            links.forEach((a) => a.classList.toggle('is-active', a.dataset.nav === id));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

    initClock();
    initCameras();
    initTicker();
    initCounters();
    initForm();

    console.log('%c● EN DIRECT%c  Jonathan Atton — développeur fullstack sénior & sportif d\'endurance\n→ jonathan.atton@gmail.com',
        'background:#ff2e44;color:#fff;font:800 12px sans-serif;padding:3px 8px', 'font:12px ui-monospace,monospace');
});
