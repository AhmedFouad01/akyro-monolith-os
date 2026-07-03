# AKYRO — METAFIELDS_SETUP (M03-A)
Admin → Settings → Custom data → Products → Add definition.
Namespace and key exactly as below (theme reads `product.metafields.akyro.<key>`).

| Definition name | Namespace.key | Type | Notes |
|---|---|---|---|
| Fit | akyro.fit | Multi-line text | Approved fit notes only |
| Fabric | akyro.fabric | Multi-line text | Composition/GSM only when approved; otherwise leave blank |
| Construction | akyro.construction | Multi-line text | Seam/build notes |
| Care | akyro.care | Multi-line text | Wash/care instructions |
| Batch | akyro.batch | Single-line text | Latin batch code; use "DEMO-BATCH" only if explicitly demo |
| Validation | akyro.validation | Multi-line text | Recorded test results only — never estimates |

Blank behavior (already built into the Product File section):
- Spec row blocks: hidden by default when blank; per-block toggle can show the pending state instead.
- Batch/Validation block: blank → "Product file pending approved input." (editable in section settings).
- Nothing is ever invented; leaving fields empty is always safe.

Demo fill for the three demo products: leave all six blank (pending states render), or set values prefixed "Demo — replace before launch." Never enter unapproved measurements or test claims.
