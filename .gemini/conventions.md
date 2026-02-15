# Development Conventions

## General Rules

- Use **Bun** for all commands (`bun install`, `bun dev`, `bun run`).
- Keep shared logic in `packages/`.
- Prefer **Next.js Server Actions** for client-server communication.
- All long-running tasks MUST be offloaded to **Trigger.dev v3** in `apps/web/src/jobs`.

## Coding Style

- **Naming**: Use camelCase for variables/functions, PascalCase for components/types.
- **Styling**: Use Tailwind CSS classes. Use the `cn()` utility for conditional classes.
- **Components**: Follow the pattern in `packages/ui` for shared components. Use `"use client"` only when necessary.
- **Imports**: Use absolute imports where configured (e.g., `@repo/ui`, `@repo/db`).
- **Functions**: Use named exports for functions, use arrow functions when possible.

## AI Integration

- Use `@google/generative-ai` to interact with Gemini.
- Target `gemini-1.5-flash` or `gemini-2.0-flash-exp` for processing.
- Centralize AI logic in `apps/web/src/services/ai/`.
