'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Prose } from '@/components/ui/prose';

interface BlogHoverCardProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  triggerClassName?: string;
}

export default function BlogHoverCard({ 
  trigger, 
  children, 
  className,
  triggerClassName 
}: BlogHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className={cn("inline-block cursor-help", triggerClassName)}>
          {trigger}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className={cn("w-80", className)}>
        <Prose className="prose-h4:mt-0 prose-h4:mb-0 prose-*:last:mb-0">
          {children}
        </Prose>
      </HoverCardContent>
    </HoverCard>
  );
} 