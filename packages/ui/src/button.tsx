"use client";

import type { CSSProperties } from "react";

import type { ButtonProps } from "./button.types";

const styles: Record<"button" | "disabled", CSSProperties> = {
  button: {
    alignItems: "center",
    backgroundColor: "#171717",
    border: "1px solid transparent",
    borderRadius: 8,
    color: "#ffffff",
    cursor: "pointer",
    display: "inline-flex",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 600,
    justifyContent: "center",
    padding: "10px 16px",
  },
  disabled: {
    cursor: "not-allowed",
    opacity: 0.5,
  },
};

export function Button({ label, onPress, disabled = false }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onPress}
      disabled={disabled}
      style={disabled ? { ...styles.button, ...styles.disabled } : styles.button}
    >
      {label}
    </button>
  );
}
