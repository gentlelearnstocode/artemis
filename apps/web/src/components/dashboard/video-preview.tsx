'use client';

import React from 'react';
import { Maximize2, Play } from 'lucide-react';

export const VideoPreview = () => {
  return (
    <div className='flex-1 flex flex-col gap-4'>
      <div className='relative aspect-9/16 max-h-[700px] w-full mx-auto bg-panel rounded-3xl border border-panel-border overflow-hidden group shadow-2xl'>
        {/* Placeholder for Video/Mockup Image */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-60" />

        {/* AI Caption Overlay */}
        <div className='absolute inset-0 flex flex-col items-center justify-center p-8 text-center pointer-events-none'>
          <h2 className='text-4xl md:text-5xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] leading-[0.9]'>
            <span className='text-primary'>AI</span> IS CHANGING
            <br />
            EVERYTHING
          </h2>
        </div>

        {/* Controls Overlay */}
        <div className='absolute inset-x-0 bottom-0 p-6 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'>
          <div className='flex items-center justify-between gap-4'>
            <button className='w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors'>
              <Play className='w-5 h-5 fill-white text-white ml-1' />
            </button>
            <div className='flex-1 h-1 bg-white/20 rounded-full overflow-hidden'>
              <div className='h-full w-[40%] bg-primary shadow-[0_0_10px_rgba(93,93,255,1)]' />
            </div>
            <button className='w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors'>
              <Maximize2 className='w-4 h-4 text-white' />
            </button>
          </div>
          <div className='flex justify-between mt-2 text-[10px] font-bold text-white/60'>
            <span>0:24</span>
            <span>1:58</span>
          </div>
        </div>

        {/* Time Stamp Badge */}
        <div className='absolute top-6 left-6 px-3 py-1.5 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white'>
          00:41
        </div>

        {/* Fullscreen Toggle */}
        <div className='absolute top-6 right-6'>
          <button className='w-8 h-8 rounded-lg bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-black/60 transition-all'>
            <div className='w-1 h-1 bg-white rounded-full mx-0.5' />
            <div className='w-1 h-1 bg-white rounded-full mx-0.5' />
          </button>
        </div>
      </div>
    </div>
  );
};
