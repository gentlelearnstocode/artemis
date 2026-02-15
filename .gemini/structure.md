# Project Structure

The project is organized as a Turborepo monorepo.

## Apps
- `apps/web`: The primary web application.
  - `src/app`: Next.js pages and layouts.
  - `src/jobs`: Trigger.dev task definitions (e.g., `process-video.ts`).
  - `src/services`: Business logic integrations (AI, Storage).
  - `src/lib`: Shared utilities (e.g., `cn`).

## Packages
- `packages/db`: Shared database client and schema definitions for MongoDB.
- `packages/ui`: Shared UI components (React).
- `packages/eslint-config`: Shared linting configurations.
- `packages/typescript-config`: Shared TS configurations.
