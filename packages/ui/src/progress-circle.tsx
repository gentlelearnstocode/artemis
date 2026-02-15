'use client';

import * as React from 'react';
import { cn } from './lib/utils';

interface ProgressCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
}

const ProgressCircle = React.forwardRef<HTMLDivElement, ProgressCircleProps>(
  ({ className, value, size = 40, strokeWidth = 4, showValue = false, ...props }, ref) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
      <div
        ref={ref}
        className={cn('relative flex items-center justify-center', className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <svg className='w-full h-full -rotate-90'>
          <circle
            className='text-panel-border'
            strokeWidth={strokeWidth}
            stroke='currentColor'
            fill='transparent'
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className='text-primary transition-all duration-500 ease-in-out'
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap='round'
            stroke='currentColor'
            fill='transparent'
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        {showValue && <span className='absolute text-[10px] font-bold'>{value}</span>}
      </div>
    );
  },
);
ProgressCircle.displayName = 'ProgressCircle';

export { ProgressCircle };
