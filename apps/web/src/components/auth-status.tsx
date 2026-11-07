"use client";

import { authClient } from "@komzot/auth/client";
import { TextLink } from "@komzot/ui";
import { useRouter } from "next/navigation";

export function AuthStatus() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return <span style={{ fontSize: 14, opacity: 0.6 }}>Loading session...</span>;
  }

  if (!session) {
    return (
      <nav style={{ display: "flex", fontSize: 14, gap: 16 }}>
        <TextLink onPress={() => router.push("/sign-in")}>Sign in</TextLink>
        <TextLink onPress={() => router.push("/sign-up")}>Sign up</TextLink>
      </nav>
    );
  }

  return (
    <div style={{ alignItems: "center", display: "flex", fontSize: 14, gap: 16 }}>
      <span>{session.user.email}</span>
      <TextLink
        onPress={async () => {
          await authClient.signOut();
          router.refresh();
        }}
      >
        Sign out
      </TextLink>
    </div>
  );
}
