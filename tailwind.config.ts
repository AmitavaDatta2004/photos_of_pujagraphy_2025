
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Festival colors
				festival: {
					saffron: '#FFA500',
					maroon: '#800000',
					red: '#D22B2B',
					golden: '#FFD700',
					cream: '#FFFDD0',
					purple: '#8B008B',
					teal: '#008080',
					lime: '#32CD32',
					violet: '#9400D3',
					indigo: '#4B0082'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'petal-fall': {
					'0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				},
				'rotate-center': {
					'0%': { transform: 'rotate(0)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'gradient-x': {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'petal-fall': 'petal-fall 10s linear infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
				'rotate-center': 'rotate-center 8s linear infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
			},
			backgroundImage: {
				'alpona-pattern': "url('/alpona-pattern.png')",
				'festive-gradient': 'linear-gradient(to right, #FFA500, #D22B2B)',
				'festive-dark-gradient': 'linear-gradient(to right, #FFA500, #800000)',
				'rainbow-gradient': 'linear-gradient(to right, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)',
				'dark-gradient': 'linear-gradient(to right, #4B0082, #800080, #9932CC)',
				'gold-gradient': 'linear-gradient(to right, #FFD700, #FFA500, #FF8C00)',
				'dark-radial': 'radial-gradient(circle, rgba(76,29,149,0.5) 0%, rgba(15,23,42,1) 60%)',
				'dark-festival': 'linear-gradient(135deg, rgba(255,165,0,0.15) 0%, rgba(210,43,43,0.15) 100%)',
				'festival-glow': 'linear-gradient(to right, rgba(255,215,0,0.2), rgba(210,43,43,0.2))',
				'aurora-gradient': 'linear-gradient(to right, #4B0082, #9932CC, #FFD700)',
				'purple-dream': 'linear-gradient(135deg, #9400D3 0%, #4B0082 100%)',
				'golden-sunset': 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
				'night-sky': 'linear-gradient(to bottom, #0f172a, #1e1b4b)',
				'festive-night': 'linear-gradient(to bottom, #161932, #301934)',
			},
			fontFamily: {
				heading: ['Playfair Display', 'serif'],
				body: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
