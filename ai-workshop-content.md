# AI Training Workshop — Page Content

> **What this is:** Source of truth for the AI Training Workshop offering's copy. Built to the Page Content Standard (Shared copy · Render deltas · Section map). Live page is `ai-workshop.html`; web primer is `ai-workshop-overview.html`; print 2-pager is `ai-workshop-2pager.html` (rendered to PDF at deploy time → `downloads/ai-workshop-2pager.pdf`).
>
> **Positioning:** The AI Training Workshop is a **co-equal 4th offering** alongside Foundation Build, Customer Journey, and the Builders Blueprint Series. It is distinct from the Builders Blueprint Series (which teaches core monday.com architecture); the two are cross-sold, not merged. Funnel order across the site: Foundation Build → Customer Journey → Builders Blueprint → AI Workshop.

---

## 1. Shared Copy

### Meta
- **Page title:** monday.com AI Training Workshop | Magic Button Labs
- **Eyebrow / identity:** monday.com AI Training Workshop
- **Description:** monday.com made AI core to the platform. This hands-on workshop teaches your team to actually use all five AI tools — Sidekick, Vibe, Workflows, Agents and Notetaker — so the credits you're now paying for turn into real output.

### Hero
- **Headline:** You're paying for AI now. Let's make it *pay you back.*
- **Subhead:** monday.com made AI core to the platform — Sidekick, Vibe, Workflows, Agents and Notetaker all run on the AI credits you're now buying. This hands-on workshop puts your team inside a live account and teaches them to actually use all five, so those credits turn into real output instead of a line item.
- **Actions:** Book the Workshop (Calendly — `calendly.com/brandon-gauby-mbl/ai-training`) · Ask About a Private Session (contact)
- **Hero stats:** 5 AI tools (Sidekick · Vibe · Workflows · Agents · Notetaker) · 90–120 min (one focused live session on Zoom) · $250/seat (hands-on labs in a pre-built account)

### Why now (the problem)
- **Title:** AI is core to monday.com now. Your credits are ticking either way.
- **Body:** With the 2026 rollout, AI became part of the platform's core. Sidekick, Vibe, Notetaker, Workflows and Agents all draw down AI credits — and those credits don't roll over from month to month. The accounts that win aren't the ones that bought the most credits; they're the ones whose teams actually know how to use the tools. This workshop closes that gap in a single session.
- **Signs:** AI features sit unopened in your boards · credits consumed every month with nothing to point to · Sidekick/Vibe/Agents sound powerful but no one's sure where to start · "Can AI just do this for us?" → "probably, but I'd have to figure out how."

### How it works
- **Title:** Learn it. See it. Build it.
- **Lead:** Every lab follows the same structure — teach the concept, show it live in a real account, then put your team inside a pre-built environment to build it themselves. One live session, 90–120 minutes on Zoom; five short, self-contained labs, each ending with something the team built with their own hands.

### The curriculum — five labs
- **Title:** Five labs. Five AI tools. One working system.
- 01 **Core AI** — how monday's AI works, where it lives, and how credits are spent.
- 02 **AI Blocks** — AI columns that summarize, categorize and generate inside your boards.
- 03 **Sidekick** — in-platform assistant; build, explain and answer in plain language.
- 04 **Vibe** — describe what you want and build working monday apps, no code.
- 05 **AI Agents** — hand off real, multi-step work to agents that act on your boards.
- **Also covered:** AI Notetaker and AI-infused Workflows — meetings and routine processes become monday items and actions automatically.

### The outcome
- **Title:** Your team leaves using the tools you're already paying for.
- **Walk-aways:** AI your team actually uses · Credits that earn their keep · A faster way to work.

### Pricing & format
- **Title:** Live on Zoom. Led by a monday.com expert. Built around your team.
- **Per Seat:** $250 per seat — join an upcoming session; one live 90–120 minute workshop covering all five AI tools; hands-on labs and open Q&A in a pre-built account.
- **Private Team Session:** Custom — private to your team; agenda tailored to your use cases; labs mapped to your own boards; flexible scheduling.
- **Cross-sell:** newer to monday.com itself? → the Builders Blueprint Series covers core architecture (`workshop.html`); ask about pairing the two.

### The Magic Guarantee
- **Title:** We work with you until your team is confident. No exceptions.
- **Body:** Do the labs, ask the questions. If your team doesn't leave confident using monday.com's AI tools, we keep working with you until they are — and you're welcome at the next session at no extra cost.

### Who this is for
- **Title:** Built for teams stepping into the AI Work Platform.
- **Profiles:** The monday.com champion (runs the account) · The leader paying the bill (owns the spend) · The team ready to move faster (does the work).

### CTA
- **Title:** Ready to put your AI credits to work?
- **Sub:** $250 per seat. Private team sessions available. Covered by the Magic Guarantee.
- **Actions:** Book the Workshop (Calendly) · Ask About a Private Session (contact)

---

## 2. Render Deltas

> How the three artifacts intentionally diverge.

### Delta 1 — Booking path
- **Full page:** books via Calendly ("Book the Workshop") with a private-session route through `contact.html`.
- **Primer:** primary CTA → the full page (the one required primer link); secondary "Book the Workshop" → the same Calendly link.
- **2-pager:** carries no raw booking URL — its CTA points at the primer URL (`magicbuttonlabs.com/ai-workshop-overview`), which is what a QR/short link should encode.
- **Open question:** the footer Connect list still surfaces the Builders Blueprint "Workshop Waitlist" monday form. Confirm whether AI bookings should run through Calendly only or also a waitlist form. See `parking-lot.md`.

### Delta 2 — Pricing depth
- **Full page:** two-card pricing grid (Per Seat $250 / Private Custom) with perk lists.
- **Primer:** compressed to one line ("Per seat $250 · Private team sessions available").
- **2-pager:** price appears only in the CTA sub-line.

### Delta 3 — Curriculum
- **Full page:** 5 labs with descriptions + an "Also covered" note (Notetaker & Workflows).
- **Primer:** 5 lab names listed + the "Also covered" line; descriptions dropped.
- **2-pager:** 5 labs with one-line descriptions + an "Also covered" Foundation-band (Notetaker & Workflows).

### Delta 4 — Problem / signs / who-this-is-for
- **Full page:** "Why now" band + 4 pain signs + 3 audience profiles.
- **Primer:** problem condensed to one line; profiles omitted.
- **2-pager:** a 3-point context band (page 2) and a 3-card "Who it's for" (page 2).

### Delta 5 — How-it-works placement *(deliberate framework deviation)*
- The framework default is page-1 pillars + page-2 steps. The workshop-class 2-pagers instead put the **curriculum on page 1** with "How every lab works" (Learn/See/Build) beside it, and use page 2 for context → who-it's-for → outcomes → CTA. The AI 2-pager follows that sibling pattern (matches `workshop-2pager.html`). Page 2's "Who it's for" was added per the default-fill principle (page 2 was otherwise short).

---

## 3. Section Map

| Canonical section | Full page (`ai-workshop.html`) | Web primer (`ai-workshop-overview.html`) | Print 2-pager (`ai-workshop-2pager.html`) |
|---|---|---|---|
| Hero | headline + subhead + actions + stat block | headline + subhead + 3-stat row | p1 hero + 3 stats (5 / 90–120 / $250) |
| Why now / problem | "Why now" band + 4 signs | one condensed problem line | p2 context band (quote + 3 points) |
| How it works | "Learn it. See it. Build it." section | compact 3-step line | p1 "How every lab works" (3 steps) |
| Curriculum | 5 labs w/ descriptions + "also covered" | 5 lab names + "also covered" line | p1 5-lab grid + "Also covered" band |
| Who this is for | 3 audience profiles | omitted | p2 "Who it's for" (3 cards) |
| Outcome | 3 walk-away cards | folded into outcome line | p2 outcomes (3 cards) |
| Pricing & format | two-card grid (seat/private) | one-line price summary | price in CTA sub-line |
| Magic Guarantee | full guarantee band | one-line guarantee mention | referenced in an outcome + CTA sub |
| CTA | Book the Workshop + private | primary → full page; secondary → Calendly | p2 CTA → primer URL |

**Cross-links (per 2-pager framework):** primer primary CTA → full page (the one required link); the full page links to the primer only as **design-mode scaffolding** (remove on Published transition); the homepage offering card points at the **full page**, not the primer.

---

*Established: 2026-05-30, when the AI Training Workshop launched as the co-equal 4th offering and its trio (content · primer · 2-pager) was built. Copy sourced from the live `ai-workshop.html`; nothing invented.*
