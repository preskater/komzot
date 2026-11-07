import {
  StyleSheet,
  Text,
  TextInput,
  type TextInputProps,
  View,
} from "react-native";

import { FormError } from "./form-error";
import type { TextFieldProps } from "./text-field.types";

export function TextField({
  label,
  value,
  onChangeText,
  type = "text",
  autoComplete,
  placeholder,
  disabled = false,
  error,
}: TextFieldProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        autoCapitalize={type === "email" ? "none" : undefined}
        autoComplete={autoComplete as TextInputProps["autoComplete"]}
        editable={!disabled}
        keyboardType={type === "email" ? "email-address" : "default"}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888888"
        secureTextEntry={type === "password"}
        style={[
          styles.input,
          disabled ? styles.disabled : null,
          error ? styles.inputError : null,
        ]}
        value={value}
      />
      {error ? <FormError message={error} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: 6,
  },
  label: {
    fontSize: 14,
  },
  input: {
    borderColor: "#d4d4d4",
    borderRadius: 8,
    borderWidth: 1,
    color: "#171717",
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  inputError: {
    borderColor: "#b91c1c",
  },
});
