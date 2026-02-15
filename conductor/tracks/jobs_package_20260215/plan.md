# Implementation Plan: Trigger.dev Utility Package (@repo/jobs)

## Phase 1: Package Scaffolding
- [ ] Task: Initialize `packages/jobs` directory and base configuration
    - [ ] Create `packages/jobs/package.json` with `@repo/jobs` name and necessary peer dependencies
    - [ ] Create `packages/jobs/tsconfig.json` extending `@repo/typescript-config/base.json`
    - [ ] Create `packages/jobs/src/index.ts` as the entry point
- [ ] Task: Install dependencies
    - [ ] Add `@trigger.dev/sdk` to `packages/jobs/package.json`
    - [ ] Run `bun install` to link the new package
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Package Scaffolding' (Protocol in workflow.md)

## Phase 2: Implementation of `createTask` Factory
- [ ] Task: Define `createTask` interface and unit tests (Red Phase)
    - [ ] Create `packages/jobs/src/factory.test.ts`
    - [ ] Define expected behavior for default retries and overrides
    - [ ] Run tests and verify failure
- [ ] Task: Implement `createTask` factory (Green Phase)
    - [ ] Implement the factory in `packages/jobs/src/factory.ts`
    - [ ] Ensure proper type forwarding from `@trigger.dev/sdk/v3`
    - [ ] Export `createTask` from `packages/jobs/src/index.ts`
    - [ ] Run tests and verify success
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Implementation' (Protocol in workflow.md)

## Phase 3: Integration into `apps/web`
- [ ] Task: Link `@repo/jobs` to `apps/web`
    - [ ] Add `@repo/jobs: "*"` to `apps/web/package.json` dependencies
    - [ ] Run `bun install`
- [ ] Task: Refactor existing tasks
    - [ ] Update `apps/web/src/jobs/process-video.ts` to use `createTask`
    - [ ] Verify that types for payload and return value are correctly inferred
- [ ] Task: Final Verification
    - [ ] Run `bun run check-types` in `apps/web`
    - [ ] (Optional) Trigger a test run of `process-video` via the UI or a script to ensure connectivity
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Integration' (Protocol in workflow.md)
