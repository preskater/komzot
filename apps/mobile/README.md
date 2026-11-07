# KomZot mobile

Expo SDK 58 application with Expo Router. It targets **iOS and Android only**; web is served by the Next.js app.

## Stack

- Expo SDK 58
- Expo Router
- React Native 0.88
- React 19.3
- Shared components from `@komzot/ui`
- Jest + `jest-expo` + React Native Testing Library
- React Native Storybook

## Running

From the repository root:

```sh
npm run dev:mobile
```

Turbo wraps the Expo output, so interactive keyboard shortcuts do not pass through. For native interaction, run Expo directly:

```sh
npm run dev -w apps/mobile
```

Then press `a` for Android or `i` for iOS.

Or from this directory:

```sh
npm run dev
npm run ios
npm run android
```

The Metro dev server runs on http://localhost:8081.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` / `start` | Start the Expo dev server |
| `npm run ios` | Start and open the iOS simulator |
| `npm run android` | Start and open the Android emulator |
| `npm run storybook` | Start Storybook in the app |
| `npm run storybook:ios` | Start Storybook on iOS |
| `npm run storybook:android` | Start Storybook on Android |
| `npm run test` | Run Jest once |
| `npm run test:watch` | Run Jest in watch mode |
| `npm run test:coverage` | Run Jest with coverage |
| `npm run lint` | Run Expo lint |
| `npm run typecheck` | Run TypeScript without emitting |
| `npm run clean` | Remove Expo and coverage artifacts |

Root aliases:

```sh
npm run dev:mobile
npm run storybook:mobile
npm run storybook:ios
npm run storybook:android
npm run test:mobile
```

## Storybook

React Native Storybook is bundled only when `EXPO_PUBLIC_STORYBOOK_ENABLED=true`, which the `storybook:*` scripts set.

- `src/app/(pages)` contains the normal app routes.
- `src/app/(storybook)` renders the Storybook UI when enabled.
- `metro.config.js` wraps Expo Metro with `withStorybook`.

Stories live with the components:

- `packages/ui/src/**/*.native.stories.tsx`

The on-device addons include controls, actions, and backgrounds.

## Testing

Jest is configured with the `jest-expo` preset and React Native Testing Library. Tests live in `__tests__/`.

```sh
npm run test
npm run test:coverage
```

The root layout and Storybook route are excluded from the default coverage report.

## Shared UI

Native components come from `@komzot/ui`:

```tsx
import { Button } from "@komzot/ui";
```

Metro resolves `button.native.tsx` for iOS and Android. Expo SDK 52+ automatically configures Metro for npm workspaces, so no manual `watchFolders` setup is required.

## Environment

Use `EXPO_PUBLIC_*` variables for values exposed to the app bundle. `EXPO_PUBLIC_STORYBOOK_ENABLED` is the switch for Storybook.

## Production

Mobile production builds are handled by EAS:

```sh
eas build
```

The mobile app intentionally has no Turbo `build` task.

## Notes

- React is pinned to `19.3.0` to match Expo SDK 58 and avoid duplicate React copies across the monorepo.
- `app.json` declares only `ios` and `android` in `platforms`; the web platform and its dependencies were removed.

## See also

- [Root README](../../README.md)
- [Shared UI](../../packages/ui/README.md)
- [Web Storybook](../storybook/README.md)
