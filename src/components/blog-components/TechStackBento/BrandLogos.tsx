import React from 'react';

// Brand Logo Components
export const NextJsLogo = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
  </svg>
);

export const TypeScriptLogo = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M2 63.91v62.5h125v-125H2zm100 73.73a7.6 7.6 0 01-2.47 3.93 7.73 7.73 0 01-4.3 1.4c-.62 0-1.17-.09-1.65-.28a4.1 4.1 0 01-1.24-.8 3.83 3.83 0 01-.8-1.18 5.88 5.88 0 01-.28-1.4V65.32h-6.22v57.69c0 2.66.53 4.8 1.6 6.44 1.07 1.62 2.67 2.9 4.8 3.84 2.13.94 4.8 1.4 8 1.4 3.2 0 5.87-.46 8-1.4 2.13-.94 3.73-2.22 4.8-3.84 1.07-1.64 1.6-3.78 1.6-6.44V65.32h-6.22v57.69zM73.6 0v6.16h37.5v58.12h6.25V6.16H125V0z"/>
  </svg>
);

export const TailwindLogo = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c35.3 0 64-28.7 64-64S99.3 0 64 0zM32 64c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32z"/>
  </svg>
);

export const PythonLogo = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM32 48c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm32 32c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"/>
  </svg>
);

export const FastAPILogo = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM32 32h64v64H32z"/>
  </svg>
);

export const VercelLogo = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 0L128 128H0L64 0z"/>
  </svg>
);

export const DockerLogo = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM32 32h64v64H32z"/>
  </svg>
);

export const SupabaseLogo = () => (
  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor">
    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zM32 32h64v64H32z"/>
  </svg>
);

// Usage example:
export const brandLogos = {
  'Next.js': <NextJsLogo />,
  'TypeScript': <TypeScriptLogo />,
  'Tailwind': <TailwindLogo />,
  'Python': <PythonLogo />,
  'FastAPI': <FastAPILogo />,
  'Vercel': <VercelLogo />,
  'Docker': <DockerLogo />,
  'Supabase': <SupabaseLogo />,
}; 