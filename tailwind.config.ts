import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — barber's chair meets digital pass, chess theme
        brand: {
          DEFAULT: '#1a6bff',
          50: '#eaf1ff',
          100: '#cfe0ff',
          200: '#9ec1ff',
          300: '#6ea2ff',
          400: '#4787ff',
          500: '#1a6bff',
          600: '#155ae0',
          700: '#1149b3',
          800: '#0d3886',
          900: '#0a2a66'
        },
        // Chess-inspired neutrals
        ivory: '#f5efe6',
        onyx: '#0a0a0c',
        graphite: '#161618',
        slate: '#1f1f23'
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 24s linear infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      },
      backgroundImage: {
        'grid-light': "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
        'grid-dark': "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
