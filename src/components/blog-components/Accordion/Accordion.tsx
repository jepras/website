'use client';

import React from 'react';
import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Prose } from '@/components/ui/prose';

interface AccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
  }[];
  defaultValue?: string;
}

export default function Accordion({ 
  items, 
  defaultValue 
}: AccordionProps) {
  return (
    <Prose className="prose-h3:mt-0 prose-h3:mb-2">
      <ShadcnAccordion 
        type="single"
        collapsible
        defaultValue={defaultValue}
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