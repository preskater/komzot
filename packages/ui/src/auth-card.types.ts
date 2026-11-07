import type { ReactNode } from "react";

export type AuthCardProps = {
  title: string;
  subtitle?: string;
  footer?: ReactNode;
  children: ReactNode;
};
