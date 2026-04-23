/* ================================================
   PORTFOLIO BTS SIO SISR – Zoha – script.js
   ================================================ */

/* ── Année dynamique footer ── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ── RGPD Banner ── */
const banner = document.getElementById('rgpd-banner');
const okBtn  = document.getElementById('rgpd-ok');
if (banner && okBtn) {
  // Déjà accepté ?
  if (localStorage.getItem('rgpd-ok') === '1') {
    banner.classList.add('hidden');
  }
  okBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
    localStorage.setItem('rgpd-ok', '1');
  });
}

/* ── Navigation mobile (hamburger) ── */
const toggle   = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });
  // Fermer le menu quand on clique sur un lien
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ── Active nav link au scroll ── */
const sections    = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      allNavLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === '#' + section.id);
      });
    }
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

/* ── Scroll reveal ── */
const reveals = document.querySelectorAll('.section-title, .section-desc, .card, .subsection-title');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ── Décodage email anti-scraping (RGPD) ── */
document.querySelectorAll('[data-email]').forEach(el => {
  const user   = el.dataset.email;
  const domain = el.dataset.domain;
  if (user && domain) {
    el.href        = `mailto:${user}@${domain}`;
    el.textContent = `${user}@${domain}`;
  }
});

/* ── Formulaire de contact (mailto – site statique) ── */
const form     = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Validation basique
    let valid = true;
    ['contact-nom', 'contact-email', 'contact-sujet', 'contact-msg'].forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) { el.classList.add('invalid'); valid = false; }
      else el.classList.remove('invalid');
    });
    const consent = document.getElementById('rgpd-consent');
    if (!consent.checked) {
      valid = false;
      if (feedback) {
        feedback.textContent = '❌ Veuillez accepter la politique de confidentialité.';
        feedback.className = 'form-feedback err';
      }
    }
    if (!valid) return;

    // Vérification email basique
    const emailEl = document.getElementById('contact-email');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
      emailEl.classList.add('invalid');
      if (feedback) {
        feedback.textContent = '❌ Adresse email invalide.';
        feedback.className = 'form-feedback err';
      }
      return;
    }

    // Construction du mailto
    // 🔧 Remplacer par votre adresse email
    const dest    = 'votre.email@example.com';
    const sujet   = encodeURIComponent(document.getElementById('contact-sujet').value.trim());
    const corps   = encodeURIComponent(
      `Nom : ${document.getElementById('contact-nom').value.trim()}\n` +
      `Email : ${document.getElementById('contact-email').value.trim()}\n\n` +
      document.getElementById('contact-msg').value.trim()
    );
    window.location.href = `mailto:${dest}?subject=${sujet}&body=${corps}`;

    if (feedback) {
      feedback.textContent = '✅ Votre messagerie va s\'ouvrir avec le message pré-rempli.';
      feedback.className = 'form-feedback ok';
    }
    form.reset();
  });

  // Suppression de la classe invalid en temps réel
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => el.classList.remove('invalid'));
  });
}
