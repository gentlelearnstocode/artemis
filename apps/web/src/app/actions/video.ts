'use server';

import { revalidatePath } from 'next/cache';
import clientPromise from '@repo/db';
import { VIDEO_CLIP_COLLECTION, VideoClip } from '@repo/db/schema';
import { videoProcessingTask } from '@/jobs/process-video';
import { ObjectId } from 'mongodb';

export async function submitVideoUrl(formData: FormData) {
  const videoUrl = formData.get('videoUrl') as string;
  const userId = '000000000000000000000000'; // Hardcoded for now as per plan

  if (!videoUrl || !videoUrl.includes('youtube.com')) {
    return { error: 'Invalid YouTube URL' };
  }

  try {
    const client = await clientPromise;
    const db = client.db();

    const newClip: VideoClip = {
      userId: new ObjectId(userId),
      originalUrl: videoUrl,
      storageUrl: '', // Will be filled by processing task
      status: 'processing',
      createdAt: new Date(),
    };

    const result = await db.collection<VideoClip>(VIDEO_CLIP_COLLECTION).insertOne(newClip);

    if (!result.insertedId) {
      throw new Error('Failed to save to database');
    }

    // Trigger the background task
    await videoProcessingTask.trigger({
      videoUrl,
      userId,
    });

    revalidatePath('/dashboard');
    return { success: true };
  } catch (error) {
    console.error('Submission error:', error);
    return { error: 'Failed to submit video for processing' };
  }
}
