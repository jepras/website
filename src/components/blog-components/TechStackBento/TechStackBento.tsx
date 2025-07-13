'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

export interface TechStackItem {
  name: string;
  icon: string | React.ReactNode; // You can use emoji, SVG string, React component, or Devicon name
  colSpan?: number; // How many columns this item spans (default: 1)
  rowSpan?: number; // How many rows this item spans (default: 1)
  color?: string;
  iconType?: 'emoji' | 'svg' | 'component' | 'devicon' | 'url'; // Type of icon for proper rendering
}

interface TechStackBentoProps {
  items: TechStackItem[];
  layout?: 'grid' | 'masonry' | 'flow';
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
  itemClassName?: string;
}

export default function TechStackBento({
  items,
  layout = 'grid',
  columns = 4,
  className,
  itemClassName
}: TechStackBentoProps) {
  // Tailwind classes that need to be included for JIT compilation
  // col-span-1 col-span-2 col-span-3 col-span-4 col-span-5 col-span-6
  // row-span-1 row-span-2 row-span-3 row-span-4 row-span-5 row-span-6
  // Helper function to render different icon types
  const renderIcon = (item: TechStackItem) => {
    const { icon, iconType } = item;
    
    // Dynamic sizing with constraints: max 80% width, max 50% height, min 40px
    const iconSize = 'min-w-10 min-h-10 max-w-[80%] max-h-[50%] w-auto h-auto';
    
    // Auto-detect icon type if not specified
    if (!iconType) {
      if (typeof icon === 'string') {
        if (icon.startsWith('http')) {
          return <img src={icon} alt={item.name} className={cn(iconSize, "object-contain")} />;
        } else if (icon.startsWith('<svg')) {
          return <div className={iconSize} dangerouslySetInnerHTML={{ __html: icon }} />;
        } else if (icon.length <= 2) {
          return <span className={cn(iconSize, "flex items-center justify-center text-4xl")}>{icon}</span>; // Emoji
        } else {
          // Assume it's a Devicon name
          return (
            <img 
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
              alt={item.name}
              className={iconSize}
            />
          );
        }
      } else {
        return <div className={iconSize}>{icon}</div>; // React component
      }
    }
    
    // Explicit icon type handling
    switch (iconType) {
      case 'emoji':
        return <span className={cn(iconSize, "flex items-center justify-center text-4xl")}>{icon as string}</span>;
      case 'url':
        return <img src={icon as string} alt={item.name} className={cn(iconSize, "object-contain")} />;
      case 'svg':
        return <div className={iconSize} dangerouslySetInnerHTML={{ __html: icon as string }} />;
      case 'devicon':
        return (
          <img 
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
            alt={item.name}
            className={iconSize}
          />
        );
      case 'component':
      default:
        return <div className={iconSize}>{icon as React.ReactNode}</div>;
    }
  };
  const getGridCols = (cols: number) => {
    switch (cols) {
      case 2: return 'grid-cols-2';
      case 3: return 'grid-cols-3';
      case 4: return 'grid-cols-4';
      case 5: return 'grid-cols-5';
      case 6: return 'grid-cols-6';
      default: return 'grid-cols-4';
    }
  };

  const getItemSpan = (colSpan: number = 1, rowSpan: number = 1, maxColumns: number) => {
    // Ensure colSpan doesn't exceed the maximum columns
    const adjustedColSpan = Math.min(colSpan, maxColumns);
    
    // Use a mapping to ensure Tailwind includes these classes
    const colSpanClasses = {
      1: 'col-span-1',
      2: 'col-span-2', 
      3: 'col-span-3',
      4: 'col-span-4',
      5: 'col-span-5',
      6: 'col-span-6'
    };
    
    const rowSpanClasses = {
      1: 'row-span-1',
      2: 'row-span-2',
      3: 'row-span-3', 
      4: 'row-span-4',
      5: 'row-span-5',
      6: 'row-span-6'
    };
    
    return `${colSpanClasses[adjustedColSpan as keyof typeof colSpanClasses] || 'col-span-1'} ${rowSpanClasses[rowSpan as keyof typeof rowSpanClasses] || 'row-span-1'}`;
  };

  const getItemStyles = (colSpan: number = 1, rowSpan: number = 1) => {
    const area = colSpan * rowSpan;
    if (area >= 4) {
      return 'p-6 text-base'; // Consistent text size
    } else if (area >= 2) {
      return 'p-4 text-base'; // Consistent text size
    } else {
      return 'p-3 text-base'; // Consistent text size
    }
  };

  if (layout === 'masonry') {
    return (
      <div className={cn("columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4", className)}>
        {items.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "break-inside-avoid mb-4 border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors",
              itemClassName
            )}
          >
            <CardContent className={cn("flex flex-col items-center justify-center text-center h-full", getItemStyles(item.colSpan, item.rowSpan))}>
              <div className="flex-1 flex items-center justify-center min-h-0">
                {renderIcon(item)}
              </div>
              <div className="font-medium text-foreground mt-2">{item.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (layout === 'flow') {
    return (
      <div className={cn("flex flex-wrap gap-3", className)}>
        {items.map((item, index) => (
          <Card
            key={index}
            className={cn(
              "border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors",
              itemClassName
            )}
          >
            <CardContent className={cn("flex items-center gap-2 h-full", getItemStyles(item.colSpan, item.rowSpan))}>
              <div className="flex items-center justify-center">
                {renderIcon(item)}
              </div>
              <div className="font-medium text-foreground">{item.name}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Default grid layout
  return (
    <div className={cn(
      "grid gap-4 grid-flow-row auto-rows-min",
      getGridCols(columns),
      className
    )}>
      {items.map((item, index) => (
        <Card
          key={index}
          className={cn(
            getItemSpan(item.colSpan, item.rowSpan, columns),
            "border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors overflow-hidden max-h-32",
            itemClassName
          )}
        >
          <CardContent className={cn("flex flex-col items-center justify-center text-center h-full", getItemStyles(item.colSpan, item.rowSpan))}>
            <div className="flex-1 flex items-center justify-center min-h-0">
              {renderIcon(item)}
            </div>
            <div className="font-medium text-foreground mt-2">{item.name}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
} 