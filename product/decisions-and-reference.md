# Sula Decisions & Reference

Living document tracking scope decisions, additions, descopes, deferred items, and project context for the Sula household financial intelligence app.

**Last Updated:** 2026-02-24
**Status:** Phase 0 Complete | Ready for Phase 1

---

## Project Context

| Property | Value |
| --- | --- |
| **App Name** | Sula |
| **Repository** | github.com/TheBigLou/sula-app |
| **Builder** | PM with Node/React/JS experience, using Claude Code |
| **Household** | Louis (Person A / Owner) + Wife (Person B / Partner) |
| **Deployment Model** | Local-first (localhost only); no cloud hosting for v0 |
| **Full Specification** | `product/proposal.md` |
| **Card Benefits Data** | `product/cards-seed.md` |
| **Primary Config** | CLAUDE.md |

---

## Tech Stack Decisions (Phase 0)

### Core Framework & Runtime

| Decision | Choice | Rationale |
| --- | --- | --- |
| **Web Framework** | Next.js 15 (App Router, TypeScript) | Single unified full-stack project; strong Claude Code fluency; TypeScript essential for financial data integrity |
| **Node Version** | v22.22.0 LTS | Upgraded from v23.7.0 for Prisma 7 compatibility |
| **Language** | TypeScript | Non-negotiable for financial data handling and type safety |

### Data & Persistence

| Decision | Choice | Rationale |
| --- | --- | --- |
| **Database** | SQLite via Prisma ORM | Local-only deployment eliminates server process overhead; financial data stays on-machine; Prisma enables seamless migration to Postgres if scaling beyond household |
| **Prisma Adapter** | `@prisma/adapter-better-sqlite3` | Required for Prisma 7's client engine with SQLite |
| **ORM Pattern** | Prisma singleton in `src/lib/db.ts` | Prevents multiple connection instances in dev environment |

### UI & Styling

| Decision | Choice | Rationale |
| --- | --- | --- |
| **CSS Framework** | Tailwind CSS | Fast iteration, consistent design, excellent Claude Code support |
| **Component Library** | shadcn/ui | Pre-built accessible components; Claude Code integrates well; matches Tailwind workflow |

### Security & Encryption

| Decision | Choice | Rationale |
| --- | --- | --- |
| **Token Encryption** | AES-256-GCM via Node.js crypto module | Industry-standard for Plaid access token protection at rest; symmetric key from env var (ENCRYPTION_KEY) |
| **Environment Variables** | `.env` (excluded from git) | Sensitive credentials: ENCRYPTION_KEY, Plaid credentials, Anthropic API key |

---

## Architecture Decisions

### Code Organization

- **Business Logic Location:** `src/lib/` — all service functions, utilities, calculations
- **API Routes:** Thin wrappers calling service functions in `src/lib/`; no business logic in route handlers
- **Components:** React components import from `src/lib/`, not API routes directly
- **Database Access:** Centralized Prisma client via singleton pattern

### Data Storage Patterns

- **JSON Arrays in SQLite:** Fields like `merchantNames`, `merchantCategories`, etc. stored as JSON strings
  - **Rationale:** Acceptable at household scale; eliminates premature normalization complexity
  - **Scalability Plan:** Normalize to join tables (e.g., `RuleMerchantName` table) if product scales beyond single-household use
  - **Querying Impact:** Detection rules load into memory and match in application code; no direct SQL queries on JSON fields (fine at household scale)

### What We're NOT Using (and Why)

| Non-Choice | Reason |
| --- | --- |
| **Docker** | Unnecessary for local-only deployment; adds complexity without benefit |
| **Redis / Caching Layer** | SQLite performance sufficient for household data volume |
| **Authentication Library** (Auth0, NextAuth, etc.) | Single household, local-only for v0; no multi-user auth needed yet |
| **State Management Library** (Redux, Zustand, etc.) | React Server Components + local component state sufficient; don't need global store |
| **Testing Framework** | Deferred; manual verification per phase until data model stabilizes |
| **Background Job Queue** | Plaid sync and categorization happen synchronously in v0 |

---

## Data Model Decisions

### Core Tables

**Finalized schema includes:**
- Household, HouseholdMember (Louis + Wife)
- PlaidAccount, Transaction, TransactionCategory, Account (internal)
- CreditCard, CardBenefit, BenefitDetectionRule
- CreditUsageTransaction (join table), TransactionSplit, TransactionGroup, EditHistory

### Schema Refinements (Added During Phase 0 QA)

1. **CreditUsage ↔ Transaction: Many-to-Many**
  - Join table: `CreditUsageTransaction`
  - **Reason:** CSR travel credit ($300) is cumulative across many transactions; digital entertainment credit may match multiple streaming charges per month
  - **Example:** Single $15 Apple TV+ charge matches digital entertainment benefit; cumulative travel spend matches CSR $300 credit

2. **Transaction Splitting**
  - Model: `TransactionSplit`
  - **Use Case:** One receipt allocated to multiple categories (e.g., $200 Costco = $150 groceries + $50 household items)
  - **Implementation:** Parent transaction gets `hasSplits` boolean flag; split transactions excluded from category totals

3. **Transaction Grouping/Merging**
  - Model: `TransactionGroup`
  - **Use Case:** Multi-day hotel stay posting as 3 separate charges; logical grouping for spending analysis
  - **Scope:** Grouping logic deferred; table structure prepared

4. **Original Value Preservation**
  - `originalAmount` field on Transaction: preserves Plaid's original value when user edits
  - `llmCategory` / `llmSubcategory` fields: store LLM's suggestions when user overrides
  - **Reason:** Enables comparison of system suggestions vs. user corrections; useful for refining categorization

5. **User Edit Tracking**
  - `userEditedName` boolean on Transaction: marks when user manually changed transaction name
  - `categorySource` field: tracks who set category ("plaid" | "llm" | "user")
  - **Reason:** Transparency on data provenance; guides which data to trust for learning

6. **Audit Log**
  - Model: `EditHistory`
  - **Tracking:** entityType, entityId, field, oldValue, newValue, editedAt
  - **Scope:** Lightweight change tracking across all entities; detailed audit trail for financial data

### Scalability Assessment

**Current Scale (Household):**
- 7 card products
- 32 card benefits
- 38 detection rules
- ~50K total benefit records (if all applied to all cards)
- ~100K rule variations

**SQLite Capabilities:**
- **JSON-as-string fields:** Not directly indexed; detection loads rules into memory and matches in code
  - Fine at household scale
  - At product scale (5,000+ cards): normalize `RuleMerchantName` to join table for SQL-queryable rules
- **CardBenefit & BenefitDetectionRule tables:** Single-table structure remains viable orders of magnitude beyond current needs
- **Transaction table:** Will be largest table; add indexes on `date`, `accountId`, `householdMemberId`, `category` when data volume warrants

**When to Refactor:**
- JSON-as-string fields → join tables: if product expands to multi-household or >10K cards
- Add database indexes: when transaction table exceeds 100K+ rows
- Move from SQLite → Postgres: if cloud hosting becomes necessary (Prisma adapter swap only)

---

## Seed Data

### Card Portfolio

| Card | Issuer | Qty | Notes |
| --- | --- | --- | --- |
| Amex Platinum | American Express | 2 | Primary travel/entertainment |
| CSR | Chase Sapphire Reserve | 1 | Primary travel & dining |
| CSP | Chase Sapphire Preferred | 1 | Ongoing earn |
| United Explorer | United Airlines | 2 | Primary airline |
| Costco Visa | Costco | 1 | Warehouse category earn |
| Amazon Visa | Amazon/Visa | 1 | Everyday online |
| Apple Card | Goldman Sachs | 1 | Daily spend, Apple ecosystem |

### Benefit Summary

- **Total Seeded:** 32 benefits across 7 cards
- **Detection Rules:** 38 rules covering merchant names and category matching
- **Annual Household Fees:** $2,980/year
  - Amex Platinum: $695 × 2 = $1,390
  - CSR: $550
  - United Explorer: 2 × $95 = $190
  - Costco: $55
  - Others: $695
- **Capturable Credits (Annual):** ~$7,600+/year (conservative estimate)
  - Travel credits, dining credits, shopping credits, streaming credits, hotel status benefits, etc.

### Seed Implementation

- **Idempotency:** Uses deterministic IDs and upsert pattern; safe to re-run
- **Structure:** Stored in `product/cards-seed.md`; loaded via Prisma seed script
- **Verification:** See "Items Flagged for Verification" section below

---

## Deferred Items

### Deferred Refactors

- [ ] **Robust error handling and failure states across all UI flows** — Plaid connection, transaction sync, categorization, etc. should show clear error messages, retry options, and loading/failure states to the user rather than silently failing. Identified during Phase 1 QA.
- [ ] **Normalize JSON-as-string fields** to join tables if scaling beyond household use
- [ ] **Add database indexes** on Transaction (date, accountId, householdMemberId, category) when transaction volume warrants
- [ ] **Refactor HouseholdMember** into User + HouseholdMembership when adding multi-user auth

### Deferred Features (From Proposal — Intentionally Skipped for MVP)

**Data & Insights**
- [ ] AI financial querying (data model ready; need chat UI + LLM integration layer)
- [ ] Trend lines, YoY comparisons, spending insights cards
- [ ] Proactive AI insights (pattern detection, opportunity alerts)
- [ ] Notification system for expiring credits

**Financial Tools**
- [ ] Budgeting (not our positioning; look-back-first is core conviction)
- [ ] Card optimization / recommendation engine (requires earning rate encoding + point valuations)
- [ ] Offer auto-activation (technically complex, not needed for credit tracking MVP)
- [ ] Investment & net worth tracking (different product domain, separate app)

**Scale Features**
- [ ] Multi-household / enterprise features (auth, invitations, billing)
- [ ] Native mobile apps (responsive web first for v0)

---

## Items Flagged for Verification

These benefits are included in seed data but require confirmation against current 2026 cardmember agreements:

- [ ] **Resy Dining Credits** — How to determine qualifying Resy restaurants? Full network or curated list?
- [ ] **"The Edit" Hotel Collection** (Amex Platinum) — Which properties qualify? Updated list for 2026?
- [ ] **Exclusive Tables Restaurants** (Amex Platinum) — Current participation list?
- [ ] **IHG Hotel Credit** — Annual refresh or 2026-only benefit?
- [ ] **Saks Fifth Avenue Credit** — Confirm status post-Saks bankruptcy; will Amex honor if restructuring continues?
- [ ] **Apple TV+/Music Activation** — Current activation flow; does benefit cover individual or family plan?
- [ ] **United Explorer Annual Opt-In** — Rideshare credit requires annual opt-in; when does re-enrollment window open?
- [ ] **Delta Sky Club Visit Tracking** — How are visits tracked for annual limits? Digital access card? United app?
- [ ] **Costco Gas Earn Rate** — Confirm if earning rate applies to all Costco Gas locations or only US?

---

## Phase Completion Log

| Phase | Name | Status | Notes |
| --- | --- | --- | --- |
| **0** | Project Scaffolding | ✓ Complete | Next.js 15, Prisma/SQLite, full schema, seed data, encryption utils, CLAUDE.md |
| **1** | Plaid Integration | ⏳ Ready | Connect accounts; requires Plaid API setup |
| **2** | Transaction Sync | ⏳ Queued | Sync Plaid → SQLite |
| **3** | Categorization | ⏳ Queued | Claude AI for smart categorization |
| **4** | Spending Dashboard | ⏳ Queued | Main UI; spending by category, account, person |
| **5** | Card Benefits Engine | ⏳ Queued | Detect matching benefits per transaction |
| **6** | Net Card Value | ⏳ Queued | Annual fee vs. credits calculator |
| **7** | Polish & Real Data | ⏳ Queued | Real account sync, edge case handling, production readiness |

---

## Environment & Setup Notes

### Secrets Management

- **ENCRYPTION\_KEY:** 64-character hex string for AES-256-GCM (Plaid token encryption)
- **Plaid Credentials:** PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV (sandbox for dev)
- **Anthropic API Key:** ANTHROPIC_API_KEY (for Claude categorization)
- **Storage:** `.env` file (never committed to git)

### Development Setup

- **Node Version Manager:** Use `n` to install/switch to v22.22.0 LTS
- **Database File:** SQLite db excluded from git; generates on first run
- **GPG Commit Signing:**
  - Key ID: A4925E63FC3C4F72
  - Tool: pinentry-mac for passphrase entry
  - Configuration: Pre-configured in repo

### Dependencies & Lock Files

- **Package Manager:** npm
- **Lock File:** package-lock.json (committed)
- **Prisma:** Always run `npx prisma generate` after schema changes before running app

---

## Quick Reference: Key File Locations

| File | Purpose |
| --- | --- |
| `product/proposal.md` | Full product specification |
| `product/cards-seed.md` | Card benefits & detection rules data |
| `product/decisions-and-reference.md` | This document |
| `CLAUDE.md` | Developer guidelines & architecture patterns |
| `prisma/schema.prisma` | Database schema definition |
| `src/lib/db.ts` | Prisma client singleton |
| `src/lib/` | All business logic & services |
| `src/app/api/` | Thin API route wrappers |
| `.env` | Secrets (never committed) |

---

## Contact & Decisions

**If you need to:**
- **Add a feature:** Check Phase Completion Log; consult proposal.md
- **Modify schema:** Update prisma/schema.prisma, run `prisma migrate dev`, update this document
- **Verify a card benefit:** See "Items Flagged for Verification" section
- **Understand why a choice was made:** This document has rationale for all major decisions
- **Scale beyond household:** See "Scalability Assessment" for refactoring roadmap

---

**Last Reviewed:** 2026-02-24
**Living Document:** Update this file as decisions are made or scope changes occur.
