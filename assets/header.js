/* AKYRO — assets/header.js (M01-B)
   Mobile menu open/close, ESC, focus return, scrolled state.
   Direction is never read here beyond document dir conventions —
   the slide side is resolved entirely in CSS ([dir] pair).
   Full focus-trap utility arrives with monolith.js (M01-C). */

(() => {
  'use strict';

  const header = document.querySelector('[data-header]');
  if (!header) return;

  const toggle = header.querySelector('[data-menu-toggle]');
  const panel = document.getElementById('HeaderMenuPanel');
  const overlay = document.querySelector('[data-header-overlay]');
  const closeBtn = panel ? panel.querySelector('[data-menu-close]') : null;

  if (toggle && panel && overlay) {
    const open = () => {
      panel.classList.add('is-open');
      overlay.hidden = false;
      requestAnimationFrame(() => overlay.classList.add('is-open'));
      toggle.setAttribute('aria-expanded', 'true');
      if (closeBtn) closeBtn.focus();
      document.addEventListener('keydown', onKeydown);
    };

    const close = () => {
      panel.classList.remove('is-open');
      overlay.classList.remove('is-open');
      overlay.addEventListener(
        'transitionend',
        () => { if (!overlay.classList.contains('is-open')) overlay.hidden = true; },
        { once: true }
      );
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
      document.removeEventListener('keydown', onKeydown);
    };

    const onKeydown = (e) => {
      if (e.key === 'Escape') close();
    };

    toggle.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
  }

  /* Scrolled state hook for styling (no layout work in JS) */
  let scrolled = false;
  const onScroll = () => {
    const next = window.scrollY > 0;
    if (next !== scrolled) {
      scrolled = next;
      header.classList.toggle('is-scrolled', scrolled);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
