export type ButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingLabel?: string;
  type?: "button" | "submit";
};
