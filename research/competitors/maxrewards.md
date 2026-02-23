# MaxRewards — Card Perks Tracker Profile

**Website:** https://maxrewards.com
**Pricing:** Free (Bronze, up to 5 cards, no automation); Gold from $9/mo ($108/yr, user-chosen up to $25/mo); Platinum from $20/mo ($240/yr, up to ~$30/mo) — billed annually only
**Platforms:** iOS, Android, Chrome extension (beta), Firefox extension (beta)
**Last updated:** February 2026

---

## Positioning & Core Value Prop

MaxRewards positions itself as the "#1 App to Manage Credit Cards and Maximize Rewards." Its tagline centers on one core promise: never leave money on the table when you have multiple credit cards. The app targets card-carrying power users — churners, rewards optimizers, and heavy multi-card households — who find it cognitively expensive to manually track which card to swipe, which Amex Offer to activate, and which monthly credits are still unused.

The two-sentence pitch: MaxRewards consolidates all your credit cards into a single dashboard, automatically activates merchant offers (Amex Offers, Chase Offers, BankAmeriDeals, etc.) in the background, and tells you the best card to use at any merchant. It was featured by The Wall Street Journal as a top app for managing credit card perks, praised by Forbes as "impressively useful and hard to beat," and highlighted by CNBC as "one of the best apps for tracking credit card, airline, and hotel rewards."

The company was founded in 2017 by Anik Khan and David Gao (Atlanta-based), launched the app in 2019 via Techstars, and raised a $3M seed round in September 2021 co-led by Dundee Venture Capital and Calano Ventures (total raised: ~$4M). It reported over 800,000 members as of late 2024/2025.

---

## Cards & Issuers Supported

MaxRewards supports **1,000+ credit cards** across all major US issuers. Confirmed supported issuers include:

- American Express (personal and business)
- Chase (personal and business, e.g., Chase Ink)
- Citi
- Bank of America
- Capital One (including Spark business)
- Discover
- Wells Fargo
- Barclays
- Goldman Sachs (Apple Card)
- US Bank
- SunTrust / Truist
- Synchrony

Notably, MaxRewards does **not** currently support manual card entry for unsupported issuers (this is a top-voted feature request on their public board). Hotel and airline loyalty program balances (e.g., Marriott Bonvoy points balance, United MileagePlus) are not tracked — that is AwardWallet's territory. MaxRewards is credit-card-centric, not a loyalty wallet.

---

## Perks & Credits Tracking

- **Statement credits**: Tracked automatically via transaction-level data pulled through MaxRewards' proprietary bank connector (not Plaid). The app monitors whether credits (e.g., $200 Uber Cash on Amex Platinum, $300 Capital One Travel credit) have been used and sends notifications as they approach expiration. However, reliability is a documented weakness — multiple reviewers report the app incorrectly showing credits as unused when they had been redeemed, and vice versa.

- **Recurring credits (monthly/quarterly/annual reset)**: The app tracks reset periods and is designed to automatically update when credits refresh. The notification system is supposed to alert users before the reset window closes. In practice, re-sync failures mean these trackers can fall out of date until the user manually re-authenticates.

- **Rotating bonus categories**: Auto-activated. MaxRewards automatically enrolls cards with rotating quarterly categories — most notably Chase Freedom and Discover it — without requiring the user to log in to each issuer separately and click "activate." This is a meaningful time-saver and a frequently cited user love.

- **Limited-time offers (Amex Offers, Chase Offers, BankAmeriDeals, Citi Merchant Offers)**: This is MaxRewards' flagship differentiator. The Gold tier **auto-activates all eligible offers** in the background across every linked card as soon as they become available. The app uses its own proprietary connector (not Plaid or any commercial aggregator) to log into issuer portals on the user's behalf and click "Add to Card." Users have reported saving $1,000+ annually from offers they never would have remembered to manually activate.

- **Non-credit perks**: Tracked for awareness but not deeply verified. The app surfaces benefit information (e.g., lounge access, travel protections, purchase protections) from a manually maintained card database, but does not independently verify usage against actual transactions. Users cannot log, for example, "I used Priority Pass this month" and have it deducted from an available count.

---

## Transaction Connectivity

MaxRewards connects to live bank and issuer accounts. Critically, it does **not** use Plaid or any commercial aggregation service for its primary connections. Instead, the company has built a proprietary "Connector" technology that logs into issuer portals directly — the same mechanism that enables offer auto-activation, since Plaid's official Chase partnership explicitly does not grant access to Chase Offers, reward balances, or credit scores on Chase.

This custom approach gives MaxRewards access to richer data than any Plaid-based competitor, but it comes with real costs:

- **Re-authentication friction**: Cards frequently unsync, particularly Chase and Amex, requiring users to complete 2FA re-authentication. Independent testing documented re-syncing being required 2–4 times per month per issuer. Users with 5+ business cards report weekly re-authentication as a recurring chore.
- **Issuer blocking**: Chase periodically blocks MaxRewards' connection attempts entirely. MaxRewards acknowledges in its own FAQ that it cannot circumvent these blocks.
- **Sync lag**: Initial sync after linking is slow (offer import can take many minutes). Transaction data is not real-time in the way a banking app's native feed is.

The connection is read-only in terms of user data visibility; the "write" action (offer activation) is performed by the app acting as the user on the issuer website.

---

## AI & Intelligence Features

**Automated perk detection**
MaxRewards' core automation is rules-based, not AI. Offer activation is scripted: the connector logs in, scrapes available offers, and clicks "Add to Card." The "Best Card to Use" recommendation engine reportedly simulates over one million combinations of spend categories, active offers, bonus multipliers, and point valuations to surface the optimal card for a given merchant. This is algorithmic optimization, not a trained ML model.

**Merchant / transaction intelligence**
Transactions are automatically categorized using AI (as stated in the app's own marketing). Business-tier (Platinum) users can categorize using IRS Schedule C categories. Users can override categories and set custom rules. However, the categorization is basic-tier — comparable to what legacy budgeting apps like Mint offered — and incorrect earning rates have been a documented complaint (wrong reward multipliers displayed for specific merchants, leading users to pick a suboptimal card).

**Natural language or conversational interface**
None. There is no chatbot, no natural language query interface, and no conversational feature advertised or documented anywhere in the product as of early 2026. The Chrome/Firefox extension adds a "best card" overlay during online checkout, but it is not NL-based — it triggers based on the merchant URL.

**Proactive recommendations**
Yes, in a structured/automated sense: the app pushes notifications about new offers available on linked cards, expiring credits, and new quarterly bonus category activations. These are trigger-based alerts, not dynamically generated insight narratives. There is no "here's what we noticed about your spending this month" style narrative generation.

**Overall AI maturity**
MaxRewards uses automation and rule-based optimization extensively but lacks any generative AI, conversational interface, or predictive intelligence layer — it is a sophisticated scraper and optimizer, not an AI-native product.

---

## Notification & Reminder System

MaxRewards Gold includes a push notification system covering:

- New offer available on a linked card
- Offer expiring soon (before the window closes)
- Statement credit expiring at end of period (monthly, quarterly, or annual)
- New quarterly bonus category activated (e.g., Chase Freedom Q2 categories)
- Card sync failure (prompting re-authentication)

Notifications are tied to the offer/credit lifecycle and are reactive (event-driven), not proactive or insight-driven. There is no weekly digest, no spending pattern alert, and no "you forgot to use X this month" nudge beyond the expiry window. Users on the free Bronze tier do not receive Gold-tier offer notifications.

The notification system is considered useful by reviewers but its value is capped by the underlying sync reliability problem — if a card is unsynced, the app cannot detect new offers on it.

---

## Household / Multi-User Support

**Not currently supported.** MaxRewards is a single-user, single-account application. There is no ability to invite a partner, share a dashboard, view another household member's cards, or manage a unified family view.

This is a known gap: a "Family Profile" feature request has been posted on MaxRewards' public feedback board and is among the most-discussed open requests. The company has indicated this feature is on the roadmap but it has been delayed repeatedly. As of early 2026, each member of a household must maintain a separate MaxRewards account and separate subscription. There is no mechanism for one spouse to see the other's card offers, credits, or spending — or to receive a recommendation that accounts for both portfolios.

---

## Business Model & Pricing

MaxRewards operates a freemium subscription model with three tiers:

| Tier | Price | Key Limits |
|---|---|---|
| **Bronze (Free)** | $0 | Max 5 cards; no offer auto-activation; no automation |
| **Gold** | $9–$25/mo (user-chosen), billed annually (~$108–$300/yr) | Unlimited cards; full offer auto-activation; credit tracking; notifications |
| **Platinum** | $20–$30/mo, billed annually (~$240–$360/yr) | All Gold features + personal/business spend separation; receipt uploads; Schedule C categorization |

Gold moved to annual-only billing in 2023 (MaxRewards published a blog post explaining this). The "choose your price" model is unusual — users who pay more are essentially subsidizing the product's sustainability.

The company has stated it does not sell user data. Revenue comes entirely from subscriptions. MaxRewards also has a Chrome/Firefox extension in beta that surfaces "best card" suggestions during online checkout, which may serve as an acquisition funnel.

Doctor of Credit noted an earlier "performance pricing" model ($5 per $25 saved); it is not clear if this persists alongside or within the current subscription model.

---

## User Sentiment

**Loves:**
- Auto-activation of Amex Offers and Chase Offers is the #1 loved feature; multiple users report saving $500–$1,500+/year from offers they never would have manually added
- Best Card to Use recommendation is fast and practically useful at checkout
- Rotating bonus category auto-enrollment (Chase Freedom, Discover) saves real clicks
- Consolidated dashboard across many cards is genuinely convenient for power users
- Welcome bonus spend tracker is helpful for meeting minimum spend requirements
- Chrome extension praised for overlay at online checkout
- Forbes, WSJ, and CNBC coverage lend credibility that attracts trial signups

**Complaints:**
- Chronic re-authentication requirement (Chase and Amex frequently disconnect; 2-4 re-syncs per month documented)
- Credit tracking is unreliable — app reports credits as unused when they have been redeemed and vice versa
- Wrong reward earning rates displayed for specific cards/merchants, leading to incorrect card recommendations
- Cannot distinguish between similar card variants (e.g., Amex Platinum personal vs. Amex Gold — offer may be activated on the wrong card)
- Annual-only billing on Gold is a friction point for new users who want to try monthly
- No household/family sharing — a highly requested missing feature
- Sync can be very slow on initial setup and after re-authentication
- Free tier is too restricted to be meaningfully useful (5-card cap, no automation)
- No travel/hotel/airline loyalty point tracking (AwardWallet gap)
- Merchant search in "Best Card to Use" only works by location, not by brand name typing

**Sources:**
- [MaxRewards Official Website](https://maxrewards.com/)
- [MaxRewards App Store Listing](https://apps.apple.com/us/app/maxrewards-rewards-cashback/id1435710443)
- [MaxRewards Google Play Listing](https://play.google.com/store/apps/details?id=com.maxrewards&hl=en_US)
- [MaxRewards Chrome Extension](https://chromewebstore.google.com/detail/maxrewards-maximize-credi/jfncaogcblglilhhheliphggkfbpcddd)
- [Lazy Points Review (2025): Worth $9 a Month?](https://www.lazypoints.com/blog/maxrewards-lazy-review-2025)
- [Kudos Blog: MaxRewards Review 2026](https://www.joinkudos.com/blog/maxrewards-credit-card-app-review)
- [Millennial Money: MaxRewards Review 2025](https://millennialmoney.com/maxrewards-review/)
- [Miles to Memories: MaxRewards Review — Gold Plan](https://milestomemories.com/maxrewards-review-gold-plan/)
- [The College Investor: MaxRewards Review](https://thecollegeinvestor.com/22994/maxrewards-review/)
- [Doctor of Credit: Mobile App That Auto-Activates Cashback Offers](https://www.doctorofcredit.com/mobile-app-that-auto-activates-cashback-offers-on-your-credit-cards/)
- [TechCrunch: MaxRewards Banks $3M](https://techcrunch.com/2021/09/10/maxrewards-banks-3m-to-reveal-best-payment-methods-that-reap-the-most-rewards/)
- [MaxRewards Help: Chase Connector FAQ](https://help.maxrewards.com/en/articles/6885255-chase-connector-faq)
- [MaxRewards Help: How Apps Connect to Banks](https://help.maxrewards.com/en/articles/6886182-how-do-apps-connect-to-banks)
- [MaxRewards Help: What Is MaxRewards Gold?](https://help.maxrewards.com/en/articles/4655178-what-is-maxrewards-gold)
- [MaxRewards Help: Subscription Tiers](https://help.maxrewards.com/en/articles/12747576-what-are-the-maxrewards-subscription-tiers)
- [MaxRewards Feature Request: Family Profile](https://feedback.maxrewards.com/feature-requests/p/family-profile-maxrewards-gold)
- [MaxRewards Platinum Page](https://maxrewards.com/platinum)
- [CNBC: Best Apps for Tracking Credit Card Rewards](https://www.cnbc.com/select/best-apps-for-tracking-your-credit-card-rewards/)
- [BusinessWire: MaxRewards $3M Seed Announcement](https://www.businesswire.com/news/home/20210910005071/en/MaxRewards-Raises-$3-Million-Series-Seed-to-Help-Consumers-Earn-Extraordinary-Benefits-from-Everyday-Spend)

---

## Strengths (Relative to What We're Building)

1. **Offer auto-activation is genuinely defensible.** MaxRewards built proprietary bank connector infrastructure specifically because Plaid cannot do it. Replicating this would require significant engineering investment. This is the feature users care most about and the one most likely to drive subscription conversion.

2. **1,000+ card knowledge base.** MaxRewards has encoded reward structures, earning rates, benefit schedules, and credit reset logic for virtually every card on the market. This is years of manual data maintenance and a real moat if kept current.

3. **Deep issuer integration breadth.** Amex, Chase, Citi, BofA, Capital One, Discover, Wells Fargo, Barclays — covering all of them with a single proprietary connector is a substantial technical achievement that gives MaxRewards data richness competitors using Plaid cannot match.

4. **Brand awareness in the churner/rewards community.** WSJ, Forbes, CNBC, Doctor of Credit, and major points blogs have all covered it. Its mindshare in the r/creditcards and r/churning audience is high, making it the reference point new entrants are compared against.

5. **Chrome/Firefox extension.** A browser-layer "best card to use" overlay at checkout is a smart distribution and retention play — it creates a habit loop outside the mobile app.

---

## Gaps (Relative to What We're Building)

1. **No household or multi-user support.** This is MaxRewards' most glaring structural gap relative to our product vision. Couples and families cannot share a dashboard, view each other's cards, or get unified household-level recommendations. It is a single-person tool by design, and the family feature has been delayed repeatedly with no shipped date.

2. **No look-back or spending analysis.** MaxRewards is entirely forward-looking: best card to use next, which offers to activate, what credits remain. It does not help users understand where their money actually went, what their household spent last quarter, or what patterns emerge in their spending. There is no "retrospective" mode, no trend analysis, and no narrative insight generation.

3. **No AI-native or natural language interface.** The app has zero conversational AI. Users cannot ask "how much did we spend on dining last month?" or "which card gave us the most value in 2025?" Everything is structured UI — dashboards, lists, and buttons. This is a significant opportunity gap as LLM-native interfaces become a user expectation.

4. **Statement credit tracking is unreliable.** The core perks-tracking promise is undermined by sync failures. Users frequently report the app showing wrong credit states. A product that can reliably tell a user "you have $47 left in dining credits this month — here's where to use them" would directly address MaxRewards' most-complained-about failure mode.

5. **Single-user pricing.** There is no family plan, shared subscription, or household tier. A couple needs two subscriptions ($216+/yr) just to get both partners their own dashboard — with no ability to see each other's data. Our household-first pricing model would be a structural advantage.

6. **No debit account, bank account, or investment visibility.** MaxRewards is credit-card-only. It cannot see a household's full financial picture — no checking account balances, no savings, no net worth. Our product can offer a broader view of financial life.

7. **Reliability / trust deficit.** Chronic re-sync requirements, wrong earning rates, and incorrect credit states are recurring themes across reviews. Users have to babysit the app. A product with more reliable data plumbing (even if using a commercial aggregator supplemented by manual input) would have a lower "cognitive maintenance cost."

8. **Non-credit perks are surface-level.** The app lists card benefits from a static database but does not track usage against entitlements in any verified way. There is no mechanism to log "I used my TSA PreCheck reimbursement" and cross-reference it against a transaction.

---

## Overall Assessment

MaxRewards is the clear category leader for single-user credit card offer management and is arguably irreplaceable for the power-user churner who runs 10+ cards and wants offers auto-activated — this is a hard technical moat built on proprietary bank connectors that took years to build. However, its product philosophy is narrow by design: it optimizes forward (what card to use next, which offer to activate) and is entirely blind to backward-looking spending analysis, household context, and conversational intelligence. Its two biggest structural weaknesses — no multi-user/household support and chronic sync reliability failures — are exactly the spaces where a household-first, AI-native product can win. For our target user (a couple or family trying to understand and organize their shared financial life, with card perks as one component of that), MaxRewards solves maybe 20% of the problem while charging for 100% of the solution.

---
