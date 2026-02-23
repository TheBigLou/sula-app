# Household Card Benefits — Seed Data

*Last verified: February 2026 (via web research)*
*Household: Person A (Louis) + Person B (Wife)*

> **Note on timing:** The Amex Platinum underwent a major overhaul in September 2025 (new fee effective for renewals on/after January 2, 2026). The Chase Sapphire Reserve was overhauled in June 2025. The United Explorer was refreshed in March 2025 (new fee effective for renewals on/after January 1, 2026). All data below reflects the post-refresh benefit structures.
>
> Items flagged ⚠️ still need final confirmation against current cardmember agreements before encoding.

---

## Credit Tracking Modes

**Mode 1 — Auto-detect (statement credit)**
The issuer reimburses the charge as a separate line item on the card statement. We watch for qualifying transactions and surface a suggestion for user confirmation.

**Mode 2 — Reminder (app-loaded, complimentary subscription, or non-transactional)**
The credit is delivered outside the card statement — loaded into a third-party app, granted as a free subscription, or redeemed as a physical perk. No statement credit to detect. The system reminds the user to use/activate it and the user manually confirms.

---

## Card Ownership

| Card | Owner | Annual Fee |
| --- | --- | --- |
| American Express Platinum | Person A | $895 |
| American Express Platinum | Person B | $895 |
| Chase Sapphire Reserve | Person B | $795 |
| Chase Sapphire Preferred | Person A | $95 |
| United Explorer | Person A | $150 |
| United Explorer | Person B | $150 |
| Costco Anywhere Visa (Citi) | Shared | $0 |
| Amazon Prime Rewards Visa (Chase) | Shared | $0 |
| Apple Card | Person A | $0 |

**Total household annual fees: $2,980**

---

## Card 1 & 2: American Express Platinum (× 2)

**Annual fee: $895** (increased from $695 in the September 2025 refresh; effective for existing cardholders at renewal on/after January 2, 2026).

Credits are **per card** — each Platinum has independent credit instances. They do not pool.

---

### $200 Uber Cash
- **Mode:** 2 — Reminder
- **Amount:** $200/year ($15/month; $20 in December)
- **Reset:** Monthly. Does not roll over.
- **How it works:** Amex loads Uber Cash directly into the Uber/Uber Eats account linked to the Platinum card. Applied as a discount on rides/orders. The Amex statement may show $0 or a partial charge.
- **Why not auto-detectable:** Credit is consumed inside the Uber ecosystem before any charge reaches Amex.
- **Reminder cadence:** Monthly. Remind by the 20th if no Uber/Uber Eats transaction has appeared on the card that month.

### $120 Uber One Membership Credit — NEW (Sept 2025)
- **Mode:** 1 — Auto-detect
- **Amount:** Up to $120/year
- **Reset:** Calendar year
- **What qualifies:** Covers the cost of an auto-renewing Uber One membership ($9.99/month or $96/year). Statement credit.
- **Detection approach:** Watch for Uber One membership charges on the Platinum card; Amex reimburses as a statement credit.
- **Detection confidence:** High — specific merchant, predictable amount.
- **Note:** Separate from the $200 Uber Cash. Both benefits apply simultaneously.

### $200 Airline Fee Credit
- **Mode:** 1 — Auto-detect (with manual airline configuration)
- **Amount:** $200/year
- **Reset:** Calendar year (Jan 1 – Dec 31)
- **Selected airline:** Currently **United Airlines** on both cards.
- **What qualifies:** Incidental fees at the selected airline: checked bags, seat selection/upgrades, in-flight food/beverages/Wi-Fi, lounge day passes, pet fees, overweight bag fees, phone booking fees. NOT ticket purchases. NOT United TravelBank (confirmed dead as of early Feb 2026).
- **Configuration needed:** Store selected airline per card. User can change once per calendar year.
- **Detection approach:** Watch for sub-$200 charges from the selected airline that match fee patterns, plus a subsequent "AIRLINE CREDIT" posting.
- **Interaction with United Explorer:** If the Explorer's free bag benefit covers checked bags on United, there are fewer incidental fees available to trigger this credit. This is a spend optimization insight to surface.

### $400 Resy Dining Credit — NEW (Sept 2025)
- **Mode:** 1 — Auto-detect
- **Amount:** $400/year ($100/quarter)
- **Reset:** Quarterly (Q1 Jan-Mar, Q2 Apr-Jun, Q3 Jul-Sep, Q4 Oct-Dec)
- **What qualifies:** Eligible purchases at U.S. restaurants that participate in Resy. Enrollment required.
- **Detection approach:** Watch for charges at Resy-participating restaurant merchants on the Platinum card. Amex posts quarterly credits up to $100.
- **Detection confidence:** Medium — requires knowing which restaurants participate in Resy. A database or API of Resy restaurant merchants would improve detection.
- **⚠️ Verify:** Enrollment mechanism and which specific restaurants qualify.

### $600 Hotel Credit (Fine Hotels + Resorts / The Hotel Collection) — NEW/INCREASED (Sept 2025)
- **Mode:** 1 — Auto-detect (but requires Amex Travel booking)
- **Amount:** $600/year ($300 semi-annually: Jan-Jun, Jul-Dec)
- **Reset:** Semi-annual
- **What qualifies:** Prepaid bookings through American Express Travel at Fine Hotels + Resorts properties or The Hotel Collection properties (2-night minimum for Hotel Collection). Amex posts up to $300 per semi-annual period as statement credits.
- **Detection approach:** Watch for Amex Travel hotel charges on the Platinum card during each semi-annual window, plus corresponding credit postings.
- **Detection confidence:** Medium — the charge comes from "Amex Travel" not the hotel name directly.
- **Note:** This replaced the previous $200 hotel credit. Significantly larger.

### $300 Digital Entertainment Credit (INCREASED from $240)
- **Mode:** 1 — Auto-detect
- **Amount:** $300/year ($25/month, up from $20/month)
- **Reset:** Monthly. Does not roll over.
- **Qualifying services (2026):** Disney+, Disney+ Bundle, ESPN+, Hulu, Paramount+, Peacock, The New York Times, The Wall Street Journal, YouTube Premium, YouTube TV. **Netflix is NOT included.** Must subscribe directly through each provider — payments routed through Apple/Amazon/etc. do NOT qualify.
- **Detection approach:** Watch for subscription charges ≤ $25 from qualifying streaming/digital merchants on the Platinum card, plus corresponding credits.
- **Detection confidence:** High for known qualifying merchants at expected amounts.

### $300 lululemon Credit — NEW (Sept 2025)
- **Mode:** 1 — Auto-detect
- **Amount:** $300/year ($75/quarter)
- **Reset:** Quarterly
- **What qualifies:** In-store or lululemon.com (U.S.) purchases. Excludes lululemon outlets. Enrollment required.
- **Detection approach:** Watch for charges at "lululemon" merchants on the Platinum card. Amex credits up to $75 per quarter.
- **Detection confidence:** High — specific merchant name.

### $200 Oura Ring Credit — NEW (Sept 2025)
- **Mode:** 1 — Auto-detect
- **Amount:** $200/year
- **Reset:** Calendar year
- **What qualifies:** Purchases at ouraring.com only. Ring hardware, not accessories or Oura membership. Enrollment required.
- **Detection approach:** Watch for charges from "Oura" / "ouraring.com" on the Platinum card.
- **Detection confidence:** High — specific merchant, likely a single or few large purchases.

### $209 CLEAR Plus Credit (INCREASED from $189)
- **Mode:** 1 — Auto-detect
- **Amount:** $209/year (matches current CLEAR Plus annual price)
- **Reset:** Calendar year
- **What qualifies:** CLEAR Plus annual membership. Auto-triggered when charged to the Platinum card.
- **Detection approach:** Watch for a ~$209 charge from "CLEAR" or "CLEAR PLUS" on the Platinum card.
- **Detection confidence:** High.

### $155 Walmart+ Credit
- **Mode:** 1 — Auto-detect
- **Amount:** $155/year (~$12.95/month)
- **Reset:** Monthly
- **What qualifies:** Walmart+ monthly membership charge. Does NOT cover the annual plan.
- **Detection approach:** Watch for ~$12.95 charges from Walmart/Walmart+ monthly.
- **Detection confidence:** High.

### $100 Saks Fifth Avenue Credit
- **Mode:** 1 — Auto-detect
- **Amount:** $100/year ($50 semi-annually: Jan-Jun, Jul-Dec)
- **Reset:** Semi-annual
- **What qualifies:** Saks Fifth Avenue stores or saks.com. Does NOT include Saks OFF 5TH.
- **Detection approach:** Watch for "Saks" / "saks.com" charges on the Platinum card.
- **Detection confidence:** High.
- **⚠️ Note:** Saks has filed for bankruptcy. Amex has confirmed the benefit remains active for now, but this could change.

### $120 Global Entry / $85 TSA PreCheck (UPDATED amounts)
- **Mode:** 1 — Auto-detect (long-cycle)
- **Amount:** $120 (Global Entry, up from $100) or $85 (TSA PreCheck)
- **Reset:** Every 4 years (GE) or 4.5 years (TSA Pre)
- **Detection approach:** Watch for ~$120 charge from CBP/US Customs (GE) or ~$85 from TSA PreCheck enrollment.
- **Detection confidence:** High.

### $300 Equinox Credit — NOT APPLICABLE FOR THIS HOUSEHOLD
- **Status:** Confirmed still active on the card ($300/year, $25/month). However, this household does not use Equinox gym or the Equinox+ digital app.
- **Qualifying uses:** Equinox club membership (physical gym) or Equinox+ digital subscription (~$40/month). Activate via platinum.equinox.com. Day passes and purchases through the mobile app/website are excluded.
- **Dashboard treatment:** Show as "opted out / not applicable." Do NOT count as missed value in the net card calculator.

---

### Non-Credit Perks — Amex Platinum (Informational)

| Perk | Description |
| --- | --- |
| Priority Pass Select | Unlimited airport lounge visits + 2 guests at 1,300+ lounges |
| Centurion Lounge | Access to Amex's own lounges at major US airports |
| Delta Sky Club | **10 visits per Medallion Year (Feb 1 – Jan 31)**; unlimited if $75,000 spend on card in calendar year; $50/guest (up to 2 guests); same-day Delta boarding pass required; Basic Economy excluded |
| Fine Hotels + Resorts | Room upgrades, breakfast for 2, early check-in/late checkout, ~$100 property credit (on top of the $600 statement credit) |
| Trip delay insurance | Covers meals/lodging if trip delayed 6+ hours |
| Baggage insurance | Lost, damaged, stolen luggage coverage |
| Purchase protection | 120 days, up to $10,000/claim |
| Extended warranty | +1 year on manufacturer warranties ≤ 5 years |
| No foreign transaction fees | — |

---

## Card 3: Chase Sapphire Reserve (Person B)

**Annual fee: $795** (increased from $550 in the June 2025 overhaul; effective for new applicants June 23, 2025; existing cardholders at anniversary on/after October 26, 2025). Authorized user fee: $195 (up from $75).

---

### $300 Annual Travel Credit
- **Mode:** 1 — Auto-detect (cumulative cap)
- **Amount:** $300/year
- **Reset:** Cardmember anniversary year
- **What qualifies:** Extremely broad: airlines, hotels, car rentals, cruise lines, taxis, rideshare (Uber/Lyft), tolls, parking, trains, buses, travel agencies, campgrounds. Auto-applied.
- **Detection approach:** Track cumulative travel-category spend from anniversary date. Surface running total: "$X of $300 used."
- **Detection confidence:** High.

### $500 The Edit Hotel Credit — NEW (June 2025)
- **Mode:** 1 — Auto-detect (requires Chase Travel booking)
- **Amount:** $500/year ($250 semi-annually: Jan-Jun, Jul-Dec)
- **Reset:** Semi-annual
- **What qualifies:** Prepaid bookings of 2+ nights at "The Edit" properties through Chase Travel. Statement credit.
- **Detection approach:** Watch for Chase Travel hotel charges on the Reserve, plus corresponding credits.
- **Detection confidence:** Medium — charges come from "Chase Travel."
- **⚠️ Verify:** What properties are in "The Edit" collection.

### $250 IHG Hotel Credit — NEW (2026)
- **Mode:** 1 — Auto-detect (requires Chase Travel booking)
- **Amount:** $250/year
- **Reset:** Calendar year (Jan 1 – Dec 31, 2026)
- **What qualifies:** Prepaid Chase Travel bookings at IHG, Montage, Pendry, Omni, Virgin Hotels, Minor Hotels, Pan Pacific properties.
- **Note:** ⚠️ This may be a 2026-only promotional benefit. Confirm whether it recurs annually or expires.
- **Detection confidence:** Medium.

### $300 Exclusive Tables Dining Credit — NEW (June 2025)
- **Mode:** 1 — Auto-detect
- **Amount:** $300/year ($150 semi-annually: Jan-Jun, Jul-Dec)
- **Reset:** Semi-annual
- **What qualifies:** Participating Sapphire Reserve Exclusive Tables restaurants. Statement credit.
- **Detection approach:** Watch for charges at participating restaurant merchants on the Reserve.
- **Detection confidence:** Medium — requires knowing which restaurants participate.
- **⚠️ Verify:** Restaurant participation list.

### $300 StubHub / viagogo Credit — NEW (June 2025)
- **Mode:** 1 — Auto-detect
- **Amount:** $300/year ($150 semi-annually: Jan-Jun, Jul-Dec)
- **Reset:** Semi-annual
- **What qualifies:** Concert and event tickets on StubHub or viagogo. Statement credit.
- **Detection approach:** Watch for "StubHub" or "viagogo" charges on the Reserve card.
- **Detection confidence:** High — specific merchants.

### $250 Apple TV+ and Apple Music — NEW (June 2025)
- **Mode:** 2 — Reminder (complimentary subscription)
- **Amount:** ~$250/year (complimentary subscriptions, not a statement credit)
- **Reset:** Valid through June 22, 2027. Activation required.
- **How it works:** Activate through Chase account or app. Apple TV+ and Apple Music subscriptions become free. Not a statement credit — the subscription is simply complimentary.
- **Reminder cadence:** One-time activation check. Once activated, remind annually to confirm still active. Remind before June 22, 2027 expiration.

### $120 Peloton Credit — NEW (June 2025)
- **Mode:** 1 — Auto-detect
- **Amount:** $120/year ($10/month)
- **Reset:** Monthly. Valid through December 31, 2027.
- **What qualifies:** Peloton All-Access, App One, App+, Guide, or Strength+ subscription. Auto-applied as statement credit.
- **Detection approach:** Watch for Peloton subscription charges ≤ $10/month on the Reserve card.
- **Detection confidence:** High.

### $120 Lyft Credit — NEW (June 2025)
- **Mode:** 2 — Reminder (in-app credit)
- **Amount:** $120/year ($10/month)
- **Reset:** Monthly. Valid through September 30, 2027.
- **How it works:** $10/month loaded as in-app credit within Lyft. Similar to Uber Cash — applied as a discount on rides. The Chase card may see $0 or a partial charge.
- **Why not auto-detectable:** Credit consumed inside the Lyft app before charges reach Chase.
- **Reminder cadence:** Monthly. Remind by the 20th if no Lyft transaction has appeared.

### DashPass + DoorDash Monthly Promos
- **Mode:** 2 — Reminder (complimentary subscription + in-app promos)
- **DashPass:** Free through December 31, 2027. Activation required. After complimentary period, auto-renews at paid rate unless canceled.
- **Monthly promos (CSR-specific):**
  - $5/month off one restaurant order on DoorDash
  - Two $10/month off non-restaurant orders (groceries, retail) on DoorDash
- **How it works:** DashPass and promos are applied within the DoorDash app. Not a statement credit.
- **Reminder cadence:** Remind monthly to use DoorDash promos. One-time activation check for DashPass enrollment.

### $120 Global Entry / $85 TSA PreCheck / NEXUS
- **Mode:** 1 — Auto-detect (long-cycle)
- **Amount:** $120 (GE) or $85 (TSA Pre)
- **Reset:** Every 4 years
- **Detection confidence:** High.

---

### Non-Credit Perks — Chase Sapphire Reserve (Informational)

| Perk | Description |
| --- | --- |
| Priority Pass Select | Unlimited visits + 2 guests |
| Trip delay insurance | 6+ hours, up to $500/ticket |
| Trip cancellation/interruption | Up to $10,000/person |
| Primary car rental insurance | CDW/LDW — can decline rental counter coverage |
| Baggage delay insurance | $100/day for 5 days if bags delayed 6+ hours |
| Purchase protection | 120 days, up to $10,000/claim |
| Extended warranty | +1 year |
| No foreign transaction fees | — |
| 1.5cpp via Chase Travel | Points worth 50% more when redeemed through Chase portal |

---

## Card 4: Chase Sapphire Preferred (Person A)

**Annual fee: $95** (no change).

---

### $50 Annual Hotel Credit
- **Mode:** 1 — Auto-detect
- **Amount:** $50/year
- **Reset:** Cardmember anniversary year
- **What qualifies:** Hotel stays booked through Chase Travel portal.
- **Detection confidence:** Medium.

### DashPass + DoorDash Monthly Promo
- **Mode:** 2 — Reminder
- **DashPass:** Free through December 31, 2027 (activate by Dec 31, 2027). After complimentary period, auto-renews at paid rate.
- **Monthly promo (CSP-specific):** $10/month off one non-restaurant DoorDash order (groceries, retail). Does NOT include the $5/month restaurant promo that CSR gets.
- **Reminder cadence:** Monthly.

### 10% Anniversary Bonus Points
- **Mode:** 2 — Reminder (points, not dollars)
- **Amount:** 10% of prior year's base points earned
- **Reset:** Annual at anniversary
- **Dashboard treatment:** Informational. Not included in dollar-denominated net card value calculation.

### $120 Global Entry / $85 TSA PreCheck
- **Mode:** 1 — Auto-detect (long-cycle)
- **Reset:** Every 4 years
- **Detection confidence:** High.

---

### Non-Credit Perks — Chase Sapphire Preferred (Informational)

| Perk | Description |
| --- | --- |
| Trip delay insurance | 12+ hours, up to $500/ticket |
| Trip cancellation/interruption | Up to $10,000/person |
| Primary car rental insurance | CDW/LDW for personal travel |
| Purchase protection | 120 days |
| Extended warranty | +1 year |
| No foreign transaction fees | — |

---

## Cards 5 & 6: United Explorer (× 2 — Person A and Person B)

**Annual fee: $150** (increased from $95; effective for renewals on/after January 1, 2026).

Credits and perks are **per card**.

---

### $60 Rideshare Credit — NEW (March 2025)
- **Mode:** 1 — Auto-detect (with annual opt-in requirement)
- **Amount:** $60/year ($5/month)
- **Reset:** Monthly. Calendar year. **Requires annual opt-in** — must re-enroll each year via app or phone.
- **What qualifies:** Uber and Lyft rides ONLY. Does NOT cover Uber Eats.
- **Detection approach:** Watch for Uber/Lyft ride charges (not Uber Eats) of any amount on the United Explorer. Chase credits up to $5/month.
- **Detection confidence:** High for Uber/Lyft charges, but must distinguish rides from Uber Eats.
- **Reminder cadence:** Annual re-enrollment reminder (start of each calendar year). Monthly reminder if no rideshare transaction has appeared.

### First Checked Bag Free
- **Mode:** 2 — Reminder (non-financial perk)
- **Value:** ~$35–$45 per bag per segment
- **Applies to:** Cardholder + 1 companion on same reservation when ticket purchased with the Explorer card.
- **Tracking:** Log as "perk used" events per trip.
- **Note:** Both persons carry United Explorer cards → free bags for the household on qualifying United flights. This overlaps with the Amex Platinum airline fee credit — if bags are free, fewer incidental fees trigger the Amex credit.

### 2 United Club One-Time Passes (Annual)
- **Mode:** 2 — Reminder
- **Value:** ~$59–$75 per pass
- **Reset:** 2 passes per card per cardmember anniversary year
- **Tracking:** Track passes used vs. available (0/2). Total household: 4 passes/year.

### 25% Back on United In-Flight Purchases
- **Mode:** 1 — Auto-detect
- **What qualifies:** In-flight Wi-Fi, food, beverages charged to the card.
- **Detection approach:** Watch for United in-flight charges + 25% credit posting.
- **Detection confidence:** Medium.

### $120 Global Entry / $85 TSA PreCheck — NEW (March 2025)
- **Mode:** 1 — Auto-detect (long-cycle)
- **Note:** This is a new benefit added in the March 2025 refresh. Was NOT previously on the United Explorer.
- **Reset:** Every 4 years.

---

### Non-Credit Perks — United Explorer (Informational)

| Perk | Description |
| --- | --- |
| Priority boarding | Group 2 on United flights |
| Expanded award availability | Additional saver award seats |
| No foreign transaction fees | — |

---

## Card 7: Costco Anywhere Visa by Citi (Shared)

**Annual fee: $0** (requires Costco membership ~$65/$130 per year). No changes.

**Earnings:** 4% gas/EV (up to $7K), 3% restaurants/travel, 2% Costco, 1% everything else. Annual Costco Reward Certificate each February.

**Dashboard treatment:** Estimated annual cashback by category. No credits to track.

---

## Card 8: Amazon Prime Rewards Visa by Chase (Shared)

**Annual fee: $0** (requires Prime ~$139/year). No changes.

**Earnings:** 5% Amazon/Whole Foods, 2% restaurants/gas/drugstores, 1% everything else. Plus rotating 10%+ back on select Amazon categories.

**Dashboard treatment:** Informational earnings. No credits to track.

---

## Card 9: Apple Card (Person A)

**Annual fee: $0.** No changes.

**Earnings:** 3% Apple + select partners (Uber, Nike, Walgreens, T-Mobile, etc.), 2% Apple Pay, 1% physical card. Daily Cash deposited daily.

**Dashboard treatment:** Informational earnings. No credits to track.

**Note:** JPMorgan Chase is replacing Goldman Sachs as issuer (announced January 2026, ~24-month transition). No changes to benefits or rewards during transition.

---

## Household Credit Summary

### All Dollar-Denominated Credits (Recurring Annual)

| Credit | Card | Owner | Amount | Period | Mode |
| --- | --- | --- | --- | --- | --- |
| Uber Cash | Amex Platinum | Person A | $200/yr | Monthly | Reminder |
| Uber Cash | Amex Platinum | Person B | $200/yr | Monthly | Reminder |
| Uber One | Amex Platinum | Person A | $120/yr | Annual | Auto-detect |
| Uber One | Amex Platinum | Person B | $120/yr | Annual | Auto-detect |
| Airline Fee | Amex Platinum | Person A | $200/yr | Annual | Auto-detect |
| Airline Fee | Amex Platinum | Person B | $200/yr | Annual | Auto-detect |
| Resy Dining | Amex Platinum | Person A | $400/yr | Quarterly | Auto-detect |
| Resy Dining | Amex Platinum | Person B | $400/yr | Quarterly | Auto-detect |
| Hotel (FHR/THC) | Amex Platinum | Person A | $600/yr | Semi-annual | Auto-detect |
| Hotel (FHR/THC) | Amex Platinum | Person B | $600/yr | Semi-annual | Auto-detect |
| Digital Entertainment | Amex Platinum | Person A | $300/yr | Monthly | Auto-detect |
| Digital Entertainment | Amex Platinum | Person B | $300/yr | Monthly | Auto-detect |
| lululemon | Amex Platinum | Person A | $300/yr | Quarterly | Auto-detect |
| lululemon | Amex Platinum | Person B | $300/yr | Quarterly | Auto-detect |
| Oura Ring | Amex Platinum | Person A | $200/yr | Annual | Auto-detect |
| Oura Ring | Amex Platinum | Person B | $200/yr | Annual | Auto-detect |
| CLEAR Plus | Amex Platinum | Person A | $209/yr | Annual | Auto-detect |
| CLEAR Plus | Amex Platinum | Person B | $209/yr | Annual | Auto-detect |
| Walmart+ | Amex Platinum | Person A | $155/yr | Monthly | Auto-detect |
| Walmart+ | Amex Platinum | Person B | $155/yr | Monthly | Auto-detect |
| Saks Fifth Avenue | Amex Platinum | Person A | $100/yr | Semi-annual | Auto-detect |
| Saks Fifth Avenue | Amex Platinum | Person B | $100/yr | Semi-annual | Auto-detect |
| Travel Credit | Chase Reserve | Person B | $300/yr | Annual | Auto-detect |
| The Edit Hotel | Chase Reserve | Person B | $500/yr | Semi-annual | Auto-detect |
| IHG Hotel ⚠️ | Chase Reserve | Person B | $250/yr | Annual (2026?) | Auto-detect |
| Exclusive Tables | Chase Reserve | Person B | $300/yr | Semi-annual | Auto-detect |
| StubHub | Chase Reserve | Person B | $300/yr | Semi-annual | Auto-detect |
| Peloton | Chase Reserve | Person B | $120/yr | Monthly | Auto-detect |
| Lyft | Chase Reserve | Person B | $120/yr | Monthly | Reminder |
| Hotel Credit | Chase Preferred | Person A | $50/yr | Annual | Auto-detect |
| Rideshare | United Explorer | Person A | $60/yr | Monthly | Auto-detect |
| Rideshare | United Explorer | Person B | $60/yr | Monthly | Auto-detect |

### Complimentary Subscriptions / App-Loaded (Reminder Only)

| Benefit | Card | Owner | Value | Mode |
| --- | --- | --- | --- | --- |
| Apple TV+ / Apple Music | Chase Reserve | Person B | ~$250/yr | Reminder (through June 2027) |
| DashPass + promos | Chase Reserve | Person B | Variable | Reminder (through Dec 2027) |
| DashPass + promo | Chase Preferred | Person A | Variable | Reminder (through Dec 2027) |

### Non-Dollar Perks (Log/Counter Tracking)

| Perk | Card | Owner | Qty/Period |
| --- | --- | --- | --- |
| United Club passes | United Explorer | Person A | 2/year |
| United Club passes | United Explorer | Person B | 2/year |
| Free checked bags | United Explorer | Person A | Per eligible trip |
| Free checked bags | United Explorer | Person B | Per eligible trip |
| Priority Pass lounges | Amex Platinum | Person A | Unlimited |
| Priority Pass lounges | Amex Platinum | Person B | Unlimited |
| Priority Pass lounges | Chase Reserve | Person B | Unlimited |
| Delta Sky Club | Amex Platinum | Person A | 10 visits/year |
| Delta Sky Club | Amex Platinum | Person B | 10 visits/year |

### Long-Cycle Credits (Multi-Year)

| Credit | Card | Owner | Amount | Cycle |
| --- | --- | --- | --- | --- |
| Global Entry / TSA Pre | Amex Platinum | Person A | $120 / $85 | Every 4–4.5 yrs |
| Global Entry / TSA Pre | Amex Platinum | Person B | $120 / $85 | Every 4–4.5 yrs |
| Global Entry / TSA Pre | Chase Reserve | Person B | $120 / $85 | Every 4 yrs |
| Global Entry / TSA Pre | Chase Preferred | Person A | $120 / $85 | Every 4 yrs |
| Global Entry / TSA Pre | United Explorer | Person A | $120 / $85 | Every 4 yrs |
| Global Entry / TSA Pre | United Explorer | Person B | $120 / $85 | Every 4 yrs |

*Note: 6 cards × Global Entry reimbursement = far more coverage than the household needs. Only need to use 2 (one per person) every 4 years. The rest is redundant coverage across cards.*

---

## Net Value Summary

**Total household annual fees: $2,980**

**Total recurring annual credits (dollar-denominated, if fully captured):**
- Two Amex Platinums (excl. Equinox): ~$5,568
- Chase Sapphire Reserve: ~$1,890 (+ DashPass/DoorDash promos + Apple subscriptions)
- Chase Sapphire Preferred: ~$50 (+ DashPass promo)
- Two United Explorers: ~$120
- **Total: \~$7,628+**

**Net position if fully captured: +$4,648/year**

The challenge is obvious: actually USING $7,600+ in credits across this many cards, merchants, booking channels, and reset periods is genuinely difficult to manage manually. This is exactly the problem the product solves.

---

## Items Requiring Verification Before Build

| Item | Card | What to Check |
| --- | --- | --- |
| ⚠️ Resy participating restaurants | Both Platinums | How to determine qualifying Resy restaurants |
| ⚠️ "The Edit" hotel collection | Reserve | Which properties qualify |
| ⚠️ Exclusive Tables restaurants | Reserve | Participating restaurant list |
| ⚠️ IHG hotel credit duration | Reserve | Is this a 2026-only benefit or recurring? |
| ⚠️ Saks bankruptcy impact | Both Platinums | Will Amex honor credit if Saks restructures? |
| ⚠️ Apple TV+/Music activation | Reserve | Verify activation flow |
| ⚠️ United Explorer annual opt-in | Both Explorers | Rideshare credit re-enrollment process |
| ⚠️ Delta Sky Club visit tracking | Both Platinums | How are visits tracked? Can the app detect usage? |
