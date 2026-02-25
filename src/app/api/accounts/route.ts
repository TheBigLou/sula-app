import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const members = await prisma.householdMember.findMany({
    include: {
      accounts: {
        include: {
          plaidItem: {
            select: {
              institutionName: true,
            },
          },
        },
        orderBy: { name: "asc" },
      },
    },
    orderBy: { createdAt: "asc" },
  });

  return NextResponse.json(members);
}
