/* ============================================================
   KFIGURES — script.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Sticky Nav ──────────────────────────────────────────── */
  const header = document.getElementById('header');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile Menu ─────────────────────────────────────────── */
  const navToggle  = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        navToggle.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── Scroll Reveal ───────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal-up');

  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ── Hero Parallax ───────────────────────────────────────── */
  const heroVideo = document.querySelector('.hero-video');

  if (heroVideo) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          heroVideo.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ── Card Spotlight ──────────────────────────────────────── */
  document.querySelectorAll('.process-step, .type-card, .feature-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
      const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(232,224,204,0.03) 0%, transparent 70%)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.background = '';
    });
  });

  /* ── Marquee Pause on Hover ──────────────────────────────── */
  const marqueeInner = document.querySelector('.marquee-inner');
  const marqueeTrack = document.querySelector('.marquee-track');

  if (marqueeInner && marqueeTrack) {
    marqueeTrack.addEventListener('mouseenter', () => {
      marqueeInner.style.animationPlayState = 'paused';
    });
    marqueeTrack.addEventListener('mouseleave', () => {
      marqueeInner.style.animationPlayState = 'running';
    });
  }

  /* ── Page Transitions ────────────────────────────────────── */
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('http') && href.includes('.html')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.body.style.opacity    = '0';
        document.body.style.transform  = 'translateY(-8px)';
        document.body.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        setTimeout(() => { window.location.href = href; }, 360);
      });
    }
  });

  /* ── Glitch Reset ────────────────────────────────────────── */
  const heroGlitch = document.querySelector('.hero .glitch');
  if (heroGlitch) {
    setInterval(() => {
      heroGlitch.style.animation = 'none';
      void heroGlitch.offsetWidth;
      heroGlitch.style.animation = '';
    }, 7000);
  }

})();