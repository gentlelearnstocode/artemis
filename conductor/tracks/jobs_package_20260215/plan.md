# Implementation Plan: Trigger.dev Utility Package (@repo/jobs)

## Phase 1: Package Scaffolding [checkpoint: 47c25d5]
- [x] Task: Initialize `packages/jobs` directory and base configuration df189e2
    - [x] Create `packages/jobs/package.json` with `@repo/jobs` name and necessary peer dependencies
    - [x] Create `packages/jobs/tsconfig.json` extending `@repo/typescript-config/base.json`
    - [x] Create `packages/jobs/src/index.ts` as the entry point
- [x] Task: Install dependencies 68de7b9
    - [x] Add `@trigger.dev/sdk` to `packages/jobs/package.json`
    - [x] Run `bun install` to link the new package
- [x] Task: Conductor - User Manual Verification 'Phase 1: Package Scaffolding' (Protocol in workflow.md) 47c25d5

## Phase 2: Implementation of `createTask` Factory [checkpoint: f93adac]
- [x] Task: Define `createTask` interface and unit tests (Red Phase) a2de556
    - [x] Create `packages/jobs/src/factory.test.ts`
    - [x] Define expected behavior for default retries and overrides
    - [x] Run tests and verify failure
- [x] Task: Implement `createTask` factory (Green Phase) a2de556
    - [x] Implement the factory in `packages/jobs/src/factory.ts`
    - [x] Ensure proper type forwarding from `@trigger.dev/sdk/v3`
    - [x] Export `createTask` from `packages/jobs/src/index.ts`
    - [x] Run tests and verify success
- [x] Task: Conductor - User Manual Verification 'Phase 2: Implementation' (Protocol in workflow.md) f93adac

## Phase 3: Integration into `apps/web` [checkpoint: 5f219d4]
- [x] Task: Link `@repo/jobs` to `apps/web` b25ac79
    - [x] Add `@repo/jobs: "*"` to `apps/web/package.json` dependencies
    - [x] Run `bun install`
- [x] Task: Refactor existing tasks 533aec6
    - [x] Update `apps/web/src/jobs/process-video.ts` to use `createTask`
    - [x] Verify that types for payload and return value are correctly inferred
- [x] Task: Final Verification 9748a7b
    - [x] Run `bun run check-types` in `apps/web`
    - [x] (Optional) Trigger a test run of `process-video` via the UI or a script to ensure connectivity
- [x] Task: Conductor - User Manual Verification 'Phase 3: Integration' (Protocol in workflow.md) 5f219d4
