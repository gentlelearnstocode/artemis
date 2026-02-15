# Specification: Trigger.dev Utility Package (@repo/jobs)

## Overview
Establish a dedicated package `@repo/jobs` to serve as a utility library for Trigger.dev background tasks. The primary goal is to provide a standardized `createTask` factory that encapsulates project-wide defaults and simplifies task definition within consumer applications (like `apps/web`).

## Functional Requirements
- **Package Initialization:** Create `packages/jobs` with necessary configuration (`package.json`, `tsconfig.json`).
- **Standardized Task Factory:** Implement `createTask` which:
    - Wraps `@trigger.dev/sdk/v3`'s `task`.
    - Automatically applies default retry policies (e.g., 3 attempts).
    - Automatically applies default timeouts.
    - Provides a consistent logging interface or metadata enrichment.
- **Dependency Integration:** Ensure the factory works seamlessly with existing types and the `ai` SDK if needed for task definitions.

## Acceptance Criteria
- [ ] `packages/jobs` exists and is installable as a monorepo dependency.
- [ ] `createTask` successfully exports and provides correct TypeScript types.
- [ ] `apps/web/src/jobs/process-video.ts` is refactored to use `createTask` from `@repo/jobs`.
- [ ] The `process-video` task remains functional and identifiable by Trigger.dev.

## Non-Functional Requirements
- **Zero Overhead:** The wrapper should not introduce significant runtime overhead.
- **Transparency:** The factory should allow overriding defaults on a per-task basis.
