# AKYRO Theme Development Process Step-by-Step

Date: 2026-07-05
Project: AKYRO MONOLITH OS
Scope: Shopify theme development workflow

## Purpose

This document defines the operating process for AKYRO Shopify theme development. It is the working protocol for Claude, ChatGPT, GitHub, Shopify, and any future contributor touching the theme.

The goal is simple: professional workflow, traceable changes, clean source of truth, and no uncontrolled edits.

## Working Map

Claude worktree:

```text
/f/AKYRO/.claude/worktrees/elegant-perlman-824b69
```

GitHub repository:

```text
https://github.com/AhmedFouad01/akyro-monolith-os
```

Active integration branch:

```text
dev/m01-foundation
```

Shopify store:

```text
https://akyro-studio.myshopify.com/
```

Current rule:

```text
main = stable / release only
dev/m01-foundation = active test and integration branch
claude/* = task branches
```

## Source Of Truth

The source of truth is the GitHub repository, with `dev/m01-foundation` as the active integration branch.

Shopify is the preview/live store target, not the canonical source for code.

Claude edits the worktree. ChatGPT reviews, documents, checks structure, prepares source updates, and can coordinate Shopify/GitHub actions when apps are available.

Lovable may be used only for prototypes or visual experiments. It is not the source of the Shopify theme.

## Branch Rules

Use task branches for all edits:

```text
claude/<milestone>-<short-task>
```

Examples:

```text
claude/m04-e1-rtl-drawer-fix
claude/m04-e2-header-polish
claude/m05-product-page-system
```

Never work directly on `main`.

Do not push to `main` unless the user explicitly approves a stable release.

Merge or fast-forward into `dev/m01-foundation` only after checks pass.

## Pre-Work Checklist

Before any edit, run:

```bash
cd /f/AKYRO/.claude/worktrees/elegant-perlman-824b69
git status --short
git branch -vv
```

Confirm:

```text
1. Current branch is the intended claude/* task branch.
2. No unexpected deleted files.
3. No unrelated user/Claude work will be overwritten.
4. The task is tied to a milestone or named patch.
```

## Edit Rules

Keep every patch narrow.

Do not rewrite the theme architecture unless explicitly requested.

Do not redesign the AKYRO wordmark, iconic mark, red dash, or locked brand assets.

Use the current AKYRO language reset:

```text
Preferred direction:
FORM, HELD.
Cut by structure. Proven by wear.
Every cut has a job.
```

Avoid generic or overused phrases as primary brand language:

```text
Built to Last
Designed to Endure
Built for Tomorrow
Timeless
Legacy
Premium
Purpose in Every Piece
Engineered to Endure
```

Use product-evidence language:

```text
form
cut
pattern
hold
weight
proof
construction
fit
sample
code
```

## Development Steps

1. Define the patch.

Name the milestone, feature, or defect before editing.

Example:

```text
M04-E1 RTL drawer fix
M04-E2 header and mobile navigation polish
M05-A product page foundation
```

2. Inspect existing files.

Use the current theme structure first. Do not invent a new pattern if a local pattern already exists.

3. Make the smallest useful change.

Patch only the files needed for the task.

4. Run theme checks.

Use:

```bash
bash scripts/check.sh
```

The patch is not ready unless the check passes.

5. Review git status.

Use:

```bash
git status --short
```

Confirm all changed files are expected.

6. Commit with a clear message.

Commit message format:

```text
<Milestone>: <plain change summary>
```

Examples:

```text
M04-E1: fix RTL cart drawer visibility
Docs: add theme development process
M05-A: add product page foundation sections
```

7. Push the task branch or integration branch.

For active integration:

```bash
git push origin dev/m01-foundation
```

8. Report status.

Every patch report must include:

```text
Branch:
Commit:
Files changed:
Theme check:
Shopify impact:
Next action:
```

## Merge Rules

Before merging a task branch into `dev/m01-foundation`:

```text
1. git status --short is clean or only contains intended files.
2. bash scripts/check.sh passes.
3. No source docs are stale.
4. No accidental locale/template deletion exists.
5. The change has a clear commit.
```

After merge:

```bash
git push origin dev/m01-foundation
```

## Shopify Deployment Rules

Do not publish to the live Shopify theme without explicit user approval.

Allowed without publish approval:

```text
1. Inspect Shopify setup.
2. Prepare theme preview guidance.
3. Review theme readiness.
4. Identify Shopify settings needed for the next patch.
```

Before any Shopify publish:

```text
1. GitHub branch is current.
2. Theme check passes.
3. Source tracker is updated.
4. User approves publish.
```

## Recovery Rules

If `git status --short` shows an unexpected deleted file, stop and inspect it.

Example:

```bash
git diff -- locales/ar.json
```

If the deletion was accidental, restore only that file:

```bash
git restore locales/ar.json
```

Do not use:

```bash
git reset --hard
```

unless the user explicitly approves it.

## Current Locked Status

As of 2026-07-05:

```text
Active integration branch: dev/m01-foundation
Latest pushed integration commit: cdf2a80
Latest merged patch: RTL drawer fix and gift card template restore
Theme check: passed
Theme check result: 9 files inspected with no offenses
main branch status: older M01-A baseline, not active development
```

## Required Next Documentation Placement

This document should be added to the repository as:

```text
docs/AKYRO_Theme_Development_Process_Step_by_Step.md
```

It should also be referenced from:

```text
docs/AKYRO_ACTIVE_SOURCE_INDEX.md
AKYRO_MONOLITH_PROGRESS_TRACKER.md
```

## Operating Rule

No theme patch is complete until code, check result, branch state, and source documentation all agree.
