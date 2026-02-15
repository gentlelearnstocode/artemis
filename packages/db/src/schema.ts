import { ObjectId } from 'mongodb';

export const USER_COLLECTION = 'users';
export const VIDEO_CLIP_COLLECTION = 'video_clips';

export interface User {
  _id?: ObjectId;
  email: string;
  name?: string;
  createdAt: Date;
}

export interface VideoClip {
  _id?: ObjectId;
  userId: ObjectId;
  originalUrl: string;
  storageUrl: string;
  status: 'processing' | 'completed' | 'failed';
  viralScore?: number;
  title?: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
}
