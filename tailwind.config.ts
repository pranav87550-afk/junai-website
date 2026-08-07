import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        void: '#050506',
        ink: '#0a0a0d',
        panel: '#101014',
        hairline: 'rgba(232, 230, 227, 0.08)',
        signal: {
          50: '#fff1f1',
          200: '#ffb3ba',
          400: '#ff5b64',
          500: '#e0202e',
          600: '#c01623',
          700: '#8f0f1a'
        },
        amber: {
          400: '#ff8a4c',
          500: '#ff7a2e'
        },
        chrome: {
          100: '#f3f2f0',
          200: '#e4e3e6',
          300: '#d8d8dc',
          500: '#9b9aa1',
          700: '#5f5e66'
        }
      },
      fontFamily: {
        display: ['var(--font-chakra)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace']
      },
      backgroundImage: {
        'signal-glow': 'radial-gradient(circle at 50% 0%, rgba(224,32,46,0.18), transparent 60%)',
        'amber-glow': 'radial-gradient(circle at 50% 50%, rgba(255,122,46,0.12), transparent 65%)',
        grid: 'linear-gradient(rgba(232,230,227,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(232,230,227,0.04) 1px, transparent 1px)'
      },
      backgroundSize: {
        'grid-cell': '48px 48px'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        drift: 'drift 18s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-12px, 10px)' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
