'use client';

import React from 'react';
import TechStackBento, { TechStackItem } from './TechStackBento';

const techStackItems: TechStackItem[] = [
  { name: 'Next.js', icon: 'nextjs', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
  { name: 'TypeScript', icon: 'typescript', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
  { name: 'Shadcn', icon: '🎨', iconType: 'emoji', colSpan: 1, rowSpan: 1 },
  { name: 'Tailwind', icon: 'tailwindcss', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
  { name: 'Python', icon: 'python', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
  { name: 'FastAPI', icon: 'fastapi', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
  { name: 'Railway', icon: '🚂', iconType: 'emoji', colSpan: 1, rowSpan: 1 },
  { name: 'Supabase', icon: 'supabase', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
  { name: 'Outlook', icon: '📧', iconType: 'emoji', colSpan: 1, rowSpan: 1 },
  { name: 'Pipedrive', icon: '📊', iconType: 'emoji', colSpan: 1, rowSpan: 1 },
  { name: 'Vercel', icon: 'vercel', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
  { name: 'Docker', icon: 'docker', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
  { name: 'OpenRouter', icon: '🤖', iconType: 'emoji', colSpan: 1, rowSpan: 1 },
];

export default function TechStackBentoDemo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Grid Layout with Devicon Icons</h3>
        <TechStackBento items={techStackItems} columns={4} />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Mixed Icon Types</h3>
        <TechStackBento 
          items={[
            { name: 'Next.js', icon: 'nextjs', iconType: 'devicon', colSpan: 2, rowSpan: 2 },
            { name: 'TypeScript', icon: 'typescript', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
            { name: 'Shadcn', icon: '🎨', iconType: 'emoji', colSpan: 1, rowSpan: 1 },
            { name: 'Tailwind', icon: 'tailwindcss', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
            { name: 'Python', icon: 'python', iconType: 'devicon', colSpan: 2, rowSpan: 2 },
            { name: 'FastAPI', icon: 'fastapi', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
            { name: 'Railway', icon: '🚂', iconType: 'emoji', colSpan: 1, rowSpan: 1 },
            { name: 'Supabase', icon: 'supabase', iconType: 'devicon', colSpan: 1, rowSpan: 1 },
          ]} 
          columns={4} 
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">URL Icons Example</h3>
        <TechStackBento 
          items={[
            { name: 'GitHub', icon: 'https://github.com/github.png', iconType: 'url', colSpan: 1, rowSpan: 1 },
            { name: 'Slack', icon: 'https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg', iconType: 'url', colSpan: 1, rowSpan: 1 },
            { name: 'Discord', icon: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_white_RGB.png', iconType: 'url', colSpan: 1, rowSpan: 1 },
            { name: 'Notion', icon: 'https://www.notion.so/images/logo-ios.png', iconType: 'url', colSpan: 1, rowSpan: 1 },
          ]} 
          columns={4} 
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Auto-Detection (No iconType needed)</h3>
        <TechStackBento 
          items={[
            { name: 'Next.js', icon: 'nextjs', colSpan: 1, rowSpan: 1 }, // Auto-detected as devicon
            { name: 'React', icon: 'react', colSpan: 1, rowSpan: 1 }, // Auto-detected as devicon
            { name: 'Smile', icon: '😊', colSpan: 1, rowSpan: 1 }, // Auto-detected as emoji
            { name: 'GitHub', icon: 'https://github.com/github.png', colSpan: 1, rowSpan: 1 }, // Auto-detected as URL
          ]} 
          columns={4} 
        />
      </div>
    </div>
  );
} 