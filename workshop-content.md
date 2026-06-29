# Workshop (Builders Blueprint Series Training) — Page Content

> **What this is:** Source of truth for the Workshop offering's copy. Built to the Page Content Standard (Shared copy · Render deltas · Section map). The live page is `workshop.html`; the web primer is `workshop-overview.html`; the print 2-pager is `workshop-2pager.html` (rendered to PDF at deploy time).
>
> **Naming (updated 2026-05-30):** The **"Builder" vs "Builders"** question is **resolved — plural "Builders" (no apostrophe), locked everywhere** including the print 2-pager. Top-nav reads "Builders Blueprint," footer and homepage card read "Builders Blueprint Series," and the full page title remains "Builders Blueprint Series Training." The file is still `workshop.html`; an optional rename to `builders-blueprint.html` is parked as its own chrome sweep. See `parking-lot.md`.

---

## 1. Shared Copy

### Meta
- **Page title:** Builders Blueprint Series Training | Magic Button Labs
- **Eyebrow / identity:** Builders Blueprint Series Training

### Hero
- **Headline:** You didn't build it wrong. You just weren't shown how to build it *right.*
- **Subhead:** The Builders Blueprint Series teaches you how serious teams build monday.com. Not through slides alone — through real concepts, live demonstrations, and hands-on workshop labs where you build inside a pre-configured environment. The same way our architects learned it.
- **Actions:** Join the Waitlist (monday.com form) · Book a Private Session (contact)
- **Hero stats:** 8 sessions (Concept · Live demo · Hands-on lab) · Your pace (most clients spread across 2–4 weeks) · Your account (labs run in a pre-built environment)

### The problem ("Sound familiar?")
- **Title:** Your monday.com works. Kind of. Until it doesn't.
- **Body:** You built something. It made sense at the time. Now it's grown into something fragile — and you're not sure if that's your fault or just how monday.com works. It's not your fault. Nobody showed you the right patterns. This workshop does.
- **Signs:** Boards that made sense six months ago now feel like a messy spreadsheet nobody trusts · Notifications firing constantly (or not at all) so your team ignores them · Handoffs still happen over Slack · "Can you just pull that from monday.com?" → "let me dig around first."

### How it works
- **Title:** Learn it. See it. Build it.
- **Lead:** Every session follows the same structure: teach the concept, show what it looks like in a real system, then put you inside a pre-built lab with real boards and exercises. Delivered live, designed to fit around active implementation; most clients spread the series across 2–4 weeks. Self-contained labs, so order can flex.

### The curriculum — eight sessions
- **Title:** Eight sessions. Each one changes how you build.
- 01 **Boards & Views** — structure boards so work is visible without clutter.
- 02 **Dashboards** — dashboards leadership actually reads.
- 03 **Relational Data** — connect boards so data flows instead of duplicates.
- 04 **Automations** — make work move forward without someone pushing it.
- 05 **Notifications** — alerts people actually respond to.
- 06 **Permissions** — control who sees and does what, without friction.
- 07 **Architecture** — evaluate your system before it becomes a mess.
- 08 **Team Adoption** — launch so your team actually uses it.

### The outcome
- **Title:** You'll know exactly what's happening — without having to ask.
- **Walk-aways:** Architecture that scales · Automations that actually run · Dashboards leaders trust.

### Pricing & format
- **Title:** Live on Zoom. Led by a monday.com Architect. Built around your team.
- **Group Session:** $500 per person — cohort across industries; live on Zoom; hands-on labs; open Q&A with a certified Architect; Magic Guarantee.
- **Private Session:** $2,500 per engagement — private to your team; custom agenda; labs in your own account; Magic Guarantee.
- **Also available:** monday.com AI Training Workshop (separate session).

### The Magic Guarantee
- **Title:** We work with you until you're confident. No exceptions.
- **Body:** Do the labs, ask the questions. If you don't finish feeling confident about how to build monday.com, we work one-on-one until you are — and you can join the next session at no extra cost.

### Who this is for
- **Title:** Built for the person who owns monday.com at their company.
- **Profiles:** The monday.com champion · The leader who bought in · The self-taught builder.

### CTA
- **Title:** Ready to build it right?
- **Sub:** Group sessions from $500. Private from $2,500. Covered by the Magic Guarantee.
- **Actions:** Join the Waitlist · Book a Private Session

---

## 2. Render Deltas

> How the artifacts intentionally diverge across the full page, the web primer, and the print 2-pager (`workshop-2pager.html` — built after this file; see Delta 5).

### Delta 1 — Naming *(resolved: plural "Builders," 2026-05-30)*
- **Decision:** the offering label is **"Builders Blueprint Series"** — plural, no apostrophe — everywhere it appears as a name. The print 2-pager was updated off the earlier singular "Builder's."
- **Entry points:** top-nav "Builders Blueprint," footer + homepage card "Builders Blueprint Series" (chrome swept 2026-05-30). The full page title remains "Builders Blueprint Series Training."
- **Still open:** the *file* rename (`workshop.html` → `builders-blueprint.html`) is deferred as its own chrome sweep — the visible label is settled; the filename is cosmetic. See `parking-lot.md`.

### Delta 2 — Pricing is on the full page, not the primer
- **Full page:** full pricing grid ($500 group / $2,500 private) with perk lists.
- **Primer:** pricing compressed to a single line ("Group from $500 · Private from $2,500"), no perk breakdown.
- **Why:** The primer is the 30-second on-ramp; detailed pricing and perks are depth that belongs on the full page. (Per the 2-pager framework, pricing generally isn't a hook-level element.)

### Delta 3 — Curriculum: all eight on the page, condensed on the primer
- **Full page:** all 8 sessions with descriptions.
- **Primer:** the 8 session names listed, descriptions dropped (or only the 8 titles shown as a scannable list).
- **Why:** Names convey the scope at a glance; descriptions are depth for the full page.

### Delta 4 — Problem/signs and "who this is for" live on the page only
- **Full page:** the "Sound familiar?" problem band, the four pain signs, and the three buyer profiles.
- **Primer:** a single tight problem line, profiles omitted.
- **Why:** The primer states the problem once and moves to the offer; the page does the fuller diagnostic and audience-targeting work.

### Delta 5 — Print 2-pager (built after this file; voice already aligned)
- The print 2-pager **does exist**: `workshop-2pager.html` → `downloads/workshop-2pager.pdf` (in `build-2pager-pdfs.py`). A two-page Letter leave-behind. Page 1 = hero + 3-stat rail + the eight sessions; page 2 = the 3-step method, the problem as a pull-quote ("context band"), three outcomes, and the CTA.
- **StoryBrand voice already matches the full page** (verified 2026-06-28): same hero, same "it's not your fault / nobody showed you the right patterns" problem, same you-framed outcomes. No flip was needed.
- **Micro-diff (left as-is):** the 2-pager hero reads "You weren't shown how to build it right" vs. the page's "You *just* weren't shown" — "just" dropped for line-fit. Immaterial.

---

## 3. Section Map

| Canonical section | Full page (`workshop.html`) | Web primer (`workshop-overview.html`) | Print 2-pager |
|---|---|---|---|
| Hero | hero w/ headline + subhead + actions + stat block | hero w/ headline + subhead + 8-sessions stat | — (none yet) |
| Problem | "Sound familiar?" band + 4 signs | one condensed problem line | — |
| How it works | "Learn it. See it. Build it." | brief 3-step line | — |
| Curriculum | 8 session cards w/ descriptions | 8 session names listed | — |
| Outcome | 3 walk-away cards | folded into outcome line | — |
| Pricing & format | full grid (group/private) | one-line price summary | — |
| Magic Guarantee | full guarantee band | one-line guarantee mention | — |
| Who this is for | 3 buyer profiles | omitted | — |
| CTA | waitlist + private session | primary → full page; secondary → contact/waitlist | — |

**Naming note:** "Builders" (plural, no apostrophe) is locked across all surfaces incl. the 2-pager (2026-05-30). "Workshop" and "Builders Blueprint Series Training" remain the same offering; the only deferred item is the optional `workshop.html` → `builders-blueprint.html` file rename.

---

*Established: 2026-05-30. Built to the Page Content Standard alongside the Workshop web primer. Built during an active naming transition — see Delta 1 and `parking-lot.md`.*
