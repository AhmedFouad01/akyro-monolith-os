# AKYRO — DEMO_CONTENT_MAP (M03-A)
Where every piece of storefront text lives and where to edit it.
Legend: [TE]=Theme Editor · [P]=Shopify Product · [C]=Collection · [PG]=Page/Template JSON via TE · [MF]=Metafield · [L]=Locale file (code, AKYRO-approved only)

## Homepage
- Hero eyebrow/heading/body/CTA — [TE] Hero section settings. EN entered in TE; AR via Translate & Adapt (section content is merchant content).
- Drop status strip — product pick [TE]; status/SKU/price auto from [P]. "No active batch selected" state shows when nothing picked.
- Product proof labels/lines — [TE] Product Proof section. Keep "Demo … replace before launch" until approved.
- Collection index labels — [TE] blocks (FASHION/OBJECTS/SCENT stay Latin intentionally).
- Access heading/body — [TE]; button/success strings [L].

## Collection pages
- Title — [C] or override [TE main-collection]. Description — [C] or intro override [TE]. Hero image — [C] image or custom [TE]. Empty state heading/body/button — [TE]. Count/sort/pagination labels — [L].

## Product File
- Title/price/images/variants/SKU — [P]. Vendor — [P].
- Spec rows Fit/Fabric/Construction/Care — [MF] akyro.fit/fabric/construction/care; labels [L] or per-block override [TE].
- Batch/Validation — [MF] akyro.batch/akyro.validation; blank → pending text ([TE] override or [L] default "Product file pending approved input.").
- Description block — [P] description.
- Shipping line — [TE]. Add-to-cart/sold-out — [L].

## Search / Cart / 404 / Gift card
- All UI strings — [L]. Search empty state override — [TE].

## Pages (System/Process/Access/Contact/Archive)
- All hero + block copy — [PG] section settings in each template, editable per-page in TE. Demo copy already uses only safe phrases.
- Contact form labels/success — [L]; intro/email line — [TE].

## Arabic notes
- [L] strings ship in locales/ar.json (functional set; AKYRO approval pending where new).
- [TE]/[P]/[C]/[PG]/[MF] content is translated in Translate & Adapt per resource.
- Technical values (SKU, GSM-when-approved, batch) remain Latin in both locales.
