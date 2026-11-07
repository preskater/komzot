# Komzot

A Turborepo monorepo with a Next.js web app and an Expo mobile app sharing a small UI package.

## Requirements

- Node.js >= 20.9
- npm 11

## Getting started

```sh
npm install
npm run dev
```

`npm run dev` starts both apps:

- Web: http://localhost:3000
- Expo: http://localhost:8081 (Metro bundler)

## Structure

```
.
├── apps/
│   ├── web/       # Next.js 16 (App Router, TypeScript)
│   └── mobile/    # Expo SDK 58 (Expo Router, TypeScript)
├── packages/
│   ├── eslint-config/      # Shared flat ESLint configs
│   ├── typescript-config/  # Shared tsconfig presets
│   └── ui/                 # Shared cross-platform React components
├── package.json
└── turbo.json
```

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Run every app in development with Turbo |
| `npm run dev:web` | Run only the web app |
| `npm run dev:mobile` | Run only the mobile app |
| `npm run build` | Build every package that has a build task (web) |
| `npm run lint` | Lint every package |
| `npm run typecheck` | Type-check every package |
| `npm run clean` | Remove generated caches and build output |

### Expo interactive mode

Turbo wraps the dev server output, so Expo's interactive keyboard shortcuts (`a`, `i`, `r`, `m`) do not pass through when using `npm run dev` or `npm run dev:mobile`. For native interaction, run Expo directly:

```sh
npm run dev -w apps/mobile
```

Then press `a` for Android or `i` for iOS.

## Shared UI

`packages/ui` is consumed as source by both apps, so it has no build step.

```tsx
import { Button } from "@komzot/ui";
```

Platform-specific implementations use React Native's file extensions:

- `button.tsx` — web
- `button.native.tsx` — iOS / Android

Metro picks `.native.tsx` for native builds, while Next.js resolves `.tsx`. Web builds transpile the package via `transpilePackages` in `apps/web/next.config.ts`.

## Notes

- Expo SDK 52+ automatically configures Metro for npm workspaces, so there is no manual `watchFolders` setup.
- Both apps pin React and React DOM to `19.3.0`, the version bundled with Expo SDK 58, to avoid duplicate React copies. Keep these versions aligned when upgrading.
- Mobile production builds are handled by EAS (`eas build`), so the mobile app intentionally has no Turbo `build` task.
