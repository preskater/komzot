import type { AuthScreenProps } from "./auth-screen.types";

export function AuthScreen({ children }: AuthScreenProps) {
  return (
    <main
      style={{
        alignItems: "center",
        background: "var(--background, #ffffff)",
        color: "var(--foreground, #171717)",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 32,
      }}
    >
      {children}
    </main>
  );
}
