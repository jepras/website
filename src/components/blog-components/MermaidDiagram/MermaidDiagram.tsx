'use client';

import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2 } from 'lucide-react';

interface MermaidDiagramProps {
  chart: string;
  title?: string;
  className?: string;
  variant?: 'default' | 'subtle' | 'bordered';
  enableZoom?: boolean;
}

const MermaidDiagram: React.FC<MermaidDiagramProps> = ({ 
  chart, 
  title, 
  className = '',
  variant = 'default',
  enableZoom = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const ZOOM_STEP = 0.2;
  const MIN_SCALE = 0.3;
  const MAX_SCALE = 3;

  const zoomIn = () => {
    setScale(prev => Math.min(prev + ZOOM_STEP, MAX_SCALE));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - ZOOM_STEP, MIN_SCALE));
  };

  const resetZoom = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  const fitToView = () => {
    if (svgRef.current && containerRef.current) {
      const svg = svgRef.current;
      const container = containerRef.current;
      
      const svgRect = svg.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      const scaleX = containerRect.width / svgRect.width;
      const scaleY = containerRect.height / svgRect.height;
      const newScale = Math.min(scaleX, scaleY, 1) * 0.9; // 90% to add some padding
      
      setScale(newScale);
      setTranslate({ x: 0, y: 0 });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!enableZoom) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - translate.x, y: e.clientY - translate.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!enableZoom || !isDragging) return;
    setTranslate({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (!enableZoom) return;
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale + delta));
    setScale(newScale);
  };

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    // Initialize mermaid with refined dark theme
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      themeVariables: {
        darkMode: true,
        // Primary colors - emerald theme
        primaryColor: '#10b981',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#10b981',
        
        // Background and surface colors
        background: '#000000',
        surfaceColor: '#0f0f0f',
        surfaceBorderColor: '#262626',
        
        // Text colors
        textColor: '#fafafa',
        secondaryTextColor: '#a3a3a3',
        
        // Node colors
        nodeTextColor: '#fafafa',
        nodeBkg: '#171717',
        nodeBorder: '#404040',
        clusterBkg: '#0f0f0f',
        clusterBorder: '#262626',
        
        // Edge colors
        lineColor: '#525252',
        edgeLabelBackground: '#171717',
        edgeLabelColor: '#fafafa',
        
        // Special node colors
        errorBkgColor: '#dc2626',
        errorTextColor: '#ffffff',
        successBkgColor: '#16a34a',
        successTextColor: '#ffffff',
        warningBkgColor: '#d97706',
        warningTextColor: '#ffffff',
        
        // Typography
        fontSize: '14px',
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        
        // Spacing
        nodeSpacing: 50,
        rankSpacing: 50,
        messageFontSize: 14,
        messageFontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        padding: 20,
        nodeSpacing: 50,
        rankSpacing: 50,
      },
      sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        mirrorActors: true,
        bottomMarginAdj: 1,
        useMaxWidth: true,
        rightAngles: false,
        showSequenceNumbers: false,
        actorFontSize: 14,
        actorFontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        noteFontSize: 14,
        noteFontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        messageFontSize: 14,
        messageFontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
      },
      gantt: {
        titleTopMargin: 25,
        barHeight: 20,
        barGap: 4,
        topPadding: 50,
        leftPadding: 75,
        gridLineStartPadding: 35,
        fontSize: 14,
        numberSectionStyles: 4,
        axisFormat: '%Y-%m-%d',
        topAxis: false,
      },
    });

    // Render the diagram
    if (containerRef.current) {
      const diagramId = 'mermaid-diagram-' + Math.random().toString(36).substr(2, 9);
      
      mermaid.render(diagramId, chart).then(({ svg }) => {
        if (containerRef.current) {
          containerRef.current.innerHTML = svg;
          
          // Find the SVG element and store reference
          const svgElement = containerRef.current.querySelector('svg');
          if (svgElement) {
            svgRef.current = svgElement as SVGSVGElement;
            
            // Add transform origin and initial transform
            svgElement.style.transformOrigin = 'center';
            svgElement.style.transform = `translate(${translate.x}px, ${translate.y}px) scale(${scale})`;
            svgElement.style.transition = 'transform 0.2s ease-out';
          }
          
          // Add custom CSS for smoother styling
          const style = document.createElement('style');
          style.textContent = `
            #${diagramId} {
              font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
            }
            #${diagramId} .node rect,
            #${diagramId} .node circle,
            #${diagramId} .node ellipse,
            #${diagramId} .node polygon {
              stroke-width: 1.5px;
              stroke-linejoin: round;
              stroke-linecap: round;
            }
            #${diagramId} .edgePath path {
              stroke-width: 2px;
              stroke-linecap: round;
            }
            #${diagramId} .label {
              font-weight: 500;
            }
            #${diagramId} .cluster rect {
              stroke-width: 1px;
              stroke-dasharray: 5,5;
            }
          `;
          document.head.appendChild(style);
          
          setIsLoading(false);
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error);
        setError(error.message);
        setIsLoading(false);
      });
    }
  }, [chart]);

  // Update SVG transform when scale or translate changes
  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.style.transform = `translate(${translate.x}px, ${translate.y}px) scale(${scale})`;
    }
  }, [scale, translate]);

  const containerClasses = cn(
    'relative transition-all duration-300 ease-in-out',
    {
      'bg-card border border-border rounded-lg shadow-sm': variant === 'default',
      'bg-muted/30 border border-border/50 rounded-lg': variant === 'subtle',
      'bg-background border-2 border-border rounded-lg': variant === 'bordered',
    },
    className
  );

  const contentClasses = cn(
    'flex justify-center items-center min-h-[200px] p-6 overflow-hidden relative',
    {
      'bg-gradient-to-br from-card to-card/80': variant === 'default',
      'bg-muted/20': variant === 'subtle',
      'bg-background': variant === 'bordered',
    }
  );

  return (
    <div className="my-8 group">
      {title && (
        <div className="mb-4 text-center">
          <h4 className="text-lg font-semibold text-foreground tracking-tight">
            {title}
          </h4>
        </div>
      )}
      
      <div className={containerClasses}>
        <div className={contentClasses}>
          {isLoading && (
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <div className="w-4 h-4 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
              <span className="text-sm font-medium">Rendering diagram...</span>
            </div>
          )}
          
          {error && (
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-destructive">Failed to render diagram</p>
                <p className="text-xs text-muted-foreground mt-1">{error}</p>
              </div>
            </div>
          )}
          
          <div 
            ref={containerRef}
            className={cn(
              'w-full transition-opacity duration-300',
              isLoading || error ? 'opacity-0' : 'opacity-100'
            )}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          />
        </div>

        {/* Zoom Controls */}
        {enableZoom && !isLoading && !error && (
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex flex-col gap-1 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-1 shadow-lg">
              <Button
                variant="ghost"
                size="sm"
                onClick={zoomIn}
                disabled={scale >= MAX_SCALE}
                className="h-8 w-8 p-0 hover:bg-primary/10"
                title="Zoom In"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={zoomOut}
                disabled={scale <= MIN_SCALE}
                className="h-8 w-8 p-0 hover:bg-primary/10"
                title="Zoom Out"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={resetZoom}
                className="h-8 w-8 p-0 hover:bg-primary/10"
                title="Reset View"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={fitToView}
                className="h-8 w-8 p-0 hover:bg-primary/10"
                title="Fit to View"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Zoom Level Indicator */}
            <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg px-2 py-1 text-xs text-muted-foreground text-center">
              {Math.round(scale * 100)}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MermaidDiagram; 