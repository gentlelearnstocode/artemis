# Implementation Plan: Automated Viral Potential Scoring

## Phase 1: Core Scoring Logic
- [ ] Task: Define the `ViralScore` type and update MongoDB schema
    - [ ] Write tests for schema validation
    - [ ] Update `packages/db/src/schema.ts` and create migration
- [ ] Task: Implement Gemini scoring service
    - [ ] Write tests for the AI scoring prompt and response parsing
    - [ ] Implement scoring logic in `apps/web/src/services/ai/gemini.ts`
- [ ] Task: Conductor - User Manual Verification 'Phase 1: Core Scoring Logic' (Protocol in workflow.md)

## Phase 2: Pipeline Integration
- [ ] Task: Integrate scoring into Trigger.dev task
    - [ ] Write integration tests for the `process-video` task with scoring
    - [ ] Update `apps/web/src/jobs/process-video.ts` to include the scoring step
- [ ] Task: Conductor - User Manual Verification 'Phase 2: Pipeline Integration' (Protocol in workflow.md)

## Phase 3: Final Polish
- [ ] Task: Optimize AI prompt for better accuracy
    - [ ] Refine prompt based on test cases
    - [ ] Verify score consistency
- [ ] Task: Conductor - User Manual Verification 'Phase 3: Final Polish' (Protocol in workflow.md)
