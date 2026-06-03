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

### Solutions overview page — needed for nav consolidation and CTA band destinations
**Status:** Done 2026-05-31
**What landed:** `solutions.html` built (Enable / Deploy & Build / Support & Maintain groups, richer cards with meta lines, standard chrome). Nav swept across all 13 pages — 4 individual offering links replaced with single "Solutions" → `solutions.html`. CTA bands on `customer-journey.html` and `foundation-build.html` restored with "See all solutions" as the third button.
**Still open:** Workshop/AI Workshop CTA bands — see item below.

### Workshop + AI Workshop CTA bands — "See all solutions" decision pending
**Status:** Open
**Context:** `workshop.html` and `ai-workshop.html` both have 3-button CTA bands where slot 3 is a second conversion action ("Book a Private Session" / "Ask About a Private Session" → contact.html). Adding "See all solutions" as a 4th button would be cluttered; replacing slot 3 removes a conversion path. Decision needed before touching these.
**Options:** (a) Replace slot 3 with "See all solutions" — cleaner, slight conversion trade-off; (b) Keep as-is — these pages already have a strong conversion pattern and the nav now handles discovery.

### `testimonials.html` — stale chrome, needs full refresh
**Status:** Open
**Context:** `testimonials.html` was not on the standard chrome — its nav had only two offering links (Workshop + Customer Journey, both old labels) and its footer listed only CJ, Workshop, and "Implementation" (predates the current four-offering structure). Nav was patched this session (now shows Solutions). Footer and CTA band still need to be brought to the current standard.
**Action needed:** Full chrome refresh on `testimonials.html` — standard footer (4-offering Solutions col, Company col, Connect col) + CTA band aligned with current pattern.





### CJ journey diagram — "connectivity layer" as candidate canonical vocab (parked)
**Status:** Parked 2026-05-30
**Context:** The CJ journey diagram was rebuilt this session (horizontal arc → responsive directional rail; two-tier band shading for customer-facing vs. Accounting; mobile stacked variant). The diagram's Foundation band now reads **"Foundation & Scale — so nothing falls between teams,"** and the lower Foundation section's kicker was aligned to **"The connective layer — so nothing falls between teams."** During design, the standalone term **"the connectivity layer"** was considered as the band's name. It was *not* adopted as canonical because the group/layer vocabulary is governed by `topic-alignment-website-to-2pager.md` (Foundation & Scale is the locked name across website + primer + 2-pager), and elevating "connectivity layer" would mean changing all three artifacts plus the alignment doc.
**Action needed:** Decide whether "connectivity/connective layer" should become canonical framing for the Foundation & Scale layer across all artifacts (then update the alignment doc first, then propagate), or remain page-level descriptive copy only. Until decided, "Foundation & Scale" stays the locked name; the connective-layer phrasing is descriptive tail copy on the CJ full page only. Do NOT propagate the phrase to the primer or 2-pager without resolving this.

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
- Four slim 2-pager HTML sources committed to the instance: `customer-journey-2pager.html`, `foundation-build-2pager.html`, `workshop-2pager.html`, `ai-workshop-2pager.html` (~16KB each; they `<link>` a shared `fonts-2pager.css`).
- `build-2pager-pdfs.py` (committed) generates `fonts-2pager.css` from the npm `@fontsource` packages at build time, then renders each HTML → `downloads/*.pdf` via Playwright/Chromium, running the validation gate (2 pages, Letter). Build fails if the gate fails.
- The four primers' "Download PDF" buttons now point at `downloads/<slug>-2pager.pdf` (live).
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
**Context:** All four full pages (`foundation-build.html`, `customer-journey.html`, `workshop.html`, `ai-workshop.html`) carry a "Share this overview" link to their primer (site → primer). Under the primer's actual role — an *emailable artifact* that drives recipients *to* the full page — that direction is backwards for the published site: a visitor already on the full page is at the destination. But the links are **useful in design mode** (the primer is one tap away while the funnel is being evaluated), so they're kept deliberately, not deleted. **Placement is now uniform (2026-05-30):** all four live in the bottom CTA band as the middle `btn btn-outline-white` (Foundation Build was moved out of its hero, where it had been a light `btn btn-outline`, to match the other three), so the eventual removal is the identical edit on every page.
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

---

## Blog / Content engine (added 2026-06-02)

> First native blog post shipped — the **Anti-Patterns** launch, first run through the content engine (`topic-content-engine.md` in the canon, currently a temporary tenant there). Post: `blog-monday-portfolio-rollup-doesnt-scale.html`. Provenance + LinkedIn/email drafts: `blog-anti-patterns-source.md`.

### Founder review of the first Anti-Patterns post
**Status:** Open — review before the distribution push
**Context:** `blog-monday-portfolio-rollup-doesnt-scale.html` is published and featured on `blog.html`, drafted from the call corpus (pattern lane, de-identified). It makes pointed but defensible claims about monday.com's portfolio/project solution. The LinkedIn + email versions sit in `blog-anti-patterns-source.md` ready to go.
**Action needed:** Ethan read-through; greenlight (or soften) the post and the claims before the LinkedIn/email push.

### Blog post hero images — no image pipeline yet
**Status:** Open
**Context:** The first post uses a text hero; the index card uses the existing CSS-gradient + emoji thumb (⚠️). No `assets/blog/` directory exists and there's no image step. Per `topic-blog-standard.md` §10, real hero images + alt text are the standard.
**Action needed:** Create `assets/blog/monday-portfolio-rollup-doesnt-scale/` with a real hero (Canva), wire it into the post `<head>` OG tags + hero, and set the directory convention for future posts.

### Article CSS not yet promoted
**Status:** Open
**Context:** The article typography (`.post-article`, `.post-hero`, `.takeaways`, `.pullquote`, `.post-related`) lives in the post's inline `<style>` block (v1). Per `topic-blog-standard.md` §5, promote to `styles.css` once a second post confirms the pattern; consider a `blog-post-template.html` starter file at the same time.
**Action needed:** After post #2, lift the shared article CSS into `styles.css`.

### Blog taxonomy — franchise segment as a filter pill
**Status:** Open — decision
**Context:** Added an **Anti-Patterns** pill to the `blog.html` filter row and used it as the post's tag/eyebrow to build the franchise. The row now mixes a franchise *segment* (Anti-Patterns) with topical *categories* (Workflows, Automations, Best Practices, Case Studies). Pills are still decorative (`href="#"`) — they don't filter.
**Action needed:** Decide whether segments and topical categories coexist on one row (or split into two facets), and whether to wire real filtering. Ties to the engine's segment architecture (`topic-content-engine.md` §2).

### Legacy Wix blog post still external
**Status:** Open (carried from the canon parking lot "Blog post architecture")
**Context:** "How to build a monday.com workflow your team will actually use" is now a standard (non-featured) card on `blog.html` but still links out to the Wix `/post/...` URL (`target="_blank"`). Inconsistent with native posts.
**Action needed:** Rewrite/migrate as a native `blog-[slug].html` when convenient.

### New post matches the stale © 2025 footer — on purpose
**Status:** Open — folds into the existing site-wide © year sweep (see "Site-wide copyright year" above)
**Context:** The new post's footer reads "© 2025" deliberately, to stay byte-identical with the rest of the site's chrome (Shared Chrome Contract). It rides along with the known site-wide year bump, not a per-page fix.
