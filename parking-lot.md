# magicbuttonlabs.com — Site Parking Lot

Site-specific open decisions and deferred items for the live magicbuttonlabs.com instance. Standards-level items live in the Web Standards canon's `parking-lot.md`, not here.

> Created 2026-05-30 — first site-specific parking lot, per the canon's note ("create `magicbuttonlabs/website/parking-lot.md` when the first site-specific item arises"). When something resolves, note it inline or remove it.

---

## Done — logged for continuity

### All three offering primers built + wired live
**Status:** Done 2026-05-30
**What:** Per the Offering Primer Standard (canon), built a web primer for each of the three offering pages, each wired with a "Share this overview" link from its full page, each using the shared design system + "Share with a colleague" + placeholder "Download PDF (soon)":
- `foundation-build-overview.html` ← linked from `foundation-build.html`
- `customer-journey-overview.html` ← linked from `customer-journey.html` (CTA band)
- `workshop-overview.html` ← linked from `workshop.html` (CTA band)
Non-offering pages (Home, About, Blog, Contact) correctly have NO primer, per the standard.
**Workshop content file:** `workshop-content.md` was created to the Page Content Standard first (it had none), then the primer built from it.
**Verified live:** the deploy pipeline (Trove → live site) was confirmed working this session — `foundation-build-overview.html` loads on magicbuttonlabs.com.

### Foundation Build web primer built + wired
**Status:** Done 2026-05-30
**What:** Built `foundation-build-overview.html` — a responsive, mobile-friendly web "primer" version of the Foundation Build 2-pager (the on-ramp in the print-PDF → primer → full-page funnel). Uses shared `styles.css`, MBL design system, a "Share with a colleague" action (copies URL), and a placeholder "Download PDF (soon)" button. Wired `foundation-build.html` to link to it ("Share this overview" in the hero). The primer/page/PDF trio pattern was recorded in the canon's `topic-2pager-framework.md` ("The Three Artifacts").
**Naming locked:** `foundation-build-overview.html` — this URL is what a QR code will encode, so don't rename without regenerating codes.

### CJ content file brought to the Page Content Standard
**Status:** Done 2026-05-30
**What:** `cj-website-content.md` upgraded to the three-block skeleton (Shared copy · Render deltas · Section map) defined by the Page Content Standard in the canon's `project-context.md`. Existing copy was left untouched; the Render Deltas (6) and Section Map blocks were added. Deltas were sourced from the real CJ 2-pager (`cj-intro-onepager.html`) in the Claude Project, not guessed.
**No artifact copy changed:** the website page and the 2-pager were not edited — only the content file gained its structural blocks.

---

## Open

### Workshop naming flux — resolve before sweeping primer + entry points
**Status:** Open (cross-ref `workshop-content.md` Delta 1, and the Workshop rename item elsewhere in this file)
**Context:** The Workshop offering is mid-rename ("Workshop" → "Builders Blueprint Series Training"), with entry-point labels still saying "Workshop" and a "Builder" vs "Builders" question open. The new `workshop-overview.html` primer follows the page title but the sticky bar / funnel still mix "Workshop" and "Builders Blueprint." Built on copy that's actively moving.
**Action needed:** Resolve the rename (incl. singular/plural), then sweep page + primer + nav/footer/homepage entry points together. Until then, the primer is correct-as-of-build but will need a copy pass when the name settles.

### Content files — add primer as a third artifact (CJ + Foundation Build)
**Status:** Open (cross-ref `cj-website-content.md`, `foundation-build-content.md`)
**Context:** Both content files predate their web primers. Their render deltas + section maps still describe a two-artifact world; now there are three (full page + web primer + print PDF). `workshop-content.md` was built fresh and already includes the primer in its section map.
**Action needed:** Update the CJ and Foundation Build content files — add the primer to each section map and record primer-specific deltas. (Foundation Build's is already noted below; CJ needs the same.)

### Foundation Build content file — add primer as a third artifact
**Status:** Open (cross-ref `foundation-build-content.md`)
**Context:** The Foundation Build content file's render deltas and section map predate the web primer (`foundation-build-overview.html`). They currently describe a two-artifact world (website + 2-pager); now there are three (full page + web primer + print PDF), per the canon's "Three Artifacts" pattern.
**Action needed:** Update `foundation-build-content.md` — add the primer to the section map, and record any primer-vs-page-vs-PDF deltas (e.g. the primer's single-CTA-to-full-page treatment, the "sheet" framing). Do this alongside clearing the ⚠️ items below so the file is verified in one pass.

### Foundation Build primer — identity strings still unverified (⚠️)
**Status:** Open (cross-ref `foundation-build-content.md` ⚠️ markers)
**Context:** The primer reuses 2-pager-only strings that were reconstructed, not verified against an actual print 2-pager file: the topbar/identity-strip label ("Partner Resource · Foundation Build"), the hero meta line, and the 3/1/0 stats. The primer now renders these live on the site, but they're still ⚠️ in the content file.
**Action needed:** Once the real Foundation Build print 2-pager is in the Monday Website Project, verify these strings against it and clear the ⚠️ markers in `foundation-build-content.md` — then reconcile the primer if anything differs.

### PDF hosting for "Download PDF" (parked — also a standards question)
**Status:** Parked (cross-ref canon `topic-2pager-framework.md` → Three Artifacts → "Open: PDF hosting")
**Context:** The Trove is text-only, so a binary PDF can't live here. The primer's "Download PDF" is a disabled placeholder until hosting is decided. Options: commit the PDF to the GitHub repo (Pages deploys from the repo), generate on demand, or host externally.
**Action needed:** Pick a hosting approach, then wire the primer's download button. (Standards-level decision — resolve in the canon, apply to every offering's primer.)

### Homepage Foundation Build card — point at primer or full page?
**Status:** Open — deliberate per-offering call
**Context:** The homepage Foundation Build card currently links to the full `foundation-build.html`. Now that the primer exists as the intended on-ramp, the card could point at the primer instead. Repointing it changes the site's primary funnel entry for this offering, so it was left as-is rather than changed unilaterally.
**Action needed:** Decide whether the homepage card routes to the primer (on-ramp) or stays on the full page.

### CJ hero headline divergence (parked — deliberate)
**Status:** Parked (carried from `topic-alignment-website-to-2pager.md` Gap #2)
**Context:** Website hero = "The way every business *wishes* it ran." 2-pager hero = "Your whole business, *finally* in one place." Two headlines for the same product, different register for different reader states. Recorded as Delta 1 in `cj-website-content.md`.
**Action needed:** Decide whether to unify or keep the intentional divergence. Do NOT sync them silently — resolve the parked decision first.

### CJ 2-pager must live in the "Monday Website" Project
**Status:** Open — desktop
**Context:** `cj-website-content.md` references the CJ 2-pager (`cj-intro-onepager.html`) as living "in the Claude Project." It currently sits in the prior chat's project. For the reference to hold from the new "Monday Website" Project, the 2-pager file needs to be in that Project (same trip as the Foundation Build 2-pager).
**Action needed:** Add `cj-intro-onepager.html` (and `foundation-build-2pager.html`) to the Monday Website Project.

### `customer-journey-v2.html` stub — triage
**Status:** Open
**Context:** A 512-byte `customer-journey-v2.html` exists in this Trove alongside the full `customer-journey.html` (63KB, the live page). A tiny stub like this is usually a leftover or a placeholder for a planned rework — exactly the kind of stray file that causes "which one is live?" confusion later.
**Action needed:** Confirm what it is — delete if leftover, or note its purpose if it's a planned v2 staging file.

### Foundation Build content file — 2-pager side unverified
**Status:** Open (cross-ref `foundation-build-content.md`)
**Context:** The Foundation Build content file's 2-pager copy carries ⚠️ markers — reconstructed from a prior session, not verified against an actual `foundation-build-2pager.html` (which isn't in the Trove or a Project yet).
**Action needed:** Get the Foundation Build 2-pager into the Monday Website Project, then clear the ⚠️ items.
