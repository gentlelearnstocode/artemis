# Artemis Project - GEMINI.md

This file provides context and instructions for the Gemini CLI when working on the Artemis project.

## Project Overview

Artemis is an AI-powered "Pod-Clipper" engine designed to automate the extraction of viral clips from long-form video content (e.g., podcasts).

- **Architecture**: Turborepo Monorepo.
- **Runtime**: Bun.
- **Main App**: `apps/web` (Next.js 16 with App Router).
- **Core Workflow**: Video URL submitted -> Trigger.dev background task -> Gemini analysis -> FFmpeg clipping -> Vercel Blob storage -> MongoDB persistence.

## Key Technologies

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4, shadcn/ui.
- **Backend/Jobs**: Trigger.dev v3 for long-running video processing.
- **AI**: Google Gemini 1.5/2.0 Flash (`@google/generative-ai` and `ai` SDK).
- **Database**: MongoDB (Client/Schema in `packages/db`). 
  - *Note*: Ignore older references to Postgres/Drizzle in README.md or comments; the project has migrated to MongoDB.
- **Storage**: Vercel Blob.
- **Tools**: Bun, Turborepo, TypeScript, ESLint, Prettier.

## Project Structure

- `apps/web/`: Primary Next.js application.
  - `src/app/`: App Router pages and layouts.
  - `src/jobs/`: Trigger.dev task definitions (e.g., `process-video.ts`).
  - `src/services/`: AI and Storage integrations.
- `packages/db/`: MongoDB client and schema definitions.
- `packages/ui/`: Shared React components.
- `packages/eslint-config/` & `packages/typescript-config/`: Shared configurations.

## Building and Running

- **Install dependencies**: `bun install`
- **Start development**: `bun dev` (Runs Next.js and background jobs via Turbo)
- **Run tests**: `bun test` (If applicable)
- **Linting**: `bun lint`
- **Formatting**: `bun format`
- **Trigger.dev CLI**: `cd apps/web && bunx trigger.dev@latest dev`

## Development Conventions

- **Commands**: Use `bun` for all package management and script execution.
- **Database**: Use the constants and types defined in `packages/db/src/schema.ts`. Always use the shared `MongoClient` promise from `packages/db/src/index.ts`.
- **Async Tasks**: All video processing must happen within Trigger.dev tasks in `apps/web/src/jobs`.
- **Styling**: Tailwind CSS 4. Use the `cn()` utility from `@/lib/utils` for conditional classes.
- **AI Logic**: Centralize Gemini-related logic in `apps/web/src/services/ai/`.
- **Absolute Imports**:
  - `@repo/db` for database.
  - `@repo/ui` for shared components.
  - `@/` for `apps/web/src/`.

## Environment Variables (apps/web/.env.local)

- `MONGODB_URI`: MongoDB connection string.
- `GEMINI_API_KEY`: Google AI Studio API Key.
- `BLOB_READ_WRITE_TOKEN`: Vercel Blob token.
- `TRIGGER_SECRET_KEY`: Trigger.dev secret key.
- `TRIGGER_PROJECT_ID`: Trigger.dev project ID.
