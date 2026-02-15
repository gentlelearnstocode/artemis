import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Sidebar, TopBar, SidebarProvider } from '@/components/dashboard';
import { Progress } from '@repo/ui/progress';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pod-Clipper AI Workbench',
  description: 'AI-powered podcast clipping tool',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en' className='dark'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <div className='flex h-screen w-full bg-background text-foreground overflow-hidden font-sans'>
            <Sidebar />
            <div className='flex flex-col flex-1 relative overflow-hidden'>
              <TopBar />
              <main className='flex-1 overflow-auto p-6 transition-all duration-300 ease-in-out'>
                {children}
              </main>

              {/* Status Bar / Processing Progress */}
              <div className='h-12 border-t border-panel-border bg-panel flex items-center px-6 gap-4'>
                <div className='flex items-center gap-2'>
                  <span className='w-2 h-2 rounded-full bg-success animate-pulse' />
                  <span className='text-[10px] font-bold uppercase tracking-widest text-success'>
                    Processing
                  </span>
                </div>
                <div className='flex-1 flex items-center gap-4'>
                  <p className='text-[10px] text-muted-foreground whitespace-nowrap'>
                    Gemini analyzing audio context...
                  </p>
                  <Progress value={80} className='h-1 flex-1' />
                  <span className='text-[10px] font-medium'>80%</span>
                </div>
                <div className='flex items-center gap-4 text-[10px] text-muted-foreground'>
                  <span>● Server: US-East</span>
                  <span>v2.4.0-beta</span>
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default RootLayout;
