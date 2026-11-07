export type TextFieldType = "text" | "email" | "password";

export type TextFieldProps = {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  type?: TextFieldType;
  autoComplete?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string | null;
};
