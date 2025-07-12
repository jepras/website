'use client';

import React from 'react';
import { AlertCircle, Info, CheckCircle, AlertTriangle } from 'lucide-react';
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
    className: 'border-blue-500/20 bg-blue-500/10 text-blue-300',
    iconClassName: 'text-blue-400'
  },
  warning: {
    icon: AlertTriangle,
    className: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-300',
    iconClassName: 'text-yellow-400'
  },
  success: {
    icon: CheckCircle,
    className: 'border-green-500/20 bg-green-500/10 text-green-300',
    iconClassName: 'text-green-400'
  },
  error: {
    icon: AlertCircle,
    className: 'border-red-500/20 bg-red-500/10 text-red-300',
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
    <div className={cn(
      "my-6 rounded-lg border p-4",
      style.className,
      className
    )}>
      <div className="flex items-start gap-3">
        <Icon className={cn("mt-0.5 w-5 h-5 flex-shrink-0", style.iconClassName)} />
        <div className="flex-1">
          {title && (
            <h4 className="font-semibold mb-2 text-white">{title}</h4>
          )}
          <div className="text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 