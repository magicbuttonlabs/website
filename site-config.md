# Site Config — Magic Button Labs

> Living config for magicbuttonlabs.com. Read this before any session on this site.
> Drives Claude's understanding of every standing decision without reading every HTML file.
> Unresolved items are parked below and in parking-lot.md.
>
> Schema: WEB-STANDARDS/topic-site-instance-config.md

---

## 1. Identity

site-name: Magic Button Labs
site-id: magicbuttonlabs/website
live-url: https://magicbuttonlabs.com
deploy-source: root
deploy-branch: main
client-name: Magic Button Labs (MBL owns this site)

---

## 2. Brand

### 2a. Color tokens

All tokens are MBL defaults — no overrides. This is the reference implementation of the MBL palette.

| Token | Value |
|---|---|
| `--ink` | `#3A3335` (Black Coffee) |
| `--ink-muted` | `#595153` |
| `--ink-subtle` | `#948C8E` |
| `--accent` | `#39B0E2` (Blue Jeans) |
| `--accent-deep` | `#286BB0` (Celtic Blue) |
| `--bg` | `#F5F5F5` |
| `--band` | `#EEF7FD` |
| `--band-deeper` | `#D9EFF9` |
| `--paper` | `#FFFFFF` |
| `--hairline` | `rgba(58,51,53,0.08)` |
| `--rule` | `#B5ACAE` |

### 2b. Typography

font-display: Plus Jakarta Sans
font-body: DM Sans
font-delivery: Google Fonts CDN
font-delivery-pdf: base64 @font-face (woff2 Latin subsets via npm @fontsource — confirmed working May 2026)

### 2c. Logo

logo-form: parked (css-mark currently active as placeholder — see parking-lot.md)
logo-file: mbl_horizontal-logo_color_RGB.svg (confirmed clean: text outlined as vector paths, no external refs, three fills: #3A3335 / #39B0E2 / #286BB0)
logo-dark-treatment: fill-swap
logo-dark-swap-from: #3A3335
logo-dark-swap-to: #FFFFFF
favicon: —

> **Note:** The real SVG is confirmed safe to inline (text outlined, no external refs). The fill-swap pattern produces the dark-background treatment in one step — no second Figma export needed. Swapping in the real logo across all pages is parked pending Ethan's call on css-mark vs. svg-inline.

---

## 3. Pages

### 3a. Page inventory

| Page | Status | File | Nav label | Notes |
|---|---|---|---|---|
| Home | live | index.html | (logo) | |
| About | live | about.html | About | |
| Blog | live | blog.html | Blog | One real post + placeholders. |
| Contact | live | contact.html | Contact | monday.com form embed. |
| Testimonials wall | live | testimonials.html | — | Footer-only — not in top nav (see parking-lot: nav slot resolved). |
| Customer Journey Solution | live | customer-journey.html | Customer Journey | Full offering page. |
| Foundation Build | live | foundation-build.html | Foundation Build | Full offering page. |
| Builders Blueprint Series Training | live | workshop.html | Builders Blueprint | File kept as workshop.html to avoid link rot. |
| AI Training Workshop | live | ai-workshop.html | (via Solutions) | Fourth offering, added 2026-05-30. |
| Solutions | live | solutions.html | Solutions | Offerings index; nav collapsed the four offering tabs into this single tab (2026-06). |
| Our Approach | live | approach.html | Our Approach | Non-offering methodology page (five-phase delivery framework). Added 2026-06-10. Page + 2-pager, no primer. |
| CJ Primer | live | customer-journey-overview.html | — | Not in nav. Emailable artifact only. |
| Foundation Build Primer | live | foundation-build-overview.html | — | Not in nav. Emailable artifact only. |
| Workshop Primer | live | workshop-overview.html | — | Not in nav. Emailable artifact only. |

> **Primer rule:** Primers are emailable artifacts, not site nav destinations. They live at a URL only for link resolution. Not in top nav or footer. See the Offering Primer Standard in `project-context.md`.

### 3b. Nav order

nav-order:
  - Home (logo)
  - Foundation Build → foundation-build.html
  - Customer Journey → customer-journey.html
  - Builders Blueprint → workshop.html
  - AI Workshop → ai-workshop.html
  - About → about.html
  - Blog → blog.html
  - Contact → contact.html

> The nav groups the four offerings inline (no dropdown currently). When a fifth offering is added, revisit whether a Solutions dropdown earns its keep. See parking-lot.md.

### 3c. Footer columns

footer-columns:
  col-1: Brand (logo mark + tagline)
  col-2: Solutions (Foundation Build, Customer Journey, Builders Blueprint, AI Workshop)
  col-3: Company (About, Blog, Testimonials)
  col-4: Contact (contact link)

> Canonical nav + footer markup is the authoritative source: WEB-STANDARDS/topic-shared-chrome-contract.md. When any page or offering is added/renamed/removed, sweep all 11 pages (8 main + 3 primers) per the contract.

---

## 4. Offerings

### 4a. Lifecycle spine

lifecycle-stages:
  - label: Enable
    description: Learn the platform — training that builds real capability.
  - label: Deploy & Build
    description: Build the system — architecture and implementation that fits how you actually work.
  - label: Support & Maintain
    description: Whatever else you need — ongoing development, migrations, integrations, managed services.

> The lifecycle spine drives the homepage offerings grid groupings. Each stage has a subhead in the grid.

### 4b. Offering registry

offerings:

  - name: monday.com Training
    lifecycle-stage: Enable
    status: live
    full-page: workshop.html
    full-page-status: live
    primer: workshop-overview.html
    primer-status: live (design-mode — see §6 scaffolding)
    content-md: — (not yet created — owes a content .md per Page Content Standard)
    content-md-status: not-built
    2pager-html: — (owes a 2-pager per Offering Primer Standard)
    2pager-pdf: —
    2pager-status: not-built
    nav-label: Builders Blueprint
    card-href: workshop.html
    notes: File is workshop.html; page title is "Builders Blueprint Series Training." The nav label "Builders Blueprint" is the deliberate compromise while a full rename sweep is pending (see parking-lot.md: Workshop training rename). Card is in the Enable group on the homepage, full-width.

  - name: Foundation Build
    lifecycle-stage: Deploy & Build
    status: live
    full-page: foundation-build.html
    full-page-status: live
    primer: foundation-build-overview.html
    primer-status: live (design-mode — see §6 scaffolding)
    content-md: — (owes a content .md — the web/2-pager wording divergence catch that motivated the Page Content Standard; not yet written as a formal .md)
    content-md-status: not-built
    2pager-html: foundation-build-2pager.html (in Claude Project, not Trove)
    2pager-pdf: downloads/foundation-build-2pager.pdf (generated at deploy time)
    2pager-status: live
    nav-label: Foundation Build
    card-href: foundation-build.html
    notes: First offering to get the full trio. PDF generated by GitHub Action at deploy time.

  - name: Customer Journey Solution
    lifecycle-stage: Deploy & Build
    status: live
    full-page: customer-journey.html
    full-page-status: live
    primer: customer-journey-overview.html
    primer-status: live (design-mode — see §6 scaffolding)
    content-md: cj-website-content.md
    content-md-status: complete (three-block skeleton: shared copy + render deltas + section map)
    2pager-html: cj-intro-onepager.html (in Claude Project, not Trove)
    2pager-pdf: downloads/cj-intro-onepager.pdf (generated at deploy time)
    2pager-status: live
    nav-label: Customer Journey
    card-href: customer-journey.html
    notes: First offering built. cj-website-content.md is the canonical copy source for all three artifacts. Section vocabulary governed by topic-alignment-website-to-2pager.md in WEB-STANDARDS.

  - name: Custom Work & Managed Services
    lifecycle-stage: Support & Maintain
    status: live (card live; dedicated page not yet built)
    full-page: contact.html (temporary — card currently links to contact)
    full-page-status: not-built (links to contact.html as placeholder)
    primer: —
    primer-status: not-built
    content-md: —
    content-md-status: not-built
    2pager-html: —
    2pager-pdf: —
    2pager-status: not-built
    nav-label: — (not in nav yet; no dedicated page)
    card-href: contact.html
    notes: PROVISIONAL title — Ethan to confirm (alternatives: "Ongoing Support & Development", "Everything Else"). Full-width card in Support & Maintain group on homepage. No dedicated page yet; the offering category is established but the content is thin. Build dedicated page when offering is fleshed out. See parking-lot.md: "Homepage offerings — lifecycle alignment loose ends."

  - name: AI Training Workshop
    lifecycle-stage: Enable
    status: live
    full-page: ai-workshop.html
    full-page-status: live
    primer: — (owes a primer per Offering Primer Standard — see parking-lot.md)
    primer-status: not-built
    content-md: — (owes a content .md)
    content-md-status: not-built
    2pager-html: —
    2pager-pdf: —
    2pager-status: not-built
    nav-label: AI Workshop
    card-href: ai-workshop.html
    notes: Added 2026-05-30. The full trio (content.md + primer + 2-pager) is owed but not yet built. Tracked in parking-lot.md.

---

## 5. Components

testimonials-system: active
contact-form: monday-embed
blog: active
video-testimonials: not-active (Phase 2 — deferred)

### 5a. Testimonial containers

testimonial-containers:
  index.html: featured-proof
  about.html: featured-quote
  customer-journey.html: list (LIST_VISIBLE=4)
  testimonials.html: wall

> To add a testimonial: append to testimonials.json in this Trove (quote + name + company + optional featured + optional tags). Set featured: true to surface on homepage and About. No HTML edits needed. The featured picker takes the first featured: true entry — consider rotation if multiple featured entries accumulate.

### 5b. Contact form config

contact-form:
  type: monday-embed
  embed-url: https://forms.monday.com/forms/embed/47514fb487e3e5a2101520306dfc699e
  notes: Same form as the legacy Wix site. No custom backend needed unless this form is retired.

---

## 6. Mode

current-mode: Design

design-mode-scaffolding:
  - item: "Share this overview" links on the three full offering pages (customer-journey.html, foundation-build.html, workshop.html) pointing at their respective primers.
    why-present: Makes primers one tap away while the funnel is being evaluated.
    remove-on: Published-mode transition (these links are backwards for a live site — full page does not link to the primer once published).
    parking-lot-entry: See project-context.md → Website Modes for rationale.

---

## 7. Open / Parked

open:

  - field: "2c. logo-form"
    status: parked — awaiting Ethan's call
    parking-lot-entry: "Logo treatment" in parking-lot.md
    note: Real SVG is confirmed clean and ready to inline. Decision is css-mark vs. svg-inline, not a technical blocker.

  - field: "4b. Custom Work & Managed Services — name"
    status: parked — awaiting Ethan's confirmation
    parking-lot-entry: "Homepage offerings — lifecycle alignment loose ends" in parking-lot.md
    note: Working title provisional. Alternatives floated: "Ongoing Support & Development", "Everything Else".

  - field: "4b. monday.com Training (Workshop) — content-md, primer, 2-pager"
    status: not-built — active direction per offering trio standard
    parking-lot-entry: "Workshop training rename" + offerings trio items in parking-lot.md

  - field: "4b. AI Training Workshop — content-md, primer, 2-pager"
    status: not-built — active direction per offering trio standard
    parking-lot-entry: "AI Training Workshop offering added" in project-context.md changelog

  - field: "4b. Customer Journey Solution — foundation-build content-md"
    status: not-built — the .md exists for CJ but Foundation Build's content.md has not been written
    note: Foundation Build was the offering that surfaced the need for the Page Content Standard (web vs 2-pager wording divergence on "what we don't do"). The standard was added; the .md itself is still owed.

  - field: "3b. Nav — Offerings dropdown"
    status: parked — revisit when fifth offering is added
    parking-lot-entry: "Offerings pages — dedicated 'learn more' page per tile" in parking-lot.md

  - field: "3a. Workshop training rename — entry-point labels"
    status: parked — low urgency
    parking-lot-entry: "Workshop training rename" in parking-lot.md
    note: Page title is "Builders Blueprint Series Training" but nav/footer/CTA band labels still say "Workshop" / "Builders Blueprint". Not broken, just loose. A consistency sweep will touch nav + footer across all 11 pages.
