# AKYRO STUDIO — MONOLITH OS
## Exact Theme File Tree v1.1 — based on Architecture v0.3 (RTL Patch active)
**Phase 02 revision — file manifest (no code)**
**Markers: [M01] = Milestone 01 · [Later] = deferred milestone (02–07) · [Conditional] = created only if its trigger condition is met**
**v1.0 → v1.1:** direction.css, locale-switcher, ar.schema.json, Arabic font assets added · ar.json re-marked M01 · direction-helpers.liquid added as Conditional · QA checklist absorbs the bilingual matrix · binding conventions embedded below.

---

## Binding Conventions (travel with this tree into the repo)

1. **No hardcoded storefront text.** Every storefront string in Liquid uses a translation key + the `t` filter. Only merchant-editable settings values and product/metafield data are exempt (localized via Shopify's translation surface, not the theme).
2. **CSS logical properties by default.** `margin/padding/inset/border-inline-start|end`, `text-align: start|end` in all component CSS. Any unavoidable physical left/right rule lives in `direction.css` with its explicit `[dir="rtl"]` pair directly beneath it — an unpaired physical rule fails review.
3. **Arabic font loading rule.** Arabic woff2 files are preloaded only when the Arabic locale is active; English pays no Arabic font cost and vice versa. Arabic never renders in a fallback font — visible fallback is a build failure.
4. **Locale switcher placements.** Header (desktop), mobile menu drawer, footer (optional via setting). Quiet EN/AR text pair, no flags, no dropdown chrome, standard active-state convention only.
5. **Direction-aware drawer behavior.** All drawers anchor and slide from **inline-end**; the slide transform is defined once and resolved via `[dir]`. Directional icons (arrow, chevron) flip in RTL; symmetric icons never flip.
6. **Bidi isolation for Latin technical data.** Style numbers, batch codes, GSM, POM values, and sizes stay in Latin script/digits in both locales and are bidi-isolated inside Arabic text so codes never visually shuffle in RTL sentences.

---

## 1. layout/

| File | Job | Milestone |
|---|---|---|
| `layout/theme.liquid` | Master HTML shell: direction detection (html lang/dir + dir marker class from Shopify localization), fixed-order global stylesheets, locale-aware font preloads, header group, main, footer group, cart drawer. | M01 |
| `layout/password.liquid` | Drop Gate shell: minimal locked-drop layout, one iconic-A moment, access capture; direction-aware like theme.liquid. | Later |

## 2. templates/

| File | Job | Milestone |
|---|---|---|
| `templates/index.json` | Homepage composing the five Tier 1 sections; Tier 2 sections added in Milestone 02. | M01 |
| `templates/cart.json` | Minimal no-JS cart fallback page so the header cart icon always resolves. | M01 |
| `templates/404.json` | Not-found page: iconic A, one line, two exits (Drops / Home). | M01 |
| `templates/gift_card.liquid` | Gift card page retained from the Shopify CLI scaffold (risk R4); restyled on-system later. | M01 |
| `templates/product.json` | Standard Product File wiring product-file plus guarded proof sections. | Later |
| `templates/product.founder-edition.json` | Founder Edition variant emphasizing validation block and batch record. | Later |
| `templates/collection.json` | Category grid for Fashion / Objects / Scent. | Later |
| `templates/collection.drop.json` | Drop collection adding the drop header (status, batch code, release date). | Later |
| `templates/collection.archive.json` | Archive: sold-out record where batch data replaces buy actions. | Later |
| `templates/list-collections.json` | Drop Index listing all drops with status badges. | Later |
| `templates/page.json` | Default support/legal page. | Later |
| `templates/page.system.json` | Brand system narrative (editorial sections permitted). | Later |
| `templates/page.process.json` | Manufacturing Bridge approval-flow page. | Later |
| `templates/page.contact.json` | Contact page with form and studio details. | Later |
| `templates/search.json` | Search results reusing the product card grid. | Later |
| `templates/password.json` | Section composition for the Drop Gate. | Later |
| `templates/customers/login.json` | Customer login. | Later |
| `templates/customers/register.json` | Customer registration. | Later |
| `templates/customers/account.json` | Account overview with order history. | Later |
| `templates/customers/order.json` | Single order detail. | Later |
| `templates/customers/addresses.json` | Address book. | Later |
| `templates/customers/reset_password.json` | Password reset request. | Later |
| `templates/customers/activate_account.json` | Account activation. | Later |

## 3. sections/

### Section groups
| File | Job | Milestone |
|---|---|---|
| `sections/header-group.json` | OS 2.0 header group: monolith-header now, status-bar slot later. | M01 |
| `sections/footer-group.json` | OS 2.0 footer group holding monolith-footer. | M01 |

### Global
| File | Job | Milestone |
|---|---|---|
| `sections/monolith-header.liquid` | Sticky header: locked wordmark, primary nav, search trigger, cart trigger with count, locale switcher (desktop placement); logical-property layout mirrors in RTL. | M01 |
| `sections/monolith-footer.liquid` | Grid footer: nav columns, access-list slot, legal, locale switcher (optional via setting), gated "BUILT TO LAST" toggle (default off). | M01 |
| `sections/cart-drawer.liquid` | Cart drawer skeleton anchored to inline-end: static cart render, drawer shell, focus trap; AJAX in Milestone 03. | M01 |
| `sections/status-bar.liquid` | Single-line drop status / shipping note with optional red status dot. | Later |

### Homepage — Tier 1
| File | Job | Milestone |
|---|---|---|
| `sections/hero-monolith.liquid` | One product, one statement, one CTA; split layout swaps columns via grid logical flow in RTL. | M01 |
| `sections/drop-status.liquid` | Current batch strip: style no (Latin, bidi-isolated), inventory-driven status, stock band filling from inline-start. | M01 |
| `sections/product-proof.liquid` | FIT / FABRIC / CONSTRUCTION triptych in reading order; structured metafield lines only; Latin digits in callouts. | M01 |
| `sections/collection-index.liquid` | Fashion / Objects / Scent entries with border-inline hairlines. | M01 |
| `sections/access-list.liquid` | Email capture with functional copy; input/button group mirrors in RTL. | M01 |

### Homepage — Tier 2
| File | Job | Milestone |
|---|---|---|
| `sections/material-index.liquid` | Surface & texture row from real photography. | Later |
| `sections/system-statement.liquid` | Typographic editorial block, red dash sole accent (editorial permitted: homepage). | Later |
| `sections/launch-strip.liquid` | Next-drop strip bound to the launch metaobject; hidden without real launch data. | Later |
| `sections/environment.liquid` | Single full-width brand environment image, optional caption. | Later |

### Product page
| File | Job | Milestone |
|---|---|---|
| `sections/product-file.liquid` | Main Product File: media + sticky info columns swapping sides via logical grid flow; size/POM sync; add-to-cart. | Later |
| `sections/spec-table.liquid` | Specifications shell guarding the wrapper, then spec-row snippets; Latin values bidi-isolated in Arabic rows. | Later |
| `sections/fit-proof.liquid` | On-model pair in reading order plus approved fit bullets with Arabic leading rules. | Later |
| `sections/construction-map.liquid` | Approved flat asset (NEVER mirrored in RTL) with numbered legend; legend text mirrors, digits stay Latin. | Later |
| `sections/sample-validation.liquid` | Approved test results shell with guarded validation-row snippets. | Later |
| `sections/batch-record.liquid` | Batch record shell; localized labels, Latin values, guarded rows. | Later |
| `sections/same-system.liquid` | Related products under a system heading, maximum four cards. | Later |

### Collection page
| File | Job | Milestone |
|---|---|---|
| `sections/collection-header.liquid` | Title, category descriptor, product count, drop status when applicable. | Later |
| `sections/product-grid.liquid` | Paginated card grid 2/4-col, load-more, no infinite scroll. | Later |
| `sections/collection-filter.liquid` | Minimal filter/sort; self-hides at ≤ 8 products; accordion carets flip in RTL. | Later |
| `sections/main-list-collections.liquid` | Drop Index body with status badges. | Later |

### Page bodies & utility
| File | Job | Milestone |
|---|---|---|
| `sections/main-cart.liquid` | No-JS cart page body mirroring drawer lines and checkout action. | M01 |
| `sections/main-404.liquid` | 404 body: iconic-A moment, one line, two exits. | M01 |
| `sections/main-page.liquid` | Default page body with constrained content. | Later |
| `sections/main-search.liquid` | Search results body reusing product cards. | Later |
| `sections/main-password.liquid` | Drop Gate body: status line and access capture. | Later |
| `sections/text-block.liquid` | Constrained rich text; schema-limited to homepage, system, process, launch templates. | Later |
| `sections/media-block.liquid` | Single grid-aligned image or video with optional caption. | Later |
| `sections/process-flow.liquid` | Numbered approval flow (Fit Sample → Wash Test → Fit Approval → PPS → Bulk); flow arrows flip in RTL. | Later |
| `sections/contact-form.liquid` | Contact form plus studio details. | Later |
| `sections/main-login.liquid` | Customer login body. | Later |
| `sections/main-register.liquid` | Customer registration body. | Later |
| `sections/main-account.liquid` | Account overview body. | Later |
| `sections/main-order.liquid` | Order detail body. | Later |
| `sections/main-addresses.liquid` | Address book body. | Later |
| `sections/main-reset-password.liquid` | Password reset body. | Later |
| `sections/main-activate-account.liquid` | Account activation body. | Later |

## 4. snippets/

| File | Job | Milestone |
|---|---|---|
| `snippets/logo-wordmark.liquid` | Outputs the settings-uploaded locked wordmark (never mirrored); text fallback + editor warning if unset. | M01 |
| `snippets/logo-a-mark.liquid` | Outputs the locked iconic A; whitelisted placements only (drawer, 404, password). | M01 |
| `snippets/red-dash.liquid` | Outputs the red dash asset at unit size where a schema allows it; sits at text-start edge in both directions. | M01 |
| `snippets/locale-switcher.liquid` | Quiet EN/AR switcher from Shopify localization data; placements per Binding Convention 4. | M01 |
| `snippets/product-card.liquid` | Card: 4:5 image, name, style no (bidi-isolated), price, badge; text-align start; direction-neutral hover. | M01 |
| `snippets/badge-status.liquid` | LIVE / LOW / ARCHIVED / LOCKED badge from inventory and tags only; labels via `t` filter. | M01 |
| `snippets/price.liquid` | Money formatting, quiet compare-at (never red), locale-aware money display. | M01 |
| `snippets/media.liquid` | Responsive image/video wrapper: srcset, lazy, aspect-ratio, charcoal placeholder. | M01 |
| `snippets/icon.liquid` | Hairline 1px geometric icon set; directional icons carry the RTL flip class, symmetric icons never flip. | M01 |
| `snippets/drawer.liquid` | Generic drawer shell (overlay, focus trap, ESC) anchored to inline-end; reused by cart and mobile nav. | M01 |
| `snippets/cart-line.liquid` | Line item: image inline-start, price inline-end, qty stepper mirroring, remove control; strings via `t`. | M01 |
| `snippets/quantity-input.liquid` | Accessible stepper, 44px targets, order mirrors in RTL. | M01 |
| `snippets/section-frame.liquid` | Standard section width/padding wrapper bound to spacing tokens. | M01 |
| `snippets/spec-row.liquid` | Guarded spec row (metafield-render-pattern): blank value → zero output; Latin values bidi-isolated. | Later |
| `snippets/pom-table.liquid` | Guarded POM table validating akyro.pom JSON shape; Latin digits/units in both locales. | Later |
| `snippets/validation-row.liquid` | Guarded test-result row; renders only recorded results, no placeholders. | Later |
| `snippets/batch-record-rows.liquid` | Guarded batch fields (named to avoid section collision); localized labels, Latin values. | Later |
| `snippets/direction-helpers.liquid` | Bidi-isolation wrapper for Latin technical data inside Arabic text. **Trigger:** created only if the isolation pattern repeats across 3+ call sites; until then the logic stays inline. | Conditional |

## 5. assets/

### Global CSS (fixed load order: tokens → base → layout → components → direction)
| File | Job | Milestone |
|---|---|---|
| `assets/tokens.css` | All custom properties: palette, spacing units, bilingual type tokens (--font-display/-body and -ar pair), line, motion, z-index. | M01 |
| `assets/base.css` | Reset, typography, links, forms, focus states, reduced-motion, `:lang(ar)` metric overrides (raised leading, zero tracking). | M01 |
| `assets/layout.css` | Grid system, section-frame rules, page shells, breakpoints — logical properties throughout. | M01 |
| `assets/components.css` | Buttons, badges, cards, tables, inputs, drawer shell — shared styles live here, never in section files (R6). | M01 |
| `assets/direction.css` | The controlled exception file: paired `[dir="rtl"]` overrides for unavoidable physical rules, directional icon flips, drawer slide resolution. | M01 |

### Per-section CSS (one file per section, loaded via stylesheet_tag inside the section — R5)
| File | Job | Milestone |
|---|---|---|
| `assets/section-monolith-header.css` | Header styles. | M01 |
| `assets/section-monolith-footer.css` | Footer styles. | M01 |
| `assets/section-cart-drawer.css` | Drawer panel styles (also consumed by main-cart for parity). | M01 |
| `assets/section-hero-monolith.css` | Hero styles. | M01 |
| `assets/section-drop-status.css` | Drop status strip styles. | M01 |
| `assets/section-product-proof.css` | Proof triptych styles. | M01 |
| `assets/section-collection-index.css` | Collection index styles. | M01 |
| `assets/section-access-list.css` | Access list styles. | M01 |
| `assets/section-status-bar.css` | Status bar styles. | Later |
| `assets/section-material-index.css` | Material index styles. | Later |
| `assets/section-system-statement.css` | System statement styles. | Later |
| `assets/section-launch-strip.css` | Launch strip styles. | Later |
| `assets/section-environment.css` | Environment image styles. | Later |
| `assets/section-product-file.css` | Product File column styles. | Later |
| `assets/section-proof-blocks.css` | Shared styles for the five proof sections (shared table/row anatomy). | Later |
| `assets/section-same-system.css` | Related products styles. | Later |
| `assets/section-collection-header.css` | Collection header styles. | Later |
| `assets/section-product-grid.css` | Product grid styles. | Later |
| `assets/section-collection-filter.css` | Filter/sort styles. | Later |
| `assets/section-utility.css` | Shared styles for text-block, media-block, process-flow, contact-form, customer bodies. | Later |

### JavaScript
| File | Job | Milestone |
|---|---|---|
| `assets/monolith.js` | Core: pub/sub, fetch helper, focus trap; reads direction from `document.documentElement.dir` only. | M01 |
| `assets/drawer.js` | Drawer open/close/trap; slide direction resolved from document dir, never hardcoded. | M01 |
| `assets/header.js` | Sticky state and search toggle. | M01 |
| `assets/cart.js` | Cart AJAX API + Section Rendering API drawer updates. | Later |
| `assets/product-form.js` | Variant selection, POM size sync, add-to-cart. | Later |

### Brand assets (locked — uploaded exactly as provided, never edited, never mirrored)
| File | Job | Milestone |
|---|---|---|
| `assets/akyro-wordmark.svg` | Locked wordmark production export (blocker R1 until delivered). | M01 |
| `assets/akyro-a-mark.svg` | Locked iconic A production export. | M01 |
| `assets/akyro-red-dash.svg` | Locked red dash production export. | M01 |

### Fonts (self-hosted woff2, subset; loading per Binding Convention 3; pending licenses — risk R2 covers both scripts)
| File | Job | Milestone |
|---|---|---|
| `assets/akyro-display.woff2` | English display face: bold, geometric, engineered. | M01 |
| `assets/akyro-body.woff2` | English body/data face: neutral, precise. | M01 |
| `assets/akyro-display-ar.woff2` | Arabic display face placeholder — final file from the approved shortlist (Alexandria / Cairo / IBM Plex Sans Arabic / Noto Kufi Arabic). | M01 |
| `assets/akyro-body-ar.woff2` | Arabic body/data face placeholder — same shortlist decision. | M01 |

## 6. config/

| File | Job | Milestone |
|---|---|---|
| `config/settings_schema.json` | Theme settings per Architecture §07 + v0.3: locked asset uploads, constrained palette, bilingual typography group, grid, drop system, product-file toggles, cart, footer/legal (incl. footer switcher toggle), social. | M01 |
| `config/settings_data.json` | Default values: system hex prefills, "BUILT TO LAST" off, footer switcher off. | M01 |

## 7. locales/

| File | Job | Milestone |
|---|---|---|
| `locales/en.default.json` | English storefront strings — default locale, key source of truth; no hardcoded UI strings exist outside locale files. | M01 |
| `locales/ar.json` | Arabic storefront strings — approved AKYRO translations only; ships with the Tier 1 key set, grows with each section in the same commit. | M01 |
| `locales/en.default.schema.json` | English theme-editor labels and helper text, including lock-rule warnings. | M01 |
| `locales/ar.schema.json` | Arabic theme-editor labels and helper text for Arabic-speaking merchandisers. | M01 |

## 8. docs/ (repository only — not deployed)

| File | Job | Milestone |
|---|---|---|
| `docs/ARCHITECTURE.md` | Architecture v0.2 + v0.3 RTL Patch kept beside the code as the governing source. | M01 |
| `docs/METAFIELDS.md` | Exact JSON shapes for akyro.spec / pom / validation / batch / fit_notes and the launch metaobject — the contract guarded snippets validate against. | M01 |
| `docs/ADMIN-SETUP.md` | The fifteen-item Admin Setup runbook (§14 items 1–9 + v0.3 items 10–15: Arabic language, translations, product content decision, policies, accounts, checkout test). | M01 |
| `docs/CONVENTIONS.md` | Code conventions: token-only CSS, logical-properties rule, direction.css pairing rule, `t`-filter mandate, Arabic font loading rule, bidi isolation, logo placement whitelist, red-usage audit. | M01 |
| `docs/CHANGELOG.md` | Versioned record of theme changes per milestone. | M01 |
| `docs/QA-CHECKLIST.md` | QA pass integrating the bilingual matrix: every item verified in LTR-EN desktop, RTL-AR desktop, LTR-EN mobile, RTL-AR mobile — plus accessibility, performance budgets, duplicate-CSS check, red audit, logo count, no-Arabic-letter-spacing check, missing-key sweep, unmirrored construction assets. | Later (M07 execution; skeleton committed M01) |

---

## Milestone 01 build count

**52 files:** 1 layout · 4 templates · 12 sections (incl. 2 groups) · 13 snippets · 22 assets — plus 2 config, 4 locales, 6 docs (QA skeleton included).
**1 Conditional file** (`direction-helpers.liquid`) with an explicit creation trigger.
Every remaining file is named now so nothing is invented mid-build; each is written only in its assigned milestone.

*AKYRO STUDIO — MONOLITH OS · File Tree v1.1 · Do not distribute outside the AKYRO project.*
