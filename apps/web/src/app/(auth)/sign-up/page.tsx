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

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setError(null);
    setIsLoading(true);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
    });

    setIsLoading(false);

    if (error) {
      setError(error.message ?? "Unable to create your account.");
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
            Already have an account?{" "}
            <TextLink onPress={() => router.push("/sign-in")}>Sign in</TextLink>
          </span>
        }
        subtitle="Start using KomZot today."
        title="Create account"
      >
        <Form onSubmit={handleSubmit}>
          <TextField
            autoComplete="name"
            label="Name"
            name="name"
            onChangeText={setName}
            required
            value={name}
          />
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
            autoComplete="new-password"
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
            label="Create account"
            loadingLabel="Creating account..."
            type="submit"
          />
        </Form>
      </AuthCard>
    </AuthScreen>
  );
}
