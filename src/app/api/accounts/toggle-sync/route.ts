import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
  const { accountId, syncEnabled } = await request.json();

  if (!accountId || typeof syncEnabled !== "boolean") {
    return NextResponse.json(
      { error: "accountId and syncEnabled (boolean) are required" },
      { status: 400 }
    );
  }

  const account = await prisma.account.update({
    where: { id: accountId },
    data: { syncEnabled },
  });

  return NextResponse.json({ id: account.id, syncEnabled: account.syncEnabled });
}
