# @komzot/ui

Shared cross-platform React components consumed as source by the web and mobile apps.

## Exports

```tsx
import {
  AuthCard,
  AuthScreen,
  Button,
  Form,
  FormError,
  TextField,
  TextLink,
  type ButtonProps,
  type TextFieldProps,
} from "@komzot/ui";
```

The package exposes its TypeScript source directly; it has no build step.

## Components

| Component | Purpose |
| --- | --- |
| `AuthScreen` | Full-screen centered auth container |
| `AuthCard` | Card with title, optional subtitle, optional footer, and children |
| `Form` | Submit container: `<form>` on web, `View` on native |
| `TextField` | Labeled text/email/password input with inline error |
| `FormError` | Accessible form-level error message |
| `TextLink` | Inline link-style action using `onPress` |
| `Button` | Shared action button with disabled, full-width, and loading states |

Auth primitives are used by the web and mobile sign-in/sign-up screens.

## Platform resolution

Every component follows the same source layout:

| File | Platform |
| --- | --- |
| `src/<name>.tsx` | Web |
| `src/<name>.native.tsx` | iOS / Android |
| `src/<name>.types.ts` | Shared prop types |
| `src/index.ts` | Package entry point |

Next.js resolves the web files. Metro resolves the `.native.tsx` files for native builds.

The web app compiles this package via `transpilePackages` in `apps/web/next.config.ts`. Expo automatically resolves workspace packages in Metro.

## Stories

Stories live next to the components:

- `src/*.web.stories.tsx` — used by `apps/storybook`
- `src/*.native.stories.tsx` — used by React Native Storybook in `apps/mobile`

Web stories include interaction tests for `Button`, `Form`, `TextField`, and `TextLink`. Mobile components also have Jest tests in `apps/mobile/__tests__`.

See [apps/storybook/README.md](../../apps/storybook/README.md) for the web test setup and [apps/mobile/README.md](../../apps/mobile/README.md) for native Storybook.

## Adding a component

1. Add the shared prop types.
2. Add the web implementation as `<name>.tsx`.
3. Add the native implementation as `<name>.native.tsx`.
4. Export it from `src/index.ts`.
5. Add a web story and, when relevant, a native story.
6. Add interaction or Jest coverage for interactive behavior.

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
- [Auth package](../auth/README.md)
