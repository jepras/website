'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface InlineCodeProps {
  children: React.ReactNode;
  className?: string;
}

export default function InlineCode({ children, className }: InlineCodeProps) {
  return (
    <code className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-primary",
      className
    )}>
      {children}
    </code>
  );
} 