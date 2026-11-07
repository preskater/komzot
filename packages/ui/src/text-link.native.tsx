import { StyleSheet, Text } from "react-native";

import type { TextLinkProps } from "./text-link.types";

export function TextLink({ children, onPress, disabled = false }: TextLinkProps) {
  return (
    <Text
      accessibilityRole="link"
      accessibilityState={{ disabled }}
      onPress={disabled ? undefined : onPress}
      style={[styles.link, disabled ? styles.disabled : null]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#171717",
    fontSize: 14,
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  disabled: {
    opacity: 0.5,
  },
});
