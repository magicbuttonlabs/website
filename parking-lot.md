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

### AI Training Workshop — offering live, full trio shipped
**Status:** Done 2026-05-30
**What landed:** `ai-workshop.html` launched as a co-equal **fourth** offering (nav + footer swept across all 11 pages; canon Shared Chrome Contract updated to four offerings; reciprocal cross-links with `workshop.html`; homepage Enable group split into two co-equal cards). The full **trio** is now built and wired:
- `ai-workshop-content.md` — source-of-truth content file (Shared copy · Render deltas · Section map), extracted from the live page. **Done.**
- `ai-workshop-overview.html` — web primer (shared `styles.css` + standard chrome; "Share with a colleague"; "Download PDF" → `downloads/ai-workshop-2pager.pdf`; primary CTA → full page). **Done.**
- `ai-workshop-2pager.html` — print 2-pager built to `topic-2pager-framework.md` (slim, links `fonts-2pager.css`; Playwright/Chromium; validation gate PASS at 2× Letter; both pages eyeballed clean, no dead-space). Added to `build-2pager-pdfs.py` `DOCS` as the 4th render → `downloads/ai-workshop-2pager.pdf`. **Done.**
- Full page → primer "Share this overview" design-mode link added for parity. **Done.**
**Still gated on the shared deploy step:** the PDF only materializes once the one-time `deploy.yml` render step lands (see that item) — same dependency as the other three 2-pagers.
**Booking note (still open):** the AI page books via Calendly (`calendly.com/brandon-gauby-mbl/ai-training`); the footer Connect list still surfaces the Builders Blueprint "Workshop Waitlist" monday form. Confirm the intended AI booking path before launch.

### Homepage "Enable" group — split into two co-equal training cards
**Status:** Done 2026-05-30
**What:** The Enable group's single umbrella "monday.com Training" card was split into a two-card grid (mirroring Deploy & Build): **Builders Blueprint Series** &rarr; `workshop.html` (reusing the existing training-card blurb, which already described this offering) and **AI Training Workshop** &rarr; `ai-workshop.html` (blurb taken from the AI page's own summary line, not invented). Both cards point at full pages, per the cards-routing decision below.

### Site-wide copyright year — © 2025 → 2026
**Status:** Open — chrome (footer-bottom), site-wide
**Context:** Every page's footer-bottom still reads "© 2025 by Magic Button Labs, LLC." `ai-workshop.html` was conformed to 2025 to stay byte-identical with the rest rather than fork one page to 2026. It's a year stale across the whole site.
**Action needed:** Bump footer-bottom to 2026 on all 11 pages in one chrome sweep. Low effort; fold into the next chrome pass or do standalone.

### Workshop naming — RESOLVED: plural "Builders" locked everywhere
**Status:** Done 2026-05-30 (cross-ref `workshop-content.md` Delta 1)
**Decision:** the offering label is **"Builders Blueprint Series"** — **plural, no apostrophe** — on every surface. Rationale: it reads as "a blueprint for builders," and apostrophe-free survives filenames / URLs / slugs / QR codes cleanly. It was already the form on the majority of surfaces (nav "Builders Blueprint," footer + homepage card + primer "Builders Blueprint Series"), so locking plural meant changing only the print 2-pager.
**Swept this session:** `workshop-2pager.html` updated off the earlier singular "Builder's" → "Builders" (5 instances: title, both topbars, hero eyebrow, hero lead). Chrome, primer, homepage card, and `workshop-content.md` confirmed/recorded plural.
**Still deferred (separate, optional):** the full-page **filename** rename `workshop.html` → `builders-blueprint.html`. The visible label is settled; the filename is cosmetic. Renaming it is its own chrome sweep (every nav/footer link across 11 pages + `ai-workshop.html`'s cross-link + the primer's CTA + the 2-pager's CTA URL + a redirect for any printed QR). Do it as a standalone pass when convenient.

### Content files — add primer as a third artifact (CJ + Foundation Build)
**Status:** Done 2026-05-30
**What:** Both `cj-website-content.md` and `foundation-build-content.md` were backfilled to describe all three artifacts (full page + web primer + print PDF). Each gained a "Delta 0 — the three artifacts and their jobs," a primer-specific delta, and a section map with a dedicated web-primer column. All three offering content files (incl. `workshop-content.md`, built fresh) are now consistent on the three-artifact model.
**Note:** Foundation Build's ⚠️ markers remain — the primer reuses the 2-pager's identity strip / hero meta / 3-1-0 stats, still unverified against an actual print 2-pager (see the ⚠️ item below).

### Foundation Build primer — identity strings NOW VERIFIED
**Status:** Done 2026-05-30
**Context:** The primer reused 2-pager-only strings (topbar label "Partner Resource · Foundation Build", hero meta line, 3/1/0 stats) that had been reconstructed, not verified. The actual print 2-pager `foundation-build-2pager.html` was built to the framework this session and committed to the instance — the strings now match a real, gate-passing 2-pager. The 2-pager's page-1 stats are 3 / 1 / 0 (the "0" carries "migrations, integrations, or full buildouts"), and the do/don't lives in a dedicated page-2 "Scoped on purpose" band.
**Note:** primer ⚠️ markers in `foundation-build-content.md` can be cleared (see that file).

### PDF hosting for "Download PDF" — RESOLVED (build-on-push via GitHub Action)
**Status:** Done 2026-05-30
**What:** PDFs are generated at deploy time by a GitHub Action and served from GitHub Pages — no binary ever lives in the Trove. Architecture:
- Three slim 2-pager HTML sources committed to the instance: `customer-journey-2pager.html`, `foundation-build-2pager.html`, `workshop-2pager.html` (~16KB each; they `<link>` a shared `fonts-2pager.css`).
- `build-2pager-pdfs.py` (committed) generates `fonts-2pager.css` from the npm `@fontsource` packages at build time, then renders each HTML → `downloads/*.pdf` via Playwright/Chromium, running the validation gate (2 pages, Letter). Build fails if the gate fails.
- The three primers' "Download PDF" buttons now point at `downloads/<slug>-2pager.pdf` (live).
**⚠️ ONE MANUAL STEP REMAINING:** `deploy.yml` could not be written from this session (GitHub blocks workflow-file writes via the Trove integration). The render step must be added to `.github/workflows/deploy.yml` by hand — see the "deploy.yml manual edit" item below. **Until that edit lands, the PDFs are NOT generated and the download buttons will 404.**

### deploy.yml manual edit — add the PDF render step (⚠️ ACTION NEEDED)
**Status:** Open — must be done by hand (GitHub blocks workflow writes via Trove)
**Context:** The existing `.github/workflows/deploy.yml` uploads the repo root and deploys to Pages. The PDF render must run *before* the `upload-pages-artifact` step so `downloads/*.pdf` is swept into the same deploy. The deploy mechanism and triggers stay untouched — this is purely additive.
**Action needed:** In `deploy.yml`, after the `Checkout` step and before `Setup Pages`, add:
```yaml
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Render 2-pager PDFs
        run: |
          pip install playwright pypdf
          playwright install --with-deps chromium
          python build-2pager-pdfs.py
```
Everything else in the file is unchanged. Once committed, the next push renders all three PDFs and the download buttons go live.

### "Share this overview" links on full pages — design-mode scaffolding
**Status:** Open — scaffolding, remove on published-mode transition (cross-ref canon `project-context.md` → Website Modes)
**Context:** All four full pages (`foundation-build.html`, `customer-journey.html`, `workshop.html`, `ai-workshop.html`) carry a "Share this overview" link to their primer (site → primer). Under the primer's actual role — an *emailable artifact* that drives recipients *to* the full page — that direction is backwards for the published site: a visitor already on the full page is at the destination. But the links are **useful in design mode** (the primer is one tap away while the funnel is being evaluated), so they're kept deliberately, not deleted.
**Action needed:** On the transition to published/live mode, remove the four "Share this overview" links. Until then they stay as design-mode scaffolding. (This is the concrete case that prompted the Website Modes standard.)

### Homepage offering cards — point at full pages (decided)
**Status:** Decided 2026-05-30 — cards point at full pages, not primers
**Context:** Whether homepage offering cards should route to primers (as on-ramps) or full pages. **Resolved:** they point at the **full pages.** Primers are *emailed to people* to drive them to the site — they are not meant to be discovered *from* the site, so the homepage must not route into them. No change needed (cards already point at full pages); recorded so it isn't re-litigated.

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

### Foundation Build content file — 2-pager side NOW VERIFIED
**Status:** Done 2026-05-30
**Context:** The Foundation Build content file's 2-pager copy carried ⚠️ markers — reconstructed from a prior session, not verified against an actual `foundation-build-2pager.html`. That 2-pager now exists (built to the framework this session, gate-passing, committed to the instance). The 2-pager copy in `foundation-build-content.md` can have its ⚠️ markers cleared against it.
**Note:** the build resolved the 2-pager's own structure too — page 2 gained a "Scoped on purpose" do/don't band so it fills the page (the offering's deliberate-scoping message now leads page 2 rather than sitting only in a stat).
