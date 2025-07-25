/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		screens: {
  			'3xl': '1600px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  										'--tw-prose-body': 'hsl(var(--muted-foreground))',
					'--tw-prose-headings': 'hsl(var(--foreground))',
  					'--tw-prose-links': 'hsl(var(--primary))',
  					'--tw-prose-bold': 'hsl(var(--foreground))',
  					'--tw-prose-counters': 'hsl(var(--muted-foreground))',
  					'--tw-prose-bullets': 'hsl(var(--muted-foreground))',
  					'--tw-prose-hr': 'hsl(var(--border))',
  					'--tw-prose-quotes': 'hsl(var(--foreground))',
  					'--tw-prose-quote-borders': 'hsl(var(--border))',
  					'--tw-prose-captions': 'hsl(var(--muted-foreground))',
  					'--tw-prose-code': 'hsl(var(--primary))',
  					'--tw-prose-pre-code': 'hsl(var(--foreground))',
  					'--tw-prose-pre-bg': 'hsl(var(--muted))',
  					'--tw-prose-pre-border': 'hsl(var(--border))',
  					'--tw-prose-th-borders': 'hsl(var(--border))',
  					'--tw-prose-td-borders': 'hsl(var(--border))',
  										'--tw-prose-invert-body': 'hsl(var(--muted-foreground))',
					'--tw-prose-invert-headings': 'hsl(var(--foreground))',
  					'--tw-prose-invert-links': 'hsl(var(--primary))',
  					'--tw-prose-invert-bold': 'hsl(var(--foreground))',
  					'--tw-prose-invert-counters': 'hsl(var(--muted-foreground))',
  					'--tw-prose-invert-bullets': 'hsl(var(--muted-foreground))',
  					'--tw-prose-invert-hr': 'hsl(var(--border))',
  					'--tw-prose-invert-quotes': 'hsl(var(--foreground))',
  					'--tw-prose-invert-quote-borders': 'hsl(var(--border))',
  					'--tw-prose-invert-captions': 'hsl(var(--muted-foreground))',
  					'--tw-prose-invert-code': 'hsl(var(--primary))',
  					'--tw-prose-invert-pre-code': 'hsl(var(--foreground))',
  					'--tw-prose-invert-pre-bg': 'hsl(var(--muted))',
  					'--tw-prose-invert-pre-border': 'hsl(var(--border))',
  					'--tw-prose-invert-th-borders': 'hsl(var(--border))',
  					'--tw-prose-invert-td-borders': 'hsl(var(--border))',
  				},
  			},
  		},
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
} 