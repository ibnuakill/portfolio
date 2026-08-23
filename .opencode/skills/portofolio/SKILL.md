---
name: portfolio
description: Use this skill when building or editing a personal/developer portfolio site — especially project showcase sections, case study pages, about/hero sections, or project cards. Trigger for any Astro/MDX content describing a project (problem, solution, tech stack, architecture, challenges, results). Also trigger when the user asks to add a new project to their portfolio, restructure existing project write-ups, or keep a consistent voice/format across multiple case studies. Do NOT use for unrelated marketing sites or e-commerce pages.
---

# Portfolio

A developer portfolio's job is to make a stranger (recruiter, client, collaborator) understand what you can do in under 60 seconds per project, and want to read more. Consistency and clarity beat cleverness.

## Case study structure (use for every project write-up)

Keep this structure identical across all projects so the reader builds pattern recognition and can compare projects. Don't reinvent the section order per project.

1. **Problem** — 1–3 sentences. What real situation/pain existed? Be concrete (who, what context) not abstract ("users needed better UX").
2. **Solution** — What was built, in plain language, before any tech jargon. What does it actually do for the user?
3. **Architecture** — How it's built. A diagram (if available via MCP/Mermaid) helps more than prose here. Name the actual data flow, not just a stack list.
4. **Tech Stack** — Short list, grouped (frontend / backend / infra / AI), not a wall of badges with no context. Only list what materially matters to the story.
5. **Challenges** — The 1–2 hardest real problems and how they were actually solved. This is the section that differentiates a builder from a tutorial-follower — be specific about trade-offs made, not just "it was hard but I solved it."
6. **Result** — Concrete outcome: metrics if real ones exist (users, performance numbers, adoption), otherwise honest scope statement ("shipped as MVP, in use by X users" / "built as thesis prototype"). Never fabricate metrics.

## Voice and content rules

- Write in first person, active voice: "I built X to solve Y" not "X was built to solve Y."
- Avoid generic AI-sounding phrases: "leveraging cutting-edge technology," "seamless user experience," "revolutionize." State what it does instead.
- Every project entry should be skimmable: a reader scanning only bold/headers should get the gist. Don't bury the actual function of the project inside a challenges paragraph.
- Be honest about project maturity — prototype vs shipped vs abandoned. This builds more trust than inflating scope.
- Keep tech-stack jargon accessible to a non-technical reader in the Problem/Solution sections; save deep technical detail for Architecture/Challenges.

## Project card (listing/grid view)

Each card, before the user clicks into a case study, needs:

- Project name
- One-line description (what it does, not what tech it uses)
- 2–4 tech tags max (visual clutter beyond that hurts scannability)
- Primary visual (screenshot/mockup) — never a stock image or generic icon
- Link to live demo/repo if available, clearly distinguished from the case-study link

## Consistency checklist (apply across the whole site, not per-page)

- Same heading hierarchy and section order across every case study
- Same tone (don't swap between casual and formal project to project)
- Same tag/badge visual style
- Same date/status format if used (e.g. "2025 · Shipped", "2026 · In progress")
- Don't let each new project subtly drift in layout just because it was written in a separate session — check existing projects before adding a new one and match their format exactly

## When adding a new project

1. Ask (or infer from context) what the actual problem/motivation was — don't skip straight to tech stack.
2. Draft using the 6-section structure above.
3. Compare against at least one existing project entry for tone/format consistency before finalizing.
4. Keep total read time per case study reasonable — a portfolio's job is to prompt a conversation, not replace one.
