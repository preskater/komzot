import type { ReactNode } from "react";

export type TextLinkProps = {
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
};
