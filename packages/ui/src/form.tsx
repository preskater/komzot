"use client";

import type { FormProps } from "./form.types";

export function Form({ children, onSubmit }: FormProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.();
      }}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      {children}
    </form>
  );
}
