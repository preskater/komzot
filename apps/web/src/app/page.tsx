import { Button } from "@komzot/ui";

import { AuthStatus } from "@/components/auth-status";

export default function Home() {
  return (
    <main
      style={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        fontFamily: "var(--font-geist-sans)",
        gap: 16,
        justifyContent: "center",
        padding: 32,
        textAlign: "center",
      }}
    >
      <AuthStatus />
      <h1 style={{ fontSize: 40, fontWeight: 700, margin: 0 }}>KomZot</h1>
      <Button label="Shared @komzot/ui button" />
    </main>
  );
}
