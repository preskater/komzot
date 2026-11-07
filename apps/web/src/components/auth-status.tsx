"use client";

import { authClient } from "@komzot/auth/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const linkStyle = {
  color: "inherit",
  fontWeight: 600,
  textDecoration: "underline",
} as const;

export function AuthStatus() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <span style={{ fontSize: 14, opacity: 0.6 }}>Loading session...</span>;
  }

  if (!session) {
    return (
      <nav style={{ display: "flex", fontSize: 14, gap: 16 }}>
        <Link href="/sign-in" style={linkStyle}>
          Sign in
        </Link>
        <Link href="/sign-up" style={linkStyle}>
          Sign up
        </Link>
      </nav>
    );
  }

  return (
    <div style={{ alignItems: "center", display: "flex", fontSize: 14, gap: 16 }}>
      <span>{session.user.email}</span>
      <button
        onClick={async () => {
          await authClient.signOut();
          router.refresh();
        }}
        style={{
          background: "none",
          border: "none",
          color: "inherit",
          cursor: "pointer",
          font: "inherit",
          padding: 0,
          textDecoration: "underline",
        }}
        type="button"
      >
        Sign out
      </button>
    </div>
  );
}
