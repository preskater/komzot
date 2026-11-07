"use client";

import { authClient } from "@komzot/auth/client";
import {
  AuthCard,
  AuthScreen,
  Button,
  Form,
  FormError,
  TextField,
  TextLink,
} from "@komzot/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setError(null);
    setIsLoading(true);

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      setError(error.message ?? "Unable to sign in.");
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <AuthScreen>
      <AuthCard
        footer={
          <span>
            No account?{" "}
            <TextLink onPress={() => router.push("/sign-up")}>
              Create one
            </TextLink>
          </span>
        }
        subtitle="Sign in to your KomZot account."
        title="Sign in"
      >
        <Form onSubmit={handleSubmit}>
          <TextField
            autoComplete="email"
            label="Email"
            name="email"
            onChangeText={setEmail}
            required
            type="email"
            value={email}
          />
          <TextField
            autoComplete="current-password"
            label="Password"
            name="password"
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
            type="submit"
          />
        </Form>
      </AuthCard>
    </AuthScreen>
  );
}
