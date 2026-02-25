import { NextRequest, NextResponse } from "next/server";
import { createLinkToken } from "@/lib/plaid";

export async function POST(request: NextRequest) {
  const { memberId } = await request.json();

  if (!memberId) {
    return NextResponse.json({ error: "memberId is required" }, { status: 400 });
  }

  try {
    const data = await createLinkToken(memberId);
    return NextResponse.json({ linkToken: data.link_token });
  } catch (error: unknown) {
    const plaidError = error as { response?: { data?: unknown }; message?: string };
    console.error("Plaid create-link-token error:", plaidError.response?.data || plaidError.message);
    return NextResponse.json(
      { error: "Failed to create link token", details: plaidError.response?.data || plaidError.message },
      { status: 500 }
    );
  }
}
