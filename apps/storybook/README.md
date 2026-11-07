# KomZot Storybook

React + Vite Storybook for the shared web components.

## Stack

- Storybook 10.6
- `@storybook/react-vite`
- Addons: docs, accessibility, and Vitest
- Vitest browser mode with Playwright Chromium

## Running

From the repository root:

```sh
npm run storybook:web
```

Or from this directory:

```sh
npm run dev
```

Storybook runs at http://localhost:6006. It is also started by `npm run dev` through Turbo.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start Storybook on port 6006 |
| `npm run build:storybook` | Build static Storybook |
| `npm run test` | Run story tests via Vitest |
| `npm run test:watch` | Run story tests in watch mode |
| `npm run test:coverage` | Run story tests with coverage |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript without emitting |
| `npm run clean` | Remove static output and coverage |

Root aliases:

```sh
npm run dev:storybook
npm run storybook:web
npm run build:storybook
npm run test:storybook
```

## Stories

Stories are co-located with the shared components and loaded from:

```text
../../../packages/ui/src/**/*.web.stories.@(ts|tsx)
```

For example: `packages/ui/src/button.web.stories.tsx`.

See [packages/ui/README.md](../../packages/ui/README.md) for component and story conventions.

## Configuration

`.storybook/main.ts` configures the framework, addons, and story glob. `viteFinal` adds the repository root to `server.fs.allow` so Vite can serve `packages/ui` source outside this workspace.

`.storybook/preview.ts` sets centered layout, controls matchers, and the accessibility test mode.

## Testing

The Vitest addon turns every story into a component test and runs `play` functions for interaction tests. Tests run in headless Chromium through Playwright.

Install the browser once:

```sh
npx playwright install chromium
```

Run only the Storybook project:

```sh
npm run test
```

The `Clicks` Button story verifies that pressing the shared Button calls its `onPress` prop.

## Build output

`npm run build:storybook` writes to `storybook-static/`. Turbo caches this output through the `build:storybook` task, and the directory is gitignored.

## See also

- [Root README](../../README.md)
- [Shared UI](../../packages/ui/README.md)
- [Web app](../web/README.md)
