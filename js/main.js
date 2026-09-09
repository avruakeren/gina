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

/* ── 11. DOWNLOAD CV — unduhan langsung via atribut download
   di #download-cv (index.html). Tidak perlu handler JS. ─────── */

/* ── 12. HERO ENTRANCE (anime.js) ──────────────────────────── */
(function () {
  if (!hasAnime) return;
  const heroEls = document.querySelectorAll(
    '.hero-greeting, .hero-name, .hero-description, .hero-buttons, .hero-socials, .hero-image'
  );
  heroEls.forEach(el => { el.style.opacity = 0; });

  const tl = anime.timeline({ easing: 'easeOutExpo' });
  tl.add({ targets: '.hero-greeting',    opacity: [0, 1], translateY: [24, 0], filter: ['blur(6px)', 'blur(0px)'], duration: 700 }, 0)
    .add({ targets: '.hero-name',        opacity: [0, 1], translateY: [36, 0], filter: ['blur(8px)', 'blur(0px)'], duration: 900 }, 150)
    .add({ targets: '.hero-image',       opacity: [0, 1], translateY: [30, 0], scale: [0.95, 1], duration: 900 }, 300)
    .add({ targets: '.hero-description', opacity: [0, 1], translateY: [24, 0], duration: 700 }, 700)
    .add({ targets: '.hero-buttons',     opacity: [0, 1], translateY: [24, 0], duration: 700 }, 900)
    .add({ targets: '.hero-socials .social-link',
           opacity: [0, 1], translateY: [16, 0], scale: [0.85, 1],
           duration: 600, delay: anime.stagger(80) }, 1050);
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
  document.querySelectorAll('.social-link, .btn-primary, .btn-outline').forEach(el => bindHover(el, false));
})();

/* ── 14. ABOUT PHOTO SLIDER ───────────────────────────────── */
(function () {
  var slider = document.getElementById('about-slider');
  var track = document.getElementById('about-track');
  if (!slider || !track) return;
  var slides = track.querySelectorAll('img');
  if (slides.length < 2) return;
  var prev = document.getElementById('about-prev');
  var next = document.getElementById('about-next');
  var dotsBox = document.getElementById('about-dots');
  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var i = 0, timer = null, touchX = null;

  slides.forEach(function (_, j) {
    var d = document.createElement('button');
    d.type = 'button';
    d.className = 'about-dot';
    d.setAttribute('role', 'tab');
    d.setAttribute('aria-label', 'Tampilkan foto ' + (j + 1));
    d.addEventListener('click', function () { go(j); restart(); });
    dotsBox.appendChild(d);
  });
  var dots = dotsBox.querySelectorAll('.about-dot');

  function go(j) {
    i = (j + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (i * 100) + '%)';
    dots.forEach(function (d, k) {
      d.classList.toggle('active', k === i);
      d.setAttribute('aria-selected', k === i ? 'true' : 'false');
    });
  }
  function start() {
    if (REDUCED || timer) return;
    timer = setInterval(function () { go(i + 1); }, 5000);
  }
  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
  }
  function restart() { stop(); start(); }

  prev.addEventListener('click', function () { go(i - 1); restart(); });
  next.addEventListener('click', function () { go(i + 1); restart(); });
  slider.addEventListener('mouseenter', stop);
  slider.addEventListener('mouseleave', start);
  slider.addEventListener('touchstart', function (e) {
    touchX = e.changedTouches[0].clientX;
    stop();
  }, { passive: true });
  slider.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
    start();
  }, { passive: true });
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) stop(); else start();
  });

  go(0);
  start();
})();

console.log('%c🚀 Portofolio Gina loaded!', 'color:#6C63FF;font-size:14px;font-weight:bold;');
    
