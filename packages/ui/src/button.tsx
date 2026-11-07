"use client";

import type { CSSProperties } from "react";

import type { ButtonProps } from "./button.types";

const styles: Record<"button" | "disabled" | "fullWidth", CSSProperties> = {
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
  fullWidth: {
    width: "100%",
  },
};

export function Button({
  label,
  onPress,
  disabled = false,
  fullWidth = false,
  isLoading = false,
  loadingLabel,
  type = "button",
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      aria-busy={isLoading || undefined}
      disabled={isDisabled}
      onClick={onPress}
      style={{
        ...styles.button,
        ...(fullWidth ? styles.fullWidth : null),
        ...(isDisabled ? styles.disabled : null),
      }}
      type={type}
    >
      {isLoading ? (loadingLabel ?? label) : label}
    </button>
  );
}
