# AKYRO STUDIO — MONOLITH OS
## Shopify Online Store 2.0 — Theme Architecture Document
**Version 0.2 — Phase 01 — Architecture (no code)**
**Status: Internal / Source-controlled / Built for AKYRO only**
**Change log v0.1 → v0.2:** MVP priority layer added · metafield-guard replaced with guarded-rendering pattern · free-form rule refined · Shopify Admin Setup Checklist added · Implementation Risks section added. Direction unchanged; approved with refinements.

---

## 00. Governing Rules for This Theme

This document is the single source of truth for how MONOLITH OS is structured. It inherits authority from:

1. Locked AKYRO assets (wordmark, iconic A, red dash) — used exactly as provided, never regenerated in code, never rebuilt in CSS/SVG by hand.
2. AKYRO Brand Guidelines v0.4 — identity, palette, grid, image framing, composition rules.
3. Approved product files — Garment Sheet, Real Garment Reference, Tech Pack, Cost Sheet, Launch Sheet.
4. AKYRO IP & Originality Protocol v1.0 — Originality Gate applies to every section, string of copy, and UI pattern.

**Hard rules encoded into the architecture (not left to discretion):**

- **One logo moment per composition.** The header carries the wordmark; sections do not repeat it. The iconic A appears only where the system assigns it (favicon, cart drawer signature, 404, Drop Gate).
- **Signal red is functional only.** Red is reserved for: status indicators, active states, the red dash asset, numbered callouts in proof blocks, and destructive/critical actions. It is never a background, never decorative.
- **No invented data.** POM tables, sample test results, batch codes, GSM values, and validation states render **only from metafields populated with approved data**. Empty metafield → block does not render. There are no placeholder measurements anywhere in the theme.
- **No free-form zones inside verified product proof blocks.** *(Refined in v0.2.)* Spec tables, POM tables, fit proof, construction maps, sample validation, and batch records accept structured metafield data only — no rich-text overrides, no theme-editor prose inside these blocks. **Editorial sections are allowed**, but only on the homepage, system pages (`page.system`, `page.process`), and launch storytelling pages. Product proof stays verified; brand narrative gets its own designated ground.
- **Radius = 0. Hairline borders. Grid discipline. Negative space is content.**

---

## 01. MVP Priority Layer *(new in v0.2)*

The theme ships in two clearly separated tiers. Milestone 01 builds only what a functioning, on-brand store needs on day one. Everything else is deliberately deferred — not designed later, just built later.

### Tier 1 — Milestone 01 MVP (build first)

| Component | Scope |
|---|---|
| `monolith-header` | Wordmark, nav, search trigger, cart trigger |
| `monolith-footer` | Nav columns, legal, access-list slot |
| `hero-monolith` | One product, one statement, one CTA |
| `drop-status` | Current batch strip, inventory-driven |
| `product-proof` | FIT / FABRIC / CONSTRUCTION triptych |
| `collection-index` | Fashion / Objects / Scent entries |
| `access-list` | Email capture, functional copy |
| `cart-drawer` (skeleton) | Static render, structure and styling only — AJAX wiring in a later milestone |

### Tier 2 — Deferred (later milestones)

| Component | Deferred to |
|---|---|
| `material-index` | Milestone 02+ |
| `system-statement` | Milestone 02+ |
| `launch-strip` | Milestone 02+ (requires launch metaobject data) |
| `environment` | Milestone 02+ |
| `status-bar` | With drop-system wiring |
| Collection, Product File, Archive, Drop Gate, support pages | Milestones 04–06 per §14 |

**MVP weight rule:** the Milestone 01 homepage must stay lightweight — see §13 risk R7. No section in Tier 1 may load its own JS except the drawer skeleton; images are the only heavy assets permitted.

---

## 02. Site Map

```
/
├── Home ................................. index
├── Drops ................................ list-collections (Drop Index)
│   ├── Founder Edition .................. collection.drop
│   ├── Fashion .......................... collection
│   ├── Objects .......................... collection
│   └── Scent ............................ collection
├── Product File ......................... product
│   └── Founder Edition variant .......... product.founder-edition
├── The System ........................... page.system        (brand system — editorial permitted)
├── Process .............................. page.process       (Manufacturing Bridge — editorial permitted)
├── Archive .............................. collection.archive (sold-out record — scarcity proof)
├── Access ............................... page.access        (drop notifications / account entry)
├── Support
│   ├── Care & Wash ...................... page
│   ├── Shipping & Returns ............... page
│   └── Contact .......................... page.contact
├── Search ............................... search (minimal overlay + results page)
├── Cart ................................. drawer (primary) + /cart fallback page
├── Customer account ..................... customers/* (styled, minimal)
├── Drop Gate ............................ password page (used deliberately for locked drops)
└── 404 .................................. 404 (iconic A moment + return path)
```

**Structure decisions (unchanged from v0.1):**

- **Drop Index instead of "Shop All."** AKYRO releases are batches, not a catalog. The list-collections page is an index of drops with status (LIVE / LOW STOCK / ARCHIVED / NEXT).
- **Archive is a real page, not a filter.** Sold-out products remain visible with their batch record. Scarcity is documented, not simulated.
- **Password page is a feature.** Shopify's password page becomes the Drop Gate: calm, one logo moment, access-list signup.

---

## 03. Template List (JSON, OS 2.0)

| Template | File | Job |
|---|---|---|
| Home | `templates/index.json` | Product-led entry. Tier 1 sections only at MVP. |
| Product | `templates/product.json` | Standard Product File layout. |
| Product — Founder Edition | `templates/product.founder-edition.json` | Adds validation block + batch record emphasis. |
| Collection | `templates/collection.json` | Category grid (Fashion / Objects / Scent). |
| Collection — Drop | `templates/collection.drop.json` | Adds drop header: status, batch code, release date. |
| Collection — Archive | `templates/collection.archive.json` | Sold-out record; buy actions replaced by batch data. |
| Drop Index | `templates/list-collections.json` | All drops with status badges. |
| Page — default | `templates/page.json` | Support/legal content. |
| Page — System | `templates/page.system.json` | Brand system narrative (editorial sections allowed). |
| Page — Process | `templates/page.process.json` | Approval flow: Fit Sample → Wash Test → Fit Approval → PPS → Bulk. |
| Page — Contact | `templates/page.contact.json` | Form + studio info. |
| Cart | `templates/cart.json` | Fallback full page mirroring the drawer. |
| Search | `templates/search.json` | Results grid, same product cards. |
| 404 | `templates/404.json` | Iconic A, one line, two exits (Drops / Home). |
| Customers | `templates/customers/*.json` | Login, register, account, order — quiet, data-first styling. |
| Password | `layout/password.liquid` + `templates/password.json` | Drop Gate. |
| Gift card | `templates/gift_card.liquid` | Minimal, on-system — **verify against current Shopify CLI scaffold before styling (§13 R4).** |

---

## 04. Section List

Tier markers: **[T1]** = Milestone 01 MVP · **[T2]** = deferred.

### Global (layout-level)
| Section | Tier | Purpose |
|---|---|---|
| `monolith-header` | T1 | Wordmark (locked asset from settings), primary nav, search trigger, cart trigger with count. Sticky, hairline bottom border. |
| `monolith-footer` | T1 | Grid footer: nav columns, access-list signup, legal. "BUILT TO LAST" appears **only if** enabled in settings (restricted phrase — one placement max, off by default). |
| `cart-drawer` | T1 (skeleton) | Rendered in `theme.liquid`; static structure at MVP, Section Rendering API wiring later. See §11. |
| `status-bar` | T2 | Single-line drop status / shipping note. Text + optional red status dot. No marquee, no rotation. |

### Homepage
| Section | Tier | Purpose |
|---|---|---|
| `hero-monolith` | T1 | One product, one statement, one CTA. No carousel. Negative space is the design. |
| `drop-status` | T1 | Current batch: style no, status, stock band (from inventory, real), link to Product File. |
| `product-proof` | T1 | Three-column proof block: FIT / FABRIC / CONSTRUCTION. Each cell = label, one image, one verifiable line from metafields. Proof block — structured data only. |
| `collection-index` | T1 | Fashion / Objects / Scent — three framed entries, image + label, hairline dividers. |
| `access-list` | T1 | Email capture. Copy is functional: what you get, when. No hype language. |
| `material-index` | T2 | Surface & texture row — real photography only. |
| `system-statement` | T2 | Typographic editorial block, red dash as the only accent. (Editorial permitted: homepage.) |
| `launch-strip` | T2 | Next drop from launch metaobject. Renders only when a real launch is scheduled. |
| `environment` | T2 | Single full-width brand environment image, optional small caption. |

### Product page (Milestones 05)
| Section | Purpose |
|---|---|
| `product-file` | Main section: media column + information column (see §9). |
| `spec-table` | Metafield-driven rows via guarded rendering (§05). Proof block. |
| `fit-proof` | On-model front/back pair + approved fit bullets. Proof block. |
| `construction-map` | Approved flat asset + numbered seam legend from metafields. The theme never generates drawings. Proof block. |
| `sample-validation` | Approved test results only. Absent data = absent row. Proof block. |
| `batch-record` | Style no, batch code, sample size, revision, PPS status. Proof block. |
| `same-system` | Related products, max 4, same card component. |

### Collection page (Milestone 04)
| Section | Purpose |
|---|---|
| `collection-header` | Title, category descriptor, product count, drop status if applicable. |
| `product-grid` | Card grid, 2-col mobile / 4-col desktop. |
| `collection-filter` | Minimal: category, size, availability. Hidden entirely if ≤ 8 products. |

### Utility
| Section | Purpose |
|---|---|
| `text-block` | Constrained rich text — permitted on homepage, system, process, and launch pages only (per §00 refined rule). |
| `media-block` | One image or video, grid-aligned, optional caption. |
| `process-flow` | Numbered approval-flow row for page.process. |
| `contact-form` | Form + studio details. |

---

## 05. Snippet List & the Metafield Render Pattern *(revised in v0.2)*

### The pattern, stated honestly

v0.1 proposed a generic `metafield-guard` snippet that "returns rendered value or blank." That framing is wrong for Liquid: **`{% render %}` does not return values to the caller.** A rendered snippet writes output directly to the response and runs in an isolated scope; the parent template cannot receive a value back and branch on it (`{% capture %}` around a render is possible but fragile and hides logic).

**Corrected approach — `metafield-render-pattern`:** guarding is not a utility function; it is a *convention implemented inside each data snippet*. Every proof snippet follows the same internal shape:

```
1. Accept the metafield (or parsed value) as a render parameter.
2. Validate at the top: blank check + type/shape check (e.g. json contains the expected keys).
3. If validation fails → output nothing. No wrapper markup, no empty <tr>, no label without value.
4. If validation passes → render the full row/table/block.
5. The PARENT section also guards the outer wrapper (heading, <table> shell) so a
   section never prints a heading over zero rows: check the metafield once in the
   section before rendering any snippet loop.
```

Two-level guard: **section guards the shell, snippet guards the row.** This keeps "no fake data" enforcement consistent without pretending Liquid has return values. The convention is documented once (this section) and every proof snippet's header comment references it.

### Snippets carrying the pattern

| Snippet | Guard behavior |
|---|---|
| `spec-row` | Renders label + value only when value is present; blank value → zero output. |
| `pom-table` | Validates `akyro.pom` JSON shape (POM code, name, value_cm, tolerance, sizes). Malformed or empty → zero output; section shell also hidden. |
| `validation-row` | Renders test name + recorded result only when a result value exists. No "pending" placeholders. |
| `batch-record` | Renders only the fields present in `akyro.batch`; whole block absent if the metafield is empty. |

### Remaining snippets (unchanged roles)

| Snippet | Job |
|---|---|
| `logo-wordmark` | Outputs the uploaded locked wordmark asset. No inline-drawn fallback — if unset, outputs shop name in body type + theme-editor warning. |
| `logo-a-mark` | Outputs the locked iconic A. Whitelisted placements only (cart drawer, 404, password). |
| `red-dash` | Outputs the red dash asset at unit size, only where a section schema allows it. |
| `product-card` | Image (4:5), name, style no, price, status badge. One hover state. No quick-add (the Product File is the point of sale). |
| `badge-status` | LIVE / LOW / ARCHIVED / LOCKED — inventory- and tag-driven, never manual hype. |
| `price` | Money formatting; sale styling quiet, not red. |
| `media` | Responsive image/video wrapper: srcset, lazy, aspect-ratio, charcoal placeholder. |
| `icon` | Hairline-stroke icon set, 1px, geometric. |
| `cart-line` | Drawer line item: image, name, style no, variant, qty stepper, price, remove. |
| `quantity-input` | Accessible stepper. |
| `drawer` | Generic drawer shell (focus trap, ESC, overlay) reused by cart and mobile nav. |
| `section-frame` | Standard section padding/width wrapper bound to spacing tokens. |

---

## 06. Asset / CSS / JS Structure

```
assets/
├── tokens.css              ← all CSS custom properties (see §13 tokens)
├── base.css                ← reset, typography, links, forms, focus states
├── layout.css              ← grid system, section-frame, page shells
├── components.css          ← buttons, badges, cards, tables, inputs, drawer shell
├── section-[name].css      ← one file per section, loaded via stylesheet_tag inside the section
├── monolith.js             ← tiny core: pub/sub, fetch helpers, focus trap
├── cart.js                 ← Cart AJAX API + Section Rendering API updates (post-MVP)
├── drawer.js               ← drawer open/close/trap (cart + mobile nav)
├── product-form.js         ← variant selection, POM sync, add-to-cart (Milestone 05)
├── header.js               ← sticky state, search toggle
├── akyro-wordmark.svg      ← LOCKED asset (uploaded, never edited)
├── akyro-a-mark.svg        ← LOCKED asset
├── akyro-red-dash.svg      ← LOCKED asset
└── fonts/                  ← self-hosted, two families, woff2 only
```

**Principles:**
- No CSS framework, no JS framework. Vanilla modules, `defer` everything.
- Per-section CSS keeps unused styles off the critical path; `tokens/base/layout/components` are the only global sheets. Deduplication strategy for repeated section instances is a named risk — see §13 R5/R6.
- Fonts: two families maximum (display: bold geometric engineered; body/data: neutral, precise). Self-hosted, `font-display: swap`, subset.
- The theme must function with JS disabled except drawer conveniences (cart page fallback exists).

---

## 07. Theme Settings Structure (`config/settings_schema.json`)

| Group | Settings | Constraint logic |
|---|---|---|
| **01 Brand Assets (Locked)** | Wordmark upload, A-mark upload, red-dash upload, favicon | Uploads only. No color pickers, no size sliders beyond system presets. Helper text states the lock rule. |
| **02 Palette** | Black, Charcoal, Warm Grey, White, Signal Red | Prefilled with system hex values. Helper text: "Signal red is functional. Do not assign to backgrounds." |
| **03 Typography** | Display family, Body family, base size, scale ratio | Font pickers + self-hosted option. |
| **04 Grid & Spacing** | Max content width, gutter, section spacing unit | Unit-based; all spacing derives from one base unit. |
| **05 Drop System** | Enable status bar, low-stock threshold, drop metaobject binding, Drop Gate styling | Status derives from inventory + tags; no "fake urgency" toggle exists by design. |
| **06 Product File** | Metafield namespace confirmation (`akyro.*`), toggle spec/POM/validation blocks, size guide source | Blocks self-hide when data is absent regardless of toggle. |
| **07 Cart** | Drawer vs page priority, cart note on/off, shipping line text | — |
| **08 Footer & Legal** | Columns, access-list copy, "BUILT TO LAST" placement toggle (default OFF, max one placement) | Restricted-phrase guard in helper text. |
| **09 Social & SEO** | Minimal social links, share image | — |

**Metafield architecture (defined in admin, consumed by theme):**

```
namespace: akyro
├── spec        (json)  fabric, composition, gsm, wash, fit, construction, origin, category
├── pom         (json)  per-size POM table (POM code, name, value_cm, tolerance)
├── validation  (json)  test name → recorded result (approved values only)
├── batch       (json)  style_no, batch_code, sample_size, revision, pps_status
├── fit_notes   (list)  approved fit bullets
└── launch      (metaobject) season, release_date, channel, status
```

---

## 08. Homepage Wireframe

Tier 2 sections shown ⟪dimmed⟫ — present in the design, absent from the MVP build.

```
┌──────────────────────────────────────────────────────────────┐
│ ⟪STATUS BAR — T2⟫                                            │
├──────────────────────────────────────────────────────────────┤
│ AKYRO [wordmark]        DROPS  SYSTEM  PROCESS      ⌕  CART 1│  header (T1)
├──────────────────────────────────────────────────────────────┤
│   HERO — MONOLITH (T1)                                       │
│   [ one product, full-bleed or split ]                       │
│   FOUNDER OVERSIZED TEE            ── red dash               │
│   Style AK-FE-001 / 240 GSM / Garment washed                 │
│   [ VIEW PRODUCT FILE ]                                      │
├──────────────────────────────────────────────────────────────┤
│ DROP STATUS (T1)  AK-FE-001 · LIVE · sizes S–XL · stock band │
├──────────────┬───────────────────┬───────────────────────────┤
│ 01 FIT       │ 02 FABRIC         │ 03 CONSTRUCTION           │  product-proof (T1)
│ [on-model]   │ [macro texture]   │ [seam macro]              │
├──────────────┴───────────────────┴───────────────────────────┤
│ COLLECTION INDEX (T1)                                        │
│ [ FASHION ]        [ OBJECTS ]        [ SCENT ]              │
├──────────────────────────────────────────────────────────────┤
│ ⟪MATERIAL INDEX — T2⟫                                        │
│ ⟪SYSTEM STATEMENT — T2⟫                                      │
│ ⟪LAUNCH STRIP — T2⟫                                          │
│ ⟪ENVIRONMENT — T2⟫                                           │
├──────────────────────────────────────────────────────────────┤
│ ACCESS LIST (T1) — email input, one line of functional copy  │
├──────────────────────────────────────────────────────────────┤
│ FOOTER (T1) — nav / support / legal                          │
└──────────────────────────────────────────────────────────────┘
```

Homepage logo count remains exactly one (header). The MVP homepage reads complete on its own — Tier 2 sections extend the story; they do not patch holes.

---

## 09. Product Page Wireframe — "Product File" (Milestone 05)

```
┌──────────────────────────────┬───────────────────────────────┐
│ MEDIA COLUMN (60%)           │ INFO COLUMN (40%, sticky)     │
│ [ hero product 4:5 ]         │ STYLE NO AK-FE-001  ● LIVE    │
│ [ on-model front ]           │ FOUNDER OVERSIZED TEE         │
│ [ on-model back ]            │ price                         │
│ [ detail macro — neck ]      │ ── red dash                   │
│ [ detail macro — label ]     │ Quick spec: 240 GSM ·         │
│                              │ Cotton jersey · Garment wash  │
│ vertical stack, no thumbnail │ SIZE  [S][M][L][XL]           │
│ carousel; scroll = inspect   │ ▸ POM table (guarded)         │
│                              │ [ ADD TO CART ]               │
│                              │ Shipping line · Batch note    │
├──────────────────────────────┴───────────────────────────────┤
│ SPECIFICATIONS — spec-table (guarded rows)                   │
│ FIT PROOF — on-model pair + approved fit bullets             │
│ CONSTRUCTION — approved flat asset + seam legend             │
│ SAMPLE VALIDATION — recorded results only                    │
│ BATCH RECORD — style no / batch / sample size / revision     │
│ SAME SYSTEM — up to 4 product cards                          │
└──────────────────────────────────────────────────────────────┘
```

- Size selection syncs the POM table highlight to the chosen size.
- All proof blocks follow the metafield-render-pattern (§05): section guards the shell, snippet guards the row. No approved data → no block, no placeholder, no editor override.

---

## 10. Collection Page Wireframe (Milestone 04)

```
┌──────────────────────────────────────────────────────────────┐
│ FASHION                                          12 PRODUCTS │
│ Category descriptor, one line. Drop status on collection.drop│
├──────────────────────────────────────────────────────────────┤
│ FILTER  Category ▾  Size ▾  Availability ▾        SORT ▾     │  (hidden ≤ 8 items)
├──────────────┬──────────────┬──────────────┬─────────────────┤
│ [card]       │ [card]       │ [card]       │ [card]          │
├──────────────┴──────────────┴──────────────┴─────────────────┤
│ [ LOAD MORE ]  — no infinite scroll                          │
└──────────────────────────────────────────────────────────────┘
```

- Grid: 2 columns mobile, 4 desktop, hairline gaps.
- Archive variant: cards show batch code + SOLD status; archived Product File replaces buy actions with the batch record.

---

## 11. Cart Drawer Logic

**Milestone 01 scope (skeleton):** drawer markup rendered in `theme.liquid` via the shared `drawer` snippet, full styling, open/close with focus trap, static Liquid render of cart contents on page load. No AJAX.

**Post-MVP scope (Milestone 03):** Cart AJAX API + Section Rendering API updates.

**Full flow (unchanged from v0.1):**
1. **Open triggers:** cart icon; successful add-to-cart (drawer opens, new line focused).
2. **Render:** overlay (black, 60%) + right panel (full-width mobile). Header: `CART (n)` + close. One iconic-A signature moment at panel foot — whitelisted placement.
3. **Line items:** image, name, style no, variant, qty stepper, line price, remove. Quantity change → `/cart/change.js` → re-render drawer section → swap → restore focus.
4. **Stock truth:** over-request shows the real available number ("2 available in this batch"). No countdowns, no viewer counts — scarcity is inventory fact, not theater.
5. **Notes & shipping:** optional order note; static shipping line from settings.
6. **Checkout:** single primary action → Shopify checkout. Secondary: view cart page.
7. **Empty state:** "Cart is empty." + link to Drops.
8. **Accessibility:** `role="dialog"`, `aria-modal`, focus trap, ESC, focus return, `prefers-reduced-motion` respected.
9. **No-JS fallback:** cart icon links to `/cart`; add-to-cart submits normally.

---

## 12. Mobile-First Rules

- **Breakpoints:** base (mobile) → `750px` → `990px` → `1400px` max container. CSS written mobile-up.
- **Grid collapse:** 4-col → 2-col below 990px; proof triptych stacks; product page single column, media first, sticky buy bar at viewport bottom.
- **Tap targets:** minimum 44px.
- **Header:** condensed — wordmark, menu trigger, cart. Menu = full-height drawer (shared snippet).
- **Type:** `clamp()` fluid scale; body never below 16px; POM/spec tables scroll horizontally in a framed container rather than shrinking type.
- **Images:** srcset everywhere; art-directed hero crop on mobile; lazy below fold; charcoal placeholder, no shimmer.
- **Performance budget:** LCP ≤ 2.5s mid-range mobile, JS ≤ 60KB gzipped, no render-blocking third-party scripts, fonts preloaded.
- **Motion:** ≤ 200ms, opacity/transform only, suppressed under `prefers-reduced-motion`.

---

## 13. AKYRO Visual Tokens (`tokens.css` plan)

```
COLOR
--akyro-black:      #0A0A0A     primary surface
--akyro-charcoal:   #1A1A1C     panels, cards, media placeholder
--akyro-warm-grey:  #D9D9D9     secondary text on dark, hairlines at low alpha
--akyro-white:      #F2F2F2     primary text on dark, light-mode surfaces
--akyro-red:        #E30613     functional accent ONLY

DERIVED
--surface / --surface-raised / --text / --text-muted / --line (1px, warm-grey @ ~18%)

SPACE  (unit-based — everything derives from one unit, like the red-dash construction)
--unit: 8px · --space-1..-10 · --section-gap: clamp() · --gutter responsive

TYPE
--font-display / --font-body · 1.25 ratio clamp() scale · --tracking-label: 0.12em uppercase

SHAPE & LINE
--radius: 0 · --border: 1px solid var(--line)
--angle-signature: 60deg (reserved for approved graphic framing only — never auto-decoration)

MOTION
--ease: cubic-bezier(.2,.6,.2,1) · --speed: 180ms

Z-INDEX
--z-header: 100 · --z-overlay: 190 · --z-drawer: 200
```

**Token discipline:** components consume tokens only — no raw hex in section CSS. Signal-red usage stays greppable and auditable.

---

## 14. Shopify Admin Setup Checklist *(new in v0.2)*

Complete before or alongside Milestone 01. The theme assumes this admin state.

| # | Area | Setup required |
|---|---|---|
| 1 | **Products** | Create AK-FE-001 (and any launch products) with: title, style-number handle convention, variants (sizes), real inventory quantities per location, product media in approved order (hero → on-model front → on-model back → macros), tags for status logic (`archive`, `founder-edition`). |
| 2 | **Collections** | Create: Founder Edition, Fashion, Objects, Scent, Archive. Archive = automated collection (tag `archive` OR out-of-stock rule per final decision). Assign collection images. |
| 3 | **Product metafields** | Define the `akyro.*` namespace exactly per §07: `spec` (JSON), `pom` (JSON), `validation` (JSON), `batch` (JSON), `fit_notes` (list). Agree the JSON shape now — the guarded snippets validate against it. Populate AK-FE-001 with approved data only. |
| 4 | **Metaobjects** | Define `launch` metaobject (season, release_date, channel, status) and create the first entry when a real launch is scheduled. Leave empty otherwise — the launch-strip stays hidden. |
| 5 | **Navigation menus** | Main menu: Drops / System / Process. Footer menus: Support (Care, Shipping, Contact), Legal (policies). Handles agreed so section schemas can default to them. |
| 6 | **Customer accounts** | Choose classic vs new customer accounts; enable; confirm URLs the theme should link to for the Access page. |
| 7 | **Email capture** | Confirm capture mechanism: native Shopify customer form (tags subscriber) vs external ESP. The access-list section is built against the chosen target. |
| 8 | **Markets / currency** | Confirm primary market (Egypt) and currency display (EGP; USD secondary?). Enable Markets if selling internationally; theme money formatting follows this decision. |
| 9 | **Shipping & policy pages** | Configure shipping zones/rates; generate policy pages (refund, privacy, terms, shipping) so footer legal links resolve; write the static shipping line used in the cart drawer. |

---

## 15. Implementation Risks Before Coding *(new in v0.2)*

| # | Risk | Impact | Mitigation |
|---|---|---|---|
| R1 | **Missing locked SVG assets.** Wordmark, A-mark, and red-dash production exports not yet delivered. | Header, drawer signature, 404, and Drop Gate cannot ship; any temporary mark would violate the lock rule. | Hard blocker for Milestone 01 sign-off. The theme will render a plain-text shop name fallback + editor warning, but the milestone is not "done" until real assets are uploaded. No hand-drawn stand-ins, ever. |
| R2 | **Missing fonts / license.** Display and body families unconfirmed; self-hosting requires a webfont license. | Type tokens, clamp scale, and layout metrics all shift when the real faces land; late font swaps cause reflow and re-QA. | Decide families before tokens.css is finalized. If undecided, build on a metrically similar open fallback and flag every affected token for re-check. |
| R3 | **Missing product metafields.** `akyro.*` definitions not created or AK-FE-001 not populated. | Every proof block self-hides; the Product File looks empty and guarded rendering can't be tested against real shapes. | Define metafields (checklist §14.3) before Milestone 05; populate at least one product with approved data during Milestone 01 so snippets are developed against real JSON, not assumptions. |
| R4 | **Gift card template drift.** `gift_card.liquid` requirements change between Shopify versions. | A stale template copied from memory can break gift card issuance. | Scaffold the theme with Shopify CLI and diff our styled version against the current CLI-generated `gift_card.liquid`; keep required objects/scripts intact, restyle only. |
| R5 | **Section CSS loading strategy.** Per-section stylesheets loaded incorrectly (e.g. plain `<link>` in section body) can render-block or misorder against global sheets. | FOUC, specificity fights, degraded LCP. | One convention: global sheets (`tokens → base → layout → components`) preloaded in `theme.liquid`; each section loads its own file via `stylesheet_tag` at the top of the section file; section CSS may only use tokens and may not restyle global components. |
| R6 | **Duplicate CSS loads.** The same section rendered multiple times (or a snippet loading a stylesheet) emits duplicate tags. | Wasted bytes, ordering surprises. | Rule: only sections load stylesheets, never snippets. Shopify deduplicates identical `stylesheet_tag` href output, but we verify in rendered HTML during QA; shared component styles live in `components.css`, not in any section file. |
| R7 | **Homepage MVP weight creep.** Tier 1 homepage accumulating JS/embeds/oversized media. | Blown performance budget on the most important page. | Enforcement: Tier 1 sections ship with zero section-level JS (drawer skeleton excepted); hero image art-directed and size-capped; Lighthouse mobile ≥ 90 is a Milestone 01 acceptance criterion, measured before sign-off, with the check repeated when Tier 2 sections are added. |

---

## 16. First Development Milestone Plan *(revised in v0.2)*

**Milestone 01 — MVP Shell + Homepage Core**

| # | Deliverable | Contents |
|---|---|---|
| 1 | Theme scaffold | Shopify CLI scaffold, OS 2.0 file tree, `theme.liquid`, JSON templates, settings schema skeleton, CLI `gift_card.liquid` retained for later restyling (R4) |
| 2 | Token layer | `tokens.css`, `base.css`, `layout.css` — palette, type, grid, section-frame |
| 3 | Global shell | `monolith-header`, `monolith-footer` with locked-asset snippets |
| 4 | Homepage MVP sections | `hero-monolith`, `drop-status`, `product-proof`, `collection-index`, `access-list` |
| 5 | Drawer skeleton | Shared `drawer` snippet + static `cart-drawer` (structure, styling, open/close, focus trap — no AJAX) |
| 6 | Card + badge | `product-card`, `badge-status` (needed by collection-index and drop-status) |

**Acceptance criteria:**
- Renders on a dev store with only settings-uploaded logo assets (no logo hard-coded); real locked assets uploaded (R1) or milestone remains open.
- Zero raw hex outside `tokens.css`.
- Signal red appears only in: status dot, active nav state.
- Tier 1 homepage: no section-level JS except drawer; Lighthouse mobile ≥ 90 (R7).
- No duplicate stylesheet tags in rendered homepage HTML (R6).
- One product populated with approved `akyro.*` data for development (R3).

**Inputs required before Milestone 01 starts:**
1. Final wordmark, A-mark, red-dash files (SVG preferred).
2. Font selection + license files.
3. Sign-off on the `akyro.*` metafield JSON shapes (§07).
4. AK-FE-001 approved data set, or confirmation guarded blocks launch hidden.
5. Admin checklist items 1–2 and 5 (§14) at minimum.

**Subsequent milestones:**
02 Homepage Tier 2 (`material-index`, `system-statement`, `launch-strip`, `environment`, `status-bar`) → 03 Cart drawer live (AJAX + Section Rendering API) → 04 Collection, Drop Index, filters → 05 Product File + proof blocks → 06 Support pages, Drop Gate, Archive, customers → 07 QA, accessibility, performance audit.

---

*AKYRO STUDIO — MONOLITH OS · Architecture v0.2 · Do not distribute outside the AKYRO project.*
