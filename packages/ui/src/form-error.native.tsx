import { StyleSheet, Text } from "react-native";

import type { FormErrorProps } from "./form-error.types";

export function FormError({ message }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <Text accessibilityRole="alert" style={styles.error}>
      {message}
    </Text>
  );
}

const styles = StyleSheet.create({
  error: {
    color: "#b91c1c",
    fontSize: 14,
  },
});
