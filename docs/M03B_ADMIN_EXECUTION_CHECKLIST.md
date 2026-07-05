# M03-B — Admin Execution Checklist (run in order)
Tick each step. Details live in ADMIN_SETUP / NAVIGATION_SETUP / METAFIELDS_SETUP.

## 1. Metafields first (Settings → Custom data → Products)
[ ] akyro.fit · akyro.fabric · akyro.construction · akyro.care (multi-line text)
[ ] akyro.batch (single-line) · akyro.validation (multi-line)

## 2. Products (Products → Add)
[ ] Founder Oversized Tee — sizes S–XL, SKUs AK-FE-001-S…XL (demo), tracked qty, demo images
[ ] Founder Object Set — SKU AK-OB-001, tracked qty
[ ] Founder Scent Concept — SKU AK-SC-001, tracked qty
[ ] All descriptions open with "Demo content — replace before launch."
[ ] akyro.* fields: leave blank (pending states) or prefix "Demo — replace before launch."

## 3. Collections
[ ] Fashion / Objects / Scent (manual, assign products, description + image)
[ ] Archive (automated: tag equals `archive`)

## 4. Pages + template assignment
[ ] System→page.system · Process→page.process · Access→page.access · Contact→page.contact · Archive→page.archive

## 5. Menus (Navigation)
[ ] main-menu: Home / Catalog / System / Process / Access
[ ] footer-system: System / Process / Contact
[ ] footer-legal: Shipping-Returns / Privacy / Terms (create placeholder policies first: Settings → Policies)

## 6. Languages
[ ] Add Arabic, publish
[ ] Translate & Adapt: products, collections, pages, menus, policies (names/SKUs stay Latin)

## 7. Theme Editor
[ ] Brand assets: upload locked wordmark / A / red dash / favicon (when delivered — until then fallbacks are expected)
[ ] Wordmark width slider check (no jump)
[ ] Header menu bound; locale switcher ON
[ ] Footer: two menu columns bound; access ON; BUILT TO LAST OFF
[ ] Drop status → Founder Oversized Tee
[ ] Optional: Featured collection (Fashion) added below existing homepage sections — do not reorder existing ones
[ ] Theme mode: dark

## 8. QA (all 4 locale/direction states × dark + light)
[ ] Homepage sections render; drawer opens inline-end; add-to-cart round trip
[ ] /collections/fashion grid + sort; /search results + empty; Product File spec rows show pending states
[ ] Arabic: no letter-spacing, Latin SKUs unshuffled, headings in Arabic stack
[ ] Light mode: concrete surfaces, hairlines visible, no recolored logos
[ ] No fake data anywhere (measurements, validation, stock urgency, launch dates)
