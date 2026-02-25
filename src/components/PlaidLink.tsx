"use client";

import { useCallback, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import { Button } from "@/components/ui/button";

interface PlaidLinkProps {
  memberId: string;
  memberName: string;
  onSuccess: () => void;
}

export function PlaidLinkButton({ memberId, memberName, onSuccess }: PlaidLinkProps) {
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchLinkToken = useCallback(async () => {
    setLoading(true);
    const response = await fetch("/api/plaid/create-link-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ memberId }),
    });
    const data = await response.json();
    setLinkToken(data.linkToken);
    setLoading(false);
  }, [memberId]);

  const onPlaidSuccess = useCallback(
    async (publicToken: string) => {
      await fetch("/api/plaid/exchange-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ publicToken, memberId }),
      });
      onSuccess();
    },
    [memberId, onSuccess]
  );

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: onPlaidSuccess,
  });

  // Two-step: first fetch token, then open Link
  if (!linkToken) {
    return (
      <Button onClick={fetchLinkToken} disabled={loading}>
        {loading ? "Preparing..." : `Connect Account for ${memberName}`}
      </Button>
    );
  }

  return (
    <Button onClick={() => open()} disabled={!ready}>
      {ready ? `Open Bank Connection for ${memberName}` : "Loading..."}
    </Button>
  );
}
