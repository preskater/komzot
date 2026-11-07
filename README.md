# KomZot

A Turborepo monorepo with a Next.js web app, an Expo mobile app, and shared packages.

**Requirements:** Node.js >= 22.12 and npm 11.

## Quick start

```sh
npm install
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
| `packages/eslint-config` | Shared ESLint configs | [packages/eslint-config/README.md](./packages/eslint-config/README.md) |
| `packages/typescript-config` | Shared TypeScript presets | [packages/typescript-config/README.md](./packages/typescript-config/README.md) |
