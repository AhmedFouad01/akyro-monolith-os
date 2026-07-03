# AKYRO MONOLITH OS — Metafields Contract

Namespace:

`akyro`

## Planned Product Metafields

- `akyro.spec`
- `akyro.pom`
- `akyro.validation`
- `akyro.batch`
- `akyro.fit_notes`
- `akyro.launch`

## Rule

If approved data is missing, the proof block hides or renders a controlled empty state.
Never invent measurements, batch codes, GSM, approvals, or validation results.

## M02-E product-file fields (plain text, admin-defined)

Expected product metafields:
- `akyro.fit`
- `akyro.fabric`
- `akyro.construction`
- `akyro.care`
- `akyro.batch`
- `akyro.validation`

Use single-line or multi-line text as appropriate.

Behavior:
- If approved data exists, the Product File renders it.
- If data is absent, the block hides or shows the editable "pending approved input" state based on Theme Editor settings.
- The theme must never invent product proof data.
