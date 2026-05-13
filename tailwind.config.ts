import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Cream / off-white palette (PDF identity)
        cream: {
          DEFAULT: '#f4f1ec',
          50: '#fbf9f5',
          100: '#f4f1ec',
          200: '#ebe6dd',
          300: '#dcd4c5',
          400: '#c8bca5',
          500: '#a89a7c'
        },
        // Ink (dark text on cream + occasional dark sections)
        ink: {
          DEFAULT: '#0d0d0e',
          50: '#fafafa',
          100: '#e5e5e5',
          200: '#a3a3a3',
          300: '#737373',
          400: '#404040',
          500: '#262626',
          600: '#1a1a1a',
          700: '#0f0f0f',
          800: '#0a0a0a',
          900: '#050505',
          950: '#020202'
        },
        // Chrome / silver metallic accents (PDF identity)
        chrome: {
          DEFAULT: '#b8b3a6',
          50: '#fafaf7',
          100: '#f1eee5',
          200: '#e8e2d6',
          300: '#d4ccb9',
          400: '#b8b3a6',
          500: '#9a9485',
          600: '#7a7568',
          700: '#5a5749',
          800: '#3a382e',
          900: '#1c1b15'
        },
        // Steel — darker grey for hierarchy
        steel: {
          DEFAULT: '#6b6b6e',
          light: '#9a9a9d',
          dark: '#3a3a3c'
        },
        // Teal — brand accent (logo gradient)
        teal: {
          DEFAULT: '#0F6F7C',
          50: '#E6F7F8',
          100: '#BFE9EC',
          200: '#80D2D9',
          300: '#40BBC5',
          400: '#00B5C5',
          500: '#0F6F7C',
          600: '#0B5764',
          700: '#08434D',
          800: '#063C46',
          900: '#042830'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace']
      },
      fontSize: {
        'display-2xl': ['clamp(4rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em', fontWeight: '800' }],
        'display-xl': ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-md': ['clamp(1.875rem, 3.5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }]
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Chrome metallic gradient (rubans argentés du PDF)
        'chrome-shimmer': 'linear-gradient(135deg, #e8e2d6 0%, #b8b3a6 25%, #9a9485 50%, #d4ccb9 75%, #b8b3a6 100%)',
        // Teal brand gradient (echoes the logo)
        'teal-shimmer': 'linear-gradient(135deg, #00B5C5 0%, #0F6F7C 55%, #063C46 100%)',
        // Subtle noise overlay
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")"
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-chrome': 'pulseChrome 3s ease-in-out infinite',
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        pulseChrome: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(184, 179, 166, 0.25)' },
          '50%': { boxShadow: '0 0 40px rgba(184, 179, 166, 0.5)' }
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(40px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(40px) rotate(-360deg)' }
        }
      },
      boxShadow: {
        'chrome-glow': '0 0 60px rgba(184, 179, 166, 0.18)',
        'chrome-glow-strong': '0 0 100px rgba(184, 179, 166, 0.32)',
        'teal-glow': '0 0 60px rgba(0, 181, 197, 0.22)',
        'teal-glow-strong': '0 0 100px rgba(0, 181, 197, 0.4)',
        'luxe-light': '0 30px 80px -20px rgba(13, 13, 14, 0.12), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
        'luxe-dark': '0 30px 80px -20px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)'
      },
      transitionTimingFunction: {
        'luxe': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'snappy': 'cubic-bezier(0.4, 0, 0.2, 1)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
};

export default config;
