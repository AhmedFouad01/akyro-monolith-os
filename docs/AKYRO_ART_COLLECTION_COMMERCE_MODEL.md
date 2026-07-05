# AKYRO — Art Collection Commerce Model (M05-A)
Supersedes Edition terminology (M04-A/B) with "Art Collection." Docs only — no theme code yet.

## Core model
AKYRO sells **Art Collections**, not isolated products. Each Art Collection carries its own visual system, story, palette, media, and edition logic. Products are **applications** of the Art Collection across apparel, objects, scent, accessories, bags, phone cases, and future categories.

## Shopify mapping
- **Art Collection** = metaobject `akyro.art_collection` (renamed from `akyro.edition`). Curatorial layer: story, palette reference, media, edition logic. Not sellable itself.
- **Shopify Collection** = sellable commerce container, one per Art Collection via `collection.metafields.akyro.art_collection` (metaobject reference).
- **Product** = application inside an Art Collection via `product.metafields.akyro.art_collection` (metaobject reference) + `product.metafields.akyro.family` (validated list: `apparel, objects, scent, accessories, bags, cases, prints, home_objects`).
- Existing product-proof metafields (`fit, fabric, construction, care, batch, validation`) unchanged.

## akyro.art_collection metaobject fields
`title, slug, collection_code, summary, story (rich text), palette_ref (text — references tokens, never new hex), hero_media, status (preview/access/live/archived), sort_order, linked_collection (collection ref), product_families (list), edition_quantity/batch_logic (real data only), seo_summary, aieo_answer, faq_items (real content only)`.

## Homepage — Art Collection Stage
Replaces flat homepage with a horizontal stage (see M04-A §3 model — unchanged mechanism, renamed entity): vertical semantic DOM first (SEO/AIEO/a11y), desktop horizontal snap as progressive enhancement, mobile/no-JS stays vertical. One block type (`art_collection`) referencing a Collection; products query at render time — no nested-block workaround.

## Theme Editor — dynamic blocks per Art Collection
Section blocks pick an Art Collection metaobject; layout/background/CTA controlled via existing shell system (M02-D) — no new mechanism, reused.

## SEO / AIEO / structured data
`CollectionPage`/`ItemList` JSON-LD per Art Collection page, `Product` JSON-LD per product, `seo_summary`/`aieo_answer` fields rendered as real visible copy (not hidden spam), internal linking: product → "Part of [Art Collection]" → its Collection.

## RTL / Light-Dark / Typography
No new mechanism required — reuses direction.css exception-pair model (incl. M04-E1 drawer fix), theme-mode token system, and the unified Typography engine (S2c single-source presets). Art Collection Stage panels use existing `bg_mode` shell controls for light/dark interruption per panel.

## Limited edition commerce
`edition_quantity`/`batch_logic` render only with real data (metafield-guard pattern, unchanged) — never invented scarcity.

## Language rule (new, replaces prior slogan defaults)
- **Do not use**: "Built to Last," "Timeless," "Premium," "Legacy" as active slogans anywhere (homepage, product, marketing).
- **Use instead**: FORM, HELD. — and product-evidence language generally: copy must connect to fit, fabric, construction, wash test, batch code, sample approval, material honesty, system language (per AKYRO IP Protocol v1.0 §7). No generic durability/premium-brand phrasing.
- "BUILT TO LAST" remains an internal restricted phrase — not reintroduced as a public slogan under this model.

## Settings organization
No settings_schema changes in this step (M04-B2 preservation rules apply when M05 coding begins). Art Collection Stage section settings will follow the existing section-schema discipline — global Theme Settings stays system-wide only.

## Migration note
Any existing `akyro.edition` references from M04-B docs should be treated as superseded naming; no code currently implements either name, so no data migration is required yet.
