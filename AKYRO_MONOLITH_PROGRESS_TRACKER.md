# AKYRO MONOLITH OS — Progress Tracker

**Project:** AKYRO Studio Shopify Theme  
**Architecture Source:** v0.3 RTL Patch + File Tree v1.2  
**Current Status:** M01-A Foundation patched and organized. Ready to place into Shopify theme folder and run local checks.

---

## Milestone 01 — Build Phases

| Phase | Status | Notes |
|---|---|---|
| M01-A Foundation | Ready for local check | Patched with section groups + locale skeleton + overlay token |
| M01-B Global shell | Not started | Header/footer/liquid snippets next |
| M01-C Drawer skeleton | Not started | Drawer, cart skeleton, no AJAX yet |
| M01-D Homepage core | Not started | Tier 1 homepage sections |
| M01-E Config & locales | Partial skeleton only | Full settings + bilingual strings later |
| M01-F Utility & docs | Not started | 404/giftcard/docs skeletons |

---

## M01-A Files Prepared

- `layout/theme.liquid`
- `assets/tokens.css`
- `assets/base.css`
- `assets/layout.css`
- `assets/components.css`
- `assets/direction.css`
- `sections/header-group.json`
- `sections/footer-group.json`
- `locales/en.default.json`
- `locales/ar.json`

---

## Missing Inputs Before Production Sign-off

| Input | Status |
|---|---|
| Locked wordmark SVG | Missing |
| Locked iconic A SVG | Missing |
| Locked red dash SVG | Missing |
| Licensed EN woff2 font files | Missing |
| Licensed AR woff2 font files | Missing |
| Approved Tier 1 Arabic strings | Pending |
| Product metafield sign-off | Pending |

---

## Local Check Commands

```bash
shopify theme check
shopify theme dev --store your-store.myshopify.com
```

---

## Git Checkpoint

After files are placed and `shopify theme check` passes:

```bash
git add .
git commit -m "M01-A foundation: theme shell and RTL CSS base"
```

---

## Next Claude Step After Local Check

```text
Use Architecture v0.3 from Project Knowledge. Do not restate it.

Implement M01-B Global shell only.
Return full code for listed new files only.
For existing files, return unified diff patches only.
End with compact QA.
```
