import { NextRequest, NextResponse } from "next/server";
import { exchangePublicToken, getAccounts, getInstitution } from "@/lib/plaid";
import { encrypt } from "@/lib/crypto";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  const { publicToken, memberId } = await request.json();

  if (!publicToken || !memberId) {
    return NextResponse.json(
      { error: "publicToken and memberId are required" },
      { status: 400 }
    );
  }

  try {
    // Exchange public token for access token
    const { access_token, item_id } = await exchangePublicToken(publicToken);

    // Get institution info
    let institutionId: string | null = null;
    let institutionName: string | null = null;
    try {
      const accountsData = await getAccounts(access_token);
      if (accountsData.item.institution_id) {
        institutionId = accountsData.item.institution_id;
        const institution = await getInstitution(institutionId);
        institutionName = institution.name;
      }
    } catch {
      // Non-critical — continue without institution info
    }

    // Store PlaidItem with encrypted access token
    const plaidItem = await prisma.plaidItem.create({
      data: {
        householdMemberId: memberId,
        accessToken: encrypt(access_token),
        itemId: item_id,
        institutionId,
        institutionName,
      },
    });

    // Fetch and store accounts
    const accountsData = await getAccounts(access_token);
    const accounts = await Promise.all(
      accountsData.accounts.map((account) =>
        prisma.account.upsert({
          where: { plaidAccountId: account.account_id },
          update: {
            name: account.name,
            officialName: account.official_name,
            currentBalance: account.balances.current,
            availableBalance: account.balances.available,
          },
          create: {
            plaidItemId: plaidItem.id,
            householdMemberId: memberId,
            plaidAccountId: account.account_id,
            name: account.name,
            officialName: account.official_name,
            type: account.type,
            subtype: account.subtype || null,
            mask: account.mask,
            currentBalance: account.balances.current,
            availableBalance: account.balances.available,
          },
        })
      )
    );

    return NextResponse.json({
      plaidItemId: plaidItem.id,
      institutionName,
      accounts: accounts.map((a) => ({
        id: a.id,
        name: a.name,
        type: a.type,
        subtype: a.subtype,
        mask: a.mask,
      })),
    });
  } catch (error: unknown) {
    const err = error as { response?: { data?: unknown }; message?: string };
    console.error("Plaid exchange-token error:", err.response?.data || err.message || error);
    return NextResponse.json(
      { error: "Failed to connect account", details: err.response?.data || err.message },
      { status: 500 }
    );
  }
}
