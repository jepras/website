'use client';

import React from 'react';
import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Prose } from '@/components/ui/prose';

interface MarkdownAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function MarkdownAccordion({ 
  title, 
  children,
  defaultOpen = false
}: MarkdownAccordionProps) {
  return (
    <Prose className="prose-h3:mt-0 prose-h3:mb-2">
      <ShadcnAccordion 
        type="single"
        collapsible
        defaultValue={defaultOpen ? "item-0" : undefined}
        className="w-full"
      >
        <AccordionItem value="item-0">
          <AccordionTrigger>
            {title}
          </AccordionTrigger>
          <AccordionContent>
            {children}
          </AccordionContent>
        </AccordionItem>
      </ShadcnAccordion>
    </Prose>
  );
} 