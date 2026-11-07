import { Button } from "@komzot/ui";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { authClient } from "@/lib/auth-client";

export default function SignInScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignIn() {
    setError(null);
    setIsLoading(true);

    const { error } = await authClient.signIn.email({ email, password });

    setIsLoading(false);

    if (error) {
      setError(error.message ?? "Unable to sign in.");
      return;
    }

    router.replace("/");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subtitle}>Sign in to your KomZot account.</Text>

        <TextInput
          autoCapitalize="none"
          autoComplete="email"
          keyboardType="email-address"
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#888"
          style={styles.input}
          value={email}
        />
        <TextInput
          autoComplete="current-password"
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
          value={password}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Button
          disabled={isLoading}
          label={isLoading ? "Signing in..." : "Sign in"}
          onPress={handleSignIn}
        />

        <Text style={styles.footer}>
          No account?{" "}
          <Link href="/sign-up" style={styles.link}>
            Create one
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    gap: 14,
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
    marginBottom: 8,
  },
  input: {
    borderColor: "#d4d4d4",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  error: {
    color: "#b91c1c",
    fontSize: 14,
  },
  footer: {
    color: "#666",
    fontSize: 14,
  },
  link: {
    color: "#171717",
    fontWeight: "600",
  },
});
