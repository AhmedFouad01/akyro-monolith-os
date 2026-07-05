/* AKYRO — assets/drawer.js (M01-C)
   Generic drawer controller: open/close, ESC, overlay, focus trap,
   focus return. Slide side lives in CSS ([dir] pair) — never here.
   Cart trigger is progressive enhancement over the /cart link.
   Quantity +/- adjust inputs client-side; form submit applies (no AJAX). */

(() => {
  'use strict';

  const overlayFor = (id) =>
    document.querySelector('[data-drawer-overlay="' + id + '"]');

  const controllers = {};

  document.querySelectorAll('[data-drawer]').forEach((drawer) => {
    const id = drawer.id;
    const overlay = overlayFor(id);
    let release = null;
    let opener = null;

    const onKeydown = (e) => {
      if (e.key === 'Escape') close();
    };

    const open = (trigger) => {
      opener = trigger || null;
      drawer.classList.add('is-open');
      if (overlay) {
        overlay.hidden = false;
        requestAnimationFrame(() => overlay.classList.add('is-open'));
      }
      release = window.Monolith ? window.Monolith.trapFocus(drawer) : null;
      const closeBtn = drawer.querySelector('[data-drawer-close]');
      (closeBtn || drawer).focus();
      document.addEventListener('keydown', onKeydown);
    };

    const close = () => {
      drawer.classList.remove('is-open');
      if (overlay) {
        overlay.classList.remove('is-open');
        overlay.addEventListener(
          'transitionend',
          () => { if (!overlay.classList.contains('is-open')) overlay.hidden = true; },
          { once: true }
        );
      }
      if (release) release();
      document.removeEventListener('keydown', onKeydown);
      if (opener) opener.focus();
    };

    drawer.querySelectorAll('[data-drawer-close]').forEach((btn) =>
      btn.addEventListener('click', close)
    );
    if (overlay) overlay.addEventListener('click', close);

    controllers[id] = { open, close };
  });


  /* Home link closes drawer (if open). */
  document.querySelectorAll('[data-home-link]').forEach((link) => {
    link.addEventListener('click', () => {
      Object.values(controllers).forEach((ctrl) => ctrl.close());
    });
  });

  /* Cart trigger: enhance the header /cart link into a drawer opener. */
  document.querySelectorAll('[data-cart-trigger]').forEach((trigger) => {
    if (!controllers.CartDrawer) return;
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      controllers.CartDrawer.open(trigger);
    });
  });

  /* Generic triggers via aria-controls. */
  document.querySelectorAll('[data-drawer-trigger]').forEach((trigger) => {
    const id = trigger.getAttribute('aria-controls');
    if (!id || !controllers[id]) return;
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      controllers[id].open(trigger);
    });
  });

  /* Quantity steppers (client-side value only; submit applies). */
  document.addEventListener('click', (e) => {
    const minus = e.target.closest('[data-qty-minus]');
    const plus = e.target.closest('[data-qty-plus]');
    if (!minus && !plus) return;
    const qty = e.target.closest('[data-qty]');
    const input = qty && qty.querySelector('.qty__input');
    if (!input) return;
    const step = plus ? 1 : -1;
    const next = Math.max(0, (parseInt(input.value, 10) || 0) + step);
    input.value = next;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  });
})();
