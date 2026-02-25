"use client";

import { useCallback, useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import { Button } from "@/components/ui/button";

interface PlaidLinkProps {
  memberId: string;
  memberName: string;
  onSuccess: () => void;
}

// Inner component: only mounts when we have a link token, so usePlaidLink
// only loads the Plaid script once (when the user actually clicks connect)
function PlaidLinkOpener({
  linkToken,
  memberId,
  memberName,
  onSuccess,
}: PlaidLinkProps & { linkToken: string }) {
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

  // Auto-open Plaid Link as soon as the token is ready
  useEffect(() => {
    if (ready) open();
  }, [ready, open]);

  return (
    <Button onClick={() => open()} disabled={!ready}>
      {ready ? `Open Bank Connection for ${memberName}` : "Loading..."}
    </Button>
  );
}

export function PlaidLinkButton({ memberId, memberName, onSuccess }: PlaidLinkProps) {
  const [linkToken, setLinkToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchLinkToken = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/plaid/create-link-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memberId }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Failed to create link token");
        console.error("Plaid link token error:", data);
        setLoading(false);
        return;
      }
      setLinkToken(data.linkToken);
    } catch (err) {
      setError("Network error connecting to Plaid");
      console.error(err);
    }
    setLoading(false);
  }, [memberId]);

  if (linkToken) {
    return (
      <PlaidLinkOpener
        linkToken={linkToken}
        memberId={memberId}
        memberName={memberName}
        onSuccess={onSuccess}
      />
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Button onClick={fetchLinkToken} disabled={loading}>
        {loading ? "Preparing..." : `Connect Account for ${memberName}`}
      </Button>
      {error && <span className="text-sm text-destructive">{error}</span>}
    </div>
  );
}
