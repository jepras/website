'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Badge, type BadgeProps } from '@/components/ui/badge';
import { Prose } from '@/components/ui/prose';
import { SquareMousePointer } from 'lucide-react';

interface BlogHoverCardProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  triggerClassName?: string;
  badgeVariant?: BadgeProps['variant'];
}

export default function BlogHoverCard({ 
  trigger, 
  children, 
  className,
  triggerClassName,
  badgeVariant = "outline"
}: BlogHoverCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Badge 
          variant={badgeVariant}
          className={cn("cursor-help", triggerClassName)}
        >
          <div className="flex items-center gap-2">
            <SquareMousePointer className="w-4 h-4" />
            <span>{trigger}</span>
          </div>
        </Badge>
      </HoverCardTrigger>
      <HoverCardContent className={cn("w-80", className)}>
        <Prose className="prose-h4:mt-0 prose-h4:mb-0 prose-*:last:mb-0 text-sm text-muted-foreground">
          {children}
        </Prose>
      </HoverCardContent>
    </HoverCard>
  );
} 