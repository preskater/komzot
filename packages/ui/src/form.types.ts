import type { ReactNode } from "react";

export type FormProps = {
  children: ReactNode;
  onSubmit?: () => void;
};
