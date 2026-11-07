import { Button } from "@komzot/ui";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { authClient } from "@/lib/auth-client";

export default function SignUpScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignUp() {
    setError(null);
    setIsLoading(true);

    const { error } = await authClient.signUp.email({ name, email, password });

    setIsLoading(false);

    if (error) {
      setError(error.message ?? "Unable to create your account.");
      return;
    }

    router.replace("/");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>Start using KomZot today.</Text>

        <TextInput
          autoComplete="name"
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor="#888"
          style={styles.input}
          value={name}
        />
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
          autoComplete="new-password"
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
          label={isLoading ? "Creating account..." : "Create account"}
          onPress={handleSignUp}
        />

        <Text style={styles.footer}>
          Already have an account?{" "}
          <Link href="/sign-in" style={styles.link}>
            Sign in
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
