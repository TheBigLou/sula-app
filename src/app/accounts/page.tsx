"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaidLinkButton } from "@/components/PlaidLink";

interface Account {
  id: string;
  name: string;
  officialName: string | null;
  type: string;
  subtype: string | null;
  mask: string | null;
  currentBalance: number | null;
  availableBalance: number | null;
  syncEnabled: boolean;
  plaidItem: {
    institutionName: string | null;
  };
}

interface Member {
  id: string;
  name: string;
  role: string;
  accounts: Account[];
}

function formatCurrency(amount: number | null): string {
  if (amount === null) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function accountTypeBadge(type: string) {
  const colors: Record<string, string> = {
    credit: "bg-orange-100 text-orange-800",
    depository: "bg-green-100 text-green-800",
    checking: "bg-green-100 text-green-800",
    savings: "bg-blue-100 text-blue-800",
    investment: "bg-purple-100 text-purple-800",
  };
  return colors[type] || "bg-gray-100 text-gray-800";
}

export default function AccountsPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [togglingIds, setTogglingIds] = useState<Set<string>>(new Set());

  const fetchData = useCallback(async () => {
    setLoading(true);
    const response = await fetch("/api/accounts");
    const data = await response.json();
    setMembers(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const toggleSync = useCallback(async (accountId: string, currentValue: boolean) => {
    setTogglingIds((prev) => new Set(prev).add(accountId));

    // Optimistic update
    setMembers((prev) =>
      prev.map((m) => ({
        ...m,
        accounts: m.accounts.map((a) =>
          a.id === accountId ? { ...a, syncEnabled: !currentValue } : a
        ),
      }))
    );

    await fetch("/api/accounts/toggle-sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ accountId, syncEnabled: !currentValue }),
    });

    setTogglingIds((prev) => {
      const next = new Set(prev);
      next.delete(accountId);
      return next;
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-muted-foreground">Loading accounts...</p>
      </div>
    );
  }

  const syncedCount = members.reduce(
    (sum, m) => sum + m.accounts.filter((a) => a.syncEnabled).length,
    0
  );
  const totalAccounts = members.reduce((sum, m) => sum + m.accounts.length, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Connected Accounts</h1>
        <p className="text-muted-foreground mt-1">
          {syncedCount} of {totalAccounts} account{totalAccounts !== 1 ? "s" : ""} enabled for sync
        </p>
      </div>

      {members.map((member) => (
        <div key={member.id} className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <Badge variant="outline">{member.role}</Badge>
            </div>
            <PlaidLinkButton
              memberId={member.id}
              memberName={member.name}
              onSuccess={fetchData}
            />
          </div>

          {member.accounts.length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                No accounts connected yet. Click the button above to link a bank or card.
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-3">
              {member.accounts.map((account) => (
                <Card
                  key={account.id}
                  className={account.syncEnabled ? "" : "opacity-60"}
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-base">
                          {account.name}
                          {account.mask && (
                            <span className="text-muted-foreground font-normal ml-2">
                              ····{account.mask}
                            </span>
                          )}
                        </CardTitle>
                        {account.plaidItem.institutionName && (
                          <CardDescription>
                            {account.plaidItem.institutionName}
                            {account.officialName && ` — ${account.officialName}`}
                          </CardDescription>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={accountTypeBadge(account.type)}>
                          {account.subtype || account.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-6 text-sm">
                        <div>
                          <span className="text-muted-foreground">Balance: </span>
                          <span className="font-medium">
                            {formatCurrency(account.currentBalance)}
                          </span>
                        </div>
                        {account.availableBalance !== null &&
                          account.availableBalance !== account.currentBalance && (
                            <div>
                              <span className="text-muted-foreground">Available: </span>
                              <span className="font-medium">
                                {formatCurrency(account.availableBalance)}
                              </span>
                            </div>
                          )}
                      </div>
                      <Button
                        variant={account.syncEnabled ? "outline" : "secondary"}
                        size="sm"
                        disabled={togglingIds.has(account.id)}
                        onClick={() => toggleSync(account.id, account.syncEnabled)}
                      >
                        {account.syncEnabled ? "Syncing" : "Disabled"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
