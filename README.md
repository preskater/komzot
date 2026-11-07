# KomZot

A Turborepo monorepo with a Next.js web app, an Expo mobile app, shared packages, Postgres, Prisma, and Better Auth.

**Requirements:** Node.js >= 22.12, npm 11, and Docker for the local database.

## Quick start

```sh
cp .env.example .env
cp apps/mobile/.env.example apps/mobile/.env.local

# Set BETTER_AUTH_SECRET in .env (openssl rand -base64 32)

npm install
npm run db:up
npm run db:generate
npm run db:migrate:deploy
npm run dev
```

`npm run dev` starts the web app, the Expo dev server, and the web Storybook:

- Web: http://localhost:3000
- Expo: http://localhost:8081
- Storybook: http://localhost:6006

## Documentation

| Workspace | Description | README |
| --- | --- | --- |
| `apps/web` | Next.js web app | [apps/web/README.md](./apps/web/README.md) |
| `apps/mobile` | Expo iOS/Android app | [apps/mobile/README.md](./apps/mobile/README.md) |
| `apps/storybook` | React + Vite Storybook | [apps/storybook/README.md](./apps/storybook/README.md) |
| `packages/ui` | Shared cross-platform UI | [packages/ui/README.md](./packages/ui/README.md) |
| `packages/db` | Prisma client, schema, and migrations | [packages/db/README.md](./packages/db/README.md) |
| `packages/auth` | Better Auth server and web client | [packages/auth/README.md](./packages/auth/README.md) |
| `packages/eslint-config` | Shared ESLint configs | [packages/eslint-config/README.md](./packages/eslint-config/README.md) |
| `packages/typescript-config` | Shared TypeScript presets | [packages/typescript-config/README.md](./packages/typescript-config/README.md) |
