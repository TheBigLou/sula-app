# Cleo — Spending Tracker Profile

**Website:** https://www.meetcleo.com
**Pricing:** Free tier (basic budgeting + chatbot); Plus $5.99/mo; Pro $8.99/mo; Builder $14.99/mo (annual plans available)
**Platforms:** iOS, Android (US-focused; UK origin but currently US market primary)
**Data connectivity:** Plaid (read-only bank connection; 12,000+ institutions; some major banks such as Chase, Capital One, PNC have limited compatibility)
**Last updated:** February 2026

---

## Positioning & Core Value Prop

Cleo positions itself as "the world's first AI money coach" — a conversational financial assistant with a distinctly sassy, Gen Z-facing personality. Rather than presenting users with spreadsheets or budget dashboards, Cleo wraps all financial feedback inside a chat interface that alternates between tough love ("Roast me") and encouragement ("Hype me up"). The core pitch is: money advice shouldn't feel like going to the dentist. It should feel like texting a brutally honest friend who happens to know exactly how much you spent on DoorDash last month.

The product is explicitly aimed at younger, financially inexperienced users — primarily US-based Gen Z and millennials — who find traditional budgeting apps intimidating or boring. Cleo's differentiation is personality-driven AI, not feature depth.

Founded in London in 2016, Cleo has now reoriented almost entirely around the US market. As of mid-2025, it has over 850,000 paying subscribers and ~$280M ARR (up from $185M at end of 2024), and is reportedly weighing an IPO with $500M ARR in sight.

---

## Key Features

- AI chatbot with natural language queries about spending history, categories, and account balances
- Automatic transaction categorization (groceries, dining, bills, shopping, etc.) after bank account connection via Plaid
- Spending breakdowns by category and time period, with month-over-month trend comparisons
- "Roast mode" and "Hype mode" — personality-driven positive or negative reinforcement on spending habits
- Budget setting and tracking
- Autosave — automatically transfers a set amount into a Cleo wallet on a schedule, or via round-ups
- High-yield savings account (currently ~3.33% APY; free to all users)
- Cash advance up to $250 (Plus/Builder tiers; subject to eligibility)
- Credit Builder secured card (Builder tier; no interest, no hard credit check; reports to all three bureaus)
- Debt tracking and payoff prioritization (Pro tier)
- Credit score monitoring (Pro tier)
- "Haggle It" — AI-drafts a letter to help negotiate a bill or rent
- "Money Makers" — cashback challenges tied to your most-visited merchants (up to 5 at a time, paid tiers)
- Cleo 3.0 (launched July 2025): two-way voice conversation, long-term memory across sessions, advanced reasoning powered by OpenAI's latest model (optional upgrade)

---

## Spending Visibility & Look-Back Experience

Cleo does offer a look-back capability, but it is conversational rather than visual-first. After connecting a bank account via Plaid, the app automatically categorizes transactions and makes them queryable through chat. Users can ask questions like "How much did I spend at Starbucks last month?" or "Where do I spend the most?" and receive an instant, often humorous, natural language answer.

There is a "Habits" section that presents a visual breakdown of past spending by category, with colorful charts, and Cleo will proactively surface month-over-month comparisons (e.g., "Your dining out increased by $80 last month"). However, the historical depth is limited — Cleo is primarily oriented around the current pay period and recent months, not years of financial history.

The look-back experience is constrained by Cleo's overall design philosophy: it is conversational and reactive, not exploratory. You get what you ask for through the chat interface, or what Cleo surfaces as a proactive nudge. There is no rich dashboard for drilling into individual transactions, no timeline view, and no tagging or annotation layer. Miscategorization is a known issue — the AI incorrectly categorizes some one-time purchases as recurring bills, and cannot reliably distinguish good expenses (e.g., an automatic savings transfer) from discretionary spending.

In short: Cleo can answer "how much did I spend on X?" well, but does not give users the exploratory, transaction-level view that a look-back-first product would offer.

---

## Household / Multi-User Support

None. Cleo is a strictly single-user, single-person product. It explicitly cannot accommodate joint accounts or shared financial views. There is no concept of household, partner, family member, or account labeling by owner.

This is one of Cleo's most significant structural gaps relative to couples or family use cases. Competitors like Monarch Money explicitly support collaborative planning between partners; Cleo does not. Each Cleo account is siloed to one individual and their personally connected bank accounts.

---

## AI & Intelligence Features

**Transaction categorization**

Automatic, AI-driven categorization into standard buckets (groceries, dining, entertainment, bills, shopping, bank charges, etc.). Categorization happens immediately after bank connection. Users on paid tiers can create custom categories. Quality is adequate for high-level spending awareness but has known weaknesses: it can misclassify one-time purchases as recurring bills, and cannot reliably infer context (e.g., a large transfer to a savings account may be flagged as concerning spending).

**Natural language interface**

This is Cleo's core differentiator — describe in detail what you can ask and what the experience is like.

The Cleo chatbot is the primary interface for almost everything in the app. Rather than navigating menus or dashboards, users type (or, with Cleo 3.0, speak) questions and commands in plain English.

What you can actually ask or do:
- "How much did I spend on groceries this month?" — returns a categorized total with optional breakdown
- "How much have I spent at [specific merchant] this week/month?" — merchant-level lookup
- "When was my last paycheck and how much was it?" — income detection from transaction history
- "Where do I spend the most?" — ranked list of top spending categories
- "Show me my bills" — surfaces detected recurring charges
- "How much can I afford to spend this week?" — Cleo infers a rough remaining budget
- "Set me a budget for dining" — creates a category budget
- "Turn on autosave" or "Save $20 this week" — triggers savings automation
- "Can I get a cash advance?" — checks eligibility in chat
- "Roast me" — Cleo responds with pointed, often humorous commentary on specific bad spending decisions (e.g., "You've ordered delivery 11 times this month. That's a personality trait.")
- "Hype me up" — positive reinforcement and encouragement
- "Haggle my [bill name]" — drafts a negotiation letter

What the chat interface cannot reliably do:
- Answer questions about investments, brokerage accounts, or net worth
- Handle questions involving multiple users ("How much did my partner and I spend on groceries?")
- Accurately distinguish between necessary and discretionary spending — roast mode sometimes targets unavoidable expenses like rent or utility payments
- Execute truly complex financial reasoning (the "Advanced Reasoning" feature in Cleo 3.0 requires an optional paid upgrade on top of the subscription)
- Recall very old transaction history (memory is session-summarized, not fully granular)

The personality layer is a genuine differentiator. Cleo hires comedy writers to craft its voice, and the chatbot is designed to feel like a "sassy big sister." However, this same personality has attracted criticism: the roast mode's assumption that large expenditures are always bad is a blunt instrument that fails for users with legitimate large expenses.

With Cleo 3.0 (July 2025), the interface gained two-way voice conversation and persistent long-term memory — Cleo can now recall goals and habits from past sessions and adapt its coaching accordingly. This is a meaningful step toward a genuinely personalized financial assistant rather than a stateless chatbot.

**AI-generated insights**

Cleo proactively surfaces insights such as: month-over-month spending changes by category, unusual charges, bill increase alerts, and "you could save X if you cut Y." These are delivered in chat and as push notifications. The insights are personality-infused — they feel more like a nudge from a friend than a data alert. However, the insight engine is relatively shallow: it operates on a rule-like heuristic layer rather than truly sophisticated pattern recognition. The "Advanced Reasoning" mode in Cleo 3.0, powered by OpenAI's latest model, is positioned to address this, but it is an optional paid add-on and not the default experience.

**Perks / transaction intelligence**

Cleo has no credit card perks or rewards tracking. The app does not detect, surface, or help manage credit card statement credits, annual benefits, or reward categories from third-party cards. Cleo's own "Money Makers" cashback feature is a gamified challenge system tied to merchants the user already frequents — it is not third-party card perks tracking. Cleo's Credit Builder card itself earns no rewards.

**Overall AI maturity**

Cleo demonstrates that personality-driven conversational AI can dramatically lower the engagement barrier for personal finance, but its AI remains surface-level: fast and fun for simple lookups, but not yet capable of deep financial reasoning, multi-account complexity, or household-aware intelligence.

---

## Card Perks / Credits Tracking

Not supported. Cleo does not track credit card benefits, statement credits, annual travel credits, dining credits, or any third-party card perks. The app is unaware of the rewards structure of any card in the user's wallet.

Cleo's own card product (Credit Builder secured card) has no rewards, no welcome bonus, and no perks beyond credit reporting to the three bureaus. The "Money Makers" cashback challenge is a Cleo-native feature — users pick up to five merchants and earn a small cashback percentage on spending at those merchants through Cleo — but this is entirely distinct from tracking benefits owed from existing premium credit cards.

---

## Account & Bank Connectivity

- Connection method: Plaid (secure, read-only OAuth or credential-based connection)
- Breadth: Plaid supports 12,000+ financial institutions globally
- Known gaps: Chase, Capital One, and PNC have historically had friction with Plaid; not all banks supported by Plaid are compatible with Cleo's Cash Advance feature specifically
- Account types: Checking and savings accounts; does not connect to investment/brokerage accounts, 401(k), or credit cards for tracking purposes
- Multi-account support: A user can connect multiple bank accounts under one Cleo profile, but there is no way to share or merge accounts across users
- Reliability issues: User reviews frequently cite "waiting for connection" loops, bank disconnection errors (especially after app updates), and stale balance data as pain points

---

## Business Model & Pricing

Cleo operates a freemium subscription model with a secondary revenue stream from transaction interchange fees.

| Tier | Price | Key Unlocks |
|---|---|---|
| Free | $0 | Basic budgeting, spending tracking, AI chatbot, savings wallet, 3.33% APY savings |
| Plus | $5.99/mo | Cash advances up to $100, custom spending categories, additional saving features |
| Pro | $8.99/mo | Debt tracking, credit score insights, cash advances (if eligible), APY on savings |
| Builder | $14.99/mo | All Pro features + credit-building secured card, cash advances up to $250 |
| Mobile (add-on) | +$40–$45/mo | Adds a mobile phone plan to Plus/Pro/Builder |

Annual plans and bundled pricing are available at a discount.

Revenue breakdown (2023 actuals): $39.2M from subscriptions (>50% of $65.9M total revenue); remainder from interchange fees on card transactions and cash advance express fees. As of July 2025: ~$280M ARR, 850,000+ paying subscribers, profitable. Possible IPO being evaluated with $500M ARR in sight.

**Important context — FTC action:** In March 2025, the FTC sued Cleo for deceptively marketing cash advances (advertising hundreds of dollars available when most users received far less, and charging express fees for "instant" transfers that still weren't fast). Cleo settled within a day for $17 million in consumer refunds, and agreed to a 10-year consent order requiring clear fee disclosures and a simple cancellation mechanism. This has materially damaged Cleo's reputation with cash-advance-seeking users.

---

## User Sentiment

**Loves:**

- The chatbot personality — users genuinely find it entertaining and less intimidating than traditional finance apps
- "Roast me" and "Hype me" modes as motivational tools
- Getting a quick spending summary via chat ("how much did I spend on food this month?") is fast and satisfying
- Autosave features and the savings challenges help users who struggle to save manually
- Free high-yield savings account is a genuine value add
- The app makes financial awareness feel accessible and non-judgmental for first-timers

**Complaints:**

- Cash advance limits are far lower than advertised; many users receive $20–$40 despite the marketing implying $250 is typical
- Subscription billing issues: double charges, charges continuing after cancellation, difficulty getting refunds
- Customer support is almost entirely AI-driven, making it nearly impossible to resolve billing or technical issues with a human
- Technical reliability: frequent "waiting for connection" errors, bank disconnection, app crashes after updates
- Roast mode lacks nuance — it flags rent, savings transfers, and other necessary expenses as problematic
- Categorization errors (one-time purchases flagged as recurring bills, etc.)
- Express transfer fee on top of subscription feels like a bait-and-switch
- Lifetime App Store average: 4.5 stars (280,000+ reviews), but recent November 2025 ratings dropped to 2.9 — a significant decline tied to billing complaints and the FTC settlement fallout

**Sources:**
- [Cleo official website](https://web.meetcleo.com/)
- [Cleo 3.0 launch announcement — BusinessWire](https://www.businesswire.com/news/home/20250729690058/en/Cleo-Becomes-the-First-AI-Money-Coach-That-Speaks-Thinks-and-Remembers)
- [Cleo 3.0 launch — Yahoo Finance](https://finance.yahoo.com/news/cleo-becomes-first-ai-money-130000784.html)
- [FinanceBuzz Cleo review 2026](https://financebuzz.com/cleo-review)
- [LendEdu Cleo review 2026](https://lendedu.com/blog/cleo-app-review/)
- [The Penny Hoarder Cleo review](https://www.thepennyhoarder.com/budgeting/cleo-app-review/)
- [Kudos Cleo review 2025](https://www.joinkudos.com/blog/cleo-budgeting-app-review-your-ai-financial-assistant-in-2025)
- [Debt Hammer Cleo review](https://debthammer.org/cleo-app-review/)
- [CashAdvanceApps complaints](https://www.cashadvanceapps.com/reviews-complaints/cleo-reviews-complaints/)
- [FTC press release — $17M settlement](https://www.ftc.gov/news-events/news/press-releases/2025/03/cash-advance-company-cleo-ai-agrees-pay-17-million-result-ftc-lawsuit-charging-it-deceives-consumers)
- [Sacra — Cleo revenue and growth](https://sacra.com/c/cleo/)
- [Cleo hits $150M ARR — Sifted](https://sifted.eu/articles/ai-fintech-cleo-return-uk)
- [Cleo toward $500M ARR](https://www.connectingthedotsinfin.tech/cleo-considers-ipo-as-revenue-soars-toward-500m-arr/)
- [NeoReach — Cleo Gen Z marketing](https://neoreach.com/campaign-teardown-cleo/)
- [Cleo help center — bank support](https://web.meetcleo.com/faqs/en/articles/5488385-what-banks-does-cleo-support)
- [Cleo help center — what is Cleo Plus](https://web.meetcleo.com/faqs/en/articles/3325792-what-is-cleo-plus)
- [SuperAGI AI budgeting comparison](https://superagi.com/comparing-the-best-ai-budgeting-apps-cleo-monarch-money-and-personal-capital-in-a-head-to-head-review/)

---

## Strengths (Relative to What We're Building)

Cleo's AI-first approach gets several things genuinely right that are worth studying:

- **Conversational query as primary UX.** Cleo proves that users will engage deeply with a chat interface when it feels approachable. The NL query model ("how much did I spend on X?") is fast, low-friction, and broadly understood — no dashboard navigation required. This validates the AI-native interaction model as viable for mainstream consumers, not just power users.
- **Personality as engagement mechanism.** The roast/hype dynamic drives retention and word-of-mouth in a category (personal finance) that is historically low-engagement. Comedy writers on staff is a telling signal: brand voice matters as much as feature depth when competing for attention.
- **Proactive coaching, not just passive display.** Cleo pushes insights to users rather than waiting for them to open a dashboard. The nudge model (spending alert, savings challenge, month-over-month comparison) is a more actionable approach than a graph the user has to interpret themselves.
- **Lowering the activation barrier.** For users who find budgeting intimidating, Cleo's personality-first approach genuinely works. The look-back query model ("just ask Cleo") is less overwhelming than staring at a spreadsheet of transactions.
- **Long-term memory (Cleo 3.0).** The addition of cross-session memory is the right direction for AI-native finance — a coach who remembers your goals and history is fundamentally more useful than a stateless chatbot. This is an important design signal.

---

## Gaps (Relative to What We're Building)

- **No household or multi-user support.** Cleo is strictly single-user. There is no way to link a partner's accounts, label transactions by household member, or build a shared financial view. This is the most fundamental gap for a couples/family product.
- **No look-back depth.** Cleo surfaces recent spending on demand, but the experience is not designed for exploration. There is no transaction-level drill-down, no timeline view, no tagging layer, no ability to browse history freely. "Look-back first" as a product philosophy is incompatible with Cleo's chat-only interface.
- **No credit card perks or rewards tracking.** Cleo has zero awareness of what benefits a user's existing credit cards carry. It cannot detect unused annual credits, approaching expiration dates, or which card to use for a given purchase to maximize rewards.
- **AI is personality-first, not reasoning-first.** Cleo's AI excels at tone and engagement, but its financial reasoning is shallow. It cannot distinguish necessary from discretionary spending, struggles with accurate recategorization, and the "advanced reasoning" capability is a paid add-on, not the default. For a product that aspires to be genuinely AI-native (not just AI-flavored), this is a meaningful limitation.
- **Single financial institution model.** Cleo is built around a simple checking/savings account view. It has no conception of a full financial picture — no investments, no credit card balances, no net worth, no multi-owner account labeling.
- **Trust and reliability issues.** The FTC settlement, billing complaints, and recent App Store rating decline (4.5 lifetime to 2.9 recent) signal that Cleo has optimized for growth at the expense of product quality and user trust. For a product built on financial data, trust is a prerequisite.
- **No manual entry or card perk overrides.** Because everything flows through Plaid, there is no mechanism for users to manually add accounts, annotate transactions, or track anything that doesn't appear in a bank feed.

---

## Overall Assessment

Cleo is the clearest proof-of-concept that AI-native personal finance can drive mass consumer engagement — its conversational interface, personality layer, and proactive coaching have built a $280M ARR business in a category dominated by traditional dashboard apps. However, Cleo reveals an equally important limitation of the AI-first approach as currently practiced: when personality and engagement mechanics become the product, financial reasoning depth gets deprioritized. Cleo's AI is excellent at answering simple lookup queries with charm, but it cannot handle household complexity, deep historical exploration, or the kind of contextual intelligence (who spent what, why, and with which card) that a couples/family finance tool demands. The opportunity for what we're building is to take Cleo's lesson about conversational interfaces seriously, while building the data model and reasoning depth that Cleo has not.
