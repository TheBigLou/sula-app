# CardPointers — Card Perks Tracker Profile

**Website:** https://www.cardpointers.com
**Pricing:** Free tier available; CardPointers+ at ~$72/year (7-day free trial); Lifetime plan at $240 (sometimes discounted to $168 via affiliate links)
**Platforms:** iOS, iPadOS, macOS, watchOS, Android, Apple Vision Pro, web app, browser extension (Chrome, Safari, Firefox)
**Last updated:** February 2026

---

## Positioning & Core Value Prop

CardPointers is an indie-built app (founded by Emmanuel Crouvisier, launched 2019) whose core promise is: stop leaving credit card value on the table. It targets power users — people with 3+ cards who want to squeeze every bonus, offer, and credit out of their wallets without doing the legwork manually.

Its two signature value props are:

1. **Auto-enrollment in card-linked offers** — when you log into your bank's website, the CardPointers browser extension silently adds every available Amex Offer, Chase Offer, Citi Merchant Offer, Bank of America Deal, Wells Fargo offer, and US Bank offer to your cards in the background. This is the most-cited "killer feature" across all reviews.

2. **Card-use recommendation at point of sale** — the AutoPilot feature uses your phone's location to surface, in real-time on your lock screen and Apple Watch, which card in your wallet earns the highest multiplier at the merchant in front of you. A camera feature also lets you photograph a storefront to get an instant recommendation.

CardPointers was featured as Apple's App of the Day in May 2025. It claimed a redesign for iOS 26 (Liquid Glass UI, Apple Intelligence integration) in late 2025, branded as CardPointers 7.

---

## Cards & Issuers Supported

CardPointers maintains a database of over **5,000 credit cards from 900+ banks across 258 countries**. For US users, explicitly supported issuers include:

- American Express
- Chase
- Citibank
- Bank of America
- Capital One
- Wells Fargo
- US Bank
- Barclaycard
- Synchrony Bank
- Discover
- Goldman Sachs (Apple Card)
- USAA
- Navy Federal Credit Union
- Comenity Bank
- Target Bank
- USAA, 1st Financial Bank, CreditOne Bank, Elan Financial Services

For offer auto-enrollment specifically, the browser extension supports six banks: **Amex, Chase, Bank of America, Citi, Wells Fargo, and US Bank**.

**Coverage gaps:** No specific gaps are publicly documented. The breadth (5,000+ cards) suggests comprehensive US coverage for mainstream cards. Some user reviews noted that rewards data for obscure or smaller-issuer cards can be inaccurate and cannot be corrected by the user. International coverage exists but the offer auto-enrollment is US-centric.

---

## Perks & Credits Tracking

- **Statement credits** (e.g., airline fee, hotel, dining): Tracked as a **manual check-off system**. CardPointers maintains a per-card benefits database (e.g., the Chase Sapphire Reserve $300 travel credit, or the Amex Gold $7/month Dunkin' credit) and presents a dashboard of available vs. used credits. Users must manually mark credits as redeemed; the app does not connect to transactions to detect actual usage. The app tracks whether a credit resets on a cardmember-year or calendar-year basis.

- **Recurring credits** (monthly/quarterly/annual reset): Yes — reset schedules are tracked in the database. The app knows, for example, that certain Amex credits reset monthly. Push reminders (CardPointers+ feature) alert users before credits expire unused.

- **Rotating bonus categories** (e.g., Chase Freedom 5%): Yes — CardPointers tracks quarterly and semi-annual rotating categories in its card database and factors them into card recommendations. The "Pointers" tab shows multipliers per purchase category for all your cards simultaneously, updated when new quarter categories take effect.

- **Limited-time offers** (Amex Offers, Chase Offers): This is CardPointers' headline feature. The browser extension auto-enrolls all available offers from the six supported banks whenever you log into those sites. Smart Lists / Offer Alerts can notify you via daily email or in-app when a new offer matching your criteria appears across any supported bank. You can configure auto-favoriting of matched offers.

- **Non-credit perks** (lounge access, hotel status, travel protections): Listed in the card benefits database and viewable in-app, but these are **informational only** — there is no usage tracking, no lounge visit counter, and no travel protection claim reminders. They function as a reference layer, not an active tracking system.

---

## Transaction Connectivity

CardPointers does **not** connect to bank accounts via Plaid or credential-based aggregation and does **not** ingest actual transaction data. This is an explicit product decision framed as a privacy and security feature: "CardPointers never requires bank logins and stores no sensitive data."

The one exception is the **browser extension**, which is activated passively when you log into supported bank websites in your own browser session. In that moment, the extension reads available offers from the bank page and enrolls them — but it does not store or transmit transaction history or balances.

For credit tracking, CardPointers uses a **"Savings Card"** concept (a manual ledger where users record when they redeem an offer or use a credit) and a **"Linking a purchase"** feature that lets users manually associate a transaction with a specific offer to mark it used.

In short: **fully manual for benefit redemption tracking; no live transaction feed.**

---

## AI & Intelligence Features

**Automated perk detection**
CardPointers cannot detect from actual transactions that a credit was triggered or used. There is no transaction feed to analyze. Perk detection is limited to: surfacing which credits exist for your cards, and letting you manually check them off. Offer enrollment is automated (via the browser extension hook at login), but detecting whether an enrolled offer was actually triggered at checkout is not supported.

**Merchant / transaction intelligence**
CardPointers' recommendation engine matches merchants to card bonus categories using a database of merchant category codes and its own store data. The AutoPilot feature uses GPS location to identify the nearest merchant and recommend the best card in real-time. A camera feature can photograph a storefront for the same result. However, this is forward-looking ("which card should I use here?"), not backward-looking ("did my Amex Platinum Resy credit apply to this charge?"). There is no ability to match a past transaction to a specific perk.

**Natural language or conversational interface**
CardPointers 7 (late 2025) introduced an **"Ask AI" button** powered by Apple Intelligence Foundation Models, running on-device. Users can tap "Ask AI" or invoke via Siri ("Siri, ask CardPointers...") to ask questions about their cards or offers in natural language. This is early-stage and on-device only — it is not a cloud-hosted conversational AI, and its scope appears to be answering questions about card data already in the app rather than open-ended financial analysis.

**Proactive recommendations**
Yes — this is a core feature. AutoPilot pushes real-time card recommendations to the lock screen and Apple Watch based on the user's physical location. The browser extension surfaces relevant offers at checkout on supported merchant and bank sites. Smart Lists proactively alert users when new matching offers appear.

**Overall AI maturity**
Recommendations are rules-based (MCC + location matching) with a thin Apple Intelligence layer for NL queries added in late 2025; there is no ML-driven personalization, no transaction-derived inference, and no generative financial insight — it is a well-executed lookup engine, not an AI-native product.

---

## Notification & Reminder System

CardPointers+ subscribers receive:

- **Push notifications** before credits expire (timing is configurable; users can toggle notifications on/off per-benefit)
- **In-app Smart Lists / Offer Alerts** that notify when new card-linked offers arrive matching user-defined criteria (e.g., "notify me of any Amex Offer over $20 at a grocery merchant")
- **Daily email digests** for Smart List matches (at most one per day)
- **Lock screen Live Activities** via AutoPilot showing current best-card recommendation (updated in real-time as location changes)
- **Apple Watch** and **CarPlay** widgets showing AutoPilot recommendations

The free tier lacks push reminders and offer alerts; manual checking of the app is required.

---

## Household / Multi-User Support

CardPointers added "User Profiles" (marketed as "P2 support" — a term from the travel hacking community for a spouse or partner) in **CardPointers 6 (September 2024)**.

How it works:
- The primary user enters their P2's name and email and sends them an invitation to link accounts.
- Each person must have their own CardPointers account; only the initiating user needs a CardPointers+ subscription.
- Once linked, the primary user can see all of the P2's cards and offers, filter any app view by the P2's portfolio, track offer redemptions for the P2, and modify the P2's card and offer data.
- The relationship is **one-directional by default** — the P2 does not see the primary user's data unless the invitation is set up in reverse as well.
- All cards from all linked profiles can be viewed together in a combined view.

This is a workable "household" feature for travel-hacking couples where one person manages the strategy. It is not a true shared household model — there is no unified dashboard with labeling by owner, no joint spend analysis, and no role-based access control. It is better described as a "manager + managed" relationship than genuine co-management.

---

## Business Model & Pricing

CardPointers is an indie bootstrapped product built and operated by a single founder (Emmanuel Crouvisier). Revenue comes from:

1. **Subscription fees** — CardPointers+ at approximately $72/year or ~$240 lifetime (often discounted via affiliate/creator partnerships to $168)
2. **Affiliate revenue sharing** — CardPointers partners with credit card review/travel content creators in a revenue-sharing model; referral links generate affiliate commissions when users apply for cards via the app
3. **Content creator partnerships** — promotional discount codes distributed by travel/points bloggers and podcasters drive subscriber acquisition

The app claims most CardPointers+ members save over $750/year in additional rewards and redeemed credits. There is no advertising, no data brokering, and no bank/issuer sponsorship disclosed.

---

## User Sentiment

**Loves:**
- Auto-enrollment of offers is the single most-praised feature — users describe it as "ridiculously convenient" and say it has paid for the subscription many times over
- AutoPilot location-based card recommendation is praised for in-store shopping; "which card?" decisions become effortless
- Founder (Emmanuel) is frequently cited for fast, personal customer support — multiple reviews mention him replying within hours and following up
- Depth of card database — most mainstream US cards are pre-populated with accurate bonus categories, meaning minimal setup
- Apple-platform polish — the app is well-reviewed for UI quality, Apple Watch integration, CarPlay widgets, and Vision Pro support
- Multi-card power users specifically love the "Pointers" tab that shows all multipliers across all cards side by side

**Complaints:**
- Statement credit tracking is fully manual — the app cannot detect whether you actually used a credit, creating a gap between "available" and "redeemed"
- Data accuracy issues for less-common cards: users report some rewards rates and fees are pre-populated incorrectly and cannot be overridden
- Chrome/Safari extension can be laggy; offer enrollment sometimes requires multiple page refreshes to complete
- UI can slow down or act inconsistently, especially when editing multipliers; data occasionally fails to sync across devices
- Free tier is quite limited — effectively functions as a demo without offer auto-add or push reminders
- Not useful for users with one or two cards — the value proposition is multi-card complexity
- The P2/household feature is one-directional and not intuitive to set up
- No actual spend tracking or lookback — the app has no view into what you have actually spent or what credits you have actually received; it only tracks what you tell it

**Sources:**
- [CardPointers official site](https://cardpointers.com/)
- [CardPointers Pro/pricing page](https://cardpointers.com/pro/)
- [CardPointers Help Center — free vs. paid](https://help.cardpointers.com/article/31-differences-between-free-vs-paid)
- [CardPointers Help Center — P2/household support](https://help.cardpointers.com/article/52-user-profiles-p2-support)
- [CardPointers Help Center — AutoPilot](https://help.cardpointers.com/article/5-autopilot)
- [CardPointers Help Center — Linking a purchase](https://help.cardpointers.com/article/32-linking-a-purchase-to-your-account)
- [CardPointers Help Center — Offer alerts / Smart Lists](https://help.cardpointers.com/article/67-smart-lists-offer-alerts)
- [FrequentMiler — CardPointers offers review](https://frequentmiler.com/cardpointers/)
- [UpgradedPoints — CardPointers review](https://upgradedpoints.com/credit-cards/cardpointers-review/)
- [WalletHacks — CardPointers App Review 2025](https://wallethacks.com/cardpointers-app-review/)
- [Clark.com — CardPointers Review: 5 Things To Know](https://clark.com/credit-cards/cardpointers-review/)
- [ThoughtCard — CardPointers Review](https://thoughtcard.com/cardpointers-review/)
- [BoldlyGo — CardPointers App Review](https://boldlygo.world/cardpointers-app-review/)
- [BakerOnTech — CardPointers ultimate app review](https://bakerontech.com/cardpointers-the-ultimate-app-for-managing-your-credit-card-benefits/)
- [Kudos blog — CardPointers vs Kudos comparison](https://www.joinkudos.com/blog/cardpointers-credit-card-app-review)
- [9to5Mac — CardPointers updated for iOS 26](https://9to5mac.com/2025/11/30/cardpointers-updated-for-ios-26-with-liquid-glass-design-apple-intelligence-more/)
- [AppAdvice — CardPointers 7 Liquid Glass redesign](https://appadvice.com/post/cardpointers-7-is-here-with-liquid-glass-redesign-and-much-more/782394)
- [RevenueCat — CardPointers case study](https://www.revenuecat.com/customers/cardpointers/)
- [SubClub Podcast — Emmanuel Crouvisier interview](https://subclub.com/episode/from-zero-revenue-to-a-full-time-gig-in-less-than-a-year-emmanuel-crouvisier-cardpointers)
- [DaddyTravelsNow — How CardPointers Helps Maximize Perks (Nov 2025)](https://daddytravelsnow.com/2025/11/21/how-cardpointers-helps-me-maximize-my-credit-card-perks/)
- [PointMeToFirstClass — CardPointers automation review](https://pointmetofirstclass.com/automate-your-points-strategy-with-cardpointers/)
- [App Store listing](https://apps.apple.com/us/app/cardpointers-for-credit-cards/id1472875808)
- [Google Play listing](https://play.google.com/store/apps/details?id=com.cardpointers.app&hl=en_US)

---

## Strengths (Relative to What We're Building)

- **Dominant in offer auto-enrollment.** Auto-adding Amex, Chase, Citi, BoA, Wells Fargo, and US Bank offers via browser extension is a best-in-class moat. Users who have this feature rarely want to give it up. Any competing perk tracker will face this bar.
- **Massive card database.** 5,000+ cards with pre-populated bonus categories, annual fees, and benefit details means near-zero setup friction for common cards. Users don't have to manually research their own card's perks.
- **AutoPilot is a strong in-store UX.** The location-based live recommendation on the lock screen and Apple Watch is genuinely novel and hard to replicate without deep OS integration.
- **P2/household support exists.** Competitors in this space often have no multi-user support at all. CardPointers has a working if limited version.
- **Loyal, passionate power-user base.** The churning/travel-hacking community actively recommends it. This is a high-intent audience that talks loudly and influences others.
- **Apple ecosystem depth.** Vision Pro, CarPlay, watchOS, iPad, Spotlight integration, Apple Intelligence — CardPointers treats Apple platforms as a first-class priority, giving it an edge with iOS-heavy demographics.

---

## Gaps (Relative to What We're Building)

- **No transaction connectivity.** CardPointers has no view into actual spend. It cannot tell you what you bought, how much you spent in a category, or whether a credit was actually applied to your bill. Our look-back-first approach is the opposite of CardPointers' posture.
- **No spending analysis or household finance view.** There is no "how much did our household spend on dining last month?" capability. CardPointers is entirely forward-looking (what should I use?) rather than backward-looking (how did we actually spend?).
- **Credit redemption tracking is fully manual.** Users must self-report when they use a credit. There is no automatic detection that, for example, the Amex Platinum airline fee credit was triggered by a Delta baggage charge. A true AI-native approach should be able to infer this from transaction data.
- **P2 model is clunky and one-directional.** It is a "manager/managed" structure, not a true shared household. A couple cannot both have symmetric access by default. There is no household-level view of all cards and their credit utilization as a unit.
- **AI is cosmetic, not structural.** The "Ask AI" feature added in late 2025 is an on-device Apple Intelligence integration that answers questions about in-app card data. It is not a reasoning layer over actual financial behavior, and there is no generative insight, anomaly detection, or natural language querying of real spend.
- **No categorization of actual transactions.** Since there is no transaction feed, CardPointers cannot categorize spend, surface insights, or identify patterns across the household's real financial behavior.
- **Not designed for financial organization.** CardPointers is a perks optimization tool, not a financial clarity tool. It does not help couples understand their combined finances, reconcile accounts, or make sense of where their money is going.
- **Single-founder indie scale.** As of 2026, CardPointers is a one-person operation. Feature velocity, reliability, and enterprise-level data agreements (e.g., card issuers sharing perk update APIs) are constrained accordingly.

---

## Overall Assessment

CardPointers is the best-in-class tool for credit card rewards maximization among power users, with an especially defensible position in offer auto-enrollment and point-of-sale card recommendations. However, it is fundamentally a forward-looking optimization tool with no transaction data, no actual spend tracking, and no household financial view — making it a narrow competitor that occupies only one slice of what we are building (Track B: Card Perks Tracking). The core gap is that CardPointers tells you what perks exist and reminds you to use them, but it cannot tell you whether you actually used them, how your household spending relates to your perks, or surface AI-driven insights grounded in real financial behavior. A product that combines genuine transaction connectivity with perk tracking and a household-aware view would be meaningfully differentiated from everything CardPointers currently does or appears to be building toward.
