# @komzot/eslint-config

Shared flat ESLint configurations for every workspace.

## Exports

| Export | Used by | Contents |
| --- | --- | --- |
| `@komzot/eslint-config/base` | Storybook, packages | JS/TS recommended rules, browser and Node globals, generated-output ignores |
| `@komzot/eslint-config/next` | `apps/web` | Base config plus `eslint-config-next` core-web-vitals and TypeScript rules |
| `@komzot/eslint-config/react-native` | `apps/mobile` | Base config plus `eslint-config-expo/flat` |

## Usage

Web (`apps/web/eslint.config.mjs`):

```js
import config from "@komzot/eslint-config/next";

export default config;
```

Mobile (`apps/mobile/eslint.config.mjs`):

```js
import config from "@komzot/eslint-config/react-native";

export default config;
```

Storybook or a plain package:

```js
import base from "@komzot/eslint-config/base";

export default [
  ...base,
  { ignores: ["storybook-static/**"] },
];
```

## Notes

- The base config ignores `node_modules`, build output, `.next`, `.expo`, `coverage`, Playwright reports, test results, and `storybook-static`.
- ESLint plugins and configs are dependencies of this package, so consumers do not need to declare them individually.
- There is no build step.

## Commands

Lint is run from the consuming workspace. From the repository root:

```sh
npm run lint
```

## See also

- [Root README](../../README.md)
- [TypeScript config](../typescript-config/README.md)
