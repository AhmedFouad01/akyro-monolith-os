/* AKYRO — assets/art-collection-stage.js (M05-B)
   Progressive enhancement only. If this file fails to load, the
   section is a plain vertical stack (see CSS default state) — no
   hard failure. Keyboard accessible. Respects reduced-motion.
   No external dependencies. */

(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-art-stage]').forEach((stage) => {
    const track = stage.querySelector('[data-art-track]');
    const panels = Array.from(stage.querySelectorAll('[data-art-panel]'));
    const navItems = Array.from(stage.querySelectorAll('[data-art-nav-item]'));
    if (!track || panels.length < 2) return;

    // Only enhance on pointer-capable, wide-enough viewports.
    const canEnhance = () => window.matchMedia('(min-width: 990px)').matches;

    const setActive = (id) => {
      navItems.forEach((btn) => {
        btn.classList.toggle('is-active', btn.dataset.artTarget === id);
      });
    };

    const goTo = (panel) => {
      if (!panel) return;
      panel.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        inline: 'start',
        block: 'nearest',
      });
    };

    const enhance = () => {
      if (!canEnhance()) {
        stage.classList.remove('is-enhanced');
        return;
      }
      stage.classList.add('is-enhanced');
    };

    enhance();
    window.addEventListener('resize', enhance, { passive: true });

    // Wheel → horizontal translation (desktop, opt-in via data attribute).
    if (stage.dataset.wheelNav === 'true') {
      track.addEventListener(
        'wheel',
        (e) => {
          if (!stage.classList.contains('is-enhanced')) return;
          if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
          e.preventDefault();
          track.scrollBy({ left: e.deltaY, behavior: reduceMotion ? 'auto' : 'smooth' });
        },
        { passive: false }
      );
    }

    // Nav dots.
    navItems.forEach((btn) => {
      btn.addEventListener('click', () => {
        const panel = document.getElementById(btn.dataset.artTarget);
        goTo(panel);
      });
    });

    // Keyboard: left/right arrows move between panels when stage has focus.
    stage.setAttribute('tabindex', '0');
    stage.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const current = panels.findIndex((p) => {
        const r = p.getBoundingClientRect();
        return r.left >= -10 && r.left <= 10;
      });
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const next = panels[Math.min(Math.max(current + dir, 0), panels.length - 1)];
      if (next) {
        e.preventDefault();
        goTo(next);
      }
    });

    // Track active dot via IntersectionObserver (progressive; skip if unsupported).
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { root: track, threshold: 0.6 }
      );
      panels.forEach((p) => io.observe(p));
    }
  });
})();
