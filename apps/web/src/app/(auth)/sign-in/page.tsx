"use client";

import { authClient } from "@komzot/auth/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

import styles from "../auth.module.css";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    <main className={styles.page}>
      <div className={styles.card}>
        <div>
          <h1 className={styles.title}>Sign in</h1>
          <p className={styles.subtitle}>Sign in to your KomZot account.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            Email
            <input
              autoComplete="email"
              className={styles.input}
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </label>

          <label className={styles.field}>
            Password
            <input
              autoComplete="current-password"
              className={styles.input}
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </label>

          {error ? <p className={styles.error}>{error}</p> : null}

          <button disabled={isLoading} type="submit">
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className={styles.footer}>
          No account? <Link href="/sign-up">Create one</Link>
        </p>
      </div>
    </main>
  );
}
