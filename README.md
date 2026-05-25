# vite-ts

A production-ready React + TypeScript starter built with Vite, featuring a marketing card UI with animated illustrations.

## Getting Started

### Prerequisites

- Node.js >= 20

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Other commands

| Command                 | Description                         |
| ----------------------- | ----------------------------------- |
| `npm test`              | Run tests with Vitest               |
| `npm run test:coverage` | Run tests with coverage report      |
| `npm run lint`          | Lint with ESLint                    |
| `npm run format`        | Format with Prettier                |
| `npm run typecheck`     | TypeScript type checking            |
| `npm run check`         | Run typecheck + lint + format check |

## Deployment

<!-- TODO: add deployment link -->

[riotters-recruitment-task.vercel.app](riotters-recruitment-task.vercel.app)

## Project Decisions

### SVG files as assets

SVG assets (`/public/card-assets/`) are served as static files rather than inlined as React components. This keeps component files lean and lets the browser cache assets independently. For illustration-level SVGs used purely as decorative images (lights, backgrounds, masks), the `<img>` tag approach is intentional — it separates design assets from logic and makes them easy to swap without touching component code. Icon-level SVGs that carry interactive semantics (e.g. `CloseIcon`, `LightningIcon`) are inlined as JSX components so their paths and filters remain type-safe and co-located with their usage.

### Components folder structure

Each component lives in its own folder (`ComponentName/ComponentName.tsx` + `index.ts`). Sub-components that belong exclusively to a parent (e.g. `DigitGrid`, `Donut`, `LightningIcon`, `CloseIcon` inside `Card/`) are nested under that parent's directory. This keeps the public API surface clean — only `Card` is exported from `@/components`, and its internal building blocks are not exposed unless explicitly re-exported. Shared primitives (`Badge`, `Typography`) sit at the top level of `components/` since they are reused across the tree.

### Tooling choices

| Tool                                 | Reason                                                                                                                  |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| **Vite**                             | Fast HMR and native ESM — no bundler overhead during development                                                        |
| **Tailwind CSS v4**                  | Utility-first styling with zero runtime; v4's `@tailwindcss/vite` integration removes the PostCSS config step           |
| **Motion (Framer Motion v12)**       | Declarative animation API that pairs well with React 19's concurrent features                                           |
| **Vitest + Testing Library**         | Shares Vite config and transforms, so tests run in the same environment as the app                                      |
| **ESLint 9 flat config + Prettier**  | Flat config removes the need for `.eslintrc` files; Prettier handles formatting so ESLint focuses purely on correctness |
| **Husky + commitlint + lint-staged** | Enforces conventional commits and runs linting/formatting only on staged files to keep the feedback loop fast           |
