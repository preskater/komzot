"use client";

import type { TextLinkProps } from "./text-link.types";

export function TextLink({ children, onPress, disabled = false }: TextLinkProps) {
  return (
    <button
      disabled={disabled}
      onClick={onPress}
      style={{
        background: "none",
        border: "none",
        color: "inherit",
        cursor: disabled ? "not-allowed" : "pointer",
        font: "inherit",
        fontWeight: 600,
        opacity: disabled ? 0.5 : 1,
        padding: 0,
        textDecoration: "underline",
      }}
      type="button"
    >
      {children}
    </button>
  );
}
