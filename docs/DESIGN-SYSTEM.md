# AKYRO MONOLITH OS — Design System (M02-B)

Token-only styling. No raw hex outside `assets/tokens.css`. Logical properties only; physical exceptions live paired in `assets/direction.css`.

## Theme modes
- `settings.theme_mode` → body `theme-mode-dark` (default) / `theme-mode-light`.
- Light = off-white/concrete overrides in tokens.css (`.theme-mode-light`). Red functional-only in both. Hairlines adapt via `--line`.

## Typography
`.eyebrow` `.label` `.text-data` `.data-latin` (bidi-safe Latin) · `h1-h3` + `.h1/.h2/.h3` aliases · Arabic via `:lang(ar)`: raised leading, zero tracking, Alexandria/Cairo stacks. TODO: self-host licensed woff2.

## Buttons
`.btn` + `--primary` `--secondary` `--quiet` `--text` `--full` (`--block` legacy alias) · `--critical` = only red button. Disabled + focus-visible built in.

## Forms
`.field` `.field__label` `.field__input` `.field__error` `.field__success`. Access form pattern shared by footer signup / access-list section.

## Blocks
`.block` + size: `--full --wide --half --third --square` · type: `--text --media --proof` · parts: `.block__media .block__body .block__num` (red functional number).

## Grids
`.grid-system` (6-col desktop, spans per size) · `.grid-system--2/--3` · legacy `.grid --2/--3/--4/--split/--proof`. No masonry.

## Frames
`.frame` `.frame--full` `.section` `--flush --strip` `.line-block` — spacing from `--unit` scale only.

## Locked brand assets (M02-C)

Bindings:
- `logo_wordmark`
- `logo_wordmark_width`
- `logo_a_mark`
- `logo_red_dash`
- `favicon`

Rules:
- Use locked production exports only.
- No redraws, recolors, CSS filters, stretching, or mirroring.
- Uploaded logos remain ratio-safe with `object-fit: contain`.
- The iconic A remains a single controlled signature moment.
- CSS red micro-lines are UI accents, not replacement logo assets.

## Section shell + CMS grid (M02-D)

Shared controls:
- width: normal / wide / full
- spacing: compact / default / spacious
- background: default / surface / raised / inverse
- alignment: start / center / end

Reusable systems:
- Featured collection
- Featured products
- Editable block grid
- Collection product grid
- Product card controls

Block sizes:
- square
- half
- third
- wide
- 3x2
- full

Theme Editor is the content control layer. Code should not be edited for day-to-day content changes.
