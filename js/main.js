/* ── 1. DARK / LIGHT MODE ──────────────────────────────────── */
const html        = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
  var themeColor = document.getElementById('theme-color');
  if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#0D1117' : '#FAF7F0');
}

const savedTheme = localStorage.getItem('theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ── 2. NAVBAR — SCROLL & HAMBURGER MENU ───────────────────── */
const navbar       = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu      = document.getElementById('nav-menu');
const navLinks     = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburgerBtn.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  hamburgerBtn.classList.toggle('active');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  });
});

// Tandai nav link aktif
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 90) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

/* ── 3. TYPING ANIMATION ────────────────────────────────────── */
const typingEl    = document.getElementById('typing-text');
const typingWords = [
  'Tenaga Pendidik',
  'Pengembang Kurikulum',
  'Trainer/Instruktur',
  'Pengembang Media Pembelajaran',
  'Pendidik Profesional',
  'Pendidikan Inklusif',
];

let wordIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  const currentWord = typingWords[wordIndex];
  if (isDeleting) {
    typingEl.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 60 : 110;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1800; isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
    speed = 400;
  }
  setTimeout(typeEffect, speed);
}
setTimeout(typeEffect, 800);

/* ── 4. SCROLL REVEAL ANIMATION (anime.js) ─────────────────── */
const REDUCED  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasAnime = typeof anime !== 'undefined' && !REDUCED;

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (!hasAnime) {
          el.classList.add('visible');
        } else {
          const params = {
            targets: el,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 900,
            delay: i * 90,
            easing: 'easeOutExpo',
            complete: () => el.classList.add('visible')
          };
          if (getComputedStyle(el).backdropFilter === 'none') {
            params.filter = ['blur(8px)', 'blur(0px)'];
          }
          try {
            anime(params);
          } catch (err) {
            el.classList.add('visible');
          }
        }
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── 5. SKILL BAR ANIMATION (anime.js) ─────────────────────── */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!hasAnime) {
          document.querySelectorAll('.skill-fill').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width') + '%';
          });
        } else {
          anime({
            targets: '.skill-fill',
            width: el => el.getAttribute('data-width') + '%',
            duration: 1400,
            delay: anime.stagger(120),
            easing: 'easeOutCubic'
          });
        }
        skillObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);
const skillsSection = document.getElementById('skills');
if (skillsSection) skillObserver.observe(skillsSection);

/* ── 6. COUNTER ANIMATION (anime.js) ───────────────────────── */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!hasAnime) {
          document.querySelectorAll('.stat-num').forEach(el => {
            el.textContent = el.getAttribute('data-count');
          });
        } else {
          document.querySelectorAll('.stat-num').forEach((el, i) => {
            const target = parseInt(el.getAttribute('data-count'));
            anime({
              targets: el,
              innerHTML: [0, target],
              round: 1,
              duration: 1800,
              delay: i * 100,
              easing: 'easeOutExpo',
              complete: () => { el.textContent = target; }
            });
          });
        }
        counterObserver.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);
const statsSection = document.querySelector('.stats-grid');
if (statsSection) counterObserver.observe(statsSection);

/* ── 7. PROJECT FILTER (anime.js) ──────────────────────────── */
const filterBtns   = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    const shown = [];
    projectCards.forEach(card => {
      const match = filter === 'all' || card.getAttribute('data-category') === filter;
      if (match) {
        shown.push(card);
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
    if (!hasAnime) {
      shown.forEach(card => card.classList.add('visible'));
    } else {
      anime({
        targets: shown,
        opacity: [0, 1],
        translateY: [26, 0],
        scale: [0.96, 1],
        duration: 650,
        delay: anime.stagger(80),
        easing: 'easeOutExpo',
        complete: () => shown.forEach(card => card.classList.add('visible'))
      });
    }
  });
});

/* ── 8. CONTACT FORM VALIDATION ─────────────────────────────── */
const contactForm = document.getElementById('contact-form');

function showError(id, msg) {
  const err = document.getElementById(id + '-error');
  const inp = document.getElementById(id);
  if (err) err.textContent = msg;
  if (inp) inp.style.borderColor = 'var(--danger)';
}
function clearError(id) {
  const err = document.getElementById(id + '-error');
  const inp = document.getElementById(id);
  if (err) err.textContent = '';
  if (inp) inp.style.borderColor = '';
}
function validateEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    let isValid = true;

    clearError('name');
    if (name.length < 3) { showError('name', 'Nama minimal 3 karakter.'); isValid = false; }

    clearError('email');
    if (!validateEmail(email)) { showError('email', 'Masukkan alamat email yang valid.'); isValid = false; }

    clearError('message');
    if (message.length < 10) { showError('message', 'Pesan minimal 10 karakter.'); isValid = false; }

    if (isValid) {
      const successEl = document.getElementById('form-success');
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Mengirim...';
      setTimeout(() => {
        contactForm.reset();
        successEl.textContent = '✅ Pesan berhasil dikirim! Saya akan segera membalas.';
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Pesan';
        setTimeout(() => { successEl.textContent = ''; }, 5000);
      }, 1500);
    }
  });

  ['name', 'email', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', () => clearError(id));
  });
}

/* ── 9. BACK TO TOP ─────────────────────────────────────────── */
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTopBtn.classList.toggle('visible', window.scrollY > 300);
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── 10. CANVAS PARTICLE EFFECT ─────────────────────────────── */
const canvas = document.getElementById('particle-canvas');
const ctx    = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x      = Math.random() * canvas.width;
    this.y      = Math.random() * canvas.height;
    this.size   = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.color  = '91,155,213';
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width)  this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
    ctx.fill();
  }
}

for (let i = 0; i < 55; i++) particles.push(new Particle());

function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(91,155,213,${0.12 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* ── 11. DOWNLOAD CV (PLACEHOLDER) ─────────────────────────── */
document.getElementById('download-cv')?.addEventListener('click', (e) => {
  e.preventDefault();
  alert('📄 CV belum tersedia. Silakan hubungi saya langsung melalui form kontak!');
});

/* ── 12. HERO ENTRANCE (anime.js) ──────────────────────────── */
(function () {
  if (!hasAnime) return;
  const heroEls = document.querySelectorAll(
    '.hero-greeting, .hero-name, .hero-typing, .hero-description, .hero-buttons, .hero-socials, .hero-image'
  );
  heroEls.forEach(el => { el.style.opacity = 0; });

  const tl = anime.timeline({ easing: 'easeOutExpo' });
  tl.add({ targets: '.hero-greeting',    opacity: [0, 1], translateY: [24, 0], filter: ['blur(6px)', 'blur(0px)'], duration: 700 }, 0)
    .add({ targets: '.hero-name',        opacity: [0, 1], translateY: [36, 0], filter: ['blur(8px)', 'blur(0px)'], duration: 900 }, 150)
    .add({ targets: '.hero-image',       opacity: [0, 1], translateY: [30, 0], scale: [0.95, 1], duration: 900 }, 300)
    .add({ targets: '.hero-typing',      opacity: [0, 1], translateY: [24, 0], duration: 700 }, 700)
    .add({ targets: '.hero-description', opacity: [0, 1], translateY: [24, 0], duration: 700 }, 900)
    .add({ targets: '.hero-buttons',     opacity: [0, 1], translateY: [24, 0], duration: 700 }, 1100)
    .add({ targets: '.hero-socials .social-link',
           opacity: [0, 1], translateY: [16, 0], scale: [0.85, 1],
           duration: 600, delay: anime.stagger(80) }, 1250);
})();

/* ── 13. HOVER PREMIUM (anime.js) ──────────────────────────── */
(function () {
  if (!hasAnime) return;
  const bindHover = (el, guardReveal) => {
    el.addEventListener('mouseenter', () => {
      if (guardReveal && !el.classList.contains('visible')) return;
      anime.remove(el);
      anime({
        targets: el,
        translateY: -6,
        scale: 1.02,
        duration: 350,
        easing: 'easeOutCubic'
      });
    });
    el.addEventListener('mouseleave', () => {
      if (guardReveal && !el.classList.contains('visible')) return;
      anime.remove(el);
      anime({
        targets: el,
        translateY: 0,
        scale: 1,
        duration: 450,
        easing: 'easeOutQuart'
      });
    });
  };
  document.querySelectorAll('.stat-card, .cert-card').forEach(el => bindHover(el, true));
  document.querySelectorAll('.tool-badge, .social-link, .btn-primary, .btn-outline').forEach(el => bindHover(el, false));
})();

console.log('%c🚀 Portofolio Gina loaded!', 'color:#6C63FF;font-size:14px;font-weight:bold;');
    
