import type { AuthCardProps } from "./auth-card.types";

const muted = "color-mix(in srgb, var(--foreground, #171717) 65%, transparent)";

export function AuthCard({
  title,
  subtitle,
  footer,
  children,
}: AuthCardProps) {
  return (
    <div
      style={{
        background: "var(--background, #ffffff)",
        border:
          "1px solid color-mix(in srgb, var(--foreground, #171717) 18%, transparent)",
        borderRadius: 16,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        maxWidth: 420,
        padding: 32,
        width: "100%",
      }}
    >
      <div>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>{title}</h1>
        {subtitle ? (
          <p style={{ color: muted, fontSize: 15, margin: "8px 0 0" }}>
            {subtitle}
          </p>
        ) : null}
      </div>

      {children}

      {footer ? (
        <div style={{ color: muted, fontSize: 14 }}>{footer}</div>
      ) : null}
    </div>
  );
}
