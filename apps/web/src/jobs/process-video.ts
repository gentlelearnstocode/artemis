import { createTask } from '@repo/jobs';
import clientPromise from '@repo/db';
import { VIDEO_CLIP_COLLECTION, VideoClip } from '@repo/db/schema';
import { ObjectId } from 'mongodb';

export const videoProcessingTask = createTask({
  id: 'process-video',
  run: async (payload: { videoUrl: string; userId: string; clipId?: string }) => {
    console.log('Processing video:', payload.videoUrl);

    // 1. Update status to 'processing' (already set by trigger, but good to be explicit if we add more steps)

    // Placeholder for FFmpeg and Gemini logic
    // 2. Download video
    // 3. Extract audio/frames
    // 4. Send to Gemini for analysis
    // 5. Cut video with FFmpeg
    // 6. Upload clips to Blob

    // For now, just simulate work and update to 'completed'
    await new Promise((resolve) => setTimeout(resolve, 5000));

    try {
      const client = await clientPromise;
      const db = client.db();

      await db.collection<VideoClip>(VIDEO_CLIP_COLLECTION).updateOne(
        {
          originalUrl: payload.videoUrl,
          userId: new ObjectId(payload.userId),
          status: 'processing',
        },
        {
          $set: {
            status: 'completed',
            title: 'Processed Video Clip',
            viralScore: 85,
            metadata: { processedAt: new Date() },
          },
        },
      );
    } catch (error) {
      console.error('Failed to update status in task:', error);
    }

    return { success: true, message: 'Video processed successfully' };
  },
});
