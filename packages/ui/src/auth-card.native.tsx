import { StyleSheet, Text, View } from "react-native";

import type { AuthCardProps } from "./auth-card.types";

export function AuthCard({
  title,
  subtitle,
  footer,
  children,
}: AuthCardProps) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>

      {children}

      {footer ? <View>{footer}</View> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#d4d4d4",
    borderRadius: 16,
    borderWidth: 1,
    gap: 20,
    maxWidth: 420,
    padding: 24,
    width: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    color: "#666666",
    fontSize: 15,
    marginTop: 8,
  },
});
