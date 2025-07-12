'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SubheaderProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: 'default' | 'accent' | 'subtle' | 'gradient';
  className?: string;
  id?: string;
}

export default function Subheader({
  children,
  level = 2,
  variant = 'default',
  className,
  id
}: SubheaderProps) {
  const baseStyles = "font-semibold tracking-tight";
  
  const levelStyles = {
    1: "text-4xl md:text-5xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg"
  };

  const variants = {
          default: "text-foreground",
    accent: "text-primary",
          subtle: "text-muted-foreground",
          gradient: "bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
  };

  const Component = `h${level}` as keyof React.JSX.IntrinsicElements;

  return React.createElement(Component, {
    id,
    className: cn(
      baseStyles,
      levelStyles[level],
      variants[variant],
      "mb-4 mt-8 first:mt-0",
      className
    )
  }, children);
} 