'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { Card, CardContent } from '@repo/ui/card';
import { Badge } from '@repo/ui/badge';
import { ProgressCircle } from '@repo/ui/progress-circle';
import { Button } from '@repo/ui/button';
import { cn } from '@/lib/utils';

const segments = [
  {
    title: 'The AI Revolution Explained in 30s',
    duration: '0:45s',
    words: 142,
    score: 98,
    viral: true,
  },
  {
    title: 'Why Crypto Failed in 2024',
    duration: '1:12s',
    words: 210,
    score: 85,
    viral: false,
  },
  {
    title: 'Hidden Marketing Hacks',
    duration: '0:30s',
    words: 85,
    score: 72,
    viral: false,
  },
  {
    title: 'Intro Sequence',
    duration: '0:18s',
    words: 20,
    score: 45,
    viral: false,
  },
];

export const ViralSegments = () => {
  return (
    <div className='w-[380px] flex flex-col gap-6'>
      <div className='flex items-center justify-between'>
        <h2 className='text-sm font-bold uppercase tracking-widest flex items-center gap-2'>
          <div className='w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/20' />
          Viral Segments
        </h2>
        <button className='text-[10px] font-bold uppercase tracking-widest text-primary hover:underline'>
          Select All
        </button>
      </div>

      <div className='flex flex-col gap-3'>
        {segments.map((segment) => (
          <Card
            key={segment.title}
            className={cn(
              'group relative border-panel-border bg-panel hover:bg-panel-border transition-all cursor-pointer',
              segment.viral && 'border-primary/50 bg-primary/5',
            )}
          >
            <CardContent className='p-4 flex gap-4'>
              <div className='flex-1 flex flex-col gap-2'>
                {segment.viral && (
                  <div className='flex'>
                    <Badge
                      variant='vibrant'
                      className='h-5 px-2 text-[8px] font-black uppercase tracking-widest'
                    >
                      🔥 Viral Pick
                    </Badge>
                  </div>
                )}
                <h3 className='text-sm font-bold leading-tight group-hover:text-primary transition-colors'>
                  {segment.title}
                </h3>
                <div className='flex items-center gap-3 text-[10px] text-muted-foreground font-medium uppercase tracking-widest'>
                  <span>⏱ {segment.duration}</span>
                  <span>💬 {segment.words} words</span>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center gap-1'>
                <ProgressCircle
                  value={segment.score}
                  size={44}
                  strokeWidth={3}
                  showValue
                  className={segment.viral ? 'text-primary' : 'text-muted-foreground'}
                />
                <span className='text-[8px] font-black uppercase tracking-tighter text-muted-foreground'>
                  Score
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='mt-auto'>
        <Button
          className='w-full h-12 rounded-xl font-bold uppercase tracking-widest gap-2'
          variant='vibrant'
        >
          Download Selected <Download className='w-4 h-4' />
        </Button>
      </div>
    </div>
  );
};
