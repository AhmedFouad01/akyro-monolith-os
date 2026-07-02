# AKYRO STUDIO — MONOLITH OS
## Architecture v0.2 → v0.3 — Bilingual / RTL Architecture Patch
**Phase 01 revision — revised architecture sections only (no code)**
**Status: Internal / Source-controlled / Built for AKYRO only**
**Change log v0.2 → v0.3:** New governing rule "Bilingual by architecture, not afterthought" · Locale strategy · Direction detection · RTL CSS convention · Bilingual typography tokens · Arabic content rules · Per-component RTL requirements · Motion direction rules · Locale switcher · Admin Setup additions · Bilingual QA checklist · File tree implications. All other v0.2 sections remain in force unchanged.

---

## §00 — Governing Rules (addendum)

Add to the hard rules encoded into the architecture:

- **Bilingual by architecture, not afterthought.** The theme supports English (LTR) and Arabic (RTL) from day one across layout, typography, navigation, cart, product pages, collection pages, forms, and motion behavior. Direction-awareness is a property of every component's CSS convention, not a patch layer applied later. The Arabic storefront must feel like AKYRO — engineered, calm, product-led — not like a generic Arabic ecommerce template with the same products.
- **Technical data stays in system script.** Style numbers, batch codes, GSM values, POM measurements, size codes, and revision marks render in Latin script and Latin digits in both locales. The storefront must always match the factory-facing Garment Sheets and Tech Packs — one notation system from spec to screen.

---

## §NEW A — Locale Strategy

| File | Role |
|---|---|
| `locales/en.default.json` | English storefront strings — the default locale and key source of truth. |
| `locales/ar.json` | Arabic storefront strings — approved translations only, filled per milestone as sections are built. |
| `locales/en.default.schema.json` | Theme-editor labels and helper text (English), including the lock-rule warnings. |
| `locales/ar.schema.json` | Theme-editor labels and helper text (Arabic) for Arabic-speaking merchandisers. |

**String rules:**
- Every hardcoded storefront string in Liquid goes through a translation key and the `t` filter. No exceptions in sections or snippets.
- The only untranslated text permitted in templates: merchant-editable settings values (section headings entered in the editor) and product data (titles, descriptions, metafield values), which are localized through Shopify's own translation surface, not the theme.
- Key naming follows section ownership (`sections.cart_drawer.empty`, `products.pom.tolerance`) so orphaned keys are visible when a section is removed.
- A key missing from `ar.json` falls back to English silently — QA includes a missing-key sweep before any Arabic launch (§NEW H).

**Milestone placement:** all four locale files exist from Milestone 01. `ar.json` ships with the Tier 1 key set translated and approved; later milestone sections add their keys to both files in the same commit — a section is not "done" with only English keys.

---

## §NEW B — Direction Detection Strategy (principle, not code)

In `layout/theme.liquid`:

1. Read the active language ISO code from Shopify's localization object.
2. If the base language code is Arabic → output `html lang="ar" dir="rtl"` and a `dir-rtl lang-ar` marker class on body.
3. Otherwise → `html lang="[iso]" dir="ltr"` and `dir-ltr`.
4. The `dir` attribute on `<html>` is the single source of direction truth. CSS reads it via `[dir="rtl"]` selectors and logical properties; JS reads `document.documentElement.dir` — no component maintains its own direction state.
5. Font loading is direction-aware: Arabic woff2 files are preloaded only when the Arabic locale is active, so the English storefront pays no Arabic font cost and vice versa.

---

## §NEW C — RTL CSS Convention

**Default rule: logical properties everywhere.** All component CSS is written direction-neutral from the first line:

- `margin-inline-start/end` — never `margin-left/right`
- `padding-inline-start/end` — never `padding-left/right`
- `inset-inline-start/end` — never `left/right` for positioning
- `border-inline-start/end` — never `border-left/right`
- `text-align: start/end` — never `left/right`

**Escape hatch, controlled:** where a physical property is visually unavoidable (rare: certain transform-based animations, background-position art direction), the rule lives in `assets/direction.css` with an explicit paired `[dir="rtl"]` override directly beneath it. A physical property without its RTL pair fails review. This keeps `direction.css` small and fully auditable — it is a list of exceptions, not a mirrored theme.

**Mandatory dual-direction test surface:** header, navigation, cart drawer, mobile menu, product info column, product media column, collection filters, accordions, forms, and footer grids are tested in both LTR and RTL at every milestone that touches them (full matrix in §NEW H).

---

## §NEW D — Bilingual Typography Rules (tokens.css addendum)

```
TYPE — BILINGUAL
--font-display:      [EN display — bold, geometric, engineered]
--font-body:         [EN body — neutral, precise]
--font-display-ar:   [AR display — from approved shortlist]
--font-body-ar:      [AR body — from approved shortlist]

:lang(ar) metric overrides (in base.css):
--leading-body:   raised vs English (Arabic ascenders/descenders and diacritics need air)
--leading-display: raised vs English display leading
--tracking-label: 0        ← Arabic is NEVER letter-spaced; the 0.12em uppercase
                              label treatment is a Latin-only device
```

**Rules:**
- English and Arabic families are defined separately. Arabic never falls back to a system default or a weak generic — if the Arabic face hasn't loaded, that is a build failure, not a fallback state.
- **Arabic shortlist (choose one pair before Milestone 01 tokens are finalized):** Alexandria · Cairo · IBM Plex Sans Arabic · Noto Kufi Arabic. Selection criteria: geometric/kufi-leaning structure that echoes AKYRO's engineered display tone; a clean, highly readable text weight for body/data; woff2 availability with subsetting; license for self-hosting.
- Arabic line-height is increased relative to English at both display and body scale.
- Arabic tracking is zero. No letter-spacing on Arabic words, ever — the uppercase-tracked label style maps to weight + size contrast in Arabic instead.
- Arabic headings keep AKYRO's engineered restraint: geometric structure, generous negative space, red used identically (functional only). The Arabic storefront must not drift toward decorative or hype Arabic display styling.
- Latin-script technical data (style numbers, GSM, sizes) inside Arabic text renders in the English data face with correct bidi isolation so codes never visually shuffle inside RTL sentences.

---

## §NEW E — Arabic Content Rules

- Arabic copy is premium, controlled, and product-led — the same register as the English system, not a translation of its "energy." Calm sentences, verifiable claims, no casual hype Arabic, no exclamation inflation.
- AKYRO terms are not translated literally when translation weakens the brand. The wordmark is never transliterated. Restricted phrases ("BUILT TO LAST") are not translated or paraphrased into Arabic slogans — restricted stays restricted in every language.
- Proof labels (FIT / FABRIC / CONSTRUCTION) may carry approved Arabic labels when the Arabic storefront is active; the values beneath them keep technical terms in English where precision demands it (GSM, French Terry, PPS). Codes, style numbers, and measurements stay Latin per §00.
- Product cards carry short Arabic lines only — name, style number, price, status. No long Arabic paragraphs at card level; depth lives on the Product File.
- All Arabic strings pass the same Originality Gate as English: if the sentence could sit on any Arabic clothing store, it is rewritten from AKYRO's system language (structure, fit proof, wash test, batch identity).

---

## §NEW F — Bilingual Component Requirements

| Component | RTL behavior |
|---|---|
| `monolith-header` | Wordmark at inline-start, nav and triggers at inline-end — layout mirrors via logical properties; wordmark asset itself never mirrors. Sticky hairline unchanged. |
| Mobile menu drawer | Opens from inline-end; close icon at inline-start of panel header in RTL; nav items text-align: start. |
| `cart-drawer` | Panel anchors to inline-end; slide-in respects direction (§NEW G); line-item anatomy mirrors (image inline-start, price inline-end); qty stepper order mirrors; iconic-A signature stays centered (direction-neutral placement). |
| `hero-monolith` | Split layout swaps columns via grid logical flow; statement text-align: start; red dash sits at the start edge of the text block in both directions. |
| `drop-status` | Strip reads start → end; status dot precedes text at inline-start; stock band bar fills from inline-start. |
| `product-proof` | Triptych order follows reading direction (01 appears at inline-start in both locales); numbered callouts keep Latin digits; cell text-align: start. |
| `collection-index` | Three entries flow in document direction; labels text-align: start; hairline dividers use border-inline. |
| `access-list` | Input + button group mirrors; placeholder text-align: start; success/error messages text-align: start. |
| `product-file` | Media column and sticky info column swap sides in RTL via grid logical flow; media stack order unchanged; buy button full-width (direction-neutral); size buttons flow start → end. |
| `spec-table` | Label cell at inline-start, value at inline-end; Latin technical values bidi-isolated inside Arabic rows. |
| `fit-proof` | Front/back image pair keeps garment order (front first in reading direction); Arabic fit bullets text-align: start with raised leading. |
| `construction-map` | The approved flat asset NEVER mirrors — garment drawings are direction-agnostic technical documents. Only the legend text block mirrors; numbered legend keeps Latin digits keyed to the asset. |
| `sample-validation` | Test name at inline-start, recorded result at inline-end; result values remain Latin where technical. |
| `batch-record` | Field labels localized; all values (style no, batch, revision, PPS) stay Latin; row anatomy mirrors. |
| `product-card` | Name and style no text-align: start; price and badge at inline-end of the meta row; hover state direction-neutral (opacity/секondary image, no lateral slide). |
| `monolith-footer` | Column grid mirrors via logical flow; access-list per its own rules; legal line text-align: start; locale switcher present (§NEW G-2). |

---

## §NEW G — Motion & Interaction Direction Rules

- Drawers translate from **inline-end**, never a hardcoded right; the slide transform is defined once and direction-resolved via `[dir]`.
- Arrows and chevrons flip in RTL. Implementation: the `icon` snippet marks directional icons (arrow, chevron, "continue") with a flip class; symmetric icons (close, plus, minus, search) never flip.
- Slide/reveal animations respect document direction; any translateX-based motion has its RTL pair in `direction.css` per §NEW C.
- Scroll-reveal animations use opacity and translateY only — no left/right dependence, so they need no direction handling at all.
- Hover states remain direction-neutral (opacity, underline from text-start, secondary image) unless a mirrored hover is explicitly designed; no lateral hover slides.
- `prefers-reduced-motion` behavior is identical in both directions.

### §NEW G-2 — Locale Switcher

- New snippet `snippets/locale-switcher.liquid`: built on Shopify's localization form data, listing published languages only.
- Display: quiet text pair — `EN / AR` (Arabic label rendered in the Arabic face) — hairline separator, current locale in full text color, inactive in muted; no flags, no globe icon, no dropdown chrome. It reads as system data, in keeping with the header's engineered restraint.
- Placement: header (desktop), mobile menu drawer, footer (optional via setting). This is a functional control, not a logo moment — it never uses red except the standard active-state convention.

---

## §NEW H — Admin Setup Checklist additions (extends §14)

| # | Area | Setup required |
|---|---|---|
| 10 | **Store languages** | Add Arabic as a published store language in Shopify admin; confirm URL strategy (subfolder locale URLs). |
| 11 | **Content translation** | Translate storefront content through Shopify's language tools / Translate & Adapt where used; theme strings come from `ar.json`, product/merchant content from the translation surface. |
| 12 | **Product content decision** | Decide per catalog: Arabic product titles + descriptions, or English product names with Arabic descriptions. Recommended default: product names and style numbers stay English (system consistency); descriptions and fit notes translated. Record the decision in docs/ADMIN-SETUP.md. |
| 13 | **Policy pages** | Translate refund, privacy, terms, and shipping policies to Arabic so footer legal links resolve correctly in both locales. |
| 14 | **Customer account surfaces** | Translate customer account text where Shopify exposes it; note which strings are Shopify-controlled vs theme-controlled. |
| 15 | **Checkout & accounts test** | Test checkout and account surfaces separately in Arabic — checkout is Shopify-rendered and must be verified independently of theme QA. |

---

## §NEW I — Bilingual QA Checklist (extends docs/QA-CHECKLIST.md)

**Matrix — every item passes in all four states:** LTR English desktop · RTL Arabic desktop · LTR English mobile · RTL Arabic mobile.

- Header alignment and wordmark position
- Menu drawer opens from correct edge; close control position
- Cart drawer direction, line-item anatomy, stepper order
- Product page column order (media vs info)
- Product proof cards: order, numbering, label alignment
- Forms and placeholders: alignment, input direction, error placement
- Buttons: label alignment, icon side, full-width behavior
- Accordions: caret side and flip, content alignment
- Icons/arrows: directional icons flipped, symmetric icons untouched
- Scroll animations: no lateral direction dependence
- Hover states: direction-neutral or explicitly mirrored
- No broken text alignment anywhere (no orphaned `text-align: left`)
- No Arabic letter-spacing anywhere (automated check: computed letter-spacing on :lang(ar) elements = normal/0)
- No tiny Arabic text (Arabic body never below the raised minimum; POM/spec tables legible in Arabic context)
- Latin technical data correctly bidi-isolated inside Arabic sentences
- Missing-key sweep: no untranslated key tokens visible on the Arabic storefront
- Construction/flat assets not mirrored in RTL

---

## §NEW J — File Tree Implications (File Tree v1.0 → v1.1)

| File | Change | Milestone |
|---|---|---|
| `assets/direction.css` | **Add.** The controlled exception file: paired RTL overrides for unavoidable physical properties, directional icon flips, drawer slide direction resolution. Loaded globally after components.css. | M01 |
| `snippets/locale-switcher.liquid` | **Add.** Quiet EN/AR switcher per §NEW G-2, rendered in header, mobile drawer, footer (optional). | M01 |
| `snippets/direction-helpers.liquid` | **Add only if needed.** Reserved name for direction utility output (e.g. bidi isolation wrapper for Latin codes in Arabic text) — created only if the pattern repeats enough to earn a snippet; otherwise the logic stays inline and this file is never created. | Later (conditional) |
| `locales/en.default.json` | Already in tree — role unchanged, remains M01. | M01 |
| `locales/ar.json` | **Re-marked M01** (was Later). Ships with Tier 1 keys translated and approved; grows per milestone. | M01 |
| `locales/en.default.schema.json` | Already in tree — remains M01. | M01 |
| `locales/ar.schema.json` | **Add.** Arabic theme-editor labels and helper text, including lock-rule warnings in Arabic. | M01 |
| `assets/akyro-display-ar.woff2` | **Add.** Arabic display face, self-hosted, subset (pending §NEW D selection + license). | M01 |
| `assets/akyro-body-ar.woff2` | **Add.** Arabic body/data face, self-hosted, subset. | M01 |

**Milestone 01 acceptance criteria — additions:**
- Homepage MVP passes the four-state matrix (§NEW I) for all Tier 1 sections.
- Zero physical left/right properties in any section CSS without a paired override in `direction.css`.
- Arabic locale renders with the approved Arabic faces (no fallback font on screen).
- Locale switcher functional in header and mobile drawer.

**New inputs required before Milestone 01:**
- Arabic font pair selection from the shortlist + self-hosting license (extends risk R2 to both scripts).
- Approved Arabic translations for the Tier 1 key set (hero CTA, drop status labels, proof labels, access-list copy, cart strings, nav) — translated by/approved through AKYRO, not machine-filled.
- Admin decision on product content language (checklist item 12).

---

*AKYRO STUDIO — MONOLITH OS · Architecture v0.3 patch · Do not distribute outside the AKYRO project.*
