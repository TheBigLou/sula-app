import { NextRequest, NextResponse } from "next/server";
import { createLinkToken } from "@/lib/plaid";

export async function POST(request: NextRequest) {
  const { memberId } = await request.json();

  if (!memberId) {
    return NextResponse.json({ error: "memberId is required" }, { status: 400 });
  }

  const data = await createLinkToken(memberId);
  return NextResponse.json({ linkToken: data.link_token });
}
