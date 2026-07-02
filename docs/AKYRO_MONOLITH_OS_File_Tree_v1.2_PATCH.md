# AKYRO MONOLITH OS — File Tree v1.2 Patch

## File Tree v1.1 → v1.2 — patch

### 1. docs/ — changed row

| File | Job | Milestone |
|---|---|---|
| `docs/QA-CHECKLIST.md` | QA pass integrating the bilingual four-state matrix plus accessibility, performance, duplicate-CSS, red audit, logo count, Arabic letter-spacing check, missing-key sweep, unmirrored construction assets. | M01 skeleton / M07 final execution |

### 2. assets/ — Brand assets group, header note replaced

**Brand assets (production locked source):** the three `/assets` SVGs are the locked production exports. Theme settings uploads may use these exact assets only. No alternate, recolored, stretched, or reinterpreted AKYRO logos anywhere in the theme — settings helper text states this, and QA audits settings uploads against the source files.

### 3. Milestone 01 implementation phases

**Note: M01 is a file-tree milestone, not one coding prompt.** Implementation splits into M01-A → M01-F:

| Phase | Files |
|---|---|
| **M01-A Foundation** | `layout/theme.liquid`, `assets/tokens.css`, `assets/base.css`, `assets/layout.css`, `assets/components.css`, `assets/direction.css` |
| M01-B Global shell | header-group.json, footer-group.json, monolith-header, monolith-footer + their CSS, header.js, logo-wordmark, locale-switcher, icon, section-frame |
| M01-C Drawer skeleton | drawer.liquid, cart-drawer + CSS, drawer.js, monolith.js, cart-line, quantity-input, logo-a-mark, main-cart, cart.json |
| M01-D Homepage core | hero-monolith, drop-status, product-proof, collection-index, access-list + their CSS, red-dash, product-card, badge-status, price, media, index.json |
| M01-E Config & locales | settings_schema.json, settings_data.json, en.default.json, ar.json, en.default.schema.json, ar.schema.json |
| M01-F Utility & docs | 404.json, main-404, gift_card.liquid (CLI-retained), docs/* skeletons |

### 4. Change log line

v1.1 → v1.2: QA-CHECKLIST milestone corrected · locked-asset rule hardened · M01-A→F phase split added.
