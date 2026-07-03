/* AKYRO — assets/monolith.js (M01-C)
   Tiny core: pub/sub + focus trap. No framework.
   Direction convention: JS never computes sides; CSS owns direction. */

window.Monolith = (() => {
  'use strict';

  const listeners = {};

  const on = (event, fn) => {
    (listeners[event] = listeners[event] || []).push(fn);
  };

  const emit = (event, detail) => {
    (listeners[event] || []).forEach((fn) => fn(detail));
  };

  const FOCUSABLE =
    'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

  /* Traps Tab focus inside container; returns a release function. */
  const trapFocus = (container) => {
    const onKeydown = (e) => {
      if (e.key !== 'Tab') return;
      const items = Array.from(container.querySelectorAll(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    container.addEventListener('keydown', onKeydown);
    return () => container.removeEventListener('keydown', onKeydown);
  };

  return { on, emit, trapFocus };
})();
