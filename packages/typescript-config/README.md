# @komzot/typescript-config

Shared TypeScript presets for the monorepo.

## Presets

| File | Used by | Purpose |
| --- | --- | --- |
| `base.json` | Packages and mobile | Strict shared compiler settings |
| `nextjs.json` | `apps/web` | DOM libraries, bundler resolution, JSX, Next plugin |
| `react-vite.json` | `apps/storybook` | DOM libraries, bundler resolution, React JSX for Vite |

## Usage

Web (`apps/web/tsconfig.json`):

```json
{
  "extends": "@komzot/typescript-config/nextjs.json",
  "compilerOptions": {
    "paths": { "@/*": ["./src/*"] }
  }
}
```

Storybook (`apps/storybook/tsconfig.json`):

```json
{
  "extends": "@komzot/typescript-config/react-vite.json",
  "compilerOptions": {
    "types": ["vite/client", "node"]
  }
}
```

Mobile (`apps/mobile/tsconfig.json`) extends both Expo and the shared base:

```json
{
  "extends": [
    "expo/tsconfig.base",
    "@komzot/typescript-config/base.json"
  ]
}
```

Shared UI (`packages/ui/tsconfig.json`) extends `base.json` directly.

## Notes

- There is no build step; apps consume the JSON presets.
- Mobile relies on Expo's base for React Native module resolution, with the shared base layered on top for strictness.

## Commands

Type checking is run from each consumer. From the repository root:

```sh
npm run typecheck
```

## See also

- [Root README](../../README.md)
- [ESLint config](../eslint-config/README.md)
