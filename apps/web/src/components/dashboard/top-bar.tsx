'use client';

import React from 'react';
import { Search, Zap, User } from 'lucide-react';
import { Input } from '@repo/ui/input';
import { Button } from '@repo/ui/button';
import { submitVideoUrl } from '@/app/actions/video';

export const TopBar = () => {
  const [videoUrl, setVideoUrl] = React.useState('');
  const [isPending, setIsPending] = React.useState(false);

  const handleScan = async () => {
    if (!videoUrl) return;
    setIsPending(true);

    try {
      const formData = new FormData();
      formData.append('videoUrl', videoUrl);
      const result = await submitVideoUrl(formData);

      if (result.success) {
        setVideoUrl('');
        // We could add a toast here if we had a toast library
        console.log('Video submitted successfully');
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Failed to submit:', error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <header className='h-[72px] border-b border-panel-border flex items-center px-6 justify-between gap-6 bg-background/50 backdrop-blur-md sticky top-0 z-10'>
      <div className='flex-1 max-w-xl relative'>
        <div className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'>
          <Search className='w-4 h-4' />
        </div>
        <Input
          className='pl-10 h-11 bg-panel/30 border-panel-border/50 text-foreground placeholder:text-muted-foreground rounded-xl'
          placeholder='Paste YouTube URL (e.g. youtube.com/watch?v=...)'
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          disabled={isPending}
        />
        <div className='absolute right-2 top-1/2 -translate-y-1/2'>
          <Button
            size='sm'
            className='h-8 rounded-lg font-bold text-[10px] uppercase tracking-widest'
            onClick={handleScan}
            disabled={isPending || !videoUrl}
          >
            <Zap className={`w-3 h-3 mr-2 ${isPending ? 'animate-spin' : 'fill-white'}`} />
            {isPending ? 'Scanning...' : 'Scan'}
          </Button>
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex flex-col items-end'>
          <span className='text-[10px] font-bold uppercase tracking-widest text-muted-foreground'>
            Credits
          </span>
          <span className='text-sm font-bold'>
            <span className='text-primary'>1,240</span> / 5,000
          </span>
        </div>
        <div className='w-10 h-10 rounded-xl bg-panel border border-panel-border flex items-center justify-center cursor-pointer hover:border-primary/50 transition-all overflow-hidden bg-linear-to-br from-panel to-panel-border'>
          <User className='w-5 h-5 text-muted-foreground' />
        </div>
      </div>
    </header>
  );
};
