'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

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
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className={cn("inline-block cursor-help", triggerClassName)}>
        {trigger}
      </div>
      
      {isVisible && (
        <div 
          className={cn(
            "absolute z-50 w-80 bg-gray-900 border border-gray-700 text-white p-4 rounded-lg shadow-lg",
            "top-full left-1/2 transform -translate-x-1/2 mt-2",
            "before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1",
            "before:w-0 before:h-0 before:border-l-4 before:border-r-4 before:border-b-4 before:border-transparent before:border-b-gray-700",
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
} 