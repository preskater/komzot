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
    <AuthScreen>
      <AuthCard
        footer={
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TextLink onPress={() => router.push("/sign-in")}>Sign in</TextLink>
          </View>
        }
        subtitle="Start using KomZot today."
        title="Create account"
      >
        <Form>
          <TextField
            autoComplete="name"
            label="Name"
            onChangeText={setName}
            required
            value={name}
          />
          <TextField
            autoComplete="email"
            label="Email"
            onChangeText={setEmail}
            required
            type="email"
            value={email}
          />
          <TextField
            autoComplete="new-password"
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
            label="Create account"
            loadingLabel="Creating account..."
            onPress={handleSignUp}
          />
        </Form>
      </AuthCard>
    </AuthScreen>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  footerText: {
    color: "#666666",
    fontSize: 14,
  },
});
