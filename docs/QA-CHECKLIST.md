# AKYRO MONOLITH OS — QA Checklist

## Required Matrix

Check all visible surfaces in:

- English LTR desktop
- English LTR mobile
- Arabic RTL desktop
- Arabic RTL mobile

## M01 Checks

- Theme Check passes.
- No hardcoded storefront text where translation keys are required.
- Header renders.
- Footer renders.
- Cart drawer opens with JavaScript.
- `/cart` fallback works.
- 404 renders.
- Gift card template renders without Liquid errors.
- Drawer opens from inline-end.
- ESC closes drawer.
- Overlay closes drawer.
- Focus returns to cart trigger.
- No Arabic letter-spacing.
- Latin technical data uses bidi-safe styling.
- Red is functional only.
- No logo overload.
- No fake product data.
- No generic Shopify section feel.

## Visual Checks

- Grid alignment.
- Hairline consistency.
- Negative space.
- Mobile tap targets.
- Footer access not duplicated on homepage.

## M02-B additions (verify in all 4 locale/direction states × dark + light)
- Theme mode switch: no raw hex leaks, hairlines visible in both modes
- Collection grid + empty state; product file: buy flow, pending-data state, guarded proof rows
- Search results + empty; contact form success/error
- Blocks grid spans at 750px+; mobile stacks full-width
- Arabic: no letter-spacing, raised leading, Latin SKU/GSM bidi-isolated

## M02-C additions

- Upload locked wordmark, iconic A, red dash, and favicon in Theme settings.
- Verify header wordmark binding in dark and light mode.
- Verify drawer/404 iconic A binding without logo overload.
- Verify red dash binding and UI red accent distinction.
- Verify no logo mirroring in Arabic RTL.
- Verify no CSS filters or stretching on uploaded marks.

## M02-D additions

Check in English LTR, Arabic RTL, dark mode, and light mode:

- Featured collection picker works.
- Featured products product blocks work.
- Editable block grid renders all block types.
- Block sizes remain grid-disciplined.
- Overlay is off by default and readable when enabled.
- Collection page columns and ratios work.
- Product cards do not quick-add by default.
- Homepage, cart drawer, and logo bindings remain unaffected.
- Theme Check passes with no offenses.
