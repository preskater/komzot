"use client";

import { useId } from "react";

import { FormError } from "./form-error";
import type { TextFieldProps } from "./text-field.types";

export function TextField({
  label,
  value,
  onChangeText,
  type = "text",
  autoComplete,
  name,
  placeholder,
  disabled = false,
  required = false,
  error,
}: TextFieldProps) {
  const id = useId();
  const errorId = `${id}-error`;
  const inputType =
    type === "password" ? "password" : type === "email" ? "email" : "text";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={id} style={{ fontSize: 14 }}>
        {label}
      </label>
      <input
        aria-describedby={error ? errorId : undefined}
        aria-invalid={error ? true : undefined}
        autoComplete={autoComplete}
        disabled={disabled}
        id={id}
        name={name}
        onChange={(event) => onChangeText(event.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          background: "transparent",
          border: "1px solid #d4d4d4",
          borderRadius: 8,
          color: "inherit",
          font: "inherit",
          opacity: disabled ? 0.5 : 1,
          padding: "10px 12px",
          ...(error ? { borderColor: "#b91c1c" } : null),
        }}
        type={inputType}
        value={value}
      />
      {error ? <FormError id={errorId} message={error} /> : null}
    </div>
  );
}
