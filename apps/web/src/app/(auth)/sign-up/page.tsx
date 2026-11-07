"use client";

import { authClient } from "@komzot/auth/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";

import styles from "../auth.module.css";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    <main className={styles.page}>
      <div className={styles.card}>
        <div>
          <h1 className={styles.title}>Create account</h1>
          <p className={styles.subtitle}>Start using KomZot today.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            Name
            <input
              autoComplete="name"
              className={styles.input}
              name="name"
              onChange={(event) => setName(event.target.value)}
              required
              type="text"
              value={name}
            />
          </label>

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
              autoComplete="new-password"
              className={styles.input}
              minLength={8}
              name="password"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </label>

          {error ? <p className={styles.error}>{error}</p> : null}

          <button disabled={isLoading} type="submit">
            {isLoading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className={styles.footer}>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </p>
      </div>
    </main>
  );
}
