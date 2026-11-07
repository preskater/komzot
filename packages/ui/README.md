# @komzot/ui

Shared cross-platform React components consumed as source by the web and mobile apps.

## Exports

```tsx
import { Button, type ButtonProps } from "@komzot/ui";
```

The package exposes its TypeScript source directly; it has no build step.

## Platform resolution

| File | Platform |
| --- | --- |
| `src/button.tsx` | Web |
| `src/button.native.tsx` | iOS / Android |
| `src/button.types.ts` | Shared prop types |
| `src/index.ts` | Package entry point |

Next.js resolves `button.tsx`. Metro resolves `button.native.tsx` for native builds.

The web app compiles this package via `transpilePackages` in `apps/web/next.config.ts`. Expo automatically resolves workspace packages in Metro.

## Stories

Stories live next to the components:

- `src/button.web.stories.tsx` — used by `apps/storybook`
- `src/button.native.stories.tsx` — used by React Native Storybook in `apps/mobile`

See [apps/storybook/README.md](../../apps/storybook/README.md) for the web test setup and [apps/mobile/README.md](../../apps/mobile/README.md) for native Storybook.

## Adding a component

1. Add the shared prop types.
2. Add the web implementation as `<name>.tsx`.
3. Add the native implementation as `<name>.native.tsx`.
4. Export it from `src/index.ts`.
5. Add a web story and, when relevant, a native story.

## Commands

From this directory:

```sh
npm run lint
npm run typecheck
```

From the repository root:

```sh
npm run lint -w @komzot/ui
npm run typecheck -w @komzot/ui
```

## Peer dependencies

- `react` ^19
- `react-native` >=0.88

## See also

- [Root README](../../README.md)
- [Web app](../../apps/web/README.md)
- [Mobile app](../../apps/mobile/README.md)
