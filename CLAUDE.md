# Sula — Household Financial Intelligence App

## Project Overview
Local-first web app for a couple to track household spending across all accounts, detect credit card perk usage, and calculate net card value. Built with Next.js 15 (App Router), TypeScript, Prisma/SQLite, Tailwind CSS, shadcn/ui.

## Architecture
- **Business logic** lives in `src/lib/`, not in API routes or components
- **API routes** are thin wrappers: `const result = await service(params); return Response.json(result)`
- **Database**: SQLite via Prisma ORM. Schema in `prisma/schema.prisma`
- **Styling**: Tailwind CSS + shadcn/ui components

## Key Commands
- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npx prisma db push` — Push schema changes to database
- `npx prisma db seed` — Seed card benefits data
- `npx prisma studio` — Visual database browser
- `npx prisma generate` — Regenerate Prisma client after schema changes

## Conventions
- TypeScript strict mode for all files
- Financial amounts stored as Float (Prisma/SQLite); display with 2 decimal places
- Plaid access tokens encrypted with AES-256-GCM before database storage (see `src/lib/crypto.ts`)
- JSON arrays stored as strings in SQLite (parse with `JSON.parse()`)
- Category taxonomy: dining, groceries, travel, shopping, entertainment, utilities, transportation, health, subscriptions, personal, home, gifts, fees, income, transfer, other

## Security
- NEVER commit `.env` files — they contain API keys and the encryption key
- NEVER commit `*.db` files — they contain financial transaction data
- All Plaid access tokens must be encrypted before storage
- App runs on localhost only — no public URLs

## Data Model Key Relationships
- Household → HouseholdMember (1:many)
- HouseholdMember → PlaidItem, Account, Transaction, CardInstance (1:many each)
- CardProduct → CardBenefit → BenefitDetectionRule (reference data)
- CardInstance links a CardProduct to a HouseholdMember
- CreditUsage tracks benefit usage per card instance per period
