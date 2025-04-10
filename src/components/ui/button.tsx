'use client';

import type React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'w-full py-1.5 px-16 rounded-lg bg-primary text-white font-bold text-[20px] tracking-wide transition-all duration-300 shadow-[2px_2px_10px_var(--color-secondary))] border-none cursor-pointer flex items-center justify-center gap-2 hover:bg-primary/90 hover:translate-y-[-2px] hover:shadow-[2px_4px_12px_var(--color-secondary)]',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
