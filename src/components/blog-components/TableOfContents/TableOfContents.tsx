'use client';

import React from 'react';
import { TocItem } from '@/lib/content';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  items: TocItem[];
  className?: string;
}

export default function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = React.useState<string>('');



  React.useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -35% 0px',
        threshold: 0,
      }
    );

    // Observe all headers
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) {
    return null;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate the target position with offset for fixed header
      const headerHeight = 64; // Height of the fixed header
      const offset = 32; // Additional padding
      const totalOffset = headerHeight + offset;
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = elementPosition - totalOffset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
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

    const isActive = activeId === item.id;

    return (
      <li key={item.id} className={cn('mb-1', indentClass)}>
        <button
          onClick={() => scrollToSection(item.id)}
          className={cn(
            'text-left text-sm transition-colors w-full text-left px-2 py-1 rounded',
            'hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
            isActive 
              ? 'text-primary font-medium bg-primary/10 border-l-2 border-primary' 
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          {item.text}
        </button>
      </li>
    );
  };

  return (
    <nav className={cn('hidden lg:block', className)}>
      <div className="fixed top-24 right-8 w-64 max-h-[calc(100vh-6rem)] overflow-y-auto bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg">
        <h2 className="text-lg font-semibold text-foreground mb-4">Table of Contents</h2>
        <ul className="space-y-1">
          {items.map(renderTocItem)}
        </ul>
      </div>
    </nav>
  );
} 