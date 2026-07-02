# AKYRO MONOLITH OS — M01-A Foundation Audit

**Input:** Claude M01-A ZIP  
**Files received:**  
- `layout/theme.liquid`
- `assets/tokens.css`
- `assets/base.css`
- `assets/layout.css`
- `assets/components.css`
- `assets/direction.css`

**Verdict:** Working foundation, but **not approved for live preview alone** until a small patch is applied.

---

## 01 — Pass Items

| Area | Result |
|---|---|
| Correct M01-A file count | Pass |
| `direction.css` included | Pass |
| CSS logical properties | Pass |
| No left/right properties outside `direction.css` | Pass |
| Arabic `dir="rtl"` logic | Pass |
| English `dir="ltr"` logic | Pass |
| Arabic no letter-spacing token | Pass |
| Bidi class for Latin technical data | Pass |
| Global CSS order | Pass |
| Signal red mostly controlled | Pass |

---

## 02 — Issues to Patch Before Live Preview

### Issue 01 — `theme.liquid` references missing section groups

Current `theme.liquid` calls:

```liquid
{% sections 'header-group' %}
{% sections 'footer-group' %}
```

But M01-A did not include:

```text
sections/header-group.json
sections/footer-group.json
```

This can break a clean custom theme, or accidentally render old Dawn header/footer if the repo was initialized from Dawn.

**Fix:** either:
- add minimal empty section groups in M01-A, or
- move these calls to M01-B.

Recommended for clean live workflow:
**Add minimal group files in M01-A or immediately run M01-B before preview.**

---

### Issue 02 — Missing locale keys

`theme.liquid` uses translation keys:

```liquid
{{ 'accessibility.skip_to_content' | t }}
{{ 'general.pagination.page' | t: page: current_page }}
```

But locale files are currently M01-E, not included in this ZIP.

**Fix:** either:
- move minimal Tier 1 locale keys earlier, or
- run M01-E before live preview.

Recommended:
**Run M01-E earlier than homepage sections, or add minimal locale skeleton now.**

---

### Issue 03 — Font assets are referenced but not provided

The code preloads and defines:

```text
akyro-display.woff2
akyro-body.woff2
akyro-display-ar.woff2
akyro-body-ar.woff2
```

But these font files were not included.

**Fix:** do not invent fonts. Add placeholder TODO comments and avoid production sign-off until licensed fonts exist. For browser preview, either provide real files or temporarily use system fallback without preloading missing assets.

---

### Issue 04 — Raw overlay color outside tokens

`components.css` uses:

```css
background: rgba(10, 10, 10, 0.6);
```

This violates the “token-only color” rule.

**Fix:** add a token in `tokens.css`:

```css
--overlay: rgba(10, 10, 10, 0.6);
```

Then use:

```css
background: var(--overlay);
```

---

## 03 — Compact Patch Prompt for Claude

```text
Use Architecture v0.3 from Project Knowledge. Do not restate it.

Patch current M01-A Foundation only.
Return unified diff patches only.
Do not output full files.

Fix:
1. Make M01-A safe for clean live preview:
   - Either add minimal sections/header-group.json and sections/footer-group.json,
   - or remove/defer {% sections 'header-group' %} and {% sections 'footer-group' %} until M01-B.
   Choose the cleaner Shopify OS 2.0 option and explain in one line.

2. Prevent missing locale-key issues:
   - Either move minimal locale skeleton into M01-A,
   - or clearly mark M01-E as required before preview.
   Prefer adding minimal locale skeleton if this keeps the theme renderable.

3. Do not preload missing font assets unless files exist.
   Keep clear TODO comments for licensed EN/AR woff2 files.
   Do not invent or import external fonts.

4. Move overlay color into tokens.css:
   - Add --overlay token.
   - Replace raw rgba in components.css with var(--overlay).

End with compact QA only.
```

---

## 04 — Progress Update

| Phase | Status | Notes |
|---|---|---|
| M01-A Foundation | Code received / Needs patch | Good base, requires preview-safety patch |
| M01-B Global shell | Not started | Next after M01-A patch |
| M01-C Drawer skeleton | Not started |  |
| M01-D Homepage core | Not started |  |
| M01-E Config & locales | Should move earlier / partial | Needed for preview safety |
| M01-F Utility & docs | Not started |  |

---

## 05 — Recommended Next Step

Do not paste M01-A into a live preview yet unless the project already has clean section groups and locale files.

Next:
1. Send the compact patch prompt to Claude.
2. Apply the returned diffs.
3. Then run M01-B or M01-E-minimal before judging the preview visually.
