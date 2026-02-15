# Specification: Automated Viral Potential Scoring

## Overview
Implement a scoring system that uses Google Gemini to evaluate the "virality" of extracted video clips. This score will help creators prioritize which clips to post.

## Requirements
- **AI Analysis:** Use Gemini 1.5/2.0 Flash to analyze clip transcripts and metadata.
- **Scoring Metrics:** Evaluate clips based on hook strength, emotional resonance, and trend alignment.
- **Data Persistence:** Store the viral score and a brief rationale in the MongoDB `video_clips` collection.
- **Pipeline Integration:** Integrate the scoring step into the existing Trigger.dev `process-video` task.

## Acceptance Criteria
- Each clip has a `viralScore` (0-100).
- Each clip has a `viralRationale` explaining the score.
- Scoring happens automatically during video processing.
- The scoring logic is covered by unit tests with >80% coverage.
