# @komzot/auth

Better Auth server configuration and web client for the KomZot apps.

## Stack

- Better Auth 1.7.18
- Prisma adapter backed by `@komzot/db`
- Email and password authentication
- Expo plugin for the mobile client
- Next.js cookie plugin

Email verification, password reset, social OAuth, 2FA, organizations, admin, and API bearer tokens are intentionally not enabled.

## Exports

| Export | Purpose |
| --- | --- |
| `@komzot/auth/server` | Server-side `auth` instance and inferred `Session` type |
| `@komzot/auth/client` | Web client built on `better-auth/react` |

The mobile app creates its own Expo client in `apps/mobile/src/lib/auth-client.ts` using `@better-auth/expo/client`, `expo-secure-store`, and the `komzot` scheme.

## Configuration

`src/server.ts`:

- Uses `prismaAdapter(prisma, { provider: "postgresql" })`
- Enables `emailAndPassword`
- Adds `expo()` for mobile deep-link callbacks
- Adds `nextCookies()` for Next.js server actions
- Trusts `BETTER_AUTH_URL`, `komzot://`, and Expo development origins
- Enables secure cookies in production
- Keeps CSRF/origin checks and Better Auth rate limiting enabled

## Web integration

The Next.js app mounts the handler at `/api/auth/[...all]`:

```ts
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
```

Auth pages live at `/sign-in` and `/sign-up`. The home page includes a client-side session status and sign-out control.

## Mobile integration

The Expo client uses:

```ts
createAuthClient({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  plugins: [expoClient({ scheme: "komzot", storagePrefix: "komzot", storage: SecureStore })],
});
```

Sessions and cookies are stored in SecureStore. The mobile app has native sign-in and sign-up screens and session status on the home screen.

## Environment

Root `.env`:

```env
DATABASE_URL="postgresql://komzot:komzot@localhost:5432/komzot?schema=public"
BETTER_AUTH_SECRET="<openssl rand -base64 32>"
BETTER_AUTH_URL="http://localhost:3000"
```

Mobile `.env.local`:

```env
EXPO_PUBLIC_API_URL="http://localhost:3000"
```

For an Android emulator use `http://10.0.2.2:3000`; for a physical device use the host machine's LAN IP.

## Auth schema

Generate or refresh the Prisma models from the server config:

```sh
set -a; . ./.env; set +a
npx auth@latest generate --config packages/auth/src/server.ts --output packages/db/prisma/schema.prisma --yes
npm run db:migrate -- --name auth
```

The generated models are `User`, `Session`, `Account`, and `Verification`.

## Verification

```sh
curl http://localhost:3000/api/auth/ok
```

The response is `{"ok":true}`.

## See also

- [Root README](../../README.md)
- [Database package](../db/README.md)
- [Web app](../../apps/web/README.md)
- [Mobile app](../../apps/mobile/README.md)
