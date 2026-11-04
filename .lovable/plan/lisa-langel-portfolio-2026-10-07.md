# Lisa Langel portfolio

## Goal

Build an executive-quality portfolio that positions Lisa as a Technical Program Manager focused on AI platform strategy, structured execution, and collaborative leadership. The experience will prioritize reusable AI workflows and TPM operating frameworks over a traditional résumé format.

## Pages and experience

- Create dedicated, responsive pages for Home, About, Prompt Library, Skills Library, Playbooks, Case Studies, Blog, and Contact.
- Add a shared polished navigation system with a compact mobile menu and clear active-page states.
- Make Prompt Library and Skills Library primary navigation destinations and prominent homepage features.
- Build the homepage around Lisa’s positioning, selected frameworks, featured prompts, case-study highlights, and a direct path to contact.
- Add text search and category filters to the Prompt Library and Skills Library, with useful empty states and accessible controls.
- Structure Playbooks, Case Studies, and Blog for future expansion, with reusable content cards and detail-ready data models.
- Use a contact form without publishing an email address. Include a LinkedIn destination once Lisa provides the URL.
- Incorporate Lisa’s professional photo once supplied; until then, use a restrained initials-based identity rather than a synthetic portrait.

## Visual direction

- Use a precise, high-contrast editorial interface inspired by Stripe’s clarity, Linear’s restraint, and Vercel’s typography—without copying any one brand.
- Favor crisp grids, subtle borders, compact cards, strong information hierarchy, and a restrained accent palette.
- Use modern display and body typography, generous whitespace, and controlled density for executive readability.
- Add smooth page-entry, filter, and card interactions with reduced-motion support; avoid decorative animation that competes with the content.
- Ensure polished layouts across desktop, tablet, and mobile, including long titles, filter wrapping, and touch-friendly navigation.
- Colors i like are a warm mustard yellow and organic feeling

## Content approach

- Use only the positioning statement supplied so far, completed with “through collaborative leadership.”
- Do not invent employers, outcomes, metrics, testimonials, contact details, or project claims.
- Prepare clearly structured content slots for the biography, prompts, skills, playbooks, case studies, blog posts, LinkedIn URL, and professional photo Lisa will provide.
- If implementation begins before all material arrives, label unpublished collections honestly and keep the design complete without fake portfolio claims.

## Technical details

- Implement each major section as its own TanStack route with unique titles, descriptions, Open Graph metadata, and share-ready structure.
- Define the visual system through semantic Tailwind tokens and reusable interface components.
- Keep library filtering client-side against typed content collections, making future replacement with managed content straightforward.
- Add meaningful automated checks for routing and filtering, then run the linter and verify the finished pages in the browser at desktop and mobile widths.
- Record the route/content architecture decision in the project guidance file during implementation.

## Acceptance criteria

- All eight destinations are navigable and visually consistent.
- Prompt and skill search/filter controls work and provide clear result counts and empty states.
- The homepage visibly prioritizes AI workflows, operating frameworks, and representative work.
- No fabricated professional details appear.
- Every page has distinct metadata, works at common screen sizes, and passes the project’s build and lint checks.