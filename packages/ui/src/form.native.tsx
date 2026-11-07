import { StyleSheet, View } from "react-native";

import type { FormProps } from "./form.types";

export function Form({ children }: FormProps) {
  return <View style={styles.form}>{children}</View>;
}

const styles = StyleSheet.create({
  form: {
    gap: 16,
  },
});
