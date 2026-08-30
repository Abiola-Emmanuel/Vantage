# Cyber Reference Hub

Lovable Prompt — Homepage

Copy everything below into Lovable.

Prompt

Build a homepage for "Vantage" — a personal cybersecurity reference platform documenting tools and techniques across four domains: OSINT, Malware Analysis, Digital Forensics, and Social Engineering. It also includes a guide for setting up a virtual lab environment.

Overall style: Clean, modern SaaS-analytics aesthetic. Light theme, generous whitespace, soft rounded corners (16–24px radius), subtle drop shadows on cards, minimal borders. Should feel like a polished developer-docs product (think Linear, Stripe Docs, Mintlify) crossed with an analytics dashboard landing page — NOT a hacker/terminal aesthetic. Professional and approachable, not edgy.

Color palette:

Background: white / off-white (#FFFFFF, #FAFAFA)

Primary accent: mint/teal gradient (#4ADEC8 → #2BB6A3 range), used for icons, highlights, mockup UI elements, chart bars

Secondary soft accent panels: very light mint tint background (#E8FBF6 or similar) for section wrappers

Text: near-black (#1A1D1F) for headings, medium gray (#6F7679) for body copy

CTA buttons: solid black (#111111) with white text, pill-shaped, for primary actions

Secondary buttons: white with thin border, pill-shaped

Typography: Clean sans-serif (Inter or similar). Large, confident headings (44–56px on desktop hero), medium weight — not overly bold. Small uppercase tracked-out eyebrow labels above section headings (e.g. "PERSONAL LAB · REFERENCE").

Background texture: Subtle large soft circular blur shapes in mint, low opacity, behind hero and CTA sections — decorative, not distracting.

Section 1 — Nav

Logo + wordmark on left. Center or right nav links: Home, Domains, Lab Setup, About. Pill-shaped "Get Started" or "Explore" button on far right, black background white text.

Section 2 — Hero

Small pill eyebrow tag: "PERSONAL SECURITY LAB"

Large heading: "Your reference for offensive & defensive security"

Subheading (1–2 lines, gray): explain it's a growing, hands-on documented library of tools across OSINT, malware analysis, digital forensics, and social engineering — built from real lab work.

Two CTAs: black pill "Explore Domains", white outline pill "Lab Setup Guide"

Below the text: a mockup panel (rounded card, soft shadow) showing a stylized "tool reference" UI — sidebar with 4 domain icons, main area showing a mock tool card (tool name, a few command-line style lines, a "Quick Reference" tag). Use mint accent colors for icons/tags within this mockup, matching the reference dashboard mockup style.

Section 3 — Stats strip (thin, understated)

Three stats side by side, centered, minimal styling (not the heavy card style from the reference — keep this one lightweight):

"4 Domains"

"40+ Tools Documented"

"Hands-on Lab Verified"

Section 4 — Domain cards (this replaces the "How finance analytics grows you" section)

Eyebrow: "EXPLORE"

Heading: "Four domains, one connected workflow"

Subheading: brief line about how these domains connect in a real engagement/investigation

4 large rounded cards in a 2x2 or 1x4 grid, each with:

A small circular icon badge (mint background, white icon) — magnifying glass for OSINT, bug/skull for Malware Analysis, fingerprint/hard-drive for Digital Forensics, mask/person for Social Engineering

Domain name as heading

1-sentence description

Small mockup graphic on the card (matching the reference's card-embedded UI screenshots — e.g. for Malware Analysis, show a mini mockup of a hex dump or process list; for Forensics, a mini file-tree or disk image icon)

"Learn More" white pill button

Section 5 — Lab Setup callout (replaces "Powerful analytics products" band)

Full-width soft mint background panel, rounded corners:

Eyebrow: "GET STARTED"

Heading: "Set up your lab before you start"

Subheading: brief note on why isolation/legality matters

3 sub-items in a row (icon + label + short line), similar to the "Product teams / Finance teams / Data teams" layout:

"Hypervisor Setup" (VirtualBox / VMware)

"Lab OS Images" (Kali, REMnux, SIFT, Metasploitable2)

"Common Gotchas" (networking, disk space, migration issues)

"View Full Guide" black pill button

Section 6 — Tools coverage strip

Horizontal scrolling/wrapping strip of small pill badges with tool names — Autopsy, Ghidra, Wireshark, theHarvester, Shodan, FTK Imager, Volatility, SET, Gophish, etc. Light gray pill background, small text. Eyebrow above: "TOOLS COVERED"

Section 7 — FAQ

Eyebrow: "FAQ" Heading: "Frequently asked questions" Accordion list (closed by default, expand on click):

"What is this site for?"

"Is this focused on offensive or defensive security?"

"Are these tools safe to run outside a lab environment?"

"How often is new content added?"

Section 8 — Final CTA band

Full-width soft mint rounded panel, centered content:

Eyebrow: "VANTAGE"

Heading: "Start exploring the domains"

Short subheading

Black pill "Get Started" button

Section 9 — Footer

Logo + short tagline on left. Three columns: "Domains" (links to each of the 4), "Resources" (Lab Setup, About), "Connect" (GitHub, portfolio link). Bottom bar: copyright + small social icons.

Responsive behavior: Should collapse gracefully to a single-column mobile layout matching the reference's mobile screenshots — stacked cards, full-width buttons, nav collapses to a hamburger menu.

Do NOT include: pricing tables, testimonials/reviews section, fake company logos, or sign-up/login flows — this is a personal reference tool for now, not a SaaS product yet.

Creative freedom

Feel free to add small tasteful touches that improve the feel of the UI, as long as they stay within the reference aesthetic — don't go overboard or introduce a different visual language. Specifically welcome:

Subtle micro-interactions: button press/tap scale-down (e.g. active:scale-95), smooth hover states on cards (slight lift + shadow increase), icon badges that gently scale or pulse on hover

Smooth scroll-triggered entrance animations for sections (fade + slide-up, staggered for grids like the domain cards)

Small delightful details: cursor-following or subtle parallax on the hero background blobs, a subtle gradient shimmer on the mockup panel, animated number count-up for the stats strip

Micro-transitions on the FAQ accordion (smooth height expand, chevron rotation)

Keep all of this understated — the goal is "polished and alive," not flashy. When in doubt, favor subtlety over spectacle, and never let an animation get in the way of readability or usability.

Technical requirements

Framework: Next.js (App Router)

Language: JavaScript with JSX — do NOT use TypeScript/.tsx files

Styling: Tailwind CSS utility classes only — no CSS-in-JS, no styled-components

Animation: Framer Motion for scroll-triggered fade/slide-ins on section entry, subtle hover states on cards and buttons, and a soft entrance animation on the hero mockup panel

Component structure: Break the page into separate reusable components (e.g. Navbar.jsx, Hero.jsx, DomainCard.jsx, LabSetupCallout.jsx, ToolsStrip.jsx, FAQAccordion.jsx, CTASection.jsx, Footer.jsx) rather than one long page file

Icons: Use lucide-react for all icons (magnifying glass, bug, fingerprint, mask, etc.)

Do not scaffold a database, auth, or backend routes yet — this is frontend-only for now; Supabase and Express will be wired in separately

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3c36fac5-64c3-46d8-b189-03b8b14a497e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
