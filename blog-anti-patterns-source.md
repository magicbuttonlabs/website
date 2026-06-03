# Anti-Patterns — Pillar Source Doc

> **What this is:** the provenance + working source for the **Anti-Patterns** segment of MBL's content engine (`topic-content-engine.md` in the canon). Holds the corpus-mined raw material (with AI Quarterback `inputId`s), the synthesis, the lane decision, and the atomized channel drafts. The "never invent copy" audit trail — every public claim traces to a real call here.
>
> **Lane:** Pattern (de-identified) unless an entry says otherwise. **No client names or reverse-identifiable specifics leave this doc.** Names appearing in source quotes (Mindy, Morgan, Beth, etc.) are scrubbed in anything public.
>
> **Home note:** lives in the site instance for now because the first entry feeds the blog. Per the engine standard, cross-channel pillar source docs ultimately travel with the engine to its permanent home (see canon `parking-lot.md`).

---

## Entry 1 — "The portfolio rollup that doesn't scale"

**Status:** Published 2026-06-02 · **Lane:** Pattern · **Blog post:** `blog-monday-portfolio-rollup-doesnt-scale.html`

### The anti-pattern
monday.com's Work Management **portfolio-and-project solution**: every project board rolls up into a single high-level "portfolio" board via a connected-boards column. It's the default most Monday reps and consultants reach for, it demos beautifully, and it's an upsell to Work Management Enterprise. It breaks at scale.

### Provenance (corpus)
| inputId | Speaker | What it supports |
|---|---|---|
| `zq0iOseBuSXmzSyKnqd2` | Ethan | "We do not use that very intentionally because it does not actually scale… most of the Monday reps and a lot of the consultants out there, that is their go-to." Lock down a board → "it breaks the entire high-level board." Make a board shareable/private → others lose access to all the high-level rollups. |
| `JOkxIzCOXc9NKg5RHGaT` | Ethan | "It doesn't scale. It is a bad solution… it's easy to sell it." Rollup is "a connected boards column that connects to everything"; change any board to private and "it breaks the view for the entire system"; support takes "weeks to fix." Delete a project board → deletes the portfolio row (not the reverse) → clutter. Dual-license trap ("why are we paying for both?"). Fix: "we just rebuilt all the functionality that portfolio does in CRM… with native functionality." Frequency: "we're hearing it more and more," "multiple companies," "hearing other reps." |
| `Q46uQzfTjbAWYjp6myFo` | Ethan (internal) | Rebuilt the portfolio board as a clean CRM board; "way too many bugs"; permissions model "borked"; delete-asymmetry; "you can't run at scale with that." Archive workaround. *(Internal call — informs, not quoted publicly.)* |
| `FAC2eXpYFLmoxKV2FBd6` | Ethan | The fix in action: each high-level item connected to master-data boards (organization, referrer, opportunities); dashboards **group by master data** (open deliveries by industry, by lead, by owner) without scanning the task boards. |
| `BJb8mM0wmbNkplRWbLCA` | Ethan | "Executives… don't want an aggregated summary of all the weeds. They want to think about the high-level boards strategically. They don't need it all rolling up." Root cause: rollup recalculates on the front end by querying source boards. **⚠️ This call also discusses an unreleased Monday product — DO NOT publish that detail.** |
| `yV81zmJ6xzNFnJXHtNtc` | Ethan | Proper permissions on a native high-level board: open to internal, or private, or shareable to specific guests scoped to one board, with column-level restriction. |
| `Uou75QWoGuQMvyRLeYbP` | Ethan | Sub-items disabled in the portfolio solution ("you can't build any cool architecture around it"); MBL uses it internally only, to understand it. |

### Synthesis (the argument)
Default portfolio rollup → demos well, breaks at scale via **(1)** permissions (one private board breaks the whole view), **(2)** front-end recalculation, **(3)** delete-asymmetry clutter, plus the **dual-license trap**. Deeper point: leaders don't want all the weeds rolled up; they want strategic high-level boards. Fix: rebuild natively in CRM — connected boards + mirror columns + dashboards grouped by master data; permissions handled at the board level.

### Frequency framing
Truthful/qualitative only ("call after call," "company after company," "we've lived it; we hear other partners report the same"). **Do not invent a precise count** — an exact tally needs the extraction agent (engine §6).

---

## Atomized channel drafts (produce once)

### LinkedIn (the hook — top of the waterfall)
> Most monday.com consultants set up your portfolio the same way. We refuse to.
>
> It's the Work Management "portfolio & project" solution — every project board rolls up into one high-level board. It demos beautifully. Executives love it.
>
> Then someone makes a single board private… and the entire high-level view breaks for everyone. We've seen support take weeks to untangle it.
>
> We've watched company after company hit this exact wall. So we don't build it that way. We rebuild the same reporting with native boards + master-data dashboards — scales to the limits of any Monday board. (And you usually don't need the second Enterprise license you bought for it.)
>
> Full breakdown — 3 ways it breaks, and what we build instead 👇 [BLOG LINK]

### Email (to the list)
**Subject:** The monday.com portfolio setup we refuse to build
**Body:**
> If you've been set up with monday.com's "portfolio & project" solution — where every board rolls up into one high-level board — there's something you should know before you scale on it.
>
> It demos beautifully. It's also the most common way we see a monday.com setup quietly break: lock down one board and the whole high-level view can break for everyone; the rollup recalculates in your browser and slows down as you grow; and deleted projects leave clutter you can't cleanly remove.
>
> We rebuild the same executive reporting a different way — native boards and dashboards that group by your master data — and it scales without the second Enterprise license most teams are paying for.
>
> We wrote up exactly how it breaks and what we build instead: [BLOG LINK]

### Blog (canonical home)
`blog-monday-portfolio-rollup-doesnt-scale.html` — the full version everything links back to.

---

---

## Entry 2 — "Y'all made a mess of monday"

**Status:** Draft / intro seeded · **Lane:** Pattern · **Blog post:** `blog-monday-instance-mess.html` *(slug TBD)*

### The anti-pattern
A monday.com instance that grew organically — boards pile up, notifications get ignored, columns multiply without anyone fully agreeing on what they mean. The team either stops using the system or uses it in ways that weren't intended. Almost universal; almost never talked about honestly.

### Provenance
Pattern lane — de-identified. Source: field observation across multiple engagements. *(AI-QB corpus extraction pending; use frequency framing standard below.)*

### Frequency framing
Qualitative/truthful: "almost everyone does this," "we've seen it across every type of team." Do not invent a precise count.

### Seeded intro draft (approved tone — do not rewrite without cause)

> Let's be honest — y'all made a mess of monday. 😆
>
> Don't worry, so did we the first time. Now everyone oohs and ahhs when they see our instance.
>
> We learn by doing. I renovated my bathroom, and by the end I knew exactly what not to do. Unfortunately, that baseboard in the corner still doesn't look quite right.

**Tone notes:** Direct address + self-deprecating admission collapses expert/client distance immediately. The bathroom/baseboard detail is specific and human — preserve it. Short sentences with rhythm. The arc is: roast → shared redemption → honest humility. This is the voice the whole post should sustain.

### Synthesis (to develop)
*TBD — needs corpus extraction. Core argument: organic growth is predictable, not shameful; renovation is a defined process, not a rebuild from scratch. The anti-pattern is letting the mess persist, not making the mess.*

### Atomized channel drafts
*TBD — draft the blog post first; waterfall to LinkedIn + email from there.*

---

## Changelog
- **2026-06-02 — Entry 2 seeded (monday instance mess).** Intro draft approved in conversation; captured with tone notes. Post not yet written; corpus extraction pending.
- **2026-06-02 — Created; Entry 1 (portfolio rollup) drafted and shipped across blog + LinkedIn + email.** First run through the content engine; launch piece for the Anti-Patterns segment.
