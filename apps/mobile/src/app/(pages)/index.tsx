import { Button } from "@komzot/ui";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { authClient } from "@/lib/auth-client";

export default function HomeScreen() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KomZot</Text>
      <Text style={styles.subtitle}>
        {isPending
          ? "Loading session..."
          : session
            ? `Signed in as ${session.user.email}`
            : "Signed out"}
      </Text>

      {session ? (
        <Button
          label="Sign out"
          onPress={() => {
            void authClient.signOut();
          }}
        />
      ) : (
        <View style={styles.actions}>
          <Button label="Sign in" onPress={() => router.push("/sign-in")} />
          <Button label="Create account" onPress={() => router.push("/sign-up")} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    gap: 16,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  subtitle: {
    color: "#666",
    fontSize: 15,
    textAlign: "center",
  },
  actions: {
    alignItems: "center",
    gap: 12,
  },
});
