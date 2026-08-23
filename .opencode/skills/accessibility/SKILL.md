---
name: accessibility
description: Use this skill whenever building or reviewing UI components, pages, forms, or motion/animation for accessibility — color contrast, keyboard navigation, screen reader support, focus states, semantic HTML, and reduced-motion handling. Trigger for any new component creation, any use of custom interactive elements (dropdowns, modals, custom buttons/tabs), and any review pass on existing frontend code. Also trigger alongside motion-design whenever animation is added, since motion accessibility is a subset of this skill.
---

# Accessibility

Visually impressive UI that isn't usable is a failed UI. Treat accessibility as a baseline requirement checked on every component, not a separate pass done "later."

## Semantic HTML first

- Use native elements before reaching for `<div>` + ARIA: `<button>` not `<div onClick>`, `<nav>`, `<main>`, `<header>`, `<footer>`, `<article>` for structure, real `<a href>` for navigation, `<label>` tied to every form input via `for`/`id` or wrapping.
- Heading levels (`h1`–`h6`) must be sequential and describe document structure, not chosen for font-size — style headings with CSS, not by skipping levels.
- Only add ARIA roles/attributes when no native element covers the case (custom dropdown, tab panel, combobox). ARIA is a patch, not a first choice — wrong ARIA is worse than none.

## Color & contrast

- Body text: minimum 4.5:1 contrast ratio against background. Large text (18px+/bold 14px+): minimum 3:1.
- Never convey meaning (error, success, required field) through color alone — pair with icon, text label, or pattern.
- Check contrast in both light and dark mode if the site supports theme switching — don't assume one mode was checked and the other inherits safety.

## Keyboard navigation

- Every interactive element must be reachable and operable via Tab/Shift+Tab/Enter/Space/Arrow keys as appropriate — no mouse-only interactions.
- Visible focus indicator required on all interactive elements — never `outline: none` without a custom replacement that's equally visible (min 3:1 contrast against adjacent colors, at least 2px).
- Logical tab order matching visual reading order. Modals/drawers must trap focus while open and return focus to the trigger element on close.
- Custom components (dropdown, tabs, accordion, carousel) must follow standard keyboard patterns (e.g. Arrow keys within a tab list, Escape to close a modal/dropdown).

## Screen reader support

- All images need meaningful `alt` text describing function/content, or `alt=""` if purely decorative — never omit the attribute entirely.
- Icon-only buttons need an accessible name (`aria-label` or visually-hidden text), not just a visual icon.
- Dynamic content updates (form errors, toasts, loading states) need `aria-live` regions so screen reader users are notified without needing to refocus.
- Form errors must be programmatically associated with their field (`aria-describedby`) and announced, not just shown as colored text nearby.

## Motion accessibility (pairs with motion-design skill)

- Every non-essential animation must respect `prefers-reduced-motion: reduce` — reduce to instant or minimal-fade, never full-parity motion.
- No content should flash more than 3 times per second (seizure risk).
- Autoplaying motion/video must have a visible pause control.

## Forms

- Every input has a visible label (placeholder text is not a label substitute).
- Group related fields with `<fieldset>`/`<legend>` where appropriate (e.g. radio groups).
- Required fields marked both visually and programmatically (`required`/`aria-required`), errors described in text near the field, not color alone.

## Review workflow (with Playwright MCP, if available)

1. Tab through the entire page/component with keyboard only — confirm every interactive element is reachable, in logical order, with visible focus.
2. Check color contrast on text/background pairs, including hover/disabled states.
3. Toggle `prefers-reduced-motion` (via emulation) and confirm animations degrade correctly.
4. Spot-check with a screen reader outline (accessibility tree via devtools/Playwright) — confirm meaningful names exist on all interactive elements.

## Anti-patterns to avoid

- `tabindex` values greater than 0 (breaks natural tab order — use 0 or -1 only)
- Removing focus outlines without a replacement
- Text as images without alt text (or worse, text baked into decorative images that should be real text)
- Modals/menus that don't trap or return focus
- Relying on hover-only reveals for essential content (unreachable on touch/keyboard)
