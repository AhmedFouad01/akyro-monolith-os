# AKYRO ACTIVE SOURCE INDEX
## For Claude Project Knowledge — AKYRO Studio / MONOLITH OS
**Status:** Active source control file  
**Use:** Upload this file to Claude Project Knowledge and keep it pinned as the source-priority map.  
**Rule:** Use Project Knowledge search. Retrieve relevant sections before answering. Do not restate the architecture unless asked.

---

## 01 — Active Project

Project name:

**AKYRO Studio — MONOLITH OS**

Goal:

Build a premium Shopify Online Store 2.0 custom theme for AKYRO Studio with:
- product-led storytelling
- premium industrial luxury visual system
- Shopify OS 2.0 Liquid architecture
- English LTR + Arabic RTL support from day one
- clean theme editor flexibility
- no generic Shopify/page-builder feeling

---

## 02 — Source Priority Order

Use sources in this order.

### Priority 01 — Active Architecture Patch

**File:** `AKYRO_MONOLITH_OS_Architecture_v0.3_RTL_Patch.md`

Role:
- This is the active architecture patch.
- It adds bilingual / RTL architecture rules.
- It overrides v0.2 wherever direction, locale, Arabic, typography, motion, or file tree implications are involved.

Must follow:
- “Bilingual by architecture, not afterthought.”
- English LTR and Arabic RTL from day one.
- `html dir="rtl"` for Arabic, `dir="ltr"` otherwise.
- CSS logical properties by default.
- No Arabic letter-spacing.
- Arabic copy must be premium, controlled, product-led.
- Locale switcher required.
- RTL QA matrix required.
- `assets/direction.css`, `snippets/locale-switcher.liquid`, `locales/ar.json`, `locales/ar.schema.json` are Milestone 01 requirements.

Do not use v0.2 alone after v0.3.

---

### Priority 02 — Base Theme Architecture

**File:** `AKYRO_MONOLITH_OS_Theme_Architecture_v0.2.md`

Role:
- Base Shopify architecture.
- Use it for sections, templates, snippets, metafield strategy, MVP milestones, cart logic, admin setup, visual tokens, and implementation risks.
- v0.3 says all non-overridden v0.2 sections remain active.

Must follow:
- Milestone 01 MVP only:
  - `monolith-header`
  - `monolith-footer`
  - `hero-monolith`
  - `drop-status`
  - `product-proof`
  - `collection-index`
  - `access-list`
  - `cart-drawer` skeleton
- No invented data.
- Product proof blocks render only from approved metafields.
- No free-form zones inside verified proof blocks.
- Signal red is functional only.
- One logo moment per composition.
- Radius = 0, hairline borders, grid discipline.

---

### Priority 03 — Visual Identity / Brand Guidelines

**File:** `AKYRO_Brand_Guidelines_v0.4.pdf`

Role:
- Main visual source of truth.
- Controls logo behavior, palette, image rules, grid, product file language, launch logic, and low-logo discipline.

Must follow:
- Locked AKYRO wordmark, iconic A, and red dash.
- Do not redraw, stretch, recolor, or reinterpret the logo.
- No logo overload.
- Black / charcoal / warm grey / off-white / signal red.
- Industrial luxury, concrete calm, matte cotton, rib, black metal, rigid board.
- Grid before content.
- No screenshot filler.
- No random red squares.
- No generic fashion UI.

---

### Priority 04 — IP / Originality Protocol

**File:** `AKYRO_IP_Originality_Source_Prompt_v1.pdf`

Role:
- Protects AKYRO from generic, copied, or reusable streetwear outputs.
- Apply before any design, code, copy, product concept, launch asset, or image prompt.

Must follow:
- AKYRO is a private proprietary product-led design house and brand system.
- Every output must pass the AKYRO Originality Gate.
- Use AKYRO sources first.
- External references are analysis only: adapt the logic, never copy the look.
- Do not invent measurements, sample approvals, QC claims, batch data, or slogans.
- “BUILT TO LAST” is restricted inside AKYRO and must not be recycled casually.

Originality Gate:
1. Built from AKYRO approved sources?
2. Non-generic enough?
3. Product-proof value present?
4. Avoids trend-copy / AI moodboard feeling?
5. Logo discipline?
6. Manufacturing logic?
7. Copy risk low?

---

### Priority 05 — Locked Brand Assets

Files:
- `Final Logo shapes.png`
- Any uploaded AKYRO wordmark SVG
- Any uploaded AKYRO iconic A SVG
- Any uploaded AKYRO red dash SVG
- favicon if provided

Rules:
- Use exact uploaded logo assets.
- Never recreate the logo in CSS, SVG, or text.
- Never mirror the logo in RTL.
- If SVG assets are missing, flag as missing input before production code.

---

### Priority 06 — Visual References

Files:
- `Visual identity dark.png`
- `Visual identity light.png`
- approved product / packaging / garment images

Use:
- Visual calibration only.
- Do not copy a generated mockup blindly.
- Extract direction: spacing, contrast, grid, mood, image framing, restraint.

---

### Priority 07 — Product / Manufacturing References

Files:
- `Garment sheets prompts.pdf`
- `AKYRO_Supplier_Comparison_Sheet_v1.pdf`

Use:
- Use only when working on Product File, Process page, Manufacturing Bridge, technical proof blocks, or product-data structure.
- Do not use supplier details in homepage UI unless specifically building the Process / Manufacturing page.
- Supplier sheet is not a general UI source.

---

## 03 — Efficiency Mode

Use this mode in every Claude response.

Rules:
- Use Project Knowledge as source of truth.
- Retrieve relevant sections before answering.
- Do not restate architecture unless asked.
- Work in small milestones.
- No long explanations.
- No brainstorming unless blocked.
- No code unless explicitly requested.
- When coding, output exact files only.
- For existing files, output unified diff only unless full file is requested.
- End every output with compact QA:
  - AKYRO fit:
  - Shopify logic:
  - RTL:
  - Missing inputs:

Always include this line in important prompts:

`Use Architecture v0.3 from Project Knowledge. Retrieve relevant sections before answering. Do not restate it.`

---

## 04 — Current Build Order

### Current state

Architecture v0.3 is approved.  
Next required artifact:

**File Tree v1.1 based on Architecture v0.3.**

### Next Claude prompt

```text
Show the full File Tree v1.1 artifact created from Architecture v0.3.

Do not summarize.
Do not add explanations.
Do not write code.
Return the full file tree only.
```

### If auditing output

```text
Audit this output against Architecture v0.3.

Return only:
1. Missing files
2. Wrong milestone labels
3. RTL gaps
4. Shopify OS 2.0 issues
5. Fix list

No rewritten document.
No code.
```

### If patching an artifact

```text
Patch the current artifact only.

Apply these fixes:
[PASTE FIXES]

Return:
- Changed sections only
- No full rewrite
- No code
```

---

## 05 — First Code Milestones

Do not start code until File Tree v1.1 is approved.

### M01-A — Foundation

```text
Implement M01-A Foundation only.

Files:
- layout/theme.liquid
- assets/tokens.css
- assets/base.css
- assets/direction.css

Use Architecture v0.3.
Must support EN LTR and AR RTL from day one.
Use logical CSS properties.
No section code yet.
No long explanation.

Output full code for these files only.
End with compact QA.
```

### M01-B — Config + Locales

```text
Implement M01-B Config and Locales only.

Files:
- config/settings_schema.json
- locales/en.default.json
- locales/ar.json
- locales/en.default.schema.json
- locales/ar.schema.json

Use Architecture v0.3.
No hardcoded storefront strings.
Include Tier 1 keys only.
Arabic must be premium, controlled, product-led.
No long explanation.

Output full code for these files only.
End with compact QA.
```

### M01-C — Global Shell

```text
Implement M01-C Global shell only.

Files:
- sections/monolith-header.liquid
- sections/monolith-footer.liquid
- snippets/logo-wordmark.liquid
- snippets/locale-switcher.liquid
- snippets/icon.liquid

Use Architecture v0.3.
Header/footer must support LTR and RTL.
Use translation keys.
Use logical CSS.
No cart drawer yet.
No long explanation.

Output full code for these files only.
End with compact QA.
```

---

## 06 — Debug / Patch Commands

### Modify existing files only

```text
Modify existing files only.

Return unified diff patches only.
Do not output full files.

Issue:
[DESCRIBE ISSUE]

Files affected:
[LIST FILES]

Keep Architecture v0.3 rules.
```

### Debug issue

```text
Debug this Shopify theme issue.

Error / screenshot notes:
[PASTE ERROR]

Relevant files:
[PASTE ONLY RELEVANT FILES OR DIFF]

Return:
1. Cause
2. Exact fix
3. Unified diff only
4. QA checklist

No full file rewrite unless necessary.
```

### Screenshot audit

```text
Audit this screenshot against AKYRO MONOLITH OS v0.3.

Check only:
- Brand fit
- Grid / spacing
- RTL or LTR alignment
- Header / footer
- Hover or motion issue if visible
- Generic Shopify feeling

Return:
- Pass
- Issues
- Exact fixes by file

No code unless requested.
```

### RTL audit

```text
Run RTL audit for the current implementation.

Check:
- dir/html logic
- logical CSS usage
- no unpaired left/right
- Arabic fonts
- no Arabic letter-spacing
- drawer opens from inline-end
- arrows flip
- product technical codes use bidi isolation
- locale keys exist

Return only:
1. Pass items
2. Fail items
3. Required fixes
4. Files to patch

No code.
```

### Resume after limit

```text
Resume from the last artifact/output.

Do not restart.
Do not summarize previous work.
Continue the next smallest step only.

Current next step:
[WRITE STEP]

Output only what is required for this step.
```

---

## 07 — Model Usage

Use Fable 5 High only for:
- core code generation
- hard debug
- RTL coding
- complex Shopify Liquid

Use lighter models for:
- docs
- QA
- copy
- File Tree
- locale text edits
- small diffs

---

## 08 — Non-Negotiable Build Rules

- Do not build full theme at once.
- Do not use page builders.
- Do not use animation apps.
- Do not use generic ecommerce sections.
- Do not hardcode storefront strings.
- Do not use `left/right` unless paired in `direction.css`.
- Do not letter-space Arabic.
- Do not mirror technical garment assets.
- Do not invent product specs.
- Do not invent sample tests.
- Do not overuse red.
- Do not use logo as decoration.
- Do not make AKYRO look like a Shopify template.

---

## 09 — Final Output QA Format

Every substantial output ends with:

```text
QA
AKYRO fit:
Shopify logic:
RTL:
Missing inputs:
```

No long audit unless requested.
