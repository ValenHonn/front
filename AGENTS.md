# AGENTS Guide for `frontproject`

## Purpose
- This guide is for coding agents working in this repository.
- Follow these instructions unless the user explicitly asks otherwise.
- Prefer small, targeted edits that match existing project structure.

## Rule Sources Checked
- `.cursor/rules/`: not present.
- `.cursorrules`: not present.
- `.github/copilot-instructions.md`: not present.
- No repository-level Cursor/Copilot instruction files were found at analysis time.

## Tech Stack Snapshot
- Frontend: React 19 + TypeScript.
- Build tool: Vite 7 with `@vitejs/plugin-react-swc`.
- Routing: `react-router-dom`.
- Auth persistence: `js-cookie`.
- Linting: ESLint 9 flat config + `typescript-eslint` + React Hooks + React Refresh.
- Styling: base CSS in `src/index.css`; Tailwind v4 CLI available via `input.css`.

## Design System Integration

This project follows a strict UI/UX design system defined in:
./design.md

All UI generation, refactoring, or component creation MUST comply with this design system.

### Core Design Principles (Mandatory)

- Do NOT use standard borders (1px lines) for layout separation.
- Use surface layering (background color hierarchy) instead of lines.
- Maintain tonal depth: avoid flat UI.
- Use asymmetrical layouts where appropriate to avoid rigid grid designs.
- Prefer whitespace over visual separators.

### Visual Style Rules

- Primary color system is based on deep indigo tones.
- Status colors must reflect meaning:
  - Error (critical)
  - Warning (moderate)
  - Success (healthy)

- Avoid pure black (#000000) for text or shadows.
- Use soft, tinted shadows (prefer primary-based shadows).

### Components Behavior

- Cards must NOT have borders; use surface contrast instead.
- Tables must NOT use row dividers; use hover states for separation.
- Inputs should use soft backgrounds and subtle focus states (ghost borders).
- Buttons must follow primary/secondary hierarchy defined in the design system.

### AI / Floating Elements

- Must use glassmorphism:
  - Semi-transparent background
  - Backdrop blur
  - Larger border radius than standard components

### Typography

- Headings: strong, high contrast hierarchy
- Body text: use softer color (`on_surface_variant`)
- Labels: small, uppercase, spaced

### Enforcement Rule

If any UI is generated that conflicts with `design.md`, the design system MUST take priority over default UI patterns or frameworks.

## Repository Layout
- App entry: `src/main.tsx`.
- Root component: `src/App.tsx`.
- Route definitions: `src/routes/AppRoutes.tsx`.
- Auth context/provider: `src/context/AuthContext.tsx`.
- Protected routing guard: `src/ProtectedRoute.tsx`.
- API service modules: `src/services/*.ts`.
- Pages: `src/pages/*.tsx`.
- Shared UI components: `src/components/*.tsx`.

## Package Manager and Install
- Lockfiles present: `package-lock.json` and `pnpm-lock.yaml`.
- Default to `npm` unless user requests `pnpm`.
- Install dependencies: `npm install`.

## Dev / Build / Lint Commands
- Start dev server: `npm run dev`.
- Production build: `npm run build`.
- Preview built app: `npm run preview`.
- Lint project: `npm run lint`.
- Tailwind watcher output: `npm run build:styles`.

## Test Commands (Current State)
- There is currently no test runner configured in `package.json`.
- There are no `*.test.*` or `*.spec.*` files in the repo.
- Do not invent passing test results; report that tests are not configured.

## Single-Test Execution Guidance
- Because no test framework is installed, a true single-test command is unavailable.
- If user asks to run one test now, explain tests are not configured and run lint/build instead.
- If tests are introduced later, prefer these common patterns:
- Vitest single file: `npx vitest run src/path/file.test.ts`.
- Vitest single case: `npx vitest run src/path/file.test.ts -t "case name"`.
- Jest single file: `npx jest src/path/file.test.ts`.
- Jest single case: `npx jest src/path/file.test.ts -t "case name"`.

## TypeScript and Compiler Constraints
- TS config is strict (`"strict": true`).
- Unused locals and params are errors (`noUnusedLocals`, `noUnusedParameters`).
- Fallthrough in `switch` is disallowed.
- App TS runs in bundler mode with `noEmit`.
- Keep code compatible with ES2022 target and modern browser APIs.

## Import Conventions
- Use relative imports; no path alias is configured.
- Prefer `import type { ... }` for type-only imports.
- Group imports in this order:
- 1) external packages, 2) internal modules, 3) styles.
- Keep import paths consistent with existing folder layout.
- Avoid deep cross-feature imports when a closer module boundary exists.

## Naming Conventions
- React components: PascalCase (`Login`, `ProtectedRoute`, `AppRoutes`).
- Context providers/hooks: PascalCase provider + `useX` hook (`AuthProvider`, `useAuth`).
- Functions/variables: camelCase.
- Service modules: camelCase file names ending in `Service` (`loginService.ts`).
- Exported constants: UPPER_SNAKE_CASE for API URLs where already used.
- Types/interfaces: PascalCase (`LoginData`, `RegisterData`).

## React Conventions
- Use function components and hooks.
- Keep page-level UI in `src/pages` and reusable UI in `src/components`.
- Keep route table centralized in `src/routes/AppRoutes.tsx`.
- Keep auth gate logic in `ProtectedRoute` and auth state in context.
- Prefer controlled form inputs as done in current pages.

## Error Handling Patterns
- In service layer, check `response.ok`; throw `Error` with backend message fallback.
- In UI/context, catch async errors close to where user feedback is shown.
- Prefer actionable messages over generic alerts when possible.
- Do not swallow errors silently; either rethrow or surface to UI state.
- Avoid excessive `console.log` in committed code unless debugging is requested.

## Formatting and Style
- No Prettier config is present; rely on ESLint + existing style in touched files.
- Use consistent semicolon/quote style within each edited file.
- Keep functions short and intention-revealing.
- Avoid adding comments for obvious code; keep only high-value comments.
- Preserve language consistency for user-facing text within a page/flow.
- Keep JSX readable: one prop per line when lines become long.

## State and Auth Notes
- Auth uses cookie-backed token verification via `verifyTokenService`.
- `AuthContext` is the source of truth for `user`, `isAuthenticated`, and `loading`.
- Components using auth must be descendants of `AuthProvider`.
- `useAuth` intentionally throws if context is missing; do not remove this guard.

## API and Networking Notes
- Current API endpoints are hardcoded to `http://localhost:3000/api/...`.
- Keep `credentials: "include"` for auth-related requests.
- Preserve JSON request/response behavior unless backend contract changes.
- Centralize API calls in `src/services` rather than inline in components.

## What to Run Before Finishing a Change
- Minimum verification for most edits:
- 1) `npm run lint`
- 2) `npm run build`
- For UI-only tweaks, run `npm run dev` for manual smoke check when possible.
- If command execution is unavailable, clearly state what was not run.

## Agent Working Rules
- Do not add new dependencies unless needed and justified.
- Do not refactor unrelated files during focused tasks.
- Keep diffs small; preserve public behavior unless asked to change it.
- When introducing new files, follow existing naming and folder patterns.
- Prefer explicit types over `any`; if `any` is unavoidable, keep scope narrow.
- If adding tests in future, colocate them near feature files or under `src/__tests__` consistently.

## Quick Command Reference
- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run preview`
- `npm run build:styles`

## If User Requests Single-Test Runs Today
- Explain tests are not configured in this repo yet.
- Offer to add a test framework (recommended: Vitest + React Testing Library).
- Meanwhile validate changes with lint + build + targeted manual checks.
