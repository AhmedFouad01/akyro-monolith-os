# AKYRO M01-B Theme Check Fix

## Fixes

- Adds missing English translation keys.
- Adds matching Arabic translation keys.
- Adds width/height to `snippets/logo-wordmark.liquid`.
- Removes `snippets/section-frame.liquid` for now because it is orphaned and causes Theme Check warning. It can return later when first used.

## Apply

Extract the CONTENTS of this zip into:

`F:\AKYRO`

Then run:

```bash
cd /f/AKYRO
bash scripts/fix_m01b_theme_check.sh
```

The script runs Theme Check, commits, and pushes to GitHub.
