import { put } from '@vercel/blob';

export const blobService = {
  upload: async (file: File, path: string) => {
    const { url } = await put(path, file, { access: 'public' });
    return url;
  },
};
