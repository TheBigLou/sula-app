/**
 * Prisma seed script for the Sula household financial app.
 *
 * Creates reference data: Household, HouseholdMembers, CardProducts,
 * CardBenefits, and BenefitDetectionRules.
 *
 * Safe to run repeatedly -- uses upsert with deterministic IDs.
 *
 * Execute:  npx prisma db seed
 */

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: process.env["DATABASE_URL"]! });
const prisma = new PrismaClient({ adapter });

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Shorthand: JSON-encode an array for SQLite string columns. */
const json = (arr: string[]): string => JSON.stringify(arr);

/** Deterministic ID builder so upserts are idempotent. */
const id = (...parts: string[]): string =>
  parts
    .map((p) => p.toLowerCase().replace(/[^a-z0-9]+/g, "-"))
    .join("_")
    .slice(0, 80);

// ---------------------------------------------------------------------------
// Types for seed data declarations
// ---------------------------------------------------------------------------

interface DetectionRuleSeed {
  ruleType: "merchant-name" | "merchant-category" | "amount-match" | "custom";
  merchantNames?: string[];
  merchantCategories?: string[];
  amountMin?: number;
  amountMax?: number;
  transactionDescriptionPatterns?: string[];
  notes?: string;
}

interface BenefitSeed {
  name: string;
  description?: string;
  annualValue: number;
  periodValue: number;
  resetPeriod: "monthly" | "quarterly" | "semi-annual" | "annual" | "multi-year";
  resetType?: "calendar" | "cardmember-anniversary" | "custom-dates";
  trackingMode: "auto-detect" | "reminder";
  requiresEnrollment?: boolean;
  enrollmentUrl?: string;
  expiresAt?: Date;
  notApplicable?: boolean;
  notes?: string;
  detectionRules?: DetectionRuleSeed[];
}

interface CardProductSeed {
  name: string;
  issuer: string;
  annualFee: number;
  feeResetType: "calendar" | "anniversary";
  productUrl?: string;
  benefits: BenefitSeed[];
}

// ---------------------------------------------------------------------------
// Seed logic
// ---------------------------------------------------------------------------

async function seedHousehold() {
  const householdId = "household-hellman";

  const household = await prisma.household.upsert({
    where: { id: householdId },
    update: { name: "The Hellman Household" },
    create: { id: householdId, name: "The Hellman Household" },
  });

  const louis = await prisma.householdMember.upsert({
    where: { id: "member-louis" },
    update: { name: "Louis", role: "owner" },
    create: {
      id: "member-louis",
      householdId: household.id,
      name: "Louis",
      role: "owner",
    },
  });

  const wife = await prisma.householdMember.upsert({
    where: { id: "member-wife" },
    update: { name: "Wife", role: "partner" },
    create: {
      id: "member-wife",
      householdId: household.id,
      name: "Wife",
      role: "partner",
    },
  });

  return { household, louis, wife };
}

async function seedCardProduct(card: CardProductSeed) {
  const cardId = id("card", card.issuer, card.name);

  const product = await prisma.cardProduct.upsert({
    where: { id: cardId },
    update: {
      name: card.name,
      issuer: card.issuer,
      annualFee: card.annualFee,
      feeResetType: card.feeResetType,
      productUrl: card.productUrl ?? null,
    },
    create: {
      id: cardId,
      name: card.name,
      issuer: card.issuer,
      annualFee: card.annualFee,
      feeResetType: card.feeResetType,
      productUrl: card.productUrl ?? null,
    },
  });

  for (const benefit of card.benefits) {
    const benefitId = id("benefit", card.issuer, card.name, benefit.name);

    const createdBenefit = await prisma.cardBenefit.upsert({
      where: { id: benefitId },
      update: {
        name: benefit.name,
        description: benefit.description ?? null,
        annualValue: benefit.annualValue,
        periodValue: benefit.periodValue,
        resetPeriod: benefit.resetPeriod,
        resetType: benefit.resetType ?? "calendar",
        trackingMode: benefit.trackingMode,
        requiresEnrollment: benefit.requiresEnrollment ?? false,
        enrollmentUrl: benefit.enrollmentUrl ?? null,
        expiresAt: benefit.expiresAt ?? null,
        active: true,
        notes: benefit.notes ?? null,
        notApplicable: benefit.notApplicable ?? false,
      },
      create: {
        id: benefitId,
        cardProductId: product.id,
        name: benefit.name,
        description: benefit.description ?? null,
        annualValue: benefit.annualValue,
        periodValue: benefit.periodValue,
        resetPeriod: benefit.resetPeriod,
        resetType: benefit.resetType ?? "calendar",
        trackingMode: benefit.trackingMode,
        requiresEnrollment: benefit.requiresEnrollment ?? false,
        enrollmentUrl: benefit.enrollmentUrl ?? null,
        expiresAt: benefit.expiresAt ?? null,
        active: true,
        notes: benefit.notes ?? null,
        notApplicable: benefit.notApplicable ?? false,
      },
    });

    // Upsert detection rules
    if (benefit.detectionRules) {
      for (let i = 0; i < benefit.detectionRules.length; i++) {
        const rule = benefit.detectionRules[i];
        const ruleId = id("rule", card.issuer, card.name, benefit.name, String(i));

        await prisma.benefitDetectionRule.upsert({
          where: { id: ruleId },
          update: {
            ruleType: rule.ruleType,
            merchantNames: rule.merchantNames ? json(rule.merchantNames) : null,
            merchantCategories: rule.merchantCategories
              ? json(rule.merchantCategories)
              : null,
            amountMin: rule.amountMin ?? null,
            amountMax: rule.amountMax ?? null,
            transactionDescriptionPatterns: rule.transactionDescriptionPatterns
              ? json(rule.transactionDescriptionPatterns)
              : null,
            notes: rule.notes ?? null,
          },
          create: {
            id: ruleId,
            cardBenefitId: createdBenefit.id,
            ruleType: rule.ruleType,
            merchantNames: rule.merchantNames ? json(rule.merchantNames) : null,
            merchantCategories: rule.merchantCategories
              ? json(rule.merchantCategories)
              : null,
            amountMin: rule.amountMin ?? null,
            amountMax: rule.amountMax ?? null,
            transactionDescriptionPatterns: rule.transactionDescriptionPatterns
              ? json(rule.transactionDescriptionPatterns)
              : null,
            notes: rule.notes ?? null,
          },
        });
      }
    }
  }

  return product;
}

// ---------------------------------------------------------------------------
// Card product definitions
// ---------------------------------------------------------------------------

const amexPlatinum: CardProductSeed = {
  name: "American Express Platinum",
  issuer: "amex",
  annualFee: 895,
  feeResetType: "calendar",
  benefits: [
    {
      name: "Uber Cash",
      annualValue: 200,
      periodValue: 15,
      resetPeriod: "monthly",
      trackingMode: "reminder",
      notes: "$15/mo, $20 in December. Not auto-detectable; credited in Uber app.",
    },
    {
      name: "Uber One Membership",
      annualValue: 120,
      periodValue: 120,
      resetPeriod: "annual",
      trackingMode: "auto-detect",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Uber One", "UBER ONE"],
        },
        {
          ruleType: "amount-match",
          amountMin: 9.5,
          amountMax: 10.5,
          notes: "Monthly charge ~$9.99, or annual ~$96.",
        },
      ],
    },
    {
      name: "Airline Fee Credit",
      annualValue: 200,
      periodValue: 200,
      resetPeriod: "annual",
      trackingMode: "auto-detect",
      requiresEnrollment: true,
      notes: "Requires selecting an airline. Default: United Airlines.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["United Airlines", "UNITED", "UNITED AIRLINES"],
          notes: "Merchant names depend on selected airline. Defaults shown for United.",
        },
        {
          ruleType: "amount-match",
          amountMax: 200,
        },
      ],
    },
    {
      name: "Resy Dining Credit",
      annualValue: 400,
      periodValue: 100,
      resetPeriod: "quarterly",
      trackingMode: "auto-detect",
      requiresEnrollment: true,
      notes: "Eligible Resy restaurant purchases. Detection confidence: medium.",
      detectionRules: [
        {
          ruleType: "merchant-category",
          merchantCategories: ["dining", "restaurants"],
        },
      ],
    },
    {
      name: "Hotel Credit (FHR/THC)",
      annualValue: 600,
      periodValue: 300,
      resetPeriod: "semi-annual",
      trackingMode: "auto-detect",
      notes:
        "Prepaid bookings through Amex Travel. $300 per half (Jan-Jun, Jul-Dec). Detection confidence: medium.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Amex Travel", "AMEX TRAVEL", "American Express Travel"],
        },
        {
          ruleType: "amount-match",
          amountMax: 300,
        },
      ],
    },
    {
      name: "Digital Entertainment Credit",
      annualValue: 300,
      periodValue: 25,
      resetPeriod: "monthly",
      trackingMode: "auto-detect",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: [
            "Disney Plus",
            "DISNEY+",
            "Disney+",
            "ESPN+",
            "ESPN PLUS",
            "Hulu",
            "HULU",
            "Paramount+",
            "PARAMOUNT+",
            "Paramount Plus",
            "Peacock",
            "PEACOCK",
            "New York Times",
            "NYT",
            "NYTIMES",
            "Wall Street Journal",
            "WSJ",
            "YouTube Premium",
            "YOUTUBE PREMIUM",
            "YouTube TV",
            "YOUTUBE TV",
          ],
        },
        {
          ruleType: "amount-match",
          amountMax: 25,
        },
      ],
    },
    {
      name: "lululemon Credit",
      annualValue: 300,
      periodValue: 75,
      resetPeriod: "quarterly",
      trackingMode: "auto-detect",
      requiresEnrollment: true,
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["lululemon", "LULULEMON"],
        },
      ],
    },
    {
      name: "Oura Ring Credit",
      annualValue: 200,
      periodValue: 200,
      resetPeriod: "annual",
      trackingMode: "auto-detect",
      requiresEnrollment: true,
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Oura", "OURA", "ouraring.com", "OURARING"],
        },
      ],
    },
    {
      name: "CLEAR Plus Credit",
      annualValue: 209,
      periodValue: 209,
      resetPeriod: "annual",
      trackingMode: "auto-detect",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["CLEAR", "CLEAR PLUS", "CLEARME"],
        },
        {
          ruleType: "amount-match",
          amountMin: 189,
          amountMax: 219,
        },
      ],
    },
    {
      name: "Walmart+ Credit",
      annualValue: 155,
      periodValue: 12.95,
      resetPeriod: "monthly",
      trackingMode: "auto-detect",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Walmart", "WALMART", "Walmart+", "WALMART+"],
        },
        {
          ruleType: "amount-match",
          amountMin: 12.5,
          amountMax: 13.5,
        },
      ],
    },
    {
      name: "Saks Fifth Avenue Credit",
      annualValue: 100,
      periodValue: 50,
      resetPeriod: "semi-annual",
      trackingMode: "auto-detect",
      notes: "Does NOT include Saks OFF 5TH.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Saks Fifth Avenue", "SAKS", "saks.com", "SAKS FIFTH"],
        },
      ],
    },
    {
      name: "Global Entry / TSA PreCheck",
      annualValue: 120,
      periodValue: 120,
      resetPeriod: "multi-year",
      trackingMode: "auto-detect",
      notes: "Every 4 years.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Global Entry", "CBP", "US CUSTOMS", "TSA", "TSA PRECHECK"],
        },
        {
          ruleType: "amount-match",
          amountMin: 85,
          amountMax: 120,
        },
      ],
    },
    {
      name: "Equinox Credit",
      annualValue: 300,
      periodValue: 25,
      resetPeriod: "monthly",
      trackingMode: "auto-detect",
      notApplicable: true,
      notes: "Household does not use Equinox. Do not count as missed value.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Equinox", "EQUINOX"],
        },
      ],
    },
  ],
};

const chaseSapphireReserve: CardProductSeed = {
  name: "Chase Sapphire Reserve",
  issuer: "chase",
  annualFee: 795,
  feeResetType: "anniversary",
  benefits: [
    {
      name: "Annual Travel Credit",
      annualValue: 300,
      periodValue: 300,
      resetPeriod: "annual",
      resetType: "cardmember-anniversary",
      trackingMode: "auto-detect",
      notes: "Cumulative cap. Very broad travel category.",
      detectionRules: [
        {
          ruleType: "merchant-category",
          merchantCategories: [
            "travel",
            "airlines",
            "hotels",
            "car-rental",
            "rideshare",
            "taxi",
            "parking",
            "tolls",
            "trains",
            "buses",
          ],
        },
      ],
    },
    {
      name: "The Edit Hotel Credit",
      annualValue: 500,
      periodValue: 250,
      resetPeriod: "semi-annual",
      trackingMode: "auto-detect",
      notes:
        "Prepaid 2+ night bookings at The Edit properties via Chase Travel.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Chase Travel", "CHASE TRAVEL"],
        },
        {
          ruleType: "amount-match",
          amountMax: 250,
        },
      ],
    },
    {
      name: "IHG Hotel Credit",
      annualValue: 250,
      periodValue: 250,
      resetPeriod: "annual",
      trackingMode: "auto-detect",
      expiresAt: new Date("2026-12-31"),
      notes:
        "2026 promotional benefit. Prepaid Chase Travel bookings at IHG, Montage, Pendry, Omni, Virgin Hotels.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Chase Travel", "CHASE TRAVEL"],
        },
      ],
    },
    {
      name: "Exclusive Tables Dining Credit",
      annualValue: 300,
      periodValue: 150,
      resetPeriod: "semi-annual",
      trackingMode: "auto-detect",
      notes: "Participating Sapphire Reserve Exclusive Tables restaurants.",
      detectionRules: [
        {
          ruleType: "merchant-category",
          merchantCategories: ["dining", "restaurants"],
        },
      ],
    },
    {
      name: "StubHub/viagogo Credit",
      annualValue: 300,
      periodValue: 150,
      resetPeriod: "semi-annual",
      trackingMode: "auto-detect",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["StubHub", "STUBHUB", "viagogo", "VIAGOGO"],
        },
      ],
    },
    {
      name: "Apple TV+ and Apple Music",
      annualValue: 250,
      periodValue: 250,
      resetPeriod: "annual",
      trackingMode: "reminder",
      expiresAt: new Date("2027-06-22"),
      notes: "Complimentary subscription. Activation required via Chase account.",
    },
    {
      name: "Peloton Credit",
      annualValue: 120,
      periodValue: 10,
      resetPeriod: "monthly",
      trackingMode: "auto-detect",
      expiresAt: new Date("2027-12-31"),
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Peloton", "PELOTON"],
        },
        {
          ruleType: "amount-match",
          amountMax: 10,
        },
      ],
    },
    {
      name: "Lyft Credit",
      annualValue: 120,
      periodValue: 10,
      resetPeriod: "monthly",
      trackingMode: "reminder",
      expiresAt: new Date("2027-09-30"),
      notes: "$10/month loaded as in-app credit within Lyft.",
    },
    {
      name: "DashPass + DoorDash Promos",
      annualValue: 0,
      periodValue: 0,
      resetPeriod: "annual",
      trackingMode: "reminder",
      expiresAt: new Date("2027-12-31"),
      notes:
        "Free DashPass + $5/mo restaurant promo + two $10/mo non-restaurant promos on DoorDash. Activation required.",
    },
    {
      name: "Global Entry / TSA PreCheck",
      annualValue: 120,
      periodValue: 120,
      resetPeriod: "multi-year",
      trackingMode: "auto-detect",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Global Entry", "CBP", "US CUSTOMS", "TSA", "TSA PRECHECK"],
        },
        {
          ruleType: "amount-match",
          amountMin: 85,
          amountMax: 120,
        },
      ],
    },
  ],
};

const chaseSapphirePreferred: CardProductSeed = {
  name: "Chase Sapphire Preferred",
  issuer: "chase",
  annualFee: 95,
  feeResetType: "anniversary",
  benefits: [
    {
      name: "Annual Hotel Credit",
      annualValue: 50,
      periodValue: 50,
      resetPeriod: "annual",
      resetType: "cardmember-anniversary",
      trackingMode: "auto-detect",
      notes: "Hotel stays booked through Chase Travel.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Chase Travel", "CHASE TRAVEL"],
        },
      ],
    },
    {
      name: "DashPass + DoorDash Promo",
      annualValue: 0,
      periodValue: 0,
      resetPeriod: "annual",
      trackingMode: "reminder",
      expiresAt: new Date("2027-12-31"),
      notes:
        "Free DashPass + $10/mo off one non-restaurant DoorDash order. Does NOT include restaurant promo.",
    },
    {
      name: "10% Anniversary Bonus Points",
      annualValue: 0,
      periodValue: 0,
      resetPeriod: "annual",
      trackingMode: "reminder",
      notes: "10% of prior year's base points earned. Informational only.",
    },
    {
      name: "Global Entry / TSA PreCheck",
      annualValue: 120,
      periodValue: 120,
      resetPeriod: "multi-year",
      trackingMode: "auto-detect",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Global Entry", "CBP", "US CUSTOMS", "TSA", "TSA PRECHECK"],
        },
        {
          ruleType: "amount-match",
          amountMin: 85,
          amountMax: 120,
        },
      ],
    },
  ],
};

const unitedExplorer: CardProductSeed = {
  name: "United Explorer",
  issuer: "chase",
  annualFee: 150,
  feeResetType: "anniversary",
  benefits: [
    {
      name: "Rideshare Credit",
      annualValue: 60,
      periodValue: 5,
      resetPeriod: "monthly",
      trackingMode: "auto-detect",
      requiresEnrollment: true,
      notes:
        "Uber and Lyft rides ONLY. Does NOT cover Uber Eats. Requires annual opt-in.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Uber", "UBER", "Lyft", "LYFT"],
        },
        {
          ruleType: "amount-match",
          amountMax: 5,
        },
      ],
    },
    {
      name: "First Checked Bag Free",
      annualValue: 0,
      periodValue: 0,
      resetPeriod: "annual",
      trackingMode: "reminder",
      notes:
        "Cardholder + 1 companion on same reservation. ~$35-45 per bag per segment.",
    },
    {
      name: "United Club Passes",
      annualValue: 0,
      periodValue: 0,
      resetPeriod: "annual",
      trackingMode: "reminder",
      notes: "2 one-time passes per card per anniversary year. ~$59-75 per pass.",
    },
    {
      name: "25% Back on United In-Flight",
      annualValue: 0,
      periodValue: 0,
      resetPeriod: "annual",
      trackingMode: "auto-detect",
      notes: "In-flight Wi-Fi, food, beverages. 25% credit posting.",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["United Airlines", "UNITED", "UNITED AIRLINES"],
        },
        {
          ruleType: "merchant-category",
          merchantCategories: ["airlines"],
        },
      ],
    },
    {
      name: "Global Entry / TSA PreCheck",
      annualValue: 120,
      periodValue: 120,
      resetPeriod: "multi-year",
      trackingMode: "auto-detect",
      detectionRules: [
        {
          ruleType: "merchant-name",
          merchantNames: ["Global Entry", "CBP", "US CUSTOMS", "TSA", "TSA PRECHECK"],
        },
        {
          ruleType: "amount-match",
          amountMin: 85,
          amountMax: 120,
        },
      ],
    },
  ],
};

const costcoAnywhereVisa: CardProductSeed = {
  name: "Costco Anywhere Visa",
  issuer: "citi",
  annualFee: 0,
  feeResetType: "calendar",
  benefits: [],
};

const amazonPrimeRewardsVisa: CardProductSeed = {
  name: "Amazon Prime Rewards Visa",
  issuer: "chase",
  annualFee: 0,
  feeResetType: "calendar",
  benefits: [],
};

const appleCard: CardProductSeed = {
  name: "Apple Card",
  issuer: "apple",
  annualFee: 0,
  feeResetType: "calendar",
  benefits: [],
};

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("Seeding Sula database...\n");

  // 1. Household & members
  const { louis, wife } = await seedHousehold();
  console.log(`  Household created with members: ${louis.name}, ${wife.name}`);

  // 2. Card products (9 products total -- some are shared / duplicated per person)
  const cards: CardProductSeed[] = [
    amexPlatinum,
    chaseSapphireReserve,
    chaseSapphirePreferred,
    unitedExplorer,
    costcoAnywhereVisa,
    amazonPrimeRewardsVisa,
    appleCard,
  ];

  for (const card of cards) {
    const product = await seedCardProduct(card);
    const benefitCount = card.benefits.length;
    const ruleCount = card.benefits.reduce(
      (sum, b) => sum + (b.detectionRules?.length ?? 0),
      0
    );
    console.log(
      `  Card: ${product.name} (${product.issuer}) -- ${benefitCount} benefits, ${ruleCount} detection rules`
    );
  }

  console.log("\nSeed complete.");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
