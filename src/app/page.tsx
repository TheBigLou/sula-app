import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Sula</h1>
        <p className="text-muted-foreground mt-1">Household Financial Intelligence</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/accounts">
          <Card className="hover:bg-accent transition-colors cursor-pointer h-full">
            <CardHeader>
              <CardTitle>Connected Accounts</CardTitle>
              <CardDescription>
                Link bank accounts and credit cards via Plaid
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Connect accounts for both household members to start tracking spending.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Card className="opacity-50 h-full">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>Coming in Phase 2</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sync and browse transactions from connected accounts.
            </p>
          </CardContent>
        </Card>

        <Card className="opacity-50 h-full">
          <CardHeader>
            <CardTitle>Spending Dashboard</CardTitle>
            <CardDescription>Coming in Phase 4</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              See where your household&apos;s money went, by person and category.
            </p>
          </CardContent>
        </Card>

        <Card className="opacity-50 h-full">
          <CardHeader>
            <CardTitle>Card Perks</CardTitle>
            <CardDescription>Coming in Phase 5</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Track credit usage and see if each card is earning its annual fee.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
