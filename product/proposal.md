# Product Proposal: Household Financial Intelligence

*February 2026*

---

## The One-Sentence Version

A look-back-first financial dashboard for couples that shows where your money actually went, automatically detects whether you're capturing the credit card perks you're paying for, and tells you which cards are actually earning their keep.

---

## Why This Product Needs to Exist

We researched 15 competitors across two categories (spending trackers and card perks trackers). The central finding: no product combines these four capabilities, and most don't even attempt more than one.

1. **Look-back-first spending analysis** — "Where did our money actually go?" before "Where should it go?"
2. **Household-aware multi-person view** — Two people's accounts, labeled by owner, viewable together or separately
3. **Card perks tracking grounded in real transactions** — Not just "these credits exist" but automated detection of whether they were actually used, and a clear answer to "is this card worth its annual fee?"

Copilot has the best look-back UX but no household support. Monarch has the best household model but leads with budgeting. CardPointers has the deepest card perks database but zero transaction connectivity. Origin has the most advanced AI but caps at 2 people and focuses on investing. Nobody puts it all together.

---

## Who We're Building For (Phase 1)

Us. Specifically: a couple with multiple credit cards across both people, including premium cards with complex annual credits (Amex Platinum, Chase Sapphire Reserve, etc.), who want a single place to:

- See where the household's money went last month, broken down by person and category
- Know which card credits we've used, which are about to expire, and whether each card is earning its annual fee back
- Have the system detect credit usage automatically from transactions instead of manually checking boxes

This is the "Sunday morning coffee conversation" tool — the thing you open together to understand your shared financial life.

**What this means for scope:** We don't need onboarding flows, marketing pages, a billing system, or support for thousands of users. We need the product to work correctly for our specific accounts and cards. Features that only matter at scale can wait.

---

## Permission to Play: What Must Work on Day One

These are table stakes — not differentiators, but the foundation everything else sits on. Without these, the product is not usable.

### 1. Bank & Card Account Connectivity
Connect checking accounts, savings accounts, and credit cards from both household members via Plaid. Import transaction history (Plaid typically provides 12-24 months). Display transactions in a unified feed.

**Why this is non-negotiable:** The entire look-back premise depends on having real transaction data. Manual entry is not the product we're building.

**Scope for us:** We only need our specific banks and card issuers to work. We don't need to support 14,000 institutions — just ours.

### 2. Transaction Categorization
Raw bank transaction data is messy (e.g., "TST* PIZZERIA LOC 4182" instead of "Joe's Pizza — Dining"). Transactions need to be cleaned up and categorized into human-readable groups.

**Approach:** Use an LLM (Claude) to categorize and clean merchant names. The research shows Copilot and Monarch achieve ~90% accuracy with custom ML models trained over years. An LLM-based approach should get us to a comparable level without building custom ML infrastructure — and it can improve over time as we correct misclassifications.

### 3. Per-Person Account Labeling
Every connected account is tagged with its owner (Person A or Person B). Transactions inherit this label. Any view can be filtered: "show me just my spending," "show me just my partner's spending," or "show me everything."

**Why this matters:** This is the single feature that separates a household product from a personal one. Monarch does this well. Most competitors don't do it at all.

### 4. Basic Spending Dashboard
A time-filtered view (this month, last month, custom range) showing:
- Total spending by category (bar or table)
- Spending by person
- List of transactions with search/filter

This is the "where did our money go?" screen. It doesn't need to be fancy. It needs to be correct and fast.

---

## Killer Features: What Makes This Worth Building

These are the things that, combined with the permission-to-play foundation, create something that doesn't exist anywhere in the market.

### Killer Feature 1: Card Perks Dashboard with Automated Credit Detection

**What it is:** A unified view of all credit card benefits across the household — what credits exist, which have been used (detected automatically from transactions), which are expiring soon, and what each card actually costs after credits.

**How it works:**

The product ships with a **seeded card benefits database** covering the household's actual cards. Each card entry includes its annual fee, all associated credits/perks, credit amounts, qualifying merchant categories or merchants, and reset schedules (monthly, quarterly, annual, cardmember-year). Users don't need to manually research or enter any of this — their cards are pre-loaded and ready to go.

**A critical design distinction: two types of credits, two tracking modes.**

Not all credits are created equal. Some result in a statement credit that appears on your card — these are detectable from transaction data. Others are loaded directly into a third-party app and never appear as a reimbursable transaction at all. These require a fundamentally different tracking approach.

**Mode 1: Statement Credit (Auto-detect)**

The issuer reimburses the charge as a line item on your card statement. The sequence is: you spend at a qualifying merchant → charge appears → a separate credit posts within a few days. We watch for qualifying transactions and flag them: "This $52.30 Saks charge on your Amex Platinum on Feb 3 likely triggered your semi-annual Saks credit ($50). Mark as used?" Users confirm or dismiss, which updates the remaining balance.

Examples in our household: Saks credit, Airline fee credit, CLEAR credit, Global Entry credit, Walmart+ credit, Digital entertainment credit, Chase $300 travel credit, Chase Preferred $50 hotel credit, United 25% in-flight credit.

**Mode 2: App-Loaded Credit (Reminder + checklist)**

The credit is loaded into a third-party app as a balance or discount — your card statement may show a $0 charge, a partial charge, or nothing at all. There is no reimbursement posting to detect. Auto-detection is unreliable or impossible.

The most important example: **Amex Platinum Uber Cash.** American Express loads $15 into your Uber/Uber Eats account on the 1st of each month (and $20 in December). When you take a ride, Uber applies the credit as a discount before charging your Amex card. You might see a $0 charge or nothing at all. There's no "UBER CASH CREDIT" on your statement — the credit was silently consumed inside the Uber app. The same pattern applies to any benefit that pre-loads funds into a third-party account.

For these credits, the app takes a **reminder-first approach:**
- At the start of each reset period, the credit appears in the dashboard with a clear "unused" status
- The app surfaces a reminder if the credit is still unused as the reset date approaches (e.g., day 25 of the month for a monthly credit)
- The user manually confirms they used it — or dismisses the reminder if they intentionally didn't
- Optionally: if the system sees any Uber/Uber Eats transaction on the linked card in a given month, it treats that as a hint that the credit was at least partially used and prompts confirmation

This is less automated than Mode 1 but honest about what's actually detectable. The goal is that no credit expires without the user at least being reminded about it.

**Airline credit: a special case of Mode 1 that requires configuration**

The Amex Platinum airline fee credit depends on which airline you've selected for that year. The app needs to know the selected airline to apply the right detection rules. This is stored as a **manually configurable setting per card** — the user specifies their selected airline, and the detection rules update accordingly.

We also surface the selection in the dashboard ("Your selected airline for the airline fee credit is United. Change selection?") since this is something users forget and can only change once per calendar year.

**The dashboard shows, per card and per credit:**
- Credit name, total value, amount used, amount remaining
- Days until reset (with visual urgency for credits expiring soon)
- Tracking mode: auto-detect or reminder
- Status: confirmed used / suggested (pending confirmation) / unused / not applicable

**The step up from competitors:** This combines two things no single product has put together: real transaction data (from Plaid) and a structured card benefits database (from Track B competitors' territory). CardPointers has 5,000 cards in its database but can't tell you whether you actually used a credit because it has no transactions. MaxRewards claims auto-detection but users report chronic sync failures and wrong credit states. Kudos' Hidden Perks is the closest attempt — but it's single-user only and doesn't handle the app-loaded credit problem honestly. We have both transaction data and benefits data, applied across a household, and a clear-eyed design for what's actually detectable.

**What makes this hard (and how we manage it):**
- **The two-mode distinction must be explicit in the UI.** Users will be confused if they expect auto-detection on a credit that's app-loaded. The dashboard needs to clearly communicate which credits are watched automatically and which need the user to confirm manually.
- **Airline credit configuration.** The detection rule for the Amex airline fee credit must be tied to the user's selected airline. If they switch airlines mid-year (allowed once per calendar year), the rules must update. The product needs a settings flow for this.
- **Detection accuracy for Mode 1.** Not every statement credit maps cleanly to a charge pattern. The Amex airline fee credit is deliberately ambiguous about what counts as "incidental." We handle this by surfacing suggestions with a confirmation step — never auto-confirming. False positives are annoying; false negatives (missing a credit entirely) are worse. We bias toward surfacing more suggestions.
- **Credit rule maintenance.** Issuers change benefits. At personal scale, we'll know when our own cards change. At product scale, this becomes a data maintenance burden.
- **Transaction categorization quality.** Detection accuracy depends on LLM categorization being correct. A dining transaction miscategorized as "shopping" won't match a dining credit rule.

### Killer Feature 2: Net Card Value Calculator

**What it is:** For each card in the household, a clear answer to the question: "Is this card worth its annual fee?"

**How it works:**

For each card, the calculator shows:
- **Annual fee** (from the seeded card database)
- **Credits captured** (from the perks dashboard — auto-detected and manually confirmed credits during the current cardmember year or calendar year)
- **Credits remaining** (unused credits still available before the next reset)
- **Net position** = credits captured - annual fee. Positive means the card is paying for itself through credits alone; negative means you're leaving money on the table or the card may not be worth keeping.

Example output:
```
Amex Platinum (Person A)
  Annual fee:            $695
  Credits captured:      $487  (Uber $165, Saks $100, Airline $200, Digital $22)
  Credits remaining:     $328  (Uber $35, Dining $80, Walmart+ $13, Digital $78, Hotel $122)
  Net position (YTD):   -$208  (but $328 still capturable → potential net: +$120)
```

**Why this matters:** No competitor — in either Track A or Track B — provides this view. CardPointers tracks credits as a manual checklist but doesn't connect them to annual fees. MaxRewards tracks offer savings but not credit redemption against card costs. The question "should I keep this card?" currently requires a spreadsheet. We answer it automatically.

**What we skip for now:** Estimated rewards earnings (e.g., "you earned ~2,400 Membership Rewards points on dining at 4x"). Rewards valuation requires knowing point values, which are subjective and card-program-specific. This is a meaningful enhancement but adds complexity that isn't needed to answer the core "is this card worth it?" question. Credits alone are concrete and verifiable.

### Killer Feature 3: Household-Aware Look-Back View

**What it is:** The default experience is backward-looking — here's what actually happened with your money — with everything attributable to a specific person.

This isn't a single feature so much as a design philosophy applied to every screen. The core interaction is:

- Open the app → see last month's spending, automatically broken down by person and category
- Toggle between "household view" (everyone combined), "my spending," or "partner's spending"
- Drill into any category → see the transactions, each labeled with whose card/account it came from
- Time-travel to any past month or quarter → same view, same granularity

**Why this is different from Monarch or Copilot:**
- Monarch has per-person labeling but leads with the Budget page. We lead with the look-back.
- Copilot has the best look-back UX in the market but has no household support at all (their most-requested unbuilt feature).
- We combine both: Copilot's look-back-first posture with Monarch's household data model.

**What we skip for now:** Trend lines, year-over-year comparisons, spending "insights" cards, anomaly detection. These are valuable but not required for a useful MVP. The simple question — "where did our money go last month, broken down by who spent it?" — is sufficient to start.

---

## What We're Deliberately Skipping (For Now)

These are features that matter for a scaled product but are unnecessary or premature when building for personal use.

### Skipping: AI Financial Querying (for now — data model ready)
Natural language querying ("how much did we spend on dining last quarter?") is a compelling feature and a clear differentiator. But it's not essential on day one — the spending dashboard answers the most common questions through its UI. We will ensure the data models are built to support adding a conversational interface easily: well-structured transaction data, pre-aggregated category totals by month/person, and clean relationships between accounts, people, and cards. When we add it, it should be a matter of building the chat UI and the LLM integration layer on top of data that's already queryable.

### Skipping: Budgeting
We are not building a budget-first product. The research is clear that look-back-first is our positioning and our conviction. Budgeting may come later as an opt-in layer, but it is not part of the MVP. If we want to set spending targets for categories, a spreadsheet works fine until we build this properly.

### Skipping: Offer Auto-Activation
CardPointers and MaxRewards have spent years building proprietary browser extensions and bank connectors to auto-enroll card-linked offers. This is technically complex (MaxRewards built its own bank connector specifically because Plaid can't do it), fragile (2-4 re-auths per month), and not required for our core use case. We are tracking whether credits were used, not activating offers.

### Skipping: Card Optimization and Recommendation Engine (for now)
Spend optimization (detecting when you used a suboptimal card for a purchase) and card recommendation (suggesting cards you don't hold) are on the aspirational roadmap but require encoding earning rate structures across cards — not just credits — plus point valuations that are inherently subjective. For MVP, the focus is on tracking the perks you're already owed. Optimization comes later, once the spend history data is rich enough to be meaningful.

### Skipping: Native Mobile Apps
Building native iOS and Android apps is a significant engineering investment. A responsive web app works on phones, tablets, and desktops from a single codebase. If the product has legs and we want a polished mobile experience, native apps are a Phase 2 investment.

### Skipping: Multi-Household / Scale Features
User authentication, role-based permissions, household invitations, subscription billing, usage analytics — all necessary for a public product, all unnecessary for a tool we're building for ourselves. We can hardcode our household structure initially and build proper multi-tenancy when (if) we go to market.

### Skipping: Investment & Net Worth Tracking
Origin and Monarch both track investments and calculate net worth. This is a different product domain. Our focus is spending intelligence and card perks. If a user wants net worth tracking, Monarch or Origin serve that need today.

---

## Where We're Headed: The Aspirational Roadmap

If the MVP proves useful and we decide to pursue this as a product, here's where the competitive whitespace leads:

### Phase 2: Intelligence Layer

**AI financial querying** — Add a conversational interface where users can ask questions about their household's finances in plain English: "How much did we spend on dining last quarter?" "What were our biggest expenses in January?" "Which credit card did we use the most?" The data model is already built to support this — structured transactions with categories, person labels, and card associations. The work is building the chat UI and the LLM integration layer (structured data retrieval → LLM composition → answer). This is the feature that makes the product feel genuinely AI-native rather than just AI-assisted.

**Proactive insights** — Instead of waiting for the user to ask, the AI surfaces observations: "Your household spent 35% more on dining in January than in December. Most of the increase came from Person B's Chase Sapphire." This is what Monarch's "Sparkle" insights and Origin's daily briefings attempt, but applied to household-level data.

**Spend optimization (retrospective)** — After the fact, the system identifies transactions where a different card in the household would have earned meaningfully better rewards. "You charged $340 at restaurants on your Apple Card (1% Daily Cash). Your Chase Sapphire Reserve earns 3x on dining, worth approximately 2x more in value. Consider using the Reserve for dining." This requires encoding earning rates and choosing a point valuation methodology, but it's grounded entirely in cards the household already holds — no new card required, no affiliate conflict, genuinely actionable advice.

**Estimated rewards earnings** — Extend the net card value calculator beyond credits to include estimated rewards earned: category multipliers × actual spend = approximate points/cashback. Combined with spend optimization, this gives the full picture of each card's true return, not just the credits side.

### Phase 3: Optimization + Card Recommendations

**Card recommendation engine** — Based on the household's actual historical spending patterns, identify cards they don't currently hold that would materially improve their total return. "Based on your $4,800 in dining spend last year, an Amex Gold Card would earn 4x points (~$290 in value at 1.5cpp) versus your current best option. After the $250 annual fee, net gain: ~$40." This requires a broader card database covering earning rates across hundreds of cards. It also carries an inherent affiliate revenue conflict if the product is ever monetized around card applications — that tension should be designed around carefully (we would present recommendations without affiliate links by default).

### Phase 3: Household Product

**Proper multi-user authentication** — Each household member has their own login. Invitation flow to join a household. Privacy controls (Honeydue's three-way toggle is the reference: share all / balance only / hidden).

**Flexible household size** — Support for 2-6+ members. Not just couples: roommates, families with adult children, blended households. Zeta's architecture (up to 5 members, per-transaction personal/shared/private labeling) is the gold standard, even though Zeta itself failed.

**Shared vs. personal expense tagging** — Mark transactions as "shared expense," "personal," or assign to a specific household member. Calculate each person's share of shared expenses. This is what Zeta and Honeydue both attempted; Zeta did it best but died, and Honeydue is in decline.

### Phase 4: Market Expansion

**Card benefits database at scale** — Expand from our household's cards to a structured database of hundreds/thousands of cards with their associated credits, benefits, and earning rates. This is the data moat that CardPointers (5,000 cards) and Kudos (3,000 cards) have spent years building.

**Notification system** — Push notifications for expiring credits, unusual spending, monthly summaries. WalletFlo's credit expiration notifications and Monarch's Weekly Recap are the reference designs.

**Subscription billing and pricing** — If this becomes a product, the pricing should reflect the household-first model: one subscription covers the household (like Monarch's approach), not per-person pricing (like MaxRewards). Based on competitive pricing, $8-12/month or $80-100/year for a household is the right range.

**Mobile apps** — Native iOS and Android apps if web-only proves insufficient for the use case.

---

## What Could Go Wrong (Honest Risks)

### Plaid reliability
Every competitor's #1 complaint is bank connectivity. Plaid connections break, require re-authentication, and occasionally lose transaction history. For personal use, this is annoying but manageable. For a product, it's the biggest operational burden.

### Card benefits maintenance
Credit card issuers change their benefits frequently — in fact, while building this proposal, we discovered the Amex Platinum, Chase Sapphire Reserve, and United Explorer had all been overhauled in 2025 with fee increases and major benefit restructuring. Some benefits are time-limited (Chase Reserve's Peloton credit expires Dec 2027, Lyft credit expires Sept 2027, Apple TV+/Music expires June 2027). The data model needs to support benefit expiration dates, not just reset periods. Maintaining accurate, up-to-date data is manual work. At personal scale, this is manageable. At product scale, it is a significant ongoing cost.

### Credit detection accuracy
Automated credit detection is the hardest feature in this MVP. Not all credits map cleanly to transaction patterns — the Amex Platinum airline incidental fee credit is notoriously ambiguous about what qualifies. False positives (suggesting a credit was used when it wasn't) and false negatives (missing a real credit usage) both erode trust. The confirmation-step design mitigates false positives, but false negatives are harder — they require the detection rules to be comprehensive. Starting with our own cards means we can tune rules against our actual transaction patterns.

### LLM accuracy for transaction categorization
Transaction categorization feeds directly into credit detection. A dining transaction miscategorized as "shopping" won't match a dining credit rule. The categorization layer needs to be reliable before the credit detection layer can work well. This creates a dependency chain: Plaid data quality → LLM categorization accuracy → credit detection accuracy.

### Solo builder capacity
This is an ambitious product vision. A PM with some full-stack experience building this solo will need to make aggressive scope tradeoffs. The permission-to-play features alone (Plaid integration, transaction display, categorization, basic dashboard) represent real engineering work. The killer features layer on top. Sequencing carefully — getting the foundation solid before building differentiators — is critical.

### The "good enough" risk
For our personal use case, a well-organized spreadsheet with Plaid export data might be "good enough." The product has to be meaningfully better than a spreadsheet to justify the effort of building it. The automated credit detection and net card value calculator are the features that push past "good enough" — they're things a spreadsheet genuinely can't do well without significant manual upkeep.

---

## Seeded Card Database

The product ships with a pre-populated benefits database for a curated set of flagship cards — specifically, the cards our household actually holds. These will be specified and built into the system before launch, so there's no manual data entry required on day one.

The seeded data per card includes:
- Card name, issuer, annual fee, cardmember year start (if applicable)
- All statement credits: name, amount, reset period (monthly/quarterly/semi-annual/annual/cardmember-year), qualifying criteria (merchant categories, specific merchants, transaction patterns)
- Detection rules for automated credit matching against transactions
- Non-credit perks (lounge access, travel protections, etc.) tracked as informational items

Cards included in the initial seed (see `product/cards-seed.md` for full detail):

| Card | Qty | Annual Fee |
| --- | --- | --- |
| American Express Platinum | 2 (one each) | $895 × 2 |
| Chase Sapphire Reserve | 1 | $795 |
| Chase Sapphire Preferred | 1 | $95 |
| United Explorer | 2 (one each) | $150 × 2 |
| Costco Anywhere Visa (Citi) | 1 | $0 |
| Amazon Prime Rewards Visa | 1 | $0 |
| Apple Card | 1 | $0 |

**Total household annual fees: \~$2,980.** Both Amex and Chase overhauled their premium cards in 2025, raising fees significantly but also adding large new credits: the Amex Platinum now carries ~$2,784/year in credits per card (excluding Equinox); the Chase Sapphire Reserve now carries ~$1,890+ in credits. Total household credits if fully captured: **\~$7,600+/year** against $2,980 in fees — dramatically net-positive, but only if you can actually track and use them all. Managing 30+ credits across 9 cards with different reset periods, booking channels, and qualifying merchants is exactly the problem this product solves.

---

## Summary: What We're Actually Building First

| Layer | What's Included | What's Excluded |
| --- | --- | --- |
| **Permission to play** | Plaid connectivity, transaction import, AI categorization, per-person account labels, basic spending dashboard | Multi-aggregator support, 14,000 institution coverage, real-time sync |
| **Killer Feature 1** | Card perks dashboard with two tracking modes: auto-detect (statement credits) + reminder/checklist (app-loaded credits like Uber Cash). Seeded with household's actual cards. Manual airline selection for Amex airline credit. | 5,000-card database, offer activation |
| **Killer Feature 2** | Net card value calculator: annual fee vs. credits captured, credits remaining, net position per card | Estimated rewards earnings, spend optimization, card-vs-card comparison |
| **Killer Feature 3** | Look-back-first default view with per-person breakdown | Trend analysis, year-over-year comparisons, proactive insights |
| **Data model ready for** | AI financial querying, spend optimization, estimated rewards earnings | Chat UI, optimization engine, card recommendation engine |
| **Deliberately skipped** | AI querying UI, spend optimization, card recommendations, budgeting, offer activation, native apps, multi-household, investment tracking, subscription billing | — |

The MVP is a web app that connects our bank and card accounts, shows us where our household's money went with per-person attribution, automatically detects whether we're using our card credits (or reminds us about the ones it can't detect), and tells us whether each card is earning back its annual fee.

If that's useful to us, it'll be useful to other households like ours. If it's not useful to us, we'll know before investing in scale.
