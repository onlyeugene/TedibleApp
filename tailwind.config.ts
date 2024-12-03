import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		container: {
  			center: true
  		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
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
  		textColor: {
  			primary: '#FEFEFF',
  			inActive: '#ff783457',
  			secondary: '#073126',
  			secondaryLight: '#0C513F',
  			tertiary: '#FF7834',
  			dark: '#000'
  		},
  		backgroundColor: {
  			primary: '#FEFEFF',
  			secondary: '#073126',
  			inActive: '#ff783457',
  			secondaryLight: '#0C513F',
  			tertiary: '#FF7834',
  			dark: '#000'
  		},
  		borderColor: {
  			primary: '#FEFEFF',
  			secondary: '#073126',
  			inActive: '#ff783457',
  			secondaryLight: '#0C513F',
  			tertiary: '#FF7834'
  		},
  		keyframes: {
  			fadeInLeft: {
  				'0%': {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: '1'
  				}
  			},
  			fadeOutRight: {
  				'0%': {
  					transform: 'translateX(0%)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translateX(-100%)',
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			fadeInLeft: 'fadeInLeft 0.5s ease-out',
  			fadeOutRight: 'fadeOutRight 0.5s ease-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),require("tailwind-scrollbar"),
  ],
  
};
export default config;
