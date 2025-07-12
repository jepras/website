'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings?: TocItem[];
  className?: string;
  title?: string;
}

export default function TableOfContents({ 
  headings = [], 
  className,
  title = "Table of Contents"
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={cn(
      "sticky top-4 space-y-2 rounded-lg border border-gray-700 bg-gray-900/50 p-4",
      className
    )}>
      <h2 className="text-sm font-semibold text-white mb-3">{title}</h2>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => scrollToHeading(heading.id)}
              className={cn(
                "flex items-center gap-2 w-full text-left px-2 py-1 rounded text-sm transition-colors",
                "hover:bg-gray-800/50 hover:text-white",
                activeId === heading.id 
                  ? "text-emerald-400 bg-emerald-500/10" 
                  : "text-gray-400"
              )}
              style={{ paddingLeft: `${(heading.level - 1) * 12 + 8}px` }}
            >
              {heading.level > 2 && (
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
              )}
              <span className="truncate">{heading.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
} 