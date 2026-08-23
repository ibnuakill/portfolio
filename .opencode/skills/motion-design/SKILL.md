---
name: motion-design
description: Use this skill whenever building or editing UI that involves animation, transitions, or interactive motion — page transitions, scroll reveals, hover states, spring animations, staggered lists, or micro-interactions. Trigger for any Astro/React/Vue component using the Motion library (or Framer Motion), CSS transitions/keyframes, or scroll-triggered effects. Also trigger when reviewing existing motion for performance or accessibility issues. Do NOT use for static layout/typography work with no animation — use frontend-design for that.
---

# Motion Design

Motion should clarify state changes and guide attention — never decorate for its own sake. Every animation must answer: "what is this telling the user just changed?"

## Core principles

1. **Motion has a job.** Before adding an animation, name what it communicates (e.g. "this card is now selected", "this list item was just added"). If you can't name it, cut it.
2. **Duration and easing by distance/purpose**, not fixed defaults:
   - Micro-interactions (hover, tap, toggle): 100–200ms, ease-out
   - Element entrances (cards, modals, reveals): 200–400ms, ease-out or spring
   - Page transitions: 300–500ms, ease-in-out
   - Never exceed ~500ms for anything the user waits on repeatedly
3. **Springs over fixed curves for anything physical** (drag, drawer, cards) — use spring configs with moderate stiffness/damping so it settles naturally, not bouncy/cartoonish unless that's the explicit brand tone.
4. **Stagger deliberately.** List/grid item reveals: 30–80ms delay between items, capped total stagger (~400ms max) so long lists don't feel sluggish. Never stagger more than ~8–10 visible items — batch or cut it beyond that.
5. **One motion language per project.** Pick a consistent easing/duration scale (e.g. tokens: `--ease-out`, `--duration-fast/base/slow`) and reuse everywhere. Inconsistent easing across components is a top "feels AI-generated" tell.

## Scroll-triggered reveals

- Trigger slightly before element is fully in viewport (rootMargin ~ -10% to -15%), not exactly at edge.
- Animate opacity + a small transform (8–24px translate), never large translates (>40px) or scale-from-zero — these feel gimmicky.
- Reveal once, don't re-trigger on scroll-up unless explicitly building a playful/experimental site.

## Hover & micro-interactions

- Hover feedback should be near-instant (100–150ms) — anything slower feels laggy, not smooth.
- Prefer transform/opacity changes (scale 1.02–1.05, subtle translateY, shadow/brightness shift) over layout-affecting properties.
- Buttons/links need a pressed/active state, not just hover — mobile has no hover.

## Performance rules (non-negotiable)

- Animate only `transform` and `opacity`. Never animate `width`, `height`, `top/left`, `margin`, or `box-shadow` directly on every frame — causes layout thrashing/jank.
- Use `will-change` sparingly, only on elements actively animating, and remove it after.
- Debounce/throttle scroll-linked animations; prefer IntersectionObserver over scroll event listeners for reveals.
- Test on mid-range mobile, not just desktop dev machine — motion that's smooth at 120Hz desktop can jank at 60Hz mobile.

## Accessibility (always required, not optional)

- Wrap all non-essential motion in `prefers-reduced-motion` checks. Reduced-motion users should get: instant state changes (no transition) or a much shorter/subtler fade, never full parity animation.
- Never rely on motion alone to convey information (e.g. a shake to indicate error) — pair with color/text/icon.
- Autoplaying motion (carousels, background video/animation) must be pausable and never flash more than 3x/second.

## Workflow with Playwright MCP (if available)

1. Implement the animation.
2. Run dev server, use Playwright to load the page.
3. Take before/after screenshots or short interaction traces at the animation's key frames (start, mid, end).
4. Check: does it read as intentional at a glance? Any layout shift? Any jank signs (compare frame timing if tooling allows)?
5. Iterate based on what's actually observed, not assumed.

## Anti-patterns to avoid

- Animating everything on every scroll (fatigue, feels amateurish)
- Bounce/elastic easing used as a default for non-playful brands
- Parallax that causes readability issues or motion sickness
- Loading spinners where a skeleton screen would communicate progress better
- Animation durations that scale with content length inconsistently (a 10-item stagger taking 3 seconds)
