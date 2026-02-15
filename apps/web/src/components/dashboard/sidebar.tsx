'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Library,
  TrendingUp,
  Settings,
  Scissors,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from './sidebar-provider';

const navItems = [
  { name: 'Workbench', href: '/', icon: LayoutDashboard },
  { name: 'Collections', href: '/collections', icon: Library },
  { name: 'Analytics', href: '/analytics', icon: TrendingUp },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <aside
      className={cn(
        'h-full border-r border-panel-border bg-panel/20 backdrop-blur-xl flex flex-col z-20 transition-all duration-300 ease-in-out relative',
        isCollapsed ? 'w-20' : 'w-64',
      )}
    >
      <button
        onClick={toggleSidebar}
        className='absolute -right-3 top-20 w-6 h-6 rounded-full bg-panel border border-panel-border flex items-center justify-center hover:bg-panel-border transition-colors z-30 shadow-md'
      >
        {isCollapsed ? (
          <ChevronRight className='w-4 h-4 text-muted-foreground' />
        ) : (
          <ChevronLeft className='w-4 h-4 text-muted-foreground' />
        )}
      </button>

      <div className={cn('p-6 flex items-center gap-3', isCollapsed && 'justify-center px-0')}>
        <div className='w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 rotate-3 shrink-0'>
          <Scissors className='w-6 h-6 text-white' />
        </div>
        {!isCollapsed && (
          <div className='overflow-hidden whitespace-nowrap transition-all duration-300'>
            <h1 className='font-bold text-lg tracking-tight'>Artemis</h1>
            <p className='text-[10px] text-muted-foreground uppercase tracking-widest font-semibold'>
              Pod-Clipper AI
            </p>
          </div>
        )}
      </div>

      <nav className='flex-1 px-4 py-6 space-y-1'>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative',
                isCollapsed && 'justify-center px-0',
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/20 shadow-sm shadow-primary/5'
                  : 'text-muted-foreground hover:text-foreground hover:bg-panel/50 border border-transparent',
              )}
            >
              <item.icon
                className={cn(
                  'w-5 h-5 transition-transform duration-200 shrink-0',
                  isActive ? 'text-primary' : 'group-hover:scale-110',
                )}
              />
              {!isCollapsed && (
                <span className='font-medium text-sm overflow-hidden whitespace-nowrap transition-all duration-300'>
                  {item.name}
                </span>
              )}
              {isActive && (
                <span
                  className={cn(
                    'absolute w-1 bg-primary rounded-r-full shadow-[0_0_12px_rgba(var(--primary),0.8)]',
                    isCollapsed ? 'left-0 h-8' : 'left-[-16px] h-6',
                  )}
                />
              )}
            </Link>
          );
        })}
      </nav>

      <div className='p-4 mt-auto'>
        {!isCollapsed ? (
          <div className='p-4 rounded-2xl bg-linear-to-br from-panel/40 to-panel-border/20 border border-panel-border/50 relative overflow-hidden group'>
            <div className='absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity'>
              <HelpCircle className='w-12 h-12' />
            </div>
            <p className='text-xs font-bold mb-1 relative z-10'>Need help?</p>
            <p className='text-[10px] text-muted-foreground mb-3 relative z-10 leading-relaxed'>
              Check out our documentation for tips and tricks.
            </p>
            <button className='w-full py-2 bg-panel-border/50 hover:bg-panel-border text-[10px] font-bold uppercase tracking-wider rounded-lg transition-colors border border-panel-border relative z-10'>
              Docs
            </button>
          </div>
        ) : (
          <button className='w-12 h-12 mx-auto flex items-center justify-center rounded-2xl bg-panel-border/20 border border-panel-border/50 hover:bg-panel-border/40 transition-colors group relative'>
            <HelpCircle className='w-6 h-6 text-muted-foreground group-hover:text-foreground' />
          </button>
        )}

        <div
          className={cn(
            'mt-4 pt-4 border-t border-panel-border flex items-center justify-between px-2',
            isCollapsed && 'justify-center px-0',
          )}
        >
          {!isCollapsed ? (
            <>
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-success' />
                <span className='text-[10px] font-medium text-muted-foreground'>System Online</span>
              </div>
              <span className='text-[10px] font-mono text-muted-foreground/50'>v2.4.0</span>
            </>
          ) : (
            <div className='w-2 h-2 rounded-full bg-success shrink-0' />
          )}
        </div>
      </div>
    </aside>
  );
};
