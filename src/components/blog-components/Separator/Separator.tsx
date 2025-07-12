import React from 'react';
import { Separator as UISeparator } from '@/components/ui/separator';

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export default function Separator({ 
  className, 
  orientation = 'horizontal', 
  decorative = true 
}: SeparatorProps) {
  return (
    <UISeparator 
      className={`mt-16 ${className || ''}`}
      orientation={orientation}
      decorative={decorative}
    />
  );
} 