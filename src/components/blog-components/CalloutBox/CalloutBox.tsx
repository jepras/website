'use client';

import React from 'react';
import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

interface CalloutBoxProps {
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutStyles = {
  info: {
    icon: Info,
    variant: 'default' as const,
    iconClassName: 'text-blue-400'
  },
  warning: {
    icon: AlertTriangle,
    variant: 'default' as const,
    iconClassName: 'text-yellow-400'
  },
  success: {
    icon: CheckCircle,
    variant: 'default' as const,
    iconClassName: 'text-green-400'
  },
  error: {
    icon: AlertCircle,
    variant: 'destructive' as const,
    iconClassName: 'text-red-400'
  }
};

export default function CalloutBox({ 
  type = 'info', 
  title, 
  children, 
  className 
}: CalloutBoxProps) {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <Alert 
      variant={style.variant} 
      className={cn("my-6", className)}
    >
      <Icon className={cn("h-4 w-4", style.iconClassName)} />
      <AlertTitle className={title ? "block" : "hidden"}>
        {title}
      </AlertTitle>
      <AlertDescription>
        {children}
      </AlertDescription>
    </Alert>
  );
} 