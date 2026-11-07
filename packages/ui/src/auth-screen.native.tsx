import { StyleSheet, View } from "react-native";

import type { AuthScreenProps } from "./auth-screen.types";

export function AuthScreen({ children }: AuthScreenProps) {
  return <View style={styles.screen}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
});
