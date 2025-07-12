'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface EmeraldCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'subtle';
}

export default function EmeraldCard({ 
  title, 
  children, 
  className,
  variant = 'default'
}: EmeraldCardProps) {
  const baseStyles = "rounded-lg border px-6 pb-6 pt-0 prose-*:mt-0";
  
  const variantStyles = {
    default: "border-primary/20 text-primary bg-primary/10",
    subtle: "border-primary/10 text-foreground bg-primary/5"
  };

  return (
    <div className={cn(
      baseStyles,
      variantStyles[variant],
      "prose-*:p-0",
      className, 
    )}>
      {title && (
        <h3 className="font-semibold mb-1 text-primary mt-4">
          {title}
        </h3>
      )}
      <div className="text-sm leading-relaxed prose-*:mb-0">
        {children}
      </div>
    </div>
  );
} 