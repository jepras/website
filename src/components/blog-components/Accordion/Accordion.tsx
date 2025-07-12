'use client';

import React from 'react';
import {
  Accordion as ShadcnAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
  );
} 