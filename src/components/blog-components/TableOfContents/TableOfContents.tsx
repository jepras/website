'use client';

import React from 'react';
import { TocItem } from '@/lib/content';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export default function TableOfContents({ items, className }: TableOfContentsProps) {
  if (!items || items.length === 0) {
    return null;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderTocItem = (item: TocItem) => {
    const indentClass = {
      2: 'ml-0',
      3: 'ml-4',
      4: 'ml-8',
      5: 'ml-12',
      6: 'ml-16',
    }[item.level] || 'ml-0';

    return (
      <li key={item.id} className={cn('mb-1', indentClass)}>
        <button
          onClick={() => scrollToSection(item.id)}
          className={cn(
            'text-left text-sm text-muted-foreground hover:text-foreground transition-colors',
            'hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded'
          )}
        >
          {item.text}
        </button>
      </li>
    );
  };

  return (
    <nav className={cn('hidden lg:block h-fit', className)}>
      <div className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h2 className="text-lg font-semibold text-foreground mb-4">Table of Contents</h2>
        <ul className="space-y-1">
          {items.map(renderTocItem)}
        </ul>
      </div>
    </nav>
  );
} 