'use client';

import React from 'react';
import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Prose } from '@/components/ui/prose';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

interface MarkdownAccordionGroupProps {
  items: AccordionItem[];
  defaultValue?: string;
}

export default function MarkdownAccordionGroup({ 
  items, 
  defaultValue 
}: MarkdownAccordionGroupProps) {
  // Find the first item that should be open by default
  const defaultOpenIndex = items.findIndex(item => item.defaultOpen);
  const defaultOpenValue = defaultOpenIndex >= 0 ? `item-${defaultOpenIndex}` : defaultValue;

  return (
    <Prose className="prose-h3:mt-0 prose-h3:mb-2">
      <ShadcnAccordion 
        type="single"
        collapsible
        defaultValue={defaultOpenValue}
        className="w-full"
      >
        {items.map((item, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
          >
            <AccordionTrigger>
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </ShadcnAccordion>
    </Prose>
  );
} 