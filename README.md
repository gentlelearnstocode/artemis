# Artemis - Pod-Clipper Engine

Artemis is a sophisticated "Pod-Clipper" engine designed to automate the extraction of viral clips from long-form video content using AI.

## Architecture

The system is built as a monorepo using Turborepo and Bun.

### Tech Stack

- **Frontend/Compute**: Next.js 16 (App Router, Server Actions)
- **Database**: Vercel Postgres (Metadata) + Drizzle ORM
- **Storage**: Vercel Blob (Video Assets)
- **AI Layer**: Google Gemini 1.5/2.0 Flash (`@google/generative-ai`)
- **Background Jobs**: Trigger.dev v3 (Long-running Video Processing)
- **UI**: shadcn/ui + Tailwind CSS

### System Flow

1.  **Input**: User submits a YouTube URL via the Next.js frontend.
2.  **Dispatch**: A Server Action triggers a `process-video` task in Trigger.dev.
3.  **Processing (Background)**:
    - Trigger.dev worker downloads the video.
    - Audio/Frames are extracted and sent to Google Gemini Flash.
    - Gemini identifies viral moments and generates metadata (title, score).
    - FFmpeg (running in Trigger.dev) cuts the clips.
    - Clips are uploaded to Vercel Blob.
    - Clip metadata is saved to Vercel Postgres via Drizzle.
4.  **Output**: Frontend polls or receives updates and displays the generated clips.

## Project Structure

- `apps/web`: Next.js 16 application containing the frontend and API/services.
  - `src/db`: Drizzle ORM schema and client.
  - `src/jobs`: Trigger.dev background tasks.
  - `src/services`: Core services (AI, Storage).
- `packages/ui`: Shared UI components (shadcn/ui placeholders).

## Getting Started

1.  **Install Dependencies**:

    ```bash
    bun install
    ```

2.  **Environment Variables**:
    Create `.env.local` in `apps/web` with:
    - `POSTGRES_URL` (Neon/Vercel Postgres)
    - `BLOB_READ_WRITE_TOKEN` (Vercel Blob)
    - `GEMINI_API_KEY` (Gemini)
    - `TRIGGER_SECRET_KEY` (Trigger.dev)
    - `TRIGGER_PROJECT_ID` (Trigger.dev)

3.  **Run Development Server**:

    ```bash
    bun dev
    ```

4.  **Run Trigger.dev Dev CLI**:
    ```bash
    cd apps/web && bunx trigger.dev@latest dev
    ```
