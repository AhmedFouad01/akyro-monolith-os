# AKYRO M01-A Ready Package — Install Notes

This package contains the organized M01-A Foundation files from Claude's patched output.

## Copy into your Shopify theme root

Theme root means the folder that contains: `layout/`, `assets/`, `sections/`, `locales/`, `templates/`, `config/`.

Copy these folders from this package into the theme root:

- `layout/`
- `assets/`
- `sections/`
- `locales/`
- `docs/` optional but recommended
- `AKYRO_MONOLITH_PROGRESS_TRACKER.md` optional but recommended

## Run checks

```bash
shopify theme check
shopify theme dev --store your-store.myshopify.com
```

## Commit after check passes

```bash
git add .
git commit -m "M01-A foundation: theme shell and RTL CSS base"
```
