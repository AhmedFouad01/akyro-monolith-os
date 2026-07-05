# AKYRO MONOLITH OS — ADMIN_SETUP (M03-A)
Exact Shopify Admin steps. Supersedes docs/ADMIN-SETUP.md for bootstrap. No code edits required for any step.

## 1. Products (Admin → Products → Add)
Create 3 demo products. All descriptions start with: "Demo content — replace before launch."
1) **Founder Oversized Tee** — handle `founder-oversized-tee`, vendor AKYRO, sizes S/M/L/XL, SKU per variant: `AK-FE-001-S` … `-XL` (demo), real inventory qty per size (e.g. 5), track quantity ON.
2) **Founder Object Set** — handle `founder-object-set`, single variant, SKU `AK-OB-001` (demo), qty real.
3) **Founder Scent Concept** — handle `founder-scent-concept`, single variant, SKU `AK-SC-001` (demo), qty real.
Rules: no fake GSM/validation/stock urgency. Media: upload demo images or reuse theme demo assets; mark alt "AKYRO demo image".
Tag `archive` only when retiring a product (drives ARCHIVED badge).

## 2. Collections (Admin → Products → Collections)
- **Fashion** (manual) → add Tee
- **Objects** (manual) → add Object Set
- **Scent** (manual) → add Scent Concept
- **Archive** (automated: product tag equals `archive`)
Each: description starts "Demo content — replace before launch."; optional collection image.

## 3. Pages (Admin → Online Store → Pages)
Create pages and assign templates (right sidebar → Theme template):
- System → `page.system`
- Process → `page.process`
- Access → `page.access`
- Contact → `page.contact`
- Archive → `page.archive`
Page body content can stay empty — sections come from the template.

## 4. Navigation — see docs/NAVIGATION_SETUP.md

## 5. Metafields — see docs/METAFIELDS_SETUP.md

## 6. Theme Editor assignments (Online Store → Customize)
- Homepage: leave current sections as arranged; optionally add "Featured collection" pointing at Fashion.
- Drop status section (if on homepage): pick Founder Oversized Tee.
- Header: confirm menu = main-menu; language switcher ON.
- Footer: menu columns → footer menus; access signup ON; "BUILT TO LAST" stays OFF.
- Theme settings → Brand assets: upload locked wordmark / A mark / red dash / favicon when available.
- Theme settings → Theme mode: dark (default).

## 7. Language setup (Settings → Languages)
- Add Arabic; publish.
- Translate merchant content (product titles/descriptions, collection descriptions, page content, policies) via Translate & Adapt. Theme UI strings come from locales/ar.json automatically.
- Product names + SKUs stay Latin (system rule).

## 8. Dark/Light QA (Theme Editor)
Switch Theme settings → Theme mode and verify: hairlines visible, cards readable, badges/errors red-functional only, no white generic cards, logos not recolored.

## 9. Arabic QA
Switch storefront locale to AR and verify: RTL layout mirrors, drawer opens inline-end, no Arabic letter-spacing, SKUs/prices stay Latin and unshuffled, headings use Arabic stacks, all four page templates readable.
