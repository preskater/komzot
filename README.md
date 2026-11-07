# KomZot

A Turborepo monorepo with a Next.js web app and an Expo mobile app sharing a small UI package.

## Requirements

- Node.js >= 22.12
- npm 11

## Getting started

```sh
npm install
npm run dev
```

`npm run dev` starts all development servers:

- Web: http://localhost:3000
- Expo: http://localhost:8081 (Metro bundler)
- Web Storybook: http://localhost:6006

## Structure

```
.
├── apps/
│   ├── web/       # Next.js 16 (App Router, TypeScript)
│   ├── mobile/    # Expo SDK 58 (Expo Router, TypeScript; iOS and Android only)
│   └── storybook/ # React + Vite Storybook for the shared web components
├── packages/
│   ├── eslint-config/      # Shared flat ESLint configs
│   ├── typescript-config/  # Shared tsconfig presets
│   └── ui/                 # Shared cross-platform React components and stories
├── package.json
└── turbo.json
```

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Run the web app, mobile app, and web Storybook |
| `npm run dev:web` | Run only the web app |
| `npm run dev:mobile` | Run only the mobile app |
| `npm run dev:storybook` | Run only the web Storybook |
| `npm run storybook:mobile` | Run React Native Storybook in Expo |
| `npm run storybook:ios` | Run React Native Storybook on iOS |
| `npm run storybook:android` | Run React Native Storybook on Android |
| `npm run build` | Build the web app and web Storybook |
| `npm run build:storybook` | Build only the web Storybook |
| `npm run test` | Run mobile, web, and Storybook tests |
| `npm run test:web` | Run web unit tests |
| `npm run test:mobile` | Run mobile Jest tests |
| `npm run test:storybook` | Run Storybook component tests |
| `npm run test:coverage` | Run all unit/component tests with coverage |
| `npm run test:e2e` | Run Playwright end-to-end tests |
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

## Storybook

Stories are co-located with the shared components in `packages/ui`:

- `*.web.stories.tsx` — used by the web Storybook in `apps/storybook`
- `*.native.stories.tsx` — used by React Native Storybook in `apps/mobile`

Web Storybook uses `@storybook/react-vite` and is part of `turbo dev` and `turbo build`. Its static output is written to `apps/storybook/storybook-static`, which is cached by Turbo and gitignored.

React Native Storybook is included in the Expo bundle only when `EXPO_PUBLIC_STORYBOOK_ENABLED=true`. Use the `storybook:*` scripts to launch it; the normal app is unaffected.

## Testing

- **Mobile** — Jest + `jest-expo` + React Native Testing Library, under `apps/mobile/__tests__`.
- **Web** — Vitest + React Testing Library + jsdom, with `apps/web/vitest.config.mts`.
- **Storybook** — `@storybook/addon-vitest` runs the web stories, including interaction `play` functions, in Chromium via Playwright.
- **E2E** — Playwright runs the Next.js app through `apps/web/playwright.config.ts`.

Install the Playwright browser once:

```sh
npx playwright install chromium
```

Run tests:

```sh
npm run test            # mobile + web + Storybook
npm run test:mobile
npm run test:web
npm run test:storybook
npm run test:coverage
npm run test:e2e
```

Watch mode is available per package:

```sh
npm run test:watch -w apps/mobile
npm run test:watch -w apps/web
npm run test:watch -w @komzot/storybook
```

The GitHub Actions workflow in `.github/workflows/ci.yml` caches `.turbo` between runs and executes lint, typecheck, build, unit/component tests, and E2E tests.

## Notes

- The Expo app targets iOS and Android only. Web is served by the Next.js app; `web` is omitted from the mobile app's `platforms` array, and web-only dependencies and files have been removed.
- Expo SDK 52+ automatically configures Metro for npm workspaces, so there is no manual `watchFolders` setup.
- Both apps pin React to `19.3.0`, the version bundled with Expo SDK 58, to avoid duplicate React copies. Keep these versions aligned when upgrading.
- Mobile production builds are handled by EAS (`eas build`), so the mobile app intentionally has no Turbo `build` task.
- Story changes are excluded from the production `build` task inputs, so editing a story only invalidates the Storybook build.
