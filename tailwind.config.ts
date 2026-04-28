import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
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
				'glitch-1': {
					'0%, 100%': { clipPath: 'inset(0 0 95% 0)', transform: 'translate(-4px, 0)' },
					'25%': { clipPath: 'inset(30% 0 50% 0)', transform: 'translate(4px, 0)' },
					'50%': { clipPath: 'inset(60% 0 20% 0)', transform: 'translate(-2px, 0)' },
					'75%': { clipPath: 'inset(80% 0 5% 0)', transform: 'translate(3px, 0)' },
				},
				'glitch-2': {
					'0%, 100%': { clipPath: 'inset(70% 0 10% 0)', transform: 'translate(4px, 0)' },
					'25%': { clipPath: 'inset(10% 0 70% 0)', transform: 'translate(-4px, 0)' },
					'50%': { clipPath: 'inset(40% 0 40% 0)', transform: 'translate(2px, 0)' },
					'75%': { clipPath: 'inset(5% 0 85% 0)', transform: 'translate(-3px, 0)' },
				},
				'shake': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%': { transform: 'translateX(-6px) rotate(-1deg)' },
					'20%': { transform: 'translateX(6px) rotate(1deg)' },
					'30%': { transform: 'translateX(-4px)' },
					'40%': { transform: 'translateX(4px)' },
					'50%': { transform: 'translateX(-2px)' },
					'60%': { transform: 'translateX(2px)' },
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'8%': { opacity: '0.9' },
					'9%': { opacity: '1' },
					'32%': { opacity: '1' },
					'33%': { opacity: '0.7' },
					'34%': { opacity: '1' },
					'55%': { opacity: '1' },
					'56%': { opacity: '0.85' },
					'57%': { opacity: '1' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glitch-1': 'glitch-1 2.5s infinite linear',
				'glitch-2': 'glitch-2 2.5s infinite linear',
				'shake': 'shake 3s ease-in-out infinite',
				'flicker': 'flicker 4s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
