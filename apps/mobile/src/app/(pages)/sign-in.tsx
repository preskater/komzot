import {
  AuthCard,
  AuthScreen,
  Button,
  Form,
  FormError,
  TextField,
  TextLink,
} from "@komzot/ui";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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
    <AuthScreen>
      <AuthCard
        footer={
          <View style={styles.footer}>
            <Text style={styles.footerText}>No account?</Text>
            <TextLink onPress={() => router.push("/sign-up")}>
              Create one
            </TextLink>
          </View>
        }
        subtitle="Sign in to your KomZot account."
        title="Sign in"
      >
        <Form>
          <TextField
            autoComplete="email"
            label="Email"
            onChangeText={setEmail}
            required
            type="email"
            value={email}
          />
          <TextField
            autoComplete="current-password"
            label="Password"
            onChangeText={setPassword}
            required
            type="password"
            value={password}
          />

          <FormError message={error} />

          <Button
            fullWidth
            isLoading={isLoading}
            label="Sign in"
            loadingLabel="Signing in..."
            onPress={handleSignIn}
          />
        </Form>
      </AuthCard>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    gap: 4,
  },
  footerText: {
    color: "#666666",
    fontSize: 14,
  },
});
