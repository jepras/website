'use client';

import React from 'react';
import { Clock, User, Tag, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface BlogIntroProps {
  title: string;
  description: string;
  readTime?: string;
  author?: string;
  tags?: string[];
  date?: string;
  className?: string;
  variant?: 'default' | 'featured' | 'minimal';
}

export default function BlogIntro({
  title,
  description,
  readTime,
  author,
  tags,
  date,
  className,
  variant = 'default'
}: BlogIntroProps) {
  const variants = {
    default: "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700",
    featured: "bg-gradient-to-br from-primary/20 to-blue-900/20 border border-primary/20",
    minimal: "bg-gray-900/30 border border-gray-700/50"
  };

  return (
    <div className={cn(
      "rounded-xl p-6 mb-8",
      variants[variant],
      className
    )}>
      <div className="space-y-4">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          {title}
        </h1>
        
        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed">
          {description}
        </p>
        
        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-gray-400" />
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
          
          
          {author && (
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>By {author}</span>
            </div>
          )}
          
          {date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={date} className="text-gray-400">
                {(() => {
                  // Parse YYYY-DD-MM format
                  const [year, day, month] = date.split('-').map(Number);
                  const dateObj = new Date(year, month - 1, day); // month is 0-indexed in JS
                  
                  const monthName = dateObj.toLocaleDateString('en-GB', { month: 'long' });
                  
                  // Add ordinal suffix to day
                  const getOrdinalSuffix = (day: number) => {
                    if (day > 3 && day < 21) return 'th';
                    switch (day % 10) {
                      case 1: return 'st';
                      case 2: return 'nd';
                      case 3: return 'rd';
                      default: return 'th';
                    }
                  };
                  
                  return `${day}${getOrdinalSuffix(day)} of ${monthName} ${year}`;
                })()}
              </time>
            </div>
          )}
          {readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          )}
        </div>
        
        
      </div>
    </div>
  );
} 