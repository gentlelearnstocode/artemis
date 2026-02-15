# Database (MongoDB)

## Current Status
While some documentation (README.md) and legacy comments might mention Postgres or Drizzle, the project has migrated to **MongoDB**.

## Configuration
- Client and Schema are located in `packages/db`.
- Collection constants (e.g., `USER_COLLECTION`, `VIDEO_CLIP_COLLECTION`) are defined in `packages/db/src/schema.ts`.
- Use the native `mongodb` driver.

## Schema Highlights
- `users`: User metadata.
- `video_clips`: Tracks original URLs, storage URLs, status (`processing`, `completed`, `failed`), viral scores, and titles.
