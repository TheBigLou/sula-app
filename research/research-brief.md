# Competitor Research Brief

## Purpose

We are building a personal finance app that occupies a specific niche not well-served by existing products. Before designing anything, we need to deeply understand the competitive landscape — what works, what doesn't, and where the gaps are.

## What We're Building (Context for Research)

A financial organization app for couples and families with these core priorities:

1. **Look-back first** — The primary value is understanding where money has already been spent, across all accounts and people in a household. Budgeting tools come later, not first.
2. **Household-aware** — Multiple people's accounts (labeled by owner) unified into one view. Spending can be sliced by person, card, category, or household-wide.
3. **Card perks tracking** — Premium credit cards come with recurring credits (e.g., Amex Platinum's quarterly Resy credit). Some can be auto-detected via transactions; others require manual check-off. All should be consolidated in one place.
4. **AI-native** — AI is a core part of the product, not an add-on. This includes at minimum: natural language querying of transaction data, AI-driven transaction categorization, and dynamically generated reports/insights. Other AI capabilities are TBD.

## What We Are NOT Building

- A zero-based budgeting tool (not YNAB)
- A savings or investment tracker (not our focus)
- A credit score product

---

## AI-Native: What This Means for Research

Every competitor should be evaluated through an AI lens. The key dimensions to assess:

### Transaction Categorization
Raw transaction data from banks is notoriously messy — merchant names are truncated, inconsistent, or cryptic (e.g., "SQ *BLUBOTTLE 415-" instead of "Blue Bottle Coffee"). AI categorization is the baseline expectation. We want to understand:
- Does the app use ML/AI for categorization, or rule-based/manual?
- How accurate is it, especially for ambiguous merchants?
- Does it learn from user corrections?
- Does it enrich merchant names (clean display names, logos, categories)?

### Natural Language Interface
The emerging frontier: being able to ask "what did we spend on travel last quarter?" and get a meaningful, dynamically composed answer — not a pre-built report. Assess:
- Does the app have any conversational or NL query interface?
- Is it genuinely useful or a thin GPT wrapper?
- Can it answer household-level questions spanning multiple people's accounts?

### AI-Generated Insights & Reporting
Beyond static dashboards — proactive surfacing of patterns, anomalies, and summaries. Assess:
- Does the app generate narrative insights (e.g., "you spent 40% more on dining this month")?
- Does it detect anomalies or flag unusual charges?
- Can it connect perks tracking to transactions (e.g., detect that a Resy credit was used)?

### AI Competitors to Note
Some apps are primarily AI/conversational-first and should be researched even if they lack full account aggregation:
- **Cleo** — Conversational AI finance assistant, Gen Z focused
- **Monarch Money** — Has added AI assistant features
- **Origin** — Has AI-generated insights layer

These should be noted in Track A profiles where relevant. If Cleo warrants its own full profile, file it under Track A.

---

## Research Tracks

### Track A: Spending Trackers
Apps primarily focused on aggregating transactions across bank accounts and credit cards.

**Competitors:** Monarch Money, Copilot, Quicken Simplifi, Rocket Money, SoFi Relay, Origin, Honeydue, Zeta, EveryDollar, YNAB, Cleo

### Track B: Card Perks Trackers
Apps focused specifically on maximizing and tracking credit card benefits, credits, and offers.

**Competitors:** CardPointers, MaxRewards, WalletFlo, Kudos

---

## Research Goals

For each competitor, we want to understand:

- What is their core value proposition and who is their primary user?
- What do they do genuinely well that we should learn from or replicate?
- What are their gaps relative to what we're building?
- What is their business model and pricing?
- What do users complain about most (App Store reviews, Reddit, etc.)?
- What is their approach to the household/multi-user problem?
- What data connectivity do they use (Plaid, Finicity, MX, proprietary, etc.)?
- **What AI features do they have, and how good are they actually?**

---

## Output

Use the appropriate template in this folder:
- `template-spending-tracker.md` for Track A competitors
- `template-perks-tracker.md` for Track B competitors

Save each completed profile as:
- `competitors/[app-name].md`
