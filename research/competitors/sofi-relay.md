# SoFi Relay — Spending Tracker Profile

**Website:** https://www.sofi.com/relay
**Pricing:** Free (no paid tier)
**Platforms:** iOS (13.0+), Android (8.0+), Web (sofi.com/insights)
**Data connectivity:** Plaid (14,000+ institutions); manual asset entry for accounts not supported by Plaid
**Last updated:** February 2026

---

## Positioning & Core Value Prop

SoFi Relay is a free account aggregation and financial tracking tool embedded inside the broader SoFi app. It is not a standalone product — it is a customer acquisition and retention tool for SoFi's banking, lending, and investment products. SoFi explicitly marketed it as the best Mint replacement after Mint shut down in 2024.

The core pitch is: link all your financial accounts in one place, get a net worth snapshot, track spending by category, monitor your credit score weekly, and set monthly spending targets — all at no cost. SoFi frames Relay around passive financial awareness ("understand what's happening with your money") rather than active budgeting or behavioral change. It is aimed at SoFi customers first; non-SoFi users can sign up for a free account to access it, but the value proposition is weaker without SoFi products.

---

## Key Features

- Net worth dashboard aggregating all linked accounts (checking, savings, credit cards, investment, retirement, loans, mortgages, physical assets such as home or car)
- Spending breakdown by category with month-over-month trend charts (Cash Flow page)
- Hierarchical transaction categorization: 15+ primary categories and 100+ sub-categories (updated 2024)
- Monthly spending targets per category (soft budget goals, not zero-based budgeting)
- Weekly credit score monitoring via TransUnion VantageScore 3.0 with change alerts
- Transaction export to CSV
- Access to SoFi financial planners (1-on-1 sessions, included for SoFi members)
- Cash Coach: an AI-powered insights engine (launched Q3 2025, see AI section)
- Manual asset entry (home value, car value) for net worth completeness
- SoFi accounts (checking, savings, invest, personal loans, student loans) auto-sync; external accounts link via Plaid

---

## Spending Visibility & Look-Back Experience

Relay supports historical spending views and allows users to change the date range to drill into category details and view month-over-month trends. The Cash Flow page provides longer-term visibility into monthly spending and savings trends, including an annual savings rate view.

However, Relay is **not look-back-first by design**. The primary interface surfaces current-month spending and net worth snapshots. Historical exploration is secondary and requires deliberate navigation rather than being the default entry point. There is no prominent "what did I spend last quarter on X" home screen; users have to navigate into categories and adjust date filters manually.

The 2024 category redesign improved depth — moving from a flat list to a two-level hierarchy — and enabled CSV export for users who want to do deeper analysis in a spreadsheet. But the in-app historical analysis tools remain limited: no year-over-year comparison view, no custom date ranges beyond what the filter allows, and no natural narrative summaries of past spending.

**Transaction data retention:** No published cap, but the experience is optimized for current and recent months. Deep historical scrolling is functional but not a featured workflow.

---

## Household / Multi-User Support

SoFi Relay has **no native household or multi-user mode.** Each Relay account is tied to a single SoFi user login. There is no mechanism to invite a partner, share a dashboard, or view another person's linked accounts within one unified household view.

SoFi does offer joint Checking and Savings accounts (added in 2023–2024), and joint account holders can each see the shared account in their own Relay. But "joint account visible to both" is not the same as a household view — it means two people each see only their own individual + joint SoFi accounts, not a single consolidated view of all accounts owned by both people.

For couples or families, the practical workaround is to share login credentials — which SoFi does not endorse and which creates privacy and security issues. There is no "owner" label on accounts, no per-person spending breakdown, and no concept of "household total" that spans two logins.

This is a significant structural gap and would require a meaningful product redesign to address.

---

## AI & Intelligence Features

**Transaction categorization**

Relay uses automated categorization that assigns transactions to a hierarchical category/sub-category system (15+ top-level, 100+ sub-categories). Categories can be manually corrected by users. The categorization quality is broadly comparable to Plaid's underlying data enrichment — adequate for common merchants, imperfect for edge cases. SoFi updated the category system in 2024 to add more granularity. There is no visible ML model the user interacts with; corrections do not appear to feed a personalized learning loop in any documented way.

**Natural language interface**

There is **no natural language query interface** in Relay as of February 2026. Users cannot type or speak a question like "how much did I spend on dining last month?" and get an answer. All exploration is menu- and filter-driven.

**AI-generated insights**

SoFi launched **Cash Coach** in Q3 2025. It is an AI-powered insights engine that scans a user's SoFi and linked external accounts to identify "suboptimal" cash utilization — for example, cash sitting in a low-yield external savings account that could earn more at SoFi, or a high credit card balance accruing interest that could be paid down. Cash Coach surfaces these observations as actionable nudges.

Critically, Cash Coach is **SoFi-product-centric**: its recommendations push users toward SoFi's own savings accounts, credit cards, and loans. It is an upsell engine with an AI interface, not a neutral spending advisor. SoFi has announced a "SoFi Coach" expansion for 2026 to cover investments, goal-setting, subscription cancellation, and reward optimization.

**Perks / transaction intelligence**

No dedicated perks or benefits tracking. Relay does not detect or alert users when a credit card benefit has been earned or used, does not track statement credits across cards, and does not flag transactions that count toward a card's spending threshold. SoFi's own credit card rewards (2% cashback) are tracked within the SoFi card portal, not through Relay as a cross-card intelligence layer.

**Overall AI maturity**

Early-stage and commercially motivated: Cash Coach is the only AI-native feature and it is oriented toward cross-selling SoFi products, not providing neutral financial intelligence.

---

## Card Perks / Credits Tracking

Relay has **no card perks or statement credits tracking feature.** It tracks credit card balances and transactions as part of net worth and spending aggregation, but it does not:

- Know what benefits are attached to any given card
- Alert users when a credit (e.g., $15/month streaming credit) has or has not been used
- Track progress toward spending thresholds for sign-up bonuses
- Detect which category a transaction falls into for rewards-earning purposes

SoFi's own credit card (the SoFi Unlimited 2% card) surfaces reward points within its card interface, but this is isolated to SoFi card holders and is not part of a broader multi-card perks intelligence layer in Relay. For users with premium cards (Amex Platinum, Chase Sapphire, etc.), there is no benefit tracking at all.

This is one of the most significant capability gaps relative to what our app is building.

---

## Account & Bank Connectivity

- **Technology:** Plaid exclusively for external account linking
- **Supported account types:** Checking, savings, investment accounts, retirement accounts, credit cards, student loans, personal loans, mortgages (manual), physical assets (manual)
- **Institutions supported:** Plaid's network covers 12,000–14,000+ institutions; the vast majority of major US banks, credit unions, and brokerages are supported
- **SoFi-native accounts:** Auto-synced without Plaid (SoFi Checking/Savings, SoFi Invest, SoFi personal loans, SoFi student loans); SoFi Mortgage must be added manually
- **Known issues:** Plaid-dependent connections can break when institutions change authentication flows; users report needing to periodically re-authenticate or reconnect accounts. Some institutions (notably some credit unions and smaller banks) are not available through Plaid at all
- **Data freshness:** Not real-time; Relay pulls data on a periodic sync schedule. Transaction data may lag 1–2 business days behind the actual institution

---

## Business Model & Pricing

Relay is entirely free, with no premium tier and no ads. SoFi does not charge for account aggregation, credit monitoring, or spending tracking.

The business model is a classic loss-leader / funnel strategy within SoFi's "Financial Services Productivity Loop":

1. **Customer acquisition:** Relay attracts users (especially post-Mint refugees) who may not yet be SoFi customers
2. **Cross-sell into core products:** Once a user has linked all their accounts, Cash Coach and other nudges surface opportunities to move money to SoFi savings accounts, apply for SoFi loans, or open SoFi Invest accounts
3. **Data-informed credit decisions:** SoFi has acknowledged (and users have discovered) that financial data visible through Relay can be used in credit decisioning — at least one forum thread documented a credit limit reduction on a SoFi credit card shortly after a user linked external accounts showing high balances, implying SoFi's underwriting team or automated systems use Relay data. SoFi has not publicly confirmed this practice but has not denied it either
4. **Retention:** Relay increases stickiness for existing SoFi users by making the app a daily financial habit

SoFi reported 41% fee-based annualized revenues as of April 2025 (loan platform fees, interchange, referrals, insurance). Relay contributes indirectly through all of these by keeping users engaged and driving product adoption.

---

## User Sentiment

**Loves:**
- Genuinely free with no catch on the surface — users appreciate zero cost for net worth tracking and credit monitoring
- Good visual design; the SoFi app is rated 4.8/5 on the App Store and 4.4/5 on Google Play overall
- The net worth dashboard is well-regarded as a single-pane-of-glass view
- Solid breadth of account type support (linking a car, home, investment accounts in one view)
- Useful for SoFi-ecosystem users who want everything in one app
- CSV export gives power users an escape hatch for deeper analysis
- Weekly credit score alerts are considered genuinely useful

**Complaints:**
- Plaid connections break frequently, requiring manual re-authentication; this is a persistent and widely reported frustration
- SoFi uses Relay data for credit decisions — users feel surveilled by their own budgeting tool (documented on myFICO forums: credit card limit cuts within 24 hours of linking accounts showing high utilization at other banks)
- No household or shared-login support; partners have no way to view finances together
- Categorization errors are common and do not appear to learn from corrections
- Relay is secondary to SoFi's banking features; it receives less development attention than SoFi's core banking/lending/invest products
- The 2024 category redesign broke users' existing custom category assignments, causing frustration
- Cash Coach recommendations are transparently self-serving (always pushing SoFi products), reducing trust in the "coaching"
- Not useful for non-SoFi users who want a neutral financial tracking tool — the product experience is visibly oriented toward SoFi product adoption
- Investment account data can be delayed or incomplete

**Sources:**
- [CNBC Select — SoFi Relay Review](https://www.cnbc.com/select/sofi-relay-review/)
- [SoFi Support — What is SoFi Relay?](https://support.sofi.com/hc/en-us/articles/360039736392-What-is-SoFi-Relay)
- [SoFi Support — How does SoFi obtain information from external accounts?](https://support.sofi.com/hc/en-us/articles/4423151796749-How-does-SoFi-obtain-information-from-external-accounts)
- [SoFi Support — Why did Relay change and where did my categories go?](https://support.sofi.com/hc/en-us/articles/41277840922893-Why-did-Relay-change-and-where-did-my-categories-go)
- [SoFi Support — What type of accounts can I link?](https://support.sofi.com/hc/en-us/articles/360040143051-What-type-of-accounts-can-I-link)
- [Barbara Friedberg Personal Finance — SoFi Relay Review](https://barbarafriedbergpersonalfinance.com/sofi-relay-review/)
- [myFICO Forums — DO NOT USE SOFI RELAY (if you have a SoFi credit card)](https://ficoforums.myfico.com/t5/General-Credit-Topics/DO-NOT-USE-SOFI-RELAY-if-you-have-a-SoFi-credit-card/td-p/6738498)
- [American Banker — SoFi targets bank deposits with consumer-facing AI](https://www.americanbanker.com/news/sofi-targets-bank-deposits-with-consumer-facing-ai)
- [Personal Finance Freedom — SoFi Relay Review](https://www.personalfinancefreedom.com/sofi-relay-review-heres-everything-you-need-to-know/)
- [SoFi — Switch to SoFi Relay (Mint Alternative)](https://www.sofi.com/mint-to-relay/)
- [Plaid — SoFi Customer Story](https://plaid.com/customer-stories/sofi/)
- [SoFi Support — How do I access SoFi Relay?](https://support.sofi.com/hc/en-us/articles/4423063919245-How-do-I-access-SoFi-Relay)
- [SoFi Support — What are the benefits of SoFi Relay?](https://support.sofi.com/hc/en-us/articles/360040143191-What-are-the-benefits-of-SoFi-Relay)

---

## Strengths (Relative to What We're Building)

- **Price as a moat:** Free forever is a powerful default, especially for users who would be adopting a new finance app for the first time. We will need a clear and compelling answer to "why pay for this when SoFi Relay is free?"
- **Brand trust and ecosystem depth:** SoFi is a regulated bank with FDIC insurance and a well-known brand. Users already in the SoFi ecosystem have a low-friction path to Relay. For those users, switching cost is meaningful
- **Breadth of account types:** Relay supports a genuinely comprehensive range of assets and liabilities, including physical assets, which few free tools offer
- **Plaid coverage:** 14,000+ institutions means Relay can aggregate nearly any US account, which is table-stakes infrastructure we will also need to match
- **Credit monitoring:** Weekly TransUnion score monitoring is a sticky engagement feature that we do not currently plan to replicate
- **Cash Coach AI roadmap:** SoFi's stated 2026 roadmap for "SoFi Coach" (investments, goal-setting, subscription optimization, reward points) shows they are moving toward some of the intelligence layer we are building — though from a conflicted, SoFi-product-centric angle

---

## Gaps (Relative to What We're Building)

- **No household or multi-user mode:** This is a fundamental architectural gap. Relay is built for a single user. It cannot model a couple's finances with two logins, per-person account labeling, or a shared household view. Our household-first model is meaningfully differentiated here
- **Not look-back-first:** Relay's default experience is current-month net worth and spending. Historical exploration is buried behind filters. Our planned look-back-first UX — where understanding past behavior is the entry point, not an afterthought — is a genuine product philosophy difference
- **No card perks or benefits tracking:** Relay has zero awareness of credit card benefits, statement credits, or earning category bonuses. This is entirely absent. Our perks tracking feature has no competition from Relay whatsoever
- **No natural language queries:** Users cannot ask Relay a question in plain English. All exploration is menu-driven. Our AI-native query layer is a material UX differentiator
- **AI is commercially compromised:** Cash Coach nudges users toward SoFi products, not toward their best financial outcome. Our AI can be positioned as neutral and household-serving — a meaningful trust differentiation
- **Categorization does not improve:** Relay does not appear to learn from user corrections in a personalized way. Our AI categorization pipeline, if designed well, should compound in accuracy over time per household
- **No couple/family financial narrative:** Relay produces no joint summary, no "your household spent X more than last quarter on dining," no AI-generated spending story. Our intended experience of surfacing patterns in plain language for a household is entirely missing
- **Data used against users:** The documented practice of using Relay data for credit decisions is a significant trust issue. A product built with no lending business has no incentive to surveil users' external finances

---

## Overall Assessment

SoFi Relay is a competent free account aggregator and a legitimate post-Mint default for individual users who want basic net worth tracking and credit monitoring at no cost — but it is not a serious competitor to what we are building. It is architecturally individual-first, budget-goal-centric (rather than look-back-first), and entirely without household, perks-tracking, or natural language AI features. Its most significant competitive threat is not feature parity but price: "free" is a powerful attractor that will pull some potential users away before they evaluate depth. Our response must be a product that is so clearly better for couples and families — with household-aware views, AI that actually explains the past, and perks intelligence — that the value justifies a price. The trust gap created by SoFi's data-for-credit-decisions practice is also a real opening: a neutral tool with no lending conflict of interest can own that positioning explicitly.
