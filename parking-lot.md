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
**Status:** Open — PARTIAL DECISION 2026-05-30 (cross-ref `workshop-content.md` Delta 1)
**Context:** The Workshop offering is mid-rename, with three variants now in play:
- **"Workshop"** — nav, footer, homepage card, full-page filename (`workshop.html`).
- **"Builders Blueprint Series" / "Builders Blueprint Series Training"** (plural, no apostrophe) — used throughout `workshop-overview.html` (title, eyebrow, topbar, bar label).
- **"Builder's Blueprint Series"** (singular, apostrophe) — chosen for the **print 2-pager** this session (Ethan's call), so the PDF leads the rename in this new direction.
**⚠️ Known mismatch created this session:** the `workshop-overview.html` primer says "Builders" (plural) but its "Download PDF" now serves a 2-pager titled "Builder's" (singular). A visitor sees one name on the page and a different one on the document. Deliberate, logged, not silently reconciled.
**Action needed:** Lock the name (incl. Workshop-vs-Blueprint and singular-vs-plural), then sweep in one pass: full page + filename, primer, the 2-pager, and nav/footer/homepage entry points. The 2-pager currently leads; everything else trails.

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
**Context:** All three full pages (`foundation-build.html`, `customer-journey.html`, `workshop.html`) carry a "Share this overview" link to their primer (site → primer). Under the primer's actual role — an *emailable artifact* that drives recipients *to* the full page — that direction is backwards for the published site: a visitor already on the full page is at the destination. But the links are **useful in design mode** (the primer is one tap away while the funnel is being evaluated), so they're kept deliberately, not deleted.
**Action needed:** On the transition to published/live mode, remove the three "Share this overview" links. Until then they stay as design-mode scaffolding. (This is the concrete case that prompted the Website Modes standard.)

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

### Foundation Build content file — 2-pager side unverified
**Status:** Open (cross-ref `foundation-build-content.md`)
**Context:** The Foundation Build content file's 2-pager copy carries ⚠️ markers — reconstructed from a prior session, not verified against an actual `foundation-build-2pager.html` (which isn't in the Trove or a Project yet).
**Action needed:** Get the Foundation Build 2-pager into the Monday Website Project, then clear the ⚠️ items.
