# Copilot — Spending Tracker Profile

**Website:** https://www.copilot.money
**Pricing:** $13/month or $95/year (~$7.92/month); 30-day free trial, no credit card required; no free tier
**Platforms:** iPhone, iPad, Mac, Apple Watch, and Web (launched December 2025); no Android (planned but not delivered as of February 2026)
**Data connectivity:** Primarily Plaid; also Finicity, MX, and Akoya for institutions not on Plaid; direct integrations with Apple Card (via FinanceKit), Capital One, Coinbase, Venmo, and Amazon; connects 10,000+ institutions
**Last updated:** February 2026

---

## Positioning & Core Value Prop

Copilot positions itself as the premium, design-first personal finance app for Apple users who want an intelligent, automated view of their money without ads, data selling, or hidden partnerships. Founded in 2020 by former Google engineer Andrés Ugarte as a direct Mint alternative, it raised a $6M Series A in March 2024 (led by Adjacent). Its core pitch is automation with agency: AI handles categorization and surfaces insights, but users remain in control and can correct and refine. The tagline is "Do money better." It emphasizes beautiful UI, fast native performance, and a private per-user ML model — a subscription-only model that funds development without compromising user data. With 100,000+ daily-active subscribers and an Apple Design Award Finalist nomination in 2024, it is widely considered the best pure-Apple personal finance app available.

---

## Key Features

- AI-powered transaction categorization with a private, per-user ML model (~90% accuracy out of the box, improves with corrections)
- Natural language transaction search (translates queries into filters in real time)
- Recurring transaction detection and calendar view (auto-identifies subscriptions, bills, income cycles)
- Budget dashboard showing at-risk categories, month-to-date vs. budget tracking, and trending spend
- Cash Flow tab: compare income, spending, and net income across custom date ranges with month-over-month charts
- Investments tab: unified portfolio view across brokerages including real estate value estimates (Zillow-style) and home equity tracking
- Savings Goals (launched May 2025): AI-suggested goals based on cash flow and recurring payments, with time-to-goal estimates
- Month in Review and Year in Review summaries available in the Transactions tab
- Tags for custom transaction labeling (useful for splitting shared vs. personal expenses)
- Apple Watch widget and iOS home screen widgets for real-time spending snapshots
- Net worth tracking across all linked accounts
- Web app (launched December 2025) with enhanced multi-filter transaction browsing
- No ads, no data selling — subscription only

---

## Spending Visibility & Look-Back Experience

Copilot's look-back experience is strong and does not require budget setup before delivering value. Upon onboarding, the app immediately ingests 12–24 months of historical transaction data (the amount varies by institution) and begins categorizing retroactively. The Dashboard tab shows an overview of recent transactions, current month spending by category, and budget progress. The Transactions tab functions as a clean, fast ledger searchable via natural language or multi-dimensional filters (account, category, date, recurring status, review status, tag, type). On macOS and the new web app, performance is described as near-instant with no lag. The Cash Flow section lets users compare spending across any time window without configuration. Month in Review and Year in Review summaries surface at natural calendar boundaries. The primary friction is the initial "training" period — some users report spending up to an hour recategorizing misassigned transactions after first connecting accounts. Once trained, the experience is largely passive and insight-forward. There is no forced budget-creation gate before seeing your data.

---

## Household / Multi-User Support

Copilot's multi-user support is rudimentary and widely cited as its most significant product gap for couples and families. The official mechanism is "Magic Link sharing": the account owner forwards a sign-in email link to a partner, giving them full read/write access to the same single account. There is no separate partner login, no role-based permissions, no simultaneous multi-session design, and no native concept of "my transactions vs. your transactions." Tags can be used manually to label whose spending is whose, and category groups can be arranged by person, but this requires manual discipline. There is no shared budget view where two people contribute independently. The feature request for "Couple/Family Support — Shared Budgets" is the most upvoted item on Copilot's public roadmap but remains unimplemented as of February 2026. Users with a partner on Android cannot share at all since Android is unsupported. The workaround of two separate subscriptions (one per person) doubles cost and means joint transactions get categorized twice. Compared to Monarch Money — which offers true multi-user shared accounts with separate logins for one subscription price — Copilot is materially behind for household use cases.

---

## AI & Intelligence Features

**Transaction categorization**
Copilot Intelligence uses a proprietary per-user machine learning model trained on the user's own reviewed transactions. It considers transaction name, amount, day of week, card used, and other signals. Reported accuracy is approximately 90% on first pass, with continuous improvement as users accept or correct suggestions. The model is private — it does not pool data across users. Merchant name enrichment is present (raw bank strings are cleaned up to readable merchant names). Rule-based overrides can also be set manually, though the UI for managing existing rules has been criticized as hard to navigate.

**Natural language interface**
Copilot supports natural language search in the Transactions tab — users can type queries like "restaurants in January over $50" and the app translates them into filters. This is a search-and-filter interface, not a conversational chat. There is no free-form Q&A, no ask-me-anything assistant, and no ability to query across the full financial picture conversationally (e.g., "how does my grocery spend this year compare to last year by month?"). The NL layer is a convenience layer on top of existing filter dimensions, not a generative AI interface.

**AI-generated insights**
Copilot surfaces proactive insights through the Dashboard (at-risk budget categories, upcoming recurring bills), the Cash Flow tab (month-over-month comparisons), and push notifications for unusual spending. The app detects anomalies — specifically, irregular or unexpected subscription charges are reportedly flagged within 2 hours of posting. Month in Review and Year in Review features generate narrative summaries of spending patterns at calendar milestones. Savings Goals (2025) use AI to recommend goal targets based on cash flow analysis. These are useful but relatively structured; the app does not generate open-ended narrative insights or adaptive commentary beyond these defined surfaces.

**Perks / transaction intelligence**
No card perks or credit card benefits tracking exists. The feature request "See Credit Card Rewards/Points" (covering reward balances, benefits utilization tracking, and points-per-transaction) is on Copilot's public feature request board and has notable upvotes but has not been built. Copilot tracks credit card balances, due dates, utilization, and payment history — but makes no connection between a transaction and what card benefit it might consume or earn.

**Overall AI maturity**
Copilot has strong, well-executed AI for transaction categorization and anomaly detection, but its conversational and generative AI capabilities are shallow — the "intelligence" is primarily a well-trained classifier plus structured insight cards, not a dynamic reasoning layer.

---

## Card Perks / Credits Tracking

Copilot does not track credit card perks, credits, or benefits. There is no feature to log that an Amex Platinum $200 airline credit was used, no detection of whether a Dining Credit was applied to a restaurant charge, and no awareness of which card earns bonus points in which categories. The credit card section of the app shows balance, available credit, utilization rate, and due date — standard account-level data, not benefit-layer data. Multiple user requests for rewards points balances and benefits tracking have been submitted via Copilot's Canny feedback board. As of February 2026, none of these are in the product. This is a complete gap with no partial implementation.

---

## Account & Bank Connectivity

Copilot uses a multi-aggregator strategy: Plaid is the primary connection method, supplemented by Finicity, MX, and Akoya for institutions Plaid does not cover. Direct API integrations exist for Apple Card (via Apple's FinanceKit for real-time sync), Capital One, Coinbase, Venmo, and Amazon. This gives it access to 10,000+ institutions. Connectivity reliability is generally good but not perfect. Known recurring issues include Amex connections that require re-authentication every few weeks, and intermittent Chase refresh failures — both common Plaid-tier problems shared across competing apps. Investment accounts (E*Trade, Robinhood) sync at most once daily, which some users find insufficient for active tracking. HSA accounts (e.g., Optum Bank) are not supported. Copilot explicitly warns users not to delete broken connections, as doing so permanently removes historical transaction data for that account — a UX hazard that has caught users off guard. The help documentation acknowledges that data providers can experience downtime and advises patience over reconnection.

---

## Business Model & Pricing

Copilot is subscription-only with no free tier and no advertising. Pricing as of early 2026:

- **Monthly:** $13/month
- **Annual:** $95/year (~$7.92/month, saving ~39% vs. monthly)
- **Free trial:** 30 days, no credit card required

All features are included in a single subscription tier — there is no freemium feature split. One subscription covers one account (one person's login). Partners who share access use the same subscription, but there is no explicit "family plan" or discounted multi-seat pricing. The business model is explicitly privacy-aligned: Copilot does not sell data, run ads, or engage in affiliate referral partnerships with financial products. Backed by $6M in Series A funding (March 2024), the company is small (founding team + small engineering team) and Apple-platform-native.

---

## User Sentiment

**Loves:**
- Best-in-class UI/UX — frequently described as the most beautiful personal finance app on iOS/Mac
- AI categorization that actually works and learns quickly from corrections
- Fast, native performance on macOS with no lag; no web app sluggishness
- Privacy-first model: no ads, no data selling, no credit card product upsells
- Recurring transaction detection is highly accurate and surfaces forgotten subscriptions
- Strong customer support responsiveness
- Apple ecosystem integration (Apple Card real-time sync via FinanceKit, Apple Watch widgets)
- Honest, transparent company — active public changelog and feature request roadmap
- Month/Year in Review summaries are genuinely useful

**Complaints:**
- No Android app (repeatedly delayed from 2024 target)
- Couples/household support is essentially nonexistent — shared password is a hack, not a feature
- No credit card rewards or perks tracking
- Amex and occasional Chase connections require re-authentication every few weeks
- Investment accounts sync only once daily
- Initial setup requires significant manual recategorization ("training tax")
- Transaction rule management has no UI for viewing or editing existing rules
- No zero-based budgeting or envelope-style budget methodology (deal-breaker for YNAB users)
- No credit score tracking
- Some institutions (Optum HSA) not supported

**Sources:**
- [Copilot Money — Official Site](https://www.copilot.money/)
- [Copilot Pricing](https://copilot.money/pricing/)
- [TechCrunch — Copilot $6M Series A (March 2024)](https://techcrunch.com/2024/03/21/budgeting-app-copilot-mint-6m-series-a/)
- [9to5Mac — Copilot Review: iPad, Cash Flow, Tags (October 2024)](https://9to5mac.com/2024/10/31/copilot-money-review-ipad-cash-flow-tags/)
- [9to5Mac — Copilot is the budgeting app you've been looking for (June 2025)](https://9to5mac.com/2025/06/26/copilot-money-is-the-budgeting-app-youve-been-looking-for/)
- [9to5Mac — Copilot now on the Web (January 2026)](https://9to5mac.com/2026/01/01/copilot-money-brings-clarity-to-your-finances-now-on-the-web/)
- [Money with Katie — Copilot Review (Updated 2026)](https://moneywithkatie.com/copilot-review-a-budgeting-app-that-finally-gets-it-right/)
- [The College Investor — Copilot Review 2026](https://thecollegeinvestor.com/41976/copilot-review/)
- [AICashCaptain — Copilot Review 2025](https://aicashcaptain.com/copilot-money-review-2025/)
- [Productive with Chris — Copilot Review 2025](https://productivewithchris.com/tools/copilot-money/)
- [Copilot Help: Sharing Your Account with a Partner](https://help.copilot.money/en/articles/4523792-sharing-your-account-with-a-partner)
- [Copilot Help: Handling Joint Bank Accounts](https://help.copilot.money/en/articles/9834242-handling-joint-bank-accounts)
- [Copilot Feature Request: Couple/Family Shared Budgets](https://roadmap.copilot.money/feature-requests/p/couplefamily-support-shared-budgets)
- [Copilot Feature Request: Multiple Profiles in One Account](https://copilot.canny.io/feature-requests/p/multiple-profiles-in-one-copilot-account)
- [Copilot Feature Request: Credit Card Rewards/Points](https://copilot.canny.io/feature-requests/p/see-credit-card-rewardspoints)
- [Copilot Intelligence Help Article](https://help.copilot.money/en/articles/8182433-copilot-intelligence-for-spending)
- [Copilot Changelog](https://changelog.copilot.money/)
- [Plaid Customer Story: Copilot](https://plaid.com/customer-stories/copilot/)
- [Monarch Money vs Copilot — Modest Money](https://www.modestmoney.com/monarch-money-vs-copilot/)
- [JustUseApp — Copilot User Reviews](https://justuseapp.com/en/app/1447330651/copilot-the-smart-money-app/reviews)

---

## Strengths (Relative to What We're Building)

- **Look-back is genuinely immediate.** Copilot ingests 12–24 months of history on first sync and starts categorizing retroactively without requiring budget setup. Its Transactions tab, Cash Flow view, and Month/Year in Review features are all designed for understanding past spending — closely aligned with our look-back-first philosophy.
- **AI categorization is the best-in-class on mobile.** The private per-user ML model achieving ~90% accuracy is a real technical differentiator. Any app in this space needs categorization at least this good to be credible.
- **Natural language transaction search** shows there is genuine user demand for and satisfaction with NL-powered navigation of financial data — validates our AI-native direction.
- **Privacy-first subscription model** builds user trust and is a proven willingness-to-pay signal at $95–$156/year.
- **Design bar is high.** Copilot has set user expectations for what a premium finance app looks like on iOS. We should treat its UI as the floor, not the ceiling.

---

## Gaps (Relative to What We're Building)

- **No household/multi-user model.** Copilot has no true multi-user support — no separate partner logins, no transaction labeling by person, no household-level view. This is its most requested unbuilt feature and our clearest structural differentiation opportunity. A household-first architecture (unified accounts labeled by owner, shared and personal spend separated natively) addresses the single biggest complaint from couples using Copilot today.
- **No card perks tracking whatsoever.** Copilot does not track credit card benefits, credits, or perks usage. This is entirely unaddressed territory in the product. Users who hold Amex Platinum, Chase Sapphire, or similar cards get no help understanding what benefits they have left or whether a transaction consumed a credit. This is a complete whitespace we can own.
- **Shallow generative AI.** The NL interface is a filter translator, not a reasoning engine. There is no conversational Q&A, no dynamic narrative insight, no ability to ask open-ended questions about one's finances. Our AI-native approach — where the interface is primarily conversational and the app can reason across all financial data — is a genuine next-generation leap beyond what Copilot offers.
- **Apple-only and single-user priced.** No Android, no family plan. Households where one partner is on Android are excluded entirely. Our cross-platform household model addresses both gaps simultaneously.
- **Budget-forward framing despite look-back features.** Copilot's marketing and structure still centers budgets as the organizing metaphor. Its look-back features are real but secondary. We can lead with understanding (what happened, why, and what it means) rather than compliance (are you on budget?).

---

## Overall Assessment

Copilot is the best Apple-native personal finance app currently available, excelling at AI-powered categorization, clean transaction browsing, and a privacy-respecting subscription model — but it is fundamentally built for a single person managing their own money. Its household support is a barely-functional workaround, its card perks tracking is entirely absent, and its AI is strong at classification but thin on conversational reasoning. For a couple or family that wants unified visibility, person-labeled spending, and benefit-aware transaction intelligence, Copilot leaves significant needs unmet — and its own public roadmap confirms these are known gaps that have remained unbuilt for years. These omissions represent the clearest and most defensible differentiation points for what we are building.
