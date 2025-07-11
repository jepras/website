/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors based on the screenshot
        background: '#1a1a2e', // Dark background
        primary: '#e94560', // Pink/Red accent
        secondary: '#483d8b', // Darker purple accent
        accent: '#0f3460', // Deep blue/purple accent
        text: '#e0e0e0', // Light text color
        heading: '#ffffff', // White headings
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        // Using Inter as defined in layout.tsx
        sans: ['Inter', 'sans-serif'],
      },
      screens: {
        // Example custom breakpoint
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 