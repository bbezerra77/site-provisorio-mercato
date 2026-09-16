/* Mercato Jardim - main.js */

// ── Custom Cursor ──
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
let fx = 0, fy = 0, lx = 0, ly = 0;
document.addEventListener('mousemove', e => {
  fx = e.clientX; fy = e.clientY;
  cursor.style.left = fx + 'px';
  cursor.style.top  = fy + 'px';
});
(function animFollower(){
  lx += (fx - lx) * 0.12;
  ly += (fy - ly) * 0.12;
  follower.style.left = lx + 'px';
  follower.style.top  = ly + 'px';
  requestAnimationFrame(animFollower);
})();

// ── Scroll Nav ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// ── Mobile Menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger && hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(4px,4px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(4px,-4px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});
document.querySelectorAll('.mobile-link').forEach(l => {
  l.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    const spans = hamburger.querySelectorAll('span');
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ── Hero Parallax ──
const heroImg = document.getElementById('hero-parallax');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (heroImg && y < window.innerHeight) {
    heroImg.style.transform = 'translateY(' + (y * 0.35) + 'px)';
  }
});

// ── Particle System ──
(function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = [
      'width:' + size + 'px',
      'height:' + size + 'px',
      'left:' + Math.random()*100 + '%',
      'animation-duration:' + (8 + Math.random()*14) + 's',
      'animation-delay:' + (Math.random()*10) + 's',
      'opacity:' + (0.1 + Math.random()*0.5)
    ].join(';');
    container.appendChild(p);
  }
})();

// ── Intersection Observer - Reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-up, .reveal-card').forEach(el => {
  revealObserver.observe(el);
});

// ── Stagger cards by data-index ──
document.querySelectorAll('.reveal-card').forEach(card => {
  const idx = parseInt(card.dataset.index || 0);
  card.style.transitionDelay = (idx * 0.12) + 's';
});

// ── Counter Animation ──
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const start = performance.now();
  (function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(ease * target);
    if (progress < 1) requestAnimationFrame(update);
  })(start);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(animateCounter);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });

const expSection = document.querySelector('.experience');
if (expSection) counterObserver.observe(expSection);

// ── Showcase image subtle parallax on scroll ──
const showcaseImgs = document.querySelectorAll('.showcase-img-base, .setor-showcase:not(#frutas) .showcase-img');
window.addEventListener('scroll', () => {
  showcaseImgs.forEach(img => {
    const section = img.closest('.setor-showcase');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const ratio = 1 - (rect.top + rect.height) / (window.innerHeight + rect.height);
    img.style.transform = 'translateY(' + (ratio * 30 - 10) + 'px) scale(1.05)';
  });
});

// ══════════════════════════════════════════════
// ── FEATURE 1: TELEPORT TRANSITION ──
// ══════════════════════════════════════════════

const teleportOverlay = document.getElementById('teleport-overlay');
const teleportBg = document.getElementById('teleport-bg');
const teleportLabel = document.getElementById('teleport-label');
const teleportParticlesContainer = document.getElementById('teleport-particles');
let teleportActive = false;

function createTeleportParticles() {
  teleportParticlesContainer.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'teleport-particle';
    const size = Math.random() * 4 + 1;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const delay = Math.random() * 0.8;
    const duration = 1 + Math.random() * 1.5;
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${startX}%; top: ${startY}%;
      animation: teleport-particle-fly ${duration}s ${delay}s ease-out forwards;
    `;
    teleportParticlesContainer.appendChild(p);
  }
}

// Add teleport particle keyframes dynamically
const teleportStyle = document.createElement('style');
teleportStyle.textContent = `
  @keyframes teleport-particle-fly {
    0% { opacity: 0; transform: translate(0, 0) scale(0); }
    20% { opacity: 1; transform: scale(1); }
    100% { 
      opacity: 0; 
      transform: translate(${() => ''}0px, -200px) scale(0.5);
    }
  }
`;
document.head.appendChild(teleportStyle);

// Create unique particle animations
function animateTeleportParticles() {
  const particles = teleportParticlesContainer.querySelectorAll('.teleport-particle');
  particles.forEach((p, i) => {
    const destX = (Math.random() - 0.5) * 300;
    const destY = (Math.random() - 0.5) * 300;
    const delay = i * 30;
    setTimeout(() => {
      p.style.transition = `all ${0.8 + Math.random() * 1}s cubic-bezier(0.16, 1, 0.3, 1)`;
      p.style.opacity = '0.8';
      p.style.transform = `translate(${destX}px, ${destY}px) scale(0)`;
      setTimeout(() => {
        p.style.opacity = '0';
      }, 400 + Math.random() * 400);
    }, delay);
  });
}

function teleportTo(targetSelector, label, bgImage) {
  if (teleportActive) return;
  teleportActive = true;

  // Set background image
  teleportBg.style.backgroundImage = `url(${bgImage})`;
  teleportLabel.textContent = label;

  // Create particles
  createTeleportParticles();

  // Reset loader bar
  const loaderBar = teleportOverlay.querySelector('.teleport-loader-bar');
  loaderBar.style.transition = 'none';
  loaderBar.style.width = '0%';

  // Force reflow
  teleportOverlay.offsetHeight;

  // Activate overlay
  teleportOverlay.classList.remove('exit');
  teleportOverlay.classList.add('active');

  // Start loader animation
  requestAnimationFrame(() => {
    loaderBar.style.transition = 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    loaderBar.style.width = '100%';
  });

  // Animate particles
  setTimeout(animateTeleportParticles, 300);

  // After animation, scroll to target and exit
  setTimeout(() => {
    const target = document.querySelector(targetSelector);
    if (target) {
      // Instant scroll to position
      const targetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetTop, behavior: 'instant' });
    }

    // Start exit animation
    teleportOverlay.classList.add('exit');

    setTimeout(() => {
      teleportOverlay.classList.remove('active', 'exit');
      teleportActive = false;
      // Reset loader
      loaderBar.style.transition = 'none';
      loaderBar.style.width = '0%';
      teleportParticlesContainer.innerHTML = '';
    }, 700);
  }, 1600);
}

// ── Teleport for "Descobrir" button ──
const discoverBtn = document.getElementById('hero-discover-btn');
if (discoverBtn) {
  discoverBtn.addEventListener('click', e => {
    e.preventDefault();
    teleportTo('#setores', 'Explore Nossos Setores', 'assets/frutas.jpg');
  });
}

// ── Teleport for sector cards ──
document.querySelectorAll('.teleport-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetHref = link.getAttribute('href');
    const label = link.dataset.teleportLabel || '';
    const img = link.dataset.teleportImg || 'assets/hero.jpg';
    teleportTo(targetHref, label, img);
  });
});

// ── Smooth scroll for remaining anchor links (non-teleport) ──
// Nav links, footer links, mobile menu — all smooth scroll
document.querySelectorAll('a[href^="#"]:not(.teleport-link):not(#hero-discover-btn)').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Nav links themselves are NOT teleport-links, so they already smooth-scroll.
// Teleport links (setor cards only) keep their teleport behavior.


// ══════════════════════════════════════════════
// ── FEATURE 2: INTERACTIVE TAG IMAGE SWAP ──
// Applies to all 4 showcase sections
// ══════════════════════════════════════════════

function initShowcaseHover(imgWrapId, tagsId) {
  const imgWrap = document.getElementById(imgWrapId);
  const tagsContainer = document.getElementById(tagsId);
  if (!imgWrap || !tagsContainer) return;

  const hoverImgs = imgWrap.querySelectorAll('.showcase-img-hover');
  const tags = tagsContainer.querySelectorAll('.tag-interactive');

  tags.forEach(tag => {
    const key = tag.dataset.fruit;

    tag.addEventListener('mouseenter', () => {
      hoverImgs.forEach(img => img.classList.remove('active'));
      tags.forEach(t => t.classList.remove('active-tag'));

      const targetImg = imgWrap.querySelector(`.showcase-img-hover[data-fruit="${key}"]`);
      if (targetImg) {
        targetImg.classList.add('active');
        imgWrap.classList.add('has-active-hover');
        tag.classList.add('active-tag');
      }
    });

    tag.addEventListener('mouseleave', () => {
      setTimeout(() => {
        const anyHovered = tagsContainer.querySelector('.tag-interactive:hover');
        if (!anyHovered) {
          hoverImgs.forEach(img => img.classList.remove('active'));
          tags.forEach(t => t.classList.remove('active-tag'));
          imgWrap.classList.remove('has-active-hover');
        }
      }, 50);
    });
  });
}

// Init all 4 sections
initShowcaseHover('frutas-img-wrap',    'frutas-tags');
initShowcaseHover('padaria-img-wrap',   'padaria-tags');
initShowcaseHover('hortifruti-img-wrap','hortifruti-tags');
initShowcaseHover('mercearia-img-wrap', 'mercearia-tags');


// ── Hero entrance animation trigger ──
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal-up').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 400 + i * 180);
  });
});
