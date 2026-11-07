import { expo } from "@better-auth/expo";
import { prisma } from "@komzot/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";

const trustedOrigins = [
  process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  "komzot://",
  ...(process.env.NODE_ENV === "development"
    ? ["exp://", "exp://**", "exp://192.168.*.*:*/**"]
    : []),
];

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins,
  advanced: {
    useSecureCookies: process.env.NODE_ENV === "production",
  },
  plugins: [expo(), nextCookies()],
});

export type Session = typeof auth.$Infer.Session;
