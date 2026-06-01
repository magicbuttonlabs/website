# Customer Journey Solution — Video Outlines

> **Purpose:** Outline source for all Sales Demo and Delivery Walkthrough videos for the Customer Journey Solution. One entry per board/module, both video types. Videos are recorded from these outlines — update the outline first if the product changes, then re-record.
>
> **Process standard:** `magicbuttonlabs/project-website` → `process-video-sales-delivery.md`
>
> **Relationship to site copy:** `cj-website-content.md` is the written copy source. These outlines must stay in terminology sync with it — same stage names, same field names, same module names.
>
> **Last updated:** 2026-06-01

---

## Module index

| # | Module | Section | Sales Demo | Delivery Walkthrough |
|---|---|---|---|---|
| 1 | Prospects (Lead Capture & Qualification) | Sales & Growth | ✅ Outlined | ✅ Outlined |
| 2 | Opportunities (Sales Opportunity Management) | Sales & Growth | — | — |
| 3 | Products & Services Catalogue | Sales & Growth | — | — |
| 4 | Financial Operations & Invoicing | Won to Paid | — | — |
| 5 | Sales Commissions | Won to Paid | — | — |
| 6 | Post-Sales Handoff | Won to Paid | — | — |
| 7 | Project Management | Delivery & Operations | — | — |
| 8 | Time Tracking & Profitability | Delivery & Operations | — | — |
| 9 | Resource Planning & Capacity | Delivery & Operations | — | — |
| 10 | Project Execution & Guest Collaboration | Delivery & Operations | — | — |
| 11 | Master Data & Enrichment | Foundation & Scale | — | — |
| 12 | Dashboarding | Foundation & Scale | — | — |
| 13 | Scale Kits Workflow Engine | Foundation & Scale | — | — |
| 14 | Embedded Learning | Foundation & Scale | — | — |

---

## Module 1 — Prospects (Lead Capture & Qualification)

*Sales & Growth · First board in the customer journey*

*Source call: May 27, 2026 — Hyperflo Lead Workflow Customization (Fathom 149894024)*

---

### Sales Demo outline

**Type:** Sales Demo
**Target length:** 60–90 seconds
**What this covers:** The purpose of the Prospects board — how new company relationships enter the system, move through a simple workflow, and either qualify into a real sales cycle or close out cleanly.

---

**[1. What this is — ~10 sec]**

This is the Prospects board — the top of your sales funnel. Every new company you're having a conversation with lives here.

**[2. The core workflow — ~35 sec]**

The workflow is intentionally simple. A new prospect comes in. You work them. And one of two things happens — they ask for a quote, which tells you the conversation is getting real, or they become qualified and move over to the Opportunities board as a true sales cycle. If they don't pan out, you close them out and they're done.

What's important here is that the moment you move a prospect to In Progress, the system automatically creates a Contact and an Organization in your master data. So even if this prospect never buys, they're in your database — ready to re-engage a year from now when there's a new buyer or a new project.

**[3. The key payoff — ~20 sec]**

Each record carries the company name, the owner, and a place for attachments — RFQs, emails, whatever's relevant. And it connects directly to your email and calendar, so every interaction is logged automatically. Nothing falls through. Nothing has to be re-entered.

**[4. The handoff signal — ~10 sec]**

When a prospect qualifies, one click moves them to the Opportunities board — where the real sales cycle begins.

---

**Full script (record-ready):**

> "This is the Prospects board — the top of your sales funnel. Every new company you're having a conversation with lives here.
>
> The workflow is intentionally simple: a new prospect comes in, you work them, and one of two things happens — they ask for a quote, which tells you the conversation is getting real, or they become qualified and move over to the Opportunities board as a true sales cycle. If they don't pan out, you close them out and they're done.
>
> What's important here is that the moment you move a prospect to In Progress, the system automatically creates a Contact and an Organization in your master data. So even if this prospect never buys, they're in your database — ready to re-engage a year from now when there's a new buyer or a new project.
>
> Each record carries the company name, the owner, and a place for attachments — RFQs, emails, whatever's relevant. And it connects directly to your email and calendar, so every interaction is logged automatically.
>
> When a prospect qualifies, one click moves them to the Opportunities board — where the real sales cycle begins."

---

### Delivery Walkthrough outline

**Type:** Delivery Walkthrough
**Target length:** 5–8 minutes
**Audience:** Active users — sales team members and ops leads onboarding to the system.

---

**[1. Board purpose]**

The Prospects board manages every new company relationship from first contact through to qualification. It is distinct from the Opportunities board — this board is about relationship intake and early nurture, not a full sales cycle. The Opportunities board is where contract values, probabilities, and product alignment live. This board asks one question: is this company worth pursuing?

Ownership: the sales team. Connected to: the Organizations board and Contacts board (master data), and the Opportunities board (downstream on qualification).

---

**[2. Workflow stages]**

| Stage | Meaning | What triggers the move |
|---|---|---|
| **New Prospect** | A company has come into your orbit — inbound RFQ, trade show, LinkedIn, cold outreach | Manual entry or form submission |
| **In Progress** | You're actively having a conversation | Manual move; triggers automatic creation of Contact + Organization in master data |
| **Quote Requested** | They've asked for a number — conversation is real but not yet qualified | Manual move; signals intent without committing to the Opportunities board |
| **Qualified** | They meet your bar — ready for a real sales cycle | Manual move; spawns item on the Opportunities board |
| **Unqualified** | Had the conversation; not the right fit | Manual move; record is retained, not deleted |

**Exit note:** Unqualified prospects are retained in master data. The relationship may be re-opened in a future cycle — "not now" is different from "never."

---

**[3. Fields]**

| Field | Type | Purpose |
|---|---|---|
| **Item name** | Text | Company name — B2B standard. The contact name is displayed alongside as a secondary field, not the primary identifier. |
| **Status** | Status column | The five-stage workflow above. |
| **Owner** | Person | Single team member responsible for working this prospect. |
| **Attachments** | Files & media | RFQs, email attachments, discovery notes — anything relevant to the relationship. Links and files both. |
| **Emails & Activities** | Widget | Auto-logs every email and calendar event tied to this prospect once Outlook or Gmail is connected. |

**Intentionally removed fields** *(and why):*
- **Hot / Warm / Cold** — removed because every prospect in the system is warm by definition. If they're cold, they shouldn't be here yet. The field added noise without actionable signal.
- **Lead Source** — removed for now; may be revisited once a new sales manager is in place and reporting needs are clearer. Not a permanent decision.
- **Follow-up Cadence** — removed from this board; lives on the Opportunities board instead, where a structured sales cycle warrants it. At the prospect stage, cadence is the sales rep's judgment call, not a forced field.

---

**[4. Item drilldown]**

Opening a single prospect record shows:

- **Connected Organization** — mirrored fields from the Organizations master data board (company details, industry, size, etc.)
- **Connected Contact** — mirrored fields from the Contacts master data board (name, title, email, phone)
- **Emails & Activities panel** — every email and calendar event auto-logged once accounts are connected. Permission controls let each rep decide who can read the *contents* of their emails vs. who can see that an interaction happened. The activity record (date, type) is always visible to the team; the message body is gated.
- **Updates** — the running log of notes from calls, meetings, and follow-ups. This is where reps document what happened, not just that it happened.

---

**[5. Integrations]**

- **Microsoft Outlook / Gmail** — connect via the Emails & Activities native integration. Once connected, all emails and calendar events with the prospect's contact are logged automatically. Each user connects their own account; they control their own visibility settings.
- **Lead intake form** — a monday.com Form view ("Lead Submission Form") can be embedded on a website or shared as a link. Submissions land directly as new items on the Prospects board in the New Prospect stage.

---

**[6. Automation / data flow]**

- **On move to In Progress:** automatically creates an Organization record and a Contact record in master data, linked back to this prospect item. This is the trigger that puts the company into the permanent database — regardless of whether they ever qualify.
- **On move to Qualified:** automatically creates an item on the Opportunities board, pre-populated with the linked Organization and Contact. The Prospects item remains; the Opportunities item is the handoff.

---

**[7. What comes next]**

Qualification moves the relationship to the **Opportunities board** — Sales Opportunity Management. That board owns the full sales cycle: contract value, probability, product/service alignment, project vs. transactional classification, and close. The Prospects board hands off a company name, a contact, and a signal of intent. The Opportunities board takes it from there.

---

*Next outline to write: Module 2 — Opportunities (Sales Opportunity Management)*
