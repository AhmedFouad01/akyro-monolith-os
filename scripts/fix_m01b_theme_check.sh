#!/usr/bin/env bash
set -e

echo "AKYRO M01-B theme-check fix"
echo "Current path: $(pwd)"
echo

if [ ! -d ".git" ]; then
  echo "ERROR: Run this script from the root of your AKYRO repo, e.g. /f/AKYRO"
  exit 1
fi

CURRENT_BRANCH="$(git branch --show-current)"
if [ "$CURRENT_BRANCH" != "dev/m01-foundation" ]; then
  echo "Switching to dev/m01-foundation..."
  git checkout dev/m01-foundation
fi

echo "Removing orphaned section-frame snippet for now. It will return when first used."
rm -f snippets/section-frame.liquid

echo
echo "Running Shopify Theme Check..."
shopify theme check

echo
echo "Staging M01-B fix files..."
git add -A   locales/en.default.json   locales/ar.json   snippets/logo-wordmark.liquid   snippets/section-frame.liquid   sections/header-group.json   sections/footer-group.json   sections/monolith-header.liquid   sections/monolith-footer.liquid   assets/section-monolith-header.css   assets/section-monolith-footer.css   assets/header.js   snippets/locale-switcher.liquid   snippets/icon.liquid

echo
if git diff --cached --quiet; then
  echo "No staged changes to commit."
else
  git commit -m "M01-B global shell: fix locales and logo dimensions"
fi

echo
echo "Pushing to GitHub..."
git push origin dev/m01-foundation

echo
echo "Done. M01-B fix is checked, committed, and pushed."
