'use client';

import { useEffect } from 'react';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';
import { Button } from '@repo/ui/button';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center overflow-hidden relative'>
      {/* Decorative background elements - Red/Warning tinted */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-destructive/10 rounded-full blur-[120px] -z-10' />

      <div className='max-w-md w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500'>
        <div className='flex justify-center'>
          <div className='w-20 h-20 rounded-2xl bg-destructive/20 border border-destructive/30 flex items-center justify-center shadow-2xl shadow-destructive/10'>
            <AlertCircle className='w-12 h-12 text-destructive' />
          </div>
        </div>

        <div className='space-y-4'>
          <h1 className='text-3xl font-bold tracking-tight text-foreground'>
            Something went wrong
          </h1>
          <p className='text-muted-foreground text-sm leading-relaxed'>
            We encountered an unexpected error while processing your request. Our AI engine is
            looking into it, but in the meantime, you can try refreshing the page.
          </p>
          {error.digest && (
            <div className='py-2 px-3 bg-panel/50 border border-panel-border rounded-lg inline-block'>
              <p className='text-[10px] font-mono text-muted-foreground'>
                Error ID: {error.digest}
              </p>
            </div>
          )}
        </div>

        <div className='flex flex-col sm:flex-row gap-3 justify-center pt-4'>
          <Button
            variant='default'
            size='lg'
            className='gap-2 bg-destructive hover:bg-destructive/90 text-white shadow-destructive/20'
            onClick={() => reset()}
          >
            <RefreshCcw className='w-4 h-4' />
            Try Again
          </Button>
          <Button
            asChild
            variant='outline'
            size='lg'
            className='gap-2 bg-panel/50 backdrop-blur-sm'
          >
            <Link href='/dashboard'>
              <Home className='w-4 h-4' />
              Workbench
            </Link>
          </Button>
        </div>
      </div>

      <div className='mt-12 pt-8 border-t border-panel-border/50 max-w-xs w-full'>
        <p className='text-[10px] uppercase tracking-widest text-muted-foreground font-semibold'>
          Technical Support Required?
        </p>
      </div>
    </div>
  );
}
