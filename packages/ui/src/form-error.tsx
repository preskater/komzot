import type { FormErrorProps } from "./form-error.types";

export function FormError({ id, message }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <p
      id={id}
      role="alert"
      style={{ color: "#b91c1c", fontSize: 14, margin: 0 }}
    >
      {message}
    </p>
  );
}
