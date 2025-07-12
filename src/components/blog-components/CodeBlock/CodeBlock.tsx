'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
}

export default function CodeBlock({ 
  children, 
  className,
  title,
  showLineNumbers = false,
  highlightLines = []
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);
  
  // Extract language from className (format: "language-javascript")
  const language = className?.replace('language-', '') || 'text';
  
  // Convert children to string for copying
  const codeString = React.Children.toArray(children).join('');
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg border border-border bg-muted/50 overflow-hidden">
      {/* Header */}
      {(title || language !== 'text') && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
          <div className="flex items-center gap-2">
            {title && (
              <span className="text-sm font-medium text-foreground">{title}</span>
            )}
            {language !== 'text' && (
              <span className="text-xs px-2 py-1 rounded bg-background text-muted-foreground font-mono">
                {language}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="h-8 w-8 p-0"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
      )}
      
      {/* Code Content */}
      <div className="relative">
        <pre className={cn(
          "p-4 overflow-x-auto text-sm leading-relaxed",
          showLineNumbers && "pl-12"
        )}>
          <code className={cn(
            "font-mono",
            className
          )}>
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
} 