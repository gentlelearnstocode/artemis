'use client';

import Link from 'next/link';
import { Scissors, Home, ArrowLeft } from 'lucide-react';
import { Button } from '@repo/ui/button';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center overflow-hidden relative'>
      {/* Decorative background elements */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10' />
      <div className='absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -z-10' />

      <div className='max-w-md w-full space-y-8 animate-in fade-in zoom-in duration-500'>
        <div className='flex justify-center'>
          <div className='w-20 h-20 rounded-2xl bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 rotate-6 hover:rotate-12 transition-transform duration-300'>
            <Scissors className='w-12 h-12 text-white' />
          </div>
        </div>

        <div className='space-y-4'>
          <h1 className='text-6xl font-black tracking-tighter text-foreground'>404</h1>
          <h2 className='text-2xl font-bold tracking-tight'>Page Lost in Space</h2>
          <p className='text-muted-foreground text-sm leading-relaxed'>
            The page you are looking for might have been moved, deleted, or never existed in this
            timeline. Don't worry, we can help you find your way back.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 justify-center pt-4'>
          <Button asChild variant='vibrant' size='lg' className='gap-2'>
            <Link href='/dashboard'>
              <Home className='w-4 h-4' />
              Return to Workbench
            </Link>
          </Button>
          <Button
            variant='outline'
            size='lg'
            className='gap-2 bg-panel/50 backdrop-blur-sm'
            onClick={() => window.history.back()}
          >
            <ArrowLeft className='w-4 h-4' />
            Go Back
          </Button>
        </div>
      </div>

      <div className='mt-12 pt-8 border-t border-panel-border/50 max-w-xs w-full'>
        <p className='text-[10px] uppercase tracking-widest text-muted-foreground font-semibold'>
          Artemis Pod-Clipper Engine
        </p>
      </div>
    </div>
  );
}
