# Komzot mobile

Expo SDK 58 app using [Expo Router](https://docs.expo.dev/router/introduction/). It targets **iOS and Android only** — the web app lives in `apps/web`.

## Run

From the repository root:

```sh
npm run dev -w apps/mobile   # Expo dev server, interactive
npm run ios -w apps/mobile
npm run android -w apps/mobile
```

Or from this directory:

```sh
npm run dev
npm run ios
npm run android
```

## Shared code

Cross-platform components come from `@komzot/ui` in `packages/ui`. For example:

```tsx
import { Button } from "@komzot/ui";
```

## Notes

- Web is disabled through `"platforms": ["ios", "android"]` in `app.json`.
- Expo automatically configures Metro for npm workspaces, so no extra monorepo config is needed.
- Production builds are handled by EAS (`eas build`), not by Turborepo.
